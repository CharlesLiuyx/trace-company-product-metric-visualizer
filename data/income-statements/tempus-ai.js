/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/tempus-ai-q4-fy25.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push(
    {
      key: 'tempus-ai-q4-fy25',
      company: 'Tempus AI',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/tempus-ai-q4-fy25.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 367,
        notes: ['+83% Y/Y'],
        items: [
          {
            id: 'diagnostics',
            label: 'Diagnostics',
            value: 267,
            notes: ['Oncology & Hereditary', '61% gross margin', '+13pp Y/Y'],
          },
          {
            id: 'data_services',
            label: 'Data & Services',
            value: 100,
            notes: ['74% gross margin', '(6pp) Y/Y'],
          },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 129,
          notes: ['The displayed Genomics and Data & Services detail rounds to $130M.'],
          items: [
            { id: 'genomics', label: 'Genomics', value: 103 },
            { id: 'data_services_cost', label: 'Data & Services', value: 27 },
          ],
        },
        operatingExpenses: {
          total: 299,
          items: [
            { id: 'sga', label: 'SG&A', value: 209, notes: ['57% of revenue', '+1pp Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 50, notes: ['14% of revenue', '(1pp) Y/Y'] },
            { id: 'technology_rnd', label: 'Technology R&D', value: 40, notes: ['11% of revenue', '(5pp) Y/Y'] },
          ],
        },
        tax: { label: 'Tax', value: 0, notes: ['No separate tax line is shown in the source chart.'] },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 238, notes: ['65% margin', '+4pp Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -61, notes: ['(17%) margin', '+9pp Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -61,
          notes: ['No separate net income or net loss line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +83%'],
            items: [
              { id: 'diagnostics', label: '诊断业务', notes: ['肿瘤和遗传病检测', '毛利率 61%', '同比 +13 个百分点'] },
              { id: 'data_services', label: '数据与服务', notes: ['毛利率 74%', '同比 (6 个百分点)'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              notes: ['来源图的基因组学与数据和服务明细合计为 1.30 亿美元，因四舍五入高于显示的 1.29 亿美元。'],
              items: [
                { id: 'genomics', label: '基因组学' },
                { id: 'data_services_cost', label: '数据与服务' },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售、一般及行政费用', notes: ['占收入 57%', '同比 +1 个百分点'] },
                { id: 'rnd', label: '研发', notes: ['占收入 14%', '同比 (1 个百分点)'] },
                { id: 'technology_rnd', label: '技术研发', notes: ['占收入 11%', '同比 (5 个百分点)'] },
              ],
            },
            tax: { label: '税费', notes: ['来源图未单独显示税费。'] },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 65%', '同比 +4 个百分点'] },
            operating: { label: '营业亏损', notes: ['利润率 (17%)', '同比 +9 个百分点'] },
            net: { label: '营业亏损', notes: ['来源图未单独显示净利润或净亏损项目。'] },
          },
        },
      },
    }
  );
})(window);
