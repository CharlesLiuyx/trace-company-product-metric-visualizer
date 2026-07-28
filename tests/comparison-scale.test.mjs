import test from 'node:test';
import assert from 'node:assert/strict';
import { loadBrowserData } from '../scripts/lib/browser-data-loader.mjs';
import { loadClassicScripts } from './helpers/vm-load.mjs';

const RUNTIME_SCRIPTS = [
  'vendor/d3.min.js',
  'vendor/d3-sankey.min.js',
  'src/trace-domain.js',
  'src/sankey-engine.js',
  'src/comparison-scale.js',
];

const runtime = loadClassicScripts(RUNTIME_SCRIPTS);
const { measureNodeValueScale } = runtime.SankeyEngine;
const { createPlan } = runtime.TraceComparisonScale;

function fixedDataset(key, {
  value = 100,
  height = 200,
  scale = 1,
  includeAnchorHeight = true,
} = {}) {
  const nodes = [
    { id: 'revenue', col: 0, order: 0, type: 'hub', label: 'Revenue', value },
  ];
  const layoutNodes = includeAnchorHeight
    ? { revenue: { x: 100, y: 100, width: 40, height } }
    : {};
  return {
    key,
    meta: { currency: '$', unit: 'B', decimals: 1 },
    render: { width: 1200, height: 800 },
    nodes,
    links: [],
    layout: {
      ...(scale == null ? {} : { scale }),
      nodes: layoutNodes,
    },
  };
}

function dynamicDataset(key = 'dynamic') {
  return {
    key,
    render: {
      width: 1200,
      height: 800,
      margin: { top: 50, right: 50, bottom: 50, left: 50 },
      nodePadding: 20,
    },
    nodes: [
      { id: 'revenue', col: 0, order: 0, type: 'hub', label: 'Revenue', value: 100 },
      { id: 'gross', col: 1, order: 0, type: 'profit', label: 'Gross profit', value: 60 },
      { id: 'cost', col: 1, order: 1, type: 'cost', label: 'Cost', value: 40 },
    ],
    links: [
      { source: 'revenue', target: 'gross', value: 60 },
      { source: 'revenue', target: 'cost', value: 40 },
    ],
  };
}

function financial(key, currency = '$', unit = 'B', revenue = { total: 100, items: [] }) {
  return { key, currency, unit, decimals: 1, revenue };
}

function assertClose(actual, expected, message, relativeTolerance = 1e-12) {
  const tolerance = Math.max(Number.MIN_VALUE, Math.abs(expected) * relativeTolerance);
  assert.ok(
    Number.isFinite(actual) && Math.abs(actual - expected) <= tolerance,
    `${message}: expected ${expected}, got ${actual}`
  );
}

test('renderer scale uses the explicit fixed anchor height even when layout.scale conflicts', () => {
  const dataset = fixedDataset('fixed-conflict', {
    value: 120,
    height: 300,
    scale: 0.25,
  });

  const result = measureNodeValueScale(dataset, 'revenue');

  assert.equal(result.status, 'calibrated');
  assert.equal(result.layoutMode, 'fixed');
  assert.equal(result.provenance, 'fixed-node');
  assert.equal(result.coordinateSpace, 'viewBox');
  assert.equal(result.anchorRole, 'hub');
  assert.equal(result.authoredValue, 120);
  assert.equal(result.renderedHeight, 300);
  assert.equal(result.viewUnitsPerValue, 2.5);
  assert.equal(result.canvasWidth, 1200);
  assert.equal(result.canvasHeight, 800);
});

test('renderer scale measures the same one-unit minimum face that render paints', () => {
  const dataset = fixedDataset('sub-unit-face', {
    value: 100,
    height: 0.25,
    scale: 0.0025,
  });

  const result = measureNodeValueScale(dataset, 'revenue');

  assert.equal(result.status, 'calibrated');
  assert.equal(result.provenance, 'fixed-node');
  assert.equal(result.renderedHeight, 1);
  assert.equal(result.viewUnitsPerValue, 0.01);
});

