import { readLocalView } from '../scripts/lib/workflow-local-view.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
import path from 'node:path';
import { mkdir, writeFile, readFile, readdir, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { bytesDigest, atomicJson } from '../scripts/lib/workflow-files.mjs';
import { startAsset, continueAsset, reviewAsset, sealAsset, showAsset } from '../scripts/lib/asset-workflow.mjs';
import { planAssetPublication, publishAssetPlan, releasePublished } from '../scripts/lib/workflow-publication.mjs';
import { processingSourceList, archiveProcessingSources } from '../scripts/lib/workflow-recovery.mjs';
import { startStaticServer } from '../scripts/dev-server.mjs';
import { runRetention } from '../scripts/lib/workflow-retention.mjs';
import { randomUUID } from 'node:crypto';
import { literal, facts, fixture, intake, reviewFor, completed } from './helpers/asset-workflow-fixture.mjs';

test('new Builds use current application code even when the published data tree contains an older UI', async (t) => {
  const root = await fixture(t), first = await completed(root, 'app-baseline', facts());
  const plan = await planAssetPublication([first.buildId], root);
  const published = await publishAssetPlan(plan.planDigest, root);
  await writeFile(path.join(root, 'src/runtime.js'), '// current application version\n');
  await writeFile(path.join(root, 'input/pending/current-app.txt'), 'A different Source for the next Build.');
  const next = await startAsset({ source: 'input/pending/current-app.txt', key: 'current-app', facts: facts() }, root);
  assert.equal(await readFile(path.join(next.workspace, 'src/runtime.js'), 'utf8'), '// current application version\n');
  assert.equal(await readFile(path.join(root, `output/publications/trees/${published.publishedDigest.slice(7)}/src/runtime.js`), 'utf8'), '// fixture runtime\n');
  await assert.rejects(planAssetPublication([first.buildId], root), /Application code differs/);
});
test('publication rejects partial or changed candidates, commits atomically, recovers unknown outcomes and is idempotent', async (t) => {
  const root = await fixture(t);
  const started = await completed(root, 'example-a-q1');
  const preview = await readLocalView(root);
  assert.equal(preview.mode, 'review-pending');
  assert.equal(preview.buildId, started.buildId);
  assert.ok(preview.target.endsWith('/workspace/index.html'));
  const plan = await planAssetPublication([started.buildId], root);
  await assert.rejects(publishAssetPlan(plan.planDigest, root, { beforePointerCommit: () => { throw new Error('simulated disk failure'); } }), /simulated disk/);
  assert.equal(existsSync(path.join(root, 'output/publications/current.json')), false);
  await assert.rejects(publishAssetPlan(plan.planDigest, root, { afterPointerCommit: () => { throw new Error('simulated unknown outcome'); } }), /unknown outcome/);
  const receipt = await publishAssetPlan(plan.planDigest, root);
  assert.equal(receipt.state, 'PUBLISHED');
  const selected = await readLocalView(root);
  assert.equal(selected.mode, 'published');
  assert.ok(selected.target.includes(receipt.publishedDigest.slice(7)));
  assert.deepEqual(await publishAssetPlan(plan.planDigest, root), receipt);
  assert.equal(existsSync(path.join(root, 'data/metric-observations/example-a-q1.json')), false);
  const server = await startStaticServer({ root, published: true }); t.after(server.close);
  const response = await fetch(server.url, { redirect: 'manual' });
  assert.equal(response.status, 302);
  const location = response.headers.get('location');
  assert.ok(location.includes(receipt.publishedDigest.slice(7)));
  const catalog = await (await fetch(new URL(location + 'data/metric-observations.js', server.url))).text();
  assert.match(catalog, /example-a-q1/);
  const failed = await releasePublished({ publishedDigest: receipt.publishedDigest, target: 'site' }, root, { runRelease: () => { throw new Error('build failed'); } });
  assert.equal(failed.state, 'RELEASE_FAILED');
  assert.equal(JSON.parse(await readFile(path.join(root, 'output/publications/current.json'))).publishedDigest, receipt.publishedDigest);
  const retried = await releasePublished({ publishedDigest: receipt.publishedDigest, target: 'site', retryOf: failed.attemptId }, root, { runRelease: async ({ candidate }) => { await mkdir(path.join(candidate, '_site')); await writeFile(path.join(candidate, '_site/index.html'), 'fixture'); } });
  assert.equal(retried.state, 'RELEASED'); assert.notEqual(retried.attemptId, failed.attemptId);
});
test('concurrent plans conflict without blind retry and duplicate observations cannot hide under another Source key', async (t) => {
  const root = await fixture(t);
  const a = await completed(root, 'first-source');
  // Different immutable source bytes for the second task; semantic identity
  // remains the same so the combined projection must detect duplication.
  await writeFile(path.join(root, 'input/pending/second-source.md'), literal + '\n');
  const b = await startAsset({ source: 'input/pending/second-source.md', key: 'second-source', facts: facts(literal + '\n') }, root);
  const next = await continueAsset(b.buildId, root); await reviewAsset(b.buildId, reviewFor(next), root); await sealAsset(b.buildId, root);
  await assert.rejects(planAssetPublication([a.buildId, b.buildId], root), /Metric already exists/);
  const planA = await planAssetPublication([a.buildId], root);
  const planB = await planAssetPublication([b.buildId], root);
  const planFolder = (plan) => path.join(root, 'output/publications/plans', plan.planDigest.slice(7));
  assert.ok(existsSync(path.join(planFolder(planB), 'data')), 'an open plan carries its verified candidate tree');
  await publishAssetPlan(planA.planDigest, root);
  // The committed plan and the plan whose base moved keep only their identity.
  assert.deepEqual(await readdir(planFolder(planA)), ['plan.json']);
  assert.deepEqual(await readdir(planFolder(planB)), ['plan.json']);
  await assert.rejects(publishAssetPlan(planB.planDigest, root), (error) => error.code === 'PUBLICATION_CONFLICT');
  await assert.rejects(publishAssetPlan(planB.planDigest, root), (error) => error.code === 'PUBLICATION_CONFLICT');
  assert.deepEqual((await readdir(planFolder(planB))).sort(), ['conflict.json', 'plan.json']);
});
test('source relocation consumes an exact operator-confirmed full list and never overwrites a different archive', async (t) => {
  const root = await fixture(t); const started = await intake(root);
  const list = await processingSourceList(root);
  await assert.rejects(archiveProcessingSources({ kind: 'review-completed', operator: 'fixture', confirmed: true, sourceListDigest: bytesDigest('old') }, root), /list changed/);
  await mkdir(path.join(root, 'input/processed')); await writeFile(path.join(root, 'input/processed/example-a-q1.txt'), 'different');
  await assert.rejects(archiveProcessingSources({ kind: 'review-completed', operator: 'fixture', confirmed: true, sourceListDigest: list.digest }, root), /Archive collision/);
  assert.ok(existsSync(path.join(root, 'input/processing/example-a-q1.txt')));
  await rm(path.join(root, 'input/processed/example-a-q1.txt'));
  const receipt = await archiveProcessingSources({ kind: 'review-completed', operator: 'fixture', confirmed: true, sourceListDigest: list.digest }, root);
  assert.equal(receipt.moved.length, 1); assert.ok(existsSync(path.join(started.workspace, 'input/processing/example-a-q1.txt')));
});
test('retention removes finished Builds and snapshots no unpushed publication or open Build needs', async (t) => {
  const root = await fixture(t);
  const trees = () => readdir(path.join(root, 'output/publications/trees')).catch(() => []);
  const bases = () => readdir(path.join(root, 'output/workflow-bases')).catch(() => []);
  const archive = async (buildId) => {
    const list = await processingSourceList(root, [buildId]);
    await archiveProcessingSources({ kind: 'review-completed', confirmed: true, operator: 'synthetic test operator', sourceListDigest: list.digest, entries: list.entries }, root);
  };
  const push = (publishedDigest) => atomicJson(path.join(root, `output/git-transports/transport-${randomUUID()}/receipt.json`), { state: 'PUSHED', publishedDigest });
  const buildFiles = (buildId) => readdir(path.join(root, 'output/builds', buildId)).then((names) => names.filter((name) => !name.startsWith('.')).sort());

  const a = await completed(root, 'first-source');
  const first = await publishAssetPlan((await planAssetPublication([a.buildId], root)).planDigest, root);
  const [rootBase] = await bases();
  assert.ok(rootBase, 'the first Build froze the working tree as its base');
  // Published but not archived: the Build may still be pushed and archived later.
  assert.deepEqual((await runRetention(root)).builds.removed, []);
  await archive(a.buildId);
  const afterArchive = await runRetention(root);
  assert.deepEqual(afterArchive.builds.removed, [{ buildId: a.buildId, reason: 'published-and-archived' }]);
  assert.deepEqual(await buildFiles(a.buildId), ['cleaned.json', 'manifest.json']);
  await assert.rejects(showAsset(a.buildId, root), (error) => error.code === 'BUILD_CLEANED');
  // Unpushed: Git hand-off still merges against the publication's base.
  assert.deepEqual(afterArchive.snapshots.removed, []);
  assert.deepEqual(await bases(), [rootBase]);

  await push(first.publishedDigest);
  assert.deepEqual((await runRetention(root)).snapshots.removed, [`output/workflow-bases/${rootBase}`]);
  assert.deepEqual(await trees(), [first.publishedDigest.slice(7)]);

  const text = literal + '\n';
  await writeFile(path.join(root, 'input/pending/other-source.md'), text);
  const b = await startAsset({ source: 'input/pending/other-source.md', key: 'other-source', facts: facts(text, 'other-subject') }, root);
  const next = await continueAsset(b.buildId, root); await reviewAsset(b.buildId, reviewFor(next), root); await sealAsset(b.buildId, root);
  const second = await publishAssetPlan((await planAssetPublication([b.buildId], root)).planDigest, root);
  await push(second.publishedDigest);
  // The open Build still references the first tree as its base.
  assert.deepEqual((await runRetention(root)).snapshots.removed, []);
  assert.deepEqual((await trees()).sort(), [first.publishedDigest.slice(7), second.publishedDigest.slice(7)].sort());
  await archive(b.buildId);
  const final = await runRetention(root);
  assert.deepEqual(final.builds.removed.map((item) => item.buildId), [b.buildId]);
  assert.deepEqual(final.snapshots.removed, [`output/publications/trees/${first.publishedDigest.slice(7)}`]);
  assert.deepEqual(await trees(), [second.publishedDigest.slice(7)]);
});
