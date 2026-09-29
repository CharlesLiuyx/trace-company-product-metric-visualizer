# Workflow implementation · 2026-09-05

Implemented on `codex/workflow-ingestion` following the reviewed plain-language
proposal. The operating entry is [asset-workflow.md](asset-workflow.md); the
[current HTML graph](workflow-flowchart.zh-CN.html) describes actual behavior.

## Delivered

- PNG and UTF-8 TXT/MD Source intake; generic company/product metric SSOT,
  exact decimal values, source anchors and a searchable viewer library.
- Source facts compile existing inventory, coverage, plan and packet objects.
  One generated review sheet exposes the original, data, candidate and questions.
  The HTML-exported review is consumed by the existing Build closeout module.
- Independent workspaces share one Build ledger. Content-derived dependencies
  include installed font bytes and own semantic contributions; shared registry
  additions do not alone invalidate another Build's contribution.
- Evidence-bound stage freezes and explicit reopens constrain new Sankey Builds.
  New feedback/reopens invalidate the review context. Current durable checkpoint
  history cannot be bypassed by supplying an old subset of references.
- Asset/version/recipe/consumer catalog, tracked crop metadata, casebook-derived
  feedback index and explicit same-batch follow-up scope. Historical assets are
  not automatically marked accepted. Crop metadata travels with publication.
- Bounded independent worker processes, per-Build write exclusion, immutable
  combined publication plans, atomic pointer CAS, durable tree flush, conflict
  detection and recovery of interrupted receipts. Release attempts fail/retry
  independently. Original Source archive moves still need the exact operator-
  confirmed full list.
- Rule-owner documents and both AGENTS mirrors aligned; command/protocol
  reference and HTML graph have freshness checks in the fast gate.

## Verification

- `pnpm check`: passed, **650 unit tests**, JS syntax, Source queue guards,
  architecture/app-global contracts, all generated projections, SSOT, i18n,
  baseline structure and Git-time metadata. Existing catalog: 1,011 income
  statement records and 2 revenue series; no real generic record was added.
- `pnpm verify:app`: all 19 browser scenarios passed, including the metric
  library's exact-value display, source lookup, search and JSON export.
- `pnpm build:site` + `pnpm verify:site`: passed.
- Standalone built to `output/reviews/workflow-runtime-check.html`; verified
  with `node scripts/verify-standalone.mjs output/reviews/workflow-runtime-check.html`.
  The first invocation supplied an unsupported extra `--`; the corrected
  invocation passed. Tracked standalone output was not replaced.
- Synthetic browser roundtrip: open generated HTML, reject incomplete form,
  choose explicit test-only review, export JSON, consume it, close and seal:
  passed. Synthetic PNG workflow additionally publishes accepted asset bytes
  and recipe metadata together.
- HTML graph: 18 theme/width/font combinations and 5 additional viewport widths
  passed; no body/figure overflow, missing anchors or browser errors. Route
  switching, repair examples, TOC, anchor/back navigation, auto-fit and tooltip
  checks passed. Six CPU-throttled scroll runs (three each at 4x/6x) recorded
  no long tasks, approximately 10.1–10.2 ms p95 frame intervals on this host.
  Geometry reads were absent during steady scrolling. These are HTML UI
  measurements, not claims of faster asset recognition.

Two optional historical d3 diagnostics remain blocked:

- `nike-q4-fy25`: short-node exceptions require the matching Build Plan.
- `netflix-q1-fy26`: the current revenue label fails its vertical-gap check.

Both failures were reproduced with the **pre-change HEAD** in an isolated
`/private/tmp/` checkout using the same local references. They are not evidence
of a new workflow regression and are not reported as fidelity acceptance.
No full-catalog render run or new real-source human acceptance is claimed.

## Current boundaries

Image recognition and semantic judgment remain executor/human responsibilities.
Generic records are auto-authored from source facts; specialist financial SSOTs
and Sankey adapters are authored inside the returned workspace. Conflicting
edits to the same file and duplicate metric identities require explicit
resolution. Publication is local under `output/publications/`; use Release to
produce portable output. This change does not deploy the hosted viewer.

Original datasets, processed PNGs and historical human acceptance records were
not rewritten. No operator archive move was performed. Synthetic tests and
screenshots stay under temporary or ignored output paths.
