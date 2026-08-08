import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function intelDataset() {
  const context = loadClassicScripts(['data/datasets/intel-q2-fy26.js']);
  return context.DATASETS.find((dataset) => dataset.key === 'intel-q2-fy26');
}

test('Intel Q2 FY26 preserves the Source-painted Other and Restructuring faces', () => {
  const dataset = intelDataset();

  assert.deepEqual({ ...dataset.layout.nodes.other }, {
    x: 672,
    y: 1304,
    width: 71,
    height: 7,
  });
  assert.deepEqual({ ...dataset.layout.nodes.restructuring }, {
    x: 2229,
    y: 1163,
    width: 71,
    height: 3,
    color: '#e08585',
  });
  assert.equal(dataset.nodes.find((node) => node.id === 'other').value, 0.7);
  assert.equal(dataset.nodes.find((node) => node.id === 'restructuring').value, 0.2);
  assert.ok(
    dataset.links.some(
      (link) => link.source === 'operating_expenses' && link.target === 'restructuring'
    ),
    'Restructuring remains a semantic node target rather than a zero-paint route'
  );
});

test('Intel Q2 FY26 fixes Source-measured same-color target ordering', () => {
  const dataset = intelDataset();
  const targetOrder = (source, target) => dataset.links.find(
    (link) => link.source === source && link.target === target
  ).targetOrder;

  assert.equal(targetOrder('intel_products', 'seg_hub'), 0);
  assert.equal(targetOrder('intel_foundry', 'seg_hub'), 1);
  assert.equal(targetOrder('other', 'seg_hub'), 2);
  assert.equal(targetOrder('net_loss', 'interest_other_costs'), 0);
  assert.equal(targetOrder('operating_profit', 'interest_other_costs'), 1);
});
