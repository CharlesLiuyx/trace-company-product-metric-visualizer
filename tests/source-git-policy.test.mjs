import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, writeFile, readFile, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { sourceGitIgnorePolicy } from '../scripts/lib/source-git-policy.mjs';
import { prepareWorkspaceTools } from '../scripts/lib/workspace-tools.mjs';

test('source ignore checks work behind the Git barrier and honor candidate policy changes', async (t) => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'trace-policy-test-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const barrier = 'gitdir: .trace-git-disabled\n';
  await writeFile(path.join(root, '.git'), barrier);
  await writeFile(path.join(root, '.gitignore'), '/input/processed/\n');
  const paths = ['pending', 'processing', 'processed'].map((folder) => `input/${folder}/probe.png`);
  assert.deepEqual(Object.values(await sourceGitIgnorePolicy(root, paths)), [false, false, true]);
  await writeFile(path.join(root, '.gitignore'), '/input/processed/\n/input/processing/\n');
  assert.deepEqual(Object.values(await sourceGitIgnorePolicy(root, paths)), [false, true, true]);
  assert.equal(await readFile(path.join(root, '.git'), 'utf8'), barrier);
});

test('isolated tools include verification docs and hook fixtures without enabling parent Git access', async (t) => {
  const workspace = await mkdtemp(path.join(os.tmpdir(), 'trace-tools-hooks-'));
  t.after(() => rm(workspace, { recursive: true, force: true }));
  await prepareWorkspaceTools(process.cwd(), workspace);
  for (const file of ['.githooks/post-commit', '.githooks/pre-push', 'README.md', 'input/README.md', '.node-version', '.nvmrc']) {
    assert.equal(await readFile(path.join(workspace, file), 'utf8'), await readFile(file, 'utf8'));
  }
  assert.equal(await readFile(path.join(workspace, '.git'), 'utf8'), 'gitdir: .trace-git-disabled\n');
});
