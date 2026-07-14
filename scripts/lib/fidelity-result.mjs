import { createHash } from 'node:crypto';
import { SWEEP_STAGES } from './fidelity-stages.mjs';

export const FIDELITY_RESULT_SCHEMA_VERSION = 2;
export const FIDELITY_RESULT_PROTOCOL = 'fidelity-result/v2';
export const INTERFACE_MATRIX_PROTOCOL = 'interface-matrix/v1';
export const FIDELITY_RESULT_TERMINAL_STATUSES = Object.freeze([
  'accepted',
  'rejected',
  'blocked',
]);
export const FIDELITY_RESULT_STATUSES = Object.freeze([
  'review-pending',
  ...FIDELITY_RESULT_TERMINAL_STATUSES,
]);

const ADAPTERS = new Set(['income-statement', 'revenue-metric']);
const ATTESTATION_DECISIONS = new Set(['accepted', 'rejected', 'blocked']);
const REGION_STATUSES = new Set(['resolved', 'accepted', 'skipped', 'open']);
const RISK_STATUSES = new Set(['passed', 'failed', 'open', 'not-applicable']);
const MEASUREMENT_OPERATORS = new Set(['lte', 'gte', 'eq']);
const CHECK_ENFORCEMENTS = new Set(['hard-gate', 'build-gate', 'conditional-gate', 'quantified-audit', 'manual']);
const CHECK_LOCALE_SCOPES = new Set(['global', 'required-locales']);
const CHECK_STATUSES = new Set(['passed', 'failed', 'blocked']);
const CHECK_SOURCES = new Set(['automatic', 'manual']);
const CHECK_EVIDENCE_KINDS = new Set([
  'dataset-consistency',
  'verification-plan',
  'fidelity-run',
  'full-review-profile',
  'interface-audit',
  'label-layout-audit',
  'label-position-audit',
  'text-layout-audit',
  'annotation-layout-audit',
  'annotation-semantics-audit',
  'node-paint-audit',
  'manual-decision',
]);
const INTERFACE_RESULTS = new Set(['passed', 'failed', 'documented-exception', 'manual-pending', 'not-scored']);
const INTERFACE_COVERAGE_INTENTS = new Set(['reference', 'full-face']);
const INTERFACE_ENDPOINT_STATUSES = new Set(['passed', 'failed', 'not-scored']);
const DIGEST_RE = /^sha256:[a-f0-9]{64}$/;
const REGION_ID_RE = /^REG-\d{3,}$/;
const MATRIX_FIELDS = Object.freeze([
  'expectedInterfaces',
  'auditedInterfaces',
  'passedInterfaces',
  'failedInterfaces',
  'documentedExceptions',
  'pendingInterfaces',
  'notScoredInterfaces',
]);

function fail(code, message) {
  const error = new Error(message);
  error.code = code;
  throw error;
}

function invariant(condition, code, message) {
  if (!condition) fail(code, message);
}

function canonicalValue(value) {
  if (Array.isArray(value)) return value.map(canonicalValue);
  if (!value || typeof value !== 'object') return value;
  return Object.fromEntries(
    Object.keys(value)
      .filter((key) => value[key] !== undefined)
      .sort((left, right) => left.localeCompare(right))
      .map((key) => [key, canonicalValue(value[key])])
  );
}

export function digestFidelityValue(value) {
  const source = JSON.stringify(canonicalValue(value));
  return `sha256:${createHash('sha256').update(source).digest('hex')}`;
}

function assertDigest(value, label, code = 'INVALID_DIGEST') {
  invariant(DIGEST_RE.test(String(value || '')), code, `${label} must be a sha256 digest`);
}

function assertString(value, label, code = 'INVALID_INPUT') {
  invariant(typeof value === 'string' && value.trim(), code, `${label} is required`);
  return value.trim();
}

function assertTimestamp(value, label) {
  invariant(
    typeof value === 'string' && Number.isFinite(Date.parse(value)),
    'INVALID_TIMESTAMP',
    `${label} must be an ISO timestamp`
  );
  return value;
}

function sortedStrings(values, label) {
  invariant(Array.isArray(values), 'INVALID_INPUT', `${label} must be an array`);
  const normalized = values.map((value) => assertString(value, `${label} item`));
  invariant(new Set(normalized).size === normalized.length, 'DUPLICATE_ITEM', `${label} contains duplicates`);
  return normalized.sort((left, right) => left.localeCompare(right));
}

function deepFreeze(value) {
  if (!value || typeof value !== 'object' || Object.isFrozen(value)) return value;
  Object.freeze(value);
  for (const child of Object.values(value)) deepFreeze(child);
  return value;
}

function withDeterministicDigest(value, field) {
  const result = { ...value };
  result[field] = digestFidelityValue(result);
  return deepFreeze(result);
}

