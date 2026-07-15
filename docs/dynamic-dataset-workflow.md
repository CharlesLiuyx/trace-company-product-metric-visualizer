# Dynamic Dataset Workflow

This document owns the current nine-step workflow, execution/delegation,
Adapter Type Gate, Source-object taxonomy, traps, final checklist, and report.
Load it before processing `input/pending/`. Fields belong to `data/schema.md`;
fidelity to `docs/fidelity-loop-rules.md`; recurrence triggers to
`docs/fidelity-feedback-casebook.md`; assets to `data/assets/README.md`; and
lifecycle/current-target distinctions to `docs/architecture/`.

## Current Architecture Boundary

The implemented M3 lane fixes Source classification/claim at intake and records
`ObjectInventory`, `source-coverage/v1`, Plan v4, and Packet v3 at review
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
   wait for their explicit confirmation before moving anything; the confirmed
   list, not the raw directory contents, is the relocation scope;
3. fail safely if any same-name destination already exists under
   `input/processed/` for a confirmed PNG;
4. otherwise move the confirmed PNGs directly to `input/processed/`, report
   the moved set, and commit their removal from the tracked processing queue
   without force-adding the ignored processed archive.

This is the only current Source-relocation authority. It neither requires nor
creates a Build receipt, structured attestation, seal, `verify:closeout`, or M4
Publication. Without a signal and confirmed list, leave every Source in
`processing/`. A move preserves Source digest identity and must never overwrite
or rename a processed image.

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
| `financial-value` | Income Statement data + exactly one Adapter node, exact amount, typed SSOT reference |
| `metric-observation` | Revenue Metric data mapping, exact amount, dated SSOT reference |
| `structural-flow` | Income Statement render mapping |
| `label-or-annotation` | render mapping |
| `asset-or-brand` | explicit asset or render mapping |
| `non-semantic-residual` | skip only: publisher attribution, creator branding, URL, social badge, or decorative residue |

`Other`, `Others`, `All Other`, other-income/expense, and every value-bearing
label are semantic. Missing icons and small magnitude never make one residual,
skippable, an annotation, or hidden. `source-coverage/v1` requires
`semantic-value`, `geometry`, and `residual` scans and derives Other IDs, three
smallest non-zero amounts, visible/hidden IDs, and floor exceptions.

If `$0.0B` or another zero literal represents a non-zero semantic object,
`precisionRecovery` is mandatory: `authoritative-supplemental-source`, locator, and a higher-precision
K/M/B/T literal that normalizes exactly to the authored non-zero amount.

Face classification details belong to fidelity §2. Coverage binds each face to
one node and inventory intent. T21 is blocking: expected-visible faces below
3px fail. A genuine Source face below 3px needs the typed
`source-visible-face-below-floor` exception bound to Source digest, native
bbox/crop, pixel scan, and one node; T21/T14 still govern acceptance.

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
as `nvidia-q4-fy26`. Run the selected-item guard; the final-key pass is an
optional early failure because intake repeats it:

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
Preserve Build ID, manifest, classification digest, and path. This is not
Publication.

**STOP:** intake/claim failure, destination collision, Source digest mismatch,
or an unexpected pending/processing/processed locator state. Treat it as
recovery; never overwrite, silently retype, or move the Source back.

### Step 3 — Source Coverage and ObjectInventory

Create matching `object-inventory/v3` and `source-coverage/v1`; scan the Source:

1. semantic-value: every displayed financial value/metric observation;
2. geometry: every node face, link/guide, label/callout, and asset cluster;
3. residual: only the closed non-semantic residual kinds in §Object Taxonomy.

Each item records native bbox, inventory IDs, mapping roles, and where relevant
exact amount, typed SSOT reference, and face observation. Give every inventory
object one Source owner. Match casebook triggers; wrong-type and short/Other
risks consume CB-024 and CB-003/CB-007/CB-023 when applicable.

For a rounded-zero literal, recover authoritative precision before authoring; never convert or hide it as zero.

