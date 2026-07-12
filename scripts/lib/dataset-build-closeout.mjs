import { createHash } from 'node:crypto';
import { existsSync } from 'node:fs';
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import {
  createFeedbackRecord,
  projectFeedbackLedger,
} from './feedback-ledger.mjs';
import {
  createFidelityResult,
  createInterfaceMatrix,
  digestFidelityValue,
} from './fidelity-result.mjs';
import { createObjectInventory } from './object-inventory.mjs';
import { compileVerificationPlan } from './verification-plan.mjs';
import { assertInterfaceEvidenceReady } from './interface-fidelity.mjs';
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

export const REVIEW_PACKET_PROTOCOL = 'review-packet/v2';

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

function assertHiddenAnchorEvidenceBound(build, inventory, artifacts) {
  const hiddenObjects = inventory.objects.filter((object) => object.features.includes('hidden-anchor'));
  if (hiddenObjects.length === 0) return;

  const sourceByLocator = new Map();
  for (const source of build.sources || []) {
    for (const locator of [source.uri, source.processingUri, source.processedUri].filter(Boolean)) {
      sourceByLocator.set(locator, source);
    }
  }
  const referenceArtifacts = new Map(
    artifacts.filter((artifact) => artifact.role === 'reference-image')
      .map((artifact) => [artifact.path, artifact])
  );

  for (const object of hiddenObjects) {
    const evidence = object.featureEvidence['hidden-anchor'];
    const sourceLocator = evidence.locator.split('#', 1)[0];
    const source = sourceByLocator.get(sourceLocator);
    invariant(
      source,
      'HIDDEN_ANCHOR_SOURCE_MISMATCH',
      `Hidden anchor ${object.id} crop locator is not bound to a Build Source: ${sourceLocator}`
    );
    const artifact = referenceArtifacts.get(sourceLocator);
    invariant(
      artifact && artifact.digest === source.digest && evidence.digest === source.digest,
      'HIDDEN_ANCHOR_SOURCE_DIGEST_MISMATCH',
      `Hidden anchor ${object.id} must bind its crop, reference-image artifact, and Build Source to one digest`
    );
    invariant(
      Number.isInteger(source.width) && Number.isInteger(source.height) && source.width > 0 && source.height > 0,
      'HIDDEN_ANCHOR_SOURCE_DIMENSIONS_REQUIRED',
      `Hidden anchor ${object.id} requires Build Source dimensions`
    );
    const [x, y, width, height] = evidence.referenceBBox;
    invariant(
      x + width <= source.width && y + height <= source.height,
      'HIDDEN_ANCHOR_REFERENCE_BBOX_OUT_OF_BOUNDS',
      `Hidden anchor ${object.id} referenceBBox exceeds the Build Source dimensions`
    );
  }
}

