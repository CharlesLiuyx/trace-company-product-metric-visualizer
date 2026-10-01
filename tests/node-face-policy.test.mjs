import assert from 'node:assert/strict';
import test from 'node:test';
import {
  FACE_FLOOR_RASTER_TOLERANCE_PX,
  MIN_VISIBLE_FACE_PX,
  assessNodePaintAudit,
  assertNodePaintPolicy,
  isFaceBelowVisibilityFloor,
  nodeFaceExpectations,
} from '../scripts/lib/node-face-policy.mjs';

function sourceObjects({ valueNodeIds = ['other'], shortNodeIds = [], adapter = 'income-statement' } = {}) {
  return { adapter, summary: { valueNodeIds, shortNodeIds } };
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

test('expectations come from source-objects value nodes and shortNodes, and only for Sankey Builds', () => {
  assert.deepEqual(
    nodeFaceExpectations(sourceObjects({ valueNodeIds: ['tax', 'other'], shortNodeIds: ['other'] })),
    { visible: ['other', 'tax'], short: ['other'], complete: true }
  );
  assert.equal(nodeFaceExpectations(sourceObjects({ adapter: 'revenue-metric' })), null);
  assert.equal(nodeFaceExpectations(null), null);
});

test('an unbound diagnostic treats every below-floor visible face as a B15 failure', () => {
  const assessment = assessNodePaintAudit(audit([node('other', { faceHeight: 2 })]));
  assert.equal(assessment.passed, false);
  assert.deepEqual(violationCodes(assessment), ['visibility-floor-failed']);
  assert.throws(
    () => assertNodePaintPolicy(audit([node('other', { faceHeight: 2 })])),
    (error) => error.code === 'NODE_FACE_POLICY_FAILED'
  );
  assert.equal(
    assessNodePaintAudit(audit([node('other', { faceHeight: 2 })]), null, { enforceUnboundFloor: false }).passed,
    true,
    'catalog regression records but does not adjudicate the floor'
  );
});

test('the floor applies the shared raster tolerance', () => {
  assert.equal(MIN_VISIBLE_FACE_PX, 3);
  assert.equal(FACE_FLOOR_RASTER_TOLERANCE_PX, 0.5);
  assert.equal(isFaceBelowVisibilityFloor(2.5), false);
  assert.equal(isFaceBelowVisibilityFloor(2.49), true);
  assert.equal(isFaceBelowVisibilityFloor(0), true);
});

test('B15 rejects a value node that is missing, unpainted, or below 3px without a shortNodes entry', () => {
  const expectations = nodeFaceExpectations(sourceObjects({ valueNodeIds: ['missing', 'unpainted', 'thin'] }));
  const assessment = assessNodePaintAudit(audit([
    node('unpainted', { faceVisible: false, faceHeight: 0 }),
    node('thin', { faceHeight: 2 }),
  ]), expectations);
  assert.equal(assessment.passed, false);
  assert.equal(assessment.checks['visible:missing'].message, 'B15 expected visible, observed missing');
  assert.equal(assessment.checks['visible:unpainted'].message, 'B15 expected visible, observed not-painted');
  assert.match(assessment.checks['visible:thin'].message, /not declared in shortNodes/);
});

test('a shortNodes declaration accepts a painted sub-floor face at the 3px floor', () => {
  const expectations = nodeFaceExpectations(sourceObjects({ valueNodeIds: ['other'], shortNodeIds: ['other'] }));
  const assessment = assertNodePaintPolicy(audit([node('other', { faceHeight: 1 })]), expectations);
  assert.equal(assessment.checks['visible:other'].status, 'passed');
  assert.equal(assessment.checks['visible:other'].intent, 'short');
  assert.equal(assessment.summary.shortNodes, 1);

  const vanished = assessNodePaintAudit(audit([node('other', { faceHeight: 0 })]), expectations);
  assert.equal(vanished.checks['visible:other'].message, 'B15 short node renders no face height');
  const unpainted = assessNodePaintAudit(audit([node('other', { faceVisible: false, faceHeight: 0 })]), expectations);
  assert.equal(unpainted.passed, false, 'a shortNodes entry never waives the painted face');
});

test('every rendered node in a Build-bound run must be painted and reach the floor', () => {
  const expectations = nodeFaceExpectations(sourceObjects({ valueNodeIds: ['revenue'] }));
  const assessment = assessNodePaintAudit(audit([
    node('revenue'),
    node('structural', { faceHeight: 2 }),
    node('hidden', { faceVisible: false, faceHeight: 0 }),
  ]), expectations);
  assert.equal(assessment.passed, false);
  assert.equal(assessment.checks['visible:revenue'].status, 'passed');
  assert.equal(assessment.checks['visible:structural'].status, 'failed');
  assert.equal(assessment.checks['visible:hidden'].status, 'failed');
  assert.equal(assessment.summary.expectedVisible, 3);
});

test('audit integrity failures are reported with or without expectations', () => {
  const duplicated = audit([node('tax'), node('tax')]);
  duplicated.duplicateNodeIds = ['tax'];
  assert.deepEqual(violationCodes(assessNodePaintAudit(duplicated, null, { enforceUnboundFloor: false })), ['duplicate-node-id']);
  const drifted = { ...audit([node('tax')]), minVisibleFacePx: 2 };
  assert.ok(violationCodes(assessNodePaintAudit(drifted)).includes('visibility-floor-drift'));
  const miscounted = { ...audit([node('tax')]), checkedNodes: 3 };
  assert.ok(violationCodes(assessNodePaintAudit(miscounted)).includes('checked-node-count-mismatch'));
});
