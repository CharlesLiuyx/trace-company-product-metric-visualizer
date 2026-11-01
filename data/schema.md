# Data schema

This file is the index of dataset and SSOT field formats and owns the contracts
every Adapter shares. Each family's fields live in exactly one file under
`data/schema/`:

| file | owns |
| --- | --- |
| [income-statement.md](schema/income-statement.md) | pure Income Statement SSOT `data/income-statements/<company-key>.js`: record, breakdowns, `paymentNetwork`, not-reported net result, signs, value references |
| [sankey-adapter.md](schema/sankey-adapter.md) | Sankey View Adapter `data/datasets/<dataset-key>.js`: `meta`, nodes, links, `nonNodeMetrics` and routes, `layout`, `annotationsSvg`, `rasterAnnotations`, `render`, `comparisonScale`, i18n overlay |
| [operating-metrics.md](schema/operating-metrics.md) | supplemental `operatingMetrics` cards on an Income Statement record and their View mirror |
| [revenue-metric.md](schema/revenue-metric.md) | Revenue Metric SSOT `data/revenue-metrics.js` |
| [metric-observation.md](schema/metric-observation.md) | `metric-observations/v1` records |
| [company-metadata.md](schema/company-metadata.md) | company metadata `data/company-metadata/<company-key>.js` and the `data/products.js` catalog |

How a Source is modeled into these fields is owned by
[dynamic-dataset-workflow.md](../docs/dynamic-dataset-workflow.md); the process
by [asset-workflow.md](../docs/asset-workflow.md).

## Languages

`src/i18n.js` defines the supported languages. English fields are the
canonical data used for verification. Other languages use display-only
`i18n.<language>` overlays on Adapters, financial SSOT records and company
metadata; never create parallel per-language files. Each family file lists its
overlay fields; the deny-by-default boundary is owned by
[`CONTEXT.md`](../CONTEXT.md#renderer-owned-semantics).

## Currency and unit contract

`pnpm verify:ssot` enforces it. Every SSOT `currency` is an explicit non-empty
string, and every money `unit` is exactly `K`, `M`, `B` or `T`. SSOT currencies
(income statements, revenue metrics, and `marketCap` without `valueUsd`) must
resolve through the `src/trace-domain.js` currency aliases to a
`USD_FX_SNAPSHOT` rate: the UI converts mixed-currency totals and the
Comparison Visual Scale to USD through that snapshot, so an uncovered currency
leaves aggregation incomplete and the scale uncalibrated. A dataset in a new
reporting currency extends `USD_FX_SNAPSHOT` (dated, sourced) in the same
change. The Adapter-side `meta.currency` / `meta.unit` rule is in
[sankey-adapter.md](schema/sankey-adapter.md#meta).

## Source object value references

The `source-objects/v1` list is authored as `source-facts/v1` `objects[]`. A
`value` entry keeps the literal Source text, the exact decimal `value` and the
display `unit` (`K`, `M`, `B` or `T`) as strings, so author input is never
silently rounded, and points to one SSOT value through a typed `ssotRef`
(forms: [Income Statement](schema/income-statement.md#value-references),
[Revenue Metric](schema/revenue-metric.md),
[operating cards](schema/operating-metrics.md)). Optional value fields:

```js
{ id: 'other', class: 'value', literal: '$0.0B', value: '0.04', unit: 'B',
  ssotRef: { family: 'income-statement', path: 'revenue.items', id: 'other' }, node: 'other',
  precisionRecovery: { literal: '$40M', reason: 'FY26 10-K segment note' } }

{ id: 'cost-of-revenue', class: 'value', literal: '$3.3M', value: '3.3', unit: 'B',
  ssotRef: { family: 'income-statement', path: 'costs.costOfRevenue', id: 'cost_of_revenue' },
  node: 'cost_of_revenue',
  authoritativeCorrection: {
    literal: '$3.3B',
    approval: 'user-directed-source-correction',
    reason: 'The Source suffix conflicts with the official filing ($3,334M) and chart geometry.',
  } }

{ id: 'expenses', class: 'value', literal: '($9.2B)', value: '9.2', unit: 'B',
  ssotRef: { family: 'income-statement', path: 'costs.operatingExpenses.total' },
  node: 'operating_expenses', netOfInflows: ['other_income'] }
```

- `precisionRecovery.literal` is a higher-precision `K/M/B/T` literal equal to
  `value` after normalization.
- With `authoritativeCorrection`, the top-level `literal` stays the printed
  Source text, which must conflict with `value`; `authoritativeCorrection.literal`
  is the corrected display, in the authored unit, expressing `value` within its
  rounding interval. Operating cards use the inverse shape
  ([operating-metrics.md](schema/operating-metrics.md)).
- `netOfInflows` serves a label that prints a node's net amount while other
  Source amounts flow into it (here "Other income $0.5B" feeds "Expenses
  ($9.2B)", whose items sum to $9.7B). The literal reconciles against the SSOT
  value and the node value minus the link values from the named nodes; each
  named node is its own value entry with a link into the target, and the
  target's `valueText` prints the net literal.
- No entry combines two of `precisionRecovery`, `authoritativeCorrection` and
  `netOfInflows`.

Facts also carry top-level `shortNodes: [{ node, reason }]` and
`interfaceCorrections: [{ interface: '<node>:left|right', reason, approval:
'user-directed-source-correction' }]`. When these fields may be used is owned by
[dynamic-dataset-workflow.md](../docs/dynamic-dataset-workflow.md); lifecycle
binding by
[dataset-lifecycle.md](../docs/architecture/dataset-lifecycle.md).
