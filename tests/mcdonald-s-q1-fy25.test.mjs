import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['data/datasets/mcdonald-s-q1-fy25.js']);
  return context.DATASETS.find((entry) => entry.key === 'mcdonald-s-q1-fy25');
}

test("McDonald's Q1 FY25 preserves both Source-painted Other short faces", () => {
  const data = dataset();
  const otherIncome = data.nodes.find((entry) => entry.id === 'operating_other_income');
  const otherOpex = data.nodes.find((entry) => entry.id === 'other_opex');

  assert.ok(otherIncome);
  assert.ok(otherOpex);
  assert.deepEqual(
    { ...data.layout.nodes.operating_other_income },
    { x: 2139, y: 479, width: 70, height: 1 },
  );
  assert.deepEqual(
    { ...data.layout.nodes.other_opex },
    { x: 2250, y: 1261, width: 71, height: 2 },
  );
  assert.notEqual(otherIncome.color, 'transparent');
  assert.notEqual(otherOpex.color, 'transparent');
  assert.ok(!data.nonNodeMetrics?.some((entry) => entry.id === 'operating_other_income' || entry.id === 'other_opex'));
});

test("McDonald's Q1 FY25 fixes per-face Source order and terminal widths", () => {
  const data = dataset();
  const revenueInflows = data.links
    .filter((entry) => entry.target === 'revenue')
    .sort((left, right) => left.targetOrder - right.targetOrder);
  const netInflows = data.links
    .filter((entry) => entry.target === 'net_profit')
    .sort((left, right) => left.targetOrder - right.targetOrder);
  const opexOutflows = data.links
    .filter((entry) => entry.source === 'operating_expenses')
    .sort((left, right) => left.sourceOrder - right.sourceOrder);

  assert.deepEqual(
    Array.from(revenueInflows, ({ source }) => source),
    ['company_owned_restaurants', 'franchised_restaurants', 'other_revenue'],
  );
  assert.deepEqual(
    Array.from(netInflows, ({ source, targetWidth }) => [source, targetWidth]),
    [['operating_profit', 108], ['operating_other_income', 2]],
  );
  assert.deepEqual(
    Array.from(opexOutflows, ({ target, sourceWidth, targetWidth }) => [target, sourceWidth, targetWidth]),
    [
      ['other_sga', 32, 31],
      ['depreciation_amortization', 6, 5],
      ['other_opex', 2, 2],
    ],
  );
});
