import test from 'node:test';
import assert from 'node:assert/strict';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function microsoftDataset() {
  const context = loadClassicScripts(['data/datasets/microsoft-q2-fy26.js']);
  return context.DATASETS.find((dataset) => dataset.key === 'microsoft-q2-fy26');
}

test('Microsoft Q2 FY26 Search link fills its painted source interface', () => {
  const dataset = microsoftDataset();
  const search = dataset.layout.nodes.search;
  const searchLink = dataset.links.find((link) => link.source === 'search' && link.target === 'revenue');

  assert.deepEqual(Array.from(dataset.render.interfaceAudit.fullFaceIds), ['search:right']);
  assert.equal(searchLink.sourceWidth, search.height);
});