export function createManualAttestation(input) {
  invariant(input && typeof input === 'object', 'ATTESTATION_INVALID', 'ManualAttestation must be an object');
  const decision = assertString(input.decision, 'ManualAttestation decision', 'ATTESTATION_INVALID');
  invariant(
    ATTESTATION_DECISIONS.has(decision),
    'ATTESTATION_INVALID',
    `Unsupported ManualAttestation decision: ${decision}`
  );
  assertDigest(input.authoredDigest, 'ManualAttestation authoredDigest', 'ATTESTATION_INVALID');
  assertDigest(input.verificationPlanDigest, 'ManualAttestation verificationPlanDigest', 'ATTESTATION_INVALID');

  const attestation = {
    schemaVersion: 1,
    reviewer: assertString(input.reviewer, 'ManualAttestation reviewer', 'ATTESTATION_INVALID'),
    reviewedAt: assertTimestamp(input.reviewedAt, 'ManualAttestation reviewedAt'),
    decision,
    authoredDigest: input.authoredDigest,
    verificationPlanDigest: input.verificationPlanDigest,
    ...(input.note == null ? {} : { note: String(input.note) }),
  };
  const result = withDeterministicDigest(attestation, 'attestationDigest');
  if (input.attestationDigest != null) {
    invariant(
      input.attestationDigest === result.attestationDigest,
      'ATTESTATION_DIGEST_MISMATCH',
      'ManualAttestation digest does not match its content'
    );
  }
  return result;
}

export function createRegionDecision(input) {
  invariant(input && typeof input === 'object', 'REGION_INVALID', 'RegionDecision must be an object');
  const status = assertString(input.status, 'RegionDecision status', 'REGION_INVALID');
  invariant(REGION_STATUSES.has(status), 'REGION_INVALID', `Unsupported RegionDecision status: ${status}`);

  let bbox;
  if (input.bbox != null) {
    invariant(input.bbox && typeof input.bbox === 'object', 'REGION_INVALID', 'RegionDecision bbox must be an object');
    bbox = {};
    for (const field of ['x', 'y', 'width', 'height']) {
      invariant(Number.isFinite(input.bbox[field]), 'REGION_INVALID', `RegionDecision bbox.${field} must be finite`);
      bbox[field] = input.bbox[field];
    }
  }

  const id = assertString(input.id, 'RegionDecision id', 'REGION_INVALID');
  invariant(REGION_ID_RE.test(id), 'REGION_INVALID', 'RegionDecision id must match REG-###');
  const decision = {
    schemaVersion: 1,
    id,
    status,
    ...(bbox ? { bbox } : {}),
    ruleIds: sortedStrings(input.ruleIds || [], 'RegionDecision ruleIds'),
    evidenceDigests: sortedStrings(input.evidenceDigests || [], 'RegionDecision evidenceDigests'),
    ...(input.note == null ? {} : { note: String(input.note) }),
  };
  for (const digest of decision.evidenceDigests) assertDigest(digest, 'RegionDecision evidence digest', 'REGION_INVALID');
  const result = withDeterministicDigest(decision, 'decisionDigest');
  if (input.decisionDigest != null) {
    invariant(
      input.decisionDigest === result.decisionDigest,
      'REGION_DIGEST_MISMATCH',
      `RegionDecision ${decision.id} digest does not match its content`
    );
  }
  return result;
}

function normalizeAttention(input) {
  invariant(input && typeof input === 'object', 'ATTENTION_STATUS_REQUIRED', 'attention status is required');
  invariant(['open', 'closed'].includes(input.status), 'ATTENTION_STATUS_INVALID', 'attention.status must be open or closed');
  if (input.status === 'open') {
    assertDigest(input.referenceDigest, 'attention referenceDigest', 'ATTENTION_STATUS_INVALID');
    return { status: 'open', referenceDigest: input.referenceDigest };
  }
  return {
    status: 'closed',
    closureNote: assertString(input.closureNote, 'attention closureNote', 'ATTENTION_STATUS_INVALID'),
  };
}

// Optional structured audit trail for sweep-stage freeze/reopen events
// (docs/fidelity-loop-rules.md §4). Recording is voluntary and never blocks
// acceptance; when present, each event must bind real evidence.
function normalizeStageDecisions(input) {
  if (input == null) return [];
  invariant(Array.isArray(input), 'STAGE_DECISION_INVALID', 'stageDecisions must be an array');
  return input.map((decision, index) => {
    invariant(decision && typeof decision === 'object', 'STAGE_DECISION_INVALID', `stageDecisions[${index}] must be an object`);
    invariant(
      SWEEP_STAGES.includes(decision.stage),
      'STAGE_DECISION_INVALID',
      `stageDecisions[${index}].stage must be one of ${SWEEP_STAGES.join(', ')}`
    );
    invariant(
      ['frozen', 'reopened'].includes(decision.status),
      'STAGE_DECISION_INVALID',
      `stageDecisions[${index}].status must be frozen or reopened`
    );
    assertDigest(decision.evidenceDigest, `stageDecisions[${index}].evidenceDigest`, 'STAGE_DECISION_INVALID');
    return {
      stage: decision.stage,
      status: decision.status,
      evidenceDigest: decision.evidenceDigest,
      ...(decision.note == null ? {} : { note: String(decision.note) }),
    };
  });
}

