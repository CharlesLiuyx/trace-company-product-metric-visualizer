import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { mkdir, mkdtemp, readFile, rename, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { createDatasetBuild, digestValue } from '../scripts/lib/dataset-build.mjs';
import { projectFeedbackLedger } from '../scripts/lib/feedback-ledger.mjs';
import { digestFidelityValue } from '../scripts/lib/fidelity-result.mjs';
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
  recordDatasetBuildCommand,
  recordDatasetBuildReviewOutcome,
} from '../scripts/lib/dataset-build-store.mjs';

const now = () => '2026-07-11T07:00:00.000Z';
const digest = (value) => digestValue({ value });

function sourceClassification({ key, adapter, sourcePath, sourceDigest, width, height }) {
  return {
    datasetKey: key,
    adapter,
    source: {
      locator: sourcePath,
      digest: sourceDigest,
      width,
      height,
    },
    fullImageBBox: [0, 0, width, height],
    reviewMethod: 'full-source-type-gate',
    signals: adapter === 'income-statement'
      ? ['income-statement-values', 'sankey-flow-topology']
      : ['revenue-metric-definition', 'time-series-observations'],
  };
}

async function fixture(t, key = 'example-q4-fy25') {
  const root = await mkdtemp(path.join(os.tmpdir(), 'dataset-build-closeout-test-'));
  const buildRoot = path.join(root, 'output', 'builds');
  const artifact = `data/datasets/${key}.js`;
  const sourcePath = `input/processing/${key}.png`;
  const sourceBytes = `source-image-bytes:${key}`;
  const sourceDigest = bytesDigest(sourceBytes);
  await mkdir(path.join(root, 'data', 'datasets'), { recursive: true });
  await mkdir(path.join(root, 'input', 'processing'), { recursive: true });
  await writeFile(path.join(root, artifact), 'export const marker = 1;\n');
  await writeFile(path.join(root, sourcePath), sourceBytes);
  const build = createDatasetBuild({
    key,
    adapter: 'income-statement',
    baseCanonicalDigest: digest('canonical-v1'),
    sources: [{
      uri: `input/pending/${key}.png`,
      processingUri: sourcePath,
      processedUri: `input/processed/${key}.png`,
      availability: 'local-only',
      digest: sourceDigest,
      width: 2400,
      height: 1800,
    }],
    sourceClassification: sourceClassification({
      key,
      adapter: 'income-statement',
      sourcePath: `input/pending/${key}.png`,
      sourceDigest,
      width: 2400,
      height: 1800,
    }),
  }, { now, id: () => `build-${key}` });
  await initializeDatasetBuild(build, { buildRoot });
  t.after(() => rm(root, { recursive: true, force: true }));
  return { root, buildRoot, build, artifact, sourcePath, sourceDigest };
}

function financialLoadedData(key, { restructuringTarget = 'nonNodeMetric' } = {}) {
  return {
    records: [{
      key,
      unit: 'B',
      decimals: 3,
      revenue: { total: 1, items: [] },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', value: 0, items: [] },
        operatingExpenses: { total: 0.005, items: [{ id: 'restructuring', value: 0.005 }] },
      },
    }],
    datasets: [{
      key,
      meta: { unit: 'B', decimals: 3 },
      nodes: [{ id: 'revenue', value: 1, valueText: '$1B' }],
      nonNodeMetrics: restructuringTarget === 'nonNodeMetric'
        ? [{ id: 'restructuring', representation: 'flow', value: 0.005 }]
        : [],
    }],
  };
}

function financialSourceObjects() {
  return {
    objects: [
      { id: 'revenue', class: 'value', label: 'Revenue', literal: '$1B', value: '1', unit: 'B', ssotRef: { family: 'income-statement', path: 'revenue.total' }, node: 'revenue' },
      { id: 'restructuring', class: 'value', label: 'Restructuring', literal: '$5M', value: '5', unit: 'M', ssotRef: { family: 'income-statement', path: 'costs.operatingExpenses.items', id: 'restructuring' }, nonNodeMetric: 'restructuring' },
      { id: 'flow-revenue-restructuring', class: 'flow' },
      { id: 'watermark', class: 'residual' },
    ],
  };
}

