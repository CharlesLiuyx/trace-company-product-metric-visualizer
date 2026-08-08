import { loadBrowserData } from './browser-data-loader.mjs';

const UNIT_MULTIPLIERS = Object.freeze({ K: 1e3, M: 1e6, B: 1e9, T: 1e12 });

function coverageError(code, message) {
  const error = new Error(message);
  error.code = code;
  return error;
}

function finiteValue(value) {
  return typeof value === 'number' && Number.isFinite(value);
}

function itemValue(items, id) {
  const queue = Array.isArray(items) ? [...items] : [];
  while (queue.length > 0) {
    const item = queue.shift();
    if (!item || typeof item !== 'object') continue;
    if (item.id === id) return finiteValue(item.value) ? item.value : undefined;
    if (Array.isArray(item.children)) queue.push(...item.children);
  }
  return undefined;
}

function revenueBreakdownValue(breakdowns, id) {
  const matchingBreakdown = (Array.isArray(breakdowns) ? breakdowns : [])
    .find((breakdown) => breakdown?.id === id);
  if (matchingBreakdown) return matchingBreakdown.total;
  return itemValue((Array.isArray(breakdowns) ? breakdowns : []).flatMap((breakdown) => breakdown?.items || []), id);
}

function convertAmount(amount, targetUnit, sourceId) {
  const sourceMultiplier = UNIT_MULTIPLIERS[amount.unit];
  const targetMultiplier = UNIT_MULTIPLIERS[targetUnit];
  if (!sourceMultiplier || !targetMultiplier) {
    throw coverageError('SOURCE_COVERAGE_UNIT_INVALID', `${sourceId} cannot reconcile ${amount.unit} against SSOT unit ${targetUnit}`);
  }
  return Number(amount.value) * sourceMultiplier / targetMultiplier;
}

function equalAmount(actual, expected) {
  const tolerance = Math.max(1e-12, Math.abs(expected) * 1e-9);
  return finiteValue(actual) && Math.abs(actual - expected) <= tolerance;
}

function displayDecimals(raw) {
  return Number.isInteger(raw) && raw >= 0 ? raw : 1;
}

function roundsNonZeroToZero(value, decimals) {
  return value !== 0 && Number(Math.abs(value).toFixed(displayDecimals(decimals))) === 0;
}

function parseDisplayAmount(text, implicitUnit, { parenthesizedNegative = true } = {}) {
  const display = String(text || '');
  const parenthesized = display.match(/\(\s*[^\d-]*(-?(?:\d+(?:,\d{3})*(?:\.\d+)?|\.\d+))\s*([KMBT])?\s*\)/i);
  if (parenthesized) {
    const unit = (parenthesized[2] || implicitUnit || '').toUpperCase();
    if (!UNIT_MULTIPLIERS[unit]) return null;
    const magnitude = Math.abs(Number(parenthesized[1].replaceAll(',', ''))) * UNIT_MULTIPLIERS[unit] / UNIT_MULTIPLIERS[implicitUnit];
    return parenthesizedNegative ? -magnitude : magnitude;
  }
  const match = display.match(/(-?(?:\d+(?:,\d{3})*(?:\.\d+)?|\.\d+))\s*([KMBT])?/i);
  if (!match) return null;
  const unit = (match[2] || implicitUnit || '').toUpperCase();
  if (!UNIT_MULTIPLIERS[unit]) return null;
  return Number(match[1].replaceAll(',', '')) * UNIT_MULTIPLIERS[unit] / UNIT_MULTIPLIERS[implicitUnit];
}

function assertRecordDisplayPrecision(record, expected, sourceId) {
  if (!roundsNonZeroToZero(expected, record.decimals)) return;
  throw coverageError(
    'SOURCE_COVERAGE_DISPLAY_PRECISION_LOSS',
    `${sourceId} is non-zero but ${record.decimals ?? 1} ${record.unit}-unit decimal place(s) render it as zero; recover the precise amount and increase SSOT display decimals`
  );
}

function assertNodeDisplayPrecision(dataset, node, expected, unit, sourceId) {
  if (node.valueText != null) {
    const displayed = parseDisplayAmount(node.valueText, unit, { parenthesizedNegative: expected < 0 });
    if (!equalAmount(displayed, expected)) {
      throw coverageError(
        'SOURCE_COVERAGE_ADAPTER_DISPLAY_MISMATCH',
        `${sourceId} Adapter node ${node.id} valueText does not preserve the reconciled non-zero amount`
      );
    }
    return;
  }
  if (!roundsNonZeroToZero(expected, dataset.meta?.decimals)) return;
  throw coverageError(
    'SOURCE_COVERAGE_DISPLAY_PRECISION_LOSS',
    `${sourceId} Adapter node ${node.id} is non-zero but its display precision renders it as zero; increase Adapter meta.decimals or use an exact non-zero valueText`
  );
}

