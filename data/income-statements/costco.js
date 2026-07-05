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
      key: 'costco-q3-fy26',
      company: 'Costco',
      period: 'Q3 FY26',
      periodNote: 'Ending May 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/costco-q3-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 70.5,
        notes: ['+12% Y/Y'],
        items: [
          { id: 'net_sales', label: 'Net Sales', value: 69.2, notes: ['+12% Y/Y'] },
          { id: 'membership_fee', label: 'Membership Fee', value: 1.4, notes: ['+11% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'merchandise_costs', label: 'Merchandise costs', value: 61.5 },
        operatingExpenses: {
          total: 6.2,
          items: [
            { id: 'operating_expenses', label: 'SG&A expenses', value: 6.2 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.7 },
      },
      otherIncome: {
        total: 0.1,
        items: [{ id: 'interest', label: 'Interest', value: 0.1 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 9.0, notes: ['12.8% margin', '(0.2pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.8, notes: ['4.0% margin', '(0.0pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.2, notes: ['3.1% margin', '+0.1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第三季度',
          periodNote: '截至 2026 年 5 月',
          revenue: {
            notes: ['同比 +12%'],
            items: [
              { id: 'net_sales', label: '净销售额', notes: ['同比 +12%'] },
              { id: 'membership_fee', label: '会员费', notes: ['同比 +11%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '商品成本' },
            operatingExpenses: {
              items: [
                { id: 'operating_expenses', label: '销售、一般及行政费用' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'interest', label: '利息' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 12.8%', '同比 (0.2 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 4.0%', '同比 (0.0 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 3.1%', '同比 +0.1 个百分点'] },
          },
        },
      },
    }
  );
})(window);
