# Trace (Company & Product Metric Visualizer)

Trace is a small, reusable engine for visualizing company and product metrics.
The current dataset catalog focuses on income statements rendered as polished
Sankey flow diagrams in the style of the NVIDIA "Q1 FY27 Income Statement"
infographic. Green = value retained, red = costs, teal = revenue collection.

Drop in a new company's numbers and you get the same chart.

![what it makes](docs/preview.png)

## Run it

It's a static site for development and local preview. Either:

```bash
# from the project root (zero-dependency static server, no-store caching)
pnpm dev
# then open http://127.0.0.1:8000
```

…or just **double-click `index.html`** — d3 and d3-sankey are vendored locally
in `vendor/`, so it works offline as long as the repository files are present.

Before committing, `pnpm check` runs the fast gates (repo-wide JS syntax
sweep, unit tests, pending-image guard, architecture/app-global contracts,
dataset-manifest freshness, SSOT parity, i18n coverage, metadata freshness)
in a few seconds; `pnpm verify:app` boot-and-click smokes the viewer app in
headless Chromium in a few seconds. `pnpm check` is reproducible — it is
green on any fresh checkout, and CI (`.github/workflows/ci.yml`) runs it
plus the render gates on every push and pull request.

The deployed Pages artifact is a generated runtime projection rather than a
copy of every source file. Build and exercise its loading budgets with:

```bash
pnpm build:site
pnpm verify:site
```

The production page downloads three ordered `defer` bundles in parallel,
loads only the active Sankey dataset Adapter, prefetches a target only after
pointer/keyboard intent, and loads Chart.js on the first Trend or metric-trend
interaction. Fidelity-only files under `input/processing/` and
`input/processed/` are not deployed.

For a single self-contained HTML file that does not depend on sibling CSS, JS,
font, vendor, data, or reference PNG files, build the standalone artifact:

```bash
pnpm build:standalone
pnpm verify:standalone
```

The generated file is
`output/trace-company-product-metric-visualizer.html`. It inlines the viewer CSS,
all ordered scripts, the shared local Montserrat, Noto Sans, and Roboto font
manifest, and datasets. It does not
inline or request active processing or processed reference PNGs; those remain
verification inputs only.

Pick datasets from the left Company / Data point time navigator, and
use the top **Sankey / Table** switch to choose the view. Sankey mode exports
the current d3-sankey chart as SVG/PNG at 2× resolution. Table mode shows the
company metadata table and the period-level income statement table, with CSV
exports for both.

The viewer supports app-wide language switching through `src/i18n.js`. English
data is the canonical verification source, while Sankey and Table mode project
localized display text at runtime. Dataset-specific wording can be refined with
`i18n.<language>` overlays on dataset adapters, financial SSOT records, and
company metadata records.

For fixed-layout Sankey datasets, localizing the node labels is not the same as
localizing the rendered chart text. Any explicit
`layout.labels.*.blocks[].lines[].text`, KPI card text, `annotationsSvg` text,
or other fixed-position SVG copy needs a dataset-level language overlay when it
changes in translation. Acronyms and punctuation-heavy labels such as `R&D`,
`SG&A`, `G&A`, `D&A`, and labels using `&` or money suffixes should be treated
as high-risk strings: either preserve them intentionally or override the exact
localized lines instead of relying on generic phrase replacement.

## Visual loop workflow

Use this workflow when a new reference image is added. Income Statement takes
the Sankey fidelity branch; Revenue Metric takes the data-only branch:

1. Put new, unprocessed source PNGs in `input/pending/`.
2. Select one item and run its pending guard:

   ```bash
   pnpm check:pending -- --file input/pending/<file>.png
   ```

   A pending-to-pending collision, exact processing/processed-image match, or
   existing-key collision is a stop condition: do not move images, edit data,
   extract icons, or run the d3 loop for that item.
