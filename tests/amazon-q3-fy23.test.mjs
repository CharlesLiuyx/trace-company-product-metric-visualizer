import test from 'node:test';
import assert from 'node:assert/strict';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts([
    'src/icons.js',
    'data/datasets/amazon-q3-fy23.js',
  ]);
  return context.DATASETS.find((entry) => entry.key === 'amazon-q3-fy23');
}

test('Amazon Q3 FY23 renders exactly one Other-income label group', () => {
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
    const otherIncomeGroup = markup.match(
      /<g class="sankey-interactive-annotation" data-node="other_income">([\s\S]*?)<\/g>/
    );
    assert.ok(otherIncomeGroup, 'the Other-income annotation group exists');
    assert.equal(
      (otherIncomeGroup[1].match(/<text\b/g) || []).length,
      2,
      'the annotation owns one Other-income heading and one value'
    );
    assert.match(
      otherIncomeGroup[1],
      /M2207 437C2228 437 2235 372 2265 372/,
      'the Source-positioned guide reconnects the Other-income callout to Net profit'
    );
  }
});
