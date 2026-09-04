import path from 'node:path';
import { existsSync } from 'node:fs';
import { mkdir, readFile, writeFile, readdir, symlink, copyFile } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { rootDir } from './project.mjs';
import { recordIntake } from '../record-intake.mjs';
import { classifySourceSignals } from './source-coverage.mjs';
import { createObjectInventory } from './object-inventory.mjs';
import { compileMetricFacts, SOURCE_FACTS_PROTOCOL } from './metric-source.mjs';
import { updateMetricCatalog } from './metric-catalog.mjs';
import { recordDatasetBuildCommand, readDatasetBuild, recordBuildObject, inspectDatasetBuild, readBuildObject } from './dataset-build-store.mjs';
import { prepareBuildReview, finishReviewedBuild, stageReviewedBaseline, sealReviewedBuild } from './dataset-build-closeout.mjs';
import { recordDatasetVerification } from './dataset-verification.mjs';
import { deriveArtifactManifest, CHECKPOINT_PROTOCOL, nextCheckpoint } from './workflow-dependencies.mjs';
import { recordCheckpoint } from './workflow-checkpoints.mjs';
import { CANONICAL_ROOTS, TOOL_ROOTS, fileManifest, copyFiles, filesUnder, inside, atomicJson, readJson, withFileLock } from './workflow-files.mjs';
import { digestValue } from './dataset-build.mjs';