3. Choose the final key and input-type Adapter, rerun the selected-item guard
   with that key, then record and claim the Source:

   ```bash
   pnpm check:pending -- --file input/pending/<file>.png --key <dataset-key>
   pnpm record:intake -- input/pending/<file>.png --key <dataset-key> \
     --adapter <income-statement|revenue-metric> \
     --availability <published|local-only|restricted>
   ```

   If the final key differs from the candidate, this final guard checks it
   against `input/processing/`, `input/processed/`, `data/datasets/`,
   `data/income-statements/<company-key>.js`, and `data/dataset-manifest.js`.

   After the selected guard passes, `record:intake` records the immutable
   Source identity and immediately makes a no-clobber claim by moving the PNG
   to `input/processing/<dataset-key>.png`. Keep it there throughout inventory,
   authoring, icon crop work, fidelity review, sealing, and close-out. An
   existing processing destination is a stop condition and is never
   overwritten. `--availability` is Source-access policy, not the lifecycle
   state `PUBLISHED`. Other pending items may remain in the shared queue.
4. Set every authored Source reference to the final stable path,
   `input/processed/<dataset-key>.png`, even though the bytes are still in
   `input/processing/`. For Income Statement this includes
   `meta.referenceImage`; Revenue Metric uses its SSOT `sourceImage`. Local
   tools may resolve the missing final path through the active Build's same-key
   processing claim.
5. If this is a new company, add the company profile to
   `data/company-metadata/<company-key>.js` first: description, sector, industry, founded
   date, headquarters, fiscal year end, website, ticker/exchange, market cap
   with as-of/source when available, and source URLs.
6. For an Income Statement, if the source contains company or business/segment
   icons that need to be reproduced, create
   `input/icon-crop-specs/<dataset-key>.json` and run:

   ```bash
   python3 scripts/extract_icon_crops.py --spec input/icon-crop-specs/<dataset-key>.json
   ```

   The spec-driven script writes reusable reference crops to
   `data/assets/icon-references/<company>/crops/`, validation sheets to
   `data/assets/icon-references/<company>/validation-sheets/`, and metrics to
   `crop-report.json`. Review every validation sheet with the original image,
   crop box, and extracted crop visible together, then record the pass/fail
   decision in `model-validation.md`. Extract every semantically relevant
   business cluster unless the task explicitly narrows the scope. Authored
   crop/source references still use the final processed path; local crop
   tooling may use the same-key processing fallback.
7. Add or update the matching pure-data record. Income Statement uses
   `data/income-statements/<company-key>.js`; Revenue Metric uses
   `data/revenue-metrics.js`. Both are Metric SSOTs with no Sankey layout or
   render settings. Revenue Metric creates no Sankey Adapter or fidelity run;
   its Verification Plan records those axes as explicit `notApplicable`.
8. Add localized display text for every non-default language in
   `window.SANKEY_I18N.languageCodes`:
   - Income Statement `data/datasets/<dataset-key>.js`: `name`, `meta.title`, period labels,
     node labels/notes, and explicit fixed-layout label text.
   - `data/income-statements/<company-key>.js`: financial line-item labels and notes used by
     Table mode.
   - `data/revenue-metrics.js`: Revenue Metric labels, notes, conditions, and
     source display text.
   - `data/company-metadata/<company-key>.js`: company profile fields when the company is new
     or profile text changes.
   Language overlays may tune text layout such as `titleTextLength`, but should
   not change values, links, node positions, or financial semantics.
   For datasets with fixed `layout.labels`, include localized `layout.labels`
   blocks for every visible text line that should differ from English. Do not
   rely on the global phrase dictionary to translate fixed-position chart text.
   After localization, render the non-default language and inspect the actual
   SVG text bounds for mixed-language leftovers, malformed acronym output,
   overlap, and canvas overflow.
9. Install the pinned local tooling once:

   ```bash
   pnpm install --frozen-lockfile
   pnpm exec playwright install chromium
   ```

