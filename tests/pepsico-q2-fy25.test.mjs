import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['data/datasets/pepsico-q2-fy25.js']);
  return context.DATASETS.find((entry) => entry.key === 'pepsico-q2-fy25');
}

test('PepsiCo Q2 FY25 preserves the zero-face Other income guide and short Interest face', () => {
  const current = dataset();
  const otherIncome = current.nonNodeMetrics.find((item) => item.id === 'other_income');
  const otherLink = current.links.find((item) => item.sourceRoute === 'other_income');

  assert.equal(current.nodes.some((item) => item.id === 'other_income'), false);
  assert.deepEqual(
    { representation: otherIncome.representation, value: otherIncome.value, valueText: otherIncome.valueText },
    { representation: 'flow', value: 0.042, valueText: '$42M' }
  );
  assert.deepEqual({ ...current.layout.routes.other_income }, { x: 2216, y: 443, width: 0, height: 1 });
  assert.equal(otherLink.target, 'net_profit');
  assert.equal(otherLink.targetOrder, 1);
  assert.equal(current.layout.nodes.interest.height, 2);
  assert.equal(current.nodes.find((item) => item.id === 'apac').valueText, '$1.0B');
});

test('PepsiCo Q2 FY25 preserves measured multi-link face identity order', () => {
  const current = dataset();
  const sourcesAt = (target) => current.links
    .filter((link) => link.target === target)
    .sort((left, right) => left.targetOrder - right.targetOrder)
    .map((link) => link.sourceRoute || link.source);
  const targetsFrom = (source) => current.links
    .filter((link) => link.source === source)
    .sort((left, right) => left.sourceOrder - right.sourceOrder)
    .map((link) => link.targetRoute || link.target);

  assert.deepEqual(Array.from(sourcesAt('north_america')), ['foods', 'pepsico_beverages']);
  assert.deepEqual(Array.from(sourcesAt('revenue')), [
    'north_america', 'ib_franchise', 'latam', 'emea', 'apac',
  ]);
  assert.deepEqual(Array.from(sourcesAt('net_profit')), ['operating_profit', 'other_income']);
  assert.deepEqual(Array.from(targetsFrom('operating_profit')), ['net_profit', 'tax', 'interest']);
  assert.deepEqual(Array.from(targetsFrom('operating_expenses')), ['sga', 'impairment']);
});

test('PepsiCo Q2 FY25 reuses the validated PepsiCo raster cluster', () => {
  const current = dataset();
  assert.equal(current.render.interfaceAudit.mode, 'error');
  assert.deepEqual(Array.from(current.rasterAnnotations, (asset) => asset.key), [
    'pepsico-company-logo',
    'pepsico-foods-lays-quaker',
    'pepsico-beverages-pepsi',
    'pepsico-ib-sodastream-q2-fy26',
    'pepsico-revenue-globe',
    'pepsico-globe-north-america',
    'pepsico-globe-latam',
    'pepsico-globe-emea',
    'pepsico-globe-apac',
  ]);
});
