import test from 'node:test';
import assert from 'node:assert/strict';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function geVernovaDataset() {
  const context = loadClassicScripts(['data/datasets/ge-vernova-q1-fy26.js']);
  return context.DATASETS.find((dataset) => dataset.key === 'ge-vernova-q1-fy26');
}

test('GE Vernova Eliminations keeps its user-confirmed 71x1 terminal face', () => {
  const dataset = geVernovaDataset();
  const node = dataset.nodes.find((item) => item.id === 'eliminations');
  const link = dataset.links.find(
    (item) => item.source === 'gross_segment_revenue' && item.target === 'eliminations'
  );

  assert.deepEqual(
    { ...dataset.layout.nodes.eliminations },
    { x: 1134, y: 1167, width: 71, height: 1 }
  );
  assert.equal(node.value, -0.023);
  assert.equal(node.color, '#e08585');
  assert.equal(link.targetWidth, 1);
  assert.equal(link.y1, 1167.5);
  assert.equal(link.targetRoute, undefined);
  assert.equal(dataset.nonNodeMetrics, undefined);
});
