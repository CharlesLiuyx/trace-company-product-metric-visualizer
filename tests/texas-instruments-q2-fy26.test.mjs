import assert from 'node:assert/strict';
import test from 'node:test';
import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['data/datasets/texas-instruments-q2-fy26.js']);
  return context.DATASETS.find((entry) => entry.key === 'texas-instruments-q2-fy26');
}

test('TI Q2 FY26 keeps both Source-visible Other faces', () => {
  const data = dataset();
  const nodes = new Map(data.nodes.map((node) => [node.id, node]));
  const links = data.links.map((link) => `${link.source}->${link.target}`);

  assert.equal(data.layout.nodes.other_income.height, 4);
  assert.equal(data.layout.nodes.other_operating_expense.height, 4);
  assert.equal(nodes.get('other_income').color, '#2ca02c');
  assert.equal(nodes.get('other_operating_expense').color, '#e08585');
  assert.equal(nodes.get('other_operating_expense').valueText, '($17M)');
  assert.ok(links.includes('other_income->net_profit'));
  assert.ok(links.includes('operating_expenses->other_operating_expense'));
});

test('TI Q2 FY26 preserves Source endpoint order', () => {
  const data = dataset();
  const operatingProfitOut = data.links
    .filter((link) => link.source === 'operating_profit')
    .sort((left, right) => left.sourceOrder - right.sourceOrder)
    .map((link) => link.target);
  const operatingExpensesOut = data.links
    .filter((link) => link.source === 'operating_expenses')
    .sort((left, right) => left.sourceOrder - right.sourceOrder)
    .map((link) => link.target);
  const netProfitIn = data.links
    .filter((link) => link.target === 'net_profit')
    .sort((left, right) => left.targetOrder - right.targetOrder)
    .map((link) => link.source);

  assert.deepEqual(Array.from(operatingProfitOut), ['net_profit', 'tax', 'financial']);
  assert.deepEqual(Array.from(operatingExpensesOut), ['rnd', 'sga', 'other_operating_expense']);
  assert.deepEqual(Array.from(netProfitIn), ['operating_profit', 'other_income']);
});
