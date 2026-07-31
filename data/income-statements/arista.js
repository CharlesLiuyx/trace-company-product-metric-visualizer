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
      key: 'arista-q1-fy25', company: 'Arista', period: 'Q1 FY25', periodNote: 'Ending Mar. 2025',
      currency: '$', unit: 'B', decimals: 4,
      sourceImage: 'input/processed/arista-q1-fy25.png', roundingTolerance: 0.12,
      source: {
        title: 'Arista Networks, Inc. Reports First Quarter 2025 Financial Results',
        url: 'https://investors.arista.com/Communications/Press-Releases-and-Events/Press-Release-Detail/2025/Arista-Networks-Inc--Reports-First-Quarter-2025-Financial-Results/default.aspx',
        note: 'GAAP values are from the official unaudited income statement where the reference uses rounded billions; the reference-explicit $34M G&A amount is preserved at its displayed million-unit precision.',
      },
      revenue: {
        total: 2.0048, notes: ['+28% Y/Y'],
        items: [
          { id: 'product', label: 'Product', value: 1.6925, notes: ['+27% Y/Y', '60% gross margin', '(0pp) Y/Y'] },
          { id: 'service', label: 'Service', value: 0.3123, notes: ['+29% Y/Y', '82% gross margin', '+2pp Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue', label: 'Cost of revenue', value: 0.7287,
          items: [
            { id: 'product_cor', label: 'Product', value: 0.6727 },
            { id: 'service_cor', label: 'Service', value: 0.056 },
          ],
          notes: ['Source chart splits cost of revenue into Product ($0.7B) and Service ($0.1B).'],
        },
        operatingExpenses: { total: 0.4173, items: [
          { id: 'rnd', label: 'R&D', value: 0.2664, notes: ['13% of revenue', '+0pp Y/Y'] },
          { id: 'sm', label: 'S&M', value: 0.1166, notes: ['6% of revenue', '(1pp) Y/Y'] },
          { id: 'ga', label: 'G&A', value: 0.034, notes: ['2% of revenue', '(0pp) Y/Y'] },
        ] },
        tax: { id: 'tax', label: 'Tax', value: 0.1412 },
      },
      otherIncome: { total: 0.0962, items: [{ id: 'other_income', label: 'Other', value: 0.0962 }] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1.2761, notes: ['64% margin', '(0pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.8588, notes: ['43% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.8138, notes: ['41% margin', '+0pp Y/Y'] },
      },
      i18n: { zh: {
        period: '2025 财年第一季度', periodNote: '截至 2025 年 3 月',
        revenue: { notes: ['同比 +28%'], items: [
          { id: 'product', label: '产品', notes: ['同比 +27%', '毛利率 60%', '同比 (0 个百分点)'] },
          { id: 'service', label: '服务', notes: ['同比 +29%', '毛利率 82%', '同比 +2 个百分点'] },
        ] },
        costs: {
          costOfRevenue: { label: '收入成本', items: [
            { id: 'product_cor', label: '产品' }, { id: 'service_cor', label: '服务' },
          ], notes: ['来源图将收入成本拆分为产品 ($0.7B) 和服务 ($0.1B)。'] },
          operatingExpenses: { items: [
            { id: 'rnd', label: '研发', notes: ['占收入 13%', '同比 +0 个百分点'] },
            { id: 'sm', label: '销售与市场', notes: ['占收入 6%', '同比 (1 个百分点)'] },
            { id: 'ga', label: '一般及行政', notes: ['占收入 2%', '同比 (0 个百分点)'] },
          ] },
          tax: { label: '所得税费用' },
        },
        otherIncome: { items: [{ id: 'other_income', label: '其他收入' }] },
        profit: {
          gross: { label: '毛利润', notes: ['毛利率 64%', '同比 (0 个百分点)'] },
          operating: { label: '营业利润', notes: ['利润率 43%', '同比 +1 个百分点'] },
          net: { label: '净利润', notes: ['利润率 41%', '同比 +0 个百分点'] },
        },
      } },
    },
    {
      key: 'arista-q2-fy25',
      company: 'Arista',
      period: 'Q2 FY25',
      periodNote: 'Ending Jun. 2025',
      currency: '$',
      unit: 'B',
      decimals: 4,
      sourceImage: 'input/processed/arista-q2-fy25.png',
      roundingTolerance: 0.12,
      source: {
        title: 'Arista Networks, Inc. Quarterly Report for the period ended June 30, 2025',
        url: 'https://www.sec.gov/Archives/edgar/data/1596532/000159653225000216/anet-20250630.htm',
        note: 'Exact GAAP values are from the official unaudited income statement; the reference image displays rounded B/M labels.',
      },
      revenue: {
        total: 2.2048,
        notes: ['+30% Y/Y'],
        items: [
          { id: 'product', label: 'Product', value: 1.877, notes: ['+32% Y/Y', '62% gross margin', '+0pp Y/Y'] },
          { id: 'service', label: 'Service', value: 0.3278, notes: ['+23% Y/Y', '82% gross margin', '+2pp Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 0.7662,
          items: [
            { id: 'product_cor', label: 'Product', value: 0.7073 },
            { id: 'service_cor', label: 'Service', value: 0.0589 },
          ],
          notes: ['Source chart splits cost of revenue into Product ($0.7B) and Service ($0.1B).'],
        },
        operatingExpenses: {
          total: 0.4524,
          items: [
            { id: 'rnd', label: 'R&D', value: 0.2965, notes: ['13% of revenue', '(2pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 0.1265, notes: ['6% of revenue', '(0pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.0294, notes: ['1% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.1914 },
      },
      otherIncome: { total: 0.094, items: [{ id: 'other_income', label: 'Other', value: 0.094 }] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1.4386, notes: ['65% margin', '+0pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.9862, notes: ['45% margin', '+3pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.8888, notes: ['40% margin', '+1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第二季度',
          periodNote: '截至 2025 年 6 月',
          revenue: {
            notes: ['同比 +30%'],
            items: [
              { id: 'product', label: '产品', notes: ['同比 +32%', '毛利率 62%', '同比 +0 个百分点'] },
              { id: 'service', label: '服务', notes: ['同比 +23%', '毛利率 82%', '同比 +2 个百分点'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [{ id: 'product_cor', label: '产品' }, { id: 'service_cor', label: '服务' }],
              notes: ['来源图将收入成本拆分为产品 ($0.7B) 和服务 ($0.1B)。'],
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 13%', '同比 (2 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 6%', '同比 (0 个百分点)'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 1%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '所得税费用' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他收入' }] },
          profit: {
            gross: { label: '毛利润', notes: ['毛利率 65%', '同比 +0 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 45%', '同比 +3 个百分点'] },
            net: { label: '净利润', notes: ['利润率 40%', '同比 +1 个百分点'] },
          },
        },
      },
    },
    {
      key: 'arista-q2-fy24',
      company: 'Arista',
      period: 'Q2 FY24',
      periodNote: 'Ending Jun. 2024',
      currency: '$',
      unit: 'B',
      decimals: 6,
      sourceImage: 'input/processed/arista-q2-fy24.png',
      roundingTolerance: 0.12,
      revenue: {
        total: 1.6904,
        notes: ['+16% Y/Y'],
        items: [
          { id: 'product', label: 'Product', value: 1.423271, notes: ['+13% Y/Y', '62% gross margin', '+4pp Y/Y'] },
          { id: 'service', label: 'Service', value: 0.267129, notes: ['+35% Y/Y', '80% gross margin', '+1pp Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue', label: 'Cost of revenue', value: 0.593187,
          items: [
            { id: 'product_cor', label: 'Product', value: 0.540393 },
            { id: 'service_cor', label: 'Service', value: 0.052794 },
          ],
          notes: ['Source chart splits cost of revenue into Product ($0.5B) and Service ($0.1B).'],
        },
        operatingExpenses: {
          total: 0.39764,
          items: [
            { id: 'rnd', label: 'R&D', value: 0.267482, notes: ['16% of revenue', '+0pp Y/Y'] },
            { id: 'sm', label: 'S&M', value: 0.104403, notes: ['6% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.026, notes: ['2% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.105008 },
      },
      otherIncome: { total: 0.070863, items: [{ id: 'other_income', label: 'Other', value: 0.070863 }] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1.097213, notes: ['65% margin', '+4pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.699573, notes: ['41% margin', '+5pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.665428, notes: ['39% margin', '+6pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第二季度', periodNote: '截至 2024 年 6 月',
          revenue: {
            notes: ['同比 +16%'],
            items: [
              { id: 'product', label: '产品', notes: ['同比 +13%', '毛利率 62%', '同比 +4 个百分点'] },
              { id: 'service', label: '服务', notes: ['同比 +35%', '毛利率 80%', '同比 +1 个百分点'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [{ id: 'product_cor', label: '产品' }, { id: 'service_cor', label: '服务' }],
              notes: ['来源图将收入成本拆分为产品 ($0.5B) 和服务 ($0.1B)。'],
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 16%', '同比 +0 个百分点'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 6%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 2%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '所得税费用' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他收入' }] },
          profit: {
            gross: { label: '毛利润', notes: ['毛利率 65%', '同比 +4 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 41%', '同比 +5 个百分点'] },
            net: { label: '净利润', notes: ['利润率 39%', '同比 +6 个百分点'] },
          },
        },
      },
    },
    {
      key: 'arista-q2-fy23',
      company: 'Arista',
      period: 'Q2 FY23',
      periodNote: 'Ending Jun. 2023',
      currency: '$',
      unit: 'B',
      decimals: 6,
      sourceImage: 'input/processed/arista-q2-fy23.png',
      roundingTolerance: 0.12,
      revenue: {
        total: 1.458924,
        notes: ['+39% Y/Y'],
        items: [
          { id: 'product', label: 'Product', value: 1.261537, notes: ['+42% Y/Y', '57% gross margin', '(3pp) Y/Y'] },
          { id: 'service', label: 'Service', value: 0.197387, notes: ['+19% Y/Y', '79% gross margin', '(2pp) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue', label: 'Cost of revenue', value: 0.574795,
          items: [
            { id: 'product_cor', label: 'Product', value: 0.533613 },
            { id: 'service_cor', label: 'Service', value: 0.041 },
          ],
          notes: ['Source chart splits cost of revenue into Product ($0.5B) and Service ($41M).'],
        },
        operatingExpenses: {
          total: 0.354067,
          items: [
            { id: 'rnd', label: 'R&D', value: 0.23, notes: ['16% of revenue', '(1pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 0.098, notes: ['7% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.026, notes: ['2% of revenue', '+0pp Y/Y'] },
          ],
        },
        tax: {
          id: 'tax', label: 'Tax', value: 0.059,
          notes: ['Source-faithful $59M retained at the operator’s direction; Arista’s SEC-filed Q2 FY23 provision for income taxes is $94.516M.'],
        },
      },
      otherIncome: { total: 0.056, items: [{ id: 'other_income', label: 'Other', value: 0.056 }] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 0.884129, notes: ['61% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.530062, notes: ['36% margin', '+2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.491885, notes: ['34% margin', '+5pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第二季度', periodNote: '截至 2023 年 6 月',
          revenue: {
            notes: ['同比 +39%'],
            items: [
              { id: 'product', label: '产品', notes: ['同比 +42%', '毛利率 57%', '同比 (3 个百分点)'] },
              { id: 'service', label: '服务', notes: ['同比 +19%', '毛利率 79%', '同比 (2 个百分点)'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [{ id: 'product_cor', label: '产品' }, { id: 'service_cor', label: '服务' }],
              notes: ['来源图将收入成本拆分为产品 ($0.5B) 和服务 ($41M)。'],
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 16%', '同比 (1 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 7%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 2%', '同比 +0 个百分点'] },
              ],
            },
            tax: { label: '税费', notes: ['按操作者要求保留来源图的 $59M；Arista 向 SEC 提交的 Q2 FY23 所得税费用为 $94.516M。'] },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他收入' }] },
          profit: {
            gross: { label: '毛利润', notes: ['毛利率 61%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 36%', '同比 +2 个百分点'] },
            net: { label: '净利润', notes: ['利润率 34%', '同比 +5 个百分点'] },
          },
        },
      },
    },
    {
      key: 'arista-q3-fy22', company: 'Arista', period: 'Q3 FY22', periodNote: 'Ending Sep. 2022',
      currency: '$', unit: 'B', decimals: 3,
      sourceImage: 'input/processed/arista-q3-fy22.png', roundingTolerance: 0.12,
      source: {
        title: 'Arista Networks, Inc. Quarterly Report for the period ended September 30, 2022',
        url: 'https://www.sec.gov/Archives/edgar/data/1596532/000159653222000294/anet-20220930.htm',
        note: 'Exact GAAP values are from the official unaudited income statement; the reference image displays rounded B/M labels.',
      },
      revenue: {
        total: 1.176801, notes: ['+57% Y/Y'],
        items: [
          { id: 'product', label: 'Product', value: 1.008689, notes: ['+67% Y/Y', '57% gross margin', '(3pp) Y/Y'] },
          { id: 'service', label: 'Service', value: 0.168112, notes: ['+16% Y/Y', '80% gross margin', '(2pp) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue', label: 'Cost of revenue', value: 0.466821,
          items: [
            { id: 'product_cor', label: 'Product', value: 0.432569 },
            { id: 'service_cor', label: 'Service', value: 0.034252 },
          ],
          notes: ['Source chart splits cost of revenue into Product ($0.4B) and Service ($34M).'],
        },
        operatingExpenses: {
          total: 0.292633,
          items: [
            { id: 'rnd', label: 'R&D', value: 0.187807, notes: ['16% of revenue', '(4pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 0.081401, notes: ['7% of revenue', '(2pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.023425, notes: ['2% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.070165 },
      },
      otherIncome: { total: 0.006817, items: [{ id: 'other_income', label: 'Other', value: 0.006817 }] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 0.70998, notes: ['60% margin', '(4pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.417347, notes: ['35% margin', '+4pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.353999, notes: ['30% margin', 'Unchanged'] },
      },
      i18n: { zh: {
        period: '2022 财年第三季度', periodNote: '截至 2022 年 9 月',
        revenue: { notes: ['同比 +57%'], items: [
          { id: 'product', label: '产品', notes: ['同比 +67%', '毛利率 57%', '同比 (3 个百分点)'] },
          { id: 'service', label: '服务', notes: ['同比 +16%', '毛利率 80%', '同比 (2 个百分点)'] },
        ] },
        costs: {
          costOfRevenue: { label: '收入成本', items: [
            { id: 'product_cor', label: '产品' }, { id: 'service_cor', label: '服务' },
          ], notes: ['来源图将收入成本拆分为产品 ($0.4B) 和服务 ($34M)。'] },
          operatingExpenses: { items: [
            { id: 'rnd', label: '研发', notes: ['占收入 16%', '同比 (4 个百分点)'] },
            { id: 'sm', label: '销售与市场', notes: ['占收入 7%', '同比 (2 个百分点)'] },
            { id: 'ga', label: '一般及行政', notes: ['占收入 2%', '同比 (1 个百分点)'] },
          ] },
          tax: { label: '所得税费用' },
        },
        otherIncome: { items: [{ id: 'other_income', label: '其他收入' }] },
        profit: {
          gross: { label: '毛利润', notes: ['毛利率 60%', '同比 (4 个百分点)'] },
          operating: { label: '营业利润', notes: ['利润率 35%', '同比 +4 个百分点'] },
          net: { label: '净利润', notes: ['利润率 30%', '同比持平'] },
        },
      } },
    },
    {
      key: 'arista-q1-fy24',
      company: 'Arista',
      period: 'Q1 FY24',
      periodNote: 'Ending Mar. 2024',
      currency: '$',
      unit: 'B',
      decimals: 6,
      sourceImage: 'input/processed/arista-q1-fy24.png',
      roundingTolerance: 0.12,
      revenue: {
        total: 1.571374,
        notes: ['+16% Y/Y'],
        items: [
          { id: 'product', label: 'Product', value: 1.328845, notes: ['+13% Y/Y', '62% gross margin', '+4pp Y/Y'] },
          { id: 'service', label: 'Service', value: 0.242529, notes: ['+35% Y/Y', '80% gross margin', '+1pp Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 0.569995,
          items: [
            { id: 'product_cor', label: 'Product', value: 0.521679 },
            { id: 'service_cor', label: 'Service', value: 0.048316 },
          ],
          notes: ['Source chart splits cost of revenue into Product ($0.5B) and Service ($48M).'],
        },
        operatingExpenses: {
          total: 0.341238,
          items: [
            { id: 'rnd', label: 'R&D', value: 0.208395, notes: ['13% of revenue', '(2pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 0.10508, notes: ['7% of revenue', '(0pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.027763, notes: ['2% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.085069 },
      },
      otherIncome: {
        total: 0.06262,
        items: [{ id: 'other_income', label: 'Other', value: 0.06262 }],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1.001379, notes: ['64% margin', '+4pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.660141, notes: ['42% margin', '+6pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.637692, notes: ['41% margin', '+8pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第一季度',
          periodNote: '截至 2024 年 3 月',
          revenue: {
            notes: ['同比 +16%'],
            items: [
              { id: 'product', label: '产品', notes: ['同比 +13%', '毛利率 62%', '同比 +4 个百分点'] },
              { id: 'service', label: '服务', notes: ['同比 +35%', '毛利率 80%', '同比 +1 个百分点'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [{ id: 'product_cor', label: '产品' }, { id: 'service_cor', label: '服务' }],
              notes: ['来源图将收入成本拆分为产品 ($0.5B) 和服务 ($48M)。'],
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 13%', '同比 (2 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 7%', '同比 (0 个百分点)'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 2%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '所得税费用' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他收入' }] },
          profit: {
            gross: { label: '毛利润', notes: ['毛利率 64%', '同比 +4 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 42%', '同比 +6 个百分点'] },
            net: { label: '净利润', notes: ['利润率 41%', '同比 +8 个百分点'] },
          },
        },
      },
    },
    {
      key: 'arista-q1-fy23',
      company: 'Arista',
      period: 'Q1 FY23',
      periodNote: 'Ending Mar. 2023',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/arista-q1-fy23.png',
      roundingTolerance: 0.12,
      revenue: {
        total: 1.4,
        notes: ['+54% Y/Y'],
        items: [
          { id: 'product', label: 'Product', value: 1.2, notes: ['+62% Y/Y', '57% gross margin', '(3pp) Y/Y'] },
          { id: 'service', label: 'Service', value: 0.2, notes: ['+18% Y/Y', '79% gross margin', '(2pp) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue', label: 'Cost of revenue', value: 0.5,
          items: [
            { id: 'product_cor', label: 'Product', value: 0.5 },
            { id: 'service_cor', label: 'Service', value: 0.038 },
          ],
          notes: ['Source chart splits cost of revenue into Product ($0.5B) and Service ($38M).'],
        },
        operatingExpenses: {
          total: 0.3,
          items: [
            { id: 'rnd', label: 'R&D', value: 0.201, notes: ['15% of revenue', '(5pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 0.093, notes: ['7% of revenue', '(2pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.025, notes: ['2% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.059 },
      },
      otherIncome: { total: 0.012, items: [{ id: 'other_income', label: 'Other', value: 0.012 }] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 0.8, notes: ['57% margin', '(3pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.5, notes: ['36% margin', '+4pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.4, notes: ['32% margin', '+1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第一季度', periodNote: '截至 2023 年 3 月',
          revenue: {
            notes: ['同比 +54%'],
            items: [
              { id: 'product', label: '产品', notes: ['同比 +62%', '毛利率 57%', '同比 (3 个百分点)'] },
              { id: 'service', label: '服务', notes: ['同比 +18%', '毛利率 79%', '同比 (2 个百分点)'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本', items: [{ id: 'product_cor', label: '产品' }, { id: 'service_cor', label: '服务' }],
              notes: ['来源图将收入成本拆分为产品 ($0.5B) 和服务 ($38M)。'],
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 15%', '同比 (5 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 7%', '同比 (2 个百分点)'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 2%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '所得税费用' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他收入' }] },
          profit: {
            gross: { label: '毛利润', notes: ['毛利率 57%', '同比 (3 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 36%', '同比 +4 个百分点'] },
            net: { label: '净利润', notes: ['利润率 32%', '同比 +1 个百分点'] },
          },
        },
      },
    },
    {
      key: 'arista-q4-fy22',
      company: 'Arista',
      period: 'Q4 FY22',
      periodNote: 'Ending Dec. 2022',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/arista-q4-fy22.png',
      roundingTolerance: 0.12,
      source: {
        title: 'Arista Networks, Inc. Reports Fourth Quarter and Year End 2022 Financial Results',
        url: 'https://investors.arista.com/Communications/Press-Releases-and-Events/Press-Release-Detail/2023/Arista-Networks-Inc.-Reports-Fourth-Quarter-and-Year-End-2022-Financial-Results/',
        note: 'Exact GAAP values are from the official unaudited statement of operations; the reference image displays rounded B/M labels.',
      },
      revenue: {
        total: 1.275552,
        notes: ['+55% Y/Y'],
        items: [
          { id: 'product', label: 'Product', value: 1.096866, notes: ['+64% Y/Y', '57% gross margin', '(2pp) Y/Y'] },
          { id: 'service', label: 'Service', value: 0.178686, notes: ['+14% Y/Y', '80% gross margin', '+0pp Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 0.506946,
          items: [
            { id: 'product_cor', label: 'Product', value: 0.471617 },
            { id: 'service_cor', label: 'Service', value: 0.035329 },
          ],
          notes: ['Source chart splits cost of revenue into Product ($0.5B) and Service ($35M).'],
        },
        operatingExpenses: {
          total: 0.299687,
          items: [
            { id: 'rnd', label: 'R&D', value: 0.190423, notes: ['15% of revenue', '(4pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 0.085443, notes: ['7% of revenue', '(2pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.023821, notes: ['2% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.058756 },
      },
      otherIncome: { total: 0.016926, items: [{ id: 'other_income', label: 'Other', value: 0.016926 }] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 0.768606, notes: ['60% margin', '(3pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.468919, notes: ['37% margin', '+5pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.427089, notes: ['33% margin', '+4pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2022 财年第四季度',
          periodNote: '截至 2022 年 12 月',
          revenue: {
            notes: ['同比 +55%'],
            items: [
              { id: 'product', label: '产品', notes: ['同比 +64%', '毛利率 57%', '同比 (2 个百分点)'] },
              { id: 'service', label: '服务', notes: ['同比 +14%', '毛利率 80%', '同比 +0 个百分点'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [{ id: 'product_cor', label: '产品' }, { id: 'service_cor', label: '服务' }],
              notes: ['来源图将收入成本拆分为产品 ($0.5B) 和服务 ($35M)。'],
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 15%', '同比 (4 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 7%', '同比 (2 个百分点)'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 2%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '所得税费用' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他收入' }] },
          profit: {
            gross: { label: '毛利润', notes: ['毛利率 60%', '同比 (3 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 37%', '同比 +5 个百分点'] },
            net: { label: '净利润', notes: ['利润率 33%', '同比 +4 个百分点'] },
          },
        },
      },
    },
    {
      key: 'arista-q4-fy23',
      company: 'Arista',
      period: 'Q4 FY23',
      periodNote: 'Ending Dec. 2023',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/arista-q4-fy23.png',
      roundingTolerance: 0.12,
      revenue: {
        total: 1.540437,
        notes: ['+21% Y/Y'],
        items: [
          { id: 'product', label: 'Product', value: 1.310314, notes: ['+19% Y/Y', '62% gross margin', '+5pp Y/Y'] },
          { id: 'service', label: 'Service', value: 0.230123, notes: ['+29% Y/Y', '80% gross margin', '+0pp Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 0.541211,
          items: [
            { id: 'product_cor', label: 'Product', value: 0.495826 },
            { id: 'service_cor', label: 'Service', value: 0.045385 },
          ],
          notes: ['Source chart splits cost of revenue into Product ($0.5B) and Service ($45M).'],
        },
        operatingExpenses: {
          total: 0.359312,
          items: [
            { id: 'rnd', label: 'R&D', value: 0.211481, notes: ['14% of revenue', '(1pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 0.105538, notes: ['7% of revenue', '+0pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.042293, notes: ['3% of revenue', '+1pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.080755 },
      },
      otherIncome: {
        total: 0.054477,
        items: [{ id: 'other_income', label: 'Other', value: 0.054477 }],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 0.999226, notes: ['65% margin', '+5pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.639914, notes: ['42% margin', '+5pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.613636, notes: ['40% margin', '+6pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第四季度',
          periodNote: '截至 2023 年 12 月',
          revenue: {
            notes: ['同比 +21%'],
            items: [
              { id: 'product', label: '产品', notes: ['同比 +19%', '毛利率 62%', '同比 +5 个百分点'] },
              { id: 'service', label: '服务', notes: ['同比 +29%', '毛利率 80%', '同比 +0 个百分点'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [{ id: 'product_cor', label: '产品' }, { id: 'service_cor', label: '服务' }],
              notes: ['来源图将收入成本拆分为产品 ($0.5B) 和服务 ($45M)。'],
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 14%', '同比 (1 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 7%', '同比 +0 个百分点'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 3%', '同比 +1 个百分点'] },
              ],
            },
            tax: { label: '所得税费用' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他收入' }] },
          profit: {
            gross: { label: '毛利润', notes: ['毛利率 65%', '同比 +5 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 42%', '同比 +5 个百分点'] },
            net: { label: '净利润', notes: ['利润率 40%', '同比 +6 个百分点'] },
          },
        },
      },
    },
    {
      key: 'arista-q3-fy24',
      company: 'Arista',
      period: 'Q3 FY24',
      periodNote: 'Ending Sep. 2024',
      currency: '$',
      unit: 'B',
      decimals: 6,
      sourceImage: 'input/processed/arista-q3-fy24.png',
      roundingTolerance: 0.12,
      revenue: {
        total: 1.810936,
        notes: ['+20% Y/Y'],
        items: [
          { id: 'product', label: 'Product', value: 1.523807, notes: ['+19% Y/Y', '61% gross margin', '+2pp Y/Y'] },
          { id: 'service', label: 'Service', value: 0.287129, notes: ['+28% Y/Y', '81% gross margin', '+0pp Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 0.649219,
          items: [
            { id: 'product_cor', label: 'Product', value: 0.593343 },
            { id: 'service_cor', label: 'Service', value: 0.055876 },
          ],
          notes: ['Source chart splits cost of revenue into Product ($0.6B) and Service ($0.1B).'],
        },
        operatingExpenses: {
          total: 0.376467,
          items: [
            { id: 'rnd', label: 'R&D', value: 0.235824, notes: ['13% of revenue', '(1pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 0.106832, notes: ['6% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.034, notes: ['2% of revenue', '+0pp Y/Y', 'Source chart displays $34M; Arista reported $33.811M.'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.134972 },
      },
      otherIncome: {
        total: 0.09766,
        items: [{ id: 'other_income', label: 'Other', value: 0.09766 }],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1.161717, notes: ['64% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.78525, notes: ['43% margin', '+3pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.747938, notes: ['41% margin', '+5pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第三季度',
          periodNote: '截至 2024 年 9 月',
          revenue: {
            notes: ['同比 +20%'],
            items: [
              { id: 'product', label: '产品', notes: ['同比 +19%', '毛利率 61%', '同比 +2 个百分点'] },
              { id: 'service', label: '服务', notes: ['同比 +28%', '毛利率 81%', '同比 +0 个百分点'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [{ id: 'product_cor', label: '产品' }, { id: 'service_cor', label: '服务' }],
              notes: ['来源图将收入成本拆分为产品 ($0.6B) 和服务 ($0.1B)。'],
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 13%', '同比 (1 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 6%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 2%', '同比 +0 个百分点'] },
              ],
            },
            tax: { label: '所得税费用' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他收入' }] },
          profit: {
            gross: { label: '毛利润', notes: ['毛利率 64%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 43%', '同比 +3 个百分点'] },
            net: { label: '净利润', notes: ['利润率 41%', '同比 +5 个百分点'] },
          },
        },
      },
    },
    {
      key: 'arista-q3-fy23',
      company: 'Arista',
      period: 'Q3 FY23',
      periodNote: 'Ending Sep. 2023',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/arista-q3-fy23.png',
      roundingTolerance: 0.12,
      revenue: {
        total: 1.509456,
        notes: ['+28% Y/Y'],
        items: [
          { id: 'product', label: 'Product', value: 1.285548, notes: ['+27% Y/Y', '59% gross margin', '+2pp Y/Y'] },
          { id: 'service', label: 'Service', value: 0.223908, notes: ['+33% Y/Y', '90% gross margin', '+1pp Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 0.567037,
          items: [
            { id: 'product_cor', label: 'Product', value: 0.522866 },
            { id: 'service_cor', label: 'Service', value: 0.044 },
          ],
          notes: ['Source chart splits cost of revenue into Product ($0.5B) and Service ($44M).'],
        },
        operatingExpenses: {
          total: 0.339724,
          items: [
            { id: 'rnd', label: 'R&D', value: 0.212353, notes: ['14% of revenue', '(2pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 0.102033, notes: ['7% of revenue', '(0pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.025, notes: ['2% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.099183 },
      },
      otherIncome: {
        total: 0.041,
        items: [{ id: 'other_income', label: 'Other', value: 0.041 }],
        notes: ['Source chart displays $41M; Arista reported $41.815M of other income, net.'],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 0.942419, notes: ['62% margin', '+4pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.602695, notes: ['40% margin', '+4pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.545327, notes: ['36% margin', '+6pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第三季度',
          periodNote: '截至 2023 年 9 月',
          revenue: {
            notes: ['同比 +28%'],
            items: [
              { id: 'product', label: '产品', notes: ['同比 +27%', '毛利率 59%', '同比 +2 个百分点'] },
              { id: 'service', label: '服务', notes: ['同比 +33%', '毛利率 90%', '同比 +1 个百分点'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [{ id: 'product_cor', label: '产品' }, { id: 'service_cor', label: '服务' }],
              notes: ['来源图将收入成本拆分为产品 ($0.5B) 和服务 ($44M)。'],
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 14%', '同比 (2 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 7%', '同比 (0 个百分点)'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 2%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '所得税费用' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他收入' }], notes: ['来源图显示 $41M；Arista 披露其他收入净额为 $41.815M。'] },
          profit: {
            gross: { label: '毛利润', notes: ['毛利率 62%', '同比 +4 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 40%', '同比 +4 个百分点'] },
            net: { label: '净利润', notes: ['利润率 36%', '同比 +6 个百分点'] },
          },
        },
      },
    },
    {
      key: 'arista-q3-fy25',
      company: 'Arista',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/arista-q3-fy25.png',
      roundingTolerance: 0.12,
      revenue: {
        total: 2.3083,
        notes: ['+27% Y/Y'],
        items: [
          { id: 'product', label: 'Product', value: 1.9117, notes: ['+25% Y/Y', '61% gross margin', '(0pp) Y/Y'] },
          { id: 'service', label: 'Service', value: 0.3966, notes: ['+38% Y/Y', '82% gross margin', '+1pp Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 0.8181,
          items: [
            { id: 'product_cor', label: 'Product', value: 0.7455 },
            { id: 'service_cor', label: 'Service', value: 0.0726 },
          ],
          notes: ['Source chart splits cost of revenue into Product ($0.7B) and Service ($0.1B).'],
        },
        operatingExpenses: {
          total: 0.512,
          items: [
            { id: 'rnd', label: 'R&D', value: 0.326, notes: ['14% of revenue', '+1pp Y/Y'] },
            { id: 'sm', label: 'S&M', value: 0.1512, notes: ['7% of revenue', '+1pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.0348, notes: ['2% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.2241 },
      },
      otherIncome: {
        total: 0.0989,
        items: [{ id: 'other_income', label: 'Other', value: 0.0989 }],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1.4902, notes: ['65% margin', '+0pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.9782, notes: ['42% margin', '(1pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.853, notes: ['37% margin', '(4pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          revenue: {
            notes: ['同比 +27%'],
            items: [
              { id: 'product', label: '产品', notes: ['同比 +25%', '毛利率 61%', '同比 (0 个百分点)'] },
              { id: 'service', label: '服务', notes: ['同比 +38%', '毛利率 82%', '同比 +1 个百分点'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [
                { id: 'product_cor', label: '产品' },
                { id: 'service_cor', label: '服务' },
              ],
              notes: ['来源图将收入成本拆分为产品 ($0.7B) 和服务 ($0.1B)。'],
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 14%', '同比 +1 个百分点'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 7%', '同比 +1 个百分点'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 2%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '所得税费用' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他收入' }] },
          profit: {
            gross: { label: '毛利润', notes: ['毛利率 65%', '同比 +0 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 42%', '同比 (1 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 37%', '同比 (4 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'arista-q1-fy26',
      company: 'Arista',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/arista-q1-fy26.png',
      roundingTolerance: 0.12,
      revenue: {
        total: 2.709,
        notes: ['+35% Y/Y'],
        items: [
          { id: 'product', label: 'Product', value: 2.3113, notes: ['+37% Y/Y', '58% gross margin', '(2pp) Y/Y'] },
          { id: 'service', label: 'Service', value: 0.3977, notes: ['+27% Y/Y', '82% gross margin', '+0pp Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 1.0322,
          notes: ['Source chart splits cost of revenue into Product ($1.0B) and Service ($0.1B).'],
        },
        operatingExpenses: {
          total: 0.519,
          items: [
            { id: 'rnd', label: 'R&D', value: 0.3437, notes: ['13% of revenue', '(1pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 0.1416, notes: ['5% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.0337, notes: ['1% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.2485 },
      },
      otherIncome: {
        total: 0.1136,
        items: [{ id: 'other_income', label: 'Other', value: 0.1136 }],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1.6768, notes: ['62% margin', '(2pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.1578, notes: ['43% margin', '(0pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.0229, notes: ['38% margin', '(3pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +35%'],
            items: [
              { id: 'product', label: '产品', notes: ['同比 +37%', '毛利率 58%', '同比 (2 个百分点)'] },
              { id: 'service', label: '服务', notes: ['同比 +27%', '毛利率 82%', '同比 +0 个百分点'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本', notes: ['来源图将收入成本拆分为产品 ($1.0B) 和服务 ($0.1B)。'] },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 13%', '同比 (1 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 5%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 1%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '所得税费用' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他收入' }] },
          profit: {
            gross: { label: '毛利润', notes: ['毛利率 62%', '同比 (2 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 43%', '同比 (0 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 38%', '同比 (3 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'arista-q4-fy25',
      company: 'Arista',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/arista-q4-fy25.png',
      roundingTolerance: 0.12,
      revenue: {
        total: 2.4878,
        notes: ['+29% Y/Y'],
        items: [
          {
            id: 'product',
            label: 'Product',
            value: 2.0957,
            notes: ['+30% Y/Y', '59% gross margin', '(1pp) Y/Y'],
          },
          {
            id: 'service',
            label: 'Service',
            value: 0.3921,
            notes: ['+22% Y/Y', '82% gross margin', '(1pp) Y/Y'],
          },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 0.924,
          notes: ['Source chart splits cost of revenue into Product ($0.9B) and Service ($0.1B).'],
        },
        operatingExpenses: {
          total: 0.5309,
          items: [
            { id: 'rnd', label: 'R&D', value: 0.3484, notes: ['14% of revenue', '(1pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 0.1391, notes: ['6% of revenue', '(0pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.0434, notes: ['2% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.1816 },
      },
      otherIncome: {
        total: 0.1045,
        items: [{ id: 'other_income', label: 'Other', value: 0.1045 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1.5638, notes: ['63% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.0329, notes: ['42% margin', '+0pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.9558, notes: ['37% margin', '(4pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +29%'],
            items: [
              { id: 'product', label: '产品', notes: ['同比 +30%', '毛利率 59%', '同比 (1 个百分点)'] },
              { id: 'service', label: '服务', notes: ['同比 +22%', '毛利率 82%', '同比 (1 个百分点)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本', notes: ['来源图将收入成本拆分为产品 ($0.9B) 和服务 ($0.1B)。'] },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 14%', '同比 (1 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 6%', '同比 (0 个百分点)'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 2%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '所得税费用' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他收入' }] },
          profit: {
            gross: { label: '毛利润', notes: ['毛利率 63%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 42%', '同比 +0 个百分点'] },
            net: { label: '净利润', notes: ['利润率 37%', '同比 (4 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'arista-q4-fy24',
      company: 'Arista',
      period: 'Q4 FY24',
      periodNote: 'Ending Dec. 2024',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/arista-q4-fy24.png',
      roundingTolerance: 0.12,
      revenue: {
        total: 1.930436,
        notes: ['+25% Y/Y'],
        items: [
          { id: 'product', label: 'Product', value: 1.608098, notes: ['+23% Y/Y', '60% gross margin', '(2pp) Y/Y'] },
          { id: 'service', label: 'Service', value: 0.322338, notes: ['+40% Y/Y', '83% gross margin', '+2pp Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 0.699442,
          items: [
            { id: 'product_cor', label: 'Product', value: 0.643648 },
            { id: 'service_cor', label: 'Service', value: 0.055794 },
          ],
          notes: ['Source chart splits cost of revenue into Product ($0.6B) and Service ($0.1B).'],
        },
        operatingExpenses: {
          total: 0.431342,
          items: [
            { id: 'rnd', label: 'R&D', value: 0.285016, notes: ['15% of revenue', '+1pp Y/Y'] },
            { id: 'sm', label: 'S&M', value: 0.110949, notes: ['6% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.035377, notes: ['2% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.087931 },
      },
      otherIncome: {
        total: 0.089275,
        items: [{ id: 'other_income', label: 'Other', value: 0.089275 }],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1.230994, notes: ['64% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.799652, notes: ['41% margin', '(0pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.800996, notes: ['41% margin', '+2pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第四季度',
          periodNote: '截至 2024 年 12 月',
          revenue: {
            notes: ['同比 +25%'],
            items: [
              { id: 'product', label: '产品', notes: ['同比 +23%', '毛利率 60%', '同比 (2 个百分点)'] },
              { id: 'service', label: '服务', notes: ['同比 +40%', '毛利率 83%', '同比 +2 个百分点'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [
                { id: 'product_cor', label: '产品' },
                { id: 'service_cor', label: '服务' },
              ],
              notes: ['来源图将收入成本拆分为产品 ($0.6B) 和服务 ($0.1B)。'],
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 15%', '同比 +1 个百分点'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 6%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 2%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '所得税费用' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他收入' }] },
          profit: {
            gross: { label: '毛利润', notes: ['毛利率 64%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 41%', '同比 (0 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 41%', '同比 +2 个百分点'] },
          },
        },
      },
    }
  );
})(window);
