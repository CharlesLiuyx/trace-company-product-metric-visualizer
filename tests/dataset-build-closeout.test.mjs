import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { mkdir, mkdtemp, readFile, rename, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { createDatasetBuild, digestValue } from '../scripts/lib/dataset-build.mjs';
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
  readBuildObject,
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
  // The receipt references the content by Build object digest; it embeds none of it.
  assert.deepEqual(Object.keys(payload.sourceObjects).sort(), ['digest', 'object', 'protocol']);
  assert.deepEqual(Object.keys(payload.verificationPlan).sort(), ['digest', 'object', 'protocol']);
  assert.equal(payload.sourceObjects.protocol, 'source-objects/v1');
  assert.equal(payload.sourceObjects.digest, prepared.sourceObjects.sourceObjectsDigest);
  assert.equal(payload.verificationPlan.protocol, 'verification-plan/v6');
  assert.equal(payload.verificationPlan.digest, payload.verificationPlanDigest);
  const sourceObjects = await readBuildObject(prepared.build.buildId, payload.sourceObjects.object, { buildRoot: base.buildRoot });
  assert.deepEqual(sourceObjects.reconciliation, { status: 'passed', checked: 2, unit: 'B' });
  assert.deepEqual(sourceObjects.summary.valueNodeIds, ['revenue']);
  assert.deepEqual(sourceObjects.summary.nonNodeMetricIds, ['restructuring']);
  const plan = await authoredPlan({ prepared, buildRoot: base.buildRoot });
  assert.equal(plan.sourceObjectsDigest, prepared.sourceObjects.sourceObjectsDigest);
  assert.equal(prepared.packet.protocol, 'review-packet/v5');
  assert.equal(prepared.packet.sourceObjectsDigest, prepared.sourceObjects.sourceObjectsDigest);
  assert.equal(prepared.packet.sourceObjects.kind, 'source-objects');
  assert.equal(Object.hasOwn(payload, 'inventory'), false);
});

async function authoredPlan({ prepared, buildRoot }) {
  const payload = prepared.build.receipts.at(-1).payload;
  return readBuildObject(prepared.build.buildId, payload.verificationPlan.object, { buildRoot });
}

function sourceObjectsInput() {
  return {
    objects: [
      { id: 'revenue-label', class: 'label', label: 'Revenue', referenceBBox: [180, 420, 160, 44], labelGroup: 'revenue' },
      { id: 'flow-revenue-profit', class: 'flow' },
    ],
  };
}

function bytesDigest(value) {
  return `sha256:${createHash('sha256').update(value).digest('hex')}`;
}

