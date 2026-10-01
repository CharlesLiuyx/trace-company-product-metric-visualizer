import { digestFidelityValue, summarizeFidelityResult } from './fidelity-result.mjs';

export const CLOSEOUT_REPORT_PROTOCOL = 'closeout-report/v2';

const DIGEST_RE = /^sha256:[a-f0-9]{64}$/;
const BUILD_STATES = new Set(['INTAKED', 'AUTHORED', 'CLOSED', 'BASELINE_STAGED', 'SEALED']);
const RESULT_STATUSES = new Set(['review-pending', 'accepted', 'rejected', 'blocked']);

function fail(code, message, details = undefined) {
  const error = new Error(message);
  error.code = code;
  if (details !== undefined) error.details = details;
  throw error;
}

function invariant(condition, code, message, details) {
  if (!condition) fail(code, message, details);
}

function assertString(value, label) {
  invariant(typeof value === 'string' && value.trim(), 'CLOSEOUT_REPORT_INVALID', `${label} is required`);
  return value.trim();
}

function assertDigest(value, label, { nullable = false } = {}) {
  if (nullable && value == null) return null;
  invariant(DIGEST_RE.test(String(value || '')), 'CLOSEOUT_REPORT_INVALID', `${label} must be a sha256 digest`);
  return value;
}

function deepFreeze(value) {
  if (!value || typeof value !== 'object' || Object.isFrozen(value)) return value;
  Object.freeze(value);
  for (const child of Object.values(value)) deepFreeze(child);
  return value;
}

function sortedUnique(values) {
  return [...new Set(values)].sort((left, right) => String(left).localeCompare(String(right)));
}

function validateFidelityResult(result) {
  invariant(result?.kind === 'fidelity-result', 'CLOSEOUT_REPORT_INVALID', 'FidelityResult is required');
  invariant(RESULT_STATUSES.has(result.status), 'CLOSEOUT_REPORT_INVALID', `Unsupported FidelityResult status: ${result.status}`);
  assertDigest(result.resultDigest, 'FidelityResult resultDigest');
  const { resultDigest, ...content } = result;
  invariant(
    resultDigest === digestFidelityValue(content),
    'FIDELITY_RESULT_DIGEST_MISMATCH',
    'FidelityResult content does not match resultDigest'
  );
  return result;
}

function normalizeInspection(inspection) {
  invariant(inspection && typeof inspection === 'object', 'CLOSEOUT_REPORT_INVALID', 'Build inspection is required');
  invariant(BUILD_STATES.has(inspection.historicalState), 'CLOSEOUT_REPORT_INVALID', 'Invalid historical Build state');
  invariant(BUILD_STATES.has(inspection.effectiveState), 'CLOSEOUT_REPORT_INVALID', 'Invalid effective Build state');
  invariant(typeof inspection.fresh === 'boolean', 'CLOSEOUT_REPORT_INVALID', 'Build inspection fresh must be boolean');
  invariant(inspection.digests && typeof inspection.digests === 'object', 'CLOSEOUT_REPORT_INVALID', 'Build inspection digests are required');
  const historicalState = inspection.historicalState;
  const sealDigest = assertDigest(inspection.digests.seal, 'Build seal digest', { nullable: true });
  if (historicalState === 'SEALED') {
    invariant(sealDigest, 'CLOSEOUT_REPORT_INVALID', 'A historical SEALED Build requires a seal digest');
  }
  return {
    buildId: assertString(inspection.buildId, 'Build inspection buildId'),
    key: assertString(inspection.key, 'Build inspection key'),
    adapter: assertString(inspection.adapter, 'Build inspection Adapter'),
    revision: Number.isInteger(inspection.revision) ? inspection.revision : null,
    historicalState,
    effectiveState: inspection.effectiveState,
    fresh: inspection.fresh,
    freshnessReasons: sortedUnique((inspection.reasons || []).map(String)),
    staleArtifacts: [...(inspection.staleArtifacts || [])]
      .map((item) => ({
        path: String(item.path),
        reason: String(item.reason),
        ...(item.expected == null ? {} : { expected: String(item.expected) }),
        ...(item.actual == null ? {} : { actual: String(item.actual) }),
      }))
      .sort((left, right) => left.path.localeCompare(right.path) || left.reason.localeCompare(right.reason)),
    digests: {
      source: assertDigest(inspection.digests.source, 'Build source digest', { nullable: true }),
      authored: assertDigest(inspection.digests.authored, 'Build authored digest', { nullable: true }),
      closure: assertDigest(inspection.digests.closure, 'Build closure digest', { nullable: true }),
      seal: sealDigest,
    },
  };
}

