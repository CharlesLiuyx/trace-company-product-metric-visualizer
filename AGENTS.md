# AGENTS.md

Agent guidance for this repository. This file only routes: every rule lives in
exactly one owner below. Update it together with `docs/AGENTS.zh-CN.review.md`.

## Rule Ownership Map

| rule domain | owning document |
| --- | --- |
| fast-loaded domain and architecture context | `CONTEXT.md`, then `docs/architecture/README.md` |
| dataset lifecycle: state scopes, lifecycle objects, Adapters, seal invalidation, migration | `docs/architecture/dataset-lifecycle.md` |
| verification/publication architecture: evidence, baseline, verify/record/publish semantics, CAS, Release | `docs/architecture/verification-publication.md` |
| machine-readable lifecycle contract | `docs/architecture/lifecycle-contract.json` (`pnpm verify:architecture` enforces parity) |
| accepted architecture decisions | `docs/adr/` (start with `0001-dataset-build-transactions.md`) |
| **the input-processing process**: commands, order, check boundaries, review, publication, Git hand-off, Source archive, reporting | `docs/asset-workflow.md` (generated command/protocol table: `docs/workflow-command-reference.md`) |
| dataset modeling rules: Adapter Type Gate, flat Source-object list, anti-omission invariants, reconciliation, traps | `docs/dynamic-dataset-workflow.md` |
| d3 fidelity machine gates, reviewer checklist, feedback protocol | `docs/fidelity-loop-rules.md` (catalog section generated from `scripts/lib/fidelity-rules-catalog.mjs` by `pnpm update:fidelity-rules-doc`) |
| user-reported fidelity defects that landed a machine gate | `docs/fidelity-feedback-casebook.md` (protocol: `docs/fidelity-loop-rules.md` §4) |
| dataset / SSOT field format | `data/schema.md` |
| data-adjacent assets (icon crops, raster annotations) | `data/assets/README.md` |
| Trace product and data model | `docs/trace-specification.zh-CN.md` |
| same-checkout Sessions, workbench, Git transport, recovery | `docs/local-environments.md` |
| output/compare retention and cleanup | `docs/artifact-retention.md` |
| CI checks, ChangeImpact routing, Pages hand-off | `docs/ci-verification.zh-CN.md` |
| Pages runtime data projection | `docs/architecture/runtime-data.md` |
| commit messages | `docs/commit-messages.md` |
| human quickstart and viewer usage | `README.md` |
| historical pipelines and implemented plans | `docs/archive/` (not current rules) |

## Goal and Scope

Turn metric assets (PNG images or UTF-8 text) into complete, auditable data
and usable views. A processed Source ends in "waiting for human review"; the
operator's acceptance is the only closure decision.

Dataset processing follows `docs/asset-workflow.md`. Code, documentation and
review-only tasks use the relevant owner and ChangeImpact checks; they do not
create Builds. A failed gate blocks only the dependent steps: diagnose and
repair in the owning workspace, pause only for a decision that cannot be
inferred safely, and never bypass Source corrections, human acceptance,
freshness, or another Session's ownership.

## Architecture Boundaries

Load `CONTEXT.md` and `docs/architecture/README.md` before changing the
lifecycle, verifiers, generated registration/metadata, baseline or release.
Never present a target command or guarantee as already implemented.

- Three state scopes: `DatasetBuild`, `PublicationBatch`, `ReleaseAttempt`;
  a build-local `FidelityRun` has no canonical-write authority (ADR-0001).
- `verify:*` is read-only, `record:*` writes build-local state, `publish:*` is
  the only canonical mutation, `release:*` acts on a published digest.
  `compat:baseline` is deliberately outside these classes (legacy ledger).
- Git tracks `input/pending/` and `input/processing/` as a shared queue;
  `input/processed/` is an ignored local archive — never force-add it.
- Pure Metric SSOTs: `data/income-statements/<company>.js`,
  `data/revenue-metrics.js`, `data/metric-observations/<source>.json` (catalog
  `data/metric-observations.js` via `pnpm update:metric-catalog`). Sankey View
  Adapters live in `data/datasets/<key>.js`; keep nodes, links, layout, colors
  and geometry out of SSOTs. `data/company-metadata/<company>.js` must be
  complete before a company's first dataset. `data/products.js` is a
  placeholder; never hide product identity in Sankey adapters.
- Income Statement `operatingMetrics` (ARR, retention, customers) stay separate
  from accounting sums; ownership: `data/schema.md`,
  `scripts/lib/operating-metrics.mjs`.
- SSOT `<script>` tags live in `index.html`; Adapters register in the generated
  `data/dataset-manifest.js` (never hand-edited). `pnpm sync:index-datasets`
  repairs both; `verify:ssot` enforces parity.
- Pages projects SSOTs into a light catalog plus versioned JSON details; read
  `docs/architecture/runtime-data.md` before changing it.
