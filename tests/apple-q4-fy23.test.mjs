import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['src/icons.js', 'data/datasets/apple-q4-fy23.js']);
  return context.DATASETS.find((entry) => entry.key === 'apple-q4-fy23');
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

test('Apple Q4 FY23 preserves Source order at every multi-link face', () => {
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
  assert.deepEqual(Array.from(orderedTargets(data, 'operating_profit')), ['net_profit', 'tax']);
  assert.deepEqual(Array.from(orderedTargets(data, 'operating_expenses')), ['rnd', 'sga']);
  assert.deepEqual(Array.from(orderedTargets(data, 'cost_of_revenue')), [
    'product_cost',
    'service_cost',
  ]);
});

test('Apple Q4 FY23 keeps the three smallest Source faces and decimal literals visible', () => {
  const data = dataset();

  assert.equal(data.layout.nodes.tax.height, 14);
  assert.equal(data.layout.nodes.sga.height, 22);
  assert.equal(data.layout.nodes.ipad.height, 22);
  assert.equal(data.nodes.find((node) => node.id === 'tax').valueText, '($4.0B)');
  assert.equal(data.nodes.find((node) => node.id === 'operating_profit').valueText, '$27.0B');
  assert.equal(data.nodes.find((node) => node.id === 'net_profit').valueText, '$23.0B');
});
