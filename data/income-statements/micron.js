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
      key: 'micron-q4-fy24',
      company: 'Micron',
      period: 'Q4 FY24',
      periodNote: 'Ending Aug. 2024',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/micron-q4-fy24.png',
      roundingTolerance: 0.2,
      revenue: {
        total: 7.8,
        notes: ['+93% Y/Y'],
        items: [
          { id: 'compute_networking', label: 'Compute & Networking', value: 3.1, notes: ['+152% Y/Y'] },
          { id: 'mobile', label: 'Mobile', value: 1.9, notes: ['+55% Y/Y'] },
          { id: 'embedded', label: 'Embedded', value: 1.2, notes: ['+36% Y/Y'] },
          { id: 'storage', label: 'Storage', value: 1.7, notes: ['+127% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 5.0 },
        operatingExpenses: {
          total: 1.2,
          items: [
            { id: 'rnd', label: 'R&D', value: 0.9 },
            { id: 'sga', label: 'SG&A', value: 0.3 },
            { id: 'other_opex', label: 'Other', value: 0.016 },
            { id: 'restructuring', label: 'Restructuring', value: 0.001 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.6 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 0.012,
        items: [
          { id: 'other_non_operating', label: 'Other', value: 0.007 },
          { id: 'interest', label: 'Interest', value: 0.005 },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 2.7, notes: ['35% margin', '+46pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.5, notes: ['20% margin', '+56pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.9, notes: ['11% margin', '+47pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第四季度',
          periodNote: '截至 2024 年 8 月',
          revenue: {
            notes: ['同比 +93%'],
            items: [
              { id: 'compute_networking', label: '计算与网络', notes: ['同比 +152%'] },
              { id: 'mobile', label: '移动业务', notes: ['同比 +55%'] },
              { id: 'embedded', label: '嵌入式业务', notes: ['同比 +36%'] },
              { id: 'storage', label: '存储业务', notes: ['同比 +127%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发' },
                { id: 'sga', label: '销售、一般及行政' },
                { id: 'other_opex', label: '其他' },
                { id: 'restructuring', label: '重组费用' },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [
              { id: 'other_non_operating', label: '其他' },
              { id: 'interest', label: '利息' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 35%', '同比 +46 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 20%', '同比 +56 个百分点'] },
            net: { label: '净利润', notes: ['利润率 11%', '同比 +47 个百分点'] },
          },
        },
      },
    },
    {
      key: 'micron-q1-fy25',
      company: 'Micron',
      period: 'Q1 FY25',
      periodNote: 'Ending Nov. 2024',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/micron-q1-fy25.png',
      roundingTolerance: 0.2,
      revenue: {
        total: 8.7,
        notes: ['+12% Q/Q'],
        items: [
          { id: 'compute_networking', label: 'Compute & Networking', value: 4.4, notes: ['+46% Q/Q'] },
          { id: 'storage', label: 'Storage', value: 1.7, notes: ['+3% Q/Q'] },
          { id: 'mobile', label: 'Mobile', value: 1.5, notes: ['+19% Q/Q'] },
          { id: 'embedded', label: 'Embedded', value: 1.1, notes: ['(10%) Q/Q'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 5.4 },
        operatingExpenses: {
          total: 1.2,
          items: [
            { id: 'rnd', label: 'R&D', value: 0.9 },
            { id: 'sga', label: 'SG&A', value: 0.3 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.3 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.022,
        items: [
          { id: 'other_non_operating', label: 'Other', value: 0.022 },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 3.3, notes: ['38% margin', '+3pp Q/Q'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.2, notes: ['25% margin', '+5pp Q/Q'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.9, notes: ['21% margin', '+10pp Q/Q'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第一季度',
          periodNote: '截至 2024 年 11 月',
          revenue: {
            notes: ['环比 +12%'],
            items: [
              { id: 'compute_networking', label: '计算与网络', notes: ['环比 +46%'] },
              { id: 'storage', label: '存储', notes: ['环比 +3%'] },
              { id: 'mobile', label: '移动业务', notes: ['环比 +19%'] },
              { id: 'embedded', label: '嵌入式业务', notes: ['环比下降 10%'] },
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
          otherExpenses: {
            items: [
              { id: 'other_non_operating', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 38%', '环比 +3 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 25%', '环比 +5 个百分点'] },
            net: { label: '净利润', notes: ['利润率 21%', '环比 +10 个百分点'] },
          },
        },
      },
    },
    {
      key: 'micron-q2-fy25',
      company: 'Micron',
      period: 'Q2 FY25',
      periodNote: 'Ending Feb. 2025',
      currency: '$',
      unit: 'B',
      decimals: 4,
      sourceImage: 'input/processed/micron-q2-fy25.png',
      roundingTolerance: 0.2,
      revenue: {
        total: 8.1,
        notes: ['+38% Y/Y'],
        items: [
          { id: 'compute_networking', label: 'Compute & Networking', value: 4.6, notes: ['+109% Y/Y'] },
          { id: 'mobile', label: 'Mobile', value: 1.1, notes: ['(33%) Y/Y'] },
          { id: 'embedded', label: 'Embedded', value: 1.0, notes: ['(8%) Y/Y'] },
          { id: 'storage', label: 'Storage', value: 1.4, notes: ['+54% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 5.1 },
        operatingExpenses: {
          total: 1.2,
          items: [
            { id: 'rnd', label: 'R&D', value: 0.9 },
            { id: 'sga', label: 'SG&A', value: 0.3 },
            { id: 'other_opex', label: 'Other', value: 0.007 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.0002 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 0.011,
        items: [{ id: 'other_non_operating', label: 'Other', value: 0.011 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 3.0, notes: ['37% margin', '+18pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.8, notes: ['22% margin', '+19pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.6, notes: ['20% margin', '+6pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第二季度',
          periodNote: '截至 2025 年 2 月',
          revenue: {
            notes: ['同比 +38%'],
            items: [
              { id: 'compute_networking', label: '计算与网络', notes: ['同比 +109%'] },
              { id: 'mobile', label: '移动业务', notes: ['同比 (33%)'] },
              { id: 'embedded', label: '嵌入式业务', notes: ['同比 (8%)'] },
              { id: 'storage', label: '存储业务', notes: ['同比 +54%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发' },
                { id: 'sga', label: '销售、一般及行政' },
                { id: 'other_opex', label: '其他' },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'other_non_operating', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 37%', '同比 +18 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 22%', '同比 +19 个百分点'] },
            net: { label: '净利润', notes: ['利润率 20%', '同比 +6 个百分点'] },
          },
        },
      },
    },
    {
      key: 'micron-q4-fy25',
      company: 'Micron',
      period: 'Q4 FY25',
      periodNote: 'Ending Aug. 2025',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/micron-q4-fy25.png',
      roundingTolerance: 0.2,
      revenue: {
        total: 11.3,
        notes: ['+46% Y/Y'],
        items: [
          { id: 'cloud_memory', label: 'Cloud Memory', value: 4.5, notes: ['+214% Y/Y', '48% operating margin'] },
          { id: 'core_data_center', label: 'Core Data Center', value: 1.6, notes: ['(23%) Y/Y', '25% operating margin'] },
          { id: 'mobile_client', label: 'Mobile & Client', value: 3.8, notes: ['+25% Y/Y', '29% operating margin'] },
          { id: 'automotive_embedded', label: 'Automotive & Embedded', value: 1.4, notes: ['+17% Y/Y', '20% operating margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 6.3 },
        operatingExpenses: {
          total: 1.4,
          items: [
            { id: 'rnd', label: 'R&D', value: 1.0 },
            { id: 'sga', label: 'SG&A', value: 0.3 },
            { id: 'other_opex', label: 'Other', value: 0.039 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.4 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.022,
        items: [
          { id: 'other_non_operating', label: 'Other', value: 0.022 },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 5.1, notes: ['45% margin', '+9pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 3.7, notes: ['32% margin', '+13pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 3.2, notes: ['28% margin', '+17pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 8 月',
          revenue: {
            notes: ['同比 +46%'],
            items: [
              { id: 'cloud_memory', label: '云内存', notes: ['同比 +214%', '营业利润率 48%'] },
              { id: 'core_data_center', label: '核心数据中心', notes: ['同比下降 23%', '营业利润率 25%'] },
              { id: 'mobile_client', label: '移动与客户端', notes: ['同比 +25%', '营业利润率 29%'] },
              { id: 'automotive_embedded', label: '汽车与嵌入式', notes: ['同比 +17%', '营业利润率 20%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发' },
                { id: 'sga', label: '销售、一般及行政' },
                { id: 'other_opex', label: '其他' },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [
              { id: 'other_non_operating', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 45%', '同比 +9 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 32%', '同比 +13 个百分点'] },
            net: { label: '净利润', notes: ['利润率 28%', '同比 +17 个百分点'] },
          },
        },
      },
    },
    {
      key: 'micron-q3-fy25',
      company: 'Micron',
      period: 'Q3 FY25',
      periodNote: 'Ending May 2025',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/micron-q3-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 9.3,
        notes: ['+15% Q/Q'],
        items: [
          { id: 'compute_networking', label: 'Compute & Networking', value: 5.1, notes: ['+11% Q/Q'] },
          { id: 'storage', label: 'Storage', value: 1.5, notes: ['+4% Q/Q'] },
          { id: 'mobile', label: 'Mobile', value: 1.6, notes: ['+45% Q/Q'] },
          { id: 'embedded', label: 'Embedded', value: 1.2, notes: ['+20% Q/Q'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 5.8 },
        operatingExpenses: {
          total: 1.3,
          items: [
            { id: 'rnd', label: 'R&D', value: 1.0 },
            { id: 'sga', label: 'SG&A', value: 0.3 },
            { id: 'other_opex', label: 'Other', value: 0.1 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.2 },
      },
      otherIncome: {
        total: 0.012,
        items: [{ id: 'interest', label: 'Interest', value: 0.012 }],
      },
      otherExpenses: {
        total: 0.1,
        items: [{ id: 'other_non_operating', label: 'Other', value: 0.1 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 3.5, notes: ['38% margin', '+1pp Q/Q'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.2, notes: ['23% margin', '+1pp Q/Q'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.9, notes: ['20% margin', '+1pp Q/Q'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 5 月',
          revenue: {
            notes: ['环比 +15%'],
            items: [
              { id: 'compute_networking', label: '计算与网络', notes: ['环比 +11%'] },
              { id: 'storage', label: '存储', notes: ['环比 +4%'] },
              { id: 'mobile', label: '移动', notes: ['环比 +45%'] },
              { id: 'embedded', label: '嵌入式', notes: ['环比 +20%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发' },
                { id: 'sga', label: '销售、一般及行政' },
                { id: 'other_opex', label: '其他' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'interest', label: '利息收入' }] },
          otherExpenses: { items: [{ id: 'other_non_operating', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 38%', '环比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 23%', '环比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 20%', '环比 +1 个百分点'] },
          },
        },
      },
    },
    {
      key: 'micron-q1-fy26',
      company: 'Micron',
      period: 'Q1 FY26',
      periodNote: 'Ending Nov. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/micron-q1-fy26.png',
      roundingTolerance: 0.2,
      revenue: {
        total: 13.6,
        notes: ['+57% Y/Y'],
        items: [
          { id: 'cloud_memory', label: 'Cloud Memory', value: 5.3, notes: ['+100% Y/Y', '55% operating margin'] },
          { id: 'core_data_center', label: 'Core Data Center', value: 2.4, notes: ['+4% Y/Y', '37% operating margin'] },
          { id: 'mobile_client', label: 'Mobile & Client', value: 4.3, notes: ['+63% Y/Y', '47% operating margin'] },
          { id: 'automotive_embedded', label: 'Automotive & Embedded', value: 1.7, notes: ['+49% Y/Y', '36% operating margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 6.0 },
        operatingExpenses: {
          total: 1.5,
          items: [
            { id: 'rnd', label: 'R&D', value: 1.2 },
            { id: 'sga', label: 'SG&A', value: 0.3 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.8 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 0.1,
        items: [
          { id: 'other_non_operating', label: 'Other', value: 0.1 },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 7.6, notes: ['56% margin', '+18pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 6.1, notes: ['45% margin', '+20pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 5.2, notes: ['38% margin', '+17pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2025 年 11 月',
          revenue: {
            notes: ['同比 +57%'],
            items: [
              { id: 'cloud_memory', label: '云内存', notes: ['同比 +100%', '营业利润率 55%'] },
              { id: 'core_data_center', label: '核心数据中心', notes: ['同比 +4%', '营业利润率 37%'] },
              { id: 'mobile_client', label: '移动与客户端', notes: ['同比 +63%', '营业利润率 47%'] },
              { id: 'automotive_embedded', label: '汽车与嵌入式', notes: ['同比 +49%', '营业利润率 36%'] },
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
          otherExpenses: {
            items: [
              { id: 'other_non_operating', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 56%', '同比 +18 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 45%', '同比 +20 个百分点'] },
            net: { label: '净利润', notes: ['利润率 38%', '同比 +17 个百分点'] },
          },
        },
      },
    },
    {
      key: 'micron-q2-fy26',
      company: 'Micron',
      period: 'Q2 FY26',
      periodNote: 'Ending Feb. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/micron-q2-fy26.png',
      roundingTolerance: 0.2,
      revenue: {
        total: 23.9,
        notes: ['+196% Y/Y'],
        items: [
          { id: 'cloud_memory', label: 'Cloud Memory', value: 7.7, notes: ['+163% Y/Y', '66% operating margin'] },
          { id: 'core_data_center', label: 'Core Data Center', value: 5.7, notes: ['+211% Y/Y', '67% operating margin'] },
          { id: 'mobile_client', label: 'Mobile & Client', value: 7.7, notes: ['+245% Y/Y', '76% operating margin'] },
          { id: 'automotive_embedded', label: 'Automotive & Embedded', value: 2.7, notes: ['+162% Y/Y', '62% operating margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 6.1 },
        operatingExpenses: {
          total: 1.6,
          items: [
            { id: 'rnd', label: 'R&D', value: 1.3 },
            { id: 'sga', label: 'SG&A', value: 0.3 },
            { id: 'other_opex', label: 'Other', value: 0.026 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 2.4 },
      },
      otherIncome: {
        total: 0.021,
        items: [
          { id: 'other_income', label: 'Other', value: 0.021 },
        ],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 17.8, notes: ['74% margin', '+38pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 16.1, notes: ['68% margin', '+46pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 13.8, notes: ['58% margin', '+38pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 2 月',
          revenue: {
            notes: ['同比 +196%'],
            items: [
              { id: 'cloud_memory', label: '云内存', notes: ['同比 +163%', '营业利润率 66%'] },
              { id: 'core_data_center', label: '核心数据中心', notes: ['同比 +211%', '营业利润率 67%'] },
              { id: 'mobile_client', label: '移动与客户端', notes: ['同比 +245%', '营业利润率 76%'] },
              { id: 'automotive_embedded', label: '汽车与嵌入式', notes: ['同比 +162%', '营业利润率 62%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发' },
                { id: 'sga', label: '销售、一般及行政' },
                { id: 'other_opex', label: '其他' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'other_income', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 74%', '同比 +38 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 68%', '同比 +46 个百分点'] },
            net: { label: '净利润', notes: ['利润率 58%', '同比 +38 个百分点'] },
          },
        },
      },
    },
    {
      key: 'micron-q3-fy26',
      company: 'Micron',
      period: 'Q3 FY26',
      periodNote: 'Ending May 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/micron-q3-fy26.png',
      roundingTolerance: 0.2,
      revenue: {
        total: 41.5,
        notes: ['+346% Y/Y'],
        items: [
          { id: 'cloud_memory', label: 'Cloud Memory', value: 13.8, notes: ['+307% Y/Y', '78% operating margin'] },
          { id: 'core_data_center', label: 'Core Data Center', value: 11.5, notes: ['+653% Y/Y', '83% operating margin'] },
          { id: 'mobile_client', label: 'Mobile & Client', value: 11.5, notes: ['+254% Y/Y', '86% operating margin'] },
          { id: 'automotive_embedded', label: 'Automotive & Embedded', value: 4.6, notes: ['+311% Y/Y', '75% operating margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 6.4 },
        operatingExpenses: {
          total: 1.7,
          items: [
            { id: 'rnd', label: 'R&D', value: 1.3 },
            { id: 'sga', label: 'SG&A', value: 0.4 },
            { id: 'other_opex', label: 'Other', value: 0.1 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 5.0 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.1,
        items: [
          { id: 'other_non_operating', label: 'Other', value: 0.1 },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 35.1, notes: ['85% margin', '+47pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 33.3, notes: ['80% margin', '+57pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 28.2, notes: ['68% margin', '+48pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第三季度',
          periodNote: '截至 2026 年 5 月',
          revenue: {
            notes: ['同比 +346%'],
            items: [
              { id: 'cloud_memory', label: '云内存', notes: ['同比 +307%', '营业利润率 78%'] },
              { id: 'core_data_center', label: '核心数据中心', notes: ['同比 +653%', '营业利润率 83%'] },
              { id: 'mobile_client', label: '移动与客户端', notes: ['同比 +254%', '营业利润率 86%'] },
              { id: 'automotive_embedded', label: '汽车与嵌入式', notes: ['同比 +311%', '营业利润率 75%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发' },
                { id: 'sga', label: '销售、一般及行政' },
                { id: 'other_opex', label: '其他' },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [
              { id: 'other_non_operating', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 85%', '同比 +47 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 80%', '同比 +57 个百分点'] },
            net: { label: '净利润', notes: ['利润率 68%', '同比 +48 个百分点'] },
          },
        },
      },
    }
  );
})(window);
