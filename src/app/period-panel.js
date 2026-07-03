/* Trace viewer · period-panel.js
 * Data-point-time (period) tree rendering, timeline colors, single/multi
 * period selection, and period search/sort/expand wiring. */

function updatePeriodScrollIndicator() {
  if (!periodScrollMeter || !periodScrollThumb || !periodList) return;
  const overflow = periodList.scrollWidth - periodList.clientWidth;
  const scrollable = isIncomeStatementMetric()
    && !state.periodExpanded
    && !periodSection.hidden
    && overflow > 20;
  periodScrollMeter.hidden = !scrollable;
  if (!scrollable) return;
  const trackWidth = periodScrollMeter.clientWidth || periodList.clientWidth;
  const maxScroll = Math.max(1, overflow);
  const thumbWidth = clamp(trackWidth * 0.08, 32, 72);
  const thumbLeft = (periodList.scrollLeft / maxScroll) * Math.max(0, trackWidth - thumbWidth);
  periodScrollThumb.style.width = `${thumbWidth.toFixed(1)}px`;
  periodScrollThumb.style.transform = `translateX(${thumbLeft.toFixed(1)}px)`;
}

function selectRecord(record, scrollKind = 'statement') {
  if (!record) return;
  clearMultiPeriodScope();
  state.activeIndex = record.index;
  state.company = record.company;
  setCompanyActiveRecord(record);
  if (!state.multiCompanyMode) syncSingleCompanyScope();
  else if (!state.selectedCompanies.includes(record.company)) setSelectedCompanies([...state.selectedCompanies, record.company]);
  syncDatasetHash(record);
  renderAll();
  draw({ renderTable: false, syncView: false });
  scrollActiveTableRow(scrollKind);
}
function descriptionForPeriodRecord(record, bucket) {
  if (!record) return '';
  const parts = [
    record.periodParts.quarterKey === ANNUAL_PERIOD_KEY ? t('annualPeriodTag') : record.periodParts.quarterKey,
    displayPeriodNote(record) || displayLabel(record),
  ];
  if ((bucket?.records || []).length > 1 || record.variantFeature) parts.push(variantLabel(record));
  return parts.map(clean).filter(Boolean).join(' · ');
}
function periodTreeFor(group) {
  const visibleRecords = sortedRecords(group).filter((record) => matches(searchTextForRecord(record), periodSearch.value));
  const yearMap = new Map();
  visibleRecords.forEach((record) => {
    const parts = record.periodParts;
    if (!yearMap.has(parts.yearKey)) {
      yearMap.set(parts.yearKey, {
        yearKey: parts.yearKey,
        fiscalYearNumber: parts.fiscalYearNumber,
        sortValue: record.sortValue,
        records: [],
        quarters: new Map(),
      });
    }
    const year = yearMap.get(parts.yearKey);
    year.records.push(record);
    year.sortValue = Math.max(year.sortValue, record.sortValue);
    if (!year.quarters.has(parts.quarterKey)) {
      year.quarters.set(parts.quarterKey, {
        key: parts.quarterKey,
        quarterNumber: parts.quarterNumber,
        records: [],
      });
    }
    year.quarters.get(parts.quarterKey).records.push(record);
  });
  const direction = state.sort === 'asc' ? 1 : -1;
  return Array.from(yearMap.values())
    .map((year) => {
      year.quarters.forEach((quarter) => {
        quarter.records = sortedVariantRecords(quarter.records);
      });
      const activeRecord = year.records.find((record) => record.index === state.activeIndex);
      const defaultRecord = sortedRecordList(year.records)[0];
      const selectedQuarterKey = (activeRecord || defaultRecord)?.periodParts.quarterKey || QUARTER_TAGS.find((quarter) => year.quarters.has(quarter)) || ANNUAL_PERIOD_KEY;
      const selectedBucket = year.quarters.get(selectedQuarterKey);
      const selectedRecord = activeRecord || selectedBucket?.records[0] || defaultRecord;
      return {
        ...year,
        active: Boolean(activeRecord),
        selectedQuarterKey,
        selectedBucket,
        selectedRecord,
        description: descriptionForPeriodRecord(selectedRecord, selectedBucket),
      };
    })
    .sort((a, b) => direction * (a.sortValue - b.sortValue) || a.yearKey.localeCompare(b.yearKey));
}

