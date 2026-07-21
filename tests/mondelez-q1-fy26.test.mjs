import test from 'node:test';
import assert from 'node:assert/strict';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['data/datasets/mondelez-q1-fy26.js']);
  return context.DATASETS.find((entry) => entry.key === 'mondelez-q1-fy26');
}

test('Mondelēz Q1 FY26 keeps zero-face Other income as flow geometry', () => {
  const data = dataset();
  const otherIncome = data.nonNodeMetrics.find((item) => item.id === 'other_income');
  const link = data.links.find((item) => item.sourceRoute === 'other_income');

  assert.equal(data.nodes.some((item) => item.id === 'other_income'), false);
  assert.deepEqual(
    { representation: otherIncome.representation, value: otherIncome.value, valueText: otherIncome.valueText },
    { representation: 'flow', value: 0.048, valueText: '$48M' }
  );
  assert.deepEqual({ ...data.layout.routes.other_income }, { x: 2218, y: 325, width: 0, height: 1 });
  assert.equal(link.target, 'net_profit');
});

test('Mondelēz Q1 FY26 preserves Source endpoint identity order', () => {
  const data = dataset();
  const revenueIn = data.links
    .filter((link) => link.target === 'revenue')
    .sort((left, right) => left.targetOrder - right.targetOrder)
    .map((link) => link.source);
  const netProfitIn = data.links
    .filter((link) => link.target === 'net_profit')
    .sort((left, right) => left.targetOrder - right.targetOrder)
    .map((link) => link.sourceRoute || link.source);

  assert.deepEqual(Array.from(revenueIn), [
    'biscuits_baked_snacks',
    'chocolate',
    'gum_candy',
    'beverages',
    'cheese_grocery',
  ]);
  assert.deepEqual(Array.from(netProfitIn), ['other_income', 'operating_profit']);
});
