/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/hims-hers-q4-fy25.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push(
    {
      key: 'hims-hers-q4-fy25',
      company: 'Hims & Hers',
      period: 'Q4 FY25',
      periodNote: 'Quarter ended Dec. 31, 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/hims-hers-q4-fy25.png',
      roundingTolerance: 1.1,
      notes: [
        'The source infographic rounds revenue, gross profit, cost of revenue, and net income to whole millions; its displayed income-statement path differs by up to $1M after rounding.',
      ],
      revenue: {
        total: 618,
        notes: ['+28% Y/Y'],
        items: [
          { id: 'online_revenue', label: 'Online revenue', value: 609, notes: ['+29% Y/Y'] },
          { id: 'wholesale_revenue', label: 'Wholesale revenue', value: 9, notes: ['(16%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 173 },
        operatingExpenses: {
          total: 435,
          items: [
            { id: 'marketing', label: 'Marketing', value: 238, notes: ['39% of revenue', '(7pp) Y/Y'] },
            { id: 'operations_support', label: 'Operations & support', value: 80, notes: ['13% of revenue', '+1pp Y/Y'] },
            { id: 'general_admin', label: 'General & admin', value: 76, notes: ['12% of revenue', '+2pp Y/Y'] },
            { id: 'tech_development', label: 'Tech & development', value: 41, notes: ['7% of revenue', '+2pp Y/Y'] },
          ],
        },
        tax: {
          label: 'Tax not separately shown',
          value: 0,
          notes: ['No separate tax flow appears in the source infographic.'],
        },
      },
      otherIncome: {
        total: 11,
        items: [{ id: 'other_income', label: 'Other', value: 11 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 444, notes: ['72% margin', '(5pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 9, notes: ['1% margin', '(2pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 21, notes: ['3% margin', '(2pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月 31 日的季度',
          notes: ['来源信息图将收入、毛利润、收入成本和净利润均四舍五入至百万美元；四舍五入后损益路径最多相差 1 百万美元。'],
          revenue: {
            notes: ['同比 +28%'],
            items: [
              { id: 'online_revenue', label: '线上收入', notes: ['同比 +29%'] },
              { id: 'wholesale_revenue', label: '批发收入', notes: ['同比 (16%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'marketing', label: '营销', notes: ['占收入 39%', '同比 (7 个百分点)'] },
                { id: 'operations_support', label: '运营与支持', notes: ['占收入 13%', '同比 +1 个百分点'] },
                { id: 'general_admin', label: '一般及行政', notes: ['占收入 12%', '同比 +2 个百分点'] },
                { id: 'tech_development', label: '技术与开发', notes: ['占收入 7%', '同比 +2 个百分点'] },
              ],
            },
            tax: { label: '未单列税费', notes: ['来源信息图未显示单独的税费流。'] },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 72%', '同比 (5 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 1%', '同比 (2 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 3%', '同比 (2 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
