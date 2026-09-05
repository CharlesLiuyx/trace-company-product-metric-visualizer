// A single writer transports published data into the shared checkout. Ordinary
// candidate folders and a private temporary index; no worktrees or branches.
import path from 'node:path';
import { existsSync } from 'node:fs';
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { randomUUID } from 'node:crypto';
import vm from 'node:vm';
import { CANONICAL_ROOTS, TOOL_ROOTS, atomicJson, readJson, fileManifest, filesUnder, copyFiles, inside, bytesDigest, withFileLock } from './workflow-files.mjs';
import { prepareWorkspaceTools } from './workspace-tools.mjs';
import { mergeSource, containsSsotRecords } from './workflow-merge.mjs';
import { runWorkspace } from './asset-workflow.mjs';
import { updateMetricCatalog } from './metric-catalog.mjs';
import { updateAssetCatalog } from './workflow-assets.mjs';
import { verifySiteIdentity } from './site-release-identity.mjs';
import { digestValue } from './dataset-build.mjs';

const trackedReceipt = 'docs/releases/current.json';
const runtimeRoots = [...CANONICAL_ROOTS, 'scripts', 'package.json', 'pnpm-lock.yaml'];
function git(root, args, options = {}) { return execFileSync('git', args, { cwd: root, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024, ...options }); }
function folder(root, id) { if (!/^transport-[a-f0-9-]+$/.test(id)) throw new Error('Invalid transport id'); return inside(root, `output/git-transports/${id}`); }
async function readPlan(root, id) {
  const plan = await readJson(path.join(folder(root, id), 'plan.json'));
  const { planDigest, ...value } = plan;
  if (plan.schema !== 'git-transport/v1' || plan.id !== id || digestValue(value) !== planDigest) throw new Error('Git transport plan changed');
  const seen = new Set();
  for (const item of plan.paths) {
    inside(root, item.path);
    if (seen.has(item.path) || !/^(?:index\.html|data\/.+|input\/icon-crop-specs\/[^/]+\.json|input\/(?:pending|processing)\/[^/]+\.(?:png|txt|md))$/.test(item.path) || item.path.split('/').some((part) => part.startsWith('.'))) throw new Error(`Unowned transport path: ${item.path}`);
    if (!item.digest && !/^input\/(pending|processing)\//.test(item.path)) throw new Error('Data deletion requires an explicit migration');
    seen.add(item.path);
  }
  return plan;
}
const hashAt = async (root, file) => existsSync(inside(root, file)) ? bytesDigest(await readFile(inside(root, file))) : null;
function headBytes(root, head, file) {
  const entry = git(root, ['ls-tree', head, '--', file]).trim();
  if (!entry) return null;
  if (!entry.startsWith('100644 blob ') && !entry.startsWith('100755 blob ')) throw new Error(`Transport does not follow Git symlinks: ${file}`);
  return git(root, ['show', `${head}:${file}`], { encoding: 'buffer' });
}
async function publications(root, digest) {
  if (!/^sha256:[a-f0-9]{64}$/.test(digest)) throw new Error('A published digest is required');
  const receipts = (await Promise.all((await filesUnder(root, ['output/publications/receipts'])).filter((f) => f.endsWith('.json')).map((f) => readJson(inside(root, f)))));
  if (existsSync(path.join(root, 'output/publications/current.json'))) receipts.push(await readJson(path.join(root, 'output/publications/current.json')));
  const result = [], seen = new Set();
  for (let next = digest; next && !seen.has(next);) {
    seen.add(next);
    const receipt = receipts.find((item) => item.publishedDigest === next);
    if (!receipt) { if (!result.length) throw new Error('Digest has never been published'); break; }
    const plan = await readJson(inside(root, `output/publications/plans/${receipt.planDigest.slice(7)}/plan.json`));
    const { planDigest, ...value } = plan;
    if (plan.projectedTreeDigest !== next || planDigest !== receipt.planDigest || digestValue(value) !== planDigest) throw new Error('Publication lineage mismatch');
    result.unshift({ receipt, plan }); next = receipt.previousDigest;
  }
  return result;
}
async function originalBytes(root, entry, plan) {
  if (!entry.baseDigest) return null;
  const candidates = [inside(root, `output/publications/trees/${plan.baseCanonicalDigest.slice(7)}`), inside(root, `output/workflow-bases/${plan.baseCanonicalDigest.slice(7)}`)];
  for (const buildId of entry.buildIds || [entry.buildId]) {
    const baseFile = inside(root, `output/builds/${buildId}/workspace/output/workflow/base.json`);
    if (existsSync(baseFile)) candidates.push((await readJson(baseFile)).root);
  }
  for (const candidate of candidates) {
    const file = inside(candidate, entry.path);
    if (existsSync(file)) { const bytes = await readFile(file); if (bytesDigest(bytes) === entry.baseDigest) return bytes; }
  }
  throw new Error(`Original bytes are unavailable for ${entry.path}; an explicit migration is required`);
}
export async function prepareGitTransport(publishedDigest, root, options = {}) {
  const baseHead = git(root, ['rev-parse', 'HEAD']).trim();
  if (git(root, ['status', '--porcelain', '--', ...runtimeRoots]).trim()) throw new Error('Commit application/tool changes first; the transport candidate must start from reproducible Git inputs');
  const lineage = await publications(root, publishedDigest);
  const publishedRoot = inside(root, `output/publications/trees/${publishedDigest.slice(7)}`);
  if ((await fileManifest(publishedRoot)).digest !== publishedDigest) throw new Error('Published tree changed');
  const id = `transport-${randomUUID()}`, directory = folder(root, id), candidate = path.join(directory, 'workspace');
  await mkdir(candidate, { recursive: true });
  await copyFiles(root, candidate, await filesUnder(root, [...CANONICAL_ROOTS, ...TOOL_ROOTS]));
  await prepareWorkspaceTools(root, candidate);
  // Reproduce the committed shared queue, then overlay only this release's
  // intake/archive changes. Other Sessions' uncommitted claims stay outside it.
  for (const file of git(root, ['ls-tree', '-r', '--name-only', '-z', baseHead, '--', 'input/pending', 'input/processing']).split('\0').filter(Boolean)) {
    const destination = inside(candidate, file);
    await mkdir(path.dirname(destination), { recursive: true });
    await writeFile(destination, headBytes(root, baseHead, file));
  }
  const owned = new Map();
  for (const { plan } of lineage) for (const entry of plan.contributions) if (!owned.has(entry.path)) owned.set(entry.path, { entry, plan });
  const changed = [];
  for (const [file, { entry, plan }] of owned) {
    if (!file.startsWith('data/') && !/^input\/icon-crop-specs\/[^/]+\.json$/.test(file)) throw new Error(`Publication contains an unowned Git path: ${file}`);
    const current = headBytes(root, baseHead, file), incoming = await readFile(inside(publishedRoot, file));
    if (current?.equals(incoming)) continue;
    if (containsSsotRecords(file, current?.toString('utf8'), incoming.toString('utf8'))) continue;
    const base = await originalBytes(root, entry, plan);
    const content = bytesDigest(current || '') === bytesDigest(base || '') && Boolean(current) === Boolean(base) ? incoming : Buffer.from(mergeSource(file, base?.toString('utf8') ?? null, current?.toString('utf8') ?? null, incoming.toString('utf8')));
    if (current?.equals(content)) continue;
    await mkdir(path.dirname(inside(candidate, file)), { recursive: true }); await writeFile(inside(candidate, file), content); changed.push(file);
  }
  // Fix times before displaying the integrated candidate. The commit hook and
  // a clean CI checkout regenerate these same entries after the Git commit.
  const fixedPath = 'data/workflow-timestamps.json';
  const fixed = existsSync(inside(candidate, fixedPath)) ? await readJson(inside(candidate, fixedPath)) : { schema: 'workflow-timestamps/v1', files: {} };
  const metadataContext = { window: {} };
  if (existsSync(path.join(publishedRoot, 'data/dataset-file-metadata.js'))) vm.runInNewContext(await readFile(path.join(publishedRoot, 'data/dataset-file-metadata.js'), 'utf8'), metadataContext, { timeout: 1000 });
  for (const file of changed.filter((f) => f.startsWith('data/datasets/') || f === 'data/revenue-metrics.js')) {
    const time = Object.values(metadataContext.window.DATASET_FILE_METADATA?.files || {}).find((item) => item.path === file)?.updatedAt;
    if (!time) throw new Error(`Published timestamp is missing for ${file}`);
    fixed.files[file] = { digest: await hashAt(candidate, file), updatedAt: time, publishedDigest };
  }
  if (Object.keys(fixed.files).length) await atomicJson(inside(candidate, fixedPath), fixed);
  // Baselines are generated per accepted Build, never copied as a stale ledger.
  const baselinePath = 'data/render-baselines.json';
  if (existsSync(inside(candidate, baselinePath))) {
    const target = await readJson(inside(candidate, baselinePath)), accepted = await readJson(inside(publishedRoot, baselinePath));
    for (const { plan } of lineage) for (const build of plan.builds) if (accepted.baselines[build.key]) target.baselines[build.key] = accepted.baselines[build.key];
    await atomicJson(inside(candidate, baselinePath), target);
  }
  const queue = [];
  const queuePaths = new Set();
  for (const { plan: publication } of lineage) for (const item of publication.builds) {
    const buildFile = inside(root, `output/builds/${item.buildId}/manifest.json`);
    if (!existsSync(buildFile)) throw new Error('Build Source history is required for coherent Git transport');
    for (const source of (await readJson(buildFile)).sources) {
      if (/^input\/processing\/[^/]+\.(png|txt|md)$/i.test(source.processingUri || '') && !existsSync(inside(root, source.processingUri))) {
        const trackedSource = headBytes(root, baseHead, source.processingUri) || headBytes(root, baseHead, source.uri);
        if (trackedSource) {
          let confirmed = false;
          for (const receipt of (await filesUnder(root, ['output/source-relocations'])).filter((file) => file.endsWith('.json') && !file.endsWith('.pending.json'))) {
            const value = await readJson(inside(root, receipt));
            if (value.signal?.confirmed === true && value.moved?.some((entry) => entry.path === source.processingUri && entry.digest === bytesDigest(trackedSource))) confirmed = true;
          }
          if (!confirmed) throw new Error(`Missing operator-confirmed archive receipt for ${source.processingUri}`);
        }
      }
      for (const file of [source.uri, source.processingUri]) {
        if (!/^input\/(pending|processing)\/[^/]+\.(png|txt|md)$/i.test(file) || queuePaths.has(file)) continue;
        queuePaths.add(file);
        const original = headBytes(root, baseHead, file), actual = await hashAt(root, file);
        const previous = original ? bytesDigest(original) : null;
        if (previous === actual) continue;
        // Intake already owns these exact source paths. Missing processing
        // Sources require a recorded, explicit operator archive receipt.
        if (file === source.processingUri && !actual && previous) {
          const receipts = await filesUnder(root, ['output/source-relocations']);
          let confirmed = false;
          for (const receipt of receipts.filter((name) => name.endsWith('.json') && !name.endsWith('.pending.json'))) {
            const value = await readJson(inside(root, receipt));
            if (value.signal?.confirmed === true && value.moved?.some((entry) => entry.path === file && entry.digest === previous)) confirmed = true;
          }
          if (!confirmed) throw new Error(`Missing operator-confirmed archive receipt for ${file}`);
        }
        if (actual) await copyFiles(root, candidate, [file]);
        else await rm(inside(candidate, file), { force: true });
        queue.push({ path: file, before: previous, digest: actual, intakeOwned: true });
      }
    }
  }
  const validate = options.validate || (async () => {
    await updateMetricCatalog(candidate); await updateAssetCatalog(candidate);
    runWorkspace(candidate, 'sync-index-datasets.mjs'); runWorkspace(candidate, 'update-dataset-file-metadata.mjs');
    runWorkspace(candidate, 'check.mjs');
    const renderKeys = [...new Set(lineage.flatMap(({ plan }) => plan.builds.map((item) => item.key)))].filter((key) => existsSync(inside(candidate, `data/datasets/${key}.js`)));
    if (renderKeys.length) runWorkspace(candidate, 'verify-render-regression.mjs', renderKeys);
    runWorkspace(candidate, 'build-site.mjs'); runWorkspace(candidate, 'verify-site.mjs');
  });
  await validate(candidate);
  const release = await verifySiteIdentity(path.join(candidate, '_site'));
  const before = await fileManifest(root), after = await fileManifest(candidate);
  const paths = after.entries.filter((entry) => before.entries.find((item) => item.path === entry.path)?.digest !== entry.digest);
  if (git(root, ['rev-parse', 'HEAD']).trim() !== baseHead || git(root, ['status', '--porcelain', '--', ...runtimeRoots]).trim()) throw new Error('Git inputs changed during candidate verification; prepare a new candidate');
  const plan = { schema: 'git-transport/v1', id, state: 'REVIEW_PENDING', baseHead, publishedDigest, lineage: lineage.map(({ receipt }) => receipt.planDigest), builds: lineage.flatMap(({ plan: item }) => item.builds), candidateDigest: (await fileManifest(candidate, runtimeRoots)).digest, release: { version: release.version, contentDigest: release.contentDigest }, paths: [...paths.map((entry) => ({ ...entry, before: before.entries.find((item) => item.path === entry.path)?.digest || null })), ...queue], receiptBefore: await hashAt(root, trackedReceipt), preparedAt: new Date().toISOString() };
  plan.planDigest = digestValue(plan);
  await atomicJson(path.join(directory, 'plan.json'), plan);
  return { ...plan, workspace: candidate, preview: `_site/index.html`, reviewRequired: 'Confirm this exact integrated candidate in the task; earlier Build acceptance does not accept changed application code' };
}
export async function inspectGitTransport(id, root) {
  const directory = folder(root, id), plan = await readPlan(root, id);
  const receipt = path.join(directory, 'receipt.json');
  return { ...plan, approval: existsSync(path.join(directory, 'approval.json')) ? await readJson(path.join(directory, 'approval.json')) : null, receipt: existsSync(receipt) ? await readJson(receipt) : null, workspace: path.join(directory, 'workspace') };
}
export async function reviewGitTransport(id, input, root) {
  const directory = folder(root, id), plan = await readPlan(root, id);
  if (input.accepted !== true || !input.operator?.trim() || input.candidateDigest !== plan.candidateDigest) throw new Error('Transport review requires explicit human acceptance of the displayed candidate digest');
  if ((await fileManifest(path.join(directory, 'workspace'), runtimeRoots)).digest !== plan.candidateDigest) throw new Error('Candidate changed since display');
  const approval = { ...input, accepted: true, planDigest: plan.planDigest, recordedAt: new Date().toISOString() };
  await atomicJson(path.join(directory, 'approval.json'), approval); return approval;
}
export async function commitGitTransport(id, root, options = {}) {
  return withFileLock(path.join(root, 'output/publications/.publish.lock'), async () => {
    if (git(root, ['branch', '--show-current']).trim() !== 'main') throw new Error('Transport commit requires the shared main checkout');
    const directory = folder(root, id), candidate = path.join(directory, 'workspace'), plan = await readPlan(root, id);
    const receiptFile = path.join(directory, 'receipt.json');
    if (existsSync(receiptFile)) return readJson(receiptFile);
    const approval = await readJson(path.join(directory, 'approval.json'));
    if (approval.accepted !== true || approval.candidateDigest !== plan.candidateDigest || approval.planDigest !== plan.planDigest) throw new Error('Exact candidate acceptance is required');
    if ((await fileManifest(candidate, runtimeRoots)).digest !== plan.candidateDigest) throw new Error('Candidate changed after approval');
    await verifySiteIdentity(path.join(candidate, '_site'), plan.release);
    const journalFile = path.join(directory, 'journal.json');
    const prior = existsSync(journalFile) ? await readJson(journalFile) : null;
    const head = git(root, ['rev-parse', 'HEAD']).trim();
    const trailer = `Trace-Transport: ${id}`;
    if (head !== plan.baseHead) {
      if (!prior || !git(root, ['show', '-s', '--format=%B', head]).includes(trailer) || git(root, ['rev-parse', `${head}^`]).trim() !== plan.baseHead) throw new Error('Git HEAD changed; prepare and review a fresh integrated candidate');
      // Recover an interrupted commit without creating a second commit.
    } else {
      if (git(root, ['diff', '--cached', '--name-only']).trim()) throw new Error('Shared index has staged changes; transport leaves them untouched');
      const permitted = new Set([...plan.paths.map((item) => item.path), trackedReceipt]);
      const dirty = git(root, ['status', '--porcelain', '-z', '--no-renames', '--untracked-files=all', '--', ...runtimeRoots]).split('\0').filter(Boolean);
      if (dirty.some((line) => !permitted.has(line.slice(3)))) throw new Error('Runtime/tool files changed since candidate preparation');
      for (const entry of [...plan.paths, { path: trackedReceipt, before: plan.receiptBefore, digest: prior?.receiptDigest }]) {
        const actual = await hashAt(root, entry.path);
        if (entry.intakeOwned ? actual !== entry.digest : actual !== entry.before && !(prior && actual === entry.digest)) throw new Error(`Unowned working change at ${entry.path}; no file was overwritten`);
      }
      const mapping = { schema: 'reviewed-git-release/v1', id, baseHead: plan.baseHead, planDigest: plan.planDigest, publishedDigest: plan.publishedDigest, builds: plan.builds, candidateDigest: plan.candidateDigest, paths: plan.paths, release: plan.release, approval };
      await atomicJson(inside(candidate, trackedReceipt), mapping);
      const receiptDigest = await hashAt(candidate, trackedReceipt);
      await atomicJson(journalFile, { state: 'APPLYING', baseHead: plan.baseHead, receiptDigest, paths: plan.paths });
      await copyFiles(candidate, root, [...plan.paths.filter((item) => item.digest).map((item) => item.path), trackedReceipt]);
      for (const item of plan.paths.filter((entry) => !entry.digest)) await rm(inside(root, item.path), { force: true });
      await options.afterApply?.();
      const index = path.join(directory, 'index'); await rm(index, { force: true });
      const env = { ...process.env, GIT_INDEX_FILE: index };
      git(root, ['read-tree', plan.baseHead], { env });
      git(root, ['add', '--', ...plan.paths.map((item) => item.path), trackedReceipt], { env });
      if (git(root, ['rev-parse', 'HEAD']).trim() !== plan.baseHead) throw new Error('Git HEAD changed immediately before commit');
      git(root, ['commit', '-m', `data(publication): transport reviewed datasets\n\n${trailer}`], { env });
      await options.afterCommit?.();
    }
    const committed = git(root, ['rev-parse', 'HEAD']).trim();
    for (const file of [...plan.paths.map((item) => item.path), trackedReceipt]) {
      const bytes = headBytes(root, committed, file);
      if ((bytes ? bytesDigest(bytes) : null) !== await hashAt(root, file)) throw new Error(`Post-commit bytes changed at ${file}; inspect journal before recovery`);
    }
    // Only our paths are refreshed in the shared index. Other working files stay.
    git(root, ['reset', '-q', 'HEAD', '--', ...plan.paths.map((item) => item.path), trackedReceipt]);
    const receipt = { schema: 'git-transport-receipt/v1', id, state: 'COMMITTED', commit: committed, publishedDigest: plan.publishedDigest, release: plan.release, committedAt: new Date().toISOString() };
    await atomicJson(receiptFile, receipt); await atomicJson(journalFile, { state: 'COMMITTED', commit: committed }); return receipt;
  });
}
export async function pushGitTransport(id, root) {
  return withFileLock(path.join(root, 'output/publications/.publish.lock'), async () => {
    const directory = folder(root, id), receipt = await readJson(path.join(directory, 'receipt.json'));
    if (git(root, ['branch', '--show-current']).trim() !== 'main' || git(root, ['rev-parse', 'HEAD']).trim() !== receipt.commit) throw new Error('Push requires main at the reviewed transport commit');
    git(root, ['push', 'origin', `${receipt.commit}:refs/heads/main`]);
    const remote = git(root, ['ls-remote', 'origin', 'refs/heads/main']).split(/\s/)[0];
    if (remote !== receipt.commit) throw new Error('Remote main readback differs; inspect remote before retry');
    const next = { ...receipt, state: 'PUSHED', pushedAt: new Date().toISOString() };
    await atomicJson(path.join(directory, 'receipt.json'), next); return next;
  });
}
