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
 * Metrics that live in the same sankey column (e.g. two revenue segments)
 * are siblings of one whole, so they stack into a single additive bar per
 * period instead of grouping: the stack total reads above the bar and each
 * segment carries its share of that total.
 * Clicking a flow between two nodes selects the link instead: both endpoint
 * metrics join the bars (shared endpoints once), and the right axis switches
 * from growth to the link's share of its larger endpoint over time.
 * Both y axes carry a semantic title, and clicking an axis collapses it to
 * just that title, hiding the series it scales (left: bars, right: percent
 * lines); clicking again reopens it, and the last open axis stays put. */
let comparisonMetricTrendChart = null;
// tracks the last rendered panel's stacked-ness so a mode transition (and
// only a transition) can reset the right axis to the mode's default
let comparisonMetricTrendWasStacked = false;
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
  // same layer = wherever two or more picked metrics coexist in a record,
  // their nodes sit in the same authored sankey column, so their values are
  // siblings of one whole and stack into one additive bar instead of
  // grouping. Links never stack: their endpoints span adjacent columns.
  let sawSiblings = false;
  const sameLayer = !keptLinks.length && kept.length > 1 && axisRecords.every((record) => {
    const cols = kept
      .map((metric) => metric.points.find((point) => point.record.index === record.index))
      .filter(Boolean)
      .map((point) => (point.node?.col != null ? point.node.col : null));
    if (cols.length < 2) return true;
    if (cols.some((col) => col == null)) return false;
    sawSiblings = true;
    return cols.every((col) => col === cols[0]);
  }) && sawSiblings;
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
  const hiddenAxes = {
    value: Boolean(selection.hiddenAxes?.value),
    percent: Boolean(selection.hiddenAxes?.percent),
  };
  return { selection, metrics, labels, caliber, ratios, keptNodeIds, sameLayer, hiddenAxes, axisRecords };
}
// Clicking a y axis collapses it to just its title, taking the series it
// scales along; clicking the title reopens it. The last open axis ignores
// collapse clicks so the chart never goes blank. Chart.js only routes events
// inside the plot area, so the axis bands are hit-tested from native canvas
// events; the bands stop at the plot's top/bottom to spare the legend and
// the period labels.
function comparisonMetricTrendAxisAt(chart, event) {
  const { chartArea } = chart;
  if (!chartArea || event?.x == null || event?.y == null) return null;
  if (event.y < chartArea.top || event.y > chartArea.bottom) return null;
  if (event.x < chartArea.left) return 'value';
  if (event.x > chartArea.right) return 'percent';
  return null;
}
function comparisonMetricTrendAxisAtNative(event) {
  const chart = comparisonMetricTrendChart;
  if (!chart || chart.canvas !== event.currentTarget) return null;
  const rect = chart.canvas.getBoundingClientRect();
  return comparisonMetricTrendAxisAt(chart, { x: event.clientX - rect.left, y: event.clientY - rect.top });
}
function toggleComparisonMetricTrendAxis(axisKey) {
  const current = state.comparisonMetricTrend;
  if (!current) return;
  const hiddenAxes = {
    value: Boolean(current.hiddenAxes?.value),
    percent: Boolean(current.hiddenAxes?.percent),
  };
  const other = axisKey === 'value' ? 'percent' : 'value';
  if (!hiddenAxes[axisKey] && hiddenAxes[other]) return;
  hiddenAxes[axisKey] = !hiddenAxes[axisKey];
  state.comparisonMetricTrend = { ...current, hiddenAxes };
  updateComparisonMetricTrendPanel();
}
// Stacked same-layer mode: one additive bar per period. The stack total reads
// above the bar in the flat labels' adaptive size, every segment carries its
// share of that total centered inside it, and hovering a metric swaps its
// shares for absolute values (the hovered segment shows both). Segments too
// thin for a static share stay blank until hover reveals them.
function comparisonMetricTrendDrawStackedLabels(chart, options) {
  const { ctx, chartArea } = chart;
  const fontFamily = options.fontFamily || 'Montserrat, Arial, sans-serif';
  const formatValue = options.formatValue || ((value) => String(value));
  const totals = [];
  const stackTop = [];
  const segments = [];
  chart.data.datasets.forEach((dataset, datasetIndex) => {
    if (dataset.type === 'line' || !chart.isDatasetVisible(datasetIndex)) return;
    const meta = chart.getDatasetMeta(datasetIndex);
    if (!meta?.data?.length) return;
    dataset.data.forEach((value, index) => {
      if (value == null) return;
      const bar = meta.data[index];
      if (!bar) return;
      totals[index] = (totals[index] || 0) + value;
      if (!stackTop[index] || bar.y < stackTop[index].y) stackTop[index] = bar;
      segments.push({ bar, datasetIndex, index, value });
    });
  });
  // a collapsed value axis leaves no stack segments, but a hovered percent
  // line still owes its number at the point, so only bail with no such hover
  const hover = chart.$metricTrendHover;
  const hoverLineVisible = Boolean(hover) && chart.data.datasets.some((dataset, index) => (
    dataset.type === 'line' && chart.isDatasetVisible(index) && dataset.$barDatasetIndex === hover.datasetIndex
  ));
  if (!segments.length && !hoverLineVisible) return;
  const totalEntries = [];
  stackTop.forEach((bar, index) => {
    if (!bar || totals[index] == null) return;
    const label = formatValue(totals[index]);
    if (label) totalEntries.push({ bar, label });
  });
  ctx.save();
  ctx.textAlign = 'center';
  ctx.textBaseline = 'bottom';
  const baseSize = options.fontSize || 12;
  const minSize = options.minFontSize || 8;
  // totals shrink until the widest fits the tightest bar spacing, and a total
  // that still cannot fit yields to its left neighbour, like the flat labels
  ctx.font = `700 ${baseSize}px ${fontFamily}`;
  const widest = totalEntries.reduce((max, entry) => Math.max(max, ctx.measureText(entry.label).width), 0);
  let minSpacing = Infinity;
  for (let i = 1; i < totalEntries.length; i += 1) {
    minSpacing = Math.min(minSpacing, totalEntries[i].bar.x - totalEntries[i - 1].bar.x);
  }
  if (!Number.isFinite(minSpacing)) minSpacing = chartArea.right - chartArea.left;
  let fontSize = baseSize;
  if (widest > minSpacing * 0.94) {
    fontSize = Math.max(minSize, Math.floor((baseSize * minSpacing * 0.94) / widest));
  }
  const paint = (label, x, y, color) => {
    if (options.halo) {
      ctx.lineWidth = Math.max(2, fontSize / 4);
      ctx.strokeStyle = options.halo;
      ctx.strokeText(label, x, y);
    }
    ctx.fillStyle = color;
    ctx.fillText(label, x, y);
  };
  let lastRight = -Infinity;
  totalEntries.forEach((entry) => {
    ctx.font = `700 ${fontSize}px ${fontFamily}`;
    const width = ctx.measureText(entry.label).width;
    const x = clamp(entry.bar.x, chartArea.left + width / 2, chartArea.right - width / 2);
    if (x - width / 2 < lastRight + 3) return;
    const y = entry.bar.y - 3 < chartArea.top + fontSize ? entry.bar.y + fontSize + 6 : entry.bar.y - 3;
    paint(entry.label, x, y, options.color || '#263238');
    lastRight = x + width / 2;
  });
  ctx.textBaseline = 'middle';
  segments.forEach((segment) => {
    const total = totals[segment.index];
    if (!total) return;
    const share = (segment.value / total) * 100;
    const hovered = hover && hover.datasetIndex === segment.datasetIndex;
    const isMain = hovered && hover.index === segment.index;
    let label = hovered ? formatValue(segment.value) : formatPercent(share);
    if (isMain) label = `${formatValue(segment.value)} · ${formatPercent(share)}`;
    if (!label) return;
    const size = isMain ? Math.max(Math.min(fontSize + 1, 12), minSize) : Math.max(Math.min(fontSize, 11), minSize);
    const height = Math.abs(segment.bar.base - segment.bar.y);
    if (!hovered && height < size + 4) return; // too thin for a static share; hover reveals it
    ctx.font = `600 ${size}px ${fontFamily}`;
    const width = ctx.measureText(label).width;
    const x = clamp(segment.bar.x, chartArea.left + width / 2, chartArea.right - width / 2);
    const y = clamp((segment.bar.y + segment.bar.base) / 2, chartArea.top + size / 2, chartArea.bottom - size / 2);
    paint(label, x, y, isMain || !hover
      ? (options.color || '#263238')
      : (options.mutedColor || options.color || '#263238'));
  });
  // the hovered metric's growth number rides its line point, like flat mode
  if (hover) {
    ctx.textBaseline = 'bottom';
    chart.data.datasets.forEach((dataset, datasetIndex) => {
      if (dataset.type !== 'line' || !chart.isDatasetVisible(datasetIndex)) return;
      if (dataset.$barDatasetIndex !== hover.datasetIndex) return;
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
      let y = point.y - 5;
      if (y - size < chartArea.top) y = point.y + size + 8;
      if (options.halo) {
        ctx.lineWidth = Math.max(2, size / 4);
        ctx.strokeStyle = options.halo;
        ctx.strokeText(label, x, y);
      }
      ctx.fillStyle = (Array.isArray(dataset.pointBorderColor) && dataset.pointBorderColor[hover.index])
        || dataset.borderColor || options.color || '#263238';
      ctx.fillText(label, x, y);
    });
  }
  ctx.restore();
}
// Value labels shrink to the tightest bar spacing, and labels that still
// cannot fit yield to their left neighbour instead of overlapping; hovering a
// bar re-labels its whole metric (hovered bar loudest, siblings quieter) so
// every dropped number stays reachable.
const comparisonMetricTrendValueLabelsPlugin = {
  id: 'comparisonMetricTrendValueLabels',
  afterDatasetsDraw(chart, _args, options) {
    if (options.stacked) {
      comparisonMetricTrendDrawStackedLabels(chart, options);
      return;
    }
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
    // a collapsed value axis hides every bar, but the hovered metric's
    // right-axis lines still owe their numbers, so only bail with no hover
    // that has a visible line to label
    const hover = chart.$metricTrendHover;
    const hoverLineVisible = Boolean(hover) && chart.data.datasets.some((dataset, index) => (
      dataset.type === 'line' && chart.isDatasetVisible(index)
      && (dataset.$barDatasetIndex === hover.datasetIndex || dataset.$pairDatasetIndex === hover.datasetIndex)
    ));
    if (!entries.length && !hoverLineVisible) return;
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
    if (hover && (chart.isDatasetVisible(hover.datasetIndex) || hoverLineVisible)) {
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
      const mainStyle = { size: Math.max(fontSize + 1, 12), weight: 600, color: options.color || '#263238' };
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
// Hovering a bar (or line point) also lights the same metric's node inside
// the sankey card of that exact period — and outlines the card — so the bar
// and its flow read as one object across the two views. A ratio-line hover
// spans two endpoint metrics, so both nodes and the flow between them light.
function syncComparisonMetricTrendHoverHighlight(chart) {
  if (!sankeyComparison) return;
  // un-light exactly what the previous hover lit — rescanning every card's
  // subtree for leftover classes made each bar-to-bar hover pay for the
  // whole comparison, not just the two nodes that actually changed
  (chart.$metricTrendHoverEls || []).forEach((el) => {
    el.classList.remove('metric-trend-hover', 'metric-trend-hover-link');
  });
  const lit = [];
  chart.$metricTrendHoverEls = lit;
  const model = chart.$metricTrendModel;
  const hover = chart.$metricTrendHover;
  const record = hover ? model?.axisRecords?.[hover.index] : null;
  setComparisonPeriodHoverLink(record ? [record.index] : []);
  if (!record) return;
  // cards live exactly as long as this chart (both rebuild together), so the
  // dataset-key → host lookup is resolved once instead of per hover change
  if (!chart.$metricTrendHostByKey) {
    chart.$metricTrendHostByKey = new Map(
      [...sankeyComparison.querySelectorAll('.comparison-chart-host')]
        .map((host) => [host.dataset.datasetKey, host])
    );
  }
  const host = chart.$metricTrendHostByKey.get(record.dataset.key);
  if (!host) return;
  const safeId = (id) => String(id).replace(/["\\]/g, '\\$&');
  [hover.datasetIndex, hover.extraDataset].forEach((metricIndex) => {
    const nodeId = metricIndex != null ? model.metrics[metricIndex]?.nodeId : null;
    if (!nodeId) return;
    host.querySelectorAll(`rect.sankey-node[data-node="${safeId(nodeId)}"]`).forEach((rect) => {
      rect.classList.add('metric-trend-hover');
      lit.push(rect);
    });
  });
  if (hover.extraDataset != null) {
    (model.ratios || [])
      .filter((ratio) => ratio.numeratorIndex === hover.datasetIndex && ratio.denominatorIndex === hover.extraDataset)
      .forEach((ratio) => {
        host.querySelectorAll(`path.sankey-link[data-source="${safeId(ratio.source)}"][data-target="${safeId(ratio.target)}"]`).forEach((path) => {
          path.classList.add('metric-trend-hover-link');
          lit.push(path);
        });
      });
  }
}
// Hover engages anywhere in a period's vertical band (nearest by x, no
// intersect), so the thin line points never demand pixel-precise aim. The
// index comes from Chart.js's hit; among the metrics present at that index
// the pointer's position decides which one the hover means (inside a bar or
// segment counts as an exact hit). The labels plugin keys its emphasis off
// $metricTrendHover, which always stores the metric's bar dataset.
function comparisonMetricTrendHandleHover(chart, elements, position) {
  let next = null;
  if (elements?.length) {
    const { index } = elements[0];
    let picked = { datasetIndex: elements[0].datasetIndex };
    if (position?.x != null && position?.y != null) {
      let bestDistance = Infinity;
      chart.data.datasets.forEach((dataset, datasetIndex) => {
        if (!chart.isDatasetVisible(datasetIndex) || dataset.data?.[index] == null) return;
        const element = chart.getDatasetMeta(datasetIndex)?.data?.[index];
        const center = element?.getCenterPoint ? element.getCenterPoint() : null;
        if (!center || !Number.isFinite(center.x) || !Number.isFinite(center.y)) return;
        const inside = typeof element.inRange === 'function' && element.inRange(position.x, position.y);
        const distance = inside ? 0 : Math.hypot(center.x - position.x, center.y - position.y);
        if (distance < bestDistance) {
          bestDistance = distance;
          picked = { datasetIndex };
        }
      });
    }
    let { datasetIndex } = picked;
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
  if ((prev?.datasetIndex ?? -1) === (next?.datasetIndex ?? -1) && (prev?.index ?? -1) === (next?.index ?? -1)) return false;
  chart.$metricTrendHover = next;
  syncComparisonMetricTrendHoverHighlight(chart);
  // exits across an axis band never reach Chart.js's own active bookkeeping
  // (events outside the plot area keep the last active set), so an emptied
  // hover drops the element highlights explicitly
  if (!next) chart.setActiveElements([]);
  return true;
}
// Chart.js resolves its own active elements after onHover returns — anything
// set from inside that callback is clobbered mid-event and its hover styles
// leak — and it never calls onHover for mouseout or for moves outside the
// plot area, which is exactly when a hover must clear. afterEvent runs once
// the event has fully settled, so the hover state derives from the final
// active elements and clears on every exit path.
const comparisonMetricTrendHoverPlugin = {
  id: 'comparisonMetricTrendHover',
  afterEvent(chart, args) {
    const engaged = args.inChartArea && args.event?.type !== 'mouseout';
    if (comparisonMetricTrendHandleHover(chart, engaged ? chart.getActiveElements() : [], args.event)) {
      args.changed = true;
    }
  },
};
function createComparisonMetricTrendChartConfig(model) {
  const { ink, text, muted, grid, axis, tableBg, negativeColor, fontFamily } = chartTheme();
  const formatValue = (value) => formatAmount(model.caliber, Number(value));
  const stacked = Boolean(model.sameLayer);
  const valueAxisCollapsed = Boolean(model.hiddenAxes?.value);
  const percentAxisCollapsed = Boolean(model.hiddenAxes?.percent);
  const allValues = model.metrics.flatMap((metric) => metric.values.filter((value) => value != null));
  // a stacked bar's ceiling is the summed stack, not the tallest metric
  const maxValue = stacked
    ? Math.max(0, ...model.labels.map((_, index) => model.metrics.reduce((sum, metric) => (
        sum + Math.max(metric.values[index] || 0, 0)
      ), 0)))
    : Math.max(0, ...allValues);
  // while links are selected the right axis carries their share-of-source
  // percentages; otherwise it carries per-metric growth
  const ratioMode = (model.ratios || []).length > 0;
  const allRight = (ratioMode
    ? model.ratios.flatMap((ratio) => ratio.values)
    : model.metrics.flatMap((metric) => metric.growth)
  ).filter((value) => value != null && Number.isFinite(value));
  const growthMax = growthAxisMax(allRight);
  const growthMin = growthAxisMin(allRight);
  // each axis names its reading; a collapsed axis keeps only this title,
  // marked and muted, as the handle to reopen it
  const axisTitleFor = (axisKey) => {
    const collapsed = axisKey === 'value' ? valueAxisCollapsed : percentAxisCollapsed;
    const text = axisKey === 'value'
      ? t('comparisonMetricTrendAxisValue', { unit: `${model.caliber.currency}${model.caliber.unit}` })
      : t(ratioMode ? 'comparisonMetricTrendAxisShare' : 'comparisonMetricTrendAxisGrowth');
    return {
      display: true,
      text: collapsed ? `▸ ${text}` : text,
      color: collapsed ? colorWithAlpha(muted, 0.7) : muted,
      font: { family: fontFamily, size: 11, weight: '600' },
    };
  };
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
      hidden: valueAxisCollapsed,
      stack: stacked ? 'same-layer' : undefined,
      backgroundColor: colorWithAlpha(accent, fillAlpha),
      borderColor: colorWithAlpha(accent, borderAlpha),
      borderWidth: 1,
      borderRadius: stacked ? 2 : 4,
      borderSkipped: false,
      barPercentage: grouped && !stacked ? 0.86 : 0.62,
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
    hidden: percentAxisCollapsed,
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
        // the line keeps the metric's accent; only dipped points swap colour
        const pointColors = signAwareGrowthPointColors(metric.growth, lineColor, negativeColor);
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
    plugins: [percentAxisZeroLinePlugin, comparisonMetricTrendValueLabelsPlugin, comparisonMetricTrendHoverPlugin],
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: false,
      layout: { padding: { top: 6, right: 12, bottom: 0, left: 6 } },
      interaction: { mode: 'nearest', axis: 'x', intersect: false },
      scales: {
        x: {
          offset: true,
          stacked,
          grid: { display: false },
          border: { color: axis },
          ticks: { color: muted, font: { family: fontFamily, size: 11, weight: '500' }, maxRotation: 40 },
        },
        y: {
          beginAtZero: true,
          stacked,
          suggestedMax: maxValue > 0 ? maxValue * 1.16 : 1,
          title: axisTitleFor('value'),
          grid: { color: grid, display: !valueAxisCollapsed },
          border: { color: axis, display: !valueAxisCollapsed },
          ticks: {
            display: !valueAxisCollapsed,
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
          title: axisTitleFor('percent'),
          grid: { drawOnChartArea: false },
          border: { color: axis, dash: [5, 3], display: !percentAxisCollapsed },
          ticks: {
            display: !percentAxisCollapsed,
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
            // a legend click on a series whose axis is collapsed reopens the
            // axis (with all its series) instead of toggling one dataset
            const axisKey = clicked?.type === 'line' ? 'percent' : 'value';
            if (state.comparisonMetricTrend?.hiddenAxes?.[axisKey]) {
              toggleComparisonMetricTrendAxis(axisKey);
              return;
            }
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
        percentAxisZeroLine: percentAxisCollapsed ? false : {
          color: colorWithAlpha(muted, 0.5),
          lineDash: [5, 3],
        },
        comparisonMetricTrendValueLabels: {
          color: text,
          mutedColor: colorWithAlpha(text, 0.72),
          halo: tableBg,
          fontFamily,
          fontSize: 12,
          minFontSize: 8,
          stacked,
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
  // a rebuilt chart starts unhovered; drop hover leftovers on cards and nodes
  sankeyComparison.querySelectorAll('.metric-trend-hover, .metric-trend-hover-link').forEach((el) => {
    el.classList.remove('metric-trend-hover', 'metric-trend-hover-link');
  });
  setComparisonPeriodHoverLink();
  const model = comparisonMetricTrendModel(records);
  if (!model) {
    state.comparisonMetricTrend = null;
    comparisonMetricTrendWasStacked = false;
    return null;
  }
  // stacked segments already read as shares of the stack, so entering
  // stacked mode collapses the growth right axis by default and leaving
  // restores it; within one mode the user's own axis clicks stay in charge
  // (the value axis being collapsed blocks the default: never both hidden)
  if (model.sameLayer !== comparisonMetricTrendWasStacked) {
    model.hiddenAxes.percent = model.sameLayer && !model.hiddenAxes.value;
    comparisonMetricTrendWasStacked = model.sameLayer;
  }
  // selections that failed validation (single point, other currency, missing
  // flow) drop out of the stored state so a later click starts a clean add
  state.comparisonMetricTrend = {
    company: model.selection.company,
    nodeIds: model.keptNodeIds,
    linkIds: model.ratios.map((ratio) => ratio.id),
    hiddenAxes: model.hiddenAxes,
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
    t('comparisonMetricTrendAxisHint'),
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
    comparisonMetricTrendChart.$metricTrendModel = model;
    canvas.addEventListener('click', (event) => {
      const axisKey = comparisonMetricTrendAxisAtNative(event);
      if (axisKey) toggleComparisonMetricTrendAxis(axisKey);
    });
    canvas.addEventListener('mousemove', (event) => {
      const cursor = comparisonMetricTrendAxisAtNative(event) ? 'pointer' : '';
      // style writes invalidate style state even when the value is equal,
      // and this handler runs on every pointer move over the chart
      if (event.currentTarget.style.cursor !== cursor) event.currentTarget.style.cursor = cursor;
    });
  }
  return panel;
}
function applyComparisonMetricTrendSelection(next) {
  state.comparisonMetricTrend = next;
  const showPanel = () => {
    const panel = updateComparisonMetricTrendPanel();
    panel?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  };
  if (!window.Chart) {
    viewRuntimeLoader.ensureChart().then(showPanel).catch((error) => console.error(error));
    return;
  }
  showPanel();
}
// Combo selections replace the whole selection at once instead of toggling:
// solo keeps only the clicked object, layer keeps the clicked node plus every
// node sharing its authored sankey column — exactly the sibling set the
// stacked same-layer mode can add into one bar. Axis collapse state survives
// while the company stays the same.
function comparisonMetricTrendComboSelection(record, nodeIds, linkIds) {
  const current = state.comparisonMetricTrend;
  return {
    company: record.company,
    nodeIds,
    linkIds,
    hiddenAxes: current?.company === record.company ? current.hiddenAxes : undefined,
  };
}
function sameLayerNodeIds(record, nodeId) {
  const nodes = record.dataset?.nodes || [];
  const anchor = nodes.find((node) => String(node.id) === nodeId);
  if (anchor?.col == null) return [nodeId];
  return nodes.filter((node) => node.col === anchor.col).map((node) => String(node.id));
}
function toggleComparisonMetricTrend(record, nodeId, event) {
  if (!record || !nodeId) return;
  const id = String(nodeId);
  if (event && matchesHotkey(event, 'metricSoloClick')) {
    applyComparisonMetricTrendSelection(comparisonMetricTrendComboSelection(record, [id], []));
    return;
  }
  if (event && matchesHotkey(event, 'metricLayerClick')) {
    applyComparisonMetricTrendSelection(comparisonMetricTrendComboSelection(record, sameLayerNodeIds(record, id), []));
    return;
  }
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
    nodeIds.length || linkIds.length
      ? { company: current.company, nodeIds, linkIds, hiddenAxes: current.hiddenAxes }
      : null
  );
}
function toggleComparisonMetricTrendLink(record, sourceId, targetId, event) {
  if (!record || !sourceId || !targetId) return;
  const id = `${String(sourceId)}>${String(targetId)}`;
  // a link spans two columns, so its "layer" collapses to the link itself:
  // both combos solo-select it
  if (event && (matchesHotkey(event, 'metricSoloClick') || matchesHotkey(event, 'metricLayerClick'))) {
    applyComparisonMetricTrendSelection(comparisonMetricTrendComboSelection(record, [], [id]));
    return;
  }
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
    nodeIds.length || linkIds.length
      ? { company: current.company, nodeIds, linkIds, hiddenAxes: current.hiddenAxes }
      : null
  );
}
