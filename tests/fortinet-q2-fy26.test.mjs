import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['data/datasets/fortinet-q2-fy26.js']);
  return context.DATASETS.find((entry) => entry.key === 'fortinet-q2-fy26');
}

test('Fortinet Q2 FY26 preserves the Source-visible Other and G&A short faces', () => {
  const data = dataset();

  assert.deepEqual(
    { ...data.layout.nodes.other },
    { x: 2110, y: 470, width: 70, height: 4 },
  );
  assert.deepEqual(
    { ...data.layout.nodes.ga },
    { x: 2234, y: 1240, width: 71, height: 8 },
  );
  assert.equal(data.nodes.find((node) => node.id === 'other').value, 32);
  assert.equal(data.nodes.find((node) => node.id === 'ga').value, 61);
  assert.equal(data.links.find((link) => link.source === 'other').sourceWidth, 4);
  assert.equal(data.links.find((link) => link.target === 'ga').targetWidth, 8);
});

test('Fortinet Q2 FY26 keeps zero-face Other income as flow geometry', () => {
  const data = dataset();
  const otherIncome = data.nonNodeMetrics.find((metric) => metric.id === 'other_income');
  const link = data.links.find((item) => item.sourceRoute === 'other_income');

  assert.equal(data.nodes.some((node) => node.id === 'other_income'), false);
  assert.deepEqual(
    { representation: otherIncome.representation, value: otherIncome.value, valueText: otherIncome.valueText },
    { representation: 'flow', value: 1, valueText: '$1M' },
  );
  assert.deepEqual(
    { ...data.layout.routes.other_income },
    { x: 1553, y: 984, width: 77, height: 1 },
  );
  assert.equal(link.target, 'operating_expenses');
  assert.equal(link.interactionOnly, true);
  assert.match(data.annotationsSvg, /data-node="other_income"/);
});

test('Fortinet Q2 FY26 preserves Source endpoint identity order', () => {
  const data = dataset();
  const revenueIn = data.links
    .filter((link) => link.target === 'revenue')
    .sort((left, right) => left.targetOrder - right.targetOrder)
    .map((link) => link.source);
  const netProfitIn = data.links
    .filter((link) => link.target === 'net_profit')
    .sort((left, right) => left.targetOrder - right.targetOrder)
    .map((link) => link.source);

  assert.deepEqual(Array.from(revenueIn), ['product', 'service']);
  assert.deepEqual(Array.from(netProfitIn), ['operating_profit', 'other']);
});
