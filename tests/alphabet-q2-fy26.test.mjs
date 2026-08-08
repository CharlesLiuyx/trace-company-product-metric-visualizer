import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function alphabetDataset() {
  const context = loadClassicScripts([
    'src/icons.js',
    'data/datasets/alphabet-q2-fy26.js',
  ]);
  return context.DATASETS.find((dataset) => dataset.key === 'alphabet-q2-fy26');
}

function otherRevenueGeometry(markup) {
  const guide = markup.match(/<path d="M(\d+) (\d+)H(\d+)C/);
  const amount = markup.match(
    /<text x="(\d+)" y="(\d+)" text-anchor="middle" font-size="36"\s+font-weight="400"[^>]*>\$0\.5B<\/text>/
  );

  assert.ok(guide, 'the Other revenue horizontal guide is present');
  assert.ok(amount, 'the Other revenue amount is present');

  return {
    guideStartX: Number(guide[1]),
    guideY: Number(guide[2]),
    guideEndX: Number(guide[3]),
    amountX: Number(amount[1]),
    amountY: Number(amount[2]),
  };
}

test('Alphabet Q2 FY26 centers Other $0.5B directly above its guide in both locales', () => {
  const dataset = alphabetDataset();

  for (const markup of [dataset.annotationsSvg, dataset.i18n.zh.annotationsSvg]) {
    const geometry = otherRevenueGeometry(markup);
    const guideCenterX = (geometry.guideStartX + geometry.guideEndX) / 2;

    assert.equal(geometry.amountX, guideCenterX);
    assert.ok(
      geometry.amountY < geometry.guideY,
      'the amount baseline stays above the horizontal guide'
    );
  }
});


test('Alphabet Q2 FY26 keeps Investment gains above Operating profit at Net profit', () => {
  const dataset = alphabetDataset();
  const investment = dataset.links.find((link) => link.source === 'investment_gains' && link.target === 'net_profit');
  const operating = dataset.links.find((link) => link.source === 'operating_profit' && link.target === 'net_profit');

  assert.equal(investment.targetOrder, 0);
  assert.equal(operating.targetOrder, 1);
});

