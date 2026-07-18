import { createHash } from 'node:crypto';
import {
  LEGACY_HIDDEN_ANCHOR_FEATURE,
  assertLegacyHiddenAnchorEvidence,
} from './legacy/object-inventory-v3.mjs';
import {
  ZERO_PAINT_NODE_SLOT_CLASSIFICATION_CLAIM,
  ZERO_PAINT_NODE_SLOT_FEATURE,
  ZERO_PAINT_NODE_SLOT_INSPECTION_METHOD,
} from './source-face-observation.mjs';

export const OBJECT_INVENTORY_PROTOCOL = 'object-inventory/v4';
export const HISTORICAL_OBJECT_INVENTORY_PROTOCOL = 'object-inventory/v3';
export const HISTORICAL_V2_OBJECT_INVENTORY_PROTOCOL = 'object-inventory/v2';
export const LEGACY_OBJECT_INVENTORY_PROTOCOL = 'object-inventory/v1';
export const OBJECT_DISPOSITIONS = Object.freeze(['render', 'data-only', 'skip']);
export const OBJECT_MAPPING_ROLES = Object.freeze(['render', 'data', 'asset', 'i18n']);
export const OBJECT_FEATURES = Object.freeze([
  'centered-side-label',
  'text',
  'annotation-near-label',
  'semantic-annotation',
  'visible-short-node',
  'visible-interface',
  'visible-node-face',
  'specified-label-weight',
  'measured-label-position',
  'ambiguous-label-slot',
  ZERO_PAINT_NODE_SLOT_FEATURE,
]);
const HISTORICAL_V3_FEATURE_SET = new Set([
  ...OBJECT_FEATURES,
  LEGACY_HIDDEN_ANCHOR_FEATURE,
]);

const STABLE_ID_RE = /^[a-z0-9]+(?:[._:-][a-z0-9]+)*$/;
// Mapping targets are authored identifiers/paths and may legitimately use
// camelCase; unlike source-object ids, their case is semantic and preserved.
const MAPPING_TARGET_RE = /^[A-Za-z0-9][A-Za-z0-9._:/-]*$/;
const DISPOSITION_SET = new Set(OBJECT_DISPOSITIONS);
const MAPPING_ROLE_SET = new Set(OBJECT_MAPPING_ROLES);
const FEATURE_SET = new Set(OBJECT_FEATURES);
const LEGACY_FEATURE_SET = new Set([
  'centered-side-label',
  'text',
  'annotation-near-label',
  'visible-short-node',
  'visible-interface',
]);
const DIGEST_RE = /^sha256:[a-f0-9]{64}$/;
export const SEMANTIC_ANNOTATION_CLASSIFICATION_CLAIM = 'semantic-node-annotation-required';
export const SEMANTIC_ANNOTATION_INSPECTION_METHOD = 'native-scale-crop-and-object-inventory';
export const MEASURED_LABEL_POSITION_INSPECTION_METHOD = 'native-scale-reference-measurement';
export const AMBIGUOUS_LABEL_SLOT_CLASSIFICATION_CLAIM = 'label-slot-ambiguous-operator-decision-required';

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

export function digestCanonical(value) {
  return `sha256:${createHash('sha256').update(JSON.stringify(canonicalValue(value))).digest('hex')}`;
}

function deepFreeze(value) {
  if (!value || typeof value !== 'object' || Object.isFrozen(value)) return value;
  for (const child of Object.values(value)) deepFreeze(child);
  return Object.freeze(value);
}

