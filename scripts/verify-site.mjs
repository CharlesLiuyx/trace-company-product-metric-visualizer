#!/usr/bin/env node
// Production-site performance + interaction gate. `pnpm build:site` owns
// `_site`; this verifier only serves that output and exercises it as a user
// would, so source-mode behavior cannot hide regressions in the deployed
// loading chain.
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { gzipSync } from 'node:zlib';
import { verifySplitData } from './lib/site-data-browser.mjs';
import { chromium } from 'playwright';
import { startStaticServer } from './dev-server.mjs';
import { PROJECT_FONT_FAMILIES, fontFileName } from './lib/local-fonts.mjs';
import { assert, projectPath } from './lib/project.mjs';
import {
  assertComparisonMoneyScale,
  comparisonMoneyScaleSnapshot,
  selectAllIncomeStatementPeriods,
  waitForCalibratedComparison,
} from './lib/comparison-scale-browser.mjs';
import {
  assertProjectFontsLoaded,
  assertTypographyAudit,
  typographyAudit,
} from './lib/render-harness.mjs';

const SITE_ROOT = projectPath('_site');
const FIRST_RENDER_TIMEOUT_MS = 15_000;
const IDLE_OBSERVATION_MS = 1_500;
const SCRIPT_TAG_BUDGET = 4;
const DEFER_BUNDLE_BUDGET = 3;

