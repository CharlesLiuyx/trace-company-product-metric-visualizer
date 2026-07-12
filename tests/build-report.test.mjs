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
  const side = {
    nodeBbox: { left: 10, right: 20, top: 30, bottom: 50 },
    unionIntervals: [{ top: 30, bottom: 50 }],
    linkIntervals: [{ linkId: 'revenue->profit#0', top: 30, bottom: 50 }],
  };
  return {
    schemaVersion: 1,
    protocol: 'interface-matrix/v1',
    expectedInterfaceIds: ['revenue:right'],
    rows: [{
      id: 'revenue:right',
      node: 'revenue',
      side: 'right',
      coverageIntent: 'reference',
      reference: side,
      candidate: side,
      deltas: { top: 0, bottom: 0, center: 0, width: 0 },
      endpointStatus: 'passed',
      tangentStatus: 'passed',
      result: 'passed',
      evidenceDigests: {
        referenceCrop: digest('reference'),
        audit: digest('interface-audit'),
        contactSheet: digest('interface-contact-sheet'),
      },
    }],
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
      requiredChecks: [
        { id: 'adapter:data-consistency', enforcement: 'build-gate', localeScope: 'global', evidenceKind: 'dataset-consistency', objectIds: [] },
        { id: 'adapter:render-fidelity', enforcement: 'hard-gate', localeScope: 'required-locales', evidenceKind: 'fidelity-run', objectIds: [] },
        { id: 'adapter:manual-visual-closure', enforcement: 'manual', localeScope: 'required-locales', evidenceKind: 'manual-decision', objectIds: [] },
      ],
    },
    checkResults: [
      { checkId: 'adapter:data-consistency', status: 'passed', source: 'automatic', objectIds: [], evidenceDigests: [digest('dataset-verification')] },
      { checkId: 'adapter:render-fidelity', locale: 'en', status: 'passed', source: 'automatic', objectIds: [], evidenceDigests: [digest('automatic-en')] },
      { checkId: 'adapter:render-fidelity', locale: 'zh', status: 'passed', source: 'automatic', objectIds: [], evidenceDigests: [digest('automatic-zh')] },
      { checkId: 'adapter:manual-visual-closure', locale: 'en', status: 'passed', source: 'manual', objectIds: [], evidenceDigests: [digest('manual-en')] },
      { checkId: 'adapter:manual-visual-closure', locale: 'zh', status: 'passed', source: 'manual', objectIds: [], evidenceDigests: [digest('manual-zh')] },
    ],
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

function legacyV1FidelityResult() {
  const current = structuredClone(fidelity());
  delete current.resultDigest;
  current.schemaVersion = 1;
  delete current.checkResults;
  delete current.verificationPlan.requiredChecks;
  current.interfaceMatrix = {
    summary: { ...current.interfaceMatrix.summary },
    digest: digest('legacy-interface-matrix'),
  };
  return { ...current, resultDigest: digestFidelityValue(current) };
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

test('historical v1 inspection remains readable without v2 checks or Matrix rows', () => {
  const historical = report({ fidelityResult: legacyV1FidelityResult() });
  assert.equal(historical.status, 'converged');
  assert.equal(historical.reviewStatus, 'accepted');
  assert.deepEqual(historical.interfaceMatrix.summary, {
    expectedInterfaces: 1,
    auditedInterfaces: 1,
    passedInterfaces: 1,
    failedInterfaces: 0,
    documentedExceptions: 0,
    pendingInterfaces: 0,
    notScoredInterfaces: 0,
  });
});
