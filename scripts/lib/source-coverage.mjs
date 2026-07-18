import { createHash } from 'node:crypto';
import { DATASET_ADAPTERS } from './dataset-adapters.mjs';
import { MIN_VISIBLE_FACE_PX } from './node-face-policy.mjs';
import { validateObjectInventory } from './object-inventory.mjs';
import { ZERO_PAINT_NODE_SLOT_FEATURE } from './source-face-observation.mjs';

export const SOURCE_CLASSIFICATION_PROTOCOL = 'source-classification/v1';
export const SOURCE_COVERAGE_PROTOCOL = 'source-coverage/v2';
export const SOURCE_CLASSIFICATION_REVIEW_METHOD = 'full-source-type-gate';
export const SOURCE_CLASSIFICATION_SIGNALS = Object.freeze([
  'income-statement-values',
  'sankey-flow-topology',
  'revenue-metric-definition',
  'time-series-observations',
]);
export const SOURCE_COVERAGE_SCAN_PASSES = Object.freeze([
  'geometry',
  'residual',
  'semantic-value',
]);
export const SOURCE_OBJECT_CLASSES = Object.freeze([
  'financial-value',
  'metric-observation',
  'structural-flow',
  'label-or-annotation',
  'asset-or-brand',
  'non-semantic-residual',
]);
export const SOURCE_RESIDUAL_KINDS = Object.freeze([
  'publisher-attribution',
  'creator-branding',
  'website-url',
  'social-badge',
  'decorative-residue',
]);
export const SOURCE_AMOUNT_UNITS = Object.freeze(['K', 'M', 'B', 'T']);
export const INCOME_STATEMENT_SSOT_PATHS = Object.freeze([
  'revenue.total',
  'revenue.items',
  'revenue.breakdowns',
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
  'profit.net',
]);
export const VISIBILITY_FLOOR_EXCEPTION_TYPE = 'source-visible-face-below-floor';
export const VISIBILITY_FLOOR_EXCEPTION_METHOD = 'native-scale-crop-and-pixel-scan';
export const PRECISION_RECOVERY_METHOD = 'authoritative-supplemental-source';
export const AUTHORITATIVE_CORRECTION_METHOD = 'authoritative-source-correction';
export const AUTHORITATIVE_CORRECTION_APPROVAL = 'user-directed-source-correction';
export const AUTHORITATIVE_CORRECTION_ISSUES = Object.freeze(['unit-typo', 'numeric-typo']);

const STABLE_ID_RE = /^[a-z0-9]+(?:[._:-][a-z0-9]+)*$/;
const DIGEST_RE = /^sha256:[a-f0-9]{64}$/;
const DECIMAL_RE = /^-?(?:0|[1-9]\d*)(?:\.\d+)?$/;
const OTHER_LABEL_RE = /(?:^|\b)(?:all\s+other|other(?:s)?)(?:\b|$)/i;
const SIGNAL_SET = new Set(SOURCE_CLASSIFICATION_SIGNALS);
const CLASS_SET = new Set(SOURCE_OBJECT_CLASSES);
const RESIDUAL_SET = new Set(SOURCE_RESIDUAL_KINDS);
const AMOUNT_UNIT_SET = new Set(SOURCE_AMOUNT_UNITS);
const INCOME_SSOT_PATH_SET = new Set(INCOME_STATEMENT_SSOT_PATHS);
const AUTHORITATIVE_CORRECTION_ISSUE_SET = new Set(AUTHORITATIVE_CORRECTION_ISSUES);
const UNIT_MULTIPLIERS = Object.freeze({ K: 1e3, M: 1e6, B: 1e9, T: 1e12 });

const ADAPTER_SIGNATURES = Object.freeze({
  'income-statement': Object.freeze({
    required: Object.freeze(['income-statement-values', 'sankey-flow-topology']),
    forbidden: Object.freeze(['revenue-metric-definition', 'time-series-observations']),
  }),
  'revenue-metric': Object.freeze({
    required: Object.freeze(['revenue-metric-definition', 'time-series-observations']),
    forbidden: Object.freeze(['income-statement-values', 'sankey-flow-topology']),
  }),
});

