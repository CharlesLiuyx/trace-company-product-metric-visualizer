import test from 'node:test';
import assert from 'node:assert/strict';
import {
  createFullCiPlan,
  incomeStatementKeysFromSource,
  parseNameStatusZ,
  planCiChecks,
} from '../scripts/lib/ci-plan.mjs';
import { dataRegistrationOnly, changedBaselineKeys, assetConsumers, lastSuccessfulMain } from '../scripts/lib/ci-diff-facts.mjs';

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
    assert.equal(Object.hasOwn(plan, 'd3Smoke'), false, file);
    assert.equal(plan.verifyStandalone, true, file);
  }
});

test('d3 pipeline changes use reference-independent full render regression', () => {
  const plan = planCiChecks([{ status: 'M', path: 'scripts/verify-d3.mjs' }], {
    existingDatasetKeys: existing,
  });

  assert.equal(plan.renderScope, 'full');
  assert.equal(plan.needsBrowser, true);
  assert.equal(Object.hasOwn(plan, 'd3Smoke'), false);
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

test('comparison scale runtime follows the viewer-only route without a full render', () => {
  const plan = planCiChecks([{ status: 'M', path: 'src/comparison-scale.js' }], {
    existingDatasetKeys: existing,
  });

  assert.deepEqual(plan.changeImpacts, ['interaction']);
  assert.equal(plan.renderScope, 'none');
  assert.deepEqual(plan.renderKeys, []);
  assert.equal(plan.verifyApp, true);
  assert.equal(plan.siteProjection, true);
  assert.equal(plan.buildSite, true);
  assert.equal(plan.verifySite, true);
  assert.equal(plan.buildStandalone, true);
  assert.equal(plan.verifyStandalone, true);
  assert.equal(plan.needsBrowser, true);
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

test('browser verifier edits exercise their suite without rerendering or redeploying unchanged runtime', () => {
  for (const file of ['scripts/verify-app.mjs', 'scripts/verify-workbench.mjs']) {
    const plan = planCiChecks([{ path: file }]);
    assert.equal(plan.verifyApp, true);
    assert.equal(plan.renderScope, 'none');
    assert.equal(plan.siteProjection, false);
    assert.equal(plan.verifyStandalone, false);
  }
});

test('only exact generated SSOT tag changes can avoid the runtime-order full route', () => {
  const html = '<body>\n  <script src="src/a.js"></script>\n  <script src="data/income-statements/a.js"></script>\n  <script src="data/company-metadata/a.js"></script>\n</body>';
  const changed = html.replace('</body>', '  <script src="data/company-metadata/b.js"></script>\n</body>');
  assert.equal(dataRegistrationOnly(html, changed), true);
  assert.equal(dataRegistrationOnly(html, changed.replace('src/a.js', 'src/b.js')), false);
  assert.equal(dataRegistrationOnly(html, changed.replace('<body>', '<body hidden>')), false);
  assert.equal(dataRegistrationOnly(html, changed.replace('  <script src="src/a.js"></script>\n', '').replace('</body>', '  <script src="src/a.js"></script>\n</body>')), false);
  assert.equal(dataRegistrationOnly(null, changed), false);
  const plan = planCiChecks([{ path: 'index.html' }], { registrationOnly: true });
  assert.equal(plan.renderScope, 'none');
  assert.equal(plan.verifyApp, false);
  assert.equal(plan.siteProjection, true);
  assert.equal(plan.verifyStandalone, true);
  assert.equal(planCiChecks([{ path: 'index.html' }]).renderScope, 'full');
});

test('baseline entry diffs narrow keys, while policy drift and malformed facts retain the full route', () => {
  const old = { language: 'en', similarityTolerance: 0.003, baselines: { 'alpha-q1-fy26': { similarity: 0.9 } } };
  const next = structuredClone(old); next.baselines['beta-q2-fy26'] = { similarity: 0.8 };
  const facts = changedBaselineKeys(JSON.stringify(old), JSON.stringify(next));
  assert.deepEqual(facts, ['beta-q2-fy26']);
  const plan = planCiChecks([{ path: 'data/render-baselines.json' }], { baselineKeys: facts, existingDatasetKeys: existing });
  assert.equal(plan.renderScope, 'changed');
  assert.deepEqual(plan.renderKeys, ['beta-q2-fy26']);
  next.similarityTolerance = 1;
  assert.equal(changedBaselineKeys(JSON.stringify(old), JSON.stringify(next)), null);
  assert.equal(changedBaselineKeys('{}', 'invalid'), null);
  assert.equal(planCiChecks([{ path: 'data/render-baselines.json' }], { baselineKeys: null }).renderScope, 'full');
});

test('an actual data batch with generated ledgers and assets stays scoped to its consumers', () => {
  const file = 'data/assets/raster-annotations/alpha/logo.png';
  const catalog = (consumers) => JSON.stringify({ protocol: 'asset-catalog/v1', entries: [{ path: file, consumers }] });
  const assetKeysByPath = assetConsumers(catalog(['alpha-q1-fy26']), catalog(['beta-q2-fy26']));
  assert.deepEqual(assetKeysByPath.get(file), ['alpha-q1-fy26', 'beta-q2-fy26']);
  const plan = planCiChecks([
    'data/datasets/alpha-q1-fy26.js', 'data/render-baselines.json', 'data/workflow-timestamps.json',
    'data/assets/catalog.json', file, 'index.html',
    'data/assets/icon-references/alpha/crop-report.json', 'data/assets/icon-references/alpha/crops/logo.png',
  ].map((path) => ({ path })), { existingDatasetKeys: existing, registrationOnly: true, baselineKeys: ['alpha-q1-fy26'], assetKeysByPath });
  assert.equal(plan.renderScope, 'changed');
  assert.deepEqual(plan.renderKeys, [...existing]);
  assert.equal(plan.verifyApp, false);
  assert.equal(plan.siteProjection, true);
  assert.equal(plan.verifyStandalone, true);
  assert.equal(assetConsumers('invalid', catalog([])), null);
  assert.equal(planCiChecks([{ path: file }]).renderScope, 'full');
  assert.equal(planCiChecks([{ path: 'data/assets/icon-references/new-runtime.js' }]).renderScope, 'full');
});

test('failed main pushes remain uncovered until a successful ancestor is found; API failure cannot skip checks', async () => {
  const good = 'a'.repeat(40), failed = 'b'.repeat(40), unrelated = 'c'.repeat(40), head = 'd'.repeat(40);
  const run = (sha, conclusion = 'success') => ({ head_sha: sha, conclusion, head_branch: 'main', event: 'push' });
  const base = await lastSuccessfulMain({ repository: 'owner/repo', token: 'test', head,
    fetchRun: async () => ({ ok: true, json: async () => ({ workflow_runs: [run(head), run(failed, 'failure'), run(unrelated), run(good)] }) }),
    isAncestor: async (sha) => sha === good,
  });
  assert.equal(base, good);
  await assert.rejects(lastSuccessfulMain({ repository: 'owner/repo', token: 'test', head,
    fetchRun: async () => ({ ok: false, status: 403 }), isAncestor: async () => true,
  }), /history unavailable/);
  await assert.rejects(lastSuccessfulMain({ repository: 'owner/repo', token: 'test', head,
    fetchRun: async () => ({ ok: true, json: async () => ({ workflow_runs: [] }) }), isAncestor: async () => true,
  }), /No successful/);
});
