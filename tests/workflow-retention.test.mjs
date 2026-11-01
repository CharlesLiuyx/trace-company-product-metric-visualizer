import test from 'node:test';
import assert from 'node:assert/strict';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { createHash, randomUUID } from 'node:crypto';
import { existsSync } from 'node:fs';
import { mkdtemp, mkdir, writeFile, readFile, rm, utimes } from 'node:fs/promises';
import { retireFinishedBuilds, sweepUnreferencedRecordChunks, runGarbageCollection, runRetention } from '../scripts/lib/workflow-retention.mjs';
import { sweepStaleWorkbenchRecords } from '../scripts/lib/workbench-records.mjs';
import { readDatasetBuild } from '../scripts/lib/dataset-build-store.mjs';
import { showAsset } from '../scripts/lib/asset-workflow.mjs';
import { checkPendingQueue } from '../scripts/lib/pending-queue.mjs';
import { rootDir } from '../scripts/lib/project.mjs';

const sha = (bytes) => createHash('sha256').update(bytes).digest('hex');
const HOUR = 60 * 60 * 1000;
const git = (root, ...args) => {
  const run = spawnSync('git', ['-c', 'core.hooksPath=/dev/null', '-c', 'user.name=Synthetic Test', '-c', 'user.email=synthetic@example.invalid', ...args], { cwd: root, encoding: 'utf8' });
  assert.equal(run.status, 0, run.stderr);
  return run.stdout;
};
const age = (file, ms) => utimes(file, new Date(Date.now() - ms), new Date(Date.now() - ms));

