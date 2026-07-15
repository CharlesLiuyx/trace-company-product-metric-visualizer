export const REPOSITORY_HOOKS_PATH = '.githooks';
export const DATASET_METADATA_OUTPUT_PATH = 'data/dataset-file-metadata.js';
export const DATASET_METADATA_SOURCE_PATHS = [
  'data/datasets/',
  'data/revenue-metrics.js',
];

function normalizeRepoPath(value) {
  return String(value || '').trim().replaceAll('\\', '/');
}

export function changedDatasetMetadataSources(paths) {
  return [...new Set(
    paths
      .map(normalizeRepoPath)
      .filter(Boolean)
      .filter((candidate) => DATASET_METADATA_SOURCE_PATHS.some((source) => (
        source.endsWith('/') ? candidate.startsWith(source) : candidate === source
      )))
  )].sort((left, right) => left.localeCompare(right));
}

export function hooksPathSetupDecision(existingPath, { ifUnset = false } = {}) {
  const existing = String(existingPath || '').trim().replace(/\/+$/, '');
  if (!existing || existing === REPOSITORY_HOOKS_PATH) {
    return { action: 'install', existing };
  }
  if (ifUnset) return { action: 'preserve', existing };
  return { action: 'conflict', existing };
}

export function prePushMetadataDecision({ verificationStatus, committedDiffStatus }) {
  if (verificationStatus !== 0) return { ok: false, reason: 'stale' };
  if (committedDiffStatus === 1) return { ok: false, reason: 'uncommitted' };
  if (committedDiffStatus !== 0) return { ok: false, reason: 'git-diff-error' };
  return { ok: true, reason: 'current-and-committed' };
}