function normalizeVerificationPlan(input) {
  invariant(input && typeof input === 'object', 'VERIFICATION_PLAN_INVALID', 'verificationPlan is required');
  assertDigest(input.digest, 'verificationPlan digest', 'VERIFICATION_PLAN_INVALID');
  const requiredLocales = sortedStrings(input.requiredLocales, 'verificationPlan.requiredLocales');
  invariant(requiredLocales.length > 0, 'VERIFICATION_PLAN_INVALID', 'verificationPlan requires at least one locale');
  invariant(Array.isArray(input.requiredChecks), 'VERIFICATION_PLAN_INVALID', 'verificationPlan.requiredChecks must be an array');
  const checkIds = new Set();
  const requiredChecks = input.requiredChecks.map((check, index) => {
    invariant(check && typeof check === 'object', 'VERIFICATION_PLAN_INVALID', `verificationPlan.requiredChecks[${index}] must be an object`);
    const id = assertString(check.id, `verificationPlan.requiredChecks[${index}].id`, 'VERIFICATION_PLAN_INVALID');
    invariant(!checkIds.has(id), 'VERIFICATION_PLAN_INVALID', `Duplicate required check: ${id}`);
    checkIds.add(id);
    invariant(CHECK_ENFORCEMENTS.has(check.enforcement), 'VERIFICATION_PLAN_INVALID', `Required check ${id} has an invalid enforcement`);
    invariant(CHECK_LOCALE_SCOPES.has(check.localeScope), 'VERIFICATION_PLAN_INVALID', `Required check ${id} has an invalid localeScope`);
    invariant(CHECK_EVIDENCE_KINDS.has(check.evidenceKind), 'VERIFICATION_PLAN_INVALID', `Required check ${id} has an invalid evidenceKind`);
    invariant(
      (check.enforcement === 'manual') === (check.evidenceKind === 'manual-decision'),
      'VERIFICATION_PLAN_INVALID',
      `Required check ${id} manual enforcement and evidenceKind disagree`
    );
    const featureEvidenceDigests = sortedStrings(
      check.featureEvidenceDigests || [],
      `Required check ${id} featureEvidenceDigests`
    );
    for (const digest of featureEvidenceDigests) {
      assertDigest(digest, `Required check ${id} feature evidence digest`, 'VERIFICATION_PLAN_INVALID');
    }
    return {
      id,
      enforcement: check.enforcement,
      localeScope: check.localeScope,
      evidenceKind: check.evidenceKind,
      objectIds: sortedStrings(check.objectIds || [], `Required check ${id} objectIds`),
      featureEvidenceDigests,
    };
  }).sort((left, right) => left.id.localeCompare(right.id));
  return {
    digest: input.digest,
    requiredLocales,
    changeImpact: sortedStrings(input.changeImpact || [], 'verificationPlan.changeImpact'),
    requiredChecks,
  };
}

function normalizeAutomaticEvidence(input, authoredDigest, verificationPlanDigest) {
  invariant(input && typeof input === 'object', 'AUTOMATIC_EVIDENCE_REQUIRED', 'automaticEvidence is required');
  assertDigest(input.authoredDigest, 'automaticEvidence authoredDigest', 'AUTOMATIC_EVIDENCE_INVALID');
  assertDigest(input.verificationPlanDigest, 'automaticEvidence verificationPlanDigest', 'AUTOMATIC_EVIDENCE_INVALID');
  invariant(
    input.authoredDigest === authoredDigest,
    'STALE_AUTOMATIC_EVIDENCE',
    'Automatic evidence does not match the current authored digest'
  );
  invariant(
    input.verificationPlanDigest === verificationPlanDigest,
    'STALE_AUTOMATIC_EVIDENCE',
    'Automatic evidence does not match the current VerificationPlan digest'
  );
  invariant(Array.isArray(input.locales), 'AUTOMATIC_EVIDENCE_INVALID', 'automaticEvidence.locales must be an array');
  invariant(input.consistency && typeof input.consistency === 'object', 'AUTOMATIC_EVIDENCE_INVALID', 'automaticEvidence.consistency is required');
  invariant(
    ['passed', 'failed'].includes(input.consistency.status),
    'AUTOMATIC_EVIDENCE_INVALID',
    `Unsupported consistency evidence status: ${input.consistency.status}`
  );
  assertDigest(input.consistency.digest, 'automaticEvidence consistency digest', 'AUTOMATIC_EVIDENCE_INVALID');

  const localeNames = new Set();
  const locales = input.locales.map((item, index) => {
    invariant(item && typeof item === 'object', 'AUTOMATIC_EVIDENCE_INVALID', `Locale evidence ${index} is invalid`);
    const locale = assertString(item.locale, `Locale evidence ${index} locale`, 'AUTOMATIC_EVIDENCE_INVALID');
    invariant(!localeNames.has(locale), 'AUTOMATIC_EVIDENCE_INVALID', `Duplicate locale evidence: ${locale}`);
    localeNames.add(locale);
    invariant(
      ['passed', 'failed', 'not-applicable'].includes(item.status),
      'AUTOMATIC_EVIDENCE_INVALID',
      `Unsupported automatic evidence status for ${locale}: ${item.status}`
    );
    assertDigest(item.digest, `Automatic evidence digest for ${locale}`, 'AUTOMATIC_EVIDENCE_INVALID');
    return { locale, status: item.status, digest: item.digest };
  }).sort((left, right) => left.locale.localeCompare(right.locale));

  const evidence = {
    authoredDigest,
    verificationPlanDigest,
    consistency: {
      status: input.consistency.status,
      digest: input.consistency.digest,
    },
    locales,
  };
  return withDeterministicDigest(evidence, 'evidenceDigest');
}

