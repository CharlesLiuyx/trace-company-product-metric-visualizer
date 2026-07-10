import test from 'node:test';
import assert from 'node:assert/strict';
import { PNG } from 'pngjs';
import {
  assertInterfaceAudit,
  auditInterfaceGeometry,
  buildInterfaceAuditFromPngs,
  compareOccupancyIntervals,
  intervalsFromMask,
  mergeIntervals,
  scanInterfaceOccupancy,
} from '../scripts/lib/interface-fidelity.mjs';

function solidPng(width = 24, height = 32, color = [242, 242, 242]) {
  const png = new PNG({ width, height });
  for (let index = 0; index < png.data.length; index += 4) {
    png.data[index] = color[0];
    png.data[index + 1] = color[1];
    png.data[index + 2] = color[2];
    png.data[index + 3] = 255;
  }
  return png;
}

function paintBand(png, { x0 = 11, x1 = 14, top, bottom, color = [20, 120, 180] }) {
  for (let y = top; y < bottom; y += 1) {
    for (let x = x0; x < x1; x += 1) {
      const index = (y * png.width + x) * 4;
      png.data[index] = color[0];
      png.data[index + 1] = color[1];
      png.data[index + 2] = color[2];
      png.data[index + 3] = 255;
    }
  }
  return png;
}

function endpoint(overrides = {}) {
  return {
    link: 'a->b#0',
    role: 'source',
    node: 'a',
    face: 'right',
    nodeEdgeX: 10,
    endpointX: 10,
    edgeDelta: 0,
    center: 12.5,
    width: 15,
    interval: { top: 5, bottom: 20 },
    control: { x: 18, y: 12.5 },
    tangentDeltaX: 8,
    tangentDeltaY: 0,
    pathKind: 'ribbon',
    requiresRibbon: false,
    explicitEndpoint: false,
    ...overrides,
  };
}

function geometry(mode = 'error', endpointOverrides = {}) {
  const linkEndpoint = endpoint(endpointOverrides);
  return {
    dataset: 'fixture',
    language: 'en',
    mode,
    canvas: { width: 24, height: 32 },
    nodes: [{ id: 'a', x0: 7, x1: 10, y0: 5, y1: 20 }],
    links: [{ id: 'a->b#0' }],
    interfaces: [
      {
        id: 'a:right',
        node: 'a',
        face: 'right',
        nodeEdgeX: 10,
        nodeBox: { left: 7, right: 10, top: 5, bottom: 20 },
        links: [linkEndpoint],
      },
    ],
  };
}

test('binary occupancy union joins adjacent colours and closes only one-pixel AA gaps', () => {
  assert.deepEqual(
    mergeIntervals(
      [
        { top: 5, bottom: 10 },
        { top: 10, bottom: 14 },
        { top: 15, bottom: 18 },
      ],
      1
    ),
    [{ top: 5, bottom: 18 }]
  );
  assert.deepEqual(
    mergeIntervals(
      [
        { top: 5, bottom: 10 },
        { top: 12, bottom: 18 },
      ],
      1
    ),
    [
      { top: 5, bottom: 10 },
      { top: 12, bottom: 18 },
    ]
  );
  assert.deepEqual(intervalsFromMask([true, true, false, true, true], 5, 1), [{ top: 5, bottom: 10 }]);
});

test('reference probe treats touching differently-coloured bands as one occupied interval', () => {
  const png = solidPng();
  paintBand(png, { top: 5, bottom: 12, color: [20, 120, 180] });
  paintBand(png, { top: 12, bottom: 20, color: [210, 70, 70] });
  const [candidate] = auditInterfaceGeometry(geometry()).interfaces;
  const scanned = scanInterfaceOccupancy(png, candidate);
  assert.deepEqual(scanned.intervals, [{ top: 5, bottom: 20 }]);
});

test('reference probe preserves a real two-pixel background socket gap', () => {
  const png = solidPng();
  paintBand(png, { top: 5, bottom: 10 });
  paintBand(png, { top: 12, bottom: 20 });
  const [candidate] = auditInterfaceGeometry(geometry()).interfaces;
  const scanned = scanInterfaceOccupancy(png, candidate);
  assert.deepEqual(scanned.intervals, [
    { top: 5, bottom: 10 },
    { top: 12, bottom: 20 },
  ]);
});

test('occupancy comparison permits one-pixel AA drift but fails topology and two-pixel boundaries', () => {
  assert.equal(
    compareOccupancyIntervals([{ top: 5, bottom: 20 }], [{ top: 4, bottom: 21 }]).passed,
    true
  );
  const boundary = compareOccupancyIntervals([{ top: 5, bottom: 20 }], [{ top: 5, bottom: 18 }]);
  assert.equal(boundary.passed, false);
  assert.equal(boundary.violations[0].code, 'interface-boundary-mismatch');
  const topology = compareOccupancyIntervals(
    [{ top: 5, bottom: 20 }],
    [
      { top: 5, bottom: 10 },
      { top: 12, bottom: 20 },
    ]
  );
  assert.equal(topology.passed, false);
  assert.equal(topology.violations[0].code, 'interface-topology-mismatch');
});

test('candidate geometry audit catches detached endpoints, sloped tangents, and equal-width strokes used for taper', () => {
  const audit = auditInterfaceGeometry(
    geometry('error', {
      edgeDelta: 2,
      tangentDeltaY: 2,
      requiresRibbon: true,
      pathKind: 'stroke',
    })
  );
  assert.deepEqual(
    audit.violations.map((item) => item.code).sort(),
    ['endpoint-node-edge-mismatch', 'endpoint-width-model-mismatch', 'non-horizontal-interface-tangent']
  );
});

