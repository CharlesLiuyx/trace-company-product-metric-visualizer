import { loadClassicScripts } from './lib/vm-browser.mjs';
import { rootDir } from './lib/project.mjs';
import { existsSync } from 'node:fs';
import path from 'node:path';

export function scriptSources(indexHtml) {
  const sources = [];
  const scriptRe = /<script\b[^>]*\bsrc=["']([^"']+)["'][^>]*><\/script>/gi;
  let match;
  while ((match = scriptRe.exec(indexHtml))) {
    sources.push(match[1]);
  }
  return sources;
}

export const DATASET_SCRIPT_DIR = 'data/datasets';
export const INCOME_STATEMENT_SCRIPT_DIR = 'data/income-statements';
export const COMPANY_METADATA_SCRIPT_DIR = 'data/company-metadata';
export const DATASET_MANIFEST_SCRIPT = 'data/dataset-manifest.js';

// Dataset registration SSOT: the generated manifest (not index.html tags).
// Returns registered dataset script paths in manifest (load) order.
export function registeredDatasetScripts(root = rootDir) {
  if (!existsSync(path.join(root, DATASET_MANIFEST_SCRIPT))) return [];
  const context = loadClassicScripts([DATASET_MANIFEST_SCRIPT], root);
  return (context.__DATASET_MANIFEST__?.datasets || [])
    .map((entry) => entry.src)
    .filter(Boolean);
}

// Dataset scripts that intentionally stay unregistered in index.html.
// example-saas-fy25.js is the copyable demo template (internal key
// acme-cloud-fy25); it is not a real reported statement.
export const UNREGISTERED_DATASET_SCRIPTS = new Set([
  'data/datasets/example-saas-fy25.js',
]);

export function datasetScriptForKey(key) {
  return `${DATASET_SCRIPT_DIR}/${key}.js`;
}

function isScriptInDir(src, dir) {
  return src.startsWith(`${dir}/`) && src.endsWith('.js');
}

function isDatasetScript(src) {
  return isScriptInDir(src, DATASET_SCRIPT_DIR);
}

export function dataScriptsFromIndex(indexHtml) {
  return scriptSources(indexHtml).filter(isDatasetScript);
}

export function incomeStatementScriptsFromIndex(indexHtml) {
  return scriptSources(indexHtml).filter((src) => isScriptInDir(src, INCOME_STATEMENT_SCRIPT_DIR));
}

export function companyMetadataScriptsFromIndex(indexHtml) {
  return scriptSources(indexHtml).filter((src) => isScriptInDir(src, COMPANY_METADATA_SCRIPT_DIR));
}

// Shared render runtime every harness page loads. Also the SSOT for the
// render-regression fingerprint cache (scripts/lib/render-fingerprint.mjs);
// ci-plan's RENDER_RUNTIME_PATHS mirrors it and a parity test locks the two.
export const RENDER_RUNTIME_SCRIPTS = new Set([
  'vendor/d3.min.js',
  'vendor/d3-sankey.min.js',
  'src/icons.js',
  'src/sankey-engine.js',
  'src/i18n-dictionaries.js',
  'src/i18n.js',
]);

export function renderHarnessScripts(indexHtml) {
  const renderRuntime = RENDER_RUNTIME_SCRIPTS;

  // Runtime + income-statement SSOT come from index.html order; dataset
  // adapters come from the manifest (their registration SSOT). No registry
  // or manifest script loads in the harness, so adapters push natively.
  return [
    ...new Set([
      ...scriptSources(indexHtml).filter(
        (src) =>
          renderRuntime.has(src) ||
          isDatasetScript(src) ||
          isScriptInDir(src, INCOME_STATEMENT_SCRIPT_DIR)
      ),
      ...registeredDatasetScripts(),
    ]),
  ];
}
