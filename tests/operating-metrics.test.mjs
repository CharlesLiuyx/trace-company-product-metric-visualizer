import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeOperatingObservation, assertOperatingMetricView } from '../scripts/lib/operating-metrics.mjs';
import { createSourceCoverage, createSourceClassification, classifySourceSignals } from '../scripts/lib/source-coverage.mjs';
import { createObjectInventory } from '../scripts/lib/object-inventory.mjs';
import { assertSourceCoverageAuthoredValues } from '../scripts/lib/source-coverage-authored.mjs';
import { loadClassicScripts } from './helpers/vm-load.mjs';

const metrics = [
  { id: 'arr', label: 'Subscription ARR', value: '1.66', unit: 'B', currency: 'USD', comparison: 'eq', literal: '$1.66B' },
  { id: 'dbnr', label: 'DBNR', value: '119', unit: '%', currency: null, comparison: 'gt', literal: '> 119%' },
  { id: 'customers', label: 'Customers > $100K', value: '3084', unit: 'count', currency: null, comparison: 'eq', literal: '3,084' },
].map((metric, index) => ({ ...metric, basis: 'unspecified', quote: `${metric.label}\n${metric.literal}`, notes: [], anchor: { type: 'image-box', box: [index * 200, 500, 180, 100] } }));
const signals = ['income-statement-values', 'sankey-flow-topology', 'supplemental-operating-metrics'];
function fixture() {
  const record = { key: 'example-q2-fy27', unit: 'M', operatingMetrics: structuredClone(metrics), revenue: {}, costs: {}, profit: {} };
  const annotationsSvg = record.operatingMetrics.map((metric) => `<text data-operating-metric="${metric.id}">${metric.literal.replaceAll('>', '&gt;')}</text>`).join('');
  const dataset = { key: record.key, nodes: [], operatingMetrics: structuredClone(metrics), annotationsSvg, i18n: { zh: { annotationsSvg } } };
  const classification = createSourceClassification({ datasetKey: record.key, adapter: 'income-statement', signals, reviewMethod: 'full-source-type-gate', source: { locator: 'input/processed/example.png', digest: `sha256:${'a'.repeat(64)}`, width: 1000, height: 800 }, fullImageBBox: [0, 0, 1000, 800] });
  const inventory = createObjectInventory({ datasetKey: record.key, objects: metrics.map((metric) => ({ id: `supplement:${metric.id}`, kind: 'operating-metric', disposition: 'render', mapping: [{ role: 'data', target: `incomeStatement.operatingMetrics.${metric.id}` }, { role: 'render', target: `operatingMetrics.${metric.id}` }], features: ['text'] })) });
  const input = { classification, source: classification.source, scanPasses: ['geometry', 'residual', 'semantic-value'], items: metrics.map((metric) => ({ sourceId: `source:${metric.id}`, sourceClass: 'operating-metric', sourceLabel: metric.label, quote: metric.quote, contentBBox: metric.anchor.box, inventoryObjectIds: [`supplement:${metric.id}`], observation: normalizeOperatingObservation(metric), ssotRef: { family: 'income-statement', path: 'operatingMetrics', id: metric.id } })) };
  return { record, dataset, input, inventory, loadedData: { records: [record], datasets: [dataset] } };
}
test('supplemental observations retain money, bounds and count without currency conversion', () => {
  const f = fixture();
  const coverage = createSourceCoverage(f.input, { inventory: f.inventory, adapter: 'income-statement' });
  assert.deepEqual(assertSourceCoverageAuthoredValues(coverage, f), { checked: 3, unit: 'M' });
  assert.deepEqual(coverage.summary.visibleNodeIds, []);
  assert.deepEqual(coverage.summary.smallestNonZero, []);
  assert.equal(f.record.operatingMetrics[0].value, '1.66');
});
test('the supplemental signal requires a full income statement and matching coverage', () => {
  assert.throws(() => classifySourceSignals(['supplemental-operating-metrics']));
  assert.throws(() => classifySourceSignals(['metric-observations', 'supplemental-operating-metrics']));
  assert.throws(() => classifySourceSignals(['revenue-metric-definition', 'time-series-observations', 'supplemental-operating-metrics']));
  const f = fixture();
  f.input.classification = createSourceClassification({ ...f.input.classification, classificationDigest: undefined, signals: signals.slice(0, 2) });
  assert.throws(() => createSourceCoverage(f.input, { inventory: f.inventory, adapter: 'income-statement' }), /Type Gate signal/);
});
test('rejects dropped inequality, wrong unit/currency and rounded or floating-point values', () => {
  for (const update of [{ comparison: 'eq' }, { literal: '119%' }, { value: 119 }, { value: '120' }, { currency: 'USD' }, { unit: 'B' }]) {
    assert.throws(() => normalizeOperatingObservation({ ...metrics[1], ...update }));
  }
  assert.throws(() => normalizeOperatingObservation({ ...metrics[0], currency: 'EUR' }));
  assert.throws(() => normalizeOperatingObservation({ ...metrics[2], value: '3084.5', literal: '3,084.5' }));
});
test('rejects missing/duplicate source coverage and stale visible locale values', () => {
  const f = fixture();
  const coverage = createSourceCoverage(f.input, { inventory: f.inventory, adapter: 'income-statement' });
  assert.throws(() => assertSourceCoverageAuthoredValues({ ...coverage, items: coverage.items.slice(1) }, f), /exactly one Source/);
  f.dataset.i18n.zh.annotationsSvg = f.dataset.annotationsSvg.replace('&gt; 119%', '119%');
  assert.throws(() => assertOperatingMetricView(f.record, f.dataset), /literal mismatch/);
  f.dataset.i18n.zh.annotationsSvg = f.dataset.annotationsSvg;
  f.record.operatingMetrics[0].anchor.box[0]++;
  assert.throws(() => assertSourceCoverageAuthoredValues(coverage, f), /Source value or anchor/);
});
test('abbreviated counts preserve source literals and exact integer magnitude', () => {
  const count = { ...metrics[2], value: '1800000', literal: '1.8M' };
  assert.equal(normalizeOperatingObservation(count).literal, '1.8M');
  assert.equal(normalizeOperatingObservation({ ...count, value: '9007199254740993', literal: '9007199.254740993B' }).value, '9007199254740993');
  for (const update of [{ value: '180000' }, { literal: '1.8M', currency: 'USD' }, { value: '1.5', literal: '0.0015K' }, { value: '-1800000', literal: '-1.8M' }]) {
    assert.throws(() => normalizeOperatingObservation({ ...count, ...update }));
  }
});
test('supplemental metrics cannot masquerade as financial nodes or lose their quotes', () => {
  const f = fixture();
  f.dataset.nodes.push({ id: 'arr', value: 1.66 });
  assert.throws(() => assertOperatingMetricView(f.record, f.dataset), /financial flow/);
  f.dataset.nodes = [];
  f.record.operatingMetrics[0].quote = '';
  assert.throws(() => assertOperatingMetricView(f.record, f.dataset), /quote/);
});
test('financial localization changes supplemental labels/notes but rejects values and comparison changes', () => {
  const { SANKEY_I18N } = loadClassicScripts(['src/sankey-engine.js', 'src/i18n-dictionaries.js', 'src/i18n.js']);
  const f = fixture();
  f.record.i18n = { zh: { operatingMetrics: [{ id: 'arr', label: '订阅 ARR' }] } };
  const localized = SANKEY_I18N.localizeFinancialRecord(f.record, 'zh');
  assert.equal(localized.operatingMetrics[0].label, '订阅 ARR');
  assert.equal(localized.operatingMetrics[1].comparison, 'gt');
  assert.equal(localized.operatingMetrics[1].literal, '> 119%');
  for (const field of ['value', 'unit', 'currency', 'comparison', 'literal', 'quote', 'anchor', 'basis']) {
    f.record.i18n.zh.operatingMetrics = [{ id: 'arr', [field]: 'changed' }];
    assert.throws(() => SANKEY_I18N.localizeFinancialRecord(f.record, 'zh'));
  }
});
