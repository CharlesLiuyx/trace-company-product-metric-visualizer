import test from 'node:test';
import assert from 'node:assert/strict';
import {
  createObjectInventory,
} from '../scripts/lib/object-inventory.mjs';
import {
  compileVerificationPlan,
} from '../scripts/lib/verification-plan.mjs';
import {
  SOURCE_CLASSIFICATION_REVIEW_METHOD,
  SOURCE_COVERAGE_SCAN_PASSES,
  createSourceClassification,
  createSourceCoverage,
} from '../scripts/lib/source-coverage.mjs';

const SOURCE_DIGEST = `sha256:${'d'.repeat(64)}`;

function sourceClassification(datasetKey, adapter) {
  return createSourceClassification({
    datasetKey,
    adapter,
    signals: adapter === 'income-statement'
      ? ['income-statement-values', 'sankey-flow-topology']
      : ['revenue-metric-definition', 'time-series-observations'],
    reviewMethod: SOURCE_CLASSIFICATION_REVIEW_METHOD,
    source: { locator: `input/processing/${datasetKey}.png`, digest: SOURCE_DIGEST, width: 2400, height: 1600 },
    fullImageBBox: [0, 0, 2400, 1600],
  });
}

function nodeFor(objects) {
  return objects.find((object) => (object.mapping || []).some((mapping) =>
    mapping.role === 'render' && /(^|[./:])nodes?[./:]/i.test(mapping.target)
  ));
}

function coverageItem(objects, sourceClass, index, adapter) {
  const node = nodeFor(objects);
  const y = 20 + index * 30;
  return {
    sourceId: `source:item-${index}`,
    sourceClass,
    sourceLabel: objects.map((object) => object.id).join(' + '),
    contentBBox: [20, y, 180, 20],
    inventoryObjectIds: objects.map((object) => object.id),
    ...(sourceClass === 'non-semantic-residual' ? { residualKind: 'publisher-attribution' } : {}),
    ...(['financial-value', 'metric-observation'].includes(sourceClass) ? {
      amount: { literal: '$1B', value: '1', unit: 'B', resolution: '1' },
      ssotRef: adapter === 'income-statement'
        ? { family: 'income-statement', path: 'revenue.total', id: 'revenue' }
        : { family: 'revenue-metric', path: 'observations', date: '2026-01-31' },
    } : {}),
    ...(node ? {
      face: { searchBBox: [220, y, 100, 20], observedBBox: [230, y + 5, 72, 10] },
    } : {}),
  };
}

function sourceCoverageFor(inventory, adapter) {
  const remaining = [...inventory.objects];
  const items = [];
  if (adapter === 'income-statement') {
    const dataIndex = remaining.findIndex((object) => object.disposition === 'data-only');
    const nodeIndex = remaining.findIndex((object) => nodeFor([object]));
    if (dataIndex >= 0 && nodeIndex >= 0 && dataIndex !== nodeIndex) {
      const pair = [remaining[dataIndex], remaining[nodeIndex]];
      for (const index of [dataIndex, nodeIndex].sort((left, right) => right - left)) remaining.splice(index, 1);
      items.push(coverageItem(pair, 'financial-value', items.length, adapter));
    }
  }
  for (const object of remaining) {
    const sourceClass = object.disposition === 'skip'
      ? 'non-semantic-residual'
      : adapter === 'revenue-metric' && object.disposition === 'data-only'
        ? 'metric-observation'
        : nodeFor([object])
          ? 'structural-flow'
          : 'label-or-annotation';
    items.push(coverageItem([object], sourceClass, items.length, adapter));
  }
  const classification = sourceClassification(inventory.datasetKey, adapter);
  return createSourceCoverage({
    classification,
    source: classification.source,
    scanPasses: SOURCE_COVERAGE_SCAN_PASSES,
    items,
  }, { inventory, adapter });
}

function compilePlan(input) {
  return compileVerificationPlan({
    ...input,
    sourceCoverage: input.sourceCoverage || sourceCoverageFor(input.inventory, input.adapter),
  });
}

function measuredLabelEvidence(fragment, referenceBBox) {
  return {
    source: 'reference-measurement',
    locator: `input/processing/example-fy25.png#${fragment}`,
    digest: `sha256:${'c'.repeat(64)}`,
    referenceBBox,
    inspectionMethod: 'native-scale-reference-measurement',
  };
}

