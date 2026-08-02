import test from 'node:test';
import assert from 'node:assert/strict';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['data/datasets/alibaba-q2-fy24.js']);
  return context.DATASETS.find((item) => item.key === 'alibaba-q2-fy24');
}

test('Alibaba Q2 FY24 preserves the Source-visible 64x2 Other face', () => {
  const item = dataset();
  const node = item.nodes.find((entry) => entry.id === 'other_income');
  const link = item.links.find(
    (entry) => entry.source === 'other_income' && entry.target === 'net_profit'
  );

  assert.deepEqual(
    { ...item.layout.nodes.other_income },
    { x: 2152, y: 560, width: 63, height: 3 }
  );
  assert.equal(node.value, 3.3);
  assert.equal(link.sourceWidth, 3);
  assert.equal(link.targetOrder, 1);
});

test('Alibaba Q2 FY24 fixes Source-measured same-color endpoint order', () => {
  const item = dataset();
  const opex = Array.from(item.links
    .filter((entry) => entry.source === 'operating_expenses')
    .sort((a, b) => a.sourceOrder - b.sourceOrder)
    .map((entry) => entry.target));
  const netInflows = Array.from(item.links
    .filter((entry) => entry.target === 'net_profit')
    .sort((a, b) => a.targetOrder - b.targetOrder)
    .map((entry) => entry.source));

  assert.deepEqual(opex, ['sm', 'product_development', 'ga', 'amortization_intangibles']);
  assert.deepEqual(netInflows, ['operating_profit', 'other_income']);
});
