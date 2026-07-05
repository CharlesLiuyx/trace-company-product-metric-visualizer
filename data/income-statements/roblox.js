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
      key: 'roblox-q1-fy26',
      company: 'Roblox',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/roblox-q1-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 1442,
        notes: ['+39% Y/Y'],
        items: [
          { id: 'north_america', label: 'North America', value: 838, notes: ['+29% Y/Y'] },
          { id: 'europe', label: 'Europe', value: 295, notes: ['+52% Y/Y'] },
          { id: 'apac', label: 'APAC', value: 169, notes: ['+55% Y/Y'] },
          { id: 'rest_of_world', label: 'Rest of world', value: 140, notes: ['+64% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 294 },
        operatingExpenses: {
          total: 1442,
          items: [
            { id: 'developer_fees', label: 'Developer fees', value: 423, notes: ['29% of revenue', '+2pp Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 422, notes: ['29% of revenue', '(7pp) Y/Y'] },
            { id: 'infrastructure', label: 'Infrastructure', value: 324, notes: ['22% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 209, notes: ['14% of revenue', '+3pp Y/Y'] },
            { id: 'sm', label: 'S&M', value: 64, notes: ['4% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0 },
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1148, notes: ['80% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -294, notes: ['(20%) margin', '+4pp Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -294,
          notes: ['No separate net income line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +39%'],
            items: [
              { id: 'north_america', label: '北美', notes: ['同比 +29%'] },
              { id: 'europe', label: '欧洲', notes: ['同比 +52%'] },
              { id: 'apac', label: '亚太', notes: ['同比 +55%'] },
              { id: 'rest_of_world', label: '世界其他地区', notes: ['同比 +64%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'developer_fees', label: '开发者费用', notes: ['占收入 29%', '同比 +2 个百分点'] },
                { id: 'rnd', label: '研发', notes: ['占收入 29%', '同比 (7 个百分点)'] },
                { id: 'infrastructure', label: '基础设施', notes: ['占收入 22%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 14%', '同比 +3 个百分点'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 4%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 80%', '同比 +1 个百分点'] },
            operating: { label: '营业亏损', notes: ['利润率 (20%)', '同比 +4 个百分点'] },
            net: { label: '营业亏损', notes: ['来源图未单独显示净利润项目。'] },
          },
        },
      },
    }
  );
})(window);
