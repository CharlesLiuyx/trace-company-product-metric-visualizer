import test from 'node:test';
import { createHash } from 'node:crypto';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import {
  chmod,
  copyFile,
  mkdir,
  mkdtemp,
  rm,
  writeFile,
} from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const sourceRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function run(cwd, command, args, options = {}) {
  return spawnSync(command, args, {
    cwd,
    encoding: 'utf8',
    env: { ...process.env, ...options.env },
  });
}

function assertPassed(result, label) {
  assert.equal(
    result.status,
    0,
    `${label} failed:\n${result.stdout || ''}${result.stderr || ''}`
  );
}

async function copyFixtureFile(root, relativePath, { executable = false } = {}) {
  const target = path.join(root, relativePath);
  await mkdir(path.dirname(target), { recursive: true });
  await copyFile(path.join(sourceRoot, relativePath), target);
  if (executable) await chmod(target, 0o755);
}

test('managed hooks refresh after commit and block an uncommitted metadata push', async (t) => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'trace-git-hooks-'));
  t.after(() => rm(root, { recursive: true, force: true }));

  for (const relativePath of [
    'scripts/update-dataset-file-metadata.mjs',
    'scripts/script-sources.mjs',
    'scripts/setup-git-hooks.mjs',
    'scripts/git-hook-dataset-metadata.mjs',
    'scripts/lib/project.mjs',
    'scripts/lib/vm-browser.mjs',
    'scripts/lib/git-hook-policy.mjs',
  ]) {
    await copyFixtureFile(root, relativePath);
  }
  await copyFixtureFile(root, '.githooks/post-commit', { executable: true });
  await copyFixtureFile(root, '.githooks/pre-push', { executable: true });
  await mkdir(path.join(root, 'data/datasets'), { recursive: true });
  await writeFile(path.join(root, 'data/datasets/alpha.js'), '// alpha v1\n');
  await writeFile(path.join(root, 'data/revenue-metrics.js'), '// revenue\n');
  await writeFile(path.join(root, 'data/dataset-file-metadata.js'), '// generated later\n');
  await writeFile(path.join(root, 'data/dataset-manifest.js'), `
(function () {
  window.__DATASET_MANIFEST__ = {
    datasets: [{ key: 'alpha', src: 'data/datasets/alpha.js' }]
  };
})();
`);

  assertPassed(run(root, 'git', ['init']), 'git init');
  assertPassed(run(root, 'git', ['config', 'user.name', 'Hook Test']), 'git user.name');
  assertPassed(run(root, 'git', ['config', 'user.email', 'hook@example.com']), 'git user.email');
  assertPassed(run(root, 'git', ['add', '.']), 'initial git add');
  assertPassed(run(root, 'git', ['commit', '-m', 'initial'], {
    env: {
      GIT_AUTHOR_DATE: '2026-01-01T00:00:00Z',
      GIT_COMMITTER_DATE: '2026-01-01T00:00:00Z',
    },
  }), 'initial commit');

  assertPassed(
    run(root, process.execPath, ['scripts/update-dataset-file-metadata.mjs']),
    'initial metadata generation'
  );
  assertPassed(run(root, 'git', ['add', 'data/dataset-file-metadata.js']), 'metadata git add');
  assertPassed(run(root, 'git', ['commit', '-m', 'record metadata'], {
    env: {
      GIT_AUTHOR_DATE: '2026-01-01T00:00:01Z',
      GIT_COMMITTER_DATE: '2026-01-01T00:00:01Z',
    },
  }), 'metadata commit');

  assertPassed(run(root, process.execPath, ['scripts/setup-git-hooks.mjs']), 'hook setup');
  const hooksPath = run(root, 'git', ['config', '--local', '--get', 'core.hooksPath']);
  assertPassed(hooksPath, 'read configured hooks path');
  assert.equal(hooksPath.stdout.trim(), '.githooks');

  await writeFile(path.join(root, 'data/datasets/alpha.js'), '// alpha v2\n');
  assertPassed(run(root, 'git', ['add', 'data/datasets/alpha.js']), 'dataset git add');
  const datasetCommit = run(root, 'git', ['commit', '-m', 'update alpha'], {
    env: {
      GIT_AUTHOR_DATE: '2026-01-01T00:01:00Z',
      GIT_COMMITTER_DATE: '2026-01-01T00:01:00Z',
    },
  });
  assertPassed(datasetCommit, 'dataset commit');
  assert.match(datasetCommit.stderr, /Dataset metadata refreshed after committed source changes/);

  const dirtyStatus = run(root, 'git', ['status', '--short']);
  assertPassed(dirtyStatus, 'dirty metadata status');
  assert.equal(dirtyStatus.stdout.trim(), 'M data/dataset-file-metadata.js');

  const blockedPush = run(root, process.execPath, ['scripts/git-hook-dataset-metadata.mjs', 'pre-push']);
  assert.notEqual(blockedPush.status, 0);
  assert.match(blockedPush.stderr, /is current in the working tree but is not committed/);

  assertPassed(run(root, 'git', ['add', 'data/dataset-file-metadata.js']), 'refreshed metadata git add');
  assertPassed(run(root, 'git', ['commit', '--amend', '--no-edit']), 'amend refreshed metadata');
  const cleanStatus = run(root, 'git', ['status', '--short']);
  assertPassed(cleanStatus, 'clean metadata status');
  assert.equal(cleanStatus.stdout, '');

  assertPassed(
    run(root, process.execPath, ['scripts/git-hook-dataset-metadata.mjs', 'pre-push']),
    'clean pre-push metadata gate'
  );
  // A reviewed transport freezes time before commit; changing Git author time
  // must not change the reviewed Pages bytes or require a metadata amend.
  const fixedSource = '// alpha v3 reviewed transport\n';
  await writeFile(path.join(root, 'data/datasets/alpha.js'), fixedSource);
  await writeFile(path.join(root, 'data/workflow-timestamps.json'), JSON.stringify({ schema: 'workflow-timestamps/v1', files: {
    'data/datasets/alpha.js': { digest: 'sha256:' + createHash('sha256').update(fixedSource).digest('hex'), updatedAt: '2026-01-02T00:00:00.000Z' }
  } }));
  assertPassed(run(root, process.execPath, ['scripts/update-dataset-file-metadata.mjs']), 'fixed metadata before review');
  assertPassed(run(root, 'git', ['add', 'data/datasets/alpha.js', 'data/workflow-timestamps.json', 'data/dataset-file-metadata.js']), 'exact reviewed paths');
  assertPassed(run(root, 'git', ['commit', '-m', 'transport fixed timestamp'], { env: { GIT_AUTHOR_DATE: '2026-02-01T00:00:00Z' } }), 'fixed timestamp commit');
  assert.equal(run(root, 'git', ['status', '--short']).stdout, '');
  assertPassed(run(root, process.execPath, ['scripts/git-hook-dataset-metadata.mjs', 'pre-push']), 'fixed metadata survives commit');

});
