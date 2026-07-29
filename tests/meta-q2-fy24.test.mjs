import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts([
    'src/icons.js',
    'data/datasets/meta-q2-fy24.js',
  ]);
  return context.DATASETS.find((entry) => entry.key === 'meta-q2-fy24');
}

test('Meta Q2 FY24 preserves Source-measured same-color interface identity order', () => {
  const data = dataset();
  const orderedSources = (target) => data.links
    .filter((link) => link.target === target)
    .sort((left, right) => left.targetOrder - right.targetOrder)
    .map((link) => link.source || link.sourceRoute);
  const orderedTargets = (source) => data.links
    .filter((link) => link.source === source)
    .sort((left, right) => left.sourceOrder - right.sourceOrder)
    .map((link) => link.target);

  assert.deepEqual(Array.from(orderedSources('family_of_apps')), [
    'advertising',
    'other_revenue',
  ]);
  assert.deepEqual(Array.from(orderedSources('revenue')), [
    'family_of_apps',
    'reality_labs',
  ]);
  assert.deepEqual(Array.from(orderedSources('net_profit')), [
    'operating_profit',
    'interest',
  ]);
  assert.deepEqual(Array.from(orderedTargets('operating_expenses')), [
    'rnd',
    'ga',
    'sm',
  ]);
});

test('Meta Q2 FY24 keeps both Source-visible 3px faces painted', () => {
  const data = dataset();

  assert.deepEqual(
    ['other_revenue', 'reality_labs'].map((id) => ({
      id,
      height: data.layout.nodes[id].height,
      painted: data.nodes.find((node) => node.id === id).color !== 'transparent',
    })),
    [
      { id: 'other_revenue', height: 3, painted: true },
      { id: 'reality_labs', height: 3, painted: true },
    ],
  );
});

test('Meta Q2 FY24 keeps zero-paint values as semantic non-node metrics', () => {
  const data = dataset();
  const metrics = data.nonNodeMetrics.map(({ id, representation, value }) => ({
    id,
    representation,
    value,
  }));

  assert.deepEqual(Array.from(metrics), [
    { id: 'foa_operating_profit', representation: 'annotation', value: 19.3 },
    {
      id: 'reality_labs_operating_loss',
      representation: 'annotation',
      value: -4.5,
    },
    { id: 'interest', representation: 'flow', value: 0.3 },
  ]);
  assert.match(data.annotationsSvg, /data-node="foa_operating_profit"/);
  assert.match(data.annotationsSvg, /data-node="reality_labs_operating_loss"/);
  assert.match(data.annotationsSvg, /data-node="interest"/);
  assert.match(data.annotationsSvg, /data-link-numerator="interest"/);
  assert.match(data.annotationsSvg, /data-link-denominator="net_profit"/);
});