// One archived, evidence-ready render for one locale, shaped like the output
// of record:fidelity (no contact sheet: it exists only for failed runs).
async function writeEvidence(root, prepared, options = {}) {
  const language = options.language || 'en';
  const archive = path.join(root, 'output', 'compare', prepared.build.key, `01-baseline-review-candidate-${language}`);
  await mkdir(archive, { recursive: true });
  const names = {
    reference: 'reference.png',
    candidate: 'candidate.png',
    diff: 'diff.png',
    metrics: 'metrics.json',
    interfaceAudit: 'interface-audit.json',
  };
  const relative = (name) => path.relative(root, path.join(archive, name)).split(path.sep).join('/');
  for (const [kind, name] of Object.entries(names)) {
    const contents = kind === 'metrics'
      ? JSON.stringify({
          dataset: prepared.build.key,
          language,
          full: options.metrics || { similarity: 0.97, mae: 7.65, width: 2667, height: 1500 },
          gates: { purity: 'passed', canvas: 'passed', fonts: 'passed', 'node-paint': 'passed', 'render-audits': 'passed', typography: 'passed', 'label-layout': 'passed', interface: 'passed', 'interface-evidence': 'passed', 'page-errors': 'passed' },
        })
      : `${kind}-${language}\n`;
    await writeFile(path.join(archive, name), contents);
  }
  const manifest = {
    schemaVersion: 1,
    status: options.status || 'evidence-ready',
    runId: `run-${language}`,
    identity: {
      dataset: prepared.build.key,
      language,
      runKind: 'fidelity-review',
      protocolVersion: 'fidelity-run/2',
      buildId: prepared.build.buildId,
      authoredDigest: options.authoredDigest || prepared.packet.authoredDigest,
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

const ACCEPTANCE = Object.freeze({ reviewer: 'human:reviewer', decision: 'accepted', note: 'Synthetic fixture compared with its Source' });

function reviewInput(prepared, evidenceManifests, verificationReference, overrides = {}) {
  return {
    buildId: prepared.build.buildId,
    reviewToken: prepared.reviewToken,
    ...(evidenceManifests ? { evidenceManifests } : {}),
    verificationReference,
    acceptance: { ...ACCEPTANCE },
    ...overrides,
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
  const recorded = await readBuildObject(prepared.build.buildId, payload.sourceObjects.object, { buildRoot: base.buildRoot });
  assert.equal(recorded.source.locator, processedPath);
  assert.deepEqual(recorded.shortNodes, [{ node: 'short', reason: 'The native Source paints a genuine two-pixel node face.' }]);
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

test('render and consistency evidence without an acceptance cannot close a Build', async (t) => {
  const { root, buildRoot, prepared } = await prepare(t);
  const evidenceManifest = await writeEvidence(root, prepared);
  const verificationReference = await writeDatasetVerification(root, buildRoot, prepared);
  await assert.rejects(
    finishReviewedBuild(reviewInput(prepared, [evidenceManifest], verificationReference, { acceptance: undefined }), { buildRoot, projectRoot: root, now }),
    (error) => error.code === 'ACCEPTANCE_REQUIRED'
  );
  await assert.rejects(
    finishReviewedBuild(reviewInput(prepared, [evidenceManifest], verificationReference, { acceptance: { ...ACCEPTANCE, decision: 'rejected' } }), { buildRoot, projectRoot: root, now }),
    (error) => error.code === 'ACCEPTANCE_REQUIRED'
  );
  assert.equal((await readDatasetBuild(prepared.build.buildId, { buildRoot })).state, 'AUTHORED');
  const inspection = await inspectBuildCloseout(prepared.build.buildId, { buildRoot, projectRoot: root });
  assert.equal(inspection.reviewStatus, 'review-pending');
  assert.equal(inspection.report, undefined);
});

test('finish blocks when a required locale lacks evidence-ready render evidence on the current snapshot', async (t) => {
  const { root, buildRoot, prepared } = await prepare(t, { requiredLocales: ['en', 'zh'] });
  const english = await writeEvidence(root, prepared);
  const verificationReference = await writeDatasetVerification(root, buildRoot, prepared);
  await assert.rejects(
    finishReviewedBuild(reviewInput(prepared, [english], verificationReference), { buildRoot, projectRoot: root, now }),
    (error) => error.code === 'EVIDENCE_LOCALE_MISSING' && /zh/.test(error.message)
  );
  const failedChinese = await writeEvidence(root, prepared, { language: 'zh', status: 'failed' });
  await assert.rejects(
    finishReviewedBuild(reviewInput(prepared, [english, failedChinese], verificationReference), { buildRoot, projectRoot: root, now }),
    (error) => error.code === 'EVIDENCE_NOT_READY'
  );
  const staleChinese = await writeEvidence(root, prepared, { language: 'zh', authoredDigest: digest('older-snapshot') });
  await assert.rejects(
    finishReviewedBuild(reviewInput(prepared, [english, staleChinese], verificationReference), { buildRoot, projectRoot: root, now }),
    (error) => error.code === 'STALE_AUTOMATIC_EVIDENCE'
  );
  assert.equal((await readDatasetBuild(prepared.build.buildId, { buildRoot })).state, 'AUTHORED');
  const chinese = await writeEvidence(root, prepared, { language: 'zh' });
  const closed = await finishReviewedBuild(reviewInput(prepared, [english, chinese], verificationReference), { buildRoot, projectRoot: root, now });
  assert.deepEqual(closed.fidelityResult.evidence.map((item) => item.locale), ['en', 'zh']);
});

test('render evidence cannot close a Build without Build-bound dataset consistency evidence', async (t) => {
  const { root, buildRoot, prepared } = await prepare(t);
  const evidenceManifest = await writeEvidence(root, prepared);
  await assert.rejects(
    finishReviewedBuild(reviewInput(prepared, [evidenceManifest], undefined), { buildRoot, projectRoot: root, now }),
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
    finishReviewedBuild(reviewInput(prepared, [evidenceManifest], verificationReference), { buildRoot, projectRoot: root, now }),
    (error) => error.code === 'REVIEW_OUTCOME_STALE'
  );
  assert.equal((await readDatasetBuild(prepared.build.buildId, { buildRoot })).state, 'AUTHORED');
});

test('a short acceptance closes, stages, seals, and becomes stale when authored bytes change', async (t) => {
  const { root, buildRoot, artifact, prepared } = await prepare(t);
  const evidenceManifest = await writeEvidence(root, prepared);
  const verificationReference = await writeDatasetVerification(root, buildRoot, prepared);
  const reviewed = await finishReviewedBuild(reviewInput(prepared, [evidenceManifest], verificationReference), { buildRoot, projectRoot: root, now });
  assert.equal(reviewed.fidelityResult.protocol, 'fidelity-result/v3');
  assert.equal(reviewed.fidelityResult.status, 'accepted');
  assert.deepEqual(reviewed.fidelityResult.acceptance, { ...ACCEPTANCE, reviewedAt: now() });
  assert.deepEqual(reviewed.fidelityResult.evidence[0].metrics, { similarity: 0.97, mae: 7.65, width: 2667, height: 1500 });
  assert.equal(reviewed.fidelityResult.automatic.locales[0].gates.interface, 'passed');
  for (const retired of ['checkResults', 'interfaceMatrix', 'attention', 'regions', 'riskChecks', 'feedbackSummary', 'blockers']) {
    assert.equal(Object.hasOwn(reviewed.fidelityResult, retired), false, retired);
  }
  assert.equal(reviewed.build.state, 'CLOSED');
  const closure = reviewed.build.receipts.at(-1).payload;
  assert.deepEqual(Object.keys(closure.reviewObjects), ['fidelityResult']);

  const staged = await stageReviewedBaseline({
    buildId: prepared.build.buildId,
    metrics: reviewed.fidelityResult.evidence[0].metrics,
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
  assert.deepEqual(profileCalls, []);
  assert.equal(sealed.receipts.at(-1).payload.finalProfiles[0].reusedEvidence, true);
  assert.equal(sealed.receipts.at(-1).payload.finalProfiles[0].outputDigest, verificationReference.digest);
  // The accepted per-locale render proof on this exact snapshot is reused.
  assert.deepEqual(renderCalls, []);
  const sealPayload = sealed.receipts.at(-1).payload;
  assert.equal(sealPayload.finalProfiles.length, 2);
  assert.equal(sealPayload.finalProfiles[0].profile, 'verify:dataset --skip-render');
  assert.deepEqual(
    sealPayload.finalProfiles.slice(1).map((row) => [row.profile, row.locale, row.reusedEvidence]),
    [['verify:d3', 'en', true]]
  );
  assert.equal(sealPayload.finalProfiles[1].outputDigest, reviewed.fidelityResult.evidence[0].digest);
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
  await assert.rejects(
    finishReviewedBuild(reviewInput(prepared, ['output/compare/foreign/fidelity-run.json'], verificationReference), { buildRoot, projectRoot: root, now }),
    (error) => error.code === 'ADAPTER_EVIDENCE_INVALID'
  );
  const reviewed = await finishReviewedBuild(reviewInput(prepared, null, verificationReference), { buildRoot, projectRoot: root, now });
  assert.equal(reviewed.fidelityResult.status, 'accepted');
  assert.equal(reviewed.build.state, 'CLOSED');
  assert.equal(reviewed.fidelityResult.automatic.consistency.status, 'passed');
  assert.deepEqual(reviewed.fidelityResult.evidence, []);

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
  const evidenceManifest = await writeEvidence(root, prepared);
  const verificationReference = await writeDatasetVerification(root, buildRoot, prepared);
  await finishReviewedBuild(reviewInput(prepared, [evidenceManifest], verificationReference), { buildRoot, projectRoot: root, now });
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

test('seal --fresh-checks refuses to record when the non-render consistency profile fails', async (t) => {
  const { root, buildRoot, prepared } = await prepareRevenueMetric(t);
  const verificationReference = await writeDatasetVerification(root, buildRoot, prepared);
  await finishReviewedBuild(reviewInput(prepared, null, verificationReference), { buildRoot, projectRoot: root, now });
  await stageReviewedBaseline({ buildId: prepared.build.buildId }, { buildRoot, projectRoot: root, now });
  await assert.rejects(
    sealReviewedBuild({ buildId: prepared.build.buildId }, {
      buildRoot,
      projectRoot: root,
      now,
      freshChecks: true,
      runSealProfile: () => ({ status: 1, stdout: '', stderr: 'ssot mismatch' }),
    }),
    (error) => error.code === 'SEAL_PROFILE_FAILED'
  );
  const after = await inspectBuildCloseout(prepared.build.buildId, { buildRoot, projectRoot: root });
  assert.equal(after.historicalState, 'BASELINE_STAGED');
});

test('Revenue Metric display-text review closes on the same data-only checklist', async (t) => {
  const { root, buildRoot, prepared } = await prepareRevenueMetric(t, ['display-text-only']);
  const plan = await authoredPlan({ prepared, buildRoot });
  assert.deepEqual(plan.requiredChecks.map((check) => check.id), ['adapter:data-consistency', 'adapter:human-review']);
  assert.deepEqual(plan.changeImpact, ['display-text-only']);
  const verificationReference = await writeDatasetVerification(root, buildRoot, prepared);
  const reviewed = await finishReviewedBuild(reviewInput(prepared, null, verificationReference), { buildRoot, projectRoot: root, now });
  assert.equal(reviewed.fidelityResult.status, 'accepted');
  assert.equal(reviewed.fidelityResult.subject.verificationPlanDigest, plan.planDigest);
});

test('a Build authored under an older Plan protocol stays inspectable but must be re-prepared to finish', async (t) => {
  const { root, buildRoot, prepared } = await prepare(t);
  const plan = await authoredPlan({ prepared, buildRoot });
  const manifestPath = path.join(buildRoot, prepared.build.buildId, 'manifest.json');
  const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
  const authored = manifest.receipts.at(-1).payload;
  // Historical shape: inventory + Source Coverage and an embedded v5 Plan, no source objects.
  authored.inventory = { digest: digest('historical-inventory') };
  authored.sourceCoverage = { protocol: 'source-coverage/v2', digest: digest('historical-coverage') };
  delete authored.sourceObjects;
  authored.verificationPlan = { ...plan, digest: plan.planDigest, schemaVersion: 5, protocol: 'verification-plan/v5' };
  await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);

  const inspection = await inspectBuildCloseout(prepared.build.buildId, { buildRoot, projectRoot: root });
  assert.equal(inspection.historicalState, 'AUTHORED');
  await assert.rejects(
    finishReviewedBuild({ buildId: prepared.build.buildId, reviewToken: prepared.reviewToken }, { buildRoot, projectRoot: root, now }),
    (error) => error.code === 'VERIFICATION_PLAN_STALE'
  );
});

test('a Build recorded with an embedded Plan still finishes and gets a v3 result', async (t) => {
  const { root, buildRoot, prepared } = await prepare(t);
  const plan = await authoredPlan({ prepared, buildRoot });
  const sourceObjects = await readBuildObject(prepared.build.buildId, prepared.build.receipts.at(-1).payload.sourceObjects.object, { buildRoot });
  const manifestPath = path.join(buildRoot, prepared.build.buildId, 'manifest.json');
  const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
  const authored = manifest.receipts.at(-1).payload;
  // Receipts recorded before references embedded both objects inline.
  authored.sourceObjects = { ...sourceObjects, digest: sourceObjects.sourceObjectsDigest };
  authored.verificationPlan = { ...plan, digest: plan.planDigest };
  await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  const evidenceManifest = await writeEvidence(root, prepared);
  const verificationReference = await writeDatasetVerification(root, buildRoot, prepared);
  const closed = await finishReviewedBuild(reviewInput(prepared, [evidenceManifest], verificationReference), { buildRoot, projectRoot: root, now });
  assert.equal(closed.build.state, 'CLOSED');
  assert.equal(closed.fidelityResult.protocol, 'fidelity-result/v3');
});

test('inspect and seal keep a historical fidelity-result/v2 closure readable', async (t) => {
  const { root, buildRoot, prepared } = await prepare(t);
  const content = {
    schemaVersion: 2,
    protocol: 'fidelity-result/v2',
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
      requiredChecks: [],
    },
    automaticEvidence: {
      authoredDigest: prepared.packet.authoredDigest,
      verificationPlanDigest: prepared.packet.verificationPlanDigest,
      consistency: { status: 'passed', digest: digest('legacy-consistency') },
      locales: [{ locale: 'en', status: 'passed', digest: digest('legacy-render') }],
    },
    checkResults: [],
    attestation: { reviewer: 'human:legacy', reviewedAt: now(), decision: 'accepted' },
    regions: [],
    feedbackSummary: { openItems: [], automationUpgradesRequired: [] },
    riskChecks: [],
    interfaceMatrix: { summary: { expectedInterfaces: 1, auditedInterfaces: 1 }, digest: digest('legacy-matrix') },
    attention: { status: 'closed', closureNote: 'Legacy review closed.' },
    blockers: [],
  };
  const legacyResult = { ...content, resultDigest: digestFidelityValue(content) };
  const resultReference = await recordBuildObject(prepared.build.buildId, 'fidelity-result', legacyResult, { buildRoot, projectRoot: root });
  await recordDatasetBuildReviewOutcome(prepared.build.buildId, {
    expectedRevision: prepared.build.revision,
    status: 'accepted',
    authoredDigest: prepared.packet.authoredDigest,
    verificationPlanDigest: prepared.packet.verificationPlanDigest,
    fidelityResult: resultReference,
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
    reviewObjects: { fidelityResult: resultReference },
  }, { buildRoot, projectRoot: root, requireFresh: true, now });
  assert.equal(closed.state, 'CLOSED');
  // Manifests written before this change also reference a feedback ledger.
  const manifestPath = path.join(buildRoot, prepared.build.buildId, 'manifest.json');
  const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
  manifest.review.references.feedbackLedger = { kind: 'feedback-ledger', digest: digest('legacy-ledger'), path: 'objects/feedback-ledger/legacy.json' };
  await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  await stageReviewedBaseline({
    buildId: prepared.build.buildId,
    metrics: { similarity: 0.97 },
  }, { buildRoot, projectRoot: root, now });
  const renderCalls = [];
  const sealed = await sealReviewedBuild({ buildId: prepared.build.buildId }, {
    buildRoot,
    projectRoot: root,
    now,
    runSealProfile: () => ({ status: 0, stdout: 'consistency ok\n', stderr: '' }),
    runRenderProfile: (request) => {
      renderCalls.push(request);
      return { status: 0, stdout: 'render gates ok\n', stderr: '' };
    },
  });
  assert.deepEqual(renderCalls, [], 'the accepted v2 per-locale evidence is reused');
  assert.equal(sealed.receipts.at(-1).payload.finalProfiles[1].outputDigest, digest('legacy-render'));

  const inspection = await inspectBuildCloseout(prepared.build.buildId, { buildRoot, projectRoot: root });
  assert.equal(inspection.historicalState, 'SEALED');
  assert.equal(inspection.reviewStatus, 'accepted');
  assert.equal(inspection.report.status, 'converged');
  assert.equal(inspection.report.fidelityResultProtocol, 'fidelity-result/v2');
  assert.match(inspection.taskInformation, /Acceptance: human:legacy/);
});

test('baseline staging refuses a closure whose authored bytes are already stale', async (t) => {
  const { root, buildRoot, artifact, prepared } = await prepare(t);
  const evidenceManifest = await writeEvidence(root, prepared);
  const verificationReference = await writeDatasetVerification(root, buildRoot, prepared);
  const reviewed = await finishReviewedBuild(reviewInput(prepared, [evidenceManifest], verificationReference), { buildRoot, projectRoot: root, now });
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
  const { root, buildRoot, prepared } = await prepare(t, {
    checkpointProtocol: 'fidelity-checkpoints/v1',
    dependencyScopes: { structure: digest('structure'), text: digest('text'), 'polish-l10n': digest('polish') },
  });
  const plan = await authoredPlan({ prepared, buildRoot });
  const original = await writeEvidence(root, prepared);
  const manifest = JSON.parse(await readFile(path.join(root, original), 'utf8'));
  const verificationReference = await writeDatasetVerification(root, buildRoot, prepared);
  const review = reviewInput(prepared, [original], verificationReference);
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
  const closed = await finishReviewedBuild(reviewInput(prepared, [evidence], verificationReference), { buildRoot, projectRoot: root, now });
  assert.equal(closed.build.state, 'CLOSED');
});

test('accept atomically records closure, exact baseline and seal without running checks again', async (t) => {
  const { root, buildRoot, prepared } = await prepare(t, { requiredLocales: ['en', 'zh'] });
  const english = await writeEvidence(root, prepared), chinese = await writeEvidence(root, prepared, { language: 'zh' });
  const verification = await writeDatasetVerification(root, buildRoot, prepared);
  const result = await finishReviewedBuild(reviewInput(prepared, [english, chinese], verification), {
    buildRoot, projectRoot: root, now, seal: true,
    runSealProfile: () => assert.fail('accept must reuse consistency evidence'),
    runRenderProfile: () => assert.fail('accept must reuse render evidence'),
  });
  assert.equal(result.build.state, 'SEALED');
  assert.deepEqual(result.build.receipts.slice(-3).map((item) => item.state), ['CLOSED', 'BASELINE_STAGED', 'SEALED']);
  assert.deepEqual(result.build.receipts.at(-2).payload.metrics, result.fidelityResult.evidence.find((item) => item.locale === 'en').metrics);
  assert.deepEqual(result.build.receipts.at(-1).payload.finalProfiles.map((row) => [row.profile, row.locale, row.reusedEvidence]), [
    ['verify:dataset --skip-render', undefined, true], ['verify:d3', 'en', true], ['verify:d3', 'zh', true],
  ]);
  assert.equal((await inspectBuildCloseout(prepared.build.buildId, { buildRoot, projectRoot: root })).fresh, true);
});

test('failed atomic accept leaves the authored manifest byte-identical, without partial human acceptance', async (t) => {
  const { root, buildRoot, artifact, prepared } = await prepare(t);
  const evidence = await writeEvidence(root, prepared);
  const verification = await writeDatasetVerification(root, buildRoot, prepared);
  const file = path.join(buildRoot, prepared.build.buildId, 'manifest.json');
  const before = await readFile(file, 'utf8');
  await writeFile(path.join(root, artifact), 'changed after review');
  await assert.rejects(finishReviewedBuild(reviewInput(prepared, [evidence], verification), {
    buildRoot, projectRoot: root, now, seal: true,
  }), (error) => error.code === 'REVIEW_OUTCOME_STALE');
  assert.equal(await readFile(file, 'utf8'), before);
});

test('a baseline validation failure also rolls back the acceptance and closure', async (t) => {
  const { root, buildRoot, prepared } = await prepare(t);
  const evidence = await writeEvidence(root, prepared, { metrics: { similarity: null } });
  const verification = await writeDatasetVerification(root, buildRoot, prepared);
  const file = path.join(buildRoot, prepared.build.buildId, 'manifest.json');
  const before = await readFile(file, 'utf8');
  await assert.rejects(finishReviewedBuild(reviewInput(prepared, [evidence], verification), {
    buildRoot, projectRoot: root, now, seal: true,
  }), /similarity/);
  assert.equal(await readFile(file, 'utf8'), before);
});