function invariant(condition, code, message) {
  if (condition) return;
  const error = new Error(message);
  error.code = code;
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

function digestCanonical(value) {
  return `sha256:${createHash('sha256').update(JSON.stringify(canonicalValue(value))).digest('hex')}`;
}

function deepFreeze(value) {
  if (!value || typeof value !== 'object' || Object.isFrozen(value)) return value;
  for (const child of Object.values(value)) deepFreeze(child);
  return Object.freeze(value);
}

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

function normalizeBBox(raw, label) {
  invariant(
    Array.isArray(raw) && raw.length === 4 && raw.every(Number.isInteger),
    'SOURCE_COVERAGE_BBOX_INVALID',
    `${label} needs an integer bbox [x, y, width, height]`
  );
  const [x, y, width, height] = raw;
  invariant(
    x >= 0 && y >= 0 && width > 0 && height > 0,
    'SOURCE_COVERAGE_BBOX_INVALID',
    `${label} bbox must have a non-negative origin and positive size`
  );
  return [x, y, width, height];
}

function normalizeSource(source, label = 'Source') {
  invariant(source && typeof source === 'object', 'SOURCE_COVERAGE_SOURCE_REQUIRED', `${label} identity is required`);
  invariant(typeof source.locator === 'string' && source.locator, 'SOURCE_COVERAGE_SOURCE_INVALID', `${label} needs a locator`);
  invariant(DIGEST_RE.test(String(source.digest || '')), 'SOURCE_COVERAGE_SOURCE_INVALID', `${label} needs an immutable digest`);
  invariant(Number.isInteger(source.width) && source.width > 0, 'SOURCE_COVERAGE_SOURCE_INVALID', `${label} needs a positive integer width`);
  invariant(Number.isInteger(source.height) && source.height > 0, 'SOURCE_COVERAGE_SOURCE_INVALID', `${label} needs a positive integer height`);
  return {
    locator: source.locator,
    digest: source.digest,
    width: source.width,
    height: source.height,
  };
}

function assertBBoxWithinSource(bbox, source, label) {
  invariant(
    bbox[0] + bbox[2] <= source.width && bbox[1] + bbox[3] <= source.height,
    'SOURCE_COVERAGE_BBOX_OUT_OF_BOUNDS',
    `${label} bbox exceeds the Build Source dimensions`
  );
}

export function createSourceClassification(input) {
  invariant(input && typeof input === 'object', 'SOURCE_CLASSIFICATION_REQUIRED', 'Source classification is required before intake');
  invariant(
    typeof input.datasetKey === 'string' && STABLE_ID_RE.test(input.datasetKey),
    'SOURCE_CLASSIFICATION_KEY_INVALID',
    'Source classification needs a stable lowercase datasetKey'
  );
  const derived = classifySourceSignals(input.signals, input.adapter);
  const source = normalizeSource(input.source, 'Source classification');
  const fullImageBBox = normalizeBBox(input.fullImageBBox, 'Source classification fullImageBBox');
  invariant(
    JSON.stringify(fullImageBBox) === JSON.stringify([0, 0, source.width, source.height]),
    'SOURCE_CLASSIFICATION_SCOPE_INVALID',
    'Source classification must bind the complete native Source image'
  );
  invariant(
    input.reviewMethod === SOURCE_CLASSIFICATION_REVIEW_METHOD,
    'SOURCE_CLASSIFICATION_METHOD_INVALID',
    `Source classification must use reviewMethod ${SOURCE_CLASSIFICATION_REVIEW_METHOD}`
  );
  const value = {
    schemaVersion: 1,
    protocol: SOURCE_CLASSIFICATION_PROTOCOL,
    kind: 'source-classification',
    datasetKey: input.datasetKey,
    adapter: derived.adapter,
    status: 'confirmed',
    reviewMethod: input.reviewMethod,
    source,
    fullImageBBox,
    signals: derived.signals,
  };
  const classification = { ...value, classificationDigest: digestCanonical(value) };
  if (input.classificationDigest != null) {
    invariant(input.classificationDigest === classification.classificationDigest, 'SOURCE_CLASSIFICATION_DIGEST_MISMATCH', 'Source classification digest does not match its content');
  }
  return deepFreeze(classification);
}

function mappingRoles(objects) {
  return new Set(objects.flatMap((object) => (object.mapping || []).map((mapping) => mapping.role)));
}

function nodeTargets(objects) {
  return objects.flatMap((object) => (object.mapping || [])
    .filter((mapping) => mapping.role === 'render' && /(^|[./:])nodes?[./:]/i.test(mapping.target))
    .map((mapping) => String(mapping.target).split(/[.:/]/).filter(Boolean).at(-1))
    .filter(Boolean));
}

function metricTargets(objects) {
  return objects.flatMap((object) => (object.mapping || [])
    .filter((mapping) =>
      mapping.role === 'render' &&
      /(^|[./:])(?:nodes?|nonNodeMetrics)[./:]/i.test(mapping.target)
    )
    .map((mapping) => String(mapping.target).split(/[.:/]/).filter(Boolean).at(-1))
    .filter(Boolean));
}

function nodeObjects(objects) {
  return objects.filter((object) => (object.mapping || []).some((mapping) =>
    mapping.role === 'render' && /(^|[./:])nodes?[./:]/i.test(mapping.target)
  ));
}

function requiredRolesFor(raw, adapter) {
  if (raw.sourceClass === 'financial-value') {
    invariant(adapter === 'income-statement', 'SOURCE_COVERAGE_CLASS_ADAPTER_MISMATCH', `${raw.sourceId} financial-value requires the Income Statement Adapter`);
    return ['data', 'render'];
  }
  if (raw.sourceClass === 'metric-observation') {
    invariant(adapter === 'revenue-metric', 'SOURCE_COVERAGE_CLASS_ADAPTER_MISMATCH', `${raw.sourceId} metric-observation requires the Revenue Metric Adapter`);
    return ['data'];
  }
  if (raw.sourceClass === 'structural-flow') {
    invariant(adapter === 'income-statement', 'SOURCE_COVERAGE_CLASS_ADAPTER_MISMATCH', `${raw.sourceId} structural-flow requires the Income Statement Adapter`);
    return ['render'];
  }
  if (raw.sourceClass === 'label-or-annotation') return ['render'];
  if (raw.sourceClass === 'asset-or-brand') {
    invariant(['asset', 'render'].includes(raw.mappingRole), 'SOURCE_COVERAGE_ASSET_ROLE_REQUIRED', `${raw.sourceId} asset-or-brand needs mappingRole asset or render`);
    return [raw.mappingRole];
  }
  return [];
}

function parseUnitAmountLiteral(literal) {
  const parenthesized = String(literal || '').match(/^\s*\(\s*\$?\s*(\d+(?:,\d{3})*(?:\.\d+)?|\.\d+)\s*([KMBT])\s*\)\s*$/i);
  if (parenthesized) {
    return {
      // Income-statement costs are stored as positive flow magnitudes; the
      // parentheses are a display convention applied by the renderer.
      value: Number(parenthesized[1].replaceAll(',', '')),
      unit: parenthesized[2].toUpperCase(),
    };
  }
  const match = String(literal || '').match(/(-?(?:\d+(?:,\d{3})*(?:\.\d+)?|\.\d+))\s*([KMBT])\b/i);
  if (!match) return null;
  return {
    value: Number(match[1].replaceAll(',', '')),
    unit: match[2].toUpperCase(),
  };
}

function normalizeAmount(raw, sourceId) {
  invariant(raw && typeof raw === 'object' && !Array.isArray(raw), 'SOURCE_COVERAGE_AMOUNT_REQUIRED', `${sourceId} needs a structured amount`);
  const literal = String(raw.literal ?? '').trim();
  const value = String(raw.value ?? '').trim();
  const resolution = String(raw.resolution ?? '').trim();
  invariant(literal, 'SOURCE_COVERAGE_AMOUNT_REQUIRED', `${sourceId} amount needs the literal Source display text`);
  invariant(DECIMAL_RE.test(value) && Number.isFinite(Number(value)), 'SOURCE_COVERAGE_AMOUNT_REQUIRED', `${sourceId} amount.value must be a finite exact decimal string`);
  invariant(AMOUNT_UNIT_SET.has(raw.unit), 'SOURCE_COVERAGE_AMOUNT_REQUIRED', `${sourceId} amount.unit must be one of ${SOURCE_AMOUNT_UNITS.join(', ')}`);
  invariant(DECIMAL_RE.test(resolution) && Number.isFinite(Number(resolution)) && Number(resolution) > 0, 'SOURCE_COVERAGE_AMOUNT_REQUIRED', `${sourceId} amount.resolution must be a finite positive decimal string in the same unit`);
  const literalNumbers = literal.match(/-?(?:\d+(?:,\d{3})*(?:\.\d+)?|\.\d+)/g) || [];
  const literalAmount = parseUnitAmountLiteral(literal);
  const parentheticalLiteral = /^\s*\(/.test(literal) && /\)\s*$/.test(literal);
  const displayedMagnitude = literalAmount
    ? (parentheticalLiteral && Number(value) < 0 ? -Math.abs(literalAmount.value) : literalAmount.value)
    : literalNumbers
    .map((candidate) => Number(candidate.replaceAll(',', '')))
    .find((candidate) => Number.isFinite(candidate));
  const authoredBaseValue = Number(value) * UNIT_MULTIPLIERS[raw.unit];
  const halfResolutionBaseValue = Number(resolution) * UNIT_MULTIPLIERS[raw.unit] / 2;
  const comparisonTolerance = Math.max(1e-6, Math.abs(authoredBaseValue) * 1e-9);
  const displayedBaseValue = Number.isFinite(displayedMagnitude)
    ? displayedMagnitude * UNIT_MULTIPLIERS[literalAmount?.unit || raw.unit]
    : null;
  const literalWithinResolution = displayedBaseValue == null ||
    Math.abs(authoredBaseValue - displayedBaseValue) <= halfResolutionBaseValue + comparisonTolerance;
  let authoritativeCorrection = null;
  if (raw.authoritativeCorrection != null) {
    invariant(
      raw.authoritativeCorrection && typeof raw.authoritativeCorrection === 'object' && !Array.isArray(raw.authoritativeCorrection),
      'SOURCE_COVERAGE_AUTHORITATIVE_CORRECTION_INVALID',
      `${sourceId} authoritativeCorrection must be an object`
    );
    invariant(
      raw.authoritativeCorrection.method === AUTHORITATIVE_CORRECTION_METHOD,
      'SOURCE_COVERAGE_AUTHORITATIVE_CORRECTION_INVALID',
      `${sourceId} authoritativeCorrection must use ${AUTHORITATIVE_CORRECTION_METHOD}`
    );
    invariant(
      AUTHORITATIVE_CORRECTION_ISSUE_SET.has(raw.authoritativeCorrection.issue),
      'SOURCE_COVERAGE_AUTHORITATIVE_CORRECTION_INVALID',
      `${sourceId} authoritativeCorrection.issue must be one of ${AUTHORITATIVE_CORRECTION_ISSUES.join(', ')}`
    );
    invariant(
      raw.authoritativeCorrection.approval === AUTHORITATIVE_CORRECTION_APPROVAL,
      'SOURCE_COVERAGE_AUTHORITATIVE_CORRECTION_INVALID',
      `${sourceId} authoritativeCorrection must bind explicit ${AUTHORITATIVE_CORRECTION_APPROVAL} approval`
    );
    invariant(
      typeof raw.authoritativeCorrection.locator === 'string' && raw.authoritativeCorrection.locator.trim(),
      'SOURCE_COVERAGE_AUTHORITATIVE_CORRECTION_INVALID',
      `${sourceId} authoritativeCorrection needs an authoritative URL or local evidence locator`
    );
    invariant(
      typeof raw.authoritativeCorrection.authoritativeLiteral === 'string' &&
        raw.authoritativeCorrection.authoritativeLiteral.trim(),
      'SOURCE_COVERAGE_AUTHORITATIVE_CORRECTION_INVALID',
      `${sourceId} authoritativeCorrection needs an authoritativeLiteral`
    );
    invariant(
      typeof raw.authoritativeCorrection.correctedLiteral === 'string' &&
        raw.authoritativeCorrection.correctedLiteral.trim(),
      'SOURCE_COVERAGE_AUTHORITATIVE_CORRECTION_INVALID',
      `${sourceId} authoritativeCorrection needs a correctedLiteral`
    );
    invariant(
      typeof raw.authoritativeCorrection.reason === 'string' && raw.authoritativeCorrection.reason.trim(),
      'SOURCE_COVERAGE_AUTHORITATIVE_CORRECTION_INVALID',
      `${sourceId} authoritativeCorrection needs a reason`
    );
    const authoritativeLiteral = raw.authoritativeCorrection.authoritativeLiteral.trim();
    const correctedLiteral = raw.authoritativeCorrection.correctedLiteral.trim();
    const authoritativeAmount = parseUnitAmountLiteral(authoritativeLiteral);
    const correctedAmount = parseUnitAmountLiteral(correctedLiteral);
    invariant(
      literalAmount && authoritativeAmount && correctedAmount,
      'SOURCE_COVERAGE_AUTHORITATIVE_CORRECTION_INVALID',
      `${sourceId} original, authoritative, and corrected literals must each include a numeric K/M/B/T amount`
    );
    if (raw.authoritativeCorrection.issue === 'unit-typo') {
      invariant(
        literalAmount.unit !== raw.unit,
        'SOURCE_COVERAGE_AUTHORITATIVE_CORRECTION_ISSUE_MISMATCH',
        `${sourceId} unit-typo requires the primary Source unit to differ from amount.unit`
      );
    }
    if (raw.authoritativeCorrection.issue === 'numeric-typo') {
      invariant(
        literalAmount.unit === raw.unit,
        'SOURCE_COVERAGE_AUTHORITATIVE_CORRECTION_ISSUE_MISMATCH',
        `${sourceId} numeric-typo requires the primary Source unit to match amount.unit`
      );
    }
    const authoritativeBaseValue = authoritativeAmount.value * UNIT_MULTIPLIERS[authoritativeAmount.unit];
    const correctedBaseValue = correctedAmount.value * UNIT_MULTIPLIERS[correctedAmount.unit];
    invariant(
      !literalWithinResolution,
      'SOURCE_COVERAGE_AUTHORITATIVE_CORRECTION_UNNECESSARY',
      `${sourceId} may record authoritativeCorrection only when the primary Source literal conflicts with the authored amount`
    );
    invariant(
      displayedMagnitude !== 0,
      'SOURCE_COVERAGE_AUTHORITATIVE_CORRECTION_INVALID',
      `${sourceId} zero-looking Source literals must use precisionRecovery rather than authoritativeCorrection`
    );
    invariant(
      Math.abs(authoredBaseValue - authoritativeBaseValue) <= halfResolutionBaseValue + comparisonTolerance,
      'SOURCE_COVERAGE_AUTHORITATIVE_CORRECTION_MISMATCH',
      `${sourceId} authoritative literal does not support amount.value within the corrected rounding interval`
    );
    invariant(
      Math.abs(authoredBaseValue - correctedBaseValue) <= halfResolutionBaseValue + comparisonTolerance,
      'SOURCE_COVERAGE_AUTHORITATIVE_CORRECTION_MISMATCH',
      `${sourceId} corrected literal does not express amount.value within its resolution`
    );
    invariant(
      correctedAmount.unit === raw.unit,
      'SOURCE_COVERAGE_AUTHORITATIVE_CORRECTION_MISMATCH',
      `${sourceId} corrected literal unit must match amount.unit`
    );
    authoritativeCorrection = {
      method: raw.authoritativeCorrection.method,
      issue: raw.authoritativeCorrection.issue,
      approval: raw.authoritativeCorrection.approval,
      locator: raw.authoritativeCorrection.locator.trim(),
      authoritativeLiteral,
      correctedLiteral,
      reason: raw.authoritativeCorrection.reason.trim(),
    };
  }
  if (Number.isFinite(displayedMagnitude)) {
    invariant(
      literalWithinResolution || authoritativeCorrection,
      'SOURCE_COVERAGE_AMOUNT_RESOLUTION_MISMATCH',
      `${sourceId} amount.value falls outside the rounding interval expressed by its literal and resolution`
    );
  }
  const roundedToZero = displayedMagnitude === 0 && Number(value) !== 0;
  let precisionRecovery = null;
  if (raw.precisionRecovery != null) {
    invariant(
      raw.precisionRecovery && typeof raw.precisionRecovery === 'object' && !Array.isArray(raw.precisionRecovery),
      'SOURCE_COVERAGE_PRECISION_RECOVERY_INVALID',
      `${sourceId} precisionRecovery must be an object`
    );
    invariant(
      raw.precisionRecovery.method === PRECISION_RECOVERY_METHOD,
      'SOURCE_COVERAGE_PRECISION_RECOVERY_INVALID',
      `${sourceId} precisionRecovery must use ${PRECISION_RECOVERY_METHOD}`
    );
    invariant(
      typeof raw.precisionRecovery.locator === 'string' && raw.precisionRecovery.locator.trim(),
      'SOURCE_COVERAGE_PRECISION_RECOVERY_INVALID',
      `${sourceId} precisionRecovery needs an authoritative URL or local evidence locator`
    );
    invariant(
      typeof raw.precisionRecovery.literal === 'string' && raw.precisionRecovery.literal.trim(),
      'SOURCE_COVERAGE_PRECISION_RECOVERY_INVALID',
      `${sourceId} precisionRecovery needs the higher-precision literal`
    );
    precisionRecovery = {
      method: raw.precisionRecovery.method,
      locator: raw.precisionRecovery.locator.trim(),
      literal: raw.precisionRecovery.literal.trim(),
    };
    const recovered = parseUnitAmountLiteral(precisionRecovery.literal);
    invariant(
      recovered && Number.isFinite(recovered.value),
      'SOURCE_COVERAGE_PRECISION_RECOVERY_INVALID',
      `${sourceId} precisionRecovery.literal must include a numeric K/M/B/T amount`
    );
    const recoveredBaseValue = recovered.value * UNIT_MULTIPLIERS[recovered.unit];
    const authoredBaseValue = Number(value) * UNIT_MULTIPLIERS[raw.unit];
    invariant(
      Math.abs(recoveredBaseValue - authoredBaseValue) <= Math.max(1e-6, Math.abs(authoredBaseValue) * 1e-9),
      'SOURCE_COVERAGE_PRECISION_RECOVERY_MISMATCH',
      `${sourceId} recovered literal does not match amount.value after K/M/B/T normalization`
    );
  }
  invariant(
    !roundedToZero || precisionRecovery,
    'SOURCE_COVERAGE_PRECISION_RECOVERY_REQUIRED',
    `${sourceId} Source literal rounds to zero; recover a higher-precision value from an authoritative supplemental source instead of writing zero`
  );
  invariant(
    roundedToZero || precisionRecovery == null,
    'SOURCE_COVERAGE_PRECISION_RECOVERY_UNNECESSARY',
    `${sourceId} may record precisionRecovery only when the primary Source literal rounds a non-zero amount to zero`
  );
  invariant(
    !(precisionRecovery && authoritativeCorrection),
    'SOURCE_COVERAGE_AMOUNT_RECOVERY_CONFLICT',
    `${sourceId} cannot combine precisionRecovery with authoritativeCorrection`
  );
  return {
    literal,
    value,
    unit: raw.unit,
    resolution,
    ...(precisionRecovery ? { precisionRecovery } : {}),
    ...(authoritativeCorrection ? { authoritativeCorrection } : {}),
  };
}

function normalizedAmountValue(amount) {
  return Number(amount.value) * UNIT_MULTIPLIERS[amount.unit];
}

function normalizeSsotRef(raw, sourceId, adapter) {
  invariant(raw && typeof raw === 'object' && !Array.isArray(raw), 'SOURCE_COVERAGE_SSOT_REF_REQUIRED', `${sourceId} needs a typed ssotRef`);
  if (adapter === 'income-statement') {
    invariant(raw.family === 'income-statement', 'SOURCE_COVERAGE_SSOT_REF_INVALID', `${sourceId} ssotRef family must be income-statement`);
    invariant(INCOME_SSOT_PATH_SET.has(raw.path), 'SOURCE_COVERAGE_SSOT_REF_INVALID', `${sourceId} ssotRef.path is unsupported: ${raw.path}`);
    invariant(typeof raw.id === 'string' && STABLE_ID_RE.test(raw.id), 'SOURCE_COVERAGE_SSOT_REF_INVALID', `${sourceId} income-statement ssotRef needs a stable id`);
    return { family: raw.family, path: raw.path, id: raw.id };
  }
  invariant(raw.family === 'revenue-metric' && raw.path === 'observations', 'SOURCE_COVERAGE_SSOT_REF_INVALID', `${sourceId} ssotRef must target revenue-metric observations`);
  invariant(/^\d{4}-\d{2}-\d{2}$/.test(String(raw.date || '')), 'SOURCE_COVERAGE_SSOT_REF_INVALID', `${sourceId} revenue-metric ssotRef needs an observation date`);
  return { family: raw.family, path: raw.path, date: raw.date };
}

function normalizeFloorException(raw, context) {
  if (raw == null) return null;
  const { sourceId, source, face, objects } = context;
  invariant(raw && typeof raw === 'object' && !Array.isArray(raw), 'VISIBILITY_FLOOR_EXCEPTION_INVALID', `${sourceId} floorException must be an object`);
  invariant(face.observedBBox[3] < MIN_VISIBLE_FACE_PX, 'VISIBILITY_FLOOR_EXCEPTION_INVALID', `${sourceId} observed Source face is not below the shared ${MIN_VISIBLE_FACE_PX}px floor`);
  invariant(objects.some((object) => object.features.includes('visible-short-node')), 'VISIBILITY_FLOOR_EXCEPTION_INVALID', `${sourceId} floorException requires a visible-short-node inventory object`);
  invariant(raw.type === VISIBILITY_FLOOR_EXCEPTION_TYPE, 'VISIBILITY_FLOOR_EXCEPTION_INVALID', `${sourceId} floorException must use type ${VISIBILITY_FLOOR_EXCEPTION_TYPE}`);
  invariant(raw.inspectionMethod === VISIBILITY_FLOOR_EXCEPTION_METHOD, 'VISIBILITY_FLOOR_EXCEPTION_INVALID', `${sourceId} floorException must use ${VISIBILITY_FLOOR_EXCEPTION_METHOD}`);
  invariant(typeof raw.locator === 'string' && raw.locator.includes('#'), 'VISIBILITY_FLOOR_EXCEPTION_INVALID', `${sourceId} floorException needs a stable Source crop locator`);
  invariant(String(raw.locator).split('#', 1)[0] === source.locator, 'VISIBILITY_FLOOR_EXCEPTION_SOURCE_MISMATCH', `${sourceId} floorException points at another Source locator`);
  invariant(raw.digest === source.digest, 'VISIBILITY_FLOOR_EXCEPTION_SOURCE_MISMATCH', `${sourceId} floorException digest does not match the Build Source`);
  invariant(typeof raw.reason === 'string' && raw.reason.trim(), 'VISIBILITY_FLOOR_EXCEPTION_INVALID', `${sourceId} floorException needs a reason`);
  return {
    type: raw.type,
    inspectionMethod: raw.inspectionMethod,
    locator: raw.locator,
    digest: raw.digest,
    reason: raw.reason.trim(),
  };
}

function normalizeFace(raw, context) {
  const nodes = nodeObjects(context.objects);
  if (nodes.length === 0) {
    invariant(raw == null, 'SOURCE_COVERAGE_FACE_INVALID', `${context.sourceId} has no node mapping and cannot declare a face`);
    return null;
  }
  invariant(nodes.length === 1, 'SOURCE_COVERAGE_FACE_AMBIGUOUS', `${context.sourceId} must not combine several node faces in one Source observation`);
  invariant(raw && typeof raw === 'object' && !Array.isArray(raw), 'SOURCE_COVERAGE_FACE_REQUIRED', `${context.sourceId} semantic node needs an observed Source face`);
  invariant(
    raw.claim == null || raw.claim === 'visible',
    'SOURCE_COVERAGE_HIDDEN_FACE_UNSUPPORTED',
    `${context.sourceId} cannot claim an invisible semantic node; model non-node geometry as a flow or annotation`
  );
  const searchBBox = normalizeBBox(raw.searchBBox, `${context.sourceId} face.searchBBox`);
  assertBBoxWithinSource(searchBBox, context.source, `${context.sourceId} face.searchBBox`);
  const observedBBox = normalizeBBox(raw.observedBBox, `${context.sourceId} face.observedBBox`);
  assertBBoxWithinSource(observedBBox, context.source, `${context.sourceId} face.observedBBox`);
  const face = {
    searchBBox,
    observedBBox,
  };
  const floorException = normalizeFloorException(raw.floorException, { ...context, face });
  return { ...face, ...(floorException ? { floorException } : {}) };
}

function normalizeCoverageItem(raw, index, context) {
  invariant(raw && typeof raw === 'object', 'SOURCE_COVERAGE_ITEM_INVALID', `Source Coverage item ${index} must be an object`);
  invariant(typeof raw.sourceId === 'string' && raw.sourceId.startsWith('source:') && STABLE_ID_RE.test(raw.sourceId), 'SOURCE_COVERAGE_ITEM_ID_INVALID', `Source Coverage item ${index} needs an independent source:* id`);
  invariant(CLASS_SET.has(raw.sourceClass), 'SOURCE_COVERAGE_CLASS_INVALID', `${raw.sourceId} has unsupported sourceClass: ${raw.sourceClass}`);
  invariant(typeof raw.sourceLabel === 'string' && raw.sourceLabel.trim(), 'SOURCE_COVERAGE_LABEL_REQUIRED', `${raw.sourceId} needs a Source label or stable structural description`);
  invariant(Array.isArray(raw.inventoryObjectIds) && raw.inventoryObjectIds.length > 0, 'SOURCE_COVERAGE_MAPPING_REQUIRED', `${raw.sourceId} needs inventoryObjectIds`);
  const inventoryObjectIds = [...new Set(raw.inventoryObjectIds.map((id) => String(id || '').trim()))].sort();
  invariant(inventoryObjectIds.length === raw.inventoryObjectIds.length && inventoryObjectIds.every(Boolean), 'SOURCE_COVERAGE_MAPPING_INVALID', `${raw.sourceId} inventoryObjectIds must be unique and non-empty`);
  const objects = inventoryObjectIds.map((id) => {
    const object = context.objectById.get(id);
    invariant(object, 'SOURCE_COVERAGE_ORPHAN', `${raw.sourceId} references missing ObjectInventory object ${id}`);
    return object;
  });
  const contentBBox = normalizeBBox(raw.contentBBox, `${raw.sourceId} contentBBox`);
  assertBBoxWithinSource(contentBBox, context.source, `${raw.sourceId} contentBBox`);
  const requiredRoles = requiredRolesFor(raw, context.adapter);
  const roles = mappingRoles(objects);
  for (const role of requiredRoles) {
    invariant(roles.has(role), 'SOURCE_COVERAGE_MAPPING_MISSING', `${raw.sourceId} requires authored ${role} coverage`);
  }

  const residual = raw.sourceClass === 'non-semantic-residual';
  if (residual) {
    invariant(RESIDUAL_SET.has(raw.residualKind), 'SOURCE_COVERAGE_RESIDUAL_KIND_REQUIRED', `${raw.sourceId} needs a closed non-semantic residualKind`);
    invariant(objects.every((object) => object.disposition === 'skip'), 'SOURCE_COVERAGE_RESIDUAL_NOT_SKIPPED', `${raw.sourceId} residual may map only to skipped inventory objects`);
  } else {
    invariant(objects.every((object) => object.disposition !== 'skip'), 'SOURCE_COVERAGE_SEMANTIC_SKIPPED', `${raw.sourceId} is semantic and cannot map to a skipped inventory object`);
  }
  const otherLike = OTHER_LABEL_RE.test(raw.sourceLabel);
  invariant(
    !(otherLike && residual),
    'SOURCE_COVERAGE_OTHER_SKIPPED',
    `${raw.sourceId} is an Other/All Other semantic object; missing icons never make it a residual or skip target`
  );

  const valueBearing = ['financial-value', 'metric-observation'].includes(raw.sourceClass);
  const amount = valueBearing ? normalizeAmount(raw.amount, raw.sourceId) : null;
  invariant(valueBearing || raw.amount == null, 'SOURCE_COVERAGE_VALUE_CLASS_INVALID', `${raw.sourceId} amount requires a value-bearing sourceClass`);
  const ssotRef = valueBearing ? normalizeSsotRef(raw.ssotRef, raw.sourceId, context.adapter) : null;
  invariant(valueBearing || raw.ssotRef == null, 'SOURCE_COVERAGE_SSOT_REF_INVALID', `${raw.sourceId} ssotRef requires a value-bearing sourceClass`);
  const face = normalizeFace(raw.face, { sourceId: raw.sourceId, source: context.source, objects });
  // T22: an Other that carries an amount is a data metric — never an
  // annotation — and every semantic node has an observed painted face.
  invariant(
    !(otherLike && !residual && !valueBearing && parseUnitAmountLiteral(raw.sourceLabel)),
    'SOURCE_COVERAGE_OTHER_CLASS_INVALID',
    `${raw.sourceId} is an Other object displaying an amount; classify it as a value-bearing data metric, not an annotation`
  );
  const targets = [...new Set(nodeTargets(objects))].sort();
  const viewMetricTargets = [...new Set(metricTargets(objects))].sort();
  const zeroPaintSlotObjects = objects.filter((object) =>
    object.features.includes(ZERO_PAINT_NODE_SLOT_FEATURE)
  );
  invariant(
    raw.sourceClass !== 'financial-value' || viewMetricTargets.length === 1,
    'SOURCE_COVERAGE_FINANCIAL_VIEW_REQUIRED',
    `${raw.sourceId} financial-value must reconcile to exactly one Income Statement Adapter node or non-node metric`
  );
  invariant(
    raw.sourceClass !== 'financial-value' ||
      targets.length > 0 ||
      zeroPaintSlotObjects.length === 1,
    'SOURCE_COVERAGE_ZERO_PAINT_EVIDENCE_REQUIRED',
    `${raw.sourceId} maps a financial value to a non-node metric and needs exactly one ${ZERO_PAINT_NODE_SLOT_FEATURE} Source observation`
  );
  invariant(
    zeroPaintSlotObjects.length === 0 ||
      (raw.sourceClass === 'financial-value' && targets.length === 0),
    'SOURCE_COVERAGE_ZERO_PAINT_EVIDENCE_INVALID',
    `${raw.sourceId} may use ${ZERO_PAINT_NODE_SLOT_FEATURE} only for a financial value mapped to a non-node metric`
  );
  invariant(!face || targets.length === 1, 'SOURCE_COVERAGE_FACE_TARGET_INVALID', `${raw.sourceId} face observation must map to exactly one nodes.* render target`);
  return {
    sourceId: raw.sourceId,
    sourceClass: raw.sourceClass,
    sourceLabel: raw.sourceLabel.trim(),
    contentBBox,
    inventoryObjectIds,
    requiredRoles,
    ...(raw.mappingRole ? { mappingRole: raw.mappingRole } : {}),
    ...(raw.residualKind ? { residualKind: raw.residualKind } : {}),
    ...(amount ? { amount, ssotRef } : {}),
    ...(face ? { face } : {}),
    nodeTargets: targets,
    metricTargets: viewMetricTargets,
  };
}

export function createSourceCoverage(input, context = {}) {
  invariant(input && typeof input === 'object', 'SOURCE_COVERAGE_REQUIRED', 'Source Coverage is required before review preparation');
  const inventory = validateObjectInventory(context.inventory);
  const adapter = context.adapter;
  invariant(DATASET_ADAPTERS.includes(adapter), 'SOURCE_COVERAGE_ADAPTER_INVALID', `Unsupported Source Coverage Adapter: ${adapter}`);
  const classification = createSourceClassification(input.classification);
  invariant(classification.datasetKey === inventory.datasetKey, 'SOURCE_COVERAGE_CLASSIFICATION_MISMATCH', 'Source classification dataset key does not match ObjectInventory');
  invariant(classification.adapter === adapter, 'SOURCE_COVERAGE_CLASSIFICATION_MISMATCH', 'Source classification Adapter does not match the Build');
  const source = normalizeSource(input.source);
  invariant(
    source.digest === classification.source.digest && source.width === classification.source.width && source.height === classification.source.height,
    'SOURCE_COVERAGE_CLASSIFICATION_MISMATCH',
    'Source Coverage and pre-intake classification must bind the same Source identity'
  );
  const scanPasses = [...new Set((input.scanPasses || []).map((value) => String(value || '').trim()))].sort();
  invariant(
    JSON.stringify(scanPasses) === JSON.stringify([...SOURCE_COVERAGE_SCAN_PASSES].sort()),
    'SOURCE_COVERAGE_SCAN_INCOMPLETE',
    `Source Coverage requires all scan passes: ${SOURCE_COVERAGE_SCAN_PASSES.join(', ')}`
  );
  invariant(Array.isArray(input.items) && input.items.length > 0, 'SOURCE_COVERAGE_ITEMS_REQUIRED', 'Source Coverage needs at least one independent Source observation');
  const objectById = new Map(inventory.objects.map((object) => [object.id, object]));
  const items = input.items
    .map((item, index) => normalizeCoverageItem(item, index, { adapter, objectById, source }))
    .sort((left, right) => left.sourceId.localeCompare(right.sourceId));
  const sourceIds = new Set();
  const inventoryOwners = new Map();
  for (const item of items) {
    invariant(!sourceIds.has(item.sourceId), 'SOURCE_COVERAGE_ITEM_DUPLICATE', `Source Coverage item appears more than once: ${item.sourceId}`);
    sourceIds.add(item.sourceId);
    for (const objectId of item.inventoryObjectIds) {
      invariant(!inventoryOwners.has(objectId), 'SOURCE_COVERAGE_MAPPING_DUPLICATE', `ObjectInventory object ${objectId} is claimed by both ${inventoryOwners.get(objectId)} and ${item.sourceId}`);
      inventoryOwners.set(objectId, item.sourceId);
    }
  }
  const missing = inventory.objects.map((object) => object.id).filter((id) => !inventoryOwners.has(id));
  invariant(missing.length === 0, 'SOURCE_COVERAGE_INVENTORY_MISSING', `ObjectInventory objects missing Source Coverage: ${missing.join(', ')}`);

  const valueItems = items.filter((item) => item.amount);
  const smallestNonZero = valueItems
    .filter((item) => Math.abs(normalizedAmountValue(item.amount)) > 0)
    .sort((left, right) => Math.abs(normalizedAmountValue(left.amount)) - Math.abs(normalizedAmountValue(right.amount)) || left.sourceId.localeCompare(right.sourceId))
    .slice(0, 3)
    .map(({ sourceId, sourceLabel, amount, ssotRef }) => ({ sourceId, sourceLabel, amount, ssotRef }));
  const value = {
    schemaVersion: 2,
    protocol: SOURCE_COVERAGE_PROTOCOL,
    kind: 'source-coverage',
    datasetKey: inventory.datasetKey,
    adapter,
    classificationDigest: classification.classificationDigest,
    inventoryDigest: inventory.inventoryDigest,
    source,
    scanPasses,
    items,
    summary: {
      sourceObjects: items.length,
      inventoryObjects: inventory.objects.length,
      semantic: items.filter((item) => item.sourceClass !== 'non-semantic-residual').length,
      skippedResidual: items.filter((item) => item.sourceClass === 'non-semantic-residual').length,
      otherSourceIds: items.filter((item) => OTHER_LABEL_RE.test(item.sourceLabel)).map((item) => item.sourceId).sort(),
      correctedSourceIds: items.filter((item) => item.amount?.authoritativeCorrection).map((item) => item.sourceId).sort(),
      smallestNonZero,
      visibleNodeIds: items.filter((item) => item.face).flatMap((item) => item.nodeTargets).sort(),
      visibilityFloorExceptionNodeIds: items.filter((item) => item.face?.floorException).flatMap((item) => item.nodeTargets).sort(),
    },
  };
  const coverage = { ...value, coverageDigest: digestCanonical(value) };
  if (input.coverageDigest != null) {
    invariant(input.coverageDigest === coverage.coverageDigest, 'SOURCE_COVERAGE_DIGEST_MISMATCH', 'Source Coverage digest does not match its content');
  }
  return deepFreeze(coverage);
}