10. Run the deterministic data and i18n diagnostics, plus d3 diagnostics for
    Income Statement:

   ```bash
   pnpm verify:ssot
   pnpm verify:i18n -- --strict <dataset-key>
   # Income Statement only:
   pnpm verify:d3 -- <dataset-key>
   ```

   Or run the applicable profile (plus syntax and metadata) in one go with
   `pnpm verify:dataset -- <dataset-key>`; Revenue Metric skips rendering.
   The verify commands are read-only:
   `verify:d3` never archives or advances a manual round, even when `--focus`
   is supplied. A machine-green result is diagnostic evidence, not human
   acceptance or convergence.

11. When a candidate is ready for human review, bind it to the Build and
    record the Adapter-required durable evidence:

    ```bash
    pnpm record:build -- prepare-review <build-id> --input <review-input.json>
    # The command prints a reviewToken used by review.json.
    pnpm record:verification -- <build-id> --json
    # Income Statement only, once per required language:
    pnpm record:fidelity -- <dataset-key> --build <build-id> --focus "structure-text-l10n-review"
    pnpm record:fidelity -- <dataset-key> --build <build-id> --focus "structure-text-l10n-review" --language zh
    pnpm record:build -- finish <build-id> --review <review.json>
    ```

    For Income Statement, `record:fidelity` writes `evidence-ready`, not
    accepted, evidence. Revenue Metric supplies no fidelity manifest because
    its Plan records that axis as `notApplicable`. The
    review JSON binds the printed `reviewToken` (legacy `packetDigest` remains
    readable), the `record:verification` reference, applicable fidelity
    manifests, human attestation, region/risk/feedback
    decisions, and the Interface Matrix. Missing human acceptance stays
    `review-pending`; rejected or blocked review does not close the Build.
    After a requested change, edit the candidate and prepare a new review so
    the old attestation cannot carry over to changed digests.

12. Only after `finish` records an accepted `FidelityResult`, stage the
    future-regression baseline, rerun fresh read-only checks, seal, and verify
    close-out:

    ```bash
    pnpm record:build -- stage-baseline <build-id> --input <baseline.json>
    pnpm verify:dataset -- <dataset-key>
    pnpm record:build -- seal <build-id>
    pnpm record:build -- inspect <build-id>
    pnpm verify:closeout -- <build-id>
    pnpm complete:source -- <build-id>
    pnpm check
    ```

    The Revenue Metric Adapter records render/fidelity and baseline decisions
    as explicit `notApplicable` facts instead of silently skipping axes.
    Run `complete:source` only after the read-only close-out gate passes. It
    rechecks the intake digest, refuses to overwrite an existing destination,
    and promotes `input/processing/<dataset-key>.png` to the stable
    `input/processed/<dataset-key>.png`. Never rename a processed image.
    A non-empty `input/processing/` may contain other active Builds and does
    not fail the global `pnpm check`. `SEALED` and this compatibility Source
    promotion are not publication; atomic M4 Publication is not implemented
    yet. Where the current compatibility
    runtime still needs a canonical render baseline, `record:baseline` remains
    a separate transitional mutation and cannot prove the producing Build:

    ```bash
    pnpm record:baseline -- <dataset-key>
    pnpm verify:render-regression -- <dataset-key>
    ```

For non-default languages, `verify:i18n --strict` confirms overlay coverage but
does not prove that fixed text fits. For edge-sensitive text such as right-side
`anchor: 'start'` labels, left-side `anchor: 'end'` labels, titles, KPI cards,
and annotations, inspect the localized rendered SVG with `getBBox()` or an
equivalent browser check and make sure text stays within
`meta.referenceImage.width` and `meta.referenceImage.height`.

