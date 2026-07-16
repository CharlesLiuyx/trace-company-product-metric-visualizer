#!/usr/bin/env node
import { existsSync, readdirSync } from 'node:fs';
import path from 'node:path';
import {
  COMPANY_METADATA_SCRIPT_DIR,
  DATASET_SCRIPT_DIR,
  INCOME_STATEMENT_SCRIPT_DIR,
  UNREGISTERED_DATASET_SCRIPTS,
  companyMetadataScriptsFromIndex,
  incomeStatementScriptsFromIndex,
  registeredDatasetScripts,
} from './script-sources.mjs';
import { assert, listScripts, readProjectFile, rootDir } from './lib/project.mjs';
import { loadBrowserData } from './lib/browser-data-loader.mjs';
import { resolveSourcePath } from './lib/source-lifecycle.mjs';

function dataScripts() {
  return registeredDatasetScripts();
}

function fmt(value) {
  return Number.isInteger(value) ? String(value) : value.toFixed(4).replace(/0+$/, '').replace(/\.$/, '');
}

function assertClose(actual, expected, tolerance, label, errors) {
  if (typeof actual !== 'number' || typeof expected !== 'number') {
    errors.push(`${label}: expected numeric values, got ${actual} and ${expected}`);
    return;
  }
  const delta = Math.abs(actual - expected);
  if (delta > tolerance) {
    errors.push(`${label}: ${fmt(actual)} differs from ${fmt(expected)} by ${fmt(delta)} > ${fmt(tolerance)}`);
  }
}

function sum(items) {
  return (items || []).reduce((total, item) => total + (Number(item.value) || 0), 0);
}

function flattenItems(items) {
  return (items || []).flatMap((item) => [item, ...flattenItems(item.children)]);
}

function normalize(value) {
  return String(value || '').toLowerCase().replace(/\s+/g, ' ').trim();
}

const DEPRECATED_HOVER_SHARE_FIELDS = [
  'hoverPercentMode',
  'nodeHoverPercentDenominator',
  'percent',
  'percentage',
  'percentText',
  'percentageText',
];

function validateHoverShareContract(dataset, errors) {
  for (const link of dataset.links || []) {
    const source = typeof link.source === 'object' ? link.source?.id : link.source;
    const target = typeof link.target === 'object' ? link.target?.id : link.target;
    for (const field of DEPRECATED_HOVER_SHARE_FIELDS) {
      assert(
        !Object.prototype.hasOwnProperty.call(link, field),
        `${dataset.key}: link ${source} -> ${target} uses deprecated Hover Share override "${field}"; the renderer derives shares from authored amounts and topology`,
        errors
      );
    }
  }
}

// G2 enforces "rendered viewBox equals the reference-image dimensions", but
// only at render time. Authored canvas drift (salesforce-q1-fy27 declared
// render.width 3050 against a 2958px reference, casebook CB-011) previously
// survived until the CI d3 smoke; check the same invariant statically so any
// checkout catches it at pnpm check time without a browser.
function validateRenderCanvas(dataset, errors) {
  const reference = dataset.meta?.referenceImage;
  if (!reference || typeof reference !== 'object') return;
  const render = dataset.render || {};
  for (const side of ['width', 'height']) {
    if (typeof render[side] !== 'number' || typeof reference[side] !== 'number') continue;
    assert(
      render[side] === reference[side],
      `${dataset.key}: render.${side} ${render[side]} disagrees with meta.referenceImage.${side} ${reference[side]}`,
      errors
    );
  }
}

function validateRecordShape(record, errors) {
  const forbidden = ['nodes', 'links', 'layout', 'render'];
  for (const field of forbidden) {
    assert(record[field] === undefined, `${record.key}: SSOT record must not contain Sankey field "${field}"`, errors);
  }
  for (const field of ['key', 'company', 'period', 'currency', 'unit', 'revenue', 'costs', 'profit']) {
    assert(record[field] !== undefined, `${record.key || '<missing key>'}: missing required field "${field}"`, errors);
  }
}

