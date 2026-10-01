import { catalogEnforcements } from './fidelity-rules-catalog.mjs';

const RULE_ID_SOURCE = '[GBRLTAZI][1-9][0-9]*[a-z]?';
const RULE_ID_RE = new RegExp(`^${RULE_ID_SOURCE}$`);
const RULE_REFERENCE_RE = new RegExp(`\\b(${RULE_ID_SOURCE})\\b`, 'g');

export const FIDELITY_RULE_ENFORCEMENT = Object.freeze([
  'hard-gate',
  'build-gate',
  'conditional-gate',
]);

// The enforcement registry is derived from the structured rule catalog
// (scripts/lib/fidelity-rules-catalog.mjs), the single registration surface
// for rule semantics.
export const FIDELITY_RULE_ENFORCEMENTS = catalogEnforcements();

// This allow-list is deliberately smaller than the full catalog. The
// architecture verifier scans executable scripts (excluding this registry)
// and rejects any rule reference that is not declared here first.
export const FIDELITY_CODE_RULE_IDS = Object.freeze([
  'A6', 'A10',
  'B6', 'B15',
  'G1', 'G2', 'G3', 'G3d', 'G4', 'G8', 'G11', 'G12',
  'I12',
  'T6', 'T7', 'T18', 'T22',
]);

function contractError(code, message) {
  const error = new Error(message);
  error.code = code;
  throw error;
}

function deepFreeze(value) {
  if (!value || typeof value !== 'object' || Object.isFrozen(value)) return value;
  for (const child of Object.values(value)) deepFreeze(child);
  return Object.freeze(value);
}

function sortedUniqueStrings(values, label) {
  if (!Array.isArray(values)) contractError('RULE_CONTRACT_INVALID', `${label} must be an array`);
  const normalized = values.map((value) => String(value || '').trim());
  if (normalized.some((value) => !value)) {
    contractError('RULE_CONTRACT_INVALID', `${label} must contain non-empty strings`);
  }
  if (new Set(normalized).size !== normalized.length) {
    contractError('RULE_CONTRACT_DUPLICATE', `${label} contains duplicate values`);
  }
  return normalized.sort((left, right) => left.localeCompare(right));
}

export function validateFidelityRuleContract(input) {
  if (!input || typeof input !== 'object') {
    contractError('RULE_CONTRACT_INVALID', 'Fidelity rule contract must be an object');
  }
  const enforcements = input.enforcements;
  if (!enforcements || typeof enforcements !== 'object' || Array.isArray(enforcements)) {
    contractError('RULE_CONTRACT_INVALID', 'Fidelity rule enforcements must be an object');
  }
  const rules = {};
  for (const [id, enforcement] of Object.entries(enforcements)) {
    if (!RULE_ID_RE.test(id)) contractError('RULE_ID_INVALID', `Invalid fidelity rule ID: ${id}`);
    if (!FIDELITY_RULE_ENFORCEMENT.includes(enforcement)) {
      contractError('RULE_ENFORCEMENT_INVALID', `${id} has unsupported enforcement: ${enforcement}`);
    }
    rules[id] = enforcement;
  }
  if (!Object.keys(rules).length) contractError('RULE_CONTRACT_INVALID', 'Fidelity rule catalog cannot be empty');

  const codeRuleIds = sortedUniqueStrings(input.codeRuleIds || [], 'codeRuleIds');
  const unknownCodeIds = codeRuleIds.filter((id) => !(id in rules));
  if (unknownCodeIds.length) {
    contractError('RULE_CODE_UNKNOWN', `Executable code references unknown rules: ${unknownCodeIds.join(', ')}`);
  }

  return deepFreeze({
    enforcements: Object.fromEntries(Object.entries(rules).sort(([left], [right]) => left.localeCompare(right))),
    codeRuleIds,
  });
}

export const FIDELITY_RULE_CONTRACT = validateFidelityRuleContract({
  enforcements: FIDELITY_RULE_ENFORCEMENTS,
  codeRuleIds: FIDELITY_CODE_RULE_IDS,
});

// Rule IDs referenced by a source text; verify:architecture uses it to keep
// FIDELITY_CODE_RULE_IDS equal to the IDs executable scripts actually cite.
export function extractFidelityRuleReferences(source) {
  return [...new Set([...String(source || '').matchAll(RULE_REFERENCE_RE)].map((match) => match[1]))]
    .sort((left, right) => left.localeCompare(right));
}
