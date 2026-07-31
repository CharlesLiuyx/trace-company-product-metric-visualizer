import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['src/icons.js', 'data/datasets/dell-q2-fy25.js']);
  return context.DATASETS.find((entry) => entry.key === 'dell-q2-fy25');
}

test('Dell Q2 FY25 preserves the Source-painted Other and Tax terminal faces', () => {
  const data = dataset();
  const other = data.nodes.find((entry) => entry.id === 'other_expense');
  const tax = data.nodes.find((entry) => entry.id === 'tax');
  const otherLink = data.links.find((entry) => entry.target === 'other_expense');
  const taxLink = data.links.find((entry) => entry.target === 'tax');

  assert.equal(data.nodes.length, 17);
  assert.equal(data.nonNodeMetrics, undefined);
  assert.deepEqual({ ...data.layout.nodes.other_expense }, { x: 2283, y: 635, width: 72, height: 3 });
  assert.deepEqual({ ...data.layout.nodes.tax }, { x: 2283, y: 749, width: 72, height: 2 });
  assert.equal(other.value, 0.4);
  assert.notEqual(other.color, 'transparent');
  assert.equal(tax.value, 0.1);
  assert.equal(tax.color, '#d53c3c');
  assert.equal(otherLink.source, 'operating_profit');
  assert.equal(otherLink.targetRoute, undefined);
  assert.equal(taxLink.source, 'operating_profit');
  assert.equal(taxLink.targetRoute, undefined);
});

test('Dell Q2 FY25 keeps Source-measured flow order around Revenue and Operating profit', () => {
  const data = dataset();
  const targets = (source) => data.links
    .filter((link) => link.source === source)
    .sort((left, right) => left.sourceOrder - right.sourceOrder)
    .map((link) => link.target);
  const sources = (target) => data.links
    .filter((link) => link.target === target)
    .sort((left, right) => left.targetOrder - right.targetOrder)
    .map((link) => link.source);

  assert.deepEqual(Array.from(sources('revenue')), ['isg', 'csg', 'other_revenue']);
  assert.deepEqual(Array.from(targets('revenue')), ['gross_profit', 'cost_of_revenue']);
  assert.deepEqual(Array.from(targets('operating_profit')), ['net_profit', 'other_expense', 'tax']);
  assert.deepEqual(Array.from(targets('operating_expenses')), ['sga', 'rnd']);
});
