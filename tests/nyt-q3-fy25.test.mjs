import test from 'node:test';
import assert from 'node:assert/strict';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function nytDataset() {
  const context = loadClassicScripts(['data/datasets/nyt-q3-fy25.js']);
  return context.DATASETS.find((dataset) => dataset.key === 'nyt-q3-fy25');
}

test('NYT Q3 FY25 Interest enters the bottom of the Net profit target interface', () => {
  const dataset = nytDataset();
  const netProfit = dataset.layout.nodes.net_profit;
  const link = (source) => dataset.links.find(
    (item) => item.source === source && item.target === 'net_profit'
  );
  const operatingProfit = link('operating_profit');
  const interest = link('interest');

  assert.equal(operatingProfit.targetOrder, 0);
  assert.equal(interest.targetOrder, 1);
  assert.equal(
    operatingProfit.y1 - operatingProfit.targetWidth / 2,
    netProfit.y,
    'Operating profit starts at the top of the Net profit face'
  );
  assert.equal(
    operatingProfit.y1 + operatingProfit.targetWidth / 2,
    interest.y1 - interest.targetWidth / 2,
    'The two incoming links remain contiguous at the target face'
  );
  assert.equal(
    interest.y1 + interest.targetWidth / 2,
    netProfit.y + netProfit.height,
    'Interest ends at the bottom of the Net profit face'
  );
});
