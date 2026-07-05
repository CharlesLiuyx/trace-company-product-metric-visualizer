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
      key: 'applovin-q1-fy26',
      company: 'AppLovin',
      period: 'Q1 FY26',
      periodNote: 'Quarter ended Mar. 31, 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/applovin-q1-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 1842,
        notes: ['+59% Y/Y'],
        items: [
          { id: 'united_states', label: 'United States', value: 907, notes: ['+47% Y/Y'] },
          { id: 'rest_of_world', label: 'Rest of the world', value: 935, notes: ['+72% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 204 },
        operatingExpenses: {
          total: 199,
          items: [
            { id: 'rnd', label: 'R&D', value: 94, notes: ['5% of revenue', '+0pp Y/Y'] },
            { id: 'sm', label: 'S&M', value: 61, notes: ['3% of revenue', '(2pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 44, notes: ['2% of revenue', '(2pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 226 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 9,
        items: [{ id: 'other', label: 'Other', value: 9 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1639, notes: ['89% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1440, notes: ['78% margin', '+6pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1206, notes: ['65% margin', '+3pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月 31 日的季度',
          revenue: {
            notes: ['同比 +59%'],
            items: [
              { id: 'united_states', label: '美国', notes: ['同比 +47%'] },
              { id: 'rest_of_world', label: '世界其他地区', notes: ['同比 +72%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 5%', '同比 +0 个百分点'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 3%', '同比 (2 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 2%', '同比 (2 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [
              { id: 'other', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 89%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 78%', '同比 +6 个百分点'] },
            net: { label: '净利润', notes: ['利润率 65%', '同比 +3 个百分点'] },
          },
        },
      },
    }
  );
})(window);
