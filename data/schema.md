# Data schema

Registered datasets should be authored in the low-level, high-fidelity format:
write `nodes` + `links` by hand and tune `layout.nodes` / `layout.labels`
against the processed reference image. The resulting `{ meta, nodes, links }`
object is what `SankeyEngine.render(selector, data)` consumes.

Every entry in `nodes[]` is a semantic, painted node face. Do not preserve an
SSOT field or a flow socket by adding an off-canvas, background-coloured, or
explicitly transparent node. When the Source has no node face, declare the
metric separately:

```js
{
  nonNodeMetrics: [
    { id: 'tax', representation: 'data-only' },
    { id: 'other', representation: 'annotation', value: 0.028, type: 'profit' },
    { id: 'cost_bridge', representation: 'flow', value: 7.6, type: 'cost' },
  ],
  links: [
    { source: 'revenue', targetRoute: 'cost_bridge', value: 7.6 },
    { sourceRoute: 'cost_bridge', target: 'store_opex', value: 4.4 },
  ],
  layout: {
    nodes: { /* painted node bboxes */ },
    routes: {
      cost_bridge: { x: 926, y: 748, width: 0, height: 319 },
    },
  },
}
```

`data-only` means the SSOT metric is intentionally absent from this Source
view. `annotation` requires a matching `annotationsSvg` group with
`data-node="<id>"` and an authored value for interaction. `flow` requires an
authored value, one `layout.routes.<id>` geometry record, and at least one
`sourceRoute` or `targetRoute` endpoint. A route belongs to the link geometry:
it never produces a node rectangle, node hitbox, or node-paint audit row.
`pnpm verify:ssot` rejects collisions between `nodes[]` and
`nonNodeMetrics[]`, stale non-node IDs, and explicitly transparent semantic
nodes.

Separately, `data/income-statements/<company-key>.js` is the pure financial-statement SSOT.
Every registered real dataset should have one matching record there. Keep it to
reported totals, line items, notes, currency, units, and source metadata only;
do not put `nodes`, `links`, `layout`, `render`, SVG, colors, or pixel geometry
in that file. Run `pnpm verify:ssot` after adding or materially changing a
dataset.

Currency and unit contract (enforced by `pnpm verify:ssot`): every SSOT
`currency` (income statements, revenue metrics, and `marketCap` without
`valueUsd`) must resolve through the `src/trace-domain.js` currency aliases to
a `USD_FX_SNAPSHOT` rate — the UI converts mixed-currency totals and the
comparison view's shared visual scale to USD through that snapshot, and an
uncovered currency would otherwise be dropped silently. When adding a dataset
in a new reporting currency, extend `USD_FX_SNAPSHOT` (dated, sourced) in the
same change. The Sankey adapter's `meta.currency` mirrors the source image and
may be `''` when the image shows bare numbers (e.g. an "in RMB" note), but a
non-empty `meta.currency` must agree with the SSOT currency, and `meta.unit`
must always equal the SSOT `unit`; cross-company normalization reads the SSOT,
not the adapter.

`data/company-metadata/<company-key>.js` is the company-profile SSOT. Add or update it before
registering a new company's first dataset so Table mode can show company-level
context separately from period-specific financial statements.

`data/products.js` is the Product SSOT for the Trace top-level model. It is
currently an empty catalog because Product is not rendered as a first-class UI
entity yet. Future Product records and time-varying Company/Product ownership
links should be added there instead of being hidden inside Sankey adapters.

`data/revenue-metrics.js` is the pure Revenue Metric SSOT for revenue
observations that are not full income statements, such as ARR or annualized
revenue run-rate time series. Keep it to metric identity, time, conditions,
definition, values, source metadata, confidence, and lineage. Do not put
Sankey nodes, links, layout, SVG, chart geometry, or table-only fields in that
file.

`src/i18n.js` defines the project-wide language list. English fields are the
canonical/default data used for verification. For every non-default supported
language, add `i18n.<language>` overlays on datasets, financial SSOT records,
and company metadata records when precise wording or language-specific layout
is needed. Do not create parallel dataset files per language.

---

