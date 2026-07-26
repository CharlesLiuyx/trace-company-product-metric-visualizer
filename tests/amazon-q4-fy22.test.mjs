import test from 'node:test';
import assert from 'node:assert/strict';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function amazonDataset() {
  const context = loadClassicScripts([
    'src/icons.js',
    'data/datasets/amazon-q4-fy22.js',
  ]);
  return context.DATASETS.find((dataset) => dataset.key === 'amazon-q4-fy22');
}

test('Amazon Q4 FY22 Net loss before tax enters the top of Other', () => {
  const dataset = amazonDataset();
  const targetOrder = dataset.links
    .filter((item) => item.target === 'other_non_operating')
    .sort((left, right) => left.targetOrder - right.targetOrder)
    .map((item) => item.source);

  assert.deepEqual(
    Array.from(targetOrder),
    ['net_loss_before_tax', 'operating_profit']
  );
});
