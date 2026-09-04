# Trace — Company & Product Metric Visualizer

[![CI](https://github.com/CharlesLiuyx/trace-company-product-metric-visualizer/actions/workflows/ci.yml/badge.svg)](https://github.com/CharlesLiuyx/trace-company-product-metric-visualizer/actions/workflows/ci.yml)

**Turn metric images and text into traceable company and product data.**
Trace turns company financials into the earnings infographics you see go
viral — green for value retained, red for costs, teal for revenue collected —
covering **200+ companies** from NVIDIA, Apple, and Microsoft to TSMC, LVMH,
Tencent, and SpaceX, across quarterly and annual periods.

### [▶ Open the live viewer](https://charlesliuyx.github.io/trace-company-product-metric-visualizer/) — nothing to install, runs entirely in your browser.

![Trace rendering the NVIDIA Q1 FY27 income statement as a Sankey diagram](docs/preview.png)

## Input a metric asset

Give the executor a PNG image or UTF-8 text file. The current workflow is
**receive → structure → check and review → include in the system**. It saves the
original, records exact values and source positions, builds the review sheet,
and keeps each draft isolated until reviewed publication.

Open the [interactive workflow graph](docs/workflow-flowchart.zh-CN.html), or use
[the operator guide](docs/asset-workflow.md) for commands and an example.
General metrics appear under **指标资产 / Metrics**, with search, original quotes
and JSON export. Existing financial tables, trends and Sankeys remain available.
`pnpm dev` shows the local published snapshot when present; `pnpm dev -- --draft`
opens the development worktree. Local publication and HTML output do not deploy
the online site. New snapshots and their Build ledger are currently machine-local.

## Highlights

- **A large, growing catalog** — 1,000+ income-statement datasets across 200+
  public and private companies, plus ARR trend series for OpenAI and
  Anthropic. NVIDIA alone spans 15 quarters back to Q3 FY23.
- **Traced, not approximated** — every chart is hand-authored against a
  published reference infographic, then pixel-diffed against it by a
  headless-Chromium verifier. The source image is the standard to measure
  against, never part of the render.
- **Three views** — Sankey (the flow diagram), Trend (revenue and metric
  charts across periods), and Table (company profile plus the full income
  statement).
- **Comparison mode** — multi-select companies or periods to see Sankeys side
  by side, with canvas zoom and a per-node/link metric trend panel.
- **Hover analytics** — hovering any node or flow shows its share of the
  related total, computed consistently across every chart.
- **Exports** — the current Sankey as SVG or 2× PNG; both tables as CSV.
- **Bilingual and themeable** — English / 简体中文 app-wide language switch,
  light and dark themes, searchable and sortable company/period navigators.
- **Zero-backend, works offline** — a pure static site with d3 and d3-sankey
  vendored locally. Double-click `index.html` and it just works.

## Quick start

```bash
pnpm dev          # zero-dependency static server
# open http://127.0.0.1:8000
```

…or skip the server entirely and **double-click `index.html`** — all runtime
dependencies are vendored in `vendor/`, so the viewer runs offline.

In the viewer: pick a company and period from the left navigator, switch
views with the top **Sankey / Trend / Table** buttons, and multi-select
companies or periods to enter comparison mode. The toolbar toggles theme and
language and hosts the SVG/PNG/CSV exports. Sankey comparisons normalize the
painted monetary faces to one USD scale; charts with very different
magnitudes may start sub-pixel at fit and can be inspected with comparison
zoom. If any selected record lacks trustworthy geometry or money metadata,
the whole comparison shows a calibration error instead of mixing scales.

## Add your own company

Datasets are plain JS files — a node/link graph plus an explicit layout tuned
against a reference image. A minimal dataset:

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
    referenceImage: { src: 'input/processed/my-company-fy25.png', width: 2862, height: 1536 },
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
};

(window.DATASETS = window.DATASETS || []).push(dataset);
```

Then register it and keep the financial single source of truth in sync:

1. `pnpm sync:index-datasets` — registers the file in the generated
   `data/dataset-manifest.js` (the viewer loads adapters progressively from
   the manifest; no `index.html` edits needed).
2. Add the reported totals and line items to
   `data/income-statements/<company-key>.js` and the company profile to
   `data/company-metadata/<company-key>.js`.
3. `pnpm verify:ssot` — confirms the financial record covers the dataset.

See [`data/schema.md`](data/schema.md) for the full format, including
fixed-position `layout` labels, and `data/datasets/nvidia-q1-fy27.js` for a
compact hand-authored example.

## What keeps every chart consistent

- **Columns are explicit** (`col` per node), so the layout follows the
  financial narrative — segments → revenue → gross → operating → net —
  instead of whatever d3's auto-layering produces.
- **Color is semantic and automatic** — node color comes from its `type`;
  link color is a gradient derived from its endpoints. You never pick a link
  color by hand.
- **Labels can't collide** — side labels are de-collided in a second pass, so
  even many small terminal nodes (Tax / R&D / SG&A) stay readable.
- **Display values are preserved** — d3-sankey overwrites node values with
  flow sums; the engine keeps the author's reported figure for the label.
- **Typography follows content roles** — Montserrat for app chrome, Noto Sans
  for chart and table text, Roboto for numeric notes and tooltips, shared by
  development, verification, production, and standalone builds.

## Verification and builds

Every dataset lives under a verification pipeline; the fast gates run in
seconds and are green on any fresh checkout:

```bash
pnpm check         # syntax sweep, unit tests, manifest/SSOT/i18n/metadata gates
pnpm verify:app    # boot-and-click smoke of the viewer in headless Chromium
```

Per-dataset diagnostics render the pure d3-sankey SVG in headless Chromium,
screenshot it, and compute pixel metrics against the reference image:

```bash
pnpm install --frozen-lockfile && pnpm exec playwright install chromium
pnpm verify:dataset -- <dataset-key>   # data + i18n + render for one dataset
```

Two production artifacts, each with its own budget-enforcing verifier:

```bash
pnpm build:site && pnpm verify:site              # optimized GitHub Pages projection
pnpm build:standalone && pnpm verify:standalone  # single self-contained HTML file
```

The Pages build boots with just the active dataset adapter, then
asynchronously preloads the selected company's complete adapter set (every
period and variant) so in-company navigation shows no loading state;
pointer/keyboard intent prefetches ahead of the click, and Chart.js stays
deferred until the first Trend interaction. The standalone build inlines
CSS, scripts, fonts, and datasets into one file:
`output/trace-company-product-metric-visualizer.html`.

CI ([`.github/workflows/ci.yml`](.github/workflows/ci.yml)) always runs
`pnpm check`, plans browser/render gates from the Git diff, and deploys the
verified Pages artifact. [`docs/ci-verification.zh-CN.md`](docs/ci-verification.zh-CN.md)
documents every check.

## Contributing a dataset (the fidelity loop)

New datasets follow a source-to-sealed pipeline: intake a reference image
from `input/pending/`, author the data SSOTs and dataset adapter, localize
fixed-layout text, then pass automated render gates and human fidelity review
before the build seals. The rendered output under comparison is always the
SVG produced by `SankeyEngine.render()` — never the source PNG or crops of
it.

Git tracks the shared `input/pending/` queue and active
`input/processing/` claims so multiple project checkouts can coordinate work.
Completed references move to the ignored `input/processed/` archive and stay
only on the local machine.

The owning documents:

- [`docs/dynamic-dataset-workflow.md`](docs/dynamic-dataset-workflow.md) —
  the end-to-end pipeline, commands, and hard constraints.
- [`docs/fidelity-loop-rules.md`](docs/fidelity-loop-rules.md) — review
  gates, measurement rules, and known blind spots.
- [`CONTEXT.md`](CONTEXT.md) and [`docs/architecture/`](docs/architecture/README.md) —
  domain language and lifecycle architecture.
- [`data/assets/README.md`](data/assets/README.md) — icon crop extraction
  and reference-asset layout (crops are conversion references only, never
  embedded in output).

Commit messages follow [`docs/commit-messages.md`](docs/commit-messages.md).

## How it's built

No framework, no bundler at development time: a static shell, ordered classic
scripts, and a hand-rolled d3-sankey engine.

| file                        | role                                                          |
|-----------------------------|---------------------------------------------------------------|
| `index.html`                | static viewer shell and ordered script registration           |
| `src/app.css`               | viewer layout, controls, sidebar, and responsive styles       |
| `src/app/`                  | viewer app modules (classic scripts, ordered in `index.html`, shared top-level scope) |
| `src/app/dom.js` · `util.js` · `dataset-loader.js` · `hotkeys.js` · `i18n-runtime.js` | DOM refs · generic helpers/formatters · on-demand + company-scope preload Adapter loading, intent prefetch, and retry · modifier-combo shortcut registry · localization caches over `SANKEY_I18N` |
| `src/app/state.js` · `selectors.js` · `financial.js` · `chart-theme.js` | prefs + mode rules + UI state/scope · display/search derivations · USD/FX totals + company sort values · shared Chart.js theme plus lazy runtime loading |
| `src/app/shell.js` · `controls.js` | theme/language/sidebar/toolbar chrome · metric/view switching + `renderAll()` |
| `src/app/company-panel.js` · `period-panel.js` | company list, sort menu, multi-select · period tree, timeline, multi-select |
| `src/app/tables.js` · `trend.js` · `sankey.js` | virtualized tables · revenue trend charts · sankey single/comparison orchestration, fail-closed scale presentation + `draw()` |
| `src/app/comparison-zoom.js` · `comparison-metric-trend.js` | comparison canvas zoom gestures with a connected SVG-free browser-geometry resolver · node/link metric trend panel |
| `src/app/metric-library.js` | General observations, source inspection, search and exact JSON export |
| `src/app/exports.js` · `main.js` | SVG/PNG/CSV downloads · global wiring + boot (loads last) |
| `src/comparison-scale.js`   | Deep Comparison Visual Scale Module: validates renderer anchor geometry against Metric SSOT revenue lineage + money dimensions and produces one group-atomic USD normalization plan |
| `src/sankey-engine.js`      | **d3-sankey** renderer: compiled fixed/dynamic graph geometry + custom nodes/links/labels/logo/interactions; owns the public compiled node-value Geometry Interface |
| `src/dataset-registry.js`   | manifest-driven dataset stubs + in-place adapter upgrades on `DATASETS.push` |
| `src/i18n-dictionaries.js` · `src/i18n.js` | per-language translation data · language-neutral rule pipeline + deny-by-default overlays and visible-financial-token guard |
| `src/icons.js`              | Lucide icon set (inline SVG) + the NVIDIA brand glyph         |
| `scripts/build-site.mjs` · `verify-site.mjs` | builds the optimized Pages projection and enforces request/on-demand-loading budgets plus the all-period monetary-scale oracle |
| `scripts/build-standalone.mjs` | builds the self-contained HTML artifact (inlines all adapters) |
| `scripts/verify-standalone.mjs` | opens the artifact via `file://` and checks d3 rendering, inlined raster assets, and the all-period monetary-scale oracle |
| `scripts/lib/comparison-scale-browser.mjs` | independent Adapter + Metric SSOT + painted-DOM oracle shared by source, Pages, and standalone browser gates |
| `scripts/verify-app-globals.mjs` | static gate for shared-scope duplicate declarations and load order |
| `scripts/plan-ci.mjs` · `scripts/lib/ci-plan.mjs` | Git diff Adapter + tested ChangeImpact planning Module for CI check selection |
| `scripts/verify-render-regression.mjs` | batch render + similarity baseline gate (`data/render-baselines.json`) |
| `scripts/update-dataset-manifest.mjs` | regenerates `data/dataset-manifest.js` (dataset registration SSOT) |
| `scripts/script-sources.mjs`| shared script classification for page and verifier harnesses  |
| `scripts/lib/`              | shared verifier internals: project paths, VM loader, data-loading stacks, render harness, fonts, PNG diff, compare archive, d3 hard gates |
| `tests/*.test.mjs`          | node:test unit tests (`pnpm test`): engine layout + compiled scale, Comparison Visual Scale, trace-domain, i18n, png-diff, script sources, dataset registry, hard gates |
| `scripts/extract_icon_crops.py` | spec-driven icon crop extraction and validation (deps: `scripts/requirements.txt`) |
| `data/income-statements/<company-key>.js` | pure financial-statement SSOT for totals and line items       |
| `data/company-metadata/<company-key>.js`  | company-profile SSOT for Table mode and onboarding checks     |
| `data/datasets/*.js`        | datasets (one per company/period)                             |
| `data/dataset-manifest.js`  | generated dataset registration manifest (navigation stubs + script paths) |
| `data/assets/`              | reusable icon references and validation records               |
| `vendor/`                   | d3 v7 and d3-sankey — vendored for offline use                |

## Notes

- Figures match their **source infographics** and are illustrative; verify
  against audited filings before relying on any number.
- Icons are [Lucide](https://lucide.dev) (MIT). Company logos and wordmarks
  are trademarks of their respective owners, reproduced only to match the
  reference infographics — swap `meta.logoSvg` for your own asset.
- d3 (ISC) and d3-sankey (ISC) are the only vendored chart libraries.
