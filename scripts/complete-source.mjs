#!/usr/bin/env node
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { readDatasetBuild } from './lib/dataset-build-store.mjs';
import { promoteProcessingSource, sourceLifecyclePaths } from './lib/source-lifecycle.mjs';
import { verifyBuildCloseout } from './verify-closeout.mjs';

function usage() {
  console.error('Usage: pnpm complete:source -- <build-id> [--json]');
}

function commandError(code, message, details = undefined) {
  const error = new Error(message);
  error.code = code;
  if (details !== undefined) error.details = details;
  return error;
}

export function parseArgs(argv) {
  const args = argv.slice(2).filter((arg) => arg !== '--');
  const positional = [];
  let json = false;
  for (const arg of args) {
    if (arg === '--json') {
      if (json) throw commandError('ERR_USAGE', '--json may be supplied only once');
      json = true;
    } else if (arg.startsWith('--')) {
      throw commandError('ERR_USAGE', `Unknown option: ${arg}`);
    } else {
      positional.push(arg);
    }
  }
  if (positional.length !== 1) {
    throw commandError('ERR_USAGE', 'Exactly one Dataset Build id is required');
  }
  if (!/^build-[a-z0-9-]+$/i.test(positional[0])) {
    throw commandError('ERR_USAGE', `Invalid Dataset Build id: ${positional[0]}`);
  }
  return { buildId: positional[0], json };
}

const DEFAULT_DEPENDENCIES = Object.freeze({
  promoteProcessingSource,
  readDatasetBuild,
  sourceLifecyclePaths,
  verifyBuildCloseout,
});

export async function completeSource(buildId, dependencies = {}) {
  const deps = { ...DEFAULT_DEPENDENCIES, ...dependencies };
  const { inspection, verdict } = await deps.verifyBuildCloseout(buildId);
  if (!verdict.ok) {
    throw commandError(
      'SOURCE_CLOSEOUT_REQUIRED',
      `Source cannot be completed before accepted fresh close-out: ${verdict.reasons.join('; ')}`,
      verdict.reasons
    );
  }

  const build = await deps.readDatasetBuild(buildId);
  const source = (build.sources || []).find((item) => item.role === 'primary-reference') || build.sources?.[0];
  if (!source?.digest) {
    throw commandError('BUILD_SOURCE_INVALID', `Dataset Build ${buildId} has no primary Source digest`);
  }
  const expected = deps.sourceLifecyclePaths(build.key);
  for (const field of ['processingUri', 'processedUri']) {
    if (source[field] && source[field] !== expected[field]) {
      throw commandError(
        'BUILD_SOURCE_LOCATOR_MISMATCH',
        `Dataset Build ${buildId} ${field} is ${source[field]}; expected ${expected[field]}`
      );
    }
  }

  const promotion = await deps.promoteProcessingSource({
    key: build.key,
    expectedDigest: source.digest,
  });
  return {
    buildId,
    key: build.key,
    historicalState: inspection.historicalState,
    effectiveState: inspection.effectiveState,
    reviewStatus: inspection.reviewStatus,
    source: {
      processingUri: promotion.processingUri,
      processedUri: promotion.processedUri,
      digest: source.digest,
      alreadyCompleted: promotion.alreadyCompleted,
      recoveredDuplicate: promotion.recoveredDuplicate,
    },
  };
}

async function main() {
  const options = parseArgs(process.argv);
  const result = await completeSource(options.buildId);
  if (options.json) {
    console.log(JSON.stringify(result, null, 2));
    return;
  }
  console.log(`Source completed for ${result.buildId} (${result.key})`);
  console.log(`processed: ${result.source.processedUri}`);
  console.log(`digest: ${result.source.digest}`);
  if (result.source.alreadyCompleted) {
    console.log(result.source.recoveredDuplicate ? 'status: recovered completed move' : 'status: already complete');
  } else {
    console.log('status: promoted from input/processing/');
  }
}

const isDirectRun = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isDirectRun) {
  main().catch((error) => {
    if (error.code === 'ERR_USAGE') {
      console.error(`Error: ${error.message}`);
      usage();
      process.exitCode = 2;
      return;
    }
    console.error(`${error.code ? `${error.code}: ` : ''}${error.message}`);
    process.exitCode = 1;
  });
}
