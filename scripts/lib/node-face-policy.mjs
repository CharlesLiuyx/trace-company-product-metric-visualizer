import { createHash } from 'node:crypto';

export const NODE_FACE_POLICY_PROTOCOL = 'node-face-policy/v1';
export const MIN_VISIBLE_FACE_PX = 3;
export const FACE_FLOOR_RASTER_TOLERANCE_PX = 0.5;

function canonicalValue(value) {
  if (Array.isArray(value)) return value.map(canonicalValue);
  if (!value || typeof value !== 'object') return value;
  return Object.fromEntries(
    Object.keys(value)
      .sort((left, right) => left.localeCompare(right))
      .map((key) => [key, canonicalValue(value[key])])
  );
}

function digestCanonical(value) {
  return `sha256:${createHash('sha256').update(JSON.stringify(canonicalValue(value))).digest('hex')}`;
}

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

export function compileNodeFacePolicy(sourceCoverage) {
  if (!sourceCoverage || sourceCoverage.protocol !== 'source-coverage/v1') {
    const error = new Error('Node face policy requires source-coverage/v1');
    error.code = 'NODE_FACE_POLICY_SOURCE_COVERAGE_REQUIRED';
    throw error;
  }
  const visibleNodeIds = [...new Set(sourceCoverage.summary?.visibleNodeIds || [])].sort();
  const hiddenNodeIds = [...new Set(sourceCoverage.summary?.hiddenNodeIds || [])].sort();
  const overlap = visibleNodeIds.filter((id) => hiddenNodeIds.includes(id));
  if (overlap.length) {
    const error = new Error(`Node face policy classifies node(s) as both visible and hidden: ${overlap.join(', ')}`);
    error.code = 'NODE_FACE_POLICY_CLASSIFICATION_CONFLICT';
    throw error;
  }
  const belowFloorExceptions = (sourceCoverage.items || [])
    .filter((item) => item.face?.floorException)
    .map((item) => {
      if (item.nodeTargets?.length !== 1) {
        const error = new Error(`${item.sourceId} visibility floor exception must map to exactly one nodes.* target`);
        error.code = 'VISIBILITY_FLOOR_EXCEPTION_TARGET_INVALID';
        throw error;
      }
      return {
        sourceId: item.sourceId,
        nodeId: item.nodeTargets[0],
        referenceFaceHeightPx: item.face.observedBBox[3],
        evidenceDigest: sourceCoverage.coverageDigest,
      };
    })
    .sort((left, right) => left.nodeId.localeCompare(right.nodeId));
  const duplicateExceptions = belowFloorExceptions
    .map((item) => item.nodeId)
    .filter((nodeId, index, values) => values.indexOf(nodeId) !== index);
  if (duplicateExceptions.length) {
    const error = new Error(`Node face policy repeats floor exception node(s): ${[...new Set(duplicateExceptions)].join(', ')}`);
    error.code = 'VISIBILITY_FLOOR_EXCEPTION_TARGET_INVALID';
    throw error;
  }
  const unclassifiedExceptions = belowFloorExceptions.filter((item) => !visibleNodeIds.includes(item.nodeId));
  if (unclassifiedExceptions.length) {
    const error = new Error(`Floor exception node(s) are not expected-visible: ${unclassifiedExceptions.map((item) => item.nodeId).join(', ')}`);
    error.code = 'VISIBILITY_FLOOR_EXCEPTION_TARGET_INVALID';
    throw error;
  }
  const value = {
    schemaVersion: 1,
    protocol: NODE_FACE_POLICY_PROTOCOL,
    sourceCoverageDigest: sourceCoverage.coverageDigest,
    minVisibleFacePx: MIN_VISIBLE_FACE_PX,
    rasterTolerancePx: FACE_FLOOR_RASTER_TOLERANCE_PX,
    complete: true,
    visibleNodeIds,
    hiddenNodeIds,
    belowFloorExceptions,
  };
  return deepFreeze({ ...value, policyDigest: digestCanonical(value) });
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
    .filter((node) => node.faceVisible === true && isFaceBelowVisibilityFloor(node.faceHeight ?? node.bbox?.height))
    .map((node) => String(node.id || ''))
    .sort();
  return { nodes, byId, duplicates: [...new Set(duplicates)].sort(), belowFloorNodeIds };
}

function sameSortedValues(left, right) {
  return JSON.stringify([...(left || [])].sort()) === JSON.stringify([...(right || [])].sort());
}

