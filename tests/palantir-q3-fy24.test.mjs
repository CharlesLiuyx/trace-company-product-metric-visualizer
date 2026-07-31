import test from 'node:test';
import assert from 'node:assert/strict';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function palantirDataset() {
  const context = loadClassicScripts(['data/datasets/palantir-q3-fy24.js']);
  return context.DATASETS.find((dataset) => dataset.key === 'palantir-q3-fy24');
}

test('Palantir Other and Tax preserve their Source-visible 71x2 terminal faces', () => {
  const dataset = palantirDataset();

  for (const [id, y] of [['other', 617], ['tax', 718]]) {
    const node = dataset.nodes.find((item) => item.id === id);
    const link = dataset.links.find(
      (item) => item.source === 'operating_profit' && item.target === id
    );

    assert.deepEqual(
      { ...dataset.layout.nodes[id] },
      { x: 2252, y, width: 71, height: 2 }
    );
    assert.equal(node.value, 8);
    assert.equal(node.color, '#cc0000');
    assert.equal(link.interactionOnly, undefined);
    assert.equal(link.targetWidth, 2);
    assert.equal(link.y1, y + 1);
  }
});
