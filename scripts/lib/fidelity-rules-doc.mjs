// Renders the generated rule-catalog section of docs/fidelity-loop-rules.md
// from the structured catalog, and validates that the committed document is
// fresh. The Markdown between the markers is a generated view; the catalog
// module is the rule-semantics SSOT.
import { FIDELITY_RULES } from './fidelity-rules-catalog.mjs';
import {
  FIDELITY_RULE_CONTRACT,
  extractFidelityRuleReferences,
  findSecondaryFidelityRuleDefinitions,
} from './fidelity-rule-contract.mjs';

export const GENERATED_BEGIN = '<!-- fidelity-rules:generated:begin -->';
export const GENERATED_END = '<!-- fidelity-rules:generated:end -->';

const ENTRY_FIELDS = Object.freeze([
  ['trigger', '触发'],
  ['check', '检查'],
  ['pass', '通过'],
  ['evidence', '证据'],
  ['rationale', '理由'],
]);

function ruleAnchor(id) {
  return `rule-${id.toLowerCase()}`;
}

function ruleLink(id) {
  return `[${id}](#${ruleAnchor(id)})`;
}

function ruleEntry(entry) {
  const lines = [`#### <a id="${ruleAnchor(entry.id)}"></a>${entry.id} · ${entry.enforcement} · ${entry.title}`, ''];
  for (const [field, label] of ENTRY_FIELDS) {
    if (entry[field]) lines.push(`- ${label}：${entry[field]}`);
  }
  return lines;
}

export function renderFidelityRulesSection(rules = FIDELITY_RULES) {
  const lines = [
    '_本目录区由 `pnpm update:fidelity-rules-doc` 从 `scripts/lib/fidelity-rules-catalog.mjs`',
    '生成；不要手改，改规则请编辑 catalog 后重新生成。_',
    '',
    '| 规则 | 执行方式 | 名称 |',
    '| --- | --- | --- |',
    ...rules.map((entry) => `| ${ruleLink(entry.id)} | \`${entry.enforcement}\` | ${entry.title} |`),
  ];
  for (const entry of rules) {
    lines.push('', ...ruleEntry(entry));
  }
  return lines.join('\n');
}

function documentError(code, message) {
  const error = new Error(message);
  error.code = code;
  throw error;
}

export function splitFidelityRulesDocument(source) {
  const text = String(source || '');
  const beginIndex = text.indexOf(GENERATED_BEGIN);
  const endIndex = text.indexOf(GENERATED_END);
  if (beginIndex < 0 || endIndex < 0 || endIndex < beginIndex) {
    documentError(
      'RULE_DOCUMENT_MARKERS_MISSING',
      'docs/fidelity-loop-rules.md must contain exactly one generated rule-catalog block'
    );
  }
  if (
    text.indexOf(GENERATED_BEGIN, beginIndex + GENERATED_BEGIN.length) >= 0 ||
    text.indexOf(GENERATED_END, endIndex + GENERATED_END.length) >= 0
  ) {
    documentError('RULE_DOCUMENT_MARKERS_DUPLICATE', 'Generated rule-catalog markers must appear exactly once');
  }
  return {
    handwritten: `${text.slice(0, beginIndex)}\n${text.slice(endIndex + GENERATED_END.length)}`,
    generated: text.slice(beginIndex + GENERATED_BEGIN.length, endIndex).trim(),
  };
}

export function validateFidelityRulesDocument(source, options = {}) {
  const rules = options.rules || FIDELITY_RULES;
  const contract = options.contract || FIDELITY_RULE_CONTRACT;
  const { handwritten, generated } = splitFidelityRulesDocument(source);

  const expected = renderFidelityRulesSection(rules).trim();
  if (generated !== expected) {
    documentError(
      'RULE_DOCUMENT_STALE',
      'Generated rule catalog is stale: run pnpm update:fidelity-rules-doc after editing the catalog'
    );
  }

  const stray = findSecondaryFidelityRuleDefinitions(handwritten);
  if (stray.length) {
    const detail = stray
      .slice(0, 8)
      .map((finding) => `${finding.kind}@${finding.line}:${finding.detail}`)
      .join(', ');
    documentError(
      'RULE_DOCUMENT_DUPLICATE_SURFACE',
      `The generated catalog is the only rule-definition surface: ${detail}`
    );
  }

  const references = extractFidelityRuleReferences(source);
  const unresolved = references.filter(
    (id) => !(id in contract.enforcements) && !(id in contract.aliases)
  );
  if (unresolved.length) {
    documentError('RULE_DOCUMENT_REFERENCE_UNKNOWN', `Fidelity rules reference undefined IDs: ${unresolved.join(', ')}`);
  }

  return Object.freeze({ ruleCount: rules.length, references });
}

export function replaceGeneratedSection(source, rules = FIDELITY_RULES) {
  const text = String(source || '');
  const beginIndex = text.indexOf(GENERATED_BEGIN);
  const endIndex = text.indexOf(GENERATED_END);
  if (beginIndex < 0 || endIndex < 0 || endIndex < beginIndex) {
    documentError(
      'RULE_DOCUMENT_MARKERS_MISSING',
      'docs/fidelity-loop-rules.md must contain the generated rule-catalog markers'
    );
  }
  const before = text.slice(0, beginIndex + GENERATED_BEGIN.length);
  const after = text.slice(endIndex);
  return `${before}\n\n${renderFidelityRulesSection(rules)}\n\n${after}`;
}
