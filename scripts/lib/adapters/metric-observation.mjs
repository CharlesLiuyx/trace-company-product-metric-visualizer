// Metric Observation: company/product metrics in text or a plain image,
// compiled from `source-facts/v1` metrics into one per-key JSON record. It is
// the only Adapter that accepts text Sources and needs no index registration
// (the generated metric catalog is its viewer projection).
const recordPath = (key) => `data/metric-observations/${key}.json`;

export default Object.freeze({
  id: 'metric-observation',
  label: 'Metric Observation',
  media: Object.freeze(['image', 'text']),
  signature: Object.freeze({
    required: Object.freeze(['metric-observations']),
    optional: Object.freeze([]),
  }),
  facts: 'metric-observations',
  checklist: Object.freeze(['data-consistency', 'human-review']),
  requiredLocales: Object.freeze(['en']),
  view: null,
  ssot: Object.freeze({ family: 'metric-observation', recordPath }),
  indexRegistration: false,
  records: (loaded) => loaded.metricRecords,
  artifacts: (key) => [{ path: recordPath(key), role: 'metric-ssot' }],
  displayTimeKey: () => null,
  reviewRows: () => [],
});
