#!/usr/bin/env node
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { inspectBuildCloseout } from './lib/dataset-build-closeout.mjs';

function usage() {
  console.error('Usage: node scripts/verify-closeout.mjs <build-id> [--json]');
}

function verifyError(code, message, details = undefined) {
  const error = new Error(message);
  error.code = code;
  if (details !== undefined) error.details = details;
  return error;
}

function usageError(message) {
  return verifyError('ERR_USAGE', message);
}

export function parseArgs(argv) {
  const args = argv.slice(2).filter((arg) => arg !== '--');
  const positional = [];
  let json = false;
  for (const arg of args) {
    if (arg === '--json') {
      if (json) throw usageError('--json may be supplied only once');
      json = true;
    } else if (arg.startsWith('--')) {
      throw usageError(`Unknown option: ${arg}`);
    } else {
      positional.push(arg);
    }
  }
  if (positional.length !== 1) throw usageError('Exactly one Dataset Build id is required');
  if (!/^build-[a-z0-9-]+$/i.test(positional[0])) {
    throw usageError(`Invalid Dataset Build id: ${positional[0]}`);
  }
  return { buildId: positional[0], json };
}

/** Pure close-out verdict used by both the CLI and Interface tests. */
export function closeoutVerdict(inspection) {
  const reasons = [];
  if (inspection?.historicalState !== 'SEALED') {
    reasons.push(`historical state is ${inspection?.historicalState || '<missing>'}; expected SEALED`);
  }
  if (inspection?.effectiveState !== 'SEALED') {
    reasons.push(`effective state is ${inspection?.effectiveState || '<missing>'}; expected SEALED`);
  }
  if (inspection?.fresh !== true) {
    const staleReasons = Array.isArray(inspection?.reasons) && inspection.reasons.length
      ? ` (${inspection.reasons.join(', ')})`
      : '';
    reasons.push(`freshness check failed${staleReasons}`);
  }
  if (inspection?.reviewStatus !== 'accepted') {
    reasons.push(`review status is ${inspection?.reviewStatus || '<missing>'}; expected accepted`);
  }
  return { ok: reasons.length === 0, reasons };
}

export async function verifyBuildCloseout(buildId, dependencies = {}) {
  const inspect = dependencies.inspectBuildCloseout || inspectBuildCloseout;
  const inspection = await inspect(buildId);
  return { inspection, verdict: closeoutVerdict(inspection) };
}

async function main() {
  const options = parseArgs(process.argv);
  const result = await verifyBuildCloseout(options.buildId);
  if (options.json) {
    console.log(JSON.stringify({ ...result.inspection, closeout: result.verdict }, null, 2));
  }
  if (!result.verdict.ok) {
    throw verifyError(
      'CLOSEOUT_NOT_COMPLETE',
      `Dataset Build ${options.buildId} is not complete: ${result.verdict.reasons.join('; ')}`,
      result.verdict.reasons
    );
  }
  if (!options.json) console.log(`Dataset Build ${options.buildId} close-out verified.`);
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
