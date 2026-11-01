# Income Statement SSOT

This file owns the field format of the pure financial-statement SSOT,
`data/income-statements/<company-key>.js`, and its Source value references.
Shared contracts (languages, currency and unit, Source value fields) are in the
[schema index](../schema.md); the drawn View is a
[Sankey Adapter](sankey-adapter.md); supplemental ARR/retention cards are
[`operatingMetrics`](operating-metrics.md).

Every registered Income Statement dataset has one matching record. Keep it to
reported totals, line items, notes, currency, units and Source metadata; never
put `nodes`, `links`, `layout`, `render`, SVG, colours or pixel geometry here.
Each file registers its records from one `(function (global) { … })(window);`
wrapper that initializes `global.INCOME_STATEMENT_SSOT` and pushes literal
records; add a record inside the existing wrapper, because `record:workflow`
rejects a changed SSOT file it cannot merge.

```js
{
  key: 'nvidia-q1-fy27',
  company: 'NVIDIA',
  period: 'Q1 FY27',
  periodNote: 'Ending Apr. 2026',
  currency: '$',
  unit: 'B',
  decimals: 1,
  sourceImage: 'input/processed/nvidia-q1-fy27.png',
  roundingTolerance: 0.15,
  revenue: {
    total: 81.6,
    notes: ['+85% Y/Y'],
    items: [
      { id: 'data_center', label: 'Data Center', value: 75.2,
        children: [{ id: 'hyperscale', label: 'Hyperscale', value: 37.9 }] },
    ],
    // Optional independent, non-additive views of the same revenue total.
    breakdowns: [
      { id: 'customer_type', label: 'Revenue by customer type', total: 81.6,
        items: [{ id: 'external_customers', label: 'External Customers', value: 75.2 }] },
    ],
  },
  costs: {
    costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 20.5 },
    operatingExpenses: { total: 7.6, items: [{ id: 'rnd', label: 'Research & Development', value: 6.3 }] },
    tax: { id: 'tax', label: 'Tax', value: 11.6 },
  },
  operatingOtherIncome: { total: 0, items: [] },
  operatingOtherExpenses: { total: 0, items: [] },
  otherIncome: { total: 16.4, items: [{ id: 'investments', label: 'Investments', value: 16.4 }] },
  otherExpenses: { total: 0, items: [] },
  profit: {
    gross: { id: 'gross_profit', label: 'Gross profit', value: 61.2,
      // Optional Source-visible contribution breakdown of gross profit.
      items: [{ id: 'platform_a_gross_profit', label: 'Platform A', value: 30.0 }] },
    operating: { id: 'operating_profit', label: 'Operating profit', value: 53.5 },
    net: { id: 'net_profit', label: 'Net profit', value: 58.3 },
  },
  i18n: {
    zh: {
      periodNote: '截至 2026 年 4 月',
      revenue: { items: [{ id: 'data_center', label: '数据中心' }] },
      profit: { gross: { label: '毛利润' }, operating: { label: '营业利润' }, net: { label: '净利润' } },
    },
  },
}
```

## Sections

- `operatingOtherIncome` / `operatingOtherExpenses`: Source adjustments that
  enter before operating profit; omit both when their totals are zero.
- `otherIncome` / `otherExpenses`: non-operating gains added, or costs
  subtracted, between operating profit and net profit.
- Item `id`s match the Sankey node or `nonNodeMetrics` id that draws them.
- `revenue.breakdowns` (optional): an independent, non-additive view of the
  same revenue total (e.g. customer type beside license type). It never joins
  the `revenue.items` sum; each breakdown has a stable id, a `total` equal to
  `revenue.total`, and items summing to it.
- `profit.gross.items` / `profit.operating.items` (optional): Source-visible
  contributions to gross or operating profit; items sum to the parent value
  within `roundingTolerance` and may carry notes and localized labels. A callout
  without its own node face uses an Adapter non-node metric.
- `revenue.paymentNetwork` (optional, payment networks): `gross` is the gross
  payment-network total, `grossItems` the Source-visible fee inputs, and
  `rebates` the positive-magnitude contra-revenue face. It never replaces
  `revenue.total` or the net-revenue `revenue.items`, and is never flattened
  into ordinary positive revenue items when that breaks net-revenue arithmetic.

## Net result not reported

When the Source stops at operating profit/loss, write
`profit.net: { availability: 'not-reported', value: null, label: 'Net result not
reported', notes: ['Source ends at operating loss.'] }`. Give it no node `id`,
never copy operating profit into it or write zero, and keep the nonempty
explanation. Only the net-result identity is skipped; revenue, gross-profit and
operating-profit identities still apply. Table, CSV, sorting, trend and Pages
details keep null as missing data; a reported zero stays `0`.

## Signs and verification

SSOT values keep their reported sign. A Sankey `type: "cost"` face and link use
a positive magnitude, so SSOT ↔ Adapter reconciliation compares `abs(value)`
for cost metrics only, through the shared Trace-domain rule; never
hand-normalize a dataset, and revenue/profit/other signs stay authoritative.

`currency` and `unit` follow the
[currency and unit contract](../schema.md#currency-and-unit-contract).
`verify:ssot` checks that every manifest-registered dataset has a matching
record, compares totals and line items against the View values within
`roundingTolerance`, and requires matching
[company metadata](company-metadata.md).

## Value references

A `value` Source object names an Income Statement value as
`{ family: 'income-statement', path, id }`; the record is selected by dataset
key. `path` is one of:

- `revenue.total`, `revenue.items`, `revenue.breakdowns`,
  `revenue.paymentNetwork.gross`, `revenue.paymentNetwork.grossItems`,
  `revenue.paymentNetwork.rebates`;
- `costs.costOfRevenue`, `costs.costOfRevenue.items`,
  `costs.operatingExpenses.total`, `costs.operatingExpenses.items`, `costs.tax`;
- `operatingOtherIncome.*`, `operatingOtherExpenses.*`, `otherIncome.*`,
  `otherExpenses.*` (each `.total` or `.items`);
- `profit.gross`, `profit.gross.items`, `profit.operating`,
  `profit.operating.items`, `profit.net`;
- `operatingMetrics` for [supplemental cards](operating-metrics.md).

Item paths search nested `children` by `id`; a breakdown reference names the
breakdown total or one of its items. Total paths use their fixed node id and
may omit `id`: `revenue`, `operating_expenses`, `operating_other_income`,
`operating_other_expenses`, `other_income`, `other_expenses`. A financial
value also names exactly one Adapter `node` or `nonNodeMetric`.
