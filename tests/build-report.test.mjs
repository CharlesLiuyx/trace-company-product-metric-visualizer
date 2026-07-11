import test from 'node:test';
import assert from 'node:assert/strict';
import {
  createCloseoutReport,
  renderLoopFidelitySummary,
  renderTaskInformation,
} from '../scripts/lib/build-report.mjs';
import {
  createFeedbackRecord,
  digestFeedbackValue,
  projectFeedbackLedger,
} from '../scripts/lib/feedback-ledger.mjs';
import {
  createFidelityResult,
  digestFidelityValue,
} from '../scripts/lib/fidelity-result.mjs';

const digest = (value) => digestFidelityValue({ value });
const feedbackEvidence = (value) => digestFeedbackValue({ value });

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

function matrix() {
  return {
    summary: {
      expectedInterfaces: 2,
      auditedInterfaces: 2,
      passedInterfaces: 2,
      failedInterfaces: 0,
      documentedExceptions: 0,
      pendingInterfaces: 0,
      notScoredInterfaces: 0,
    },
  };
}

function fidelity({ attested = true } = {}) {
  const authoredDigest = digest('authored');
  const planDigest = digest('plan');
  return createFidelityResult({
    buildId: 'build-live-nation-fy25',
    key: 'live-nation-fy25',
    adapter: 'income-statement',
    authoredDigest,
    verificationPlan: {
      digest: planDigest,
      requiredLocales: ['en', 'zh'],
      changeImpact: ['geometry'],
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
    attestation: attested ? {
      reviewer: 'human:reviewer',
      reviewedAt: '2026-07-11T08:00:00.000Z',
      decision: 'accepted',
      authoredDigest,
      verificationPlanDigest: planDigest,
    } : null,
    regions: [{ id: 'REG-001', status: 'resolved', ruleIds: ['T7'], evidenceDigests: [] }],
    attention: { status: 'closed', closureNote: 'No open red-box region remains.' },
    feedbackSummary: { openItems: [], automationUpgradesRequired: [] },
    riskChecks: [{ id: 'B3-T7', status: 'passed', measurements: [] }],
    interfaceMatrix: matrix(),
  });
}

function emptyLedger() {
  return projectFeedbackLedger([]);
}

function report(input = {}) {
  return createCloseoutReport({
    inspection: inspection(),
    fidelityResult: fidelity(),
    feedbackLedger: emptyLedger(),
    ...input,
  });
}

test('machine-green evidence without review is review-pending and never rendered as converged', () => {
  const pending = report({
    inspection: inspection({
      historicalState: 'AUTHORED',
      effectiveState: 'AUTHORED',
      digests: { ...inspection().digests, closure: null, seal: null },
    }),
    fidelityResult: fidelity({ attested: false }),
  });
  const summary = renderLoopFidelitySummary(pending);

  assert.equal(pending.reviewStatus, 'review-pending');
  assert.equal(pending.status, 'review-pending');
  assert.equal(pending.confidence, 'low');
  assert.match(summary, /Status: review-pending/);
  assert.doesNotMatch(summary, /Status: converged/);
});

test('only a fresh SEALED Build with accepted review is converged', () => {
  const converged = report();
  const taskInformation = renderTaskInformation(converged);

  assert.equal(converged.status, 'converged');
  assert.equal(converged.confidence, 'high');
  assert.equal(converged.build.historicalState, 'SEALED');
  assert.equal(converged.build.effectiveState, 'SEALED');
  assert.equal(converged.consistencyEvidence.status, 'passed');
  assert.match(taskInformation, /status=converged; confidence=high; review=accepted/);
  assert.match(taskInformation, /Dataset consistency evidence: passed/);
  assert.match(converged.reportDigest, /^sha256:[a-f0-9]{64}$/);
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

test('repeated feedback automation obligations appear in the report and block convergence', () => {
  const feedback = (buildId, feedbackId, regionId) => createFeedbackRecord({
    buildId,
    feedbackId,
    regionId,
    ruleIds: ['T7'],
    cause: 'execution-gap',
    status: 'closed',
    beforeEvidenceDigests: [feedbackEvidence(`${buildId}-before`)],
    afterEvidenceDigests: [feedbackEvidence(`${buildId}-after`)],
    remedy: 'Aligned the side label.',
  });
  const ledger = projectFeedbackLedger([
    feedback('build-live-nation-fy25', 'FB-001', 'REG-001'),
    feedback('build-other', 'FB-001', 'REG-001'),
  ]);
  const blocked = report({ feedbackLedger: ledger });
  const taskInformation = renderTaskInformation(blocked);

  assert.equal(blocked.status, 'blocked');
  assert.deepEqual(blocked.feedback.automationUpgradesRequired, ['T7']);
  assert.ok(blocked.blockers.some((item) => item.code === 'FEEDBACK_AUTOMATION_UPGRADE_REQUIRED'));
  assert.match(taskInformation, /T7: occurrences=2, execution-gaps=2, automation-upgrade=required/);
});