function validateRevenueMetricRecordShape(record, errors) {
  const forbidden = ['nodes', 'links', 'layout', 'render'];
  for (const field of forbidden) {
    assert(record[field] === undefined, `${record.key}: revenue SSOT record must not contain view field "${field}"`, errors);
  }
  for (const field of ['key', 'company', 'subjectType', 'subjectId', 'metricFamily', 'metricName', 'displayName', 'period', 'currency', 'unit', 'definition', 'conditions', 'observations', 'sources']) {
    assert(record[field] !== undefined && record[field] !== '', `${record.key || '<missing key>'}: missing required revenue field "${field}"`, errors);
  }
  assert(record.metricFamily === 'revenue', `${record.key}: metricFamily must be "revenue"`, errors);
  assert(record.subjectType === 'company' || record.subjectType === 'product', `${record.key}: subjectType must be company or product`, errors);
  assert(Array.isArray(record.observations) && record.observations.length > 0, `${record.key}: observations must be a non-empty array`, errors);
  assert(Array.isArray(record.sources) && record.sources.length > 0, `${record.key}: sources must be a non-empty array`, errors);
}

function validateCompanyMetadata(records, companies, errors) {
  const required = ['key', 'name', 'sector', 'industry', 'description', 'sourceUrls'];
  const byName = new Map();

  for (const company of companies) {
    const label = company.name || company.key || '<missing company>';
    for (const field of required) {
      assert(company[field] !== undefined && company[field] !== '', `${label}: company metadata missing "${field}"`, errors);
    }
    assert(Array.isArray(company.sourceUrls) && company.sourceUrls.length > 0, `${label}: company metadata sourceUrls must be a non-empty array`, errors);
    const identityNames = Array.from(new Set([company.name, company.legalName, ...(company.aliases || [])].filter(Boolean).map(normalize)));
    for (const name of identityNames) {
      const existing = byName.get(name);
      assert(!existing || existing === company, `${label}: duplicate company metadata name or alias "${name}"`, errors);
      byName.set(name, company);
    }
  }

  for (const company of new Set(records.map((record) => record.company))) {
    assert(byName.has(normalize(company)), `${company}: missing company metadata record`, errors);
  }
}

function validateDatasetParity(record, dataset, errors) {
  const tolerance = record.roundingTolerance ?? 0.15;
  const nodeById = new Map((dataset.nodes || []).map((node) => [node.id, node]));
  validateHoverShareContract(dataset, errors);
  const checkNode = (item, label) => {
    if (!item?.id) return;
    const node = nodeById.get(item.id);
    assert(node, `${record.key}: missing Sankey node for ${label} "${item.id}"`, errors);
    if (node) assertClose(item.value, node.value, tolerance, `${record.key}: ${label} ${item.id}`, errors);
  };

  assertClose(record.revenue.total, nodeById.get('revenue')?.value, tolerance, `${record.key}: revenue total`, errors);
  checkNode(record.costs.costOfRevenue, 'costOfRevenue');
  checkNode(record.costs.tax, 'tax');
  assertClose(
    record.costs.operatingExpenses.total,
    nodeById.get('operating_expenses')?.value,
    tolerance,
    `${record.key}: operating expenses total`,
    errors
  );
  checkNode(record.profit.gross, 'gross profit');
  checkNode(record.profit.operating, 'operating profit');
  checkNode(record.profit.net, 'net profit');

  for (const item of flattenItems(record.revenue.items)) checkNode(item, 'revenue item');
  for (const item of record.costs.operatingExpenses.items || []) checkNode(item, 'operating expense item');
  for (const item of record.operatingOtherIncome?.items || []) checkNode(item, 'operating other income item');
  for (const item of record.operatingOtherExpenses?.items || []) checkNode(item, 'operating other expense item');
  for (const item of record.otherIncome?.items || []) checkNode(item, 'other income item');
  for (const item of record.otherExpenses?.items || []) checkNode(item, 'other expense item');
  for (const item of flattenItems(record.profit.gross?.items)) checkNode(item, 'gross profit item');
}

