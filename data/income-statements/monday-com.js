/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/<dataset-key>.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push(
    {
      key: 'monday-com-q1-fy26',
      company: 'Monday.com',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/monday-com-q1-fy26.png',
      roundingTolerance: 0.65,
      revenue: {
        total: 351,
        notes: ['+24% Y/Y'],
        items: [{ id: 'revenue', label: 'Revenue', value: 351, notes: ['+24% Y/Y'] }],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 38 },
        operatingExpenses: {
          total: 293,
          items: [
            { id: 'sm', label: 'Sales & marketing', value: 165, notes: ['47% of revenue', '(3pp) Y/Y'] },
            { id: 'rnd', label: 'Research & development', value: 92, notes: ['26% of revenue', '+2pp Y/Y'] },
            { id: 'ga', label: 'General & admin', value: 36, notes: ['10% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 2 },
      },
      otherIncome: {
        total: 10,
        items: [{ id: 'finance', label: 'Finance', value: 10 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 313, notes: ['89% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 20, notes: ['6% margin', '+2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 28, notes: ['8% margin', '(2pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +24%'],
            items: [{ id: 'revenue', label: '收入', notes: ['同比 +24%'] }],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 47%', '同比 (3 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 26%', '同比 +2 个百分点'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 10%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'finance', label: '财务收入' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 89%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 6%', '同比 +2 个百分点'] },
            net: { label: '净利润', notes: ['利润率 8%', '同比 (2 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
