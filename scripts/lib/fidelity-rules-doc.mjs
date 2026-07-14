// Renders the generated rule-catalog section of docs/fidelity-loop-rules.md
// from the structured catalog, and validates that the committed document is
// fresh. The Markdown between the markers is a generated view; the catalog
// module is the rule-semantics SSOT.
import {
  FIDELITY_RULES,
  FIDELITY_RULE_SERIES,
  FIDELITY_RULE_STAGES,
  FIDELITY_RULE_TOPICS,
} from './fidelity-rules-catalog.mjs';
import {
  FIDELITY_RULE_CONTRACT,
  FIDELITY_RULE_ENFORCEMENT,
  extractFidelityRuleReferences,
  findSecondaryFidelityRuleDefinitions,
} from './fidelity-rule-contract.mjs';

export const GENERATED_BEGIN = '<!-- fidelity-rules:generated:begin -->';
export const GENERATED_END = '<!-- fidelity-rules:generated:end -->';

function ruleAnchor(id) {
  return `rule-${id.toLowerCase()}`;
}

function ruleLink(id) {
  return `[${id}](#${ruleAnchor(id)})`;
}

function indexTable(header, groups) {
  const lines = [`| ${header} | 规则 |`, '| --- | --- |'];
  for (const [label, ids] of groups) {
    if (!ids.length) continue;
    lines.push(`| ${label} | ${ids.map(ruleLink).join(' ')} |`);
  }
  return lines;
}

function ruleEntry(entry) {
  const lines = [`#### <a id="${ruleAnchor(entry.id)}"></a>${entry.id} · ${entry.enforcement}`, ''];
  const meta = [`阶段：${entry.stage}`, `主题：${entry.topics.join('、')}`];
  lines.push(`- ${meta.join(' · ')}`);
  if (entry.trigger) lines.push(`- 触发：${entry.trigger}`);
  if (entry.check) lines.push(`- 检查：${entry.check}`);
  if (entry.pass) lines.push(`- 通过：${entry.pass}`);
  if (entry.evidence) lines.push(`- 证据：${entry.evidence}`);
  if (entry.compensates.length) lines.push(`- 补偿：${entry.compensates.map(ruleLink).join('、')}`);
  if (entry.features.length) lines.push(`- feature：${entry.features.map((name) => `\`${name}\``).join('、')}`);
  if (entry.rationale) lines.push(`- 理由：${entry.rationale}`);
  if (entry.origin) lines.push(`- 来源：commit ${entry.origin}`);
  if (entry.status !== 'active') {
    lines.push(`- 状态：${entry.status}${entry.supersededBy ? `（由 ${ruleLink(entry.supersededBy)} 替代）` : ''}`);
  }
  return lines;
}

export function renderFidelityRulesSection(rules = FIDELITY_RULES) {
  const lines = [
    '_本目录区由 `pnpm update:fidelity-rules-doc` 从 `scripts/lib/fidelity-rules-catalog.mjs`',
    '生成；不要手改，改规则请编辑 catalog 后重新生成。_',
    '',
    '### 索引',
    '',
    '**按 sweep stage：**',
    '',
    ...indexTable(
      '阶段',
      FIDELITY_RULE_STAGES.map((stage) => [stage, rules.filter((entry) => entry.stage === stage).map((entry) => entry.id)])
    ),
    '',
    '**按主题：**',
    '',
    ...indexTable(
      '主题',
      FIDELITY_RULE_TOPICS.map((topic) => [topic, rules.filter((entry) => entry.topics.includes(topic)).map((entry) => entry.id)])
    ),
    '',
    '**按执行方式：**',
    '',
    ...indexTable(
      '类别',
      FIDELITY_RULE_ENFORCEMENT.map((enforcement) => [
        `\`${enforcement}\``,
        rules.filter((entry) => entry.enforcement === enforcement).map((entry) => entry.id),
      ])
    ),
  ];

  for (const [letter, series] of Object.entries(FIDELITY_RULE_SERIES)) {
    const seriesRules = rules.filter((entry) => entry.id[0] === letter);
    if (!seriesRules.length) continue;
    lines.push('', `### ${letter} 系列：${series.title}`, '');
    if (series.preamble) lines.push(series.preamble, '');
    for (const entry of seriesRules) {
      lines.push(...ruleEntry(entry), '');
    }
    while (lines[lines.length - 1] === '') lines.pop();
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
