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
      key: 'atlassian-q3-fy26',
      company: 'Atlassian',
      period: 'Q3 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/atlassian-q3-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 1787,
        notes: ['+32% Y/Y'],
        items: [
          { id: 'cloud', label: 'Cloud', value: 1132, notes: ['+29% Y/Y'] },
          { id: 'data_center', label: 'Data Center', value: 561, notes: ['+44% Y/Y'] },
          { id: 'marketplace_services', label: 'Marketplace & Services', value: 94, notes: ['+7% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 263 },
        operatingExpenses: {
          total: 1580,
          notes: ['Operating expense line items sum to $1,581M because the source chart rounds each item.'],
          items: [
            { id: 'rnd', label: 'R&D', value: 927, notes: ['52% of revenue', '+1pp Y/Y'] },
            { id: 'sm', label: 'S&M', value: 439, notes: ['25% of revenue', '+3pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 215, notes: ['12% of revenue', '(0pp) Y/Y'] },
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1524, notes: ['85% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -56, notes: ['(3%) margin', '(2pp) Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -56,
          notes: ['No separate net income line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2026 财年第三季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +32%'],
            items: [
              { id: 'cloud', label: '云', notes: ['同比 +29%'] },
              { id: 'data_center', label: '数据中心', notes: ['同比 +44%'] },
              { id: 'marketplace_services', label: '市场与服务', notes: ['同比 +7%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['运营费用项目合计为 $1,581M，因为来源图表对各项目做了四舍五入。'],
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 52%', '同比 +1 个百分点'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 25%', '同比 +3 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 12%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 85%', '同比 +1 个百分点'] },
            operating: { label: '运营亏损', notes: ['利润率 (3%)', '同比 (2 个百分点)'] },
            net: {
              label: '运营亏损',
              notes: ['来源图表未显示单独的净利润项目。'],
            },
          },
        },
      },
    }
  );
})(window);
