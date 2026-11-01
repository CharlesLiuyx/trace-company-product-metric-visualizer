// Revenue Metric: one defined metric observed across dates, without authored
// Sankey topology. Contributes observations to the single shared revenue SSOT
// script and stops at data-level verification.
export default Object.freeze({
  id: 'revenue-metric',
  label: 'Revenue Metric',
  media: Object.freeze(['image']),
  signature: Object.freeze({
    required: Object.freeze(['revenue-metric-definition', 'time-series-observations']),
    optional: Object.freeze([]),
  }),
  facts: 'flat-objects',
  checklist: Object.freeze(['data-consistency', 'human-review']),
  requiredLocales: Object.freeze(['en']),
  view: null,
  ssot: Object.freeze({ family: 'revenue-metric', locations: Object.freeze(['data/revenue-metrics.js']) }),
  indexRegistration: true,
  records: (loaded) => loaded.revenueRecords,
  artifacts: () => [],
  displayTimeKey: () => 'data/revenue-metrics.js',
  reviewRows: (record) => (record.observations || []).map((observation) => [record.company, observation.date, record.displayName || record.metricName, `${observation.value} ${record.unit}`, record.currency, [record.definition, ...(observation.notes || [])].filter(Boolean).join('；')]),
});
