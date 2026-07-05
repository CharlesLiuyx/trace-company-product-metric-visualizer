/* Trace viewer · company-panel.js
 * Company list rendering, scope counts, single/multi company selection,
 * the company sort menu, and company search/keyboard wiring. */

function visibleCompanyGroups() {
  return sortedCompanyGroups(groups.filter((group) => matches(searchTextForGroup(group), companySearch.value)));
}
function activeCompanyButton() {
  const key = companyKey(state.company);
  return key ? companyList.querySelector(`[data-company-key="${escapeSelector(key)}"]`) : null;
}
function focusActiveCompanyItem() {
  const button = activeCompanyButton();
  if (!button) return;
  button.focus({ preventScroll: true });
  button.scrollIntoView({ block: 'nearest' });
}
function groupMetricCount(group) {
  return (group?.records?.length || 0) + (group?.revenueRecords?.length || 0);
}
function companyMetricDataPointCount(company) {
  if (!company) return 0;
  const hasCompanyInfo = hasCompanyMetricData(company, 'companyInfo') ? 1 : 0;
  const statementCount = metricGroupForCompany(company, 'incomeStatement')?.records?.length || 0;
  const revenueCount = metricGroupForCompany(company, 'revenue')?.revenueRecords?.length || 0;
  return hasCompanyInfo + statementCount + revenueCount;
}
function scopeMetricDataPointCount(companies = scopeCompanies()) {
  return uniqueCompanies(companies).reduce((sum, company) => sum + companyMetricDataPointCount(company), 0);
}
function setScopeCount(element, value, options = {}) {
  if (!element) return;
  const text = value == null ? '' : String(value);
  element.textContent = text;
  if (options.title) element.title = options.title;
  else element.removeAttribute('title');
  if (options.ariaLabel) element.setAttribute('aria-label', options.ariaLabel);
}
function syncEntityScopeCounts(companyCount = groups.length) {
  const selectedCompanyCount = scopeCompanies().length;
  const totalCompanyCount = Math.max(0, companyCount);
  setScopeCount(companyScopeCount, `${selectedCompanyCount}/${totalCompanyCount}`, {
    title: `${selectedCompanyCount} selected of ${totalCompanyCount} companies`,
    ariaLabel: `${selectedCompanyCount} selected of ${totalCompanyCount} companies`,
  });
  setScopeCount(metricScopeCount, scopeMetricDataPointCount());
  setScopeCount(viewScopeCount, allowedViewModesForMetric(state.metricMode).length);
}
function selectCompanyGroup(group, { closeSearch = false, focusCompany = false, scrollKind = null } = {}) {
  if (!group) return;
  clearMultiPeriodScope();
  const targetMode = bestMetricModeForCompany(group.company, state.metricMode);
  const targetGroup = groupFor(group.company, targetMode) || group;
  const groupRecords = sortedRecords(targetGroup);
  state.company = group.company;
  if (!state.multiCompanyMode) syncSingleCompanyScope();
  else if (!state.selectedCompanies.includes(group.company)) setSelectedCompanies([...state.selectedCompanies, group.company]);
  if (state.metricMode !== targetMode) {
    // record selection happens below, so skip the reconcile pass
    commitMetricViewMode(targetMode, defaultViewModeForMetric(targetMode), { reconcile: false });
  }
  const next = targetMode === 'incomeStatement'
    ? groupRecords.find((record) => matches(searchTextForRecord(record), periodSearch.value)) || groupRecords[0]
    : targetMode === 'companyInfo' ? groupRecords[0] : null;
  if (next) {
    state.activeIndex = next.index;
    setCompanyActiveRecord(next);
    syncDatasetHash(next);
  } else {
    clearDatasetHash();
  }
  const targetScrollKind = targetMode === 'companyInfo' ? 'company' : targetMode === 'revenue' ? 'revenue' : 'statement';
  refresh();
  if (closeSearch) companySearchController.setOpen(false);
  if (focusCompany) requestAnimationFrame(focusActiveCompanyItem);
  scrollActiveTableRow(scrollKind || targetScrollKind);
}
function toggleCompanyInScope(group, { focusCompany = false, closeSearch = false } = {}) {
  if (!group) return;
  clearMultiPeriodScope();
  const company = group.company;
  let nextCompanies = scopeCompanies();
  if (!state.multiCompanyMode) {
    state.multiCompanyMode = true;
    nextCompanies = uniqueCompanies([state.company, company]);
    state.company = company;
  } else if (nextCompanies.includes(company)) {
    if (nextCompanies.length > 1) {
      nextCompanies = nextCompanies.filter((item) => item !== company);
      if (state.company === company) state.company = nextCompanies[0] || state.company;
    }
  } else {
    nextCompanies.push(company);
    state.company = company;
  }

  setSelectedCompanies(nextCompanies);
  commitMetricViewMode(state.metricMode);
  refresh();
  if (closeSearch) companySearchController.setOpen(false);
  if (focusCompany) requestAnimationFrame(focusActiveCompanyItem);
  if (state.viewMode === 'table') scrollActiveTableRow(activeTableKind());
}
function exitMultiCompanyMode({ render = true, focusCompany = false } = {}) {
  if (!state.multiCompanyMode) return;
  state.multiCompanyMode = false;
  syncSingleCompanyScope();
  // scope collapse must not overwrite the user's persisted mode preference
  commitMetricViewMode(state.metricMode, state.viewMode, { persist: false });
  if (!render) return;
  refresh();
  if (focusCompany) requestAnimationFrame(focusActiveCompanyItem);
}

