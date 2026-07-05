/* Dataset registry: manifest-driven progressive loading for the dataset
 * adapter layer.
 *
 * data/dataset-manifest.js (generated) calls installManifest() with one
 * lightweight navigation entry per registered dataset (key, script src,
 * name, company, period fields, display i18n). The registry pushes a stub
 * dataset per entry onto window.DATASETS so the catalog, sidebar, search,
 * and routing work before any adapter file has loaded, and patches
 * DATASETS.push so a later-loading full adapter upgrades its stub IN PLACE
 * (same object identity — catalog records keep their dataset reference).
 *
 * Environments that load every adapter as plain scripts and never install
 * a manifest (the render/verify VM harnesses, and any page without this
 * file) keep the native push path untouched.
 *
 * Load order contract: this file must run before data/dataset-manifest.js,
 * which must run before any dataset adapter script. */
(function (global) {
  'use strict';

  const datasets = (global.DATASETS = global.DATASETS || []);
  const stubByKey = new Map();
  const srcByKey = new Map();
  const loadedKeys = new Set();
  const listeners = new Set();
  let manifestInstalled = false;

  datasets.forEach((dataset) => {
    if (dataset && dataset.key) loadedKeys.add(dataset.key);
  });

  function notifyLoaded(key) {
    loadedKeys.add(key);
    listeners.forEach((listener) => listener(key));
  }

  function upgradeStub(stub, full) {
    // The stub's fields (name/meta/i18n) are a subset of the full adapter's,
    // so assigning replaces them wholesale; `company` (manifest-derived
    // canonical name) intentionally survives — companyFor() prefers it.
    Object.keys(full).forEach((field) => {
      stub[field] = full[field];
    });
    delete stub.__datasetStub;
  }

  const nativePush = Array.prototype.push;
  datasets.push = function push(...items) {
    items.forEach((item) => {
      const key = item && item.key;
      const stub = key ? stubByKey.get(key) : null;
      if (stub && stub !== item && stub.__datasetStub) {
        upgradeStub(stub, item);
      } else {
        nativePush.call(datasets, item);
      }
      if (key) notifyLoaded(key);
    });
    return datasets.length;
  };

  function installManifest(manifest) {
    manifestInstalled = true;
    (manifest?.datasets || []).forEach((entry) => {
      if (!entry || !entry.key) return;
      srcByKey.set(entry.key, entry.src || '');
      if (loadedKeys.has(entry.key)) return;
      const stub = Object.assign({ key: entry.key, __datasetStub: true }, entry.data);
      stubByKey.set(entry.key, stub);
      nativePush.call(datasets, stub);
    });
  }

  function hasManifest() {
    return manifestInstalled;
  }

  function isLoaded(key) {
    return loadedKeys.has(key);
  }

  function isKnown(key) {
    return loadedKeys.has(key) || stubByKey.has(key);
  }

  function srcForKey(key) {
    return srcByKey.get(key) || '';
  }

  function pendingKeys() {
    return [...stubByKey.keys()].filter((key) => !loadedKeys.has(key));
  }

  // Resolves when every known requested key has its full adapter loaded.
  // Unknown keys resolve immediately (nothing will ever arrive for them).
  function whenLoaded(keys) {
    const remaining = new Set((keys || []).filter((key) => isKnown(key) && !isLoaded(key)));
    if (!remaining.size) return Promise.resolve();
    return new Promise((resolve) => {
      const listener = (key) => {
        remaining.delete(key);
        if (!remaining.size) {
          listeners.delete(listener);
          resolve();
        }
      };
      listeners.add(listener);
    });
  }

  global.TraceDatasetRegistry = Object.freeze({
    installManifest,
    hasManifest,
    isLoaded,
    isKnown,
    srcForKey,
    pendingKeys,
    whenLoaded,
  });
})(window);
