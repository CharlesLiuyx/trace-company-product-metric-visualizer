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
      key: 'walmart-q1-fy27',
      company: 'Walmart',
      period: 'Q1 FY27',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/walmart-q1-fy27.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 177.8,
        notes: ['+7% Y/Y'],
        items: [
          { id: 'walmart_us', label: 'Walmart US', value: 117.2, notes: ['+4% Y/Y', '5% operating margin'] },
          { id: 'walmart_international', label: 'Walmart International', value: 35.1, notes: ['+18% Y/Y', '5% operating margin'] },
          { id: 'sams_club', label: "Sam's Club", value: 23.4, notes: ['+6% Y/Y', '3% operating margin'] },
          { id: 'membership_other', label: 'Membership and other', value: 2.1, notes: ['+27% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 133.1 },
        operatingExpenses: {
          total: 37.2,
          items: [
            { id: 'operating_expenses', label: 'Operating expenses', value: 37.2 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 1.7 },
      },
      otherIncome: {
        total: 0.3,
        items: [{ id: 'other_income', label: 'Other', value: 0.3 }],
      },
      otherExpenses: {
        total: 0.6,
        items: [{ id: 'interest', label: 'Interest', value: 0.6 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 44.7, notes: ['25% margin', '+0pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 7.5, notes: ['4% margin', '(0pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 5.5, notes: ['3% margin', '+0pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2027 财年第一季度',
          periodNote: '截至 2026 年 4 月',
          revenue: {
            notes: ['同比 +7%'],
            items: [
              { id: 'walmart_us', label: '沃尔玛美国', notes: ['同比 +4%', '营业利润率 5%'] },
              { id: 'walmart_international', label: '沃尔玛国际', notes: ['同比 +18%', '营业利润率 5%'] },
              { id: 'sams_club', label: '山姆会员店', notes: ['同比 +6%', '营业利润率 3%'] },
              { id: 'membership_other', label: '会员及其他', notes: ['同比 +27%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'operating_expenses', label: '运营费用' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他' }],
          },
          otherExpenses: {
            items: [{ id: 'interest', label: '利息' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 25%', '同比 +0 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 4%', '同比 (0 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 3%', '同比 +0 个百分点'] },
          },
        },
      },
    }
  );
})(window);
