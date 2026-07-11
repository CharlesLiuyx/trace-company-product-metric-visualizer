import { createHash } from 'node:crypto';

export const FEEDBACK_RECORD_PROTOCOL = 'feedback-record/v1';
export const FEEDBACK_LEDGER_PROTOCOL = 'feedback-ledger/v1';
export const FEEDBACK_CAUSES = Object.freeze([
  'rule-missing',
  'execution-gap',
  'ambiguous-rule',
]);
export const FEEDBACK_STATUSES = Object.freeze(['open', 'closed']);
export const AUTOMATION_DISPOSITIONS = Object.freeze([
  'hard-gate',
  'quantified-audit',
  'required-checklist',
  'not-suitable',
]);

const DIGEST_RE = /^sha256:[a-f0-9]{64}$/;
const FEEDBACK_ID_RE = /^FB-\d{3,}$/;
const REGION_ID_RE = /^REG-\d{3,}$/;
const RECORD_FIELDS = new Set([
  'schemaVersion',
  'protocol',
  'kind',
  'buildId',
  'feedbackId',
  'regionId',
  'ruleIds',
  'cause',
  'status',
  'beforeEvidenceDigests',
  'afterEvidenceDigests',
  'remedy',
  'automationDisposition',
  'supersedes',
  'digest',
]);

function invariant(condition, code, message, details = undefined) {
  if (condition) return;
  const error = new Error(message);
  error.code = code;
  if (details !== undefined) error.details = details;
  throw error;
}

function canonicalValue(value) {
  if (Array.isArray(value)) return value.map(canonicalValue);
  if (!value || typeof value !== 'object') return value;
  return Object.fromEntries(
    Object.keys(value)
      .sort((left, right) => left.localeCompare(right))
      .map((key) => [key, canonicalValue(value[key])])
  );
}

export function digestFeedbackValue(value) {
  return `sha256:${createHash('sha256').update(JSON.stringify(canonicalValue(value))).digest('hex')}`;
}

function assertDigest(value, label) {
  invariant(DIGEST_RE.test(String(value || '')), 'INVALID_DIGEST', `${label} must be a sha256 digest`);
}

function normalizeDigestList(value, label, { required = false } = {}) {
  invariant(Array.isArray(value), 'INVALID_EVIDENCE', `${label} must be an array`);
  if (required) invariant(value.length > 0, 'INVALID_EVIDENCE', `${label} must not be empty`);
  const unique = new Set();
  for (const digest of value) {
    assertDigest(digest, label);
    invariant(!unique.has(digest), 'DUPLICATE_EVIDENCE', `${label} contains a duplicate digest`);
    unique.add(digest);
  }
  return [...unique].sort();
}

function normalizeAutomationDisposition(value) {
  if (value == null) return null;
  const disposition = typeof value === 'string' ? { kind: value } : value;
  invariant(
    disposition && typeof disposition === 'object' && !Array.isArray(disposition),
    'INVALID_AUTOMATION_DISPOSITION',
    'automationDisposition must be an object or supported kind'
  );
  invariant(
    AUTOMATION_DISPOSITIONS.includes(disposition.kind),
    'INVALID_AUTOMATION_DISPOSITION',
    `Unsupported automationDisposition: ${disposition.kind}`
  );
  if (disposition.kind === 'not-suitable') {
    invariant(
      typeof disposition.reason === 'string' && disposition.reason.trim(),
      'AUTOMATION_REASON_REQUIRED',
      'not-suitable automationDisposition requires a reason'
    );
    return { kind: disposition.kind, reason: disposition.reason.trim() };
  }
  invariant(
    disposition.reason == null,
    'INVALID_AUTOMATION_DISPOSITION',
    `${disposition.kind} automationDisposition must not include a reason`
  );
  return { kind: disposition.kind };
}

