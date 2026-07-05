// Shared VM data-loading stacks for the no-browser verifiers. verify-ssot
// and verify-i18n previously each declared their own loadBrowserData() with
// subtly different script lists; this module owns the common stack (icons,
// per-company SSOT dirs, revenue metrics, company metadata, registered
// datasets) and lets each verifier declare only the runtime scripts it
// actually needs (trace-domain vs sankey-engine + i18n).
import {
  COMPANY_METADATA_SCRIPT_DIR,
  INCOME_STATEMENT_SCRIPT_DIR,
  dataScriptsFromIndex,
} from '../script-sources.mjs';
import { listScripts, readProjectFile } from './project.mjs';
import { loadClassicScripts } from './vm-browser.mjs';

export function loadBrowserData({ runtime = [], datasetScripts = null } = {}) {
  const context = loadClassicScripts([
    'src/icons.js',
    ...runtime,
    ...listScripts(INCOME_STATEMENT_SCRIPT_DIR),
    'data/revenue-metrics.js',
    ...listScripts(COMPANY_METADATA_SCRIPT_DIR),
    ...(datasetScripts ?? dataScriptsFromIndex(readProjectFile('index.html'))),
  ]);

  return {
    context,
    i18n: context.SANKEY_I18N,
    domain: context.TraceDomain,
    datasets: context.DATASETS || [],
    records: context.INCOME_STATEMENT_SSOT?.records || [],
    revenueRecords: context.REVENUE_METRIC_SSOT?.records || [],
    companies: context.COMPANY_METADATA?.companies || [],
  };
}
