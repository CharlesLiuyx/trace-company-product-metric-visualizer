import { materializeWorkspace } from '../scripts/lib/workspace-storage.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
import path from 'node:path';
import { mkdir, writeFile, readFile, readdir } from 'node:fs/promises';
import { bytesDigest, fileManifest, atomicJson } from '../scripts/lib/workflow-files.mjs';
import { startAsset, continueAsset, reviewAsset, acceptAsset, acceptAssets, sealAsset, showAsset, buildContext } from '../scripts/lib/asset-workflow.mjs';
import { planAssetPublication, publishAssetPlan } from '../scripts/lib/workflow-publication.mjs';
import { refreshAssetWorkspace } from '../scripts/lib/workflow-recovery.mjs';
import { spawn } from 'node:child_process';
import { recordWorkflowFeedback } from '../scripts/lib/workflow-feedback.mjs';
import { readBuildObject } from '../scripts/lib/dataset-build-store.mjs';
import { acquireBuildSession } from '../scripts/lib/workflow-session.mjs';
import { siteContentDigest } from '../scripts/lib/site-release-identity.mjs';
import { randomUUID } from 'node:crypto';
import { literal, facts, fixture, intake, reviewFor, completed } from './helpers/asset-workflow-fixture.mjs';

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
