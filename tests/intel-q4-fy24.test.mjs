import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function intelDataset() {
  const context = loadClassicScripts(['data/datasets/intel-q4-fy24.js']);
  return context.DATASETS.find((dataset) => dataset.key === 'intel-q4-fy24');
}

test('Intel Q4 FY24 preserves the Source-painted micro faces', () => {
  const dataset = intelDataset();
  const byId = Object.fromEntries(dataset.nodes.map((node) => [node.id, node]));

  assert.equal(dataset.layout.nodes.net_loss.height, 1);
  assert.equal(dataset.layout.nodes.restructuring.height, 2);
  assert.notEqual(byId.net_loss.color, 'transparent');
  assert.notEqual(byId.restructuring.color, 'transparent');
  assert.ok(dataset.links.some((link) => link.source === 'net_loss' && link.target === 'tax_other'));
  assert.ok(dataset.links.some((link) => link.source === 'operating_expenses' && link.target === 'restructuring'));
});

test('Intel Q4 FY24 keeps Other value-bearing and fixes Source interface order', () => {
  const dataset = intelDataset();
  const other = dataset.nodes.find((node) => node.id === 'other');
  const hubInflows = dataset.links
    .filter((link) => link.target === 'segment_hub')
    .sort((a, b) => a.targetOrder - b.targetOrder)
    .map((link) => link.source);
  const expenseOutflows = dataset.links
    .filter((link) => link.source === 'operating_expenses')
    .sort((a, b) => a.sourceOrder - b.sourceOrder)
    .map((link) => link.target);

  assert.equal(other.value, 1);
  assert.equal(other.valueText, '$1.0B');
  assert.equal(
    hubInflows.join(','),
    'client_computing,datacenter_ai,network_edge,intel_foundry,other'
  );
  assert.equal(expenseOutflows.join(','), 'rnd,marketing_ga,restructuring');
});
