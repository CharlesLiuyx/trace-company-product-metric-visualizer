# Dynamic Dataset Workflow

This document owns the current nine-step workflow, execution/delegation,
Adapter Type Gate, Source-object taxonomy, traps, final checklist, and report.
Load it before processing `input/pending/`. Fields belong to `data/schema.md`;
fidelity to `docs/fidelity-loop-rules.md`; recurrence triggers to
`docs/fidelity-feedback-casebook.md`; assets to `data/assets/README.md`; and
lifecycle/current-target distinctions to `docs/architecture/`.

## Current Architecture Boundary

The implemented M3 lane fixes Source classification/claim at intake and records
`ObjectInventory`, `source-coverage/v2`, Plan v5, and Packet v4 at review
preparation. Canonical files are still edited directly. M4 atomic Publication
and `publish:*` remain unimplemented; relocation, `record:*`, staging, and seal
are not Publication.

## Operator Review-Completion Signal

The user's explicit statement that human review is complete (including
`人工审阅完毕`), or that local work was pushed to the remote and merged into
`main`, is a batch review-completion signal for the PNGs currently under
`input/processing/`. On either signal:

1. enumerate every current processing PNG;
2. present the complete list of dataset keys and paths to the operator and
   wait for their explicit confirmation; the confirmed list, not the raw directory
   contents, is the relocation scope;
3. fail safely if any same-name destination already exists under
   `input/processed/` for a confirmed PNG;
4. otherwise move the confirmed PNGs directly to `input/processed/`, report
   the moved set, and commit their removal from the tracked processing queue
   without force-adding the ignored processed archive.

This is the only Source-relocation authority; it neither requires nor creates
a Build receipt, attestation, seal, or `verify:closeout`. Without a signal and
confirmed list, every Source stays in `processing/`. A move preserves Source
digest identity and never overwrites or renames a processed image.

## Object Taxonomy

### Adapter Type Gate

Inspect the complete native Source before intake and pass one signature:

| Adapter | required `--signal` values | Source facts |
| --- | --- | --- |
| `income-statement` | `income-statement-values`, `sankey-flow-topology` | one-period financial values plus visible Sankey flow topology; standard, `-by-segment`, and `-by-bu` are variants |
| `revenue-metric` | `revenue-metric-definition`, `time-series-observations` | one defined metric observed across dates in a table/chart, without authored Source Sankey topology |

Company, title, “revenue,” or one period token are not classifiers. Mixed,
incomplete, or contradictory signals stop before intake. Define a new Adapter
first; a new metric/SSOT also updates AGENTS, its mirror, and the Trace spec.

### Source object classes and anti-omission invariants

Every independent Source observation uses one `source:*` ID and one class:

| class | required authored coverage |
| --- | --- |
| `financial-value` | Income Statement data + exactly one Adapter node or non-node metric, exact amount, typed SSOT reference |
| `metric-observation` | Revenue Metric data mapping, exact amount, dated SSOT reference |
| `structural-flow` | Income Statement render mapping |
| `label-or-annotation` | render mapping |
| `asset-or-brand` | explicit asset or render mapping |
| `non-semantic-residual` | skip only: publisher attribution, creator branding, URL, social badge, or decorative residue |

`Other`, `Others`, `All Other`, other-income/expense, and every value-bearing
label are semantic; small magnitude or a missing icon never makes one
residual, skippable, an annotation, or flow geometry. A value-bearing Other is a data metric —
`financial-value`/`metric-observation`, never `label-or-annotation` — and
annotation classing or an invisible-node mapping fails coverage assembly
(T22). The painted-face invariant generalizes this to every node-mapped
object: any Source-painted face, 1–2px strips included, is recorded at native
measured height. If the Source paints no face, the object is not a node; use a
structural flow or semantic annotation instead. T21 blocks
expected-visible faces below 3px; a genuine sub-floor face keeps its bar via
the typed `source-visible-face-below-floor` exception bound to Source digest,
native bbox/crop, pixel scan, and one node — never inflated or suppressed;
T21/T14 still govern acceptance.

Coverage binds each face to one node;
`source-coverage/v2` requires the `semantic-value`/`geometry`/`residual`
scans and derives Other IDs, three smallest non-zero amounts, visible node
IDs, and floor exceptions.

If `$0.0B` or another zero literal represents a non-zero semantic object,
`precisionRecovery` is mandatory: `authoritative-supplemental-source`,
locator, and a higher-precision K/M/B/T literal that normalizes exactly to
the authored non-zero amount.

