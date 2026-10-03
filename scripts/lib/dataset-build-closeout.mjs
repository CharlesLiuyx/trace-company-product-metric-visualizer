import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import {
  createFidelityResult,
  digestFidelityValue,
  summarizeFidelityResult,
} from './fidelity-result.mjs';
import { createSourceObjects } from './source-objects.mjs';
import { VERIFICATION_PLAN_PROTOCOL, compileVerificationPlan } from './verification-plan.mjs';
import {
  createCloseoutReport,
  renderLoopFidelitySummary,
  renderTaskInformation,
} from './build-report.mjs';
import {
  DEFAULT_BUILD_ROOT,
  inspectDatasetBuild,
  readAuthoredObject,
  readBuildObject,
  readDatasetBuild,
  recordBuildObject,
  recordDatasetBuildCommand,
  recordDatasetBuildReviewClosure,
} from './dataset-build-store.mjs';
import { buildProjectRoot } from './project.mjs';

export const REVIEW_PACKET_PROTOCOL = 'review-packet/v5';

function closeoutError(code, message, details = undefined) {
  const error = new Error(message);
  error.code = code;
  if (details !== undefined) error.details = details;
  return error;
}

function invariant(condition, code, message, details) {
  if (!condition) throw closeoutError(code, message, details);
}

function latestReceipt(build, state) {
  return [...(build.receipts || [])].reverse().find((receipt) => receipt.state === state) || null;
}

function resolveProjectLocator(locator, projectRoot) {
  invariant(typeof locator === 'string' && locator, 'LOCATOR_REQUIRED', 'A project-relative locator is required');
  const root = path.resolve(projectRoot);
  const absolute = path.resolve(root, locator);
  invariant(
    absolute.startsWith(`${root}${path.sep}`),
    'LOCATOR_OUTSIDE_PROJECT',
    `Locator escapes the project root: ${locator}`
  );
  return absolute;
}

async function readJsonLocator(locator, projectRoot) {
  const absolute = resolveProjectLocator(locator, projectRoot);
  return JSON.parse(await readFile(absolute, 'utf8'));
}

async function fileDigest(absolutePath) {
  return `sha256:${createHash('sha256').update(await readFile(absolutePath)).digest('hex')}`;
}

async function normalizeArtifacts(artifacts, projectRoot, sources = []) {
  invariant(Array.isArray(artifacts) && artifacts.length > 0, 'ARTIFACTS_REQUIRED', 'At least one authored artifact is required');
  const normalized = [];
  const seen = new Set();
  for (const [index, artifact] of artifacts.entries()) {
    invariant(artifact && typeof artifact === 'object', 'ARTIFACT_INVALID', `Artifact ${index} must be an object`);
    invariant(typeof artifact.path === 'string' && artifact.path, 'ARTIFACT_INVALID', `Artifact ${index} needs a path`);
    invariant(!seen.has(artifact.path), 'ARTIFACT_DUPLICATE', `Artifact appears twice: ${artifact.path}`);
    seen.add(artifact.path);
    let absolute = resolveProjectLocator(artifact.path, projectRoot);
    if (!existsSync(absolute) && ['reference-image', 'reference-text'].includes(artifact.role)) {
      const source = sources.find((candidate) =>
        [candidate.uri, candidate.processingUri, candidate.processedUri]
          .filter(Boolean)
          .includes(artifact.path)
      );
      const existingLocator = [source?.processingUri, source?.processedUri, source?.uri]
        .filter(Boolean)
        .find((locator) => existsSync(resolveProjectLocator(locator, projectRoot)));
      if (existingLocator) absolute = resolveProjectLocator(existingLocator, projectRoot);
    }
    invariant(existsSync(absolute), 'ARTIFACT_MISSING', `Authored artifact does not exist: ${artifact.path}`);
    normalized.push({
      path: artifact.path,
      role: artifact.role || 'authored',
      digest: await fileDigest(absolute),
    });
  }
  return normalized.sort((left, right) => left.path.localeCompare(right.path));
}

async function currentPlan(build, authored, buildRoot) {
  const plan = await readAuthoredObject(build.buildId, authored?.verificationPlan, { buildRoot });
  invariant(plan, 'VERIFICATION_PLAN_REQUIRED', 'The authored snapshot has no VerificationPlan');
  invariant(
    plan.schemaVersion === 6 && plan.protocol === VERIFICATION_PLAN_PROTOCOL,
    'VERIFICATION_PLAN_STALE',
    `Finishing review requires ${VERIFICATION_PLAN_PROTOCOL}; re-prepare the Build with record:workflow continue or refresh`
  );
  return plan;
}

