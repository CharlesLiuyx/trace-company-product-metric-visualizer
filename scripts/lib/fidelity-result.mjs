import { createHash } from 'node:crypto';

// A FidelityResult records the operator's acceptance of one authored snapshot
// together with the Build-bound automatic evidence it was given: dataset
// consistency, and for Income Statement one evidence-ready render per required
// locale with the gate summary that render produced. Render gates are hard
// gates at render time, so the result does not re-judge them.
export const FIDELITY_RESULT_SCHEMA_VERSION = 3;
export const FIDELITY_RESULT_PROTOCOL = 'fidelity-result/v3';

const ADAPTERS = new Set(['income-statement', 'revenue-metric', 'metric-observation']);
const DIGEST_RE = /^sha256:[a-f0-9]{64}$/;
const GATE_STATUSES = new Set(['passed', 'failed']);

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

function assertDigest(value, label, code) {
  invariant(DIGEST_RE.test(String(value || '')), code, `${label} must be a sha256 digest`);
  return value;
}

function assertString(value, label, code) {
  invariant(typeof value === 'string' && value.trim(), code, `${label} is required`);
  return value.trim();
}

function deepFreeze(value) {
  if (!value || typeof value !== 'object' || Object.isFrozen(value)) return value;
  Object.freeze(value);
  for (const child of Object.values(value)) deepFreeze(child);
  return value;
}

function normalizeAcceptance(input) {
  invariant(input && typeof input === 'object', 'ACCEPTANCE_REQUIRED', 'An explicit operator acceptance is required to finish review');
  invariant(
    input.decision === 'accepted',
    'ACCEPTANCE_REQUIRED',
    'Only an explicit acceptance closes a Build; record problems with record:workflow feedback'
  );
  invariant(
    typeof input.reviewedAt === 'string' && Number.isFinite(Date.parse(input.reviewedAt)),
    'ACCEPTANCE_INVALID',
    'acceptance.reviewedAt must be an ISO timestamp'
  );
  return {
    reviewer: assertString(input.reviewer, 'acceptance.reviewer', 'ACCEPTANCE_INVALID'),
    decision: 'accepted',
    note: assertString(input.note, 'acceptance.note', 'ACCEPTANCE_INVALID'),
    reviewedAt: input.reviewedAt,
    ...(input.previewId == null ? {} : { previewId: assertString(input.previewId, 'acceptance.previewId', 'ACCEPTANCE_INVALID') }),
  };
}

function finiteMetric(value) {
  return Number.isFinite(value) ? value : null;
}

function normalizeGates(gates, locale) {
  if (gates == null) return null;
  invariant(gates && typeof gates === 'object' && !Array.isArray(gates), 'EVIDENCE_INVALID', `Gate summary for ${locale} must be an object`);
  return Object.fromEntries(Object.entries(gates).map(([id, status]) => {
    invariant(GATE_STATUSES.has(status), 'EVIDENCE_INVALID', `Gate ${id} for ${locale} has unsupported status: ${status}`);
    return [id, status];
  }).sort(([left], [right]) => left.localeCompare(right)));
}

function normalizeEvidence(input, requiredLocales) {
  invariant(Array.isArray(input), 'EVIDENCE_INVALID', 'evidence must be an array');
  const locales = new Set();
  const evidence = input.map((entry, index) => {
    invariant(entry && typeof entry === 'object', 'EVIDENCE_INVALID', `evidence[${index}] must be an object`);
    const locale = assertString(entry.locale, `evidence[${index}].locale`, 'EVIDENCE_INVALID');
    invariant(!locales.has(locale), 'EVIDENCE_INVALID', `Locale ${locale} has more than one evidence run`);
    locales.add(locale);
    const metrics = entry.metrics || {};
    return {
      locale,
      manifest: assertString(entry.manifest, `evidence ${locale} manifest`, 'EVIDENCE_INVALID'),
      digest: assertDigest(entry.digest, `evidence ${locale} digest`, 'EVIDENCE_INVALID'),
      candidateDigest: assertDigest(entry.candidateDigest, `evidence ${locale} candidate digest`, 'EVIDENCE_INVALID'),
      metrics: {
        similarity: finiteMetric(metrics.similarity),
        mae: finiteMetric(metrics.mae),
        width: finiteMetric(metrics.width),
        height: finiteMetric(metrics.height),
      },
      gates: normalizeGates(entry.gates, locale),
    };
  }).sort((left, right) => left.locale.localeCompare(right.locale));
  for (const locale of requiredLocales) {
    invariant(locales.has(locale), 'EVIDENCE_LOCALE_MISSING', `Required locale ${locale} has no evidence-ready render on the current authored snapshot`);
  }
  for (const entry of evidence) {
    const failed = Object.entries(entry.gates || {}).filter(([, status]) => status !== 'passed').map(([id]) => id);
    invariant(!failed.length, 'EVIDENCE_GATE_FAILED', `Render evidence for ${entry.locale} records failed gates: ${failed.join(', ')}`);
  }
  return evidence;
}

