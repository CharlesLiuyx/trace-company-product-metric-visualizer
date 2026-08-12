import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['data/datasets/nestle-h1-fy23.js']);
  return context.DATASETS.find((entry) => entry.key === 'nestle-h1-fy23');
}

test('Nestlé H1 FY23 preserves every Source-painted Other face', () => {
  const current = dataset();

  assert.equal(current.nonNodeMetrics, undefined);
  assert.deepEqual(
    ['other_revenue', 'other_income', 'other_operating_expenses'].map((id) => ({
      id,
      value: current.nodes.find((node) => node.id === id).value,
      height: current.layout.nodes[id].height,
    })),
    [
      { id: 'other_revenue', value: 0.2, height: 3 },
      { id: 'other_income', value: 0.7, height: 2 },
      { id: 'other_operating_expenses', value: 0.6, height: 3 },
    ],
  );
  assert.equal(current.render.interfaceAudit.mode, 'error');
});

test('Nestlé H1 FY23 preserves measured per-face link identity order', () => {
  const current = dataset();
  const sourcesAt = (target) => current.links
    .filter((link) => link.target === target)
    .sort((left, right) => left.targetOrder - right.targetOrder)
    .map((link) => link.source);
  const targetsFrom = (source) => current.links
    .filter((link) => link.source === source)
    .sort((left, right) => left.sourceOrder - right.sourceOrder)
    .map((link) => link.target);

  assert.deepEqual(Array.from(sourcesAt('gross_profit')), ['revenue', 'other_revenue']);
  assert.deepEqual(Array.from(targetsFrom('gross_profit')), ['operating_profit', 'operating_expenses']);
  assert.deepEqual(Array.from(targetsFrom('operating_profit')), ['net_profit', 'tax', 'financial']);
  assert.deepEqual(Array.from(sourcesAt('net_profit')), ['operating_profit', 'other_income']);
  assert.deepEqual(Array.from(targetsFrom('operating_expenses')), [
    'marketing_administration', 'distribution', 'rnd', 'other_operating_expenses',
  ]);
});

test('Nestlé H1 FY23 uses its complete validated Source asset cluster', () => {
  const current = dataset();

  assert.deepEqual(Array.from(current.rasterAnnotations, (asset) => asset.key), [
    'nestle-company-wordmark-h1-fy23',
    'nestle-powdered-liquid-beverages-brands-h1-fy23',
    'nestle-water-brands-h1-fy23',
    'nestle-milk-ice-cream-brand-h1-fy23',
    'nestle-nutrition-health-science-brand-h1-fy23',
    'nestle-prepared-dishes-brand-h1-fy23',
    'nestle-confectionery-brand-h1-fy23',
    'nestle-petcare-brand-h1-fy23',
  ]);
});
