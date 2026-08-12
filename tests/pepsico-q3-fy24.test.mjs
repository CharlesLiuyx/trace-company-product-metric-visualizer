import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['data/datasets/pepsico-q3-fy24.js']);
  return context.DATASETS.find((entry) => entry.key === 'pepsico-q3-fy24');
}

test('PepsiCo Q3 FY24 keeps the Other guide above its label in both locales', () => {
  const current = dataset();
  const otherLink = current.links.find((link) => link.sourceRoute === 'other_income');
  const guideY = current.layout.routes.other_income.y;

  assert.equal(guideY, 475);
  assert.equal(otherLink.y0, guideY);
  assert.equal(otherLink.curve.c1y, guideY);

  for (const markup of [current.annotationsSvg, current.i18n.zh.annotationsSvg]) {
    assert.match(markup, /data-user-feedback-clearance="other-income-guide-above-label"/);
    assert.match(markup, /<path d="M2207 475H2260C2293 475 2286 427 2324 427"/);
    const labelBaselines = Array.from(
      markup.matchAll(/<text x="2251" y="(515|557)"/g),
      (match) => Number(match[1])
    );
    assert.deepEqual(labelBaselines, [515, 557]);
    assert.ok(labelBaselines[0] - guideY >= 40, 'Other label must remain clearly below the guide');
  }
});
