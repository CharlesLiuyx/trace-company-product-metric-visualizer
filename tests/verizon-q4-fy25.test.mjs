import test from 'node:test';
import assert from 'node:assert/strict';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function verizonDataset() {
  const context = loadClassicScripts(['data/datasets/verizon-q4-fy25.js']);
  return context.DATASETS.find((dataset) => dataset.key === 'verizon-q4-fy25');
}

test('Verizon Q4 FY25 Corporate enters Revenue at the second target interface', () => {
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
  assert.equal(
    consumer.y1 - consumer.targetWidth / 2,
    revenue.y,
    'Consumer starts at the top of the Revenue face'
  );
  assert.equal(
    consumer.y1 + consumer.targetWidth / 2,
    corporate.y1 - corporate.targetWidth / 2,
    'Corporate starts immediately after Consumer'
  );
  assert.equal(
    corporate.y1 + corporate.targetWidth / 2,
    business.y1 - business.targetWidth / 2,
    'Business starts immediately after Corporate'
  );
  assert.equal(
    business.y1 + business.targetWidth / 2,
    revenue.y + revenue.height,
    'Business ends at the bottom of the Revenue face'
  );
});
