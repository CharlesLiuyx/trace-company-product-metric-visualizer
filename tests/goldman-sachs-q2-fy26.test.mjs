import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['data/datasets/goldman-sachs-q2-fy26.js']);
  return context.DATASETS.find((entry) => entry.key === 'goldman-sachs-q2-fy26');
}

test('Goldman Sachs Q2 FY26 preserves the Source-visible Platform Solutions face', () => {
  const data = dataset();
  const node = data.layout.nodes.platform_solutions;
  const link = data.links.find(
    (entry) => entry.source === 'platform_solutions' && entry.target === 'revenue',
  );

  assert.deepEqual(
    { x: node.x, y: node.y, width: node.width, height: node.height },
    { x: 392, y: 1080, width: 71, height: 3 },
  );
  assert.ok(data.nodes.some((entry) => entry.id === 'platform_solutions'));
  assert.ok(!data.nonNodeMetrics.some((entry) => entry.id === 'platform_solutions'));
  assert.deepEqual(
    [link.sourceWidth, link.targetWidth, link.targetOrder, link.interactionOnly],
    [3, 3, 2, undefined],
  );
});

test('Goldman Sachs Q2 FY26 keeps the right expense labels on one center axis', () => {
  const data = dataset();
  const ids = [
    'compensation_benefits',
    'transaction_based',
    'market_development',
    'communication_technology',
    'da',
    'occupancy',
    'professional_fees',
    'other',
  ];

  [data.layout.labels, data.i18n.zh.layout.labels].forEach((labels) => {
    ids.forEach((id) => {
      const block = labels[id].blocks[0];
      assert.equal(block.x, 2497, `${id} center axis drifted`);
      assert.equal(block.anchor, 'middle', `${id} lost centered alignment`);
    });
  });
});