function incomeObjects() {
  return [
    {
      id: 'label:revenue',
      kind: 'label',
      disposition: 'render',
      mapping: [{ role: 'render', target: 'layout.labels.revenue' }],
      features: ['text', 'centered-side-label', 'specified-label-weight', 'measured-label-position'],
      featureEvidence: {
        'specified-label-weight': {
          source: 'reference-measurement',
          locator: 'input/processing/example-fy25.png#revenue-label',
          expectedWeight: 600,
        },
        'measured-label-position': measuredLabelEvidence('revenue-label-group', [180, 420, 160, 44]),
      },
    },
    {
      id: 'annotation:margin',
      kind: 'annotation',
      disposition: 'render',
      mapping: [{ role: 'render', target: 'annotations.margin' }],
      features: ['annotation-near-label', 'text'],
    },
    {
      id: 'node:tax',
      kind: 'short-node',
      disposition: 'render',
      mapping: [{ role: 'render', target: 'nodes.tax' }],
      features: ['visible-interface', 'visible-node-face', 'visible-short-node'],
      featureEvidence: {
        'visible-short-node': {
          source: 'reference-crop',
          locator: 'input/processing/example-fy25.png#tax-node',
        },
      },
    },
    {
      id: 'metric:revenue',
      kind: 'financial-line-item',
      disposition: 'data-only',
      mapping: [{ role: 'data', target: 'incomeStatement.revenue' }],
      features: [],
    },
    {
      id: 'watermark:publisher',
      kind: 'watermark',
      disposition: 'skip',
      mapping: [],
      features: [],
      skipReason: 'publisher attribution is non-semantic',
    },
  ];
}

test('ObjectInventory has stable ids, complete mappings, and an order-independent digest', () => {
  const left = createObjectInventory({ datasetKey: 'example-fy25', objects: incomeObjects() });
  const right = createObjectInventory({ datasetKey: 'example-fy25', objects: incomeObjects().reverse() });

  assert.equal(left.inventoryDigest, right.inventoryDigest);
  assert.deepEqual(left.summary, { render: 3, 'data-only': 1, skip: 1 });
  assert.equal(left.protocol, 'object-inventory/v4');
  assert.deepEqual(left.objects.map((object) => object.id), [...left.objects.map((object) => object.id)].sort());
});

test('an inventoried render/data object without a mapping is a hard failure', () => {
  assert.throws(
    () => createObjectInventory({
      datasetKey: 'example-fy25',
      objects: [{
        id: 'node:forgotten',
        kind: 'short-node',
        disposition: 'render',
        mapping: [],
        features: ['visible-node-face', 'visible-short-node'],
        featureEvidence: {
          'visible-short-node': { source: 'reference-crop', locator: 'reference.png#forgotten' },
        },
      }],
    }),
    (error) => error.code === 'OBJECT_MAPPING_REQUIRED'
  );
});

test('ObjectInventory rejects duplicate identities and unexplained skips', () => {
  const duplicate = incomeObjects();
  duplicate.push({ ...duplicate[0], mapping: [{ role: 'render', target: 'layout.labels.other' }] });
  assert.throws(
    () => createObjectInventory({ datasetKey: 'example-fy25', objects: duplicate }),
    (error) => error.code === 'OBJECT_ID_DUPLICATE'
  );
  assert.throws(
    () => createObjectInventory({
      datasetKey: 'example-fy25',
      objects: [{ id: 'watermark:publisher', kind: 'watermark', disposition: 'skip', mapping: [], features: [] }],
    }),
    (error) => error.code === 'SKIP_REASON_REQUIRED'
  );
});

