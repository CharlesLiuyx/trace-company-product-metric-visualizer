import { catalogEnforcements, catalogFeatureMappings } from './fidelity-rules-catalog.mjs';

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

// Enforcement and feature registries are derived from the structured rule
// catalog (scripts/lib/fidelity-rules-catalog.mjs), which is the single
// registration surface for rule semantics.
export const FIDELITY_RULE_ENFORCEMENTS = catalogEnforcements();

// Aliases are intentionally empty until two existing rules are proven to have
// the same semantics. The validator keeps any future alias one-way and
// prevents an old ID from silently acquiring a new meaning.
export const FIDELITY_RULE_ALIASES = Object.freeze({});

export const FIDELITY_FEATURE_RULE_IDS = catalogFeatureMappings();

// This allow-list is deliberately smaller than the full catalog. The
// architecture verifier scans executable scripts (excluding this registry)
// and rejects any rule reference that is not declared here first.
export const FIDELITY_CODE_RULE_IDS = Object.freeze([
  'A6', 'A10',
  'B3', 'B5', 'B6', 'B14', 'B15', 'B16',
  'G1', 'G2', 'G3', 'G3d', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9', 'G10', 'G11', 'G12',
  'L11',
  'I12',
  'T6', 'T7', 'T13', 'T14', 'T16', 'T17', 'T18', 'T19', 'T20', 'T21', 'T22', 'T23',
  'Z2', 'Z5', 'Z6',
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
      ')(?:\\*\\*|__|`)?\\s*(?:—|–|-|:|：|·)\\s*\\S+',
    'gm'
  );
  for (const match of text.matchAll(markdownDefinitionRe)) {
    findings.push({
      kind: 'catalog-like-markdown-definition',
      line: text.slice(0, match.index).split(/\r?\n/).length,
      detail: match[1],
    });
  }

  // Generated per-rule anchors are exclusive to the generated catalog block.
  for (const match of text.matchAll(/<a id="rule-[a-z0-9]+"><\/a>/g)) {
    findings.push({
      kind: 'generated-rule-anchor',
      line: text.slice(0, match.index).split(/\r?\n/).length,
      detail: match[0],
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
