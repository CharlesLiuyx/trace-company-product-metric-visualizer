import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function intelDataset() {
  const context = loadClassicScripts(['data/datasets/intel-q1-fy24.js']);
  return context.DATASETS.find((dataset) => dataset.key === 'intel-q1-fy24');
}

test('Intel Q1 FY24 preserves the Source-painted Mobileye, Other, and Restructuring faces', () => {
  const dataset = intelDataset();

  assert.deepEqual({ ...dataset.layout.nodes.mobileye }, {
    x: 396,
    y: 1024,
    width: 71,
    height: 7,
    color: '#1f2eb8',
  });
  assert.deepEqual({ ...dataset.layout.nodes.other }, {
    x: 396,
    y: 1355,
    width: 71,
    height: 7,
  });
  assert.deepEqual({ ...dataset.layout.nodes.restructuring }, {
    x: 2264,
    y: 1018,
    width: 71,
    height: 4,
  });
  assert.equal(dataset.nodes.find((node) => node.id === 'mobileye').value, 0.2);
  assert.equal(dataset.nodes.find((node) => node.id === 'other').value, 0.5);
  assert.equal(dataset.nodes.find((node) => node.id === 'restructuring').value, 0.3);
});

test('Intel Q1 FY24 locks the Source-measured multi-link face ordering', () => {
  const dataset = intelDataset();
  const link = (source, target) => dataset.links.find(
    (candidate) => candidate.source === source && candidate.target === target
  );

  assert.deepEqual(
    ['client_computing', 'datacenter_ai', 'network_edge', 'mobileye', 'intel_foundry', 'other']
      .map((source) => link(source, 'seg_hub').targetOrder),
    [0, 1, 2, 3, 4, 5]
  );
  assert.equal(link('seg_hub', 'revenue').sourceOrder, 0);
  assert.equal(link('seg_hub', 'eliminations').sourceOrder, 1);
  assert.equal(link('gross_profit', 'operating_expenses').targetOrder, 0);
  assert.equal(link('operating_loss', 'operating_expenses').targetOrder, 1);
  assert.deepEqual(
    ['rnd', 'marketing_ga', 'restructuring']
      .map((target) => link('operating_expenses', target).sourceOrder),
    [0, 1, 2]
  );
});
