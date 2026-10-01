import assert from 'node:assert/strict';
import test from 'node:test';
import {
  AUTHORITATIVE_CORRECTION_APPROVAL,
  SOURCE_CLASSIFICATION_REVIEW_METHOD,
  assertSourceObjects,
  classifySourceSignals,
  createSourceClassification,
  createSourceObjects,
  reconcileSourceObjects,
} from '../scripts/lib/source-objects.mjs';

const SOURCE_DIGEST = `sha256:${'a'.repeat(64)}`;
const DATASET_KEY = 'example-q4-fy25';
const SOURCE = Object.freeze({ locator: `input/processing/${DATASET_KEY}.png`, digest: SOURCE_DIGEST, width: 1200, height: 800 });

function classification(adapter = 'income-statement', extraSignals = []) {
  return createSourceClassification({
    datasetKey: DATASET_KEY,
    adapter,
    signals: [
      ...(adapter === 'income-statement'
        ? ['income-statement-values', 'sankey-flow-topology']
        : ['revenue-metric-definition', 'time-series-observations']),
      ...extraSignals,
    ],
    reviewMethod: SOURCE_CLASSIFICATION_REVIEW_METHOD,
    source: { ...SOURCE, locator: `input/pending/${DATASET_KEY}.png` },
    fullImageBBox: [0, 0, 1200, 800],
  });
}

function create(objects, { adapter = 'income-statement', shortNodes, loadedData, reconcile = Boolean(loadedData), extraSignals } = {}) {
  return createSourceObjects(
    { objects, ...(shortNodes ? { shortNodes } : {}) },
    {
      datasetKey: DATASET_KEY,
      adapter,
      classification: classification(adapter, extraSignals),
      source: SOURCE,
      reconcile,
      ...(loadedData ? { loadedData } : {}),
    }
  );
}

function otherIncome(overrides = {}) {
  return {
    id: 'other-income',
    class: 'value',
    label: 'Other',
    literal: '$40M',
    value: '40',
    unit: 'M',
    ssotRef: { family: 'income-statement', path: 'otherIncome.items', id: 'other_income' },
    node: 'other_income',
    ...overrides,
  };
}

function loadedData({
  ssotValue = 0.04,
  recordDecimals = 2,
  nodeValue = 0.04,
  adapterDecimals = 2,
  valueText = '$40M',
} = {}) {
  return {
    records: [{
      key: DATASET_KEY,
      unit: 'B',
      decimals: recordDecimals,
      revenue: { total: 1, items: [] },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', value: 0.7, items: [{ id: 'product_cost', value: 0.6 }] },
        operatingExpenses: { total: 0, items: [] },
      },
      otherIncome: { total: ssotValue, items: [{ id: 'other_income', value: ssotValue }] },
      otherExpenses: { total: 0, items: [] },
      profit: {},
    }],
    datasets: [{
      key: DATASET_KEY,
      meta: { unit: 'B', decimals: adapterDecimals },
      nodes: [{ id: 'other_income', value: nodeValue, ...(valueText == null ? {} : { valueText }) }],
    }],
  };
}

test('Type Gate derives one Adapter from the complete positive signal set before intake', () => {
  assert.deepEqual(
    classifySourceSignals(['sankey-flow-topology', 'income-statement-values'], 'income-statement'),
    { adapter: 'income-statement', signals: ['income-statement-values', 'sankey-flow-topology'] }
  );
  assert.throws(
    () => classifySourceSignals(['income-statement-values', 'sankey-flow-topology'], 'revenue-metric'),
    (error) => error.code === 'SOURCE_CLASSIFICATION_ADAPTER_MISMATCH'
  );
  assert.throws(
    () => classifySourceSignals([
      'income-statement-values',
      'sankey-flow-topology',
      'revenue-metric-definition',
      'time-series-observations',
    ]),
    (error) => error.code === 'SOURCE_CLASSIFICATION_UNRECOGNIZED'
  );
});

