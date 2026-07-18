import test from 'node:test';
import assert from 'node:assert/strict';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function doceboDataset() {
  const context = loadClassicScripts(['data/datasets/docebo-q3-fy25.js']);
  return context.DATASETS.find((dataset) => dataset.key === 'docebo-q3-fy25');
}

test('Docebo Other keeps its user-confirmed 71x2 visible face and one value label', () => {
  const dataset = doceboDataset();
  const node = dataset.nodes.find((item) => item.id === 'other');
  const link = dataset.links.find(
    (item) => item.source === 'other' && item.target === 'net_profit'
  );
  const otherAnnotationValues = dataset.annotationsSvg.match(/>\$0\.2M</g) || [];

  assert.deepEqual(
    { ...dataset.layout.nodes.other },
    { x: 2114, y: 394, width: 71, height: 2 }
  );
  assert.equal(node.value, 0.198);
  assert.equal(node.valueText, '$0.198M');
  assert.equal(node.color, '#2ca02c');
  assert.equal(link.sourceWidth, 2);
  assert.equal(link.y0, 395);
  assert.equal(link.sourceRoute, undefined);
  assert.equal(dataset.nonNodeMetrics, undefined);
  assert.equal(dataset.layout.labels.other.blocks.length, 0);
  assert.equal(otherAnnotationValues.length, 1);
  assert.match(dataset.annotationsSvg, /data-node=["']other["']/);
});