function addBlocker(blockers, blocker) {
  const normalized = {
    source: blocker.source,
    code: blocker.code,
    subject: String(blocker.subject || 'build'),
    ...(blocker.details == null ? {} : { details: blocker.details }),
  };
  blockers.set(`${normalized.source}\u0000${normalized.code}\u0000${normalized.subject}`, normalized);
}

export function createCloseoutReport(input) {
  invariant(input && typeof input === 'object', 'CLOSEOUT_REPORT_INVALID', 'CloseoutReport input is required');
  invariant(
    input.status == null && input.confidence == null,
    'DERIVED_FIELD_FORBIDDEN',
    'CloseoutReport status and confidence are derived and cannot be supplied by the caller'
  );
  const build = normalizeInspection(input.inspection);
  const fidelity = validateFidelityResult(input.fidelityResult);
  const summary = summarizeFidelityResult(fidelity);
  invariant(summary.subject?.buildId === build.buildId, 'CLOSEOUT_SUBJECT_MISMATCH', 'FidelityResult Build does not match inspection');
  invariant(summary.subject.key === build.key, 'CLOSEOUT_SUBJECT_MISMATCH', 'FidelityResult key does not match inspection');
  invariant(summary.subject.adapter === build.adapter, 'CLOSEOUT_SUBJECT_MISMATCH', 'FidelityResult Adapter does not match inspection');
  invariant(summary.subject.authoredDigest === build.digests.authored, 'CLOSEOUT_SUBJECT_MISMATCH', 'FidelityResult authored digest does not match inspection');
  if (input.inspection.fidelityResultDigest != null) {
    invariant(
      input.inspection.fidelityResultDigest === fidelity.resultDigest,
      'CLOSEOUT_SUBJECT_MISMATCH',
      'Build inspection and FidelityResult digests differ'
    );
  }

  const automaticEvidence = summary.locales.map((item) => ({ ...item }));
  const consistencyEvidence = summary.consistency
    ? { status: summary.consistency.status, digest: summary.consistency.digest }
    : { status: 'missing', digest: null };
  const blockers = new Map();
  // Historical v1/v2 results carry their own derived blockers.
  for (const item of summary.blockers) {
    const { code, subject, ...details } = item;
    addBlocker(blockers, { source: 'fidelity-result', code, subject, details });
  }
  if (fidelity.status === 'review-pending') {
    addBlocker(blockers, { source: 'review', code: 'REVIEW_PENDING', subject: build.key });
  } else if (fidelity.status !== 'accepted') {
    addBlocker(blockers, { source: 'review', code: `REVIEW_${fidelity.status.toUpperCase()}`, subject: build.key });
  }
  if (!build.fresh) {
    for (const reason of build.freshnessReasons.length ? build.freshnessReasons : ['unspecified-staleness']) {
      addBlocker(blockers, { source: 'freshness', code: 'BUILD_STALE', subject: reason });
    }
  }
  for (const locale of automaticEvidence.filter((item) => item.status !== 'passed')) {
    addBlocker(blockers, {
      source: 'automatic-evidence',
      code: locale.status === 'missing' ? 'AUTOMATIC_LOCALE_MISSING' : 'AUTOMATIC_LOCALE_NOT_PASSED',
      subject: locale.locale,
      details: { status: locale.status },
    });
  }
  if (consistencyEvidence.status !== 'passed') {
    addBlocker(blockers, {
      source: 'automatic-evidence',
      code: 'AUTOMATIC_CONSISTENCY_NOT_PASSED',
      subject: 'dataset-verification',
      details: { status: consistencyEvidence.status },
    });
  }

  const sortedBlockers = [...blockers.values()].sort((left, right) =>
    left.source.localeCompare(right.source)
      || left.code.localeCompare(right.code)
      || left.subject.localeCompare(right.subject)
  );
  const isConverged = build.historicalState === 'SEALED'
    && build.effectiveState === 'SEALED'
    && build.fresh
    && fidelity.status === 'accepted'
    && sortedBlockers.length === 0;
  let status;
  if (isConverged) status = 'converged';
  else if (
    fidelity.status === 'review-pending'
    && sortedBlockers.every((blocker) => blocker.code === 'REVIEW_PENDING')
  ) status = 'review-pending';
  else if (sortedBlockers.length > 0) status = 'blocked';
  else status = 'in-progress';
  const confidence = status === 'converged'
    ? 'high'
    : status === 'in-progress' && fidelity.status === 'accepted' && build.fresh
      ? 'medium'
      : 'low';

  const report = {
    schemaVersion: 2,
    protocol: CLOSEOUT_REPORT_PROTOCOL,
    kind: 'closeout-report',
    subject: { buildId: build.buildId, key: build.key, adapter: build.adapter },
    status,
    confidence,
    build,
    reviewStatus: fidelity.status,
    fidelityResultProtocol: summary.protocol,
    acceptance: summary.acceptance,
    digests: {
      authored: build.digests.authored,
      verificationPlan: summary.subject.verificationPlanDigest || null,
      fidelityResult: fidelity.resultDigest,
      closure: build.digests.closure,
      seal: build.digests.seal,
    },
    locales: automaticEvidence.map((item) => item.locale),
    consistencyEvidence,
    automaticEvidence,
    blockers: sortedBlockers,
  };
  return deepFreeze({ ...report, reportDigest: digestFidelityValue(report) });
}