test('a flat Source object list derives Other, value nodes, non-node metrics and a stable digest', () => {
  const objects = [
    otherIncome(),
    { id: 'revenue', class: 'value', literal: '$1.0B', value: '1.0', unit: 'B', ssotRef: { family: 'income-statement', path: 'revenue.total' }, node: 'revenue' },
    { id: 'restructuring', class: 'value', literal: '$5M', value: '5', unit: 'M', ssotRef: { family: 'income-statement', path: 'costs.operatingExpenses.items', id: 'restructuring' }, nonNodeMetric: 'restructuring' },
    { id: 'flow-revenue-gross-profit', class: 'flow' },
    { id: 'title', class: 'label', label: 'Q4 FY25' },
    { id: 'company-logo', class: 'asset' },
    { id: 'watermark', class: 'residual', reason: 'publisher URL' },
  ];
  const sourceObjects = create(objects);
  assert.equal(sourceObjects.protocol, 'source-objects/v1');
  assert.equal(sourceObjects.kind, 'source-objects');
  assert.deepEqual(sourceObjects.summary.classes, { value: 3, flow: 1, label: 1, asset: 1, residual: 1 });
  assert.deepEqual(sourceObjects.summary.otherIds, ['other-income']);
  assert.deepEqual(sourceObjects.summary.valueNodeIds, ['other_income', 'revenue']);
  assert.deepEqual(sourceObjects.summary.nonNodeMetricIds, ['restructuring']);
  assert.deepEqual(sourceObjects.summary.smallestNonZero.map((item) => item.id), ['restructuring', 'other-income', 'revenue']);
  assert.deepEqual(sourceObjects.objects.find((entry) => entry.id === 'revenue').ssotRef, { family: 'income-statement', path: 'revenue.total', id: 'revenue' });
  assert.equal(sourceObjects.reconciliation, null);
  assert.equal(assertSourceObjects(sourceObjects), sourceObjects);
  assert.equal(create([...objects].reverse()).sourceObjectsDigest, sourceObjects.sourceObjectsDigest, 'order never changes the digest');
});

test('flat-list validation rejects retired shapes, unknown fields, duplicates and missing targets', () => {
  const cases = [
    [[{ object: { id: 'node:x' }, source: { sourceId: 'source:x' } }], 'SOURCE_OBJECTS_LEGACY_SHAPE'],
    [[otherIncome({ features: ['text'] })], 'SOURCE_OBJECTS_FIELD_UNSUPPORTED'],
    [[otherIncome({ face: { observedBBox: [1, 1, 1, 1] } })], 'SOURCE_OBJECTS_FIELD_UNSUPPORTED'],
    [[{ id: 'title', class: 'annotation' }], 'SOURCE_OBJECTS_CLASS_INVALID'],
    [[{ id: 'Title', class: 'label' }], 'SOURCE_OBJECTS_ID_INVALID'],
    [[otherIncome(), otherIncome()], 'SOURCE_OBJECTS_ID_DUPLICATE'],
    [[otherIncome(), otherIncome({ id: 'other-income-copy' })], 'SOURCE_OBJECTS_TARGET_DUPLICATE'],
    [[otherIncome({ node: undefined })], 'SOURCE_OBJECTS_TARGET_REQUIRED'],
    [[otherIncome({ nonNodeMetric: 'other_income' })], 'SOURCE_OBJECTS_TARGET_REQUIRED'],
    [[otherIncome({ ssotRef: { family: 'income-statement', path: 'revenue.unknown', id: 'x' } })], 'SOURCE_OBJECTS_SSOT_REF_INVALID'],
    [[otherIncome({ value: 40 })], 'SOURCE_OBJECTS_AMOUNT_INVALID'],
    [[otherIncome({ literal: 'n/a' })], 'SOURCE_OBJECTS_AMOUNT_INVALID'],
    [[{ id: 'title', class: 'label', referenceBBox: [0, 0, 10, 10] }], 'SOURCE_OBJECTS_LABEL_POSITION_INVALID'],
    [[{ id: 'title', class: 'label', referenceBBox: [1190, 0, 20, 10], labelGroup: 'title' }], 'SOURCE_OBJECTS_LABEL_POSITION_INVALID'],
    [[], 'SOURCE_OBJECTS_EMPTY'],
  ];
  for (const [objects, code] of cases) {
    assert.throws(() => create(objects), (error) => error.code === code, code);
  }
  assert.throws(
    () => create([otherIncome()], { adapter: 'revenue-metric' }),
    (error) => error.code === 'SOURCE_OBJECTS_SSOT_REF_INVALID'
  );
  assert.throws(
    () => create([{ id: 'flow-a', class: 'flow' }], { adapter: 'revenue-metric' }),
    (error) => error.code === 'SOURCE_OBJECTS_CLASS_ADAPTER_MISMATCH'
  );
});

