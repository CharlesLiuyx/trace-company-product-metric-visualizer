/* Trace viewer · tables.js
 * Table view: per-language row models, column sizing, virtualized table
 * bodies, and scroll-to-active-row behavior. */

const TABLE_COLUMN_SAMPLE_LIMIT = 80;
const TABLE_OVERSCAN_VIEWPORTS = 2;
const TABLE_COLUMN_PRESETS = {
  compact: { min: 54, max: 84, charWidth: 5.8 },
  text: { min: 84, max: 160, charWidth: 5.8 },
  id: { min: 116, max: 176, charWidth: 5.8 },
  money: { min: 86, max: 110, charWidth: 5.8 },
  link: { min: 72, max: 110, charWidth: 5.6 },
  url: { min: 108, max: 170, charWidth: 5.3 },
  wide: { min: 210, max: 330, charWidth: 5.1, wrapFactor: 0.58 },
  description: { min: 230, max: 370, charWidth: 5.1, wrapFactor: 0.48 },
};
const virtualTables = new WeakMap();
let virtualTableFrame = 0;

const tableModelCache = new Map();

function tableColumnPreset(column) {
  if (column.widthPreset && TABLE_COLUMN_PRESETS[column.widthPreset]) return TABLE_COLUMN_PRESETS[column.widthPreset];
  const className = column.className || '';
  if (className.includes('num')) return TABLE_COLUMN_PRESETS.money;
  if (className.includes('wide')) return TABLE_COLUMN_PRESETS.wide;
  if (className.includes('nowrap')) return TABLE_COLUMN_PRESETS.text;
  return TABLE_COLUMN_PRESETS.text;
}
function htmlText(html) {
  const template = document.createElement('template');
  template.innerHTML = String(html || '');
  return clean(template.content.textContent || '');
}
function tableCellText(column, row) {
  if (column.widthValue) return clean(column.widthValue(row));
  if (column.value) return clean(column.value(row));
  if (column.html) return htmlText(column.html(row));
  return '';
}
function estimateColumnWidth(column, rows) {
  const preset = tableColumnPreset(column);
  const texts = [column.label, ...rows.slice(0, TABLE_COLUMN_SAMPLE_LIMIT).map((row) => tableCellText(column, row))];
  const nowrap = (column.className || '').includes('nowrap') || (column.className || '').includes('num');
  const contentChars = texts.reduce((max, text) => {
    const normalized = clean(text);
    if (!normalized) return max;
    if (nowrap) return Math.max(max, Math.min(normalized.length, 34));
    const longestWord = normalized.split(/[\s,;:/()]+/).reduce((wordMax, word) => Math.max(wordMax, word.length), 0);
    const wrappedChars = Math.ceil(Math.min(normalized.length, 86) * (preset.wrapFactor || 0.75));
    return Math.max(max, longestWord, wrappedChars);
  }, 0);
  const labelChars = clean(column.label).length + 2;
  const measured = Math.ceil(Math.max(contentChars, labelChars) * preset.charWidth + 24);
  return clamp(measured, column.minWidth || preset.min, column.maxWidth || preset.max);
}
function tableColumnSizing(columns, rows, targetWidth = 0) {
  const baseWidths = columns.map((column) => estimateColumnWidth(column, rows));
  const baseTotal = baseWidths.reduce((sum, width) => sum + width, 0);
  const targetTotal = Math.max(baseTotal, Math.ceil(targetWidth || 0));
  const extra = Math.max(0, targetTotal - baseTotal);
  const growValues = columns.map((column) => Number.isFinite(column.grow) ? Math.max(0, column.grow) : 0);
  const growTotal = growValues.reduce((sum, value) => sum + value, 0);
  const widths = baseWidths.map((width, index) => {
    if (!extra || !growTotal) return width;
    const grow = growTotal ? growValues[index] : 1;
    const share = growTotal ? grow / growTotal : 1 / columns.length;
    return width + extra * share;
  });
  const total = widths.reduce((sum, width) => sum + width, 0);
  return {
    total,
    cols: widths.map((width) => ({
      width,
      percent: total ? (width / total) * 100 : 100 / columns.length,
    })),
  };
}
function tableHeaderHeight(table) {
  const height = table.tHead?.getBoundingClientRect().height || 0;
  return height || 34;
}
function tableRowHeight(table) {
  const value = Number.parseFloat(getComputedStyle(table).getPropertyValue('--table-row-height'));
  return Number.isFinite(value) && value > 0 ? value : 96;
}
function tableScrollRoot(table) {
  return table?.closest?.('.view-pane') || tableView || content;
}
function tableTopInScrollRoot(table) {
  const scrollRoot = tableScrollRoot(table);
  const rootRect = scrollRoot.getBoundingClientRect();
  return scrollRoot.scrollTop + table.getBoundingClientRect().top - rootRect.top;
}
function tableBodyTopInScrollRoot(table) {
  return tableTopInScrollRoot(table) + tableHeaderHeight(table);
}
function tableCellHtml(column, row) {
  const value = column.html ? column.html(row) : escapeHtml(column.value(row));
  const title = tableCellText(column, row);
  return `<td class="${column.className || ''}"${title ? ` title="${escapeHtml(title)}"` : ''}><div class="cell-content">${value}</div></td>`;
}
function tableRowHtml(columns, row, rowIndex) {
  const cells = columns.map((column) => tableCellHtml(column, row)).join('');
  const attrs = [row.tableAttrs || '', `data-row-index="${rowIndex}"`].filter(Boolean).join(' ');
  return `<tr class="${row.active ? 'active-row' : ''}" ${attrs}>${cells}</tr>`;
}
function virtualRangeFor(table, info, rowHeight, focusIndex = null) {
  const rows = info.rows;
  if (!rows.length) return { start: 0, end: 0 };
  const scrollRoot = tableScrollRoot(table);
  const bufferPx = Math.max(scrollRoot.clientHeight, 1) * TABLE_OVERSCAN_VIEWPORTS;
  if (Number.isInteger(focusIndex) && focusIndex >= 0) {
    const bufferRows = Math.max(1, Math.ceil(bufferPx / rowHeight));
    return {
      start: clamp(focusIndex - bufferRows, 0, rows.length),
      end: clamp(focusIndex + bufferRows + 1, 0, rows.length),
    };
  }
  const bodyTop = tableBodyTopInScrollRoot(table);
  const viewportTop = scrollRoot.scrollTop;
  const viewportBottom = viewportTop + scrollRoot.clientHeight;
  const start = clamp(Math.floor((viewportTop - bufferPx - bodyTop) / rowHeight), 0, rows.length);
  const end = clamp(Math.ceil((viewportBottom + bufferPx - bodyTop) / rowHeight), 0, rows.length);
  return { start, end: Math.max(start, end) };
}
function spacerRow(height, colSpan, position) {
  if (height <= 0) return '';
  return `<tr class="virtual-spacer virtual-spacer-${position}" aria-hidden="true"><td colspan="${colSpan}"><div style="height: ${height}px"></div></td></tr>`;
}
function renderVirtualTableBody(table, force = false, focusIndex = null) {
  const info = virtualTables.get(table);
  const tbody = table.tBodies[0];
  if (!info || !tbody) return;
  const rowHeight = tableRowHeight(table);
  const range = virtualRangeFor(table, info, rowHeight, focusIndex);
  if (!force && info.renderedStart === range.start && info.renderedEnd === range.end && info.rowHeight === rowHeight) return;
  info.renderedStart = range.start;
  info.renderedEnd = range.end;
  info.rowHeight = rowHeight;
  table.dataset.renderedStart = String(range.start);
  table.dataset.renderedEnd = String(range.end);
  table.dataset.totalRows = String(info.rows.length);
  const topHeight = range.start * rowHeight;
  const bottomHeight = Math.max(0, (info.rows.length - range.end) * rowHeight);
  const rowHtml = info.rows
    .slice(range.start, range.end)
    .map((row, offset) => tableRowHtml(info.columns, row, range.start + offset))
    .join('');
  tbody.innerHTML = [
    spacerRow(topHeight, info.columns.length, 'top'),
    rowHtml,
    spacerRow(bottomHeight, info.columns.length, 'bottom'),
  ].join('');
}