function normalizeMappings(object, index) {
  const mappings = object.mapping;
  invariant(Array.isArray(mappings), 'OBJECT_MAPPING_INVALID', `Object ${object.id || index} mapping must be an array`);
  const seen = new Set();
  const normalized = mappings.map((mapping, mappingIndex) => {
    invariant(mapping && typeof mapping === 'object', 'OBJECT_MAPPING_INVALID', `Object ${object.id || index} mapping ${mappingIndex} must be an object`);
    invariant(MAPPING_ROLE_SET.has(mapping.role), 'OBJECT_MAPPING_ROLE_INVALID', `Object ${object.id || index} mapping ${mappingIndex} has unsupported role: ${mapping.role}`);
    invariant(
      typeof mapping.target === 'string' && MAPPING_TARGET_RE.test(mapping.target),
      'OBJECT_MAPPING_TARGET_INVALID',
      `Object ${object.id || index} mapping ${mappingIndex} needs a stable target`
    );
    const identity = `${mapping.role}:${mapping.target}`;
    invariant(!seen.has(identity), 'OBJECT_MAPPING_DUPLICATE', `Object ${object.id || index} repeats mapping ${identity}`);
    seen.add(identity);
    return { role: mapping.role, target: mapping.target };
  });
  return normalized.sort((left, right) =>
    left.role.localeCompare(right.role) || left.target.localeCompare(right.target)
  );
}

function normalizeReferenceBBox(raw, objectId, feature) {
  invariant(
    Array.isArray(raw) && raw.length === 4 && raw.every(Number.isInteger),
    'OBJECT_FEATURE_REFERENCE_BBOX_INVALID',
    `Object ${objectId} evidence for ${feature} needs an integer referenceBBox [x, y, width, height]`
  );
  const [x, y, width, height] = raw;
  invariant(
    x >= 0 && y >= 0 && width > 0 && height > 0,
    'OBJECT_FEATURE_REFERENCE_BBOX_INVALID',
    `Object ${objectId} evidence for ${feature} referenceBBox must have non-negative origin and positive size`
  );
  return [x, y, width, height];
}

