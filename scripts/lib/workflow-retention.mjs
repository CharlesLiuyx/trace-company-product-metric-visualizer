// Housekeeping run at the end of the commands that finish work (publish
// commit, Source archive, intake recovery, Git push). It removes only what no
// later lifecycle step reads; the small JSON identity records stay for Git
// hand-off, history and the completed-work cleanup summary. Never evidence.
import path from 'node:path';
import { existsSync } from 'node:fs';
import { readdir, rm } from 'node:fs/promises';
import { atomicJson, readJson, withFileLock } from './workflow-files.mjs';
import { retireBuildPreview } from './workflow-local-view.mjs';

export const CLEANED_MARKER = 'cleaned.json';
const HEX = /^[a-f0-9]{64}$/;
const BUILD = /^build-[a-z0-9-]+$/;
const json = (file) => readJson(file).catch(() => null);
const names = (directory) => readdir(directory).catch(() => []);

async function publishedBuildIds(root) {
  const publications = path.join(root, 'output/publications');
  const digests = new Set();
  for (const name of await names(path.join(publications, 'receipts'))) {
    const receipt = name.endsWith('.json') ? await json(path.join(publications, 'receipts', name)) : null;
    if (receipt?.planDigest) digests.add(receipt.planDigest);
  }
  const pointer = await json(path.join(publications, 'current.json'));
  if (pointer?.planDigest) digests.add(pointer.planDigest);
  const ids = new Set();
  for (const digest of digests) {
    const plan = HEX.test(digest.slice(7)) ? await json(path.join(publications, 'plans', digest.slice(7), 'plan.json')) : null;
    for (const build of plan?.builds || []) ids.add(build.buildId);
  }
  return ids;
}

async function relocatedSources(root) {
  const folder = path.join(root, 'output/source-relocations'), moved = new Set();
  for (const name of await names(folder)) {
    if (!name.endsWith('.json') || name.endsWith('.pending.json')) continue;
    const receipt = await json(path.join(folder, name));
    if (receipt?.signal?.confirmed !== true) continue;
    for (const item of receipt.moved || []) moved.add(`${item.path}\0${item.digest}`);
  }
  return moved;
}

// A Build is finished once it was published and the operator's completion
// signal archived every Source, or once an intake successor took it over.
// Neither state ever authorizes another write to its workspace.
export async function finishedBuilds(root) {
  const folder = path.join(root, 'output/builds');
  const [published, relocated] = await Promise.all([publishedBuildIds(root), relocatedSources(root)]);
  const result = [];
  for (const buildId of await names(folder)) {
    const directory = path.join(folder, buildId);
    if (!BUILD.test(buildId) || existsSync(path.join(directory, CLEANED_MARKER))) continue;
    if (!existsSync(path.join(directory, 'workspace')) && !existsSync(path.join(directory, 'objects'))) continue;
    if (existsSync(path.join(directory, 'successor.json'))) { result.push({ buildId, reason: 'intake-successor' }); continue; }
    const manifest = await json(path.join(directory, 'manifest.json'));
    const sources = manifest?.sources || [];
    if (published.has(buildId) && sources.length && sources.every((source) => relocated.has(`${source.processingUri}\0${source.digest}`))) {
      result.push({ buildId, reason: 'published-and-archived' });
    }
  }
  return result;
}

// C1: drop the workspace, Build objects and previews; keep manifest.json,
// session.json and other identity records. A Build busy in another operation
// is skipped and retried by the next trigger.
export async function cleanupFinishedBuilds(root) {
  const removed = [], skipped = [];
  for (const { buildId, reason } of await finishedBuilds(root)) {
    const directory = path.join(root, 'output/builds', buildId);
    try {
      await withFileLock(path.join(directory, '.workflow-operation.lock'), async () => {
        // The marker lands first so a reader never mistakes a half-removed
        // workspace for a stale but resumable draft.
        await atomicJson(path.join(directory, CLEANED_MARKER), { buildId, reason, cleanedAt: new Date().toISOString() });
        for (const name of ['workspace', 'objects']) await rm(path.join(directory, name), { recursive: true, force: true });
      }, { timeoutMs: 2000 });
      await rm(path.join(root, 'output/workbench/previews', buildId), { recursive: true, force: true });
      await retireBuildPreview(root, buildId);
      removed.push({ buildId, reason });
    } catch (error) { skipped.push({ buildId, reason: error.message }); }
  }
  return { removed, skipped };
}

// C3, called with the publication lock held: keep the current tree, the
// bases and results of publications not yet pushed (Git hand-off merges
// against them), and every base an unfinished Build still references.
export async function sweepSnapshots(root) {
  const publications = path.join(root, 'output/publications');
  const pointer = await json(path.join(publications, 'current.json'));
  // Without a publication, a starting Build may still be freezing its base.
  if (!pointer?.publishedDigest) return { removed: [], skipped: 'no publication yet' };
  const keep = new Set([pointer.publishedDigest.slice(7)]);
  const pushed = new Set();
  for (const id of await names(path.join(root, 'output/git-transports'))) {
    const receipt = await json(path.join(root, 'output/git-transports', id, 'receipt.json'));
    if (receipt?.state === 'PUSHED' && receipt.publishedDigest) pushed.add(receipt.publishedDigest);
  }
  const receipts = new Map([[pointer.publishedDigest, pointer]]);
  for (const name of await names(path.join(publications, 'receipts'))) {
    const receipt = name.endsWith('.json') ? await json(path.join(publications, 'receipts', name)) : null;
    if (receipt?.publishedDigest) receipts.set(receipt.publishedDigest, receipt);
  }
  for (let next = pointer.publishedDigest, seen = new Set(); next && !seen.has(next) && !pushed.has(next);) {
    seen.add(next);
    const receipt = receipts.get(next);
    if (!receipt) break;
    keep.add(next.slice(7));
    const plan = await json(path.join(publications, 'plans', String(receipt.planDigest).slice(7), 'plan.json'));
    if (plan?.baseCanonicalDigest) keep.add(plan.baseCanonicalDigest.slice(7));
    next = receipt.previousDigest;
  }
  for (const buildId of await names(path.join(root, 'output/builds'))) {
    if (!BUILD.test(buildId)) continue;
    const base = await json(path.join(root, 'output/builds', buildId, 'workspace/output/workflow/base.json'));
    if (base?.root) keep.add(path.basename(base.root));
  }
  const removed = [];
  for (const folder of ['output/publications/trees', 'output/workflow-bases']) {
    for (const name of await names(path.join(root, folder))) {
      if (!HEX.test(name) || keep.has(name)) continue;
      await rm(path.join(root, folder, name), { recursive: true, force: true });
      removed.push(`${folder}/${name}`);
    }
  }
  return { removed };
}

export async function runRetention(root) {
  const builds = await cleanupFinishedBuilds(root);
  const snapshots = await withFileLock(path.join(root, 'output/publications/.publish.lock'), () => sweepSnapshots(root), { timeoutMs: 2000 })
    .catch((error) => ({ removed: [], skipped: error.message }));
  return { builds, snapshots };
}
