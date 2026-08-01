import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['data/datasets/asml-q4-fy24.js']);
  return context.DATASETS.find((entry) => entry.key === 'asml-q4-fy24');
}

test('ASML Q4 FY24 preserves the Source-visible Other gains face and label slot', () => {
  const data = dataset();
  const node = data.layout.nodes.other_gains;
  const label = data.layout.labels.other_gains.blocks[0];

  assert.deepEqual(
    { x: node.x, y: node.y, width: node.width, height: node.height },
    { x: 2192, y: 587, width: 74, height: 4 },
  );
  assert.equal(data.nonNodeMetrics, undefined);
  assert.equal(label.anchor, 'middle');
  assert.equal(label.x, node.x + node.width / 2);
  assert.equal(label.top, 606);
  assert.ok(label.top > node.y + node.height);
});

test('ASML Q4 FY24 joins Other gains to the bottom of the Net profit face', () => {
  const data = dataset();
  const main = data.links.find(
    (entry) => entry.source === 'operating_profit' && entry.target === 'net_profit',
  );
  const other = data.links.find(
    (entry) => entry.source === 'other_gains' && entry.target === 'net_profit',
  );

  assert.deepEqual(
    [main.targetOrder, main.targetWidth, main.y1],
    [0, 101, 470.5],
  );
  assert.deepEqual(
    [other.sourceWidth, other.targetWidth, other.y0, other.y1, other.targetOrder],
    [4, 4, 589, 523, 1],
  );
  assert.equal(main.y1 + main.targetWidth / 2, 521);
  assert.equal(other.y1 - other.targetWidth / 2, 521);
  assert.equal(other.y1 + other.targetWidth / 2, 525);
});
