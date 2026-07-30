import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function oracleDataset() {
  const context = loadClassicScripts(['data/datasets/oracle-q1-fy26.js']);
  return context.DATASETS.find((dataset) => dataset.key === 'oracle-q1-fy26');
}

test('Oracle Hardware amount labels stay 5px above the node face in every locale', () => {
  const dataset = oracleDataset();
  const node = dataset.layout.nodes.hardware;
  const labelHeight = 84;

  for (const labels of [dataset.layout.labels, dataset.i18n.zh.layout.labels]) {
    const amount = labels.hardware.blocks[1];
    assert.equal(amount.top, 1071);
    assert.equal(node.y - (amount.top + labelHeight), 5);
  }
});
