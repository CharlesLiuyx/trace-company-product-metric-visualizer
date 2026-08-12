import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['data/datasets/nike-q4-fy25.js']);
  return context.DATASETS.find((entry) => entry.key === 'nike-q4-fy25');
}

test('Nike Q4 FY25 preserves the three Source-painted short financial faces', () => {
  const data = dataset();
  const nodes = Object.fromEntries(data.nodes.map((entry) => [entry.id, entry]));

  assert.deepEqual({ ...data.layout.nodes.interest }, { x: 2099, y: 468, width: 75, height: 1 });
  assert.deepEqual({ ...data.layout.nodes.tax }, { x: 2224, y: 590, width: 71, height: 1 });
  assert.deepEqual({ ...data.layout.nodes.other_expense }, { x: 2224, y: 697, width: 71, height: 1 });
  assert.equal(nodes.interest.valueText, '$22M');
  assert.equal(nodes.other_expense.valueText, '($25M)');
  assert.notEqual(nodes.interest.color, 'transparent');
  assert.notEqual(nodes.tax.color, 'transparent');
  assert.notEqual(nodes.other_expense.color, 'transparent');
});

test('Nike Q4 FY25 keeps the Source-measured waterfall interface order', () => {
  const data = dataset();
  const operatingOutflows = data.links
    .filter((entry) => entry.source === 'operating_profit')
    .sort((left, right) => left.sourceOrder - right.sourceOrder);
  const netInflows = data.links
    .filter((entry) => entry.target === 'net_profit')
    .sort((left, right) => left.targetOrder - right.targetOrder);

  assert.deepEqual(Array.from(operatingOutflows, (entry) => entry.target), [
    'net_profit',
    'tax',
    'other_expense',
  ]);
  assert.equal(
    operatingOutflows.reduce((sum, entry) => sum + entry.sourceWidth, 0),
    data.layout.nodes.operating_profit.height,
  );
  assert.deepEqual(Array.from(netInflows, (entry) => entry.source), [
    'operating_profit',
    'interest',
  ]);
  assert.equal(
    netInflows.reduce((sum, entry) => sum + entry.targetWidth, 0),
    data.layout.nodes.net_profit.height,
  );
});
