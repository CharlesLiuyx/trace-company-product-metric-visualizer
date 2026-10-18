// Source intake for a new Dataset Build. It validates the identity the
// operator chose, records `source-classification/v1` from the whole-Source
// Type Gate, initializes the INTAKED Build and claims the Source from
// input/pending/ into the Git-tracked input/processing/ lease. The only caller
// is `record:workflow start` (scripts/lib/asset-workflow.mjs); it never writes
// canonical data.
import { createHash } from 'node:crypto';
import { existsSync } from 'node:fs';
import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { PNG } from 'pngjs';
import { DATASET_ADAPTERS, SOURCE_AVAILABILITY, createDatasetBuild } from './dataset-build.mjs';
import { discardInitializedDatasetBuild, initializeDatasetBuild } from './dataset-build-store.mjs';
import { checkPendingQueue, pendingCheckReport } from './pending-queue.mjs';
import { projectPath, rootDir } from './project.mjs';
import { claimPendingSource, isRecoverablePendingClaim, sourceDigest, sourceLifecyclePaths } from './source-lifecycle.mjs';
import { SOURCE_CLASSIFICATION_REVIEW_METHOD, classifySourceSignals, createSourceClassification } from './source-objects.mjs';

const BUILD_ROOT = projectPath('output', 'builds');

function intakeError(message, code = 'INTAKE_OPTION_INVALID') {
  const error = new Error(message);
  error.code = code;
  return error;
}

/**
 * Normalize and validate the intake identity: one pending Source, a kebab-case
 * key, a supported Adapter, a supported availability, and Type Gate signals
 * that select exactly that Adapter.
 */
export function validateIntakeOptions(options = {}) {
  const { source, key, adapter } = options;
  const availability = options.availability || 'local-only';
  if (typeof source !== 'string' || !source) throw intakeError('Exactly one pending Source path is required');
  if (!key) throw intakeError('A dataset key is required');
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(key)) throw intakeError(`Dataset key must be lowercase kebab case: ${key}`);
  if (!DATASET_ADAPTERS.includes(adapter)) throw intakeError(`Unsupported Adapter: ${adapter}`);
  if (!SOURCE_AVAILABILITY.includes(availability)) throw intakeError(`Unsupported Source availability: ${availability}`);
  let classification;
  try {
    classification = classifySourceSignals(options.signals || [], adapter);
  } catch (error) {
    throw intakeError(error.message);
  }
  return { source, key, adapter, signals: classification.signals, availability };
}

async function canonicalFiles(entryPath) {
  const info = await stat(entryPath);
  if (!info.isDirectory()) return [entryPath];
  const entries = await readdir(entryPath, { withFileTypes: true });
  const nested = await Promise.all(
    entries
      .filter((entry) => entry.name !== '.DS_Store')
      .sort((left, right) => left.name.localeCompare(right.name))
      .map((entry) => canonicalFiles(path.join(entryPath, entry.name)))
  );
  return nested.flat();
}

/** Digest of the canonical data tree the Build starts from. */
export async function canonicalDataDigest() {
  const roots = [projectPath('data'), projectPath('index.html')].filter(existsSync);
  const files = (await Promise.all(roots.map(canonicalFiles))).flat().sort();
  const hash = createHash('sha256');
  for (const file of files) {
    hash.update(path.relative(rootDir, file).split(path.sep).join('/'));
    hash.update('\0');
    hash.update(await readFile(file));
    hash.update('\0');
  }
  return `sha256:${hash.digest('hex')}`;
}

function sourcePath(requested, projectRoot = rootDir) {
  const absolute = path.resolve(projectRoot, requested);
  if (path.dirname(absolute) !== path.join(projectRoot, 'input', 'pending') || !/\.(png|txt|md)$/i.test(absolute)) {
    throw intakeError('Source must be PNG, TXT or Markdown directly under input/pending/', 'INTAKE_SOURCE_INVALID');
  }
  return absolute;
}

async function activeBuildForKey(key, buildRoot = BUILD_ROOT, projectRoot = rootDir) {
  if (!existsSync(buildRoot)) return null;
  const entries = (await readdir(buildRoot, { withFileTypes: true }))
    .sort((left, right) => left.name.localeCompare(right.name));
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const manifestPath = path.join(buildRoot, entry.name, 'manifest.json');
    if (!existsSync(manifestPath) || existsSync(path.join(buildRoot, entry.name, 'successor.json'))) continue;
    try {
      const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
      if (manifest.key === key && manifest.state !== 'ABANDONED') return { manifest, manifestPath };
    } catch (cause) {
      const error = new Error(`Cannot inspect local Build manifest ${path.relative(projectRoot, manifestPath)}: ${cause.message}`);
      error.code = 'BUILD_MANIFEST_INVALID';
      throw error;
    }
  }
  return null;
}

