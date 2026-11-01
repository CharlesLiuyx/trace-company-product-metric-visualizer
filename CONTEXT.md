# Trace Context

Trace turns a **Source** into auditable **Metric** SSOT records and optional
high-fidelity **View** artifacts. A dataset change is handled by three scopes:
`DatasetBuild`, `PublicationBatch`, and `ReleaseAttempt`; a `FidelityRun` is
build-local evidence, not publication state.

New input uses `docs/asset-workflow.md`: a PNG or UTF-8 text Source, one facts
file, an isolated Build, generated review records, atomic local publication,
and an optional release from that published digest. Generic observations live
in `data/metric-observations/` and appear in the viewer metric library.

The root `index.html` discovers the local review workbench. Its behaviour,
Session owner/generation fencing and reviewed Git transport are owned by
`docs/local-environments.md`; ADR-0003 keeps the lifecycle scopes unchanged.

Source folders are locators, not a lifecycle scope; see
[Source identity and working locator](docs/architecture/dataset-lifecycle.md#source-identity-and-working-locator).

## Renderer-owned semantics

This file owns the renderer semantics below (Hover Share, Comparison Visual
Scale, and the fit/zoom transaction). `data/schema/sankey-adapter.md` holds only the
Adapter field formats (`comparisonScale`, `meta`); Adapters cannot override them.

Within a Sankey View, **Hover Share（所占比例）** is renderer-owned rather
than Adapter-configurable. The default formula, used on every hover surface
(node, node label, link, or endpoint-declared guide), is
`min(|source authored value|, |target authored value|) /
max(|source authored value|, |target authored value|)`. It is direction-
independent, ignores the d3-computed node value and `link.value`, and shows no
card when the larger endpoint is zero.

One rule takes precedence on node and node-label hover: when the link's target
node also receives input from another source node, the card shows
`|link value| / |hovered node authored value|` (for example, hovering Operating
profit shows the Operating profit → Net profit link as its share of Operating
profit when Net profit also receives Other). If that ratio reads 100%, it adds
no information, so the card shows `|link value| / |opposite node authored
value|` instead. The denominator must be larger than the numerator: when
neither node exceeds the link value, the default formula applies. Direct link
hover keeps the default formula.

On node or node-label hover, incoming and outgoing sides are still grouped
independently by **distinct opposite semantic node**. That grouping controls
only how many Tags are shown and de-duplicates matching graph-link and SVG-
annotation surfaces; it never changes the formula. Parallel links to the same
opposite node are one semantic relationship. Adapters provide authored
amounts and topology only and cannot override the percentage.

**Comparison Visual Scale** is the shared visual calibration for a complete
Sankey comparison group. The renderer first compiles each Sankey View
Adapter's actual fixed or dynamic graph geometry, then measures a stable
semantic anchor (normally revenue) as
`rendered node-face height / |authored node value|` in viewBox units. Fixed
renderer `ky` may supply geometry that the Adapter did not specify, but raw
`layout.scale` is only an input fallback for that fixed renderer compilation;
it is not the Comparison Visual Scale Interface and app code must never read
it directly as calibration evidence.

The Comparison Visual Scale Module joins that renderer-owned native
measurement with the matching Metric SSOT record's `currency` and `unit`, then
uses the dated Trace FX snapshot to derive viewBox units per USD
(`native viewBox units per authored value / USD per authored value`). A group is
normalized only when every selected record has compiled anchor geometry, a
matching Metric SSOT record with explicit currency and a `K`/`M`/`B`/`T`
unit, and a positive USD conversion. Any failure makes the whole group
uncalibrated and the comparison fails closed; it never mixes calibrated
factors with an assumed factor of `1`, and it never falls back to the View
Adapter's display-oriented currency metadata. The shared
`strictSankeyMoneyDimension` contract nevertheless requires the Adapter unit
to equal the SSOT unit and any non-empty Adapter display currency to denote
the same currency; an intentional empty display currency remains valid for
source-faithful `valueText` or unit annotations.

`revenue` is the mandatory default anchor and its Adapter value must match
Metric SSOT `revenue.total`; an Adapter that renders this face cannot override
it. Only an Adapter with no rendered `revenue` face declares
`comparisonScale.anchorNodeId`, and that alternate id and value must match a
unique positive item in an acyclic Metric SSOT revenue lineage. Anchor and
renderer ids are canonical strings, the anchor face must have `source` or
`hub` semantics, and authoritative amounts/decimals are native finite numbers
whose display resolution is representable at that magnitude. Labels and node
order are never anchor-discovery inputs.

Calibration, fit, and render consume the same once-localized Adapter. i18n
overlays are deny-by-default display-only contracts, so a new or unknown
semantic/geometry path is rejected rather than merged, and localized visible
financial tokens cannot change number, sign, currency, unit, rate basis,
period/date identity, or the renderer-owned `$value` binding. Localized SVG
annotations preserve the source primitive tree and every non-text element
attribute. Text/tspan content may change, while a corpus-derived typed
projection permits only bounded, source-relative typography/position
adjustments; visibility, paint, transforms, active markup, and assets remain
source-owned. Raster annotations are not a localization surface. The renderer
independently enforces the same safe SVG boundary. The renderer and
measurement Interface also share the same minimum visible node face: a positive
compiled face paints at least one viewBox unit, and that painted height is what
calibration reports; `pnpm verify:i18n -- --strict` rejects any overlay that
changes value-bearing renderer geometry.

The complete comparison group renders as one off-screen transaction.
Responsive fit consumes only the renderer-measured dimensions of the stable
Sankey viewport and never reimplements CSS layout; the zoomed comparison is
output and never becomes the next fit's input. Before commit the renderer
remeasures the exact SVG anchor and `viewBox` against the plan; any failure in
calibration, render or commit replaces the whole group with one uncalibrated
state.

## Domain and architecture vocabulary

Architecture vocabulary is **Module**, **Interface**, **Implementation**,
**Depth**, **Deep/Shallow**, **Seam**, **Adapter**, **Leverage**, and
**Locality**. The current input-type Adapters are Income Statement, Revenue Metric and
Metric Observation. Income Statement may include typed supplemental
`operatingMetrics` (ARR, retention, counts); these keep their own units and
comparisons and do not enter accounting sums or Sankey flow geometry.

The **CI Verification Plan Module** derives a conservative check set from a
Git diff using the same `ChangeImpact` language. Its Interface returns fast,
app, site, render scope/keys, standalone, and site-projection
facts. Unknown executable impact and missing diff identity select the complete
suite; they never select an empty plan.

The **Runtime Data Module** serves the Pages projection through a light
navigation catalog and on-demand, version-bound company/family details. Its
Interface owns readiness, retry, integrity, and in-place hydration; full
authored file SSOTs remain authoritative, and source/standalone retain complete
offline data. A runtime digest identifies generated bytes, not a canonical
publication or human acceptance. See `docs/architecture/runtime-data.md`.

## Load context in this order

1. [Architecture index](docs/architecture/README.md)
2. [Dataset lifecycle](docs/architecture/dataset-lifecycle.md)
3. [Verification and publication](docs/architecture/verification-publication.md)
4. [Machine-readable lifecycle contract](docs/architecture/lifecycle-contract.json)
5. [ADR-0001](docs/adr/0001-dataset-build-transactions.md)
