import assert from 'node:assert/strict';
import test from 'node:test';
import { createObjectInventory } from '../scripts/lib/object-inventory.mjs';
import {
  AUTHORITATIVE_CORRECTION_APPROVAL,
  AUTHORITATIVE_CORRECTION_METHOD,
  PRECISION_RECOVERY_METHOD,
  SOURCE_CLASSIFICATION_REVIEW_METHOD,
  SOURCE_COVERAGE_SCAN_PASSES,
  classifySourceSignals,
  createSourceClassification,
  createSourceCoverage,
} from '../scripts/lib/source-coverage.mjs';
import { assertSourceCoverageAuthoredValues } from '../scripts/lib/source-coverage-authored.mjs';
import {
  ZERO_PAINT_NODE_SLOT_CLASSIFICATION_CLAIM,
  ZERO_PAINT_NODE_SLOT_FEATURE,
  ZERO_PAINT_NODE_SLOT_INSPECTION_METHOD,
} from '../scripts/lib/source-face-observation.mjs';

const SOURCE_DIGEST = `sha256:${'a'.repeat(64)}`;
const DATASET_KEY = 'example-q4-fy25';

function classification(adapter = 'income-statement') {
  return createSourceClassification({
    datasetKey: DATASET_KEY,
    adapter,
    signals: adapter === 'income-statement'
      ? ['income-statement-values', 'sankey-flow-topology']
      : ['revenue-metric-definition', 'time-series-observations'],
    reviewMethod: SOURCE_CLASSIFICATION_REVIEW_METHOD,
    source: {
      locator: `input/processing/${DATASET_KEY}.png`,
      digest: SOURCE_DIGEST,
      width: 1200,
      height: 800,
    },
    fullImageBBox: [0, 0, 1200, 800],
  });
}

function financialInventory() {
  return createObjectInventory({
    datasetKey: DATASET_KEY,
    objects: [{
      id: 'node:other-income',
      kind: 'financial-line-item',
      disposition: 'render',
      mapping: [
        { role: 'data', target: 'incomeStatement.otherIncome.items.other_income' },
        { role: 'render', target: 'nodes.other_income' },
      ],
      features: ['visible-node-face'],
    }],
  });
}

function financialCoverage({
  amount = { literal: '$40M', value: '40', unit: 'M', resolution: '1' },
  ssotRef = { family: 'income-statement', path: 'otherIncome.items', id: 'other_income' },
  sourceLabel = 'Other',
  sourceClass = 'financial-value',
  dispositionInventory = financialInventory(),
  face = {
    claim: 'visible',
    searchBBox: [880, 180, 220, 120],
    observedBBox: [940, 230, 72, 4],
  },
} = {}) {
  const sourceClassification = classification();
  return createSourceCoverage({
    classification: sourceClassification,
    source: sourceClassification.source,
    scanPasses: SOURCE_COVERAGE_SCAN_PASSES,
    items: [{
      sourceId: 'source:other-income',
      sourceClass,
      sourceLabel,
      contentBBox: [900, 200, 180, 80],
      inventoryObjectIds: ['node:other-income'],
      ...(sourceClass === 'non-semantic-residual'
        ? { residualKind: 'decorative-residue' }
        : { amount, ssotRef }),
      ...(sourceClass === 'non-semantic-residual' ? {} : {
        face,
      }),
    }],
  }, { inventory: dispositionInventory, adapter: 'income-statement' });
}

test('user-directed topology restoration can specify a semantic face absent from the Source raster', () => {
  const coverage = financialCoverage({
    face: {
      claim: 'design-specified',
      authority: 'user-directed-topology-restoration',
      reason: 'Restore the missing right-hand Sankey continuation and bar.',
      targetBBox: [940, 230, 72, 4],
    },
  });
  assert.deepEqual(coverage.items[0].face, {
    claim: 'design-specified',
    authority: 'user-directed-topology-restoration',
    reason: 'Restore the missing right-hand Sankey continuation and bar.',
    targetBBox: [940, 230, 72, 4],
  });
  assert.deepEqual(coverage.summary.visibleNodeIds, ['other_income']);

  assert.throws(
    () => financialCoverage({
      face: {
        claim: 'design-specified',
        authority: 'agent-inferred-topology',
        reason: 'No explicit user direction.',
        targetBBox: [940, 230, 72, 4],
      },
    }),
    (error) => error.code === 'SOURCE_COVERAGE_DESIGN_FACE_AUTHORITY_REQUIRED'
  );
});

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

