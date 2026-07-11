#!/usr/bin/env node
// Aggregate fast gate (pnpm check): repo-wide JS syntax sweep plus the
// sub-second data verifiers. No rendering, no browser — suitable before
// every commit. Render-level gates stay separate (verify:dataset,
// verify:d3, verify:app, verify:standalone).
import { spawnSync } from 'node:child_process';
import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { rootDir } from './lib/project.mjs';

const SCAN_DIRS = ['src', 'data', 'scripts', 'tests'];
const SKIP_DIRS = new Set(['node_modules', '__pycache__', 'assets']);

function jsFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      return SKIP_DIRS.has(entry.name) ? [] : jsFiles(fullPath);
    }
    return /\.(js|mjs)$/.test(entry.name) ? [fullPath] : [];
  });
}

function checkSyntax() {
  const files = SCAN_DIRS.flatMap((dir) => jsFiles(path.join(rootDir, dir)));
  const errors = [];
  for (const file of files) {
    const relative = path.relative(rootDir, file);
    if (file.endsWith('.mjs')) {
      // ES modules need node's own parser; vm.Script rejects import/export
      const result = spawnSync(process.execPath, ['--check', file], { encoding: 'utf8' });
      if (result.status !== 0) errors.push(`${relative}\n${result.stderr.trim()}`);
      continue;
    }
    try {
      new vm.Script(readFileSync(file, 'utf8'), { filename: relative });
    } catch (error) {
      errors.push(`${relative}: ${error.message}`);
    }
  }
  if (errors.length) {
    throw new Error(`syntax errors in ${errors.length} file(s):\n${errors.join('\n')}`);
  }
  return `${files.length} JS files parsed`;
}

function runVerifier(script, args = []) {
  const result = spawnSync(process.execPath, [path.join(rootDir, 'scripts', script), ...args], {
    cwd: rootDir,
    encoding: 'utf8',
  });
  if (result.status !== 0) {
    throw new Error(`${script} failed:\n${(result.stdout + result.stderr).trim()}`);
  }
  const lastLine = result.stdout.trim().split('\n').filter(Boolean).pop() || 'ok';
  return lastLine.length > 100 ? `${lastLine.slice(0, 97)}...` : lastLine;
}

function runUnitTests() {
  const result = spawnSync(process.execPath, ['--test', 'tests/*.test.mjs'], {
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
  ['syntax', checkSyntax],
  ['test', runUnitTests],
  ['check:pending', () => runVerifier('check-pending-processed.mjs')],
  ['verify:architecture', () => runVerifier('verify-architecture-contract.mjs')],
  ['verify:app-globals', () => runVerifier('verify-app-globals.mjs')],
  ['verify:dataset-manifest', () => runVerifier('update-dataset-manifest.mjs', ['--check'])],
  ['verify:render-baselines', () => runVerifier('verify-render-regression.mjs', ['--structure-only'])],
  ['verify:ssot', () => runVerifier('verify-ssot.mjs')],
  ['verify:i18n', () => runVerifier('verify-i18n.mjs')],
  ['verify:dataset-file-metadata', () => runVerifier('update-dataset-file-metadata.mjs', ['--check'])],
];

let failed = false;
for (const [name, run] of steps) {
  const startedAt = Date.now();
  try {
    const summary = run();
    console.log(`ok   ${name} (${Date.now() - startedAt}ms) — ${summary}`);
  } catch (error) {
    failed = true;
    console.error(`FAIL ${name}: ${error.message}`);
  }
}

if (failed) {
  console.error('\ncheck FAILED');
  process.exit(1);
}
console.log('\ncheck passed');
