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
    }
    ,
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
    }
  );
})(window);
