import test from 'node:test';
import assert from 'node:assert/strict';
import { loadClassicScripts } from './helpers/vm-load.mjs';

function amgenDataset() {
  const context = loadClassicScripts(['data/datasets/amgen-q1-fy26.js']);
  return context.DATASETS.find((dataset) => dataset.key === 'amgen-q1-fy26');
}

test('Amgen Other income terminates at the Operating expenses face', () => {
  const dataset = amgenDataset();
  const node = dataset.layout.nodes.operating_expenses;
  const grossExpenses = dataset.links.find(
    (link) => link.source === 'gross_profit' && link.target === 'operating_expenses'
  );
  const otherIncome = dataset.links.find(
    (link) => link.source === 'other_income' && link.target === 'operating_expenses'
  );

  assert.ok(otherIncome);
  assert.equal(
    dataset.links.some((link) => link.source === 'other_income' && link.target === 'net_profit'),
    false
  );
  assert.equal(grossExpenses.targetWidth + otherIncome.targetWidth, node.height);
  assert.equal(
    grossExpenses.y1 + grossExpenses.targetWidth / 2,
    otherIncome.y1 - otherIncome.targetWidth / 2
  );
  assert.equal(otherIncome.y1 + otherIncome.targetWidth / 2, node.y + node.height);

  const netProfitNode = dataset.layout.nodes.net_profit;
  const netProfitLink = dataset.links.find(
    (link) => link.source === 'operating_profit' && link.target === 'net_profit'
  );
  assert.equal(netProfitLink.targetWidth, netProfitNode.height);
  assert.equal(netProfitLink.y1, netProfitNode.y + netProfitNode.height / 2);
});

test('Amgen Operating expenses labels share the node centre axis in every locale', () => {
  const dataset = amgenDataset();
  const centreX = dataset.layout.nodes.operating_expenses.x
    + dataset.layout.nodes.operating_expenses.width / 2;
  const labelXs = [
    dataset.layout.labels.operating_expenses.blocks[0].x,
    dataset.i18n.zh.layout.labels.operating_expenses.blocks[0].x,
  ];

  labelXs.forEach((x) => assert.ok(Math.abs(x - centreX) <= 0.5));
});
