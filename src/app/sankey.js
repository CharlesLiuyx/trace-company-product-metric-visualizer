/* Trace viewer · sankey.js
 * Sankey view: chart sizing, USD-normalized comparison scaling, the
 * comparison grid render, and the top-level draw() dispatcher. */

/* Canvas sizing comes from the engine's own config merge
 * (SankeyEngine.helpers.canvasSize), so card geometry follows the exact
 * precedence render() applies: explicit render.width/height, then
 * meta.referenceImage dimensions, then the engine DEFAULTS canvas. */
function chartWidth(d) {
  return window.SankeyEngine.helpers.canvasSize(d).width;
}
function chartHeight(d) {
  return window.SankeyEngine.helpers.canvasSize(d).height;
}
function clearSingleChart() {
  chartHost?.replaceChildren();
}
function clearSankeyComparison() {
  destroyComparisonMetricTrendChart();
  if (sankeyComparison) sankeyComparison.replaceChildren();
}
function nodeLabelText(node) {
  return labelText(node?.label).toLowerCase();
}
function revenueNodeForDataset(dataset) {
  return (dataset?.nodes || []).find((node) => node.id === 'revenue')
    || (dataset?.nodes || []).find((node) => node.type === 'hub' && /^(revenue|sales|net sales)$/i.test(nodeLabelText(node)))
    || (dataset?.nodes || []).find((node) => node.type === 'hub');
}
function fixedNodeHeight(dataset, node) {
  const spec = node?.id ? dataset?.layout?.nodes?.[node.id] : null;
  return finiteNumber(spec?.height);
}
function pxPerDatasetValue(dataset) {
  const authoredScale = finiteNumber(dataset?.layout?.scale);
  if (authoredScale != null) return authoredScale;
  const node = revenueNodeForDataset(dataset);
  const height = fixedNodeHeight(dataset, node);
  const value = finiteNumber(node?.value);
  return height != null && value ? height / value : null;
}
function pxPerUsdForDataset(dataset) {
  const pxPerValue = pxPerDatasetValue(dataset);
  // meta.currency mirrors the source image and may be blank (e.g. bare numbers
  // with an "in RMB" note); the SSOT record carries the reporting currency.
  const financial = dataset?.key ? financialRecordByKey.get(dataset.key) : null;
  const usdPerValue = financial
    ? amountValueUsd(1, financial.currency, financial.unit)
    : amountValueUsd(1, dataset?.meta?.currency, dataset?.meta?.unit);
  if (pxPerValue == null || usdPerValue == null || usdPerValue === 0) return null;
  return pxPerValue / usdPerValue;
}
function comparisonScaleFactors(records) {
  const entries = records
    .map((record) => {
      const dataset = localizedDataset(record.dataset);
      return { key: record.dataset.key, pxPerUsd: pxPerUsdForDataset(dataset) };
    })
    .filter((entry) => entry.pxPerUsd != null && entry.pxPerUsd > 0);
  if (!entries.length) return new Map();
  const common = Math.min(...entries.map((entry) => entry.pxPerUsd));
  return new Map(entries.map((entry) => [entry.key, common / entry.pxPerUsd]));
}
function comparisonColumnCount(count) {
  const viewport = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  if (viewport <= 900) return 1;
  if (viewport <= 1100 && (count === 3 || count >= 5)) return 2;
  if (count <= 1) return 1;
  if (count === 2) return 2;
  if (count === 3) return 3;
  if (count === 4) return 2;
  return 3;
}
function comparisonAvailableWidth() {
  return Math.max(1, (sankeyView?.clientWidth || content?.clientWidth || window.innerWidth || 1) - 20);
}
function comparisonFitFactor(records, scaleFactors) {
  const columns = comparisonColumnCount(Math.max(records.length, 1));
  const availableWidth = comparisonAvailableWidth();
  const gap = COMPARISON_FLOW_GAP;
  const widths = records.map((record) => {
    const dataset = localizedDataset(record.dataset);
    const scale = scaleFactors.get(record.dataset.key) || 1;
    return Math.max(1, chartWidth(dataset) * scale);
  });
  // pack `columns` charts per row at their USD-normalized widths; the widest
  // packed row pins the shared factor so every row fits the canvas
  const cardEdge = 2; // 1px card border on each side sits outside the chart
  let factor = 1;
  for (let start = 0; start < widths.length; start += columns) {
    const row = widths.slice(start, start + columns);
    const rowWidth = row.reduce((sum, width) => sum + width, 0);
    factor = Math.min(factor, (availableWidth - gap * (row.length - 1) - cardEdge * row.length) / rowWidth);
  }
  return factor;
}
// memo skips the all-card class sweep while the linked scope is unchanged
// (trend-bar sweeps re-assert the same period many times per second); card
// rebuilds land on updateComparisonMetricTrendPanel, which re-arms it via
// the no-arg call
let comparisonPeriodHoverLinkKey = '';
function setComparisonPeriodHoverLink(indexes = []) {
  if (!sankeyComparison) return;
  const key = indexes.join(',');
  if (key === comparisonPeriodHoverLinkKey) return;
  comparisonPeriodHoverLinkKey = key;
  const scope = new Set(indexes.map(Number));
  sankeyComparison.querySelectorAll('.comparison-card[data-record-index]').forEach((card) => {
    card.classList.toggle('hover-linked', scope.has(Number(card.dataset.recordIndex)));
  });
}

