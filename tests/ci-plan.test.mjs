import test from 'node:test';
import assert from 'node:assert/strict';
import {
  createFullCiPlan,
  incomeStatementKeysFromSource,
  parseNameStatusZ,
  planCiChecks,
} from '../scripts/lib/ci-plan.mjs';

const existing = new Set(['alpha-q1-fy26', 'beta-q2-fy26']);

test('Source queue and documentation changes stay on the fast deterministic gate', () => {
  const plan = planCiChecks([
    { status: 'A', path: 'input/pending/page 1.png' },
    { status: 'A', path: 'input/processing/alpha-q1-fy26.png' },
    { status: 'M', path: 'docs/notes.md' },
  ], { existingDatasetKeys: existing });

  assert.equal(plan.needsBrowser, false);
  assert.equal(plan.renderScope, 'none');
  assert.equal(plan.siteProjection, false);
  assert.deepEqual(plan.changeImpacts, ['docs-only']);
});

test('changed Dataset Adapters render only their existing keys and verify the bundled projections', () => {
  const plan = planCiChecks([
    { status: 'M', path: 'data/datasets/beta-q2-fy26.js' },
    { status: 'A', path: 'data/datasets/alpha-q1-fy26.js' },
  ], { existingDatasetKeys: existing });

  assert.equal(plan.renderScope, 'changed');
  assert.deepEqual(plan.renderKeys, ['alpha-q1-fy26', 'beta-q2-fy26']);
  assert.deepEqual(plan.changeImpacts, ['geometry', 'new-dataset']);
  assert.equal(plan.verifyApp, false);
  assert.equal(plan.buildSite, true);
  assert.equal(plan.verifySite, false);
  assert.equal(plan.verifyStandalone, true);
});

test('deleted Dataset Adapters are not rendered but their projections are rebuilt', () => {
  const plan = planCiChecks([
    { status: 'D', path: 'data/datasets/removed-q1-fy26.js' },
  ], { existingDatasetKeys: existing });

  assert.equal(plan.renderScope, 'none');
  assert.equal(plan.buildSite, true);
  assert.equal(plan.verifyStandalone, true);
});

test('income-statement SSOT changes map to every affected Adapter key', () => {
  const file = 'data/income-statements/acme.js';
  const plan = planCiChecks([{ status: 'M', path: file }], {
    existingDatasetKeys: existing,
    incomeStatementKeysByPath: new Map([[file, ['beta-q2-fy26', 'alpha-q1-fy26']]]),
  });

  assert.equal(plan.renderScope, 'changed');
  assert.deepEqual(plan.renderKeys, ['alpha-q1-fy26', 'beta-q2-fy26']);
});

test('shared render runtime and unknown executable changes use the strict full fallback', () => {
  for (const file of ['src/sankey-engine.js', 'scripts/new-runtime-helper.mjs', 'data/new-metric-family.js']) {
    const plan = planCiChecks([{ status: 'M', path: file }], { existingDatasetKeys: existing });
    assert.equal(plan.renderScope, 'full', file);
    assert.equal(plan.verifyApp, true, file);
    assert.equal(plan.verifySite, true, file);
    assert.equal(plan.d3Smoke, true, file);
    assert.equal(plan.verifyStandalone, true, file);
  }
});

test('viewer-only changes exercise app, site, and standalone without a redundant full render', () => {
  const plan = planCiChecks([{ status: 'M', path: 'src/app/controls.js' }], {
    existingDatasetKeys: existing,
  });
  assert.equal(plan.renderScope, 'none');
  assert.equal(plan.verifyApp, true);
  assert.equal(plan.verifySite, true);
  assert.equal(plan.verifyStandalone, true);
});

test('revenue and company metadata rebuild the deployable catalog without PR browser work', () => {
  const plan = planCiChecks([
    { status: 'M', path: 'data/revenue-metrics.js' },
    { status: 'M', path: 'data/company-metadata/acme.js' },
    { status: 'M', path: 'data/dataset-file-metadata.js' },
  ], { existingDatasetKeys: existing });
  assert.equal(plan.siteProjection, true);
  assert.equal(plan.buildSite, true);
  assert.equal(plan.needsBrowser, false);
  assert.equal(plan.renderScope, 'none');
});

test('missing Git comparison selects the strict full plan', () => {
  const plan = createFullCiPlan();
  assert.equal(plan.renderScope, 'full');
  assert.equal(plan.needsBrowser, true);
});

test('git name-status parser preserves rename ownership', () => {
  assert.deepEqual(
    parseNameStatusZ('M\0README.md\0R100\0old.js\0new.js\0'),
    [
      { status: 'M', path: 'README.md' },
      { status: 'R100', oldPath: 'old.js', path: 'new.js' },
    ]
  );
});

test('income-statement key extraction is syntax-independent and de-duplicates records', () => {
  assert.deepEqual(
    incomeStatementKeysFromSource("{ key: 'beta-q2-fy26' }, { key: 'alpha-q1-fy26' }, { key: 'beta-q2-fy26' }"),
    ['alpha-q1-fy26', 'beta-q2-fy26']
  );
});
