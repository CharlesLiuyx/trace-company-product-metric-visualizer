// A Source ending at operating profit does not establish a net result.
// Null is deliberate missing data; zero remains an observed numeric result.
export function isUnreportedNetProfit(metric) {
  return metric?.availability === 'not-reported'
    && metric.value === null
    && metric.id == null
    && typeof metric.label === 'string' && metric.label.trim().length > 0
    && Array.isArray(metric.notes) && metric.notes.some((note) => typeof note === 'string' && note.trim());
}

export function validNetProfit(metric) {
  if (metric?.availability === 'not-reported') return isUnreportedNetProfit(metric);
  return metric != null && metric.availability == null
    && typeof metric.value === 'number' && Number.isFinite(metric.value);
}
