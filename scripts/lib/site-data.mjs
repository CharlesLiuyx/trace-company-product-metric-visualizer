// Build-only Pages projection. Authored SSOTs and their registration stay
// unchanged. JSON chunks are immutable, version-bound derivatives.
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

export function sha256(bytes) {
  return createHash('sha256').update(bytes).digest('hex');
}

function pick(record, fields) {
  return Object.fromEntries(fields.filter((key) => Object.hasOwn(record, key)).map((key) => [key, record[key]]));
}

function companySummary(record) {
  const fields = ['key', 'name', 'displayName', 'legalName', 'aliases', 'ticker', 'exchange', 'founded', 'marketCap'];
  const result = pick(record, fields);
  if (record.i18n) result.i18n = Object.fromEntries(Object.entries(record.i18n).map(([code, overlay]) => [code, pick(overlay, fields)]));
  return { ...result, __runtimeSummary: true };
}

function financialSummary(record) {
  return {
    ...pick(record, ['key', 'company', 'period', 'periodNote', 'currency', 'unit', 'decimals']),
    revenue: { total: record.revenue?.total },
    profit: { net: { value: record.profit?.net?.value } },
    __runtimeSummary: true,
  };
}

export function buildSiteData({ root, sources, version, assetPrefix }) {
  const context = { console };
  context.window = context;
  vm.createContext(context);
  for (const source of ['src/trace-domain.js', ...sources]) {
    vm.runInContext(readFileSync(path.join(root, source), 'utf8'), context, { filename: source });
  }
  const datasetManifest = JSON.parse(JSON.stringify(context.__DATASET_MANIFEST__));
  const financial = JSON.parse(JSON.stringify(context.INCOME_STATEMENT_SSOT?.records || []));
  const companies = JSON.parse(JSON.stringify(context.COMPANY_METADATA?.companies || []));
  const companyIndex = context.TraceDomain.buildCompanyMetadataIndex(companies);
  const financialByCompany = new Map(companies.map((company) => [company.name, []]));
  for (const record of financial) {
    const company = companyIndex.get(context.TraceDomain.normalize(record.company));
    if (!company) throw new Error(`Financial record has no company: ${record.key}`);
    financialByCompany.get(company.name).push(record);
  }
  const chunks = new Map();
  const manifest = { schema: 'trace-runtime-data/v1', version, companies: {}, families: {}, chunks: {} };
  function chunk(id, filename, data) {
    const body = JSON.stringify({ schema: 'trace-runtime-chunk/v1', version, id, ...data });
    const src = `${assetPrefix}/data/${filename}.json`;
    chunks.set(src, body);
    manifest.chunks[id] = { src, sha256: sha256(body) };
    return id;
  }
  for (const company of companies) {
    manifest.companies[company.name] = chunk(`company:${company.key}`, `companies/${company.key}`, {
      companyMetadata: [company], financialRecords: financialByCompany.get(company.name),
    });
  }
  manifest.families.company = chunk('family:company', 'tables/company', { companyMetadata: companies });
  manifest.families.statement = chunk('family:statement', 'tables/statement', { financialRecords: financial });
  // This small family stays complete in the bootstrap, preserving historical
  // observation/source search and avoiding an unnecessary extra request.
  manifest.families.revenue = null;
  manifest.families.metrics = chunk('family:metrics', 'metrics', { metricObservations: context.METRIC_OBSERVATIONS || [] });
  datasetManifest.datasets.forEach((entry) => { entry.src = `${assetPrefix}/${entry.src}`; });
  const globals = {
    INCOME_STATEMENT_SSOT: { schemaVersion: 1, records: financial.map(financialSummary) },
    COMPANY_METADATA: { schemaVersion: 1, companies: companies.map(companySummary) },
    REVENUE_METRIC_SSOT: context.REVENUE_METRIC_SSOT || { schemaVersion: 1, records: [] },
    DATASET_FILE_METADATA: {
      files: Object.fromEntries(Object.entries(context.DATASET_FILE_METADATA?.files || {}).map(([key, entry]) => [key, { updatedAtMs: context.TraceDomain.timestampMs(entry.updatedAtMs ?? entry.updatedAt) }])),
      sourceFiles: context.DATASET_FILE_METADATA?.sourceFiles || {},
    },
    PRODUCT_CATALOG: context.PRODUCT_CATALOG || {},
    METRIC_OBSERVATIONS: [],
    __DATASET_MANIFEST__: datasetManifest,
  };
  const source = [
    '/* Generated Pages data projection; edit the authored SSOTs. */',
    ...Object.entries(globals).map(([key, value]) => `window.${key}=${JSON.stringify(value)};`),
    'window.TraceDatasetRegistry.installManifest(window.__DATASET_MANIFEST__);',
    `window.TraceRuntimeData.install(${JSON.stringify(manifest)});`,
  ].join('\n');
  return { source, chunks, manifest };
}
