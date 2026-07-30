import assert from 'node:assert/strict';
import test from 'node:test';
import { loadClassicScripts } from '../scripts/lib/vm-browser.mjs';

function oracleDataset() {
  const context = loadClassicScripts(['data/datasets/oracle-q2-fy26.js']);
  return context.DATASETS.find((dataset) => dataset.key === 'oracle-q2-fy26');
}

test('Oracle Q2 FY26 preserves the Source order at the same-color Net profit inflow', () => {
  const dataset = oracleDataset();
  const operatingProfit = dataset.links.find(
    (link) => link.source === 'operating_profit' && link.target === 'net_profit',
  );
  const otherIncome = dataset.links.find(
    (link) => link.source === 'other_income' && link.target === 'net_profit',
  );

  assert.equal(operatingProfit.targetOrder, 0);
  assert.equal(otherIncome.targetOrder, 1);
  assert.equal(operatingProfit.targetWidth, 100);
  assert.equal(otherIncome.targetWidth, 34);
});

test('Oracle Q2 FY26 keeps the Source-visible two-pixel Services cost face', () => {
  const dataset = oracleDataset();
  assert.deepEqual({ ...dataset.layout.nodes.cor_services }, {
    x: 1769,
    y: 1303,
    width: 70,
    height: 2,
  });
  const servicesCost = dataset.links.find(
    (link) => link.source === 'cost_of_revenue' && link.target === 'cor_services',
  );
  assert.equal(servicesCost.targetWidth, 2);
});
