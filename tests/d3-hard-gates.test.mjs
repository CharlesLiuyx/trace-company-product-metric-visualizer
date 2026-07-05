import test from 'node:test';
import assert from 'node:assert/strict';
import { assertPurity, isApprovedRasterHref, rasterHrefPath } from '../scripts/lib/d3-hard-gates.mjs';
import { archiveSegment, improvementSegment } from '../scripts/lib/compare-workspace.mjs';

function purity(overrides = {}) {
  return {
    chartImgCount: 0,
    forbiddenElements: [],
    backgroundImageElements: [],
    imageHrefs: [],
    expectedRasterHrefs: [],
    rasterAllowed: false,
    ...overrides,
  };
}

test('assertPurity passes a clean raster-free render', () => {
  assertPurity(purity());
});

test('assertPurity rejects <img>, forbidden elements, and css backgrounds', () => {
  assert.throws(() => assertPurity(purity({ chartImgCount: 1 })), /chartImgCount=1/);
  assert.throws(() => assertPurity(purity({ forbiddenElements: ['canvas'] })), /forbiddenElements=canvas/);
  assert.throws(
    () => assertPurity(purity({ backgroundImageElements: ['div#chart'] })),
    /backgroundImageElements=div#chart/
  );
});

test('assertPurity enforces the raster whitelist end to end', () => {
  const approved = 'data/assets/raster-annotations/meituan/meituan-food-delivery.png';
  // rasterAllowed=false with images present
  assert.throws(
    () => assertPurity(purity({ imageHrefs: [approved], expectedRasterHrefs: [approved] })),
    /rasterAllowed=false/
  );
  // unexpected extra raster
  assert.throws(
    () => assertPurity(purity({ rasterAllowed: true, imageHrefs: [approved], expectedRasterHrefs: [] })),
    /imageCount=1 expectedRasterAnnotations=0/
  );
  // unapproved location
  const stray = 'data/assets/icon-references/meituan/crops/logo.png';
  assert.throws(
    () => assertPurity(purity({ rasterAllowed: true, imageHrefs: [stray], expectedRasterHrefs: [stray] })),
    /unapprovedRasterHrefs/
  );
});

test('isApprovedRasterHref accepts only runtime raster annotation paths', () => {
  assert.equal(isApprovedRasterHref('data/assets/raster-annotations/x/y.png'), true);
  assert.equal(isApprovedRasterHref('data/assets/raster-annotations/x/y.webp?v=2'), true, 'query strings are stripped');
  assert.equal(isApprovedRasterHref('data/assets/icon-references/x/crops/y.png'), false);
  assert.equal(isApprovedRasterHref('https://example.com/x.png'), false);
  assert.equal(rasterHrefPath('a/b.png#frag'), 'a/b.png');
});

test('archiveSegment slugs focus text for directory names', () => {
  assert.equal(archiveSegment('Label Spacing / RIGHT column', 'unspecified'), 'label-spacing-right-column');
  assert.equal(archiveSegment('', 'unspecified'), 'unspecified');
  assert.equal(archiveSegment('a'.repeat(200), 'x').length <= 96, true);
});

test('improvementSegment reports baseline and signed similarity deltas', () => {
  assert.equal(improvementSegment(null, { similarity: 0.9 }), 'baseline');
  assert.equal(improvementSegment({ similarity: 0.9 }, { similarity: 0.95 }), 'sim+0.050000');
  assert.equal(improvementSegment({ similarity: 0.95 }, { similarity: 0.9 }), 'sim-0.050000');
});
