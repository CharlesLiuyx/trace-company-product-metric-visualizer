// Source facts for one Build: the pre-intake Type Gate classification and the
// author's flat Source object list (`source-objects/v1`). Every independent
// Source object is one entry with a class; value entries reconcile to exactly
// one SSOT field and, for Sankey financial values, exactly one Adapter node or
// non-node metric. Render geometry is checked by the render gates, never by
// Source pixel evidence here.
import { createHash } from 'node:crypto';
import { DATASET_ADAPTERS } from './dataset-adapters.mjs';
import {
  OPERATING_METRIC_SIGNAL,
  assertOperatingMetricView,
  normalizeOperatingObservation,
  sameOperatingObservation,
} from './operating-metrics.mjs';
import { loadClassicScripts } from './vm-browser.mjs';
import { loadBrowserData } from './browser-data-loader.mjs';

export const SOURCE_CLASSIFICATION_PROTOCOL = 'source-classification/v1';
export const SOURCE_CLASSIFICATION_REVIEW_METHOD = 'full-source-type-gate';
export const SOURCE_CLASSIFICATION_SIGNALS = Object.freeze([
  'income-statement-values',
  'sankey-flow-topology',
  'revenue-metric-definition',
  'time-series-observations',
  'metric-observations',
  OPERATING_METRIC_SIGNAL,
]);

export const SOURCE_OBJECTS_PROTOCOL = 'source-objects/v1';
export const SOURCE_OBJECT_CLASSES = Object.freeze(['value', 'flow', 'label', 'asset', 'residual']);
export const SOURCE_AMOUNT_UNITS = Object.freeze(['K', 'M', 'B', 'T']);
export const INCOME_STATEMENT_SSOT_PATHS = Object.freeze([
  'revenue.total',
  'revenue.items',
  'revenue.breakdowns',
  'revenue.paymentNetwork.gross',
  'revenue.paymentNetwork.grossItems',
  'revenue.paymentNetwork.rebates',
  'costs.costOfRevenue',
  'costs.costOfRevenue.items',
  'costs.operatingExpenses.total',
  'costs.operatingExpenses.items',
  'costs.tax',
  'operatingOtherIncome.total',
  'operatingOtherIncome.items',
  'operatingOtherExpenses.total',
  'operatingOtherExpenses.items',
  'otherIncome.total',
  'otherIncome.items',
  'otherExpenses.total',
  'otherExpenses.items',
  'profit.gross',
  'profit.gross.items',
  'profit.operating',
  'profit.operating.items',
  'profit.net',
]);
export const OPERATING_METRIC_SSOT_PATH = 'operatingMetrics';
export const AUTHORITATIVE_CORRECTION_APPROVAL = 'user-directed-source-correction';

// Totals whose SSOT id is fixed by the path; an author may omit ssotRef.id.
const FIXED_SSOT_IDS = Object.freeze({
  'revenue.total': 'revenue',
  'costs.operatingExpenses.total': 'operating_expenses',
  'operatingOtherIncome.total': 'operating_other_income',
  'operatingOtherExpenses.total': 'operating_other_expenses',
  'otherIncome.total': 'other_income',
  'otherExpenses.total': 'other_expenses',
});

const STABLE_ID_RE = /^[a-z0-9]+(?:[._:-][a-z0-9]+)*$/;
// Adapter node, non-node metric, and layout.labels keys keep their authored case.
const ADAPTER_ID_RE = /^[A-Za-z0-9][A-Za-z0-9_.:-]*$/;
const DIGEST_RE = /^sha256:[a-f0-9]{64}$/;
const DECIMAL_RE = /^-?(?:0|[1-9]\d*)(?:\.\d+)?$/;
const OTHER_LABEL_RE = /(?:^|\b)(?:all\s+other|other(?:s)?)(?:\b|$)/i;
const NUMBER_RE = /-?(?:\d+(?:,\d{3})*(?:\.\d+)?|\.\d+)/;
const UNIT_MULTIPLIERS = Object.freeze({ K: 1e3, M: 1e6, B: 1e9, T: 1e12 });
const SIGNAL_SET = new Set(SOURCE_CLASSIFICATION_SIGNALS);
const CLASS_SET = new Set(SOURCE_OBJECT_CLASSES);
const AMOUNT_UNIT_SET = new Set(SOURCE_AMOUNT_UNITS);
const INCOME_SSOT_PATH_SET = new Set(INCOME_STATEMENT_SSOT_PATHS);

const COMMON_FIELDS = Object.freeze(['id', 'class', 'label', 'literal', 'reason']);
const CLASS_FIELDS = Object.freeze({
  value: Object.freeze([
    'value', 'unit', 'ssotRef', 'node', 'nonNodeMetric', 'precisionRecovery',
    'authoritativeCorrection', 'currency', 'comparison', 'quote', 'referenceBBox', 'labelGroup',
  ]),
  label: Object.freeze(['referenceBBox', 'labelGroup']),
  flow: Object.freeze([]),
  asset: Object.freeze([]),
  residual: Object.freeze([]),
});

const ADAPTER_SIGNATURES = Object.freeze({
  'metric-observation': Object.freeze({
    required: Object.freeze(['metric-observations']),
    forbidden: Object.freeze(['income-statement-values', 'sankey-flow-topology', 'revenue-metric-definition', 'time-series-observations', OPERATING_METRIC_SIGNAL]),
  }),
  'income-statement': Object.freeze({
    required: Object.freeze(['income-statement-values', 'sankey-flow-topology']),
    forbidden: Object.freeze(['revenue-metric-definition', 'time-series-observations', 'metric-observations']),
  }),
  'revenue-metric': Object.freeze({
    required: Object.freeze(['revenue-metric-definition', 'time-series-observations']),
    forbidden: Object.freeze(['income-statement-values', 'sankey-flow-topology', 'metric-observations', OPERATING_METRIC_SIGNAL]),
  }),
});

function sourceObjectsError(code, message) {
  const error = new Error(message);
  error.code = code;
  return error;
}

