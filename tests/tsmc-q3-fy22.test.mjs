import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['src/icons.js', 'data/datasets/tsmc-q3-fy22.js']);
  return context.DATASETS.find((entry) => entry.key === 'tsmc-q3-fy22');
}

function orderedTargets(data, source) {
  return data.links
    .filter((link) => link.source === source)
    .sort((left, right) => left.sourceOrder - right.sourceOrder)
    .map((link) => link.target);
}

function orderedSources(data, target) {
  return data.links
    .filter((link) => link.target === target)
    .sort((left, right) => left.targetOrder - right.targetOrder)
    .map((link) => link.source);
}

test('TSMC Q3 FY22 preserves the Source-measured width and center at every link endpoint', () => {
  const data = dataset();
  assert.equal(data.render.interfaceAudit.mode, 'error');

  const expected = [
    ['smartphones', 'revenue', 177, 181, 539.5, 689.5],
    ['hpc', 'revenue', 168, 170, 759, 865],
    ['iot', 'revenue', 42, 45, 924, 972.5],
    ['automotive', 'revenue', 20, 21, 1061, 1005.5],
    ['dce', 'revenue', 6, 9, 1189, 1020.5],
    ['others', 'revenue', 11, 11, 1315.5, 1030.5],
    ['revenue', 'gross_profit', 265, 263, 731.5, 639.5],
    ['revenue', 'cost_of_revenue', 172, 171, 950, 1040.5],
    ['gross_profit', 'operating_profit', 222, 221, 619, 569.5],
    ['gross_profit', 'operating_expenses', 41, 41, 750.5, 938.5],
    ['operating_profit', 'net_profit', 196, 194, 557, 516],
    ['operating_profit', 'tax', 25, 24, 667.5, 958],
    ['other', 'net_profit', 2, 4, 711, 615],
    ['operating_expenses', 'rnd', 28, 29, 932, 1064.5],
    ['operating_expenses', 'sga', 12, 10, 952, 1200],
  ];

  assert.deepEqual(
    Array.from(data.links, (link) => [
      link.source,
      link.target,
      link.sourceWidth,
      link.targetWidth,
      link.y0,
      link.y1,
    ]),
    expected,
  );
});

test('TSMC Q3 FY22 preserves Source order at every multi-link face', () => {
  const data = dataset();

  assert.deepEqual(Array.from(orderedSources(data, 'revenue')), [
    'smartphones',
    'hpc',
    'iot',
    'automotive',
    'dce',
    'others',
  ]);
  assert.deepEqual(Array.from(orderedTargets(data, 'revenue')), [
    'gross_profit',
    'cost_of_revenue',
  ]);
  assert.deepEqual(Array.from(orderedTargets(data, 'gross_profit')), [
    'operating_profit',
    'operating_expenses',
  ]);
  assert.deepEqual(Array.from(orderedTargets(data, 'operating_profit')), [
    'net_profit',
    'tax',
  ]);
  assert.deepEqual(Array.from(orderedSources(data, 'net_profit')), [
    'operating_profit',
    'other',
  ]);
  assert.deepEqual(Array.from(orderedTargets(data, 'operating_expenses')), ['rnd', 'sga']);
});

test('TSMC Q3 FY22 keeps the Source-visible Other gains face and approved centered label', () => {
  const data = dataset();
  const node = data.layout.nodes.other;
  const label = data.layout.labels.other.blocks[0];
  const link = data.links.find((entry) => entry.source === 'other');

  assert.deepEqual(
    { x: node.x, y: node.y, width: node.width, height: node.height },
    { x: 2183, y: 710, width: 70, height: 2 },
  );
  assert.equal(link.sourceWidth, 2);
  assert.equal(link.y0, 711);
  assert.equal(label.anchor, 'middle');
  assert.equal(label.x, node.x + node.width / 2);
  assert.equal(label.top, 718);
});