function planForFidelityResult(authored) {
  const plan = authored?.verificationPlan;
  invariant(plan, 'VERIFICATION_PLAN_REQUIRED', 'The authored snapshot has no VerificationPlan');
  invariant(
    plan.schemaVersion === 3 && plan.protocol === 'verification-plan/v3',
    'VERIFICATION_PLAN_STALE',
    'Finishing review requires VerificationPlan v3; prepare a fresh review packet'
  );
  return {
    digest: authored.verificationPlanDigest || plan.digest || plan.planDigest,
    requiredLocales: plan.requiredLocales,
    changeImpact: plan.changeImpact,
    requiredChecks: plan.requiredChecks,
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
  assertHiddenAnchorEvidenceBound(build, inventory, artifacts);
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
    schemaVersion: 2,
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
  invariant(metrics && typeof metrics === 'object', 'EVIDENCE_METRICS_REQUIRED', `Fidelity evidence has no metrics document: ${locator}`);
  invariant(
    manifest.identity?.dataset === context.key &&
      metrics.dataset === manifest.identity.dataset &&
      metrics.language === manifest.identity.language,
    'EVIDENCE_METRICS_IDENTITY_MISMATCH',
    `Fidelity metrics dataset/language do not match the Build manifest: ${locator}`
  );
  const loadedFonts = metrics.fontStatus?.loaded;
  invariant(
    metrics.fontStatus?.allLoaded === true &&
      loadedFonts &&
      Object.keys(loadedFonts).length > 0 &&
      Object.values(loadedFonts).every(Boolean),
    'EVIDENCE_FONT_STATUS_INVALID',
    `Fidelity evidence did not prove every project font loaded: ${locator}`
  );
  const typography = metrics.typographyAudit;
  invariant(
    typography?.schemaVersion === 1 &&
      typography.ruleId === 'G3' &&
      typography.status === 'passed' &&
      Array.isArray(typography.violations) &&
      typography.violations.length === 0,
    'EVIDENCE_TYPOGRAPHY_INVALID',
    `Fidelity evidence has no passing G3 typography audit: ${locator}`
  );
  invariant(
    manifest.artifacts?.interfaceAudit && manifest.artifacts?.interfaceContactSheet,
    'EVIDENCE_INTERFACE_ARTIFACT_REQUIRED',
    `Fidelity evidence must archive the G12 audit and contact sheet: ${locator}`
  );
  const interfaceAudit = await readJsonLocator(manifest.artifacts.interfaceAudit, context.projectRoot);
  const interfaceMetrics = metrics.interfaceAudit;
  invariant(
    interfaceAudit?.gate === 'G12' && interfaceAudit.version >= 3,
    'EVIDENCE_INTERFACE_AUDIT_INVALID',
    `Fidelity evidence has no current G12 interface audit: ${locator}`
  );
  invariant(
    interfaceAudit.dataset === metrics.dataset && interfaceAudit.language === metrics.language,
    'EVIDENCE_INTERFACE_IDENTITY_MISMATCH',
    `G12 audit dataset/language do not match its metrics document: ${locator}`
  );
  const nodePaintAudit = metrics.nodePaintAudit;
  invariant(
    nodePaintAudit?.schemaVersion === 1 &&
      nodePaintAudit.dataset === metrics.dataset &&
      nodePaintAudit.language === metrics.language,
    'EVIDENCE_NODE_PAINT_IDENTITY_MISMATCH',
    `Node paint audit dataset/language do not match its metrics document: ${locator}`
  );
  try {
    assertInterfaceEvidenceReady(interfaceAudit);
  } catch (error) {
    throw closeoutError(
      'EVIDENCE_INTERFACE_AUDIT_NOT_PASSED',
      `G12 must be enforced and fully passed (candidate plus reference): ${locator}; ${error.message}`
    );
  }
  invariant(
    interfaceMetrics?.path === manifest.artifacts.interfaceAudit &&
      interfaceMetrics.contactSheet === manifest.artifacts.interfaceContactSheet &&
      interfaceMetrics.mode === interfaceAudit.mode &&
      interfaceMetrics.status === interfaceAudit.status &&
      interfaceMetrics.enforcementStatus === interfaceAudit.enforcementStatus &&
      interfaceMetrics.candidateStatus === interfaceAudit.candidateStatus &&
      interfaceMetrics.referenceStatus === interfaceAudit.referenceStatus,
    'EVIDENCE_INTERFACE_IDENTITY_MISMATCH',
    `G12 metrics do not identify the archived audit artifacts: ${locator}`
  );
  const digest = digestFidelityValue({ manifest, artifactDigests });
  return {
    locale: manifest.identity.language,
    status: 'passed',
    digest,
    metrics,
    manifest,
    artifactDigests,
    interfaceAudit,
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
    const expectedNodes = new Set((featureCheck.evidenceTargets || []).map((target) => target.split(/[.:/]/).at(-1)));
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

function nodePaintRecords(metrics) {
  const audit = metrics?.nodePaintAudit;
  const records = audit?.nodes || audit?.records || audit?.items || [];
  return Array.isArray(records) ? records : [];
}

function nodePaintId(record) {
  return record?.nodeId || record?.node || record?.id || null;
}

function checkFeatureEvidence(check, entry) {
  const expectedTargets = (check.evidenceTargets || []).map((target) => target.split(/[.:/]/).at(-1));
  if (check.evidenceKind === 'label-layout-audit') {
    const labels = entry.metrics?.labelLayoutAudit?.horizontalSideLabels || [];
    return Boolean(entry.metrics?.labelLayoutAudit) && expectedTargets.every((target) => labels.some((label) =>
      label.node === target && Number.isFinite(Number(label.verticalCenterDelta)) && Number(label.verticalCenterDelta) <= 4
    ));
  }
  if (check.evidenceKind === 'text-layout-audit') {
    const audit = entry.metrics?.textLayoutAudit;
    return Boolean(audit) &&
      ((check.objectIds || []).length === 0 || Number(audit.checkedTexts) > 0) &&
      (audit.overflowViolations?.length || 0) === 0;
  }
  if (check.evidenceKind === 'annotation-layout-audit') {
    const audit = entry.metrics?.annotationLayoutAudit;
    return Boolean(audit) &&
      ((check.objectIds || []).length === 0 || Number(audit.checkedAnnotationTexts) > 0) &&
      (audit.overlapViolations?.length || 0) === 0;
  }
  if (check.evidenceKind === 'interface-audit') {
    return entry.interfaceAudit?.enforcementStatus === 'passed';
  }
  if (check.evidenceKind === 'node-paint-audit') {
    const records = nodePaintRecords(entry.metrics);
    const byId = new Map(records.map((record) => [nodePaintId(record), record]));
    const visible = check.id !== 'feature:hidden-anchor';
    return expectedTargets.length > 0 && expectedTargets.every((target) => {
      const record = byId.get(target);
      return record && record.faceVisible === visible;
    });
  }
  return false;
}

function localeEvidenceForCheck(check, entry, consistency) {
  if (!entry) return null;
  if (check.evidenceKind === 'dataset-consistency') {
    return {
      passed: consistency.status === 'passed',
      evidenceDigests: [consistency.digest],
    };
  }
  if (check.evidenceKind === 'fidelity-run') {
    return { passed: entry.status === 'passed', evidenceDigests: [entry.digest] };
  }
  if (check.evidenceKind === 'full-review-profile') {
    return {
      passed: entry.status === 'passed' && consistency.status === 'passed',
      evidenceDigests: [consistency.digest, entry.digest],
    };
  }
  if (check.evidenceKind === 'interface-audit') {
    const evidenceDigests = [
      entry.artifactDigests?.reference,
      entry.artifactDigests?.interfaceAudit,
      entry.artifactDigests?.interfaceContactSheet,
    ].filter(Boolean);
    invariant(evidenceDigests.length === 3, 'CHECK_EVIDENCE_PROVIDER_MISSING', `Check ${check.id} needs archived reference, interface audit, and contact sheet`);
    return { passed: checkFeatureEvidence(check, entry), evidenceDigests };
  }
  if (['label-layout-audit', 'text-layout-audit', 'annotation-layout-audit', 'node-paint-audit'].includes(check.evidenceKind)) {
    invariant(entry.artifactDigests?.metrics, 'CHECK_EVIDENCE_PROVIDER_MISSING', `Check ${check.id} needs the archived metrics document`);
    return {
      passed: checkFeatureEvidence(check, entry),
      evidenceDigests: [entry.artifactDigests.metrics],
    };
  }
  throw closeoutError('CHECK_EVIDENCE_PROVIDER_INVALID', `No locale evidence provider exists for ${check.id}/${check.evidenceKind}`);
}

function deriveCheckResults(
  plan,
  evidenceEntries,
  consistency,
  manualCheckDecisions = [],
  authoredArtifacts = []
) {
  const entriesByLocale = new Map(evidenceEntries.map((entry) => [entry.locale, entry]));
  const results = [];
  for (const check of plan.requiredChecks) {
    if (check.enforcement === 'manual') continue;
    if (check.localeScope === 'global') {
      let status;
      let evidenceDigests;
      if (check.evidenceKind === 'dataset-consistency') {
        status = consistency.status === 'passed' ? 'passed' : 'failed';
        evidenceDigests = [consistency.digest];
      } else if (check.evidenceKind === 'verification-plan') {
        const planDigest = plan.planDigest || plan.digest;
        invariant(planDigest, 'CHECK_EVIDENCE_PROVIDER_MISSING', `Check ${check.id} needs the VerificationPlan digest`);
        status = 'passed';
        evidenceDigests = [planDigest];
      } else {
        throw closeoutError('CHECK_EVIDENCE_PROVIDER_INVALID', `No global evidence provider exists for ${check.id}/${check.evidenceKind}`);
      }
      results.push({
        checkId: check.id,
        status,
        source: 'automatic',
        objectIds: [...(check.objectIds || [])],
        evidenceDigests,
      });
      continue;
    }
    for (const locale of plan.requiredLocales) {
      const entry = entriesByLocale.get(locale);
      if (!entry) continue;
      const derived = localeEvidenceForCheck(check, entry, consistency);
      results.push({
        checkId: check.id,
        locale,
        status: derived.passed ? 'passed' : 'failed',
        source: 'automatic',
        objectIds: [...(check.objectIds || [])],
        evidenceDigests: derived.evidenceDigests,
      });
    }
  }

  invariant(Array.isArray(manualCheckDecisions), 'MANUAL_CHECK_DECISIONS_INVALID', 'manualCheckDecisions must be an array');
  const checkById = new Map(plan.requiredChecks.map((check) => [check.id, check]));
  const entriesByManualLocale = new Map(evidenceEntries.map((entry) => [entry.locale, entry]));
  const globalEvidenceDigests = new Set([
    consistency.digest,
    plan.planDigest,
    plan.inventoryDigest,
    ...authoredArtifacts.map((artifact) => artifact.digest),
  ].filter(Boolean));
  for (const [index, decision] of manualCheckDecisions.entries()) {
    invariant(decision && typeof decision === 'object', 'MANUAL_CHECK_DECISIONS_INVALID', `manualCheckDecisions[${index}] must be an object`);
    const check = checkById.get(decision.checkId);
    invariant(check?.enforcement === 'manual', 'MANUAL_CHECK_DECISION_NOT_ALLOWED', `Check ${decision.checkId || index} is not a required manual check`);
    const locale = decision.locale == null ? null : String(decision.locale).trim();
    invariant(
      (check.localeScope === 'global' && locale == null) ||
        (check.localeScope === 'required-locales' && plan.requiredLocales.includes(locale)),
      'MANUAL_CHECK_DECISIONS_INVALID',
      `Manual check ${check.id} has an invalid locale`
    );
    invariant(
      Array.isArray(decision.evidenceDigests) && decision.evidenceDigests.length > 0,
      'MANUAL_CHECK_EVIDENCE_MISMATCH',
      `Manual check ${check.id}${locale ? `@${locale}` : ''} needs bound evidence`
    );
    const evidenceDigests = [...new Set(decision.evidenceDigests.map(String))].sort();
    const featureEvidenceDigests = new Set(check.featureEvidenceDigests || []);
    if (locale != null) {
      const entry = entriesByManualLocale.get(locale);
      invariant(entry, 'MANUAL_CHECK_EVIDENCE_MISMATCH', `Manual check ${check.id}@${locale} has no locale evidence run`);
      const localeEvidenceDigests = new Set([
        entry.digest,
        ...Object.values(entry.artifactDigests || {}),
      ].filter(Boolean));
      const allowed = new Set([...localeEvidenceDigests, ...featureEvidenceDigests]);
      invariant(
        evidenceDigests.some((digest) => localeEvidenceDigests.has(digest)) &&
          evidenceDigests.every((digest) => allowed.has(digest)),
        'MANUAL_CHECK_EVIDENCE_MISMATCH',
        `Manual check ${check.id}@${locale} cites evidence outside that locale run`
      );
    } else {
      const allowed = new Set([...globalEvidenceDigests, ...featureEvidenceDigests]);
      invariant(
        evidenceDigests.some((digest) => globalEvidenceDigests.has(digest)) &&
          evidenceDigests.every((digest) => allowed.has(digest)),
        'MANUAL_CHECK_EVIDENCE_MISMATCH',
        `Manual check ${check.id} cites evidence outside the Build-bound global evidence`
      );
    }
    results.push({
      checkId: check.id,
      ...(locale == null ? {} : { locale }),
      status: decision.status,
      source: 'manual',
      objectIds: [...(check.objectIds || [])],
      evidenceDigests,
      ...(decision.note == null ? {} : { note: String(decision.note) }),
    });
  }
  return results;
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
  const value = typeof input === 'string' ? await readJsonLocator(input, projectRoot) : input;
  return createInterfaceMatrix(value);
}

function validateMatrixEvidence(matrix, evidenceEntries, required) {
  if (!required) return;
  invariant(
    matrix,
    'INTERFACE_MATRIX_REQUIRED',
    'New-dataset, geometry, and render-engine review require interface-matrix/v1'
  );
  const auditedIds = new Set(evidenceEntries.flatMap((entry) => entry.interfaceAudit?.expectedInterfaceIds || []));
  const candidateIds = new Set(matrix.rows.filter((row) => row.candidate).map((row) => row.id));
  invariant(
    JSON.stringify([...auditedIds].sort()) === JSON.stringify([...candidateIds].sort()),
    'INTERFACE_MATRIX_CANDIDATE_COVERAGE_MISMATCH',
    'Interface Matrix candidate rows must exactly cover the automatic G12 candidate interfaces'
  );
  const evidenceSets = evidenceEntries.map((entry) => ({
    audit: entry.artifactDigests?.interfaceAudit,
    contactSheet: entry.artifactDigests?.interfaceContactSheet,
  }));
  for (const row of matrix.rows) {
    invariant(
      evidenceSets.some((digests) =>
        digests.audit === row.evidenceDigests.audit &&
        digests.contactSheet === row.evidenceDigests.contactSheet
      ),
      'INTERFACE_MATRIX_EVIDENCE_MISMATCH',
      `Interface Matrix row ${row.id} does not bind to one archived evidence run`
    );
    for (const entry of evidenceEntries) {
      const auditRow = entry.interfaceAudit?.interfaces?.find((item) => item.id === row.id);
      if (!auditRow) continue;
      invariant(
        auditRow.node === row.node && auditRow.face === row.side,
        'INTERFACE_MATRIX_GEOMETRY_MISMATCH',
        `Interface Matrix row ${row.id} names a different node face than G12`
      );
      const auditCandidate = {
        nodeBbox: {
          left: auditRow.nodeBox?.left,
          right: auditRow.nodeBox?.right,
          top: auditRow.nodeBox?.top,
          bottom: auditRow.nodeBox?.bottom,
        },
        unionIntervals: (auditRow.candidateUnion || [])
          .map((interval) => ({ top: interval.top, bottom: interval.bottom }))
          .sort((left, right) => left.top - right.top || left.bottom - right.bottom),
        linkIntervals: (auditRow.links || [])
          .map((link) => ({
            linkId: link.link,
            top: link.interval?.top,
            bottom: link.interval?.bottom,
          }))
          .sort((left, right) => left.linkId.localeCompare(right.linkId) || left.top - right.top || left.bottom - right.bottom),
      };
      invariant(
        digestFidelityValue(auditCandidate) === digestFidelityValue(row.candidate),
        'INTERFACE_MATRIX_GEOMETRY_MISMATCH',
        `Interface Matrix row ${row.id} candidate geometry does not match the archived G12 row`
      );
      const auditIntent = auditRow.coverageIntent === 'full-face' ? 'full-face' : 'reference';
      invariant(
        auditIntent === row.coverageIntent,
        'INTERFACE_MATRIX_COVERAGE_INTENT_MISMATCH',
        `Interface Matrix row ${row.id} conflicts with the G12 coverage intent`
      );
      invariant(
        /^sha256:[a-f0-9]{64}$/.test(String(auditRow.referenceCropDigest || '')) &&
          auditRow.referenceCropDigest === row.evidenceDigests.referenceCrop,
        'INTERFACE_MATRIX_REFERENCE_CROP_MISMATCH',
        `Interface Matrix row ${row.id} does not bind to the deterministic G12 reference crop`
      );
    }
  }
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
  invariant(
    packet.schemaVersion === 2 && packet.protocol === REVIEW_PACKET_PROTOCOL,
    'REVIEW_PACKET_STALE',
    'Finishing review requires a fresh review-packet/v2'
  );
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
          key: build.key,
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
  const interfaceMatrix = await normalizeMatrix(input.interfaceMatrix, projectRoot);
  const matrixRequired = build.adapter === 'income-statement'
    && plan.changeImpact.some((impact) =>
      impact === 'geometry' || impact === 'new-dataset' || impact === 'render-engine'
    );
  validateMatrixEvidence(interfaceMatrix, evidenceEntries, matrixRequired);
  const checkResults = deriveCheckResults(
    authored.verificationPlan,
    evidenceEntries,
    automaticEvidence.consistency,
    input.manualCheckDecisions || [],
    authored.artifacts || []
  );
  const fidelityResult = createFidelityResult({
    buildId: build.buildId,
    key: build.key,
    adapter: build.adapter,
    authoredDigest: authored.snapshotDigest,
    verificationPlan: plan,
    automaticEvidence,
    checkResults,
    attestation,
    regions: input.regions || [],
    attention: input.attention,
    feedbackSummary: { openItems, automationUpgradesRequired },
    riskChecks,
    interfaceMatrix,
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
