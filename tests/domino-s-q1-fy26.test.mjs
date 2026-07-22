import assert from 'node:assert/strict';
import test from 'node:test';
import vm from 'node:vm';
import { readFile } from 'node:fs/promises';

const adapterSource = await readFile(
  new URL('../data/datasets/domino-s-q1-fy26.js', import.meta.url),
  'utf8'
);
const context = { window: {} };
vm.runInNewContext(adapterSource, context);
const dataset = context.window.DATASETS[0];

test("Domino's Supply chain amount labels keep the user-approved 5px-above-node placement", () => {
  const englishAmount = dataset.layout.labels.supply_chain_revenue.blocks[0];
  const chineseAmount = dataset.i18n.zh.layout.labels.supply_chain_revenue.blocks[0];

  assert.equal(englishAmount.top, 674);
  assert.equal(chineseAmount.top, 674);
  assert.equal(dataset.layout.nodes.supply_chain_revenue.y, 763);
});