test('renderer scale resolves fixed-derived geometry from layout.scale and peer node geometry', () => {
  const explicitScale = fixedDataset('fixed-derived-scale', {
    value: 100,
    scale: 3.3,
    includeAnchorHeight: false,
  });
  const fromScale = measureNodeValueScale(explicitScale, 'revenue');
  assert.equal(fromScale.status, 'calibrated');
  assert.equal(fromScale.provenance, 'fixed-derived');
  assert.equal(fromScale.renderedHeight, 330);
  assert.equal(fromScale.viewUnitsPerValue, 3.3);

  const peerDerived = {
    key: 'fixed-derived-peer',
    render: { width: 1200, height: 800 },
    nodes: [
      { id: 'revenue', col: 0, type: 'hub', value: 100 },
      { id: 'gross', col: 1, type: 'profit', value: 25 },
    ],
    links: [],
    layout: {
      nodes: {
        gross: { x: 500, y: 100, width: 40, height: 50 },
      },
    },
  };
  const fromPeer = measureNodeValueScale(peerDerived, 'revenue');
  assert.equal(fromPeer.status, 'calibrated');
  assert.equal(fromPeer.provenance, 'fixed-derived');
  assert.equal(fromPeer.renderedHeight, 200);
  assert.equal(fromPeer.viewUnitsPerValue, 2);
});

test('renderer scale measures dynamic d3 geometry without losing the authored anchor value', () => {
  const dataset = dynamicDataset();
  const before = JSON.stringify(dataset);

  const result = measureNodeValueScale(dataset, 'revenue');

  assert.equal(result.status, 'calibrated');
  assert.equal(result.layoutMode, 'dynamic');
  assert.equal(result.provenance, 'dynamic-layout');
  assert.equal(result.coordinateSpace, 'viewBox');
  assert.equal(result.authoredValue, 100);
  assert.ok(result.renderedHeight > 0);
  assert.ok(result.viewUnitsPerValue > 0);
  assert.equal(JSON.stringify(dataset), before, 'dynamic compilation must not mutate the View Adapter');
});

test('renderer scale returns stable typed failures instead of NaN or exceptions', () => {
  const valid = fixedDataset('valid');
  const missingNode = measureNodeValueScale(valid, 'missing');
  const missingId = measureNodeValueScale(valid, '');
  const coercedId = measureNodeValueScale(valid, 1);
  const zeroValue = measureNodeValueScale(
    fixedDataset('zero', { value: 0, height: 20 }),
    'revenue'
  );
  const negativeGeometry = measureNodeValueScale(
    fixedDataset('negative-height', { value: 10, height: -20 }),
    'revenue'
  );
  const invalidLayout = measureNodeValueScale({
    key: 'invalid-layout',
    nodes: [{ id: 'revenue', col: 0, type: 'hub', value: 100 }],
    links: [{ source: 'revenue', target: 'absent', value: 100 }],
  }, 'revenue');
  const nonCanonicalIds = measureNodeValueScale({
    key: 'non-canonical-ids',
    nodes: [
      { id: 1, col: 0, type: 'hub', value: 100 },
      { id: '1', col: 1, type: 'hub', value: 100 },
    ],
    links: [],
    layout: {
      nodes: {
        1: { x: 100, y: 100, width: 40, height: 100 },
      },
    },
  }, '1');
  const coercedCanvas = fixedDataset('coerced-canvas');
  coercedCanvas.render.width = '1200';
  coercedCanvas.render.height = [800];
  const invalidCanvas = measureNodeValueScale(coercedCanvas, 'revenue');
  const coercedValue = fixedDataset('coerced-value');
  coercedValue.nodes[0].value = '100';
  const invalidValue = measureNodeValueScale(coercedValue, 'revenue');

  assert.equal(missingId.status, 'uncalibrated');
  assert.equal(missingId.reason, 'invalid-anchor-id');
  assert.equal(coercedId.reason, 'invalid-anchor-id');
  assert.equal(missingNode.reason, 'missing-anchor-node');
  assert.equal(zeroValue.reason, 'zero-or-invalid-anchor-value');
  assert.equal(negativeGeometry.reason, 'non-positive-anchor-geometry');
  assert.equal(invalidLayout.reason, 'layout-error');
  assert.match(invalidLayout.message, /unknown target node/i);
  assert.equal(nonCanonicalIds.reason, 'layout-error');
  assert.match(nonCanonicalIds.message, /canonical string id/i);
  assert.equal(invalidCanvas.reason, 'invalid-canvas-geometry');
  assert.equal(invalidValue.reason, 'zero-or-invalid-anchor-value');

  for (const result of [
    missingId,
    coercedId,
    missingNode,
    zeroValue,
    negativeGeometry,
    invalidLayout,
    nonCanonicalIds,
    invalidCanvas,
    invalidValue,
  ]) {
    assert.equal('viewUnitsPerValue' in result, false, `${result.reason} must not expose a bogus scale`);
  }
});