function normalizeFeatureEvidence(object, features, { historicalV3 = false } = {}) {
  const input = object.featureEvidence == null ? {} : object.featureEvidence;
  invariant(
    input && typeof input === 'object' && !Array.isArray(input),
    'OBJECT_FEATURE_EVIDENCE_INVALID',
    `Object ${object.id} featureEvidence must be an object`
  );
  const normalized = {};
  for (const [feature, raw] of Object.entries(input)) {
    invariant(features.includes(feature), 'OBJECT_FEATURE_EVIDENCE_ORPHAN', `Object ${object.id} has evidence for undeclared feature: ${feature}`);
    invariant(raw && typeof raw === 'object' && !Array.isArray(raw), 'OBJECT_FEATURE_EVIDENCE_INVALID', `Object ${object.id} evidence for ${feature} must be an object`);
    const source = typeof raw.source === 'string' ? raw.source.trim() : '';
    const locator = typeof raw.locator === 'string' ? raw.locator.trim() : '';
    const digest = raw.digest == null ? null : String(raw.digest);
    invariant(source, 'OBJECT_FEATURE_EVIDENCE_INVALID', `Object ${object.id} evidence for ${feature} needs a source`);
    invariant(locator || digest, 'OBJECT_FEATURE_EVIDENCE_INVALID', `Object ${object.id} evidence for ${feature} needs a locator or digest`);
    if (digest) invariant(DIGEST_RE.test(digest), 'OBJECT_FEATURE_EVIDENCE_INVALID', `Object ${object.id} evidence for ${feature} has an invalid digest`);
    const evidence = {
      source,
      ...(locator ? { locator } : {}),
      ...(digest ? { digest } : {}),
    };
    if (raw.reason != null) {
      const reason = String(raw.reason).trim();
      invariant(reason, 'OBJECT_FEATURE_EVIDENCE_INVALID', `Object ${object.id} evidence for ${feature} has an empty reason`);
      evidence.reason = reason;
    }
    if (raw.expectedWeight != null) {
      invariant(
        Number.isInteger(raw.expectedWeight) && raw.expectedWeight >= 1 && raw.expectedWeight <= 1000,
        'OBJECT_FEATURE_EVIDENCE_INVALID',
        `Object ${object.id} specified label weight must be an integer from 1 to 1000`
      );
      evidence.expectedWeight = raw.expectedWeight;
    }
    if (raw.referenceBBox != null) {
      evidence.referenceBBox = normalizeReferenceBBox(raw.referenceBBox, object.id, feature);
    }
    if (raw.approvedTargetBBox != null) {
      invariant(
        feature === 'measured-label-position',
        'OBJECT_FEATURE_APPROVED_TARGET_UNSUPPORTED',
        `Object ${object.id} may only use approvedTargetBBox with measured-label-position`
      );
      const approvedTargetAuthority = typeof raw.approvedTargetAuthority === 'string'
        ? raw.approvedTargetAuthority.trim()
        : '';
      const approvedTargetReason = typeof raw.approvedTargetReason === 'string'
        ? raw.approvedTargetReason.trim()
        : '';
      invariant(
        approvedTargetAuthority === 'user-directed-layout-correction',
        'MEASURED_LABEL_POSITION_APPROVED_TARGET_AUTHORITY_REQUIRED',
        `Measured label position ${object.id} needs approvedTargetAuthority user-directed-layout-correction`
      );
      invariant(
        approvedTargetReason,
        'MEASURED_LABEL_POSITION_APPROVED_TARGET_REASON_REQUIRED',
        `Measured label position ${object.id} needs approvedTargetReason`
      );
      evidence.approvedTargetBBox = normalizeReferenceBBox(raw.approvedTargetBBox, object.id, feature);
      evidence.approvedTargetAuthority = approvedTargetAuthority;
      evidence.approvedTargetReason = approvedTargetReason;
    }
    if (raw.classificationClaim != null) {
      const classificationClaim = String(raw.classificationClaim).trim();
      invariant(classificationClaim, 'OBJECT_FEATURE_EVIDENCE_INVALID', `Object ${object.id} evidence for ${feature} has an empty classificationClaim`);
      evidence.classificationClaim = classificationClaim;
    }
    if (raw.inspectionMethod != null) {
      const inspectionMethod = String(raw.inspectionMethod).trim();
      invariant(inspectionMethod, 'OBJECT_FEATURE_EVIDENCE_INVALID', `Object ${object.id} evidence for ${feature} has an empty inspectionMethod`);
      evidence.inspectionMethod = inspectionMethod;
    }
    normalized[feature] = evidence;
  }

  for (const feature of [
    'visible-short-node',
    'specified-label-weight',
    'semantic-annotation',
    'measured-label-position',
    'ambiguous-label-slot',
    ZERO_PAINT_NODE_SLOT_FEATURE,
    ...(historicalV3 ? [LEGACY_HIDDEN_ANCHOR_FEATURE] : []),
  ]) {
    if (features.includes(feature)) {
      invariant(normalized[feature], 'OBJECT_FEATURE_EVIDENCE_REQUIRED', `Object ${object.id} feature ${feature} needs source evidence`);
    }
  }
  if (features.includes('measured-label-position')) {
    const evidence = normalized['measured-label-position'];
    invariant(
      evidence?.locator?.includes('#'),
      'MEASURED_LABEL_POSITION_LOCATOR_REQUIRED',
      `Measured label position ${object.id} needs a Source locator with a stable fragment`
    );
    invariant(
      evidence?.referenceBBox,
      'MEASURED_LABEL_POSITION_REFERENCE_BBOX_REQUIRED',
      `Measured label position ${object.id} needs the native-pixel referenceBBox of its label group`
    );
    invariant(
      evidence?.digest,
      'MEASURED_LABEL_POSITION_SOURCE_DIGEST_REQUIRED',
      `Measured label position ${object.id} needs the immutable Source digest it was measured from`
    );
    invariant(
      evidence?.inspectionMethod === MEASURED_LABEL_POSITION_INSPECTION_METHOD,
      'MEASURED_LABEL_POSITION_INSPECTION_REQUIRED',
      `Measured label position ${object.id} must use inspectionMethod ${MEASURED_LABEL_POSITION_INSPECTION_METHOD}`
    );
  }
  if (features.includes('ambiguous-label-slot')) {
    const evidence = normalized['ambiguous-label-slot'];
    invariant(
      evidence?.reason,
      'AMBIGUOUS_LABEL_SLOT_REASON_REQUIRED',
      `Ambiguous label slot ${object.id} must describe the competing slot interpretations`
    );
    invariant(
      evidence?.locator?.includes('#'),
      'AMBIGUOUS_LABEL_SLOT_LOCATOR_REQUIRED',
      `Ambiguous label slot ${object.id} needs a reference crop locator with a stable fragment`
    );
    invariant(
      evidence?.referenceBBox,
      'AMBIGUOUS_LABEL_SLOT_REFERENCE_BBOX_REQUIRED',
      `Ambiguous label slot ${object.id} needs the native-pixel referenceBBox of the ambiguous text`
    );
    invariant(
      evidence?.digest,
      'AMBIGUOUS_LABEL_SLOT_SOURCE_DIGEST_REQUIRED',
      `Ambiguous label slot ${object.id} needs the immutable Source digest`
    );
    invariant(
      evidence?.classificationClaim === AMBIGUOUS_LABEL_SLOT_CLASSIFICATION_CLAIM,
      'AMBIGUOUS_LABEL_SLOT_CLASSIFICATION_CLAIM_REQUIRED',
      `Ambiguous label slot ${object.id} must explicitly claim ${AMBIGUOUS_LABEL_SLOT_CLASSIFICATION_CLAIM}`
    );
  }
  if (historicalV3 && features.includes(LEGACY_HIDDEN_ANCHOR_FEATURE)) {
    assertLegacyHiddenAnchorEvidence(
      object,
      normalized[LEGACY_HIDDEN_ANCHOR_FEATURE],
      invariant
    );
  }
  if (features.includes('specified-label-weight')) {
    invariant(
      normalized['specified-label-weight']?.expectedWeight != null,
      'OBJECT_FEATURE_EVIDENCE_REQUIRED',
      `Object ${object.id} specified-label-weight evidence needs expectedWeight`
    );
  }
  if (features.includes('semantic-annotation')) {
    const evidence = normalized['semantic-annotation'];
    invariant(evidence?.reason, 'OBJECT_FEATURE_EVIDENCE_REQUIRED', `Semantic annotation ${object.id} needs a source-backed classification reason`);
    invariant(evidence?.locator?.includes('#'), 'SEMANTIC_ANNOTATION_REFERENCE_CROP_REQUIRED', `Semantic annotation ${object.id} needs a reference crop locator with a stable fragment`);
    invariant(evidence?.referenceBBox, 'SEMANTIC_ANNOTATION_REFERENCE_BBOX_REQUIRED', `Semantic annotation ${object.id} needs a native-pixel referenceBBox`);
    invariant(evidence?.digest, 'SEMANTIC_ANNOTATION_SOURCE_DIGEST_REQUIRED', `Semantic annotation ${object.id} needs the immutable Source digest`);
    invariant(
      evidence?.inspectionMethod === SEMANTIC_ANNOTATION_INSPECTION_METHOD,
      'SEMANTIC_ANNOTATION_INSPECTION_REQUIRED',
      `Semantic annotation ${object.id} must use inspectionMethod ${SEMANTIC_ANNOTATION_INSPECTION_METHOD}`
    );
    invariant(
      evidence?.classificationClaim === SEMANTIC_ANNOTATION_CLASSIFICATION_CLAIM,
      'SEMANTIC_ANNOTATION_CLASSIFICATION_CLAIM_REQUIRED',
      `Semantic annotation ${object.id} must explicitly claim ${SEMANTIC_ANNOTATION_CLASSIFICATION_CLAIM}`
    );
  }
  if (features.includes(ZERO_PAINT_NODE_SLOT_FEATURE)) {
    const evidence = normalized[ZERO_PAINT_NODE_SLOT_FEATURE];
    invariant(
      evidence?.reason,
      'ZERO_PAINT_NODE_SLOT_REASON_REQUIRED',
      `Zero-paint node slot ${object.id} needs a Source-backed reason`
    );
    invariant(
      evidence?.locator?.includes('#'),
      'ZERO_PAINT_NODE_SLOT_LOCATOR_REQUIRED',
      `Zero-paint node slot ${object.id} needs a Source locator with a stable fragment`
    );
    invariant(
      evidence?.referenceBBox,
      'ZERO_PAINT_NODE_SLOT_REFERENCE_BBOX_REQUIRED',
      `Zero-paint node slot ${object.id} needs its native-pixel search bbox`
    );
    invariant(
      evidence?.digest,
      'ZERO_PAINT_NODE_SLOT_SOURCE_DIGEST_REQUIRED',
      `Zero-paint node slot ${object.id} needs the immutable Source digest`
    );
    invariant(
      evidence?.inspectionMethod === ZERO_PAINT_NODE_SLOT_INSPECTION_METHOD,
      'ZERO_PAINT_NODE_SLOT_INSPECTION_REQUIRED',
      `Zero-paint node slot ${object.id} must use inspectionMethod ${ZERO_PAINT_NODE_SLOT_INSPECTION_METHOD}`
    );
    invariant(
      evidence?.classificationClaim === ZERO_PAINT_NODE_SLOT_CLASSIFICATION_CLAIM,
      'ZERO_PAINT_NODE_SLOT_CLASSIFICATION_CLAIM_REQUIRED',
      `Zero-paint node slot ${object.id} must explicitly claim ${ZERO_PAINT_NODE_SLOT_CLASSIFICATION_CLAIM}`
    );
  }
  return Object.fromEntries(Object.entries(normalized).sort(([left], [right]) => left.localeCompare(right)));
}