## Pure data SSOT

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
      {
        id: 'data_center',
        label: 'Data Center',
        value: 75.2,
        children: [
          { id: 'hyperscale', label: 'Hyperscale', value: 37.9 },
        ],
      },
    ],
    // Optional independent, non-additive views of the same revenue total.
    // Each breakdown's total and its item sum must equal revenue.total.
    breakdowns: [
      {
        id: 'customer_type',
        label: 'Revenue by customer type',
        total: 81.6,
        items: [
          { id: 'external_customers', label: 'External Customers', value: 75.2 },
        ],
      },
    ],
  },
  costs: {
    costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 20.5 },
    operatingExpenses: {
      total: 7.6,
      items: [
        { id: 'rnd', label: 'Research & Development', value: 6.3 },
      ],
    },
    tax: { id: 'tax', label: 'Tax', value: 11.6 },
  },
  operatingOtherIncome: {
    total: 0,
    items: [],
  },
  operatingOtherExpenses: {
    total: 0,
    items: [],
  },
  otherIncome: {
    total: 16.4,
    items: [{ id: 'investments', label: 'Investments', value: 16.4 }],
  },
  otherExpenses: {
    total: 0,
    items: [],
  },
  profit: {
    gross: {
      id: 'gross_profit',
      label: 'Gross profit',
      value: 61.2,
      // Optional Source-visible contribution breakdown of gross profit.
      items: [
        { id: 'platform_a_gross_profit', label: 'Platform A', value: 30.0 },
      ],
    },
    operating: { id: 'operating_profit', label: 'Operating profit', value: 53.5 },
    net: { id: 'net_profit', label: 'Net profit', value: 58.3 },
  },
  i18n: {
    zh: {
      periodNote: '截至 2026 年 4 月',
      revenue: {
        items: [
          { id: 'data_center', label: '数据中心' },
        ],
      },
      profit: {
        gross: { label: '毛利润' },
        operating: { label: '营业利润' },
        net: { label: '净利润' },
      },
    },
  },
}
```

Use `operatingOtherIncome` / `operatingOtherExpenses` for source-chart adjustments
that explicitly enter before operating profit. Use `otherIncome` for non-operating
gains that add after operating profit on the path to net profit, and
`otherExpenses` for non-operating costs that subtract on that same path. Omit the
optional operating-stage fields when both totals are zero. The `id`
fields should match the relevant Sankey node or `nonNodeMetrics` id.
The verifier checks every manifest-registered dataset script has a matching
SSOT record, compares key totals and line items against the declared View
metric values, and
allows small published-rounding differences via `roundingTolerance`. It also
checks every company in the financial SSOT has a matching
`data/company-metadata/<company-key>.js` entry.

`revenue.breakdowns` is optional and expresses an independent, non-additive
view of the same reported revenue total (for example, customer type alongside
license type). It never participates in the primary `revenue.items` sum. Each
breakdown must have a stable id, a `total` equal to `revenue.total`, and items
that sum to that breakdown total. Source Coverage may reference either a
breakdown total or one of its items through
`{ family: 'income-statement', path: 'revenue.breakdowns', id }` so every
visible value in an orthogonal Source breakdown still reconciles to pure SSOT
data and exactly one Sankey node or non-node metric.

`profit.gross.items` is optional and expresses Source-visible contributions to
gross profit, such as gross profit split by ecosystem or business line. Its
items must sum to `profit.gross.value` within `roundingTolerance`; each item
uses a stable id and may carry notes and localized labels like other financial
items. Source Coverage references these values through
`{ family: 'income-statement', path: 'profit.gross.items', id }`.

### Revenue metric record

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
    {
      date: '2026-06-30',
      value: 43.0,
      momGrowthPct: 16,
      notes: ['Source-specific methodology note.'],
    },
  ],
  sources: [
    {
      name: 'YipitData',
      url: 'https://www.yipitdata.com/',
      // localOnly declares evidence that intentionally never gets committed
      // (e.g. licensed screenshots); verifiers keep the path for provenance
      // but skip the file-existence check.
      sourceImage: { src: 'input/processed/example.png', width: 1125, height: 1412, localOnly: true },
    },
  ],
  confidence: 0.72,
  lineage: 'How this observation was extracted or inferred.',
  i18n: {
    zh: {
      displayName: '年化收入运行率',
      definition: '本地化定义。',
    },
  },
}
```

The verifier checks that revenue observations are sorted, numeric, sourced,
matched to company metadata, and internally consistent: each non-initial
`momGrowthPct` should equal the rounded month-over-month growth from the prior
observation.
Observation-level `notes` are optional, user-visible methodology or caveat
strings attached to individual data points. Localize them through the revenue
metric i18n flow when present.

### Source Coverage value references

