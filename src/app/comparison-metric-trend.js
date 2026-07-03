/* Trace viewer · comparison-metric-trend.js
 * Comparison metric trend panel: clicking nodes/links in comparison cards
 * charts that metric across the periods in view. */

/* ---- comparison metric trend ----
 * Clicking a metric node in a comparison card expands a bar chart of that
 * metric across the data point times currently in the view, so a company
 * selected at several times reads as a trend instead of N parallel charts.
 * Further clicks add metrics to the same chart as grouped bars (clicking a
 * selected node again drops it); metrics only combine while they share the
 * company and reporting currency, keeping every bar on one comparable axis.
 * Clicking a flow between two nodes selects the link instead: both endpoint
 * metrics join the bars (shared endpoints once), and the right axis switches
 * from growth to the link's share of its larger endpoint over time. */
let comparisonMetricTrendChart = null;
function destroyComparisonMetricTrendChart() {
  if (!comparisonMetricTrendChart) return;
  comparisonMetricTrendChart.destroy();
  comparisonMetricTrendChart = null;
}
function comparisonScopeRecords() {
  return isMultiPeriodScope()
    ? selectedPeriodRecords()
    : scopeCompanies().map((company) => defaultRecordForCompanyMetric(company, 'incomeStatement')).filter(Boolean);
}
// Same caliber = same authored node id within one company's datasets and the
// same reporting currency; units are convertible via multipliers, currencies
// are not, so points reported in another currency drop out of the trend.
function comparisonMetricTrendPoints(records, company, nodeId) {
  const seen = new Set();
  const points = [];
  (records || []).forEach((record) => {
    if (!record || record.company !== company || seen.has(record.index)) return;
    seen.add(record.index);
    const node = (record.dataset?.nodes || []).find((item) => String(item.id) === String(nodeId));
    const value = finiteNumber(node?.value);
    if (value == null) return;
    points.push({ record, node, value });
  });
  points.sort((a, b) => a.record.sortValue - b.record.sortValue || a.record.index - b.record.index);
  if (points.length < 2) return points;
  const latestCurrency = currencyCode(points[points.length - 1].record.dataset?.meta?.currency || '$');
  return points.filter((point) => currencyCode(point.record.dataset?.meta?.currency || '$') === latestCurrency);
}
function comparisonLinkValue(record, sourceId, targetId) {
  const link = (record.dataset?.links || []).find((item) => (
    String(item.source) === sourceId && String(item.target) === targetId
  ));
  return finiteNumber(link?.value);
}
function comparisonMetricTrendModel(records) {
  const selection = state.comparisonMetricTrend;
  const nodeIds = [...new Set((selection?.nodeIds || []).map(String))];
  const linkSelections = [...new Set((selection?.linkIds || []).map(String))]
    .map((id) => {
      const [source, target] = id.split('>');
      return { id, source, target };
    })
    .filter((link) => link.source && link.target);
  if (!nodeIds.length && !linkSelections.length) return null;
  // bars = standalone picks plus link endpoints; endpoints shared between
  // adjacent links (or already picked as nodes) appear once
  const barIds = [];
  const pushBarId = (id) => {
    if (id && !barIds.includes(id)) barIds.push(id);
  };
  nodeIds.forEach(pushBarId);
  linkSelections.forEach((link) => {
    pushBarId(link.source);
    pushBarId(link.target);
  });
  const candidates = barIds
    .map((nodeId) => ({ nodeId, points: comparisonMetricTrendPoints(records, selection.company, nodeId) }))
    .filter((metric) => metric.points.length >= 2);
  if (!candidates.length) return null;
  // the first selected metric anchors the caliber; metrics reported in another
  // currency cannot share its axis and drop out of the chart
  const anchorMeta = candidates[0].points[candidates[0].points.length - 1].record.dataset?.meta || {};
  const caliber = {
    currency: anchorMeta.currency || '$',
    unit: anchorMeta.unit || '',
    decimals: typeof anchorMeta.decimals === 'number' ? anchorMeta.decimals : 1,
  };
  const alive = new Map(candidates
    .filter((metric) => {
      const meta = metric.points[metric.points.length - 1].record.dataset?.meta || {};
      return currencyCode(meta.currency || '$') === currencyCode(caliber.currency);
    })
    .map((metric) => [metric.nodeId, metric]));
  // a link stays only while both endpoints survived and the flow itself shows
  // up in at least two periods with a usable denominator
  const keptLinks = linkSelections.filter((link) => {
    const source = alive.get(link.source);
    if (!source || !alive.has(link.target)) return false;
    const usable = source.points.filter((point) => (
      point.value && comparisonLinkValue(point.record, link.source, link.target) != null
    ));
    return usable.length >= 2;
  });
  const keptNodeIds = nodeIds.filter((id) => alive.has(id));
  if (!keptNodeIds.length && !keptLinks.length) return null;
  const finalIds = [];
  const pushFinalId = (id) => {
    if (!finalIds.includes(id)) finalIds.push(id);
  };
  keptNodeIds.forEach(pushFinalId);
  keptLinks.forEach((link) => {
    pushFinalId(link.source);
    pushFinalId(link.target);
  });
  const kept = finalIds.map((id) => alive.get(id));
  // shared period axis = union of the kept metrics' records, chronological
  const axisByIndex = new Map();
  kept.forEach((metric) => metric.points.forEach((point) => axisByIndex.set(point.record.index, point.record)));
  const axisRecords = [...axisByIndex.values()].sort((a, b) => a.sortValue - b.sortValue || a.index - b.index);
  const periodLabels = axisRecords.map((record) => displayPeriod(record) || record.period);
  const labelCounts = periodLabels.reduce((map, label) => map.set(label, (map.get(label) || 0) + 1), new Map());
  const labels = periodLabels.map((label, index) => (
    labelCounts.get(label) > 1 ? [label, variantLabel(axisRecords[index])].filter(Boolean).join(' · ') : label
  ));
  const axisSlots = new Map(axisRecords.map((record, index) => [record.index, index]));
  const metrics = kept.map((metric) => {
    const latest = metric.points[metric.points.length - 1];
    const values = axisRecords.map(() => null);
    metric.points.forEach((point) => {
      const meta = point.record.dataset?.meta || {};
      values[axisSlots.get(point.record.index)] = point.value * (unitMultiplier(meta.unit || '') / unitMultiplier(caliber.unit));
    });
    // growth vs the previous data point on the shared axis; a gap on either
    // side leaves the rate unknowable, not zero
    const growth = values.map((value, index) => {
      const previous = index > 0 ? values[index - 1] : null;
      if (value == null || previous == null || !previous) return null;
      return ((value - previous) / Math.abs(previous)) * 100;
    });
    const localizedNode = (localizedDataset(latest.record.dataset)?.nodes || [])
      .find((node) => String(node.id) === metric.nodeId);
    return {
      nodeId: metric.nodeId,
      points: metric.points,
      rawByRecord: new Map(metric.points.map((point) => [point.record.index, point.value])),
      values,
      growth,
      label: labelText(localizedNode?.label) || labelText(latest.node.label) || metric.nodeId,
      accent: '',
    };
  });
  const metricIndexById = new Map(metrics.map((metric, index) => [metric.nodeId, index]));
  // per-link share drawn on the right axis instead of growth while links
  // exist. The denominator is the link's larger endpoint (the aggregate
  // side): a segment flowing into revenue reads as its share of revenue,
  // revenue flowing into gross profit reads as margin — dividing by the side
  // the flow merely passes through would pin the line at ~100%. Numerator
  // and denominator come from the same record, so raw units cancel out.
  const ratios = keptLinks.map((link) => {
    const sourceIndex = metricIndexById.get(link.source);
    const targetIndex = metricIndexById.get(link.target);
    const magnitude = (index) => metrics[index].values.reduce((sum, value) => sum + Math.abs(value || 0), 0);
    const denominatorIndex = magnitude(targetIndex) > magnitude(sourceIndex) ? targetIndex : sourceIndex;
    const numeratorIndex = denominatorIndex === sourceIndex ? targetIndex : sourceIndex;
    const denominatorMetric = metrics[denominatorIndex];
    const values = axisRecords.map((record) => {
      const raw = denominatorMetric.rawByRecord.get(record.index);
      const linkValue = comparisonLinkValue(record, link.source, link.target);
      if (raw == null || !raw || linkValue == null) return null;
      return (linkValue / raw) * 100;
    });
    return {
      id: link.id,
      source: link.source,
      target: link.target,
      sourceIndex,
      targetIndex,
      numeratorIndex,
      denominatorIndex,
      label: `${metrics[numeratorIndex].label} / ${metrics[denominatorIndex].label}`,
      values,
    };
  });
  return { selection, metrics, labels, caliber, ratios, keptNodeIds };
}
// Value labels shrink to the tightest bar spacing, and labels that still
// cannot fit yield to their left neighbour instead of overlapping; hovering a
// bar re-labels its whole metric (hovered bar loudest, siblings quieter) so
// every dropped number stays reachable.
const comparisonMetricTrendValueLabelsPlugin = {
  id: 'comparisonMetricTrendValueLabels',
  afterDatasetsDraw(chart, _args, options) {
    const { ctx, chartArea } = chart;
    const fontFamily = options.fontFamily || 'Montserrat, Arial, sans-serif';
    const formatValue = options.formatValue || ((value) => String(value));
    const entries = [];
    chart.data.datasets.forEach((dataset, datasetIndex) => {
      if (dataset.type === 'line') return; // growth lines carry no value labels
      if (!chart.isDatasetVisible(datasetIndex)) return;
      const meta = chart.getDatasetMeta(datasetIndex);
      if (!meta?.data?.length) return;
      meta.data.forEach((bar, index) => {
        const value = dataset.data[index];
        if (value == null) return;
        const label = formatValue(value);
        if (label) entries.push({ bar, datasetIndex, index, label });
      });
    });
    if (!entries.length) return;
    entries.sort((a, b) => a.bar.x - b.bar.x);
    ctx.save();
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    const baseSize = options.fontSize || 12;
    const minSize = options.minFontSize || 8;
    // adaptive size: shrink until the widest label fits the tightest bar
    // spacing, but never below the legibility floor
    ctx.font = `600 ${baseSize}px ${fontFamily}`;
    const widest = entries.reduce((max, entry) => Math.max(max, ctx.measureText(entry.label).width), 0);
    let minSpacing = Infinity;
    for (let i = 1; i < entries.length; i += 1) {
      minSpacing = Math.min(minSpacing, entries[i].bar.x - entries[i - 1].bar.x);
    }
    if (!Number.isFinite(minSpacing)) minSpacing = chartArea.right - chartArea.left;
    let fontSize = baseSize;
    if (widest > minSpacing * 0.94) {
      fontSize = Math.max(minSize, Math.floor((baseSize * minSpacing * 0.94) / widest));
    }
    const measureAt = (entry, size, weight) => {
      ctx.font = `${weight} ${size}px ${fontFamily}`;
      const width = ctx.measureText(entry.label).width;
      const x = clamp(entry.bar.x, chartArea.left + width / 2, chartArea.right - width / 2);
      return { x, width, left: x - width / 2, right: x + width / 2 };
    };
    const draw = (entry, { size, weight, color }) => {
      const extent = measureAt(entry, size, weight);
      const y = entry.bar.y - 3 < chartArea.top + size ? entry.bar.y + size + 6 : entry.bar.y - 3;
      if (options.halo) {
        ctx.lineWidth = Math.max(2, size / 4);
        ctx.strokeStyle = options.halo;
        ctx.strokeText(entry.label, extent.x, y);
      }
      ctx.fillStyle = color;
      ctx.fillText(entry.label, extent.x, y);
      return { ...extent, y, size };
    };
    const hover = chart.$metricTrendHover;
    if (hover && chart.isDatasetVisible(hover.datasetIndex)) {
      // hover focuses one metric: its bars all get labels while the other
      // metrics stand back, so a dropped number is one hover away
      const siblings = entries.filter((entry) => entry.datasetIndex === hover.datasetIndex);
      const main = siblings.find((entry) => entry.index === hover.index);
      // the loudest label also carries the growth vs the previous data point,
      // unless the metric's growth line is on screen — then the number rides
      // the line point instead of doubling up beside the bar value
      const growthLineVisible = chart.data.datasets.some((dataset, index) => (
        dataset.$role === 'growth' && dataset.$barDatasetIndex === hover.datasetIndex && chart.isDatasetVisible(index)
      ));
      const growth = options.growthByDataset?.[hover.datasetIndex]?.[hover.index];
      if (main && !growthLineVisible && growth != null && Number.isFinite(growth)) {
        main.label = `${main.label} (${growth >= 0 ? '+' : ''}${formatPercent(growth)})`;
      }
      const mainStyle = { size: Math.max(fontSize + 3, 14), weight: 700, color: options.color || '#263238' };
      const siblingStyle = { size: Math.max(fontSize, 10), weight: 600, color: options.mutedColor || options.color || '#263238' };
      const mainExtent = main ? draw(main, mainStyle) : null;
      const mainRect = mainExtent
        ? { left: mainExtent.left, right: mainExtent.right, top: mainExtent.y - mainExtent.size, bottom: mainExtent.y }
        : null;
      let lastRight = -Infinity;
      siblings.forEach((entry) => {
        if (entry === main) {
          if (mainExtent) lastRight = Math.max(lastRight, mainExtent.right);
          return;
        }
        const extent = measureAt(entry, siblingStyle.size, siblingStyle.weight);
        if (extent.left < lastRight + 3) return;
        if (mainExtent && extent.left < mainExtent.right + 3 && extent.right > mainExtent.left - 3) return;
        draw(entry, siblingStyle);
        lastRight = extent.right;
      });
      // every right-axis line — link share or growth — gets its own number at
      // the hovered period, smaller than the bar labels so the percentage
      // reading stays secondary, dodging the loud label when the line runs
      // through it
      chart.data.datasets.forEach((dataset, datasetIndex) => {
        if (dataset.type !== 'line' || !chart.isDatasetVisible(datasetIndex)) return;
        if (dataset.$barDatasetIndex !== hover.datasetIndex && dataset.$pairDatasetIndex !== hover.datasetIndex) return;
        const value = dataset.data?.[hover.index];
        if (value == null || !Number.isFinite(value)) return;
        const point = chart.getDatasetMeta(datasetIndex)?.data?.[hover.index];
        const percent = formatPercent(value);
        if (!point || !percent) return;
        const label = dataset.$role === 'growth' && value > 0 ? `+${percent}` : percent;
        const size = Math.max(minSize, Math.min(fontSize, 10));
        ctx.font = `600 ${size}px ${fontFamily}`;
        const width = ctx.measureText(label).width;
        const x = clamp(point.x, chartArea.left + width / 2, chartArea.right - width / 2);
        const collides = (baseline) => Boolean(mainRect
          && x - width / 2 < mainRect.right + 3 && x + width / 2 > mainRect.left - 3
          && baseline > mainRect.top - 3 && baseline - size < mainRect.bottom + 3);
        let y = point.y - 5; // baseline: the text sits in [y - size, y]
        if (y - size < chartArea.top || collides(y)) y = point.y + size + 8;
        if (collides(y)) y = Math.max(chartArea.top + size, mainRect.top - 4);
        if (options.halo) {
          ctx.lineWidth = Math.max(2, size / 4);
          ctx.strokeStyle = options.halo;
          ctx.strokeText(label, x, y);
        }
        // the number takes the point's colour, so a negative reading stays
        // marked in the sign-aware negative tone
        ctx.fillStyle = (Array.isArray(dataset.pointBorderColor) && dataset.pointBorderColor[hover.index])
          || dataset.borderColor || options.color || '#263238';
        ctx.fillText(label, x, y);
      });
      ctx.restore();
      return;
    }
    // static pass: greedy left-to-right, labels that would overlap yield to
    // their neighbour and stay reachable via hover
    let lastRight = -Infinity;
    const staticStyle = { size: fontSize, weight: 600, color: options.color || '#263238' };
    entries.forEach((entry) => {
      const extent = measureAt(entry, staticStyle.size, staticStyle.weight);
      if (extent.left < lastRight + 3) return;
      draw(entry, staticStyle);
      lastRight = extent.right;
    });
    ctx.restore();
  },
};
// Hovering any bar (or growth-line point) lights up its entire metric so the
// series reads as one; the plugin above keys its label emphasis off
// $metricTrendHover, which always stores the metric's bar dataset.
function comparisonMetricTrendHandleHover(chart, elements) {
  let next = null;
  if (elements?.length) {
    let { datasetIndex, index } = elements[0];
    const dataset = chart.data.datasets[datasetIndex];
    let extraDataset = null;
    if (dataset?.type === 'line' && dataset.$barDatasetIndex != null) {
      // a ratio line spans two metrics: label its part side, light both ends
      if (dataset.$pairDatasetIndex != null) extraDataset = dataset.$pairDatasetIndex;
      datasetIndex = dataset.$barDatasetIndex;
    }
    next = { datasetIndex, index, extraDataset };
  }
  const prev = chart.$metricTrendHover || null;
  if ((prev?.datasetIndex ?? -1) === (next?.datasetIndex ?? -1) && (prev?.index ?? -1) === (next?.index ?? -1)) return;
  chart.$metricTrendHover = next;
  const active = [];
  if (next) {
    const pushDataset = (targetIndex) => {
      if (targetIndex == null || !chart.isDatasetVisible(targetIndex)) return;
      const data = chart.data.datasets[targetIndex]?.data || [];
      data.forEach((value, index) => {
        if (value != null) active.push({ datasetIndex: targetIndex, index });
      });
    };
    pushDataset(next.datasetIndex);
    pushDataset(next.extraDataset);
    chart.data.datasets.forEach((dataset, index) => {
      if (dataset.type !== 'line') return;
      if (dataset.$barDatasetIndex === next.datasetIndex || dataset.$pairDatasetIndex === next.datasetIndex) pushDataset(index);
    });
  }
  chart.setActiveElements(active);
  chart.update('none');
}
function createComparisonMetricTrendChartConfig(model) {
  const ink = cssVar('--ink', '#15436b');
  const text = cssVar('--text-strong', '#263238');
  const muted = cssVar('--muted', '#6a7078');
  const grid = cssVar('--table-cell-line', '#edf0f0');
  const axis = cssVar('--table-line', '#d9dfdf');
  const tableBg = cssVar('--table-bg', '#ffffff');
  const negativeColor = cssVar('--trend-negative', '#b7433a');
  const fontFamily = 'Montserrat, Arial, sans-serif';
  const formatValue = (value) => formatAmount(model.caliber, Number(value));
  const allValues = model.metrics.flatMap((metric) => metric.values.filter((value) => value != null));
  const maxValue = Math.max(0, ...allValues);
  // while links are selected the right axis carries their share-of-source
  // percentages; otherwise it carries per-metric growth
  const ratioMode = (model.ratios || []).length > 0;
  const allRight = (ratioMode
    ? model.ratios.flatMap((ratio) => ratio.values)
    : model.metrics.flatMap((metric) => metric.growth)
  ).filter((value) => value != null && Number.isFinite(value));
  const growthMax = allRight.length ? Math.max(10, Math.ceil(Math.max(...allRight) / 10) * 10) : 10;
  const growthMin = allRight.length ? Math.min(0, Math.floor(Math.min(...allRight) / 10) * 10) : 0;
  const grouped = model.metrics.length > 1;
  // metrics that share a node colour (e.g. two profit nodes) step up an alpha
  // ladder so their bars stay tellable apart next to the legend
  const accentSteps = new Map();
  const styles = model.metrics.map((metric) => {
    const accent = clean(metric.accent) || ink;
    const step = accentSteps.get(accent) || 0;
    accentSteps.set(accent, step + 1);
    return {
      accent,
      fillAlpha: Math.min(0.22 + step * 0.2, 0.78),
      borderAlpha: Math.min(0.55 + step * 0.15, 0.95),
    };
  });
  const barDatasets = model.metrics.map((metric, index) => {
    const { accent, fillAlpha, borderAlpha } = styles[index];
    return {
      label: metric.label,
      order: 2,
      data: metric.values,
      backgroundColor: colorWithAlpha(accent, fillAlpha),
      borderColor: colorWithAlpha(accent, borderAlpha),
      borderWidth: 1,
      borderRadius: 4,
      borderSkipped: false,
      barPercentage: grouped ? 0.86 : 0.62,
      categoryPercentage: 0.74,
      maxBarThickness: 72,
      hoverBackgroundColor: colorWithAlpha(accent, Math.min(fillAlpha + 0.12, 0.9)),
      hoverBorderColor: colorWithAlpha(accent, Math.min(borderAlpha + 0.2, 1)),
    };
  });
  const rightAxisLine = (lineColor) => ({
    type: 'line',
    yAxisID: 'yGrowth',
    order: 1,
    borderColor: lineColor,
    backgroundColor: lineColor,
    borderWidth: 1.6,
    borderDash: [5, 3],
    tension: 0.25,
    spanGaps: false,
    fill: false,
    pointRadius: 2.2,
    pointHoverRadius: 4,
    pointBackgroundColor: tableBg,
    pointBorderColor: lineColor,
    pointBorderWidth: 1.2,
    pointHoverBackgroundColor: tableBg,
    pointHoverBorderColor: lineColor,
    pointHoverBorderWidth: 2,
  });
  // ratio mode: one line per selected link, the link's share of its larger
  // endpoint, in the smaller endpoint's colour ("part / whole" in the
  // legend). growth mode: one growth line per metric, hidden from the legend
  // and paired with its bars via $barDatasetIndex.
  const lineDatasets = ratioMode
    ? model.ratios.map((ratio) => {
        const { accent, borderAlpha } = styles[ratio.numeratorIndex];
        return {
          ...rightAxisLine(colorWithAlpha(accent, Math.min(borderAlpha + 0.15, 1))),
          label: ratio.label,
          data: ratio.values,
          $role: 'ratio',
          $barDatasetIndex: ratio.numeratorIndex,
          $pairDatasetIndex: ratio.denominatorIndex,
        };
      })
    : model.metrics.map((metric, index) => {
        const { accent, borderAlpha } = styles[index];
        const lineColor = colorWithAlpha(accent, Math.min(borderAlpha + 0.15, 1));
        // sign-aware rings: growth points below zero swap to the negative
        // colour so dips read at a glance; the line keeps the metric's accent
        const pointColors = metric.growth.map((value) => (
          typeof value === 'number' && value < 0 ? negativeColor : lineColor
        ));
        return {
          ...rightAxisLine(lineColor),
          label: metric.label,
          data: metric.growth,
          pointBorderColor: pointColors,
          pointHoverBorderColor: pointColors,
          $role: 'growth',
          $barDatasetIndex: index,
        };
      });
  return {
    type: 'bar',
    data: { labels: model.labels, datasets: [...barDatasets, ...lineDatasets] },
    plugins: [percentAxisZeroLinePlugin, comparisonMetricTrendValueLabelsPlugin],
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: false,
      layout: { padding: { top: 6, right: 12, bottom: 0, left: 6 } },
      interaction: { mode: 'nearest', intersect: true },
      onHover: (event, elements, chart) => comparisonMetricTrendHandleHover(chart, elements),
      scales: {
        x: {
          offset: true,
          grid: { display: false },
          border: { color: axis },
          ticks: { color: muted, font: { family: fontFamily, size: 11, weight: '500' }, maxRotation: 40 },
        },
        y: {
          beginAtZero: true,
          suggestedMax: maxValue > 0 ? maxValue * 1.16 : 1,
          grid: { color: grid },
          border: { color: axis },
          ticks: {
            color: muted,
            count: 6,
            font: { family: fontFamily, size: 11, weight: '500' },
            callback: (value) => formatValue(value) || value,
          },
        },
        yGrowth: {
          position: 'right',
          suggestedMin: growthMin,
          suggestedMax: growthMax,
          grid: { drawOnChartArea: false },
          border: { color: axis, dash: [5, 3] },
          ticks: {
            color: muted,
            maxTicksLimit: 7,
            font: { family: fontFamily, size: 11, weight: '500' },
            callback: (value) => formatPercent(Number(value)) || value,
          },
        },
      },
      plugins: {
        legend: {
          // one entry per metric: the growth lines ride along with their bars
          display: grouped,
          position: 'top',
          align: 'end',
          labels: {
            usePointStyle: false,
            boxWidth: 12,
            boxHeight: 6,
            padding: 10,
            color: muted,
            font: { family: fontFamily, size: 11, weight: '500' },
            // growth lines ride along with their bars; ratio lines are their
            // own legend entries (named "target / source")
            filter: (item, data) => data.datasets[item.datasetIndex]?.$role !== 'growth',
          },
          onClick: (event, item, legend) => {
            const chart = legend.chart;
            const clicked = chart.data.datasets[item.datasetIndex];
            const visible = chart.isDatasetVisible(item.datasetIndex);
            chart.setDatasetVisibility(item.datasetIndex, !visible);
            if (clicked?.type !== 'line') {
              chart.data.datasets.forEach((dataset, index) => {
                if (dataset.type === 'line' && dataset.$barDatasetIndex === item.datasetIndex) {
                  chart.setDatasetVisibility(index, !visible);
                }
              });
            }
            chart.update();
          },
        },
        tooltip: { enabled: false },
        percentAxisZeroLine: {
          color: colorWithAlpha(muted, 0.5),
          lineDash: [5, 3],
        },
        comparisonMetricTrendValueLabels: {
          color: text,
          mutedColor: colorWithAlpha(text, 0.72),
          halo: cssVar('--table-bg', '#ffffff'),
          fontFamily,
          fontSize: 12,
          minFontSize: 8,
          formatValue,
          growthByDataset: model.metrics.map((metric) => metric.growth),
        },
      },
    },
  };
}
function updateComparisonMetricTrendPanel(records = comparisonScopeRecords()) {
  if (!sankeyComparison) return null;
  destroyComparisonMetricTrendChart();
  sankeyComparison.querySelector('.comparison-metric-trend')?.remove();
  sankeyComparison.querySelectorAll('rect.sankey-node.metric-trend-selected').forEach((rect) => {
    rect.classList.remove('metric-trend-selected');
  });
  sankeyComparison.querySelectorAll('path.sankey-link.metric-trend-selected-link').forEach((path) => {
    path.classList.remove('metric-trend-selected-link');
  });
  const model = comparisonMetricTrendModel(records);
  if (!model) {
    state.comparisonMetricTrend = null;
    return null;
  }
  // selections that failed validation (single point, other currency, missing
  // flow) drop out of the stored state so a later click starts a clean add
  state.comparisonMetricTrend = {
    company: model.selection.company,
    nodeIds: model.keptNodeIds,
    linkIds: model.ratios.map((ratio) => ratio.id),
  };
  // outline every same-caliber node so the expanded metrics stay traceable
  // across the cards; each metric's first outlined node donates its bar colour
  model.metrics.forEach((metric) => {
    const safeNodeId = metric.nodeId.replace(/["\\]/g, '\\$&');
    const datasetKeys = new Set(metric.points.map((point) => point.record.dataset.key));
    sankeyComparison.querySelectorAll('.comparison-chart-host').forEach((host) => {
      if (!datasetKeys.has(host.dataset.datasetKey)) return;
      host.querySelectorAll(`rect.sankey-node[data-node="${safeNodeId}"]`).forEach((rect) => {
        rect.classList.add('metric-trend-selected');
        rect.setAttribute('vector-effect', 'non-scaling-stroke');
        if (!metric.accent) metric.accent = rect.getAttribute('fill') || '';
      });
    });
  });
  // selected flows shine across the cards too
  model.ratios.forEach((ratio) => {
    const safeSource = ratio.source.replace(/["\\]/g, '\\$&');
    const safeTarget = ratio.target.replace(/["\\]/g, '\\$&');
    const datasetKeys = new Set(model.metrics[ratio.sourceIndex].points.map((point) => point.record.dataset.key));
    sankeyComparison.querySelectorAll('.comparison-chart-host').forEach((host) => {
      if (!datasetKeys.has(host.dataset.datasetKey)) return;
      host.querySelectorAll(`path.sankey-link[data-source="${safeSource}"][data-target="${safeTarget}"]`).forEach((path) => {
        path.classList.add('metric-trend-selected-link');
      });
    });
  });

  const title = [
    displayCompanyName(model.selection.company),
    model.metrics.map((metric) => metric.label).join(' / '),
  ].filter(Boolean).join(' · ');
  const first = model.labels[0];
  const last = model.labels[model.labels.length - 1];
  const subtitle = [
    t('comparisonMetricTrendPointCount', { count: model.labels.length }),
    first === last ? first : `${first} → ${last}`,
  ].filter(Boolean).join(' · ');
  const panel = document.createElement('section');
  panel.className = 'comparison-metric-trend';
  panel.style.maxWidth = `${comparisonAvailableWidth()}px`;
  panel.innerHTML = `
    <div class="comparison-card-header comparison-metric-trend-header">
      <strong>${escapeHtml(title)}</strong>
      <span>${escapeHtml(subtitle)}</span>
      <button class="btn icon-btn comparison-metric-trend-close" type="button" aria-label="${escapeHtml(t('comparisonMetricTrendCloseTitle'))}" title="${escapeHtml(t('comparisonMetricTrendCloseTitle'))}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="m6 6 12 12"/><path d="M18 6 6 18"/></svg>
      </button>
    </div>
    <div class="trend-canvas-wrap comparison-trend-canvas-wrap comparison-metric-trend-canvas-wrap">
      <canvas role="img" aria-label="${escapeHtml(`${title} · ${subtitle}`)}"></canvas>
    </div>
  `;
  panel.querySelector('.comparison-metric-trend-close').addEventListener('click', () => {
    state.comparisonMetricTrend = null;
    updateComparisonMetricTrendPanel();
  });
  sankeyComparison.insertBefore(panel, comparisonFlow());
  const canvas = panel.querySelector('canvas');
  if (canvas && window.Chart) {
    comparisonMetricTrendChart = new window.Chart(canvas, createComparisonMetricTrendChartConfig(model));
  }
  return panel;
}
function applyComparisonMetricTrendSelection(next) {
  state.comparisonMetricTrend = next;
  const panel = updateComparisonMetricTrendPanel();
  panel?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
}
function toggleComparisonMetricTrend(record, nodeId) {
  if (!record || !nodeId) return;
  const id = String(nodeId);
  const current = state.comparisonMetricTrend;
  if (!current || current.company !== record.company) {
    applyComparisonMetricTrendSelection({ company: record.company, nodeIds: [id], linkIds: [] });
    return;
  }
  const nodeIds = (current.nodeIds || []).includes(id)
    ? current.nodeIds.filter((item) => item !== id)
    : [...(current.nodeIds || []), id];
  const linkIds = current.linkIds || [];
  applyComparisonMetricTrendSelection(
    nodeIds.length || linkIds.length ? { company: current.company, nodeIds, linkIds } : null
  );
}
function toggleComparisonMetricTrendLink(record, sourceId, targetId) {
  if (!record || !sourceId || !targetId) return;
  const id = `${String(sourceId)}>${String(targetId)}`;
  const current = state.comparisonMetricTrend;
  if (!current || current.company !== record.company) {
    applyComparisonMetricTrendSelection({ company: record.company, nodeIds: [], linkIds: [id] });
    return;
  }
  const linkIds = (current.linkIds || []).includes(id)
    ? current.linkIds.filter((item) => item !== id)
    : [...(current.linkIds || []), id];
  const nodeIds = current.nodeIds || [];
  applyComparisonMetricTrendSelection(
    nodeIds.length || linkIds.length ? { company: current.company, nodeIds, linkIds } : null
  );
}
