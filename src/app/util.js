/* Trace viewer · util.js
 * Generic helpers with no UI state of their own: string/number formatting,
 * escaping, URL safety, colors, CSV cells, idle scheduling. */

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function escapeHtml(value) {
  return String(value || '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[char]));
}
function matches(text, query) {
  const haystack = normalize(text);
  return normalize(query).split(' ').filter(Boolean).every((token) => haystack.includes(token));
}

function labelText(label) {
  return Array.isArray(label) ? label.map(clean).filter(Boolean).join(' ') : clean(label);
}
function notesText(notes) {
  return (notes || []).map(clean).filter(Boolean).join(' ');
}
function formatAmount(record, value, cost = false) {
  if (typeof value !== 'number' || !Number.isFinite(value)) return '';
  const decimals = typeof record?.decimals === 'number' ? record.decimals : 1;
  const amount = `${record?.currency || '$'}${Math.abs(value).toFixed(decimals)}${record?.unit || ''}`;
  return cost || value < 0 ? `(${amount})` : amount;
}
function formatRevenueValue(metric, value) {
  if (typeof value !== 'number' || !Number.isFinite(value)) return '';
  const decimals = typeof metric?.decimals === 'number' ? metric.decimals : 1;
  return `${metric?.currency || '$'}${Math.abs(value).toFixed(decimals)}${metric?.unit || 'B'}`;
}
function formatPercent(value) {
  if (typeof value !== 'number' || !Number.isFinite(value)) return '';
  return `${value.toFixed(Number.isInteger(value) ? 0 : 1)}%`;
}
function formatMetricDate(value, language = state.language) {
  const time = Date.parse(`${clean(value)}T00:00:00Z`);
  if (!Number.isFinite(time)) return clean(value);
  const locale = languageCode(language) === 'zh' ? 'zh-CN' : 'en-US';
  return new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' }).format(new Date(time));
}
function sourceImageForRevenueMetric(metric) {
  return (metric?.sources || []).find((source) => source.sourceImage)?.sourceImage?.src || '';
}
function describeItemList(items, record, prefix = '') {
  return (items || []).flatMap((item) => {
    const label = [prefix, labelText(item.label)].filter(Boolean).join(' / ');
    const notes = notesText(item.notes);
    const itemText = `${label}: ${formatAmount(record, item.value)}${notes ? ` (${notes})` : ''}`;
    return [itemText, ...describeItemList(item.children, record, label)];
  });
}
function describeItems(items, record, prefix = '') {
  return describeItemList(items, record, prefix).join('; ');
}

function formatTrendDate(value, language = state.language) {
  const time = Date.parse(`${clean(value)}T00:00:00Z`);
  if (!Number.isFinite(time)) return clean(value);
  const locale = languageCode(language) === 'zh' ? 'zh-CN' : 'en-US';
  return new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'short', timeZone: 'UTC' }).format(new Date(time));
}
function cssVar(name, fallback = '') {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback;
}
function colorWithAlpha(color, alpha) {
  const trimmed = clean(color);
  const hex = trimmed.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)?.[1];
  if (!hex) return trimmed;
  const expanded = hex.length === 3 ? hex.split('').map((part) => part + part).join('') : hex;
  const value = Number.parseInt(expanded, 16);
  const r = (value >> 16) & 255;
  const g = (value >> 8) & 255;
  const b = value & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function safeUrl(url) {
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'https:' || parsed.protocol === 'http:' ? parsed.href : '';
  } catch (error) {
    return '';
  }
}
function linksHtml(urls) {
  const links = (urls || []).map(safeUrl).filter(Boolean);
  if (!links.length) return `<span class="cell-muted">${escapeHtml(t('missing'))}</span>`;
  return links.map((url, index) => `<a href="${escapeHtml(url)}" target="_blank" rel="noopener">${escapeHtml(t('source', { number: index + 1 }))}</a>`).join(' ');
}
function websiteHtml(url) {
  const safe = safeUrl(url);
  return safe ? `<a href="${escapeHtml(safe)}" target="_blank" rel="noopener">${escapeHtml(safe.replace(/^https?:\/\//, '').replace(/\/$/, ''))}</a>` : '';
}

function scheduleIdleTask(callback) {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(callback, { timeout: 1200 });
    return;
  }
  window.setTimeout(() => callback({ timeRemaining: () => 0 }), 160);
}

function escapeSelector(value) {
  if (window.CSS?.escape) return window.CSS.escape(value);
  return String(value).replace(/["\\]/g, '\\$&');
}
