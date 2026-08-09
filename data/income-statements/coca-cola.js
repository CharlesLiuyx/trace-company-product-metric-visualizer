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
      key: 'coca-cola-q1-fy24',
      company: 'Coca-Cola',
      period: 'Q1 FY24',
      periodNote: 'Ending Mar. 2024',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/coca-cola-q1-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 11.3,
        notes: ['+3% Y/Y'],
        items: [
          { id: 'emea', label: 'EMEA', value: 2.0, notes: ['(3%) Y/Y'] },
          { id: 'latam', label: 'LATAM', value: 1.5, notes: ['+10% Y/Y'] },
          { id: 'ucan', label: 'UCAN', value: 4.2, notes: ['+7% Y/Y'] },
          { id: 'apac', label: 'APAC', value: 1.5, notes: ['+7% Y/Y'] },
          { id: 'global_ventures', label: 'Global ventures', value: 0.7, notes: ['+3% Y/Y'] },
          { id: 'bottling_investments', label: 'Bottling investments', value: 1.8, notes: ['(7%) Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 0.027 },
          {
            id: 'eliminations',
            label: 'Eliminations',
            value: -0.4,
            notes: ['Inter-segment eliminations shown in the source chart as a separate red outflow.'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 4.2 },
        operatingExpenses: {
          total: 4.9,
          items: [
            { id: 'sga', label: 'SG&A', value: 3.4, notes: ['30% of revenue'] },
            { id: 'other_opex', label: 'Other', value: 1.6, notes: ['14% of revenue', '+13pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.7 },
      },
      otherIncome: {
        total: 1.9,
        items: [{ id: 'other_income', label: 'Other', value: 1.9 }],
      },
      otherExpenses: {
        total: 0.1,
        items: [
          {
            id: 'interest',
            label: 'Interest',
            value: 0.1,
            notes: ['Non-operating interest bridging operating profit to net profit.'],
          },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 7.1, notes: ['63% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.1, notes: ['19% margin', '(12pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 3.2, notes: ['28% margin', '(0pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第一季度',
          periodNote: '截至 2024 年 3 月',
          revenue: {
            notes: ['同比 +3%'],
            items: [
              { id: 'emea', label: 'EMEA', notes: ['同比 (3%)'] },
              { id: 'latam', label: 'LATAM', notes: ['同比 +10%'] },
              { id: 'ucan', label: 'UCAN', notes: ['同比 +7%'] },
              { id: 'apac', label: 'APAC', notes: ['同比 +7%'] },
              { id: 'global_ventures', label: '全球创新业务', notes: ['同比 +3%'] },
              { id: 'bottling_investments', label: '装瓶投资业务', notes: ['同比 (7%)'] },
              { id: 'other_revenue', label: '其他' },
              { id: 'eliminations', label: '抵销', notes: ['来源图中作为单独的红色流出列示的分部间抵销。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售及管理费用', notes: ['占收入 30%'] },
                { id: 'other_opex', label: '其他', notes: ['占收入 14%', '同比 +13 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
          otherExpenses: {
            items: [{ id: 'interest', label: '利息', notes: ['连接营业利润与净利润的非经营性利息。'] }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 63%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 19%', '同比 (12 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 28%', '同比 (0 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'coca-cola-q2-fy25', company: 'Coca-Cola', period: 'Q2 FY25',
      periodNote: 'Ending Jun. 2025', currency: '$', unit: 'B', decimals: 3,
      sourceImage: 'input/processed/coca-cola-q2-fy25.png', roundingTolerance: 0.15,
      revenue: {
        total: 12.5, notes: ['+1% Y/Y'],
        items: [
          { id: 'emea', label: 'EMEA', value: 3.2, notes: ['+5% Y/Y'] },
          { id: 'latam', label: 'LATAM', value: 1.6, notes: ['(4%) Y/Y'] },
          { id: 'ucan', label: 'UCAN', value: 5.0, notes: ['+3% Y/Y'] },
          { id: 'apac', label: 'APAC', value: 1.6, notes: ['+3% Y/Y'] },
          { id: 'bottling_investments', label: 'Bottling investments', value: 1.4, notes: ['(8%) Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 0.039 },
          { id: 'eliminations', label: 'Eliminations', value: -0.3, notes: ['Inter-segment eliminations shown in the source chart as a separate red outflow.'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 4.7 },
        operatingExpenses: {
          total: 3.5,
          items: [
            { id: 'sga', label: 'SG&A', value: 3.5, notes: ['28% of revenue', '(1pp) Y/Y'] },
            { id: 'other_opex', label: 'Other', value: 0.1, notes: ['1% of revenue', '(11pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 1.0 },
      },
      otherIncome: { total: 0.8, items: [{ id: 'other_income', label: 'Other', value: 0.8 }] },
      otherExpenses: {
        total: 0.3,
        items: [{ id: 'interest', label: 'Interest', value: 0.3, notes: ['Non-operating interest bridging operating profit to net profit.'] }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 7.8, notes: ['62% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 4.3, notes: ['34% margin', '+13pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 3.8, notes: ['30% margin', '+11pp Y/Y'] },
      },
      i18n: { zh: {
        period: '2025 财年第二季度', periodNote: '截至 2025 年 6 月',
        revenue: {
          notes: ['同比 +1%'],
          items: [
            { id: 'emea', label: 'EMEA', notes: ['同比 +5%'] },
            { id: 'latam', label: 'LATAM', notes: ['同比 (4%)'] },
            { id: 'ucan', label: 'UCAN', notes: ['同比 +3%'] },
            { id: 'apac', label: 'APAC', notes: ['同比 +3%'] },
            { id: 'bottling_investments', label: '装瓶投资业务', notes: ['同比 (8%)'] },
            { id: 'other_revenue', label: '其他' },
            { id: 'eliminations', label: '抵销', notes: ['来源图中作为单独的红色流出列示的分部间抵销。'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: { items: [
            { id: 'sga', label: '销售及管理费用', notes: ['占收入 28%', '同比 (1 个百分点)'] },
            { id: 'other_opex', label: '其他', notes: ['占收入 1%', '同比 (11 个百分点)'] },
          ] },
          tax: { label: '税费' },
        },
        otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
        otherExpenses: { items: [{ id: 'interest', label: '利息', notes: ['连接营业利润与净利润的非经营性利息。'] }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 62%', '同比 +1 个百分点'] },
          operating: { label: '营业利润', notes: ['利润率 34%', '同比 +13 个百分点'] },
          net: { label: '净利润', notes: ['利润率 30%', '同比 +11 个百分点'] },
        },
      } },
    },
    {
      key: 'coca-cola-q1-fy25', company: 'Coca-Cola', period: 'Q1 FY25',
      periodNote: 'Ending Mar. 2025', currency: '$', unit: 'B', decimals: 3,
      sourceImage: 'input/processed/coca-cola-q1-fy25.png', roundingTolerance: 0.2,
      revenue: {
        total: 11.1, notes: ['(2%) Y/Y'],
        items: [
          { id: 'emea', label: 'EMEA', value: 2.7, notes: ['+1% Y/Y'] },
          { id: 'latam', label: 'LATAM', value: 1.5, notes: ['(3%) Y/Y'] },
          { id: 'ucan', label: 'UCAN', value: 4.4, notes: ['+3% Y/Y'] },
          { id: 'apac', label: 'APAC', value: 1.4, notes: ['(4%) Y/Y'] },
          { id: 'bottling_investments', label: 'Bottling investments', value: 1.5, notes: ['(19%) Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 0.026 },
          { id: 'eliminations', label: 'Eliminations', value: -0.3, notes: ['Inter-segment eliminations shown as a separate red outflow.'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 4.2 },
        operatingExpenses: {
          total: 3.3,
          items: [
            { id: 'sga', label: 'SG&A', value: 3.2, notes: ['29% of revenue', '(1pp) Y/Y'] },
            { id: 'other_opex', label: 'Other', value: 0.1, notes: ['1% of revenue', '(13pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.7 },
      },
      otherIncome: { total: 0.6, items: [{ id: 'other_income', label: 'Other', value: 0.6 }] },
      otherExpenses: {
        total: 0.2,
        items: [{ id: 'interest', label: 'Interest', value: 0.2, notes: ['Non-operating interest bridging operating profit to net profit.'] }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 7.0, notes: ['63% margin', '+0pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 3.7, notes: ['33% margin', '+14pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 3.3, notes: ['30% margin', '+2pp Y/Y'] },
      },
      i18n: { zh: {
        period: '2025 财年第一季度', periodNote: '截至 2025 年 3 月',
        revenue: {
          notes: ['同比 (2%)'],
          items: [
            { id: 'emea', label: 'EMEA', notes: ['同比 +1%'] },
            { id: 'latam', label: 'LATAM', notes: ['同比 (3%)'] },
            { id: 'ucan', label: 'UCAN', notes: ['同比 +3%'] },
            { id: 'apac', label: 'APAC', notes: ['同比 (4%)'] },
            { id: 'bottling_investments', label: '装瓶投资业务', notes: ['同比 (19%)'] },
            { id: 'other_revenue', label: '其他' },
            { id: 'eliminations', label: '抵销', notes: ['来源图中作为单独的红色流出列示的分部间抵销。'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: { items: [
            { id: 'sga', label: '销售及管理费用', notes: ['占收入 29%', '同比 (1 个百分点)'] },
            { id: 'other_opex', label: '其他', notes: ['占收入 1%', '同比 (13 个百分点)'] },
          ] },
          tax: { label: '税费' },
        },
        otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
        otherExpenses: { items: [{ id: 'interest', label: '利息', notes: ['连接营业利润与净利润的非经营性利息。'] }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 63%', '同比 +0 个百分点'] },
          operating: { label: '营业利润', notes: ['利润率 33%', '同比 +14 个百分点'] },
          net: { label: '净利润', notes: ['利润率 30%', '同比 +2 个百分点'] },
        },
      } },
    },
    {
      key: 'coca-cola-q4-fy24',
      company: 'Coca-Cola',
      period: 'Q4 FY24',
      periodNote: 'Ending Dec. 2024',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/coca-cola-q4-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 11.5,
        notes: ['+6% Y/Y'],
        items: [
          { id: 'emea', label: 'EMEA', value: 1.8, notes: ['+6% Y/Y'] },
          { id: 'latam', label: 'LATAM', value: 1.6, notes: ['+10% Y/Y'] },
          { id: 'ucan', label: 'UCAN', value: 4.7, notes: ['+16% Y/Y'] },
          { id: 'apac', label: 'APAC', value: 1.2, notes: ['+9% Y/Y'] },
          { id: 'global_ventures', label: 'Global ventures', value: 0.8, notes: ['+5% Y/Y'] },
          { id: 'bottling_investments', label: 'Bottling investments', value: 1.6, notes: ['(23%) Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 0.022 },
          {
            id: 'eliminations',
            label: 'Eliminations',
            value: -0.2,
            notes: ['Inter-segment eliminations shown in the source chart as a separate red outflow.'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of goods sold', value: 4.6 },
        operatingExpenses: {
          total: 4.2,
          items: [
            { id: 'sga', label: 'SG&A', value: 4.0, notes: ['35% of revenue'] },
            { id: 'other_opex', label: 'Other', value: 0.2, notes: ['2% of revenue'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.6 },
      },
      otherIncome: {
        total: 0.3,
        items: [{ id: 'other_income', label: 'Other', value: 0.3 }],
      },
      otherExpenses: {
        total: 0.2,
        items: [{
          id: 'interest',
          label: 'Interest',
          value: 0.2,
          notes: ['Non-operating interest bridging operating profit to net profit.'],
        }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 6.9, notes: ['60% margin', '+3pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.7, notes: ['23% margin', '+3pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.2, notes: ['19% margin', '+1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第四季度',
          periodNote: '截至 2024 年 12 月',
          revenue: {
            notes: ['同比 +6%'],
            items: [
              { id: 'emea', label: 'EMEA', notes: ['同比 +6%'] },
              { id: 'latam', label: 'LATAM', notes: ['同比 +10%'] },
              { id: 'ucan', label: 'UCAN', notes: ['同比 +16%'] },
              { id: 'apac', label: 'APAC', notes: ['同比 +9%'] },
              { id: 'global_ventures', label: '全球创投业务', notes: ['同比 +5%'] },
              { id: 'bottling_investments', label: '装瓶投资业务', notes: ['同比 (23%)'] },
              { id: 'other_revenue', label: '其他' },
              { id: 'eliminations', label: '抵销', notes: ['来源图中作为单独的红色流出列示的分部间抵销。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售及管理费用', notes: ['占收入 35%'] },
                { id: 'other_opex', label: '其他', notes: ['占收入 2%'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
          otherExpenses: {
            items: [{ id: 'interest', label: '利息', notes: ['连接营业利润与净利润的非经营性利息。'] }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 60%', '同比 +3 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 23%', '同比 +3 个百分点'] },
            net: { label: '净利润', notes: ['利润率 19%', '同比 +1 个百分点'] },
          },
        },
      },
    },
    {
      key: 'coca-cola-q2-fy24',
      company: 'Coca-Cola',
      period: 'Q2 FY24',
      periodNote: 'Ending Jun. 2024',
      currency: '$',
      unit: 'B',
      decimals: 2,
      sourceImage: 'input/processed/coca-cola-q2-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 12.4,
        notes: ['+3% Y/Y'],
        items: [
          { id: 'emea', label: 'EMEA', value: 2.3, notes: ['+7% Y/Y'] },
          { id: 'latam', label: 'LATAM', value: 1.7, notes: ['+20% Y/Y'] },
          { id: 'ucan', label: 'UCAN', value: 4.8, notes: ['+10% Y/Y'] },
          { id: 'apac', label: 'APAC', value: 1.5, notes: ['(4%) Y/Y'] },
          { id: 'global_ventures', label: 'Global ventures', value: 0.8, notes: ['+0% Y/Y'] },
          { id: 'bottling_investments', label: 'Bottling investments', value: 1.5, notes: ['(25%) Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 0.03 },
          {
            id: 'eliminations',
            label: 'Eliminations',
            value: -0.3,
            notes: ['Inter-segment eliminations shown in the Source as a separate red outflow.'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 4.8 },
        operatingExpenses: {
          total: 4.9,
          items: [
            { id: 'sga', label: 'SG&A', value: 3.5, notes: ['29% of revenue'] },
            { id: 'other_opex', label: 'Other', value: 1.4, notes: ['11% of revenue'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.6 },
      },
      otherIncome: {
        total: 0.5,
        items: [{ id: 'other_income', label: 'Other', value: 0.5 }],
      },
      otherExpenses: {
        total: 0.1,
        items: [
          { id: 'interest', label: 'Interest', value: 0.1, notes: ['Non-operating interest bridging operating profit to net profit.'] },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 7.6, notes: ['61% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.6, notes: ['21% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.4, notes: ['19% margin', '(2pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第二季度',
          periodNote: '截至 2024 年 6 月',
          revenue: {
            notes: ['同比 +3%'],
            items: [
              { id: 'emea', label: 'EMEA', notes: ['同比 +7%'] },
              { id: 'latam', label: 'LATAM', notes: ['同比 +20%'] },
              { id: 'ucan', label: 'UCAN', notes: ['同比 +10%'] },
              { id: 'apac', label: 'APAC', notes: ['同比 (4%)'] },
              { id: 'global_ventures', label: '全球创投业务', notes: ['同比 +0%'] },
              { id: 'bottling_investments', label: '装瓶投资业务', notes: ['同比 (25%)'] },
              { id: 'other_revenue', label: '其他' },
              { id: 'eliminations', label: '抵销', notes: ['来源图中作为单独红色流出列示的分部间抵销。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售及管理费用', notes: ['占收入 29%'] },
                { id: 'other_opex', label: '其他', notes: ['占收入 11%'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
          otherExpenses: {
            items: [{ id: 'interest', label: '利息', notes: ['连接营业利润与净利润的非经营性利息。'] }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 61%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 21%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 19%', '同比 (2 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'coca-cola-q1-fy23',
      company: 'Coca-Cola',
      period: 'Q1 FY23',
      periodNote: 'Ending Mar. 2023',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/coca-cola-q1-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 11.0,
        notes: ['+5% Y/Y'],
        items: [
          { id: 'emea', label: 'EMEA', value: 2.0, notes: ['+10% Y/Y'] },
          { id: 'latam', label: 'LATAM', value: 1.4, notes: ['+14% Y/Y'] },
          { id: 'ucan', label: 'UCAN', value: 3.9, notes: ['+9% Y/Y'] },
          { id: 'apac', label: 'APAC', value: 1.4, notes: ['(3%) Y/Y'] },
          { id: 'global_ventures', label: 'Global ventures', value: 0.7, notes: ['(3%) Y/Y'] },
          { id: 'bottling_investments', label: 'Bottling investments', value: 1.9, notes: ['(5%) Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 0.025 },
          {
            id: 'eliminations',
            label: 'Eliminations',
            value: -0.4,
            notes: ['Inter-segment eliminations shown in the source chart as a separate red outflow.'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 4.3 },
        operatingExpenses: {
          total: 3.3,
          items: [
            { id: 'sga', label: 'SG&A', value: 3.2, notes: ['29% of revenue'] },
            { id: 'other_opex', label: 'Other', value: 0.1, notes: ['1% of revenue'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.9 },
      },
      otherIncome: {
        total: 0.9,
        items: [{ id: 'other_income', label: 'Other', value: 0.9 }],
      },
      otherExpenses: {
        total: 0.2,
        items: [{ id: 'interest', label: 'Interest', value: 0.2, notes: ['Non-operating interest bridging operating profit to net profit.'] }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 6.7, notes: ['61% margin', '+0pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 3.4, notes: ['31% margin', '(2pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 3.1, notes: ['28% margin', '+2pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第一季度',
          periodNote: '截至 2023 年 3 月',
          revenue: {
            notes: ['同比 +5%'],
            items: [
              { id: 'emea', label: 'EMEA', notes: ['同比 +10%'] },
              { id: 'latam', label: 'LATAM', notes: ['同比 +14%'] },
              { id: 'ucan', label: 'UCAN', notes: ['同比 +9%'] },
              { id: 'apac', label: 'APAC', notes: ['同比 (3%)'] },
              { id: 'global_ventures', label: '全球创投业务', notes: ['同比 (3%)'] },
              { id: 'bottling_investments', label: '装瓶投资业务', notes: ['同比 (5%)'] },
              { id: 'other_revenue', label: '其他' },
              { id: 'eliminations', label: '抵销', notes: ['来源图中作为单独的红色流出列示的分部间抵销。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售及管理费用', notes: ['占收入 29%'] },
                { id: 'other_opex', label: '其他', notes: ['占收入 1%'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
          otherExpenses: { items: [{ id: 'interest', label: '利息', notes: ['连接营业利润与净利润的非经营性利息。'] }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 61%', '同比 +0 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 31%', '同比 (2 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 28%', '同比 +2 个百分点'] },
          },
        },
      },
    },
    {
      key: 'coca-cola-q2-fy23',
      company: 'Coca-Cola',
      period: 'Q2 FY23',
      periodNote: 'Ending Jun. 2023',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/coca-cola-q2-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 12.0,
        notes: ['+6% Y/Y'],
        items: [
          { id: 'emea', label: 'EMEA', value: 2.2, notes: ['+0% Y/Y'] },
          { id: 'latam', label: 'LATAM', value: 1.4, notes: ['+21% Y/Y'] },
          { id: 'ucan', label: 'UCAN', value: 4.4, notes: ['+8% Y/Y'] },
          { id: 'apac', label: 'APAC', value: 1.6, notes: ['+0% Y/Y'] },
          { id: 'global_ventures', label: 'Global ventures', value: 0.8, notes: ['+10% Y/Y'] },
          { id: 'bottling_investments', label: 'Bottling investments', value: 2.0, notes: ['(2%) Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 0.03 },
          {
            id: 'eliminations',
            label: 'Eliminations',
            value: -0.4,
            notes: ['Inter-segment eliminations shown in the source chart as a separate red outflow.'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 4.9 },
        operatingExpenses: {
          total: 4.7,
          items: [
            { id: 'sga', label: 'SG&A', value: 3.3, notes: ['28% of revenue'] },
            { id: 'other_opex', label: 'Other', value: 1.3, notes: ['11% of revenue'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.4 },
      },
      otherIncome: {
        total: 0.6,
        items: [{ id: 'other_income', label: 'Other', value: 0.6 }],
      },
      otherExpenses: {
        total: 0.2,
        items: [
          {
            id: 'interest',
            label: 'Interest',
            value: 0.2,
            notes: ['Non-operating interest bridging operating profit to net profit.'],
          },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 7.1, notes: ['59% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.4, notes: ['20% margin', '(1pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.5, notes: ['21% margin', '+17pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第二季度',
          periodNote: '截至 2023 年 6 月',
          revenue: {
            notes: ['同比 +6%'],
            items: [
              { id: 'emea', label: 'EMEA', notes: ['同比 +0%'] },
              { id: 'latam', label: 'LATAM', notes: ['同比 +21%'] },
              { id: 'ucan', label: 'UCAN', notes: ['同比 +8%'] },
              { id: 'apac', label: 'APAC', notes: ['同比 +0%'] },
              { id: 'global_ventures', label: '全球创投业务', notes: ['同比 +10%'] },
              { id: 'bottling_investments', label: '装瓶投资业务', notes: ['同比 (2%)'] },
              { id: 'other_revenue', label: '其他' },
              { id: 'eliminations', label: '抵销', notes: ['来源图中作为单独的红色流出列示的分部间抵销。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售及管理费用', notes: ['占收入 28%'] },
                { id: 'other_opex', label: '其他', notes: ['占收入 11%'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
          otherExpenses: {
            items: [{ id: 'interest', label: '利息', notes: ['连接营业利润与净利润的非经营性利息。'] }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 59%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 20%', '同比 (1 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 21%', '同比 +17 个百分点'] },
          },
        },
      },
    },
    {
      key: 'coca-cola-q3-fy23',
      company: 'Coca-Cola',
      period: 'Q3 FY23',
      periodNote: 'Ending Sep. 2023',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/coca-cola-q3-fy23.png',
      roundingTolerance: 0.2,
      revenue: {
        total: 12.0,
        notes: ['+8% Y/Y'],
        items: [
          { id: 'emea', label: 'EMEA', value: 2.2, notes: ['+10% Y/Y'] },
          { id: 'latam', label: 'LATAM', value: 1.6, notes: ['+24% Y/Y'] },
          { id: 'ucan', label: 'UCAN', value: 4.5, notes: ['+6% Y/Y'] },
          { id: 'apac', label: 'APAC', value: 1.4, notes: ['(2%) Y/Y'] },
          { id: 'global_ventures', label: 'Global ventures', value: 0.8, notes: ['+15% Y/Y'] },
          { id: 'bottling_investments', label: 'Bottling investments', value: 1.9, notes: ['+4% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 0.04 },
          {
            id: 'eliminations',
            label: 'Eliminations',
            value: -0.3,
            notes: ['Inter-segment eliminations shown in the source chart as a separate red outflow.'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 4.7 },
        operatingExpenses: {
          total: 4.0,
          items: [
            { id: 'sga', label: 'SG&A', value: 3.7, notes: ['31% of revenue'] },
            { id: 'other_opex', label: 'Other', value: 0.4, notes: ['3% of revenue'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.5 },
      },
      otherIncome: { total: 0.4, items: [{ id: 'other_income', label: 'Other', value: 0.4 }] },
      otherExpenses: {
        total: 0.1,
        items: [{ id: 'interest', label: 'Interest', value: 0.1, notes: ['Non-operating interest bridging operating profit to net profit.'] }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 7.3, notes: ['61% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 3.3, notes: ['27% margin', '(1pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 3.1, notes: ['26% margin', '+0pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第三季度',
          periodNote: '截至 2023 年 9 月',
          revenue: {
            notes: ['同比 +8%'],
            items: [
              { id: 'emea', label: 'EMEA', notes: ['同比 +10%'] },
              { id: 'latam', label: 'LATAM', notes: ['同比 +24%'] },
              { id: 'ucan', label: 'UCAN', notes: ['同比 +6%'] },
              { id: 'apac', label: 'APAC', notes: ['同比 (2%)'] },
              { id: 'global_ventures', label: '全球创投业务', notes: ['同比 +15%'] },
              { id: 'bottling_investments', label: '装瓶投资业务', notes: ['同比 +4%'] },
              { id: 'other_revenue', label: '其他' },
              { id: 'eliminations', label: '抵销', notes: ['来源图中作为单独的红色流出列示的分部间抵销。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: { items: [
              { id: 'sga', label: '销售及管理费用', notes: ['占收入 31%'] },
              { id: 'other_opex', label: '其他', notes: ['占收入 3%'] },
            ] },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
          otherExpenses: { items: [{ id: 'interest', label: '利息', notes: ['连接营业利润与净利润的非经营性利息。'] }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 61%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 27%', '同比 (1 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 26%', '同比 +0 个百分点'] },
          },
        },
      },
    },
    {
      key: 'coca-cola-q2-fy26',
      company: 'Coca-Cola',
      period: 'Q2 FY26',
      periodNote: 'Ending Jun. 2026',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/coca-cola-q2-fy26.png',
      roundingTolerance: 0.2,
      revenue: {
        total: 13.4,
        notes: ['+7% Y/Y'],
        items: [
          { id: 'emea', label: 'EMEA', value: 3.2, notes: ['+2% Y/Y'] },
          { id: 'latam', label: 'LATAM', value: 1.8, notes: ['+16% Y/Y'] },
          { id: 'ucan', label: 'UCAN', value: 5.4, notes: ['+8% Y/Y'] },
          { id: 'apac', label: 'APAC', value: 1.6, notes: ['+1% Y/Y'] },
          { id: 'bottling_investments', label: 'Bottling investments', value: 1.5, notes: ['+8% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 0.037 },
          {
            id: 'eliminations',
            label: 'Eliminations',
            value: -0.3,
            notes: ['Inter-segment eliminations shown in the source chart as a separate red outflow.'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 5.0 },
        operatingExpenses: {
          total: 3.7,
          items: [
            { id: 'sga', label: 'SG&A', value: 3.7, notes: ['28% of revenue'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 1.0 },
      },
      otherIncome: {
        total: 1.0,
        items: [{ id: 'other_income', label: 'Other', value: 1.0 }],
      },
      otherExpenses: {
        total: 0.2,
        items: [
          {
            id: 'interest',
            label: 'Interest',
            value: 0.2,
            notes: ['Non-operating interest bridging operating profit to net profit.'],
          },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 8.4, notes: ['63% margin', '+0pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 4.7, notes: ['35% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 4.4, notes: ['33% margin', '+3pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月',
          revenue: {
            notes: ['同比 +7%'],
            items: [
              { id: 'emea', label: 'EMEA', notes: ['同比 +2%'] },
              { id: 'latam', label: 'LATAM', notes: ['同比 +16%'] },
              { id: 'ucan', label: 'UCAN', notes: ['同比 +8%'] },
              { id: 'apac', label: 'APAC', notes: ['同比 +1%'] },
              { id: 'bottling_investments', label: '装瓶投资业务', notes: ['同比 +8%'] },
              { id: 'other_revenue', label: '其他' },
              { id: 'eliminations', label: '抵销', notes: ['来源图中作为单独的红色流出列示的分部间抵销。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [{ id: 'sga', label: '销售及管理费用', notes: ['占收入 28%'] }],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
          otherExpenses: {
            items: [{ id: 'interest', label: '利息', notes: ['连接营业利润与净利润的非经营性利息。'] }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 63%', '同比 +0 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 35%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 33%', '同比 +3 个百分点'] },
          },
        },
      },
    },
    {
      key: 'coca-cola-q1-fy26',
      company: 'Coca-Cola',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/coca-cola-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 12.5,
        notes: ['+12% Y/Y'],
        items: [
          { id: 'emea', label: 'EMEA', value: 3.0, notes: ['+13% Y/Y'] },
          { id: 'latam', label: 'LATAM', value: 1.7, notes: ['+14% Y/Y'] },
          { id: 'ucan', label: 'UCAN', value: 4.9, notes: ['+12% Y/Y'] },
          { id: 'apac', label: 'APAC', value: 1.5, notes: ['+6% Y/Y'] },
          { id: 'bottling_investments', label: 'Bottling investments', value: 1.6, notes: ['+12% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 0.034 },
          {
            label: 'Eliminations',
            value: -0.3,
            notes: ['Inter-segment eliminations shown in the source chart as a separate red outflow.'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 4.6 },
        operatingExpenses: {
          total: 3.5,
          items: [
            { id: 'sga', label: 'SG&A', value: 3.5, notes: ['28% of revenue', '(1pp) Y/Y'] },
            { id: 'other_opex', label: 'Other', value: 0.021, notes: ['0% of revenue', '(0 pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.6 },
      },
      otherIncome: {
        total: 0.4,
        items: [{ id: 'other_income', label: 'Other', value: 0.4 }],
      },
      otherExpenses: {
        total: 0.2,
        items: [
          {
            id: 'interest',
            label: 'Interest',
            value: 0.2,
            notes: ['Non-operating interest bridging operating profit to net profit.'],
          },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 7.9, notes: ['63% margin', '+0pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 4.4, notes: ['35% margin', '+2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 4.0, notes: ['32% margin', '+2pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +12%'],
            items: [
              { id: 'emea', label: 'EMEA', notes: ['同比 +13%'] },
              { id: 'latam', label: 'LATAM', notes: ['同比 +14%'] },
              { id: 'ucan', label: 'UCAN', notes: ['同比 +12%'] },
              { id: 'apac', label: 'APAC', notes: ['同比 +6%'] },
              { id: 'bottling_investments', label: '装瓶投资业务', notes: ['同比 +12%'] },
              { id: 'other_revenue', label: '其他' },
              { label: '抵销', notes: ['来源图中作为单独的红色流出列示的分部间抵销。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售及管理费用', notes: ['占收入 28%', '同比 (1 个百分点)'] },
                { id: 'other_opex', label: '其他', notes: ['占收入 0%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他' }],
          },
          otherExpenses: {
            items: [{ id: 'interest', label: '利息', notes: ['连接营业利润与净利润的非经营性利息。'] }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 63%', '同比 +0 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 35%', '同比 +2 个百分点'] },
            net: { label: '净利润', notes: ['利润率 32%', '同比 +2 个百分点'] },
          },
        },
      },
    },
    {
      key: 'coca-cola-q3-fy25',
      company: 'Coca-Cola',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/coca-cola-q3-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 12.5,
        notes: ['+5% Y/Y'],
        items: [
          { id: 'emea', label: 'EMEA', value: 3.0, notes: ['+48% Y/Y'] },
          { id: 'latam', label: 'LATAM', value: 1.6, notes: ['(4%) Y/Y'] },
          { id: 'ucan', label: 'UCAN', value: 5.3, notes: ['+5% Y/Y'] },
          { id: 'apac', label: 'APAC', value: 1.5, notes: ['+12% Y/Y'] },
          { id: 'bottling_investments', label: 'Bottling investments', value: 1.3, notes: ['+2% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 0.034 },
          {
            id: 'eliminations',
            label: 'Eliminations',
            value: -0.3,
            notes: ['Inter-segment eliminations shown in the source chart as a separate red outflow.'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 4.8 },
        operatingExpenses: {
          total: 3.7,
          items: [
            { id: 'sga', label: 'SG&A', value: 3.6, notes: ['29% of revenue', '(2pp) Y/Y'] },
            { id: 'other_opex', label: 'Other', value: 0.1, notes: ['0% of revenue', '(8pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.5 },
      },
      otherIncome: {
        total: 0.4,
        items: [{ id: 'other_income', label: 'Other', value: 0.4 }],
      },
      otherExpenses: {
        total: 0.2,
        items: [
          {
            id: 'interest',
            label: 'Interest',
            value: 0.2,
            notes: ['Non-operating interest bridging operating profit to net profit.'],
          },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 7.7, notes: ['61% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 4.0, notes: ['32% margin', '+11pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 3.7, notes: ['30% margin', '+6pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          revenue: {
            notes: ['同比 +5%'],
            items: [
              { id: 'emea', label: 'EMEA', notes: ['同比 +48%'] },
              { id: 'latam', label: 'LATAM', notes: ['同比 (4%)'] },
              { id: 'ucan', label: 'UCAN', notes: ['同比 +5%'] },
              { id: 'apac', label: 'APAC', notes: ['同比 +12%'] },
              { id: 'bottling_investments', label: '装瓶投资业务', notes: ['同比 +2%'] },
              { id: 'other_revenue', label: '其他' },
              { id: 'eliminations', label: '抵销', notes: ['来源图中作为单独的红色流出列示的分部间抵销。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售及管理费用', notes: ['占收入 29%', '同比 (2 个百分点)'] },
                { id: 'other_opex', label: '其他', notes: ['占收入 0%', '同比 (8 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
          otherExpenses: {
            items: [{ id: 'interest', label: '利息', notes: ['连接营业利润与净利润的非经营性利息。'] }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 61%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 32%', '同比 +11 个百分点'] },
            net: { label: '净利润', notes: ['利润率 30%', '同比 +6 个百分点'] },
          },
        },
      },
    },
    {
      key: 'coca-cola-q3-fy24',
      company: 'Coca-Cola',
      period: 'Q3 FY24',
      periodNote: 'Ending Sep. 2024',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/coca-cola-q3-fy24.png',
      roundingTolerance: 0.2,
      revenue: {
        total: 11.9,
        notes: ['(1%) Y/Y'],
        items: [
          { id: 'emea', label: 'EMEA', value: 2.0, notes: ['(7%) Y/Y'] },
          { id: 'latam', label: 'LATAM', value: 1.6, notes: ['+4% Y/Y'] },
          { id: 'ucan', label: 'UCAN', value: 5.0, notes: ['+12% Y/Y'] },
          { id: 'apac', label: 'APAC', value: 1.3, notes: ['(4%) Y/Y'] },
          { id: 'global_ventures', label: 'Global ventures', value: 0.8, notes: ['+0% Y/Y'] },
          { id: 'bottling_investments', label: 'Bottling investments', value: 1.3, notes: ['(29%) Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 0.018 },
          {
            id: 'eliminations',
            label: 'Eliminations',
            value: -0.3,
            notes: ['Inter-segment eliminations shown in the source chart as a separate red outflow.'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 4.7 },
        operatingExpenses: {
          total: 4.7,
          items: [
            { id: 'sga', label: 'SG&A', value: 3.6, notes: ['31% of revenue'] },
            { id: 'other_opex', label: 'Other', value: 1.0, notes: ['9% of revenue'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.5 },
      },
      otherIncome: {
        total: 1.0,
        items: [{ id: 'other_income', label: 'Other', value: 1.0 }],
      },
      otherExpenses: {
        total: 0.2,
        items: [
          {
            id: 'interest',
            label: 'Interest',
            value: 0.2,
            notes: ['Non-operating interest bridging operating profit to net profit.'],
          },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 7.2, notes: ['61% margin', '(0pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.5, notes: ['21% margin', '(6pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.9, notes: ['24% margin', '(2pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第三季度',
          periodNote: '截至 2024 年 9 月',
          revenue: {
            notes: ['同比 (1%)'],
            items: [
              { id: 'emea', label: 'EMEA', notes: ['同比 (7%)'] },
              { id: 'latam', label: 'LATAM', notes: ['同比 +4%'] },
              { id: 'ucan', label: 'UCAN', notes: ['同比 +12%'] },
              { id: 'apac', label: 'APAC', notes: ['同比 (4%)'] },
              { id: 'global_ventures', label: '全球投资业务', notes: ['同比 +0%'] },
              { id: 'bottling_investments', label: '装瓶投资业务', notes: ['同比 (29%)'] },
              { id: 'other_revenue', label: '其他' },
              { id: 'eliminations', label: '抵销', notes: ['来源图中作为单独的红色流出列示的分部间抵销。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售及管理费用', notes: ['占收入 31%'] },
                { id: 'other_opex', label: '其他', notes: ['占收入 9%'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
          otherExpenses: {
            items: [{ id: 'interest', label: '利息', notes: ['连接营业利润与净利润的非经营性利息。'] }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 61%', '同比 (0 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 21%', '同比 (6 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 24%', '同比 (2 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'coca-cola-q4-fy23',
      company: 'Coca-Cola',
      period: 'Q4 FY23',
      periodNote: 'Ending Dec. 2023',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/coca-cola-q4-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 10.8,
        notes: ['+7% Y/Y'],
        items: [
          { id: 'emea', label: 'EMEA', value: 1.7, notes: ['+11% Y/Y'] },
          { id: 'latam', label: 'LATAM', value: 1.5, notes: ['+16% Y/Y'] },
          { id: 'ucan', label: 'UCAN', value: 4.0, notes: ['+5% Y/Y'] },
          { id: 'apac', label: 'APAC', value: 1.1, notes: ['+7% Y/Y'] },
          { id: 'global_ventures', label: 'Global ventures', value: 0.8, notes: ['+10% Y/Y'] },
          { id: 'bottling_investments', label: 'Bottling investments', value: 2.0, notes: ['+2% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 0.031 },
          {
            id: 'eliminations',
            label: 'Eliminations',
            value: -0.3,
            notes: ['Inter-segment eliminations shown in the source chart as a separate red outflow.'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 4.6 },
        operatingExpenses: {
          total: 3.9,
          items: [
            { id: 'sga', label: 'SG&A', value: 3.8, notes: ['35% of revenue'] },
            { id: 'other_opex', label: 'Other', value: 0.1, notes: ['1% of revenue'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.5 },
      },
      otherIncome: {
        total: 0.4,
        items: [{ id: 'other_income', label: 'Other', value: 0.4 }],
      },
      otherExpenses: {
        total: 0.1,
        items: [
          {
            id: 'interest',
            label: 'Interest',
            value: 0.1,
            notes: ['Non-operating interest bridging operating profit to net profit.'],
          },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 6.2, notes: ['57% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.3, notes: ['21% margin', '+0pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.0, notes: ['18% margin', '(2pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第四季度',
          periodNote: '截至 2023 年 12 月',
          revenue: {
            notes: ['同比 +7%'],
            items: [
              { id: 'emea', label: 'EMEA', notes: ['同比 +11%'] },
              { id: 'latam', label: 'LATAM', notes: ['同比 +16%'] },
              { id: 'ucan', label: 'UCAN', notes: ['同比 +5%'] },
              { id: 'apac', label: 'APAC', notes: ['同比 +7%'] },
              { id: 'global_ventures', label: '全球投资业务', notes: ['同比 +10%'] },
              { id: 'bottling_investments', label: '装瓶投资业务', notes: ['同比 +2%'] },
              { id: 'other_revenue', label: '其他' },
              { id: 'eliminations', label: '抵销', notes: ['来源图中作为单独的红色流出列示的分部间抵销。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: { items: [
              { id: 'sga', label: '销售及管理费用', notes: ['占收入 35%'] },
              { id: 'other_opex', label: '其他', notes: ['占收入 1%'] },
            ] },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
          otherExpenses: { items: [
            { id: 'interest', label: '利息', notes: ['连接营业利润与净利润的非经营性利息。'] },
          ] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 57%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 21%', '同比 +0 个百分点'] },
            net: { label: '净利润', notes: ['利润率 18%', '同比 (2 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'coca-cola-q4-fy25',
      company: 'Coca-Cola',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/coca-cola-q4-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 11.8,
        notes: ['+2% Y/Y'],
        items: [
          { id: 'emea', label: 'EMEA', value: 2.7, notes: ['+4% Y/Y'] },
          { id: 'latam', label: 'LATAM', value: 1.7, notes: ['+3% Y/Y'] },
          { id: 'ucan', label: 'UCAN', value: 4.9, notes: ['+4% Y/Y'] },
          { id: 'apac', label: 'APAC', value: 1.1, notes: ['(7%) Y/Y'] },
          { id: 'bottling_investments', label: 'Bottling investments', value: 1.5, notes: ['(2%) Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 0.045 },
          { label: 'Eliminations', value: -0.2, notes: ['Inter-segment eliminations shown as a separate red outflow.'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 4.7 },
        operatingExpenses: {
          total: 5.3,
          items: [
            { id: 'sga', label: 'SG&A', value: 4.2, notes: ['36% of revenue', '+0pp Y/Y'] },
            { id: 'other_opex', label: 'Other', value: 1.1, notes: ['9% of revenue', '+7pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.6 },
      },
      otherIncome: {
        total: 1.3,
        items: [{ id: 'other_income', label: 'Other', value: 1.3 }],
      },
      otherExpenses: {
        total: 0.2,
        items: [{ id: 'interest', label: 'Interest', value: 0.2, notes: ['Non-operating interest bridging operating profit to net profit.'] }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 7.1, notes: ['60% margin', '+0pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.8, notes: ['16% margin', '(8pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.3, notes: ['20% margin', '+0pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +2%'],
            items: [
              { id: 'emea', label: 'EMEA', notes: ['同比 +4%'] },
              { id: 'latam', label: 'LATAM', notes: ['同比 +3%'] },
              { id: 'ucan', label: 'UCAN', notes: ['同比 +4%'] },
              { id: 'apac', label: 'APAC', notes: ['同比 (7%)'] },
              { id: 'bottling_investments', label: '装瓶投资业务', notes: ['同比 (2%)'] },
              { id: 'other_revenue', label: '其他' },
              { label: '抵销', notes: ['来源图中作为单独的红色流出列示的分部间抵销。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售及管理费用', notes: ['占收入 36%', '同比 +0 个百分点'] },
                { id: 'other_opex', label: '其他', notes: ['占收入 9%', '同比 +7 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
          otherExpenses: { items: [{ id: 'interest', label: '利息', notes: ['连接营业利润与净利润的非经营性利息。'] }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 60%', '同比 +0 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 16%', '同比 (8 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 20%', '同比 +0 个百分点'] },
          },
        },
      },
    },
    {
      key: 'coca-cola-q4-fy22',
      company: 'Coca-Cola',
      period: 'Q4 FY22',
      periodNote: 'Ending Dec. 2022',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/coca-cola-q4-fy22.png',
      roundingTolerance: 0.2,
      revenue: {
        total: 10.1,
        notes: ['+7% Y/Y'],
        items: [
          { id: 'emea', label: 'EMEA', value: 1.5, notes: ['(7%) Y/Y'] },
          { id: 'latam', label: 'LATAM', value: 1.3, notes: ['+25% Y/Y'] },
          { id: 'ucan', label: 'UCAN', value: 3.9, notes: ['+14% Y/Y'] },
          { id: 'apac', label: 'APAC', value: 1.0, notes: ['+3% Y/Y'] },
          { id: 'global_ventures', label: 'Global ventures', value: 0.8, notes: ['(5%) Y/Y'] },
          { id: 'bottling_investments', label: 'Bottling investments', value: 2.0, notes: ['+4% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 0.017 },
          { id: 'eliminations', label: 'Eliminations', value: -0.3, notes: ['Inter-segment eliminations shown in the source chart as a separate red outflow.'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 4.5 },
        operatingExpenses: {
          total: 3.5,
          items: [
            { id: 'sga', label: 'SG&A', value: 3.4, notes: ['34% of revenue'] },
            { id: 'other_opex', label: 'Other', value: 0.1, notes: ['1% of revenue'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.4 },
      },
      otherIncome: { total: 0.6, items: [{ id: 'other_income', label: 'Other', value: 0.6 }] },
      otherExpenses: {
        total: 0.2,
        items: [{ id: 'interest', label: 'Interest', value: 0.2, notes: ['Non-operating interest bridging operating profit to net profit.'] }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 5.6, notes: ['55% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.1, notes: ['20% margin', '(1pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.1, notes: ['20% margin', '(6pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2022 财年第四季度',
          periodNote: '截至 2022 年 12 月',
          revenue: {
            notes: ['同比 +7%'],
            items: [
              { id: 'emea', label: 'EMEA', notes: ['同比 (7%)'] },
              { id: 'latam', label: 'LATAM', notes: ['同比 +25%'] },
              { id: 'ucan', label: 'UCAN', notes: ['同比 +14%'] },
              { id: 'apac', label: 'APAC', notes: ['同比 +3%'] },
              { id: 'global_ventures', label: '全球新兴业务', notes: ['同比 (5%)'] },
              { id: 'bottling_investments', label: '装瓶投资业务', notes: ['同比 +4%'] },
              { id: 'other_revenue', label: '其他' },
              { id: 'eliminations', label: '抵销', notes: ['来源图中作为单独的红色流出列示的分部间抵销。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: { items: [
              { id: 'sga', label: '销售及管理费用', notes: ['占收入 34%'] },
              { id: 'other_opex', label: '其他', notes: ['占收入 1%'] },
            ] },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
          otherExpenses: { items: [{ id: 'interest', label: '利息', notes: ['连接营业利润与净利润的非经营性利息。'] }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 55%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 20%', '同比 (1 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 20%', '同比 (6 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
