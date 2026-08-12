import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['data/datasets/pepsico-q4-fy22.js']);
  return context.DATASETS.find((entry) => entry.key === 'pepsico-q4-fy22');
}

test('PepsiCo Q4 FY22 keeps the user-corrected AMESA group right-aligned and centered', () => {
  const data = dataset();
  const label = data.layout.labels.amesa.blocks[1];
  const zhLabel = data.i18n.zh.layout.labels.amesa.blocks[1];
  const globe = data.rasterAnnotations.find((asset) => asset.key === 'pepsico-fy22-globe-amesa');

  assert.deepEqual(
    { x: label.x, top: label.top, anchor: label.anchor, semanticRole: label.semanticRole },
    { x: 759, top: 1196, anchor: 'end', semanticRole: 'centered-side-label' },
  );
  assert.deepEqual(
    { x: zhLabel.x, top: zhLabel.top, anchor: zhLabel.anchor, semanticRole: zhLabel.semanticRole },
    { x: 759, top: 1196, anchor: 'end', semanticRole: 'centered-side-label' },
  );
  assert.deepEqual(
    {
      x: globe.x,
      y: globe.y,
      pairedNode: globe.pairedNode,
      pairedTarget: globe.pairedTarget,
      pairedSide: globe.pairedSide,
    },
    { x: 79, y: 1175, pairedNode: 'amesa', pairedTarget: 'label', pairedSide: 'left' },
  );
});
