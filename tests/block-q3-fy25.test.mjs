import test from 'node:test';
import assert from 'node:assert/strict';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function blockDataset() {
  const context = loadClassicScripts(['data/datasets/block-q3-fy25.js']);
  return context.DATASETS.find((dataset) => dataset.key === 'block-q3-fy25');
}

test('Block Amortization keeps its Source-visible 71x1 face', () => {
  const dataset = blockDataset();
  const node = dataset.nodes.find((item) => item.id === 'amortization');
  const link = dataset.links.find(
    (item) => item.source === 'cost_of_revenue' && item.target === 'amortization'
  );

  assert.deepEqual(
    { ...dataset.layout.nodes.amortization },
    { x: 1556, y: 1327, width: 71, height: 1 }
  );
  assert.equal(node.color, '#cf9898');
  assert.equal(link.targetWidth, 1);
  assert.equal(link.y1, 1327.5);
});
