# Revenue Metric SSOT

This file owns the field format of `data/revenue-metrics.js`, the pure Revenue
Metric SSOT for revenue observations that are not full income statements, such
as ARR or annualized revenue run-rate series. Keep it to metric identity, time,
conditions, definition, values, Source metadata, confidence and lineage; never
put Sankey nodes, links, layout, SVG, chart geometry or table-only fields here.
Shared contracts are in the [schema index](../schema.md).

```js
{
  key: 'openai-arr-annualized-revenue-yipit-2025-08-2026-06',
  company: 'OpenAI',
  subjectType: 'company',
  subjectId: 'openai',
  metricFamily: 'revenue',
  metricName: 'annualized_revenue_run_rate',
  displayName: 'Annualized revenue run-rate',
  period: 'Aug. 2025-Jun. 2026',
  periodNote: 'Monthly observations through Jun. 30, 2026',
  currency: '$',
  unit: 'B',
  decimals: 1,
  definition: 'Source-specific metric definition.',
  conditions: {
    geography: 'Global',
    basis: 'Third-party estimated annualized revenue run-rate',
    timeGrain: 'Month-end observation',
  },
  observations: [
    { date: '2026-06-30', value: 43.0, momGrowthPct: 16, notes: ['Source-specific methodology note.'] },
  ],
  sources: [
    {
      name: 'YipitData',
      url: 'https://www.yipitdata.com/',
      // localOnly: evidence that is never committed (e.g. licensed screenshots);
      // verifiers keep the path for provenance but skip the existence check.
      sourceImage: { src: 'input/processed/example.png', width: 1125, height: 1412, localOnly: true },
    },
  ],
  confidence: 0.72,
  lineage: 'How this observation was extracted or inferred.',
  i18n: { zh: { displayName: '年化收入运行率', definition: '本地化定义。' } },
}
```

The verifier checks that observations are sorted, numeric, sourced, matched to
company metadata and internally consistent: each non-initial `momGrowthPct`
equals the rounded month-over-month growth from the prior observation.
Observation `notes` are optional user-visible methodology or caveat strings;
localize them through the revenue-metric i18n overlay.

A `value` Source object references one observation as
`{ family: 'revenue-metric', path: 'observations', date }`, resolved to the
matching record's observation at that exact `YYYY-MM-DD` date.