test('Cost of revenue detail items reconcile through the typed Source Coverage path', () => {
  const sourceClassification = classification();
  const inventory = createObjectInventory({
    datasetKey: DATASET_KEY,
    objects: [{
      id: 'node:product-cost',
      kind: 'financial-line-item',
      disposition: 'render',
      mapping: [
        { role: 'data', target: 'incomeStatement.costs.costOfRevenue.items.product_cost' },
        { role: 'render', target: 'nodes.product_cost' },
      ],
      features: ['visible-node-face'],
    }],
  });
  const coverage = createSourceCoverage({
    classification: sourceClassification,
    source: sourceClassification.source,
    scanPasses: SOURCE_COVERAGE_SCAN_PASSES,
    items: [{
      sourceId: 'source:product-cost',
      sourceClass: 'financial-value',
      sourceLabel: 'Products',
      contentBBox: [500, 300, 160, 60],
      inventoryObjectIds: ['node:product-cost'],
      amount: { literal: '$600M', value: '600', unit: 'M', resolution: '1' },
      ssotRef: { family: 'income-statement', path: 'costs.costOfRevenue.items', id: 'product_cost' },
      face: {
        claim: 'visible',
        searchBBox: [480, 280, 200, 100],
        observedBBox: [520, 320, 80, 20],
      },
    }],
  }, { inventory, adapter: 'income-statement' });
  const loaded = loadedData();
  loaded.datasets[0].nodes.push({ id: 'product_cost', value: 0.6, valueText: '$600M' });
  assert.deepEqual(
    assertSourceCoverageAuthoredValues(coverage, { loadedData: loaded }),
    { checked: 1, unit: 'B' }
  );
});

test('Payment-network gross items and rebates reconcile through typed Source Coverage paths', () => {
  const sourceClassification = classification();
  const inventory = createObjectInventory({
    datasetKey: DATASET_KEY,
    objects: [
      {
        id: 'node:domestic',
        kind: 'financial-line-item',
        disposition: 'render',
        mapping: [
          { role: 'data', target: 'incomeStatement.revenue.paymentNetwork.grossItems.domestic' },
          { role: 'render', target: 'nodes.domestic' },
        ],
        features: ['visible-node-face'],
      },
      {
        id: 'node:rebates',
        kind: 'financial-line-item',
        disposition: 'render',
        mapping: [
          { role: 'data', target: 'incomeStatement.revenue.paymentNetwork.rebates' },
          { role: 'render', target: 'nodes.rebates' },
        ],
        features: ['visible-node-face'],
      },
    ],
  });
  const coverage = createSourceCoverage({
    classification: sourceClassification,
    source: sourceClassification.source,
    scanPasses: SOURCE_COVERAGE_SCAN_PASSES,
    items: [
      {
        sourceId: 'source:domestic', sourceClass: 'financial-value', sourceLabel: 'Domestic $3.2B',
        contentBBox: [100, 200, 180, 80], inventoryObjectIds: ['node:domestic'],
        amount: { literal: '$3.2B', value: '3.2', unit: 'B', resolution: '0.1' },
        ssotRef: { family: 'income-statement', path: 'revenue.paymentNetwork.grossItems', id: 'domestic' },
        face: { searchBBox: [200, 250, 90, 100], observedBBox: [210, 260, 72, 80] },
      },
      {
        sourceId: 'source:rebates', sourceClass: 'financial-value', sourceLabel: 'Rebates ($6.0B)',
        contentBBox: [500, 400, 180, 160], inventoryObjectIds: ['node:rebates'],
        amount: { literal: '($6.0B)', value: '6.0', unit: 'B', resolution: '0.1' },
        ssotRef: { family: 'income-statement', path: 'revenue.paymentNetwork.rebates', id: 'rebates' },
        face: { searchBBox: [600, 430, 90, 170], observedBBox: [610, 440, 72, 155] },
      },
    ],
  }, { inventory, adapter: 'income-statement' });
  const loaded = loadedData();
  loaded.records[0].revenue.paymentNetwork = {
    gross: { id: 'network_revenue', value: 11.5 },
    grossItems: [{ id: 'domestic', value: 3.2 }],
    rebates: { id: 'rebates', value: 6.0 },
  };
  loaded.datasets[0].nodes.push(
    { id: 'domestic', value: 3.2, valueText: '$3.2B' },
    { id: 'rebates', value: 6.0, valueText: '($6.0B)' }
  );
  assert.deepEqual(
    assertSourceCoverageAuthoredValues(coverage, { loadedData: loaded }),
    { checked: 2, unit: 'B' }
  );
});