export async function prepareBuildReview(input, options = {}) {
  const buildRoot = options.buildRoot || DEFAULT_BUILD_ROOT;
  const build = await readDatasetBuild(input.buildId, { buildRoot });
  const projectRoot = buildProjectRoot(build, options.projectRoot);
  if (build.authoringRoot) {
    const { deriveArtifactManifest, REVIEW_CANDIDATE_PROTOCOL } = await import('./workflow-dependencies.mjs');
    const derived = await deriveArtifactManifest(build, projectRoot);
    input = { ...input, artifacts: derived.manifest.artifacts, checkpointProtocol: REVIEW_CANDIDATE_PROTOCOL, dependencyScopes: derived.manifest.scopes };
    options = { ...options, loadedData: derived.loaded };
  }
  const primarySource = (build.sources || []).find((source) => source.role === 'primary-reference') || build.sources?.[0];
  invariant(primarySource, 'SOURCE_OBJECTS_BUILD_SOURCE_MISSING', 'Build has no primary Source');
  const sourceLocator = [primarySource.processingUri, primarySource.processedUri, primarySource.uri]
    .filter(Boolean)
    .find((locator) => existsSync(resolveProjectLocator(locator, projectRoot))) ||
    primarySource.processingUri || primarySource.processedUri || primarySource.uri;
  const sourceLocators = new Set(
    [primarySource.uri, primarySource.processingUri, primarySource.processedUri].filter(Boolean)
  );
  invariant(input.sourceObjects && typeof input.sourceObjects === 'object', 'SOURCE_OBJECTS_REQUIRED', 'prepare-review requires the flat Source object list');
  invariant(build.sourceClassification, 'SOURCE_CLASSIFICATION_REQUIRED', 'prepare-review requires the Build Source classification recorded at intake');
  // Validates the flat list, T22, shortNodes and label positions, then
  // reconciles every value entry against the loaded SSOT and Adapter.
  const sourceObjects = createSourceObjects(input.sourceObjects, {
    datasetKey: build.key,
    adapter: build.adapter,
    classification: build.sourceClassification,
    source: {
      locator: sourceLocator,
      digest: primarySource.digest,
      ...(primarySource.format === 'text'
        ? { format: 'text', charLength: primarySource.charLength }
        : { width: primarySource.width, height: primarySource.height }),
    },
    ...(options.loadedData ? { loadedData: options.loadedData } : {}),
    ...(options.loadBrowserData ? { loadBrowserData: options.loadBrowserData } : {}),
  });
  const artifacts = await normalizeArtifacts(input.artifacts, projectRoot, build.sources);
  const referenceArtifact = artifacts.find((artifact) =>
    ['reference-image', 'reference-text'].includes(artifact.role) && sourceLocators.has(artifact.path)
  );
  invariant(
    referenceArtifact?.digest === primarySource.digest,
    'SOURCE_OBJECTS_REFERENCE_ARTIFACT_MISMATCH',
    'prepare-review requires a reference artifact bound to the Build Source digest'
  );
  const verificationPlan = compileVerificationPlan({
    adapter: build.adapter,
    sourceObjects,
    changeImpact: input.changeImpact,
    requiredLocales: input.requiredLocales,
    checkpointProtocol: input.checkpointProtocol,
    dependencyScopes: input.dependencyScopes,
  });
  const [sourceObjectsReference, planReference] = await Promise.all([
    recordBuildObject(build.buildId, 'source-objects', sourceObjects, { buildRoot, projectRoot }),
    recordBuildObject(build.buildId, 'verification-plan', verificationPlan, { buildRoot, projectRoot }),
  ]);
  const authored = await recordDatasetBuildCommand(build.buildId, {
    type: 'record-authored',
    expectedRevision: build.revision,
    artifacts,
    sourceObjects,
    sourceObjectsReference,
    verificationPlan,
    verificationPlanReference: planReference,
    changeImpact: verificationPlan.changeImpact,
  }, { buildRoot, projectRoot, now: options.now });
  const authoredPayload = authored.receipts.at(-1).payload;
  const packetValue = {
    schemaVersion: 5,
    protocol: REVIEW_PACKET_PROTOCOL,
    kind: 'review-packet',
    buildId: build.buildId,
    key: build.key,
    adapter: build.adapter,
    authoredDigest: authoredPayload.snapshotDigest,
    verificationPlanDigest: authoredPayload.verificationPlanDigest,
    sourceObjectsDigest: sourceObjects.sourceObjectsDigest,
    requiredLocales: verificationPlan.requiredLocales,
    sourceObjects: sourceObjectsReference,
    verificationPlan: planReference,
    status: 'evidence-required',
  };
  const packet = {
    ...packetValue,
    packetDigest: digestFidelityValue(packetValue),
  };
  const packetReference = await recordBuildObject(build.buildId, 'review-packet', packet, {
    buildRoot,
    projectRoot,
  });
  return {
    build: authored,
    sourceObjects,
    sourceObjectsReference,
    packet,
    packetReference,
    reviewToken: packetReference.digest,
  };
}

