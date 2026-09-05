/* Trace viewer · state.js
 * Data catalog wiring (TraceDomain), stored preferences, metric/view mode
 * rules, dataset hash routing, the mutable UI state object, and its
 * mutation primitives (company/period scope selection). */

const TraceDomain = window.TraceDomain;
const {
  ANNUAL_PERIOD_KEY,
  COMPANY_SORT_CONFIG,
  COMPANY_SORT_DIRECTIONS,
  COMPANY_SORT_KEYS,
  QUARTER_TAGS,
  USD_FX_SNAPSHOT,
  amountValueUsd,
  clean,
  currencyCode,
  companyKey,
  fallbackCompanyMetadata,
  finiteNumber,
  normalize,
  periodFor,
  timestampMs,
  unitMultiplier,
} = TraceDomain;
const traceCatalog = TraceDomain.createCatalog(window);
const runtimeData = window.TraceRuntimeData;
runtimeData.bind(traceCatalog);
const sets = traceCatalog.datasets;

const SIDEBAR_WIDTH_KEY = 'sankey.sidebar.width';
const SIDEBAR_COLLAPSED_KEY = 'sankey.sidebar.collapsed';
const VIEW_MODE_KEY = 'sankey.view.mode';
const METRIC_MODE_KEY = 'sankey.metric.mode';
const PERIOD_EXPANDED_KEY = 'sankey.period.expanded';
const LANGUAGE_KEY = 'sankey.language';
const THEME_KEY = 'sankey.theme';
const COMPANY_SORT_KEY = 'sankey.company.sort';
const COMPANY_SORT_DIRECTION_KEY = 'sankey.company.sort.direction';
const SIDEBAR_MIN = 220;
const SIDEBAR_MAX = 560;
const SIDEBAR_DEFAULT = 282;
const DESKTOP_BREAKPOINT = 900;
const METRIC_MODES = ['companyInfo', 'incomeStatement', 'revenue'];
const METRIC_MODE_LABEL_KEYS = {
  companyInfo: 'metricCompanyInfo',
  incomeStatement: 'metricIncomeStatement',
  revenue: 'metricRevenue',
};
const VIEW_MODES = ['sankey', 'trend', 'table'];

function readStoredNumber(key, fallback) {
  try {
    const value = Number(window.localStorage.getItem(key));
    return Number.isFinite(value) && value > 0 ? value : fallback;
  } catch (error) {
    return fallback;
  }
}
function readStoredBoolean(key, fallback) {
  try {
    const value = window.localStorage.getItem(key);
    return value === null ? fallback : value === 'true';
  } catch (error) {
    return fallback;
  }
}
function writeStoredValue(key, value) {
  try {
    window.localStorage.setItem(key, String(value));
  } catch (error) {
    /* Ignore storage failures in private browsing or file previews. */
  }
}
function readStoredViewMode() {
  try {
    const value = window.localStorage.getItem(VIEW_MODE_KEY);
    return VIEW_MODES.includes(value) ? value : 'sankey';
  } catch (error) {
    return 'sankey';
  }
}
function readStoredMetricMode() {
  try {
    const value = window.localStorage.getItem(METRIC_MODE_KEY);
    return METRIC_MODES.includes(value) ? value : 'incomeStatement';
  } catch (error) {
    return 'incomeStatement';
  }
}
function readStoredLanguage() {
  try {
    return I18N_API.normalizeLanguage
      ? I18N_API.normalizeLanguage(window.localStorage.getItem(LANGUAGE_KEY))
      : window.localStorage.getItem(LANGUAGE_KEY) === 'zh' ? 'zh' : 'en';
  } catch (error) {
    return I18N_API.defaultLanguage || 'en';
  }
}
function readStoredTheme() {
  try {
    return window.localStorage.getItem(THEME_KEY) === 'dark' ? 'dark' : 'light';
  } catch (error) {
    return 'light';
  }
}
function readStoredCompanySort() {
  try {
    const value = window.localStorage.getItem(COMPANY_SORT_KEY);
    const [sortKey] = String(value || '').split(':');
    return COMPANY_SORT_KEYS.includes(sortKey) ? sortKey : 'name';
  } catch (error) {
    return 'name';
  }
}
function defaultCompanySortDirection(sortKey) {
  return COMPANY_SORT_CONFIG[sortKey]?.defaultDirection || 'asc';
}
function normalizeCompanySortDirection(sortKey, direction) {
  return COMPANY_SORT_DIRECTIONS.includes(direction) ? direction : defaultCompanySortDirection(sortKey);
}
function readStoredCompanySortDirection(sortKey) {
  try {
    const legacyValue = String(window.localStorage.getItem(COMPANY_SORT_KEY) || '');
    const legacyDirection = legacyValue.includes(':') ? legacyValue.split(':')[1] : '';
    const value = window.localStorage.getItem(COMPANY_SORT_DIRECTION_KEY) || legacyDirection;
    return normalizeCompanySortDirection(sortKey, value);
  } catch (error) {
    return defaultCompanySortDirection(sortKey);
  }
}

