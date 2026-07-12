import test from 'node:test';
import assert from 'node:assert/strict';
import {
  createFidelityResult,
  digestFidelityValue,
} from '../scripts/lib/fidelity-result.mjs';

const digest = (value) => digestFidelityValue({ value });

function interfaceSide() {
  return {
    nodeBbox: { left: 10, right: 20, top: 30, bottom: 50 },
    unionIntervals: [{ top: 30, bottom: 50 }],
    linkIntervals: [{ linkId: 'revenue->profit#0', top: 30, bottom: 50 }],
  };
}

function matrix(overrides = {}) {
  const row = {
    id: 'revenue:right',
    node: 'revenue',
    side: 'right',
    coverageIntent: 'reference',
    reference: interfaceSide(),
    candidate: interfaceSide(),
    deltas: { top: 0, bottom: 0, center: 0, width: 0 },
    endpointStatus: 'passed',
    tangentStatus: 'passed',
    result: 'passed',
    evidenceDigests: {
      referenceCrop: digest('reference'),
      audit: digest('audit'),
      contactSheet: digest('contact-sheet'),
    },
    ...(overrides.row || {}),
  };
  return {
    schemaVersion: 1,
    protocol: 'interface-matrix/v1',
    expectedInterfaceIds: overrides.expectedInterfaceIds || ['revenue:right'],
    rows: overrides.rows || [row],
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
      requiredChecks: [
        { id: 'adapter:data-consistency', enforcement: 'build-gate', localeScope: 'global', evidenceKind: 'dataset-consistency', objectIds: [] },
        { id: 'adapter:render-fidelity', enforcement: 'hard-gate', localeScope: 'required-locales', evidenceKind: 'fidelity-run', objectIds: [] },
        { id: 'adapter:manual-visual-closure', enforcement: 'manual', localeScope: 'required-locales', evidenceKind: 'manual-decision', objectIds: [] },
      ],
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
    checkResults: [
      { checkId: 'adapter:data-consistency', status: 'passed', source: 'automatic', objectIds: [], evidenceDigests: [digest('dataset-verification')] },
      { checkId: 'adapter:render-fidelity', locale: 'en', status: 'passed', source: 'automatic', objectIds: [], evidenceDigests: [digest('automatic-en')] },
      { checkId: 'adapter:render-fidelity', locale: 'zh', status: 'passed', source: 'automatic', objectIds: [], evidenceDigests: [digest('automatic-zh')] },
      { checkId: 'adapter:manual-visual-closure', locale: 'en', status: 'passed', source: 'manual', objectIds: [], evidenceDigests: [digest('manual-en')] },
      { checkId: 'adapter:manual-visual-closure', locale: 'zh', status: 'passed', source: 'manual', objectIds: [], evidenceDigests: [digest('manual-zh')] },
    ],
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
  secondInput.checkResults.reverse();
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

test('a geometry Matrix derives its summary from rows and blocks missing identities', () => {
  const result = createFidelityResult(fixture({
    interfaceMatrix: matrix({ expectedInterfaceIds: ['cost:right', 'revenue:right'] }),
  }));
  assert.equal(result.status, 'blocked');
  assert.ok(result.blockers.some((item) => item.code === 'INTERFACE_MATRIX_INCOMPLETE'));
  assert.ok(result.blockers.some((item) => item.code === 'INTERFACE_MATRIX_IDENTITY_MISMATCH'));
  assert.ok(result.blockers.some((item) => item.code === 'INTERFACE_MATRIX_NOT_CLOSED'));
});

test('missing required check result blocks acceptance', () => {
  const input = fixture();
  input.checkResults = input.checkResults.filter((item) => !(item.checkId === 'adapter:manual-visual-closure' && item.locale === 'zh'));
  const result = createFidelityResult(input);
  assert.equal(result.status, 'blocked');
  assert.ok(result.blockers.some((item) =>
    item.code === 'REQUIRED_CHECK_MISSING' && item.subject === 'adapter:manual-visual-closure@zh'
  ));
});

test('summary-only Matrix, full-face intent, and documented exceptions require structured rows/provenance', () => {
  assert.throws(
    () => createFidelityResult(fixture({ interfaceMatrix: { summary: {} } })),
    (error) => error.code === 'INTERFACE_MATRIX_INVALID'
  );
  assert.throws(
    () => createFidelityResult(fixture({ interfaceMatrix: matrix({ row: { coverageIntent: 'full-face' } }) })),
    (error) => error.code === 'INTERFACE_MATRIX_FULL_FACE_PROVENANCE_REQUIRED'
  );
  assert.throws(
    () => createFidelityResult(fixture({ interfaceMatrix: matrix({ row: { result: 'documented-exception' } }) })),
    (error) => error.code === 'INTERFACE_MATRIX_EXCEPTION_PROVENANCE_REQUIRED'
  );
});

test('a passing row cannot hide failed or unscored endpoint geometry', () => {
  const result = createFidelityResult(fixture({
    interfaceMatrix: matrix({
      row: { endpointStatus: 'failed', tangentStatus: 'not-scored', result: 'passed' },
    }),
  }));
  assert.equal(result.status, 'blocked');
  assert.ok(result.blockers.some((item) => item.code === 'INTERFACE_MATRIX_ENDPOINT_NOT_PASSED'));
  assert.ok(result.blockers.some((item) => item.code === 'INTERFACE_MATRIX_TANGENT_NOT_PASSED'));
});

test('render-engine changes require a full Matrix while text-only changes do not', () => {
  const engineInput = fixture();
  engineInput.verificationPlan.changeImpact = ['render-engine'];
  engineInput.interfaceMatrix = null;
  const engineResult = createFidelityResult(engineInput);
  assert.equal(engineResult.status, 'blocked');
  assert.ok(engineResult.blockers.some((item) => item.code === 'INTERFACE_MATRIX_REQUIRED'));

  const textInput = fixture();
  textInput.verificationPlan.changeImpact = ['display-text-only'];
  textInput.interfaceMatrix = null;
  const textResult = createFidelityResult(textInput);
  assert.equal(textResult.status, 'accepted');
});
