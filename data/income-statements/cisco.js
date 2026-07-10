/* Pure income-statement SSOT. Sankey geometry stays in data/datasets/. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'cisco-q2-fy26',
    company: 'Cisco',
    period: 'Q2 FY26',
    periodNote: 'Ending Jan. 2026',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/cisco-q2-fy26.png',
    roundingTolerance: 0.15,
    revenue: {
      total: 15.349,
      notes: ['+10% Y/Y'],
      items: [
        { id: 'networking', label: 'Networking', value: 8.294, notes: ['+21% Y/Y'] },
        { id: 'security', label: 'Security', value: 2.018, notes: ['(4%) Y/Y'] },
        { id: 'collaboration', label: 'Collaboration', value: 1.054, notes: ['+6% Y/Y'] },
        { id: 'observability', label: 'Observability', value: 0.277, notes: ['Flat Y/Y'] },
        { id: 'services', label: 'Services', value: 3.707, notes: ['(1%) Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: {
        id: 'cost_of_sales',
        label: 'Cost of sales',
        value: 5.377,
        items: [
          { id: 'product_cost_of_sales', label: 'Products', value: 4.205, notes: ['64% gross margin'] },
          { id: 'services_cost_of_sales', label: 'Services', value: 1.172, notes: ['68% gross margin'] },
        ],
      },
      operatingExpenses: {
        total: 6.191,
        items: [
          { id: 'sm', label: 'S&M', value: 2.881 },
          { id: 'rnd', label: 'R&D', value: 2.355 },
          { id: 'ga', label: 'G&A', value: 0.688 },
          { id: 'amortization', label: 'Amortization', value: 0.231 },
          { id: 'restructuring_other', label: 'Other', value: 0.036, notes: ['Restructuring and other charges'] },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.471 },
    },
    otherIncome: { total: 0, items: [] },
    otherExpenses: {
      total: 0.135,
      items: [{ id: 'other_expense', label: 'Other', value: 0.135, notes: ['Net interest and other expense'] }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 9.972, notes: ['65% margin', '(0pp) Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 3.781, notes: ['25% margin', '+2pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 3.175, notes: ['21% margin', '+3pp Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2026 财年第二季度',
        periodNote: '截至 2026 年 1 月',
        revenue: {
          notes: ['同比 +10%'],
          items: [
            { id: 'networking', label: '网络', notes: ['同比 +21%'] },
            { id: 'security', label: '安全', notes: ['同比 (4%)'] },
            { id: 'collaboration', label: '协作', notes: ['同比 +6%'] },
            { id: 'observability', label: '可观测性', notes: ['同比持平'] },
            { id: 'services', label: '服务', notes: ['同比 (1%)'] },
          ],
        },
        costs: {
          costOfRevenue: {
            label: '销售成本',
            items: [
              { id: 'product_cost_of_sales', label: '产品', notes: ['毛利率 64%'] },
              { id: 'services_cost_of_sales', label: '服务', notes: ['毛利率 68%'] },
            ],
          },
          operatingExpenses: {
            items: [
              { id: 'sm', label: '销售与市场' },
              { id: 'rnd', label: '研发' },
              { id: 'ga', label: '一般及行政' },
              { id: 'amortization', label: '摊销' },
              { id: 'restructuring_other', label: '其他', notes: ['重组及其他费用'] },
            ],
          },
          tax: { label: '税费' },
        },
        otherExpenses: { items: [{ id: 'other_expense', label: '其他', notes: ['净利息及其他费用'] }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 65%', '同比 (0 个百分点)'] },
          operating: { label: '营业利润', notes: ['利润率 25%', '同比 +2 个百分点'] },
          net: { label: '净利润', notes: ['利润率 21%', '同比 +3 个百分点'] },
        },
      },
    },
  });
})(window);
