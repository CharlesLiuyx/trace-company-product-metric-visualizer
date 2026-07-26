import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['src/icons.js', 'data/datasets/apple-q2-fy25.js']);
  return context.DATASETS.find((entry) => entry.key === 'apple-q2-fy25');
}

test('Apple Q2 FY25 preserves the Source-painted Other expense face and direction', () => {
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
    { x: 2257, y: 797, width: 71, height: 4 },
  );
  assert.notEqual(other.color, 'transparent');
  assert.equal(other.value, 0.3);
  assert.equal(otherLink.source, 'operating_profit');
  assert.equal(otherLink.sourceOrder, 2);
});

test('Apple Q2 FY25 keeps Source-measured per-face flow order', () => {
  const data = dataset();
  const targets = (target) => data.links
    .filter((link) => link.target === target)
    .sort((left, right) => left.targetOrder - right.targetOrder)
    .map((link) => link.source);
  const sources = (source) => data.links
    .filter((link) => link.source === source)
    .sort((left, right) => left.sourceOrder - right.sourceOrder)
    .map((link) => link.target);

  assert.deepEqual(Array.from(targets('products')), ['iphone', 'mac', 'ipad', 'wearables']);
  assert.deepEqual(Array.from(targets('revenue')), ['products', 'services']);
  assert.deepEqual(Array.from(sources('revenue')), ['gross_profit', 'cost_of_revenue']);
  assert.deepEqual(Array.from(sources('gross_profit')), ['operating_profit', 'operating_expenses']);
  assert.deepEqual(Array.from(sources('operating_profit')), ['net_profit', 'tax', 'other_expense']);
  assert.deepEqual(Array.from(targets('rnd')), ['operating_expenses']);
  assert.deepEqual(Array.from(targets('sga')), ['operating_expenses']);
});