test('comparison plan normalizes currency and units while preserving input order and values', () => {
  const eur = fixedDataset('eur-millions', { value: 80, height: 96, scale: 99 });
  const usd = fixedDataset('usd-billions', { value: 100, height: 250, scale: 0.01 });
  eur.meta.currency = '€';
  eur.meta.unit = 'M';
  const entries = [
    { dataset: eur, financial: financial(eur.key, '€', 'M', { total: 80, items: [] }) },
    { dataset: usd, financial: financial(usd.key, '$', 'B') },
  ];
  const before = JSON.stringify(entries);

  const plan = createPlan(entries);

  assert.equal(plan.status, 'calibrated');
  assert.deepEqual(
    Array.from(plan.measurements, (measurement) => measurement.key),
    entries.map((entry) => entry.dataset.key),
    'measurements must retain caller order'
  );
  assert.equal(JSON.stringify(entries), before, 'calibration must not mutate or reorder its inputs');

  const eurMeasurement = plan.measurementFor(eur.key);
  const usdMeasurement = plan.measurementFor(usd.key);
  assert.deepEqual(
    [eurMeasurement.canvasWidth, eurMeasurement.canvasHeight],
    [1200, 800],
    'the scale plan carries the renderer-owned canvas dimensions used by responsive fit'
  );
  // Independent oracle: do not reuse the production conversion helper.
  const expectedEurUsdPerValue = 1e6 / 0.87712;
  const expectedUsdUsdPerValue = 1e9;
  assertClose(eurMeasurement.usdPerValue, expectedEurUsdPerValue, 'EUR millions conversion');
  assertClose(usdMeasurement.usdPerValue, expectedUsdUsdPerValue, 'USD billions conversion');
  assertClose(eurMeasurement.viewUnitsPerUsd, 1.2 / expectedEurUsdPerValue, 'EUR view units/USD');
  assertClose(usdMeasurement.viewUnitsPerUsd, 2.5 / expectedUsdUsdPerValue, 'USD view units/USD');

  const expectedCommon = Math.min(eurMeasurement.viewUnitsPerUsd, usdMeasurement.viewUnitsPerUsd);
  assertClose(plan.commonViewUnitsPerUsd, expectedCommon, 'common view units/USD');
  for (const measurement of plan.measurements) {
    assertClose(
      measurement.viewUnitsPerUsd * measurement.normalizationFactor,
      plan.commonViewUnitsPerUsd,
      `${measurement.key} normalized view units/USD`
    );
    assert.equal(plan.factorFor(measurement.key), measurement.normalizationFactor);
  }
});

test('comparison plan rejects a non-deterministic Adapter before it can split SSOT and renderer authority', () => {
  const dataset = fixedDataset('non-deterministic-adapter');
  const canonicalNodes = dataset.nodes;
  let nodeReads = 0;
  Object.defineProperty(dataset, 'nodes', {
    enumerable: true,
    get() {
      nodeReads += 1;
      return nodeReads === 1
        ? canonicalNodes
        : canonicalNodes.map((node) => ({ ...node, value: node.value * 2 }));
    },
  });

  const plan = createPlan([{ dataset, financial: financial(dataset.key) }]);

  assert.equal(plan.status, 'uncalibrated');
  assert.equal(plan.diagnostics[0].stage, 'geometry');
  assert.equal(plan.diagnostics[0].code, 'compiled-anchor-drift');
});

