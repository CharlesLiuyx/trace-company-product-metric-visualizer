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
      key: 'nvidia-q2-fy27',
      company: 'NVIDIA',
      period: 'Q2 FY27',
      periodNote: 'Ending July 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/nvidia-q2-fy27.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 96.2,
        notes: ['+106% Y/Y'],
        items: [
          {
            id: 'data_center',
            label: 'Data Center',
            value: 89.0,
            notes: ['+117% Y/Y'],
            children: [
              { id: 'hyperscale', label: 'Hyperscale', value: 48.7, notes: ['+102% Y/Y'] },
              { id: 'ai_clouds', label: 'AI Clouds, Industrial, & Enterprise', value: 40.3, notes: ['+138% Y/Y'] },
            ],
          },
          { id: 'edge', label: 'Edge Computing', value: 7.2, notes: ['+27% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 24.1 },
        operatingExpenses: {
          total: 8.4,
          items: [
            { id: 'rnd', label: 'Research & Development', value: 7.1, notes: ['7% of revenue', '(2pp) Y/Y'] },
            { id: 'sga', label: 'Sales, General & Admin', value: 1.4, notes: ['1% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 11.8 },
      },
      otherIncome: {
        total: 7.8,
        items: [{ id: 'investments', label: 'Investments', value: 7.8 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 72.1, notes: ['75% margin', '+3pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 63.7, notes: ['66% margin', '+5pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 59.7, notes: ['62% margin', '+6pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2027 财年第二季度',
          periodNote: '截至 2026 年 7 月',
          revenue: {
            notes: ['同比 +106%'],
            items: [
              {
                id: 'data_center', label: '数据中心', notes: ['同比 +117%'],
                children: [
                  { id: 'hyperscale', label: '超大规模', notes: ['同比 +102%'] },
                  { id: 'ai_clouds', label: 'AI 云、工业与企业', notes: ['同比 +138%'] },
                ],
              },
              { id: 'edge', label: '边缘计算', notes: ['同比 +27%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 7%', '同比 (2 个百分点)'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 1%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'investments', label: '投资收益' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 75%', '同比 +3 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 66%', '同比 +5 个百分点'] },
            net: { label: '净利润', notes: ['利润率 62%', '同比 +6 个百分点'] },
          },
        },
      },
    },
    {
      key: 'nvidia-q1-fy27',
      company: 'NVIDIA',
      period: 'Q1 FY27',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/nvidia-q1-fy27.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 81.6,
        notes: ['+85% Y/Y'],
        items: [
          {
            id: 'data_center',
            label: 'Data Center',
            value: 75.2,
            notes: ['+92% Y/Y'],
            children: [
              { id: 'hyperscale', label: 'Hyperscale', value: 37.9, notes: ['+115% Y/Y'] },
              { id: 'ai_clouds', label: 'AI Clouds, Industrial, & Enterprise', value: 37.4, notes: ['+74% Y/Y'] },
            ],
          },
          { id: 'edge', label: 'Edge Computing', value: 6.4, notes: ['+29% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 20.5 },
        operatingExpenses: {
          total: 7.6,
          items: [
            { id: 'rnd', label: 'Research & Development', value: 6.3, notes: ['8% of revenue', '(1pp) Y/Y'] },
            { id: 'sga', label: 'Sales, General & Admin', value: 1.3, notes: ['2% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 11.6 },
      },
      otherIncome: {
        total: 16.4,
        items: [{ id: 'investments', label: 'Investments', value: 16.4 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 61.2, notes: ['75% margin', '+14pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 53.5, notes: ['66% margin', '+16pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 58.3, notes: ['71% margin', '+28pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2027 财年第一季度',
          periodNote: '截至 2026 年 4 月',
          revenue: {
            notes: ['同比 +85%'],
            items: [
              {
                id: 'data_center', label: '数据中心', notes: ['同比 +92%'],
                children: [
                  { id: 'hyperscale', label: '超大规模', notes: ['同比 +115%'] },
                  { id: 'ai_clouds', label: 'AI 云、工业与企业', notes: ['同比 +74%'] },
                ],
              },
              { id: 'edge', label: '边缘计算', notes: ['同比 +29%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 8%', '同比 (1 个百分点)'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 2%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'investments', label: '投资收益' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 75%', '同比 +14 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 66%', '同比 +16 个百分点'] },
            net: { label: '净利润', notes: ['利润率 71%', '同比 +28 个百分点'] },
          },
        },
      },
    },
    {
      key: 'nvidia-q1-fy26',
      company: 'NVIDIA',
      period: 'Q1 FY26',
      periodNote: 'Ending Apr. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/nvidia-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 44.1,
        notes: ['+12% Q/Q'],
        items: [
          { id: 'data_center', label: 'Data Center', value: 39.1, notes: ['+10% Q/Q'] },
          { id: 'gaming', label: 'Gaming', value: 3.8, notes: ['+48% Q/Q'] },
          { id: 'professional_visualization', label: 'Professional Visualization', value: 0.5, notes: ['(0%) Q/Q'] },
          { id: 'automotive', label: 'Automotive', value: 0.6, notes: ['(1%) Q/Q'] },
          { id: 'oem_other', label: 'OEM & Other', value: 0.1, notes: ['(12%) Q/Q'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 17.4 },
        operatingExpenses: {
          total: 5.0,
          items: [
            { id: 'rnd', label: 'Research & Development', value: 4.0, notes: ['9% of revenue', '(0pp) Q/Q'] },
            { id: 'sga', label: 'Sales, General & Admin', value: 1.0, notes: ['2% of revenue', '(0pp) Q/Q'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 3.1 },
      },
      otherIncome: {
        total: 0.3,
        items: [{ id: 'other', label: 'Other', value: 0.3 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 26.7, notes: ['61% margin', '(13pp) Q/Q'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 21.6, notes: ['49% margin', '(12pp) Q/Q'] },
        net: { id: 'net_profit', label: 'Net profit', value: 18.9, notes: ['43% margin', '(14pp) Q/Q'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2025 年 4 月',
          revenue: {
            notes: ['环比 +12%'],
            items: [
              { id: 'data_center', label: '数据中心', notes: ['环比 +10%'] },
              { id: 'gaming', label: '游戏', notes: ['环比 +48%'] },
              { id: 'professional_visualization', label: '专业可视化', notes: ['环比 (0%)'] },
              { id: 'automotive', label: '汽车', notes: ['环比 (1%)'] },
              { id: 'oem_other', label: 'OEM 及其他', notes: ['环比 (12%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 9%', '环比 (0 个百分点)'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 2%', '环比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'other', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 61%', '环比 (13 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 49%', '环比 (12 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 43%', '环比 (14 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'nvidia-q3-fy23',
      company: 'NVIDIA',
      period: 'Q3 FY23',
      periodNote: 'Ending Oct. 2022',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/nvidia-q3-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 5.9,
        notes: ['(12%) Q/Q'],
        items: [
          { id: 'data_center', label: 'Data Center', value: 3.8, notes: ['+1% Q/Q'] },
          { id: 'gaming', label: 'Gaming', value: 1.6, notes: ['(23%) Q/Q'] },
          { id: 'professional_visualization', label: 'Professional Visualization', value: 0.2, notes: ['(60%) Q/Q'] },
          { id: 'automotive', label: 'Automotive', value: 0.3, notes: ['+14% Q/Q'] },
          { id: 'oem_other', label: 'OEM & Other', value: 0.1, notes: ['(48%) Q/Q'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 2.8 },
        operatingExpenses: {
          total: 2.6,
          items: [
            { id: 'rnd', label: 'Research & Development', value: 1.9 },
            { id: 'sga', label: 'Sales, General & Admin', value: 0.6 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0 },
      },
      otherIncome: {
        total: 0.079,
        items: [
          { id: 'other', label: 'Other', value: 0.012 },
          { id: 'tax_benefit', label: 'Tax benefit', value: 0.067 },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 3.2, notes: ['54% margin', '+10pp Q/Q'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.6, notes: ['10% margin', '+3pp Q/Q'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.7, notes: ['11% margin', '+2pp Q/Q'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第三季度',
          periodNote: '截至 2022 年 10 月',
          revenue: {
            notes: ['环比 (12%)'],
            items: [
              { id: 'data_center', label: '数据中心', notes: ['环比 +1%'] },
              { id: 'gaming', label: '游戏', notes: ['环比 (23%)'] },
              { id: 'professional_visualization', label: '专业可视化', notes: ['环比 (60%)'] },
              { id: 'automotive', label: '汽车', notes: ['环比 +14%'] },
              { id: 'oem_other', label: 'OEM 及其他', notes: ['环比 (48%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发' },
                { id: 'sga', label: '销售、一般及行政' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'other', label: '其他' },
              { id: 'tax_benefit', label: '税收收益' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 54%', '环比 +10 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 10%', '环比 +3 个百分点'] },
            net: { label: '净利润', notes: ['利润率 11%', '环比 +2 个百分点'] },
          },
        },
      },
    },
    {
      key: 'nvidia-q4-fy23',
      company: 'NVIDIA',
      period: 'Q4 FY23',
      periodNote: 'Ending Jan. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/nvidia-q4-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 6.1,
        notes: ['+2% Q/Q'],
        items: [
          { id: 'data_center', label: 'Data Center', value: 3.6, notes: ['(6%) Q/Q'] },
          { id: 'gaming', label: 'Gaming', value: 1.8, notes: ['+16% Q/Q'] },
          { id: 'professional_visualization', label: 'Professional Visualization', value: 0.2, notes: ['+13% Q/Q'] },
          { id: 'automotive', label: 'Automotive', value: 0.3, notes: ['+17% Q/Q'] },
          { id: 'oem_other', label: 'OEM & Other', value: 0.1, notes: ['+15% Q/Q'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 2.2 },
        operatingExpenses: {
          total: 2.6,
          items: [
            { id: 'rnd', label: 'Research & Development', value: 2.0 },
            { id: 'sga', label: 'Sales, General & Admin', value: 0.6 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0 },
      },
      otherIncome: {
        total: 0.132,
        items: [
          { id: 'other', label: 'Other', value: 0.032 },
          { id: 'tax_benefit', label: 'Tax benefit', value: 0.1 },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 3.8, notes: ['63% margin', '+10pp Q/Q'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.3, notes: ['21% margin', '+11pp Q/Q'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.4, notes: ['23% margin', '+12pp Q/Q'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第四季度',
          periodNote: '截至 2023 年 1 月',
          revenue: {
            notes: ['环比 +2%'],
            items: [
              { id: 'data_center', label: '数据中心', notes: ['环比 (6%)'] },
              { id: 'gaming', label: '游戏', notes: ['环比 +16%'] },
              { id: 'professional_visualization', label: '专业可视化', notes: ['环比 +13%'] },
              { id: 'automotive', label: '汽车', notes: ['环比 +17%'] },
              { id: 'oem_other', label: 'OEM 及其他', notes: ['环比 +15%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发' },
                { id: 'sga', label: '销售、一般及行政' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'other', label: '其他' },
              { id: 'tax_benefit', label: '税收收益' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 63%', '环比 +10 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 21%', '环比 +11 个百分点'] },
            net: { label: '净利润', notes: ['利润率 23%', '环比 +12 个百分点'] },
          },
        },
      },
    },
    {
      key: 'nvidia-q1-fy24',
      company: 'NVIDIA',
      period: 'Q1 FY24',
      periodNote: 'Ending Apr. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/nvidia-q1-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 7.2,
        notes: ['+19% Q/Q'],
        items: [
          { id: 'data_center', label: 'Data Center', value: 4.3, notes: ['+18% Q/Q'] },
          { id: 'gaming', label: 'Gaming', value: 2.2, notes: ['+22% Q/Q'] },
          { id: 'professional_visualization', label: 'Professional Visualization', value: 0.3, notes: ['+31% Q/Q'] },
          { id: 'automotive', label: 'Automotive', value: 0.3, notes: ['+1% Q/Q'] },
          { id: 'oem_other', label: 'OEM & Other', value: 0.1, notes: ['(8%) Q/Q'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 2.5 },
        operatingExpenses: {
          total: 2.5,
          items: [
            { id: 'rnd', label: 'Research & Development', value: 1.9 },
            { id: 'sga', label: 'Sales, General & Admin', value: 0.6 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.2 },
      },
      otherIncome: {
        total: 0.069,
        items: [{ id: 'other', label: 'Other', value: 0.069 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 4.6, notes: ['65% margin', '+1pp Q/Q'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.1, notes: ['30% margin', '+9pp Q/Q'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.0, notes: ['28% margin', '+5pp Q/Q'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第一季度',
          periodNote: '截至 2023 年 4 月',
          revenue: {
            notes: ['环比 +19%'],
            items: [
              { id: 'data_center', label: '数据中心', notes: ['环比 +18%'] },
              { id: 'gaming', label: '游戏', notes: ['环比 +22%'] },
              { id: 'professional_visualization', label: '专业可视化', notes: ['环比 +31%'] },
              { id: 'automotive', label: '汽车', notes: ['环比 +1%'] },
              { id: 'oem_other', label: 'OEM 及其他', notes: ['环比 (8%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发' },
                { id: 'sga', label: '销售、一般及行政' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'other', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 65%', '环比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 30%', '环比 +9 个百分点'] },
            net: { label: '净利润', notes: ['利润率 28%', '环比 +5 个百分点'] },
          },
        },
      },
    },
    {
      key: 'nvidia-q2-fy24',
      company: 'NVIDIA',
      period: 'Q2 FY24',
      periodNote: 'Ending July 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/nvidia-q2-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 13.5,
        notes: ['+88% Q/Q'],
        items: [
          { id: 'data_center', label: 'Data Center', value: 10.3, notes: ['+141% Q/Q'] },
          { id: 'gaming', label: 'Gaming', value: 2.5, notes: ['+11% Q/Q'] },
          { id: 'professional_visualization', label: 'Professional Visualization', value: 0.4, notes: ['+28% Q/Q'] },
          { id: 'automotive', label: 'Automotive', value: 0.3, notes: ['(15%) Q/Q'] },
          { id: 'oem_other', label: 'OEM & Other', value: 0.1, notes: ['(14%) Q/Q'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 4.0 },
        operatingExpenses: {
          total: 2.7,
          items: [
            { id: 'rnd', label: 'Research & Development', value: 2.0 },
            { id: 'sga', label: 'Sales, General & Admin', value: 0.6 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.8 },
      },
      otherIncome: {
        total: 0.2,
        items: [{ id: 'other', label: 'Other', value: 0.2 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 9.5, notes: ['70% margin', '+5pp Q/Q'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 6.8, notes: ['50% margin', '+21pp Q/Q'] },
        net: { id: 'net_profit', label: 'Net profit', value: 6.2, notes: ['46% margin', '+17pp Q/Q'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第二季度',
          periodNote: '截至 2023 年 7 月',
          revenue: {
            notes: ['环比 +88%'],
            items: [
              { id: 'data_center', label: '数据中心', notes: ['环比 +141%'] },
              { id: 'gaming', label: '游戏', notes: ['环比 +11%'] },
              { id: 'professional_visualization', label: '专业可视化', notes: ['环比 +28%'] },
              { id: 'automotive', label: '汽车', notes: ['环比 (15%)'] },
              { id: 'oem_other', label: 'OEM 及其他', notes: ['环比 (14%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发' },
                { id: 'sga', label: '销售、一般及行政' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'other', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 70%', '环比 +5 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 50%', '环比 +21 个百分点'] },
            net: { label: '净利润', notes: ['利润率 46%', '环比 +17 个百分点'] },
          },
        },
      },
    },
    {
      key: 'nvidia-q3-fy24',
      company: 'NVIDIA',
      period: 'Q3 FY24',
      periodNote: 'Ending Oct. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/nvidia-q3-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 18.1,
        notes: ['+34% Q/Q'],
        items: [
          { id: 'data_center', label: 'Data Center', value: 14.5, notes: ['+41% Q/Q'] },
          { id: 'gaming', label: 'Gaming', value: 2.9, notes: ['+15% Q/Q'] },
          { id: 'professional_visualization', label: 'Professional Visualization', value: 0.4, notes: ['+10% Q/Q'] },
          { id: 'automotive', label: 'Automotive', value: 0.3, notes: ['+3% Q/Q'] },
          { id: 'oem_other', label: 'OEM & Other', value: 0.1, notes: ['+11% Q/Q'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 4.7 },
        operatingExpenses: {
          total: 3.0,
          items: [
            { id: 'rnd', label: 'Research & Development', value: 2.3, notes: ['13% of revenue', '(2pp) Y/Y'] },
            { id: 'sga', label: 'Sales, General & Admin', value: 0.7, notes: ['4% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 1.3 },
      },
      otherIncome: {
        total: 0.1,
        items: [{ id: 'other', label: 'Other', value: 0.1 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 13.4, notes: ['74% margin', '+4pp Q/Q'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 10.4, notes: ['57% margin', '+7pp Q/Q'] },
        net: { id: 'net_profit', label: 'Net profit', value: 9.2, notes: ['51% margin', '+5pp Q/Q'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第三季度',
          periodNote: '截至 2023 年 10 月',
          revenue: {
            notes: ['环比 +34%'],
            items: [
              { id: 'data_center', label: '数据中心', notes: ['环比 +41%'] },
              { id: 'gaming', label: '游戏', notes: ['环比 +15%'] },
              { id: 'professional_visualization', label: '专业可视化', notes: ['环比 +10%'] },
              { id: 'automotive', label: '汽车', notes: ['环比 +3%'] },
              { id: 'oem_other', label: 'OEM 及其他', notes: ['环比 +11%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 13%', '同比 (2 个百分点)'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 4%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'other', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 74%', '环比 +4 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 57%', '环比 +7 个百分点'] },
            net: { label: '净利润', notes: ['利润率 51%', '环比 +5 个百分点'] },
          },
        },
      },
    },
    {
      key: 'nvidia-q4-fy24',
      company: 'NVIDIA',
      period: 'Q4 FY24',
      periodNote: 'Ending Jan. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/nvidia-q4-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 22.1,
        notes: ['+22% Q/Q'],
        items: [
          { id: 'data_center', label: 'Data Center', value: 18.4, notes: ['+27% Q/Q'] },
          { id: 'gaming', label: 'Gaming', value: 2.9, notes: ['+0% Q/Q'] },
          { id: 'professional_visualization', label: 'Professional Visualization', value: 0.5, notes: ['+11% Q/Q'] },
          { id: 'automotive', label: 'Automotive', value: 0.3, notes: ['+8% Q/Q'] },
          { id: 'oem_other', label: 'OEM & Other', value: 0.1, notes: ['+23% Q/Q'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 5.3 },
        operatingExpenses: {
          total: 3.2,
          items: [
            { id: 'rnd', label: 'Research & Development', value: 2.5, notes: ['11% of revenue', '(2pp) Y/Y'] },
            { id: 'sga', label: 'Sales, General & Admin', value: 0.7, notes: ['3% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 1.8 },
      },
      otherIncome: {
        total: 0.5,
        items: [{ id: 'other', label: 'Other', value: 0.5 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 16.8, notes: ['76% margin', '+2pp Q/Q'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 13.6, notes: ['62% margin', '+4pp Q/Q'] },
        net: { id: 'net_profit', label: 'Net profit', value: 12.3, notes: ['56% margin', '+5pp Q/Q'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第四季度',
          periodNote: '截至 2024 年 1 月',
          revenue: {
            notes: ['环比 +22%'],
            items: [
              { id: 'data_center', label: '数据中心', notes: ['环比 +27%'] },
              { id: 'gaming', label: '游戏', notes: ['环比 +0%'] },
              { id: 'professional_visualization', label: '专业可视化', notes: ['环比 +11%'] },
              { id: 'automotive', label: '汽车', notes: ['环比 +8%'] },
              { id: 'oem_other', label: 'OEM 及其他', notes: ['环比 +23%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 11%', '同比 (2 个百分点)'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 3%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'other', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 76%', '环比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 62%', '环比 +4 个百分点'] },
            net: { label: '净利润', notes: ['利润率 56%', '环比 +5 个百分点'] },
          },
        },
      },
    },
    {
      key: 'nvidia-q1-fy25',
      company: 'NVIDIA',
      period: 'Q1 FY25',
      periodNote: 'Ending Apr. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/nvidia-q1-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 26.0,
        notes: ['+18% Q/Q'],
        items: [
          { id: 'data_center', label: 'Data Center', value: 22.6, notes: ['+23% Q/Q'] },
          { id: 'gaming', label: 'Gaming', value: 2.6, notes: ['(8%) Q/Q'] },
          { id: 'professional_visualization', label: 'Professional Visualization', value: 0.4, notes: ['(8%) Q/Q'] },
          { id: 'automotive', label: 'Automotive', value: 0.3, notes: ['+17% Q/Q'] },
          { id: 'oem_other', label: 'OEM & Other', value: 0.1, notes: ['(13%) Q/Q'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 5.6 },
        operatingExpenses: {
          total: 3.5,
          items: [
            { id: 'rnd', label: 'Research & Development', value: 2.7, notes: ['10% of revenue', '(1pp) Q/Q'] },
            { id: 'sga', label: 'Sales, General & Admin', value: 0.8, notes: ['3% of revenue', '(0pp) Q/Q'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 2.4 },
      },
      otherIncome: {
        total: 0.4,
        items: [{ id: 'other', label: 'Other', value: 0.4 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 20.4, notes: ['78% margin', '+2pp Q/Q'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 16.9, notes: ['65% margin', '+3pp Q/Q'] },
        net: { id: 'net_profit', label: 'Net profit', value: 14.9, notes: ['57% margin', '+2pp Q/Q'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第一季度',
          periodNote: '截至 2024 年 4 月',
          revenue: {
            notes: ['环比 +18%'],
            items: [
              { id: 'data_center', label: '数据中心', notes: ['环比 +23%'] },
              { id: 'gaming', label: '游戏', notes: ['环比 (8%)'] },
              { id: 'professional_visualization', label: '专业可视化', notes: ['环比 (8%)'] },
              { id: 'automotive', label: '汽车', notes: ['环比 +17%'] },
              { id: 'oem_other', label: 'OEM 及其他', notes: ['环比 (13%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 10%', '环比 (1 个百分点)'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 3%', '环比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'other', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 78%', '环比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 65%', '环比 +3 个百分点'] },
            net: { label: '净利润', notes: ['利润率 57%', '环比 +2 个百分点'] },
          },
        },
      },
    },
    {
      key: 'nvidia-q2-fy25',
      company: 'NVIDIA',
      period: 'Q2 FY25',
      periodNote: 'Ending July 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/nvidia-q2-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 30.0,
        notes: ['+15% Q/Q'],
        items: [
          { id: 'data_center', label: 'Data Center', value: 26.3, notes: ['+16% Q/Q'] },
          { id: 'gaming', label: 'Gaming', value: 2.9, notes: ['+9% Q/Q'] },
          { id: 'professional_visualization', label: 'Professional Visualization', value: 0.5, notes: ['+6% Q/Q'] },
          { id: 'automotive', label: 'Automotive', value: 0.3, notes: ['+5% Q/Q'] },
          { id: 'oem_other', label: 'OEM & Other', value: 0.1, notes: ['+13% Q/Q'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 7.5 },
        operatingExpenses: {
          total: 3.9,
          items: [
            { id: 'rnd', label: 'Research & Development', value: 3.1, notes: ['10% of revenue', '(0pp) Q/Q'] },
            { id: 'sga', label: 'Sales, General & Admin', value: 0.8, notes: ['3% of revenue', '(0pp) Q/Q'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 2.6 },
      },
      otherIncome: {
        total: 0.6,
        items: [{ id: 'other', label: 'Other', value: 0.6 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 22.6, notes: ['75% margin', '(3pp) Q/Q'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 18.6, notes: ['62% margin', '(3pp) Q/Q'] },
        net: { id: 'net_profit', label: 'Net profit', value: 16.6, notes: ['55% margin', '(2pp) Q/Q'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第二季度',
          periodNote: '截至 2024 年 7 月',
          revenue: {
            notes: ['环比 +15%'],
            items: [
              { id: 'data_center', label: '数据中心', notes: ['环比 +16%'] },
              { id: 'gaming', label: '游戏', notes: ['环比 +9%'] },
              { id: 'professional_visualization', label: '专业可视化', notes: ['环比 +6%'] },
              { id: 'automotive', label: '汽车', notes: ['环比 +5%'] },
              { id: 'oem_other', label: 'OEM 及其他', notes: ['环比 +13%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 10%', '环比 (0 个百分点)'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 3%', '环比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'other', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 75%', '环比 (3 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 62%', '环比 (3 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 55%', '环比 (2 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'nvidia-q3-fy25',
      company: 'NVIDIA',
      period: 'Q3 FY25',
      periodNote: 'Ending Oct. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/nvidia-q3-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 35.1,
        notes: ['+17% Q/Q'],
        items: [
          { id: 'data_center', label: 'Data Center', value: 30.8, notes: ['+17% Q/Q'] },
          { id: 'gaming', label: 'Gaming', value: 3.3, notes: ['+14% Q/Q'] },
          { id: 'professional_visualization', label: 'Professional Visualization', value: 0.5, notes: ['+7% Q/Q'] },
          { id: 'automotive', label: 'Automotive', value: 0.4, notes: ['+30% Q/Q'] },
          { id: 'oem_other', label: 'OEM & Other', value: 0.1, notes: ['+10% Q/Q'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 8.9 },
        operatingExpenses: {
          total: 4.3,
          items: [
            { id: 'rnd', label: 'Research & Development', value: 3.4, notes: ['10% of revenue', '(1pp) Q/Q'] },
            { id: 'sga', label: 'Sales, General & Admin', value: 0.9, notes: ['3% of revenue', '(0pp) Q/Q'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 3.0 },
      },
      otherIncome: {
        total: 0.4,
        items: [{ id: 'other', label: 'Other', value: 0.4 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 26.2, notes: ['75% margin', '(1pp) Q/Q'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 21.9, notes: ['62% margin', '+0pp Q/Q'] },
        net: { id: 'net_profit', label: 'Net profit', value: 19.3, notes: ['55% margin', '(0pp) Q/Q'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2024 年 10 月',
          revenue: {
            notes: ['环比 +17%'],
            items: [
              { id: 'data_center', label: '数据中心', notes: ['环比 +17%'] },
              { id: 'gaming', label: '游戏', notes: ['环比 +14%'] },
              { id: 'professional_visualization', label: '专业可视化', notes: ['环比 +7%'] },
              { id: 'automotive', label: '汽车', notes: ['环比 +30%'] },
              { id: 'oem_other', label: 'OEM 及其他', notes: ['环比 +10%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 10%', '环比 (1 个百分点)'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 3%', '环比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'other', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 75%', '环比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 62%', '环比 +0 个百分点'] },
            net: { label: '净利润', notes: ['利润率 55%', '环比 (0 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'nvidia-q4-fy25',
      company: 'NVIDIA',
      period: 'Q4 FY25',
      periodNote: 'Ending Jan. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/nvidia-q4-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 39.3,
        notes: ['+12% Q/Q'],
        items: [
          { id: 'data_center', label: 'Data Center', value: 35.6, notes: ['+16% Q/Q'] },
          { id: 'gaming', label: 'Gaming', value: 2.5, notes: ['(22%) Q/Q'] },
          { id: 'professional_visualization', label: 'Professional Visualization', value: 0.5, notes: ['+5% Q/Q'] },
          { id: 'automotive', label: 'Automotive', value: 0.6, notes: ['+27% Q/Q'] },
          { id: 'oem_other', label: 'OEM & Other', value: 0.1, notes: ['+30% Q/Q'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 10.6 },
        operatingExpenses: {
          total: 4.7,
          items: [
            { id: 'rnd', label: 'Research & Development', value: 3.7, notes: ['9% of revenue', '(0pp) Q/Q'] },
            { id: 'sga', label: 'Sales, General & Admin', value: 1.0, notes: ['2% of revenue', '(0pp) Q/Q'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 3.1 },
      },
      otherIncome: {
        total: 1.1,
        items: [{ id: 'other', label: 'Other', value: 1.1 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 28.7, notes: ['73% margin', '(2pp) Q/Q'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 24.0, notes: ['61% margin', '(1pp) Q/Q'] },
        net: { id: 'net_profit', label: 'Net profit', value: 22.1, notes: ['56% margin', '+1pp Q/Q'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 1 月',
          revenue: {
            notes: ['环比 +12%'],
            items: [
              { id: 'data_center', label: '数据中心', notes: ['环比 +16%'] },
              { id: 'gaming', label: '游戏', notes: ['环比 (22%)'] },
              { id: 'professional_visualization', label: '专业可视化', notes: ['环比 +5%'] },
              { id: 'automotive', label: '汽车', notes: ['环比 +27%'] },
              { id: 'oem_other', label: 'OEM 及其他', notes: ['环比 +30%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 9%', '环比 (0 个百分点)'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 2%', '环比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'other', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 73%', '环比 (2 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 61%', '环比 (1 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 56%', '环比 +1 个百分点'] },
          },
        },
      },
    },
    {
      key: 'nvidia-q2-fy26',
      company: 'NVIDIA',
      period: 'Q2 FY26',
      periodNote: 'Ending July 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/nvidia-q2-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 46.7,
        notes: ['+56% Y/Y'],
        items: [
          { id: 'data_center', label: 'Data Center', value: 41.1, notes: ['+56% Y/Y'] },
          { id: 'gaming', label: 'Gaming', value: 4.3, notes: ['+49% Y/Y'] },
          { id: 'professional_visualization', label: 'Professional Visualization', value: 0.6, notes: ['+32% Y/Y'] },
          { id: 'automotive', label: 'Automotive', value: 0.6, notes: ['+69% Y/Y'] },
          { id: 'oem_other', label: 'OEM & Other', value: 0.2, notes: ['+97% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 12.9 },
        operatingExpenses: {
          total: 5.4,
          items: [
            { id: 'rnd', label: 'Research & Development', value: 4.3, notes: ['9% of revenue', '(1pp) Y/Y'] },
            { id: 'sga', label: 'Sales, General & Admin', value: 1.1, notes: ['2% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 4.8 },
      },
      otherIncome: {
        total: 2.8,
        items: [{ id: 'other', label: 'Other', value: 2.8 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 33.9, notes: ['72% margin', '(3pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 28.4, notes: ['61% margin', '(1pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 26.4, notes: ['57% margin', '+1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2025 年 7 月',
          revenue: {
            notes: ['同比 +56%'],
            items: [
              { id: 'data_center', label: '数据中心', notes: ['同比 +56%'] },
              { id: 'gaming', label: '游戏', notes: ['同比 +49%'] },
              { id: 'professional_visualization', label: '专业可视化', notes: ['同比 +32%'] },
              { id: 'automotive', label: '汽车', notes: ['同比 +69%'] },
              { id: 'oem_other', label: 'OEM 及其他', notes: ['同比 +97%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 9%', '同比 (1 个百分点)'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 2%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'other', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 72%', '同比 (3 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 61%', '同比 (1 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 57%', '同比 +1 个百分点'] },
          },
        },
      },
    },
    {
      key: 'nvidia-q3-fy26',
      company: 'NVIDIA',
      period: 'Q3 FY26',
      periodNote: 'Ending Oct 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/nvidia-q3-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 57.0,
        notes: ['+62% Y/Y'],
        items: [
          { id: 'data_center', label: 'Data Center', value: 51.2, notes: ['+66% Y/Y'] },
          { id: 'gaming', label: 'Gaming', value: 4.3, notes: ['+30% Y/Y'] },
          { id: 'professional_visualization', label: 'Professional Visualization', value: 0.8, notes: ['+56% Y/Y'] },
          { id: 'automotive', label: 'Automotive', value: 0.6, notes: ['+32% Y/Y'] },
          { id: 'oem_other', label: 'OEM & Other', value: 0.2, notes: ['+79% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 15.2 },
        operatingExpenses: {
          total: 5.8,
          items: [
            { id: 'rnd', label: 'Research & Development', value: 4.7, notes: ['8% of revenue', '(1pp) Y/Y'] },
            { id: 'sga', label: 'Sales, General & Admin', value: 1.1, notes: ['2% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 6.0 },
      },
      otherIncome: {
        total: 1.9,
        items: [{ id: 'other', label: 'Other', value: 1.9 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 41.8, notes: ['73% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 36.0, notes: ['63% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 31.9, notes: ['56% margin', '+1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第三季度',
          periodNote: '截至 2025 年 10 月',
          revenue: {
            notes: ['同比 +62%'],
            items: [
              { id: 'data_center', label: '数据中心', notes: ['同比 +66%'] },
              { id: 'gaming', label: '游戏', notes: ['同比 +30%'] },
              { id: 'professional_visualization', label: '专业可视化', notes: ['同比 +56%'] },
              { id: 'automotive', label: '汽车', notes: ['同比 +32%'] },
              { id: 'oem_other', label: 'OEM 及其他', notes: ['同比 +79%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 8%', '同比 (1 个百分点)'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 2%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'other', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 73%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 63%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 56%', '同比 +1 个百分点'] },
          },
        },
      },
    },
    {
      key: 'nvidia-q4-fy26',
      company: 'NVIDIA',
      period: 'Q4 FY26',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/nvidia-q4-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 68.1,
        notes: ['+73% Y/Y'],
        items: [
          { id: 'data_center', label: 'Data Center', value: 62.3, notes: ['+75% Y/Y'] },
          { id: 'gaming', label: 'Gaming', value: 3.7, notes: ['+47% Y/Y'] },
          { id: 'professional_visualization', label: 'Professional Visualization', value: 1.3, notes: ['+159% Y/Y'] },
          { id: 'automotive', label: 'Automotive', value: 0.6, notes: ['+6% Y/Y'] },
          { id: 'oem_other', label: 'OEM & Other', value: 0.2, notes: ['+28% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 17.0 },
        operatingExpenses: {
          total: 6.8,
          items: [
            { id: 'rnd', label: 'Research & Development', value: 5.5, notes: ['8% of revenue', '(1pp) Y/Y'] },
            { id: 'sga', label: 'Sales, General & Admin', value: 1.3, notes: ['2% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 7.4 },
      },
      otherIncome: {
        total: 6.1,
        items: [{ id: 'other', label: 'Other', value: 6.1 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 51.1, notes: ['75% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 44.3, notes: ['65% margin', '+4pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 43.0, notes: ['63% margin', '+7pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第四季度',
          periodNote: '截至 2026 年 1 月',
          revenue: {
            notes: ['同比 +73%'],
            items: [
              { id: 'data_center', label: '数据中心', notes: ['同比 +75%'] },
              { id: 'gaming', label: '游戏', notes: ['同比 +47%'] },
              { id: 'professional_visualization', label: '专业可视化', notes: ['同比 +159%'] },
              { id: 'automotive', label: '汽车', notes: ['同比 +6%'] },
              { id: 'oem_other', label: 'OEM 及其他', notes: ['同比 +28%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 8%', '同比 (1 个百分点)'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 2%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'other', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 75%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 65%', '同比 +4 个百分点'] },
            net: { label: '净利润', notes: ['利润率 63%', '同比 +7 个百分点'] },
          },
        },
      },
    }
  );
})(window);