function updateVirtualTables(force = false) {
  if (state.viewMode !== 'table') return;
  if (isCompanyInfoMetric()) renderVirtualTableBody(companiesTable, force);
  else if (isRevenueMetric()) renderVirtualTableBody(revenueTable, force);
  else renderVirtualTableBody(statementsTable, force);
}
function requestVirtualTableUpdate() {
  if (virtualTableFrame) return;
  virtualTableFrame = requestAnimationFrame(() => {
    virtualTableFrame = 0;
    updateVirtualTables();
  });
}

function tableModelForLanguage(language = state.language, kind = activeTableKind()) {
  const code = languageCode(language);
  const cacheKey = `${code}:${kind}`;
  if (tableModelCache.has(cacheKey)) return tableModelCache.get(cacheKey);
  const companyRows = (kind === 'company' ? groups : []).map((group) => {
    const sourceMeta = metadataFor(group.company);
    const meta = localizedCompanyRecord(sourceMeta, code);
    const marketCapUsd = marketCapValueUsd(group.company);
    return {
      ...meta,
      company: clean(meta.displayName || meta.name || group.company),
      companyCanonical: group.company,
      marketCap: formatUsdShort(marketCapUsd, code),
      marketCapValueUsd: marketCapUsd ?? '',
      marketCapAsOf: sourceMeta.marketCap?.asOf || '',
      marketCapSourceUrl: sourceMeta.marketCap?.sourceUrl || '',
      latestPeriod: group.latest ? displayPeriod(group.latest, code) : '',
      datasetCount: group.records.length,
      tableAttrs: `data-company-key="${escapeHtml(companyKey(group.company))}"`,
    };
  });
  const statementRows = [...(kind === 'statement' ? records : [])]
    .sort((a, b) => a.company.localeCompare(b.company) || b.sortValue - a.sortValue || a.period.localeCompare(b.period))
    .map((record) => {
      const financial = localizedFinancialRecord(financialFor(record), code);
      return {
        record,
        financial,
        displayCompany: displayCompany(record, code),
        displayPeriod: displayPeriod(record, code),
        displayPeriodNote: displayPeriodNote(record, code),
        revenueTotal: formatAmount(financial, financial?.revenue?.total),
        revenueItems: describeItems(financial?.revenue?.items, financial),
        costOfRevenue: formatAmount(financial, financial?.costs?.costOfRevenue?.value, true),
        grossProfit: formatAmount(financial, financial?.profit?.gross?.value),
        operatingExpenses: formatAmount(financial, financial?.costs?.operatingExpenses?.total, true),
        operatingExpenseItems: describeItems(financial?.costs?.operatingExpenses?.items, financial),
        operatingProfit: formatAmount(financial, financial?.profit?.operating?.value),
        otherIncome: formatAmount(financial, financial?.otherIncome?.total || 0),
        tax: formatAmount(financial, financial?.costs?.tax?.value, true),
        netProfit: formatAmount(financial, financial?.profit?.net?.value),
        sourceImage: financial?.sourceImage || '',
        tableAttrs: `data-dataset-key="${escapeHtml(record.dataset.key)}"`,
      };
    });
  const revenueRows = [...(kind === 'revenue' ? revenueRecords : [])]
    .sort((a, b) => a.company.localeCompare(b.company) || b.sortValue - a.sortValue || a.period.localeCompare(b.period))
    .flatMap((record) => {
      const metric = localizedRevenueRecord(record.metric, code) || record.metric;
      const observations = [...(metric.observations || [])].sort((a, b) => Date.parse(`${b.date}T00:00:00Z`) - Date.parse(`${a.date}T00:00:00Z`));
      return observations.map((observation) => ({
        record,
        metric,
        observation,
        displayCompany: displayCompanyName(record.company, code),
        displayMetric: clean(metric.displayName || record.label),
        displayPeriod: clean(metric.period || record.period),
        displayPeriodNote: clean(metric.periodNote || record.periodNote),
        displayDate: formatMetricDate(observation.date, code),
        revenueValue: formatRevenueValue(metric, observation.value),
        momGrowth: observation.momGrowthPct == null ? '' : formatPercent(observation.momGrowthPct),
        notes: notesText(observation.notes),
        definition: clean(metric.definition),
        sourceImage: sourceImageForRevenueMetric(metric),
        sourceUrls: (metric.sources || []).map((source) => source.url).filter(Boolean),
        tableAttrs: `data-revenue-key="${escapeHtml(metric.key)}" data-revenue-date="${escapeHtml(observation.date)}"`,
      }));
    });
  const model = { companyRows, statementRows, revenueRows };
  tableModelCache.set(cacheKey, model);
  return model;
}
function companyRows() {
  const rowByCompany = new Map(tableModelForLanguage(state.language, 'company').companyRows.map((row) => [row.companyCanonical, row]));
  const scope = selectedCompanySet();
  const sourceGroups = state.multiCompanyMode ? groups.filter((group) => scope.has(group.company)) : groups;
  return sortedCompanyGroups(sourceGroups).map((group) => {
    const row = rowByCompany.get(group.company) || { company: displayCompanyForGroup(group), companyCanonical: group.company };
    return {
      ...row,
      active: state.multiCompanyMode ? scope.has(row.companyCanonical) : row.companyCanonical === state.company,
    };
  });
}
function statementRows() {
  const scope = selectedCompanySet();
  const periodScope = new Set(isMultiPeriodScope() ? state.selectedPeriodIndexes : []);
  return tableModelForLanguage(state.language, 'statement').statementRows
    .filter((row) => !state.multiCompanyMode || scope.has(row.record.company))
    .map((row) => ({
      ...row,
      active: periodScope.size
        ? periodScope.has(row.record.index)
        : state.multiCompanyMode
          ? companyActiveIndex(row.record.company) === row.record.index
          : row.record.index === state.activeIndex,
    }));
}
function revenueRows() {
  const scope = selectedCompanySet();
  return tableModelForLanguage(state.language, 'revenue').revenueRows
    .filter((row) => !state.multiCompanyMode || scope.has(row.record.company))
    .map((row) => ({
      ...row,
      active: state.multiCompanyMode ? scope.has(row.record.company) : row.record.company === state.company,
    }));
}