function metricsSummary(metrics) {
  const full = metrics.full || metrics.comparison?.full || {};
  return { similarity: full.similarity, mae: full.mae, width: full.width, height: full.height };
}

/**
 * Read one archived, evidence-ready fidelity run bound to the current authored
 * snapshot and Plan. The run's own gates already decided pass/fail at render
 * time; this only binds identity and artifact bytes.
 */
export async function evidenceFromManifest(locator, context) {
  const manifest = await readJsonLocator(locator, context.projectRoot);
  invariant(manifest.status === 'evidence-ready', 'EVIDENCE_NOT_READY', `Fidelity evidence is not review-ready: ${locator}`);
  invariant(manifest.identity?.buildId === context.buildId, 'EVIDENCE_BUILD_MISMATCH', `Fidelity evidence belongs to another Build: ${locator}`);
  invariant(manifest.identity?.authoredDigest === context.authoredDigest, 'STALE_AUTOMATIC_EVIDENCE', `Fidelity evidence uses a stale authored digest: ${locator}`);
  invariant(
    manifest.identity?.verificationPlanDigest === context.verificationPlanDigest,
    'STALE_AUTOMATIC_EVIDENCE',
    `Fidelity evidence uses a stale VerificationPlan: ${locator}`
  );
  const artifactDigests = {};
  for (const [name, artifactLocator] of Object.entries(manifest.artifacts || {})) {
    const absolute = resolveProjectLocator(artifactLocator, context.projectRoot);
    invariant(existsSync(absolute), 'EVIDENCE_ARTIFACT_MISSING', `Fidelity evidence artifact is missing: ${artifactLocator}`);
    artifactDigests[name] = await fileDigest(absolute);
  }
  invariant(artifactDigests.candidate, 'EVIDENCE_ARTIFACT_MISSING', `Fidelity evidence has no candidate image: ${locator}`);
  const metrics = manifest.artifacts?.metrics
    ? await readJsonLocator(manifest.artifacts.metrics, context.projectRoot)
    : null;
  invariant(metrics && typeof metrics === 'object', 'EVIDENCE_METRICS_REQUIRED', `Fidelity evidence has no metrics document: ${locator}`);
  invariant(
    manifest.identity?.dataset === context.key &&
      metrics.dataset === manifest.identity.dataset &&
      metrics.language === manifest.identity.language,
    'EVIDENCE_METRICS_IDENTITY_MISMATCH',
    `Fidelity metrics dataset/language do not match the Build manifest: ${locator}`
  );
  return {
    locale: manifest.identity.language,
    manifest: locator,
    digest: digestFidelityValue({ manifest, artifactDigests }),
    candidateDigest: artifactDigests.candidate,
    metrics: metricsSummary(metrics),
    // Runs recorded before per-gate summaries carry only their evidence-ready verdict.
    gates: metrics.gates || null,
  };
}

