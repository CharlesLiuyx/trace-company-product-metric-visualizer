/* Pure income-statement SSOT. Sankey geometry stays in data/datasets/. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'gitlab-q1-fy27',
    company: 'GitLab',
    period: 'Q1 FY27',
    periodNote: 'Ending Apr. 2026',
    currency: '$',
    unit: 'M',
    decimals: 0,
    sourceImage: 'input/processed/gitlab-q1-fy27.png',
    roundingTolerance: 1.1,
    revenue: {
      total: 264,
      notes: ['+23% Y/Y'],
      items: [
        { id: 'subscription', label: 'Subscription', value: 239, notes: ['+23% Y/Y'] },
        { id: 'license', label: 'License', value: 25, notes: ['+24% Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 37 },
      operatingExpenses: {
        total: 242,
        notes: ['S&M, R&D, and G&A sum to the displayed $242M.'],
        items: [
          { id: 'sm', label: 'S&M', value: 119, notes: ['45% of revenue', '(5pp) Y/Y'] },
          { id: 'rnd', label: 'R&D', value: 71, notes: ['27% of revenue', '(3pp) Y/Y'] },
          { id: 'ga', label: 'G&A', value: 52, notes: ['20% of revenue', '(4pp) Y/Y'] },
        ],
      },
      tax: { label: 'Tax', value: 0 },
    },
    otherIncome: { total: 0, items: [] },
    otherExpenses: { total: 0, items: [] },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 227, notes: ['86% margin', '(3pp) Y/Y'] },
      operating: { id: 'operating_loss', label: 'Operating loss', value: -16, notes: ['(6%) margin', '+10pp Y/Y'] },
      net: {
        id: 'operating_loss',
        label: 'Operating loss',
        value: -16,
        notes: ['No separate net income or loss line is shown in the source chart.'],
      },
    },
    i18n: {
      zh: {
        period: '2027 财年第一季度',
        periodNote: '截至 2026 年 4 月',
        revenue: {
          notes: ['同比 +23%'],
          items: [
            { id: 'subscription', label: '订阅', notes: ['同比 +23%'] },
            { id: 'license', label: '许可', notes: ['同比 +24%'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: {
            notes: ['销售与市场、研发和管理费用合计为图中显示的 $242M。'],
            items: [
              { id: 'sm', label: '销售与市场', notes: ['占收入 45%', '同比 (5 个百分点)'] },
              { id: 'rnd', label: '研发', notes: ['占收入 27%', '同比 (3 个百分点)'] },
              { id: 'ga', label: '管理费用', notes: ['占收入 20%', '同比 (4 个百分点)'] },
            ],
          },
          tax: { label: '税费' },
        },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 86%', '同比 (3 个百分点)'] },
          operating: { label: '营业亏损', notes: ['利润率 (6%)', '同比 +10 个百分点'] },
          net: { label: '营业亏损', notes: ['来源图未单独显示净利润或净亏损项目。'] },
        },
      },
    },
  });
})(window);
