/* Pure income-statement SSOT. Sankey geometry stays in data/datasets/. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'samsara-q1-fy27',
    company: 'Samsara',
    period: 'Q1 FY27',
    periodNote: 'Ending Apr. 2026',
    currency: '$',
    unit: 'M',
    decimals: 0,
    sourceImage: 'input/processed/samsara-q1-fy27.png',
    roundingTolerance: 1.1,
    revenue: {
      total: 479,
      notes: ['+31% Y/Y'],
      items: [
        { id: 'subscription', label: 'Subscription', value: 469 },
        { id: 'other_revenue', label: 'Other', value: 10 },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 118 },
      operatingExpenses: {
        total: 354,
        items: [
          { id: 'sm', label: 'Sales & marketing', value: 204, notes: ['43% of revenue', '(3pp) Y/Y'] },
          { id: 'rnd', label: 'Research & development', value: 98, notes: ['20% of revenue', '(2pp) Y/Y'] },
          { id: 'ga', label: 'General & admin', value: 53, notes: ['11% of revenue', '(8pp) Y/Y'] },
        ],
        notes: ['Sales & marketing, R&D, and G&A sum to $355M due to rounded source figures.'],
      },
      tax: { id: 'tax', label: 'Tax', value: 4 },
    },
    otherIncome: { total: 42, items: [{ id: 'other_income', label: 'Other', value: 42 }] },
    otherExpenses: { total: 0, items: [] },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 361, notes: ['75% margin', '(2pp) Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 7, notes: ['2% margin', '+11pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 45, notes: ['9% margin', '+15pp Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2027 财年第一季度',
        periodNote: '截至 2026 年 4 月',
        revenue: {
          notes: ['同比 +31%'],
          items: [{ id: 'subscription', label: '订阅' }, { id: 'other_revenue', label: '其他' }],
        },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: {
            items: [
              { id: 'sm', label: '销售与营销', notes: ['占收入 43%', '同比 (3 个百分点)'] },
              { id: 'rnd', label: '研发', notes: ['占收入 20%', '同比 (2 个百分点)'] },
              { id: 'ga', label: '一般及行政', notes: ['占收入 11%', '同比 (8 个百分点)'] },
            ],
            notes: ['销售与营销、研发和一般及行政因源图四舍五入合计为 $355M。'],
          },
          tax: { label: '税费' },
        },
        otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 75%', '同比 (2 个百分点)'] },
          operating: { label: '营业利润', notes: ['利润率 2%', '同比 +11 个百分点'] },
          net: { label: '净利润', notes: ['利润率 9%', '同比 +15 个百分点'] },
        },
      },
    },
  });
})(window);
