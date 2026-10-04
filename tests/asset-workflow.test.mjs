import { materializeWorkspace } from '../scripts/lib/workspace-storage.mjs';
import { readLocalView } from '../scripts/lib/workflow-local-view.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
import path from 'node:path';
import os from 'node:os';
import { mkdtemp, mkdir, writeFile, readFile, readdir, cp, symlink, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { PNG } from 'pngjs';
import { rootDir } from '../scripts/lib/project.mjs';
import { compileMetricFacts, metricIdentity } from '../scripts/lib/metric-source.mjs';
import { bytesDigest, fileManifest } from '../scripts/lib/workflow-files.mjs';
import { startAsset, continueAsset, reviewAsset, acceptAsset, acceptAssets, sealAsset, showAsset, buildContext } from '../scripts/lib/asset-workflow.mjs';
import { planAssetPublication, publishAssetPlan, releasePublished } from '../scripts/lib/workflow-publication.mjs';
import { refreshAssetWorkspace, processingSourceList, archiveProcessingSources } from '../scripts/lib/workflow-recovery.mjs';
import { renderAssetReview } from '../scripts/lib/workflow-review.mjs';
import { spawn } from 'node:child_process';
import { startStaticServer } from '../scripts/dev-server.mjs';
import { recordAssetBatch } from '../scripts/lib/workflow-batch.mjs';
import { recordWorkflowFeedback } from '../scripts/lib/workflow-feedback.mjs';
import { recordAssetVersion } from '../scripts/lib/workflow-assets.mjs';
import { readBuildObject } from '../scripts/lib/dataset-build-store.mjs';
import { acquireBuildSession } from '../scripts/lib/workflow-session.mjs';
import { siteContentDigest } from '../scripts/lib/site-release-identity.mjs';
import { runRetention } from '../scripts/lib/workflow-retention.mjs';
import { randomUUID } from 'node:crypto';
import { atomicJson } from '../scripts/lib/workflow-files.mjs';

const literal = '示例公司 A，2026 年第一季度收入 100 亿元，净利润 20 亿元。';
function facts(text = literal, id = 'example-a') {
  const part = (quote) => ({ quote, anchor: { type: 'text-range', range: [text.indexOf(quote), text.indexOf(quote) + quote.length] } });
  return { protocol: 'source-facts/v1', subject: { type: 'company', id, name: '示例公司 A' }, period: '2026 年第一季度', basis: 'unspecified',
    context: [{ field: 'subject', ...part('示例公司 A') }, { field: 'period', ...part('2026 年第一季度') }],
    metrics: [{ id: 'revenue', name: '收入', value: '100', unit: '亿元', currency: 'CNY', literal: '100 亿元', ...part('收入 100 亿元') }, { id: 'net-profit', name: '净利润', value: '20', unit: '亿元', currency: 'CNY', literal: '20 亿元', ...part('净利润 20 亿元') }] };
}
const textSource = { locator: 'input/processed/example.txt', format: 'text', charLength: literal.length, digest: bytesDigest(literal), availability: 'local-only' };
test('text and PNG facts normalize to identical metric identities and exact values', () => {
  const input = facts();
  const text = compileMetricFacts(input, { key: 'example', source: textSource, text: literal });
  const picture = structuredClone(input);
  for (const [i, item] of [...picture.context, ...picture.metrics].entries()) item.anchor = { type: 'image-box', box: [0, i * 10, 100, 10] };
  const image = compileMetricFacts(picture, { key: 'example', source: { locator: 'source.png', digest: bytesDigest('image'), width: 100, height: 100 } });
  assert.deepEqual(text.record.metrics.map((item) => [metricIdentity(text.record, item), item.value, item.unit, item.currency]), image.record.metrics.map((item) => [metricIdentity(image.record, item), item.value, item.unit, item.currency]));
  assert.deepEqual(text.objects.map((item) => [item.id, item.class]), [['metric.revenue', 'value'], ['metric.net-profit', 'value'], ['context.0', 'label'], ['context.1', 'label']]);
});
test('omissions, wrong anchors, fabricated values and currency swaps fail before authoring', () => {
  const input = facts(); input.metrics.pop();
  assert.throws(() => compileMetricFacts(input, { key: 'example', source: textSource, text: literal }), /Unaccounted Source text/);
  const badValue = facts(); badValue.metrics[0].value = '101';
  assert.throws(() => compileMetricFacts(badValue, { key: 'example', source: textSource, text: literal }), /literal and value disagree/);
  const badAnchor = facts(); badAnchor.metrics[0].anchor.range[0]++;
  assert.throws(() => compileMetricFacts(badAnchor, { key: 'example', source: textSource, text: literal }), /exact text range/);
  const badCurrency = facts(); badCurrency.metrics[0].currency = 'USD';
  assert.throws(() => compileMetricFacts(badCurrency, { key: 'example', source: textSource, text: literal }), /currency disagrees/);
});
async function fixture(t) {
  const root = await mkdtemp(path.join(os.tmpdir(), 'trace-asset-workflow-test-'));
  for (const dir of ['scripts', 'docs']) await cp(path.join(rootDir, dir), path.join(root, dir), { recursive: true });
  for (const file of ['package.json', 'pnpm-lock.yaml', 'AGENTS.md', 'CONTEXT.md', '.gitignore']) await cp(path.join(rootDir, file), path.join(root, file));
  for (const dir of ['input/pending', 'data', 'src']) await mkdir(path.join(root, dir), { recursive: true });
  await cp(path.join(rootDir, 'src/trace-domain.js'), path.join(root, 'src/trace-domain.js'));
  await symlink(path.join(rootDir, 'node_modules'), path.join(root, 'node_modules'));
  await writeFile(path.join(root, 'src/runtime.js'), '// fixture runtime\n');
  await writeFile(path.join(root, 'index.html'), '<html><script src="data/metric-observations.js"></script></html>');
  await writeFile(path.join(root, 'data/metric-observations.js'), '// Generated by update:metric-catalog. Do not edit.\nwindow.METRIC_OBSERVATIONS = [];\n');
  t.after(() => rm(root, { recursive: true, force: true }));
  return root;
}
async function intake(root, key = 'example-a-q1', input = facts()) {
  await writeFile(path.join(root, `input/pending/${key}.txt`), literal);
  return startAsset({ source: `input/pending/${key}.txt`, key, facts: input }, root);
}
test('two actual CLI Sessions intake independently, fence wrong writers, and archive only the selected Source', async (t) => {
  const root = await fixture(t);
  await writeFile(path.join(root, 'facts.json'), JSON.stringify(facts()));
  await writeFile(path.join(root, 'input/pending/session-a.txt'), literal);
  await writeFile(path.join(root, 'input/pending/session-b.txt'), literal + '\nA distinct second Source.');
  const cli = (args) => new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [path.join(root, 'scripts/record-workflow.mjs'), ...args, '--json'], { cwd: root });
    let stdout = '', stderr = '';
    child.stdout.on('data', (chunk) => { stdout += chunk; }); child.stderr.on('data', (chunk) => { stderr += chunk; });
    child.on('error', reject); child.on('close', (code) => resolve({ code, stdout, stderr }));
  });
  const results = await Promise.all(['a', 'b'].map((name) => cli(['start', '--source', `input/pending/session-${name}.txt`, '--key', `session-${name}`, '--facts', 'facts.json', '--session', `owner-${name}`])));
  for (const result of results) assert.equal(result.code, 0, result.stderr);
  const [a, b] = results.map((result) => JSON.parse(result.stdout));
  assert.notEqual(a.buildId, b.buildId); assert.notEqual(a.workspace, b.workspace); assert.notEqual(a.session.generation, b.session.generation);
  const wrong = await cli(['prepare', a.buildId, '--session', 'owner-b', '--generation', a.session.generation]);
  assert.notEqual(wrong.code, 0); assert.match(wrong.stderr, /requires its active Session/);
  await writeFile(path.join(root, 'input/pending/renamed-copy.txt'), literal);
  const duplicate = await cli(['start', '--source', 'input/pending/renamed-copy.txt', '--key', 'renamed-copy', '--facts', 'facts.json', '--session', 'owner-c']);
  assert.notEqual(duplicate.code, 0); assert.match(duplicate.stderr, /Source already claimed/);
  assert.ok(existsSync(path.join(root, 'input/pending/renamed-copy.txt')));
  const selected = await processingSourceList(root, [a.buildId]);
  assert.equal(selected.entries.length, 1);
  await archiveProcessingSources({ kind: 'review-completed', confirmed: true, operator: 'synthetic test operator', sourceListDigest: selected.digest, entries: selected.entries }, root);
  assert.ok(!existsSync(path.join(root, 'input/processing/session-a.txt')));
  assert.ok(existsSync(path.join(root, 'input/processing/session-b.txt')));
});
test('record:workflow refuses to run from a Build workspace and leaves root registrations to the project root', async (t) => {
  const root = await fixture(t), started = await intake(root, 'workspace-cwd');
  const run = await new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [path.join(started.workspace, 'scripts/record-workflow.mjs'), 'continue', started.buildId, '--json'], { cwd: started.workspace });
    let stderr = '';
    child.stderr.on('data', (chunk) => { stderr += chunk; });
    child.on('error', reject); child.on('close', (code) => resolve({ code, stderr }));
  });
  assert.notEqual(run.code, 0); assert.match(run.stderr, /must run from the project root, not a Build workspace/);
  assert.ok(!existsSync(path.join(started.workspace, 'output/local-view')));
  const current = await continueAsset(started.buildId, root);
  assert.equal(current.next, 'review');
  assert.equal(JSON.parse(await readFile(path.join(root, `output/local-view/builds/${started.buildId}.json`), 'utf8')).revision, current.reviewToken);
});
function reviewFor(current, decision = 'accepted') {
  return { reviewToken: current.reviewToken, reviewer: 'synthetic-test-reviewer', decision, note: 'Synthetic fixture; not a real dataset acceptance' };
}
async function completed(root, key, input) {
  const started = await intake(root, key, input);
  const current = await continueAsset(started.buildId, root);
  await reviewAsset(started.buildId, reviewFor(current), root);
  await sealAsset(started.buildId, root);
  return started;
}
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
test('text intake to sealed Build preserves source, isolates drafts, requires review and emits a usable sheet', async (t) => {
  const root = await fixture(t);
  const base = await fileManifest(root);
  const started = await intake(root);
  const repeated = await startAsset({ source: 'input/pending/example-a-q1.txt', key: 'example-a-q1', facts: facts() }, root);
  assert.equal(repeated.buildId, started.buildId);
  let current = await continueAsset(started.buildId, root);
  assert.equal(current.next, 'review');
  assert.equal((await fileManifest(root)).digest, base.digest, 'canonical files stay unchanged during authoring');
  await assert.rejects(sealAsset(started.buildId, root), /BASELINE_STAGED/);
  await assert.rejects(reviewAsset(started.buildId, { ...reviewFor(current), reviewToken: bytesDigest('foreign') }, root), /exact processing-sheet token/);
  const sheet = await renderAssetReview(started.buildId, root);
  const html = await readFile(sheet.path, 'utf8');
  assert.ok(html.includes('100') && html.includes('downloadReview') && !html.includes('{{CONTENT}}'));
  const missingHuman = reviewFor(current); delete missingHuman.reviewer;
  await assert.rejects(reviewAsset(started.buildId, missingHuman, root), /reviewer, decision and a concrete note/);
  assert.equal((await showAsset(started.buildId, root)).state, 'AUTHORED');
  await reviewAsset(started.buildId, reviewFor(current), root);
  assert.equal((await sealAsset(started.buildId, root)).state, 'SEALED');
  // A shared catalog addition is not a change to this Build's contribution.
  await writeFile(path.join(started.workspace, 'data/dataset-manifest.js'), '// unrelated registration change\n');
  assert.equal((await showAsset(started.buildId, root)).fresh, true);
  await writeFile(path.join(started.workspace, 'src/new-runtime.js'), '// newly introduced executable dependency\n');
  assert.equal((await showAsset(started.buildId, root)).fresh, false);
});
test('a Build prepared under an older Plan protocol still shows and continue re-prepares it', async (t) => {
  const root = await fixture(t);
  const started = await intake(root);
  const prepared = await continueAsset(started.buildId, root);
  assert.equal(prepared.plan.protocol, 'verification-plan/v6');
  const manifestPath = path.join(root, 'output/builds', started.buildId, 'manifest.json');
  const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
  const authored = manifest.receipts.at(-1).payload;
  // Historical receipts embedded the Plan; this one also predates source objects.
  const plan = await readBuildObject(started.buildId, authored.verificationPlan.object, { buildRoot: path.join(root, 'output/builds') });
  authored.verificationPlan = { ...plan, digest: plan.planDigest, schemaVersion: 5, protocol: 'verification-plan/v5' };
  authored.inventory = { digest: authored.sourceObjects.digest };
  delete authored.sourceObjects;
  await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);

  const stale = await showAsset(started.buildId, root);
  assert.equal(stale.state, 'AUTHORED');
  assert.equal(stale.plan.protocol, 'verification-plan/v5');
  assert.equal(stale.next, 'prepare');
  const current = await continueAsset(started.buildId, root);
  assert.equal(current.plan.protocol, 'verification-plan/v6');
  assert.equal(current.next, 'review');
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

test('PNG Source follows the same complete data-only workflow and wrong image regions fail', async (t) => {
  const root = await fixture(t);
  const png = new PNG({ width: 100, height: 100 }); png.data.fill(255);
  await writeFile(path.join(root, 'input/pending/picture.png'), PNG.sync.write(png));
  const input = facts();
  for (const [i, item] of [...input.context, ...input.metrics].entries()) item.anchor = { type: 'image-box', box: [0, i * 10, 100, 10] };
  const started = await startAsset({ source: 'input/pending/picture.png', key: 'picture-source', facts: input }, root);
  const artifact = 'data/assets/raster-annotations/picture-source/logo.png';
  const recipe = 'input/icon-crop-specs/picture-source.json';
  const assetBytes = PNG.sync.write(png);
  await mkdir(path.dirname(path.join(started.workspace, artifact)), { recursive: true });
  await mkdir(path.dirname(path.join(started.workspace, recipe)), { recursive: true });
  await writeFile(path.join(started.workspace, artifact), assetBytes);
  await writeFile(path.join(started.workspace, recipe), JSON.stringify({ source: 'input/processed/picture-source.png', runtimeOutputDir: 'data/assets/raster-annotations/picture-source', crops: [{ key: 'logo', runtimeOutput: 'logo.png', rect: [0, 0, 100, 100] }] }));
  await recordAssetVersion({ subject: 'fixture logo', artifact, recipe, review: { reviewer: 'synthetic-reviewer', decision: 'accepted', note: 'Synthetic asset fixture', artifactDigest: bytesDigest(assetBytes) } }, started.workspace);
  const current = await continueAsset(started.buildId, root);
  assert.equal(current.metrics.length, 2);
  assert.equal(current.source.width, 100);
  await reviewAsset(started.buildId, reviewFor(current), root);
  assert.equal((await sealAsset(started.buildId, root)).state, 'SEALED');
  const plan = await planAssetPublication([started.buildId], root);
  const publication = await publishAssetPlan(plan.planDigest, root);
  const publishedRoot = path.join(root, 'output/publications/trees', publication.publishedDigest.slice(7));
  assert.ok(existsSync(path.join(publishedRoot, recipe)), 'crop recipe must travel with the accepted asset');
  assert.equal(JSON.parse(await readFile(path.join(publishedRoot, 'data/assets/catalog.json'))).entries[0].reusable, true);
  input.metrics[0].anchor.box = [99, 0, 20, 10];
  assert.throws(() => compileMetricFacts(input, { key: 'picture-source', source: { width: 100, height: 100 } }), /outside/);
});

test('feedback records a note, expires the current candidate, and the fixed Build reviews again', async (t) => {
  const root = await fixture(t);
  const started = await completed(root, 'feedback-source');
  const current = await showAsset(started.buildId, root);
  await assert.rejects(
    recordWorkflowFeedback(started.buildId, { feedbackId: 'FB-001', regionId: 'REG-001', note: 'legacy ledger shape' }, await buildContext(started.buildId, root)),
    /Unsupported feedback field/
  );
  const recorded = await recordWorkflowFeedback(started.buildId, { note: 'Operator: the revenue row reads 100, check the unit', date: '2026-10-01', objectIds: ['metric.revenue'] }, await buildContext(started.buildId, root));
  assert.equal(recorded.reference.kind, 'feedback-note');
  assert.deepEqual(recorded.batchPeers, []);
  const note = await readBuildObject(started.buildId, recorded.reference, { buildRoot: path.join(root, 'output/builds') });
  assert.deepEqual([note.note, note.date, note.objectIds], ['Operator: the revenue row reads 100, check the unit', '2026-10-01', ['metric.revenue']]);
  assert.equal((await showAsset(started.buildId, root)).fresh, false);
  await assert.rejects(planAssetPublication([started.buildId], root), /not fresh/);
  await assert.rejects(reviewAsset(started.buildId, reviewFor(current), root), /must be AUTHORED/);
  const refreshed = await continueAsset(started.buildId, root);
  assert.notEqual(refreshed.reviewToken, current.reviewToken);
  assert.equal(refreshed.next, 'review');
  const reviewed = await reviewAsset(started.buildId, reviewFor(refreshed), root);
  assert.equal(reviewed.state, 'CLOSED');
  assert.equal((await sealAsset(started.buildId, root)).state, 'SEALED');
});
test('a sealed Build whose receipts embed the source objects and Plan still shows', async (t) => {
  const root = await fixture(t);
  const started = await completed(root, 'embedded-receipts');
  const buildRoot = path.join(root, 'output/builds');
  const manifestPath = path.join(buildRoot, started.buildId, 'manifest.json');
  const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
  for (const receipt of manifest.receipts.filter((item) => item.state === 'AUTHORED')) {
    const { sourceObjects, verificationPlan } = receipt.payload;
    const plan = await readBuildObject(started.buildId, verificationPlan.object, { buildRoot });
    const objects = await readBuildObject(started.buildId, sourceObjects.object, { buildRoot });
    receipt.payload.verificationPlan = { ...plan, digest: plan.planDigest };
    receipt.payload.sourceObjects = { ...objects, digest: objects.sourceObjectsDigest };
  }
  await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  const shown = await showAsset(started.buildId, root);
  assert.equal(shown.state, 'SEALED');
  assert.equal(shown.fresh, true);
  assert.equal(shown.next, 'publish');
  assert.equal(shown.plan.protocol, 'verification-plan/v6');
});
test('refresh after an unrelated publication preserves owned data and requires a new seal', async (t) => {
  const root = await fixture(t);
  const a = await completed(root, 'first-source');
  const text = literal + '\n';
  await writeFile(path.join(root, 'input/pending/other-source.md'), text);
  const b = await startAsset({ source: 'input/pending/other-source.md', key: 'other-source', facts: facts(text, 'other-subject') }, root);
  const next = await continueAsset(b.buildId, root); await reviewAsset(b.buildId, reviewFor(next), root); await sealAsset(b.buildId, root);
  const plan = await planAssetPublication([a.buildId], root); const published = await publishAssetPlan(plan.planDigest, root);
  const frozenBases = await readdir(path.join(root, 'output/workflow-bases'));
  const refreshed = await refreshAssetWorkspace(b.buildId, root);
  assert.equal(refreshed.state, 'AUTHORED');
  // A published base is already immutable: the draft references it directly.
  const base = JSON.parse(await readFile(path.join(refreshed.workspace, 'output/workflow/base.json'), 'utf8'));
  assert.equal(base.root, path.join(root, 'output/publications/trees', published.publishedDigest.slice(7)));
  assert.deepEqual(await readdir(path.join(root, 'output/workflow-bases')), frozenBases);
  await assert.rejects(planAssetPublication([b.buildId], root), /not fresh, sealed/);
  const current = await continueAsset(b.buildId, root); await reviewAsset(b.buildId, reviewFor(current), root); await sealAsset(b.buildId, root);
  const newPlan = await planAssetPublication([b.buildId], root);
  assert.equal((await publishAssetPlan(newPlan.planDigest, root)).state, 'PUBLISHED');
});

test('batch workers persist independent progress and one rejected source cannot accept its peers', async (t) => {
  const root = await fixture(t);
  await writeFile(path.join(root, 'input/pending/good.txt'), literal);
  await writeFile(path.join(root, 'input/pending/bad.md'), literal + '\n');
  const bad = facts(literal + '\n'); bad.metrics[0].value = '999';
  const batch = await recordAssetBatch({ sources: [
    { source: 'input/pending/good.txt', key: 'good', facts: facts() },
    { source: 'input/pending/bad.md', key: 'bad', facts: bad },
  ] }, { root, concurrency: 2 });
  assert.equal(batch.results.length, 2);
  assert.equal(batch.results.filter((item) => item.error).length, 1, JSON.stringify(batch.results));
  const good = batch.results.find((item) => item.result);
  assert.equal(good.result.state, 'AUTHORED'); assert.equal(good.result.next, 'review');
  const saved = JSON.parse(await readFile(batch.manifestPath, 'utf8'));
  assert.equal(saved.results.length, 2);
  assert.equal(existsSync(path.join(root, 'output/publications/current.json')), false);
});

test('a short operator review records only the acceptance and only acceptance closes', async (t) => {
  const root = await fixture(t);
  const started = await intake(root);
  const current = await continueAsset(started.buildId, root);
  assert.equal(current.next, 'review');
  assert.match(current.actionRequired, /Waiting for human review/);
  const short = { reviewToken: current.reviewToken, reviewer: 'synthetic-test-reviewer', note: 'Synthetic fixture; not a real dataset acceptance' };
  await assert.rejects(reviewAsset(started.buildId, { ...short, decision: 'rejected' }, root), /Only an explicit acceptance/);
  await assert.rejects(reviewAsset(started.buildId, { ...short, note: ' ', decision: 'accepted' }, root), /concrete note/);
  await assert.rejects(
    reviewAsset(started.buildId, { ...short, decision: 'accepted', manualCheckDecisions: [], attention: { status: 'closed' } }, root),
    /Unsupported review field\(s\): manualCheckDecisions, attention/
  );
  const reviewed = await reviewAsset(started.buildId, { ...short, decision: 'accepted' }, root);
  assert.equal(reviewed.state, 'CLOSED');
  const manifest = JSON.parse(await readFile(path.join(root, 'output/builds', started.buildId, 'manifest.json'), 'utf8'));
  const result = await readBuildObject(started.buildId, manifest.review.references.fidelityResult, { buildRoot: path.join(root, 'output/builds') });
  assert.deepEqual([result.protocol, result.acceptance.reviewer, result.acceptance.note], ['fidelity-result/v3', short.reviewer, short.note]);
  assert.equal((await sealAsset(started.buildId, root)).state, 'SEALED');
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

test('batch accept isolates failure, reuses exact seals on retry, and survives unrelated root tool changes', async (t) => {
  const root = await fixture(t);
  const a = await intake(root, 'fast-a');
  // Source claims are byte identities, so give the second fixture a distinct source.
  const secondText = literal + ' ';
  await writeFile(path.join(root, 'input/pending/fast-b.txt'), secondText);
  const b = await startAsset({ source: 'input/pending/fast-b.txt', key: 'fast-b', facts: facts(secondText, 'example-b') }, root);
  const ca = await continueAsset(a.buildId, root), cb = await continueAsset(b.buildId, root);
  const input = { reviewer: 'synthetic-test-reviewer', decision: 'accepted', note: 'Synthetic fixture; not a real dataset acceptance', builds: [
    { buildId: a.buildId, reviewToken: ca.reviewToken }, { buildId: b.buildId, reviewToken: bytesDigest('wrong-token') },
  ] };
  await writeFile(path.join(root, 'scripts/unrelated-new-tool.mjs'), '// unrelated tool added after human review\n');
  const result = await acceptAssets(input, root);
  assert.equal(result.status, 'partial-failure');
  assert.equal(result.results[0].state, 'SEALED');
  assert.match(result.results[1].error, /exact processing-sheet token/);
  assert.equal((await showAsset(b.buildId, root)).state, 'AUTHORED');
  await atomicJson(path.join(root, 'acceptance.json'), input);
  const cli = await new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [path.join(root, 'scripts/record-workflow.mjs'), 'accept', '--input', 'acceptance.json', '--concurrency', '2', '--json'], { cwd: root });
    let stdout = '', stderr = '';
    child.stdout.on('data', (chunk) => { stdout += chunk; }); child.stderr.on('data', (chunk) => { stderr += chunk; });
    child.on('error', reject); child.on('close', (code) => resolve({ code, stdout, stderr }));
  });
  assert.equal(cli.code, 1, cli.stderr);
  assert.equal(JSON.parse(cli.stdout).status, 'partial-failure');
  assert.equal(JSON.parse(cli.stdout).results[0].alreadySealed, true);
  const manifest = path.join(root, 'output/builds', a.buildId, 'manifest.json');
  const sealed = await readFile(manifest, 'utf8');
  input.builds[1].reviewToken = cb.reviewToken;
  const retried = await acceptAssets(input, root);
  assert.equal(retried.status, 'sealed');
  assert.equal(retried.results[0].alreadySealed, true);
  assert.equal(await readFile(manifest, 'utf8'), sealed);
  // Root tool updates no longer force accepted workspaces to refresh/re-render.
  const plan = await planAssetPublication([a.buildId, b.buildId], root);
  assert.equal(plan.state, 'PLANNED');
  await assert.rejects(acceptAsset(a.buildId, { ...reviewFor(ca), note: 'different acceptance' }, root), /does not match this acceptance/);
  await assert.rejects(acceptAssets({ ...input, builds: [input.builds[0], input.builds[0]] }, root), /unique buildId/);
});

