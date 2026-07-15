import test from 'node:test';
import assert from 'node:assert/strict';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function lamResearchDataset() {
  const context = loadClassicScripts(['data/datasets/lam-research-q1-fy26.js']);
  return context.DATASETS.find((dataset) => dataset.key === 'lam-research-q1-fy26');
}

test('Lam Research Interest guide keeps its source path and semantic hover link', () => {
  const dataset = lamResearchDataset();
  const annotations = [dataset.annotationsSvg, dataset.i18n.zh.annotationsSvg];

  annotations.forEach((markup) => {
    assert.match(markup, /data-node="interest"/);
    assert.match(markup, /data-link-numerator="interest"/);
    assert.match(markup, /data-link-denominator="net_profit"/);
    assert.match(markup, /data-link-anchor-x="2189"/);
    assert.match(markup, /data-link-anchor-y="602"/);
    assert.match(markup, /M2100 622H2171C2194 622 2188 562 2213 562/);
    assert.match(markup, /stroke="#5db45d"/);
  });
});
