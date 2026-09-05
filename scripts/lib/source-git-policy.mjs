import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtemp, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

// Evaluate the candidate's actual ignore files without discovering or writing
// its parent Git repository. Build/transport workspaces deliberately block Git.
export async function sourceGitIgnorePolicy(root, paths) {
  const temporary = await mkdtemp(path.join(os.tmpdir(), 'trace-source-git-policy-'));
  try {
    const initialized = spawnSync('git', ['init', '--quiet', '--template=', temporary], { encoding: 'utf8' });
    assert.equal(initialized.status, 0, initialized.stderr || 'Cannot initialize temporary Git policy checker');
    const result = {};
    for (const file of paths) {
      const checked = spawnSync('git', [
        '--git-dir=' + path.join(temporary, '.git'), '--work-tree=' + root,
        '-c', 'core.excludesFile=/dev/null', 'check-ignore', '--no-index', '--quiet', '--', file,
      ], { cwd: root, encoding: 'utf8' });
      assert.ok(checked.status === 0 || checked.status === 1,
        `git check-ignore failed for ${file}: ${(checked.stderr || checked.stdout || '').trim()}`);
      result[file] = checked.status === 0;
    }
    return result;
  } finally {
    await rm(temporary, { recursive: true, force: true });
  }
}