const records = traceCatalog.records;
const statementGroups = traceCatalog.groups;
const revenueRecords = traceCatalog.revenueRecords;
const revenueGroups = traceCatalog.revenueGroups;
const groups = traceCatalog.allCompanyGroups || statementGroups;
const financialRecords = traceCatalog.financialRecords;
const financialRecordByKey = traceCatalog.financialRecordByKey;
const companyMetadata = traceCatalog.companyMetadata;
const companyMetadataByName = traceCatalog.companyMetadataByName;

const defaultIndex = sets.findIndex((d) => d.key === 'salesforce-q1-fy27');
function datasetKeyFromHash() {
  const raw = window.location.hash ? window.location.hash.slice(1) : '';
  if (!raw) return '';
  try {
    return decodeURIComponent(raw);
  } catch (error) {
    return raw;
  }
}
function recordFromHash() {
  const key = datasetKeyFromHash();
  return key ? records.find((record) => record.dataset.key === key) : null;
}
function syncDatasetHash(record) {
  const key = record?.dataset?.key;
  if (!key) return;
  const nextHash = `#${encodeURIComponent(key)}`;
  if (window.location.hash === nextHash) return;
  window.history.replaceState(null, '', nextHash);
}
function clearDatasetHash() {
  if (!window.location.hash) return;
  window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
}
function companyGroupsForMetric(mode) {
  if (mode === 'incomeStatement') return statementGroups;
  if (mode === 'revenue') return revenueGroups;
  return groups;
}
function metricGroupForCompany(company, mode = state?.metricMode) {
  return companyGroupsForMetric(mode).find((group) => group.company === company) || null;
}
function hasCompanyMetricData(company, mode) {
  if (mode === 'incomeStatement') return Boolean(metricGroupForCompany(company, mode)?.records?.length);
  if (mode === 'revenue') return Boolean(metricGroupForCompany(company, mode)?.revenueRecords?.length);
  return Boolean(groups.find((group) => group.company === company));
}
function uniqueCompanies(companies = []) {
  return [...new Set((companies || []).map(clean).filter(Boolean))];
}
function scopeCompanies() {
  const selected = uniqueCompanies(state?.multiCompanyMode ? state.selectedCompanies : [state?.company]);
  return selected.length ? selected : uniqueCompanies([state?.company]);
}
function isMultiCompanyScope() {
  return Boolean(state?.multiCompanyMode && scopeCompanies().length > 1);
}
function selectedPeriodRecords() {
  const list = (state?.selectedPeriodIndexes || [])
    .map((index) => recordByIndex(index))
    .filter((record) => record && record.company === state.company);
  return sortedRecordList(list);
}
function isMultiPeriodScope() {
  return Boolean(state?.multiPeriodMode && state.metricMode === 'incomeStatement' && selectedPeriodRecords().length > 1);
}
function metricModesForCompanies(companies = scopeCompanies()) {
  const scope = uniqueCompanies(companies);
  const modes = METRIC_MODES.filter((mode) => scope.some((company) => hasCompanyMetricData(company, mode)));
  return modes.length ? modes : ['companyInfo'];
}
function metricModesForCompany(company = state?.company) {
  return metricModesForCompanies([company]);
}
function metricModesForScope() {
  return metricModesForCompanies(scopeCompanies());
}
function normalizeMetricModeForCompany(company, mode) {
  const modes = metricModesForCompany(company);
  return modes.includes(mode) ? mode : bestMetricModeForCompany(company, mode);
}
function normalizeMetricModeForScope(mode) {
  const modes = metricModesForScope();
  return modes.includes(mode) ? mode : modes[0] || 'companyInfo';
}
function bestMetricModeForCompany(company, preferredMode = state?.metricMode) {
  if (preferredMode !== 'companyInfo' && hasCompanyMetricData(company, preferredMode)) return preferredMode;
  if (hasCompanyMetricData(company, 'incomeStatement')) return 'incomeStatement';
  if (hasCompanyMetricData(company, 'revenue')) return 'revenue';
  return 'companyInfo';
}
function defaultViewModeForMetric(mode) {
  if (mode === 'companyInfo') return 'table';
  if (mode === 'revenue') return 'trend';
  return 'sankey';
}
function allowedViewModesForMetric(mode) {
  if (mode === 'companyInfo') return ['table'];
  if (mode === 'revenue') return ['trend', 'table'];
  return ['sankey', 'table'];
}
function normalizeViewModeForMetric(mode, viewModeValue) {
  return allowedViewModesForMetric(mode).includes(viewModeValue)
    ? viewModeValue
    : defaultViewModeForMetric(mode);
}
function initialCompanyForMetric(mode, fallbackRecord) {
  const modeGroups = companyGroupsForMetric(mode);
  if (fallbackRecord && modeGroups.some((group) => group.company === fallbackRecord.company)) return fallbackRecord.company;
  return modeGroups[0]?.company || groups[0]?.company || '';
}

