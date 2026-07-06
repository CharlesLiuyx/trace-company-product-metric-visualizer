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
      key: 'coreweave-q1-fy26',
      company: 'CoreWeave',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/coreweave-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 2.078,
        notes: ['+112% Y/Y'],
        items: [
          { id: 'united_states', label: 'United States', value: 1.9, notes: ['+105% Y/Y'] },
          { id: 'rest_of_world', label: 'Rest of World', value: 0.178, notes: ['+236% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 0.716 },
        operatingExpenses: {
          total: 1.506,
          items: [
            {
              id: 'rnd',
              label: 'R&D',
              value: 1.273,
              notes: ['61% of revenue', '+4pp Y/Y', 'Reported by CoreWeave as technology and infrastructure.'],
            },
            {
              id: 'ga',
              label: 'G&A',
              value: 0.164,
              notes: ['8% of revenue', '(10pp) Y/Y', 'Source chart displays this rounded value as ($0.2M).'],
            },
            { id: 'sm', label: 'S&M', value: 0.069, notes: ['3% of revenue', '+2pp Y/Y'] },
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1.362, notes: ['66% margin', '(8pp) Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -0.144, notes: ['(7%) margin', '(4pp) Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -0.144,
          notes: ['No separate net loss line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +112%'],
            items: [
              { id: 'united_states', label: '美国', notes: ['同比 +105%'] },
              { id: 'rest_of_world', label: '世界其他地区', notes: ['同比 +236%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 61%', '同比 +4 个百分点', 'CoreWeave 将其列报为技术和基础设施。'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 8%', '同比 (10 个百分点)', '来源图将该四舍五入值显示为 ($0.2M)。'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 3%', '同比 +2 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 66%', '同比 (8 个百分点)'] },
            operating: { label: '营业亏损', notes: ['利润率 (7%)', '同比 (4 个百分点)'] },
            net: { label: '营业亏损', notes: ['来源图未单独显示净亏损项目。'] },
          },
        },
      },
    },
    {
      key: 'coreweave-fy25',
      company: 'CoreWeave',
      period: 'FY25',
      periodNote: 'Fiscal year 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/coreweave-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 5.1,
        notes: ['+167% Y/Y', 'Geographic split shown in the source chart: United States $4.8B (+167% Y/Y), Rest of World $0.3B (+179% Y/Y).'],
        items: [
          { id: 'committed_contracts', label: 'Committed Contracts', value: 4.7, notes: ['+156% Y/Y'] },
          { id: 'on_demand_services', label: 'On-demand Services', value: 0.4, notes: ['+456% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 1.5 },
        operatingExpenses: {
          total: 3.7,
          items: [
            { id: 'rnd', label: 'R&D', value: 2.9, notes: ['57% of revenue', '+7pp Y/Y'] },
            {
              id: 'ga',
              label: 'G&A',
              value: 0.7,
              notes: ['13% of revenue', '+6pp Y/Y', 'Source chart displays this rounded value as ($0.7M).'],
            },
            { id: 'sm', label: 'S&M', value: 0.1, notes: ['3% of revenue', '+2pp Y/Y'] },
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 3.7, notes: ['72% margin', '(3pp) Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -0.046, notes: ['(1%) margin', '(18pp) Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -0.046,
          notes: ['No separate net loss line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2025 财年',
          periodNote: '2025 财年',
          revenue: {
            notes: ['同比 +167%', '来源图显示的地区拆分：美国 $4.8B（同比 +167%），世界其他地区 $0.3B（同比 +179%）。'],
            items: [
              { id: 'committed_contracts', label: '已承诺合同', notes: ['同比 +156%'] },
              { id: 'on_demand_services', label: '按需服务', notes: ['同比 +456%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 57%', '同比 +7 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 13%', '同比 +6 个百分点', '来源图将该四舍五入值显示为 ($0.7M)。'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 3%', '同比 +2 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 72%', '同比 (3 个百分点)'] },
            operating: { label: '营业亏损', notes: ['利润率 (1%)', '同比 (18 个百分点)'] },
            net: { label: '营业亏损', notes: ['来源图未单独显示净亏损项目。'] },
          },
        },
      },
    }
  );
})(window);
