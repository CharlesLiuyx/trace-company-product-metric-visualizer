#!/usr/bin/env node
// Aggregate fast gate (pnpm check): native syntax parsing and bounded,
// independent consistency checks. No rendering, no browser — suitable before
// every commit. Render-level gates stay separate (verify:dataset,
// verify:d3, verify:app, verify:standalone).
import path from 'node:path';
import { rootDir } from './lib/project.mjs';
import { runCheckProcess, runChecks } from './lib/check-runner.mjs';

async function runVerifier(script, args = [], nodeArgs = []) {
  const result = await runCheckProcess(process.execPath, [...nodeArgs, path.join(rootDir, 'scripts', script), ...args], {
    cwd: rootDir,
    encoding: 'utf8',
  });
  if (result.status !== 0) {
    throw new Error(`${script} failed:\n${(result.stdout + result.stderr).trim()}`);
  }
  const lastLine = result.stdout.trim().split('\n').filter(Boolean).pop() || 'ok';
  return lastLine.length > 100 ? `${lastLine.slice(0, 97)}...` : lastLine;
}

async function runUnitTests() {
  const result = await runCheckProcess(process.execPath, ['--test', '--test-reporter=tap', 'tests/*.test.mjs'], {
    cwd: rootDir,
    encoding: 'utf8',
  });
  const summary = {};
  for (const line of result.stdout.split('\n')) {
    const match = line.match(/^# (tests|pass|fail) (\d+)$/);
    if (match) summary[match[1]] = Number(match[2]);
  }
  if (result.status !== 0) {
    const failures = result.stdout
      .split('\n')
      .filter((line) => line.startsWith('not ok'))
      .slice(0, 10)
      .join('\n');
    throw new Error(`unit tests failed (${summary.fail ?? '?'} failing):\n${failures || result.stderr.trim()}`);
  }
  return `${summary.pass ?? '?'} unit tests passed`;
}

const steps = [
  ['syntax', () => runVerifier('check-syntax.mjs', [], ['--experimental-vm-modules'])],
  ['test', runUnitTests],
  ['check:pending', () => runVerifier('check-pending-processed.mjs')],
  ['verify:architecture', () => runVerifier('verify-architecture-contract.mjs')],
  ['verify:app-globals', () => runVerifier('verify-app-globals.mjs')],
  ['verify:dataset-manifest', () => runVerifier('update-dataset-manifest.mjs', ['--check'])],
  ['verify:render-baselines', () => runVerifier('verify-render-regression.mjs', ['--structure-only'])],
  ['verify:workflow', () => runVerifier('update-workflow-reference.mjs', ['--check'])],
  ['verify:workflow-graph', () => runVerifier('update-workflow-graph.mjs', ['--check'])],
  ['verify:asset-catalog', () => runVerifier('update-asset-catalog.mjs', ['--check'])],
  ['verify:feedback-patterns', () => runVerifier('update-feedback-patterns.mjs', ['--check'])],
  ['verify:metrics', () => runVerifier('verify-metrics.mjs')],
  ['verify:ssot', () => runVerifier('verify-ssot.mjs')],
  ['verify:i18n', () => runVerifier('verify-i18n.mjs')],
  ['verify:dataset-file-metadata', () => runVerifier('update-dataset-file-metadata.mjs', ['--check'])],
];

const startedAt = Date.now();
const results = await runChecks(steps, 2, (result) => {
  if (result.passed) console.log(`ok   ${result.name} (${result.elapsedMs}ms) — ${result.summary}`);
  else console.error(`FAIL ${result.name}: ${result.error}`);
});
console.log(`\ncheck ${results.every((result) => result.passed) ? 'passed' : 'FAILED'} (${Date.now() - startedAt}ms wall; 2 workers)`);
if (results.some((result) => !result.passed)) process.exitCode = 1;
