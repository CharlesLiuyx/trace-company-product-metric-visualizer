import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['data/datasets/tencent-q4-fy24.js']);
  return context.DATASETS.find((entry) => entry.key === 'tencent-q4-fy24');
}

function orderedTargets(data, source) {
  return data.links
    .filter((link) => link.source === source)
    .sort((left, right) => left.sourceOrder - right.sourceOrder)
    .map((link) => link.target);
}

function orderedSources(data, target) {
  return data.links
    .filter((link) => link.target === target)
    .sort((left, right) => left.targetOrder - right.targetOrder)
    .map((link) => link.source || link.sourceRoute);
}

test('Tencent Q4 FY24 preserves Source order at every multi-link face', () => {
  const data = dataset();

  assert.deepEqual(Array.from(orderedSources(data, 'revenue')), [
    'gaming',
    'social_networks',
    'marketing_services',
    'fintech_business_services',
    'others',
  ]);
  assert.deepEqual(Array.from(orderedTargets(data, 'revenue')), ['gross_profit', 'cost_of_revenue']);
  assert.deepEqual(Array.from(orderedTargets(data, 'gross_profit')), ['operating_profit', 'operating_expenses']);
  assert.deepEqual(Array.from(orderedSources(data, 'operating_profit')), [
    'gross_profit',
    'other_operating_gains',
  ]);
  assert.deepEqual(Array.from(orderedTargets(data, 'operating_profit')), ['net_profit', 'tax']);
  assert.deepEqual(Array.from(orderedTargets(data, 'operating_expenses')), ['rnd', 'ga', 'sm']);
});

test('Tencent Q4 FY24 keeps Others visible and Other gains non-node', () => {
  const data = dataset();
  const others = data.nodes.find((node) => node.id === 'others');
  const otherGains = data.nonNodeMetrics.find((metric) => metric.id === 'other_operating_gains');
  const otherGainsLink = data.links.find((link) => link.sourceRoute === 'other_operating_gains');

  assert.equal(data.layout.nodes.others.width, 67);
  assert.equal(data.layout.nodes.others.height, 6);
  assert.equal(others.value, 2.3);
  assert.equal(data.nodes.some((node) => node.id === 'other_operating_gains'), false);
  assert.equal(otherGains.representation, 'flow');
  assert.equal(otherGains.value, 2.5);
  assert.deepEqual({ ...data.layout.routes.other_operating_gains }, {
    x: 1767,
    y: 584.5,
    width: 0,
    height: 1,
  });
  assert.equal(otherGainsLink.target, 'operating_profit');
  assert.equal(otherGainsLink.targetOrder, 1);
  assert.equal(otherGainsLink.interactionOnly, true);
  assert.equal(otherGainsLink.sourceWidth, 0);
  assert.equal(otherGainsLink.targetWidth, 0);
  for (const markup of [data.annotationsSvg, data.i18n.zh.annotationsSvg]) {
    assert.equal((markup.match(/data-node="other_operating_gains"/g) || []).length, 1);
  }
});

test('Tencent Q4 FY24 preserves the Source decimal on Marketing services', () => {
  const data = dataset();
  const marketing = data.nodes.find((node) => node.id === 'marketing_services');

  assert.equal(marketing.value, 35);
  assert.equal(marketing.valueText, '35.0B');
});
