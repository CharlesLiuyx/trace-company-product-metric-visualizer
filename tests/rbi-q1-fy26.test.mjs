import test from 'node:test';
import assert from 'node:assert/strict';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function rbiDataset() {
  const context = loadClassicScripts(['data/datasets/rbi-q1-fy26.js']);
  return context.DATASETS.find((dataset) => dataset.key === 'rbi-q1-fy26');
}

test('RBI Other income guide keeps its semantic hover relationship', () => {
  const dataset = rbiDataset();

  assert.match(dataset.annotationsSvg, /class="sankey-interactive-annotation"/);
  assert.match(dataset.annotationsSvg, /data-node="other_income"/);
  assert.match(dataset.annotationsSvg, /data-link-numerator="other_income"/);
  assert.match(dataset.annotationsSvg, /data-link-denominator="operating_expenses"/);
  assert.match(dataset.annotationsSvg, /data-link-anchor-x="1760"/);
  assert.match(dataset.annotationsSvg, /data-link-anchor-y="1088"/);
  assert.match(
    dataset.annotationsSvg,
    /M1772 1095 C1828 1095 1846 1036 1900 1036/
  );
});
