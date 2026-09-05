import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, rm, readFile, mkdir, writeFile } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import os from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { acquireBuildSession, assertBuildSession } from '../scripts/lib/workflow-session.mjs';
import { mergeSource, mergeValue, parseSsotRecords } from '../scripts/lib/workflow-merge.mjs';
import { selectBuildPreview, readLocalView } from '../scripts/lib/workflow-local-view.mjs';
import { prepareWorkspaceTools } from '../scripts/lib/workspace-tools.mjs';
import { recoverFileLock, atomicJson } from '../scripts/lib/workflow-files.mjs';
import { deriveArtifactManifest } from '../scripts/lib/workflow-dependencies.mjs';
const id = 'build-aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee';
async function fixture(t) { const root = await mkdtemp(path.join(os.tmpdir(), 'trace-concurrency-')); t.after(() => rm(root, { recursive: true, force: true })); return root; }
test('independent processes serialize shared writes without losing contributions', async (t) => {
  const root = await fixture(t);
  const module = pathToFileURL(path.resolve('scripts/lib/workflow-files.mjs')).href;
  const file = path.join(root, 'values.json'); await writeFile(file, '[]');
  const processes = Array.from({ length: 4 }, (_, i) => new Promise((resolve, reject) => {
    const code = `import {withFileLock,readJson,atomicJson} from ${JSON.stringify(module)};await withFileLock(${JSON.stringify(file+'.lock')},async()=>{const x=await readJson(${JSON.stringify(file)});await new Promise(r=>setTimeout(r,30));x.push(${i});await atomicJson(${JSON.stringify(file)},x)});`;
    const child = spawn(process.execPath, ['--input-type=module', '-e', code]); let error = '';
    child.stderr.on('data', (chunk) => { error += chunk; }); child.on('error', reject); child.on('exit', (status) => status === 0 ? resolve() : reject(new Error(error)));
  }));
  await Promise.all(processes); assert.deepEqual(JSON.parse(await readFile(file)).sort(), [0, 1, 2, 3]);
});
test('Session handoff requires release and fences the previous generation', async (t) => {
  const root = await fixture(t);
  const first = await acquireBuildSession(root, id, 'codex-A');
  await assert.rejects(acquireBuildSession(root, id, 'claude-B'), /belongs to Session/);
  await assert.rejects(assertBuildSession(root, id, { session: 'claude-B' }), /requires its active/);
  await acquireBuildSession(root, id, 'codex-A', { release: true, expectedGeneration: first.generation });
  const second = await acquireBuildSession(root, id, 'claude-B'); assert.notEqual(second.generation, first.generation);
  await assert.rejects(assertBuildSession(root, id, { session: 'claude-B', generation: first.generation }), /current generation/);
  await assertBuildSession(root, id, { session: 'claude-B', generation: second.generation });
});
test('dead-operation recovery requires the observed token and refuses a live PID', async (t) => {
  const root = await fixture(t), file = path.join(root, 'operation.lock');
  await atomicJson(file, { pid: process.pid, token: 'live-token' });
  await assert.rejects(recoverFileLock(file, 'live-token'), /still alive/);
  const module = pathToFileURL(path.resolve('scripts/lib/workflow-files.mjs')).href;
  await rm(file);
  await new Promise((resolve, reject) => {
    const code = `import {withFileLock} from ${JSON.stringify(module)};await withFileLock(${JSON.stringify(file)},async()=>process.exit(0));`;
    const child = spawn(process.execPath, ['--input-type=module', '-e', code]);
    child.on('error', reject); child.on('close', (status) => status === 0 ? resolve() : reject(new Error('crash fixture failed')));
  });
  const owner = JSON.parse(await readFile(file));
  await assert.rejects(recoverFileLock(file, 'wrong-token'), /exact lock token/);
  assert.equal((await recoverFileLock(file, owner.token)).recovered, true);
});
const file = 'data/income-statements/example.js';
const source = (records) => `(function(global){const s=global.INCOME_STATEMENT_SSOT=global.INCOME_STATEMENT_SSOT||{schemaVersion:1,records:[]};s.records.push(...${JSON.stringify(records)});})(window);`;
test('same-company periods merge and a conflicting financial field names the exact record', () => {
  const first = { key: 'example-q1', company: 'Example', period: 'Q1', revenue: { total: 10 } };
  const a = { key: 'example-q2', company: 'Example', period: 'Q2', revenue: { total: 20 } };
  const b = { key: 'example-q3', company: 'Example', period: 'Q3', revenue: { total: 30 } };
  const merged = mergeSource(file, source([first]), source([first, a]), source([first, b]));
  assert.deepEqual(parseSsotRecords(merged, file), [first, a, b]);
  assert.throws(() => mergeValue(first, { ...first, revenue: { total: 11 } }, { ...first, revenue: { total: 12 } }, first.key), /example-q1.revenue.total/);
  assert.throws(() => mergeValue([first], [], [{ ...first, revenue: { total: 12 } }]), /conflict/);
  assert.throws(() => mergeSource('src/app.js', 'a', 'b', 'c'), /conflict/);
  assert.throws(() => parseSsotRecords(source([first]).replace('})(window)', 's.records[0].revenue.total=42;})(window)'), file), /Unsupported SSOT mutation/);
});
test('preparing a second review advertises availability without replacing the first', async (t) => {
  const root = await fixture(t), second = 'build-bbbbbbbb-bbbb-cccc-dddd-eeeeeeeeeeee';
  for (const buildId of [id, second]) await selectBuildPreview(root, { buildId, key: buildId, workspace: path.join(root, `output/builds/${buildId}/workspace`), reviewToken: 'sha256:'+'a'.repeat(64) });
  assert.equal((await readLocalView(root)).buildId, id);
  assert.equal(JSON.parse(await readFile(path.join(root, `output/local-view/builds/${second}.json`))).buildId, second);
});
test('ordinary workspace has a Git traversal barrier, not a shared writable .git', async (t) => {
  const root = await fixture(t), workspace = path.join(root, 'output/build');
  await mkdir(workspace, { recursive: true }); await prepareWorkspaceTools(root, workspace);
  assert.equal(await readFile(path.join(workspace, '.git'), 'utf8'), 'gitdir: .trace-git-disabled\n');
});
test('review freshness binds the selected display time without coupling unrelated dataset times', async (t) => {
  const root = await fixture(t);
  await mkdir(path.join(root, 'data'));
  await writeFile(path.join(root, 'index.html'), '<html></html>');
  await writeFile(path.join(root, 'source.txt'), 'Synthetic revenue source');
  await writeFile(path.join(root, 'data/revenue-metrics.js'), 'window.REVENUE_METRIC_SSOT = {records:[{key:"example",company:"Example"}]};');
  const metadata = { files: { 'data/revenue-metrics.js': { path: 'data/revenue-metrics.js', updatedAt: '2026-09-01T00:00:00.000Z' }, unrelated: { updatedAt: '2026-09-01T00:00:00.000Z' } } };
  const save = () => writeFile(path.join(root, 'data/dataset-file-metadata.js'), `window.DATASET_FILE_METADATA=${JSON.stringify(metadata)};`);
  const build = { key: 'example', adapter: 'revenue-metric', sources: [{ format: 'text', processingUri: 'source.txt', digest: 'synthetic' }] };
  const derive = async () => (await deriveArtifactManifest(build, root)).manifest.digest;
  await save(); const reviewed = await derive();
  metadata.files.unrelated.updatedAt = '2026-09-02T00:00:00.000Z';
  await save(); assert.equal(await derive(), reviewed);
  metadata.files['data/revenue-metrics.js'].updatedAt = '2026-09-03T00:00:00.000Z';
  await save(); assert.notEqual(await derive(), reviewed);
});
