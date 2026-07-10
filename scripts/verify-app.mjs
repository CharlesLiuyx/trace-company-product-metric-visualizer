#!/usr/bin/env node
// Headless boot + interaction smoke of the modular viewer (src/app/*).
// This is the regression gate for the shared-top-level-scope module split:
// any load-order break, missing script, or cross-module wiring error surfaces
// here as a page error or a failed assertion. Runs against the dev files via
// an in-process static server; no build step involved.
import { chromium } from 'playwright';
import { startStaticServer } from './dev-server.mjs';
import { assert } from './lib/project.mjs';

const APP_MODULE_COUNT = 20;

const { url, close } = await startStaticServer({ port: 0 });
const browser = await chromium.launch();
const failures = [];

async function scenario(name, run, { viewport = { width: 1440, height: 900 }, init } = {}) {
  const startedAt = Date.now();
  const context = await browser.newContext({ viewport });
  const page = await context.newPage();
  const pageErrors = [];
  page.on('pageerror', (error) => pageErrors.push(String(error)));
  try {
    if (init) await page.addInitScript(init);
    await run(page);
    assert(!pageErrors.length, `page errors: ${pageErrors.join(' | ')}`);
    console.log(`ok   ${name} (${Date.now() - startedAt}ms)`);
  } catch (error) {
    failures.push(name);
    console.error(`FAIL ${name}: ${error.message.split('\n')[0]}`);
    if (pageErrors.length) console.error(`     page errors: ${pageErrors.join(' | ')}`);
  }
  await context.close();
}

