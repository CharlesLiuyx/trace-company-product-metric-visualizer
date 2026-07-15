#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import {
  changedDatasetMetadataSources,
  DATASET_METADATA_OUTPUT_PATH,
  prePushMetadataDecision,
} from './lib/git-hook-policy.mjs';
import { projectPath, rootDir } from './lib/project.mjs';

const GENERATOR_PATH = projectPath('scripts/update-dataset-file-metadata.mjs');

function git(args, options = {}) {
  return spawnSync('git', args, { cwd: rootDir, encoding: 'utf8', ...options });
}

function commandFailure(result, action) {
  return `${action} failed: ${(result.stderr || result.stdout || `exit ${result.status}`).trim()}`;
}

function runGenerator(args) {
  return spawnSync(process.execPath, [GENERATOR_PATH, ...args], {
    cwd: rootDir,
    stdio: ['ignore', 'inherit', 'inherit'],
  });
}

function changedSourcesInHead() {
  const result = git([
    'diff-tree',
    '--no-commit-id',
    '--name-only',
    '-r',
    '--root',
    'HEAD',
    '--',
    'data/datasets',
    'data/revenue-metrics.js',
  ]);
  if (result.status !== 0) throw new Error(commandFailure(result, 'reading HEAD paths'));
  return changedDatasetMetadataSources(result.stdout.split(/\r?\n/));
}

function metadataDiffStatus() {
  return git(['diff', '--quiet', 'HEAD', '--', DATASET_METADATA_OUTPUT_PATH]).status;
}

function postCommit() {
  const changedSources = changedSourcesInHead();
  if (!changedSources.length) return;

  const refreshed = runGenerator([]);
  if (refreshed.status !== 0) {
    throw new Error(`dataset metadata refresh failed after commit (exit ${refreshed.status})`);
  }

  const diffStatus = metadataDiffStatus();
  if (diffStatus !== 0 && diffStatus !== 1) {
    throw new Error(`checking refreshed metadata diff failed (exit ${diffStatus})`);
  }
  if (diffStatus === 1) {
    console.warn(
      `Dataset metadata refreshed after committed source changes (${changedSources.join(', ')}).\n` +
      `Include ${DATASET_METADATA_OUTPUT_PATH} before pushing; prefer:\n` +
      `  git add ${DATASET_METADATA_OUTPUT_PATH}\n` +
      '  git commit --amend --no-edit'
    );
  }
}

function prePush() {
  const verification = runGenerator(['--check']);
  const committedDiffStatus = metadataDiffStatus();
  const decision = prePushMetadataDecision({
    verificationStatus: verification.status,
    committedDiffStatus,
  });
  if (decision.ok) return;

  if (decision.reason === 'uncommitted') {
    throw new Error(
      `${DATASET_METADATA_OUTPUT_PATH} is current in the working tree but is not committed. ` +
      'Amend or commit it before pushing.'
    );
  }
  if (decision.reason === 'git-diff-error') {
    throw new Error(`checking committed metadata failed (exit ${committedDiffStatus})`);
  }
  throw new Error(
    `Dataset metadata is stale. Run pnpm update:dataset-file-metadata, then amend or commit ` +
    `${DATASET_METADATA_OUTPUT_PATH} before pushing.`
  );
}

function main() {
  const [mode, ...extra] = process.argv.slice(2);
  if (extra.length || !['post-commit', 'pre-push'].includes(mode)) {
    throw new Error('Usage: node scripts/git-hook-dataset-metadata.mjs <post-commit|pre-push>');
  }
  if (mode === 'post-commit') postCommit();
  else prePush();
}

try {
  main();
} catch (error) {
  console.error(`Git hook blocked: ${error.message}`);
  process.exit(1);
}
