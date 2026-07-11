#!/usr/bin/env node
import { createHash } from 'node:crypto';
import { existsSync } from 'node:fs';
import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { PNG } from 'pngjs';
import {
  DATASET_ADAPTERS,
  SOURCE_AVAILABILITY,
  createDatasetBuild,
} from './lib/dataset-build.mjs';
import {
  discardInitializedDatasetBuild,
  initializeDatasetBuild,
} from './lib/dataset-build-store.mjs';
import { projectPath, rootDir } from './lib/project.mjs';
import {
  claimPendingSource,
  isRecoverablePendingClaim,
  sourceDigest,
  sourceLifecyclePaths,
} from './lib/source-lifecycle.mjs';

const BUILD_ROOT = projectPath('output', 'builds');

function usage() {
  console.error(`Usage:
  pnpm record:intake -- <input/pending/source.png> --key <dataset-key> \\
    --adapter <income-statement|revenue-metric> \\
    [--availability <published|local-only|restricted>] [--json]

This records an INTAKED Dataset Build and immediately claims the Source at
input/processing/<dataset-key>.png. It does not write canonical data.`);
}

function usageError(message) {
  const error = new Error(message);
  error.code = 'ERR_USAGE';
  return error;
}

export function parseArgs(argv) {
  const args = argv.slice(2).filter((arg) => arg !== '--');
  const positional = [];
  let key = '';
  let adapter = '';
  let availability = 'local-only';
  let json = false;
  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];
    if (arg === '--json') {
      json = true;
      continue;
    }
    if (arg === '--key' || arg === '--adapter' || arg === '--availability') {
      const value = args[index + 1];
      index += 1;
      if (!value || value.startsWith('--')) throw usageError(`${arg} requires a value`);
      if (arg === '--key') key = value;
      if (arg === '--adapter') adapter = value;
      if (arg === '--availability') availability = value;
      continue;
    }
    if (arg.startsWith('--')) throw usageError(`Unknown option: ${arg}`);
    positional.push(arg);
  }
  if (positional.length !== 1) throw usageError('Exactly one pending Source path is required');
  if (!key) throw usageError('--key is required');
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(key)) throw usageError('--key must be lowercase kebab case');
  if (!DATASET_ADAPTERS.includes(adapter)) throw usageError(`Unsupported --adapter: ${adapter}`);
  if (!SOURCE_AVAILABILITY.includes(availability)) throw usageError(`Unsupported --availability: ${availability}`);
  return { source: positional[0], key, adapter, availability, json };
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

function sourcePath(requested, projectRoot = rootDir, options = {}) {
  const absolute = path.resolve(projectRoot, requested);
  if (path.dirname(absolute) !== path.join(projectRoot, 'input', 'pending') || !/\.png$/i.test(absolute)) {
    throw usageError('Source must be a PNG directly under input/pending/');
  }
  if (options.requireExisting !== false && !existsSync(absolute)) {
    throw usageError(`Source does not exist: ${requested}`);
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
    if (!existsSync(manifestPath)) continue;
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

function runPendingGuard(relativeSource, key, projectRoot = rootDir) {
  return spawnSync(
    process.execPath,
    [path.join(projectRoot, 'scripts', 'check-pending-processed.mjs'), '--file', relativeSource, '--key', key],
    { cwd: projectRoot, encoding: 'utf8' }
  );
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
  const source = (build.sources || []).find((item) => item.role === 'primary-reference') || build.sources?.[0];
  const expectedPaths = deps.sourceLifecyclePaths(options.key, { projectRoot: deps.projectRoot });
  const identityMatches =
    source?.uri === relativeSource &&
    source.processingUri === expectedPaths.processingUri &&
    source.processedUri === expectedPaths.processedUri &&
    source.availability === options.availability &&
    build.adapter === options.adapter;
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

export async function recordIntake(options, dependencies = {}) {
  const deps = { ...DEFAULT_DEPENDENCIES, ...dependencies };
  const absoluteSource = sourcePath(options.source, deps.projectRoot, { requireExisting: false });
  const relativeSource = path.relative(deps.projectRoot, absoluteSource).split(path.sep).join('/');
  const active = await deps.activeBuildForKey(options.key, deps.buildRoot, deps.projectRoot);
  if (active) {
    return resumeActiveIntake(active, options, relativeSource, deps);
  }
  if (!existsSync(absoluteSource)) throw usageError(`Source does not exist: ${options.source}`);
  const bytes = await deps.readFile(absoluteSource);
  const png = PNG.sync.read(bytes);
  const digest = `sha256:${createHash('sha256').update(bytes).digest('hex')}`;
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
  const processingUri = `input/processing/${options.key}.png`;
  const processedUri = `input/processed/${options.key}.png`;
  const build = createDatasetBuild({
    key: options.key,
    adapter: options.adapter,
    baseCanonicalDigest: await deps.canonicalDataDigest(),
    sources: [{
      uri: relativeSource,
      processingUri,
      processedUri,
      availability: options.availability,
      role: 'primary-reference',
      digest,
      width: png.width,
      height: png.height,
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

async function main() {
  const options = parseArgs(process.argv);
  const result = await recordIntake(options);
  if (options.json) {
    console.log(JSON.stringify({ ...result.build, sourceClaim: result.claim, manifestPath: result.manifestPath }, null, 2));
    return;
  }
  console.log(`recorded Dataset Build ${result.build.buildId}`);
  console.log(`state: ${result.build.state}`);
  console.log(`key: ${result.build.key}`);
  console.log(`source origin: ${result.build.sources[0].uri} (${result.build.sources[0].width}x${result.build.sources[0].height})`);
  console.log(`source working: ${result.claim.processingUri}`);
  console.log(`source final: ${result.claim.processedUri}`);
  if (result.claim.recoveredDuplicate) console.log('source recovery: reconciled an interrupted same-digest claim');
  console.log(`base canonical: ${result.build.baseCanonicalDigest}`);
  console.log(`manifest: ${result.manifestPath}`);
  console.log('Source claimed in input/processing/; promote it only after accepted fresh close-out.');
}

const isDirectRun = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isDirectRun) {
  main().catch((error) => {
    if (error.code === 'ERR_USAGE') usage();
    console.error(error.stack || error.message);
    process.exit(error.code === 'ERR_USAGE' ? 2 : 1);
  });
}