test('ObjectInventory v4 makes every node mapping visible by definition and keeps v1 readable', () => {
  const current = createObjectInventory({
    datasetKey: 'example-fy25',
    objects: [{
      id: 'node:tax',
      kind: 'short-node',
      disposition: 'render',
      mapping: [{ role: 'render', target: 'nodes.tax' }],
      features: ['visible-short-node'],
      featureEvidence: {
        'visible-short-node': { source: 'reference-crop', locator: 'reference.png#tax' },
      },
    }],
  });
  const plan = compilePlan({
    adapter: 'income-statement',
    inventory: current,
    changeImpact: ['geometry'],
  });
  assert.deepEqual(
    plan.requiredChecks.find((check) => check.id === 'feature:visible-node-face').evidenceTargets,
    ['nodes.tax']
  );

  const legacy = createObjectInventory({
    schemaVersion: 1,
    protocol: 'object-inventory/v1',
    datasetKey: 'example-fy25',
    objects: [{
      id: 'node:tax',
      kind: 'short-node',
      disposition: 'render',
      mapping: [{ role: 'render', target: 'nodes.tax' }],
      features: ['visible-short-node'],
    }],
  });
  assert.equal(legacy.protocol, 'object-inventory/v1');
  assert.throws(
    () => compileVerificationPlan({
      adapter: 'income-statement',
      inventory: legacy,
      changeImpact: ['geometry'],
    }),
    (error) => error.code === 'INVENTORY_VERSION_STALE'
  );
});

test('ObjectInventory v4 rejects invisible semantic nodes while v3 archives remain readable only', () => {
  const base = {
    id: 'node:balance-anchor',
    kind: 'hidden-anchor',
    disposition: 'render',
    mapping: [{ role: 'render', target: 'nodes.balance_anchor' }],
    features: ['hidden-anchor'],
    featureEvidence: {
      'hidden-anchor': {
        source: 'reference-crop',
        locator: 'input/processing/example-fy25.png#balance-anchor',
        reason: 'The native crop shows only a guide endpoint and no node face.',
      },
    },
  };

  assert.throws(
    () => createObjectInventory({ datasetKey: 'example-fy25', objects: [base] }),
    (error) => error.code === 'OBJECT_FEATURE_INVALID'
  );

  const confirmed = {
    ...base,
    featureEvidence: {
      'hidden-anchor': {
        ...base.featureEvidence['hidden-anchor'],
        digest: `sha256:${'a'.repeat(64)}`,
        referenceBBox: [120, 340, 72, 3],
        inspectionMethod: 'native-scale-crop-and-pixel-scan',
        classificationClaim: 'no-visible-node-face-observed',
      },
    },
  };
  const historicalV3 = createObjectInventory({
    schemaVersion: 3,
    protocol: 'object-inventory/v3',
    datasetKey: 'example-fy25',
    objects: [confirmed],
  });
  assert.equal(historicalV3.protocol, 'object-inventory/v3');
  assert.throws(
    () => compileVerificationPlan({
      adapter: 'income-statement',
      inventory: historicalV3,
      changeImpact: ['geometry'],
    }),
    (error) => error.code === 'INVENTORY_VERSION_STALE'
  );

  const historicalV2 = createObjectInventory({
    schemaVersion: 2,
    protocol: 'object-inventory/v2',
    datasetKey: 'example-fy25',
    objects: [base],
  });
  assert.equal(historicalV2.protocol, 'object-inventory/v2');
  assert.throws(
    () => compileVerificationPlan({
      adapter: 'income-statement',
      inventory: historicalV2,
      changeImpact: ['geometry'],
    }),
    (error) => error.code === 'INVENTORY_VERSION_STALE'
  );
});