test('accept binds the displayed immutable preview and fences changed bytes and stale owners', async (t) => {
  const root = await fixture(t), started = await intake(root, 'pinned-review');
  const current = await continueAsset(started.buildId, root);
  const lease = await acquireBuildSession(root, started.buildId, 'accept-owner');
  const previewId = randomUUID(), version = 'a'.repeat(64);
  const directory = path.join(root, 'output/workbench/previews/review', previewId), site = path.join(directory, 'site');
  await mkdir(path.join(site, 'releases', version), { recursive: true });
  await writeFile(path.join(site, 'index.html'), '<h1>Synthetic reviewed candidate</h1>');
  const contentDigest = await siteContentDigest(site, version);
  await atomicJson(path.join(site, 'site-release.json'), { schema: 'trace-site-release/v1', version, contentDigest });
  const preview = { id: previewId, source: 'review', version, contentDigest, toolDigest: (await fileManifest(root, ['scripts', 'package.json', 'pnpm-lock.yaml'])).digest,
    members: [{ buildId: started.buildId, reviewToken: current.reviewToken, sourceDigest: (await fileManifest(started.workspace)).digest }] };
  await atomicJson(path.join(directory, 'candidate.json'), preview);
  const acceptance = { ...reviewFor(current), previewId }, credentials = { session: lease.owner, generation: lease.generation };
  await assert.rejects(acceptAsset(started.buildId, acceptance, root, { ...credentials, generation: 'stale' }), /current generation/);
  await writeFile(path.join(site, 'index.html'), 'tampered preview');
  await assert.rejects(acceptAsset(started.buildId, acceptance, root, credentials), /Site bytes/);
  await writeFile(path.join(site, 'index.html'), '<h1>Synthetic reviewed candidate</h1>');
  await materializeWorkspace(started.workspace); // External authoring checks out independent writable files.
  const runtime = path.join(started.workspace, 'src/runtime.js'), bytes = await readFile(runtime);
  await writeFile(runtime, 'changed after review');
  await assert.rejects(acceptAsset(started.buildId, acceptance, root, credentials), /preview is stale/);
  await writeFile(runtime, bytes);
  // Workbench tool updates do not alter the displayed, bound candidate.
  await writeFile(path.join(root, 'scripts/unrelated-tool.mjs'), '// later root-only change');
  const result = await acceptAsset(started.buildId, acceptance, root, credentials);
  assert.equal(result.state, 'SEALED');
  assert.equal((await acceptAsset(started.buildId, acceptance, root, credentials)).alreadySealed, true);
});