test('Other is never residual and a value-bearing Other must be a value entry (T22)', () => {
  assert.throws(
    () => create([{ id: 'other', class: 'residual', reason: 'tiny bar without icon' }]),
    (error) => error.code === 'SOURCE_OBJECTS_OTHER_SKIPPED'
  );
  for (const objectClass of ['label', 'flow', 'asset']) {
    assert.throws(
      () => create([{ id: 'other-note', class: objectClass, literal: 'Other $40M' }]),
      (error) => error.code === 'SOURCE_OBJECTS_OTHER_CLASS_INVALID',
      objectClass
    );
  }
  assert.throws(
    () => create([{ id: 'footer', class: 'residual', literal: 'Ads $1.2B' }]),
    (error) => error.code === 'SOURCE_OBJECTS_RESIDUAL_VALUE'
  );
  assert.doesNotThrow(() => create([{ id: 'other-heading', class: 'label', label: 'Other' }]));
  assert.deepEqual(create([otherIncome()]).summary.otherIds, ['other-income']);
});

test('shortNodes names a value node and its Source reason', () => {
  const sourceObjects = create([otherIncome()], { shortNodes: [{ node: 'other_income', reason: 'Source paints a 1px bar' }] });
  assert.deepEqual(sourceObjects.shortNodes, [{ node: 'other_income', reason: 'Source paints a 1px bar' }]);
  assert.deepEqual(sourceObjects.summary.shortNodeIds, ['other_income']);
  assert.throws(
    () => create([otherIncome()], { shortNodes: [{ node: 'tax', reason: 'not a value node' }] }),
    (error) => error.code === 'SOURCE_OBJECTS_SHORT_NODE_UNKNOWN'
  );
  assert.throws(
    () => create([otherIncome()], { shortNodes: [{ node: 'other_income' }] }),
    (error) => error.code === 'SOURCE_OBJECTS_SHORT_NODES_INVALID'
  );
  assert.throws(
    () => create([otherIncome()], { shortNodes: [{ node: 'other_income', reason: 'x', observedBBox: [1, 2, 3, 1] }] }),
    (error) => error.code === 'SOURCE_OBJECTS_SHORT_NODES_INVALID'
  );
});

test('a declared referenceBBox opts one label group into T18', () => {
  const sourceObjects = create([
    otherIncome({ referenceBBox: [900, 200, 120, 40], labelGroup: 'other_income' }),
    { id: 'revenue-label', class: 'label', literal: 'Revenue', referenceBBox: [100, 300, 160, 44], labelGroup: 'revenue' },
    { id: 'title', class: 'label' },
  ]);
  assert.deepEqual(sourceObjects.summary.labelGroups, ['other_income', 'revenue']);
  assert.throws(
    () => create([
      { id: 'a', class: 'label', referenceBBox: [100, 300, 160, 44], labelGroup: 'revenue' },
      { id: 'b', class: 'label', referenceBBox: [100, 350, 160, 44], labelGroup: 'revenue' },
    ]),
    (error) => error.code === 'SOURCE_OBJECTS_LABEL_POSITION_INVALID'
  );
});

