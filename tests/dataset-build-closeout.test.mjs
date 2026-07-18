import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { mkdir, mkdtemp, rename, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { PNG } from 'pngjs';
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

function sourcePng({ paintedNonNodeFace = false } = {}) {
  const png = new PNG({ width: 100, height: 80 });
  for (let index = 0; index < png.data.length; index += 4) {
    png.data[index] = 242;
    png.data[index + 1] = 242;
    png.data[index + 2] = 242;
    png.data[index + 3] = 255;
  }
  const paint = ([x, y, width, height]) => {
    for (let row = y; row < y + height; row += 1) {
      for (let column = x; column < x + width; column += 1) {
        const index = (row * png.width + column) * 4;
        png.data[index] = 207;
        png.data[index + 1] = 60;
        png.data[index + 2] = 35;
      }
    }
  };
  paint([20, 10, 40, 8]);
  if (paintedNonNodeFace) paint([20, 46, 40, 2]);
  return PNG.sync.write(png);
}

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

function incomeSourceCoverage(inventoryInput) {
  return {
    scanPasses: ['geometry', 'residual', 'semantic-value'],
    items: inventoryInput.objects.map((object, index) => {
      const nodeMapped = object.mapping.some((mapping) =>
        mapping.role === 'render' && /(^|[./:])nodes?[./:]/i.test(mapping.target)
      );
      const y = 20 + index * 40;
      const face = nodeMapped
        ? {
            searchBBox: [20, y, 100, 20],
            observedBBox: [30, y + 8, 72, 4],
          }
        : null;
      return {
        sourceId: `source:${object.id.replace(/[^a-z0-9]+/g, '-')}`,
        sourceClass: nodeMapped || object.mapping.some((mapping) => /link|interface/i.test(mapping.target))
          ? 'structural-flow'
          : 'label-or-annotation',
        sourceLabel: object.id,
        inventoryObjectIds: [object.id],
        contentBBox: [20, y, 100, 20],
        ...(face ? { face } : {}),
      };
    }),
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

test('prepare-review rejects a legacy invisible-node claim instead of compiling it into a new Plan', async (t) => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'dataset-build-hidden-anchor-test-'));
  const buildRoot = path.join(root, 'output', 'builds');
  const key = 'hidden-anchor-q4-fy25';
  const sourcePath = `input/processing/${key}.png`;
  const adapterPath = `data/datasets/${key}.js`;
  const sourceBytes = 'source-image-bytes';
  const sourceDigest = bytesDigest(sourceBytes);
  await mkdir(path.join(root, 'input', 'processing'), { recursive: true });
  await mkdir(path.join(root, 'data', 'datasets'), { recursive: true });
  await writeFile(path.join(root, sourcePath), sourceBytes);
  await writeFile(path.join(root, adapterPath), 'export const marker = 1;\n');
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
      width: 400,
      height: 300,
    }],
    sourceClassification: sourceClassification({
      key,
      adapter: 'income-statement',
      sourcePath: `input/pending/${key}.png`,
      sourceDigest,
      width: 400,
      height: 300,
    }),
  }, { now, id: () => `build-${key}` });
  await initializeDatasetBuild(build, { buildRoot });
  t.after(() => rm(root, { recursive: true, force: true }));

  const hiddenInventory = (evidenceDigest) => ({
    schemaVersion: 3,
    protocol: 'object-inventory/v3',
    datasetKey: key,
    objects: [{
      id: 'node:guide-end',
      kind: 'hidden-anchor',
      disposition: 'render',
      mapping: [{ role: 'render', target: 'nodes.guide_end' }],
      features: ['hidden-anchor'],
      featureEvidence: {
        'hidden-anchor': {
          source: 'reference-crop',
          locator: `${sourcePath}#guide-end`,
          digest: evidenceDigest,
          referenceBBox: [120, 200, 72, 1],
          inspectionMethod: 'native-scale-crop-and-pixel-scan',
          classificationClaim: 'no-visible-node-face-observed',
          reason: 'The native crop contains only a guide endpoint and no independent node face.',
        },
      },
    }],
  });
  const artifacts = [
    { path: sourcePath, role: 'reference-image' },
    { path: adapterPath, role: 'view-adapter' },
  ];

  await assert.rejects(
    prepareBuildReview({
      buildId: build.buildId,
      inventory: hiddenInventory(digest('wrong-source')),
      sourceCoverage: incomeSourceCoverage(hiddenInventory(digest('wrong-source'))),
      artifacts,
      changeImpact: ['geometry'],
      requiredLocales: ['en'],
    }, { buildRoot, projectRoot: root, now }),
    (error) => error.code === 'INVENTORY_HIDDEN_NODE_UNSUPPORTED'
  );
});

