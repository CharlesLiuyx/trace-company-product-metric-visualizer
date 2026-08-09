import test from 'node:test';
import assert from 'node:assert/strict';
import { loadClassicScripts } from './helpers/vm-load.mjs';

function ibmDataset() {
  const context = loadClassicScripts(['data/datasets/ibm-q4-fy23.js']);
  return context.DATASETS.find((dataset) => dataset.key === 'ibm-q4-fy23');
}

test('IBM Q4 FY23 keeps the Other and IP inflows on Operating expenses', () => {
  const dataset = ibmDataset();
  const node = dataset.layout.nodes.operating_expenses;
  const inflows = dataset.links
    .filter((link) => link.target === 'operating_expenses')
    .sort((a, b) => a.targetOrder - b.targetOrder);

  assert.equal(
    inflows.map((link) => link.source).join(','),
    'gross_profit,intellectual_property,other_income'
  );
  assert.equal(
    dataset.links.some((link) => link.source === 'other_income' && link.target === 'net_profit'),
    false
  );
  assert.equal(inflows.reduce((sum, link) => sum + link.targetWidth, 0), node.height);
  assert.equal(inflows[0].y1 - inflows[0].targetWidth / 2, node.y);
  assert.equal(inflows[2].y1 + inflows[2].targetWidth / 2, node.y + node.height);
});

test('IBM Q4 FY23 preserves every measured sub-floor face', () => {
  const dataset = ibmDataset();
  const expectedHeights = {
    other_revenue: 1,
    intellectual_property: 2,
    other_income: 2,
  };

  for (const [nodeId, expectedHeight] of Object.entries(expectedHeights)) {
    const layoutNode = dataset.layout.nodes[nodeId];
    const semanticNode = dataset.nodes.find((node) => node.id === nodeId);
    assert.equal(layoutNode.height, expectedHeight, nodeId);
    assert.notEqual(semanticNode.color.toLowerCase(), dataset.render.background.toLowerCase(), nodeId);
  }
});