test('Metric SSOT proves a rounding-bound anchor while painted scale stays tied to the visible value', () => {
  const dataset = fixedDataset('rounded-visible-anchor', {
    value: 100,
    height: 250,
  });
  const record = financial(dataset.key, '$', 'B', {
    total: 100.04,
    items: [],
  });

  const plan = createPlan([{ dataset, financial: record }]);

  assert.equal(plan.status, 'calibrated');
  assert.equal(plan.measurements[0].authoredValue, 100);
  assert.equal(plan.measurements[0].viewUnitsPerValue, 2.5);
  assert.equal(plan.measurements[0].anchorAuthority, 'revenue-total');

  record.revenue.total = 100.06;
  const outsideDisplayResolution = createPlan([{ dataset, financial: record }]);
  assert.equal(outsideDisplayResolution.status, 'uncalibrated');
  assert.equal(
    outsideDisplayResolution.diagnostics[0].code,
    'revenue-anchor-value-mismatch'
  );
});

test('comparison plan reports stage-specific diagnostics and fails closed for the whole group', () => {
  const valid = fixedDataset('valid-entry');
  const missingFinancial = fixedDataset('missing-financial');
  const missingAnchor = fixedDataset('missing-anchor');
  missingAnchor.nodes[0].id = 'not_revenue';
  missingAnchor.layout.nodes = { not_revenue: missingAnchor.layout.nodes.revenue };
  const missingCurrency = fixedDataset('missing-currency');
  const unsupportedUnit = fixedDataset('unsupported-unit');
  const missingFx = fixedDataset('missing-fx');
  const entries = [
    { dataset: valid, financial: financial(valid.key) },
    { dataset: missingFinancial },
    {
      dataset: missingAnchor,
      financial: financial(missingAnchor.key),
    },
    { dataset: missingCurrency, financial: financial(missingCurrency.key, '', 'B') },
    { dataset: unsupportedUnit, financial: financial(unsupportedUnit.key, '$', 'widgets') },
    { dataset: missingFx, financial: financial(missingFx.key, 'BTC', 'B') },
  ];
  const inputOrder = entries.map((entry) => entry.dataset.key);

  const plan = createPlan(entries);

  assert.equal(plan.status, 'uncalibrated');
  assert.equal(plan.commonViewUnitsPerUsd, null);
  assert.equal(plan.measurements.length, 0, 'a valid subset must not be partially normalized');
  assert.deepEqual(entries.map((entry) => entry.dataset.key), inputOrder);
  assert.deepEqual(
    Array.from(plan.diagnostics, ({ key, stage, code }) => [key, stage, code]),
    [
      ['missing-financial', 'metric-ssot', 'missing-financial-record'],
      ['missing-anchor', 'metric-contract', 'missing-anchor-node'],
      ['missing-currency', 'metric-ssot', 'missing-reporting-currency'],
      ['unsupported-unit', 'metric-ssot', 'unsupported-money-unit'],
      ['missing-fx', 'fx', 'missing-usd-conversion'],
    ]
  );
  for (const key of inputOrder) assert.equal(plan.factorFor(key), null);
});

test('comparison plan rejects malformed Interface inputs before calibration', () => {
  const dataset = fixedDataset('duplicate');
  const entry = { dataset, financial: financial(dataset.key) };

  assert.throws(() => createPlan(null), /entries must be an array/i);
  assert.throws(() => createPlan([
    entry,
    entry,
  ]), /duplicate comparison scale dataset key/i);
  assert.throws(() => createPlan([{
    dataset: { ...dataset, __datasetStub: true },
    financial: financial(dataset.key),
  }]), /still a manifest stub/i);

  const empty = createPlan([]);
  assert.equal(empty.status, 'uncalibrated');
  assert.equal(empty.diagnostics[0].code, 'no-records');
  assert.equal(empty.commonViewUnitsPerUsd, null);
});