The verifier starts its own static server, renders a bare d3 SVG for the
dataset, screenshots `#chart > svg`, asserts that no source image or unapproved
SVG `<image>` is present, computes pixel metrics against `meta.referenceImage`,
and cleans only that run's private `compare/runs/` workspace. `verify:d3` is a
read-only diagnostic and promotes no archive. Use Build-bound
`record:fidelity -- <dataset-key> --build <build-id> --focus <dir>` when the same checks must
become durable review evidence; automatic gates can produce only
`evidence-ready`, never human acceptance.
Datasets that explicitly set
`render.allowRasterAnnotations` may render approved runtime images from
`data/assets/raster-annotations/`. Use `pnpm verify:d3 -- <dataset-key> --keep`
when you need to inspect the candidate PNG.

`compare/runs/` contains per-run scratch. Keep unclaimed assets in
`input/pending/`, active claimed Sources in `input/processing/`, and stable
verification references in `input/processed/`; do not rely on scratch between runs.
Authored references always name the final processed path, while local tools
may fall back to the active Build's same-key processing claim. Durable
`record:fidelity` evidence lives under
`output/compare/<dataset-key>/` with a `fidelity-run.json` identity manifest.
Only evidence whose identity includes the current Build, authored digest, and
Verification Plan digest participates in the new close-out. An explicit-focus
recording without `--build` is legacy compatibility evidence only.

For a **d3-sankey fidelity loop**, the rendered output under comparison must be
the SVG produced by `SankeyEngine.render()` / d3-sankey. Do not compare against
Reference mode, a direct `<img>` of the source PNG, or ad hoc source-image crops
or raster overlays placed into the d3 output to cover mismatches. The source PNG
is only the standard to measure against, never part of the d3-sankey render
being scored. The allowed exception is explicit image embedding mode, where
validated semantic icon crops are written to `data/assets/raster-annotations/`
and gated by `render.allowRasterAnnotations`.

## Icon asset workflow

Icon extraction is intentionally generalized across companies. The reusable
logic lives in `scripts/extract_icon_crops.py`; each source image gets a small
JSON spec in `input/icon-crop-specs/` with only coordinates, filters, output
names, and notes.

Accepted reference assets live under:

```text
data/assets/icon-references/<company>/
  crops/
  validation-sheets/
  crop-report.json
  model-validation.md
```

Use these PNG crops only as references for SVG/vector conversion and reuse
decisions. They must not be embedded in d3 output, standalone artifacts, or
foreground overlays.

## Rendering

The viewer renders only the editable d3-sankey SVG from
`src/sankey-engine.js`. Processed reference PNGs are kept in
`input/processed/` and referenced by `meta.referenceImage` for the fidelity
verifier, but they are not part of the app runtime or standalone HTML artifact.
During an active Build, the reference remains in `input/processing/` through
close-out and local tooling resolves it through the same-key processing claim;
only `complete:source` rechecks the recorded digest and materializes the
authored processed path after close-out.

Typography follows content roles rather than page inheritance: App Chrome
(toolbar, sidebar, controls, actionbar) uses Montserrat; View product text in
Sankey, Trend, Comparison, and Table uses Noto Sans; Sankey numeric notes and
Hover Tooltips use Roboto. Brand-faithful Logo/wordmark artwork may use any
font, but brand text inside `annotationsSvg` must have the nearest explicit
`data-typography-role="brand"` ancestor. The renderer adds that role around
`meta.logoSvg` automatically. Development, render verification, production,
and standalone builds share one family/weight manifest.

## Add your company

Create a file in `data/datasets/` that pushes onto the global `DATASETS`
array, run `pnpm sync:index-datasets` to register it in the generated
`data/dataset-manifest.js` (dataset adapters no longer get `index.html`
tags; the viewer stubs them from the manifest at boot and loads adapter
scripts progressively), add the comparable financial statement record to
`data/income-statements/<company-key>.js`, and add company-level context to
`data/company-metadata/<company-key>.js` before registering the first dataset for that
company. Registered datasets are authored as high-fidelity adapters: define the
node/link graph explicitly, then tune `layout.nodes` and `layout.labels` against
the processed reference image.

