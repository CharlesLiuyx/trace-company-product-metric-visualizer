import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function marvellDataset() {
  const context = loadClassicScripts(['data/datasets/marvell-q3-fy26.js']);
  return context.DATASETS.find((dataset) => dataset.key === 'marvell-q3-fy26');
}

test('Marvell Q3 FY26 preserves the Source order of same-color Net profit inflows', () => {
  const dataset = marvellDataset();
  const inflows = dataset.links
    .filter((link) => link.target === 'net_profit')
    .sort((left, right) => left.targetOrder - right.targetOrder);

  assert.deepEqual(
    Array.from(inflows, (link) => ({
      source: link.source,
      targetOrder: link.targetOrder,
      targetWidth: link.targetWidth,
    })),
    [
      { source: 'other_non_operating', targetOrder: 0, targetWidth: 224 },
      { source: 'operating_profit', targetOrder: 1, targetWidth: 5 },
    ]
  );
});

test('Marvell Q3 FY26 keeps the smallest Automotive / Industrial face visible', () => {
  const dataset = marvellDataset();
  const node = dataset.nodes.find((item) => item.id === 'automotive_industrial');
  const link = dataset.links.find(
    (item) => item.source === 'automotive_industrial' && item.target === 'revenue'
  );

  assert.deepEqual(
    { ...dataset.layout.nodes.automotive_industrial },
    { x: 420, y: 1251, width: 71, height: 1 }
  );
  assert.equal(node.value, 0.035);
  assert.notEqual(node.color, 'transparent');
  assert.equal(link.sourceWidth, 1);
  assert.equal(link.targetWidth, 3);
});
