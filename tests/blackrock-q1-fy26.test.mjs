import test from 'node:test';
import assert from 'node:assert/strict';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function blackRockDataset() {
  const context = loadClassicScripts(['data/datasets/blackrock-q1-fy26.js']);
  return context.DATASETS.find((dataset) => dataset.key === 'blackrock-q1-fy26');
}

test('BlackRock Other annotation keeps its semantic hover relationship', () => {
  const dataset = blackRockDataset();

  assert.match(dataset.annotationsSvg, /class="sankey-interactive-annotation"/);
  assert.match(dataset.annotationsSvg, /data-node="other"/);
  assert.match(dataset.annotationsSvg, /data-link-numerator="other"/);
  assert.match(dataset.annotationsSvg, /data-link-denominator="net_profit"/);
  assert.match(dataset.annotationsSvg, /data-link-anchor-x="2241"/);
  assert.match(dataset.annotationsSvg, /data-link-anchor-y="470"/);
});
