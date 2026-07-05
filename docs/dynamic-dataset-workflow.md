# Dynamic Dataset Workflow

Owning document for the dynamic dataset workflow — the end-to-end process for
turning a pending image into a verified dataset. It is *dynamic*, not a frozen
checklist: the fidelity loop folds every user correction back into the rules
(`docs/fidelity-loop-rules.md` 人工反馈沉淀), so these steps keep evolving. It
holds the numbered pipeline, operational traps, the pre-response verification
checklist, and reporting requirements. `AGENTS.md` §Workflow gives the
high-level phase overview and points here; load it before processing a pending
image in `input/pending/`.

Related owning docs: field-level dataset/SSOT format is `data/schema.md`, the
d3 fidelity loop is `docs/fidelity-loop-rules.md`, commit conventions are
`docs/commit-messages.md`, and data-adjacent asset layout is
`data/assets/README.md`.

## New Dataset Pipeline

1. Guard: run `pnpm check:pending` (ignore `.gitkeep`). An exact content
   match in `input/processed/` or a candidate-key collision is a stop
   condition — report it and do not move, create, update, crop, or verify
   anything for that image. If your final stable key differs from the
   script's candidate key, re-check the final key against
   `input/processed/`, `data/datasets/`, `data/income-statements/`, and
   `index.html` before continuing.
2. Key: lowercase kebab case, company plus period, e.g. `nvidia-q4-fy26`.
3. Image: move the source PNG to `input/processed/<dataset-key>.png` and set
   `meta.referenceImage` to it with the exact source dimensions.
4. Company (first dataset for a company): create
   `data/company-metadata/<company-key>.js` — description, sector, industry,
   founded, headquarters, fiscal year end, website, ticker/exchange, market
   cap with as-of/source, and source URLs — plus localized profile fields
   for every non-default language, and register it in `index.html`. Field
   details: `data/schema.md`.
5. SSOT: add the record to `data/income-statements/<company-key>.js`
   (create the file and register it in `index.html` for a new company) —
   comparable reported totals, line items, notes, currency, unit, period,
   and source image only.
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

## Verification Checklist

Always, before the final response:

- `pnpm check` passes (repo-wide JS syntax sweep, pending guard, SSOT
  parity, i18n coverage, dataset-file-metadata freshness). The bar is a
  green `pnpm check` on a full local working copy; two failures are expected
  on any fresh checkout — see Environment Caveats.
- `input/pending/` contains only `.gitkeep`, or a stop condition is reported.

### Environment Caveats (fresh checkouts, cloud, CI)

`pnpm check` is only fully green on a working copy that keeps every
local-only file and its original modification times. On any fresh
clone/checkout — cloud agent, CI, or a new local clone — exactly two
failures are expected and are not regressions:

- `verify:ssot` reports `source image does not exist` for datasets whose
  source screenshots are intentionally local-only and never committed
  (currently the YipitData-sourced ARR revenue-metric datasets). Never
  fabricate or commit these images to silence the check.
- `verify:dataset-file-metadata` reports stale because
  `data/dataset-file-metadata.js` records absolute file mtimes and git
  resets them to checkout time on clone. Never run
  `pnpm update:dataset-file-metadata` and commit it from a fresh checkout —
  it would overwrite the meaningful local mtimes.

In these environments treat only those two as benign, still act on any other
`check` failure, and rely on the targeted verifiers (`pnpm test`,
`pnpm verify:dataset`, `pnpm verify:d3`, `pnpm verify:app`, `pnpm verify:i18n`,
`pnpm verify:standalone`) as the real gate.

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