test('supplemental operating cards are value entries bound to the Type Gate signal', () => {
  const card = {
    id: 'arr',
    class: 'value',
    label: 'Subscription ARR',
    literal: '$1.66B',
    value: '1.66',
    unit: 'B',
    currency: 'USD',
    comparison: 'eq',
    quote: 'Subscription ARR\n$1.66B',
    ssotRef: { family: 'income-statement', path: 'operatingMetrics', id: 'arr' },
  };
  assert.throws(() => create([card]), (error) => error.code === 'SOURCE_OBJECTS_OPERATING_SIGNAL_MISMATCH');
  const sourceObjects = create([card], { extraSignals: ['supplemental-operating-metrics'] });
  assert.equal(sourceObjects.objects[0].comparison, 'eq');
  assert.throws(
    () => create([{ ...card, node: 'arr' }], { extraSignals: ['supplemental-operating-metrics'] }),
    (error) => error.code === 'SOURCE_OBJECTS_OPERATING_INVALID'
  );
  assert.throws(
    () => create([{ ...card, quote: '$1.66B' }], { extraSignals: ['supplemental-operating-metrics'] }),
    (error) => error.code === 'SOURCE_OBJECTS_OPERATING_INVALID'
  );
});

test('a rounded $0.0B literal requires precision recovery instead of becoming zero', () => {
  const rounded = { literal: '$0.0B', value: '0.04', unit: 'B' };
  assert.throws(() => create([otherIncome(rounded)]), (error) => error.code === 'SOURCE_OBJECTS_PRECISION_RECOVERY_REQUIRED');
  const sourceObjects = create([otherIncome({ ...rounded, precisionRecovery: { literal: '$40M', reason: 'FY25 10-K note 7' } })]);
  assert.deepEqual(sourceObjects.objects[0].precisionRecovery, { literal: '$40M', reason: 'FY25 10-K note 7' });
  assert.throws(
    () => create([otherIncome({ ...rounded, value: '0.06', precisionRecovery: { literal: '$60M', reason: 'filing' } })]),
    (error) => error.code === 'SOURCE_OBJECTS_AMOUNT_RESOLUTION_MISMATCH'
  );
  assert.throws(
    () => create([otherIncome({ precisionRecovery: { literal: '$40M', reason: 'not rounded to zero' } })]),
    (error) => error.code === 'SOURCE_OBJECTS_PRECISION_RECOVERY_UNNECESSARY'
  );
  assert.throws(
    () => create([otherIncome({ ...rounded, precisionRecovery: { literal: '$41M', reason: 'filing' } })]),
    (error) => error.code === 'SOURCE_OBJECTS_PRECISION_RECOVERY_MISMATCH'
  );
});

test('a user-approved correction repairs a unit or numeric typo without erasing the original literal', () => {
  const correction = (literal) => ({ literal, approval: AUTHORITATIVE_CORRECTION_APPROVAL, reason: 'Official filing reports $3,334M' });
  const unitTypo = create([otherIncome({ literal: '$3.3M', value: '3.3', unit: 'B', authoritativeCorrection: correction('$3.3B') })]);
  assert.equal(unitTypo.objects[0].literal, '$3.3M');
  assert.equal(unitTypo.objects[0].authoritativeCorrection.literal, '$3.3B');
  assert.deepEqual(unitTypo.summary.correctedIds, ['other-income']);

  const numericTypo = create([otherIncome({ literal: '($1.1B)', value: '1.327672', unit: 'B', authoritativeCorrection: correction('($1.3B)') })]);
  assert.equal(numericTypo.objects[0].authoritativeCorrection.literal, '($1.3B)');
  const zeroTypo = create([otherIncome({ literal: '$0.0B', value: '0.053', unit: 'B', authoritativeCorrection: correction('$0.1B') })]);
  assert.equal(zeroTypo.objects[0].literal, '$0.0B');

  assert.throws(
    () => create([otherIncome({ literal: '$3.3M', value: '3.3', unit: 'B' })]),
    (error) => error.code === 'SOURCE_OBJECTS_AMOUNT_RESOLUTION_MISMATCH'
  );
  assert.throws(
    () => create([otherIncome({ literal: '$3.3M', value: '3.3', unit: 'B', authoritativeCorrection: correction('$3.0B') })]),
    (error) => error.code === 'SOURCE_OBJECTS_CORRECTION_MISMATCH'
  );
  assert.throws(
    () => create([otherIncome({ authoritativeCorrection: correction('$40M') })]),
    (error) => error.code === 'SOURCE_OBJECTS_CORRECTION_UNNECESSARY'
  );
  assert.throws(
    () => create([otherIncome({ literal: '$3.3M', value: '3.3', unit: 'B', authoritativeCorrection: { literal: '$3.3B', reason: 'no approval' } })]),
    (error) => error.code === 'SOURCE_OBJECTS_CORRECTION_INVALID'
  );
});

