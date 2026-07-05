/* Trace viewer · i18n-runtime.js
 * Viewer bindings over window.SANKEY_I18N: t(), language normalization,
 * and per-language localization caches for domain objects. UI string
 * bundles and the translation pipeline live in src/i18n.js /
 * src/i18n-dictionaries.js — this module keeps no fallback copy. */

const I18N_API = window.SANKEY_I18N;
if (!I18N_API || !I18N_API.ui || !I18N_API.t) {
  throw new Error('src/i18n.js must load before the viewer app modules');
}
const I18N = I18N_API.ui;
const i18nObjectCaches = {
  datasets: new Map(),
  financialRecords: new Map(),
  revenueRecords: new Map(),
  companies: new Map(),
  records: new Map(),
  groups: new Map(),
};
const i18nTextCache = new Map();

function t(key, values = {}, language = state?.language) {
  return I18N_API.t(key, values, languageCode(language));
}
function languageCode(language = state?.language) {
  return I18N_API.normalizeLanguage(language);
}
function languageObjectCache(cache, language = state.language) {
  const code = languageCode(language);
  if (!cache.has(code)) cache.set(code, new WeakMap());
  return cache.get(code);
}
function cachedLocalizedObject(cache, source, localizer, language = state.language) {
  const code = languageCode(language);
  if (!source || typeof source !== 'object' || code === (I18N_API.defaultLanguage || 'en') || !localizer) return source;
  const byLanguage = languageObjectCache(cache, code);
  if (!byLanguage.has(source)) byLanguage.set(source, localizer(source, code));
  return byLanguage.get(source);
}
function countText(oneKey, manyKey, count) {
  return t(count === 1 ? oneKey : manyKey, { count });
}

function localizedDataset(dataset, language = state.language) {
  return cachedLocalizedObject(i18nObjectCaches.datasets, dataset, I18N_API.localizeDataset, language);
}
function localizedFinancialRecord(record, language = state.language) {
  return cachedLocalizedObject(i18nObjectCaches.financialRecords, record, I18N_API.localizeFinancialRecord, language);
}
function localizedRevenueRecord(record, language = state.language) {
  return cachedLocalizedObject(i18nObjectCaches.revenueRecords, record, I18N_API.localizeRevenueMetricRecord, language);
}
function localizedCompanyRecord(company, language = state.language) {
  return cachedLocalizedObject(i18nObjectCaches.companies, company, I18N_API.localizeCompanyMetadata, language);
}
function localizedText(value, language = state.language) {
  if (!I18N_API.text || value == null) return value;
  const code = languageCode(language);
  if (code === (I18N_API.defaultLanguage || 'en')) return value;
  const key = `${code}\u0000${String(value)}`;
  if (!i18nTextCache.has(key)) i18nTextCache.set(key, I18N_API.text(value, code));
  return i18nTextCache.get(key);
}