async function zeroPaintBuildFixture(t, suffix, { paintedNonNodeFace }) {
  const root = await mkdtemp(path.join(os.tmpdir(), `dataset-build-zero-paint-${suffix}-`));
  const buildRoot = path.join(root, 'output', 'builds');
  const key = `zero-paint-${suffix}-q3-fy26`;
  const sourcePath = `input/processing/${key}.png`;
  const adapterPath = `data/datasets/${key}.js`;
  const sourceBytes = sourcePng({ paintedNonNodeFace });
  const sourceDigest = bytesDigest(sourceBytes);
  await mkdir(path.join(root, 'input', 'processing'), { recursive: true });
  await mkdir(path.join(root, 'data', 'datasets'), { recursive: true });
  await writeFile(path.join(root, sourcePath), sourceBytes);
  await writeFile(path.join(root, adapterPath), 'export const marker = 1;\n');
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
      width: 100,
      height: 80,
    }],
    sourceClassification: sourceClassification({
      key,
      adapter: 'income-statement',
      sourcePath: `input/pending/${key}.png`,
      sourceDigest,
      width: 100,
      height: 80,
    }),
  }, { now, id: () => `build-${key}` });
  await initializeDatasetBuild(build, { buildRoot });
  t.after(() => rm(root, { recursive: true, force: true }));

  const inventory = {
    datasetKey: key,
    objects: [
      {
        id: 'node:revenue',
        kind: 'financial-line-item',
        disposition: 'render',
        mapping: [
          { role: 'data', target: 'incomeStatement.revenue.total' },
          { role: 'render', target: 'nodes.revenue' },
        ],
        features: ['visible-node-face'],
      },
      {
        id: 'metric:restructuring',
        kind: 'financial-line-item',
        disposition: 'render',
        mapping: [
          { role: 'data', target: 'incomeStatement.costs.operatingExpenses.items.restructuring' },
          { role: 'render', target: 'nonNodeMetrics.restructuring' },
        ],
        features: ['zero-paint-node-slot'],
        featureEvidence: {
          'zero-paint-node-slot': {
            source: 'same-column-node-slot',
            locator: `${sourcePath}#restructuring-node-slot`,
            digest: sourceDigest,
            referenceBBox: [20, 40, 40, 20],
            inspectionMethod: 'native-scale-node-slot-pixel-scan',
            classificationClaim: 'no-painted-node-face-observed',
            reason: 'The native Source slot has no painted node face.',
          },
        },
      },
    ],
  };
  const sourceCoverage = {
    scanPasses: ['geometry', 'residual', 'semantic-value'],
    items: [
      {
        sourceId: 'source:revenue',
        sourceClass: 'financial-value',
        sourceLabel: 'Revenue',
        contentBBox: [10, 5, 70, 25],
        inventoryObjectIds: ['node:revenue'],
        amount: { literal: '$1B', value: '1', unit: 'B', resolution: '1' },
        ssotRef: { family: 'income-statement', path: 'revenue.total', id: 'revenue' },
        face: {
          searchBBox: [15, 5, 50, 20],
          observedBBox: [20, 10, 40, 8],
        },
      },
      {
        sourceId: 'source:restructuring',
        sourceClass: 'financial-value',
        sourceLabel: 'Restructuring',
        contentBBox: [20, 40, 40, 20],
        inventoryObjectIds: ['metric:restructuring'],
        amount: { literal: '$5M', value: '5', unit: 'M', resolution: '1' },
        ssotRef: {
          family: 'income-statement',
          path: 'costs.operatingExpenses.items',
          id: 'restructuring',
        },
      },
    ],
  };
  const loadedData = {
    records: [{
      key,
      unit: 'B',
      decimals: 3,
      revenue: { total: 1, items: [] },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', value: 0, items: [] },
        operatingExpenses: {
          total: 0.005,
          items: [{ id: 'restructuring', value: 0.005 }],
        },
      },
    }],
    datasets: [{
      key,
      meta: { unit: 'B', decimals: 3 },
      nodes: [{ id: 'revenue', value: 1, valueText: '$1B' }],
      nonNodeMetrics: [{ id: 'restructuring', representation: 'flow', value: 0.005 }],
    }],
  };
  return {
    root,
    buildRoot,
    build,
    inventory,
    sourceCoverage,
    loadedData,
    sourcePath,
    adapterPath,
  };
}

