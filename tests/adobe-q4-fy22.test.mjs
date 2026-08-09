import test from 'node:test';
import assert from 'node:assert/strict';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function adobeDataset() {
  const context = loadClassicScripts(['data/datasets/adobe-q4-fy22.js']);
  return context.DATASETS.find((dataset) => dataset.key === 'adobe-q4-fy22');
}

function otherAnnotation(markup) {
  const group = markup.match(
    /<g class="sankey-interactive-annotation"[\s\S]*?data-node="other_income"[\s\S]*?<\/g>/
  )?.[0];
  assert.ok(group, 'Other income annotation group must exist');
  return group;
}

test('Adobe Q4 FY22 keeps Other in the user-marked slot below its guide in both locales', () => {
  const dataset = adobeDataset();
  const netProfit = dataset.layout.nodes.net_profit;

  for (const markup of [dataset.annotationsSvg, dataset.i18n.zh.annotationsSvg]) {
    const group = otherAnnotation(markup);
    const textPositions = Array.from(
      group.matchAll(/<text x="([^"]+)" y="([^"]+)"/g),
      (match) => ({ x: Number(match[1]), y: Number(match[2]) })
    );

    assert.deepEqual(textPositions, [
      { x: 2206, y: 550 },
      { x: 2206, y: 590 },
    ]);
    assert.ok(textPositions.every(({ y }) => y > netProfit.y + netProfit.height));
    assert.ok(textPositions.every(({ x }) => x < netProfit.x));
    assert.match(group, /data-user-directed-layout="other-income-under-guide-left-of-net-profit"/);
  }
});

test('Adobe Q4 FY22 keeps the user-requested deeper Net profit face color', () => {
  const dataset = adobeDataset();
  const netProfit = dataset.nodes.find((node) => node.id === 'net_profit');

  assert.equal(netProfit.color, '#008f51');
});
