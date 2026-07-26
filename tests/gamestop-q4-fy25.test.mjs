import assert from 'node:assert/strict';
import test from 'node:test';
import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['data/datasets/gamestop-q4-fy25.js']);
  return context.DATASETS.find((entry) => entry.key === 'gamestop-q4-fy25');
}

test('GameStop Tax benefit amount stays centered below its title', () => {
  const data = dataset();

  for (const labels of [data.layout.labels, data.i18n.zh.layout.labels]) {
    const [title, amount] = labels.tax_benefit.blocks;
    assert.equal(title.anchor, 'start');
    assert.equal(amount.anchor, 'middle');
    assert.equal(amount.x, 2269);
    assert.equal(amount.top, 621);
    assert.equal(amount.lines[0].text, '$value');
  }
});
