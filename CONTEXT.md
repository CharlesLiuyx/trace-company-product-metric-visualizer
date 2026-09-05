# Trace Context

Trace turns a **Source** into auditable **Metric** SSOT records and optional
high-fidelity **View** artifacts. A dataset change is handled by three scopes:
`DatasetBuild`, `PublicationBatch`, and `ReleaseAttempt`; a `FidelityRun` is
build-local evidence, not publication state.

New input uses `docs/asset-workflow.md`: a PNG or UTF-8 text Source, one facts
file, an isolated Build, generated review records, atomic local publication,
and an optional release from that published digest. The root `index.html` is the
stable local review entry: it discovers the local HTTP workbench, where the default
view combines prepared drafts and current project data in one tab-pinned candidate.
Next/previous navigates its fixed member list; each Build retains its own review
binding. Individual Build/transport views remain available for inspection. Session owner/generation fences
writers; no Git worktree is needed. A reviewed Git transport uses a shared write
mutex, exact paths, a private index and a recovery journal. The operational owner
is `docs/local-environments.md`; ADR-0003 preserves the existing lifecycle scopes.
Generic observations live
in `data/metric-observations/` and appear in the viewer metric library.

Source folders are operational locators, not a fourth lifecycle scope.
`record:intake` fixes the Source digest and claims the selected file from
`input/pending/` into the Build-local `input/processing/` working locator and
lease. The Source remains there until an explicit operator review-completion
signal; after the operator confirms the enumerated processing batch, the
confirmed Sources move no-clobber to `input/processed/`. That signal is the only
current relocation trigger, changes no Source digest identity, and fabricates
no Build state; its owning definition is `docs/dynamic-dataset-workflow.md`
§Operator Review-Completion Signal. Publication records the stable Source locator and digest with the data;
local archive relocation retains this explicit operator policy (ADR-0002).

Git transport is separate from lifecycle state: `input/pending/` and
`input/processing/` are tracked so multiple project checkouts can exchange
queue and active-claim changes, while `input/processed/` is ignored and kept
as a complete local archive. Tracking or ignoring a locator does not create a
Build transition or change Source identity.

Within a Sankey View, **Hover Share（所占比例）** is renderer-owned rather
than Adapter-configurable. Every semantic relationship uses one formula on
every hover surface (node, node label, link, or endpoint-declared guide):
`min(|source authored value|, |target authored value|) /
max(|source authored value|, |target authored value|)`. It is direction-
independent, ignores the d3-computed node value and `link.value`, and shows no
card when the larger endpoint is zero.

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
uses the dated Trace FX snapshot to derive viewBox units per USD. A group is
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
source-owned. Raster annotations are not a localization surface. The
renderer-owned measurement also carries the effective canvas width/height:
responsive fit may consume only those measured dimensions, and the exact
rendered anchor plus final SVG `viewBox` must match the plan before the
off-screen group is committed. Fit always measures the stable Sankey viewport
content box; the zoomed max-content comparison is output and can never become
the next redraw's width input. The renderer independently enforces the same
safe SVG boundary. The renderer and
measurement Interface also share the same minimum visible node face.

The complete comparison group renders in a connected off-screen transaction
that mirrors the real `.comparison-view` ancestry. Calibration, every card,
DOM replacement, state flags, trend teardown, zoom reset, and post-commit
initialization share one failure boundary; any failure replaces the whole
group with one typed uncalibrated state. Before commit, the renderer's
post-render Geometry Interface remeasures the exact SVG anchor instance and
requires its semantic role, authored value, face height, value scale, and SVG
`viewBox` dimensions to equal the plan;
measurement/render drift cannot cross the transaction boundary.

Responsive fit measures resolved `row-gap`, `column-gap`, margins, and actual
card chrome from that connected staging tree; it never parses raw CSS custom
properties. Zoom preview uses a connected, SVG-free skeleton under the same
CSS ancestry and asks the active browser to resolve each target flex box.
Thus browser subpixel quantization, `rem`/`calc()` lengths, independent
row/column gaps, asymmetric margins/borders, and future card chrome remain
inside the CSS-owned layout boundary instead of being reimplemented in
JavaScript. Fit and zoom retain fractional authored widths without a
one-pixel floor, so even extreme cross-company magnitudes keep the
mathematical scale; browser subpixel rasterization is an explicit
presentation boundary, and zoom is the inspection path.

