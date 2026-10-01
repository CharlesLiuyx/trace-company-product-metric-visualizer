import test from 'node:test';
import assert from 'node:assert/strict';
import {
  createCloseoutReport,
  renderLoopFidelitySummary,
  renderTaskInformation,
} from '../scripts/lib/build-report.mjs';
import {
  createFidelityResult,
  digestFidelityValue,
} from '../scripts/lib/fidelity-result.mjs';

const digest = (value) => digestFidelityValue({ value });

function inspection(overrides = {}) {
  return {
    buildId: 'build-live-nation-fy25',
    key: 'live-nation-fy25',
    adapter: 'income-statement',
    revision: 4,
    historicalState: 'SEALED',
    effectiveState: 'SEALED',
    fresh: true,
    reasons: [],
    staleArtifacts: [],
    digests: {
      source: digest('source'),
      authored: digest('authored'),
      closure: digest('closure'),
      seal: digest('seal'),
    },
    ...overrides,
  };
}

function evidence(locale) {
  return {
    locale,
    manifest: `output/compare/live-nation-fy25/01-baseline-review-candidate/fidelity-run-${locale}.json`,
    digest: digest(`automatic-${locale}`),
    candidateDigest: digest(`candidate-${locale}`),
    metrics: { similarity: 0.97, mae: 7.6, width: 2667, height: 1500 },
    gates: { purity: 'passed', interface: 'passed' },
  };
}

function fidelity() {
  return createFidelityResult({
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
      reviewedAt: '2026-07-11T08:00:00.000Z',
    },
    consistency: { status: 'passed', digest: digest('dataset-verification') },
    evidence: [evidence('en'), evidence('zh')],
  });
}

function report(input = {}) {
  return createCloseoutReport({
    inspection: inspection(),
    fidelityResult: fidelity(),
    ...input,
  });
}

function legacyV2FidelityResult({ status = 'accepted', locales = ['en', 'zh'] } = {}) {
  const content = {
    schemaVersion: 2,
    protocol: 'fidelity-result/v2',
    kind: 'fidelity-result',
    status,
    subject: {
      buildId: 'build-live-nation-fy25',
      key: 'live-nation-fy25',
      adapter: 'income-statement',
      authoredDigest: digest('authored'),
      verificationPlanDigest: digest('plan'),
    },
    verificationPlan: { digest: digest('plan'), requiredLocales: ['en', 'zh'], changeImpact: ['geometry'], requiredChecks: [] },
    automaticEvidence: {
      authoredDigest: digest('authored'),
      verificationPlanDigest: digest('plan'),
      consistency: { status: 'passed', digest: digest('dataset-verification') },
      locales: locales.map((locale) => ({ locale, status: 'passed', digest: digest(`automatic-${locale}`) })),
    },
    checkResults: [],
    attestation: status === 'accepted' ? { reviewer: 'human:reviewer', reviewedAt: '2026-07-11T08:00:00.000Z', decision: 'accepted' } : null,
    regions: [{ id: 'REG-001', status: 'resolved', ruleIds: ['T7'], evidenceDigests: [] }],
    feedbackSummary: { openItems: [], automationUpgradesRequired: [] },
    riskChecks: [],
    interfaceMatrix: { summary: { expectedInterfaces: 1, auditedInterfaces: 1 }, digest: digest('legacy-matrix') },
    attention: { status: 'closed', closureNote: 'Legacy review closed.' },
    blockers: [],
  };
  return { ...content, resultDigest: digestFidelityValue(content) };
}

test('only a fresh SEALED Build with accepted review is converged', () => {
  const converged = report();
  const taskInformation = renderTaskInformation(converged);

  assert.equal(converged.status, 'converged');
  assert.equal(converged.confidence, 'high');
  assert.equal(converged.consistencyEvidence.status, 'passed');
  assert.deepEqual(converged.locales, ['en', 'zh']);
  assert.match(taskInformation, /status=converged; confidence=high; review=accepted/);
  assert.match(taskInformation, /Acceptance: human:reviewer at 2026-07-11T08:00:00.000Z \(fidelity-result\/v3\)/);
  assert.match(taskInformation, /Dataset consistency evidence: passed/);
  assert.doesNotMatch(taskInformation, /Interface Matrix|Regions|Risk checks|Feedback recurrence/);
  assert.match(converged.reportDigest, /^sha256:[a-f0-9]{64}$/);
});

test('an accepted closure that is not yet sealed is in progress, not converged', () => {
  const closed = report({
    inspection: inspection({
      historicalState: 'CLOSED',
      effectiveState: 'CLOSED',
      digests: { ...inspection().digests, seal: null },
    }),
  });
  assert.equal(closed.status, 'in-progress');
  assert.equal(closed.confidence, 'medium');
  assert.doesNotMatch(renderLoopFidelitySummary(closed), /Status: converged/);
});

test('a stale historical seal is downgraded and reports historical versus effective state', () => {
  const stale = report({
    inspection: inspection({
      effectiveState: 'AUTHORED',
      fresh: false,
      reasons: ['authored-artifact-stale'],
      staleArtifacts: [{ path: 'data/datasets/live-nation-fy25.js', reason: 'digest-mismatch' }],
    }),
  });
  const summary = renderLoopFidelitySummary(stale);

  assert.equal(stale.status, 'blocked');
  assert.equal(stale.confidence, 'low');
  assert.ok(stale.blockers.some((item) => item.code === 'BUILD_STALE'));
  assert.match(summary, /historical=SEALED; effective=AUTHORED; fresh=false/);
});

test('historical fidelity-result/v2 closures remain readable', () => {
  const historical = report({ fidelityResult: legacyV2FidelityResult() });
  assert.equal(historical.status, 'converged');
  assert.equal(historical.reviewStatus, 'accepted');
  assert.equal(historical.fidelityResultProtocol, 'fidelity-result/v2');
  assert.deepEqual(historical.automaticEvidence.map((item) => item.locale), ['en', 'zh']);

  const missingLocale = report({ fidelityResult: legacyV2FidelityResult({ locales: ['en'] }) });
  assert.equal(missingLocale.status, 'blocked');
  assert.ok(missingLocale.blockers.some((item) => item.code === 'AUTOMATIC_LOCALE_MISSING' && item.subject === 'zh'));

  const pending = report({
    inspection: inspection({ historicalState: 'AUTHORED', effectiveState: 'AUTHORED', digests: { ...inspection().digests, closure: null, seal: null } }),
    fidelityResult: legacyV2FidelityResult({ status: 'review-pending' }),
  });
  assert.equal(pending.status, 'review-pending');
  assert.match(renderLoopFidelitySummary(pending), /Status: review-pending/);
});

test('a result for another Build is rejected', () => {
  assert.throws(
    () => report({ inspection: inspection({ buildId: 'build-other' }) }),
    (error) => error.code === 'CLOSEOUT_SUBJECT_MISMATCH'
  );
});