export function assessNodePaintAudit(audit, policy = null, options = {}) {
  const violations = [];
  if (!audit || audit.schemaVersion !== 1) {
    violations.push({ code: 'audit-schema-invalid', message: 'Node paint audit must use schemaVersion 1' });
  }
  const facts = recomputedAuditFacts(audit);
  if (Number(audit?.checkedNodes) !== facts.nodes.length) {
    violations.push({ code: 'checked-node-count-mismatch', message: 'checkedNodes disagrees with the node audit rows' });
  }
  for (const node of facts.nodes) {
    const height = node?.faceHeight ?? node?.bbox?.height;
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
    violations.push({ code: 'visibility-floor-drift', message: `minVisibleFacePx=${audit.minVisibleFacePx}, expected ${MIN_VISIBLE_FACE_PX}` });
  }
  if (Array.isArray(audit?.belowVisibilityFloorNodeIds) && !sameSortedValues(audit.belowVisibilityFloorNodeIds, facts.belowFloorNodeIds)) {
    violations.push({ code: 'visibility-floor-summary-mismatch', message: 'belowVisibilityFloorNodeIds disagrees with node face heights' });
  }

  const checks = {};
  if (policy) {
    if (policy.protocol !== NODE_FACE_POLICY_PROTOCOL || policy.schemaVersion !== 1) {
      violations.push({ code: 'policy-schema-invalid', message: `Node face policy must use ${NODE_FACE_POLICY_PROTOCOL}` });
    }
    if (Number(policy.minVisibleFacePx) !== MIN_VISIBLE_FACE_PX || Number(policy.rasterTolerancePx) !== FACE_FLOOR_RASTER_TOLERANCE_PX) {
      violations.push({ code: 'policy-threshold-drift', message: 'Node face policy threshold differs from the shared implementation' });
    }
    const exceptionByNode = new Map((policy.belowFloorExceptions || []).map((item) => [item.nodeId, item]));
    for (const id of policy.visibleNodeIds || []) {
      const node = facts.byId.get(id);
      let status = 'passed';
      let message = '';
      if (!node) {
        status = 'failed';
        message = 'B15/T13 expected visible, observed missing';
      } else if (node.faceVisible !== true) {
        status = 'failed';
        message = 'B15/T13 expected visible, observed not-painted';
      } else if (isFaceBelowVisibilityFloor(node.faceHeight ?? node.bbox?.height)) {
        const exception = exceptionByNode.get(id);
        if (!exception) {
          status = 'failed';
          message = `T21 faceHeight=${Number(node.faceHeight ?? node.bbox?.height)}px is below minVisibleFacePx=${MIN_VISIBLE_FACE_PX}px; no Source-bound exception`;
        } else if (Number(node.faceHeight ?? node.bbox?.height) + FACE_FLOOR_RASTER_TOLERANCE_PX < Number(exception.referenceFaceHeightPx)) {
          status = 'failed';
          message = `T21 faceHeight=${Number(node.faceHeight ?? node.bbox?.height)}px is below Source referenceFaceHeightPx=${exception.referenceFaceHeightPx}px beyond rasterTolerancePx=${FACE_FLOOR_RASTER_TOLERANCE_PX}px`;
        }
      }
      checks[`visible:${id}`] = { nodeId: id, intent: 'visible', status, ...(message ? { message } : {}) };
      if (status === 'failed') violations.push({ code: 'expected-visible-failed', nodeId: id, message });
    }
    for (const id of policy.hiddenNodeIds || []) {
      const node = facts.byId.get(id);
      let status = 'passed';
      let message = '';
      if (!node) {
        status = 'failed';
        message = 'B7 expected hidden, observed missing';
      } else if (node.faceVisible === true) {
        status = 'failed';
        message = 'B7 expected hidden, observed painted';
      }
      checks[`hidden:${id}`] = { nodeId: id, intent: 'hidden', status, ...(message ? { message } : {}) };
      if (status === 'failed') violations.push({ code: 'expected-hidden-failed', nodeId: id, message });
    }
    if (policy.complete) {
      const classified = new Set([...(policy.visibleNodeIds || []), ...(policy.hiddenNodeIds || [])]);
      for (const id of facts.byId.keys()) {
        if (!classified.has(id)) {
          violations.push({ code: 'unclassified-node', nodeId: id, message: `${id} is not classified by Source Coverage` });
        }
      }
    }
  } else if (options.enforceUnboundFloor !== false) {
    for (const nodeId of facts.belowFloorNodeIds) {
      violations.push({
        code: 'visibility-floor-failed',
        nodeId,
        message: `T21 face is below minVisibleFacePx=${MIN_VISIBLE_FACE_PX}px; a typed Source-bound exception requires a Plan-bound run`,
      });
    }
  }
  return deepFreeze({
    schemaVersion: 1,
    passed: violations.length === 0,
    policyDigest: policy?.policyDigest || null,
    belowVisibilityFloorNodeIds: facts.belowFloorNodeIds,
    checks,
    violations,
    summary: {
      checkedNodes: facts.nodes.length,
      expectedVisible: policy?.visibleNodeIds?.length || 0,
      expectedHidden: policy?.hiddenNodeIds?.length || 0,
      floorExceptions: policy?.belowFloorExceptions?.length || 0,
      unclassified: violations.filter((item) => item.code === 'unclassified-node').length,
    },
  });
}

export function assertNodePaintPolicy(audit, policy = null, options = {}) {
  const assessment = assessNodePaintAudit(audit, policy, options);
  if (assessment.passed) return assessment;
  const error = new Error(`Node face policy failed: ${assessment.violations.map((item) => item.nodeId ? `${item.nodeId}=${item.message}` : item.message).join(', ')}`);
  error.code = 'NODE_FACE_POLICY_FAILED';
  error.assessment = assessment;
  throw error;
}
