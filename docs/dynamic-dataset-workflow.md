# Dataset Modeling Rules

This document owns how a Source is read and modeled: the pre-intake Adapter
Type Gate, the Source-object taxonomy and anti-omission invariants, Source
Coverage scanning, authoring reconciliation, and recurring traps. The process
(commands, order, checks, review, publication, archive, reporting) is owned by
[asset-workflow.md](asset-workflow.md). Fields belong to `data/schema.md`;
fidelity rules to `docs/fidelity-loop-rules.md`; recurrence triggers to
`docs/fidelity-feedback-casebook.md`; assets to `data/assets/README.md`.
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
counts) also records `supplemental-operating-metrics`. Coverage must then
contain matching `operating-metric` observations and the typed
`operatingMetrics` SSOT/View contract in `data/schema.md`. That signal alone
selects no Adapter.

Company, title, "revenue", or one period token are not classifiers. Mixed,
incomplete, or contradictory signals stop before intake. A new Adapter, metric
family, or SSOT also updates AGENTS, its mirror, and the Trace spec.

## Source object classes and anti-omission invariants

Every independent Source observation uses one `source:*` ID and one class:

| class | required authored coverage |
| --- | --- |
| `operating-metric` | supplemental Income Statement `operatingMetrics` data and dedicated View value text, exact decimal/unit/currency/comparison, quote and native anchor |
| `financial-value` | Income Statement data + exactly one Adapter node or non-node metric, exact amount, typed SSOT reference |
| `metric-observation` | Revenue Metric data mapping, exact amount, dated SSOT reference |
| `structural-flow` | Income Statement render mapping |
| `label-or-annotation` | render mapping |
| `asset-or-brand` | explicit asset or render mapping |
| `non-semantic-residual` | skip only: publisher attribution, creator branding, URL, social badge, or decorative residue |

`Other`, `Others`, `All Other`, other-income/expense, and every value-bearing
label are semantic; small magnitude or a missing icon never makes one residual,
skippable, an annotation, or flow geometry. A value-bearing Other is a data
metric (`financial-value`/`metric-observation`, never `label-or-annotation`);
annotation classing or an invisible-node mapping fails coverage assembly (T22).

Painted-face invariant: every node-mapped object has a Source-painted face,
1–2px strips included, recorded at native measured height. If the Source paints
no face, the object is not a node; use a structural flow or semantic annotation.
T21 blocks expected-visible faces below 3px; a genuine sub-floor face keeps its
bar through the typed `source-visible-face-below-floor` exception bound to
Source digest, native bbox/crop, pixel scan, and one node — never inflated or
suppressed. `source-coverage/v2` requires the `semantic-value` / `geometry` /
`residual` scans and derives Other IDs, the three smallest non-zero amounts,
visible node IDs, and floor exceptions.

Zero-looking literals: if `$0.0B` or another zero literal represents a non-zero
semantic object and the recovered value stays inside the literal's rounding
interval, `precisionRecovery` is mandatory (`authoritative-supplemental-source`,
locator, and a higher-precision K/M/B/T literal that normalizes exactly to the
authored non-zero amount). Outside that interval it is a numeric typo and may
proceed only through the user-directed correction below; `unit-typo` is not
valid for a zero-looking literal.

Source typos: a confirmed unit or numeric typo keeps the original literal and
needs a user-directed `authoritative-source-correction` bound to the official
locator/literal, the approved corrected literal, a typed `unit-typo` (suffix
wrong) or `numeric-typo` (suffix right, magnitude wrong) issue, and a reason.
Both values must support the authored amount within Source resolution. It is
distinct from precision recovery and never inferred or combined with it.

## Source Coverage and ObjectInventory

Author matching `object-inventory/v4` and `source-coverage/v2` (inside the
`source-facts/v1` `objects` for Sankey and revenue Builds) from three scans:

1. semantic-value: every displayed financial value or metric observation;
2. geometry: every node face, link/guide, label/callout, and asset cluster. At
   every multi-link face record the Source top-to-bottom per-link identity
   order — the only admissible source for authored `sourceOrder`/`targetOrder`;
3. residual: only the closed non-semantic residual kinds above.

For every proposed node, check the three smallest non-zero values and compare
its expected slot with a clearly painted node in the same column: that peer's
x/width is the expected face slot. Any continuous painted region in that slot
is a node face; a 1–3px-high region is `visible-short-node`. A light tint, the
same color as the adjacent link, or a horizontal-line appearance never removes
node semantics. A zero-paint slot is not a node. If a financial value maps to
`nonNodeMetrics.*`, record `zero-paint-node-slot` with the same-column peer
x/width and native search bbox; `prepare` pixel-checks this negative claim (T23).

Each item records native bbox, inventory IDs, mapping roles, and where relevant
exact amount, typed SSOT reference, and face observation; every inventory object
has one Source owner. Measurement locators may use either the processing or the
processed path of the Build Source; the digest must be this Build's Source
digest (T19). Match casebook triggers: wrong-type and short/Other risks consume
CB-024 and CB-003/CB-007/CB-023 when applicable.

Blocking findings: a semantic skip; Other treated as icon residue; a
value-bearing Other classed as annotation or mapped to a non-painted node; a
node mapping without an observed Source face; a missing same-column slot check
where a clear peer exists; a zero-paint object left in `nodes[]`; a face
decision based on tint, link-color equality, horizontal appearance, or value
magnitude; a multi-link face without a recorded per-link order; missing required
precision recovery or typed correction; missing/duplicate coverage; an
unclassified face; or a contradiction with the intaked Adapter.

## Authoring and reconciliation

- Data first: metadata and the Adapter-owned Metric SSOT, including every value
  item. Income Statement then authors `data/datasets/<key>.js` plus required
  i18n; Revenue Metric writes metadata and `data/revenue-metrics.js` only — no
  Sankey, icon loop, or render evidence.
- Reconcile Source Coverage → inventory → SSOT → Adapter/data, and inspect
  Other, the three smallest non-zero values, and visible faces. `prepare`
  rejects any Source ↔ SSOT ↔ Adapter amount mismatch.
- Author `sourceOrder`/`targetOrder` only from the recorded per-face order —
  never from the other end's geometry or a value sort; crossing links invert it
  (CB-001). Same-color multi-inflow faces are G12/L11-blind, so check the B8 /
  L1–L4 per-link identity against Source crops.
- Fixed labels use native-scale Source measurements from fidelity §2 before the
  first render; never rough-place and converge through repeated renders.
- i18n is display-only. Recovered values stay non-zero: raise SSOT decimals for
  Table; raise Adapter decimals or use exact non-zero `valueText` for Sankey.
- Icons are conditional: check the asset catalog first (`record:workflow
  assets`); a missing icon never removes a semantic object.

## Traps and hard constraints

- Fidelity definitions and formulas live only in the fidelity catalog.
- Title/period placement uses rendered bboxes, not authored baselines (CB-015).
- Preserve displayed integer decimals through schema `valueText` (CB-016).
- Resolve raster/localized-text collisions per Z6a/CB-017 without shared
  geometry changes.
- Interim spans (`3M`, `H1`, `YTD`, etc.) keep the intended viewer variant
  label/order/state (CB-020).
- Reference crops never become runtime rasters; follow the asset doc/R-series.
- Abnormal claims are recovery: never overwrite, silently requeue, or invent a
  lifecycle command.