test('Gross profit contribution items reconcile through the typed Source Coverage path', () => {
  const sourceClassification = classification();
  const inventory = createObjectInventory({
    datasetKey: DATASET_KEY,
    objects: [{
      id: 'node:square-gross-profit',
      kind: 'gross-profit-contribution',
      disposition: 'render',
      mapping: [
        { role: 'data', target: 'incomeStatement.profit.gross.items.square_gross_profit' },
        { role: 'render', target: 'nodes.square_gross_profit' },
      ],
      features: ['visible-node-face'],
    }],
  });
  const coverage = createSourceCoverage({
    classification: sourceClassification,
    source: sourceClassification.source,
    scanPasses: SOURCE_COVERAGE_SCAN_PASSES,
    items: [{
      sourceId: 'source:square-gross-profit',
      sourceClass: 'financial-value',
      sourceLabel: 'Square gross profit contribution',
      contentBBox: [500, 300, 160, 60],
      inventoryObjectIds: ['node:square-gross-profit'],
      amount: { literal: '$1.0B', value: '1.0', unit: 'B', resolution: '0.1' },
      ssotRef: { family: 'income-statement', path: 'profit.gross.items', id: 'square_gross_profit' },
      face: {
        claim: 'visible',
        searchBBox: [480, 280, 200, 100],
        observedBBox: [520, 320, 80, 20],
      },
    }],
  }, { inventory, adapter: 'income-statement' });
  const loaded = loadedData();
  loaded.records[0].profit.gross = {
    id: 'gross_profit',
    value: 1,
    items: [{ id: 'square_gross_profit', value: 1 }],
  };
  loaded.datasets[0].nodes.push({ id: 'square_gross_profit', value: 1, valueText: '$1.0B' });
  assert.deepEqual(
    assertSourceCoverageAuthoredValues(coverage, { loadedData: loaded }),
    { checked: 1, unit: 'B' }
  );
});

test('Operating profit contribution items reconcile through the typed Source Coverage path', () => {
  const sourceClassification = classification();
  const inventory = createObjectInventory({
    datasetKey: DATASET_KEY,
    objects: [{
      id: 'annotation:aws-operating-profit',
      kind: 'operating-profit-contribution',
      disposition: 'render',
      mapping: [
        { role: 'data', target: 'incomeStatement.profit.operating.items.aws_operating_profit' },
        { role: 'render', target: 'nonNodeMetrics.aws_operating_profit' },
        { role: 'render', target: 'annotations.aws_operating_profit' },
      ],
      features: [ZERO_PAINT_NODE_SLOT_FEATURE],
      featureEvidence: {
        [ZERO_PAINT_NODE_SLOT_FEATURE]: {
          source: 'same-column-node-slot',
          locator: `input/processing/${DATASET_KEY}.png#aws-operating-profit-zero-paint-slot`,
          digest: SOURCE_DIGEST,
          referenceBBox: [940, 300, 72, 60],
          inspectionMethod: ZERO_PAINT_NODE_SLOT_INSPECTION_METHOD,
          classificationClaim: ZERO_PAINT_NODE_SLOT_CLASSIFICATION_CLAIM,
          reason: 'The Source callout has no independent node face in the measured terminal-column slot.',
        },
      },
    }],
  });
  const coverage = createSourceCoverage({
    classification: sourceClassification,
    source: sourceClassification.source,
    scanPasses: SOURCE_COVERAGE_SCAN_PASSES,
    items: [{
      sourceId: 'source:aws-operating-profit',
      sourceClass: 'financial-value',
      sourceLabel: 'AWS operating profit contribution',
      contentBBox: [900, 300, 180, 60],
      inventoryObjectIds: ['annotation:aws-operating-profit'],
      amount: { literal: '$0.6B', value: '0.6', unit: 'B', resolution: '0.1' },
      ssotRef: { family: 'income-statement', path: 'profit.operating.items', id: 'aws_operating_profit' },
    }],
  }, { inventory, adapter: 'income-statement' });
  const loaded = loadedData();
  loaded.records[0].profit.operating = {
    id: 'operating_profit',
    value: 0.6,
    items: [{ id: 'aws_operating_profit', value: 0.6 }],
  };
  loaded.datasets[0].nonNodeMetrics = [{
    id: 'aws_operating_profit',
    representation: 'annotation',
    value: 0.6,
  }];
  assert.deepEqual(
    assertSourceCoverageAuthoredValues(coverage, { loadedData: loaded }),
    { checked: 1, unit: 'B' }
  );
});