A confirmed non-zero unit typo keeps the original literal and needs a
user-directed `authoritative-source-correction` bound to the official
locator/literal, approved corrected literal, `unit-typo` issue, and reason;
both values must support the authored amount within Source resolution. It is
distinct from precision recovery and never inferred or combined with it.

## Execution Model

| step | mode | owner/delegation |
| --- | --- | --- |
| 1–3 | serial correctness gates | main agent; classification and Source completeness cannot be delegated away |
| 4 | parallel preparation after Source Coverage draft is complete | metadata research and script runs may delegate; main agent owns financial semantics, measurements, and acceptance |
| 5–6 | serial authoring and review preparation | main agent owns reconciliation; registration may delegate |
| 7 | staged review | main agent owns triage/freeze/decisions; independent locale runs and evidence collection may delegate |
| 8–9 | serial close-out | main agent |

Delegation never lowers the verifier or evidence bar. A later finding that
invalidates an earlier gate reopens that step before downstream work continues.

## New Dataset Pipeline

### Step 1 — Guard, key, and Type Gate

Select one PNG, ignore `.gitkeep`, inspect the whole Source, choose the two
positive signals from §Object Taxonomy, and assign a lowercase kebab key such
as `nvidia-q4-fy26`. Run the selected-item guard; intake repeats the key
check, so a guard key failure only surfaces earlier:

    pnpm check:pending -- --file input/pending/<file>.png --key <dataset-key>

**Required output:** final key, Adapter, two positive signals, and why the
other Adapter does not apply.

**STOP:** any content/key/claim collision, or mixed/incomplete/unrecognized
Source facts. Do not move, author, crop, or verify that image.

### Step 2 — Intake and Source claim

Run intake with both signals:

    pnpm record:intake -- input/pending/<file>.png --key <dataset-key> \
      --adapter <income-statement|revenue-metric> \
      --signal <signal-1> --signal <signal-2> \
      --availability <public|local-only|restricted>

It records full-image `source-classification/v1`, Source/base digests and
dimensions, then no-clobber claims `input/processing/<dataset-key>.png`.
Preserve Build ID, manifest, classification digest, and path.

**STOP:** intake/claim failure, destination collision, Source digest mismatch,
or an unexpected pending/processing/processed locator state. Treat it as
recovery; never overwrite, silently retype, or move the Source back.

### Step 3 — Source Coverage and ObjectInventory

Create matching `object-inventory/v4` and `source-coverage/v2`; scan the Source:

1. semantic-value: every displayed financial value/metric observation;
2. geometry: every node face, link/guide, label/callout, and asset cluster;
   at every multi-link face record the Source top-to-bottom per-link identity
   order — the only admissible source for authored `sourceOrder`/`targetOrder`;
3. residual: only the closed non-semantic residual kinds in §Object Taxonomy.

For every proposed node, check the three smallest non-zero values and compare
its expected slot with a clearly painted node in the same column: use that
peer's x/width as the expected face slot. Any continuous painted region
occupying that slot is a node face; a 1–3px-high region is
`visible-short-node`. A light tint, the same color as the adjacent link, or a
horizontal-line appearance never removes node semantics. A zero-paint slot is
not a node and must be modeled as structural flow geometry or a semantic
annotation. If a financial value maps to `nonNodeMetrics.*`, record
`zero-paint-node-slot` with the same-column peer x/width and native search
bbox; `prepare-review` pixel-checks this negative claim (T23).

Each item records native bbox, inventory IDs, mapping roles, and where
relevant exact amount, typed SSOT reference, and face observation; every
inventory object gets one Source owner. Face claims and rounded-zero or
unit-typo literals follow §Object Taxonomy before authoring. Match casebook
triggers; wrong-type and short/Other risks consume CB-024 and
CB-003/CB-007/CB-023 when applicable.

**Output:** inventory and coverage summaries for Other, three smallest non-zero
values, visible node IDs, typed floor exceptions, and casebook hits. For each
smallest-value or proposed node with a same-column peer, include the
compact decision trace:
`object -> peer slot x/width -> observed bbox|zero-paint -> node|flow|annotation`.

**STOP:** semantic skip; Other treated as icon residue; a value-bearing Other
classed as annotation or mapped to a non-painted node (T22); a node mapping
without an observed Source face; a missing same-column slot check where a
clear peer exists; a zero-paint object left in `nodes[]`; a face decision
based on tint, link-color equality, horizontal appearance, or value magnitude;
a multi-link face without a recorded per-link order;
missing required precision recovery or authoritative correction;
missing/duplicate coverage; unclassified face; or contradiction with the
intaked Adapter — there is no retype command; stop and report recovery.

