import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['data/datasets/southwest-q2-fy26.js']);
  return context.DATASETS.find((entry) => entry.key === 'southwest-q2-fy26');
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

test('Southwest Q2 FY26 preserves Source-measured same-color face order', () => {
  const data = dataset();

  assert.deepEqual(Array.from(orderedSources(data, 'revenue')), [
    'passenger',
    'freight',
    'other_revenue',
  ]);
  assert.deepEqual(Array.from(orderedTargets(data, 'operating_profit')), [
    'net_profit',
    'other_expense',
  ]);
  assert.deepEqual(Array.from(orderedTargets(data, 'operating_expenses')), [
    'salaries_benefits',
    'fuel_oil',
    'maintenance',
    'landing_fees',
    'depreciation_amortization',
    'other_operating',
  ]);
});

test('Southwest Q2 FY26 keeps every value-bearing Other and short face visible', () => {
  const data = dataset();
  const nodes = Object.fromEntries(data.nodes.map((node) => [node.id, node]));

  assert.deepEqual(
    { ...data.layout.nodes.freight },
    { x: 363, y: 979, width: 73, height: 3 },
  );
  assert.deepEqual(
    { ...data.layout.nodes.other_expense },
    { x: 2231, y: 496, width: 73, height: 4 },
  );
  assert.equal(nodes.freight.value, 0.05);
  assert.equal(nodes.freight.valueText, '$50M');
  assert.equal(nodes.other_revenue.value, 0.6);
  assert.equal(nodes.other_expense.value, 0.1);
  assert.equal(nodes.other_operating.value, 1.1);
  assert.notEqual(nodes.other_revenue.color, '#f2f2f2');
  assert.notEqual(nodes.other_expense.color, '#f2f2f2');
  assert.notEqual(nodes.other_operating.color, '#f2f2f2');
});

test('Southwest Q2 FY26 fully allocates the Operating expenses source face', () => {
  const data = dataset();
  const sourceWidth = data.links
    .filter((link) => link.source === 'operating_expenses')
    .reduce((sum, link) => sum + link.sourceWidth, 0);

  assert.equal(sourceWidth, data.layout.nodes.operating_expenses.height);
});