function validateReport(report) {
  invariant(report?.kind === 'closeout-report', 'CLOSEOUT_REPORT_INVALID', 'CloseoutReport is required');
  assertDigest(report.reportDigest, 'CloseoutReport reportDigest');
  const { reportDigest, ...content } = report;
  invariant(
    reportDigest === digestFidelityValue(content),
    'CLOSEOUT_REPORT_DIGEST_MISMATCH',
    'CloseoutReport content does not match reportDigest'
  );
  return report;
}

function inline(value) {
  return String(value).replace(/[\r\n]+/g, ' ').trim();
}

function joined(values, empty = 'none') {
  return values.length ? values.map(inline).join(', ') : empty;
}

function acceptanceText(acceptance) {
  return acceptance ? `${inline(acceptance.reviewer || 'unknown')} at ${acceptance.reviewedAt || 'unknown time'}` : 'none';
}

export function renderTaskInformation(inputReport) {
  const report = validateReport(inputReport);
  const automatic = report.automaticEvidence.map((item) => `${item.locale}=${item.status} (${item.digest || 'no digest'})`);
  const blockers = report.blockers.map((item) => `${item.source}/${item.code}:${item.subject}`);
  return [
    '# Task information',
    '',
    `- Dataset Build: ${inline(report.subject.buildId)} (${inline(report.subject.key)}, Adapter=${inline(report.subject.adapter)})`,
    `- Lifecycle: historical=${report.build.historicalState}; effective=${report.build.effectiveState}; fresh=${report.build.fresh}; reasons=${joined(report.build.freshnessReasons)}`,
    `- Derived close-out: status=${report.status}; confidence=${report.confidence}; review=${report.reviewStatus}`,
    `- Acceptance: ${acceptanceText(report.acceptance)} (${report.fidelityResultProtocol})`,
    `- Digests: authored=${report.digests.authored}; plan=${report.digests.verificationPlan}; result=${report.digests.fidelityResult}; closure=${report.digests.closure || 'none'}; seal=${report.digests.seal || 'none'}`,
    `- Locales / automatic evidence: ${joined(automatic, 'not applicable')}`,
    `- Dataset consistency evidence: ${report.consistencyEvidence.status} (${report.consistencyEvidence.digest || 'no digest'})`,
    `- Open and blockers: ${joined(blockers)}`,
    `- Report digest: ${report.reportDigest}`,
    '',
  ].join('\n');
}

export function renderLoopFidelitySummary(inputReport) {
  const report = validateReport(inputReport);
  const automatic = report.automaticEvidence.map((item) => `${item.locale}:${item.status}`);
  const blockers = report.blockers.map((item) => `${item.code}:${item.subject}`);
  return [
    '### Loop Fidelity Summary',
    `- Scope: ${inline(report.subject.key)}; locales=${joined(report.locales, 'not applicable')}; Adapter=${inline(report.subject.adapter)}.`,
    `- Status: ${report.status}; derived confidence=${report.confidence}; review=${report.reviewStatus}; accepted by ${acceptanceText(report.acceptance)}.`,
    `- State: historical=${report.build.historicalState}; effective=${report.build.effectiveState}; fresh=${report.build.fresh}.`,
    `- Digests: authored=${report.digests.authored}; plan=${report.digests.verificationPlan}; result=${report.digests.fidelityResult}; seal=${report.digests.seal || 'none'}.`,
    `- Gates: ${joined(automatic, 'not applicable')}; blockers=${joined(blockers)}.`,
    `- Dataset consistency: ${report.consistencyEvidence.status} (${report.consistencyEvidence.digest || 'no digest'}).`,
    '',
  ].join('\n');
}