### Step 4 — Parallel preparation

Only after Step 3 is complete may these tracks run in parallel:

- **Data:** metadata and Adapter-owned Metric SSOT, including every value item.
- **Visual:** fidelity §2 preflight bound to this Build Source digest.
- **Icons, conditional:** crop spec plus `extract_icon_crops.py`; follow the
  asset doc and I/R rules. With no icon changes, only asset coverage applies.

Author final `input/processed/<dataset-key>.png` references; tools may resolve
the same-key processing claim while that locator is absent.

**STOP:** an SSOT value lacks Source Coverage, a Source amount/sign/unit does
not reconcile, required measurement provenance is missing, or a required icon
cluster is neither accepted nor explicitly dispositioned.

### Step 5 — Adapter, i18n, and registration

Income Statement authors `data/datasets/<dataset-key>.js` plus required i18n.
Revenue Metric writes metadata and `data/revenue-metrics.js` only—no Sankey,
icon loop, or render evidence. Run:

    pnpm sync:index-datasets

Reconcile Source Coverage → inventory → SSOT → Adapter/data. Inspect Other,
the three smallest non-zero values, and visible faces. Author
`sourceOrder`/`targetOrder` only from the Step 3 per-face order — never from
the other end's geometry or a value sort; crossing links invert it (CB-001).
i18n is display-only. Recovered values stay non-zero: raise SSOT decimals for
Table; raise Adapter decimals or use exact non-zero `valueText` for Sankey.

**STOP:** any reconciliation mismatch, missing small/Other surface, invalid
node-face mapping, an authored face order contradicting the recorded Source
order, missing fixed-label measurement, untranslated required surface,
registration drift, or any non-zero item still displayed as zero.

### Step 6 — Prepare review

Supply current artifacts, inventory, Source Coverage, ChangeImpact, and
required locales:

    pnpm record:build -- prepare-review <build-id> --input <review-input.json>

This gate binds classification, coverage, inventory, authored values,
reference, Plan v5, and Packet v4. It rejects incomplete scans, semantic skips,
missing roles, stale evidence, a painted face inside a claimed zero-paint
slot, and Source ↔ SSOT ↔ Adapter amount mismatch.
Preserve `reviewToken` and coverage digest.

**STOP:** any preparation failure, stale digest, missing `reviewToken`, or an
open Source Coverage reconciliation. Do not collect closure evidence first.

### Step 7 — Record evidence and run staged review

Record Build-bound consistency evidence, then Income Statement render evidence:

    pnpm record:verification -- <build-id> --json
    pnpm record:fidelity -- <dataset-key> --build <build-id> \
      --focus <structure-sweep|text-sweep|polish-l10n-sweep|closeout-refresh> \
      [--language <code> ...]

`record:fidelity` is durable; `verify:d3` is optional diagnosis, and typed
floor exceptions require its Plan-bound `--build` form. Follow fidelity §4.
Structure freezes only when coverage visible IDs, inventory node mappings, and
per-locale paint agree; T21 blocks unexcepted sub-floor faces. Same-color
multi-inflow faces are G12/L11-blind (occupancy cannot recover per-link
identity), so freeze also requires the B8/L1–L4 per-link identity reconcile
against Source crops; a recurrence face gets a dataset contract test. Review
Other, smallest values, casebook hits, non-node geometry, and exceptions.
`evidence-ready` is not acceptance.

Minimum re-verification after change:

| change | prepare | consistency | fidelity | finish |
| --- | --- | --- | --- | --- |
| authored adapter/SSOT/i18n | if packet stale | rerun | affected stage; all locales for final digest | rerun |
| inventory/Source Coverage/Plan input | rerun | rerun | all | rerun |
| review JSON only | no | no | no | rerun |
| renderer/protocol/rule contract | rerun | rerun | all | rerun |

**STOP:** any failed/pending/not-scored required result, stale evidence,
visible/unclassified mismatch, unresolved casebook/feedback item, or a
later stage finding an earlier-stage error. Reopen the earlier stage formally.

### Step 8 — Finish, stage baseline, and seal

After the final authored change, refresh Packet/evidence as needed and run:

    pnpm record:build -- finish <build-id> --review <review.json>
    pnpm record:build -- stage-baseline <build-id> --input <baseline.json>
    pnpm record:build -- seal <build-id>