export function workflowOptions(root = rootDir) { return { projectRoot: root, buildRoot: path.join(root, 'output/builds') }; }
export async function buildContext(buildId, root = rootDir) {
  const options = workflowOptions(root);
  const build = await readDatasetBuild(buildId, options);
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
async function operation(buildId, name, root, work) {
  const started = Date.now();
  const initial = await buildContext(buildId, root);
  return withFileLock(path.join(initial.buildRoot, initial.build.buildId, '.workflow-operation.lock'), async () => {
    const options = await buildContext(buildId, root);
    try {
      const result = await work(options);
      await recordBuildObject(buildId, 'operation-report', { operation: name, status: 'completed', startedAt: new Date(started).toISOString(), elapsedMs: Date.now() - started }, options);
      return result;
    } catch (error) {
      await recordBuildObject(buildId, 'operation-report', { operation: name, status: 'failed', startedAt: new Date(started).toISOString(), elapsedMs: Date.now() - started, error: error.message }, options).catch(() => {});
      throw error;
    }
  });
}
export async function startAsset(input, root = rootDir) {
  const facts = input.facts;
  if (facts?.protocol !== SOURCE_FACTS_PROTOCOL) throw new Error(`Supply ${SOURCE_FACTS_PROTOCOL}: extracted facts, Source anchors and unresolved questions`);
  const signals = input.signals || facts.signals || ['metric-observations'];
  const { adapter } = classifySourceSignals(signals, input.adapter);
  return withFileLock(path.join(root, 'output/workflow-intake.lock'), async () => {
    const snapshot = await canonicalSnapshot(root);
    const intake = await recordIntake({ source: input.source, key: input.key, adapter, signals, availability: input.availability || 'local-only' }, { ...workflowOptions(root), canonicalDataDigest: async () => snapshot.digest });
    let build = intake.build;
    const authoringRoot = `output/builds/${build.buildId}/workspace`;
    const workspace = inside(root, authoringRoot);
    if (build.authoringRoot) return { buildId: build.buildId, workspace, next: 'show' };
    await mkdir(workspace, { recursive: true });
    await copyFiles(snapshot.root, workspace, snapshot.entries.map((entry) => entry.path));
    await copyFiles(root, workspace, await filesUnder(root, TOOL_ROOTS));
    await copyFiles(root, workspace, [build.sources[0].processingUri]);
    for (const directory of ['node_modules', '.git']) {
      if (existsSync(path.join(root, directory)) && !existsSync(path.join(workspace, directory))) await symlink(path.join(root, directory), path.join(workspace, directory), 'dir');
    }
    // The workspace shares the original Build ledger; there is one authority.
    await mkdir(path.join(workspace, 'output'), { recursive: true });
    await symlink(path.join(root, 'output/builds'), path.join(workspace, 'output/builds'), 'dir');
    await atomicJson(path.join(workspace, 'output/workflow/base.json'), snapshot);
    await atomicJson(path.join(workspace, 'output/workflow/source-facts.json'), facts);
    build = await recordDatasetBuildCommand(build.buildId, { type: 'isolate-workspace', expectedRevision: build.revision, authoringRoot }, workflowOptions(root));
    return { buildId: build.buildId, workspace, adapter, next: 'prepare' };
  });
}
async function authoredFacts(build, root, input) {
  if (input?.protocol !== SOURCE_FACTS_PROTOCOL) throw new Error(`Expected ${SOURCE_FACTS_PROTOCOL}`);
  if (input.questions?.length) throw new Error(`Please resolve these Source questions: ${input.questions.join('; ')}`);
  if (build.adapter !== 'metric-observation') {
    if (!input.objects?.length) throw new Error('Sankey/revenue facts need complete Source objects with mappings and measurements');
    const inventory = createObjectInventory({ datasetKey: build.key, objects: input.objects.map((item) => item.object) });
    return { inventory, coverageInput: { scanPasses: ['geometry', 'residual', 'semantic-value'], items: input.objects.map((item) => ({ ...item.source, inventoryObjectIds: [item.object.id] })) } };
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
  return compiled;
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
    if (previous && digestValue(previous.artifacts) === digestValue(manifest.artifacts)) return showAsset(buildId, root);
    await recordBuildObject(buildId, 'source-facts', input, options);
    await recordBuildObject(buildId, 'artifact-manifest', manifest, options);
    const prepared = await prepareBuildReview({ buildId, inventory: compiled.inventory, sourceCoverage: compiled.coverageInput, artifacts: manifest.artifacts,
      changeImpact: input.changeImpact || ['new-dataset'], requiredLocales: input.requiredLocales || (options.build.adapter === 'income-statement' ? ['en', 'zh'] : ['en']),
      checkpointProtocol: CHECKPOINT_PROTOCOL, dependencyScopes: manifest.scopes,
    }, { ...options, loadedData: loaded });
    const { projectFeedbackPatterns } = await import('./workflow-feedback.mjs');
    const patterns = await projectFeedbackPatterns(options.projectRoot);
    const ruleIds = new Set(prepared.build.receipts.at(-1).payload.verificationPlan.requiredChecks.flatMap((check) => check.ruleIds));
    await recordBuildObject(buildId, 'feedback-pattern-hits', { protocol: 'feedback-pattern-hits/v1', indexDigest: digestValue(patterns), hits: patterns.patterns.filter((pattern) => pattern.ruleIds.some((id) => ruleIds.has(id))) }, options);
    const { projectAssetCatalog } = await import('./workflow-assets.mjs');
    const catalog = await projectAssetCatalog(options.projectRoot);
    await recordBuildObject(buildId, 'asset-plan', { protocol: 'asset-plan/v1', inventoryDigest: compiled.inventory.inventoryDigest, requiredObjects: compiled.inventory.objects.filter((item) => item.mapping.some((mapping) => mapping.role === 'asset')), candidates: catalog.entries.filter((item) => item.consumers.includes(options.build.key)) }, options);
    return showAsset(buildId, root);
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
export async function showAsset(buildId, root = rootDir) {
  const options = await buildContext(buildId, root);
  const { build } = options;
  const inspection = await inspectDatasetBuild(buildId, options);
  const authored = build.receipts.filter((receipt) => receipt.state === 'AUTHORED').at(-1)?.payload;
  const packet = (await buildObjects(buildId, 'review-packet', options)).find(({ value }) => value.authoredDigest === authored?.snapshotDigest);
  const verification = (await buildObjects(buildId, 'dataset-verification', options)).find(({ value }) => value.identity.authoredDigest === authored?.snapshotDigest);
  const checkpoints = (await buildObjects(buildId, 'fidelity-checkpoint', options)).sort((a, b) => (a.value.sequence || 0) - (b.value.sequence || 0) || a.value.recordedAt.localeCompare(b.value.recordedAt));
  let next = 'prepare';
  if (authored && inspection.fresh) {
    if (build.state === 'AUTHORED') next = verification ? 'review' : 'verify';
    if (build.state === 'CLOSED') next = 'seal';
    if (build.state === 'BASELINE_STAGED') next = 'seal';
    if (build.state === 'SEALED') next = 'publish';
    if (build.state === 'AUTHORED' && verification && build.adapter === 'income-statement' && authored.verificationPlan.checkpointProtocol) next = nextCheckpoint({ scopes: authored.verificationPlan.dependencyScopes }, checkpoints.map(({ value }) => value)) || 'review';
  }
  const factsFile = inside(options.projectRoot, 'output/workflow/source-facts.json');
  const facts = existsSync(factsFile) ? await readJson(factsFile) : null;
  const contributionFile = inside(options.projectRoot, 'output/workflow/semantic-inputs.json');
  const authoredRecord = existsSync(contributionFile) ? (await readJson(contributionFile)).record : null;
  return { buildId, key: build.key, adapter: build.adapter, workspace: options.projectRoot, state: inspection.effectiveState, historicalState: inspection.historicalState, fresh: inspection.fresh, staleArtifacts: inspection.staleArtifacts, next,
    source: build.sources[0], subject: facts?.subject, period: facts?.period, metrics: facts?.metrics || [], questions: facts?.questions || [], authoredRecord,
    reviewToken: packet?.reference.digest, verificationReference: verification?.reference,
    checkpoints: checkpoints.map(({ reference }) => reference), plan: authored?.verificationPlan,
    timing: (await buildObjects(buildId, 'operation-report', options)).map(({ value }) => value),
  };
}
export async function continueAsset(buildId, root = rootDir) {
  const current = await showAsset(buildId, root);
  if (current.next === 'prepare') { await prepareAsset(buildId, null, root); return continueAsset(buildId, root); }
  if (current.next === 'verify') {
    await operation(buildId, 'verify', root, (options) => recordDatasetVerification(buildId, options));
    return showAsset(buildId, root);
  }
  if (['structure', 'text', 'polish-l10n'].includes(current.next)) {
    return operation(buildId, current.next, root, async (options) => {
      const run = runWorkspace(options.projectRoot, 'record-fidelity.mjs', [current.key, '--build', buildId, '--focus', `${current.next}-sweep`, ...current.plan.requiredLocales.flatMap((locale) => ['--language', locale])]);
      return { ...await showAsset(buildId, root), actionRequired: 'Inspect the rendered evidence, then record a stage checkpoint', output: run.stdout };
    });
  }
  if (current.next === 'seal') return sealAsset(buildId, root);
  return current;
}
export async function checkpointAsset(buildId, input, root = rootDir) {
  return operation(buildId, 'checkpoint', root, async (options) => {
    const current = await showAsset(buildId, root);
    await recordCheckpoint(options.build, current.plan, { ...input, prior: current.checkpoints }, options);
    return showAsset(buildId, root);
  });
}
export async function reviewAsset(buildId, review, root = rootDir) {
  return operation(buildId, 'review', root, async (options) => {
    const current = await showAsset(buildId, root);
    if (review.reviewToken !== current.reviewToken) throw new Error('Review must cite the exact processing-sheet token; refresh the sheet before reviewing changed data');
    await finishReviewedBuild({ ...review, buildId, reviewToken: current.reviewToken, verificationReference: current.verificationReference, checkpoints: current.checkpoints }, options);
    return showAsset(buildId, root);
  });
}
export async function sealAsset(buildId, root = rootDir) {
  return operation(buildId, 'seal', root, async (options) => {
    const current = await showAsset(buildId, root);
    if (!current.fresh) throw new Error('Inputs changed; prepare and review the changed result first');
    if (current.state === 'CLOSED') {
      let metrics;
      if (options.build.adapter === 'income-statement') {
        const closure = options.build.receipts.filter((receipt) => receipt.state === 'CLOSED').at(-1).payload;
        const result = await readBuildObject(buildId, closure.reviewObjects.fidelityResult, options);
        const baseline = result.automaticEvidence.locales.find((item) => item.locale === 'en');
        // Baseline values must come from the actual accepted English candidate.
        const checkpoints = await Promise.all(current.checkpoints.map((ref) => readBuildObject(buildId, ref, options)));
        const polish = checkpoints.filter((item) => item.stage === 'polish-l10n' && item.status === 'frozen').at(-1);
        for (const entry of polish?.evidence || []) {
          const evidence = await readJson(inside(options.projectRoot, entry.locator));
          if (evidence.identity.language !== 'en') continue;
          const measured = await readJson(inside(options.projectRoot, evidence.artifacts.metrics));
          metrics = { similarity: measured.full?.similarity ?? measured.comparison?.full?.similarity, mae: measured.full?.mae ?? measured.comparison?.full?.mae, width: measured.full?.width, height: measured.full?.height };
        }
        if (!baseline || !Number.isFinite(metrics?.similarity)) throw new Error('Accepted English baseline measurements missing');
      }
      await stageReviewedBaseline({ buildId, metrics }, options);
    }
    await sealReviewedBuild({ buildId }, options);
    return showAsset(buildId, root);
  });
}