function hasNodeRenderMapping(object, mapping) {
  if (!mapping.some((item) => item.role === 'render')) return false;
  if (mapping.some((item) => /(^|[./:])nodes?[./:]/i.test(item.target))) return true;
  return object.id.startsWith('node:') || /(^|-)node$|(^|-)node-|anchor/i.test(object.kind);
}

function hasAnnotationRenderMapping(mapping) {
  return mapping.some((item) => item.role === 'render' && /annotation/i.test(item.target));
}

function hasNonNodeMetricRenderMapping(mapping) {
  return mapping.some((item) =>
    item.role === 'render' && /(^|[./:])nonNodeMetrics?[./:]/i.test(item.target)
  );
}

function hasSemanticMetricRenderMapping(object, mapping) {
  return hasNodeRenderMapping(object, mapping) || hasNonNodeMetricRenderMapping(mapping);
}

function normalizeObject(object, index, {
  legacy = false,
  historicalV2 = false,
  historicalV3 = false,
} = {}) {
  invariant(object && typeof object === 'object', 'OBJECT_INVALID', `Object ${index} must be an object`);
  invariant(typeof object.id === 'string' && STABLE_ID_RE.test(object.id), 'OBJECT_ID_INVALID', `Object ${index} needs a stable lowercase id`);
  invariant(typeof object.kind === 'string' && STABLE_ID_RE.test(object.kind), 'OBJECT_KIND_INVALID', `Object ${object.id} needs a stable kind`);
  invariant(DISPOSITION_SET.has(object.disposition), 'OBJECT_DISPOSITION_INVALID', `Object ${object.id} has unsupported disposition: ${object.disposition}`);

  const mapping = normalizeMappings(object, index);
  const features = [...new Set(object.features || [])].sort();
  const supportedFeatures = legacy
    ? LEGACY_FEATURE_SET
    : historicalV2 || historicalV3
      ? HISTORICAL_V3_FEATURE_SET
      : FEATURE_SET;
  for (const feature of features) {
    invariant(
      supportedFeatures.has(feature),
      'OBJECT_FEATURE_INVALID',
      `Object ${object.id} has unsupported feature: ${feature}`
    );
  }
  const featureEvidence = legacy
    ? null
    : normalizeFeatureEvidence(object, features, { historicalV3 });

  if (object.disposition === 'skip') {
    invariant(mapping.length === 0, 'SKIPPED_OBJECT_MAPPED', `Skipped object ${object.id} must not have authored mappings`);
    invariant(typeof object.skipReason === 'string' && object.skipReason.trim(), 'SKIP_REASON_REQUIRED', `Skipped object ${object.id} needs a reason`);
    invariant(features.length === 0, 'SKIPPED_OBJECT_FEATURED', `Skipped object ${object.id} must not declare render features`);
    return {
      id: object.id,
      kind: object.kind,
      disposition: object.disposition,
      mapping,
      features,
      skipReason: object.skipReason.trim(),
      ...(legacy ? {} : { featureEvidence }),
    };
  }

  invariant(mapping.length > 0, 'OBJECT_MAPPING_REQUIRED', `Object ${object.id} needs at least one authored mapping`);
  invariant(!object.skipReason, 'SKIP_REASON_FOR_MAPPED_OBJECT', `Mapped object ${object.id} must not have a skip reason`);
  if (object.disposition === 'render') {
    invariant(mapping.some((item) => item.role === 'render'), 'RENDER_MAPPING_REQUIRED', `Rendered object ${object.id} needs a render mapping`);
    if (historicalV3 && hasNodeRenderMapping(object, mapping)) {
      const faceIntents = ['visible-node-face', LEGACY_HIDDEN_ANCHOR_FEATURE]
        .filter((feature) => features.includes(feature));
      invariant(
        faceIntents.length === 1,
        'NODE_FACE_INTENT_REQUIRED',
        `Historical v3 node-mapped object ${object.id} must declare exactly one face intent`
      );
    }
    if ((historicalV2 || historicalV3) && features.includes('visible-short-node')) {
      invariant(
        features.includes('visible-node-face'),
        'VISIBLE_SHORT_NODE_FACE_REQUIRED',
        `Visible short node ${object.id} must declare visible-node-face`
      );
    }
    if (
      !legacy &&
      (object.id.startsWith('node:') || object.id.startsWith('metric:')) &&
      hasSemanticMetricRenderMapping(object, mapping) &&
      hasAnnotationRenderMapping(mapping)
    ) {
      invariant(
        features.includes('semantic-annotation'),
        'SEMANTIC_ANNOTATION_FEATURE_REQUIRED',
        `Semantic metric annotation ${object.id} must declare semantic-annotation and bind it to source evidence`
      );
    }
    if (!legacy && features.includes('semantic-annotation')) {
      invariant(
        (object.id.startsWith('node:') || object.id.startsWith('metric:')) &&
          hasSemanticMetricRenderMapping(object, mapping) &&
          hasAnnotationRenderMapping(mapping),
        'SEMANTIC_ANNOTATION_MAPPING_REQUIRED',
        `semantic-annotation ${object.id} needs a node:* or metric:* identity, a semantic metric render mapping, and an explicit annotations.* render mapping`
      );
    }
    if (!legacy && features.includes(ZERO_PAINT_NODE_SLOT_FEATURE)) {
      invariant(
        hasNonNodeMetricRenderMapping(mapping) && !hasNodeRenderMapping(object, mapping),
        'ZERO_PAINT_NODE_SLOT_MAPPING_REQUIRED',
        `${ZERO_PAINT_NODE_SLOT_FEATURE} ${object.id} needs a nonNodeMetrics.* render mapping and cannot map to nodes.*`
      );
    }
  } else {
    invariant(mapping.some((item) => item.role === 'data'), 'DATA_MAPPING_REQUIRED', `Data-only object ${object.id} needs a data mapping`);
    invariant(!mapping.some((item) => item.role === 'render'), 'DATA_ONLY_RENDER_MAPPING', `Data-only object ${object.id} cannot have a render mapping`);
    invariant(features.length === 0, 'DATA_ONLY_RENDER_FEATURE', `Data-only object ${object.id} cannot declare render features`);
  }

  return {
    id: object.id,
    kind: object.kind,
    disposition: object.disposition,
    mapping,
    features,
    ...(legacy ? {} : { featureEvidence }),
  };
}

