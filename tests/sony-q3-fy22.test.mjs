import assert from 'node:assert/strict';
import test from 'node:test';
import vm from 'node:vm';
import { readFile } from 'node:fs/promises';

const adapterSource = await readFile(
  new URL('../data/datasets/sony-q3-fy22.js', import.meta.url),
  'utf8'
);
const context = {
  window: {
    SANKEY_BUSINESS_ICONS: {
      sonyCompanyWordmark: '<text>SONY</text>',
    },
  },
};
vm.runInNewContext(adapterSource, context);
const dataset = context.window.DATASETS[0];

test('Sony segment amount labels keep the user-approved centered 5px-above-node placement', () => {
  const expected = {
    game_network: 348,
    music: 523,
    pictures: 653,
    technology: 798,
    imaging_sensing: 962,
    financial_services: 1095,
    other_revenue: 1233,
  };

  for (const [nodeId, top] of Object.entries(expected)) {
    const englishAmount = dataset.layout.labels[nodeId].blocks[0];
    const chineseAmount = dataset.i18n.zh.layout.labels[nodeId].blocks[0];
    const node = dataset.layout.nodes[nodeId];

    assert.equal(englishAmount.x, node.x + node.width / 2);
    assert.equal(englishAmount.top, top);
    assert.equal(chineseAmount.x, node.x + node.width / 2);
    assert.equal(chineseAmount.top, top);
  }
});