function invariant(condition, code, message) {
  if (!condition) throw sourceObjectsError(code, message);
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

export function digestCanonical(value) {
  return `sha256:${createHash('sha256').update(JSON.stringify(canonicalValue(value))).digest('hex')}`;
}

function deepFreeze(value) {
  if (!value || typeof value !== 'object' || Object.isFrozen(value)) return value;
  for (const child of Object.values(value)) deepFreeze(child);
  return Object.freeze(value);
}

function nonEmptyString(value) {
  return typeof value === 'string' && value.trim() ? value.trim() : '';
}

// ---- Type Gate ----

function normalizeSignals(rawSignals) {
  invariant(Array.isArray(rawSignals), 'SOURCE_CLASSIFICATION_SIGNALS_REQUIRED', 'Source classification needs explicit positive signals');
  const signals = [...new Set(rawSignals.map((signal) => String(signal || '').trim()))].sort();
  invariant(signals.length > 0 && signals.every(Boolean), 'SOURCE_CLASSIFICATION_SIGNALS_REQUIRED', 'Source classification needs explicit positive signals');
  for (const signal of signals) {
    invariant(SIGNAL_SET.has(signal), 'SOURCE_CLASSIFICATION_SIGNAL_INVALID', `Unsupported Source classification signal: ${signal}`);
  }
  return signals;
}

export function classifySourceSignals(rawSignals, expectedAdapter = null) {
  const signals = normalizeSignals(rawSignals);
  const candidates = DATASET_ADAPTERS.filter((adapter) => {
    const signature = ADAPTER_SIGNATURES[adapter];
    return signature.required.every((signal) => signals.includes(signal)) &&
      signature.forbidden.every((signal) => !signals.includes(signal));
  });
  invariant(
    candidates.length === 1,
    candidates.length === 0 ? 'SOURCE_CLASSIFICATION_UNRECOGNIZED' : 'SOURCE_CLASSIFICATION_AMBIGUOUS',
    candidates.length === 0
      ? `Source signals do not match a supported Adapter signature: ${signals.join(', ')}`
      : `Source signals match more than one Adapter: ${candidates.join(', ')}`
  );
  const adapter = candidates[0];
  invariant(
    expectedAdapter == null || adapter === expectedAdapter,
    'SOURCE_CLASSIFICATION_ADAPTER_MISMATCH',
    `Source facts select ${adapter}, not requested Adapter ${expectedAdapter}`
  );
  return { adapter, signals };
}

function normalizeBBox(raw, label, code) {
  invariant(
    Array.isArray(raw) && raw.length === 4 && raw.every(Number.isInteger),
    code,
    `${label} needs an integer bbox [x, y, width, height]`
  );
  const [x, y, width, height] = raw;
  invariant(x >= 0 && y >= 0 && width > 0 && height > 0, code, `${label} bbox must have a non-negative origin and positive size`);
  return [x, y, width, height];
}

export function normalizeSourceDescriptor(source, label = 'Source') {
  invariant(source && typeof source === 'object', 'SOURCE_OBJECTS_SOURCE_REQUIRED', `${label} identity is required`);
  invariant(typeof source.locator === 'string' && source.locator, 'SOURCE_OBJECTS_SOURCE_INVALID', `${label} needs a locator`);
  invariant(DIGEST_RE.test(String(source.digest || '')), 'SOURCE_OBJECTS_SOURCE_INVALID', `${label} needs an immutable digest`);
  if (source.format === 'text') {
    invariant(Number.isInteger(source.charLength) && source.charLength > 0, 'SOURCE_OBJECTS_SOURCE_INVALID', `${label} needs a positive UTF-16 character length`);
    return { locator: source.locator, digest: source.digest, format: 'text', charLength: source.charLength };
  }
  invariant(Number.isInteger(source.width) && source.width > 0, 'SOURCE_OBJECTS_SOURCE_INVALID', `${label} needs a positive integer width`);
  invariant(Number.isInteger(source.height) && source.height > 0, 'SOURCE_OBJECTS_SOURCE_INVALID', `${label} needs a positive integer height`);
  return { locator: source.locator, digest: source.digest, width: source.width, height: source.height };
}

export function createSourceClassification(input) {
  invariant(input && typeof input === 'object', 'SOURCE_CLASSIFICATION_REQUIRED', 'Source classification is required before intake');
  invariant(
    typeof input.datasetKey === 'string' && STABLE_ID_RE.test(input.datasetKey),
    'SOURCE_CLASSIFICATION_KEY_INVALID',
    'Source classification needs a stable lowercase datasetKey'
  );
  const derived = classifySourceSignals(input.signals, input.adapter);
  const source = normalizeSourceDescriptor(input.source, 'Source classification');
  const textSource = source.format === 'text';
  invariant(!textSource || derived.adapter === 'metric-observation', 'SOURCE_FORMAT_ADAPTER_INVALID', 'Text Sources use the metric-observation Adapter');
  const fullImageBBox = textSource ? null : normalizeBBox(input.fullImageBBox, 'Source classification fullImageBBox', 'SOURCE_CLASSIFICATION_SCOPE_INVALID');
  invariant(
    textSource ? JSON.stringify(input.fullTextRange) === JSON.stringify([0, source.charLength]) : JSON.stringify(fullImageBBox) === JSON.stringify([0, 0, source.width, source.height]),
    'SOURCE_CLASSIFICATION_SCOPE_INVALID',
    'Source classification must bind the complete native Source image'
  );
  invariant(
    input.reviewMethod === SOURCE_CLASSIFICATION_REVIEW_METHOD,
    'SOURCE_CLASSIFICATION_METHOD_INVALID',
    `Source classification must use reviewMethod ${SOURCE_CLASSIFICATION_REVIEW_METHOD}`
  );
  const value = {
    schemaVersion: textSource ? 2 : 1,
    protocol: textSource ? 'source-classification/v2' : SOURCE_CLASSIFICATION_PROTOCOL,
    kind: 'source-classification',
    datasetKey: input.datasetKey,
    adapter: derived.adapter,
    status: 'confirmed',
    reviewMethod: input.reviewMethod,
    source,
    ...(textSource ? { fullTextRange: [0, source.charLength] } : { fullImageBBox }),
    signals: derived.signals,
  };
  const classification = { ...value, classificationDigest: digestCanonical(value) };
  if (input.classificationDigest != null) {
    invariant(input.classificationDigest === classification.classificationDigest, 'SOURCE_CLASSIFICATION_DIGEST_MISMATCH', 'Source classification digest does not match its content');
  }
  return deepFreeze(classification);
}

// ---- Amount literals ----

function decimalsOf(numberText) {
  const fraction = String(numberText).split('.')[1] || '';
  return fraction.length;
}

// A K/M/B/T amount displayed by the Source. Parentheses are the accounting
// display of a cost or loss: the magnitude is kept and the sign comes from the
// authored value.
export function parseUnitAmountLiteral(literal) {
  const text = String(literal || '');
  const parenthesized = text.match(/^\s*\(\s*\$?\s*(\d+(?:,\d{3})*(?:\.\d+)?|\.\d+)\s*([KMBT])\s*\)\s*$/i);
  if (parenthesized) {
    return {
      value: Number(parenthesized[1].replaceAll(',', '')),
      unit: parenthesized[2].toUpperCase(),
      decimals: decimalsOf(parenthesized[1]),
      parenthesized: true,
    };
  }
  const match = text.match(/(-?(?:\d+(?:,\d{3})*(?:\.\d+)?|\.\d+))\s*([KMBT])\b/i);
  if (!match) return null;
  return {
    value: Number(match[1].replaceAll(',', '')),
    unit: match[2].toUpperCase(),
    decimals: decimalsOf(match[1]),
    parenthesized: false,
  };
}

function hasAmount(text) {
  return Boolean(parseUnitAmountLiteral(text));
}

// The literal's own rounding interval is the display resolution: "$18.5B"
// expresses 18.45–18.55B, "$950M" expresses 949.5–950.5M.
function displayedAmount(literal, valueUnit) {
  const amount = parseUnitAmountLiteral(literal);
  if (amount) return { ...amount, unit: amount.unit };
  const number = String(literal || '').match(NUMBER_RE);
  if (!number) return null;
  return { value: Number(number[0].replaceAll(',', '')), unit: valueUnit, decimals: decimalsOf(number[0]), parenthesized: false };
}

function baseValue(value, unit) {
  return Number(value) * UNIT_MULTIPLIERS[unit];
}

function withinResolution(authoredBase, amount) {
  const displayedBase = amount.value * UNIT_MULTIPLIERS[amount.unit];
  const halfResolution = 0.5 * 10 ** -amount.decimals * UNIT_MULTIPLIERS[amount.unit];
  const tolerance = Math.max(1e-6, Math.abs(authoredBase) * 1e-9);
  return Math.abs(authoredBase - displayedBase) <= halfResolution + tolerance;
}

function normalizeAmountFacts(raw, id) {
  const literal = nonEmptyString(raw.literal);
  const value = typeof raw.value === 'string' ? raw.value.trim() : '';
  invariant(literal, 'SOURCE_OBJECTS_AMOUNT_INVALID', `${id} needs the literal Source display text`);
  invariant(DECIMAL_RE.test(value) && Number.isFinite(Number(value)), 'SOURCE_OBJECTS_AMOUNT_INVALID', `${id} value must be a finite exact decimal string`);
  invariant(AMOUNT_UNIT_SET.has(raw.unit), 'SOURCE_OBJECTS_AMOUNT_INVALID', `${id} unit must be one of ${SOURCE_AMOUNT_UNITS.join(', ')}`);
  const displayed = displayedAmount(literal, raw.unit);
  invariant(displayed, 'SOURCE_OBJECTS_AMOUNT_INVALID', `${id} literal must contain the displayed number`);
  if (displayed.parenthesized && Number(value) < 0) displayed.value = -Math.abs(displayed.value);
  const authoredBase = baseValue(value, raw.unit);
  const literalWithinResolution = withinResolution(authoredBase, displayed);
  const roundedToZero = displayed.value === 0 && Number(value) !== 0;

  let authoritativeCorrection = null;
  if (raw.authoritativeCorrection != null) {
    const correction = raw.authoritativeCorrection;
    invariant(correction && typeof correction === 'object' && !Array.isArray(correction), 'SOURCE_OBJECTS_CORRECTION_INVALID', `${id} authoritativeCorrection must be an object`);
    invariant(
      correction.approval === AUTHORITATIVE_CORRECTION_APPROVAL,
      'SOURCE_OBJECTS_CORRECTION_INVALID',
      `${id} authoritativeCorrection needs explicit ${AUTHORITATIVE_CORRECTION_APPROVAL} approval`
    );
    const correctedLiteral = nonEmptyString(correction.literal);
    const reason = nonEmptyString(correction.reason);
    invariant(correctedLiteral && reason, 'SOURCE_OBJECTS_CORRECTION_INVALID', `${id} authoritativeCorrection needs the corrected literal and a reason naming the authoritative source`);
    invariant(
      !literalWithinResolution,
      'SOURCE_OBJECTS_CORRECTION_UNNECESSARY',
      `${id} may record authoritativeCorrection only when the Source literal conflicts with the authored value`
    );
    const corrected = parseUnitAmountLiteral(correctedLiteral);
    invariant(corrected, 'SOURCE_OBJECTS_CORRECTION_INVALID', `${id} corrected literal must include a numeric K/M/B/T amount`);
    invariant(corrected.unit === raw.unit, 'SOURCE_OBJECTS_CORRECTION_MISMATCH', `${id} corrected literal unit must match the authored unit`);
    invariant(
      withinResolution(Math.abs(authoredBase), { ...corrected, value: Math.abs(corrected.value) }),
      'SOURCE_OBJECTS_CORRECTION_MISMATCH',
      `${id} corrected literal does not express the authored value within its resolution`
    );
    authoritativeCorrection = { literal: correctedLiteral, reason, approval: correction.approval };
  }
  invariant(
    literalWithinResolution || authoritativeCorrection,
    'SOURCE_OBJECTS_AMOUNT_RESOLUTION_MISMATCH',
    `${id} value falls outside the rounding interval expressed by its literal`
  );

  let precisionRecovery = null;
  if (raw.precisionRecovery != null) {
    const recovery = raw.precisionRecovery;
    invariant(recovery && typeof recovery === 'object' && !Array.isArray(recovery), 'SOURCE_OBJECTS_PRECISION_RECOVERY_INVALID', `${id} precisionRecovery must be an object`);
    const recoveredLiteral = nonEmptyString(recovery.literal);
    const reason = nonEmptyString(recovery.reason);
    invariant(recoveredLiteral && reason, 'SOURCE_OBJECTS_PRECISION_RECOVERY_INVALID', `${id} precisionRecovery needs the higher-precision literal and a reason naming its source`);
    const recovered = parseUnitAmountLiteral(recoveredLiteral);
    invariant(recovered, 'SOURCE_OBJECTS_PRECISION_RECOVERY_INVALID', `${id} precisionRecovery literal must include a numeric K/M/B/T amount`);
    invariant(
      Math.abs(recovered.value * UNIT_MULTIPLIERS[recovered.unit] - authoredBase) <= Math.max(1e-6, Math.abs(authoredBase) * 1e-9),
      'SOURCE_OBJECTS_PRECISION_RECOVERY_MISMATCH',
      `${id} recovered literal does not match the authored value after K/M/B/T normalization`
    );
    precisionRecovery = { literal: recoveredLiteral, reason };
  }
  invariant(
    !roundedToZero || precisionRecovery || authoritativeCorrection,
    'SOURCE_OBJECTS_PRECISION_RECOVERY_REQUIRED',
    `${id} Source literal rounds to zero; recover a higher-precision value or record a user-directed correction instead of writing zero`
  );
  invariant(
    roundedToZero || precisionRecovery == null,
    'SOURCE_OBJECTS_PRECISION_RECOVERY_UNNECESSARY',
    `${id} may record precisionRecovery only when its Source literal rounds a non-zero amount to zero`
  );
  invariant(
    !(precisionRecovery && authoritativeCorrection),
    'SOURCE_OBJECTS_AMOUNT_RECOVERY_CONFLICT',
    `${id} cannot combine precisionRecovery with authoritativeCorrection`
  );
  return {
    literal,
    value,
    unit: raw.unit,
    ...(precisionRecovery ? { precisionRecovery } : {}),
    ...(authoritativeCorrection ? { authoritativeCorrection } : {}),
  };
}

// ---- SSOT references ----

function normalizeSsotRef(raw, id, adapter) {
  invariant(raw && typeof raw === 'object' && !Array.isArray(raw), 'SOURCE_OBJECTS_SSOT_REF_REQUIRED', `${id} needs a typed ssotRef`);
  if (adapter === 'income-statement') {
    invariant(raw.family === 'income-statement', 'SOURCE_OBJECTS_SSOT_REF_INVALID', `${id} ssotRef family must be income-statement`);
    invariant(
      raw.path === OPERATING_METRIC_SSOT_PATH || INCOME_SSOT_PATH_SET.has(raw.path),
      'SOURCE_OBJECTS_SSOT_REF_INVALID',
      `${id} ssotRef.path is unsupported: ${raw.path}`
    );
    const ssotId = raw.id ?? FIXED_SSOT_IDS[raw.path];
    invariant(typeof ssotId === 'string' && STABLE_ID_RE.test(ssotId), 'SOURCE_OBJECTS_SSOT_REF_INVALID', `${id} income-statement ssotRef needs a stable id`);
    if (FIXED_SSOT_IDS[raw.path]) {
      invariant(ssotId === FIXED_SSOT_IDS[raw.path], 'SOURCE_OBJECTS_SSOT_REF_INVALID', `${id} ${raw.path} always uses id ${FIXED_SSOT_IDS[raw.path]}`);
    }
    return { family: raw.family, path: raw.path, id: ssotId };
  }
  if (adapter === 'revenue-metric') {
    invariant(raw.family === 'revenue-metric' && raw.path === 'observations', 'SOURCE_OBJECTS_SSOT_REF_INVALID', `${id} ssotRef must target revenue-metric observations`);
    invariant(/^\d{4}-\d{2}-\d{2}$/.test(String(raw.date || '')), 'SOURCE_OBJECTS_SSOT_REF_INVALID', `${id} revenue-metric ssotRef needs an observation date`);
    return { family: raw.family, path: raw.path, date: raw.date };
  }
  invariant(raw.family === 'metric-observation' && STABLE_ID_RE.test(String(raw.id || '')), 'SOURCE_OBJECTS_SSOT_REF_INVALID', `${id} ssotRef must target one metric-observation id`);
  return { family: raw.family, id: raw.id };
}

function normalizeAdapterId(value, label) {
  invariant(typeof value === 'string' && ADAPTER_ID_RE.test(value), 'SOURCE_OBJECTS_TARGET_INVALID', `${label} must be an Adapter id`);
  return value;
}

// ---- Entries ----

function assertKnownFields(raw, id, objectClass) {
  if (raw.object !== undefined && raw.source !== undefined) {
    throw sourceObjectsError(
      'SOURCE_OBJECTS_LEGACY_SHAPE',
      `${id || 'Source object'} uses the retired { object, source } shape; write one flat ${SOURCE_OBJECTS_PROTOCOL} entry (id, class, literal, value, unit, ssotRef, node)`
    );
  }
  const allowed = new Set([...COMMON_FIELDS, ...(CLASS_FIELDS[objectClass] || [])]);
  const unknown = Object.keys(raw).filter((key) => !allowed.has(key)).sort();
  invariant(
    unknown.length === 0,
    'SOURCE_OBJECTS_FIELD_UNSUPPORTED',
    `${id} (${objectClass}) has unsupported field(s): ${unknown.join(', ')}; allowed: ${[...allowed].join(', ')}`
  );
}

function normalizeReferenceBBox(raw, id, source) {
  const hasBBox = raw.referenceBBox != null;
  const hasGroup = raw.labelGroup != null;
  invariant(hasBBox === hasGroup, 'SOURCE_OBJECTS_LABEL_POSITION_INVALID', `${id} declares a label position with both referenceBBox and labelGroup, or neither`);
  if (!hasBBox) return {};
  invariant(source.format !== 'text', 'SOURCE_OBJECTS_LABEL_POSITION_INVALID', `${id} referenceBBox needs an image Source`);
  const referenceBBox = normalizeBBox(raw.referenceBBox, `${id} referenceBBox`, 'SOURCE_OBJECTS_LABEL_POSITION_INVALID');
  invariant(
    referenceBBox[0] + referenceBBox[2] <= source.width && referenceBBox[1] + referenceBBox[3] <= source.height,
    'SOURCE_OBJECTS_LABEL_POSITION_INVALID',
    `${id} referenceBBox exceeds the Build Source dimensions`
  );
  return { referenceBBox, labelGroup: normalizeAdapterId(raw.labelGroup, `${id} labelGroup`) };
}

function normalizeValueEntry(raw, base, context) {
  const { id } = base;
  const ssotRef = normalizeSsotRef(raw.ssotRef, id, context.adapter);
  const position = normalizeReferenceBBox(raw, id, context.source);
  if (context.adapter === 'metric-observation') {
    const literal = nonEmptyString(raw.literal);
    const value = typeof raw.value === 'string' ? raw.value.trim() : '';
    invariant(literal && DECIMAL_RE.test(value) && nonEmptyString(raw.unit), 'SOURCE_OBJECTS_AMOUNT_INVALID', `${id} needs literal, exact decimal value, and unit`);
    invariant(raw.node == null && raw.nonNodeMetric == null, 'SOURCE_OBJECTS_TARGET_INVALID', `${id} metric observations have no Sankey target`);
    return { ...base, literal, value, unit: raw.unit.trim(), ssotRef, ...position };
  }
  if (ssotRef.path === OPERATING_METRIC_SSOT_PATH) {
    const observation = normalizeOperatingObservation({
      value: raw.value,
      unit: raw.unit,
      currency: raw.currency,
      comparison: raw.comparison,
      literal: raw.literal,
    });
    const label = nonEmptyString(raw.label);
    invariant(label, 'SOURCE_OBJECTS_OPERATING_INVALID', `${id} operating metric needs its Source label`);
    invariant(
      typeof raw.quote === 'string' && raw.quote.includes(label) && raw.quote.includes(observation.literal),
      'SOURCE_OBJECTS_OPERATING_INVALID',
      `${id} operating metric must retain a Source quote containing its label and literal`
    );
    invariant(raw.node == null && raw.nonNodeMetric == null, 'SOURCE_OBJECTS_OPERATING_INVALID', `${id} operating metric is supplemental text, never a Sankey node or non-node metric`);
    return { ...base, label, ...observation, quote: raw.quote, ssotRef, ...position };
  }
  invariant(raw.currency == null && raw.comparison == null && raw.quote == null, 'SOURCE_OBJECTS_FIELD_UNSUPPORTED', `${id} currency/comparison/quote apply only to operating metrics`);
  const amount = normalizeAmountFacts(raw, id);
  if (context.adapter === 'revenue-metric') {
    invariant(raw.node == null && raw.nonNodeMetric == null, 'SOURCE_OBJECTS_TARGET_INVALID', `${id} revenue observations have no Sankey target`);
    return { ...base, ...amount, ssotRef, ...position };
  }
  invariant(
    (raw.node != null) !== (raw.nonNodeMetric != null),
    'SOURCE_OBJECTS_TARGET_REQUIRED',
    `${id} financial value must name exactly one Adapter node or nonNodeMetric`
  );
  return {
    ...base,
    ...amount,
    ssotRef,
    ...(raw.node != null ? { node: normalizeAdapterId(raw.node, `${id} node`) } : {}),
    ...(raw.nonNodeMetric != null ? { nonNodeMetric: normalizeAdapterId(raw.nonNodeMetric, `${id} nonNodeMetric`) } : {}),
    ...position,
  };
}

function normalizeEntry(raw, index, context) {
  invariant(raw && typeof raw === 'object' && !Array.isArray(raw), 'SOURCE_OBJECTS_ENTRY_INVALID', `Source object ${index} must be an object`);
  const id = raw.id;
  invariant(typeof id === 'string' && STABLE_ID_RE.test(id), raw.object !== undefined ? 'SOURCE_OBJECTS_LEGACY_SHAPE' : 'SOURCE_OBJECTS_ID_INVALID',
    raw.object !== undefined
      ? `Source object ${index} uses the retired { object, source } shape; write one flat ${SOURCE_OBJECTS_PROTOCOL} entry`
      : `Source object ${index} needs a stable lowercase id`);
  invariant(CLASS_SET.has(raw.class), 'SOURCE_OBJECTS_CLASS_INVALID', `${id} class must be one of ${SOURCE_OBJECT_CLASSES.join(', ')}`);
  assertKnownFields(raw, id, raw.class);
  invariant(raw.class !== 'flow' || context.adapter === 'income-statement', 'SOURCE_OBJECTS_CLASS_ADAPTER_MISMATCH', `${id} flow objects exist only in Income Statement Sankey Sources`);
  for (const field of ['label', 'literal', 'reason']) {
    invariant(raw[field] == null || nonEmptyString(raw[field]), 'SOURCE_OBJECTS_ENTRY_INVALID', `${id} ${field} must be a non-empty string when present`);
  }
  const base = {
    id,
    class: raw.class,
    ...(raw.label != null ? { label: raw.label.trim() } : {}),
    ...(raw.literal != null ? { literal: raw.literal.trim() } : {}),
    ...(raw.reason != null ? { reason: raw.reason.trim() } : {}),
  };
  const displayed = [id, base.label, base.literal].filter(Boolean);
  const otherLike = displayed.some((text) => OTHER_LABEL_RE.test(text));
  const amountBearing = [base.label, base.literal].some(hasAmount);
  invariant(
    !(otherLike && raw.class === 'residual'),
    'SOURCE_OBJECTS_OTHER_SKIPPED',
    `${id} is an Other/All Other semantic object; a missing icon or small amount never makes it a residual`
  );
  // T22: an Other that displays an amount is a data metric, never a label,
  // flow, or asset.
  invariant(
    !(otherLike && amountBearing && raw.class !== 'value'),
    'SOURCE_OBJECTS_OTHER_CLASS_INVALID',
    `${id} is an Other object displaying an amount; classify it as a value entry, not ${raw.class}`
  );
  invariant(
    !(context.adapter === 'income-statement' && otherLike && raw.class === 'value' &&
      raw.ssotRef?.path === 'revenue.items' && raw.nonNodeMetric != null),
    'SOURCE_OBJECTS_OTHER_REVENUE_NODE_REQUIRED',
    `${id} is an Other revenue component; map it to a painted node and declare a thin Source face in shortNodes`
  );
  invariant(
    !(raw.class === 'residual' && amountBearing),
    'SOURCE_OBJECTS_RESIDUAL_VALUE',
    `${id} displays an amount and is semantic; it cannot be a non-semantic residual`
  );
  if (raw.class === 'value') return normalizeValueEntry(raw, base, context);
  if (raw.class === 'label') return { ...base, ...normalizeReferenceBBox(raw, id, context.source) };
  return base;
}

function normalizeShortNodes(raw, valueNodeIds) {
  if (raw == null) return [];
  invariant(Array.isArray(raw), 'SOURCE_OBJECTS_SHORT_NODES_INVALID', 'shortNodes must be an array');
  const seen = new Set();
  return raw.map((item, index) => {
    invariant(item && typeof item === 'object' && !Array.isArray(item), 'SOURCE_OBJECTS_SHORT_NODES_INVALID', `shortNodes[${index}] must be an object`);
    const unknown = Object.keys(item).filter((key) => !['node', 'reason'].includes(key));
    invariant(unknown.length === 0, 'SOURCE_OBJECTS_SHORT_NODES_INVALID', `shortNodes[${index}] has unsupported field(s): ${unknown.join(', ')}`);
    const node = normalizeAdapterId(item.node, `shortNodes[${index}].node`);
    const reason = nonEmptyString(item.reason);
    invariant(reason, 'SOURCE_OBJECTS_SHORT_NODES_INVALID', `shortNodes ${node} needs a reason`);
    invariant(!seen.has(node), 'SOURCE_OBJECTS_SHORT_NODES_INVALID', `shortNodes repeats ${node}`);
    seen.add(node);
    invariant(valueNodeIds.has(node), 'SOURCE_OBJECTS_SHORT_NODE_UNKNOWN', `shortNodes ${node} must be the node of a value entry`);
    return { node, reason };
  }).sort((left, right) => left.node.localeCompare(right.node));
}

function normalizedAmountMagnitude(entry) {
  return Math.abs(Number(entry.value) * (UNIT_MULTIPLIERS[entry.unit] || 1));
}

/**
 * Validate the author's flat Source object list for one Build and derive the
 * facts later steps consume (Other IDs, value nodes, non-node metrics, short
 * nodes, opt-in label positions). With `reconcile` (the default) every value
 * entry is also reconciled against the loaded SSOT and Adapter.
 */
export function createSourceObjects(input, context = {}) {
  invariant(input && typeof input === 'object' && !Array.isArray(input), 'SOURCE_OBJECTS_REQUIRED', 'Source objects are required before review preparation');
  const unknown = Object.keys(input).filter((key) => !['objects', 'shortNodes'].includes(key));
  invariant(unknown.length === 0, 'SOURCE_OBJECTS_FIELD_UNSUPPORTED', `Source objects input has unsupported field(s): ${unknown.join(', ')}`);
  const adapter = context.adapter;
  invariant(DATASET_ADAPTERS.includes(adapter), 'SOURCE_OBJECTS_ADAPTER_INVALID', `Unsupported Source objects Adapter: ${adapter}`);
  invariant(typeof context.datasetKey === 'string' && STABLE_ID_RE.test(context.datasetKey), 'SOURCE_OBJECTS_KEY_INVALID', 'Source objects need a stable datasetKey');
  const classification = createSourceClassification(context.classification);
  invariant(
    classification.datasetKey === context.datasetKey && classification.adapter === adapter,
    'SOURCE_OBJECTS_CLASSIFICATION_MISMATCH',
    'Source classification must match the Build key and Adapter'
  );
  const source = normalizeSourceDescriptor(context.source);
  invariant(
    source.digest === classification.source.digest &&
      source.width === classification.source.width &&
      source.height === classification.source.height &&
      source.charLength === classification.source.charLength,
    'SOURCE_OBJECTS_CLASSIFICATION_MISMATCH',
    'Source objects and the pre-intake classification must bind the same Source identity'
  );
  invariant(Array.isArray(input.objects) && input.objects.length > 0, 'SOURCE_OBJECTS_EMPTY', 'Source objects need at least one entry');

  const objects = input.objects
    .map((raw, index) => normalizeEntry(raw, index, { adapter, source }))
    .sort((left, right) => left.id.localeCompare(right.id));
  const ids = new Set();
  const targets = new Map();
  const labelGroups = new Map();
  for (const entry of objects) {
    invariant(!ids.has(entry.id), 'SOURCE_OBJECTS_ID_DUPLICATE', `Source object id appears more than once: ${entry.id}`);
    ids.add(entry.id);
    const target = entry.node || entry.nonNodeMetric;
    if (target) {
      invariant(!targets.has(target), 'SOURCE_OBJECTS_TARGET_DUPLICATE', `Adapter target ${target} is claimed by both ${targets.get(target)} and ${entry.id}`);
      targets.set(target, entry.id);
    }
    if (entry.labelGroup) {
      invariant(!labelGroups.has(entry.labelGroup), 'SOURCE_OBJECTS_LABEL_POSITION_INVALID', `Label group ${entry.labelGroup} is measured by both ${labelGroups.get(entry.labelGroup)} and ${entry.id}`);
      labelGroups.set(entry.labelGroup, entry.id);
    }
  }
  const operating = objects.filter((entry) => entry.ssotRef?.path === OPERATING_METRIC_SSOT_PATH);
  invariant(
    classification.signals.includes(OPERATING_METRIC_SIGNAL) === operating.length > 0,
    'SOURCE_OBJECTS_OPERATING_SIGNAL_MISMATCH',
    'Supplemental operating metric entries must match the full-Source Type Gate signal'
  );
  const valueNodeIds = new Set(objects.filter((entry) => entry.node).map((entry) => entry.node));
  invariant(adapter === 'income-statement' || input.shortNodes == null, 'SOURCE_OBJECTS_SHORT_NODES_INVALID', 'shortNodes apply only to Income Statement Sankey Sources');
  const shortNodes = normalizeShortNodes(input.shortNodes, valueNodeIds);
  const amounts = objects.filter((entry) => entry.class === 'value' && entry.ssotRef?.path !== OPERATING_METRIC_SSOT_PATH && Number(entry.value) !== 0);

  const value = {
    schemaVersion: 1,
    protocol: SOURCE_OBJECTS_PROTOCOL,
    kind: 'source-objects',
    datasetKey: context.datasetKey,
    adapter,
    classificationDigest: classification.classificationDigest,
    source,
    objects,
    shortNodes,
    summary: {
      objects: objects.length,
      classes: Object.fromEntries(SOURCE_OBJECT_CLASSES.map((name) => [name, objects.filter((entry) => entry.class === name).length])),
      otherIds: objects.filter((entry) => [entry.id, entry.label, entry.literal].some((text) => text && OTHER_LABEL_RE.test(text))).map((entry) => entry.id),
      valueNodeIds: [...valueNodeIds].sort(),
      nonNodeMetricIds: objects.filter((entry) => entry.nonNodeMetric).map((entry) => entry.nonNodeMetric).sort(),
      shortNodeIds: shortNodes.map((item) => item.node),
      labelGroups: [...labelGroups.keys()].sort(),
      correctedIds: objects.filter((entry) => entry.authoritativeCorrection).map((entry) => entry.id),
      smallestNonZero: amounts
        .sort((left, right) => normalizedAmountMagnitude(left) - normalizedAmountMagnitude(right) || left.id.localeCompare(right.id))
        .slice(0, 3)
        .map(({ id, literal, value: amount, unit }) => ({ id, literal, value: amount, unit })),
    },
  };
  const reconciliation = context.reconcile === false ? null : reconcileSourceObjects(value, context);
  const result = { ...value, reconciliation };
  return deepFreeze({ ...result, sourceObjectsDigest: digestCanonical(result) });
}

export function assertSourceObjects(sourceObjects) {
  invariant(
    sourceObjects?.protocol === SOURCE_OBJECTS_PROTOCOL && sourceObjects.schemaVersion === 1,
    'SOURCE_OBJECTS_PROTOCOL_INVALID',
    `Expected ${SOURCE_OBJECTS_PROTOCOL}`
  );
  const { sourceObjectsDigest, ...value } = sourceObjects;
  invariant(sourceObjectsDigest === digestCanonical(value), 'SOURCE_OBJECTS_DIGEST_MISMATCH', 'Source objects digest does not match their content');
  return sourceObjects;
}

// ---- Reconciliation against the loaded SSOT and Adapter ----

function finiteValue(value) {
  return typeof value === 'number' && Number.isFinite(value);
}

function itemValue(items, id) {
  const queue = Array.isArray(items) ? [...items] : [];
  while (queue.length > 0) {
    const item = queue.shift();
    if (!item || typeof item !== 'object') continue;
    if (item.id === id) return finiteValue(item.value) ? item.value : undefined;
    if (Array.isArray(item.children)) queue.push(...item.children);
  }
  return undefined;
}

function revenueBreakdownValue(breakdowns, id) {
  const list = Array.isArray(breakdowns) ? breakdowns : [];
  const matchingBreakdown = list.find((breakdown) => breakdown?.id === id);
  if (matchingBreakdown) return matchingBreakdown.total;
  return itemValue(list.flatMap((breakdown) => breakdown?.items || []), id);
}

function convertAmount(entry, targetUnit) {
  const sourceMultiplier = UNIT_MULTIPLIERS[entry.unit];
  const targetMultiplier = UNIT_MULTIPLIERS[targetUnit];
  if (!sourceMultiplier || !targetMultiplier) {
    throw sourceObjectsError('SOURCE_OBJECTS_UNIT_INVALID', `${entry.id} cannot reconcile ${entry.unit} against SSOT unit ${targetUnit}`);
  }
  return Number(entry.value) * sourceMultiplier / targetMultiplier;
}

function equalAmount(actual, expected) {
  const tolerance = Math.max(1e-12, Math.abs(expected) * 1e-9);
  return finiteValue(actual) && Math.abs(actual - expected) <= tolerance;
}

function displayDecimals(raw) {
  return Number.isInteger(raw) && raw >= 0 ? raw : 1;
}

function roundsNonZeroToZero(value, decimals) {
  return value !== 0 && Number(Math.abs(value).toFixed(displayDecimals(decimals))) === 0;
}

function parseDisplayAmount(text, implicitUnit, { parenthesizedNegative = true } = {}) {
  const display = String(text || '');
  const parenthesized = display.match(/\(\s*[^\d-]*(-?(?:\d+(?:,\d{3})*(?:\.\d+)?|\.\d+))\s*([KMBT])?\s*\)/i);
  if (parenthesized) {
    const unit = (parenthesized[2] || implicitUnit || '').toUpperCase();
    if (!UNIT_MULTIPLIERS[unit]) return null;
    const magnitude = Math.abs(Number(parenthesized[1].replaceAll(',', ''))) * UNIT_MULTIPLIERS[unit] / UNIT_MULTIPLIERS[implicitUnit];
    return parenthesizedNegative ? -magnitude : magnitude;
  }
  const match = display.match(/(-?(?:\d+(?:,\d{3})*(?:\.\d+)?|\.\d+))\s*([KMBT])?/i);
  if (!match) return null;
  const unit = (match[2] || implicitUnit || '').toUpperCase();
  if (!UNIT_MULTIPLIERS[unit]) return null;
  return Number(match[1].replaceAll(',', '')) * UNIT_MULTIPLIERS[unit] / UNIT_MULTIPLIERS[implicitUnit];
}

function assertRecordDisplayPrecision(record, expected, id) {
  if (!roundsNonZeroToZero(expected, record.decimals)) return;
  throw sourceObjectsError(
    'SOURCE_OBJECTS_DISPLAY_PRECISION_LOSS',
    `${id} is non-zero but ${record.decimals ?? 1} ${record.unit}-unit decimal place(s) render it as zero; recover the precise amount and increase SSOT display decimals`
  );
}

function assertNodeDisplayPrecision(dataset, node, expected, unit, id) {
  if (node.valueText != null) {
    const displayed = parseDisplayAmount(node.valueText, unit, { parenthesizedNegative: expected < 0 });
    if (!equalAmount(displayed, expected)) {
      throw sourceObjectsError(
        'SOURCE_OBJECTS_ADAPTER_DISPLAY_MISMATCH',
        `${id} Adapter node ${node.id} valueText does not preserve the reconciled non-zero amount`
      );
    }
    return;
  }
  if (!roundsNonZeroToZero(expected, dataset.meta?.decimals)) return;
  throw sourceObjectsError(
    'SOURCE_OBJECTS_DISPLAY_PRECISION_LOSS',
    `${id} Adapter node ${node.id} is non-zero but its display precision renders it as zero; increase Adapter meta.decimals or use an exact non-zero valueText`
  );
}

function incomePathValue(record, ref) {
  if (ref.path === 'revenue.total') return ref.id === 'revenue' ? record.revenue?.total : undefined;
  if (ref.path === 'costs.operatingExpenses.total') return ref.id === 'operating_expenses' ? record.costs?.operatingExpenses?.total : undefined;
  const totals = {
    'operatingOtherIncome.total': ['operating_other_income', record.operatingOtherIncome?.total],
    'operatingOtherExpenses.total': ['operating_other_expenses', record.operatingOtherExpenses?.total],
    'otherIncome.total': ['other_income', record.otherIncome?.total],
    'otherExpenses.total': ['other_expenses', record.otherExpenses?.total],
  }[ref.path];
  if (totals) return ref.id === totals[0] ? totals[1] : undefined;
  const direct = {
    'costs.costOfRevenue': record.costs?.costOfRevenue,
    'costs.tax': record.costs?.tax,
    'profit.gross': record.profit?.gross,
    'profit.operating': record.profit?.operating,
    'profit.net': record.profit?.net,
    'revenue.paymentNetwork.gross': record.revenue?.paymentNetwork?.gross,
    'revenue.paymentNetwork.rebates': record.revenue?.paymentNetwork?.rebates,
  }[ref.path];
  if (direct) return direct.id === ref.id ? direct.value : undefined;
  if (ref.path === 'revenue.breakdowns') return revenueBreakdownValue(record.revenue?.breakdowns, ref.id);
  const items = {
    'revenue.items': record.revenue?.items,
    'revenue.paymentNetwork.grossItems': record.revenue?.paymentNetwork?.grossItems,
    'costs.costOfRevenue.items': record.costs?.costOfRevenue?.items,
    'costs.operatingExpenses.items': record.costs?.operatingExpenses?.items,
    'operatingOtherIncome.items': record.operatingOtherIncome?.items,
    'operatingOtherExpenses.items': record.operatingOtherExpenses?.items,
    'otherIncome.items': record.otherIncome?.items,
    'otherExpenses.items': record.otherExpenses?.items,
    'profit.gross.items': record.profit?.gross?.items,
    'profit.operating.items': record.profit?.operating?.items,
  }[ref.path];
  return itemValue(items, ref.id);
}

function reconcileIncomeStatement(sourceObjects, values, loaded) {
  // Data-only workflows have no chart runtime; load trace-domain only here.
  const { normalizeSankeyMetricValue } = loaded.domain || loadClassicScripts(['src/trace-domain.js']).TraceDomain;
  const record = (loaded.records || []).find((item) => item.key === sourceObjects.datasetKey);
  const dataset = (loaded.datasets || []).find((item) => item.key === sourceObjects.datasetKey);
  if (!record || !dataset) {
    throw sourceObjectsError('SOURCE_OBJECTS_AUTHORED_RECORD_MISSING', `Cannot load Income Statement SSOT and View Adapter for ${sourceObjects.datasetKey}`);
  }
  const nodes = new Map((dataset.nodes || []).map((node) => [node.id, node]));
  const nonNodeMetrics = new Map((dataset.nonNodeMetrics || []).map((metric) => [metric.id, metric]));
  const operatingMetrics = assertOperatingMetricView(record, dataset);
  const operating = values.filter((entry) => entry.ssotRef.path === OPERATING_METRIC_SSOT_PATH);
  if (operatingMetrics.length !== operating.length) {
    throw sourceObjectsError('SOURCE_OBJECTS_OPERATING_MISSING', 'Every supplemental SSOT operating metric needs exactly one Source value entry');
  }
  for (const metric of operatingMetrics) {
    const matches = operating.filter((entry) => entry.ssotRef.id === metric.id);
    const entry = matches[0];
    if (matches.length !== 1 || !sameOperatingObservation(metric, entry) || metric.quote !== entry.quote || metric.label !== entry.label) {
      throw sourceObjectsError('SOURCE_OBJECTS_SSOT_VALUE_MISMATCH', `Supplemental operating metric ${metric.id} differs from its Source value entry`);
    }
  }
  for (const entry of values) {
    if (entry.ssotRef.path === OPERATING_METRIC_SSOT_PATH) continue;
    const expected = convertAmount(entry, record.unit);
    const actualSsot = incomePathValue(record, entry.ssotRef);
    const target = entry.node || entry.nonNodeMetric;
    const metric = entry.node ? nodes.get(target) : nonNodeMetrics.get(target);
    if (!metric) {
      throw sourceObjectsError(
        'SOURCE_OBJECTS_ADAPTER_TARGET_MISSING',
        `${entry.id} names ${entry.node ? 'node' : 'nonNodeMetric'} ${target}, which the View Adapter does not define in ${entry.node ? 'nodes[]' : 'nonNodeMetrics[]'}`
      );
    }
    const type = metric.type;
    if (!equalAmount(normalizeSankeyMetricValue(actualSsot, type), normalizeSankeyMetricValue(expected, type))) {
      throw sourceObjectsError('SOURCE_OBJECTS_SSOT_VALUE_MISMATCH', `${entry.id} Source amount ${entry.value}${entry.unit} does not match SSOT ${entry.ssotRef.path}/${entry.ssotRef.id}: ${actualSsot}`);
    }
    assertRecordDisplayPrecision(record, expected, entry.id);
    if (!equalAmount(normalizeSankeyMetricValue(metric.value, type), normalizeSankeyMetricValue(expected, type))) {
      throw sourceObjectsError('SOURCE_OBJECTS_ADAPTER_VALUE_MISMATCH', `${entry.id} Source amount ${entry.value}${entry.unit} does not match Adapter metric ${target}: ${metric.value}`);
    }
    if (entry.node) {
      assertNodeDisplayPrecision(dataset, metric, expected, record.unit, entry.id);
      if (expected === 0) {
        throw sourceObjectsError('SOURCE_OBJECTS_NODE_ZERO_VALUE', `${entry.id} maps to painted node ${target} but reconciles to zero`);
      }
    }
  }
  return { checked: values.length, unit: record.unit };
}

function reconcileRevenueMetric(sourceObjects, values, loaded) {
  const record = (loaded.revenueRecords || []).find((item) => item.key === sourceObjects.datasetKey);
  if (!record) throw sourceObjectsError('SOURCE_OBJECTS_AUTHORED_RECORD_MISSING', `Cannot load Revenue Metric SSOT for ${sourceObjects.datasetKey}`);
  const observationByDate = new Map((record.observations || []).map((item) => [item.date, item.value]));
  for (const entry of values) {
    const expected = convertAmount(entry, record.unit);
    const actual = observationByDate.get(entry.ssotRef.date);
    if (!equalAmount(actual, expected)) {
      throw sourceObjectsError('SOURCE_OBJECTS_SSOT_VALUE_MISMATCH', `${entry.id} Source amount ${entry.value}${entry.unit} does not match revenue observation ${entry.ssotRef.date}: ${actual}`);
    }
    assertRecordDisplayPrecision(record, expected, entry.id);
  }
  return { checked: values.length, unit: record.unit };
}

function reconcileMetricObservation(sourceObjects, values, loaded) {
  const record = (loaded.metricRecords || []).find((item) => item.key === sourceObjects.datasetKey);
  if (!record) throw sourceObjectsError('SOURCE_OBJECTS_AUTHORED_RECORD_MISSING', 'Metric observation record is missing');
  for (const entry of values) {
    const metric = record.metrics.find((item) => item.id === entry.ssotRef.id);
    if (!metric || metric.value !== entry.value || metric.unit !== entry.unit || metric.literal !== entry.literal) {
      throw sourceObjectsError('SOURCE_OBJECTS_SSOT_VALUE_MISMATCH', `${entry.id} differs from metric observation ${entry.ssotRef.id}`);
    }
  }
  return { checked: values.length };
}

/**
 * Every value entry must equal its SSOT field and, for Sankey financial
 * values, the Adapter node or non-node metric it names (with display precision
 * that keeps a non-zero amount non-zero). Returns the reconciliation summary.
 */
export function reconcileSourceObjects(sourceObjects, options = {}) {
  const values = (sourceObjects?.objects || []).filter((entry) => entry.class === 'value');
  if (values.length === 0) return { status: 'passed', checked: 0 };
  const loaded = options.loadedData || (options.loadBrowserData || loadBrowserData)();
  const result = sourceObjects.adapter === 'metric-observation'
    ? reconcileMetricObservation(sourceObjects, values, loaded)
    : sourceObjects.adapter === 'income-statement'
      ? reconcileIncomeStatement(sourceObjects, values, loaded)
      : reconcileRevenueMetric(sourceObjects, values, loaded);
  return { status: 'passed', ...result };
}