test('candidate endpoint and tangent geometry use the 0.5px SVG hard boundary', () => {
  const atBoundary = auditInterfaceGeometry(
    geometry('error', { edgeDelta: 0.5, tangentDeltaY: -0.5 })
  );
  assert.equal(atBoundary.violations.length, 0);
  const beyondBoundary = auditInterfaceGeometry(
    geometry('error', { edgeDelta: 0.501, tangentDeltaY: -0.501 })
  );
  assert.deepEqual(
    beyondBoundary.violations.map((item) => item.code).sort(),
    ['endpoint-node-edge-mismatch', 'non-horizontal-interface-tangent']
  );
});

test('candidate link intervals must stay within the node face at the 0.5px SVG hard boundary', () => {
  const atBoundary = auditInterfaceGeometry(
    geometry('error', { center: 12.5, width: 16, interval: { top: 4.5, bottom: 20.5 } })
  );
  assert.equal(atBoundary.violations.length, 0);

  const beyondBoundary = auditInterfaceGeometry(
    geometry('error', { center: 12.5, width: 16.002, interval: { top: 4.499, bottom: 20.501 } })
  );
  assert.deepEqual(
    beyondBoundary.violations.map((item) => item.code),
    ['interface-node-vertical-overflow']
  );
  assert.deepEqual(beyondBoundary.interfaces[0].candidateTopology.overflow, [
    {
      link: 'a->b#0',
      top: 4.499,
      bottom: 20.501,
      topDelta: -0.501,
      bottomDelta: 0.501,
    },
  ]);
});

test('error mode hard-fails reference mismatch while warning mode reports without throwing', () => {
  const candidate = paintBand(solidPng(), { top: 5, bottom: 20 });
  const reference = paintBand(solidPng(), { top: 5, bottom: 18 });
  const strict = buildInterfaceAuditFromPngs({ geometry: geometry('error'), candidatePng: candidate, referencePng: reference });
  assert.equal(strict.status, 'failed');
  assert.equal(strict.candidateStatus, 'passed');
  assert.equal(strict.referenceStatus, 'failed');
  assert.equal(strict.enforcementStatus, 'failed');
  assert.equal(strict.summary.failed, 1);
  assert.throws(() => assertInterfaceAudit(strict), /G12 interface fidelity failed/);

  const warning = buildInterfaceAuditFromPngs({ geometry: geometry('warning'), candidatePng: candidate, referencePng: reference });
  assert.equal(warning.status, 'failed');
  assert.equal(warning.candidateStatus, 'passed');
  assert.equal(warning.referenceStatus, 'failed');
  assert.equal(warning.enforcementStatus, 'warning');
  assert.doesNotThrow(() => assertInterfaceAudit(warning));
});

test('Pinterest regression: a 2px-short node-face union is evidence failure until the endpoint fills the reference', () => {
  const reference = paintBand(solidPng(), { top: 5, bottom: 20 });
  const shortCandidate = paintBand(solidPng(), { top: 6, bottom: 18 });
  const failed = buildInterfaceAuditFromPngs({
    geometry: geometry('error', { center: 12, width: 12, interval: { top: 6, bottom: 18 } }),
    candidatePng: shortCandidate,
    referencePng: reference,
  });
  assert.equal(failed.status, 'failed');
  assert.equal(failed.interfaces[0].referenceComparison.violations[0].code, 'interface-boundary-mismatch');

  const corrected = buildInterfaceAuditFromPngs({
    geometry: geometry('error'),
    candidatePng: paintBand(solidPng(), { top: 5, bottom: 20 }),
    referencePng: reference,
  });
  assert.equal(corrected.status, 'passed');
  assert.equal(corrected.summary.passedInterfaces, 1);
});

test('reference raster halo outside the node is recorded but cannot enlarge candidate SVG geometry', () => {
  const candidate = paintBand(solidPng(), { top: 5, bottom: 20 });
  const reference = paintBand(solidPng(), { top: 2, bottom: 23 });
  const report = buildInterfaceAuditFromPngs({
    geometry: geometry('error'),
    candidatePng: candidate,
    referencePng: reference,
  });

  assert.equal(report.status, 'passed');
  assert.deepEqual(report.interfaces[0].reference.intervals, [{ top: 2, bottom: 23 }]);
  assert.deepEqual(report.interfaces[0].referenceComparison.candidate, [{ top: 5, bottom: 20 }]);
  assert.deepEqual(report.interfaces[0].referenceComparison.reference, [{ top: 5, bottom: 20 }]);
  assert.equal(
    report.interfaces[0].referenceComparison.normalization.mode,
    'clip-raster-halo-to-node-bbox'
  );
});

test('missing reference is explicitly not-scored when candidate geometry and raster agree', () => {
  const candidate = paintBand(solidPng(), { top: 5, bottom: 20 });
  const report = buildInterfaceAuditFromPngs({ geometry: geometry('error'), candidatePng: candidate });
  assert.equal(report.status, 'not-scored');
  assert.equal(report.referenceStatus, 'not-scored');
  assert.equal(report.summary.notScored, 1);
  assert.equal(report.summary.auditedInterfaces, report.summary.expectedInterfaces);
  assert.equal(
    report.summary.auditedInterfaces,
    report.summary.passedInterfaces +
      report.summary.failedInterfaces +
      report.summary.documentedExceptions +
      report.summary.pendingInterfaces +
      report.summary.notScoredInterfaces
  );
  assert.doesNotThrow(() => assertInterfaceAudit(report));

  const legacy = buildInterfaceAuditFromPngs({ geometry: geometry('warning'), candidatePng: candidate });
  assert.equal(legacy.status, 'not-scored');
  assert.equal(legacy.enforcementStatus, 'not-scored');
});
