import assert from 'node:assert/strict';
import test from 'node:test';
import {
  FACE_FLOOR_RASTER_TOLERANCE_PX,
  MIN_VISIBLE_FACE_PX,
  assessNodePaintAudit,
  assertNodePaintPolicy,
  compileNodeFacePolicy,
  isFaceBelowVisibilityFloor,
} from '../scripts/lib/node-face-policy.mjs';

const COVERAGE_DIGEST = `sha256:${'c'.repeat(64)}`;
const SOURCE_DIGEST = `sha256:${'a'.repeat(64)}`;

function sourceCoverage({
  visible = ['other'],
  exceptionNode = null,
  referenceFaceHeightPx = 2,
} = {}) {
  const visibleItems = visible.map((nodeId) => ({
    sourceId: `source:${nodeId.replaceAll('_', '-')}`,
    nodeTargets: [nodeId],
    face: {
      searchBBox: [100, 200, 80, 12],
      observedBBox: [104, 205, 72, referenceFaceHeightPx],
      ...(nodeId === exceptionNode
        ? {
            floorException: {
              type: 'source-visible-face-below-floor',
              inspectionMethod: 'native-scale-crop-and-pixel-scan',
              locator: `input/processing/example-fy25.png#${nodeId}-face`,
              digest: SOURCE_DIGEST,
              reason: `The native Source contains a genuine ${referenceFaceHeightPx}px visible face.`,
            },
          }
        : {}),
    },
  }));
  return {
    schemaVersion: 2,
    protocol: 'source-coverage/v2',
    coverageDigest: COVERAGE_DIGEST,
    summary: {
      visibleNodeIds: [...visible].sort(),
    },
    items: visibleItems,
  };
}

function node(id, { faceVisible = true, faceHeight = 4 } = {}) {
  return { id, faceVisible, faceHeight };
}

function audit(nodes) {
  const belowVisibilityFloorNodeIds = nodes
    .filter((item) => item.faceVisible && isFaceBelowVisibilityFloor(item.faceHeight))
    .map((item) => item.id)
    .sort();
  return {
    schemaVersion: 1,
    dataset: 'example-fy25',
    language: 'en',
    checkedNodes: nodes.length,
    minVisibleFacePx: MIN_VISIBLE_FACE_PX,
    belowVisibilityFloorNodeIds,
    duplicateNodeIds: [],
    nodes,
  };
}

function violationCodes(assessment) {
  return assessment.violations.map((item) => item.code);
}

test('an unbound diagnostic treats every below-floor visible face as a T21 failure', () => {
  const assessment = assessNodePaintAudit(audit([node('other', { faceHeight: 2 })]));

  assert.equal(assessment.passed, false);
  assert.deepEqual(violationCodes(assessment), ['visibility-floor-failed']);
  assert.throws(
    () => assertNodePaintPolicy(audit([node('other', { faceHeight: 2 })])),
    (error) => error.code === 'NODE_FACE_POLICY_FAILED' && /Plan-bound run/.test(error.message)
  );
});

test('zero or missing painted-face geometry cannot bypass the T21 audit', () => {
  const zero = assessNodePaintAudit(audit([node('other', { faceHeight: 0 })]));
  assert.equal(zero.passed, false);
  assert.ok(violationCodes(zero).includes('visibility-floor-failed'));

  const missing = audit([node('other', { faceHeight: 4 })]);
  delete missing.nodes[0].faceHeight;
  missing.belowVisibilityFloorNodeIds = [];
  const missingAssessment = assessNodePaintAudit(missing);
  assert.equal(missingAssessment.passed, false);
  assert.ok(violationCodes(missingAssessment).includes('face-height-invalid'));
});

test('T21 rejects an expected-visible face below 3px by default', () => {
  const policy = compileNodeFacePolicy(sourceCoverage());
  const assessment = assessNodePaintAudit(audit([node('other', { faceHeight: 2 })]), policy);

  assert.equal(MIN_VISIBLE_FACE_PX, 3);
  assert.equal(FACE_FLOOR_RASTER_TOLERANCE_PX, 0.5);
  assert.equal(assessment.passed, false);
  assert.deepEqual(violationCodes(assessment), ['expected-visible-failed']);
  assert.match(assessment.checks['visible:other'].message, /no Source-bound exception/);
  assert.throws(
    () => assertNodePaintPolicy(audit([node('other', { faceHeight: 2 })]), policy),
    (error) => error.code === 'NODE_FACE_POLICY_FAILED' &&
      error.assessment?.checks['visible:other']?.status === 'failed'
  );
});

test('a typed Source-bound exception permits the matching measured short face', () => {
  const policy = compileNodeFacePolicy(sourceCoverage({
    exceptionNode: 'other',
    referenceFaceHeightPx: 2,
  }));
  const assessment = assertNodePaintPolicy(
    audit([node('other', { faceHeight: 2 })]),
    policy
  );

  assert.equal(assessment.passed, true);
  assert.equal(assessment.checks['visible:other'].status, 'passed');
  assert.deepEqual(policy.belowFloorExceptions, [{
    sourceId: 'source:other',
    nodeId: 'other',
    referenceFaceHeightPx: 2,
    evidenceDigest: COVERAGE_DIGEST,
  }]);
});

test('a floor exception does not permit a candidate materially shorter than the Source face', () => {
  const policy = compileNodeFacePolicy(sourceCoverage({
    exceptionNode: 'other',
    referenceFaceHeightPx: 2,
  }));
  const assessment = assessNodePaintAudit(
    audit([node('other', { faceHeight: 1 })]),
    policy
  );

  assert.equal(assessment.passed, false);
  assert.match(
    assessment.checks['visible:other'].message,
    /below Source referenceFaceHeightPx=2px beyond rasterTolerancePx=0.5px/
  );
});

test('a floor exception never waives a missing expected-visible node', () => {
  const policy = compileNodeFacePolicy(sourceCoverage({ exceptionNode: 'other' }));
  const assessment = assessNodePaintAudit(audit([]), policy);

  assert.equal(assessment.passed, false);
  assert.match(assessment.checks['visible:other'].message, /observed missing/);
});

test('a valid short-face exception never waives an unclassified rendered node', () => {
  const policy = compileNodeFacePolicy(sourceCoverage({
    visible: ['other'],
    exceptionNode: 'other',
  }));
  const assessment = assessNodePaintAudit(audit([
    node('other', { faceHeight: 2 }),
    node('balance_anchor', { faceHeight: 1 }),
  ]), policy);

  assert.equal(assessment.passed, false);
  assert.equal(assessment.checks['visible:other'].status, 'passed');
  assert.deepEqual(
    assessment.violations
      .filter((item) => item.code === 'unclassified-node')
      .map((item) => item.nodeId),
    ['balance_anchor']
  );
});

test('a valid short-face exception never classifies an extra rendered node', () => {
  const policy = compileNodeFacePolicy(sourceCoverage({ exceptionNode: 'other' }));
  const assessment = assessNodePaintAudit(audit([
    node('other', { faceHeight: 2 }),
    node('unplanned', { faceHeight: 1 }),
  ]), policy);

  assert.equal(assessment.passed, false);
  assert.equal(assessment.checks['visible:other'].status, 'passed');
  assert.deepEqual(
    assessment.violations.filter((item) => item.code === 'unclassified-node').map((item) => item.nodeId),
    ['unplanned']
  );
});
