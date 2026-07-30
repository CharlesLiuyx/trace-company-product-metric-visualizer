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
      key: 'amd-q3-fy24',
      company: 'AMD',
      period: 'Q3 FY24',
      periodNote: 'Ending Sep. 2024',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/amd-q3-fy24.png',
      roundingTolerance: 0.05,
      revenue: {
        total: 6.819,
        notes: ['+18% Y/Y'],
        items: [
          { id: 'data_center', label: 'Data Center', value: 3.549, notes: ['+122% Y/Y', '29% operating margin', '+10pp Y/Y'] },
          { id: 'client', label: 'Client', value: 1.881, notes: ['+29% Y/Y', '15% operating margin', '+5pp Y/Y'] },
          { id: 'gaming', label: 'Gaming', value: 0.462, notes: ['(69%) Y/Y', '3% operating margin', '(11pp) Y/Y'] },
          { id: 'embedded', label: 'Embedded', value: 0.927, notes: ['(25%) Y/Y', '40% operating margin', '(9pp) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 3.400 },
        operatingExpenses: {
          total: 2.709,
          items: [
            { id: 'rnd', label: 'Research & development', value: 1.636, notes: ['24% of revenue', '(2pp) Y/Y'] },
            { id: 'sga', label: 'Sales, General & Admin', value: 0.721, notes: ['11% of revenue', '+1pp Y/Y'] },
            { id: 'amortization', label: 'Amortization of intangibles', value: 0.352, notes: ['5% of revenue', '(3pp) Y/Y'] },
          ],
        },
        tax: {
          label: 'Income tax expense',
          value: 0,
          notes: ['The source chart reports a separate positive $27M income tax benefit.'],
        },
      },
      operatingOtherIncome: { total: 0.014, items: [] },
      otherIncome: {
        total: 0.047,
        items: [
          { id: 'other', label: 'Other', value: 0.020, notes: ['Net non-operating income and equity income shown as Other in the source chart.'] },
          { id: 'tax_benefit', label: 'Tax', value: 0.027, notes: ['Positive income tax benefit shown as Tax in the source chart.'] },
        ],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 3.419, notes: ['50% margin', '+3pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.724, notes: ['11% margin', '+7pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.771, notes: ['11% margin', '+6pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第三季度',
          periodNote: '截至 2024 年 9 月',
          revenue: {
            notes: ['同比 +18%'],
            items: [
              { id: 'data_center', label: '数据中心', notes: ['同比 +122%', '营业利润率 29%', '同比 +10 个百分点'] },
              { id: 'client', label: '客户端', notes: ['同比 +29%', '营业利润率 15%', '同比 +5 个百分点'] },
              { id: 'gaming', label: '游戏', notes: ['同比 (69%)', '营业利润率 3%', '同比 (11 个百分点)'] },
              { id: 'embedded', label: '嵌入式', notes: ['同比 (25%)', '营业利润率 40%', '同比 (9 个百分点)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 24%', '同比 (2 个百分点)'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 11%', '同比 +1 个百分点'] },
                { id: 'amortization', label: '无形资产摊销', notes: ['占收入 5%', '同比 (3 个百分点)'] },
              ],
            },
            tax: { label: '所得税费用', notes: ['来源图表单独显示了 2700 万美元的正向所得税收益。'] },
          },
          otherIncome: {
            items: [
              { id: 'other', label: '其他', notes: ['来源图表中列为“其他”的非经营收入及权益收益净额。'] },
              { id: 'tax_benefit', label: '税收收益', notes: ['来源图表中列为“税费”的正向所得税收益。'] },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 50%', '同比 +3 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 11%', '同比 +7 个百分点'] },
            net: { label: '净利润', notes: ['利润率 11%', '同比 +6 个百分点'] },
          },
        },
      },
    },
    {
      key: 'amd-q1-fy23',
      company: 'AMD',
      period: 'Q1 FY23',
      periodNote: 'Ending Apr. 1, 2023',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/amd-q1-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 5.353,
        notes: ['(9%) Y/Y'],
        items: [
          { id: 'data_center', label: 'Data Center', value: 1.295, notes: ['+0% Y/Y', '11% operating margin'] },
          { id: 'client', label: 'Client', value: 0.739, notes: ['(65%) Y/Y', '(23%) operating margin'] },
          { id: 'gaming', label: 'Gaming', value: 1.757, notes: ['(6%) Y/Y', '18% operating margin'] },
          { id: 'embedded', label: 'Embedded', value: 1.562, notes: ['51% operating margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 2.994 },
        operatingExpenses: {
          total: 2.514,
          items: [
            { id: 'rnd', label: 'Research & development', value: 1.411, notes: ['26% of revenue', '+8pp Y/Y'] },
            { id: 'sga', label: 'Sales, General & Admin', value: 0.585, notes: ['11% of revenue', '+1pp Y/Y'] },
            { id: 'amortization', label: 'Amortization of intangibles', value: 0.518, notes: ['10% of revenue', '+5pp Y/Y'] },
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 2.359, notes: ['44% margin', '(4pp) Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -0.2, notes: ['(3%) margin', '(19pp) Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -0.2,
          notes: ['No separate net income or net loss line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2023 财年第一季度',
          periodNote: '截至 2023 年 4 月 1 日',
          revenue: {
            notes: ['同比 (9%)'],
            items: [
              { id: 'data_center', label: '数据中心', notes: ['同比 +0%', '营业利润率 11%'] },
              { id: 'client', label: '客户端', notes: ['同比 (65%)', '营业利润率 (23%)'] },
              { id: 'gaming', label: '游戏', notes: ['同比 (6%)', '营业利润率 18%'] },
              { id: 'embedded', label: '嵌入式', notes: ['营业利润率 51%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 26%', '同比 +8 个百分点'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 11%', '同比 +1 个百分点'] },
                { id: 'amortization', label: '无形资产摊销', notes: ['占收入 10%', '同比 +5 个百分点'] },
              ],
            },
            tax: { label: '税费', notes: ['来源图未单列税费项。'] },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 44%', '同比 (4 个百分点)'] },
            operating: { label: '营业亏损', notes: ['利润率 (3%)', '同比 (19 个百分点)'] },
            net: { label: '营业亏损', notes: ['来源图未单列净利润或净亏损项。'] },
          },
        },
      },
    },
    {
      key: 'amd-q1-fy24',
      company: 'AMD',
      period: 'Q1 FY24',
      periodNote: 'Ending Mar. 2024',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/amd-q1-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 5.473,
        notes: ['+2% Y/Y'],
        items: [
          { id: 'data_center', label: 'Data Center', value: 2.337, notes: ['+80% Y/Y', '23% operating margin'] },
          { id: 'client', label: 'Client', value: 1.368, notes: ['+85% Y/Y', '6% operating margin'] },
          { id: 'gaming', label: 'Gaming', value: 0.922, notes: ['(48%) Y/Y', '16% operating margin'] },
          { id: 'embedded', label: 'Embedded', value: 0.846, notes: ['(46%) Y/Y', '40% operating margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 2.913 },
        operatingExpenses: {
          total: 2.524,
          items: [
            { id: 'rnd', label: 'Research & development', value: 1.525, notes: ['28% of revenue', '+2pp Y/Y'] },
            { id: 'sga', label: 'Sales, General & Admin', value: 0.620, notes: ['11% of revenue', '+0pp Y/Y'] },
            { id: 'amortization', label: 'Amortization of intangibles', value: 0.392, notes: ['7% of revenue', '(3pp) Y/Y'] },
          ],
        },
      },
      otherIncome: {
        total: 0.087,
        items: [
          { id: 'other', label: 'Other', value: 0.035, notes: ['Net non-operating income after operating profit.'] },
          { id: 'tax_benefit', label: 'Tax benefit', value: 0.052 },
        ],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 2.560, notes: ['47% margin', '+3pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.036, notes: ['1% margin', '+3pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.123, notes: ['2% margin', '+5pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第一季度',
          periodNote: '截至 2024 年 3 月',
          revenue: {
            notes: ['同比 +2%'],
            items: [
              { id: 'data_center', label: '数据中心', notes: ['同比 +80%', '营业利润率 23%'] },
              { id: 'client', label: '客户端', notes: ['同比 +85%', '营业利润率 6%'] },
              { id: 'gaming', label: '游戏', notes: ['同比 (48%)', '营业利润率 16%'] },
              { id: 'embedded', label: '嵌入式', notes: ['同比 (46%)', '营业利润率 40%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 28%', '同比 +2 个百分点'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 11%', '同比 +0 个百分点'] },
                { id: 'amortization', label: '无形资产摊销', notes: ['占收入 7%', '同比 (3 个百分点)'] },
              ],
            },
          },
          otherIncome: {
            items: [
              { id: 'other', label: '其他', notes: ['营业利润后的非经营性收入净额。'] },
              { id: 'tax_benefit', label: '税收收益' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 47%', '同比 +3 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 1%', '同比 +3 个百分点'] },
            net: { label: '净利润', notes: ['利润率 2%', '同比 +5 个百分点'] },
          },
        },
      },
    },
    {
      key: 'amd-q4-fy24',
      company: 'AMD',
      period: 'Q4 FY24',
      periodNote: 'Ending Dec. 2024',
      currency: '$',
      unit: 'B',
      decimals: 2,
      sourceImage: 'input/processed/amd-q4-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 7.658,
        notes: ['+24% Y/Y'],
        items: [
          { id: 'data_center', label: 'Data Center', value: 3.859, notes: ['+69% Y/Y', '30% operating margin', '+1pp Y/Y'] },
          { id: 'client', label: 'Client', value: 2.313, notes: ['+58% Y/Y', '19% operating margin', '+16pp Y/Y'] },
          { id: 'gaming', label: 'Gaming', value: 0.563, notes: ['(59%) Y/Y', '9% operating margin', '(7pp) Y/Y'] },
          { id: 'embedded', label: 'Embedded', value: 0.923, notes: ['(13%) Y/Y', '39% operating margin', '(4pp) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 3.776 },
        operatingExpenses: {
          total: 3.022,
          items: [
            { id: 'rnd', label: 'Research & development', value: 1.712, notes: ['22% of revenue', '(2pp) Y/Y'] },
            { id: 'sga', label: 'Sales, General & Admin', value: 0.792, notes: ['10% of revenue', '(0pp) Y/Y'] },
            { id: 'amortization', label: 'Amortization of intangibles', value: 0.332, notes: ['4% of revenue', '(2pp) Y/Y'] },
            { id: 'restructuring', label: 'Restructuring', value: 0.186 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.419 },
      },
      otherIncome: {
        total: 0.03,
        items: [
          {
            id: 'other',
            label: 'Other',
            value: 0.03,
            notes: ['Net impact of interest expense, other income, and equity income.'],
          },
        ],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 3.882, notes: ['51% margin', '+3pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.871, notes: ['11% margin', '+6pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.482, notes: ['6% margin', '(5pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第四季度',
          periodNote: '截至 2024 年 12 月',
          revenue: {
            notes: ['同比 +24%'],
            items: [
              { id: 'data_center', label: '数据中心', notes: ['同比 +69%', '营业利润率 30%', '同比 +1 个百分点'] },
              { id: 'client', label: '客户端', notes: ['同比 +58%', '营业利润率 19%', '同比 +16 个百分点'] },
              { id: 'gaming', label: '游戏', notes: ['同比 (59%)', '营业利润率 9%', '同比 (7 个百分点)'] },
              { id: 'embedded', label: '嵌入式', notes: ['同比 (13%)', '营业利润率 39%', '同比 (4 个百分点)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 22%', '同比 (2 个百分点)'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 10%', '同比 (0 个百分点)'] },
                { id: 'amortization', label: '无形资产摊销', notes: ['占收入 4%', '同比 (2 个百分点)'] },
                { id: 'restructuring', label: '重组费用' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other', label: '其他', notes: ['利息费用、其他收入和权益收益的净影响。'] }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 51%', '同比 +3 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 11%', '同比 +6 个百分点'] },
            net: { label: '净利润', notes: ['利润率 6%', '同比 (5 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'amd-q2-fy24',
      company: 'AMD',
      period: 'Q2 FY24',
      periodNote: 'Ending Jun. 2024',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/amd-q2-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 5.835,
        notes: ['+9% Y/Y'],
        items: [
          { id: 'data_center', label: 'Data Center', value: 2.834, notes: ['+115% Y/Y', '26% operating margin'] },
          { id: 'client', label: 'Client', value: 1.492, notes: ['+49% Y/Y', '6% operating margin'] },
          { id: 'gaming', label: 'Gaming', value: 0.648, notes: ['(59%) Y/Y', '12% operating margin'] },
          { id: 'embedded', label: 'Embedded', value: 0.861, notes: ['(41%) Y/Y', '40% operating margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 2.971 },
        operatingExpenses: {
          total: 2.605,
          items: [
            { id: 'rnd', label: 'Research & development', value: 1.583, notes: ['27% of revenue', '+0pp Y/Y'] },
            { id: 'sga', label: 'Sales, General & Admin', value: 0.65, notes: ['11% of revenue', '+1pp Y/Y'] },
            { id: 'amortization', label: 'Amortization of intangibles', value: 0.372, notes: ['6% of revenue', '(3pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.041 },
      },
      otherIncome: {
        total: 0.037,
        items: [{
          id: 'other_income',
          label: 'Other',
          value: 0.037,
          notes: ['Net impact of interest expense, other income, and equity income in investee.'],
        }],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 2.864, notes: ['49% margin', '+3pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.269, notes: ['5% margin', '+5pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.265, notes: ['5% margin', '+4pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第二季度',
          periodNote: '截至 2024 年 6 月',
          revenue: {
            notes: ['同比 +9%'],
            items: [
              { id: 'data_center', label: '数据中心', notes: ['同比 +115%', '营业利润率 26%'] },
              { id: 'client', label: '客户端', notes: ['同比 +49%', '营业利润率 6%'] },
              { id: 'gaming', label: '游戏', notes: ['同比 (59%)', '营业利润率 12%'] },
              { id: 'embedded', label: '嵌入式', notes: ['同比 (41%)', '营业利润率 40%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 27%', '同比 +0 个百分点'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 11%', '同比 +1 个百分点'] },
                { id: 'amortization', label: '无形资产摊销', notes: ['占收入 6%', '同比 (3 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{
              id: 'other_income',
              label: '其他',
              notes: ['利息费用、其他收入与被投资方权益收益的净影响。'],
            }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 49%', '同比 +3 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 5%', '同比 +5 个百分点'] },
            net: { label: '净利润', notes: ['利润率 5%', '同比 +4 个百分点'] },
          },
        },
      },
    },
    {
      key: 'amd-q3-fy22',
      company: 'AMD',
      period: 'Q3 FY22',
      periodNote: 'Ending Sep. 2022',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/amd-q3-fy22.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 5.6,
        notes: ['+29% Y/Y'],
        items: [
          { id: 'data_center', label: 'Data Center', value: 1.6, notes: ['+45% Y/Y', '31% operating margin'] },
          { id: 'client', label: 'Client', value: 1.0, notes: ['(40%) Y/Y', '(3%) operating margin'] },
          { id: 'gaming', label: 'Gaming', value: 1.6, notes: ['+14% Y/Y', '9% operating margin'] },
          { id: 'embedded', label: 'Embedded', value: 1.3, notes: ['+1,549% Y/Y', '49% operating margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 3.2 },
        operatingExpenses: {
          total: 2.4,
          notes: ['Rounded source-chart values do not fully reconcile with the displayed operating loss and expense components.'],
          items: [
            { id: 'rnd', label: 'Research & development', value: 1.3 },
            { id: 'sga', label: 'Sales, General & Admin', value: 0.6 },
            { id: 'amortization', label: 'Amortization of intangibles', value: 0.6 },
          ],
        },
        tax: { label: 'Tax', value: 0 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 2.4, notes: ['42% margin', '(6pp) Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -0.1, notes: ['(1%) margin', '(23pp) Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -0.1,
          notes: ['No separate net income or loss line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2022 财年第三季度',
          periodNote: '截至 2022 年 9 月',
          revenue: {
            notes: ['同比 +29%'],
            items: [
              { id: 'data_center', label: '数据中心', notes: ['同比 +45%', '营业利润率 31%'] },
              { id: 'client', label: '客户端', notes: ['同比 (40%)', '营业利润率 (3%)'] },
              { id: 'gaming', label: '游戏', notes: ['同比 +14%', '营业利润率 9%'] },
              { id: 'embedded', label: '嵌入式', notes: ['同比 +1,549%', '营业利润率 49%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['来源图采用取整金额，因此所示营业亏损、营业费用及其组成无法完全勾稽。'],
              items: [
                { id: 'rnd', label: '研发' },
                { id: 'sga', label: '销售、一般及行政' },
                { id: 'amortization', label: '无形资产摊销' },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 42%', '同比 (6 个百分点)'] },
            operating: { label: '营业亏损', notes: ['利润率 (1%)', '同比 (23 个百分点)'] },
            net: { label: '营业亏损', notes: ['来源图未单独显示净利润或净亏损项目。'] },
          },
        },
      },
    },
    {
      key: 'amd-q3-fy23',
      company: 'AMD',
      period: 'Q3 FY23',
      periodNote: 'Ending Sep. 2023',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/amd-q3-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 5.8,
        notes: ['+4% Y/Y'],
        items: [
          { id: 'data_center', label: 'Data Center', value: 1.598, notes: ['(1%) Y/Y', '19% operating margin'] },
          { id: 'client', label: 'Client', value: 1.453, notes: ['+42% Y/Y', '10% operating margin'] },
          { id: 'gaming', label: 'Gaming', value: 1.506, notes: ['(8%) Y/Y', '14% operating margin'] },
          { id: 'embedded', label: 'Embedded', value: 1.243, notes: ['(5%) Y/Y', '49% operating margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 3.053 },
        operatingExpenses: {
          total: 2.533,
          items: [
            { id: 'rnd', label: 'Research & development', value: 1.507, notes: ['26% of revenue', '+3pp Y/Y'] },
            { id: 'sga', label: 'Sales, General & Admin', value: 0.576, notes: ['10% of revenue', '(0pp) Y/Y'] },
            { id: 'amortization', label: 'Amortization of intangibles', value: 0.45, notes: ['8% of revenue', '(3pp) Y/Y'] },
          ],
        },
        tax: {
          label: 'Tax',
          value: 0,
          notes: ['The Source chart shows a tax benefit rather than a tax expense.'],
        },
      },
      otherIncome: {
        total: 0.075,
        items: [
          {
            id: 'other',
            label: 'Other',
            value: 0.036,
            notes: ['Net interest expense, other income, and equity income.'],
          },
          { id: 'tax_benefit', label: 'Tax benefit', value: 0.039 },
        ],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 2.747, notes: ['47% margin', '+5pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.224, notes: ['4% margin', '+5pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.299, notes: ['5% margin', '+4pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第三季度',
          periodNote: '截至 2023 年 9 月',
          revenue: {
            notes: ['同比 +4%'],
            items: [
              { id: 'data_center', label: '数据中心', notes: ['同比 (1%)', '营业利润率 19%'] },
              { id: 'client', label: '客户端', notes: ['同比 +42%', '营业利润率 10%'] },
              { id: 'gaming', label: '游戏', notes: ['同比 (8%)', '营业利润率 14%'] },
              { id: 'embedded', label: '嵌入式', notes: ['同比 (5%)', '营业利润率 49%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 26%', '同比 +3 个百分点'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 10%', '同比 (0 个百分点)'] },
                { id: 'amortization', label: '无形资产摊销', notes: ['占收入 8%', '同比 (3 个百分点)'] },
              ],
            },
            tax: { label: '税费', notes: ['源图展示税收收益，而非税费。'] },
          },
          otherIncome: {
            items: [
              { id: 'other', label: '其他', notes: ['利息费用、其他收入和权益收益的净影响。'] },
              { id: 'tax_benefit', label: '税收收益' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 47%', '同比 +5 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 4%', '同比 +5 个百分点'] },
            net: { label: '净利润', notes: ['利润率 5%', '同比 +4 个百分点'] },
          },
        },
      },
    },
    {
      key: 'amd-q2-fy23',
      company: 'AMD',
      period: 'Q2 FY23',
      periodNote: 'Ending Jul. 2023',
      currency: '$',
      unit: 'B',
      decimals: 2,
      sourceImage: 'input/processed/amd-q2-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 5.359,
        notes: ['(18%) Y/Y'],
        items: [
          { id: 'data_center', label: 'Data Center', value: 1.321, notes: ['(11%) Y/Y', '11% operating margin'] },
          { id: 'client', label: 'Client', value: 0.998, notes: ['(54%) Y/Y', '(7%) operating margin'] },
          { id: 'gaming', label: 'Gaming', value: 1.581, notes: ['(4%) Y/Y', '14% operating margin'] },
          { id: 'embedded', label: 'Embedded', value: 1.459, notes: ['+16% Y/Y', '52% operating margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 2.916 },
        operatingExpenses: {
          total: 2.471,
          items: [
            { id: 'rnd', label: 'Research & Development', value: 1.443, notes: ['27% of revenue', '+7pp Y/Y'] },
            { id: 'sga', label: 'Sales, General & Admin', value: 0.547, notes: ['10% of revenue', '+1pp Y/Y'] },
            { id: 'amortization', label: 'Amortization of intangibles', value: 0.481, notes: ['9% of revenue', '+9pp Y/Y'] },
          ],
        },
        tax: { label: 'Tax', value: 0, notes: ['No separate tax line is shown in the source chart.'] },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 2.443, notes: ['46% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -0.02, notes: ['(0%) margin', '(8pp) Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -0.02,
          notes: ['No separate net income line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2023 财年第二季度',
          periodNote: '截至 2023 年 7 月',
          revenue: {
            notes: ['同比 (18%)'],
            items: [
              { id: 'data_center', label: '数据中心', notes: ['同比 (11%)', '营业利润率 11%'] },
              { id: 'client', label: '客户端', notes: ['同比 (54%)', '营业利润率 (7%)'] },
              { id: 'gaming', label: '游戏', notes: ['同比 (4%)', '营业利润率 14%'] },
              { id: 'embedded', label: '嵌入式', notes: ['同比 +16%', '营业利润率 52%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 27%', '同比 +7 个百分点'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 10%', '同比 +1 个百分点'] },
                { id: 'amortization', label: '无形资产摊销', notes: ['占收入 9%', '同比 +9 个百分点'] },
              ],
            },
            tax: { label: '税费', notes: ['来源图未单列税费。'] },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 46%', '同比 (1 个百分点)'] },
            operating: { label: '营业亏损', notes: ['利润率 (0%)', '同比 (8 个百分点)'] },
            net: { label: '营业亏损', notes: ['来源图未单列净利润。'] },
          },
        },
      },
    },
    {
      key: 'amd-q4-fy22',
      company: 'AMD',
      period: 'Q4 FY22',
      periodNote: 'Ending Dec. 2022',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/amd-q4-fy22.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 5.6,
        notes: ['+16% Y/Y'],
        items: [
          { id: 'data_center', label: 'Data Center', value: 1.7, notes: ['+42% Y/Y', '27% operating margin'] },
          { id: 'client', label: 'Client', value: 0.9, notes: ['(51%) Y/Y', '(17%) operating margin'] },
          { id: 'gaming', label: 'Gaming', value: 1.6, notes: ['(7%) Y/Y', '16% operating margin'] },
          { id: 'embedded', label: 'Embedded', value: 1.4, notes: ['50% operating margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 3.2 },
        operatingExpenses: {
          total: 2.6,
          notes: ['Rounded source-chart values do not fully reconcile with the displayed gross profit and operating loss.'],
          items: [
            { id: 'rnd', label: 'Research & development', value: 1.4, notes: ['24% of revenue', '+8pp Y/Y'] },
            { id: 'sga', label: 'Sales, General & Admin', value: 0.6, notes: ['11% of revenue', '+2pp Y/Y'] },
            { id: 'amortization', label: 'Amortization of intangibles', value: 0.6, notes: ['11% of revenue', '+11pp Y/Y'] },
          ],
        },
        tax: { label: 'Tax', value: 0 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 2.4, notes: ['43% margin', '(7pp) Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -0.1, notes: ['(3%) margin', '(28pp) Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -0.1,
          notes: ['No separate net income or loss line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2022 财年第四季度',
          periodNote: '截至 2022 年 12 月',
          revenue: {
            notes: ['同比 +16%'],
            items: [
              { id: 'data_center', label: '数据中心', notes: ['同比 +42%', '营业利润率 27%'] },
              { id: 'client', label: '客户端', notes: ['同比 (51%)', '营业利润率 (17%)'] },
              { id: 'gaming', label: '游戏', notes: ['同比 (7%)', '营业利润率 16%'] },
              { id: 'embedded', label: '嵌入式', notes: ['营业利润率 50%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['来源图采用取整金额，因此所示毛利润、营业亏损与营业费用无法完全勾稽。'],
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 24%', '同比 +8 个百分点'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 11%', '同比 +2 个百分点'] },
                { id: 'amortization', label: '无形资产摊销', notes: ['占收入 11%', '同比 +11 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 43%', '同比 (7 个百分点)'] },
            operating: { label: '营业亏损', notes: ['利润率 (3%)', '同比 (28 个百分点)'] },
            net: { label: '营业亏损', notes: ['来源图未单独显示净利润或净亏损项目。'] },
          },
        },
      },
    },
    {
      key: 'amd-q4-fy23',
      company: 'AMD',
      period: 'Q4 FY23',
      periodNote: 'Ending Dec. 2023',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/amd-q4-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 6.168,
        notes: ['+10% Y/Y'],
        items: [
          { id: 'data_center', label: 'Data Center', value: 2.282, notes: ['+38% Y/Y', '29% operating margin'] },
          { id: 'client', label: 'Client', value: 1.461, notes: ['+62% Y/Y', '4% operating margin'] },
          { id: 'gaming', label: 'Gaming', value: 1.368, notes: ['(17%) Y/Y', '16% operating margin'] },
          { id: 'embedded', label: 'Embedded', value: 1.057, notes: ['(24%) Y/Y', '44% operating margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 3.257 },
        operatingExpenses: {
          total: 2.575,
          items: [
            { id: 'rnd', label: 'Research & development', value: 1.511, notes: ['24% of revenue', '(0pp) Y/Y'] },
            { id: 'sga', label: 'Sales, General & Admin', value: 0.644, notes: ['10% of revenue', '(0pp) Y/Y'] },
            { id: 'amortization', label: 'Amortization of intangibles', value: 0.42, notes: ['7% of revenue', '(4pp) Y/Y'] },
          ],
        },
        tax: {
          label: 'Tax',
          value: 0,
          notes: ['The source chart shows a $0.3B tax benefit rather than a tax expense.'],
        },
      },
      otherIncome: {
        total: 0.325,
        items: [
          {
            id: 'other',
            label: 'Other',
            value: 0.028,
            notes: ['Net impact of interest expense, other income, and equity income.'],
          },
          { id: 'tax_benefit', label: 'Tax benefit', value: 0.297 },
        ],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 2.911, notes: ['47% margin', '+4pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.342, notes: ['6% margin', '+8pp Y/Y'] },
        net: {
          id: 'net_profit',
          label: 'Net profit',
          value: 0.6,
          notes: ['11% margin', '+10pp Y/Y', 'Source-chart value; displayed bridge components round to approximately $0.6B.'],
        },
      },
      i18n: {
        zh: {
          period: '2023 财年第四季度',
          periodNote: '截至 2023 年 12 月',
          revenue: {
            notes: ['同比 +10%'],
            items: [
              { id: 'data_center', label: '数据中心', notes: ['同比 +38%', '营业利润率 29%'] },
              { id: 'client', label: '客户端', notes: ['同比 +62%', '营业利润率 4%'] },
              { id: 'gaming', label: '游戏', notes: ['同比 (17%)', '营业利润率 16%'] },
              { id: 'embedded', label: '嵌入式', notes: ['同比 (24%)', '营业利润率 44%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 24%', '同比 (0 个百分点)'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 10%', '同比 (0 个百分点)'] },
                { id: 'amortization', label: '无形资产摊销', notes: ['占收入 7%', '同比 (4 个百分点)'] },
              ],
            },
            tax: { label: '税费', notes: ['来源图显示 $0.3B 税收收益，而非税费。'] },
          },
          otherIncome: {
            items: [
              { id: 'other', label: '其他', notes: ['利息费用、其他收入与权益收益的净影响。'] },
              { id: 'tax_benefit', label: '税收收益' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 47%', '同比 +4 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 6%', '同比 +8 个百分点'] },
            net: {
              label: '净利润',
              notes: ['利润率 11%', '同比 +10 个百分点', '采用来源图数值；图示桥接项目四舍五入后约为 $0.6B。'],
            },
          },
        },
      },
    },
    {
      key: 'amd-q1-fy26',
      company: 'AMD',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/amd-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 10.253,
        notes: ['+38% Y/Y'],
        items: [
          { id: 'data_center', label: 'Data Center', value: 5.775, notes: ['+57% Y/Y', '28% operating margin', '+3pp Y/Y'] },
          {
            id: 'client',
            label: 'Client',
            value: 2.885,
            notes: ['+26% Y/Y', 'Client and Gaming', '16% operating margin', '(1pp) Y/Y'],
          },
          { id: 'gaming', label: 'Gaming', value: 0.72, notes: ['+11% Y/Y'] },
          { id: 'embedded', label: 'Embedded', value: 0.873, notes: ['+6% Y/Y', '39% operating margin', '(1pp) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 4.837 },
        operatingExpenses: {
          total: 3.94,
          items: [
            { id: 'rnd', label: 'Research & development', value: 2.397, notes: ['23% of revenue', '+0pp Y/Y'] },
            { id: 'sga', label: 'Sales, General & Admin', value: 1.253, notes: ['12% of revenue', '+0pp Y/Y'] },
            { id: 'amortization', label: 'Amortization of intangibles', value: 0.29, notes: ['3% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.238 },
      },
      otherIncome: {
        total: 0.145,
        items: [
          {
            id: 'other',
            label: 'Other',
            value: 0.145,
            notes: ['Net impact of interest expense, other income, equity income, and discontinued operations.'],
          },
        ],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 5.416, notes: ['53% margin', '+3pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.476, notes: ['14% margin', '+4pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.383, notes: ['13% margin', '+4pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +38%'],
            items: [
              { id: 'data_center', label: '数据中心', notes: ['同比 +57%', '营业利润率 28%', '同比 +3 个百分点'] },
              { id: 'client', label: '客户端', notes: ['同比 +26%', '客户端和游戏', '营业利润率 16%', '同比 (1 个百分点)'] },
              { id: 'gaming', label: '游戏', notes: ['同比 +11%'] },
              { id: 'embedded', label: '嵌入式', notes: ['同比 +6%', '营业利润率 39%', '同比 (1 个百分点)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 23%', '同比 +0 个百分点'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 12%', '同比 +0 个百分点'] },
                { id: 'amortization', label: '无形资产摊销', notes: ['占收入 3%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'other', label: '其他', notes: ['利息费用、其他收入、权益收益和终止经营的净影响。'] },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 53%', '同比 +3 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 14%', '同比 +4 个百分点'] },
            net: { label: '净利润', notes: ['利润率 13%', '同比 +4 个百分点'] },
          },
        },
      },
    },
    {
      key: 'amd-q2-fy25',
      company: 'AMD',
      period: 'Q2 FY25',
      periodNote: 'Ending Jun. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/amd-q2-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 7.685,
        notes: ['+32% Y/Y'],
        items: [
          { id: 'data_center', label: 'Data Center', value: 3.24, notes: ['+14% Y/Y', '(5%) operating margin', '(31pp) Y/Y'] },
          {
            id: 'client',
            label: 'Client',
            value: 2.499,
            notes: ['+67% Y/Y', 'Client and Gaming', '21% operating margin', '+13pp Y/Y'],
          },
          { id: 'gaming', label: 'Gaming', value: 1.122, notes: ['+73% Y/Y'] },
          { id: 'embedded', label: 'Embedded', value: 0.824, notes: ['(4%) Y/Y', '33% operating margin', '(7pp) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 4.626 },
        operatingExpenses: {
          total: 3.193,
          items: [
            { id: 'rnd', label: 'Research & development', value: 1.894, notes: ['25% of revenue', '(2pp) Y/Y'] },
            { id: 'sga', label: 'Sales, General & Admin', value: 0.991, notes: ['13% of revenue', '+2pp Y/Y'] },
            { id: 'amortization', label: 'Amortization of intangibles', value: 0.308, notes: ['4% of revenue', '(2pp) Y/Y'] },
          ],
        },
        tax: { label: 'Tax', value: 0 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 3.059, notes: ['40% margin', '(9pp) Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -0.134, notes: ['(2%) margin', '(6pp) Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -0.134,
          notes: ['No separate net income line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2025 财年第二季度',
          periodNote: '截至 2025 年 6 月',
          revenue: {
            notes: ['同比 +32%'],
            items: [
              { id: 'data_center', label: '数据中心', notes: ['同比 +14%', '营业利润率 (5%)', '同比 (31 个百分点)'] },
              { id: 'client', label: '客户端', notes: ['同比 +67%', '客户端和游戏', '营业利润率 21%', '同比 +13 个百分点'] },
              { id: 'gaming', label: '游戏', notes: ['同比 +73%'] },
              { id: 'embedded', label: '嵌入式', notes: ['同比 (4%)', '营业利润率 33%', '同比 (7 个百分点)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 25%', '同比 (2 个百分点)'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 13%', '同比 +2 个百分点'] },
                { id: 'amortization', label: '无形资产摊销', notes: ['占收入 4%', '同比 (2 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 40%', '同比 (9 个百分点)'] },
            operating: { label: '营业亏损', notes: ['利润率 (2%)', '同比 (6 个百分点)'] },
            net: { label: '营业亏损', notes: ['来源图未单独显示净利润项目。'] },
          },
        },
      },
    },
    {
      key: 'amd-q1-fy25',
      company: 'AMD',
      period: 'Q1 FY25',
      periodNote: 'Ending Mar. 2025',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/amd-q1-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 7.438,
        notes: ['+36% Y/Y'],
        items: [
          { id: 'data_center', label: 'Data Center', value: 3.674, notes: ['+57% Y/Y', '25% operating margin', '+2pp Y/Y'] },
          {
            id: 'client',
            label: 'Client',
            value: 2.294,
            notes: ['+68% Y/Y', 'Client and Gaming', '17% operating margin', '+7pp Y/Y'],
          },
          { id: 'gaming', label: 'Gaming', value: 0.647, notes: ['(30%) Y/Y'] },
          { id: 'embedded', label: 'Embedded', value: 0.823, notes: ['(3%) Y/Y', '40% operating margin', '(1pp) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 3.702 },
        operatingExpenses: {
          total: 2.93,
          items: [
            { id: 'rnd', label: 'Research & development', value: 1.728, notes: ['23% of revenue', '(5pp) Y/Y'] },
            { id: 'sga', label: 'Sales, General & Admin', value: 0.886, notes: ['12% of revenue', '+1pp Y/Y'] },
            { id: 'amortization', label: 'Amortization of intangibles', value: 0.316, notes: ['4% of revenue', '(3pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.123 },
      },
      otherIncome: {
        total: 0.026,
        items: [
          {
            id: 'other',
            label: 'Other',
            value: 0.026,
            notes: ['Net interest expense, other income, and equity income in investee.'],
          },
        ],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 3.736, notes: ['50% margin', '+3pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.806, notes: ['11% margin', '+10pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.709, notes: ['10% margin', '+7pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第一季度',
          periodNote: '截至 2025 年 3 月',
          revenue: {
            notes: ['同比 +36%'],
            items: [
              { id: 'data_center', label: '数据中心', notes: ['同比 +57%', '营业利润率 25%', '同比 +2 个百分点'] },
              { id: 'client', label: '客户端', notes: ['同比 +68%', '客户端和游戏', '营业利润率 17%', '同比 +7 个百分点'] },
              { id: 'gaming', label: '游戏', notes: ['同比 (30%)'] },
              { id: 'embedded', label: '嵌入式', notes: ['同比 (3%)', '营业利润率 40%', '同比 (1 个百分点)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 23%', '同比 (5 个百分点)'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 12%', '同比 +1 个百分点'] },
                { id: 'amortization', label: '无形资产摊销', notes: ['占收入 4%', '同比 (3 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'other', label: '其他', notes: ['利息支出、其他收入与被投资方权益收益的净影响。'] },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 50%', '同比 +3 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 11%', '同比 +10 个百分点'] },
            net: { label: '净利润', notes: ['利润率 10%', '同比 +7 个百分点'] },
          },
        },
      },
    },
    {
      key: 'amd-q3-fy25',
      company: 'AMD',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/amd-q3-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 9.246,
        notes: ['+36% Y/Y'],
        items: [
          { id: 'data_center', label: 'Data Center', value: 4.341, notes: ['+22% Y/Y', '25% operating margin', '(5pp) Y/Y'] },
          { id: 'client', label: 'Client', value: 2.782, notes: ['+46% Y/Y', 'Client and Gaming', '21% operating margin', '+9pp Y/Y'] },
          { id: 'gaming', label: 'Gaming', value: 1.266, notes: ['+181% Y/Y'] },
          { id: 'embedded', label: 'Embedded', value: 0.857, notes: ['(8%) Y/Y', '33% operating margin', '(7pp) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 4.466 },
        operatingExpenses: {
          total: 3.51,
          items: [
            { id: 'rnd', label: 'Research & development', value: 2.139, notes: ['23% of revenue', '(1pp) Y/Y'] },
            { id: 'sga', label: 'Sales, General & Admin', value: 1.069, notes: ['12% of revenue', '+1pp Y/Y'] },
            { id: 'amortization', label: 'Amortization of intangibles', value: 0.302, notes: ['3% of revenue', '(2pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.153 },
      },
      otherIncome: {
        total: 0.126,
        items: [{ id: 'other', label: 'Other', value: 0.126, notes: ['Net impact after operating income before tax.'] }],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 4.78, notes: ['52% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.27, notes: ['14% margin', '+3pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.243, notes: ['13% margin', '+2pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          revenue: {
            notes: ['同比 +36%'],
            items: [
              { id: 'data_center', label: '数据中心', notes: ['同比 +22%', '营业利润率 25%', '同比 (5 个百分点)'] },
              { id: 'client', label: '客户端', notes: ['同比 +46%', '客户端和游戏', '营业利润率 21%', '同比 +9 个百分点'] },
              { id: 'gaming', label: '游戏', notes: ['同比 +181%'] },
              { id: 'embedded', label: '嵌入式', notes: ['同比 (8%)', '营业利润率 33%', '同比 (7 个百分点)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 23%', '同比 (1 个百分点)'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 12%', '同比 +1 个百分点'] },
                { id: 'amortization', label: '无形资产摊销', notes: ['占收入 3%', '同比 (2 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other', label: '其他', notes: ['营业利润至税前的净影响。'] }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 52%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 14%', '同比 +3 个百分点'] },
            net: { label: '净利润', notes: ['利润率 13%', '同比 +2 个百分点'] },
          },
        },
      },
    },
    {
      key: 'amd-q4-fy25',
      company: 'AMD',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/amd-q4-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 10.27,
        notes: ['+34% Y/Y'],
        items: [
          { id: 'data_center', label: 'Data Center', value: 5.38, notes: ['+39% Y/Y', '33% operating margin', '+3pp Y/Y'] },
          {
            id: 'client',
            label: 'Client',
            value: 3.097,
            notes: ['+34% Y/Y', 'Client and Gaming', '18% operating margin', '+1pp Y/Y'],
          },
          { id: 'gaming', label: 'Gaming', value: 0.843, notes: ['+50% Y/Y'] },
          { id: 'embedded', label: 'Embedded', value: 0.95, notes: ['+3% Y/Y', '38% operating margin', '(2pp) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 4.693 },
        operatingExpenses: {
          total: 3.825,
          items: [
            { id: 'rnd', label: 'Research & development', value: 2.33, notes: ['23% of revenue', '+0pp Y/Y'] },
            { id: 'sga', label: 'Sales, General & Admin', value: 1.198, notes: ['12% of revenue', '+1pp Y/Y'] },
            { id: 'amortization', label: 'Amortization of intangibles', value: 0.297, notes: ['3% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.455 },
      },
      otherIncome: {
        total: 0.214,
        items: [
          {
            id: 'other',
            label: 'Other',
            value: 0.214,
            notes: ['Net impact of interest expense, other income, equity income, and discontinued operations.'],
          },
        ],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 5.577, notes: ['54% margin', '+4pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.752, notes: ['17% margin', '+6pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.511, notes: ['15% margin', '+8pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +34%'],
            items: [
              { id: 'data_center', label: '数据中心', notes: ['同比 +39%', '营业利润率 33%', '同比 +3 个百分点'] },
              { id: 'client', label: '客户端', notes: ['同比 +34%', '客户端和游戏', '营业利润率 18%', '同比 +1 个百分点'] },
              { id: 'gaming', label: '游戏', notes: ['同比 +50%'] },
              { id: 'embedded', label: '嵌入式', notes: ['同比 +3%', '营业利润率 38%', '同比 (2 个百分点)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 23%', '同比 +0 个百分点'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 12%', '同比 +1 个百分点'] },
                { id: 'amortization', label: '无形资产摊销', notes: ['占收入 3%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'other', label: '其他', notes: ['利息费用、其他收入、权益收益和终止经营的净影响。'] },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 54%', '同比 +4 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 17%', '同比 +6 个百分点'] },
            net: { label: '净利润', notes: ['利润率 15%', '同比 +8 个百分点'] },
          },
        },
      },
    }
  );
})(window);
