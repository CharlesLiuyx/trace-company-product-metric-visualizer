import { CHANGE_IMPACTS, DATASET_ADAPTERS } from './dataset-build.mjs';
import { digestCanonical, validateObjectInventory } from './object-inventory.mjs';
import { compileNodeFacePolicy } from './node-face-policy.mjs';

export const VERIFICATION_PLAN_PROTOCOL = 'verification-plan/v5';

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
  'paired-node-annotation': Object.freeze({ axis: 'render', enforcement: 'quantified-audit', localeScope: 'required-locales', evidenceKind: 'annotation-pairing-audit', ruleIds: Object.freeze(['I12']) }),
  'semantic-annotation': Object.freeze([
    Object.freeze({ checkId: 'semantic-annotation', axis: 'interaction', enforcement: 'conditional-gate', localeScope: 'required-locales', evidenceKind: 'annotation-semantics-audit', ruleIds: Object.freeze(['A10', 'B16']) }),
    Object.freeze({ checkId: 'semantic-annotation-source-classification', axis: 'render', enforcement: 'manual', localeScope: 'global', evidenceKind: 'manual-decision', ruleIds: Object.freeze(['T17']) }),
  ]),
  'visible-short-node': Object.freeze({ axis: 'render', enforcement: 'manual', localeScope: 'required-locales', evidenceKind: 'manual-decision', ruleIds: Object.freeze(['T14']) }),
  'visible-interface': Object.freeze({ axis: 'render', enforcement: 'conditional-gate', localeScope: 'required-locales', evidenceKind: 'interface-audit', ruleIds: Object.freeze(['G12', 'L11']) }),
  'visible-node-face': Object.freeze({ axis: 'render', enforcement: 'conditional-gate', localeScope: 'required-locales', evidenceKind: 'node-paint-audit', ruleIds: Object.freeze(['B15', 'T13', 'T21']) }),
  'specified-label-weight': Object.freeze({ axis: 'render', enforcement: 'manual', localeScope: 'required-locales', evidenceKind: 'manual-decision', ruleIds: Object.freeze(['B14', 'T16']) }),
  'measured-label-position': Object.freeze([
    Object.freeze({ checkId: 'measured-label-position', axis: 'render', enforcement: 'conditional-gate', localeScope: 'required-locales', evidenceKind: 'label-position-audit', ruleIds: Object.freeze(['T18']) }),
    Object.freeze({ checkId: 'label-measurement-provenance', axis: 'data', enforcement: 'build-gate', localeScope: 'global', evidenceKind: 'verification-plan', ruleIds: Object.freeze(['T19']) }),
  ]),
  'ambiguous-label-slot': Object.freeze({ axis: 'render', enforcement: 'manual', localeScope: 'global', evidenceKind: 'manual-decision', ruleIds: Object.freeze(['T20']) }),
  'zero-paint-node-slot': Object.freeze({ axis: 'data', enforcement: 'build-gate', localeScope: 'global', evidenceKind: 'source-coverage', ruleIds: Object.freeze(['T23']) }),
});

// T18/T19 coverage: a fixed-layout label group is any render mapping into
// layout.labels.* (icon placements excluded). Its owning object must declare
// measured-label-position so the reference measurement is persisted evidence,
// not scratch-paper preflight notes.
const FIXED_LABEL_TARGET_RE = /(?:^|[./:])labels[./:]/i;
const LABEL_ICON_TARGET_RE = /(?:^|[./:])icons?$/i;