test('node-like annotations require source classification and compile semantic interaction gates', () => {
  const base = {
    id: 'node:other-income',
    kind: 'short-income-node',
    disposition: 'render',
    mapping: [
      { role: 'render', target: 'nodes.other_income' },
      { role: 'render', target: 'annotations.other_income' },
    ],
    features: ['visible-node-face'],
  };
  assert.throws(
    () => createObjectInventory({ datasetKey: 'example-fy25', objects: [base] }),
    (error) => error.code === 'SEMANTIC_ANNOTATION_FEATURE_REQUIRED'
  );

  const semantic = {
    ...base,
    features: ['visible-node-face', 'semantic-annotation'],
    featureEvidence: {
      'semantic-annotation': {
        source: 'reference-crop',
        locator: 'input/processing/example-fy25.png#other-income-callout',
        digest: `sha256:${'b'.repeat(64)}`,
        referenceBBox: [2080, 230, 88, 96],
        inspectionMethod: 'native-scale-crop-and-object-inventory',
        classificationClaim: 'semantic-node-annotation-required',
        reason: 'The source uses one callout group to name and value the Other income micro-flow.',
      },
    },
  };
  const inventory = createObjectInventory({ datasetKey: 'example-fy25', objects: [semantic] });
  const plan = compilePlan({
    adapter: 'income-statement',
    inventory,
    changeImpact: ['interaction'],
  });
  const checks = Object.fromEntries(plan.requiredChecks.map((check) => [check.id, check]));
  assert.deepEqual(checks['feature:semantic-annotation'].ruleIds, ['A10', 'B16']);
  assert.equal(checks['feature:semantic-annotation'].evidenceKind, 'annotation-semantics-audit');
  assert.deepEqual(checks['feature:semantic-annotation'].objectIds, ['node:other-income']);
  assert.equal(checks['feature:semantic-annotation-source-classification'].enforcement, 'manual');
  assert.deepEqual(checks['feature:semantic-annotation-source-classification'].ruleIds, ['T17']);

  const nonNodeSemantic = {
    ...semantic,
    id: 'metric:other-income',
    kind: 'annotation-metric',
    mapping: [
      { role: 'render', target: 'nonNodeMetrics.other_income' },
      { role: 'render', target: 'annotations.other_income' },
    ],
    features: ['semantic-annotation'],
  };
  const nonNodeInventory = createObjectInventory({
    datasetKey: 'example-fy25',
    objects: [nonNodeSemantic],
  });
  const nonNodePlan = compilePlan({
    adapter: 'income-statement',
    inventory: nonNodeInventory,
    changeImpact: ['interaction'],
  });
  const nonNodeCheck = nonNodePlan.requiredChecks.find(
    (check) => check.id === 'feature:semantic-annotation'
  );
  assert.deepEqual(nonNodeCheck.objectIds, ['metric:other-income']);
});

test('Income Statement plan compiles object features into mandatory rule checks', () => {
  const inventory = createObjectInventory({ datasetKey: 'example-fy25', objects: incomeObjects() });
  const plan = compilePlan({
    adapter: 'income-statement',
    inventory,
    changeImpact: ['geometry', 'new-dataset'],
  });
  const checks = Object.fromEntries(plan.requiredChecks.map((check) => [check.id, check]));

  assert.deepEqual(checks['feature:centered-side-label'].ruleIds, ['B3', 'T7']);
  assert.deepEqual(checks['feature:text'].ruleIds, ['B6', 'Z5']);
  assert.deepEqual(checks['feature:annotation-near-label'].ruleIds, ['A6', 'B5']);
  assert.deepEqual(checks['feature:visible-short-node'].ruleIds, ['T14']);
  assert.equal(checks['feature:visible-short-node'].enforcement, 'manual');
  assert.deepEqual(checks['feature:specified-label-weight'].ruleIds, ['B14', 'T16']);
  assert.equal(checks['feature:specified-label-weight'].enforcement, 'manual');
  assert.equal(checks['feature:specified-label-weight'].localeScope, 'required-locales');
  assert.deepEqual(checks['feature:visible-interface'].ruleIds, ['G12', 'L11']);
  assert.deepEqual(checks['feature:visible-node-face'].ruleIds, ['B15', 'T13', 'T21']);
  assert.equal(checks['feature:visible-node-face'].enforcement, 'conditional-gate');
  assert.equal(checks['feature:visible-node-face'].localeScope, 'required-locales');
  assert.deepEqual(checks['feature:centered-side-label'].objectIds, ['label:revenue']);
  assert.deepEqual(checks['feature:centered-side-label'].evidenceTargets, ['layout.labels.revenue']);
  assert.deepEqual(checks['feature:measured-label-position'].ruleIds, ['T18']);
  assert.equal(checks['feature:measured-label-position'].enforcement, 'conditional-gate');
  assert.equal(checks['feature:measured-label-position'].evidenceKind, 'label-position-audit');
  assert.equal(checks['feature:measured-label-position'].localeScope, 'required-locales');
  assert.deepEqual(checks['feature:label-measurement-provenance'].ruleIds, ['T19']);
  assert.equal(checks['feature:label-measurement-provenance'].enforcement, 'build-gate');
  assert.equal(checks['feature:label-measurement-provenance'].localeScope, 'global');
  assert.equal(plan.objectCoverage.length, inventory.objects.length);
  assert.match(plan.planDigest, /^sha256:[a-f0-9]{64}$/);
  assert.equal(plan.schemaVersion, 5);
  assert.equal(plan.protocol, 'verification-plan/v5');
  assert.equal(plan.sourceCoverageDigest, sourceCoverageFor(inventory, 'income-statement').coverageDigest);
  assert.ok(plan.postReviewChecks.some((check) => check.id === 'adapter:final-seal'));

  const reordered = compilePlan({
    adapter: 'income-statement',
    inventory: createObjectInventory({ datasetKey: 'example-fy25', objects: incomeObjects().reverse() }),
    changeImpact: ['new-dataset', 'geometry'],
  });
  assert.equal(reordered.planDigest, plan.planDigest);
});

