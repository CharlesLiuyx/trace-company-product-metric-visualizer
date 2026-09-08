import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import os from 'node:os';
import { mkdtemp, mkdir, readFile, writeFile, copyFile, rm, readdir } from 'node:fs/promises';
import { startOrReuseWorkbench, findWorkbench } from '../scripts/lib/workbench-discovery.mjs';
import { startWorkbench } from '../scripts/lib/workbench-server.mjs';
import { atomicJson } from '../scripts/lib/workflow-files.mjs';
import { siteContentDigest } from '../scripts/lib/site-release-identity.mjs';
const version = 'd'.repeat(64);
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function until(work, predicate) { for (let i = 0; i < 150; i++) { const result = await work(); if (predicate(result)) return result; await sleep(40); } throw new Error('Workbench condition timed out'); }
test('closing the workbench drains an in-flight preview before workspace cleanup', async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'trace-workbench-close-'));
  await writeFile(path.join(root, 'index.html'), '<html>fixture</html>');
  let enter, release;
  const entered = new Promise((resolve) => { enter = resolve; });
  const blocked = new Promise((resolve) => { release = resolve; });
  const server = await startWorkbench({ root, port: 0, readCi: async () => [], productionFetch: async () => { throw new Error('offline'); }, build: async () => {
    enter(); await blocked; throw new Error('fixture build ended');
  } });
  try {
    await fetch(server.url + '__trace/status?source=project');
    await entered;
    let closed = false;
    const closing = server.close().then(() => { closed = true; });
    await sleep(40);
    assert.equal(closed, false, 'close must wait for the complete preview transaction');
    release(); await closing;
    await rm(root, { recursive: true, force: true });
  } finally {
    release(); await server.close(); await rm(root, { recursive: true, force: true });
  }
});
test('workbench publishes complete immutable generations, reports failed builds, and limits concurrent work', async (t) => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'trace-workbench-'));
  await mkdir(path.join(root, 'scripts/templates'), { recursive: true });
  await copyFile('scripts/templates/workbench.html', path.join(root, 'scripts/templates/workbench.html'));
  await mkdir(path.join(root, 'src')); await writeFile(path.join(root, 'src/app.js'), 'first'); await writeFile(path.join(root, 'index.html'), '<html>fixture</html>');
  const sources = ['project', 'build-aaaa', 'build-bbbb'];
  for (const source of sources.slice(1)) {
    const workspace = path.join(root, `output/builds/${source}/workspace`);
    await mkdir(path.join(workspace, 'src'), { recursive: true });
    await writeFile(path.join(workspace, 'src/app.js'), source); await writeFile(path.join(workspace, 'index.html'), '<html>fixture</html>');
    await atomicJson(path.join(root, `output/builds/${source}/manifest.json`), { key: source, authoringRoot: `output/builds/${source}/workspace`, state: 'INTAKED' });
  }
  let active = 0, maxActive = 0, fail = false, buildCount = 0, earlyTimerDelivered = false;
  const server = await startWorkbench({ root, port: 0, readCi: async () => [],
    scheduleDebounce: (callback, delay) => {
      // Force a timer callback before the wall-clock deadline. Real timers can
      // arrive early when their monotonic clock and Date.now() straddle a tick.
      if (!earlyTimerDelivered) { earlyTimerDelivered = true; return setTimeout(callback, 1); }
      return setTimeout(callback, delay);
    }, productionFetch: async () => { throw new Error('simulated offline'); }, build: async (_file, args, snapshot) => {
    active++; buildCount++; maxActive = Math.max(maxActive, active);
    try {
      await sleep(80);
      const target = args[args.indexOf('--out') + 1];
      await mkdir(path.join(target, `releases/${version}`), { recursive: true });
      await writeFile(path.join(target, 'index.html'), await readFile(path.join(snapshot, 'src/app.js')));
      if (fail) throw new Error('simulated invalid source');
      await writeFile(path.join(target, `releases/${version}/app.js`), 'complete');
      await atomicJson(path.join(target, 'site-release.json'), { schema: 'trace-site-release/v1', version, contentDigest: await siteContentDigest(target, version) });
    } finally { active--; }
  } });
  t.after(async () => { await until(async () => active, (value) => value === 0); await server.close(); await rm(root, { recursive: true, force: true }); });
  const status = (source = 'project') => fetch(server.url + '__trace/status?source=' + source).then((response) => response.json());
  await Promise.all(sources.map(status));
  const initial = await until(() => status(), (state) => state.preview.status === 'ready');
  await Promise.all(sources.slice(1).map((source) => until(() => status(source), (state) => state.preview.status === 'ready')));
  assert.equal(maxActive, 2); assert.equal(initial.production.status, 'unavailable');
  const first = initial.preview.candidate;
  assert.equal(await fetch(server.url + first.url.slice(1)).then((response) => response.text()), 'first');
  await writeFile(path.join(root, 'src/app.js'), 'second');
  const updated = await until(() => status(), (state) => state.preview.status === 'ready' && state.preview.candidate.id !== first.id);
  assert.equal(earlyTimerDelivered, true, 'the early debounce callback must still deliver the update');
  assert.equal(await fetch(server.url + first.url.slice(1)).then((response) => response.text()), 'first');
  assert.equal(await fetch(server.url + updated.preview.candidate.url.slice(1)).then((response) => response.text()), 'second');
  const countBeforeRewrite = buildCount, revisionBeforeRewrite = updated.preview.revision;
  await writeFile(path.join(root, 'src/app.js'), 'second');
  await until(() => status(), (state) => state.preview.revision > revisionBeforeRewrite && state.preview.status === 'ready');
  assert.equal(buildCount, countBeforeRewrite, 'same-byte saves must not rebuild or reload the page');
  fail = true; await writeFile(path.join(root, 'src/app.js'), 'broken');
  const failed = await until(() => status(), (state) => state.preview.status === 'failed');
  assert.equal(failed.preview.candidate.id, updated.preview.candidate.id); assert.match(failed.preview.error, /invalid source/);
  const previewRoot = path.join(root, 'output/workbench/previews/project');
  await until(() => readdir(previewRoot), (names) => names.length === 3);
  assert.deepEqual((await readdir(previewRoot)).sort(), [first.id, updated.preview.candidate.id, 'current.json'].sort(), 'failed site is removed; both pinned successful sites survive');
  assert.equal((await fetch(server.url + '__trace/status', { method: 'POST' })).status, 405);
  assert.equal((await fetch(server.url + '.git/config')).status, 403);
  assert.equal((await fetch(server.url + '__trace/status?source=../../private')).status, 400);
  await server.close();
  for (const id of [first.id, updated.preview.candidate.id]) {
    assert.deepEqual(await readdir(path.join(previewRoot, id)), ['candidate.json'], 'shutdown retains only candidate metadata');
  }
});

