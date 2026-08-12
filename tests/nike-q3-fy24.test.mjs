import assert from 'node:assert/strict';
import test from 'node:test';
import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['data/datasets/nike-q3-fy24.js']);
  return context.DATASETS.find((entry) => entry.key === 'nike-q3-fy24');
}

test('Nike Q3 FY24 keeps Interest and Other as measured zero-face flows', () => {
  const current = dataset();
  const nodeIds = new Set(current.nodes.map((node) => node.id));
  const metrics = new Map(current.nonNodeMetrics.map((metric) => [metric.id, metric]));

  assert.equal(nodeIds.has('interest'), false);
  assert.equal(nodeIds.has('other'), false);
  assert.equal(metrics.get('interest').valueText, '$52M');
  assert.equal(metrics.get('other').valueText, '$16M');
  assert.match(current.annotationsSvg, /data-node="interest"/);
  assert.match(current.annotationsSvg, /data-node="other"/);
  assert.equal(current.layout.nodes.tax.height, 3);
});

test('Nike Q3 FY24 preserves Source face order at multi-link interfaces', () => {
  const current = dataset();
  const links = new Map(current.links.map((link) => [
    `${link.source || link.sourceRoute}->${link.target}`,
    link,
  ]));

  assert.deepEqual(
    ['footwear', 'apparel', 'equipment', 'converse'].map((id) => links.get(`${id}->revenue`).targetOrder),
    [0, 1, 2, 3],
  );
  assert.deepEqual(
    ['interest', 'operating_profit', 'other'].map((id) => links.get(`${id}->net_profit`).targetOrder),
    [0, 1, 2],
  );
  assert.deepEqual(
    ['overhead', 'demand_creation'].map((id) => links.get(`operating_expenses->${id}`).sourceOrder),
    [0, 1],
  );
});

test('Nike Q3 FY24 reuses the validated Nike raster cluster', () => {
  const current = dataset();
  assert.deepEqual(
    Array.from(current.rasterAnnotations, (asset) => asset.key),
    [
      'nike-company-logo',
      'nike-business-footwear',
      'nike-business-apparel',
      'nike-business-equipment',
      'nike-business-converse-q2-fy26',
    ],
  );
  assert.equal(current.render.interfaceAudit.mode, 'error');
});
