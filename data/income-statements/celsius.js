/* Pure income-statement SSOT records. Sankey geometry stays in data/datasets/. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'celsius-q1-fy26',
    company: 'Celsius',
    period: 'Q1 FY26',
    periodNote: 'Ending Mar. 31, 2026',
    currency: '$',
    unit: 'M',
    decimals: 0,
    sourceImage: 'input/processed/celsius-q1-fy26.png',
    roundingTolerance: 1,
    sourceUrl: 'https://www.sec.gov/Archives/edgar/data/1341766/000134176626000039/celh-20260331.htm',
    revenue: {
      total: 782.615,
      notes: ['+138% Y/Y'],
      items: [
        {
          id: 'revenue_by_customer',
          label: 'Revenue by customer',
          value: 782.615,
          children: [
            { id: 'pepsico', label: 'PepsiCo', value: 461.7, notes: ['+143% Y/Y'] },
            { id: 'amazon', label: 'Amazon', value: 65.7, notes: ['+65% Y/Y'] },
            { id: 'all_others', label: 'All Others', value: 255.215, notes: ['+156% Y/Y'] },
          ],
        },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 404.548 },
      operatingExpenses: {
        total: 239.074,
        items: [
          { id: 'sga', label: 'SG&A expenses', value: 234.647, notes: ['30% of revenue', '+8pp Y/Y'] },
          { id: 'other_opex', label: 'Distributor termination fees', value: 4.427, notes: ['1% of revenue', '+1pp Y/Y'] },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 27.437 },
    },
    otherExpenses: {
      total: 1.457,
      items: [{ id: 'other_nonoperating', label: 'Other', value: 1.457 }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 378.067, notes: ['48% margin', '(4pp) Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 138.993, notes: ['18% margin', '+2pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 110.099, notes: ['14% margin', '+1pp Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2026 财年第一季度',
        periodNote: '截至 2026 年 3 月 31 日',
        revenue: {
          notes: ['同比 +138%'],
          items: [
            {
              id: 'revenue_by_customer',
              label: '按客户划分的收入',
              children: [
                { id: 'pepsico', label: '百事公司', notes: ['同比 +143%'] },
                { id: 'amazon', label: '亚马逊', notes: ['同比 +65%'] },
                { id: 'all_others', label: '其他所有客户', notes: ['同比 +156%'] },
              ],
            },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: {
            items: [
              { id: 'sga', label: '销售、一般及行政费用', notes: ['占收入 30%', '同比 +8 个百分点'] },
              { id: 'other_opex', label: '其他', notes: ['占收入 1%', '同比 +1 个百分点'] },
            ],
          },
          tax: { label: '税费' },
        },
        otherExpenses: { items: [{ id: 'other_nonoperating', label: '其他' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 48%', '同比 (4 个百分点)'] },
          operating: { label: '营业利润', notes: ['利润率 18%', '同比 +2 个百分点'] },
          net: { label: '净利润', notes: ['利润率 14%', '同比 +1 个百分点'] },
        },
      },
    },
  });
})(window);
