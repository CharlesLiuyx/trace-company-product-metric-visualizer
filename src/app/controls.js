/* Trace viewer · controls.js
 * Metric/view segmented controls, mode switching, metric-company
 * reconciliation, the actionbar summary, and renderAll(). */

function renderActiveSummary() {
  const record = currentRecord();
  actionTitle.removeAttribute('title');
  if (isMultiCompanyScope()) {
    const count = scopeCompanies().length;
    if (isCompanyInfoMetric()) {
      actionTitle.textContent = [t('metricCompanyInfo'), t('comparisonScopeSummary', { count })].join(' · ');
      return;
    }
    if (isRevenueMetric()) {
      const rows = scopeCompanies()
        .flatMap((company) => revenueRecordsForCompany(company))
        .filter((revenueRecord) => finiteNumber(revenueRecord?.latestObservation?.value) != null)
        .map((revenueRecord) => ({
          value: revenueRecord.latestObservation.value,
          currency: revenueRecord.metric?.currency,
          unit: revenueRecord.metric?.unit,
          company: displayCompanyName(revenueRecord.company),
        }));
      const usd = sumUsdRows(rows);
      if (usd.converted || usd.excluded.length) actionTitle.title = fxTooltip(usd.excluded);
      actionTitle.textContent = [
        t('metricRevenue'),
        t('comparisonScopeSummary', { count }),
        usd.total || usd.excluded.length ? formatUsdTotal(usd) : '',
      ].filter(Boolean).join(' · ');
      return;
    }
    const revenueInfo = scopeFinancialTotalInfo('revenue');
    const netProfitInfo = scopeFinancialTotalInfo('netProfit');
    const fx = scopeFxState([revenueInfo, netProfitInfo]);
    if (fx.active) actionTitle.title = fxTooltip(fx.excluded);
    actionTitle.textContent = [
      t('metricIncomeStatement'),
      t('comparisonScopeSummary', { count }),
      `${t('tableRevenue')} ${revenueInfo?.text || ''}`,
      `${t('tableNetProfit')} ${netProfitInfo?.text || ''}`,
      fx.active ? t('fxConvertedNote', { asOf: USD_FX_SNAPSHOT.asOf }) : '',
    ].filter(Boolean).join(' · ');
    return;
  }
  if (isMultiPeriodScope()) {
    const periodRecords = selectedPeriodRecords();
    const chronological = [...periodRecords].sort((a, b) => a.sortValue - b.sortValue);
    const range = [...new Set([chronological[0], chronological[chronological.length - 1]]
      .map((item) => displayPeriod(item))
      .filter(Boolean))];
    actionTitle.textContent = [
      displayCompanyName(state.company),
      t('comparisonPeriodScopeSummary', { count: periodRecords.length }),
      range.join(' → '),
    ].filter(Boolean).join(' · ');
    return;
  }
  if (isCompanyInfoMetric()) {
    actionTitle.textContent = [t('metricCompanyInfo'), displayCompanyName(state.company)].filter(Boolean).join(' · ');
    return;
  }
  if (isRevenueMetric()) {
    const group = groupFor(state.company);
    const latest = group?.latestRevenueRecord;
    const value = latest?.latestObservation ? formatRevenueValue(latest.metric, latest.latestObservation.value) : '';
    actionTitle.textContent = [t('metricRevenue'), displayCompanyName(state.company), value].filter(Boolean).join(' · ');
    return;
  }
  actionTitle.textContent = record
    ? [displayCompany(record), [displayPeriod(record), displayPeriodNote(record)].filter(Boolean).join(' - ')].filter(Boolean).join(' · ')
    : t('noDataPointSelected');
}