function renderDataTable(table, columns, rows, emptyText, targetWidth = 0) {
  table.className = 'data-table';
  const sizing = tableColumnSizing(columns, rows, targetWidth);
  table.style.setProperty('--table-min-width', `${sizing.total}px`);
  table.closest('.table-wrap')?.style.setProperty('--table-min-width', `${sizing.total}px`);
  const colgroup = `<colgroup>${sizing.cols.map((col) => `<col style="width: ${col.percent.toFixed(4)}%">`).join('')}</colgroup>`;
  const head = columns.map((column) => `<th class="${column.className || ''}">${escapeHtml(column.label)}</th>`).join('');
  if (!rows.length) {
    virtualTables.delete(table);
    table.innerHTML = `${colgroup}<thead><tr>${head}</tr></thead><tbody><tr><td colspan="${columns.length}"><div class="table-empty">${escapeHtml(emptyText)}</div></td></tr></tbody>`;
    return;
  }
  table.innerHTML = `${colgroup}<thead><tr>${head}</tr></thead><tbody></tbody>`;
  virtualTables.set(table, {
    columns,
    rows,
    renderedStart: -1,
    renderedEnd: -1,
    rowHeight: 0,
  });
  renderVirtualTableBody(table, true);
}
function renderTables() {
  const kind = activeTableKind();
  if (!runtimeData.ready({ family: kind })) return;
  const companies = kind === 'company' ? companyRows() : [];
  const statements = kind === 'statement' ? statementRows() : [];
  const revenue = kind === 'revenue' ? revenueRows() : [];
  const companyColumns = [
    { label: t('tableCompany'), className: 'nowrap', widthPreset: 'text', maxWidth: 118, grow: 0, value: (row) => row.company },
    { label: t('tableLegalName'), className: 'nowrap', widthPreset: 'text', minWidth: 116, maxWidth: 150, grow: 0, value: (row) => row.legalName },
    { label: t('tableTicker'), className: 'nowrap', widthPreset: 'compact', minWidth: 92, maxWidth: 108, grow: 0, value: (row) => [row.exchange, row.ticker].filter(Boolean).join(': ') },
    { label: t('tableMarketCap'), className: 'num', widthPreset: 'money', minWidth: 86, maxWidth: 98, grow: 0, value: (row) => row.marketCap },
    { label: t('tableSector'), className: 'nowrap', widthPreset: 'text', minWidth: 108, maxWidth: 126, grow: 0, value: (row) => row.sector },
    { label: t('tableIndustry'), className: 'nowrap', widthPreset: 'text', minWidth: 132, maxWidth: 160, grow: 0, value: (row) => row.industry },
    { label: t('tableFounded'), className: 'nowrap', widthPreset: 'compact', minWidth: 76, maxWidth: 80, grow: 0, value: (row) => row.founded },
    { label: t('tableHeadquarters'), className: 'nowrap', widthPreset: 'text', minWidth: 138, maxWidth: 158, grow: 0, value: (row) => row.headquarters },
    { label: t('tableFiscalYearEnd'), className: 'nowrap', widthPreset: 'compact', minWidth: 86, maxWidth: 94, grow: 0, value: (row) => row.fiscalYearEnd },
    { label: t('tableDatasets'), className: 'num', widthPreset: 'compact', minWidth: 70, maxWidth: 76, grow: 0, value: (row) => row.datasetCount },
    { label: t('tableLatest'), className: 'nowrap', widthPreset: 'compact', minWidth: 72, maxWidth: 78, grow: 0, value: (row) => row.latestPeriod },
    { label: t('tableWebsite'), className: 'nowrap', widthPreset: 'url', minWidth: 112, maxWidth: 132, grow: 0, html: (row) => websiteHtml(row.website) },
    { label: t('tableDescription'), className: 'wide', widthPreset: 'description', maxWidth: 330, grow: 1, value: (row) => row.description },
    { label: t('tableSources'), className: 'nowrap', widthPreset: 'link', minWidth: 78, maxWidth: 86, grow: 0, html: (row) => linksHtml(row.sourceUrls) },
  ];
  const statementColumns = [
    { label: t('tableDataset'), className: 'nowrap', widthPreset: 'id', maxWidth: 160, grow: 0.35, value: (row) => row.record.dataset.key },
    { label: t('tableCompany'), className: 'nowrap', widthPreset: 'text', maxWidth: 150, grow: 0.6, value: (row) => row.displayCompany },
    { label: t('tablePeriod'), className: 'nowrap', widthPreset: 'compact', maxWidth: 98, grow: 0.05, value: (row) => row.displayPeriod },
    { label: t('tablePeriodEnd'), className: 'nowrap', widthPreset: 'compact', minWidth: 86, maxWidth: 126, grow: 0.1, value: (row) => row.displayPeriodNote },
    { label: t('tableRevenue'), className: 'num', widthPreset: 'money', maxWidth: 106, grow: 0, value: (row) => row.revenueTotal },
    { label: t('tableRevenueItems'), className: 'wide', widthPreset: 'wide', maxWidth: 340, grow: 2, value: (row) => row.revenueItems },
    { label: t('tableCostOfRevenue'), className: 'num', widthPreset: 'money', maxWidth: 112, grow: 0, value: (row) => row.costOfRevenue },
    { label: t('tableGrossProfit'), className: 'num', widthPreset: 'money', maxWidth: 108, grow: 0, value: (row) => row.grossProfit },
    { label: t('tableOperatingExpenses'), className: 'num', widthPreset: 'money', maxWidth: 114, grow: 0, value: (row) => row.operatingExpenses },
    { label: t('tableOpexItems'), className: 'wide', widthPreset: 'wide', maxWidth: 330, grow: 2, value: (row) => row.operatingExpenseItems },
    { label: t('tableOperatingProfit'), className: 'num', widthPreset: 'money', maxWidth: 112, grow: 0, value: (row) => row.operatingProfit },
    { label: t('tableOtherIncome'), className: 'num', widthPreset: 'money', maxWidth: 108, grow: 0, value: (row) => row.otherIncome },
    { label: t('tableTax'), className: 'num', widthPreset: 'money', maxWidth: 98, grow: 0, value: (row) => row.tax },
    { label: t('tableNetProfit'), className: 'num', widthPreset: 'money', maxWidth: 104, grow: 0, value: (row) => row.netProfit },
    { label: t('tableSourceImage'), className: 'nowrap', widthPreset: 'id', maxWidth: 150, grow: 0.1, value: (row) => row.sourceImage },
  ];
  const revenueColumns = [
    { label: t('tableMetric'), className: 'nowrap', widthPreset: 'id', maxWidth: 190, grow: 0.3, value: (row) => row.record.metric.key },
    { label: t('tableCompany'), className: 'nowrap', widthPreset: 'text', maxWidth: 120, grow: 0.2, value: (row) => row.displayCompany },
    { label: t('tableDate'), className: 'nowrap', widthPreset: 'compact', minWidth: 90, maxWidth: 112, grow: 0, value: (row) => row.displayDate },
    { label: t('tableAnnualizedRevenue'), className: 'num', widthPreset: 'money', minWidth: 118, maxWidth: 136, grow: 0, value: (row) => row.revenueValue },
    { label: t('tableMomGrowth'), className: 'num', widthPreset: 'compact', minWidth: 86, maxWidth: 98, grow: 0, value: (row) => row.momGrowth },
    { label: t('tableNotes'), className: 'wide', widthPreset: 'description', maxWidth: 320, grow: 1, value: (row) => row.notes },
    { label: t('tablePeriod'), className: 'nowrap', widthPreset: 'text', maxWidth: 130, grow: 0.2, value: (row) => row.displayPeriod },
    { label: t('tableDefinition'), className: 'wide', widthPreset: 'description', maxWidth: 360, grow: 1.4, value: (row) => row.definition },
    { label: t('tableSources'), className: 'nowrap', widthPreset: 'link', minWidth: 78, maxWidth: 86, grow: 0, html: (row) => linksHtml(row.sourceUrls) },
    { label: t('tableSourceImage'), className: 'nowrap', widthPreset: 'id', maxWidth: 180, grow: 0.1, value: (row) => row.sourceImage },
  ];
  companiesTableCount.textContent = countText('companiesCountOne', 'companiesCountMany', companies.length);
  statementsTableCount.textContent = countText('statementsCountOne', 'statementsCountMany', statements.length);
  revenueTableCount.textContent = countText('revenueRowsCountOne', 'revenueRowsCountMany', revenue.length);
  if (kind === 'company') renderDataTable(companiesTable, companyColumns, companies, t('noCompaniesRegistered'), content.clientWidth);
  if (kind === 'statement') renderDataTable(statementsTable, statementColumns, statements, t('noIncomeStatementsRegistered'), content.clientWidth);
  if (kind === 'revenue') renderDataTable(revenueTable, revenueColumns, revenue, t('noRevenueMetricsRegistered'), content.clientWidth);
}

