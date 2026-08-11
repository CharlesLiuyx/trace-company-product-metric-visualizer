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
      key: 'uber-q3-fy22',
      company: 'Uber',
      period: 'Q3 FY22',
      periodNote: 'Ending Sep. 2022',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/uber-q3-fy22.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 8.3,
        notes: ['+72% Y/Y'],
        items: [
          { id: 'mobility', label: 'Mobility', value: 3.8, notes: ['+73% Y/Y', '23% adjusted margin'] },
          { id: 'delivery', label: 'Delivery', value: 2.8, notes: ['+24% Y/Y', '7% adjusted margin'] },
          { id: 'freight', label: 'Uber Freight', value: 1.8, notes: ['+336% Y/Y', '0.1% adjusted margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 5.2 },
        operatingExpenses: {
          total: 3.7,
          items: [
            { id: 'operations', label: 'Operations & Support', value: 0.6, notes: ['7% of revenue', '(2pp) Y/Y'] },
            { id: 'sm', label: 'Sales & marketing', value: 1.2, notes: ['14% of revenue', '(10pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 0.8, notes: ['9% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'General & Admin', value: 0.9, notes: ['11% of revenue', '(2pp) Y/Y'] },
            { id: 'da', label: 'Depreciation & Amortization', value: 0.2, notes: ['3% of revenue', '(2pp) Y/Y'] },
          ],
        },
        tax: { label: 'Tax', value: 0 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 3.2, notes: ['38% margin', '(12pp) Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -0.5, notes: ['(6%) margin', '+6pp Y/Y'] },
        net: { id: 'operating_loss', label: 'Operating loss', value: -0.5, notes: ['No separate net income or net loss line is shown in the Source infographic.'] },
      },
      source: {
        title: 'Uber Announces Results for Third Quarter 2022',
        url: 'https://investor.uber.com/news-events/news/press-release-details/2022/Uber-Announces-Results-for-Third-Quarter-2022/default.aspx',
        asOf: '2022-09-30',
      },
      i18n: {
        zh: {
          period: '2022 财年第三季度',
          periodNote: '截至 2022 年 9 月',
          revenue: {
            notes: ['同比 +72%'],
            items: [
              { id: 'mobility', label: '出行', notes: ['同比 +73%', '调整后利润率 23%'] },
              { id: 'delivery', label: '配送', notes: ['同比 +24%', '调整后利润率 7%'] },
              { id: 'freight', label: 'Uber Freight 货运', notes: ['同比 +336%', '调整后利润率 0.1%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'operations', label: '运营与支持', notes: ['占收入 7%', '同比 (2 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 14%', '同比 (10 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 9%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 11%', '同比 (2 个百分点)'] },
                { id: 'da', label: '折旧与摊销', notes: ['占收入 3%', '同比 (2 个百分点)'] },
              ],
            },
            tax: { label: '税项' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 38%', '同比 (12 个百分点)'] },
            operating: { label: '营业亏损', notes: ['利润率 (6%)', '同比 +6 个百分点'] },
            net: { label: '营业亏损', notes: ['来源图未单独展示净利润或净亏损。'] },
          },
        },
      },
    },
    {
      key: 'uber-q4-fy23',
      company: 'Uber',
      period: 'Q4 FY23',
      periodNote: 'Ending Dec. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/uber-q4-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 9.9,
        notes: ['+15% Y/Y'],
        items: [
          { id: 'mobility', label: 'Mobility', value: 5.5, notes: ['+34% Y/Y', '26% adjusted margin'] },
          { id: 'delivery', label: 'Delivery', value: 3.1, notes: ['+6% Y/Y', '15% adjusted margin'] },
          { id: 'freight', label: 'Uber Freight', value: 1.3, notes: ['(17%) Y/Y', '(1%) adjusted margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 6.1 },
        operatingExpenses: {
          total: 3.2,
          items: [
            { id: 'sm', label: 'S&M', value: 0.9, notes: ['9% of revenue', '(4pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 0.8, notes: ['8% of revenue', '(1pp) Y/Y'] },
            { id: 'operations', label: 'Operations', value: 0.7, notes: ['7% of revenue', '+0pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.6, notes: ['6% of revenue', '(3pp) Y/Y'] },
            { id: 'da', label: 'D&A', value: 0.2, notes: ['2% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.1 },
      },
      otherIncome: {
        total: 1.3,
        items: [{ id: 'equity_investments', label: 'Equity investments', value: 1.3 }],
      },
      otherExpenses: {
        total: 0.2,
        items: [{ id: 'interest', label: 'Interest', value: 0.2 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 3.9, notes: ['39% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.7, notes: ['7% margin', '+8pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.7, notes: ['17% margin', '+10pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第四季度',
          periodNote: '截至 2023 年 12 月',
          revenue: {
            notes: ['同比 +15%'],
            items: [
              { id: 'mobility', label: '出行', notes: ['同比 +34%', '调整后利润率 26%'] },
              { id: 'delivery', label: '配送', notes: ['同比 +6%', '调整后利润率 15%'] },
              { id: 'freight', label: 'Uber Freight 货运', notes: ['同比 (17%)', '调整后利润率 (1%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 9%', '同比 (4 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 8%', '同比 (1 个百分点)'] },
                { id: 'operations', label: '运营', notes: ['占收入 7%', '同比 +0 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 6%', '同比 (3 个百分点)'] },
                { id: 'da', label: '折旧与摊销', notes: ['占收入 2%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'equity_investments', label: '权益投资' }] },
          otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 39%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 7%', '同比 +8 个百分点'] },
            net: { label: '净利润', notes: ['利润率 17%', '同比 +10 个百分点'] },
          },
        },
      },
    },
    {
      key: 'uber-q1-fy24',
      company: 'Uber',
      period: 'Q1 FY24',
      periodNote: 'Ending Mar. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/uber-q1-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 10.1,
        notes: ['+15% Y/Y'],
        items: [
          { id: 'mobility', label: 'Mobility', value: 5.6, notes: ['+30% Y/Y', '26% adjusted margin'] },
          { id: 'delivery', label: 'Delivery', value: 3.2, notes: ['+4% Y/Y', '16% adjusted margin'] },
          { id: 'freight', label: 'Uber Freight', value: 1.3, notes: ['(8%) Y/Y', '(2%) adjusted margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 6.2 },
        operatingExpenses: {
          total: 3.8,
          items: [
            { id: 'ga', label: 'G&A', value: 1.2, notes: ['12% of revenue', '+1pp Y/Y'] },
            { id: 'sm', label: 'S&M', value: 0.9, notes: ['9% of revenue', '(5pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 0.8, notes: ['8% of revenue', '(1pp) Y/Y'] },
            { id: 'operations', label: 'Operations', value: 0.7, notes: ['7% of revenue', '(0pp) Y/Y'] },
            { id: 'da', label: 'D&A', value: 0.2, notes: ['2% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { label: 'Tax', value: 0 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.8,
        items: [{ id: 'equity_investments_and_other', label: 'Equity investments & Other', value: 0.8 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 4.0, notes: ['39% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.2, notes: ['2% margin', '+5pp Y/Y'] },
        net: { id: 'net_loss', label: 'Net loss', value: -0.7 },
      },
      i18n: {
        zh: {
          period: '2024 财年第一季度',
          periodNote: '截至 2024 年 3 月',
          revenue: {
            notes: ['同比 +15%'],
            items: [
              { id: 'mobility', label: '出行', notes: ['同比 +30%', '调整后利润率 26%'] },
              { id: 'delivery', label: '配送', notes: ['同比 +4%', '调整后利润率 16%'] },
              { id: 'freight', label: 'Uber Freight 货运', notes: ['同比 (8%)', '调整后利润率 (2%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'ga', label: '管理费用', notes: ['占收入 12%', '同比 +1 个百分点'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 9%', '同比 (5 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 8%', '同比 (1 个百分点)'] },
                { id: 'operations', label: '运营', notes: ['占收入 7%', '同比 (0 个百分点)'] },
                { id: 'da', label: '折旧与摊销', notes: ['占收入 2%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [{ id: 'equity_investments_and_other', label: '股权投资及其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 39%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 2%', '同比 +5 个百分点'] },
            net: { label: '净亏损' },
          },
        },
      },
    },
    {
      key: 'uber-q3-fy24',
      company: 'Uber',
      period: 'Q3 FY24',
      periodNote: 'Ending Sep. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/uber-q3-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 11.1,
        notes: ['+20% Y/Y'],
        items: [
          { id: 'mobility', label: 'Mobility', value: 6.4, notes: ['+26% Y/Y', '26% adjusted margin'] },
          { id: 'delivery', label: 'Delivery', value: 3.5, notes: ['+18% Y/Y', '18% adjusted margin'] },
          { id: 'freight', label: 'Uber Freight', value: 1.3, notes: ['+2% Y/Y', '(1%) adjusted margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 6.8 },
        operatingExpenses: {
          total: 3.4,
          items: [
            { id: 'sm', label: 'S&M', value: 1.1, notes: ['10% of revenue', '(0pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 0.8, notes: ['7% of revenue', '(2pp) Y/Y'] },
            { id: 'operations', label: 'Operations', value: 0.7, notes: ['6% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.6, notes: ['6% of revenue', '(1pp) Y/Y'] },
            { id: 'da', label: 'D&A', value: 0.2, notes: ['2% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.2 },
      },
      otherIncome: { total: 1.8, items: [{ id: 'other', label: 'Other', value: 1.8 }] },
      otherExpenses: { total: 0.1, items: [{ id: 'interest', label: 'Interest', value: 0.1 }] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 4.4, notes: ['40% margin', '+0pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.1, notes: ['9% margin', '+5pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.6, notes: ['23% margin', '+21pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第三季度',
          periodNote: '截至 2024 年 9 月',
          revenue: {
            notes: ['同比 +20%'],
            items: [
              { id: 'mobility', label: '出行', notes: ['同比 +26%', '调整后利润率 26%'] },
              { id: 'delivery', label: '配送', notes: ['同比 +18%', '调整后利润率 18%'] },
              { id: 'freight', label: 'Uber Freight 货运', notes: ['同比 +2%', '调整后利润率 (1%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 10%', '同比 (0 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 7%', '同比 (2 个百分点)'] },
                { id: 'operations', label: '运营', notes: ['占收入 6%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 6%', '同比 (1 个百分点)'] },
                { id: 'da', label: '折旧与摊销', notes: ['占收入 2%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other', label: '其他' }] },
          otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 40%', '同比 +0 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 9%', '同比 +5 个百分点'] },
            net: { label: '净利润', notes: ['利润率 23%', '同比 +21 个百分点'] },
          },
        },
      },
    },
    {
      key: 'uber-q1-fy25',
      company: 'Uber',
      period: 'Q1 FY25',
      periodNote: 'Ending Mar. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/uber-q1-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 11.5,
        notes: ['+14% Y/Y'],
        items: [
          { id: 'mobility', label: 'Mobility', value: 6.5, notes: ['+15% Y/Y', '27% adjusted margin', '+1pp Y/Y'] },
          { id: 'delivery', label: 'Delivery', value: 3.8, notes: ['+18% Y/Y', '20% adjusted margin', '+4pp Y/Y'] },
          { id: 'freight', label: 'Uber Freight', value: 1.3, notes: ['(2%) Y/Y', '(1%) adjusted margin', '+1pp Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 6.9 },
        operatingExpenses: {
          total: 3.4,
          items: [
            { id: 'sm', label: 'S&M', value: 1.1, notes: ['9% of revenue', '+1pp Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 0.8, notes: ['7% of revenue', '(2pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.7, notes: ['6% of revenue', '(6pp) Y/Y'] },
            { id: 'operations', label: 'Operations', value: 0.7, notes: ['6% of revenue', '(1pp) Y/Y'] },
            { id: 'da', label: 'D&A', value: 0.2, notes: ['1% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { label: 'Tax', value: 0 },
      },
      otherIncome: {
        total: 0.6,
        items: [
          { id: 'tax_benefit', label: 'Tax benefit', value: 0.4 },
          { id: 'other', label: 'Other', value: 0.2 },
        ],
      },
      otherExpenses: {
        total: 0.1,
        items: [{ id: 'interest', label: 'Interest', value: 0.1 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 4.6, notes: ['40% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.2, notes: ['11% margin', '+9pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.8 },
      },
      i18n: {
        zh: {
          period: '2025 财年第一季度',
          periodNote: '截至 2025 年 3 月',
          revenue: {
            notes: ['同比 +14%'],
            items: [
              { id: 'mobility', label: '出行', notes: ['同比 +15%', '调整后利润率 27%', '同比 +1 个百分点'] },
              { id: 'delivery', label: '配送', notes: ['同比 +18%', '调整后利润率 20%', '同比 +4 个百分点'] },
              { id: 'freight', label: 'Uber Freight 货运', notes: ['同比 (2%)', '调整后利润率 (1%)', '同比 +1 个百分点'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 9%', '同比 +1 个百分点'] },
                { id: 'rnd', label: '研发', notes: ['占收入 7%', '同比 (2 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 6%', '同比 (6 个百分点)'] },
                { id: 'operations', label: '运营', notes: ['占收入 6%', '同比 (1 个百分点)'] },
                { id: 'da', label: '折旧与摊销', notes: ['占收入 1%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'tax_benefit', label: '税收收益' },
              { id: 'other', label: '其他' },
            ],
          },
          otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 40%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 11%', '同比 +9 个百分点'] },
            net: { label: '净利润' },
          },
        },
      },
    },
    {
      key: 'uber-q2-fy23',
      company: 'Uber',
      period: 'Q2 FY23',
      periodNote: 'Ending Jun. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/uber-q2-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 9.2,
        notes: ['+14% Y/Y'],
        items: [
          { id: 'mobility', label: 'Mobility', value: 4.9, notes: ['+38% Y/Y', '24% adjusted margin'] },
          { id: 'delivery', label: 'Delivery', value: 3.1, notes: ['+14% Y/Y', '11% adjusted margin'] },
          { id: 'freight', label: 'Uber Freight', value: 1.3, notes: ['(30%) Y/Y', '(1%) adjusted margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 5.5 },
        operatingExpenses: {
          total: 3.4,
          items: [
            { id: 'sm', label: 'S&M', value: 1.2, notes: ['13% of revenue', '(2pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 0.8, notes: ['9% of revenue', '+0pp Y/Y'] },
            { id: 'operations', label: 'Operations', value: 0.7, notes: ['7% of revenue', '+0pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.5, notes: ['5% of revenue', '(5pp) Y/Y'] },
            { id: 'da', label: 'D&A', value: 0.2, notes: ['2% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.1 },
      },
      otherIncome: { total: 0.3, items: [{ id: 'other', label: 'Other', value: 0.3 }] },
      otherExpenses: { total: 0.1, items: [{ id: 'interest', label: 'Interest', value: 0.1 }] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 3.7, notes: ['40% margin', '+4pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.3, notes: ['4% margin', '+12pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.4, notes: ['4% margin', '+37pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第二季度',
          periodNote: '截至 2023 年 6 月',
          revenue: {
            notes: ['同比 +14%'],
            items: [
              { id: 'mobility', label: '出行', notes: ['同比 +38%', '调整后利润率 24%'] },
              { id: 'delivery', label: '配送', notes: ['同比 +14%', '调整后利润率 11%'] },
              { id: 'freight', label: 'Uber Freight 货运', notes: ['同比 (30%)', '调整后利润率 (1%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 13%', '同比 (2 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 9%', '同比 +0 个百分点'] },
                { id: 'operations', label: '运营', notes: ['占收入 7%', '同比 +0 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 5%', '同比 (5 个百分点)'] },
                { id: 'da', label: '折旧与摊销', notes: ['占收入 2%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other', label: '其他' }] },
          otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 40%', '同比 +4 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 4%', '同比 +12 个百分点'] },
            net: { label: '净利润', notes: ['利润率 4%', '同比 +37 个百分点'] },
          },
        },
      },
    },
    {
      key: 'uber-q1-fy23',
      company: 'Uber',
      period: 'Q1 FY23',
      periodNote: 'Ending Mar. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/uber-q1-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 8.8,
        notes: ['+29% Y/Y'],
        items: [
          { id: 'mobility', label: 'Mobility', value: 4.3, notes: ['+72% Y/Y', '24% adjusted margin'] },
          { id: 'delivery', label: 'Delivery', value: 3.1, notes: ['+23% Y/Y', '9% adjusted margin'] },
          { id: 'freight', label: 'Uber Freight', value: 1.4, notes: ['(23%) Y/Y', '(2%) adjusted margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 5.3 },
        operatingExpenses: {
          total: 3.8,
          items: [
            { id: 'operations_support', label: 'Operations & Support', value: 0.6, notes: ['7% of revenue', '(1pp) Y/Y'] },
            { id: 'sm', label: 'Sales & marketing', value: 1.3, notes: ['14% of revenue', '(4pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 0.8, notes: ['9% of revenue', '+0pp Y/Y'] },
            { id: 'ga', label: 'General & Admin', value: 0.9, notes: ['11% of revenue', '+1pp Y/Y'] },
            { id: 'da', label: 'Depreciation & Amortization', value: 0.2, notes: ['2% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 3.6, notes: ['40% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -0.3, notes: ['(3%) margin', '+4pp Y/Y'] },
        net: { id: 'operating_loss', label: 'Operating loss', value: -0.3, notes: ['No separate net income or net loss line is shown in the Source infographic.'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第一季度',
          periodNote: '截至 2023 年 3 月',
          revenue: {
            notes: ['同比 +29%'],
            items: [
              { id: 'mobility', label: '出行', notes: ['同比 +72%', '调整后利润率 24%'] },
              { id: 'delivery', label: '配送', notes: ['同比 +23%', '调整后利润率 9%'] },
              { id: 'freight', label: 'Uber Freight 货运', notes: ['同比 (23%)', '调整后利润率 (2%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'operations_support', label: '运营与支持', notes: ['占收入 7%', '同比 (1 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 14%', '同比 (4 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 9%', '同比 +0 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 11%', '同比 +1 个百分点'] },
                { id: 'da', label: '折旧与摊销', notes: ['占收入 2%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 40%', '同比 (1 个百分点)'] },
            operating: { label: '营业亏损', notes: ['利润率 (3%)', '同比 +4 个百分点'] },
            net: { label: '营业亏损', notes: ['来源图未单列净利润或净亏损。'] },
          },
        },
      },
    },
    {
      key: 'uber-q1-fy26',
      company: 'Uber',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/uber-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 13.2,
        notes: ['+14% Y/Y'],
        items: [
          { id: 'mobility', label: 'Mobility', value: 6.8, notes: ['+5% Y/Y', '30% adjusted margin', '+3pp Y/Y'] },
          { id: 'delivery', label: 'Delivery', value: 5.1, notes: ['+34% Y/Y', '19% adjusted margin', '(0pp) Y/Y'] },
          { id: 'freight', label: 'Uber Freight', value: 1.3, notes: ['+6% Y/Y', '0% adjusted margin', '(0pp) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 7.3 },
        operatingExpenses: {
          total: 4.0,
          items: [
            { id: 'sm', label: 'S&M', value: 1.3, notes: ['10% of revenue', '+1pp Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 1.0, notes: ['7% of revenue', '+0pp Y/Y'] },
            { id: 'operations', label: 'Operations', value: 0.8, notes: ['6% of revenue', '(0pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.8, notes: ['6% of revenue', '+0pp Y/Y'] },
            { id: 'da', label: 'D&A', value: 0.2, notes: ['1% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.2, notes: ['source label reads ($1.2B)'] },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 1.4,
        items: [{ id: 'other', label: 'Other', value: 1.4 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 5.9, notes: ['45% margin', '+5pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.9, notes: ['15% margin', '+4pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.3 },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +14%'],
            items: [
              { id: 'mobility', label: '出行', notes: ['同比 +5%', '调整后利润率 30%', '同比 +3 个百分点'] },
              { id: 'delivery', label: '配送', notes: ['同比 +34%', '调整后利润率 19%', '同比 (0 个百分点)'] },
              { id: 'freight', label: 'Uber Freight 货运', notes: ['同比 +6%', '调整后利润率 0%', '同比 (0 个百分点)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 10%', '同比 +1 个百分点'] },
                { id: 'rnd', label: '研发', notes: ['占收入 7%', '同比 +0 个百分点'] },
                { id: 'operations', label: '运营', notes: ['占收入 6%', '同比 (0 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 6%', '同比 +0 个百分点'] },
                { id: 'da', label: '折旧与摊销', notes: ['占收入 1%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费', notes: ['来源图表标注为 ($1.2B)'] },
          },
          otherExpenses: {
            items: [{ id: 'other', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 45%', '同比 +5 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 15%', '同比 +4 个百分点'] },
            net: { label: '净利润' },
          },
        },
      },
    },
    {
      key: 'uber-q2-fy25',
      company: 'Uber',
      period: 'Q2 FY25',
      periodNote: 'Ending Jun. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/uber-q2-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 12.7,
        notes: ['+18% Y/Y'],
        items: [
          { id: 'mobility', label: 'Mobility', value: 7.3, notes: ['+19% Y/Y', '26% adjusted margin', '+1pp Y/Y'] },
          { id: 'delivery', label: 'Delivery', value: 4.1, notes: ['+25% Y/Y', '21% adjusted margin', '+3pp Y/Y'] },
          { id: 'freight', label: 'Uber Freight', value: 1.3, notes: ['(1%) Y/Y', '(0%) adjusted margin', '+0pp Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 7.6 },
        operatingExpenses: {
          total: 3.6,
          items: [
            { id: 'sm', label: 'S&M', value: 1.2, notes: ['10% of revenue', '(1pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 0.8, notes: ['7% of revenue', '(0pp) Y/Y'] },
            { id: 'operations', label: 'Operations', value: 0.7, notes: ['6% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.7, notes: ['5% of revenue', '(1pp) Y/Y'] },
            { id: 'da', label: 'D&A', value: 0.2, notes: ['1% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax_interest', label: 'Tax & Interest', value: 0.3 },
      },
      otherIncome: {
        total: 0.2,
        items: [{ id: 'other', label: 'Other', value: 0.2 }],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 5.0, notes: ['40% margin', '+0pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.5, notes: ['11% margin', '+4pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.4, notes: ['11% margin', '+1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第二季度',
          periodNote: '截至 2025 年 6 月',
          revenue: {
            notes: ['同比 +18%'],
            items: [
              { id: 'mobility', label: '出行', notes: ['同比 +19%', '调整后利润率 26%', '同比 +1 个百分点'] },
              { id: 'delivery', label: '配送', notes: ['同比 +25%', '调整后利润率 21%', '同比 +3 个百分点'] },
              { id: 'freight', label: 'Uber Freight 货运', notes: ['同比 (1%)', '调整后利润率 (0%)', '同比 +0 个百分点'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 10%', '同比 (1 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 7%', '同比 (0 个百分点)'] },
                { id: 'operations', label: '运营', notes: ['占收入 6%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 5%', '同比 (1 个百分点)'] },
                { id: 'da', label: '折旧与摊销', notes: ['占收入 1%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费及利息' },
          },
          otherIncome: { items: [{ id: 'other', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 40%', '同比 +0 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 11%', '同比 +4 个百分点'] },
            net: { label: '净利润', notes: ['利润率 11%', '同比 +1 个百分点'] },
          },
        },
      },
    },
    {
      key: 'uber-q4-fy24',
      company: 'Uber',
      period: 'Q4 FY24',
      periodNote: 'Ending Dec. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/uber-q4-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 12.0,
        notes: ['+20% Y/Y'],
        items: [
          { id: 'mobility', label: 'Mobility', value: 6.9, notes: ['+25% Y/Y', '21% adjusted margin'] },
          { id: 'delivery', label: 'Delivery', value: 3.8, notes: ['+21% Y/Y', '13% adjusted margin'] },
          { id: 'freight', label: 'Uber Freight', value: 1.3, notes: ['(0%) Y/Y', '(1%) adjusted margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 7.2 },
        operatingExpenses: {
          total: 4.0,
          items: [
            { id: 'sm', label: 'S&M', value: 1.2, notes: ['10% of revenue', '+1pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 1.1, notes: ['9% of revenue', '+3pp Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 0.8, notes: ['7% of revenue', '(1pp) Y/Y'] },
            { id: 'operations', label: 'Operations', value: 0.7, notes: ['6% of revenue', '(1pp) Y/Y'] },
            { id: 'da', label: 'D&A', value: 0.2, notes: ['1% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { label: 'Tax', value: 0 },
      },
      otherIncome: {
        total: 6.2,
        items: [
          { id: 'tax_benefit', label: 'Tax benefit', value: 6.0 },
          { id: 'other', label: 'Other', value: 0.2 },
        ],
      },
      otherExpenses: {
        total: 0.1,
        items: [{ id: 'interest', label: 'Interest', value: 0.1 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 4.7, notes: ['40% margin', '+0pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.8, notes: ['6% margin', '(0pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 6.9 },
      },
      i18n: {
        zh: {
          period: '2024 财年第四季度',
          periodNote: '截至 2024 年 12 月',
          revenue: {
            notes: ['同比 +20%'],
            items: [
              { id: 'mobility', label: '出行', notes: ['同比 +25%', '调整后利润率 21%'] },
              { id: 'delivery', label: '配送', notes: ['同比 +21%', '调整后利润率 13%'] },
              { id: 'freight', label: 'Uber Freight 货运', notes: ['同比 (0%)', '调整后利润率 (1%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 10%', '同比 +1 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 9%', '同比 +3 个百分点'] },
                { id: 'rnd', label: '研发', notes: ['占收入 7%', '同比 (1 个百分点)'] },
                { id: 'operations', label: '运营', notes: ['占收入 6%', '同比 (1 个百分点)'] },
                { id: 'da', label: '折旧与摊销', notes: ['占收入 1%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'tax_benefit', label: '税收收益' },
              { id: 'other', label: '其他' },
            ],
          },
          otherExpenses: {
            items: [{ id: 'interest', label: '利息' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 40%', '同比 +0 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 6%', '同比 (0 个百分点)'] },
            net: { label: '净利润' },
          },
        },
      },
    },
    {
      key: 'uber-q2-fy24',
      company: 'Uber',
      period: 'Q2 FY24',
      periodNote: 'Ending Jun. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/uber-q2-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 10.7,
        notes: ['+16% Y/Y'],
        items: [
          { id: 'mobility', label: 'Mobility', value: 6.1, notes: ['+25% Y/Y', '26% adjusted margin'] },
          { id: 'delivery', label: 'Delivery', value: 3.3, notes: ['+8% Y/Y', '18% adjusted margin'] },
          { id: 'freight', label: 'Uber Freight', value: 1.3, notes: ['(0%) Y/Y', '(1%) adjusted margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 6.5 },
        operatingExpenses: {
          total: 3.4,
          items: [
            { id: 'sm', label: 'S&M', value: 1.1, notes: ['10% of revenue', '(3pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 0.8, notes: ['7% of revenue', '(2pp) Y/Y'] },
            { id: 'operations', label: 'Operations', value: 0.7, notes: ['6% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.7, notes: ['6% of revenue', '+1pp Y/Y'] },
            { id: 'da', label: 'D&A', value: 0.2, notes: ['2% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.1 },
      },
      otherIncome: {
        total: 0.4,
        items: [{ id: 'other', label: 'Other', value: 0.4 }],
      },
      otherExpenses: {
        total: 0.1,
        items: [{ id: 'interest', label: 'Interest', value: 0.1 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 4.2, notes: ['39% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.8, notes: ['7% margin', '+10pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.0, notes: ['9% margin', '+5pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第二季度',
          periodNote: '截至 2024 年 6 月',
          revenue: {
            notes: ['同比 +16%'],
            items: [
              { id: 'mobility', label: '出行', notes: ['同比 +25%', '调整后利润率 26%'] },
              { id: 'delivery', label: '配送', notes: ['同比 +8%', '调整后利润率 18%'] },
              { id: 'freight', label: 'Uber Freight 货运', notes: ['同比 (0%)', '调整后利润率 (1%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 10%', '同比 (3 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 7%', '同比 (2 个百分点)'] },
                { id: 'operations', label: '运营', notes: ['占收入 6%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 6%', '同比 +1 个百分点'] },
                { id: 'da', label: '折旧与摊销', notes: ['占收入 2%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other', label: '其他' }] },
          otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 39%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 7%', '同比 +10 个百分点'] },
            net: { label: '净利润', notes: ['利润率 9%', '同比 +5 个百分点'] },
          },
        },
      },
    },
    {
      key: 'uber-q3-fy25',
      company: 'Uber',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/uber-q3-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 13.5,
        notes: ['+20% Y/Y'],
        items: [
          { id: 'mobility', label: 'Mobility', value: 7.7, notes: ['+20% Y/Y', '27% adjusted margin', '+0pp Y/Y'] },
          { id: 'delivery', label: 'Delivery', value: 4.5, notes: ['+29% Y/Y', '21% adjusted margin', '+2pp Y/Y'] },
          { id: 'freight', label: 'Uber Freight', value: 1.3, notes: ['(0%) Y/Y', '(2%) adjusted margin', '(0pp) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 8.1 },
        operatingExpenses: {
          total: 4.2,
          items: [
            { id: 'sm', label: 'S&M', value: 1.3, notes: ['10% of revenue', '(0pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 1.2, notes: ['9% of revenue', '+3pp Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 0.9, notes: ['7% of revenue', '(1pp) Y/Y'] },
            { id: 'operations', label: 'Operations', value: 0.7, notes: ['5% of revenue', '(1pp) Y/Y'] },
            { id: 'da', label: 'D&A', value: 0.2, notes: ['1% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { label: 'Tax', value: 0 },
      },
      otherIncome: {
        total: 5.7,
        items: [{ id: 'tax_benefit_and_other', label: 'Tax benefit & Other', value: 5.7 }],
      },
      otherExpenses: {
        total: 0.1,
        items: [{ id: 'interest', label: 'Interest', value: 0.1 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 5.4, notes: ['40% margin', '+0pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.1, notes: ['8% margin', '(1pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 6.7 },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          revenue: {
            notes: ['同比 +20%'],
            items: [
              { id: 'mobility', label: '出行', notes: ['同比 +20%', '调整后利润率 27%', '同比 +0 个百分点'] },
              { id: 'delivery', label: '配送', notes: ['同比 +29%', '调整后利润率 21%', '同比 +2 个百分点'] },
              { id: 'freight', label: 'Uber Freight 货运', notes: ['同比 (0%)', '调整后利润率 (2%)', '同比 (0 个百分点)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 10%', '同比 (0 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 9%', '同比 +3 个百分点'] },
                { id: 'rnd', label: '研发', notes: ['占收入 7%', '同比 (1 个百分点)'] },
                { id: 'operations', label: '运营', notes: ['占收入 5%', '同比 (1 个百分点)'] },
                { id: 'da', label: '折旧与摊销', notes: ['占收入 1%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'tax_benefit_and_other', label: '税收收益及其他' }],
          },
          otherExpenses: {
            items: [{ id: 'interest', label: '利息' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 40%', '同比 +0 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 8%', '同比 (1 个百分点)'] },
            net: { label: '净利润' },
          },
        },
      },
    },
    {
      key: 'uber-q4-fy25',
      company: 'Uber',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/uber-q4-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 14.4,
        notes: ['+20% Y/Y'],
        items: [
          { id: 'mobility', label: 'Mobility', value: 8.2, notes: ['+19% Y/Y', '27% adjusted margin', '+1pp Y/Y'] },
          { id: 'delivery', label: 'Delivery', value: 4.9, notes: ['+30% Y/Y', '21% adjusted margin', '+1pp Y/Y'] },
          { id: 'freight', label: 'Uber Freight', value: 1.3, notes: ['(0%) Y/Y', '0% adjusted margin', '+2pp Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 8.7 },
        operatingExpenses: {
          total: 3.9,
          items: [
            { id: 'sm', label: 'S&M', value: 1.4, notes: ['9% of revenue', '(1pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 0.9, notes: ['6% of revenue', '(0pp) Y/Y'] },
            { id: 'operations', label: 'Operations', value: 0.8, notes: ['5% of revenue', '(0pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.7, notes: ['5% of revenue', '(4pp) Y/Y'] },
            { id: 'da', label: 'D&A', value: 0.2, notes: ['1% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { label: 'Tax', value: 0 },
      },
      otherIncome: {
        total: 0.04,
        items: [{ id: 'tax_benefit', label: 'Tax benefit', value: 0.04, notes: ['$40M; rounded to $0.0B in the source graphic'] }],
      },
      otherExpenses: {
        total: 1.5,
        items: [{ id: 'other', label: 'Other', value: 1.5 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 5.7, notes: ['40% margin', '+0pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.8, notes: ['12% margin', '+6pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.3 },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +20%'],
            items: [
              { id: 'mobility', label: '出行', notes: ['同比 +19%', '调整后利润率 27%', '同比 +1 个百分点'] },
              { id: 'delivery', label: '配送', notes: ['同比 +30%', '调整后利润率 21%', '同比 +1 个百分点'] },
              { id: 'freight', label: 'Uber Freight 货运', notes: ['同比 (0%)', '调整后利润率 0%', '同比 +2 个百分点'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 9%', '同比 (1 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 6%', '同比 (0 个百分点)'] },
                { id: 'operations', label: '运营', notes: ['占收入 5%', '同比 (0 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 5%', '同比 (4 个百分点)'] },
                { id: 'da', label: '折旧与摊销', notes: ['占收入 1%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税项' },
          },
          otherIncome: {
            items: [{ id: 'tax_benefit', label: '税收收益', notes: ['$40M；来源图四舍五入显示为 $0.0B'] }],
          },
          otherExpenses: {
            items: [{ id: 'other', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 40%', '同比 +0 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 12%', '同比 +6 个百分点'] },
            net: { label: '净利润' },
          },
        },
      },
    },
    {
      key: 'uber-q4-fy22',
      company: 'Uber',
      period: 'Q4 FY22',
      periodNote: 'Ending Dec. 2022',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/uber-q4-fy22.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 8.6,
        notes: ['+49% Y/Y'],
        items: [
          { id: 'mobility', label: 'Mobility', value: 4.1, notes: ['+82% Y/Y', '24% adjusted margin'] },
          { id: 'delivery', label: 'Delivery', value: 2.9, notes: ['+21% Y/Y', '8% adjusted margin'] },
          { id: 'freight', label: 'Uber Freight', value: 1.5, notes: ['+49% Y/Y', '(1%) adjusted margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 5.3 },
        operatingExpenses: {
          total: 3.4,
          items: [
            { id: 'operations', label: 'Operations & Support', value: 0.6, notes: ['7% of revenue', '(2pp) Y/Y'] },
            { id: 'sm', label: 'Sales & marketing', value: 1.1, notes: ['13% of revenue', '(9pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 0.7, notes: ['9% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'General & Admin', value: 0.7, notes: ['9% of revenue', '(2pp) Y/Y'] },
            { id: 'da', label: 'Depreciation & Amortization', value: 0.2, notes: ['9% of revenue', '(2pp) Y/Y'] },
          ],
        },
        tax: { label: 'Tax (not separately presented)', value: 0 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 3.3, notes: ['38% margin', '(8pp) Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -0.1, notes: ['(2%) margin', '+8pp Y/Y'] },
        net: { id: 'operating_loss', label: 'Operating loss', value: -0.1, notes: ['No separate net income or net loss line is shown in the source infographic.'] },
      },
      sources: [{ name: 'App Economy Insights source infographic', url: 'https://www.appeconomyinsights.com/' }],
      i18n: {
        zh: {
          period: '2022 财年第四季度',
          periodNote: '截至 2022 年 12 月',
          revenue: {
            notes: ['同比 +49%'],
            items: [
              { id: 'mobility', label: '出行', notes: ['同比 +82%', '调整后利润率 24%'] },
              { id: 'delivery', label: '配送', notes: ['同比 +21%', '调整后利润率 8%'] },
              { id: 'freight', label: 'Uber Freight 货运', notes: ['同比 +49%', '调整后利润率 (1%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'operations', label: '运营与支持', notes: ['占收入 7%', '同比 (2 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 13%', '同比 (9 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 9%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 9%', '同比 (2 个百分点)'] },
                { id: 'da', label: '折旧与摊销', notes: ['占收入 9%', '同比 (2 个百分点)'] },
              ],
            },
            tax: { label: '税费（未单列）' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 38%', '同比 (8 个百分点)'] },
            operating: { label: '营业亏损', notes: ['利润率 (2%)', '同比 +8 个百分点'] },
            net: { label: '营业亏损', notes: ['来源图未单列净利润或净亏损。'] },
          },
        },
      },
    },
    {
      key: 'uber-q3-fy23',
      company: 'Uber',
      period: 'Q3 FY23',
      periodNote: 'Ending Sep. 2023',
      currency: '$',
      unit: 'B',
      decimals: 2,
      sourceImage: 'input/processed/uber-q3-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 9.3,
        notes: ['+11% Y/Y'],
        items: [
          { id: 'mobility', label: 'Mobility', value: 5.1, notes: ['+33% Y/Y', '25% adjusted margin'] },
          { id: 'delivery', label: 'Delivery', value: 2.9, notes: ['+6% Y/Y', '14% adjusted margin'] },
          { id: 'freight', label: 'Uber Freight', value: 1.3, notes: ['(27%) Y/Y', '(1%) adjusted margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 5.6 },
        operatingExpenses: {
          total: 3.3,
          items: [
            { id: 'sm', label: 'S&M', value: 0.9, notes: ['10% of revenue', '(4pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 0.9, notes: ['9% of revenue', '(1pp) Y/Y'] },
            { id: 'operations', label: 'Operations', value: 0.7, notes: ['7% of revenue', '+0pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.6, notes: ['7% of revenue', '(4pp) Y/Y'] },
            { id: 'da', label: 'D&A', value: 0.2, notes: ['2% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { label: 'Tax', value: 0 },
      },
      otherIncome: {
        total: 0.04,
        items: [{ id: 'tax_benefit', label: 'Tax benefit', value: 0.04, notes: ['$40M in the source graphic'] }],
      },
      otherExpenses: {
        total: 0.2,
        items: [{ id: 'interest_and_other', label: 'Interest & Other', value: 0.2 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 3.7, notes: ['39% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.4, notes: ['4% margin', '+10pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.2, notes: ['2% margin', '+17pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第三季度',
          periodNote: '截至 2023 年 9 月',
          revenue: {
            notes: ['同比 +11%'],
            items: [
              { id: 'mobility', label: '出行', notes: ['同比 +33%', '调整后利润率 25%'] },
              { id: 'delivery', label: '配送', notes: ['同比 +6%', '调整后利润率 14%'] },
              { id: 'freight', label: 'Uber Freight 货运', notes: ['同比 (27%)', '调整后利润率 (1%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 10%', '同比 (4 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 9%', '同比 (1 个百分点)'] },
                { id: 'operations', label: '运营', notes: ['占收入 7%', '同比 +0 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 7%', '同比 (4 个百分点)'] },
                { id: 'da', label: '折旧与摊销', notes: ['占收入 2%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'tax_benefit', label: '税收收益', notes: ['来源图显示为 $40M'] }] },
          otherExpenses: { items: [{ id: 'interest_and_other', label: '利息及其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 39%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 4%', '同比 +10 个百分点'] },
            net: { label: '净利润', notes: ['利润率 2%', '同比 +17 个百分点'] },
          },
        },
      },
    }
  );
})(window);