test('value reconciliation passes on the loaded SSOT and Adapter and fails on any mismatch', () => {
  const sourceObjects = create([otherIncome()], { loadedData: loadedData() });
  assert.deepEqual(sourceObjects.reconciliation, { status: 'passed', checked: 1, unit: 'B' });
  assert.deepEqual(
    reconcileSourceObjects(
      create([otherIncome({ ssotRef: { family: 'income-statement', path: 'otherIncome.total' } })]),
      { loadedData: loadedData() }
    ),
    { status: 'passed', checked: 1, unit: 'B' }
  );
  const failures = [
    [loadedData({ ssotValue: 0 }), 'SOURCE_OBJECTS_SSOT_VALUE_MISMATCH'],
    [loadedData({ nodeValue: 0 }), 'SOURCE_OBJECTS_ADAPTER_VALUE_MISMATCH'],
    [loadedData({ recordDecimals: 1 }), 'SOURCE_OBJECTS_DISPLAY_PRECISION_LOSS'],
    [loadedData({ valueText: null, adapterDecimals: 1 }), 'SOURCE_OBJECTS_DISPLAY_PRECISION_LOSS'],
    [loadedData({ valueText: '$0.0B' }), 'SOURCE_OBJECTS_ADAPTER_DISPLAY_MISMATCH'],
  ];
  for (const [loaded, code] of failures) {
    assert.throws(() => create([otherIncome()], { loadedData: loaded }), (error) => error.code === code, code);
  }
  assert.throws(
    () => create([otherIncome({ ssotRef: { family: 'income-statement', path: 'otherExpenses.items', id: 'other_income' } })], { loadedData: loadedData() }),
    (error) => error.code === 'SOURCE_OBJECTS_SSOT_VALUE_MISMATCH'
  );
  assert.throws(
    () => create([otherIncome({ node: undefined, nonNodeMetric: 'other_income' })], { loadedData: loadedData() }),
    (error) => error.code === 'SOURCE_OBJECTS_ADAPTER_TARGET_MISSING'
  );
  assert.throws(
    () => create([otherIncome({ node: 'missing_node' })], { loadedData: loadedData() }),
    (error) => error.code === 'SOURCE_OBJECTS_ADAPTER_TARGET_MISSING'
  );
});