Finish consumes token, consistency, coverage review, locale evidence,
attestation, regions, Matrix, attention, and feedback. Only accepted results
record `CLOSED`; machine-only green is `review-pending`. Baseline is future
regression only; seal re-hashes and reruns the final profile.

Merge requires accepted review. Formal Build audit also requires staging,
seal, and closeout; otherwise report every skipped step and reason.

**STOP:** finish is not accepted/CLOSED, baseline staging fails, seal fails, or
historical state is stale in effective inspection. Do not report convergence.

### Step 9 — Close out, relocate, check, and report

Inspect/audit the Build under the Step 8 policy:

    pnpm record:build -- inspect <build-id> [--json]
    pnpm verify:closeout -- <build-id> [--json]

If an operator completion signal exists, apply the owning rule at the top of
this document; `verify:closeout` never authorizes relocation. Then run
`pnpm check` plus any scoped app/icon/standalone checks, and commit according
to `docs/commit-messages.md`.

**STOP:** required closeout fails; final checks fail; the operator has not
confirmed the enumerated list; or a confirmed processed destination collides.
With no completion signal, stop relocation only, retain Sources in processing,
and report that no move was authorized.

## Traps and Hard Constraints

- Fidelity definitions/formulas live only in its catalog; this workflow links.
- Every node mapping has an observed painted Source face; zero-paint objects
  use data-only, annotation, or link-owned route geometry. Sub-floor faces keep
  native height via the typed exception, never inflation
  (T21/T22/T23, CB-003/CB-007).
- Multi-link face order comes only from Source measurement at that face;
  same-color inflows are G12/L11-blind — manual per-link reconcile (CB-001).
- Title/period use rendered bboxes, not authored baselines (CB-015).
- Preserve displayed integer decimals through schema `valueText` (CB-016).
- Resolve raster/localized-text collisions per Z6a/CB-017 without shared
  geometry changes.
- Interim spans (`3M`, `H1`, `YTD`, etc.) must retain the intended viewer
  variant label/order/state (CB-020).
- Reference crops never become runtime rasters; follow the asset doc/R-series.
- A shareable final HTML must be `pnpm build:standalone` output and pass
  `pnpm verify:standalone`.
- Abnormal claims are recovery: never overwrite, silently requeue, or invent a
  lifecycle command.

## Verification Checklist

Always, before the final response:

- `pnpm check` passes; fresh-checkout/CI details stay in AGENTS and CI docs.
- The Build has matching Source Classification/Coverage, ObjectInventory,
  Plan v5, Packet v4, consistency evidence, and authored digests.
- Coverage manual review cites Source + coverage digests; Other, smallest
  non-zero, visible-node, and floor-exception sets are accounted for, and no
  zero-paint object remains node-mapped or lacks the pixel-checked negative
  evidence (T22/T23, CB-003/CB-007).
- Authored `sourceOrder`/`targetOrder` match the Step 3 measured per-face
  order; same-color multi-inflow faces carry per-link B8 evidence (CB-001).
- Rounded-zero semantic items have authoritative precision recovery, and
  neither Table nor Sankey displays the recovered non-zero value as zero.
- Income Statement required locales have fresh `fidelity-run/2` evidence and
  visual inspection; Revenue Metric render/manual axes are Adapter-owned N/A.
- Accepted result consumes all checks, required Matrix, attention, feedback,
  and recurrence upgrades, with no failed/open result.
- T21/node-face policy passes per locale; expected-visible,
  confirmed-visible, exception, and unclassified sets reconcile.
- `verify:closeout` passes when required by Step 8 and never moves a Source;
  relocation used the confirmed list without force-adding processed, else
  Sources remain processing.
- Icon validation, `verify:app`, and standalone checks pass when their scoped
  changes or requested artifacts require them.

## Reporting

The final response must include:

- files changed and whether pure Metric SSOTs changed;
- key, Adapter/signals, Build/manifest, effective state, and inspected status;
- inventory/coverage digests and counts, Other, smallest values, skips,
  casebook hits, and complete Source → inventory → SSOT → Adapter coverage;
- per-locale visible expected/confirmed, hidden, floor exceptions, unclassified;
- recorded verification/fidelity/locale results and any command not run;
- icon cluster coverage and scoped viewer/standalone results when applicable;
- feedback attribution, rule/casebook update, and same-batch same-type sweep;
- operator completion signal, confirmed list, moved/retained Source paths, or
  the exact recovery/collision condition; never call the move Publication.