function normalizeFeedbackSummary(input = {}) {
  const openItems = sortedStrings(input.openItems || [], 'feedbackSummary.openItems');
  const automationUpgradesRequired = sortedStrings(
    input.automationUpgradesRequired || [],
    'feedbackSummary.automationUpgradesRequired'
  );
  return { openItems, automationUpgradesRequired };
}

function measurementPasses(measurement) {
  if (measurement.operator === 'lte') return measurement.value <= measurement.threshold;
  if (measurement.operator === 'gte') return measurement.value >= measurement.threshold;
  return measurement.value === measurement.threshold;
}

function normalizeRiskChecks(input) {
  invariant(Array.isArray(input), 'RISK_CHECK_INVALID', 'riskChecks must be an array');
  const ids = new Set();
  return input.map((check, index) => {
    invariant(check && typeof check === 'object', 'RISK_CHECK_INVALID', `Risk check ${index} is invalid`);
    const id = assertString(check.id, `Risk check ${index} id`, 'RISK_CHECK_INVALID');
    invariant(!ids.has(id), 'RISK_CHECK_INVALID', `Duplicate risk check: ${id}`);
    ids.add(id);
    invariant(RISK_STATUSES.has(check.status), 'RISK_CHECK_INVALID', `Unsupported risk status for ${id}: ${check.status}`);
    if (check.status === 'not-applicable') {
      assertString(check.reason, `Risk check ${id} not-applicable reason`, 'RISK_CHECK_INVALID');
    }
    invariant(Array.isArray(check.measurements || []), 'RISK_CHECK_INVALID', `Risk check ${id} measurements must be an array`);
    const measurementIds = new Set();
    const measurements = (check.measurements || []).map((measurement, measurementIndex) => {
      invariant(measurement && typeof measurement === 'object', 'RISK_CHECK_INVALID', `Risk measurement ${id}/${measurementIndex} is invalid`);
      const measurementId = assertString(
        measurement.id,
        `Risk measurement ${id}/${measurementIndex} id`,
        'RISK_CHECK_INVALID'
      );
      invariant(!measurementIds.has(measurementId), 'RISK_CHECK_INVALID', `Duplicate risk measurement: ${id}/${measurementId}`);
      measurementIds.add(measurementId);
      invariant(Number.isFinite(measurement.value), 'RISK_CHECK_INVALID', `Risk measurement ${id}/${measurementId} value must be finite`);
      invariant(Number.isFinite(measurement.threshold), 'RISK_CHECK_INVALID', `Risk measurement ${id}/${measurementId} threshold must be finite`);
      invariant(
        MEASUREMENT_OPERATORS.has(measurement.operator),
        'RISK_CHECK_INVALID',
        `Unsupported risk measurement operator: ${measurement.operator}`
      );
      return {
        id: measurementId,
        value: measurement.value,
        operator: measurement.operator,
        threshold: measurement.threshold,
        ...(measurement.unit == null ? {} : { unit: String(measurement.unit) }),
      };
    }).sort((left, right) => left.id.localeCompare(right.id));
    return {
      id,
      status: check.status,
      measurements,
      ...(check.reason == null ? {} : { reason: String(check.reason) }),
    };
  }).sort((left, right) => left.id.localeCompare(right.id));
}

function finiteObject(input, fields, label) {
  invariant(input && typeof input === 'object' && !Array.isArray(input), 'INTERFACE_MATRIX_INVALID', `${label} must be an object`);
  return Object.fromEntries(fields.map((field) => {
    invariant(Number.isFinite(input[field]), 'INTERFACE_MATRIX_INVALID', `${label}.${field} must be finite`);
    return [field, input[field]];
  }));
}

function normalizeIntervals(input, label, { links = false } = {}) {
  invariant(Array.isArray(input), 'INTERFACE_MATRIX_INVALID', `${label} must be an array`);
  const identities = new Set();
  return input.map((interval, index) => {
    const value = finiteObject(interval, ['top', 'bottom'], `${label}[${index}]`);
    invariant(value.bottom >= value.top, 'INTERFACE_MATRIX_INVALID', `${label}[${index}] bottom must not be above top`);
    if (links) {
      const linkId = assertString(interval.linkId, `${label}[${index}].linkId`, 'INTERFACE_MATRIX_INVALID');
      invariant(!identities.has(linkId), 'INTERFACE_MATRIX_INVALID', `${label} repeats link ${linkId}`);
      identities.add(linkId);
      return { linkId, ...value };
    }
    return value;
  }).sort((left, right) => (left.linkId || '').localeCompare(right.linkId || '') || left.top - right.top || left.bottom - right.bottom);
}

function normalizeInterfaceSide(input, label) {
  if (input == null) return null;
  invariant(input && typeof input === 'object', 'INTERFACE_MATRIX_INVALID', `${label} must be an object or null`);
  const nodeBbox = finiteObject(input.nodeBbox, ['left', 'right', 'top', 'bottom'], `${label}.nodeBbox`);
  invariant(nodeBbox.right >= nodeBbox.left && nodeBbox.bottom >= nodeBbox.top, 'INTERFACE_MATRIX_INVALID', `${label}.nodeBbox has inverted edges`);
  const unionIntervals = normalizeIntervals(input.unionIntervals, `${label}.unionIntervals`);
  invariant(unionIntervals.length > 0, 'INTERFACE_MATRIX_INVALID', `${label}.unionIntervals cannot be empty`);
  return {
    nodeBbox,
    unionIntervals,
    linkIntervals: normalizeIntervals(input.linkIntervals, `${label}.linkIntervals`, { links: true }),
  };
}

