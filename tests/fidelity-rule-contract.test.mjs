import assert from 'node:assert/strict';
import test from 'node:test';

import {
  FIDELITY_RULE_CONTRACT,
  assertNoSecondaryFidelityRuleDefinitions,
  extractFidelityRuleReferences,
  findSecondaryFidelityRuleDefinitions,
  parseFidelityRuleDefinitions,
  validateFidelityRuleContract,
  validateFidelityRuleDocument,
} from '../scripts/lib/fidelity-rule-contract.mjs';

const SMALL_CONTRACT = Object.freeze({
  enforcements: Object.freeze({ G1: 'hard-gate', T1: 'manual' }),
  aliases: Object.freeze({ G9: 'G1' }),
  featureMappings: Object.freeze({ text: Object.freeze(['T1']) }),
  codeRuleIds: Object.freeze(['G1']),
});

function smallDocument({ g1 = 'hard-gate', extra = '', duplicate = '' } = {}) {
  return `
| 规则 | 执行方式 | 说明 |
| --- | --- | --- |
| \`G1\` | ${g1} | automatic gate |
| T1 | manual | text with \`left|right\` evidence |
${duplicate}

The procedure references G1, T1, and legacy alias G9. ${extra}
`;
}

test('default fidelity rule contract preserves the complete catalog and feature mappings', () => {
  assert.equal(Object.keys(FIDELITY_RULE_CONTRACT.enforcements).length, 108);
  assert.equal(FIDELITY_RULE_CONTRACT.enforcements.T21, 'quantified-audit');
  assert.equal(FIDELITY_RULE_CONTRACT.enforcements.G11, 'build-gate');
  assert.equal(FIDELITY_RULE_CONTRACT.enforcements.G12, 'hard-gate');
  assert.equal(FIDELITY_RULE_CONTRACT.enforcements.B15, 'conditional-gate');
  assert.equal(FIDELITY_RULE_CONTRACT.enforcements.B16, 'conditional-gate');
  assert.equal(FIDELITY_RULE_CONTRACT.enforcements.A10, 'conditional-gate');
  assert.equal(FIDELITY_RULE_CONTRACT.enforcements.B14, 'manual');
  assert.equal(FIDELITY_RULE_CONTRACT.enforcements.L11, 'quantified-audit');
  assert.equal(FIDELITY_RULE_CONTRACT.enforcements.T14, 'manual');
  assert.equal(FIDELITY_RULE_CONTRACT.enforcements.T12, 'manual');
  assert.equal(FIDELITY_RULE_CONTRACT.enforcements.T16, 'manual');
  assert.equal(FIDELITY_RULE_CONTRACT.enforcements.T17, 'manual');
  assert.equal(FIDELITY_RULE_CONTRACT.enforcements.I11, 'manual');
  assert.deepEqual(FIDELITY_RULE_CONTRACT.featureMappings['visible-short-node'], ['T14']);
  assert.deepEqual(FIDELITY_RULE_CONTRACT.featureMappings['visible-node-face'], ['B15', 'T13', 'T21']);
  assert.deepEqual(FIDELITY_RULE_CONTRACT.featureMappings['hidden-anchor'], ['B7', 'T12']);
  assert.deepEqual(FIDELITY_RULE_CONTRACT.featureMappings['specified-label-weight'], ['B14', 'T16']);
  assert.deepEqual(FIDELITY_RULE_CONTRACT.featureMappings['semantic-annotation'], ['A10', 'B16', 'T17']);
  assert.equal(FIDELITY_RULE_CONTRACT.enforcements.T18, 'conditional-gate');
  assert.equal(FIDELITY_RULE_CONTRACT.enforcements.T19, 'build-gate');
  assert.equal(FIDELITY_RULE_CONTRACT.enforcements.T20, 'manual');
  assert.deepEqual(FIDELITY_RULE_CONTRACT.featureMappings['measured-label-position'], ['T18', 'T19']);
  assert.deepEqual(FIDELITY_RULE_CONTRACT.featureMappings['ambiguous-label-slot'], ['T20']);
  assert.deepEqual(FIDELITY_RULE_CONTRACT.aliases, {});
});

test('Markdown rule tables are the single definition surface', () => {
  const definitions = parseFidelityRuleDefinitions(smallDocument());
  assert.deepEqual(
    definitions.map(({ id, enforcement }) => ({ id, enforcement })),
    [
      { id: 'G1', enforcement: 'hard-gate' },
      { id: 'T1', enforcement: 'manual' },
    ]
  );
  const validated = validateFidelityRuleDocument(smallDocument(), SMALL_CONTRACT);
  assert.deepEqual(validated.references, ['G1', 'G9', 'T1']);
});

test('rule document validation rejects duplicate definitions', () => {
  const duplicate = `
| 规则 | 执行方式 | 说明 |
| --- | --- | --- |
| G1 | hard-gate | duplicate |
`;
  assert.throws(
    () => validateFidelityRuleDocument(smallDocument({ duplicate }), SMALL_CONTRACT),
    (error) => error.code === 'RULE_DOCUMENT_DUPLICATE' && /G1/.test(error.message)
  );
  assert.throws(
    () => validateFidelityRuleDocument(smallDocument({ extra: '\n- G1 — duplicate prose definition' }), SMALL_CONTRACT),
    (error) => error.code === 'RULE_DOCUMENT_DUPLICATE_SURFACE' && /G1/.test(error.message)
  );
});

test('rule document validation rejects enforcement drift and unknown references', () => {
  assert.throws(
    () => validateFidelityRuleDocument(smallDocument({ g1: 'manual' }), SMALL_CONTRACT),
    (error) => error.code === 'RULE_DOCUMENT_ENFORCEMENT_DRIFT' && /G1/.test(error.message)
  );
  assert.throws(
    () => validateFidelityRuleDocument(smallDocument({ extra: 'G2 is not defined.' }), SMALL_CONTRACT),
    (error) => error.code === 'RULE_DOCUMENT_REFERENCE_UNKNOWN' && /G2/.test(error.message)
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
    () => assertNoSecondaryFidelityRuleDefinitions(
      '<details><summary>自动硬门槛 G1–G12</summary><ol><li>another definition</li></ol></details>',
      'flowchart.html'
    ),
    (error) => error.code === 'SECONDARY_RULE_CATALOG_FORBIDDEN'
  );
});
