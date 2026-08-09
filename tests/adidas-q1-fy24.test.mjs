import assert from 'node:assert/strict';
import test from 'node:test';
import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['data/datasets/adidas-q1-fy24.js']);
  return context.DATASETS.find((entry) => entry.key === 'adidas-q1-fy24');
}

test('Adidas Q1 FY24 keeps Source-painted hairlines and models Other as a zero-face flow', () => {
  const current = dataset();
  const nodeIds = new Set(current.nodes.map((node) => node.id));
  const otherMetric = current.nonNodeMetrics.find((metric) => metric.id === 'other');
  const otherLink = current.links.find((link) => link.sourceRoute === 'other');

  assert.equal(nodeIds.has('other'), false);
  assert.deepEqual(JSON.parse(JSON.stringify(otherMetric)), {
    id: 'other', representation: 'flow', label: 'Other', value: 0.019,
    valueText: '€19M', type: 'profit', labelColor: '#008f51',
  });
  assert.equal(otherLink.target, 'operating_profit');
  assert.equal(otherLink.targetOrder, 1);
  assert.equal(otherLink.interactionOnly, true);
  assert.match(current.annotationsSvg, /class="sankey-interactive-annotation"/);
  assert.match(current.annotationsSvg, /data-node="other"/);

  assert.equal(current.layout.nodes.financial.height, 3);
  assert.equal(current.layout.nodes.tax.height, 2);
  assert.equal(current.render.interfaceAudit.mode, 'error');
  assert.match(current.meta.title, /Q1 FY24/);
  assert.equal(current.meta.hidePeriodStamp, true);
});

test('Adidas Q1 FY24 preserves Source face order at every multi-link interface', () => {
  const current = dataset();
  const byPair = new Map(current.links.map((link) => [`${link.source || link.sourceRoute}->${link.target}`, link]));

  assert.equal(byPair.get('footwear->revenue').targetOrder, 0);
  assert.equal(byPair.get('apparel->revenue').targetOrder, 1);
  assert.equal(byPair.get('accessories_gear->revenue').targetOrder, 2);
  assert.equal(byPair.get('gross_profit->operating_profit').targetOrder, 0);
  assert.equal(byPair.get('other->operating_profit').targetOrder, 1);
  assert.equal(byPair.get('operating_profit->net_profit').sourceOrder, 0);
  assert.equal(byPair.get('operating_profit->financial').sourceOrder, 1);
  assert.equal(byPair.get('operating_profit->tax').sourceOrder, 2);
  assert.equal(byPair.get('operating_expenses->ga').sourceOrder, 0);
  assert.equal(byPair.get('operating_expenses->marketing_pos').sourceOrder, 1);
});

test('Adidas Q1 FY24 reuses the complete validated Adidas asset cluster', () => {
  const current = dataset();
  assert.deepEqual(
    Array.from(current.rasterAnnotations, (asset) => asset.key),
    [
      'adidas-company-logo',
      'adidas-business-footwear',
      'adidas-business-apparel',
      'adidas-business-accessories-gear',
    ],
  );
});