test('feature evidence targets do not leak across a multi-mapped object', () => {
  const inventory = createObjectInventory({
    datasetKey: 'example-fy25',
    objects: [{
      id: 'node:tax',
      kind: 'node-label-pair',
      disposition: 'render',
      mapping: [
        { role: 'render', target: 'nodes.tax' },
        { role: 'render', target: 'layout.labels.tax' },
      ],
      features: ['text', 'visible-node-face', 'measured-label-position'],
      featureEvidence: {
        'measured-label-position': measuredLabelEvidence('tax-label-group', [900, 1240, 120, 40]),
      },
    }],
  });
  const plan = compilePlan({
    adapter: 'income-statement',
    inventory,
    changeImpact: ['geometry'],
  });
  const checks = Object.fromEntries(plan.requiredChecks.map((check) => [check.id, check]));
  assert.deepEqual(checks['feature:visible-node-face'].evidenceTargets, ['nodes.tax']);
  assert.deepEqual(checks['feature:text'].evidenceTargets, ['layout.labels.tax']);
  assert.deepEqual(checks['feature:measured-label-position'].evidenceTargets, ['layout.labels.tax']);
});

test('a fixed-layout label object cannot compile without its reference measurement', () => {
  const objects = incomeObjects();
  const label = objects.find((object) => object.id === 'label:revenue');
  label.features = label.features.filter((feature) => feature !== 'measured-label-position');
  delete label.featureEvidence['measured-label-position'];
  assert.throws(
    () => compilePlan({
      adapter: 'income-statement',
      inventory: createObjectInventory({ datasetKey: 'example-fy25', objects }),
      changeImpact: ['geometry'],
    }),
    (error) => error.code === 'MEASURED_LABEL_POSITION_REQUIRED'
  );
});

test('measured-label-position evidence must be complete at inventory validation', () => {
  const objects = incomeObjects();
  const label = objects.find((object) => object.id === 'label:revenue');
  label.featureEvidence['measured-label-position'] = {
    source: 'reference-measurement',
    locator: 'input/processing/example-fy25.png#revenue-label-group',
    referenceBBox: [180, 420, 160, 44],
    inspectionMethod: 'native-scale-reference-measurement',
  };
  assert.throws(
    () => createObjectInventory({ datasetKey: 'example-fy25', objects }),
    (error) => error.code === 'MEASURED_LABEL_POSITION_SOURCE_DIGEST_REQUIRED'
  );
});

test('an approved label target requires an explicit user-directed authority and reason', () => {
  const objects = incomeObjects();
  const label = objects.find((object) => object.id === 'label:revenue');
  label.featureEvidence['measured-label-position'] = {
    ...label.featureEvidence['measured-label-position'],
    approvedTargetBBox: [140, 420, 160, 44],
  };
  assert.throws(
    () => createObjectInventory({ datasetKey: 'example-fy25', objects }),
    (error) => error.code === 'MEASURED_LABEL_POSITION_APPROVED_TARGET_AUTHORITY_REQUIRED'
  );
});

