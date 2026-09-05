#!/usr/bin/env node
// Headless boot + interaction smoke of the modular viewer (src/app/*).
// This is the regression gate for the shared-top-level-scope module split:
// any load-order break, missing script, or cross-module wiring error surfaces
// here as a page error or a failed assertion. Runs against the dev files via
// an in-process static server; no build step involved.
import { chromium } from 'playwright';
import { verifyLocalFileEntry } from './lib/local-view-browser.mjs';
import { startStaticServer } from './dev-server.mjs';
import { assert } from './lib/project.mjs';
import {
  assertComparisonMoneyScale,
  assertComparisonZoomCommitted,
  comparisonMoneyScaleSnapshot,
  selectAllIncomeStatementPeriods,
} from './lib/comparison-scale-browser.mjs';

const APP_MODULE_COUNT = 21;

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

function primaryFontFamily(value) {
  return String(value || '').split(',')[0].trim().replace(/^(['"])(.*)\1$/, '$2');
}

function assertPrimaryFont(value, expected, label) {
  assert(
    primaryFontFamily(value) === expected,
    `${label} expected ${expected}, got ${value || 'no computed font'}`
  );
}

async function computedFonts(page, selectors) {
  return page.evaluate((entries) => Object.fromEntries(
    Object.entries(entries).map(([name, selector]) => {
      const element = document.querySelector(selector);
      return [name, element ? getComputedStyle(element).fontFamily : ''];
    })
  ), selectors);
}

async function waitForComparisonPhase(page, phase, predicate, argument, options = {}) {
  try {
    await page.waitForFunction(predicate, argument, options);
  } catch (error) {
    const diagnostic = await page.evaluate(() => ({
      language: document.documentElement.lang,
      company: state.company,
      viewMode: state.viewMode,
      multiPeriodMode: state.multiPeriodMode,
      selectedPeriods: state.selectedPeriodIndexes.length,
      comparisonHidden: document.getElementById('sankeyComparison')?.hidden,
      scaleStatus: document.getElementById('sankeyComparison')?.dataset.scaleStatus || '',
      failureCode: document.getElementById('sankeyComparison')?.dataset.scaleFailureCode || '',
      failureStage: document.getElementById('sankeyComparison')?.dataset.scaleFailureStage || '',
      cards: document.querySelectorAll('#sankeyComparison .comparison-card').length,
      hosts: document.querySelectorAll('#sankeyComparison .comparison-chart-host').length,
      svgs: document.querySelectorAll('#sankeyComparison .comparison-chart-host > svg').length,
      alerts: [...document.querySelectorAll('#sankeyComparison [role="alert"]')]
        .map((element) => element.textContent.trim()),
      transactionStages: document.querySelectorAll(
        '.comparison-render-stage, .comparison-preview-resolver'
      ).length,
    }));
    throw new Error(`${phase}: ${error.message}; comparison state ${JSON.stringify(diagnostic)}`);
  }
}

await scenario('metric library: exact values, source, search and export', async (page) => {
  const sample = [{ key: 'test-only', subject: { name: '<示例产品>', type: 'product' }, period: '2026-08', basis: '月末活跃账户',
    source: { locator: 'input/processed/test-only.txt', digest: 'sha256:' + 'a'.repeat(64) },
    metrics: [{ name: '活跃账户', value: '12345678901234567890.125', unit: '个', currency: null, quote: '活跃账户：12345678901234567890.125 个', anchor: { type: 'text-range', range: [0, 32] } }] }];
  await page.route('**/data/metric-observations.js', (route) => route.fulfill({ contentType: 'text/javascript', body: `window.METRIC_OBSERVATIONS=${JSON.stringify(sample)};` }));
  await boot(page);
  await page.locator('#metricLibraryOpen').click();
  assert(await page.locator('#metricLibrary').isVisible(), 'metric library did not open');
  assert((await page.locator('#metricLibraryRows').textContent()).includes('12345678901234567890.125'), 'exact decimal lost');
  assert((await page.locator('#metricLibraryRows td').first().textContent()) === '<示例产品>', 'subject is not literal text');
  await page.locator('#metricLibraryRows summary').click();
  assert((await page.locator('#metricLibraryRows details').textContent()).includes(sample[0].source.digest), 'source digest missing');
  await page.locator('#metricLibrarySearch').fill('不存在');
  assert((await page.locator('#metricLibraryCount').textContent()).startsWith('0 '), 'search did not filter');
  await page.locator('#metricLibrarySearch').fill('活跃账户');
  assert((await page.locator('#metricLibraryCount').textContent()).startsWith('1 '), 'search did not restore');
  const download = page.waitForEvent('download');
  await page.locator('#metricLibraryExport').click();
  const stream = await (await download).createReadStream();
  const chunks = []; for await (const chunk of stream) chunks.push(chunk);
  assert(JSON.parse(Buffer.concat(chunks).toString())[0].metrics[0].value === sample[0].metrics[0].value, 'export rounded the value');
  await page.locator('#metricLibraryClose').click();
  assert(!(await page.locator('#metricLibrary').isVisible()), 'metric library did not close');
});

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
    // Boot may preload the active company's full adapter set, nothing more.
    activeCompanyDatasetCount: records.filter((record) => record.company === state.company).length,
  }));
  assert(state.scripts === APP_MODULE_COUNT, `expected ${APP_MODULE_COUNT} app scripts, got ${state.scripts}`);
  assert(state.hasSvg, 'no sankey svg rendered');
  assert(state.actionTitle.trim(), 'empty action title');
  assert(state.companies > 0, 'company list empty');
  assert(
    state.pendingDatasets >= state.totalDatasets - Math.max(2, state.activeCompanyDatasetCount),
    `idle boot hydrated adapters beyond the active company scope ` +
    `(${state.totalDatasets - state.pendingDatasets}/${state.totalDatasets} loaded, ` +
    `active company registers ${state.activeCompanyDatasetCount})`
  );
});

await scenario('typography: Chrome and View scopes survive theme + language changes', async (page) => {
  await boot(page);
  const selectors = {
    toolbar: '.toolbar',
    sidebar: '#datasetPanel',
    actionbar: '.view-actionbar',
    sankeyView: '#sankeyView',
  };
  const assertRoles = async (phase) => {
    const fonts = await computedFonts(page, selectors);
    assertPrimaryFont(fonts.toolbar, 'Montserrat', `${phase} toolbar`);
    assertPrimaryFont(fonts.sidebar, 'Montserrat', `${phase} sidebar`);
    assertPrimaryFont(fonts.actionbar, 'Montserrat', `${phase} View actionbar`);
    assertPrimaryFont(fonts.sankeyView, 'Noto Sans', `${phase} Sankey View pane`);
    const chartFont = await page.evaluate(() => chartTheme().fontFamily);
    assertPrimaryFont(chartFont, 'Noto Sans', `${phase} Chart.js theme`);
  };

  await assertRoles('initial');
  await page.click('#themeToggle');
  await page.click('#languageToggle');
  await page.waitForTimeout(200);
  await assertRoles('after theme/language switch');
});