function moveCompanySelection(offset, { returnBoundary = false } = {}) {
  const visibleGroups = visibleCompanyGroups();
  if (!visibleGroups.length) return false;
  const focusedKey = document.activeElement?.closest?.('.company-item')?.dataset.companyKey;
  let index = focusedKey
    ? visibleGroups.findIndex((group) => companyKey(group.company) === focusedKey)
    : visibleGroups.findIndex((group) => group.company === state.company);
  if (index < 0) index = offset > 0 ? -1 : visibleGroups.length;
  const rawNextIndex = index + offset;
  if (returnBoundary && (rawNextIndex < 0 || rawNextIndex >= visibleGroups.length)) return 'boundary';
  const nextIndex = clamp(rawNextIndex, 0, visibleGroups.length - 1);
  selectCompanyGroup(visibleGroups[nextIndex], { focusCompany: true });
  return true;
}
function renderCompanies() {
  const visibleGroups = visibleCompanyGroups();
  syncEntityScopeCounts();
  companyList.innerHTML = '';
  const scope = selectedCompanySet();
  companyList.setAttribute('aria-multiselectable', state.multiCompanyMode ? 'true' : 'false');
  if (companyMultiExitToggle) companyMultiExitToggle.hidden = !state.multiCompanyMode;
  app.classList.toggle('company-multi-selecting', state.multiCompanyMode);
  if (!visibleGroups.length) {
    companyList.removeAttribute('aria-activedescendant');
    companyList.innerHTML = `<div class="empty-state">${escapeHtml(t('noMatchingCompanies'))}</div>`;
    return;
  }
  const selectedVisible = visibleGroups.some((group) => group.company === state.company);
  visibleGroups.forEach((group, index) => {
    const isActive = group.company === state.company;
    const isSelected = scope.has(group.company);
    const key = companyKey(group.company);
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'nav-item company-item' + (isSelected ? ' selected' : '') + (isActive ? ' active' : '');
    button.id = `company-option-${key}`;
    button.setAttribute('role', 'option');
    button.setAttribute('aria-selected', isSelected ? 'true' : 'false');
    if (isActive) button.setAttribute('aria-current', 'true');
    button.tabIndex = isActive || (!selectedVisible && index === 0) ? 0 : -1;
    button.dataset.company = group.company;
    button.dataset.companyKey = key;
    button.title = displayCompanyForGroup(group);
    button.innerHTML = `
      <div class="item-top">
        <span class="scope-check" aria-hidden="true"></span>
        <span class="item-name">${escapeHtml(displayCompanyForGroup(group))}</span>
        <span class="count-pill">${groupMetricCount(group)}</span>
      </div>
      <div class="item-meta company-item-meta">${escapeHtml(companySortMetaText(group))}</div>
    `;
    button.addEventListener('click', (event) => {
      if (matchesHotkey(event, 'scopeExtendClick') || state.multiCompanyMode) {
        toggleCompanyInScope(group, { closeSearch: false, focusCompany: true });
        return;
      }
      selectCompanyGroup(group, { closeSearch: true, focusCompany: true });
    });
    companyList.appendChild(button);
  });
  const activeId = selectedVisible ? `company-option-${companyKey(state.company)}` : '';
  if (activeId) companyList.setAttribute('aria-activedescendant', activeId);
  else companyList.removeAttribute('aria-activedescendant');
}

