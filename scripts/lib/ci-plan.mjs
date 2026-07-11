import path from 'node:path';

const DATASET_PATH_RE = /^data\/datasets\/([a-z0-9-]+)\.js$/;
const REFERENCE_PATH_RE = /^input\/processed\/([a-z0-9-]+)\.png$/i;

const RENDER_RUNTIME_PATHS = new Set([
  'src/icons.js',
  'src/i18n-dictionaries.js',
  'src/i18n.js',
  'src/sankey-engine.js',
  'vendor/d3.min.js',
  'vendor/d3-sankey.min.js',
]);

const D3_PIPELINE_PATHS = new Set([
  'scripts/record-fidelity.mjs',
  'scripts/verify-d3.mjs',
  'scripts/verify-render-regression.mjs',
  'scripts/lib/compare-workspace.mjs',
  'scripts/lib/d3-hard-gates.mjs',
  'scripts/lib/interface-fidelity.mjs',
  'scripts/lib/png-diff.mjs',
  'scripts/lib/render-harness.mjs',
]);

const SITE_PIPELINE_PATHS = new Set([
  'scripts/build-site.mjs',
  'scripts/verify-site.mjs',
]);

const STANDALONE_PIPELINE_PATHS = new Set([
  'scripts/build-standalone.mjs',
  'scripts/verify-standalone.mjs',
]);

