import assert from 'node:assert/strict';
import test from 'node:test';
import vm from 'node:vm';
import { readFile } from 'node:fs/promises';

test('pepsico q2 fy23 preserves short Other and Interest faces', async () => {
  const source = await readFile(new URL('../data/datasets/pepsico-q2-fy23.js', import.meta.url), 'utf8');
  const window = { DATASETS: [] };
  vm.runInNewContext(source, { window });
  const data = window.DATASETS[0];
  assert.equal(data.layout.nodes.other.height, 1);
  assert.equal(data.layout.nodes.interest.height, 1);
  assert.equal(data.nodes.find((node) => node.id === 'other').value, 0.1);
  assert.equal(data.nodes.find((node) => node.id === 'interest').value, 0.2);
  assert.equal(data.links.find((link) => link.source === 'other').target, 'net_profit');
});

test('pepsico q2 fy23 keeps the Europe value block at the user-approved five-pixel node gap', async () => {
  const source = await readFile(new URL('../data/datasets/pepsico-q2-fy23.js', import.meta.url), 'utf8');
  const window = { DATASETS: [] };
  vm.runInNewContext(source, { window });
  const data = window.DATASETS[0];
  assert.equal(data.layout.labels.europe.blocks[0].top, 931);
  assert.equal(data.i18n.zh.layout.labels.europe.blocks[0].top, 931);
  assert.equal(data.layout.nodes.europe.y, 1025);
});