/**
 * Normalize and validate the coarse source inventory. Object ids and mapping
 * identities are semantic identities; array order never affects the digest.
 */
export function createObjectInventory(input) {
  invariant(input && typeof input === 'object', 'INVENTORY_INVALID', 'ObjectInventory input is required');
  invariant(
    typeof input.datasetKey === 'string' && STABLE_ID_RE.test(input.datasetKey),
    'DATASET_KEY_INVALID',
    'ObjectInventory needs a stable lowercase datasetKey'
  );
  invariant(Array.isArray(input.objects) && input.objects.length > 0, 'INVENTORY_EMPTY', 'ObjectInventory needs at least one object');

  const protocol = input.protocol || (
    input.schemaVersion === 1 ? LEGACY_OBJECT_INVENTORY_PROTOCOL :
      input.schemaVersion === 2 ? HISTORICAL_V2_OBJECT_INVENTORY_PROTOCOL :
        input.schemaVersion === 3 ? HISTORICAL_OBJECT_INVENTORY_PROTOCOL :
        OBJECT_INVENTORY_PROTOCOL
  );
  const legacy = protocol === LEGACY_OBJECT_INVENTORY_PROTOCOL;
  const historicalV2 = protocol === HISTORICAL_V2_OBJECT_INVENTORY_PROTOCOL;
  const historicalV3 = protocol === HISTORICAL_OBJECT_INVENTORY_PROTOCOL;
  if (input.protocol != null) {
    invariant(
      [
        OBJECT_INVENTORY_PROTOCOL,
        HISTORICAL_OBJECT_INVENTORY_PROTOCOL,
        HISTORICAL_V2_OBJECT_INVENTORY_PROTOCOL,
        LEGACY_OBJECT_INVENTORY_PROTOCOL,
      ].includes(input.protocol),
      'INVENTORY_PROTOCOL_INVALID',
      `Unsupported ObjectInventory protocol: ${input.protocol}`
    );
  }
  if (input.schemaVersion != null) {
    const expectedVersion = legacy ? 1 : historicalV2 ? 2 : historicalV3 ? 3 : 4;
    invariant(input.schemaVersion === expectedVersion, 'INVENTORY_VERSION_INVALID', 'ObjectInventory schemaVersion does not match its protocol');
  }

  const objects = input.objects.map((object, index) => normalizeObject(object, index, {
    legacy,
    historicalV2,
    historicalV3,
  }))
    .sort((left, right) => left.id.localeCompare(right.id));
  const objectIds = new Set();
  const mappingOwners = new Map();
  for (const object of objects) {
    invariant(!objectIds.has(object.id), 'OBJECT_ID_DUPLICATE', `Object id appears more than once: ${object.id}`);
    objectIds.add(object.id);
    for (const mapping of object.mapping) {
      const identity = `${mapping.role}:${mapping.target}`;
      invariant(
        !mappingOwners.has(identity),
        'MAPPING_OWNER_DUPLICATE',
        `Authored mapping ${identity} is claimed by both ${mappingOwners.get(identity)} and ${object.id}`
      );
      mappingOwners.set(identity, object.id);
    }
  }

  const summary = Object.fromEntries(
    OBJECT_DISPOSITIONS.map((disposition) => [
      disposition,
      objects.filter((object) => object.disposition === disposition).length,
    ])
  );
  const value = {
    schemaVersion: legacy ? 1 : historicalV2 ? 2 : historicalV3 ? 3 : 4,
    protocol,
    datasetKey: input.datasetKey,
    objects,
    summary,
  };
  const inventory = { ...value, inventoryDigest: digestCanonical(value) };
  if (input.inventoryDigest != null) {
    invariant(input.inventoryDigest === inventory.inventoryDigest, 'INVENTORY_DIGEST_MISMATCH', 'ObjectInventory digest does not match its content');
  }
  return deepFreeze(inventory);
}

export function validateObjectInventory(inventory) {
  return createObjectInventory(inventory);
}
