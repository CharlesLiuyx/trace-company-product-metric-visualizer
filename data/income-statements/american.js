/* Pure income-statement SSOT records. Sankey geometry stays in data/datasets/. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'american-q2-fy26',
    company: 'American Airlines',
    period: 'Q2 FY26',
    periodNote: 'Quarter ended Jun. 30, 2026',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/american-q2-fy26.png',
    roundingTolerance: 0.15,
    revenue: {
      total: 16.7,
      notes: ['+16% Y/Y'],
      items: [
        { id: 'passenger', label: 'Passenger', value: 15.2, notes: ['+16% Y/Y'] },
        { id: 'cargo', label: 'Cargo', value: 0.3, notes: ['+29% Y/Y'] },
        { id: 'other_revenue', label: 'Other', value: 1.2, notes: ['+18% Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: {
        id: 'cost_of_revenue',
        label: 'Cost of revenue (not separately presented)',
        value: 0,
        notes: ['The source infographic moves directly from revenue to operating profit and operating expenses.'],
      },
      operatingExpenses: {
        total: 16.3,
        items: [
          { id: 'aircraft_fuel', label: 'Aircraft fuel', value: 4.9 },
          { id: 'salaries_benefits', label: 'Salaries & benefits', value: 4.6 },
          { id: 'regional', label: 'Regional', value: 1.4 },
          { id: 'maintenance', label: 'Maintenance', value: 1.0 },
          { id: 'landing_fees', label: 'Landing fees', value: 1.0 },
          { id: 'aircraft_rent', label: 'Aircraft rent', value: 0.3 },
          { id: 'selling_expenses', label: 'Selling expenses', value: 0.6 },
          { id: 'depreciation_amortization', label: 'D&A', value: 0.5 },
          { id: 'other_operating', label: 'Other', value: 1.9 },
        ],
      },
      tax: { id: 'tax', label: 'Tax (included in Tax & other)', value: 0 },
    },
    otherIncome: { total: 0, items: [] },
    otherExpenses: {
      total: 0.4,
      items: [{ id: 'tax_other', label: 'Tax & other', value: 0.4 }],
    },
    profit: {
      gross: {
        id: 'gross_profit',
        label: 'Gross profit (not separately presented)',
        value: 16.7,
        notes: ['Bookkeeping value for SSOT parity; the source infographic has no gross-profit stage.'],
      },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 0.4, notes: ['3% margin', '(5pp) Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 0.1, notes: ['0% margin', '(4pp) Y/Y'] },
    },
    sources: [
      {
        name: 'American Airlines continues to execute on commercial priorities, delivering highest quarterly revenue in company history',
        url: 'https://americanairlines.gcs-web.com/news-releases/news-release-details/american-airlines-continues-execute-commercial-priorities',
      },
    ],
    i18n: {
      zh: {
        period: '2026 财年第二季度',
        periodNote: '截至 2026 年 6 月 30 日的季度',
        revenue: {
          notes: ['同比 +16%'],
          items: [
            { id: 'passenger', label: '客运', notes: ['同比 +16%'] },
            { id: 'cargo', label: '货运', notes: ['同比 +29%'] },
            { id: 'other_revenue', label: '其他', notes: ['同比 +18%'] },
          ],
        },
        costs: {
          costOfRevenue: {
            label: '收入成本（未单列）',
            notes: ['来源信息图从收入直接拆分为营业利润和运营费用。'],
          },
          operatingExpenses: {
            items: [
              { id: 'aircraft_fuel', label: '航空燃油' },
              { id: 'salaries_benefits', label: '薪酬与福利' },
              { id: 'regional', label: '支线业务' },
              { id: 'maintenance', label: '维护' },
              { id: 'landing_fees', label: '着陆费' },
              { id: 'aircraft_rent', label: '飞机租赁' },
              { id: 'selling_expenses', label: '销售费用' },
              { id: 'depreciation_amortization', label: '折旧与摊销' },
              { id: 'other_operating', label: '其他' },
            ],
          },
          tax: { label: '税费（计入税费及其他）' },
        },
        otherExpenses: { items: [{ id: 'tax_other', label: '税费及其他' }] },
        profit: {
          gross: { label: '毛利润（未单列）', notes: ['用于 SSOT 对齐的账面值；来源信息图未展示毛利润阶段。'] },
          operating: { label: '营业利润', notes: ['利润率 3%', '同比 (5 个百分点)'] },
          net: { label: '净利润', notes: ['利润率 0%', '同比 (4 个百分点)'] },
        },
      },
    },
  });

  ssot.records.push({
    key: 'american-q4-fy25',
    company: 'American Airlines',
    period: 'Q4 FY25',
    periodNote: 'Quarter ended Dec. 31, 2025',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/american-q4-fy25.png',
    roundingTolerance: 0.15,
    revenue: {
      total: 14.0,
      notes: ['+2% Y/Y'],
      items: [
        { id: 'passenger', label: 'Passenger', value: 12.7, notes: ['+2% Y/Y'] },
        { id: 'cargo', label: 'Cargo', value: 0.2, notes: ['+3% Y/Y'] },
        { id: 'other_revenue', label: 'Other', value: 1.1, notes: ['+8% Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: {
        id: 'cost_of_revenue',
        label: 'Cost of revenue (not separately presented)',
        value: 0,
        notes: ['The source infographic moves directly from revenue to operating profit and operating expenses.'],
      },
      operatingExpenses: {
        total: 13.5,
        items: [
          { id: 'salaries_benefits', label: 'Salaries & benefits', value: 4.5 },
          { id: 'aircraft_fuel', label: 'Aircraft fuel', value: 2.7 },
          { id: 'regional', label: 'Regional', value: 1.4 },
          { id: 'maintenance', label: 'Maintenance', value: 1.0 },
          { id: 'landing_fees', label: 'Landing fees', value: 0.8 },
          { id: 'aircraft_rent', label: 'Aircraft rent', value: 0.3 },
          { id: 'selling_expenses', label: 'Selling expenses', value: 0.5 },
          { id: 'depreciation_amortization', label: 'D&A', value: 0.5 },
          { id: 'other_operating', label: 'Other', value: 1.8 },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.042 },
    },
    otherIncome: {
      total: 0.04,
      items: [{ id: 'other_income', label: 'Other', value: 0.04 }],
    },
    otherExpenses: {
      total: 0.4,
      items: [{ id: 'interest', label: 'Interest', value: 0.4 }],
    },
    profit: {
      gross: {
        id: 'gross_profit',
        label: 'Gross profit (not separately presented)',
        value: 14.0,
        notes: ['Bookkeeping value for SSOT parity; the source infographic has no gross-profit stage.'],
      },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 0.5, notes: ['3% margin', '(5pp) Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 0.1, notes: ['1% margin', '(4pp) Y/Y'] },
    },
    sources: [
      {
        name: 'American Airlines Reports Fourth-Quarter and Full-Year 2025 Financial Results',
        url: 'https://americanairlines.gcs-web.com/node/43271',
      },
    ],
    i18n: {
      zh: {
        period: '2025 财年第四季度',
        periodNote: '截至 2025 年 12 月 31 日的季度',
        revenue: {
          notes: ['同比 +2%'],
          items: [
            { id: 'passenger', label: '客运', notes: ['同比 +2%'] },
            { id: 'cargo', label: '货运', notes: ['同比 +3%'] },
            { id: 'other_revenue', label: '其他', notes: ['同比 +8%'] },
          ],
        },
        costs: {
          costOfRevenue: {
            label: '收入成本（未单列）',
            notes: ['来源信息图从收入直接拆分为营业利润和运营费用。'],
          },
          operatingExpenses: {
            items: [
              { id: 'salaries_benefits', label: '薪酬与福利' },
              { id: 'aircraft_fuel', label: '航空燃油' },
              { id: 'regional', label: '支线业务' },
              { id: 'maintenance', label: '维护' },
              { id: 'landing_fees', label: '着陆费' },
              { id: 'aircraft_rent', label: '飞机租赁' },
              { id: 'selling_expenses', label: '销售费用' },
              { id: 'depreciation_amortization', label: '折旧与摊销' },
              { id: 'other_operating', label: '其他' },
            ],
          },
          tax: { label: '税费' },
        },
        otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
        otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
        profit: {
          gross: { label: '毛利润（未单列）', notes: ['用于 SSOT 对齐的账面值；来源信息图未展示毛利润阶段。'] },
          operating: { label: '营业利润', notes: ['利润率 3%', '同比 (5 个百分点)'] },
          net: { label: '净利润', notes: ['利润率 1%', '同比 (4 个百分点)'] },
        },
      },
    },
  });

  ssot.records.push({
    key: 'american-q4-fy25-operating-loss',
    company: 'American Airlines',
    period: 'Q4 FY25',
    periodNote: 'Operating-loss source variant',
    currency: '$',
    unit: 'B',
    decimals: 3,
    sourceImage: 'input/processed/american-q4-fy25-operating-loss.png',
    roundingTolerance: 0.15,
    revenue: {
      total: 13.9,
      notes: ['+11% Y/Y'],
      items: [
        { id: 'passenger', label: 'Passenger', value: 12.5, notes: ['+10% Y/Y'] },
        { id: 'cargo', label: 'Cargo', value: 0.2, notes: ['+13% Y/Y'] },
        { id: 'other_revenue', label: 'Other', value: 1.2, notes: ['+24% Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: {
        id: 'cost_of_revenue',
        label: 'Cost of revenue (not separately presented)',
        value: 0,
        notes: ['The source infographic moves directly from revenue to operating expenses.'],
      },
      operatingExpenses: {
        total: 14.0,
        items: [
          { id: 'salaries_benefits', label: 'Salaries & benefits', value: 4.7 },
          { id: 'aircraft_fuel', label: 'Aircraft fuel', value: 2.9 },
          { id: 'regional', label: 'Regional', value: 1.4 },
          { id: 'maintenance', label: 'Maintenance', value: 1.0 },
          { id: 'landing_fees', label: 'Landing fees', value: 0.9 },
          { id: 'aircraft_rent', label: 'Aircraft rent', value: 0.3 },
          { id: 'selling_expenses', label: 'Selling expenses', value: 0.5 },
          { id: 'depreciation_amortization', label: 'D&A', value: 0.5 },
          { id: 'other_operating', label: 'Other', value: 1.8 },
        ],
      },
      tax: { id: 'tax', label: 'Tax (not separately presented)', value: 0 },
    },
    otherIncome: { total: 0, items: [] },
    otherExpenses: { total: 0, items: [] },
    profit: {
      gross: {
        id: 'gross_profit',
        label: 'Gross profit (not separately presented)',
        value: 13.9,
        notes: ['Bookkeeping value for SSOT parity; the source infographic has no gross-profit stage.'],
      },
      operating: { id: 'operating_loss', label: 'Operating loss', value: -0.041, notes: ['(0%) margin', '+2pp Y/Y'] },
      net: {
        id: 'operating_loss',
        label: 'Operating loss',
        value: -0.041,
        notes: ['No separate net income or net loss line is shown in the source infographic.'],
      },
    },
    sources: [{ name: 'App Economy Insights source infographic', url: 'https://www.appeconomyinsights.com/' }],
    i18n: {
      zh: {
        period: '2025 财年第四季度',
        periodNote: '营业亏损来源版本',
        revenue: {
          notes: ['同比 +11%'],
          items: [
            { id: 'passenger', label: '客运', notes: ['同比 +10%'] },
            { id: 'cargo', label: '货运', notes: ['同比 +13%'] },
            { id: 'other_revenue', label: '其他', notes: ['同比 +24%'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本（未单列）', notes: ['来源图从收入直接流向运营费用。'] },
          operatingExpenses: {
            items: [
              { id: 'salaries_benefits', label: '薪酬与福利' },
              { id: 'aircraft_fuel', label: '航空燃油' },
              { id: 'regional', label: '支线业务' },
              { id: 'maintenance', label: '维护' },
              { id: 'landing_fees', label: '着陆费' },
              { id: 'aircraft_rent', label: '飞机租赁' },
              { id: 'selling_expenses', label: '销售费用' },
              { id: 'depreciation_amortization', label: '折旧与摊销' },
              { id: 'other_operating', label: '其他' },
            ],
          },
          tax: { label: '税费（未单列）' },
        },
        profit: {
          gross: { label: '毛利润（未单列）', notes: ['用于 SSOT 对齐的账面值；来源图未展示毛利润阶段。'] },
          operating: { label: '营业亏损', notes: ['利润率 (0%)', '同比 +2 个百分点'] },
          net: { label: '营业亏损', notes: ['来源图未单列净利润或净亏损。'] },
        },
      },
    },
  });
})(window);
