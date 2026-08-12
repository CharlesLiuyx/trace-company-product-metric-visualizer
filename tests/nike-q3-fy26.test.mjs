import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['data/datasets/nike-q3-fy26.js']);
  return context.DATASETS.find((entry) => entry.key === 'nike-q3-fy26');
}

test('Nike Q3 FY26 keeps every rendered link endpoint contained by its node face', () => {
  const data = dataset();
  const nodes = data.layout.nodes;

  assert.equal(data.render.interfaceAudit.mode, 'error');

  for (const [id, node] of Object.entries(nodes)) {
    const outgoing = data.links.filter((link) => link.source === id && !link.interactionOnly);
    const incoming = data.links.filter((link) => link.target === id && !link.interactionOnly);

    if (outgoing.length) {
      assert.equal(
        outgoing.reduce((sum, link) => sum + link.sourceWidth, 0),
        node.height,
        `${id} outgoing interfaces fill the Source-measured face`,
      );
    }
    if (incoming.length) {
      assert.equal(
        incoming.reduce((sum, link) => sum + link.targetWidth, 0),
        node.height,
        `${id} incoming interfaces fill the Source-measured face`,
      );
    }
  }
});

test('Nike Q3 FY26 preserves independent widths at every unequal endpoint pair', () => {
  const data = dataset();
  const byPair = new Map(data.links.map((link) => [`${link.source}->${link.target}`, link]));

  assert.deepEqual(
    [
      'footwear->revenue',
      'revenue->cost_of_sales',
      'operating_profit->tax',
      'operating_expenses->overhead',
    ].map((pair) => {
      const link = byPair.get(pair);
      return [pair, link.sourceWidth, link.targetWidth];
    }),
    [
      ['footwear->revenue', 248, 253],
      ['revenue->cost_of_sales', 229, 227],
      ['operating_profit->tax', 3, 2],
      ['operating_expenses->overhead', 99, 97],
    ],
  );
});
