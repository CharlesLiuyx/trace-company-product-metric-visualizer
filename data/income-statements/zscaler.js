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
      key: 'zscaler-q2-fy26',
      company: 'Zscaler',
      period: 'Q2 FY26',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/zscaler-q2-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 816,
        notes: ['+26% Y/Y', 'Regional values sum to $815M because the source chart rounds each displayed amount.'],
        items: [
          { id: 'united_states', label: 'United States', value: 465, notes: ['+33% Y/Y'] },
          { id: 'emea', label: 'EMEA', value: 228, notes: ['+18% Y/Y'] },
          { id: 'asia_pacific', label: 'Asia Pacific', value: 122, notes: ['+18% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 191 },
        operatingExpenses: {
          total: 676,
          items: [
            { id: 'sm', label: 'S&M', value: 369, notes: ['45% of revenue', '(2pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 229, notes: ['28% of revenue', '+2pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 78, notes: ['10% of revenue', '+0pp Y/Y'] },
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 624, notes: ['77% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -52, notes: ['(6%) margin', '(0pp) Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -52,
          notes: ['No separate net income or loss line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 1 月',
          revenue: {
            notes: ['同比 +26%', '地区收入加总为 $815M，因来源图对各显示金额取整。'],
            items: [
              { id: 'united_states', label: '美国', notes: ['同比 +33%'] },
              { id: 'emea', label: '欧洲、中东和非洲', notes: ['同比 +18%'] },
              { id: 'asia_pacific', label: '亚太', notes: ['同比 +18%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 45%', '同比 (2 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 28%', '同比 +2 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 10%', '同比 +0 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 77%', '同比 (1 个百分点)'] },
            operating: { label: '营业亏损', notes: ['利润率 (6%)', '同比 (0 个百分点)'] },
            net: {
              label: '营业亏损',
              notes: ['来源图未单独显示净利润或净亏损项目。'],
            },
          },
        },
      },
    }
  );
})(window);
