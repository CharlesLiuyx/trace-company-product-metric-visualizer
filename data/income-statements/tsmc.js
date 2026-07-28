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
      key: 'tsmc-q1-fy23',
      company: 'TSMC',
      period: 'Q1 FY23',
      periodNote: 'Ending Mar. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/tsmc-q1-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 16.7,
        notes: ['(5%) Y/Y'],
        items: [
          { id: 'hpc', label: 'High Performance Computing', value: 7.3, notes: ['44% of revenue', '+3pp Y/Y'] },
          { id: 'smartphones', label: 'Smartphones', value: 5.7, notes: ['34% of revenue', '(6pp) Y/Y'] },
          { id: 'iot', label: 'Internet of Things', value: 1.5, notes: ['9% of revenue', '+1pp Y/Y'] },
          { id: 'automotive', label: 'Automotive', value: 1.2, notes: ['7% of revenue', '+2pp Y/Y'] },
          { id: 'dce', label: 'Digital Consumer Electronics', value: 0.3, notes: ['2% of revenue', '(1pp) Y/Y'] },
          { id: 'others', label: 'Others', value: 0.7, notes: ['4% of revenue', '+1pp Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of sales', value: 7.3 },
        operatingExpenses: {
          total: 1.8,
          items: [
            { id: 'rnd', label: 'R&D', value: 1.3 },
            { id: 'sga', label: 'SG&A', value: 0.5 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 1.2 },
      },
      otherIncome: {
        total: 0.4,
        items: [{ id: 'other', label: 'Other', value: 0.4 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 9.4, notes: ['56% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 7.6, notes: ['45% margin', 'Flat Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 6.8, notes: ['41% margin', '(1pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第一季度',
          periodNote: '截至 2023 年 3 月',
          revenue: {
            notes: ['同比 (5%)'],
            items: [
              { id: 'hpc', label: '高性能计算', notes: ['占收入 44%', '同比 +3 个百分点'] },
              { id: 'smartphones', label: '智能手机', notes: ['占收入 34%', '同比 (6 个百分点)'] },
              { id: 'iot', label: '物联网', notes: ['占收入 9%', '同比 +1 个百分点'] },
              { id: 'automotive', label: '汽车', notes: ['占收入 7%', '同比 +2 个百分点'] },
              { id: 'dce', label: '数字消费电子', notes: ['占收入 2%', '同比 (1 个百分点)'] },
              { id: 'others', label: '其他', notes: ['占收入 4%', '同比 +1 个百分点'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发' },
                { id: 'sga', label: '销售、一般及行政' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 56%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 45%', '同比持平'] },
            net: { label: '净利润', notes: ['利润率 41%', '同比 (1 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'tsmc-q3-fy22',
      company: 'TSMC',
      period: 'Q3 FY22',
      periodNote: 'Ending Sep. 2022',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/tsmc-q3-fy22.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 20.2,
        notes: ['+36% Y/Y'],
        items: [
          { id: 'smartphones', label: 'Smartphones', value: 8.3, notes: ['41% of revenue', '(3pp) Y/Y'] },
          { id: 'hpc', label: 'High Performance Computing', value: 7.9, notes: ['39% of revenue', '+2pp Y/Y'] },
          { id: 'iot', label: 'Internet of Things', value: 2.0, notes: ['10% of revenue', '+1pp Y/Y'] },
          { id: 'automotive', label: 'Automotive', value: 1.0, notes: ['5% of revenue', '+1pp Y/Y'] },
          { id: 'dce', label: 'Digital Consumer Electronics', value: 0.4, notes: ['2% of revenue', '(1pp) Y/Y'] },
          { id: 'others', label: 'Others', value: 0.6, notes: ['3% of revenue'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of sales', value: 8.0 },
        operatingExpenses: {
          total: 2.0,
          items: [
            { id: 'rnd', label: 'R&D', value: 1.4 },
            { id: 'sga', label: 'SG&A', value: 0.6 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 1.2 },
      },
      otherIncome: {
        total: 0.2,
        items: [{ id: 'other', label: 'Other gains', value: 0.2 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 12.2, notes: ['60% margin', '+9pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 10.2, notes: ['51% margin', '+9pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 9.3, notes: ['46% margin', '+8pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2022 财年第三季度',
          periodNote: '截至 2022 年 9 月',
          revenue: {
            notes: ['同比 +36%'],
            items: [
              { id: 'smartphones', label: '智能手机', notes: ['占收入 41%', '同比 (3 个百分点)'] },
              { id: 'hpc', label: '高性能计算', notes: ['占收入 39%', '同比 +2 个百分点'] },
              { id: 'iot', label: '物联网', notes: ['占收入 10%', '同比 +1 个百分点'] },
              { id: 'automotive', label: '汽车', notes: ['占收入 5%', '同比 +1 个百分点'] },
              { id: 'dce', label: '数字消费电子', notes: ['占收入 2%', '同比 (1 个百分点)'] },
              { id: 'others', label: '其他', notes: ['占收入 3%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发' },
                { id: 'sga', label: '销售、一般及行政' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other', label: '其他收益' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 60%', '同比 +9 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 51%', '同比 +9 个百分点'] },
            net: { label: '净利润', notes: ['利润率 46%', '同比 +8 个百分点'] },
          },
        },
      },
    },
    {
      key: 'tsmc-q3-fy24',
      company: 'TSMC',
      period: 'Q3 FY24',
      periodNote: 'Ending Sep. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/tsmc-q3-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 23.5,
        notes: ['+36% Y/Y'],
        items: [
          { id: 'hpc', label: 'High Performance Computing', value: 12.0, notes: ['51% of revenue', '+9pp Y/Y'] },
          { id: 'smartphones', label: 'Smartphones', value: 8.0, notes: ['34% of revenue', '(5pp) Y/Y'] },
          { id: 'iot', label: 'Internet of Things', value: 1.6, notes: ['7% of revenue', '(2pp) Y/Y'] },
          { id: 'automotive', label: 'Automotive', value: 1.2, notes: ['5% of revenue', 'Flat Y/Y'] },
          { id: 'dce', label: 'Digital Consumer Electronics', value: 0.2, notes: ['1% of revenue', '(1pp) Y/Y'] },
          { id: 'others', label: 'Others', value: 0.5, notes: ['2% of revenue', '(1pp) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of sales', value: 9.9 },
        operatingExpenses: {
          total: 2.4,
          items: [
            { id: 'rnd', label: 'R&D', value: 1.6 },
            { id: 'sga', label: 'SG&A', value: 0.8 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 1.8 },
      },
      otherIncome: {
        total: 0.7,
        items: [{ id: 'other', label: 'Other', value: 0.7 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 13.6, notes: ['58% margin', '+4pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 11.2, notes: ['47% margin', '+6pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 10.1, notes: ['43% margin', '+4pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第三季度',
          periodNote: '截至 2024 年 9 月',
          revenue: {
            notes: ['同比 +36%'],
            items: [
              { id: 'hpc', label: '高性能计算', notes: ['占收入 51%', '同比 +9 个百分点'] },
              { id: 'smartphones', label: '智能手机', notes: ['占收入 34%', '同比 (5 个百分点)'] },
              { id: 'iot', label: '物联网', notes: ['占收入 7%', '同比 (2 个百分点)'] },
              { id: 'automotive', label: '汽车', notes: ['占收入 5%', '同比持平'] },
              { id: 'dce', label: '数字消费电子', notes: ['占收入 1%', '同比 (1 个百分点)'] },
              { id: 'others', label: '其他', notes: ['占收入 2%', '同比 (1 个百分点)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发' },
                { id: 'sga', label: '销售、一般及行政' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 58%', '同比 +4 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 47%', '同比 +6 个百分点'] },
            net: { label: '净利润', notes: ['利润率 43%', '同比 +4 个百分点'] },
          },
        },
      },
    },
    {
      key: 'tsmc-q1-fy25',
      company: 'TSMC',
      period: 'Q1 FY25',
      periodNote: 'Ending Mar. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/tsmc-q1-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 25.5,
        notes: ['+35% Y/Y'],
        items: [
          { id: 'hpc', label: 'High Performance Computing', value: 15.0, notes: ['59% of revenue', '+13pp Y/Y'] },
          { id: 'smartphones', label: 'Smartphones', value: 7.1, notes: ['28% of revenue', '(10pp) Y/Y'] },
          { id: 'iot', label: 'Internet of Things', value: 1.3, notes: ['5% of revenue', '(1pp) Y/Y'] },
          { id: 'automotive', label: 'Automotive', value: 1.3, notes: ['5% of revenue', '(1pp) Y/Y'] },
          { id: 'dce', label: 'Digital Consumer Electronics', value: 0.3, notes: ['1% of revenue', '(1pp) Y/Y'] },
          { id: 'others', label: 'Others', value: 0.5, notes: ['2% of revenue', 'Flat Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 10.5 },
        operatingExpenses: {
          total: 2.6,
          items: [
            { id: 'rnd', label: 'R&D', value: 1.7 },
            { id: 'sga', label: 'SG&A', value: 0.9 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 2.1 },
      },
      otherIncome: {
        total: 0.7,
        items: [{ id: 'other', label: 'Other', value: 0.7 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 15.0, notes: ['59% margin', '+6pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 12.4, notes: ['49% margin', '+6pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 11.0, notes: ['43% margin', '+5pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第一季度',
          periodNote: '截至 2025 年 3 月',
          revenue: {
            notes: ['同比 +35%'],
            items: [
              { id: 'hpc', label: '高性能计算', notes: ['占收入 59%', '同比 +13 个百分点'] },
              { id: 'smartphones', label: '智能手机', notes: ['占收入 28%', '同比 (10 个百分点)'] },
              { id: 'iot', label: '物联网', notes: ['占收入 5%', '同比 (1 个百分点)'] },
              { id: 'automotive', label: '汽车', notes: ['占收入 5%', '同比 (1 个百分点)'] },
              { id: 'dce', label: '数字消费电子', notes: ['占收入 1%', '同比 (1 个百分点)'] },
              { id: 'others', label: '其他', notes: ['占收入 2%', '同比持平'] },
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
            gross: { label: '毛利润', notes: ['利润率 59%', '同比 +6 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 49%', '同比 +6 个百分点'] },
            net: { label: '净利润', notes: ['利润率 43%', '同比 +5 个百分点'] },
          },
        },
      },
    },
    {
      key: 'tsmc-q2-fy24',
      company: 'TSMC',
      period: 'Q2 FY24',
      periodNote: 'Ending Jun. 2024',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/tsmc-q2-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 20.8,
        notes: ['+40% Y/Y'],
        items: [
          { id: 'hpc', label: 'High Performance Computing', value: 10.8, notes: ['52% of revenue', '+8pp Y/Y'] },
          { id: 'smartphones', label: 'Smartphones', value: 6.9, notes: ['33% of revenue', 'Flat Y/Y'] },
          { id: 'iot', label: 'Internet of Things', value: 1.2, notes: ['6% of revenue', '(2pp) Y/Y'] },
          { id: 'automotive', label: 'Automotive', value: 1.0, notes: ['5% of revenue', '(3pp) Y/Y'] },
          { id: 'dce', label: 'Digital Consumer Electronics', value: 0.4, notes: ['2% of revenue', '(1pp) Y/Y'] },
          { id: 'others', label: 'Others', value: 0.4, notes: ['2% of revenue', '(2pp) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of sales', value: 9.8 },
        operatingExpenses: {
          total: 2.2,
          notes: ['R&D, SG&A, and Other line items sum to $2.239B; the $0.039B difference is a rounding residual in the source chart.'],
          items: [
            { id: 'rnd', label: 'R&D', value: 1.5 },
            { id: 'sga', label: 'SG&A', value: 0.7 },
            { id: 'other_operating_expense', label: 'Other', value: 0.039 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 1.8 },
      },
      otherIncome: {
        total: 0.6,
        items: [{ id: 'other_income', label: 'Other', value: 0.6 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 11.1, notes: ['53% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 8.9, notes: ['43% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 7.7, notes: ['37% margin', '(1pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第二季度',
          periodNote: '截至 2024 年 6 月',
          revenue: {
            notes: ['同比 +40%'],
            items: [
              { id: 'hpc', label: '高性能计算', notes: ['占收入 52%', '同比 +8 个百分点'] },
              { id: 'smartphones', label: '智能手机', notes: ['占收入 33%', '同比持平'] },
              { id: 'iot', label: '物联网', notes: ['占收入 6%', '同比 (2 个百分点)'] },
              { id: 'automotive', label: '汽车', notes: ['占收入 5%', '同比 (3 个百分点)'] },
              { id: 'dce', label: '数字消费电子', notes: ['占收入 2%', '同比 (1 个百分点)'] },
              { id: 'others', label: '其他', notes: ['占收入 2%', '同比 (2 个百分点)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '营业成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发' },
                { id: 'sga', label: '销售、一般及行政' },
                { id: 'other_operating_expense', label: '其他' },
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
            gross: { label: '毛利润', notes: ['利润率 53%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 43%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 37%', '同比 (1 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'tsmc-q4-fy24',
      company: 'TSMC',
      period: 'Q4 FY24',
      periodNote: 'Ending Dec. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/tsmc-q4-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 26.9,
        notes: ['+37% Y/Y'],
        items: [
          { id: 'hpc', label: 'High Performance Computing', value: 14.3, notes: ['53% of revenue', '+10pp Y/Y'] },
          { id: 'smartphones', label: 'Smartphones', value: 9.4, notes: ['35% of revenue', '(8pp) Y/Y'] },
          { id: 'iot', label: 'Internet of Things', value: 1.3, notes: ['5% of revenue', 'Flat Y/Y'] },
          { id: 'automotive', label: 'Automotive', value: 1.1, notes: ['4% of revenue', '(1pp) Y/Y'] },
          { id: 'dce', label: 'Digital Consumer Electronics', value: 0.3, notes: ['1% of revenue', '(1pp) Y/Y'] },
          { id: 'others', label: 'Others', value: 0.5, notes: ['2% of revenue', 'Flat Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 11.0 },
        operatingExpenses: {
          total: 2.7,
          items: [
            { id: 'rnd', label: 'R&D', value: 1.8 },
            { id: 'sga', label: 'SG&A', value: 0.9 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 2.3 },
      },
      otherIncome: {
        total: 0.7,
        items: [{ id: 'other', label: 'Other', value: 0.7 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 15.9, notes: ['59% margin', '+6pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 13.2, notes: ['49% margin', '+7pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 11.6, notes: ['43% margin', '+5pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第四季度',
          periodNote: '截至 2024 年 12 月',
          revenue: {
            notes: ['同比 +37%'],
            items: [
              { id: 'hpc', label: '高性能计算', notes: ['占收入 53%', '同比 +10 个百分点'] },
              { id: 'smartphones', label: '智能手机', notes: ['占收入 35%', '同比 (8 个百分点)'] },
              { id: 'iot', label: '物联网', notes: ['占收入 5%', '同比持平'] },
              { id: 'automotive', label: '汽车', notes: ['占收入 4%', '同比 (1 个百分点)'] },
              { id: 'dce', label: '数字消费电子', notes: ['占收入 1%', '同比 (1 个百分点)'] },
              { id: 'others', label: '其他', notes: ['占收入 2%', '同比持平'] },
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
            gross: { label: '毛利润', notes: ['利润率 59%', '同比 +6 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 49%', '同比 +7 个百分点'] },
            net: { label: '净利润', notes: ['利润率 43%', '同比 +5 个百分点'] },
          },
        },
      },
    },
    {
      key: 'tsmc-q1-fy26',
      company: 'TSMC',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/tsmc-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 35.9,
        notes: ['+41% Y/Y'],
        items: [
          { id: 'hpc', label: 'High Performance Computing', value: 21.9, notes: ['61% of revenue', '+2pp Y/Y'] },
          { id: 'smartphones', label: 'Smartphones', value: 9.3, notes: ['26% of revenue', '(2pp) Y/Y'] },
          { id: 'iot', label: 'Internet of Things', value: 2.2, notes: ['6% of revenue', '+1pp Y/Y'] },
          { id: 'automotive', label: 'Automotive', value: 1.4, notes: ['4% of revenue', '(1pp) Y/Y'] },
          { id: 'dce', label: 'Digital Consumer Electronics', value: 0.4, notes: ['1% of revenue', 'Flat Y/Y'] },
          { id: 'others', label: 'Others', value: 0.7, notes: ['2% of revenue', 'Flat Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 12.1 },
        operatingExpenses: {
          total: 3.0,
          notes: ['R&D and SG&A line items sum to $2.9B; the remaining $0.1B is rounding residual in the source chart.'],
          items: [
            { id: 'rnd', label: 'R&D', value: 2.1 },
            { id: 'sga', label: 'SG&A', value: 0.8 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 3.6 },
      },
      otherIncome: {
        total: 0.9,
        items: [{ id: 'other', label: 'Other', value: 0.9 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 23.8, notes: ['66% margin', '+7pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 20.9, notes: ['58% margin', '+10pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 18.1, notes: ['51% margin', '+8pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +41%'],
            items: [
              { id: 'hpc', label: '高性能计算', notes: ['占收入 61%', '同比 +2 个百分点'] },
              { id: 'smartphones', label: '智能手机', notes: ['占收入 26%', '同比 (2 个百分点)'] },
              { id: 'iot', label: '物联网', notes: ['占收入 6%', '同比 +1 个百分点'] },
              { id: 'automotive', label: '汽车', notes: ['占收入 4%', '同比 (1 个百分点)'] },
              { id: 'dce', label: '数字消费电子', notes: ['占收入 1%', '同比持平'] },
              { id: 'others', label: '其他', notes: ['占收入 2%', '同比持平'] },
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
            gross: { label: '毛利润', notes: ['利润率 66%', '同比 +7 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 58%', '同比 +10 个百分点'] },
            net: { label: '净利润', notes: ['利润率 51%', '同比 +8 个百分点'] },
          },
        },
      },
    },
    {
      key: 'tsmc-q2-fy25',
      company: 'TSMC',
      period: 'Q2 FY25',
      periodNote: 'Ending Jun. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/tsmc-q2-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 30.1,
        notes: ['+44% Y/Y'],
        items: [
          { id: 'hpc', label: 'High Performance Computing', value: 18.1, notes: ['60% of revenue', '+8pp Y/Y'] },
          { id: 'smartphones', label: 'Smartphones', value: 8.1, notes: ['27% of revenue', '(6pp) Y/Y'] },
          { id: 'iot', label: 'Internet of Things', value: 1.5, notes: ['5% of revenue', '(1pp) Y/Y'] },
          { id: 'automotive', label: 'Automotive', value: 1.5, notes: ['5% of revenue', 'Flat Y/Y'] },
          { id: 'dce', label: 'Digital Consumer Electronics', value: 0.3, notes: ['1% of revenue', '(1pp) Y/Y'] },
          { id: 'others', label: 'Others', value: 0.6, notes: ['2% of revenue', 'Flat Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 12.4 },
        operatingExpenses: {
          total: 2.7,
          items: [
            { id: 'rnd', label: 'R&D', value: 2.0 },
            { id: 'sga', label: 'SG&A', value: 0.7 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 3.1 },
      },
      otherIncome: {
        total: 1.0,
        items: [{ id: 'other', label: 'Other', value: 1.0 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 17.6, notes: ['59% margin', '+5pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 14.9, notes: ['50% margin', '+7pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 12.8, notes: ['43% margin', '+6pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第二季度',
          periodNote: '截至 2025 年 6 月',
          revenue: {
            notes: ['同比 +44%'],
            items: [
              { id: 'hpc', label: '高性能计算', notes: ['占收入 60%', '同比 +8 个百分点'] },
              { id: 'smartphones', label: '智能手机', notes: ['占收入 27%', '同比 (6 个百分点)'] },
              { id: 'iot', label: '物联网', notes: ['占收入 5%', '同比 (1 个百分点)'] },
              { id: 'automotive', label: '汽车', notes: ['占收入 5%', '同比持平'] },
              { id: 'dce', label: '数字消费电子', notes: ['占收入 1%', '同比 (1 个百分点)'] },
              { id: 'others', label: '其他', notes: ['占收入 2%', '同比持平'] },
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
            gross: { label: '毛利润', notes: ['利润率 59%', '同比 +5 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 50%', '同比 +7 个百分点'] },
            net: { label: '净利润', notes: ['利润率 43%', '同比 +6 个百分点'] },
          },
        },
      },
    },
    {
      key: 'tsmc-q4-fy25',
      company: 'TSMC',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/tsmc-q4-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 33.7,
        notes: ['+25% Y/Y'],
        items: [
          { id: 'hpc', label: 'High Performance Computing', value: 18.5, notes: ['55% of revenue', '+2pp Y/Y'] },
          { id: 'smartphones', label: 'Smartphones', value: 10.8, notes: ['32% of revenue', '(3pp) Y/Y'] },
          { id: 'iot', label: 'Internet of Things', value: 1.7, notes: ['5% of revenue', 'Flat Y/Y'] },
          { id: 'automotive', label: 'Automotive', value: 1.7, notes: ['5% of revenue', '+1pp Y/Y'] },
          { id: 'dce', label: 'Digital Consumer Electronics', value: 0.3, notes: ['1% of revenue', 'Flat Y/Y'] },
          { id: 'others', label: 'Others', value: 0.7, notes: ['2% of revenue', 'Flat Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 12.7 },
        operatingExpenses: {
          total: 2.8,
          notes: ['R&D and SG&A line items sum to $2.9B while operating expenses show $2.8B; the $0.1B difference is rounding residual in the source chart.'],
          items: [
            { id: 'rnd', label: 'R&D', value: 2.1 },
            { id: 'sga', label: 'SG&A', value: 0.8 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 2.8 },
      },
      otherIncome: {
        total: 0.9,
        items: [{ id: 'other', label: 'Other', value: 0.9 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 21.0, notes: ['62% margin', '+3pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 18.2, notes: ['54% margin', '+5pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 16.3, notes: ['48% margin', '+5pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +25%'],
            items: [
              { id: 'hpc', label: '高性能计算', notes: ['占收入 55%', '同比 +2 个百分点'] },
              { id: 'smartphones', label: '智能手机', notes: ['占收入 32%', '同比 (3 个百分点)'] },
              { id: 'iot', label: '物联网', notes: ['占收入 5%', '同比持平'] },
              { id: 'automotive', label: '汽车', notes: ['占收入 5%', '同比 +1 个百分点'] },
              { id: 'dce', label: '数字消费电子', notes: ['占收入 1%', '同比持平'] },
              { id: 'others', label: '其他', notes: ['占收入 2%', '同比持平'] },
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
            gross: { label: '毛利润', notes: ['利润率 62%', '同比 +3 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 54%', '同比 +5 个百分点'] },
            net: { label: '净利润', notes: ['利润率 48%', '同比 +5 个百分点'] },
          },
        },
      },
    },
    {
      key: 'tsmc-q3-fy23',
      company: 'TSMC',
      period: 'Q3 FY23',
      periodNote: 'Ending Sep. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/tsmc-q3-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 17.3,
        notes: ['(15%) Y/Y'],
        items: [
          { id: 'hpc', label: 'High Performance Computing', value: 7.3, notes: ['42% of revenue', '+3pp Y/Y'] },
          { id: 'smartphones', label: 'Smartphones', value: 6.7, notes: ['39% of revenue', '(2pp) Y/Y'] },
          { id: 'iot', label: 'Internet of Things', value: 1.6, notes: ['9% of revenue', '(1pp) Y/Y'] },
          { id: 'automotive', label: 'Automotive', value: 0.9, notes: ['5% of revenue', 'Flat Y/Y'] },
          { id: 'dce', label: 'Digital Consumer Electronics', value: 0.3, notes: ['2% of revenue', 'Flat Y/Y'] },
          { id: 'others', label: 'Others', value: 0.5, notes: ['3% of revenue', 'Flat Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of sales', value: 7.9 },
        operatingExpenses: {
          total: 2.2,
          items: [
            { id: 'rnd', label: 'R&D', value: 1.6 },
            { id: 'sga', label: 'SG&A', value: 0.6 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 1.0 },
      },
      otherIncome: {
        total: 0.4,
        items: [{ id: 'other', label: 'Other', value: 0.4 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 9.4, notes: ['54% margin', '(6pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 7.2, notes: ['42% margin', '(9pp) Y/Y'] },
        net: {
          id: 'net_profit',
          label: 'Net profit',
          value: 6.7,
          notes: [
            '39% margin',
            '(7pp) Y/Y',
            'Operating profit plus Other less Tax differs by $0.1B because the source chart reports rounded values.',
          ],
        },
      },
      i18n: {
        zh: {
          period: '2023 财年第三季度',
          periodNote: '截至 2023 年 9 月',
          revenue: {
            notes: ['同比 (15%)'],
            items: [
              { id: 'hpc', label: '高性能计算', notes: ['占收入 42%', '同比 +3 个百分点'] },
              { id: 'smartphones', label: '智能手机', notes: ['占收入 39%', '同比 (2 个百分点)'] },
              { id: 'iot', label: '物联网', notes: ['占收入 9%', '同比 (1 个百分点)'] },
              { id: 'automotive', label: '汽车', notes: ['占收入 5%', '同比持平'] },
              { id: 'dce', label: '数字消费电子', notes: ['占收入 2%', '同比持平'] },
              { id: 'others', label: '其他', notes: ['占收入 3%', '同比持平'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
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
            gross: { label: '毛利润', notes: ['利润率 54%', '同比 (6 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 42%', '同比 (9 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 39%', '同比 (7 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'tsmc-q3-fy25',
      company: 'TSMC',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/tsmc-q3-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 33.1,
        notes: ['+41% Y/Y'],
        items: [
          { id: 'hpc', label: 'High Performance Computing', value: 18.9, notes: ['57% of revenue', '+6pp Y/Y'] },
          { id: 'smartphones', label: 'Smartphones', value: 9.9, notes: ['30% of revenue', '(4pp) Y/Y'] },
          { id: 'iot', label: 'Internet of Things', value: 1.7, notes: ['5% of revenue', '(2pp) Y/Y'] },
          { id: 'automotive', label: 'Automotive', value: 1.6, notes: ['5% of revenue', 'Flat Y/Y'] },
          { id: 'dce', label: 'Digital Consumer Electronics', value: 0.3, notes: ['1% of revenue', 'Flat Y/Y'] },
          { id: 'others', label: 'Others', value: 0.7, notes: ['2% of revenue', 'Flat Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 13.4 },
        operatingExpenses: {
          total: 2.9,
          items: [
            { id: 'rnd', label: 'R&D', value: 2.1 },
            { id: 'sga', label: 'SG&A', value: 0.8 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 2.5 },
      },
      otherIncome: {
        total: 0.8,
        items: [{ id: 'other', label: 'Other', value: 0.8 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 19.7, notes: ['59% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 16.7, notes: ['51% margin', '+3pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 15.1, notes: ['46% margin', '+3pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          revenue: {
            notes: ['同比 +41%'],
            items: [
              { id: 'hpc', label: '高性能计算', notes: ['占收入 57%', '同比 +6 个百分点'] },
              { id: 'smartphones', label: '智能手机', notes: ['占收入 30%', '同比 (4 个百分点)'] },
              { id: 'iot', label: '物联网', notes: ['占收入 5%', '同比 (2 个百分点)'] },
              { id: 'automotive', label: '汽车', notes: ['占收入 5%', '同比持平'] },
              { id: 'dce', label: '数字消费电子', notes: ['占收入 1%', '同比持平'] },
              { id: 'others', label: '其他', notes: ['占收入 2%', '同比持平'] },
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
            gross: { label: '毛利润', notes: ['利润率 59%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 51%', '同比 +3 个百分点'] },
            net: { label: '净利润', notes: ['利润率 46%', '同比 +3 个百分点'] },
          },
        },
      },
    },
    {
      key: 'tsmc-q2-fy23',
      company: 'TSMC',
      period: 'Q2 FY23',
      periodNote: 'Ending Jun. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/tsmc-q2-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 15.7,
        notes: ['(14%) Y/Y'],
        items: [
          { id: 'hpc', label: 'High Performance Computing', value: 6.9, notes: ['44% of revenue', '+1pp Y/Y'] },
          { id: 'smartphones', label: 'Smartphones', value: 5.2, notes: ['33% of revenue', '(5pp) Y/Y'] },
          { id: 'iot', label: 'Internet of Things', value: 1.3, notes: ['8% of revenue', 'Flat Y/Y'] },
          { id: 'automotive', label: 'Automotive', value: 1.3, notes: ['8% of revenue', '+3pp Y/Y'] },
          { id: 'dce', label: 'Digital Consumer Electronics', value: 0.5, notes: ['3% of revenue', 'Flat Y/Y'] },
          { id: 'others', label: 'Others', value: 0.6, notes: ['4% of revenue', '+1pp Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of sales', value: 7.2 },
        operatingExpenses: {
          total: 1.9,
          items: [
            { id: 'rnd', label: 'R&D', value: 1.4 },
            { id: 'sga', label: 'SG&A', value: 0.5 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 1.1 },
      },
      otherIncome: {
        total: 0.4,
        items: [{ id: 'other', label: 'Other', value: 0.4 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 8.5, notes: ['54% margin', '(5pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 6.6, notes: ['42% margin', '(7pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 5.9, notes: ['38% margin', '(7pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第二季度',
          periodNote: '截至 2023 年 6 月',
          revenue: {
            notes: ['同比 (14%)'],
            items: [
              { id: 'hpc', label: '高性能计算', notes: ['占收入 44%', '同比 +1 个百分点'] },
              { id: 'smartphones', label: '智能手机', notes: ['占收入 33%', '同比 (5 个百分点)'] },
              { id: 'iot', label: '物联网', notes: ['占收入 8%', '同比持平'] },
              { id: 'automotive', label: '汽车', notes: ['占收入 8%', '同比 +3 个百分点'] },
              { id: 'dce', label: '数字消费电子', notes: ['占收入 3%', '同比持平'] },
              { id: 'others', label: '其他', notes: ['占收入 4%', '同比 +1 个百分点'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
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
            gross: { label: '毛利润', notes: ['利润率 54%', '同比 (5 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 42%', '同比 (7 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 38%', '同比 (7 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'tsmc-q1-fy24',
      company: 'TSMC',
      period: 'Q1 FY24',
      periodNote: 'Ending Mar. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/tsmc-q1-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 18.9,
        notes: ['+17% Y/Y'],
        items: [
          { id: 'hpc', label: 'High Performance Computing', value: 8.7, notes: ['46% of revenue', '+2pp Y/Y'] },
          { id: 'smartphones', label: 'Smartphones', value: 7.2, notes: ['38% of revenue', '+4pp Y/Y'] },
          { id: 'iot', label: 'Internet of Things', value: 1.1, notes: ['6% of revenue', '(3pp) Y/Y'] },
          { id: 'automotive', label: 'Automotive', value: 1.1, notes: ['6% of revenue', '(1pp) Y/Y'] },
          { id: 'dce', label: 'Digital Consumer Electronics', value: 0.4, notes: ['2% of revenue', 'Flat Y/Y'] },
          { id: 'others', label: 'Others', value: 0.4, notes: ['2% of revenue', '(2pp) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of sales', value: 8.9 },
        operatingExpenses: {
          total: 2.1,
          items: [
            { id: 'rnd', label: 'R&D', value: 1.5 },
            { id: 'sga', label: 'SG&A', value: 0.6 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 1.3 },
      },
      otherIncome: {
        total: 0.6,
        items: [{ id: 'other', label: 'Other', value: 0.6 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 10.0, notes: ['53% margin', '(3pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 7.9, notes: ['42% margin', '(3pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 7.2, notes: ['38% margin', '(3pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第一季度',
          periodNote: '截至 2024 年 3 月',
          revenue: {
            notes: ['同比 +17%'],
            items: [
              { id: 'hpc', label: '高性能计算', notes: ['占收入 46%', '同比 +2 个百分点'] },
              { id: 'smartphones', label: '智能手机', notes: ['占收入 38%', '同比 +4 个百分点'] },
              { id: 'iot', label: '物联网', notes: ['占收入 6%', '同比 (3 个百分点)'] },
              { id: 'automotive', label: '汽车', notes: ['占收入 6%', '同比 (1 个百分点)'] },
              { id: 'dce', label: '数字消费电子', notes: ['占收入 2%', '同比持平'] },
              { id: 'others', label: '其他', notes: ['占收入 2%', '同比 (2 个百分点)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
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
            gross: { label: '毛利润', notes: ['利润率 53%', '同比 (3 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 42%', '同比 (3 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 38%', '同比 (3 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'tsmc-q4-fy22',
      company: 'TSMC',
      period: 'Q4 FY22',
      periodNote: 'Ending Dec. 2022',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/tsmc-q4-fy22.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 19.9,
        notes: ['+27% Y/Y'],
        items: [
          { id: 'hpc', label: 'High Performance Computing', value: 8.4, notes: ['42% of revenue', '+5pp Y/Y'] },
          { id: 'smartphones', label: 'Smartphones', value: 7.6, notes: ['38% of revenue', '(6pp) Y/Y'] },
          { id: 'iot', label: 'Internet of Things', value: 1.6, notes: ['8% of revenue', '(1pp) Y/Y'] },
          { id: 'automotive', label: 'Automotive', value: 1.2, notes: ['6% of revenue', '+2pp Y/Y'] },
          { id: 'dce', label: 'Digital Consumer Electronics', value: 0.4, notes: ['2% of revenue', '(1pp) Y/Y'] },
          { id: 'others', label: 'Others', value: 0.8, notes: ['4% of revenue', '+1pp Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of sales', value: 7.5 },
        operatingExpenses: {
          total: 2.1,
          notes: ['R&D and SG&A line items sum to $2.0B; the remaining $0.1B is rounding residual in the source chart.'],
          items: [
            { id: 'rnd', label: 'R&D', value: 1.4 },
            { id: 'sga', label: 'SG&A', value: 0.6 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 1.2 },
      },
      otherIncome: {
        total: 0.3,
        items: [{ id: 'other', label: 'Other gains', value: 0.3 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 12.4, notes: ['62% margin', '+10pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 10.4, notes: ['52% margin', '+10pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 9.4, notes: ['47% margin', '+9pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2022 财年第四季度',
          periodNote: '截至 2022 年 12 月',
          revenue: {
            notes: ['同比 +27%'],
            items: [
              { id: 'hpc', label: '高性能计算', notes: ['占收入 42%', '同比 +5 个百分点'] },
              { id: 'smartphones', label: '智能手机', notes: ['占收入 38%', '同比 (6 个百分点)'] },
              { id: 'iot', label: '物联网', notes: ['占收入 8%', '同比 (1 个百分点)'] },
              { id: 'automotive', label: '汽车', notes: ['占收入 6%', '同比 +2 个百分点'] },
              { id: 'dce', label: '数字消费电子', notes: ['占收入 2%', '同比 (1 个百分点)'] },
              { id: 'others', label: '其他', notes: ['占收入 4%', '同比 +1 个百分点'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
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
              { id: 'other', label: '其他收益' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 62%', '同比 +10 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 52%', '同比 +10 个百分点'] },
            net: { label: '净利润', notes: ['利润率 47%', '同比 +9 个百分点'] },
          },
        },
      },
    },
    {
      key: 'tsmc-q4-fy23',
      company: 'TSMC',
      period: 'Q4 FY23',
      periodNote: 'Ending Dec. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/tsmc-q4-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 19.6,
        notes: ['(2%) Y/Y'],
        items: [
          { id: 'hpc', label: 'High Performance Computing', value: 8.4, notes: ['43% of revenue', '+1pp Y/Y'] },
          { id: 'smartphones', label: 'Smartphones', value: 8.4, notes: ['43% of revenue', '+5pp Y/Y'] },
          { id: 'iot', label: 'Internet of Things', value: 1.0, notes: ['5% of revenue', '(3pp) Y/Y'] },
          { id: 'automotive', label: 'Automotive', value: 1.0, notes: ['5% of revenue', '(1pp) Y/Y'] },
          { id: 'dce', label: 'Digital Consumer Electronics', value: 0.4, notes: ['2% of revenue', 'Flat Y/Y'] },
          { id: 'others', label: 'Others', value: 0.4, notes: ['2% of revenue', '(2pp) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of sales', value: 9.2 },
        operatingExpenses: {
          total: 2.2,
          notes: ['R&D and SG&A line items sum to $2.3B while operating expenses show $2.2B; the $0.1B difference is rounding residual in the source chart.'],
          items: [
            { id: 'rnd', label: 'R&D', value: 1.6 },
            { id: 'sga', label: 'SG&A', value: 0.7 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 1.3 },
      },
      otherIncome: {
        total: 0.6,
        items: [{ id: 'other', label: 'Other', value: 0.6 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 10.4, notes: ['53% margin', '(9pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 8.2, notes: ['42% margin', '(10pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 7.5, notes: ['38% margin', '(9pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第四季度',
          periodNote: '截至 2023 年 12 月',
          revenue: {
            notes: ['同比 (2%)'],
            items: [
              { id: 'hpc', label: '高性能计算', notes: ['占收入 43%', '同比 +1 个百分点'] },
              { id: 'smartphones', label: '智能手机', notes: ['占收入 43%', '同比 +5 个百分点'] },
              { id: 'iot', label: '物联网', notes: ['占收入 5%', '同比 (3 个百分点)'] },
              { id: 'automotive', label: '汽车', notes: ['占收入 5%', '同比 (1 个百分点)'] },
              { id: 'dce', label: '数字消费电子', notes: ['占收入 2%', '同比持平'] },
              { id: 'others', label: '其他', notes: ['占收入 2%', '同比 (2 个百分点)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
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
            gross: { label: '毛利润', notes: ['利润率 53%', '同比 (9 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 42%', '同比 (10 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 38%', '同比 (9 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
