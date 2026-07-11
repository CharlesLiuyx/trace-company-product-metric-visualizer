import { createHash } from 'node:crypto';

export const FIDELITY_RESULT_SCHEMA_VERSION = 1;
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

function normalizeVerificationPlan(input) {
  invariant(input && typeof input === 'object', 'VERIFICATION_PLAN_INVALID', 'verificationPlan is required');
  assertDigest(input.digest, 'verificationPlan digest', 'VERIFICATION_PLAN_INVALID');
  const requiredLocales = sortedStrings(input.requiredLocales, 'verificationPlan.requiredLocales');
  invariant(requiredLocales.length > 0, 'VERIFICATION_PLAN_INVALID', 'verificationPlan requires at least one locale');
  return {
    digest: input.digest,
    requiredLocales,
    changeImpact: sortedStrings(input.changeImpact || [], 'verificationPlan.changeImpact'),
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

function normalizeInterfaceMatrix(input) {
  if (input == null) return null;
  invariant(input && typeof input === 'object', 'INTERFACE_MATRIX_INVALID', 'interfaceMatrix must be an object');
  invariant(input.summary && typeof input.summary === 'object', 'INTERFACE_MATRIX_INVALID', 'interfaceMatrix.summary is required');
  const summary = {};
  for (const field of MATRIX_FIELDS) {
    invariant(
      Number.isInteger(input.summary[field]) && input.summary[field] >= 0,
      'INTERFACE_MATRIX_INVALID',
      `interfaceMatrix.summary.${field} must be a non-negative integer`
    );
    summary[field] = input.summary[field];
  }
  const matrix = { summary };
  if (input.digest != null) {
    assertDigest(input.digest, 'interfaceMatrix digest', 'INTERFACE_MATRIX_INVALID');
    matrix.digest = input.digest;
  } else {
    matrix.digest = digestFidelityValue(matrix);
  }
  return matrix;
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
  const interfaceMatrix = normalizeInterfaceMatrix(input.interfaceMatrix);
  const attention = normalizeAttention(input.attention);

  const blockers = collectAutomaticBlockers(verificationPlan, automaticEvidence);
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
    && verificationPlan.changeImpact.some((impact) => impact === 'geometry' || impact === 'new-dataset');
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
    attestation,
    regions,
    feedbackSummary,
    riskChecks,
    interfaceMatrix,
    attention,
    blockers,
  };
  return withDeterministicDigest(result, 'resultDigest');
}
