import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import {
  DEFAULT_BUILD_ROOT,
  inspectDatasetBuild,
  readDatasetBuild,
  recordBuildObject,
} from './dataset-build-store.mjs';
import { rootDir } from './project.mjs';

export const DATASET_VERIFICATION_PROTOCOL = 'dataset-verification/v1';

function verificationError(code, message, details = undefined) {
  const error = new Error(message);
  error.code = code;
  if (details !== undefined) error.details = details;
  return error;
}

function latestReceipt(build, state) {
  return [...(build.receipts || [])].reverse().find((receipt) => receipt.state === state) || null;
}

function outputDigest(stdout, stderr) {
  return `sha256:${createHash('sha256').update(String(stdout || '')).update('\0').update(String(stderr || '')).digest('hex')}`;
}

function defaultVerifier({ key, projectRoot }) {
  return spawnSync(
    process.execPath,
    [path.join(projectRoot, 'scripts', 'verify-dataset.mjs'), key, '--skip-render'],
    { cwd: projectRoot, encoding: 'utf8' }
  );
}

/**
 * Run the Adapter-independent consistency profile and record immutable,
 * Build-bound evidence. Rendering remains owned by record:fidelity.
 */
export async function recordDatasetVerification(buildId, options = {}) {
  const buildRoot = options.buildRoot || DEFAULT_BUILD_ROOT;
  const projectRoot = options.projectRoot || rootDir;
  const before = await readDatasetBuild(buildId, { buildRoot });
  const authoredBefore = latestReceipt(before, 'AUTHORED')?.payload;
  if (before.state !== 'AUTHORED' || !authoredBefore?.verificationPlanDigest) {
    throw verificationError('BUILD_NOT_REVIEWABLE', 'Dataset verification requires the current Build to be AUTHORED with a VerificationPlan');
  }
  const preflight = await inspectDatasetBuild(buildId, { buildRoot, projectRoot });
  if (!preflight.fresh) {
    throw verificationError('AUTHORED_INPUT_STALE', `Authored inputs are stale: ${preflight.reasons.join(', ')}`);
  }

  const runVerifier = options.runVerifier || defaultVerifier;
  const run = await runVerifier({ key: before.key, buildId, projectRoot });
  const status = Number.isInteger(run?.status) ? run.status : run?.exitCode;
  if (status !== 0) {
    throw verificationError(
      'DATASET_VERIFICATION_FAILED',
      `Dataset consistency verification failed for ${before.key}`,
      { status, stdout: String(run?.stdout || ''), stderr: String(run?.stderr || '') }
    );
  }

  const after = await readDatasetBuild(buildId, { buildRoot });
  const authoredAfter = latestReceipt(after, 'AUTHORED')?.payload;
  if (
    after.revision !== before.revision ||
    after.state !== 'AUTHORED' ||
    authoredAfter?.snapshotDigest !== authoredBefore.snapshotDigest ||
    authoredAfter?.verificationPlanDigest !== authoredBefore.verificationPlanDigest
  ) {
    throw verificationError('VERIFICATION_INPUT_CHANGED', 'Dataset Build changed while consistency verification was running');
  }
  const postflight = await inspectDatasetBuild(buildId, { buildRoot, projectRoot });
  if (!postflight.fresh) {
    throw verificationError('VERIFICATION_INPUT_CHANGED', `Authored inputs changed during verification: ${postflight.reasons.join(', ')}`);
  }

  const manifest = {
    schemaVersion: 1,
    protocol: DATASET_VERIFICATION_PROTOCOL,
    kind: 'dataset-verification',
    status: 'evidence-ready',
    identity: {
      buildId,
      key: before.key,
      adapter: before.adapter,
      authoredDigest: authoredBefore.snapshotDigest,
      verificationPlanDigest: authoredBefore.verificationPlanDigest,
    },
    profile: 'verify:dataset --skip-render',
    outputDigest: outputDigest(run.stdout, run.stderr),
    checkedAt: (options.now || (() => new Date().toISOString()))(),
  };
  const reference = await recordBuildObject(buildId, 'dataset-verification', manifest, {
    buildRoot,
    projectRoot,
  });
  return {
    manifest,
    reference,
    verificationReference: reference,
    output: { stdout: String(run.stdout || ''), stderr: String(run.stderr || '') },
  };
}
