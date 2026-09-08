#!/usr/bin/env node
import assert from 'node:assert/strict';
import path from 'node:path';
import os from 'node:os';
import { mkdtemp, mkdir, writeFile, readFile, copyFile, rm } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { chromium } from 'playwright';
import { startWorkbench } from './lib/workbench-server.mjs';
import { atomicJson, fileManifest, freezeSnapshot, copyFiles } from './lib/workflow-files.mjs';
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
  await writeFile(path.join(root, 'scripts/sync-index-datasets.mjs'), '// Fixture registration is already complete.');
  await writeFile(path.join(root, 'index.html'), '<!doctype html><script src="src/local-view-entry.js"></script><body><h1>Dev</h1></body>');
  await mkdir(path.join(root, 'data'), { recursive: true });
  // Shared-SSOT contributions must coexist inside one actual candidate frame.
  // Use the supported literal wrapper, as production authoring does.
  const ssot = (keys) => `(function (global) { global.REVENUE_METRIC_SSOT = ${JSON.stringify({ schemaVersion: 1, records: keys.map((key) => ({ key, company: key, value: 10 })) })}; })(window);`;
  await writeFile(path.join(root, 'data/revenue-metrics.js'), ssot(['existing']));
  const base = await freezeSnapshot({ root, ...await fileManifest(root) }, root);
  const task = 'build-aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee';
  async function addTask(id, key) {
    const directory = path.join(root, `output/builds/${id}/workspace`);
    await mkdir(directory, { recursive: true }); await copyFiles(base.root, directory, base.entries.map((entry) => entry.path));
    await writeFile(path.join(directory, 'data/revenue-metrics.js'), ssot(['existing', key]));
    await atomicJson(path.join(directory, 'output/workflow/base.json'), base);
    await atomicJson(path.join(root, `output/builds/${id}/manifest.json`), { key, authoringRoot: `output/builds/${id}/workspace`, state: 'AUTHORED', adapter: 'revenue-metric' });
    await atomicJson(path.join(root, `output/local-view/builds/${id}.json`), { buildId: id, key, revision: 'sha256:' + 'f'.repeat(64) });
  }
  await addTask(task, 'new-example');
  await addTask('build-bbbbbbbb-bbbb-cccc-dddd-eeeeeeeeeeee', 'second-example');
  server = await startWorkbench({ root, port: 0, readCi: async () => [], productionFetch: async (_url, options) => options?.method === 'HEAD' ? { ok: false, status: 404 } : { ok: true, json: async () => ({ schema: 'trace-site-release/v1', version: 'a'.repeat(64) }) }, build: async (_file, args, snapshot) => {
    active++;
    try {
      if (fail) throw new Error('Fixture build failed');
      // Reports may be regenerated during rendering without changing the
      // candidate's data. Such watched events must not starve publication of
      // the immutable preview.
      if (snapshot.includes(`${path.sep}review${path.sep}`)) {
        await writeFile(path.join(root, `output/builds/${task}/workspace/output/workflow/review.html`), `Report ${Date.now()}`);
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
      const site = args[args.indexOf('--out') + 1], version = 'b'.repeat(64);
      await mkdir(path.join(site, `releases/${version}`), { recursive: true });
      await writeFile(path.join(site, 'index.html'), '<!doctype html><title>Candidate</title><h1>Fixed candidate</h1><pre id="data"></pre><script>' + await readFile(path.join(snapshot, 'data/revenue-metrics.js'), 'utf8') + ';document.querySelector("#data").textContent=JSON.stringify(window.REVENUE_METRIC_SSOT);</script>');
      await writeFile(path.join(site, `releases/${version}/app.js`), '// fixture');
      await atomicJson(path.join(site, 'site-release.json'), { schema: 'trace-site-release/v1', version, contentDigest: await siteContentDigest(site, version) });
    } finally { active--; }
  } });
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const first = await context.newPage(), second = await context.newPage(), errors = [];
  const cpuRate = Number(process.env.TRACE_WORKBENCH_CPU_RATE || 1);
  if (cpuRate > 1) {
    for (const page of [first, second]) await (await context.newCDPSession(page)).send('Emulation.setCPUThrottlingRate', { rate: cpuRate });
  }
  for (const page of [first, second]) page.on('pageerror', (error) => errors.push(error.message));
  // Exercise the real file launcher: it discovers only the matching root's service.
  await first.goto(pathToFileURL(path.join(root, 'index.html')).href);
  await first.waitForURL((url) => url.protocol === 'http:' && url.port === String(server.port));
  await first.frameLocator('#viewer').getByRole('heading', { name: 'Fixed candidate' }).waitFor();
  const pinned = new URL(first.url()).searchParams.get('candidate');
  await first.evaluate(() => { document.querySelector('#viewer').contentWindow.TraceViewSession = { capture: () => ({ traceLanguage: 'zh', traceTheme: 'dark', traceView: 'table', traceMetric: 'incomeStatement' }) }; });
  await second.goto(server.url + '?source=' + task);
  await second.frameLocator('#viewer').getByRole('heading', { name: 'Fixed candidate' }).waitFor();
  assert.equal(new URL(first.url()).searchParams.get('source'), 'review');
  assert.equal(new URL(first.url()).searchParams.get('candidate'), pinned);
  assert.equal(await first.locator('aside').count(), 0, 'one-place review must not require a second environment sidebar');
  await first.locator('#queueSummary').filter({ hasText: '待验收 2 项' }).waitFor();
  const joined = await first.frameLocator('#viewer').locator('#data').textContent();
  assert.match(joined, /new-example/); assert.match(joined, /second-example/); assert.match(joined, /existing/);
  const joinedFrame = await first.locator('#viewer').getAttribute('src');
  await first.getByRole('button', { name: '下一项', exact: true }).click();
  await first.waitForURL((url) => url.hash === '#second-example');
  assert.equal(await first.locator('#viewer').getAttribute('src'), joinedFrame, 'next item changes the dataset in one frame, not the environment');
  await first.getByRole('button', { name: '上一项', exact: true }).click();
  await first.waitForURL((url) => url.hash === '#new-example');
  await first.locator('#viewer').evaluate((element) => {
    const child = element.contentWindow;
    child.history.replaceState(null, '', '#second-example');
    child.dispatchEvent(new child.Event('trace:selectionchange'));
  });
  await first.waitForURL((url) => url.hash === '#second-example');
  assert.equal(await first.locator('#reviewItem').inputValue(), 'second-example', 'company/period selection must update the review position immediately');
  // Explicit freeze is opt-in; ordinary tabs always follow successful saves.
  const frozen = await context.newPage();
  await frozen.goto(server.url + '?source=review&follow=0&candidate=' + pinned + '#new-example');
  await frozen.frameLocator('#viewer').getByRole('heading', { name: 'Fixed candidate' }).waitFor();
  await addTask('build-cccccccc-bbbb-cccc-dddd-eeeeeeeeeeee', 'third-example');
  await writeFile(path.join(root, 'src/version.js'), '2');
  await first.locator('#queueSummary').filter({ hasText: '待验收 3 项' }).waitFor();
  assert.notEqual(new URL(first.url()).searchParams.get('candidate'), pinned, 'default review automatically follows the latest candidate');
  assert.equal(new URL(first.url()).hash, '#second-example');
  assert.equal(await first.locator('#notice').isVisible(), false);
  await frozen.locator('#notice').waitFor({ state: 'visible' });
  assert.equal(new URL(frozen.url()).searchParams.get('candidate'), pinned, 'explicitly frozen tabs keep their candidate');
  assert.match(await frozen.locator('#queueSummary').textContent(), /2 项/);
  await frozen.reload();
  await frozen.frameLocator('#viewer').getByRole('heading', { name: 'Fixed candidate' }).waitFor();
  assert.match(await frozen.locator('#queueSummary').textContent(), /2 项/);
  await frozen.close();
  const replay = new URL(await first.locator('#viewer').getAttribute('src'));
  assert.equal(replay.searchParams.get('traceLanguage'), 'zh'); assert.equal(replay.searchParams.get('traceTheme'), 'dark'); assert.equal(replay.searchParams.get('traceView'), 'table');
  // A second edit in an already prepared draft must propagate without prepare,
  // root writes, a refresh click, or changing the selected company.
  const firstUpdate = new URL(first.url()).searchParams.get('candidate');
  await writeFile(path.join(root, `output/builds/${task}/workspace/data/revenue-metrics.js`), ssot(['existing', 'new-example']).replace('10', '11'));
  await first.waitForURL((url) => url.searchParams.get('candidate') !== firstUpdate);
  await first.frameLocator('#viewer').locator('#data').filter({ hasText: '11' }).waitFor();
  assert.equal(new URL(first.url()).hash, '#second-example');
  await first.locator('#versions > summary').click();
  await first.waitForFunction(() => document.querySelector('#details').textContent && JSON.parse(document.querySelector('#details').textContent).displayed?.id === new URL(location.href).searchParams.get('candidate'));
  await first.locator('#versions > summary').click();
  const missing = await context.newPage();
  await missing.goto(server.url + '?source=review&candidate=' + pinned + '&review=build-cccccccc-bbbb-cccc-dddd-eeeeeeeeeeee#third-example');
  await missing.locator('#reviewItem').filter({ has: missing.locator('option[value="third-example"]') }).waitFor();
  await missing.waitForURL((url) => url.searchParams.get('candidate') !== pinned && url.hash === '#third-example');
  await missing.close();
  const fixedFrame = await first.locator('#viewer').getAttribute('src');
  fail = true; await writeFile(path.join(root, 'src/version.js'), '3');
  await first.waitForFunction(() => document.querySelector('#status').textContent.includes('汇总失败'));
  assert.equal(await first.locator('#viewer').getAttribute('src'), fixedFrame);
  fail = false;
  await writeFile(path.join(root, 'src/version.js'), '4');
  await first.waitForFunction((previous) => document.querySelector('#viewer').src !== previous, fixedFrame);
  await first.frameLocator('#viewer').getByRole('heading', { name: 'Fixed candidate' }).waitFor();
  await first.locator('#more > summary').click();
  await first.locator('#sourceDetail').selectOption('project');
  await first.locator('#more > summary').click();
  await first.getByRole('button', { name: '开发 · 自动更新', exact: true }).click();
  await first.frameLocator('#viewer').getByRole('heading', { name: 'Dev', exact: true }).waitFor();
  await writeFile(path.join(root, 'index.html'), '<!doctype html><h1>Dev updated</h1>');
  await first.frameLocator('#viewer').getByRole('heading', { name: 'Dev updated' }).waitFor();
  await writeFile(path.join(root, 'scripts/templates/workbench.html'), (await readFile(path.join(root, 'scripts/templates/workbench.html'), 'utf8')).replace('<title>Trace · 统一验收</title>', '<title>Trace · 自动更新验证</title>'));
  await first.waitForFunction(() => document.title === 'Trace · 自动更新验证');
  await second.locator('#notice').waitFor({ state: 'visible' });
  await second.getByRole('button', { name: '线上对照', exact: true }).click();
  await second.locator('#empty').filter({ hasText: '尚未上线' }).waitFor();
  assert.equal(await second.locator('#viewer').isVisible(), false, 'an unpublished dataset must not fall back to another online dataset');
  await first.setViewportSize({ width: 390, height: 844 });
  assert.equal(await first.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
  assert.deepEqual(errors, []);
  await context.close();
  console.log('Workbench browser verification passed: file launcher, combined data, next/previous in one frame, automatic second-edit updates, explicit freeze/reload, preserved preferences, independent tabs, failed-build retention, Dev reload, unpublished state, mobile layout');
} finally {
  await browser.close();
  if (server) await server.close();
  while (active) await new Promise((resolve) => setTimeout(resolve, 20));
  await rm(root, { recursive: true, force: true });
}