`source-coverage/v2` keeps Source-reading facts separate from the Metric SSOT,
but every value-bearing Source observation must point back to an actual SSOT
value with a typed `ssotRef`. Its `amount` preserves the literal Source text,
exact decimal `value`, display `unit` (`K`, `M`, `B`, or `T`), and positive
`resolution`, all as strings so author input is not silently rounded before
verification. The exact value must remain inside the half-resolution rounding
interval implied by the literal; a supplemental source cannot justify a value
that the primary display could not have rounded to.

When the primary Source literal displays zero only because it rounded a real
non-zero value (for example, `$0.0B`), preserve the primary literal but recover
the actual amount from an authoritative supplemental source:

```js
amount: {
  literal: '$0.0B',
  value: '0.04',
  unit: 'B',
  resolution: '0.1',
  precisionRecovery: {
    method: 'authoritative-supplemental-source',
    locator: 'https://example.com/authoritative-filing',
    literal: '$40M',
  },
}
```

The supplemental literal must include a numeric K/M/B/T amount and normalize
to exactly the same effective value as `amount.value` (here `$40M = $0.04B`).
`precisionRecovery` is forbidden when the primary literal did not round a
non-zero value to zero. If no authoritative higher-precision value can be
recovered, stop the Build; do not write `0` as a guess.

For a confirmed non-zero unit typo, preserve the original Source literal and
record an explicit, user-approved correction:

```js
amount: {
  literal: '$3.3M',
  value: '3.3',
  unit: 'B',
  resolution: '0.1',
  authoritativeCorrection: {
    method: 'authoritative-source-correction',
    issue: 'unit-typo',
    approval: 'user-directed-source-correction',
    locator: 'https://www.sec.gov/example',
    authoritativeLiteral: '$3,334M',
    correctedLiteral: '$3.3B',
    reason: 'The Source suffix conflicts with the official filing and chart geometry.',
  },
}
```

This correction is valid only when the original literal conflicts with the
authored amount, while both the authoritative value and corrected literal
support it inside the declared rounding interval. The corrected literal unit
must match `amount.unit`. Do not use this mechanism for an unverified
discrepancy, a value change, or a zero-looking rounded amount; the latter uses
`precisionRecovery`. The two mechanisms are mutually exclusive.

| Adapter | typed reference | resolved authored value |
| --- | --- | --- |
| Income Statement | `{ family: 'income-statement', path, id }` | the matching record selected by dataset key; `path` covers revenue (including optional independent `revenue.breakdowns`), cost (including `costs.costOfRevenue.items`), profit (including optional `profit.gross.items`), and operating/non-operating other-income/expense totals or items; item paths search nested `children` by `id`, while total paths use their stable node ID |
| Revenue Metric | `{ family: 'revenue-metric', path: 'observations', date }` | the matching record's observation at the exact `YYYY-MM-DD` date |

During current M3 `prepare-review`, verification converts the Source amount
to the SSOT record's unit and compares it with the value loaded from these
registered records. Income Statement preparation also loads the registered
Sankey View and requires each financial Source fact to match exactly one
Adapter node or non-node metric target. Only a node target may carry a face
observation. The review input cannot
replace those loaded values: a missing record/View, unsupported unit or path,
wrong ID/date, or unequal amount fails before a new authored review snapshot
is recorded. A recovered non-zero amount must also remain non-zero at display
precision: increase the SSOT record's `decimals`, and for an Income Statement
increase Adapter `meta.decimals` or provide an exact non-zero node
`valueText`. The lifecycle ownership and coverage rules live in
[`docs/architecture/dataset-lifecycle.md`](../docs/architecture/dataset-lifecycle.md).

---

## Company metadata SSOT

```js
{
  key: 'nvidia',
  name: 'NVIDIA',
  legalName: 'NVIDIA Corporation',
  ticker: 'NVDA',
  exchange: 'NASDAQ',
  marketCap: {
    valueUsd: 3000000000000,
    asOf: '2026-06-18',
    source: 'StockAnalysis',
    sourceUrl: 'https://stockanalysis.com/stocks/nvda/market-cap/',
  },
  sector: 'Information Technology',
  industry: 'Semiconductors',
  founded: '1993',
  headquarters: 'Santa Clara, California, United States',
  fiscalYearEnd: 'Last Sunday in January',
  website: 'https://www.nvidia.com/',
  description: 'Short company profile used by Table mode.',
  sourceUrls: [
    'https://www.nvidia.com/en-us/about-nvidia/',
  ],
  i18n: {
    zh: {
      sector: '信息技术',
      industry: '半导体',
      headquarters: '美国加利福尼亚州圣克拉拉',
      fiscalYearEnd: '1 月最后一个星期日',
      description: 'Table 模式使用的本地化公司简介。',
    },
  },
}
```