test('slow production checks never block local status and concurrent requests share the query', async (t) => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'trace-workbench-remote-'));
  await writeFile(path.join(root, 'index.html'), '<html>fixture</html>');
  let release, heads = 0;
  const blocked = new Promise((resolve) => { release = resolve; });
  const server = await startWorkbench({ root, port: 0, readCi: async () => [], build: async () => { throw new Error('fixture'); },
    productionFetch: async (_url, options) => {
      if (options.method === 'HEAD') { heads++; await blocked; return { ok: false, status: 404 }; }
      return { ok: true, json: async () => ({ schema: 'trace-site-release/v1', version }) };
    },
  });
  t.after(async () => { release(); await server.close(); await rm(root, { recursive: true, force: true }); });
  await fetch(server.url + '__trace/status?source=project');
  const status = () => fetch(server.url + '__trace/status?source=project&key=alpha', { signal: AbortSignal.timeout(1500) }).then((r) => r.json());
  const results = await Promise.all(Array.from({ length: 5 }, status));
  assert.equal(heads, 1);
  assert.ok(results.every((result) => result.productionDataset.status === 'unknown'));
  release();
  const complete = await until(status, (result) => result.productionDataset.status === 'not-published');
  assert.equal(complete.productionDataset.key, 'alpha');
});

test('concurrent CLI starts reuse one checkout workbench even across requested ports', async (t) => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'trace-workbench-reuse-'));
  let server, starts = 0;
  t.after(async () => { await server?.close(); await rm(root, { recursive: true, force: true }); });
  const start = async () => {
    starts++;
    server = await startWorkbench({ root, port: 0, readCi: async () => [], productionFetch: async () => { throw new Error('offline'); } });
    return server;
  };
  const [first, second] = await Promise.all([startOrReuseWorkbench(root, 0, start), startOrReuseWorkbench(root, 1, start)]);
  assert.equal(starts, 1);
  assert.equal(first.url, second.url);
  assert.equal((await findWorkbench(root, 2)).url, first.url);
  assert.match(await readFile(path.join(root, 'output/local-view/workbench.js'), 'utf8'), new RegExp(first.url.replaceAll('.', '\\.')));
  await server.close();
  assert.equal(await findWorkbench(root, 0), null);
});
