import { createHash } from 'node:crypto';
import { existsSync } from 'node:fs';
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import {
  createFeedbackRecord,
  projectFeedbackLedger,
} from './feedback-ledger.mjs';
import { createFidelityResult, digestFidelityValue } from './fidelity-result.mjs';
import { createObjectInventory } from './object-inventory.mjs';
import { compileVerificationPlan } from './verification-plan.mjs';
import {
  createCloseoutReport,
  renderLoopFidelitySummary,
  renderTaskInformation,
} from './build-report.mjs';
import {
  DEFAULT_BUILD_ROOT,
  inspectDatasetBuild,
  readBuildObject,
  readDatasetBuild,
  recordBuildObject,
  recordDatasetBuildCommand,
  recordDatasetBuildReviewOutcome,
} from './dataset-build-store.mjs';
import { rootDir } from './project.mjs';

export const REVIEW_PACKET_PROTOCOL = 'review-packet/v1';

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

async function normalizeArtifacts(artifacts, projectRoot) {
  invariant(Array.isArray(artifacts) && artifacts.length > 0, 'ARTIFACTS_REQUIRED', 'At least one authored artifact is required');
  const normalized = [];
  const seen = new Set();
  for (const [index, artifact] of artifacts.entries()) {
    invariant(artifact && typeof artifact === 'object', 'ARTIFACT_INVALID', `Artifact ${index} must be an object`);
    invariant(typeof artifact.path === 'string' && artifact.path, 'ARTIFACT_INVALID', `Artifact ${index} needs a path`);
    invariant(!seen.has(artifact.path), 'ARTIFACT_DUPLICATE', `Artifact appears twice: ${artifact.path}`);
    seen.add(artifact.path);
    const absolute = resolveProjectLocator(artifact.path, projectRoot);
    invariant(existsSync(absolute), 'ARTIFACT_MISSING', `Authored artifact does not exist: ${artifact.path}`);
    normalized.push({
      path: artifact.path,
      role: artifact.role || 'authored',
      digest: await fileDigest(absolute),
    });
  }
  return normalized.sort((left, right) => left.path.localeCompare(right.path));
}

function planForFidelityResult(authored) {
  const plan = authored?.verificationPlan;
  invariant(plan, 'VERIFICATION_PLAN_REQUIRED', 'The authored snapshot has no VerificationPlan');
  return {
    digest: authored.verificationPlanDigest || plan.digest || plan.planDigest,
    requiredLocales: plan.requiredLocales,
    changeImpact: plan.changeImpact,
  };
}

