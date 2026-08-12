import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['data/datasets/mcdonald-s-q3-fy23.js']);
  return context.DATASETS.find((entry) => entry.key === 'mcdonald-s-q3-fy23');
}

test("McDonald's Q3 FY23 preserves Source-painted Other and smallest-value faces", () => {
  const data = dataset();

  assert.deepEqual(
    { ...data.layout.nodes.other_revenue },
    { x: 385, y: 1125, width: 71, height: 4 },
  );
  assert.deepEqual(
    { ...data.layout.nodes.depreciation_amortization },
    { x: 2253, y: 1225, width: 71, height: 4 },
  );
  assert.ok(data.nodes.some((entry) => entry.id === 'other_revenue'));
  assert.ok(data.nodes.some((entry) => entry.id === 'depreciation_amortization'));

  assert.ok(!data.nodes.some((entry) => entry.id === 'non_operating_income'));
  assert.deepEqual(
    { ...data.layout.routes.non_operating_income },
    { x: 2022, y: 578, width: 0, height: 2 },
  );
  assert.equal(
    data.nonNodeMetrics.find((entry) => entry.id === 'non_operating_income')?.representation,
    'flow',
  );
});

test("McDonald's Q3 FY23 fixes measured per-face link identity order", () => {
  const data = dataset();
  const revenueInflows = data.links
    .filter((entry) => entry.target === 'revenue')
    .sort((left, right) => left.targetOrder - right.targetOrder);
  const netInflows = data.links
    .filter((entry) => entry.target === 'net_profit')
    .sort((left, right) => left.targetOrder - right.targetOrder);
  const operatingProfitOutflows = data.links
    .filter((entry) => entry.source === 'operating_profit')
    .sort((left, right) => left.sourceOrder - right.sourceOrder);

  assert.deepEqual(
    Array.from(revenueInflows, ({ source, targetWidth }) => [source, targetWidth]),
    [
      ['company_owned_restaurants', 151],
      ['franchised_restaurants', 243],
      ['other_revenue', 4],
    ],
  );
  assert.deepEqual(
    Array.from(netInflows, ({ source, sourceRoute, targetWidth }) => [source || sourceRoute, targetWidth]),
    [
      ['operating_profit', 137],
      ['non_operating_income', 2],
    ],
  );
  assert.deepEqual(
    Array.from(operatingProfitOutflows, ({ target, sourceWidth }) => [target, sourceWidth]),
    [
      ['net_profit', 134],
      ['tax', 35],
      ['interest', 21],
    ],
  );
});
