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
      key: 'crowdstrike-q1-fy27',
      company: 'CrowdStrike',
      period: 'Q1 FY27',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/crowdstrike-q1-fy27.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 1386,
        notes: ['+26% Y/Y'],
        items: [
          { id: 'subscription', label: 'Subscription', value: 1321, notes: ['+26% Y/Y'] },
          { id: 'professional_services', label: 'Professional services', value: 65, notes: ['+23% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 342 },
        operatingExpenses: {
          total: 1074,
          items: [
            { id: 'sm', label: 'S&M', value: 489, notes: ['35% of revenue', '(5pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 408, notes: ['29% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 177, notes: ['13% of revenue', '(2pp) Y/Y'] },
          ],
        },
        tax: { label: 'Tax', value: 0 },
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1043, notes: ['75% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -31, notes: ['(2%) margin', '+9pp Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -31,
          notes: ['No separate net loss line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2027 财年第一季度',
          periodNote: '截至 2026 年 4 月',
          revenue: {
            notes: ['同比 +26%'],
            items: [
              { id: 'subscription', label: '订阅', notes: ['同比 +26%'] },
              { id: 'professional_services', label: '专业服务', notes: ['同比 +23%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 35%', '同比 (5 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 29%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 13%', '同比 (2 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 75%', '同比 +2 个百分点'] },
            operating: { label: '营业亏损', notes: ['利润率 (2%)', '同比 +9 个百分点'] },
            net: {
              label: '营业亏损',
              notes: ['来源图未单独显示净亏损项目。'],
            },
          },
        },
      },
    }
  );
})(window);