test('prepare-review validates and reconciles the flat Source objects before recording AUTHORED', async (t) => {
  const base = await fixture(t, 'source-objects-q3-fy26');
  const input = {
    buildId: base.build.buildId,
    sourceObjects: financialSourceObjects(),
    artifacts: [
      { path: base.artifact, role: 'view-adapter' },
      { path: base.sourcePath, role: 'reference-image' },
    ],
    changeImpact: ['geometry'],
    requiredLocales: ['en'],
  };
  const options = { buildRoot: base.buildRoot, projectRoot: base.root, now };
  await assert.rejects(
    prepareBuildReview(input, { ...options, loadedData: financialLoadedData(base.build.key, { restructuringTarget: 'missing' }) }),
    (error) => error.code === 'SOURCE_OBJECTS_ADAPTER_TARGET_MISSING'
  );
  await assert.rejects(
    prepareBuildReview({ ...input, sourceObjects: { objects: [{ object: { id: 'node:revenue' }, source: { sourceId: 'source:revenue' } }] } }, options),
    (error) => error.code === 'SOURCE_OBJECTS_LEGACY_SHAPE'
  );
  assert.equal((await readDatasetBuild(base.build.buildId, { buildRoot: base.buildRoot })).state, 'INTAKED');

  const prepared = await prepareBuildReview(input, { ...options, loadedData: financialLoadedData(base.build.key) });
  const payload = prepared.build.receipts.at(-1).payload;
  assert.equal(prepared.build.state, 'AUTHORED');
  assert.equal(payload.sourceObjects.protocol, 'source-objects/v1');
  assert.deepEqual(payload.sourceObjects.reconciliation, { status: 'passed', checked: 2, unit: 'B' });
  assert.deepEqual(payload.sourceObjects.summary.valueNodeIds, ['revenue']);
  assert.deepEqual(payload.sourceObjects.summary.nonNodeMetricIds, ['restructuring']);
  assert.equal(payload.verificationPlan.protocol, 'verification-plan/v6');
  assert.equal(payload.verificationPlan.sourceObjectsDigest, prepared.sourceObjects.sourceObjectsDigest);
  assert.equal(prepared.packet.protocol, 'review-packet/v5');
  assert.equal(prepared.packet.sourceObjectsDigest, prepared.sourceObjects.sourceObjectsDigest);
  assert.equal(prepared.packet.sourceObjects.kind, 'source-objects');
  assert.equal(Object.hasOwn(payload, 'inventory'), false);
});

function sourceObjectsInput() {
  return {
    objects: [
      { id: 'revenue-label', class: 'label', label: 'Revenue', referenceBBox: [180, 420, 160, 44], labelGroup: 'revenue' },
      { id: 'flow-revenue-profit', class: 'flow' },
    ],
  };
}

const interfaceNodeBbox = Object.freeze({ left: 10, right: 20, top: 30, bottom: 50 });
const interfaceUnion = Object.freeze([{ top: 30, bottom: 50 }]);
const interfaceLinks = Object.freeze([{
  link: 'revenue->profit#0',
  interval: { top: 30, bottom: 50 },
}]);

function interfaceAuditDocument(overrides = {}) {
  return {
    version: 3,
    gate: 'G12',
    dataset: 'example-q4-fy25',
    language: 'en',
    mode: 'error',
    status: 'passed',
    enforcementStatus: 'passed',
    candidateStatus: 'passed',
    referenceStatus: 'passed',
    summary: {
      expectedInterfaces: 1,
      auditedInterfaces: 1,
      passedInterfaces: 1,
      failedInterfaces: 0,
      documentedExceptions: 0,
      pendingInterfaces: 0,
      notScoredInterfaces: 0,
    },
    expectedInterfaceIds: ['revenue:right'],
    auditedInterfaceIds: ['revenue:right'],
    interfaces: [{
      id: 'revenue:right',
      node: 'revenue',
      face: 'right',
      nodeBox: interfaceNodeBbox,
      candidateUnion: interfaceUnion,
      links: interfaceLinks,
      coverageIntent: null,
      referenceCropDigest: digest('reference-crop-revenue-right'),
      result: 'pass',
    }],
    violations: [],
    ...overrides,
  };
}