```js
// data/datasets/my-company-fy25.js
const dataset = {
  key: 'my-company-fy25',
  name: 'My Company · FY25',
  meta: {
    title: 'My Company FY25 Income Statement',
    period: 'FY2025',
    currency: '$',
    unit: 'M',
    decimals: 0,
    referenceImage: {
      src: 'input/processed/my-company-fy25.png',
      width: 2862,
      height: 1536,
    },
  },
  nodes: [
    { id: 'product', label: 'Product', value: 800, type: 'revenue' },
    { id: 'services', label: 'Services', value: 200, type: 'revenue' },
    { id: 'revenue', label: 'Revenue', value: 1000, type: 'total' },
    { id: 'cost_of_revenue', label: 'Cost of revenue', value: 300, type: 'cost' },
    { id: 'gross_profit', label: 'Gross profit', value: 700, type: 'profit' },
  ],
  links: [
    { source: 'product', target: 'revenue', value: 800 },
    { source: 'services', target: 'revenue', value: 200 },
    { source: 'revenue', target: 'gross_profit', value: 700 },
    { source: 'revenue', target: 'cost_of_revenue', value: 300 },
  ],
  layout: {
    nodes: {
      product: { x: 120, y: 280, width: 80, height: 240 },
      services: { x: 120, y: 640, width: 80, height: 120 },
      revenue: { x: 760, y: 390, width: 80, height: 360 },
      gross_profit: { x: 1380, y: 330, width: 80, height: 260 },
      cost_of_revenue: { x: 1380, y: 760, width: 80, height: 100 },
    },
    labels: {
      product: {
        blocks: [{ x: 88, top: 300, anchor: 'end', lines: [{ text: 'Product' }, { text: '$800M' }] }],
      },
      services: {
        blocks: [{ x: 88, top: 660, anchor: 'end', lines: [{ text: 'Services' }, { text: '$200M' }] }],
      },
      revenue: {
        blocks: [{ x: 800, top: 320, anchor: 'middle', lines: [{ text: 'Revenue' }, { text: '$1.0B' }] }],
      },
    },
  },
};

(window.DATASETS = window.DATASETS || []).push(dataset);
```

```bash
# registers the new file in data/dataset-manifest.js (generated)
pnpm sync:index-datasets
```

Keep `data/income-statements/<company-key>.js` updated with the same reported totals and line
items, then run `pnpm verify:ssot` to confirm the SSOT still covers every
registered dataset. See [`data/schema.md`](data/schema.md) for the full
low-level format. `data/datasets/nvidia-q1-fy27.js` is a compact hand-authored
example.

## How it's built