function timelineColors(record, group) {
  const values = (group?.records || []).map((item) => item.sortValue);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const ratio = max === min ? 1 : (record.sortValue - min) / (max - min);
  const hue = 204;
  const saturation = Math.round(10 + ratio * 63);
  const lightness = Math.round(67 - ratio * 32);
  return {
    dot: `hsl(${hue} ${saturation}% ${lightness}%)`,
    line: `hsl(${hue} ${Math.round(8 + ratio * 35)}% ${Math.round(86 - ratio * 20)}%)`,
    ring: `hsl(${hue} ${Math.round(10 + ratio * 40)}% ${Math.round(80 - ratio * 20)}%)`,
    activeRing: `hsl(${hue} ${Math.round(20 + ratio * 42)}% ${Math.round(88 - ratio * 12)}%)`,
  };
}

function finishPeriodScopeChange() {
  renderAll();
  draw({ renderTable: false, syncView: false });
  if (state.viewMode === 'table') scrollActiveTableRow('statement');
}
function togglePeriodInScope(record) {
  if (!record || record.company !== state.company) return;
  let next = state.selectedPeriodIndexes.slice();
  if (!state.multiPeriodMode) {
    exitMultiCompanyMode({ render: false });
    state.multiPeriodMode = true;
    next = [state.activeIndex, record.index];
  } else if (next.includes(record.index)) {
    if (next.length > 1) next = next.filter((index) => index !== record.index);
  } else {
    next.push(record.index);
    setCompanyActiveRecord(record);
  }
  setSelectedPeriods(next);
  finishPeriodScopeChange();
}
function exitMultiPeriodMode({ render = true } = {}) {
  if (!state.multiPeriodMode && !state.selectedPeriodIndexes.length) return;
  clearMultiPeriodScope();
  if (!render) return;
  finishPeriodScopeChange();
}
function visiblePeriodChipRecords(yearItems = periodTreeFor(groupFor(state.company))) {
  const chips = [];
  yearItems.forEach((year) => {
    const tagKeys = [...QUARTER_TAGS];
    if (year.quarters.has(ANNUAL_PERIOD_KEY)) tagKeys.push(ANNUAL_PERIOD_KEY);
    tagKeys.forEach((tag) => {
      const record = year.quarters.get(tag)?.records[0];
      if (record) chips.push(record);
    });
  });
  return chips;
}
function toggleAllVisiblePeriods() {
  if (state.metricMode !== 'incomeStatement') return;
  const chips = visiblePeriodChipRecords();
  if (!chips.length) return;
  const selected = new Set(state.selectedPeriodIndexes);
  const allSelected = state.multiPeriodMode && chips.every((record) => selected.has(record.index));
  if (allSelected) {
    exitMultiPeriodMode();
    return;
  }
  exitMultiCompanyMode({ render: false });
  state.multiPeriodMode = true;
  setSelectedPeriods(chips.map((record) => record.index));
  finishPeriodScopeChange();
}
function toggleYearPeriods(yearKey) {
  if (state.metricMode !== 'incomeStatement') return;
  const year = periodTreeFor(groupFor(state.company)).find((item) => item.yearKey === yearKey);
  if (!year) return;
  const chips = visiblePeriodChipRecords([year]);
  if (!chips.length) return;
  const selected = new Set(state.selectedPeriodIndexes);
  const allSelected = state.multiPeriodMode && chips.every((record) => selected.has(record.index));
  let next;
  if (allSelected) {
    const chipIndexes = new Set(chips.map((record) => record.index));
    next = state.selectedPeriodIndexes.filter((index) => !chipIndexes.has(index));
  } else {
    exitMultiCompanyMode({ render: false });
    state.multiPeriodMode = true;
    next = [...state.selectedPeriodIndexes, ...chips.map((record) => record.index)];
  }
  setSelectedPeriods(next);
  finishPeriodScopeChange();
}

