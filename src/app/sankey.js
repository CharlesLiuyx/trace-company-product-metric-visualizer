/* Trace viewer · sankey.js
 * Sankey view: chart sizing, USD-normalized comparison scaling, the
 * comparison grid render, and the top-level draw() dispatcher. */

/* Single-chart canvas sizing comes from the engine's own config merge.
 * Comparison sizing is stricter: it consumes the canvas dimensions carried
 * by the renderer-owned calibration measurement and post-render viewBox
 * assertion below. */
function chartWidth(d) {
  return window.SankeyEngine.helpers.canvasSize(d).width;
}
function clearSingleChart() {
  chartHost?.replaceChildren();
}
function clearSankeyComparison() {
  try {
    destroyComparisonMetricTrendChart();
  } catch (error) {
    console.error('[comparison] trend cleanup failed', error);
  }
  if (sankeyComparison) {
    sankeyComparison.replaceChildren();
    delete sankeyComparison.dataset.scaleStatus;
    delete sankeyComparison.dataset.scaleFailureCode;
    delete sankeyComparison.dataset.scaleFailureStage;
  }
}
function comparisonScalePlan(records, renderDatasetByKey) {
  return window.TraceComparisonScale.createPlan(records.map((record) => ({
    dataset: renderDatasetByKey.get(record.dataset.key),
    financial: financialRecordByKey.get(record.dataset.key),
  })));
}
function requiredComparisonScaleFactor(scalePlan, key) {
  const factor = scalePlan.factorFor(key);
  if (!Number.isFinite(factor) || factor <= 0) {
    throw new Error(`Calibrated comparison scale plan has no positive factor for ${key}`);
  }
  return factor;
}
// Calibration and render share the same renderer implementation, then this
// postcondition binds the plan to the exact off-screen SVG instance that will
// be committed. It closes the remaining gap for getters, Proxies, accidental
// mutation, or future non-deterministic layout code between the two compiles.
function assertRenderedComparisonAnchor(host, measurement) {
  const id = measurement?.anchorNodeId;
  const rendered = window.SankeyEngine.measureRenderedNodeValueScale(host, id);
  if (
    rendered.status !== 'calibrated'
    || rendered.anchorRole !== measurement.anchorRole
    || rendered.renderedHeight !== measurement.renderedHeight
    || rendered.authoredValue !== measurement.authoredValue
    || rendered.viewUnitsPerValue !== measurement.viewUnitsPerValue
    || rendered.canvasWidth !== measurement.canvasWidth
    || rendered.canvasHeight !== measurement.canvasHeight
  ) {
    throw new Error(
      `Rendered comparison anchor "${id}" drifted from calibrated geometry `
        + `(${rendered.reason || rendered.status})`
    );
  }
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
  if (sankeyView) {
    const style = getComputedStyle(sankeyView);
    const padding = requiredResolvedCssPixel(style.paddingLeft, 'sankey-view padding-left')
      + requiredResolvedCssPixel(style.paddingRight, 'sankey-view padding-right');
    // The live comparison becomes max-content while zoomed. Its clientWidth
    // is therefore zoom-scoped output, never a valid input to 100% fit.
    // Always measure the stable viewport owner's content box.
    return Math.max(1, sankeyView.clientWidth - padding);
  }
  return Math.max(1, content?.clientWidth || window.innerWidth || 1);
}
function comparisonFitFactor(entries, scalePlan, layoutMetrics) {
  const columns = comparisonColumnCount(Math.max(entries.length, 1));
  const availableWidth = comparisonAvailableWidth();
  const items = entries.map(({ record }) => {
    if (!record) {
      return { scalableWidth: 0, fixedWidth: layoutMetrics.emptyCardInlineSize };
    }
    const measurement = scalePlan.measurementFor(record.dataset.key);
    const scale = requiredComparisonScaleFactor(scalePlan, record.dataset.key);
    return {
      scalableWidth: measurement.canvasWidth * scale,
      fixedWidth: layoutMetrics.cardInlineFixed,
    };
  });
  // pack `columns` charts per row at their USD-normalized widths; the widest
  // packed row pins the shared factor so every row fits the canvas
  let factor = 1;
  for (let start = 0; start < items.length; start += columns) {
    const row = items.slice(start, start + columns);
    const scalableWidth = row.reduce((sum, item) => sum + item.scalableWidth, 0);
    const fixedWidth = row.reduce((sum, item) => sum + item.fixedWidth, 0)
      + layoutMetrics.columnGap * Math.max(0, row.length - 1);
    if (scalableWidth === 0) {
      if (fixedWidth > availableWidth) {
        throw new Error(`Fixed comparison row width ${fixedWidth} exceeds ${availableWidth}`);
      }
      continue;
    }
    factor = Math.min(factor, (availableWidth - fixedWidth) / scalableWidth);
  }
  if (!Number.isFinite(factor) || factor <= 0) {
    throw new Error(`Comparison fit produced a non-positive factor: ${factor}`);
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

function renderComparisonScaleError(scalePlan) {
  comparisonZoomMax = COMPARISON_ZOOM_MIN;
  try {
    cancelComparisonZoomGesture();
  } catch (error) {
    console.error('[comparison-scale] gesture cleanup failed', error);
  }
  comparisonProxyGeneration += 1;
  try {
    destroyComparisonMetricTrendChart();
  } catch (error) {
    // Failure rendering must not depend on third-party Chart.js teardown.
    console.error('[comparison-scale] trend teardown failed', error);
  }
  sankeyComparison.dataset.scaleStatus = 'uncalibrated';
  const firstDiagnostic = scalePlan.diagnostics?.[0];
  sankeyComparison.dataset.scaleFailureCode = firstDiagnostic?.code || 'unknown';
  sankeyComparison.dataset.scaleFailureStage = firstDiagnostic?.stage || 'unknown';
  sankeyComparison.innerHTML = `
    <div class="chart-loading chart-loading-error" role="alert">
      <span>${escapeHtml(t('comparisonScaleUnavailable'))}</span>
    </div>
  `;
  console.error('[comparison-scale] calibration failed', scalePlan.diagnostics);
  try {
    applyComparisonZoom();
  } catch (error) {
    console.error('[comparison-scale] zoom reset failed', error);
  }
  if (comparisonZoomControls) comparisonZoomControls.hidden = true;
}

function comparisonRuntimeFailure(stage, error, key = '') {
  return {
    status: 'uncalibrated',
    diagnostics: [{
      key,
      stage,
      code: 'comparison-runtime-failure',
      message: error?.message || String(error),
    }],
  };
}

// Engine rendering can still reject unsafe annotations or raster assets after
// geometry calibration. Build the complete group in a connected off-screen
// stage so SVG measurement works, then commit one DOM subtree atomically.
function comparisonRenderStage(width) {
  const stage = createComparisonMeasurementStage(width, 'comparison-render-stage');
  // Fit is the canonical 100% base state. A redraw that happens while the
  // live canvas is zoomed must not let zoom-scoped CSS contaminate base fit;
  // applyComparisonZoom() reapplies the user zoom only after commit.
  stage.classList.remove('zoomed');
  return stage;
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
  let transaction;
  let activeKey = '';
  let failureStage = 'calibration';
  try {
    // Localize exactly once: calibration, responsive fit, and render must
    // consume the same Adapter object so no locale overlay can split geometry
    // authority across different instances.
    const renderDatasetByKey = new Map(recordsWithData.map((record) => [
      record.dataset.key,
      localizedDataset(record.dataset),
    ]));
    const scalePlan = comparisonScalePlan(recordsWithData, renderDatasetByKey);
    if (scalePlan.status !== 'calibrated') {
      renderComparisonScaleError(scalePlan);
      return;
    }
    failureStage = 'render';
    const baseContentWidth = comparisonAvailableWidth();
    const grid = document.createElement('div');
    grid.className = 'comparison-flow';
    const stage = comparisonRenderStage(baseContentWidth);
    try {
      stage.appendChild(grid);
      const layoutMetrics = measureComparisonFitLayout(grid);
      const fitFactor = comparisonFitFactor(
        recordsForCompanies,
        scalePlan,
        layoutMetrics
      );
      const minScale = recordsWithData.reduce((min, record) => {
        const scale = requiredComparisonScaleFactor(scalePlan, record.dataset.key) * fitFactor;
        return Math.min(min, scale);
      }, Infinity);
      if (!Number.isFinite(minScale) || minScale <= 0) {
        throw new Error(`Comparison minimum scale is not finite and positive: ${minScale}`);
      }
      const nextZoomMax = Math.max(COMPARISON_ZOOM_MIN, 1 / minScale);
      grid.dataset.baseContentWidth = String(baseContentWidth);
      grid.dataset.commonViewUnitsPerUsd = String(scalePlan.commonViewUnitsPerUsd);
      grid.dataset.fitFactor = String(fitFactor);
      grid.dataset.columnGap = String(layoutMetrics.columnGap);
      grid.dataset.rowGap = String(layoutMetrics.rowGap);
      grid.dataset.cardInlineFixed = String(layoutMetrics.cardInlineFixed);
      recordsForCompanies.forEach(({ company, record }) => {
        activeKey = record?.dataset?.key || '';
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

        const dataset = renderDatasetByKey.get(record.dataset.key);
        const measurement = scalePlan.measurementFor(record.dataset.key);
        const normalizationFactor = requiredComparisonScaleFactor(scalePlan, record.dataset.key);
        const scale = normalizationFactor * fitFactor;
        const baseWidth = measurement.canvasWidth * scale;
        card.dataset.recordIndex = String(record.index);
        card.innerHTML = `
          <div class="comparison-chart-frame">
            <div class="comparison-chart-host"></div>
          </div>
        `;
        const frame = card.querySelector('.comparison-chart-frame');
        const host = card.querySelector('.comparison-chart-host');
        frame.style.maxWidth = '100%';
        host.style.width = `${baseWidth}px`;
        host.dataset.baseWidth = String(baseWidth);
        host.dataset.datasetKey = record.dataset.key;
        host.dataset.scaleAnchor = measurement.anchorNodeId;
        host.dataset.scaleAnchorRole = measurement.anchorRole;
        host.dataset.anchorAuthoredValue = String(measurement.authoredValue);
        host.dataset.valueScaleProvenance = measurement.provenance;
        host.dataset.viewUnitsPerValue = String(measurement.viewUnitsPerValue);
        host.dataset.usdPerValue = String(measurement.usdPerValue);
        host.dataset.viewUnitsPerUsd = String(measurement.viewUnitsPerUsd);
        host.dataset.canvasWidth = String(measurement.canvasWidth);
        host.dataset.canvasHeight = String(measurement.canvasHeight);
        host.dataset.normalizationFactor = String(normalizationFactor);
        host.dataset.scaleFactor = String(scale);
        grid.appendChild(card);
        window.SankeyEngine.render(host, dataset);
        assertRenderedComparisonAnchor(host, measurement);
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
      transaction = { grid, nextZoomMax };
    } finally {
      grid.remove();
      stage.remove();
    }

    // The commit and every post-commit state mutation are part of the same
    // transaction. If any one of them fails, the catch below clears the group
    // and publishes an explicit uncalibrated state instead of leaving a stale
    // or partially replaced calibrated comparison on screen.
    failureStage = 'commit';
    comparisonZoomMax = transaction.nextZoomMax;
    cancelComparisonZoomGesture();
    comparisonProxyGeneration += 1;
    destroyComparisonMetricTrendChart();
    sankeyComparison.replaceChildren(transaction.grid);
    sankeyComparison.dataset.scaleStatus = 'calibrated';
    delete sankeyComparison.dataset.scaleFailureCode;
    delete sankeyComparison.dataset.scaleFailureStage;
    updateComparisonMetricTrendPanel(recordsForCompanies.map((item) => item.record).filter(Boolean));
    applyComparisonZoom();
    scheduleIdleTask(buildComparisonZoomProxies);
  } catch (error) {
    renderComparisonScaleError(comparisonRuntimeFailure(failureStage, error, activeKey));
  }
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

function setDataExportState(disabled) {
  [companiesCsvBtn, statementsCsvBtn, revenueCsvBtn].forEach((button) => { button.disabled = disabled; });
}

function renderViewDataState(status, compare) {
  if (state.viewMode === 'sankey') {
    if (status === 'loading') renderSankeyLoading(compare);
    else renderSankeyLoadError(compare);
  } else {
    const host = state.viewMode === 'table'
      ? (isCompanyInfoMetric() ? companiesTable : isRevenueMetric() ? revenueTable : statementsTable)
      : trendView;
    if (state.viewMode === 'table') virtualTables.delete(host);
    if (state.viewMode === 'trend') {
      renderChartRuntimeState(status);
    } else {
      host.innerHTML = `<tbody><tr><td><div class="chart-loading" role="${status === 'error' ? 'alert' : 'status'}">${escapeHtml(t(status === 'error' ? 'datasetLoadError' : 'datasetLoading'))}</div></td></tr></tbody>`;
      if (status === 'error') {
        const retry = document.createElement('button');
        retry.className = 'btn';
        retry.textContent = t('datasetLoadRetry');
        retry.onclick = () => draw();
        host.querySelector('.chart-loading').appendChild(retry);
      }
    }
  }
  if (status === 'error') {
    const host = state.viewMode === 'table' ? tableView : state.viewMode === 'trend' ? trendView : compare ? sankeyComparison : chartHost;
    const target = host.querySelector('[role="alert"], .chart-loading-error, .chart-loading');
    if (target) {
      const reload = document.createElement('button');
      reload.className = 'btn';
      reload.textContent = t('datasetReloadVersion');
      reload.onclick = () => window.location.reload();
      target.appendChild(reload);
    }
  }
}

function draw({ renderTable = true, syncView = true } = {}) {
  if (syncView) syncViewModeControls();
  if (!comparisonZoomActive()) {
    cancelComparisonZoomGesture();
    applyComparisonZoom();
  }
  // any in-flight deferred draw is superseded by this call
  const drawGeneration = ++sankeyDrawGeneration;
  const compare = isMultiCompanyScope() || isMultiPeriodScope();
  const requirement = viewDataRequirement();
  const neededKeys = state.viewMode === 'sankey' ? sankeyDrawDatasetKeys(compare) : [];
  if (!runtimeData.ready(requirement) || !datasetLoader.ready(neededKeys)) {
    svgBtn.disabled = true;
    pngBtn.disabled = true;
    setDataExportState(true);
    const cancelIndicator = deferLoadingIndicator(drawGeneration, () => renderViewDataState('loading', compare));
    Promise.all([
      runtimeData.ensure(requirement),
      datasetLoader.ensure(neededKeys),
      state.viewMode === 'trend' ? viewRuntimeLoader.ensureChart() : Promise.resolve(),
    ]).then(() => {
      cancelIndicator();
      if (drawGeneration !== sankeyDrawGeneration) return;
      invalidateRuntimeViewCaches({ datasetKeys: neededKeys });
      renderActiveSummary();
      draw({ renderTable: true, syncView: false });
      if (state.viewMode === 'table') scrollActiveTableRow(activeTableKind());
    }).catch((error) => {
      cancelIndicator();
      console.error(error);
      if (drawGeneration !== sankeyDrawGeneration) return;
      renderViewDataState('error', compare);
    });
    return;
  }
  setDataExportState(false);
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
  if (singleChartCard) singleChartCard.hidden = compare;
  if (sankeyComparison) sankeyComparison.hidden = !compare;
  if (compare) {
    try {
      clearSingleChart();
      renderSankeyComparison();
    } catch (error) {
      renderComparisonScaleError(comparisonRuntimeFailure('dispatch', error));
    }
    svgBtn.disabled = true;
    pngBtn.disabled = true;
    return;
  }
  try {
    // Localize inside the owning branch. A rejected current-locale overlay
    // must never abort before the comparison transaction has a chance to
    // replace stale content with an explicit failure state.
    const d = localizedDataset(currentDataset());
    const maxWidth = chartWidth(d);
    clearSankeyComparison();
    if (singleChartCard) singleChartCard.style.maxWidth = maxWidth + 'px';
    if (d) window.SankeyEngine.render('#chart', d);
    svgBtn.disabled = !chartHost?.querySelector('svg');
    pngBtn.disabled = !chartHost?.querySelector('svg');
  } catch (error) {
    console.error('[sankey] render failed', error);
    renderSankeyLoadError(false);
  }
}