test('Source Coverage uses independent Source identities and never treats Other as residual', () => {
  const coverage = financialCoverage();
  assert.equal(coverage.items[0].sourceId, 'source:other-income');
  assert.deepEqual(coverage.items[0].inventoryObjectIds, ['node:other-income']);
  assert.deepEqual(coverage.summary.otherSourceIds, ['source:other-income']);
  assert.deepEqual(coverage.summary.smallestNonZero.map((item) => item.sourceId), ['source:other-income']);

  const skippedInventory = createObjectInventory({
    datasetKey: DATASET_KEY,
    objects: [{
      id: 'node:other-income',
      kind: 'watermark',
      disposition: 'skip',
      mapping: [],
      features: [],
      skipReason: 'incorrectly classified as decoration',
    }],
  });
  assert.throws(
    () => financialCoverage({
      sourceClass: 'non-semantic-residual',
      dispositionInventory: skippedInventory,
    }),
    (error) => error.code === 'SOURCE_COVERAGE_OTHER_SKIPPED'
  );

  const annotationMetric = createObjectInventory({
    datasetKey: DATASET_KEY,
    objects: [{
      id: 'annotation:other-income',
      kind: 'financial-callout',
      disposition: 'render',
      mapping: [
        { role: 'data', target: 'incomeStatement.otherIncome.items.other_income' },
        { role: 'render', target: 'nonNodeMetrics.other_income' },
        { role: 'render', target: 'annotations.other_income' },
      ],
      features: ['text', ZERO_PAINT_NODE_SLOT_FEATURE],
      featureEvidence: {
        [ZERO_PAINT_NODE_SLOT_FEATURE]: {
          source: 'same-column-node-slot',
          locator: `input/processing/${DATASET_KEY}.png#other-income-node-slot`,
          digest: SOURCE_DIGEST,
          referenceBBox: [940, 200, 72, 80],
          inspectionMethod: ZERO_PAINT_NODE_SLOT_INSPECTION_METHOD,
          classificationClaim: ZERO_PAINT_NODE_SLOT_CLASSIFICATION_CLAIM,
          reason: 'The native Source slot has no painted node face.',
        },
      },
    }],
  });
  const sourceClassification = classification();
  const annotationCoverage = createSourceCoverage({
    classification: sourceClassification,
    source: sourceClassification.source,
    scanPasses: SOURCE_COVERAGE_SCAN_PASSES,
    items: [{
      sourceId: 'source:other-income',
      sourceClass: 'financial-value',
      sourceLabel: 'Other',
      contentBBox: [900, 200, 180, 80],
      inventoryObjectIds: ['annotation:other-income'],
      amount: { literal: '$40M', value: '40', unit: 'M', resolution: '1' },
      ssotRef: { family: 'income-statement', path: 'otherIncome.items', id: 'other_income' },
    }],
  }, { inventory: annotationMetric, adapter: 'income-statement' });
  assert.deepEqual(annotationCoverage.items[0].nodeTargets, []);
  assert.deepEqual(annotationCoverage.items[0].metricTargets, ['other_income']);
  assert.doesNotThrow(() => assertSourceCoverageAuthoredValues(annotationCoverage, {
    loadedData: {
      ...loadedData(),
      datasets: [{
        key: DATASET_KEY,
        meta: { unit: 'B', decimals: 2 },
        nodes: [],
        nonNodeMetrics: [
          { id: 'other_income', representation: 'annotation', value: 0.04 },
        ],
      }],
    },
  }));
});

