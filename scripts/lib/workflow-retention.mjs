// Housekeeping run at the end of the commands that finish work (publish
// commit, Source archive, intake recovery, Git push). It removes only what no
// later lifecycle step reads; the small JSON identity records stay for Git
// hand-off, history and the completed-work cleanup summary. Never evidence.
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { existsSync, realpathSync } from 'node:fs';
import { lstat, readdir, readFile, rm } from 'node:fs/promises';
import { atomicJson, bytesDigest, mapLimit, readJson, treeStats, withFileLock } from './workflow-files.mjs';
import { retireBuildPreview } from './workflow-local-view.mjs';
import { buildHistoryEntry, recordHistoryBuilds } from './artifact-cleanup.mjs';
import { sweepStaleWorkbenchRecords } from './workbench-records.mjs';

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
async function pushedDigests(root) {
  const pushed = new Set();
  for (const id of await names(path.join(root, 'output/git-transports'))) {
    const receipt = await json(path.join(root, 'output/git-transports', id, 'receipt.json'));
    if (receipt?.state === 'PUSHED' && receipt.publishedDigest) pushed.add(receipt.publishedDigest);
  }
  return pushed;
}
// publishedDigest → publication receipt, the current pointer included.
async function publicationReceipts(root, pointer) {
  const publications = path.join(root, 'output/publications');
  const receipts = new Map(pointer?.publishedDigest ? [[pointer.publishedDigest, pointer]] : []);
  for (const name of await names(path.join(publications, 'receipts'))) {
    const receipt = name.endsWith('.json') ? await json(path.join(publications, 'receipts', name)) : null;
    if (receipt?.publishedDigest) receipts.set(receipt.publishedDigest, receipt);
  }
  return receipts;
}