- Domain normalization lives in `src/trace-domain.js`; zh data in
  `src/i18n-dictionaries.js`. `src/app/` is ordered classic scripts sharing
  one scope (order in `index.html`, module map in `README.md`); put code in the
  owning module. `verify:app-globals` enforces load order and duplicates.
- A new metric family or SSOT also updates this file, its mirror, and the spec.

## Commands

Install once (render verifiers use Chromium):

    pnpm install --frozen-lockfile && pnpm exec playwright install chromium

| command | purpose |
| --- | --- |
| `pnpm record:workflow -- <action>` | the dataset process: `start`, `continue`, `show`, `review`, `seal`, `feedback`, `refresh`, `archive-list`, `archive`, … (see `docs/asset-workflow.md`) |
| `pnpm publish:datasets -- plan\|commit` | validate a combined candidate and atomically switch the local published tree |
| `pnpm release:git -- prepare\|inspect\|commit\|push` | Git hand-off of published contributions (`prepare --full` adds local browser checks) |
| `pnpm record:transport-review -- <id> --input <json>` | record acceptance of a Git hand-off candidate |
| `pnpm verify:release [-- --online --key <key>]` | CI release gate; `--online` is the HTTP-only post-push production check |
| `pnpm verify:d3 -- <key> [--build <id>] [--language <code>]` | read-only render diagnosis while authoring |
| `pnpm dev` | local review workbench on port 8000 |
| `pnpm check` | fast aggregate gate without rendering (syntax, tests, contracts, SSOT, i18n, metadata); run once per code/doc change |
| `pnpm test` | node:test unit tests |
| `pnpm verify:app` | headless viewer boot and interaction smoke |
| `pnpm verify:architecture` | lifecycle contract, document ownership and drift guards (part of `check`) |
| `pnpm verify:render-regression [-- <keys>]` | read-only render regression against `data/render-baselines.json` |
| `pnpm build:site` / `pnpm verify:site` | build / browser-check the Pages projection |
| `pnpm build:standalone` / `pnpm verify:standalone` | self-contained HTML and its check |
| `pnpm sync:index-datasets` | sync `index.html` SSOT tags and the dataset manifest with disk |
| `pnpm update:fidelity-rules-doc` | regenerate the fidelity rule catalog section |
| `pnpm plan:ci -- --base <sha> --head <sha>` | classify a diff into the CI verification plan |
| `pnpm clean:artifacts [-- --completed]` | report / remove local artifacts after all work completes |
| `pnpm record:build` / `record:intake` / `record:fidelity` / `record:verification` / `verify:closeout` | low-level Build commands used inside `record:workflow`; direct use only for historical Builds (`docs/archive/legacy-direct-edit-workflow.md`) |

CI always runs `pnpm check`, then selects app, Pages, render and standalone
checks by ChangeImpact (unknown impact runs everything).

## Dataset Processing

`docs/asset-workflow.md` is the single owner; do not follow restatements
elsewhere. Its load-bearing points, for orientation only:

- `record:workflow continue` runs every automatic step and stops at "waiting
  for human review"; deliver the review link without opening a browser.
- Single-Source tasks do not run `pnpm check` or browser suites; seal reuses
  the accepted render evidence; Git hand-off leaves browser checks to CI.
- The operator's explicit approval covers review, seal and local publication;
  a push instruction covers a Git candidate that inherits Build acceptance.
- Only the operator's completion signal relocates Sources, within the scope it
  names; `input/processed/` stays local.

Multiple Codex / Claude Code Sessions share this checkout without worktrees;
each works in its own Build workspace with owner and generation
(`docs/local-environments.md`).

## d3-Sankey Fidelity

`docs/fidelity-loop-rules.md` owns the machine fidelity gates (generated from
the rule catalog) and the reviewer checklist; other documents may cite rule IDs
but not restate formulas or thresholds. Fix each user correction; when a
deterministic machine gate could have caught it, add or extend a gate with a
test and log one row in `docs/fidelity-feedback-casebook.md`. Machine evidence
alone is `review-pending`.

## Commit Messages

Follow `docs/commit-messages.md`: lightweight Conventional Commits
(`<type>(<scope>): <summary>`, English lowercase). Dataset adapter, manifest
registration and the tracked queue change ship together; reusable renderer
support goes in a prior `render(engine)` commit.

## Fresh Checkouts and Cloud Agents

The startup script installs dependencies and Chromium; run `pnpm dev` in the
background. Reference images under `input/processed/` are machine-local, so
`verify:d3` fails on a fresh checkout unless the key's reference was restored;
engine-wide changes use `pnpm verify:render-regression`, which skips
similarity for missing references.
`pnpm check`, `pnpm test`, `pnpm verify:app`, `pnpm build:standalone` and
`pnpm verify:standalone` run green on a fresh checkout.
