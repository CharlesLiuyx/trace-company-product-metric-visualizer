// Behavioral checks at the Pages data-loading Interface. Complete source
// records are the oracle; no assertions depend on the projection helpers.
import assert from 'node:assert/strict';
import { loadClassicScripts } from './vm-browser.mjs';
import { readProjectFile } from './project.mjs';
import { scriptSources } from '../script-sources.mjs';

export async function verifySplitData({ browser, url }) {
  const full = loadClassicScripts(scriptSources(readProjectFile('index.html')).filter((src) => src.startsWith('data/')));
  const expectedFinancial = JSON.parse(JSON.stringify(full.INCOME_STATEMENT_SSOT.records));
  const expectedCompanies = JSON.parse(JSON.stringify(full.COMPANY_METADATA.companies));
  const contexts = [];
  const open = async (configure) => {
    const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    contexts.push(context);
    const page = await context.newPage();
    if (configure) await configure(page, context);
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    return page;
  };
  try {
    const page = await open(async (p) => p.addInitScript(() => {
      localStorage.setItem('sankey.language', 'zh');
      localStorage.setItem('sankey.company.sort', 'netProfit');
    }));
    await page.waitForSelector('#chart svg .sankey-node');
    const initialOrder = await page.evaluate(() => sortedCompanyGroups(groups).map((group) => group.company));
    const requests = [];
    page.on('request', (request) => { if (request.url().endsWith('.json')) requests.push(request.url()); });
    await page.evaluate(() => setViewMode('table'));
    await page.waitForFunction(() => runtimeData.ready({ family: 'statement' }) && Number(statementsTable.dataset.totalRows) === records.length && !statementsCsvBtn.disabled);
    assert.deepEqual(await page.evaluate(() => JSON.parse(JSON.stringify(financialRecords))), expectedFinancial, 'global table must recover every exact SSOT field');
    assert.deepEqual(await page.evaluate(() => sortedCompanyGroups(groups).map((group) => group.company)), initialOrder, 'hydration must not change global profit order');
    assert.equal(requests.filter((request) => request.includes('/data/tables/statement.json')).length, 1);
    assert.equal(requests.filter((request) => request.includes('/data/tables/company.json')).length, 0, 'statement table must not fetch profile table');
    assert.deepEqual(await page.evaluate(() => [...tableModelCache.keys()]), ['zh:statement'], 'only the active family builds a table model');
    await page.evaluate(() => {
      state.language = 'en';
      refresh();
    });
    assert.equal(await page.locator('#statementsTable').getAttribute('data-total-rows'), String(full.__DATASET_MANIFEST__.datasets.length));
    const downloadPromise = page.waitForEvent('download');
    await page.evaluate(() => statementsCsvBtn.click());
    const download = await downloadPromise;
    const stream = await download.createReadStream();
    const buffers = [];
    for await (const bytes of stream) buffers.push(bytes);
    const csv = Buffer.concat(buffers).toString('utf8');
    assert.equal(csv.trimEnd().split('\n').length, full.__DATASET_MANIFEST__.datasets.length + 1, 'CSV must contain the global table');
    assert.ok(csv.includes('salesforce-q1-fy27'));
    assert.ok(csv.includes('revenue_items'));

    await page.evaluate(() => setMetricMode('companyInfo'));
    await page.waitForFunction(() => runtimeData.ready({ family: 'company' }) && Number(companiesTable.dataset.totalRows) === groups.length);
    assert.deepEqual(await page.evaluate(() => JSON.parse(JSON.stringify(companyMetadata))), expectedCompanies, 'profile hydration must preserve sources and localization');
    await page.evaluate(() => {
      state.company = 'Salesforce';
      state.multiCompanyMode = true;
      setSelectedCompanies(['Salesforce', 'Apple']);
      setMetricMode('incomeStatement');
      setViewMode('table');
    });
    await page.waitForFunction(() => Number(statementsTable.dataset.totalRows) === records.filter((record) => ['Salesforce', 'Apple'].includes(record.company)).length);
    assert.ok(await page.evaluate(() => statementRows().every((row) => ['Salesforce', 'Apple'].includes(row.record.company))), 'multi-company table must retain scope');

    const revenuePage = await open(async (p) => p.route('**/data/companies/*.json', (route) => route.fulfill({ status: 404, body: 'missing' })));
    await revenuePage.locator('#companyList .company-item').first().waitFor();
    await revenuePage.evaluate(() => {
      const group = groups.find((item) => item.revenueRecords?.length);
      selectCompanyGroup(group);
      setMetricMode('revenue');
      setViewMode('trend');
    });
    await revenuePage.waitForFunction(() => state.viewMode === 'trend' && Boolean(trendView.querySelector('canvas')) && Boolean(window.Chart));
    assert.equal(await revenuePage.evaluate(() => runtimeData.ready(viewDataRequirement())), true, 'complete revenue must not depend on a company detail response');

    // Failure must neither display partial data nor poison subsequent retries.
    let attempts = 0;
    const retryPage = await open(async (p) => p.route('**/data/companies/salesforce.json', async (route) => {
      attempts++;
      if (attempts === 1) await route.fulfill({ status: 503, body: 'unavailable' });
      else await route.continue();
    }));
    await retryPage.waitForSelector('#chart [role="alert"]');
    assert.equal(await retryPage.locator('#chart svg').count(), 0);
    assert.equal(await retryPage.evaluate(() => runtimeData.ready({ companies: ['Salesforce'] })), false);
    await retryPage.locator('#chart').getByRole('button', { name: 'Retry', exact: true }).click();
    await retryPage.waitForSelector('#chart svg .sankey-node');
    assert.equal(attempts, 2);

    const corruptPage = await open(async (p) => p.route('**/data/companies/salesforce.json', (route) => route.fulfill({ status: 200, contentType: 'application/json', body: '{}' })));
    await corruptPage.waitForSelector('#chart [role="alert"]');
    assert.equal(await corruptPage.locator('#chart svg').count(), 0);
    assert.equal(await corruptPage.evaluate(() => financialRecordByKey.get('salesforce-q1-fy27').__runtimeSummary), true);
    assert.equal(await corruptPage.getByRole('button', { name: 'Reload the latest version', exact: true }).count(), 1);

    let releaseSlow;
    const gate = new Promise((resolve) => { releaseSlow = resolve; });
    const racePage = await open(async (p) => p.route('**/data/companies/salesforce.json', async (route) => { await gate; await route.continue(); }));
    try {
      await racePage.locator('#companyList .company-item[data-company="Abbott"]').click();
      await racePage.waitForFunction(() => state.company === 'Abbott' && Boolean(chartHost.querySelector('svg .sankey-node')) && runtimeData.ready({ companies: ['Abbott'] }));
      releaseSlow();
      await racePage.waitForFunction(() => runtimeData.ready({ companies: ['Salesforce'] }));
      assert.equal(await racePage.evaluate(() => state.company), 'Abbott');
      assert.ok((await racePage.locator('#actionTitle').textContent()).includes('Abbott'));
      assert.ok(await racePage.evaluate(() => currentDataset().key.startsWith('abbott-')));
    } finally { releaseSlow(); }
    console.log('  split data: complete tables/CSV, zh caches, scoped rows, retry, integrity and stale-request isolation passed');
  } finally {
    await Promise.all(contexts.map((context) => context.close()));
  }
}
