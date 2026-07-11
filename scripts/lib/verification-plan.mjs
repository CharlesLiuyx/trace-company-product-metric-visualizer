import { CHANGE_IMPACTS, DATASET_ADAPTERS } from './dataset-build.mjs';
import { digestCanonical, validateObjectInventory } from './object-inventory.mjs';

export const VERIFICATION_PLAN_PROTOCOL = 'verification-plan/v1';

export const FEATURE_REQUIRED_CHECKS = Object.freeze({
  'centered-side-label': Object.freeze({ axis: 'render', ruleIds: Object.freeze(['B3', 'T7']) }),
  text: Object.freeze({ axis: 'render', ruleIds: Object.freeze(['B6', 'Z5']) }),
  'annotation-near-label': Object.freeze({ axis: 'render', ruleIds: Object.freeze(['B5', 'A6']) }),
  'visible-short-node': Object.freeze({ axis: 'render', ruleIds: Object.freeze(['T13', 'T14']) }),
  'visible-interface': Object.freeze({ axis: 'render', ruleIds: Object.freeze(['G12', 'L11']) }),
});

const CHANGE_IMPACT_REQUIREMENTS = Object.freeze({
  'new-dataset': { axis: 'full', checkId: 'full-adapter-verification', ruleIds: [] },
  geometry: { axis: 'render', checkId: 'geometry-regression', ruleIds: [] },
  'render-engine': { axis: 'render', checkId: 'render-engine-regression', ruleIds: [] },
  interaction: { axis: 'interaction', checkId: 'interaction-regression', ruleIds: [] },
  'localized-layout': { axis: 'localization', checkId: 'localized-layout', ruleIds: ['Z5'] },
  'display-text-only': { axis: 'localization', checkId: 'display-text', ruleIds: ['B6', 'Z5'] },
  asset: { axis: 'asset', checkId: 'asset-integrity', ruleIds: [] },
  'financial-data-only': { axis: 'data', checkId: 'financial-consistency', ruleIds: ['G11'] },
  'company-metadata-only': { axis: 'metadata', checkId: 'company-metadata', ruleIds: [] },
  'docs-only': { axis: 'docs', checkId: 'documentation-contract', ruleIds: [] },
});

