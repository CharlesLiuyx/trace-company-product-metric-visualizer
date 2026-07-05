import test from 'node:test';
import assert from 'node:assert/strict';
import { loadClassicScripts } from './helpers/vm-load.mjs';

const { SANKEY_I18N } = loadClassicScripts(['src/icons.js', 'src/i18n-dictionaries.js', 'src/i18n.js']);
const zh = (value) => SANKEY_I18N.text(value, 'zh');

test('normalizeLanguage accepts exact codes, defaults everything else', () => {
  assert.equal(SANKEY_I18N.normalizeLanguage('zh'), 'zh');
  // exact-match by design: regional variants fall back to the default and
  // the outward html lang (zh -> zh-CN) is htmlLang()'s job
  assert.equal(SANKEY_I18N.normalizeLanguage('zh-CN'), SANKEY_I18N.defaultLanguage);
  assert.equal(SANKEY_I18N.normalizeLanguage('fr'), SANKEY_I18N.defaultLanguage);
  assert.equal(SANKEY_I18N.normalizeLanguage(undefined), SANKEY_I18N.defaultLanguage);
  assert.equal(SANKEY_I18N.htmlLang('zh'), 'zh-CN');
});

test('default language returns text unchanged', () => {
  assert.equal(SANKEY_I18N.text('Revenue', 'en'), 'Revenue');
});

test('exact dictionary terms translate to zh', () => {
  assert.equal(zh('Revenue'), '收入');
  assert.notEqual(zh('Gross profit'), 'Gross profit');
  assert.notEqual(zh('Cost of revenue'), 'Cost of revenue');
});

test('identity-mapped brand terms stay unchanged and count as preserved', () => {
  assert.equal(zh('YouTube'), 'YouTube');
  assert.equal(SANKEY_I18N.isPreservedTerm('YouTube', 'zh'), true);
  assert.equal(SANKEY_I18N.isPreservedTerm('Revenue', 'zh'), false, 'translated terms are not preserved');
});

test('percent change phrases translate with sign and period intact', () => {
  const up = zh('+22% Y/Y');
  assert.ok(up.includes('22%'), `expected 22% in "${up}"`);
  assert.ok(!/Y\/Y/.test(up), `expected Y/Y to be translated in "${up}"`);
  const down = zh('-5% Y/Y');
  assert.ok(down.includes('5%'), `expected 5% in "${down}"`);
});

test('period strings translate quarter and fiscal year', () => {
  const q = zh('Q1 FY26');
  assert.ok(/26/.test(q), `expected fiscal year in "${q}"`);
  assert.notEqual(q, 'Q1 FY26', 'period should change in zh');
});

test('ending-date phrases translate month names', () => {
  const ending = zh('Ending Mar. 2026');
  assert.ok(ending.includes('2026'), `expected year in "${ending}"`);
  assert.ok(/3|三/.test(ending), `expected month in "${ending}"`);
});

test('margin phrases keep their percentages', () => {
  const margin = zh('62% operating margin');
  assert.ok(margin.includes('62%'), `expected 62% in "${margin}"`);
  assert.notEqual(margin, '62% operating margin');
});

test('localizeDataset localizes name/meta/nodes and applies overlays last', () => {
  const dataset = {
    key: 'test-q1-fy26',
    name: 'TestCo · Q1 FY26',
    meta: { title: 'TestCo', period: 'Q1 FY26' },
    nodes: [
      { id: 'revenue', label: 'Revenue', value: 10, notes: ['+10% Y/Y'] },
      { id: 'gross', label: 'Gross profit', value: 6 },
    ],
    links: [{ source: 'revenue', target: 'gross', value: 6 }],
    i18n: {
      zh: { nodes: { gross: { label: '覆盖毛利' } } },
    },
  };
  const localized = SANKEY_I18N.localizeDataset(dataset, 'zh');
  assert.equal(localized.nodes.find((n) => n.id === 'revenue').label, '收入', 'dictionary path');
  assert.equal(localized.nodes.find((n) => n.id === 'gross').label, '覆盖毛利', 'explicit overlay wins');
  assert.equal(dataset.nodes[0].label, 'Revenue', 'source dataset is not mutated');
  assert.equal(localized.links[0].value, 6, 'values never change');
});

test('localizeDataset returns the source object untouched for en', () => {
  const dataset = { key: 'k', name: 'n', nodes: [], links: [] };
  assert.equal(SANKEY_I18N.localizeDataset(dataset, 'en'), dataset);
});

test('UI string lookup falls back to the default language', () => {
  const key = 'metricRevenue';
  assert.ok(SANKEY_I18N.t(key, undefined, 'zh'));
  assert.ok(SANKEY_I18N.t(key, undefined, 'en'));
  assert.equal(SANKEY_I18N.t('missing-key-xyz', undefined, 'zh'), 'missing-key-xyz');
});