function validateArithmetic(record, errors) {
  const tolerance = record.roundingTolerance ?? 0.15;
  const revenueItems = sum(record.revenue.items);
  const opexItems = sum(record.costs.operatingExpenses.items);
  const operatingOtherIncomeItems = sum(record.operatingOtherIncome?.items);
  const operatingOtherIncomeTotal = record.operatingOtherIncome?.total || 0;
  const operatingOtherExpenseItems = sum(record.operatingOtherExpenses?.items);
  const operatingOtherExpenseTotal = record.operatingOtherExpenses?.total || 0;
  const otherItems = sum(record.otherIncome?.items);
  const otherTotal = record.otherIncome?.total || 0;
  const otherExpenseItems = sum(record.otherExpenses?.items);
  const otherExpenseTotal = record.otherExpenses?.total || 0;
  const grossProfitItems = sum(record.profit.gross?.items);
  const checkChildSums = (items, pathLabel) => {
    for (const item of items || []) {
      if ((item.children || []).length) {
        assertClose(sum(item.children), item.value, tolerance, `${record.key}: ${pathLabel} child sum ${item.id}`, errors);
        checkChildSums(item.children, `${pathLabel}/${item.id}`);
      }
    }
  };

  const checkRevenueBreakdowns = (breakdowns) => {
    const seenIds = new Set();
    for (const [index, breakdown] of (breakdowns || []).entries()) {
      const label = `${record.key}: revenue breakdown ${breakdown?.id || index}`;
      assert(breakdown && typeof breakdown === 'object', `${record.key}: revenue breakdown ${index} must be an object`, errors);
      if (!breakdown || typeof breakdown !== 'object') continue;
      assert(typeof breakdown.id === 'string' && breakdown.id, `${label} needs a stable id`, errors);
      assert(!seenIds.has(breakdown.id), `${record.key}: duplicate revenue breakdown id ${breakdown.id}`, errors);
      seenIds.add(breakdown.id);
      assert(Array.isArray(breakdown.items) && breakdown.items.length > 0, `${label} needs non-empty items`, errors);
      assertClose(breakdown.total, record.revenue.total, tolerance, `${label} total`, errors);
      assertClose(sum(breakdown.items), breakdown.total, tolerance, `${label} item sum`, errors);
      checkChildSums(breakdown.items, `revenue.breakdowns/${breakdown.id}`);
    }
  };

  assertClose(revenueItems, record.revenue.total, tolerance, `${record.key}: revenue item sum`, errors);
  checkChildSums(record.revenue.items, 'revenue');
  checkRevenueBreakdowns(record.revenue.breakdowns);
  assertClose(opexItems, record.costs.operatingExpenses.total, tolerance, `${record.key}: operating expense item sum`, errors);
  assertClose(
    operatingOtherIncomeItems,
    operatingOtherIncomeTotal,
    tolerance,
    `${record.key}: operating other income item sum`,
    errors
  );
  assertClose(
    operatingOtherExpenseItems,
    operatingOtherExpenseTotal,
    tolerance,
    `${record.key}: operating other expense item sum`,
    errors
  );
  assertClose(otherItems, otherTotal, tolerance, `${record.key}: other income item sum`, errors);
  assertClose(otherExpenseItems, otherExpenseTotal, tolerance, `${record.key}: other expense item sum`, errors);
  if ((record.profit.gross?.items || []).length > 0) {
    assertClose(grossProfitItems, record.profit.gross.value, tolerance, `${record.key}: gross profit item sum`, errors);
  }
  assertClose(
    record.revenue.total - record.costs.costOfRevenue.value,
    record.profit.gross.value,
    tolerance,
    `${record.key}: gross profit arithmetic`,
    errors
  );
  assertClose(
    record.profit.gross.value - record.costs.operatingExpenses.total + operatingOtherIncomeTotal - operatingOtherExpenseTotal,
    record.profit.operating.value,
    tolerance,
    `${record.key}: operating profit arithmetic`,
    errors
  );
  assertClose(
    record.profit.operating.value - record.costs.tax.value + otherTotal - otherExpenseTotal,
    record.profit.net.value,
    tolerance,
    `${record.key}: net profit arithmetic`,
    errors
  );
}

