const RULE_ID_SOURCE = '[GBRLTAZI][1-9][0-9]*[a-z]?';
const RULE_ID_RE = new RegExp(`^${RULE_ID_SOURCE}$`);
const RULE_REFERENCE_RE = new RegExp(`\\b(${RULE_ID_SOURCE})\\b`, 'g');

export const FIDELITY_RULE_ENFORCEMENT = Object.freeze([
  'hard-gate',
  'build-gate',
  'conditional-gate',
  'quantified-audit',
  'manual',
]);

function numbered(prefix, end) {
  return Array.from({ length: end }, (_, index) => `${prefix}${index + 1}`);
}

const CANONICAL_RULE_IDS = Object.freeze([
  ...numbered('G', 12),
  'G3a',
  'G3b',
  'G3c',
  ...numbered('B', 15),
  ...numbered('R', 9),
  ...numbered('L', 16),
  ...numbered('T', 16),
  'T12a',
  ...numbered('A', 9),
  ...numbered('Z', 8),
  'Z6a',
  ...numbered('I', 11),
]);

const ENFORCEMENT_GROUPS = Object.freeze({
  'hard-gate': Object.freeze([
    'G1', 'G2', 'G3', 'G3a', 'G3b', 'G3c', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9', 'G10', 'G12',
    'R3', 'R4', 'R5', 'R6', 'R7', 'R8', 'R9',
    'L15',
  ]),
  'build-gate': Object.freeze(['G11']),
  'conditional-gate': Object.freeze([
    'B3', 'B5', 'B6', 'B7', 'B15',
    'T7', 'T12', 'T13',
    'A6',
    'Z5',
  ]),
  'quantified-audit': Object.freeze([
    'B8', 'B10', 'B12',
    'L5', 'L6', 'L10', 'L11',
    'T1', 'T2', 'T4', 'T6',
  ]),
});

function buildEnforcementRegistry() {
  const registry = Object.fromEntries(CANONICAL_RULE_IDS.map((id) => [id, 'manual']));
  const claimed = new Set();
  for (const [enforcement, ids] of Object.entries(ENFORCEMENT_GROUPS)) {
    for (const id of ids) {
      if (!(id in registry)) throw new Error(`Unknown fidelity rule in ${enforcement}: ${id}`);
      if (claimed.has(id)) throw new Error(`Fidelity rule has multiple enforcement classes: ${id}`);
      claimed.add(id);
      registry[id] = enforcement;
    }
  }
  return Object.freeze(registry);
}

export const FIDELITY_RULE_ENFORCEMENTS = buildEnforcementRegistry();

// Aliases are intentionally empty until two existing rules are proven to have
// the same semantics. The validator keeps any future alias one-way and
// prevents an old ID from silently acquiring a new meaning.
export const FIDELITY_RULE_ALIASES = Object.freeze({});

export const FIDELITY_FEATURE_RULE_IDS = Object.freeze({
  'centered-side-label': Object.freeze(['B3', 'T7']),
  text: Object.freeze(['B6', 'Z5']),
  'annotation-near-label': Object.freeze(['B5', 'A6']),
  'visible-short-node': Object.freeze(['T14']),
  'visible-interface': Object.freeze(['G12', 'L11']),
  'visible-node-face': Object.freeze(['B15', 'T13']),
  'hidden-anchor': Object.freeze(['B7', 'T12']),
  'specified-label-weight': Object.freeze(['B14', 'T16']),
});

