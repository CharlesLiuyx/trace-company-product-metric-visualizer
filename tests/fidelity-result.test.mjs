import test from 'node:test';
import assert from 'node:assert/strict';
import {
  createFidelityResult,
  digestFidelityValue,
} from '../scripts/lib/fidelity-result.mjs';

const digest = (value) => digestFidelityValue({ value });

function matrix(overrides = {}) {
  return {
    summary: {
      expectedInterfaces: 10,
      auditedInterfaces: 10,
      passedInterfaces: 10,
      failedInterfaces: 0,
      documentedExceptions: 0,
      pendingInterfaces: 0,
      notScoredInterfaces: 0,
      ...overrides,
    },
  };
}

function acceptedAttestation(authoredDigest, verificationPlanDigest) {
  return {
    reviewer: 'human:workflow-reviewer',
    reviewedAt: '2026-07-11T06:30:00.000Z',
    decision: 'accepted',
    authoredDigest,
    verificationPlanDigest,
  };
}

function fixture(overrides = {}) {
  const authoredDigest = digest('authored-v1');
  const planDigest = digest('plan-v1');
  const base = {
    buildId: 'build-live-nation-fy25',
    key: 'live-nation-fy25',
    adapter: 'income-statement',
    authoredDigest,
    verificationPlan: {
      digest: planDigest,
      requiredLocales: ['en', 'zh'],
      changeImpact: ['new-dataset', 'geometry'],
    },
    automaticEvidence: {
      authoredDigest,
      verificationPlanDigest: planDigest,
      consistency: { status: 'passed', digest: digest('dataset-verification') },
      locales: [
        { locale: 'en', status: 'passed', digest: digest('automatic-en') },
        { locale: 'zh', status: 'passed', digest: digest('automatic-zh') },
      ],
    },
    attestation: acceptedAttestation(authoredDigest, planDigest),
    regions: [
      { id: 'REG-001', status: 'resolved', ruleIds: ['G12'] },
      { id: 'REG-002', status: 'resolved', ruleIds: ['B3', 'T7'] },
    ],
    attention: { status: 'closed', closureNote: 'No open red-box region remains.' },
    feedbackSummary: {
      openItems: [],
      automationUpgradesRequired: [],
    },
    riskChecks: [{
      id: 'B3-T7-side-label-center',
      status: 'passed',
      measurements: [
        { id: 'interest-expense', value: 1.5, operator: 'lte', threshold: 4, unit: 'px' },
      ],
    }],
    interfaceMatrix: matrix(),
  };
  return { ...base, ...overrides };
}

test('machine-green evidence without a human attestation stays review-pending', () => {
  const result = createFidelityResult(fixture({ attestation: null }));
  assert.equal(result.status, 'review-pending');
  assert.notEqual(result.status, 'accepted');
  assert.equal(result.blockers.length, 0);
});

test('Live Nation 38.5px and 43px side-label measurements block acceptance even if marked passed', () => {
  const result = createFidelityResult(fixture({
    riskChecks: [{
      id: 'B3-T7-side-label-center',
      status: 'passed',
      measurements: [
        { id: 'interest-expense', value: 38.5, operator: 'lte', threshold: 4, unit: 'px' },
        { id: 'other-income', value: 43, operator: 'lte', threshold: 4, unit: 'px' },
      ],
    }],
  }));
  assert.equal(result.status, 'blocked');
  assert.deepEqual(
    result.blockers.filter((item) => item.code === 'RISK_THRESHOLD_VIOLATION').map((item) => item.value),
    [38.5, 43]
  );
});

test('complete automatic, human, region, feedback, risk, and Matrix evidence is accepted deterministically', () => {
  const first = createFidelityResult(fixture());
  const secondInput = fixture();
  secondInput.regions.reverse();
  secondInput.automaticEvidence.locales.reverse();
  const second = createFidelityResult(secondInput);

  assert.equal(first.status, 'accepted');
  assert.match(first.resultDigest, /^sha256:[a-f0-9]{64}$/);
  assert.equal(second.resultDigest, first.resultDigest);
  assert.ok(Object.isFrozen(first));
});

test('automatic evidence bound to an old authored digest is rejected as stale', () => {
  const input = fixture();
  input.automaticEvidence = {
    ...input.automaticEvidence,
    authoredDigest: digest('authored-v0'),
  };
  assert.throws(
    () => createFidelityResult(input),
    (error) => error.code === 'STALE_AUTOMATIC_EVIDENCE'
  );
});

test('a geometry Matrix that does not close the seven-field identity blocks acceptance', () => {
  const result = createFidelityResult(fixture({
    interfaceMatrix: matrix({
      auditedInterfaces: 9,
      passedInterfaces: 8,
      pendingInterfaces: 1,
    }),
  }));
  assert.equal(result.status, 'blocked');
  assert.ok(result.blockers.some((item) => item.code === 'INTERFACE_MATRIX_INCOMPLETE'));
  assert.ok(result.blockers.some((item) => item.code === 'INTERFACE_MATRIX_PENDING'));
  assert.ok(result.blockers.some((item) => item.code === 'INTERFACE_MATRIX_NOT_CLOSED'));
});