async function consistencyFromReference(reference, context) {
  invariant(reference?.kind === 'dataset-verification' && reference.digest, 'DATASET_VERIFICATION_REQUIRED', 'Review needs a dataset-verification object reference');
  const manifest = await readBuildObject(context.buildId, reference, { buildRoot: context.buildRoot });
  invariant(manifest.kind === 'dataset-verification' && manifest.status === 'evidence-ready', 'DATASET_VERIFICATION_NOT_READY', 'Dataset verification evidence is not ready');
  invariant(manifest.identity?.buildId === context.buildId, 'DATASET_VERIFICATION_MISMATCH', 'Dataset verification belongs to another Build');
  invariant(manifest.identity?.key === context.key, 'DATASET_VERIFICATION_MISMATCH', 'Dataset verification belongs to another dataset');
  invariant(manifest.identity?.adapter === context.adapter, 'DATASET_VERIFICATION_MISMATCH', 'Dataset verification uses another Adapter');
  invariant(manifest.identity?.authoredDigest === context.authoredDigest, 'STALE_DATASET_VERIFICATION', 'Dataset verification uses a stale authored digest');
  invariant(manifest.identity?.verificationPlanDigest === context.verificationPlanDigest, 'STALE_DATASET_VERIFICATION', 'Dataset verification uses a stale VerificationPlan');
  return { status: 'passed', digest: reference.digest };
}

/**
 * Close one AUTHORED Build from the operator's acceptance. It fails only when
 * the inputs are stale, a required locale lacks evidence-ready render evidence
 * on the current authored snapshot, consistency evidence is missing or stale,
 * or the acceptance is missing.
 */
export async function finishReviewedBuild(input, options = {}) {
  const buildRoot = options.buildRoot || DEFAULT_BUILD_ROOT;
  const build = await readDatasetBuild(input.buildId, { buildRoot });
  const projectRoot = buildProjectRoot(build, options.projectRoot);
  const authoredReceipt = latestReceipt(build, 'AUTHORED');
  invariant(build.state === 'AUTHORED' && authoredReceipt, 'BUILD_NOT_AUTHORED', 'Build must be AUTHORED before review can finish');
  const authored = authoredReceipt.payload;
  const plan = await currentPlan(build, authored, buildRoot);
  const planDigest = authored.verificationPlanDigest;
  const packet = await readBuildObject(build.buildId, {
    kind: 'review-packet',
    digest: input.reviewToken || input.packetDigest,
  }, { buildRoot });
  invariant(
    packet.schemaVersion === 5 && packet.protocol === REVIEW_PACKET_PROTOCOL,
    'REVIEW_PACKET_STALE',
    `Finishing review requires a ${REVIEW_PACKET_PROTOCOL} packet; re-prepare the Build`
  );
  const { packetDigest, ...packetValue } = packet;
  invariant(packetDigest === digestFidelityValue(packetValue), 'REVIEW_PACKET_DIGEST_MISMATCH', 'Review packet digest does not match its content');
  invariant(packet.authoredDigest === authored.snapshotDigest, 'REVIEW_PACKET_STALE', 'Review packet was prepared for an older authored snapshot');
  invariant(packet.verificationPlanDigest === planDigest, 'REVIEW_PACKET_STALE', 'Review packet was prepared for an older VerificationPlan');
  invariant(
    packet.sourceObjectsDigest === plan.sourceObjectsDigest &&
      authored.sourceObjects?.digest === plan.sourceObjectsDigest,
    'REVIEW_PACKET_STALE',
    'Review packet was prepared for older source objects'
  );
  invariant(input.acceptance, 'ACCEPTANCE_REQUIRED', 'Finishing review needs the operator acceptance { reviewer, decision: accepted, note }');

  // review-candidate/v1 has no stage freezes. Historical checkpoint Builds
  // keep their original ordered-freeze requirement.
  const checkpointPolicy = plan.checkpointProtocol;
  if (checkpointPolicy && build.adapter === 'income-statement') {
    invariant(['fidelity-checkpoints/v1', 'review-candidate/v1'].includes(checkpointPolicy), 'CHECKPOINT_PROTOCOL_INVALID', 'Unsupported checkpoint policy');
    if (checkpointPolicy === 'fidelity-checkpoints/v1') {
      const { validateCheckpointClosure } = await import('./workflow-checkpoints.mjs');
      await validateCheckpointClosure(build, plan, input.checkpoints || [], { buildRoot, projectRoot });
    }
  }

  const consistency = await consistencyFromReference(
    input.verificationReference || input.datasetVerification,
    {
      buildId: build.buildId,
      key: build.key,
      adapter: build.adapter,
      authoredDigest: authored.snapshotDigest,
      verificationPlanDigest: planDigest,
      buildRoot,
    }
  );
  let evidence = [];
  if (build.adapter === 'income-statement') {
    invariant(Array.isArray(input.evidenceManifests) && input.evidenceManifests.length > 0, 'AUTOMATIC_EVIDENCE_REQUIRED', 'Income Statement review needs record:fidelity evidence manifests');
    evidence = await Promise.all(input.evidenceManifests.map((locator) =>
      evidenceFromManifest(locator, {
        buildId: build.buildId,
        key: build.key,
        authoredDigest: authored.snapshotDigest,
        verificationPlanDigest: planDigest,
        projectRoot,
      })
    ));
  } else {
    invariant(!input.evidenceManifests?.length, 'ADAPTER_EVIDENCE_INVALID', `${build.adapter} review does not accept Sankey fidelity evidence`);
  }

  const fidelityResult = createFidelityResult({
    buildId: build.buildId,
    key: build.key,
    adapter: build.adapter,
    authoredDigest: authored.snapshotDigest,
    verificationPlanDigest: planDigest,
    requiredLocales: plan.requiredLocales,
    acceptance: {
      ...input.acceptance,
      reviewedAt: input.acceptance.reviewedAt || (options.now || (() => new Date().toISOString()))(),
    },
    consistency,
    evidence,
  });
  const resultReference = await recordBuildObject(build.buildId, 'fidelity-result', fidelityResult, { ...options, buildRoot, projectRoot });
  const outcome = {
    expectedRevision: build.revision,
    status: fidelityResult.status,
    authoredDigest: authored.snapshotDigest,
    verificationPlanDigest: planDigest,
    fidelityResult: resultReference,
  };

  const resultEvidenceDigest = digestFidelityValue({
    consistency: fidelityResult.automatic.consistency,
    evidence: fidelityResult.evidence,
  });
  const closure = {
    type: 'record-closed',
    expectedRevision: build.revision,
    snapshotDigest: authored.snapshotDigest,
    fidelityResult,
    evidence: {
      candidate: { status: 'passed', digest: resultEvidenceDigest },
      reference: {
        status: build.adapter === 'income-statement' ? 'passed' : 'not-applicable',
        digest: fidelityResult.resultDigest,
      },
      process: { status: 'passed', digest: planDigest },
      human: { status: 'passed', digest: digestFidelityValue(fidelityResult.acceptance) },
    },
    reviewObjects: { fidelityResult: resultReference },
  };
  const closed = await recordDatasetBuildReviewClosure(build.buildId, {
    outcome, closure,
    ...(options.seal ? { seal: { finalProfiles: acceptedSealProfiles(fidelityResult, options) } } : {}),
  }, { ...options, buildRoot, projectRoot });
  return {
    build: closed,
    fidelityResult,
    fidelityResultReference: resultReference,
  };
}

