/* Trace viewer · trend.js
 * Revenue trend view: Chart.js plugins, chart config, and the single and
 * multi-company comparison renders. */

let revenueTrendChart = null;
let revenueTrendCharts = [];
let revenueTrendHoverSyncing = false;

function destroyRevenueTrendChart() {
  if (revenueTrendChart) {
    revenueTrendChart.destroy();
    revenueTrendChart = null;
  }
  revenueTrendCharts.forEach((chart) => chart.destroy());
  revenueTrendCharts = [];
  revenueTrendHoverSyncing = false;
}
const revenueTrendValueLabelsPlugin = {
  id: 'revenueTrendValueLabels',
  afterDatasetsDraw(chart, _args, options) {
    const meta = chart.getDatasetMeta(0);
    const dataset = chart.data.datasets[0];
    const observations = options.observations || [];
    if (!meta?.data?.length || !dataset) return;
    const activeIndex = revenueTrendActiveIndex(chart);
    const { ctx, chartArea } = chart;
    ctx.save();
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    meta.data.forEach((point, index) => {
      const observation = observations[index] || {};
      const isActive = index === activeIndex;
      const showLabel = isActive || index === meta.data.length - 1 || observation.momGrowthPct >= 25;
      if (!showLabel) return;
      const label = options.formatValue ? options.formatValue(dataset.data[index]) : String(dataset.data[index]);
      const fontSize = isActive ? (options.activeFontSize || options.fontSize || 15) : (options.fontSize || 15);
      ctx.fillStyle = isActive ? (options.activeColor || options.color || '#263238') : (options.color || '#263238');
      ctx.font = `${isActive ? 700 : 600} ${fontSize}px ${options.fontFamily || 'Montserrat, Arial, sans-serif'}`;
      const textWidth = ctx.measureText(label).width;
      const x = clamp(point.x, chartArea.left + textWidth / 2, chartArea.right - textWidth / 2);
      const y = point.y - 12 < chartArea.top ? point.y + 28 : point.y - 12;
      ctx.fillText(label, x, y);
    });
    ctx.restore();
  },
};
const revenueTrendHoverGuidePlugin = {
  id: 'revenueTrendHoverGuide',
  beforeDatasetsDraw(chart, _args, options) {
    const activeIndex = revenueTrendActiveIndex(chart);
    if (!Number.isInteger(activeIndex)) return;
    const meta = chart.getDatasetMeta(0);
    const bar = meta?.data?.[activeIndex];
    const { chartArea, ctx } = chart;
    if (!bar || !chartArea) return;
    const previousBar = meta.data?.[activeIndex - 1];
    const nextBar = meta.data?.[activeIndex + 1];
    const left = previousBar ? (previousBar.x + bar.x) / 2 : Math.max(chartArea.left, bar.x - (nextBar ? (nextBar.x - bar.x) / 2 : (bar.width || 24)));
    const right = nextBar ? (bar.x + nextBar.x) / 2 : Math.min(chartArea.right, bar.x + (previousBar ? (bar.x - previousBar.x) / 2 : (bar.width || 24)));
    ctx.save();
    ctx.fillStyle = options.rangeColor || 'rgba(20, 67, 107, 0.035)';
    ctx.fillRect(left, chartArea.top, Math.max(1, right - left), chartArea.bottom - chartArea.top);
    ctx.restore();
  },
  afterDatasetsDraw(chart, _args, options) {
    const activeIndex = revenueTrendActiveIndex(chart);
    if (!Number.isInteger(activeIndex)) return;
    const bar = chart.getDatasetMeta(0)?.data?.[activeIndex];
    const point = chart.getDatasetMeta(1)?.data?.[activeIndex];
    const { chartArea, ctx } = chart;
    if (!bar || !chartArea) return;
    ctx.save();
    ctx.strokeStyle = options.lineColor || 'rgba(20, 67, 107, 0.18)';
    ctx.lineWidth = options.lineWidth || 1;
    ctx.setLineDash(options.lineDash || [2, 5]);
    ctx.beginPath();
    ctx.moveTo(bar.x, chartArea.top);
    ctx.lineTo(bar.x, chartArea.bottom);
    ctx.stroke();

    const hasNote = typeof options.hasNote === 'function' ? options.hasNote(activeIndex) : false;
    if (hasNote) {
      const radius = options.noteRadius || 3;
      const y = chartArea.top + Math.max(7, radius + 3);
      ctx.setLineDash([]);
      ctx.fillStyle = options.noteColor || options.lineColor || 'rgba(20, 67, 107, 0.32)';
      ctx.strokeStyle = options.noteRingColor || 'rgba(255, 255, 255, 0.86)';
      ctx.lineWidth = options.noteRingWidth || 1.4;
      ctx.beginPath();
      ctx.arc(bar.x, y, radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }

    const barLeft = bar.x - bar.width / 2;
    const barTop = Math.min(bar.y, bar.base);
    const barHeight = Math.abs(bar.base - bar.y);
    if (Number.isFinite(barLeft) && Number.isFinite(barTop) && Number.isFinite(barHeight) && barHeight > 0) {
      const radius = Math.min(options.activeBarRadius || 4, bar.width / 2, barHeight / 2);
      ctx.setLineDash([]);
      ctx.beginPath();
      if (typeof ctx.roundRect === 'function') {
        ctx.roundRect(barLeft, barTop, bar.width, barHeight, radius);
      } else {
        ctx.rect(barLeft, barTop, bar.width, barHeight);
      }
      ctx.fillStyle = options.activeBarFill || 'rgba(20, 67, 107, 0.06)';
      ctx.strokeStyle = options.activeBarBorder || 'rgba(20, 67, 107, 0.48)';
      ctx.lineWidth = options.activeBarLineWidth || 1.4;
      ctx.fill();
      ctx.stroke();
    }

    if (point && Number.isFinite(point.x) && Number.isFinite(point.y)) {
      const radius = options.activePointRadius || 4.4;
      ctx.setLineDash([]);
      ctx.beginPath();
      ctx.fillStyle = options.activePointHalo || 'rgba(154, 106, 47, 0.14)';
      ctx.arc(point.x, point.y, radius + 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle = options.activePointFill || '#fff';
      ctx.strokeStyle = options.activePointBorder || 'rgba(154, 106, 47, 1)';
      ctx.lineWidth = options.activePointLineWidth || 2.2;
      ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      const growthValue = options.growthValues?.[activeIndex];
      if (typeof growthValue === 'number' && Number.isFinite(growthValue)) {
        const label = options.formatGrowthValue ? options.formatGrowthValue(growthValue) : `${growthValue}%`;
        const fontSize = options.activeGrowthFontSize || 14;
        ctx.font = `700 ${fontSize}px ${options.fontFamily || 'Montserrat, Arial, sans-serif'}`;
        ctx.textAlign = 'center';
        const textWidth = ctx.measureText(label).width;
        const labelX = clamp(point.x, chartArea.left + textWidth / 2, chartArea.right - textWidth / 2);
        let labelY = point.y + radius + 8;
        ctx.textBaseline = 'top';
        if (labelY + fontSize + 2 > chartArea.bottom) {
          labelY = point.y - radius - 8;
          ctx.textBaseline = 'bottom';
        }
        ctx.strokeStyle = options.activeLabelHalo || 'rgba(255, 255, 255, 0.88)';
        ctx.lineWidth = options.activeLabelHaloWidth || 3;
        ctx.strokeText(label, labelX, labelY);
        ctx.fillStyle = options.activeGrowthColor || '#263238';
        ctx.fillText(label, labelX, labelY);
      }
    }
    ctx.restore();
  },
};
function revenueTrendActiveIndex(chart) {
  const activeElement = chart.getActiveElements?.()[0];
  if (Number.isInteger(activeElement?.index)) return activeElement.index;
  if (chart.tooltip?.opacity > 0) return chart.tooltip.dataPoints?.[0]?.dataIndex;
  return undefined;
}
function revenueTrendActiveElements(chart, index) {
  if (!Number.isInteger(index)) return [];
  return chart.data.datasets
    .map((_dataset, datasetIndex) => ({ datasetIndex, index }))
    .filter(({ datasetIndex }) => {
      const meta = chart.getDatasetMeta(datasetIndex);
      return meta?.data?.[index] && chart.data.datasets[datasetIndex]?.data?.[index] != null;
    });
}
function setRevenueTrendActiveIndex(chart, index) {
  const active = revenueTrendActiveElements(chart, index);
  const point = chart.getDatasetMeta(0)?.data?.[index];
  chart.setActiveElements(active);
  chart.tooltip?.setActiveElements(active, point ? { x: point.x, y: point.y } : { x: 0, y: 0 });
  chart.update('none');
}
function clearRevenueTrendActive(chart) {
  chart.setActiveElements([]);
  chart.tooltip?.setActiveElements([], { x: 0, y: 0 });
  chart.update('none');
}
function syncRevenueTrendHover(sourceChart, sourceIndex) {
  if (revenueTrendHoverSyncing || !Number.isInteger(sourceIndex)) return;
  revenueTrendHoverSyncing = true;
  const sourceDate = sourceChart.$trendDates?.[sourceIndex];
  revenueTrendCharts.forEach((chart) => {
    const targetIndex = sourceDate
      ? chart.$trendDates?.indexOf(sourceDate)
      : sourceIndex;
    if (Number.isInteger(targetIndex) && targetIndex >= 0) setRevenueTrendActiveIndex(chart, targetIndex);
    else clearRevenueTrendActive(chart);
  });
  revenueTrendHoverSyncing = false;
}
function clearRevenueTrendHoverSync() {
  if (revenueTrendHoverSyncing) return;
  revenueTrendHoverSyncing = true;
  revenueTrendCharts.forEach(clearRevenueTrendActive);
  revenueTrendHoverSyncing = false;
}
const revenueTrendSyncHoverPlugin = {
  id: 'revenueTrendSyncHover',
  afterEvent(chart, args) {
    if (!chart.$trendComparison || revenueTrendHoverSyncing) return;
    const type = args.event?.type;
    if (type === 'mouseout') {
      clearRevenueTrendHoverSync();
      return;
    }
    if (!['mousemove', 'touchmove', 'touchstart', 'click'].includes(type)) return;
    const activeIndex = chart.getActiveElements?.()[0]?.index ?? chart.tooltip?.dataPoints?.[0]?.dataIndex;
    if (Number.isInteger(activeIndex)) syncRevenueTrendHover(chart, activeIndex);
  },
};
function createRevenueTrendChartConfig({
  metric,
  observations,
  values,
  yMax,
  growthMax,
  compact = false,
  comparison = false,
  yTickFormatter = (value) => formatRevenueValue(metric, Number(value)),
  valueLabelFormatter = (value) => formatRevenueValue(metric, value),
}) {
  const ink = cssVar('--ink', '#15436b');
  const text = cssVar('--text-strong', '#263238');
  const muted = cssVar('--muted', '#6a7078');
  const grid = cssVar('--table-cell-line', '#edf0f0');
  const tableBg = cssVar('--table-bg', '#ffffff');
  const growthColor = cssVar('--trend-growth', '#9a6a2f');
  const fontFamily = 'Montserrat, Arial, sans-serif';
  const labels = observations.map((observation) => formatTrendDate(observation.date));
  const growthValues = observations.map((observation) => observation.momGrowthPct ?? null);
  const tickSize = compact ? 10 : 12;
  const legendSize = compact ? 10 : 11;
  const valueLabelSize = compact ? 10 : 15;
  const revenueBarFill = values.map((_value, index) => (
    index === values.length - 1 ? colorWithAlpha(ink, 0.28) : colorWithAlpha(ink, 0.1)
  ));
  const revenueBarBorder = values.map((_value, index) => (
    index === values.length - 1 ? colorWithAlpha(ink, 0.44) : colorWithAlpha(ink, 0.18)
  ));
  const revenueBarHoverFill = values.map((_value, index) => (
    index === values.length - 1 ? colorWithAlpha(ink, 0.36) : colorWithAlpha(ink, 0.24)
  ));
  const revenueBarHoverBorder = values.map((_value, index) => (
    index === values.length - 1 ? colorWithAlpha(ink, 0.62) : colorWithAlpha(ink, 0.46)
  ));
  const defaultPointRadius = compact ? 2 : 2.4;
  const activePointRadius = compact ? 3.8 : 4.4;

  return {
    type: 'bar',
    data: {
      labels,
      datasets: [
        {
          label: metric?.displayName || t('tableAnnualizedRevenue'),
          type: 'bar',
          yAxisID: 'y',
          data: values,
          backgroundColor: revenueBarFill,
          borderColor: revenueBarBorder,
          borderWidth: 1,
          borderRadius: 4,
          borderSkipped: false,
          barPercentage: 0.62,
          categoryPercentage: 0.74,
          hoverBackgroundColor: revenueBarHoverFill,
          hoverBorderColor: revenueBarHoverBorder,
          hoverBorderWidth: 1.4,
        },
        {
          label: t('tableMomGrowth'),
          type: 'line',
          yAxisID: 'yGrowth',
          data: growthValues,
          borderColor: growthColor,
          backgroundColor: growthColor,
          pointBackgroundColor: tableBg,
          pointBorderColor: growthColor,
          pointBorderWidth: 1.4,
          pointHoverBackgroundColor: tableBg,
          pointHoverBorderColor: growthColor,
          pointHoverBorderWidth: compact ? 2 : 2.2,
          pointHoverRadius: activePointRadius,
          pointRadius: defaultPointRadius,
          hitRadius: compact ? 8 : 10,
          borderWidth: compact ? 1.6 : 1.8,
          fill: false,
          tension: 0.24,
          spanGaps: false,
        },
      ],
    },
    plugins: comparison
      ? [revenueTrendSyncHoverPlugin, revenueTrendHoverGuidePlugin, revenueTrendValueLabelsPlugin]
      : [revenueTrendHoverGuidePlugin, revenueTrendValueLabelsPlugin],
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: false,
      layout: {
        padding: compact
          ? { top: 2, right: 10, bottom: 0, left: 4 }
          : { top: 2, right: 12, bottom: 0, left: 6 },
      },
      interaction: {
        mode: 'index',
        intersect: false,
      },
      hover: {
        mode: 'index',
        intersect: false,
      },
      scales: {
        x: {
          offset: true,
          grid: {
            display: false,
          },
          border: {
            color: cssVar('--table-line', '#d9dfdf'),
          },
          ticks: {
            color: muted,
            font: { family: fontFamily, size: tickSize, weight: '500' },
            maxRotation: 0,
            autoSkip: true,
            autoSkipPadding: compact ? 12 : 22,
          },
        },
        y: {
          beginAtZero: true,
          max: yMax,
          grid: {
            color: grid,
          },
          border: {
            color: cssVar('--table-line', '#d9dfdf'),
          },
          ticks: {
            color: muted,
            count: compact ? 5 : 6,
            font: { family: fontFamily, size: tickSize, weight: '500' },
            callback: (value) => yTickFormatter(Number(value)),
          },
        },
        yGrowth: {
          beginAtZero: true,
          max: growthMax,
          position: 'right',
          grid: {
            drawOnChartArea: false,
          },
          border: {
            color: colorWithAlpha(growthColor, 0.22),
          },
          ticks: {
            color: growthColor,
            count: compact ? 5 : 6,
            font: { family: fontFamily, size: tickSize, weight: '500' },
            callback: (value) => formatPercent(Number(value)),
          },
          title: {
            display: false,
          },
        },
      },
      plugins: {
        legend: {
          display: true,
          position: 'top',
          align: 'end',
          labels: {
            usePointStyle: false,
            boxWidth: compact ? 10 : 12,
            boxHeight: compact ? 5 : 6,
            padding: compact ? 7 : 10,
            color: muted,
            font: { family: fontFamily, size: legendSize, weight: '500' },
          },
        },
        tooltip: {
          enabled: false,
        },
        revenueTrendHoverGuide: {
          lineColor: colorWithAlpha(ink, 0.18),
          rangeColor: colorWithAlpha(ink, 0.032),
          noteColor: colorWithAlpha(ink, 0.36),
          activeBarFill: colorWithAlpha(ink, 0.055),
          activeBarBorder: colorWithAlpha(ink, 0.48),
          activePointFill: tableBg,
          activePointBorder: growthColor,
          activePointHalo: colorWithAlpha(growthColor, 0.14),
          activePointRadius,
          activeGrowthColor: text,
          activeGrowthFontSize: compact ? 10 : 14,
          activeLabelHalo: tableBg,
          fontFamily,
          growthValues,
          formatGrowthValue: formatPercent,
          hasNote: (index) => Boolean(notesText(observations[index]?.notes)),
        },
        revenueTrendValueLabels: {
          observations,
          color: text,
          activeColor: text,
          fontFamily,
          fontSize: valueLabelSize,
          activeFontSize: valueLabelSize,
          formatValue: valueLabelFormatter,
        },
      },
    },
  };
}
function renderRevenueTrendComparison() {
  if (!trendChart) return;
  const recordsForScope = scopeCompanies()
    .map((company) => revenueRecordsForCompany(company)[0])
    .filter(Boolean);
  const chartModels = recordsForScope.map((record) => {
    const metric = localizedRevenueRecord(record.metric) || record.metric;
    const observations = [...(metric?.observations || [])]
      .filter((observation) => Number.isFinite(Number(observation.value)) && Number.isFinite(Date.parse(`${observation.date}T00:00:00Z`)))
      .sort((a, b) => Date.parse(`${a.date}T00:00:00Z`) - Date.parse(`${b.date}T00:00:00Z`));
    return { record, metric, observations, latest: observations[observations.length - 1] || null };
  });
  const allUsdValues = chartModels.flatMap(({ metric, observations }) => (
    observations.map((observation) => amountValueUsd(observation.value, metric?.currency, metric?.unit)).filter((value) => value != null)
  ));
  const allGrowthValues = chartModels.flatMap(({ observations }) => (
    observations.map((observation) => observation.momGrowthPct).filter((value) => typeof value === 'number' && Number.isFinite(value))
  ));
  const maxUsd = Math.max(0, ...allUsdValues);
  const yMax = Math.ceil((maxUsd * 1.1) / 1e9) * 1e9 || 10;
  const maxGrowth = Math.max(0, ...allGrowthValues);
  const growthMax = Math.max(10, Math.ceil(maxGrowth / 10) * 10);
  const latestUsd = sumUsdRows(chartModels
    .filter((model) => finiteNumber(model.latest?.value) != null)
    .map((model) => ({
      value: model.latest.value,
      currency: model.metric?.currency,
      unit: model.metric?.unit,
      company: displayCompanyName(model.record.company),
    })));

  trendChartTitle.textContent = [t('metricRevenue'), t('comparisonScopeSummary', { count: scopeCompanies().length })].join(' · ');
  trendChartSubtitle.removeAttribute('title');
  if (latestUsd.converted || latestUsd.excluded.length) trendChartSubtitle.title = fxTooltip(latestUsd.excluded);
  trendChartSubtitle.textContent = latestUsd.total || latestUsd.excluded.length
    ? `${t('latest')} ${formatUsdTotal(latestUsd)}`
    : t('noRevenueTrendData');
  destroyRevenueTrendChart();

  if (!chartModels.length) {
    trendChart.innerHTML = `<div class="empty-state">${escapeHtml(t('noRevenueTrendData'))}</div>`;
    return;
  }

  trendChart.innerHTML = `
    <div class="comparison-grid revenue-comparison-grid">
      ${chartModels.map((model, index) => `
        <section class="comparison-card revenue-comparison-card">
          <div class="comparison-card-header">
            <strong>${escapeHtml(displayCompanyName(model.record.company))}</strong>
            <span>${escapeHtml(model.metric?.displayName || t('metricRevenue'))}</span>
          </div>
          <div class="comparison-card-metrics">
            ${escapeHtml(model.latest ? `${formatMetricDate(model.latest.date)} · ${formatRevenueValue(model.metric, model.latest.value)}` : t('noRevenueTrendData'))}
          </div>
          <div class="trend-canvas-wrap comparison-trend-canvas-wrap">
            <canvas id="revenueTrendCanvas-${index}" role="img" aria-label="${escapeHtml(displayCompanyName(model.record.company))}"></canvas>
          </div>
        </section>
      `).join('')}
    </div>
  `;

  const ink = cssVar('--ink', '#15436b');
  chartModels.forEach((model, index) => {
    const canvas = document.getElementById(`revenueTrendCanvas-${index}`);
    if (!canvas || !window.Chart) return;
    const valuesUsd = model.observations.map((observation) => amountValueUsd(observation.value, model.metric?.currency, model.metric?.unit) || 0);
    const chart = new window.Chart(canvas, createRevenueTrendChartConfig({
      metric: model.metric,
      observations: model.observations,
      values: valuesUsd,
      yMax,
      growthMax,
      compact: true,
      comparison: true,
      yTickFormatter: (value) => formatUsdShort(Number(value)),
      valueLabelFormatter: (value) => formatUsdShort(value),
    }));
    chart.$trendComparison = true;
    chart.$trendDates = model.observations.map((observation) => observation.date);
    chart.$trendHoverColor = ink;
    revenueTrendCharts.push(chart);
  });
}
function renderRevenueTrend() {
  if (!trendChart) return;
  if (isMultiCompanyScope()) {
    renderRevenueTrendComparison();
    return;
  }
  const record = revenueRecordsForCompany()[0];
  const metric = localizedRevenueRecord(record?.metric) || record?.metric;
  const observations = [...(metric?.observations || [])]
    .filter((observation) => Number.isFinite(Number(observation.value)) && Number.isFinite(Date.parse(`${observation.date}T00:00:00Z`)))
    .sort((a, b) => Date.parse(`${a.date}T00:00:00Z`) - Date.parse(`${b.date}T00:00:00Z`));
  const latest = observations[observations.length - 1];
  trendChartTitle.textContent = [displayCompanyName(state.company), metric?.displayName].filter(Boolean).join(' · ') || t('metricRevenue');
  trendChartSubtitle.textContent = latest
    ? t('trendLatest', { value: formatRevenueValue(metric, latest.value), date: formatMetricDate(latest.date) })
    : t('noRevenueTrendData');

  if (!observations.length) {
    destroyRevenueTrendChart();
    trendChart.innerHTML = `<div class="empty-state">${escapeHtml(t('noRevenueTrendData'))}</div>`;
    return;
  }

  const maxValue = Math.max(...observations.map((observation) => observation.value));
  const yMax = Math.ceil((maxValue * 1.1) / 5) * 5 || 10;
  const growthValues = observations.map((observation) => observation.momGrowthPct ?? null);
  const growthObservations = observations.filter((observation) => typeof observation.momGrowthPct === 'number' && Number.isFinite(observation.momGrowthPct));
  const peakGrowth = growthObservations.reduce((peak, observation) => (
    !peak || observation.momGrowthPct > peak.momGrowthPct ? observation : peak
  ), null);
  const latestGrowthText = latest?.momGrowthPct == null ? t('missing') : formatPercent(latest.momGrowthPct);
  const peakGrowthText = peakGrowth
    ? `${formatPercent(peakGrowth.momGrowthPct)} · ${formatTrendDate(peakGrowth.date)}`
    : t('missing');
  destroyRevenueTrendChart();
  trendChart.innerHTML = `
    <div class="trend-summary">
      <div class="trend-summary-item">
        <span>${escapeHtml(t('trendLatestArr'))}</span>
        <strong>${escapeHtml(formatRevenueValue(metric, latest?.value))}</strong>
      </div>
      <div class="trend-summary-item">
        <span>${escapeHtml(t('trendLatestMom'))}</span>
        <strong>${escapeHtml(latestGrowthText)}</strong>
      </div>
      <div class="trend-summary-item">
        <span>${escapeHtml(t('trendPeakMom'))}</span>
        <strong>${escapeHtml(peakGrowthText)}</strong>
      </div>
    </div>
    <div class="trend-canvas-wrap">
      <canvas id="revenueTrendCanvas" role="img" aria-label="${escapeHtml(trendChartTitle.textContent)}"></canvas>
    </div>
  `;
  const canvas = document.getElementById('revenueTrendCanvas');
  if (!canvas || !window.Chart) {
    trendChart.innerHTML = `<div class="empty-state">${escapeHtml(t('noRevenueTrendData'))}</div>`;
    return;
  }

  const values = observations.map((observation) => observation.value);
  const maxGrowth = Math.max(0, ...growthValues.filter((value) => typeof value === 'number' && Number.isFinite(value)));
  const growthMax = Math.max(10, Math.ceil(maxGrowth / 10) * 10);

  revenueTrendChart = new window.Chart(canvas, createRevenueTrendChartConfig({
    metric,
    observations,
    values,
    yMax,
    growthMax,
  }));
}
