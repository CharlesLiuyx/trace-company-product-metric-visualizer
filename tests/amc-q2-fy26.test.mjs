import test from 'node:test';
import assert from 'node:assert/strict';

import { loadClassicScripts } from './helpers/vm-load.mjs';

function amcDataset() {
  const context = loadClassicScripts(['data/datasets/amc-q2-fy26.js']);
  return context.DATASETS.find((dataset) => dataset.key === 'amc-q2-fy26');
}

test('AMC Q2 FY26 keeps the Net loss callout non-node and interactive', () => {
  const dataset = amcDataset();
  const nodeIds = new Set(dataset.nodes.map((node) => node.id));

  assert.equal(nodeIds.has('net_loss'), false);
  const netLoss = dataset.nonNodeMetrics.find((metric) => metric.id === 'net_loss');
  assert.equal(netLoss.representation, 'annotation');
  assert.equal(netLoss.label, 'Net loss');
  assert.equal(netLoss.value, -10);
  assert.equal(netLoss.valueText, '($10M)');
  assert.equal(netLoss.type, 'cost');
  assert.equal(netLoss.labelColor, '#941100');
  assert.match(dataset.annotationsSvg, /class="sankey-interactive-annotation" data-node="net_loss"/);
  assert.match(dataset.annotationsSvg, /M2320 383 C2296 383 2295 480 2265 480 H2190/);
});

test('AMC Q2 FY26 preserves Other theatre clearance above the KPI card', () => {
  const dataset = amcDataset();

  for (const annotations of [dataset.annotationsSvg, dataset.i18n.zh.annotationsSvg]) {
    assert.match(annotations, /x="289" y="1094"/);
    assert.match(annotations, /x="264\.5" y="1141"/);
    assert.match(annotations, /x="264\.5" y="1177"/);
    assert.match(annotations, /<rect x="49" y="1199"/);
  }
});
