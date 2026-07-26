import test from 'node:test';
import assert from 'node:assert/strict';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['data/datasets/alphabet-q2-fy24.js']);
  return context.DATASETS.find((entry) => entry.key === 'alphabet-q2-fy24');
}

test('Alphabet Q2 FY24 renders exactly one Other-income label group', () => {
  const data = dataset();
  const localeLayouts = [data.layout.labels, data.i18n.zh.layout.labels];
  const annotationVariants = [data.annotationsSvg, data.i18n.zh.annotationsSvg];

  for (const labels of localeLayouts) {
    assert.ok(labels.other_income, 'the route has an explicit label-layout override');
    assert.equal(
      labels.other_income.blocks.length,
      0,
      'the route-owned automatic label stays suppressed'
    );
  }

  for (const markup of annotationVariants) {
    assert.equal(
      (markup.match(/data-node="other_income"/g) || []).length,
      1,
      'each locale exposes one semantic Other-income annotation'
    );
    assert.equal(
      (markup.match(/<text\b/g) || []).length,
      2,
      'the annotation owns one heading and one value'
    );
  }
});
