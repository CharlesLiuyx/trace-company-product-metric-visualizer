import test from 'node:test';
import assert from 'node:assert/strict';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function pepsicoDataset() {
  const context = loadClassicScripts(['data/datasets/pepsico-q1-fy25.js']);
  return context.DATASETS.find((dataset) => dataset.key === 'pepsico-q1-fy25');
}

test('PepsiCo Other preserves its Source-confirmed 70x2 face and lower Net profit interface', () => {
  const dataset = pepsicoDataset();
  const other = dataset.nodes.find((node) => node.id === 'other_income');
  const otherLink = dataset.links.find(
    (link) => link.source === 'other_income' && link.target === 'net_profit'
  );
  const operatingLink = dataset.links.find(
    (link) => link.source === 'operating_profit' && link.target === 'net_profit'
  );

  assert.deepEqual(
    { ...dataset.layout.nodes.other_income },
    { x: 2215, y: 438, width: 70, height: 2 }
  );
  assert.equal(other.value, 0.023);
  assert.equal(other.valueText, '$23M');
  assert.equal(dataset.nonNodeMetrics, undefined);
  assert.equal(otherLink.sourceWidth, 2);
  assert.equal(otherLink.targetWidth, 2);
  assert.equal(operatingLink.targetOrder, 0);
  assert.equal(otherLink.targetOrder, 1);
});

test('PepsiCo preserves displayed decimal zeros for integer-valued nodes', () => {
  const dataset = pepsicoDataset();
  const apac = dataset.nodes.find((node) => node.id === 'apac');
  const grossProfit = dataset.nodes.find((node) => node.id === 'gross_profit');

  assert.equal(apac.valueText, '$1.0B');
  assert.equal(grossProfit.valueText, '$10.0B');
});

test('PepsiCo EMEA value block is centered directly above its node', () => {
  const dataset = pepsicoDataset();
  const emeaNode = dataset.layout.nodes.emea;
  const emeaValueBlock = dataset.layout.labels.emea.blocks[0];

  assert.equal(emeaValueBlock.x, emeaNode.x + emeaNode.width / 2);
  assert.equal(emeaValueBlock.top, 1133);
});

test('PepsiCo North America globe clears the label instead of overlapping it', () => {
  const dataset = pepsicoDataset();
  const globe = dataset.rasterAnnotations.find(
    (annotation) => annotation.key === 'pepsico-globe-north-america'
  );
  const northAmericaLabel = dataset.layout.labels.north_america.blocks[0];

  assert.equal(globe.y, 267);
  assert.ok(globe.y + globe.height <= northAmericaLabel.top - 5);
});
