#!/usr/bin/env node
// Production-site performance + interaction gate. `pnpm build:site` owns
// `_site`; this verifier only serves that output and exercises it as a user
// would, so source-mode behavior cannot hide regressions in the deployed
// loading chain.
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';
import { startStaticServer } from './dev-server.mjs';
import { projectPath } from './lib/project.mjs';

const SITE_ROOT = projectPath('_site');
const FIRST_RENDER_TIMEOUT_MS = 15_000;
const IDLE_OBSERVATION_MS = 1_500;
const SCRIPT_TAG_BUDGET = 4;
const DEFER_BUNDLE_BUDGET = 3;
const BOOT_ADAPTER_REQUEST_BUDGET = 2;

function adapterPath(requestUrl) {
  try {
    const pathname = new URL(requestUrl).pathname;
    return /\/data\/datasets\/[^/]+\.js$/.test(pathname) ? pathname : '';
  } catch (error) {
    return '';
  }
}

function relativeRequestPath(requestUrl, origin) {
  try {
    const parsed = new URL(requestUrl);
    return parsed.origin === origin ? `${parsed.pathname}${parsed.search}` : parsed.href;
  } catch (error) {
    return requestUrl;
  }
}

function printSummary(metrics, origin) {
  const value = (item, fallback = 'not reached') => item ?? fallback;
  const duration = (item) => item == null ? 'not reached' : `${item}ms`;
  const bundlePaths = (metrics.bundlePaths || []).join(', ') || 'none';
  const bootAdapters = (metrics.bootAdapterPaths || []).map((item) => relativeRequestPath(item, origin)).join(', ') || 'none';
  console.log('\nproduction site performance budget');
  console.log(`  first Sankey SVG       ${duration(metrics.firstSvgMs)} (timeout ${FIRST_RENDER_TIMEOUT_MS}ms)`);
  console.log(`  defer bundles          ${value(metrics.deferBundles)} / ${DEFER_BUNDLE_BUDGET} (${bundlePaths})`);
  console.log(`  boot script DOM nodes  ${value(metrics.bootScriptNodes)} / <= ${SCRIPT_TAG_BUDGET}`);
  console.log(`  boot script requests   ${value(metrics.bootScriptRequests)} (${bootAdapters} adapter requests)`);
  console.log(`  adapters after idle    ${value(metrics.bootAdapterRequests)} / <= ${BOOT_ADAPTER_REQUEST_BUDGET}`);
  console.log(`  pending after ${IDLE_OBSERVATION_MS}ms   ${value(metrics.pendingAfterIdle)} / > 0`);
  console.log(`  company switch         ${value(metrics.switchLabel)} (${duration(metrics.switchMs)})`);
  console.log(`  lazy Chart runtime     ${value(metrics.chartRuntime)} (${duration(metrics.chartRuntimeMs)})`);
  console.log(`  page errors            ${value(metrics.pageErrors)} / 0`);
}

if (!existsSync(path.join(SITE_ROOT, 'index.html'))) {
  console.error('production site verification FAILED');
  console.error('  missing _site/index.html; run the production site build first');
  process.exit(1);
}

const failures = [];
const metrics = {};
let fatalError = null;
let server;
let browser;
let context;

