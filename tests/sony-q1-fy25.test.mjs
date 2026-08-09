import test from 'node:test';
import assert from 'node:assert/strict';
import { loadClassicScripts } from './helpers/vm-load.mjs';

function sonyDataset() {
  const context = loadClassicScripts(['data/datasets/sony-q1-fy25.js']);
  return context.DATASETS.find((dataset) => dataset.key === 'sony-q1-fy25');
}

test('Sony Q1 FY25 keeps the two Other income flows attached to their source destinations', () => {
  const dataset = sonyDataset();
  const operatingOtherIncome = dataset.links.find(
    (link) => link.source === 'other_income' && link.target === 'operating_expenses'
  );
  const netOtherIncome = dataset.links.find(
    (link) => link.source === 'other_after_operating' && link.target === 'net_profit'
  );

  assert.ok(operatingOtherIncome);
  assert.ok(netOtherIncome);
  assert.equal(
    dataset.links.some((link) => link.source === 'other_income' && link.target === 'net_profit'),
    false
  );

  const operatingExpenses = dataset.layout.nodes.operating_expenses;
  const grossExpenses = dataset.links.find(
    (link) => link.source === 'gross_profit' && link.target === 'operating_expenses'
  );
  assert.equal(grossExpenses.targetWidth + operatingOtherIncome.targetWidth, operatingExpenses.height);
  assert.equal(grossExpenses.targetOrder, 0);
  assert.equal(operatingOtherIncome.targetOrder, 1);
  assert.equal(
    operatingOtherIncome.y1 - operatingOtherIncome.targetWidth / 2,
    operatingExpenses.y + grossExpenses.targetWidth
  );
  assert.equal(
    operatingOtherIncome.y1 + operatingOtherIncome.targetWidth / 2,
    operatingExpenses.y + operatingExpenses.height
  );
});

test('Sony Q1 FY25 preserves every measured sub-floor Other face', () => {
  const dataset = sonyDataset();
  const expectedHeights = {
    other_revenue: 1,
    other_income: 2,
    other_after_operating: 2,
    other_expenses: 1,
  };

  for (const [nodeId, expectedHeight] of Object.entries(expectedHeights)) {
    const layoutNode = dataset.layout.nodes[nodeId];
    const semanticNode = dataset.nodes.find((node) => node.id === nodeId);
    assert.equal(layoutNode.height, expectedHeight, nodeId);
    assert.notEqual(semanticNode.color.toLowerCase(), dataset.render.background.toLowerCase(), nodeId);
  }
});

test('Sony Q1 FY25 outgoing interfaces cover the Revenue and Gross profit faces continuously', () => {
  const dataset = sonyDataset();
  const widthAtSource = (source) => dataset.links
    .filter((link) => link.source === source)
    .reduce((sum, link) => sum + link.sourceWidth, 0);

  assert.equal(widthAtSource('revenue'), dataset.layout.nodes.revenue.height);
  assert.equal(widthAtSource('gross_profit'), dataset.layout.nodes.gross_profit.height);
});