function renderPeriods() {
  const group = groupFor(state.company);
  const yearItems = periodTreeFor(group);
  const periodScope = new Set(state.multiPeriodMode ? state.selectedPeriodIndexes : []);
  periodList.setAttribute('aria-multiselectable', state.multiPeriodMode ? 'true' : 'false');
  if (periodMultiExitToggle) periodMultiExitToggle.hidden = !state.multiPeriodMode;
  app.classList.toggle('period-multi-selecting', state.multiPeriodMode);
  periodList.innerHTML = '';
  if (!yearItems.length) {
    periodList.innerHTML = `<div class="empty-state">${escapeHtml(t('noMatchingTimePoints'))}</div>`;
    updatePeriodScrollIndicator();
    return;
  }
  yearItems.forEach((year) => {
    const item = document.createElement('div');
    item.className = 'period-item period-year-item' + (year.active ? ' active' : '');
    item.setAttribute('role', 'group');
    item.setAttribute('aria-label', [year.yearKey, year.description].filter(Boolean).join(', '));
    const colors = timelineColors(year.selectedRecord || year.records[0], group);
    item.style.setProperty('--timeline-color', colors.dot);
    item.style.setProperty('--timeline-line-color', colors.line);
    item.style.setProperty('--timeline-ring-color', colors.ring);
    item.style.setProperty('--timeline-active-ring-color', colors.activeRing);
    const tagKeys = [...QUARTER_TAGS];
    if (year.quarters.has(ANNUAL_PERIOD_KEY)) tagKeys.push(ANNUAL_PERIOD_KEY);
    let chipCount = 0;
    let selectedChipCount = 0;
    const quarterTags = tagKeys.map((tag) => {
      const bucket = year.quarters.get(tag);
      const record = bucket?.records[0];
      const isActive = Boolean(bucket?.records.some((entry) => entry.index === state.activeIndex));
      const isSelected = Boolean(state.multiPeriodMode && bucket?.records.some((entry) => periodScope.has(entry.index)));
      if (record) chipCount += 1;
      if (isSelected) selectedChipCount += 1;
      const title = record ? [displayPeriod(record), displayPeriodNote(record) || displayLabel(record)].filter(Boolean).join(', ') : `${year.yearKey} ${tag}`;
      return `
        <button
          type="button"
          class="quarter-tag${isActive ? ' active' : ''}${isSelected ? ' selected' : ''}"
          ${record ? `data-index="${record.index}" data-hover-indexes="${bucket.records.map((entry) => entry.index).join(',')}"` : 'disabled aria-disabled="true"'}
          title="${escapeHtml(title)}"
          aria-pressed="${(state.multiPeriodMode ? isSelected : isActive) ? 'true' : 'false'}"
        >${escapeHtml(tag === ANNUAL_PERIOD_KEY ? t('annualPeriodTag') : tag)}</button>
      `;
    }).join('');
    const yearAllSelected = Boolean(state.multiPeriodMode && chipCount && selectedChipCount === chipCount);
    const yearPartiallySelected = Boolean(selectedChipCount && !yearAllSelected);
    const selectedRecords = year.selectedBucket?.records || [];
    const showVariants = selectedRecords.length > 1 || selectedRecords.some((record) => record.variantFeature);
    const variants = showVariants ? `
      <span class="variant-row" aria-label="${escapeHtml(t('viewVariantsLabel'))}">
        ${selectedRecords.map((record) => `
          <button
            type="button"
            class="variant-chip${record.index === state.activeIndex ? ' active' : ''}${periodScope.has(record.index) ? ' selected' : ''}"
            data-index="${record.index}" data-hover-indexes="${record.index}"
            title="${escapeHtml(displayLabel(record) || record.dataset.key)}"
            aria-pressed="${(state.multiPeriodMode ? periodScope.has(record.index) : record.index === state.activeIndex) ? 'true' : 'false'}"
          >${escapeHtml(variantLabel(record))}</button>
        `).join('')}
      </span>
    ` : '';
    item.innerHTML = `
      <span class="timeline-marker" aria-hidden="true"><span class="timeline-dot"></span></span>
      <span class="timeline-content period-year-content">
        <span class="period-year-row">
          <button
            type="button"
            class="item-name period-year-name period-year-toggle${yearAllSelected ? ' selected' : ''}${yearPartiallySelected ? ' partial' : ''}"
            data-hover-indexes="${year.records.map((record) => record.index).join(',')}"
            title="${escapeHtml(t('periodYearToggleTitle', { year: year.yearKey }))}"
            aria-pressed="${yearAllSelected ? 'true' : 'false'}"
          >${escapeHtml(year.yearKey)}</button>
          <span class="quarter-tags">${quarterTags}</span>
        </span>
        ${variants}
        <span class="period-description">${escapeHtml(year.description)}</span>
      </span>
    `;
    item.querySelectorAll('button[data-index]').forEach((button) => {
      button.addEventListener('click', (event) => {
        const record = recordByIndex(Number(button.dataset.index));
        if (matchesHotkey(event, 'scopeExtendClick') || state.multiPeriodMode) {
          togglePeriodInScope(record);
          return;
        }
        selectRecord(record);
      });
    });
    item.querySelector('.period-year-toggle')?.addEventListener('click', () => {
      toggleYearPeriods(year.yearKey);
    });
    // hovering a period chip (or a year toggle) outlines its comparison card(s)
    item.querySelectorAll('[data-hover-indexes]').forEach((button) => {
      const indexes = button.dataset.hoverIndexes.split(',').map(Number);
      button.addEventListener('mouseenter', () => setComparisonPeriodHoverLink(indexes));
      button.addEventListener('mouseleave', () => setComparisonPeriodHoverLink());
    });
    periodList.appendChild(item);
  });
  updatePeriodScrollIndicator();
}