/**
 * Build the accepted FidelityResult. It throws instead of recording a
 * non-accepted result: problems are feedback, not review outcomes.
 */
export function createFidelityResult(input) {
  invariant(input && typeof input === 'object', 'FIDELITY_RESULT_INVALID', 'FidelityResult input is required');
  invariant(ADAPTERS.has(input.adapter), 'FIDELITY_RESULT_INVALID', `Unsupported Adapter: ${input.adapter}`);
  const requiredLocales = input.adapter === 'income-statement' ? [...(input.requiredLocales || [])].sort() : [];
  invariant(
    input.adapter !== 'income-statement' || requiredLocales.length > 0,
    'FIDELITY_RESULT_INVALID',
    'Income Statement review needs at least one required locale'
  );
  invariant(
    input.consistency?.status === 'passed',
    'AUTOMATIC_CONSISTENCY_NOT_PASSED',
    'Dataset consistency evidence must pass on the current authored snapshot'
  );
  const evidence = normalizeEvidence(input.evidence || [], requiredLocales);
  invariant(
    input.adapter === 'income-statement' || evidence.length === 0,
    'ADAPTER_EVIDENCE_INVALID',
    `${input.adapter} review does not take Sankey render evidence`
  );
  const result = {
    schemaVersion: FIDELITY_RESULT_SCHEMA_VERSION,
    protocol: FIDELITY_RESULT_PROTOCOL,
    kind: 'fidelity-result',
    status: 'accepted',
    subject: {
      buildId: assertString(input.buildId, 'buildId', 'FIDELITY_RESULT_INVALID'),
      key: assertString(input.key, 'key', 'FIDELITY_RESULT_INVALID'),
      adapter: input.adapter,
      authoredDigest: assertDigest(input.authoredDigest, 'authoredDigest', 'FIDELITY_RESULT_INVALID'),
      verificationPlanDigest: assertDigest(input.verificationPlanDigest, 'verificationPlanDigest', 'FIDELITY_RESULT_INVALID'),
    },
    acceptance: normalizeAcceptance(input.acceptance),
    evidence,
    automatic: {
      consistency: {
        status: 'passed',
        digest: assertDigest(input.consistency.digest, 'consistency digest', 'FIDELITY_RESULT_INVALID'),
      },
      locales: evidence.map(({ locale, gates }) => ({ locale, status: 'passed', gates })),
    },
  };
  return deepFreeze({ ...result, resultDigest: digestFidelityValue(result) });
}

/**
 * One read model over every recorded FidelityResult version. v1/v2 results
 * (checkResults, Interface Matrix, attention, regions) stay readable; only
 * their status, subject, consistency and per-locale evidence are surfaced.
 */
export function summarizeFidelityResult(result) {
  invariant(result?.kind === 'fidelity-result', 'FIDELITY_RESULT_INVALID', 'FidelityResult is required');
  if (result.protocol === FIDELITY_RESULT_PROTOCOL) {
    return {
      protocol: result.protocol,
      status: result.status,
      subject: result.subject,
      consistency: result.automatic.consistency,
      locales: result.evidence.map(({ locale, digest }) => ({ locale, status: 'passed', digest })),
      acceptance: { reviewer: result.acceptance.reviewer, reviewedAt: result.acceptance.reviewedAt },
      blockers: [],
    };
  }
  const byLocale = new Map((result.automaticEvidence?.locales || []).map((item) => [item.locale, item]));
  const locales = (result.verificationPlan?.requiredLocales || [...byLocale.keys()]).map((locale) => {
    const item = byLocale.get(locale);
    return item
      ? { locale, status: item.status, digest: item.digest }
      : { locale, status: 'missing', digest: null };
  });
  return {
    protocol: result.protocol || `fidelity-result/v${result.schemaVersion || 1}`,
    status: result.status,
    subject: result.subject,
    consistency: result.automaticEvidence?.consistency || null,
    locales: locales.sort((left, right) => left.locale.localeCompare(right.locale)),
    acceptance: result.attestation
      ? { reviewer: result.attestation.reviewer || null, reviewedAt: result.attestation.reviewedAt || null }
      : null,
    blockers: (result.blockers || []).map((blocker) => ({ ...blocker })),
  };
}
