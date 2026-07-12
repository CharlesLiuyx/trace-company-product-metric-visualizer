/* Pure income-statement SSOT. Sankey geometry stays in data/datasets/chewy-q1-fy26.js. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'chewy-q1-fy26',
    company: 'Chewy',
    period: 'Q1 FY26',
    periodNote: '13 weeks ended May 3, 2026',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/chewy-q1-fy26.png',
    roundingTolerance: 0.15,
    revenue: {
      total: 3.4,
      notes: ['+8% Y/Y', 'Reported net sales were $3.357B; the source chart rounds to $3.4B.'],
      items: [
        { id: 'consumables', label: 'Consumables', value: 2.3, notes: ['+5% Y/Y'] },
        { id: 'hardgoods', label: 'Hardgoods', value: 0.4, notes: ['+15% Y/Y'] },
        { id: 'other', label: 'Other', value: 0.7, notes: ['+12% Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 2.3, notes: ['Reported cost of goods sold was $2.346B.'] },
      operatingExpenses: {
        total: 0.9,
        items: [
          { id: 'ga', label: 'G&A', value: 0.7, notes: ['20% of revenue', '(1pp) Y/Y', 'Reported selling, general and administrative expense was $0.677B.'] },
          { id: 'advertising_marketing', label: 'Advertising & Marketing', value: 0.2, notes: ['6% of revenue', '(0pp) Y/Y', 'Reported advertising and marketing expense was $0.206B.'] },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.037, notes: ['Reported income tax provision was $36.5M; source chart rounds to ($37M).'] },
    },
    otherIncome: {
      total: 0.003,
      items: [{ id: 'interest', label: 'Interest', value: 0.003, notes: ['Reported interest and other income, net was $2.8M; source chart rounds to $3M.'] }],
    },
    otherExpenses: { total: 0, items: [] },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 1.0, notes: ['30% margin', '+0pp Y/Y', 'Reported gross profit was $1.011B.'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 0.1, notes: ['4% margin', '+1pp Y/Y', 'Reported income from operations was $128.5M. The source graphic visibly prints $0.1M, which conflicts with its own margin and is retained by the View adapter for source fidelity.'] },
      net: { id: 'net_profit', label: 'Net profit', value: 0.1, notes: ['3% margin', '+1pp Y/Y', 'Reported net income was $94.8M.'] },
    },
    i18n: {
      zh: {
        period: '2026 财年第一季度',
        periodNote: '截至 2026 年 5 月 3 日的 13 周',
        revenue: {
          notes: ['同比 +8%', '报告净销售额为 $3.357B；来源图四舍五入为 $3.4B。'],
          items: [
            { id: 'consumables', label: '消耗品', notes: ['同比 +5%'] },
            { id: 'hardgoods', label: '耐用品', notes: ['同比 +15%'] },
            { id: 'other', label: '其他', notes: ['同比 +12%'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本', notes: ['报告销售成本为 $2.346B。'] },
          operatingExpenses: {
            items: [
              { id: 'ga', label: '一般及行政费用', notes: ['占收入 20%', '同比 (1 个百分点)', '报告销售、一般及行政费用为 $0.677B。'] },
              { id: 'advertising_marketing', label: '广告与营销', notes: ['占收入 6%', '同比 (0 个百分点)', '报告广告与营销费用为 $0.206B。'] },
            ],
          },
          tax: { label: '税费', notes: ['报告所得税费用为 $36.5M；来源图四舍五入为 ($37M)。'] },
        },
        otherIncome: {
          items: [{ id: 'interest', label: '利息', notes: ['报告利息及其他收入净额为 $2.8M；来源图四舍五入为 $3M。'] }],
        },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 30%', '同比 +0 个百分点', '报告毛利润为 $1.011B。'] },
          operating: { label: '营业利润', notes: ['利润率 4%', '同比 +1 个百分点', '报告营业利润为 $128.5M；来源图可见地写为 $0.1M，与其利润率不一致，View Adapter 按来源保留。'] },
          net: { label: '净利润', notes: ['利润率 3%', '同比 +1 个百分点', '报告净利润为 $94.8M。'] },
        },
      },
    },
  });
})(window);
