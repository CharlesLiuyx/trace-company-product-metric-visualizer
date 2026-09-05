#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { datasetScriptForKey, registeredDatasetScripts } from './script-sources.mjs';
import { readProjectFile, rootDir } from './lib/project.mjs';
import { loadClassicScripts } from './lib/vm-browser.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Per-company income-statement and company-metadata SSOT files are not
// listed here: the verify:ssot step loads all of them in a VM, which
// surfaces syntax errors with the same fidelity as node --check.
const SUPPORT_DATA_FILES = [
  'data/revenue-metrics.js',
  'data/dataset-file-metadata.js',
];

function usage() {
  console.error('Usage: pnpm verify:dataset -- <dataset-key> [...] [--skip-render]');
}

function parseArgs(argv) {
  const args = argv.slice(2).filter((arg) => arg !== '--');
  const skipRender = args.includes('--skip-render');
  const positional = args.filter((arg) => !arg.startsWith('--'));
  if (!positional.length || args.some((arg) => arg.startsWith('--') && arg !== '--skip-render')) {
    usage();
    process.exit(2);
  }
  return { datasetKeys: [...new Set(positional)], skipRender };
}

function nonDefaultLanguages() {
  const context = loadClassicScripts(['src/icons.js', 'src/sankey-engine.js', 'src/i18n-dictionaries.js', 'src/i18n.js']);
  const i18n = context.SANKEY_I18N;
  if (!i18n?.languageCodes) {
    throw new Error('Could not derive language codes from src/i18n.js');
  }
  const defaultLanguage = i18n.defaultLanguage || 'en';
  return i18n.languageCodes.filter((code) => code !== defaultLanguage);
}

function runStep(steps, label, command, args) {
  const index = steps.length + 1;
  console.log(`\n=== [${index}] ${label} ===`);
  const startedAt = Date.now();
  const result = spawnSync(command, args, { stdio: 'inherit', cwd: rootDir });
  const seconds = ((Date.now() - startedAt) / 1000).toFixed(1);
  const passed = result.status === 0;
  steps.push({ label, seconds, passed });
  if (!passed) {
    summarize(steps);
    console.error(`\nverify:dataset failed at step ${index}: ${label}`);
    process.exit(1);
  }
}

function summarize(steps) {
  console.log('\n=== verify:dataset summary ===');
  for (const [index, step] of steps.entries()) {
    console.log(`${step.passed ? 'PASS' : 'FAIL'}  [${index + 1}] ${step.label} (${step.seconds}s)`);
  }
}

function main() {
  const { datasetKeys, skipRender } = parseArgs(process.argv);
  const steps = [];
  const metricKeys = datasetKeys.filter((key) => existsSync(path.join(rootDir, 'data', 'metric-observations', `${key}.json`)));
  for (const key of metricKeys) runStep(steps, `verify:metrics ${key}`, process.execPath, [path.join(__dirname, 'verify-metrics.mjs'), key]);
  const financialKeys = datasetKeys.filter((key) => !metricKeys.includes(key));
  if (!financialKeys.length) { summarize(steps); return; }
  const registered = new Set(registeredDatasetScripts());
  const syntaxTargets = new Set(SUPPORT_DATA_FILES.filter((file) => existsSync(path.join(rootDir, file))));
  for (const key of financialKeys) {
    const script = datasetScriptForKey(key);
    if (existsSync(path.join(rootDir, script))) syntaxTargets.add(script);
  }
  for (const file of syntaxTargets) {
    runStep(steps, `node --check ${file}`, process.execPath, ['--check', path.join(rootDir, file)]);
  }
  runStep(steps, 'verify:ssot', process.execPath, [path.join(__dirname, 'verify-ssot.mjs')]);
  runStep(steps, `verify:i18n --strict ${financialKeys.join(' ')}`, process.execPath, [
    path.join(__dirname, 'verify-i18n.mjs'),
    '--strict',
    ...financialKeys,
  ]);
  runStep(steps, 'verify:dataset-file-metadata', process.execPath, [
    path.join(__dirname, 'update-dataset-file-metadata.mjs'),
    '--check',
  ]);

  if (skipRender) {
    console.log('\nrender steps skipped: --skip-render');
  } else {
    const languages = financialKeys.some((key) => registered.has(datasetScriptForKey(key))) ? nonDefaultLanguages() : [];
    for (const datasetKey of financialKeys) {
      if (!registered.has(datasetScriptForKey(datasetKey))) {
        console.log(`\nrender steps skipped: "${datasetKey}" is not a registered sankey dataset (revenue-metric keys stop here)`);
        continue;
      }
      for (const language of [null, ...languages]) {
        runStep(steps, `verify:d3 ${datasetKey}${language ? ` --language ${language}` : ''}`, process.execPath, [
          path.join(__dirname, 'verify-d3.mjs'), datasetKey, ...(language ? ['--language', language] : []),
        ]);
      }
    }
  }

  summarize(steps);
  console.log(`\nverify:dataset passed for "${datasetKeys.join(', ')}" (${steps.length} step(s)).`);
}

main();
