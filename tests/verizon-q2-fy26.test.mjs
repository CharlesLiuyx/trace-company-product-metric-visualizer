import test from 'node:test';
import assert from 'node:assert/strict';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function verizonDataset() {
  const context = loadClassicScripts(['data/datasets/verizon-q2-fy26.js']);
  return context.DATASETS.find((dataset) => dataset.key === 'verizon-q2-fy26');
}

test('Verizon Q2 FY26 preserves the measured Revenue target interface', () => {
  const dataset = verizonDataset();
  const revenue = dataset.layout.nodes.revenue;
  const link = (source) => dataset.links.find(
    (item) => item.source === source && item.target === 'revenue'
  );
  const consumer = link('consumer');
  const corporate = link('corporate');
  const business = link('business');

  assert.deepEqual(
    [consumer.targetOrder, corporate.targetOrder, business.targetOrder],
    [0, 1, 2]
  );
  assert.equal(consumer.y1 - consumer.targetWidth / 2, revenue.y);
  assert.equal(
    consumer.y1 + consumer.targetWidth / 2,
    corporate.y1 - corporate.targetWidth / 2
  );
  assert.equal(
    corporate.y1 + corporate.targetWidth / 2,
    business.y1 - business.targetWidth / 2
  );
  assert.equal(
    business.y1 + business.targetWidth / 2,
    revenue.y + revenue.height
  );
});

test('Verizon Q2 FY26 keeps tiny nodes visible and Other income non-node', () => {
  const dataset = verizonDataset();
  const nodeIds = new Set(dataset.nodes.map((node) => node.id));
  const otherIncome = dataset.nonNodeMetrics.find((metric) => metric.id === 'other_income');
  const otherIncomeFlow = dataset.links.find((link) => link.sourceRoute === 'other_income');

  assert.equal(dataset.layout.nodes.corporate.height, 5);
  assert.equal(dataset.layout.nodes.wireless_business.height, 5);
  assert.equal(nodeIds.has('other_income'), false);
  assert.deepEqual(
    { representation: otherIncome.representation, value: otherIncome.value },
    { representation: 'flow', value: 0.1 }
  );
  assert.deepEqual(
    { target: otherIncomeFlow.target, value: otherIncomeFlow.value, interactionOnly: otherIncomeFlow.interactionOnly },
    { target: 'net_profit', value: 0.1, interactionOnly: true }
  );
});
