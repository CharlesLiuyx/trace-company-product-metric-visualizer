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
      key: 'intel-q3-fy24',
      company: 'Intel',
      period: 'Q3 FY24',
      periodNote: 'Ending Sep. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/intel-q3-fy24.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 13.3,
        notes: ['(6%) Y/Y'],
        items: [
          { id: 'client_computing', label: 'Client Computing', value: 7.3, notes: ['(7%) Y/Y', '37% operating margin'] },
          { id: 'datacenter_ai', label: 'Datacenter & AI', value: 3.3, notes: ['+9% Y/Y', '10% operating margin'] },
          { id: 'network_edge', label: 'Network & Edge', value: 1.5, notes: ['+4% Y/Y', '18% operating margin'] },
          { id: 'mobileye', label: 'Mobileye', value: 0.5, notes: ['(8%) Y/Y', '16% operating margin'] },
          { id: 'intel_foundry', label: 'Intel Foundry', value: 4.4, notes: ['(8%) Y/Y', '(134%) operating margin'] },
          { id: 'other', label: 'Other', value: 0.6, notes: ['(40%) Y/Y'] },
          { id: 'eliminations', label: 'Eliminations', value: -4.3, notes: ['Intersegment eliminations reconciling segment revenue to revenue.'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 11.3 },
        operatingExpenses: {
          total: 11.1,
          items: [
            { id: 'restructuring', label: 'Restructuring', value: 5.6, notes: ['42% of revenue', '+37pp Y/Y'] },
            { id: 'rnd', label: 'Research & development', value: 4.0, notes: ['30% of revenue', '+3pp Y/Y'] },
            { id: 'marketing_ga', label: 'Marketing, general & administrative', value: 1.4, notes: ['10% of revenue', '+1pp Y/Y'] },
          ],
        },
        tax: { label: 'Tax', value: 0, notes: ['No separate tax line is shown in the source chart.'] },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 2.0, valueText: '$2.0B', notes: ['15% margin', '(28pp) Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -9.1, notes: ['(68%) margin', '(68pp) Y/Y'] },
        net: { id: 'operating_loss', label: 'Operating loss', value: -9.1, notes: ['No separate net income or net loss line is shown in the source chart.'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第三季度',
          periodNote: '截至 2024 年 9 月',
          revenue: {
            notes: ['同比 (6%)'],
            items: [
              { id: 'client_computing', label: '客户端计算', notes: ['同比 (7%)', '营业利润率 37%'] },
              { id: 'datacenter_ai', label: '数据中心与 AI', notes: ['同比 +9%', '营业利润率 10%'] },
              { id: 'network_edge', label: '网络与边缘', notes: ['同比 +4%', '营业利润率 18%'] },
              { id: 'mobileye', label: 'Mobileye', notes: ['同比 (8%)', '营业利润率 16%'] },
              { id: 'intel_foundry', label: '英特尔代工', notes: ['同比 (8%)', '营业利润率 (134%)'] },
              { id: 'other', label: '其他', notes: ['同比 (40%)'] },
              { id: 'eliminations', label: '内部抵销', notes: ['将分部收入调节为收入的分部间抵销。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: { items: [
              { id: 'restructuring', label: '重组', notes: ['占收入 42%', '同比 +37 个百分点'] },
              { id: 'rnd', label: '研发', notes: ['占收入 30%', '同比 +3 个百分点'] },
              { id: 'marketing_ga', label: '营销及一般行政', notes: ['占收入 10%', '同比 +1 个百分点'] },
            ] },
            tax: { label: '税费', notes: ['来源图未单列税费项。'] },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 15%', '同比 (28 个百分点)'] },
            operating: { label: '营业亏损', notes: ['利润率 (68%)', '同比 (68 个百分点)'] },
            net: { label: '营业亏损', notes: ['来源图未单列净利润或净亏损项。'] },
          },
        },
      },
    },
    {
      key: 'intel-q3-fy22',
      company: 'Intel',
      period: 'Q3 FY22',
      periodNote: 'Ending Sep. 2022',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/intel-q3-fy22.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 15.3,
        notes: ['(20%) Y/Y'],
        items: [
          { id: 'client_computing', label: 'Client Computing', value: 8.1, notes: ['(17%) Y/Y', '20% operating margin'] },
          { id: 'datacenter_ai', label: 'Datacenter & AI', value: 4.1, notes: ['(27%) Y/Y', '0% operating margin'] },
          { id: 'network_edge', label: 'Network & Edge', value: 2.3, notes: ['+14% Y/Y', '3% operating margin'] },
          { id: 'mobileye', label: 'Mobileye', value: 0.5, notes: ['+38% Y/Y', '32% operating margin'] },
          { id: 'intel_foundry', label: 'Intel Foundry', value: 0.2, notes: ['(2%) Y/Y', '(60%) operating margin'] },
          { id: 'other', label: 'Other', value: 0.1, notes: ['(90%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 8.8 },
        operatingExpenses: {
          total: 6.7,
          items: [
            { id: 'rnd', label: 'Research & development', value: 4.3, notes: ['28% of revenue', '+8pp Y/Y'] },
            { id: 'marketing_ga', label: 'Marketing, general & administrative', value: 1.7, notes: ['11% of revenue', '+3pp Y/Y'] },
            { id: 'restructuring', label: 'Restructuring', value: 0.7, notes: ['4% of revenue', '+4pp Y/Y'] },
          ],
        },
        tax: { label: 'Tax', value: 0, notes: ['No separate tax line is shown in the source chart.'] },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 6.5, notes: ['43% margin', '(12pp) Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -0.2, notes: ['(1%) margin', '(28pp) Y/Y'] },
        net: {
          id: 'operating_loss', label: 'Operating loss', value: -0.2,
          notes: ['No separate net income or net loss line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2022 财年第三季度',
          periodNote: '截至 2022 年 9 月',
          revenue: {
            notes: ['同比 (20%)'],
            items: [
              { id: 'client_computing', label: '客户端计算', notes: ['同比 (17%)', '营业利润率 20%'] },
              { id: 'datacenter_ai', label: '数据中心与 AI', notes: ['同比 (27%)', '营业利润率 0%'] },
              { id: 'network_edge', label: '网络与边缘', notes: ['同比 +14%', '营业利润率 3%'] },
              { id: 'mobileye', label: 'Mobileye', notes: ['同比 +38%', '营业利润率 32%'] },
              { id: 'intel_foundry', label: '英特尔代工', notes: ['同比 (2%)', '营业利润率 (60%)'] },
              { id: 'other', label: '其他', notes: ['同比 (90%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 28%', '同比 +8 个百分点'] },
                { id: 'marketing_ga', label: '营销及一般行政', notes: ['占收入 11%', '同比 +3 个百分点'] },
                { id: 'restructuring', label: '重组', notes: ['占收入 4%', '同比 +4 个百分点'] },
              ],
            },
            tax: { label: '税费', notes: ['来源图未单列税费项。'] },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 43%', '同比 (12 个百分点)'] },
            operating: { label: '营业亏损', notes: ['利润率 (1%)', '同比 (28 个百分点)'] },
            net: { label: '营业亏损', notes: ['来源图未单列净利润或净亏损项。'] },
          },
        },
      },
    },
    {
      key: 'intel-q1-fy24',
      company: 'Intel',
      period: 'Q1 FY24',
      periodNote: 'Ending Mar. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/intel-q1-fy24.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 12.7,
        notes: ['+9% Y/Y'],
        items: [
          { id: 'client_computing', label: 'Client Computing', value: 7.5, notes: ['+31% Y/Y', '35% operating margin'] },
          { id: 'datacenter_ai', label: 'Datacenter & AI', value: 3.0, notes: ['+5% Y/Y', '16% operating margin'] },
          { id: 'network_edge', label: 'Network & Edge', value: 1.4, notes: ['(8%) Y/Y', '13% operating margin'] },
          { id: 'mobileye', label: 'Mobileye', value: 0.2, notes: ['(48%) Y/Y', '(28%) operating margin'] },
          { id: 'intel_foundry', label: 'Intel Foundry', value: 4.4, notes: ['(10%) Y/Y', '(57%) operating margin'] },
          { id: 'other', label: 'Other', value: 0.5, notes: ['(45%) Y/Y'] },
          {
            id: 'eliminations',
            label: 'Eliminations',
            value: -4.4,
            notes: [
              'Intersegment eliminations reconciling displayed segment revenue to revenue.',
              'Displayed segment values less eliminations differ from revenue by $0.1B due to rounded source-chart values.',
            ],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 7.5 },
        operatingExpenses: {
          total: 6.3,
          items: [
            { id: 'rnd', label: 'Research & development', value: 4.4, notes: ['34% of revenue', '(1pp) Y/Y'] },
            { id: 'marketing_ga', label: 'Marketing, general & administrative', value: 1.6, notes: ['12% of revenue', '+1pp Y/Y'] },
            { id: 'restructuring', label: 'Restructuring', value: 0.3, notes: ['3% of revenue', '+2pp Y/Y'] },
          ],
        },
        tax: { label: 'Tax', value: 0, notes: ['No separate tax line is shown in the source chart.'] },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 5.2, notes: ['41% margin', '+7pp Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -1.1, notes: ['(8%) margin', '+4pp Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -1.1,
          notes: ['No separate net income or net loss line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2024 财年第一季度',
          periodNote: '截至 2024 年 3 月',
          revenue: {
            notes: ['同比 +9%'],
            items: [
              { id: 'client_computing', label: '客户端计算', notes: ['同比 +31%', '营业利润率 35%'] },
              { id: 'datacenter_ai', label: '数据中心与 AI', notes: ['同比 +5%', '营业利润率 16%'] },
              { id: 'network_edge', label: '网络与边缘', notes: ['同比 (8%)', '营业利润率 13%'] },
              { id: 'mobileye', label: 'Mobileye', notes: ['同比 (48%)', '营业利润率 (28%)'] },
              { id: 'intel_foundry', label: '英特尔代工', notes: ['同比 (10%)', '营业利润率 (57%)'] },
              { id: 'other', label: '其他', notes: ['同比 (45%)'] },
              {
                id: 'eliminations',
                label: '内部抵销',
                notes: ['将所示分部收入调节为收入的分部间抵销。', '所示分部数值减抵销项与收入因来源图取整相差 $0.1B。'],
              },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 34%', '同比 (1 个百分点)'] },
                { id: 'marketing_ga', label: '营销及一般行政', notes: ['占收入 12%', '同比 +1 个百分点'] },
                { id: 'restructuring', label: '重组', notes: ['占收入 3%', '同比 +2 个百分点'] },
              ],
            },
            tax: { label: '税费', notes: ['来源图未单列税费项。'] },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 41%', '同比 +7 个百分点'] },
            operating: { label: '营业亏损', notes: ['利润率 (8%)', '同比 +4 个百分点'] },
            net: { label: '营业亏损', notes: ['来源图未单列净利润或净亏损项。'] },
          },
        },
      },
    },
    {
      key: 'intel-q4-fy22',
      company: 'Intel',
      period: 'Q4 FY22',
      periodNote: 'Ending Dec. 2022',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/intel-q4-fy22.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 14.0,
        notes: ['(32%) Y/Y'],
        items: [
          { id: 'client_computing', label: 'Client Computing', value: 6.6, notes: ['(36%) Y/Y', '11% operating margin'] },
          { id: 'datacenter_ai', label: 'Datacenter & AI', value: 4.3, notes: ['(33%) Y/Y', '9% operating margin'] },
          { id: 'network_edge', label: 'Network & Edge', value: 2.1, notes: ['(1%) Y/Y', '3% operating margin'] },
          { id: 'mobileye', label: 'Mobileye', value: 0.6, notes: ['+59% Y/Y', '37% operating margin'] },
          { id: 'intel_foundry', label: 'Intel Foundry', value: 0.3, notes: ['+30% Y/Y', '(10%) operating margin'] },
          { id: 'other', label: 'Other', value: 0.2 },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 8.5 },
        operatingExpenses: {
          total: 6.6,
          items: [
            { id: 'rnd', label: 'Research & development', value: 4.4, notes: ['32% of revenue', '+12pp Y/Y'] },
            { id: 'marketing_ga', label: 'Marketing, general & administrative', value: 1.7, notes: ['12% of revenue', '+3pp Y/Y'] },
            { id: 'restructuring', label: 'Restructuring', value: 0.5, notes: ['3% of revenue', '+3pp Y/Y'] },
          ],
        },
        tax: { label: 'Tax', value: 0, notes: ['No separate tax line is shown in the source chart.'] },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 5.5, notes: ['39% margin', '(14pp) Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -1.1, notes: ['(8%) margin', '(32pp) Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -1.1,
          notes: ['No separate net income or net loss line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2022 财年第四季度',
          periodNote: '截至 2022 年 12 月',
          revenue: {
            notes: ['同比 (32%)'],
            items: [
              { id: 'client_computing', label: '客户端计算', notes: ['同比 (36%)', '营业利润率 11%'] },
              { id: 'datacenter_ai', label: '数据中心与 AI', notes: ['同比 (33%)', '营业利润率 9%'] },
              { id: 'network_edge', label: '网络与边缘', notes: ['同比 (1%)', '营业利润率 3%'] },
              { id: 'mobileye', label: 'Mobileye', notes: ['同比 +59%', '营业利润率 37%'] },
              { id: 'intel_foundry', label: '英特尔代工', notes: ['同比 +30%', '营业利润率 (10%)'] },
              { id: 'other', label: '其他' },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 32%', '同比 +12 个百分点'] },
                { id: 'marketing_ga', label: '营销及一般行政', notes: ['占收入 12%', '同比 +3 个百分点'] },
                { id: 'restructuring', label: '重组', notes: ['占收入 3%', '同比 +3 个百分点'] },
              ],
            },
            tax: { label: '税费', notes: ['来源图未单列税费项。'] },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 39%', '同比 (14 个百分点)'] },
            operating: { label: '营业亏损', notes: ['利润率 (8%)', '同比 (32 个百分点)'] },
            net: { label: '营业亏损', notes: ['来源图未单列净利润或净亏损项。'] },
          },
        },
      },
    },
    {
      key: 'intel-q3-fy23',
      company: 'Intel',
      period: 'Q3 FY23',
      periodNote: 'Ending Sep. 2023',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/intel-q3-fy23.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 14.2,
        notes: ['(8%) Y/Y'],
        items: [
          { id: 'client_computing', label: 'Client Computing', value: 7.9, notes: ['(3%) Y/Y', '26% operating margin'] },
          { id: 'datacenter_ai', label: 'Datacenter & AI', value: 3.8, notes: ['(10%) Y/Y', '(10%) operating margin'] },
          { id: 'network_edge', label: 'Network & Edge', value: 1.5, notes: ['(32%) Y/Y', '1% operating margin'] },
          { id: 'mobileye', label: 'Mobileye', value: 0.5, notes: ['+18% Y/Y', '32% operating margin'] },
          { id: 'intel_foundry', label: 'Intel Foundry', value: 0.3, notes: ['+299% Y/Y', '(28%) operating margin'] },
          { id: 'other', label: 'Other', value: 0.2, notes: ['(37%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 8.1 },
        operatingExpenses: {
          total: 6.0,
          items: [
            { id: 'rnd', label: 'Research & Development', value: 3.9, notes: ['27% of revenue', '(1pp) Y/Y'] },
            { id: 'marketing_ga', label: 'Marketing, G&A', value: 1.3, notes: ['9% of revenue', '(2pp) Y/Y'] },
            { id: 'restructuring', label: 'Restructuring', value: 0.8, notes: ['6% of revenue', '+1pp Y/Y'] },
          ],
        },
        tax: { label: 'Tax', value: 0, notes: ['No separate tax line is shown in the source chart.'] },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 6.0, valueText: '$6.0B', notes: ['43% margin', '(0pp) Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -0.008, valueText: '($8M)', notes: ['(0%) margin', '+1pp Y/Y'] },
        net: { id: 'operating_loss', label: 'Operating loss', value: -0.008, valueText: '($8M)', notes: ['No separate net income or net loss line is shown in the source chart.'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第三季度',
          periodNote: '截至 2023 年 9 月',
          revenue: {
            notes: ['同比 (8%)'],
            items: [
              { id: 'client_computing', label: '客户端计算', notes: ['同比 (3%)', '营业利润率 26%'] },
              { id: 'datacenter_ai', label: '数据中心与 AI', notes: ['同比 (10%)', '营业利润率 (10%)'] },
              { id: 'network_edge', label: '网络与边缘', notes: ['同比 (32%)', '营业利润率 1%'] },
              { id: 'mobileye', label: 'Mobileye', notes: ['同比 +18%', '营业利润率 32%'] },
              { id: 'intel_foundry', label: '英特尔代工', notes: ['同比 +299%', '营业利润率 (28%)'] },
              { id: 'other', label: '其他', notes: ['同比 (37%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 27%', '同比 (1 个百分点)'] },
                { id: 'marketing_ga', label: '营销及一般行政', notes: ['占收入 9%', '同比 (2 个百分点)'] },
                { id: 'restructuring', label: '重组', notes: ['占收入 6%', '同比 +1 个百分点'] },
              ],
            },
            tax: { label: '税费', notes: ['来源图未单列税费项。'] },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 43%', '同比 (0 个百分点)'] },
            operating: { label: '营业亏损', notes: ['利润率 (0%)', '同比 +1 个百分点'] },
            net: { label: '营业亏损', notes: ['来源图未单列净利润或净亏损项。'] },
          },
        },
      },
    },
    {
      key: 'intel-q2-fy23',
      company: 'Intel',
      period: 'Q2 FY23',
      periodNote: 'Ending Jun. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/intel-q2-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 12.9,
        notes: ['(15%) Y/Y'],
        items: [
          { id: 'client_computing', label: 'Client Computing', value: 6.8, notes: ['(12%) Y/Y', '15% operating margin'] },
          { id: 'datacenter_ai', label: 'Datacenter & AI', value: 4.0, notes: ['(15%) Y/Y', '4% operating margin'] },
          { id: 'network_edge', label: 'Network & Edge', value: 1.4, notes: ['(38%) Y/Y', '14% operating margin'] },
          { id: 'mobileye', label: 'Mobileye', value: 0.5, notes: ['(1%) Y/Y', '28% operating margin'] },
          { id: 'intel_foundry', label: 'Intel Foundry', value: 0.2, notes: ['+307% Y/Y', '(62%) operating margin'] },
          { id: 'other', label: 'Other', value: 0.1, notes: ['(48%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 8.3 },
        operatingExpenses: {
          total: 5.7,
          items: [
            { id: 'rnd', label: 'Research & Development', value: 4.1, notes: ['32% of revenue', '+3pp Y/Y'] },
            { id: 'marketing_ga', label: 'Marketing, G&A', value: 1.4, notes: ['11% of revenue', '(1pp) Y/Y'] },
            { id: 'restructuring', label: 'Restructuring', value: 0.2, notes: ['2% of revenue', '+1pp Y/Y'] },
          ],
        },
        tax: { label: 'Tax', value: 0, notes: ['No separate tax line is shown in the source chart.'] },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 4.6, notes: ['36% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -1.0, notes: ['(8%) margin', '(3pp) Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -1.0,
          notes: ['No separate net income or net loss line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2023 财年第二季度',
          periodNote: '截至 2023 年 6 月',
          revenue: {
            notes: ['同比 (15%)'],
            items: [
              { id: 'client_computing', label: '客户端计算', notes: ['同比 (12%)', '营业利润率 15%'] },
              { id: 'datacenter_ai', label: '数据中心与 AI', notes: ['同比 (15%)', '营业利润率 4%'] },
              { id: 'network_edge', label: '网络与边缘', notes: ['同比 (38%)', '营业利润率 14%'] },
              { id: 'mobileye', label: 'Mobileye', notes: ['同比 (1%)', '营业利润率 28%'] },
              { id: 'intel_foundry', label: '英特尔代工', notes: ['同比 +307%', '营业利润率 (62%)'] },
              { id: 'other', label: '其他', notes: ['同比 (48%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 32%', '同比 +3 个百分点'] },
                { id: 'marketing_ga', label: '营销及一般行政', notes: ['占收入 11%', '同比 (1 个百分点)'] },
                { id: 'restructuring', label: '重组', notes: ['占收入 2%', '同比 +1 个百分点'] },
              ],
            },
            tax: { label: '税费', notes: ['源图未单列税费。'] },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 36%', '同比 (1 个百分点)'] },
            operating: { label: '营业亏损', notes: ['利润率 (8%)', '同比 (3 个百分点)'] },
            net: { label: '营业亏损', notes: ['源图未单列净利润或净亏损。'] },
          },
        },
      },
    },
    {
      key: 'intel-q2-fy26',
      company: 'Intel',
      period: 'Q2 FY26',
      periodNote: 'Ending Jun. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/intel-q2-fy26.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 16.1,
        notes: ['+25% Y/Y'],
        items: [
          {
            id: 'intel_products',
            label: 'Intel Products',
            value: 15.1,
            notes: ['+28% Y/Y'],
            children: [
              { id: 'client_computing', label: 'Client Computing', value: 8.9, notes: ['+13% Y/Y', '26% operating margin'] },
              { id: 'datacenter_ai', label: 'Datacenter & AI', value: 6.3, notes: ['+69% Y/Y', '40% operating margin'] },
            ],
          },
          { id: 'intel_foundry', label: 'Intel Foundry', value: 5.8, notes: ['+31% Y/Y', '(36%) operating margin'] },
          { id: 'other', label: 'Other', value: 0.7, notes: ['(33%) Y/Y', '16% operating margin'] },
          {
            id: 'eliminations',
            label: 'Eliminations',
            value: -5.5,
            notes: ['Intersegment eliminations reconciling segment revenue to net revenue.'],
          },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_sales',
          label: 'Cost of sales',
          value: 9.6,
        },
        operatingExpenses: {
          total: 4.7,
          items: [
            { id: 'rnd', label: 'Research & development', value: 3.4, notes: ['21% of revenue', '(8pp) Y/Y'] },
            { id: 'marketing_ga', label: 'Marketing, general & administrative', value: 1.2, notes: ['7% of revenue', '(2pp) Y/Y'] },
            { id: 'restructuring', label: 'Restructuring and other', value: 0.2, notes: ['1% of revenue', '(14pp) Y/Y'] },
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
        total: 12.6,
        items: [
          { id: 'interest_other_costs', label: 'Interest & other costs', value: 12.6, notes: ['18A Foundry transition costs'] },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 6.5, notes: ['40% margin', '+13pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.8, notes: ['11% margin', '+36pp Y/Y'] },
        net: { id: 'net_loss', label: 'Net loss', value: -10.8 },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月',
          revenue: {
            notes: ['同比 +25%'],
            items: [
              {
                id: 'intel_products',
                label: '英特尔产品',
                notes: ['同比 +28%'],
                children: [
                  { id: 'client_computing', label: '客户端计算', notes: ['同比 +13%', '营业利润率 26%'] },
                  { id: 'datacenter_ai', label: '数据中心与 AI', notes: ['同比 +69%', '营业利润率 40%'] },
                ],
              },
              { id: 'intel_foundry', label: '英特尔代工', notes: ['同比 +31%', '营业利润率 (36%)'] },
              { id: 'other', label: '其他', notes: ['同比 (33%)', '营业利润率 16%'] },
              { id: 'eliminations', label: '内部抵销', notes: ['将分部收入调节为净收入的分部间抵销。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 21%', '同比 (8 个百分点)'] },
                { id: 'marketing_ga', label: '营销及一般行政', notes: ['占收入 7%', '同比 (2 个百分点)'] },
                { id: 'restructuring', label: '重组及其他', notes: ['占收入 1%', '同比 (14 个百分点)'] },
              ],
            },
            tax: { label: '税费', notes: ['来源图未单列税费项。'] },
          },
          otherExpenses: {
            items: [
              { id: 'interest_other_costs', label: '利息及其他成本', notes: ['18A 代工转型成本'] },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 40%', '同比 +13 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 11%', '同比 +36 个百分点'] },
            net: { label: '净亏损' },
          },
        },
      },
    },
    {
      key: 'intel-q1-fy26',
      company: 'Intel',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/intel-q1-fy26.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 13.6,
        notes: ['+7% Y/Y'],
        items: [
          {
            id: 'intel_products',
            label: 'Intel Products',
            value: 12.8,
            notes: ['+9% Y/Y'],
            children: [
              { id: 'client_computing', label: 'Client Computing', value: 7.7, notes: ['+1% Y/Y', '31% operating margin'] },
              { id: 'datacenter_ai', label: 'Datacenter & AI', value: 5.1, notes: ['+22% Y/Y', '11% operating margin'] },
            ],
          },
          { id: 'intel_foundry', label: 'Intel Foundry', value: 5.4, notes: ['+16% Y/Y', '(43%) operating margin'] },
          { id: 'other', label: 'Other', value: 0.6, notes: ['(33%) Y/Y', '16% operating margin'] },
          {
            id: 'eliminations',
            label: 'Eliminations',
            value: -5.3,
            notes: ['Intersegment eliminations reconciling segment revenue to net revenue.'],
          },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_sales',
          label: 'Cost of sales',
          value: 8.2,
          notes: ['Net revenue less gross profit differs by $0.1B due to rounded source-chart values.'],
        },
        operatingExpenses: {
          total: 8.5,
          items: [
            { id: 'rnd', label: 'Research & development', value: 3.4, notes: ['25% of revenue', '(4pp) Y/Y'] },
            { id: 'marketing_ga', label: 'Marketing, general & administrative', value: 1.0, notes: ['8% of revenue', '(2pp) Y/Y'] },
            { id: 'restructuring', label: 'Restructuring and other', value: 4.1, notes: ['30% of revenue', '+29pp Y/Y'] },
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 5.3, notes: ['39% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -3.1, notes: ['(23%) margin', '(21pp) Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -3.1,
          notes: ['No separate net income or net loss line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +7%'],
            items: [
              {
                id: 'intel_products',
                label: '英特尔产品',
                notes: ['同比 +9%'],
                children: [
                  { id: 'client_computing', label: '客户端计算', notes: ['同比 +1%', '营业利润率 31%'] },
                  { id: 'datacenter_ai', label: '数据中心与 AI', notes: ['同比 +22%', '营业利润率 11%'] },
                ],
              },
              { id: 'intel_foundry', label: '英特尔代工', notes: ['同比 +16%', '营业利润率 (43%)'] },
              { id: 'other', label: '其他', notes: ['同比 (33%)', '营业利润率 16%'] },
              { id: 'eliminations', label: '内部抵销', notes: ['将分部收入调节为净收入的分部间抵销。'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '销售成本',
              notes: ['净收入减毛利润因来源图数值取整相差 $0.1B。'],
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 25%', '同比 (4 个百分点)'] },
                { id: 'marketing_ga', label: '营销及一般行政', notes: ['占收入 8%', '同比 (2 个百分点)'] },
                { id: 'restructuring', label: '重组及其他', notes: ['占收入 30%', '同比 +29 个百分点'] },
              ],
            },
            tax: { label: '税费', notes: ['来源图未单列税费项。'] },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 39%', '同比 +2 个百分点'] },
            operating: { label: '营业亏损', notes: ['利润率 (23%)', '同比 (21 个百分点)'] },
            net: { label: '营业亏损', notes: ['来源图未单列净利润或净亏损项。'] },
          },
        },
      },
    },
    {
      key: 'intel-q2-fy25',
      company: 'Intel',
      period: 'Q2 FY25',
      periodNote: 'Ending Jun. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/intel-q2-fy25.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 12.9,
        notes: ['+0% Y/Y'],
        items: [
          {
            id: 'intel_products',
            label: 'Intel Products',
            value: 11.8,
            notes: ['(1%) Y/Y'],
            children: [
              { id: 'client_computing', label: 'Client Computing', value: 7.9, notes: ['(3%) Y/Y', '26% operating margin'] },
              { id: 'datacenter_ai', label: 'Datacenter & AI', value: 3.9, notes: ['+4% Y/Y', '16% operating margin'] },
            ],
          },
          { id: 'intel_foundry', label: 'Intel Foundry', value: 4.4, notes: ['+3% Y/Y', '(72%) operating margin'] },
          { id: 'other', label: 'Other', value: 1.1, notes: ['+20% Y/Y', '7% operating margin'] },
          {
            id: 'eliminations',
            label: 'Eliminations',
            value: -4.4,
            notes: ['Intersegment eliminations reconciling segment revenue to net revenue.'],
          },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_sales',
          label: 'Cost of sales',
          value: 9.3,
          notes: ['Revenue less gross profit differs by $0.1B due to rounded source-chart values.'],
        },
        operatingExpenses: {
          total: 6.7,
          items: [
            { id: 'rnd', label: 'Research & development', value: 3.7, notes: ['29% of revenue', '(4pp) Y/Y'] },
            { id: 'restructuring', label: 'Restructuring', value: 1.9, notes: ['15% of revenue', '+7pp Y/Y'] },
            { id: 'marketing_ga', label: 'Marketing, general & administrative', value: 1.1, notes: ['9% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: {
          label: 'Tax',
          value: 0,
          notes: ['No separate tax line is shown in the source chart.'],
        },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 3.5, notes: ['28% margin', '(8pp) Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -3.2, notes: ['(25%) margin', '(9pp) Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -3.2,
          notes: ['No separate net income or net loss line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2025 财年第二季度',
          periodNote: '截至 2025 年 6 月',
          revenue: {
            notes: ['同比 +0%'],
            items: [
              {
                id: 'intel_products',
                label: '英特尔产品',
                notes: ['同比 (1%)'],
                children: [
                  { id: 'client_computing', label: '客户端计算', notes: ['同比 (3%)', '营业利润率 26%'] },
                  { id: 'datacenter_ai', label: '数据中心与 AI', notes: ['同比 +4%', '营业利润率 16%'] },
                ],
              },
              { id: 'intel_foundry', label: '英特尔代工', notes: ['同比 +3%', '营业利润率 (72%)'] },
              { id: 'other', label: '其他', notes: ['同比 +20%', '营业利润率 7%'] },
              { id: 'eliminations', label: '内部抵销', notes: ['将分部收入调节为净收入的分部间抵销。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本', notes: ['收入减毛利润因来源图数值取整相差 $0.1B。'] },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 29%', '同比 (4 个百分点)'] },
                { id: 'restructuring', label: '重组', notes: ['占收入 15%', '同比 +7 个百分点'] },
                { id: 'marketing_ga', label: '营销及一般行政', notes: ['占收入 9%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费', notes: ['来源图未单列税费项。'] },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 28%', '同比 (8 个百分点)'] },
            operating: { label: '营业亏损', notes: ['利润率 (25%)', '同比 (9 个百分点)'] },
            net: { label: '营业亏损', notes: ['来源图未单列净利润或净亏损项。'] },
          },
        },
      },
    },
    {
      key: 'intel-q3-fy25',
      company: 'Intel',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/intel-q3-fy25.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 13.7,
        notes: ['+3% Y/Y'],
        items: [
          {
            id: 'intel_products',
            label: 'Intel Products',
            value: 12.7,
            notes: ['+3% Y/Y'],
            children: [
              { id: 'client_computing', label: 'Client Computing', value: 8.5, notes: ['+5% Y/Y', '32% operating margin'] },
              { id: 'datacenter_ai', label: 'Datacenter & AI', value: 4.1, notes: ['(1%) Y/Y', '23% operating margin'] },
            ],
          },
          { id: 'intel_foundry', label: 'Intel Foundry', value: 4.2, notes: ['(2%) Y/Y', '(55%) operating margin'] },
          { id: 'other', label: 'Other', value: 1.0, notes: ['+3% Y/Y', '10% operating margin'] },
          {
            id: 'eliminations',
            label: 'Eliminations',
            value: -4.2,
            notes: ['Intersegment eliminations reconciling segment revenue to net revenue.'],
          },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_sales',
          label: 'Cost of sales',
          value: 8.4,
          notes: ['Net revenue less gross profit differs by $0.1B due to rounded source-chart values.'],
        },
        operatingExpenses: {
          total: 4.5,
          items: [
            { id: 'rnd', label: 'Research & development', value: 3.2, notes: ['24% of revenue', '(7pp) Y/Y'] },
            { id: 'marketing_ga', label: 'Marketing, general & administrative', value: 1.1, notes: ['8% of revenue', '(2pp) Y/Y'] },
            { id: 'restructuring', label: 'Restructuring', value: 0.2, notes: ['1% of revenue', '(41pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.3 },
      },
      otherIncome: {
        total: 3.9,
        items: [
          { id: 'other_income', label: 'Other', value: 3.7 },
          { id: 'equity', label: 'Equity', value: 0.2 },
        ],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 5.2, notes: ['38% margin', '+23pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.7, notes: ['5% margin', '+73pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 4.3, notes: ['31% margin', '+159pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          revenue: {
            notes: ['同比 +3%'],
            items: [
              {
                id: 'intel_products', label: '英特尔产品', notes: ['同比 +3%'],
                children: [
                  { id: 'client_computing', label: '客户端计算', notes: ['同比 +5%', '营业利润率 32%'] },
                  { id: 'datacenter_ai', label: '数据中心与 AI', notes: ['同比 (1%)', '营业利润率 23%'] },
                ],
              },
              { id: 'intel_foundry', label: '英特尔代工', notes: ['同比 (2%)', '营业利润率 (55%)'] },
              { id: 'other', label: '其他', notes: ['同比 +3%', '营业利润率 10%'] },
              { id: 'eliminations', label: '内部抵销', notes: ['将分部收入调节为净收入的分部间抵销。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本', notes: ['净收入减毛利润因来源图数值取整相差 $0.1B。'] },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 24%', '同比 (7 个百分点)'] },
                { id: 'marketing_ga', label: '营销及一般行政', notes: ['占收入 8%', '同比 (2 个百分点)'] },
                { id: 'restructuring', label: '重组', notes: ['占收入 1%', '同比 (41 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'other_income', label: '其他收益' },
              { id: 'equity', label: '权益法收益' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 38%', '同比 +23 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 5%', '同比 +73 个百分点'] },
            net: { label: '净利润', notes: ['利润率 31%', '同比 +159 个百分点'] },
          },
        },
      },
    },
    {
      key: 'intel-q4-fy25',
      company: 'Intel',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/intel-q4-fy25.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 13.7,
        notes: ['(4%) Y/Y'],
        items: [
          {
            id: 'intel_products',
            label: 'Intel Products',
            value: 12.9,
            notes: ['(1%) Y/Y'],
            children: [
              { id: 'client_computing', label: 'Client Computing', value: 8.2, notes: ['(7%) Y/Y', '27% operating margin'] },
              { id: 'datacenter_ai', label: 'Datacenter & AI', value: 4.7, notes: ['+9% Y/Y', '26% operating margin'] },
            ],
          },
          { id: 'intel_foundry', label: 'Intel Foundry', value: 4.5, notes: ['+4% Y/Y', '(56%) operating margin'] },
          { id: 'other', label: 'Other', value: 0.6, notes: ['(48%) Y/Y', '1% operating margin'] },
          {
            id: 'eliminations',
            label: 'Eliminations',
            value: -4.3,
            notes: ['Intersegment eliminations reconciling segment revenue to net revenue.'],
          },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_sales',
          label: 'Cost of sales',
          value: 8.7,
        },
        operatingExpenses: {
          total: 4.4,
          items: [
            { id: 'rnd', label: 'Research & development', value: 3.2, notes: ['24% of revenue', '(4pp) Y/Y'] },
            { id: 'marketing_ga', label: 'Marketing, general & administrative', value: 1.2, notes: ['9% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: {
          id: 'tax',
          label: 'Tax',
          value: 0.7,
        },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.2,
        items: [{ id: 'interest_other', label: 'Interest & other', value: 0.2 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 5.0, notes: ['36% margin', '(3pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.6, notes: ['4% margin', '+1pp Y/Y'] },
        net: {
          id: 'net_loss',
          label: 'Net loss',
          value: -0.3,
          notes: ['(2%) margin', '(1pp) Y/Y'],
        },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 (4%)'],
            items: [
              {
                id: 'intel_products',
                label: '英特尔产品',
                notes: ['同比 (1%)'],
                children: [
                  { id: 'client_computing', label: '客户端计算', notes: ['同比 (7%)', '营业利润率 27%'] },
                  { id: 'datacenter_ai', label: '数据中心与 AI', notes: ['同比 +9%', '营业利润率 26%'] },
                ],
              },
              { id: 'intel_foundry', label: '英特尔代工', notes: ['同比 +4%', '营业利润率 (56%)'] },
              { id: 'other', label: '其他', notes: ['同比 (48%)', '营业利润率 1%'] },
              { id: 'eliminations', label: '内部抵销', notes: ['将分部收入调节为净收入的分部间抵销。'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '销售成本',
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 24%', '同比 (4 个百分点)'] },
                { id: 'marketing_ga', label: '营销及一般行政', notes: ['占收入 9%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [{ id: 'interest_other', label: '利息及其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 36%', '同比 (3 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 4%', '同比 +1 个百分点'] },
            net: { label: '净亏损', notes: ['利润率 (2%)', '同比 (1 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'intel-q1-fy23',
      company: 'Intel',
      period: 'Q1 FY23',
      periodNote: 'Ending Apr. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/intel-q1-fy23.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 11.7,
        notes: ['(36%) Y/Y'],
        items: [
          { id: 'client_computing', label: 'Client Computing', value: 5.7, notes: ['(38%) Y/Y', '9% operating margin'] },
          { id: 'datacenter_ai', label: 'Datacenter & AI', value: 3.7, notes: ['(39%) Y/Y', '(14%) operating margin'] },
          { id: 'network_edge', label: 'Network & Edge', value: 1.5, notes: ['(30%) Y/Y', '(20%) operating margin'] },
          { id: 'mobileye', label: 'Mobileye', value: 0.5, notes: ['+16% Y/Y', '27% operating margin'] },
          { id: 'intel_foundry', label: 'Intel Foundry', value: 0.1, notes: ['(24%) Y/Y', '(119%) operating margin'] },
          { id: 'other', label: 'Other', value: 0.2 },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_sales',
          label: 'Cost of sales',
          value: 7.7,
        },
        operatingExpenses: {
          total: 5.5,
          items: [
            { id: 'rnd', label: 'Research & development', value: 4.1, notes: ['35% of revenue', '+11pp Y/Y'] },
            { id: 'marketing_ga', label: 'Marketing, G&A', value: 1.3, notes: ['11% of revenue', '+2pp Y/Y'] },
            { id: 'restructuring', label: 'Restructuring', value: 0.1, notes: ['1% of revenue', '+0pp Y/Y'] },
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 4.0, notes: ['34% margin', '(26pp) Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -1.5, notes: ['(13%) margin', '(36pp) Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -1.5,
          notes: ['No separate net income or net loss line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2023 财年第一季度',
          periodNote: '截至 2023 年 4 月',
          revenue: {
            notes: ['同比 (36%)'],
            items: [
              { id: 'client_computing', label: '客户端计算', notes: ['同比 (38%)', '营业利润率 9%'] },
              { id: 'datacenter_ai', label: '数据中心与 AI', notes: ['同比 (39%)', '营业利润率 (14%)'] },
              { id: 'network_edge', label: '网络与边缘', notes: ['同比 (30%)', '营业利润率 (20%)'] },
              { id: 'mobileye', label: 'Mobileye', notes: ['同比 +16%', '营业利润率 27%'] },
              { id: 'intel_foundry', label: '英特尔代工', notes: ['同比 (24%)', '营业利润率 (119%)'] },
              { id: 'other', label: '其他' },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 35%', '同比 +11 个百分点'] },
                { id: 'marketing_ga', label: '营销及一般行政', notes: ['占收入 11%', '同比 +2 个百分点'] },
                { id: 'restructuring', label: '重组', notes: ['占收入 1%', '同比 +0 个百分点'] },
              ],
            },
            tax: { label: '税费', notes: ['来源图未单列税费项。'] },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 34%', '同比 (26 个百分点)'] },
            operating: { label: '营业亏损', notes: ['利润率 (13%)', '同比 (36 个百分点)'] },
            net: { label: '营业亏损', notes: ['来源图未单列净利润或净亏损项。'] },
          },
        },
      },
    },
    {
      key: 'intel-q4-fy24',
      company: 'Intel',
      period: 'Q4 FY24',
      periodNote: 'Ending Dec. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/intel-q4-fy24.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 14.3,
        notes: ['(7%) Y/Y'],
        items: [
          { id: 'client_computing', label: 'Client Computing', value: 8.0, notes: ['(9%) Y/Y', '31% operating margin'] },
          { id: 'datacenter_ai', label: 'Datacenter & AI', value: 3.4, notes: ['(3%) Y/Y', '7% operating margin'] },
          { id: 'network_edge', label: 'Network & Edge', value: 1.6, notes: ['+10% Y/Y', '28% operating margin'] },
          { id: 'intel_foundry', label: 'Intel Foundry', value: 4.5, notes: ['(13%) Y/Y', '(50%) operating margin'] },
          { id: 'other', label: 'Other', value: 1.0, notes: ['(20%) Y/Y'] },
          {
            id: 'eliminations',
            label: 'Eliminations',
            value: -4.3,
            notes: [
              'Intersegment eliminations reconciling segment revenue to net revenue.',
              'Displayed segment values less eliminations differ from net revenue by $0.1B due to rounded source-chart values.',
            ],
          },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_sales',
          label: 'Cost of sales',
          value: 8.7,
        },
        operatingExpenses: {
          total: 5.2,
          items: [
            { id: 'rnd', label: 'Research & development', value: 3.9, notes: ['27% of revenue', '+1pp Y/Y'] },
            { id: 'marketing_ga', label: 'Marketing, general & administrative', value: 1.2, notes: ['9% of revenue', '(1pp) Y/Y'] },
            { id: 'restructuring', label: 'Restructuring', value: 0.1, notes: ['0% of revenue', '(7pp) Y/Y'] },
          ],
        },
        tax: {
          id: 'tax_other',
          label: 'Tax & other',
          value: 0.6,
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 5.6, notes: ['39% margin', '(7pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.4, notes: ['3% margin', '(14pp) Y/Y'] },
        net: { id: 'net_loss', label: 'Net loss', value: -0.2, notes: ['(1%) margin', '(18pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第四季度',
          periodNote: '截至 2024 年 12 月',
          revenue: {
            notes: ['同比 (7%)'],
            items: [
              { id: 'client_computing', label: '客户端计算', notes: ['同比 (9%)', '营业利润率 31%'] },
              { id: 'datacenter_ai', label: '数据中心与 AI', notes: ['同比 (3%)', '营业利润率 7%'] },
              { id: 'network_edge', label: '网络与边缘', notes: ['同比 +10%', '营业利润率 28%'] },
              { id: 'intel_foundry', label: '英特尔代工', notes: ['同比 (13%)', '营业利润率 (50%)'] },
              { id: 'other', label: '其他', notes: ['同比 (20%)'] },
              {
                id: 'eliminations',
                label: '内部抵销',
                notes: [
                  '将分部收入调节为净收入的分部间抵销。',
                  '图示分部金额减抵销额与净收入相差 $0.1B，源于来源图数值取整。',
                ],
              },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 27%', '同比 +1 个百分点'] },
                { id: 'marketing_ga', label: '营销及一般行政', notes: ['占收入 9%', '同比 (1 个百分点)'] },
                { id: 'restructuring', label: '重组', notes: ['占收入 0%', '同比 (7 个百分点)'] },
              ],
            },
            tax: { label: '税费及其他' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 39%', '同比 (7 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 3%', '同比 (14 个百分点)'] },
            net: { label: '净亏损', notes: ['利润率 (1%)', '同比 (18 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'intel-q4-fy23',
      company: 'Intel',
      period: 'Q4 FY23',
      periodNote: 'Ending Dec. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/intel-q4-fy23.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 15.4,
        notes: ['+10% Y/Y'],
        items: [
          { id: 'client_computing', label: 'Client Computing', value: 8.8, notes: ['+33% Y/Y', '33% operating margin'] },
          { id: 'datacenter_ai', label: 'Datacenter & AI', value: 4.0, notes: ['(10%) Y/Y', '2% operating margin'] },
          { id: 'network_edge', label: 'Network & Edge', value: 1.5, notes: ['(24%) Y/Y', '(1%) operating margin'] },
          { id: 'mobileye', label: 'Mobileye', value: 0.6, notes: ['+13% Y/Y', '38% operating margin'] },
          { id: 'intel_foundry', label: 'Intel Foundry', value: 0.3, notes: ['+63% Y/Y', '(39%) operating margin'] },
          { id: 'other', label: 'Other', value: 0.2, notes: ['(42%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 8.4 },
        operatingExpenses: {
          total: 4.4,
          items: [
            { id: 'rnd', label: 'Research & development', value: 4.0, notes: ['26% of revenue', '(6pp) Y/Y'] },
            { id: 'marketing_ga', label: 'Marketing, G&A', value: 1.6, notes: ['10% of revenue', '(2pp) Y/Y'] },
            { id: 'restructuring', label: 'Restructuring', value: -1.1, notes: ['Expense credit shown as a positive green inflow in the source Sankey.'] },
          ],
          notes: ['The $1.1B restructuring credit shown separately in the source reconciles the two displayed expense components to operating expenses within source rounding.'],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.1 },
      },
      otherIncome: {
        total: 0.2,
        items: [{ id: 'other_income', label: 'Other', value: 0.2 }],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 7.0, notes: ['46% margin', '+7pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.6, notes: ['17% margin', '+25pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.7, notes: ['17% margin', '+23pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第四季度',
          periodNote: '截至 2023 年 12 月',
          revenue: {
            notes: ['同比 +10%'],
            items: [
              { id: 'client_computing', label: '客户端计算', notes: ['同比 +33%', '营业利润率 33%'] },
              { id: 'datacenter_ai', label: '数据中心与 AI', notes: ['同比 (10%)', '营业利润率 2%'] },
              { id: 'network_edge', label: '网络与边缘', notes: ['同比 (24%)', '营业利润率 (1%)'] },
              { id: 'mobileye', label: 'Mobileye', notes: ['同比 +13%', '营业利润率 38%'] },
              { id: 'intel_foundry', label: '英特尔代工', notes: ['同比 +63%', '营业利润率 (39%)'] },
              { id: 'other', label: '其他', notes: ['同比 (42%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 26%', '同比 (6 个百分点)'] },
                { id: 'marketing_ga', label: '营销及一般行政', notes: ['占收入 10%', '同比 (2 个百分点)'] },
                { id: 'restructuring', label: '重组', notes: ['费用冲回；来源 Sankey 以绿色正向流表示。'] },
              ],
              notes: ['来源图单列的 $1.1B 重组冲回使两项费用与营业费用在来源图取整范围内勾稽。'],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 46%', '同比 +7 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 17%', '同比 +25 个百分点'] },
            net: { label: '净利润', notes: ['利润率 17%', '同比 +23 个百分点'] },
          },
        },
      },
    },
    {
      key: 'intel-q2-fy24',
      company: 'Intel',
      period: 'Q2 FY24',
      periodNote: 'Ending Jun. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/intel-q2-fy24.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 12.8,
        notes: ['(1%) Y/Y'],
        items: [
          { id: 'client_computing', label: 'Client Computing', value: 7.4, notes: ['+9% Y/Y', '34% operating margin'] },
          { id: 'datacenter_ai', label: 'Datacenter & AI', value: 3.0, notes: ['(3%) Y/Y', '9% operating margin'] },
          { id: 'network_edge', label: 'Network & Edge', value: 1.3, notes: ['(1%) Y/Y', '10% operating margin'] },
          { id: 'mobileye', label: 'Mobileye', value: 0.4, notes: ['(3%) Y/Y', '16% operating margin'] },
          { id: 'intel_foundry', label: 'Intel Foundry', value: 4.3, notes: ['+4% Y/Y', '(66%) operating margin'] },
          { id: 'other', label: 'Other', value: 0.5, notes: ['(45%) Y/Y'] },
          { id: 'eliminations', label: 'Eliminations', value: -4.3, notes: ['Intersegment eliminations reconciling segment revenue to revenue.'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 8.3 },
        operatingExpenses: {
          total: 6.5,
          items: [
            { id: 'rnd', label: 'Research & development', value: 4.2, notes: ['33% of revenue', '+2pp Y/Y'] },
            { id: 'marketing_ga', label: 'Marketing, general & administrative', value: 1.3, notes: ['10% of revenue', '(0pp) Y/Y'] },
            { id: 'restructuring', label: 'Restructuring', value: 0.9, notes: ['7% of revenue', '+6pp Y/Y'] },
          ],
        },
        tax: { label: 'Tax', value: 0, notes: ['No separate tax line is shown in the source chart.'] },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 4.5, notes: ['35% margin', '(0pp) Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -2.0, notes: ['(15%) margin', '(7pp) Y/Y'] },
        net: { id: 'operating_loss', label: 'Operating loss', value: -2.0, notes: ['No separate net income or net loss line is shown in the source chart.'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第二季度', periodNote: '截至 2024 年 6 月',
          revenue: {
            notes: ['同比 (1%)'],
            items: [
              { id: 'client_computing', label: '客户端计算', notes: ['同比 +9%', '营业利润率 34%'] },
              { id: 'datacenter_ai', label: '数据中心与 AI', notes: ['同比 (3%)', '营业利润率 9%'] },
              { id: 'network_edge', label: '网络与边缘', notes: ['同比 (1%)', '营业利润率 10%'] },
              { id: 'mobileye', label: 'Mobileye', notes: ['同比 (3%)', '营业利润率 16%'] },
              { id: 'intel_foundry', label: '英特尔代工', notes: ['同比 +4%', '营业利润率 (66%)'] },
              { id: 'other', label: '其他', notes: ['同比 (45%)'] },
              { id: 'eliminations', label: '内部抵销', notes: ['将分部收入调节为收入的分部间抵销。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: { items: [
              { id: 'rnd', label: '研发', notes: ['占收入 33%', '同比 +2 个百分点'] },
              { id: 'marketing_ga', label: '营销及一般行政', notes: ['占收入 10%', '同比 (0 个百分点)'] },
              { id: 'restructuring', label: '重组', notes: ['占收入 7%', '同比 +6 个百分点'] },
            ] },
            tax: { label: '税费', notes: ['来源图未单列税费项。'] },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 35%', '同比 (0 个百分点)'] },
            operating: { label: '营业亏损', notes: ['利润率 (15%)', '同比 (7 个百分点)'] },
            net: { label: '营业亏损', notes: ['来源图未单列净利润或净亏损项。'] },
          },
        },
      },
    },
    {
      key: 'intel-q1-fy25',
      company: 'Intel',
      period: 'Q1 FY25',
      periodNote: 'Ending Mar. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/intel-q1-fy25.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 12.7,
        notes: ['(0%) Y/Y'],
        items: [
          {
            id: 'intel_products',
            label: 'Intel Products',
            value: 11.8,
            notes: ['(3%) Y/Y'],
            children: [
              { id: 'client_computing', label: 'Client Computing', value: 7.6, notes: ['(8%) Y/Y', '31% operating margin'] },
              { id: 'datacenter_ai', label: 'Datacenter & AI', value: 4.1, notes: ['+8% Y/Y', '14% operating margin'] },
            ],
          },
          { id: 'intel_foundry', label: 'Intel Foundry', value: 4.7, notes: ['+7% Y/Y', '(50%) operating margin'] },
          { id: 'other', label: 'Other', value: 0.9, notes: ['+47% Y/Y', '11% operating margin'] },
          {
            id: 'eliminations',
            label: 'Eliminations',
            value: -4.7,
            notes: ['Intersegment eliminations reconciling segment revenue to revenue.'],
          },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_sales',
          label: 'Cost of sales',
          value: 8.0,
        },
        operatingExpenses: {
          total: 5.0,
          items: [
            { id: 'rnd', label: 'Research & development', value: 3.6, notes: ['29% of revenue', '(6pp) Y/Y'] },
            { id: 'marketing_ga', label: 'Marketing, general & administrative', value: 1.2, notes: ['9% of revenue', '(3pp) Y/Y'] },
            { id: 'restructuring', label: 'Restructuring', value: 0.2, notes: ['1% of revenue', '(2pp) Y/Y'] },
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 4.7, notes: ['37% margin', '(4pp) Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -0.3, notes: ['(2%) margin', '+6pp Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -0.3,
          notes: ['No separate net income or net loss line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2025 财年第一季度',
          periodNote: '截至 2025 年 3 月',
          revenue: {
            notes: ['同比 (0%)'],
            items: [
              {
                id: 'intel_products',
                label: '英特尔产品',
                notes: ['同比 (3%)'],
                children: [
                  { id: 'client_computing', label: '客户端计算', notes: ['同比 (8%)', '营业利润率 31%'] },
                  { id: 'datacenter_ai', label: '数据中心与 AI', notes: ['同比 +8%', '营业利润率 14%'] },
                ],
              },
              { id: 'intel_foundry', label: '英特尔代工', notes: ['同比 +7%', '营业利润率 (50%)'] },
              { id: 'other', label: '其他', notes: ['同比 +47%', '营业利润率 11%'] },
              { id: 'eliminations', label: '内部抵销', notes: ['将分部收入调节为收入的分部间抵销。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研究与开发', notes: ['占收入 29%', '同比 (6 个百分点)'] },
                { id: 'marketing_ga', label: '营销及一般行政', notes: ['占收入 9%', '同比 (3 个百分点)'] },
                { id: 'restructuring', label: '重组', notes: ['占收入 1%', '同比 (2 个百分点)'] },
              ],
            },
            tax: { label: '税费', notes: ['来源图未单列税费项。'] },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 37%', '同比 (4 个百分点)'] },
            operating: { label: '营业亏损', notes: ['利润率 (2%)', '同比 +6 个百分点'] },
            net: { label: '营业亏损', notes: ['来源图未单列净利润或净亏损项。'] },
          },
        },
      },
    }
  );
})(window);
