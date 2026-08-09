import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['data/datasets/costco-q1-fy26.js']);
  return context.DATASETS.find((entry) => entry.key === 'costco-q1-fy26');
}

test('Costco Q1 FY26 keeps the user-approved Interest label 5px below its face', () => {
  const data = dataset();
  const node = data.layout.nodes.interest;
  const enLabel = data.layout.labels.interest.blocks[0];

  assert.deepEqual(
    { x: node.x, y: node.y, width: node.width, height: node.height },
    { x: 2138, y: 403, width: 72, height: 1 },
  );
  assert.equal(enLabel.anchor, 'middle');
  assert.equal(enLabel.x, node.x + node.width / 2);
  // The rendered Arial em bbox starts 2px above the authored block top, so
  // +7 here yields the user-approved 5px visible edge gap in Chromium.
  assert.equal(enLabel.top, node.y + node.height + 7);
});
