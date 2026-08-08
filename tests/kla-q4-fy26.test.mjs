import test from 'node:test';
import assert from 'node:assert/strict';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function klaDataset() {
  const context = loadClassicScripts(['data/datasets/kla-q4-fy26.js']);
  return context.DATASETS.find((dataset) => dataset.key === 'kla-q4-fy26');
}

test('KLA Q4 Other is a net expense with one source-faithful semantic guide', () => {
  const dataset = klaDataset();
  const metric = dataset.nonNodeMetrics.find((item) => item.id === 'other_expense');
  const link = dataset.links.find(
    (item) => item.source === 'operating_profit' && item.targetRoute === 'other_expense'
  );

  assert.equal(metric.type, 'cost');
  assert.equal(metric.value, 0.004563);
  assert.equal(metric.valueText, '$5M');
  assert.ok(link, 'Other expense is deducted from operating profit');
  assert.equal(link.interactionOnly, true, 'the annotation owns the only visible guide');

  for (const markup of [dataset.annotationsSvg, dataset.i18n.zh.annotationsSvg]) {
    assert.equal((markup.match(/<path\b/g) || []).length, 1);
    assert.match(markup, /data-link-anchor-x="2077"/);
    assert.match(markup, /data-link-anchor-y="536"/);
    assert.match(markup, /<text x="2260" y="544"[^>]*font-weight="800"/);
    assert.match(markup, /<text x="2260" y="586"[^>]*font-weight="400"/);
  }
});

test('KLA Q4 preserves the five-pixel Other revenue face', () => {
  const dataset = klaDataset();
  const face = dataset.layout.nodes.other_revenue;
  assert.equal(face.x, 462);
  assert.equal(face.y, 1326);
  assert.equal(face.width, 71);
  assert.equal(face.height, 5);
  assert.equal(dataset.nodes.find((node) => node.id === 'other_revenue').value, 0.023897);
});
