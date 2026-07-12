/* Pure income-statement SSOT records. Sankey geometry stays in data/datasets/. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'southwest-q4-fy25',
    company: 'Southwest Airlines',
    period: 'Q4 FY25',
    periodNote: 'Quarter ended Dec. 31, 2025',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/southwest-q4-fy25.png',
    roundingTolerance: 0.15,
    revenue: {
      total: 7.4,
      notes: ['+7% Y/Y'],
      items: [
        { id: 'passenger', label: 'Passenger', value: 6.8, notes: ['+8% Y/Y'] },
        { id: 'freight', label: 'Freight', value: 0.043, notes: ['(4)% Y/Y'] },
        { id: 'other_revenue', label: 'Other', value: 0.6, notes: ['+6% Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: {
        id: 'cost_of_revenue',
        label: 'Cost of revenue (not separately presented)',
        value: 0,
        notes: ['The source infographic moves directly from revenue to operating profit and operating expenses.'],
      },
      operatingExpenses: {
        total: 7.1,
        items: [
          { id: 'salaries_benefits', label: 'Salaries & benefits', value: 3.4 },
          { id: 'fuel_oil', label: 'Fuel & Oil', value: 1.3 },
          { id: 'maintenance', label: 'Maintenance', value: 0.3 },
          { id: 'landing_fees', label: 'Landing fees', value: 0.5 },
          { id: 'depreciation_amortization', label: 'D&A', value: 0.4 },
          { id: 'other_operating', label: 'Other', value: 1.1 },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.1 },
    },
    otherIncome: {
      total: 0.033,
      items: [{ id: 'other_income', label: 'Other', value: 0.033 }],
    },
    otherExpenses: {
      total: 0.048,
      items: [{ id: 'interest', label: 'Interest', value: 0.048 }],
    },
    profit: {
      gross: {
        id: 'gross_profit',
        label: 'Gross profit (not separately presented)',
        value: 7.4,
        notes: ['Bookkeeping value for SSOT parity; the source infographic has no gross-profit stage.'],
      },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 0.415, notes: ['5% margin', '+1pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 0.3, notes: ['4% margin', '+1pp Y/Y'] },
    },
    sources: [
      {
        name: 'Southwest Airlines Reports Fourth Quarter and Full Year 2025 Results',
        url: 'https://www.southwestairlinesinvestorrelations.com/news-and-events/news-releases/2026/01-29-2026-113006',
      },
      {
        name: 'Southwest Airlines 2025 Annual Report',
        url: 'https://www.southwestairlinesinvestorrelations.com/sec-filings/all-sec-filings/content/0000092380-26-000004/luv-20251231.htm',
      },
    ],
    i18n: {
      zh: {
        period: '2025 财年第四季度',
        periodNote: '截至 2025 年 12 月 31 日的季度',
        revenue: {
          notes: ['同比 +7%'],
          items: [
            { id: 'passenger', label: '客运', notes: ['同比 +8%'] },
            { id: 'freight', label: '货运', notes: ['同比 (4)%'] },
            { id: 'other_revenue', label: '其他', notes: ['同比 +6%'] },
          ],
        },
        costs: {
          costOfRevenue: {
            label: '收入成本（未单列）',
            notes: ['来源信息图从收入直接拆分为营业利润和运营费用。'],
          },
          operatingExpenses: {
            items: [
              { id: 'salaries_benefits', label: '薪酬与福利' },
              { id: 'fuel_oil', label: '燃油与石油' },
              { id: 'maintenance', label: '维护' },
              { id: 'landing_fees', label: '着陆费' },
              { id: 'depreciation_amortization', label: '折旧与摊销' },
              { id: 'other_operating', label: '其他' },
            ],
          },
          tax: { label: '税费' },
        },
        otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
        otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
        profit: {
          gross: { label: '毛利润（未单列）', notes: ['用于 SSOT 对齐的账面值；来源信息图未展示毛利润阶段。'] },
          operating: { label: '营业利润', notes: ['利润率 5%', '同比 +1 个百分点'] },
          net: { label: '净利润', notes: ['利润率 4%', '同比 +1 个百分点'] },
        },
      },
    },
  });
})(window);
