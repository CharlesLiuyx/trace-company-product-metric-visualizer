# Pages runtime data

## Current implementation

Trace keeps its authored Metric SSOTs, company metadata, and View Adapters in
Git. GitHub Pages serves a generated, read-only projection. Loading performance
is improved by reducing startup data and work; this implementation introduces
no database, API server, or change to DatasetBuild / Publication authority.

```text
Authored SSOTs + Adapter manifest + viewer runtime
                   ↓ build:site
          one content-versioned runtime
                   ↓
        foundation + light catalog + app
                   ├─ selected company → profile + complete financial records
                   ├─ selected Table kind → complete family records
                   ├─ Metric library → complete observations
                   └─ selected Sankey → existing on-demand Adapter loader
```

The catalog retains all company/period identities and the values needed for
global navigation and sorting: revenue totals, net profit, market cap,
foundation date, and update timestamps. It omits financial line items and
long company profiles. The currently small Revenue Metric SSOT remains complete
in the catalog so historical observation/source search stays complete. Its
size remains part of the startup budget; split it when growth warrants it.

Company JSON includes full authored metadata and all financial periods for that
company. Table JSON includes a full metadata or financial family. Single-company
Table mode intentionally displays the entire family with an active row; it must
not silently become an active-company-only table. Multi-company Table mode
filters after loading that same complete family. Generic observation values,
quotes, identities, units, and sources are preserved without numeric coercion.
Generated details retain all authored fields rather than a reduced CSV schema.

## Runtime Data Module

`scripts/lib/site-data.mjs` owns the build projection. `src/runtime-data.js`
owns the runtime Interface: `ready`, `ensure`, `preload`, and cache-change
subscription, with one-time manifest installation and catalog binding during
boot. Requests, deduplication, retry, byte integrity, version checking, and
in-place record hydration remain inside this Module. `preload` is the
background form of `ensure`: it shares in-flight requests, fetches at low
priority, settles every chunk on its own, never rejects, and warns once per
failing chunk; the next user-driven `ensure` retries and owns the error UI.
The existing Dataset Loader continues to own executable View Adapter scripts.

The app expresses its view requirement before drawing or enabling CSV export.
Financial/profile summaries are upgraded in place to preserve the catalog's
array and Map references. Localization and table caches are invalidated after
upgrades; only the requested Table kind/language is materialized. Source and
standalone pages have full SSOTs and no split-data manifest, so this Interface
is a synchronous readiness check and introduces no network requests there.

Each JSON response must pass SHA-256 verification against the bootstrap
manifest, then match its schema, runtime version, and chunk id. All record keys
are validated before any records in that chunk are mutated. Failed requests
leave no successful-load marker and can be retried. Across several requested
chunks, successfully loaded records may be retained, but the requested View
does not render until all its requirements succeed. A draw generation prevents
an earlier company request from replacing the currently selected company.

## Click-layer warm

On GitHub Pages every request costs one round trip (about 300 ms observed),
and a company click needs three of them in sequence: the company detail JSON
and the default period adapter in parallel, then the raster annotations that
the committed SVG references. Without warming, a click shows the previous
chart, the loading placeholder, the new chart, and finally its logos. The
viewer therefore warms the data a click is predicted to need before it
happens, in memory rather than only in the HTTP cache, so `ready()` is true
synchronously and `draw()` swaps charts inside the click task.

- **Click layer of a company** (`companyWarmPlan` in `src/app/state.js`):
  the plan mirrors `selectCompanyGroup`. When the click would land on a
  Sankey, it names the company's detail chunk and its default period
  adapter; the Dataset Loader warms that adapter's raster annotations through
  detached, pre-decoded `Image` elements once the adapter is in memory
  (`data:` URIs are skipped). Table and trend Views depend on family chunks
  and the lazy Chart runtime, which warm once for every company, so they
  produce no plan.
- **Visible companies** (`src/app/company-panel.js`): after the first
  successful Sankey render and an idle period, an `IntersectionObserver`
  rooted at the company list warms every item that stays inside the list
  viewport plus a 240 px look-ahead for 200 ms; it re-targets the rebuilt
  buttons on every list render and follows scrolling. Pointer or keyboard
  focus on an item warms it immediately and link-prefetches its other
  periods.
