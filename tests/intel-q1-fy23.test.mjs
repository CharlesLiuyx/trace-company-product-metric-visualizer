import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function intelDataset() {
  const context = loadClassicScripts(['data/datasets/intel-q1-fy23.js']);
  return context.DATASETS.find((dataset) => dataset.key === 'intel-q1-fy23');
}

test('Intel Q1 FY23 preserves every Source-painted small and Other face', () => {
  const dataset = intelDataset();

  assert.deepEqual({ ...dataset.layout.nodes.intel_foundry }, {
    x: 401,
    y: 1199,
    width: 71,
    height: 3,
  });
  assert.deepEqual({ ...dataset.layout.nodes.other }, {
    x: 401,
    y: 1323,
    width: 71,
    height: 2,
  });
  assert.deepEqual({ ...dataset.layout.nodes.restructuring }, {
    x: 2269,
    y: 1021,
    width: 71,
    height: 3,
    color: '#e08585',
  });
  assert.equal(dataset.nodes.find((node) => node.id === 'other').value, 0.2);
  assert.ok(dataset.links.some((link) => link.target === 'restructuring'));
});

test('Intel Q1 FY23 fixes Source-measured per-face link ordering', () => {
  const dataset = intelDataset();
  const incoming = Array.from(dataset.links)
    .filter((link) => link.target === 'revenue')
    .sort((a, b) => a.targetOrder - b.targetOrder)
    .map((link) => link.source);
  const outgoing = Array.from(dataset.links)
    .filter((link) => link.source === 'operating_expenses')
    .sort((a, b) => a.sourceOrder - b.sourceOrder)
    .map((link) => link.target);

  assert.deepEqual(incoming, [
    'client_computing',
    'datacenter_ai',
    'network_edge',
    'mobileye',
    'intel_foundry',
    'other',
  ]);
  assert.deepEqual(outgoing, ['rnd', 'marketing_ga', 'restructuring']);
});
