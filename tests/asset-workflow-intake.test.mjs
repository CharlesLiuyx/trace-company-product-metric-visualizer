import assert from 'node:assert/strict';
import test from 'node:test';
import path from 'node:path';
import os from 'node:os';
import { mkdtemp, mkdir, writeFile, readFile, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { PNG } from 'pngjs';
import { compileMetricFacts, metricIdentity } from '../scripts/lib/metric-source.mjs';
import { bytesDigest, fileManifest } from '../scripts/lib/workflow-files.mjs';
import { startAsset, continueAsset, reviewAsset, sealAsset, showAsset, assertMergeableSsots } from '../scripts/lib/asset-workflow.mjs';
import { planAssetPublication, publishAssetPlan } from '../scripts/lib/workflow-publication.mjs';
import { processingSourceList, archiveProcessingSources } from '../scripts/lib/workflow-recovery.mjs';
import { renderAssetReview } from '../scripts/lib/workflow-review.mjs';
import { spawn } from 'node:child_process';
import { recordAssetBatch } from '../scripts/lib/workflow-batch.mjs';
import { recordAssetVersion } from '../scripts/lib/workflow-assets.mjs';
import { readBuildObject } from '../scripts/lib/dataset-build-store.mjs';
import { literal, facts, textSource, fixture, intake, reviewFor, completed } from './helpers/asset-workflow-fixture.mjs';

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
test('prepare rejects a changed SSOT the draft merger cannot read, but not untouched legacy files', async (t) => {
  const workspace = await mkdtemp(path.join(os.tmpdir(), 'trace-mergeable-ssot-'));
  t.after(() => rm(workspace, { recursive: true, force: true }));
  const canonical = (key) => `(function (global) {\n  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] });\n  ssot.records.push({ key: '${key}' });\n})(window);\n`;
  const legacy = `window.INCOME_STATEMENT_SSOT = window.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };\nwindow.INCOME_STATEMENT_SSOT.records.push({ key: 'legacy-q1' });\n`;
  await mkdir(path.join(workspace, 'data/income-statements'), { recursive: true });
  await writeFile(path.join(workspace, 'data/income-statements/acme.js'), canonical('acme-q1'));
  await writeFile(path.join(workspace, 'data/income-statements/legacy.js'), legacy);
  await mkdir(path.join(workspace, 'output/workflow'), { recursive: true });
  await writeFile(path.join(workspace, 'output/workflow/base.json'), JSON.stringify((await fileManifest(workspace, ['data']))));
  await assertMergeableSsots(workspace);
  await writeFile(path.join(workspace, 'data/income-statements/acme.js'), canonical('acme-q1').replace("{ key: 'acme-q1' }", "{ key: 'acme-q1' }, { key: 'acme-q2' }"));
  await assertMergeableSsots(workspace);
  await writeFile(path.join(workspace, 'data/income-statements/acme.js'), legacy.replaceAll('legacy-q1', 'acme-q2'));
  await assertMergeableSsots(workspace);
  await writeFile(path.join(workspace, 'data/income-statements/acme.js'), `if (window) { ${legacy.replaceAll('legacy-q1', 'acme-q2')} }`);
  await assert.rejects(assertMergeableSsots(workspace), /Unsupported SSOT wrapper in data\/income-statements\/acme\.js/);
});
