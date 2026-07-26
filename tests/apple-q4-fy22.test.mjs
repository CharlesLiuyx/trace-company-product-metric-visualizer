import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['src/icons.js', 'data/datasets/apple-q4-fy22.js']);
  return context.DATASETS.find((entry) => entry.key === 'apple-q4-fy22');
}

function orderedTargets(data, source) {
  return data.links
    .filter((link) => link.source === source)
    .sort((left, right) => left.sourceOrder - right.sourceOrder)
    .map((link) => link.target);
}

function orderedSources(data, target) {
  return data.links
    .filter((link) => link.target === target)
    .sort((left, right) => left.targetOrder - right.targetOrder)
    .map((link) => link.source);
}

test('Apple Q4 FY22 preserves Source order at every multi-link face', () => {
  const data = dataset();

  assert.deepEqual(Array.from(orderedSources(data, 'products')), [
    'iphone',
    'mac',
    'ipad',
    'wearables',
  ]);
  assert.deepEqual(Array.from(orderedSources(data, 'revenue')), ['products', 'services']);
  assert.deepEqual(Array.from(orderedTargets(data, 'revenue')), ['gross_profit', 'cost_of_revenue']);
  assert.deepEqual(Array.from(orderedTargets(data, 'gross_profit')), [
    'operating_profit',
    'operating_expenses',
  ]);
  assert.deepEqual(Array.from(orderedTargets(data, 'operating_profit')), [
    'net_profit',
    'tax',
    'other_expense',
  ]);
  assert.deepEqual(Array.from(orderedTargets(data, 'operating_expenses')), ['rnd', 'sga']);
  assert.deepEqual(Array.from(orderedTargets(data, 'cost_of_revenue')), [
    'product_cost',
    'service_cost',
  ]);
});

test('Apple Q4 FY22 preserves the Source-painted Other expense at its native 2px height', () => {
  const data = dataset();
  const other = data.nodes.find((entry) => entry.id === 'other_expense');
  const otherLink = data.links.find((entry) => entry.target === 'other_expense');

  assert.ok(other);
  assert.equal(data.nonNodeMetrics, undefined);
  assert.deepEqual(
    {
      x: data.layout.nodes.other_expense.x,
      y: data.layout.nodes.other_expense.y,
      width: data.layout.nodes.other_expense.width,
      height: data.layout.nodes.other_expense.height,
    },
    { x: 2239, y: 728, width: 71, height: 2 },
  );
  assert.notEqual(other.color, 'transparent');
  assert.equal(other.value, 0.2);
  assert.equal(otherLink.source, 'operating_profit');
  assert.equal(otherLink.sourceOrder, 2);
  assert.equal(otherLink.sourceWidth, 2);
  assert.equal(otherLink.targetWidth, 2);
});

test('Apple Q4 FY22 preserves the Source decimal on the integer Products total', () => {
  const data = dataset();
  assert.equal(data.nodes.find((node) => node.id === 'products').valueText, '$71.0B');
});
