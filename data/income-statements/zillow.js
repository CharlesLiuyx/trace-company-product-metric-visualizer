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
      key: 'zillow-q1-fy26',
      company: 'Zillow',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/zillow-q1-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 708,
        notes: ['+18% Y/Y'],
        items: [
          { id: 'residential', label: 'Residential', value: 450, notes: ['+8% Y/Y'] },
          { id: 'rentals', label: 'Rentals', value: 183, notes: ['+42% Y/Y'] },
          { id: 'home_loans', label: 'Home Loans', value: 64, notes: ['+56% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 11, notes: ['Flat Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 189 },
        operatingExpenses: {
          total: 483,
          items: [
            { id: 'sm', label: 'S&M', value: 210, notes: ['30% of revenue', '(3pp) Y/Y'] },
            { id: 'product', label: 'Product', value: 150, notes: ['21% of revenue', '(4pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 123, notes: ['17% of revenue', '(3pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax_interest', label: 'Tax & interest', value: 6 },
      },
      otherIncome: { total: 16, items: [{ id: 'other_income', label: 'Other', value: 16 }] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 519, notes: ['73% margin', '(3pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 36, notes: ['5% margin', '+7pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 46, notes: ['6% margin', '+5pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度', periodNote: '截至 2026 年 3 月',
          revenue: { notes: ['同比 +18%'], items: [
            { id: 'residential', label: '住宅业务', notes: ['同比 +8%'] }, { id: 'rentals', label: '租赁', notes: ['同比 +42%'] },
            { id: 'home_loans', label: '住房贷款', notes: ['同比 +56%'] }, { id: 'other_revenue', label: '其他', notes: ['同比持平'] },
          ] },
          costs: { costOfRevenue: { label: '收入成本' }, operatingExpenses: { items: [
            { id: 'sm', label: '销售与市场', notes: ['占收入 30%', '同比 (3 个百分点)'] }, { id: 'product', label: '产品', notes: ['占收入 21%', '同比 (4 个百分点)'] },
            { id: 'ga', label: '管理费用', notes: ['占收入 17%', '同比 (3 个百分点)'] },
          ] }, tax: { label: '税费及利息' } },
          otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
          profit: { gross: { label: '毛利润', notes: ['利润率 73%', '同比 (3 个百分点)'] }, operating: { label: '营业利润', notes: ['利润率 5%', '同比 +7 个百分点'] }, net: { label: '净利润', notes: ['利润率 6%', '同比 +5 个百分点'] } },
        },
      },
    },
    {
      key: 'zillow-q3-fy25',
      company: 'Zillow',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/zillow-q3-fy25.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 676,
        notes: ['+16% Y/Y'],
        items: [
          { id: 'residential', label: 'Residential', value: 435, notes: ['+7% Y/Y'] },
          { id: 'rentals', label: 'Rentals', value: 174, notes: ['+41% Y/Y'] },
          { id: 'home_loans', label: 'Home Loans', value: 53, notes: ['+36% Y/Y'] },
          { id: 'other', label: 'Other', value: 14, notes: ['Flat Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 185 },
        operatingExpenses: {
          total: 494,
          items: [
            { id: 'sm', label: 'S&M', value: 214, notes: ['32% of revenue', '(6pp) Y/Y'] },
            { id: 'product', label: 'Product', value: 151, notes: ['22% of revenue', '(3pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 129, notes: ['19% of revenue', '(2pp) Y/Y'] },
          ],
        },
        tax: {
          label: 'Tax',
          value: 0,
          notes: ['No separate tax line is shown in the source chart.'],
        },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 491, notes: ['73% margin', '(3pp) Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -3, notes: ['(0%) margin', '+8pp Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -3,
          notes: ['No separate net income line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          revenue: {
            notes: ['同比 +16%'],
            items: [
              { id: 'residential', label: '住宅业务', notes: ['同比 +7%'] },
              { id: 'rentals', label: '租赁', notes: ['同比 +41%'] },
              { id: 'home_loans', label: '住房贷款', notes: ['同比 +36%'] },
              { id: 'other', label: '其他', notes: ['同比持平'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 32%', '同比 (6 个百分点)'] },
                { id: 'product', label: '产品', notes: ['占收入 22%', '同比 (3 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 19%', '同比 (2 个百分点)'] },
              ],
            },
            tax: { label: '税费', notes: ['来源图未单列税费。'] },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 73%', '同比 (3 个百分点)'] },
            operating: { label: '营业亏损', notes: ['利润率 (0%)', '同比 +8 个百分点'] },
            net: { label: '营业亏损', notes: ['来源图未单独显示净利润项目。'] },
          },
        },
      },
    },
    {
      key: 'zillow-q4-fy25',
      company: 'Zillow',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/zillow-q4-fy25.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 654,
        notes: ['+18% Y/Y'],
        items: [
          { id: 'residential', label: 'Residential', value: 418, notes: ['+8% Y/Y'] },
          { id: 'rentals', label: 'Rentals', value: 168, notes: ['+45% Y/Y'] },
          { id: 'home_loans', label: 'Home Loans', value: 57, notes: ['+39% Y/Y'] },
          { id: 'other', label: 'Other', value: 11, notes: ['+10% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 178 },
        operatingExpenses: {
          total: 487,
          items: [
            { id: 'sm', label: 'S&M', value: 205, notes: ['31% of revenue', '(5pp) Y/Y'] },
            { id: 'product', label: 'Product', value: 154, notes: ['24% of revenue', '(3pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 128, notes: ['20% of revenue', '(5pp) Y/Y'] },
          ],
        },
        tax: {
          label: 'Tax',
          value: 0,
          notes: ['No separate tax line is shown in the source chart.'],
        },
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 476, notes: ['73% margin', '(3pp) Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -11, notes: ['(2%) margin', '+11pp Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -11,
          notes: ['No separate net income line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +18%'],
            items: [
              { id: 'residential', label: '住宅业务', notes: ['同比 +8%'] },
              { id: 'rentals', label: '租赁', notes: ['同比 +45%'] },
              { id: 'home_loans', label: '住房贷款', notes: ['同比 +39%'] },
              { id: 'other', label: '其他', notes: ['同比 +10%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 31%', '同比 (5 个百分点)'] },
                { id: 'product', label: '产品', notes: ['占收入 24%', '同比 (3 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 20%', '同比 (5 个百分点)'] },
              ],
            },
            tax: { label: '税费', notes: ['来源图未单列税费。'] },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 73%', '同比 (3 个百分点)'] },
            operating: { label: '营业亏损', notes: ['利润率 (2%)', '同比 +11 个百分点'] },
            net: {
              label: '营业亏损',
              notes: ['来源图未单独显示净利润项目。'],
            },
          },
        },
      },
    }
  );
})(window);