function renderSankeyComparison() {
  if (!sankeyComparison) return;
  const recordsForCompanies = isMultiPeriodScope()
    ? selectedPeriodRecords().map((record) => ({ company: record.company, record }))
    : scopeCompanies().map((company) => ({
        company,
        record: defaultRecordForCompanyMetric(company, 'incomeStatement'),
      }));
  const recordsWithData = recordsForCompanies.map((item) => item.record).filter(Boolean);
  const scaleFactors = comparisonScaleFactors(recordsWithData);
  const fitFactor = comparisonFitFactor(recordsWithData, scaleFactors);
  const minScale = recordsWithData.reduce((min, record) => {
    const scale = (scaleFactors.get(record.dataset.key) || 1) * fitFactor;
    return Math.min(min, scale);
  }, Infinity);
  comparisonZoomMax = Number.isFinite(minScale) && minScale > 0
    ? Math.max(COMPARISON_ZOOM_MIN, 1 / minScale)
    : COMPARISON_ZOOM_MIN;
  // the flow is rebuilt below, so a pending gesture preview must not commit
  // against the stale geometry, and in-flight bitmap proxies must not attach
  cancelComparisonZoomGesture();
  comparisonProxyGeneration += 1;
  destroyComparisonMetricTrendChart();
  sankeyComparison.innerHTML = '';

  const grid = document.createElement('div');
  grid.className = 'comparison-flow';
  grid.dataset.baseContentWidth = String(comparisonAvailableWidth());
  sankeyComparison.appendChild(grid);

  recordsForCompanies.forEach(({ company, record }) => {
    const card = document.createElement('section');
    card.className = 'comparison-card';
    if (!record) {
      card.classList.add('empty');
      card.innerHTML = `
        <div class="comparison-card-header">
          <strong>${escapeHtml(displayCompanyName(company))}</strong>
          <span>${escapeHtml(t('comparisonNoData'))}</span>
        </div>
      `;
      grid.appendChild(card);
      return;
    }

    const dataset = localizedDataset(record.dataset);
    const width = chartWidth(dataset);
    const scale = (scaleFactors.get(record.dataset.key) || 1) * fitFactor;
    card.dataset.recordIndex = String(record.index);
    card.innerHTML = `
      <div class="comparison-chart-frame">
        <div class="comparison-chart-host"></div>
      </div>
    `;
    const frame = card.querySelector('.comparison-chart-frame');
    const host = card.querySelector('.comparison-chart-host');
    frame.style.maxWidth = '100%';
    host.dataset.baseWidth = String(Math.max(1, width * scale));
    host.dataset.datasetKey = record.dataset.key;
    host.dataset.scaleFactor = String(scale);
    grid.appendChild(card);
    window.SankeyEngine.render(host, dataset);
    host.addEventListener('mousedown', (event) => {
      const target = event.target instanceof Element ? event.target : null;
      if (!target || !hotkeyClickExtendsSelection(event)) return;
      if (target.closest('[data-node]') || target.closest('path.sankey-link')) event.preventDefault();
    });
    host.addEventListener('click', (event) => {
      const target = event.target instanceof Element ? event.target : null;
      if (!target) return;
      const nodeTarget = target.closest('[data-node]');
      if (nodeTarget) {
        toggleComparisonMetricTrend(record, nodeTarget.getAttribute('data-node'), event);
        return;
      }
      const linkTarget = target.closest('path.sankey-link');
      if (linkTarget) {
        toggleComparisonMetricTrendLink(record, linkTarget.getAttribute('data-source'), linkTarget.getAttribute('data-target'), event);
      }
    });
  });
  updateComparisonMetricTrendPanel(recordsForCompanies.map((item) => item.record).filter(Boolean));
  applyComparisonZoom();
  scheduleIdleTask(buildComparisonZoomProxies);
}
/* Adapter keys the sankey view needs fully loaded before it can draw. The
 * comparison flow includes every period of each scoped company because the
 * metric-trend panel charts node/link values across periods. */
function sankeyDrawDatasetKeys(compare) {
  if (!compare) return [currentRecord()?.dataset?.key].filter(Boolean);
  const scopedRecords = isMultiPeriodScope()
    ? selectedPeriodRecords()
    : scopeCompanies().map((company) => defaultRecordForCompanyMetric(company, 'incomeStatement')).filter(Boolean);
  const keys = new Set(scopedRecords.map((record) => record.dataset.key));
  for (const company of new Set(scopedRecords.map((record) => record.company))) {
    const group = metricGroupForCompany(company, 'incomeStatement');
    (group?.records || []).forEach((record) => keys.add(record.dataset.key));
  }
  return [...keys];
}
let sankeyDrawGeneration = 0;
/* Async loads usually resolve well below the ~200ms perception threshold
 * (preloaded, prefetched, or cached adapters), so the loading placeholder
 * only renders when a load is genuinely slow. Below the delay the previous
 * content simply swaps to the new chart with no visible loading state. */
