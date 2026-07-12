/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/<dataset-key>.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'carnival-q2-fy26',
    company: 'Carnival',
    period: 'Q2 FY26',
    periodNote: 'Ending May 2026',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/carnival-q2-fy26.png',
    roundingTolerance: 0.15,
    revenue: {
      total: 6.7,
      notes: ['+5% Y/Y'],
      items: [
        { id: 'passenger_ticket', label: 'Passenger ticket', value: 4.3, notes: ['+4% Y/Y'] },
        { id: 'onboard_other_revenue', label: 'Onboard & other', value: 2.4, notes: ['+7% Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: {
        label: 'Cost of revenue',
        value: 0,
        notes: ['The source uses one operating-expense waterfall and does not separately show cost of revenue or gross profit.'],
      },
      operatingExpenses: {
        total: 5.8,
        items: [
          {
            id: 'cruise_tour',
            label: 'Cruise & tour',
            value: 4.2,
            notes: ['The source rounds the displayed detail to $4.3B.'],
            children: [
              { id: 'commissions_transportation', label: 'Commissions & transportation', value: 0.8 },
              { id: 'onboard_other_cost', label: 'Onboard & other', value: 0.7 },
              { id: 'payroll_related', label: 'Payroll & related', value: 0.7 },
              { id: 'fuel', label: 'Fuel', value: 0.6 },
              { id: 'food', label: 'Food', value: 0.4 },
              { id: 'other_operating', label: 'Other operating', value: 1.1 },
            ],
          },
          { id: 'selling_admin', label: 'Selling & admin', value: 0.9 },
          { id: 'depreciation_amortization', label: 'Depreciation & amortization', value: 0.7 },
        ],
      },
      tax: {
        label: 'Tax',
        value: 0.1,
        notes: ['Bookkeeping amount inferred from the displayed operating profit, interest and other, and net profit; the source does not show a separate tax flow.'],
      },
    },
    otherIncome: { total: 0, items: [] },
    otherExpenses: {
      total: 0.3,
      items: [{ id: 'interest_other', label: 'Interest & other', value: 0.3 }],
    },
    profit: {
      gross: { label: 'Gross profit', value: 6.7, notes: ['Bookkeeping value only; the source does not show gross profit.'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 0.9, notes: ['13% margin', '(2pp) Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 0.5, notes: ['8% margin', '(1pp) Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2026 财年第二季度',
        periodNote: '截至 2026 年 5 月',
        revenue: {
          notes: ['同比 +5%'],
          items: [
            { id: 'passenger_ticket', label: '乘客票务', notes: ['同比 +4%'] },
            { id: 'onboard_other_revenue', label: '船上及其他', notes: ['同比 +7%'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本', notes: ['来源图以单一运营费用瀑布图呈现，未单独展示收入成本或毛利润。'] },
          operatingExpenses: {
            items: [
              {
                id: 'cruise_tour', label: '邮轮与旅游',
                notes: ['来源图展示的明细因四舍五入为 $4.3B。'],
                children: [
                  { id: 'commissions_transportation', label: '佣金与运输' },
                  { id: 'onboard_other_cost', label: '船上及其他' },
                  { id: 'payroll_related', label: '薪酬及相关费用' },
                  { id: 'fuel', label: '燃油' },
                  { id: 'food', label: '餐饮' },
                  { id: 'other_operating', label: '其他运营' },
                ],
              },
              { id: 'selling_admin', label: '销售与行政' },
              { id: 'depreciation_amortization', label: '折旧与摊销' },
            ],
          },
          tax: { label: '税费', notes: ['根据图中营业利润、利息及其他和净利润倒推的账务金额；来源图未单列税项。'] },
        },
        otherExpenses: { items: [{ id: 'interest_other', label: '利息及其他' }] },
        profit: {
          gross: { label: '毛利润', notes: ['仅用于 SSOT 对齐；来源图未展示毛利润。'] },
          operating: { label: '营业利润', notes: ['利润率 13%', '同比 (2 个百分点)'] },
          net: { label: '净利润', notes: ['利润率 8%', '同比 (1 个百分点)'] },
        },
      },
    },
  });
})(window);