test('prepare-review rejects a painted financial non-node slot before recording AUTHORED', async (t) => {
  const painted = await zeroPaintBuildFixture(t, 'painted', { paintedNonNodeFace: true });
  const reviewInput = {
    buildId: painted.build.buildId,
    inventory: painted.inventory,
    sourceCoverage: painted.sourceCoverage,
    artifacts: [
      { path: painted.adapterPath, role: 'view-adapter' },
      { path: painted.sourcePath, role: 'reference-image' },
    ],
    changeImpact: ['geometry'],
    requiredLocales: ['en'],
  };
  await assert.rejects(
    prepareBuildReview(reviewInput, {
      buildRoot: painted.buildRoot,
      projectRoot: painted.root,
      loadedData: painted.loadedData,
      now,
    }),
    (error) => error.code === 'SOURCE_FACE_PRESENT_FOR_NON_NODE'
  );
  const rejectedBuild = await readDatasetBuild(painted.build.buildId, {
    buildRoot: painted.buildRoot,
  });
  assert.equal(rejectedBuild.state, 'INTAKED');
  assert.equal(
    rejectedBuild.receipts.some((receipt) => receipt.type === 'record-authored'),
    false
  );

  const empty = await zeroPaintBuildFixture(t, 'empty', { paintedNonNodeFace: false });
  const prepared = await prepareBuildReview({
    ...reviewInput,
    buildId: empty.build.buildId,
    inventory: empty.inventory,
    sourceCoverage: empty.sourceCoverage,
    artifacts: [
      { path: empty.adapterPath, role: 'view-adapter' },
      { path: empty.sourcePath, role: 'reference-image' },
    ],
  }, {
    buildRoot: empty.buildRoot,
    projectRoot: empty.root,
    loadedData: empty.loadedData,
    now,
  });
  assert.equal(prepared.build.state, 'AUTHORED');
});

