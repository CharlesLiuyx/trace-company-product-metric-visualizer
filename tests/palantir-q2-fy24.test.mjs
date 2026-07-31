import test from 'node:test';
import assert from 'node:assert/strict';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function palantirDataset() {
  const context = loadClassicScripts(['data/datasets/palantir-q2-fy24.js']);
  return context.DATASETS.find((dataset) => dataset.key === 'palantir-q2-fy24');
}

test('Palantir Q2 FY24 preserves the Source-visible Other and Tax terminal faces', () => {
  const dataset = palantirDataset();
  const expectations = {
    other: { value: 11, y: 542, height: 4, width: 4, y1: 544 },
    tax: { value: 5, y: 659, height: 2, width: 2, y1: 660 },
  };

  for (const [id, expected] of Object.entries(expectations)) {
    const node = dataset.nodes.find((item) => item.id === id);
    const link = dataset.links.find(
      (item) => item.source === 'operating_profit' && item.target === id
    );

    assert.deepEqual(
      { ...dataset.layout.nodes[id] },
      { x: 2249, y: expected.y, width: 71, height: expected.height }
    );
    assert.equal(node.value, expected.value);
    assert.equal(node.color, '#cc0000');
    assert.equal(link.interactionOnly, undefined);
    assert.equal(link.sourceWidth ?? link.width, expected.width);
    assert.equal(link.targetWidth ?? link.width, expected.width);
    assert.equal(link.y1, expected.y1);
  }
});

test('Palantir Q2 FY24 keeps both audited binary interfaces continuous', () => {
  const dataset = palantirDataset();
  const mainProfit = dataset.links.find(
    (item) => item.source === 'operating_profit' && item.target === 'net_profit'
  );
  const interest = dataset.links.find(
    (item) => item.source === 'interest' && item.target === 'net_profit'
  );

  assert.deepEqual(
    {
      mainSource: [mainProfit.y0 - mainProfit.sourceWidth / 2, mainProfit.y0 + mainProfit.sourceWidth / 2],
      otherSource: [471, 475],
      taxSource: [475, 477],
    },
    {
      mainSource: [422, 471],
      otherSource: [471, 475],
      taxSource: [475, 477],
    }
  );
  assert.deepEqual(
    {
      mainTarget: [mainProfit.y1 - mainProfit.targetWidth / 2, mainProfit.y1 + mainProfit.targetWidth / 2],
      interestTarget: [interest.y1 - interest.targetWidth / 2, interest.y1 + interest.targetWidth / 2],
    },
    {
      mainTarget: [302, 350],
      interestTarget: [350, 373],
    }
  );
});
