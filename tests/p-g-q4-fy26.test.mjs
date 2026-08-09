import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['data/datasets/p-g-q4-fy26.js']);
  return context.DATASETS.find((entry) => entry.key === 'p-g-q4-fy26');
}

test('P&G Q4 FY26 keeps the Source-aligned light-green Other link', () => {
  const data = dataset();
  const link = data.links.find(
    (entry) => entry.source === 'other_income' && entry.target === 'net_profit',
  );

  assert.deepEqual(
    { ...data.layout.nodes.other_income },
    { x: 2277, y: 463, width: 3, height: 3 },
  );
  assert.deepEqual({ ...link.curve }, {
    c1x: 2293,
    c1y: 464.5,
    c2x: 2306.5,
    c2y: 416.5,
  });
  assert.deepEqual({ ...link.linkTint }, {
    left: '#5db45d',
    right: '#9ccc9c',
  });
  assert.equal(link.width, 3);
});

test('P&G Q4 FY26 aligns both locale guides with the Other link center', () => {
  const data = dataset();
  const expectedGuide = 'data-link-anchor-y="464.5"><rect x="2195" y="463" width="82" height="3" fill="#5db45d"';

  assert.match(data.annotationsSvg, new RegExp(expectedGuide));
  assert.match(data.i18n.zh.annotationsSvg, new RegExp(expectedGuide));
});
