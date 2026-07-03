# AGENTS.md

Guidance for agents working in this repository. This file routes: each
detailed rule lives in exactly one owning document, and this file gives the
workflow plus a one-line summary and pointer. Keep this file and its Chinese
mirror `docs/AGENTS.zh-CN.review.md` updated together.

## Rule Ownership Map

| rule domain | owning document |
| --- | --- |
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

- `data/income-statements.js` (income-statement family) and
  `data/revenue-metrics.js` (revenue family) are the pure Metric SSOTs;
  `data/datasets/<dataset-key>.js` is the Sankey View Adapter layer — a
  stable path the viewer, standalone builder, and verifiers rely on. Keep
  Sankey nodes, links, layout, render, SVG, colors, and pixel geometry out of
  the SSOTs.
- `data/company-metadata.js` is the company-profile SSOT. It powers the Table
  view and must be complete before a company's first dataset is registered.
- `data/products.js` is an empty placeholder for a future Product SSOT (not
  verifier-checked). Do not hide product identity or ownership history inside
  Sankey adapters.
- Keep Trace domain normalization in `src/trace-domain.js`. The viewer app is
  split across `src/app/` as ordered classic scripts sharing one top-level
  scope (load order lives in `index.html`): `dom`, `util`, `hotkeys`,
  `i18n-runtime`, `state`, `selectors`, `financial` form the base layers;
  `shell`, `controls`,
  `company-panel`, `period-panel`, `tables`, `trend`, `comparison-zoom`,
  `comparison-metric-trend`, `sankey`, `exports` own one UI concern each;
  `main.js` wires global events and boots last. Put new viewer code in the
  owning module (module map: `README.md` §How it's built); load-time code may
  only reference earlier scripts, runtime calls may go either way.
- When adding a metric family or SSOT, backfill this file and
  `docs/trace-specification.zh-CN.md`.

## Commands

Install once; the d3/standalone verifiers render in Chromium:

    pnpm install --frozen-lockfile && pnpm exec playwright install chromium

| command | purpose |
| --- | --- |
| `pnpm dev` | zero-dependency local static server on port 8000 |
| `pnpm check` | fast aggregate gate: repo-wide JS syntax sweep, then pending guard, SSOT parity, i18n coverage, metadata freshness (sub-second, no rendering) |
| `pnpm verify:app` | headless boot + interaction smoke of the modular viewer (`src/app/*`): module count, persisted-prefs boot, hash routing, comparison zoom + metric trend, revenue trend, mobile viewport |
| `pnpm check:pending` | pending-image duplicate / key-collision guard |
| `pnpm verify:dataset -- <key> [--skip-render]` | aggregate per-dataset gate: syntax, SSOT, strict i18n, metadata, then a d3 render per language |
| `pnpm verify:ssot` | SSOT ↔ dataset parity, registration parity, and currency/unit + FX coverage (global) |
| `pnpm verify:i18n -- [--strict] [keys]` | i18n overlay coverage |
| `pnpm verify:d3 -- <key> [--focus <dir>] [--keep] [--language <code>] [--round <n>]` | one d3 render + auto hard gates; archives each round to `output/compare/<key>/` |
| `pnpm update:dataset-file-metadata` | regenerate `data/dataset-file-metadata.js` |
| `pnpm verify:dataset-file-metadata` | generated metadata is current |
| `pnpm build:standalone` | build the self-contained HTML (refreshes metadata first) |
| `pnpm verify:standalone` | standalone artifact needs no sibling files |
| `sh scripts/clean-compare.sh` | clean the scratch `compare/` workspace |

## New Dataset Pipeline

1. Guard: run `pnpm check:pending` (ignore `.gitkeep`). An exact content
   match in `input/processed/` or a candidate-key collision is a stop
   condition — report it and do not move, create, update, crop, or verify
   anything for that image. If your final stable key differs from the
   script's candidate key, re-check the final key against
   `input/processed/`, `data/datasets/`, `data/income-statements.js`, and
   `index.html` before continuing.
2. Key: lowercase kebab case, company plus period, e.g. `nvidia-q4-fy26`.
3. Image: move the source PNG to `input/processed/<dataset-key>.png` and set
   `meta.referenceImage` to it with the exact source dimensions.
4. Company (first dataset for a company): add the profile to
   `data/company-metadata.js` — description, sector, industry, founded,
   headquarters, fiscal year end, website, ticker/exchange, market cap with
   as-of/source, and source URLs — plus localized profile fields for every
   non-default language. Field details: `data/schema.md`.
5. SSOT: add the `data/income-statements.js` record — comparable reported
   totals, line items, notes, currency, unit, period, and source image only.
6. Adapter: author `data/datasets/<dataset-key>.js` per `data/schema.md` as a
   high-fidelity adapter with explicit `nodes`, `links`, `layout.nodes`, and
   `layout.labels` tuned against the source image. Keep each semantic label
   unit (name, value, notes, margin, Y/Y) grouped under one node/label intent
   before splitting into blocks or lines; preserve source values and notes;
   keep costs positive (`type: 'cost'` renders parenthesized); treat
   publisher watermarks, creator branding, URLs, and attribution blocks as
   intentional skipped residuals, not render targets; set `meta.logoSvg` when
   the source shows a vector-representable company logo.
7. Icons (when the source shows company or business/segment icons): author
   `input/icon-crop-specs/<dataset-key>.json` and run
   `python3 scripts/extract_icon_crops.py --spec <that file>`; it removes the
   solid crop background and writes transparent reference crops plus
   validation sheets and `crop-report.json` under
   `data/assets/icon-references/<company>/`. Accept a crop only when the
   subject is complete, visually centered, and free of unrelated content;
   re-crop until that holds and record acceptance in `model-validation.md`.
   Extract every semantically relevant cluster (skip watermarks, attribution,
   and icon-less segments such as "Others"). Reuse existing SVG/vector assets
   when the source icon is materially similar; use `src/icons.js` Lucide
   icons for generic semantics. Prefer vector conversion; raster embedding is
   allowed only for validated clusters written through `runtimeOutputDir`.
   Crop/vector iteration and raster whitelist rules:
   `docs/fidelity-loop-rules.md`; folder layout: `data/assets/README.md`.
8. i18n: English is canonical. Add `i18n.<language>` overlays — never
   parallel dataset files — for every non-default language in
   `window.SANKEY_I18N.languageCodes`, covering dataset `name`, `meta`
   fields, node labels/notes, and every fixed `layout.labels` or annotation
   line that changes in translation, plus the matching SSOT labels/notes and
   company profile. Overlays are display-only: never change values, links,
   node geometry, financial totals, source images, or verification semantics.
9. Register: add the `<script>` tag in `index.html` after dependencies and
   after any dataset it reuses. Declare untranslated sub-brand annotation
   words in the dataset's `i18n.preservedAnnotationText` (see Traps).
10. Run `pnpm verify:dataset -- <dataset-key>`.
11. Run the manual fidelity loop per `docs/fidelity-loop-rules.md`, including
    a localization layout round per non-default language.
12. Leave `input/pending/` empty except `.gitkeep`.

## Traps and Hard Constraints

- The auto hard gates (11 items: engine-output purity, canvas size, font,
  no-raster rules, label-node spacing, SSOT/i18n consistency) are enumerated
  only in `docs/fidelity-loop-rules.md` §自动硬门槛 — read them before tuning
  layout, not after a failed run.
- Label-node spacing targets 5px; a rendered bbox gap under 4px or a short
  auxiliary column center offset over 4px is an automatic hard fail. Details
  and the bbox audit procedure: `docs/fidelity-loop-rules.md`.
- `verify:i18n --strict` proves overlay coverage, not visual validity. For
  every non-default language, render with `verify:d3 --language <code>` and
  inspect text bounds (`getBBox()` or equivalent) for mixed-language
  leftovers, malformed acronyms/punctuation, overlap, and out-of-canvas text.
  High-risk strings (`R&D`, `SG&A`, ampersand labels, money suffixes):
  `docs/fidelity-loop-rules.md` §本地化布局.
- `annotationsSvg` brand text: whole segments matching the company's name,
  legal name, or alias words are exempted automatically from i18n fallback
  checks; other intentionally untranslated words (sub-brands like `aws`)
  must be declared in the dataset's `i18n.preservedAnnotationText`. Do not
  extend the frozen legacy list in `scripts/verify-i18n.mjs`.
- Brand and product terms that stay untranslated everywhere (YouTube,
  iPhone, `Microsoft 365`…) are declared once as identity mappings in the
  `EXACT_ZH` dictionary (`src/i18n.js`); `verify:i18n` treats an
  identity-mapped term as translated on every path — labels, notes, layout
  lines, and annotations.
- Registration parity is enforced by `verify:ssot`: every file in
  `data/datasets/` must be registered in `index.html` unless listed in
  `UNREGISTERED_DATASET_SCRIPTS` (`scripts/script-sources.mjs`).
- Crops under `data/assets/icon-references/` are reference/conversion assets
  only and must never be referenced from d3 runtime output; runtime rasters
  live under `data/assets/raster-annotations/<company>/`.
- Never rename a processed image after its dataset key is assigned.
- A shareable final HTML artifact must be `pnpm build:standalone` output:
  fully self-contained, no sibling CSS/JS/font/data/PNG files at runtime.

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
and `index.html` registration ship in one `data(<key>)` commit, with reusable
renderer support split into a prior `render(engine)` commit.

## Verification Checklist

Always, before the final response:

- `pnpm check` passes (repo-wide JS syntax sweep, pending guard, SSOT
  parity, i18n coverage, dataset-file-metadata freshness).
- `input/pending/` contains only `.gitkeep`, or a stop condition is reported.

For viewer changes (`src/app/`, `index.html` script order, `src/app.css`):

- `pnpm verify:app` passes — it is the load-order and cross-module wiring
  regression gate for the shared-top-level-scope module split.

For a new or materially changed dataset:

- `pnpm verify:dataset -- <dataset-key>` passes (syntax, SSOT, strict i18n,
  metadata, and a d3 render per language).
- The manual fidelity loop ran per `docs/fidelity-loop-rules.md`, with
  current Task information and a red-box reference image or closure note.
- Per non-default language, the rendered SVG was visually inspected — the
  aggregate command does not replace this step.

If icon assets were extracted: the crop script passes, `crop-report.json`
shows every crop `passes: true`, validation sheets were reviewed,
`model-validation.md` records acceptance, and every relevant cluster is
extracted or documented as skipped.

If a standalone artifact is requested: `pnpm build:standalone` then
`pnpm verify:standalone` pass.

## Reporting

In the final response, include:

- Files changed, and whether the pure data SSOTs were updated.
- Icon assets extracted, and whether all relevant clusters were accounted for.
- For dataset or renderer changes: the compact Loop Fidelity Summary, latest
  Task information, and red-box reference image status required by
  `docs/fidelity-loop-rules.md` — or why no loop was run.
- Whether user-feedback lessons changed `docs/fidelity-loop-rules.md` or were
  recorded as dataset-specific exceptions.
- Any commands that could not be run.
