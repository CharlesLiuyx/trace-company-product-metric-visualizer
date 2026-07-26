import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['src/icons.js', 'data/datasets/apple-q1-fy25.js']);
  return context.DATASETS.find((entry) => entry.key === 'apple-q1-fy25');
}

test('Apple Q1 FY25 preserves the Source-painted Other expense at its native 2px height', () => {
  const data = dataset();
  const other = data.nodes.find((entry) => entry.id === 'other_expense');
  const otherLink = data.links.find((entry) => entry.target === 'other_expense');

  assert.ok(other);
  assert.equal(data.nonNodeMetrics, undefined);
  assert.equal(data.layout.nodes.other_expense.x, 2255);
  assert.equal(data.layout.nodes.other_expense.y, 754);
  assert.equal(data.layout.nodes.other_expense.width, 71);
  assert.equal(data.layout.nodes.other_expense.height, 2);
  assert.notEqual(other.color, 'transparent');
  assert.equal(otherLink.source, 'operating_profit');
  assert.equal(otherLink.sourceOrder, 2);
  assert.equal(otherLink.targetWidth, 2);

  for (const [markup, label] of [
    [data.annotationsSvg, 'Other'],
    [data.i18n.zh.annotationsSvg, '其他'],
  ]) {
    assert.equal((markup.match(/data-node="other_expense"/g) || []).length, 1);
    assert.equal((markup.match(new RegExp(`>${label}</text>`, 'g')) || []).length, 1);
    assert.equal((markup.match(/>\(\$0\.2B\)<\/text>/g) || []).length, 1);
  }
});
