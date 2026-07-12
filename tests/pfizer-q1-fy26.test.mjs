import test from 'node:test';
import assert from 'node:assert/strict';
import { loadClassicScripts } from './helpers/vm-load.mjs';

function pfizerDataset() {
  const context = loadClassicScripts(['data/datasets/pfizer-q1-fy26.js']);
  return context.DATASETS.find((dataset) => dataset.key === 'pfizer-q1-fy26');
}

test('Pfizer Revenue annotation remains a usable Revenue-node hover target in every locale', () => {
  const dataset = pfizerDataset();
  const annotations = [dataset.annotationsSvg, dataset.i18n.zh.annotationsSvg];

  annotations.forEach((markup) => {
    assert.match(markup, /class="sankey-interactive-annotation" data-node="revenue"/);
    assert.match(markup, /<rect x="1115" y="470" width="260" height="150" fill="#ffffff" fill-opacity="0" pointer-events="all"\/>/);
  });
});

test('Pfizer feedback-marked link interfaces cover their full target or source node faces', () => {
  const dataset = pfizerDataset();
  assert.equal(dataset.render.interfaceAudit.mode, 'error');
  assert.deepEqual(Array.from(dataset.render.interfaceAudit.fullFaceIds), [
    'revenue:left', 'revenue:right',
    'gross_profit:left', 'gross_profit:right',
    'cost_of_sales:left',
    'operating_profit:left', 'operating_profit:right',
    'operating_expenses:left',
  ]);
  const node = Object.fromEntries(dataset.layout.nodes ? Object.entries(dataset.layout.nodes) : []);
  const link = (source, target) => dataset.links.find((item) => item.source === source && item.target === target);

  const costOfSales = link('revenue', 'cost_of_sales');
  assert.equal(costOfSales.targetWidth, node.cost_of_sales.height);
  assert.equal(costOfSales.y1, node.cost_of_sales.y + node.cost_of_sales.height / 2);

  const grossProfitIn = link('revenue', 'gross_profit');
  const grossProfitOut = link('gross_profit', 'operating_profit');
  const grossExpensesOut = link('gross_profit', 'operating_expenses');
  assert.equal(grossProfitIn.targetWidth, node.gross_profit.height);
  assert.equal(grossProfitIn.y1, node.gross_profit.y + node.gross_profit.height / 2);
  assert.equal(grossProfitOut.sourceWidth + grossExpensesOut.sourceWidth, node.gross_profit.height);
  assert.equal(grossProfitOut.y0 + grossProfitOut.sourceWidth / 2, grossExpensesOut.y0 - grossExpensesOut.sourceWidth / 2);

  const operatingProfitIn = link('gross_profit', 'operating_profit');
  const operatingExpensesIn = link('gross_profit', 'operating_expenses');
  assert.equal(operatingProfitIn.targetWidth, node.operating_profit.height);
  assert.equal(operatingProfitIn.y1, node.operating_profit.y + node.operating_profit.height / 2);
  assert.equal(operatingExpensesIn.targetWidth, node.operating_expenses.height);
  assert.equal(operatingExpensesIn.y1, node.operating_expenses.y + node.operating_expenses.height / 2);

  const netProfit = link('operating_profit', 'net_profit');
  const tax = link('operating_profit', 'tax_and_other');
  assert.equal(netProfit.sourceWidth + tax.sourceWidth, node.operating_profit.height);
  assert.equal(netProfit.y0 + netProfit.sourceWidth / 2, tax.y0 - tax.sourceWidth / 2);
});