export async function stageReviewedBaseline(input, options = {}) {
  const buildRoot = options.buildRoot || DEFAULT_BUILD_ROOT;
  const build = await readDatasetBuild(input.buildId, { buildRoot });
  const projectRoot = buildProjectRoot(build, options.projectRoot);
  const closure = latestReceipt(build, 'CLOSED');
  invariant(closure, 'BUILD_NOT_CLOSED', 'Build must be CLOSED before baseline staging');
  const command = build.adapter !== 'income-statement'
    ? {
        type: 'stage-baseline',
        expectedRevision: build.revision,
        closureDigest: closure.payload.closureDigest,
        disposition: 'not-applicable',
        reason: `${build.adapter}-data-only`,
      }
    : {
        type: 'stage-baseline',
        expectedRevision: build.revision,
        closureDigest: closure.payload.closureDigest,
        disposition: 'recorded',
        use: 'future-regression-only',
        metrics: input.metrics,
      };
  return recordDatasetBuildCommand(build.buildId, command, {
    buildRoot,
    projectRoot,
    requireFresh: true,
    now: options.now,
  });
}

const SEAL_CONSISTENCY_PROFILE = 'verify:dataset --skip-render';
const SEAL_RENDER_PROFILE = 'verify:d3';

function acceptedSealProfiles(result, options = {}) {
  const accepted = summarizeFidelityResult(result);
  const checkedAt = (options.now || (() => new Date().toISOString()))();
  return [
    { profile: SEAL_CONSISTENCY_PROFILE, status: 'passed', outputDigest: accepted.consistency.digest, reusedEvidence: true, checkedAt },
    ...accepted.locales.map((entry) => ({ profile: SEAL_RENDER_PROFILE, locale: entry.locale, status: 'passed', outputDigest: entry.digest, reusedEvidence: true, checkedAt })),
  ];
}

