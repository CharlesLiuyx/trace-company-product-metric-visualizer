import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['data/datasets/pepsico-q3-fy25.js']);
  return context.DATASETS.find((entry) => entry.key === 'pepsico-q3-fy25');
}

test('PepsiCo Q3 FY25 keeps the Other guide above its label in both locales', () => {
  const current = dataset();
  const otherLink = current.links.find((link) => link.sourceRoute === 'other_income');
  const guideY = current.layout.routes.other_income.y;

  assert.equal(guideY, 456);
  assert.equal(otherLink.y0, guideY);
  assert.equal(otherLink.curve.c1y, guideY);

  for (const markup of [current.annotationsSvg, current.i18n.zh.annotationsSvg]) {
    assert.match(markup, /data-user-feedback-clearance="other-income-guide-above-label"/);
    assert.match(markup, /<path d="M2195 456H2285C2310 456 2304 386 2325 386"/);
    const labelBaselines = Array.from(
      markup.matchAll(/<text x="2256" y="(498|540)"/g),
      (match) => Number(match[1])
    );
    assert.deepEqual(labelBaselines, [498, 540]);
    assert.ok(labelBaselines[0] - guideY >= 40, 'Other label must remain clearly below the guide');
  }
});

test('PepsiCo Q3 FY25 keeps the EMEA and APAC amount blocks 5px above their faces', () => {
  const current = dataset();

  for (const labels of [current.layout.labels, current.i18n.zh.layout.labels]) {
    assert.equal(labels.emea.blocks[0].top, 1105);
    assert.equal(labels.apac.blocks[0].top, 1298);
  }
});