test('authoritative comparison inputs reject coercion and non-canonical ids', () => {
  const stringValue = fixedDataset('string-value');
  stringValue.nodes[0].value = '100';
  const stringValuePlan = createPlan([{
    dataset: stringValue,
    financial: financial(stringValue.key),
  }]);
  assert.equal(stringValuePlan.status, 'uncalibrated');
  assert.equal(stringValuePlan.diagnostics[0].code, 'invalid-revenue-anchor-value');

  const stringTotal = fixedDataset('string-total');
  const stringTotalRecord = financial(stringTotal.key);
  stringTotalRecord.revenue.total = '100';
  const stringTotalPlan = createPlan([{
    dataset: stringTotal,
    financial: stringTotalRecord,
  }]);
  assert.equal(stringTotalPlan.status, 'uncalibrated');
  assert.equal(stringTotalPlan.diagnostics[0].code, 'missing-revenue-total');

  const nullDecimals = fixedDataset('null-decimals');
  const nullDecimalsRecord = financial(nullDecimals.key);
  nullDecimalsRecord.decimals = null;
  const nullDecimalsPlan = createPlan([{
    dataset: nullDecimals,
    financial: nullDecimalsRecord,
  }]);
  assert.equal(nullDecimalsPlan.status, 'uncalibrated');
  assert.equal(nullDecimalsPlan.diagnostics[0].code, 'invalid-display-decimals');

  const paddedUnit = fixedDataset('padded-unit');
  const paddedUnitPlan = createPlan([{
    dataset: paddedUnit,
    financial: financial(paddedUnit.key, '$', ' B '),
  }]);
  assert.equal(paddedUnitPlan.status, 'uncalibrated');
  assert.equal(paddedUnitPlan.diagnostics[0].code, 'unsupported-money-unit');

  const typedCollision = fixedDataset('typed-id-collision');
  typedCollision.nodes = [
    { id: 1, col: 0, type: 'hub', value: 100 },
    { id: '1', col: 1, type: 'hub', value: 100 },
  ];
  typedCollision.layout.nodes = {
    1: { x: 100, y: 100, width: 40, height: 100 },
  };
  typedCollision.comparisonScale = { anchorNodeId: '1' };
  const typedCollisionPlan = createPlan([{
    dataset: typedCollision,
    financial: financial(typedCollision.key, '$', 'B', {
      total: 100,
      items: [{ id: '1', value: 100 }],
    }),
  }]);
  assert.equal(typedCollisionPlan.status, 'uncalibrated');
  assert.equal(
    typedCollisionPlan.diagnostics[0].code,
    'invalid-or-duplicate-rendered-node-id'
  );
});

test('non-revenue monetary faces require an explicit stable anchor declaration', () => {
  const dataset = fixedDataset('explicit-anchor');
  dataset.nodes[0] = {
    ...dataset.nodes[0],
    id: 'biopharma',
    label: 'Revenue-like presentation text',
  };
  dataset.layout.nodes = { biopharma: dataset.layout.nodes.revenue };
  dataset.comparisonScale = { anchorNodeId: 'biopharma' };
  const revenueLineage = { total: 100, items: [{ id: 'biopharma', value: 100 }] };

  const calibrated = createPlan([{
    dataset,
    financial: financial(dataset.key, '$', 'B', revenueLineage),
  }]);
  assert.equal(calibrated.status, 'calibrated');
  assert.equal(calibrated.measurements[0].anchorNodeId, 'biopharma');
  assert.equal(calibrated.measurements[0].anchorAuthority, 'revenue-lineage');

  delete dataset.comparisonScale;
  const undeclared = createPlan([{
    dataset,
    financial: financial(dataset.key, '$', 'B', revenueLineage),
  }]);
  assert.equal(undeclared.status, 'uncalibrated');
  assert.equal(undeclared.diagnostics[0].code, 'missing-anchor-node');
  assert.match(undeclared.diagnostics[0].message, /"revenue"/);
});

test('a normal revenue face cannot be overridden by a profit or cost node', () => {
  const dataset = fixedDataset('malicious-anchor');
  dataset.nodes.push({ id: 'gross_profit', col: 1, type: 'profit', value: 60 });
  dataset.layout.nodes.gross_profit = { x: 500, y: 100, width: 40, height: 1 };
  dataset.comparisonScale = { anchorNodeId: 'gross_profit' };

  const plan = createPlan([{ dataset, financial: financial(dataset.key) }]);

  assert.equal(plan.status, 'uncalibrated');
  assert.equal(plan.measurements.length, 0);
  assert.equal(plan.diagnostics[0].stage, 'metric-contract');
  assert.equal(plan.diagnostics[0].code, 'redundant-anchor-declaration');
});

