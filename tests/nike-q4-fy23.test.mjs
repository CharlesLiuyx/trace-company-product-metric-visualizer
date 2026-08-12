import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['data/datasets/nike-q4-fy23.js']);
  return context.DATASETS.find((entry) => entry.key === 'nike-q4-fy23');
}

test('Nike Q4 FY23 preserves the three Source-painted sub-floor financial faces', () => {
  const data = dataset();
  const nodes = Object.fromEntries(data.nodes.map((entry) => [entry.id, entry]));

  assert.deepEqual({ ...data.layout.nodes.interest }, { x: 2113, y: 546, width: 70, height: 1 });
  assert.deepEqual({ ...data.layout.nodes.tax }, { x: 2235, y: 689, width: 71, height: 2 });
  assert.deepEqual({ ...data.layout.nodes.other }, { x: 2235, y: 780, width: 71, height: 1 });
  assert.equal(nodes.interest.valueText, '$28M');
  assert.equal(nodes.other.valueText, '($3M)');
  assert.notEqual(nodes.interest.color, 'transparent');
  assert.notEqual(nodes.tax.color, 'transparent');
  assert.notEqual(nodes.other.color, 'transparent');
});

test('Nike Q4 FY23 keeps Source-measured order and full interface coverage', () => {
  const data = dataset();
  const operatingOutflows = data.links
    .filter((entry) => entry.source === 'operating_profit')
    .sort((left, right) => left.sourceOrder - right.sourceOrder);
  const netInflows = data.links
    .filter((entry) => entry.target === 'net_profit')
    .sort((left, right) => left.targetOrder - right.targetOrder);

  assert.deepEqual(Array.from(operatingOutflows, (entry) => entry.target), [
    'net_profit',
    'tax',
    'other',
  ]);
  assert.equal(
    operatingOutflows.reduce((sum, entry) => sum + entry.sourceWidth, 0),
    data.layout.nodes.operating_profit.height,
  );
  assert.deepEqual(Array.from(netInflows, (entry) => entry.source), [
    'operating_profit',
    'interest',
  ]);
  assert.equal(
    netInflows.reduce((sum, entry) => sum + entry.targetWidth, 0),
    data.layout.nodes.net_profit.height,
  );
  assert.equal(data.render.interfaceAudit.mode, 'error');
});

test('Nike Q4 FY23 reuses the validated Nike raster cluster', () => {
  const data = dataset();
  assert.deepEqual(
    Array.from(data.rasterAnnotations, (asset) => asset.key),
    [
      'nike-company-logo',
      'nike-business-footwear',
      'nike-business-apparel',
      'nike-business-equipment',
      'nike-business-converse',
    ],
  );
});
