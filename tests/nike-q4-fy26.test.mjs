import assert from 'node:assert/strict';
import test from 'node:test';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function dataset() {
  const context = loadClassicScripts(['data/datasets/nike-q4-fy26.js']);
  return context.DATASETS.find((entry) => entry.key === 'nike-q4-fy26');
}

function linkByPair(data, source, target) {
  return data.links.find((link) => link.source === source && link.target === target);
}

function interval(link, side) {
  const center = side === 'source' ? link.y0 : link.y1;
  const width = side === 'source' ? link.sourceWidth : link.targetWidth;
  return [center - width / 2, center + width / 2];
}

test('Nike Q4 FY26 keeps both ends of tapered links flush with their node faces', () => {
  const data = dataset();
  const nodes = data.layout.nodes;
  const footwear = linkByPair(data, 'footwear', 'revenue');

  assert.equal(data.render.interfaceAudit.mode, 'error');
  assert.equal(footwear.sourceWidth, nodes.footwear.height);
  assert.notEqual(footwear.sourceWidth, footwear.targetWidth);

  for (const [source, target] of [
    ['revenue', 'cost_of_sales'],
    ['gross_profit', 'operating_expenses'],
    ['operating_profit', 'tax'],
    ['operating_expenses', 'overhead'],
  ]) {
    const link = linkByPair(data, source, target);
    assert.equal(link.targetWidth, nodes[target].height, `${source} -> ${target} target face`);
  }
});

test('Nike Q4 FY26 keeps every full-face link union continuous and contained', () => {
  const data = dataset();
  for (const [nodeId, node] of Object.entries(data.layout.nodes)) {
    for (const side of ['source', 'target']) {
      const endpoint = side === 'source' ? 'source' : 'target';
      const intervals = data.links
        .filter((link) => link[endpoint] === nodeId)
        .map((link) => interval(link, side))
        .sort((left, right) => left[0] - right[0]);
      if (!intervals.length) continue;

      assert.equal(intervals[0][0], node.y, `${nodeId} ${side} top`);
      assert.equal(intervals.at(-1)[1], node.y + node.height, `${nodeId} ${side} bottom`);
      for (let index = 1; index < intervals.length; index += 1) {
        assert.equal(intervals[index - 1][1], intervals[index][0], `${nodeId} ${side} continuity`);
      }
    }
  }
});
