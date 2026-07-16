import test from 'node:test';
import assert from 'node:assert/strict';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function marriottDataset() {
  const context = loadClassicScripts(['data/datasets/marriott-q3-fy25.js']);
  return context.DATASETS.find((dataset) => dataset.key === 'marriott-q3-fy25');
}

test('Marriott D&A keeps its Source-visible 71x1 terminal face', () => {
  const dataset = marriottDataset();
  const node = dataset.nodes.find((item) => item.id === 'da');
  const link = dataset.links.find(
    (item) => item.source === 'operating_expenses' && item.target === 'da'
  );

  assert.deepEqual(
    { ...dataset.layout.nodes.da },
    { x: 2236, y: 1065, width: 73, height: 1 }
  );
  assert.equal(node.value, 0.010);
  assert.equal(node.color, '#cc0000');
  assert.equal(link.width, 1);
});
