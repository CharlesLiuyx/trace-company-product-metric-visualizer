import path from 'node:path';
import { watch, existsSync, createReadStream } from 'node:fs';
import { readFile, readdir, stat, mkdir, writeFile, rm } from 'node:fs/promises';
import { spawn, execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { randomUUID } from 'node:crypto';
import { startStaticServer } from '../dev-server.mjs';
import { rootDir } from './project.mjs';
import { atomicJson, readJson, inside, copyFiles, filesUnder, CANONICAL_ROOTS, fileManifest } from './workflow-files.mjs';
import { verifySiteIdentity } from './site-release-identity.mjs';
import { prepareWorkspaceTools } from './workspace-tools.mjs';
import { showAsset } from './asset-workflow.mjs';
import { composeReviewData, bindReviewMembers, assertReviewMembersFresh, reviewTasks } from './workbench-review.mjs';
import { updateMetricCatalog } from './metric-catalog.mjs';

const exec = promisify(execFile);
const productionUrl = 'https://charlesliuyx.github.io/trace-company-product-metric-visualizer/';
const basePath = '/trace-company-product-metric-visualizer/';
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.svg': 'image/svg+xml', '.woff2': 'font/woff2' };
function sendJson(response, body, status = 200) { response.writeHead(status, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }); response.end(JSON.stringify(body)); }
function run(file, args, root) {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [file, ...args], { cwd: root, stdio: ['ignore', 'pipe', 'pipe'] });
    let output = '';
    for (const stream of [child.stdout, child.stderr]) stream.on('data', (data) => { output = (output + data).slice(-12000); });
    child.on('error', reject); child.on('close', (code) => code === 0 ? resolve(output) : reject(new Error(output || `Build exited ${code}`)));
  });
}
export async function startWorkbench({ root = rootDir, port = 8000, build = run, productionFetch = fetch, readCi = null, maxBuilds = 2 } = {}) {
  const previews = new Map(), events = new Set(), watchers = [], timers = new Set();
  let closed = false, remote = { status: 'unknown', checkedAt: null }, remoteAt = 0, remoteBusy = false;
  let git = {}, gitAt = 0, ci = { status: 'unknown' }, ciAt = 0, ciBusy = false, activeBuilds = 0;
  const availability = new Map();
  const notify = () => { for (const response of events) response.write(`data: ${JSON.stringify({ changedAt: Date.now() })}\n\n`); };
  function sourceRoot(source) {
    if (source === 'project' || source === 'review') return root;
    if (!/^(?:build|transport)-[a-z0-9-]+$/.test(source)) throw new Error('Invalid preview source');
    const workspace = inside(root, `output/${source.startsWith('transport-') ? 'git-transports' : 'builds'}/${source}/workspace`);
    if (!existsSync(path.join(workspace, 'index.html'))) throw new Error('Build workspace not ready');
    return workspace;
  }
  function ensurePreview(source) {
    if (previews.has(source)) return previews.get(source);
    const workspace = sourceRoot(source);
    const state = { source, workspace, status: 'queued', revision: 0, candidate: null, error: null, busy: false, dirty: true, watched: new Set() };
    previews.set(source, state);
    let debounce;
    const changed = () => {
      if (closed) return;
      state.revision++; state.dirty = true; state.status = state.busy ? 'building' : 'queued';
      if (debounce) { clearTimeout(debounce); timers.delete(debounce); }
      debounce = setTimeout(() => { timers.delete(debounce); rebuild(state); }, 500); timers.add(debounce); notify();
    };
    state.changed = changed;
    state.watchWorkspace = (folder) => {
      if (closed) return;
      if (state.watched.has(folder)) return;
      state.watched.add(folder);
      for (const item of ['src', 'data', 'vendor', 'scripts', 'output/workflow']) {
        const file = path.join(folder, item);
        if (existsSync(file)) watchers.push(watch(file, { recursive: true }, changed));
      }
      watchers.push(watch(folder, (_event, file) => { if (['index.html', 'package.json', 'pnpm-lock.yaml'].includes(String(file))) changed(); }));
    };
    state.watchWorkspace(workspace);
    rebuild(state); return state;
  }
  async function rebuild(state) {
    if (closed || state.busy || !state.dirty || activeBuilds >= maxBuilds) return;
    activeBuilds++;
    state.busy = true; state.dirty = false; state.status = 'building'; state.error = null; notify();
    const revision = state.revision;
    const id = randomUUID(), target = inside(root, `output/workbench/previews/${state.source}/${id}/site`);
    try {
      await mkdir(path.dirname(target), { recursive: true });
      const snapshot = path.join(path.dirname(target), 'source');
      const before = await fileManifest(state.workspace);
      await copyFiles(state.workspace, snapshot, await filesUnder(state.workspace, CANONICAL_ROOTS));
      if ((await fileManifest(snapshot)).digest !== before.digest) throw new Error('Files changed while the preview snapshot was copied');
      let members = [];
      if (state.source === 'review') {
        members = await composeReviewData(root, snapshot, await tasks());
        for (const member of members) state.watchWorkspace(member.workspace);
      }
      await prepareWorkspaceTools(root, snapshot);
      if (members.length) {
        await updateMetricCatalog(snapshot);
        await run(path.join(snapshot, 'scripts/sync-index-datasets.mjs'), [], snapshot);
      }
      await build(path.join(snapshot, 'scripts/build-site.mjs'), ['--root', snapshot, '--out', target, '--cache', path.join(path.dirname(target), 'cache')], snapshot);
      if (revision !== state.revision) throw new Error('Files changed during preview build; rebuilding the latest version');
      const release = await verifySiteIdentity(target);
      const selection = state.source.startsWith('build-') ? await readJson(inside(root, `output/local-view/builds/${state.source}.json`)).catch(() => null) : null;
      const transport = state.source.startsWith('transport-') ? await readJson(inside(root, `output/git-transports/${state.source}/plan.json`)).catch(() => null) : null;
      const candidate = { id, source: state.source, ...release, createdAt: new Date().toISOString(), url: `/__trace/previews/${state.source}/${id}${basePath}` };
      candidate.reviewToken = selection?.revision || null;
      candidate.sourceDigest = before.digest;
      candidate.toolDigest = (await fileManifest(snapshot, ['scripts', 'package.json', 'pnpm-lock.yaml'])).digest;
      if (state.source === 'review') {
        candidate.members = await bindReviewMembers(root, snapshot, members, (buildId) => showAsset(buildId, root));
        await assertReviewMembersFresh(root, members);
        if ((await fileManifest(root)).digest !== before.digest) throw new Error('Project files changed during combined review build');
      }
      if (selection) {
        const inspection = await showAsset(state.source, root).catch(() => null);
        if (!inspection?.fresh || inspection.reviewToken !== selection.revision) candidate.reviewToken = null;
      }
      candidate.transportDigest = transport?.candidateDigest || null;
      candidate.transportMatches = transport ? transport.release.contentDigest === release.contentDigest && transport.release.version === release.version : null;
      if ((await fileManifest(root, ['scripts', 'package.json', 'pnpm-lock.yaml'])).digest !== candidate.toolDigest) throw new Error('Preview tools changed during construction; rebuilding the latest version');
      await atomicJson(path.join(path.dirname(target), 'candidate.json'), candidate);
      if (revision !== state.revision) throw new Error('Preview input changed before activation');
      await atomicJson(inside(root, `output/workbench/previews/${state.source}/current.json`), candidate);
      state.candidate = candidate;
      state.status = 'ready';
    } catch (error) { state.status = 'failed'; state.error = error.message; }
    finally {
      // These are build-owned scratch copies; immutable site URLs and their
      // candidate receipts remain available to pinned review tabs.
      for (const name of ['source', 'cache']) await rm(path.join(path.dirname(target), name), { recursive: true, force: true }).catch(() => {});
      state.busy = false; activeBuilds--; notify(); for (const waiting of previews.values()) if (waiting.dirty) rebuild(waiting);
    }
  }
  async function remoteState() {
    if (remoteBusy || Date.now() - remoteAt < 30000) return remote;
    remoteBusy = true; remoteAt = Date.now();
    try {
      const response = await productionFetch(new URL(`site-release.json?t=${Date.now()}`, productionUrl), { signal: AbortSignal.timeout(8000), cache: 'no-store' });
      if (!response.ok) throw new Error(`Production returned HTTP ${response.status}`);
      const release = await response.json();
      if (release.schema !== 'trace-site-release/v1' || !/^[a-f0-9]{64}$/.test(release.version)) throw new Error('Invalid production version manifest');
      remote = { status: 'available', release, checkedAt: new Date().toISOString(), url: productionUrl };
    } catch (error) { remote = { ...remote, status: 'unavailable', error: error.message, attemptedAt: new Date().toISOString() }; }
    finally { remoteBusy = false; notify(); }
    return remote;
  }
  async function gitState() {
    if (Date.now() - gitAt < 15000) return git;
    gitAt = Date.now();
    try {
      const results = await Promise.all([exec('git', ['rev-parse', 'HEAD'], { cwd: root }), exec('git', ['status', '--porcelain'], { cwd: root })]);
      git = { head: results[0].stdout.trim(), dirty: Boolean(results[1].stdout.trim()), checkedAt: new Date().toISOString() };
    } catch (error) { git = { error: error.message }; }
    return git;
  }
  async function ciState() {
    if (ciBusy || Date.now() - ciAt < 30000) return;
    ciBusy = true; ciAt = Date.now();
    try {
      const runs = readCi ? await readCi() : JSON.parse((await exec('gh', ['run', 'list', '--repo', 'charlesliuyx/trace-company-product-metric-visualizer', '--branch', 'main', '--workflow', 'ci', '--limit', '5', '--json', 'databaseId,status,conclusion,headSha,url,createdAt'], { cwd: root, timeout: 10000 })).stdout);
      ci = { status: 'available', runs, checkedAt: new Date().toISOString() };
    } catch (error) { ci = { ...ci, status: 'unavailable', error: error.message, attemptedAt: new Date().toISOString() }; }
    finally { ciBusy = false; notify(); }
  }
  async function productionDataset(key) {
    if (!key) return { status: 'unspecified' };
    if (!/^[a-z0-9-]+$/.test(key) || remote.status !== 'available') return { status: 'unknown', key };
    const cacheKey = `${remote.release.version}:${key}`;
    const prior = availability.get(cacheKey);
    if (prior && Date.now() - prior.at < 30000) return prior;
    let result;
    try {
      const response = await productionFetch(new URL(`releases/${remote.release.version}/data/datasets/${key}.js`, productionUrl), { method: 'HEAD', signal: AbortSignal.timeout(8000) });
      result = { key, status: response.ok ? 'available' : response.status === 404 ? 'not-published' : 'unknown', at: Date.now() };
    } catch { result = { key, status: 'unknown', at: Date.now() }; }
    availability.set(cacheKey, result); return result;
  }
  async function tasks() {
    const folder = path.join(root, 'output/builds');
    const files = await readdir(folder).catch(() => []);
    const result = await Promise.all(files.filter((f) => /^build-[a-z0-9-]+$/.test(f)).map(async (buildId) => {
      try {
        const manifest = await readJson(path.join(folder, buildId, 'manifest.json'));
        if (!manifest.authoringRoot) return null;
        const selected = await readJson(inside(root, `output/local-view/builds/${buildId}.json`)).catch(() => ({}));
        const session = await readJson(path.join(folder, buildId, 'session.json')).catch(() => null);
        return { ...selected, buildId, key: manifest.key, historicalState: manifest.state, reviewPending: Boolean(selected.revision) && manifest.review?.status !== 'accepted', owner: session?.owner || '历史任务', selectable: existsSync(path.join(folder, buildId, 'workspace/index.html')) };
      } catch { return null; }
    }));
    for (const id of await readdir(path.join(root, 'output/git-transports')).catch(() => [])) {
      if (!/^transport-[a-f0-9-]+$/.test(id)) continue;
      const plan = await readJson(inside(root, `output/git-transports/${id}/plan.json`)).catch(() => null);
      if (plan) {
        const receipt = await readJson(inside(root, `output/git-transports/${id}/receipt.json`)).catch(() => null);
        const approval = await readJson(inside(root, `output/git-transports/${id}/approval.json`)).catch(() => null);
        const status = receipt?.state === 'PUSHED' ? '已推送，等待线上核对' : receipt?.state === 'COMMITTED' ? '已提交，尚未推送' : approval?.accepted ? '已审阅，待提交' : '集成候选待审阅';
        result.unshift({ buildId: id, key: '发布 · ' + plan.builds.map((item) => item.key).join(', '), historicalState: status, selectable: true });
      }
    }
    return result.filter(Boolean);
  }
  const server = await startStaticServer({ root, port, handler: async (request, response) => {
    const url = new URL(request.url || '/', 'http://localhost');
    if (request.method !== 'GET' && url.pathname.startsWith('/__trace')) { sendJson(response, { error: 'Workbench is read-only; approval and Git writes use the CLI' }, 405); return true; }
    if (url.pathname === '/' || url.pathname === '/__trace/' || url.pathname === '/index.html' && !url.searchParams.has('source-view')) {
      response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' }); response.end(await readFile(path.join(root, 'scripts/templates/workbench.html'))); return true;
    }
    if (url.pathname === '/__trace/ping.js') {
      response.writeHead(200, { 'Content-Type': 'text/javascript', 'Access-Control-Allow-Origin': '*', 'Cache-Control': 'no-store' });
      response.end(`window.TRACE_WORKBENCH = ${JSON.stringify({ root, url: server.url })};`); return true;
    }
    if (url.pathname === '/__trace/health') { sendJson(response, { schema: 'trace-workbench-health/v1', root, url: server.url }); return true; }
    if (url.pathname === '/__trace/events') {
      response.writeHead(200, { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-store', Connection: 'keep-alive' }); response.write('data: {}\n\n'); events.add(response); request.on('close', () => events.delete(response)); return true;
    }
    if (url.pathname === '/__trace/status') {
      const source = url.searchParams.get('source') || 'review';
      try {
        const state = ensurePreview(source);
        const taskList = await tasks();
        if (source === 'review') {
          const signature = JSON.stringify(reviewTasks(taskList));
          if (state.taskSignature && state.taskSignature !== signature) state.changed();
          state.taskSignature = signature;
        }
        remoteState(); ciState();
        const pinnedId = url.searchParams.get('candidate');
        let pinnedCandidate = null;
        if (pinnedId) {
          if (!/^[a-f0-9-]+$/.test(pinnedId)) throw new Error('Invalid preview candidate');
          pinnedCandidate = await readJson(inside(root, `output/workbench/previews/${source}/${pinnedId}/candidate.json`));
          if (pinnedCandidate.source !== source || pinnedCandidate.id !== pinnedId) throw new Error('Preview candidate mismatch');
        }
        sendJson(response, { schema: 'trace-workbench/v1', root, preview: { source, status: state.status, revision: state.revision, candidate: state.candidate, error: state.error }, pinnedCandidate, tasks: taskList, git: await gitState(), ci, production: remote, productionDataset: await productionDataset(url.searchParams.get('key')) });
      } catch (error) { sendJson(response, { error: error.message }, 400); }
      return true;
    }
    const preview = /^\/__trace\/previews\/(review|project|(?:build|transport)-[a-z0-9-]+)\/([a-f0-9-]+)\/trace-company-product-metric-visualizer\/(.*)$/.exec(url.pathname);
    const dev = /^\/__trace\/dev\/(project|(?:build|transport)-[a-z0-9-]+)\/(.*)$/.exec(url.pathname);
    if (preview || dev) {
      const folder = preview ? inside(root, `output/workbench/previews/${preview[1]}/${preview[2]}/site`) : sourceRoot(dev[1]);
      const relative = decodeURIComponent((preview ? preview[3] : dev[2]) || 'index.html');
      if (relative.split('/').some((part) => part.startsWith('.')) || relative.includes('\\')) { sendJson(response, { error: 'Invalid viewer path' }, 400); return true; }
      const file = inside(folder, relative);
      if (!existsSync(file) || !(await stat(file)).isFile()) { response.writeHead(404); response.end('Not found'); return true; }
      response.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream', 'Cache-Control': preview ? 'public,max-age=31536000,immutable' : 'no-store' });
      createReadStream(file).pipe(response); return true;
    }
    return false;
  } });
  const keepAlive = setInterval(() => { for (const response of events) response.write(': keepalive\n\n'); }, 15000);
  await mkdir(path.join(root, 'output/local-view'), { recursive: true });
  await mkdir(path.join(root, 'output/local-view/builds'), { recursive: true });
  watchers.push(watch(path.join(root, 'output/local-view/builds'), notify));
  await writeFile(path.join(root, 'output/local-view/workbench.js'), `window.TRACE_WORKBENCH_HINT = ${JSON.stringify({ root, url: server.url })};\n`);
  return { ...server, close: async () => {
    closed = true;
    clearInterval(keepAlive);
    for (const timer of timers) clearTimeout(timer);
    for (const watcher of watchers) watcher.close();
    for (const response of events) response.end();
    await server.close();
    // A preview owns snapshot, site and receipt writes beyond its build callback.
    // Drain that entire transaction before callers remove the workspace.
    while (activeBuilds) await new Promise((resolve) => setTimeout(resolve, 20));
  } };
}