function bytesDigest(value) {
  return `sha256:${createHash('sha256').update(value).digest('hex')}`;
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
  const audit = interfaceAuditDocument({
    dataset: prepared.build.key,
    language: 'en',
    ...(options.interfaceAudit || {}),
  });
  const valueNodeIds = prepared.build.receipts.at(-1).payload.sourceObjects.summary.valueNodeIds;
  const nodePaintRecords = [...new Set(['revenue', ...valueNodeIds])]
    .map((id) => ({ id, faceVisible: true, faceHeight: 4 }));
  const relative = (name) => path.relative(root, path.join(archive, name)).split(path.sep).join('/');
  for (const [kind, name] of Object.entries(names)) {
    const contents = kind === 'metrics'
      ? JSON.stringify({
          dataset: prepared.build.key,
          language: 'en',
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
          labelPositionAudit: options.labelPositionAudit || {
            schemaVersion: 1,
            ruleId: 'T18',
            locale: 'en',
            enforcedLocale: 'en',
            enforced: true,
            tolerance: 6,
            expectedGroups: 1,
            measuredGroups: 1,
            measurements: [{
              objectId: 'label:revenue',
              node: 'revenue',
              referenceBBox: [180, 420, 160, 44],
              candidateBBox: [182, 421, 158, 42],
              deltaX: 0,
              deltaY: -0.5,
              enforced: true,
            }],
            violations: [],
          },
          nodePaintAudit: {
            schemaVersion: 1,
            dataset: prepared.build.key,
            language: 'en',
            checkedNodes: nodePaintRecords.length,
            minVisibleFacePx: 3,
            belowVisibilityFloorNodeIds: [],
            duplicateNodeIds: [],
            nodes: nodePaintRecords,
          },
          ...(options.semanticAnnotationAudit
            ? { semanticAnnotationAudit: options.semanticAnnotationAudit }
            : {}),
          interfaceAudit: {
            path: relative(names.interfaceAudit),
            contactSheet: relative(names.interfaceContactSheet),
            mode: audit.mode,
            status: audit.status,
            enforcementStatus: audit.enforcementStatus,
            candidateStatus: audit.candidateStatus,
            referenceStatus: audit.referenceStatus,
            summary: audit.summary,
          },
        })
      : kind === 'interfaceAudit'
        ? JSON.stringify(audit)
      : `${kind}\n`;
    await writeFile(path.join(archive, name), contents);
  }
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

function matrix(key = 'example-q4-fy25') {
  const auditContents = JSON.stringify(interfaceAuditDocument({ dataset: key, language: 'en' }));
  const side = {
    nodeBbox: interfaceNodeBbox,
    unionIntervals: interfaceUnion,
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
        referenceCrop: digest('reference-crop-revenue-right'),
        audit: bytesDigest(auditContents),
        contactSheet: bytesDigest('interfaceContactSheet\n'),
      },
    }],
  };
}

function manualCheckDecisions(prepared) {
  const plan = prepared.build.receipts.at(-1).payload.verificationPlan;
  return [{
    checkId: 'adapter:human-review',
    status: 'passed',
    evidenceDigests: [plan.sourceObjectsDigest, plan.sourceDigest],
  }];
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
    manualCheckDecisions: manualCheckDecisions(prepared),
    interfaceMatrix: matrix(prepared.build.key),
  };
}

async function prepare(t, policy = {}) {
  const base = await fixture(t);
  const prepared = await prepareBuildReview({
    buildId: base.build.buildId,
    sourceObjects: sourceObjectsInput(),
    artifacts: [
      { path: base.artifact, role: 'view-adapter' },
      { path: base.sourcePath, role: 'reference-image' },
    ],
    changeImpact: ['new-dataset', 'geometry'],
    requiredLocales: ['en'],
    ...policy,
  }, { buildRoot: base.buildRoot, projectRoot: base.root, now });
  return { ...base, prepared };
}

test('prepare-review accepts a processing-bound Source after operator relocation to processed', async (t) => {
  const base = await fixture(t, 'relocated-source-q4-fy25');
  const processedPath = `input/processed/${base.build.key}.png`;
  await mkdir(path.join(base.root, 'input', 'processed'), { recursive: true });
  await rename(path.join(base.root, base.sourcePath), path.join(base.root, processedPath));
  const loadedData = financialLoadedData(base.build.key);
  loadedData.datasets[0].nodes.push({ id: 'short', value: 0.002, valueText: '$2M' });
  loadedData.records[0].revenue.items = [{ id: 'short', value: 0.002 }];
  const sourceObjects = financialSourceObjects();
  sourceObjects.objects.push({
    id: 'short',
    class: 'value',
    literal: '$2M',
    value: '2',
    unit: 'M',
    ssotRef: { family: 'income-statement', path: 'revenue.items', id: 'short' },
    node: 'short',
  });
  sourceObjects.shortNodes = [{ node: 'short', reason: 'The native Source paints a genuine two-pixel node face.' }];
  const prepared = await prepareBuildReview({
    buildId: base.build.buildId,
    sourceObjects,
    artifacts: [
      { path: base.artifact, role: 'view-adapter' },
      { path: base.sourcePath, role: 'reference-image' },
    ],
    changeImpact: ['new-dataset', 'geometry'],
    requiredLocales: ['en'],
  }, { buildRoot: base.buildRoot, projectRoot: base.root, now, loadedData });

  assert.equal(prepared.build.state, 'AUTHORED');
  const payload = prepared.build.receipts.at(-1).payload;
  assert.equal(payload.sourceObjects.source.locator, processedPath);
  assert.deepEqual(payload.sourceObjects.shortNodes, [{ node: 'short', reason: 'The native Source paints a genuine two-pixel node face.' }]);
  assert.deepEqual(
    payload.artifacts.find((artifact) => artifact.role === 'reference-image'),
    {
      path: base.sourcePath,
      role: 'reference-image',
      digest: base.sourceDigest,
    }
  );
});

