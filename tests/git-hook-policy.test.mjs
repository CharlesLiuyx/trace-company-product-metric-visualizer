import test from 'node:test';
import assert from 'node:assert/strict';
import {
  changedDatasetMetadataSources,
  hooksPathSetupDecision,
  prePushMetadataDecision,
} from '../scripts/lib/git-hook-policy.mjs';

test('dataset metadata hook recognizes only generator source paths', () => {
  assert.deepEqual(changedDatasetMetadataSources([
    'README.md',
    'data/datasets/beta.js',
    'data/datasets/alpha.js',
    'data/revenue-metrics.js',
    'data/dataset-file-metadata.js',
    'data/datasets/alpha.js',
  ]), [
    'data/datasets/alpha.js',
    'data/datasets/beta.js',
    'data/revenue-metrics.js',
  ]);
});

test('automatic hook setup preserves an existing custom hooks path', () => {
  assert.deepEqual(hooksPathSetupDecision('', { ifUnset: true }), { action: 'install', existing: '' });
  assert.deepEqual(
    hooksPathSetupDecision('.githooks/', { ifUnset: true }),
    { action: 'install', existing: '.githooks' }
  );
  assert.deepEqual(
    hooksPathSetupDecision('../shared-hooks', { ifUnset: true }),
    { action: 'preserve', existing: '../shared-hooks' }
  );
  assert.deepEqual(
    hooksPathSetupDecision('../shared-hooks'),
    { action: 'conflict', existing: '../shared-hooks' }
  );
});

test('pre-push requires metadata to be both current and committed', () => {
  assert.deepEqual(
    prePushMetadataDecision({ verificationStatus: 0, committedDiffStatus: 0 }),
    { ok: true, reason: 'current-and-committed' }
  );
  assert.equal(
    prePushMetadataDecision({ verificationStatus: 1, committedDiffStatus: 0 }).reason,
    'stale'
  );
  assert.equal(
    prePushMetadataDecision({ verificationStatus: 0, committedDiffStatus: 1 }).reason,
    'uncommitted'
  );
  assert.equal(
    prePushMetadataDecision({ verificationStatus: 0, committedDiffStatus: 128 }).reason,
    'git-diff-error'
  );
});
