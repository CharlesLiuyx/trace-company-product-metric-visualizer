/* Pure income-statement SSOT records. Sankey geometry stays in data/datasets/. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'delta-q4-fy25',
    company: 'Delta Air Lines',
    period: 'Q4 FY25',
    periodNote: 'Quarter ended Dec. 31, 2025',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/delta-q4-fy25.png',
    roundingTolerance: 0.15,
    revenue: {
      total: 16.0,
      notes: ['+3% Y/Y'],
      items: [
        { id: 'passenger', label: 'Passenger', value: 12.9, notes: ['+1% Y/Y'] },
        { id: 'cargo', label: 'Cargo', value: 0.2, notes: ['(1)% Y/Y'] },
        { id: 'other_revenue', label: 'Other', value: 2.8, notes: ['+14% Y/Y'] },
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
        total: 14.5,
        items: [
          { id: 'salaries_benefits', label: 'Salaries & benefits', value: 4.6 },
          { id: 'aircraft_fuel', label: 'Aircraft fuel', value: 2.4 },
          { id: 'ancillary_business', label: 'Ancillary business', value: 1.6 },
          { id: 'contracted_services', label: 'Contracted services', value: 1.2 },
          { id: 'landing_fees', label: 'Landing fees', value: 0.9 },
          { id: 'maintenance', label: 'Maintenance', value: 0.6 },
          { id: 'depreciation_amortization', label: 'D&A', value: 0.6 },
          { id: 'regional_carrier', label: 'Regional carrier', value: 0.5 },
          { id: 'other_operating', label: 'Other', value: 2.1 },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.3 },
    },
    otherIncome: {
      total: 0.2,
      items: [{ id: 'other_income', label: 'Other', value: 0.2 }],
    },
    otherExpenses: {
      total: 0.2,
      items: [{ id: 'interest', label: 'Interest', value: 0.2 }],
    },
    profit: {
      gross: {
        id: 'gross_profit',
        label: 'Gross profit (not separately presented)',
        value: 16.0,
        notes: ['Bookkeeping value for SSOT parity; the source infographic has no gross-profit stage.'],
      },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 1.5, notes: ['9% margin', '(2pp) Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 1.2, notes: ['8% margin', '+2pp Y/Y'] },
    },
    sources: [
      {
        name: 'Delta Air Lines Announces December Quarter and Full Year 2025 Financial Results',
        url: 'https://ir.delta.com/news/news-details/2026/Delta-Air-Lines-Announces-December-Quarter-and-Full-Year-2025-Financial-Results/default.aspx',
      },
    ],
    i18n: {
      zh: {
        period: '2025 财年第四季度',
        periodNote: '截至 2025 年 12 月 31 日的季度',
        revenue: {
          notes: ['同比 +3%'],
          items: [
            { id: 'passenger', label: '客运', notes: ['同比 +1%'] },
            { id: 'cargo', label: '货运', notes: ['同比 (1)%'] },
            { id: 'other_revenue', label: '其他', notes: ['同比 +14%'] },
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
              { id: 'aircraft_fuel', label: '航空燃油' },
              { id: 'ancillary_business', label: '辅助业务' },
              { id: 'contracted_services', label: '合同服务' },
              { id: 'landing_fees', label: '着陆费' },
              { id: 'maintenance', label: '维护' },
              { id: 'depreciation_amortization', label: '折旧与摊销' },
              { id: 'regional_carrier', label: '支线承运人' },
              { id: 'other_operating', label: '其他' },
            ],
          },
          tax: { label: '税费' },
        },
        otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
        otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
        profit: {
          gross: { label: '毛利润（未单列）', notes: ['用于 SSOT 对齐的账面值；来源信息图未展示毛利润阶段。'] },
          operating: { label: '营业利润', notes: ['利润率 9%', '同比 (2 个百分点)'] },
          net: { label: '净利润', notes: ['利润率 8%', '同比 +2 个百分点'] },
        },
      },
    },
  });
})(window);
