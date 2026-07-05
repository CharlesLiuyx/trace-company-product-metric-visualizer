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
      key: 'palantir-q1-fy26',
      company: 'Palantir',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/palantir-q1-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 1633,
        notes: ['+85% Y/Y', 'Commercial and Government revenue items sum to $1,632M because the source chart rounds to whole millions.'],
        items: [
          { id: 'commercial', label: 'Commercial', value: 774, notes: ['+95% Y/Y'] },
          { id: 'government', label: 'Government', value: 858, notes: ['+76% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 216 },
        operatingExpenses: {
          total: 663,
          items: [
            { id: 'sm', label: 'S&M', value: 319, notes: ['20% of revenue', '(7pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 183, notes: ['11% of revenue', '(7pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 161, notes: ['10% of revenue', '(5pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 12 },
      },
      otherIncome: {
        total: 134,
        items: [
          { id: 'interest', label: 'Interest', value: 66 },
          { id: 'other', label: 'Other', value: 68 },
        ],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1417, notes: ['87% margin', '+6pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 754, notes: ['46% margin', '+26pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 876, notes: ['54% margin', '+29pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +85%', '由于来源图按百万美元四舍五入，商业和政府收入明细合计为 1,632M 美元。'],
            items: [
              { label: '商业', notes: ['同比 +95%'] },
              { label: '政府', notes: ['同比 +76%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { label: '销售与营销', notes: ['占收入 20%', '同比 (7 个百分点)'] },
                { label: '管理费用', notes: ['占收入 11%', '同比 (7 个百分点)'] },
                { label: '研发', notes: ['占收入 10%', '同比 (5 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { label: '利息' },
              { label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 87%', '同比 +6 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 46%', '同比 +26 个百分点'] },
            net: { label: '净利润', notes: ['利润率 54%', '同比 +29 个百分点'] },
          },
        },
      },
    }
  );
})(window);
