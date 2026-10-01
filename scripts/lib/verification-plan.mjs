import { CHANGE_IMPACTS, DATASET_ADAPTERS } from './dataset-build.mjs';
import { assertSourceObjects, digestCanonical } from './source-objects.mjs';

// The VerificationPlan is a fixed checklist per Adapter. It binds the Build's
// source objects and Source digest, the required locales, and the ChangeImpact
// record; it no longer compiles per-object feature checks.
export const VERIFICATION_PLAN_PROTOCOL = 'verification-plan/v6';

export const CHECK_ENFORCEMENTS = Object.freeze([
  'hard-gate',
  'build-gate',
  'conditional-gate',
  'quantified-audit',
  'manual',
]);
export const CHECK_LOCALE_SCOPES = Object.freeze(['global', 'required-locales']);

// Gates every evidence run executes, then the audits that run only when the
// rendered DOM carries their attribute.
export const RENDER_GATE_RULE_IDS = Object.freeze(['G1', 'G2', 'G3', 'G3d', 'G4', 'G8', 'G12', 'B6', 'B15']);
export const ATTRIBUTE_AUDIT_RULE_IDS = Object.freeze(['A6', 'I12', 'T7', 'T6', 'A10']);
const LABEL_POSITION_RULE_ID = 'T18';

const CHECKS = Object.freeze({
  'data-consistency': Object.freeze({
    enforcement: 'build-gate',
    localeScope: 'global',
    evidenceKind: 'dataset-consistency',
    ruleIds: Object.freeze(['G11']),
  }),
  'render-fidelity': Object.freeze({
    enforcement: 'hard-gate',
    localeScope: 'required-locales',
    evidenceKind: 'fidelity-run',
    ruleIds: Object.freeze([...RENDER_GATE_RULE_IDS, ...ATTRIBUTE_AUDIT_RULE_IDS]),
  }),
  'human-review': Object.freeze({
    enforcement: 'manual',
    localeScope: 'global',
    evidenceKind: 'manual-decision',
    ruleIds: Object.freeze([]),
  }),
});

export const ADAPTER_CHECKLISTS = Object.freeze({
  'income-statement': Object.freeze(['data-consistency', 'render-fidelity', 'human-review']),
  'revenue-metric': Object.freeze(['data-consistency', 'human-review']),
  'metric-observation': Object.freeze(['data-consistency', 'human-review']),
});

const ADAPTER_SET = new Set(DATASET_ADAPTERS);
const IMPACT_SET = new Set(CHANGE_IMPACTS);

function invariant(condition, code, message) {
  if (condition) return;
  const error = new Error(message);
  error.code = code;
  throw error;
}

function deepFreeze(value) {
  if (!value || typeof value !== 'object' || Object.isFrozen(value)) return value;
  for (const child of Object.values(value)) deepFreeze(child);
  return Object.freeze(value);
}

function normalizeImpacts(impacts) {
  invariant(Array.isArray(impacts) && impacts.length > 0, 'CHANGE_IMPACT_REQUIRED', 'VerificationPlan needs at least one ChangeImpact');
  const normalized = [...new Set(impacts)].sort();
  for (const impact of normalized) {
    invariant(IMPACT_SET.has(impact), 'CHANGE_IMPACT_INVALID', `Unsupported ChangeImpact: ${impact}`);
  }
  return normalized;
}

function normalizeLocales(locales) {
  const values = locales == null ? ['en'] : locales;
  invariant(Array.isArray(values) && values.length > 0, 'LOCALES_REQUIRED', 'VerificationPlan needs at least one locale');
  const normalized = [...new Set(values.map((locale) => String(locale || '').trim()))].sort();
  invariant(normalized.every(Boolean), 'LOCALE_INVALID', 'VerificationPlan locales must be non-empty');
  return normalized;
}

function requiredCheck(id, sourceObjects) {
  const check = CHECKS[id];
  const ruleIds = id === 'render-fidelity' && sourceObjects.summary.labelGroups.length > 0
    ? [...check.ruleIds, LABEL_POSITION_RULE_ID]
    : [...check.ruleIds];
  return {
    id: `adapter:${id}`,
    enforcement: check.enforcement,
    localeScope: check.localeScope,
    evidenceKind: check.evidenceKind,
    ruleIds: ruleIds.sort((left, right) => left.localeCompare(right)),
  };
}

/**
 * Compile the fixed per-Adapter checklist for one authored snapshot. T18 joins
 * the render check only when the source objects declare a label position.
 */
export function compileVerificationPlan(input) {
  invariant(input && typeof input === 'object', 'PLAN_INPUT_INVALID', 'VerificationPlan input is required');
  invariant(ADAPTER_SET.has(input.adapter), 'ADAPTER_INVALID', `Unsupported Adapter: ${input.adapter}`);
  const sourceObjects = assertSourceObjects(input.sourceObjects);
  invariant(sourceObjects.adapter === input.adapter, 'SOURCE_OBJECTS_PLAN_MISMATCH', 'Source objects must belong to the planned Adapter');
  const value = {
    schemaVersion: 6,
    protocol: VERIFICATION_PLAN_PROTOCOL,
    datasetKey: sourceObjects.datasetKey,
    adapter: input.adapter,
    sourceObjectsDigest: sourceObjects.sourceObjectsDigest,
    sourceDigest: sourceObjects.source.digest,
    ...(input.checkpointProtocol ? { checkpointProtocol: input.checkpointProtocol, dependencyScopes: input.dependencyScopes } : {}),
    changeImpact: normalizeImpacts(input.changeImpact),
    requiredLocales: normalizeLocales(input.requiredLocales),
    requiredChecks: ADAPTER_CHECKLISTS[input.adapter].map((id) => requiredCheck(id, sourceObjects)),
  };
  return deepFreeze({ ...value, planDigest: digestCanonical(value) });
}
