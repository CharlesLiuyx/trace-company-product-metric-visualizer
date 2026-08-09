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
      key: 'tencent-q4-fy22',
      company: 'Tencent',
      period: 'Q4 FY22',
      periodNote: 'Ending Dec. 2022',
      currency: 'RMB',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/tencent-q4-fy22.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 145.0,
        notes: ['+1% Y/Y'],
        items: [
          { id: 'gaming', label: 'Gaming', value: 41.8, notes: ['(2%) Y/Y'] },
          { id: 'social_networks', label: 'Social Networks', value: 28.6, notes: ['(2%) Y/Y'] },
          { id: 'advertising', label: 'Advertising', value: 24.7, notes: ['+15% Y/Y'] },
          { id: 'finance_business_services', label: 'Finance & Business Services', value: 47.2, notes: ['(1%) Y/Y'] },
          { id: 'others', label: 'Others', value: 2.7, notes: ['(6%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 83.1 },
        operatingExpenses: {
          total: 33.4,
          items: [
            { id: 'rnd', label: 'Research & development', value: 15.9 },
            { id: 'ga', label: 'General & admin', value: 11.4 },
            { id: 'sales_general_admin', label: 'Sales, general & admin', value: 6.1 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 4.6 },
      },
      operatingOtherIncome: {
        total: 88.3,
        items: [{ id: 'other_gains', label: 'Other gains', value: 88.3 }],
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 5.3,
        items: [{ id: 'other_expenses', label: 'Other', value: 5.3 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 61.9, notes: ['43% margin', '+3pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 116.8, notes: ['81% margin', '+4pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 106.9, notes: ['74% margin', '+7pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2022 财年第四季度',
          periodNote: '截至 2022 年 12 月',
          revenue: {
            notes: ['同比 +1%'],
            items: [
              { id: 'gaming', label: '游戏', notes: ['同比 (2%)'] },
              { id: 'social_networks', label: '社交网络', notes: ['同比 (2%)'] },
              { id: 'advertising', label: '广告', notes: ['同比 +15%'] },
              { id: 'finance_business_services', label: '金融与企业服务', notes: ['同比 (1%)'] },
              { id: 'others', label: '其他', notes: ['同比 (6%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发' },
                { id: 'ga', label: '管理费用' },
                { id: 'sales_general_admin', label: '销售、综合与管理费用' },
              ],
            },
            tax: { label: '税费' },
          },
          operatingOtherIncome: {
            items: [{ id: 'other_gains', label: '其他收益' }],
          },
          otherExpenses: {
            items: [{ id: 'other_expenses', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 43%', '同比 +3 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 81%', '同比 +4 个百分点'] },
            net: { label: '净利润', notes: ['利润率 74%', '同比 +7 个百分点'] },
          },
        },
      },
    },
    {
      key: 'tencent-q1-fy23',
      company: 'Tencent',
      period: 'Q1 FY23',
      periodNote: 'Ending Mar. 2023',
      currency: 'RMB',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/tencent-q1-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 150.0,
        notes: ['+11% Y/Y'],
        items: [
          { id: 'gaming', label: 'Gaming', value: 48.3, notes: ['+11% Y/Y'] },
          { id: 'social_networks', label: 'Social Networks', value: 31.0, notes: ['+7% Y/Y'] },
          { id: 'advertising', label: 'Advertising', value: 21.0, notes: ['+17% Y/Y'] },
          { id: 'finance_business_services', label: 'Finance & Business Services', value: 48.7, notes: ['+14% Y/Y'] },
          { id: 'others', label: 'Others', value: 1.0, notes: ['(50%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 81.8 },
        operatingExpenses: {
          total: 31.6,
          items: [
            { id: 'rnd', label: 'Research & development', value: 15.2 },
            { id: 'ga', label: 'General & admin', value: 9.4 },
            { id: 'sga', label: 'Sales, general & admin', value: 7.0 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 11.5 },
      },
      operatingOtherIncome: {
        total: 3.8,
        items: [{ id: 'other_gains', label: 'Other gains', value: 3.8 }],
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 2.5,
        items: [{ id: 'other', label: 'Other', value: 2.5 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 68.2, notes: ['45% margin', '+3pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 40.4, notes: ['27% margin', '(1pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 26.4, notes: ['18% margin', '+0pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第一季度',
          periodNote: '截至 2023 年 3 月',
          revenue: {
            notes: ['同比 +11%'],
            items: [
              { id: 'gaming', label: '游戏', notes: ['同比 +11%'] },
              { id: 'social_networks', label: '社交网络', notes: ['同比 +7%'] },
              { id: 'advertising', label: '广告', notes: ['同比 +17%'] },
              { id: 'finance_business_services', label: '金融科技与企业服务', notes: ['同比 +14%'] },
              { id: 'others', label: '其他', notes: ['同比 (50%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发' },
                { id: 'ga', label: '管理费用' },
                { id: 'sga', label: '销售、一般及管理费用' },
              ],
            },
            tax: { label: '税费' },
          },
          operatingOtherIncome: { items: [{ id: 'other_gains', label: '其他收益' }] },
          otherExpenses: { items: [{ id: 'other', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 45%', '同比 +3 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 27%', '同比 (1 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 18%', '同比 0 个百分点'] },
          },
        },
      },
    },
    {
      key: 'tencent-q1-fy24',
      company: 'Tencent',
      period: 'Q1 FY24',
      periodNote: 'Ending Mar. 2024',
      currency: 'RMB',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/tencent-q1-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 159.5,
        notes: ['+6% Y/Y'],
        items: [
          { id: 'gaming', label: 'Gaming', value: 48.1, notes: ['(0%) Y/Y'] },
          { id: 'social_networks', label: 'Social Networks', value: 30.5, notes: ['(2%) Y/Y'] },
          { id: 'advertising', label: 'Advertising', value: 26.5, notes: ['+26% Y/Y'] },
          { id: 'finance_business_services', label: 'Finance & Business Services', value: 52.3, notes: ['+7% Y/Y'] },
          { id: 'others', label: 'Others', value: 2.1, notes: ['+110% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 75.6 },
        operatingExpenses: {
          total: 32.3,
          items: [
            { id: 'rnd', label: 'Research & development', value: 15.7 },
            { id: 'ga', label: 'General & admin', value: 9.1 },
            { id: 'sm', label: 'Sales & marketing', value: 7.5 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 14.2 },
      },
      operatingOtherIncome: {
        total: 1.0,
        items: [{ id: 'other_operating_income', label: 'Other operating income', value: 1.0 }],
      },
      otherIncome: {
        total: 4.3,
        items: [
          {
            id: 'other_non_operating_income',
            label: 'Other non-operating income',
            value: 4.3,
            notes: ['Aggregated non-operating income shown as Other in the source chart.'],
          },
        ],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 83.9, notes: ['53% margin', '+7pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 52.6, notes: ['33% margin', '+8pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 42.7, notes: ['27% margin', '+9pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第一季度',
          periodNote: '截至 2024 年 3 月',
          revenue: {
            notes: ['同比 +6%'],
            items: [
              { id: 'gaming', label: '游戏', notes: ['同比 0%'] },
              { id: 'social_networks', label: '社交网络', notes: ['同比 (2%)'] },
              { id: 'advertising', label: '广告', notes: ['同比 +26%'] },
              { id: 'finance_business_services', label: '金融与企业服务', notes: ['同比 +7%'] },
              { id: 'others', label: '其他', notes: ['同比 +110%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发' },
                { id: 'ga', label: '管理费用' },
                { id: 'sm', label: '销售与市场' },
              ],
            },
            tax: { label: '税费' },
          },
          operatingOtherIncome: {
            items: [{ id: 'other_operating_income', label: '其他营业收益' }],
          },
          otherIncome: {
            items: [
              {
                id: 'other_non_operating_income',
                label: '其他非经营收益',
                notes: ['源图汇总列示为“其他”的非经营收益。'],
              },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 53%', '同比 +7 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 33%', '同比 +8 个百分点'] },
            net: { label: '净利润', notes: ['利润率 27%', '同比 +9 个百分点'] },
          },
        },
      },
    },
    {
      key: 'tencent-q3-fy23',
      company: 'Tencent',
      period: 'Q3 FY23',
      periodNote: 'Ending Sep. 2023',
      currency: 'RMB',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/tencent-q3-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 154.6,
        notes: ['+10% Y/Y'],
        items: [
          { id: 'gaming', label: 'Gaming', value: 46.0, notes: ['+7% Y/Y'] },
          { id: 'social_networks', label: 'Social Networks', value: 29.7, notes: ['+0% Y/Y'] },
          { id: 'advertising', label: 'Advertising', value: 25.7, notes: ['+20% Y/Y'] },
          { id: 'fintech_business_services', label: 'Finance & Business Services', value: 52.0, notes: ['+16% Y/Y'] },
          { id: 'others', label: 'Others', value: 1.2, notes: ['+9% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 78.1 },
        operatingExpenses: {
          total: 34.2,
          items: [
            { id: 'rnd', label: 'Research & development', value: 16.5 },
            { id: 'ga', label: 'General & admin', value: 9.8 },
            { id: 'sm', label: 'Sales & marketing', value: 7.9 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 11.0 },
      },
      operatingOtherIncome: {
        total: 6.2,
        items: [{ id: 'other_gains', label: 'Other gains', value: 6.2 }],
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 0.7,
        items: [{ id: 'other', label: 'Other', value: 0.7 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 76.5, notes: ['49% margin', '+5pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 48.5, notes: ['27% margin', '+5pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 36.8, notes: ['24% margin', '(4pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第三季度',
          periodNote: '截至 2023 年 9 月',
          revenue: {
            notes: ['同比 +10%'],
            items: [
              { id: 'gaming', label: '游戏', notes: ['同比 +7%'] },
              { id: 'social_networks', label: '社交网络', notes: ['同比 0%'] },
              { id: 'advertising', label: '广告', notes: ['同比 +20%'] },
              { id: 'fintech_business_services', label: '金融科技与企业服务', notes: ['同比 +16%'] },
              { id: 'others', label: '其他', notes: ['同比 +9%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发' },
                { id: 'ga', label: '管理费用' },
                { id: 'sm', label: '销售与市场' },
              ],
            },
            tax: { label: '税费' },
          },
          operatingOtherIncome: { items: [{ id: 'other_gains', label: '其他收益' }] },
          otherExpenses: { items: [{ id: 'other', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 49%', '同比 +5 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 27%', '同比 +5 个百分点'] },
            net: { label: '净利润', notes: ['利润率 24%', '同比 (4 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'tencent-q4-fy23',
      company: 'Tencent',
      period: 'Q4 FY23',
      periodNote: 'Ending Dec. 2023',
      currency: 'RMB',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/tencent-q4-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 155.2,
        notes: ['+7% Y/Y'],
        items: [
          { id: 'gaming', label: 'Gaming', value: 40.9, notes: ['(2%) Y/Y'] },
          { id: 'social_networks', label: 'Social Networks', value: 28.2, notes: ['(2%) Y/Y'] },
          { id: 'advertising', label: 'Advertising', value: 29.8, notes: ['+21% Y/Y'] },
          { id: 'finance_business_services', label: 'Finance & Business Services', value: 54.4, notes: ['+15% Y/Y'] },
          { id: 'others', label: 'Others', value: 1.9, notes: ['(27%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 77.6 },
        operatingExpenses: {
          total: 38.2,
          items: [
            { id: 'rnd', label: 'Research & development', value: 16.4 },
            { id: 'ga', label: 'General & admin', value: 10.8 },
            { id: 'sm', label: 'Sales & marketing', value: 11.0 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 9.7 },
      },
      operatingOtherIncome: {
        total: 2.0,
        items: [{ id: 'other_operating_gains', label: 'Other gains', value: 2.0 }],
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 3.9, items: [{ id: 'other', label: 'Other', value: 3.9 }] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 77.6, notes: ['50% margin', '+7pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 41.4, notes: ['27% margin', '+7pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 27.8, notes: ['18% margin', '(56pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第四季度',
          periodNote: '截至 2023 年 12 月',
          revenue: {
            notes: ['同比 +7%'],
            items: [
              { id: 'gaming', label: '游戏', notes: ['同比 (2%)'] },
              { id: 'social_networks', label: '社交网络', notes: ['同比 (2%)'] },
              { id: 'advertising', label: '广告', notes: ['同比 +21%'] },
              { id: 'finance_business_services', label: '金融科技与企业服务', notes: ['同比 +15%'] },
              { id: 'others', label: '其他', notes: ['同比 (27%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发' },
                { id: 'ga', label: '管理费用' },
                { id: 'sm', label: '销售与市场' },
              ],
            },
            tax: { label: '税费' },
          },
          operatingOtherIncome: { items: [{ id: 'other_operating_gains', label: '其他收益' }] },
          otherExpenses: { items: [{ id: 'other', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 50%', '同比 +7 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 27%', '同比 +7 个百分点'] },
            net: { label: '净利润', notes: ['利润率 18%', '同比 (56 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'tencent-q2-fy24',
      company: 'Tencent',
      period: 'Q2 FY24',
      periodNote: 'Ending Jun. 2024',
      currency: 'RMB',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/tencent-q2-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 161.1,
        notes: ['+8% Y/Y'],
        items: [
          { id: 'gaming', label: 'Gaming', value: 48.5, notes: ['+9% Y/Y'] },
          { id: 'social_networks', label: 'Social Networks', value: 30.3, notes: ['+2% Y/Y'] },
          { id: 'advertising', label: 'Advertising', value: 29.9, notes: ['+19% Y/Y'] },
          { id: 'finance_business_services', label: 'Finance & Business Services', value: 50.4, notes: ['+4% Y/Y'] },
          { id: 'others', label: 'Others', value: 2.0, notes: ['-46% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 75.2 },
        operatingExpenses: {
          total: 36.7,
          items: [
            { id: 'rnd', label: 'Research & development', value: 17.3 },
            { id: 'ga', label: 'General & admin', value: 10.2 },
            { id: 'sm', label: 'Sales & marketing', value: 9.2 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 10.1 },
      },
      operatingOtherIncome: {
        total: 1.5,
        items: [{ id: 'other_operating_income', label: 'Other', value: 1.5 }],
      },
      otherIncome: {
        total: 7.8,
        items: [{ id: 'other_non_operating_income', label: 'Other', value: 7.8 }],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 85.9, notes: ['53% margin', '+6pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 50.7, notes: ['31% margin', '+7pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 48.4, notes: ['30% margin', '+12pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第二季度',
          periodNote: '截至 2024 年 6 月',
          revenue: {
            notes: ['同比 +8%'],
            items: [
              { id: 'gaming', label: '游戏', notes: ['同比 +9%'] },
              { id: 'social_networks', label: '社交网络', notes: ['同比 +2%'] },
              { id: 'advertising', label: '广告', notes: ['同比 +19%'] },
              { id: 'finance_business_services', label: '金融与企业服务', notes: ['同比 +4%'] },
              { id: 'others', label: '其他', notes: ['同比 -46%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发' },
                { id: 'ga', label: '管理费用' },
                { id: 'sm', label: '销售与市场' },
              ],
            },
            tax: { label: '税费' },
          },
          operatingOtherIncome: { items: [{ id: 'other_operating_income', label: '其他' }] },
          otherIncome: { items: [{ id: 'other_non_operating_income', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 53%', '同比 +6 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 31%', '同比 +7 个百分点'] },
            net: { label: '净利润', notes: ['利润率 30%', '同比 +12 个百分点'] },
          },
        },
      },
    },
    {
      key: 'tencent-q4-fy24',
      company: 'Tencent',
      period: 'Q4 FY24',
      periodNote: 'Ending Dec. 2024',
      currency: 'RMB',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/tencent-q4-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 172.4,
        notes: ['+11% Y/Y'],
        items: [
          { id: 'gaming', label: 'Gaming', value: 49.2, notes: ['+20% Y/Y'] },
          { id: 'social_networks', label: 'Social Networks', value: 29.8, notes: ['+6% Y/Y'] },
          { id: 'marketing_services', label: 'Marketing Services', value: 35.0, valueText: '35.0B', notes: ['+17% Y/Y'] },
          { id: 'fintech_business_services', label: 'Finance & Business Services', value: 56.1, notes: ['+3% Y/Y'] },
          { id: 'others', label: 'Others', value: 2.3, notes: ['+18% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 81.7 },
        operatingExpenses: {
          total: 41.7,
          items: [
            { id: 'rnd', label: 'Research & development', value: 19.8, notes: ['11% of revenue', '+1pp Y/Y'] },
            { id: 'ga', label: 'General & admin', value: 11.6, notes: ['7% of revenue', '(0pp) Y/Y'] },
            { id: 'sm', label: 'Sales & marketing', value: 10.3, notes: ['6% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 11.8 },
      },
      operatingOtherIncome: {
        total: 2.5,
        items: [{ id: 'other_operating_gains', label: 'Other gains', value: 2.5 }],
      },
      otherIncome: {
        total: 11.8,
        items: [
          {
            id: 'investments',
            label: 'Investments',
            value: 11.8,
            notes: ['Aggregated non-operating investment, interest, finance, and associate/JV line items.'],
          },
        ],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 90.7, notes: ['53% margin', '+3pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 51.5, notes: ['30% margin', '+3pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 51.5, notes: ['30% margin', '+12pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第四季度',
          periodNote: '截至 2024 年 12 月',
          revenue: {
            notes: ['同比 +11%'],
            items: [
              { id: 'gaming', label: '游戏', notes: ['同比 +20%'] },
              { id: 'social_networks', label: '社交网络', notes: ['同比 +6%'] },
              { id: 'marketing_services', label: '营销服务', notes: ['同比 +17%'] },
              { id: 'fintech_business_services', label: '金融与企业服务', notes: ['同比 +3%'] },
              { id: 'others', label: '其他', notes: ['同比 +18%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 11%', '同比 +1 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 7%', '同比 0 个百分点'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 6%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          operatingOtherIncome: { items: [{ id: 'other_operating_gains', label: '其他收益' }] },
          otherIncome: {
            items: [
              { id: 'investments', label: '投资收益', notes: ['汇总非经营性投资、利息、财务以及联营/JV 项目。'] },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 53%', '同比 +3 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 30%', '同比 +3 个百分点'] },
            net: { label: '净利润', notes: ['利润率 30%', '同比 +12 个百分点'] },
          },
        },
      },
    },
    {
      key: 'tencent-q3-fy22',
      company: 'Tencent',
      period: 'Q3 FY22',
      periodNote: 'Ending Sep. 2022',
      currency: 'RMB',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/tencent-q3-fy22.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 140.1,
        notes: ['(2%) Y/Y'],
        items: [
          { id: 'gaming', label: 'Gaming', value: 42.9, notes: ['(4%) Y/Y'] },
          { id: 'social_networks', label: 'Social Networks', value: 29.8, notes: ['(2%) Y/Y'] },
          { id: 'advertising', label: 'Advertising', value: 21.5, notes: ['(4%) Y/Y'] },
          { id: 'finance_business_services', label: 'Finance & Business Services', value: 44.8, notes: ['+3% Y/Y'] },
          { id: 'others', label: 'Others', value: 1.1, notes: ['(21%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 78.1 },
        operatingExpenses: {
          total: 33.6,
          items: [
            { id: 'rnd', label: 'Research & development', value: 15.1 },
            { id: 'ga', label: 'General & admin', value: 11.4 },
            { id: 'sales_ga', label: 'Sales, general & admin', value: 7.1 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 7.1 },
      },
      operatingOtherIncome: {
        total: 23.2,
        notes: [
          'Source literal is 23.2M; user-approved unit correction to 23.2B is bound to Tencent Q3 2022 official results (RMB 2.328B interest income plus RMB 20.886B other gains, net).',
        ],
        items: [{ id: 'other_gains', label: 'Other gains', value: 23.2 }],
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 5.6,
        items: [
          {
            id: 'other',
            label: 'Other',
            value: 5.6,
            notes: ['Aggregated finance costs and share of losses of associates and joint ventures.'],
          },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 62.0, notes: ['44% margin'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 51.6, notes: ['37% margin'] },
        net: { id: 'net_profit', label: 'Net profit', value: 38.8, notes: ['28% margin'] },
      },
      i18n: {
        zh: {
          period: '2022 财年第三季度',
          periodNote: '截至 2022 年 9 月',
          revenue: {
            notes: ['同比 (2%)'],
            items: [
              { id: 'gaming', label: '游戏', notes: ['同比 (4%)'] },
              { id: 'social_networks', label: '社交网络', notes: ['同比 (2%)'] },
              { id: 'advertising', label: '广告', notes: ['同比 (4%)'] },
              { id: 'finance_business_services', label: '金融与企业服务', notes: ['同比 +3%'] },
              { id: 'others', label: '其他', notes: ['同比 (21%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发' },
                { id: 'ga', label: '管理费用' },
                { id: 'sales_ga', label: '销售、一般及行政费用' },
              ],
            },
            tax: { label: '税费' },
          },
          operatingOtherIncome: { items: [{ id: 'other_gains', label: '其他收益' }] },
          otherExpenses: {
            items: [{ id: 'other', label: '其他', notes: ['汇总财务成本及分占联营、合营公司亏损。'] }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 44%'] },
            operating: { label: '营业利润', notes: ['利润率 37%'] },
            net: { label: '净利润', notes: ['利润率 28%'] },
          },
        },
      },
    },
    {
      key: 'tencent-q2-fy23',
      company: 'Tencent',
      period: 'Q2 FY23',
      periodNote: 'Ending Jun. 2023',
      currency: 'RMB',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/tencent-q2-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 149.2,
        notes: ['+11% Y/Y'],
        items: [
          { id: 'gaming', label: 'Gaming', value: 44.5, notes: ['+5% Y/Y'] },
          { id: 'social_networks', label: 'Social Networks', value: 29.7, notes: ['+2% Y/Y'] },
          { id: 'advertising', label: 'Advertising', value: 25.0, valueText: '25.0B', notes: ['+34% Y/Y'] },
          { id: 'fintech_business_services', label: 'Finance & Business Services', value: 48.6, notes: ['+15% Y/Y'] },
          { id: 'others', label: 'Others', value: 1.4, notes: ['(7%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 78.4 },
        operatingExpenses: {
          total: 33.7,
          items: [
            { id: 'rnd', label: 'Research & development', value: 16.0, valueText: '(16.0B)' },
            { id: 'ga', label: 'General & admin', value: 9.4 },
            { id: 'sm', label: 'Sales & marketing', value: 8.3 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 11.1 },
      },
      operatingOtherIncome: {
        total: 3.2,
        items: [{ id: 'other_operating_income', label: 'Other gains', value: 3.2 }],
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 2.1,
        items: [{ id: 'other_expense', label: 'Other', value: 2.1 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 70.8, notes: ['47% margin', '+4pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 40.3, notes: ['27% margin', '+5pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 27.0, valueText: '27.0B', notes: ['18% margin', '+4pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第二季度',
          periodNote: '截至 2023 年 6 月',
          revenue: {
            notes: ['同比 +11%'],
            items: [
              { id: 'gaming', label: '游戏', notes: ['同比 +5%'] },
              { id: 'social_networks', label: '社交网络', notes: ['同比 +2%'] },
              { id: 'advertising', label: '广告', notes: ['同比 +34%'] },
              { id: 'fintech_business_services', label: '金融与企业服务', notes: ['同比 +15%'] },
              { id: 'others', label: '其他', notes: ['同比 (7%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发' },
                { id: 'ga', label: '管理费用' },
                { id: 'sm', label: '销售与市场' },
              ],
            },
            tax: { label: '税费' },
          },
          operatingOtherIncome: {
            items: [{ id: 'other_operating_income', label: '其他收益' }],
          },
          otherExpenses: {
            items: [{ id: 'other_expense', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 47%', '同比 +4 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 27%', '同比 +5 个百分点'] },
            net: { label: '净利润', notes: ['利润率 18%', '同比 +4 个百分点'] },
          },
        },
      },
    },
    {
      key: 'tencent-q1-fy25',
      company: 'Tencent',
      period: 'Q1 FY25',
      periodNote: 'Ending Mar. 2025',
      currency: 'RMB',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/tencent-q1-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 180.0,
        notes: ['+13% Y/Y'],
        items: [
          { id: 'gaming', label: 'Gaming', value: 59.5, notes: ['+24% Y/Y'] },
          { id: 'social_networks', label: 'Social Networks', value: 32.6, notes: ['+7% Y/Y'] },
          { id: 'marketing_services', label: 'Marketing Services', value: 31.9, notes: ['+20% Y/Y'] },
          { id: 'fintech_business_services', label: 'Finance & Business Services', value: 54.9, notes: ['+5% Y/Y'] },
          { id: 'others', label: 'Others', value: 1.1, notes: ['(45%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 79.5 },
        operatingExpenses: {
          total: 42.9,
          items: [
            { id: 'rnd', label: 'Research & development', value: 18.9, notes: ['11% of revenue', '+1pp Y/Y'] },
            { id: 'ga', label: 'General & admin', value: 14.7, notes: ['8% of revenue', '+2pp Y/Y'] },
            { id: 'sm', label: 'Sales & marketing', value: 7.9, notes: ['4% of revenue', '(0pp) Y/Y'] },
            { id: 'other_operating_expense', label: 'Other', value: 1.4 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 13.7 },
      },
      otherIncome: {
        total: 5.8,
        items: [{
          id: 'investments', label: 'Investments', value: 5.8,
          notes: ['Aggregated non-operating investment, interest, finance, and associate/JV line items.'],
        }],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 100.5, notes: ['56% margin', '+3pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 57.6, notes: ['32% margin', '(1pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 49.7, notes: ['28% margin', '+1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第一季度',
          periodNote: '截至 2025 年 3 月',
          revenue: {
            notes: ['同比 +13%'],
            items: [
              { id: 'gaming', label: '游戏', notes: ['同比 +24%'] },
              { id: 'social_networks', label: '社交网络', notes: ['同比 +7%'] },
              { id: 'marketing_services', label: '营销服务', notes: ['同比 +20%'] },
              { id: 'fintech_business_services', label: '金融科技与企业服务', notes: ['同比 +5%'] },
              { id: 'others', label: '其他', notes: ['同比 (45%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 11%', '同比 +1 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 8%', '同比 +2 个百分点'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 4%', '同比 (0 个百分点)'] },
                { id: 'other_operating_expense', label: '其他' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'investments', label: '投资收益', notes: ['汇总非经营性投资、利息、财务以及联营/JV 项目。'] }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 56%', '同比 +3 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 32%', '同比 (1 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 28%', '同比 +1 个百分点'] },
          },
        },
      },
    },
    {
      key: 'tencent-q2-fy25',
      company: 'Tencent',
      period: 'Q2 FY25',
      periodNote: 'Ending Jun. 2025',
      currency: 'RMB',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/tencent-q2-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 184.5,
        notes: ['+15% Y/Y'],
        items: [
          { id: 'gaming', label: 'Gaming', value: 59.2, notes: ['+22% Y/Y'] },
          { id: 'social_networks', label: 'Social Networks', value: 32.2, notes: ['+6% Y/Y'] },
          { id: 'marketing_services', label: 'Marketing Services', value: 35.8, notes: ['+20% Y/Y'] },
          { id: 'fintech_business_services', label: 'FinTech & Business Services', value: 55.5, notes: ['+10% Y/Y'] },
          { id: 'others', label: 'Others', value: 1.8, notes: ['(7%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 79.5 },
        operatingExpenses: {
          total: 44.9,
          items: [
            { id: 'rnd', label: 'Research & development', value: 20.3, notes: ['11% of revenue', '+0pp Y/Y'] },
            { id: 'ga', label: 'General & admin', value: 11.6, notes: ['6% of revenue', '(0pp) Y/Y'] },
            { id: 'sm', label: 'Sales & marketing', value: 9.4, notes: ['5% of revenue', '(1pp) Y/Y'] },
            { id: 'other_operating_expense', label: 'Other', value: 3.6 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 11.4 },
      },
      otherIncome: {
        total: 7.3,
        items: [
          {
            id: 'investments',
            label: 'Investments',
            value: 7.3,
            notes: ['Aggregated non-operating investment, interest, finance, and associate/JV line items.'],
          },
        ],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 105.0, notes: ['57% margin', '+3pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 60.1, notes: ['33% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 56.0, notes: ['30% margin', '+0pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第二季度',
          periodNote: '截至 2025 年 6 月',
          revenue: {
            notes: ['同比 +15%'],
            items: [
              { id: 'gaming', label: '游戏', notes: ['同比 +22%'] },
              { id: 'social_networks', label: '社交网络', notes: ['同比 +6%'] },
              { id: 'marketing_services', label: '营销服务', notes: ['同比 +20%'] },
              { id: 'fintech_business_services', label: '金融科技与企业服务', notes: ['同比 +10%'] },
              { id: 'others', label: '其他', notes: ['同比 (7%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 11%', '同比 0 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 6%', '同比 0 个百分点'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 5%', '同比 (1 个百分点)'] },
                { id: 'other_operating_expense', label: '其他' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'investments', label: '投资收益', notes: ['汇总非经营性投资、利息、财务以及联营/JV 项目。'] },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 57%', '同比 +3 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 33%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 30%', '同比 0 个百分点'] },
          },
        },
      },
    },
    {
      key: 'tencent-q3-fy24',
      company: 'Tencent',
      period: 'Q3 FY24',
      periodNote: 'Ending Sep. 2024',
      currency: 'RMB',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/tencent-q3-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 167.2,
        notes: ['+8% Y/Y'],
        items: [
          { id: 'gaming', label: 'Gaming', value: 51.8, notes: ['+13% Y/Y'] },
          { id: 'social_networks', label: 'Social Networks', value: 30.9, notes: ['+4% Y/Y'] },
          { id: 'marketing_services', label: 'Marketing Services', value: 30.0, valueText: '30.0', notes: ['+17% Y/Y'] },
          { id: 'fintech_business_services', label: 'Finance & Business Services', value: 53.1, notes: ['+2% Y/Y'] },
          { id: 'others', label: 'Others', value: 1.4, notes: ['+17% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 78.4 },
        operatingExpenses: {
          total: 38.5,
          items: [
            { id: 'rnd', label: 'Research & development', value: 17.9, notes: ['11% of revenue', '+0pp Y/Y'] },
            { id: 'ga', label: 'General & admin', value: 11.2, notes: ['7% of revenue', '+0pp Y/Y'] },
            { id: 'sm', label: 'Sales & marketing', value: 9.4, notes: ['6% of revenue', '+1pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 8.9 },
      },
      operatingOtherIncome: {
        total: 3.0,
        items: [{ id: 'other_operating_income', label: 'Other', value: 3.0 }],
      },
      otherIncome: {
        total: 9.6,
        items: [
          {
            id: 'non_operating_other_income',
            label: 'Other',
            value: 9.6,
            notes: ['Aggregated non-operating investment, interest, finance, and associate/JV line items.'],
          },
        ],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 88.8, notes: ['53% margin', '+4pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 53.3, notes: ['32% margin', '+3pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 54.0, valueText: '54.0', notes: ['32% margin', '+8pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第三季度',
          periodNote: '截至 2024 年 9 月',
          revenue: {
            notes: ['同比 +8%'],
            items: [
              { id: 'gaming', label: '游戏', notes: ['同比 +13%'] },
              { id: 'social_networks', label: '社交网络', notes: ['同比 +4%'] },
              { id: 'marketing_services', label: '营销服务', notes: ['同比 +17%'] },
              { id: 'fintech_business_services', label: '金融与企业服务', notes: ['同比 +2%'] },
              { id: 'others', label: '其他', notes: ['同比 +17%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 11%', '同比 0 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 7%', '同比 0 个百分点'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 6%', '同比 +1 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          operatingOtherIncome: {
            items: [{ id: 'other_operating_income', label: '其他' }],
          },
          otherIncome: {
            items: [
              { id: 'non_operating_other_income', label: '其他', notes: ['汇总非经营性投资、利息、财务以及联营/JV 项目。'] },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 53%', '同比 +4 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 32%', '同比 +3 个百分点'] },
            net: { label: '净利润', notes: ['利润率 32%', '同比 +8 个百分点'] },
          },
        },
      },
    },
    {
      key: 'tencent-q3-fy25',
      company: 'Tencent',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: 'RMB',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/tencent-q3-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 192.9,
        notes: ['+15% Y/Y'],
        items: [
          { id: 'gaming', label: 'Gaming', value: 63.6, notes: ['+23% Y/Y'] },
          { id: 'social_networks', label: 'Social Networks', value: 32.3, notes: ['+5% Y/Y'] },
          { id: 'marketing_services', label: 'Marketing Services', value: 36.2, notes: ['+21% Y/Y'] },
          { id: 'fintech_business_services', label: 'FinTech & Business Services', value: 58.2, notes: ['+10% Y/Y'] },
          { id: 'others', label: 'Others', value: 2.6, notes: ['+83% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 84.1 },
        operatingExpenses: {
          total: 45.7,
          items: [
            { id: 'rnd', label: 'Research & development', value: 22.8, notes: ['12% of revenue', '+1pp Y/Y'] },
            { id: 'sm', label: 'Sales & marketing', value: 11.5, notes: ['6% of revenue', '+0pp Y/Y'] },
            { id: 'ga', label: 'General & admin', value: 11.4, notes: ['6% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 9.8 },
      },
      operatingOtherIncome: {
        total: 0.5,
        items: [{ id: 'other_operating_income', label: 'Other', value: 0.5 }],
      },
      otherIncome: {
        total: 11.1,
        items: [
          {
            id: 'investments',
            label: 'Investments',
            value: 11.1,
            notes: ['Aggregated non-operating investment, interest, finance, and associate/JV line items.'],
          },
        ],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 108.8, notes: ['56% margin', '+3pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 63.6, notes: ['33% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 64.9, notes: ['34% margin', '+1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          revenue: {
            notes: ['同比 +15%'],
            items: [
              { id: 'gaming', label: '游戏', notes: ['同比 +23%'] },
              { id: 'social_networks', label: '社交网络', notes: ['同比 +5%'] },
              { id: 'marketing_services', label: '营销服务', notes: ['同比 +21%'] },
              { id: 'fintech_business_services', label: '金融科技与企业服务', notes: ['同比 +10%'] },
              { id: 'others', label: '其他', notes: ['同比 +83%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 12%', '同比 +1 个百分点'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 6%', '同比 0 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 6%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          operatingOtherIncome: {
            items: [{ id: 'other_operating_income', label: '其他' }],
          },
          otherIncome: {
            items: [
              { id: 'investments', label: '投资收益', notes: ['汇总非经营性投资、利息、财务以及联营/JV 项目。'] },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 56%', '同比 +3 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 33%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 34%', '同比 +1 个百分点'] },
          },
        },
      },
    },
    {
      key: 'tencent-q4-fy25',
      company: 'Tencent',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: 'RMB',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/tencent-q4-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 194.4,
        notes: ['+13% Y/Y'],
        items: [
          { id: 'gaming', label: 'Gaming', value: 59.3, notes: ['+21% Y/Y'] },
          { id: 'social_networks', label: 'Social Networks', value: 30.6, notes: ['+3% Y/Y'] },
          { id: 'marketing_services', label: 'Marketing Services', value: 41.1, notes: ['+17% Y/Y'] },
          { id: 'fintech_business_services', label: 'FinTech & Business Services', value: 60.8, notes: ['+8% Y/Y'] },
          { id: 'others', label: 'Others', value: 2.6, notes: ['+13% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 86.1 },
        operatingExpenses: {
          total: 48.0,
          notes: ['Source chart shows other operating gains as an offset before operating profit.'],
          items: [
            { id: 'rnd', label: 'Research & development', value: 23.8, notes: ['12% of revenue', '+1pp Y/Y'] },
            { id: 'sm', label: 'Sales & marketing', value: 13.0, notes: ['7% of revenue', '+1pp Y/Y'] },
            { id: 'ga', label: 'General & admin', value: 12.5, notes: ['6% of revenue', '(0pp) Y/Y'] },
            { id: 'other_operating_gains', label: 'Other operating gains', value: -1.3 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 12.6 },
      },
      otherIncome: {
        total: 11.3,
        items: [
          {
            id: 'investments',
            label: 'Investments',
            value: 11.3,
            notes: ['Aggregated non-operating investment, interest, finance, and associate/JV line items.'],
          },
        ],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 108.3, notes: ['56% margin', '+3pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 60.3, notes: ['31% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 59.1, notes: ['30% margin', '+1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +13%'],
            items: [
              { id: 'gaming', label: '游戏', notes: ['同比 +21%'] },
              { id: 'social_networks', label: '社交网络', notes: ['同比 +3%'] },
              { id: 'marketing_services', label: '营销服务', notes: ['同比 +17%'] },
              { id: 'fintech_business_services', label: '金融科技与企业服务', notes: ['同比 +8%'] },
              { id: 'others', label: '其他', notes: ['同比 +13%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 12%', '同比 +1 个百分点'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 7%', '同比 +1 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 6%', '同比 0 个百分点'] },
                { id: 'other_operating_gains', label: '其他营业收益' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'investments', label: '投资收益', notes: ['汇总非经营性投资、利息、财务以及联营/JV 项目。'] },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 56%', '同比 +3 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 31%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 30%', '同比 +1 个百分点'] },
          },
        },
      },
    },
    {
      key: 'tencent-q1-fy26',
      company: 'Tencent',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: 'RMB',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/tencent-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 196.5,
        notes: ['+9% Y/Y'],
        items: [
          { id: 'gaming', label: 'Gaming', value: 64.2, notes: ['+8% Y/Y'] },
          { id: 'social_networks', label: 'Social Networks', value: 31.9, notes: ['(2%) Y/Y'] },
          { id: 'marketing_services', label: 'Marketing Services', value: 38.2, notes: ['+20% Y/Y'] },
          { id: 'fintech_business_services', label: 'FinTech & Business Services', value: 59.9, notes: ['+9% Y/Y'] },
          { id: 'others', label: 'Others', value: 2.3, notes: ['+103% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 85.2 },
        operatingExpenses: {
          total: 43.9,
          notes: ['Source chart shows other operating gains as an offset before operating profit.'],
          items: [
            { id: 'rnd', label: 'Research & development', value: 22.6, notes: ['12% of revenue', '+1pp Y/Y'] },
            { id: 'sm', label: 'Sales & marketing', value: 11.3, notes: ['6% of revenue', '+1pp Y/Y'] },
            { id: 'ga', label: 'General & admin', value: 11.3, notes: ['6% of revenue', '(2pp) Y/Y'] },
            { id: 'other_operating_gains', label: 'Other operating gains', value: -1.3 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 14.6 },
      },
      otherIncome: {
        total: 6.6,
        items: [
          {
            id: 'investments',
            label: 'Investments',
            value: 6.6,
            notes: ['Aggregated non-operating investment, interest, finance, and associate/JV line items.'],
          },
        ],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 111.3, notes: ['57% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 67.4, notes: ['34% margin', '+2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 59.4, notes: ['30% margin', '+3pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +9%'],
            items: [
              { id: 'gaming', label: '游戏', notes: ['同比 +8%'] },
              { id: 'social_networks', label: '社交网络', notes: ['同比 (2%)'] },
              { id: 'marketing_services', label: '营销服务', notes: ['同比 +20%'] },
              { id: 'fintech_business_services', label: '金融科技与企业服务', notes: ['同比 +9%'] },
              { id: 'others', label: '其他', notes: ['同比 +103%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 12%', '同比 +1 个百分点'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 6%', '同比 +1 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 6%', '同比 (2 个百分点)'] },
                { id: 'other_operating_gains', label: '其他营业收益' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'investments', label: '投资收益', notes: ['汇总非经营性投资、利息、财务以及联营/JV 项目。'] },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 57%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 34%', '同比 +2 个百分点'] },
            net: { label: '净利润', notes: ['利润率 30%', '同比 +3 个百分点'] },
          },
        },
      },
    }
  );
})(window);