- **Periods of the selected company**: selecting a company still preloads
  every period adapter of the scope, now about 400 ms after the click and
  including each adapter's raster annotations, so period chips swap without a
  request even where periods use different crops.
- **Fonts**: the same first idle loads every declared font face that no
  chart has used yet, so a later chart does not repaint when a new weight
  arrives.

Warming is speculative and bounded: it never starts before the first render,
it is limited to the visible list, every request is low priority, and it is
skipped under `Save-Data` or a 2G effective connection. The budgets below
hold this boundary.

## Version and deployment behavior

`build:site` hashes the runtime inputs, including the compiler, source HTML,
scripts, authored data, Adapters, CSS, fonts, and raster assets. It emits
`_site/releases/<runtime digest>/` containing bundles, JSON, Adapters, Chart,
and assets. The root index points to exactly one version. The builder checks
the input digest again before completing so edits during the build fail.

This **runtime digest is a generated artifact identity**, not a canonical
publication digest, a `ReleaseAttempt`, or evidence of human acceptance.
Publication and lifecycle rules remain owned by their existing documents.

The Pages artifact includes the current runtime and up to two prior runtimes
from `output/site-releases/`. CI restores this cache before building and saves
it only after a trusted main run verifies the artifact. Deployment still
consumes that exact `_site`; it does not rebuild in the deploy job. Retention
is best effort: cache eviction, a fresh checkout, and sufficiently old tabs
can make an old version unavailable. A failed load offers retry and reload of
the latest index. It never fetches a new unversioned chunk into an old catalog.

For the migration from the earlier unversioned site, the old `assets/*.js`
bootstrap/Chart URLs and registered `data/datasets/*.js` URLs serve small
upgrade scripts. A cached old index or an already-open tab navigates to the
latest index with a runtime-version query to bypass its cached HTML, preserving
the hash and other query parameters. A version guard prevents reload loops.
These bridges contain no data and never merge current details into an old
catalog. New pages continue to request only their immutable runtime paths.

## Verification and limits

- `tests/runtime-data.test.mjs`: whole-corpus summary identity/sort parity,
  full-record equality, in-place upgrades, request deduplication, retry,
  low-priority background preload that never rejects, tampered/wrong-version
  response rejection, and complete-source no-op mode.
- `verify:site`: initial catalog plus default-company detail at most **150 KiB
  gzip**, raw catalog at most **1 MiB**, exactly one company detail before the
  first Sankey render (`trace:sankey-rendered` performance mark) and no global
  table chunk; after idle, extra details and adapters only for the active
  company scope and the visible click layer, that layer must be warm, and a
  click on it renders without a loading placeholder or any detail, adapter or
  raster request; lazy Chart/Adapter budgets remain enforced.
- `scripts/lib/site-data-browser.mjs`: an independent authored-data oracle
  checks global tables/CSV, locale changes, multi-company filtering, failed
  loads, integrity rejection, and rapid company changes.
- `verify:app` and `verify:standalone`: the full source and offline paths remain
  usable. Render regression owns the existing diagram hard gates.
- `tests/site-release.test.mjs`: real builds in an isolated fixture verify
  stable versions, compiler dependency invalidation, noncontiguous HTML script
  removal, legacy upgrade scripts, retained bytes, retention limits, and a fresh cache.
- `verify:site` also exercises a cached unversioned index and an old tab's
  on-demand script request against the new artifact, then requires a rendered
  Sankey and no metric-library toolbar entry after upgrading.

`node scripts/benchmark-site.mjs --baseline <saved-site> --runs 10` compares
two immutable site directories with identical gzip, a fresh context per run,
disabled browser cache, 4× CPU slowdown, 100 ms network latency, and 1.6 Mbps
download bandwidth. Runs alternate order. It records raw samples plus median
and p90 for first Sankey node, cold/warm company switch, transfer size and
long tasks in `output/site-benchmark/results.json`. This is a controlled local
diagnostic, not a production percentile or a wall-clock CI gate. Measured
results and check routing are recorded in
[CI verification](../ci-verification.zh-CN.md).

An uncached company switch adds one JSON request; a warmed one adds none.
Global Tables still download the requested full family. Database adoption should be reconsidered for
server-side queries over much larger data, concurrent writes, permissions, or
frequent incremental updates. It is not a prerequisite for this Pages loading
improvement.
