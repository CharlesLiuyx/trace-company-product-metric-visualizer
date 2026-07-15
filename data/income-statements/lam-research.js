/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/<dataset-key>.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'lam-research-q1-fy26',
    company: 'Lam Research',
    period: 'Q1 FY26',
    periodNote: 'Ending Dec. 2025',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/lam-research-q1-fy26.png',
    roundingTolerance: 0.15,
    revenue: {
      total: 5.3,
      notes: ['+28% Y/Y'],
      items: [
        {
          id: 'systems',
          label: 'Systems',
          value: 3.5,
          notes: ['+48% Y/Y'],
          children: [
            { id: 'memory', label: 'Memory', value: 1.2, notes: ['+44% Y/Y'] },
            { id: 'foundry', label: 'Foundry', value: 2.1, notes: ['+117% Y/Y'] },
            { id: 'logic', label: 'Logic', value: 0.2, notes: ['(63%) Y/Y'] },
          ],
        },
        { id: 'customer_support', label: ['Customer', 'Support'], value: 1.8, notes: ['+0% Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_goods_sold', label: ['Cost of', 'goods sold'], value: 2.6 },
      operatingExpenses: {
        total: 0.9,
        items: [
          { id: 'rnd', label: 'R&D', value: 0.6, notes: ['11% of revenue', '(1pp) Y/Y'] },
          { id: 'sga', label: 'SG&A', value: 0.3, notes: ['5% of revenue', '(1pp) Y/Y'] },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.3 },
    },
    otherIncome: {
      total: 0.03,
      items: [{ id: 'interest', label: 'Interest', value: 0.03 }],
    },
    otherExpenses: {
      total: 0,
      items: [],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 2.7, notes: ['50% margin', '+2pp Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 1.8, notes: ['34% margin', '+4pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 1.6, notes: ['29% margin', '+3pp Y/Y'] },
    },
    sources: [
      {
        name: 'Lam Research quarterly results',
        url: 'https://investor.lamresearch.com/2026-01-28-Lam-Research-Corporation-Reports-Financial-Results-for-the-Quarter-Ended-December-28%2C-2025?asPDF=',
        note: 'The reference infographic rounds reported figures to the displayed $B amounts and labels the period Q1 FY26.',
      },
    ],
    i18n: {
      zh: {
        period: '2026 财年第一季度',
        periodNote: '截至 2025 年 12 月',
        revenue: {
          notes: ['同比 +28%'],
          items: [
            {
              id: 'systems',
              label: '系统',
              notes: ['同比 +48%'],
              children: [
                { id: 'memory', label: '存储', notes: ['同比 +44%'] },
                { id: 'foundry', label: '代工', notes: ['同比 +117%'] },
                { id: 'logic', label: '逻辑', notes: ['同比 (63%)'] },
              ],
            },
            { id: 'customer_support', label: ['客户', '支持'], notes: ['同比 +0%'] },
          ],
        },
        costs: {
          costOfRevenue: { label: ['销售', '成本'] },
          operatingExpenses: {
            items: [
              { id: 'rnd', label: '研发', notes: ['占收入 11%', '同比 (1 个百分点)'] },
              { id: 'sga', label: '销售、一般及管理', notes: ['占收入 5%', '同比 (1 个百分点)'] },
            ],
          },
          tax: { label: '税费' },
        },
        otherIncome: { items: [{ id: 'interest', label: '利息' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 50%', '同比 +2 个百分点'] },
          operating: { label: '营业利润', notes: ['利润率 34%', '同比 +4 个百分点'] },
          net: { label: '净利润', notes: ['利润率 29%', '同比 +3 个百分点'] },
        },
      },
    },
  });
})(window);
