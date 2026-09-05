#!/usr/bin/env node
import assert from 'node:assert/strict';
import path from 'node:path';
import os from 'node:os';
import { mkdtemp, mkdir, writeFile, copyFile, rm } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { chromium } from 'playwright';
import { startWorkbench } from './lib/workbench-server.mjs';
import { atomicJson } from './lib/workflow-files.mjs';
import { siteContentDigest } from './lib/site-release-identity.mjs';
import { rootDir } from './lib/project.mjs';

const root = await mkdtemp(path.join(os.tmpdir(), 'trace-workbench-browser-'));
const browser = await chromium.launch();
let server, active = 0, fail = false;
try {
  await mkdir(path.join(root, 'src'), { recursive: true }); await mkdir(path.join(root, 'scripts/templates'), { recursive: true });
  await copyFile(path.join(rootDir, 'scripts/templates/workbench.html'), path.join(root, 'scripts/templates/workbench.html'));
  await copyFile(path.join(rootDir, 'src/local-view-entry.js'), path.join(root, 'src/local-view-entry.js'));
  await writeFile(path.join(root, 'src/version.js'), '1');
  await writeFile(path.join(root, 'index.html'), '<!doctype html><script src="src/local-view-entry.js"></script><body><h1>Dev</h1></body>');
  const task = 'build-aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee', workspace = path.join(root, `output/builds/${task}/workspace`);
  await mkdir(workspace, { recursive: true }); await writeFile(path.join(workspace, 'index.html'), '<!doctype html><h1>Other task</h1>');
  await atomicJson(path.join(root, `output/builds/${task}/manifest.json`), { key: 'new-example', authoringRoot: `output/builds/${task}/workspace`, state: 'INTAKED' });
  server = await startWorkbench({ root, port: 0, readCi: async () => [], productionFetch: async (_url, options) => options?.method === 'HEAD' ? { ok: false, status: 404 } : { ok: true, json: async () => ({ schema: 'trace-site-release/v1', version: 'a'.repeat(64) }) }, build: async (_file, args) => {
    active++;
    try {
      if (fail) throw new Error('Fixture build failed');
      const site = args[args.indexOf('--out') + 1], version = 'b'.repeat(64);
      await mkdir(path.join(site, `releases/${version}`), { recursive: true });
      await writeFile(path.join(site, 'index.html'), '<!doctype html><title>Candidate</title><h1>Fixed candidate</h1>');
      await writeFile(path.join(site, `releases/${version}/app.js`), '// fixture');
      await atomicJson(path.join(site, 'site-release.json'), { schema: 'trace-site-release/v1', version, contentDigest: await siteContentDigest(site, version) });
    } finally { active--; }
  } });
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const first = await context.newPage(), second = await context.newPage(), errors = [];
  for (const page of [first, second]) page.on('pageerror', (error) => errors.push(error.message));
  // Exercise the real file launcher: it discovers only the matching root's service.
  await first.goto(pathToFileURL(path.join(root, 'index.html')).href);
  await first.waitForURL((url) => url.protocol === 'http:' && url.port === String(server.port));
  await first.frameLocator('#viewer').getByRole('heading', { name: 'Fixed candidate' }).waitFor();
  const pinned = new URL(first.url()).searchParams.get('candidate');
  await first.evaluate(() => { document.querySelector('#viewer').contentWindow.TraceViewSession = { capture: () => ({ traceLanguage: 'zh', traceTheme: 'dark', traceView: 'table', traceMetric: 'incomeStatement' }) }; });
  await second.goto(server.url + '?source=' + task);
  await second.frameLocator('#viewer').getByRole('heading', { name: 'Fixed candidate' }).waitFor();
  assert.equal(new URL(first.url()).searchParams.get('source'), 'project');
  assert.equal(new URL(first.url()).searchParams.get('candidate'), pinned);
  await writeFile(path.join(root, 'src/version.js'), '2');
  await first.locator('#notice').waitFor({ state: 'visible' });
  assert.equal(new URL(first.url()).searchParams.get('candidate'), pinned, 'a completed rebuild must not steal a pinned review');
  await first.getByRole('button', { name: '切换到新候选' }).click();
  assert.notEqual(new URL(first.url()).searchParams.get('candidate'), pinned);
  const replay = new URL(await first.locator('#viewer').getAttribute('src'));
  assert.equal(replay.searchParams.get('traceLanguage'), 'zh'); assert.equal(replay.searchParams.get('traceTheme'), 'dark'); assert.equal(replay.searchParams.get('traceView'), 'table');
  const fixedFrame = await first.locator('#viewer').getAttribute('src');
  fail = true; await writeFile(path.join(root, 'src/version.js'), '3');
  await first.waitForFunction(() => document.querySelector('#status').textContent.includes('构建失败'));
  assert.equal(await first.locator('#viewer').getAttribute('src'), fixedFrame);
  fail = false;
  await first.getByRole('button', { name: '开发', exact: true }).click();
  await first.frameLocator('#viewer').getByRole('heading', { name: 'Dev', exact: true }).waitFor();
  await writeFile(path.join(root, 'index.html'), '<!doctype html><h1>Dev updated</h1>');
  await first.frameLocator('#viewer').getByRole('heading', { name: 'Dev updated' }).waitFor();
  await second.getByRole('button', { name: '线上对照', exact: true }).click();
  await second.locator('#empty').filter({ hasText: '尚未上线' }).waitFor();
  assert.equal(await second.locator('#viewer').isVisible(), false, 'an unpublished dataset must not fall back to another online dataset');
  await first.setViewportSize({ width: 390, height: 844 });
  assert.equal(await first.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
  assert.deepEqual(errors, []);
  await context.close();
  console.log('Workbench browser verification passed: file launcher, independent tabs, pinned generations, failed-build retention, Dev reload, unpublished state, mobile layout');
} finally {
  await browser.close();
  if (server) await server.close();
  while (active) await new Promise((resolve) => setTimeout(resolve, 20));
  await rm(root, { recursive: true, force: true });
}