await scenario('typography: SVG export preserves explicit brand roles', async (page) => {
  await boot(page, `${url}#monday-com-q1-fy26`);
  const result = await page.evaluate(() => {
    const liveSvg = document.querySelector('#chart > svg');
    const productMontserrat = [...liveSvg.querySelectorAll('text, tspan, textPath')]
      .filter((element) => !element.closest('[data-typography-role="brand"]'))
      .filter((element) => /Montserrat/i.test(getComputedStyle(element).fontFamily))
      .map((element) => element.textContent.trim());
    const liveBrandText = [...liveSvg.querySelectorAll('[data-typography-role="brand"] text')]
      .find((element) => /Montserrat/i.test(getComputedStyle(element).fontFamily));
    const exported = new DOMParser().parseFromString(svgString(), 'image/svg+xml');
    const exportedBrandText = [...exported.querySelectorAll('[data-typography-role="brand"] text')]
      .find((element) => /Montserrat/i.test(
        `${element.getAttribute('font-family') || ''},${element.getAttribute('style') || ''}`
      ));
    return {
      productMontserrat,
      liveBrandText: liveBrandText?.textContent.trim() || '',
      exportedBrandRoleCount: exported.querySelectorAll('[data-typography-role="brand"]').length,
      exportedBrandText: exportedBrandText?.textContent.trim() || '',
    };
  });
  assert(
    result.productMontserrat.length === 0,
    `SVG product text still uses Montserrat: ${result.productMontserrat.join(' | ')}`
  );
  assert(result.liveBrandText, 'live SVG has no explicitly scoped Montserrat brand text');
  assert(result.exportedBrandRoleCount > 0, 'serialized SVG lost data-typography-role="brand"');
  assert(result.exportedBrandText, 'serialized SVG lost the brand-faithful Montserrat wordmark');
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

// Selecting a company is the load signal for its complete Metric data: every
// period adapter must arrive in the background without further clicks, so
// period/metric switches inside the company never show a loading state.
await scenario('dataset loading: selecting a company preloads every period adapter', async (page) => {
  await boot(page);
  const target = await page.evaluate(() => {
    const registry = window.TraceDatasetRegistry;
    const group = groups.find((candidate) =>
      candidate.company !== state.company
      && (candidate.records?.length || 0) >= 2
      && candidate.records.every((record) => !registry.isLoaded(record.dataset.key)));
    if (!group) return null;
    return { company: group.company, keys: group.records.map((record) => record.dataset.key) };
  });
  assert(target, 'need another company with at least two pending dataset adapters');
  const clicked = await page.evaluate((company) => {
    const button = [...document.querySelectorAll('#companyList .company-item')]
      .find((item) => item.dataset.company === company);
    if (!button) return false;
    button.click();
    return true;
  }, target.company);
  assert(clicked, `company button missing for ${target.company}`);
  await page.waitForFunction(
    (keys) => keys.every((key) => window.TraceDatasetRegistry.isLoaded(key)),
    target.keys,
    { timeout: 15000 }
  );
  await page.waitForFunction(
    () => Boolean(document.querySelector('#chart svg')) && !document.querySelector('.chart-loading'),
    { timeout: 15000 }
  );
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
  const fonts = await computedFonts(page, {
    tablePane: '#tableView',
    tableHeading: '#companiesTableTitle',
    tableCell: '#companiesTable tbody td',
  });
  assertPrimaryFont(fonts.tablePane, 'Noto Sans', 'persisted Table View pane');
  assertPrimaryFont(fonts.tableHeading, 'Noto Sans', 'persisted Table heading');
  assertPrimaryFont(fonts.tableCell, 'Noto Sans', 'persisted Table cell');
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
  const tooltipFont = await page.evaluate(() => {
    const text = document.querySelector('#chart g.sankey-link-tooltip text');
    return text ? getComputedStyle(text).fontFamily : '';
  });
  assertPrimaryFont(tooltipFont, 'Roboto', 'Sankey hover tooltip');
  assert(
    netProfit.join('|') === ['12.3%', '90.8%'].sort().join('|'),
    `net profit hover expected 12.3% + 90.8%, got ${netProfit.join(' + ')}`
  );

  const operatingProfit = await hoverPercentages('operating_profit');
  assert(
    operatingProfit.join('|') === ['10.5%', '3.4%', '90.8%'].sort().join('|'),
    `operating profit hover expected 10.5% + 3.4% + 90.8%, got ${operatingProfit.join(' + ')}`
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

  await boot(page, `${url}#airbus-fy25`);
  const airbusNetProfit = await hoverPercentages('net_profit');
  assert(
    airbusNetProfit.join('|') === ['18%', '4%', '96.2%'].sort().join('|'),
    `Airbus net profit hover expected 96.2% + 18% + 4%, got ${airbusNetProfit.join(' + ')}`
  );

  await boot(page, `${url}#kraft-heinz-q4-fy25`);
  const kraftNetProfit = await hoverPercentages('net_profit');
  assert(
    kraftNetProfit.join('|') === ['16.7%', '54.5%'].sort().join('|'),
    `Kraft Heinz net profit hover expected endpoint ratios 16.7% + 54.5%, got ${kraftNetProfit.join(' + ')}`
  );

  await boot(page, `${url}#datadog-q4-fy25`);
  const datadogOperatingProfit = await hoverPercentages('operating_profit');
  assert(
    datadogOperatingProfit.join('|') === ['1.2%', '19.1%', '77.8%'].sort().join('|'),
    `Datadog operating profit hover expected endpoint ratios 1.2% + 19.1% + 77.8%, got ${datadogOperatingProfit.join(' + ')}`
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
    coupangOther.join('|') === ['23.5%', '76.5%'].sort().join('|'),
    `Coupang Other hover expected endpoint ratios 23.5% + 76.5%, got ${coupangOther.join(' + ')}`
  );
  await page.locator('#chart path.sankey-link[data-source="operating_profit"][data-target="other"]').dispatchEvent('mouseenter');
  const coupangBridge = await visiblePercentages();
  assert(
    coupangBridge.join('|') === '23.5%',
    `Coupang operating profit → Other link hover expected smaller/larger endpoint share 23.5%, got ${coupangBridge.join(' + ')}`
  );

  await boot(page, `${url}#rbi-q1-fy26`);
  const rbiOtherIncome = await hoverPercentages('other_income', { useLabel: true });
  assert(
    rbiOtherIncome.join('|') === '1.3%',
    `RBI Other income label hover expected 1.3%, got ${rbiOtherIncome.join(' + ')}`
  );
  const rbiOtherIncomeGuide = page.locator(
    '#chart .sankey-interactive-annotation[data-node="other_income"] .sankey-annotation-hitbox'
  );
  assert(
    await rbiOtherIncomeGuide.count() === 1,
    'RBI Other income guide has no practical hover hitbox'
  );
  await rbiOtherIncomeGuide.hover({ force: true });
  const rbiOtherIncomeGuidePercentages = await visiblePercentages();
  assert(
    rbiOtherIncomeGuidePercentages.join('|') === '1.3%',
    `RBI Other income guide hover expected 1.3%, got ${rbiOtherIncomeGuidePercentages.join(' + ')}`
  );
  const rbiOtherIncomeTooltipPosition = await page.evaluate(() => {
    const tooltip = document.querySelector('#chart g.sankey-link-tooltip').getBoundingClientRect();
    const otherIncome = document.querySelector(
      '#chart .sankey-label[data-node="other_income"]'
    ).getBoundingClientRect();
    const operatingExpenses = document.querySelector(
      '#chart .sankey-label[data-node="operating_expenses"]'
    ).getBoundingClientRect();
    const overlaps = (a, b) => !(
      a.right <= b.left
      || b.right <= a.left
      || a.bottom <= b.top
      || b.bottom <= a.top
    );
    return {
      overlapsOtherIncome: overlaps(tooltip, otherIncome),
      overlapsOperatingExpenses: overlaps(tooltip, operatingExpenses),
    };
  });
  assert(
    !rbiOtherIncomeTooltipPosition.overlapsOtherIncome,
    'RBI Other income tooltip overlaps its own label'
  );
  assert(
    !rbiOtherIncomeTooltipPosition.overlapsOperatingExpenses,
    'RBI Other income tooltip overlaps the Operating expenses label'
  );

  await boot(page, `${url}#blackrock-q1-fy26`);
  const blackRockOther = page.locator(
    '#chart .sankey-interactive-annotation[data-node="other"] .sankey-annotation-hitbox'
  );
  assert(
    await blackRockOther.count() === 1,
    'BlackRock Other annotation has no practical hover hitbox'
  );
  await blackRockOther.hover({ force: true });
  const blackRockOtherPercentages = await visiblePercentages();
  assert(
    blackRockOtherPercentages.join('|') === '1.2%',
    `BlackRock Other annotation hover expected 1.2%, got ${blackRockOtherPercentages.join(' + ')}`
  );
  const blackRockOtherPosition = await page.evaluate(() => {
    const annotation = document.querySelector(
      '#chart .sankey-interactive-annotation[data-node="other"]'
    );
    const tooltip = document.querySelector('#chart g.sankey-link-tooltip');
    const label = [...annotation.querySelectorAll('text')]
      .find((element) => element.textContent.trim() === 'Other');
    const rect = tooltip.querySelector('rect');
    const transform = tooltip.getAttribute('transform') || '';
    const [, x, y] = transform.match(/translate\(([-.\d]+),([-.\d]+)\)/) || [];
    const tooltipBox = {
      x: Number(x),
      y: Number(y),
      width: rect.width.baseVal.value,
      height: rect.height.baseVal.value,
    };
    const center = {
      x: tooltipBox.x + tooltipBox.width / 2,
      y: tooltipBox.y + tooltipBox.height / 2,
    };
    const guide = annotation.querySelector('path');
    const length = guide.getTotalLength();
    let guideDistance = Infinity;
    for (let i = 0; i <= 200; i += 1) {
      const point = guide.getPointAtLength(length * i / 200);
      guideDistance = Math.min(guideDistance, Math.hypot(point.x - center.x, point.y - center.y));
    }
    const labelBox = label.getBBox();
    const overlapsLabel = !(
      tooltipBox.x + tooltipBox.width <= labelBox.x
      || labelBox.x + labelBox.width <= tooltipBox.x
      || tooltipBox.y + tooltipBox.height <= labelBox.y
      || labelBox.y + labelBox.height <= tooltipBox.y
    );
    return { center, guideDistance, overlapsLabel };
  });
  assert(
    blackRockOtherPosition.guideDistance <= 2,
    `BlackRock Other tooltip is ${blackRockOtherPosition.guideDistance.toFixed(1)}px from its guide`
  );
  assert(!blackRockOtherPosition.overlapsLabel, 'BlackRock Other tooltip overlaps its label');
});

await scenario('period: Nintendo FY26 variants render YTD, active 9M, then H1', async (page) => {
  await boot(page, `${url}#nintendo-9m-fy26`);
  await page.waitForSelector('#periodList .variant-chip.active', { timeout: 15000 });
  const labels = await page.evaluate(() => ({
    active: document.querySelector('#periodList .variant-chip.active')?.textContent.trim(),
    all: [...document.querySelectorAll('#periodList .variant-chip')].map((chip) => chip.textContent.trim()),
  }));
  assert(labels.active === '9M', `expected active interim variant label 9M, got ${labels.active}`);
  assert(labels.all.join('|') === 'YTD|9M|H1', `expected variant order YTD | 9M | H1, got ${labels.all.join(' | ')}`);
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
  const typography = await page.evaluate(() => {
    const config = createComparisonMetricTrendChartConfig({
      labels: ['FY25', 'FY26'],
      metrics: [{ label: 'Revenue', values: [1, 2], growth: [null, 100], accent: '#155077' }],
      ratios: [],
      caliber: { currency: '$', unit: 'B' },
      sameLayer: false,
      hiddenAxes: { value: false, percent: false },
    });
    const options = config.options;
    const card = document.querySelector('#sankeyComparison .comparison-card');
    return {
      card: card ? getComputedStyle(card).fontFamily : '',
      axis: options.scales?.x?.ticks?.font?.family || '',
      labels: options.plugins?.comparisonMetricTrendValueLabels?.fontFamily || '',
    };
  });
  assertPrimaryFont(typography.card, 'Noto Sans', 'Comparison card');
  assertPrimaryFont(typography.axis, 'Noto Sans', 'Comparison metric axis');
  assertPrimaryFont(typography.labels, 'Noto Sans', 'Comparison metric custom labels');
});

await scenario('comparison: fit and preview use resolved CSS geometry', async (page) => {
  await boot(page, `${url}#apple-q2-fy26`);
  await page.addStyleTag({
    content: `
      :root { font-size: 20px; }
      #sankeyView {
        padding-left: 31px;
        padding-right: 17px;
      }
      .comparison-view {
        --comparison-flow-gap: calc(.5rem + 3px);
        --comparison-card-border-width: .1rem;
      }
      .comparison-flow {
        row-gap: .35rem;
      }
      .comparison-flow > .comparison-card {
        border-right-width: calc(.2rem + 1px);
        margin-left: calc(.1rem + 1px);
        margin-right: .05rem;
      }
      .comparison-flow > .comparison-card.quantization-probe {
        border: 0;
        margin: 0;
        border-radius: 0;
        box-shadow: none;
      }
    `,
  });
  const expectedCount = await page.evaluate(() => {
    const group = metricGroupForCompany('Apple', 'incomeStatement');
    selectCompanyGroup(group);
    state.multiPeriodMode = true;
    setSelectedPeriods(group.records.map((record) => record.index));
    finishPeriodScopeChange();
    return group.records.length;
  });
  await waitForComparisonPhase(
    page,
    'resolved CSS geometry render',
    (count) => (
      document.getElementById('sankeyComparison')?.dataset.scaleStatus === 'calibrated'
      && document.querySelectorAll('#sankeyComparison .comparison-chart-host > svg').length === count
    ),
    expectedCount,
    { timeout: 20000 }
  );

  const geometry = await page.evaluate(() => {
    const flow = document.querySelector('#sankeyComparison .comparison-flow');
    const cards = [...flow.querySelectorAll(':scope > .comparison-card')];
    const flowStyle = getComputedStyle(flow);
    const firstCardStyle = getComputedStyle(cards[0]);
    const columnGap = Number.parseFloat(flowStyle.columnGap);
    const rowGap = Number.parseFloat(flowStyle.rowGap);
    const borderLeft = Number.parseFloat(firstCardStyle.borderLeftWidth);
    const borderRight = Number.parseFloat(firstCardStyle.borderRightWidth);
    const declaredFit = Number(flow.dataset.fitFactor);
    const declaredInlineFixed = Number(flow.dataset.cardInlineFixed);
    const availableWidth = Number(flow.dataset.baseContentWidth);
    const unfitWidths = cards.map((card) => {
      const host = card.querySelector('.comparison-chart-host');
      return Number(host.dataset.baseWidth) / declaredFit;
    });
    let expectedFit = 1;
    for (let start = 0; start < unfitWidths.length; start += 3) {
      const row = unfitWidths.slice(start, start + 3);
      expectedFit = Math.min(
        expectedFit,
        (
          availableWidth
          - columnGap * Math.max(0, row.length - 1)
          - declaredInlineFixed * row.length
        ) / row.reduce((sum, width) => sum + width, 0)
      );
    }

    const currentZoom = state.comparisonZoom;
    const targetZoom = 1.25;
    const previewCards = cards.map(comparisonPreviewCardGeometry);
    const previewGesture = {
      baseContentWidth: availableWidth,
      columnGap,
      rowGap,
      cards: previewCards,
      flow,
      layoutResolver: null,
    };
    const predicted = resolvedComparisonPreviewLayout(previewGesture, targetZoom);
    destroyComparisonPreviewResolver(previewGesture);
    state.comparisonZoom = targetZoom;
    applyComparisonZoom();
    const zoomedFlowRect = flow.getBoundingClientRect();
    const actual = cards.map((card) => {
      const rect = card.getBoundingClientRect();
      return {
        x: rect.left - zoomedFlowRect.left,
        y: rect.top - zoomedFlowRect.top,
        width: rect.width,
        height: rect.height,
      };
    });
    const maxReplayError = predicted.items.reduce((max, item, index) => Math.max(
      max,
      Math.abs(item.x - actual[index].x),
      Math.abs(item.y - actual[index].y),
      Math.abs(item.width - actual[index].width),
      Math.abs(item.height - actual[index].height)
    ), 0);
    const rowCount = (items) => {
      const rows = [];
      items.forEach((item) => {
        if (!rows.some((top) => Math.abs(top - item.y) <= 0.1)) rows.push(item.y);
      });
      return rows.length;
    };
    const boundaryFlow = document.createElement('div');
    boundaryFlow.className = 'comparison-flow';
    boundaryFlow.style.cssText = [
      'position:fixed',
      'left:-10000px',
      'top:0',
      'width:500px',
      'column-gap:13px',
      'row-gap:7px',
    ].join(';');
    for (let index = 0; index < 2; index += 1) {
      const card = document.createElement('section');
      card.className = 'comparison-card quantization-probe';
      card.style.cssText = [
        'box-sizing:border-box',
        'border:0',
        'flex:0 0 243.6px',
        'width:243.6px',
        'height:10px',
      ].join(';');
      boundaryFlow.appendChild(card);
    }
    document.body.appendChild(boundaryFlow);
    const boundaryRects = [...boundaryFlow.children].map((card) => card.getBoundingClientRect());
    const boundaryGesture = {
      baseContentWidth: 500,
      columnGap: 13,
      rowGap: 7,
      flow,
      layoutResolver: null,
      cards: boundaryRects.map((rect) => ({
        className: 'comparison-card quantization-probe',
        hostBase: null,
        fixedWidth: rect.width,
        fixedHeight: rect.height,
      })),
    };
    const boundaryPrediction = resolvedComparisonPreviewLayout(boundaryGesture, 1);
    destroyComparisonPreviewResolver(boundaryGesture);
    const boundaryActual = boundaryRects.map((rect) => ({
      y: rect.top - boundaryFlow.getBoundingClientRect().top,
    }));
    boundaryFlow.remove();
    const exactUnitGesture = {
      baseContentWidth: 500,
      columnGap: 13,
      rowGap: 7,
      flow,
      layoutResolver: null,
      cards: [100, 100, 274.015625].map((width) => ({
        className: 'comparison-card quantization-probe',
        hostBase: null,
        fixedWidth: width,
        fixedHeight: 10,
      })),
    };
    const exactUnitPrediction = resolvedComparisonPreviewLayout(exactUnitGesture, 1);
    destroyComparisonPreviewResolver(exactUnitGesture);
    const exactUnitFlow = document.createElement('div');
    exactUnitFlow.className = 'comparison-flow';
    exactUnitFlow.style.cssText = [
      'position:fixed',
      'left:-10000px',
      'top:0',
      'width:500px',
      'column-gap:13px',
      'row-gap:7px',
    ].join(';');
    [100, 100, 274.015625].forEach((width) => {
      const card = document.createElement('section');
      card.className = 'comparison-card quantization-probe';
      card.style.cssText = [
        'box-sizing:border-box',
        'border:0',
        `flex:0 0 ${width}px`,
        `width:${width}px`,
        'height:10px',
      ].join(';');
      exactUnitFlow.appendChild(card);
    });
    document.body.appendChild(exactUnitFlow);
    const exactUnitTop = exactUnitFlow.getBoundingClientRect().top;
    const exactUnitActual = [...exactUnitFlow.children].map((card) => ({
      y: card.getBoundingClientRect().top - exactUnitTop,
    }));
    exactUnitFlow.remove();
    const inverseUnitGesture = {
      baseContentWidth: 500,
      columnGap: 13,
      rowGap: 7,
      flow,
      layoutResolver: null,
      cards: [243.505, 243.505].map((hostBase) => ({
        className: 'comparison-card quantization-probe',
        hostBase,
        aspect: 0.1,
        chromeWidth: 0,
        chromeHeight: 0,
        hostOffsetX: 0,
        hostOffsetY: 0,
        fixedWidth: 0,
        fixedHeight: 0,
        bitmap: null,
      })),
    };
    const inverseUnitPrediction = resolvedComparisonPreviewLayout(inverseUnitGesture, 1);
    destroyComparisonPreviewResolver(inverseUnitGesture);
    const inverseUnitFlow = document.createElement('div');
    inverseUnitFlow.className = 'comparison-flow';
    inverseUnitFlow.style.cssText = [
      'position:fixed',
      'left:-10000px',
      'top:0',
      'width:500px',
      'column-gap:13px',
      'row-gap:7px',
    ].join(';');
    [243.505, 243.505].forEach((width) => {
      const card = document.createElement('section');
      card.className = 'comparison-card quantization-probe';
      card.style.cssText = [
        'box-sizing:border-box',
        `flex:0 0 ${width}px`,
        `width:${width}px`,
        'height:10px',
      ].join(';');
      inverseUnitFlow.appendChild(card);
    });
    document.body.appendChild(inverseUnitFlow);
    const inverseUnitTop = inverseUnitFlow.getBoundingClientRect().top;
    const inverseUnitActual = [...inverseUnitFlow.children].map((card) => ({
      y: card.getBoundingClientRect().top - inverseUnitTop,
    }));
    inverseUnitFlow.remove();
    const tinyStage = createComparisonMeasurementStage(500, 'comparison-tiny-width-probe');
    const tinyFlow = document.createElement('div');
    tinyFlow.className = 'comparison-flow';
    const tinyCard = document.createElement('section');
    tinyCard.className = 'comparison-card quantization-probe';
    tinyCard.innerHTML = `
      <div class="comparison-chart-frame">
        <div class="comparison-chart-host" data-base-width="0.001">
          <svg viewBox="0 0 2 1"></svg>
        </div>
      </div>
    `;
    tinyCard.querySelector('.comparison-chart-host').style.width = '0.001px';
    tinyFlow.appendChild(tinyCard);
    tinyStage.appendChild(tinyFlow);
    const tinyInitialWidth = tinyCard.querySelector('.comparison-chart-host')
      .getBoundingClientRect().width;
    const tinyCardGeometry = comparisonPreviewCardGeometry(tinyCard);
    tinyStage.remove();
    const tinyGesture = {
      baseContentWidth: 500,
      flow,
      layoutResolver: null,
      cards: [tinyCardGeometry],
    };
    const tinyResolved = resolvedComparisonPreviewLayout(tinyGesture, 2000);
    destroyComparisonPreviewResolver(tinyGesture);
    const result = {
      columnGap,
      rowGap,
      borderLeft,
      borderRight,
      marginLeft: Number.parseFloat(firstCardStyle.marginLeft),
      marginRight: Number.parseFloat(firstCardStyle.marginRight),
      declaredColumnGap: Number(flow.dataset.columnGap),
      declaredRowGap: Number(flow.dataset.rowGap),
      declaredInlineFixed,
      measuredInlineFixed: (
        cards[0].getBoundingClientRect().width
        - cards[0].querySelector('.comparison-chart-host').getBoundingClientRect().width
        + Number.parseFloat(firstCardStyle.marginLeft)
        + Number.parseFloat(firstCardStyle.marginRight)
      ),
      declaredFit,
      expectedFit,
      availableWidth,
      comparisonClientWidth: document.getElementById('sankeyComparison').clientWidth,
      maxReplayError,
      predictedRows: rowCount(predicted.items),
      actualRows: rowCount(actual),
      boundaryPredictedRows: rowCount(boundaryPrediction.items),
      boundaryActualRows: rowCount(boundaryActual),
      exactUnitPredictedRows: rowCount(exactUnitPrediction.items),
      exactUnitActualRows: rowCount(exactUnitActual),
      inverseUnitPredictedRows: rowCount(inverseUnitPrediction.items),
      inverseUnitActualRows: rowCount(inverseUnitActual),
      tinyInitialWidth,
      tinySemanticBaseWidth: tinyCardGeometry.hostBase,
      tinySemanticAspect: tinyCardGeometry.aspect,
      tinyResolvedWidth: tinyResolved.items[0].hostWidth,
      leakedResolvers: document.querySelectorAll(
        '.comparison-render-stage, .comparison-preview-resolver'
      ).length,
    };
    state.comparisonZoom = currentZoom;
    applyComparisonZoom();
    return result;
  });

  assert(Math.abs(geometry.columnGap - 13) <= 0.01, `calc/rem column gap resolved to ${geometry.columnGap}px`);
  assert(Math.abs(geometry.rowGap - 7) <= 0.01, `rem row gap resolved to ${geometry.rowGap}px`);
  assert(
    Math.abs(geometry.borderLeft - 2) <= 0.01 && Math.abs(geometry.borderRight - 5) <= 0.01,
    `asymmetric borders resolved to ${geometry.borderLeft}px/${geometry.borderRight}px`
  );
  assert(
    Math.abs(geometry.marginLeft - 3) <= 0.01 && Math.abs(geometry.marginRight - 1) <= 0.01,
    `asymmetric card margins resolved to ${geometry.marginLeft}px/${geometry.marginRight}px`
  );
  assert(
    Math.abs(geometry.declaredColumnGap - geometry.columnGap) <= 0.01
      && Math.abs(geometry.declaredRowGap - geometry.rowGap) <= 0.01,
    `staged gaps differ from committed CSS: ${JSON.stringify(geometry)}`
  );
  assert(
    Math.abs(geometry.declaredInlineFixed - geometry.measuredInlineFixed) <= 0.02,
    `staged fixed card geometry differs from committed flex outer size: ${JSON.stringify(geometry)}`
  );
  assert(
    Math.abs(geometry.declaredFit - geometry.expectedFit) <= 1e-9,
    `fit factor ignored resolved CSS geometry: ${JSON.stringify(geometry)}`
  );
  assert(
    Math.abs(geometry.availableWidth - geometry.comparisonClientWidth) <= 0.01,
    `comparison width ignored asymmetric stage padding: ${JSON.stringify(geometry)}`
  );
  assert(
    geometry.predictedRows === geometry.actualRows && geometry.maxReplayError <= 0.05,
    `preview replay drifted from flex layout: ${JSON.stringify(geometry)}`
  );
  assert(
    geometry.boundaryPredictedRows === 2 && geometry.boundaryActualRows === 2,
    `near-boundary preview wrap disagrees with flexbox: ${JSON.stringify(geometry)}`
  );
  assert(
    geometry.exactUnitPredictedRows === 2 && geometry.exactUnitActualRows === 2,
    `one-layout-unit overflow disagrees with flexbox: ${JSON.stringify(geometry)}`
  );
  assert(
    geometry.inverseUnitPredictedRows === 1 && geometry.inverseUnitActualRows === 1,
    `serialized-width fit disagrees with flexbox: ${JSON.stringify(geometry)}`
  );
  assert(
    geometry.tinyInitialWidth === 0
      && geometry.tinySemanticBaseWidth === 0.001
      && Math.abs(geometry.tinySemanticAspect - 0.5) <= 1e-12
      && geometry.tinyResolvedWidth >= 1.99,
    `zero-layout-width chart lost semantic zoom geometry: ${JSON.stringify(geometry)}`
  );
  assert(geometry.leakedResolvers === 0, `comparison measurement stage leaked: ${JSON.stringify(geometry)}`);
}, { viewport: { width: 2048, height: 1024 } });

await scenario('comparison: Apple all periods preserve one monetary scale', async (page) => {
  await boot(page, `${url}#apple-q2-fy26`);
  const expectedCount = await selectAllIncomeStatementPeriods(page, 'Apple');
  await waitForComparisonPhase(
    page,
    'initial English all-period render',
    (count) => (
      document.getElementById('sankeyComparison')?.dataset.scaleStatus === 'uncalibrated'
      || (
        document.getElementById('sankeyComparison')?.dataset.scaleStatus === 'calibrated'
        && document.querySelectorAll('#sankeyComparison .comparison-chart-host > svg').length === count
      )
    ),
    expectedCount,
    { timeout: 20000 }
  );

  assert(expectedCount === 16, `Apple all-period regression fixture changed from 16 to ${expectedCount}`);
  assertComparisonMoneyScale(
    await comparisonMoneyScaleSnapshot(page),
    expectedCount,
    'English fit'
  );
  const englishDimensions = await page.evaluate(() => (
    selectedPeriodRecords().map((record) => {
      const financial = financialRecordByKey.get(record.dataset.key);
      return [record.dataset.key, financial?.currency, financial?.unit];
    })
  ));
  assert(
    englishDimensions.every(([_key, currency, unit]) => currency === '$' && unit === 'B'),
    `Apple money-dimension fixture changed: ${JSON.stringify(englishDimensions)}`
  );

  await page.evaluate(() => {
    document.querySelector('#sankeyComparison .comparison-flow')?.setAttribute('data-language-epoch', 'english');
  });
  await page.click('#languageToggle');
  await waitForComparisonPhase(
    page,
    'Chinese atomic redraw',
    (count) => (
      document.documentElement.lang === 'zh-CN'
      && (
        document.getElementById('sankeyComparison')?.dataset.scaleStatus === 'uncalibrated'
        || (
          !document.querySelector('#sankeyComparison [data-language-epoch="english"]')
          && document.querySelectorAll('#sankeyComparison .comparison-chart-host > svg').length === count
        )
      )
    ),
    expectedCount,
    { timeout: 20000 }
  );
  const chineseScaleState = await page.evaluate(() => ({
    status: document.getElementById('sankeyComparison')?.dataset.scaleStatus,
    code: document.getElementById('sankeyComparison')?.dataset.scaleFailureCode,
    stage: document.getElementById('sankeyComparison')?.dataset.scaleFailureStage,
  }));
  assert(
    chineseScaleState.status === 'calibrated',
    `Chinese comparison failed: ${JSON.stringify(chineseScaleState)}`
  );
  const chineseRevenueLabel = await page.evaluate(() => (
    document.querySelector(
      '#sankeyComparison .comparison-chart-host[data-dataset-key="apple-q2-fy26"] '
        + '.sankey-label[data-node="revenue"]'
    )?.textContent || ''
  ));
  assert(
    chineseRevenueLabel.includes('收入'),
    `Chinese redraw did not replace the known Apple revenue label: ${chineseRevenueLabel}`
  );
  const chineseFit = await comparisonMoneyScaleSnapshot(page);
  assertComparisonMoneyScale(
    chineseFit,
    expectedCount,
    'Chinese fit'
  );

  await page.click('#zoomInBtn');
  await waitForComparisonPhase(
    page,
    'Chinese zoom commit',
    (count) => {
      const comparison = document.getElementById('sankeyComparison');
      const flow = comparison?.querySelector('.comparison-flow');
      const hosts = [...(comparison?.querySelectorAll('.comparison-chart-host') || [])];
      return (
        state.comparisonZoom > 1
        && !comparison?.classList.contains('zoom-previewing')
        && flow
        && getComputedStyle(flow).visibility !== 'hidden'
        && hosts.length === count
        && hosts.every((host) => {
          const baseWidth = Number(host.dataset.baseWidth);
          return Number.isFinite(baseWidth)
            && Math.abs(host.getBoundingClientRect().width - baseWidth * state.comparisonZoom) <= 0.02;
        })
      );
    },
    expectedCount,
    { timeout: 20000 }
  );
  const zoomed = await comparisonMoneyScaleSnapshot(page);
  assertComparisonMoneyScale(zoomed, expectedCount, 'Chinese zoom');
  assertComparisonZoomCommitted(chineseFit, zoomed, 'Chinese zoom');

  const sabotagedKey = await page.evaluate(() => {
    const record = selectedPeriodRecords()[0];
    window.__comparisonScaleTestFinancial = financialRecordByKey.get(record.dataset.key);
    financialRecordByKey.delete(record.dataset.key);
    draw({ renderTable: false, syncView: false });
    return record.dataset.key;
  });
  await waitForComparisonPhase(
    page,
    'missing-financial fail-closed transition',
    () => (
      document.getElementById('sankeyComparison')?.dataset.scaleStatus === 'uncalibrated'
    ),
    null,
    { timeout: 20000 }
  );
  const failedClosed = await page.evaluate(() => ({
    cards: document.querySelectorAll('#sankeyComparison .comparison-chart-host').length,
    alert: document.querySelector('#sankeyComparison [role="alert"]')?.textContent.trim() || '',
    zoomControlsHidden: document.getElementById('comparisonZoomControls')?.hidden,
  }));
  assert(failedClosed.cards === 0, `${sabotagedKey}: uncalibrated group rendered a partial comparison`);
  assert(failedClosed.alert, `${sabotagedKey}: uncalibrated group has no visible explanation`);
  assert(failedClosed.zoomControlsHidden, `${sabotagedKey}: uncalibrated group left zoom controls active`);

  await page.evaluate((key) => {
    financialRecordByKey.set(key, window.__comparisonScaleTestFinancial);
    delete window.__comparisonScaleTestFinancial;
    draw({ renderTable: false, syncView: false });
  }, sabotagedKey);
  await waitForComparisonPhase(
    page,
    'missing-financial recovery',
    (count) => (
      document.getElementById('sankeyComparison')?.dataset.scaleStatus === 'calibrated'
      && document.querySelectorAll('#sankeyComparison .comparison-chart-host > svg').length === count
    ),
    expectedCount,
    { timeout: 20000 }
  );
  assertComparisonMoneyScale(
    await comparisonMoneyScaleSnapshot(page),
    expectedCount,
    'recovered after fail-closed'
  );

  const renderSabotagedKey = await page.evaluate(() => {
    const record = selectedPeriodRecords()[1];
    const renderDataset = localizedDataset(record.dataset);
    window.__comparisonScaleTestAnnotations = {
      renderDataset,
      hadOwn: Object.prototype.hasOwnProperty.call(renderDataset, 'annotationsSvg'),
      value: renderDataset.annotationsSvg,
    };
    renderDataset.annotationsSvg = `${renderDataset.annotationsSvg || ''}<image href="forbidden.png"/>`;
    draw({ renderTable: false, syncView: false });
    return record.dataset.key;
  });
  await waitForComparisonPhase(
    page,
    'renderer exception fail-closed transition',
    () => (
      document.getElementById('sankeyComparison')?.dataset.scaleStatus === 'uncalibrated'
      && document.getElementById('sankeyComparison')?.dataset.scaleFailureCode
        === 'comparison-runtime-failure'
      && document.getElementById('sankeyComparison')?.dataset.scaleFailureStage === 'render'
    ),
    null,
    { timeout: 5000 }
  );
  const renderFailedClosed = await page.evaluate(() => ({
    cards: document.querySelectorAll('#sankeyComparison .comparison-chart-host').length,
    alert: document.querySelector('#sankeyComparison [role="alert"]')?.textContent.trim() || '',
    code: document.getElementById('sankeyComparison')?.dataset.scaleFailureCode || '',
    stage: document.getElementById('sankeyComparison')?.dataset.scaleFailureStage || '',
    stages: document.querySelectorAll(
      '.comparison-render-stage, .comparison-preview-resolver'
    ).length,
  }));
  assert(renderFailedClosed.cards === 0, `${renderSabotagedKey}: render exception committed a partial group`);
  assert(renderFailedClosed.alert, `${renderSabotagedKey}: render exception has no visible explanation`);
  assert(
    renderFailedClosed.code === 'comparison-runtime-failure' && renderFailedClosed.stage === 'render',
    `${renderSabotagedKey}: renderer exception lost its typed failure provenance`
  );
  assert(renderFailedClosed.stages === 0, `${renderSabotagedKey}: failed render leaked its transaction stage`);

  await page.evaluate(() => {
    const backup = window.__comparisonScaleTestAnnotations;
    if (backup.hadOwn) backup.renderDataset.annotationsSvg = backup.value;
    else delete backup.renderDataset.annotationsSvg;
    delete window.__comparisonScaleTestAnnotations;
    draw({ renderTable: false, syncView: false });
  });
  await waitForComparisonPhase(
    page,
    'renderer exception recovery',
    (count) => (
      document.getElementById('sankeyComparison')?.dataset.scaleStatus === 'calibrated'
      && document.querySelectorAll('#sankeyComparison .comparison-chart-host > svg').length === count
    ),
    expectedCount,
    { timeout: 20000 }
  );
  assertComparisonMoneyScale(
    await comparisonMoneyScaleSnapshot(page),
    expectedCount,
    'recovered after transactional render failure'
  );

  const localeSabotagedKey = await page.evaluate(() => {
    const record = selectedPeriodRecords()[0];
    const overlay = record.dataset.i18n.zh;
    window.__comparisonLocaleOverlayBackup = {
      dataset: record.dataset,
      overlay,
      hadMeta: Object.prototype.hasOwnProperty.call(overlay, 'meta'),
      meta: overlay.meta,
    };
    overlay.meta = {
      ...(overlay.meta || {}),
      periodNote: `${record.dataset.meta?.periodNote || ''} $999T`,
    };
    i18nObjectCaches.datasets.get('zh')?.delete(record.dataset);
    document.querySelector('#sankeyComparison .comparison-flow')
      ?.setAttribute('data-stale-locale-group', 'true');
    draw({ renderTable: false, syncView: false });
    return record.dataset.key;
  });
  await waitForComparisonPhase(
    page,
    'current-locale validation fail-closed transition',
    () => (
      document.getElementById('sankeyComparison')?.dataset.scaleStatus === 'uncalibrated'
      && document.getElementById('sankeyComparison')?.dataset.scaleFailureStage === 'calibration'
    ),
    null,
    { timeout: 5000 }
  );
  const localeFailedClosed = await page.evaluate(() => ({
    cards: document.querySelectorAll('#sankeyComparison .comparison-chart-host').length,
    stale: Boolean(document.querySelector('#sankeyComparison [data-stale-locale-group]')),
    alert: document.querySelector('#sankeyComparison [role="alert"]')?.textContent.trim() || '',
  }));
  assert(localeFailedClosed.cards === 0, `${localeSabotagedKey}: invalid current locale left cards visible`);
  assert(!localeFailedClosed.stale, `${localeSabotagedKey}: invalid current locale preserved stale calibrated DOM`);
  assert(localeFailedClosed.alert, `${localeSabotagedKey}: invalid current locale has no visible explanation`);

  await page.evaluate(() => {
    const backup = window.__comparisonLocaleOverlayBackup;
    if (backup.hadMeta) backup.overlay.meta = backup.meta;
    else delete backup.overlay.meta;
    i18nObjectCaches.datasets.get('zh')?.delete(backup.dataset);
    delete window.__comparisonLocaleOverlayBackup;
    draw({ renderTable: false, syncView: false });
  });
  await waitForComparisonPhase(
    page,
    'current-locale validation recovery',
    (count) => (
      document.getElementById('sankeyComparison')?.dataset.scaleStatus === 'calibrated'
      && document.querySelectorAll('#sankeyComparison .comparison-chart-host > svg').length === count
    ),
    expectedCount,
    { timeout: 20000 }
  );

  await page.evaluate(() => {
    comparisonMetricTrendChart = {
      destroy() {
        throw new Error('synthetic Chart.js destroy failure');
      },
    };
    draw({ renderTable: false, syncView: false });
  });
  await waitForComparisonPhase(
    page,
    'third-party teardown fail-closed transition',
    () => (
      document.getElementById('sankeyComparison')?.dataset.scaleStatus === 'uncalibrated'
      && document.getElementById('sankeyComparison')?.dataset.scaleFailureStage === 'commit'
    ),
    null,
    { timeout: 5000 }
  );
  const teardownFailedClosed = await page.evaluate(() => ({
    cards: document.querySelectorAll('#sankeyComparison .comparison-chart-host').length,
    alert: document.querySelector('#sankeyComparison [role="alert"]')?.textContent.trim() || '',
    chartDetached: comparisonMetricTrendChart === null,
  }));
  assert(teardownFailedClosed.cards === 0, 'failed Chart.js teardown left a partial calibrated group');
  assert(teardownFailedClosed.alert, 'failed Chart.js teardown has no visible explanation');
  assert(teardownFailedClosed.chartDetached, 'failed Chart.js teardown retained a poisoned chart handle');

  await page.evaluate(() => draw({ renderTable: false, syncView: false }));
  await waitForComparisonPhase(
    page,
    'third-party teardown recovery',
    (count) => (
      document.getElementById('sankeyComparison')?.dataset.scaleStatus === 'calibrated'
      && document.querySelectorAll('#sankeyComparison .comparison-chart-host > svg').length === count
    ),
    expectedCount,
    { timeout: 20000 }
  );

  await page.evaluate(() => {
    const comparison = document.getElementById('sankeyComparison');
    const original = comparison.replaceChildren;
    let armed = true;
    comparison.replaceChildren = function replaceChildrenFailureProbe(...children) {
      if (armed) {
        armed = false;
        throw new Error('synthetic comparison commit failure');
      }
      return original.apply(this, children);
    };
    try {
      draw({ renderTable: false, syncView: false });
    } finally {
      comparison.replaceChildren = original;
    }
  });
  await waitForComparisonPhase(
    page,
    'DOM commit fail-closed transition',
    () => (
      document.getElementById('sankeyComparison')?.dataset.scaleStatus === 'uncalibrated'
      && document.getElementById('sankeyComparison')?.dataset.scaleFailureStage === 'commit'
    ),
    null,
    { timeout: 5000 }
  );
  const commitFailedClosed = await page.evaluate(() => ({
    cards: document.querySelectorAll('#sankeyComparison .comparison-chart-host').length,
    alert: document.querySelector('#sankeyComparison [role="alert"]')?.textContent.trim() || '',
    stages: document.querySelectorAll(
      '.comparison-render-stage, .comparison-preview-resolver'
    ).length,
  }));
  assert(commitFailedClosed.cards === 0, 'failed comparison DOM commit left a partial calibrated group');
  assert(commitFailedClosed.alert, 'failed comparison DOM commit has no visible explanation');
  assert(commitFailedClosed.stages === 0, 'failed comparison DOM commit leaked its measurement stage');

  await page.evaluate(() => draw({ renderTable: false, syncView: false }));
  await waitForComparisonPhase(
    page,
    'DOM commit recovery',
    (count) => (
      document.getElementById('sankeyComparison')?.dataset.scaleStatus === 'calibrated'
      && document.querySelectorAll('#sankeyComparison .comparison-chart-host > svg').length === count
    ),
    expectedCount,
    { timeout: 20000 }
  );
  assertComparisonMoneyScale(
    await comparisonMoneyScaleSnapshot(page),
    expectedCount,
    'recovered after failed DOM commit'
  );
}, { viewport: { width: 2048, height: 1024 } });

await scenario('comparison: committed group is bound to its exact rendered anchor geometry', async (page) => {
  await boot(page, `${url}#apple-q2-fy26`);
  const expectedCount = await selectAllIncomeStatementPeriods(page, 'Apple');
  await waitForComparisonPhase(
    page,
    'post-render invariant baseline',
    (count) => (
      document.getElementById('sankeyComparison')?.dataset.scaleStatus === 'calibrated'
      && document.querySelectorAll('#sankeyComparison .comparison-chart-host > svg').length === count
    ),
    expectedCount,
    { timeout: 20000 }
  );

  await page.evaluate(() => {
    const originalRender = window.SankeyEngine.render;
    let armed = true;
    window.SankeyEngine.render = function driftedRender(target, ...args) {
      const result = originalRender.call(this, target, ...args);
      if (armed && target instanceof Element) {
        const anchor = target.querySelector('rect.sankey-node[data-node="revenue"]');
        if (anchor) {
          armed = false;
          anchor.setAttribute('height', String(Number(anchor.getAttribute('height')) + 1));
        }
      }
      return result;
    };
    try {
      draw({ renderTable: false, syncView: false });
    } finally {
      window.SankeyEngine.render = originalRender;
    }
  });
  await waitForComparisonPhase(
    page,
    'post-render invariant failure',
    () => (
      document.getElementById('sankeyComparison')?.dataset.scaleStatus === 'uncalibrated'
      && document.getElementById('sankeyComparison')?.dataset.scaleFailureStage === 'render'
    ),
    null,
    { timeout: 5000 }
  );
  const failed = await page.evaluate(() => ({
    cards: document.querySelectorAll('#sankeyComparison .comparison-chart-host').length,
    stages: document.querySelectorAll(
      '.comparison-render-stage, .comparison-preview-resolver'
    ).length,
    alert: document.querySelector('#sankeyComparison [role="alert"]')?.textContent.trim() || '',
  }));
  assert(
    failed.cards === 0 && failed.stages === 0 && failed.alert,
    `post-render geometry drift was not group-atomic: ${JSON.stringify(failed)}`
  );

  await page.evaluate(() => draw({ renderTable: false, syncView: false }));
  await waitForComparisonPhase(
    page,
    'post-render invariant recovery',
    (count) => (
      document.getElementById('sankeyComparison')?.dataset.scaleStatus === 'calibrated'
      && document.querySelectorAll('#sankeyComparison .comparison-chart-host > svg').length === count
    ),
    expectedCount,
    { timeout: 20000 }
  );
  assertComparisonMoneyScale(
    await comparisonMoneyScaleSnapshot(page),
    expectedCount,
    'recovered after post-render anchor drift'
  );

  await page.evaluate(() => {
    const originalRender = window.SankeyEngine.render;
    let armed = true;
    window.SankeyEngine.render = function driftedCanvasRender(target, ...args) {
      const result = originalRender.call(this, target, ...args);
      if (armed && target instanceof Element) {
        const svg = target.querySelector(':scope > svg');
        const viewBox = svg?.viewBox?.baseVal;
        if (svg && viewBox) {
          armed = false;
          svg.setAttribute(
            'viewBox',
            `${viewBox.x} ${viewBox.y} ${viewBox.width + 1} ${viewBox.height}`
          );
        }
      }
      return result;
    };
    try {
      draw({ renderTable: false, syncView: false });
    } finally {
      window.SankeyEngine.render = originalRender;
    }
  });
  await waitForComparisonPhase(
    page,
    'post-render canvas invariant failure',
    () => (
      document.getElementById('sankeyComparison')?.dataset.scaleStatus === 'uncalibrated'
      && document.getElementById('sankeyComparison')?.dataset.scaleFailureStage === 'render'
    ),
    null,
    { timeout: 5000 }
  );
  const canvasFailed = await page.evaluate(() => ({
    cards: document.querySelectorAll('#sankeyComparison .comparison-chart-host').length,
    stages: document.querySelectorAll(
      '.comparison-render-stage, .comparison-preview-resolver'
    ).length,
    alert: document.querySelector('#sankeyComparison [role="alert"]')?.textContent.trim() || '',
  }));
  assert(
    canvasFailed.cards === 0 && canvasFailed.stages === 0 && canvasFailed.alert,
    `post-render viewBox drift was not group-atomic: ${JSON.stringify(canvasFailed)}`
  );

  await page.evaluate(() => draw({ renderTable: false, syncView: false }));
  await waitForComparisonPhase(
    page,
    'post-render canvas invariant recovery',
    (count) => (
      document.getElementById('sankeyComparison')?.dataset.scaleStatus === 'calibrated'
      && document.querySelectorAll('#sankeyComparison .comparison-chart-host > svg').length === count
    ),
    expectedCount,
    { timeout: 20000 }
  );
  assertComparisonMoneyScale(
    await comparisonMoneyScaleSnapshot(page),
    expectedCount,
    'recovered after post-render viewBox drift'
  );
}, { viewport: { width: 2048, height: 1024 } });

await scenario('comparison: all periods → single period → all periods is reversible', async (page) => {
  await boot(page, `${url}#apple-q2-fy26`);
  const expectedCount = await selectAllIncomeStatementPeriods(page, 'Apple');
  await waitForComparisonPhase(
    page,
    'first all-period calibration',
    (count) => (
      document.getElementById('sankeyComparison')?.dataset.scaleStatus === 'calibrated'
      && document.querySelectorAll('#sankeyComparison .comparison-chart-host > svg').length === count
    ),
    expectedCount,
    { timeout: 20000 }
  );
  const firstAll = await comparisonMoneyScaleSnapshot(page);
  assertComparisonMoneyScale(firstAll, expectedCount, 'first all-period selection');

  await page.click('#zoomInBtn');
  await waitForComparisonPhase(
    page,
    'pre-exit zoom commit',
    (count) => {
      const comparison = document.getElementById('sankeyComparison');
      const flow = comparison?.querySelector('.comparison-flow');
      const hosts = [...(comparison?.querySelectorAll('.comparison-chart-host') || [])];
      return (
        state.comparisonZoom > 1
        && !comparison?.classList.contains('zoom-previewing')
        && flow
        && getComputedStyle(flow).visibility !== 'hidden'
        && hosts.length === count
        && document.querySelectorAll('.comparison-preview-resolver').length === 0
        && hosts.every((host) => {
          const baseWidth = Number(host.dataset.baseWidth);
          return Number.isFinite(baseWidth)
            && Math.abs(host.getBoundingClientRect().width - baseWidth * state.comparisonZoom) <= 0.02;
        })
      );
    },
    expectedCount,
    { timeout: 20000 }
  );
  const zoomedAll = await comparisonMoneyScaleSnapshot(page);
  assertComparisonMoneyScale(zoomedAll, expectedCount, 'all-period selection before exit');

  await page.evaluate(() => draw({ renderTable: false, syncView: false }));
  await waitForComparisonPhase(
    page,
    'zoomed direct redraw commit',
    (count) => {
      const comparison = document.getElementById('sankeyComparison');
      const flow = comparison?.querySelector('.comparison-flow');
      const hosts = [...(comparison?.querySelectorAll('.comparison-chart-host') || [])];
      return (
        comparison?.dataset.scaleStatus === 'calibrated'
        && state.comparisonZoom > 1
        && !comparison.classList.contains('zoom-previewing')
        && flow
        && getComputedStyle(flow).visibility !== 'hidden'
        && hosts.length === count
        && document.querySelectorAll('.comparison-preview-resolver').length === 0
        && hosts.every((host) => {
          const baseWidth = Number(host.dataset.baseWidth);
          return Number.isFinite(baseWidth)
            && Math.abs(host.getBoundingClientRect().width - baseWidth * state.comparisonZoom) <= 0.02;
        })
      );
    },
    expectedCount,
    { timeout: 20000 }
  );
  const redrawnZoomedAll = await comparisonMoneyScaleSnapshot(page);
  assertComparisonMoneyScale(redrawnZoomedAll, expectedCount, 'direct redraw while zoomed');
  assertComparisonZoomCommitted(firstAll, redrawnZoomedAll, 'direct redraw while zoomed');
  assert(
    Math.abs(
      redrawnZoomedAll.declaredBaseContentWidth - zoomedAll.declaredBaseContentWidth
    ) <= 0.02,
    `zoomed redraw fed max-content width back into fit: `
      + `${zoomedAll.declaredBaseContentWidth} → ${redrawnZoomedAll.declaredBaseContentWidth}`
  );

  await page.evaluate(() => {
    clearMultiPeriodScope();
    finishPeriodScopeChange();
  });
  await page.waitForFunction(() => {
    const comparison = document.getElementById('sankeyComparison');
    return (
      !state.multiPeriodMode
      && comparison?.hidden
      && comparison.childElementCount === 0
      && !comparison.dataset.scaleStatus
      && Boolean(document.querySelector('#chart > svg'))
    );
  }, null, { timeout: 20000 });
  const singleState = await page.evaluate(() => ({
    comparisonHidden: document.getElementById('sankeyComparison')?.hidden,
    comparisonChildren: document.getElementById('sankeyComparison')?.childElementCount,
    comparisonScaleStatus: document.getElementById('sankeyComparison')?.dataset.scaleStatus || '',
    singleVisible: !document.getElementById('singleChartCard')?.hidden,
    singleSvgs: document.querySelectorAll('#chart > svg').length,
    zoom: state.comparisonZoom,
    zoomControlsHidden: document.getElementById('comparisonZoomControls')?.hidden,
    zoomClassActive: document.getElementById('sankeyView')?.classList.contains('comparison-zoomed'),
    transientStages: document.querySelectorAll(
      '.comparison-render-stage, .comparison-preview-resolver'
    ).length,
  }));
  assert(
    singleState.comparisonHidden
      && singleState.comparisonChildren === 0
      && !singleState.comparisonScaleStatus
      && singleState.singleVisible
      && singleState.singleSvgs === 1,
    `single-period transition retained comparison DOM/state: ${JSON.stringify(singleState)}`
  );
  assert(
    singleState.zoomControlsHidden
      && !singleState.zoomClassActive
      && singleState.transientStages === 0,
    `single-period transition retained active comparison zoom UI: ${JSON.stringify(singleState)}`
  );
  assert(
    Math.abs(singleState.zoom - zoomedAll.zoom) <= 1e-12,
    `comparison zoom preference changed while its scope was inactive: ${JSON.stringify(singleState)}`
  );

  const secondCount = await selectAllIncomeStatementPeriods(page, 'Apple');
  await waitForComparisonPhase(
    page,
    'second all-period calibration',
    (count) => (
      document.getElementById('sankeyComparison')?.dataset.scaleStatus === 'calibrated'
      && document.querySelectorAll('#sankeyComparison .comparison-chart-host > svg').length === count
      && !document.getElementById('sankeyComparison')?.hidden
    ),
    secondCount,
    { timeout: 20000 }
  );
  const secondAll = await comparisonMoneyScaleSnapshot(page);
  assert(secondCount === expectedCount, `Apple all-period count changed across re-entry: ${secondCount}`);
  assertComparisonMoneyScale(secondAll, expectedCount, 'second all-period selection');
  assert(
    Math.abs(secondAll.zoom - zoomedAll.zoom) <= 1e-12,
    `comparison zoom preference was not restored on re-entry (${zoomedAll.zoom} → ${secondAll.zoom})`
  );
}, { viewport: { width: 2048, height: 1024 } });

await scenario('comparison: extreme company magnitudes preserve fractional calibrated widths', async (page) => {
  await boot(page, `${url}#aramco-fy25`);
  const expectedKeys = await page.evaluate(() => {
    const aramco = records.find((record) => record.dataset.key === 'aramco-fy25');
    const docebo = records.find((record) => record.dataset.key === 'docebo-q4-fy25');
    const adidas = records.find((record) => record.dataset.key === 'adidas-q4-fy25');
    const sanofi = records.find((record) => record.dataset.key === 'sanofi-q2-fy26');
    const sony = records.find((record) => record.dataset.key === 'sony-fy25');
    if (!aramco || !docebo || !adidas || !sanofi || !sony) return [];
    clearMultiPeriodScope();
    state.company = aramco.company;
    state.activeIndex = aramco.index;
    setCompanyActiveRecord(aramco);
    state.metricMode = 'incomeStatement';
    state.viewMode = 'sankey';
    state.multiCompanyMode = true;
    setSelectedCompanies([
      aramco.company,
      docebo.company,
      adidas.company,
      sanofi.company,
      sony.company,
    ]);
    refresh();
    return [
      aramco.dataset.key,
      docebo.dataset.key,
      adidas.dataset.key,
      sanofi.dataset.key,
      sony.dataset.key,
    ];
  });
  assert(
    JSON.stringify(expectedKeys)
      === JSON.stringify([
        'aramco-fy25',
        'docebo-q4-fy25',
        'adidas-q4-fy25',
        'sanofi-q2-fy26',
        'sony-fy25',
      ]),
    'extreme comparison fixtures are missing'
  );
  await waitForComparisonPhase(
    page,
    'extreme company calibration',
    (keys) => (
      document.getElementById('sankeyComparison')?.dataset.scaleStatus === 'calibrated'
      && [...document.querySelectorAll('#sankeyComparison .comparison-chart-host')]
        .map((host) => host.dataset.datasetKey)
        .every((key) => keys.includes(key))
      && document.querySelectorAll('#sankeyComparison .comparison-chart-host > svg').length === keys.length
    ),
    expectedKeys,
    { timeout: 20000 }
  );

  const snapshot = await comparisonMoneyScaleSnapshot(page);
  assertComparisonMoneyScale(
    snapshot,
    expectedKeys.length,
    'Aramco + Docebo + Adidas + Sanofi + Sony fit'
  );
  const dimensions = Object.fromEntries(snapshot.cards.map((card) => [
    card.key,
    [card.currency, card.unit],
  ]));
  assert(
    JSON.stringify(dimensions['aramco-fy25']) === JSON.stringify(['$', 'B'])
      && JSON.stringify(dimensions['docebo-q4-fy25']) === JSON.stringify(['$', 'M'])
      && JSON.stringify(dimensions['adidas-q4-fy25']) === JSON.stringify(['€', 'B'])
      && JSON.stringify(dimensions['sanofi-q2-fy26']) === JSON.stringify(['€', 'B'])
      && JSON.stringify(dimensions['sony-fy25']) === JSON.stringify(['¥', 'B']),
    `extreme money-dimension fixture changed: ${JSON.stringify(dimensions)}`
  );
  const sanofi = snapshot.cards.find((card) => card.key === 'sanofi-q2-fy26');
  assert(
    sanofi?.anchor === 'biopharma'
      && sanofi.declaredAnchor === 'biopharma'
      && sanofi.ssotAnchorOccurrences === 1,
    `Sanofi exceptional revenue-lineage anchor is not independently proven: ${JSON.stringify(sanofi)}`
  );
  const sony = snapshot.cards.find((card) => card.key === 'sony-fy25');
  assert(
    sony?.declaredProvenance === 'fixed-derived',
    `Sony fixed-derived geometry path is not exercised: ${JSON.stringify(sony)}`
  );
  const docebo = snapshot.cards.find((card) => card.key === 'docebo-q4-fy25');
  assert(docebo, 'Docebo comparison card is missing');
  assert(
    docebo.baseWidth > 0 && docebo.baseWidth < 0.5,
    `Docebo regression fixture no longer exercises a sub-pixel calibrated width (${docebo.baseWidth})`
  );
  assert(
    docebo.styleWidth > 0 && docebo.styleWidth < 0.5 && docebo.hostWidth < 0.5,
    `Docebo calibrated width was floored back to a visible-card minimum (${docebo.styleWidth}/${docebo.hostWidth})`
  );

  const targetZoom = await page.evaluate(() => {
    const faces = [...document.querySelectorAll(
      '#sankeyComparison .comparison-chart-host'
    )].map((host) => {
      const anchor = host.dataset.scaleAnchor;
      return [...host.querySelectorAll('rect.sankey-node[data-node]')]
        .find((rect) => rect.getAttribute('data-node') === anchor)
        ?.getBoundingClientRect().height || 0;
    }).filter((height) => height > 0);
    const target = Math.max(1, 32 / Math.min(...faces));
    setComparisonZoom(target);
    return target;
  });
  await page.waitForFunction(
    () => {
      const comparison = document.getElementById('sankeyComparison');
      const flow = comparison?.querySelector('.comparison-flow');
      const hosts = [...(comparison?.querySelectorAll('.comparison-chart-host') || [])];
      return (
        state.comparisonZoom > 1
        && !comparison?.classList.contains('zoom-previewing')
        && flow
        && getComputedStyle(flow).visibility !== 'hidden'
        && hosts.every((host) => {
          const expected = Number(host.dataset.baseWidth) * state.comparisonZoom;
          return Math.abs(Number.parseFloat(host.style.width) - expected)
            <= Math.max(0.02, expected * 1e-5);
        })
      );
    },
    null,
    { timeout: 20000 }
  );
  const inspection = await comparisonMoneyScaleSnapshot(page);
  assert(inspection.zoom >= targetZoom * 0.999, `extreme inspection zoom was not committed (${inspection.zoom}/${targetZoom})`);
  assertComparisonMoneyScale(
    inspection,
    expectedKeys.length,
    'Aramco + Docebo + Adidas + Sanofi + Sony inspection zoom'
  );
  const paintedScales = inspection.cards.map((card) => card.cssPxPerUsd);
  const paintedSpread = Math.max(...paintedScales) / Math.min(...paintedScales);
  assert(
    Math.min(...inspection.cards.map((card) => card.renderedHeight)) >= 28,
    'extreme inspection did not lift every revenue face above the subpixel regime'
  );
  assert(
    paintedSpread <= 1.002,
    `extreme comparison real painted monetary scale spread ${paintedSpread}x exceeds 0.2%`
  );
}, { viewport: { width: 2048, height: 1024 } });

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
  const assertTrendTypography = async (phase) => {
    const typography = await page.evaluate(() => {
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
    assertPrimaryFont(typography.heading, 'Noto Sans', `${phase} Trend heading`);
    assertPrimaryFont(typography.axis, 'Noto Sans', `${phase} Trend axis`);
    assertPrimaryFont(typography.hoverGuide, 'Noto Sans', `${phase} Trend hover guide`);
    assertPrimaryFont(typography.valueLabels, 'Noto Sans', `${phase} Trend value labels`);
  };
  await assertTrendTypography('initial');
  await page.click('#themeToggle');
  await page.click('#languageToggle');
  await page.waitForTimeout(300);
  await assertTrendTypography('after theme/language switch');
});

await scenario('boot: mobile viewport', async (page) => {
  await boot(page);
  const hasSvg = await page.evaluate(() => Boolean(document.querySelector('#chart svg')));
  assert(hasSvg, 'no sankey svg at mobile width');
  const fonts = await computedFonts(page, {
    toolbar: '.toolbar',
    actionbar: '.view-actionbar',
    sankeyView: '#sankeyView',
  });
  assertPrimaryFont(fonts.toolbar, 'Montserrat', 'mobile toolbar');
  assertPrimaryFont(fonts.actionbar, 'Montserrat', 'mobile View actionbar');
  assertPrimaryFont(fonts.sankeyView, 'Noto Sans', 'mobile Sankey View pane');
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

try { await verifyLocalFileEntry(browser); } catch (error) { failures.push(`local file entry: ${error.message}`); }

await browser.close();
await close();
if (failures.length) {
  console.error(`\nviewer smoke FAILED: ${failures.join(', ')}`);
  process.exit(1);
}
console.log('\nviewer smoke passed');
