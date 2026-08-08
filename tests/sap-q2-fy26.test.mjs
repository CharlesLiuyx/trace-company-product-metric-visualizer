import test from 'node:test';
import assert from 'node:assert/strict';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function sapDataset() {
  const context = loadClassicScripts(['data/datasets/sap-q2-fy26.js']);
  return context.DATASETS.find((dataset) => dataset.key === 'sap-q2-fy26');
}

test('SAP Q2 FY26 preserves both source-visible short revenue faces', () => {
  const dataset = sapDataset();
  for (const id of ['iaas', 'software_licenses']) {
    const node = dataset.nodes.find((item) => item.id === id);
    assert.ok(node, `${id} must remain a semantic node`);
    assert.equal(dataset.layout.nodes[id].height, 3);
  }
});

test('SAP Q2 FY26 keeps Other below Operating profit at the Net profit interface', () => {
  const dataset = sapDataset();
  const inflows = dataset.links
    .filter((item) => item.target === 'net_profit')
    .sort((left, right) => left.targetOrder - right.targetOrder);

  assert.deepEqual(Array.from(inflows, (item) => item.source), [
    'operating_profit',
    'other_income',
  ]);
  assert.deepEqual(Array.from(inflows, (item) => item.targetWidth), [60, 10]);
  assert.deepEqual(Array.from(inflows, (item) => item.y1), [367, 402]);
});

test('SAP Q2 FY26 preserves the right-side operating-expense order and faces', () => {
  const dataset = sapDataset();
  const outflows = dataset.links
    .filter((item) => item.source === 'operating_expenses')
    .sort((left, right) => left.sourceOrder - right.sourceOrder);

  assert.deepEqual(Array.from(outflows, (item) => item.target), ['sm', 'rnd', 'ga']);
  assert.deepEqual(Array.from(outflows, (item) => item.targetWidth), [74, 58, 12]);
  assert.equal(dataset.layout.nodes.ga.height, 12);
});
