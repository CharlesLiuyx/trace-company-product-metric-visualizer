// The general observation library is a view over the pure metric SSOT.
// It intentionally preserves source-stated units and decimal strings.
(function () {
  const button = document.getElementById('metricLibraryOpen');
  const dialog = document.getElementById('metricLibrary');
  const search = document.getElementById('metricLibrarySearch');
  const rows = document.getElementById('metricLibraryRows');
  const count = document.getElementById('metricLibraryCount');
  const records = window.METRIC_OBSERVATIONS || [];
  const text = (tag, value) => { const node = document.createElement(tag); node.textContent = value; return node; };
  function render() {
    const query = search.value.trim().toLocaleLowerCase();
    const fragment = document.createDocumentFragment();
    let matches = 0;
    for (const record of records) {
      for (const metric of record.metrics) {
        const values = [record.subject.name, record.subject.type, metric.period || record.period, metric.name, metric.value + ' ' + metric.unit, metric.currency || '—', metric.basis || record.basis];
        if (query && ![...values, metric.quote, record.key].join(' ').toLocaleLowerCase().includes(query)) continue;
        matches++;
        const row = document.createElement('tr');
        for (const value of values) row.append(text('td', value));
        const source = document.createElement('td');
        const details = document.createElement('details');
        details.append(text('summary', '来源 / Source'));
        details.append(text('p', metric.quote));
        details.append(text('p', `${record.source.locator}\n${record.source.digest}`));
        details.append(text('p', JSON.stringify(metric.anchor)));
        source.append(details); row.append(source); fragment.append(row);
      }
    }
    rows.replaceChildren(fragment);
    count.textContent = `${matches} 项指标 / observations`;
    if (!matches) {
      const row = document.createElement('tr'); const cell = text('td', records.length ? '没有匹配的指标 / No matches' : '暂无已纳入的通用指标。图片或文字通过处理与审阅后，会显示在这里。');
      cell.colSpan = 8; row.append(cell); rows.append(row);
    }
  }
  button.addEventListener('click', () => { render(); dialog.showModal(); search.focus(); });
  document.getElementById('metricLibraryClose').addEventListener('click', () => dialog.close());
  search.addEventListener('input', render);
  document.getElementById('metricLibraryExport').addEventListener('click', () => {
    const blob = new Blob([JSON.stringify(records, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob); const link = document.createElement('a');
    link.href = url; link.download = 'trace-metric-observations.json'; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 0);
  });
})();