function validateCurrencyCoverage({ records, revenueRecords, companies, datasets, domain }, errors) {
  if (!domain) {
    errors.push('src/trace-domain.js did not expose TraceDomain; currency coverage checks cannot run');
    return;
  }
  const { currencyCode, currencyUnitsPerUsd, MONEY_UNIT_MULTIPLIERS } = domain;
  const knownUnit = (unit) => Object.prototype.hasOwnProperty.call(MONEY_UNIT_MULTIPLIERS, String(unit || '').trim().toUpperCase());
  // Unknown currencies make amountValueUsd return null, which silently drops the
  // company from cross-currency totals and comparison scaling at runtime.
  const assertConvertible = (label, currency, unit) => {
    assert(
      currencyUnitsPerUsd(currency) != null,
      `${label}: currency "${currency}" has no USD rate in trace-domain USD_FX_SNAPSHOT`,
      errors
    );
    assert(knownUnit(unit), `${label}: unknown money unit "${unit}"`, errors);
  };

  for (const record of records) assertConvertible(record.key, record.currency, record.unit);
  for (const record of revenueRecords) assertConvertible(`${record.key} (revenue)`, record.currency, record.unit);

  const recordByKey = new Map(records.map((record) => [record.key, record]));
  for (const dataset of datasets) {
    const record = recordByKey.get(dataset.key);
    if (!record) continue;
    const metaCurrency = String(dataset.meta?.currency ?? '').trim();
    if (metaCurrency) {
      assert(
        currencyCode(metaCurrency) === currencyCode(record.currency),
        `${dataset.key}: dataset meta.currency "${metaCurrency}" disagrees with SSOT currency "${record.currency}"`,
        errors
      );
    }
    assert(
      String(dataset.meta?.unit ?? '') === String(record.unit ?? ''),
      `${dataset.key}: dataset meta.unit "${dataset.meta?.unit}" disagrees with SSOT unit "${record.unit}"`,
      errors
    );
  }

  for (const company of companies) {
    const marketCap = company.marketCap;
    if (!marketCap || typeof marketCap !== 'object') continue;
    if (Number.isFinite(marketCap.valueUsd ?? marketCap.usd)) continue;
    const label = company.name || company.key || '<company>';
    assert(Number.isFinite(marketCap.value), `${label}: marketCap needs valueUsd or a numeric value`, errors);
    assertConvertible(`${label} marketCap`, marketCap.currency || marketCap.currencyCode || '$', marketCap.unit);
  }
}

function dateValue(date) {
  const time = Date.parse(`${date}T00:00:00Z`);
  return Number.isFinite(time) ? time : null;
}

function validateRevenueMetric(record, errors) {
  validateRevenueMetricRecordShape(record, errors);
  const observations = [...(record.observations || [])];
  const sorted = [...observations].sort((a, b) => dateValue(a.date) - dateValue(b.date));
  assert(sorted.length === observations.length && sorted.every((item, index) => item === observations[index]), `${record.key}: observations must be sorted by ascending date`, errors);

  sorted.forEach((observation, index) => {
    assert(dateValue(observation.date) != null, `${record.key}: observation ${index} has invalid date "${observation.date}"`, errors);
    assert(typeof observation.value === 'number' && Number.isFinite(observation.value), `${record.key}: observation ${observation.date} missing numeric value`, errors);
    if (observation.notes !== undefined) {
      assert(
        Array.isArray(observation.notes) && observation.notes.every((note) => typeof note === 'string' && note.trim()),
        `${record.key}: observation ${observation.date} notes must be a non-empty string array`,
        errors
      );
    }
    if (index === 0) {
      assert(observation.momGrowthPct == null, `${record.key}: first observation should not have momGrowthPct`, errors);
      return;
    }
    const previous = sorted[index - 1];
    const expectedGrowth = Math.round(((observation.value - previous.value) / previous.value) * 100);
    assert(
      observation.momGrowthPct === expectedGrowth,
      `${record.key}: ${observation.date} momGrowthPct ${observation.momGrowthPct} should be ${expectedGrowth}`,
      errors
    );
  });

  const latest = sorted[sorted.length - 1];
  if (latest && record.value) {
    assert(record.value.latestDate === latest.date, `${record.key}: value.latestDate does not match latest observation`, errors);
    assertClose(record.value.latest, latest.value, 0, `${record.key}: value.latest`, errors);
    assert(record.value.latestMoMGrowthPct === latest.momGrowthPct, `${record.key}: value.latestMoMGrowthPct does not match latest observation`, errors);
  }

  for (const source of record.sources || []) {
    assert(source.name, `${record.key}: source missing name`, errors);
    assert(source.url, `${record.key}: source missing url`, errors);
    // sourceImage.localOnly declares evidence that intentionally never gets
    // committed (e.g. licensed screenshots); the record keeps the path for
    // local provenance without failing fresh checkouts or CI.
    if (source.sourceImage?.src && source.sourceImage.localOnly !== true) {
      assert(
        existsSync(resolveSourcePath(source.sourceImage.src)),
        `${record.key}: source image does not exist: ${source.sourceImage.src}`,
        errors
      );
    }
  }
}

