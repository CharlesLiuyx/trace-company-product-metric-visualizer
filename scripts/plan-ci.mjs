#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import { appendFileSync, existsSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  createFullCiPlan,
  incomeStatementKeysFromSource,
  parseNameStatusZ,
  planCiChecks,
} from './lib/ci-plan.mjs';
import { projectPath, rootDir } from './lib/project.mjs';
import { dataRegistrationOnly, changedBaselineKeys, assetConsumers, lastSuccessfulMain } from './lib/ci-diff-facts.mjs';

const ZERO_SHA = /^0+$/;

function usage() {
  console.error('Usage: pnpm plan:ci -- --base <git-sha> --head <git-sha> [--last-successful-main] [--github-output <path>] [--json]');
}

export function parseArgs(argv) {
  const args = argv.slice(2).filter((arg) => arg !== '--');
  const options = { base: '', head: '', githubOutput: '', json: false };
  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];
    if (arg === '--last-successful-main') { options.lastSuccessfulMain = true; continue; }
    if (arg === '--json') {
      options.json = true;
      continue;
    }
    if (!['--base', '--head', '--github-output'].includes(arg)) {
      usage();
      process.exitCode = 2;
      return null;
    }
    const value = args[index + 1];
    if (!value || value.startsWith('--')) {
      usage();
      process.exitCode = 2;
      return null;
    }
    index += 1;
    if (arg === '--base') options.base = value;
    else if (arg === '--head') options.head = value;
    else options.githubOutput = value;
  }
  return options;
}

function currentDatasetKeys() {
  const dir = projectPath('data', 'datasets');
  if (!existsSync(dir)) return new Set();
  return new Set(
    readdirSync(dir)
      .filter((file) => file.endsWith('.js') && file !== 'example-saas-fy25.js')
      .map((file) => path.basename(file, '.js'))
  );
}

function incomeStatementKeys(entries) {
  const result = new Map();
  for (const entry of entries) {
    const file = String(entry.path || '').split(path.sep).join('/');
    if (!file.startsWith('data/income-statements/') || !file.endsWith('.js')) continue;
    const absolute = projectPath(...file.split('/'));
    if (!existsSync(absolute)) continue;
    result.set(file, incomeStatementKeysFromSource(readFileSync(absolute, 'utf8')));
  }
  return result;
}

function readChangedEntries(base, head) {
  if (!base || !head || ZERO_SHA.test(base) || ZERO_SHA.test(head)) return null;
  const result = spawnSync('git', ['diff', '--name-status', '-z', '--find-renames', `${base}...${head}`], {
    cwd: rootDir,
    encoding: 'utf8',
  });
  if (result.status !== 0) {
    throw new Error(`git diff failed: ${(result.stderr || result.stdout).trim()}`);
  }
  return parseNameStatusZ(result.stdout);
}

function sourceAt(revision, file) {
  const result = spawnSync('git', ['show', `${revision}:${file}`], { cwd: rootDir, encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 });
  return result.status === 0 ? result.stdout : null;
}

function contentFacts(entries, base, head) {
  const changed = new Set(entries.flatMap((entry) => [entry.path, entry.oldPath].filter(Boolean)));
  const sources = (file) => [sourceAt(base, file), sourceAt(head, file)];
  const facts = {};
  if (changed.has('index.html')) facts.registrationOnly = dataRegistrationOnly(...sources('index.html'));
  if (changed.has('data/render-baselines.json')) facts.baselineKeys = changedBaselineKeys(...sources('data/render-baselines.json'));
  if ([...changed].some((file) => file.startsWith('data/assets/'))) {
    // Catalog reverse lookup owns Adapter assets. Shared runtime references
    // would need app coverage, so keep that unfamiliar case on the full route.
    const shared = spawnSync('git', ['grep', '-l', 'data/assets/', head, '--', 'src', 'vendor', 'index.html'], { cwd: rootDir, encoding: 'utf8' });
    if (shared.status === 1) facts.assetKeysByPath = assetConsumers(...sources('data/assets/catalog.json'));
  }
  return facts;
}

function outputValues(plan) {
  const bool = (value) => String(Boolean(value));
  return {
    needs_browser: bool(plan.needsBrowser),
    verify_app: bool(plan.verifyApp),
    build_site: bool(plan.buildSite),
    verify_site: bool(plan.verifySite),
    site_projection: bool(plan.siteProjection),
    render_scope: plan.renderScope,
    render_keys: plan.renderKeys.join(' '),
    build_standalone: bool(plan.buildStandalone),
    verify_standalone: bool(plan.verifyStandalone),
  };
}

function printHuman(plan) {
  const values = outputValues(plan);
  console.log('CI verification plan');
  console.log(`  changed files: ${plan.changedFiles.length}`);
  console.log(`  ChangeImpact: ${plan.changeImpacts.join(', ') || 'source-only / none'}`);
  console.log(`  browser needed: ${values.needs_browser}`);
  console.log(`  app: ${values.verify_app}`);
  console.log(`  site: build=${values.build_site}, browser=${values.verify_site}, projection=${values.site_projection}`);
  console.log(`  render regression: ${values.render_scope}${values.render_keys ? ` (${values.render_keys})` : ''}`);
  console.log(`  standalone: build=${values.build_standalone}, browser=${values.verify_standalone}`);
  for (const reason of plan.reasons) console.log(`  - ${reason}`);
}

async function main() {
  const options = parseArgs(process.argv);
  if (!options) return;
  let plan;
  try {
    if (options.lastSuccessfulMain) {
      options.base = await lastSuccessfulMain({
        repository: process.env.GITHUB_REPOSITORY, head: options.head,
        token: process.env.GITHUB_TOKEN, apiUrl: process.env.GITHUB_API_URL,
        isAncestor: (base, head) => spawnSync('git', ['merge-base', '--is-ancestor', base, head], { cwd: rootDir }).status === 0,
      });
      console.error(`CI comparison base: last successful main ${options.base}`);
    }
    const entries = readChangedEntries(options.base, options.head);
    plan = entries == null
      ? createFullCiPlan('missing or zero Git comparison SHA; strict fallback')
      : planCiChecks(entries, {
          existingDatasetKeys: currentDatasetKeys(),
          incomeStatementKeysByPath: incomeStatementKeys(entries),
          ...contentFacts(entries, options.base, options.head),
        });
  } catch (error) {
    console.warn(`CI planner could not classify the diff: ${error.message}`);
    plan = createFullCiPlan('diff classification failed; strict fallback');
  }

  if (options.json) console.log(JSON.stringify(plan, null, 2));
  else printHuman(plan);

  if (options.githubOutput) {
    const lines = Object.entries(outputValues(plan)).map(([key, value]) => `${key}=${value}`).join('\n');
    appendFileSync(options.githubOutput, `${lines}\n`);
  }
}

const isDirectRun = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isDirectRun) await main();
