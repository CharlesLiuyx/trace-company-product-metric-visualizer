import assert from 'node:assert/strict';
import test from 'node:test';
import { loadClassicScripts } from './helpers/vm-load.mjs';

function alphabetDataset() {
  const context = loadClassicScripts([
    'src/icons.js',
    'data/datasets/alphabet-q3-fy24.js',
  ]);
  return context.DATASETS.find((dataset) => dataset.key === 'alphabet-q3-fy24');
}

test('Alphabet Q3 FY24 preserves Source link order at multi-link faces', () => {
  const dataset = alphabetDataset();
  const targetOrder = dataset.links
    .filter((link) => link.target === 'revenue')
    .sort((left, right) => left.targetOrder - right.targetOrder)
    .map((link) => link.source);
  const sourceOrder = dataset.links
    .filter((link) => link.source === 'operating_expenses')
    .sort((left, right) => left.sourceOrder - right.sourceOrder)
    .map((link) => link.target);

  assert.deepEqual(Array.from(targetOrder), [
    'ad_revenue',
    'google_play_devices',
    'google_cloud',
    'other_revenue',
  ]);
  assert.deepEqual(Array.from(sourceOrder), ['rnd', 'sm', 'ga']);
});

test('Alphabet Q3 FY24 keeps the smallest Other revenue face visible', () => {
  const dataset = alphabetDataset();
  const node = dataset.nodes.find((candidate) => candidate.id === 'other_revenue');
  const link = dataset.links.find(
    (candidate) =>
      candidate.source === 'other_revenue' && candidate.target === 'revenue'
  );

  assert.ok(node);
  assert.ok(link);
  assert.equal(node.value, 0.4);
  assert.notEqual(node.color, 'transparent');
  assert.equal(dataset.layout.nodes.other_revenue.height, 1);
  assert.equal(link.sourceWidth, 1);
  assert.equal(link.targetWidth, 2);
  assert.equal(link.targetOrder, 3);
});
