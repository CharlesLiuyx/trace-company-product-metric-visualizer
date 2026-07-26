import assert from 'node:assert/strict';
import test from 'node:test';
import { loadClassicScripts } from './helpers/vm-load.mjs';

function amazonDataset() {
  const context = loadClassicScripts([
    'src/icons.js',
    'data/datasets/amazon-q4-fy24.js',
  ]);
  return context.DATASETS.find((dataset) => dataset.key === 'amazon-q4-fy24');
}

test('Amazon Q4 FY24 preserves the Source top-to-bottom Revenue target order', () => {
  const dataset = amazonDataset();
  const order = dataset.links
    .filter((link) => link.target === 'revenue')
    .sort((left, right) => left.targetOrder - right.targetOrder)
    .map((link) => link.source);

  assert.equal(
    Array.from(order).join(','),
    [
      'online_stores',
      'physical_store',
      'third_party_seller_services',
      'advertising',
      'subscription',
      'aws',
      'other_revenue',
    ].join(',')
  );
});

test('Amazon Q4 FY24 keeps all three smallest Other-like faces visible', () => {
  const dataset = amazonDataset();
  for (const [id, height] of [
    ['other_opex', 2],
    ['other_income', 2],
    ['other_revenue', 1],
  ]) {
    const node = dataset.nodes.find((candidate) => candidate.id === id);
    assert.ok(node);
    assert.notEqual(node.color, 'transparent');
    assert.equal(dataset.layout.nodes[id].height, height);
  }
});
