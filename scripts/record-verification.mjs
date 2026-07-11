#!/usr/bin/env node
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { recordDatasetVerification } from './lib/dataset-verification.mjs';

function usage() {
  console.error('Usage: pnpm record:verification -- <build-id> [--json]');
}

export function parseArgs(argv) {
  const args = argv.slice(2).filter((arg) => arg !== '--');
  const buildIds = args.filter((arg) => !arg.startsWith('--'));
  const options = args.filter((arg) => arg.startsWith('--'));
  if (buildIds.length !== 1 || options.some((option) => option !== '--json') || options.filter((option) => option === '--json').length > 1) {
    const error = new Error('Expected one Dataset Build id and optional --json');
    error.code = 'ERR_USAGE';
    throw error;
  }
  if (!/^build-[a-z0-9-]+$/i.test(buildIds[0])) {
    const error = new Error(`Invalid Dataset Build id: ${buildIds[0]}`);
    error.code = 'ERR_USAGE';
    throw error;
  }
  return { buildId: buildIds[0], json: options.includes('--json') };
}

export async function runRecordVerification(options, dependencies = {}) {
  const record = dependencies.recordDatasetVerification || recordDatasetVerification;
  return record(options.buildId);
}

async function main() {
  const options = parseArgs(process.argv);
  const result = await runRecordVerification(options);
  const verifierOutput = `${result.output.stdout}${result.output.stderr}`;
  if (verifierOutput) {
    const stream = options.json ? process.stderr : process.stdout;
    stream.write(verifierOutput.endsWith('\n') ? verifierOutput : `${verifierOutput}\n`);
  }
  if (options.json) {
    console.log(JSON.stringify({
      manifest: result.manifest,
      verificationReference: result.verificationReference || result.reference,
    }, null, 2));
  } else {
    console.log(`dataset verification evidence: ${result.reference.digest}`);
    console.log(`object: ${result.reference.path}`);
  }
}

const isDirectRun = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isDirectRun) {
  main().catch((error) => {
    console.error(`${error.code ? `${error.code}: ` : ''}${error.message}`);
    if (error.code === 'ERR_USAGE') usage();
    process.exitCode = error.code === 'ERR_USAGE' ? 2 : 1;
  });
}