function virtualTableTarget(kind) {
  const table = kind === 'company' ? companiesTable : kind === 'revenue' ? revenueTable : statementsTable;
  const info = virtualTables.get(table);
  if (!info) return null;
  if (kind === 'company') {
    const key = companyKey(state.company);
    const index = info.rows.findIndex((row) => companyKey(row.companyCanonical || row.company) === key);
    return index >= 0 ? { table, info, index } : null;
  }
  if (kind === 'revenue') {
    const index = info.rows.findIndex((row) => row.record?.company === state.company);
    return index >= 0 ? { table, info, index } : null;
  }
  const key = currentRecord()?.dataset?.key;
  if (!key) return null;
  const index = info.rows.findIndex((row) => row.record?.dataset?.key === key);
  return index >= 0 ? { table, info, index } : null;
}
function fastScrollTo(top, duration = 90, scrollRoot = tableView) {
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
      const targetInfo = virtualTableTarget(kind);
      if (!targetInfo) {
        updateVirtualTables(true);
        return;
      }
      renderVirtualTableBody(targetInfo.table, true, targetInfo.index);
      const scrollRoot = tableScrollRoot(targetInfo.table);
      const rowTop = tableBodyTopInScrollRoot(targetInfo.table) + targetInfo.index * tableRowHeight(targetInfo.table);
      fastScrollTo(rowTop - tableHeaderHeight(targetInfo.table) - 8, 90, scrollRoot);
      setTimeout(requestVirtualTableUpdate, 120);
    });
  });
}

tableView.addEventListener('scroll', requestVirtualTableUpdate, { passive: true });
