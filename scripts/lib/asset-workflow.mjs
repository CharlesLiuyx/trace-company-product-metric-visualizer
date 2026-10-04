import { compactWorkspace, materializeWorkspace, workspaceOverlay } from './workspace-storage.mjs';
import { prepareWorkspaceTools } from './workspace-tools.mjs';
import { adoptApplication } from './workflow-application.mjs';
import { acquireBuildSession, assertBuildSession, readBuildSession } from './workflow-session.mjs';
import { selectBuildPreview } from './workflow-local-view.mjs';
import path from 'node:path';
import { existsSync } from 'node:fs';
import { mkdir, readFile, writeFile, readdir, symlink, copyFile } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { rootDir } from './project.mjs';
import { recordIntake } from '../record-intake.mjs';
import { classifySourceSignals } from './source-objects.mjs';
import { VERIFICATION_PLAN_PROTOCOL } from './verification-plan.mjs';
import { compileMetricFacts, SOURCE_FACTS_PROTOCOL } from './metric-source.mjs';
import { updateMetricCatalog } from './metric-catalog.mjs';
import { recordDatasetBuildCommand, readDatasetBuild, recordBuildObject, inspectDatasetBuild, readBuildObject, readAuthoredObject } from './dataset-build-store.mjs';
import { FIDELITY_RESULT_PROTOCOL } from './fidelity-result.mjs';
import { prepareBuildReview, finishReviewedBuild, stageReviewedBaseline, sealReviewedBuild, evidenceFromManifest } from './dataset-build-closeout.mjs';
import { recordDatasetVerification } from './dataset-verification.mjs';
import { deriveArtifactManifest, CHECKPOINT_PROTOCOL, REVIEW_CANDIDATE_PROTOCOL, nextCheckpoint } from './workflow-dependencies.mjs';
import { recordCheckpoint } from './workflow-checkpoints.mjs';
import { CANONICAL_ROOTS, TOOL_ROOTS, bytesDigest, fileManifest, copyFiles, cloneFiles, filesUnder, inside, atomicJson, readJson, withFileLock, freezeSnapshot } from './workflow-files.mjs';
import { digestValue } from './dataset-build.mjs';
import { verifySiteIdentity } from './site-release-identity.mjs';
import { readReviewPreview } from './workbench-review.mjs';