test('an exceptional anchor must match both id and value in Metric SSOT revenue lineage', () => {
  const dataset = fixedDataset('mismatched-lineage');
  dataset.nodes[0].id = 'biopharma';
  dataset.layout.nodes = { biopharma: dataset.layout.nodes.revenue };
  dataset.comparisonScale = { anchorNodeId: 'biopharma' };

  const plan = createPlan([{
    dataset,
    financial: financial(dataset.key, '$', 'B', {
      total: 100,
      items: [{ id: 'biopharma', value: 99 }],
    }),
  }]);

  assert.equal(plan.status, 'uncalibrated');
  assert.equal(plan.diagnostics[0].code, 'invalid-revenue-lineage-anchor');
});

test('an exceptional anchor rejects duplicate Metric SSOT lineage ids', () => {
  const dataset = fixedDataset('ambiguous-lineage');
  dataset.nodes[0].id = 'biopharma';
  dataset.layout.nodes = { biopharma: dataset.layout.nodes.revenue };
  dataset.comparisonScale = { anchorNodeId: 'biopharma' };

  const plan = createPlan([{
    dataset,
    financial: financial(dataset.key, '$', 'B', {
      total: 100,
      items: [
        { id: 'biopharma', value: 100 },
        { id: 'biopharma', value: 0 },
      ],
    }),
  }]);

  assert.equal(plan.status, 'uncalibrated');
  assert.equal(plan.measurements.length, 0);
  assert.equal(plan.diagnostics[0].code, 'ambiguous-revenue-lineage-anchor');
});

test('an exceptional anchor counts shared lineage objects as duplicate occurrences', () => {
  const dataset = fixedDataset('shared-lineage');
  dataset.nodes[0].id = 'biopharma';
  dataset.layout.nodes = { biopharma: dataset.layout.nodes.revenue };
  dataset.comparisonScale = { anchorNodeId: 'biopharma' };
  const shared = { id: 'biopharma', value: 100 };
  const sharedBranch = [shared];

  const plan = createPlan([{
    dataset,
    financial: financial(dataset.key, '$', 'B', {
      total: 100,
      items: sharedBranch,
      breakdowns: sharedBranch,
    }),
  }]);

  assert.equal(plan.status, 'uncalibrated');
  assert.equal(plan.diagnostics[0].code, 'ambiguous-revenue-lineage-anchor');
});

test('an exceptional anchor rejects cyclic Metric SSOT lineage', () => {
  const dataset = fixedDataset('cyclic-lineage');
  dataset.nodes[0].id = 'biopharma';
  dataset.layout.nodes = { biopharma: dataset.layout.nodes.revenue };
  dataset.comparisonScale = { anchorNodeId: 'biopharma' };
  const revenue = {
    total: 100,
    items: [{ id: 'biopharma', value: 100 }],
    breakdowns: [],
  };
  revenue.breakdowns.push(revenue);

  const plan = createPlan([{
    dataset,
    financial: financial(dataset.key, '$', 'B', revenue),
  }]);

  assert.equal(plan.status, 'uncalibrated');
  assert.equal(plan.diagnostics[0].code, 'cyclic-revenue-lineage');
});

test('revenue anchors require a source-or-hub semantic face', () => {
  const normal = fixedDataset('cost-revenue');
  normal.nodes[0].type = 'cost';
  const normalPlan = createPlan([{
    dataset: normal,
    financial: financial(normal.key),
  }]);
  assert.equal(normalPlan.status, 'uncalibrated');
  assert.equal(normalPlan.diagnostics[0].code, 'invalid-revenue-anchor-role');

  const exceptional = fixedDataset('profit-exception');
  exceptional.nodes[0] = {
    ...exceptional.nodes[0],
    id: 'biopharma',
    type: 'profit',
  };
  exceptional.layout.nodes = { biopharma: exceptional.layout.nodes.revenue };
  exceptional.comparisonScale = { anchorNodeId: 'biopharma' };
  const exceptionalPlan = createPlan([{
    dataset: exceptional,
    financial: financial(exceptional.key, '$', 'B', {
      total: 100,
      items: [{ id: 'biopharma', value: 100 }],
    }),
  }]);
  assert.equal(exceptionalPlan.status, 'uncalibrated');
  assert.equal(exceptionalPlan.diagnostics[0].code, 'invalid-revenue-anchor-role');
});