// Registration parity for the per-company SSOT script directories: every
// file on disk must be registered in index.html and vice versa, otherwise
// the browser and the VM verifiers would see different data.
function assertSsotRegistrationParity(indexHtml, dir, registeredScripts, label) {
  const onDisk = listScripts(dir);
  const registered = new Set(registeredScripts);
  const unregistered = onDisk.filter((script) => !registered.has(script));
  if (unregistered.length) {
    throw new Error(`${label} script(s) on disk but not registered in index.html: ${unregistered.join(', ')}`);
  }
  const missing = registeredScripts.filter((script) => !existsSync(path.join(rootDir, script)));
  if (missing.length) {
    throw new Error(`Registered ${label} script(s) missing on disk: ${missing.join(', ')}`);
  }
}

function main() {
  const indexHtml = readProjectFile('index.html');
  const scripts = dataScripts();
  const missing = scripts.filter((script) => !existsSync(path.join(rootDir, script)));
  if (missing.length) {
    throw new Error(`Missing registered data script(s): ${missing.join(', ')}`);
  }

  const registered = new Set(scripts);
  const onDisk = readdirSync(path.join(rootDir, DATASET_SCRIPT_DIR))
    .filter((name) => name.endsWith('.js'))
    .map((name) => `${DATASET_SCRIPT_DIR}/${name}`);
  const unregistered = onDisk.filter(
    (script) => !registered.has(script) && !UNREGISTERED_DATASET_SCRIPTS.has(script)
  );
  if (unregistered.length) {
    throw new Error(
      `Dataset script(s) on disk but not registered in the dataset manifest: ${unregistered.join(', ')} (run pnpm sync:index-datasets)`
    );
  }
  const staleExemptions = [...UNREGISTERED_DATASET_SCRIPTS].filter(
    (script) => registered.has(script) || !onDisk.includes(script)
  );
  if (staleExemptions.length) {
    throw new Error(
      `Stale UNREGISTERED_DATASET_SCRIPTS entr(y/ies): ${staleExemptions.join(', ')}`
    );
  }
  assertSsotRegistrationParity(
    indexHtml,
    INCOME_STATEMENT_SCRIPT_DIR,
    incomeStatementScriptsFromIndex(indexHtml),
    'income-statement SSOT'
  );
  assertSsotRegistrationParity(
    indexHtml,
    COMPANY_METADATA_SCRIPT_DIR,
    companyMetadataScriptsFromIndex(indexHtml),
    'company-metadata SSOT'
  );

  const loaded = loadBrowserData({ runtime: ['src/trace-domain.js'], datasetScripts: scripts });
  const { records, revenueRecords, companies, datasets } = loaded;
  const errors = [];
  const datasetKeys = scripts.map((script) => path.basename(script, '.js'));
  const recordKeys = records.map((record) => record.key);
  const uniqueRecordKeys = new Set(recordKeys);

  assert(uniqueRecordKeys.size === recordKeys.length, 'SSOT contains duplicate record keys', errors);
  for (const key of datasetKeys) {
    assert(uniqueRecordKeys.has(key), `Missing SSOT record for registered dataset: ${key}`, errors);
  }
  for (const key of recordKeys) {
    assert(datasetKeys.includes(key), `SSOT record is not registered as a Sankey dataset: ${key}`, errors);
  }

  const datasetsByKey = new Map(datasets.map((dataset) => [dataset.key, dataset]));
  for (const dataset of datasets) validateRenderCanvas(dataset, errors);
  for (const record of records) {
    validateRecordShape(record, errors);
    const dataset = datasetsByKey.get(record.key);
    assert(dataset, `${record.key}: matching Sankey dataset was not loaded`, errors);
    if (dataset) validateDatasetParity(record, dataset, errors);
    validateArithmetic(record, errors);
  }
  const revenueKeys = revenueRecords.map((record) => record.key);
  assert(new Set(revenueKeys).size === revenueKeys.length, 'Revenue SSOT contains duplicate record keys', errors);
  for (const record of revenueRecords) validateRevenueMetric(record, errors);
  validateCompanyMetadata([...records, ...revenueRecords], companies, errors);
  validateCurrencyCoverage(loaded, errors);

  if (errors.length) {
    console.error(`SSOT verification failed with ${errors.length} error(s):`);
    for (const error of errors) console.error(`- ${error}`);
    process.exit(1);
  }

  console.log(`SSOT verification passed: ${records.length} income statement record(s), ${revenueRecords.length} revenue metric record(s), ${datasetKeys.length} registered dataset(s).`);
}

main();
