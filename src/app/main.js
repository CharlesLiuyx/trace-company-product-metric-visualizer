/* Trace viewer · main.js
 * Global wiring (hashchange, resize) and the boot sequence. Loads last. */

window.addEventListener('hashchange', () => {
  if (window.TRACE_LOCAL_VIEW_ACTIVE) return;
  const record = recordFromHash();
  if (!record) return;
  if (record.index === state.activeIndex && record.company === state.company) return;
  clearMultiPeriodScope();
  state.activeIndex = record.index;
  state.company = record.company;
  setCompanyActiveRecord(record);
  if (!state.multiCompanyMode) syncSingleCompanyScope();
  else if (!state.selectedCompanies.includes(record.company)) setSelectedCompanies([...state.selectedCompanies, record.company]);
  refresh();
  scrollActiveTableRow('statement');
});

let rt;
window.addEventListener('resize', () => {
  if (window.TRACE_LOCAL_VIEW_ACTIVE) return;
  clearTimeout(rt);
  rt = setTimeout(() => {
    syncResponsiveLayout();
    draw();
    updatePeriodScrollIndicator();
    requestVirtualTableUpdate();
  }, 200);
});

runtimeData.subscribe(invalidateRuntimeViewCaches);

Promise.resolve(window.TRACE_LOCAL_VIEW_READY).then((localViewActive) => {
  if (localViewActive) return;
  applyStaticTranslations();
  syncResponsiveLayout();
  refresh();
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.body.classList.remove('boot-no-motion');
    });
  });

});