function interfaceSpan(side) {
  const top = Math.min(...side.unionIntervals.map((interval) => interval.top));
  const bottom = Math.max(...side.unionIntervals.map((interval) => interval.bottom));
  return { top, bottom, center: (top + bottom) / 2, width: bottom - top };
}

function deriveInterfaceDeltas(reference, candidate) {
  const expected = interfaceSpan(reference);
  const actual = interfaceSpan(candidate);
  return Object.fromEntries(['top', 'bottom', 'center', 'width'].map((field) => [field, actual[field] - expected[field]]));
}

function derivedMatrixSummary(expectedInterfaceIds, rows) {
  const counts = Object.fromEntries(MATRIX_FIELDS.map((field) => [field, 0]));
  counts.expectedInterfaces = expectedInterfaceIds.length;
  counts.auditedInterfaces = rows.length;
  for (const row of rows) {
    if (row.result === 'passed') counts.passedInterfaces += 1;
    else if (row.result === 'failed') counts.failedInterfaces += 1;
    else if (row.result === 'documented-exception') counts.documentedExceptions += 1;
    else if (row.result === 'manual-pending') counts.pendingInterfaces += 1;
    else if (row.result === 'not-scored') counts.notScoredInterfaces += 1;
  }
  return counts;
}

export function createInterfaceMatrix(input) {
  if (input == null) return null;
  invariant(input && typeof input === 'object', 'INTERFACE_MATRIX_INVALID', 'interfaceMatrix must be an object');
  invariant(
    input.protocol === INTERFACE_MATRIX_PROTOCOL && input.schemaVersion === 1,
    'INTERFACE_MATRIX_INVALID',
    'interfaceMatrix must use interface-matrix/v1'
  );
  const expectedInterfaceIds = sortedStrings(input.expectedInterfaceIds, 'interfaceMatrix.expectedInterfaceIds');
  invariant(expectedInterfaceIds.length > 0, 'INTERFACE_MATRIX_INVALID', 'interfaceMatrix.expectedInterfaceIds cannot be empty');
  invariant(Array.isArray(input.rows), 'INTERFACE_MATRIX_INVALID', 'interfaceMatrix.rows must be an array');
  const rowIds = new Set();
  const rows = input.rows.map((row, index) => {
    invariant(row && typeof row === 'object', 'INTERFACE_MATRIX_INVALID', `interfaceMatrix.rows[${index}] must be an object`);
    const id = assertString(row.id, `interfaceMatrix.rows[${index}].id`, 'INTERFACE_MATRIX_INVALID');
    const node = assertString(row.node, `interfaceMatrix row ${id} node`, 'INTERFACE_MATRIX_INVALID');
    const side = assertString(row.side, `interfaceMatrix row ${id} side`, 'INTERFACE_MATRIX_INVALID');
    invariant(['left', 'right'].includes(side), 'INTERFACE_MATRIX_INVALID', `interfaceMatrix row ${id} side must be left or right`);
    invariant(id === `${node}:${side}`, 'INTERFACE_MATRIX_INVALID', `interfaceMatrix row ${id} identity must equal node:side`);
    invariant(!rowIds.has(id), 'INTERFACE_MATRIX_INVALID', `interfaceMatrix repeats row ${id}`);
    rowIds.add(id);
    invariant(INTERFACE_COVERAGE_INTENTS.has(row.coverageIntent), 'INTERFACE_MATRIX_INVALID', `interfaceMatrix row ${id} has invalid coverageIntent`);
    invariant(INTERFACE_RESULTS.has(row.result), 'INTERFACE_MATRIX_INVALID', `interfaceMatrix row ${id} has invalid result`);
    invariant(INTERFACE_ENDPOINT_STATUSES.has(row.endpointStatus), 'INTERFACE_MATRIX_INVALID', `interfaceMatrix row ${id} has invalid endpointStatus`);
    invariant(INTERFACE_ENDPOINT_STATUSES.has(row.tangentStatus), 'INTERFACE_MATRIX_INVALID', `interfaceMatrix row ${id} has invalid tangentStatus`);
    const reference = normalizeInterfaceSide(row.reference, `interfaceMatrix row ${id} reference`);
    const candidate = normalizeInterfaceSide(row.candidate, `interfaceMatrix row ${id} candidate`);
    invariant(reference || candidate, 'INTERFACE_MATRIX_INVALID', `interfaceMatrix row ${id} must exist in reference or candidate`);
    let deltas = null;
    if (reference && candidate) {
      const suppliedDeltas = finiteObject(row.deltas, ['top', 'bottom', 'center', 'width'], `interfaceMatrix row ${id} deltas`);
      deltas = deriveInterfaceDeltas(reference, candidate);
      invariant(
        Object.keys(deltas).every((field) => Math.abs(deltas[field] - suppliedDeltas[field]) <= 1e-9),
        'INTERFACE_MATRIX_DELTA_MISMATCH',
        `interfaceMatrix row ${id} deltas must be derived from its reference and candidate intervals`
      );
    }
    invariant(row.evidenceDigests && typeof row.evidenceDigests === 'object', 'INTERFACE_MATRIX_INVALID', `interfaceMatrix row ${id} evidenceDigests are required`);
    const evidenceDigests = {};
    for (const field of ['referenceCrop', 'audit', 'contactSheet']) {
      assertDigest(row.evidenceDigests[field], `interfaceMatrix row ${id} ${field} digest`, 'INTERFACE_MATRIX_INVALID');
      evidenceDigests[field] = row.evidenceDigests[field];
    }
    let provenance = null;
    if (row.provenance != null) {
      invariant(row.provenance && typeof row.provenance === 'object', 'INTERFACE_MATRIX_INVALID', `interfaceMatrix row ${id} provenance must be an object`);
      const kind = assertString(row.provenance.kind, `interfaceMatrix row ${id} provenance kind`, 'INTERFACE_MATRIX_INVALID');
      invariant(['reference', 'design-spec'].includes(kind), 'INTERFACE_MATRIX_INVALID', `interfaceMatrix row ${id} has invalid provenance kind`);
      assertDigest(row.provenance.digest, `interfaceMatrix row ${id} provenance digest`, 'INTERFACE_MATRIX_INVALID');
      provenance = { kind, digest: row.provenance.digest };
    }
    if (row.coverageIntent === 'full-face') {
      invariant(provenance, 'INTERFACE_MATRIX_FULL_FACE_PROVENANCE_REQUIRED', `Full-face row ${id} needs reference or design-spec provenance`);
    }
    if (row.result === 'documented-exception') {
      invariant(
        provenance,
        'INTERFACE_MATRIX_EXCEPTION_PROVENANCE_REQUIRED',
        `Documented exception row ${id} needs structured reference or design-spec provenance`
      );
    }
    return {
      id,
      node,
      side,
      coverageIntent: row.coverageIntent,
      reference,
      candidate,
      deltas,
      endpointStatus: row.endpointStatus,
      tangentStatus: row.tangentStatus,
      result: row.result,
      evidenceDigests,
      ...(provenance ? { provenance } : {}),
      ...(row.note == null ? {} : { note: String(row.note) }),
    };
  }).sort((left, right) => left.id.localeCompare(right.id));
  const value = {
    schemaVersion: 1,
    protocol: INTERFACE_MATRIX_PROTOCOL,
    expectedInterfaceIds,
    rows,
    summary: derivedMatrixSummary(expectedInterfaceIds, rows),
  };
  const matrix = { ...value, digest: digestFidelityValue(value) };
  if (input.digest != null) {
    invariant(input.digest === matrix.digest, 'INTERFACE_MATRIX_DIGEST_MISMATCH', 'interfaceMatrix digest does not match its rows');
  }
  return deepFreeze(matrix);
}

