import test from 'node:test';
import assert from 'node:assert/strict';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function aristaDataset() {
  const context = loadClassicScripts(['data/datasets/arista-q2-fy25.js']);
  return context.DATASETS.find((dataset) => dataset.key === 'arista-q2-fy25');
}

test('Arista Q2 FY25 keeps the Source-visible 71x2 G&A face', () => {
  const dataset = aristaDataset();
  const node = dataset.nodes.find((item) => item.id === 'ga');
  const link = dataset.links.find(
    (item) => item.source === 'operating_expenses' && item.target === 'ga'
  );

  assert.deepEqual(
    { ...dataset.layout.nodes.ga },
    { x: 2235, y: 1258, width: 71, height: 2 }
  );
  assert.equal(node.value, 0.0294);
  assert.equal(node.color, undefined);
  assert.equal(link.targetWidth, 2);
  assert.equal(link.y1, 1259);
  assert.equal(link.targetRoute, undefined);
});

test('Arista Q2 FY25 keeps Other as an independent Net profit inflow', () => {
  const dataset = aristaDataset();
  const other = dataset.links.find(
    (item) => item.source === 'other_income' && item.target === 'net_profit'
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
      other: {
        targetOrder: other.targetOrder,
        targetWidth: other.targetWidth,
        y1: other.y1,
      },
    },
    {
      operatingProfit: { targetOrder: 0, targetWidth: 121, y1: 463.5 },
      other: { targetOrder: 1, targetWidth: 14, y1: 531 },
    }
  );
});