Required fields for verification are `key`, `name`, `sector`, `industry`,
`description`, and a non-empty `sourceUrls` array. Other fields should be filled
when they can be found from reliable public sources. For the Company list and
Table view, also keep `founded`, `headquarters`, `fiscalYearEnd`, `website`,
`ticker`, `exchange`, and public-company `marketCap` data current enough for
sorting and display. Do not duplicate period-specific financials in company
metadata; latest-period revenue, currency, unit, and net profit belong in
`data/income-statements/<company-key>.js`.

---

## Product catalog SSOT

```js
{
  schemaVersion: 1,
  products: [
    {
      key: 'youtube',
      name: 'YouTube',
      type: 'product',
      serviceType: 'platform',
      description: 'Product-level profile used by future Product views.',
      sourceUrls: ['https://www.youtube.com/'],
    },
  ],
  companyProductRelationships: [
    {
      companyKey: 'alphabet',
      productKey: 'youtube',
      relationship: 'owns',
      validFrom: '2006-11-13',
      validTo: null,
      sourceUrls: ['https://abc.xyz/'],
      confidence: 1,
    },
  ],
}
```

Keep Product records separate from Income Statement line items. A revenue line
may refer to a product or service family, but the first-class Product identity
and its time-varying Company relationship belong in `data/products.js`.

### Company list sorting fields

The Company navigator currently supports these sort modes. Keep the data source
for each mode stable so the sidebar list, Table view, CSV export, and
localization overlays describe the same company.

