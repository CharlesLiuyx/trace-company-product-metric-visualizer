import test from 'node:test';
import assert from 'node:assert/strict';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function palantirDataset() {
  const context = loadClassicScripts(['data/datasets/palantir-q3-fy25.js']);
  return context.DATASETS.find((dataset) => dataset.key === 'palantir-q3-fy25');
}

test('Palantir Tax keeps its user-confirmed Source-visible 71x3 terminal face', () => {
  const dataset = palantirDataset();
  const node = dataset.nodes.find((item) => item.id === 'tax');
  const link = dataset.links.find(
    (item) => item.source === 'operating_profit' && item.target === 'tax'
  );

  assert.deepEqual(
    { ...dataset.layout.nodes.tax },
    { x: 2252, y: 654, width: 71, height: 3 }
  );
  assert.equal(node.value, 4);
  assert.equal(node.color, '#e08585');
  assert.equal(link.interactionOnly, undefined);
  assert.equal(link.sourceWidth, 2);
  assert.equal(link.targetWidth, 3);
  assert.equal(link.y0, 544.5);
  assert.equal(link.y1, 655.5);
});
