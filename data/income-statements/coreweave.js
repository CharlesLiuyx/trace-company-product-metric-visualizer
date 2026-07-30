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
      key: 'coreweave-q2-fy25',
      company: 'CoreWeave',
      period: 'Q2 FY25',
      periodNote: 'Q2 fiscal year 2025',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/coreweave-q2-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 1.213,
        notes: ['+207% Y/Y'],
        items: [
          {
            id: 'committed_contracts',
            label: 'Committed Contracts',
            value: 1.189,
            notes: ['+213% Y/Y'],
            children: [
              { id: 'united_states', label: 'United States', value: 1.148, notes: ['+210% Y/Y'] },
              { id: 'rest_of_world', label: 'Rest of World', value: 0.065, notes: ['+158% Y/Y'] },
            ],
          },
          { id: 'on_demand_services', label: 'On-demand Services', value: 0.024, notes: ['+53% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 0.313 },
        operatingExpenses: {
          total: 0.881,
          items: [
            { id: 'rnd', label: 'R&D', value: 0.67, notes: ['55% of revenue', '+9pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.174, notes: ['14% of revenue', '+9pp Y/Y'] },
            { id: 'sm', label: 'S&M', value: 0.037, notes: ['3% of revenue', '+2pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 0.31,
        items: [{ id: 'other_expenses', label: 'Other', value: 0.31 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 0.9, notes: ['74% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.019, notes: ['2% margin', '(18pp) Y/Y'] },
        net: { id: 'net_loss', label: 'Net loss', value: -0.291, notes: ['(24%) margin', '+58pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第二季度',
          periodNote: '2025 财年第二季度',
          revenue: {
            notes: ['同比 +207%'],
            items: [
              {
                id: 'committed_contracts', label: '已承诺合同', notes: ['同比 +213%'],
                children: [
                  { id: 'united_states', label: '美国', notes: ['同比 +210%'] },
                  { id: 'rest_of_world', label: '世界其他地区', notes: ['同比 +158%'] },
                ],
              },
              { id: 'on_demand_services', label: '按需服务', notes: ['同比 +53%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 55%', '同比 +9 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 14%', '同比 +9 个百分点'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 3%', '同比 +2 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'other_expenses', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 74%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 2%', '同比 (18 个百分点)'] },
            net: { label: '净亏损', notes: ['利润率 (24%)', '同比 +58 个百分点'] },
          },
        },
      },
    },
    {
      key: 'coreweave-q1-fy25',
      company: 'CoreWeave',
      period: 'Q1 FY25',
      periodNote: 'Q1 fiscal year 2025',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/coreweave-q1-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 0.982,
        notes: ['+420% Y/Y'],
        items: [
          {
            id: 'committed_contracts',
            label: 'Committed Contracts',
            value: 0.962,
            notes: ['+442% Y/Y'],
          },
          { id: 'on_demand_services', label: 'On-demand Services', value: 0.02, notes: ['+73% Y/Y'] },
        ],
        breakdowns: [
          {
            id: 'geographic',
            label: 'Revenue by geography',
            total: 0.982,
            items: [
              { id: 'united_states', label: 'United States', value: 0.929, notes: ['+425% Y/Y'] },
              { id: 'rest_of_world', label: 'Rest of World', value: 0.052, notes: ['+345% Y/Y'] },
            ],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 0.262 },
        operatingExpenses: {
          total: 0.747,
          items: [
            { id: 'rnd', label: 'R&D', value: 0.561, notes: ['57% of revenue', '+8pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.175, notes: ['18% of revenue', '+9pp Y/Y'] },
            { id: 'sm', label: 'S&M', value: 0.011, notes: ['1% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 0.719, notes: ['73% margin', '+5pp Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -0.027, notes: ['(3%) margin', '(12pp) Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -0.027,
          notes: ['No separate net loss line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2025 财年第一季度',
          periodNote: '2025 财年第一季度',
          revenue: {
            notes: ['同比 +420%'],
            items: [
              {
                id: 'committed_contracts', label: '已承诺合同', notes: ['同比 +442%'],
              },
              { id: 'on_demand_services', label: '按需服务', notes: ['同比 +73%'] },
            ],
            breakdowns: [
              {
                id: 'geographic',
                label: '按地区划分的收入',
                items: [
                  { id: 'united_states', label: '美国', notes: ['同比 +425%'] },
                  { id: 'rest_of_world', label: '世界其他地区', notes: ['同比 +345%'] },
                ],
              },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 57%', '同比 +8 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 18%', '同比 +9 个百分点'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 1%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 73%', '同比 +5 个百分点'] },
            operating: { label: '营业亏损', notes: ['利润率 (3%)', '同比 (12 个百分点)'] },
            net: { label: '营业亏损', notes: ['来源图未单独显示净亏损项目。'] },
          },
        },
      },
    },
    {
      key: 'coreweave-q3-fy25',
      company: 'CoreWeave',
      period: 'Q3 FY25',
      periodNote: 'Q3 fiscal year 2025',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/coreweave-q3-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 1.365,
        notes: ['+134% Y/Y'],
        items: [
          {
            id: 'committed_contracts',
            label: 'Committed Contracts',
            value: 1.338,
            notes: ['+139% Y/Y'],
            children: [
              { id: 'united_states', label: 'United States', value: 1.281, notes: ['+134% Y/Y'] },
              { id: 'rest_of_world', label: 'Rest of World', value: 0.083, notes: ['+127% Y/Y'] },
            ],
          },
          { id: 'on_demand_services', label: 'On-demand Services', value: 0.027, notes: ['+17% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 0.369 },
        operatingExpenses: {
          total: 0.944,
          items: [
            { id: 'rnd', label: 'R&D', value: 0.747, notes: ['55% of revenue', '+6pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.152, notes: ['11% of revenue', '+5pp Y/Y'] },
            { id: 'sm', label: 'S&M', value: 0.045, notes: ['3% of revenue', '+2pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 0.162,
        items: [{ id: 'other_expenses', label: 'Other', value: 0.162 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 0.996, notes: ['73% margin', '(3pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.052, notes: ['4% margin', '(16pp) Y/Y'] },
        net: { id: 'net_loss', label: 'Net loss', value: -0.11, notes: ['(8%) margin', '+54pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '2025 财年第三季度',
          revenue: {
            notes: ['同比 +134%'],
            items: [
              {
                id: 'committed_contracts', label: '已承诺合同', notes: ['同比 +139%'],
                children: [
                  { id: 'united_states', label: '美国', notes: ['同比 +134%'] },
                  { id: 'rest_of_world', label: '世界其他地区', notes: ['同比 +127%'] },
                ],
              },
              { id: 'on_demand_services', label: '按需服务', notes: ['同比 +17%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 55%', '同比 +6 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 11%', '同比 +5 个百分点'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 3%', '同比 +2 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'other_expenses', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 73%', '同比 (3 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 4%', '同比 (16 个百分点)'] },
            net: { label: '净亏损', notes: ['利润率 (8%)', '同比 +54 个百分点'] },
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
    },
    {
      key: 'coreweave-fy24',
      company: 'CoreWeave',
      period: 'FY24',
      periodNote: 'Fiscal year 2024',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/coreweave-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 1.915,
        notes: ['+737% Y/Y'],
        items: [
          {
            id: 'committed_contracts',
            label: 'Committed Contracts',
            value: 1.8,
            notes: ['+813% Y/Y', 'The source chart rounds this revenue stream to $1.8B.'],
          },
          {
            id: 'on_demand_services',
            label: 'On-demand Services',
            value: 0.1,
            notes: ['+179% Y/Y', 'The source chart rounds this revenue stream to $0.1B.'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 0.493 },
        operatingExpenses: {
          total: 1.098,
          items: [
            {
              id: 'rnd',
              label: 'R&D',
              value: 0.961,
              notes: ['51% of revenue', '+44pp Y/Y', 'Reported by CoreWeave as technology and infrastructure.'],
            },
            { id: 'ga', label: 'G&A', value: 0.119, notes: ['6% of revenue', '+5pp Y/Y'] },
            { id: 'sm', label: 'S&M', value: 0.018, notes: ['1% of revenue', '+0pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.119 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 1.187,
        notes: [
          'The source-chart total includes the $119M tax provision.',
          'Interest & Other nets $361M of interest expense against $49M of other income.',
        ],
        items: [
          { id: 'loss_fair_value_adjustments', label: 'Loss on fair value adjustments', value: 0.756 },
          { id: 'interest_other', label: 'Interest & Other', value: 0.312 },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1.422, notes: ['76% margin', '+8pp Y/Y'] },
        operating: {
          id: 'operating_profit',
          label: 'Operating profit',
          value: 0.324,
          notes: [
            '17% margin',
            '+18pp Y/Y',
            'The source chart displays $0.4B; CoreWeave reported $324M, which correctly rounds to $0.3B.',
          ],
        },
        net: { id: 'net_loss', label: 'Net loss', value: -0.863 },
      },
      i18n: {
        zh: {
          period: '2024 财年',
          periodNote: '2024 财年',
          revenue: {
            notes: ['同比 +737%'],
            items: [
              {
                id: 'committed_contracts',
                label: '已承诺合同',
                notes: ['同比 +813%', '来源图将该收入流四舍五入显示为 $1.8B。'],
              },
              {
                id: 'on_demand_services',
                label: '按需服务',
                notes: ['同比 +179%', '来源图将该收入流四舍五入显示为 $0.1B。'],
              },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                {
                  id: 'rnd',
                  label: '研发',
                  notes: ['占收入 51%', '同比 +44 个百分点', 'CoreWeave 将其列报为技术和基础设施。'],
                },
                { id: 'ga', label: '管理费用', notes: ['占收入 6%', '同比 +5 个百分点'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 1%', '同比 +0 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            notes: ['来源图中的合计包含 $119M 税费。', '利息及其他为 $361M 利息费用扣除 $49M 其他收入后的净额。'],
            items: [
              { id: 'loss_fair_value_adjustments', label: '公允价值调整损失' },
              { id: 'interest_other', label: '利息及其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 76%', '同比 +8 个百分点'] },
            operating: {
              label: '营业利润',
              notes: ['利润率 17%', '同比 +18 个百分点', '来源图显示 $0.4B；CoreWeave 披露为 $324M，正确四舍五入为 $0.3B。'],
            },
            net: { label: '净亏损' },
          },
        },
      },
    }
  );
})(window);
