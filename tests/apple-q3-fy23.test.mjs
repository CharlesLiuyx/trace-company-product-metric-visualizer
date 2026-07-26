import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['src/icons.js', 'data/datasets/apple-q3-fy23.js']);
  return context.DATASETS.find((entry) => entry.key === 'apple-q3-fy23');
}

test('Apple Q3 FY23 preserves the Source-painted Other expense at its native 2px height', () => {
  const data = dataset();
  const other = data.nodes.find((entry) => entry.id === 'other_expense');
  const otherLink = data.links.find((entry) => entry.target === 'other_expense');

  assert.ok(other);
  assert.equal(data.nonNodeMetrics, undefined);
  assert.equal(data.layout.nodes.other_expense.x, 2259);
  assert.equal(data.layout.nodes.other_expense.y, 758);
  assert.equal(data.layout.nodes.other_expense.width, 71);
  assert.equal(data.layout.nodes.other_expense.height, 2);
  assert.notEqual(other.color, 'transparent');
  assert.equal(otherLink.source, 'operating_profit');
  assert.equal(otherLink.sourceOrder, 2);
  assert.equal(otherLink.sourceWidth, 2);
  assert.equal(otherLink.targetWidth, 2);
});
