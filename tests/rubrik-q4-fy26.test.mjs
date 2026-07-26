import test from 'node:test';
import assert from 'node:assert/strict';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function rubrikDataset() {
  const context = loadClassicScripts(['data/datasets/rubrik-q4-fy26.js']);
  return context.DATASETS.find((dataset) => dataset.key === 'rubrik-q4-fy26');
}

test('Rubrik Q4 FY26 keeps the Source-visible Other face', () => {
  const dataset = rubrikDataset();
  const node = dataset.nodes.find((item) => item.id === 'other');
  const link = dataset.links.find(
    (item) => item.source === 'other' && item.target === 'revenue'
  );

  assert.deepEqual(
    { ...dataset.layout.nodes.other },
    { x: 446, y: 1004, width: 71, height: 9 }
  );
  assert.equal(node.value, 13);
  assert.equal(node.color, '#00a6d3');
  assert.equal(link.width, 9);
  assert.equal(link.targetOrder, 1);
});

test('Rubrik Q4 FY26 preserves the measured multi-link face order', () => {
  const dataset = rubrikDataset();
  const link = (source, target) => dataset.links.find(
    (item) => item.source === source && item.target === target
  );

  assert.deepEqual(
    [
      link('subscription', 'revenue').targetOrder,
      link('other', 'revenue').targetOrder,
    ],
    [0, 1]
  );
  assert.deepEqual(
    [
      link('gross_profit', 'operating_expenses').targetOrder,
      link('operating_loss', 'operating_expenses').targetOrder,
    ],
    [0, 1]
  );
  assert.deepEqual(
    [
      link('operating_expenses', 'sm').sourceOrder,
      link('operating_expenses', 'rnd').sourceOrder,
      link('operating_expenses', 'ga').sourceOrder,
    ],
    [0, 1, 2]
  );
  assert.equal(
    link('gross_profit', 'operating_expenses').width
      + link('operating_loss', 'operating_expenses').targetWidth,
    dataset.layout.nodes.operating_expenses.height
  );
  assert.equal(
    link('operating_expenses', 'sm').width
      + link('operating_expenses', 'rnd').width
      + link('operating_expenses', 'ga').sourceWidth,
    dataset.layout.nodes.operating_expenses.height
  );
});
