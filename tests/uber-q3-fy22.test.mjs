import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['data/datasets/uber-q3-fy22.js']);
  return context.DATASETS.find((entry) => entry.key === 'uber-q3-fy22');
}

test('Uber Q3 FY22 preserves Source-measured multi-link face identity order', () => {
  const data = dataset();
  const ordered = (predicate, field) => data.links
    .filter(predicate)
    .sort((left, right) => left[field] - right[field]);

  assert.deepEqual(
    JSON.parse(JSON.stringify(ordered((link) => link.target === 'revenue', 'targetOrder').map((link) => [link.source, link.targetOrder]))),
    [['mobility', 0], ['delivery', 1], ['freight', 2]]
  );
  assert.deepEqual(
    JSON.parse(JSON.stringify(ordered((link) => link.source === 'revenue', 'sourceOrder').map((link) => [link.target, link.sourceOrder]))),
    [['gross_profit', 0], ['cost_of_revenue', 1]]
  );
  assert.deepEqual(
    JSON.parse(JSON.stringify(ordered((link) => link.target === 'operating_expenses', 'targetOrder').map((link) => [link.source, link.targetOrder]))),
    [['gross_profit', 0], ['operating_loss', 1]]
  );
  assert.deepEqual(
    JSON.parse(JSON.stringify(ordered((link) => link.source === 'operating_expenses', 'sourceOrder').map((link) => [link.target, link.sourceOrder]))),
    [['operations', 0], ['sm', 1], ['rnd', 2], ['ga', 3], ['da', 4]]
  );
});

test('Uber Q3 FY22 keeps the three smallest Source values as visible faces', () => {
  const data = dataset();
  for (const [id, value, height] of [
    ['da', 0.2, 9],
    ['operating_loss', -0.5, 20],
    ['operations', 0.6, 25],
  ]) {
    assert.equal(data.nodes.find((node) => node.id === id).value, value);
    assert.equal(data.layout.nodes[id].height, height);
    assert.notEqual(data.nodes.find((node) => node.id === id).color, 'transparent');
  }
});

test('Uber Q3 FY22 keeps multi-link occupancy continuous at shared faces', () => {
  const data = dataset();
  const widthSum = (predicate, field) => data.links.filter(predicate).reduce((sum, link) => sum + link[field], 0);

  assert.equal(widthSum((link) => link.target === 'revenue', 'targetWidth'), data.layout.nodes.revenue.height);
  assert.equal(widthSum((link) => link.source === 'revenue', 'sourceWidth'), data.layout.nodes.revenue.height);
  assert.equal(widthSum((link) => link.target === 'operating_expenses', 'targetWidth'), data.layout.nodes.operating_expenses.height);
  assert.equal(widthSum((link) => link.source === 'operating_expenses', 'sourceWidth'), data.layout.nodes.operating_expenses.height);
});
