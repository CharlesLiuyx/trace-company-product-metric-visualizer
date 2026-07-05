/* Trace viewer · shell.js
 * App chrome: theme + language application, static translations, sidebar
 * collapse/resize, toolbar height sync, control icons, and the shared
 * header search-controller factory. */

function isDesktopLayout() {
  return window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT + 1}px)`).matches;
}
function sidebarBounds() {
  const viewport = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  const responsiveMax = isDesktopLayout() && viewport ? Math.floor(viewport * 0.45) : SIDEBAR_MAX;
  return { min: SIDEBAR_MIN, max: Math.max(SIDEBAR_MIN, Math.min(SIDEBAR_MAX, responsiveMax)) };
}

function moonIcon() {
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M12 3a6.7 6.7 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>';
}
function sunIcon() {
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>';
}
function sortIcon(direction) {
  const arrow = direction === 'asc' ? '<path d="M7 17V7"/><path d="m4 10 3-3 3 3"/>' : '<path d="M7 7v10"/><path d="m4 14 3 3 3-3"/>';
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">${arrow}<path d="M13 8h7"/><path d="M13 12h5"/><path d="M13 16h3"/></svg>`;
}
function directionArrowPath(direction, x = 18) {
  return direction === 'asc'
    ? `<path d="M${x} 17V7"/><path d="m${x - 3} 10 3-3 3 3"/>`
    : `<path d="M${x} 7v10"/><path d="m${x - 3} 14 3 3 3-3"/>`;
}
function alphabetArrowPath(direction, x = 18) {
  return directionArrowPath(direction === 'asc' ? 'desc' : 'asc', x);
}
function sortDirectionIcon(direction, sortKey = '') {
  if (sortKey === 'name') {
    return `<svg viewBox="0 0 24 24" aria-hidden="true"><text x="4" y="9" fill="currentColor" font-size="8" font-weight="800" stroke="none">A</text><text x="4" y="19" fill="currentColor" font-size="8" font-weight="800" stroke="none">Z</text><g fill="none" stroke="currentColor">${alphabetArrowPath(direction, 18)}</g></svg>`;
  }
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">${directionArrowPath(direction, 12)}<path d="M8 8h8"/><path d="M9 16h6"/></svg>`;
}
// show-more / show-less chevrons: the strip expands downward into wrapped
// rows, so the toggle reads as "more below" / "fold back up"
function periodExpandIcon(expanded) {
  return expanded
    ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="m17 18-5-5-5 5"/><path d="m17 11-5-5-5 5"/></svg>'
    : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="m7 6 5 5 5-5"/><path d="m7 13 5 5 5-5"/></svg>';
}
function companySortFieldIcon(sortKey, direction = '') {
  const arrow = direction ? directionArrowPath(direction, 18) : '';
  if (sortKey === 'recent') {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><circle cx="8.5" cy="8.5" r="4.5"/><path d="M8.5 6v3l2 1.2"/><path d="M4 18h8"/><path d="M4 21h5"/>${arrow}</svg>`;
  }
  if (sortKey === 'marketCap') {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M5 18V11"/><path d="M9 18V7"/><path d="M13 18v-4"/><path d="M4 18h10"/><path d="M9 4v3"/>${arrow}</svg>`;
  }
  if (sortKey === 'netProfit') {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M4 16l4-4 3 3 5-7"/><path d="M13 8h3v3"/><path d="M4 20h10"/>${arrow}</svg>`;
  }
  if (sortKey === 'founded') {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><rect x="4" y="5" width="10" height="12" rx="1.5"/><path d="M7 3v4"/><path d="M11 3v4"/><path d="M4 9h10"/><path d="M7 12h1"/><path d="M11 12h1"/>${arrow}</svg>`;
  }
  return `<svg viewBox="0 0 24 24" aria-hidden="true"><text x="4" y="9" fill="currentColor" font-size="8" font-weight="800" stroke="none">A</text><text x="4" y="19" fill="currentColor" font-size="8" font-weight="800" stroke="none">Z</text><g fill="none" stroke="currentColor">${direction ? alphabetArrowPath(direction, 18) : '<path d="M16 7h4"/><path d="M16 17h4"/>'}</g></svg>`;
}
function companySortIcon() {
  return companySortFieldIcon(state.companySort, state.companySortDirection);
}
function syncThemeControls() {
  document.documentElement.dataset.theme = state.theme;
  themeToggle.innerHTML = state.theme === 'dark' ? moonIcon() : sunIcon();
  const label = state.theme === 'dark' ? t('themeToggleLight') : t('themeToggleDark');
  themeToggle.setAttribute('aria-label', label);
  themeToggle.title = label;
  themeToggle.setAttribute('aria-pressed', state.theme === 'dark' ? 'true' : 'false');
}
function applyStaticTranslations() {
  document.documentElement.lang = I18N_API.htmlLang ? I18N_API.htmlLang(state.language) : state.language === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-title]').forEach((element) => {
    element.title = t(element.dataset.i18nTitle);
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
    element.setAttribute('aria-label', t(element.dataset.i18nAriaLabel));
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    element.setAttribute('placeholder', t(element.dataset.i18nPlaceholder));
  });
  languageToggleText.textContent = t('languageToggleText');
  languageToggle.setAttribute('aria-label', t('languageToggleTitle'));
  languageToggle.title = t('languageToggleTitle');
  syncThemeControls();
  syncCompanySortControls();
  syncPeriodSortToggle();
  syncPeriodExpansionControls();
  syncSidebarControls();
  syncToolbarHeight();
}
function setLanguage(language) {
  const nextLanguage = I18N_API.normalizeLanguage ? I18N_API.normalizeLanguage(language) : language;
  if (!I18N[nextLanguage]) return;
  if (state.language === nextLanguage) return;
  state.language = nextLanguage;
  writeStoredValue(LANGUAGE_KEY, nextLanguage);
  applyStaticTranslations();
  refresh();
}
function setTheme(theme) {
  if (theme !== 'light' && theme !== 'dark') return;
  if (state.theme === theme) return;
  state.theme = theme;
  writeStoredValue(THEME_KEY, theme);
  syncThemeControls();
  // Chart.js charts read theme tokens (cssVar via chartTheme()) only at
  // creation time, so already-rendered trend/comparison charts keep stale
  // colors until rebuilt. Theme change is the view-only repaint case the
  // refresh() note in controls.js describes: sidebar/controls state is
  // untouched, so draw() alone is enough.
  draw();
}
function sidebarToggleIcon(expanded) {
  const arrow = expanded ? '<path d="m16 9-3 3 3 3"/>' : '<path d="m13 9 3 3-3 3"/>';
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/>${arrow}</svg>`;
}
function applySidebarWidth(width, persist = false) {
  const bounds = sidebarBounds();
  const nextWidth = Math.round(clamp(width, bounds.min, bounds.max));
  state.sidebarWidth = nextWidth;
  document.documentElement.style.setProperty('--sidebar-width', `${nextWidth}px`);
  sidebarResizer.setAttribute('aria-valuemin', String(bounds.min));
  sidebarResizer.setAttribute('aria-valuemax', String(bounds.max));
  sidebarResizer.setAttribute('aria-valuenow', String(nextWidth));
  if (persist) writeStoredValue(SIDEBAR_WIDTH_KEY, nextWidth);
}
function syncToolbarHeight() {
  const height = Math.ceil(topShell.getBoundingClientRect().height || 52);
  document.documentElement.style.setProperty('--toolbar-height', `${height}px`);
  const controlHeight = Math.ceil(controlStrip?.getBoundingClientRect().height || 46);
  const actionHeight = Math.ceil(viewActionbar?.getBoundingClientRect().height || 32);
  document.documentElement.style.setProperty('--control-strip-height', `${controlHeight}px`);
  document.documentElement.style.setProperty('--view-actionbar-height', `${actionHeight}px`);
}
function syncSidebarControls() {
  const expanded = !state.sidebarCollapsed;
  app.classList.toggle('sidebar-collapsed', state.sidebarCollapsed);
  sidebarToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  const label = expanded ? t('collapseDatasetPanel') : t('showDatasetPanel');
  sidebarToggle.setAttribute('aria-label', label);
  sidebarToggle.title = label;
  sidebarToggle.innerHTML = sidebarToggleIcon(expanded);
  if (sidebarRestoreToggle) {
    const restoreLabel = t('showDatasetPanel');
    sidebarRestoreToggle.hidden = expanded;
    sidebarRestoreToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    sidebarRestoreToggle.setAttribute('aria-label', restoreLabel);
    sidebarRestoreToggle.title = restoreLabel;
    sidebarRestoreToggle.innerHTML = sidebarToggleIcon(false);
  }
  sidebarResizer.tabIndex = expanded && isDesktopLayout() ? 0 : -1;
  sidebarResizer.setAttribute('aria-hidden', expanded && isDesktopLayout() ? 'false' : 'true');
}
function setSidebarCollapsed(collapsed, persist = true, redraw = true) {
  state.sidebarCollapsed = collapsed;
  syncSidebarControls();
  if (persist) writeStoredValue(SIDEBAR_COLLAPSED_KEY, collapsed);
  if (redraw) draw();
}
function syncResponsiveLayout() {
  syncToolbarHeight();
  applySidebarWidth(state.sidebarWidth);
  syncSidebarControls();
}

function createHeaderSearchController({ section, input, toggle, render, navigate }) {
  const isOpen = () => section.classList.contains('search-open');
  const hasActiveFilter = () => Boolean(clean(input.value));
  const sync = () => {
    const open = isOpen();
    const active = open || hasActiveFilter();
    toggle.classList.toggle('active', active);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  };
  const setOpen = (open) => {
    const nextOpen = open || hasActiveFilter();
    section.classList.toggle('search-open', nextOpen);
    sync();
    if (nextOpen) requestAnimationFrame(() => input.focus());
  };
  const focusInput = () => {
    setOpen(true);
  };
  toggle.addEventListener('click', () => {
    setOpen(!isOpen());
  });
  input.addEventListener('input', () => {
    render();
    sync();
  });
  input.addEventListener('keydown', (e) => {
    if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && isPlainKeyEvent(e)) {
      if (navigate?.(e.key === 'ArrowDown' ? 1 : -1)) e.preventDefault();
      return;
    }
    if (e.key !== 'Escape') return;
    if (input.value) {
      input.value = '';
      render();
      sync();
      return;
    }
    setOpen(false);
    toggle.focus();
  });
  document.addEventListener('pointerdown', (e) => {
    if (!isOpen()) return;
    if (section.contains(e.target)) return;
    setOpen(false);
  });
  return { sync, setOpen, focusInput };
}