function companySortLabel(sortKey = state.companySort) {
  const key = COMPANY_SORT_CONFIG[sortKey]?.labelKey || COMPANY_SORT_CONFIG.name.labelKey;
  return t(key);
}
function companySortDirectionLabel(sortKey = state.companySort, direction = state.companySortDirection) {
  const config = COMPANY_SORT_CONFIG[sortKey] || COMPANY_SORT_CONFIG.name;
  const labelKey = direction === 'desc' ? config.descLabelKey : config.ascLabelKey;
  return t(labelKey);
}
function companySortActionLabel(sortKey, direction) {
  return t('companySortAction', {
    sort: companySortLabel(sortKey),
    direction: companySortDirectionLabel(sortKey, direction),
  });
}
function renderCompanySortOptions() {
  if (!companySortOptions) return;
  companySortOptions.innerHTML = COMPANY_SORT_KEYS.map((sortKey) => {
    const activeRow = sortKey === state.companySort;
    const label = companySortLabel(sortKey);
    const groupLabel = t('companySortDirectionGroup', { sort: label });
    const directionButtons = COMPANY_SORT_DIRECTIONS.map((direction) => {
      const active = activeRow && direction === state.companySortDirection;
      const actionLabel = companySortActionLabel(sortKey, direction);
      return `
        <button
          type="button"
          class="sort-direction-button${active ? ' active' : ''}"
          role="menuitemradio"
          data-company-sort="${escapeHtml(sortKey)}"
          data-company-sort-direction="${escapeHtml(direction)}"
          aria-checked="${active ? 'true' : 'false'}"
          aria-label="${escapeHtml(actionLabel)}"
          title="${escapeHtml(actionLabel)}"
        >${sortDirectionIcon(direction, sortKey)}</button>
      `;
    }).join('');
    return `
      <div class="sort-option-row${activeRow ? ' active' : ''}" role="none" data-company-sort-row="${escapeHtml(sortKey)}">
        <span class="sort-option-label">
          <span class="sort-option-icon">${companySortFieldIcon(sortKey)}</span>
          <span>${escapeHtml(label)}</span>
        </span>
        <span class="sort-direction-group" role="group" aria-label="${escapeHtml(groupLabel)}">
          ${directionButtons}
        </span>
      </div>
    `;
  }).join('');
}
function syncCompanySortControls() {
  if (!companySortToggle || !companySortOptions) return;
  renderCompanySortOptions();
  const label = t('companySortCurrent', { sort: companySortLabel(), direction: companySortDirectionLabel() });
  companySortToggle.innerHTML = companySortIcon();
  companySortToggle.title = label;
  companySortToggle.setAttribute('aria-label', label);
}
function setCompanySortMenuOpen(open) {
  if (!companySortToggle || !companySortOptions) return;
  companySortOptions.hidden = !open;
  companySortToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  if (open) {
    requestAnimationFrame(() => {
      const active = companySortOptions.querySelector('[aria-checked="true"]') || companySortOptions.querySelector('[data-company-sort][data-company-sort-direction]');
      active?.focus({ preventScroll: true });
    });
  }
}
function isCompanySortMenuOpen() {
  return companySortToggle?.getAttribute('aria-expanded') === 'true';
}
function setCompanySort(sortKey, direction) {
  if (!COMPANY_SORT_KEYS.includes(sortKey)) return;
  const nextDirection = normalizeCompanySortDirection(sortKey, direction);
  if (state.companySort === sortKey && state.companySortDirection === nextDirection) {
    setCompanySortMenuOpen(false);
    return;
  }
  state.companySort = sortKey;
  state.companySortDirection = nextDirection;
  writeStoredValue(COMPANY_SORT_KEY, sortKey);
  writeStoredValue(COMPANY_SORT_DIRECTION_KEY, nextDirection);
  syncCompanySortControls();
  renderCompanies();
  if (state.viewMode === 'table') renderTables();
  setCompanySortMenuOpen(false);
  requestAnimationFrame(focusActiveCompanyItem);
}
const companySearchController = createHeaderSearchController({
  section: companySection,
  input: companySearch,
  toggle: companySearchToggle,
  render: renderCompanies,
  navigate: moveCompanySelection,
});

