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
      key: 'nike-q2-fy23',
      company: 'Nike',
      period: 'Q2 FY23',
      periodNote: 'Ending November 2022',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/nike-q2-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 13.3,
        notes: ['+17% Y/Y', 'China -3% Y/Y', 'RoW +21% Y/Y'],
        items: [
          { id: 'footwear', label: 'Footwear', value: 8.5, notes: ['+25% Y/Y'] },
          { id: 'apparel', label: 'Apparel', value: 3.8, notes: ['+4% Y/Y'] },
          { id: 'equipment', label: 'Equipment', value: 0.4, notes: ['+7% Y/Y'] },
          { id: 'converse', label: 'Converse', value: 0.6, notes: ['+5% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 7.6 },
        operatingExpenses: {
          total: 4.1,
          items: [
            { id: 'overhead', label: 'Overhead', value: 3.0 },
            { id: 'demand_creation', label: 'Demand Creation', value: 1.1 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.3 },
      },
      otherIncome: {
        total: 0.1,
        items: [
          { id: 'other', label: 'Other', value: 0.1 },
        ],
      },
      otherExpenses: {
        total: 0.016,
        items: [
          { id: 'interest', label: 'Interest', value: 0.016 },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 5.7, notes: ['43% margin', '(3pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.6, notes: ['12% margin', '(1pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.3, notes: ['10% margin', '(2pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第二季度',
          periodNote: '截至 2022 年 11 月',
          revenue: {
            notes: ['同比 +17%', '中国同比 -3%', '其他地区同比 +21%'],
            items: [
              { id: 'footwear', label: '鞋类', notes: ['同比 +25%'] },
              { id: 'apparel', label: '服装', notes: ['同比 +4%'] },
              { id: 'equipment', label: '装备', notes: ['同比 +7%'] },
              { id: 'converse', label: 'Converse', notes: ['同比 +5%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'overhead', label: '管理费用' },
                { id: 'demand_creation', label: '需求创造费用' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'other', label: '其他' },
            ],
          },
          otherExpenses: {
            items: [
              { id: 'interest', label: '利息' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 43%', '同比 (3 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 12%', '同比 (1 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 10%', '同比 (2 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'nike-q2-fy25', company: 'Nike', period: 'Q2 FY25', periodNote: 'Ending Nov. 2024',
      currency: '$', unit: 'B', decimals: 3, sourceImage: 'input/processed/nike-q2-fy25.png', roundingTolerance: 0.15,
      revenue: {
        total: 12.4, notes: ['(8%) Y/Y', 'China (8%) Y/Y', 'RoW (8%) Y/Y'],
        items: [
          { id: 'footwear', label: 'Footwear', value: 7.7, notes: ['(11%) Y/Y'] },
          { id: 'apparel', label: 'Apparel', value: 3.7, notes: ['(1%) Y/Y'] },
          { id: 'equipment', label: 'Equipment', value: 0.5, notes: ['+14% Y/Y'] },
          { id: 'converse', label: 'Converse', value: 0.4, notes: ['(21%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 7.0 },
        operatingExpenses: { total: 4.0, items: [
          { id: 'overhead', label: 'Overhead', value: 2.9, notes: ['23% margin', '+1pp Y/Y'] },
          { id: 'demand_creation', label: 'Demand Creation', value: 1.1, notes: ['9% margin', '+1pp Y/Y'] },
        ] },
        tax: { id: 'tax', label: 'Tax', value: 0.3 },
      },
      otherIncome: { total: 0.032, items: [
        { id: 'other', label: 'Other', value: 0.008 },
        { id: 'interest', label: 'Interest', value: 0.024 },
      ] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 5.4, notes: ['44% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.4, notes: ['11% margin', '(2pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.2, notes: ['9% margin', '(2pp) Y/Y'] },
      },
      i18n: { zh: {
        period: '2025 财年第二季度', periodNote: '截至 2024 年 11 月',
        revenue: { notes: ['同比 (8%)', '中国同比 (8%)', '其他地区同比 (8%)'], items: [
          { id: 'footwear', label: '鞋类', notes: ['同比 (11%)'] },
          { id: 'apparel', label: '服装', notes: ['同比 (1%)'] },
          { id: 'equipment', label: '装备', notes: ['同比 +14%'] },
          { id: 'converse', label: 'Converse', notes: ['同比 (21%)'] },
        ] },
        costs: {
          costOfRevenue: { label: '销售成本' },
          operatingExpenses: { items: [
            { id: 'overhead', label: '管理费用', notes: ['利润率 23%', '同比 +1 个百分点'] },
            { id: 'demand_creation', label: '需求创造费用', notes: ['利润率 9%', '同比 +1 个百分点'] },
          ] },
          tax: { label: '税费' },
        },
        otherIncome: { items: [{ id: 'other', label: '其他' }, { id: 'interest', label: '利息' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 44%', '同比 (1 个百分点)'] },
          operating: { label: '营业利润', notes: ['利润率 11%', '同比 (2 个百分点)'] },
          net: { label: '净利润', notes: ['利润率 9%', '同比 (2 个百分点)'] },
        },
      } },
    },
    {
      key: 'nike-q2-fy26',
      company: 'Nike',
      period: 'Q2 FY26',
      periodNote: 'Ending Nov. 2025',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/nike-q2-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 12.4,
        notes: ['+1% Y/Y', 'China (17%) Y/Y', 'RoW +3% Y/Y'],
        items: [
          { id: 'footwear', label: 'Footwear', value: 7.7, notes: ['+0% Y/Y'] },
          { id: 'apparel', label: 'Apparel', value: 3.9, notes: ['+4% Y/Y'] },
          { id: 'equipment', label: 'Equipment', value: 0.6, notes: ['+1% Y/Y'] },
          { id: 'converse', label: 'Converse', value: 0.3, notes: ['(30%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 7.4 },
        operatingExpenses: {
          total: 4.0,
          items: [
            { id: 'overhead', label: 'Overhead', value: 2.8, notes: ['22% of revenue', '(2pp) Y/Y'] },
            { id: 'demand_creation', label: 'Demand Creation', value: 1.3, notes: ['10% of revenue', '+2pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.2 },
      },
      otherIncome: {
        total: 0.009,
        items: [{ id: 'interest', label: 'Interest', value: 0.009 }],
      },
      otherExpenses: {
        total: 0.016,
        items: [{ id: 'other', label: 'Other', value: 0.016 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 5.0, notes: ['41% margin', '(3pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.0, notes: ['8% margin', '(3pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.8, notes: ['6% margin', '(3pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2025 年 11 月',
          revenue: {
            notes: ['同比 +1%', '中国同比 (17%)', '其他地区同比 +3%'],
            items: [
              { id: 'footwear', label: '鞋类', notes: ['同比 +0%'] },
              { id: 'apparel', label: '服装', notes: ['同比 +4%'] },
              { id: 'equipment', label: '装备', notes: ['同比 +1%'] },
              { id: 'converse', label: 'Converse', notes: ['同比 (30%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'overhead', label: '管理费用', notes: ['占收入 22%', '同比 (2 个百分点)'] },
                { id: 'demand_creation', label: '需求创造费用', notes: ['占收入 10%', '同比 +2 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'interest', label: '利息' }] },
          otherExpenses: { items: [{ id: 'other', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 41%', '同比 (3 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 8%', '同比 (3 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 6%', '同比 (3 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'nike-q1-fy25',
      company: 'Nike',
      period: 'Q1 FY25',
      periodNote: 'Ending Aug. 2024',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/nike-q1-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 11.6,
        notes: ['(10%) Y/Y', 'China (4%) Y/Y', 'RoW (11%) Y/Y'],
        items: [
          { id: 'footwear', label: 'Footwear', value: 7.5, notes: ['(11%) Y/Y'] },
          { id: 'apparel', label: 'Apparel', value: 3.0, notes: ['(11%) Y/Y'] },
          { id: 'equipment', label: 'Equipment', value: 0.6, notes: ['+14% Y/Y'] },
          { id: 'converse', label: 'Converse', value: 0.5, notes: ['(15%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 6.3 },
        operatingExpenses: {
          total: 4.0,
          items: [
            { id: 'overhead', label: 'Overhead', value: 2.8, notes: ['24% margin', '+1pp Y/Y'] },
            { id: 'demand_creation', label: 'Demand Creation', value: 1.2, notes: ['11% margin', '+2pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.3 },
      },
      otherIncome: {
        total: 0.098,
        items: [
          { id: 'other_income', label: 'Other', value: 0.055, valueText: '$55M' },
          { id: 'interest_income', label: 'Interest', value: 0.043, valueText: '$43M' },
        ],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 5.3, notes: ['45% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.2, notes: ['10% margin', '(2pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.1, notes: ['9% margin', '(2pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第一季度',
          periodNote: '截至 2024 年 8 月',
          revenue: {
            notes: ['同比 (10%)', '中国同比 (4%)', '其他地区同比 (11%)'],
            items: [
              { id: 'footwear', label: '鞋类', notes: ['同比 (11%)'] },
              { id: 'apparel', label: '服装', notes: ['同比 (11%)'] },
              { id: 'equipment', label: '装备', notes: ['同比 +14%'] },
              { id: 'converse', label: 'Converse', notes: ['同比 (15%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'overhead', label: '管理费用', notes: ['利润率 24%', '同比 +1 个百分点'] },
                { id: 'demand_creation', label: '需求创造费用', notes: ['利润率 11%', '同比 +2 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'other_income', label: '其他收益' },
              { id: 'interest_income', label: '利息收入' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 45%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 10%', '同比 (2 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 9%', '同比 (2 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'nike-q1-fy24',
      company: 'Nike',
      period: 'Q1 FY24',
      periodNote: 'Ending August 2023',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/nike-q1-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 12.9,
        notes: ['+2% Y/Y', 'China +5% Y/Y', 'RoW +2% Y/Y'],
        items: [
          { id: 'footwear', label: 'Footwear', value: 8.4, notes: ['+4% Y/Y'] },
          { id: 'apparel', label: 'Apparel', value: 3.4, notes: ['(1%) Y/Y'] },
          { id: 'equipment', label: 'Equipment', value: 0.5, notes: ['+9% Y/Y'] },
          { id: 'converse', label: 'Converse', value: 0.6, notes: ['(8%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 7.2 },
        operatingExpenses: {
          total: 4.1,
          items: [
            { id: 'overhead', label: 'Overhead', value: 3.0 },
            { id: 'demand_creation', label: 'Demand Creation', value: 1.1 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.2 },
      },
      otherIncome: {
        total: 0.044,
        items: [
          { id: 'interest', label: 'Interest', value: 0.034, valueText: '$34M' },
          { id: 'other', label: 'Other', value: 0.010, valueText: '$10M' },
        ],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 5.7, notes: ['44% margin', 'Flat Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.6, notes: ['12% margin', '(1pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.5, notes: ['11% margin', 'Flat Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第一季度',
          periodNote: '截至 2023 年 8 月',
          revenue: {
            notes: ['同比 +2%', '中国同比 +5%', '其他地区同比 +2%'],
            items: [
              { id: 'footwear', label: '鞋类', notes: ['同比 +4%'] },
              { id: 'apparel', label: '服装', notes: ['同比 (1%)'] },
              { id: 'equipment', label: '装备', notes: ['同比 +9%'] },
              { id: 'converse', label: 'Converse', notes: ['同比 (8%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'overhead', label: '管理费用' },
                { id: 'demand_creation', label: '需求创造费用' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'interest', label: '利息' }, { id: 'other', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 44%', '同比持平'] },
            operating: { label: '营业利润', notes: ['利润率 12%', '同比 (1 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 11%', '同比持平'] },
          },
        },
      },
    },
    {
      key: 'nike-q2-fy24',
      company: 'Nike',
      period: 'Q2 FY24',
      periodNote: 'Ending Nov. 2023',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/nike-q2-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 13.4,
        notes: ['+1% Y/Y', 'China +4% Y/Y', 'RoW +0% Y/Y'],
        items: [
          { id: 'footwear', label: 'Footwear', value: 8.6, notes: ['+1% Y/Y'] },
          { id: 'apparel', label: 'Apparel', value: 3.8, notes: ['(1%) Y/Y'] },
          { id: 'equipment', label: 'Equipment', value: 0.5, notes: ['+17% Y/Y'] },
          { id: 'converse', label: 'Converse', value: 0.5, notes: ['(13%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 7.4 },
        operatingExpenses: {
          total: 4.1,
          items: [
            { id: 'overhead', label: 'Overhead', value: 3.0 },
            { id: 'demand_creation', label: 'Demand Creation', value: 1.1 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.3 },
      },
      otherIncome: {
        total: 0.097,
        items: [
          { id: 'interest', label: 'Interest', value: 0.022, valueText: '$22M' },
          { id: 'other', label: 'Other', value: 0.075, valueText: '$75M' },
        ],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 6.0, notes: ['45% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.8, notes: ['14% margin', '+2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.6, notes: ['12% margin', '+2pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第二季度',
          periodNote: '截至 2023 年 11 月',
          revenue: {
            notes: ['同比 +1%', '中国同比 +4%', '其他地区同比 +0%'],
            items: [
              { id: 'footwear', label: '鞋类', notes: ['同比 +1%'] },
              { id: 'apparel', label: '服装', notes: ['同比 (1%)'] },
              { id: 'equipment', label: '装备', notes: ['同比 +17%'] },
              { id: 'converse', label: 'Converse', notes: ['同比 (13%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'overhead', label: '管理费用' },
                { id: 'demand_creation', label: '需求创造费用' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'interest', label: '利息' },
              { id: 'other', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 45%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 14%', '同比 +2 个百分点'] },
            net: { label: '净利润', notes: ['利润率 12%', '同比 +2 个百分点'] },
          },
        },
      },
    },
    {
      key: 'nike-q1-fy26',
      company: 'Nike',
      period: 'Q1 FY26',
      periodNote: 'Ending Aug. 2025',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/nike-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 11.7,
        notes: ['+1% Y/Y', 'China (9%) Y/Y', 'RoW +3% Y/Y'],
        items: [
          { id: 'footwear', label: 'Footwear', value: 7.4, notes: ['(1%) Y/Y'] },
          { id: 'apparel', label: 'Apparel', value: 3.3, notes: ['+9% Y/Y'] },
          { id: 'equipment', label: 'Equipment', value: 0.6, notes: ['+4% Y/Y'] },
          { id: 'converse', label: 'Converse', value: 0.4, notes: ['(25%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 6.8 },
        operatingExpenses: {
          total: 4.0,
          items: [
            { id: 'overhead', label: 'Overhead', value: 2.8, notes: ['24% of revenue', '(2pp) Y/Y'] },
            { id: 'demand_creation', label: 'Demand Creation', value: 1.2, notes: ['10% of revenue', '+1pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.2 },
      },
      otherIncome: {
        total: 0.018,
        items: [{ id: 'interest', label: 'Interest', value: 0.018, valueText: '$18M' }],
      },
      otherExpenses: {
        total: 0.023,
        items: [{ id: 'other', label: 'Other', value: 0.023, valueText: '($23M)' }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 4.9, notes: ['42% margin', '(3pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.9, notes: ['8% margin', '(3pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.7, notes: ['6% margin', '(3pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2025 年 8 月',
          revenue: {
            notes: ['同比 +1%', '中国同比 (9%)', '其他地区同比 +3%'],
            items: [
              { id: 'footwear', label: '鞋类', notes: ['同比 (1%)'] },
              { id: 'apparel', label: '服装', notes: ['同比 +9%'] },
              { id: 'equipment', label: '装备', notes: ['同比 +4%'] },
              { id: 'converse', label: 'Converse', notes: ['同比 (25%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'overhead', label: '管理费用', notes: ['占收入 24%', '同比 (2 个百分点)'] },
                { id: 'demand_creation', label: '需求创造费用', notes: ['占收入 10%', '同比 +1 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'interest', label: '利息' }] },
          otherExpenses: { items: [{ id: 'other', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 42%', '同比 (3 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 8%', '同比 (3 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 6%', '同比 (3 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'nike-q4-fy26',
      company: 'Nike',
      period: 'Q4 FY26',
      periodNote: 'Ending May 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/nike-q4-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 11.0,
        notes: ['(1%) Y/Y', 'China (12%) Y/Y', 'RoW +1% Y/Y'],
        items: [
          { id: 'footwear', label: 'Footwear', value: 7.1, notes: ['(1%) Y/Y'] },
          { id: 'apparel', label: 'Apparel', value: 3.0, notes: ['+1% Y/Y'] },
          { id: 'equipment', label: 'Equipment', value: 0.6, notes: ['(3%) Y/Y'] },
          { id: 'converse', label: 'Converse', value: 0.2, notes: ['(32%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 5.6 },
        operatingExpenses: {
          total: 4.1,
          items: [
            { id: 'overhead', label: 'Overhead', value: 2.9, notes: ['26% of revenue', '+0pp Y/Y'] },
            { id: 'demand_creation', label: 'Demand Creation', value: 1.2, notes: ['11% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.3 },
      },
      otherIncome: {
        total: 0.0,
        items: [
          { id: 'other', label: 'Other', value: 0.0, notes: ['Rounds to $0.0B in the source image'] },
        ],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 5.4, notes: ['49% margin', '+9pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.3, notes: ['12% margin', '+9pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.1, notes: ['10% margin', '+8pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第四季度',
          periodNote: '截至 2026 年 5 月',
          revenue: {
            notes: ['同比 (1%)', '中国同比 (12%)', '其他地区同比 +1%'],
            items: [
              { id: 'footwear', label: '鞋类', notes: ['同比 (1%)'] },
              { id: 'apparel', label: '服装', notes: ['同比 +1%'] },
              { id: 'equipment', label: '装备', notes: ['同比 (3%)'] },
              { id: 'converse', label: 'Converse', notes: ['同比 (32%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'overhead', label: '管理费用', notes: ['占收入 26%', '同比 +0 个百分点'] },
                { id: 'demand_creation', label: '需求创造费用', notes: ['占收入 11%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'other', label: '其他', notes: ['源图中四舍五入为 $0.0B'] },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 49%', '同比 +9 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 12%', '同比 +9 个百分点'] },
            net: { label: '净利润', notes: ['利润率 10%', '同比 +8 个百分点'] },
          },
        },
      },
    },
    {
      key: 'nike-q3-fy26',
      company: 'Nike',
      period: 'Q3 FY26',
      periodNote: 'Ending Feb. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/nike-q3-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 11.3,
        notes: ['+0% Y/Y', 'China (7%) Y/Y', 'RoW +1% Y/Y'],
        items: [
          { id: 'footwear', label: 'Footwear', value: 7.4, notes: ['+2% Y/Y'] },
          { id: 'apparel', label: 'Apparel', value: 3.2, notes: ['(0%) Y/Y'] },
          { id: 'equipment', label: 'Equipment', value: 0.5, notes: ['(2%) Y/Y'] },
          { id: 'converse', label: 'Converse', value: 0.3, notes: ['(30%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 6.7 },
        operatingExpenses: {
          total: 4.0,
          items: [
            { id: 'overhead', label: 'Overhead', value: 2.9, notes: ['26% of revenue', '+1pp Y/Y'] },
            { id: 'demand_creation', label: 'Demand Creation', value: 1.1, notes: ['10% of revenue', '+0pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.1 },
      },
      otherIncome: {
        total: 0.1,
        items: [
          { id: 'other', label: 'Other', value: 0.1 },
        ],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 4.5, notes: ['40% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.6, notes: ['5% margin', '(2pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.5, notes: ['5% margin', '(2pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第三季度',
          periodNote: '截至 2026 年 2 月',
          revenue: {
            notes: ['同比 +0%', '中国同比 (7%)', '其他地区同比 +1%'],
            items: [
              { id: 'footwear', label: '鞋类', notes: ['同比 +2%'] },
              { id: 'apparel', label: '服装', notes: ['同比 (0%)'] },
              { id: 'equipment', label: '装备', notes: ['同比 (2%)'] },
              { id: 'converse', label: 'Converse', notes: ['同比 (30%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'overhead', label: '管理费用', notes: ['占收入 26%', '同比 +1 个百分点'] },
                { id: 'demand_creation', label: '需求创造费用', notes: ['占收入 10%', '同比 +0 个百分点'] },
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
            gross: { label: '毛利润', notes: ['利润率 40%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 5%', '同比 (2 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 5%', '同比 (2 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'nike-q4-fy24',
      company: 'Nike',
      period: 'Q4 FY24',
      periodNote: 'Ending May 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/nike-q4-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 12.6,
        notes: ['(2%) Y/Y', 'China +3% Y/Y', 'RoW (2%) Y/Y'],
        items: [
          { id: 'footwear', label: 'Footwear', value: 8.2, notes: ['(4%) Y/Y'] },
          { id: 'apparel', label: 'Apparel', value: 3.3, notes: ['+3% Y/Y'] },
          { id: 'equipment', label: 'Equipment', value: 0.6, notes: ['+34% Y/Y'] },
          { id: 'converse', label: 'Converse', value: 0.5, notes: ['(18%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 7.0 },
        operatingExpenses: {
          total: 4.1,
          items: [
            { id: 'overhead', label: 'Overhead', value: 3.0 },
            { id: 'demand_creation', label: 'Demand Creation', value: 1.1 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.2 },
      },
      otherIncome: {
        total: 0.2,
        items: [
          { id: 'other', label: 'Other', value: 0.1 },
          { id: 'interest', label: 'Interest', value: 0.1 },
        ],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 5.6, notes: ['45% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.5, notes: ['12% margin', '+3pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.5, notes: ['12% margin', '+4pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第四季度',
          periodNote: '截至 2024 年 5 月',
          revenue: {
            notes: ['同比 (2%)', '中国同比 +3%', '其他地区同比 (2%)'],
            items: [
              { id: 'footwear', label: '鞋类', notes: ['同比 (4%)'] },
              { id: 'apparel', label: '服装', notes: ['同比 +3%'] },
              { id: 'equipment', label: '装备', notes: ['同比 +34%'] },
              { id: 'converse', label: 'Converse', notes: ['同比 (18%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'overhead', label: '管理费用' },
                { id: 'demand_creation', label: '需求创造费用' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'other', label: '其他' },
              { id: 'interest', label: '利息' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 45%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 12%', '同比 +3 个百分点'] },
            net: { label: '净利润', notes: ['利润率 12%', '同比 +4 个百分点'] },
          },
        },
      },
    },
    {
      key: 'nike-q3-fy25',
      company: 'Nike',
      period: 'Q3 FY25',
      periodNote: 'Ending Feb. 2025',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/nike-q3-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 11.3,
        notes: ['(9%) Y/Y', 'China (17%) Y/Y', 'RoW (8%) Y/Y'],
        items: [
          { id: 'footwear', label: 'Footwear', value: 7.2, notes: ['(12%) Y/Y'] },
          { id: 'apparel', label: 'Apparel', value: 3.2, notes: ['(3%) Y/Y'] },
          { id: 'equipment', label: 'Equipment', value: 0.5, notes: ['(2%) Y/Y'] },
          { id: 'converse', label: 'Converse', value: 0.4, notes: ['(20%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 6.6 },
        operatingExpenses: {
          total: 3.9,
          items: [
            { id: 'overhead', label: 'Overhead', value: 2.8, notes: ['25% of revenue', '+0pp Y/Y'] },
            { id: 'demand_creation', label: 'Demand Creation', value: 1.1, notes: ['10% of revenue', '+1pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.05 },
      },
      otherIncome: {
        total: 0.056,
        items: [
          { id: 'other', label: 'Other', value: 0.018 },
          { id: 'interest', label: 'Interest', value: 0.038 },
        ],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 4.7, notes: ['41% margin', '(3pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.8, notes: ['7% margin', '(4pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.8, notes: ['7% margin', '(2pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 2 月',
          revenue: {
            notes: ['同比 (9%)', '中国同比 (17%)', '其他地区同比 (8%)'],
            items: [
              { id: 'footwear', label: '鞋类', notes: ['同比 (12%)'] },
              { id: 'apparel', label: '服装', notes: ['同比 (3%)'] },
              { id: 'equipment', label: '装备', notes: ['同比 (2%)'] },
              { id: 'converse', label: 'Converse', notes: ['同比 (20%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'overhead', label: '管理费用', notes: ['占收入 25%', '同比 +0 个百分点'] },
                { id: 'demand_creation', label: '需求创造费用', notes: ['占收入 10%', '同比 +1 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other', label: '其他' }, { id: 'interest', label: '利息收入' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 41%', '同比 (3 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 7%', '同比 (4 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 7%', '同比 (2 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'nike-q3-fy24',
      company: 'Nike',
      period: 'Q3 FY24',
      periodNote: 'Ending Feb. 2024',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/nike-q3-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 12.4,
        notes: ['+0% Y/Y', 'China +5% Y/Y', 'RoW (0%) Y/Y'],
        items: [
          { id: 'footwear', label: 'Footwear', value: 8.2, notes: ['+2% Y/Y'] },
          { id: 'apparel', label: 'Apparel', value: 3.3, notes: ['(3%) Y/Y'] },
          { id: 'equipment', label: 'Equipment', value: 0.5, notes: ['+21% Y/Y'] },
          { id: 'converse', label: 'Converse', value: 0.5, notes: ['(21%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 6.9 },
        operatingExpenses: {
          total: 4.2,
          items: [
            { id: 'overhead', label: 'Overhead', value: 3.2 },
            { id: 'demand_creation', label: 'Demand Creation', value: 1.0 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.2 },
      },
      otherIncome: {
        total: 0.068,
        items: [
          { id: 'interest', label: 'Interest', value: 0.052, notes: ['$52M'] },
          { id: 'other', label: 'Other', value: 0.016, notes: ['$16M'] },
        ],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 5.6, notes: ['45% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.3, notes: ['11% margin', '(1pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.2, notes: ['9% margin', '(1pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第三季度',
          periodNote: '截至 2024 年 2 月',
          revenue: {
            notes: ['同比 +0%', '中国同比 +5%', '其他地区同比 (0%)'],
            items: [
              { id: 'footwear', label: '鞋类', notes: ['同比 +2%'] },
              { id: 'apparel', label: '服装', notes: ['同比 (3%)'] },
              { id: 'equipment', label: '装备', notes: ['同比 +21%'] },
              { id: 'converse', label: 'Converse', notes: ['同比 (21%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'overhead', label: '管理费用' },
                { id: 'demand_creation', label: '需求创造费用' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'interest', label: '利息收入', notes: ['$52M'] },
              { id: 'other', label: '其他', notes: ['$16M'] },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 45%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 11%', '同比 (1 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 9%', '同比 (1 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'nike-q4-fy25',
      company: 'Nike',
      period: 'Q4 FY25',
      periodNote: 'Ending May 2025',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/nike-q4-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 11.1,
        notes: ['(12%) Y/Y', 'China (21%) Y/Y', 'RoW (10%) Y/Y'],
        items: [
          { id: 'footwear', label: 'Footwear', value: 7.2, notes: ['(13%) Y/Y'] },
          { id: 'apparel', label: 'Apparel', value: 3.0, notes: ['(10%) Y/Y'] },
          { id: 'equipment', label: 'Equipment', value: 0.6, notes: ['(2%) Y/Y'] },
          { id: 'converse', label: 'Converse', value: 0.3, notes: ['(26%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 6.6 },
        operatingExpenses: {
          total: 4.1,
          items: [
            { id: 'overhead', label: 'Overhead', value: 2.9, notes: ['26% of revenue', '+2pp Y/Y'] },
            { id: 'demand_creation', label: 'Demand Creation', value: 1.3, notes: ['11% of revenue', '+3pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.1 },
      },
      otherIncome: {
        total: 0.022,
        items: [{ id: 'interest', label: 'Interest', value: 0.022, notes: ['$22M'] }],
      },
      otherExpenses: {
        total: 0.025,
        items: [{ id: 'other_expense', label: 'Other', value: 0.025, notes: ['($25M)'] }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 4.5, notes: ['40% margin', '(4pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.3, notes: ['3% margin', '(9pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.2, notes: ['2% margin', '(10pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 5 月',
          revenue: {
            notes: ['同比 (12%)', '中国同比 (21%)', '其他地区同比 (10%)'],
            items: [
              { id: 'footwear', label: '鞋类', notes: ['同比 (13%)'] },
              { id: 'apparel', label: '服装', notes: ['同比 (10%)'] },
              { id: 'equipment', label: '装备', notes: ['同比 (2%)'] },
              { id: 'converse', label: 'Converse', notes: ['同比 (26%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'overhead', label: '管理费用', notes: ['占收入 26%', '同比 +2 个百分点'] },
                { id: 'demand_creation', label: '需求创造费用', notes: ['占收入 11%', '同比 +3 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'interest', label: '利息收入', notes: ['$22M'] }],
          },
          otherExpenses: {
            items: [{ id: 'other_expense', label: '其他', notes: ['($25M)'] }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 40%', '同比 (4 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 3%', '同比 (9 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 2%', '同比 (10 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'nike-q3-fy23',
      company: 'Nike',
      period: 'Q3 FY23',
      periodNote: 'Ending Feb. 2023',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/nike-q3-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 12.4,
        notes: ['+14% Y/Y', 'China (8%) Y/Y', 'RoW +19% Y/Y'],
        items: [
          { id: 'footwear', label: 'Footwear', value: 8.0, notes: ['+20% Y/Y'] },
          { id: 'apparel', label: 'Apparel', value: 3.4, notes: ['+5% Y/Y'] },
          { id: 'equipment', label: 'Equipment', value: 0.4, notes: ['+3% Y/Y'] },
          { id: 'converse', label: 'Converse', value: 0.6, notes: ['+8% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 7.0 },
        operatingExpenses: {
          total: 4.0,
          items: [
            { id: 'overhead', label: 'Overhead', value: 3.0 },
            { id: 'demand_creation', label: 'Demand Creation', value: 0.9 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.2 },
      },
      otherIncome: {
        total: 0.065,
        items: [
          { id: 'other', label: 'Other', value: 0.058, valueText: '$58M' },
          { id: 'interest', label: 'Interest', value: 0.007, valueText: '$7M' },
        ],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 5.4, notes: ['43% margin', '(3pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.4, notes: ['15% margin', '(4pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.2, notes: ['10% margin', '(3pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第三季度',
          periodNote: '截至 2023 年 2 月',
          revenue: {
            notes: ['同比 +14%', '中国同比 (8%)', '其他地区同比 +19%'],
            items: [
              { id: 'footwear', label: '鞋类', notes: ['同比 +20%'] },
              { id: 'apparel', label: '服装', notes: ['同比 +5%'] },
              { id: 'equipment', label: '装备', notes: ['同比 +3%'] },
              { id: 'converse', label: 'Converse', notes: ['同比 +8%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'overhead', label: '管理费用' },
                { id: 'demand_creation', label: '需求创造费用' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'other', label: '其他' },
              { id: 'interest', label: '利息' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 43%', '同比 (3 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 15%', '同比 (4 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 10%', '同比 (3 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'nike-q4-fy23',
      company: 'Nike',
      period: 'Q4 FY23',
      periodNote: 'Ending May 2023',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/nike-q4-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 12.8,
        notes: ['+5% Y/Y', 'China +16% Y/Y', 'RoW +3% Y/Y'],
        items: [
          { id: 'footwear', label: 'Footwear', value: 8.5, notes: ['+7% Y/Y'] },
          { id: 'apparel', label: 'Apparel', value: 3.2, notes: ['+0% Y/Y'] },
          { id: 'equipment', label: 'Equipment', value: 0.4, notes: ['+11% Y/Y'] },
          { id: 'converse', label: 'Converse', value: 0.6, notes: ['(1%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 7.2 },
        operatingExpenses: {
          total: 4.4,
          items: [
            { id: 'overhead', label: 'Overhead', value: 3.3 },
            { id: 'demand_creation', label: 'Demand Creation', value: 1.1 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.2 },
      },
      otherIncome: {
        total: 0.028,
        items: [{ id: 'interest', label: 'Interest', value: 0.028, valueText: '$28M' }],
      },
      otherExpenses: {
        total: 0.003,
        items: [{ id: 'other', label: 'Other', value: 0.003, valueText: '($3M)' }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 5.6, notes: ['44% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.2, notes: ['10% margin', '(2pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.0, notes: ['8% margin', '(4pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第四季度',
          periodNote: '截至 2023 年 5 月',
          revenue: {
            notes: ['同比 +5%', '中国同比 +16%', '其他地区同比 +3%'],
            items: [
              { id: 'footwear', label: '鞋类', notes: ['同比 +7%'] },
              { id: 'apparel', label: '服装', notes: ['同比 +0%'] },
              { id: 'equipment', label: '装备', notes: ['同比 +11%'] },
              { id: 'converse', label: 'Converse', notes: ['同比 (1%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'overhead', label: '管理费用' },
                { id: 'demand_creation', label: '需求创造费用' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'interest', label: '利息收入' }],
          },
          otherExpenses: {
            items: [{ id: 'other', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 44%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 10%', '同比 (2 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 8%', '同比 (4 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
