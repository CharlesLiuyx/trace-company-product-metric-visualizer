import assert from 'node:assert/strict';
import test from 'node:test';
import {
  ADAPTER_CHECKLISTS,
  VERIFICATION_PLAN_PROTOCOL,
  compileVerificationPlan,
} from '../scripts/lib/verification-plan.mjs';
import {
  SOURCE_CLASSIFICATION_REVIEW_METHOD,
  createSourceClassification,
  createSourceObjects,
} from '../scripts/lib/source-objects.mjs';

const SOURCE_DIGEST = `sha256:${'a'.repeat(64)}`;
const KEY = 'example-q4-fy25';
const SIGNALS = {
  'income-statement': ['income-statement-values', 'sankey-flow-topology'],
  'revenue-metric': ['revenue-metric-definition', 'time-series-observations'],
  'metric-observation': ['metric-observations'],
};

function sourceObjects(adapter = 'income-statement', objects = null) {
  const source = { locator: `input/processing/${KEY}.png`, digest: SOURCE_DIGEST, width: 1200, height: 800 };
  const classification = createSourceClassification({
    datasetKey: KEY,
    adapter,
    signals: SIGNALS[adapter],
    reviewMethod: SOURCE_CLASSIFICATION_REVIEW_METHOD,
    source,
    fullImageBBox: [0, 0, 1200, 800],
  });
  const defaults = {
    'income-statement': [
      { id: 'revenue', class: 'value', literal: '$1.0B', value: '1.0', unit: 'B', ssotRef: { family: 'income-statement', path: 'revenue.total' }, node: 'revenue' },
      { id: 'title', class: 'label' },
    ],
    'revenue-metric': [
      { id: 'arr-2026', class: 'value', literal: '$120M', value: '120', unit: 'M', ssotRef: { family: 'revenue-metric', path: 'observations', date: '2026-01-01' } },
    ],
    'metric-observation': [
      { id: 'metric.revenue', class: 'value', literal: '100 亿元', value: '100', unit: '亿元', ssotRef: { family: 'metric-observation', id: 'revenue' } },
    ],
  };
  return createSourceObjects({ objects: objects || defaults[adapter] }, { datasetKey: KEY, adapter, classification, source, reconcile: false });
}

function compile(adapter = 'income-statement', overrides = {}) {
  return compileVerificationPlan({
    adapter,
    sourceObjects: sourceObjects(adapter),
    changeImpact: ['new-dataset'],
    requiredLocales: adapter === 'income-statement' ? ['zh', 'en'] : ['en'],
    ...overrides,
  });
}

test('Income Statement compiles the fixed data, per-locale render and human-review checklist', () => {
  const plan = compile();
  assert.equal(plan.protocol, VERIFICATION_PLAN_PROTOCOL);
  assert.equal(plan.protocol, 'verification-plan/v6');
  assert.deepEqual(plan.requiredLocales, ['en', 'zh']);
  assert.deepEqual(plan.requiredChecks.map((check) => [check.id, check.enforcement, check.localeScope, check.evidenceKind]), [
    ['adapter:data-consistency', 'build-gate', 'global', 'dataset-consistency'],
    ['adapter:render-fidelity', 'hard-gate', 'required-locales', 'fidelity-run'],
    ['adapter:human-review', 'manual', 'global', 'manual-decision'],
  ]);
  assert.deepEqual(plan.requiredChecks[0].ruleIds, ['G11']);
  assert.deepEqual(
    plan.requiredChecks[1].ruleIds,
    ['A10', 'A6', 'B15', 'B6', 'G1', 'G12', 'G2', 'G3', 'G3d', 'G4', 'G8', 'I12', 'T6', 'T7']
  );
  assert.equal(plan.sourceDigest, SOURCE_DIGEST);
  assert.equal(plan.sourceObjectsDigest, sourceObjects().sourceObjectsDigest);
  assert.match(plan.planDigest, /^sha256:[a-f0-9]{64}$/);
  assert.equal(compile().planDigest, plan.planDigest, 'the same inputs compile the same digest');
});

test('T18 joins the render check only when a source object declares a label position', () => {
  const withPosition = compileVerificationPlan({
    adapter: 'income-statement',
    sourceObjects: sourceObjects('income-statement', [
      { id: 'revenue-label', class: 'label', literal: 'Revenue', referenceBBox: [100, 300, 160, 44], labelGroup: 'revenue' },
    ]),
    changeImpact: ['geometry'],
  });
  assert.ok(withPosition.requiredChecks.find((check) => check.id === 'adapter:render-fidelity').ruleIds.includes('T18'));
  assert.ok(!compile().requiredChecks.find((check) => check.id === 'adapter:render-fidelity').ruleIds.includes('T18'));
  assert.deepEqual(withPosition.requiredLocales, ['en'], 'locales default to English');
});

test('Revenue Metric and Metric Observation plans are data-only checklists', () => {
  for (const adapter of ['revenue-metric', 'metric-observation']) {
    const plan = compile(adapter);
    assert.deepEqual(plan.requiredChecks.map((check) => check.id), ['adapter:data-consistency', 'adapter:human-review']);
    assert.deepEqual(ADAPTER_CHECKLISTS[adapter], ['data-consistency', 'human-review']);
  }
});

test('the plan binds checkpoint policy, ChangeImpact and the exact source objects', () => {
  const plan = compile('income-statement', {
    changeImpact: ['geometry', 'new-dataset', 'geometry'],
    checkpointProtocol: 'review-candidate/v1',
    dependencyScopes: { structure: SOURCE_DIGEST },
  });
  assert.deepEqual(plan.changeImpact, ['geometry', 'new-dataset']);
  assert.equal(plan.checkpointProtocol, 'review-candidate/v1');
  assert.deepEqual(plan.dependencyScopes, { structure: SOURCE_DIGEST });
  assert.throws(() => compile('income-statement', { changeImpact: [] }), (error) => error.code === 'CHANGE_IMPACT_REQUIRED');
  assert.throws(() => compile('income-statement', { changeImpact: ['vibes'] }), (error) => error.code === 'CHANGE_IMPACT_INVALID');
  assert.throws(
    () => compileVerificationPlan({ adapter: 'revenue-metric', sourceObjects: sourceObjects(), changeImpact: ['new-dataset'] }),
    (error) => error.code === 'SOURCE_OBJECTS_PLAN_MISMATCH'
  );
  const tampered = { ...sourceObjects(), shortNodes: [{ node: 'revenue', reason: 'edited after digest' }] };
  assert.throws(
    () => compileVerificationPlan({ adapter: 'income-statement', sourceObjects: tampered, changeImpact: ['new-dataset'] }),
    (error) => error.code === 'SOURCE_OBJECTS_DIGEST_MISMATCH'
  );
  assert.throws(
    () => compileVerificationPlan({ adapter: 'income-statement', sourceObjects: { protocol: 'source-coverage/v2' }, changeImpact: ['new-dataset'] }),
    (error) => error.code === 'SOURCE_OBJECTS_PROTOCOL_INVALID'
  );
});