const LOADING_INDICATOR_DELAY_MS = 200;
function deferLoadingIndicator(drawGeneration, render) {
  const timer = window.setTimeout(() => {
    if (drawGeneration === sankeyDrawGeneration) render();
  }, LOADING_INDICATOR_DELAY_MS);
  return () => window.clearTimeout(timer);
}
function renderSankeyLoading(compare) {
  const message = `<div class="chart-loading" role="status">${escapeHtml(t('datasetLoading'))}</div>`;
  if (singleChartCard) singleChartCard.hidden = compare;
  if (sankeyComparison) sankeyComparison.hidden = !compare;
  if (compare) {
    clearSingleChart();
    clearSankeyComparison();
    if (sankeyComparison) sankeyComparison.innerHTML = message;
  } else {
    clearSankeyComparison();
    if (chartHost) chartHost.innerHTML = message;
  }
  svgBtn.disabled = true;
  pngBtn.disabled = true;
}
function renderSankeyLoadError(compare) {
  const message = `
    <div class="chart-loading chart-loading-error" role="alert">
      <span>${escapeHtml(t('datasetLoadError'))}</span>
      <button class="btn" type="button">${escapeHtml(t('datasetLoadRetry'))}</button>
    </div>
  `;
  if (singleChartCard) singleChartCard.hidden = compare;
  if (sankeyComparison) sankeyComparison.hidden = !compare;
  if (compare) {
    clearSingleChart();
    clearSankeyComparison();
    if (sankeyComparison) sankeyComparison.innerHTML = message;
  } else {
    clearSankeyComparison();
    if (chartHost) chartHost.innerHTML = message;
  }
  const host = compare ? sankeyComparison : chartHost;
  host?.querySelector('button')?.addEventListener('click', () => {
    draw({ renderTable: false, syncView: false });
  }, { once: true });
  svgBtn.disabled = true;
  pngBtn.disabled = true;
}
function draw({ renderTable = true, syncView = true } = {}) {
  if (syncView) syncViewModeControls();
  if (!comparisonZoomActive()) {
    cancelComparisonZoomGesture();
    applyComparisonZoom();
  }
  // any in-flight deferred draw is superseded by this call
  const drawGeneration = ++sankeyDrawGeneration;
  if (state.viewMode === 'table') {
    clearSingleChart();
    clearSankeyComparison();
    if (renderTable) renderTables();
    svgBtn.disabled = true;
    pngBtn.disabled = true;
    return;
  }
  if (state.viewMode === 'trend') {
    clearSingleChart();
    clearSankeyComparison();
    if (!window.Chart) {
      const cancelIndicator = deferLoadingIndicator(drawGeneration, () => renderChartRuntimeState('loading'));
      viewRuntimeLoader.ensureChart()
        .then(() => {
          cancelIndicator();
          if (drawGeneration !== sankeyDrawGeneration) return;
          draw({ renderTable, syncView: false });
        })
        .catch((error) => {
          cancelIndicator();
          console.error(error);
          if (drawGeneration !== sankeyDrawGeneration) return;
          renderChartRuntimeState('error');
        });
      svgBtn.disabled = true;
      pngBtn.disabled = true;
      return;
    }
    renderRevenueTrend();
    svgBtn.disabled = true;
    pngBtn.disabled = true;
    return;
  }
  const compare = isMultiCompanyScope() || isMultiPeriodScope();
  const neededKeys = sankeyDrawDatasetKeys(compare);
  if (!datasetLoader.ready(neededKeys)) {
    // Exports must not capture the superseded chart while the async load is
    // in flight; the successful redraw re-enables them.
    svgBtn.disabled = true;
    pngBtn.disabled = true;
    const cancelIndicator = deferLoadingIndicator(drawGeneration, () => renderSankeyLoading(compare));
    datasetLoader.ensure(neededKeys)
      .then(() => {
        cancelIndicator();
        if (drawGeneration !== sankeyDrawGeneration) return;
        draw({ renderTable, syncView: false });
      })
      .catch((error) => {
        cancelIndicator();
        console.error(error);
        if (drawGeneration !== sankeyDrawGeneration) return;
        renderSankeyLoadError(compare);
      });
    return;
  }
  const d = localizedDataset(currentDataset());
  const maxWidth = chartWidth(d);
  if (singleChartCard) singleChartCard.hidden = compare;
  if (sankeyComparison) sankeyComparison.hidden = !compare;
  if (compare) {
    clearSingleChart();
    renderSankeyComparison();
    svgBtn.disabled = true;
    pngBtn.disabled = true;
    return;
  }
  clearSankeyComparison();
  if (singleChartCard) singleChartCard.style.maxWidth = maxWidth + 'px';
  if (d) window.SankeyEngine.render('#chart', d);
  svgBtn.disabled = !chartHost?.querySelector('svg');
  pngBtn.disabled = !chartHost?.querySelector('svg');
}
