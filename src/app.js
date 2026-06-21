const sets = window.DATASETS || [];
const companySearch = document.getElementById('companySearch');
const companySearchToggle = document.getElementById('companySearchToggle');
const companySection = document.querySelector('.company-section');
const periodSearch = document.getElementById('periodSearch');
const periodSearchToggle = document.getElementById('periodSearchToggle');
const periodSortToggle = document.getElementById('periodSortToggle');
const periodSection = document.querySelector('.period-section');
const companyList = document.getElementById('companyList');
const periodList = document.getElementById('periodList');
const app = document.querySelector('.app');
const topShell = document.querySelector('.top-shell');
const actionTitle = document.getElementById('actionTitle');
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebarResizer = document.getElementById('sidebarResizer');
const content = document.querySelector('.content');
const viewMode = document.getElementById('viewMode');
const sankeyView = document.getElementById('sankeyView');
const tableView = document.getElementById('tableView');
const sankeyActions = document.getElementById('sankeyActions');
const tableActions = document.getElementById('tableActions');
const companiesTable = document.getElementById('companiesTable');
const statementsTable = document.getElementById('statementsTable');
const companiesTableCount = document.getElementById('companiesTableCount');
const statementsTableCount = document.getElementById('statementsTableCount');
const svgBtn = document.getElementById('svgBtn');
const pngBtn = document.getElementById('pngBtn');
const companiesCsvBtn = document.getElementById('companiesCsvBtn');
const statementsCsvBtn = document.getElementById('statementsCsvBtn');
const languageToggle = document.getElementById('languageToggle');
const languageToggleText = document.getElementById('languageToggleText');
const themeToggle = document.getElementById('themeToggle');
const SIDEBAR_WIDTH_KEY = 'sankey.sidebar.width';
const SIDEBAR_COLLAPSED_KEY = 'sankey.sidebar.collapsed';
const VIEW_MODE_KEY = 'sankey.view.mode';
const LANGUAGE_KEY = 'sankey.language';
const THEME_KEY = 'sankey.theme';
const SIDEBAR_MIN = 220;
const SIDEBAR_MAX = 560;
const SIDEBAR_DEFAULT = 282;
const DESKTOP_BREAKPOINT = 900;
const QUARTER_TAGS = ['Q4', 'Q3', 'Q2', 'Q1'];
const ANNUAL_PERIOD_KEY = 'FY';
const I18N = {
  en: {
    documentTitle: 'Income Statement Sankey Visualizer',
    appTitle: 'Income Statement Sankey Visualizer',
    byline: 'by',
    viewModeLabel: 'Data view',
    viewSankey: 'Sankey',
    viewSankeyTitle: 'Sankey view',
    viewTable: 'Table',
    viewTableTitle: 'Table view',
    globalSettingsLabel: 'Global settings',
    languageToggleTitle: 'Switch language to Chinese',
    languageToggleText: 'EN',
    themeToggleDark: 'Switch to dark mode',
    themeToggleLight: 'Switch to light mode',
    viewActionsLabel: 'View actions',
    downloadSvg: 'SVG',
    downloadSvgTitle: 'Download SVG',
    downloadPng: 'PNG',
    downloadPngTitle: 'Download PNG',
    downloadCompaniesCsv: 'Companies CSV',
    downloadCompaniesCsvTitle: 'Download companies CSV',
    downloadStatementsCsv: 'Statements CSV',
    downloadStatementsCsvTitle: 'Download income statements CSV',
    datasetNavigationLabel: 'Dataset navigation',
    companyLabel: 'Company',
    companiesLabel: 'Companies',
    companySearchPlaceholder: 'Search companies',
    periodLabel: 'Data point time',
    periodSortLabel: 'Sort time points',
    sortDesc: 'Desc',
    sortDescTitle: 'Newest first',
    sortAsc: 'Asc',
    sortAscTitle: 'Oldest first',
    periodSearchPlaceholder: 'Search time points',
    periodsLabel: 'Data point times',
    resizeDatasetPanelLabel: 'Resize dataset panel',
    incomeStatementsLabel: 'Income Statements',
    collapseDatasetPanel: 'Collapse dataset panel',
    showDatasetPanel: 'Show dataset panel',
    missing: 'Missing',
    source: 'Source {number}',
    companiesCountOne: '1 company',
    companiesCountMany: '{count} companies',
    statementsCountOne: '1 statement',
    statementsCountMany: '{count} statements',
    noCompaniesRegistered: 'No companies registered.',
    noIncomeStatementsRegistered: 'No income statements registered.',
    noDataPointSelected: 'No data point selected',
    noMatchingCompanies: 'No matching companies.',
    noMatchingTimePoints: 'No matching time points.',
    latest: 'Latest',
    viewVariantsLabel: 'View variants',
    defaultVariant: 'Main',
    annualPeriodTag: 'FY',
    tableCompany: 'Company',
    tableLegalName: 'Legal name',
    tableTicker: 'Ticker',
    tableSector: 'Sector',
    tableIndustry: 'Industry',
    tableFounded: 'Founded',
    tableHeadquarters: 'Headquarters',
    tableFiscalYearEnd: 'Fiscal year end',
    tableDatasets: 'Datasets',
    tableLatest: 'Latest',
    tableWebsite: 'Website',
    tableDescription: 'Description',
    tableSources: 'Sources',
    tableDataset: 'Dataset',
    tablePeriod: 'Period',
    tablePeriodEnd: 'Period end',
    tableRevenue: 'Revenue',
    tableRevenueItems: 'Revenue items',
    tableCostOfRevenue: 'Cost of revenue',
    tableGrossProfit: 'Gross profit',
    tableOperatingExpenses: 'Operating expenses',
    tableOpexItems: 'Opex items',
    tableOperatingProfit: 'Operating profit',
    tableOtherIncome: 'Other income',
    tableTax: 'Tax',
    tableNetProfit: 'Net profit',
    tableSourceImage: 'Source image',
  },
  zh: {
    documentTitle: '利润表桑基图可视化',
    appTitle: '利润表桑基图可视化',
    byline: '作者',
    viewModeLabel: '数据视图',
    viewSankey: '桑基图',
    viewSankeyTitle: '桑基图视图',
    viewTable: '表格',
    viewTableTitle: '表格视图',
    globalSettingsLabel: '全局设置',
    languageToggleTitle: '切换到英文',
    languageToggleText: '中',
    themeToggleDark: '切换到深色模式',
    themeToggleLight: '切换到浅色模式',
    viewActionsLabel: '视图操作',
    downloadSvg: 'SVG',
    downloadSvgTitle: '下载 SVG',
    downloadPng: 'PNG',
    downloadPngTitle: '下载 PNG',
    downloadCompaniesCsv: '公司 CSV',
    downloadCompaniesCsvTitle: '下载公司 CSV',
    downloadStatementsCsv: '报表 CSV',
    downloadStatementsCsvTitle: '下载利润表 CSV',
    datasetNavigationLabel: '数据集导航',
    companyLabel: '公司',
    companiesLabel: '公司',
    companySearchPlaceholder: '搜索公司',
    periodLabel: '数据期间',
    periodSortLabel: '排序数据期间',
    sortDesc: '降序',
    sortDescTitle: '最新优先',
    sortAsc: '升序',
    sortAscTitle: '最旧优先',
    periodSearchPlaceholder: '搜索数据期间',
    periodsLabel: '数据期间',
    resizeDatasetPanelLabel: '调整数据集面板宽度',
    incomeStatementsLabel: '利润表',
    collapseDatasetPanel: '收起数据集面板',
    showDatasetPanel: '显示数据集面板',
    missing: '缺失',
    source: '来源 {number}',
    companiesCountOne: '1 家公司',
    companiesCountMany: '{count} 家公司',
    statementsCountOne: '1 份报表',
    statementsCountMany: '{count} 份报表',
    noCompaniesRegistered: '暂无已注册公司。',
    noIncomeStatementsRegistered: '暂无已注册利润表。',
    noDataPointSelected: '未选择数据期间',
    noMatchingCompanies: '没有匹配的公司。',
    noMatchingTimePoints: '没有匹配的数据期间。',
    latest: '最新',
    viewVariantsLabel: '视图变体',
    defaultVariant: '主视图',
    annualPeriodTag: 'FY',
    tableCompany: '公司',
    tableLegalName: '法定名称',
    tableTicker: '股票代码',
    tableSector: '板块',
    tableIndustry: '行业',
    tableFounded: '成立年份',
    tableHeadquarters: '总部',
    tableFiscalYearEnd: '财年结束日',
    tableDatasets: '数据集',
    tableLatest: '最新期间',
    tableWebsite: '网站',
    tableDescription: '描述',
    tableSources: '来源',
    tableDataset: '数据集',
    tablePeriod: '期间',
    tablePeriodEnd: '期间结束',
    tableRevenue: '收入',
    tableRevenueItems: '收入项目',
    tableCostOfRevenue: '收入成本',
    tableGrossProfit: '毛利润',
    tableOperatingExpenses: '运营费用',
    tableOpexItems: '运营费用项目',
    tableOperatingProfit: '运营利润',
    tableOtherIncome: '其他收入',
    tableTax: '税费',
    tableNetProfit: '净利润',
    tableSourceImage: '来源图片',
  },
};

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
    return window.localStorage.getItem(VIEW_MODE_KEY) === 'table' ? 'table' : 'sankey';
  } catch (error) {
    return 'sankey';
  }
}
function readStoredLanguage() {
  try {
    return window.localStorage.getItem(LANGUAGE_KEY) === 'zh' ? 'zh' : 'en';
  } catch (error) {
    return 'en';
  }
}
function readStoredTheme() {
  try {
    return window.localStorage.getItem(THEME_KEY) === 'dark' ? 'dark' : 'light';
  } catch (error) {
    return 'light';
  }
}
function t(key, values = {}) {
  const bundle = I18N[state?.language] || I18N.en;
  const text = bundle[key] || I18N.en[key] || key;
  return text.replace(/\{(\w+)\}/g, (_match, name) => values[name] ?? '');
}
function countText(oneKey, manyKey, count) {
  return t(count === 1 ? oneKey : manyKey, { count });
}
function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}
function isDesktopLayout() {
  return window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT + 1}px)`).matches;
}
function sidebarBounds() {
  const viewport = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  const responsiveMax = isDesktopLayout() && viewport ? Math.floor(viewport * 0.45) : SIDEBAR_MAX;
  return { min: SIDEBAR_MIN, max: Math.max(SIDEBAR_MIN, Math.min(SIDEBAR_MAX, responsiveMax)) };
}

function normalize(value) {
  return String(value || '').toLowerCase().replace(/\s+/g, ' ').trim();
}
function escapeHtml(value) {
  return String(value || '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[char]));
}
function matches(text, query) {
  const haystack = normalize(text);
  return normalize(query).split(' ').filter(Boolean).every((token) => haystack.includes(token));
}
function clean(value) {
  return String(value || '').replace(/\s+/g, ' ').trim();
}
function formatPeriodFromKey(key) {
  const match = clean(key).match(/((?:q[1-4]-)?fy\d{2,4})/i);
  return match ? match[1].replace('-', ' ').toUpperCase() : '';
}
function periodFor(dataset) {
  if (dataset.meta?.period) return clean(dataset.meta.period);
  const name = clean(dataset.name || dataset.meta?.title);
  if (name.includes('·')) return clean(name.split('·').slice(1).join('·'));
  return formatPeriodFromKey(dataset.key) || 'Unspecified';
}
function companyFor(dataset) {
  if (dataset.company) return clean(dataset.company);
  if (dataset.meta?.company) return clean(dataset.meta.company);
  const name = clean(dataset.name || dataset.meta?.title);
  if (name.includes('·')) return clean(name.split('·')[0]);
  const keyCompany = clean(dataset.key).match(/^(.*?)-(?:q[1-4]-)?fy\d{2,4}/i);
  if (keyCompany?.[1]) {
    return keyCompany[1].split('-').map((part) => part ? part[0].toUpperCase() + part.slice(1) : part).join(' ');
  }
  const period = periodFor(dataset);
  return clean(name.replace(period, '').replace(/income statement/i, '')) || 'Company';
}
function periodSortValue(record, fallback) {
  const period = `${record.period} ${record.dataset.key || ''}`;
  const fy = period.match(/FY\s*(20\d{2}|\d{2})/i);
  const quarter = period.match(/Q\s*([1-4])/i);
  if (fy) {
    let year = Number(fy[1]);
    if (year < 100) year += 2000;
    return year * 10 + (quarter ? Number(quarter[1]) : 5);
  }
  const months = {
    jan: 1, january: 1, feb: 2, february: 2, mar: 3, march: 3,
    apr: 4, april: 4, may: 5, jun: 6, june: 6, jul: 7, july: 7,
    aug: 8, august: 8, sep: 9, sept: 9, september: 9, oct: 10,
    october: 10, nov: 11, november: 11, dec: 12, december: 12,
  };
  const noteMatch = clean(record.periodNote).match(/([A-Za-z.]+)\s+(\d{4})/);
  if (noteMatch) {
    const month = months[noteMatch[1].replace('.', '').toLowerCase()];
    if (month) return Number(noteMatch[2]) * 12 + month;
  }
  return fallback;
}
function fiscalYearLabel(year) {
  if (!Number.isFinite(year) || year <= 0) return '';
  return `FY${String(year).slice(-2).padStart(2, '0')}`;
}
function periodParts(record) {
  const text = clean([record.period, record.dataset?.key, record.label].filter(Boolean).join(' '));
  const fy = text.match(/\bFY\s*(20\d{2}|\d{2})\b/i) || text.match(/\bfy(20\d{2}|\d{2})\b/i);
  const quarter = text.match(/\bQ\s*([1-4])\b/i) || text.match(/\bq([1-4])[-_\s]?fy/i);
  let fiscalYearNumber = fy ? Number(fy[1]) : 0;
  if (fiscalYearNumber && fiscalYearNumber < 100) fiscalYearNumber += 2000;
  const fiscalYear = fiscalYearLabel(fiscalYearNumber) || clean(record.period) || 'Unspecified';
  const quarterNumber = quarter ? Number(quarter[1]) : 0;
  const quarterKey = quarterNumber ? `Q${quarterNumber}` : ANNUAL_PERIOD_KEY;
  return {
    fiscalYear,
    fiscalYearNumber,
    quarterKey,
    quarterNumber,
    yearKey: fiscalYear,
    isAnnual: !quarterNumber,
  };
}
function titleCaseVariant(value) {
  const abbreviations = new Set(['ai', 'api', 'aws', 'bu', 'cpu', 'fy', 'gaap', 'gpu', 'iot', 'saas', 'svg', 'ui', 'us', 'yoy']);
  const text = clean(String(value || '')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[_-]+/g, ' ')
    .replace(/[()[\]{}]/g, ' '));
  if (!text) return '';
  return text.split(' ').map((word) => {
    const lower = word.toLowerCase();
    if (abbreviations.has(lower)) return lower.toUpperCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }).join(' ');
}
function keyVariantText(record) {
  const key = clean(record.dataset?.key).toLowerCase();
  if (!key) return '';
  const quarterlySuffix = key.match(/\bq[1-4]-fy(?:20)?\d{2}(?:-(.*))?$/i);
  if (quarterlySuffix) return clean((quarterlySuffix[1] || '').replace(/[-_]+/g, ' '));
  const annualSuffix = key.match(/\bfy(?:20)?\d{2}(?:-(.*))?$/i);
  if (annualSuffix) return clean((annualSuffix[1] || '').replace(/[-_]+/g, ' '));
  const companySlug = companyKey(record.company);
  let suffix = key;
  if (companySlug && suffix.startsWith(companySlug)) suffix = suffix.slice(companySlug.length);
  suffix = suffix
    .replace(/^-+/, '')
    .replace(/\bq[1-4]-fy(?:20)?\d{2}\b/i, '')
    .replace(/\bfy(?:20)?\d{2}\b/i, '')
    .replace(/^-+|-+$/g, '')
    .replace(/[-_]+/g, ' ');
  return clean(suffix);
}
function variantFeatureName(record) {
  const meta = record.dataset?.meta || {};
  const explicit = meta.variant || meta.variantName || meta.viewVariant || meta.viewVariantName || record.dataset?.variant || record.dataset?.variantName;
  if (explicit) return titleCaseVariant(explicit);
  return titleCaseVariant(keyVariantText(record));
}

const records = sets.map((dataset, index) => {
  const period = periodFor(dataset);
  const periodNote = clean(dataset.meta?.periodNote);
  const company = companyFor(dataset);
  const label = clean(dataset.name || dataset.meta?.title || dataset.key || `Dataset ${index + 1}`);
  return { dataset, index, company, period, periodNote, label, sortValue: 0, periodParts: null, variantFeature: '' };
});
records.forEach((record, index) => {
  record.sortValue = periodSortValue(record, index);
  record.periodParts = periodParts(record);
  record.variantFeature = variantFeatureName(record);
  record.searchText = [record.company, record.period, record.periodNote, record.variantFeature, record.label, record.dataset.key].join(' ');
});
const groups = Array.from(records.reduce((map, record) => {
  if (!map.has(record.company)) map.set(record.company, { company: record.company, records: [] });
  map.get(record.company).records.push(record);
  return map;
}, new Map()).values()).map((group) => {
  group.records.sort((a, b) => b.sortValue - a.sortValue || a.period.localeCompare(b.period));
  group.latest = group.records[0];
  group.searchText = [group.company, ...group.records.map((record) => record.searchText)].join(' ');
  return group;
}).sort((a, b) => a.company.localeCompare(b.company));
const financialRecords = window.INCOME_STATEMENT_SSOT?.records || [];
const financialRecordByKey = new Map(financialRecords.map((record) => [record.key, record]));
const companyMetadata = window.COMPANY_METADATA?.companies || [];
const companyMetadataByName = new Map();
companyMetadata.forEach((company) => {
  [company.name, company.legalName, ...(company.aliases || [])].filter(Boolean).forEach((name) => {
    companyMetadataByName.set(normalize(name), company);
  });
});

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

const activeStart = recordFromHash() || records[defaultIndex >= 0 ? defaultIndex : 0];
const state = {
  sort: 'desc',
  activeIndex: activeStart?.index || 0,
  company: activeStart?.company || groups[0]?.company || '',
  viewMode: readStoredViewMode(),
  language: readStoredLanguage(),
  theme: readStoredTheme(),
  sidebarWidth: readStoredNumber(SIDEBAR_WIDTH_KEY, SIDEBAR_DEFAULT),
  sidebarCollapsed: readStoredBoolean(SIDEBAR_COLLAPSED_KEY, false),
};

function moonIcon() {
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M12 3a6.7 6.7 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>';
}
function sunIcon() {
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>';
}
function sortIcon(direction) {
  const arrow = direction === 'asc' ? '<path d="M7 17V7"/><path d="m4 10 3-3 3 3"/>' : '<path d="M7 7v10"/><path d="m4 14 3 3 3-3"/>';
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">${arrow}<path d="M13 8h7"/><path d="M13 12h5"/><path d="M13 16h3"/></svg>`;
}
function syncThemeControls() {
  document.documentElement.dataset.theme = state.theme;
  themeToggle.innerHTML = state.theme === 'dark' ? moonIcon() : sunIcon();
  const label = state.theme === 'dark' ? t('themeToggleLight') : t('themeToggleDark');
  themeToggle.setAttribute('aria-label', label);
  themeToggle.title = label;
  themeToggle.setAttribute('aria-pressed', state.theme === 'dark' ? 'true' : 'false');
}
function applyStaticTranslations() {
  document.documentElement.lang = state.language === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-title]').forEach((element) => {
    element.title = t(element.dataset.i18nTitle);
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
    element.setAttribute('aria-label', t(element.dataset.i18nAriaLabel));
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    element.setAttribute('placeholder', t(element.dataset.i18nPlaceholder));
  });
  languageToggleText.textContent = t('languageToggleText');
  languageToggle.setAttribute('aria-label', t('languageToggleTitle'));
  languageToggle.title = t('languageToggleTitle');
  syncThemeControls();
  syncPeriodSortToggle();
  syncSidebarControls();
  syncToolbarHeight();
}
function setLanguage(language) {
  if (language !== 'en' && language !== 'zh') return;
  if (state.language === language) return;
  state.language = language;
  writeStoredValue(LANGUAGE_KEY, language);
  applyStaticTranslations();
  renderAll();
}
function setTheme(theme) {
  if (theme !== 'light' && theme !== 'dark') return;
  if (state.theme === theme) return;
  state.theme = theme;
  writeStoredValue(THEME_KEY, theme);
  syncThemeControls();
}
function sidebarToggleIcon(expanded) {
  const arrow = expanded ? '<path d="m16 9-3 3 3 3"/>' : '<path d="m13 9 3 3-3 3"/>';
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/>${arrow}</svg>`;
}
function applySidebarWidth(width, persist = false) {
  const bounds = sidebarBounds();
  const nextWidth = Math.round(clamp(width, bounds.min, bounds.max));
  state.sidebarWidth = nextWidth;
  document.documentElement.style.setProperty('--sidebar-width', `${nextWidth}px`);
  sidebarResizer.setAttribute('aria-valuemin', String(bounds.min));
  sidebarResizer.setAttribute('aria-valuemax', String(bounds.max));
  sidebarResizer.setAttribute('aria-valuenow', String(nextWidth));
  if (persist) writeStoredValue(SIDEBAR_WIDTH_KEY, nextWidth);
}
function syncToolbarHeight() {
  const height = Math.ceil(topShell.getBoundingClientRect().height || 52);
  document.documentElement.style.setProperty('--toolbar-height', `${height}px`);
}
function syncSidebarControls() {
  const expanded = !state.sidebarCollapsed;
  app.classList.toggle('sidebar-collapsed', state.sidebarCollapsed);
  sidebarToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  const label = expanded ? t('collapseDatasetPanel') : t('showDatasetPanel');
  sidebarToggle.setAttribute('aria-label', label);
  sidebarToggle.title = label;
  sidebarToggle.innerHTML = sidebarToggleIcon(expanded);
  sidebarResizer.tabIndex = expanded && isDesktopLayout() ? 0 : -1;
  sidebarResizer.setAttribute('aria-hidden', expanded && isDesktopLayout() ? 'false' : 'true');
}
function setSidebarCollapsed(collapsed, persist = true, redraw = true) {
  state.sidebarCollapsed = collapsed;
  syncSidebarControls();
  if (persist) writeStoredValue(SIDEBAR_COLLAPSED_KEY, collapsed);
  if (redraw) draw();
}
function syncResponsiveLayout() {
  syncToolbarHeight();
  applySidebarWidth(state.sidebarWidth);
  syncSidebarControls();
}

function currentRecord() {
  return records.find((record) => record.index === state.activeIndex) || records[0];
}
function currentDataset() {
  return currentRecord()?.dataset || sets[0];
}
function groupFor(company) {
  return groups.find((group) => group.company === company) || groups[0];
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
function sortedVariantRecords(recordList) {
  return [...(recordList || [])].sort((a, b) =>
    (a.variantFeature ? 1 : 0) - (b.variantFeature ? 1 : 0) ||
    a.dataset.key.length - b.dataset.key.length ||
    a.index - b.index
  );
}
function variantLabel(record) {
  return record?.variantFeature || t('defaultVariant');
}
function recordByIndex(index) {
  return records.find((record) => record.index === index);
}
function selectRecord(record, scrollKind = 'statement') {
  if (!record) return;
  state.activeIndex = record.index;
  state.company = record.company;
  syncDatasetHash(record);
  renderAll();
  draw();
  scrollActiveTableRow(scrollKind);
}
function descriptionForPeriodRecord(record, bucket) {
  if (!record) return '';
  const parts = [
    record.periodParts.quarterKey === ANNUAL_PERIOD_KEY ? t('annualPeriodTag') : record.periodParts.quarterKey,
    record.periodNote || record.label,
  ];
  if ((bucket?.records || []).length > 1 || record.variantFeature) parts.push(variantLabel(record));
  return parts.map(clean).filter(Boolean).join(' · ');
}
function periodTreeFor(group) {
  const visibleRecords = sortedRecords(group).filter((record) => matches(record.searchText, periodSearch.value));
  const yearMap = new Map();
  visibleRecords.forEach((record) => {
    const parts = record.periodParts;
    if (!yearMap.has(parts.yearKey)) {
      yearMap.set(parts.yearKey, {
        yearKey: parts.yearKey,
        fiscalYearNumber: parts.fiscalYearNumber,
        sortValue: record.sortValue,
        records: [],
        quarters: new Map(),
      });
    }
    const year = yearMap.get(parts.yearKey);
    year.records.push(record);
    year.sortValue = Math.max(year.sortValue, record.sortValue);
    if (!year.quarters.has(parts.quarterKey)) {
      year.quarters.set(parts.quarterKey, {
        key: parts.quarterKey,
        quarterNumber: parts.quarterNumber,
        records: [],
      });
    }
    year.quarters.get(parts.quarterKey).records.push(record);
  });
  const direction = state.sort === 'asc' ? 1 : -1;
  return Array.from(yearMap.values())
    .map((year) => {
      year.quarters.forEach((quarter) => {
        quarter.records = sortedVariantRecords(quarter.records);
      });
      const activeRecord = year.records.find((record) => record.index === state.activeIndex);
      const defaultRecord = sortedRecordList(year.records)[0];
      const selectedQuarterKey = (activeRecord || defaultRecord)?.periodParts.quarterKey || QUARTER_TAGS.find((quarter) => year.quarters.has(quarter)) || ANNUAL_PERIOD_KEY;
      const selectedBucket = year.quarters.get(selectedQuarterKey);
      const selectedRecord = activeRecord || selectedBucket?.records[0] || defaultRecord;
      return {
        ...year,
        active: Boolean(activeRecord),
        selectedQuarterKey,
        selectedBucket,
        selectedRecord,
        description: descriptionForPeriodRecord(selectedRecord, selectedBucket),
      };
    })
    .sort((a, b) => direction * (a.sortValue - b.sortValue) || a.yearKey.localeCompare(b.yearKey));
}
function companyKey(company) {
  return normalize(company).replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'company';
}
function metadataFor(company) {
  return companyMetadataByName.get(normalize(company)) || {
    key: companyKey(company),
    name: company,
    legalName: '',
    ticker: '',
    exchange: '',
    sector: '',
    industry: '',
    founded: '',
    headquarters: '',
    fiscalYearEnd: '',
    website: '',
    description: '',
    sourceUrls: [],
  };
}
function labelText(label) {
  return Array.isArray(label) ? label.map(clean).filter(Boolean).join(' ') : clean(label);
}
function notesText(notes) {
  return (notes || []).map(clean).filter(Boolean).join(' ');
}
function formatAmount(record, value, cost = false) {
  if (typeof value !== 'number' || !Number.isFinite(value)) return '';
  const decimals = typeof record?.decimals === 'number' ? record.decimals : 1;
  const amount = `${record?.currency || '$'}${Math.abs(value).toFixed(decimals)}${record?.unit || ''}`;
  return cost || value < 0 ? `(${amount})` : amount;
}
function describeItemList(items, record, prefix = '') {
  return (items || []).flatMap((item) => {
    const label = [prefix, labelText(item.label)].filter(Boolean).join(' / ');
    const notes = notesText(item.notes);
    const itemText = `${label}: ${formatAmount(record, item.value)}${notes ? ` (${notes})` : ''}`;
    return [itemText, ...describeItemList(item.children, record, label)];
  });
}
function describeItems(items, record, prefix = '') {
  return describeItemList(items, record, prefix).join('; ');
}
function safeUrl(url) {
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'https:' || parsed.protocol === 'http:' ? parsed.href : '';
  } catch (error) {
    return '';
  }
}
function linksHtml(urls) {
  const links = (urls || []).map(safeUrl).filter(Boolean);
  if (!links.length) return `<span class="cell-muted">${escapeHtml(t('missing'))}</span>`;
  return links.map((url, index) => `<a href="${escapeHtml(url)}" target="_blank" rel="noopener">${escapeHtml(t('source', { number: index + 1 }))}</a>`).join(' ');
}
function websiteHtml(url) {
  const safe = safeUrl(url);
  return safe ? `<a href="${escapeHtml(safe)}" target="_blank" rel="noopener">${escapeHtml(safe.replace(/^https?:\/\//, '').replace(/\/$/, ''))}</a>` : '';
}
function financialFor(record) {
  return financialRecordByKey.get(record.dataset.key);
}
function companyRows() {
  return groups.map((group) => {
    const meta = metadataFor(group.company);
    return {
      ...meta,
      company: group.company,
      latestPeriod: group.latest?.period || '',
      datasetCount: group.records.length,
      active: group.company === state.company,
      tableAttrs: `data-company-key="${escapeHtml(companyKey(group.company))}"`,
    };
  });
}
function statementRows() {
  return [...records]
    .sort((a, b) => a.company.localeCompare(b.company) || b.sortValue - a.sortValue || a.period.localeCompare(b.period))
    .map((record) => ({
      record,
      financial: financialFor(record),
      active: record.index === state.activeIndex,
      tableAttrs: `data-dataset-key="${escapeHtml(record.dataset.key)}"`,
    }));
}
function renderDataTable(table, columns, rows, emptyText) {
  table.className = 'data-table';
  const head = columns.map((column) => `<th class="${column.className || ''}">${escapeHtml(column.label)}</th>`).join('');
  if (!rows.length) {
    table.innerHTML = `<thead><tr>${head}</tr></thead><tbody><tr><td colspan="${columns.length}"><div class="table-empty">${escapeHtml(emptyText)}</div></td></tr></tbody>`;
    return;
  }
  const body = rows.map((row) => {
    const cells = columns.map((column) => {
      const value = column.html ? column.html(row) : escapeHtml(column.value(row));
      return `<td class="${column.className || ''}">${value}</td>`;
    }).join('');
    const attrs = row.tableAttrs || '';
    return `<tr class="${row.active ? 'active-row' : ''}"${attrs ? ` ${attrs}` : ''}>${cells}</tr>`;
  }).join('');
  table.innerHTML = `<thead><tr>${head}</tr></thead><tbody>${body}</tbody>`;
}
function renderTables() {
  const companies = companyRows();
  const statements = statementRows();
  companiesTableCount.textContent = countText('companiesCountOne', 'companiesCountMany', companies.length);
  statementsTableCount.textContent = countText('statementsCountOne', 'statementsCountMany', statements.length);
  renderDataTable(companiesTable, [
    { label: t('tableCompany'), className: 'nowrap', value: (row) => row.company },
    { label: t('tableLegalName'), className: 'nowrap', value: (row) => row.legalName },
    { label: t('tableTicker'), className: 'nowrap', value: (row) => [row.exchange, row.ticker].filter(Boolean).join(': ') },
    { label: t('tableSector'), className: 'nowrap', value: (row) => row.sector },
    { label: t('tableIndustry'), className: 'nowrap', value: (row) => row.industry },
    { label: t('tableFounded'), className: 'nowrap', value: (row) => row.founded },
    { label: t('tableHeadquarters'), className: 'nowrap', value: (row) => row.headquarters },
    { label: t('tableFiscalYearEnd'), className: 'nowrap', value: (row) => row.fiscalYearEnd },
    { label: t('tableDatasets'), className: 'num', value: (row) => row.datasetCount },
    { label: t('tableLatest'), className: 'nowrap', value: (row) => row.latestPeriod },
    { label: t('tableWebsite'), className: 'nowrap', html: (row) => websiteHtml(row.website) },
    { label: t('tableDescription'), className: 'wide', value: (row) => row.description },
    { label: t('tableSources'), className: 'nowrap', html: (row) => linksHtml(row.sourceUrls) },
  ], companies, t('noCompaniesRegistered'));

  renderDataTable(statementsTable, [
    { label: t('tableDataset'), className: 'nowrap', value: (row) => row.record.dataset.key },
    { label: t('tableCompany'), className: 'nowrap', value: (row) => row.record.company },
    { label: t('tablePeriod'), className: 'nowrap', value: (row) => row.record.period },
    { label: t('tablePeriodEnd'), className: 'nowrap', value: (row) => row.record.periodNote },
    { label: t('tableRevenue'), className: 'num', value: (row) => formatAmount(row.financial, row.financial?.revenue?.total) },
    { label: t('tableRevenueItems'), className: 'wide', value: (row) => describeItems(row.financial?.revenue?.items, row.financial) },
    { label: t('tableCostOfRevenue'), className: 'num', value: (row) => formatAmount(row.financial, row.financial?.costs?.costOfRevenue?.value, true) },
    { label: t('tableGrossProfit'), className: 'num', value: (row) => formatAmount(row.financial, row.financial?.profit?.gross?.value) },
    { label: t('tableOperatingExpenses'), className: 'num', value: (row) => formatAmount(row.financial, row.financial?.costs?.operatingExpenses?.total, true) },
    { label: t('tableOpexItems'), className: 'wide', value: (row) => describeItems(row.financial?.costs?.operatingExpenses?.items, row.financial) },
    { label: t('tableOperatingProfit'), className: 'num', value: (row) => formatAmount(row.financial, row.financial?.profit?.operating?.value) },
    { label: t('tableOtherIncome'), className: 'num', value: (row) => formatAmount(row.financial, row.financial?.otherIncome?.total || 0) },
    { label: t('tableTax'), className: 'num', value: (row) => formatAmount(row.financial, row.financial?.costs?.tax?.value, true) },
    { label: t('tableNetProfit'), className: 'num', value: (row) => formatAmount(row.financial, row.financial?.profit?.net?.value) },
    { label: t('tableSourceImage'), className: 'nowrap', value: (row) => row.financial?.sourceImage || '' },
  ], statements, t('noIncomeStatementsRegistered'));
}
function escapeSelector(value) {
  if (window.CSS?.escape) return window.CSS.escape(value);
  return String(value).replace(/["\\]/g, '\\$&');
}
function tableRowFor(kind) {
  if (kind === 'company') {
    return companiesTable.querySelector(`[data-company-key="${escapeSelector(companyKey(state.company))}"]`);
  }
  const key = currentRecord()?.dataset?.key;
  return key ? statementsTable.querySelector(`[data-dataset-key="${escapeSelector(key)}"]`) : null;
}
function fastScrollTo(top, duration = 90, scrollRoot = content) {
  if (!scrollRoot) return;
  const start = scrollRoot.scrollTop || 0;
  const max = Math.max(0, scrollRoot.scrollHeight - scrollRoot.clientHeight);
  const target = clamp(top, 0, max);
  const distance = target - start;
  if (Math.abs(distance) < 2) return;
  const startedAt = performance.now();
  function tick(now) {
    const progress = clamp((now - startedAt) / duration, 0, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    scrollRoot.scrollTop = start + distance * eased;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
function scrollActiveTableRow(kind = 'statement') {
  if (state.viewMode !== 'table') return;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const row = tableRowFor(kind);
      if (!row) return;
      const contentTop = content.getBoundingClientRect().top;
      const target = content.scrollTop + row.getBoundingClientRect().top - contentTop - 8;
      fastScrollTo(target);
    });
  });
}
function timelineColors(record, group) {
  const values = (group?.records || []).map((item) => item.sortValue);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const ratio = max === min ? 1 : (record.sortValue - min) / (max - min);
  const hue = 204;
  const saturation = Math.round(10 + ratio * 63);
  const lightness = Math.round(67 - ratio * 32);
  return {
    dot: `hsl(${hue} ${saturation}% ${lightness}%)`,
    line: `hsl(${hue} ${Math.round(8 + ratio * 35)}% ${Math.round(86 - ratio * 20)}%)`,
    ring: `hsl(${hue} ${Math.round(10 + ratio * 40)}% ${Math.round(80 - ratio * 20)}%)`,
    activeRing: `hsl(${hue} ${Math.round(20 + ratio * 42)}% ${Math.round(88 - ratio * 12)}%)`,
  };
}
function renderActiveSummary() {
  const record = currentRecord();
  actionTitle.textContent = record
    ? [record.company, [record.period, record.periodNote].filter(Boolean).join(' - ')].filter(Boolean).join(' · ')
    : t('noDataPointSelected');
}
function renderCompanies() {
  const visibleGroups = groups.filter((group) => matches(group.searchText, companySearch.value));
  companyList.innerHTML = '';
  if (!visibleGroups.length) {
    companyList.innerHTML = `<div class="empty-state">${escapeHtml(t('noMatchingCompanies'))}</div>`;
    return;
  }
  visibleGroups.forEach((group) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'nav-item company-item' + (group.company === state.company ? ' active' : '');
    button.setAttribute('role', 'option');
    button.setAttribute('aria-selected', group.company === state.company ? 'true' : 'false');
    button.dataset.company = group.company;
    button.innerHTML = `
      <div class="item-top">
        <span class="item-name">${escapeHtml(group.company)}</span>
        <span class="item-meta">${escapeHtml(t('latest'))} ${escapeHtml(group.latest.period)}</span>
        <span class="count-pill">${group.records.length}</span>
      </div>
    `;
    button.addEventListener('click', () => {
      state.company = group.company;
      const next = sortedRecords(group).find((record) => matches(record.searchText, periodSearch.value)) || sortedRecords(group)[0];
      if (next) {
        state.activeIndex = next.index;
        syncDatasetHash(next);
      }
      renderAll();
      draw();
      companySearchController.setOpen(false);
      scrollActiveTableRow('company');
    });
    companyList.appendChild(button);
  });
}
function renderPeriods() {
  const group = groupFor(state.company);
  const yearItems = periodTreeFor(group);
  periodList.innerHTML = '';
  if (!yearItems.length) {
    periodList.innerHTML = `<div class="empty-state">${escapeHtml(t('noMatchingTimePoints'))}</div>`;
    return;
  }
  yearItems.forEach((year) => {
    const item = document.createElement('div');
    item.className = 'period-item period-year-item' + (year.active ? ' active' : '');
    item.setAttribute('role', 'group');
    item.setAttribute('aria-label', [year.yearKey, year.description].filter(Boolean).join(', '));
    const colors = timelineColors(year.selectedRecord || year.records[0], group);
    item.style.setProperty('--timeline-color', colors.dot);
    item.style.setProperty('--timeline-line-color', colors.line);
    item.style.setProperty('--timeline-ring-color', colors.ring);
    item.style.setProperty('--timeline-active-ring-color', colors.activeRing);
    const tagKeys = [...QUARTER_TAGS];
    if (year.quarters.has(ANNUAL_PERIOD_KEY)) tagKeys.push(ANNUAL_PERIOD_KEY);
    const quarterTags = tagKeys.map((tag) => {
      const bucket = year.quarters.get(tag);
      const record = bucket?.records[0];
      const isActive = Boolean(bucket?.records.some((entry) => entry.index === state.activeIndex));
      const title = record ? [record.period, record.periodNote || record.label].filter(Boolean).join(', ') : `${year.yearKey} ${tag}`;
      return `
        <button
          type="button"
          class="quarter-tag${isActive ? ' active' : ''}"
          ${record ? `data-index="${record.index}"` : 'disabled aria-disabled="true"'}
          title="${escapeHtml(title)}"
          aria-pressed="${isActive ? 'true' : 'false'}"
        >${escapeHtml(tag === ANNUAL_PERIOD_KEY ? t('annualPeriodTag') : tag)}</button>
      `;
    }).join('');
    const selectedRecords = year.selectedBucket?.records || [];
    const showVariants = selectedRecords.length > 1 || selectedRecords.some((record) => record.variantFeature);
    const variants = showVariants ? `
      <span class="variant-row" aria-label="${escapeHtml(t('viewVariantsLabel'))}">
        ${selectedRecords.map((record) => `
          <button
            type="button"
            class="variant-chip${record.index === state.activeIndex ? ' active' : ''}"
            data-index="${record.index}"
            title="${escapeHtml(record.label || record.dataset.key)}"
            aria-pressed="${record.index === state.activeIndex ? 'true' : 'false'}"
          >${escapeHtml(variantLabel(record))}</button>
        `).join('')}
      </span>
    ` : '';
    item.innerHTML = `
      <span class="timeline-marker" aria-hidden="true"><span class="timeline-dot"></span></span>
      <span class="timeline-content period-year-content">
        <span class="period-year-row">
          <span class="item-name period-year-name">${escapeHtml(year.yearKey)}</span>
          <span class="quarter-tags">${quarterTags}</span>
        </span>
        ${variants}
        <span class="period-description">${escapeHtml(year.description)}</span>
      </span>
    `;
    item.querySelectorAll('button[data-index]').forEach((button) => {
      button.addEventListener('click', () => {
        selectRecord(recordByIndex(Number(button.dataset.index)));
      });
    });
    periodList.appendChild(item);
  });
}
function renderAll() {
  renderActiveSummary();
  renderCompanies();
  renderPeriods();
  if (state.viewMode === 'table') renderTables();
}
function syncViewModeControls() {
  const isTable = state.viewMode === 'table';
  sankeyView.hidden = isTable;
  tableView.hidden = !isTable;
  sankeyActions.hidden = isTable;
  tableActions.hidden = !isTable;
  [...viewMode.querySelectorAll('button')].forEach((button) => {
    const active = button.dataset.view === state.viewMode;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', active ? 'true' : 'false');
  });
  syncToolbarHeight();
}
function setViewMode(mode, persist = true) {
  if (mode !== 'sankey' && mode !== 'table') return;
  if (state.viewMode === mode) {
    if (mode === 'table') scrollActiveTableRow('statement');
    return;
  }
  state.viewMode = mode;
  if (persist) writeStoredValue(VIEW_MODE_KEY, mode);
  renderAll();
  draw();
  if (mode === 'table') scrollActiveTableRow('statement');
}

function createHeaderSearchController({ section, input, toggle, render }) {
  const isOpen = () => section.classList.contains('search-open');
  const sync = () => {
    const open = isOpen();
    const active = open || Boolean(clean(input.value));
    toggle.classList.toggle('active', active);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  };
  const setOpen = (open) => {
    section.classList.toggle('search-open', open);
    sync();
    if (open) requestAnimationFrame(() => input.focus());
  };
  toggle.addEventListener('click', () => {
    setOpen(!isOpen());
  });
  input.addEventListener('input', () => {
    render();
    sync();
  });
  input.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (input.value) {
      input.value = '';
      render();
    }
    setOpen(false);
    toggle.focus();
  });
  document.addEventListener('pointerdown', (e) => {
    if (!isOpen()) return;
    if (section.contains(e.target)) return;
    setOpen(false);
  });
  return { sync, setOpen };
}
function syncPeriodSortToggle() {
  const isDesc = state.sort === 'desc';
  const label = isDesc ? t('sortDescTitle') : t('sortAscTitle');
  periodSortToggle.innerHTML = sortIcon(state.sort);
  periodSortToggle.title = label;
  periodSortToggle.setAttribute('aria-label', label);
  periodSortToggle.setAttribute('aria-pressed', isDesc ? 'true' : 'false');
}
const companySearchController = createHeaderSearchController({
  section: companySection,
  input: companySearch,
  toggle: companySearchToggle,
  render: renderCompanies,
});
const periodSearchController = createHeaderSearchController({
  section: periodSection,
  input: periodSearch,
  toggle: periodSearchToggle,
  render: renderPeriods,
});
periodSortToggle.addEventListener('click', () => {
  state.sort = state.sort === 'desc' ? 'asc' : 'desc';
  syncPeriodSortToggle();
  renderPeriods();
});
viewMode.addEventListener('click', (e) => {
  const button = e.target.closest('button');
  if (!button) return;
  setViewMode(button.dataset.view);
});
languageToggle.addEventListener('click', () => {
  setLanguage(state.language === 'en' ? 'zh' : 'en');
});
themeToggle.addEventListener('click', () => {
  setTheme(state.theme === 'light' ? 'dark' : 'light');
});
sidebarToggle.addEventListener('click', () => {
  setSidebarCollapsed(!state.sidebarCollapsed);
});

let sidebarDrag = null;
sidebarResizer.addEventListener('pointerdown', (e) => {
  if (!isDesktopLayout() || state.sidebarCollapsed) return;
  sidebarDrag = { pointerId: e.pointerId, x: e.clientX, width: state.sidebarWidth };
  sidebarResizer.setPointerCapture(e.pointerId);
  document.body.classList.add('is-resizing-sidebar');
  e.preventDefault();
});
sidebarResizer.addEventListener('pointermove', (e) => {
  if (!sidebarDrag || e.pointerId !== sidebarDrag.pointerId) return;
  applySidebarWidth(sidebarDrag.width + e.clientX - sidebarDrag.x);
});
function finishSidebarResize(e) {
  if (!sidebarDrag || e.pointerId !== sidebarDrag.pointerId) return;
  sidebarDrag = null;
  document.body.classList.remove('is-resizing-sidebar');
  applySidebarWidth(state.sidebarWidth, true);
  draw();
}
sidebarResizer.addEventListener('pointerup', finishSidebarResize);
sidebarResizer.addEventListener('pointercancel', finishSidebarResize);
sidebarResizer.addEventListener('keydown', (e) => {
  if (!isDesktopLayout() || state.sidebarCollapsed) return;
  const bounds = sidebarBounds();
  let nextWidth = state.sidebarWidth;
  if (e.key === 'ArrowLeft') nextWidth -= e.shiftKey ? 48 : 16;
  else if (e.key === 'ArrowRight') nextWidth += e.shiftKey ? 48 : 16;
  else if (e.key === 'Home') nextWidth = bounds.min;
  else if (e.key === 'End') nextWidth = bounds.max;
  else return;
  e.preventDefault();
  applySidebarWidth(nextWidth, true);
  draw();
});

function chartWidth(d) {
  return d.render?.width || window.SankeyEngine.DEFAULTS?.width || 2862;
}
function draw() {
  syncViewModeControls();
  if (state.viewMode === 'table') {
    renderTables();
    svgBtn.disabled = true;
    return;
  }
  const d = currentDataset();
  const maxWidth = chartWidth(d);
  document.querySelector('.card').style.maxWidth = maxWidth + 'px';
  if (d) window.SankeyEngine.render('#chart', d);
  svgBtn.disabled = !document.querySelector('#chart svg');
}

window.addEventListener('hashchange', () => {
  const record = recordFromHash();
  if (!record) return;
  if (record.index === state.activeIndex && record.company === state.company) return;
  state.activeIndex = record.index;
  state.company = record.company;
  renderAll();
  draw();
  scrollActiveTableRow('statement');
});

let rt;
window.addEventListener('resize', () => {
  clearTimeout(rt);
  rt = setTimeout(() => {
    syncResponsiveLayout();
    draw();
  }, 200);
});

applyStaticTranslations();
syncResponsiveLayout();
renderAll();
draw();
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    document.body.classList.remove('boot-no-motion');
  });
});

