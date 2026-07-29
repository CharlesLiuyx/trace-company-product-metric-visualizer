import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

const context = loadClassicScripts(['data/datasets/broadcom-q1-fy23.js']);
const dataset = context.DATASETS.find((item) => item.key === 'broadcom-q1-fy23');
const link = (source, target) => dataset.links.find((item) => item.source === source && item.target === target);

test('broadcom Q1 FY23 preserves Source-measured multi-link face order', () => {
  assert.deepEqual(
    ['semiconductor_solutions', 'infrastructure_software']
      .map((source) => link(source, 'revenue'))
      .sort((left, right) => left.targetOrder - right.targetOrder)
      .map((item) => item.source),
    ['semiconductor_solutions', 'infrastructure_software']
  );

  assert.deepEqual(
    Array.from(
      dataset.links
        .filter((item) => item.source === 'operating_profit')
        .sort((left, right) => left.sourceOrder - right.sourceOrder)
        .map((item) => item.target)
    ),
    ['net_profit', 'tax', 'other_expense']
  );

  assert.deepEqual(
    Array.from(
      dataset.links
        .filter((item) => item.source === 'operating_expenses')
        .sort((left, right) => left.sourceOrder - right.sourceOrder)
        .map((item) => item.target)
    ),
    ['rnd', 'sga', 'other_opex']
  );
});

test('broadcom Q1 FY23 retains both value-bearing Other faces', () => {
  const otherExpense = dataset.nodes.find((node) => node.id === 'other_expense');
  const otherOpex = dataset.nodes.find((node) => node.id === 'other_opex');

  assert.deepEqual(
    [otherExpense.value, otherOpex.value],
    [0.3, 0.4]
  );
  assert.notEqual(otherExpense.color, 'transparent');
  assert.notEqual(otherOpex.color, 'transparent');
  assert.equal(dataset.layout.nodes.other_expense.height, 6);
  assert.equal(dataset.layout.nodes.other_opex.height, 10);
});