const ADAPTER_PROFILES = Object.freeze({
  'income-statement': Object.freeze({
    version: 'income-statement-plan/v1',
    supportedAxes: Object.freeze(['asset', 'data', 'docs', 'full', 'interaction', 'localization', 'metadata', 'render']),
    steps: Object.freeze([
      { id: 'data-consistency', axis: 'data', disposition: 'required', ruleIds: ['G11'] },
      { id: 'source-lineage', axis: 'data', disposition: 'required', ruleIds: [] },
      { id: 'render-fidelity', axis: 'render', disposition: 'required', ruleIds: ['G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9', 'G10', 'G11', 'G12'] },
      { id: 'reference-fidelity', axis: 'render', disposition: 'required', ruleIds: [] },
      { id: 'manual-visual-closure', axis: 'render', disposition: 'required', ruleIds: [] },
      { id: 'future-regression-baseline', axis: 'baseline', disposition: 'required', purpose: 'future-regression' },
      { id: 'final-seal', axis: 'full', disposition: 'required', ruleIds: [] },
    ]),
  }),
  'revenue-metric': Object.freeze({
    version: 'revenue-metric-plan/v1',
    supportedAxes: Object.freeze(['data', 'docs', 'full', 'localization', 'metadata']),
    steps: Object.freeze([
      { id: 'data-consistency', axis: 'data', disposition: 'required', ruleIds: ['G11'] },
      { id: 'source-lineage', axis: 'data', disposition: 'required', ruleIds: [] },
      { id: 'render-fidelity', axis: 'render', disposition: 'not-applicable', reason: 'revenue-metric-data-only' },
      { id: 'reference-fidelity', axis: 'render', disposition: 'not-applicable', reason: 'revenue-metric-data-only' },
      { id: 'manual-visual-closure', axis: 'render', disposition: 'not-applicable', reason: 'revenue-metric-data-only' },
      { id: 'future-regression-baseline', axis: 'baseline', disposition: 'not-applicable', reason: 'revenue-metric-data-only' },
      { id: 'final-seal', axis: 'full', disposition: 'required', ruleIds: [] },
    ]),
  }),
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

function featureChecks(inventory) {
  const byFeature = new Map();
  for (const object of inventory.objects) {
    for (const feature of object.features) {
      const bucket = byFeature.get(feature) || { objectIds: [], evidenceTargets: [] };
      bucket.objectIds.push(object.id);
      bucket.evidenceTargets.push(
        ...object.mapping.filter((mapping) => mapping.role === 'render').map((mapping) => mapping.target)
      );
      byFeature.set(feature, bucket);
    }
  }
  return [...byFeature]
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([feature, bucket]) => ({
      id: `feature:${feature}`,
      source: 'object-feature',
      axis: FEATURE_REQUIRED_CHECKS[feature].axis,
      objectIds: bucket.objectIds.sort(),
      evidenceTargets: [...new Set(bucket.evidenceTargets)].sort(),
      ruleIds: [...FEATURE_REQUIRED_CHECKS[feature].ruleIds],
    }));
}

function impactChecks(profile, impacts) {
  const required = [];
  const notApplicable = [];
  for (const impact of impacts) {
    const requirement = CHANGE_IMPACT_REQUIREMENTS[impact];
    const item = {
      id: `impact:${requirement.checkId}`,
      source: 'change-impact',
      axis: requirement.axis,
      triggeredBy: [impact],
      ruleIds: [...requirement.ruleIds].sort(),
    };
    if (profile.supportedAxes.includes(requirement.axis)) required.push(item);
    else notApplicable.push({ ...item, disposition: 'not-applicable', reason: 'adapter-has-no-such-surface' });
  }
  return { required, notApplicable };
}

function adapterChecks(profile) {
  return profile.steps
    .filter((step) => step.disposition === 'required')
    .map((step) => ({
      id: `adapter:${step.id}`,
      source: 'adapter',
      axis: step.axis,
      ruleIds: [...(step.ruleIds || [])].sort(),
      ...(step.purpose ? { purpose: step.purpose } : {}),
    }));
}

function objectCoverage(inventory) {
  return inventory.objects.map((object) => ({
    objectId: object.id,
    disposition: object.disposition,
    mapping: object.mapping.map((item) => `${item.role}:${item.target}`).sort(),
    ...(object.skipReason ? { skipReason: object.skipReason } : {}),
    featureCheckIds: object.features.map((feature) => `feature:${feature}`).sort(),
  }));
}

/**
 * Compile the Adapter-owned VerificationPlan from a complete ObjectInventory.
 * Callers cannot selectively omit feature checks or invent notApplicable axes.
 */
export function compileVerificationPlan(input) {
  invariant(input && typeof input === 'object', 'PLAN_INPUT_INVALID', 'VerificationPlan input is required');
  invariant(ADAPTER_SET.has(input.adapter), 'ADAPTER_INVALID', `Unsupported Adapter: ${input.adapter}`);
  const inventory = validateObjectInventory(input.inventory);
  const impacts = normalizeImpacts(input.changeImpact);
  const requiredLocales = normalizeLocales(input.requiredLocales);
  const profile = ADAPTER_PROFILES[input.adapter];

  if (input.adapter === 'revenue-metric') {
    const rendered = inventory.objects.filter((object) => object.disposition === 'render');
    invariant(rendered.length === 0, 'ADAPTER_INVENTORY_INVALID', `Revenue Metric inventory cannot render objects: ${rendered.map((object) => object.id).join(', ')}`);
  }

  const features = featureChecks(inventory);
  const impact = impactChecks(profile, impacts);
  const requiredChecks = [...adapterChecks(profile), ...impact.required, ...features]
    .sort((left, right) => left.id.localeCompare(right.id));
  const notApplicable = [
    ...profile.steps
      .filter((step) => step.disposition === 'not-applicable')
      .map((step) => ({ id: `adapter:${step.id}`, source: 'adapter', axis: step.axis, disposition: 'not-applicable', reason: step.reason })),
    ...impact.notApplicable,
  ].sort((left, right) => left.id.localeCompare(right.id));
  const coverage = objectCoverage(inventory);

  invariant(coverage.length === inventory.objects.length, 'PLAN_OBJECT_COVERAGE_INCOMPLETE', 'VerificationPlan must cover every inventoried object');
  for (const entry of coverage) {
    if (entry.disposition !== 'skip') {
      invariant(entry.mapping.length > 0, 'PLAN_OBJECT_MAPPING_INCOMPLETE', `VerificationPlan object ${entry.objectId} has no authored mapping`);
    }
  }

  const value = {
    schemaVersion: 1,
    protocol: VERIFICATION_PLAN_PROTOCOL,
    datasetKey: inventory.datasetKey,
    adapter: input.adapter,
    adapterVersion: profile.version,
    inventoryDigest: inventory.inventoryDigest,
    changeImpact: impacts,
    requiredLocales,
    requiredChecks,
    notApplicable,
    objectCoverage: coverage,
  };
  return deepFreeze({ ...value, planDigest: digestCanonical(value) });
}
