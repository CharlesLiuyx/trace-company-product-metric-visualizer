import test from 'node:test';
import assert from 'node:assert/strict';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['data/datasets/coca-cola-q3-fy23.js']);
  return context.DATASETS.find((entry) => entry.key === 'coca-cola-q3-fy23');
}

test('Coca-Cola Q3 FY23 preserves the Source-measured same-color interface identity order', () => {
  const data = dataset();

  const grossRevenueIn = data.links
    .filter((link) => link.target === 'gross_revenue')
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

  assert.deepEqual(Array.from(grossRevenueIn), [
    'emea',
    'latam',
    'ucan',
    'apac',
    'global_ventures',
    'bottling_investments',
    'other_revenue',
  ]);
  assert.deepEqual(Array.from(operatingProfitOut), ['net_profit', 'tax', 'interest']);
  assert.deepEqual(Array.from(operatingExpensesOut), ['sga', 'other_opex']);
});

test('Coca-Cola Q3 FY23 keeps the Source-visible Other and Interest short faces painted', () => {
  const data = dataset();

  assert.deepEqual(
    ['other_revenue', 'interest'].map((id) => ({
      id,
      height: data.layout.nodes[id].height,
      painted: data.nodes.find((node) => node.id === id).color !== 'transparent',
    })),
    [
      { id: 'other_revenue', height: 4, painted: true },
      { id: 'interest', height: 2, painted: true },
    ],
  );
});

test('Coca-Cola Q3 FY23 preserves the Source display resolution for integer and micro values', () => {
  const data = dataset();
  const nodes = Object.fromEntries(data.nodes.map((node) => [node.id, node]));

  assert.equal(nodes.other_revenue.valueText, '$40M');
  assert.equal(nodes.revenue.valueText, '$12.0B');
  assert.equal(nodes.operating_expenses.valueText, '($4.0B)');
});
