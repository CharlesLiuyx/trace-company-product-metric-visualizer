import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function amazonDataset() {
  const context = loadClassicScripts([
    'src/icons.js',
    'data/datasets/amazon-q2-fy26.js',
  ]);
  return context.DATASETS.find((dataset) => dataset.key === 'amazon-q2-fy26');
}

test('Amazon Q2 FY26 preserves the Source-painted Other revenue face', () => {
  const dataset = amazonDataset();
  const node = dataset.nodes.find((item) => item.id === 'other_revenue');
  const link = dataset.links.find(
    (item) => item.source === 'other_revenue' && item.target === 'revenue'
  );

  assert.deepEqual(
    { ...dataset.layout.nodes.other_revenue },
    { x: 389, y: 1349, width: 71, height: 2 }
  );
  assert.equal(node.value, 1.8);
  assert.equal(node.color, '#ff9900');
  assert.equal(link.sourceWidth, 2);
});

test('Amazon Q2 FY26 models Other opex as the Source zero-face flow route', () => {
  const dataset = amazonDataset();
  const metric = dataset.nonNodeMetrics.find((item) => item.id === 'other_opex');
  const link = dataset.links.find(
    (item) => item.source === 'operating_expenses' && item.targetRoute === 'other_opex'
  );

  assert.equal(dataset.nodes.some((item) => item.id === 'other_opex'), false);
  assert.equal(metric.representation, 'flow');
  assert.equal(metric.value, 0.1);
  assert.deepEqual(
    { ...dataset.layout.routes.other_opex },
    { x: 2257, y: 1285, width: 0, height: 2 }
  );
  assert.equal(link.targetWidth, 2);
});

test('Amazon Q2 FY26 keeps Other income above Operating profit at Net profit', () => {
  const dataset = amazonDataset();
  const otherIncome = dataset.links.find(
    (item) => item.source === 'other_income' && item.target === 'net_profit'
  );
  const operatingProfit = dataset.links.find(
    (item) => item.source === 'operating_profit' && item.target === 'net_profit'
  );

  assert.equal(otherIncome.targetOrder, 0);
  assert.equal(operatingProfit.targetOrder, 1);
});

test('Amazon Q2 FY26 keeps the two split profit faces fully occupied', () => {
  const dataset = amazonDataset();
  const outbound = (source) => dataset.links.filter((item) => item.source === source);

  assert.equal(
    outbound('gross_profit').reduce((sum, item) => sum + item.sourceWidth, 0),
    dataset.layout.nodes.gross_profit.height
  );
  assert.equal(
    outbound('operating_profit').reduce((sum, item) => sum + item.sourceWidth, 0),
    dataset.layout.nodes.operating_profit.height
  );
});
