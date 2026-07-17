import test from 'node:test';
import assert from 'node:assert/strict';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function amcDataset() {
  const context = loadClassicScripts(['data/datasets/amc-q3-fy25.js']);
  return context.DATASETS.find((dataset) => dataset.key === 'amc-q3-fy25');
}

test('AMC Other theatre caption stays clear of the attendance card', () => {
  const dataset = amcDataset();

  for (const annotations of [
    dataset.annotationsSvg,
    dataset.i18n.zh.annotationsSvg,
  ]) {
    assert.match(annotations, /x="289" y="1100"[^>]*>[^<]+<\/text>/);
    assert.match(annotations, /x="264\.5" y="1142"/);
    assert.match(annotations, /x="264\.5" y="1176"/);
    assert.match(annotations, /<rect x="49" y="1199"/);
  }
});