export async function prepareBuildReview(input, options = {}) {
  const buildRoot = options.buildRoot || DEFAULT_BUILD_ROOT;
  const projectRoot = options.projectRoot || rootDir;
  const build = await readDatasetBuild(input.buildId, { buildRoot });
  const inventory = createObjectInventory(input.inventory);
  invariant(inventory.datasetKey === build.key, 'INVENTORY_BUILD_MISMATCH', 'ObjectInventory dataset key does not match the Build');
  const verificationPlan = compileVerificationPlan({
    adapter: build.adapter,
    inventory,
    changeImpact: input.changeImpact,
    requiredLocales: input.requiredLocales,
  });
  const artifacts = await normalizeArtifacts(input.artifacts, projectRoot);
  const [inventoryReference, planReference] = await Promise.all([
    recordBuildObject(build.buildId, 'object-inventory', inventory, { buildRoot, projectRoot }),
    recordBuildObject(build.buildId, 'verification-plan', verificationPlan, { buildRoot, projectRoot }),
  ]);
  const authored = await recordDatasetBuildCommand(build.buildId, {
    type: 'record-authored',
    expectedRevision: build.revision,
    artifacts,
    inventory,
    verificationPlan,
    changeImpact: verificationPlan.changeImpact,
  }, { buildRoot, projectRoot, now: options.now });
  const authoredPayload = authored.receipts.at(-1).payload;
  const packetValue = {
    schemaVersion: 1,
    protocol: REVIEW_PACKET_PROTOCOL,
    kind: 'review-packet',
    buildId: build.buildId,
    key: build.key,
    adapter: build.adapter,
    authoredDigest: authoredPayload.snapshotDigest,
    verificationPlanDigest: authoredPayload.verificationPlanDigest,
    requiredLocales: verificationPlan.requiredLocales,
    inventory: inventoryReference,
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
  return { build: authored, packet, packetReference, reviewToken: packetReference.digest };
}

async function evidenceFromManifest(locator, context) {
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
  const metrics = manifest.artifacts?.metrics
    ? await readJsonLocator(manifest.artifacts.metrics, context.projectRoot)
    : null;
  const digest = digestFidelityValue({ manifest, artifactDigests });
  return {
    locale: manifest.identity.language,
    status: 'passed',
    digest,
    metrics,
    manifest,
    locator,
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

function derivedRiskChecks(plan, evidence) {
  const requiredIds = new Set(plan.requiredChecks.map((check) => check.id));
  const checks = [];
  if (requiredIds.has('feature:centered-side-label')) {
    const featureCheck = plan.requiredChecks.find((check) => check.id === 'feature:centered-side-label');
    const expectedNodes = new Set((featureCheck.evidenceTargets || []).map((target) => target.split('.').at(-1)));
    for (const item of evidence) {
      const sideLabels = (item.metrics?.labelLayoutAudit?.horizontalSideLabels || [])
        .filter((label) => expectedNodes.has(label.node));
      const measuredNodes = new Set(sideLabels.map((label) => label.node));
      const complete = [...expectedNodes].every((node) => measuredNodes.has(node));
      checks.push({
        id: `B3-T7-side-label-center:${item.locale}`,
        status: complete ? 'passed' : 'failed',
        measurements: sideLabels.map((label) => ({
          id: `${label.node || 'unknown'}-${label.labelIndex ?? 0}`,
          value: Number(label.verticalCenterDelta),
          operator: 'lte',
          threshold: 4,
          unit: 'px',
        })),
        ...(complete
          ? {}
          : { reason: 'Not every inventoried centered-side-label produced a matching measurement' }),
      });
    }
  }
  if (requiredIds.has('feature:text')) {
    for (const item of evidence) {
      const audit = item.metrics?.textLayoutAudit;
      checks.push({
        id: `B6-Z5-text-bounds:${item.locale}`,
        status: audit ? 'passed' : 'open',
        measurements: audit
          ? [{ id: 'overflow-count', value: audit.overflowViolations?.length || 0, operator: 'eq', threshold: 0 }]
          : [],
        ...(audit ? {} : { reason: 'The evidence predates text-bound measurement' }),
      });
    }
  }
  if (requiredIds.has('feature:annotation-near-label')) {
    for (const item of evidence) {
      const audit = item.metrics?.annotationLayoutAudit;
      checks.push({
        id: `B5-A6-annotation-clearance:${item.locale}`,
        status: audit ? 'passed' : 'open',
        measurements: audit
          ? [{ id: 'overlap-count', value: audit.overlapViolations?.length || 0, operator: 'eq', threshold: 0 }]
          : [],
        ...(audit ? {} : { reason: 'The evidence predates annotation-clearance measurement' }),
      });
    }
  }
  return checks;
}

async function feedbackRecordsInBuildRoot(buildRoot) {
  if (!existsSync(buildRoot)) return [];
  const records = [];
  const builds = await readdir(buildRoot, { withFileTypes: true });
  for (const buildEntry of builds) {
    if (!buildEntry.isDirectory() || !buildEntry.name.startsWith('build-')) continue;
    const feedbackDir = path.join(buildRoot, buildEntry.name, 'objects', 'feedback-record');
    if (!existsSync(feedbackDir)) continue;
    for (const file of await readdir(feedbackDir)) {
      if (!file.endsWith('.json')) continue;
      records.push(JSON.parse(await readFile(path.join(feedbackDir, file), 'utf8')));
    }
  }
  return records;
}

async function normalizeMatrix(input, projectRoot) {
  if (input == null) return null;
  if (typeof input === 'string') return readJsonLocator(input, projectRoot);
  return input;
}

export async function finishReviewedBuild(input, options = {}) {
  const buildRoot = options.buildRoot || DEFAULT_BUILD_ROOT;
  const projectRoot = options.projectRoot || rootDir;
  const build = await readDatasetBuild(input.buildId, { buildRoot });
  const authoredReceipt = latestReceipt(build, 'AUTHORED');
  invariant(build.state === 'AUTHORED' && authoredReceipt, 'BUILD_NOT_AUTHORED', 'Build must be AUTHORED before review can finish');
  const authored = authoredReceipt.payload;
  const plan = planForFidelityResult(authored);
  const packet = await readBuildObject(build.buildId, {
    kind: 'review-packet',
    digest: input.reviewToken || input.packetDigest,
  }, { buildRoot });
  const { packetDigest, ...packetValue } = packet;
  invariant(packetDigest === digestFidelityValue(packetValue), 'REVIEW_PACKET_DIGEST_MISMATCH', 'Review packet digest does not match its content');
  invariant(packet.authoredDigest === authored.snapshotDigest, 'REVIEW_PACKET_STALE', 'Review packet was prepared for an older authored snapshot');
  invariant(packet.verificationPlanDigest === plan.digest, 'REVIEW_PACKET_STALE', 'Review packet was prepared for an older VerificationPlan');

  let automaticEvidence;
  let evidenceEntries = [];
  if (input.automaticEvidence) {
    invariant(options.allowInlineEvidence === true, 'INLINE_EVIDENCE_FORBIDDEN', 'Inline automatic evidence is test-only; provide evidenceManifests');
    automaticEvidence = input.automaticEvidence;
  } else {
    const consistency = await consistencyFromReference(
      input.verificationReference || input.datasetVerification,
      {
        buildId: build.buildId,
        key: build.key,
        adapter: build.adapter,
        authoredDigest: authored.snapshotDigest,
        verificationPlanDigest: plan.digest,
        buildRoot,
      }
    );
    if (build.adapter === 'income-statement') {
      invariant(Array.isArray(input.evidenceManifests) && input.evidenceManifests.length > 0, 'AUTOMATIC_EVIDENCE_REQUIRED', 'Income Statement review needs record:fidelity evidence manifests');
      evidenceEntries = await Promise.all(input.evidenceManifests.map((locator) =>
        evidenceFromManifest(locator, {
          buildId: build.buildId,
          authoredDigest: authored.snapshotDigest,
          verificationPlanDigest: plan.digest,
          projectRoot,
        })
      ));
    } else {
      invariant(!input.evidenceManifests?.length, 'ADAPTER_EVIDENCE_INVALID', 'Revenue Metric review does not accept Sankey fidelity evidence');
      evidenceEntries = plan.requiredLocales.map((locale) => ({
        locale,
        status: 'passed',
        digest: consistency.digest,
        metrics: null,
      }));
    }
    automaticEvidence = {
      authoredDigest: authored.snapshotDigest,
      verificationPlanDigest: plan.digest,
      consistency,
      locales: evidenceEntries.map(({ locale, status, digest }) => ({ locale, status, digest })),
    };
  }

  const currentFeedback = (input.feedback || []).map((feedback) => createFeedbackRecord({
    ...feedback,
    buildId: build.buildId,
  }));
  const previousFeedback = await feedbackRecordsInBuildRoot(buildRoot);
  const previousDigests = new Set(previousFeedback.map((record) => record.digest));
  const ledger = projectFeedbackLedger([
    ...previousFeedback,
    ...currentFeedback.filter((record) => !previousDigests.has(record.digest)),
  ]);
  const openItems = ledger.openFeedback
    .filter((feedback) => feedback.buildId === build.buildId)
    .map((feedback) => `${feedback.feedbackId}/${feedback.regionId}`);
  const automationUpgradesRequired = ledger.byRule
    .filter((rule) => rule.automationUpgradeRequired)
    .map((rule) => rule.ruleId);

  const attestation = input.attestation
    ? {
        ...input.attestation,
        authoredDigest: authored.snapshotDigest,
        verificationPlanDigest: plan.digest,
        reviewedAt: input.attestation.reviewedAt || (options.now || (() => new Date().toISOString()))(),
      }
    : null;
  const riskChecks = [
    ...derivedRiskChecks(authored.verificationPlan, evidenceEntries),
    ...(input.riskChecks || []),
  ];
  const fidelityResult = createFidelityResult({
    buildId: build.buildId,
    key: build.key,
    adapter: build.adapter,
    authoredDigest: authored.snapshotDigest,
    verificationPlan: plan,
    automaticEvidence,
    attestation,
    regions: input.regions || [],
    attention: input.attention,
    feedbackSummary: { openItems, automationUpgradesRequired },
    riskChecks,
    interfaceMatrix: await normalizeMatrix(input.interfaceMatrix, projectRoot),
  });

  const feedbackReferences = [];
  for (const feedback of currentFeedback) {
    feedbackReferences.push(await recordBuildObject(build.buildId, 'feedback-record', feedback, {
      buildRoot,
      projectRoot,
    }));
  }
  const [resultReference, ledgerReference] = await Promise.all([
    recordBuildObject(build.buildId, 'fidelity-result', fidelityResult, { buildRoot, projectRoot }),
    recordBuildObject(build.buildId, 'feedback-ledger', ledger, { buildRoot, projectRoot }),
  ]);
  const reviewedBuild = await recordDatasetBuildReviewOutcome(build.buildId, {
    expectedRevision: build.revision,
    status: fidelityResult.status,
    authoredDigest: authored.snapshotDigest,
    verificationPlanDigest: plan.digest,
    fidelityResult: resultReference,
    feedbackLedger: ledgerReference,
    feedbackRecords: feedbackReferences,
  }, { buildRoot, projectRoot, now: options.now });

  if (fidelityResult.status !== 'accepted') {
    return {
      build: reviewedBuild,
      fidelityResult,
      fidelityResultReference: resultReference,
      feedbackReferences,
      feedbackLedger: ledger,
      feedbackLedgerReference: ledgerReference,
    };
  }

  const evidence = {
    candidate: { status: 'passed', digest: fidelityResult.automaticEvidence.evidenceDigest },
    reference: {
      status: build.adapter === 'revenue-metric' ? 'not-applicable' : 'passed',
      digest: fidelityResult.interfaceMatrix?.digest || fidelityResult.resultDigest,
    },
    process: { status: 'passed', digest: plan.digest },
    human: { status: 'passed', digest: fidelityResult.attestation.attestationDigest },
  };
  const closed = await recordDatasetBuildCommand(build.buildId, {
    type: 'record-closed',
    expectedRevision: build.revision,
    snapshotDigest: authored.snapshotDigest,
    fidelityResult,
    evidence,
    reviewObjects: {
      fidelityResult: resultReference,
      feedbackLedger: ledgerReference,
      feedbackRecords: feedbackReferences,
    },
  }, { buildRoot, projectRoot, requireFresh: true, now: options.now });
  return {
    build: closed,
    fidelityResult,
    fidelityResultReference: resultReference,
    feedbackReferences,
    feedbackLedger: ledger,
    feedbackLedgerReference: ledgerReference,
  };
}

export async function stageReviewedBaseline(input, options = {}) {
  const buildRoot = options.buildRoot || DEFAULT_BUILD_ROOT;
  const projectRoot = options.projectRoot || rootDir;
  const build = await readDatasetBuild(input.buildId, { buildRoot });
  const closure = latestReceipt(build, 'CLOSED');
  invariant(closure, 'BUILD_NOT_CLOSED', 'Build must be CLOSED before baseline staging');
  const command = build.adapter === 'revenue-metric'
    ? {
        type: 'stage-baseline',
        expectedRevision: build.revision,
        closureDigest: closure.payload.closureDigest,
        disposition: 'not-applicable',
        reason: 'revenue-metric-data-only',
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

export async function sealReviewedBuild(input, options = {}) {
  const buildRoot = options.buildRoot || DEFAULT_BUILD_ROOT;
  const build = await readDatasetBuild(input.buildId, { buildRoot });
  const inspection = await inspectDatasetBuild(build.buildId, {
    ...options,
    buildRoot,
  });
  const authored = latestReceipt(build, 'AUTHORED');
  const closure = latestReceipt(build, 'CLOSED');
  invariant(build.state === 'BASELINE_STAGED' && authored && closure, 'BUILD_NOT_BASELINE_STAGED', 'Build must be BASELINE_STAGED before sealing');
  invariant(inspection.fresh, 'SEAL_INPUT_STALE', `Build inputs are stale: ${inspection.reasons.join(', ')}`);
  return recordDatasetBuildCommand(build.buildId, {
    type: 'seal',
    expectedRevision: build.revision,
    status: 'passed',
    snapshotDigest: authored.payload.snapshotDigest,
    closureDigest: closure.payload.closureDigest,
    baseCanonicalDigest: build.baseCanonicalDigest,
    acceptedAt: (options.now || (() => new Date().toISOString()))(),
    verdictInputDigests: Object.values(closure.payload.evidence).map((item) => item.digest),
  }, {
    buildRoot,
    projectRoot: options.projectRoot || rootDir,
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
  if (!references?.fidelityResult || !references?.feedbackLedger) return inspectionResult;
  const [fidelityResult, feedbackLedger] = await Promise.all([
    readBuildObject(buildId, references.fidelityResult, { buildRoot }),
    readBuildObject(buildId, references.feedbackLedger, { buildRoot }),
  ]);
  inspectionResult.fidelityResultDigest = fidelityResult.resultDigest;
  const report = createCloseoutReport({
    inspection: inspectionResult,
    fidelityResult,
    feedbackLedger,
  });
  return {
    ...inspectionResult,
    report,
    taskInformation: renderTaskInformation(report),
    loopFidelitySummary: renderLoopFidelitySummary(report),
  };
}
