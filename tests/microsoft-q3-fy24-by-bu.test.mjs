import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['data/datasets/microsoft-q3-fy24-by-bu.js']);
  return context.DATASETS.find((entry) => entry.key === 'microsoft-q3-fy24-by-bu');
}

test('Microsoft Q3 FY24 By BU identifies the centered Tax and Other side labels', () => {
  const current = dataset();
  const expected = {
    tax: { x: 2520, top: 718 },
    other: { x: 2520, top: 834 },
  };

  for (const [nodeId, position] of Object.entries(expected)) {
    const block = current.layout.labels[nodeId].blocks[0];
    assert.equal(block.semanticRole, 'centered-side-label');
    assert.deepEqual(
      { x: block.x, top: block.top },
      position,
      `${nodeId} centered side-label anchor drifted`,
    );
  }
});
