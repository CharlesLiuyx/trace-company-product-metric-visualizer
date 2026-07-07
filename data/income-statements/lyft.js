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
      key: 'lyft-fy25',
      company: 'Lyft',
      period: 'FY25',
      periodNote: 'Year ended Dec. 31, 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/lyft-fy25.png',
      roundingTolerance: 2.1,
      revenue: {
        total: 6316,
        notes: ['+9% Y/Y'],
        items: [
          { id: 'rideshare', label: 'Rideshare', value: 5895, notes: ['+10% Y/Y'] },
          { id: 'rentals', label: 'Rentals', value: 421, notes: ['+0% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 3698 },
        operatingExpenses: {
          total: 2807,
          items: [
            { id: 'ga', label: 'General & admin', value: 1002, notes: ['16% of revenue', '(0pp) Y/Y'] },
            { id: 'sm', label: 'Sales & marketing', value: 875, notes: ['14% of revenue', '+0pp Y/Y'] },
            { id: 'operations_support', label: 'Operations & support', value: 478, notes: ['8% of revenue', '(0pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 451, notes: ['7% of revenue', '+0pp Y/Y'] },
          ],
        },
        tax: { label: 'Tax', value: 0 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 2619, notes: ['41% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -188, notes: ['(3%) margin', '+1pp Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -188,
          notes: ['Source chart stops at operating loss; no net income bridge is rendered.'],
        },
      },
      i18n: {
        zh: {
          period: '2025 财年',
          periodNote: '截至 2025 年 12 月 31 日止年度',
          revenue: {
            notes: ['同比 +9%'],
            items: [
              { id: 'rideshare', label: '网约车', notes: ['同比 +10%'] },
              { id: 'rentals', label: '租赁', notes: ['同比 +0%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'ga', label: '管理费用', notes: ['占收入 16%', '同比 (0 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 14%', '同比 +0 个百分点'] },
                { id: 'operations_support', label: '运营与支持', notes: ['占收入 8%', '同比 (0 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 7%', '同比 +0 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 41%', '同比 (1 个百分点)'] },
            operating: { label: '营业亏损', notes: ['利润率 (3%)', '同比 +1 个百分点'] },
            net: { label: '营业亏损', notes: ['来源图停留在营业亏损，未展示净利润桥。'] },
          },
        },
      },
    }
  );
})(window);
