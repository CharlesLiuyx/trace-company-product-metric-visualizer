/* Trace viewer · financial.js
 * USD/FX aggregation across mixed reporting currencies and the company
 * sort values/labels derived from financial data. */

function financialFor(record) {
  if (!record?.dataset?.key) return null;
  return financialRecordByKey.get(record.dataset.key);
}
function marketCapValueUsd(company) {
  const marketCap = metadataFor(company)?.marketCap;
  if (!marketCap || typeof marketCap !== 'object') return null;
  const explicitUsd = finiteNumber(marketCap.valueUsd ?? marketCap.usd);
  if (explicitUsd != null) return explicitUsd;
  return amountValueUsd(marketCap.value, marketCap.currency || marketCap.currencyCode || '$', marketCap.unit);
}
function financialValueUsd(record, value) {
  if (!record) return null;
  return amountValueUsd(value, record.currency, record.unit);
}
function scopeFinancialRows() {
  return scopeRecordsForMetric('incomeStatement')
    .map((record) => ({ record, financial: financialFor(record) }))
    .filter((row) => row.financial);
}
function financialMetricRawValue(financial, metric) {
  if (!financial) return null;
  if (metric === 'revenue') return finiteNumber(financial.revenue?.total);
  if (metric === 'grossProfit') return finiteNumber(financial.profit?.gross?.value);
  if (metric === 'operatingProfit') return finiteNumber(financial.profit?.operating?.value);
  if (metric === 'netProfit') return finiteNumber(financial.profit?.net?.value);
  if (metric === 'costOfRevenue') return finiteNumber(financial.costs?.costOfRevenue?.value);
  if (metric === 'operatingExpenses') return finiteNumber(financial.costs?.operatingExpenses?.total);
  if (metric === 'tax') return finiteNumber(financial.costs?.tax?.value);
  return null;
}
function sumUsdRows(rows) {
  let total = 0;
  let converted = false;
  const excluded = [];
  rows.forEach((row) => {
    const valueUsd = amountValueUsd(row.value, row.currency, row.unit);
    if (valueUsd == null) {
      excluded.push(row.company);
      return;
    }
    if (currencyCode(row.currency) !== 'USD') converted = true;
    total += valueUsd;
  });
  return { total, converted, excluded };
}
function fxTooltip(excluded = []) {
  const parts = [t('fxConvertedTitle', { source: USD_FX_SNAPSHOT.source, asOf: USD_FX_SNAPSHOT.asOf })];
  if (excluded.length) parts.push(t('fxExcludedTitle', { companies: excluded.join(', ') }));
  return parts.join(' ');
}
function formatUsdTotal({ total, converted, excluded }) {
  const suffix = excluded.length ? ` ${t('fxExcludedSuffix', { companies: excluded.join(', ') })}` : '';
  return `${converted ? '≈' : ''}${formatUsdShort(total)}${suffix}`;
}
function scopeFinancialTotalInfo(metric) {
  const rows = scopeFinancialRows()
    .map(({ record, financial }) => ({ record, financial, value: financialMetricRawValue(financial, metric) }))
    .filter((row) => row.value != null);
  if (!rows.length) return null;
  const first = rows[0].financial;
  const sameUnit = rows.every(({ financial }) => (
    currencyCode(financial.currency) === currencyCode(first.currency)
    && clean(financial.unit) === clean(first.unit)
    && Number(financial.decimals ?? 1) === Number(first.decimals ?? 1)
  ));
  if (sameUnit) {
    const total = rows.reduce((sum, row) => sum + row.value, 0);
    return {
      text: formatAmount(first, total, ['costOfRevenue', 'operatingExpenses', 'tax'].includes(metric)),
      converted: false,
      excluded: [],
    };
  }
  const usd = sumUsdRows(rows.map((row) => ({
    value: row.value,
    currency: row.financial.currency,
    unit: row.financial.unit,
    company: displayCompany(row.record) || row.record.company,
  })));
  return { text: formatUsdTotal(usd), converted: usd.converted, excluded: usd.excluded };
}
function formatScopeFinancialTotal(metric) {
  return scopeFinancialTotalInfo(metric)?.text || '';
}
function scopeFxState(infos) {
  const present = infos.filter(Boolean);
  const excluded = [...new Set(present.flatMap((info) => info.excluded))];
  return { active: present.some((info) => info.converted) || excluded.length > 0, excluded };
}
function latestFinancialForGroup(group) {
  return group?.latestStatementRecord ? financialFor(group.latestStatementRecord) : group?.latest ? financialFor(group.latest) : null;
}
function latestNetProfitUsd(group) {
  const financial = latestFinancialForGroup(group);
  return financialValueUsd(financial, financial?.profit?.net?.value);
}
function latestNetProfitUsdLabel(group) {
  const financial = latestFinancialForGroup(group);
  const valueUsd = financialValueUsd(financial, financial?.profit?.net?.value);
  if (valueUsd == null) return formatUsdShort(null);
  const approx = currencyCode(financial.currency) !== 'USD' ? '≈' : '';
  return `${approx}${formatUsdShort(valueUsd)}`;
}
function foundedYear(company) {
  const match = clean(metadataFor(company).founded).match(/\b(\d{4})\b/);
  return match ? Number(match[1]) : null;
}
function displayCompanyForGroup(group, language = state.language) {
  if (group?.latest) return displayCompany(group.latest, language) || group.company || '';
  return displayCompanyName(group?.company, language);
}
function compareNullableNumber(a, b, direction = -1) {
  const left = finiteNumber(a);
  const right = finiteNumber(b);
  const leftMissing = left == null;
  const rightMissing = right == null;
  if (leftMissing && rightMissing) return 0;
  if (leftMissing) return 1;
  if (rightMissing) return -1;
  return direction * (left - right);
}
function companySortValue(group, sortKey = state.companySort) {
  if (sortKey === 'recent') return group?.updatedSortValue;
  if (sortKey === 'marketCap') return marketCapValueUsd(group?.company);
  if (sortKey === 'netProfit') return latestNetProfitUsd(group);
  if (sortKey === 'founded') return foundedYear(group?.company);
  return displayCompanyForGroup(group);
}
function compareCompanyGroups(a, b, language = state.language) {
  const sortKey = COMPANY_SORT_KEYS.includes(state.companySort) ? state.companySort : 'name';
  const direction = state.companySortDirection === 'desc' ? -1 : 1;
  if (sortKey !== 'name') {
    const byMetric = compareNullableNumber(companySortValue(a, sortKey), companySortValue(b, sortKey), direction);
    if (byMetric) return byMetric;
  }
  const nameDirection = sortKey === 'name' ? direction : 1;
  return nameDirection * displayCompanyForGroup(a, language).localeCompare(displayCompanyForGroup(b, language), languageCode(language)) ||
    nameDirection * a.company.localeCompare(b.company) ||
    (b.latest?.sortValue || 0) - (a.latest?.sortValue || 0);
}
function sortedCompanyGroups(groupList) {
  return [...(groupList || [])].sort((a, b) => compareCompanyGroups(a, b));
}
function formatUsdShort(value, language = state.language) {
  const number = finiteNumber(value);
  if (number == null) return t('missing', {}, language);
  const sign = number < 0 ? '-' : '';
  const absolute = Math.abs(number);
  const units = [
    { suffix: 'T', value: 1e12 },
    { suffix: 'B', value: 1e9 },
    { suffix: 'M', value: 1e6 },
  ];
  const unit = units.find((item) => absolute >= item.value) || { suffix: '', value: 1 };
  const scaled = absolute / unit.value;
  const decimals = scaled >= 100 || unit.suffix === '' ? 0 : scaled >= 10 ? 1 : 2;
  return `${sign}$${scaled.toFixed(decimals)}${unit.suffix}`;
}
function formatUpdatedDate(value, language = state.language) {
  const time = timestampMs(value);
  if (time == null) return t('missing', {}, language);
  const locale = languageCode(language) === 'zh' ? 'zh-CN' : 'en-US';
  return new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'short', day: 'numeric' }).format(new Date(time));
}
function companySortMetaText(group) {
  if (state.companySort === 'recent') {
    return t('companySortMetaUpdated', { value: formatUpdatedDate(group.updatedSortValue) });
  }
  if (state.companySort === 'marketCap') {
    return t('companySortMetaMarketCap', { value: formatUsdShort(marketCapValueUsd(group.company)) });
  }
  if (state.companySort === 'netProfit') {
    return t('companySortMetaNetProfit', { value: latestNetProfitUsdLabel(group) });
  }
  if (state.companySort === 'founded') {
    return t('companySortMetaFounded', { value: metadataFor(group.company).founded || t('missing') });
  }
  return group.latest ? `${t('latest')} ${displayPeriod(group.latest)}` : t('metricCompanyInfo');
}