test('a financial non-node metric needs Source-bound zero-paint evidence', () => {
  const inventory = createObjectInventory({
    datasetKey: DATASET_KEY,
    objects: [{
      id: 'metric:restructuring',
      kind: 'financial-line-item',
      disposition: 'render',
      mapping: [
        { role: 'data', target: 'incomeStatement.costs.operatingExpenses.items.restructuring' },
        { role: 'render', target: 'nonNodeMetrics.restructuring' },
      ],
      features: [],
    }],
  });
  const sourceClassification = classification();
  assert.throws(
    () => createSourceCoverage({
      classification: sourceClassification,
      source: sourceClassification.source,
      scanPasses: SOURCE_COVERAGE_SCAN_PASSES,
      items: [{
        sourceId: 'source:restructuring',
        sourceClass: 'financial-value',
        sourceLabel: 'Restructuring',
        contentBBox: [900, 200, 180, 80],
        inventoryObjectIds: ['metric:restructuring'],
        amount: { literal: '$5M', value: '5', unit: 'M', resolution: '1' },
        ssotRef: {
          family: 'income-statement',
          path: 'costs.operatingExpenses.items',
          id: 'restructuring',
        },
      }],
    }, { inventory, adapter: 'income-statement' }),
    (error) => error.code === 'SOURCE_COVERAGE_ZERO_PAINT_EVIDENCE_REQUIRED'
  );
});

test('a value-bearing Other cannot use the retired invisible-node intent or annotation source class (T22)', () => {
  const sourceClassification = classification();
  assert.throws(
    () => createObjectInventory({
      datasetKey: DATASET_KEY,
      objects: [{
        id: 'node:other-income',
        kind: 'financial-line-item',
        disposition: 'render',
        mapping: [
          { role: 'data', target: 'incomeStatement.otherIncome.items.other_income' },
          { role: 'render', target: 'nodes.other_income' },
        ],
        features: ['hidden-anchor'],
      }],
    }),
    (error) => error.code === 'OBJECT_FEATURE_INVALID'
  );

  const annotationInventory = createObjectInventory({
    datasetKey: DATASET_KEY,
    objects: [{
      id: 'annotation:other-note',
      kind: 'financial-callout',
      disposition: 'render',
      mapping: [{ role: 'render', target: 'annotations.other_note' }],
      features: ['text'],
    }],
  });
  assert.throws(
    () => createSourceCoverage({
      classification: sourceClassification,
      source: sourceClassification.source,
      scanPasses: SOURCE_COVERAGE_SCAN_PASSES,
      items: [{
        sourceId: 'source:other-note',
        sourceClass: 'label-or-annotation',
        sourceLabel: 'Other $40M',
        contentBBox: [900, 200, 180, 80],
        inventoryObjectIds: ['annotation:other-note'],
      }],
    }, { inventory: annotationInventory, adapter: 'income-statement' }),
    (error) => error.code === 'SOURCE_COVERAGE_OTHER_CLASS_INVALID'
  );
});

test('a rounded $0.0B literal requires authoritative precision recovery instead of becoming zero', () => {
  const rounded = { literal: '$0.0B', value: '0.04', unit: 'B', resolution: '0.1' };
  assert.throws(
    () => financialCoverage({ amount: rounded }),
    (error) => error.code === 'SOURCE_COVERAGE_PRECISION_RECOVERY_REQUIRED'
  );

  const coverage = financialCoverage({
    amount: {
      ...rounded,
      precisionRecovery: {
        method: PRECISION_RECOVERY_METHOD,
        locator: 'https://example.com/authoritative-filing',
        literal: '$40M',
      },
    },
  });
  assert.equal(coverage.items[0].amount.value, '0.04');
  assert.equal(coverage.items[0].amount.precisionRecovery.literal, '$40M');
  assert.throws(
    () => financialCoverage({
      amount: {
        literal: '$0.0B',
        value: '0.06',
        unit: 'B',
        resolution: '0.1',
        precisionRecovery: {
          method: PRECISION_RECOVERY_METHOD,
          locator: 'https://example.com/authoritative-filing',
          literal: '$60M',
        },
      },
    }),
    (error) => error.code === 'SOURCE_COVERAGE_AMOUNT_RESOLUTION_MISMATCH'
  );
});

