import assert from 'node:assert/strict';
import test from 'node:test';
import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['data/datasets/microsoft-q3-fy23.js']);
  return context.DATASETS.find((entry) => entry.key === 'microsoft-q3-fy23');
}

test('Microsoft Q3 FY23 keeps Source-visible Other as an independent inflow to net profit', () => {
  const current = dataset();
  const other = current.nodes.find((node) => node.id === 'other');
  assert.equal(other.value, 0.3);
  assert.ok(current.layout.nodes.other.height >= 3);
  assert.ok(current.links.some((link) =>
    link.source === 'other' && link.target === 'net_profit' && link.value === 0.3
  ));
  assert.ok(!current.links.some((link) =>
    link.source === 'operating_profit' && link.target === 'other'
  ));
});

test('Microsoft Q3 FY23 operating-profit bridge reconciles to net profit and tax', () => {
  const current = dataset();
  const operatingProfitOut = current.links
    .filter((link) => link.source === 'operating_profit')
    .reduce((sum, link) => sum + link.value, 0);
  const netProfitIn = current.links
    .filter((link) => link.target === 'net_profit')
    .reduce((sum, link) => sum + link.value, 0);
  assert.equal(operatingProfitOut, 22.4);
  assert.equal(netProfitIn, 18.3);
});
