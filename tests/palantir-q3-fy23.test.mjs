import assert from 'node:assert/strict';
import test from 'node:test';
import { loadClassicScripts } from '../scripts/lib/vm-browser.mjs';

function palantirDataset() {
  const context = loadClassicScripts(['data/datasets/palantir-q3-fy23.js']);
  return context.DATASETS.find((dataset) => dataset.key === 'palantir-q3-fy23');
}

test('Palantir Q3 FY23 keeps Interest as the bottom Net profit target interface', () => {
  const dataset = palantirDataset();
  const netProfitInflows = Array.from(
    dataset.links
      .filter((link) => link.target === 'net_profit')
      .sort((left, right) => left.targetOrder - right.targetOrder)
      .map((link) => link.source),
  );
  const interest = dataset.links.find(
    (link) => link.source === 'interest' && link.target === 'net_profit',
  );

  assert.deepEqual(netProfitInflows, ['other', 'operating_profit', 'interest']);
  assert.equal(interest.y1, 407.5);
  assert.equal(interest.y1 + interest.targetWidth / 2, 417);
});
