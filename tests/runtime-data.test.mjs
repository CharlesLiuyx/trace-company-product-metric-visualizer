import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { webcrypto } from 'node:crypto';
import { buildSiteData, sha256 } from '../scripts/lib/site-data.mjs';
import { readProjectFile, rootDir } from '../scripts/lib/project.mjs';
import { scriptSources } from '../scripts/script-sources.mjs';
import { loadClassicScripts } from './helpers/vm-load.mjs';

const sources = scriptSources(readProjectFile('index.html')).filter((src) => src.startsWith('data/'));
const version = 'a'.repeat(64);
const projection = buildSiteData({ root: rootDir, sources, version, assetPrefix: `releases/${version}` });
const full = loadClassicScripts(['src/trace-domain.js', ...sources]);
const plain = (value) => JSON.parse(JSON.stringify(value));

function viewer(fetchOverride) {
  const context = loadClassicScripts(['src/trace-domain.js', 'src/dataset-registry.js', 'src/runtime-data.js']);
  let requests = 0;
  const response = (url) => ({
    ok: true, status: 200,
    arrayBuffer: async () => new TextEncoder().encode(projection.chunks.get(url)).buffer,
  });
  context.fetch = async (url) => { requests++; return fetchOverride ? fetchOverride(url, requests, response) : response(url); };
  context.crypto = webcrypto;
  context.TextDecoder = TextDecoder;
  vm.runInContext(projection.source, context);
  const catalog = context.TraceDomain.createCatalog(context);
  context.TraceRuntimeData.bind(catalog);
  return { context, catalog, loader: context.TraceRuntimeData, requests: () => requests };
}

test('bootstrap retains all navigation identities, sorting values and full revenue search inputs', () => {
  const { catalog, context } = viewer();
  assert.equal(catalog.records.length, full.__DATASET_MANIFEST__.datasets.length);
  assert.deepEqual(plain(context.REVENUE_METRIC_SSOT), plain(full.REVENUE_METRIC_SSOT));
  for (const record of full.INCOME_STATEMENT_SSOT.records) {
    const summary = catalog.financialRecordByKey.get(record.key);
    assert.equal(summary.profit.net.value, record.profit?.net?.value, record.key);
    assert.equal(summary.revenue.total, record.revenue?.total, record.key);
    assert.equal(summary.currency, record.currency, record.key);
    assert.equal(summary.unit, record.unit, record.key);
    assert.equal(summary.decimals, record.decimals, record.key);
    assert.equal(summary.costs, undefined, 'line items must not be in bootstrap');
  }
  for (const company of full.COMPANY_METADATA.companies) {
    const summary = catalog.companyMetadata.find((item) => item.key === company.key);
    assert.equal(summary.name, company.name);
    assert.equal(summary.founded, company.founded);
    assert.deepEqual(plain(summary.marketCap ?? null), plain(company.marketCap ?? null));
    assert.equal(summary.description, undefined, 'profile details must not be in bootstrap');
  }
  for (const entry of context.__DATASET_MANIFEST__.datasets) {
    assert.ok(entry.src.startsWith(`releases/${version}/data/datasets/`));
    const expected = full.DATASET_FILE_METADATA.files[entry.key];
    const record = catalog.records.find((item) => item.dataset.key === entry.key);
    assert.equal(record.updatedSortValue, context.TraceDomain.timestampMs(expected?.updatedAtMs ?? expected?.updatedAt));
  }
});

test('company hydration deduplicates requests and preserves catalog record identity', async () => {
  const { catalog, loader, requests } = viewer();
  const requirement = { companies: ['Salesforce', 'Salesforce'] };
  const record = catalog.financialRecordByKey.get('salesforce-q1-fy27');
  const company = catalog.companyMetadataByName.get('salesforce');
  let invalidations = 0;
  loader.subscribe(() => invalidations++);
  assert.equal(loader.ready(requirement), false);
  await Promise.all([loader.ensure(requirement), loader.ensure(requirement)]);
  assert.equal(requests(), 1);
  assert.equal(invalidations, 1);
  assert.equal(loader.ready(requirement), true);
  assert.equal(catalog.financialRecordByKey.get(record.key), record);
  assert.equal(catalog.companyMetadataByName.get('salesforce'), company);
  assert.ok(company.description);
  assert.deepEqual(plain(record), plain(full.INCOME_STATEMENT_SSOT.records.find((item) => item.key === record.key)));
  assert.ok(catalog.financialRecordByKey.get('apple-q1-fy23').__runtimeSummary);
  await loader.ensure(requirement);
  assert.equal(requests(), 1);
});

