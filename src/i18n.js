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
      if (Array.isArray(prev) && next && typeof next === 'object' && !Array.isArray(next) && key === 'nodes') {
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
    localizeLayoutLabels(out.layout?.labels, code);
    out.annotationsSvg = localizeAnnotationsSvg(out.annotationsSvg, code);
    mergeOverlay(out, dataset.i18n?.[code]);
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
    mergeOverlay(out, record.i18n?.[code]);
    return out;
  }

  function localizeRevenueMetricRecord(record, language) {
    const code = normalizeLanguage(language);
    if (!record || code === DEFAULT_LANGUAGE) return record;

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
    localizeDataset,
    localizeFinancialRecord,
    localizeRevenueMetricRecord,
    localizeCompanyMetadata,
  };
})(window);
