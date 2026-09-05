import { selectPublishedView } from './workflow-local-view.mjs';
import path from 'node:path';
import { mkdir, readFile, writeFile, rename, rm, symlink } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { randomUUID } from 'node:crypto';
import { rootDir } from './project.mjs';
import { planPublicationBatch, digestValue } from './dataset-build.mjs';
import { inspectDatasetBuild } from './dataset-build-store.mjs';
import { buildContext, canonicalSnapshot, runWorkspace } from './asset-workflow.mjs';
import { fileManifest, filesUnder, TOOL_ROOTS, copyFiles, syncTree, inside, atomicJson, readJson, withFileLock, bytesDigest } from './workflow-files.mjs';
import { updateMetricCatalog } from './metric-catalog.mjs';
import { updateAssetCatalog } from './workflow-assets.mjs';

export const PUBLICATION_PROTOCOL = 'dataset-publication/v2';
const GENERATED = new Set(['index.html', 'data/dataset-manifest.js', 'data/metric-observations.js', 'data/dataset-file-metadata.js', 'data/render-baselines.json', 'data/assets/catalog.json']);
const planDirectory = (root, digest) => {
  if (!/^sha256:[a-f0-9]{64}$/.test(digest || '')) throw new Error('Invalid publication digest');
  return inside(root, `output/publications/plans/${digest.slice(7)}`);
};
async function prepareTools(root, candidate) {
  await copyFiles(root, candidate, await filesUnder(root, TOOL_ROOTS));
  for (const directory of ['node_modules', '.git']) if (existsSync(path.join(root, directory))) await symlink(path.join(root, directory), path.join(candidate, directory), 'dir');
}
export async function planAssetPublication(buildIds, root = rootDir, options = {}) {
  const snapshot = await canonicalSnapshot(root);
  const contexts = await Promise.all(buildIds.map((id) => buildContext(id, root)));
  for (const context of contexts) {
    if ((await fileManifest(context.projectRoot, ['scripts', 'package.json', 'pnpm-lock.yaml'])).digest !== (await fileManifest(root, ['scripts', 'package.json', 'pnpm-lock.yaml'])).digest) throw new Error('Workflow tools changed after intake; refresh the workspace and reverify under the current rules');
    if (!context.build.authoringRoot) throw new Error('Publication requires an isolated Build; legacy direct authoring must be migrated explicitly');
    const inspection = await inspectDatasetBuild(context.build.buildId, context);
    if (!inspection.fresh || inspection.effectiveState !== 'SEALED' || context.build.review?.status !== 'accepted') throw new Error(`Build is not fresh, sealed and reviewed: ${context.build.buildId}`);
  }
  const preliminary = planPublicationBatch(contexts.map(({ build }) => build), snapshot.digest);
  if (preliminary.state === 'CONFLICTED') throw Object.assign(new Error('Canonical base changed; replan, review affected changes and reseal'), { code: 'PUBLICATION_CONFLICT', details: preliminary });
  const owned = new Map();
  const baseEntries = new Map(snapshot.entries.map((entry) => [entry.path, entry.digest]));
  const contributions = [];
  for (const context of contexts) {
    const draft = await fileManifest(context.projectRoot);
    const draftEntries = new Map(draft.entries.map((entry) => [entry.path, entry.digest]));
    const paths = new Set([...baseEntries.keys(), ...draftEntries.keys()]);
    for (const file of paths) {
      if (baseEntries.get(file) === draftEntries.get(file) || GENERATED.has(file)) continue;
      if (!file.startsWith('data/') && !/^input\/icon-crop-specs\/[^/]+\.json$/.test(file)) throw new Error(`Dataset publication cannot change application code: ${file}`);
      if (!draftEntries.has(file)) throw new Error(`Deletion needs an explicit migration, not intake publication: ${file}`);
      const existing = owned.get(file);
      if (existing && existing.digest !== draftEntries.get(file)) throw Object.assign(new Error(`Conflicting contributions to ${file}: ${existing.buildId}, ${context.build.buildId}`), { code: 'PUBLICATION_PATH_CONFLICT' });
      const contribution = { path: file, digest: draftEntries.get(file), buildId: context.build.buildId, baseDigest: baseEntries.get(file) || null };
      owned.set(file, contribution);
      contributions.push({ ...contribution, workspace: context.projectRoot });
    }
  }
  const temporary = inside(root, `output/publications/.planning-${randomUUID()}`);
  await mkdir(temporary, { recursive: true });
  try {
    await copyFiles(snapshot.root, temporary, snapshot.entries.map((entry) => entry.path));
    await prepareTools(root, temporary);
    for (const contribution of contributions) await copyFiles(contribution.workspace, temporary, [contribution.path]);
    const incomeBuilds = contexts.filter(({ build }) => build.adapter === 'income-statement');
    if (incomeBuilds.length) {
      const baselinePath = path.join(temporary, 'data/render-baselines.json');
      const ledger = await readJson(baselinePath);
      for (const { build } of incomeBuilds) {
        const stage = build.receipts.filter((receipt) => receipt.state === 'BASELINE_STAGED').at(-1).payload;
        const metrics = stage.metrics;
        if (stage.use !== 'future-regression-only' || !Number.isFinite(metrics?.similarity) || !Number.isFinite(metrics?.mae) || !Number.isInteger(metrics?.width) || !Number.isInteger(metrics?.height)) throw new Error(`Invalid staged baseline: ${build.key}`);
        ledger.baselines[build.key] = { similarity: metrics.similarity, mae: metrics.mae, width: metrics.width, height: metrics.height };
      }
      await atomicJson(baselinePath, ledger);
    }
    await updateMetricCatalog(temporary);
    // Each projector writes only into this private candidate. No canonical
    // path is touched before the single pointer CAS below.
    if (contexts.some(({ build }) => build.adapter !== 'metric-observation')) {
      runWorkspace(temporary, 'sync-index-datasets.mjs');
      runWorkspace(temporary, 'update-dataset-file-metadata.mjs');
    }
    await updateAssetCatalog(temporary);
    const checks = [];
    const verifier = options.verifyCandidate || (async ({ candidate, contexts: builds }) => {
      const runs = [];
      for (const { build } of builds) {
        const run = runWorkspace(candidate, build.adapter === 'metric-observation' ? 'verify-metrics.mjs' : 'verify-dataset.mjs', [build.key, ...(build.adapter === 'metric-observation' ? [] : ['--skip-render'])]);
        runs.push({ key: build.key, outputDigest: bytesDigest(run.stdout + '\0' + run.stderr) });
      }
      return runs;
    });
    checks.push(...await verifier({ candidate: temporary, contexts }));
    // Recheck all Build seals after projection and validation, closing the
    // workspace mutation window while the combined candidate was prepared.
    for (const context of contexts) if (!(await inspectDatasetBuild(context.build.buildId, context)).fresh) throw new Error('Build changed while publication was planned');
    const projected = await fileManifest(temporary);
    const value = { protocol: PUBLICATION_PROTOCOL, kind: 'publication-batch', state: 'PLANNED', baseCanonicalDigest: snapshot.digest, builds: preliminary.builds, contributions: [...owned.values()].sort((a, b) => a.path.localeCompare(b.path)), projectedTreeDigest: projected.digest, projectedEntries: projected.entries, checks };
    const plan = { ...value, planDigest: digestValue(value) };
    const destination = planDirectory(root, plan.planDigest);
    await mkdir(path.dirname(destination), { recursive: true });
    if (!existsSync(destination)) {
      await atomicJson(path.join(temporary, 'plan.json'), plan);
      await rename(temporary, destination);
    } else {
      const existing = await readJson(path.join(destination, 'plan.json'));
      if (digestValue(existing) !== digestValue(plan)) throw new Error('Publication identity collision');
    }
    return plan;
  } finally { await rm(temporary, { recursive: true, force: true }); }
}
export async function publishAssetPlan(planDigest, root = rootDir, options = {}) {
  const directory = planDirectory(root, planDigest);
  const plan = await readJson(path.join(directory, 'plan.json'));
  const { planDigest: storedDigest, ...value } = plan;
  if (storedDigest !== planDigest || digestValue(value) !== planDigest) throw new Error('Publication plan changed');
  const publicationRoot = path.join(root, 'output/publications');
  const receiptPath = path.join(publicationRoot, 'receipts', `${planDigest.slice(7)}.json`);
  return withFileLock(path.join(publicationRoot, '.publish.lock'), async () => {
    if (existsSync(receiptPath)) return readJson(receiptPath);
    const pointerPath = path.join(publicationRoot, 'current.json');
    const pointer = existsSync(pointerPath) ? await readJson(pointerPath) : null;
    if (pointer?.planDigest === planDigest) {
      // The pointer is the commit record. Recover a crash after its rename but
      // before the convenience receipt was written; never publish twice.
      const receipt = { protocol: PUBLICATION_PROTOCOL, state: 'PUBLISHED', ...pointer };
      await atomicJson(receiptPath, receipt); return receipt;
    }
    const current = await canonicalSnapshot(root);
    if (current.digest !== plan.baseCanonicalDigest) {
      const conflict = { state: 'CONFLICTED', planDigest, expected: plan.baseCanonicalDigest, actual: current.digest };
      await atomicJson(path.join(directory, 'conflict.json'), conflict);
      throw Object.assign(new Error('Canonical state changed; this plan cannot be retried or silently rebased'), { code: 'PUBLICATION_CONFLICT', details: conflict });
    }
    for (const item of plan.builds) {
      const context = await buildContext(item.buildId, root);
      const inspection = await inspectDatasetBuild(item.buildId, context);
      if (!inspection.fresh || inspection.effectiveState !== 'SEALED' || inspection.digests.seal !== item.sealDigest) throw new Error(`Build changed since plan: ${item.buildId}`);
    }
    const candidate = await fileManifest(directory);
    if (candidate.digest !== plan.projectedTreeDigest) throw new Error('Projected candidate changed since verification');
    const tree = inside(root, `output/publications/trees/${candidate.digest.slice(7)}`);
    if (!existsSync(tree)) {
      const temporary = `${tree}.${randomUUID()}.tmp`;
      await mkdir(temporary, { recursive: true });
      try {
        await copyFiles(directory, temporary, candidate.entries.map((entry) => entry.path));
        if ((await fileManifest(temporary)).digest !== candidate.digest) throw new Error('Snapshot copy changed');
        await syncTree(temporary, candidate.entries.map((entry) => entry.path));
        await options.beforeTreeCommit?.();
        await rename(temporary, tree);
        await syncTree(path.dirname(tree), []);
      } finally { await rm(temporary, { recursive: true, force: true }); }
    } else if ((await fileManifest(tree)).digest !== candidate.digest) throw new Error('Existing immutable tree changed');
    await options.beforePointerCommit?.();
    const commit = { publishedDigest: candidate.digest, planDigest, publishedAt: new Date().toISOString(), previousDigest: current.digest };
    // All readers enter a digest-qualified snapshot; the atomic pointer is
    // resolved once, before any HTML/script/asset request is made.
    await atomicJson(pointerPath, commit);
    await options.afterPointerCommit?.();
    const receipt = { protocol: PUBLICATION_PROTOCOL, state: 'PUBLISHED', ...commit };
    await atomicJson(receiptPath, receipt);
    return receipt;
  }).then(async (receipt) => {
    await selectPublishedView(root, plan);
    return receipt;
  });
}