function normalizeRecord(input, { verifyShape = false } = {}) {
  invariant(input && typeof input === 'object' && !Array.isArray(input), 'INVALID_FEEDBACK', 'FeedbackRecord is required');
  if (verifyShape) {
    for (const key of Object.keys(input)) {
      invariant(RECORD_FIELDS.has(key), 'UNKNOWN_FEEDBACK_FIELD', `Unsupported FeedbackRecord field: ${key}`);
    }
  }
  invariant(typeof input.buildId === 'string' && input.buildId.trim(), 'INVALID_BUILD_ID', 'buildId is required');
  invariant(FEEDBACK_ID_RE.test(String(input.feedbackId || '')), 'INVALID_FEEDBACK_ID', 'feedbackId must match FB-###');
  invariant(REGION_ID_RE.test(String(input.regionId || '')), 'INVALID_REGION_ID', 'regionId must match REG-###');
  invariant(Array.isArray(input.ruleIds) && input.ruleIds.length > 0, 'RULE_IDS_REQUIRED', 'ruleIds must not be empty');
  const ruleIds = input.ruleIds.map((ruleId) => {
    invariant(typeof ruleId === 'string' && ruleId.trim(), 'INVALID_RULE_ID', 'ruleIds must contain non-empty strings');
    return ruleId.trim();
  });
  invariant(new Set(ruleIds).size === ruleIds.length, 'DUPLICATE_RULE_ID', 'ruleIds must be unique');
  invariant(FEEDBACK_CAUSES.includes(input.cause), 'INVALID_FEEDBACK_CAUSE', `Unsupported cause: ${input.cause}`);
  invariant(FEEDBACK_STATUSES.includes(input.status), 'INVALID_FEEDBACK_STATUS', `Unsupported status: ${input.status}`);

  const beforeEvidenceDigests = normalizeDigestList(input.beforeEvidenceDigests, 'beforeEvidenceDigests', { required: true });
  const afterEvidenceDigests = normalizeDigestList(input.afterEvidenceDigests || [], 'afterEvidenceDigests', {
    required: input.status === 'closed',
  });
  const remedy = input.remedy == null ? null : String(input.remedy).trim();
  if (input.status === 'closed') {
    invariant(remedy, 'REMEDY_REQUIRED', 'Closed feedback requires a remedy');
  }
  if (input.supersedes != null) assertDigest(input.supersedes, 'supersedes');

  return {
    schemaVersion: 1,
    protocol: FEEDBACK_RECORD_PROTOCOL,
    kind: 'feedback-record',
    buildId: input.buildId.trim(),
    feedbackId: input.feedbackId,
    regionId: input.regionId,
    ruleIds: [...ruleIds].sort(),
    cause: input.cause,
    status: input.status,
    beforeEvidenceDigests,
    afterEvidenceDigests,
    remedy,
    automationDisposition: normalizeAutomationDisposition(input.automationDisposition),
    supersedes: input.supersedes || null,
  };
}

export function createFeedbackRecord(input) {
  const record = normalizeRecord(input);
  return Object.freeze({ ...record, digest: digestFeedbackValue(record) });
}

function validateRecord(record) {
  const normalized = normalizeRecord(record, { verifyShape: true });
  assertDigest(record.digest, 'FeedbackRecord digest');
  invariant(
    record.digest === digestFeedbackValue(normalized),
    'FEEDBACK_DIGEST_MISMATCH',
    `FeedbackRecord ${record.buildId}/${record.feedbackId} does not match its digest`
  );
  return { ...normalized, digest: record.digest };
}

function validateGraph(records) {
  const byDigest = new Map();
  for (const record of records) {
    invariant(!byDigest.has(record.digest), 'DUPLICATE_RECORD_DIGEST', `FeedbackRecord ${record.digest} appears twice`);
    byDigest.set(record.digest, record);
  }

  const rootsByIdentity = new Map();
  const childByParent = new Map();
  for (const record of records) {
    const identity = `${record.buildId}\u0000${record.feedbackId}`;
    if (!record.supersedes) {
      invariant(
        !rootsByIdentity.has(identity),
        'DUPLICATE_FEEDBACK_ID',
        `Feedback ID ${record.feedbackId} is duplicated in Build ${record.buildId}`
      );
      rootsByIdentity.set(identity, record.digest);
      continue;
    }
    const parent = byDigest.get(record.supersedes);
    invariant(parent, 'SUPERSESSION_TARGET_MISSING', `Superseded FeedbackRecord ${record.supersedes} was not provided`);
    invariant(
      parent.buildId === record.buildId && parent.feedbackId === record.feedbackId,
      'SUPERSESSION_IDENTITY_MISMATCH',
      'A FeedbackRecord may only supersede the same Build and feedbackId'
    );
    invariant(
      parent.regionId === record.regionId,
      'SUPERSESSION_REGION_MISMATCH',
      'A FeedbackRecord supersession must retain its stable regionId'
    );
    invariant(
      !childByParent.has(record.supersedes),
      'SUPERSESSION_FORK',
      `FeedbackRecord ${record.supersedes} has more than one successor`
    );
    childByParent.set(record.supersedes, record.digest);
  }

  for (const record of records) {
    const seen = new Set();
    let cursor = record;
    while (cursor?.supersedes) {
      invariant(!seen.has(cursor.digest), 'SUPERSESSION_CYCLE', 'FeedbackRecord supersession contains a cycle');
      seen.add(cursor.digest);
      cursor = byDigest.get(cursor.supersedes);
    }
    const identity = `${record.buildId}\u0000${record.feedbackId}`;
    invariant(
      cursor && rootsByIdentity.get(identity) === cursor.digest,
      'SUPERSESSION_ROOT_MISMATCH',
      `FeedbackRecord ${record.digest} does not resolve to its identity root`
    );
  }

  return records.filter((record) => !childByParent.has(record.digest));
}

