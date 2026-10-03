// Transactional workspace for one d3 fidelity run.
//
// A run owns a private scratch directory. Only its declared artifacts can be
// promoted, and promotion happens only after the caller has completed every
// render gate. Accepted archives carry a complete identity so an unrelated
// language, reference, run kind, or protocol version can never become the
// comparison baseline for the current run.
import { createHash, randomUUID } from 'node:crypto';
import { copyFile, mkdir, mkdtemp, readFile, readdir, rename, rm, stat, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { rootDir } from './project.mjs';

export const compareDir = path.join(rootDir, 'compare');
export const outputCompareDir = path.join(rootDir, 'output', 'compare');
export const LEGACY_FIDELITY_PROTOCOL_VERSION = 'fidelity-run/1';
export const FIDELITY_PROTOCOL_VERSION = 'fidelity-run/2';

const RUN_MANIFEST_NAME = 'fidelity-run.json';
// A run is archived only after every gate passed, so the failure-only
// interface contact sheet is never part of an archive. The reference stays
// in its Source location and the diff is a debugging aid (`--keep`); neither
// is read after the run, so neither is archived.
const ARCHIVED_ARTIFACT_KEYS = Object.freeze([
  'candidate',
  'metrics',
  'interfaceAudit',
]);
const PREVIOUS_IDENTITY_KEYS = Object.freeze([
  'dataset',
  'language',
  'runKind',
  'referenceHash',
  'protocolVersion',
]);
const COMPARABLE_RUN_STATUSES = new Set(['accepted', 'evidence-ready', 'reviewed']);

export function archiveSegment(value, fallback) {
  const segment = String(value || '')
    .trim()
    .normalize('NFKC')
    .toLowerCase()
    .replace(/[\\/]/g, '-')
    .replace(/[:*?"<>|]/g, '-')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  return (segment || fallback).slice(0, 96).replace(/-+$/g, '') || fallback;
}

export function improvementSegment(previousFull, currentFull) {
  if (!previousFull || typeof previousFull.similarity !== 'number') return 'baseline';
  const delta = currentFull.similarity - previousFull.similarity;
  const sign = delta >= 0 ? '+' : '';
  return `sim${sign}${delta.toFixed(6)}`;
}

export async function hashFile(filePath) {
  return createHash('sha256').update(await readFile(filePath)).digest('hex');
}

export async function hashFiles(filePaths, options = {}) {
  const baseDir = options.baseDir || rootDir;
  const hash = createHash('sha256');
  const ordered = [...new Set(filePaths.map((filePath) => path.resolve(filePath)))].sort();
  for (const filePath of ordered) {
    const label = path.relative(baseDir, filePath).split(path.sep).join('/');
    const contents = await readFile(filePath);
    hash.update(label);
    hash.update('\0');
    hash.update(contents);
    hash.update('\0');
  }
  return hash.digest('hex');
}

function assertSafeSegment(value, label) {
  if (!/^[a-z0-9][a-z0-9._-]*$/i.test(value)) {
    throw new Error(`Invalid ${label} path segment: ${value}`);
  }
}

function normalizeIdentity(identity) {
  const normalized = {
    dataset: String(identity?.dataset || ''),
    language: String(identity?.language || ''),
    runKind: String(identity?.runKind || ''),
    referenceHash: String(identity?.referenceHash || ''),
    protocolVersion: String(identity?.protocolVersion || ''),
    datasetHash: String(identity?.datasetHash || ''),
    renderHash: String(identity?.renderHash || ''),
    i18nHash: String(identity?.i18nHash || ''),
    ...(identity?.buildId ? { buildId: String(identity.buildId) } : {}),
    ...(identity?.authoredDigest ? { authoredDigest: String(identity.authoredDigest) } : {}),
    ...(identity?.verificationPlanDigest
      ? { verificationPlanDigest: String(identity.verificationPlanDigest) }
      : {}),
  };

  for (const [key, value] of Object.entries(normalized).filter(([key]) => !['buildId', 'authoredDigest', 'verificationPlanDigest'].includes(key))) {
    if (!value) throw new Error(`Missing fidelity run identity field: ${key}`);
  }
  if (normalized.protocolVersion === FIDELITY_PROTOCOL_VERSION && normalized.runKind === 'fidelity-review') {
    for (const key of ['buildId', 'authoredDigest', 'verificationPlanDigest']) {
      if (!normalized[key]) throw new Error(`Missing reviewed fidelity run identity field: ${key}`);
    }
  }
  assertSafeSegment(normalized.dataset, 'dataset');
  assertSafeSegment(normalized.language, 'language');
  assertSafeSegment(normalized.runKind, 'run kind');
  return Object.freeze(normalized);
}

export function previousIdentityMatches(left, right) {
  const keys = [...PREVIOUS_IDENTITY_KEYS];
  if (
    left?.protocolVersion === FIDELITY_PROTOCOL_VERSION ||
    right?.protocolVersion === FIDELITY_PROTOCOL_VERSION
  ) {
    if (left?.runKind === 'fidelity-review' || right?.runKind === 'fidelity-review') {
      keys.push('buildId', 'authoredDigest', 'verificationPlanDigest');
    }
  }
  return keys.every((key) => left?.[key] === right?.[key]);
}

function artifactNames(dataset, language) {
  const localizedSuffix = language === 'en' ? '' : `-${language}`;
  const base = `${dataset}${localizedSuffix}`;
  return Object.freeze({
    reference: `${dataset}-reference.png`,
    candidate: `${base}-d3.png`,
    diff: `${base}-pixel-diff-x4.png`,
    metrics: `${base}-metrics.json`,
    interfaceAudit: `${base}-interface-audit.json`,
    interfaceContactSheet: `${base}-interface-contact-sheet.png`,
  });
}

function relativeToProject(run, filePath) {
  return path.relative(run.projectRoot, filePath).split(path.sep).join('/');
}

function scratchManifest(run, status, details = {}) {
  return {
    schemaVersion: 1,
    status,
    runId: run.runId,
    identity: run.identity,
    artifacts: Object.fromEntries(
      Object.entries(run.artifactNames).map(([key, name]) => [key, name])
    ),
    ...details,
  };
}

async function writeJson(filePath, value) {
  await writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`);
}

async function readJson(filePath) {
  try {
    return JSON.parse(await readFile(filePath, 'utf8'));
  } catch {
    return null;
  }
}

export async function createFidelityRun(options) {
  const identity = normalizeIdentity({
    ...options.identity,
    dataset: options.identity?.dataset || options.datasetKey,
    language: options.identity?.language || options.language || 'en',
    runKind: options.identity?.runKind || options.runKind || 'fidelity',
    protocolVersion:
      options.identity?.protocolVersion || options.protocolVersion || FIDELITY_PROTOCOL_VERSION,
  });
  const scratchRoot = path.resolve(options.scratchRoot || compareDir);
  const outputRoot = path.resolve(options.outputRoot || outputCompareDir);
  const projectRoot = path.resolve(options.projectRoot || rootDir);
  const runsRoot = path.join(scratchRoot, 'runs');
  await mkdir(runsRoot, { recursive: true });
  const prefix = `${archiveSegment(identity.dataset, 'dataset')}-${archiveSegment(identity.language, 'language')}-`;
  const scratchDir = await mkdtemp(path.join(runsRoot, prefix));
  const names = artifactNames(identity.dataset, identity.language);
  const run = {
    runId: randomUUID(),
    identity,
    scratchRoot,
    outputRoot,
    projectRoot,
    scratchDir,
    artifactNames: names,
    artifacts: Object.freeze(
      Object.fromEntries(Object.entries(names).map(([key, name]) => [key, path.join(scratchDir, name)]))
    ),
    manifestPath: path.join(scratchDir, RUN_MANIFEST_NAME),
  };
  await writeJson(run.manifestPath, scratchManifest(run, 'running', { startedAt: new Date().toISOString() }));
  return run;
}

export async function markFidelityRunFailed(run, error) {
  await writeJson(
    run.manifestPath,
    scratchManifest(run, 'failed', {
      failedAt: new Date().toISOString(),
      error: error instanceof Error ? error.message : String(error),
    })
  );
}

export async function cleanupFidelityRun(run) {
  const resolvedScratch = path.resolve(run.scratchDir);
  const resolvedRoot = path.resolve(run.scratchRoot);
  if (!resolvedScratch.startsWith(`${resolvedRoot}${path.sep}`)) {
    throw new Error(`Refusing to clean scratch outside ${resolvedRoot}: ${resolvedScratch}`);
  }
  await rm(resolvedScratch, { recursive: true, force: true });
}

function runTimestamp(manifest) {
  return Date.parse(manifest?.reviewedAt || manifest?.evidenceReadyAt || manifest?.acceptedAt) || 0;
}

async function comparableRuns(run) {
  const datasetDir = path.join(run.outputRoot, run.identity.dataset);
  if (!existsSync(datasetDir)) return [];
  const entries = await readdir(datasetDir, { withFileTypes: true });
  const accepted = [];

  for (const entry of entries) {
    if (!entry.isDirectory() || entry.name.startsWith('.')) continue;
    const archiveDir = path.join(datasetDir, entry.name);
    const manifest = await readJson(path.join(archiveDir, RUN_MANIFEST_NAME));
    if (!COMPARABLE_RUN_STATUSES.has(manifest?.status)) continue;
    if (!previousIdentityMatches(manifest.identity, run.identity)) continue;
    const metricsName = path.basename(manifest.artifacts?.metrics || '');
    if (!metricsName) continue;
    const metrics = await readJson(path.join(archiveDir, metricsName));
    if (!metrics?.full || typeof metrics.full.similarity !== 'number') continue;
    const info = await stat(archiveDir);
    accepted.push({
      archiveDir,
      archive: relativeToProject(run, archiveDir),
      manifest,
      full: metrics.full,
      timestamp: runTimestamp(manifest) || info.mtimeMs,
    });
  }

  return accepted.sort(
    (left, right) => right.timestamp - left.timestamp || right.archiveDir.localeCompare(left.archiveDir)
  );
}

export async function findPreviousAcceptedRun(run) {
  return (await comparableRuns(run))[0] || null;
}

function sequenceSegment(sequence) {
  return String(sequence).padStart(2, '0');
}

export async function planFidelityRun(run, options) {
  const previousRuns = await comparableRuns(run);
  const previous = previousRuns[0] || null;
  // The archive sequence only records evidence-run order; it is derived,
  // never caller-supplied. Superseded archives are removed, so continue from
  // the highest retained sequence rather than the retained count.
  const retainedSequence = Math.max(0, ...previousRuns.map((item) => Number(item.manifest.archive?.sequence) || 0));
  const sequence = sequenceSegment(Math.max(previousRuns.length, retainedSequence) + 1);
  const improvement = improvementSegment(previous?.full, options.fullMetrics);
  const focus = archiveSegment(options.focus, 'unspecified');
  return {
    datasetCompareDir: path.join(run.outputRoot, run.identity.dataset),
    archiveBaseName: `${sequence}-${improvement}-${focus}`,
    sequence,
    improvement,
    focus,
    previousArchive: previous?.archive || null,
  };
}

async function assertDeclaredArtifacts(run) {
  for (const key of ARCHIVED_ARTIFACT_KEYS) {
    if (key === 'metrics') continue;
    let info;
    try {
      info = await stat(run.artifacts[key]);
    } catch {
      throw new Error(`Missing declared fidelity artifact: ${key} (${run.artifacts[key]})`);
    }
    if (!info.isFile()) {
      throw new Error(`Declared fidelity artifact is not a file: ${key} (${run.artifacts[key]})`);
    }
  }
}

// Build evidence is consumed only as the latest run per Build, locale and
// focus (review binds it; seal reuses the accepted result object). Once a
// newer run of the same kind lands, older ones are dead weight. Strictly
// older only, so two concurrent finalizers can never remove each other.
async function removeSupersededRuns(run, datasetCompareDir, keepName, focus, finalizedAt) {
  if (!run.identity.buildId) return;
  const cutoff = Date.parse(finalizedAt);
  for (const entry of await readdir(datasetCompareDir, { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.name.startsWith('.') || entry.name === keepName) continue;
    const archiveDir = path.join(datasetCompareDir, entry.name);
    const manifest = await readJson(path.join(archiveDir, RUN_MANIFEST_NAME));
    if (!COMPARABLE_RUN_STATUSES.has(manifest?.status)) continue;
    if (manifest.identity?.buildId !== run.identity.buildId || manifest.identity?.language !== run.identity.language) continue;
    if (manifest.archive?.focus !== focus || !(runTimestamp(manifest) < cutoff)) continue;
    await rm(archiveDir, { recursive: true, force: true });
  }
}

function isArchiveCollision(error) {
  return error?.code === 'EEXIST' || error?.code === 'ENOTEMPTY';
}

function archiveNameForSuffix(baseName, suffix) {
  return suffix === 1 ? baseName : `${baseName}-${suffix}`;
}

export async function finalizeFidelityRun(run, options) {
  await assertDeclaredArtifacts(run);
  const status = options.status || 'accepted';
  if (!COMPARABLE_RUN_STATUSES.has(status)) {
    throw new Error(`Unsupported finalized fidelity status: ${status}`);
  }
  const plan = await planFidelityRun(run, options);
  await mkdir(plan.datasetCompareDir, { recursive: true });
  const temporaryDir = await mkdtemp(path.join(plan.datasetCompareDir, `.${plan.archiveBaseName}.tmp-`));
  let committed = false;

  try {
    for (const key of ARCHIVED_ARTIFACT_KEYS) {
      if (key === 'metrics') continue;
      await copyFile(run.artifacts[key], path.join(temporaryDir, run.artifactNames[key]));
    }

    const finalizedAt = new Date().toISOString();

    for (let suffix = 1; suffix < 1000; suffix += 1) {
      const archiveName = archiveNameForSuffix(plan.archiveBaseName, suffix);
      const archiveDir = path.join(plan.datasetCompareDir, archiveName);
      const archive = {
        dir: relativeToProject(run, archiveDir),
        name: archiveName,
        sequence: plan.sequence,
        improvement: plan.improvement,
        focus: plan.focus,
        previousArchive: plan.previousArchive,
      };
      const archivedCandidate = `${archive.dir}/${run.artifactNames.candidate}`;
      const archivedMetrics = `${archive.dir}/${run.artifactNames.metrics}`;
      const archivedInterfaceAudit = `${archive.dir}/${run.artifactNames.interfaceAudit}`;
      const acceptedArtifacts = {
        candidate: archivedCandidate,
        metrics: archivedMetrics,
        interfaceAudit: archivedInterfaceAudit,
      };
      const metrics = {
        ...options.metricsDocument,
        candidate: archivedCandidate,
        diff: null,
        ...(options.metricsDocument?.interfaceAudit
          ? {
              interfaceAudit: {
                ...options.metricsDocument.interfaceAudit,
                path: archivedInterfaceAudit,
                contactSheet: null,
              },
            }
          : {}),
        run: {
          id: run.runId,
          identity: run.identity,
        },
        archive,
      };
      const manifest = scratchManifest(run, status, {
        ...(status === 'accepted' ? { acceptedAt: finalizedAt } : {}),
        ...(status === 'evidence-ready' ? { evidenceReadyAt: finalizedAt } : {}),
        ...(status === 'reviewed' ? { reviewedAt: finalizedAt } : {}),
        archive,
        artifacts: acceptedArtifacts,
      });
      const finalizingManifest = scratchManifest(run, 'finalizing', {
        archive,
      });

      await writeJson(run.artifacts.metrics, metrics);
      await copyFile(run.artifacts.metrics, path.join(temporaryDir, run.artifactNames.metrics));
      await writeJson(run.manifestPath, finalizingManifest);
      await writeJson(path.join(temporaryDir, RUN_MANIFEST_NAME), manifest);

      try {
        await rename(temporaryDir, archiveDir);
        committed = true;
        // The archive manifest is the acceptance SSOT. Updating retained
        // scratch is best-effort so a post-commit scratch failure cannot turn
        // a successfully promoted run into a reported finalize failure.
        await writeJson(run.manifestPath, manifest).catch(() => {});
        // Pruning is housekeeping; it never turns a committed run into a failure.
        await removeSupersededRuns(run, plan.datasetCompareDir, archiveName, plan.focus, finalizedAt).catch(() => {});
        const archivedNames = [...ARCHIVED_ARTIFACT_KEYS.map((key) => run.artifactNames[key]), RUN_MANIFEST_NAME];
        return {
          ...archive,
          files: archivedNames.map((name) => relativeToProject(run, path.join(archiveDir, name))),
          identity: run.identity,
        };
      } catch (error) {
        if (!isArchiveCollision(error)) throw error;
      }
    }

    throw new Error(`Could not create unique archive directory for ${plan.archiveBaseName}`);
  } finally {
    if (!committed) await rm(temporaryDir, { recursive: true, force: true });
  }
}
