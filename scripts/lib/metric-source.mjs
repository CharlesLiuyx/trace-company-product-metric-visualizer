// Pure, media-neutral facts. Text anchors are UTF-16 ranges (String.slice);
// image anchors are native pixel boxes. Neither is synthesized from the other.
// compileMetricFacts also emits the flat source-objects/v1 list for the Build.
import { digestCanonical } from './source-objects.mjs';

export const SOURCE_FACTS_PROTOCOL = 'source-facts/v1';
export const METRIC_RECORD_PROTOCOL = 'metric-observations/v1';
const ID = /^[a-z0-9]+(?:[._:-][a-z0-9]+)*$/;
const DECIMAL = /^-?(?:0|[1-9]\d*)(?:\.\d+)?$/;
const RESIDUALS = new Set(['publisher-attribution', 'creator-branding', 'website-url', 'social-badge', 'decorative-residue']);

function requireThat(ok, message) {
  if (!ok) throw Object.assign(new Error(message), { code: 'METRIC_FACTS_INVALID' });
}
function nonempty(value, label) {
  requireThat(typeof value === 'string' && value.trim(), `${label} is required`);
  return value.trim();
}
export function normalizeMetricValue(value) {
  requireThat(typeof value === 'string' && DECIMAL.test(value), 'Metric value must be an exact decimal string, not a floating-point guess');
  const [whole, fraction = ''] = value.split('.');
  const trimmed = fraction.replace(/0+$/, '');
  const result = whole + (trimmed ? `.${trimmed}` : '');
  return /^-0(?:\.0*)?$/.test(result) ? '0' : result;
}
export function metricIdentity(record, metric) {
  return [record.subject.type, record.subject.id, metric.period || record.period, metric.id, metric.basis || record.basis].join('|');
}
export function validateAnchor(anchor, quote, source, text) {
  nonempty(quote, 'Source quote/transcription');
  if (source.format === 'text') {
    requireThat(anchor?.type === 'text-range', 'Text requires a text-range anchor');
    const [start, end] = anchor.range || [];
    requireThat(Number.isInteger(start) && Number.isInteger(end) && start >= 0 && end > start && end <= source.charLength, 'Text range is outside the complete Source');
    if (text != null) requireThat(text.slice(start, end) === quote, 'Source quote does not match the exact text range');
    return { type: 'text-range', range: [start, end] };
  }
  requireThat(anchor?.type === 'image-box', 'Image requires an image-box anchor');
  const box = anchor.box;
  requireThat(Array.isArray(box) && box.length === 4 && box.every(Number.isInteger), 'Image box must contain four native pixel integers');
  const [x, y, w, h] = box;
  requireThat(x >= 0 && y >= 0 && w > 0 && h > 0 && x + w <= source.width && y + h <= source.height, 'Image box is outside the complete Source');
  return { type: 'image-box', box: [...box] };
}

