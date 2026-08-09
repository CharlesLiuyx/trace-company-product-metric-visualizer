import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['data/datasets/tencent-q3-fy22.js']);
  return context.DATASETS.find((entry) => entry.key === 'tencent-q3-fy22');
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

test('Tencent Q3 FY22 preserves Source order at every multi-link face', () => {
  const data = dataset();

  assert.deepEqual(Array.from(orderedSources(data, 'revenue')), [
    'gaming',
    'social_networks',
    'advertising',
    'finance_business_services',
    'others',
  ]);
  assert.deepEqual(Array.from(orderedTargets(data, 'revenue')), ['gross_profit', 'cost_of_revenue']);
  assert.deepEqual(Array.from(orderedTargets(data, 'gross_profit')), ['operating_profit', 'operating_expenses']);
  assert.deepEqual(Array.from(orderedSources(data, 'operating_profit')), ['gross_profit', 'other_gains']);
  assert.deepEqual(Array.from(orderedTargets(data, 'operating_profit')), ['net_profit', 'tax', 'other']);
  assert.deepEqual(Array.from(orderedTargets(data, 'operating_expenses')), ['rnd', 'ga', 'sales_ga']);
});

test('Tencent Q3 FY22 keeps the corrected Other gains and the visible Others face', () => {
  const data = dataset();
  const otherGains = data.nodes.find((node) => node.id === 'other_gains');
  const others = data.nodes.find((node) => node.id === 'others');

  assert.equal(otherGains.value, 23.2);
  assert.equal(otherGains.valueText, '23.2B');
  assert.equal(data.layout.nodes.others.height, 5);
  assert.equal(others.valueText, '1.1B');
});
