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
      key: 'dynatrace-q3-fy26',
      company: 'Dynatrace',
      period: 'Q3 FY26',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/dynatrace-q3-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 516,
        notes: ['+18% Y/Y'],
        items: [
          { id: 'subscription', label: 'Subscription', value: 493, notes: ['+18% Y/Y'] },
          { id: 'service', label: 'Service', value: 22, notes: ['+16% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 96 },
        operatingExpenses: {
          total: 347,
          items: [
            { id: 'sm', label: 'S&M', value: 174, notes: ['34% of revenue', '(2pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 121, notes: ['23% of revenue', '+1pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 52, notes: ['10% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 44 },
      },
      otherIncome: {
        total: 12,
        items: [{ id: 'other', label: 'Other', value: 12 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 420, notes: ['81% margin', '+0pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 73, notes: ['14% margin', '+3pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 40, notes: ['8% margin', '(75pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第三季度',
          periodNote: '截至 2026 年 1 月的季度',
          revenue: {
            notes: ['同比 +18%'],
            items: [
              { id: 'subscription', label: '订阅', notes: ['同比 +18%'] },
              { id: 'service', label: '服务', notes: ['同比 +16%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 34%', '同比 (2 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 23%', '同比 +1 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 10%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 81%', '同比 +0 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 14%', '同比 +3 个百分点'] },
            net: { label: '净利润', notes: ['利润率 8%', '同比 (75 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
