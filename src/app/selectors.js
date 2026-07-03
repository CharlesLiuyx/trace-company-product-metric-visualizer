/* Trace viewer · selectors.js
 * Read-only derivations over state + catalog: current record, localized
 * display fields, search text, record ordering, variant labels. */

function currentRecord() {
  return records.find((record) => record.index === state.activeIndex) || records[0];
}
function currentDataset() {
  return currentRecord()?.dataset || sets[0];
}
function isCompanyInfoMetric() {
  return state.metricMode === 'companyInfo';
}
function isIncomeStatementMetric() {
  return state.metricMode === 'incomeStatement';
}
function isRevenueMetric() {
  return state.metricMode === 'revenue';
}
function activeTableKind() {
  if (isCompanyInfoMetric()) return 'company';
  if (isRevenueMetric()) return 'revenue';
  return 'statement';
}

function displayDataset(record, language = state.language) {
  return displayRecord(record, language).dataset;
}
function displayRecord(record, language = state.language) {
  const code = languageCode(language);
  if (!record) {
    return {
      dataset: null,
      company: '',
      period: '',
      periodNote: '',
      label: '',
      variantLabel: t('defaultVariant', {}, code),
      searchText: '',
    };
  }
  const byLanguage = languageObjectCache(i18nObjectCaches.records, code);
  if (byLanguage.has(record)) return byLanguage.get(record);
  const meta = localizedCompanyRecord(metadataFor(record.company), code);
  if (record.metric) {
    const metric = localizedRevenueRecord(record.metric, code) || record.metric;
    const display = {
      dataset: null,
      metric,
      company: clean(meta.displayName || meta.name || record.company),
      period: clean(metric.period || record.period),
      periodNote: clean(metric.periodNote || record.periodNote),
      label: clean(metric.displayName || metric.metricName || record.label),
      variantLabel: t('defaultVariant', {}, code),
    };
    display.searchText = [
      record.searchText,
      companyMetadataSearchText(record.company, code),
      display.company,
      display.period,
      display.periodNote,
      display.label,
    ].join(' ');
    byLanguage.set(record, display);
    return display;
  }
  const dataset = localizedDataset(record.dataset, code) || record.dataset;
  const display = {
    dataset,
    company: clean(meta.displayName || meta.name || record.company),
    period: periodFor(dataset),
    periodNote: clean(dataset?.meta?.periodNote || record.periodNote),
    label: clean(dataset?.name || dataset?.meta?.title || record.label),
    variantLabel: record.variantFeature ? localizedText(record.variantFeature, code) : t('defaultVariant', {}, code),
  };
  display.searchText = [
    record.searchText,
    companyMetadataSearchText(record.company, code),
    display.company,
    display.period,
    display.periodNote,
    display.label,
    display.variantLabel,
  ].join(' ');
  byLanguage.set(record, display);
  return display;
}
function displayCompany(record, language = state.language) {
  return displayRecord(record, language).company;
}
function displayPeriod(record, language = state.language) {
  return displayRecord(record, language).period;
}
function displayPeriodNote(record, language = state.language) {
  return displayRecord(record, language).periodNote;
}
function displayLabel(record, language = state.language) {
  return displayRecord(record, language).label;
}
function currentCompanyGroups() {
  return companyGroupsForMetric(state.metricMode);
}
function groupFor(company, mode = state.metricMode) {
  return metricGroupForCompany(company, mode) || (mode === 'companyInfo' ? groups.find((group) => group.company === company) || groups[0] : null);
}

function sortedVariantRecords(recordList) {
  return [...(recordList || [])].sort((a, b) =>
    (a.variantFeature ? 1 : 0) - (b.variantFeature ? 1 : 0) ||
    a.dataset.key.length - b.dataset.key.length ||
    a.index - b.index
  );
}
function variantLabel(record, language = state.language) {
  return displayRecord(record, language).variantLabel;
}
function recordByIndex(index) {
  return records.find((record) => record.index === index);
}

function metadataFor(company) {
  return companyMetadataByName.get(normalize(company)) || fallbackCompanyMetadata(company);
}
function displayCompanyName(company, language = state.language) {
  const meta = localizedCompanyRecord(metadataFor(company), language);
  return clean(meta.displayName || meta.name || company);
}
function supportedSearchLanguages(primary = state.language) {
  return [
    primary,
    I18N_API.defaultLanguage || 'en',
    ...(I18N_API.languageCodes || Object.keys(I18N)),
  ]
    .map((language) => languageCode(language))
    .filter((language, index, list) => language && list.indexOf(language) === index);
}
function companyMetadataSearchText(company, language = state.language) {
  const sourceMeta = metadataFor(company);
  const meta = localizedCompanyRecord(sourceMeta, language) || sourceMeta;
  const parts = [
    company,
    sourceMeta.key,
    sourceMeta.name,
    sourceMeta.displayName,
    sourceMeta.legalName,
    ...(sourceMeta.aliases || []),
    sourceMeta.ticker,
    sourceMeta.exchange,
    meta.key,
    meta.name,
    meta.displayName,
    meta.legalName,
    ...(meta.aliases || []),
    meta.ticker,
    meta.exchange,
  ];
  return parts.map(clean).filter(Boolean).join(' ');
}
function searchTextForRecord(record) {
  return displayRecord(record).searchText;
}
function multilingualSearchTextForRecord(record) {
  return supportedSearchLanguages()
    .map((language) => displayRecord(record, language).searchText)
    .join(' ');
}
function multilingualCompanySearchText(company) {
  return supportedSearchLanguages()
    .map((language) => companyMetadataSearchText(company, language))
    .join(' ');
}
function searchTextForGroup(group) {
  if (!group) return '';
  const byLanguage = languageObjectCache(i18nObjectCaches.groups);
  if (!byLanguage.has(group)) {
    byLanguage.set(group, [
      group.searchText,
      multilingualCompanySearchText(group.company),
      ...group.records.map((record) => multilingualSearchTextForRecord(record)),
    ].join(' '));
  }
  return byLanguage.get(group);
}

function revenueRecordsForCompany(company = state.company) {
  return metricGroupForCompany(company, 'revenue')?.revenueRecords || [];
}
