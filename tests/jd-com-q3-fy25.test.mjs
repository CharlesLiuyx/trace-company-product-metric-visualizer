import test from 'node:test';
import assert from 'node:assert/strict';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function jdDataset() {
  const context = loadClassicScripts(['data/datasets/jd-com-q3-fy25.js']);
  return context.DATASETS.find((dataset) => dataset.key === 'jd-com-q3-fy25');
}

test('JD.com Operating loss keeps its user-confirmed 72x2 visible face', () => {
  const dataset = jdDataset();
  const node = dataset.nodes.find((item) => item.id === 'operating_loss');
  const link = dataset.links.find(
    (item) => item.source === 'operating_loss' && item.target === 'operating_expenses'
  );

  assert.deepEqual(
    { ...dataset.layout.nodes.operating_loss },
    { x: 1777, y: 788, width: 72, height: 2 }
  );
  assert.equal(node.value, -0.1);
  assert.equal(node.color, '#cc0000');
  assert.equal(link.sourceWidth, 2);
  assert.equal(link.y0, 789);
  assert.equal(link.curve.x0, 1849);
});
