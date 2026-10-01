import assert from 'node:assert/strict';
import test from 'node:test';

import {
  FIDELITY_RULE_CONTRACT,
  extractFidelityRuleReferences,
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
  codeRuleIds: Object.freeze(['G1']),
});

function generatedDocument({ handwritten = '', generated = null } = {}) {
  const body = generated == null ? renderFidelityRulesSection() : generated;
  return [
    '# 保真循环规则',
    '',
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
  assert.equal(Object.hasOwn(FIDELITY_RULE_CONTRACT, 'aliases'), false);
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

test('the generated section validates as fresh', () => {
  const validated = validateFidelityRulesDocument(generatedDocument({ handwritten: '\nHandwritten principles may cite G1 and B15.\n' }));
  assert.equal(validated.ruleCount, 17);
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

test('executable rule references cannot name unknown rules or retired enforcements', () => {
  assert.deepEqual(validateFidelityRuleContract(SMALL_CONTRACT).codeRuleIds, ['G1']);
  assert.throws(
    () => validateFidelityRuleContract({ ...SMALL_CONTRACT, enforcements: { G1: 'manual' } }),
    (error) => error.code === 'RULE_ENFORCEMENT_INVALID'
  );
  assert.throws(
    () => validateFidelityRuleContract({ ...SMALL_CONTRACT, codeRuleIds: ['G2'] }),
    (error) => error.code === 'RULE_CODE_UNKNOWN'
  );
});

test('rule references are extracted for the executable-script parity check', () => {
  assert.deepEqual(extractFidelityRuleReferences('Run G1, G3d and G12; not CB-043 or FB.'), ['G1', 'G12', 'G3d']);
});
