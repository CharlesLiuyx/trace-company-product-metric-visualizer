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
  catalogFeatureMappings,
} from '../scripts/lib/fidelity-rules-catalog.mjs';
import {
  GENERATED_BEGIN,
  GENERATED_END,
  renderFidelityRulesSection,
  validateFidelityRulesDocument,
} from '../scripts/lib/fidelity-rules-doc.mjs';

const SMALL_CONTRACT = Object.freeze({
  enforcements: Object.freeze({ G1: 'hard-gate', T1: 'manual' }),
  aliases: Object.freeze({ G9: 'G1' }),
  featureMappings: Object.freeze({ text: Object.freeze(['T1']) }),
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

test('default fidelity rule contract preserves the machine-gate catalog and feature mappings', () => {
  assert.equal(Object.keys(FIDELITY_RULE_CONTRACT.enforcements).length, 25);
  assert.equal(FIDELITY_RULES.length, 25);
  assert.equal(FIDELITY_RULE_CONTRACT.enforcements.G1, 'hard-gate');
  assert.equal(FIDELITY_RULE_CONTRACT.enforcements.G3d, 'hard-gate');
  assert.equal(FIDELITY_RULE_CONTRACT.enforcements.G4, 'hard-gate');
  assert.equal(FIDELITY_RULE_CONTRACT.enforcements.G8, 'hard-gate');
  assert.equal(FIDELITY_RULE_CONTRACT.enforcements.G11, 'build-gate');
  assert.equal(FIDELITY_RULE_CONTRACT.enforcements.G12, 'hard-gate');
  assert.equal(FIDELITY_RULE_CONTRACT.enforcements.B6, 'conditional-gate');
  assert.equal(FIDELITY_RULE_CONTRACT.enforcements.B15, 'conditional-gate');
  assert.equal(FIDELITY_RULE_CONTRACT.enforcements.T22, 'build-gate');
  assert.equal(FIDELITY_RULE_CONTRACT.enforcements.T6, 'quantified-audit');
  assert.equal(FIDELITY_RULE_CONTRACT.enforcements.T7, 'conditional-gate');
  assert.equal(FIDELITY_RULE_CONTRACT.enforcements.A6, 'conditional-gate');
  assert.equal(FIDELITY_RULE_CONTRACT.enforcements.A10, 'conditional-gate');
  assert.equal(FIDELITY_RULE_CONTRACT.enforcements.I12, 'quantified-audit');
  assert.equal(FIDELITY_RULE_CONTRACT.enforcements.T18, 'conditional-gate');
  // Feature rules still compiled by VerificationPlan or checked by close-out.
  assert.equal(FIDELITY_RULE_CONTRACT.enforcements.T19, 'build-gate');
  assert.equal(FIDELITY_RULE_CONTRACT.enforcements.T23, 'build-gate');
  assert.equal(FIDELITY_RULE_CONTRACT.enforcements.B16, 'conditional-gate');
  for (const id of ['B14', 'T14', 'T16', 'T17', 'T20']) {
    assert.equal(FIDELITY_RULE_CONTRACT.enforcements[id], 'manual', id);
  }
  // Deleted IDs are gone for good and are never reused.
  for (const id of ['G3a', 'G5', 'G9', 'G10', 'B3', 'B5', 'B8', 'L11', 'L15', 'R3', 'T13', 'T21', 'Z5', 'I11']) {
    assert.equal(FIDELITY_RULE_CONTRACT.enforcements[id], undefined, id);
  }
  assert.deepEqual(FIDELITY_RULE_CONTRACT.featureMappings, {
    'aligned-side-label-column': ['T6'],
    'ambiguous-label-slot': ['T20'],
    'annotation-near-label': ['A6'],
    'centered-side-label': ['T7'],
    'measured-label-position': ['T18', 'T19'],
    'paired-node-annotation': ['I12'],
    'semantic-annotation': ['A10', 'B16', 'T17'],
    'specified-label-weight': ['B14', 'T16'],
    text: ['B6'],
    'visible-interface': ['G12'],
    'visible-node-face': ['B15'],
    'visible-short-node': ['T14'],
    'zero-paint-node-slot': ['T23'],
  });
  assert.deepEqual(FIDELITY_RULE_CONTRACT.aliases, {});
});

test('contract registries are derived from the structured catalog', () => {
  assert.deepEqual(
    Object.fromEntries(
      Object.entries(catalogEnforcements()).sort(([left], [right]) => left.localeCompare(right))
    ),
    FIDELITY_RULE_CONTRACT.enforcements
  );
  assert.deepEqual(catalogFeatureMappings(), FIDELITY_RULE_CONTRACT.featureMappings);
  for (const entry of FIDELITY_RULES) {
    assert.ok(entry.title.trim(), `${entry.id} has a title`);
  }
});

test('generated document validates as fresh and reference-complete', () => {
  const document = generatedDocument();
  const validated = validateFidelityRulesDocument(document);
  assert.equal(validated.ruleCount, 25);
  assert.ok(validated.references.includes('G1'));
  assert.ok(validated.references.includes('B15'));
  assert.ok(!validated.references.includes('T21'));
});

test('stale or tampered generated sections are rejected', () => {
  const tampered = generatedDocument().replace('#### <a id="rule-g1"></a>G1 · hard-gate ·', '#### <a id="rule-g1"></a>G1 · manual ·');
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

test('feature and executable mappings cannot reference unknown rules', () => {
  assert.throws(
    () => validateFidelityRuleContract({ ...SMALL_CONTRACT, featureMappings: { text: ['T2'] } }),
    (error) => error.code === 'RULE_FEATURE_UNKNOWN'
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
