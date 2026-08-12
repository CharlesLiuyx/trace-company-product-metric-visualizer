import assert from 'node:assert/strict';
import test from 'node:test';
import vm from 'node:vm';
import { readFile } from 'node:fs/promises';

async function dataset() {
  const source = await readFile(new URL('../data/datasets/pepsico-q1-fy23.js', import.meta.url), 'utf8');
  const window = { DATASETS: [] };
  vm.runInNewContext(source, { window });
  return window.DATASETS[0];
}

test('pepsico q1 fy23 right-aligns the regional side-label column', async () => {
  const data = await dataset();
  for (const labels of [data.layout.labels, data.i18n.zh.layout.labels]) {
    for (const node of ['latam', 'europe', 'amesa']) {
      const nameBlock = labels[node].blocks[1];
      assert.equal(nameBlock.x, 768);
      assert.equal(nameBlock.anchor, 'end');
      assert.equal(nameBlock.semanticRole, 'aligned-side-label-column');
    }
  }
});

test('pepsico q1 fy23 binds the AMESA globe bbox to label-clearance auditing', async () => {
  const data = await dataset();
  const globe = data.rasterAnnotations.find((item) => item.key === 'pepsico-globe-amesa-q4-fy23');
  assert.equal(globe.x + globe.width, 116);
  assert.match(data.annotationsSvg, /data-annotation-clearance="pepsico-globe-amesa-q4-fy23"/);
  assert.match(data.annotationsSvg, /x="33" y="1135" width="83" height="82"/);
});
