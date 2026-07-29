import test from 'node:test';
import assert from 'node:assert/strict';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['data/datasets/meta-q4-fy23.js']);
  return context.DATASETS.find((entry) => entry.key === 'meta-q4-fy23');
}

test('Meta Q4 FY23 preserves the Source-painted short Other face and zero-face Interest guide', () => {
  const data = dataset();

  assert.deepEqual(
    { ...data.layout.nodes.other_revenue },
    { x: 495, y: 1082, width: 66, height: 2 }
  );
  assert.notEqual(data.nodes.find((node) => node.id === 'other_revenue').color, 'transparent');
  assert.equal(data.nodes.some((node) => node.id === 'interest'), false);
  assert.deepEqual(
    { ...data.layout.routes.interest },
    { x: 2133, y: 654, width: 0, height: 1 }
  );
  assert.deepEqual(
    { ...data.nonNodeMetrics.find(({ id }) => id === 'interest') },
    {
      id: 'interest',
      representation: 'flow',
      label: 'Interest',
      value: 0.4,
      type: 'profit',
      labelColor: '#008f51',
    }
  );
});

test('Meta Q4 FY23 preserves Source endpoint identity order', () => {
  const data = dataset();
  const netProfitIn = data.links
    .filter((link) => link.target === 'net_profit')
    .sort((left, right) => left.targetOrder - right.targetOrder)
    .map((link) => link.sourceRoute || link.source);
  const operatingExpensesOut = data.links
    .filter((link) => link.source === 'operating_expenses')
    .sort((left, right) => left.sourceOrder - right.sourceOrder)
    .map((link) => link.target);

  assert.deepEqual(Array.from(netProfitIn), ['operating_profit', 'interest']);
  assert.deepEqual(Array.from(operatingExpensesOut), ['rnd', 'sm', 'ga']);
});

test('Meta Q4 FY23 keeps business-unit operating results as semantic annotations', () => {
  const data = dataset();
  const metrics = data.nonNodeMetrics
    .filter(({ representation }) => representation === 'annotation')
    .map(({ id, representation, value }) => ({
    id,
    representation,
    value,
    }));

  assert.deepEqual(Array.from(metrics), [
    { id: 'foa_operating_profit', representation: 'annotation', value: 21.0 },
    { id: 'reality_labs_operating_loss', representation: 'annotation', value: -4.6 },
  ]);
  assert.match(data.annotationsSvg, /data-node="foa_operating_profit"/);
  assert.match(data.annotationsSvg, /data-node="reality_labs_operating_loss"/);
});
