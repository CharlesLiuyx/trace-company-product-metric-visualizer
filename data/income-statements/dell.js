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
      key: 'dell-q4-fy24',
      company: 'Dell',
      period: 'Q4 FY24',
      periodNote: 'Ending Jan. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/dell-q4-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 22.3,
        notes: ['(11%) Y/Y'],
        items: [
          {
            id: 'isg',
            label: 'ISG (Infrastructure)',
            value: 9.3,
            notes: ['(6%) Y/Y'],
            children: [
              { id: 'server_networking', label: 'Server & Networking', value: 4.9, notes: ['(2%) Y/Y'] },
              { id: 'storage', label: 'Storage', value: 4.5, notes: ['(10%) Y/Y'] },
            ],
          },
          {
            id: 'csg',
            label: 'CSG (Client)',
            value: 11.7,
            notes: ['(12%) Y/Y'],
            children: [
              { id: 'commercial', label: 'Commercial', value: 9.6, notes: ['(11%) Y/Y'] },
              { id: 'consumer', label: 'Consumer', value: 2.2, notes: ['(19%) Y/Y'] },
            ],
          },
          { id: 'other_revenue', label: 'Other', value: 1.3, notes: ['(28%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 17.0 },
        operatingExpenses: {
          total: 3.7,
          items: [
            { id: 'sga', label: 'SG&A', value: 3.1, notes: ['14% of revenue', '(1pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 0.7, notes: ['3% of revenue', '+0pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.1 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 0.2,
        items: [{ id: 'other_expense', label: 'Other', value: 0.2 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 5.3, notes: ['24% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.5, notes: ['7% margin', '+2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.2, notes: ['5% margin', '+3pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第四季度',
          periodNote: '截至 2024 年 1 月',
          revenue: {
            notes: ['同比 (11%)'],
            items: [
              {
                id: 'isg', label: 'ISG（基础设施）', notes: ['同比 (6%)'],
                children: [
                  { id: 'server_networking', label: '服务器与网络', notes: ['同比 (2%)'] },
                  { id: 'storage', label: '存储', notes: ['同比 (10%)'] },
                ],
              },
              {
                id: 'csg', label: 'CSG（客户端）', notes: ['同比 (12%)'],
                children: [
                  { id: 'commercial', label: '商业', notes: ['同比 (11%)'] },
                  { id: 'consumer', label: '消费者', notes: ['同比 (19%)'] },
                ],
              },
              { id: 'other_revenue', label: '其他', notes: ['同比 (28%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 14%', '同比 (1 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 3%', '同比 +0 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'other_expense', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 24%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 7%', '同比 +2 个百分点'] },
            net: { label: '净利润', notes: ['利润率 5%', '同比 +3 个百分点'] },
          },
        },
      },
    },
    {
      key: 'dell-q1-fy27',
      company: 'Dell',
      period: 'Q1 FY27',
      periodNote: 'Ending May 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/dell-q1-fy27.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 43.842,
        notes: ['+88% Y/Y'],
        items: [
          {
            id: 'isg',
            label: 'ISG (Infrastructure)',
            value: 29.009,
            notes: ['+181% Y/Y'],
            children: [
              { id: 'ai_optimized_servers', label: 'AI-optimized Servers', value: 16.132, notes: ['+757% Y/Y'] },
              {
                id: 'traditional_servers_networking',
                label: 'Traditional Servers & Networking',
                value: 8.543,
                notes: ['+92% Y/Y'],
              },
              { id: 'storage', label: 'Storage', value: 4.334, notes: ['+8% Y/Y'] },
            ],
          },
          {
            id: 'csg',
            label: 'CSG (Client)',
            value: 14.609,
            notes: ['+17% Y/Y'],
            children: [
              { id: 'commercial', label: 'Commercial', value: 13.02, notes: ['+18% Y/Y'] },
              { id: 'consumer', label: 'Consumer', value: 1.589, notes: ['+9% Y/Y'] },
            ],
          },
          { id: 'other_revenue', label: 'Other', value: 0.224, notes: ['(59%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 36.06 },
        operatingExpenses: {
          total: 4.126,
          items: [
            { id: 'sga', label: 'SG&A', value: 3.143, notes: ['7% of revenue', '(6pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 0.983, notes: ['2% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.51 },
      },
      otherIncome: {
        total: 0.292,
        items: [{ id: 'other', label: 'Other', value: 0.292 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 7.782, notes: ['18% margin', '(3pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 3.656, notes: ['8% margin', '+3pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 3.438, notes: ['8% margin', '+4pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2027 财年第一季度',
          periodNote: '截至 2026 年 5 月',
          revenue: {
            notes: ['同比 +88%'],
            items: [
              {
                id: 'isg',
                label: 'ISG（基础设施）',
                notes: ['同比 +181%'],
                children: [
                  { id: 'ai_optimized_servers', label: 'AI 优化服务器', notes: ['同比 +757%'] },
                  { id: 'traditional_servers_networking', label: '传统服务器与网络', notes: ['同比 +92%'] },
                  { id: 'storage', label: '存储', notes: ['同比 +8%'] },
                ],
              },
              {
                id: 'csg',
                label: 'CSG（客户端）',
                notes: ['同比 +17%'],
                children: [
                  { id: 'commercial', label: '商业', notes: ['同比 +18%'] },
                  { id: 'consumer', label: '消费者', notes: ['同比 +9%'] },
                ],
              },
              { id: 'other_revenue', label: '其他', notes: ['同比 (59%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 7%', '同比 (6 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 2%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 18%', '同比 (3 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 8%', '同比 +3 个百分点'] },
            net: { label: '净利润', notes: ['利润率 8%', '同比 +4 个百分点'] },
          },
        },
      },
    },
    {
      key: 'dell-q4-fy26',
      company: 'Dell',
      period: 'Q4 FY26',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/dell-q4-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 33.4,
        notes: ['+39% Y/Y'],
        items: [
          {
            id: 'isg',
            label: 'ISG (Infrastructure)',
            value: 19.6,
            notes: ['+73% Y/Y'],
            children: [
              { id: 'ai_optimized_servers', label: 'AI-optimized Servers', value: 9.0, notes: ['+342% Y/Y'] },
              {
                id: 'traditional_servers_networking',
                label: 'Traditional server & networking',
                value: 5.8,
                notes: ['+27% Y/Y'],
              },
              { id: 'storage', label: 'Storage', value: 4.8, notes: ['+2% Y/Y'] },
            ],
          },
          {
            id: 'csg',
            label: 'CSG (Client)',
            value: 13.5,
            notes: ['+14% Y/Y'],
            children: [
              { id: 'commercial', label: 'Commercial', value: 11.6, notes: ['+16% Y/Y'] },
              { id: 'consumer', label: 'Consumer', value: 1.9, notes: ['(0%) Y/Y'] },
            ],
          },
          { id: 'other_revenue', label: 'Other', value: 0.3 },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 26.6 },
        operatingExpenses: {
          total: 3.6,
          items: [
            { id: 'sga', label: 'SG&A', value: 2.8, notes: ['9% of revenue', '(3pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 0.8, notes: ['2% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.5 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.3,
        items: [{ id: 'other_expense', label: 'Other', value: 0.3 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 6.7, notes: ['20% margin', '(4pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 3.1, notes: ['9% margin', '+0pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.3, notes: ['7% margin', '+0pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第四季度',
          periodNote: '截至 2026 年 1 月',
          revenue: {
            notes: ['同比 +39%'],
            items: [
              {
                id: 'isg',
                label: 'ISG（基础设施）',
                notes: ['同比 +73%'],
                children: [
                  { id: 'ai_optimized_servers', label: 'AI 优化服务器', notes: ['同比 +342%'] },
                  { id: 'traditional_servers_networking', label: '传统服务器与网络', notes: ['同比 +27%'] },
                  { id: 'storage', label: '存储', notes: ['同比 +2%'] },
                ],
              },
              {
                id: 'csg',
                label: 'CSG（客户端）',
                notes: ['同比 +14%'],
                children: [
                  { id: 'commercial', label: '商业', notes: ['同比 +16%'] },
                  { id: 'consumer', label: '消费者', notes: ['同比 (0%)'] },
                ],
              },
              { id: 'other_revenue', label: '其他' },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 9%', '同比 (3 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 2%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [{ id: 'other_expense', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 20%', '同比 (4 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 9%', '同比 +0 个百分点'] },
            net: { label: '净利润', notes: ['利润率 7%', '同比 +0 个百分点'] },
          },
        },
      },
    },
    {
      key: 'dell-q2-fy26',
      company: 'Dell',
      period: 'Q2 FY26',
      periodNote: 'Ending July 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/dell-q2-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 29.8,
        notes: ['+19% Y/Y'],
        items: [
          {
            id: 'isg',
            label: 'ISG (Infrastructure)',
            value: 16.8,
            notes: ['+44% Y/Y'],
            children: [
              { id: 'server_networking', label: 'Server & Networking', value: 12.9, notes: ['+69% Y/Y'] },
              { id: 'storage', label: 'Storage', value: 3.9, notes: ['(3%) Y/Y'] },
            ],
          },
          {
            id: 'csg',
            label: 'CSG (Client)',
            value: 12.5,
            notes: ['+1% Y/Y'],
            children: [
              { id: 'commercial', label: 'Commercial', value: 10.8, notes: ['+2% Y/Y'] },
              { id: 'consumer', label: 'Consumer', value: 1.7, notes: ['(7%) Y/Y'] },
            ],
          },
          { id: 'other_revenue', label: 'Other', value: 0.5, notes: ['(51%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 24.3 },
        operatingExpenses: {
          total: 3.7,
          items: [
            { id: 'sga', label: 'SG&A', value: 2.9, notes: ['10% of revenue', '(3pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 0.8, notes: ['3% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.3 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.3,
        items: [{ id: 'other_expense', label: 'Other', value: 0.3 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 5.4, notes: ['18% margin', '(3pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.8, notes: ['6% margin', '+0pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.2, notes: ['4% margin', '+0pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2025 年 7 月',
          revenue: {
            notes: ['同比 +19%'],
            items: [
              {
                id: 'isg',
                label: 'ISG（基础设施）',
                notes: ['同比 +44%'],
                children: [
                  { id: 'server_networking', label: '服务器与网络', notes: ['同比 +69%'] },
                  { id: 'storage', label: '存储', notes: ['同比 (3%)'] },
                ],
              },
              {
                id: 'csg',
                label: 'CSG（客户端）',
                notes: ['同比 +1%'],
                children: [
                  { id: 'commercial', label: '商业', notes: ['同比 +2%'] },
                  { id: 'consumer', label: '消费者', notes: ['同比 (7%)'] },
                ],
              },
              { id: 'other_revenue', label: '其他', notes: ['同比 (51%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 10%', '同比 (3 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 3%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [{ id: 'other_expense', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 18%', '同比 (3 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 6%', '同比 +0 个百分点'] },
            net: { label: '净利润', notes: ['利润率 4%', '同比 +0 个百分点'] },
          },
        },
      },
    },
    {
      key: 'dell-q3-fy26',
      company: 'Dell',
      period: 'Q3 FY26',
      periodNote: 'Ending Oct. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/dell-q3-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 27.0,
        notes: ['+11% Y/Y'],
        items: [
          {
            id: 'isg',
            label: 'ISG (Infrastructure)',
            value: 14.1,
            notes: ['+24% Y/Y'],
            children: [
              { id: 'server_networking', label: 'Server & Networking', value: 10.1, notes: ['+37% Y/Y'] },
              { id: 'storage', label: 'Storage', value: 4.0, notes: ['(1%) Y/Y'] },
            ],
          },
          {
            id: 'csg',
            label: 'CSG (Client)',
            value: 12.5,
            notes: ['+3% Y/Y'],
            children: [
              { id: 'commercial', label: 'Commercial', value: 10.6, notes: ['+5% Y/Y'] },
              { id: 'consumer', label: 'Consumer', value: 1.9, notes: ['(7%) Y/Y'] },
            ],
          },
          { id: 'other_revenue', label: 'Other', value: 0.4, notes: ['(52%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 21.4 },
        operatingExpenses: {
          total: 3.5,
          items: [
            { id: 'sga', label: 'SG&A', value: 2.7, notes: ['10% of revenue', '(2pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 0.8, notes: ['3% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.4 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.2,
        items: [{ id: 'other_expense', label: 'Other', value: 0.2 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 5.6, notes: ['21% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.1, notes: ['8% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.5, notes: ['6% margin', '+1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第三季度',
          periodNote: '截至 2025 年 10 月',
          revenue: {
            notes: ['同比 +11%'],
            items: [
              {
                id: 'isg',
                label: 'ISG（基础设施）',
                notes: ['同比 +24%'],
                children: [
                  { id: 'server_networking', label: '服务器与网络', notes: ['同比 +37%'] },
                  { id: 'storage', label: '存储', notes: ['同比 (1%)'] },
                ],
              },
              {
                id: 'csg',
                label: 'CSG（客户端）',
                notes: ['同比 +3%'],
                children: [
                  { id: 'commercial', label: '商业', notes: ['同比 +5%'] },
                  { id: 'consumer', label: '消费者', notes: ['同比 (7%)'] },
                ],
              },
              { id: 'other_revenue', label: '其他', notes: ['同比 (52%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 10%', '同比 (2 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 3%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [{ id: 'other_expense', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 21%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 8%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 6%', '同比 +1 个百分点'] },
          },
        },
      },
    },
    {
      key: 'dell-q2-fy25',
      company: 'Dell',
      period: 'Q2 FY25',
      periodNote: 'Ending July 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/dell-q2-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 25.0,
        notes: ['+9% Y/Y'],
        items: [
          {
            id: 'isg',
            label: 'ISG (Infrastructure)',
            value: 11.6,
            notes: ['+38% Y/Y'],
            children: [
              { id: 'server_networking', label: 'Server & Networking', value: 7.7, notes: ['+80% Y/Y'] },
              { id: 'storage', label: 'Storage', value: 4.0, notes: ['(5%) Y/Y'] },
            ],
          },
          {
            id: 'csg',
            label: 'CSG (Client)',
            value: 12.4,
            notes: ['(4%) Y/Y'],
            children: [
              { id: 'commercial', label: 'Commercial', value: 10.6, notes: ['+0% Y/Y'] },
              { id: 'consumer', label: 'Consumer', value: 1.9, notes: ['(22%) Y/Y'] },
            ],
          },
          { id: 'other_revenue', label: 'Other', value: 1.0, valueText: '$1.0B', notes: ['(37%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 19.7 },
        operatingExpenses: {
          total: 4.0,
          items: [
            { id: 'sga', label: 'SG&A', value: 3.2, notes: ['13% of revenue', '(1pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 0.8, notes: ['3% of revenue', '+0pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.1 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.4,
        items: [{ id: 'other_expense', label: 'Other', value: 0.4 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 5.3, notes: ['21% margin', '(2pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.3, notes: ['5% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.8, notes: ['3% margin', '+1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第二季度',
          periodNote: '截至 2024 年 7 月',
          revenue: {
            notes: ['同比 +9%'],
            items: [
              {
                id: 'isg',
                label: 'ISG（基础设施）',
                notes: ['同比 +38%'],
                children: [
                  { id: 'server_networking', label: '服务器与网络', notes: ['同比 +80%'] },
                  { id: 'storage', label: '存储', notes: ['同比 (5%)'] },
                ],
              },
              {
                id: 'csg',
                label: 'CSG（客户端）',
                notes: ['同比 (4%)'],
                children: [
                  { id: 'commercial', label: '商业', notes: ['同比 +0%'] },
                  { id: 'consumer', label: '消费者', notes: ['同比 (22%)'] },
                ],
              },
              { id: 'other_revenue', label: '其他', notes: ['同比 (37%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 13%', '同比 (1 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 3%', '同比 +0 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [{ id: 'other_expense', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 21%', '同比 (2 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 5%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 3%', '同比 +1 个百分点'] },
          },
        },
      },
    },
    {
      key: 'dell-q1-fy26',
      company: 'Dell',
      period: 'Q1 FY26',
      periodNote: 'Ending Apr. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/dell-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 23.4,
        notes: ['+5% Y/Y'],
        items: [
          {
            id: 'isg',
            label: 'ISG (Infrastructure)',
            value: 10.3,
            notes: ['+12% Y/Y'],
            children: [
              { id: 'server_networking', label: 'Server & Networking', value: 6.3, notes: ['+16% Y/Y'] },
              { id: 'storage', label: 'Storage', value: 4.0, notes: ['+6% Y/Y'] },
            ],
          },
          {
            id: 'csg',
            label: 'CSG (Client)',
            value: 12.5,
            notes: ['+5% Y/Y'],
            children: [
              { id: 'commercial', label: 'Commercial', value: 11.0, notes: ['+9% Y/Y'] },
              { id: 'consumer', label: 'Consumer', value: 1.5, notes: ['(19%) Y/Y'] },
            ],
          },
          { id: 'other_revenue', label: 'Other', value: 0.6, notes: ['(47%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 18.4 },
        operatingExpenses: {
          total: 3.8,
          items: [
            { id: 'sga', label: 'SG&A', value: 3.0, notes: ['13% of revenue', '(1pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 0.8, notes: ['3% of revenue', '+0pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.1 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.1,
        items: [{ id: 'other_expense', label: 'Other', value: 0.1 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 4.9, notes: ['21% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.2, notes: ['5% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.0, notes: ['4% margin', '(0pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2025 年 4 月',
          revenue: {
            notes: ['同比 +5%'],
            items: [
              {
                id: 'isg',
                label: 'ISG（基础设施）',
                notes: ['同比 +12%'],
                children: [
                  { id: 'server_networking', label: '服务器与网络', notes: ['同比 +16%'] },
                  { id: 'storage', label: '存储', notes: ['同比 +6%'] },
                ],
              },
              {
                id: 'csg',
                label: 'CSG（客户端）',
                notes: ['同比 +5%'],
                children: [
                  { id: 'commercial', label: '商业', notes: ['同比 +9%'] },
                  { id: 'consumer', label: '消费者', notes: ['同比 (19%)'] },
                ],
              },
              { id: 'other_revenue', label: '其他', notes: ['同比 (47%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 13%', '同比 (1 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 3%', '同比 +0 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [{ id: 'other_expense', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 21%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 5%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 4%', '同比 (0 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'dell-q3-fy25',
      company: 'Dell',
      period: 'Q3 FY25',
      periodNote: 'Ending Oct. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/dell-q3-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 24.4,
        notes: ['+10% Y/Y'],
        items: [
          {
            id: 'isg',
            label: 'ISG (Infrastructure)',
            value: 11.4,
            notes: ['+34% Y/Y'],
            children: [
              { id: 'server_networking', label: 'Server & Networking', value: 7.4, notes: ['+58% Y/Y'] },
              { id: 'storage', label: 'Storage', value: 4.0, notes: ['+4% Y/Y'] },
            ],
          },
          {
            id: 'csg',
            label: 'CSG (Client)',
            value: 12.1,
            notes: ['(1%) Y/Y'],
            children: [
              { id: 'commercial', label: 'Commercial', value: 10.1, notes: ['+3% Y/Y'] },
              { id: 'consumer', label: 'Consumer', value: 2.0, notes: ['(18%) Y/Y'] },
            ],
          },
          { id: 'other_revenue', label: 'Other', value: 0.9, notes: ['(41%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 19.1 },
        operatingExpenses: {
          total: 3.6,
          items: [
            { id: 'sga', label: 'SG&A', value: 2.9, notes: ['12% of revenue', '(1pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 0.7, notes: ['3% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.3 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.3,
        items: [{ id: 'other_expense', label: 'Other', value: 0.3 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 5.3, notes: ['22% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.7, notes: ['7% margin', '+0pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.1, notes: ['5% margin', '+0pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2024 年 10 月',
          revenue: {
            notes: ['同比 +10%'],
            items: [
              {
                id: 'isg',
                label: 'ISG（基础设施）',
                notes: ['同比 +34%'],
                children: [
                  { id: 'server_networking', label: '服务器与网络', notes: ['同比 +58%'] },
                  { id: 'storage', label: '存储', notes: ['同比 +4%'] },
                ],
              },
              {
                id: 'csg',
                label: 'CSG（客户端）',
                notes: ['同比 (1%)'],
                children: [
                  { id: 'commercial', label: '商业', notes: ['同比 +3%'] },
                  { id: 'consumer', label: '消费者', notes: ['同比 (18%)'] },
                ],
              },
              { id: 'other_revenue', label: '其他', notes: ['同比 (41%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 12%', '同比 (1 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 3%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [{ id: 'other_expense', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 22%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 7%', '同比 +0 个百分点'] },
            net: { label: '净利润', notes: ['利润率 5%', '同比 +0 个百分点'] },
          },
        },
      },
    },
    {
      key: 'dell-q1-fy25',
      company: 'Dell',
      period: 'Q1 FY25',
      periodNote: 'Ending Apr. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/dell-q1-fy25.png',
      sourceUrl: 'https://investors.delltechnologies.com/news-releases/news-release-details/dell-technologies-delivers-first-quarter-fiscal-2025-financial',
      roundingTolerance: 0.15,
      revenue: {
        total: 22.244,
        notes: ['+6% Y/Y'],
        items: [
          {
            id: 'isg',
            label: 'ISG (Infrastructure)',
            value: 9.227,
            notes: ['(6%) Y/Y'],
            children: [
              { id: 'server_networking', label: 'Server & Networking', value: 5.466, notes: ['+42% Y/Y'] },
              { id: 'storage', label: 'Storage', value: 3.761, notes: ['+0% Y/Y'] },
            ],
          },
          {
            id: 'csg',
            label: 'CSG (Client)',
            value: 11.967,
            notes: ['(0%) Y/Y'],
            children: [
              { id: 'commercial', label: 'Commercial', value: 10.154, notes: ['+3% Y/Y'] },
              { id: 'consumer', label: 'Consumer', value: 1.813, notes: ['(15%) Y/Y'] },
            ],
          },
          {
            id: 'other_revenue',
            label: 'Other',
            value: 1.05,
            notes: ['(22%) Y/Y', 'Other businesses and unallocated transactions.'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 17.438 },
        operatingExpenses: {
          total: 3.886,
          items: [
            { id: 'sga', label: 'SG&A', value: 3.123, notes: ['14% of revenue', '(2pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 0.763, notes: ['3% of revenue', '+0pp Y/Y'] },
          ],
        },
        tax: {
          label: 'Tax',
          value: 0,
          notes: ['The source chart shows an income-tax benefit rather than a tax expense.'],
        },
      },
      otherIncome: {
        total: 0.408,
        items: [{ id: 'tax_benefit', label: 'Tax benefit', value: 0.408 }],
      },
      otherExpenses: {
        total: 0.373,
        items: [{ id: 'other_expense', label: 'Other', value: 0.373, notes: ['Interest and other, net'] }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 4.806, notes: ['22% margin', '(2pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.92, notes: ['4% margin', '(1pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.955, notes: ['4% margin', '+2pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第一季度',
          periodNote: '截至 2024 年 4 月',
          revenue: {
            notes: ['同比 +6%'],
            items: [
              {
                id: 'isg',
                label: 'ISG（基础设施）',
                notes: ['同比 (6%)'],
                children: [
                  { id: 'server_networking', label: '服务器与网络', notes: ['同比 +42%'] },
                  { id: 'storage', label: '存储', notes: ['同比 +0%'] },
                ],
              },
              {
                id: 'csg',
                label: 'CSG（客户端）',
                notes: ['同比 (0%)'],
                children: [
                  { id: 'commercial', label: '商业', notes: ['同比 +3%'] },
                  { id: 'consumer', label: '消费者', notes: ['同比 (15%)'] },
                ],
              },
              { id: 'other_revenue', label: '其他', notes: ['同比 (22%)', '其他业务与未分配交易。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 14%', '同比 (2 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 3%', '同比 +0 个百分点'] },
              ],
            },
            tax: { label: '税费', notes: ['来源图显示的是所得税收益，而非所得税费用。'] },
          },
          otherIncome: {
            items: [{ id: 'tax_benefit', label: '税收收益' }],
          },
          otherExpenses: {
            items: [{ id: 'other_expense', label: '其他', notes: ['利息及其他净额'] }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 22%', '同比 (2 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 4%', '同比 (1 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 4%', '同比 +2 个百分点'] },
          },
        },
      },
    },
    {
      key: 'dell-q4-fy25',
      company: 'Dell',
      period: 'Q4 FY25',
      periodNote: 'Ending Jan. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/dell-q4-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 23.9,
        notes: ['+7% Y/Y'],
        items: [
          {
            id: 'isg',
            label: 'ISG (Infrastructure)',
            value: 11.4,
            notes: ['+22% Y/Y'],
            children: [
              { id: 'server_networking', label: 'Server & Networking', value: 6.6, notes: ['+37% Y/Y'] },
              { id: 'storage', label: 'Storage', value: 4.7, notes: ['+5% Y/Y'] },
            ],
          },
          {
            id: 'csg',
            label: 'CSG (Client)',
            value: 11.9,
            notes: ['+1% Y/Y'],
            children: [
              { id: 'commercial', label: 'Commercial', value: 10.0, notes: ['+5% Y/Y'] },
              { id: 'consumer', label: 'Consumer', value: 1.9, notes: ['(12%) Y/Y'] },
            ],
          },
          { id: 'other_revenue', label: 'Other', value: 0.7, notes: ['(45%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 18.3 },
        operatingExpenses: {
          total: 3.5,
          items: [
            { id: 'sga', label: 'SG&A', value: 2.7, notes: ['11% of revenue', '(2pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 0.8, notes: ['3% of revenue', '+0pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.4 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.2,
        items: [{ id: 'other_expense', label: 'Other', value: 0.2 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 5.7, notes: ['24% margin', '(0pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.2, notes: ['9% margin', '+2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.5, notes: ['6% margin', '+1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 1 月',
          revenue: {
            notes: ['同比 +7%'],
            items: [
              {
                id: 'isg',
                label: 'ISG（基础设施）',
                notes: ['同比 +22%'],
                children: [
                  { id: 'server_networking', label: '服务器与网络', notes: ['同比 +37%'] },
                  { id: 'storage', label: '存储', notes: ['同比 +5%'] },
                ],
              },
              {
                id: 'csg',
                label: 'CSG（客户端）',
                notes: ['同比 +1%'],
                children: [
                  { id: 'commercial', label: '商业', notes: ['同比 +5%'] },
                  { id: 'consumer', label: '消费者', notes: ['同比 (12%)'] },
                ],
              },
              { id: 'other_revenue', label: '其他', notes: ['同比 (45%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 11%', '同比 (2 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 3%', '同比 +0 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [{ id: 'other_expense', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 24%', '同比 (0 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 9%', '同比 +2 个百分点'] },
            net: { label: '净利润', notes: ['利润率 6%', '同比 +1 个百分点'] },
          },
        },
      },
    }
  );
})(window);
