import test from 'node:test';
import assert from 'node:assert/strict';
import { assetConsumerIndex } from '../scripts/lib/workflow-assets.mjs';
import { runCheckProcess } from '../scripts/lib/check-runner.mjs';
import { rootDir } from '../scripts/lib/project.mjs';

test('asset reverse lookup follows shared, transitive and cyclic Adapter reuse', () => {
  const consumers = assetConsumerIndex([
    { key: 'a', code: 'asset' }, { key: 'b', code: '"a"' },
    { key: 'c', code: "'b' 'd'" }, { key: 'd', code: '"c"' },
    { key: 'e', code: "'a' \"missing\"" }, { key: 'f', code: "'other-a'" },
  ]);
  assert.deepEqual(consumers(['a']), ['a', 'b', 'c', 'd', 'e']);
  assert.deepEqual(consumers(['f']), ['f']);
  assert.deepEqual(consumers([]), []);
});

test('batch consistency checks all requested keys with one global pass and rejects a bad later key', async () => {
  const args = ['scripts/verify-dataset.mjs', 'fiserv-q2-fy26', 'docebo-q2-fy26', '--skip-render'];
  const result = await runCheckProcess(process.execPath, args, { cwd: rootDir });
  assert.equal(result.status, 0, result.stdout + result.stderr);
  assert.equal((result.stdout.match(/=== \[\d+\] verify:ssot ===/g) || []).length, 1);
  assert.equal((result.stdout.match(/=== \[\d+\] verify:dataset-file-metadata ===/g) || []).length, 1);
  assert.match(result.stdout, /verify:i18n --strict fiserv-q2-fy26 docebo-q2-fy26/);
  const invalid = await runCheckProcess(process.execPath, ['scripts/verify-dataset.mjs', 'fiserv-q2-fy26', 'not-a-registered-dataset', '--skip-render'], { cwd: rootDir });
  assert.notEqual(invalid.status, 0);
});
