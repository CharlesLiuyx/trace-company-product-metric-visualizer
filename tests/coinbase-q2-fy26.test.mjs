import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['data/datasets/coinbase-q2-fy26.js']);
  return context.DATASETS.find((entry) => entry.key === 'coinbase-q2-fy26');
}

test('Coinbase Q2 FY26 keeps the user-approved Other subscription label gap', () => {
  const data = dataset();
  const nodeTop = data.layout.nodes.other_subscription.y;
  const enAmountBlock = data.layout.labels.other_subscription.blocks[0];
  const zhAmountBlock = data.i18n.zh.layout.labels.other_subscription.blocks[0];

  assert.equal(nodeTop, 1304);
  assert.equal(enAmountBlock.top, 1216);
  assert.equal(zhAmountBlock.top, 1216);
  assert.equal(nodeTop - enAmountBlock.top, 88);
  assert.equal(nodeTop - zhAmountBlock.top, 88);
});
