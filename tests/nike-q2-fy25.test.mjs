import assert from 'node:assert/strict';
import test from 'node:test';
import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['data/datasets/nike-q2-fy25.js']);
  return context.DATASETS.find((entry) => entry.key === 'nike-q2-fy25');
}

test('Nike Q2 FY25 preserves the Source-painted 8M and 24M faces', () => {
  const current = dataset();
  const nodes = new Map(current.nodes.map((node) => [node.id, node]));

  assert.deepEqual(
    [nodes.get('other').value, nodes.get('other').valueText, current.layout.nodes.other.height],
    [0.008, '$8M', 3],
  );
  assert.deepEqual(
    [nodes.get('interest').value, nodes.get('interest').valueText, current.layout.nodes.interest.height],
    [0.024, '$24M', 3],
  );
  assert.match(current.annotationsSvg, /data-node="interest"/);
  assert.equal(current.render.interfaceAudit.mode, 'error');
});

test('Nike Q2 FY25 preserves measured per-face link identity order and widths', () => {
  const current = dataset();
  const links = new Map(current.links.map((link) => [`${link.source}->${link.target}`, link]));

  assert.deepEqual(
    ['footwear', 'apparel', 'equipment', 'converse'].map((id) => links.get(`${id}->revenue`).targetOrder),
    [0, 1, 2, 3],
  );
  assert.deepEqual(
    ['other', 'operating_profit', 'interest'].map((id) => links.get(`${id}->net_profit`).targetOrder),
    [0, 1, 2],
  );
  assert.deepEqual(
    ['other', 'interest'].map((id) => {
      const link = links.get(`${id}->net_profit`);
      return [link.sourceWidth, link.targetWidth];
    }),
    [[3, 3], [3, 3]],
  );
});

test('Nike Q2 FY25 reuses the complete validated Nike asset cluster', () => {
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
});
