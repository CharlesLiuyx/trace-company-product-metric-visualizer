import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts([
    'src/icons.js',
    'data/datasets/alibaba-q4-fy24.js',
  ]);
  return context.DATASETS.find((item) => item.key === 'alibaba-q4-fy24');
}

const expectedPairs = Object.freeze({
  'taobao-tmall-brands': 'taobao_tmall',
  'international-commerce-brands': 'international_digital_commerce',
  'local-services-brands': 'local_services',
  'cainiao-brand': 'cainiao',
  'alibaba-cloud-brand': 'cloud',
  'digital-media-brand': 'digital_media',
  'all-others-brands': 'all_others',
});

test('Alibaba Q4 FY24 binds every business brand cluster to its semantic node', () => {
  const item = dataset();
  for (const markup of [item.annotationsSvg, item.i18n.zh.annotationsSvg]) {
    const pairs = Object.fromEntries(
      [...markup.matchAll(/data-annotation-clearance="([^"]+)" data-annotation-paired-node="([^"]+)"/g)]
        .map((match) => [match[1], match[2]])
    );
    assert.deepEqual(pairs, expectedPairs);
  }
});

test('Alibaba Q4 FY24 keeps the user-approved downward brand-cluster corrections', () => {
  const item = dataset();
  const transforms = Object.fromEntries(
    [...item.annotationsSvg.matchAll(/data-annotation-clearance="([^"]+)"[^>]+transform="([^"]+)"/g)]
      .map((match) => [match[1], match[2]])
  );
  assert.deepEqual(transforms, {
    'taobao-tmall-brands': 'translate(0 112)',
    'international-commerce-brands': 'translate(0 171)',
    'local-services-brands': 'translate(0 197)',
    'cainiao-brand': 'translate(0 226)',
    'alibaba-cloud-brand': 'translate(0 248)',
    'digital-media-brand': 'translate(0 293.5)',
    'all-others-brands': 'translate(0 308.5)',
  });
  assert.match(item.i18n.zh.annotationsSvg, /transform="translate\(0 293\.5\)"/);
});

test('Alibaba Q4 FY24 keeps the user-approved period and Net profit alignment', () => {
  const item = dataset();
  assert.equal(item.meta.periodY, 306);
  assert.equal(item.meta.periodNoteY, 348);
  assert.equal(item.layout.labels.net_profit.blocks[0].top, 377);
  assert.equal(item.layout.labels.net_profit.blocks[0].semanticRole, 'centered-side-label');

  const netProfit = item.layout.nodes.net_profit;
  const expectedLabelCenterY = 449.5;
  assert.equal(netProfit.y + netProfit.height / 2, 449);
  assert.ok(Math.abs(expectedLabelCenterY - (netProfit.y + netProfit.height / 2)) <= 1);
});
