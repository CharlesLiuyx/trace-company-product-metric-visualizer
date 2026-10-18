import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import os from 'node:os';
import { mkdtemp, writeFile, rm, rename, stat, utimes, symlink, mkdir } from 'node:fs/promises';
import { fileManifest, freezeSnapshot, cloneFiles, atomicJson } from '../scripts/lib/workflow-files.mjs';
import { compactWorkspace } from '../scripts/lib/workspace-storage.mjs';
import { createPreviewManifest } from '../scripts/lib/workbench-manifest.mjs';

test('preview cache matches byte manifests across rewrites, renames, additions and deletions', async (t) => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'trace-preview-manifest-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const manifest = createPreviewManifest(), file = path.join(root, 'index.html');
  await writeFile(file, 'first');
  const first = await manifest(root);
  assert.deepEqual(first, await fileManifest(root));
  assert.deepEqual(await manifest(root), first);
  const original = await stat(file);
  await writeFile(file, 'other');
  await utimes(file, original.atime, original.mtime);
  assert.notEqual((await manifest(root)).digest, first.digest, 'same size and restored mtime still invalidate by ctime');
  await writeFile(path.join(root, 'replacement'), 'third');
  await rename(path.join(root, 'replacement'), file);
  assert.deepEqual(await manifest(root), await fileManifest(root));
  await mkdir(path.join(root, 'data/nested'), { recursive: true });
  await writeFile(path.join(root, 'data/nested/new.js'), 'added');
  assert.deepEqual(await manifest(root), await fileManifest(root));
  await rm(file);
  assert.deepEqual(await manifest(root), await fileManifest(root));
  await symlink(path.join(root, 'data/nested/new.js'), file);
  await assert.rejects(manifest(root), /symlinks/);
});

test('compacted workspaces on one shared base hash its files once and match byte manifests', async (t) => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'trace-preview-overlay-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  await mkdir(path.join(root, 'data/datasets'), { recursive: true });
  await writeFile(path.join(root, 'index.html'), '<html>fixture</html>');
  for (let i = 0; i < 20; i++) await writeFile(path.join(root, `data/datasets/d${i}.js`), `window.d${i} = ${i};`);
  const base = await freezeSnapshot({ root, ...await fileManifest(root), published: false }, root);
  const workspaces = [];
  for (const id of ['build-aaaa', 'build-bbbb']) {
    const workspace = path.join(root, `output/builds/${id}/workspace`);
    await cloneFiles(base.root, workspace, base.entries.map((e) => e.path));
    await atomicJson(path.join(workspace, 'output/workflow/base.json'), base);
    await writeFile(path.join(workspace, 'data/datasets/d0.js'), `window.d0 = '${id}';`);
    await compactWorkspace(workspace);
    workspaces.push(workspace);
  }
  const manifest = createPreviewManifest();
  assert.deepEqual(await manifest(workspaces[0]), await fileManifest(workspaces[0]));
  const shared = manifest.statistics().hashedFiles;
  assert.equal(shared, base.entries.length, 'the first Build hashes the base once plus its own edit');
  assert.deepEqual(await manifest(workspaces[1]), await fileManifest(workspaces[1]));
  assert.equal(manifest.statistics().hashedFiles, shared + 1, 'a second Build on the same base hashes only its local file');
  assert.deepEqual(await manifest(workspaces[0]), await fileManifest(workspaces[0]));
  assert.equal(manifest.statistics().hashedFiles, shared + 1, 'repeat passes are stat-only');
  await writeFile(path.join(workspaces[1], 'data/datasets/d0.js'), 'window.d0 = "edited";');
  await writeFile(path.join(workspaces[1], 'data/datasets/d5.js'), 'window.d5 = "local";');
  assert.deepEqual(await manifest(workspaces[1]), await fileManifest(workspaces[1]), 'local edits and new local copies win over the base');
});

test('snapshot clones leave source identities unchanged while real edits are reported', async (t) => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'trace-preview-unchanged-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  await mkdir(path.join(root, 'data'), { recursive: true });
  for (let i = 0; i < 5; i++) await writeFile(path.join(root, `data/f${i}.js`), String(i));
  const manifest = createPreviewManifest(), files = (await fileManifest(root)).entries.map((e) => e.path);
  assert.equal(manifest.unchanged(path.join(root, 'data/f0.js')), false, 'a file never hashed is unknown');
  await manifest(root);
  await cloneFiles(root, path.join(root, 'output/snapshot'), files);
  assert.ok(files.every((file) => manifest.unchanged(path.join(root, file))), 'cloning out of a tree is not an edit');
  await writeFile(path.join(root, 'data/f1.js'), 'edited');
  await rm(path.join(root, 'data/f2.js'));
  assert.equal(manifest.unchanged(path.join(root, 'data/f1.js')), false);
  assert.equal(manifest.unchanged(path.join(root, 'data/f2.js')), false);
  assert.equal(manifest.unchanged(path.join(root, 'data')), false, 'directory events are never suppressed');
});
