/* Trace viewer · dataset-loader.js
 * Deep Runtime Data Loader Module on top of TraceDatasetRegistry.
 *
 * Callers express intent through a small Interface: ready(), ensure(), and
 * prefetch(). Request deduplication, script registration checks, failure
 * recovery, and network-aware speculative fetches stay in the Implementation.
 * Standalone/render harnesses have no manifest, so every operation is a no-op. */

const datasetLoader = (() => {
  const registry = window.TraceDatasetRegistry || null;
  const loadPromises = new Map();
  const prefetchLinks = new Map();

  function uniqueKnownKeys(keys = []) {
    return [...new Set(keys.filter(Boolean))]
      .filter((key) => registry?.isKnown(key));
  }

  function ready(keys = []) {
    if (!registry) return true;
    return uniqueKnownKeys(keys).every((key) => registry.isLoaded(key));
  }

  function loadOne(key) {
    if (!registry || !registry.isKnown(key) || registry.isLoaded(key)) return Promise.resolve();
    if (loadPromises.has(key)) return loadPromises.get(key);
    const src = registry.srcForKey(key);
    if (!src) return Promise.reject(new Error(`Missing dataset source for ${key}`));

    const promise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      // Dynamic classic scripts default to async. Disabling async keeps
      // manifest insertion order when one ensure() call needs several keys,
      // while the browser may still fetch those files concurrently.
      script.async = false;
      script.src = src;
      script.dataset.datasetKey = key;
      script.onload = () => {
        loadPromises.delete(key);
        if (registry.isLoaded(key)) {
          resolve();
          return;
        }
        script.remove();
        reject(new Error(`Dataset script did not register ${key}`));
      };
      script.onerror = () => {
        loadPromises.delete(key);
        script.remove();
        reject(new Error(`Failed to load dataset script: ${src}`));
      };
      document.head.appendChild(script);
    });
    loadPromises.set(key, promise);
    return promise;
  }

  function ensure(keys = []) {
    return Promise.all(uniqueKnownKeys(keys).map(loadOne)).then(() => undefined);
  }

  function allowsIntentPrefetch() {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (connection?.saveData) return false;
    return !/^(slow-)?2g$/i.test(connection?.effectiveType || '');
  }

  function prefetch(keys = []) {
    if (!registry || !allowsIntentPrefetch()) return;
    uniqueKnownKeys(keys).forEach((key) => {
      if (registry.isLoaded(key) || loadPromises.has(key) || prefetchLinks.has(key)) return;
      const src = registry.srcForKey(key);
      if (!src) return;
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.as = 'script';
      link.href = src;
      link.dataset.datasetKey = key;
      link.onerror = () => {
        prefetchLinks.delete(key);
        link.remove();
      };
      prefetchLinks.set(key, link);
      document.head.appendChild(link);
    });
  }

  return Object.freeze({ ready, ensure, prefetch });
})();