Architecture vocabulary is **Module**, **Interface**, **Implementation**,
**Depth**, **Deep/Shallow**, **Seam**, **Adapter**, **Leverage**, and
**Locality**. The two current input-type Adapters are Income Statement and
Revenue Metric.

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

The current M3 build-local chain is the primary close-out authority and runs
end to end. Fresh intake first records a whole-Source Type Gate; authored
review then records exhaustive Source Coverage and reconciles Source amounts
against the actually loaded SSOT (and exactly one mapped Sankey node or
non-node metric for Income Statement) before a Plan can exist:

```text
SourceClassification v1 -> INTAKED
  -> ObjectInventory v4 + SourceCoverage v2
  -> actual authored-value reconciliation
  -> NodeFacePolicy v2 + VerificationPlan v5 -> ReviewPacket v4
  -> dataset-verification/v1 consistency evidence
  -> fidelity-run/2 EVIDENCE_READY
  -> ManualAttestation + RegionDecision + FeedbackLedger
  -> FidelityResult v2 + checkResults -> CLOSED -> BASELINE_STAGED -> fresh SEALED
```

`verify:d3` is read-only diagnostic execution and never records durable
evidence. `record:fidelity` owns durable automatic evidence; its
`evidence-ready` result still requires human review and cannot close a Build.
The Plan's Source Coverage review is also human-bound: its decision cites both
the immutable Source digest and the coverage digest. Every semantic node
mapping is expected visible by definition; geometry without a Source-painted
face must be modeled as flow geometry or a semantic annotation, never as an
invisible node. An Income Statement financial value mapped to
`nonNodeMetrics.*` must bind a Source slot that the Build Module pixel-checks
as zero-paint before it creates the Plan. The embedded node-face policy
includes Source-bound handling
for genuinely sub-floor visible faces; neither an omitted small value nor an
`Other` label can be accepted as decorative residue. A primary zero-looking
literal that masks a real non-zero amount must bind authoritative
higher-precision recovery and remain non-zero in the authored SSOT/View. If
the authoritative value falls outside the primary literal's rounding
interval, the literal is instead a confirmed numeric typo and may proceed
only through the user-directed authoritative-correction path; without one of
those typed records, the Build stops rather than writing zero.
`record:build` exposes the deep prepare-review, finish-reviewed, stage, seal,
and inspect operations. A stored `SEALED` receipt is historical fact, while
inspection computes effective freshness: changing an authored file makes a
historical `SEALED` Build effectively `AUTHORED`. `CloseoutReport`, Task
information, and Loop Fidelity Summary are generated Views over structured
Build objects, not acceptance inputs.

When a Source literal has a confirmed unit or numeric typo, Source Coverage
keeps the original literal immutable and may apply only a
user-directed, authoritative-source-bound correction. The typed correction
records whether the suffix or displayed magnitude is wrong, plus approval,
official locator and literal, corrected display literal, and reason;
both the official value and corrected display must support the authored amount
within the declared resolution. This is distinct from rounded-zero precision
recovery and the two mechanisms cannot be combined. Zero-looking literals may
use only the numeric-typo branch, and only when the authoritative value lies
outside the primary literal's rounding interval.

Load context in this order:

1. [Architecture index](docs/architecture/README.md)
2. [Dataset lifecycle](docs/architecture/dataset-lifecycle.md)
3. [Verification and publication](docs/architecture/verification-publication.md)
4. [Machine-readable lifecycle contract](docs/architecture/lifecycle-contract.json)
5. [ADR-0001](docs/adr/0001-dataset-build-transactions.md)

The architecture documents distinguish **current Implementation** from the
accepted **target architecture**. Until a migration milestone is implemented,
the current commands and operational rules remain authoritative.