test('a user-approved authoritative correction may repair a zero-looking Source numeric typo', () => {
  const coverage = financialCoverage({
    amount: {
      literal: '$0.0B',
      value: '0.053',
      unit: 'B',
      resolution: '0.1',
      authoritativeCorrection: {
        method: AUTHORITATIVE_CORRECTION_METHOD,
        issue: 'numeric-typo',
        approval: AUTHORITATIVE_CORRECTION_APPROVAL,
        locator: 'https://www.sec.gov/example',
        authoritativeLiteral: '$53M',
        correctedLiteral: '$0.1B',
        reason: 'The zero-looking Source magnitude conflicts with the official filing.',
      },
    },
  });
  assert.equal(coverage.items[0].amount.literal, '$0.0B');
  assert.equal(coverage.items[0].amount.value, '0.053');
  assert.equal(coverage.items[0].amount.authoritativeCorrection.issue, 'numeric-typo');
  assert.deepEqual(coverage.summary.correctedSourceIds, ['source:other-income']);

  assert.throws(
    () => financialCoverage({
      amount: {
        literal: '$0.0M',
        value: '0.053',
        unit: 'B',
        resolution: '0.1',
        authoritativeCorrection: {
          method: AUTHORITATIVE_CORRECTION_METHOD,
          issue: 'unit-typo',
          approval: AUTHORITATIVE_CORRECTION_APPROVAL,
          locator: 'https://www.sec.gov/example',
          authoritativeLiteral: '$53M',
          correctedLiteral: '$0.1B',
          reason: 'A zero-looking literal cannot use the unit-typo branch.',
        },
      },
    }),
    (error) => error.code === 'SOURCE_COVERAGE_AUTHORITATIVE_CORRECTION_INVALID'
  );
});

test('a user-approved authoritative correction may repair a non-zero Source unit typo without erasing the original literal', () => {
  const coverage = financialCoverage({
    amount: {
      literal: '$3.3M',
      value: '3.3',
      unit: 'B',
      resolution: '0.1',
      authoritativeCorrection: {
        method: AUTHORITATIVE_CORRECTION_METHOD,
        issue: 'unit-typo',
        approval: AUTHORITATIVE_CORRECTION_APPROVAL,
        locator: 'https://www.sec.gov/example',
        authoritativeLiteral: '$3,334M',
        correctedLiteral: '$3.3B',
        reason: 'The Source suffix conflicts with its margin, geometry, and the official filing.',
      },
    },
  });
  assert.equal(coverage.items[0].amount.literal, '$3.3M');
  assert.equal(coverage.items[0].amount.value, '3.3');
  assert.equal(coverage.items[0].amount.authoritativeCorrection.correctedLiteral, '$3.3B');
  assert.deepEqual(coverage.summary.correctedSourceIds, ['source:other-income']);

  assert.throws(
    () => financialCoverage({
      amount: {
        literal: '$3.3M',
        value: '3.3',
        unit: 'B',
        resolution: '0.1',
      },
    }),
    (error) => error.code === 'SOURCE_COVERAGE_AMOUNT_RESOLUTION_MISMATCH'
  );
  assert.throws(
    () => financialCoverage({
      amount: {
        literal: '$3.3M',
        value: '3.3',
        unit: 'B',
        resolution: '0.1',
        authoritativeCorrection: {
          method: AUTHORITATIVE_CORRECTION_METHOD,
          issue: 'unit-typo',
          approval: AUTHORITATIVE_CORRECTION_APPROVAL,
          locator: 'https://www.sec.gov/example',
          authoritativeLiteral: '$3.0B',
          correctedLiteral: '$3.3B',
          reason: 'The asserted authority does not support the corrected value.',
        },
      },
    }),
    (error) => error.code === 'SOURCE_COVERAGE_AUTHORITATIVE_CORRECTION_MISMATCH'
  );
});

