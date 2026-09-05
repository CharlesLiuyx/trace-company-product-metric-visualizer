/* Trace viewer · exports.js
 * Download actions: SVG/PNG of the current sankey and the three CSVs. */

/* ---- export ---- */
const currentSvg = () => chartHost?.querySelector('svg');
function downloadText(filename, text, type = 'text/csv;charset=utf-8') {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([text], { type }));
  a.download = filename;
  a.click();
}
function csvCell(value) {
  const text = String(value ?? '').replace(/\r?\n/g, ' ');
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}
function csvFromRows(columns, rows) {
  return [
    columns.map((column) => csvCell(column.label)).join(','),
    ...rows.map((row) => columns.map((column) => csvCell(column.value(row))).join(',')),
  ].join('\n') + '\n';
}
function svgString() {
  const svg = currentSvg().cloneNode(true);
  svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  return '<?xml version="1.0" encoding="UTF-8"?>\n' + new XMLSerializer().serializeToString(svg);
}
function dims() {
  const svg = currentSvg();
  if (svg.viewBox && svg.viewBox.baseVal && svg.viewBox.baseVal.width)
    return [svg.viewBox.baseVal.width, svg.viewBox.baseVal.height];
  const r = svg.getBoundingClientRect();
  return [r.width, r.height];
}
const fname = () => (currentDataset()?.key || 'sankey') + '-d3';
svgBtn.onclick = () => {
  if (state.viewMode !== 'sankey' || !currentSvg()) return;
  downloadText(fname() + '.svg', svgString(), 'image/svg+xml');
};
pngBtn.onclick = () => {
  if (state.viewMode !== 'sankey' || !currentSvg()) return;
  const [w, h] = dims(); const scale = 2;
  const img = new Image();
  img.onload = () => {
    const c = document.createElement('canvas');
    c.width = w * scale; c.height = h * scale;
    c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
    c.toBlob((b) => { const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = fname() + '.png'; a.click(); });
  };
  img.src = URL.createObjectURL(new Blob([svgString()], { type: 'image/svg+xml' }));
};
companiesCsvBtn.onclick = () => {
  if (!runtimeData.ready({ family: 'company' })) { draw(); return; }
  const columns = [
    { label: 'company', value: (row) => row.company },
    { label: 'legal_name', value: (row) => row.legalName },
    { label: 'ticker', value: (row) => row.ticker },
    { label: 'exchange', value: (row) => row.exchange },
    { label: 'market_cap', value: (row) => row.marketCap },
    { label: 'market_cap_usd', value: (row) => row.marketCapValueUsd },
    { label: 'market_cap_as_of', value: (row) => row.marketCapAsOf },
    { label: 'market_cap_source_url', value: (row) => row.marketCapSourceUrl },
    { label: 'sector', value: (row) => row.sector },
    { label: 'industry', value: (row) => row.industry },
    { label: 'founded', value: (row) => row.founded },
    { label: 'headquarters', value: (row) => row.headquarters },
    { label: 'fiscal_year_end', value: (row) => row.fiscalYearEnd },
    { label: 'website', value: (row) => row.website },
    { label: 'description', value: (row) => row.description },
    { label: 'dataset_count', value: (row) => row.datasetCount },
    { label: 'latest_period', value: (row) => row.latestPeriod },
    { label: 'source_urls', value: (row) => (row.sourceUrls || []).join(' ') },
  ];
  downloadText('companies.csv', csvFromRows(columns, companyRows()));
};
statementsCsvBtn.onclick = () => {
  if (!runtimeData.ready({ family: 'statement' })) { draw(); return; }
  const columns = [
    { label: 'dataset_key', value: (row) => row.record.dataset.key },
    { label: 'company', value: (row) => row.displayCompany },
    { label: 'period', value: (row) => row.displayPeriod },
    { label: 'period_note', value: (row) => row.displayPeriodNote },
    { label: 'currency', value: (row) => row.financial?.currency || '' },
    { label: 'unit', value: (row) => row.financial?.unit || '' },
    { label: 'revenue_total', value: (row) => row.financial?.revenue?.total ?? '' },
    { label: 'revenue_notes', value: (row) => notesText(row.financial?.revenue?.notes) },
    { label: 'revenue_items', value: (row) => row.revenueItems },
    { label: 'cost_of_revenue', value: (row) => row.financial?.costs?.costOfRevenue?.value ?? '' },
    { label: 'gross_profit', value: (row) => row.financial?.profit?.gross?.value ?? '' },
    { label: 'operating_expenses', value: (row) => row.financial?.costs?.operatingExpenses?.total ?? '' },
    { label: 'operating_expense_items', value: (row) => row.operatingExpenseItems },
    { label: 'operating_profit', value: (row) => row.financial?.profit?.operating?.value ?? '' },
    { label: 'other_income', value: (row) => row.financial?.otherIncome?.total ?? 0 },
    { label: 'tax', value: (row) => row.financial?.costs?.tax?.value ?? '' },
    { label: 'net_profit', value: (row) => row.financial?.profit?.net?.value ?? '' },
    { label: 'source_image', value: (row) => row.financial?.sourceImage || '' },
  ];
  downloadText('income-statements.csv', csvFromRows(columns, statementRows()));
};
revenueCsvBtn.onclick = () => {
  if (!runtimeData.ready({ family: 'revenue' })) { draw(); return; }
  const columns = [
    { label: 'metric_key', value: (row) => row.record.metric.key },
    { label: 'company', value: (row) => row.displayCompany },
    { label: 'metric', value: (row) => row.displayMetric },
    { label: 'date', value: (row) => row.observation.date },
    { label: 'annualized_revenue', value: (row) => row.observation.value },
    { label: 'currency', value: (row) => row.metric.currency || '' },
    { label: 'unit', value: (row) => row.metric.unit || '' },
    { label: 'mom_growth_pct', value: (row) => row.observation.momGrowthPct ?? '' },
    { label: 'notes', value: (row) => notesText(row.observation.notes) },
    { label: 'period', value: (row) => row.displayPeriod },
    { label: 'period_note', value: (row) => row.displayPeriodNote },
    { label: 'definition', value: (row) => row.definition },
    { label: 'source_urls', value: (row) => (row.sourceUrls || []).join(' ') },
    { label: 'source_image', value: (row) => row.sourceImage },
  ];
  downloadText('revenue-metrics.csv', csvFromRows(columns, revenueRows()));
};
