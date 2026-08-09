# AGENTS.md

Guidance for agents working in this repository. This file routes: each
detailed rule lives in exactly one owning document, and this file gives a
high-level workflow overview plus a one-line summary and pointer per domain.
Keep this file and its Chinese mirror `docs/AGENTS.zh-CN.review.md` updated
together.

## Rule Ownership Map

| rule domain | owning document |
| --- | --- |
| fast-loaded domain and architecture context | `CONTEXT.md`, then `docs/architecture/README.md` |
| target dataset lifecycle: state scopes, lifecycle objects, input-type Adapters, seal invalidation, migration | `docs/architecture/dataset-lifecycle.md` |
| target verification/publication architecture: evidence, baseline, verify/record/publish semantics, CAS, Release | `docs/architecture/verification-publication.md` |
| machine-readable lifecycle protocol/state/Adapter contract | `docs/architecture/lifecycle-contract.json` (`pnpm verify:architecture` enforces parity) |
| accepted architecture decisions | `docs/adr/` (start with `docs/adr/0001-dataset-build-transactions.md`) |
| dynamic dataset workflow: nine-step current pipeline, pre-intake Adapter Type Gate, Source → Inventory → SSOT → Adapter coverage, execution/delegation, traps, final checklist, reporting | `docs/dynamic-dataset-workflow.md` |
| d3 fidelity: canonical numbered rules, preflight measurement, three-stage sweep state machine, automatic/manual evidence, acceptance conditions | `docs/fidelity-loop-rules.md` (its rule-catalog section is generated); rule-semantics SSOT: `scripts/lib/fidelity-rules-catalog.mjs` + derived contract `scripts/lib/fidelity-rule-contract.mjs`; regenerate with `pnpm update:fidelity-rules-doc` (`pnpm verify:architecture` enforces freshness and parity) |
| historical user-feedback cases: root causes, current defenses, recurrence-upgrade paths (cross-checkout recurrence memory) | `docs/fidelity-feedback-casebook.md` (registration/consumption protocol owned by `docs/fidelity-loop-rules.md` §5) |
| dataset / SSOT field-level format | `data/schema.md` |
| commit message convention | `docs/commit-messages.md` |
| data-adjacent asset layout (icon crops, raster annotations) | `data/assets/README.md` |
| Trace product and data model | `docs/trace-specification.zh-CN.md` |
| human quickstart, viewer usage | `README.md` |
| CI check purpose, ChangeImpact routing, performance baseline, Pages artifact handoff | `docs/ci-verification.zh-CN.md` |

## Goal

Turn income-statement reference images from `input/pending/` into stable
Sankey datasets and reusable icon assets, then verify them through the
d3-sankey fidelity loop.

## Architecture Boundaries

Load `CONTEXT.md` and `docs/architecture/README.md` before changing the dataset
lifecycle, verifier orchestration, generated registration/metadata, baseline,
standalone release, or their docs. The architecture directory distinguishes
the current Implementation from the accepted target. Until a migration
milestone is implemented, the commands and operational steps below remain
authoritative; never present a target command or atomicity guarantee as if it
already exists.

- The target separates three state scopes: `DatasetBuild`,
  `PublicationBatch`, and `ReleaseAttempt`. A build-local `FidelityRun`
  produces evidence but has no canonical-write authority. The governing
  decision is `docs/adr/0001-dataset-build-transactions.md`.
- In the command vocabulary, `verify:*` is read-only, `record:*` writes
  build-local evidence or staging, `publish:*` is the only canonical
  mutation, and `release:*` acts on a published digest. Implemented
  `verify:*` / `record:*` commands satisfy that contract; `compat:baseline`
  is deliberately named outside the classes because it mutates the canonical
  baseline ledger until M4 Publication replaces it, and `publish:*` /
  `release:*` remain unimplemented target vocabulary.
- Git tracks Source files in `input/pending/` and `input/processing/` so the
  shared queue and active claims are visible across project checkouts.
  `input/processed/` is an ignored, machine-local archive; never force-add its
  contents. Git visibility is transport, not lifecycle authority.

- `data/income-statements/<company-key>.js` (income-statement family,
  per-company files) and `data/revenue-metrics.js` (revenue family) are the
  pure Metric SSOTs; `data/datasets/<dataset-key>.js` is the Sankey View
  Adapter layer — a stable path the viewer, standalone builder, and
  verifiers rely on. Keep Sankey nodes, links, layout, render, SVG, colors,
  and pixel geometry out of the SSOTs.
