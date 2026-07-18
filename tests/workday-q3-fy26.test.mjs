import test from 'node:test';
import assert from 'node:assert/strict';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function workdayDataset() {
  const context = loadClassicScripts(['data/datasets/workday-q3-fy26.js']);
  return context.DATASETS.find((dataset) => dataset.key === 'workday-q3-fy26');
}

test('Workday Restructuring keeps its user-confirmed 71x2 terminal face', () => {
  const dataset = workdayDataset();
  const node = dataset.nodes.find((item) => item.id === 'restructuring');
  const link = dataset.links.find(
    (item) => item.source === 'operating_expenses' && item.target === 'restructuring'
  );

  assert.deepEqual(
    { ...dataset.layout.nodes.restructuring },
    { x: 2235, y: 1289, width: 71, height: 2 }
  );
  assert.equal(node.value, 0.005);
  assert.equal(node.color, '#cfaaaa');
  assert.equal(link.targetWidth, 2);
  assert.equal(link.targetRoute, undefined);
});
