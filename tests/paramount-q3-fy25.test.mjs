import test from 'node:test';
import assert from 'node:assert/strict';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function paramountDataset() {
  const context = loadClassicScripts(['data/datasets/paramount-q3-fy25.js']);
  return context.DATASETS.find((dataset) => dataset.key === 'paramount-q3-fy25');
}

test('Paramount Eliminations keeps its Source-visible 71x2 terminal face', () => {
  const dataset = paramountDataset();
  const node = dataset.nodes.find((item) => item.id === 'eliminations');
  const link = dataset.links.find(
    (item) => item.source === 'segment_revenue' && item.target === 'eliminations'
  );

  assert.deepEqual(
    { ...dataset.layout.nodes.eliminations },
    { x: 1379, y: 1149, width: 71, height: 2 }
  );
  assert.equal(node.value, -0.017);
  assert.equal(node.color, '#e18585');
  assert.equal(link.targetWidth, 2);
  assert.equal(link.y1, 1150);
  assert.equal(link.curve.x1, 1379);
});

test('Paramount Net profit keeps Tax as its bottom target interface', () => {
  const dataset = paramountDataset();
  const tax = dataset.links.find(
    (item) => item.source === 'tax_benefit' && item.target === 'net_profit'
  );
  const operatingProfit = dataset.links.find(
    (item) => item.source === 'operating_profit' && item.target === 'net_profit'
  );

  assert.deepEqual(
    {
      operatingProfit: {
        targetOrder: operatingProfit.targetOrder,
        targetWidth: operatingProfit.targetWidth,
        y1: operatingProfit.y1,
      },
      tax: {
        targetOrder: tax.targetOrder,
        targetWidth: tax.targetWidth,
        y1: tax.y1,
      },
    },
    {
      operatingProfit: { targetOrder: 0, targetWidth: 4, y1: 443 },
      tax: { targetOrder: 1, targetWidth: 3, y1: 446.5 },
    }
  );
});
