import { CHANGE_IMPACTS, DATASET_ADAPTERS } from './dataset-build.mjs';
import { digestCanonical, validateObjectInventory } from './object-inventory.mjs';

export const VERIFICATION_PLAN_PROTOCOL = 'verification-plan/v3';

export const CHECK_ENFORCEMENTS = Object.freeze([
  'hard-gate',
  'build-gate',
  'conditional-gate',
  'quantified-audit',
  'manual',
]);
export const CHECK_LOCALE_SCOPES = Object.freeze(['global', 'required-locales']);

export const FEATURE_REQUIRED_CHECKS = Object.freeze({
  'centered-side-label': Object.freeze({ axis: 'render', enforcement: 'conditional-gate', localeScope: 'required-locales', evidenceKind: 'label-layout-audit', ruleIds: Object.freeze(['B3', 'T7']) }),
  text: Object.freeze({ axis: 'render', enforcement: 'conditional-gate', localeScope: 'required-locales', evidenceKind: 'text-layout-audit', ruleIds: Object.freeze(['B6', 'Z5']) }),
  'annotation-near-label': Object.freeze({ axis: 'render', enforcement: 'conditional-gate', localeScope: 'required-locales', evidenceKind: 'annotation-layout-audit', ruleIds: Object.freeze(['A6', 'B5']) }),
  'visible-short-node': Object.freeze({ axis: 'render', enforcement: 'manual', localeScope: 'required-locales', evidenceKind: 'manual-decision', ruleIds: Object.freeze(['T14']) }),
  'visible-interface': Object.freeze({ axis: 'render', enforcement: 'conditional-gate', localeScope: 'required-locales', evidenceKind: 'interface-audit', ruleIds: Object.freeze(['G12', 'L11']) }),
  'visible-node-face': Object.freeze({ axis: 'render', enforcement: 'conditional-gate', localeScope: 'required-locales', evidenceKind: 'node-paint-audit', ruleIds: Object.freeze(['B15', 'T13']) }),
  'hidden-anchor': Object.freeze([
    Object.freeze({ checkId: 'hidden-anchor', axis: 'render', enforcement: 'conditional-gate', localeScope: 'required-locales', evidenceKind: 'node-paint-audit', ruleIds: Object.freeze(['B7']) }),
    Object.freeze({ checkId: 'hidden-anchor-source-confirmation', axis: 'render', enforcement: 'manual', localeScope: 'global', evidenceKind: 'manual-decision', ruleIds: Object.freeze(['T12']) }),
  ]),
  'specified-label-weight': Object.freeze({ axis: 'render', enforcement: 'manual', localeScope: 'required-locales', evidenceKind: 'manual-decision', ruleIds: Object.freeze(['B14', 'T16']) }),
});

const CHANGE_IMPACT_REQUIREMENTS = Object.freeze({
  'new-dataset': { axis: 'full', checkId: 'full-adapter-verification', enforcement: 'build-gate', localeScope: 'required-locales', evidenceKind: 'full-review-profile', ruleIds: [] },
  geometry: { axis: 'render', checkId: 'geometry-regression', enforcement: 'hard-gate', localeScope: 'required-locales', evidenceKind: 'fidelity-run', ruleIds: [] },
  'render-engine': { axis: 'render', checkId: 'render-engine-regression', enforcement: 'hard-gate', localeScope: 'required-locales', evidenceKind: 'fidelity-run', ruleIds: [] },
  interaction: { axis: 'interaction', checkId: 'interaction-regression', enforcement: 'manual', localeScope: 'required-locales', evidenceKind: 'manual-decision', ruleIds: [] },
  'localized-layout': { axis: 'localization', checkId: 'localized-layout', enforcement: 'hard-gate', localeScope: 'required-locales', evidenceKind: 'fidelity-run', ruleIds: ['Z5'] },
  'display-text-only': { axis: 'localization', checkId: 'display-text', enforcement: 'quantified-audit', localeScope: 'required-locales', evidenceKind: 'text-layout-audit', ruleIds: ['B6', 'Z5'] },
  asset: { axis: 'asset', checkId: 'asset-integrity', enforcement: 'manual', localeScope: 'global', evidenceKind: 'manual-decision', ruleIds: [] },
  'financial-data-only': { axis: 'data', checkId: 'financial-consistency', enforcement: 'build-gate', localeScope: 'global', evidenceKind: 'dataset-consistency', ruleIds: ['G11'] },
  'company-metadata-only': { axis: 'metadata', checkId: 'company-metadata', enforcement: 'build-gate', localeScope: 'global', evidenceKind: 'dataset-consistency', ruleIds: [] },
  'docs-only': { axis: 'docs', checkId: 'documentation-contract', enforcement: 'manual', localeScope: 'global', evidenceKind: 'manual-decision', ruleIds: [] },
});

