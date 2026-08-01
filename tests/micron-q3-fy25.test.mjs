import test from 'node:test';
import assert from 'node:assert/strict';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function micronDataset() {
  const context = loadClassicScripts(['data/datasets/micron-q3-fy25.js']);
  return context.DATASETS.find((dataset) => dataset.key === 'micron-q3-fy25');
}

test('Micron Q3 FY25 centers the Interest guide bar under its label in every locale', () => {
  const dataset = micronDataset();

  [dataset.annotationsSvg, dataset.i18n.zh.annotationsSvg].forEach((markup) => {
    const label = markup.match(/<text x="([\d.]+)" y="505"[^>]*>[^<]+<\/text>/);
    const guide = markup.match(/<path d="M([\d.]+) 459\.5H([\d.]+)C2246 459\.5 2238 401\.5 2270 401\.5"/);

    assert.ok(label, 'Interest label anchor must be present');
    assert.ok(guide, 'Interest guide geometry must be present');
    assert.equal((Number(guide[1]) + Number(guide[2])) / 2, Number(label[1]));
    assert.match(markup, /data-link-anchor-x="2188"/);
  });
});