test('an unbounded arithmetic tolerance cannot disguise a mismatched revenue anchor', () => {
  const dataset = fixedDataset('unbounded-tolerance', { value: 1 });
  const record = financial(dataset.key, '$', 'B', { total: 999, items: [] });
  record.roundingTolerance = 1000;

  const plan = createPlan([{ dataset, financial: record }]);

  assert.equal(plan.status, 'uncalibrated');
  assert.equal(plan.measurements.length, 0);
  assert.equal(plan.diagnostics[0].code, 'revenue-anchor-value-mismatch');
});

test('display precision is authoritative and never expands with numeric magnitude', () => {
  const dataset = fixedDataset('large-anchor-mismatch', {
    value: 1e12,
    height: 200,
  });
  const record = financial(dataset.key, '$', 'B', {
    total: 1e12 + 0.001,
    items: [],
  });
  record.decimals = 3;

  const plan = createPlan([{ dataset, financial: record }]);

  assert.equal(plan.status, 'uncalibrated');
  assert.equal(plan.diagnostics[0].code, 'revenue-anchor-value-mismatch');

  record.revenue.total = 1e12;
  record.decimals = 12;
  const impossiblePrecision = createPlan([{ dataset, financial: record }]);
  assert.equal(impossiblePrecision.status, 'uncalibrated');
  assert.equal(
    impossiblePrecision.diagnostics[0].code,
    'unrepresentable-display-precision'
  );
});

test('normalization underflow cannot produce a calibrated zero factor', () => {
  const smallest = fixedDataset('smallest-native-scale', {
    value: 1e12,
    height: 1,
  });
  const largest = fixedDataset('largest-native-scale', {
    value: 1e-308,
    height: 1,
  });
  smallest.meta.unit = 'T';
  largest.meta.unit = 'K';
  const smallestRecord = financial(
    smallest.key,
    '$',
    'T',
    { total: 1e12, items: [] }
  );
  smallestRecord.decimals = 0;
  const largestRecord = financial(
    largest.key,
    '$',
    'K',
    { total: 1e-308, items: [] }
  );
  largestRecord.decimals = 12;

  const plan = createPlan([
    { dataset: smallest, financial: smallestRecord },
    { dataset: largest, financial: largestRecord },
  ]);

  assert.equal(plan.status, 'uncalibrated');
  assert.equal(plan.commonViewUnitsPerUsd, null);
  assert.equal(plan.measurements.length, 0);
  assert.equal(plan.diagnostics[0].stage, 'normalization');
  assert.equal(plan.diagnostics[0].code, 'invalid-normalization-factor');
});

let fullCorpus;
function loadFullCorpus() {
  if (!fullCorpus) fullCorpus = loadBrowserData({ runtime: RUNTIME_SCRIPTS });
  return fullCorpus;
}

test('all 654 registered View Adapters calibrate to one view-units/USD scale with the known fallback set', () => {
  const { context, datasets, records } = loadFullCorpus();
  const financialByKey = new Map(records.map((record) => [record.key, record]));
  const inputKeys = Array.from(datasets, (dataset) => dataset.key);
  const entries = Array.from(datasets, (dataset) => ({
    dataset,
    financial: financialByKey.get(dataset.key),
  }));

  assert.equal(datasets.length, 654);
  assert.equal(financialByKey.size, 654);

  const plan = context.TraceComparisonScale.createPlan(entries);

  assert.equal(plan.status, 'calibrated');
  assert.equal(plan.diagnostics.length, 0);
  assert.equal(plan.measurements.length, 654);
  assert.deepEqual(
    Array.from(plan.measurements, (measurement) => measurement.key),
    inputKeys,
    'full-corpus calibration must retain manifest order'
  );

  const fallbackKeys = Array.from(plan.measurements)
    .filter((measurement) => measurement.provenance === 'fixed-derived')
    .map((measurement) => measurement.key)
    .sort();
  assert.deepEqual(fallbackKeys, [
    'sony-fy25',
    'unitedhealth-q1-fy26',
    'unitedhealth-q4-fy25',
  ]);

  for (const measurement of plan.measurements) {
    assert.ok(Number.isFinite(measurement.viewUnitsPerValue) && measurement.viewUnitsPerValue > 0);
    assert.ok(Number.isFinite(measurement.usdPerValue) && measurement.usdPerValue > 0);
    assert.ok(Number.isFinite(measurement.viewUnitsPerUsd) && measurement.viewUnitsPerUsd > 0);
    assert.ok(
      Number.isFinite(measurement.normalizationFactor)
      && measurement.normalizationFactor > 0
      && measurement.normalizationFactor <= 1
    );
    assertClose(
      measurement.viewUnitsPerUsd * measurement.normalizationFactor,
      plan.commonViewUnitsPerUsd,
      `${measurement.key} full-corpus normalized view units/USD`,
      1e-10
    );
  }
});

