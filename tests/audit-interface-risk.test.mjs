import test from 'node:test';
import assert from 'node:assert/strict';
import {
  auditDatasetInterfaceRisk,
  buildInterfaceRiskReport,
  formatInterfaceRiskReport,
  parseArgs,
} from '../scripts/audit-interface-risk.mjs';

function fixture() {
  return {
    key: 'interface-fixture',
    layout: {
      nodes: {
        source: { x: 0, y: 0, width: 10, height: 10 },
        hub: { x: 100, y: 0, width: 10, height: 9 },
        sink_a: { x: 200, y: 0, width: 10, height: 4 },
        sink_b: { x: 200, y: 20, width: 10, height: 5 },
      },
    },
    links: [
      { source: 'source', target: 'hub', width: 4, sourceWidth: 4, targetWidth: 4, y0: 2, y1: 2 },
      { source: 'source', target: 'hub', width: 5 },
      { source: 'hub', target: 'sink_a', width: 4, sourceWidth: 4, targetWidth: 4, y0: 2, y1: 2 },
      { source: 'hub', target: 'sink_b', width: 5, sourceWidth: 5, targetWidth: 5, y0: 6.5, y1: 22.5 },
    ],
  };
}

test('audit inventories width sums without treating them as correctness failures', () => {
  const result = auditDatasetInterfaceRisk(fixture(), { script: 'data/datasets/interface-fixture.js' });
  assert.equal(result.fixedLayout, true);
  assert.equal(result.fixedNodeCount, 4);
  assert.equal(result.manualWidthLinkCount, 4);

  assert.deepEqual(
    result.mismatchInterfaces.map(({ nodeId, side, difference, uncovered }) => ({
      nodeId,
      side,
      difference,
      uncovered,
    })),
    [{ nodeId: 'source', side: 'source', difference: -1, uncovered: 1 }]
  );
  assert.equal(result.flagged, true, 'findings flag the dataset for review but do not throw');
});

test('audit identifies multi-input/output nodes and incomplete endpoint fields', () => {
  const result = auditDatasetInterfaceRisk(fixture());
  assert.deepEqual(result.multiLinkNodes, [
    { nodeId: 'source', incomingCount: 0, outgoingCount: 2, multiInput: false, multiOutput: true },
    { nodeId: 'hub', incomingCount: 2, outgoingCount: 2, multiInput: true, multiOutput: true },
  ]);
  assert.deepEqual(result.highRiskLinks, [
    {
      link: 'source→hub#1',
      source: 'source',
      target: 'hub',
      missingFields: ['sourceWidth', 'y0', 'targetWidth', 'y1'],
    },
  ]);
});

test('incomplete effective widths are reported but excluded from sum differences', () => {
  const dataset = fixture();
  dataset.links.push({ source: 'source', target: 'sink_a', value: 1 });
  const result = auditDatasetInterfaceRisk(dataset);
  const source = result.interfaces.find((item) => item.nodeId === 'source' && item.side === 'source');
  assert.equal(source.complete, false);
  assert.equal(source.measuredLinkCount, 2);
  assert.equal(source.linkCount, 3);
  assert.ok(!result.mismatchInterfaces.some((item) => item.nodeId === 'source'));
});

test('report summary is deterministic and human-readable', () => {
  const report = buildInterfaceRiskReport([fixture()], {
    sourceByKey: new Map([['interface-fixture', 'data/datasets/interface-fixture.js']]),
  });
  assert.deepEqual(report.summary, {
    datasetCount: 1,
    fixedLayoutDatasetCount: 1,
    flaggedDatasetCount: 1,
    fixedNodeCount: 4,
    manualWidthLinkCount: 4,
    mismatchInterfaceCount: 1,
    multiLinkNodeCount: 2,
    highRiskLinkCount: 1,
  });
  assert.equal(report.datasets[0].script, 'data/datasets/interface-fixture.js');
  const text = formatInterfaceRiskReport(report, { detailed: true });
  assert.match(text, /Inventory only/);
  assert.match(text, /source\/source: height=10, sum=9, difference=-1/);
  assert.match(text, /source→hub#1: missing sourceWidth, y0, targetWidth, y1/);
});

test('CLI args accept dataset filters and JSON output', () => {
  assert.deepEqual(parseArgs(['--', 'alpha-q1-fy26', '--json']), {
    json: true,
    help: false,
    keys: ['alpha-q1-fy26'],
  });
  assert.throws(() => parseArgs(['--wat']), /Unknown option/);
});