// In-process pending-queue guard with the process-like result shape the
// intake logic (and its tests) consume: status 0 passes, 1 blocks.
function runPendingGuard(relativeSource, key, projectRoot = rootDir) {
  try {
    const report = pendingCheckReport(checkPendingQueue({ files: [relativeSource], key, projectRoot }));
    return report.ok
      ? { status: 0, stdout: report.lines.join('\n'), stderr: '' }
      : { status: 1, stdout: '', stderr: report.lines.join('\n') };
  } catch (error) {
    return { status: 2, stdout: '', stderr: error.message };
  }
}

const DEFAULT_DEPENDENCIES = Object.freeze({
  projectRoot: rootDir,
  buildRoot: BUILD_ROOT,
  activeBuildForKey,
  canonicalDataDigest,
  claimPendingSource,
  discardInitializedDatasetBuild,
  initializeDatasetBuild,
  isRecoverablePendingClaim,
  readFile,
  runPendingGuard,
  sourceDigest,
  sourceLifecyclePaths,
});

function relativeManifestPath(manifestPath, projectRoot) {
  return path.relative(projectRoot, manifestPath).split(path.sep).join('/');
}

function claimResult(build, manifestPath, claim, projectRoot) {
  return {
    build,
    claim: {
      originUri: claim.originUri,
      processingUri: claim.processingUri,
      processedUri: claim.processedUri,
      recoveredDuplicate: claim.recoveredDuplicate === true,
    },
    manifestPath: relativeManifestPath(manifestPath, projectRoot),
  };
}

async function resumeActiveIntake(active, options, relativeSource, deps) {
  const build = active.manifest;
  const derivedClassification = classifySourceSignals(options.signals, options.adapter);
  const source = (build.sources || []).find((item) => item.role === 'primary-reference') || build.sources?.[0];
  const expectedPaths = deps.sourceLifecyclePaths(options.key, { projectRoot: deps.projectRoot, extension: path.extname(relativeSource).toLowerCase() });
  const identityMatches =
    source?.uri === relativeSource &&
    source.processingUri === expectedPaths.processingUri &&
    source.processedUri === expectedPaths.processedUri &&
    source.availability === options.availability &&
    build.adapter === options.adapter &&
    (!build.sourceClassification ||
      JSON.stringify(build.sourceClassification.signals) === JSON.stringify(derivedClassification.signals));
  if (!identityMatches) {
    const error = new Error(`Dataset key is already leased by ${build.buildId}: ${options.key}`);
    error.code = 'KEY_LEASED';
    throw error;
  }

  const originPath = path.join(deps.projectRoot, relativeSource);
  const processingExists = existsSync(expectedPaths.processingPath);
  const processedExists = existsSync(expectedPaths.processedPath);
  const pendingExists = existsSync(originPath);
  if (pendingExists && build.state !== 'INTAKED') {
    const error = new Error(`Dataset key is already leased by ${build.buildId}: ${options.key}`);
    error.code = 'KEY_LEASED';
    throw error;
  }
  if (processedExists && build.state === 'INTAKED') {
    const error = new Error(`INTAKED Build ${build.buildId} unexpectedly has a processed Source projection`);
    error.code = 'ACTIVE_BUILD_SOURCE_STATE_INVALID';
    throw error;
  }
  for (const [label, filePath, present] of [
    ['pending', originPath, pendingExists],
    ['processing', expectedPaths.processingPath, processingExists],
    ['processed', expectedPaths.processedPath, processedExists],
  ]) {
    if (present && await deps.sourceDigest(filePath) !== source.digest) {
      const error = new Error(`${label} Source bytes do not match ${build.buildId}`);
      error.code = 'ACTIVE_BUILD_SOURCE_MISMATCH';
      throw error;
    }
  }

  let claim = {
    originUri: relativeSource,
    originPath,
    ...expectedPaths,
  };
  if (!processingExists && !processedExists) {
    if (!pendingExists) {
      const error = new Error(`Dataset Build ${build.buildId} has no pending, processing, or processed Source`);
      error.code = 'ACTIVE_BUILD_SOURCE_MISSING';
      throw error;
    }
    const guard = await deps.runPendingGuard(relativeSource, options.key, deps.projectRoot);
    if (guard.status !== 0) {
      const error = new Error((guard.stdout + guard.stderr).trim() || 'Pending Source guard failed');
      error.code = 'INTAKE_GUARD_FAILED';
      throw error;
    }
    claim = await deps.claimPendingSource({
      source: relativeSource,
      key: options.key,
      expectedDigest: source.digest,
      projectRoot: deps.projectRoot,
    });
  } else if (processingExists && pendingExists) {
    claim = await deps.claimPendingSource({
      source: relativeSource,
      key: options.key,
      expectedDigest: source.digest,
      projectRoot: deps.projectRoot,
    });
  }
  return claimResult(build, active.manifestPath, claim, deps.projectRoot);
}

