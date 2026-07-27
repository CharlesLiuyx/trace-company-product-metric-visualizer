/* ====================================================================
 *  i18n.js
 *  Shared language configuration and best-effort data localization.
 *
 *  English data remains the canonical source for verification and source
 *  image fidelity. Non-default languages are projected at render time, with
 *  optional per-record `i18n.<language>` overlays for precise wording/layout.
 * ==================================================================== */
(function (global) {
  'use strict';

  const DEFAULT_LANGUAGE = 'en';
  const LANGUAGES = [
    { code: 'en', htmlLang: 'en', label: 'EN', name: 'English' },
    { code: 'zh', htmlLang: 'zh-CN', label: '中', name: '简体中文' },
  ];
  const LANGUAGE_CODES = LANGUAGES.map((language) => language.code);

  const UI = {
    en: {
      documentTitle: 'Trace (Company & Product Metric Visualizer)',
      appTitle: 'Trace (Company & Product Metric Visualizer)',
      byline: 'by',
      viewModeLabel: 'Data view',
      viewSankey: 'Sankey',
      viewSankeyTitle: 'Sankey view',
      viewTrend: 'Trend',
      viewTrendTitle: 'Trend view',
      viewTable: 'Table',
      viewTableTitle: 'Table view',
      mainControlsLabel: 'Metric and view controls',
      metricLabel: 'Metric',
      metricModeLabel: 'Metric',
      metricCompanyInfo: 'Company Info',
      metricIncomeStatement: 'Income Statement',
      metricRevenue: 'Revenue',
      viewLabel: 'View',
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
      downloadRevenueCsv: 'Revenue CSV',
      downloadRevenueCsvTitle: 'Download revenue CSV',
      datasetNavigationLabel: 'Dataset navigation',
      companyLabel: 'Company',
      companiesLabel: 'Companies',
      companySearchPlaceholder: 'Search companies',
      companySortButton: 'Sort companies',
      companySortCurrent: 'Sort companies: {sort}, {direction}',
      companySortName: 'Alphabetical',
      companySortRecent: 'Recently updated',
      companySortMarketCap: 'Market cap',
      companySortNetProfit: 'Net profit',
      companySortFounded: 'Founded date',
      companySortAction: '{sort}: {direction}',
      companySortDirectionGroup: '{sort} direction',
      companySortNameAsc: 'A to Z',
      companySortNameDesc: 'Z to A',
      companySortRecentAsc: 'Oldest first',
      companySortRecentDesc: 'Newest first',
      companySortMarketCapAsc: 'Smallest first',
      companySortMarketCapDesc: 'Largest first',
      companySortNetProfitAsc: 'Lowest first',
      companySortNetProfitDesc: 'Highest first',
      companySortFoundedAsc: 'Oldest first',
      companySortFoundedDesc: 'Newest first',
      companySortMetaMarketCap: 'Mkt cap {value}',
      companySortMetaNetProfit: 'Net profit {value}',
      companySortMetaFounded: 'Founded {value}',
      companySortMetaUpdated: 'Updated {value}',
      companyMultiExitTitle: 'Exit company multi-select',
      periodMultiExitTitle: 'Exit time point multi-select',
      periodSelectAllTitle: 'Select or clear all time points',
      periodYearToggleTitle: 'Select or clear {year} time points',
      comparisonNoData: 'No data for this metric',
      comparisonScaleUnavailable: 'Unable to calibrate a shared monetary scale for this comparison.',
      datasetLoading: 'Loading dataset…',
      datasetLoadError: 'This dataset could not be loaded.',
      datasetLoadRetry: 'Retry',
      chartRuntimeLoading: 'Loading chart tools…',
      chartRuntimeLoadError: 'Chart tools could not be loaded.',
      comparisonScopeSummary: '{count} selected companies',
      comparisonPeriodScopeSummary: '{count} selected time points',
      comparisonMetricTrendPointCount: '{count} time points',
      comparisonMetricTrendCloseTitle: 'Collapse metric trend',
      comparisonMetricTrendAxisValue: 'Metric value ({unit})',
      comparisonMetricTrendAxisGrowth: 'Growth vs previous time point (%)',
      comparisonMetricTrendAxisShare: 'Flow share of larger endpoint (%)',
      comparisonMetricTrendAxisHint: 'Click a y-axis to collapse or reopen it',
      zoomControlsLabel: 'Comparison zoom',
      zoomInTitle: 'Zoom in',
      zoomOutTitle: 'Zoom out',
      zoomFitTitle: 'Reset to fit',
      comparisonZoomHint: 'Double-click to zoom in',
      hotkeyHintScopeExtendClick: 'click a company / time point to multi-select',
      hotkeyHintMetricSoloClick: 'click a metric to select only it',
      hotkeyHintMetricLayerClick: 'click a metric to select its whole layer',
      hotkeyHintComparisonZoomWheel: 'wheel to zoom',
      hotkeyHintComparisonPanWheel: 'wheel to pan sideways',
      hotkeyHintCompanySearchKey: 'F to search companies',
      fxConvertedNote: 'Converted to USD · FX as of {asOf}',
      fxConvertedTitle: 'Mixed reporting currencies: non-USD amounts are converted to USD at {source} rates as of {asOf}.',
      fxExcludedSuffix: '(excl. {companies})',
      fxExcludedTitle: 'Missing FX rate for {companies}; excluded from the total.',
      periodLabel: 'Data point time',
      periodSortLabel: 'Sort time points',
      sortDesc: 'Desc',
      sortDescTitle: 'Newest first',
      sortAsc: 'Asc',
      sortAscTitle: 'Oldest first',
      periodExpandTitle: 'Expand time points',
      periodCollapseTitle: 'Collapse time points',
      periodSearchPlaceholder: 'Search time points',
      periodsLabel: 'Data point times',
      resizeDatasetPanelLabel: 'Resize dataset panel',
      incomeStatementsLabel: 'Income Statements',
      revenueMetricsLabel: 'Revenue Metrics',
      collapseDatasetPanel: 'Collapse dataset panel',
      showDatasetPanel: 'Show dataset panel',
      missing: 'Missing',
      source: 'Source {number}',
      companiesCountOne: '1 company',
      companiesCountMany: '{count} companies',
      statementsCountOne: '1 statement',
      statementsCountMany: '{count} statements',
      revenueRowsCountOne: '1 revenue point',
      revenueRowsCountMany: '{count} revenue points',
      noCompaniesRegistered: 'No companies registered.',
      noIncomeStatementsRegistered: 'No income statements registered.',
      noRevenueMetricsRegistered: 'No revenue metrics registered.',
      noRevenueTrendData: 'No revenue trend data.',
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
      tableMarketCap: 'Market cap',
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
      tableMetric: 'Metric',
      tableDate: 'Date',
      tableAnnualizedRevenue: 'Annualized revenue',
      tableMomGrowth: 'MoM growth',
      tableNotes: 'Notes',
      tableDefinition: 'Definition',
      trendLatest: 'Latest {value} on {date}',
      trendLatestArr: 'Latest ARR',
      trendLatestMom: 'Latest MoM',
      trendPeakMom: 'Peak MoM',
    },
    zh: {
      documentTitle: 'Trace（公司与产品指标可视化器）',
      appTitle: 'Trace（公司与产品指标可视化器）',
      byline: '作者',
      viewModeLabel: '数据视图',
      viewSankey: '桑基图',
      viewSankeyTitle: '桑基图视图',
      viewTrend: '趋势',
      viewTrendTitle: '趋势视图',
      viewTable: '表格',
      viewTableTitle: '表格视图',
      mainControlsLabel: '指标与视图控制',
      metricLabel: '指标',
      metricModeLabel: '指标',
      metricCompanyInfo: '公司信息',
      metricIncomeStatement: '利润表',
      metricRevenue: '收入',
      viewLabel: '视图',
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
      downloadRevenueCsv: '收入 CSV',
      downloadRevenueCsvTitle: '下载收入 CSV',
      datasetNavigationLabel: '数据集导航',
      companyLabel: '公司',
      companiesLabel: '公司',
      companySearchPlaceholder: '搜索公司',
      companySortButton: '公司排序',
      companySortCurrent: '公司排序：{sort}，{direction}',
      companySortName: '字母序',
      companySortRecent: '最近更新',
      companySortMarketCap: '市值',
      companySortNetProfit: '净利润',
      companySortFounded: '成立日期',
      companySortAction: '{sort}：{direction}',
      companySortDirectionGroup: '{sort}排序方向',
      companySortNameAsc: 'A 到 Z',
      companySortNameDesc: 'Z 到 A',
      companySortRecentAsc: '最旧优先',
      companySortRecentDesc: '最新优先',
      companySortMarketCapAsc: '市值从低到高',
      companySortMarketCapDesc: '市值从高到低',
      companySortNetProfitAsc: '净利润从低到高',
      companySortNetProfitDesc: '净利润从高到低',
      companySortFoundedAsc: '成立最早优先',
      companySortFoundedDesc: '成立最新优先',
      companySortMetaMarketCap: '市值 {value}',
      companySortMetaNetProfit: '净利润 {value}',
      companySortMetaFounded: '成立于 {value}',
      companySortMetaUpdated: '更新 {value}',
      companyMultiExitTitle: '退出公司多选',
      periodMultiExitTitle: '退出数据期间多选',
      periodSelectAllTitle: '全选 / 清空数据期间',
      periodYearToggleTitle: '全选 / 清空 {year} 数据期间',
      comparisonNoData: '该指标暂无数据',
      comparisonScaleUnavailable: '无法为本次对比校准统一的金额比例尺。',
      datasetLoading: '数据集加载中…',
      datasetLoadError: '数据集加载失败。',
      datasetLoadRetry: '重试',
      chartRuntimeLoading: '图表工具加载中…',
      chartRuntimeLoadError: '图表工具加载失败。',
      comparisonScopeSummary: '已选择 {count} 家公司',
      comparisonPeriodScopeSummary: '已选 {count} 个数据期间',
      comparisonMetricTrendPointCount: '{count} 个数据期间',
      comparisonMetricTrendCloseTitle: '收起指标趋势',
      comparisonMetricTrendAxisValue: '指标金额（{unit}）',
      comparisonMetricTrendAxisGrowth: '较上一数据期间增长（%）',
      comparisonMetricTrendAxisShare: '流向占较大端点比例（%）',
      comparisonMetricTrendAxisHint: '点击纵轴可收起 / 展开',
      zoomControlsLabel: '对比视图缩放',
      zoomInTitle: '放大',
      zoomOutTitle: '缩小',
      zoomFitTitle: '重置为适应宽度',
      comparisonZoomHint: '双击放大此图表',
      hotkeyHintScopeExtendClick: '点击公司 / 数据期间可多选',
      hotkeyHintMetricSoloClick: '点击指标仅选中它',
      hotkeyHintMetricLayerClick: '点击指标选中其所在整层',
      hotkeyHintComparisonZoomWheel: '滚轮缩放',
      hotkeyHintComparisonPanWheel: '滚轮横向平移',
      hotkeyHintCompanySearchKey: 'F 搜索公司',
      fxConvertedNote: '已折算为美元 · 汇率截至 {asOf}',
      fxConvertedTitle: '所选公司报表货币不同：非美元金额已按 {source} {asOf} 汇率折算为美元。',
      fxExcludedSuffix: '（不含 {companies}）',
      fxExcludedTitle: '缺少 {companies} 的汇率，未计入总额。',
      periodLabel: '数据期间',
      periodSortLabel: '排序数据期间',
      sortDesc: '降序',
      sortDescTitle: '最新优先',
      sortAsc: '升序',
      sortAscTitle: '最旧优先',
      periodExpandTitle: '展开数据期间',
      periodCollapseTitle: '收起数据期间',
      periodSearchPlaceholder: '搜索数据期间',
      periodsLabel: '数据期间',
      resizeDatasetPanelLabel: '调整数据集面板宽度',
      incomeStatementsLabel: '利润表',
      revenueMetricsLabel: '收入指标',
      collapseDatasetPanel: '收起数据集面板',
      showDatasetPanel: '显示数据集面板',
      missing: '缺失',
      source: '来源 {number}',
      companiesCountOne: '1 家公司',
      companiesCountMany: '{count} 家公司',
      statementsCountOne: '1 份报表',
      statementsCountMany: '{count} 份报表',
      revenueRowsCountOne: '1 个收入数据点',
      revenueRowsCountMany: '{count} 个收入数据点',
      noCompaniesRegistered: '暂无已注册公司。',
      noIncomeStatementsRegistered: '暂无已注册利润表。',
      noRevenueMetricsRegistered: '暂无已注册收入指标。',
      noRevenueTrendData: '暂无收入趋势数据。',
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
      tableMarketCap: '市值',
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
      tableOperatingProfit: '营业利润',
      tableOtherIncome: '其他收入',
      tableTax: '税费',
      tableNetProfit: '净利润',
      tableSourceImage: '来源图片',
      tableMetric: '指标',
      tableDate: '日期',
      tableAnnualizedRevenue: '年化收入',
      tableMomGrowth: '月环比增速',
      tableNotes: '备注',
      tableDefinition: '定义',
      trendLatest: '最新 {date} 为 {value}',
      trendLatestArr: '最新年化收入',
      trendLatestMom: '最新月增速',
      trendPeakMom: '最高月增速',
    },
  };

  /* Per-language translation data lives in src/i18n-dictionaries.js and
   * must load first; the rule pipeline below only holds logic. */
  const ZH_DICTIONARIES = global.SANKEY_I18N_DICTIONARIES && global.SANKEY_I18N_DICTIONARIES.zh;
  if (!ZH_DICTIONARIES) {
    throw new Error('src/i18n-dictionaries.js must load before src/i18n.js');
  }
  const {
    MONTH_ZH,
    EXACT_ZH,
    LAYOUT_LINE_SPLITS_ZH,
    SECTOR_ZH,
    FISCAL_YEAR_END_ZH,
    HEADQUARTERS_ZH,
  } = ZH_DICTIONARIES;

  const EXACT_ZH_REPLACEMENTS = Object.keys(EXACT_ZH)
    .filter((key) => key.length > 2 && EXACT_ZH[key] !== key)
    .sort((a, b) => b.length - a.length || a.localeCompare(b))
    .map((key) => ({
      key,
      value: EXACT_ZH[key],
      pattern: new RegExp(`(^|[^A-Za-z0-9])(${escapeRegExp(key)})(?=$|[^A-Za-z0-9])`, 'g'),
    }));





  function normalizeLanguage(language) {
    return LANGUAGE_CODES.includes(language) ? language : DEFAULT_LANGUAGE;
  }

  function htmlLang(language) {
    const code = normalizeLanguage(language);
    return LANGUAGES.find((item) => item.code === code)?.htmlLang || code;
  }

  function nextLanguage(language) {
    const code = normalizeLanguage(language);
    const index = LANGUAGE_CODES.indexOf(code);
    return LANGUAGE_CODES[(index + 1) % LANGUAGE_CODES.length] || DEFAULT_LANGUAGE;
  }

  function interpolate(text, values) {
    return String(text || '').replace(/\{(\w+)\}/g, (_match, name) => values?.[name] ?? '');
  }

  function t(key, values, language) {
    const code = normalizeLanguage(language);
    const text = UI[code]?.[key] || UI[DEFAULT_LANGUAGE][key] || key;
    return interpolate(text, values);
  }

  function clean(value) {
    return String(value || '').replace(/\s+/g, ' ').trim();
  }

  function hasLatinText(value) {
    return /[A-Za-z]/.test(String(value || ''));
  }

  function hasChineseText(value) {
    return /[\u3400-\u9fff]/.test(String(value || ''));
  }

  function escapeRegExp(value) {
    return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function cleanupLocalizedPunctuation(text) {
    return String(text || '')
      .replace(/\s*,\s*and\s+/gi, '和')
      .replace(/\s+and\s+/gi, '和')
      .replace(/\s*&\s*/g, '与')
      .replace(/\s*,\s*/g, '、')
      .replace(/\s*;\s*/g, '；')
      .replace(/、\s*和/g, '和')
      .replace(/\s+\/\s+/g, ' / ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function replaceKnownPhrases(text) {
    let out = String(text || '');
    EXACT_ZH_REPLACEMENTS.forEach((entry) => {
      out = out.replace(entry.pattern, (_match, prefix) => `${prefix}${entry.value}`);
    });
    return cleanupLocalizedPunctuation(out);
  }

  function translateKnownPhraseText(text, language) {
    if (normalizeLanguage(language) !== 'zh') return text;
    const value = clean(text);
    if (!value || !hasLatinText(value)) return text;
    const out = replaceKnownPhrases(value);
    return out !== value && hasChineseText(out) ? out : text;
  }

  function clone(value) {
    if (Array.isArray(value)) return value.map(clone);
    if (value && typeof value === 'object') {
      const out = {};
      Object.keys(value).forEach((key) => {
        out[key] = clone(value[key]);
      });
      return out;
    }
    return value;
  }

  function mergeArrayOverlayByIndex(target, overlay) {
    overlay.forEach((item, index) => {
      if (item == null) return;
      const prev = target[index];
      if (
        prev &&
        item &&
        typeof prev === 'object' &&
        typeof item === 'object' &&
        !Array.isArray(prev) &&
        !Array.isArray(item)
      ) {
        mergeOverlay(prev, item);
      } else {
        target[index] = clone(item);
      }
    });
    return target;
  }

  function mergeOverlay(target, overlay) {
    if (!overlay || typeof overlay !== 'object') return target;
    Object.keys(overlay).forEach((key) => {
      const next = overlay[key];
      const prev = target[key];
      if (key === 'observations' && Array.isArray(prev) && Array.isArray(next)) {
        mergeArrayOverlayByIndex(prev, next);
        return;
      }
      if (Array.isArray(prev) && Array.isArray(next) && next.every((item) => item && typeof item === 'object' && item.id)) {
        next.forEach((item) => {
          const match = prev.find((candidate) => candidate && candidate.id === item.id);
          if (match) mergeOverlay(match, item);
          else prev.push(clone(item));
        });
        return;
      }
      if (
        Array.isArray(prev) &&
        next &&
        typeof next === 'object' &&
        !Array.isArray(next) &&
        ['nodes', 'nonNodeMetrics'].includes(key)
      ) {
        Object.keys(next).forEach((id) => {
          const match = prev.find((candidate) => candidate && candidate.id === id);
          if (match) mergeOverlay(match, next[id]);
        });
        return;
      }
      if (
        prev &&
        next &&
        typeof prev === 'object' &&
        typeof next === 'object' &&
        !Array.isArray(prev) &&
        !Array.isArray(next)
      ) {
        mergeOverlay(prev, next);
      } else {
        target[key] = clone(next);
      }
    });
    return target;
  }

  // Financial object arrays are semantic SSOT containers. Unlike Dataset
  // layout arrays (where a locale may deliberately replace line wrapping),
  // labels-only financial arrays must merge into canonical items so id/value
  // fields cannot disappear. Stable ids win; legacy labels-only arrays merge
  // positionally after validateFinancialOverlay proves the source slot exists.
  function mergeFinancialOverlay(target, overlay) {
    if (!overlay || typeof overlay !== 'object') return target;
    Object.keys(overlay).forEach((key) => {
      const next = overlay[key];
      const prev = target[key];
      if (Array.isArray(prev) && Array.isArray(next)) {
        const objectItems = next.every(
          (item) => item == null || (typeof item === 'object' && !Array.isArray(item))
        );
        if (!objectItems) {
          target[key] = clone(next);
          return;
        }
        next.forEach((item, index) => {
          if (item == null) return;
          const match = item.id != null
            ? prev.find((candidate) => String(candidate?.id ?? '') === String(item.id))
            : prev[index];
          mergeFinancialOverlay(match, item);
        });
        return;
      }
      if (
        prev
        && next
        && typeof prev === 'object'
        && typeof next === 'object'
        && !Array.isArray(prev)
        && !Array.isArray(next)
      ) {
        mergeFinancialOverlay(prev, next);
      } else {
        target[key] = clone(next);
      }
    });
    return target;
  }

  const DATASET_OVERLAY_KEYS = new Set([
    'name', 'meta', 'nodes', 'nonNodeMetrics', 'layout', 'annotationsSvg',
  ]);
  const DATASET_META_OVERLAY_KEYS = new Set([
    'title', 'subtitle', 'period', 'periodNote', 'titleTextLength', 'titleSize',
    'periodX', 'hidePeriodStamp',
  ]);
  // valueText is financially authoritative visible output, not localization
  // copy. Locales may change labels/notes, but never restate an amount.
  const DATASET_NODE_OVERLAY_KEYS = new Set(['label', 'notes']);
  // Derived from every annotationsSvg fragment in the registered dataset
  // corpus. This is an executable Interface boundary, not a best-effort
  // blocklist: adding a new SVG primitive requires an explicit review here
  // and in SankeyEngine's independent renderer guard.
  const ANNOTATION_SVG_ALLOWED_TAGS = new Set([
    'circle', 'clippath', 'defs', 'ellipse', 'g', 'line', 'lineargradient',
    'path', 'polygon', 'radialgradient', 'rect', 'stop', 'svg', 'text', 'tspan',
  ]);
  const FINANCIAL_OVERLAY_CONTAINERS = new Set([
    'revenue', 'costs', 'costOfRevenue', 'operatingExpenses', 'tax',
    'otherIncome', 'otherExpenses', 'operatingOtherIncome', 'operatingOtherExpenses',
    'profit', 'gross', 'operating', 'net', 'items', 'children', 'breakdowns',
    'paymentNetwork', 'grossItems', 'rebates',
  ]);
  const REVENUE_METRIC_OVERLAY_KEYS = new Set([
    'displayName', 'period', 'periodNote', 'definition', 'lineage', 'conditions', 'observations',
  ]);
  const REVENUE_CONDITION_OVERLAY_KEYS = new Set([
    'basis', 'consolidation', 'geography', 'timeGrain',
  ]);
  const COMPANY_OVERLAY_KEYS = new Set([
    'name', 'displayName', 'sector', 'industry', 'headquarters', 'fiscalYearEnd', 'description',
  ]);

  function overlayContractError(surface, owner, language, path) {
    throw new Error(
      `${surface} ${owner || '<unknown>'} ${language} i18n overlay path "${path}" is not display-only`
    );
  }

  function rejectUnknownOverlayKeys(value, allowed, surface, owner, language, path) {
    if (!value || typeof value !== 'object' || Array.isArray(value)) {
      overlayContractError(surface, owner, language, path);
    }
    Object.keys(value).forEach((key) => {
      if (!allowed.has(key)) {
        overlayContractError(surface, owner, language, path ? `${path}.${key}` : key);
      }
    });
  }

  function repeatedlyDecodeSvgText(value) {
    let decoded = String(value || '');
    for (let pass = 0; pass < 3; pass += 1) {
      const next = decodeSvgText(decoded);
      if (next === decoded) break;
      decoded = next;
    }
    return decoded;
  }

  function assertSafeAnnotationSvg(value, surface, owner, language, path) {
    if (value == null || value === '') return;
    if (typeof value !== 'string') {
      overlayContractError(surface, owner, language, path);
    }
    const markup = repeatedlyDecodeSvgText(value);
    const checkedMarkup = markup.replace(/<!--[\s\S]*?-->/g, '');
    if (/<!--|-->/.test(checkedMarkup)) {
      overlayContractError(surface, owner, language, `${path}.safeMarkup`);
    }
    if (/<\s*[!?]/.test(checkedMarkup)) {
      overlayContractError(surface, owner, language, `${path}.safeMarkup`);
    }
    const tagPattern = /<\s*(\/?)\s*([A-Za-z][\w:.-]*)\b[^>]*>/g;
    let match;
    while ((match = tagPattern.exec(checkedMarkup))) {
      const tagName = match[2].toLowerCase();
      if (!ANNOTATION_SVG_ALLOWED_TAGS.has(tagName)) {
        overlayContractError(surface, owner, language, `${path}.safeMarkup`);
      }
      const tagMarkup = match[0];
      if (
        /(?:\s|\/)on[a-z][\w:.-]*\s*=/i.test(tagMarkup)
        || /\b(?:href|xlink:href|src)\s*=/i.test(tagMarkup)
        || /\b(?:expression\s*\(|@import\b)/i.test(tagMarkup)
      ) {
        overlayContractError(surface, owner, language, `${path}.safeMarkup`);
      }
    }
    const residue = checkedMarkup.replace(tagPattern, '');
    if (residue.includes('<')) {
      overlayContractError(surface, owner, language, `${path}.safeMarkup`);
    }
    const compactMarkup = checkedMarkup.replace(/[\u0000-\u0020\u007f]+/g, '');
    if (/(?:javascript|vbscript|data:text\/html):/i.test(compactMarkup)) {
      overlayContractError(surface, owner, language, `${path}.safeMarkup`);
    }
    for (const urlMatch of checkedMarkup.matchAll(/\burl\s*\(\s*([^)]*?)\s*\)/gi)) {
      const target = urlMatch[1].trim().replace(/^(['"])(.*)\1$/, '$2');
      if (!/^#[A-Za-z_][\w:.-]*$/.test(target)) {
        overlayContractError(surface, owner, language, `${path}.safeMarkup`);
      }
    }
  }

  function annotationSvgStructureSignature(value, surface, owner, language, path) {
    const markup = repeatedlyDecodeSvgText(value).replace(/<!--[\s\S]*?-->/g, '');
    const tokens = [];
    const stack = [];
    const tagPattern = /<\s*(\/?)\s*([A-Za-z][\w:.-]*)\b[^>]*>/g;
    let cursor = 0;
    let match;
    while ((match = tagPattern.exec(markup))) {
      const text = markup.slice(cursor, match.index);
      const parentTag = stack[stack.length - 1] || '';
      if (text.trim() && !['text', 'tspan'].includes(parentTag)) {
        tokens.push(`#text:${text.replace(/\s+/g, ' ').trim()}`);
      }
      cursor = tagPattern.lastIndex;
      const tagName = match[2].toLowerCase();
      if (match[1]) {
        if (stack.pop() !== tagName) {
          overlayContractError(surface, owner, language, `${path}.safeMarkup`);
        }
        tokens.push(`/${tagName}`);
        continue;
      }
      const selfClosing = /\/\s*>$/.test(match[0]);
      const attributeText = match[0]
        .replace(/^<\s*[A-Za-z][\w:.-]*/i, '')
        .replace(/\/?\s*>$/, '');
      const attributes = [];
      const names = new Set();
      const attributePattern = /([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;
      let attributeCursor = 0;
      let attributeMatch;
      while ((attributeMatch = attributePattern.exec(attributeText))) {
        if (attributeText.slice(attributeCursor, attributeMatch.index).trim()) {
          overlayContractError(surface, owner, language, `${path}.safeMarkup`);
        }
        attributeCursor = attributePattern.lastIndex;
        const name = attributeMatch[1].toLowerCase();
        if (names.has(name)) {
          overlayContractError(surface, owner, language, `${path}.safeMarkup`);
        }
        names.add(name);
        const attributeValue = repeatedlyDecodeSvgText(
          attributeMatch[2] ?? attributeMatch[3] ?? attributeMatch[4] ?? ''
        );
        attributes.push(`${name}=${JSON.stringify(attributeValue)}`);
      }
      if (attributeText.slice(attributeCursor).trim()) {
        overlayContractError(surface, owner, language, `${path}.safeMarkup`);
      }
      attributes.sort();
      tokens.push(`<${tagName}${selfClosing ? '/' : ''}|${attributes.join('|')}`);
      if (!selfClosing) stack.push(tagName);
    }
    const tail = markup.slice(cursor);
    const parentTag = stack[stack.length - 1] || '';
    if (tail.trim() && !['text', 'tspan'].includes(parentTag)) {
      tokens.push(`#text:${tail.replace(/\s+/g, ' ').trim()}`);
    }
    if (stack.length) {
      overlayContractError(surface, owner, language, `${path}.safeMarkup`);
    }
    return tokens;
  }

  // Locale annotation SVG is an authoring convenience, not a second geometry
  // authority. The projection below transfers one localized DOM-like text
  // node into the corresponding source text slot and admits only a small,
  // typed set of text-layout overrides. Every element, every non-text
  // attribute, and every other text/tspan attribute must match the source.
  const ANNOTATION_TEXT_LAYOUT_ATTRIBUTES = new Set([
    'x', 'y', 'dx', 'font-size', 'font-family', 'font-weight',
    'textlength', 'lengthadjust', 'text-anchor',
  ]);
  const ANNOTATION_TEXT_LAYOUT_CHANGES = new Set([
    'x', 'y', 'font-size', 'font-family', 'textlength',
  ]);
  const ANNOTATION_TEXT_LAYOUT_ADDITIONS = new Set([
    'font-weight', 'text-anchor',
  ]);
  const ANNOTATION_TEXT_LAYOUT_REMOVALS = new Set([
    'font-weight', 'textlength', 'lengthadjust',
  ]);
  const SAFE_ANNOTATION_GEOMETRY_CLASSES = new Set([
    'sankey-interactive-annotation',
    'sankey-period-stamp',
  ]);
  const UNSUPPORTED_ANNOTATION_GEOMETRY_TAGS = new Set([
    'svg', 'defs', 'clippath', 'lineargradient', 'radialgradient',
  ]);
  const UNSUPPORTED_ANNOTATION_GEOMETRY_ATTRIBUTES = new Set([
    'clip', 'clip-path', 'display', 'filter', 'mask', 'opacity', 'overflow',
    'preserveaspectratio', 'transform-origin', 'viewbox', 'visibility',
  ]);

  function annotationProjectionError(surface, owner, language, path) {
    overlayContractError(
      surface || 'Dataset annotation',
      owner || '<authoring>',
      language || 'localized',
      path || 'annotationsSvg.structure'
    );
  }

  function parseAnnotationTag(rawTag, surface, owner, language, path) {
    const tagMatch = rawTag.match(
      /^<\s*(\/?)\s*([A-Za-z][\w:.-]*)\b([\s\S]*?)>$/
    );
    if (!tagMatch) {
      annotationProjectionError(surface, owner, language, `${path}.safeMarkup`);
    }
    const closing = Boolean(tagMatch[1]);
    const tagName = tagMatch[2].toLowerCase();
    const selfClosing = !closing && /\/\s*$/.test(tagMatch[3]);
    if (closing) {
      return { closing, selfClosing: false, tagName, attributes: [] };
    }
    const attributeText = tagMatch[3].replace(/\/\s*$/, '');
    const attributes = [];
    const names = new Set();
    const attributePattern = /([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;
    let cursor = 0;
    let match;
    while ((match = attributePattern.exec(attributeText))) {
      if (attributeText.slice(cursor, match.index).trim()) {
        annotationProjectionError(surface, owner, language, `${path}.safeMarkup`);
      }
      cursor = attributePattern.lastIndex;
      const name = match[1];
      const normalizedName = name.toLowerCase();
      if (names.has(normalizedName)) {
        annotationProjectionError(surface, owner, language, `${path}.safeMarkup`);
      }
      names.add(normalizedName);
      attributes.push({
        name,
        normalizedName,
        value: repeatedlyDecodeSvgText(match[2] ?? match[3] ?? match[4] ?? ''),
      });
    }
    if (attributeText.slice(cursor).trim()) {
      annotationProjectionError(surface, owner, language, `${path}.safeMarkup`);
    }
    return { closing, selfClosing, tagName, attributes };
  }

  function annotationMarkupModel(value, surface, owner, language, path) {
    const markup = String(value || '');
    const tags = [];
    const textSlots = [];
    const outsideText = [];
    const stack = [];
    const tokenPattern = /<!--[\s\S]*?-->|<\s*(\/?)\s*([A-Za-z][\w:.-]*)\b[^>]*>/g;
    let cursor = 0;
    let match;

    const recordText = (start, end) => {
      const raw = markup.slice(start, end);
      const decoded = repeatedlyDecodeSvgText(raw);
      const parent = stack[stack.length - 1]?.tagName || '';
      if (parent === 'text' || parent === 'tspan') {
        textSlots.push({
          start,
          end,
          text: decoded.trim(),
          location: `${tags.length}:${stack.map((entry) => entry.tagName).join('/')}`,
        });
      } else if (clean(decoded)) {
        outsideText.push(`${tags.length}:${clean(decoded)}`);
      }
    };

    while ((match = tokenPattern.exec(markup))) {
      recordText(cursor, match.index);
      cursor = tokenPattern.lastIndex;
      if (match[0].startsWith('<!--')) continue;
      const parsed = parseAnnotationTag(
        match[0],
        surface,
        owner,
        language,
        path
      );
      const tag = {
        ...parsed,
        start: match.index,
        end: tokenPattern.lastIndex,
        raw: match[0],
        ancestorTagIndexes: stack.map((entry) => entry.tagIndex),
        structure: `${parsed.closing ? '/' : '<'}${parsed.tagName}` +
          `${parsed.selfClosing ? '/' : ''}`,
      };
      tags.push(tag);
      if (parsed.closing) {
        if (stack.pop()?.tagName !== parsed.tagName) {
          annotationProjectionError(surface, owner, language, `${path}.safeMarkup`);
        }
      } else if (!parsed.selfClosing) {
        stack.push({ tagName: parsed.tagName, tagIndex: tags.length - 1 });
      }
    }
    recordText(cursor, markup.length);
    if (stack.length) {
      annotationProjectionError(surface, owner, language, `${path}.safeMarkup`);
    }
    return { markup, tags, textSlots, outsideText };
  }

  function annotationAttributeMap(tag) {
    return new Map(tag.attributes.map((attribute) => [attribute.normalizedName, attribute]));
  }

  function assertMatchingAttributeMaps(
    sourceTag,
    localizedTag,
    surface,
    owner,
    language,
    path,
    ignored = new Set()
  ) {
    const sourceAttributes = annotationAttributeMap(sourceTag);
    const localizedAttributes = annotationAttributeMap(localizedTag);
    const names = new Set([...sourceAttributes.keys(), ...localizedAttributes.keys()]);
    names.forEach((name) => {
      if (ignored.has(name)) return;
      if (sourceAttributes.get(name)?.value !== localizedAttributes.get(name)?.value) {
        annotationProjectionError(surface, owner, language, `${path}.structure`);
      }
    });
  }

  function annotationCanvasBounds(options) {
    const width = Number(options?.width);
    const height = Number(options?.height);
    return {
      width: Number.isFinite(width) && width > 0 ? width : 4096,
      height: Number.isFinite(height) && height > 0 ? height : 4096,
    };
  }

  function datasetCanvasBounds(dataset) {
    const canvasSize = global.SankeyEngine?.helpers?.canvasSize;
    if (typeof canvasSize !== 'function') {
      throw new Error(
        'SANKEY_I18N dataset localization requires SankeyEngine.helpers.canvasSize'
      );
    }
    const canvas = canvasSize(dataset);
    const width = Number(canvas?.width);
    const height = Number(canvas?.height);
    if (
      !Number.isFinite(width)
      || width <= 0
      || !Number.isFinite(height)
      || height <= 0
    ) {
      throw new Error(`Invalid effective dataset canvas: ${String(width)}x${String(height)}`);
    }
    return { width, height };
  }

  // A coordinate and text-anchor are one spatial capability: validating
  // either independently still permits a locale to move the anchor origin to
  // an edge and make the complete text run land outside the canvas.
  function isVisibleTextOrigin(x, anchor, fontSize, width) {
    const coordinate = Number(x);
    const size = Number(fontSize);
    if (
      !Number.isFinite(coordinate)
      || !Number.isFinite(size)
      || size <= 0
      || !Number.isFinite(width)
      || width <= 0
    ) {
      return false;
    }
    const gutter = Math.max(1, size * 0.5);
    if (anchor === 'start') {
      return coordinate > -gutter && coordinate < width - gutter;
    }
    if (anchor === 'end') {
      return coordinate > gutter && coordinate < width + gutter;
    }
    return coordinate > gutter / 2 && coordinate < width - gutter / 2;
  }

  function isVisibleTextBaseline(y, fontSize, height) {
    const baseline = Number(y);
    const size = Number(fontSize);
    return (
      Number.isFinite(baseline)
      && Number.isFinite(size)
      && size > 0
      && Number.isFinite(height)
      && height > 0
      && baseline >= size * 0.5
      && baseline <= height
    );
  }

  const IDENTITY_2D = Object.freeze([1, 0, 0, 1, 0, 0]);

  function multiplyAffine2d(left, right) {
    const [a1, b1, c1, d1, e1, f1] = left;
    const [a2, b2, c2, d2, e2, f2] = right;
    return [
      a1 * a2 + c1 * b2,
      b1 * a2 + d1 * b2,
      a1 * c2 + c1 * d2,
      b1 * c2 + d1 * d2,
      a1 * e2 + c1 * f2 + e1,
      b1 * e2 + d1 * f2 + f1,
    ];
  }

  function annotationTransformMatrix(value) {
    if (!value) return [...IDENTITY_2D];
    let matrix = [...IDENTITY_2D];
    const pattern = /([A-Za-z]+)\s*\(([^)]*)\)/g;
    let cursor = 0;
    let match;
    while ((match = pattern.exec(String(value)))) {
      if (String(value).slice(cursor, match.index).trim()) return null;
      cursor = pattern.lastIndex;
      const numbers = match[2].trim()
        ? match[2].trim().split(/[\s,]+/).map(Number)
        : [];
      if (numbers.some((number) => !Number.isFinite(number))) return null;
      const name = match[1].toLowerCase();
      let next;
      if (name === 'matrix' && numbers.length === 6) {
        next = numbers;
      } else if (name === 'translate' && [1, 2].includes(numbers.length)) {
        next = [1, 0, 0, 1, numbers[0], numbers[1] || 0];
      } else if (name === 'scale' && [1, 2].includes(numbers.length)) {
        next = [numbers[0], 0, 0, numbers[1] ?? numbers[0], 0, 0];
      } else if (name === 'rotate' && [1, 3].includes(numbers.length)) {
        const radians = numbers[0] * Math.PI / 180;
        const rotation = [
          Math.cos(radians),
          Math.sin(radians),
          -Math.sin(radians),
          Math.cos(radians),
          0,
          0,
        ];
        next = numbers.length === 1
          ? rotation
          : multiplyAffine2d(
            multiplyAffine2d(
              [1, 0, 0, 1, numbers[1], numbers[2]],
              rotation
            ),
            [1, 0, 0, 1, -numbers[1], -numbers[2]]
          );
      } else if (name === 'skewx' && numbers.length === 1) {
        next = [1, 0, Math.tan(numbers[0] * Math.PI / 180), 1, 0, 0];
      } else if (name === 'skewy' && numbers.length === 1) {
        next = [1, Math.tan(numbers[0] * Math.PI / 180), 0, 1, 0, 0];
      } else {
        return null;
      }
      matrix = multiplyAffine2d(matrix, next);
    }
    return String(value).slice(cursor).trim() ? null : matrix;
  }

  function transformAnnotationPoint(matrix, x, y) {
    return {
      x: matrix[0] * x + matrix[2] * y + matrix[4],
      y: matrix[1] * x + matrix[3] * y + matrix[5],
    };
  }

  function annotationMatrixScale(matrix) {
    return Math.max(
      Math.hypot(matrix[0], matrix[1]),
      Math.hypot(matrix[2], matrix[3])
    );
  }

  function hasUnsupportedAnnotationCoordinateSpace(tagName, attributes) {
    const style = repeatedlyDecodeSvgText(attributes.get('style')?.value || '');
    const classNames = repeatedlyDecodeSvgText(attributes.get('class')?.value || '')
      .trim()
      .split(/\s+/)
      .filter(Boolean);
    return (
      UNSUPPORTED_ANNOTATION_GEOMETRY_TAGS.has(tagName)
      || [...UNSUPPORTED_ANNOTATION_GEOMETRY_ATTRIBUTES].some(
        (name) => attributes.has(name)
      )
      // CSS is a second, selector-dependent geometry/visibility language.
      // Admit it only after a typed parser exists; an unchanged declaration
      // is not evidence that a localized coordinate override stays visible.
      || Boolean(style.trim())
      || classNames.some(
        (className) => !SAFE_ANNOTATION_GEOMETRY_CLASSES.has(className)
      )
    );
  }

  function annotationInheritedTextState(model, tag) {
    const state = { matrix: [...IDENTITY_2D] };
    (tag.ancestorTagIndexes || []).forEach((tagIndex) => {
      const ancestor = model.tags[tagIndex];
      if (!ancestor || ancestor.closing) return;
      const attributes = annotationAttributeMap(ancestor);
      if (hasUnsupportedAnnotationCoordinateSpace(ancestor.tagName, attributes)) {
        state.matrix = null;
        return;
      }
      const transform = annotationTransformMatrix(attributes.get('transform')?.value);
      if (!transform) {
        state.matrix = null;
        return;
      }
      if (state.matrix) {
        state.matrix = multiplyAffine2d(state.matrix, transform);
      }
      for (const name of ['font-size', 'text-anchor']) {
        if (attributes.has(name)) state[name] = attributes.get(name).value;
      }
      if (ancestor.tagName === 'text') {
        for (const name of ['x', 'y', 'dx']) {
          if (attributes.has(name)) state[`text-${name}`] = attributes.get(name).value;
        }
      }
    });
    return state;
  }

  function isTspanDxContraction(value, sourceValue) {
    const localized = Number(value);
    const source = Number(sourceValue);
    return (
      Number.isFinite(localized)
      && Number.isFinite(source)
      && Math.abs(localized) <= 64
      && Math.abs(localized - source) <= 16
      && (
        source === 0
          ? localized === 0
          : Math.sign(localized) === Math.sign(source)
            && Math.abs(localized) <= Math.abs(source)
      )
    );
  }

  function validateAnnotationTextLayoutAttribute(name, value, sourceValue, options) {
    const { width, height } = annotationCanvasBounds(options);
    const numeric = () => {
      if (!/^[+-]?(?:\d+(?:\.\d+)?|\.\d+)$/.test(value)) return NaN;
      return Number(value);
    };
    const sourceNumber = Number(sourceValue);
    let number;
    if (name === 'x') {
      number = numeric();
      return (
        Number.isFinite(number)
        && Number.isFinite(sourceNumber)
        // Text coordinates may be local to a source-owned translated group.
        // Keep a narrow negative gutter for legitimate optical alignment
        // while the source-relative delta still prevents off-canvas hiding.
        && number >= -32
        && number <= width
        && Math.abs(number - sourceNumber) <= 180
      );
    }
    if (name === 'y') {
      number = numeric();
      return (
        Number.isFinite(number)
        && Number.isFinite(sourceNumber)
        && number >= 0
        && number <= height
        && Math.abs(number - sourceNumber) <= 24
      );
    }
    if (name === 'dx') {
      number = numeric();
      return (
        Number.isFinite(number)
        && Number.isFinite(sourceNumber)
        && Math.abs(number) <= 64
        && Math.abs(number - sourceNumber) <= 16
      );
    }
    if (name === 'font-size') {
      number = numeric();
      return (
        Number.isFinite(number)
        && Number.isFinite(sourceNumber)
        && number >= 8
        && number <= 256
        && number / sourceNumber >= 0.6
        && number / sourceNumber <= 1.25
      );
    }
    if (name === 'textlength') {
      number = numeric();
      return (
        Number.isFinite(number)
        && Number.isFinite(sourceNumber)
        && number >= 16
        && number <= width
        && number / sourceNumber >= 0.6
        && number / sourceNumber <= 1.25
      );
    }
    if (name === 'font-family') {
      return (
        value.length > 0
        && value.length <= 200
        && /^[\p{L}\p{N}\s,'"._-]+$/u.test(value)
      );
    }
    if (name === 'font-weight') {
      return /^(?:normal|bold|bolder|lighter|[1-9]00)$/i.test(value);
    }
    if (name === 'lengthadjust') {
      return /^(?:spacing|spacingAndGlyphs)$/.test(value);
    }
    if (name === 'text-anchor') {
      return /^(?:start|middle|end)$/.test(value);
    }
    return false;
  }

  function encodeSvgAttribute(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function projectAnnotationTextTag(
    sourceTag,
    localizedTag,
    localizedModel,
    options,
    surface,
    owner,
    language,
    path
  ) {
    const sourceAttributes = annotationAttributeMap(sourceTag);
    const localizedAttributes = annotationAttributeMap(localizedTag);
    assertMatchingAttributeMaps(
      sourceTag,
      localizedTag,
      surface,
      owner,
      language,
      path,
      ANNOTATION_TEXT_LAYOUT_ATTRIBUTES
    );

    const projected = [];
    sourceTag.attributes.forEach((sourceAttribute) => {
      const name = sourceAttribute.normalizedName;
      if (!ANNOTATION_TEXT_LAYOUT_ATTRIBUTES.has(name)) {
        projected.push(sourceAttribute);
        return;
      }
      const localizedAttribute = localizedAttributes.get(name);
      if (!localizedAttribute) {
        if (!ANNOTATION_TEXT_LAYOUT_REMOVALS.has(name)) {
          annotationProjectionError(surface, owner, language, `${path}.textLayout.${name}`);
        }
        return;
      }
      if (localizedAttribute.value === sourceAttribute.value) {
        projected.push(sourceAttribute);
        return;
      }
      if (
        sourceTag.tagName === 'tspan'
        && name === 'dx'
        && isTspanDxContraction(localizedAttribute.value, sourceAttribute.value)
      ) {
        projected.push({ ...sourceAttribute, value: localizedAttribute.value });
        return;
      }
      if (
        !ANNOTATION_TEXT_LAYOUT_CHANGES.has(name)
        || (
          sourceTag.tagName === 'tspan'
          && ['x', 'y', 'font-size'].includes(name)
        )
        || !validateAnnotationTextLayoutAttribute(
          name,
          localizedAttribute.value,
          sourceAttribute.value,
          options
        )
      ) {
        annotationProjectionError(surface, owner, language, `${path}.textLayout.${name}`);
      }
      projected.push({ ...sourceAttribute, value: localizedAttribute.value });
    });

    localizedTag.attributes.forEach((localizedAttribute) => {
      const name = localizedAttribute.normalizedName;
      if (sourceAttributes.has(name)) return;
      if (
        !ANNOTATION_TEXT_LAYOUT_ADDITIONS.has(name)
        || (sourceTag.tagName === 'tspan' && name === 'text-anchor')
        || !validateAnnotationTextLayoutAttribute(
          name,
          localizedAttribute.value,
          undefined,
          options
        )
      ) {
        annotationProjectionError(surface, owner, language, `${path}.textLayout.${name}`);
      }
      projected.push(localizedAttribute);
    });

    const projectedAttributes = new Map(
      projected.map((attribute) => [attribute.normalizedName, attribute.value])
    );
    const sourceX = sourceAttributes.get('x')?.value;
    const localizedX = localizedAttributes.get('x')?.value;
    const sourceY = sourceAttributes.get('y')?.value;
    const localizedY = localizedAttributes.get('y')?.value;
    const sourceDx = sourceAttributes.get('dx')?.value;
    const localizedDx = localizedAttributes.get('dx')?.value;
    const sourceSize = sourceAttributes.get('font-size')?.value;
    const localizedSize = localizedAttributes.get('font-size')?.value;
    const sourceAnchor = sourceAttributes.get('text-anchor')?.value;
    const localizedAnchor = localizedAttributes.get('text-anchor')?.value;
    if (
      sourceTag.tagName === 'text'
      && (
        localizedX !== sourceX
        || localizedY !== sourceY
        || localizedSize !== sourceSize
        || localizedAnchor !== sourceAnchor
      )
    ) {
      const inherited = annotationInheritedTextState(localizedModel, localizedTag);
      const { width, height } = annotationCanvasBounds(options);
      const x = Number(projectedAttributes.get('x'));
      const dx = Number(projectedAttributes.get('dx') || 0);
      const y = Number(projectedAttributes.get('y'));
      const anchor = projectedAttributes.get('text-anchor')
        || inherited['text-anchor']
        || 'start';
      const fontSize = Number(
        projectedAttributes.get('font-size') || inherited['font-size'] || 16
      );
      const ownTransform = annotationTransformMatrix(
        projectedAttributes.get('transform')
      );
      const ownCoordinateSpaceSupported = !hasUnsupportedAnnotationCoordinateSpace(
        sourceTag.tagName,
        new Map(
          [...projectedAttributes].map(([name, value]) => [name, { value }])
        )
      );
      const matrix = inherited.matrix && ownTransform && ownCoordinateSpaceSupported
        ? multiplyAffine2d(inherited.matrix, ownTransform)
        : null;
      const point = matrix
        ? transformAnnotationPoint(matrix, x + dx, y)
        : { x: NaN, y: NaN };
      const effectiveFontSize = matrix
        ? fontSize * annotationMatrixScale(matrix)
        : NaN;
      if (
        !isVisibleTextOrigin(point.x, anchor, effectiveFontSize, width)
        || !isVisibleTextBaseline(point.y, effectiveFontSize, height)
      ) {
        annotationProjectionError(
          surface,
          owner,
          language,
          `${path}.textLayout.visibleBounds`
        );
      }
    }
    if (sourceTag.tagName === 'tspan' && localizedDx !== sourceDx) {
      const inherited = annotationInheritedTextState(localizedModel, localizedTag);
      const { width, height } = annotationCanvasBounds(options);
      const x = Number(
        projectedAttributes.get('x') ?? inherited['text-x']
      );
      const parentDx = Number(inherited['text-dx'] || 0);
      const dx = Number(projectedAttributes.get('dx') || 0);
      const y = Number(
        projectedAttributes.get('y') ?? inherited['text-y']
      );
      const anchor = projectedAttributes.get('text-anchor')
        || inherited['text-anchor']
        || 'start';
      const fontSize = Number(
        projectedAttributes.get('font-size') || inherited['font-size'] || 16
      );
      const ownTransform = annotationTransformMatrix(
        projectedAttributes.get('transform')
      );
      const ownCoordinateSpaceSupported = !hasUnsupportedAnnotationCoordinateSpace(
        sourceTag.tagName,
        new Map(
          [...projectedAttributes].map(([name, value]) => [name, { value }])
        )
      );
      const matrix = inherited.matrix && ownTransform && ownCoordinateSpaceSupported
        ? multiplyAffine2d(inherited.matrix, ownTransform)
        : null;
      const point = matrix
        ? transformAnnotationPoint(matrix, x + parentDx + dx, y)
        : { x: NaN, y: NaN };
      const effectiveFontSize = matrix
        ? fontSize * annotationMatrixScale(matrix)
        : NaN;
      if (
        !isVisibleTextOrigin(point.x, anchor, effectiveFontSize, width)
        || !isVisibleTextBaseline(point.y, effectiveFontSize, height)
      ) {
        annotationProjectionError(
          surface,
          owner,
          language,
          `${path}.textLayout.visibleBounds`
        );
      }
    }

    const serializedAttributes = projected
      .map((attribute) => ` ${attribute.name}="${encodeSvgAttribute(attribute.value)}"`)
      .join('');
    return `<${sourceTag.tagName}${serializedAttributes}${sourceTag.selfClosing ? '/' : ''}>`;
  }

  function canonicalizeAnnotationText(sourceSvg, localizedSvg, options = {}) {
    const surface = options.surface || 'Dataset annotation';
    const owner = options.owner || '<authoring>';
    const language = options.language || 'localized';
    const path = options.path || 'annotationsSvg';
    assertSafeAnnotationSvg(sourceSvg, surface, owner, language, path);
    assertSafeAnnotationSvg(localizedSvg, surface, owner, language, path);
    // The structure parser is deliberately independent from the projection
    // parser and catches malformed attributes, duplicate names, and stacks.
    annotationSvgStructureSignature(sourceSvg, surface, owner, language, path);
    annotationSvgStructureSignature(localizedSvg, surface, owner, language, path);

    const source = annotationMarkupModel(sourceSvg, surface, owner, language, path);
    const localized = annotationMarkupModel(localizedSvg, surface, owner, language, path);
    const sourceStructure = source.tags.map((tag) => tag.structure);
    const localizedStructure = localized.tags.map((tag) => tag.structure);
    if (
      JSON.stringify(sourceStructure) !== JSON.stringify(localizedStructure)
      || JSON.stringify(source.outsideText) !== JSON.stringify(localized.outsideText)
      || JSON.stringify(source.textSlots.map((slot) => slot.location))
        !== JSON.stringify(localized.textSlots.map((slot) => slot.location))
    ) {
      annotationProjectionError(surface, owner, language, `${path}.structure`);
    }

    const replacements = source.textSlots.map((sourceSlot, index) => {
      const raw = source.markup.slice(sourceSlot.start, sourceSlot.end);
      const leading = raw.match(/^\s*/)?.[0] || '';
      const trailing = raw.match(/\s*$/)?.[0] || '';
      return {
        start: sourceSlot.start,
        end: sourceSlot.end,
        value: `${leading}${encodeSvgText(localized.textSlots[index].text)}${trailing}`,
      };
    });

    source.tags.forEach((sourceTag, index) => {
      if (sourceTag.closing) return;
      const localizedTag = localized.tags[index];
      if (sourceTag.tagName === 'text' || sourceTag.tagName === 'tspan') {
        replacements.push({
          start: sourceTag.start,
          end: sourceTag.end,
          value: projectAnnotationTextTag(
            sourceTag,
            localizedTag,
            localized,
            options,
            surface,
            owner,
            language,
            path
          ),
        });
      } else {
        assertMatchingAttributeMaps(
          sourceTag,
          localizedTag,
          surface,
          owner,
          language,
          path
        );
      }
    });

    let canonical = source.markup;
    replacements.sort(
      (a, b) => b.start - a.start || (b.end - b.start) - (a.end - a.start)
    ).forEach((replacement) => {
      canonical = canonical.slice(0, replacement.start) +
        replacement.value +
        canonical.slice(replacement.end);
    });
    return canonical;
  }

  // Amounts embedded in custom label/annotation copy are financially
  // authoritative output too. Keep their number, sign, currency and unit
  // tokens stable across locales; only surrounding prose may be translated.
  // `$value` is the renderer's structured node-value binding and is counted
  // separately, so replacing it with a plausible-looking literal also fails.
  const WORD_SCALE_SUFFIX = Object.freeze({
    thousand: 'K',
    million: 'M',
    billion: 'B',
    trillion: 'T',
  });
  const WORD_CURRENCY_PREFIX = Object.freeze({
    'hong kong dollars': 'HKD',
    'hong kong dollar': 'HKD',
    hkd: 'HKD',
    'brazilian reals': 'BRL',
    'brazilian real': 'BRL',
    brl: 'BRL',
    'us dollars': 'USD',
    'us dollar': 'USD',
    dollars: 'USD',
    dollar: 'USD',
    usd: 'USD',
    euros: 'EUR',
    euro: 'EUR',
    eur: 'EUR',
    'pounds sterling': 'GBP',
    pounds: 'GBP',
    pound: 'GBP',
    gbp: 'GBP',
    yen: 'JPY',
    jpy: 'JPY',
    yuan: 'CNY',
    renminbi: 'CNY',
    cny: 'CNY',
    rmb: 'CNY',
    won: 'KRW',
    krw: 'KRW',
    'swiss francs': 'CHF',
    'swiss franc': 'CHF',
    chf: 'CHF',
    'saudi riyals': 'SAR',
    'saudi riyal': 'SAR',
    sar: 'SAR',
    'danish kroner': 'DKK',
    'danish krone': 'DKK',
    dkk: 'DKK',
  });

  function normalizeWordMoneyPhrases(text) {
    const scaleWords = Object.keys(WORD_SCALE_SUFFIX).join('|');
    const currencyWords = Object.keys(WORD_CURRENCY_PREFIX)
      .sort((a, b) => b.length - a.length)
      .map((word) => word.replace(/\s+/g, '\\s+'))
      .join('|');
    const suffixPattern = new RegExp(
      `([+-]?(?:\\d{1,3}(?:,\\d{3})+|\\d+)(?:\\.\\d+)?)\\s+` +
        `(${scaleWords})\\s+(${currencyWords})\\b`,
      'gi'
    );
    const suffixNormalized = String(text || '').replace(
      suffixPattern,
      (_match, number, scale, currency) => (
      `${WORD_CURRENCY_PREFIX[currency.toLowerCase().replace(/\s+/g, ' ')]} ` +
      `${number}${WORD_SCALE_SUFFIX[scale.toLowerCase()]}`
      )
    );
    const prefixPattern = new RegExp(
      `\\b(${currencyWords})\\s+` +
        `([+-]?(?:\\d{1,3}(?:,\\d{3})+|\\d+)(?:\\.\\d+)?)\\s+(${scaleWords})\\b`,
      'gi'
    );
    return suffixNormalized.replace(prefixPattern, (_match, currency, number, scale) => (
      `${WORD_CURRENCY_PREFIX[currency.toLowerCase().replace(/\s+/g, ' ')]} ` +
      `${number}${WORD_SCALE_SUFFIX[scale.toLowerCase()]}`
    ));
  }

  const CHINESE_DIGITS = Object.freeze({
    零: 0, 〇: 0, 一: 1, 二: 2, 两: 2, 三: 3, 四: 4,
    五: 5, 六: 6, 七: 7, 八: 8, 九: 9,
  });

  function parseChineseInteger(value) {
    if (!value) return 0;
    if (!/[十百千万亿兆]/.test(value)) {
      const digits = [...value].map((character) => CHINESE_DIGITS[character]);
      return digits.every((digit) => digit != null)
        ? Number(digits.join(''))
        : NaN;
    }
    for (const [unit, multiplier] of [['兆', 1e12], ['亿', 1e8], ['万', 1e4]]) {
      const index = value.indexOf(unit);
      if (index >= 0) {
        const left = value.slice(0, index);
        const right = value.slice(index + 1);
        const leftValue = left ? parseChineseInteger(left) : 1;
        const rightValue = right ? parseChineseInteger(right) : 0;
        return leftValue * multiplier + rightValue;
      }
    }
    let total = 0;
    let digit = null;
    for (const character of value) {
      if (CHINESE_DIGITS[character] != null) {
        digit = CHINESE_DIGITS[character];
        continue;
      }
      const multiplier = { 十: 10, 百: 100, 千: 1000 }[character];
      if (!multiplier) return NaN;
      total += (digit == null ? 1 : digit) * multiplier;
      digit = null;
    }
    return total + (digit ?? 0);
  }

  function parseChineseNumeral(value) {
    const [integer, decimal] = value.split('点');
    const integerValue = parseChineseInteger(integer);
    if (!Number.isFinite(integerValue)) return NaN;
    if (decimal == null) return integerValue;
    const decimalDigits = [...decimal].map((character) => CHINESE_DIGITS[character]);
    if (!decimalDigits.length || decimalDigits.some((digit) => digit == null)) return NaN;
    return Number(`${integerValue}.${decimalDigits.join('')}`);
  }

  function normalizeChineseNumeralPhrases(text) {
    const value = String(text || '');
    return value.replace(
      /[零〇一二两三四五六七八九十百千万亿兆]+(?:点[零〇一二两三四五六七八九]+)?/g,
      (literal, offset) => {
        const before = value.slice(0, offset);
        const after = value.slice(offset + literal.length);
        const hasDigit = /[零〇一二两三四五六七八九]/.test(literal);
        const hasExplicitNumber = hasDigit || /[十百千]/.test(literal);
        const numericUnitAfter = /^\s*(?:%|个百分点|百分点|个?基点|点|倍|[xX]\b|年|月|日|季度|财年|个月|(?:万亿|十亿|百万|亿|万|千)?\s*(?:港元|雷亚尔|美元|欧元|英镑|日元|人民币|韩元|瑞郎|里亚尔|丹麦克朗))/i.test(after);
        const numericContextBefore = /(?:同比|环比|上升|增长|增加|下降|减少|下滑|降低|正|负)\s*[:：]?\s*$/i.test(before);
        const standaloneNumeric = (
          hasDigit
          && literal.replace('点', '').length >= 2
          && !/^[\u3400-\u9fff]/.test(after)
        );
        if (
          !hasExplicitNumber
          || (!numericUnitAfter && !numericContextBefore && !standaloneNumeric)
        ) {
          return literal;
        }
        const parsed = parseChineseNumeral(literal);
        return Number.isFinite(parsed) ? String(parsed) : literal;
      }
    );
  }

  function numericPolarity(raw, contextBefore, semanticAfter, parenthesized, currencySign) {
    const positive = [];
    const negative = [];
    const before = contextBefore.slice(-64);
    const after = semanticAfter.slice(0, 64).replace(
      /^\s*(?:%|pp?\b|bps?\b|percentage\s+points?\b|basis\s+points?\b|个?百分点|个?基点|点)?\s*\)?\s*/i,
      ''
    );
    if (raw.startsWith('+')) positive.push('explicit');
    if (raw.startsWith('-')) negative.push('explicit');
    if (currencySign === '+') positive.push('currency');
    if (currencySign === '-') negative.push('currency');
    const spacedSign = before.match(/([+-])\s*$/)?.[1];
    if (spacedSign === '+') positive.push('spaced');
    if (spacedSign === '-') negative.push('spaced');
    if (/[↑▲↗]\s*$/.test(before) || /^\s*[↑▲↗]/.test(after)) positive.push('arrow');
    if (/[↓▼↘]\s*$/.test(before) || /^\s*[↓▼↘]/.test(after)) negative.push('arrow');
    if (
      /\b(?:up|increase(?:d)?|rise|rose|gain(?:ed)?|positive)\s*(?:by\s*)?$/i.test(before)
      || /^\s*(?:up|increase(?:d)?|rise|rose|gain(?:ed)?|positive)\b/i.test(after)
      || /(?:上升|增长|增加|上涨|提高|正)\s*$/.test(before)
      || /^\s*(?:上升|增长|增加|上涨|提高|为正)/.test(after)
    ) positive.push('word');
    if (
      /\b(?:down|decrease(?:d)?|decline(?:d)?|fell|drop(?:ped)?|negative)\s*(?:by\s*)?$/i.test(before)
      || /^\s*(?:down|decrease(?:d)?|decline(?:d)?|fell|drop(?:ped)?|negative)\b/i.test(after)
      || /(?:下降|减少|下滑|降低|下跌|为负|负)\s*$/.test(before)
      || /^\s*(?:下降|减少|下滑|降低|下跌|为负)/.test(after)
    ) negative.push('word');
    // Parentheses are accounting-negative only when the value carries no
    // explicit polarity marker. A common disclosure form such as
    // "(+18% Y/Y)" uses parentheses for grouping, not negation.
    if (parenthesized && !positive.length && !negative.length) {
      negative.push('parentheses');
    }
    if (positive.length && negative.length) return '!';
    if (negative.length) return '-';
    return '+';
  }

  const UNSPECIFIED_RATE_BASIS_SENTINEL = '__RB__';

  function rateBasis(contextBefore, semanticAfter) {
    const before = contextBefore.slice(-32);
    const after = semanticAfter;
    const afterUnit = after.replace(
      /^\s*(?:%|pp?\b|bps?\b|percentage\s+points?\b|basis\s+points?\b|个?百分点|个?基点|点)\s*\)?\s*/i,
      ''
    );
    const safePrefixBasis = (pattern) => {
      const match = before.match(pattern);
      if (!match) return false;
      const prefix = before.slice(0, match.index);
      return !/[+-]?\d+(?:\.\d+)?\s*(?:%|pp?|bps?|个百分点|个?基点)\s*\)?\s*$/i.test(prefix);
    };
    // These Chinese forms are explicit prefixes immediately attached to the
    // current value, so they outrank a later suffix that may introduce the
    // next value on the same visual line.
    if (/(?:利润率|毛利率|净利率)\s*[:：]?\s*\(?\s*$/i.test(before)) return 'margin';
    if (/(?:占(?:总)?收入|收入占比)\s*[:：]?\s*\(?\s*$/i.test(before)) return 'of-revenue';
    if (/(?:同比(?:上升|增长|增加|下降|减少|下滑|降低)?)\s*[:：]?\s*\(?\s*$/i.test(before)) {
      return 'yoy';
    }
    if (/(?:环比(?:上升|增长|增加|下降|减少|下滑|降低)?)\s*[:：]?\s*\(?\s*$/i.test(before)) {
      return 'qoq';
    }
    // Prefer an explicit suffix attached to the current number. This avoids
    // leaking the preceding number's trailing "Y/Y" into a following margin
    // or mix percentage on the same wrapped label.
    const unspecifiedMarker = afterUnit.match(
      new RegExp(`^\\s*${UNSPECIFIED_RATE_BASIS_SENTINEL}\\b`, 'i')
    );
    if (unspecifiedMarker) {
      const qualifier = afterUnit
        .slice(unspecifiedMarker[0].length)
        .trim()
        .replace(/^[,;:()[\]{}\-–—]+\s*/, '')
        .replace(/\s*[,;:()[\]{}.!?\-–—]+$/, '')
        .trim();
      if (/^(?:Y\s*\/\s*Y|YoY|year[\s-]*over[\s-]*year)$/i.test(qualifier)) {
        return 'yoy';
      }
      if (/^(?:Q\s*\/\s*Q|QoQ|quarter[\s-]*over[\s-]*quarter)$/i.test(qualifier)) {
        return 'qoq';
      }
      // Only a genuinely empty qualifier is underspecified. Unknown text
      // after the sentinel is fail-closed so a newly coined basis cannot
      // silently inherit wildcard authority.
      return qualifier ? '!' : '*';
    }
    if (
      /^\s*(?:[A-Za-z][A-Za-z&/.-]*\s+){0,3}margin\b/i.test(afterUnit)
      || /^\s*(?:[A-Za-z][A-Za-z&/.-]*\s+){0,3}(?:利润率|毛利率|净利率)(?:\s|$)/i.test(afterUnit)
    ) return 'margin';
    if (
      /^\s*(?:of|as\s+(?:a\s+)?(?:share|percentage)\s+of)\s+(?:total\s+)?(?:revenue\b|收入)/i.test(afterUnit)
    ) return 'of-revenue';
    if (/^\s*(?:Y\s*\/\s*Y|YoY|year[\s-]*over[\s-]*year)\b/i.test(afterUnit)) {
      return 'yoy';
    }
    if (/^\s*(?:Q\s*\/\s*Q|QoQ|quarter[\s-]*over[\s-]*quarter)\b/i.test(afterUnit)) {
      return 'qoq';
    }
    // Chinese basis words are true prefixes and unambiguously belong to the
    // following number. English "margin", "Y/Y", and "Q/Q" are commonly
    // suffixes of a preceding number, so only treat them as prefixes when no
    // prior rate ends immediately before the marker.
    if (safePrefixBasis(
      /(?:margin|after\s+losses)\s*[:：]?\s*\(?\s*$/i
    )) return 'margin';
    if (safePrefixBasis(
      /(?:Y\s*\/\s*Y|YoY|year[\s-]*over[\s-]*year)\s*[:：]?\s*\(?\s*$/i
    )) return 'yoy';
    if (safePrefixBasis(
      /(?:Q\s*\/\s*Q|QoQ|quarter[\s-]*over[\s-]*quarter)\s*[:：]?\s*\(?\s*$/i
    )) return 'qoq';
    return '';
  }

  function visibleNumericTokens(text) {
    const normalizedText = decodeSvgText(String(text || '')).normalize('NFKC')
      .replace(/[（]/g, '(')
      .replace(/[）]/g, ')')
      .replace(/[−–—﹣－]/g, '-')
      .replace(/[＋]/g, '+')
      .replace(/第一季度/g, 'Q1')
      .replace(/第二季度/g, 'Q2')
      .replace(/第三季度/g, 'Q3')
      .replace(/第四季度/g, 'Q4')
      .replace(
        /\b(first|second|third|fourth)[\s-]+quarter\b/gi,
        (_match, ordinal) => `Q${{
          first: 1, second: 2, third: 3, fourth: 4,
        }[ordinal.toLowerCase()]}`
      )
      .replace(/上半年/g, 'H1')
      .replace(/下半年/g, 'H2')
      // Regulatory "Tier 1 capital" is conventionally rendered as
      // "一级资本"; retain the tier number in the visible-value signature.
      .replace(/一级资本/g, 'Tier 1 capital')
      .replace(
        /第(十|九|八|七|六|五|四|三|二|一)(?=(?:名|位|项|天|日|周|月|年|季度|财年|[\s,，。.)）]|$))/g,
        (_match, ordinal) => ({
          十: '10th', 九: '9th', 八: '8th', 七: '7th', 六: '6th',
          五: '5th', 四: '4th', 三: '3rd', 二: '2nd', 一: '1st',
        }[ordinal])
      )
      .replace(/\bFlat\s+Y\/Y\b/gi, '0% Y/Y')
      .replace(/\bFlat\s+Q\/Q\b/gi, '0% Q/Q')
      // "Unchanged" alone states a zero rate but does not name whether its
      // comparison is Y/Y or Q/Q. Preserve that source underspecification as
      // a typed wildcard instead of forcing translations to erase a
      // legitimately explicit basis.
      .replace(
        /\b(?:Unchanged|No\s+change)\b/gi,
        `0% ${UNSPECIFIED_RATE_BASIS_SENTINEL}`
      )
      .replace(/\bTTM\b/gi, '12 months')
      .replace(/\b\d+(?:st|nd|rd|th)\s+part(?:y|ies)\b/gi, 'party')
      .replace(/同比持平/g, '同比 0%')
      .replace(/环比持平/g, '环比 0%')
      .replace(/同比不变/g, '同比 0%')
      .replace(/环比不变/g, '环比 0%')
      .replace(/(?:保持不变|没有变化|未变)/g, '0%')
      .replace(
        /\b(one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)\s+(months?)\b/gi,
        (_match, count, unit) => (
          `${{
            one: 1, two: 2, three: 3, four: 4, five: 5, six: 6,
            seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12,
          }[count.toLowerCase()]} ${unit}`
        )
      );
    const value = normalizeWordMoneyPhrases(
      normalizeChineseNumeralPhrases(normalizedText)
    );
    const tokens = [];
    const monthNumbers = Object.freeze({
      jan: 1, january: 1, feb: 2, february: 2, mar: 3, march: 3,
      apr: 4, april: 4, may: 5, jun: 6, june: 6, jul: 7, july: 7,
      aug: 8, august: 8, sep: 9, sept: 9, september: 9, oct: 10,
      october: 10, nov: 11, november: 11, dec: 12, december: 12,
    });
    for (const monthMatch of value.matchAll(
      /\b(Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:t(?:ember)?|tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\.?\b/gi
    )) {
      const month = monthNumbers[monthMatch[1].toLowerCase()];
      if (month) tokens.push(`+:${month}:month::`);
    }
    const pattern = /[+-]?(?:\d{1,3}(?:,\d{3})+|\d+)(?:\.\d+)?/g;
    let match;
    while ((match = pattern.exec(value))) {
      const raw = match[0];
      const before = value.slice(0, match.index);
      const after = value.slice(match.index + raw.length);
      const parenthesized = /\([^()]*$/.test(before) && /^[^()]*\)/.test(after);
      const number = Number(raw.replace(/[,+-]/g, ''));
      const contextBefore = before.slice(-48);
      const contextAfter = after;
      const semanticAfter = contextAfter.replace(/^\s*\)\s*/, '');
      const currencyPrefix = contextBefore.match(
        /(?:HK\$|HKD|港元|R\$|BRL|雷亚尔|US\$|USD|美元|\$|EUR|欧元|€|GBP|英镑|£|JPY|日元|CNY|CNH|RMB|人民币|KRW|韩元|₩|CHF|瑞郎|SAR|里亚尔|DKK|丹麦克朗|¥|￥)\s*$/i
      )?.[0] || '';
      const currencySuffix = semanticAfter.match(
        /^\s*(?:(?:K|M|B|T)\b|万亿|十亿|百万|亿|万|千)?\s*(?:HK\$|HKD|港元|R\$|BRL|雷亚尔|US\$|USD|美元|\$|EUR|欧元|€|GBP|英镑|£|JPY|日元|CNY|CNH|RMB|人民币|KRW|韩元|₩|CHF|瑞郎|SAR|里亚尔|DKK|丹麦克朗|¥|￥)/i
      )?.[0] || '';
      const currencyContext = `${currencyPrefix}#${currencySuffix}`;
      const currencySign = contextBefore.match(
        /([+-])\s*(?:HK\$|HKD|港元|R\$|BRL|雷亚尔|US\$|USD|美元|\$|EUR|欧元|€|GBP|英镑|£|JPY|日元|CNY|CNH|RMB|人民币|KRW|韩元|₩|CHF|瑞郎|SAR|里亚尔|DKK|丹麦克朗|¥|￥)\s*$/i
      )?.[1] || '';
      let currency = '';
      if (/(?:HK\$|HKD|港元)/i.test(currencyContext)) currency = 'HKD';
      else if (/(?:R\$|BRL|雷亚尔)/i.test(currencyContext)) currency = 'BRL';
      else if (/(?:US\$|USD|美元|\$)/i.test(currencyContext)) currency = 'USD';
      else if (/(?:EUR|欧元|€)/i.test(currencyContext)) currency = 'EUR';
      else if (/(?:GBP|英镑|£)/i.test(currencyContext)) currency = 'GBP';
      else if (/(?:JPY|日元)/i.test(currencyContext)) currency = 'JPY';
      else if (/(?:CNY|CNH|RMB|人民币)/i.test(currencyContext)) currency = 'CNY';
      else if (/(?:KRW|韩元|₩)/i.test(currencyContext)) currency = 'KRW';
      else if (/(?:CHF|瑞郎)/i.test(currencyContext)) currency = 'CHF';
      else if (/(?:SAR|里亚尔)/i.test(currencyContext)) currency = 'SAR';
      else if (/(?:DKK|丹麦克朗)/i.test(currencyContext)) currency = 'DKK';
      else if (/[¥￥]/.test(currencyContext)) currency = 'YEN_OR_YUAN';

      const unitLiteral = semanticAfter.match(
        /^\s*((?:K|M|B|T)\b|万亿|十亿|百万|亿|万|千)/
      )?.[1] || '';
      const unitMultiplier = {
        K: 1e3,
        M: 1e6,
        B: 1e9,
        T: 1e12,
        千: 1e3,
        万: 1e4,
        百万: 1e6,
        亿: 1e8,
        十亿: 1e9,
        万亿: 1e12,
      }[unitLiteral] || 1;

      const isoMonth = (
        raw.startsWith('-')
        && number >= 1
        && number <= 12
        && /\b\d{4}\s*$/.test(contextBefore)
        && /^\s*-\s*\d{1,2}\b/.test(semanticAfter)
      );
      const isoDay = (
        raw.startsWith('-')
        && number >= 1
        && number <= 31
        && /\b\d{4}-\d{1,2}\s*$/.test(contextBefore)
      );
      let kind = '';
      if (currency) kind = 'money';
      else if (
        (
          /^M\b\s*FY/i.test(semanticAfter)
          || /^\s*个月/.test(semanticAfter)
          || /^\s*months?\b/i.test(semanticAfter)
        )
        && !currency
      ) kind = 'duration-months';
      else if (unitLiteral) kind = 'quantity';
      else if (
        /^\s*(?:pp?\b|percentage\s+points?\b|个?百分点|点)/i.test(semanticAfter)
      ) kind = 'pp';
      else if (
        /^\s*(?:bps?\b|basis\s+points?\b|个?基点)/i.test(semanticAfter)
      ) kind = 'bps';
      else if (/^\s*%/.test(semanticAfter)) kind = 'percent';
      else if (/(?:^|[^\w])Q\s*$/i.test(contextBefore)) kind = 'quarter';
      else if (/(?:^|[^\w])H\s*$/i.test(contextBefore)) kind = 'half-year';
      else if (
        /FY\s*$/i.test(contextBefore)
        || /fiscal\s+year\s*$/i.test(contextBefore)
        || /^\s*财年/.test(semanticAfter)
      ) kind = 'fiscal-year';
      else if (/^\s*月/.test(semanticAfter)) kind = 'month';
      else if (
        isoMonth
      ) kind = 'month';
      else if (
        /^\s*日/.test(semanticAfter)
        || (
          number >= 1
          && number <= 31
          && /\b(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:t(?:ember)?|tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\.?\s*$/i.test(contextBefore)
          && /^\s*,?\s*\d{4}\b/.test(semanticAfter)
        )
        || isoDay
      ) kind = 'day';
      else if (
        /^\d{4}$/.test(raw.replace(/[,+-]/g, ''))
        && !raw.includes(',')
        && /(?:年|$|[\s,.)])/.test(semanticAfter)
      ) kind = 'year';
      else kind = 'generic-number';
      if (number === 0 && ['percent', 'pp', 'bps'].includes(kind)) kind = 'zero-rate';
      let normalizedNumber = kind === 'money' || kind === 'quantity'
        ? Number((number * unitMultiplier).toPrecision(15))
        : number;
      if (kind === 'fiscal-year' && normalizedNumber < 100) {
        normalizedNumber += 2000;
      }
      const basis = ['percent', 'pp', 'bps', 'zero-rate'].includes(kind)
        ? rateBasis(contextBefore, semanticAfter)
        : '';
      const polarity = number === 0 || isoMonth || isoDay
        ? '+'
        : numericPolarity(raw, contextBefore, semanticAfter, parenthesized, currencySign);
      tokens.push([
        polarity,
        Number.isFinite(normalizedNumber) ? String(normalizedNumber) : raw,
        kind,
        currency,
        basis,
      ].join(':'));
    }
    return tokens;
  }

  function layoutLineTexts(labelSpec) {
    return (labelSpec?.blocks || []).flatMap((block) => (
      (() => {
        const texts = (block?.lines || [])
          .map((line) => lineText(line))
          .filter((text) => text != null);
        const bindings = texts.filter((text) => text === '$value');
        const copy = texts.filter((text) => text !== '$value').join(' ');
        return [...bindings, ...(copy ? [copy] : [])];
      })()
    ));
  }

  function visibleItemTexts(item) {
    const flatten = (value) => (
      Array.isArray(value) ? value.flatMap(flatten) : (value == null ? [] : [String(value)])
    );
    return [...flatten(item?.label), ...flatten(item?.notes)];
  }

  function annotationTextRuns(svgText) {
    const runs = [];
    if (typeof svgText !== 'string') return runs;
    svgText.replace(/<text\b[^>]*>([\s\S]*?)<\/text>/gi, (_match, body) => {
      const text = body.split(/<[^>]+>/g)
        .map((part) => clean(decodeSvgText(part)))
        .filter(Boolean)
        .join(' ');
      if (text) runs.push(text);
      return _match;
    });
    return runs;
  }

  function visibleAmountSignatureFromTexts(texts) {
    return {
      valueBindings: texts.filter((text) => text === '$value').length,
      valueTokens: texts.flatMap((text) => (
        text === '$value' ? [] : visibleNumericTokens(text)
      )).filter((token) => token.split(':')[2]).sort(),
    };
  }

  function visibleValueTokenMatches(sourceToken, localizedToken) {
    if (sourceToken === localizedToken) return true;
    const source = sourceToken.split(':');
    const localized = localizedToken.split(':');
    return (
      source.length === localized.length
      && source[4] === '*'
      && ['', 'yoy', 'qoq'].includes(localized[4])
      && source.slice(0, 4).every((part, index) => part === localized[index])
    );
  }

  function assertVisibleAmountParity(
    sourceTexts,
    localizedTexts,
    surface,
    owner,
    language,
    path,
    allowLiteralToBinding = false
  ) {
    const source = visibleAmountSignatureFromTexts(sourceTexts);
    const localized = visibleAmountSignatureFromTexts(localizedTexts);
    const bindingDelta = localized.valueBindings - source.valueBindings;
    const unmatchedSource = source.valueTokens.slice();
    const introducesValue = localized.valueTokens.some((token) => {
      const index = unmatchedSource.findIndex(
        (sourceToken) => visibleValueTokenMatches(sourceToken, token)
      );
      if (index < 0) return true;
      unmatchedSource.splice(index, 1);
      return false;
    });
    const validBindingReplacement = allowLiteralToBinding
      ? bindingDelta >= 0 && unmatchedSource.length === bindingDelta
      : bindingDelta === 0 && unmatchedSource.length === 0;
    if (introducesValue || !validBindingReplacement) {
      overlayContractError(surface, owner, language, `${path}.visibleAmountBinding`);
    }
  }

  // Dataset node overlays sometimes carry localized fallback notes for a
  // custom layout whose English numeric copy lives in layout.labels. Those
  // notes may omit source tokens, but every token they do show must come from
  // the node's canonical data/layout surfaces; they can never invent one.
  function assertVisibleAmountSubset(sourceTexts, localizedTexts, surface, owner, language, path) {
    const source = visibleAmountSignatureFromTexts(sourceTexts);
    const localized = visibleAmountSignatureFromTexts(localizedTexts);
    const available = source.valueTokens.slice();
    const introducesValue = localized.valueTokens.some((token) => {
      const index = available.findIndex(
        (sourceToken) => visibleValueTokenMatches(sourceToken, token)
      );
      if (index < 0) return true;
      available.splice(index, 1);
      return false;
    });
    if (localized.valueBindings !== 0 || introducesValue) {
      overlayContractError(surface, owner, language, `${path}.visibleAmountBinding`);
    }
  }

  const LAYOUT_LABEL_KEYS = new Set(['blocks', 'icons']);
  const LAYOUT_BLOCK_KEYS = new Set([
    'x', 'top', 'anchor', 'lineGap', 'lines', 'parts',
    'nameSize', 'valueSize', 'noteSize',
    'valueColor', 'noteColor', 'nameWeight', 'nameColor', 'semanticRole',
  ]);
  const LAYOUT_LINE_KEYS = new Set([
    'text', 'size', 'weight', 'color', 'textLength',
  ]);

  function equalJson(left, right) {
    return JSON.stringify(left) === JSON.stringify(right);
  }

  function assertFiniteLayoutNumber(
    value,
    minimum,
    maximum,
    surface,
    owner,
    language,
    path
  ) {
    if (
      typeof value !== 'number'
      || !Number.isFinite(value)
      || value < minimum
      || value > maximum
    ) {
      overlayContractError(surface, owner, language, path);
    }
    return value;
  }

  function layoutLineFinancialSignature(line) {
    const text = lineText(line);
    if (text === '$value') return { binding: true, tokens: [] };
    return {
      binding: false,
      tokens: visibleAmountSignatureFromTexts(text == null ? [] : [String(text)]).valueTokens,
    };
  }

  function mappedSourceLayoutLines(sourceLines, localizedLines, fallbackSourceLines = sourceLines) {
    const sourceEntries = sourceLines.map((line, index) => ({
      line,
      index,
      signature: layoutLineFinancialSignature(line),
    }));
    const fallbackEntries = fallbackSourceLines.map((line, index) => ({
      line,
      index,
      signature: layoutLineFinancialSignature(line),
    }));
    const sourceProse = sourceEntries.filter(
      (entry) => !entry.signature.binding && entry.signature.tokens.length === 0
    );
    const localizedProse = localizedLines.filter((line) => {
      const signature = layoutLineFinancialSignature(line);
      return !signature.binding && signature.tokens.length === 0;
    });
    let proseIndex = 0;
    return localizedLines.map((line, index) => {
      const signature = layoutLineFinancialSignature(line);
      if (signature.binding) {
        return (
          sourceEntries.find((entry) => entry.signature.binding)
          || fallbackEntries.find((entry) => entry.signature.binding)
          || sourceEntries.find((entry) => (
            entry.signature.tokens.some((token) => token.split(':')[2] === 'money')
          ))
          || fallbackEntries.find((entry) => (
            entry.signature.tokens.some((token) => token.split(':')[2] === 'money')
          ))
        )?.line;
      }
      if (signature.tokens.length) {
        const exact = sourceEntries.find(
          (entry) => equalJson(entry.signature.tokens, signature.tokens)
        ) || fallbackEntries.find(
          (entry) => equalJson(entry.signature.tokens, signature.tokens)
        );
        if (exact) return exact.line;
        const overlapping = sourceEntries.find((entry) => (
          entry.signature.tokens.some((token) => signature.tokens.includes(token))
        )) || fallbackEntries.find((entry) => (
          entry.signature.tokens.some((token) => signature.tokens.includes(token))
        ));
        if (overlapping) return overlapping.line;
      }
      if (sourceProse.length) {
        const denominator = Math.max(1, localizedProse.length - 1);
        const sourceIndex = Math.round(
          proseIndex * Math.max(0, sourceProse.length - 1) / denominator
        );
        proseIndex += 1;
        return sourceProse[sourceIndex]?.line;
      }
      return sourceLines[Math.min(index, sourceLines.length - 1)];
    });
  }

  function projectLayoutLine(
    sourceLine,
    localizedLine,
    surface,
    owner,
    language,
    path,
    trustedTextColors
  ) {
    if (typeof localizedLine === 'string') {
      if (typeof sourceLine !== 'string') {
        overlayContractError(surface, owner, language, path);
      }
      return localizedLine;
    }
    if (
      !localizedLine
      || typeof localizedLine !== 'object'
      || Array.isArray(localizedLine)
      || !sourceLine
      || typeof sourceLine !== 'object'
      || Array.isArray(sourceLine)
    ) {
      overlayContractError(surface, owner, language, path);
    }
    rejectUnknownOverlayKeys(
      localizedLine,
      LAYOUT_LINE_KEYS,
      surface,
      owner,
      language,
      path
    );
    if (typeof localizedLine.text !== 'string') {
      overlayContractError(surface, owner, language, `${path}.text`);
    }
    const projected = { text: localizedLine.text };
    if (localizedLine.size != null) {
      const size = assertFiniteLayoutNumber(
        localizedLine.size,
        8,
        128,
        surface,
        owner,
        language,
        `${path}.size`
      );
      if (
        typeof sourceLine.size !== 'number'
        || !Number.isFinite(sourceLine.size)
        || size / sourceLine.size < 0.5
        || size / sourceLine.size > 1.5
        || Math.abs(size - sourceLine.size) > 16
      ) {
        overlayContractError(surface, owner, language, `${path}.size`);
      }
      projected.size = size;
    }
    if (localizedLine.weight != null) {
      const weight = assertFiniteLayoutNumber(
        localizedLine.weight,
        100,
        900,
        surface,
        owner,
        language,
        `${path}.weight`
      );
      if (!Number.isInteger(weight) || weight % 100 !== 0) {
        overlayContractError(surface, owner, language, `${path}.weight`);
      }
      projected.weight = weight;
    }
    if (localizedLine.color != null) {
      const color = canonicalHexColor(localizedLine.color);
      if (
        !color
        || !trustedTextColors.has(color)
      ) {
        overlayContractError(surface, owner, language, `${path}.color`);
      }
      projected.color = localizedLine.color;
    }
    if (localizedLine.textLength != null) {
      if (
        sourceLine.textLength == null
        || localizedLine.textLength !== sourceLine.textLength
      ) {
        overlayContractError(surface, owner, language, `${path}.textLength`);
      }
      projected.textLength = sourceLine.textLength;
    }
    return projected;
  }

  function projectLayoutBlock(
    sourceBlock,
    localizedBlock,
    dataset,
    surface,
    owner,
    language,
    path,
    fallbackSourceLines,
    trustedTextColors,
    localizedItem
  ) {
    if (
      !sourceBlock
      || !localizedBlock
      || typeof sourceBlock !== 'object'
      || typeof localizedBlock !== 'object'
      || Array.isArray(sourceBlock)
      || Array.isArray(localizedBlock)
    ) {
      overlayContractError(surface, owner, language, path);
    }
    rejectUnknownOverlayKeys(
      localizedBlock,
      LAYOUT_BLOCK_KEYS,
      surface,
      owner,
      language,
      path
    );
    const { width, height } = datasetCanvasBounds(dataset);
    const projected = {};
    for (const [key, limit, delta] of [
      ['x', width, 400],
      ['top', height, 64],
    ]) {
      if (localizedBlock[key] == null) continue;
      const value = assertFiniteLayoutNumber(
        localizedBlock[key],
        0,
        limit,
        surface,
        owner,
        language,
        `${path}.${key}`
      );
      if (
        typeof sourceBlock[key] !== 'number'
        || !Number.isFinite(sourceBlock[key])
        || Math.abs(value - sourceBlock[key]) > delta
      ) {
        overlayContractError(surface, owner, language, `${path}.${key}`);
      }
      projected[key] = value;
    }
    for (const key of ['x', 'top']) {
      if (projected[key] == null && sourceBlock[key] != null) {
        projected[key] = sourceBlock[key];
      }
    }
    if (localizedBlock.anchor != null) {
      if (
        sourceBlock.anchor == null
        || !['start', 'middle', 'end'].includes(localizedBlock.anchor)
      ) {
        overlayContractError(surface, owner, language, `${path}.anchor`);
      }
      projected.anchor = localizedBlock.anchor;
    } else if (sourceBlock.anchor != null) {
      projected.anchor = sourceBlock.anchor;
    }
    if (localizedBlock.lineGap != null) {
      const lineGap = assertFiniteLayoutNumber(
        localizedBlock.lineGap,
        0,
        64,
        surface,
        owner,
        language,
        `${path}.lineGap`
      );
      if (
        sourceBlock.lineGap == null
          ? lineGap > 16
          : Math.abs(lineGap - sourceBlock.lineGap) > 10
      ) {
        overlayContractError(surface, owner, language, `${path}.lineGap`);
      }
      projected.lineGap = lineGap;
    } else if (sourceBlock.lineGap != null) {
      projected.lineGap = sourceBlock.lineGap;
    }
    for (const key of ['nameSize', 'valueSize', 'noteSize']) {
      if (localizedBlock[key] == null) {
        if (sourceBlock[key] != null) projected[key] = sourceBlock[key];
        continue;
      }
      const value = assertFiniteLayoutNumber(
        localizedBlock[key],
        8,
        128,
        surface,
        owner,
        language,
        `${path}.${key}`
      );
      if (
        typeof sourceBlock[key] !== 'number'
        || value / sourceBlock[key] < 0.5
        || value / sourceBlock[key] > 1.5
      ) {
        overlayContractError(surface, owner, language, `${path}.${key}`);
      }
      projected[key] = value;
    }
    // Block-level colors and weight remain source-owned when a locale
    // explicitly carries them. Omission intentionally preserves the
    // renderer's trusted default instead of backfilling a source value into
    // an array-replacement overlay.
    for (const key of ['valueColor', 'noteColor', 'nameWeight', 'nameColor']) {
      if (localizedBlock[key] == null) continue;
      if (!equalJson(localizedBlock[key], sourceBlock[key])) {
        overlayContractError(surface, owner, language, `${path}.${key}`);
      }
      projected[key] = clone(localizedBlock[key]);
    }
    if (localizedBlock.parts != null) {
      if (!equalJson(localizedBlock.parts, sourceBlock.parts)) {
        overlayContractError(surface, owner, language, `${path}.parts`);
      }
      projected.parts = clone(sourceBlock.parts);
    } else if (sourceBlock.parts != null && localizedBlock.lines == null) {
      projected.parts = clone(sourceBlock.parts);
    }
    if (localizedBlock.semanticRole != null) {
      if (
        localizedBlock.semanticRole !== sourceBlock.semanticRole
        && !(
          sourceBlock.semanticRole == null
          && localizedBlock.semanticRole === 'reference-offset-side-label'
        )
      ) {
        overlayContractError(surface, owner, language, `${path}.semanticRole`);
      }
      projected.semanticRole = localizedBlock.semanticRole;
    } else if (sourceBlock.semanticRole != null) {
      projected.semanticRole = sourceBlock.semanticRole;
    }
    if (localizedBlock.lines != null) {
      if (!Array.isArray(sourceBlock.lines) || !Array.isArray(localizedBlock.lines)) {
        overlayContractError(surface, owner, language, `${path}.lines`);
      }
      if (
        localizedBlock.lines.length < 1
        || localizedBlock.lines.length > Math.min(12, sourceBlock.lines.length + 4)
      ) {
        overlayContractError(surface, owner, language, `${path}.lines`);
      }
      const mappedLines = mappedSourceLayoutLines(
        sourceBlock.lines,
        localizedBlock.lines,
        fallbackSourceLines
      );
      projected.lines = localizedBlock.lines.map((line, index) => projectLayoutLine(
        mappedLines[index],
        line,
        surface,
        owner,
        language,
        `${path}.lines[${index}]`,
        trustedTextColors
      ));
    } else if (sourceBlock.lines != null && localizedBlock.parts == null) {
      overlayContractError(surface, owner, language, `${path}.lines`);
    }

    const type = {
      ...(global.SankeyEngine?.DEFAULTS?.type || {}),
      ...(dataset?.render?.type || {}),
    };
    const lineSizes = [];
    if (Array.isArray(projected.lines)) {
      projected.lines.forEach((line) => {
        lineSizes.push(
          typeof line === 'object' && line?.size != null
            ? Number(line.size)
            : Number(type.note)
        );
      });
    } else {
      const parts = projected.parts || ['name', 'value', 'notes'];
      if (parts.includes('name')) {
        const labels = Array.isArray(localizedItem?.label)
          ? localizedItem.label
          : (localizedItem?.label ? [localizedItem.label] : []);
        labels.forEach(() => lineSizes.push(Number(projected.nameSize || type.name)));
      }
      if (
        parts.includes('value')
        && (localizedItem?.value != null || localizedItem?.valueText != null)
      ) {
        lineSizes.push(Number(projected.valueSize || type.value));
      }
      if (parts.includes('notes')) {
        (localizedItem?.notes || []).forEach(
          () => lineSizes.push(Number(projected.noteSize || type.note))
        );
      }
    }
    if (lineSizes.length) {
      if (
        !lineSizes.every((size) => Number.isFinite(size) && size > 0)
        || !Number.isFinite(projected.x)
        || !Number.isFinite(projected.top)
      ) {
        overlayContractError(surface, owner, language, `${path}.visibleBounds`);
      }
      const anchor = projected.anchor || 'middle';
      const smallestSize = Math.min(...lineSizes);
      if (!isVisibleTextOrigin(projected.x, anchor, smallestSize, width)) {
        overlayContractError(surface, owner, language, `${path}.visibleOrigin`);
      }
      const lineGap = Number(projected.lineGap ?? type.lineGap);
      const blockHeight = lineSizes.reduce((sum, size) => sum + size, 0)
        + lineGap * Math.max(0, lineSizes.length - 1);
      if (
        !Number.isFinite(lineGap)
        || lineGap < 0
        || projected.top < 0
        || projected.top + blockHeight > height
      ) {
        overlayContractError(surface, owner, language, `${path}.visibleBounds`);
      }
    }
    return projected;
  }

  function mappedSourceLayoutBlocks(sourceBlocks, localizedBlocks) {
    const profile = (block) => {
      const signatures = (block?.lines || []).map(layoutLineFinancialSignature);
      return {
        binding: signatures.some((signature) => signature.binding),
        numeric: signatures.some((signature) => signature.tokens.length > 0),
        prose: signatures.some(
          (signature) => !signature.binding && signature.tokens.length === 0
        ),
        parts: Array.isArray(block?.parts),
      };
    };
    return localizedBlocks.map((localizedBlock, index) => {
      const localizedX = Number(localizedBlock?.x);
      const localizedTop = Number(localizedBlock?.top);
      const localizedProfile = profile(localizedBlock);
      if (!Number.isFinite(localizedX) && !Number.isFinite(localizedTop)) {
        return sourceBlocks[Math.min(index, sourceBlocks.length - 1)];
      }
      return sourceBlocks.reduce((best, candidate, candidateIndex) => {
        const candidateX = Number(candidate?.x);
        const candidateTop = Number(candidate?.top);
        const xDistance = Number.isFinite(localizedX) && Number.isFinite(candidateX)
          ? Math.abs(localizedX - candidateX)
          : 0;
        const topDistance = Number.isFinite(localizedTop) && Number.isFinite(candidateTop)
          ? Math.abs(localizedTop - candidateTop)
          : 0;
        const candidateProfile = profile(candidate);
        const contentMismatch = ['binding', 'numeric', 'prose', 'parts']
          .filter((key) => localizedProfile[key] !== candidateProfile[key]).length;
        const score = xDistance + topDistance + contentMismatch * 1000;
        return !best || score < best.score
          ? { block: candidate, score, candidateIndex }
          : best;
      }, null)?.block || sourceBlocks[Math.min(index, sourceBlocks.length - 1)];
    });
  }

  function canonicalHexColor(value) {
    if (typeof value !== 'string' || !/^#[0-9a-f]{3}(?:[0-9a-f]{3})?$/i.test(value)) {
      return '';
    }
    const hex = value.slice(1).toLowerCase();
    return hex.length === 3
      ? `#${[...hex].map((character) => character.repeat(2)).join('')}`
      : `#${hex}`;
  }

  function canonicalDatasetTextColors(dataset) {
    const colors = new Set();
    const background = canonicalHexColor(
      dataset?.render?.background || global.SankeyEngine?.DEFAULTS?.background || '#efefef'
    );
    const add = (value) => {
      const color = canonicalHexColor(value);
      if (color && color !== background) colors.add(color);
    };
    add(dataset?.render?.titleColor);
    add(dataset?.render?.subtitleColor);
    add(dataset?.render?.noteColor);
    Object.values(dataset?.render?.palette || {}).forEach((entry) => {
      add(entry?.label);
      add(entry?.node);
    });
    [...(dataset?.nodes || []), ...(dataset?.nonNodeMetrics || [])].forEach((item) => {
      add(item?.labelColor);
      add(item?.color);
    });
    Object.values(dataset?.layout?.labels || {}).forEach((label) => {
      (label?.blocks || []).forEach((block) => {
        add(block?.nameColor);
        add(block?.valueColor);
        add(block?.noteColor);
        (block?.lines || []).forEach((line) => add(line?.color));
      });
    });
    return colors;
  }

  function projectLayoutLabel(
    dataset,
    sourceLabel,
    localizedLabel,
    owner,
    language,
    path,
    localizedItem
  ) {
    const surface = 'Dataset';
    rejectUnknownOverlayKeys(
      localizedLabel,
      LAYOUT_LABEL_KEYS,
      surface,
      owner,
      language,
      path
    );
    if (!sourceLabel) {
      if (!equalJson(localizedLabel, { blocks: [] })) {
        overlayContractError(surface, owner, language, path);
      }
      return { blocks: [] };
    }
    const projected = {};
    if (localizedLabel.icons != null) {
      if (!equalJson(localizedLabel.icons, sourceLabel.icons)) {
        overlayContractError(surface, owner, language, `${path}.icons`);
      }
      projected.icons = clone(sourceLabel.icons);
    }
    if (!Array.isArray(sourceLabel.blocks) || !Array.isArray(localizedLabel.blocks)) {
      overlayContractError(surface, owner, language, `${path}.blocks`);
    }
    if (
      localizedLabel.blocks.length > sourceLabel.blocks.length
      || (
        sourceLabel.blocks.length > 0
        && localizedLabel.blocks.length < 1
      )
    ) {
      overlayContractError(surface, owner, language, `${path}.blocks`);
    }
    const allSourceLines = sourceLabel.blocks.flatMap((block) => block?.lines || []);
    const trustedTextColors = canonicalDatasetTextColors(dataset);
    const sourceBlocks = mappedSourceLayoutBlocks(
      sourceLabel.blocks,
      localizedLabel.blocks
    );
    projected.blocks = localizedLabel.blocks.map((block, index) => projectLayoutBlock(
      sourceBlocks[index],
      block,
      dataset,
      surface,
      owner,
      language,
      `${path}.blocks[${index}]`,
      allSourceLines,
      trustedTextColors,
      localizedItem
    ));
    // Translations may legitimately merge a prose-only source line into a
    // neighbouring amount line (for example "Cloud &" + "Software ($5.2B)"
    // becomes "云与软件 ($5.2B)"). Check the aggregate lexical payload
    // instead of requiring the source wrapping topology to survive. Strip
    // bindings, numeric forms, currencies and scale/rate vocabulary first so
    // a locale cannot satisfy this guard with a numeric-only replacement.
    const hasLexicalCopy = (label) => {
      const copy = layoutLineTexts(label).join(' ').normalize('NFKC')
        .replace(/\$value/gi, ' ')
        .replace(
          /\b(?:USD|EUR|GBP|JPY|CNY|RMB|HKD|KRW|CHF|SAR|DKK|BRL)\b/gi,
          ' '
        )
        .replace(
          /\b(?:thousand|million|billion|trillion|percentage|percent|basis|points?|bps?|pp)\b/gi,
          ' '
        )
        .replace(/\b(?:FY|Q|H|M|Y|YOY|Y\/Y)\b/gi, ' ')
        .replace(/[零〇一二两三四五六七八九十百千万亿兆点]/g, ' ')
        .replace(/(?:美元|港元|欧元|英镑|日元|人民币|韩元|瑞郎|里亚尔|克朗|雷亚尔)/g, ' ')
        .replace(/(?:个百分点|基点|百分比|百分率)/g, ' ')
        .replace(/[\p{N}\p{P}\p{S}\s]/gu, '');
      return /\p{L}/u.test(copy);
    };
    const sourceHasVisibleCopy = hasLexicalCopy(sourceLabel);
    const localizedHasVisibleCopy = hasLexicalCopy(projected);
    if (sourceHasVisibleCopy && !localizedHasVisibleCopy) {
      overlayContractError(surface, owner, language, `${path}.lines`);
    }
    return projected;
  }

  function validateDatasetMetaLayout(dataset, overlay, owner, language) {
    if (!overlay) return;
    const owns = (key) => Object.prototype.hasOwnProperty.call(overlay, key);
    const { width } = datasetCanvasBounds(dataset);
    const source = dataset?.meta || {};
    if (owns('hidePeriodStamp')) {
      if (
        typeof overlay.hidePeriodStamp !== 'boolean'
        || overlay.hidePeriodStamp !== source.hidePeriodStamp
      ) {
        overlayContractError(
          'Dataset',
          owner,
          language,
          'meta.hidePeriodStamp'
        );
      }
    }
    if (owns('titleSize')) {
      const value = assertFiniteLayoutNumber(
        overlay.titleSize,
        16,
        256,
        'Dataset',
        owner,
        language,
        'meta.titleSize'
      );
      if (value !== source.titleSize && (
        typeof source.titleSize !== 'number'
        || value / source.titleSize < 0.65
        || value / source.titleSize > 1.1
        || Math.abs(value - source.titleSize) > 48
      )) {
        overlayContractError('Dataset', owner, language, 'meta.titleSize');
      }
    }
    if (owns('titleTextLength')) {
      const value = assertFiniteLayoutNumber(
        overlay.titleTextLength,
        16,
        width,
        'Dataset',
        owner,
        language,
        'meta.titleTextLength'
      );
      if (value !== source.titleTextLength && (
        typeof source.titleTextLength !== 'number'
        || value / source.titleTextLength < 0.55
        || value / source.titleTextLength > 1.15
      )) {
        overlayContractError('Dataset', owner, language, 'meta.titleTextLength');
      }
    }
    if (owns('periodX')) {
      if (overlay.periodX === source.periodX) {
        if (typeof overlay.periodX !== 'number' || !Number.isFinite(overlay.periodX)) {
          overlayContractError('Dataset', owner, language, 'meta.periodX');
        }
        return;
      }
      const value = assertFiniteLayoutNumber(
        overlay.periodX,
        0,
        width,
        'Dataset',
        owner,
        language,
        'meta.periodX'
      );
      if (
        typeof source.periodX !== 'number'
        || !Number.isFinite(source.periodX)
        || Math.abs(value - source.periodX) > 180
      ) {
        overlayContractError('Dataset', owner, language, 'meta.periodX');
      }
    }
  }

  function assertDatasetOverlayText(value, source, surface, owner, language, path) {
    if (
      typeof value !== 'string'
      || typeof source !== 'string'
      || (clean(source) && !clean(value))
    ) {
      overlayContractError(surface, owner, language, path);
    }
  }

  function assertDatasetOverlayLabel(
    value,
    source,
    arrayAllowed,
    owner,
    language,
    path
  ) {
    const validString = (
      typeof value === 'string'
      && (Boolean(clean(value)) || (typeof source === 'string' && !clean(source)))
    );
    const validArray = (
      arrayAllowed
      && Array.isArray(value)
      && value.length > 0
      && value.every((item) => typeof item === 'string' && Boolean(clean(item)))
    );
    if (!validString && !validArray) {
      overlayContractError('Dataset', owner, language, path);
    }
  }

  function assertDatasetOverlayNotes(value, owner, language, path) {
    if (
      !Array.isArray(value)
      || !value.every((item) => typeof item === 'string' && Boolean(clean(item)))
    ) {
      overlayContractError('Dataset', owner, language, path);
    }
  }

  // Dataset overlays are deny-by-default. New Adapter fields therefore stay
  // semantic until this Interface deliberately classifies them as display
  // text/layout; localization can never silently acquire data authority.
  function validateDatasetOverlay(dataset, overlay, language) {
    const owner = dataset?.key;
    const owns = (value, key) => (
      Boolean(value)
      && Object.prototype.hasOwnProperty.call(value, key)
    );
    assertSafeAnnotationSvg(
      dataset?.annotationsSvg,
      'Dataset',
      owner,
      language,
      'annotationsSvg'
    );
    if (!overlay) return overlay;
    overlay = clone(overlay);
    rejectUnknownOverlayKeys(overlay, DATASET_OVERLAY_KEYS, 'Dataset', owner, language, '');

    if (owns(overlay, 'name')) {
      assertDatasetOverlayText(
        overlay.name,
        dataset?.name,
        'Dataset',
        owner,
        language,
        'name'
      );
      assertVisibleAmountParity(
        [dataset?.name],
        [overlay.name],
        'Dataset',
        owner,
        language,
        'name'
      );
    }

    if (owns(overlay, 'meta')) {
      rejectUnknownOverlayKeys(
        overlay.meta,
        DATASET_META_OVERLAY_KEYS,
        'Dataset',
        owner,
        language,
        'meta'
      );
      validateDatasetMetaLayout(dataset, overlay.meta, owner, language);
      for (const key of ['title', 'subtitle', 'period', 'periodNote']) {
        if (!owns(overlay.meta, key)) continue;
        assertDatasetOverlayText(
          overlay.meta[key],
          dataset?.meta?.[key],
          'Dataset',
          owner,
          language,
          `meta.${key}`
        );
        assertVisibleAmountParity(
          [dataset?.meta?.[key]],
          [overlay.meta[key]],
          'Dataset',
          owner,
          language,
          `meta.${key}`
        );
      }
    }

    for (const collectionKey of ['nodes', 'nonNodeMetrics']) {
      const collectionOverlay = overlay[collectionKey];
      if (!owns(overlay, collectionKey)) continue;
      if (!collectionOverlay || typeof collectionOverlay !== 'object' || Array.isArray(collectionOverlay)) {
        overlayContractError('Dataset', owner, language, collectionKey);
      }
      const sourceIds = new Set((dataset?.[collectionKey] || []).map((item) => String(item?.id)));
      Object.entries(collectionOverlay).forEach(([id, itemOverlay]) => {
        const sourceItem = (dataset?.[collectionKey] || [])
          .find((item) => String(item?.id) === String(id));
        if (!sourceIds.has(String(id))) {
          overlayContractError('Dataset', owner, language, `${collectionKey}.${id}`);
        }
        rejectUnknownOverlayKeys(
          itemOverlay,
          DATASET_NODE_OVERLAY_KEYS,
          'Dataset',
          owner,
          language,
          `${collectionKey}.${id}`
        );
        if (owns(itemOverlay, 'label')) {
          assertDatasetOverlayLabel(
            itemOverlay.label,
            sourceItem?.label,
            collectionKey === 'nodes',
            owner,
            language,
            `${collectionKey}.${id}.label`
          );
        }
        if (owns(itemOverlay, 'notes')) {
          assertDatasetOverlayNotes(
            itemOverlay.notes,
            owner,
            language,
            `${collectionKey}.${id}.notes`
          );
        }
        assertVisibleAmountSubset(
          [
            ...visibleItemTexts(sourceItem),
            ...layoutLineTexts(dataset?.layout?.labels?.[id]),
          ],
          visibleItemTexts(mergeOverlay(clone(sourceItem), itemOverlay)),
          'Dataset',
          owner,
          language,
          `${collectionKey}.${id}`
        );
      });
    }

    if (owns(overlay, 'layout')) {
      rejectUnknownOverlayKeys(
        overlay.layout,
        new Set(['labels']),
        'Dataset',
        owner,
        language,
        'layout'
      );
      if (owns(overlay.layout, 'labels') && (
        !overlay.layout.labels
        || typeof overlay.layout.labels !== 'object'
        || Array.isArray(overlay.layout.labels)
      )) {
        overlayContractError('Dataset', owner, language, 'layout.labels');
      }
      Object.entries(overlay.layout.labels || {}).forEach(([nodeId, labelOverlay]) => {
        const sourceLabel = dataset?.layout?.labels?.[nodeId];
        const sourceNode = (dataset?.nodes || []).find((node) => String(node?.id) === String(nodeId));
        const sourceNonNode = (dataset?.nonNodeMetrics || [])
          .find((metric) => String(metric?.id) === String(nodeId));
        if (
          (!sourceLabel && !sourceNode && !sourceNonNode)
          || !labelOverlay
          || typeof labelOverlay !== 'object'
          || Array.isArray(labelOverlay)
        ) {
          overlayContractError('Dataset', owner, language, `layout.labels.${nodeId}`);
        }
        const sourceItem = sourceNode || sourceNonNode;
        const itemOverlay = sourceNode
          ? overlay.nodes?.[nodeId]
          : overlay.nonNodeMetrics?.[nodeId];
        const localizedItem = sourceItem
          ? mergeOverlay(clone(sourceItem), itemOverlay)
          : null;
        const localizedLabel = projectLayoutLabel(
          dataset,
          sourceLabel,
          labelOverlay,
          owner,
          language,
          `layout.labels.${nodeId}`,
          localizedItem
        );
        overlay.layout.labels[nodeId] = localizedLabel;
        assertVisibleAmountParity(
          sourceLabel
            ? layoutLineTexts(sourceLabel)
            : (sourceNode || (sourceNonNode && sourceNonNode.representation !== 'data-only')
                ? ['$value']
                : []),
          layoutLineTexts(localizedLabel),
          'Dataset',
          owner,
          language,
          `layout.labels.${nodeId}`,
          true
        );
      });
    }

    if (owns(overlay, 'annotationsSvg')) {
      if (typeof dataset?.annotationsSvg !== 'string' || typeof overlay.annotationsSvg !== 'string') {
        overlayContractError('Dataset', owner, language, 'annotationsSvg');
      }
      const canvas = datasetCanvasBounds(dataset);
      overlay.annotationsSvg = canonicalizeAnnotationText(
        dataset.annotationsSvg,
        overlay.annotationsSvg,
        {
          surface: 'Dataset',
          owner,
          language,
          path: 'annotationsSvg',
          width: canvas.width,
          height: canvas.height,
        }
      );
      assertSafeAnnotationSvg(
        overlay.annotationsSvg,
        'Dataset',
        owner,
        language,
        'annotationsSvg'
      );
      assertVisibleAmountParity(
        annotationTextRuns(dataset.annotationsSvg),
        annotationTextRuns(overlay.annotationsSvg),
        'Dataset',
        owner,
        language,
        'annotationsSvg'
      );
    }
    return overlay;
  }

  function validateLocalizedDatasetProjection(dataset, localized, language) {
    const owner = dataset?.key;
    assertVisibleAmountParity(
      [dataset?.name],
      [localized?.name],
      'Dataset',
      owner,
      language,
      'name'
    );
    for (const key of ['title', 'subtitle', 'period', 'periodNote']) {
      assertVisibleAmountParity(
        [dataset?.meta?.[key]],
        [localized?.meta?.[key]],
        'Dataset',
        owner,
        language,
        `meta.${key}`
      );
    }
    for (const collectionKey of ['nodes', 'nonNodeMetrics']) {
      (dataset?.[collectionKey] || []).forEach((sourceItem) => {
        const localizedItem = (localized?.[collectionKey] || [])
          .find((item) => String(item?.id) === String(sourceItem?.id));
        if (!localizedItem) {
          overlayContractError(
            'Dataset',
            owner,
            language,
            `${collectionKey}.${sourceItem?.id}`
          );
        }
        assertVisibleAmountSubset(
          [
            ...visibleItemTexts(sourceItem),
            ...layoutLineTexts(dataset?.layout?.labels?.[sourceItem?.id]),
          ],
          visibleItemTexts(localizedItem),
          'Dataset',
          owner,
          language,
          `${collectionKey}.${sourceItem?.id}`
        );
      });
    }
    const labelIds = new Set([
      ...Object.keys(dataset?.layout?.labels || {}),
      ...Object.keys(localized?.layout?.labels || {}),
    ]);
    labelIds.forEach((nodeId) => {
      const sourceLabel = dataset?.layout?.labels?.[nodeId];
      const sourceNode = (dataset?.nodes || [])
        .find((node) => String(node?.id) === String(nodeId));
      const sourceNonNode = (dataset?.nonNodeMetrics || [])
        .find((metric) => String(metric?.id) === String(nodeId));
      assertVisibleAmountParity(
        sourceLabel
          ? layoutLineTexts(sourceLabel)
          : (sourceNode || (sourceNonNode && sourceNonNode.representation !== 'data-only')
              ? ['$value']
              : []),
        layoutLineTexts(localized?.layout?.labels?.[nodeId]),
        'Dataset',
        owner,
        language,
        `layout.labels.${nodeId}`,
        true
      );
    });
    assertSafeAnnotationSvg(
      localized?.annotationsSvg,
      'Dataset',
      owner,
      language,
      'annotationsSvg'
    );
    assertVisibleAmountParity(
      annotationTextRuns(dataset?.annotationsSvg),
      annotationTextRuns(localized?.annotationsSvg),
      'Dataset',
      owner,
      language,
      'annotationsSvg'
    );
  }

  function validateFinancialOverlay(record, overlay, language) {
    if (!overlay) return;
    const owner = record?.key;
    const isPlainObject = (value) => (
      Boolean(value)
      && typeof value === 'object'
      && !Array.isArray(value)
    );
    const visit = (value, source, path = '') => {
      if (Array.isArray(value)) {
        if (!Array.isArray(source)) {
          overlayContractError('Financial record', owner, language, path);
        }
        const seenIds = new Set();
        value.forEach((item, index) => {
          if (item == null) return;
          if (!isPlainObject(item)) {
            overlayContractError('Financial record', owner, language, `${path}[${index}]`);
          }
          const id = item.id != null
            ? String(item.id)
            : '';
          if (id && seenIds.has(id)) {
            overlayContractError('Financial record', owner, language, `${path}[${index}].id`);
          }
          if (id) seenIds.add(id);
          const sourceItem = id
            ? source.find((candidate) => String(candidate?.id ?? '') === id)
            : source[index];
          if (sourceItem === undefined) {
            overlayContractError('Financial record', owner, language, `${path}[${index}]`);
          }
          if (!isPlainObject(sourceItem)) {
            overlayContractError('Financial record', owner, language, `${path}[${index}]`);
          }
          visit(item, sourceItem, `${path}[${index}]`);
        });
        return;
      }
      if (!isPlainObject(value) || !isPlainObject(source)) {
        overlayContractError('Financial record', owner, language, path);
      }
      Object.entries(value).forEach(([key, next]) => {
        const nextPath = path ? `${path}.${key}` : key;
        if (!path && ['period', 'periodNote'].includes(key)) {
          if (typeof next !== 'string') {
            overlayContractError('Financial record', owner, language, nextPath);
          }
          assertVisibleAmountParity(
            [source?.[key]],
            [next],
            'Financial record',
            owner,
            language,
            nextPath
          );
          return;
        }
        if (key === 'label') {
          if (
            !(
              typeof next === 'string'
              || (
                Array.isArray(next)
                && next.length > 0
                && next.every((item) => typeof item === 'string')
              )
            )
          ) {
            overlayContractError('Financial record', owner, language, nextPath);
          }
          assertVisibleAmountSubset(
            visibleItemTexts({ [key]: source?.[key] }),
            visibleItemTexts({ [key]: next }),
            'Financial record',
            owner,
            language,
            nextPath
          );
          return;
        }
        if (key === 'notes') {
          if (!Array.isArray(next) || !next.every((item) => typeof item === 'string')) {
            overlayContractError('Financial record', owner, language, nextPath);
          }
          assertVisibleAmountSubset(
            visibleItemTexts({ [key]: source?.[key] }),
            visibleItemTexts({ [key]: next }),
            'Financial record',
            owner,
            language,
            nextPath
          );
          return;
        }
        if (key === 'id') {
          if (String(next) !== String(source?.id ?? '')) {
            overlayContractError('Financial record', owner, language, nextPath);
          }
          return;
        }
        if (!FINANCIAL_OVERLAY_CONTAINERS.has(key)) {
          overlayContractError('Financial record', owner, language, nextPath);
        }
        if (source?.[key] === undefined) {
          overlayContractError('Financial record', owner, language, nextPath);
        }
        const sourceValue = source[key];
        if (
          Array.isArray(sourceValue)
            ? !Array.isArray(next)
            : !isPlainObject(sourceValue) || !isPlainObject(next)
        ) {
          overlayContractError('Financial record', owner, language, nextPath);
        }
        visit(next, sourceValue, nextPath);
      });
    };
    visit(overlay, record);
  }

  function validateRevenueMetricOverlay(record, overlay, language) {
    if (!overlay) return;
    const owner = record?.key;
    rejectUnknownOverlayKeys(
      overlay,
      REVENUE_METRIC_OVERLAY_KEYS,
      'Revenue Metric',
      owner,
      language,
      ''
    );
    if (overlay.conditions) {
      rejectUnknownOverlayKeys(
        overlay.conditions,
        REVENUE_CONDITION_OVERLAY_KEYS,
        'Revenue Metric',
        owner,
        language,
        'conditions'
      );
    }
    if (overlay.observations) {
      if (!Array.isArray(overlay.observations)) {
        overlayContractError('Revenue Metric', owner, language, 'observations');
      }
      overlay.observations.forEach((item, index) => rejectUnknownOverlayKeys(
        item,
        new Set(['notes']),
        'Revenue Metric',
        owner,
        language,
        `observations[${index}]`
      ));
    }
  }

  function validateCompanyOverlay(company, overlay, language) {
    if (!overlay) return;
    rejectUnknownOverlayKeys(
      overlay,
      COMPANY_OVERLAY_KEYS,
      'Company metadata',
      company?.key || company?.name,
      language,
      ''
    );
  }

  function yearText(value) {
    const year = Number(value);
    if (!Number.isFinite(year)) return String(value);
    return String(year < 100 ? 2000 + year : year);
  }

  function translatePeriod(text, language) {
    if (normalizeLanguage(language) !== 'zh') return text;
    const value = clean(text);
    const quarterWords = { 1: '第一季度', 2: '第二季度', 3: '第三季度', 4: '第四季度' };
    const qfy = value.match(/^Q\s*([1-4])\s+FY\s*(20\d{2}|\d{2})$/i);
    if (qfy) return `${yearText(qfy[2])} 财年${quarterWords[qfy[1]]}`;
    const qfyCompact = value.match(/^Q([1-4])-?FY(20\d{2}|\d{2})$/i);
    if (qfyCompact) return `${yearText(qfyCompact[2])} 财年${quarterWords[qfyCompact[1]]}`;
    const fy = value.match(/^FY\s*(20\d{2}|\d{2})$/i) || value.match(/^FY(20\d{2}|\d{2})$/i);
    if (fy) return `${yearText(fy[1])} 财年`;
    return text;
  }

  function translateEnding(text, language) {
    if (normalizeLanguage(language) !== 'zh') return text;
    const value = clean(text);
    const monthYear = value.match(/^Ending\s+([A-Za-z.]+)\s+(\d{4})$/i);
    if (monthYear) {
      const month = MONTH_ZH[monthYear[1].replace('.', '').toLowerCase()];
      if (month) return `截至 ${monthYear[2]} 年 ${month}`;
    }
    const monthDayYear = value.match(/^Ending\s+([A-Za-z.]+)\s+(\d{1,2}),?\s+(\d{4})$/i);
    if (monthDayYear) {
      const month = MONTH_ZH[monthDayYear[1].replace('.', '').toLowerCase()];
      if (month) return `截至 ${monthDayYear[3]} 年 ${month} ${Number(monthDayYear[2])} 日`;
    }
    return text;
  }

  function translateMonthDate(text, language) {
    if (normalizeLanguage(language) !== 'zh') return text;
    const value = clean(text);
    if (FISCAL_YEAR_END_ZH[value]) return FISCAL_YEAR_END_ZH[value];
    const monthDay = value.match(/^([A-Za-z.]+)\s+(\d{1,2})$/);
    if (monthDay) {
      const month = MONTH_ZH[monthDay[1].replace('.', '').toLowerCase()];
      if (month) return `${month} ${Number(monthDay[2])} 日`;
    }
    return text;
  }

  function translateChange(text, language) {
    if (normalizeLanguage(language) !== 'zh') return text;
    const value = clean(text);
    if (/^Flat\s+Y\/Y$/i.test(value)) return '同比持平';
    if (/^Flat\s+Q\/Q$/i.test(value)) return '环比持平';
    const percent = value.match(/^([+−-]?\d+(?:\.\d+)?%|\(\d+(?:\.\d+)?%\))\s+Y\/Y$/i);
    if (percent) return `同比 ${percent[1].replace('−', '-')}`;
    const pp = value.match(/^([+−-]?\d+(?:\.\d+)?pp|\(\d+(?:\.\d+)?pp\))\s+Y\/Y$/i);
    if (pp) return `同比 ${pp[1].replace('−', '-').replace(/pp/i, ' 个百分点')}`;
    const quarterPercent = value.match(/^([+−-]?\d+(?:\.\d+)?%|\(\d+(?:\.\d+)?%\))\s+Q\/Q$/i);
    if (quarterPercent) return `环比 ${quarterPercent[1].replace('−', '-')}`;
    const quarterPp = value.match(/^([+−-]?\d+(?:\.\d+)?pp|\(\d+(?:\.\d+)?pp\))\s+Q\/Q$/i);
    if (quarterPp) return `环比 ${quarterPp[1].replace('−', '-').replace(/pp/i, ' 个百分点')}`;
    return text;
  }

  function translateTrailingChange(text, language) {
    if (normalizeLanguage(language) !== 'zh') return text;
    const value = clean(text);
    const suffix = value.match(/^(.+?)\s+((?:[+−-]?\d+(?:\.\d+)?%|\(\d+(?:\.\d+)?%\)|[+−-]?\d+(?:\.\d+)?pp|\(\d+(?:\.\d+)?pp\))\s+[YQ]\/[YQ])$/i);
    if (suffix) {
      const translated = translateChange(suffix[2], language);
      if (translated !== suffix[2]) return `${suffix[1]} ${translated}`;
    }
    let out = value
      .replace(/([+−-]?\d+(?:\.\d+)?[BMK])\s+Y\/Y/gi, (_match, amount) => `同比 ${amount.replace('−', '-')}`)
      .replace(/([+−-]?\d+(?:\.\d+)?[BMK])\s+Q\/Q/gi, (_match, amount) => `环比 ${amount.replace('−', '-')}`);
    // Convert "&" list separators only inside strings that actually carried a
    // change suffix; plain "&" labels must fall through to the dictionary.
    if (out !== value) out = out.replace(/\s*&\s*/g, '，');
    return out !== value ? out : text;
  }

  function translateMargin(text, language) {
    if (normalizeLanguage(language) !== 'zh') return text;
    const value = clean(text);
    const margin = value.match(/^(\(?\d+(?:\.\d+)?%\)?)\s+(gross|operating|net|adjusted|ebit|pretax|segment)?\s*margin$/i);
    const reverse = value.match(/^(gross|operating|net|adjusted|ebit|pretax|segment)\s+margin\s+(\(?\d+(?:\.\d+)?%\)?)$/i);
    if (!margin && !reverse) return text;
    const kind = ((margin && margin[2]) || (reverse && reverse[1]) || '').toLowerCase();
    const percent = (margin && margin[1]) || (reverse && reverse[2]);
    const label =
      kind === 'gross' ? '毛利率' :
      kind === 'operating' ? '营业利润率' :
      kind === 'net' ? '净利率' :
      kind === 'adjusted' ? '调整后利润率' :
      kind === 'ebit' ? 'EBIT 利润率' :
      kind === 'pretax' ? '税前利润率' :
      kind === 'segment' ? '分部利润率' :
      '利润率';
    return `${label} ${percent}`;
  }

  function translateOfRevenue(text, language) {
    if (normalizeLanguage(language) !== 'zh') return text;
    const value = clean(text);
    const share = value.match(/^(\(?\d+(?:\.\d+)?%\)?)\s+of revenue$/i);
    return share ? `占收入 ${share[1]}` : text;
  }

  function translateTitle(text, language) {
    if (normalizeLanguage(language) !== 'zh') return text;
    const value = clean(text);
    const match = value.match(/^(.+?)\s+((?:Q[1-4]\s+)?FY(?:20)?\d{2})(?:\s+(ByBU))?\s+Income Statement$/i);
    if (match) {
      const period = translatePeriod(match[2], language);
      const variant = match[3] ? '（按业务部门）' : '';
      return `${match[1]} ${period}${variant}利润表`;
    }
    if (/^Income Statement$/i.test(value)) return '利润表';
    return text;
  }

  function translateDatasetName(text, language) {
    if (normalizeLanguage(language) !== 'zh') return text;
    const value = clean(text);
    const split = value.match(/^(.+?)\s+[·-]\s+((?:Q[1-4]\s+)?FY(?:20)?\d{2})(.*)$/i);
    if (!split) return text;
    const suffix = clean(split[3]).replace(/^[-·]\s*/, '');
    const variant = suffix ? ` ${translateText(suffix, language)}` : '';
    return `${split[1]} · ${translatePeriod(split[2], language)}${variant}`;
  }

  function exactZh(text) {
    const value = clean(text);
    if (Object.prototype.hasOwnProperty.call(EXACT_ZH, value)) return EXACT_ZH[value];
    const joined = value.replace(/\s+&\s+/g, ' & ');
    if (Object.prototype.hasOwnProperty.call(EXACT_ZH, joined)) return EXACT_ZH[joined];
    return null;
  }

  // A term is "preserved" when the shared dictionary maps it to itself —
  // brand and product names (YouTube, iPhone, LinkedIn…) that intentionally
  // render unchanged in the target language.
  function isPreservedTerm(text, language) {
    if (normalizeLanguage(language) !== 'zh') return false;
    const value = clean(text);
    if (!value) return false;
    return exactZh(value) === value;
  }

  function translateEmbeddedMoneyLabel(text, language) {
    if (normalizeLanguage(language) !== 'zh') return text;
    const value = clean(text);
    const money = value.match(/^(.+?)\s+(\([^)]*[$\d][^)]*\))$/);
    if (!money) return text;
    const label = translateText(money[1], language);
    return label === money[1] ? text : `${label} ${money[2]}`;
  }

  /* Per-language rule pipelines. Adding a language means registering its
   * ordered rule list here (plus its dictionary bundle in
   * src/i18n-dictionaries.js) — translateText itself stays language-neutral.
   * Each rule takes (text, language) and returns the text unchanged when it
   * does not apply; the first rule that changes the text wins. */
  const TEXT_TRANSLATORS = {
    zh: [
      translateTitle,
      translateDatasetName,
      translatePeriod,
      translateEnding,
      translateMonthDate,
      translateChange,
      translateTrailingChange,
      translateMargin,
      translateOfRevenue,
      translateEmbeddedMoneyLabel,
      translateKnownPhraseText,
    ],
  };

  function translateText(text, language) {
    const code = normalizeLanguage(language);
    if (code === DEFAULT_LANGUAGE || text == null) return text;
    const value = clean(text);
    if (!value || value === '$value' || /^[\d\s$().,%+-]+[BMK]?$/.test(value)) return text;

    const exact = exactZh(value);
    if (exact != null) return exact;

    for (const translator of TEXT_TRANSLATORS[code] || []) {
      const next = translator(value, code);
      if (next !== value) return next;
    }

    return text;
  }

  function translateIndustry(text, language) {
    if (normalizeLanguage(language) !== 'zh') return text;
    const value = clean(text);
    if (!value) return text;
    const exact = exactZh(value);
    if (exact != null) return exact;
    return replaceKnownPhrases(value);
  }

  function translateHeadquarters(text, language) {
    if (normalizeLanguage(language) !== 'zh') return text;
    const value = clean(text);
    if (!value) return text;
    return HEADQUARTERS_ZH[value] || replaceKnownPhrases(value);
  }

  function translateCompanyDescription(company, language, localizedIndustry) {
    if (normalizeLanguage(language) !== 'zh') return company?.description;
    const value = clean(company?.description);
    if (!value) return company?.description;
    const name = clean(company?.displayName || company?.name || company?.legalName);
    const industry = clean(localizedIndustry);
    if (name && industry) {
      return `${name} 是一家业务覆盖${industry}的公司。`;
    }
    const translated = translateKnownPhraseText(value, language);
    return translated === value && name ? `${name} 是一家多元业务公司。` : translated;
  }

  function localizeLabel(value, language) {
    const code = normalizeLanguage(language);
    if (code === DEFAULT_LANGUAGE || value == null) return value;
    if (Array.isArray(value)) {
      const joined = value.map(clean).filter(Boolean).join(' ');
      const exact = exactZh(joined);
      if (exact != null) return exact;
      return value.map((item) => translateText(item, code));
    }
    return translateText(value, code);
  }

  function localizeNotes(notes, language) {
    if (!Array.isArray(notes)) return notes;
    return notes.map((note) => translateText(note, language));
  }

  function lineText(line) {
    if (typeof line === 'string') return line;
    return line && typeof line === 'object' ? line.text : null;
  }

  function withLineText(line, text) {
    if (typeof line === 'string') return text;
    return Object.assign({}, line, { text });
  }

  function isLocalizableLayoutLine(line) {
    const text = lineText(line);
    if (text == null || text === '$value') return false;
    return hasLatinText(clean(text));
  }

  function splitCompactChineseLabel(text, lineCount) {
    if (lineCount !== 2) return null;
    const compact = clean(text).replace(/\s+/g, '');
    if (!compact || hasLatinText(compact) || !/^[\u3400-\u9fff、及与]+$/.test(compact)) return null;
    if (/^[\u3400-\u9fff]{4}$/.test(compact)) {
      return [compact.slice(0, 2), compact.slice(2)];
    }
    const suffixes = ['成本', '费用', '利润', '亏损', '摊销', '开发', '行政', '市场', '收入', '收益'];
    const suffix = suffixes.find((item) => compact.endsWith(item) && compact.length > item.length + 1);
    return suffix ? [compact.slice(0, -suffix.length), suffix] : null;
  }

  function splitLocalizedLayoutPhrase(sourceText, localizedText, lineCount) {
    const explicit = LAYOUT_LINE_SPLITS_ZH[clean(sourceText)];
    if (explicit && explicit.length === lineCount) return explicit;
    return splitCompactChineseLabel(localizedText, lineCount);
  }

  function splitTrailingMoneySuffix(text) {
    const value = clean(text);
    const match = value.match(/^(.+?)\s+(\([^)]*[$€¥￥]\s*\d[^)]*\))$/);
    return match ? { text: clean(match[1]), suffix: match[2] } : { text: value, suffix: '' };
  }

  function layoutPhraseText(segment) {
    const parts = segment.map(lineText).map(clean);
    const suffixes = parts.map(() => '');
    const phraseParts = parts.map((part, index) => {
      const split = splitTrailingMoneySuffix(part);
      suffixes[index] = split.suffix;
      return split.text;
    });
    return {
      sourceText: phraseParts.filter(Boolean).join(' '),
      suffixes,
    };
  }

  function applyLineSuffixes(lines, suffixes) {
    return lines.map((line, index) => (suffixes[index] ? `${line} ${suffixes[index]}` : line));
  }

  function splitLocalizedRevenueShareChange(sourceText, lineCount, language) {
    if (normalizeLanguage(language) !== 'zh' || lineCount !== 2) return null;
    const value = clean(sourceText);
    const match = value.match(/^(\(?\d+(?:\.\d+)?%\)?)\s+of revenue\s+\(([^)]+)\)$/i);
    if (!match) return null;
    const change = translateChange(match[2], language);
    if (change === match[2]) return null;
    return [`占收入 ${match[1]}`, change];
  }

  function localizeLayoutLineAt(lines, index, language) {
    const maxLines = Math.min(4, lines.length - index);
    for (let count = maxLines; count > 1; count -= 1) {
      const segment = lines.slice(index, index + count);
      if (!segment.every(isLocalizableLayoutLine)) continue;
      const rawSourceText = segment.map(lineText).map(clean).filter(Boolean).join(' ');
      const revenueShareChange = splitLocalizedRevenueShareChange(rawSourceText, count, language);
      if (revenueShareChange) {
        return {
          count,
          lines: segment.map((line, offset) => withLineText(line, revenueShareChange[offset])),
        };
      }
      const { sourceText, suffixes } = layoutPhraseText(segment);
      const exact = exactZh(sourceText);
      if (exact == null) continue;
      const localized = splitLocalizedLayoutPhrase(sourceText, exact, count);
      if (!localized) continue;
      const withSuffixes = applyLineSuffixes(localized, suffixes);
      return {
        count,
        lines: segment.map((line, offset) => withLineText(line, withSuffixes[offset])),
      };
    }

    const line = lines[index];
    const text = lineText(line);
    if (text == null || text === '$value') return { count: 1, lines: [line] };
    return { count: 1, lines: [withLineText(line, translateText(text, language))] };
  }

  function localizeLines(lines, language) {
    if (!Array.isArray(lines)) return lines;
    const out = [];
    for (let index = 0; index < lines.length;) {
      const localized = localizeLayoutLineAt(lines, index, language);
      out.push(...localized.lines);
      index += localized.count;
    }
    return out;
  }

  function localizeLayoutLabels(labels, language) {
    if (!labels || typeof labels !== 'object') return;
    Object.keys(labels).forEach((nodeId) => {
      const spec = labels[nodeId];
      (spec.blocks || []).forEach((block) => {
        block.lines = localizeLines(block.lines, language);
      });
    });
  }

  function decodeSvgText(text) {
    return String(text || '').replace(/&(#x?[0-9a-f]+|amp|lt|gt|quot|apos);/gi, (entity, body) => {
      const key = body.toLowerCase();
      if (key === 'amp') return '&';
      if (key === 'lt') return '<';
      if (key === 'gt') return '>';
      if (key === 'quot') return '"';
      if (key === 'apos') return "'";
      const codePoint = key.startsWith('#x') ? parseInt(key.slice(2), 16) : parseInt(key.slice(1), 10);
      return Number.isFinite(codePoint) ? String.fromCodePoint(codePoint) : entity;
    });
  }

  function encodeSvgText(text) {
    return String(text || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function localizeSvgTextRun(text, language) {
    const raw = String(text || '');
    const parts = raw.match(/^(\s*)([\s\S]*?)(\s*)$/);
    const leading = parts?.[1] || '';
    const body = parts?.[2] || '';
    const trailing = parts?.[3] || '';
    const decoded = decodeSvgText(body);
    if (!clean(decoded) || !hasLatinText(decoded)) return raw;
    const localized = translateText(decoded, language);
    return `${leading}${encodeSvgText(localized)}${trailing}`;
  }

  function localizeSvgTextContent(content, language) {
    return String(content || '')
      .split(/(<[^>]+>)/g)
      .map((part) => (part.startsWith('<') && part.endsWith('>') ? part : localizeSvgTextRun(part, language)))
      .join('');
  }

  function localizeAnnotationsSvg(svgText, language) {
    if (typeof svgText !== 'string' || !svgText || normalizeLanguage(language) === DEFAULT_LANGUAGE) return svgText;
    return svgText.replace(/(<text\b[^>]*>)([\s\S]*?)(<\/text>)/gi, (_match, open, body, close) => (
      `${open}${localizeSvgTextContent(body, language)}${close}`
    ));
  }

  function localizeDataset(dataset, language) {
    const code = normalizeLanguage(language);
    if (!dataset || code === DEFAULT_LANGUAGE) return dataset;

    const overlay = validateDatasetOverlay(dataset, dataset.i18n?.[code], code);
    const out = clone(dataset);
    out.name = translateDatasetName(out.name, code);
    if (out.meta) {
      out.meta.title = translateText(out.meta.title, code);
      out.meta.period = translatePeriod(out.meta.period, code);
      out.meta.periodNote = translateText(out.meta.periodNote, code);
    }
    (out.nodes || []).forEach((node) => {
      node.label = localizeLabel(node.label, code);
      node.notes = localizeNotes(node.notes, code);
    });
    (out.nonNodeMetrics || []).forEach((metric) => {
      metric.label = localizeLabel(metric.label, code);
      metric.notes = localizeNotes(metric.notes, code);
    });
    localizeLayoutLabels(out.layout?.labels, code);
    out.annotationsSvg = localizeAnnotationsSvg(out.annotationsSvg, code);
    mergeOverlay(out, overlay);
    validateLocalizedDatasetProjection(dataset, out, code);
    return out;
  }

  function localizeFinancialItem(item, language) {
    if (!item || typeof item !== 'object') return;
    item.label = localizeLabel(item.label, language);
    item.notes = localizeNotes(item.notes, language);
    (item.children || []).forEach((child) => localizeFinancialItem(child, language));
  }

  function localizeFinancialRecord(record, language) {
    const code = normalizeLanguage(language);
    if (!record || code === DEFAULT_LANGUAGE) return record;

    validateFinancialOverlay(record, record.i18n?.[code], code);
    const out = clone(record);
    out.period = translatePeriod(out.period, code);
    out.periodNote = translateText(out.periodNote, code);
    out.revenue.notes = localizeNotes(out.revenue.notes, code);
    (out.revenue.items || []).forEach((item) => localizeFinancialItem(item, code));
    localizeFinancialItem(out.costs.costOfRevenue, code);
    (out.costs.costOfRevenue?.items || []).forEach((item) => localizeFinancialItem(item, code));
    (out.costs.operatingExpenses?.items || []).forEach((item) => localizeFinancialItem(item, code));
    localizeFinancialItem(out.costs.tax, code);
    (out.otherIncome?.items || []).forEach((item) => localizeFinancialItem(item, code));
    (out.otherExpenses?.items || []).forEach((item) => localizeFinancialItem(item, code));
    Object.keys(out.profit || {}).forEach((key) => localizeFinancialItem(out.profit[key], code));
    mergeFinancialOverlay(out, record.i18n?.[code]);
    return out;
  }

  function localizeRevenueMetricRecord(record, language) {
    const code = normalizeLanguage(language);
    if (!record || code === DEFAULT_LANGUAGE) return record;

    validateRevenueMetricOverlay(record, record.i18n?.[code], code);
    const out = clone(record);
    out.displayName = translateText(out.displayName, code);
    out.period = translateText(out.period, code);
    out.periodNote = translateText(out.periodNote, code);
    out.definition = translateText(out.definition, code);
    out.lineage = translateText(out.lineage, code);
    if (out.conditions) {
      Object.keys(out.conditions).forEach((key) => {
        out.conditions[key] = translateText(out.conditions[key], code);
      });
    }
    (out.observations || []).forEach((observation) => {
      observation.notes = localizeNotes(observation.notes, code);
    });
    mergeOverlay(out, record.i18n?.[code]);
    return out;
  }

  function localizeCompanyMetadata(company, language) {
    const code = normalizeLanguage(language);
    if (!company || code === DEFAULT_LANGUAGE) return company;

    validateCompanyOverlay(company, company.i18n?.[code], code);
    const out = clone(company);
    if (SECTOR_ZH[out.sector]) out.sector = SECTOR_ZH[out.sector];
    out.industry = translateIndustry(out.industry, code);
    out.headquarters = translateHeadquarters(out.headquarters, code);
    out.fiscalYearEnd = translateText(out.fiscalYearEnd, code);
    out.description = translateCompanyDescription(out, code, out.industry);
    mergeOverlay(out, company.i18n?.[code]);
    return out;
  }

  global.SANKEY_I18N = {
    defaultLanguage: DEFAULT_LANGUAGE,
    languages: LANGUAGES,
    languageCodes: LANGUAGE_CODES,
    ui: UI,
    normalizeLanguage,
    htmlLang,
    nextLanguage,
    t,
    text: translateText,
    isPreservedTerm,
    label: localizeLabel,
    notes: localizeNotes,
    clone,
    mergeOverlay,
    visibleAmountSignature: visibleAmountSignatureFromTexts,
    canonicalizeAnnotationText,
    localizeDataset,
    localizeFinancialRecord,
    localizeRevenueMetricRecord,
    localizeCompanyMetadata,
  };
})(window);