function blocker(code, subject, details = {}) {
  return { code, subject, ...details };
}

function collectAutomaticBlockers(plan, evidence) {
  const byLocale = new Map(evidence.locales.map((item) => [item.locale, item]));
  return plan.requiredLocales.flatMap((locale) => {
    const item = byLocale.get(locale);
    if (!item) return [blocker('AUTOMATIC_LOCALE_MISSING', locale)];
    if (item.status !== 'passed') {
      return [blocker('AUTOMATIC_LOCALE_NOT_PASSED', locale, { status: item.status })];
    }
    return [];
  });
}

function expectedCheckInstances(plan) {
  return plan.requiredChecks.flatMap((check) => {
    const locales = check.localeScope === 'required-locales' ? plan.requiredLocales : [null];
    return locales.map((locale) => ({
      check,
      locale,
      identity: locale == null ? check.id : `${check.id}@${locale}`,
    }));
  });
}

function normalizeCheckResults(input, plan) {
  invariant(Array.isArray(input), 'CHECK_RESULTS_INVALID', 'checkResults must be an array');
  const expected = new Map(expectedCheckInstances(plan).map((item) => [item.identity, item]));
  const seen = new Set();
  return input.map((result, index) => {
    invariant(result && typeof result === 'object', 'CHECK_RESULTS_INVALID', `checkResults[${index}] must be an object`);
    const checkId = assertString(result.checkId, `checkResults[${index}].checkId`, 'CHECK_RESULTS_INVALID');
    const locale = result.locale == null ? null : assertString(result.locale, `checkResults[${index}].locale`, 'CHECK_RESULTS_INVALID');
    const identity = locale == null ? checkId : `${checkId}@${locale}`;
    const expectation = expected.get(identity);
    invariant(expectation, 'CHECK_RESULT_NOT_REQUIRED', `Check result ${identity} is not required by the VerificationPlan`);
    invariant(!seen.has(identity), 'CHECK_RESULTS_INVALID', `Duplicate check result: ${identity}`);
    seen.add(identity);
    invariant(CHECK_STATUSES.has(result.status), 'CHECK_RESULTS_INVALID', `Check result ${identity} has invalid status`);
    invariant(CHECK_SOURCES.has(result.source), 'CHECK_RESULTS_INVALID', `Check result ${identity} has invalid source`);
    const expectedSource = expectation.check.enforcement === 'manual' ? 'manual' : 'automatic';
    invariant(result.source === expectedSource, 'CHECK_RESULT_SOURCE_INVALID', `Check result ${identity} must come from ${expectedSource}`);
    const objectIds = sortedStrings(result.objectIds || [], `Check result ${identity} objectIds`);
    invariant(
      JSON.stringify(objectIds) === JSON.stringify(expectation.check.objectIds),
      'CHECK_RESULT_OBJECT_MISMATCH',
      `Check result ${identity} does not cover the planned objects`
    );
    const evidenceDigests = sortedStrings(result.evidenceDigests || [], `Check result ${identity} evidenceDigests`);
    invariant(evidenceDigests.length > 0, 'CHECK_RESULT_EVIDENCE_REQUIRED', `Check result ${identity} needs evidence`);
    for (const digest of evidenceDigests) assertDigest(digest, `Check result ${identity} evidence digest`, 'CHECK_RESULTS_INVALID');
    return {
      checkId,
      ...(locale == null ? {} : { locale }),
      status: result.status,
      source: result.source,
      evidenceKind: expectation.check.evidenceKind,
      objectIds,
      evidenceDigests,
      ...(result.note == null ? {} : { note: String(result.note) }),
    };
  }).sort((left, right) => left.checkId.localeCompare(right.checkId) || String(left.locale || '').localeCompare(String(right.locale || '')));
}

