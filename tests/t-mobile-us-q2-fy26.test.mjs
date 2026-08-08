import assert from 'node:assert/strict';
import test from 'node:test';
import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['data/datasets/t-mobile-us-q2-fy26.js']);
  return context.DATASETS.find((entry) => entry.key === 't-mobile-us-q2-fy26');
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

test('T-Mobile US Q2 FY26 preserves Source-measured multi-link face order', () => {
  const data = dataset();

  assert.deepEqual(Array.from(orderedSources(data, 'services')), [
    'postpaid',
    'prepaid',
    'wholesale_other',
  ]);
  assert.deepEqual(Array.from(orderedSources(data, 'revenue')), [
    'services',
    'equipment',
    'other_revenue',
  ]);
  assert.deepEqual(Array.from(orderedTargets(data, 'operating_profit')), [
    'net_profit',
    'other_expense',
    'tax',
  ]);
  assert.deepEqual(Array.from(orderedTargets(data, 'operating_expenses')), [
    'sga',
    'depreciation_amortization',
  ]);
});

test('T-Mobile US Q2 FY26 keeps the value-bearing Other revenue face visible', () => {
  const data = dataset();
  const node = data.nodes.find((entry) => entry.id === 'other_revenue');
  const link = data.links.find(
    (entry) => entry.source === 'other_revenue' && entry.target === 'revenue'
  );

  assert.equal(node.value, 0.3);
  assert.equal(data.layout.nodes.other_revenue.height, 2);
  assert.equal(link.sourceWidth, 2);
  assert.equal(link.targetOrder, 2);
  assert.notEqual(node.color, '#f2f2f2');
});