/* ---- export ---- */
const currentSvg = () => document.querySelector('#chart svg');
function downloadText(filename, text, type = 'text/csv;charset=utf-8') {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([text], { type }));
  a.download = filename;
  a.click();
}
function csvCell(value) {
  const text = String(value ?? '').replace(/\r?\n/g, ' ');
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}
function csvFromRows(columns, rows) {
  return [
    columns.map((column) => csvCell(column.label)).join(','),
    ...rows.map((row) => columns.map((column) => csvCell(column.value(row))).join(',')),
  ].join('\n') + '\n';
}
function svgString() {
  const svg = currentSvg().cloneNode(true);
  svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  return '<?xml version="1.0" encoding="UTF-8"?>\n' + new XMLSerializer().serializeToString(svg);
}
function dims() {
  const svg = currentSvg();
  if (svg.viewBox && svg.viewBox.baseVal && svg.viewBox.baseVal.width)
    return [svg.viewBox.baseVal.width, svg.viewBox.baseVal.height];
  const r = svg.getBoundingClientRect();
  return [r.width, r.height];
}
const fname = () => (currentDataset()?.key || 'sankey') + '-d3';
svgBtn.onclick = () => {
  if (state.viewMode !== 'sankey' || !currentSvg()) return;
  downloadText(fname() + '.svg', svgString(), 'image/svg+xml');
};
pngBtn.onclick = () => {
  if (state.viewMode !== 'sankey' || !currentSvg()) return;
  const [w, h] = dims(); const scale = 2;
  const img = new Image();
  img.onload = () => {
    const c = document.createElement('canvas');
    c.width = w * scale; c.height = h * scale;
    c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
    c.toBlob((b) => { const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = fname() + '.png'; a.click(); });
  };
  img.src = URL.createObjectURL(new Blob([svgString()], { type: 'image/svg+xml' }));
};
companiesCsvBtn.onclick = () => {
  const columns = [
    { label: 'company', value: (row) => row.company },
    { label: 'legal_name', value: (row) => row.legalName },
    { label: 'ticker', value: (row) => row.ticker },
    { label: 'exchange', value: (row) => row.exchange },
    { label: 'sector', value: (row) => row.sector },
    { label: 'industry', value: (row) => row.industry },
    { label: 'founded', value: (row) => row.founded },
    { label: 'headquarters', value: (row) => row.headquarters },
    { label: 'fiscal_year_end', value: (row) => row.fiscalYearEnd },
    { label: 'website', value: (row) => row.website },
    { label: 'description', value: (row) => row.description },
    { label: 'dataset_count', value: (row) => row.datasetCount },
    { label: 'latest_period', value: (row) => row.latestPeriod },
    { label: 'source_urls', value: (row) => (row.sourceUrls || []).join(' ') },
  ];
  downloadText('companies.csv', csvFromRows(columns, companyRows()));
};
statementsCsvBtn.onclick = () => {
  const columns = [
    { label: 'dataset_key', value: (row) => row.record.dataset.key },
    { label: 'company', value: (row) => row.record.company },
    { label: 'period', value: (row) => row.record.period },
    { label: 'period_note', value: (row) => row.record.periodNote },
    { label: 'currency', value: (row) => row.financial?.currency || '' },
    { label: 'unit', value: (row) => row.financial?.unit || '' },
    { label: 'revenue_total', value: (row) => row.financial?.revenue?.total ?? '' },
    { label: 'revenue_notes', value: (row) => notesText(row.financial?.revenue?.notes) },
    { label: 'revenue_items', value: (row) => describeItems(row.financial?.revenue?.items, row.financial) },
    { label: 'cost_of_revenue', value: (row) => row.financial?.costs?.costOfRevenue?.value ?? '' },
    { label: 'gross_profit', value: (row) => row.financial?.profit?.gross?.value ?? '' },
    { label: 'operating_expenses', value: (row) => row.financial?.costs?.operatingExpenses?.total ?? '' },
    { label: 'operating_expense_items', value: (row) => describeItems(row.financial?.costs?.operatingExpenses?.items, row.financial) },
    { label: 'operating_profit', value: (row) => row.financial?.profit?.operating?.value ?? '' },
    { label: 'other_income', value: (row) => row.financial?.otherIncome?.total ?? 0 },
    { label: 'tax', value: (row) => row.financial?.costs?.tax?.value ?? '' },
    { label: 'net_profit', value: (row) => row.financial?.profit?.net?.value ?? '' },
    { label: 'source_image', value: (row) => row.financial?.sourceImage || '' },
  ];
  downloadText('income-statements.csv', csvFromRows(columns, statementRows()));
};
