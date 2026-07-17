import test from 'node:test';
import assert from 'node:assert/strict';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function alibabaDataset() {
  const context = loadClassicScripts(['data/datasets/alibaba-q2-fy26.js']);
  return context.DATASETS.find((dataset) => dataset.key === 'alibaba-q2-fy26');
}

test('Alibaba Q2 FY26 Operating profit enters the bottom of Net profit', () => {
  const dataset = alibabaDataset();
  const netProfit = dataset.layout.nodes.net_profit;
  const link = (source) => dataset.links.find(
    (item) => item.source === source && item.target === 'net_profit'
  );
  const investments = link('investments');
  const operatingProfit = link('operating_profit');

  assert.equal(investments.targetOrder, 0);
  assert.equal(operatingProfit.targetOrder, 1);
  assert.equal(
    investments.y1 - investments.targetWidth / 2,
    netProfit.y,
    'Investments starts at the top of the Net profit face'
  );
  assert.equal(
    investments.y1 + investments.targetWidth / 2,
    operatingProfit.y1 - operatingProfit.targetWidth / 2,
    'The two incoming links remain contiguous at the target face'
  );
  assert.equal(
    operatingProfit.y1 + operatingProfit.targetWidth / 2,
    netProfit.y + netProfit.height,
    'Operating profit ends at the bottom of the Net profit face'
  );
});
