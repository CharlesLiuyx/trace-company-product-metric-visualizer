import assert from 'node:assert/strict';
import test from 'node:test';

import {
  FIDELITY_RULE_CONTRACT,
  assertNoSecondaryFidelityRuleDefinitions,
  extractFidelityRuleReferences,
  findSecondaryFidelityRuleDefinitions,
  parseFidelityRuleDefinitions,
  validateFidelityRuleContract,
} from '../scripts/lib/fidelity-rule-contract.mjs';
import {
  FIDELITY_RULES,
  catalogEnforcements,
} from '../scripts/lib/fidelity-rules-catalog.mjs';
import {
  GENERATED_BEGIN,
  GENERATED_END,
  renderFidelityRulesSection,
  validateFidelityRulesDocument,
} from '../scripts/lib/fidelity-rules-doc.mjs';

const SMALL_CONTRACT = Object.freeze({
  enforcements: Object.freeze({ G1: 'hard-gate', T1: 'conditional-gate' }),
  aliases: Object.freeze({ G9: 'G1' }),
  codeRuleIds: Object.freeze(['G1']),
});

function generatedDocument({ handwritten = '', generated = null } = {}) {
  const body = generated == null ? renderFidelityRulesSection() : generated;
  return [
    '# 保真循环规则',
    '',
    'REG-001 与 FB-001 保留命名空间。',
    handwritten,
    GENERATED_BEGIN,
    '',
    body,
    '',
    GENERATED_END,
    '',
  ].join('\n');
}

test('default fidelity rule contract keeps only rules with a real execution point', () => {
  assert.equal(Object.keys(FIDELITY_RULE_CONTRACT.enforcements).length, 17);
  assert.equal(FIDELITY_RULES.length, 17);
  for (const id of ['G1', 'G2', 'G3', 'G3d', 'G4', 'G8', 'G12', 'B6', 'B15']) {
    assert.equal(FIDELITY_RULE_CONTRACT.enforcements[id], 'hard-gate', id);
  }
  for (const id of ['G11', 'T22']) {
    assert.equal(FIDELITY_RULE_CONTRACT.enforcements[id], 'build-gate', id);
  }
  // Attribute-driven audits, plus the opt-in T18 label position.
  for (const id of ['A6', 'A10', 'I12', 'T6', 'T7', 'T18']) {
    assert.equal(FIDELITY_RULE_CONTRACT.enforcements[id], 'conditional-gate', id);
  }
  // Deleted IDs are gone for good and are never reused.
  for (const id of [
    'G3a', 'G5', 'G9', 'G10', 'B3', 'B5', 'B8', 'L11', 'L15', 'R3', 'T13', 'T21', 'Z5', 'I11',
    'T14', 'T16', 'T17', 'T19', 'T20', 'T23', 'B14', 'B16',
  ]) {
    assert.equal(FIDELITY_RULE_CONTRACT.enforcements[id], undefined, id);
  }
  assert.equal(Object.hasOwn(FIDELITY_RULE_CONTRACT, 'featureMappings'), false);
  assert.deepEqual(FIDELITY_RULE_CONTRACT.aliases, {});
});

test('contract registries are derived from the structured catalog', () => {
  assert.deepEqual(
    Object.fromEntries(
      Object.entries(catalogEnforcements()).sort(([left], [right]) => left.localeCompare(right))
    ),
    FIDELITY_RULE_CONTRACT.enforcements
  );
  for (const entry of FIDELITY_RULES) {
    assert.ok(entry.title.trim(), `${entry.id} has a title`);
  }
});

test('generated document validates as fresh and reference-complete', () => {
  const document = generatedDocument();
  const validated = validateFidelityRulesDocument(document);
  assert.equal(validated.ruleCount, 17);
  assert.ok(validated.references.includes('G1'));
  assert.ok(validated.references.includes('B15'));
  assert.ok(!validated.references.includes('T21'));
});

test('stale or tampered generated sections are rejected', () => {
  const tampered = generatedDocument().replace('#### <a id="rule-g1"></a>G1 · hard-gate ·', '#### <a id="rule-g1"></a>G1 · build-gate ·');
  assert.throws(
    () => validateFidelityRulesDocument(tampered),
    (error) => error.code === 'RULE_DOCUMENT_STALE'
  );
  assert.throws(
    () => validateFidelityRulesDocument('# no markers here'),
    (error) => error.code === 'RULE_DOCUMENT_MARKERS_MISSING'
  );
});

