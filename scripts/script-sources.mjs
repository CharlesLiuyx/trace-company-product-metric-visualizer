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

export function renderHarnessScripts(indexHtml) {
  const renderRuntime = new Set([
    'vendor/d3.min.js',
    'vendor/d3-sankey.min.js',
    'src/icons.js',
    'src/sankey-engine.js',
    'src/i18n.js',
  ]);

  return scriptSources(indexHtml).filter(
    (src) =>
      renderRuntime.has(src) ||
      isDatasetScript(src) ||
      isScriptInDir(src, INCOME_STATEMENT_SCRIPT_DIR)
  );
}