export function workflowOptions(root = rootDir) { return { projectRoot: root, buildRoot: path.join(root, 'output/builds') }; }
export async function buildContext(buildId, root = rootDir) {
  const options = workflowOptions(root);
  const build = await readDatasetBuild(buildId, options);
  if (existsSync(path.join(options.buildRoot, build.buildId, 'cleaned.json'))) throw Object.assign(new Error(`Build ${build.buildId} was published and archived; its workspace was cleaned. Start a new Build to change ${build.key}`), { code: 'BUILD_CLEANED' });
  return { build, ...options, repositoryRoot: root, projectRoot: build.authoringRoot ? inside(root, build.authoringRoot) : root };
}
export async function canonicalSnapshot(root = rootDir) {
  const pointer = path.join(root, 'output/publications/current.json');
  if (existsSync(pointer)) {
    const current = await readJson(pointer);
    const snapshotRoot = inside(root, `output/publications/trees/${current.publishedDigest.slice(7)}`);
    const manifest = await fileManifest(snapshotRoot);
    if (manifest.digest !== current.publishedDigest) throw new Error('Published snapshot no longer matches its immutable digest');
    return { root: snapshotRoot, ...manifest, published: true };
  }
  return { root, ...await fileManifest(root), published: false };
}
export function runWorkspace(root, script, args = []) {
  const run = spawnSync(process.execPath, [inside(root, `scripts/${script}`), ...args], { cwd: root, encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 });
  if (run.status !== 0) throw Object.assign(new Error(`${script} failed:\n${run.stderr || run.stdout}`), { code: 'WORKFLOW_STEP_FAILED', status: run.status });
  return run;
}
async function operation(buildId, name, root, work, credentials = {}) {
  const started = Date.now();
  const initial = await buildContext(buildId, root);
  return withFileLock(path.join(initial.buildRoot, initial.build.buildId, '.workflow-operation.lock'), async () => {
    const options = { ...await buildContext(buildId, root), ...credentials };
    await assertBuildSession(root, buildId, credentials);
    const sparse = workspaceOverlay(options.projectRoot);
    await materializeWorkspace(options.projectRoot);
    try {
      const result = await work(options);
      await recordBuildObject(buildId, 'operation-report', { operation: name, status: 'completed', startedAt: new Date(started).toISOString(), elapsedMs: Date.now() - started }, options);
      return result;
    } catch (error) {
      await recordBuildObject(buildId, 'operation-report', { operation: name, status: 'failed', startedAt: new Date(started).toISOString(), elapsedMs: Date.now() - started, error: error.message }, options).catch(() => {});
      throw error;
    } finally {
      if (sparse) await compactWorkspace(options.projectRoot);
    }
  });
}
export async function startAsset(input, root = rootDir) {
  const facts = input.facts;
  if (facts?.protocol !== SOURCE_FACTS_PROTOCOL) throw new Error(`Supply ${SOURCE_FACTS_PROTOCOL}: extracted facts, Source anchors and unresolved questions`);
  const signals = input.signals || facts.signals || ['metric-observations'];
  const { adapter } = classifySourceSignals(signals, input.adapter);
  const initialSnapshot = await freezeSnapshot(await canonicalSnapshot(root), root);
  const reserved = await withFileLock(path.join(root, 'output/workflow-intake.lock'), async () => {
    const snapshot = initialSnapshot;
    const sourcePath = path.resolve(root, input.source);
    if (existsSync(sourcePath)) {
      const digest = bytesDigest(await readFile(sourcePath));
      for (const claimed of await filesUnder(root, ['input/processing'])) {
        if (/\.(png|txt|md)$/i.test(claimed) && path.basename(claimed, path.extname(claimed)) !== input.key && bytesDigest(await readFile(inside(root, claimed))) === digest) throw new Error(`Source already claimed at ${claimed}`);
      }
      const claims = path.join(root, 'output/source-claims');
      const file = path.join(claims, `${digest.slice(7)}.json`);
      const prior = existsSync(file) ? await readJson(file) : null;
      if (prior && prior.key !== input.key) throw Object.assign(new Error(`Source already claimed by ${prior.buildId} (${prior.key})`), { code: 'SOURCE_ALREADY_CLAIMED', buildId: prior.buildId });
    }
    const intake = await recordIntake({ source: input.source, key: input.key, adapter, signals, availability: input.availability || 'local-only' }, { ...workflowOptions(root), canonicalDataDigest: async () => snapshot.digest });
    const processing = inside(root, intake.build.sources[0].processingUri);
    const digest = bytesDigest(await readFile(processing));
    await atomicJson(path.join(root, 'output/source-claims', `${digest.slice(7)}.json`), { key: input.key, buildId: intake.build.buildId, sourceDigest: intake.build.sources[0].digest });
    const session = input.session;
    const lease = session ? await acquireBuildSession(root, intake.build.buildId, session) : null;
    return { buildId: intake.build.buildId, snapshot, lease };
  });
  // The shared queue lock protects only reservation. Large copies are per-Build.
  return withFileLock(path.join(root, 'output/builds', reserved.buildId, '.workflow-operation.lock'), async () => {
    const { snapshot, lease } = reserved;
    if (lease) await assertBuildSession(root, reserved.buildId, { session: lease.owner, generation: lease.generation });
    let build = await readDatasetBuild(reserved.buildId, workflowOptions(root));
    const authoringRoot = `output/builds/${build.buildId}/workspace`;
    const workspace = inside(root, authoringRoot);
    if (build.authoringRoot) return { buildId: build.buildId, workspace, session: lease, next: 'show' };
    await mkdir(workspace, { recursive: true });
    await cloneFiles(snapshot.root, workspace, snapshot.entries.map((entry) => entry.path));
    await adoptApplication(root, workspace);
    await prepareWorkspaceTools(root, workspace);
    await copyFiles(root, workspace, [build.sources[0].processingUri]);
    await mkdir(path.join(workspace, 'output'), { recursive: true });
    if (!existsSync(path.join(workspace, 'output/builds'))) await symlink(path.join(root, 'output/builds'), path.join(workspace, 'output/builds'), 'dir');
    await atomicJson(path.join(workspace, 'output/workflow/base.json'), snapshot);
    await atomicJson(path.join(workspace, 'output/workflow/source-facts.json'), facts);
    build = await recordDatasetBuildCommand(build.buildId, { type: 'isolate-workspace', expectedRevision: build.revision, authoringRoot }, { ...workflowOptions(root), session: lease?.owner, generation: lease?.generation });
    const storage = await compactWorkspace(workspace, { assetsOnly: true });
    return { buildId: build.buildId, workspace, adapter, session: lease, storage, next: 'prepare' };
  });
}