function openCompanySearch() {
  if (state.sidebarCollapsed) setSidebarCollapsed(false);
  companySearchController.setOpen(true);
}
document.addEventListener('keydown', (e) => {
  if (e.isComposing || !matchesHotkey(e, 'companySearchKey')) return;
  e.preventDefault();
  openCompanySearch();
});
companyList.addEventListener('keydown', (e) => {
  if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;
  if (!isPlainKeyEvent(e)) return;
  e.preventDefault();
  const result = moveCompanySelection(e.key === 'ArrowDown' ? 1 : -1, { returnBoundary: true });
  if (result === 'boundary') companySearchController.focusInput();
});
companyMultiExitToggle?.addEventListener('click', () => {
  exitMultiCompanyMode({ focusCompany: true });
});

companySortToggle?.addEventListener('click', () => {
  setCompanySortMenuOpen(!isCompanySortMenuOpen());
});
companySortOptions?.addEventListener('click', (e) => {
  const button = e.target.closest('[data-company-sort][data-company-sort-direction]');
  if (!button) return;
  setCompanySort(button.dataset.companySort, button.dataset.companySortDirection);
  companySortToggle.focus();
});
companySortOptions?.addEventListener('keydown', (e) => {
  const buttons = [...companySortOptions.querySelectorAll('[data-company-sort][data-company-sort-direction]')];
  const current = document.activeElement?.closest?.('[data-company-sort][data-company-sort-direction]');
  const index = current ? buttons.indexOf(current) : -1;
  if (e.key === 'Escape') {
    e.preventDefault();
    setCompanySortMenuOpen(false);
    companySortToggle.focus();
  } else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    e.preventDefault();
    const next = e.key === 'ArrowDown' ? index + 2 : index - 2;
    buttons[clamp(next, 0, buttons.length - 1)]?.focus();
  } else if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
    e.preventDefault();
    const next = e.key === 'ArrowRight' ? index + 1 : index - 1;
    buttons[clamp(next, 0, buttons.length - 1)]?.focus();
  } else if (e.key === 'Home' || e.key === 'End') {
    e.preventDefault();
    buttons[e.key === 'Home' ? 0 : buttons.length - 1]?.focus();
  }
});
document.addEventListener('pointerdown', (e) => {
  if (!isCompanySortMenuOpen()) return;
  if (companySortMenu?.contains(e.target)) return;
  setCompanySortMenuOpen(false);
});
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape' || !isCompanySortMenuOpen()) return;
  setCompanySortMenuOpen(false);
});
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape' || e.isComposing || !state.multiCompanyMode) return;
  if (e.target === companySearch || e.target === periodSearch) return;
  if (companySortMenu?.contains(e.target)) return;
  e.preventDefault();
  exitMultiCompanyMode({ focusCompany: true });
});