async function prepareRevenueMetric(t, changeImpact = ['financial-data-only']) {
  const root = await mkdtemp(path.join(os.tmpdir(), 'dataset-build-closeout-revenue-test-'));
  const buildRoot = path.join(root, 'output', 'builds');
  const artifact = 'data/revenue-metrics.js';
  const key = 'example-arr-2026';
  const sourcePath = 'input/processing/example-arr-2026.png';
  const sourceBytes = 'source-image-bytes:example-arr-2026';
  const sourceDigest = bytesDigest(sourceBytes);
  await mkdir(path.join(root, 'data'), { recursive: true });
  await mkdir(path.join(root, 'input', 'processing'), { recursive: true });
  await writeFile(path.join(root, artifact), 'window.REVENUE_METRICS = [];\n');
  await writeFile(path.join(root, sourcePath), sourceBytes);
  const build = createDatasetBuild({
    key,
    adapter: 'revenue-metric',
    baseCanonicalDigest: digest('canonical-v1'),
    sources: [{
      uri: 'input/pending/example-arr-2026.png',
      processingUri: sourcePath,
      availability: 'local-only',
      digest: sourceDigest,
      width: 1200,
      height: 800,
    }],
    sourceClassification: sourceClassification({
      key,
      adapter: 'revenue-metric',
      sourcePath: 'input/pending/example-arr-2026.png',
      sourceDigest,
      width: 1200,
      height: 800,
    }),
  }, { now, id: () => 'build-example-arr-2026' });
  await initializeDatasetBuild(build, { buildRoot });
  const prepared = await prepareBuildReview({
    buildId: build.buildId,
    sourceObjects: {
      objects: [{
        id: 'arr-2026-01-01',
        class: 'value',
        label: 'ARR on 2026-01-01',
        literal: '$120M',
        value: '120',
        unit: 'M',
        ssotRef: { family: 'revenue-metric', path: 'observations', date: '2026-01-01' },
      }],
    },
    artifacts: [
      { path: artifact, role: 'metric-ssot' },
      { path: sourcePath, role: 'reference-image' },
    ],
    changeImpact,
    requiredLocales: ['en'],
  }, {
    buildRoot,
    projectRoot: root,
    now,
    loadedData: {
      revenueRecords: [{
        key,
        unit: 'M',
        decimals: 1,
        observations: [{ date: '2026-01-01', value: 120 }],
      }],
    },
  });
  t.after(() => rm(root, { recursive: true, force: true }));
  return { root, buildRoot, artifact, sourcePath, sourceDigest, prepared };
}

test('automatic evidence without human attestation cannot close a Build', async (t) => {
  const { root, buildRoot, prepared } = await prepare(t);
  const evidenceManifest = await writeEvidence(root, prepared);
  const verificationReference = await writeDatasetVerification(root, buildRoot, prepared);
  const stageDecisions = [
    { stage: 'structure', status: 'frozen', evidenceDigest: digest('structure-freeze-evidence') },
    { stage: 'structure', status: 'reopened', evidenceDigest: digest('structure-reopen-evidence'), note: 'later text pass found an earlier miss' },
  ];
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
    manualCheckDecisions: manualCheckDecisions(prepared),
    interfaceMatrix: matrix(prepared.build.key),
    stageDecisions,
  }, { buildRoot, projectRoot: root, now });

  assert.equal(outcome.fidelityResult.status, 'review-pending');
  // The optional stage audit trail flows through finish into the recorded
  // FidelityResult without becoming a blocker.
  assert.deepEqual(outcome.fidelityResult.stageDecisions, stageDecisions);
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
      manualCheckDecisions: manualCheckDecisions(prepared),
      interfaceMatrix: matrix(),
    }, { buildRoot, projectRoot: root, now }),
    (error) => error.code === 'DATASET_VERIFICATION_REQUIRED'
  );
  assert.equal((await readDatasetBuild(prepared.build.buildId, { buildRoot })).state, 'AUTHORED');
});

test('finish rejects a historical review-packet/v1 even when its authored digests are current', async (t) => {
  const { root, buildRoot, prepared } = await prepare(t);
  const { packetDigest: _packetDigest, ...packetContent } = prepared.packet;
  packetContent.schemaVersion = 1;
  packetContent.protocol = 'review-packet/v1';
  const legacyPacket = { ...packetContent, packetDigest: digestFidelityValue(packetContent) };
  const reference = await recordBuildObject(prepared.build.buildId, 'review-packet', legacyPacket, {
    buildRoot,
    projectRoot: root,
  });
  await assert.rejects(
    finishReviewedBuild({
      buildId: prepared.build.buildId,
      reviewToken: reference.digest,
    }, { buildRoot, projectRoot: root, now }),
    (error) => error.code === 'REVIEW_PACKET_STALE'
  );
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
      manualCheckDecisions: manualCheckDecisions(prepared),
      interfaceMatrix: matrix(),
    }, { buildRoot, projectRoot: root, now }),
    (error) => error.code === 'REVIEW_OUTCOME_STALE'
  );
  assert.equal((await readDatasetBuild(prepared.build.buildId, { buildRoot })).state, 'AUTHORED');
});

