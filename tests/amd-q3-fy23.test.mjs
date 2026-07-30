import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function amdDataset() {
  const context = loadClassicScripts([
    'src/icons.js',
    'data/datasets/amd-q3-fy23.js',
  ]);
  return context.DATASETS.find((dataset) => dataset.key === 'amd-q3-fy23');
}

test('AMD Q3 FY23 retains the two Source-native short profit faces', () => {
  const dataset = amdDataset();

  for (const [id, value, valueText, expectedLayout] of [
    ['other', 0.036, '$36M', { x: 2081, y: 522, width: 66, height: 1 }],
    ['tax_benefit', 0.039, '$39M', { x: 2146, y: 648, width: 66, height: 2 }],
  ]) {
    const node = dataset.nodes.find((candidate) => candidate.id === id);
    assert.ok(node, `${id} must remain a semantic node`);
    assert.equal(node.value, value);
    assert.equal(node.valueText, valueText);
    assert.notEqual(node.color, 'transparent');
    assert.deepEqual({ ...dataset.layout.nodes[id] }, expectedLayout);
  }

  assert.ok(!dataset.nonNodeMetrics?.some(({ id }) => id === 'other' || id === 'tax_benefit'));
});

test('AMD Q3 FY23 connects both short faces to net profit in Source order', () => {
  const dataset = amdDataset();
  const netProfitInflows = dataset.links
    .filter((link) => link.target === 'net_profit')
    .sort((left, right) => left.targetOrder - right.targetOrder);

  assert.deepEqual(
    Array.from(netProfitInflows, ({ source, sourceWidth }) => [source, sourceWidth]),
    [
      ['operating_profit', 11],
      ['other', 1],
      ['tax_benefit', 1],
    ]
  );
});
