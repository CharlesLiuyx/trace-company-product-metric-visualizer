# AGENTS.md

Guidance for agents working in this repository. This file routes: each
detailed rule lives in exactly one owning document, and this file gives a
high-level workflow overview plus a one-line summary and pointer per domain.
Keep this file and its Chinese mirror `docs/AGENTS.zh-CN.review.md` updated
together.

## Rule Ownership Map

| rule domain | owning document |
| --- | --- |
| dynamic dataset workflow: pipeline steps, execution model (parallel groups, agent routing), input-type object taxonomy, operational traps, pre-response verification checklist, reporting | `docs/dynamic-dataset-workflow.md` |
| d3 fidelity loop: hard gates, diff metrics, iteration, icon crop/vector subloops, localization layout checks, Task info, red-box images, Loop Fidelity Summary | `docs/fidelity-loop-rules.md` |
| dataset / SSOT field-level format | `data/schema.md` |
| commit message convention | `docs/commit-messages.md` |
| data-adjacent asset layout (icon crops, raster annotations) | `data/assets/README.md` |
| Trace product and data model | `docs/trace-specification.zh-CN.md` |
| human quickstart, viewer usage | `README.md` |

## Goal

Turn income-statement reference images from `input/pending/` into stable
Sankey datasets and reusable icon assets, then verify them through the
d3-sankey fidelity loop.

## Architecture Boundaries

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
 loaded by the viewer through `src/dataset-registry.js` +
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
| `pnpm check` | fast aggregate gate: repo-wide JS syntax sweep, unit tests, then pending guard, app-globals static gate, dataset-manifest freshness, SSOT parity, i18n coverage, metadata freshness (seconds, no rendering); reproducible — green on any fresh checkout, and CI runs it on every push |
| `pnpm test` | node:test unit tests in `tests/` — engine layout math + label passes, trace-domain parsing/FX, i18n translation rules, png-diff metrics, script-source parsing, dataset registry |
| `pnpm verify:app` | headless boot + interaction smoke of the modular viewer (`src/app/*`): module count, persisted-prefs boot, hash routing, comparison zoom + metric trend, revenue trend, mobile viewport |
| `pnpm verify:app-globals` | static gate for the shared-top-level-scope contract: cross-file duplicate declarations and load-time references to later scripts (also part of `pnpm check`) |
| `pnpm check:pending` | pending-image duplicate / key-collision guard |
| `pnpm sync:index-datasets` | syncs every data registration surface with disk: `index.html` SSOT `<script>` tags (income statements, company metadata) and the generated dataset manifest (`--check` reports drift) |
| `pnpm update:dataset-manifest` / `pnpm verify:dataset-manifest` | regenerate / freshness-check `data/dataset-manifest.js` (dataset registration SSOT) |
| `pnpm verify:dataset -- <key> [--skip-render]` | aggregate per-dataset gate: syntax, SSOT, strict i18n, metadata, then a d3 render per language |
| `pnpm verify:ssot` | SSOT ↔ dataset parity, registration parity, and currency/unit + FX coverage (global) |
| `pnpm verify:i18n -- [--strict] [keys]` | i18n overlay coverage |
| `pnpm verify:d3 -- <key> [--focus <dir>] [--keep] [--language <code>] [--round <n>]` | one d3 render + auto hard gates; archives each round to `output/compare/<key>/` |
| `pnpm verify:render-regression [-- <keys>] [--update]` | batch-renders every registered dataset through the purity/size hard gates and fails similarity drops beyond tolerance vs `data/render-baselines.json`; `--update` re-records baselines (reference images are local-only, so machines without `input/processed/` gate hard-gates only) |
| `pnpm update:dataset-file-metadata` | regenerate `data/dataset-file-metadata.js` from git author times (rerun + commit after committing a new/edited dataset) |
| `pnpm verify:dataset-file-metadata` | generated metadata is current |
| `pnpm build:standalone` | build the self-contained HTML (refreshes metadata first; inlines all dataset adapters) |
| `pnpm verify:standalone` | standalone artifact needs no sibling files |
| `sh scripts/clean-compare.sh` | clean the scratch `compare/` workspace |

CI (`.github/workflows/ci.yml`) runs `pnpm check`, `verify:app`, a
`verify:d3` smoke render, `verify:render-regression`, and the standalone
build + verification on every push to `main` and every pull request.

## Workflow

Turning a pending image into a verified dataset runs in five phases. The full
numbered pipeline, operational traps, pre-response verification checklist, and
reporting requirements live in `docs/dynamic-dataset-workflow.md` — load it before
processing a pending image.

1. Intake & guard — run `pnpm check:pending`, then assign the
   `<company>-<period>` key and move the PNG to
   `input/processed/<dataset-key>.png`.
2. Source inventory & data SSOTs — coarse whole-image pass first: classify
   the input type against the workflow doc's Object Taxonomy (incl. the
   revenue-metric data-only branch) and inventory every object, then, in
   parallel tracks, company metadata (first dataset for a company), the
   `data/income-statements/<company-key>.js` record, and the optional icon
   crop/vector subloop.
3. Adapter & i18n — author `data/datasets/<dataset-key>.js` measured
   object-by-object against the source image (fine pass over the phase 2
   inventory), add `i18n.<language>` overlays, and register it via
   `pnpm sync:index-datasets` (regenerates the dataset manifest).
4. Verify — run `pnpm verify:dataset -- <dataset-key>`, then the manual d3
   fidelity loop (`docs/fidelity-loop-rules.md`), then record the render
   baseline with `pnpm verify:render-regression -- --update`.
5. Close out — `pnpm check` green, `input/pending/` back to only `.gitkeep`,
   then commit per `docs/commit-messages.md`.

Before every final response, satisfy the pre-response Verification Checklist
and Reporting requirements in `docs/dynamic-dataset-workflow.md`.

## d3-Sankey Fidelity Loop

`docs/fidelity-loop-rules.md` is the single source of truth for fidelity-loop
behavior. Load it before running or reporting any loop. Treat every user
fidelity correction as a process-improvement signal: generalize the lesson
into that rules file or record a dataset-specific exception in the loop Task
information, per its 人工反馈沉淀 closure loop. Each manual round maintains
current Task information and, while attention areas stay open, produces the
red-box reference image for the next round.

## Commit Messages

Follow `docs/commit-messages.md`: lightweight Conventional Commits
(`<type>(<scope>): <summary>`, English lowercase summary). It owns the type
and scope tables and the rule that a new dataset's processed PNG, adapter,
and manifest registration ship in one `data(<key>)` commit, with reusable
renderer support split into a prior `render(engine)` commit.