async function authoredFacts(build, root, input) {
  if (input?.protocol !== SOURCE_FACTS_PROTOCOL) throw new Error(`Expected ${SOURCE_FACTS_PROTOCOL}`);
  if (input.questions?.length) throw new Error(`Please resolve these Source questions: ${input.questions.join('; ')}`);
  if (build.adapter !== 'metric-observation') {
    if (!Array.isArray(input.objects) || !input.objects.length) throw new Error('Sankey/revenue facts need the complete flat Source object list (source-facts/v1 objects[])');
    return { sourceObjects: { objects: input.objects, ...(input.shortNodes == null ? {} : { shortNodes: input.shortNodes }) } };
  }
  const source = build.sources[0];
  const descriptor = { locator: source.processedUri, digest: source.digest, availability: source.availability,
    ...(source.format === 'text' ? { format: 'text', charLength: source.charLength } : { width: source.width, height: source.height }) };
  const text = source.format === 'text' ? new TextDecoder('utf-8', { fatal: true }).decode(await readFile(inside(root, source.processingUri))) : null;
  const compiled = compileMetricFacts(input, { key: build.key, source: descriptor, text });
  if (compiled.record.questions.length) throw new Error(`Please resolve these Source questions: ${compiled.record.questions.join('; ')}`);
  const destination = inside(root, `data/metric-observations/${build.key}.json`);
  await mkdir(path.dirname(destination), { recursive: true });
  await atomicJson(destination, compiled.record);
  await updateMetricCatalog(root);
  return { record: compiled.record, sourceObjects: { objects: compiled.objects } };
}
export async function prepareAsset(buildId, facts = null, root = rootDir) {
  return operation(buildId, 'prepare', root, async (options) => {
    if (!options.build.authoringRoot) throw new Error('Use the legacy record:build path for non-isolated historical Builds');
    const file = inside(options.projectRoot, 'output/workflow/source-facts.json');
    if (facts) await atomicJson(file, facts);
    const input = facts || await readJson(file);
    const compiled = await authoredFacts(options.build, options.projectRoot, input);
    if (options.build.adapter !== 'metric-observation') {
      runWorkspace(options.projectRoot, 'sync-index-datasets.mjs');
      runWorkspace(options.projectRoot, 'update-dataset-file-metadata.mjs');
    }
    const { manifest, loaded } = await deriveArtifactManifest(options.build, options.projectRoot);
    const previous = options.build.receipts.filter((receipt) => receipt.state === 'AUTHORED').at(-1)?.payload;
    // A snapshot prepared under an older Plan protocol is re-prepared even when its bytes are unchanged.
    if (previous?.verificationPlan?.protocol === VERIFICATION_PLAN_PROTOCOL && digestValue(previous.artifacts) === digestValue(manifest.artifacts)) return showAsset(buildId, root);
    await recordBuildObject(buildId, 'source-facts', input, options);
    await recordBuildObject(buildId, 'artifact-manifest', manifest, options);
    await prepareBuildReview({ buildId, sourceObjects: compiled.sourceObjects, artifacts: manifest.artifacts,
      changeImpact: input.changeImpact || ['new-dataset'], requiredLocales: input.requiredLocales || (options.build.adapter === 'income-statement' ? ['en', 'zh'] : ['en']),
      checkpointProtocol: REVIEW_CANDIDATE_PROTOCOL, dependencyScopes: manifest.scopes,
    }, { ...options, loadedData: loaded });
    return showAsset(buildId, root);
  }).then(async (result) => {
    await selectBuildPreview(root, result);
    return result;
  });
}
export async function buildObjects(buildId, kind, options) {
  const directory = path.join(options.buildRoot, buildId, 'objects', kind);
  if (!existsSync(directory)) return [];
  return Promise.all((await readdir(directory)).filter((name) => /^[a-f0-9]{64}\.json$/.test(name)).map(async (name) => {
    const reference = { kind, digest: `sha256:${name.slice(0, -5)}`, path: path.relative(options.projectRoot, path.join(directory, name)) };
    return { value: await readBuildObject(buildId, reference, options), reference };
  }));
}
// Build-bound, review-ready render evidence for the current authored snapshot
// and Plan, oldest first. Any canonical focus counts; the latest per locale is
// the review candidate.
export async function currentEvidence(current, authoredDigest = current.authoredDigest) {
  const entries = [];
  for (const locator of await filesUnder(current.workspace, [`output/compare/${current.key}`])) {
    if (!/\/(?:manifest|fidelity-run)\.json$/.test(locator)) continue;
    const manifest = await readJson(inside(current.workspace, locator));
    if (manifest.status === 'evidence-ready' && manifest.identity?.buildId === current.buildId && manifest.identity?.verificationPlanDigest === current.plan?.planDigest && (!authoredDigest || manifest.identity?.authoredDigest === authoredDigest)) entries.push({ locator, manifest });
  }
  return entries.sort((a, b) => (a.manifest.evidenceReadyAt || '').localeCompare(b.manifest.evidenceReadyAt || ''));
}
export function latestPerLocale(evidence, locales = []) {
  return locales.map((locale) => evidence.filter(({ manifest }) => manifest.identity.language === locale).at(-1)).filter(Boolean);
}
export async function showAsset(buildId, root = rootDir) {
  const options = await buildContext(buildId, root);
  const { build } = options;
  const inspection = await inspectDatasetBuild(buildId, options);
  const authored = build.receipts.filter((receipt) => receipt.state === 'AUTHORED').at(-1)?.payload;
  const packet = (await buildObjects(buildId, 'review-packet', options)).find(({ value }) => value.authoredDigest === authored?.snapshotDigest);
  const verification = (await buildObjects(buildId, 'dataset-verification', options)).find(({ value }) => value.identity.authoredDigest === authored?.snapshotDigest);
  const checkpoints = (await buildObjects(buildId, 'fidelity-checkpoint', options)).sort((a, b) => (a.value.sequence || 0) - (b.value.sequence || 0) || a.value.recordedAt.localeCompare(b.value.recordedAt));
  // Receipts reference the Plan by Build object digest; older receipts embed it.
  const plan = authored ? await readAuthoredObject(buildId, authored.verificationPlan, options) : null;
  let next = 'prepare';
  // An AUTHORED snapshot from an older Plan protocol stays readable; continue re-prepares it.
  const currentPlan = plan?.protocol === VERIFICATION_PLAN_PROTOCOL || build.state !== 'AUTHORED';
  if (authored && inspection.fresh && currentPlan) {
    if (build.state === 'AUTHORED') next = verification ? 'review' : 'verify';
    if (build.state === 'CLOSED') next = 'seal';
    if (build.state === 'BASELINE_STAGED') next = 'seal';
    if (build.state === 'SEALED') next = 'publish';
    if (build.state === 'AUTHORED' && verification && build.adapter === 'income-statement') {
      const policy = plan.checkpointProtocol;
      if (policy === CHECKPOINT_PROTOCOL) next = nextCheckpoint({ scopes: plan.dependencyScopes }, checkpoints.map(({ value }) => value)) || 'review';
      else if (policy === REVIEW_CANDIDATE_PROTOCOL) {
        const locales = plan.requiredLocales || [];
        const evidence = await currentEvidence({ workspace: options.projectRoot, key: build.key, buildId, plan }, authored.snapshotDigest);
        next = latestPerLocale(evidence, locales).length === locales.length ? 'review' : 'render';
      }
    }
  }
  const factsFile = inside(options.projectRoot, 'output/workflow/source-facts.json');
  const facts = existsSync(factsFile) ? await readJson(factsFile) : null;
  const contributionFile = inside(options.projectRoot, 'output/workflow/semantic-inputs.json');
  const authoredRecord = existsSync(contributionFile) ? (await readJson(contributionFile)).record : null;
  return { buildId, key: build.key, adapter: build.adapter, workspace: options.projectRoot, session: await readBuildSession(root, buildId), reviewUrl: `http://127.0.0.1:8000/?review=${buildId}#${build.key}`, state: inspection.effectiveState, historicalState: inspection.historicalState, fresh: inspection.fresh, staleArtifacts: inspection.staleArtifacts, next,
    source: build.sources[0], subject: facts?.subject, period: facts?.period, metrics: facts?.metrics || [], questions: facts?.questions || [], authoredRecord,
    authoredDigest: authored?.snapshotDigest, reviewToken: packet?.reference.digest, verificationReference: verification?.reference,
    checkpoints: checkpoints.map(({ reference }) => reference), plan,
    timing: (await buildObjects(buildId, 'operation-report', options)).map(({ value }) => value),
  };
}
// Runs every automatic step in one call and stops where a person is needed:
// the human review of the rendered candidate (or a legacy stage freeze).
export async function continueAsset(buildId, root = rootDir) {
  for (let step = 0; step < 8; step++) {
    const current = await showAsset(buildId, root);
    if (current.next === 'prepare') { await prepareAsset(buildId, null, root); continue; }
    if (current.next === 'verify') { await operation(buildId, 'verify', root, (options) => recordDatasetVerification(buildId, options)); continue; }
    if (current.next === 'render') {
      await operation(buildId, 'render', root, async (options) => runWorkspace(options.projectRoot, 'record-fidelity.mjs', [current.key, '--build', buildId, '--focus', 'review-candidate', ...current.plan.requiredLocales.flatMap((locale) => ['--language', locale])]));
      continue;
    }
    if (['structure', 'text', 'polish-l10n'].includes(current.next)) {
      return operation(buildId, current.next, root, async (options) => {
        const run = runWorkspace(options.projectRoot, 'record-fidelity.mjs', [current.key, '--build', buildId, '--focus', `${current.next}-sweep`, ...current.plan.requiredLocales.flatMap((locale) => ['--language', locale])]);
        return { ...await showAsset(buildId, root), actionRequired: 'Legacy checkpoint Build: inspect the rendered evidence, then record a stage checkpoint', output: run.stdout };
      });
    }
    if (current.next === 'seal') return sealAsset(buildId, root);
    if (current.next === 'review') {
      const storage = await storeAssetWorkspace(buildId, 'compact', root);
      return { ...current, storage, actionRequired: `Waiting for human review: ${current.reviewUrl}` };
    }
    return current;
  }
  throw new Error('continue did not converge; inspect record:workflow show');
}
export async function checkpointAsset(buildId, input, root = rootDir) {
  return operation(buildId, 'checkpoint', root, async (options) => {
    const current = await showAsset(buildId, root);
    if (current.plan?.checkpointProtocol !== CHECKPOINT_PROTOCOL) throw new Error('This Build uses review-candidate/v1 without stage checkpoints; report problems with record:workflow feedback');
    await recordCheckpoint(options.build, current.plan, { ...input, prior: current.checkpoints }, options);
    return showAsset(buildId, root);
  });
}
// The mutation path loads only review inputs. showAsset also projects facts,
// timing and status for people and is deliberately outside this hot path.
async function reviewState(options, root) {
  const { build, projectRoot: workspace } = options;
  const authored = build.receipts.filter((receipt) => receipt.state === 'AUTHORED').at(-1)?.payload;
  const matches = ({ value }) => (value.identity || value).authoredDigest === authored?.snapshotDigest
    && (value.identity || value).verificationPlanDigest === authored?.verificationPlanDigest;
  const packet = (await buildObjects(build.buildId, 'review-packet', options)).find(matches);
  const verification = (await buildObjects(build.buildId, 'dataset-verification', options)).find(matches);
  return { buildId: build.buildId, key: build.key, adapter: build.adapter, workspace,
    session: await readBuildSession(root, build.buildId), authoredDigest: authored?.snapshotDigest,
    reviewToken: packet?.reference.digest, verificationReference: verification?.reference,
    plan: authored ? await readAuthoredObject(build.buildId, authored.verificationPlan, options) : null,
    checkpoints: (await buildObjects(build.buildId, 'fidelity-checkpoint', options)).map(({ reference }) => reference),
  };
}
async function reviewedPreview(current, review, options, root, verifiedPreviews) {
  if (!current.session && !review.previewId) return;
  if (!/^[a-f0-9-]+$/.test(review.previewId || '')) throw new Error('Review must cite the displayed production previewId from the workbench');
  const { directory, preview, member } = await readReviewPreview(root, current.buildId, review.previewId);
  // The displayed immutable preview pins its own tools. Later root tool/doc
  // changes do not change what the person reviewed in this Build workspace.
  if (member.reviewToken !== current.reviewToken || member.sourceDigest !== (await fileManifest(options.projectRoot)).digest) throw new Error('Displayed production preview is stale; prepare and inspect a fresh candidate');
  const cacheKey = `${directory}:${digestValue(preview)}`;
  if (!verifiedPreviews.has(cacheKey)) verifiedPreviews.set(cacheKey, verifySiteIdentity(path.join(directory, 'site'), preview));
  await verifiedPreviews.get(cacheKey);
  await recordBuildObject(current.buildId, 'production-preview-review', { previewId: review.previewId, previewSource: preview.source, reviewToken: current.reviewToken, contentDigest: preview.contentDigest, version: preview.version, sourceDigest: member.sourceDigest }, options);
}
async function applyAcceptance(buildId, input, root, { seal = false, verifiedPreviews = new Map(), ...credentials } = {}) {
  return operation(buildId, seal ? 'accept' : 'review', root, async (options) => {
    const current = await reviewState(options, root);
    const { expandHumanReview } = await import('./workflow-review.mjs');
    const review = await expandHumanReview(current, input);
    if (!current.reviewToken || review.reviewToken !== current.reviewToken) throw new Error('Review must cite the exact processing-sheet token; refresh the sheet before reviewing changed data');
    await reviewedPreview(current, review, options, root, verifiedPreviews);
    if (seal && options.build.state === 'SEALED') {
      const closure = options.build.receipts.filter((receipt) => receipt.state === 'CLOSED').at(-1).payload;
      const result = await readBuildObject(buildId, closure.reviewObjects.fidelityResult, options);
      const sameAcceptance = Object.entries(review.acceptance).every(([key, value]) => result.acceptance?.[key] === value);
      if (!sameAcceptance || !(await inspectDatasetBuild(buildId, options)).fresh) throw new Error('Sealed Build does not match this acceptance or its inputs changed');
      return { buildId, key: current.key, state: 'SEALED', next: 'publish', alreadySealed: true };
    }
    const result = await finishReviewedBuild({ ...review, buildId, reviewToken: current.reviewToken, verificationReference: current.verificationReference, checkpoints: current.checkpoints }, { ...options, seal });
    return seal ? { buildId, key: current.key, state: result.build.state, next: 'publish', sealDigest: result.build.receipts.at(-1).payload.sealDigest } : showAsset(buildId, root);
  }, credentials);
}
export async function reviewAsset(buildId, input, root = rootDir) {
  return applyAcceptance(buildId, input, root);
}
export async function acceptAsset(buildId, input, root = rootDir, options = {}) {
  return applyAcceptance(buildId, input, root, { ...options, seal: true });
}
// Each Build commits independently; retries preserve successful seals. The
// session identity is common, generations are member-specific and never put
// into process.env while concurrent operations run.
export async function acceptAssets(input, root = rootDir, { concurrency = 2, ...credentials } = {}) {
  const { builds, ...review } = input || {};
  if (!Array.isArray(builds) || !builds.length) throw new Error('accept requires a nonempty builds list');
  if (!Number.isInteger(concurrency) || concurrency < 1 || concurrency > 8) throw new Error('accept concurrency must be between 1 and 8');
  const seen = new Set();
  for (const entry of builds) {
    if (!entry || !/^build-[a-z0-9-]+$/i.test(entry.buildId || '') || !entry.reviewToken || seen.has(entry.buildId)) throw new Error('Each acceptance needs a unique buildId and exact reviewToken');
    if (Object.keys(entry).some((key) => !['buildId', 'reviewToken', 'generation', 'previewId'].includes(key))) throw new Error('Acceptance member supports buildId, reviewToken, generation and previewId only');
    seen.add(entry.buildId);
  }
  const started = Date.now(), results = new Array(builds.length), verifiedPreviews = new Map();
  let cursor = 0;
  await Promise.all(Array.from({ length: Math.min(concurrency, builds.length) }, async () => {
    while (cursor < builds.length) {
      const index = cursor++, { buildId, generation, ...binding } = builds[index];
      try { results[index] = await acceptAsset(buildId, { ...review, ...binding }, root, { ...credentials, generation: generation ?? credentials.generation, verifiedPreviews }); }
      catch (error) { results[index] = { buildId, status: 'failed', code: error.code || 'ACCEPT_FAILED', error: error.message }; }
    }
  }));
  return { status: results.some((item) => item.status === 'failed') ? 'partial-failure' : 'sealed', elapsedMs: Date.now() - started, results };
}
export async function sealAsset(buildId, root = rootDir, { freshRender = false, freshChecks = false } = {}) {
  return operation(buildId, 'seal', root, async (options) => {
    const current = await showAsset(buildId, root);
    if (!current.fresh) throw new Error('Inputs changed; prepare and review the changed result first');
    if (current.state === 'CLOSED') {
      let metrics;
      if (options.build.adapter === 'income-statement') {
        const closure = options.build.receipts.filter((receipt) => receipt.state === 'CLOSED').at(-1).payload;
        const result = await readBuildObject(buildId, closure.reviewObjects.fidelityResult, options);
        // Baseline values come from the exact English evidence the reviewer accepted.
        if (result.protocol === FIDELITY_RESULT_PROTOCOL) metrics = result.evidence.find((item) => item.locale === 'en')?.metrics;
        else {
          // fidelity-result/v2 closures: find the archived run whose digest was accepted.
          const baseline = result.automaticEvidence.locales.find((item) => item.locale === 'en');
          for (const { locator } of (await currentEvidence(current)).filter(({ manifest }) => manifest.identity.language === 'en').reverse()) {
            const entry = await evidenceFromManifest(locator, { buildId, key: current.key, authoredDigest: current.authoredDigest, verificationPlanDigest: current.plan.planDigest, projectRoot: options.projectRoot });
            if (baseline && entry.digest === baseline.digest) { metrics = entry.metrics; break; }
          }
        }
        if (!Number.isFinite(metrics?.similarity)) throw new Error('Accepted English baseline measurements missing');
      }
      await stageReviewedBaseline({ buildId, metrics }, options);
    }
    await sealReviewedBuild({ buildId }, { ...options, freshRender, freshChecks });
    return showAsset(buildId, root);
  });
}

export async function storeAssetWorkspace(buildId, action, root = rootDir) {
  const initial = await buildContext(buildId, root);
  return withFileLock(path.join(initial.buildRoot, buildId, '.workflow-operation.lock'), async () => {
    await assertBuildSession(root, buildId);
    const context = await buildContext(buildId, root);
    if (!context.build.authoringRoot) throw new Error('Storage requires an isolated Build');
    // Frozen old toolchains cannot read sparse trees. Refresh explicitly first.
    if (!existsSync(path.join(context.projectRoot, 'scripts/lib/workspace-storage.mjs'))) {
      if (action === 'compact') return { mode: 'legacy', reason: 'refresh required before storage migration' };
      throw new Error('Refresh this legacy workspace before using shared storage');
    }
    return { buildId, workspace: context.projectRoot, ...await (action === 'materialize' ? materializeWorkspace(context.projectRoot) : compactWorkspace(context.projectRoot, { assetsOnly: action === 'share-assets' })) };
  });
}