function collectCheckResultBlockers(plan, checkResults) {
  const byIdentity = new Map(checkResults.map((result) => [
    result.locale == null ? result.checkId : `${result.checkId}@${result.locale}`,
    result,
  ]));
  const blockers = [];
  for (const expected of expectedCheckInstances(plan)) {
    const result = byIdentity.get(expected.identity);
    if (!result) {
      blockers.push(blocker('REQUIRED_CHECK_MISSING', expected.identity, {
        enforcement: expected.check.enforcement,
      }));
    } else if (result.status !== 'passed') {
      blockers.push(blocker('REQUIRED_CHECK_NOT_PASSED', expected.identity, { status: result.status }));
    }
  }
  return blockers;
}

function collectMatrixBlockers(matrix, required) {
  if (!required) return [];
  if (!matrix) return [blocker('INTERFACE_MATRIX_REQUIRED', 'interface-matrix')];
  const summary = matrix.summary;
  const classified = summary.passedInterfaces
    + summary.failedInterfaces
    + summary.documentedExceptions
    + summary.pendingInterfaces
    + summary.notScoredInterfaces;
  const blockers = [];
  const expectedIds = new Set(matrix.expectedInterfaceIds);
  const rowIds = new Set(matrix.rows.map((row) => row.id));
  const missingIds = [...expectedIds].filter((id) => !rowIds.has(id)).sort();
  const unexpectedIds = [...rowIds].filter((id) => !expectedIds.has(id)).sort();
  if (missingIds.length || unexpectedIds.length) {
    blockers.push(blocker('INTERFACE_MATRIX_IDENTITY_MISMATCH', 'interface-matrix', {
      missingIds,
      unexpectedIds,
    }));
  }
  if (summary.auditedInterfaces !== classified) {
    blockers.push(blocker('INTERFACE_MATRIX_IDENTITY_MISMATCH', 'interface-matrix', {
      auditedInterfaces: summary.auditedInterfaces,
      classifiedInterfaces: classified,
    }));
  }
  if (summary.auditedInterfaces !== summary.expectedInterfaces) {
    blockers.push(blocker('INTERFACE_MATRIX_INCOMPLETE', 'interface-matrix', {
      expectedInterfaces: summary.expectedInterfaces,
      auditedInterfaces: summary.auditedInterfaces,
    }));
  }
  if (summary.failedInterfaces > 0) {
    blockers.push(blocker('INTERFACE_MATRIX_FAILED', 'interface-matrix', { count: summary.failedInterfaces }));
  }
  if (summary.pendingInterfaces > 0) {
    blockers.push(blocker('INTERFACE_MATRIX_PENDING', 'interface-matrix', { count: summary.pendingInterfaces }));
  }
  if (summary.notScoredInterfaces > 0) {
    blockers.push(blocker('INTERFACE_MATRIX_NOT_SCORED', 'interface-matrix', { count: summary.notScoredInterfaces }));
  }
  for (const row of matrix.rows) {
    if (row.endpointStatus !== 'passed') {
      blockers.push(blocker('INTERFACE_MATRIX_ENDPOINT_NOT_PASSED', row.id, { status: row.endpointStatus }));
    }
    if (row.tangentStatus !== 'passed') {
      blockers.push(blocker('INTERFACE_MATRIX_TANGENT_NOT_PASSED', row.id, { status: row.tangentStatus }));
    }
  }
  if (summary.passedInterfaces + summary.documentedExceptions !== summary.expectedInterfaces) {
    blockers.push(blocker('INTERFACE_MATRIX_NOT_CLOSED', 'interface-matrix'));
  }
  return blockers;
}

function sortBlockers(blockers) {
  return blockers.sort((left, right) => {
    const byCode = left.code.localeCompare(right.code);
    return byCode || String(left.subject).localeCompare(String(right.subject));
  });
}

