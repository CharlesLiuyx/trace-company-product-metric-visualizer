import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

const context = loadClassicScripts(['data/datasets/adidas-fy23.js']);
const dataset = context.DATASETS.find((item) => item.key === 'adidas-fy23');

test('Adidas FY23 preserves the reviewed Financial target-interface order', () => {
  const financialInflows = dataset.links
    .filter((link) => link.target === 'financial')
    .sort((left, right) => left.targetOrder - right.targetOrder)
    .map((link) => [link.source, link.targetOrder]);

  assert.deepEqual(JSON.parse(JSON.stringify(financialInflows)), [
    ['net_loss', 0],
    ['operating_profit', 1],
  ]);
});
