import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts([
    'src/icons.js',
    'data/datasets/starbucks-q3-fy26.js',
  ]);
  return context.DATASETS.find((entry) => entry.key === 'starbucks-q3-fy26');
}

test('Starbucks Q3 FY26 preserves the Source-visible two-pixel Other income face', () => {
  const data = dataset();
  const link = data.links.find(
    (entry) => entry.source === 'other_income' && entry.target === 'operating_profit',
  );

  assert.deepEqual(
    { ...data.layout.nodes.other_income },
    { x: 1665, y: 484, width: 71, height: 2 },
  );
  assert.ok(data.nodes.some((entry) => entry.id === 'other_income'));
  assert.ok(!(data.nonNodeMetrics || []).some((entry) => entry.id === 'other_income'));
  assert.deepEqual([link.sourceWidth, link.targetWidth, link.targetOrder], [2, 2, 1]);
});

test('Starbucks Q3 FY26 fixes Source-measured same-color and expense face orders', () => {
  const data = dataset();
  const netInflows = Array.from(
    data.links
      .filter((entry) => entry.target === 'net_profit')
      .sort((left, right) => left.targetOrder - right.targetOrder),
    (entry) => [entry.source, entry.targetWidth, entry.y1],
  );
  const expenseOutflows = Array.from(
    data.links
      .filter((entry) => entry.source === 'operating_expenses')
      .sort((left, right) => left.sourceOrder - right.sourceOrder),
    (entry) => entry.target,
  );

  assert.deepEqual(netInflows, [
    ['operating_profit', 22, 295],
    ['gain', 22, 317],
  ]);
  assert.deepEqual(expenseOutflows, [
    'ga',
    'depreciation_amortization',
    'restructuring',
    'other_opex',
  ]);
});
