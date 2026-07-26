import assert from 'node:assert/strict';
import test from 'node:test';
import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['data/datasets/nio-q4-fy25.js']);
  return context.DATASETS.find((entry) => entry.key === 'nio-q4-fy25');
}

test('NIO Q4 FY25 keeps Source-visible Other and Net profit short faces', () => {
  const data = dataset();
  const nodes = new Map(data.nodes.map((node) => [node.id, node]));

  assert.deepEqual(
    { ...data.layout.nodes.other },
    { x: 1671, y: 536, width: 74, height: 3 }
  );
  assert.deepEqual(
    { ...data.layout.nodes.net_profit },
    { x: 2250, y: 390, width: 74, height: 3 }
  );
  assert.equal(nodes.get('other').valueText, '$42M');
  assert.equal(nodes.get('net_profit').valueText, '$52M');
  assert.equal(nodes.get('other').color, '#2ca02c');
  assert.equal(nodes.get('net_profit').color, '#2ca02c');
});

test('NIO Q4 FY25 preserves the Source endpoint identity order', () => {
  const data = dataset();
  const operatingProfitIn = data.links
    .filter((link) => link.target === 'operating_profit')
    .sort((left, right) => left.targetOrder - right.targetOrder)
    .map((link) => link.source);
  const operatingProfitOut = data.links
    .filter((link) => link.source === 'operating_profit')
    .sort((left, right) => left.sourceOrder - right.sourceOrder)
    .map((link) => link.target);
  const operatingExpensesOut = data.links
    .filter((link) => link.source === 'operating_expenses')
    .sort((left, right) => left.sourceOrder - right.sourceOrder)
    .map((link) => link.target);

  assert.deepEqual(Array.from(operatingProfitIn), ['gross_profit', 'other']);
  assert.deepEqual(Array.from(operatingProfitOut), ['net_profit', 'tax']);
  assert.deepEqual(Array.from(operatingExpensesOut), ['sga', 'rnd']);
});
