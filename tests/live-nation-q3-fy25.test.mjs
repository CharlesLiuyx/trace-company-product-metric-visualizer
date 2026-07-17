import test from 'node:test';
import assert from 'node:assert/strict';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function liveNationDataset() {
  const context = loadClassicScripts(['data/datasets/live-nation-q3-fy25.js']);
  return context.DATASETS.find((dataset) => dataset.key === 'live-nation-q3-fy25');
}

test('Live Nation Ticketing and Sponsorship side labels stay centered on their node faces', () => {
  const dataset = liveNationDataset();

  for (const [nodeId, expectedTop] of [
    ['ticketing', 990.5],
    ['sponsorship', 1155],
  ]) {
    const node = dataset.layout.nodes[nodeId];
    const label = dataset.layout.labels[nodeId].blocks[1];

    assert.equal(label.anchor, 'end');
    assert.equal(label.x, 369);
    assert.equal(label.top, expectedTop);
    assert.equal(label.top + 60, node.y + node.height / 2);
  }
});
