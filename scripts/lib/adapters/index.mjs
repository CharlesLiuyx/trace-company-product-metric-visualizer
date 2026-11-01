// Input-type Adapter registry: the code form of the Adapter Seam described in
// docs/architecture/dataset-lifecycle.md. Every behaviour that differs between
// Adapters is declared on the Adapter module; workflow, lifecycle, review and
// publication code read it through this registry and never compare Adapter
// ids (tests/adapter-seam.test.mjs enforces that). Adding an input type means
// adding one module here plus its schema and verification profile.
//
// Adapter module contract:
//   id, label            stable Adapter id and display name
//   media                Source media ids it accepts (scripts/lib/source-media.mjs)
//   signature            Type Gate signals: `required` selects it, `optional` may
//                        be added; every other signal is forbidden
//   facts                how source-facts/v1 compile into source objects:
//                        'flat-objects' (authored objects[]) or 'metric-observations'
//   checklist            fixed VerificationPlan check ids
//   requiredLocales      default review locales
//   view                 rendered View family that owns node faces and render
//                        evidence ('sankey') or null
//   ssot                 { family, locations[] } for shared typed SSOT scripts,
//                        or { family, recordPath(key) } for per-key records
//   indexRegistration    whether authoring/publication must sync index.html and
//                        the dataset manifest / file metadata
//   records(loaded)      the authored record list inside loadWorkspaceData output
//   artifacts(key)       Adapter-owned authored files [{ path, role }]
//   displayTimeKey(key)  DATASET_FILE_METADATA key carrying the reviewed display
//                        time, or null when the Adapter records none
//   reviewRows(record)   extra rows for the human review sheet
import incomeStatement from './income-statement.mjs';
import revenueMetric from './revenue-metric.mjs';
import metricObservation from './metric-observation.mjs';

const ADAPTER_MODULES = Object.freeze([incomeStatement, revenueMetric, metricObservation]);

export const ADAPTER_REGISTRY = Object.freeze(Object.fromEntries(ADAPTER_MODULES.map((adapter) => [adapter.id, adapter])));
export const DATASET_ADAPTERS = Object.freeze(ADAPTER_MODULES.map((adapter) => adapter.id));

// Signal vocabulary in registry order: each Adapter's required signals, then
// the optional ones. The lifecycle contract lists the same sequence.
export const SOURCE_CLASSIFICATION_SIGNALS = Object.freeze([
  ...new Set([
    ...ADAPTER_MODULES.flatMap((adapter) => adapter.signature.required),
    ...ADAPTER_MODULES.flatMap((adapter) => adapter.signature.optional),
  ]),
]);

// Signatures never overlap: a signal outside an Adapter's required/optional
// set is forbidden for it, so a signal set selects at most one Adapter.
export const ADAPTER_SIGNATURES = Object.freeze(Object.fromEntries(ADAPTER_MODULES.map((adapter) => {
  const own = new Set([...adapter.signature.required, ...adapter.signature.optional]);
  return [adapter.id, Object.freeze({
    required: adapter.signature.required,
    optional: adapter.signature.optional,
    forbidden: Object.freeze(SOURCE_CLASSIFICATION_SIGNALS.filter((signal) => !own.has(signal))),
  })];
})));

export function isAdapter(id) {
  return Object.hasOwn(ADAPTER_REGISTRY, id);
}

export function adapterFor(id) {
  const adapter = ADAPTER_REGISTRY[id];
  if (!adapter) {
    const error = new Error(`Unsupported Adapter: ${id}`);
    error.code = 'ADAPTER_INVALID';
    throw error;
  }
  return adapter;
}

/** Whether the Adapter's plan carries per-locale render evidence (and therefore a staged render baseline). */
export function adapterRequiresRender(id) {
  return adapterFor(id).checklist.includes('render-fidelity');
}

/** Whether the Adapter authors a Sankey View (node faces, View Adapter script). */
export function adapterHasSankeyView(id) {
  return ADAPTER_REGISTRY[id]?.view === 'sankey';
}

export function adapterDisplayTimeKey(id, key) {
  return adapterFor(id).displayTimeKey(key);
}

/** Shared typed SSOT locations (directories or scripts) every Adapter may merge into. */
export function adapterSsotLocations() {
  return [...new Set(ADAPTER_MODULES.flatMap((adapter) => adapter.ssot.locations || []))];
}