export function compileMetricFacts(input, { key, source, text = null }) {
  requireThat(input?.protocol === SOURCE_FACTS_PROTOCOL, `Expected ${SOURCE_FACTS_PROTOCOL}`);
  requireThat(ID.test(key), 'Dataset key must be stable lowercase');
  const subject = {
    type: input.subject?.type,
    id: nonempty(input.subject?.id, 'Subject id'),
    name: nonempty(input.subject?.name, 'Subject name'),
  };
  requireThat(['company', 'product'].includes(subject.type) && ID.test(subject.id), 'Subject requires company/product and a stable id');
  const period = nonempty(input.period, 'Period (as stated by Source)');
  const basis = nonempty(input.basis, 'Basis (use unspecified explicitly if the Source does not state one)');
  requireThat(Array.isArray(input.metrics) && input.metrics.length > 0, 'At least one metric is required');
  requireThat(Array.isArray(input.questions || []), 'questions must be an array');
  const ids = new Set();
  const objects = [];
  const metrics = input.metrics.map((item) => {
    requireThat(ID.test(item.id) && !ids.has(item.id), 'Metric ids must be stable and unique within a Source');
    ids.add(item.id);
    const name = nonempty(item.name, `${item.id} name`);
    const unit = nonempty(item.unit, `${item.id} unit`);
    const value = normalizeMetricValue(item.value);
    const literal = nonempty(item.literal, `${item.id} exact amount literal`);
    const numeric = literal.replace(/,/g, '').match(/-?\d+(?:\.\d+)?/g) || [];
    requireThat(numeric.length === 1 && normalizeMetricValue(numeric[0]) === value, `${item.id} literal and value disagree`);
    requireThat(item.quote?.includes(literal) && item.quote.includes(name), `${item.id} quote must contain the name and amount literal`);
    requireThat(item.currency === null || /^[A-Z]{3}$/.test(item.currency || ''), `${item.id} requires an ISO currency or explicit null for a non-currency metric`);
    const anchor = validateAnchor(item.anchor, item.quote, source, text);
    const metric = { id: item.id, name, value, unit, currency: item.currency, literal, quote: item.quote, anchor,
      ...(item.period ? { period: nonempty(item.period, 'Metric period') } : {}),
      ...(item.basis ? { basis: nonempty(item.basis, 'Metric basis') } : {}),
    };
    objects.push({ id: `metric.${item.id}`, class: 'value', label: name, literal, value, unit, ssotRef: { family: 'metric-observation', id: item.id } });
    return metric;
  });
  const context = (input.context || []).map((item, i) => {
    requireThat(['subject', 'period', 'unit', 'basis', 'annotation'].includes(item.field), 'Context needs an explicit field');
    const anchor = validateAnchor(item.anchor, item.quote, source, text);
    if (item.field === 'annotation') nonempty(item.reason, 'Annotation context reason');
    objects.push({ id: `context.${i}`, class: 'label', literal: item.quote });
    return { field: item.field, quote: item.quote, anchor, ...(item.reason ? { reason: item.reason } : {}) };
  });
  const exclusions = (input.exclusions || []).map((item, i) => {
    requireThat(RESIDUALS.has(item.kind), 'Exclusion requires a known non-semantic category');
    requireThat(!/其他|other/i.test(item.quote), 'Other-like content must remain a semantic object');
    const reason = nonempty(item.reason, 'Exclusion reason');
    const anchor = validateAnchor(item.anchor, item.quote, source, text);
    objects.push({ id: `excluded.${i}`, class: 'residual', literal: item.quote, reason });
    return { kind: item.kind, reason, quote: item.quote, anchor };
  });
  const quoted = [...metrics, ...context].map((item) => item.quote).join('\n');
  requireThat(quoted.includes(subject.name) && quoted.includes(period), 'Subject and period must be present in retained Source evidence');
  for (const metric of metrics) {
    requireThat(quoted.includes(metric.unit), `${metric.id} unit is missing from Source evidence`);
    const currencySignals = [['JPY', /日元|日圆|JPY/], ['HKD', /港元|港币|HKD|HK\$/], ['USD', /美元|美金|USD|US\$/], ['EUR', /欧元|EUR|€/], ['GBP', /英镑|GBP|£/], ['CNY', /人民币|CNY|RMB|(?:亿元|万元|^元$)/]];
    const unitCurrency = currencySignals.find(([, pattern]) => pattern.test(metric.unit))?.[0];
    if (unitCurrency) requireThat(metric.currency === unitCurrency, `${metric.id} currency disagrees with the Source unit`);
    if (metric.currency && !unitCurrency) requireThat(currencySignals.some(([code, pattern]) => code === metric.currency && pattern.test(quoted)), `${metric.id} currency has no explicit Source evidence`);
    if (metric.period) requireThat(quoted.includes(metric.period), 'Metric period missing from Source evidence');
  }
  if (text != null) {
    requireThat(text.length === source.charLength, 'Text length changed');
    const covered = new Uint8Array(text.length);
    for (const item of [...metrics, ...context, ...exclusions]) {
      const [start, end] = item.anchor.range;
      for (let i = start; i < end; i++) covered[i] = 1;
    }
    const missing = [...text].length && Array.from({ length: text.length }, (_, i) => i).filter((i) => !covered[i] && !/[\s\p{P}]/u.test(text[i]));
    requireThat(!missing.length, `Unaccounted Source text at offset ${missing[0]}: ${text.slice(missing[0], missing[0] + 30)}`);
  }
  const record = { schemaVersion: 1, protocol: METRIC_RECORD_PROTOCOL, key, subject, period, basis, metrics, context, exclusions,
    questions: (input.questions || []).map((question) => nonempty(question, 'Question')),
    source: { ...source },
  };
  return { record: { ...record, recordDigest: digestCanonical(record) }, objects };
}

export function validateMetricRecord(record) {
  const { recordDigest, ...value } = record;
  requireThat(recordDigest === digestCanonical(value), `Metric record ${record.key} digest mismatch`);
  const compiled = compileMetricFacts({ ...value, protocol: SOURCE_FACTS_PROTOCOL }, { key: record.key, source: record.source });
  requireThat(compiled.record.recordDigest === recordDigest, `Metric record ${record.key} does not normalize consistently`);
  requireThat(!record.questions.length, `Unresolved questions: ${record.questions.join('; ')}`);
  return record;
}
