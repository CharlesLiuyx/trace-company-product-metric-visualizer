import test from 'node:test';
import assert from 'node:assert/strict';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['data/datasets/meta-q2-fy23.js']);
  return context.DATASETS.find((entry) => entry.key === 'meta-q2-fy23');
}

test('Meta Q2 FY23 preserves Source-measured same-color interface identity order', () => {
  const data = dataset();

  const familyOfAppsIn = data.links
    .filter((link) => link.target === 'family_of_apps')
    .sort((left, right) => left.targetOrder - right.targetOrder)
    .map((link) => link.source);
  const revenueIn = data.links
    .filter((link) => link.target === 'revenue')
    .sort((left, right) => left.targetOrder - right.targetOrder)
    .map((link) => link.source);
  const operatingProfitOut = data.links
    .filter((link) => link.source === 'operating_profit')
    .sort((left, right) => left.sourceOrder - right.sourceOrder)
    .map((link) => link.target);
  const operatingExpensesOut = data.links
    .filter((link) => link.source === 'operating_expenses')
    .sort((left, right) => left.sourceOrder - right.sourceOrder)
    .map((link) => link.target);

  assert.deepEqual(Array.from(familyOfAppsIn), ['advertising', 'other_revenue']);
  assert.deepEqual(Array.from(revenueIn), ['family_of_apps', 'reality_labs']);
  assert.deepEqual(Array.from(operatingProfitOut), ['net_profit', 'tax', 'interest']);
  assert.deepEqual(Array.from(operatingExpensesOut), ['rnd', 'ga', 'sm']);
});

test('Meta Q2 FY23 keeps all three Source-visible short faces painted at native height', () => {
  const data = dataset();

  assert.deepEqual(
    ['interest', 'other_revenue', 'reality_labs'].map((id) => ({
      id,
      height: data.layout.nodes[id].height,
      painted: data.nodes.find((node) => node.id === id).color !== 'transparent',
    })),
    [
      { id: 'interest', height: 1, painted: true },
      { id: 'other_revenue', height: 2, painted: true },
      { id: 'reality_labs', height: 3, painted: true },
    ]
  );
});

test('Meta Q2 FY23 models callout operating results as semantic non-node metrics', () => {
  const data = dataset();
  const metrics = data.nonNodeMetrics.map(({ id, representation, value }) => ({
    id,
    representation,
    value,
  }));

  assert.deepEqual(Array.from(metrics), [
    { id: 'foa_operating_profit', representation: 'annotation', value: 13.1 },
    { id: 'rl_operating_loss', representation: 'annotation', value: -3.7 },
  ]);
  assert.match(data.annotationsSvg, /data-node="foa_operating_profit"/);
  assert.match(data.annotationsSvg, /data-node="rl_operating_loss"/);
});