**Output:** inventory and coverage summaries for Other, three smallest non-zero
values, visible/hidden IDs, typed floor exceptions, and casebook hits.

**STOP:** semantic skip; Other treated as icon residue; missing/duplicate
coverage; unclassified face; or contradiction with the intaked Adapter. There
is no retype command—stop and report recovery. Missing required precision
recovery is also a hard stop.

### Step 4 — Parallel preparation

Only after Step 3 is complete may these tracks run in parallel:

- **Data:** metadata and Adapter-owned Metric SSOT, including every value item.
- **Visual:** fidelity §2 preflight bound to this Build Source digest.
- **Icons, conditional:** crop spec plus `extract_icon_crops.py`; follow the
  asset doc and I/R rules. No icon changes only asset coverage.

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
the three smallest non-zero values, and visible faces. i18n is display-only.
Recovered values stay non-zero: raise SSOT decimals for Table; raise Adapter decimals or use exact non-zero `valueText` for Sankey.

**STOP:** any reconciliation mismatch, missing small/Other surface, invalid
node-face mapping, missing fixed-label measurement, untranslated required
surface, registration drift, or any non-zero item still displayed as zero.

### Step 6 — Prepare review

Supply current artifacts, inventory, Source Coverage, ChangeImpact, and
required locales:

    pnpm record:build -- prepare-review <build-id> --input <review-input.json>

This gate binds classification, coverage, inventory, authored values,
reference, Plan v4, and Packet v3. It rejects incomplete scans, semantic skips,
missing roles, stale evidence, and Source ↔ SSOT ↔ Adapter amount mismatch.
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
Structure freezes only when coverage visible IDs, inventory intent, and
per-locale paint agree; T21 blocks unexcepted sub-floor faces. Review Other,
smallest values, casebook hits, hidden anchors, and exceptions.
`evidence-ready` is not acceptance.

Minimum re-verification after change:

| change | prepare | consistency | fidelity | finish |
| --- | --- | --- | --- | --- |
| authored adapter/SSOT/i18n | if packet stale | rerun | affected stage; all locales for final digest | rerun |
| inventory/Source Coverage/Plan input | rerun | rerun | all | rerun |
| review JSON only | no | no | no | rerun |
| renderer/protocol/rule contract | rerun | rerun | all | rerun |

**STOP:** any failed/pending/not-scored required result, stale evidence,
visible/hidden/unclassified mismatch, unresolved casebook/feedback item, or a
later stage finding an earlier-stage error. Reopen the earlier stage formally.

### Step 8 — Finish, stage baseline, and seal

After the final authored change, refresh Packet/evidence as needed and run:

    pnpm record:build -- finish <build-id> --review <review.json>
    pnpm record:build -- stage-baseline <build-id> --input <baseline.json>
    pnpm record:build -- seal <build-id>

Finish consumes token, consistency, coverage review, locale evidence,
attestation, regions, Matrix, attention, and feedback. Only accepted results
record `CLOSED`; machine-only green is `review-pending`. Baseline is future
regression only. Seal re-hashes and reruns the final profile; it does not
publish.

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
- The current Build has matching Source Classification, Source Coverage,
  ObjectInventory, Plan v4, Review Packet v3, consistency evidence, and
  authored digests.
- Coverage manual review cites Source + coverage digests; Other, smallest
  non-zero, visible/hidden, and floor-exception sets are accounted for.
- Rounded-zero semantic items have authoritative precision recovery, and
  neither Table nor Sankey displays the recovered non-zero value as zero.
- Income Statement required locales have fresh `fidelity-run/2` evidence and
  visual inspection; Revenue Metric render/manual axes are Adapter-owned N/A.
- Accepted result consumes all checks, required Matrix, attention, feedback,
  and recurrence upgrades, with no failed/open result.
- T21/node-face policy passes per locale; expected-visible, confirmed-visible,
  hidden-anchor, exception, and unclassified sets reconcile.
- `verify:closeout` passes when required by Step 8; it never moves a Source.
- Relocation used the confirmed list without force-adding processed; otherwise
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