// One published, pushed and archived Build in a temporary Git checkout whose
// HEAD no longer tracks the Source in input/processing/.
async function fixture(t) {
  const root = await mkdtemp(path.join(os.tmpdir(), 'trace-workflow-retention-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const put = async (file, value) => {
    await mkdir(path.dirname(path.join(root, file)), { recursive: true });
    await writeFile(path.join(root, file), typeof value === 'string' || Buffer.isBuffer(value) ? value : `${JSON.stringify(value, null, 2)}\n`);
  };
  const buildId = `build-${randomUUID()}`, source = Buffer.from('synthetic source bytes');
  const digest = `sha256:${sha(source)}`, plan = sha('plan'), published = `sha256:${sha('published')}`;
  const chunk = sha('chunk');
  await put('README.md', 'fixture\n');
  git(root, 'init', '-q');
  git(root, 'add', 'README.md');
  git(root, 'commit', '-q', '-m', 'fixture');
  await put(`output/builds/${buildId}/manifest.json`, { buildId, key: 'acme-q1-fy25', adapter: 'metric-observations', state: 'SEALED', revision: 9,
    review: { status: 'accepted' }, sources: [{ uri: 'input/pending/acme-q1-fy25.png', processingUri: 'input/processing/acme-q1-fy25.png', processedUri: 'input/processed/acme-q1-fy25.png', digest }],
    receipts: [{ state: 'AUTHORED', digest: `sha256:${sha('authored')}`, recordedAt: '2026-10-20T00:00:00.000Z', payload: { artifacts: { $traceList: 'trace-record-list/v1', chunks: [chunk] } } },
      { state: 'SEALED', digest: `sha256:${sha('sealed')}`, recordedAt: '2026-10-21T00:00:00.000Z' }] });
  await put(`output/builds/${buildId}/cleaned.json`, { buildId, reason: 'published-and-archived' });
  await put(`output/builds/${buildId}/session.json`, { owner: 'synthetic' });
  await put(`output/storage/lists/${chunk}.json`, '[]');
  await age(path.join(root, `output/storage/lists/${chunk}.json`), 2 * HOUR);
  await put(`output/local-view/builds/${buildId}.json`, { buildId });
  await put(`output/source-claims/${digest.slice(7)}.json`, { key: 'acme-q1-fy25', buildId, sourceDigest: digest });
  await put('input/processed/acme-q1-fy25.png', source);
  await put(`output/publications/plans/${plan}/plan.json`, { builds: [{ buildId, key: 'acme-q1-fy25' }] });
  const receipt = { state: 'PUBLISHED', publishedDigest: published, planDigest: `sha256:${plan}`, previousDigest: `sha256:${sha('base')}` };
  await put('output/publications/receipts/first.json', receipt);
  await put('output/publications/current.json', receipt);
  await put('output/git-transports/transport-a/receipt.json', { state: 'PUSHED', publishedDigest: published });
  return { root, put, buildId, digest, chunk, published };
}

test('a Build is kept while any retirement condition is missing', async (t) => {
  await t.test('not cleaned', async (t) => {
    const { root, buildId } = await fixture(t);
    await rm(path.join(root, `output/builds/${buildId}/cleaned.json`));
    assert.deepEqual((await retireFinishedBuilds(root)).removed, []);
    assert.ok(existsSync(path.join(root, `output/builds/${buildId}/manifest.json`)));
  });
  await t.test('publication not pushed', async (t) => {
    const { root, put, buildId, published } = await fixture(t);
    await put('output/git-transports/transport-a/receipt.json', { state: 'COMMITTED', publishedDigest: published });
    const result = await retireFinishedBuilds(root);
    assert.deepEqual(result.removed, []);
    assert.deepEqual(result.skipped, { 'publication not pushed': 1 });
    assert.ok(existsSync(path.join(root, `output/builds/${buildId}/manifest.json`)));
  });
  await t.test('Source still in input/processing on disk', async (t) => {
    const { root, put, buildId } = await fixture(t);
    await put('input/processing/acme-q1-fy25.png', 'synthetic source bytes');
    assert.deepEqual((await retireFinishedBuilds(root)).skipped, { 'Source archive not committed': 1 });
    assert.ok(existsSync(path.join(root, `output/builds/${buildId}/manifest.json`)));
  });
  await t.test('archive removal not yet committed', async (t) => {
    const { root, put, buildId } = await fixture(t);
    await put('input/processing/acme-q1-fy25.png', 'synthetic source bytes');
    git(root, 'add', 'input/processing/acme-q1-fy25.png');
    git(root, 'commit', '-q', '-m', 'claim');
    await rm(path.join(root, 'input/processing/acme-q1-fy25.png'));
    assert.deepEqual((await retireFinishedBuilds(root)).skipped, { 'Source archive not committed': 1 });
    assert.ok(existsSync(path.join(root, `output/builds/${buildId}/manifest.json`)));
  });
});

test('a later push covers earlier publications through the previousDigest chain', async (t) => {
  const { root, put, buildId, published } = await fixture(t);
  const later = `sha256:${sha('later')}`;
  await put('output/publications/receipts/second.json', { state: 'PUBLISHED', publishedDigest: later, planDigest: `sha256:${sha('plan-2')}`, previousDigest: published });
  await put('output/git-transports/transport-a/receipt.json', { state: 'PUSHED', publishedDigest: later });
  assert.deepEqual((await retireFinishedBuilds(root)).removed, [buildId]);
});

test('a retired Build leaves its summary in history.json and reads as BUILD_RETIRED', async (t) => {
  const { root, put, buildId, digest } = await fixture(t);
  await put('data/dataset-manifest.js', '(function () { window.__DATASET_MANIFEST__ = { datasets: [] }; })();\n');
  await put('input/pending/duplicate.png', 'synthetic source bytes');
  const pendingBefore = checkPendingQueue({ projectRoot: root });
  assert.equal(pendingBefore.blocked[0].type, 'already-processed');

  const preview = await retireFinishedBuilds(root, { dryRun: true });
  assert.deepEqual(preview.removed, [buildId]);
  assert.ok(preview.bytes > 0);
  assert.ok(existsSync(path.join(root, `output/builds/${buildId}`)), 'dry run deletes nothing');

  const result = await retireFinishedBuilds(root);
  assert.deepEqual(result.removed, [buildId]);
  assert.equal(result.bytes, preview.bytes);
  assert.equal(existsSync(path.join(root, `output/builds/${buildId}`)), false);
  assert.equal(existsSync(path.join(root, `output/local-view/builds/${buildId}.json`)), false);
  // Source bytes in input/processed/ keep the duplicate guard; the claim is redundant.
  assert.equal(existsSync(path.join(root, `output/source-claims/${digest.slice(7)}.json`)), false);
  assert.deepEqual(checkPendingQueue({ projectRoot: root }), pendingBefore);

  const history = JSON.parse(await readFile(path.join(root, 'output/meta/history.json'), 'utf8'));
  assert.equal(history.protocol, 'artifact-history/v1');
  assert.equal(history.historicalOnly, true);
  assert.deepEqual(history.builds.map((build) => [build.buildId, build.key, build.historicalState, build.lastRecordedAt]), [[buildId, 'acme-q1-fy25', 'SEALED', '2026-10-21T00:00:00.000Z']]);
  assert.equal(history.builds[0].sources[0].digest, digest);

  await assert.rejects(readDatasetBuild(buildId, { buildRoot: path.join(root, 'output/builds') }), (error) => error.code === 'BUILD_RETIRED'
    && /acme-q1-fy25/.test(error.message) && /historicalState SEALED/.test(error.message) && /2026-10-21T00:00:00.000Z/.test(error.message) && /output\/meta\/history\.json/.test(error.message));
  await assert.rejects(showAsset(buildId, root), (error) => error.code === 'BUILD_RETIRED');
  await assert.rejects(readDatasetBuild(`build-${randomUUID()}`, { buildRoot: path.join(root, 'output/builds') }), (error) => error.code === 'BUILD_NOT_FOUND');
  assert.deepEqual((await retireFinishedBuilds(root)).removed, [], 'a second pass is a no-op');
});

test('a claim is kept when input/processed does not hold the Source bytes', async (t) => {
  const { root, buildId, digest } = await fixture(t);
  await rm(path.join(root, 'input/processed/acme-q1-fy25.png'));
  assert.deepEqual((await retireFinishedBuilds(root)).removed, [buildId]);
  assert.ok(existsSync(path.join(root, `output/source-claims/${digest.slice(7)}.json`)));
});

test('runRetention retires the Build and sweeps the chunks only its manifest referenced', async (t) => {
  const { root, buildId, chunk } = await fixture(t);
  const result = await runRetention(root);
  assert.deepEqual(result.gc.builds.removed, [buildId]);
  assert.equal(result.gc.chunks.removed, 1);
  assert.equal(existsSync(path.join(root, `output/storage/lists/${chunk}.json`)), false);
});

test('the chunk sweep removes only unreferenced chunks past the one-hour grace period', async (t) => {
  const { root, put } = await fixture(t);
  const [referenced, stale, fresh] = ['referenced', 'stale', 'fresh'].map(sha);
  for (const digest of [referenced, stale, fresh]) await put(`output/storage/lists/${digest}.json`, '[{"path":"x"}]');
  for (const digest of [referenced, stale]) await age(path.join(root, `output/storage/lists/${digest}.json`), 2 * HOUR);
  await put('output/publications/trees/x/.trace-snapshot.json', { entries: { chunks: [`${referenced}`] } });
  const preview = await sweepUnreferencedRecordChunks(root, { dryRun: true, ignore: [path.join(root, 'output/builds')] });
  assert.equal(preview.removed, 2, 'the stale chunk and the fixture Build chunk once its manifest is ignored');
  assert.equal(existsSync(path.join(root, `output/storage/lists/${stale}.json`)), true);
  const result = await sweepUnreferencedRecordChunks(root);
  assert.equal(result.removed, 1);
  assert.deepEqual(result.skipped, { 'within grace period': 1 });
  assert.equal(existsSync(path.join(root, `output/storage/lists/${stale}.json`)), false);
  assert.equal(existsSync(path.join(root, `output/storage/lists/${fresh}.json`)), true);
  assert.equal(existsSync(path.join(root, `output/storage/lists/${referenced}.json`)), true);
});

test('chunks listed by a referenced index stay; an unreferenced index and its exclusive chunks go', async (t) => {
  const { root, put } = await fixture(t);
  const [shared, own, orphan] = ['shared', 'own', 'orphan'].map(sha);
  const index = (list) => { const bytes = JSON.stringify(list); return [sha(bytes), bytes]; };
  const [used, usedBytes] = index([shared, own]), [unused, unusedBytes] = index([shared, orphan]);
  const store = (digest) => path.join(root, `output/storage/lists/${digest}.json`);
  for (const [digest, bytes] of [[shared, '[{"path":"a"}]'], [own, '[{"path":"b"}]'], [orphan, '[{"path":"c"}]'], [used, usedBytes], [unused, unusedBytes]]) {
    await put(`output/storage/lists/${digest}.json`, bytes);
    await age(store(digest), 2 * HOUR);
  }
  await put(`output/builds/build-${randomUUID()}/objects/review/a.json`, { artifacts: { $traceList: 'trace-record-list/v1', length: 2, digest: sha('list'), index: used } });
  await sweepUnreferencedRecordChunks(root);
  for (const digest of [used, shared, own]) assert.equal(existsSync(store(digest)), true, digest);
  for (const digest of [unused, orphan]) assert.equal(existsSync(store(digest)), false, digest);
});

test('stale workbench server records are removed, and previews only without a live server', async (t) => {
  const { root, put } = await fixture(t);
  await put('output/workbench/previews/project/old/site/index.html', 'old');
  await put('output/workbench/servers/dead.json', { pid: 2 ** 22 + 12345, url: 'http://127.0.0.1:1/' });
  await put('output/workbench/servers/live.json', { pid: process.pid, url: 'http://127.0.0.1:2/' });
  const kept = await sweepStaleWorkbenchRecords(root, { measure: true });
  assert.deepEqual(kept.removed, ['output/workbench/servers/dead.json']);
  assert.equal(existsSync(path.join(root, 'output/workbench/previews/project/old/site/index.html')), true);
  await rm(path.join(root, 'output/workbench/servers/live.json'));
  await put('output/workbench/servers/dead.json', { pid: 2 ** 22 + 12345 });
  const swept = await sweepStaleWorkbenchRecords(root, { measure: true });
  assert.deepEqual(swept.removed, ['output/workbench/servers/dead.json', 'output/workbench/previews']);
  assert.equal(existsSync(path.join(root, 'output/workbench/previews')), false);
});

test('clean:artifacts --gc --dry-run reports every sweep and deletes nothing', async (t) => {
  const { root, put, buildId, chunk } = await fixture(t);
  await put('output/workbench/previews/project/old/site/index.html', 'old');
  await put('output/workbench/servers/dead.json', { pid: 2 ** 22 + 12345 });
  await put('compare/runs/old-run/diff.png', 'diff');
  await put('compare/runs/new-run/diff.png', 'diff');
  await age(path.join(root, 'compare/runs/old-run/diff.png'), 8 * 24 * HOUR);
  await age(path.join(root, 'compare/runs/old-run'), 8 * 24 * HOUR);
  await put('_site/index.html', 'derived');
  const cli = spawnSync(process.execPath, [path.join(rootDir, 'scripts/clean-artifacts.mjs'), '--gc', '--dry-run', '--json', '--root', root], { encoding: 'utf8' });
  assert.equal(cli.status, 0, cli.stderr);
  const { retention } = JSON.parse(cli.stdout);
  assert.equal(retention.dryRun, true);
  assert.deepEqual(retention.gc.builds.removed, [buildId]);
  assert.equal(retention.gc.chunks.removed, 1);
  assert.deepEqual(retention.gc.workbench.removed, ['output/workbench/servers/dead.json', 'output/workbench/previews']);
  assert.deepEqual(retention.gc.compareRuns.removed, ['compare/runs/old-run']);
  assert.deepEqual(retention.gc.derived.removed, ['_site']);
  for (const file of [`output/builds/${buildId}/manifest.json`, `output/storage/lists/${chunk}.json`, 'output/workbench/servers/dead.json',
    'output/workbench/previews/project/old/site/index.html', 'compare/runs/old-run/diff.png', '_site/index.html']) assert.ok(existsSync(path.join(root, file)), file);
  assert.equal(existsSync(path.join(root, 'output/meta/history.json')), false);
  assert.equal(existsSync(path.join(root, 'output/publications/.publish.lock')), false);
  assert.equal(spawnSync(process.execPath, [path.join(rootDir, 'scripts/clean-artifacts.mjs'), '--gc', '--root', root]).status, 1, '--root is dry-run only');

  const real = await runGarbageCollection(root);
  assert.deepEqual(real.gc.compareRuns.removed, ['compare/runs/old-run']);
  assert.equal(existsSync(path.join(root, 'compare/runs/new-run/diff.png')), true);
  assert.equal(existsSync(path.join(root, `output/builds/${buildId}`)), false);
});
