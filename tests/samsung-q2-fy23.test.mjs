import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts([
    'src/icons.js',
    'data/datasets/samsung-q2-fy23.js',
  ]);
  return context.DATASETS.find((item) => item.key === 'samsung-q2-fy23');
}

function pairedWordmarks(markup) {
  return Object.fromEntries(
    [...markup.matchAll(
      /<g[^>]*transform="([^"]+)"[^>]*data-annotation-clearance="(samsung-display-wordmark|harman-wordmark)"[^>]*data-annotation-paired-node="([^"]+)"[^>]*>/g
    )].map((match) => [match[2], { transform: match[1], node: match[3] }])
  );
}

test('Samsung Q2 FY23 keeps both highlighted wordmarks left of and paired with their node faces', () => {
  const item = dataset();
  assert.deepEqual(pairedWordmarks(item.annotationsSvg), {
    'samsung-display-wordmark': {
      transform: 'translate(88 1092.8) scale(0.96)',
      node: 'samsung_display',
    },
    'harman-wordmark': {
      transform: 'translate(88 1243.14) scale(0.88)',
      node: 'harman',
    },
  });

  assert.equal(item.layout.nodes.samsung_display.x, 431);
  assert.equal(item.layout.nodes.harman.x, 431);
});