const activeStart = recordFromHash() || records[defaultIndex >= 0 ? defaultIndex : 0];
const storedCompanySort = readStoredCompanySort();
const storedMetricMode = readStoredMetricMode();
const storedViewMode = normalizeViewModeForMetric(storedMetricMode, readStoredViewMode());
const initialCompany = initialCompanyForMetric(storedMetricMode, activeStart);
const initialActiveIndex = activeStart?.index || 0;
const state = {
  sort: 'desc',
  companySort: storedCompanySort,
  companySortDirection: readStoredCompanySortDirection(storedCompanySort),
  activeIndex: initialActiveIndex,
  activeIndexByCompany: initialCompany ? { [initialCompany]: initialActiveIndex } : {},
  company: initialCompany,
  selectedCompanies: initialCompany ? [initialCompany] : [],
  multiCompanyMode: false,
  selectedPeriodIndexes: [],
  multiPeriodMode: false,
  comparisonMetricTrend: null,
  metricMode: storedMetricMode,
  viewMode: storedViewMode,
  periodExpanded: readStoredBoolean(PERIOD_EXPANDED_KEY, false),
  language: readStoredLanguage(),
  theme: readStoredTheme(),
  sidebarWidth: readStoredNumber(SIDEBAR_WIDTH_KEY, SIDEBAR_DEFAULT),
  sidebarCollapsed: readStoredBoolean(SIDEBAR_COLLAPSED_KEY, false),
  comparisonZoom: 1,
};

