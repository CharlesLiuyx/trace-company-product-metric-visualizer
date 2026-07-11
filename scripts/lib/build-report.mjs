import { digestFeedbackValue } from './feedback-ledger.mjs';
import { digestFidelityValue } from './fidelity-result.mjs';

export const CLOSEOUT_REPORT_PROTOCOL = 'closeout-report/v1';

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

function validateFeedbackLedger(ledger) {
  invariant(ledger?.kind === 'feedback-ledger', 'CLOSEOUT_REPORT_INVALID', 'Feedback Ledger is required');
  assertDigest(ledger.digest, 'Feedback Ledger digest');
  const { digest, ...content } = ledger;
  invariant(
    digest === digestFeedbackValue(content),
    'FEEDBACK_LEDGER_DIGEST_MISMATCH',
    'Feedback Ledger content does not match its digest'
  );
  return ledger;
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

function normalizeAutomaticEvidence(result) {
  const byLocale = new Map(result.automaticEvidence.locales.map((item) => [item.locale, item]));
  return result.verificationPlan.requiredLocales.map((locale) => {
    const evidence = byLocale.get(locale);
    return evidence
      ? { locale, status: evidence.status, digest: evidence.digest }
      : { locale, status: 'missing', digest: null };
  }).sort((left, right) => left.locale.localeCompare(right.locale));
}

function normalizeRegions(result) {
  return result.regions.map((region) => ({
    id: region.id,
    status: region.status,
    ruleIds: [...region.ruleIds],
    evidenceDigests: [...region.evidenceDigests],
    decisionDigest: region.decisionDigest,
    ...(region.bbox == null ? {} : { bbox: { ...region.bbox } }),
    ...(region.note == null ? {} : { note: region.note }),
  })).sort((left, right) => left.id.localeCompare(right.id));
}

function normalizeRiskChecks(result) {
  return result.riskChecks.map((check) => ({
    id: check.id,
    status: check.status,
    measurements: check.measurements.map((measurement) => ({ ...measurement })),
    ...(check.reason == null ? {} : { reason: check.reason }),
  })).sort((left, right) => left.id.localeCompare(right.id));
}

function normalizeMatrix(result) {
  const required = result.subject.adapter === 'income-statement'
    && result.verificationPlan.changeImpact.some((impact) => impact === 'geometry' || impact === 'new-dataset');
  if (!result.interfaceMatrix) return { required, digest: null, summary: null };
  return {
    required,
    digest: result.interfaceMatrix.digest,
    summary: { ...result.interfaceMatrix.summary },
  };
}

function relevantFeedback(buildId, result, ledger) {
  const openFromLedger = ledger.openFeedback
    .filter((item) => item.buildId === buildId)
    .map((item) => `${item.feedbackId}/${item.regionId}`);
  const openItems = sortedUnique([
    ...openFromLedger,
    ...(result.feedbackSummary?.openItems || []),
  ]);
  const recurrence = ledger.byRule
    .filter((rule) => rule.buildIds.includes(buildId) || rule.automationUpgradeRequired)
    .map((rule) => ({
      ruleId: rule.ruleId,
      occurrenceCount: rule.occurrenceCount,
      executionGapOccurrenceCount: rule.executionGapOccurrenceCount,
      buildIds: [...rule.buildIds],
      automationDispositions: rule.automationDispositions.map((item) => ({ ...item })),
      automationUpgradeRequired: rule.automationUpgradeRequired,
    }))
    .sort((left, right) => left.ruleId.localeCompare(right.ruleId));
  const automationUpgradesRequired = sortedUnique([
    ...recurrence.filter((rule) => rule.automationUpgradeRequired).map((rule) => rule.ruleId),
    ...(result.feedbackSummary?.automationUpgradesRequired || []),
  ]);
  return {
    ledgerDigest: ledger.digest,
    openItems,
    recurrence,
    automationUpgradesRequired,
  };
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
  const ledger = validateFeedbackLedger(input.feedbackLedger);
  invariant(fidelity.subject.buildId === build.buildId, 'CLOSEOUT_SUBJECT_MISMATCH', 'FidelityResult Build does not match inspection');
  invariant(fidelity.subject.key === build.key, 'CLOSEOUT_SUBJECT_MISMATCH', 'FidelityResult key does not match inspection');
  invariant(fidelity.subject.adapter === build.adapter, 'CLOSEOUT_SUBJECT_MISMATCH', 'FidelityResult Adapter does not match inspection');
  invariant(fidelity.subject.authoredDigest === build.digests.authored, 'CLOSEOUT_SUBJECT_MISMATCH', 'FidelityResult authored digest does not match inspection');
  invariant(
    fidelity.subject.verificationPlanDigest === fidelity.verificationPlan.digest,
    'CLOSEOUT_SUBJECT_MISMATCH',
    'FidelityResult subject and VerificationPlan digests differ'
  );
  if (input.inspection.fidelityResultDigest != null) {
    invariant(
      input.inspection.fidelityResultDigest === fidelity.resultDigest,
      'CLOSEOUT_SUBJECT_MISMATCH',
      'Build inspection and FidelityResult digests differ'
    );
  }

  const automaticEvidence = normalizeAutomaticEvidence(fidelity);
  const consistencyEvidence = { ...fidelity.automaticEvidence.consistency };
  const regions = normalizeRegions(fidelity);
  const riskChecks = normalizeRiskChecks(fidelity);
  const interfaceMatrix = normalizeMatrix(fidelity);
  const feedback = relevantFeedback(build.buildId, fidelity, ledger);
  const blockers = new Map();

  for (const item of fidelity.blockers) {
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
  for (const item of feedback.openItems) {
    addBlocker(blockers, { source: 'feedback-ledger', code: 'FEEDBACK_OPEN', subject: item });
  }
  for (const ruleId of feedback.automationUpgradesRequired) {
    addBlocker(blockers, { source: 'feedback-ledger', code: 'FEEDBACK_AUTOMATION_UPGRADE_REQUIRED', subject: ruleId });
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
  const redBox = {
    status: fidelity.attention?.status
      || (regions.some((region) => region.status === 'open') ? 'open' : 'closed'),
    openRegionIds: regions.filter((region) => region.status === 'open').map((region) => region.id),
    ...(fidelity.attention?.referenceDigest == null
      ? {}
      : { referenceDigest: fidelity.attention.referenceDigest }),
    ...(fidelity.attention?.closureNote == null
      ? {}
      : { closureNote: fidelity.attention.closureNote }),
  };

  const report = {
    schemaVersion: 1,
    protocol: CLOSEOUT_REPORT_PROTOCOL,
    kind: 'closeout-report',
    subject: { buildId: build.buildId, key: build.key, adapter: build.adapter },
    status,
    confidence,
    build,
    reviewStatus: fidelity.status,
    digests: {
      authored: build.digests.authored,
      verificationPlan: fidelity.verificationPlan.digest,
      fidelityResult: fidelity.resultDigest,
      closure: build.digests.closure,
      seal: build.digests.seal,
      feedbackLedger: ledger.digest,
    },
    locales: [...fidelity.verificationPlan.requiredLocales],
    consistencyEvidence,
    automaticEvidence,
    blockers: sortedBlockers,
    regions,
    riskChecks,
    interfaceMatrix,
    feedback,
    redBox,
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

function matrixText(matrix) {
  if (!matrix.summary) return matrix.required ? 'required but missing' : 'not applicable';
  const s = matrix.summary;
  return `expected=${s.expectedInterfaces}, audited=${s.auditedInterfaces}, passed=${s.passedInterfaces}, failed=${s.failedInterfaces}, exceptions=${s.documentedExceptions}, pending=${s.pendingInterfaces}, not-scored=${s.notScoredInterfaces}; digest=${matrix.digest}`;
}

function recurrenceText(feedback) {
  if (!feedback.recurrence.length) return 'none';
  return feedback.recurrence.map((rule) =>
    `${rule.ruleId}: occurrences=${rule.occurrenceCount}, execution-gaps=${rule.executionGapOccurrenceCount}, automation-upgrade=${rule.automationUpgradeRequired ? 'required' : 'clear'}`
  ).join('; ');
}

export function renderTaskInformation(inputReport) {
  const report = validateReport(inputReport);
  const automatic = report.automaticEvidence.map((item) => `${item.locale}=${item.status} (${item.digest || 'no digest'})`);
  const regions = report.regions.map((item) => `${item.id}=${item.status}[${joined(item.ruleIds)}]`);
  const risks = report.riskChecks.map((item) => `${item.id}=${item.status}`);
  const blockers = report.blockers.map((item) => `${item.source}/${item.code}:${item.subject}`);
  return [
    '# Task information',
    '',
    `- Dataset Build: ${inline(report.subject.buildId)} (${inline(report.subject.key)}, Adapter=${inline(report.subject.adapter)})`,
    `- Lifecycle: historical=${report.build.historicalState}; effective=${report.build.effectiveState}; fresh=${report.build.fresh}; reasons=${joined(report.build.freshnessReasons)}`,
    `- Derived close-out: status=${report.status}; confidence=${report.confidence}; review=${report.reviewStatus}`,
    `- Digests: authored=${report.digests.authored}; plan=${report.digests.verificationPlan}; result=${report.digests.fidelityResult}; closure=${report.digests.closure || 'none'}; seal=${report.digests.seal || 'none'}; ledger=${report.digests.feedbackLedger}`,
    `- Locales / automatic evidence: ${joined(automatic)}`,
    `- Dataset consistency evidence: ${report.consistencyEvidence.status} (${report.consistencyEvidence.digest})`,
    `- Open and blockers: ${joined(blockers)}`,
    `- Regions: ${joined(regions)}; red-box=${report.redBox.status}; open=${joined(report.redBox.openRegionIds)}; evidence=${report.redBox.referenceDigest || report.redBox.closureNote || 'none'}`,
    `- Risk checks: ${joined(risks)}`,
    `- Interface Matrix: ${matrixText(report.interfaceMatrix)}`,
    `- Feedback recurrence: ${recurrenceText(report.feedback)}; open=${joined(report.feedback.openItems)}; upgrades=${joined(report.feedback.automationUpgradesRequired)}`,
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
    `- Scope: ${inline(report.subject.key)}; locales=${joined(report.locales)}; Adapter=${inline(report.subject.adapter)}.`,
    `- Status: ${report.status}; derived confidence=${report.confidence}; review=${report.reviewStatus}.`,
    `- State: historical=${report.build.historicalState}; effective=${report.build.effectiveState}; fresh=${report.build.fresh}.`,
    `- Digests: authored=${report.digests.authored}; plan=${report.digests.verificationPlan}; result=${report.digests.fidelityResult}; seal=${report.digests.seal || 'none'}.`,
    `- Gates: ${joined(automatic)}; blockers=${joined(blockers)}.`,
    `- Dataset consistency: ${report.consistencyEvidence.status} (${report.consistencyEvidence.digest}).`,
    `- Matrix: ${matrixText(report.interfaceMatrix)}.`,
    `- Frozen/open: regions=${report.regions.length}; open=${joined(report.redBox.openRegionIds)}; red-box=${report.redBox.status}.`,
    `- Feedback learning: ${recurrenceText(report.feedback)}; upgrades=${joined(report.feedback.automationUpgradesRequired)}.`,
    '',
  ].join('\n');
}