function normalizedPath(value) {
  return String(value || '').split(path.sep).join('/').replace(/^\.\//, '');
}

function isDocsOnly(file) {
  return file === 'AGENTS.md'
    || file === 'CONTEXT.md'
    || file === 'LICENSE'
    || file === 'README.md'
    || file.startsWith('docs/')
    || file.endsWith('.md');
}

function addReason(plan, reason) {
  if (!plan.reasons.includes(reason)) plan.reasons.push(reason);
}

function addImpact(plan, impact) {
  plan.changeImpacts.add(impact);
}

function requireSiteProjection(plan, reason, { browser = false } = {}) {
  plan.siteProjection = true;
  plan.buildSite = true;
  if (browser) plan.verifySite = true;
  addReason(plan, reason);
}

function requireStandalone(plan, reason) {
  plan.buildStandalone = true;
  plan.verifyStandalone = true;
  addReason(plan, reason);
}

function requireFull(plan, reason) {
  plan.renderScope = 'full';
  plan.renderKeys.clear();
  plan.verifyApp = true;
  plan.d3Smoke = true;
  requireSiteProjection(plan, reason, { browser: true });
  requireStandalone(plan, reason);
}

function requireChangedRender(plan, key, reason, existingDatasetKeys) {
  if (plan.renderScope === 'full') return;
  if (!/^[a-z0-9-]+$/.test(key) || !existingDatasetKeys.has(key)) return;
  plan.renderScope = 'changed';
  plan.renderKeys.add(key);
  requireSiteProjection(plan, reason);
  requireStandalone(plan, reason);
}

function classifyPath(plan, file, status, options) {
  const { existingDatasetKeys, incomeStatementKeysByPath } = options;
  const datasetMatch = DATASET_PATH_RE.exec(file);
  if (datasetMatch) {
    const key = datasetMatch[1];
    requireSiteProjection(plan, `Dataset Adapter changed: ${key}`);
    addImpact(plan, status === 'A' ? 'new-dataset' : 'geometry');
    requireStandalone(plan, `Dataset Adapter changed: ${key}`);
    if (status !== 'D' && key !== 'example-saas-fy25') {
      requireChangedRender(plan, key, `render changed Adapter: ${key}`, existingDatasetKeys);
    }
    return;
  }

  const referenceMatch = REFERENCE_PATH_RE.exec(file);
  if (referenceMatch) {
    addImpact(plan, 'geometry');
    requireChangedRender(plan, referenceMatch[1], `reference image changed: ${referenceMatch[1]}`, existingDatasetKeys);
    return;
  }

  if (file.startsWith('input/processed/')) {
    requireFull(plan, `unrecognized processed reference path uses strict fallback: ${file}`);
    return;
  }

  if (file.startsWith('input/pending/') || file.startsWith('input/processing/')) {
    addReason(plan, `Source locator only: ${file}`);
    return;
  }

  if (file.startsWith('data/income-statements/')) {
    addImpact(plan, 'financial-data-only');
    requireSiteProjection(plan, `income-statement catalog changed: ${file}`);
    const keys = incomeStatementKeysByPath.get(file) || [];
    for (const key of keys) {
      requireChangedRender(plan, key, `income-statement SSOT changed: ${key}`, existingDatasetKeys);
    }
    addReason(plan, keys.length ? `income-statement SSOT maps to ${keys.length} Adapter(s)` : `income-statement SSOT changed: ${file}`);
    return;
  }

  if (file === 'data/revenue-metrics.js' || file.startsWith('data/company-metadata/')) {
    addImpact(plan, file === 'data/revenue-metrics.js' ? 'financial-data-only' : 'company-metadata-only');
    requireSiteProjection(plan, `data-only site catalog changed: ${file}`);
    return;
  }

  if (
    file === 'data/dataset-manifest.js'
    || file === 'data/dataset-file-metadata.js'
    || file === 'data/products.js'
  ) {
    requireSiteProjection(plan, `site data projection changed: ${file}`);
    return;
  }

  if (file.startsWith('data/fx-')) {
    addReason(plan, `fast data consistency checks cover: ${file}`);
    return;
  }

  if (file === 'data/render-baselines.json') {
    addImpact(plan, 'geometry');
    plan.renderScope = 'full';
    plan.renderKeys.clear();
    addReason(plan, 'canonical render baselines changed');
    return;
  }

  if (file.startsWith('data/assets/')) {
    addImpact(plan, 'asset');
    requireFull(plan, `render asset changed: ${file}`);
    return;
  }

  if (RENDER_RUNTIME_PATHS.has(file)) {
    addImpact(plan, 'render-engine');
    if (file === 'src/i18n-dictionaries.js' || file === 'src/i18n.js') addImpact(plan, 'localized-layout');
    requireFull(plan, `shared render runtime changed: ${file}`);
    return;
  }

  if (file.startsWith('src/app/') || file === 'src/app.css' || file === 'vendor/chart.umd.min.js') {
    addImpact(plan, 'interaction');
    plan.verifyApp = true;
    requireSiteProjection(plan, `viewer runtime changed: ${file}`, { browser: true });
    requireStandalone(plan, `viewer runtime changed: ${file}`);
    return;
  }

  if (file === 'index.html') {
    addImpact(plan, 'interaction');
    addImpact(plan, 'render-engine');
    requireFull(plan, 'script registration and load order changed: index.html');
    return;
  }

  if (D3_PIPELINE_PATHS.has(file)) {
    plan.renderScope = 'full';
    plan.renderKeys.clear();
    plan.d3Smoke = true;
    addReason(plan, `d3 verification pipeline changed: ${file}`);
    return;
  }

  if (SITE_PIPELINE_PATHS.has(file)) {
    requireSiteProjection(plan, `site build/verification changed: ${file}`, { browser: true });
    return;
  }

  if (STANDALONE_PIPELINE_PATHS.has(file)) {
    requireStandalone(plan, `standalone build/verification changed: ${file}`);
    return;
  }

  if (
    file === 'package.json'
    || file === 'pnpm-lock.yaml'
    || file.startsWith('.github/workflows/')
    || file === 'scripts/plan-ci.mjs'
    || file === 'scripts/lib/ci-plan.mjs'
  ) {
    requireFull(plan, `CI or dependency contract changed: ${file}`);
    return;
  }

  if (file.startsWith('tests/') || isDocsOnly(file) || file === '.gitignore' || file === '.editorconfig') {
    if (isDocsOnly(file)) addImpact(plan, 'docs-only');
    addReason(plan, `fast checks cover: ${file}`);
    return;
  }

  if (file.startsWith('data/')) {
    addImpact(plan, 'new-dataset');
    requireFull(plan, `unknown data runtime impact uses strict fallback: ${file}`);
    return;
  }

  if (file.startsWith('scripts/') || file.startsWith('src/') || file.startsWith('vendor/')) {
    addImpact(plan, 'render-engine');
    addImpact(plan, 'interaction');
    requireFull(plan, `unknown executable impact uses strict fallback: ${file}`);
    return;
  }

  addReason(plan, `fast checks cover non-runtime file: ${file}`);
}

export function createFullCiPlan(reason = 'diff unavailable; strict fallback') {
  const plan = {
    changedFiles: [],
    reasons: [],
    changeImpacts: new Set(),
    verifyApp: false,
    buildSite: false,
    verifySite: false,
    siteProjection: false,
    d3Smoke: false,
    renderScope: 'none',
    renderKeys: new Set(),
    buildStandalone: false,
    verifyStandalone: false,
  };
  requireFull(plan, reason);
  return finalizeCiPlan(plan);
}

export function planCiChecks(entries, options = {}) {
  const existingDatasetKeys = options.existingDatasetKeys || new Set();
  const incomeStatementKeysByPath = options.incomeStatementKeysByPath || new Map();
  const plan = {
    changedFiles: [],
    reasons: [],
    changeImpacts: new Set(),
    verifyApp: false,
    buildSite: false,
    verifySite: false,
    siteProjection: false,
    d3Smoke: false,
    renderScope: 'none',
    renderKeys: new Set(),
    buildStandalone: false,
    verifyStandalone: false,
  };

  for (const entry of entries) {
    const status = String(entry.status || 'M').charAt(0).toUpperCase();
    const paths = [entry.oldPath, entry.path].filter(Boolean).map(normalizedPath);
    for (const file of paths) {
      plan.changedFiles.push(file);
      classifyPath(plan, file, file === normalizedPath(entry.path) ? status : 'D', {
        existingDatasetKeys,
        incomeStatementKeysByPath,
      });
    }
  }

  if (!entries.length) addReason(plan, 'no changed files');
  return finalizeCiPlan(plan);
}

function finalizeCiPlan(plan) {
  const renderKeys = [...plan.renderKeys].sort();
  if (plan.renderScope === 'changed' && renderKeys.length === 0) plan.renderScope = 'none';
  return Object.freeze({
    changedFiles: [...new Set(plan.changedFiles)].sort(),
    reasons: [...plan.reasons],
    changeImpacts: [...plan.changeImpacts].sort(),
    verifyApp: plan.verifyApp,
    buildSite: plan.buildSite,
    verifySite: plan.verifySite,
    siteProjection: plan.siteProjection,
    d3Smoke: plan.d3Smoke,
    renderScope: plan.renderScope,
    renderKeys,
    buildStandalone: plan.buildStandalone,
    verifyStandalone: plan.verifyStandalone,
    needsBrowser:
      plan.verifyApp
      || plan.verifySite
      || plan.d3Smoke
      || plan.renderScope !== 'none'
      || plan.verifyStandalone,
  });
}

export function parseNameStatusZ(output) {
  const fields = String(output || '').split('\0');
  if (fields.at(-1) === '') fields.pop();
  const entries = [];
  for (let index = 0; index < fields.length;) {
    const status = fields[index++];
    if (!status) continue;
    if (/^[RC]/.test(status)) {
      const oldPath = fields[index++];
      const file = fields[index++];
      if (oldPath == null || file == null) throw new Error(`Invalid git --name-status -z output for ${status}`);
      entries.push({ status, oldPath, path: file });
    } else {
      const file = fields[index++];
      if (file == null) throw new Error(`Invalid git --name-status -z output for ${status}`);
      entries.push({ status, path: file });
    }
  }
  return entries;
}

export function incomeStatementKeysFromSource(source) {
  return [...String(source || '').matchAll(/\bkey\s*:\s*['"]([a-z0-9-]+)['"]/g)]
    .map((match) => match[1])
    .filter((key, index, keys) => keys.indexOf(key) === index)
    .sort();
}
