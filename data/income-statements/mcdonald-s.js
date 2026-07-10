/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/<dataset-key>.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'mcdonald-s-q4-fy25',
    company: "McDonald's",
    period: 'Q4 FY25',
    periodNote: 'Ending Dec. 2025',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/mcdonald-s-q4-fy25.png',
    roundingTolerance: 0.2,
    revenue: {
      total: 7.0,
      notes: ['+10% Y/Y'],
      items: [
        { id: 'company_owned_restaurants', label: 'Sales from company-owned restaurants', value: 2.5, notes: ['+10% Y/Y', '15% gross margin'] },
        { id: 'franchised_restaurants', label: 'Franchised restaurants', value: 4.3, notes: ['+9% Y/Y', '84% gross margin'] },
        { id: 'other_revenue', label: 'Other revenue', value: 0.2, notes: ['+35% Y/Y', 'Other restaurants'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'restaurant_expenses', label: 'Restaurant expenses', value: 3.0 },
      operatingExpenses: {
        total: 0.9,
        notes: ['Source chart rounds the shown Other SG&A and depreciation & amortization items to $0.8B.'],
        items: [
          { id: 'other_sga', label: 'Other SG&A', value: 0.7 },
          { id: 'depreciation_amortization', label: 'Depreciation & amortization', value: 0.1 },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.6 },
    },
    otherExpenses: {
      total: 0.4,
      items: [{ id: 'interest', label: 'Interest', value: 0.4 }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 4.0, notes: ['58% margin', '(0pp) Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 3.2, notes: ['45% margin', '+0pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 2.2, notes: ['31% margin', '(1pp) Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2025 财年第四季度',
        periodNote: '截至 2025 年 12 月',
        revenue: {
          notes: ['同比 +10%'],
          items: [
            { id: 'company_owned_restaurants', label: '自营餐厅销售额', notes: ['同比 +10%', '毛利率 15%'] },
            { id: 'franchised_restaurants', label: '加盟餐厅', notes: ['同比 +9%', '毛利率 84%'] },
            { id: 'other_revenue', label: '其他收入', notes: ['同比 +35%', '其他餐厅'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '餐厅费用' },
          operatingExpenses: {
            notes: ['来源图中“其他 SG&A”与“折旧及摊销”按四舍五入合计为 $0.8B。'],
            items: [
              { id: 'other_sga', label: '其他销售、一般及行政费用' },
              { id: 'depreciation_amortization', label: '折旧及摊销' },
            ],
          },
          tax: { label: '税费' },
        },
        otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 58%', '同比 (0 个百分点)'] },
          operating: { label: '营业利润', notes: ['利润率 45%', '同比 +0 个百分点'] },
          net: { label: '净利润', notes: ['利润率 31%', '同比 (1 个百分点)'] },
        },
      },
    },
  });
})(window);