try {
  // Chart.js is a non-Sankey feature chunk: it must be copied byte-for-byte,
  // kept out of the eagerly executed foundation, and discovered through the
  // small inline runtime-asset map in the production document.
  const chartSource = projectPath('vendor', 'chart.umd.min.js');
  const chartOutput = path.join(SITE_ROOT, 'assets', 'chart.js');
  const foundationOutput = path.join(SITE_ROOT, 'assets', 'foundation.js');
  const productionHtml = readFileSync(path.join(SITE_ROOT, 'index.html'), 'utf8');
  const fontStylesheet = path.join(SITE_ROOT, 'assets', 'fonts.css');
  if (/fonts\.(?:googleapis|gstatic)\.com/i.test(productionHtml)) {
    failures.push('production index still depends on Google Fonts');
  }
  if (!existsSync(fontStylesheet)) failures.push('missing self-hosted font stylesheet: assets/fonts.css');
  else if (!/font-display:\s*swap/.test(readFileSync(fontStylesheet, 'utf8'))) {
    failures.push('self-hosted font stylesheet does not use font-display: swap');
  }
  if (!existsSync(chartOutput)) failures.push('missing lazy Chart.js asset: assets/chart.js');
  else if (!readFileSync(chartOutput).equals(readFileSync(chartSource))) {
    failures.push('assets/chart.js is not a byte-for-byte copy of vendor/chart.umd.min.js');
  }
  if (!existsSync(foundationOutput)) failures.push('missing production foundation bundle: assets/foundation.js');
  else if (/Chart\.js v|chart\.umd\.min\.js/.test(readFileSync(foundationOutput, 'utf8'))) {
    failures.push('foundation bundle contains Chart.js; charts must stay lazy');
  }

  server = await startStaticServer({ root: SITE_ROOT, port: 0 });
  const origin = new URL(server.url).origin;
  browser = await chromium.launch();
  context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  const scriptRequests = [];
  const datasetRequests = [];
  const datasetResponses = [];
  const pageErrors = [];

  page.on('request', (request) => {
    if (request.resourceType() !== 'script') return;
    scriptRequests.push(request.url());
    const pathname = adapterPath(request.url());
    if (pathname) datasetRequests.push({ url: request.url(), pathname });
  });
  page.on('response', (response) => {
    const pathname = adapterPath(response.url());
    if (pathname) datasetResponses.push({ pathname, status: response.status(), ok: response.ok() });
  });
  page.on('pageerror', (error) => pageErrors.push(String(error)));

  const navigationStartedAt = Date.now();
  await page.goto(server.url, { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('#chart svg', { timeout: FIRST_RENDER_TIMEOUT_MS });
  metrics.firstSvgMs = Date.now() - navigationStartedAt;

  const bootState = await page.evaluate(() => {
    const externalScripts = [...document.querySelectorAll('script[src]')];
    const deferScripts = externalScripts.filter((script) => script.hasAttribute('defer'));
    const current = typeof currentRecord === 'function' ? currentRecord() : null;
    return {
      currentKey: current?.dataset?.key || '',
      currentCompany: current?.company || '',
      externalScriptCount: externalScripts.length,
      deferScriptCount: deferScripts.length,
      deferPaths: deferScripts.map((script) => new URL(script.src, location.href).pathname),
      hasRegistry: Boolean(window.TraceDatasetRegistry),
      chartAsset: window.__TRACE_RUNTIME_ASSETS__?.chart || '',
      nodeCount: document.querySelectorAll('#chart svg .sankey-node').length,
    };
  });
  metrics.deferBundles = bootState.deferScriptCount;
  metrics.bundlePaths = bootState.deferPaths;
  metrics.bootScriptRequests = scriptRequests.length;

  if (bootState.deferScriptCount !== DEFER_BUNDLE_BUDGET) {
    failures.push(`expected exactly ${DEFER_BUNDLE_BUDGET} deferred production bundles, got ${bootState.deferScriptCount}`);
  }
  if (!bootState.hasRegistry) failures.push('TraceDatasetRegistry is unavailable in the production build');
  if (!bootState.currentKey || !bootState.currentCompany) failures.push('default boot has no active dataset/company');
  if (!bootState.nodeCount) failures.push('default Sankey SVG contains no nodes');
  if (bootState.chartAsset !== 'assets/chart.js') {
    failures.push(`runtime Chart.js asset should be assets/chart.js, got ${bootState.chartAsset || 'none'}`);
  }
  if (scriptRequests.some((requestUrl) => new URL(requestUrl).pathname.endsWith('/assets/chart.js'))) {
    failures.push('Chart.js was requested during the default Sankey boot');
  }

  // Give idle callbacks enough time to expose an eager background sweep.
  // The deployed app must leave the catalog mostly as manifest stubs.
  await page.waitForTimeout(IDLE_OBSERVATION_MS);
  const idleState = await page.evaluate(() => ({
    pending: window.TraceDatasetRegistry?.pendingKeys?.().length ?? -1,
    externalScriptCount: document.querySelectorAll('script[src]').length,
  }));
  metrics.pendingAfterIdle = idleState.pending;
  metrics.bootScriptNodes = idleState.externalScriptCount;
  metrics.bootAdapterRequests = datasetRequests.length;
  metrics.bootAdapterPaths = datasetRequests.map((request) => request.url);

  if (idleState.externalScriptCount > SCRIPT_TAG_BUDGET) {
    failures.push(`default boot left ${idleState.externalScriptCount} external script nodes (budget ${SCRIPT_TAG_BUDGET})`);
  }
  if (idleState.pending <= 0) {
    failures.push(`idle loading exhausted the adapter manifest; expected pendingKeys() > 0 after ${IDLE_OBSERVATION_MS}ms`);
  }
  if (datasetRequests.length > BOOT_ADAPTER_REQUEST_BUDGET) {
    failures.push(`default boot requested ${datasetRequests.length} dataset adapters (budget ${BOOT_ADAPTER_REQUEST_BUDGET})`);
  }

  // Choose the record that the normal company-list click will activate, and
  // require it to still be pending. This proves navigation performs a fresh
  // on-demand adapter request rather than rendering an already hydrated row.
  const target = await page.evaluate(() => {
    const registry = window.TraceDatasetRegistry;
    const active = typeof currentRecord === 'function' ? currentRecord() : null;
    if (!registry || !active || typeof groups === 'undefined') return null;
    for (const group of groups) {
      if (!group || group.company === active.company || !group.records?.length) continue;
      const ordered = typeof sortedRecords === 'function' ? sortedRecords(group) : group.records;
      const record = ordered[0];
      const key = record?.dataset?.key;
      if (!key || registry.isLoaded(key)) continue;
      const src = registry.srcForKey(key);
      if (!src) continue;
      const button = [...document.querySelectorAll('#companyList .company-item')]
        .find((item) => item.dataset.company === group.company);
      if (!button) continue;
      return { company: group.company, key, src };
    }
    return null;
  });

  if (!target) {
    failures.push('could not find another company with a pending dataset adapter');
  } else {
    const expectedPath = new URL(target.src, server.url).pathname;
    const requestsBeforeSwitch = datasetRequests.length;
    const switchStartedAt = Date.now();
    const clicked = await page.evaluate((company) => {
      const button = [...document.querySelectorAll('#companyList .company-item')]
        .find((item) => item.dataset.company === company);
      if (!button) return false;
      button.click();
      return true;
    }, target.company);
    if (!clicked) failures.push(`company button disappeared before switching to ${target.company}`);
    else {
      await page.waitForFunction((key) => {
        const record = typeof currentRecord === 'function' ? currentRecord() : null;
        return record?.dataset?.key === key
          && window.TraceDatasetRegistry?.isLoaded?.(key)
          && !document.querySelector('.chart-loading')
          && document.querySelectorAll('#chart svg .sankey-node').length > 0;
      }, target.key, { timeout: FIRST_RENDER_TIMEOUT_MS });
    }
    metrics.switchMs = Date.now() - switchStartedAt;
    metrics.switchLabel = `${bootState.currentCompany} -> ${target.company} (${target.key})`;

    const switchRequests = datasetRequests.slice(requestsBeforeSwitch);
    if (!switchRequests.some((request) => request.pathname === expectedPath)) {
      failures.push(`switch to ${target.company} did not request ${expectedPath}`);
    }
    const response = [...datasetResponses].reverse().find((item) => item.pathname === expectedPath);
    if (!response?.ok) {
      failures.push(`adapter response for ${expectedPath} was ${response ? response.status : 'not observed'}`);
    }
  }

  // Default Sankey must not pay for Chart.js. The first Trend interaction
  // must fetch the deferred runtime exactly once and finish rendering.
  const chartRequestsBefore = scriptRequests.filter(
    (requestUrl) => new URL(requestUrl).pathname.endsWith('/assets/chart.js')
  ).length;
  const chartStartedAt = Date.now();
  const revenueTarget = await page.evaluate(() => {
    const company = typeof revenueGroups === 'undefined' ? '' : revenueGroups[0]?.company;
    const group = company && typeof groups !== 'undefined'
      ? groups.find((item) => item.company === company)
      : null;
    if (!group || typeof selectCompanyGroup !== 'function' || typeof setMetricMode !== 'function') return '';
    selectCompanyGroup(group);
    setMetricMode('revenue');
    return company;
  });
  if (!revenueTarget) {
    failures.push('could not find a revenue metric target for lazy Chart.js verification');
  } else {
    await page.waitForFunction(() => (
      Boolean(window.Chart)
      && !document.getElementById('trendView')?.hidden
      && Boolean(document.querySelector('#trendChart canvas'))
    ), undefined, { timeout: FIRST_RENDER_TIMEOUT_MS });
    const chartRequestsAfter = scriptRequests.filter(
      (requestUrl) => new URL(requestUrl).pathname.endsWith('/assets/chart.js')
    ).length;
    const chartRequestDelta = chartRequestsAfter - chartRequestsBefore;
    metrics.chartRuntimeMs = Date.now() - chartStartedAt;
    metrics.chartRuntime = `${revenueTarget}, ${chartRequestDelta} request`;
    if (chartRequestDelta !== 1) {
      failures.push(`first Trend interaction requested Chart.js ${chartRequestDelta} times (expected 1)`);
    }
  }

  // Allow promise continuations triggered by the final draw to report any
  // asynchronous exception before the error budget is evaluated.
  await page.waitForTimeout(100);
  metrics.pageErrors = pageErrors.length;
  if (pageErrors.length) failures.push(`page errors: ${pageErrors.join(' | ')}`);
  printSummary(metrics, origin);
} catch (error) {
  fatalError = error;
  printSummary(metrics, server ? new URL(server.url).origin : '');
} finally {
  if (context) await context.close();
  if (browser) await browser.close();
  if (server) await server.close();
}

if (fatalError) failures.unshift(fatalError.message);
if (failures.length) {
  console.error('\nproduction site verification FAILED');
  failures.forEach((failure) => console.error(`  - ${failure}`));
  process.exit(1);
}

console.log('\nproduction site verification passed');
