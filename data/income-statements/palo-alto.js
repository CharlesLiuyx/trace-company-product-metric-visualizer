/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/<dataset-key>.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'palo-alto-q2-fy26',
    company: 'Palo Alto Networks',
    period: 'Q2 FY26',
    periodNote: 'Ending Jan. 2026',
    currency: '$',
    unit: 'M',
    decimals: 0,
    sourceImage: 'input/processed/palo-alto-q2-fy26.png',
    roundingTolerance: 1,
    revenue: {
      total: 2594,
      notes: ['+15% Y/Y'],
      items: [
        { id: 'product', label: 'Product', value: 514, notes: ['+22% Y/Y', '78% gross margin'] },
        {
          id: 'subscription_and_support',
          label: 'Subscription and support',
          value: 2080,
          notes: ['+13% Y/Y', '73% gross margin'],
        },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 685 },
      operatingExpenses: {
        total: 1512,
        items: [
          { id: 'sm', label: 'S&M', value: 823, notes: ['32% of revenue', '(2pp) Y/Y'] },
          { id: 'rnd', label: 'R&D', value: 511, notes: ['20% of revenue', '(3pp) Y/Y'] },
          { id: 'ga', label: 'G&A', value: 178, notes: ['7% of revenue', '+0pp Y/Y'] },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 117 },
    },
    otherIncome: {
      total: 152,
      items: [{ id: 'other', label: 'Other', value: 152 }],
    },
    otherExpenses: {
      total: 0,
      items: [],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 1909, notes: ['74% margin', '+0pp Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 397, notes: ['15% margin', '+5pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 432, notes: ['17% margin', '+5pp Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2026 财年第二季度',
        periodNote: '截至 2026 年 1 月',
        revenue: {
          notes: ['同比 +15%'],
          items: [
            { id: 'product', label: '产品', notes: ['同比 +22%', '毛利率 78%'] },
            { id: 'subscription_and_support', label: '订阅和支持', notes: ['同比 +13%', '毛利率 73%'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: {
            items: [
              { id: 'sm', label: '销售与市场', notes: ['占收入 32%', '同比 (2 个百分点)'] },
              { id: 'rnd', label: '研发', notes: ['占收入 20%', '同比 (3 个百分点)'] },
              { id: 'ga', label: '管理费用', notes: ['占收入 7%', '同比 +0 个百分点'] },
            ],
          },
          tax: { label: '税费' },
        },
        otherIncome: { items: [{ id: 'other', label: '其他' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 74%', '同比 +0 个百分点'] },
          operating: { label: '营业利润', notes: ['利润率 15%', '同比 +5 个百分点'] },
          net: { label: '净利润', notes: ['利润率 17%', '同比 +5 个百分点'] },
        },
      },
    },
  });

  ssot.records.push({
    key: 'palo-alto-q3-fy26',
    company: 'Palo Alto Networks',
    period: 'Q3 FY26',
    periodNote: 'Ending Apr. 2026',
    currency: '$',
    unit: 'M',
    decimals: 0,
    sourceImage: 'input/processed/palo-alto-q3-fy26.png',
    roundingTolerance: 1,
    revenue: {
      total: 3002,
      notes: ['+31% Y/Y'],
      items: [
        { id: 'product', label: 'Products', value: 594, notes: ['+31% Y/Y', '72% gross margin'] },
        { id: 'subscription_and_support', label: 'Subscriptions and support', value: 2408, notes: ['+31% Y/Y', '66% gross margin'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 974 },
      operatingExpenses: {
        total: 2211,
        items: [
          { id: 'sm', label: 'S&M', value: 1161, notes: ['39% of revenue', '+4pp Y/Y'] },
          { id: 'rnd', label: 'R&D', value: 734, notes: ['24% of revenue', '+3pp Y/Y'] },
          { id: 'ga', label: 'G&A', value: 316, notes: ['11% of revenue', '+3pp Y/Y'] },
        ],
      },
      tax: { label: 'Tax', value: 0 },
    },
    otherIncome: { total: 0, items: [] },
    otherExpenses: { total: 0, items: [] },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 2028, notes: ['68% margin', '(5pp) Y/Y'] },
      operating: { id: 'operating_loss', label: 'Operating loss', value: -183, notes: ['(6%) margin', '(16pp) Y/Y'] },
      net: { id: 'operating_loss', label: 'Operating loss', value: -183, notes: ['No separate net income or loss line is shown in the source chart.'] },
    },
    i18n: {
      zh: {
        period: '2026 财年第三季度',
        periodNote: '截至 2026 年 4 月',
        revenue: {
          notes: ['同比 +31%'],
          items: [
            { id: 'product', label: '产品', notes: ['同比 +31%', '毛利率 72%'] },
            { id: 'subscription_and_support', label: '订阅和支持', notes: ['同比 +31%', '毛利率 66%'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: {
            items: [
              { id: 'sm', label: '销售与市场', notes: ['占收入 39%', '同比 +4 个百分点'] },
              { id: 'rnd', label: '研发', notes: ['占收入 24%', '同比 +3 个百分点'] },
              { id: 'ga', label: '管理费用', notes: ['占收入 11%', '同比 +3 个百分点'] },
            ],
          },
          tax: { label: '税费' },
        },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 68%', '同比 (5 个百分点)'] },
          operating: { label: '营业亏损', notes: ['利润率 (6%)', '同比 (16 个百分点)'] },
          net: { label: '营业亏损', notes: ['来源图未单独显示净利润或净亏损。'] },
        },
      },
    },
  });
})(window);
