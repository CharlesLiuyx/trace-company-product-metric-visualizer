import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['data/datasets/costco-q3-fy23.js']);
  return context.DATASETS.find((entry) => entry.key === 'costco-q3-fy23');
}

test('Costco Q3 FY23 preserves Source-measured same-color inflow orders', () => {
  const data = dataset();
  const revenueInflows = data.links
    .filter((link) => link.target === 'revenue')
    .sort((left, right) => left.targetOrder - right.targetOrder)
    .map((link) => [link.source, link.targetOrder]);
  const netProfitInflows = data.links
    .filter((link) => link.target === 'net_profit')
    .sort((left, right) => left.targetOrder - right.targetOrder)
    .map((link) => [link.source, link.targetOrder]);

  assert.deepEqual(JSON.parse(JSON.stringify(revenueInflows)), [['net_sales', 0], ['membership_fee', 1]]);
  assert.deepEqual(JSON.parse(JSON.stringify(netProfitInflows)), [['operating_profit', 0], ['interest', 1]]);
});

test('Costco Q3 FY23 keeps the three smallest Source values visible', () => {
  const data = dataset();
  const expected = [
    ['interest', 0.092, 1],
    ['tax', 0.5, 2],
    ['membership_fee', 1, 6],
  ];

  for (const [id, value, height] of expected) {
    assert.equal(data.nodes.find((node) => node.id === id).value, value);
    assert.equal(data.layout.nodes[id].height, height);
    assert.notEqual(data.nodes.find((node) => node.id === id).color, 'transparent');
  }
});