test('Interface Matrix candidate geometry must exactly match the archived G12 row', async (t) => {
  const { root, buildRoot, prepared } = await prepare(t);
  const evidenceManifest = await writeEvidence(root, prepared);
  const verificationReference = await writeDatasetVerification(root, buildRoot, prepared);
  const mismatchedMatrix = structuredClone(matrix());
  mismatchedMatrix.rows[0].candidate.nodeBbox.right = 21;
  await assert.rejects(
    finishReviewedBuild({
      buildId: prepared.build.buildId,
      reviewToken: prepared.reviewToken,
      evidenceManifests: [evidenceManifest],
      verificationReference,
      attestation: { reviewer: 'human:reviewer', decision: 'accepted' },
      regions: [],
      attention: { status: 'closed', closureNote: 'No open red-box region remains.' },
      feedback: [],
      riskChecks: [],
      manualCheckDecisions: manualCheckDecisions(prepared),
      interfaceMatrix: mismatchedMatrix,
    }, { buildRoot, projectRoot: root, now }),
    (error) => error.code === 'INTERFACE_MATRIX_GEOMETRY_MISMATCH'
  );
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
    manualCheckDecisions: manualCheckDecisions(prepared),
    interfaceMatrix: matrix(),
  }, { buildRoot, projectRoot: root, now });
  assert.equal(reviewed.fidelityResult.status, 'accepted');
  assert.equal(reviewed.build.state, 'CLOSED');

  const staged = await stageReviewedBaseline({
    buildId: prepared.build.buildId,
    metrics: { similarity: 0.97, mae: 7.65, width: 2667, height: 1500 },
  }, { buildRoot, projectRoot: root, now });
  assert.equal(staged.state, 'BASELINE_STAGED');
  const profileCalls = [];
  const renderCalls = [];
  const sealed = await sealReviewedBuild({
    buildId: prepared.build.buildId,
  }, {
    buildRoot,
    projectRoot: root,
    now,
    runSealProfile: (request) => {
      profileCalls.push(request);
      return { status: 0, stdout: 'consistency ok\n', stderr: '' };
    },
    runRenderProfile: (request) => {
      renderCalls.push(request);
      return { status: 0, stdout: 'render gates ok\n', stderr: '' };
    },
  });
  assert.equal(sealed.state, 'SEALED');
  assert.equal(profileCalls.length, 1);
  assert.equal(profileCalls[0].key, prepared.build.key);
  // The accepted per-locale render proof on this exact snapshot is reused.
  assert.deepEqual(renderCalls, []);
  const sealPayload = sealed.receipts.at(-1).payload;
  assert.equal(sealPayload.finalProfiles.length, 2);
  assert.equal(sealPayload.finalProfiles[0].profile, 'verify:dataset --skip-render');
  assert.equal(sealPayload.finalProfiles[0].status, 'passed');
  assert.match(sealPayload.finalProfiles[0].outputDigest, /^sha256:[a-f0-9]{64}$/);
  assert.deepEqual(
    sealPayload.finalProfiles.slice(1).map((row) => [row.profile, row.locale, row.reusedEvidence]),
    [['verify:d3', 'en', true]]
  );
  assert.equal(
    sealPayload.finalProfiles[1].outputDigest,
    reviewed.fidelityResult.automaticEvidence.locales.find((item) => item.locale === 'en').digest
  );
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
    manualCheckDecisions: manualCheckDecisions(prepared),
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
  const revenueRenderCalls = [];
  const sealed = await sealReviewedBuild({ buildId: prepared.build.buildId }, {
    buildRoot,
    projectRoot: root,
    now,
    runSealProfile: () => ({ status: 0, stdout: 'consistency ok\n', stderr: '' }),
    runRenderProfile: (request) => {
      revenueRenderCalls.push(request);
      return { status: 0, stdout: '', stderr: '' };
    },
  });
  assert.equal(sealed.state, 'SEALED');
  assert.deepEqual(revenueRenderCalls, []);
  const sealPayload = sealed.receipts.at(-1).payload;
  assert.deepEqual(sealPayload.finalProfiles.map((row) => row.profile), ['verify:dataset --skip-render']);
});

