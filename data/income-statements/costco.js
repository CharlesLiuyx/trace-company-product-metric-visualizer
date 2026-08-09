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
      key: 'costco-q4-fy23',
      company: 'Costco',
      period: 'Q4 FY23',
      periodNote: 'Ending August 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/costco-q4-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 78.9,
        notes: ['+9% Y/Y'],
        items: [
          { id: 'net_sales', label: 'Net Sales', value: 77.4, notes: ['+9% Y/Y'] },
          { id: 'membership_fee', label: 'Membership Fee', value: 1.5, notes: ['+14% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'merchandise_costs', label: 'Merchandise costs', value: 69.2 },
        operatingExpenses: {
          total: 6.9,
          items: [{ id: 'operating_expenses', label: 'SG&A expenses', value: 6.9 }],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.8 },
      },
      otherIncome: {
        total: 0.2,
        items: [{ id: 'interest', label: 'Interest', value: 0.2 }],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 9.7, notes: ['12% margin', '+0.5pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.8, notes: ['3.5% margin', '+0.1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.2, notes: ['2.7% margin', '+0.4pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第四季度',
          periodNote: '截至 2023 年 8 月',
          revenue: {
            notes: ['同比 +9%'],
            items: [
              { id: 'net_sales', label: '净销售额', notes: ['同比 +9%'] },
              { id: 'membership_fee', label: '会员费', notes: ['同比 +14%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '商品成本' },
            operatingExpenses: { items: [{ id: 'operating_expenses', label: '销售、一般及行政费用' }] },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'interest', label: '利息' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 12%', '同比 +0.5 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 3.5%', '同比 +0.1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 2.7%', '同比 +0.4 个百分点'] },
          },
        },
      },
    },
    {
      key: 'costco-q1-fy24',
      company: 'Costco',
      period: 'Q1 FY24',
      periodNote: 'Ending Nov. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/costco-q1-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 57.8,
        notes: ['+6% Y/Y'],
        items: [
          { id: 'net_sales', label: 'Net Sales', value: 56.7, notes: ['+6% Y/Y'] },
          { id: 'membership_fee', label: 'Membership Fee', value: 1.1, notes: ['+8% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'merchandise_costs', label: 'Merchandise costs', value: 50.5 },
        operatingExpenses: {
          total: 5.4,
          items: [{ id: 'operating_expenses', label: 'SG&A expenses', value: 5.4 }],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.5 },
      },
      otherIncome: {
        total: 0.1,
        items: [{ id: 'interest', label: 'Interest', value: 0.1 }],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 7.3, notes: ['13% margin', '+0.5pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.0, notes: ['3.4% margin', '+0.2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.6, notes: ['2.8% margin', '+0.2pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第一季度',
          periodNote: '截至 2023 年 11 月',
          revenue: {
            notes: ['同比 +6%'],
            items: [
              { id: 'net_sales', label: '净销售额', notes: ['同比 +6%'] },
              { id: 'membership_fee', label: '会员费', notes: ['同比 +8%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '商品成本' },
            operatingExpenses: { items: [{ id: 'operating_expenses', label: '销售、一般及行政费用' }] },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'interest', label: '利息' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 13%', '同比 +0.5 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 3.4%', '同比 +0.2 个百分点'] },
            net: { label: '净利润', notes: ['利润率 2.8%', '同比 +0.2 个百分点'] },
          },
        },
      },
    },
    {
      key: 'costco-q3-fy25',
      company: 'Costco',
      period: 'Q3 FY25',
      periodNote: 'Ending May 2025',
      currency: '$',
      unit: 'B',
      decimals: 2,
      sourceImage: 'input/processed/costco-q3-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 63.2,
        notes: ['+8% Y/Y'],
        items: [
          { id: 'net_sales', label: 'Net Sales', value: 62.0, notes: ['+8% Y/Y'] },
          { id: 'membership_fee', label: 'Membership Fee', value: 1.2, notes: ['+10% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'merchandise_costs', label: 'Merchandise costs', value: 55.0 },
        operatingExpenses: {
          total: 5.7,
          items: [{ id: 'operating_expenses', label: 'SG&A expenses', value: 5.7 }],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.7 },
      },
      otherIncome: {
        total: 0.05,
        items: [{ id: 'other', label: 'Other', value: 0.05 }],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 8.2, notes: ['13.0% margin', '+0.4pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.5, notes: ['4.0% margin', '+0.3pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.9, notes: ['3.0% margin', '+0.1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 5 月',
          revenue: {
            notes: ['同比 +8%'],
            items: [
              { id: 'net_sales', label: '净销售额', notes: ['同比 +8%'] },
              { id: 'membership_fee', label: '会员费', notes: ['同比 +10%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '商品成本' },
            operatingExpenses: {
              items: [{ id: 'operating_expenses', label: '销售、一般及行政费用' }],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 13.0%', '同比 +0.4 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 4.0%', '同比 +0.3 个百分点'] },
            net: { label: '净利润', notes: ['利润率 3.0%', '同比 +0.1 个百分点'] },
          },
        },
      },
    },
    {
      key: 'costco-q2-fy23',
      company: 'Costco',
      period: 'Q2 FY23',
      periodNote: 'Ending Jan. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/costco-q2-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 55.3,
        notes: ['+6% Y/Y'],
        items: [
          { id: 'net_sales', label: 'Net Sales', value: 54.2, notes: ['+6% Y/Y'] },
          { id: 'membership_fee', label: 'Membership Fee', value: 1.0, valueText: '$1.0B', notes: ['+6% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'merchandise_costs', label: 'Merchandise costs', value: 48.4 },
        operatingExpenses: {
          total: 4.9,
          items: [{ id: 'operating_expenses', label: 'SG&A expenses', value: 4.9 }],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.5 },
      },
      otherIncome: {
        total: 0.08,
        items: [{ id: 'interest', label: 'Interest', value: 0.08, valueText: '$80M' }],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 6.8, notes: ['12% margin', '+0.2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.9, notes: ['3.4% margin', 'Unchanged'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.5, notes: ['2.7% margin', '+0.1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第二季度',
          periodNote: '截至 2023 年 1 月',
          revenue: {
            notes: ['同比 +6%'],
            items: [
              { id: 'net_sales', label: '净销售额', notes: ['同比 +6%'] },
              { id: 'membership_fee', label: '会员费', notes: ['同比 +6%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '商品成本' },
            operatingExpenses: {
              items: [{ id: 'operating_expenses', label: '销售、一般及行政费用' }],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'interest', label: '利息' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 12%', '同比 +0.2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 3.4%', '同比持平'] },
            net: { label: '净利润', notes: ['利润率 2.7%', '同比 +0.1 个百分点'] },
          },
        },
      },
    },
    {
      key: 'costco-q3-fy23',
      company: 'Costco',
      period: 'Q3 FY23',
      periodNote: 'Ending Apr. 2023',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/costco-q3-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 53.6,
        valueText: '$53.6B',
        notes: ['+2% Y/Y'],
        items: [
          { id: 'net_sales', label: 'Net Sales', value: 52.6, valueText: '$52.6B', notes: ['+2% Y/Y'] },
          { id: 'membership_fee', label: 'Membership Fee', value: 1.0, valueText: '$1.0B', notes: ['+6% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'merchandise_costs', label: 'Merchandise costs', value: 47.2, valueText: '($47.2B)' },
        operatingExpenses: {
          total: 4.8,
          valueText: '($4.8B)',
          items: [{ id: 'operating_expenses', label: 'SG&A expenses', value: 4.8, valueText: '($4.8B)' }],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.5, valueText: '($0.5B)' },
      },
      otherIncome: {
        total: 0.092,
        valueText: '$92M',
        items: [{ id: 'interest', label: 'Interest', value: 0.092, valueText: '$92M' }],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 6.5, valueText: '$6.5B', notes: ['12% margin', '+0.2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.7, valueText: '$1.7B', notes: ['3.1% margin', '(0.3pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.3, valueText: '$1.3B', notes: ['2.4% margin', '(0.2pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第三季度',
          periodNote: '截至 2023 年 4 月',
          revenue: {
            notes: ['同比 +2%'],
            items: [
              { id: 'net_sales', label: '净销售额', notes: ['同比 +2%'] },
              { id: 'membership_fee', label: '会员费', notes: ['同比 +6%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '商品成本' },
            operatingExpenses: { items: [{ id: 'operating_expenses', label: '销售、一般及行政费用' }] },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'interest', label: '利息' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 12%', '同比 +0.2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 3.1%', '同比 (0.3 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 2.4%', '同比 (0.2 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'costco-q1-fy23',
      company: 'Costco',
      period: 'Q1 FY23',
      periodNote: 'Ending November 2022',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/costco-q1-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 54.4,
        notes: ['+8% Y/Y'],
        items: [
          { id: 'net_sales', label: 'Net Sales', value: 53.4, notes: ['+8% Y/Y'] },
          { id: 'membership_fee', label: 'Membership Fee', value: 1.0, notes: ['+6% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'merchandise_costs', label: 'Merchandise costs', value: 47.8 },
        operatingExpenses: {
          total: 4.9,
          items: [{ id: 'operating_expenses', label: 'SG&A expenses', value: 4.9 }],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.4 },
      },
      otherIncome: {
        total: 0.019,
        items: [{ id: 'interest', label: 'Interest', value: 0.019 }],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 6.7, notes: ['12% margin', '(0.5pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.8, notes: ['3.2% margin', '(0.2pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.4, notes: ['2.5% margin', '(0.1pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第一季度',
          periodNote: '截至 2022 年 11 月',
          revenue: {
            notes: ['同比 +8%'],
            items: [
              { id: 'net_sales', label: '净销售额', notes: ['同比 +8%'] },
              { id: 'membership_fee', label: '会员费', notes: ['同比 +6%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '商品成本' },
            operatingExpenses: { items: [{ id: 'operating_expenses', label: '销售、一般及行政费用' }] },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'interest', label: '利息' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 12%', '同比 (0.5 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 3.2%', '同比 (0.2 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 2.5%', '同比 (0.1 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'costco-q1-fy25',
      company: 'Costco',
      period: 'Q1 FY25',
      periodNote: 'Ending Nov. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/costco-q1-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 62.2,
        notes: ['+8% Y/Y'],
        items: [
          { id: 'net_sales', label: 'Net Sales', value: 61.0, notes: ['+8% Y/Y'] },
          { id: 'membership_fee', label: 'Membership Fee', value: 1.2, notes: ['+8% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'merchandise_costs', label: 'Merchandise costs', value: 54.1 },
        operatingExpenses: {
          total: 5.8,
          items: [
            { id: 'operating_expenses', label: 'SG&A expenses', value: 5.8 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.5 },
      },
      otherIncome: {
        total: 0.1,
        items: [{ id: 'interest', label: 'Interest', value: 0.1 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 8.0, notes: ['12.9% margin', '+0.2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.2, notes: ['3.5% margin', '+0.1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.8, notes: ['2.9% margin', '+0.1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第一季度',
          periodNote: '截至 2024 年 11 月',
          revenue: {
            notes: ['同比 +8%'],
            items: [
              { id: 'net_sales', label: '净销售额', notes: ['同比 +8%'] },
              { id: 'membership_fee', label: '会员费', notes: ['同比 +8%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '商品成本' },
            operatingExpenses: {
              items: [
                { id: 'operating_expenses', label: '销售、一般及行政费用' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'interest', label: '利息' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 12.9%', '同比 +0.2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 3.5%', '同比 +0.1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 2.9%', '同比 +0.1 个百分点'] },
          },
        },
      },
    },
    {
      key: 'costco-q2-fy24',
      company: 'Costco',
      period: 'Q2 FY24',
      periodNote: 'Ending Feb. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/costco-q2-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 58.4,
        notes: ['+6% Y/Y'],
        items: [
          { id: 'net_sales', label: 'Net Sales', value: 57.3, notes: ['+6% Y/Y'] },
          { id: 'membership_fee', label: 'Membership Fee', value: 1.1, notes: ['+8% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'merchandise_costs', label: 'Merchandise costs', value: 51.1 },
        operatingExpenses: {
          total: 5.2,
          items: [{ id: 'operating_expenses', label: 'SG&A expenses', value: 5.2 }],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.5 },
      },
      otherIncome: {
        total: 0.2,
        items: [{ id: 'interest', label: 'Interest', value: 0.2 }],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 7.3, notes: ['12% margin', '+0.1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.1, notes: ['3.5% margin', '+0.1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.7, notes: ['3.0% margin', '+0.3pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第二季度',
          periodNote: '截至 2024 年 2 月',
          revenue: {
            notes: ['同比 +6%'],
            items: [
              { id: 'net_sales', label: '净销售额', notes: ['同比 +6%'] },
              { id: 'membership_fee', label: '会员费', notes: ['同比 +8%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '商品成本' },
            operatingExpenses: { items: [{ id: 'operating_expenses', label: '销售、一般及行政费用' }] },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'interest', label: '利息' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 12%', '同比 +0.1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 3.5%', '同比 +0.1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 3.0%', '同比 +0.3 个百分点'] },
          },
        },
      },
    },
    {
      key: 'costco-q3-fy24',
      company: 'Costco',
      period: 'Q3 FY24',
      periodNote: 'Ending Apr. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/costco-q3-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 58.5,
        notes: ['+9% Y/Y'],
        items: [
          { id: 'net_sales', label: 'Net Sales', value: 57.4, notes: ['+9% Y/Y'] },
          { id: 'membership_fee', label: 'Membership Fee', value: 1.1, notes: ['+8% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'merchandise_costs', label: 'Merchandise costs', value: 51.2 },
        operatingExpenses: {
          total: 5.1,
          items: [{ id: 'operating_expenses', label: 'SG&A expenses', value: 5.1 }],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.6 },
      },
      otherIncome: {
        total: 0.1,
        items: [{ id: 'interest', label: 'Interest', value: 0.1 }],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 7.3, notes: ['12.5% margin', '+0.5pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.2, notes: ['3.8% margin', '+0.6pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.7, notes: ['2.9% margin', '+0.5pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第三季度',
          periodNote: '截至 2024 年 4 月',
          revenue: {
            notes: ['同比 +9%'],
            items: [
              { id: 'net_sales', label: '净销售额', notes: ['同比 +9%'] },
              { id: 'membership_fee', label: '会员费', notes: ['同比 +8%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '商品成本' },
            operatingExpenses: { items: [{ id: 'operating_expenses', label: '销售、一般及行政费用' }] },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'interest', label: '利息' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 12.5%', '同比 +0.5 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 3.8%', '同比 +0.6 个百分点'] },
            net: { label: '净利润', notes: ['利润率 2.9%', '同比 +0.5 个百分点'] },
          },
        },
      },
    },
    {
      key: 'costco-q4-fy24',
      company: 'Costco',
      period: 'Q4 FY24',
      periodNote: 'Ending Aug. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/costco-q4-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 79.7,
        notes: ['+1% Y/Y'],
        items: [
          { id: 'net_sales', label: 'Net Sales', value: 78.2, notes: ['+1% Y/Y'] },
          { id: 'membership_fee', label: 'Membership Fee', value: 1.5, notes: ['+0% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'merchandise_costs', label: 'Merchandise costs', value: 69.6 },
        operatingExpenses: {
          total: 7.1,
          items: [{ id: 'operating_expenses', label: 'SG&A expenses', value: 7.1 }],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.8 },
      },
      otherIncome: {
        total: 0.1,
        items: [{ id: 'interest', label: 'Interest', value: 0.1 }],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 10.1, notes: ['12.7% margin', '+0.4pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 3.0, notes: ['3.8% margin', '+0.3pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.4, notes: ['3.0% margin', '+0.2pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第四季度',
          periodNote: '截至 2024 年 8 月',
          revenue: {
            notes: ['同比 +1%'],
            items: [
              { id: 'net_sales', label: '净销售额', notes: ['同比 +1%'] },
              { id: 'membership_fee', label: '会员费', notes: ['同比 +0%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '商品成本' },
            operatingExpenses: { items: [{ id: 'operating_expenses', label: '销售、一般及行政费用' }] },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'interest', label: '利息' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 12.7%', '同比 +0.4 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 3.8%', '同比 +0.3 个百分点'] },
            net: { label: '净利润', notes: ['利润率 3.0%', '同比 +0.2 个百分点'] },
          },
        },
      },
    },
    {
      key: 'costco-q1-fy26',
      company: 'Costco',
      period: 'Q1 FY26',
      periodNote: 'Ending Nov. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/costco-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 67.3,
        notes: ['+8% Y/Y'],
        items: [
          { id: 'net_sales', label: 'Net Sales', value: 66.0, notes: ['+8% Y/Y'] },
          { id: 'membership_fee', label: 'Membership Fee', value: 1.3, notes: ['+14% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'merchandise_costs', label: 'Merchandise costs', value: 58.5 },
        operatingExpenses: {
          total: 6.3,
          items: [
            { id: 'operating_expenses', label: 'SG&A expenses', value: 6.3 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.6 },
      },
      otherIncome: {
        total: 0.1,
        items: [{ id: 'interest', label: 'Interest', value: 0.1 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 8.8, notes: ['13.1% margin', '+0.1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.5, notes: ['3.7% margin', '+0.1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.0, notes: ['3.0% margin', '+0.1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2025 年 11 月',
          revenue: {
            notes: ['同比 +8%'],
            items: [
              { id: 'net_sales', label: '净销售额', notes: ['同比 +8%'] },
              { id: 'membership_fee', label: '会员费', notes: ['同比 +14%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '商品成本' },
            operatingExpenses: {
              items: [
                { id: 'operating_expenses', label: '销售、一般及行政费用' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'interest', label: '利息' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 13.1%', '同比 +0.1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 3.7%', '同比 +0.1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 3.0%', '同比 +0.1 个百分点'] },
          },
        },
      },
    },
    {
      key: 'costco-q2-fy25',
      company: 'Costco',
      period: 'Q2 FY25',
      periodNote: 'Ending Feb. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/costco-q2-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 63.7,
        notes: ['+9% Y/Y'],
        items: [
          { id: 'net_sales', label: 'Net Sales', value: 62.5, notes: ['+9% Y/Y'] },
          { id: 'membership_fee', label: 'Membership Fee', value: 1.2, notes: ['+7% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'merchandise_costs', label: 'Merchandise costs', value: 55.7 },
        operatingExpenses: {
          total: 5.7,
          items: [{ id: 'operating_expenses', label: 'SG&A expenses', value: 5.7 }],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.6 },
      },
      otherIncome: {
        total: 0.1,
        items: [{ id: 'interest', label: 'Interest', value: 0.1 }],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 8.0, notes: ['12.5% margin', '+0.0pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.3, notes: ['3.6% margin', '+0.1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.8, notes: ['2.8% margin', '(0.2pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第二季度',
          periodNote: '截至 2025 年 2 月',
          revenue: {
            notes: ['同比 +9%'],
            items: [
              { id: 'net_sales', label: '净销售额', notes: ['同比 +9%'] },
              { id: 'membership_fee', label: '会员费', notes: ['同比 +7%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '商品成本' },
            operatingExpenses: {
              items: [{ id: 'operating_expenses', label: '销售、一般及行政费用' }],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'interest', label: '利息' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 12.5%', '同比 +0.0 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 3.6%', '同比 +0.1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 2.8%', '同比 (0.2 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'costco-q2-fy26',
      company: 'Costco',
      period: 'Q2 FY26',
      periodNote: 'Ending Feb. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/costco-q2-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 69.6,
        notes: ['+9% Y/Y'],
        items: [
          { id: 'net_sales', label: 'Net Sales', value: 68.2, notes: ['+9% Y/Y'] },
          { id: 'membership_fee', label: 'Membership Fee', value: 1.4, notes: ['+14% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'merchandise_costs', label: 'Merchandise costs', value: 60.7 },
        operatingExpenses: {
          total: 6.3,
          items: [
            { id: 'operating_expenses', label: 'SG&A expenses', value: 6.3 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.7 },
      },
      otherIncome: {
        total: 0.1,
        items: [{ id: 'interest', label: 'Interest', value: 0.1 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 8.9, notes: ['12.8% margin', '+0.2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.6, notes: ['3.7% margin', '+0.1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.0, notes: ['2.9% margin', '+0.1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 2 月',
          revenue: {
            notes: ['同比 +9%'],
            items: [
              { id: 'net_sales', label: '净销售额', notes: ['同比 +9%'] },
              { id: 'membership_fee', label: '会员费', notes: ['同比 +14%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '商品成本' },
            operatingExpenses: {
              items: [
                { id: 'operating_expenses', label: '销售、一般及行政费用' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'interest', label: '利息' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 12.8%', '同比 +0.2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 3.7%', '同比 +0.1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 2.9%', '同比 +0.1 个百分点'] },
          },
        },
      },
    },
    {
      key: 'costco-q3-fy26',
      company: 'Costco',
      period: 'Q3 FY26',
      periodNote: 'Ending May 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/costco-q3-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 70.5,
        notes: ['+12% Y/Y'],
        items: [
          { id: 'net_sales', label: 'Net Sales', value: 69.2, notes: ['+12% Y/Y'] },
          { id: 'membership_fee', label: 'Membership Fee', value: 1.4, notes: ['+11% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'merchandise_costs', label: 'Merchandise costs', value: 61.5 },
        operatingExpenses: {
          total: 6.2,
          items: [
            { id: 'operating_expenses', label: 'SG&A expenses', value: 6.2 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.7 },
      },
      otherIncome: {
        total: 0.1,
        items: [{ id: 'interest', label: 'Interest', value: 0.1 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 9.0, notes: ['12.8% margin', '(0.2pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.8, notes: ['4.0% margin', '(0.0pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.2, notes: ['3.1% margin', '+0.1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第三季度',
          periodNote: '截至 2026 年 5 月',
          revenue: {
            notes: ['同比 +12%'],
            items: [
              { id: 'net_sales', label: '净销售额', notes: ['同比 +12%'] },
              { id: 'membership_fee', label: '会员费', notes: ['同比 +11%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '商品成本' },
            operatingExpenses: {
              items: [
                { id: 'operating_expenses', label: '销售、一般及行政费用' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'interest', label: '利息' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 12.8%', '同比 (0.2 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 4.0%', '同比 (0.0 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 3.1%', '同比 +0.1 个百分点'] },
          },
        },
      },
    },
    {
      key: 'costco-q4-fy25',
      company: 'Costco',
      period: 'Q4 FY25',
      periodNote: 'Ending Aug. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/costco-q4-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 86.2,
        notes: ['+8% Y/Y'],
        items: [
          { id: 'net_sales', label: 'Net Sales', value: 84.4, notes: ['+8% Y/Y'] },
          { id: 'membership_fee', label: 'Membership Fee', value: 1.7, notes: ['+14% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'merchandise_costs', label: 'Merchandise costs', value: 75.0 },
        operatingExpenses: {
          total: 7.8,
          items: [{ id: 'operating_expenses', label: 'SG&A expenses', value: 7.8 }],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.9 },
      },
      otherIncome: {
        total: 0.2,
        items: [{ id: 'interest', label: 'Interest', value: 0.2 }],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 11.1, notes: ['12.9% margin', '+0.2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 3.3, notes: ['3.9% margin', '+0.1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.6, notes: ['3.0% margin', '+0.1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 8 月',
          revenue: {
            notes: ['同比 +8%'],
            items: [
              { id: 'net_sales', label: '净销售额', notes: ['同比 +8%'] },
              { id: 'membership_fee', label: '会员费', notes: ['同比 +14%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '商品成本' },
            operatingExpenses: { items: [{ id: 'operating_expenses', label: '销售、一般及行政费用' }] },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'interest', label: '利息' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 12.9%', '同比 +0.2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 3.9%', '同比 +0.1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 3.0%', '同比 +0.1 个百分点'] },
          },
        },
      },
    }
  );
})(window);
