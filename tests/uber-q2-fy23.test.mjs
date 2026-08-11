import test from 'node:test';
import assert from 'node:assert/strict';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['data/datasets/uber-q2-fy23.js']);
  return context.DATASETS.find((entry) => entry.key === 'uber-q2-fy23');
}

test('Uber Q2 FY23 preserves the Source-visible 71x3 Tax face', () => {
  const current = dataset();
  const tax = current.nodes.find((node) => node.id === 'tax');
  const taxLink = current.links.find(
    (link) => link.source === 'operating_profit' && link.target === 'tax'
  );

  assert.deepEqual(
    { ...current.layout.nodes.tax },
    { x: 2232, y: 638, width: 71, height: 3 }
  );
  assert.equal(tax.value, 0.1);
  assert.equal(tax.color, '#cc0000');
  assert.equal(taxLink.width, 3);
  assert.equal(taxLink.interactionOnly, undefined);
});

test('Uber Q2 FY23 keeps Other as a visible income branch into Net profit', () => {
  const current = dataset();
  const other = current.nodes.find((node) => node.id === 'other');
  const otherLink = current.links.find(
    (link) => link.source === 'other' && link.target === 'net_profit'
  );

  assert.deepEqual(
    { ...current.layout.nodes.other },
    { x: 2098, y: 377, width: 70, height: 12 }
  );
  assert.equal(other.value, 0.3);
  assert.equal(other.color, '#2ca02c');
  assert.equal(otherLink.width, 12);
  assert.equal(
    current.links.some((link) => link.source === 'operating_profit' && link.target === 'other'),
    false
  );
});
