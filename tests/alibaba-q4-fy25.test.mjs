import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts([
    'src/icons.js',
    'data/datasets/alibaba-q4-fy25.js',
  ]);
  return context.DATASETS.find((item) => item.key === 'alibaba-q4-fy25');
}

const expectedPairs = Object.freeze({
  'taobao-tmall-brand-cluster': 'taobao_tmall',
  'international-commerce-brand-cluster': 'international_digital_commerce',
  'alibaba-cloud-brand-cluster': 'cloud',
  'cainiao-brand-cluster': 'cainiao',
  'local-services-brand-cluster': 'local_services',
  'digital-media-brand-cluster': 'digital_media',
  'all-others-brand-cluster': 'all_others',
});

function pairedGroups(markup) {
  return [...markup.matchAll(
    /<g[^>]*data-annotation-clearance="([^"]+)"[^>]*data-annotation-paired-node="([^"]+)"[^>]*data-annotation-paired-target="label"[^>]*data-annotation-paired-side="left"[^>]*>/g
  )];
}

test('Alibaba Q4 FY25 binds all seven business marks to their side labels', () => {
  const item = dataset();
  for (const markup of [item.annotationsSvg, item.i18n.zh.annotationsSvg]) {
    assert.deepEqual(
      Object.fromEntries(pairedGroups(markup).map((match) => [match[1], match[2]])),
      expectedPairs
    );
  }
});

test('Alibaba Q4 FY25 keeps the measured per-locale brand-cluster positions', () => {
  const item = dataset();
  const transforms = (markup) => Object.fromEntries(
    pairedGroups(markup).map((match) => [
      match[1],
      match[0].match(/transform="([^"]+)"/)?.[1],
    ])
  );

  assert.deepEqual(transforms(item.annotationsSvg), {
    'taobao-tmall-brand-cluster': 'translate(44 387.5)',
    'international-commerce-brand-cluster': 'translate(15 568)',
    'alibaba-cloud-brand-cluster': 'translate(9 765.96) scale(0.58)',
    'cainiao-brand-cluster': 'translate(18 884)',
    'local-services-brand-cluster': 'translate(18 992.24)',
    'digital-media-brand-cluster': 'translate(18 1128.5)',
    'all-others-brand-cluster': 'translate(18 1248.05)',
  });
  assert.deepEqual(transforms(item.i18n.zh.annotationsSvg), {
    ...transforms(item.annotationsSvg),
  });
});
