import assert from 'node:assert/strict';
import test from 'node:test';
import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['data/datasets/nike-q1-fy26.js']);
  return context.DATASETS.find((entry) => entry.key === 'nike-q1-fy26');
}

test('Nike Q1 FY26 preserves the two Source-painted million-value faces', () => {
  const current = dataset();
  const interest = current.nodes.find((node) => node.id === 'interest');
  const other = current.nodes.find((node) => node.id === 'other');

  assert.equal(interest.value, 0.018);
  assert.equal(interest.valueText, '$18M');
  assert.equal(current.layout.nodes.interest.height, 3);
  assert.equal(other.value, 0.023);
  assert.equal(other.valueText, '($23M)');
  assert.equal(current.layout.nodes.other.height, 2);
  assert.equal(current.render.interfaceAudit.mode, 'error');
});

test('Nike Q1 FY26 preserves measured per-face link identity order', () => {
  const current = dataset();
  const byPair = new Map(current.links.map((link) => [`${link.source}->${link.target}`, link]));

  assert.equal(byPair.get('footwear->revenue').targetOrder, 0);
  assert.equal(byPair.get('apparel->revenue').targetOrder, 1);
  assert.equal(byPair.get('equipment->revenue').targetOrder, 2);
  assert.equal(byPair.get('converse->revenue').targetOrder, 3);
  assert.equal(byPair.get('revenue->gross_profit').sourceOrder, 0);
  assert.equal(byPair.get('revenue->cost_of_sales').sourceOrder, 1);
  assert.equal(byPair.get('gross_profit->operating_profit').sourceOrder, 0);
  assert.equal(byPair.get('gross_profit->operating_expenses').sourceOrder, 1);
  assert.equal(byPair.get('operating_profit->net_profit').sourceOrder, 0);
  assert.equal(byPair.get('operating_profit->tax').sourceOrder, 1);
  assert.equal(byPair.get('operating_profit->other').sourceOrder, 2);
  assert.equal(byPair.get('operating_profit->net_profit').targetOrder, 0);
  assert.equal(byPair.get('interest->net_profit').targetOrder, 1);
  assert.equal(byPair.get('operating_expenses->overhead').sourceOrder, 0);
  assert.equal(byPair.get('operating_expenses->demand_creation').sourceOrder, 1);
});

test('Nike Q1 FY26 reuses the complete validated Nike asset cluster', () => {
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

  const converse = current.rasterAnnotations.find((asset) => asset.key === 'nike-business-converse-q2-fy26');
  assert.deepEqual(
    { href: converse.href, width: converse.width, height: converse.height },
    {
      href: 'data/assets/raster-annotations/nike/business-converse-q2-fy26.png',
      width: 205,
      height: 132,
    },
  );
});

test('the user-selected Nike periods reuse the clean Q2 FY26 Converse crop', () => {
  const keys = [
    'nike-q3-fy24',
    'nike-q4-fy24',
    'nike-q1-fy25',
    'nike-q2-fy25',
    'nike-q3-fy25',
    'nike-q4-fy25',
    'nike-q1-fy26',
  ];

  for (const key of keys) {
    const context = loadClassicScripts([`data/datasets/${key}.js`]);
    const dataset = context.DATASETS.find((entry) => entry.key === key);
    const converse = dataset.rasterAnnotations.find((asset) => asset.key === 'nike-business-converse-q2-fy26');
    assert.deepEqual(
      { href: converse.href, width: converse.width, height: converse.height },
      {
        href: 'data/assets/raster-annotations/nike/business-converse-q2-fy26.png',
        width: 205,
        height: 132,
      },
      key,
    );
  }
});