function syncPeriodSortToggle() {
  const isDesc = state.sort === 'desc';
  const label = isDesc ? t('sortDescTitle') : t('sortAscTitle');
  periodSortToggle.innerHTML = sortIcon(state.sort);
  periodSortToggle.title = label;
  periodSortToggle.setAttribute('aria-label', label);
  periodSortToggle.setAttribute('aria-pressed', isDesc ? 'true' : 'false');
}
function syncPeriodExpansionControls() {
  app.classList.toggle('period-expanded', Boolean(state.periodExpanded && isIncomeStatementMetric()));
  if (!periodExpandToggle) return;
  const label = state.periodExpanded ? t('periodCollapseTitle') : t('periodExpandTitle');
  periodExpandToggle.innerHTML = periodExpandIcon(state.periodExpanded);
  periodExpandToggle.title = label;
  periodExpandToggle.setAttribute('aria-label', label);
  periodExpandToggle.setAttribute('aria-expanded', state.periodExpanded ? 'true' : 'false');
}

const periodSearchController = createHeaderSearchController({
  section: periodSection,
  input: periodSearch,
  toggle: periodSearchToggle,
  render: renderPeriods,
});

periodMultiExitToggle?.addEventListener('click', () => {
  exitMultiPeriodMode();
});
periodSelectAllToggle?.addEventListener('click', (event) => {
  event.preventDefault();
  toggleAllVisiblePeriods();
});
periodSortToggle.addEventListener('click', () => {
  state.sort = state.sort === 'desc' ? 'asc' : 'desc';
  syncPeriodSortToggle();
  renderPeriods();
  requestAnimationFrame(updatePeriodScrollIndicator);
});
periodExpandToggle?.addEventListener('click', () => {
  state.periodExpanded = !state.periodExpanded;
  writeStoredValue(PERIOD_EXPANDED_KEY, state.periodExpanded);
  syncPeriodExpansionControls();
  syncToolbarHeight();
  updatePeriodScrollIndicator();
  draw();
});

periodList.addEventListener('scroll', updatePeriodScrollIndicator, { passive: true });
