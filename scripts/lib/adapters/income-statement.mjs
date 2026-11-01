import { OPERATING_METRIC_SIGNAL } from '../operating-metrics.mjs';

// Income Statement: one-period financial values with visible Sankey flow
// topology. Authors the per-company financial SSOT plus a Sankey View Adapter,
// so it is the only Adapter with render evidence, node faces and a staged
// render baseline.
function collectRows(record) {
  const rows = [];
  const collect = (value, label) => {
    if (!value || typeof value !== 'object') return;
    if (typeof value.value === 'number') rows.push([record.company, record.period, value.label || label, `${value.value} ${record.unit}`, record.currency, (value.notes || []).join('；')]);
    if (typeof value.total === 'number') rows.push([record.company, record.period, `${value.label || label} · 合计`, `${value.total} ${record.unit}`, record.currency, (value.notes || []).join('；')]);
    for (const [key, child] of Object.entries(value)) if (!['notes', 'i18n'].includes(key)) collect(child, `${label} / ${key}`);
  };
  for (const [key, label] of Object.entries({ revenue: '收入', costs: '成本费用', operatingOtherIncome: '营业利润调整收入', operatingOtherExpenses: '营业利润调整支出', otherIncome: '其他收入', otherExpenses: '其他费用', profit: '利润' })) collect(record[key], label);
  return rows;
}

export default Object.freeze({
  id: 'income-statement',
  label: 'Income Statement',
  media: Object.freeze(['image']),
  signature: Object.freeze({
    required: Object.freeze(['income-statement-values', 'sankey-flow-topology']),
    optional: Object.freeze([OPERATING_METRIC_SIGNAL]),
  }),
  facts: 'flat-objects',
  checklist: Object.freeze(['data-consistency', 'render-fidelity', 'human-review']),
  requiredLocales: Object.freeze(['en', 'zh']),
  view: 'sankey',
  ssot: Object.freeze({ family: 'income-statement', locations: Object.freeze(['data/income-statements']) }),
  indexRegistration: true,
  records: (loaded) => loaded.records,
  artifacts: (key) => [{ path: `data/datasets/${key}.js`, role: 'view-adapter' }],
  displayTimeKey: (key) => key,
  reviewRows: collectRows,
});
