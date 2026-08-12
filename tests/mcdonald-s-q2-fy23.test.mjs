import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['data/datasets/mcdonald-s-q2-fy23.js']);
  return context.DATASETS.find((entry) => entry.key === 'mcdonald-s-q2-fy23');
}

test("McDonald's Q2 FY23 preserves the Source-painted $43M non-operating face", () => {
  const data = dataset();
  const metric = data.nodes.find((entry) => entry.id === 'non_operating');
  const link = data.links.find(
    (entry) => entry.source === 'non_operating' && entry.target === 'net_profit',
  );

  assert.ok(metric);
  assert.deepEqual(
    { ...data.layout.nodes.non_operating },
    { x: 2137, y: 577, width: 70, height: 1 },
  );
  assert.equal(metric.value, 0.043);
  assert.equal(metric.valueText, '$43M');
  assert.equal(link.sourceWidth, 1);
  assert.equal(link.targetWidth, 4);
  assert.equal(data.nonNodeMetrics, undefined);
});

test("McDonald's Q2 FY23 fixes Source-side interface identity and short terminal faces", () => {
  const data = dataset();
  const revenueInflows = data.links
    .filter((entry) => entry.target === 'revenue')
    .sort((left, right) => left.targetOrder - right.targetOrder);
  const operatingProfitOutflows = data.links
    .filter((entry) => entry.source === 'operating_profit')
    .sort((left, right) => left.sourceOrder - right.sourceOrder);

  assert.deepEqual(
    Array.from(revenueInflows, ({ source }) => source),
    ['company_owned_restaurants', 'franchised_restaurants', 'other_revenue'],
  );
  assert.deepEqual(
    Array.from(operatingProfitOutflows, ({ target, sourceWidth, targetWidth }) => [target, sourceWidth, targetWidth]),
    [
      ['net_profit', 150, 147],
      ['tax', 32, 32],
      ['interest', 20, 20],
    ],
  );
  assert.deepEqual(
    { ...data.layout.nodes.other_revenue },
    { x: 385, y: 1127, width: 71, height: 4 },
  );
  assert.deepEqual(
    { ...data.layout.nodes.depreciation_amortization },
    { x: 2253, y: 1213, width: 71, height: 4 },
  );
});
