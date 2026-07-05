/* Trace viewer · chart-theme.js
 * Shared Chart.js layer for the trend views: theme token bundle, the
 * percent-axis zero-line plugin, and growth-axis helpers reused by
 * trend.js and comparison-metric-trend.js. */

function chartTheme() {
  return {
    ink: cssVar('--ink', '#15436b'),
    text: cssVar('--text-strong', '#263238'),
    muted: cssVar('--muted', '#6a7078'),
    grid: cssVar('--table-cell-line', '#edf0f0'),
    axis: cssVar('--table-line', '#d9dfdf'),
    tableBg: cssVar('--table-bg', '#ffffff'),
    growthColor: cssVar('--trend-growth', '#9a6a2f'),
    negativeColor: cssVar('--trend-negative', '#b7433a'),
    fontFamily: 'Montserrat, Arial, sans-serif',
  };
}

/* Shared zero-baseline rule: any trend chart whose right axis carries
 * percentages (growth or link share) draws a dashed guide at 0% once the
 * axis spans negative and positive values. Right-axis gridlines stay off the
 * plot area, so without the guide the sign flip has no visual anchor. */
const percentAxisZeroLinePlugin = {
  id: 'percentAxisZeroLine',
  beforeDatasetsDraw(chart, _args, options) {
    const scale = chart.scales?.[options.scaleId || 'yGrowth'];
    const { ctx, chartArea } = chart;
    if (!scale || !chartArea || !(scale.min < 0 && scale.max > 0)) return;
    const y = scale.getPixelForValue(0);
    if (!Number.isFinite(y) || y <= chartArea.top + 1 || y >= chartArea.bottom - 1) return;
    ctx.save();
    ctx.strokeStyle = options.color || 'rgba(106, 112, 120, 0.5)';
    ctx.lineWidth = options.lineWidth || 1;
    ctx.setLineDash(options.lineDash || [5, 3]);
    ctx.beginPath();
    ctx.moveTo(chartArea.left, y);
    ctx.lineTo(chartArea.right, y);
    ctx.stroke();
    ctx.restore();
  },
};

function finitePercentValues(values) {
  return (values || []).filter((value) => typeof value === 'number' && Number.isFinite(value));
}

// Right-axis ceilings/floors snap outward to the next 10% step so tick
// labels stay round; the ceiling never drops below 10%.
function growthAxisMax(values) {
  const finite = finitePercentValues(values);
  return finite.length ? Math.max(10, Math.ceil(Math.max(...finite) / 10) * 10) : 10;
}
function growthAxisMin(values) {
  const finite = finitePercentValues(values);
  return finite.length ? Math.min(0, Math.floor(Math.min(...finite) / 10) * 10) : 0;
}

// Sign-aware rings: a growth point below zero swaps its ring to the negative
// colour so dips read at a glance; positive points keep the series accent.
function signAwareGrowthPointColors(values, positiveColor, negativeColor) {
  return (values || []).map((value) => (
    typeof value === 'number' && value < 0 ? negativeColor : positiveColor
  ));
}