test('comparison plan fails closed when the rendered and SSOT money dimensions disagree', () => {
  const currencyMismatch = fixedDataset('currency-mismatch');
  currencyMismatch.meta.currency = '€';
  const unitMismatch = fixedDataset('unit-mismatch');
  unitMismatch.meta.unit = 'M';
  const blankDisplayCurrency = fixedDataset('blank-display-currency');
  blankDisplayCurrency.meta.currency = '';

  const currencyPlan = createPlan([{
    dataset: currencyMismatch,
    financial: financial(currencyMismatch.key),
  }]);
  const unitPlan = createPlan([{
    dataset: unitMismatch,
    financial: financial(unitMismatch.key),
  }]);
  const blankPlan = createPlan([{
    dataset: blankDisplayCurrency,
    financial: financial(blankDisplayCurrency.key),
  }]);

  assert.equal(currencyPlan.status, 'uncalibrated');
  assert.equal(currencyPlan.diagnostics[0].code, 'sankey-money-currency-mismatch');
  assert.equal(unitPlan.status, 'uncalibrated');
  assert.equal(unitPlan.diagnostics[0].code, 'sankey-money-unit-mismatch');
  assert.equal(
    blankPlan.status,
    'calibrated',
    'an intentional empty display currency remains valid for source-faithful valueText'
  );
});

test('Apple all-period regression proves raw layout.scale is not a comparison scale', () => {
  const { context, datasets, records } = loadFullCorpus();
  const financialByKey = new Map(records.map((record) => [record.key, record]));
  const appleEntries = datasets
    .filter((dataset) => financialByKey.get(dataset.key)?.company === 'Apple')
    .map((dataset) => ({ dataset, financial: financialByKey.get(dataset.key) }));
  assert.equal(appleEntries.length, 15);

  const plan = context.TraceComparisonScale.createPlan(appleEntries);
  assert.equal(plan.status, 'calibrated');

  const rawPxPerUsd = appleEntries.map(({ dataset, financial: record }) => (
    Number(dataset.layout?.scale) / (
      record.currency === '$' && record.unit === 'B' ? 1e9 : NaN
    )
  ));
  assert.ok(rawPxPerUsd.every((value) => Number.isFinite(value) && value > 0));
  const rawCommon = Math.min(...rawPxPerUsd);
  const legacyRenderedScales = appleEntries.map(({ dataset }, index) => (
    plan.measurementFor(dataset.key).viewUnitsPerUsd * rawCommon / rawPxPerUsd[index]
  ));
  const legacySpread = Math.max(...legacyRenderedScales) / Math.min(...legacyRenderedScales);
  assert.ok(
    legacySpread > 2,
    `the regression fixture must expose the old raw-layout calibration failure, got ${legacySpread}x`
  );

  const normalizedScales = plan.measurements.map((measurement) => (
    measurement.viewUnitsPerUsd * measurement.normalizationFactor
  ));
  assertClose(
    Math.max(...normalizedScales) / Math.min(...normalizedScales),
    1,
    'renderer-geometry calibration removes the Apple all-period scale spread'
  );

  for (const key of ['apple-q2-fy26', 'apple-q2-fy25']) {
    const dataset = appleEntries.find((entry) => entry.dataset.key === key).dataset;
    const measurement = plan.measurementFor(key);
    assert.equal(measurement.provenance, 'fixed-node');
    assert.notEqual(
      measurement.viewUnitsPerValue,
      dataset.layout.scale,
      `${key} must use its compiled revenue face instead of raw layout.scale`
    );
  }
});
