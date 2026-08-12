import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['data/datasets/nike-q4-fy24.js']);
  return context.DATASETS.find((entry) => entry.key === 'nike-q4-fy24');
}

test('Nike Q4 FY24 preserves the three Source-painted short financial faces', () => {
  const data = dataset();
  const nodes = Object.fromEntries(data.nodes.map((entry) => [entry.id, entry]));

  assert.deepEqual({ ...data.layout.nodes.other }, { x: 2090, y: 349, width: 70, height: 1 });
  assert.deepEqual({ ...data.layout.nodes.interest }, { x: 2095, y: 496, width: 70, height: 3 });
  assert.deepEqual({ ...data.layout.nodes.tax }, { x: 2224, y: 669, width: 71, height: 4 });
  assert.equal(nodes.other.value, 0.1);
  assert.equal(nodes.interest.value, 0.1);
  assert.equal(nodes.tax.value, 0.2);
  assert.notEqual(nodes.other.color, 'transparent');
  assert.notEqual(nodes.interest.color, 'transparent');
  assert.notEqual(nodes.tax.color, 'transparent');
});

test('Nike Q4 FY24 keeps the Source-measured net-profit interface order', () => {
  const data = dataset();
  const netInflows = data.links
    .filter((entry) => entry.target === 'net_profit')
    .sort((left, right) => left.targetOrder - right.targetOrder);

  assert.deepEqual(Array.from(netInflows, (entry) => entry.source), [
    'other',
    'operating_profit',
    'interest',
  ]);
  assert.equal(
    netInflows.reduce((sum, entry) => sum + entry.targetWidth, 0),
    data.layout.nodes.net_profit.height,
  );
  assert.equal(data.render.interfaceAudit.mode, 'error');
});

test('Nike Q4 FY24 reuses the complete validated Nike asset cluster', () => {
  const data = dataset();

  assert.deepEqual(
    Array.from(data.rasterAnnotations, (asset) => asset.key),
    [
      'nike-company-logo',
      'nike-business-footwear',
      'nike-business-apparel',
      'nike-business-equipment',
      'nike-business-converse-q2-fy26',
    ],
  );
});