| file                        | role                                                          |
|-----------------------------|---------------------------------------------------------------|
| `index.html`                | static viewer shell and ordered script registration           |
| `src/app.css`               | viewer layout, controls, sidebar, and responsive styles       |
| `src/app/`                  | viewer app modules (classic scripts, ordered in `index.html`, shared top-level scope) |
| `src/app/dom.js` · `util.js` · `dataset-loader.js` · `hotkeys.js` · `i18n-runtime.js` | DOM refs · generic helpers/formatters · on-demand Adapter loading, intent prefetch, and retry · modifier-combo shortcut registry · localization caches over `SANKEY_I18N` |
| `src/app/state.js` · `selectors.js` · `financial.js` · `chart-theme.js` | prefs + mode rules + UI state/scope · display/search derivations · USD/FX totals + company sort values · shared Chart.js theme plus lazy runtime loading |
| `src/app/shell.js` · `controls.js` | theme/language/sidebar/toolbar chrome · metric/view switching + `renderAll()` |
| `src/app/company-panel.js` · `period-panel.js` | company list, sort menu, multi-select · period tree, timeline, multi-select |
| `src/app/tables.js` · `trend.js` · `sankey.js` | virtualized tables · revenue trend charts · sankey single/comparison + `draw()` |
| `src/app/comparison-zoom.js` · `comparison-metric-trend.js` | comparison canvas zoom gestures · node/link metric trend panel |
| `src/app/exports.js` · `main.js` | SVG/PNG/CSV downloads · global wiring + boot (loads last) |
| `src/sankey-engine.js`      | **d3-sankey** renderer: layout + custom nodes/links/labels/logo/interactions; label passes exposed as pure helpers |
| `src/dataset-registry.js`   | manifest-driven dataset stubs + in-place adapter upgrades on `DATASETS.push` |
| `src/i18n-dictionaries.js` · `src/i18n.js` | per-language translation data · language-neutral rule pipeline + UI dictionary + overlays |
| `src/icons.js`              | Lucide icon set (inline SVG) + the NVIDIA brand glyph         |
| `scripts/build-site.mjs` · `verify-site.mjs` | builds the optimized Pages projection and enforces request/on-demand-loading budgets |
| `scripts/build-standalone.mjs` | builds the self-contained HTML artifact (inlines all adapters) |
| `scripts/verify-standalone.mjs` | opens the artifact via `file://` and checks d3 rendering |
| `scripts/verify-app-globals.mjs` | static gate for shared-scope duplicate declarations and load order |
| `scripts/verify-render-regression.mjs` | batch render + similarity baseline gate (`data/render-baselines.json`) |
| `scripts/update-dataset-manifest.mjs` | regenerates `data/dataset-manifest.js` (dataset registration SSOT) |
| `scripts/script-sources.mjs`| shared script classification for page and verifier harnesses  |
| `scripts/lib/`              | shared verifier internals: project paths, VM loader, data-loading stacks, render harness, fonts, PNG diff, compare archive, d3 hard gates |
| `tests/*.test.mjs`          | node:test unit tests (`pnpm test`): engine layout + label passes, trace-domain, i18n, png-diff, script sources, dataset registry, hard gates |
| `scripts/extract_icon_crops.py` | spec-driven icon crop extraction and validation (deps: `scripts/requirements.txt`) |
| `data/income-statements/<company-key>.js` | pure financial-statement SSOT for totals and line items       |
| `data/company-metadata/<company-key>.js`  | company-profile SSOT for Table mode and onboarding checks     |
| `data/datasets/*.js`      | datasets (one per company/period)                             |
| `data/dataset-manifest.js`  | generated dataset registration manifest (navigation stubs + script paths) |
| `data/assets/`              | reusable icon references and validation records               |
| `vendor/`                   | d3 v7 and d3-sankey — vendored for offline use                |

Design choices that keep every chart **aligned and consistent**:

- **Columns are explicit** (`col` per node) so the layout matches the financial
  narrative (segments → revenue → gross → operating → net) instead of whatever
  d3's auto-layering produces.
- **Colour is semantic and automatic** — node colour comes from its `type`;
  link colour is a gradient derived from its endpoints. You never pick a link
  colour by hand.
- **Labels can't collide** — side labels are de-collided in a second pass, so
  even many small terminal nodes (Tax / R&D / SG&A) stay readable.
- **Display values are preserved** — d3-sankey overwrites node values with flow
  sums, so the engine keeps the author's reported figure for the label.

## Notes

- The NVIDIA figures here are **illustrative**, matching the source infographic;
  swap in audited numbers as needed.
- Icons are [Lucide](https://lucide.dev) (MIT). The NVIDIA eye glyph is a brand
  trademark of NVIDIA Corporation, used here only to reproduce the reference;
  swap `meta.logoSvg` for your own asset.
- d3-sankey is ISC licensed and is the only charting renderer vendored here.
- Commit messages follow the project convention in
  [`docs/commit-messages.md`](docs/commit-messages.md).
