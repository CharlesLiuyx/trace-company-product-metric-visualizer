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
The generated catalog stores the shared version path once, omits an Adapter
`src` that is the conventional `data/datasets/<key>.js`, and stores the
Dataset Loader manifest by entry shape (each shape's field paths once, one
row of values per Adapter); Income Statement summary records use the same
shape encoding. Inline restores rebuild identical entries in order and each
Adapter's complete URL before the manifest is installed.

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

The viewer warms in memory what a click is predicted to need, so a warmed
click renders inside the click task without a loading placeholder: the detail
chunk, default period Adapter and its raster annotations of each company
visible in the list (immediately on pointer or keyboard focus), every period
Adapter of the selected company, and declared font faces no chart used yet.
Warming starts only after the first Sankey render, stays within the visible
list, runs at low priority, and is skipped under `Save-Data` or a 2G effective
connection; the budgets below hold this boundary.

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

Retired unversioned entry URLs serve data-free upgrade scripts that navigate a
cached index or open tab once to the latest index, keeping hash and query
([history](../archive/migration-milestones.md#pages-migration-from-the-unversioned-site)).

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

An uncached company switch adds one JSON request; a warmed one adds none.
Global Tables still download the requested full family. Database adoption should be reconsidered for
server-side queries over much larger data, concurrent writes, permissions, or
frequent incremental updates. It is not a prerequisite for this Pages loading
improvement.