test('typed SSOT paths reconcile cost items, payment networks, profit items and non-node callouts', () => {
  const loaded = loadedData();
  loaded.records[0].revenue.paymentNetwork = {
    gross: { id: 'network_revenue', value: 11.5 },
    grossItems: [{ id: 'domestic', value: 3.2 }],
    rebates: { id: 'rebates', value: 6.0 },
  };
  loaded.records[0].profit.gross = { id: 'gross_profit', value: 1, items: [{ id: 'square_gross_profit', value: 1 }] };
  loaded.records[0].profit.operating = { id: 'operating_profit', value: 0.6, items: [{ id: 'aws_operating_profit', value: 0.6 }] };
  loaded.datasets[0].nodes.push(
    { id: 'product_cost', value: 0.6, valueText: '$600M' },
    { id: 'domestic', value: 3.2, valueText: '$3.2B' },
    { id: 'rebates', value: 6.0, valueText: '($6.0B)' },
    { id: 'square_gross_profit', value: 1, valueText: '$1.0B' },
  );
  loaded.datasets[0].nonNodeMetrics = [{ id: 'aws_operating_profit', representation: 'annotation', value: 0.6 }];
  const value = (id, literal, amount, unit, path, ssotId, target) => ({
    id,
    class: 'value',
    literal,
    value: amount,
    unit,
    ssotRef: { family: 'income-statement', path, id: ssotId },
    ...target,
  });
  const sourceObjects = create([
    value('product-cost', '$600M', '600', 'M', 'costs.costOfRevenue.items', 'product_cost', { node: 'product_cost' }),
    value('domestic', '$3.2B', '3.2', 'B', 'revenue.paymentNetwork.grossItems', 'domestic', { node: 'domestic' }),
    value('rebates', '($6.0B)', '6.0', 'B', 'revenue.paymentNetwork.rebates', 'rebates', { node: 'rebates' }),
    value('square-gross-profit', '$1.0B', '1.0', 'B', 'profit.gross.items', 'square_gross_profit', { node: 'square_gross_profit' }),
    value('aws-operating-profit', '$0.6B', '0.6', 'B', 'profit.operating.items', 'aws_operating_profit', { nonNodeMetric: 'aws_operating_profit' }),
  ], { loadedData: loaded });
  assert.deepEqual(sourceObjects.reconciliation, { status: 'passed', checked: 5, unit: 'B' });
});

test('an accounting-sign tax benefit reconciles with its positive cost-face magnitude', () => {
  const objects = [{
    id: 'tax',
    class: 'value',
    literal: '$1,187M',
    value: '1187',
    unit: 'M',
    ssotRef: { family: 'income-statement', path: 'costs.tax', id: 'tax' },
    node: 'tax',
  }];
  const loaded = (type, ssotValue) => ({
    records: [{ key: DATASET_KEY, unit: 'M', decimals: 0, costs: { tax: { id: 'tax', value: ssotValue } } }],
    datasets: [{ key: DATASET_KEY, meta: { unit: 'M', decimals: 0 }, nodes: [{ id: 'tax', type, value: 1187, valueText: '$1,187M' }] }],
  });
  assert.equal(create(objects, { loadedData: loaded('cost', -1187) }).reconciliation.checked, 1);
  for (const [type, ssotValue] of [['profit', -1187], ['cost', -1186]]) {
    assert.throws(() => create(objects, { loadedData: loaded(type, ssotValue) }), /does not match SSOT/);
  }
});

test('a painted value node cannot reconcile to zero', () => {
  assert.throws(
    () => create([otherIncome({ literal: '$0M', value: '0' })], { loadedData: loadedData({ ssotValue: 0, nodeValue: 0, valueText: '$0M' }) }),
    (error) => error.code === 'SOURCE_OBJECTS_NODE_ZERO_VALUE'
  );
});

test('Revenue Metric values reconcile against dated observations without Sankey targets', () => {
  const objects = [{
    id: 'arr-2026-01-01',
    class: 'value',
    literal: '$120M',
    value: '120',
    unit: 'M',
    ssotRef: { family: 'revenue-metric', path: 'observations', date: '2026-01-01' },
  }];
  const loaded = { revenueRecords: [{ key: DATASET_KEY, unit: 'M', decimals: 1, observations: [{ date: '2026-01-01', value: 120 }] }] };
  assert.deepEqual(create(objects, { adapter: 'revenue-metric', loadedData: loaded }).reconciliation, { status: 'passed', checked: 1, unit: 'M' });
  assert.throws(
    () => create([{ ...objects[0], node: 'arr' }], { adapter: 'revenue-metric' }),
    (error) => error.code === 'SOURCE_OBJECTS_TARGET_INVALID'
  );
  loaded.revenueRecords[0].observations[0].value = 121;
  assert.throws(() => create(objects, { adapter: 'revenue-metric', loadedData: loaded }), (error) => error.code === 'SOURCE_OBJECTS_SSOT_VALUE_MISMATCH');
});