export async function sweepSnapshots(root) {
  const publications = path.join(root, 'output/publications');
  const pointer = await json(path.join(publications, 'current.json'));
  // Without a publication, a starting Build may still be freezing its base.
  if (!pointer?.publishedDigest) return { removed: [], skipped: 'no publication yet' };
  const keep = new Set([pointer.publishedDigest.slice(7)]);
  const pushed = await pushedDigests(root);
  const receipts = await publicationReceipts(root, pointer);
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

// ---- Fixed garbage collection (docs/artifact-retention.md). Every sweep is
// safe while pnpm dev and other Sessions run: each acts only on state no
// reader can reach again, under the lock its writers use, and is skipped
// when that lock is busy. It is housekeeping, never a lifecycle transition.

// Build ids of every plan whose publication a PUSHED Git hand-off covers:
// a push of publication P covers P and its whole previousDigest chain.
async function pushedBuildIds(root) {
  const pointer = await json(path.join(root, 'output/publications/current.json'));
  const receipts = await publicationReceipts(root, pointer);
  const plans = new Set(), covered = new Set();
  for (const start of await pushedDigests(root)) {
    for (let next = start; next && !covered.has(next);) {
      covered.add(next);
      const receipt = receipts.get(next);
      if (!receipt) break;
      if (receipt.planDigest) plans.add(receipt.planDigest);
      next = receipt.previousDigest;
    }
  }
  const ids = new Set();
  for (const digest of plans) {
    const plan = HEX.test(String(digest).slice(7)) ? await json(path.join(root, 'output/publications/plans', digest.slice(7), 'plan.json')) : null;
    for (const build of plan?.builds || []) ids.add(build.buildId);
  }
  return ids;
}
// Paths tracked in HEAD under the given directories, or null when root is not
// the top of a readable Git checkout (then nothing is retired).
function headPaths(root, directories) {
  const git = (args) => spawnSync('git', args, { cwd: root, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
  const top = git(['rev-parse', '--show-toplevel']);
  if (top.status !== 0) return null;
  try { if (realpathSync(top.stdout.trim()) !== realpathSync(root)) return null; } catch { return null; }
  const listed = git(['ls-tree', '-r', '-z', '--name-only', 'HEAD', '--', ...directories]);
  return listed.status === 0 ? new Set(listed.stdout.split('\0').filter(Boolean)) : null;
}
const rawJson = (file) => readFile(file, 'utf8').then(JSON.parse).catch(() => null);
const count = (skipped, reason) => { skipped[reason] = (skipped[reason] || 0) + 1; };
const gcFailure = (error) => ({ removed: [], skipped: { [error.message]: 1 }, bytes: 0 });

// A cleaned Build whose plan was pushed and whose every Source has left
// input/processing on disk and in HEAD has no remaining reader: its summary
// moves to output/meta/history.json first, then the Build directory goes.
export async function retireFinishedBuilds(root, { dryRun = false } = {}) {
  const folder = path.join(root, 'output/builds'), skipped = {}, candidates = [];
  const history = new Set(((await rawJson(path.join(root, 'output/meta/history.json')))?.builds || []).map((build) => build.buildId));
  const pushed = await pushedBuildIds(root);
  const pending = [];
  for (const buildId of await names(folder)) {
    const directory = path.join(folder, buildId);
    if (!BUILD.test(buildId) || !existsSync(path.join(directory, CLEANED_MARKER))) continue;
    const manifest = await rawJson(path.join(directory, 'manifest.json'));
    // An interrupted retirement already wrote the summary; finish removing it.
    if (!manifest && history.has(buildId)) { candidates.push({ buildId, directory, sources: [] }); continue; }
    if (!manifest?.sources?.length) { count(skipped, 'manifest unreadable'); continue; }
    if (!pushed.has(buildId)) { count(skipped, 'publication not pushed'); continue; }
    pending.push({ buildId, directory, sources: manifest.sources });
  }
  const directories = [...new Set(pending.flatMap(({ sources }) => sources.map((source) => path.posix.dirname(String(source.processingUri || '.')))))];
  const head = pending.length ? headPaths(root, directories) : new Set();
  for (const build of pending) {
    if (!head) { count(skipped, 'Git HEAD unavailable'); continue; }
    const archived = build.sources.every(({ processingUri }) => typeof processingUri === 'string' && processingUri
      && !existsSync(path.join(root, processingUri)) && !head.has(processingUri));
    if (archived) candidates.push(build); else count(skipped, 'Source archive not committed');
  }
  const removed = [];
  let bytes = 0;
  const measure = async ({ buildId, sources }) => {
    let size = (await treeStats(path.join(folder, buildId))).bytes;
    size += (await treeStats(path.join(root, 'output/local-view/builds', `${buildId}.json`))).bytes;
    for (const claim of await redundantClaims(root, buildId, sources)) size += (await treeStats(claim)).bytes;
    return size;
  };
  if (dryRun) {
    for (const build of candidates) { const size = await measure(build); removed.push(build.buildId); bytes += size; }
    return { dryRun, removed, skipped, bytes };
  }
  const summaries = [];
  for (const build of candidates) {
    const summary = await buildHistoryEntry(path.join(build.directory, 'manifest.json'), build.buildId).catch(() => null);
    if (summary) summaries.push(summary);
    else if (!history.has(build.buildId)) build.unsummarized = true;
  }
  // Summary first: a crash after this point leaves only a removable directory.
  if (summaries.length) await recordHistoryBuilds(root, summaries);
  for (const build of candidates) {
    if (build.unsummarized) { count(skipped, 'summary unavailable'); continue; }
    try {
      const size = await measure(build);
      const claims = await redundantClaims(root, build.buildId, build.sources);
      // The manifest goes first and cleaned.json last, so an interrupted
      // removal is still recognized and finished by the next pass.
      const lock = '.workflow-operation.lock';
      await withFileLock(path.join(build.directory, lock), async () => {
        await rm(path.join(build.directory, 'manifest.json'), { force: true });
        for (const name of await names(build.directory)) {
          if (![CLEANED_MARKER, lock].includes(name)) await rm(path.join(build.directory, name), { recursive: true, force: true });
        }
      }, { timeoutMs: 2000 });
      await rm(build.directory, { recursive: true, force: true });
      await rm(path.join(root, 'output/workbench/previews', build.buildId), { recursive: true, force: true });
      await retireBuildPreview(root, build.buildId).catch(() => rm(path.join(root, 'output/local-view/builds', `${build.buildId}.json`), { force: true }));
      for (const claim of claims) await rm(claim, { force: true });
      removed.push(build.buildId); bytes += size;
    } catch (error) { count(skipped, error.message); }
  }
  return { dryRun, removed, skipped, bytes };
}
// A Source claim keeps duplicate intake out while its Build is open. Once the
// Source bytes sit in input/processed/, the pending-queue check blocks the
// same bytes itself, so the retired Build's claim has no further reader.
async function redundantClaims(root, buildId, sources) {
  const claims = [];
  for (const { digest, processedUri } of sources) {
    if (!/^sha256:[a-f0-9]{64}$/.test(String(digest)) || typeof processedUri !== 'string') continue;
    const file = path.join(root, 'output/source-claims', `${digest.slice(7)}.json`);
    if ((await rawJson(file))?.buildId !== buildId) continue;
    const bytes = await readFile(path.join(root, processedUri)).catch(() => null);
    if (bytes && bytesDigest(bytes) === digest) claims.push(file);
  }
  return claims;
}

const CHUNK = /^([a-f0-9]{64})\.json$/;
const TOKEN = /[a-f0-9]{64}/g;
export const CHUNK_GRACE_MS = 60 * 60 * 1000;
async function jsonFiles(directory, skip, files = []) {
  for (const entry of await readdir(directory, { withFileTypes: true }).catch(() => [])) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) { if (!skip.has(file)) await jsonFiles(file, skip, files); }
    else if (entry.isFile() && entry.name.endsWith('.json')) files.push(file);
  }
  return files;
}
// Mark-and-sweep of output/storage/lists/ (chunks and chunk indexes). Every
// 64-hex token in any other JSON under output/ counts as a reference (lenient
// on purpose, whatever the stub form). Unmarked files are removed only past
// the grace period, which covers a chunk written before the record that
// references it lands. The caller holds the publication lock.
export async function sweepUnreferencedRecordChunks(root, { dryRun = false, graceMs = CHUNK_GRACE_MS, now = Date.now(), ignore = [] } = {}) {
  const store = path.join(root, 'output/storage/lists'), skipped = {}, removed = [];
  let bytes = 0;
  const info = await lstat(store).catch(() => null);
  if (!info?.isDirectory()) return { dryRun, removed: 0, skipped, bytes };
  const marked = new Set(), skip = new Set([store, ...ignore]);
  // Roots: tokens in every JSON outside the store. Then one transitive level:
  // a marked store file holding only 64-hex strings is a chunk index.
  const mark = async (files) => {
    const roots = new Set();
    await mapLimit(files, 16, async (file) => {
      const text = await readFile(file, 'utf8').catch(() => '');
      for (const token of text.match(TOKEN) || []) if (!marked.has(token)) { marked.add(token); roots.add(token); }
    });
    await mapLimit([...roots], 16, async (token) => {
      const list = await rawJson(path.join(store, `${token}.json`));
      if (Array.isArray(list) && list.every((item) => typeof item === 'string' && HEX.test(item))) for (const digest of list) marked.add(digest);
    });
  };
  const started = Date.now();
  await mark(await jsonFiles(path.join(root, 'output'), skip));
  // Re-read records written while marking, so one that just reused an old
  // chunk is not missed. The grace period covers newly written chunks.
  const recent = [];
  for (const file of await jsonFiles(path.join(root, 'output'), skip)) {
    if ((await lstat(file).catch(() => null))?.mtimeMs >= started - 1000) recent.push(file);
  }
  await mark(recent);
  for (const name of await names(store)) {
    const file = path.join(store, name), match = CHUNK.exec(name);
    if (!match || marked.has(match[1])) continue;
    const stat = await lstat(file).catch(() => null);
    if (!stat?.isFile()) continue;
    if (now - stat.mtimeMs < graceMs) { count(skipped, 'within grace period'); continue; }
    if (!dryRun) await rm(file, { force: true });
    removed.push(name); bytes += stat.size;
  }
  return { dryRun, removed: removed.length, skipped, bytes };
}

export const COMPARE_RUN_MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000;
// verify:d3 --keep diagnostic scratch; nothing else reads compare/runs.
export async function sweepCompareRuns(root, { dryRun = false, maxAgeMs = COMPARE_RUN_MAX_AGE_MS, now = Date.now() } = {}) {
  const folder = path.join(root, 'compare/runs'), removed = [], skipped = {};
  let bytes = 0;
  const info = await lstat(folder).catch(() => null);
  if (!info?.isDirectory()) return { dryRun, removed, skipped, bytes };
  for (const name of await names(folder)) {
    const file = path.join(folder, name), entry = await lstat(file).catch(() => null);
    if (!entry) continue;
    if (entry.isSymbolicLink()) { count(skipped, 'symlink'); continue; }
    const stats = await treeStats(file);
    if (now - stats.newestMtimeMs < maxAgeMs) { count(skipped, 'younger than 7 days'); continue; }
    if (!dryRun) await rm(file, { recursive: true, force: true });
    removed.push(`compare/runs/${name}`); bytes += stats.bytes;
  }
  return { dryRun, removed, skipped, bytes };
}

// A dry run writes nothing, not even a lock file, so it may measure any checkout.
const locked = (root, lock, dryRun, work) => dryRun ? work() : withFileLock(path.join(root, lock), work, { timeoutMs: 2000 });
async function sweepWorkbench(root, dryRun) {
  const result = await locked(root, 'output/workbench/start.lock', dryRun, () => sweepStaleWorkbenchRecords(root, { dryRun, measure: true }));
  return { dryRun, removed: result.removed, skipped: result.live ? { 'live workbench keeps previews': result.live } : {}, bytes: result.bytes };
}
// Best-effort: a failing sweep is reported under skipped and never thrown.
async function gcSweeps(root, dryRun, extra = {}) {
  const result = {};
  result.builds = await retireFinishedBuilds(root, { dryRun }).catch(gcFailure);
  // Retired manifests release their chunks in the same pass; a dry run
  // ignores the manifests it would have removed.
  const ignore = dryRun ? result.builds.removed.map((buildId) => path.join(root, 'output/builds', buildId)) : [];
  result.chunks = await locked(root, 'output/publications/.publish.lock', dryRun, () => sweepUnreferencedRecordChunks(root, { dryRun, ignore })).catch(gcFailure);
  result.workbench = await sweepWorkbench(root, dryRun).catch(gcFailure);
  for (const [name, sweep] of Object.entries(extra)) result[name] = await sweep().catch(gcFailure);
  return result;
}

// pnpm clean:artifacts -- --gc and the pre-push hook.
export async function runGarbageCollection(root, { dryRun = false } = {}) {
  root = path.resolve(root);
  const gc = await gcSweeps(root, dryRun, {
    compareRuns: () => sweepCompareRuns(root, { dryRun }),
    derived: () => sweepDerivedArtifacts(root, { dryRun }).then((result) => ({ ...result, removed: result.removed.map((item) => item.path), skipped: Object.fromEntries((result.skipped || []).map((item) => [`${item.path}: ${item.reason}`, 1])) })),
  });
  return { dryRun, gc, bytes: Object.values(gc).reduce((sum, item) => sum + (item.bytes || 0), 0) };
}

export async function runRetention(root) {
  const builds = await cleanupFinishedBuilds(root);
  const snapshots = await withFileLock(path.join(root, 'output/publications/.publish.lock'), () => sweepSnapshots(root), { timeoutMs: 2000 })
    .catch((error) => ({ removed: [], skipped: error.message }));
  const gc = await gcSweeps(root, false).catch((error) => ({ skipped: error.message }));
  return { builds, snapshots, gc };
}

// Regenerable build/tool output only. This fixed list is the whole contract
// (docs/artifact-retention.md); Build, publication, transport, workbench,
// storage, meta and render-regression state under output/ is never touched, so
// the sweep is safe while another Session works. Symlinks are never followed:
// a symlinked parent or target is skipped, nested links are unlinked as links.
const DERIVED_PATHS = Object.freeze(['_site', 'output/trace-company-product-metric-visualizer.html',
  '.playwright-cli', 'scripts/__pycache__', '.DS_Store', 'output/.DS_Store']);
const RELEASE = /^[a-f0-9]{64}$/;
async function lstatOrNull(file) {
  try { return await lstat(file); } catch (error) { if (error.code === 'ENOENT') return null; throw error; }
}
async function realParents(root, relative) {
  const parts = relative.split('/').slice(0, -1);
  for (let i = 1; i <= parts.length; i++) {
    const info = await lstatOrNull(path.join(root, ...parts.slice(0, i)));
    if (!info || !info.isDirectory() || info.isSymbolicLink()) return false;
  }
  return true;
}
async function logicalBytes(file, info) {
  if (!info.isDirectory() || info.isSymbolicLink()) return info.size;
  let total = 0;
  for (const name of await readdir(file).catch((error) => { if (error.code === 'ENOENT') return []; throw error; })) {
    const child = path.join(file, name), childInfo = await lstatOrNull(child);
    if (childInfo) total += await logicalBytes(child, childInfo);
  }
  return total;
}
// build-site.mjs writes releases.json as [current, ...retained]; only the
// first id is current. Without a readable list nothing there is removed.
async function staleSiteReleases(root) {
  const cache = 'output/site-releases';
  if (!await realParents(root, `${cache}/releases.json`)) return [];
  const info = await lstatOrNull(path.join(root, cache, 'releases.json'));
  if (!info?.isFile()) return [];
  let current;
  try { current = JSON.parse(await readFile(path.join(root, cache, 'releases.json'), 'utf8'))?.[0]; } catch { return []; }
  if (!RELEASE.test(current || '')) return [];
  return (await names(path.join(root, cache))).filter((name) => RELEASE.test(name) && name !== current).map((name) => `${cache}/${name}`);
}
export async function sweepDerivedArtifacts(root, { dryRun = false } = {}) {
  root = path.resolve(root);
  const removed = [], skipped = [];
  for (const relative of [...DERIVED_PATHS, ...await staleSiteReleases(root)]) {
    const file = path.join(root, relative);
    if (!await realParents(root, relative)) continue;
    const info = await lstatOrNull(file);
    if (!info) continue;
    if (info.isSymbolicLink() || relative.endsWith('.DS_Store') && !info.isFile()) { skipped.push({ path: relative, reason: 'not a regular file or directory' }); continue; }
    const bytes = await logicalBytes(file, info);
    if (!dryRun) await rm(file, { recursive: true, force: true });
    removed.push({ path: relative, bytes });
  }
  return { dryRun, removed, ...(skipped.length ? { skipped } : {}), bytes: removed.reduce((sum, item) => sum + item.bytes, 0) };
}