test('handwritten sections cannot define rules outside the generated catalog', () => {
  const withTable = generatedDocument({
    handwritten: '\n| 规则 | 执行方式 | 说明 |\n| --- | --- | --- |\n| G1 | hard-gate | duplicate |\n',
  });
  assert.throws(
    () => validateFidelityRulesDocument(withTable),
    (error) => error.code === 'RULE_DOCUMENT_DUPLICATE_SURFACE'
  );
  const withHeading = generatedDocument({ handwritten: '\n#### T18 · conditional-gate duplicate\n' });
  assert.throws(
    () => validateFidelityRulesDocument(withHeading),
    (error) => error.code === 'RULE_DOCUMENT_DUPLICATE_SURFACE'
  );
  const withAnchor = generatedDocument({ handwritten: '\nsee <a id="rule-t18"></a> here\n' });
  assert.throws(
    () => validateFidelityRulesDocument(withAnchor),
    (error) => error.code === 'RULE_DOCUMENT_DUPLICATE_SURFACE'
  );
});

test('unknown references anywhere in the document are rejected', () => {
  const withUnknown = generatedDocument({ handwritten: '\nT99 is not a rule.\n' });
  assert.throws(
    () => validateFidelityRulesDocument(withUnknown),
    (error) => error.code === 'RULE_DOCUMENT_REFERENCE_UNKNOWN' && /T99/.test(error.message)
  );
});

test('legacy rule tables are still detected as definition surfaces', () => {
  const table = '\n| 规则 | 执行方式 | 说明 |\n| --- | --- | --- |\n| G1 | hard-gate | gate |\n';
  const definitions = parseFidelityRuleDefinitions(table);
  assert.deepEqual(
    definitions.map(({ id, enforcement }) => ({ id, enforcement })),
    [{ id: 'G1', enforcement: 'hard-gate' }]
  );
});

test('aliases must point directly to a canonical rule without replacing it', () => {
  const valid = validateFidelityRuleContract(SMALL_CONTRACT);
  assert.equal(valid.aliases.G9, 'G1');
  assert.throws(
    () => validateFidelityRuleContract({ ...SMALL_CONTRACT, aliases: { G1: 'T1' } }),
    (error) => error.code === 'RULE_ALIAS_COLLISION'
  );
  assert.throws(
    () => validateFidelityRuleContract({ ...SMALL_CONTRACT, aliases: { G9: 'G2' } }),
    (error) => error.code === 'RULE_ALIAS_TARGET_INVALID'
  );
});

test('executable rule references cannot name unknown rules or retired enforcements', () => {
  assert.throws(
    () => validateFidelityRuleContract({ ...SMALL_CONTRACT, enforcements: { G1: 'manual' } }),
    (error) => error.code === 'RULE_ENFORCEMENT_INVALID'
  );
  assert.throws(
    () => validateFidelityRuleContract({ ...SMALL_CONTRACT, codeRuleIds: ['G2'] }),
    (error) => error.code === 'RULE_CODE_UNKNOWN'
  );
});

test('secondary documents may reference rules but cannot define another catalog', () => {
  const referenceOnly = 'Run G1–G12 here; definitions remain in docs/fidelity-loop-rules.md.';
  assert.deepEqual(findSecondaryFidelityRuleDefinitions(referenceOnly), []);
  assert.deepEqual(extractFidelityRuleReferences(referenceOnly), ['G1', 'G12']);

  assert.throws(
    () => assertNoSecondaryFidelityRuleDefinitions('- **G1 — parallel preparation.**', 'workflow.md'),
    (error) => error.code === 'SECONDARY_RULE_CATALOG_FORBIDDEN'
  );
  assert.throws(
    () => assertNoSecondaryFidelityRuleDefinitions('#### T18 · conditional-gate copied entry', 'workflow.md'),
    (error) => error.code === 'SECONDARY_RULE_CATALOG_FORBIDDEN'
  );
  assert.throws(
    () => assertNoSecondaryFidelityRuleDefinitions(
      '<details><summary>自动硬门槛 G1–G12</summary><ol><li>another definition</li></ol></details>',
      'flowchart.html'
    ),
    (error) => error.code === 'SECONDARY_RULE_CATALOG_FORBIDDEN'
  );
});
