# Supplemental operating metrics

This file owns the `operatingMetrics` array of an
[Income Statement SSOT](income-statement.md) record and its Sankey View mirror
(`scripts/lib/operating-metrics.mjs`). It retains Source cards such as ARR,
retention and customer counts independently of accounting totals, money
conversion, Sankey nodes and hover shares. The Build records
`supplemental-operating-metrics` alongside the two financial Type Gate
signals; it is not a standalone Adapter or a second Build.

```js
operatingMetrics: [{
  id: 'dbnr', label: 'DBNR', value: '119', unit: '%', currency: null,
  comparison: 'gt', literal: '> 119%', basis: 'unspecified',
  notes: ['(1pp) Q/Q'], quote: 'DBNR\n> 119%\n(1pp) Q/Q',
  anchor: { type: 'image-box', box: [702, 1105, 189, 164] },
}]
```

Values use exact decimal strings. Units are `K/M/B/T` with an explicit supported
ISO currency (`USD/EUR/GBP/JPY/CNY/HKD/BRL`), or `%/count` with `currency: null`.
Comparison is explicit: `eq/gt/gte/lt/lte`; literal must carry the same value,
unit, currency and inequality. A Source lower bound printed with a trailing plus
is `gte` and keeps its literal: `value: '265000', unit: 'count', currency: null,
comparison: 'gte', literal: '265K+'`. Counts are nonnegative exact decimals,
covering whole quantities and Source-stated ratios such as transactions per
account (`value: '59.4', unit: 'count', currency: null, literal: '59.4'`). A
count literal may keep a Source `K/M/B/T` suffix (`value: '112000000', unit:
'count', currency: null, literal: '112M'`); exact decimal arithmetic reconciles
the scaled literal, an explicit leading plus on net additions (`literal:
'+379K'`) is kept, and a currency prefix or a negative count fails. Money
literals may omit a scale suffix when the Source reports base-currency amounts
(`value: '0.301', unit: 'K', currency: 'USD', literal: '$301'`); the original
literal stays unchanged in SVG, Table and CSV.

A numeric Source misprint the operator corrects keeps the corrected text in
`literal` (what SVG, Table and CSV show) and records the printed text in
`authoritativeCorrection: { sourceLiteral: '672M', reason, approval:
'user-directed-source-correction' }` on both the SSOT item and its Source value
entry; `sourceLiteral` must fail to reconcile with `value`. This is the inverse
of a financial Source value entry, whose top-level `literal` stays the printed
text ([schema index](../schema.md#source-object-value-references)). Quotes keep
the label, the Source literal (`sourceLiteral` when corrected) and all notes;
anchors use native Source pixels; `basis: "unspecified"` preserves an unstated
Source basis.

Each card is one `value` Source object with the five value fields (`value`,
`unit`, `currency`, `comparison`, `literal`), its `label`, the `quote`, and
`ssotRef: { family: "income-statement", path: "operatingMetrics", id }`. It
cannot name a financial node or non-node metric.

The View Adapter mirrors each item's `id` and only its five value fields in its
own `operatingMetrics` array. Its SVG uses exactly
one plain `<text data-operating-metric="dbnr">&gt; 119%</text>` per metric, in
every locale. `verify:ssot` validates exact SSOT/View/literal parity; review
preparation also rejects a missing or duplicated value entry and changed labels
or quotes. Normal text/annotation fidelity and per-locale inspection apply to
the card. Labels and notes localize through the financial overlay; values,
literals, units, comparisons, quotes and anchors cannot be localized.

The statement Table adds an operating-metric column when relevant. CSV carries
the readable summary and the complete `operating_metrics_json`. Pages detail
projection retains these fields; standalone keeps full SSOTs. Records without
this optional array keep their existing semantics and review history.