- `data/company-metadata/<company-key>.js` is the company-profile SSOT (one
 file per company; the file name is the metadata `key`). It powers the
 Table view and must be complete before a company's first dataset is
 registered.
- Per-company SSOT files must be registered as `<script>` tags in
 `index.html`; dataset adapters register in the generated
 `data/dataset-manifest.js` (never hand-edited) and are progressively
 loaded on demand by the viewer through `src/dataset-registry.js` +
 `src/app/dataset-loader.js`. `verify:ssot` enforces disk ↔ registration
 parity for both surfaces and `pnpm sync:index-datasets` repairs them.
- `data/products.js` is an empty placeholder for a future Product SSOT (not
  verifier-checked). Do not hide product identity or ownership history inside
  Sankey adapters.
- Keep Trace domain normalization in `src/trace-domain.js`; zh translation
 data lives in `src/i18n-dictionaries.js` (loads before `src/i18n.js`,
 which keeps the language-neutral rule pipeline). The viewer app is
 split across `src/app/` as ordered classic scripts sharing one top-level
 scope (load order lives in `index.html`): `dom`, `util`, `dataset-loader`,
 `hotkeys`, `i18n-runtime`, `state`, `selectors`, `financial`,
 `chart-theme` form the base layers; `shell`, `controls`, `company-panel`,
 `period-panel`, `tables`, `trend`, `comparison-zoom`,
 `comparison-metric-trend`, `sankey`, `exports` own one UI concern each;
 `main.js` wires global events and boots last. Put new viewer code in the
 owning module (module map: `README.md` §How it's built). Load-time code
 may only reference earlier scripts, runtime calls may go either way —
 `pnpm check` enforces this and cross-file duplicate declarations
 statically (`verify:app-globals`).
- When adding a metric family or SSOT, backfill this file and
  `docs/trace-specification.zh-CN.md`.

## Commands

Install once; the d3/standalone verifiers render in Chromium:

    pnpm install --frozen-lockfile && pnpm exec playwright install chromium

| command | purpose |
| --- | --- |
| `pnpm dev` | zero-dependency local static server on port 8000 |
| `pnpm plan:ci -- --base <sha> --head <sha>` | classify a Git diff into the conservative CI verification plan; missing/unknown executable impact falls back to the full browser suite |
| `pnpm check` | fast aggregate gate: repo-wide JS syntax, unit tests, pending guard, architecture/app-global contracts, manifest and render-baseline structure freshness, SSOT parity, i18n coverage, metadata freshness (seconds, no rendering); active files in `input/processing/` do not fail this global gate; reproducible on fresh checkouts and run by CI |
| `pnpm test` | node:test unit tests in `tests/` — Source claim/relocation, engine layout math + label passes, trace-domain parsing/FX, i18n translation rules, png-diff metrics, script-source parsing, dataset registry |
| `pnpm verify:app` | headless boot + interaction smoke of the modular viewer (`src/app/*`): module count, persisted-prefs boot, hash routing, comparison zoom + metric trend, revenue trend, mobile viewport |
| `pnpm verify:app-globals` | static gate for the shared-top-level-scope contract: cross-file duplicate declarations and load-time references to later scripts (also part of `pnpm check`) |
| `pnpm verify:architecture` | enforce lifecycle protocol/state/Adapter parity, command mutation semantics, architecture routes, and local context-document links (also part of `pnpm check`) |
| `pnpm check:pending [-- --file input/pending/<file>.png --key <final-key>]` | pending duplicate / active-processing claim / processed and key-collision guard; use `--file` for one Build and `--key` after naming, omit both only to audit the shared queue |
| `pnpm record:intake -- <pending.png> --key <key> --adapter <kind> --signal <signal> [--signal <signal> ...] [--availability <policy>]` | enforce the full-Source Adapter signature, record `source-classification/v1`, then no-clobber claim the Source at `input/processing/<key>.png`; this is not Publication |
| `pnpm record:build -- prepare-review <build-id> --input <review-input.json>` | validate and record Source Coverage, Object Inventory, authored-value reconciliation, Plan v5, and Packet v4; advance to `AUTHORED` and return a `reviewToken`, without human acceptance |
| `pnpm record:verification -- <build-id> [--json]` | run the non-render dataset consistency profile and record Build-bound `dataset-verification/v1` evidence; pass its returned reference to `finish` |
| `pnpm record:fidelity -- <key> --focus <stage-focus> [--language <code> ...] --build <build-id>` | record durable, Build-bound automatic evidence as `evidence-ready`; `--focus` must be a canonical stage focus (`structure-sweep`, `text-sweep`, `polish-l10n-sweep`, `closeout-refresh`); `--language` repeats to render several locales in one command (one run per locale). Without `--build`, explicit-focus output is legacy compatibility evidence only and cannot close a Build |
| `pnpm record:build -- finish <build-id> --review <review.json>` | consume the `reviewToken` (legacy `packetDigest` is accepted), automatic evidence, human attestation, region/risk/feedback decisions, and Interface Matrix; only an accepted `FidelityResult` advances to `CLOSED` |
| `pnpm record:build -- stage-baseline <build-id> --input <baseline.json>` | record a build-local, `future-regression-only` baseline stage; Revenue Metric records an explicit `notApplicable` disposition |
| `pnpm record:build -- seal <build-id>` | recompute artifact freshness, rerun the Adapter final profile (non-render consistency plus render hard gates for every required locale in a single `verify:d3` run for Income Statement), and record `SEALED` only for an accepted, closed, baseline-staged Build with fresh exact digests; does not publish canonical data |
| `pnpm record:build -- inspect <build-id> [--json]` | read historical/effective state, freshness, review status, Task information, and Loop Fidelity Summary without mutation |
| `pnpm verify:closeout -- <build-id> [--json]` | read-only close-out gate: requires historical and effective `SEALED`, fresh inputs, and an accepted human review |
| `pnpm sync:index-datasets` | syncs every data registration surface with disk: `index.html` SSOT `<script>` tags (income statements, company metadata) and the generated dataset manifest (`--check` reports drift) |
| `pnpm update:dataset-manifest` / `pnpm verify:dataset-manifest` | regenerate / freshness-check `data/dataset-manifest.js` (dataset registration SSOT) |
| `pnpm update:fidelity-rules-doc [-- --check]` | regenerate (or freshness-check) the generated rule-catalog section of `docs/fidelity-loop-rules.md` from `scripts/lib/fidelity-rules-catalog.mjs` |
| `pnpm verify:dataset -- <key> [--skip-render]` | read-only aggregate diagnostic: syntax, SSOT, strict i18n, metadata, then a read-only d3 render per language |
| `pnpm verify:ssot` | SSOT ↔ dataset parity, registration parity, and currency/unit + FX coverage (global) |
| `pnpm verify:i18n -- [--strict] [keys]` | i18n overlay coverage |
| `pnpm verify:d3 -- <key> [--build <build-id>] [--focus <dir>] [--keep] [--language <code>]` | read-only d3 diagnostic + automatic hard gates; `--build` loads the fresh Plan/node-face policy (required for typed floor exceptions) without archiving or advancing evidence lineage |
| `pnpm verify:render-regression [-- <keys>]` | read-only batch render regression against `data/render-baselines.json` (reference images are local-only, so machines without them run render hard gates only); incremental by default via a machine-local fingerprint cache under `output/render-regression/` — unchanged keys are skipped and reported, explicit keys and `--update` always render, `--no-cache` forces a full render, CI always runs cold |
| `pnpm compat:baseline -- <key> [...]` | canonical baseline ledger mutation, deliberately named outside the verify/record/publish/release classes; M4 Publication has not replaced it, and it cannot prove the producing Build correct |
| `pnpm setup:git-hooks` | enable repository-managed post-commit refresh and pre-push enforcement for Git-time dataset metadata; refuses to overwrite a custom `core.hooksPath` |
| `pnpm update:dataset-file-metadata` | regenerate `data/dataset-file-metadata.js` from git author times; the managed post-commit hook runs this after a Dataset/revenue commit, and the result must be amended or committed before push |
| `pnpm verify:dataset-file-metadata` | generated metadata is current in the working tree; the managed pre-push hook additionally requires the current result to be committed |
| `pnpm build:site` / `pnpm verify:site` | build the optimized Pages runtime projection / browser-check its deferred bundles, on-demand Adapter budget, lazy Chart runtime, and company-switch path |
| `pnpm build:standalone` | build the self-contained HTML without mutating tracked metadata; inlines all dataset adapters |
| `pnpm verify:standalone` | standalone artifact needs no sibling files |
| `sh scripts/clean-compare.sh` | clean legacy top-level scratch files only; d3 diagnostic/evidence runs own and clean their private `compare/runs/` directories, so never use global deletion during concurrent runs |

CI (`.github/workflows/ci.yml`) always runs `pnpm check`, then uses the
ChangeImpact plan to select app, Pages, full/changed-key render,
and standalone checks. Unknown executable impact falls back to the complete
suite. On `main`, the exact verified `_site` artifact is handed to the Pages
deploy job without a second checkout/install/build. The plain-language
purpose, mechanism, blind spots, and trigger matrix for every check live in
`docs/ci-verification.zh-CN.md`.

## Workflow

`docs/dynamic-dataset-workflow.md` owns the current nine-step pipeline, Type
Gate, Source Coverage, execution/delegation, traps, final checklist, and
reporting. Load it before pending work and before the final response. M0–M5
target migration remains owned by `docs/architecture/README.md`; never present
target state as current. Five-phase summary:

1. Guard, classify, intake — inspect the complete Source and pass the
   signal-based Adapter Type Gate before `record:intake`; ambiguous or
   unrecognized input stops before the no-clobber processing claim.
2. Source coverage and preparation — record complete Source Coverage and
   `ObjectInventory`, explicitly including Other-like objects (a value-bearing
   Other is a data metric and keeps a visible bar — T22), smallest
   non-zero values, face intent, and casebook hits; only then parallelize
   metadata/SSOT, preflight measurement, and optional icons. A confirmed
   Source unit or numeric typo may proceed only through the typed,
   user-directed, authoritative-source-bound correction recorded by Source
   Coverage; the original literal remains auditable. A zero-looking literal
   uses precision recovery when the authoritative value is inside its rounding
   interval, and only a user-directed `numeric-typo` correction when outside.
3. Adapter & i18n — reconcile Source → Inventory → SSOT → Adapter/data,
   author the applicable view, localize, and register; a missing icon never
   removes a semantic object.
4. Verify and review — `record:build prepare-review`, `record:verification`,
   per-locale `record:fidelity`, human attestation via `record:build finish`,
   then `stage-baseline` and `seal`.
5. Close out — only an explicit operator review-completion signal relocates
   confirmed Sources to `input/processed/` (owning rule:
   `docs/dynamic-dataset-workflow.md` §Operator Review-Completion Signal);
   the confirmed move is committed as a removal from the tracked processing
   queue while the ignored processed PNG stays machine-local;
   `verify:closeout` is the read-only audit per that document's close-out
   requirement policy; finish with `pnpm check` and commit per
   `docs/commit-messages.md`.

## d3-Sankey Fidelity Loop

`docs/fidelity-loop-rules.md` is the single source of truth for fidelity-loop
behavior. Load it before running or reporting any loop. It owns each canonical
G/B/R/L/T/A/Z/I definition exactly once; secondary docs may invoke IDs but may
not restate their formulas or thresholds. Treat every user correction as a
process-improvement signal: fix the current problem, classify it as a missing
rule, execution gap, or ambiguous rule, then add an automated/required check
or a dataset-specific evidence-bound decision. Record durable candidates with
Build-bound `record:fidelity`; plain `verify:d3` remains diagnostic and never
creates an evidence run. Machine evidence alone must be reported as
`review-pending`, never as accepted or converged.

## Commit Messages

Follow `docs/commit-messages.md`: lightweight Conventional Commits
(`<type>(<scope>): <summary>`, English lowercase summary). It owns the type
and scope tables and the rule that a new dataset's adapter, manifest
registration, and relevant tracked queue change ship coherently, while the
processed PNG remains local-only. Reusable renderer support is split into a
prior `render(engine)` commit.

## Cursor Cloud specific instructions

The environment is a static site plus Node tooling: dependencies
(`pnpm install --frozen-lockfile`) and the pinned Playwright Chromium
(`pnpm exec playwright install chromium`) are refreshed by the startup update
script, so you do not need to reinstall them. Non-obvious caveats for this VM:

- Run the app with `pnpm dev` (zero-dependency static server on
  `http://127.0.0.1:8000`). It is a long-running process — start it in a
  background/tmux session, not a blocking foreground call.
- Reference images under `input/processed/` are Git-ignored and stay in each
  author's local archive. A fresh checkout has no such PNGs, so
  `pnpm verify:d3 -- <key>` fails with ENOENT unless that key's reference was
  restored locally.
  For engine-wide changes use `pnpm verify:render-regression` instead: it
  renders every registered dataset, applies the hard gates, and skips
  similarity scoring for keys without a local reference image.
- `pnpm check`, `pnpm test`, `pnpm verify:app`, `pnpm build:standalone`, and
  `pnpm verify:standalone` run green on a fresh checkout. `pnpm verify:d3`
  additionally requires the selected reference in the machine-local archive.
