import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function rivianDataset() {
  const context = loadClassicScripts(['data/datasets/rivian-q1-fy26.js']);
  return context.DATASETS.find((dataset) => dataset.key === 'rivian-q1-fy26');
}

test('Rivian R&D side labels stay vertically centered on the node face', () => {
  const dataset = rivianDataset();
  const node = dataset.layout.nodes.rnd;
  const expectedTop = 476;

  for (const label of [
    dataset.layout.labels.rnd.blocks[0],
    dataset.i18n.zh.layout.labels.rnd.blocks[0],
  ]) {
    assert.equal(label.anchor, 'start');
    assert.equal(label.x, 2356);
    assert.equal(label.top, expectedTop);
    assert.ok(
      Math.abs((label.top + 97.5) - (node.y + node.height / 2)) <= 1,
      'the rendered five-line label union must stay centered on the R&D face'
    );
  }
});