test('an ambiguous label slot compiles a pre-render operator decision check', () => {
  const objects = incomeObjects();
  const label = objects.find((object) => object.id === 'label:revenue');
  label.features = [...label.features, 'ambiguous-label-slot'];
  label.featureEvidence['ambiguous-label-slot'] = {
    source: 'reference-crop',
    locator: 'input/processing/example-fy25.png#revenue-label-slot',
    digest: `sha256:${'c'.repeat(64)}`,
    referenceBBox: [180, 420, 160, 44],
    classificationClaim: 'label-slot-ambiguous-operator-decision-required',
    reason: 'The name could bind below the short face or to the left-side slot; the reference is ambiguous.',
  };
  const plan = compilePlan({
    adapter: 'income-statement',
    inventory: createObjectInventory({ datasetKey: 'example-fy25', objects }),
    changeImpact: ['geometry'],
  });
  const checks = Object.fromEntries(plan.requiredChecks.map((check) => [check.id, check]));
  assert.deepEqual(checks['feature:ambiguous-label-slot'].ruleIds, ['T20']);
  assert.equal(checks['feature:ambiguous-label-slot'].enforcement, 'manual');
  assert.equal(checks['feature:ambiguous-label-slot'].localeScope, 'global');
  assert.equal(checks['feature:ambiguous-label-slot'].evidenceKind, 'manual-decision');

  delete label.featureEvidence['ambiguous-label-slot'].reason;
  assert.throws(
    () => createObjectInventory({ datasetKey: 'example-fy25', objects }),
    (error) => error.code === 'AMBIGUOUS_LABEL_SLOT_REASON_REQUIRED'
  );
});

test('checks without an executing automatic profile require manual evidence', () => {
  const plan = compilePlan({
    adapter: 'income-statement',
    inventory: createObjectInventory({ datasetKey: 'example-fy25', objects: incomeObjects() }),
    changeImpact: ['asset', 'interaction'],
  });
  const checks = Object.fromEntries(plan.requiredChecks.map((check) => [check.id, check]));
  assert.deepEqual(
    [checks['impact:asset-integrity'].enforcement, checks['impact:asset-integrity'].evidenceKind],
    ['manual', 'manual-decision']
  );
  assert.deepEqual(
    [checks['impact:interaction-regression'].enforcement, checks['impact:interaction-regression'].evidenceKind],
    ['manual', 'manual-decision']
  );
});

test('Revenue Metric uses the same Interface with explicit fidelity and baseline notApplicable', () => {
  const inventory = createObjectInventory({
    datasetKey: 'example-arr-2026',
    objects: [
      {
        id: 'metric:arr-2026',
        kind: 'metric-observation',
        disposition: 'data-only',
        mapping: [{ role: 'data', target: 'revenueMetrics.arr-2026' }],
        features: [],
      },
      {
        id: 'watermark:provider',
        kind: 'watermark',
        disposition: 'skip',
        mapping: [],
        features: [],
        skipReason: 'provider branding is not metric data',
      },
    ],
  });
  const plan = compilePlan({
    adapter: 'revenue-metric',
    inventory,
    changeImpact: ['financial-data-only'],
  });

  const notApplicableIds = plan.notApplicable.map((item) => item.id);
  assert.ok(notApplicableIds.includes('adapter:render-fidelity'));
  assert.ok(notApplicableIds.includes('adapter:reference-fidelity'));
  assert.ok(notApplicableIds.includes('adapter:manual-visual-closure'));
  assert.ok(notApplicableIds.includes('adapter:future-regression-baseline'));
  assert.ok(plan.requiredChecks.some((check) => check.id === 'impact:financial-consistency'));
  assert.equal(plan.requiredChecks.some((check) => check.source === 'object-feature'), false);
});

test('Revenue Metric cannot silently accept a rendered object', () => {
  const inventory = createObjectInventory({
    datasetKey: 'example-arr-2026',
    objects: [{
      id: 'node:arr',
      kind: 'node',
      disposition: 'render',
      mapping: [{ role: 'render', target: 'nodes.arr' }],
      features: ['visible-interface', 'visible-node-face'],
    }],
  });
  assert.throws(
    () => compileVerificationPlan({
      adapter: 'revenue-metric',
      inventory,
      sourceCoverage: {
        schemaVersion: 2,
        protocol: 'source-coverage/v2',
        datasetKey: inventory.datasetKey,
        adapter: 'revenue-metric',
        inventoryDigest: inventory.inventoryDigest,
      },
      changeImpact: ['new-dataset'],
    }),
    (error) => error.code === 'ADAPTER_INVENTORY_INVALID'
  );
});
