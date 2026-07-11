import assert from 'node:assert/strict';
import test from 'node:test';
import {
  assertProjectFontsLoaded,
  assertTypographyAudit,
  classifyTypographyAudit,
  typographyAudit,
} from '../scripts/lib/render-harness.mjs';

function record({
  text = 'Revenue',
  element = 'text',
  role = 'product',
  fontFamily = '"Noto Sans", Arial, sans-serif',
  fontWeight = '600',
  selectorPath = 'svg > text',
} = {}) {
  return { text, element, role, fontFamily, fontWeight, selectorPath };
}

function classify({ texts, runs = texts, invalidBrandScopes = [] }) {
  return classifyTypographyAudit({
    dataset: 'example-fy25',
    language: 'en',
    texts,
    runs,
    invalidBrandScopes,
  });
}

test('accepts Noto Sans and Roboto product text plus explicitly scoped brand text', () => {
  const texts = [
    record(),
    record({ text: '+19% Y/Y', fontFamily: 'Roboto, sans-serif' }),
    record({
      text: 'Example',
      role: 'brand',
      fontFamily: 'Montserrat, Arial, sans-serif',
      selectorPath: 'svg > g[data-typography-role="brand"] > text',
    }),
  ];
  const audit = classify({ texts });

  assert.equal(audit.status, 'passed');
  assert.equal(audit.productTextCount, 2);
  assert.equal(audit.brandTextCount, 1);
  assert.equal(audit.familyCounts.product['Noto Sans'], 1);
  assert.equal(audit.familyCounts.product.Roboto, 1);
  assert.equal(audit.familyCounts.brand.Montserrat, 1);
  assert.deepEqual(audit.violations, []);
  assert.doesNotThrow(() => assertTypographyAudit(audit));
});

test('rejects Montserrat anywhere in a product font-family stack', () => {
  const audit = classify({
    texts: [record({ fontFamily: '"Noto Sans", Montserrat, sans-serif' })],
  });

  assert.equal(audit.status, 'failed');
  assert.equal(audit.violations[0].code, 'product-text-uses-montserrat');
  assert.throws(() => assertTypographyAudit(audit), /product-text-uses-montserrat/);
});

test('rejects product text whose primary family is outside the View font roles', () => {
  const audit = classify({ texts: [record({ fontFamily: 'Arial, sans-serif' })] });
  assert.equal(audit.violations[0].code, 'product-text-uses-unapproved-font');
});

test('run-level scan catches a tspan override that the parent text would miss', () => {
  const parent = record({ text: 'Revenue 19%', selectorPath: 'svg > text' });
  const tspan = record({
    text: '19%',
    element: 'tspan',
    fontFamily: 'Montserrat, sans-serif',
    selectorPath: 'svg > text > tspan',
  });
  const audit = classify({ texts: [parent], runs: [parent, tspan] });

  assert.equal(audit.checkedTextCount, 1);
  assert.equal(audit.checkedTextRuns, 2);
  assert.equal(audit.violations.length, 1);
  assert.equal(audit.violations[0].element, 'tspan');
});

test('rejects broad brand exemptions on the root SVG, annotation layer, or Sankey label', () => {
  const audit = classify({
    texts: [record({ role: 'brand', fontFamily: 'Montserrat' })],
    invalidBrandScopes: [
      { element: 'svg', selectorPath: 'svg[data-typography-role="brand"]' },
      { element: 'g', selectorPath: 'svg > g.sankey-annotations[data-typography-role="brand"]' },
      { element: 'g', selectorPath: 'svg > g.sankey-label[data-typography-role="brand"]' },
    ],
  });

  assert.equal(audit.violations.length, 3);
  assert.ok(audit.violations.every((violation) => violation.code === 'invalid-brand-role-scope'));
});

test('reports an empty computed font-family for either typography role', () => {
  const audit = classify({
    texts: [record({ fontFamily: '' }), record({ role: 'brand', fontFamily: '' })],
  });
  assert.equal(audit.violations.length, 2);
  assert.ok(audit.violations.every((violation) => violation.code === 'text-missing-font-family'));
});

test('browser wrapper forwards dataset and language into the pure audit result', async () => {
  const texts = [record()];
  const page = {
    evaluate: async (_callback, options) => ({
      dataset: options.dataset,
      language: options.language,
      texts,
      runs: texts,
      invalidBrandScopes: [],
    }),
  };
  const audit = await typographyAudit(page, { dataset: 'example-fy25', language: 'zh' });
  assert.equal(audit.dataset, 'example-fy25');
  assert.equal(audit.language, 'zh');
  assert.equal(audit.status, 'passed');
});

test('project font assertion rejects a missing required face without changing its loaded map shape', async () => {
  const status = {
    requiredFonts: [{ family: 'Noto Sans', weights: [400, 600] }],
    loaded: { 'Noto Sans': false },
    allLoaded: false,
    loadedFaces: { 'Noto Sans': { 400: true, 600: false } },
    faces: [],
  };
  const page = { evaluate: async () => status };
  await assert.rejects(assertProjectFontsLoaded(page), /Local fonts did not load/);
  assert.equal(typeof status.loaded['Noto Sans'], 'boolean');
});
