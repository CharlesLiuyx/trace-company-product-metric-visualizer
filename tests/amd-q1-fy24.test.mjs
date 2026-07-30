import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function amdDataset() {
  const context = loadClassicScripts([
    'src/icons.js',
    'data/datasets/amd-q1-fy24.js',
  ]);
  return context.DATASETS.find((dataset) => dataset.key === 'amd-q1-fy24');
}

test('AMD Q1 FY24 preserves Source order at every multi-link face', () => {
  const dataset = amdDataset();
  const ordered = (predicate, orderField) =>
    dataset.links
      .filter(predicate)
      .sort((left, right) => left[orderField] - right[orderField])
      .map(({ source, target }) => `${source}->${target}`);

  assert.deepEqual(
    Array.from(ordered((link) => link.target === 'revenue', 'targetOrder')),
    [
      'data_center->revenue',
      'client->revenue',
      'gaming->revenue',
      'embedded->revenue',
    ]
  );
  assert.deepEqual(
    Array.from(ordered((link) => link.source === 'revenue', 'sourceOrder')),
    ['revenue->gross_profit', 'revenue->cost_of_revenue']
  );
  assert.deepEqual(
    Array.from(ordered((link) => link.source === 'gross_profit', 'sourceOrder')),
    ['gross_profit->operating_profit', 'gross_profit->operating_expenses']
  );
  assert.deepEqual(
    Array.from(ordered((link) => link.target === 'net_profit', 'targetOrder')),
    [
      'other->net_profit',
      'operating_profit->net_profit',
      'tax_benefit->net_profit',
    ]
  );
  assert.deepEqual(
    Array.from(ordered((link) => link.source === 'operating_expenses', 'sourceOrder')),
    [
      'operating_expenses->rnd',
      'operating_expenses->sga',
      'operating_expenses->amortization',
    ]
  );
});

test('AMD Q1 FY24 retains all three Source-native 2px profit faces', () => {
  const dataset = amdDataset();

  for (const [id, value, valueText] of [
    ['other', 0.035, '$35M'],
    ['operating_profit', 0.036, '$36M'],
    ['tax_benefit', 0.052, '$52M'],
  ]) {
    const node = dataset.nodes.find((candidate) => candidate.id === id);
    assert.ok(node);
    assert.equal(node.value, value);
    assert.equal(node.valueText, valueText);
    assert.notEqual(node.color, 'transparent');
    assert.equal(dataset.layout.nodes[id].height, 2);
  }
});
