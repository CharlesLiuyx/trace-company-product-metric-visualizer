import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['data/datasets/moodys-q2-fy26.js']);
  return context.DATASETS.find((entry) => entry.key === 'moodys-q2-fy26');
}

test("Moody's Q2 FY26 keeps the three user-approved amount blocks 5px above their faces", () => {
  const item = dataset();
  const expectedTops = {
    corporate_finance: 658,
    financial_institutions: 983,
    public_project: 1127,
  };

  for (const labels of [item.layout.labels, item.i18n.zh.layout.labels]) {
    for (const [nodeId, top] of Object.entries(expectedTops)) {
      const [amountBlock] = labels[nodeId].blocks;
      assert.equal(amountBlock.top, top);
      assert.equal(amountBlock.anchor, 'middle');
      assert.equal(amountBlock.x, 430);
    }
  }
});
