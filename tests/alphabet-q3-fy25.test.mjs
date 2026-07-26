import test from 'node:test';
import assert from 'node:assert/strict';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function alphabetDataset() {
  const context = loadClassicScripts([
    'src/icons.js',
    'data/datasets/alphabet-q3-fy25.js',
  ]);
  return context.DATASETS.find((dataset) => dataset.key === 'alphabet-q3-fy25');
}

test('Alphabet Q3 FY25 Other revenue keeps its user-confirmed 76x2 visible face', () => {
  const dataset = alphabetDataset();
  const node = dataset.nodes.find((candidate) => candidate.id === 'other_revenue');
  const link = dataset.links.find(
    (candidate) =>
      candidate.source === 'other_revenue' && candidate.target === 'revenue'
  );

  assert.deepEqual(
    { ...dataset.layout.nodes.other_revenue },
    { x: 991, y: 1383, width: 76, height: 2 }
  );
  assert.equal(node.value, 0.1);
  assert.equal(node.color, '#fbbc05');
  assert.equal(link.sourceWidth, 2);
  assert.equal(link.y0, 1384);
  assert.equal(link.sourceRoute, undefined);
  assert.equal(dataset.nonNodeMetrics, undefined);
});
