# Dataset Modeling Rules

This document owns how a Source is read and modeled: the pre-intake Adapter
Type Gate, the flat Source-object list and its anti-omission invariants,
authoring reconciliation, and recurring traps. The process
(commands, order, checks, review, publication, archive, reporting) is owned by
[asset-workflow.md](asset-workflow.md). Fields belong to `data/schema.md`;
fidelity rules to `docs/fidelity-loop-rules.md`; assets to `data/assets/README.md`.
Builds created before `review-candidate/v1` keep the historical pipeline in
[archive/legacy-direct-edit-workflow.md](archive/legacy-direct-edit-workflow.md).

A finding that breaks any rule here stops the dependent step: fix the facts or
authored files and run `record:workflow continue` again. There is no retype
command; an intaked Build with the wrong Adapter is a recovery, not an edit.

## Adapter Type Gate

Inspect the complete native Source before `record:workflow start` and pass one
signature:

| Adapter | required signals | Source facts |
| --- | --- | --- |
| `income-statement` | `income-statement-values`, `sankey-flow-topology` | one-period financial values plus visible Sankey flow topology; standard, `-by-segment`, and `-by-bu` are variants |
| `revenue-metric` | `revenue-metric-definition`, `time-series-observations` | one defined metric observed across dates in a table/chart, without authored Source Sankey topology |
| `metric-observation` | `metric-observations` | company/product metrics in text or a plain image, compiled from `source-facts/v1` |

An Income Statement with supplemental operating cards (ARR, retention, customer
counts) also records `supplemental-operating-metrics`. The Source objects must
then contain one `value` entry per card (`ssotRef.path: "operatingMetrics"`) and
the typed `operatingMetrics` SSOT/View contract in `data/schema.md`. That signal
alone selects no Adapter.

Company, title, "revenue", or one period token are not classifiers. Mixed,
incomplete, or contradictory signals stop before intake. A new Adapter, metric
family, or SSOT also updates AGENTS, its mirror, and the Trace spec.

## Source objects and anti-omission invariants

Sankey and revenue Builds list every independent Source object once in the
`source-facts/v1` `objects[]` array (`source-objects/v1`); metric-observation
Builds keep their `metrics`/`context`/`exclusions` shape and the workflow
derives the same list. Each entry has a stable `id` and one `class`:

| class | entry |
| --- | --- |
| `value` | every displayed amount: `literal` (Source text), `value` (exact decimal string), `unit` (`K/M/B/T`), typed `ssotRef`; an Income Statement financial value also names exactly one Adapter `node` or `nonNodeMetric` |
| `flow` | Income Statement Sankey link or guide |
| `label` | title, period, name, note, or callout text |
| `asset` | logo, icon, or brand cluster |
| `residual` | non-semantic leftovers only: publisher attribution, creator branding, URL, social badge, decorative residue (`reason` optional) |

```json
{ "id": "revenue", "class": "value", "literal": "$18.5B", "value": "18.5", "unit": "B",
  "ssotRef": { "family": "income-statement", "path": "revenue.total" }, "node": "revenue" }
{ "id": "other", "class": "value", "literal": "$0.1B", "value": "0.1", "unit": "B",
  "ssotRef": { "family": "income-statement", "path": "revenue.items", "id": "other" }, "node": "other" }
{ "id": "flow-revenue-gross-profit", "class": "flow" }
{ "id": "title", "class": "label", "label": "Q3 FY26 Income Statement" }
{ "id": "company-logo", "class": "asset" }
{ "id": "watermark", "class": "residual" }
```

`ssotRef` is `{ family: "income-statement", path, id }` (the `id` may be omitted
for the fixed totals such as `revenue.total`), `{ family: "revenue-metric",
path: "observations", date }`, or `operatingMetrics` for supplemental cards. A
supplemental card is a `value` entry that keeps the typed `operatingMetrics`
shape — `label`, `literal`, `value`, `unit`, `currency`, `comparison`, `quote`
— and names no node. `label` and `literal` may appear on any entry; `reason`
explains a residual or an unusual decision.

Invariants checked by `prepare`:

- Every `value` entry reconciles to exactly one SSOT field, and an Income
  Statement financial value to exactly one Adapter node or non-node metric; no
  Adapter target is claimed twice. The value must lie inside the rounding
  interval of its own literal (`$18.5B` covers 18.45–18.55B).
- `Other`, `Others`, `All Other`, other-income/expense, and every value-bearing
  label are semantic; small magnitude or a missing icon never makes one a
  residual. An Other that displays an amount is a `value` entry, never a
  label, flow, or asset (T22). A residual cannot display an amount.
- A `value` entry mapped to a node must render a painted face; B15 checks it per
  locale at render time. If the Source paints no face, use `nonNodeMetric`, a
  flow, or an annotation instead of a node.
- A genuine Source face thinner than 3px is declared at the top level of the
  facts: `"shortNodes": [{ "node": "other", "reason": "Source paints a 1px bar" }]`.
  B15 then accepts that node below the floor while it still paints a face; it is
  never inflated or suppressed.
- Zero-looking literals: if `$0.0B` represents a non-zero object and the true
  value lies inside the literal's rounding interval, `precisionRecovery:
  { literal, reason }` is mandatory (a higher-precision K/M/B/T literal that
  equals the value; the reason names its source). Otherwise it is a typo.
- Source typos: a confirmed unit or numeric typo keeps the original literal and
  needs a user-directed `authoritativeCorrection: { literal, reason, approval:
  "user-directed-source-correction" }`, where `literal` is the corrected display
  and the reason names the authoritative source. It is never inferred or
  combined with precision recovery.
- Optional T18 label position: a `label` or `value` entry may carry
  `referenceBBox: [x, y, w, h]` (native Source pixels) and `labelGroup` (the
  `layout.labels` key). Only declared groups are position-audited; when the
  user directs a layout change, update or remove the bbox.

Blocking findings: a semantic object skipped as residual; Other treated as icon
residue or a label; a value without an exact literal, SSOT reference, or
Adapter target; a duplicated target; missing precision recovery or typed
correction; a supplemental card without a matching value entry; or a
contradiction with the intaked Adapter.

## Reading the Source and authoring

- Read the whole Source three times: every displayed value, every node face,
  link/guide, label/callout and asset cluster, and the non-semantic residue.
- For every proposed node, check the three smallest non-zero values and compare
  its expected slot with a clearly painted node in the same column. A light
  tint, the same color as the adjacent link, or a horizontal-line appearance
  never removes node semantics; a slot with no painted face is not a node.
- At every multi-link face record the Source top-to-bottom per-link identity
  order; it is the only admissible source for `sourceOrder`/`targetOrder` —
  never the other end's geometry or a value sort; crossing links invert it. The
  G12 audit cannot tell same-color multi-inflow links apart, so check their
  per-link identity and order against Source crops.
- Data first: metadata and the Adapter-owned Metric SSOT, including every value
  item. Income Statement then authors `data/datasets/<key>.js` plus required
  i18n; Revenue Metric writes metadata and `data/revenue-metrics.js` only — no
  Sankey, icon loop, or render evidence.
- `prepare` rejects any Source ↔ SSOT ↔ Adapter amount mismatch and any
  non-zero amount the authored display precision would show as zero.
- i18n is display-only. Recovered values stay non-zero: raise SSOT decimals for
  Table; raise Adapter decimals or use exact non-zero `valueText` for Sankey.
- Icons are conditional: check the asset catalog first (`record:workflow
  assets`); a missing icon never removes a semantic object.

## Traps and hard constraints

- Fidelity definitions and formulas live only in the fidelity catalog.
- Title/period placement uses rendered bboxes, not authored baselines.
- Preserve displayed integer decimals through schema `valueText`.
- Resolve raster/localized-text collisions by moving the annotation in that
  locale's raster list, without shared geometry changes.
- Interim spans (`3M`, `H1`, `YTD`, etc.) keep the intended viewer variant
  label/order/state.
- Reference crops never become runtime rasters; follow the asset doc and G4.
- Abnormal claims are recovery: never overwrite, silently requeue, or invent a
  lifecycle command.
