import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

const context = loadClassicScripts(['data/datasets/arista-q1-fy23.js']);
const dataset = context.DATASETS.find((item) => item.key === 'arista-q1-fy23');

test('Arista Q1 FY23 keeps the Source-visible Other and G&A short faces', () => {
  const other = dataset.nodes.find((item) => item.id === 'other_income');
  const ga = dataset.nodes.find((item) => item.id === 'ga');
  const otherLink = dataset.links.find(
    (item) => item.source === 'other_income' && item.target === 'net_profit'
  );

  assert.deepEqual(
    { ...dataset.layout.nodes.other_income },
    { x: 2086, y: 579, width: 70, height: 2 }
  );
  assert.deepEqual(
    { ...dataset.layout.nodes.ga },
    { x: 2235, y: 1324, width: 71, height: 3 }
  );
  assert.equal(other.valueText, '$12M');
  assert.equal(ga.valueText, '($25M)');
  assert.notEqual(other.color, 'transparent');
  assert.notEqual(ga.color, 'transparent');
  assert.equal(otherLink.sourceWidth, 2);
  assert.equal(otherLink.targetWidth, 2);
});

test('Arista Q1 FY23 preserves Source-measured multi-link face order', () => {
  const orderedTargets = (source) => Array.from(
    dataset.links
      .filter((item) => item.source === source)
      .sort((left, right) => left.sourceOrder - right.sourceOrder)
      .map((item) => item.target)
  );

  assert.deepEqual(orderedTargets('cost_of_revenue'), ['product_cor', 'service_cor']);
  assert.deepEqual(orderedTargets('operating_profit'), ['net_profit', 'tax']);
  assert.deepEqual(orderedTargets('operating_expenses'), ['rnd', 'sm', 'ga']);

  const netInflows = Array.from(
    dataset.links
      .filter((item) => item.target === 'net_profit')
      .sort((left, right) => left.targetOrder - right.targetOrder)
      .map((item) => item.source)
  );
  assert.deepEqual(netInflows, ['operating_profit', 'other_income']);
});