const ADAPTER_PROFILES = Object.freeze({
  'income-statement': Object.freeze({
    version: 'income-statement-plan/v2',
    supportedAxes: Object.freeze(['asset', 'data', 'docs', 'full', 'interaction', 'localization', 'metadata', 'render']),
    steps: Object.freeze([
      { id: 'data-consistency', axis: 'data', disposition: 'required', enforcement: 'build-gate', localeScope: 'global', evidenceKind: 'dataset-consistency', ruleIds: ['G11'] },
      { id: 'source-lineage', axis: 'data', disposition: 'required', enforcement: 'build-gate', localeScope: 'global', evidenceKind: 'verification-plan', ruleIds: [] },
      { id: 'render-fidelity', axis: 'render', disposition: 'required', enforcement: 'hard-gate', localeScope: 'required-locales', evidenceKind: 'fidelity-run', ruleIds: ['G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9', 'G10', 'G12'] },
      { id: 'reference-fidelity', axis: 'render', disposition: 'required', enforcement: 'hard-gate', localeScope: 'required-locales', evidenceKind: 'interface-audit', ruleIds: [] },
      { id: 'manual-visual-closure', axis: 'render', disposition: 'required', enforcement: 'manual', localeScope: 'required-locales', evidenceKind: 'manual-decision', ruleIds: [] },
      { id: 'future-regression-baseline', axis: 'baseline', disposition: 'post-review', enforcement: 'build-gate', localeScope: 'global', evidenceKind: 'baseline-stage', purpose: 'future-regression' },
      { id: 'final-seal', axis: 'full', disposition: 'post-review', enforcement: 'build-gate', localeScope: 'global', evidenceKind: 'seal', ruleIds: [] },
    ]),
  }),
  'revenue-metric': Object.freeze({
    version: 'revenue-metric-plan/v2',
    dataOnly: true,
    supportedAxes: Object.freeze(['data', 'docs', 'full', 'localization', 'metadata']),
    steps: Object.freeze([
      { id: 'data-consistency', axis: 'data', disposition: 'required', enforcement: 'build-gate', localeScope: 'global', evidenceKind: 'dataset-consistency', ruleIds: ['G11'] },
      { id: 'source-lineage', axis: 'data', disposition: 'required', enforcement: 'build-gate', localeScope: 'global', evidenceKind: 'verification-plan', ruleIds: [] },
      { id: 'render-fidelity', axis: 'render', disposition: 'not-applicable', reason: 'revenue-metric-data-only' },
      { id: 'reference-fidelity', axis: 'render', disposition: 'not-applicable', reason: 'revenue-metric-data-only' },
      { id: 'manual-visual-closure', axis: 'render', disposition: 'not-applicable', reason: 'revenue-metric-data-only' },
      { id: 'future-regression-baseline', axis: 'baseline', disposition: 'not-applicable', reason: 'revenue-metric-data-only' },
      { id: 'final-seal', axis: 'full', disposition: 'post-review', enforcement: 'build-gate', localeScope: 'global', evidenceKind: 'seal', ruleIds: [] },
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

function renderTargetsForFeature(object, feature) {
  const targets = object.mapping
    .filter((mapping) => mapping.role === 'render')
    .map((mapping) => mapping.target);
  let predicate = null;
  if (['visible-node-face', 'visible-short-node', 'hidden-anchor'].includes(feature)) {
    predicate = (target) => /(^|[./:])nodes?[./:]/i.test(target);
  } else if (['centered-side-label', 'text', 'specified-label-weight'].includes(feature)) {
    predicate = (target) => /label/i.test(target);
  } else if (feature === 'annotation-near-label') {
    predicate = (target) => /annotation/i.test(target);
  } else if (feature === 'visible-interface') {
    predicate = (target) => /link|interface/i.test(target);
  }
  if (!predicate) return targets;
  const selected = targets.filter(predicate);
  if (['visible-node-face', 'visible-short-node', 'hidden-anchor'].includes(feature)) {
    invariant(
      selected.length > 0,
      'FEATURE_MAPPING_TARGET_REQUIRED',
      `Object ${object.id} feature ${feature} needs an explicit nodes.* render mapping`
    );
  }
  return selected.length > 0 ? selected : targets;
}

export function requiredChecksForFeature(feature) {
  const configured = FEATURE_REQUIRED_CHECKS[feature];
  return Array.isArray(configured) ? configured : [configured];
}

function featureCheckId(feature, requirement) {
  return `feature:${requirement.checkId || feature}`;
}

function featureChecks(inventory) {
  const byFeature = new Map();
  for (const object of inventory.objects) {
    for (const feature of object.features) {
      const bucket = byFeature.get(feature) || { objectIds: [], evidenceTargets: [] };
      bucket.objectIds.push(object.id);
      bucket.evidenceTargets.push(...renderTargetsForFeature(object, feature));
      if (object.featureEvidence?.[feature]?.digest) {
        (bucket.featureEvidenceDigests ||= []).push(object.featureEvidence[feature].digest);
      }
      byFeature.set(feature, bucket);
    }
  }
  return [...byFeature]
    .sort(([left], [right]) => left.localeCompare(right))
    .flatMap(([feature, bucket]) => requiredChecksForFeature(feature).map((requirement) => ({
      id: featureCheckId(feature, requirement),
      source: 'object-feature',
      axis: requirement.axis,
      enforcement: requirement.enforcement,
      localeScope: requirement.localeScope,
      evidenceKind: requirement.evidenceKind,
      objectIds: bucket.objectIds.sort(),
      evidenceTargets: [...new Set(bucket.evidenceTargets)].sort(),
      featureEvidenceDigests: [...new Set(bucket.featureEvidenceDigests || [])].sort(),
      ruleIds: [...requirement.ruleIds],
    })));
}

function impactChecks(profile, impacts) {
  const required = [];
  const notApplicable = [];
  for (const impact of impacts) {
    const requirement = CHANGE_IMPACT_REQUIREMENTS[impact];
    const evidenceKind = profile.dataOnly && ['localized-layout', 'display-text-only'].includes(impact)
      ? 'dataset-consistency'
      : requirement.evidenceKind;
    const item = {
      id: `impact:${requirement.checkId}`,
      source: 'change-impact',
      axis: requirement.axis,
      enforcement: requirement.enforcement,
      localeScope: requirement.localeScope,
      evidenceKind,
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
      enforcement: step.enforcement,
      localeScope: step.localeScope,
      evidenceKind: step.evidenceKind,
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
    featureCheckIds: object.features.flatMap((feature) =>
      requiredChecksForFeature(feature).map((requirement) => featureCheckId(feature, requirement))
    ).sort(),
    ...(Object.keys(object.featureEvidence || {}).length > 0 ? { featureEvidence: object.featureEvidence } : {}),
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
  invariant(
    inventory.schemaVersion === 3 && inventory.protocol === 'object-inventory/v3',
    'INVENTORY_VERSION_STALE',
    'A new VerificationPlan requires ObjectInventory v3; historical v1/v2 inventories remain inspectable only'
  );
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
  const postReviewChecks = profile.steps
    .filter((step) => step.disposition === 'post-review')
    .map((step) => ({
      id: `adapter:${step.id}`,
      source: 'adapter',
      axis: step.axis,
      enforcement: step.enforcement,
      localeScope: step.localeScope,
      evidenceKind: step.evidenceKind,
      ruleIds: [...(step.ruleIds || [])].sort(),
      ...(step.purpose ? { purpose: step.purpose } : {}),
    }))
    .sort((left, right) => left.id.localeCompare(right.id));
  const coverage = objectCoverage(inventory);

  invariant(coverage.length === inventory.objects.length, 'PLAN_OBJECT_COVERAGE_INCOMPLETE', 'VerificationPlan must cover every inventoried object');
  for (const entry of coverage) {
    if (entry.disposition !== 'skip') {
      invariant(entry.mapping.length > 0, 'PLAN_OBJECT_MAPPING_INCOMPLETE', `VerificationPlan object ${entry.objectId} has no authored mapping`);
    }
  }

  const value = {
    schemaVersion: 3,
    protocol: VERIFICATION_PLAN_PROTOCOL,
    datasetKey: inventory.datasetKey,
    adapter: input.adapter,
    adapterVersion: profile.version,
    inventoryDigest: inventory.inventoryDigest,
    changeImpact: impacts,
    requiredLocales,
    requiredChecks,
    notApplicable,
    postReviewChecks,
    objectCoverage: coverage,
  };
  return deepFreeze({ ...value, planDigest: digestCanonical(value) });
}
