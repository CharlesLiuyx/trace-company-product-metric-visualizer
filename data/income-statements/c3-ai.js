/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/<dataset-key>.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push(
    {
      key: 'c3-ai-q4-fy26',
      company: 'C3.ai',
      period: 'Q4 FY26',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/c3-ai-q4-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 52,
        notes: ['(53)% Y/Y'],
        items: [
          { id: 'subscription', label: 'Subscription', value: 48, notes: ['+25% Y/Y', '25% gross margin'] },
          { id: 'services', label: 'Services', value: 3, notes: ['(85%) Y/Y', '65% gross margin'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 40,
          notes: ['Revenue less gross profit differs by $1M due to rounded source-chart values.'],
        },
        operatingExpenses: {
          total: 132,
          items: [
            { id: 'sm', label: 'Sales & marketing', value: 49, notes: ['96% of revenue', '+31pp Y/Y'] },
            { id: 'rnd', label: 'Research & development', value: 47, notes: ['92% of revenue', '+38pp Y/Y'] },
            { id: 'ga', label: 'General & admin', value: 25, notes: ['49% of revenue', '+23pp Y/Y'] },
            { id: 'restructuring', label: 'Restructuring', value: 11, notes: ['New'] },
          ],
        },
        tax: {
          label: 'Tax',
          value: 0,
          notes: ['No separate tax line is shown in the source chart.'],
        },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 11, notes: ['22% margin', '(40pp) Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -121, notes: ['(235%) margin', '(153pp) Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -121,
          notes: ['No separate net income or net loss line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2026 财年第四季度',
          periodNote: '截至 2026 年 4 月',
          revenue: {
            notes: ['同比 (53%)'],
            items: [
              { id: 'subscription', label: '订阅', notes: ['同比 +25%', '毛利率 25%'] },
              { id: 'services', label: '服务', notes: ['同比 (85%)', '毛利率 65%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              notes: ['收入减毛利润因来源图数值取整相差 $1M。'],
            },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 96%', '同比 +31 个百分点'] },
                { id: 'rnd', label: '研发', notes: ['占收入 92%', '同比 +38 个百分点'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 49%', '同比 +23 个百分点'] },
                { id: 'restructuring', label: '重组', notes: ['新增'] },
              ],
            },
            tax: {
              label: '税费',
              notes: ['来源图未展示单独税费项目。'],
            },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 22%', '同比 (40 个百分点)'] },
            operating: { label: '营业亏损', notes: ['利润率 (235%)', '同比 (153 个百分点)'] },
            net: { label: '营业亏损', notes: ['来源图未展示单独净利润或净亏损项目。'] },
          },
        },
      },
    }
  );
})(window);