// This allow-list is deliberately smaller than the full catalog. The
// architecture verifier scans executable scripts (excluding this registry)
// and rejects any rule reference that is not declared here first.
export const FIDELITY_CODE_RULE_IDS = Object.freeze([
  'A6',
  'B3', 'B5', 'B6', 'B7', 'B14', 'B15',
  'G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9', 'G10', 'G11', 'G12',
  'L11',
  'T7', 'T12', 'T13', 'T14', 'T16',
  'Z5',
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

  const aliases = {};
  for (const [alias, target] of Object.entries(input.aliases || {})) {
    if (!RULE_ID_RE.test(alias)) contractError('RULE_ALIAS_INVALID', `Invalid fidelity rule alias: ${alias}`);
    if (alias in rules) contractError('RULE_ALIAS_COLLISION', `Fidelity rule alias is also canonical: ${alias}`);
    if (!RULE_ID_RE.test(target) || !(target in rules)) {
      contractError('RULE_ALIAS_TARGET_INVALID', `Fidelity rule alias ${alias} targets unknown canonical rule: ${target}`);
    }
    aliases[alias] = target;
  }

  const resolve = (id) => aliases[id] || id;
  const featureMappings = {};
  for (const [feature, ids] of Object.entries(input.featureMappings || {})) {
    if (!feature.trim()) contractError('RULE_FEATURE_INVALID', 'Fidelity feature names cannot be empty');
    const normalized = sortedUniqueStrings(ids, `feature ${feature}`);
    if (!normalized.length) contractError('RULE_FEATURE_INVALID', `Feature ${feature} needs at least one rule`);
    const unknown = normalized.filter((id) => !(resolve(id) in rules));
    if (unknown.length) {
      contractError('RULE_FEATURE_UNKNOWN', `Feature ${feature} references unknown rules: ${unknown.join(', ')}`);
    }
    featureMappings[feature] = normalized;
  }

  const codeRuleIds = sortedUniqueStrings(input.codeRuleIds || [], 'codeRuleIds');
  const unknownCodeIds = codeRuleIds.filter((id) => !(resolve(id) in rules));
  if (unknownCodeIds.length) {
    contractError('RULE_CODE_UNKNOWN', `Executable code references unknown rules: ${unknownCodeIds.join(', ')}`);
  }

  return deepFreeze({
    enforcements: Object.fromEntries(Object.entries(rules).sort(([left], [right]) => left.localeCompare(right))),
    aliases: Object.fromEntries(Object.entries(aliases).sort(([left], [right]) => left.localeCompare(right))),
    featureMappings: Object.fromEntries(
      Object.entries(featureMappings).sort(([left], [right]) => left.localeCompare(right))
    ),
    codeRuleIds,
  });
}

export const FIDELITY_RULE_CONTRACT = validateFidelityRuleContract({
  enforcements: FIDELITY_RULE_ENFORCEMENTS,
  aliases: FIDELITY_RULE_ALIASES,
  featureMappings: FIDELITY_FEATURE_RULE_IDS,
  codeRuleIds: FIDELITY_CODE_RULE_IDS,
});

function splitMarkdownRow(line) {
  let source = String(line || '').trim();
  if (source.startsWith('|')) source = source.slice(1);
  if (source.endsWith('|') && !source.endsWith('\\|')) source = source.slice(0, -1);
  const cells = [];
  let cell = '';
  let escaped = false;
  let codeTicks = 0;
  for (let index = 0; index < source.length; index += 1) {
    const character = source[index];
    if (escaped) {
      cell += character;
      escaped = false;
      continue;
    }
    if (character === '\\') {
      cell += character;
      escaped = true;
      continue;
    }
    if (character === '`') {
      let count = 1;
      while (source[index + count] === '`') count += 1;
      codeTicks = codeTicks === count ? 0 : count;
      cell += '`'.repeat(count);
      index += count - 1;
      continue;
    }
    if (character === '|' && codeTicks === 0) {
      cells.push(cell.trim());
      cell = '';
      continue;
    }
    cell += character;
  }
  cells.push(cell.trim());
  return cells;
}

function plainCell(value) {
  return String(value || '')
    .trim()
    .replace(/^`+|`+$/g, '')
    .replace(/^\*\*|\*\*$/g, '')
    .replace(/^__|__$/g, '')
    .trim();
}

function normalizedHeader(value) {
  return plainCell(value).toLowerCase().replace(/[\s_-]+/g, '');
}

function isTableDivider(cells) {
  return cells.length > 0 && cells.every((cell) => /^:?-{3,}:?$/.test(cell.trim()));
}

export function parseFidelityRuleDefinitions(source) {
  const lines = String(source || '').split(/\r?\n/);
  const definitions = [];
  for (let index = 0; index < lines.length - 1; index += 1) {
    if (!lines[index].includes('|') || !lines[index + 1].includes('|')) continue;
    const header = splitMarkdownRow(lines[index]);
    const divider = splitMarkdownRow(lines[index + 1]);
    if (header.length !== divider.length || !isTableDivider(divider)) continue;
    const normalized = header.map(normalizedHeader);
    const ruleIndex = normalized.findIndex((cell) => ['规则', '规则id', 'rule', 'ruleid'].includes(cell));
    const enforcementIndex = normalized.findIndex((cell) => ['执行方式', 'enforcement'].includes(cell));
    if (ruleIndex < 0 || enforcementIndex < 0) continue;

    let rowIndex = index + 2;
    for (; rowIndex < lines.length && lines[rowIndex].includes('|'); rowIndex += 1) {
      const cells = splitMarkdownRow(lines[rowIndex]);
      const rawId = plainCell(cells[ruleIndex]);
      const enforcement = plainCell(cells[enforcementIndex]);
      if (!rawId && !enforcement) continue;
      if (!RULE_ID_RE.test(rawId)) {
        contractError(
          'RULE_DOCUMENT_ID_INVALID',
          `Rule definition at line ${rowIndex + 1} must contain one canonical ID, got ${JSON.stringify(rawId)}`
        );
      }
      if (!FIDELITY_RULE_ENFORCEMENT.includes(enforcement)) {
        contractError(
          'RULE_DOCUMENT_ENFORCEMENT_INVALID',
          `${rawId} at line ${rowIndex + 1} has unsupported enforcement: ${enforcement}`
        );
      }
      definitions.push({ id: rawId, enforcement, line: rowIndex + 1 });
    }
    index = rowIndex - 1;
  }
  return definitions;
}

export function extractFidelityRuleReferences(source) {
  return [...new Set([...String(source || '').matchAll(RULE_REFERENCE_RE)].map((match) => match[1]))]
    .sort((left, right) => left.localeCompare(right));
}

export function validateFidelityRuleDocument(source, contractInput = FIDELITY_RULE_CONTRACT) {
  const contract = validateFidelityRuleContract(contractInput);
  const definitions = parseFidelityRuleDefinitions(source);
  const byId = new Map();
  for (const definition of definitions) {
    const prior = byId.get(definition.id);
    if (prior) {
      contractError(
        'RULE_DOCUMENT_DUPLICATE',
        `Fidelity rule ${definition.id} is defined more than once (lines ${prior.line} and ${definition.line})`
      );
    }
    byId.set(definition.id, definition);
  }

  const canonicalIds = Object.keys(contract.enforcements);
  const missing = canonicalIds.filter((id) => !byId.has(id));
  const extra = [...byId.keys()].filter((id) => !(id in contract.enforcements));
  if (missing.length || extra.length) {
    contractError(
      'RULE_DOCUMENT_CATALOG_DRIFT',
      `Fidelity rule catalog drift: missing=[${missing.join(', ')}] extra=[${extra.join(', ')}]`
    );
  }

  const enforcementDrift = definitions
    .filter((definition) => contract.enforcements[definition.id] !== definition.enforcement)
    .map((definition) => `${definition.id}:${definition.enforcement}->${contract.enforcements[definition.id]}`);
  if (enforcementDrift.length) {
    contractError(
      'RULE_DOCUMENT_ENFORCEMENT_DRIFT',
      `Fidelity rule enforcement drift: ${enforcementDrift.join(', ')}`
    );
  }

  const references = extractFidelityRuleReferences(source);
  const unresolved = references.filter(
    (id) => !(id in contract.enforcements) && !(id in contract.aliases)
  );
  if (unresolved.length) {
    contractError('RULE_DOCUMENT_REFERENCE_UNKNOWN', `Fidelity rules reference undefined IDs: ${unresolved.join(', ')}`);
  }

  const strayDefinitions = findSecondaryFidelityRuleDefinitions(source)
    .filter((finding) => finding.kind !== 'canonical-rule-table');
  if (strayDefinitions.length) {
    const detail = strayDefinitions
      .slice(0, 8)
      .map((finding) => `${finding.kind}@${finding.line}:${finding.detail}`)
      .join(', ');
    contractError(
      'RULE_DOCUMENT_DUPLICATE_SURFACE',
      `Canonical rule tables are the only definition surface: ${detail}`
    );
  }

  return deepFreeze({ definitions, references });
}

function plainHtml(value) {
  return String(value || '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&ndash;|&mdash;/g, '—')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function findSecondaryFidelityRuleDefinitions(source) {
  const text = String(source || '');
  const findings = parseFidelityRuleDefinitions(text).map((definition) => ({
    kind: 'canonical-rule-table',
    line: definition.line,
    detail: definition.id,
  }));

  const markdownDefinitionRe = new RegExp(
    '^\\s*(?:[-*+]|[0-9]+[.)]|#{1,6})\\s+(?:\\*\\*|__|`)?(' +
      RULE_ID_SOURCE +
      ')(?:\\*\\*|__|`)?\\s*(?:—|–|-|:|：)\\s*\\S+',
    'gm'
  );
  for (const match of text.matchAll(markdownDefinitionRe)) {
    findings.push({
      kind: 'catalog-like-markdown-definition',
      line: text.slice(0, match.index).split(/\r?\n/).length,
      detail: match[1],
    });
  }

  for (const match of text.matchAll(/<details\b[^>]*>[\s\S]*?<\/details>/gi)) {
    const summary = match[0].match(/<summary\b[^>]*>([\s\S]*?)<\/summary>/i)?.[1] || '';
    const summaryText = plainHtml(summary);
    const catalogTitle = /自动(?:硬)?门槛|收敛标准|规则目录/.test(summaryText);
    if (catalogTitle && /<(?:ol|table)\b/i.test(match[0])) {
      findings.push({
        kind: 'html-rule-catalog',
        line: text.slice(0, match.index).split(/\r?\n/).length,
        detail: summaryText,
      });
    }
  }

  return findings.sort((left, right) => left.line - right.line || left.kind.localeCompare(right.kind));
}

export function assertNoSecondaryFidelityRuleDefinitions(source, label) {
  const findings = findSecondaryFidelityRuleDefinitions(source);
  if (!findings.length) return findings;
  const details = findings
    .slice(0, 8)
    .map((finding) => `${finding.kind}@${finding.line}:${finding.detail}`)
    .join(', ');
  contractError(
    'SECONDARY_RULE_CATALOG_FORBIDDEN',
    `${label} must reference docs/fidelity-loop-rules.md instead of redefining its catalog: ${details}`
  );
}
