import test from 'node:test';
import assert from 'node:assert/strict';
import os from 'node:os';
import path from 'node:path';
import { mkdtemp, mkdir, writeFile, readFile, rm, readdir, symlink } from 'node:fs/promises';
import { cleanupArtifacts } from '../scripts/lib/artifact-cleanup.mjs';
import { atomicJson } from '../scripts/lib/workflow-files.mjs';

async function fixture(t) {
  const root = await mkdtemp(path.join(os.tmpdir(), 'trace-artifact-cleanup-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const put = async (file, value) => { await mkdir(path.dirname(path.join(root, file)), { recursive: true }); await writeFile(path.join(root, file), value); };
  await put('output/builds/build-a/workspace/image.png', 'large image');
  await put('output/local-view/selection.js', 'stale pointer');
  await put('compare/runs/old/diff.png', 'large diff');
  await put('input/processed/source.png', 'original');
  await put('data/ssot.js', 'canonical');
  await atomicJson(path.join(root, 'output/builds/build-a/manifest.json'), { buildId: 'build-a', key: 'example', state: 'SEALED', revision: 4, review: { status: 'accepted' }, sources: [{ uri: 'input/pending/source.png', digest: 'source-digest' }], receipts: [{ state: 'SEALED', digest: 'seal-digest' }] });
  await atomicJson(path.join(root, 'output/publications/current.json'), { publishedDigest: 'published-digest', planDigest: 'plan-digest' });
  return { root, put };
}
test('completed cleanup leaves only historical metadata, preserves inputs, and is repeatable', async (t) => {
  const { root } = await fixture(t);
  const plan = await cleanupArtifacts(root);
  assert.equal(plan.dryRun, true);
  assert.equal(await readFile(path.join(root, 'output/local-view/selection.js'), 'utf8'), 'stale pointer');
  await assert.rejects(cleanupArtifacts(root, { dryRun: false }), /--completed/);
  const result = await cleanupArtifacts(root, { completed: true });
  assert.ok(result.bytes > 0);
  assert.deepEqual(await readdir(path.join(root, 'output')), ['meta']);
  assert.deepEqual(await readdir(path.join(root, 'compare')), ['.gitkeep']);
  assert.equal(await readFile(path.join(root, 'input/processed/source.png'), 'utf8'), 'original');
  assert.equal(await readFile(path.join(root, 'data/ssot.js'), 'utf8'), 'canonical');
  const history = await readFile(path.join(root, 'output/meta/history.json'), 'utf8');
  const parsed = JSON.parse(history);
  assert.equal(parsed.historicalOnly, true);
  assert.equal(parsed.evidenceRetained, false);
  assert.equal(parsed.builds[0].lastReceiptDigest, 'seal-digest');
  assert.equal(parsed.publications[0].publishedDigest, 'published-digest');
  const repeated = await cleanupArtifacts(root, { completed: true });
  assert.equal(repeated.bytes, 0);
  assert.equal(await readFile(path.join(root, 'output/meta/history.json'), 'utf8'), history);
});
test('cleanup does not follow nested symlinks and refuses a linked deletion root', async (t) => {
  const { root, put } = await fixture(t);
  await put('outside/secret', 'keep');
  await symlink(path.join(root, 'outside'), path.join(root, 'output/dependency'));
  await cleanupArtifacts(root, { completed: true });
  assert.equal(await readFile(path.join(root, 'outside/secret'), 'utf8'), 'keep');
  await rm(path.join(root, 'compare'), { recursive: true });
  await symlink(path.join(root, 'outside'), path.join(root, 'compare'));
  await assert.rejects(cleanupArtifacts(root, { completed: true }), /real directory/);
});
test('operation locks, running servers, and corrupt metadata block deletion before any mutation', async (t) => {
  const { root, put } = await fixture(t);
  await put('output/builds/build-a/.workflow-operation.lock', '{}');
  await assert.rejects(cleanupArtifacts(root, { completed: true }), /Finish\/recover/);
  await rm(path.join(root, 'output/builds/build-a/.workflow-operation.lock'));
  await atomicJson(path.join(root, 'output/workbench/servers/test.json'), { pid: process.pid });
  await assert.rejects(cleanupArtifacts(root, { completed: true }), /Stop pnpm dev/);
  await rm(path.join(root, 'output/workbench/servers/test.json'));
  await put('output/builds/build-a/manifest.json', '{broken');
  await assert.rejects(cleanupArtifacts(root, { completed: true }), SyntaxError);
  assert.equal(await readFile(path.join(root, 'output/builds/build-a/workspace/image.png'), 'utf8'), 'large image');
});
test('metadata discovery refuses symlinks in intermediate directory components', async (t) => {
  const { root, put } = await fixture(t);
  await rm(path.join(root, 'output/publications'), { recursive: true });
  await put('outside/receipts/private.json', '{not metadata}');
  await symlink(path.join(root, 'outside'), path.join(root, 'output/publications'));
  await assert.rejects(cleanupArtifacts(root, { completed: true }), /real directory/);
  assert.equal(await readFile(path.join(root, 'outside/receipts/private.json'), 'utf8'), '{not metadata}');
});
test('retry merges new metadata into an earlier interrupted cleanup history', async (t) => {
  const { root } = await fixture(t);
  await cleanupArtifacts(root, { completed: true });
  await atomicJson(path.join(root, 'output/builds/build-b/manifest.json'), { buildId: 'build-b', key: 'second', state: 'AUTHORED' });
  await cleanupArtifacts(root, { completed: true });
  const history = JSON.parse(await readFile(path.join(root, 'output/meta/history.json'), 'utf8'));
  assert.deepEqual(history.builds.map((build) => build.buildId), ['build-a', 'build-b']);
  assert.equal(history.builds[1].historicalState, 'AUTHORED', 'operator completion must not invent acceptance');
});
