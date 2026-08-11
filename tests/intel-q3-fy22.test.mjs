import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function intelDataset() {
  const context = loadClassicScripts(['data/datasets/intel-q3-fy22.js']);
  return context.DATASETS.find((dataset) => dataset.key === 'intel-q3-fy22');
}

test('Intel Q3 FY22 keeps the Source-visible operating-loss micro-flow painted', () => {
  const dataset = intelDataset();
  const link = dataset.links.find(
    (item) => item.sourceRoute === 'operating_loss' && item.target === 'operating_expenses'
  );

  assert.ok(link);
  assert.equal(link.interactionOnly, undefined);
  assert.deepEqual(
    {
      sourceWidth: link.sourceWidth,
      targetWidth: link.targetWidth,
      targetOrder: link.targetOrder,
    },
    { sourceWidth: 2, targetWidth: 5, targetOrder: 1 }
  );
});