languageToggle.addEventListener('click', () => {
  setLanguage(I18N_API.nextLanguage ? I18N_API.nextLanguage(state.language) : state.language === 'en' ? 'zh' : 'en');
});
themeToggle.addEventListener('click', () => {
  setTheme(state.theme === 'light' ? 'dark' : 'light');
});
sidebarToggle.addEventListener('click', () => {
  setSidebarCollapsed(!state.sidebarCollapsed);
});
sidebarRestoreToggle?.addEventListener('click', () => {
  setSidebarCollapsed(false);
});

let sidebarDrag = null;
sidebarResizer.addEventListener('pointerdown', (e) => {
  if (!isDesktopLayout() || state.sidebarCollapsed) return;
  sidebarDrag = { pointerId: e.pointerId, x: e.clientX, width: state.sidebarWidth };
  sidebarResizer.setPointerCapture(e.pointerId);
  document.body.classList.add('is-resizing-sidebar');
  e.preventDefault();
});
sidebarResizer.addEventListener('pointermove', (e) => {
  if (!sidebarDrag || e.pointerId !== sidebarDrag.pointerId) return;
  applySidebarWidth(sidebarDrag.width + e.clientX - sidebarDrag.x);
});
function finishSidebarResize(e) {
  if (!sidebarDrag || e.pointerId !== sidebarDrag.pointerId) return;
  sidebarDrag = null;
  document.body.classList.remove('is-resizing-sidebar');
  applySidebarWidth(state.sidebarWidth, true);
  draw();
}
sidebarResizer.addEventListener('pointerup', finishSidebarResize);
sidebarResizer.addEventListener('pointercancel', finishSidebarResize);
sidebarResizer.addEventListener('keydown', (e) => {
  if (!isDesktopLayout() || state.sidebarCollapsed) return;
  const bounds = sidebarBounds();
  let nextWidth = state.sidebarWidth;
  const step = matchesHotkey(e, 'sidebarFastResizeKey') ? 48 : 16;
  if (e.key === 'ArrowLeft') nextWidth -= step;
  else if (e.key === 'ArrowRight') nextWidth += step;
  else if (e.key === 'Home') nextWidth = bounds.min;
  else if (e.key === 'End') nextWidth = bounds.max;
  else return;
  e.preventDefault();
  applySidebarWidth(nextWidth, true);
  draw();
});
