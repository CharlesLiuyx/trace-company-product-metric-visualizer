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
      key: 'mongodb-q1-fy27',
      company: 'MongoDB',
      period: 'Q1 FY27',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/mongodb-q1-fy27.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 688,
        notes: ['+25% Y/Y'],
        items: [
          {
            id: 'subscription',
            label: 'Subscription',
            value: 666,
            notes: ['+25% Y/Y'],
            children: [
              { id: 'atlas', label: 'Atlas', value: 512, notes: ['+29% Y/Y', '75% of revenue', '+2pp Y/Y'] },
              { id: 'other_subscription', label: 'Other subscription', value: 154, notes: ['+13% Y/Y'] },
            ],
          },
          { id: 'services', label: 'Services', value: 21, notes: ['+22% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 191,
          notes: ['Revenue less gross profit differs by $1M due to rounded source-chart values.'],
        },
        operatingExpenses: {
          total: 521,
          notes: ['Visible operating-expense line items sum to $520M because the source chart rounds values.'],
          items: [
            { id: 'sm', label: 'Sales & marketing', value: 249, notes: ['36% of revenue', '(4pp) Y/Y'] },
            { id: 'rnd', label: 'Research & development', value: 200, notes: ['29% of revenue', '(2pp) Y/Y'] },
            { id: 'ga', label: 'General & admin', value: 71, notes: ['10% of revenue', '+0pp Y/Y'] },
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 496, notes: ['72% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -25, notes: ['(4%) margin', '+6pp Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -25,
          notes: ['No separate net income or net loss line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2027 财年第一季度',
          periodNote: '截至 2026 年 4 月',
          revenue: {
            notes: ['同比 +25%'],
            items: [
              {
                id: 'subscription',
                label: '订阅',
                notes: ['同比 +25%'],
                children: [
                  { id: 'atlas', label: 'Atlas', notes: ['同比 +29%', '占收入 75%', '同比 +2 个百分点'] },
                  { id: 'other_subscription', label: '其他订阅', notes: ['同比 +13%'] },
                ],
              },
              { id: 'services', label: '服务', notes: ['同比 +22%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              notes: ['收入减毛利润因来源图数值取整相差 $1M。'],
            },
            operatingExpenses: {
              notes: ['可见营业费用明细因项目取整合计为 $520M。'],
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 36%', '同比 (4 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 29%', '同比 (2 个百分点)'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 10%', '同比 +0 个百分点'] },
              ],
            },
            tax: {
              label: '税费',
              notes: ['来源图未展示单独税费项目。'],
            },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 72%', '同比 +1 个百分点'] },
            operating: { label: '营业亏损', notes: ['利润率 (4%)', '同比 +6 个百分点'] },
            net: { label: '营业亏损', notes: ['来源图未展示单独净利润或净亏损项目。'] },
          },
        },
      },
    }
  );
})(window);
