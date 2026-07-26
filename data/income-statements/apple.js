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
      key: 'apple-q4-fy25',
      company: 'Apple',
      period: 'Q4 FY25',
      periodNote: 'Ending Sept. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/apple-q4-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 102.5,
        notes: ['+8% Y/Y'],
        items: [
          {
            id: 'products',
            label: 'Products',
            value: 73.7,
            notes: ['+5% Y/Y'],
            children: [
              { id: 'iphone', label: 'iPhone', value: 49.0, notes: ['+6% Y/Y'] },
              { id: 'mac', label: 'Mac', value: 8.7, notes: ['+13% Y/Y', 'Air, Pro, Mini'] },
              { id: 'ipad', label: 'iPad', value: 7.0, notes: ['+0% Y/Y'] },
              {
                id: 'wearables',
                label: 'Wearables, Home, and Accessories',
                value: 9.0,
                notes: ['(0%) Y/Y'],
              },
            ],
          },
          { id: 'services', label: 'Services', value: 28.8, notes: ['+15% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 54.1,
          items: [
            { id: 'product_cost', label: 'Products', value: 47.0, notes: ['36% gross margin'] },
            { id: 'service_cost', label: 'Services', value: 7.1, notes: ['75% gross margin'] },
          ],
        },
        operatingExpenses: {
          total: 15.9,
          items: [
            { id: 'rnd', label: 'R&D', value: 8.9, notes: ['9% of revenue', '+0pp Y/Y'] },
            { id: 'sga', label: 'SG&A', value: 7.0, notes: ['7% of revenue', '+0pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 5.3 },
      },
      otherIncome: {
        total: 0.4,
        items: [{ id: 'other_income', label: 'Other', value: 0.4 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 48.3, notes: ['47% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 32.4, notes: ['32% margin', '+0pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 27.5, notes: ['27% margin', '+11pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 9 月',
          revenue: {
            notes: ['同比 +8%'],
            items: [
              {
                id: 'products', label: '产品', notes: ['同比 +5%'],
                children: [
                  { id: 'iphone', label: 'iPhone', notes: ['同比 +6%'] },
                  { id: 'mac', label: 'Mac', notes: ['同比 +13%', 'Air、Pro、Mini'] },
                  { id: 'ipad', label: 'iPad', notes: ['同比 +0%'] },
                  { id: 'wearables', label: '可穿戴设备、家居与配件', notes: ['同比 (0%)'] },
                ],
              },
              { id: 'services', label: '服务', notes: ['同比 +15%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [
                { id: 'product_cost', label: '产品', notes: ['毛利率 36%'] },
                { id: 'service_cost', label: '服务', notes: ['毛利率 75%'] },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 9%', '同比 +0 个百分点'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 7%', '同比 +0 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 47%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 32%', '同比 +0 个百分点'] },
            net: { label: '净利润', notes: ['利润率 27%', '同比 +11 个百分点'] },
          },
        },
      },
    },
    {
      key: 'apple-q3-fy25',
      company: 'Apple',
      period: 'Q3 FY25',
      periodNote: 'Ending June 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/apple-q3-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 94.0,
        notes: ['+10% Y/Y'],
        items: [
          {
            id: 'products',
            label: 'Products',
            value: 66.6,
            notes: ['+8% Y/Y'],
            children: [
              { id: 'iphone', label: 'iPhone', value: 44.6, notes: ['+13% Y/Y'] },
              { id: 'mac', label: 'Mac', value: 8.0, notes: ['+15% Y/Y', 'Air, Pro, Mini'] },
              { id: 'ipad', label: 'iPad', value: 6.6, notes: ['(8%) Y/Y'] },
              {
                id: 'wearables',
                label: 'Wearables, Home, and Accessories',
                value: 7.4,
                notes: ['(9%) Y/Y'],
              },
            ],
          },
          { id: 'services', label: 'Services', value: 27.4, notes: ['+13% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 50.3,
          items: [
            { id: 'product_cost', label: 'Products', value: 43.6, notes: ['35% gross margin'] },
            { id: 'service_cost', label: 'Services', value: 6.7, notes: ['76% gross margin'] },
          ],
        },
        operatingExpenses: {
          total: 15.5,
          items: [
            { id: 'rnd', label: 'R&D', value: 8.9, notes: ['9% of revenue', '+0pp Y/Y'] },
            { id: 'sga', label: 'SG&A', value: 6.6, notes: ['7% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 4.6 },
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 43.7, notes: ['46% margin', '+0pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 28.2, notes: ['30% margin', '+0pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 23.4, notes: ['25% margin', '(0pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 6 月',
          revenue: {
            notes: ['同比 +10%'],
            items: [
              {
                id: 'products', label: '产品', notes: ['同比 +8%'],
                children: [
                  { id: 'iphone', label: 'iPhone', notes: ['同比 +13%'] },
                  { id: 'mac', label: 'Mac', notes: ['同比 +15%', 'Air、Pro、Mini'] },
                  { id: 'ipad', label: 'iPad', notes: ['同比 (8%)'] },
                  { id: 'wearables', label: '可穿戴设备、家居与配件', notes: ['同比 (9%)'] },
                ],
              },
              { id: 'services', label: '服务', notes: ['同比 +13%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [
                { id: 'product_cost', label: '产品', notes: ['毛利率 35%'] },
                { id: 'service_cost', label: '服务', notes: ['毛利率 76%'] },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 9%', '同比 +0 个百分点'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 7%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'other_expense', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 46%', '同比 +0 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 30%', '同比 +0 个百分点'] },
            net: { label: '净利润', notes: ['利润率 25%', '同比 (0 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'apple-q1-fy23',
      company: 'Apple',
      period: 'Q1 FY23',
      periodNote: 'Ending Dec. 2022',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/apple-q1-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 117.2,
        notes: ['(5%) Y/Y'],
        items: [
          {
            id: 'products',
            label: 'Products',
            value: 96.4,
            notes: ['(8%) Y/Y'],
            children: [
              { id: 'iphone', label: 'iPhone', value: 65.8, notes: ['(8%) Y/Y'] },
              { id: 'mac', label: 'MacBook', value: 7.7, notes: ['(29%) Y/Y', 'Air, Pro, iMac'] },
              { id: 'ipad', label: 'iPad', value: 9.4, notes: ['+30% Y/Y'] },
              {
                id: 'wearables',
                label: 'Wearables, Home, and Accessories',
                value: 13.5,
                notes: ['(8%) Y/Y'],
              },
            ],
          },
          { id: 'services', label: 'Services', value: 20.8, notes: ['+6% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 66.8,
          items: [
            { id: 'product_cost', label: 'Products', value: 60.8, notes: ['37% gross margin'] },
            { id: 'service_cost', label: 'Services', value: 6.1, notes: ['71% gross margin'] },
          ],
        },
        operatingExpenses: {
          total: 14.3,
          items: [
            { id: 'rnd', label: 'R&D', value: 7.7, notes: ['7% of revenue'] },
            { id: 'sga', label: 'SG&A', value: 6.6, notes: ['6% of revenue'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 5.6 },
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 50.3, notes: ['43% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 36.0, notes: ['31% margin', '(2pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 30.0, notes: ['26% margin', '(2pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第一季度',
          periodNote: '截至 2022 年 12 月',
          revenue: {
            notes: ['同比 (5%)'],
            items: [
              {
                id: 'products', label: '产品', notes: ['同比 (8%)'],
                children: [
                  { id: 'iphone', label: 'iPhone', notes: ['同比 (8%)'] },
                  { id: 'mac', label: 'MacBook', notes: ['同比 (29%)', 'Air、Pro、iMac'] },
                  { id: 'ipad', label: 'iPad', notes: ['同比 +30%'] },
                  { id: 'wearables', label: '可穿戴设备、家居与配件', notes: ['同比 (8%)'] },
                ],
              },
              { id: 'services', label: '服务', notes: ['同比 +6%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [
                { id: 'product_cost', label: '产品', notes: ['毛利率 37%'] },
                { id: 'service_cost', label: '服务', notes: ['毛利率 71%'] },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 7%'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 6%'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'other_expense', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 43%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 31%', '同比 (2 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 26%', '同比 (2 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'apple-q4-fy22',
      company: 'Apple',
      period: 'Q4 FY22',
      periodNote: 'Ending Sept. 2022',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/apple-q4-fy22.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 90.1,
        notes: ['+8% Y/Y'],
        items: [
          {
            id: 'products',
            label: 'Products',
            value: 71.0,
            notes: ['+9% Y/Y'],
            children: [
              { id: 'iphone', label: 'iPhone', value: 42.6, notes: ['+10% Y/Y'] },
              { id: 'mac', label: 'MacBook', value: 11.5, notes: ['+25 Y/Y', 'Air, Pro, iMac'] },
              { id: 'ipad', label: 'iPad', value: 7.2, notes: ['(13%) Y/Y'] },
              {
                id: 'wearables',
                label: 'Wearables, Home, and Accessories',
                value: 9.7,
                notes: ['+10% Y/Y'],
              },
            ],
          },
          { id: 'services', label: 'Services', value: 19.2, notes: ['+5% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 52.1,
          items: [
            { id: 'product_cost', label: 'Products', value: 46.4, notes: ['35% gross margin'] },
            { id: 'service_cost', label: 'Services', value: 5.7, notes: ['70% gross margin'] },
          ],
        },
        operatingExpenses: {
          total: 13.2,
          items: [
            { id: 'rnd', label: 'R&D', value: 6.8, notes: ['8% of revenue'] },
            { id: 'sga', label: 'SG&A', value: 6.4, notes: ['7% of revenue'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 3.9 },
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 38.1, notes: ['42% margin'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 24.9, notes: ['28% margin', '(1pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 20.7, notes: ['23% margin', '(2pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2022 财年第四季度',
          periodNote: '截至 2022 年 9 月',
          revenue: {
            notes: ['同比 +8%'],
            items: [
              {
                id: 'products', label: '产品', notes: ['同比 +9%'],
                children: [
                  { id: 'iphone', label: 'iPhone', notes: ['同比 +10%'] },
                  { id: 'mac', label: 'MacBook', notes: ['同比 +25', 'Air、Pro、iMac'] },
                  { id: 'ipad', label: 'iPad', notes: ['同比 (13%)'] },
                  { id: 'wearables', label: '可穿戴设备、家居与配件', notes: ['同比 +10%'] },
                ],
              },
              { id: 'services', label: '服务', notes: ['同比 +5%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [
                { id: 'product_cost', label: '产品', notes: ['毛利率 35%'] },
                { id: 'service_cost', label: '服务', notes: ['毛利率 70%'] },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 8%'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 7%'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'other_expense', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 42%'] },
            operating: { label: '营业利润', notes: ['利润率 28%', '同比 (1 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 23%', '同比 (2 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'apple-q4-fy24',
      company: 'Apple',
      period: 'Q4 FY24',
      periodNote: 'Ending Sept. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/apple-q4-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 94.9,
        notes: ['+6% Y/Y'],
        items: [
          {
            id: 'products',
            label: 'Products',
            value: 70.0,
            notes: ['+4% Y/Y'],
            children: [
              { id: 'iphone', label: 'iPhone', value: 46.2, notes: ['+6% Y/Y'] },
              { id: 'mac', label: 'MacBook', value: 7.7, notes: ['+2% Y/Y', 'Air, Pro, iMac'] },
              { id: 'ipad', label: 'iPad', value: 7.0, notes: ['+8% Y/Y'] },
              {
                id: 'wearables',
                label: 'Wearables, Home, and Accessories',
                value: 9.0,
                notes: ['(3%) Y/Y'],
              },
            ],
          },
          { id: 'services', label: 'Services', value: 25.0, notes: ['+12% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 51.1,
          items: [
            { id: 'product_cost', label: 'Products', value: 44.6, notes: ['36% gross margin'] },
            { id: 'service_cost', label: 'Services', value: 6.5, notes: ['74% gross margin'] },
          ],
        },
        operatingExpenses: {
          total: 14.3,
          items: [
            { id: 'rnd', label: 'R&D', value: 7.8, notes: ['9% of revenue', '+0pp Y/Y'] },
            { id: 'sga', label: 'SG&A', value: 6.5, notes: ['7% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 14.9 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 43.9, notes: ['46% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 29.6, notes: ['31% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 14.7, notes: ['16% margin', '(10pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第四季度',
          periodNote: '截至 2024 年 9 月',
          revenue: {
            notes: ['同比 +6%'],
            items: [
              {
                id: 'products', label: '产品', notes: ['同比 +4%'],
                children: [
                  { id: 'iphone', label: 'iPhone', notes: ['同比 +6%'] },
                  { id: 'mac', label: 'MacBook', notes: ['同比 +2%', 'Air、Pro、iMac'] },
                  { id: 'ipad', label: 'iPad', notes: ['同比 +8%'] },
                  { id: 'wearables', label: '可穿戴设备、家居与配件', notes: ['同比 (3%)'] },
                ],
              },
              { id: 'services', label: '服务', notes: ['同比 +12%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [
                { id: 'product_cost', label: '产品', notes: ['毛利率 36%'] },
                { id: 'service_cost', label: '服务', notes: ['毛利率 74%'] },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 9%', '同比 +0 个百分点'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 7%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 46%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 31%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 16%', '同比 (10 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'apple-q4-fy23',
      company: 'Apple',
      period: 'Q4 FY23',
      periodNote: 'Ending Sept. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/apple-q4-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 89.5,
        notes: ['(1%) Y/Y'],
        items: [
          {
            id: 'products',
            label: 'Products',
            value: 67.2,
            notes: ['(5%) Y/Y'],
            children: [
              { id: 'iphone', label: 'iPhone', value: 43.8, notes: ['+3% Y/Y'] },
              { id: 'mac', label: 'MacBook', value: 7.6, notes: ['(34%) Y/Y', 'Air, Pro, iMac'] },
              { id: 'ipad', label: 'iPad', value: 6.4, notes: ['(10%) Y/Y'] },
              {
                id: 'wearables',
                label: 'Wearables, Home, and Accessories',
                value: 9.3,
                notes: ['(3%) Y/Y'],
              },
            ],
          },
          { id: 'services', label: 'Services', value: 22.3, notes: ['+16% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 49.1,
          items: [
            { id: 'product_cost', label: 'Products', value: 42.6, notes: ['37% gross margin'] },
            { id: 'service_cost', label: 'Services', value: 6.5, notes: ['71% gross margin'] },
          ],
        },
        operatingExpenses: {
          total: 13.5,
          items: [
            { id: 'rnd', label: 'R&D', value: 7.3, notes: ['8% of revenue'] },
            { id: 'sga', label: 'SG&A', value: 6.2, notes: ['7% of revenue'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 4.0 },
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 40.4, notes: ['45% margin', '+3pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 27.0, notes: ['30% margin', '+3pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 23.0, notes: ['26% margin', '+3pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第四季度',
          periodNote: '截至 2023 年 9 月',
          revenue: {
            notes: ['同比 (1%)'],
            items: [
              {
                id: 'products', label: '产品', notes: ['同比 (5%)'],
                children: [
                  { id: 'iphone', label: 'iPhone', notes: ['同比 +3%'] },
                  { id: 'mac', label: 'MacBook', notes: ['同比 (34%)', 'Air、Pro、iMac'] },
                  { id: 'ipad', label: 'iPad', notes: ['同比 (10%)'] },
                  { id: 'wearables', label: '可穿戴设备、家居与配件', notes: ['同比 (3%)'] },
                ],
              },
              { id: 'services', label: '服务', notes: ['同比 +16%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [
                { id: 'product_cost', label: '产品', notes: ['毛利率 37%'] },
                { id: 'service_cost', label: '服务', notes: ['毛利率 71%'] },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 8%'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 7%'] },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 45%', '同比 +3 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 30%', '同比 +3 个百分点'] },
            net: { label: '净利润', notes: ['利润率 26%', '同比 +3 个百分点'] },
          },
        },
      },
    },
    {
      key: 'apple-q2-fy26',
      company: 'Apple',
      period: 'Q2 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/apple-q2-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 111.2,
        notes: ['+17% Y/Y'],
        items: [
          {
            id: 'products',
            label: 'Products',
            value: 80.2,
            notes: ['+17% Y/Y'],
            children: [
              { id: 'iphone', label: 'iPhone', value: 57.0, notes: ['+22% Y/Y'] },
              { id: 'mac', label: 'Mac', value: 8.4, notes: ['+6% Y/Y', 'Air, Pro, Mini'] },
              { id: 'ipad', label: 'iPad', value: 6.9, notes: ['+8% Y/Y'] },
              {
                id: 'wearables',
                label: 'Wearables, Home, and Accessories',
                value: 7.9,
                notes: ['+5% Y/Y'],
              },
            ],
          },
          { id: 'services', label: 'Services', value: 31.0, notes: ['+16% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 56.4,
          items: [
            { id: 'product_cost', label: 'Products', value: 49.2, notes: ['39% gross margin'] },
            { id: 'service_cost', label: 'Services', value: 7.2, notes: ['77% gross margin'] },
          ],
        },
        operatingExpenses: {
          total: 18.9,
          items: [
            { id: 'rnd', label: 'R&D', value: 11.4, notes: ['10% of revenue', '+1pp Y/Y'] },
            { id: 'sga', label: 'SG&A', value: 7.5, notes: ['7% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 6.3 },
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 54.8, notes: ['49% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 35.9, notes: ['32% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 29.7, notes: ['27% margin', '+1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +17%'],
            items: [
              {
                id: 'products', label: '产品', notes: ['同比 +17%'],
                children: [
                  { id: 'iphone', label: 'iPhone', notes: ['同比 +22%'] },
                  { id: 'mac', label: 'Mac', notes: ['同比 +6%', 'Air、Pro、Mini'] },
                  { id: 'ipad', label: 'iPad', notes: ['同比 +8%'] },
                  { id: 'wearables', label: '可穿戴设备、家居与配件', notes: ['同比 +5%'] },
                ],
              },
              { id: 'services', label: '服务', notes: ['同比 +16%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [
                { id: 'product_cost', label: '产品', notes: ['毛利率 39%'] },
                { id: 'service_cost', label: '服务', notes: ['毛利率 77%'] },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 10%', '同比 +1 个百分点'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 7%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 49%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 32%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 27%', '同比 +1 个百分点'] },
          },
        },
      },
    },
    {
      key: 'apple-q1-fy26',
      company: 'Apple',
      period: 'Q1 FY26',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/apple-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 143.8,
        notes: ['+16% Y/Y'],
        items: [
          {
            id: 'products',
            label: 'Products',
            value: 113.7,
            notes: ['+16% Y/Y'],
            children: [
              { id: 'iphone', label: 'iPhone', value: 85.3, notes: ['+23% Y/Y'] },
              { id: 'mac', label: 'Mac', value: 8.4, notes: ['(7%) Y/Y', 'Air, Pro, Mini'] },
              { id: 'ipad', label: 'iPad', value: 8.5, notes: ['+6% Y/Y'] },
              {
                id: 'wearables',
                label: 'Wearables, Home, and Accessories',
                value: 11.5,
                notes: ['(2%) Y/Y'],
              },
            ],
          },
          { id: 'services', label: 'Services', value: 30.0, notes: ['+14% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 74.5,
          items: [
            { id: 'product_cost', label: 'Products', value: 67.5, notes: ['41% gross margin'] },
            { id: 'service_cost', label: 'Services', value: 7.1, notes: ['77% gross margin'] },
          ],
        },
        operatingExpenses: {
          total: 18.4,
          items: [
            { id: 'rnd', label: 'R&D', value: 10.9, notes: ['8% of revenue', '+1pp Y/Y'] },
            { id: 'sga', label: 'SG&A', value: 7.5, notes: ['5% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 8.9 },
      },
      otherIncome: {
        total: 0.2,
        items: [{ id: 'other_income', label: 'Other', value: 0.2 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 69.2, notes: ['48% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 50.9, notes: ['35% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 42.1, notes: ['29% margin', '+0pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +16%'],
            items: [
              {
                id: 'products', label: '产品', notes: ['同比 +16%'],
                children: [
                  { id: 'iphone', label: 'iPhone', notes: ['同比 +23%'] },
                  { id: 'mac', label: 'Mac', notes: ['同比 (7%)', 'Air、Pro、Mini'] },
                  { id: 'ipad', label: 'iPad', notes: ['同比 +6%'] },
                  { id: 'wearables', label: '可穿戴设备、家居与配件', notes: ['同比 (2%)'] },
                ],
              },
              { id: 'services', label: '服务', notes: ['同比 +14%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [
                { id: 'product_cost', label: '产品', notes: ['毛利率 41%'] },
                { id: 'service_cost', label: '服务', notes: ['毛利率 77%'] },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 8%', '同比 +1 个百分点'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 5%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 48%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 35%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 29%', '同比 +0 个百分点'] },
          },
        },
      },
    },
    {
      key: 'apple-q1-fy25',
      company: 'Apple',
      period: 'Q1 FY25',
      periodNote: 'Ending Dec. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/apple-q1-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 124.3,
        notes: ['+4% Y/Y'],
        items: [
          {
            id: 'products',
            label: 'Products',
            value: 98.0,
            valueText: '$98.0B',
            notes: ['+2% Y/Y'],
            children: [
              { id: 'iphone', label: 'iPhone', value: 69.1, notes: ['(1%) Y/Y'] },
              {
                id: 'mac',
                label: 'Mac',
                value: 9.0,
                valueText: '$9.0B',
                notes: ['+16% Y/Y', 'Air, Pro, Mini'],
              },
              { id: 'ipad', label: 'iPad', value: 8.1, notes: ['+15% Y/Y'] },
              {
                id: 'wearables',
                label: 'Wearables, Home, and Accessories',
                value: 11.7,
                notes: ['(2%) Y/Y'],
              },
            ],
          },
          { id: 'services', label: 'Services', value: 26.3, notes: ['+14% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 66.0,
          valueText: '($66.0B)',
          items: [
            { id: 'product_cost', label: 'Products', value: 59.4, notes: ['39% gross margin'] },
            { id: 'service_cost', label: 'Services', value: 6.6, notes: ['75% gross margin'] },
          ],
        },
        operatingExpenses: {
          total: 15.4,
          items: [
            { id: 'rnd', label: 'R&D', value: 8.3, notes: ['7% of revenue', '+0pp Y/Y'] },
            { id: 'sga', label: 'SG&A', value: 7.2, notes: ['6% of revenue', '+0pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 6.2 },
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
        gross: {
          id: 'gross_profit',
          label: 'Gross profit',
          value: 58.3,
          notes: ['47% margin', '+1pp Y/Y'],
        },
        operating: {
          id: 'operating_profit',
          label: 'Operating profit',
          value: 42.8,
          notes: ['34% margin', '+1pp Y/Y'],
        },
        net: {
          id: 'net_profit',
          label: 'Net profit',
          value: 36.3,
          notes: ['29% margin', '+1pp Y/Y'],
        },
      },
      i18n: {
        zh: {
          period: '2025 财年第一季度',
          periodNote: '截至 2024 年 12 月',
          revenue: {
            notes: ['同比 +4%'],
            items: [
              {
                id: 'products',
                label: '产品',
                notes: ['同比 +2%'],
                children: [
                  { id: 'iphone', label: 'iPhone', notes: ['同比 (1%)'] },
                  { id: 'mac', label: 'Mac', notes: ['同比 +16%', 'Air、Pro、Mini'] },
                  { id: 'ipad', label: 'iPad', notes: ['同比 +15%'] },
                  { id: 'wearables', label: '可穿戴设备、家居与配件', notes: ['同比 (2%)'] },
                ],
              },
              { id: 'services', label: '服务', notes: ['同比 +14%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [
                { id: 'product_cost', label: '产品', notes: ['毛利率 39%'] },
                { id: 'service_cost', label: '服务', notes: ['毛利率 75%'] },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 7%', '同比 +0 个百分点'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 6%', '同比 +0 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'other_expense', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 47%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 34%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 29%', '同比 +1 个百分点'] },
          },
        },
      },
    },
    {
      key: 'apple-q2-fy25',
      company: 'Apple',
      period: 'Q2 FY25',
      periodNote: 'Ending Mar. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/apple-q2-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 95.4,
        notes: ['+5% Y/Y'],
        items: [
          {
            id: 'products',
            label: 'Products',
            value: 68.7,
            notes: ['+3% Y/Y'],
            children: [
              { id: 'iphone', label: 'iPhone', value: 46.8, notes: ['+2% Y/Y'] },
              { id: 'mac', label: 'Mac', value: 7.9, notes: ['+7% Y/Y', 'Air, Pro, Mini'] },
              { id: 'ipad', label: 'iPad', value: 6.4, notes: ['+15% Y/Y'] },
              {
                id: 'wearables',
                label: 'Wearables, Home, and Accessories',
                value: 7.5,
                notes: ['(5%) Y/Y'],
              },
            ],
          },
          { id: 'services', label: 'Services', value: 26.6, notes: ['+12% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 50.5,
          items: [
            { id: 'product_cost', label: 'Products', value: 44.0, notes: ['36% gross margin'] },
            { id: 'service_cost', label: 'Services', value: 6.5, notes: ['76% gross margin'] },
          ],
        },
        operatingExpenses: {
          total: 15.3,
          items: [
            { id: 'rnd', label: 'R&D', value: 8.6, notes: ['9% of revenue', '+0pp Y/Y'] },
            { id: 'sga', label: 'SG&A', value: 6.7, notes: ['7% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 4.5 },
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 44.9, notes: ['47% margin', '+0pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 29.6, notes: ['31% margin', '+0pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 24.8, notes: ['26% margin', '(0pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第二季度',
          periodNote: '截至 2025 年 3 月',
          revenue: {
            notes: ['同比 +5%'],
            items: [
              {
                id: 'products', label: '产品', notes: ['同比 +3%'],
                children: [
                  { id: 'iphone', label: 'iPhone', notes: ['同比 +2%'] },
                  { id: 'mac', label: 'Mac', notes: ['同比 +7%', 'Air、Pro、Mini'] },
                  { id: 'ipad', label: 'iPad', notes: ['同比 +15%'] },
                  { id: 'wearables', label: '可穿戴设备、家居与配件', notes: ['同比 (5%)'] },
                ],
              },
              { id: 'services', label: '服务', notes: ['同比 +12%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [
                { id: 'product_cost', label: '产品', notes: ['毛利率 36%'] },
                { id: 'service_cost', label: '服务', notes: ['毛利率 76%'] },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 9%', '同比 +0 个百分点'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 7%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'other_expense', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 47%', '同比 +0 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 31%', '同比 +0 个百分点'] },
            net: { label: '净利润', notes: ['利润率 26%', '同比 (0 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'apple-q3-fy23',
      company: 'Apple',
      period: 'Q3 FY23',
      periodNote: 'Ending June 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/apple-q3-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 81.8,
        notes: ['(1%) Y/Y'],
        items: [
          {
            id: 'products',
            label: 'Products',
            value: 60.6,
            notes: ['(4%) Y/Y'],
            children: [
              { id: 'iphone', label: 'iPhone', value: 39.7, notes: ['(2%) Y/Y'] },
              { id: 'mac', label: 'Mac', value: 6.9, notes: ['(7%) Y/Y', 'Air, Pro, iMac'] },
              { id: 'ipad', label: 'iPad', value: 5.8, notes: ['(20%) Y/Y'] },
              {
                id: 'wearables',
                label: 'Wearables, Home, and Accessories',
                value: 8.3,
                notes: ['+2% Y/Y'],
              },
            ],
          },
          { id: 'services', label: 'Services', value: 21.2, notes: ['+8% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 45.4,
          items: [
            { id: 'product_cost', label: 'Products', value: 39.1, notes: ['35% gross margin'] },
            { id: 'service_cost', label: 'Services', value: 6.2, notes: ['71% gross margin'] },
          ],
        },
        operatingExpenses: {
          total: 13.4,
          items: [
            { id: 'rnd', label: 'R&D', value: 7.4, notes: ['9% of revenue'] },
            { id: 'sga', label: 'SG&A', value: 6.0, notes: ['7% of revenue'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 2.9 },
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 36.4, notes: ['45% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 23.0, notes: ['28% margin', '+0pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 19.9, notes: ['24% margin', '+1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第三季度',
          periodNote: '截至 2023 年 6 月',
          revenue: {
            notes: ['同比 (1%)'],
            items: [
              {
                id: 'products', label: '产品', notes: ['同比 (4%)'],
                children: [
                  { id: 'iphone', label: 'iPhone', notes: ['同比 (2%)'] },
                  { id: 'mac', label: 'Mac', notes: ['同比 (7%)', 'Air、Pro、iMac'] },
                  { id: 'ipad', label: 'iPad', notes: ['同比 (20%)'] },
                  { id: 'wearables', label: '可穿戴设备、家居与配件', notes: ['同比 +2%'] },
                ],
              },
              { id: 'services', label: '服务', notes: ['同比 +8%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [
                { id: 'product_cost', label: '产品', notes: ['毛利率 35%'] },
                { id: 'service_cost', label: '服务', notes: ['毛利率 71%'] },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 9%'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 7%'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'other_expense', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 45%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 28%', '同比 +0 个百分点'] },
            net: { label: '净利润', notes: ['利润率 24%', '同比 +1 个百分点'] },
          },
        },
      },
    },
    {
      key: 'apple-q3-fy24',
      company: 'Apple',
      period: 'Q3 FY24',
      periodNote: 'Ending Jun. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/apple-q3-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 85.8,
        notes: ['+5% Y/Y'],
        items: [
          {
            id: 'products',
            label: 'Products',
            value: 61.6,
            notes: ['+2% Y/Y'],
            children: [
              { id: 'iphone', label: 'iPhone', value: 39.3, notes: ['(1%) Y/Y'] },
              { id: 'mac', label: 'Mac', value: 7.0, notes: ['+2% Y/Y', 'Air, Pro, iMac'] },
              { id: 'ipad', label: 'iPad', value: 7.2, notes: ['+24% Y/Y'] },
              {
                id: 'wearables',
                label: 'Wearables, Home, and Accessories',
                value: 8.1,
                notes: ['(2%) Y/Y'],
              },
            ],
          },
          { id: 'services', label: 'Services', value: 24.2, notes: ['+14% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 46.1,
          items: [
            { id: 'product_cost', label: 'Products', value: 39.8, notes: ['35% gross margin'] },
            { id: 'service_cost', label: 'Services', value: 6.3, notes: ['74% gross margin'] },
          ],
        },
        operatingExpenses: {
          total: 14.3,
          items: [
            { id: 'rnd', label: 'R&D', value: 8.0, notes: ['9% of revenue', '+0pp Y/Y'] },
            { id: 'sga', label: 'SG&A', value: 6.3, notes: ['7% of revenue', '+0pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 4.0 },
      },
      otherIncome: {
        total: 0.1,
        items: [{ id: 'other_income', label: 'Other', value: 0.1 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 39.7, notes: ['46% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 25.4, notes: ['30% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 21.4, notes: ['25% margin', '+1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第三季度',
          periodNote: '截至 2024 年 6 月',
          revenue: {
            notes: ['同比 +5%'],
            items: [
              {
                id: 'products', label: '产品', notes: ['同比 +2%'],
                children: [
                  { id: 'iphone', label: 'iPhone', notes: ['同比 (1%)'] },
                  { id: 'mac', label: 'Mac', notes: ['同比 +2%', 'Air、Pro、iMac'] },
                  { id: 'ipad', label: 'iPad', notes: ['同比 +24%'] },
                  { id: 'wearables', label: '可穿戴设备、家居与配件', notes: ['同比 (2%)'] },
                ],
              },
              { id: 'services', label: '服务', notes: ['同比 +14%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [
                { id: 'product_cost', label: '产品', notes: ['毛利率 35%'] },
                { id: 'service_cost', label: '服务', notes: ['毛利率 74%'] },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 9%', '同比 +0 个百分点'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 7%', '同比 +0 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 46%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 30%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 25%', '同比 +1 个百分点'] },
          },
        },
      },
    },
    {
      key: 'apple-q2-fy24',
      company: 'Apple',
      period: 'Q2 FY24',
      periodNote: 'Ending Mar. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/apple-q2-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 90.8,
        notes: ['(4%) Y/Y'],
        items: [
          {
            id: 'products',
            label: 'Products',
            value: 66.9,
            notes: ['(10%) Y/Y'],
            children: [
              { id: 'iphone', label: 'iPhone', value: 46.0, notes: ['(10%) Y/Y'] },
              { id: 'mac', label: 'MacBook', value: 7.5, notes: ['+4% Y/Y', 'Air, Pro, iMac'] },
              { id: 'ipad', label: 'iPad', value: 5.6, notes: ['(17%) Y/Y'] },
              {
                id: 'wearables',
                label: 'Wearables, Home, and Accessories',
                value: 7.9,
                notes: ['(10%) Y/Y'],
              },
            ],
          },
          { id: 'services', label: 'Services', value: 23.9, notes: ['+14% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 48.5,
          items: [
            { id: 'product_cost', label: 'Products', value: 42.4, notes: ['37% gross margin'] },
            { id: 'service_cost', label: 'Services', value: 6.1, notes: ['75% gross margin'] },
          ],
        },
        operatingExpenses: {
          total: 14.4,
          items: [
            { id: 'rnd', label: 'R&D', value: 7.9, notes: ['9% of revenue', '+1pp Y/Y'] },
            { id: 'sga', label: 'SG&A', value: 6.5, notes: ['7% of revenue', '+1pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 4.4 },
      },
      otherIncome: {
        total: 0.2,
        items: [{ id: 'other_income', label: 'Other', value: 0.2 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 42.3, notes: ['47% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 27.9, notes: ['31% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 23.6, notes: ['26% margin', '+1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第二季度',
          periodNote: '截至 2024 年 3 月',
          revenue: {
            notes: ['同比 (4%)'],
            items: [
              {
                id: 'products',
                label: '产品',
                notes: ['同比 (10%)'],
                children: [
                  { id: 'iphone', label: 'iPhone', notes: ['同比 (10%)'] },
                  { id: 'mac', label: 'MacBook', notes: ['同比 +4%', 'Air、Pro、iMac'] },
                  { id: 'ipad', label: 'iPad', notes: ['同比 (17%)'] },
                  { id: 'wearables', label: '可穿戴设备、家居与配件', notes: ['同比 (10%)'] },
                ],
              },
              { id: 'services', label: '服务', notes: ['同比 +14%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [
                { id: 'product_cost', label: '产品', notes: ['毛利率 37%'] },
                { id: 'service_cost', label: '服务', notes: ['毛利率 75%'] },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 9%', '同比 +1 个百分点'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 7%', '同比 +1 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 47%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 31%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 26%', '同比 +1 个百分点'] },
          },
        },
      },
    },
    {
      key: 'apple-q1-fy24',
      company: 'Apple',
      period: 'Q1 FY24',
      periodNote: 'Ending Dec. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/apple-q1-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 119.6,
        notes: ['+2% Y/Y'],
        items: [
          {
            id: 'products',
            label: 'Products',
            value: 96.5,
            notes: ['+0% Y/Y'],
            children: [
              { id: 'iphone', label: 'iPhone', value: 69.7, notes: ['+6% Y/Y'] },
              { id: 'mac', label: 'MacBook', value: 7.8, notes: ['+1% Y/Y', 'Air, Pro, iMac'] },
              { id: 'ipad', label: 'iPad', value: 7.0, notes: ['(25%) Y/Y'] },
              {
                id: 'wearables',
                label: 'Wearables, Home, and Accessories',
                value: 12.0,
                notes: ['(11%) Y/Y'],
              },
            ],
          },
          { id: 'services', label: 'Services', value: 23.1, notes: ['+11% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 64.7,
          items: [
            { id: 'product_cost', label: 'Products', value: 58.4, notes: ['39% gross margin'] },
            { id: 'service_cost', label: 'Services', value: 6.3, notes: ['73% gross margin'] },
          ],
        },
        operatingExpenses: {
          total: 14.5,
          items: [
            { id: 'rnd', label: 'R&D', value: 7.7, notes: ['6% of revenue'] },
            { id: 'sga', label: 'SG&A', value: 6.8, notes: ['6% of revenue'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 6.4 },
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 54.9, notes: ['46% margin', '+3pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 40.4, notes: ['34% margin', '+3pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 33.9, notes: ['28% margin', '+3pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第一季度',
          periodNote: '截至 2023 年 12 月',
          revenue: {
            notes: ['同比 +2%'],
            items: [
              {
                id: 'products',
                label: '产品',
                notes: ['同比 +0%'],
                children: [
                  { id: 'iphone', label: 'iPhone', notes: ['同比 +6%'] },
                  { id: 'mac', label: 'MacBook', notes: ['同比 +1%', 'Air、Pro、iMac'] },
                  { id: 'ipad', label: 'iPad', notes: ['同比 (25%)'] },
                  { id: 'wearables', label: '可穿戴设备、家居与配件', notes: ['同比 (11%)'] },
                ],
              },
              { id: 'services', label: '服务', notes: ['同比 +11%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [
                { id: 'product_cost', label: '产品', notes: ['毛利率 39%'] },
                { id: 'service_cost', label: '服务', notes: ['毛利率 73%'] },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 6%'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 6%'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'other_expense', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 46%', '同比 +3 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 34%', '同比 +3 个百分点'] },
            net: { label: '净利润', notes: ['利润率 28%', '同比 +3 个百分点'] },
          },
        },
      },
    },
    {
      key: 'apple-q2-fy23',
      company: 'Apple',
      period: 'Q2 FY23',
      periodNote: 'Ending Mar. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/apple-q2-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 94.8,
        notes: ['(3%) Y/Y'],
        items: [
          {
            id: 'products',
            label: 'Products',
            value: 73.9,
            notes: ['(5%) Y/Y'],
            children: [
              { id: 'iphone', label: 'iPhone', value: 51.3, notes: ['+2% Y/Y'] },
              { id: 'mac', label: 'MacBook', value: 7.2, notes: ['(31%) Y/Y', 'Air, Pro, iMac'] },
              { id: 'ipad', label: 'iPad', value: 6.7, notes: ['(13%) Y/Y'] },
              {
                id: 'wearables',
                label: 'Wearables, Home, and Accessories',
                value: 8.8,
                notes: ['(1%) Y/Y'],
              },
            ],
          },
          { id: 'services', label: 'Services', value: 20.9, notes: ['+5% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 52.9,
          items: [
            { id: 'product_cost', label: 'Products', value: 46.8, notes: ['37% gross margin'] },
            { id: 'service_cost', label: 'Services', value: 6.1, notes: ['71% gross margin'] },
          ],
        },
        operatingExpenses: {
          total: 13.7,
          items: [
            { id: 'rnd', label: 'R&D', value: 7.5, notes: ['8% of revenue'] },
            { id: 'sga', label: 'SG&A', value: 6.2, notes: ['7% of revenue'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 4.2 },
      },
      otherIncome: {
        total: 0.1,
        items: [{ id: 'other_income', label: 'Other', value: 0.1 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 42.0, notes: ['44% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 28.3, notes: ['30% margin', '(1pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 24.2, notes: ['25% margin', '(0pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第二季度',
          periodNote: '截至 2023 年 3 月',
          revenue: {
            notes: ['同比 (3%)'],
            items: [
              {
                id: 'products', label: '产品', notes: ['同比 (5%)'],
                children: [
                  { id: 'iphone', label: 'iPhone', notes: ['同比 +2%'] },
                  { id: 'mac', label: 'MacBook', notes: ['同比 (31%)', 'Air、Pro、iMac'] },
                  { id: 'ipad', label: 'iPad', notes: ['同比 (13%)'] },
                  { id: 'wearables', label: '可穿戴设备、家居与配件', notes: ['同比 (1%)'] },
                ],
              },
              { id: 'services', label: '服务', notes: ['同比 +5%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [
                { id: 'product_cost', label: '产品', notes: ['毛利率 37%'] },
                { id: 'service_cost', label: '服务', notes: ['毛利率 71%'] },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 8%'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 7%'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 44%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 30%', '同比 (1 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 25%', '同比 (0 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