function primaryFontFamily(value) {
  return String(value || '').split(',')[0].trim().replace(/^(['"])(.*)\1$/, '$2');
}

function expectedFontFaces() {
  return PROJECT_FONT_FAMILIES.flatMap(({ family, slug, weights }) => weights.map((weight) => ({
    family,
    weight,
    display: 'swap',
    src: `./fonts/${fontFileName(slug, weight)}`,
  })));
}

function parseFontFaces(css) {
  return [...css.matchAll(/@font-face\s*\{([^}]+)\}/g)].map((match) => {
    const block = match[1];
    const family = /font-family:\s*(['"])(.*?)\1/.exec(block)?.[2] || '';
    const weight = Number(/font-weight:\s*(\d+)/.exec(block)?.[1]);
    const display = /font-display:\s*([^;\s]+)/.exec(block)?.[1] || '';
    const src = /src:\s*url\((['"]?)([^'")]+)\1\)/.exec(block)?.[2] || '';
    return { family, weight, display, src };
  });
}

function sortedInventory(items) {
  return [...items].sort((a, b) => (
    `${a.family}\0${a.weight}\0${a.src}`.localeCompare(`${b.family}\0${b.weight}\0${b.src}`)
  ));
}

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
  console.log(`  adapters after idle    ${value(metrics.bootAdapterRequests)} / <= ${value(metrics.bootAdapterBudget)} (active company scope)`);
  console.log(`  pending after ${IDLE_OBSERVATION_MS}ms   ${value(metrics.pendingAfterIdle)} / > 0`);
  console.log(`  company switch         ${value(metrics.switchLabel)} (${duration(metrics.switchMs)})`);
  console.log(`  lazy Chart runtime     ${value(metrics.chartRuntime)} (${duration(metrics.chartRuntimeMs)})`);
  console.log(`  all-period scale       ${value(metrics.comparisonScale)}`);
  console.log(`  project font faces     ${value(metrics.fontFaces)}`);
  console.log(`  typography roles       ${value(metrics.typographyRoles)}`);
  console.log(`  Sankey typography      ${value(metrics.sankeyTypography)}`);
  console.log(`  page errors            ${value(metrics.pageErrors)} / 0`);
}

async function verifyLegacyUpgrade(browser, url, version) {
  // The retired entry points must upgrade a cached bootstrap and an open
  // pre-versioned tab, without ever executing an Adapter against old data.
  for (const legacyPath of ['assets/foundation.js', 'assets/catalog.js', 'assets/app.js', 'assets/chart.js', 'data/datasets/salesforce-q1-fy27.js']) {
    const context = await browser.newContext();
    try {
      const page = await context.newPage();
      const target = new URL(url);
      target.searchParams.set('existing', 'keep');
      target.hash = 'salesforce-q1-fy27';
      let documents = 0;
      const errors = [];
      page.on('pageerror', (error) => errors.push(String(error)));
      await page.route('**/*', async (route) => {
        if (route.request().isNavigationRequest() && ++documents === 1) {
          const script = `<script src="${legacyPath}"></script>`;
          // Bootstrap scripts load immediately; an already-open tab requests
          // its missing Adapter/Chart only when the user retries or switches.
          const delayed = legacyPath.includes('/datasets/') || legacyPath.endsWith('/chart.js');
          const body = delayed
            ? `<button id="retry" onclick="const script=document.createElement('script');script.src='${legacyPath}';document.head.append(script)">Retry</button>`
            : script;
          await route.fulfill({ contentType: 'text/html', body: `<!doctype html><html><head></head><body>${body}</body></html>` });
        } else await route.continue();
      });
      await page.goto(target.href, { waitUntil: 'commit' });
      if (legacyPath.includes('/datasets/') || legacyPath.endsWith('/chart.js')) await page.locator('#retry').click();
      await page.waitForURL((current) => current.searchParams.get('trace-runtime') === version);
      await page.waitForSelector('#chart svg .sankey-node', { timeout: FIRST_RENDER_TIMEOUT_MS });
      const upgraded = new URL(page.url());
      assert(upgraded.searchParams.get('existing') === 'keep', 'legacy upgrade dropped query parameters');
      assert(upgraded.hash === target.hash, 'legacy upgrade dropped the dataset hash');
      assert(await page.locator('#metricLibraryOpen').count() === 0, 'legacy upgrade restored the metric toolbar entry');
      assert(documents === 2, `legacy upgrade must navigate exactly once: ${legacyPath} (${documents})`);
      assert(!errors.length, `legacy upgrade page errors: ${errors.join(' | ')}`);
    } finally { await context.close(); }
  }
  console.log('  legacy upgrade: cached bootstrap and open-tab Adapter/Chart requests recover to the current Sankey');
}

if (!existsSync(path.join(SITE_ROOT, 'index.html'))) {
  console.error('production site verification FAILED');
  console.error('  missing _site/index.html; run the production site build first');
  process.exit(1);
}

const failures = [];
const metrics = {};
const release = JSON.parse(readFileSync(path.join(SITE_ROOT, 'site-release.json'), 'utf8'));
assert(/^releases\/[a-f0-9]{64}$/.test(release.prefix), 'invalid versioned runtime prefix');
const runtimeRoot = path.join(SITE_ROOT, release.prefix);
let fatalError = null;
let server;
let browser;
let context;

try {
  // Chart.js is a non-Sankey feature chunk: it must be copied byte-for-byte,
  // kept out of the eagerly executed foundation, and discovered through the
  // small inline runtime-asset map in the production document.
  const chartSource = projectPath('vendor', 'chart.umd.min.js');
  const chartOutput = path.join(runtimeRoot, 'assets', 'chart.js');
  const foundationOutput = path.join(runtimeRoot, 'assets', 'foundation.js');
  const productionHtml = readFileSync(path.join(SITE_ROOT, 'index.html'), 'utf8');
  const fontStylesheet = path.join(runtimeRoot, 'assets', 'fonts.css');
  const fontDir = path.join(runtimeRoot, 'assets', 'fonts');
  const expectedFaces = expectedFontFaces();
  const expectedFiles = expectedFaces.map((face) => path.basename(face.src)).sort();
  const expectedPreloads = PROJECT_FONT_FAMILIES.map(({ slug, weights }) => (
    `${release.prefix}/assets/fonts/${fontFileName(slug, weights.includes(400) ? 400 : weights[0])}`
  )).sort();
  if (/fonts\.(?:googleapis|gstatic)\.com/i.test(productionHtml)) {
    failures.push('production index still depends on Google Fonts');
  }
  const actualPreloads = [...productionHtml.matchAll(
    /<link\b(?=[^>]*\brel="preload")(?=[^>]*\bas="font")[^>]*\bhref="([^"]+\.woff2)"[^>]*>/g
  )].map((match) => match[1]).sort();
  if (JSON.stringify(actualPreloads) !== JSON.stringify(expectedPreloads)) {
    failures.push(`font preloads do not match the project manifest: ${JSON.stringify(actualPreloads)}`);
  }
  if (!existsSync(fontStylesheet)) {
    failures.push('missing self-hosted font stylesheet: assets/fonts.css');
  } else {
    const actualFaces = parseFontFaces(readFileSync(fontStylesheet, 'utf8'));
    if (JSON.stringify(sortedInventory(actualFaces)) !== JSON.stringify(sortedInventory(expectedFaces))) {
      failures.push(`self-hosted font faces do not match the project manifest: ${JSON.stringify(actualFaces)}`);
    }
  }
  if (!existsSync(fontDir)) {
    failures.push('missing self-hosted font directory: assets/fonts');
  } else {
    const actualFiles = readdirSync(fontDir).filter((file) => file.endsWith('.woff2')).sort();
    if (JSON.stringify(actualFiles) !== JSON.stringify(expectedFiles)) {
      failures.push(`self-hosted font files do not match the project manifest: ${JSON.stringify(actualFiles)}`);
    }
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
  assert(await page.locator('#metricLibraryOpen').count() === 0, 'production must not expose the metric-library toolbar entry');
  metrics.firstSvgMs = Date.now() - navigationStartedAt;
  const fontStatus = await assertProjectFontsLoaded(page);
  metrics.fontFaces = `${fontStatus.faces.filter((face) => face.status === 'loaded').length}/${expectedFaces.length} loaded`;
  const activeTypographyIdentity = await page.evaluate(() => ({
    dataset:
      (typeof currentDataset === 'function' && currentDataset()?.key) ||
      (typeof currentRecord === 'function' && currentRecord()?.dataset?.key) ||
      '',
    language: (typeof state !== 'undefined' && state?.language) || 'en',
  }));
  const sankeyTypography = await typographyAudit(page, activeTypographyIdentity);
  assertTypographyAudit(sankeyTypography);
  metrics.sankeyTypography =
    `${sankeyTypography.status}, product=${sankeyTypography.productTextCount}, ` +
    `brand=${sankeyTypography.brandTextCount}`;

  const typographyState = await page.evaluate(() => {
    const font = (selector) => {
      const element = document.querySelector(selector);
      return element ? getComputedStyle(element).fontFamily : '';
    };
    return {
      toolbar: font('.toolbar'),
      sidebar: font('#datasetPanel'),
      actionbar: font('.view-actionbar'),
      sankeyView: font('#sankeyView'),
      chartTheme: chartTheme().fontFamily,
    };
  });
  const expectedTypography = {
    toolbar: 'Montserrat',
    sidebar: 'Montserrat',
    actionbar: 'Montserrat',
    sankeyView: 'Noto Sans',
    chartTheme: 'Noto Sans',
  };
  for (const [role, expected] of Object.entries(expectedTypography)) {
    if (primaryFontFamily(typographyState[role]) !== expected) {
      failures.push(`production ${role} expected ${expected}, got ${typographyState[role] || 'no computed font'}`);
    }
  }
  metrics.typographyRoles = Object.entries(typographyState)
    .map(([role, family]) => `${role}=${primaryFontFamily(family) || 'missing'}`)
    .join(', ');

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
  if (bootState.chartAsset !== `${release.prefix}/assets/chart.js`) {
    failures.push(`runtime Chart.js asset should be assets/chart.js, got ${bootState.chartAsset || 'none'}`);
  }
  if (scriptRequests.some((requestUrl) => new URL(requestUrl).pathname.endsWith('/assets/chart.js'))) {
    failures.push('Chart.js was requested during the default Sankey boot');
  }

  // Give idle callbacks enough time to expose an eager background sweep.
  // Idle preloading may hydrate the active company's complete adapter set —
  // and only it — so the catalog at large must remain manifest stubs.
  await page.waitForTimeout(IDLE_OBSERVATION_MS);
  const idleState = await page.evaluate(() => {
    const registry = window.TraceDatasetRegistry;
    const active = typeof currentRecord === 'function' ? currentRecord() : null;
    const activeCompanyAdapterPaths = registry && active && typeof records !== 'undefined'
      ? records
          .filter((record) => record.company === active.company)
          .map((record) => `/${registry.srcForKey(record.dataset.key)}`)
      : [];
    return {
      pending: registry?.pendingKeys?.().length ?? -1,
      externalScriptCount: document.querySelectorAll('script[src]').length,
      activeCompanyAdapterPaths,
      companyDetails: performance.getEntriesByType('resource').filter((entry) => /\/data\/companies\/.*\.json$/.test(entry.name)).map((entry) => new URL(entry.name).pathname),
      tableDetails: performance.getEntriesByType('resource').filter((entry) => /\/data\/tables\/.*\.json$/.test(entry.name)).map((entry) => entry.name),
      fullFinancialRecords: financialRecords.filter((record) => !record.__runtimeSummary).map((record) => record.key),
    };
  });
  metrics.pendingAfterIdle = idleState.pending;
  metrics.bootScriptNodes = idleState.externalScriptCount;
  metrics.bootAdapterRequests = datasetRequests.length;
  metrics.bootAdapterBudget = idleState.activeCompanyAdapterPaths.length;
  metrics.bootAdapterPaths = datasetRequests.map((request) => request.url);
  assert(idleState.companyDetails.length === 1, 'default boot must load exactly one company detail');
  assert(idleState.tableDetails.length === 0, 'default boot must not load global table details');
  const initialCatalog = readFileSync(path.join(runtimeRoot, 'assets/catalog.js'));
  const initialDetails = idleState.companyDetails.map((pathname) => readFileSync(path.join(SITE_ROOT, pathname)));
  const bootstrapGzip = [initialCatalog, ...initialDetails].reduce((sum, bytes) => sum + gzipSync(bytes).length, 0);
  assert(bootstrapGzip <= 150 * 1024, `bootstrap data gzip budget exceeded: ${bootstrapGzip} bytes / 150 KiB`);
  assert(initialCatalog.length <= 1024 * 1024, `bootstrap catalog exceeds 1 MiB: ${initialCatalog.length}`);
  console.log(`  bootstrap data: ${(bootstrapGzip / 1024).toFixed(1)} KiB gzip (budget 150 KiB)`);

  if (idleState.externalScriptCount > SCRIPT_TAG_BUDGET) {
    failures.push(`default boot left ${idleState.externalScriptCount} external script nodes (budget ${SCRIPT_TAG_BUDGET})`);
  }
  if (idleState.pending <= 0) {
    failures.push(`idle loading exhausted the adapter manifest; expected pendingKeys() > 0 after ${IDLE_OBSERVATION_MS}ms`);
  }
  const allowedBootAdapterPaths = new Set(idleState.activeCompanyAdapterPaths);
  const outOfScopeBootAdapters = datasetRequests.filter((request) => !allowedBootAdapterPaths.has(request.pathname));
  if (outOfScopeBootAdapters.length) {
    failures.push(
      'default boot requested adapters outside the active company scope: '
      + outOfScopeBootAdapters.map((request) => request.pathname).join(', ')
    );
  }
  if (datasetRequests.length > allowedBootAdapterPaths.size) {
    failures.push(
      `default boot requested ${datasetRequests.length} dataset adapters `
      + `(active company registers ${allowedBootAdapterPaths.size})`
    );
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

  // Production projection acceptance: the same independent DOM + Metric SSOT
  // oracle used by source-mode tests must pass after bundling and deferred
  // Adapter loading. This prevents the deploy projection from silently
  // dropping the scale module or changing script order.
  await page.goto(`${server.url}#apple-q2-fy26`, { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('#chart svg', { timeout: FIRST_RENDER_TIMEOUT_MS });
  const comparisonCount = await selectAllIncomeStatementPeriods(page, 'Apple');
  assert(comparisonCount === 16, `production site Apple fixture has ${comparisonCount} periods, expected 16`);
  await waitForCalibratedComparison(page, comparisonCount, FIRST_RENDER_TIMEOUT_MS);
  const comparisonSnapshot = await comparisonMoneyScaleSnapshot(page);
  assertComparisonMoneyScale(comparisonSnapshot, comparisonCount, 'production site Apple all-periods');
  metrics.comparisonScale = `${comparisonCount} cards, calibrated`;

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
    const trendTypography = await page.evaluate(() => {
      const options = revenueTrendChart?.config?._config?.options
        || revenueTrendChart?.config?.options
        || {};
      const heading = document.querySelector('#trendView .trend-heading');
      return {
        heading: heading ? getComputedStyle(heading).fontFamily : '',
        axis: options.scales?.x?.ticks?.font?.family || '',
        hoverGuide: options.plugins?.revenueTrendHoverGuide?.fontFamily || '',
        valueLabels: options.plugins?.revenueTrendValueLabels?.fontFamily || '',
      };
    });
    for (const [role, family] of Object.entries(trendTypography)) {
      if (primaryFontFamily(family) !== 'Noto Sans') {
        failures.push(`production Trend ${role} expected Noto Sans, got ${family || 'no font'}`);
      }
    }
  }

  // Allow promise continuations triggered by the final draw to report any
  // asynchronous exception before the error budget is evaluated.
  await page.waitForTimeout(100);
  metrics.pageErrors = pageErrors.length;
  if (pageErrors.length) failures.push(`page errors: ${pageErrors.join(' | ')}`);
  await verifySplitData({ browser, url: server.url });
  await verifyLegacyUpgrade(browser, server.url, release.version);
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
