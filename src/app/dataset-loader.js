/* Trace viewer · dataset-loader.js
 * Deep Runtime Data Loader Module on top of TraceDatasetRegistry.
 *
 * Callers express intent through a small Interface: ready(), ensure(),
 * preload(), prefetch(), warmRasterAssets() and speculativeLoadsAllowed().
 * Request deduplication, script registration checks, failure recovery,
 * and network-aware speculative fetches stay in the Implementation.
 *
 * Loading-state contract per key: idle stub -> loading (one in-flight
 * promise, shared by every caller) -> loaded (registry) or failed (the
 * promise is dropped so the next ensure()/preload() retries with a fresh
 * request). preload() is the background path: it settles every key
 * independently, never rejects, and only warns once per failing key —
 * a later user-driven ensure() surfaces the retryable error UI. It also
 * warms each key's raster annotations, so a preloaded period or company
 * paints its logos together with the chart instead of one RTT later.
 * Standalone/render harnesses have no manifest, so every operation is a
 * no-op. */

const datasetLoader = (() => {
  const registry = window.TraceDatasetRegistry || null;
  const loadPromises = new Map();
  const prefetchLinks = new Map();
  const preloadWarnedKeys = new Set();
  // Detached Image elements keep warmed raster bytes in the memory cache
  // until the SVG references them; bounded so a long browsing session does
  // not pin every logo it ever warmed.
  const warmedImages = new Map();
  const WARM_IMAGE_LIMIT = 512;

  function uniqueKnownKeys(keys = []) {
    return [...new Set(keys.filter(Boolean))]
      .filter((key) => registry?.isKnown(key));
  }

  function ready(keys = []) {
    if (!registry) return true;
    return uniqueKnownKeys(keys).every((key) => registry.isLoaded(key));
  }

  function loadOne(key, { priority = '' } = {}) {
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
      // Speculative loads yield to the adapter a draw is waiting on.
      if (priority) script.setAttribute('fetchpriority', priority);
      script.dataset.datasetKey = key;
      script.onload = () => {
        loadPromises.delete(key);
        // The adapter registered itself on execution; the DOM node has no
        // further purpose, and company-scope preloading would otherwise
        // accumulate hundreds of dead script tags over a browsing session.
        script.remove();
        if (registry.isLoaded(key)) {
          resolve();
          return;
        }
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
    return Promise.all(uniqueKnownKeys(keys).map((key) => loadOne(key))).then(() => undefined);
  }

  /* Background bulk loading (company-scope and visible-company preload).
   * Unlike ensure(), one failing key neither rejects the batch nor blocks
   * the other keys; the failure is remembered only to deduplicate the
   * console warning. Every key that is (or becomes) loaded also gets its
   * raster annotations warmed. */
  function preload(keys = []) {
    if (!registry || !allowsIntentPrefetch()) return Promise.resolve();
    return Promise.all(uniqueKnownKeys(keys).map((key) =>
      loadOne(key, { priority: 'low' })
        .then(() => warmRasterAssets(key))
        .catch((error) => {
          if (preloadWarnedKeys.has(key)) return;
          preloadWarnedKeys.add(key);
          console.warn(`Dataset preload failed for ${key}; it will retry on demand.`, error);
        })
    )).then(() => undefined);
  }

  /* The browser requests an adapter's raster annotations only once the
   * rendered SVG references them, so without this the logos of a freshly
   * loaded chart pop in one round trip after the chart itself. Warming
   * them through detached, pre-decoded Image elements as soon as the
   * adapter is in memory lets the committed SVG paint complete. data: URIs
   * (standalone builds) need no network and are skipped. */
  function rasterAssetHrefs(key) {
    const dataset = (window.DATASETS || []).find((item) => item && item.key === key);
    return [...new Set((dataset?.rasterAnnotations || [])
      .map((item) => String(item?.href || item?.src || ''))
      .filter((href) => href && !/^data:/i.test(href)))];
  }
  function warmRasterAssets(key) {
    if (!registry || !allowsIntentPrefetch() || !registry.isLoaded(key)) return;
    rasterAssetHrefs(key).forEach((href) => {
      if (warmedImages.has(href)) return;
      const image = new Image();
      image.decoding = 'async';
      image.setAttribute('fetchpriority', 'low');
      image.src = href;
      warmedImages.set(href, image);
      if (typeof image.decode === 'function') image.decode().catch(() => {});
      if (warmedImages.size > WARM_IMAGE_LIMIT) warmedImages.delete(warmedImages.keys().next().value);
    });
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

  return Object.freeze({
    ready,
    ensure,
    preload,
    prefetch,
    warmRasterAssets,
    speculativeLoadsAllowed: allowsIntentPrefetch,
  });
})();
