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
      key: 'pinterest-q1-fy26',
      company: 'Pinterest',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/pinterest-q1-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 1008,
        notes: ['+18% Y/Y'],
        items: [
          { id: 'us_canada', label: 'US & Canada', value: 750, notes: ['+13% Y/Y'] },
          { id: 'europe', label: 'Europe', value: 186, notes: ['+27% Y/Y'] },
          { id: 'rest_of_world', label: 'Rest of the world', value: 72, notes: ['+59% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 239 },
        operatingExpenses: {
          total: 849,
          notes: ['R&D, S&M, G&A, and restructuring line items sum to $850M because the source chart rounds to whole millions.'],
          items: [
            { id: 'rnd', label: 'R&D', value: 381, notes: ['38% of revenue', '(1pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 318, notes: ['32% of revenue', '+2pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 104, notes: ['10% of revenue', '(2pp) Y/Y'] },
            { id: 'restructuring', label: 'Restructuring', value: 47, notes: ['5% of revenue', '+5pp Y/Y'] },
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 769, notes: ['76% margin', '(0pp) Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -80, notes: ['(8%) margin', '(4pp) Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -80,
          notes: ['No separate net income line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +18%'],
            items: [
              { label: '美国和加拿大', notes: ['同比 +13%'] },
              { label: '欧洲', notes: ['同比 +27%'] },
              { label: '世界其他地区', notes: ['同比 +59%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['研发、销售与营销、管理费用和重组费用明细合计为 8.50 亿美元，因为源图按整百万美元四舍五入。'],
              items: [
                { label: '研发', notes: ['占收入 38%', '同比 (1 个百分点)'] },
                { label: '销售与营销', notes: ['占收入 32%', '同比 +2 个百分点'] },
                { label: '管理费用', notes: ['占收入 10%', '同比 (2 个百分点)'] },
                { label: '重组', notes: ['占收入 5%', '同比 +5 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 76%', '同比 0 个百分点'] },
            operating: { label: '营业亏损', notes: ['利润率 (8%)', '同比 (4 个百分点)'] },
            net: {
              label: '营业亏损',
              notes: ['源图未显示单独的净利润/净亏损项目。'],
            },
          },
        },
      },
    }
  );
})(window);
