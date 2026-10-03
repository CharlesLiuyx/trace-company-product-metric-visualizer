import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeOperatingObservation, assertOperatingMetricView } from '../scripts/lib/operating-metrics.mjs';
import { createSourceClassification, classifySourceSignals, createSourceObjects, reconcileSourceObjects } from '../scripts/lib/source-objects.mjs';
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
  const input = { objects: metrics.map((metric) => ({ id: metric.id, class: 'value', label: metric.label, literal: metric.literal, value: metric.value, unit: metric.unit, currency: metric.currency, comparison: metric.comparison, quote: metric.quote, ssotRef: { family: 'income-statement', path: 'operatingMetrics', id: metric.id } })) };
  const context = { datasetKey: record.key, adapter: 'income-statement', classification, source: { ...classification.source }, reconcile: false };
  return { record, dataset, input, context, loadedData: { records: [record], datasets: [dataset] } };
}
test('supplemental observations retain money, bounds and count without currency conversion', () => {
  const f = fixture();
  const sourceObjects = createSourceObjects(f.input, f.context);
  assert.deepEqual(reconcileSourceObjects(sourceObjects, f), { status: 'passed', checked: 3, unit: 'M' });
  assert.deepEqual(sourceObjects.summary.valueNodeIds, []);
  assert.deepEqual(sourceObjects.summary.smallestNonZero, []);
  assert.equal(f.record.operatingMetrics[0].value, '1.66');
});
test('the supplemental signal requires a full income statement and matching coverage', () => {
  assert.throws(() => classifySourceSignals(['supplemental-operating-metrics']));
  assert.throws(() => classifySourceSignals(['metric-observations', 'supplemental-operating-metrics']));
  assert.throws(() => classifySourceSignals(['revenue-metric-definition', 'time-series-observations', 'supplemental-operating-metrics']));
  const f = fixture();
  f.context.classification = createSourceClassification({ ...f.context.classification, classificationDigest: undefined, signals: signals.slice(0, 2) });
  assert.throws(() => createSourceObjects(f.input, f.context), /Type Gate signal/);
});
test('rejects dropped inequality, wrong unit/currency and rounded or floating-point values', () => {
  for (const update of [{ comparison: 'eq' }, { literal: '119%' }, { value: 119 }, { value: '120' }, { currency: 'USD' }, { unit: 'B' }]) {
    assert.throws(() => normalizeOperatingObservation({ ...metrics[1], ...update }));
  }
  assert.throws(() => normalizeOperatingObservation({ ...metrics[0], currency: 'EUR' }));
  assert.throws(() => normalizeOperatingObservation({ ...metrics[2], value: '3084.4', literal: '3,084.5' }));
});
test('rejects a missing source value entry, changed quotes and stale visible locale values', () => {
  const f = fixture();
  const sourceObjects = createSourceObjects(f.input, f.context);
  assert.throws(() => reconcileSourceObjects({ ...sourceObjects, objects: sourceObjects.objects.slice(1) }, f), /exactly one Source value entry/);
  f.dataset.i18n.zh.annotationsSvg = f.dataset.annotationsSvg.replace('&gt; 119%', '119%');
  assert.throws(() => assertOperatingMetricView(f.record, f.dataset), /literal mismatch/);
  f.dataset.i18n.zh.annotationsSvg = f.dataset.annotationsSvg;
  f.record.operatingMetrics[0].quote = `${f.record.operatingMetrics[0].quote}\nrestated`;
  assert.throws(() => reconcileSourceObjects(sourceObjects, f), /differs from its Source value entry/);
});
test('abbreviated counts preserve source literals and exact magnitude', () => {
  const count = { ...metrics[2], value: '1800000', literal: '1.8M' };
  assert.equal(normalizeOperatingObservation(count).literal, '1.8M');
  assert.equal(normalizeOperatingObservation({ ...count, value: '9007199254740993', literal: '9007199.254740993B' }).value, '9007199254740993');
  assert.equal(normalizeOperatingObservation({ ...count, value: '1.5', literal: '0.0015K' }).value, '1.5');
  for (const update of [{ value: '180000' }, { literal: '1.8M', currency: 'USD' }, { value: '1.4', literal: '0.0015K' }, { value: '-1800000', literal: '-1.8M' }]) {
    assert.throws(() => normalizeOperatingObservation({ ...count, ...update }));
  }
});
test('per-customer money preserves unscaled Source amounts with exact scale reconciliation', () => {
  const raw = { value: '0.301', unit: 'K', currency: 'USD', comparison: 'eq', literal: '$301' };
  assert.deepEqual(normalizeOperatingObservation(raw), raw);
  assert.equal(normalizeOperatingObservation({ ...raw, value: '0.000301', unit: 'M' }).literal, '$301');
  assert.equal(normalizeOperatingObservation({ ...raw, value: '-0.301', literal: '$-301' }).value, '-0.301');
  for (const update of [{ value: '301' }, { value: '0.302' }, { currency: 'EUR' }, { literal: '$301M' }]) {
    assert.throws(() => normalizeOperatingObservation({ ...raw, ...update }));
  }
});
test('explicit positive growth preserves its Source sign and rejects mismatched or malformed signs', () => {
  const growth = { ...metrics[1], value: '1', comparison: 'eq', literal: '+1%' };
  assert.equal(normalizeOperatingObservation(growth).literal, '+1%');
  assert.equal(normalizeOperatingObservation({ ...growth, value: '5', literal: '+5%' }).value, '5');
  for (const update of [{ value: '-1' }, { value: '2' }, { literal: '++1%' }, { literal: '+-1%' }, { value: '+1' }]) {
    assert.throws(() => normalizeOperatingObservation({ ...growth, ...update }));
  }
  assert.equal(normalizeOperatingObservation({ ...growth, value: '-1', literal: '-1%' }).value, '-1');
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

 test('BRL TPV preserves Source currency and exact decimal', () => {
  const raw = { value: '142.2', unit: 'B', currency: 'BRL', comparison: 'eq', literal: 'R$142.2B' };
  assert.deepEqual(normalizeOperatingObservation(raw), raw);
  assert.throws(() => normalizeOperatingObservation({ ...raw, currency: 'USD' }));
  assert.throws(() => normalizeOperatingObservation({ ...raw, literal: '$142.2B' }));
});
test('accepts the RMB code prefix for CNY amounts', () => {
  const base = { id: 'gtv', label: 'GTV', value: '133.9', unit: 'B', currency: 'CNY', comparison: 'eq' };
  assert.equal(normalizeOperatingObservation({ ...base, literal: 'RMB 133.9B' }).literal, 'RMB 133.9B');
  assert.equal(normalizeOperatingObservation({ ...base, literal: 'CN¥133.9B' }).value, '133.9');
  assert.throws(() => normalizeOperatingObservation({ ...base, literal: 'HK$133.9B' }));
});
