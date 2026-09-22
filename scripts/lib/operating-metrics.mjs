// Source-stated supplemental observations travel with an income statement,
// but never participate in its accounting sums or Sankey flow values.
export const OPERATING_METRIC_SIGNAL = 'supplemental-operating-metrics';
export const OPERATING_METRIC_UNITS = Object.freeze(['K', 'M', 'B', 'T', '%', 'count']);
export const OPERATING_METRIC_COMPARISONS = Object.freeze(['eq', 'gt', 'gte', 'lt', 'lte']);
const COMPARISONS = { eq: '', gt: '>', gte: '>=', lt: '<', lte: '<=' };
const MONEY = new Set(['K', 'M', 'B', 'T']);
const CURRENCY_PREFIX = { USD: '$', EUR: '€', GBP: '£', JPY: '¥', CNY: 'CN¥', HKD: 'HK$' };
const ID = /^[a-z0-9]+(?:[._:-][a-z0-9]+)*$/;
function requireThat(ok, message) {
  if (!ok) throw Object.assign(new Error(message), { code: 'OPERATING_METRIC_INVALID' });
}
function decimal(value) {
  requireThat(typeof value === 'string' && /^-?(?:0|[1-9]\d*)(?:\.\d+)?$/.test(value), 'Operating metric requires an exact decimal string');
  return value.replace(/(\.\d*?)0+$/, '$1').replace(/\.$/, '').replace(/^-0$/, '0');
}
export function normalizeOperatingObservation(raw) {
  requireThat(raw && typeof raw === 'object', 'Operating observation is required');
  const value = decimal(raw.value);
  requireThat(OPERATING_METRIC_UNITS.includes(raw.unit), 'Unsupported operating metric unit');
  requireThat(Object.hasOwn(COMPARISONS, raw.comparison), 'Operating metric needs an explicit comparison');
  requireThat(MONEY.has(raw.unit) ? Object.hasOwn(CURRENCY_PREFIX, raw.currency) : raw.currency === null, 'Operating metric currency disagrees with its dimension');
  requireThat(typeof raw.literal === 'string' && raw.literal.trim(), 'Operating metric literal is required');
  let literal = raw.literal.replaceAll(',', '').replace(/\s/g, '');
  const comparison = literal.match(/^(>=|<=|>|<)/)?.[0] || '';
  requireThat(comparison === COMPARISONS[raw.comparison], 'Operating metric comparison disagrees with its literal');
  literal = literal.slice(comparison.length);
  if (raw.unit === 'count') {
    requireThat(!value.includes('.') && !value.startsWith('-'), 'Counts must be nonnegative integers');
    const match = literal.match(/^(\d+)(?:\.(\d+))?([KMBT])?$/);
    requireThat(match, 'Count literal must be a nonnegative number with an optional K/M/B/T scale');
    const fraction = match[2] || '';
    const power = { K: 3, M: 6, B: 9, T: 12 }[match[3]] || 0;
    const numerator = BigInt(match[1] + fraction) * (10n ** BigInt(power));
    const denominator = 10n ** BigInt(fraction.length);
    requireThat(numerator % denominator === 0n && numerator / denominator === BigInt(value), 'Count literal does not equal its exact integer value');
    return { value, unit: raw.unit, currency: raw.currency, comparison: raw.comparison, literal: raw.literal };
  }
  const prefix = MONEY.has(raw.unit) ? CURRENCY_PREFIX[raw.currency] : '';
  const suffix = raw.unit;
  requireThat(literal.startsWith(prefix) && literal.endsWith(suffix), 'Operating metric unit/currency disagrees with its literal');
  const numeric = literal.slice(prefix.length, suffix ? -suffix.length : undefined);
  // A Source may explicitly print positive growth; retain that literal while
  // comparing its magnitude with the canonical, unsigned positive value.
  const magnitude = /^\+(?:0|[1-9]\d*)(?:\.\d+)?$/.test(numeric) ? numeric.slice(1) : numeric;
  requireThat(decimal(magnitude) === value, 'Operating metric value disagrees with its literal');
  return { value, unit: raw.unit, currency: raw.currency, comparison: raw.comparison, literal: raw.literal };
}
export function validateOperatingMetrics(record) {
  const metrics = record.operatingMetrics ?? [];
  requireThat(Array.isArray(metrics), 'operatingMetrics must be an array');
  const ids = new Set();
  for (const metric of metrics) {
    requireThat(ID.test(metric?.id || '') && !ids.has(metric.id), 'Operating metric ids must be unique and stable');
    ids.add(metric.id);
    normalizeOperatingObservation(metric);
    requireThat(typeof metric.label === 'string' && metric.label.trim(), 'Operating metric label is required');
    requireThat(typeof metric.basis === 'string' && metric.basis.trim(), 'Operating metric basis is required (use unspecified when unstated)');
    requireThat(typeof metric.quote === 'string' && metric.quote.includes(metric.label) && metric.quote.includes(metric.literal), 'Operating metric quote must preserve its label and literal');
    const box = metric.anchor?.box;
    requireThat(metric.anchor?.type === 'image-box' && Array.isArray(box) && box.length === 4 && box.every(Number.isInteger) && box[0] >= 0 && box[1] >= 0 && box[2] > 0 && box[3] > 0, 'Operating metric needs a native image anchor');
    requireThat(Array.isArray(metric.notes) && metric.notes.every((note) => typeof note === 'string' && metric.quote.includes(note)), 'Operating metric notes must be retained in the Source quote');
  }
  return metrics;
}
export function sameOperatingObservation(left, right) {
  return JSON.stringify(normalizeOperatingObservation(left)) === JSON.stringify(normalizeOperatingObservation(right));
}
function decodeText(value) {
  return value.replace(/&(?:gt|lt|amp|quot|apos);/g, (entity) => ({ '&gt;': '>', '&lt;': '<', '&amp;': '&', '&quot;': '"', '&apos;': "'" })[entity]);
}
// A dedicated text element owns each literal. This makes label/number mixups
// and dropped inequalities detectable without interpreting arbitrary SVG.
export function assertOperatingMetricView(record, dataset) {
  const metrics = validateOperatingMetrics(record);
  const view = dataset.operatingMetrics ?? [];
  requireThat(Array.isArray(view) && view.length === metrics.length, 'Operating metric SSOT/View coverage differs');
  for (const metric of metrics) {
    const matches = view.filter((entry) => entry.id === metric.id);
    requireThat(matches.length === 1 && sameOperatingObservation(metric, matches[0]), `Operating metric ${metric.id} SSOT/View mismatch`);
    requireThat(!(dataset.nodes || []).some((node) => node.id === metric.id) && !(dataset.nonNodeMetrics || []).some((node) => node.id === metric.id), `Operating metric ${metric.id} cannot become a financial flow metric`);
  }
  for (const [locale, svg] of [['en', dataset.annotationsSvg], ...Object.entries(dataset.i18n || {}).map(([locale, overlay]) => [locale, overlay.annotationsSvg ?? dataset.annotationsSvg])]) {
    const texts = [...String(svg || '').matchAll(/<text\b([^>]*)>([^<]*)<\/text\s*>/g)].flatMap((match) => {
      const id = match[1].match(/\bdata-operating-metric\s*=\s*(['"])([^'"]+)\1/);
      return id ? [{ id: id[2], literal: decodeText(match[2]).trim() }] : [];
    });
    requireThat(texts.length === metrics.length, `${locale}: every operating metric needs exactly one dedicated value text`);
    for (const metric of metrics) requireThat(texts.filter((text) => text.id === metric.id && text.literal === metric.literal).length === 1, `${locale}: operating metric ${metric.id} visible literal mismatch`);
  }
  return metrics;
}
