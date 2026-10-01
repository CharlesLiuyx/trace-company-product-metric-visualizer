// B15 node-face policy. A Build-bound render expects every value node in the
// Build's source-objects/v1 to render a painted face, and every rendered node
// to be painted and at least MIN_VISIBLE_FACE_PX tall unless the author listed
// it in `shortNodes` (then it must still paint a face taller than 0px).
export const MIN_VISIBLE_FACE_PX = 3;
export const FACE_FLOOR_RASTER_TOLERANCE_PX = 0.5;

function deepFreeze(value) {
  if (!value || typeof value !== 'object' || Object.isFrozen(value)) return value;
  for (const child of Object.values(value)) deepFreeze(child);
  return Object.freeze(value);
}

export function isFaceBelowVisibilityFloor(height) {
  const value = Number(height);
  return Number.isFinite(value) &&
    value >= 0 &&
    value + FACE_FLOOR_RASTER_TOLERANCE_PX < MIN_VISIBLE_FACE_PX;
}

// Expectations for a Build-bound render. Only Income Statement Builds render
// Sankey nodes; other Adapters (and diagnostics without a Build) return null.
export function nodeFaceExpectations(sourceObjects) {
  if (!sourceObjects || sourceObjects.adapter !== 'income-statement') return null;
  return {
    visible: [...(sourceObjects.summary?.valueNodeIds || [])].sort(),
    short: [...(sourceObjects.summary?.shortNodeIds || [])].sort(),
    complete: true,
  };
}

function faceHeight(node) {
  return node?.faceHeight ?? node?.bbox?.height;
}

function recomputedAuditFacts(audit) {
  const nodes = Array.isArray(audit?.nodes) ? audit.nodes : [];
  const byId = new Map();
  const duplicates = [];
  for (const node of nodes) {
    const id = String(node?.id || '');
    if (byId.has(id)) duplicates.push(id);
    byId.set(id, node);
  }
  const belowFloorNodeIds = nodes
    .filter((node) => node.faceVisible === true && isFaceBelowVisibilityFloor(faceHeight(node)))
    .map((node) => String(node.id || ''))
    .sort();
  return { nodes, byId, duplicates: [...new Set(duplicates)].sort(), belowFloorNodeIds };
}

function sameSortedValues(left, right) {
  return JSON.stringify([...(left || [])].sort()) === JSON.stringify([...(right || [])].sort());
}

function hasExpectations(expectations) {
  return Boolean(expectations) && (
    (expectations.visible?.length || 0) > 0 ||
    (expectations.short?.length || 0) > 0 ||
    expectations.complete === true
  );
}

export function assessNodePaintAudit(audit, expectations = null, options = {}) {
  const violations = [];
  if (!audit || audit.schemaVersion !== 1) {
    violations.push({ code: 'audit-schema-invalid', message: 'Node paint audit must use schemaVersion 1' });
  }
  const facts = recomputedAuditFacts(audit);
  if (Number(audit?.checkedNodes) !== facts.nodes.length) {
    violations.push({ code: 'checked-node-count-mismatch', message: 'checkedNodes disagrees with the node audit rows' });
  }
  for (const node of facts.nodes) {
    const height = faceHeight(node);
    if (!node?.id || typeof node.faceVisible !== 'boolean') {
      violations.push({ code: 'node-row-invalid', nodeId: node?.id || '', message: 'node rows require a stable id and boolean faceVisible' });
    } else if (node.faceVisible && (!Number.isFinite(Number(height)) || Number(height) < 0)) {
      violations.push({ code: 'face-height-invalid', nodeId: node.id, message: 'painted node rows require a non-negative finite faceHeight' });
    }
  }
  const declaredDuplicates = [...new Set(audit?.duplicateNodeIds || [])].sort();
  if (facts.duplicates.length || declaredDuplicates.length) {
    violations.push({
      code: 'duplicate-node-id',
      message: `duplicate semantic IDs: ${[...new Set([...facts.duplicates, ...declaredDuplicates])].join(', ')}`,
    });
  }
  if (Number(audit?.minVisibleFacePx) !== MIN_VISIBLE_FACE_PX) {
    violations.push({ code: 'visibility-floor-drift', message: `minVisibleFacePx=${audit?.minVisibleFacePx}, expected ${MIN_VISIBLE_FACE_PX}` });
  }
  if (Array.isArray(audit?.belowVisibilityFloorNodeIds) && !sameSortedValues(audit.belowVisibilityFloorNodeIds, facts.belowFloorNodeIds)) {
    violations.push({ code: 'visibility-floor-summary-mismatch', message: 'belowVisibilityFloorNodeIds disagrees with node face heights' });
  }

  const checks = {};
  const bound = hasExpectations(expectations);
  const short = new Set(bound ? expectations.short || [] : []);
  const expected = new Set(bound ? expectations.visible || [] : []);
  if (bound && expectations.complete) for (const id of facts.byId.keys()) expected.add(id);
  for (const id of [...expected].sort()) {
    const node = facts.byId.get(id);
    const height = Number(faceHeight(node));
    let message = '';
    if (!node) message = 'B15 expected visible, observed missing';
    else if (node.faceVisible !== true) message = 'B15 expected visible, observed not-painted';
    else if (isFaceBelowVisibilityFloor(height) && !short.has(id)) {
      message = `B15 faceHeight=${height}px is below minVisibleFacePx=${MIN_VISIBLE_FACE_PX}px and is not declared in shortNodes`;
    } else if (short.has(id) && !(height > 0)) {
      message = 'B15 short node renders no face height';
    }
    checks[`visible:${id}`] = {
      nodeId: id,
      intent: short.has(id) ? 'short' : 'visible',
      status: message ? 'failed' : 'passed',
      ...(message ? { message } : {}),
    };
    if (message) violations.push({ code: 'expected-visible-failed', nodeId: id, message });
  }
  if (!bound && options.enforceUnboundFloor !== false) {
    for (const nodeId of facts.belowFloorNodeIds) {
      violations.push({
        code: 'visibility-floor-failed',
        nodeId,
        message: `B15 face is below minVisibleFacePx=${MIN_VISIBLE_FACE_PX}px; a shortNodes declaration applies only to a Build-bound run`,
      });
    }
  }
  return deepFreeze({
    schemaVersion: 1,
    passed: violations.length === 0,
    belowVisibilityFloorNodeIds: facts.belowFloorNodeIds,
    checks,
    violations,
    summary: {
      checkedNodes: facts.nodes.length,
      expectedVisible: expected.size,
      shortNodes: short.size,
    },
  });
}

export function assertNodePaintPolicy(audit, expectations = null, options = {}) {
  const assessment = assessNodePaintAudit(audit, expectations, options);
  if (assessment.passed) return assessment;
  const error = new Error(`Node face policy failed: ${assessment.violations.map((item) => item.nodeId ? `${item.nodeId}=${item.message}` : item.message).join(', ')}`);
  error.code = 'NODE_FACE_POLICY_FAILED';
  error.assessment = assessment;
  throw error;
}
