import test from 'node:test';
import assert from 'node:assert/strict';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function adobeDataset() {
  const context = loadClassicScripts(['data/datasets/adobe-q2-fy23.js']);
  return context.DATASETS.find((dataset) => dataset.key === 'adobe-q2-fy23');
}

test('Adobe Q2 FY23 preserves the three Source-visible small faces', () => {
  const dataset = adobeDataset();

  assert.deepEqual(
    { ...dataset.layout.nodes.publishing_advertising },
    { x: 403, y: 1105, width: 71, height: 4 }
  );
  assert.deepEqual(
    { ...dataset.layout.nodes.other_income },
    { x: 2130, y: 492, width: 70, height: 5 }
  );
  assert.deepEqual(
    { ...dataset.layout.nodes.amortization },
    { x: 2271, y: 1222, width: 71, height: 4 }
  );

  const publishing = dataset.nodes.find((node) => node.id === 'publishing_advertising');
  const other = dataset.nodes.find((node) => node.id === 'other_income');
  const amortization = dataset.nodes.find((node) => node.id === 'amortization');

  assert.equal(publishing.value, 0.1);
  assert.equal(other.value, 0.026);
  assert.equal(other.valueText, '$26M');
  assert.equal(other.color, '#2ca02c');
  assert.equal(amortization.value, 0.042);
  assert.equal(amortization.valueText, '($42M)');
  assert.equal(amortization.color, '#cc0000');
  assert.equal(dataset.nonNodeMetrics, undefined);
});

test('Adobe Q2 FY23 keeps Source-measured multi-link face ordering', () => {
  const dataset = adobeDataset();
  const incomingRevenue = Array.from(
    dataset.links.filter((link) => link.target === 'revenue').sort((a, b) => a.targetOrder - b.targetOrder),
    (link) => link.source
  );
  const outgoingOpex = Array.from(
    dataset.links.filter((link) => link.source === 'operating_expenses').sort((a, b) => a.sourceOrder - b.sourceOrder),
    (link) => link.target
  );
  const incomingNet = Array.from(
    dataset.links.filter((link) => link.target === 'net_profit').sort((a, b) => a.targetOrder - b.targetOrder),
    (link) => link.source
  );

  assert.deepEqual(incomingRevenue, [
    'digital_media',
    'digital_experience',
    'publishing_advertising',
  ]);
  assert.deepEqual(outgoingOpex, ['sm', 'rnd', 'ga', 'amortization']);
  assert.deepEqual(incomingNet, ['operating_profit', 'other_income']);
});