export async function releasePublished(input, root = rootDir, options = {}) {
  if (!/^sha256:[a-f0-9]{64}$/.test(input.publishedDigest || '')) throw new Error('Release requires a published digest');
  const receipts = await filesUnder(root, ['output/publications/receipts']);
  let published = false;
  for (const file of receipts) if ((await readJson(inside(root, file))).publishedDigest === input.publishedDigest) published = true;
  const pointer = path.join(root, 'output/publications/current.json');
  if (existsSync(pointer) && (await readJson(pointer)).publishedDigest === input.publishedDigest) published = true;
  if (!published) throw new Error('Release digest has never been published');
  if (!['site', 'standalone'].includes(input.target)) throw new Error('Release target must be site or standalone');
  const attemptId = `release-${randomUUID()}`;
  const attemptDir = inside(root, `output/releases/${attemptId}`);
  const attempt = { protocol: 'release-attempt/v1', attemptId, publishedDigest: input.publishedDigest, target: input.target, state: 'PENDING', toolDigest: (await fileManifest(root, TOOL_ROOTS)).digest, retryOf: input.retryOf || null, startedAt: new Date().toISOString() };
  if (attempt.retryOf) {
    if (!/^release-[a-f0-9-]+$/.test(attempt.retryOf)) throw new Error('Invalid retry attempt id');
    const prior = await readJson(inside(root, `output/releases/${attempt.retryOf}/attempt.json`));
    if (prior.state !== 'RELEASE_FAILED' || prior.publishedDigest !== attempt.publishedDigest || prior.target !== attempt.target) throw new Error('Retry must bind a failed attempt of the same published digest and target');
  }
  await atomicJson(path.join(attemptDir, 'attempt.json'), attempt);
  try {
    const source = inside(root, `output/publications/trees/${input.publishedDigest.slice(7)}`);
    const manifest = await fileManifest(source);
    if (manifest.digest !== input.publishedDigest) throw new Error('Published snapshot changed');
    const candidate = path.join(attemptDir, 'workspace');
    await copyFiles(source, candidate, manifest.entries.map((entry) => entry.path));
    await prepareTools(root, candidate);
    if (options.runRelease) await options.runRelease({ candidate, input });
    else {
      runWorkspace(candidate, input.target === 'site' ? 'build-site.mjs' : 'build-standalone.mjs');
      runWorkspace(candidate, input.target === 'site' ? 'verify-site.mjs' : 'verify-standalone.mjs');
    }
    const artifact = input.target === 'site' ? '_site' : 'output/trace-company-product-metric-visualizer.html';
    const output = await fileManifest(candidate, [artifact]);
    if (!output.entries.length) throw new Error('Release produced no artifact');
    const completed = { ...attempt, state: 'RELEASED', completedAt: new Date().toISOString(), outputDigest: output.digest, artifact: path.join(candidate, artifact) };
    await atomicJson(path.join(attemptDir, 'attempt.json'), completed); return completed;
  } catch (error) {
    const failed = { ...attempt, state: 'RELEASE_FAILED', completedAt: new Date().toISOString(), error: error.message };
    await atomicJson(path.join(attemptDir, 'attempt.json'), failed); return failed;
  }
}
