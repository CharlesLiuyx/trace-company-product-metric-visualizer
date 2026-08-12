import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['data/datasets/pepsico-q2-fy24.js']);
  return context.DATASETS.find((entry) => entry.key === 'pepsico-q2-fy24');
}

test('PepsiCo Q2 FY24 preserves Other as a zero-face income flow', () => {
  const data = dataset();
  const nodeIds = new Set(data.nodes.map((node) => node.id));
  const other = data.nonNodeMetrics.find((metric) => metric.id === 'other');
  const otherLink = data.links.find((link) => link.sourceRoute === 'other');

  assert.equal(nodeIds.has('other'), false);
  assert.deepEqual({ ...other }, {
    id: 'other', representation: 'flow', label: 'Other', value: 0.1,
    valueText: '$0.1B', type: 'profit', labelColor: '#008e00',
  });
  assert.equal(otherLink.target, 'net_profit');
  assert.equal(otherLink.targetOrder, 1);
  assert.equal(otherLink.interactionOnly, true);
  assert.match(data.annotationsSvg, /class="sankey-interactive-annotation"/);
  assert.match(data.annotationsSvg, /data-node="other"/);
});

test('PepsiCo Q2 FY24 preserves the Source-measured short faces and interface order', () => {
  const data = dataset();
  const byPair = new Map(data.links.map((link) => [
    `${link.source || link.sourceRoute}->${link.target}`,
    link,
  ]));

  assert.deepEqual({ ...data.layout.nodes.quaker_foods }, { x: 456, y: 649, width: 71, height: 7 });
  assert.deepEqual({ ...data.layout.nodes.interest }, { x: 2324, y: 727, width: 71, height: 1 });
  assert.equal(byPair.get('frito_lay->north_america').targetOrder, 0);
  assert.equal(byPair.get('quaker_foods->north_america').targetOrder, 1);
  assert.equal(byPair.get('pepsico_beverages->north_america').targetOrder, 2);
  assert.equal(byPair.get('north_america->revenue').targetOrder, 0);
  assert.equal(byPair.get('latam->revenue').targetOrder, 1);
  assert.equal(byPair.get('europe->revenue').targetOrder, 2);
  assert.equal(byPair.get('amesa->revenue').targetOrder, 3);
  assert.equal(byPair.get('apac->revenue').targetOrder, 4);
  assert.equal(byPair.get('other->net_profit').targetOrder, 1);
  assert.equal(data.render.interfaceAudit.mode, 'error');
});

test('PepsiCo Q2 FY24 reuses the complete approved Source icon coverage', () => {
  const data = dataset();
  assert.deepEqual(Array.from(data.rasterAnnotations, (asset) => asset.key), [
    'pepsico-company-logo',
    'pepsico-lays-q4-fy24',
    'pepsico-quaker-q4-fy24',
    'pepsico-beverages-pepsi',
    'pepsico-revenue-globe',
    'pepsico-globe-north-america',
    'pepsico-globe-latam',
    'pepsico-globe-europe-q4-fy24',
    'pepsico-globe-amesa-q4-fy24',
    'pepsico-globe-apac',
  ]);
});