export function projectFeedbackLedger(inputRecords) {
  invariant(Array.isArray(inputRecords), 'INVALID_FEEDBACK_LEDGER', 'Feedback Ledger input must be an array');
  const records = inputRecords.map(validateRecord).sort((left, right) => left.digest.localeCompare(right.digest));
  const activeRecords = validateGraph(records).sort((left, right) =>
    left.buildId.localeCompare(right.buildId) || left.feedbackId.localeCompare(right.feedbackId)
  );

  const rules = new Map();
  for (const record of activeRecords) {
    for (const ruleId of record.ruleIds) {
      const bucket = rules.get(ruleId) || { records: [], executionGapRecords: [] };
      bucket.records.push(record);
      if (record.cause === 'execution-gap') bucket.executionGapRecords.push(record);
      rules.set(ruleId, bucket);
    }
  }

  const byRule = [...rules.entries()]
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([ruleId, bucket]) => {
      const buildIds = [...new Set(bucket.records.map((record) => record.buildId))].sort();
      const executionGapBuildIds = [...new Set(bucket.executionGapRecords.map((record) => record.buildId))].sort();
      const automationDispositions = bucket.executionGapRecords
        .filter((record) => record.automationDisposition)
        .map((record) => ({
          buildId: record.buildId,
          feedbackId: record.feedbackId,
          recordDigest: record.digest,
          ...record.automationDisposition,
        }))
        .sort((left, right) => left.recordDigest.localeCompare(right.recordDigest));
      return {
        ruleId,
        occurrenceCount: buildIds.length,
        buildIds,
        feedbackCount: bucket.records.length,
        executionGapOccurrenceCount: executionGapBuildIds.length,
        executionGapBuildIds,
        automationDispositions,
        automationUpgradeRequired:
          executionGapBuildIds.length >= 2 && automationDispositions.length === 0,
      };
    });

  const projection = {
    schemaVersion: 1,
    protocol: FEEDBACK_LEDGER_PROTOCOL,
    kind: 'feedback-ledger',
    sourceRecordDigests: records.map((record) => record.digest),
    activeRecordDigests: activeRecords.map((record) => record.digest).sort(),
    activeFeedback: activeRecords.map((record) => ({
      buildId: record.buildId,
      feedbackId: record.feedbackId,
      regionId: record.regionId,
      status: record.status,
      recordDigest: record.digest,
    })),
    openFeedback: activeRecords
      .filter((record) => record.status === 'open')
      .map((record) => ({
        buildId: record.buildId,
        feedbackId: record.feedbackId,
        regionId: record.regionId,
        recordDigest: record.digest,
      })),
    byRule,
  };
  return Object.freeze({ ...projection, digest: digestFeedbackValue(projection) });
}

function validateLedgerProjection(ledger) {
  invariant(ledger && ledger.protocol === FEEDBACK_LEDGER_PROTOCOL, 'INVALID_FEEDBACK_LEDGER', 'Feedback Ledger projection is required');
  assertDigest(ledger.digest, 'Feedback Ledger digest');
  const { digest, ...projection } = ledger;
  invariant(digest === digestFeedbackValue(projection), 'LEDGER_DIGEST_MISMATCH', 'Feedback Ledger projection does not match its digest');
  return ledger;
}

export function assertNoOpenFeedback(ledger) {
  validateLedgerProjection(ledger);
  invariant(
    ledger.openFeedback.length === 0,
    'OPEN_FEEDBACK',
    `Feedback remains open: ${ledger.openFeedback.map(({ buildId, feedbackId }) => `${buildId}/${feedbackId}`).join(', ')}`,
    ledger.openFeedback
  );
  return ledger;
}

export function assertFeedbackLedgerClosable(ledger) {
  assertNoOpenFeedback(ledger);
  const pending = ledger.byRule.filter((rule) => rule.automationUpgradeRequired);
  invariant(
    pending.length === 0,
    'AUTOMATION_UPGRADE_REQUIRED',
    `Repeated execution gaps require automation disposition: ${pending.map((rule) => rule.ruleId).join(', ')}`,
    pending
  );
  return ledger;
}