| sort mode | source fields | notes |
|---|---|---|
| Alphabetical | `name`; optional `i18n.<language>.displayName` | Uses the localized display company name. Use `aliases` only for matching financial records to metadata, not for display ordering. |
| Recently updated | `data/dataset-file-metadata.js` entries generated from the latest git author time of each registered `data/datasets/<dataset-key>.js` file (filesystem mtime only until a file's first commit) | Run `pnpm update:dataset-file-metadata` after committing a new or materially edited dataset file, and commit the refreshed metadata. The UI sorts each company by the newest updated registered dataset file for that company. Missing update metadata sorts after companies with metadata. |
| Market cap | Prefer `marketCap.valueUsd`; otherwise use `marketCap.value`, `marketCap.currency`, `marketCap.unit`, plus `marketCap.asOf`, `marketCap.source`, `marketCap.sourceUrl` | The UI normalizes market cap to USD using the dated FX snapshot (`USD_FX_SNAPSHOT` in `src/trace-domain.js`, applied by `src/app/financial.js`) before sorting descending. Missing or unsupported-currency values sort after companies with values and display as missing metadata. |
| Net profit | Latest matching `data/income-statements/<company-key>.js` record: `profit.net.value`, `currency`, `unit`, and parseable period fields | The UI selects the latest dataset for the company, converts the reported net profit to USD using the same dated FX snapshot, and sorts descending. Do not add latest net profit to company metadata. |
| Founded date | `founded` | The first four-digit year in the string is used for ascending sort. Keep the human-readable string precise enough for Table display. |

When a sort value is missing, the company sorts after companies with a numeric
value for that mode. Ties fall back to localized company name, then the
canonical company name, then latest-period recency.

---

## Low-level format

```js
{
  key:  'nvidia-q1-fy27',                 // id used for export filenames
  name: 'NVIDIA · Q1 FY27',               // label in the dataset dropdown
  meta: { … },                            // titles, period, currency, logo
  nodes: [ … ],
  links: [ … ],
  i18n: { … },                            // localized display overlays
}
```

### meta

| field         | type    | notes                                                        |
|---------------|---------|--------------------------------------------------------------|
| `title`       | string  | big heading                                                  |
| `period`      | string  | top-right stamp, line 1 (e.g. `"Q1 FY27"`)                   |
| `periodNote`  | string  | top-right stamp, line 2 (e.g. `"Ending Apr. 2026"`)          |
| `currency`    | string  | prepended to values, default `"$"`                           |
| `unit`        | string  | appended to values (e.g. `"B"`, `"M"`)                       |
| `decimals`    | number  | decimal places for non-integers, default `1`                 |
| `referenceImage` | object \| string | processed PNG for Reference mode, e.g. `{ src, width, height }` |
| `logoSvg`     | string  | inner SVG markup drawn above the hub node (optional); the renderer wraps it with `data-typography-role="brand"` |
| `logoViewBox` / `logoWidth` / `logoHeight` | — | size/coords for `logoSvg`              |

### SVG typography roles

`annotationsSvg` is product text by default. Product labels, KPI copy, values,
notes, and financial callouts use the renderer-owned View typography roles;
they must not use Montserrat. A real Logo, wordmark, trademark lockup, or brand
illustration inside the mixed annotation layer must mark its smallest complete
ancestor explicitly:

```html
<g data-typography-role="brand">
  <!-- brand-faithful vector markup; any font family is allowed here -->
</g>
```

`meta.logoSvg` receives this wrapper automatically. A dataset that places a
`window.SANKEY_BUSINESS_ICONS` fragment in `annotationsSvg` must still mark the
placement wrapper; the shared string does not transfer a DOM role. Do not mark
the whole `.sankey-annotations` layer, a normal node label, a KPI card, or plain
company/product-name text as brand. Raster annotations contain no inspectable
DOM text and remain governed by the existing raster whitelist.

### Semantic annotation labels

Use `layout.labels.<node-id>` for Sankey node name/value/note copy by default.
If the reference image proves that a metric has no node face and appears only
as a bespoke callout or guide in `annotationsSvg`, declare it in
`nonNodeMetrics` with `representation: "annotation"`. Its `ObjectInventory`
object maps both `nonNodeMetrics.<id>` and `annotations.*`, declares
`semantic-annotation`, and binds a native-pixel
source crop, bbox, Source digest, inspection method, classification claim, and
reason. The SVG group must be explicit:

```html
<g class="sankey-interactive-annotation" data-node="other_income">
  <text>Other</text>
  <text>$0.1B</text>
</g>
```

The renderer inserts a transparent `.sankey-annotation-hitbox` for each such
group. This is not a substitute for source classification: generic KPI, brand,
or decorative annotations must not claim a financial metric merely to obtain
hover.

### render interface audit

Fixed-layout datasets that are new or materially changed must opt into the
reference-backed connector gate:

```js
render: {
  interfaceAudit: {
    mode: 'error',
    fullFaceIds: ['gross_profit:left', 'gross_profit:right'],
  },
}
```

`mode` accepts `error`, `warning`, or `off`. New or materially changed fixed-
layout datasets use `error`; the acceptance meaning, migration behavior and
geometry thresholds are owned by `docs/fidelity-loop-rules.md`.

`fullFaceIds` is optional and contains semantic
`'<node-id>:left|right'` interface IDs whose declared coverage intent is
`full-face`. Each ID must have a matching `interface-matrix/v1` row with
reference measurement or design-spec provenance; the Adapter field alone is
not acceptance evidence. Do not use it for a real socket gap.

The Interface Matrix, report and contact sheet are verifier artifacts, not
SSOT data.
Do not put reference pixel intervals into the income-statement SSOT or an i18n
overlay. Author measured `sourceWidth`, `targetWidth`, `y0`, and `y1` on links as
needed; the detailed measurement and acceptance rules live in
`docs/fidelity-loop-rules.md` (G12 and L5-L15).

### i18n overlay

Dataset overlays are keyed by language code:

```js
i18n: {
  zh: {
    name: 'NVIDIA · 2027 财年第一季度',
    meta: {
      title: 'NVIDIA 2027 财年第一季度利润表',
      period: '2027 财年第一季度',
      periodNote: '截至 2026 年 4 月',
      titleTextLength: 2100,
    },
    nodes: {
      revenue: { label: '收入', notes: ['同比 +85%'] },
      gross_profit: { label: '毛利润', notes: ['毛利率 75%', '同比 +14 个百分点'] },
    },
    layout: {
      labels: {
        revenue: {
          blocks: [
            { lines: [{ text: '收入' }, { text: '$value' }, { text: '同比 +85%' }] },
          ],
        },
      },
    },
  },
}
```

Allowed overlay content is display-only: localized strings and text layout
adjustments such as title sizing or fixed-label line text. Overlays must not
change financial values, `nodes[].value`, `links`, source images, node geometry,
or any field that changes SSOT/d3 verification semantics.

For fixed-layout datasets, every explicit `layout.labels.*.blocks[].lines[].text`
that is not `$value` should have a localized equivalent. For helper-built
datasets, node labels and notes are usually sufficient because the renderer
builds label blocks from node text.

`i18n.preservedAnnotationText` (optional, `string[]`, not a language overlay) declares
`annotationsSvg` text segments that intentionally stay untranslated in every
language — sub-brand and logo words such as `aws` or `Uber Eats`. Company
name, legal name, and alias words from `data/company-metadata/<company-key>.js` are exempted
automatically, so declare only text that identity derivation cannot cover.
`pnpm verify:i18n` matches whole segments case-insensitively; words inside
longer translatable sentences are never exempted.

Brand and product terms that intentionally render unchanged in every position
(node labels, notes, layout lines, and annotations alike — e.g. YouTube,
iPhone, `Microsoft 365`) are declared once as identity mappings in the
`EXACT_ZH` dictionary in `src/i18n-dictionaries.js`; `pnpm verify:i18n` treats an
identity-mapped term as translated wherever it appears.

### node

| field        | type              | notes                                                       |
|--------------|-------------------|-------------------------------------------------------------|
| `id`         | string            | unique; referenced by links                                 |
| `label`      | string \| string[]| the name; an array renders as multiple lines                |
| `value`      | number            | the displayed amount (sign handled by `type`)               |
| `valueText`  | string            | override the formatted value entirely (optional). Required when an exact-integer amount must keep its decimal: `3.0` formats as `€3B` by default, so set `valueText: '€3.0B'` to match a source that shows the decimal |
| `notes`      | string[]          | small grey lines under the value (margins, Y/Y, % of rev…)  |
| `type`       | string            | `source` · `hub` · `profit` · `cost` → drives colour        |
| `col`        | number            | column index (0 = far left). Controls horizontal placement  |
| `order`      | number            | vertical order within the column (top = smallest)           |
| `labelSide`  | string            | `left` · `right` · `above` · `below` (auto if omitted)      |
| `color` / `labelColor` | string  | per-node overrides of the type palette                      |
| `icons`      | string[]          | icon names from `src/icons.js` drawn next to the label      |
| `iconSize`   | number            | px, default 30                                              |

`type` semantics:
- `source` (teal) — revenue segments feeding in from the left
- `hub` (black) — the central Revenue node
- `profit` (green) — value retained: gross/operating/net profit, other income
- `cost` (red) — outflows: cost of revenue, opex, tax, R&D, SG&A — shown `($X)`

### link

```js
{ source: 'hyperscale', target: 'data_center', value: 37.9 }
```

Link colour is derived automatically from the two endpoints' types (a teal→teal,
green→green, or green→salmon gradient), so you only specify the flow amount.
Keep flows conserved (sum of a node's inflows ≈ its outflows) for clean bars.

Fixed-layout adapters may use measured endpoint geometry:

| field | type | notes |
|---|---|---|
| `width` | number | default equal width at both ends; falls back to `value * layout.scale` |
| `sourceWidth` / `targetWidth` | number | independently measured visible widths; specifying either renders a closed tapered ribbon, with the missing side falling back to `width` |
| `y0` / `y1` | number | explicit source/target center positions |
| `sourceOrder` / `targetOrder` | number | vertical stacking order at the source/target face |
| `curve` | object | optional `x0`, `x1`, `c1x`, `c1y`, `c2x`, `c2y` cubic controls |
| `showTooltip` | boolean | set to `false` only for a source-matched visual routing bridge that has no independently reportable financial percentage; retain the semantic relationship through an annotation or interaction-only link. This suppresses only the percentage card, never the bridge's rendered or hover-highlighted state. |

Use endpoint-specific widths only when the reference shows different source and
target intervals. Measure the complete non-background interface union before
splitting internal links by colour or identity; do not use `sourceWidth` /
`targetWidth` to hide an incorrect node bbox or socket order.

Hover Share（所占比例）is renderer-owned. Adapters provide authored amounts
and semantic topology only; the single human-readable surface/formula contract
lives in `CONTEXT.md` and the fidelity acceptance rule lives in
`docs/fidelity-loop-rules.md`.

`hoverPercentMode`, `nodeHoverPercentDenominator`, `percent`, `percentage`,
`percentText`, and `percentageText` are not supported link fields;
`verify:ssot` rejects them. Use `showTooltip: false` only as an explicit
visibility control for a visual-only route—it never changes the share formula.
Link colour or transparency never changes which relationship is calculated.