function selectedCompanySet() {
  return new Set(scopeCompanies());
}
function setSelectedCompanies(companies) {
  const next = uniqueCompanies(companies);
  if (!next.length && state.company) next.push(state.company);
  if (state.company && !next.includes(state.company)) next.unshift(state.company);
  state.selectedCompanies = uniqueCompanies(next);
  if (!state.selectedCompanies.length && groups[0]?.company) {
    state.company = groups[0].company;
    state.selectedCompanies = [state.company];
  }
  if (state.multiCompanyMode && state.selectedCompanies.length <= 1) {
    state.multiCompanyMode = false;
  }
}
function syncSingleCompanyScope() {
  if (state.multiCompanyMode) return;
  state.selectedCompanies = state.company ? [state.company] : [];
}
function setSelectedPeriods(indexes) {
  const unique = [...new Set(indexes || [])]
    .filter((index) => recordByIndex(index)?.company === state.company);
  state.selectedPeriodIndexes = unique;
  if (unique.length && !unique.includes(state.activeIndex)) {
    const first = selectedPeriodRecords()[0];
    if (first) setCompanyActiveRecord(first);
  }
  if (state.multiPeriodMode && unique.length <= 1) {
    state.multiPeriodMode = false;
  }
}
function clearMultiPeriodScope() {
  state.multiPeriodMode = false;
  state.selectedPeriodIndexes = [];
}
function companiesSupportingMetric(mode = state.metricMode, companies = scopeCompanies()) {
  return uniqueCompanies(companies).filter((company) => hasCompanyMetricData(company, mode));
}
function primaryCompanyForMetric(mode = state.metricMode) {
  const supported = companiesSupportingMetric(mode);
  if (supported.includes(state.company)) return state.company;
  return supported[0] || state.company || groups[0]?.company || '';
}
function companyActiveIndex(company) {
  const index = state.activeIndexByCompany?.[company];
  const record = recordByIndex(index);
  return record?.company === company ? index : null;
}
function setCompanyActiveRecord(record) {
  if (!record) return;
  state.activeIndexByCompany[record.company] = record.index;
  if (record.company === state.company) state.activeIndex = record.index;
}
function sortedRecordList(recordList) {
  const direction = state.sort === 'asc' ? 1 : -1;
  return [...(recordList || [])].sort((a, b) =>
    direction * (a.sortValue - b.sortValue) ||
    a.period.localeCompare(b.period) ||
    a.index - b.index
  );
}
function sortedRecords(group) {
  return sortedRecordList(group?.records || []);
}
function defaultRecordForCompanyMetric(company, mode = state.metricMode) {
  const group = metricGroupForCompany(company, mode);
  if (!group) return null;
  if (mode === 'incomeStatement') {
    const stored = recordByIndex(companyActiveIndex(company));
    if (stored?.company === company) return stored;
    return sortedRecords(group).find((record) => matches(searchTextForRecord(record), periodSearch.value)) || sortedRecords(group)[0] || null;
  }
  if (mode === 'revenue') return group.revenueRecords?.[0] || null;
  const companyGroup = groups.find((item) => item.company === company);
  return companyGroup?.records?.[0] || group.records?.[0] || null;
}
function scopeRecordsForMetric(mode = state.metricMode) {
  return scopeCompanies()
    .map((company) => defaultRecordForCompanyMetric(company, mode))
    .filter(Boolean);
}
function companyDatasetKeys(company) {
  return (metricGroupForCompany(company, 'incomeStatement')?.records || [])
    .map((record) => record.dataset.key);
}
/* Selecting a company is the load signal for its complete Metric data:
 * the draw path ensures its financial/profile detail, while this
 * asynchronously pulls every income-statement dataset adapter of the
 * scoped companies (all periods and variants) before the user clicks a
 * specific Metric object or period. Idempotent — loaded and in-flight keys
 * are skipped by the loader. */
function preloadScopeCompanyDatasets(companies = scopeCompanies()) {
  datasetLoader.preload(uniqueCompanies(companies).flatMap((company) => companyDatasetKeys(company)));
}

function viewDataRequirement() {
  // Single-company tables deliberately show every company, not just the
  // active row. Family chunks keep that global surface complete.
  if (isRevenueMetric()) return { family: 'revenue' };
  return state.viewMode === 'table'
    ? { family: activeTableKind() }
    : { companies: scopeCompanies() };
}
