import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function oracleDataset() {
  const context = loadClassicScripts(['data/datasets/oracle-q3-fy26.js']);
  return context.DATASETS.find((dataset) => dataset.key === 'oracle-q3-fy26');
}

test('Oracle cost-of-revenue side labels stay centered on their node faces', () => {
  const dataset = oracleDataset();
  const cases = [
    ['cor_cloud_software', 1004, 1023, 54, 35],
    ['cor_hardware', 1173, 1173, 35, 35],
    ['cor_services', 1287, 1287, 35, 35],
  ];

  for (const [nodeId, enTop, zhTop, enHalfHeight, zhHalfHeight] of cases) {
    const node = dataset.layout.nodes[nodeId];
    const nodeCenter = node.y + node.height / 2;
    const enLabel = dataset.layout.labels[nodeId].blocks[0];
    const zhLabel = dataset.i18n.zh.layout.labels[nodeId].blocks[0];

    assert.equal(enLabel.semanticRole, 'centered-side-label');
    assert.equal(zhLabel.semanticRole, 'centered-side-label');
    assert.equal(enLabel.top, enTop);
    assert.equal(zhLabel.top, zhTop);
    assert.ok(Math.abs((enLabel.top + enHalfHeight) - nodeCenter) <= 0.5);
    assert.ok(Math.abs((zhLabel.top + zhHalfHeight) - nodeCenter) <= 0.5);
  }
});