test('seal --fresh-render refuses to record when a locale render final profile fails', async (t) => {
  const { root, buildRoot, prepared } = await prepare(t);
  const evidenceManifest = await writeEvidence(root, prepared, 0);
  const verificationReference = await writeDatasetVerification(root, buildRoot, prepared);
  await finishReviewedBuild({
    buildId: prepared.build.buildId,
    packetDigest: prepared.packetReference.digest,
    evidenceManifests: [evidenceManifest],
    verificationReference,
    attestation: { reviewer: 'human:reviewer', decision: 'accepted' },
    regions: [],
    attention: { status: 'closed', closureNote: 'No open red-box region remains.' },
    feedback: [],
    riskChecks: [],
    manualCheckDecisions: manualCheckDecisions(prepared),
    interfaceMatrix: matrix(),
  }, { buildRoot, projectRoot: root, now });
  await stageReviewedBaseline({
    buildId: prepared.build.buildId,
    metrics: { similarity: 0.97, mae: 7.65, width: 2667, height: 1500 },
  }, { buildRoot, projectRoot: root, now });
  await assert.rejects(
    sealReviewedBuild({ buildId: prepared.build.buildId }, {
      buildRoot,
      projectRoot: root,
      now,
      freshRender: true,
      runSealProfile: () => ({ status: 0, stdout: 'consistency ok\n', stderr: '' }),
      runRenderProfile: () => ({ status: 1, stdout: '', stderr: 'G8 label clearance failed' }),
    }),
    (error) => error.code === 'SEAL_RENDER_PROFILE_FAILED' && error.details.locales.includes('en')
  );
  const after = await inspectBuildCloseout(prepared.build.buildId, { buildRoot, projectRoot: root });
  assert.equal(after.historicalState, 'BASELINE_STAGED');
});

test('seal refuses to record when the non-render consistency profile fails', async (t) => {
  const { root, buildRoot, prepared } = await prepareRevenueMetric(t);
  const verificationReference = await writeDatasetVerification(root, buildRoot, prepared);
  await finishReviewedBuild({
    buildId: prepared.build.buildId,
    reviewToken: prepared.reviewToken,
    verificationReference,
    attestation: { reviewer: 'human:data-reviewer', decision: 'accepted' },
    regions: [],
    attention: { status: 'closed', closureNote: 'No visual red-box surface applies.' },
    feedback: [],
    riskChecks: [],
    manualCheckDecisions: manualCheckDecisions(prepared),
    interfaceMatrix: null,
  }, { buildRoot, projectRoot: root, now });
  await stageReviewedBaseline({ buildId: prepared.build.buildId }, { buildRoot, projectRoot: root, now });
  await assert.rejects(
    sealReviewedBuild({ buildId: prepared.build.buildId }, {
      buildRoot,
      projectRoot: root,
      now,
      runSealProfile: () => ({ status: 1, stdout: '', stderr: 'ssot mismatch' }),
    }),
    (error) => error.code === 'SEAL_PROFILE_FAILED'
  );
  const after = await inspectBuildCloseout(prepared.build.buildId, { buildRoot, projectRoot: root });
  assert.equal(after.historicalState, 'BASELINE_STAGED');
});

test('Revenue Metric display-text review closes on the same data-only checklist', async (t) => {
  const { root, buildRoot, prepared } = await prepareRevenueMetric(t, ['display-text-only']);
  const plan = prepared.build.receipts.at(-1).payload.verificationPlan;
  assert.deepEqual(plan.requiredChecks.map((check) => check.id), ['adapter:data-consistency', 'adapter:human-review']);
  assert.deepEqual(plan.changeImpact, ['display-text-only']);
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
    manualCheckDecisions: manualCheckDecisions(prepared),
    interfaceMatrix: null,
  }, { buildRoot, projectRoot: root, now });
  assert.equal(reviewed.fidelityResult.status, 'accepted');
  assert.deepEqual(
    reviewed.fidelityResult.checkResults.map((result) => [result.checkId, result.evidenceKind]),
    [['adapter:data-consistency', 'dataset-consistency'], ['adapter:human-review', 'manual-decision']]
  );
});

test('the human-review decision must cite the source objects and Source digests', async (t) => {
  const { root, buildRoot, prepared } = await prepareRevenueMetric(t);
  const verificationReference = await writeDatasetVerification(root, buildRoot, prepared);
  const plan = prepared.build.receipts.at(-1).payload.verificationPlan;
  const review = (evidenceDigests) => finishReviewedBuild({
    buildId: prepared.build.buildId,
    reviewToken: prepared.reviewToken,
    verificationReference,
    attestation: { reviewer: 'human:data-reviewer', decision: 'accepted' },
    regions: [],
    attention: { status: 'closed', closureNote: 'No visual red-box surface applies.' },
    feedback: [],
    riskChecks: [],
    manualCheckDecisions: [{ checkId: 'adapter:human-review', status: 'passed', evidenceDigests }],
    interfaceMatrix: null,
  }, { buildRoot, projectRoot: root, now });
  await assert.rejects(review([plan.sourceDigest]), (error) => error.code === 'MANUAL_CHECK_EVIDENCE_MISMATCH');
  await assert.rejects(review([plan.sourceDigest, plan.sourceObjectsDigest, digest('forged')]), (error) => error.code === 'MANUAL_CHECK_EVIDENCE_MISMATCH');
  const pending = await finishReviewedBuild({
    buildId: prepared.build.buildId,
    reviewToken: prepared.reviewToken,
    verificationReference,
    attestation: { reviewer: 'human:data-reviewer', decision: 'accepted' },
    regions: [],
    attention: { status: 'closed', closureNote: 'No visual red-box surface applies.' },
    feedback: [],
    riskChecks: [],
    manualCheckDecisions: [],
    interfaceMatrix: null,
  }, { buildRoot, projectRoot: root, now });
  assert.ok(pending.fidelityResult.blockers.some((item) => item.code === 'REQUIRED_CHECK_MISSING' && item.subject === 'adapter:human-review'));
});