function renderAll() {
  syncMetricModeControls();
  syncPeriodExpansionControls();
  syncViewModeControls();
  renderActiveSummary();
  renderCompanies();
  if (isIncomeStatementMetric()) renderPeriods();
  if (state.viewMode === 'table') renderTables();
  syncToolbarHeight();
  requestAnimationFrame(updatePeriodScrollIndicator);
}
function renderMetricModeButtons(availableModes) {
  metricMode.innerHTML = availableModes.map((mode) => {
    const active = mode === state.metricMode;
    const label = t(METRIC_MODE_LABEL_KEYS[mode] || mode);
    return `
      <button
        data-metric="${escapeHtml(mode)}"
        type="button"
        class="${active ? 'active' : ''}"
        aria-pressed="${active ? 'true' : 'false'}"
      >${escapeHtml(label)}</button>
    `;
  }).join('');
}
function syncMetricModeControls() {
  if (!METRIC_MODES.includes(state.metricMode)) state.metricMode = 'incomeStatement';
  state.metricMode = normalizeMetricModeForScope(state.metricMode);
  syncMetricCompanySelection();
  state.metricMode = normalizeMetricModeForScope(state.metricMode);
  state.viewMode = normalizeViewModeForMetric(state.metricMode, state.viewMode);
  app.classList.toggle('metric-company-info', isCompanyInfoMetric());
  app.classList.toggle('metric-income-statement', isIncomeStatementMetric());
  app.classList.toggle('metric-revenue', isRevenueMetric());
  periodSection.hidden = !isIncomeStatementMetric();
  renderMetricModeButtons(metricModesForScope());
}
function syncViewModeControls() {
  state.viewMode = normalizeViewModeForMetric(state.metricMode, state.viewMode);
  const isSankey = isIncomeStatementMetric() && state.viewMode === 'sankey';
  const isTrend = isRevenueMetric() && state.viewMode === 'trend';
  const isTable = state.viewMode === 'table';
  sankeyView.hidden = !isSankey;
  trendView.hidden = !isTrend;
  tableView.hidden = !isTable;
  companiesTableSection.hidden = !(isTable && isCompanyInfoMetric());
  statementsTableSection.hidden = !(isTable && isIncomeStatementMetric());
  revenueTableSection.hidden = !(isTable && isRevenueMetric());
  sankeyActions.hidden = !isSankey;
  tableActions.hidden = !isTable;
  companiesCsvBtn.hidden = !isTable || !isCompanyInfoMetric();
  statementsCsvBtn.hidden = !isTable || !isIncomeStatementMetric();
  revenueCsvBtn.hidden = !isTable || !isRevenueMetric();
  const allowedViews = allowedViewModesForMetric(state.metricMode);
  [...viewMode.querySelectorAll('button')].forEach((button) => {
    const allowed = allowedViews.includes(button.dataset.view);
    const active = allowed && button.dataset.view === state.viewMode;
    button.hidden = !allowed;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', active ? 'true' : 'false');
  });
  syncToolbarHeight();
}
function setViewMode(mode, persist = true) {
  mode = normalizeViewModeForMetric(state.metricMode, mode);
  if (state.viewMode === mode) {
    if (mode === 'table') scrollActiveTableRow(activeTableKind());
    return;
  }
  state.viewMode = mode;
  if (persist) writeStoredValue(VIEW_MODE_KEY, mode);
  renderAll();
  draw({ renderTable: false, syncView: false });
  if (mode === 'table') scrollActiveTableRow(activeTableKind());
}
function setMetricMode(mode, persist = true) {
  if (!METRIC_MODES.includes(mode)) return;
  if (!metricModesForScope().includes(mode)) return;
  if (state.metricMode === mode) {
    if (state.viewMode === 'table') scrollActiveTableRow(activeTableKind());
    return;
  }
  state.metricMode = mode;
  state.viewMode = defaultViewModeForMetric(mode);
  syncMetricCompanySelection();
  if (persist) {
    writeStoredValue(METRIC_MODE_KEY, mode);
    writeStoredValue(VIEW_MODE_KEY, state.viewMode);
  }
  renderAll();
  draw({ renderTable: false, syncView: false });
  if (state.viewMode === 'table') scrollActiveTableRow(activeTableKind());
}

function syncMetricCompanySelection() {
  const modeGroups = currentCompanyGroups();
  if (!modeGroups.length) return;
  if (!state.multiCompanyMode) syncSingleCompanyScope();
  const targetCompany = state.multiCompanyMode ? primaryCompanyForMetric(state.metricMode) : state.company;
  const group = metricGroupForCompany(targetCompany, state.metricMode) || modeGroups[0];
  state.company = group.company;
  if (!state.multiCompanyMode) syncSingleCompanyScope();
  else setSelectedCompanies(state.selectedCompanies);
  if (isIncomeStatementMetric()) {
    const current = recordByIndex(state.activeIndex);
    if (current && current.company === group.company) return;
    const next = defaultRecordForCompanyMetric(group.company, 'incomeStatement');
    if (next) {
      state.activeIndex = next.index;
      setCompanyActiveRecord(next);
    }
  } else if (isCompanyInfoMetric() && group.records?.[0]) {
    const current = recordByIndex(state.activeIndex);
    if (current && current.company === group.company) return;
    state.activeIndex = group.records[0].index;
    setCompanyActiveRecord(group.records[0]);
  }
}

metricMode.addEventListener('click', (e) => {
  const button = e.target.closest('button');
  if (!button) return;
  setMetricMode(button.dataset.metric);
});
viewMode.addEventListener('click', (e) => {
  const button = e.target.closest('button');
  if (!button) return;
  setViewMode(button.dataset.view);
});