/**
 * Record an INTAKED Dataset Build for one pending Source and claim it into
 * input/processing/. Resumes an active same-identity Build after a crash.
 */
export async function recordIntake(rawOptions, dependencies = {}) {
  const options = validateIntakeOptions(rawOptions);
  const deps = { ...DEFAULT_DEPENDENCIES, ...dependencies };
  const absoluteSource = sourcePath(options.source, deps.projectRoot);
  const relativeSource = path.relative(deps.projectRoot, absoluteSource).split(path.sep).join('/');
  const active = await deps.activeBuildForKey(options.key, deps.buildRoot, deps.projectRoot);
  if (active) {
    return resumeActiveIntake(active, options, relativeSource, deps);
  }
  if (!existsSync(absoluteSource)) throw intakeError(`Source does not exist: ${options.source}`, 'INTAKE_SOURCE_MISSING');
  const bytes = await deps.readFile(absoluteSource);
  const extension = path.extname(absoluteSource).toLowerCase();
  const isText = extension !== '.png';
  const text = isText ? new TextDecoder('utf-8', { fatal: true }).decode(bytes) : null;
  if (isText && !text.trim()) throw intakeError('Text Source is empty', 'INTAKE_SOURCE_EMPTY');
  const dimensions = isText ? { format: 'text', charLength: text.length } : (() => { const png = PNG.sync.read(bytes); return { width: png.width, height: png.height }; })();
  const digest = `sha256:${createHash('sha256').update(bytes).digest('hex')}`;
  const sourceClassification = createSourceClassification({
    datasetKey: options.key,
    adapter: options.adapter,
    signals: options.signals,
    reviewMethod: SOURCE_CLASSIFICATION_REVIEW_METHOD,
    source: {
      locator: relativeSource,
      digest,
      ...dimensions,
    },
    ...(isText ? { fullTextRange: [0, text.length] } : { fullImageBBox: [0, 0, dimensions.width, dimensions.height] }),
  });
  const guard = await deps.runPendingGuard(relativeSource, options.key, deps.projectRoot);
  if (guard.status !== 0) {
    const recoverable = await deps.isRecoverablePendingClaim({
      source: relativeSource,
      key: options.key,
      expectedDigest: digest,
      projectRoot: deps.projectRoot,
    });
    if (!recoverable) {
      const error = new Error((guard.stdout + guard.stderr).trim() || 'Pending Source guard failed');
      error.code = 'INTAKE_GUARD_FAILED';
      throw error;
    }
  }
  const processingUri = `input/processing/${options.key}${extension}`;
  const processedUri = `input/processed/${options.key}${extension}`;
  const build = createDatasetBuild({
    key: options.key,
    adapter: options.adapter,
    sourceClassification,
    baseCanonicalDigest: await deps.canonicalDataDigest(),
    sources: [{
      uri: relativeSource,
      processingUri,
      processedUri,
      availability: options.availability,
      role: 'primary-reference',
      digest,
      ...dimensions,
    }],
  });
  const { manifestPath } = await deps.initializeDatasetBuild(build, { buildRoot: deps.buildRoot });
  let claim;
  try {
    claim = await deps.claimPendingSource({
      source: relativeSource,
      key: options.key,
      expectedDigest: digest,
      projectRoot: deps.projectRoot,
    });
  } catch (cause) {
    try {
      await deps.discardInitializedDatasetBuild(build.buildId, { buildRoot: deps.buildRoot });
    } catch (rollbackCause) {
      const error = new Error(
        `Source claim failed (${cause.message}) and intake Build rollback failed (${rollbackCause.message})`
      );
      error.code = 'INTAKE_ROLLBACK_FAILED';
      error.cause = new AggregateError([cause, rollbackCause]);
      throw error;
    }
    throw cause;
  }
  return claimResult(build, manifestPath, claim, deps.projectRoot);
}
