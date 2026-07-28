import assert from 'node:assert/strict';
import test from 'node:test';
import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts([
    'src/icons.js',
    'data/datasets/microsoft-q1-fy24-by-bu.js',
  ]);
  return context.DATASETS.find((entry) => entry.key === 'microsoft-q1-fy24-by-bu');
}

test('Microsoft Q1 FY24 By BU keeps the Source title, period, and brand clusters in place', () => {
  const current = dataset();

  assert.equal(current.meta.title, 'Microsoft Q1 FY24 Income Statement');
  assert.notEqual(current.meta.hideTitle, true);
  assert.notEqual(current.meta.hidePeriodStamp, true);
  assert.deepEqual(
    {
      titleX: current.meta.titleX,
      titleY: current.meta.titleY,
      titleSize: current.meta.titleSize,
      titleTextLength: current.meta.titleTextLength,
      periodX: current.meta.periodX,
      periodY: current.meta.periodY,
      periodNoteY: current.meta.periodNoteY,
      logoX: current.meta.logoX,
      logoY: current.meta.logoY,
    },
    {
      titleX: 1338,
      titleY: 198,
      titleSize: 126,
      titleTextLength: 2310,
      periodX: 2378,
      periodY: 253,
      periodNoteY: 298,
      logoX: 650,
      logoY: 250,
    },
  );
  assert.match(current.annotationsSvg, /translate\(71 405\)/);
  assert.match(current.annotationsSvg, /translate\(250 731\)/);
  assert.match(current.annotationsSvg, /translate\(191 1105\)/);
  assert.match(current.annotationsSvg, /translate\(326 1100\)/);
});

test('Microsoft Q1 FY24 By BU fixed labels retain Source-measured anchors and vertical positions', () => {
  const current = dataset();
  const expected = {
    productivity_business_processes: [[515, 352], [283, 535]],
    intelligent_cloud: [[515, 721], [304, 905]],
    more_personal_computing: [[515, 1105], [250, 1209]],
    revenue: [[983, 516]],
    gross_profit: [[1450, 400]],
    cost_of_revenue: [[1451, 1173]],
    operating_profit: [[1917, 284]],
    operating_expenses: [[1916, 983]],
    net_profit: [[2439, 384]],
    tax: [[2529, 720]],
    rnd: [[2530, 899]],
    sm: [[2529, 1057]],
    ga: [[2529, 1190]],
  };

  for (const [node, positions] of Object.entries(expected)) {
    assert.deepEqual(
      Array.from(current.layout.labels[node].blocks, ({ x, top }) => [x, top]),
      positions,
      `${node} fixed-label coordinates drifted`,
    );
  }

  assert.equal(current.layout.labels.cost_of_revenue.blocks[0].lineGap, 4);
  assert.equal(current.layout.labels.ga.blocks[0].lineGap, 21);
  assert.equal(current.i18n.zh.layout.labels.sm.blocks[0].lineGap, 0);
  assert.equal(current.layout.routes.other.y, 584);
});