function incomePathValue(record, ref) {
  if (ref.path === 'revenue.total') return ref.id === 'revenue' ? record.revenue?.total : undefined;
  if (ref.path === 'costs.operatingExpenses.total') return ref.id === 'operating_expenses' ? record.costs?.operatingExpenses?.total : undefined;
  const totals = {
    'operatingOtherIncome.total': ['operating_other_income', record.operatingOtherIncome?.total],
    'operatingOtherExpenses.total': ['operating_other_expenses', record.operatingOtherExpenses?.total],
    'otherIncome.total': ['other_income', record.otherIncome?.total],
    'otherExpenses.total': ['other_expenses', record.otherExpenses?.total],
  }[ref.path];
  if (totals) return ref.id === totals[0] ? totals[1] : undefined;
  const direct = {
    'costs.costOfRevenue': record.costs?.costOfRevenue,
    'costs.tax': record.costs?.tax,
    'profit.gross': record.profit?.gross,
    'profit.operating': record.profit?.operating,
    'profit.net': record.profit?.net,
    'revenue.paymentNetwork.gross': record.revenue?.paymentNetwork?.gross,
    'revenue.paymentNetwork.rebates': record.revenue?.paymentNetwork?.rebates,
  }[ref.path];
  if (direct) return direct.id === ref.id ? direct.value : undefined;
  const items = {
    'revenue.items': record.revenue?.items,
    'revenue.paymentNetwork.grossItems': record.revenue?.paymentNetwork?.grossItems,
    'costs.costOfRevenue.items': record.costs?.costOfRevenue?.items,
    'costs.operatingExpenses.items': record.costs?.operatingExpenses?.items,
    'operatingOtherIncome.items': record.operatingOtherIncome?.items,
    'operatingOtherExpenses.items': record.operatingOtherExpenses?.items,
    'otherIncome.items': record.otherIncome?.items,
    'otherExpenses.items': record.otherExpenses?.items,
    'profit.gross.items': record.profit?.gross?.items,
    'profit.operating.items': record.profit?.operating?.items,
  }[ref.path];
  if (ref.path === 'revenue.breakdowns') {
    return revenueBreakdownValue(record.revenue?.breakdowns, ref.id);
  }
  return itemValue(items, ref.id);
}

export function assertSourceCoverageAuthoredValues(sourceCoverage, options = {}) {
  const valueItems = (sourceCoverage?.items || []).filter((item) => item.amount);
  if (valueItems.length === 0) return { checked: 0 };
  const loaded = options.loadedData || (options.loadBrowserData || loadBrowserData)();
  if (sourceCoverage.adapter === 'income-statement') {
    const record = (loaded.records || []).find((item) => item.key === sourceCoverage.datasetKey);
    const dataset = (loaded.datasets || []).find((item) => item.key === sourceCoverage.datasetKey);
    if (!record || !dataset) {
      throw coverageError('SOURCE_COVERAGE_AUTHORED_RECORD_MISSING', `Cannot load Income Statement SSOT and View Adapter for ${sourceCoverage.datasetKey}`);
    }
    const nodes = new Map((dataset.nodes || []).map((node) => [node.id, node]));
    const nonNodeMetrics = new Map((dataset.nonNodeMetrics || []).map((metric) => [metric.id, metric]));
    for (const item of valueItems) {
      const expected = convertAmount(item.amount, record.unit, item.sourceId);
      const actualSsot = incomePathValue(record, item.ssotRef);
      if (!equalAmount(actualSsot, expected)) {
        throw coverageError('SOURCE_COVERAGE_SSOT_VALUE_MISMATCH', `${item.sourceId} Source amount ${item.amount.value}${item.amount.unit} does not match SSOT ${item.ssotRef.path}/${item.ssotRef.id}: ${actualSsot}`);
      }
      assertRecordDisplayPrecision(record, expected, item.sourceId);
      for (const metricId of item.metricTargets || item.nodeTargets) {
        const node = nodes.get(metricId);
        const nonNodeMetric = nonNodeMetrics.get(metricId);
        const adapterValue = node?.value ?? nonNodeMetric?.value;
        if (!equalAmount(adapterValue, expected)) {
          throw coverageError('SOURCE_COVERAGE_ADAPTER_VALUE_MISMATCH', `${item.sourceId} Source amount ${item.amount.value}${item.amount.unit} does not match Adapter metric ${metricId}: ${adapterValue}`);
        }
        if (node) assertNodeDisplayPrecision(dataset, node, expected, record.unit, item.sourceId);
      }
      if (item.face && expected === 0) {
        throw coverageError('SOURCE_COVERAGE_VISIBLE_ZERO_VALUE', `${item.sourceId} has an observed Source face but reconciles to zero`);
      }
    }
    return { checked: valueItems.length, unit: record.unit };
  }

  const record = (loaded.revenueRecords || []).find((item) => item.key === sourceCoverage.datasetKey);
  if (!record) throw coverageError('SOURCE_COVERAGE_AUTHORED_RECORD_MISSING', `Cannot load Revenue Metric SSOT for ${sourceCoverage.datasetKey}`);
  const observationByDate = new Map((record.observations || []).map((item) => [item.date, item.value]));
  for (const item of valueItems) {
    const expected = convertAmount(item.amount, record.unit, item.sourceId);
    const actual = observationByDate.get(item.ssotRef.date);
    if (!equalAmount(actual, expected)) {
      throw coverageError('SOURCE_COVERAGE_SSOT_VALUE_MISMATCH', `${item.sourceId} Source amount ${item.amount.value}${item.amount.unit} does not match revenue observation ${item.ssotRef.date}: ${actual}`);
    }
    assertRecordDisplayPrecision(record, expected, item.sourceId);
  }
  return { checked: valueItems.length, unit: record.unit };
}
