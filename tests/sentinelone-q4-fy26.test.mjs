import test from 'node:test';
import assert from 'node:assert/strict';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function sentinelOneDataset() {
  const context = loadClassicScripts(['data/datasets/sentinelone-q4-fy26.js']);
  return context.DATASETS.find((dataset) => dataset.key === 'sentinelone-q4-fy26');
}

test('SentinelOne Q4 FY26 keeps the Source-visible 71x2 restructuring face', () => {
  const dataset = sentinelOneDataset();
  const node = dataset.nodes.find((item) => item.id === 'restructuring');
  const link = dataset.links.find(
    (item) => item.source === 'operating_expenses' && item.target === 'restructuring'
  );

  assert.deepEqual(
    { ...dataset.layout.nodes.restructuring },
    { x: 2233, y: 1279, width: 71, height: 2 }
  );
  assert.equal(node.value, 3);
  assert.equal(node.color, '#cc0000');
  assert.equal(link.targetWidth, 2);
  assert.equal(link.targetRoute, undefined);
});