function inventory(key, sourceDigest) {
  return {
    datasetKey: key,
    objects: [
      {
        id: 'label:revenue',
        kind: 'label',
        disposition: 'render',
        mapping: [{ role: 'render', target: 'layout.labels.revenue' }],
        features: ['centered-side-label', 'measured-label-position'],
        featureEvidence: {
          'measured-label-position': {
            source: 'reference-measurement',
            locator: `input/processing/${key}.png#revenue-label-group`,
            digest: sourceDigest,
            referenceBBox: [180, 420, 160, 44],
            inspectionMethod: 'native-scale-reference-measurement',
          },
        },
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
  const nodeFacePolicy = prepared.build.receipts.at(-1).payload.verificationPlan.nodeFacePolicy;
  const nodePaintRecords = [
    ...(nodeFacePolicy.visibleNodeIds || []).map((id) => ({ id, faceVisible: true, faceHeight: 4 })),
    ...(nodeFacePolicy.hiddenNodeIds || []).map((id) => ({ id, faceVisible: false, faceHeight: 0 })),
  ];
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
  return [
    {
      checkId: 'adapter:source-coverage-review',
      status: 'passed',
      evidenceDigests: [plan.sourceCoverageDigest, plan.sourceDigest],
    },
    ...(plan.requiredChecks.some((check) => check.id === 'adapter:manual-visual-closure')
      ? [{
          checkId: 'adapter:manual-visual-closure',
          locale: 'en',
          status: 'passed',
          evidenceDigests: [bytesDigest('interfaceContactSheet\n')],
        }]
      : []),
  ];
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

async function prepare(t) {
  const base = await fixture(t);
  const authoredInventory = inventory(base.build.key, base.sourceDigest);
  const prepared = await prepareBuildReview({
    buildId: base.build.buildId,
    inventory: authoredInventory,
    sourceCoverage: incomeSourceCoverage(authoredInventory),
    artifacts: [
      { path: base.artifact, role: 'view-adapter' },
      { path: base.sourcePath, role: 'reference-image' },
    ],
    changeImpact: ['new-dataset', 'geometry'],
    requiredLocales: ['en'],
  }, { buildRoot: base.buildRoot, projectRoot: base.root, now });
  return { ...base, prepared };
}

test('prepare-review accepts a processing-bound Source after operator relocation to processed', async (t) => {
  const base = await fixture(t, 'relocated-source-q4-fy25');
  const processedPath = `input/processed/${base.build.key}.png`;
  await mkdir(path.join(base.root, 'input', 'processed'), { recursive: true });
  await rename(path.join(base.root, base.sourcePath), path.join(base.root, processedPath));
  const authoredInventory = inventory(base.build.key, base.sourceDigest);
  authoredInventory.objects.push({
    id: 'node:short',
    kind: 'short-node',
    disposition: 'render',
    mapping: [{ role: 'render', target: 'nodes.short' }],
    features: ['visible-node-face', 'visible-short-node'],
    featureEvidence: {
      'visible-short-node': {
        source: 'reference-crop',
        locator: `${base.sourcePath}#short-node`,
      },
    },
  });
  const sourceCoverage = incomeSourceCoverage(authoredInventory);
  const shortNodeCoverage = sourceCoverage.items.find((item) => item.sourceId === 'source:node-short');
  shortNodeCoverage.face.observedBBox[3] = 2;
  shortNodeCoverage.face.floorException = {
    type: 'source-visible-face-below-floor',
    inspectionMethod: 'native-scale-crop-and-pixel-scan',
    locator: `${base.sourcePath}#short-node`,
    digest: base.sourceDigest,
    reason: 'The native Source paints a genuine two-pixel node face.',
  };
  const prepared = await prepareBuildReview({
    buildId: base.build.buildId,
    inventory: authoredInventory,
    sourceCoverage: {
      ...sourceCoverage,
      source: {
        locator: base.sourcePath,
        digest: base.sourceDigest,
        width: 2400,
        height: 1800,
      },
    },
    artifacts: [
      { path: base.artifact, role: 'view-adapter' },
      { path: base.sourcePath, role: 'reference-image' },
    ],
    changeImpact: ['new-dataset', 'geometry'],
    requiredLocales: ['en'],
  }, { buildRoot: base.buildRoot, projectRoot: base.root, now });

  assert.equal(prepared.build.state, 'AUTHORED');
  assert.equal(
    prepared.build.receipts.at(-1).payload.sourceCoverage.source.locator,
    processedPath
  );
  assert.equal(
    prepared.build.receipts.at(-1).payload.sourceCoverage.items
      .find((item) => item.sourceId === 'source:node-short')
      .face.floorException.locator,
    `${processedPath}#short-node`
  );
  assert.deepEqual(
    prepared.build.receipts.at(-1).payload.artifacts.find((artifact) => artifact.role === 'reference-image'),
    {
      path: base.sourcePath,
      role: 'reference-image',
      digest: base.sourceDigest,
    }
  );
});

async function prepareWithManualFeatures(t) {
  const base = await fixture(t, 'manual-features-fy25');
  const authoredInventory = {
    datasetKey: base.build.key,
    objects: [
      {
        id: 'label:revenue',
        kind: 'label',
        disposition: 'render',
        mapping: [{ role: 'render', target: 'layout.labels.revenue' }],
        features: ['specified-label-weight', 'measured-label-position'],
        featureEvidence: {
          'specified-label-weight': {
            source: 'reference-measurement',
            locator: 'input/processing/manual-features-fy25.png#revenue-label',
            expectedWeight: 600,
          },
          'measured-label-position': {
            source: 'reference-measurement',
            locator: 'input/processing/manual-features-fy25.png#revenue-label-group',
            digest: base.sourceDigest,
            referenceBBox: [180, 420, 160, 44],
            inspectionMethod: 'native-scale-reference-measurement',
          },
        },
      },
      {
        id: 'node:tax',
        kind: 'short-node',
        disposition: 'render',
        mapping: [{ role: 'render', target: 'nodes.tax' }],
        features: ['visible-node-face', 'visible-short-node'],
        featureEvidence: {
          'visible-short-node': {
            source: 'reference-crop',
            locator: 'input/processing/manual-features-fy25.png#tax-node',
          },
        },
      },
    ],
  };
  const prepared = await prepareBuildReview({
    buildId: base.build.buildId,
    inventory: authoredInventory,
    sourceCoverage: incomeSourceCoverage(authoredInventory),
    artifacts: [
      { path: base.artifact, role: 'view-adapter' },
      { path: base.sourcePath, role: 'reference-image' },
    ],
    changeImpact: ['geometry'],
    requiredLocales: ['en'],
  }, { buildRoot: base.buildRoot, projectRoot: base.root, now });
  return { ...base, prepared };
}

async function prepareWithSemanticAnnotation(t) {
  const base = await fixture(t, 'semantic-annotation-q4-fy25');
  const authoredInventory = {
    datasetKey: base.build.key,
    objects: [{
      id: 'node:other-income',
      kind: 'short-income-node',
      disposition: 'render',
      mapping: [
        { role: 'render', target: 'nodes.other_income' },
        { role: 'render', target: 'annotations.other_income' },
      ],
      features: ['semantic-annotation', 'visible-node-face'],
      featureEvidence: {
        'semantic-annotation': {
          source: 'reference-crop',
          locator: `${base.sourcePath}#other-income-callout`,
          digest: base.sourceDigest,
          referenceBBox: [2080, 230, 88, 96],
          inspectionMethod: 'native-scale-crop-and-object-inventory',
          classificationClaim: 'semantic-node-annotation-required',
          reason: 'The source uses one callout group to name and value the Other income micro-flow.',
        },
      },
    }],
  };
  const prepared = await prepareBuildReview({
    buildId: base.build.buildId,
    inventory: authoredInventory,
    sourceCoverage: incomeSourceCoverage(authoredInventory),
    artifacts: [
      { path: base.artifact, role: 'view-adapter' },
      { path: base.sourcePath, role: 'reference-image' },
    ],
    changeImpact: ['interaction'],
    requiredLocales: ['en'],
  }, { buildRoot: base.buildRoot, projectRoot: base.root, now });
  return { ...base, prepared };
}

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
  const authoredInventory = {
    datasetKey: build.key,
    objects: [{
      id: 'metric:arr',
      kind: 'metric-observation',
      disposition: 'data-only',
      mapping: [{ role: 'data', target: 'revenueMetrics.arr' }],
      features: [],
    }],
  };
  const prepared = await prepareBuildReview({
    buildId: build.buildId,
    inventory: authoredInventory,
    sourceCoverage: {
      scanPasses: ['geometry', 'residual', 'semantic-value'],
      items: [{
        sourceId: 'source:arr-2026-01-01',
        sourceClass: 'metric-observation',
        sourceLabel: 'ARR on 2026-01-01',
        inventoryObjectIds: ['metric:arr'],
        contentBBox: [100, 100, 260, 40],
        amount: { literal: '$120M', value: '120', unit: 'M', resolution: '1' },
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
    manualCheckDecisions: manualCheckDecisions(prepared),
    interfaceMatrix: matrix(prepared.build.key),
  }, { buildRoot, projectRoot: root, now });

  assert.equal(outcome.fidelityResult.status, 'blocked');
  assert.ok(outcome.fidelityResult.blockers.some((item) => item.code === 'RISK_THRESHOLD_VIOLATION'));
  assert.equal((await readDatasetBuild(prepared.build.buildId, { buildRoot })).state, 'AUTHORED');
  const inspection = await inspectBuildCloseout(prepared.build.buildId, { buildRoot, projectRoot: root });
  assert.equal(inspection.reviewStatus, 'blocked');
  assert.equal(inspection.report.status, 'blocked');
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

test('semantic annotation checks consume the archived metrics document', async (t) => {
  const { root, buildRoot, sourceDigest, prepared } = await prepareWithSemanticAnnotation(t);
  const evidenceManifest = await writeEvidence(root, prepared, 0, {
    semanticAnnotationAudit: {
      schemaVersion: 1,
      ruleIds: ['A10', 'B16'],
      dataset: prepared.build.key,
      language: 'en',
      expectedSemanticAnnotationNodeIds: ['other_income'],
      semanticAnnotationNodeIds: ['other_income'],
      checked: 1,
      unbound: 0,
      violations: [],
      status: 'passed',
    },
  });
  const verificationReference = await writeDatasetVerification(root, buildRoot, prepared);
  const plan = prepared.build.receipts.at(-1).payload.verificationPlan;
  const localeEvidenceDigest = bytesDigest('interfaceContactSheet\n');
  const manualDecisions = [
    ...manualCheckDecisions(prepared),
    ...plan.requiredChecks
      .filter((check) => check.enforcement === 'manual' &&
        !['adapter:source-coverage-review', 'adapter:manual-visual-closure'].includes(check.id)
      )
      .flatMap((check) => (check.localeScope === 'required-locales'
        ? plan.requiredLocales.map((locale) => ({
            checkId: check.id,
            locale,
            status: 'passed',
            evidenceDigests: [localeEvidenceDigest],
          }))
        : [{
            checkId: check.id,
            status: 'passed',
            evidenceDigests: [sourceDigest],
          }])),
  ];

  const outcome = await finishReviewedBuild({
    buildId: prepared.build.buildId,
    reviewToken: prepared.reviewToken,
    evidenceManifests: [evidenceManifest],
    verificationReference,
    attestation: { reviewer: 'human:reviewer', decision: 'accepted' },
    regions: [],
    attention: { status: 'closed', closureNote: 'No open red-box region remains.' },
    feedback: [],
    riskChecks: [],
    manualCheckDecisions: manualDecisions,
    interfaceMatrix: null,
  }, { buildRoot, projectRoot: root, now });

  assert.equal(outcome.build.state, 'CLOSED');
  assert.equal(outcome.fidelityResult.status, 'accepted');
  assert.equal(
    outcome.fidelityResult.checkResults.find((check) => check.checkId === 'feature:semantic-annotation')?.status,
    'passed'
  );
});

test('specified label weight and short-node geometry consume per-locale manual decisions', async (t) => {
  const { root, buildRoot, prepared } = await prepareWithManualFeatures(t);
  const evidenceManifest = await writeEvidence(root, prepared);
  const verificationReference = await writeDatasetVerification(root, buildRoot, prepared);
  const baseInput = {
    buildId: prepared.build.buildId,
    reviewToken: prepared.reviewToken,
    evidenceManifests: [evidenceManifest],
    verificationReference,
    attestation: { reviewer: 'human:reviewer', decision: 'accepted' },
    regions: [],
    attention: { status: 'closed', closureNote: 'No open red-box region remains.' },
    feedback: [],
    riskChecks: [],
    interfaceMatrix: matrix(prepared.build.key),
  };

  await assert.rejects(
    finishReviewedBuild({
      ...baseInput,
      manualCheckDecisions: [
        ...manualCheckDecisions(prepared),
        {
          checkId: 'feature:specified-label-weight',
          locale: 'en',
          status: 'passed',
          evidenceDigests: [digest('forged-but-well-formed')],
        },
      ],
    }, { buildRoot, projectRoot: root, now }),
    (error) => error.code === 'MANUAL_CHECK_EVIDENCE_MISMATCH'
  );

  const incomplete = await finishReviewedBuild({
    ...baseInput,
    manualCheckDecisions: manualCheckDecisions(prepared),
  }, { buildRoot, projectRoot: root, now });
  assert.equal(incomplete.fidelityResult.status, 'blocked');
  assert.ok(incomplete.fidelityResult.blockers.some((item) =>
    item.code === 'REQUIRED_CHECK_MISSING' && item.subject === 'feature:specified-label-weight@en'
  ));
  assert.ok(incomplete.fidelityResult.blockers.some((item) =>
    item.code === 'REQUIRED_CHECK_MISSING' && item.subject === 'feature:visible-short-node@en'
  ));

  const complete = await finishReviewedBuild({
    ...baseInput,
    manualCheckDecisions: [
      ...manualCheckDecisions(prepared),
      {
        checkId: 'feature:specified-label-weight',
        locale: 'en',
        status: 'passed',
        evidenceDigests: [bytesDigest('interfaceContactSheet\n')],
      },
      {
        checkId: 'feature:visible-short-node',
        locale: 'en',
        status: 'passed',
        evidenceDigests: [bytesDigest('interfaceContactSheet\n')],
      },
    ],
  }, { buildRoot, projectRoot: root, now });
  assert.equal(complete.fidelityResult.status, 'accepted');
  assert.equal(complete.build.state, 'CLOSED');
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
  assert.deepEqual(renderCalls.map((call) => call.locales), [['en']]);
  assert.deepEqual(renderCalls.map((call) => call.buildId), [prepared.build.buildId]);
  const sealPayload = sealed.receipts.at(-1).payload;
  assert.equal(sealPayload.finalProfiles.length, 2);
  assert.equal(sealPayload.finalProfiles[0].profile, 'verify:dataset --skip-render');
  assert.equal(sealPayload.finalProfiles[0].status, 'passed');
  assert.match(sealPayload.finalProfiles[0].outputDigest, /^sha256:[a-f0-9]{64}$/);
  assert.deepEqual(
    sealPayload.finalProfiles.slice(1).map((row) => [row.profile, row.locale]),
    [['verify:d3', 'en']]
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

test('seal refuses to record when a locale render final profile fails', async (t) => {
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

test('Revenue Metric display-text review uses dataset consistency without render metrics', async (t) => {
  const { root, buildRoot, prepared } = await prepareRevenueMetric(t, ['display-text-only']);
  const verificationReference = await writeDatasetVerification(root, buildRoot, prepared);
  const displayCheck = prepared.build.receipts.at(-1).payload.verificationPlan.requiredChecks
    .find((check) => check.id === 'impact:display-text');
  assert.equal(displayCheck?.evidenceKind, 'dataset-consistency');
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
  assert.ok(reviewed.fidelityResult.checkResults.some((result) =>
    result.checkId === 'impact:display-text' &&
      result.locale === 'en' &&
      result.evidenceKind === 'dataset-consistency'
  ));
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