function fixedLabelTargets(object) {
  return object.mapping
    .filter((mapping) => mapping.role === 'render')
    .map((mapping) => mapping.target)
    .filter((target) => FIXED_LABEL_TARGET_RE.test(target) && !LABEL_ICON_TARGET_RE.test(target));
}

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
    version: 'income-statement-plan/v4',
    supportedAxes: Object.freeze(['asset', 'data', 'docs', 'full', 'interaction', 'localization', 'metadata', 'render']),
    steps: Object.freeze([
      { id: 'data-consistency', axis: 'data', disposition: 'required', enforcement: 'build-gate', localeScope: 'global', evidenceKind: 'dataset-consistency', ruleIds: ['G11'] },
      { id: 'source-lineage', axis: 'data', disposition: 'required', enforcement: 'build-gate', localeScope: 'global', evidenceKind: 'verification-plan', ruleIds: [] },
      { id: 'source-coverage', axis: 'data', disposition: 'required', enforcement: 'build-gate', localeScope: 'global', evidenceKind: 'source-coverage', ruleIds: [] },
      { id: 'source-coverage-review', axis: 'data', disposition: 'required', enforcement: 'manual', localeScope: 'global', evidenceKind: 'manual-decision', ruleIds: [] },
      { id: 'render-fidelity', axis: 'render', disposition: 'required', enforcement: 'hard-gate', localeScope: 'required-locales', evidenceKind: 'fidelity-run', ruleIds: ['G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9', 'G10', 'G12'] },
      { id: 'reference-fidelity', axis: 'render', disposition: 'required', enforcement: 'hard-gate', localeScope: 'required-locales', evidenceKind: 'interface-audit', ruleIds: [] },
      { id: 'manual-visual-closure', axis: 'render', disposition: 'required', enforcement: 'manual', localeScope: 'required-locales', evidenceKind: 'manual-decision', ruleIds: [] },
      { id: 'future-regression-baseline', axis: 'baseline', disposition: 'post-review', enforcement: 'build-gate', localeScope: 'global', evidenceKind: 'baseline-stage', purpose: 'future-regression' },
      { id: 'final-seal', axis: 'full', disposition: 'post-review', enforcement: 'build-gate', localeScope: 'global', evidenceKind: 'seal', ruleIds: [] },
    ]),
  }),
  'revenue-metric': Object.freeze({
    version: 'revenue-metric-plan/v4',
    dataOnly: true,
    supportedAxes: Object.freeze(['data', 'docs', 'full', 'localization', 'metadata']),
    steps: Object.freeze([
      { id: 'data-consistency', axis: 'data', disposition: 'required', enforcement: 'build-gate', localeScope: 'global', evidenceKind: 'dataset-consistency', ruleIds: ['G11'] },
      { id: 'source-lineage', axis: 'data', disposition: 'required', enforcement: 'build-gate', localeScope: 'global', evidenceKind: 'verification-plan', ruleIds: [] },
      { id: 'source-coverage', axis: 'data', disposition: 'required', enforcement: 'build-gate', localeScope: 'global', evidenceKind: 'source-coverage', ruleIds: [] },
      { id: 'source-coverage-review', axis: 'data', disposition: 'required', enforcement: 'manual', localeScope: 'global', evidenceKind: 'manual-decision', ruleIds: [] },
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
  if (['visible-node-face', 'visible-short-node'].includes(feature)) {
    predicate = (target) => /(^|[./:])nodes?[./:]/i.test(target);
  } else if (['centered-side-label', 'text', 'specified-label-weight', 'measured-label-position', 'ambiguous-label-slot'].includes(feature)) {
    predicate = (target) => /label/i.test(target);
  } else if (['annotation-near-label', 'paired-node-annotation'].includes(feature)) {
    predicate = (target) => /annotation/i.test(target);
  } else if (feature === 'semantic-annotation') {
    predicate = (target) => /annotation/i.test(target);
  } else if (feature === 'visible-interface') {
    predicate = (target) => /link|interface/i.test(target);
  } else if (feature === 'zero-paint-node-slot') {
    predicate = (target) => /(^|[./:])nonNodeMetrics?[./:]/i.test(target);
  }
  if (!predicate) return targets;
  const selected = targets.filter(predicate);
  if (['visible-node-face', 'visible-short-node'].includes(feature)) {
    invariant(
      selected.length > 0,
      'FEATURE_MAPPING_TARGET_REQUIRED',
      `Object ${object.id} feature ${feature} needs an explicit nodes.* render mapping`
    );
  }
  if (['measured-label-position', 'ambiguous-label-slot'].includes(feature)) {
    invariant(
      selected.length > 0,
      'FEATURE_MAPPING_TARGET_REQUIRED',
      `Object ${object.id} feature ${feature} needs an explicit label render mapping`
    );
  }
  if (feature === 'zero-paint-node-slot') {
    invariant(
      selected.length > 0,
      'FEATURE_MAPPING_TARGET_REQUIRED',
      `Object ${object.id} feature ${feature} needs an explicit nonNodeMetrics.* render mapping`
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

function featureChecks(inventory, sourceCoverage) {
  const byFeature = new Map();
  for (const object of inventory.objects) {
    for (const feature of object.features) {
      // ObjectInventory v4 makes paint visibility intrinsic to every nodes.*
      // mapping. Preserve the former feature as accepted input, but compile a
      // single complete check from mappings below rather than trusting authors
      // to enumerate the feature.
      if (feature === 'visible-node-face') continue;
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
      featureEvidenceDigests: [...new Set([
        ...(bucket.featureEvidenceDigests || []),
        ...(feature === 'visible-short-node' && sourceCoverage.summary.visibilityFloorExceptionNodeIds.length > 0
          ? [sourceCoverage.coverageDigest]
          : []),
      ])].sort(),
      ruleIds: [...requirement.ruleIds],
    })));
}

function semanticNodePaintCheck(inventory) {
  const objects = inventory.objects
    .filter((object) => object.disposition === 'render')
    .map((object) => ({
      object,
      targets: object.mapping
        .filter((mapping) =>
          mapping.role === 'render' &&
          /(^|[./:])nodes?[./:]/i.test(mapping.target)
        )
        .map((mapping) => mapping.target),
    }))
    .filter((entry) => entry.targets.length > 0);
  if (objects.length === 0) return [];
  return [{
    id: 'feature:visible-node-face',
    source: 'node-mapping',
    axis: 'render',
    enforcement: 'conditional-gate',
    localeScope: 'required-locales',
    evidenceKind: 'node-paint-audit',
    objectIds: objects.map(({ object }) => object.id).sort(),
    evidenceTargets: [...new Set(objects.flatMap(({ targets }) => targets))].sort(),
    featureEvidenceDigests: [],
    ruleIds: ['B15', 'T13', 'T21'],
  }];
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
    featureCheckIds: [...new Set([
      ...object.features.flatMap((feature) =>
        requiredChecksForFeature(feature).map((requirement) => featureCheckId(feature, requirement))
      ),
      ...(object.disposition === 'render' && object.mapping.some((mapping) =>
        mapping.role === 'render' && /(^|[./:])nodes?[./:]/i.test(mapping.target)
      ) ? ['feature:visible-node-face'] : []),
    ])].sort(),
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
    inventory.schemaVersion === 4 && inventory.protocol === 'object-inventory/v4',
    'INVENTORY_VERSION_STALE',
    'A new VerificationPlan requires ObjectInventory v4; historical inventories remain inspectable only'
  );
  const sourceCoverage = input.sourceCoverage;
  invariant(
    sourceCoverage?.schemaVersion === 2 && sourceCoverage.protocol === 'source-coverage/v2',
    'SOURCE_COVERAGE_REQUIRED',
    'VerificationPlan v5 requires source-coverage/v2'
  );
  invariant(
    sourceCoverage.datasetKey === inventory.datasetKey &&
      sourceCoverage.adapter === input.adapter &&
      sourceCoverage.inventoryDigest === inventory.inventoryDigest,
    'SOURCE_COVERAGE_PLAN_MISMATCH',
    'Source Coverage must match the Adapter and ObjectInventory compiled into the Plan'
  );
  const impacts = normalizeImpacts(input.changeImpact);
  const requiredLocales = normalizeLocales(input.requiredLocales);
  const profile = ADAPTER_PROFILES[input.adapter];

  if (input.adapter === 'revenue-metric') {
    const rendered = inventory.objects.filter((object) => object.disposition === 'render');
    invariant(rendered.length === 0, 'ADAPTER_INVENTORY_INVALID', `Revenue Metric inventory cannot render objects: ${rendered.map((object) => object.id).join(', ')}`);
  }

  if (input.adapter === 'income-statement') {
    // T18/T19: a new Plan cannot compile while any fixed-layout label group
    // lacks its persisted reference measurement. Historical inventories stay
    // inspectable; this gate binds at compile time only.
    const unmeasured = inventory.objects.filter((object) =>
      object.disposition === 'render' &&
      fixedLabelTargets(object).length > 0 &&
      !object.features.includes('measured-label-position')
    );
    invariant(
      unmeasured.length === 0,
      'MEASURED_LABEL_POSITION_REQUIRED',
      `Fixed-layout label objects must declare measured-label-position with reference measurements: ${unmeasured.map((object) => object.id).join(', ')}`
    );
  }

  const features = [
    ...featureChecks(inventory, sourceCoverage),
    ...semanticNodePaintCheck(inventory),
  ];
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
    schemaVersion: 5,
    protocol: VERIFICATION_PLAN_PROTOCOL,
    datasetKey: inventory.datasetKey,
    adapter: input.adapter,
    adapterVersion: profile.version,
    inventoryDigest: inventory.inventoryDigest,
    sourceCoverageDigest: sourceCoverage.coverageDigest,
    sourceDigest: sourceCoverage.source.digest,
    nodeFacePolicy: compileNodeFacePolicy(sourceCoverage),
    changeImpact: impacts,
    requiredLocales,
    requiredChecks,
    notApplicable,
    postReviewChecks,
    objectCoverage: coverage,
  };
  return deepFreeze({ ...value, planDigest: digestCanonical(value) });
}
