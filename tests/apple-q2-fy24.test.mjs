import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts([
    'src/icons.js',
    'data/datasets/apple-q2-fy24.js',
  ]);
  return context.DATASETS.find((entry) => entry.key === 'apple-q2-fy24');
}

test('Apple Q2 FY24 keeps Other income as one zero-face semantic guide', () => {
  const data = dataset();
  const other = data.nonNodeMetrics.find((entry) => entry.id === 'other_income');
  const otherLink = data.links.find(
    (entry) => entry.sourceRoute === 'other_income'
  );

  assert.equal(data.nodes.some((entry) => entry.id === 'other_income'), false);
  assert.equal(other.representation, 'flow');
  assert.equal(other.value, 0.2);
  assert.equal(data.layout.routes.other_income.x, 2145);
  assert.equal(data.layout.routes.other_income.y, 514);
  assert.equal(data.layout.routes.other_income.width, 0);
  assert.equal(data.layout.routes.other_income.height, 1);
  assert.equal(otherLink.target, 'net_profit');
  assert.equal(otherLink.targetOrder, 1);
  assert.equal(otherLink.interactionOnly, true);

  for (const labels of [data.layout.labels, data.i18n.zh.layout.labels]) {
    assert.equal(labels.other_income.blocks.length, 0);
  }
  for (const markup of [data.annotationsSvg, data.i18n.zh.annotationsSvg]) {
    assert.equal((markup.match(/data-node="other_income"/g) || []).length, 1);
    assert.equal((markup.match(/>(?:Other|其他)<\/text>/g) || []).length, 1);
    assert.equal((markup.match(/>\$0\.2B<\/text>/g) || []).length, 1);
    assert.match(markup, /data-annotation-clearance="apple-services-icon-cluster"/);
  }
});
