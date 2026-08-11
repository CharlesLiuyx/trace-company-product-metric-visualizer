import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['data/datasets/uber-q3-fy23.js']);
  return context.DATASETS.find((entry) => entry.key === 'uber-q3-fy23');
}

test('Uber Q3 FY23 keeps the Source-painted Tax benefit face and measured label position', () => {
  const data = dataset();
  const tax = data.nodes.find((entry) => entry.id === 'tax_benefit');

  assert.ok(tax, 'Tax benefit must remain a semantic node');
  assert.equal(tax.value, 0.04);
  assert.equal(tax.valueText, '$40M');
  assert.notEqual(tax.color, 'transparent');
  assert.deepEqual(
    { ...data.layout.nodes.tax_benefit },
    { x: 2077, y: 458, width: 72, height: 3 },
  );
  assert.deepEqual(
    { x: data.layout.labels.tax_benefit.blocks[0].x, top: data.layout.labels.tax_benefit.blocks[0].top },
    { x: 2116, top: 469 },
  );
  assert.ok(!data.nonNodeMetrics?.some((entry) => entry.id === 'tax_benefit'));
  assert.equal(data.layout.routes?.tax_benefit, undefined);
});

test('Uber Q3 FY23 connects the short Tax benefit face to the lower Net profit interface', () => {
  const data = dataset();
  const inflows = data.links
    .filter((entry) => entry.target === 'net_profit')
    .sort((left, right) => left.targetOrder - right.targetOrder);

  assert.deepEqual(
    Array.from(inflows, ({ source, sourceWidth, targetWidth }) => [source, sourceWidth, targetWidth]),
    [
      ['operating_profit', 7, 7],
      ['tax_benefit', 3, 3],
    ],
  );
  assert.equal(
    inflows.reduce((sum, entry) => sum + entry.targetWidth, 0),
    data.layout.nodes.net_profit.height,
  );
});
