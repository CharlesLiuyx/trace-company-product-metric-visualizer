import { createHash } from 'node:crypto';

export const OBJECT_INVENTORY_PROTOCOL = 'object-inventory/v1';
export const OBJECT_DISPOSITIONS = Object.freeze(['render', 'data-only', 'skip']);
export const OBJECT_MAPPING_ROLES = Object.freeze(['render', 'data', 'asset', 'i18n']);
export const OBJECT_FEATURES = Object.freeze([
  'centered-side-label',
  'text',
  'annotation-near-label',
  'visible-short-node',
  'visible-interface',
]);

const STABLE_ID_RE = /^[a-z0-9]+(?:[._:-][a-z0-9]+)*$/;
// Mapping targets are authored identifiers/paths and may legitimately use
// camelCase; unlike source-object ids, their case is semantic and preserved.
const MAPPING_TARGET_RE = /^[A-Za-z0-9][A-Za-z0-9._:/-]*$/;
const DISPOSITION_SET = new Set(OBJECT_DISPOSITIONS);
const MAPPING_ROLE_SET = new Set(OBJECT_MAPPING_ROLES);
const FEATURE_SET = new Set(OBJECT_FEATURES);

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

function normalizeObject(object, index) {
  invariant(object && typeof object === 'object', 'OBJECT_INVALID', `Object ${index} must be an object`);
  invariant(typeof object.id === 'string' && STABLE_ID_RE.test(object.id), 'OBJECT_ID_INVALID', `Object ${index} needs a stable lowercase id`);
  invariant(typeof object.kind === 'string' && STABLE_ID_RE.test(object.kind), 'OBJECT_KIND_INVALID', `Object ${object.id} needs a stable kind`);
  invariant(DISPOSITION_SET.has(object.disposition), 'OBJECT_DISPOSITION_INVALID', `Object ${object.id} has unsupported disposition: ${object.disposition}`);

  const mapping = normalizeMappings(object, index);
  const features = [...new Set(object.features || [])].sort();
  for (const feature of features) {
    invariant(FEATURE_SET.has(feature), 'OBJECT_FEATURE_INVALID', `Object ${object.id} has unsupported feature: ${feature}`);
  }

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
    };
  }

  invariant(mapping.length > 0, 'OBJECT_MAPPING_REQUIRED', `Object ${object.id} needs at least one authored mapping`);
  invariant(!object.skipReason, 'SKIP_REASON_FOR_MAPPED_OBJECT', `Mapped object ${object.id} must not have a skip reason`);
  if (object.disposition === 'render') {
    invariant(mapping.some((item) => item.role === 'render'), 'RENDER_MAPPING_REQUIRED', `Rendered object ${object.id} needs a render mapping`);
  } else {
    invariant(mapping.some((item) => item.role === 'data'), 'DATA_MAPPING_REQUIRED', `Data-only object ${object.id} needs a data mapping`);
    invariant(!mapping.some((item) => item.role === 'render'), 'DATA_ONLY_RENDER_MAPPING', `Data-only object ${object.id} cannot have a render mapping`);
    invariant(features.length === 0, 'DATA_ONLY_RENDER_FEATURE', `Data-only object ${object.id} cannot declare render features`);
  }

  return { id: object.id, kind: object.kind, disposition: object.disposition, mapping, features };
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

  const objects = input.objects.map(normalizeObject).sort((left, right) => left.id.localeCompare(right.id));
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
    schemaVersion: 1,
    protocol: OBJECT_INVENTORY_PROTOCOL,
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