function defaultSealProfileRunner({ key, projectRoot }) {
  return spawnSync(
    process.execPath,
    [path.join(projectRoot, 'scripts', 'verify-dataset.mjs'), key, '--skip-render'],
    { cwd: projectRoot, encoding: 'utf8' }
  );
}

// One spawn covers every required locale: verify-d3 accepts repeated
// --language flags and renders them sequentially in one process, sharing a
// single Chromium and static server instead of relaunching per locale.
function defaultRenderProfileRunner({ key, locales, buildId, projectRoot }) {
  return spawnSync(
    process.execPath,
    [
      path.join(projectRoot, 'scripts', 'verify-d3.mjs'),
      key,
      '--build',
      buildId,
      '--focus',
      'closeout-refresh',
      ...locales.flatMap((locale) => ['--language', locale]),
    ],
    { cwd: projectRoot, encoding: 'utf8' }
  );
}

function runOutputDigest(run) {
  return `sha256:${createHash('sha256')
    .update(String(run?.stdout || ''))
    .update('\0')
    .update(String(run?.stderr || ''))
    .digest('hex')}`;
}

function runExitStatus(run) {
  return Number.isInteger(run?.status) ? run.status : run?.exitCode;
}

export async function sealReviewedBuild(input, options = {}) {
  const buildRoot = options.buildRoot || DEFAULT_BUILD_ROOT;
  const build = await readDatasetBuild(input.buildId, { buildRoot });
  const projectRoot = buildProjectRoot(build, options.projectRoot);
  const authored = latestReceipt(build, 'AUTHORED');
  const closure = latestReceipt(build, 'CLOSED');
  invariant(build.state === 'BASELINE_STAGED' && authored && closure, 'BUILD_NOT_BASELINE_STAGED', 'Build must be BASELINE_STAGED before sealing');
  const now = options.now || (() => new Date().toISOString());
  const finalProfiles = [];

  const acceptedResult = closure.payload.reviewObjects?.fidelityResult
    ? await readBuildObject(build.buildId, closure.payload.reviewObjects.fidelityResult, { buildRoot }) : null;
  const accepted = acceptedResult ? summarizeFidelityResult(acceptedResult) : null;
  const sameAcceptance = accepted?.status === 'accepted'
    && acceptedResult.resultDigest === closure.payload.fidelityResult?.resultDigest
    && accepted.subject?.buildId === build.buildId
    && accepted.subject?.authoredDigest === authored.payload.snapshotDigest
    && accepted.subject?.verificationPlanDigest === authored.payload.verificationPlanDigest;
  if (!options.freshChecks && sameAcceptance && accepted.consistency?.status === 'passed') {
    finalProfiles.push({ profile: SEAL_CONSISTENCY_PROFILE, status: 'passed', outputDigest: accepted.consistency.digest, reusedEvidence: true, checkedAt: now() });
  } else {
    const runSealProfile = options.runSealProfile || defaultSealProfileRunner;
    const consistencyRun = await runSealProfile({ key: build.key, buildId: build.buildId, projectRoot });
    const consistencyStatus = runExitStatus(consistencyRun);
    invariant(consistencyStatus === 0, 'SEAL_PROFILE_FAILED', `Non-render dataset consistency profile failed for ${build.key}`, {
      status: consistencyStatus ?? null,
      stdout: String(consistencyRun?.stdout || ''),
      stderr: String(consistencyRun?.stderr || ''),
    });
    finalProfiles.push({
      profile: SEAL_CONSISTENCY_PROFILE,
      status: 'passed',
      outputDigest: runOutputDigest(consistencyRun),
      checkedAt: now(),
    });
  }

  // Income Statement render hard gates: the accepted FidelityResult already
  // proved them per locale on this exact authored snapshot, and freshness
  // (checked under the final write lock) pins renderer, fonts, adapter and semantic data. Reuse
  // that proof unless the caller asks for a fresh render. Revenue Metric
  // render obligations are Adapter-owned notApplicable and record no row.
  if (build.adapter === 'income-statement') {
    const plan = await readAuthoredObject(build.buildId, authored.payload.verificationPlan, { buildRoot });
    const requiredLocales = plan?.requiredLocales;
    invariant(
      Array.isArray(requiredLocales) && requiredLocales.length > 0,
      'SEAL_PLAN_LOCALES_REQUIRED',
      'Sealing an Income Statement Build requires the authored VerificationPlan locales'
    );
    // Historical v2 accepted results retain their original evidence.
    const reusable = !options.freshRender && !options.freshChecks && sameAcceptance
      && requiredLocales.every((locale) => accepted.locales.some((item) => item.locale === locale && item.status === 'passed'));
    if (reusable) {
      const checkedAt = now();
      for (const locale of requiredLocales) {
        const acceptedLocale = accepted.locales.find((item) => item.locale === locale);
        finalProfiles.push({ profile: SEAL_RENDER_PROFILE, locale, status: 'passed', outputDigest: acceptedLocale.digest, reusedEvidence: true, checkedAt });
      }
    }
    if (!reusable) {
      const runRenderProfile = options.runRenderProfile || defaultRenderProfileRunner;
      const renderRun = await runRenderProfile({ key: build.key, locales: requiredLocales, buildId: build.buildId, projectRoot });
      const renderStatus = runExitStatus(renderRun);
      invariant(
        renderStatus === 0,
        'SEAL_RENDER_PROFILE_FAILED',
        `Render final profile failed for ${build.key} (${requiredLocales.join(', ')})`,
        {
          locales: requiredLocales,
          status: renderStatus ?? null,
          stdout: String(renderRun?.stdout || ''),
          stderr: String(renderRun?.stderr || ''),
        }
      );
      // One row per locale preserves the audit shape; the rows share the single
      // run's output digest and timestamp.
      const renderDigest = runOutputDigest(renderRun);
      const renderCheckedAt = now();
      for (const locale of requiredLocales) {
        finalProfiles.push({
          profile: SEAL_RENDER_PROFILE,
          locale,
          status: 'passed',
          outputDigest: renderDigest,
          checkedAt: renderCheckedAt,
        });
      }
    }
  }

  return recordDatasetBuildCommand(build.buildId, {
    type: 'seal',
    expectedRevision: build.revision,
    status: 'passed',
    snapshotDigest: authored.payload.snapshotDigest,
    closureDigest: closure.payload.closureDigest,
    baseCanonicalDigest: build.baseCanonicalDigest,
    acceptedAt: now(),
    verdictInputDigests: Object.values(closure.payload.evidence).map((item) => item.digest),
    finalProfiles,
  }, {
    ...options,
    buildRoot,
    projectRoot,
    requireFresh: true,
    now: options.now,
  });
}

