import { createHash, randomUUID } from 'node:crypto';
import { existsSync } from 'node:fs';
import { mkdir, open, readFile, rename, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { advanceDatasetBuild, digestValue } from './dataset-build.mjs';
import { projectPath, rootDir } from './project.mjs';

export const DEFAULT_BUILD_ROOT = projectPath('output', 'builds');

function buildError(code, message) {
  const error = new Error(message);
  error.code = code;
  return error;
}

function assertBuildId(buildId) {
  if (!/^build-[a-z0-9-]+$/i.test(String(buildId || ''))) {
    throw buildError('BUILD_ID_INVALID', `Invalid Dataset Build id: ${buildId || '<missing>'}`);
  }
}

function canonicalJson(value) {
  return `${JSON.stringify(value, null, 2)}\n`;
}

function buildDirectory(buildId, buildRoot) {
  assertBuildId(buildId);
  return path.join(path.resolve(buildRoot), buildId);
}

export function datasetBuildManifestPath(buildId, options = {}) {
  return path.join(buildDirectory(buildId, options.buildRoot || DEFAULT_BUILD_ROOT), 'manifest.json');
}

async function writeJsonAtomic(filePath, value) {
  const temporaryPath = `${filePath}.tmp-${randomUUID()}`;
  try {
    await writeFile(temporaryPath, canonicalJson(value), { flag: 'wx' });
    await rename(temporaryPath, filePath);
  } finally {
    await rm(temporaryPath, { force: true });
  }
}

export async function initializeDatasetBuild(build, options = {}) {
  const buildRoot = options.buildRoot || DEFAULT_BUILD_ROOT;
  const buildDir = buildDirectory(build?.buildId, buildRoot);
  const manifestPath = path.join(buildDir, 'manifest.json');
  await mkdir(buildRoot, { recursive: true });
  try {
    await mkdir(buildDir, { recursive: false });
  } catch (cause) {
    if (cause?.code === 'EEXIST') {
      throw buildError('BUILD_EXISTS', `Dataset Build already exists: ${build.buildId}`);
    }
    throw cause;
  }
  try {
    await writeJsonAtomic(manifestPath, build);
  } catch (cause) {
    await rm(buildDir, { recursive: true, force: true });
    throw cause;
  }
  return { build, manifestPath };
}

export async function readDatasetBuild(buildId, options = {}) {
  const manifestPath = datasetBuildManifestPath(buildId, options);
  let source;
  try {
    source = await readFile(manifestPath, 'utf8');
  } catch (cause) {
    if (cause?.code === 'ENOENT') {
      throw buildError('BUILD_NOT_FOUND', `Dataset Build not found: ${buildId}`);
    }
    throw cause;
  }
  try {
    return JSON.parse(source);
  } catch (cause) {
    throw buildError('BUILD_MANIFEST_INVALID', `Invalid Dataset Build manifest ${manifestPath}: ${cause.message}`);
  }
}

async function withBuildLock(buildId, options, work) {
  const buildRoot = options.buildRoot || DEFAULT_BUILD_ROOT;
  const buildDir = buildDirectory(buildId, buildRoot);
  const lockPath = path.join(buildDir, '.record.lock');
  let handle;
  try {
    handle = await open(lockPath, 'wx');
  } catch (cause) {
    if (cause?.code === 'EEXIST') {
      throw buildError('BUILD_LOCKED', `Dataset Build is being recorded by another process: ${buildId}`);
    }
    throw cause;
  }
  try {
    return await work({ buildDir, buildRoot });
  } finally {
    await handle?.close().catch(() => {});
    await rm(lockPath, { force: true });
  }
}

export async function recordDatasetBuildCommand(buildId, command, options = {}) {
  return withBuildLock(buildId, options, async ({ buildDir, buildRoot }) => {
    const build = await readDatasetBuild(buildId, options);
    if (options.requireFresh) {
      const freshness = await inspectDatasetBuild(buildId, { ...options, buildRoot });
      if (!freshness.fresh) {
        throw buildError('BUILD_INPUT_STALE', `Build inputs are stale: ${freshness.reasons.join(', ')}`);
      }
    }
    const next = advanceDatasetBuild(build, command, { now: options.now });
    await writeJsonAtomic(path.join(buildDir, 'manifest.json'), next);
    return next;
  });
}

export async function recordDatasetBuildReviewOutcome(buildId, outcome, options = {}) {
  return withBuildLock(buildId, options, async ({ buildDir, buildRoot }) => {
    const build = await readDatasetBuild(buildId, options);
    if (!Number.isInteger(outcome?.expectedRevision) || outcome.expectedRevision !== build.revision) {
      throw buildError('STALE_REVISION', 'Dataset Build revision changed before the review outcome could be recorded');
    }
    for (const field of ['authoredDigest', 'verificationPlanDigest']) {
      if (!/^sha256:[a-f0-9]{64}$/.test(String(outcome[field] || ''))) {
        throw buildError('REVIEW_OUTCOME_INVALID', `${field} must be a sha256 digest`);
      }
    }
    const authored = latestReceipt(build, 'AUTHORED')?.payload;
    if (build.state !== 'AUTHORED' || authored?.snapshotDigest !== outcome.authoredDigest) {
      throw buildError('REVIEW_OUTCOME_STALE', 'Review outcome does not match the current AUTHORED snapshot');
    }
    if (authored.verificationPlanDigest !== outcome.verificationPlanDigest) {
      throw buildError('REVIEW_OUTCOME_STALE', 'Review outcome does not match the current VerificationPlan');
    }
    const freshness = await inspectDatasetBuild(buildId, { ...options, buildRoot });
    if (!freshness.fresh) {
      throw buildError('REVIEW_OUTCOME_STALE', `Authored inputs are stale: ${freshness.reasons.join(', ')}`);
    }
    if (!['review-pending', 'accepted', 'rejected', 'blocked'].includes(outcome.status)) {
      throw buildError('REVIEW_OUTCOME_INVALID', `Unsupported review status: ${outcome.status || '<missing>'}`);
    }
    const references = {
      fidelityResult: outcome.fidelityResult,
      feedbackLedger: outcome.feedbackLedger,
      feedbackRecords: outcome.feedbackRecords || [],
    };
    for (const [field, expectedKind] of [
      ['fidelityResult', 'fidelity-result'],
      ['feedbackLedger', 'feedback-ledger'],
    ]) {
      const reference = references[field];
      if (reference?.kind !== expectedKind || !/^sha256:[a-f0-9]{64}$/.test(String(reference.digest || ''))) {
        throw buildError('REVIEW_OUTCOME_INVALID', `${field} must reference a ${expectedKind} object`);
      }
    }
    if (!Array.isArray(references.feedbackRecords)) {
      throw buildError('REVIEW_OUTCOME_INVALID', 'feedbackRecords must be an array');
    }
    for (const [index, reference] of references.feedbackRecords.entries()) {
      if (reference?.kind !== 'feedback-record' || !/^sha256:[a-f0-9]{64}$/.test(String(reference.digest || ''))) {
        throw buildError('REVIEW_OUTCOME_INVALID', `feedbackRecords[${index}] must reference a feedback-record object`);
      }
    }
    const review = {
      reviewRevision: (build.review?.reviewRevision ?? -1) + 1,
      buildRevision: build.revision,
      recordedAt: (options.now || (() => new Date().toISOString()))(),
      status: String(outcome.status || ''),
      authoredDigest: outcome.authoredDigest,
      verificationPlanDigest: outcome.verificationPlanDigest,
      references,
    };
    const next = { ...build, review };
    await writeJsonAtomic(path.join(buildDir, 'manifest.json'), next);
    return next;
  });
}

export async function recordBuildObject(buildId, kind, value, options = {}) {
  if (!/^[a-z][a-z0-9-]*$/.test(String(kind || ''))) {
    throw buildError('OBJECT_KIND_INVALID', `Invalid build object kind: ${kind || '<missing>'}`);
  }
  const buildRoot = options.buildRoot || DEFAULT_BUILD_ROOT;
  const buildDir = buildDirectory(buildId, buildRoot);
  if (!existsSync(path.join(buildDir, 'manifest.json'))) {
    throw buildError('BUILD_NOT_FOUND', `Dataset Build not found: ${buildId}`);
  }
  const digest = digestValue(value);
  const objectDir = path.join(buildDir, 'objects', kind);
  const objectPath = path.join(objectDir, `${digest.slice('sha256:'.length)}.json`);
  const contents = canonicalJson(value);
  await mkdir(objectDir, { recursive: true });
  try {
    await writeFile(objectPath, contents, { flag: 'wx' });
  } catch (cause) {
    if (cause?.code !== 'EEXIST') throw cause;
    const existing = await readFile(objectPath, 'utf8');
    if (existing !== contents) {
      throw buildError('OBJECT_DIGEST_COLLISION', `Build object digest collision: ${digest}`);
    }
  }
  return {
    kind,
    digest,
    path: path.relative(options.projectRoot || rootDir, objectPath).split(path.sep).join('/'),
  };
}

export async function readBuildObject(buildId, reference, options = {}) {
  if (!reference?.kind || !reference?.digest) {
    throw buildError('OBJECT_REFERENCE_INVALID', 'Build object reference needs kind and digest');
  }
  const buildRoot = options.buildRoot || DEFAULT_BUILD_ROOT;
  const objectPath = path.join(
    buildDirectory(buildId, buildRoot),
    'objects',
    reference.kind,
    `${String(reference.digest).replace(/^sha256:/, '')}.json`
  );
  const value = JSON.parse(await readFile(objectPath, 'utf8'));
  if (digestValue(value) !== reference.digest) {
    throw buildError('OBJECT_DIGEST_MISMATCH', `Build object no longer matches ${reference.digest}`);
  }
  return value;
}

async function digestFile(filePath) {
  return `sha256:${createHash('sha256').update(await readFile(filePath)).digest('hex')}`;
}

function latestReceipt(build, state) {
  return [...(build.receipts || [])].reverse().find((receipt) => receipt.state === state) || null;
}

export async function inspectDatasetBuild(buildId, options = {}) {
  const build = await readDatasetBuild(buildId, options);
  const projectRoot = options.projectRoot || rootDir;
  const authoredReceipt = latestReceipt(build, 'AUTHORED');
  const closureReceipt = latestReceipt(build, 'CLOSED');
  const baselineReceipt = latestReceipt(build, 'BASELINE_STAGED');
  const sealReceipt = latestReceipt(build, 'SEALED');
  const staleArtifacts = [];

  for (const artifact of authoredReceipt?.payload?.artifacts || []) {
    const absolute = path.resolve(projectRoot, artifact.path);
    if (!absolute.startsWith(`${path.resolve(projectRoot)}${path.sep}`)) {
      staleArtifacts.push({ path: artifact.path, reason: 'outside-project-root' });
      continue;
    }
    if (!existsSync(absolute)) {
      staleArtifacts.push({ path: artifact.path, reason: 'missing' });
      continue;
    }
    const actualDigest = await digestFile(absolute);
    if (actualDigest !== artifact.digest) {
      staleArtifacts.push({ path: artifact.path, reason: 'digest-mismatch', expected: artifact.digest, actual: actualDigest });
    }
  }

  let effectiveState = build.state;
  const reasons = [];
  const stateRank = new Map([
    ['INTAKED', 0],
    ['AUTHORED', 1],
    ['CLOSED', 2],
    ['BASELINE_STAGED', 3],
    ['SEALED', 4],
  ]);
  const downgradeTo = (state) => {
    if ((stateRank.get(state) ?? Infinity) < (stateRank.get(effectiveState) ?? Infinity)) {
      effectiveState = state;
    }
  };
  if (authoredReceipt && staleArtifacts.length) {
    downgradeTo('AUTHORED');
    reasons.push('authored-artifact-stale');
  }
  if (closureReceipt && closureReceipt.payload.snapshotDigest !== authoredReceipt?.payload?.snapshotDigest) {
    downgradeTo('AUTHORED');
    reasons.push('closure-snapshot-stale');
  }
  if (baselineReceipt && baselineReceipt.payload.closureDigest !== closureReceipt?.payload?.closureDigest) {
    downgradeTo('CLOSED');
    reasons.push('baseline-closure-stale');
  }
  if (sealReceipt && sealReceipt.payload.snapshotDigest !== authoredReceipt?.payload?.snapshotDigest) {
    downgradeTo('AUTHORED');
    reasons.push('seal-input-stale');
  }
  if (sealReceipt && sealReceipt.payload.closureDigest !== closureReceipt?.payload?.closureDigest) {
    downgradeTo('CLOSED');
    reasons.push('seal-input-stale');
  }
  if (sealReceipt && options.currentCanonicalDigest && sealReceipt.payload.baseCanonicalDigest !== options.currentCanonicalDigest) {
    downgradeTo('BASELINE_STAGED');
    reasons.push('canonical-base-stale');
  }

  return {
    buildId: build.buildId,
    key: build.key,
    adapter: build.adapter,
    revision: build.revision,
    historicalState: build.state,
    effectiveState,
    fresh: reasons.length === 0,
    reasons: [...new Set(reasons)],
    staleArtifacts,
    digests: {
      source: build.receipts?.[0]?.payload?.sourceSetDigest || null,
      authored: authoredReceipt?.payload?.snapshotDigest || null,
      closure: closureReceipt?.payload?.closureDigest || null,
      seal: sealReceipt?.payload?.sealDigest || null,
    },
  };
}
