import assert from 'node:assert/strict';
import test from 'node:test';
import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts([
    'src/icons.js',
    'data/datasets/microsoft-q1-fy24.js',
  ]);
  return context.DATASETS.find((entry) => entry.key === 'microsoft-q1-fy24');
}

test('Microsoft Q1 FY24 keeps the Other label below its Source guide in both locales', () => {
  const current = dataset();
  const expectedBaselines = [
    /<text x="2242" y="619"[^>]*>Other<\/text>/,
    /<text x="2242" y="661"[^>]*>\$0\.4B<\/text>/,
  ];

  for (const pattern of expectedBaselines) {
    assert.match(current.annotationsSvg, pattern);
  }
  assert.match(current.i18n.zh.annotationsSvg, /<text x="2242" y="619"[^>]*>其他<\/text>/);
  assert.match(current.i18n.zh.annotationsSvg, /<text x="2242" y="661"[^>]*>\$0\.4B<\/text>/);
  assert.equal(current.layout.routes.other.y, 580);
});
