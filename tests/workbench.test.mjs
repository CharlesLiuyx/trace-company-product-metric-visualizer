import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import os from 'node:os';
import { mkdtemp, mkdir, readFile, writeFile, copyFile, rm } from 'node:fs/promises';
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
  let active = 0, maxActive = 0, fail = false;
  const server = await startWorkbench({ root, port: 0, readCi: async () => [], productionFetch: async () => { throw new Error('simulated offline'); }, build: async (_file, args, snapshot) => {
    active++; maxActive = Math.max(maxActive, active);
    try {
      await sleep(80);
      if (fail) throw new Error('simulated invalid source');
      const target = args[args.indexOf('--out') + 1];
      await mkdir(path.join(target, `releases/${version}`), { recursive: true });
      await writeFile(path.join(target, 'index.html'), await readFile(path.join(snapshot, 'src/app.js')));
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
  assert.equal(await fetch(server.url + first.url.slice(1)).then((response) => response.text()), 'first');
  assert.equal(await fetch(server.url + updated.preview.candidate.url.slice(1)).then((response) => response.text()), 'second');
  fail = true; await writeFile(path.join(root, 'src/app.js'), 'broken');
  const failed = await until(() => status(), (state) => state.preview.status === 'failed');
  assert.equal(failed.preview.candidate.id, updated.preview.candidate.id); assert.match(failed.preview.error, /invalid source/);
  assert.equal((await fetch(server.url + '__trace/status', { method: 'POST' })).status, 405);
  assert.equal((await fetch(server.url + '.git/config')).status, 403);
  assert.equal((await fetch(server.url + '__trace/status?source=../../private')).status, 400);
});
