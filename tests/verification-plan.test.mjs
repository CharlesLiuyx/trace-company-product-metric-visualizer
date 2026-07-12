import test from 'node:test';
import assert from 'node:assert/strict';
import {
  createObjectInventory,
} from '../scripts/lib/object-inventory.mjs';
import {
  compileVerificationPlan,
} from '../scripts/lib/verification-plan.mjs';

function incomeObjects() {
  return [
    {
      id: 'label:revenue',
      kind: 'label',
      disposition: 'render',
      mapping: [{ role: 'render', target: 'layout.labels.revenue' }],
      features: ['text', 'centered-side-label', 'specified-label-weight'],
      featureEvidence: {
        'specified-label-weight': {
          source: 'reference-measurement',
          locator: 'input/processing/example-fy25.png#revenue-label',
          expectedWeight: 600,
        },
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
  assert.equal(left.protocol, 'object-inventory/v2');
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

test('ObjectInventory v2 makes node paint intent explicit and keeps v1 readable', () => {
  assert.throws(
    () => createObjectInventory({
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
    }),
    (error) => error.code === 'NODE_FACE_INTENT_REQUIRED'
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

test('Income Statement plan compiles object features into mandatory rule checks', () => {
  const inventory = createObjectInventory({ datasetKey: 'example-fy25', objects: incomeObjects() });
  const plan = compileVerificationPlan({
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
  assert.deepEqual(checks['feature:visible-node-face'].ruleIds, ['B15', 'T13']);
  assert.equal(checks['feature:visible-node-face'].enforcement, 'conditional-gate');
  assert.equal(checks['feature:visible-node-face'].localeScope, 'required-locales');
  assert.deepEqual(checks['feature:centered-side-label'].objectIds, ['label:revenue']);
  assert.deepEqual(checks['feature:centered-side-label'].evidenceTargets, ['layout.labels.revenue']);
  assert.equal(plan.objectCoverage.length, inventory.objects.length);
  assert.match(plan.planDigest, /^sha256:[a-f0-9]{64}$/);
  assert.equal(plan.schemaVersion, 2);
  assert.equal(plan.protocol, 'verification-plan/v2');
  assert.ok(plan.postReviewChecks.some((check) => check.id === 'adapter:final-seal'));

  const reordered = compileVerificationPlan({
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
      features: ['text', 'visible-node-face'],
    }],
  });
  const plan = compileVerificationPlan({
    adapter: 'income-statement',
    inventory,
    changeImpact: ['geometry'],
  });
  const checks = Object.fromEntries(plan.requiredChecks.map((check) => [check.id, check]));
  assert.deepEqual(checks['feature:visible-node-face'].evidenceTargets, ['nodes.tax']);
  assert.deepEqual(checks['feature:text'].evidenceTargets, ['layout.labels.tax']);
});

test('checks without an executing automatic profile require manual evidence', () => {
  const plan = compileVerificationPlan({
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
  const plan = compileVerificationPlan({
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
      changeImpact: ['new-dataset'],
    }),
    (error) => error.code === 'ADAPTER_INVENTORY_INVALID'
  );
});
