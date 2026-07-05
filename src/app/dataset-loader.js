/* Trace viewer · dataset-loader.js
 * Progressive dataset-adapter loading on top of TraceDatasetRegistry:
 * on-demand script injection for the keys a view needs now, plus an
 * idle-time preload sweep that hydrates the rest of the catalog. In
 * environments without a manifest (standalone build, verify harnesses)
 * every dataset is already loaded and all of this is a no-op. */

const datasetRegistry = window.TraceDatasetRegistry || null;
const injectedDatasetKeys = new Set();
const DATASET_PRELOAD_CHUNK = 12;

function injectDatasetScript(key) {
  if (!datasetRegistry || datasetRegistry.isLoaded(key) || injectedDatasetKeys.has(key)) return;
  const src = datasetRegistry.srcForKey(key);
  if (!src) return;
  injectedDatasetKeys.add(key);
  const script = document.createElement('script');
  // classic script with ordered execution: adapters may rely on loading
  // after a dataset they reuse, so in-flight injections keep insertion order
  script.async = false;
  script.src = src;
  script.onerror = () => {
    injectedDatasetKeys.delete(key);
    console.error(`Failed to load dataset script: ${src}`);
  };
  document.head.appendChild(script);
}

/* True when every requested key has its full adapter available (unknown
 * keys count as ready: no script will ever arrive for them). */
function datasetsReady(keys = []) {
  if (!datasetRegistry) return true;
  return keys.every((key) => !key || !datasetRegistry.isKnown(key) || datasetRegistry.isLoaded(key));
}

/* Injects any missing adapter scripts and resolves once they have all
 * registered (upgrading their stubs in place). */
function ensureDatasetsLoaded(keys = []) {
  if (!datasetRegistry) return Promise.resolve();
  const wanted = [...new Set(keys.filter(Boolean))];
  wanted.forEach(injectDatasetScript);
  return datasetRegistry.whenLoaded(wanted);
}

/* Idle-time hydration of every remaining adapter, in manifest order and in
 * small chunks so boot interactions stay responsive. After the sweep
 * finishes, every interaction behaves exactly like the eager-loading app. */
function preloadRemainingDatasets() {
  if (!datasetRegistry) return;
  const pending = datasetRegistry
    .pendingKeys()
    .filter((key) => !injectedDatasetKeys.has(key));
  if (!pending.length) return;
  pending.slice(0, DATASET_PRELOAD_CHUNK).forEach(injectDatasetScript);
  scheduleIdleTask(preloadRemainingDatasets);
}
