import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

const context = loadClassicScripts(['data/datasets/netflix-q2-fy26.js']);
const dataset = context.DATASETS.find((item) => item.key === 'netflix-q2-fy26');

test('Netflix Q2 FY26 preserves every Source-measured multi-link face order', () => {
  const ordered = (predicate, field) => Array.from(
    dataset.links
      .filter(predicate)
      .sort((left, right) => left[field] - right[field])
      .map(({ source, target }) => `${source}->${target}`)
  );

  assert.deepEqual(ordered((link) => link.target === 'revenue', 'targetOrder'), [
    'ucan->revenue',
    'emea->revenue',
    'latam->revenue',
    'apac->revenue',
  ]);
  assert.deepEqual(ordered((link) => link.source === 'revenue', 'sourceOrder'), [
    'revenue->gross_profit',
    'revenue->cost_of_revenue',
  ]);
  assert.deepEqual(ordered((link) => link.source === 'gross_profit', 'sourceOrder'), [
    'gross_profit->operating_profit',
    'gross_profit->operating_expenses',
  ]);
  assert.deepEqual(ordered((link) => link.source === 'operating_profit', 'sourceOrder'), [
    'operating_profit->net_profit',
    'operating_profit->tax',
    'operating_profit->other',
  ]);
  assert.deepEqual(ordered((link) => link.source === 'operating_expenses', 'sourceOrder'), [
    'operating_expenses->technology_development',
    'operating_expenses->marketing',
    'operating_expenses->ga',
  ]);
});

test('Netflix Q2 FY26 keeps Other visible and preserves Source-written decimal values', () => {
  const nodes = new Map(dataset.nodes.map((node) => [node.id, node]));
  const otherLink = dataset.links.find(
    (link) => link.source === 'operating_profit' && link.target === 'other'
  );

  assert.deepEqual({ ...dataset.layout.nodes.other }, {
    x: 2191,
    y: 759,
    width: 71,
    height: 3,
  });
  assert.equal(nodes.get('other').value, 0.1);
  assert.notEqual(nodes.get('other').color, 'transparent');
  assert.equal(otherLink.sourceWidth, 3);
  assert.equal(otherLink.targetWidth, 3);

  assert.equal(nodes.get('emea').valueText, '$4.0B');
  assert.equal(nodes.get('cost_of_revenue').valueText, '($6.0B)');
  assert.equal(nodes.get('technology_development').valueText, '($1.0B)');
});