test('a user-approved authoritative correction may repair a non-zero Source numeric typo without erasing the original literal', () => {
  const coverage = financialCoverage({
    amount: {
      literal: '($1.1B)',
      value: '1.327672',
      unit: 'B',
      resolution: '0.1',
      authoritativeCorrection: {
        method: AUTHORITATIVE_CORRECTION_METHOD,
        issue: 'numeric-typo',
        approval: AUTHORITATIVE_CORRECTION_APPROVAL,
        locator: 'https://www.sec.gov/example',
        authoritativeLiteral: '$1,327.672M',
        correctedLiteral: '($1.3B)',
        reason: 'The Source magnitude conflicts with the official filing and its own revenue bridge.',
      },
    },
  });
  assert.equal(coverage.items[0].amount.literal, '($1.1B)');
  assert.equal(coverage.items[0].amount.value, '1.327672');
  assert.equal(coverage.items[0].amount.authoritativeCorrection.issue, 'numeric-typo');
  assert.equal(coverage.items[0].amount.authoritativeCorrection.correctedLiteral, '($1.3B)');

  assert.throws(
    () => financialCoverage({
      amount: {
        literal: '$1.1M',
        value: '1.327672',
        unit: 'B',
        resolution: '0.1',
        authoritativeCorrection: {
          method: AUTHORITATIVE_CORRECTION_METHOD,
          issue: 'numeric-typo',
          approval: AUTHORITATIVE_CORRECTION_APPROVAL,
          locator: 'https://www.sec.gov/example',
          authoritativeLiteral: '$1,327.672M',
          correctedLiteral: '$1.3B',
          reason: 'A unit mismatch must not be mislabeled as a numeric typo.',
        },
      },
    }),
    (error) => error.code === 'SOURCE_COVERAGE_AUTHORITATIVE_CORRECTION_ISSUE_MISMATCH'
  );
});

test('K/M/B/T normalization reconciles the actual SSOT path and Adapter node exactly', () => {
  const coverage = financialCoverage();
  assert.deepEqual(
    assertSourceCoverageAuthoredValues(coverage, { loadedData: loadedData() }),
    { checked: 1, unit: 'B' }
  );
  assert.deepEqual(
    assertSourceCoverageAuthoredValues(financialCoverage({
      ssotRef: { family: 'income-statement', path: 'otherIncome.total', id: 'other_income' },
    }), { loadedData: loadedData() }),
    { checked: 1, unit: 'B' }
  );
  assert.throws(
    () => assertSourceCoverageAuthoredValues(coverage, { loadedData: loadedData({ ssotValue: 0 }) }),
    (error) => error.code === 'SOURCE_COVERAGE_SSOT_VALUE_MISMATCH'
  );
  assert.throws(
    () => assertSourceCoverageAuthoredValues(
      financialCoverage({
        ssotRef: { family: 'income-statement', path: 'otherExpenses.items', id: 'other_income' },
      }),
      { loadedData: loadedData() }
    ),
    (error) => error.code === 'SOURCE_COVERAGE_SSOT_VALUE_MISMATCH'
  );
  assert.throws(
    () => assertSourceCoverageAuthoredValues(coverage, { loadedData: loadedData({ nodeValue: 0 }) }),
    (error) => error.code === 'SOURCE_COVERAGE_ADAPTER_VALUE_MISMATCH'
  );
});

test('non-zero authored values must remain non-zero at both table and Sankey display precision', () => {
  const coverage = financialCoverage();
  assert.throws(
    () => assertSourceCoverageAuthoredValues(coverage, { loadedData: loadedData({ recordDecimals: 1 }) }),
    (error) => error.code === 'SOURCE_COVERAGE_DISPLAY_PRECISION_LOSS'
  );
  assert.throws(
    () => assertSourceCoverageAuthoredValues(coverage, {
      loadedData: loadedData({ valueText: null, adapterDecimals: 1 }),
    }),
    (error) => error.code === 'SOURCE_COVERAGE_DISPLAY_PRECISION_LOSS'
  );
  assert.throws(
    () => assertSourceCoverageAuthoredValues(coverage, { loadedData: loadedData({ valueText: '$0.0B' }) }),
    (error) => error.code === 'SOURCE_COVERAGE_ADAPTER_DISPLAY_MISMATCH'
  );
});
