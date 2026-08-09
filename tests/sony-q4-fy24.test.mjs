import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['data/datasets/sony-q4-fy24.js']);
  return context.DATASETS.find((entry) => entry.key === 'sony-q4-fy24');
}

test('Sony Q4 FY24 preserves the Source-painted Other revenue face', () => {
  const data = dataset();
  const node = data.nodes.find((entry) => entry.id === 'other_revenue');
  const link = data.links.find(
    (entry) => entry.source === 'other_revenue' && entry.target === 'revenue',
  );

  assert.deepEqual(
    { ...data.layout.nodes.other_revenue },
    { x: 434, y: 1271, width: 71, height: 5 },
  );
  assert.equal(node.value, 22);
  assert.equal(node.color, '#666666');
  assert.equal(link.sourceWidth, 5);
});

test('Sony Q4 FY24 preserves all three Source-painted micro faces', () => {
  const data = dataset();
  assert.deepEqual(
    Object.fromEntries(['other_income', 'tax', 'other_expenses'].map((id) => [id, { ...data.layout.nodes[id] }])),
    {
      other_income: { x: 2178, y: 429, width: 71, height: 3 },
      tax: { x: 2302, y: 616, width: 71, height: 2 },
      other_expenses: { x: 2302, y: 1069, width: 71, height: 2 },
    },
  );
  assert.equal(data.nonNodeMetrics, undefined);
});

test('Sony Q4 FY24 fixes the measured multi-link face orders', () => {
  const data = dataset();
  const incomingRevenue = Array.from(data.links)
    .filter((entry) => entry.target === 'revenue')
    .sort((left, right) => left.targetOrder - right.targetOrder)
    .map((entry) => entry.source);
  const incomingOperatingExpenses = Array.from(data.links)
    .filter((entry) => entry.target === 'operating_expenses')
    .sort((left, right) => left.targetOrder - right.targetOrder)
    .map((entry) => entry.source);
  const incomingNetProfit = Array.from(data.links)
    .filter((entry) => entry.target === 'net_profit')
    .sort((left, right) => left.targetOrder - right.targetOrder)
    .map((entry) => entry.source || entry.sourceRoute);

  assert.deepEqual(incomingRevenue, [
    'game_network',
    'music',
    'pictures',
    'technology',
    'imaging_sensing',
    'other_revenue',
  ]);
  assert.deepEqual(incomingOperatingExpenses, ['gross_profit', 'other_financial']);
  assert.deepEqual(incomingNetProfit, ['operating_profit', 'other_income']);
});
