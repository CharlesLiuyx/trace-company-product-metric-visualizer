import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['data/datasets/lvmh-h1-fy26.js']);
  return context.DATASETS.find((entry) => entry.key === 'lvmh-h1-fy26');
}

test('LVMH H1 FY26 keeps the four highlighted business labels on one close right edge', () => {
  const data = dataset();
  const ids = [
    'fashion_leather_goods',
    'perfumes_cosmetics',
    'watches_jewelry',
    'selective_retailing',
  ];

  [data.layout.labels, data.i18n.zh.layout.labels].forEach((labels) => {
    ids.forEach((id) => {
      const node = data.layout.nodes[id];
      const block = labels[id].blocks[1];
      const height = block.lines.reduce((sum, line) => sum + line.size, 0)
        + block.lineGap * (block.lines.length - 1);
      assert.equal(block.x, 450, `${id} right edge drifted`);
      assert.equal(block.anchor, 'end', `${id} lost right alignment`);
      assert.equal(block.semanticRole, 'centered-side-label');
      assert.equal(block.top + height / 2, node.y + node.height / 2, `${id} is not vertically centered`);
      assert.equal(node.x - block.x, 27, `${id} is no longer close to its bar`);
    });
  });
});
