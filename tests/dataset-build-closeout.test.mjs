import assert from 'node:assert/strict';
import { mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { createDatasetBuild, digestValue } from '../scripts/lib/dataset-build.mjs';
import {
  finishReviewedBuild,
  inspectBuildCloseout,
  prepareBuildReview,
  sealReviewedBuild,
  stageReviewedBaseline,
} from '../scripts/lib/dataset-build-closeout.mjs';
import {
  initializeDatasetBuild,
  readDatasetBuild,
  recordBuildObject,
} from '../scripts/lib/dataset-build-store.mjs';

const now = () => '2026-07-11T07:00:00.000Z';
const digest = (value) => digestValue({ value });

async function fixture(t, key = 'example-q4-fy25') {
  const root = await mkdtemp(path.join(os.tmpdir(), 'dataset-build-closeout-test-'));
  const buildRoot = path.join(root, 'output', 'builds');
  const artifact = `data/datasets/${key}.js`;
  await mkdir(path.join(root, 'data', 'datasets'), { recursive: true });
  await writeFile(path.join(root, artifact), 'export const marker = 1;\n');
  const build = createDatasetBuild({
    key,
    adapter: 'income-statement',
    baseCanonicalDigest: digest('canonical-v1'),
    sources: [{ uri: `input/pending/${key}.png`, availability: 'local-only', digest: digest('source') }],
  }, { now, id: () => `build-${key}` });
  await initializeDatasetBuild(build, { buildRoot });
  t.after(() => rm(root, { recursive: true, force: true }));
  return { root, buildRoot, build, artifact };
}

function inventory(key) {
  return {
    datasetKey: key,
    objects: [
      {
        id: 'label:revenue',
        kind: 'label',
        disposition: 'render',
        mapping: [{ role: 'render', target: 'layout.labels.revenue' }],
        features: ['centered-side-label'],
      },
      {
        id: 'interface:revenue-right',
        kind: 'interface',
        disposition: 'render',
        mapping: [{ role: 'render', target: 'links.revenue-right' }],
        features: ['visible-interface'],
      },
    ],
  };
}

async function writeEvidence(root, prepared, verticalCenterDelta = 0, options = {}) {
  const archive = path.join(root, 'output', 'compare', prepared.build.key, '01-baseline-structure-sweep');
  await mkdir(archive, { recursive: true });
  const names = {
    reference: 'reference.png',
    candidate: 'candidate.png',
    diff: 'diff.png',
    metrics: 'metrics.json',
    interfaceAudit: 'interface-audit.json',
    interfaceContactSheet: 'contact.png',
  };
  for (const [kind, name] of Object.entries(names)) {
    const contents = kind === 'metrics'
      ? JSON.stringify({
          full: { similarity: 0.97 },
          ...(options.includeFontStatus === false
            ? {}
            : {
                fontStatus: {
                  loaded: { Montserrat: true, 'Noto Sans': true, Roboto: true },
                  allLoaded: options.fontsLoaded !== false,
                },
              }),
          ...(options.includeTypographyAudit === false
            ? {}
            : {
                typographyAudit: {
                  schemaVersion: 1,
                  ruleId: 'G3',
                  status: options.typographyStatus || 'passed',
                  violations:
                    options.typographyStatus === 'failed'
                      ? [{ code: 'product-text-uses-montserrat' }]
                      : [],
                },
              }),
          labelLayoutAudit: {
            horizontalSideLabels: [{ node: 'revenue', labelIndex: 0, verticalCenterDelta }],
          },
        })
      : `${kind}\n`;
    await writeFile(path.join(archive, name), contents);
  }
  const relative = (name) => path.relative(root, path.join(archive, name)).split(path.sep).join('/');
  const manifest = {
    schemaVersion: 1,
    status: 'evidence-ready',
    runId: 'run-example',
    identity: {
      dataset: prepared.build.key,
      language: 'en',
      runKind: 'fidelity-review',
      protocolVersion: 'fidelity-run/2',
      buildId: prepared.build.buildId,
      authoredDigest: prepared.packet.authoredDigest,
      verificationPlanDigest: prepared.packet.verificationPlanDigest,
    },
    artifacts: Object.fromEntries(Object.entries(names).map(([kind, name]) => [kind, relative(name)])),
  };
  await writeFile(path.join(archive, 'fidelity-run.json'), `${JSON.stringify(manifest, null, 2)}\n`);
  return path.relative(root, path.join(archive, 'fidelity-run.json')).split(path.sep).join('/');
}

async function writeDatasetVerification(root, buildRoot, prepared) {
  return recordBuildObject(prepared.build.buildId, 'dataset-verification', {
    schemaVersion: 1,
    protocol: 'dataset-verification/v1',
    kind: 'dataset-verification',
    status: 'evidence-ready',
    identity: {
      buildId: prepared.build.buildId,
      key: prepared.build.key,
      adapter: prepared.build.adapter,
      authoredDigest: prepared.packet.authoredDigest,
      verificationPlanDigest: prepared.packet.verificationPlanDigest,
    },
    profile: 'verify:dataset --skip-render',
    outputDigest: digest('verification-output'),
    checkedAt: now(),
  }, { buildRoot, projectRoot: root });
}

function matrix() {
  return {
    summary: {
      expectedInterfaces: 1,
      auditedInterfaces: 1,
      passedInterfaces: 1,
      failedInterfaces: 0,
      documentedExceptions: 0,
      pendingInterfaces: 0,
      notScoredInterfaces: 0,
    },
  };
}

function pendingReviewInput(prepared, evidenceManifest, verificationReference) {
  return {
    buildId: prepared.build.buildId,
    packetDigest: prepared.packetReference.digest,
    evidenceManifests: [evidenceManifest],
    verificationReference,
    attestation: null,
    regions: [],
    attention: { status: 'closed', closureNote: 'No open red-box region remains.' },
    feedback: [],
    riskChecks: [],
    interfaceMatrix: matrix(),
  };
}

async function prepare(t) {
  const base = await fixture(t);
  const prepared = await prepareBuildReview({
    buildId: base.build.buildId,
    inventory: inventory(base.build.key),
    artifacts: [{ path: base.artifact, role: 'view-adapter' }],
    changeImpact: ['new-dataset', 'geometry'],
    requiredLocales: ['en'],
  }, { buildRoot: base.buildRoot, projectRoot: base.root, now });
  return { ...base, prepared };
}

async function prepareRevenueMetric(t) {
  const root = await mkdtemp(path.join(os.tmpdir(), 'dataset-build-closeout-revenue-test-'));
  const buildRoot = path.join(root, 'output', 'builds');
  const artifact = 'data/revenue-metrics.js';
  await mkdir(path.join(root, 'data'), { recursive: true });
  await writeFile(path.join(root, artifact), 'window.REVENUE_METRICS = [];\n');
  const build = createDatasetBuild({
    key: 'example-arr-2026',
    adapter: 'revenue-metric',
    baseCanonicalDigest: digest('canonical-v1'),
    sources: [{ uri: 'input/pending/example-arr.png', availability: 'local-only', digest: digest('source') }],
  }, { now, id: () => 'build-example-arr-2026' });
  await initializeDatasetBuild(build, { buildRoot });
  const prepared = await prepareBuildReview({
    buildId: build.buildId,
    inventory: {
      datasetKey: build.key,
      objects: [{
        id: 'metric:arr',
        kind: 'metric-observation',
        disposition: 'data-only',
        mapping: [{ role: 'data', target: 'revenueMetrics.arr' }],
        features: [],
      }],
    },
    artifacts: [{ path: artifact, role: 'metric-ssot' }],
    changeImpact: ['financial-data-only'],
    requiredLocales: ['en'],
  }, { buildRoot, projectRoot: root, now });
  t.after(() => rm(root, { recursive: true, force: true }));
  return { root, buildRoot, artifact, prepared };
}

test('automatic evidence without human attestation cannot close a Build', async (t) => {
  const { root, buildRoot, prepared } = await prepare(t);
  const evidenceManifest = await writeEvidence(root, prepared);
  const verificationReference = await writeDatasetVerification(root, buildRoot, prepared);
  const outcome = await finishReviewedBuild({
    buildId: prepared.build.buildId,
    packetDigest: prepared.packetReference.digest,
    evidenceManifests: [evidenceManifest],
    verificationReference,
    attestation: null,
    regions: [],
    attention: { status: 'closed', closureNote: 'No open red-box region remains.' },
    feedback: [],
    riskChecks: [],
    interfaceMatrix: matrix(),
  }, { buildRoot, projectRoot: root, now });

  assert.equal(outcome.fidelityResult.status, 'review-pending');
  assert.equal((await readDatasetBuild(prepared.build.buildId, { buildRoot })).state, 'AUTHORED');
  const inspection = await inspectBuildCloseout(prepared.build.buildId, { buildRoot, projectRoot: root });
  assert.equal(inspection.reviewStatus, 'review-pending');
  assert.equal(inspection.report.status, 'review-pending');
  assert.match(inspection.taskInformation, /review=review-pending/);
});

test('review rejects fidelity evidence without a passing G3 typography audit', async (t) => {
  for (const scenario of [
    { name: 'missing audit', options: { includeTypographyAudit: false } },
    { name: 'failed audit', options: { typographyStatus: 'failed' } },
  ]) {
    const { root, buildRoot, prepared } = await prepare(t);
    const evidenceManifest = await writeEvidence(root, prepared, 0, scenario.options);
    const verificationReference = await writeDatasetVerification(root, buildRoot, prepared);
    await assert.rejects(
      finishReviewedBuild(
        pendingReviewInput(prepared, evidenceManifest, verificationReference),
        { buildRoot, projectRoot: root, now }
      ),
      (error) => {
        assert.equal(error.code, 'EVIDENCE_TYPOGRAPHY_INVALID', scenario.name);
        return true;
      }
    );
  }
});

test('review rejects fidelity evidence without a passing project font status', async (t) => {
  const { root, buildRoot, prepared } = await prepare(t);
  const evidenceManifest = await writeEvidence(root, prepared, 0, { fontsLoaded: false });
  const verificationReference = await writeDatasetVerification(root, buildRoot, prepared);
  await assert.rejects(
    finishReviewedBuild(
      pendingReviewInput(prepared, evidenceManifest, verificationReference),
      { buildRoot, projectRoot: root, now }
    ),
    (error) => {
      assert.equal(error.code, 'EVIDENCE_FONT_STATUS_INVALID');
      return true;
    }
  );
});

test('render evidence cannot close a Build without Build-bound dataset consistency evidence', async (t) => {
  const { root, buildRoot, prepared } = await prepare(t);
  const evidenceManifest = await writeEvidence(root, prepared);
  await assert.rejects(
    finishReviewedBuild({
      buildId: prepared.build.buildId,
      reviewToken: prepared.reviewToken,
      evidenceManifests: [evidenceManifest],
      attestation: { reviewer: 'human:reviewer', decision: 'accepted' },
      regions: [],
      attention: { status: 'closed', closureNote: 'No open red-box region remains.' },
      feedback: [],
      riskChecks: [],
      interfaceMatrix: matrix(),
    }, { buildRoot, projectRoot: root, now }),
    (error) => error.code === 'DATASET_VERIFICATION_REQUIRED'
  );
  assert.equal((await readDatasetBuild(prepared.build.buildId, { buildRoot })).state, 'AUTHORED');
});

test('a previously passing review cannot close after authored bytes change', async (t) => {
  const { root, buildRoot, artifact, prepared } = await prepare(t);
  const evidenceManifest = await writeEvidence(root, prepared);
  const verificationReference = await writeDatasetVerification(root, buildRoot, prepared);
  await writeFile(path.join(root, artifact), 'export const marker = 99;\n');
  await assert.rejects(
    finishReviewedBuild({
      buildId: prepared.build.buildId,
      reviewToken: prepared.reviewToken,
      verificationReference,
      evidenceManifests: [evidenceManifest],
      attestation: { reviewer: 'human:reviewer', decision: 'accepted' },
      regions: [],
      attention: { status: 'closed', closureNote: 'No open red-box region remains.' },
      feedback: [],
      riskChecks: [],
      interfaceMatrix: matrix(),
    }, { buildRoot, projectRoot: root, now }),
    (error) => error.code === 'REVIEW_OUTCOME_STALE'
  );
  assert.equal((await readDatasetBuild(prepared.build.buildId, { buildRoot })).state, 'AUTHORED');
});

test('Live Nation-sized side-label deltas block closure even when automatic rendering passed', async (t) => {
  const { root, buildRoot, prepared } = await prepare(t);
  const evidenceManifest = await writeEvidence(root, prepared, 38.5);
  const verificationReference = await writeDatasetVerification(root, buildRoot, prepared);
  const outcome = await finishReviewedBuild({
    buildId: prepared.build.buildId,
    packetDigest: prepared.packetReference.digest,
    evidenceManifests: [evidenceManifest],
    verificationReference,
    attestation: { reviewer: 'human:reviewer', decision: 'accepted' },
    regions: [],
    attention: { status: 'closed', closureNote: 'No open red-box region remains.' },
    feedback: [],
    riskChecks: [],
    interfaceMatrix: matrix(),
  }, { buildRoot, projectRoot: root, now });

  assert.equal(outcome.fidelityResult.status, 'blocked');
  assert.ok(outcome.fidelityResult.blockers.some((item) => item.code === 'RISK_THRESHOLD_VIOLATION'));
  assert.equal((await readDatasetBuild(prepared.build.buildId, { buildRoot })).state, 'AUTHORED');
  const inspection = await inspectBuildCloseout(prepared.build.buildId, { buildRoot, projectRoot: root });
  assert.equal(inspection.reviewStatus, 'blocked');
  assert.equal(inspection.report.status, 'blocked');
});

test('reviewed evidence closes, stages, seals, and becomes stale when authored bytes change', async (t) => {
  const { root, buildRoot, artifact, prepared } = await prepare(t);
  const evidenceManifest = await writeEvidence(root, prepared, 0);
  const verificationReference = await writeDatasetVerification(root, buildRoot, prepared);
  const reviewed = await finishReviewedBuild({
    buildId: prepared.build.buildId,
    packetDigest: prepared.packetReference.digest,
    evidenceManifests: [evidenceManifest],
    verificationReference,
    attestation: { reviewer: 'human:reviewer', decision: 'accepted' },
    regions: [],
    attention: { status: 'closed', closureNote: 'No open red-box region remains.' },
    feedback: [],
    riskChecks: [],
    interfaceMatrix: matrix(),
  }, { buildRoot, projectRoot: root, now });
  assert.equal(reviewed.fidelityResult.status, 'accepted');
  assert.equal(reviewed.build.state, 'CLOSED');

  const staged = await stageReviewedBaseline({
    buildId: prepared.build.buildId,
    metrics: { similarity: 0.97, mae: 7.65, width: 2667, height: 1500 },
  }, { buildRoot, projectRoot: root, now });
  assert.equal(staged.state, 'BASELINE_STAGED');
  const sealed = await sealReviewedBuild({
    buildId: prepared.build.buildId,
  }, { buildRoot, projectRoot: root, now });
  assert.equal(sealed.state, 'SEALED');
  const fresh = await inspectBuildCloseout(prepared.build.buildId, { buildRoot, projectRoot: root });
  assert.equal(fresh.fresh, true);
  assert.equal(fresh.report.status, 'converged');
  assert.match(fresh.taskInformation, /Derived close-out: status=converged/);
  assert.match(fresh.loopFidelitySummary, /Status: converged/);

  await writeFile(path.join(root, artifact), 'export const marker = 2;\n');
  const stale = await inspectBuildCloseout(prepared.build.buildId, { buildRoot, projectRoot: root });
  assert.equal(stale.historicalState, 'SEALED');
  assert.equal(stale.effectiveState, 'AUTHORED');
  assert.equal(stale.fresh, false);
  assert.equal(stale.report.status, 'blocked');
  assert.match(stale.loopFidelitySummary, /historical=SEALED; effective=AUTHORED; fresh=false/);

  const staleWithCanonicalConflict = await inspectBuildCloseout(prepared.build.buildId, {
    buildRoot,
    projectRoot: root,
    currentCanonicalDigest: digest('canonical-v2'),
  });
  assert.equal(staleWithCanonicalConflict.effectiveState, 'AUTHORED');
  assert.ok(staleWithCanonicalConflict.reasons.includes('canonical-base-stale'));
});

test('Revenue Metric closes through consistency evidence with Sankey fidelity explicitly not applicable', async (t) => {
  const { root, buildRoot, prepared } = await prepareRevenueMetric(t);
  const verificationReference = await writeDatasetVerification(root, buildRoot, prepared);
  const reviewed = await finishReviewedBuild({
    buildId: prepared.build.buildId,
    reviewToken: prepared.reviewToken,
    verificationReference,
    attestation: { reviewer: 'human:data-reviewer', decision: 'accepted' },
    regions: [],
    attention: { status: 'closed', closureNote: 'No visual red-box surface applies.' },
    feedback: [],
    riskChecks: [],
    interfaceMatrix: null,
  }, { buildRoot, projectRoot: root, now });
  assert.equal(reviewed.fidelityResult.status, 'accepted');
  assert.equal(reviewed.build.state, 'CLOSED');
  assert.equal(reviewed.fidelityResult.automaticEvidence.consistency.status, 'passed');

  const staged = await stageReviewedBaseline({ buildId: prepared.build.buildId }, {
    buildRoot,
    projectRoot: root,
    now,
  });
  assert.equal(staged.receipts.at(-1).payload.disposition, 'not-applicable');
  const sealed = await sealReviewedBuild({ buildId: prepared.build.buildId }, {
    buildRoot,
    projectRoot: root,
    now,
  });
  assert.equal(sealed.state, 'SEALED');
});

test('baseline staging refuses a closure whose authored bytes are already stale', async (t) => {
  const { root, buildRoot, artifact, prepared } = await prepare(t);
  const evidenceManifest = await writeEvidence(root, prepared, 0);
  const verificationReference = await writeDatasetVerification(root, buildRoot, prepared);
  const reviewed = await finishReviewedBuild({
    buildId: prepared.build.buildId,
    reviewToken: prepared.reviewToken,
    verificationReference,
    evidenceManifests: [evidenceManifest],
    attestation: { reviewer: 'human:reviewer', decision: 'accepted' },
    regions: [],
    attention: { status: 'closed', closureNote: 'No open red-box region remains.' },
    feedback: [],
    riskChecks: [],
    interfaceMatrix: matrix(),
  }, { buildRoot, projectRoot: root, now });
  assert.equal(reviewed.build.state, 'CLOSED');

  await writeFile(path.join(root, artifact), 'export const marker = 3;\n');
  await assert.rejects(
    stageReviewedBaseline({
      buildId: prepared.build.buildId,
      metrics: { similarity: 0.97 },
    }, { buildRoot, projectRoot: root, now }),
    (error) => error.code === 'BUILD_INPUT_STALE'
  );
  assert.equal((await readDatasetBuild(prepared.build.buildId, { buildRoot })).state, 'CLOSED');
});