test('family load hydrates the full table without loading unrelated profiles', async () => {
  const { catalog, loader, requests } = viewer();
  await loader.ensure({ family: 'statement' });
  assert.equal(requests(), 1);
  assert.ok(catalog.financialRecords.every((record) => !record.__runtimeSummary));
  assert.ok(catalog.companyMetadata.every((record) => record.__runtimeSummary));
  assert.deepEqual(plain(catalog.financialRecords), plain(full.INCOME_STATEMENT_SSOT.records));
  assert.equal(loader.ready({ family: 'company' }), false);
});

test('failed requests remain retryable and never mark a company ready', async () => {
  const { loader, catalog } = viewer((url, count, response) => count === 1 ? { ok: false, status: 503 } : response(url));
  const requirement = { companies: ['Salesforce'] };
  await assert.rejects(loader.ensure(requirement), /503/);
  assert.equal(loader.ready(requirement), false);
  assert.ok(catalog.financialRecordByKey.get('salesforce-q1-fy27').__runtimeSummary);
  await loader.ensure(requirement);
  assert.equal(loader.ready(requirement), true);
});

test('complete global tables satisfy every company without redundant network requests', async () => {
  const { loader, requests } = viewer((url, count, response) => url.includes('/companies/') ? { ok: false, status: 404 } : response(url));
  await loader.ensure({ family: 'statement' });
  assert.equal(loader.ready({ companies: ['Apple'] }), false, 'profile is still a summary');
  await loader.ensure({ family: 'company' });
  assert.equal(loader.ready({ companies: ['Apple', 'Salesforce'] }), true);
  await loader.ensure({ companies: ['Apple', 'Salesforce'] });
  assert.equal(requests(), 2);
});

test('one company never makes a partial family appear complete', async () => {
  const { loader } = viewer();
  await loader.ensure({ companies: ['Apple'] });
  assert.equal(loader.ready({ family: 'company' }), false);
  assert.equal(loader.ready({ family: 'statement' }), false);
  await loader.ensure({ family: 'statement' });
  assert.equal(loader.ready({ family: 'statement' }), true);
  assert.equal(loader.ready({ companies: ['Salesforce'] }), false);
});

test('tampered payload is rejected before mutation', async () => {
  const { loader, catalog } = viewer(() => ({ ok: true, arrayBuffer: async () => new TextEncoder().encode('{}').buffer }));
  await assert.rejects(loader.ensure({ companies: ['Salesforce'] }), /integrity mismatch/);
  assert.ok(catalog.financialRecordByKey.get('salesforce-q1-fy27').__runtimeSummary);
});

test('matching hash cannot make a different version or a partly unknown contribution valid', async () => {
  for (const corrupt of [
    (chunk) => { chunk.version = 'b'.repeat(64); },
    (chunk) => { chunk.financialRecords.push({ key: 'unknown' }); },
  ]) {
    const source = projection.source;
    const entry = projection.manifest.chunks['company:salesforce'];
    const chunk = JSON.parse(projection.chunks.get(entry.src));
    corrupt(chunk);
    const bytes = JSON.stringify(chunk);
    const context = loadClassicScripts(['src/trace-domain.js', 'src/dataset-registry.js', 'src/runtime-data.js']);
    context.fetch = async () => ({ ok: true, arrayBuffer: async () => new TextEncoder().encode(bytes).buffer });
    context.crypto = webcrypto; context.TextDecoder = TextDecoder;
    vm.runInContext(source.replace(entry.sha256, sha256(bytes)), context);
    const catalog = context.TraceDomain.createCatalog(context);
    context.TraceRuntimeData.bind(catalog);
    await assert.rejects(context.TraceRuntimeData.ensure({ companies: ['Salesforce'] }), /version mismatch|Unknown financial/);
    assert.ok(catalog.financialRecordByKey.get('salesforce-q1-fy27').__runtimeSummary);
    assert.equal(context.TraceRuntimeData.ready({ companies: ['Salesforce'] }), false);
  }
});

test('complete-data source and standalone contexts require no fetches', async () => {
  const context = loadClassicScripts(['src/runtime-data.js']);
  assert.equal(context.TraceRuntimeData.ready({ companies: ['any'], family: 'statement' }), true);
  await context.TraceRuntimeData.ensure({ family: 'metrics' });
});