export function createFidelityResult(input) {
  invariant(input && typeof input === 'object', 'FIDELITY_RESULT_INVALID', 'FidelityResult input is required');
  const buildId = assertString(input.buildId, 'buildId', 'FIDELITY_RESULT_INVALID');
  const key = assertString(input.key, 'key', 'FIDELITY_RESULT_INVALID');
  invariant(ADAPTERS.has(input.adapter), 'FIDELITY_RESULT_INVALID', `Unsupported Adapter: ${input.adapter}`);
  assertDigest(input.authoredDigest, 'authoredDigest', 'FIDELITY_RESULT_INVALID');

  const verificationPlan = normalizeVerificationPlan(input.verificationPlan);
  const automaticEvidence = normalizeAutomaticEvidence(
    input.automaticEvidence,
    input.authoredDigest,
    verificationPlan.digest
  );
  const attestation = input.attestation == null ? null : createManualAttestation(input.attestation);
  if (attestation) {
    invariant(
      attestation.authoredDigest === input.authoredDigest,
      'STALE_ATTESTATION',
      'ManualAttestation does not match the current authored digest'
    );
    invariant(
      attestation.verificationPlanDigest === verificationPlan.digest,
      'STALE_ATTESTATION',
      'ManualAttestation does not match the current VerificationPlan digest'
    );
  }

  invariant(Array.isArray(input.regions), 'REGION_INVALID', 'regions must be an array');
  const regionIds = new Set();
  const regions = input.regions.map((region) => {
    const decision = createRegionDecision(region);
    invariant(!regionIds.has(decision.id), 'REGION_INVALID', `Duplicate RegionDecision: ${decision.id}`);
    regionIds.add(decision.id);
    return decision;
  }).sort((left, right) => left.id.localeCompare(right.id));
  const feedbackSummary = normalizeFeedbackSummary(input.feedbackSummary);
  const riskChecks = normalizeRiskChecks(input.riskChecks);
  const interfaceMatrix = createInterfaceMatrix(input.interfaceMatrix);
  const checkResults = normalizeCheckResults(input.checkResults || [], verificationPlan);
  const attention = normalizeAttention(input.attention);
  const stageDecisions = normalizeStageDecisions(input.stageDecisions);

  const blockers = collectAutomaticBlockers(verificationPlan, automaticEvidence);
  blockers.push(...collectCheckResultBlockers(verificationPlan, checkResults));
  if (automaticEvidence.consistency.status !== 'passed') {
    blockers.push(blocker('AUTOMATIC_CONSISTENCY_NOT_PASSED', 'dataset-verification', {
      status: automaticEvidence.consistency.status,
    }));
  }
  for (const region of regions) {
    if (region.status === 'open') blockers.push(blocker('REGION_OPEN', region.id));
  }
  if (attention.status === 'open') blockers.push(blocker('ATTENTION_REFERENCE_OPEN', 'red-box'));
  for (const item of feedbackSummary.openItems) blockers.push(blocker('FEEDBACK_OPEN', item));
  for (const item of feedbackSummary.automationUpgradesRequired) {
    blockers.push(blocker('FEEDBACK_AUTOMATION_UPGRADE_REQUIRED', item));
  }
  for (const check of riskChecks) {
    if (check.status === 'failed') blockers.push(blocker('RISK_CHECK_FAILED', check.id));
    if (check.status === 'open') blockers.push(blocker('RISK_CHECK_OPEN', check.id));
    for (const measurement of check.measurements) {
      if (!measurementPasses(measurement)) {
        blockers.push(blocker('RISK_THRESHOLD_VIOLATION', `${check.id}/${measurement.id}`, {
          value: measurement.value,
          operator: measurement.operator,
          threshold: measurement.threshold,
          ...(measurement.unit == null ? {} : { unit: measurement.unit }),
        }));
      }
    }
  }

  const matrixRequired = input.adapter === 'income-statement'
    && verificationPlan.changeImpact.some((impact) =>
      impact === 'geometry' || impact === 'new-dataset' || impact === 'render-engine'
    );
  blockers.push(...collectMatrixBlockers(interfaceMatrix, matrixRequired));
  sortBlockers(blockers);

  let status;
  if (attestation?.decision === 'rejected') status = 'rejected';
  else if (attestation?.decision === 'blocked') status = 'blocked';
  else if (blockers.length > 0) status = 'blocked';
  else if (!attestation) status = 'review-pending';
  else status = 'accepted';

  const result = {
    schemaVersion: FIDELITY_RESULT_SCHEMA_VERSION,
    protocol: FIDELITY_RESULT_PROTOCOL,
    kind: 'fidelity-result',
    status,
    subject: {
      buildId,
      key,
      adapter: input.adapter,
      authoredDigest: input.authoredDigest,
      verificationPlanDigest: verificationPlan.digest,
    },
    verificationPlan,
    automaticEvidence,
    checkResults,
    attestation,
    regions,
    feedbackSummary,
    riskChecks,
    interfaceMatrix,
    attention,
    ...(stageDecisions.length ? { stageDecisions } : {}),
    blockers,
  };
  return withDeterministicDigest(result, 'resultDigest');
}