export async function inspectBuildCloseout(buildId, options = {}) {
  const buildRoot = options.buildRoot || DEFAULT_BUILD_ROOT;
  const inspection = await inspectDatasetBuild(buildId, options);
  const build = await readDatasetBuild(buildId, { buildRoot });
  const closure = latestReceipt(build, 'CLOSED');
  const review = build.review || null;
  const reviewStale = Boolean(
    review && (
      review.authoredDigest !== inspection.digests.authored ||
      review.verificationPlanDigest !== latestReceipt(build, 'AUTHORED')?.payload?.verificationPlanDigest
    )
  );
  const inspectionResult = {
    ...inspection,
    ...(reviewStale
      ? {
          effectiveState: 'AUTHORED',
          fresh: false,
          reasons: [...new Set([...(inspection.reasons || []), 'review-input-stale'])],
        }
      : {}),
    reviewStatus: reviewStale
      ? 'stale'
      : review?.status
        || closure?.payload?.fidelityResult?.status
        || (build.state === 'INTAKED' ? 'authoring-required' : 'review-pending'),
    fidelityResultDigest: closure?.payload?.fidelityResult?.resultDigest || null,
    reviewObjects: review?.references || closure?.payload?.reviewObjects || null,
  };
  const references = inspectionResult.reviewObjects;
  if (reviewStale) return inspectionResult;
  // Older closures also reference a feedback ledger; it is no longer read.
  if (!references?.fidelityResult) return inspectionResult;
  const fidelityResult = await readBuildObject(buildId, references.fidelityResult, { buildRoot });
  inspectionResult.fidelityResultDigest = fidelityResult.resultDigest;
  const report = createCloseoutReport({ inspection: inspectionResult, fidelityResult });
  return {
    ...inspectionResult,
    report,
    taskInformation: renderTaskInformation(report),
    loopFidelitySummary: renderLoopFidelitySummary(report),
  };
}