async function boot(page, target = url) {
  await page.goto(target, { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('#chart svg, #tableView:not([hidden]), #trendView:not([hidden])', { timeout: 15000 });
}

await scenario('boot: default sankey', async (page) => {
  await boot(page);
  await page.waitForTimeout(1200);
  const state = await page.evaluate(() => ({
    scripts: document.querySelectorAll('script[src^="src/app/"]').length,
    hasSvg: Boolean(document.querySelector('#chart svg')),
    actionTitle: document.getElementById('actionTitle').textContent,
    companies: document.querySelectorAll('#companyList .company-item').length,
    pendingDatasets: window.TraceDatasetRegistry?.pendingKeys().length || 0,
    totalDatasets: window.__DATASET_MANIFEST__?.datasets?.length || 0,
  }));
  assert(state.scripts === APP_MODULE_COUNT, `expected ${APP_MODULE_COUNT} app scripts, got ${state.scripts}`);
  assert(state.hasSvg, 'no sankey svg rendered');
  assert(state.actionTitle.trim(), 'empty action title');
  assert(state.companies > 0, 'company list empty');
  assert(
    state.pendingDatasets >= state.totalDatasets - 2,
    `idle boot hydrated too many adapters (${state.totalDatasets - state.pendingDatasets}/${state.totalDatasets})`
  );
});

await scenario('dataset loading: failure is retryable', async (page) => {
  const adapterPattern = '**/data/datasets/affirm-q2-fy26.js';
  let failedOnce = false;
  await page.route(adapterPattern, async (route) => {
    if (!failedOnce) {
      failedOnce = true;
      await route.abort('failed');
      return;
    }
    await route.continue();
  });
  await page.goto(`${url}#affirm-q2-fy26`, { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('.chart-loading-error button', { timeout: 15000 });
  await page.click('.chart-loading-error button');
  await page.waitForSelector('#chart svg', { timeout: 15000 });
  assert(failedOnce, 'adapter request was not intercepted');
});

await scenario('boot: persisted zh + dark + table prefs', async (page) => {
  await boot(page);
  await page.waitForSelector('#companiesTable tbody tr', { timeout: 15000 });
  const state = await page.evaluate(() => ({
    lang: document.documentElement.lang,
    theme: document.documentElement.dataset.theme,
    tableVisible: !document.getElementById('tableView').hidden,
    companiesVisible: !document.getElementById('companiesTableSection').hidden,
  }));
  assert(state.lang === 'zh-CN', `expected zh-CN, got ${state.lang}`);
  assert(state.theme === 'dark', `expected dark theme, got ${state.theme}`);
  assert(state.tableVisible && state.companiesVisible, 'company info table not shown');
}, {
  init: () => {
    localStorage.setItem('sankey.language', 'zh');
    localStorage.setItem('sankey.theme', 'dark');
    localStorage.setItem('sankey.metric.mode', 'companyInfo');
    localStorage.setItem('sankey.view.mode', 'table');
  },
});

await scenario('routing: deep link + hashchange', async (page) => {
  await boot(page);
  const keys = await page.evaluate(() => {
    const byCompany = new Map();
    records.forEach((record) => {
      if (!byCompany.has(record.company)) byCompany.set(record.company, record.dataset.key);
    });
    return [...byCompany.values()].slice(0, 2);
  });
  assert(keys.length === 2, 'need records from two companies');
  await boot(page, `${url}#${encodeURIComponent(keys[0])}`);
  const first = await page.evaluate(() => currentRecord().dataset.key);
  assert(first === keys[0], `deep link landed on ${first}, expected ${keys[0]}`);
  await page.evaluate((key) => { window.location.hash = key; }, keys[1]);
  await page.waitForTimeout(400);
  const second = await page.evaluate(() => currentRecord().dataset.key);
  assert(second === keys[1], `hashchange landed on ${second}, expected ${keys[1]}`);
});

await scenario('sankey hover: unified node and link share rules', async (page) => {
  await boot(page, `${url}#affirm-q2-fy26`);

  async function visiblePercentages() {
    return page.evaluate(() => (
      [...document.querySelectorAll('#chart g.sankey-link-tooltip text')]
        .map((text) => text.textContent)
        .sort()
    ));
  }

  async function hoverPercentages(nodeId, { useLabel = false } = {}) {
    const selector = useLabel
      ? `#chart .sankey-label[data-node="${nodeId}"]`
      : `#chart rect.sankey-node[data-node="${nodeId}"]`;
    // Short fixed-layout bars can be sub-pixel after the viewer fit. Force the
    // same pointer event onto the rendered SVG owner instead of letting
    // Playwright reject a valid 1px interaction target as too small to hit.
    await page.locator(selector).hover({ force: true });
    return visiblePercentages();
  }

  const netProfit = await hoverPercentages('net_profit');
  assert(
    netProfit.join('|') === ['12.3%', '87.7%'].sort().join('|'),
    `net profit hover expected 12.3% + 87.7%, got ${netProfit.join(' + ')}`
  );

  const operatingProfit = await hoverPercentages('operating_profit');
  assert(
    operatingProfit.join('|') === ['10.5%', '3.4%', '96.6%'].sort().join('|'),
    `operating profit hover expected 10.5% + 3.4% + 96.6%, got ${operatingProfit.join(' + ')}`
  );

  // The authored Tax bar is one source pixel tall (sub-pixel after fit), so
  // use its engine-owned label hit area to exercise the same focusNode path.
  const tax = await hoverPercentages('tax', { useLabel: true });
  assert(tax.join('|') === '3.4%', `tax hover expected 3.4%, got ${tax.join(' + ')}`);

  await page.locator('#chart path.sankey-link[data-source="operating_profit"][data-target="net_profit"]').hover({ force: true });
  const retainedLink = await visiblePercentages();
  assert(
    retainedLink.join('|') === '90.8%',
    `operating profit → net profit link hover expected 90.8%, got ${retainedLink.join(' + ')}`
  );

  await boot(page, `${url}#kraft-heinz-q4-fy25`);
  const kraftNetProfit = await hoverPercentages('net_profit');
  assert(
    kraftNetProfit.join('|') === ['16.7%', '100%'].sort().join('|'),
    `Kraft Heinz net profit hover expected both semantic sources as shares of net profit (16.7% + 100%), got ${kraftNetProfit.join(' + ')}`
  );

  await boot(page, `${url}#datadog-q4-fy25`);
  const datadogOperatingProfit = await hoverPercentages('operating_profit');
  assert(
    datadogOperatingProfit.join('|') === ['1.2%', '100%', '77.8%'].sort().join('|'),
    `Datadog operating profit hover expected 1.2% incoming share + 100% retained outflow + 77.8% tax outflow, got ${datadogOperatingProfit.join(' + ')}`
  );
  await page.locator('#chart path.sankey-link[data-source="operating_profit"][data-target="net_profit"]').hover({ force: true });
  const datadogResultLink = await visiblePercentages();
  assert(
    datadogResultLink.join('|') === '19.1%',
    `Datadog operating profit → net profit link hover expected 19.1%, got ${datadogResultLink.join(' + ')}`
  );

  await boot(page, `${url}#coupang-q4-fy25`);
  const coupangOther = await hoverPercentages('other', { useLabel: true });
  assert(
    coupangOther.join('|') === ['130.8%', '425%'].sort().join('|'),
    `Coupang Other hover expected directional singleton shares 425% incoming + 130.8% outgoing, got ${coupangOther.join(' + ')}`
  );
  await page.locator('#chart path.sankey-link[data-source="operating_profit"][data-target="other"]').dispatchEvent('mouseenter');
  const coupangBridge = await visiblePercentages();
  assert(
    coupangBridge.join('|') === '23.5%',
    `Coupang operating profit → Other link hover expected smaller/larger endpoint share 23.5%, got ${coupangBridge.join(' + ')}`
  );
});

await scenario('period: Nintendo FY26 variants render YTD then active 9M', async (page) => {
  await boot(page, `${url}#nintendo-9m-fy26`);
  await page.waitForSelector('#periodList .variant-chip.active', { timeout: 15000 });
  const labels = await page.evaluate(() => ({
    active: document.querySelector('#periodList .variant-chip.active')?.textContent.trim(),
    all: [...document.querySelectorAll('#periodList .variant-chip')].map((chip) => chip.textContent.trim()),
  }));
  assert(labels.active === '9M', `expected active interim variant label 9M, got ${labels.active}`);
  assert(labels.all.join('|') === 'YTD|9M', `expected variant order YTD | 9M, got ${labels.all.join(' | ')}`);
});

await scenario('comparison: multi-select + zoom + metric trend', async (page) => {
  await boot(page);
  await page.evaluate(() => {
    const other = [...document.querySelectorAll('#companyList .company-item')]
      .find((button) => button.dataset.company !== state.company);
    other.dispatchEvent(new MouseEvent('click', { bubbles: true, shiftKey: true }));
  });
  await page.waitForTimeout(300);
  const comparison = await page.evaluate(() => ({
    visible: !document.getElementById('sankeyComparison').hidden,
    cards: document.querySelectorAll('#sankeyComparison .comparison-card').length,
    zoomControls: !document.getElementById('comparisonZoomControls').hidden,
    zoomInEnabled: !document.getElementById('zoomInBtn').disabled,
  }));
  assert(comparison.visible && comparison.cards >= 2, 'comparison grid not shown');
  assert(comparison.zoomControls, 'zoom controls hidden');
  assert(comparison.zoomInEnabled, 'zoom-in unexpectedly disabled');
  await page.click('#zoomInBtn');
  await page.waitForTimeout(500);
  const zoomLabel = await page.evaluate(() => document.getElementById('zoomFitBtn').textContent);
  assert(zoomLabel !== '100%', `zoom did not commit (label ${zoomLabel})`);
  await page.evaluate(() => {
    document.querySelector('#sankeyComparison [data-node]')
      ?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
  await page.waitForTimeout(400);
  const trendPanel = await page.evaluate(() => Boolean(document.querySelector('#sankeyComparison canvas')));
  assert(trendPanel, 'metric trend panel did not open on node click');
});

await scenario('revenue: trend view renders', async (page) => {
  await boot(page);
  const result = await page.evaluate(async () => {
    const company = revenueGroups[0]?.company;
    if (!company) return { skipped: true };
    selectCompanyGroup(groups.find((group) => group.company === company) || revenueGroups[0]);
    setMetricMode('revenue');
    await new Promise((resolve) => setTimeout(resolve, 400));
    return {
      trendVisible: !document.getElementById('trendView').hidden,
      canvas: Boolean(document.querySelector('#trendChart canvas')),
    };
  });
  if (result.skipped) {
    console.log('     (skipped: no revenue metric records registered)');
    return;
  }
  assert(result.trendVisible && result.canvas, 'revenue trend chart missing');
});

await scenario('boot: mobile viewport', async (page) => {
  await boot(page);
  const hasSvg = await page.evaluate(() => Boolean(document.querySelector('#chart svg')));
  assert(hasSvg, 'no sankey svg at mobile width');
}, { viewport: { width: 375, height: 812 } });

// Regression: localized dataset clones cached against a manifest stub must
// be invalidated when the full adapter upgrades the stub in place.
await scenario('boot: zh sankey + progressive-load company switch', async (page) => {
  await boot(page);
  await page.waitForFunction(() => Boolean(document.querySelector('#chart svg')), { timeout: 15000 });
  await page.evaluate(() => {
    const target = groups.find((group) => group.company !== state.company && group.records.length);
    selectCompanyGroup(target);
  });
  await page.waitForFunction(
    () => Boolean(document.querySelector('#chart svg')) && !document.querySelector('.chart-loading'),
    { timeout: 15000 }
  );
  const zhState = await page.evaluate(() => ({
    lang: document.documentElement.lang,
    nodes: document.querySelectorAll('#chart svg .sankey-node').length,
  }));
  assert(zhState.lang === 'zh-CN', `expected zh-CN, got ${zhState.lang}`);
  assert(zhState.nodes > 0, 'zh sankey rendered no nodes');
}, {
  init: () => {
    localStorage.setItem('sankey.language', 'zh');
    localStorage.setItem('sankey.metric.mode', 'incomeStatement');
    localStorage.setItem('sankey.view.mode', 'sankey');
  },
});

await browser.close();
await close();
if (failures.length) {
  console.error(`\nviewer smoke FAILED: ${failures.join(', ')}`);
  process.exit(1);
}
console.log('\nviewer smoke passed');