test('a Build authored under an older Plan protocol stays inspectable but must be re-prepared to finish', async (t) => {
  const { root, buildRoot, prepared } = await prepare(t);
  const manifestPath = path.join(buildRoot, prepared.build.buildId, 'manifest.json');
  const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
  const authored = manifest.receipts.at(-1).payload;
  // Historical shape: inventory + Source Coverage and a v5 Plan, no source objects.
  authored.inventory = { digest: digest('historical-inventory') };
  authored.sourceCoverage = { protocol: 'source-coverage/v2', digest: digest('historical-coverage') };
  delete authored.sourceObjects;
  authored.verificationPlan = { ...authored.verificationPlan, schemaVersion: 5, protocol: 'verification-plan/v5' };
  await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);

  const inspection = await inspectBuildCloseout(prepared.build.buildId, { buildRoot, projectRoot: root });
  assert.equal(inspection.historicalState, 'AUTHORED');
  await assert.rejects(
    finishReviewedBuild({ buildId: prepared.build.buildId, reviewToken: prepared.reviewToken }, { buildRoot, projectRoot: root, now }),
    (error) => error.code === 'VERIFICATION_PLAN_STALE'
  );
});

test('inspect keeps a historical SEALED FidelityResult v1 readable', async (t) => {
  const { root, buildRoot, prepared } = await prepare(t);
  const content = {
    schemaVersion: 1,
    kind: 'fidelity-result',
    status: 'accepted',
    subject: {
      buildId: prepared.build.buildId,
      key: prepared.build.key,
      adapter: prepared.build.adapter,
      authoredDigest: prepared.packet.authoredDigest,
      verificationPlanDigest: prepared.packet.verificationPlanDigest,
    },
    verificationPlan: {
      digest: prepared.packet.verificationPlanDigest,
      requiredLocales: ['en'],
      changeImpact: ['geometry', 'new-dataset'],
    },
    automaticEvidence: {
      consistency: { status: 'passed', digest: digest('legacy-consistency') },
      locales: [{ locale: 'en', status: 'passed', digest: digest('legacy-render') }],
    },
    attestation: { decision: 'accepted' },
    regions: [],
    feedbackSummary: { openItems: [], automationUpgradesRequired: [] },
    riskChecks: [],
    interfaceMatrix: {
      summary: {
        expectedInterfaces: 1,
        auditedInterfaces: 1,
        passedInterfaces: 1,
        failedInterfaces: 0,
        documentedExceptions: 0,
        pendingInterfaces: 0,
        notScoredInterfaces: 0,
      },
      digest: digest('legacy-matrix'),
    },
    attention: { status: 'closed', closureNote: 'Legacy review closed.' },
    blockers: [],
  };
  const legacyResult = { ...content, resultDigest: digestFidelityValue(content) };
  const ledger = projectFeedbackLedger([]);
  const [resultReference, ledgerReference] = await Promise.all([
    recordBuildObject(prepared.build.buildId, 'fidelity-result', legacyResult, { buildRoot, projectRoot: root }),
    recordBuildObject(prepared.build.buildId, 'feedback-ledger', ledger, { buildRoot, projectRoot: root }),
  ]);
  await recordDatasetBuildReviewOutcome(prepared.build.buildId, {
    expectedRevision: prepared.build.revision,
    status: 'accepted',
    authoredDigest: prepared.packet.authoredDigest,
    verificationPlanDigest: prepared.packet.verificationPlanDigest,
    fidelityResult: resultReference,
    feedbackLedger: ledgerReference,
    feedbackRecords: [],
  }, { buildRoot, projectRoot: root, now });
  const closed = await recordDatasetBuildCommand(prepared.build.buildId, {
    type: 'record-closed',
    expectedRevision: prepared.build.revision,
    snapshotDigest: prepared.packet.authoredDigest,
    fidelityResult: legacyResult,
    evidence: {
      candidate: { status: 'passed', digest: digest('legacy-candidate') },
      reference: { status: 'passed', digest: digest('legacy-reference') },
      process: { status: 'passed', digest: prepared.packet.verificationPlanDigest },
      human: { status: 'passed', digest: digest('legacy-human') },
    },
    reviewObjects: {
      fidelityResult: resultReference,
      feedbackLedger: ledgerReference,
      feedbackRecords: [],
    },
  }, { buildRoot, projectRoot: root, requireFresh: true, now });
  assert.equal(closed.state, 'CLOSED');
  await stageReviewedBaseline({
    buildId: prepared.build.buildId,
    metrics: { similarity: 0.97 },
  }, { buildRoot, projectRoot: root, now });
  await sealReviewedBuild({ buildId: prepared.build.buildId }, {
    buildRoot,
    projectRoot: root,
    now,
    runSealProfile: () => ({ status: 0, stdout: 'consistency ok\n', stderr: '' }),
    runRenderProfile: () => ({ status: 0, stdout: 'render gates ok\n', stderr: '' }),
  });

  const inspection = await inspectBuildCloseout(prepared.build.buildId, { buildRoot, projectRoot: root });
  assert.equal(inspection.historicalState, 'SEALED');
  assert.equal(inspection.reviewStatus, 'accepted');
  assert.equal(inspection.report.status, 'converged');
  assert.equal(inspection.report.interfaceMatrix.summary.passedInterfaces, 1);
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
    manualCheckDecisions: manualCheckDecisions(prepared),
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

test('versioned Sankey checkpoints require ordered, evidence-bound freezes before human closure', async (t) => {
  const { recordCheckpoint } = await import('../scripts/lib/workflow-checkpoints.mjs');
  const { readFile } = await import('node:fs/promises');
  const { root, buildRoot, prepared } = await prepare(t, {
    checkpointProtocol: 'fidelity-checkpoints/v1',
    dependencyScopes: { structure: digest('structure'), text: digest('text'), 'polish-l10n': digest('polish') },
  });
  const plan = prepared.build.receipts.at(-1).payload.verificationPlan;
  const original = await writeEvidence(root, prepared);
  const manifest = JSON.parse(await readFile(path.join(root, original), 'utf8'));
  const verificationReference = await writeDatasetVerification(root, buildRoot, prepared);
  const review = { ...pendingReviewInput(prepared, original, verificationReference), attestation: { reviewer: 'synthetic-reviewer', decision: 'accepted' } };
  await assert.rejects(finishReviewedBuild(review, { buildRoot, projectRoot: root, now }), /not frozen/);
  const checkpoints = [];
  for (const stage of ['structure', 'text', 'polish-l10n']) {
    const locator = `output/${stage}-fidelity-run.json`;
    await writeFile(path.join(root, locator), JSON.stringify({ ...manifest, archive: { focus: `${stage}-sweep` } }));
    if (stage === 'structure') await assert.rejects(recordCheckpoint(prepared.build, plan, { stage: 'text', status: 'frozen', reviewer: 'fixture', note: 'Not ordered', evidenceManifests: [locator] }, { buildRoot, projectRoot: root }), /Freeze structure/);
    checkpoints.push(await recordCheckpoint(prepared.build, plan, { stage, status: 'frozen', reviewer: 'fixture', note: 'Synthetic stage inspected', prior: checkpoints, evidenceManifests: [locator] }, { buildRoot, projectRoot: root }));
  }
  await recordCheckpoint(prepared.build, plan, { stage: 'structure', status: 'reopened', reviewer: 'fixture', note: 'A new visual concern must invalidate the old freeze' }, { buildRoot, projectRoot: root });
  await assert.rejects(finishReviewedBuild({ ...review, checkpoints }, { buildRoot, projectRoot: root, now }), /not frozen/);
  checkpoints.push(await recordCheckpoint(prepared.build, plan, { stage: 'structure', status: 'frozen', reviewer: 'fixture', note: 'Concern rechecked', evidenceManifests: ['output/structure-fidelity-run.json'] }, { buildRoot, projectRoot: root }));
  const closed = await finishReviewedBuild({ ...review, checkpoints }, { buildRoot, projectRoot: root, now });
  assert.equal(closed.build.state, 'CLOSED');
});

test('review-candidate/v1 Sankey Builds close on one evidence set and human acceptance without stage checkpoints', async (t) => {
  const { root, buildRoot, prepared } = await prepare(t, {
    checkpointProtocol: 'review-candidate/v1',
    dependencyScopes: { structure: digest('structure'), text: digest('text'), 'polish-l10n': digest('polish') },
  });
  const evidence = await writeEvidence(root, prepared);
  const verificationReference = await writeDatasetVerification(root, buildRoot, prepared);
  const review = { ...pendingReviewInput(prepared, evidence, verificationReference), attestation: { reviewer: 'synthetic-reviewer', decision: 'accepted' } };
  const closed = await finishReviewedBuild(review, { buildRoot, projectRoot: root, now });
  assert.equal(closed.build.state, 'CLOSED');
});
