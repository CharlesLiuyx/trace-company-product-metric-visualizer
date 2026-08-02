import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['data/datasets/alibaba-q1-fy26.js']);
  return context.DATASETS.find((entry) => entry.key === 'alibaba-q1-fy26');
}

test('Alibaba Q1 FY26 centers the Cloud side label group on its node face', () => {
  const data = dataset();
  const node = data.layout.nodes.cloud;
  const label = data.layout.labels.cloud.blocks[1];
  const labelHeight = 81;

  assert.equal(label.anchor, 'end');
  assert.equal(label.x, node.x);
  assert.equal(label.top + labelHeight / 2, node.y + node.height / 2);
});
