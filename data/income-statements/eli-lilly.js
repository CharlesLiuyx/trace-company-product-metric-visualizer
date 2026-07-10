/* Pure income-statement SSOT. Sankey geometry stays in data/datasets/. */
(function (global) {
  'use strict';
  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] });
  ssot.records.push({
    key: 'eli-lilly-q4-fy25', company: 'Eli Lilly', period: 'Q4 FY25', periodNote: 'Ending Dec. 2025', currency: '$', unit: 'B', decimals: 1,
    sourceImage: 'input/processed/eli-lilly-q4-fy25.png', roundingTolerance: 0.15,
    revenue: { total: 19.3, notes: ['+43% Y/Y'], items: [
      { id: 'cardiometabolic', label: 'Cardiometabolic Health', value: 14.5, notes: ['+58% Y/Y'] },
      { id: 'oncology', label: 'Oncology', value: 2.6, notes: ['(1%) Y/Y'] },
      { id: 'immunology', label: 'Immunology', value: 1.5, notes: ['+18% Y/Y'] },
      { id: 'neuroscience', label: 'Neurosciences', value: 0.5, notes: ['+17% Y/Y'] },
      { id: 'other_revenue', label: 'Other', value: 0.2, notes: ['(1%) Y/Y'] },
    ] },
    costs: { costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 3.4 }, operatingExpenses: { total: 7.5, items: [
      { id: 'rnd', label: 'R&D', value: 3.8, notes: ['20% of revenue', '(3pp) Y/Y'] },
      { id: 'sma', label: 'SM&A', value: 3.1, notes: ['16% of revenue', '(2pp) Y/Y'] },
      { id: 'acquired_iprd', label: 'Acquired IPR&D', value: 0.5, notes: ['3% of revenue', '+1pp Y/Y'] },
      { id: 'other_opex', label: 'Other', value: 0.1 },
    ] }, tax: { id: 'tax', label: 'Tax', value: 1.6 } },
    otherIncome: { total: 0, items: [] }, otherExpenses: { total: 0.1, items: [{ id: 'interest_other', label: 'Interest & other', value: 0.1 }] },
    profit: { gross: { id: 'gross_profit', label: 'Gross profit', value: 15.9, notes: ['83% margin', '+0pp Y/Y'] }, operating: { id: 'operating_profit', label: 'Operating profit', value: 8.4, notes: ['43% margin', '+5pp Y/Y'] }, net: { id: 'net_profit', label: 'Net profit', value: 6.6, notes: ['34% margin', '+2pp Y/Y', 'Operating profit less tax and interest & other rounds to $6.7B; the source reports $6.6B net profit.'] } },
    i18n: { zh: { period: '2025 财年第四季度', periodNote: '截至 2025 年 12 月', revenue: { notes: ['同比 +43%'], items: [
      { id: 'cardiometabolic', label: '心血管代谢健康', notes: ['同比 +58%'] }, { id: 'oncology', label: '肿瘤', notes: ['同比 (1%)'] }, { id: 'immunology', label: '免疫', notes: ['同比 +18%'] }, { id: 'neuroscience', label: '神经科学', notes: ['同比 +17%'] }, { id: 'other_revenue', label: '其他', notes: ['同比 (1%)'] },
    ] }, costs: { costOfRevenue: { label: '销售成本' }, operatingExpenses: { items: [
      { id: 'rnd', label: '研发', notes: ['占收入 20%', '同比 (3 个百分点)'] }, { id: 'sma', label: '销售、市场与管理', notes: ['占收入 16%', '同比 (2 个百分点)'] }, { id: 'acquired_iprd', label: '收购的 IPR&D', notes: ['占收入 3%', '同比 +1 个百分点'] }, { id: 'other_opex', label: '其他' },
    ] }, tax: { label: '税费' } }, otherExpenses: { items: [{ id: 'interest_other', label: '利息及其他' }] }, profit: { gross: { label: '毛利润', notes: ['利润率 83%', '同比 +0 个百分点'] }, operating: { label: '营业利润', notes: ['利润率 43%', '同比 +5 个百分点'] }, net: { label: '净利润', notes: ['利润率 34%', '同比 +2 个百分点'] } } } },
  });
})(window);
