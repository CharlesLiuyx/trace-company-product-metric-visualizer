/* Pages Runtime Data Module. Source/standalone pages retain their complete
 * SSOTs; only the generated Pages catalog installs a split-data manifest.
 * The Interface owns readiness, deduplication, retry, immutable-version
 * validation and in-place hydration. Callers never fetch SSOT files. */
(function (global) {
  'use strict';
  let manifest = null;
  let catalog = null;
  const loaded = new Set();
  const pending = new Map();
  const listeners = new Set();

  function install(input) {
    if (manifest) throw new Error('Runtime data manifest already installed');
    if (input?.schema !== 'trace-runtime-data/v1') throw new Error('Invalid runtime data manifest');
    manifest = input;
  }

  function bind(value) { catalog = value; }

  function idsFor({ companies = [], family = '' } = {}) {
    if (!manifest) return [];
    if (family) {
      if (!Object.hasOwn(manifest.families, family)) throw new Error(`Unknown runtime data family: ${family}`);
      return manifest.families[family] ? [manifest.families[family]] : [];
    }
    return [...new Set(companies)].map((company) => {
      const id = manifest.companies[company];
      if (!id) throw new Error(`Unknown runtime data company: ${company}`);
      return id;
    });
  }

  function ready(requirement) {
    return idsFor(requirement).every(isLoaded);
  }

  function isLoaded(id) {
    if (loaded.has(id)) return true;
    // Complete global tables also satisfy company details. Do not require a
    // redundant company request after both authored families are in memory.
    return id.startsWith('company:')
      && loaded.has(manifest.families.company)
      && loaded.has(manifest.families.statement);
  }

  function upgrade(target, record) {
    // Preserve catalog/Map references while removing summary-only fields.
    Object.keys(target).forEach((key) => { delete target[key]; });
    Object.assign(target, record);
  }

  function apply(chunk) {
    if (!catalog) throw new Error('Runtime data catalog is not bound');
    // Validate the whole contribution before mutating any record.
    const financial = (chunk.financialRecords || []).map((record) => {
      const target = catalog.financialRecordByKey.get(record.key);
      if (!target) throw new Error(`Unknown financial record: ${record.key}`);
      return [target, record];
    });
    const metadata = (chunk.companyMetadata || []).map((record) => {
      const target = catalog.companyMetadata.find((item) => item.key === record.key);
      if (!target) throw new Error(`Unknown company metadata: ${record.key}`);
      return [target, record];
    });
    financial.forEach(([target, record]) => upgrade(target, record));
    metadata.forEach(([target, record]) => upgrade(target, record));
    if (chunk.metricObservations) global.METRIC_OBSERVATIONS = chunk.metricObservations;
    listeners.forEach((listener) => listener({
      financialRecords: financial.map(([target]) => target),
      companyMetadata: metadata.map(([target]) => target),
    }));
  }

  function load(id) {
    if (isLoaded(id)) return Promise.resolve();
    if (pending.has(id)) return pending.get(id);
    const entry = manifest.chunks[id];
    if (!entry) return Promise.reject(new Error(`Missing runtime data chunk: ${id}`));
    const promise = (async () => {
      const response = await global.fetch(entry.src);
      if (!response.ok) throw new Error(`Runtime data unavailable (${response.status}): ${id}`);
      const bytes = await response.arrayBuffer();
      const digest = await global.crypto.subtle.digest('SHA-256', bytes);
      const hex = Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, '0')).join('');
      if (hex !== entry.sha256) throw new Error(`Runtime data integrity mismatch: ${id}`);
      const chunk = JSON.parse(new TextDecoder().decode(bytes));
      if (chunk.schema !== 'trace-runtime-chunk/v1' || chunk.version !== manifest.version || chunk.id !== id) {
        throw new Error(`Runtime data version mismatch: ${id}`);
      }
      apply(chunk);
      loaded.add(id);
    })().finally(() => pending.delete(id));
    pending.set(id, promise);
    return promise;
  }

  function ensure(requirement) {
    return Promise.all(idsFor(requirement).map(load)).then(() => undefined);
  }

  function subscribe(listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  }

  global.TraceRuntimeData = Object.freeze({ install, bind, ready, ensure, subscribe });
})(window);
