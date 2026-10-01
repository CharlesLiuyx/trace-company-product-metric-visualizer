import test from 'node:test';
import assert from 'node:assert/strict';
import {
  FIDELITY_RESULT_PROTOCOL,
  createFidelityResult,
  digestFidelityValue,
  summarizeFidelityResult,
} from '../scripts/lib/fidelity-result.mjs';

const digest = (value) => digestFidelityValue({ value });

function evidence(locale, overrides = {}) {
  return {
    locale,
    manifest: `output/compare/live-nation-fy25/01-baseline-review-candidate/${locale}/fidelity-run.json`,
    digest: digest(`evidence-${locale}`),
    candidateDigest: digest(`candidate-${locale}`),
    metrics: { similarity: 0.97, mae: 7.6, width: 2667, height: 1500 },
    gates: { purity: 'passed', interface: 'passed', 'node-paint': 'passed' },
    ...overrides,
  };
}

function input(overrides = {}) {
  return {
    buildId: 'build-live-nation-fy25',
    key: 'live-nation-fy25',
    adapter: 'income-statement',
    authoredDigest: digest('authored'),
    verificationPlanDigest: digest('plan'),
    requiredLocales: ['en', 'zh'],
    acceptance: {
      reviewer: 'human:reviewer',
      decision: 'accepted',
      note: 'Compared both locales with the Source',
      reviewedAt: '2026-10-01T08:00:00.000Z',
      previewId: '0b7f3c5e-1111-4222-8333-944445555666',
    },
    consistency: { status: 'passed', digest: digest('dataset-verification') },
    evidence: [evidence('zh'), evidence('en')],
    ...overrides,
  };
}

test('a short acceptance plus per-locale render evidence is the whole result', () => {
  const result = createFidelityResult(input());
  assert.equal(result.protocol, FIDELITY_RESULT_PROTOCOL);
  assert.equal(result.status, 'accepted');
  assert.deepEqual(Object.keys(result).sort(), [
    'acceptance', 'automatic', 'evidence', 'kind', 'protocol', 'resultDigest', 'schemaVersion', 'status', 'subject',
  ]);
  assert.deepEqual(result.evidence.map((item) => item.locale), ['en', 'zh']);
  assert.deepEqual(result.automatic.locales.map((item) => [item.locale, item.status, item.gates.interface]), [
    ['en', 'passed', 'passed'],
    ['zh', 'passed', 'passed'],
  ]);
  assert.equal(result.acceptance.previewId, '0b7f3c5e-1111-4222-8333-944445555666');
  const { resultDigest, ...content } = result;
  assert.equal(resultDigest, digestFidelityValue(content));
  // Deterministic: the same inputs in another order produce the same digest.
  assert.equal(createFidelityResult(input({ evidence: [evidence('en'), evidence('zh')] })).resultDigest, resultDigest);
});

test('the acceptance must be explicit and complete', () => {
  assert.throws(() => createFidelityResult(input({ acceptance: null })), (error) => error.code === 'ACCEPTANCE_REQUIRED');
  assert.throws(
    () => createFidelityResult(input({ acceptance: { ...input().acceptance, decision: 'rejected' } })),
    (error) => error.code === 'ACCEPTANCE_REQUIRED'
  );
  assert.throws(
    () => createFidelityResult(input({ acceptance: { ...input().acceptance, note: ' ' } })),
    (error) => error.code === 'ACCEPTANCE_INVALID'
  );
});

test('every required locale needs passing evidence and consistency must pass', () => {
  assert.throws(
    () => createFidelityResult(input({ evidence: [evidence('en')] })),
    (error) => error.code === 'EVIDENCE_LOCALE_MISSING' && /zh/.test(error.message)
  );
  assert.throws(
    () => createFidelityResult(input({ evidence: [evidence('en'), evidence('zh', { gates: { interface: 'failed' } })] })),
    (error) => error.code === 'EVIDENCE_GATE_FAILED'
  );
  assert.throws(
    () => createFidelityResult(input({ consistency: { status: 'failed', digest: digest('dataset-verification') } })),
    (error) => error.code === 'AUTOMATIC_CONSISTENCY_NOT_PASSED'
  );
  // Runs recorded before per-gate summaries carry only their evidence-ready verdict.
  const legacyRun = createFidelityResult(input({ evidence: [evidence('en', { gates: undefined }), evidence('zh')] }));
  assert.equal(legacyRun.automatic.locales[0].gates, null);
});

test('data-only Adapters close on consistency evidence alone', () => {
  const result = createFidelityResult(input({ adapter: 'revenue-metric', requiredLocales: ['en'], evidence: [] }));
  assert.deepEqual(result.evidence, []);
  assert.throws(
    () => createFidelityResult(input({ adapter: 'revenue-metric', evidence: [evidence('en')] })),
    (error) => error.code === 'ADAPTER_EVIDENCE_INVALID'
  );
});

test('summaries read v3 and historical v2 results alike', () => {
  const current = summarizeFidelityResult(createFidelityResult(input()));
  assert.deepEqual(current.locales.map((item) => [item.locale, item.status]), [['en', 'passed'], ['zh', 'passed']]);
  assert.equal(current.acceptance.reviewer, 'human:reviewer');

  const v2 = {
    schemaVersion: 2,
    protocol: 'fidelity-result/v2',
    kind: 'fidelity-result',
    status: 'accepted',
    subject: { buildId: 'build-x', key: 'x', adapter: 'income-statement', authoredDigest: digest('a'), verificationPlanDigest: digest('p') },
    verificationPlan: { digest: digest('p'), requiredLocales: ['en', 'zh'], changeImpact: ['geometry'], requiredChecks: [] },
    automaticEvidence: {
      consistency: { status: 'passed', digest: digest('c') },
      locales: [{ locale: 'en', status: 'passed', digest: digest('en') }],
    },
    checkResults: [],
    attestation: { reviewer: 'human:old', reviewedAt: '2026-09-01T00:00:00.000Z', decision: 'accepted' },
    regions: [],
    interfaceMatrix: null,
    attention: { status: 'closed', closureNote: 'closed' },
    blockers: [],
  };
  const legacy = summarizeFidelityResult(v2);
  assert.equal(legacy.protocol, 'fidelity-result/v2');
  assert.deepEqual(legacy.locales, [
    { locale: 'en', status: 'passed', digest: digest('en') },
    { locale: 'zh', status: 'missing', digest: null },
  ]);
  assert.equal(legacy.acceptance.reviewer, 'human:old');
});
