#!/usr/bin/env node
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  finishReviewedBuild,
  inspectBuildCloseout,
  prepareBuildReview,
  sealReviewedBuild,
  stageReviewedBaseline,
} from './lib/dataset-build-closeout.mjs';

const COMMANDS = Object.freeze([
  'prepare-review',
  'finish',
  'stage-baseline',
  'seal',
  'inspect',
]);

function usage() {
  console.error(`Usage:
  node scripts/record-build.mjs prepare-review <build-id> --input <review-input.json> [--json]
  node scripts/record-build.mjs finish <build-id> --review <review.json> [--json]
  node scripts/record-build.mjs stage-baseline <build-id> --input <baseline.json> [--json]
  node scripts/record-build.mjs seal <build-id> [--json]
  node scripts/record-build.mjs inspect <build-id> [--json]

All mutation commands write build-local state only. A JSON document cannot
select or override a different Build from the <build-id> on the command line.`);
}

function commandError(code, message) {
  const error = new Error(message);
  error.code = code;
  return error;
}

function usageError(message) {
  return commandError('ERR_USAGE', message);
}

function assertBuildId(buildId) {
  if (!/^build-[a-z0-9-]+$/i.test(String(buildId || ''))) {
    throw usageError(`Invalid Dataset Build id: ${buildId || '<missing>'}`);
  }
}

export function parseArgs(argv) {
  const args = argv.slice(2).filter((arg) => arg !== '--');
  const command = args.shift();
  const buildId = args.shift();
  if (!COMMANDS.includes(command)) {
    throw usageError(`Unknown or missing command: ${command || '<missing>'}`);
  }
  assertBuildId(buildId);

  let inputPath = '';
  let json = false;
  const expectedInputOption = command === 'finish'
    ? '--review'
    : ['prepare-review', 'stage-baseline'].includes(command)
      ? '--input'
      : null;

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];
    if (arg === '--json') {
      if (json) throw usageError('--json may be supplied only once');
      json = true;
      continue;
    }
    if (arg === '--input' || arg === '--review') {
      if (arg !== expectedInputOption) {
        throw usageError(`${command} requires ${expectedInputOption || 'no JSON input option'}, not ${arg}`);
      }
      if (inputPath) throw usageError(`${arg} may be supplied only once`);
      const value = args[index + 1];
      index += 1;
      if (!value || value.startsWith('--')) throw usageError(`${arg} requires a JSON file path`);
      inputPath = value;
      continue;
    }
    throw usageError(`Unknown argument for ${command}: ${arg}`);
  }

  if (expectedInputOption && !inputPath) {
    throw usageError(`${command} requires ${expectedInputOption} <json>`);
  }
  if (!expectedInputOption && inputPath) {
    throw usageError(`${command} does not accept JSON input`);
  }
  return { command, buildId, ...(inputPath ? { inputPath } : {}), json };
}

async function readJsonDocument(filePath) {
  const absolute = path.resolve(process.cwd(), filePath);
  let source;
  try {
    source = await readFile(absolute, 'utf8');
  } catch (cause) {
    throw commandError('INPUT_JSON_UNREADABLE', `Cannot read JSON input ${filePath}: ${cause.message}`);
  }
  let value;
  try {
    value = JSON.parse(source);
  } catch (cause) {
    throw commandError('INPUT_JSON_INVALID', `Invalid JSON input ${filePath}: ${cause.message}`);
  }
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw commandError('INPUT_JSON_INVALID', `JSON input must be an object: ${filePath}`);
  }
  return value;
}

export function bindCliBuildId(value, buildId) {
  if (Object.hasOwn(value, 'buildId') && value.buildId !== buildId) {
    throw commandError(
      'BUILD_ID_MISMATCH',
      `JSON input targets ${value.buildId || '<empty>'}; CLI selected ${buildId}`
    );
  }
  return { ...value, buildId };
}

const DEFAULT_DEPENDENCIES = Object.freeze({
  readJson: readJsonDocument,
  prepareBuildReview,
  finishReviewedBuild,
  stageReviewedBaseline,
  sealReviewedBuild,
  inspectBuildCloseout,
});

export async function runRecordBuild(options, dependencies = {}) {
  const deps = { ...DEFAULT_DEPENDENCIES, ...dependencies };
  if (options.command === 'inspect') {
    return deps.inspectBuildCloseout(options.buildId);
  }
  if (options.command === 'seal') {
    return deps.sealReviewedBuild({ buildId: options.buildId });
  }
  const input = bindCliBuildId(await deps.readJson(options.inputPath), options.buildId);
  if (options.command === 'prepare-review') return deps.prepareBuildReview(input);
  if (options.command === 'finish') return deps.finishReviewedBuild(input);
  if (options.command === 'stage-baseline') return deps.stageReviewedBaseline(input);
  throw usageError(`Unsupported command: ${options.command}`);
}

function buildFromResult(result) {
  return result?.build || result;
}

function printResult(options, result) {
  if (options.json) {
    console.log(JSON.stringify(result, null, 2));
    return;
  }
  if (options.command === 'inspect') {
    console.log(`Dataset Build ${result.buildId}`);
    console.log(`historical: ${result.historicalState}`);
    console.log(`effective: ${result.effectiveState}`);
    console.log(`fresh: ${result.fresh ? 'yes' : 'no'}`);
    console.log(`review: ${result.reviewStatus}`);
    if (result.reasons?.length) console.log(`reasons: ${result.reasons.join(', ')}`);
    if (result.taskInformation) console.log(`\n${result.taskInformation}`);
    if (result.loopFidelitySummary) console.log(result.loopFidelitySummary);
    return;
  }
  const build = buildFromResult(result);
  console.log(`${options.command} recorded for ${options.buildId}`);
  if (build?.state) console.log(`state: ${build.state}`);
  if (build?.revision != null) console.log(`revision: ${build.revision}`);
  if (result?.fidelityResult?.status) console.log(`review: ${result.fidelityResult.status}`);
  if (result?.reviewToken) console.log(`review token: ${result.reviewToken}`);
}

async function main() {
  const options = parseArgs(process.argv);
  printResult(options, await runRecordBuild(options));
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
