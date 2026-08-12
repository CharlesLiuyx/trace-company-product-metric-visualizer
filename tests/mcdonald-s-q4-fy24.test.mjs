import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['data/datasets/mcdonald-s-q4-fy24.js']);
  return context.DATASETS.find((entry) => entry.key === 'mcdonald-s-q4-fy24');
}

test("McDonald's Q4 FY24 keeps value-bearing Other as the native one-pixel face", () => {
  const data = dataset();
  const other = data.nodes.find((entry) => entry.id === 'other_income');

  assert.ok(other, 'Other income must remain a semantic node');
  assert.equal(other.value, 0.049);
  assert.equal(other.valueText, '$49M');
  assert.notEqual(other.color, 'transparent');
  assert.deepEqual(
    { ...data.layout.nodes.other_income },
    { x: 2122, y: 537, width: 70, height: 1 },
  );
  assert.ok(!data.nonNodeMetrics?.some((entry) => entry.id === 'other_income'));
  assert.equal(data.layout.routes?.other_income, undefined);
});

test("McDonald's Q4 FY24 keeps Other on the lower Net profit interface", () => {
  const data = dataset();
  const inflows = data.links
    .filter((entry) => entry.target === 'net_profit')
    .sort((left, right) => left.targetOrder - right.targetOrder);

  assert.deepEqual(
    Array.from(inflows, ({ source, targetOrder, targetWidth }) => [source, targetOrder, targetWidth]),
    [
      ['operating_profit', 0, 120],
      ['other_income', 1, 1],
    ],
  );
  assert.equal(
    inflows.reduce((sum, entry) => sum + entry.targetWidth, 0),
    data.layout.nodes.net_profit.height,
  );
});

test("McDonald's Q4 FY24 preserves the measured Revenue target order", () => {
  const data = dataset();
  const inflows = data.links
    .filter((entry) => entry.target === 'revenue')
    .sort((left, right) => left.targetOrder - right.targetOrder);

  assert.deepEqual(
    Array.from(inflows, ({ source, targetOrder }) => [source, targetOrder]),
    [
      ['company_owned_restaurants', 0],
      ['franchised_restaurants', 1],
      ['other_revenue', 2],
    ],
  );
});
