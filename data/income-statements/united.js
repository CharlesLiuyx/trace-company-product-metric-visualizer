/* Pure income-statement SSOT records. Sankey geometry stays in data/datasets/. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'united-q4-fy25',
    company: 'United Airlines',
    period: 'Q4 FY25',
    periodNote: 'Quarter ended Dec. 31, 2025',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/united-q4-fy25.png',
    roundingTolerance: 0.15,
    revenue: {
      total: 15.4,
      notes: ['+5% Y/Y'],
      items: [
        { id: 'passenger', label: 'Passenger', value: 13.9, notes: ['+5% Y/Y'] },
        { id: 'cargo', label: 'Cargo', value: 0.5, notes: ['(6)% Y/Y'] },
        { id: 'other_revenue', label: 'Other', value: 1.0, notes: ['+9% Y/Y'] },
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
        total: 14.0,
        items: [
          { id: 'salaries_benefits', label: 'Salaries & benefits', value: 4.5 },
          { id: 'aircraft_fuel', label: 'Aircraft fuel', value: 2.9 },
          { id: 'distribution', label: 'Distribution', value: 0.6 },
          { id: 'landing_fees', label: 'Landing fees', value: 1.0 },
          { id: 'aircraft_rent', label: 'Aircraft rent', value: 0.1 },
          { id: 'depreciation_amortization', label: 'D&A', value: 0.7 },
          { id: 'regional_carrier', label: 'Regional carrier', value: 0.7 },
          { id: 'maintenance', label: 'Maintenance', value: 0.9 },
          { id: 'other_operating', label: 'Other', value: 2.6 },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.3 },
    },
    otherIncome: { total: 0, items: [] },
    otherExpenses: {
      total: 0.1,
      items: [{ id: 'interest', label: 'Interest', value: 0.1 }],
    },
    profit: {
      gross: {
        id: 'gross_profit',
        label: 'Gross profit (not separately presented)',
        value: 15.4,
        notes: ['Bookkeeping value for SSOT parity; the source infographic has no gross-profit stage.'],
      },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 1.4, notes: ['9% margin', '(1pp) Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 1.0, notes: ['7% margin', '+0pp Y/Y'] },
    },
    sources: [
      {
        name: 'United Airlines Reports Fourth-Quarter and Full-Year 2025 Results',
        url: 'https://ir.united.com/static-files/c1937f5b-6684-4442-ab35-22043f1d8ed9',
      },
    ],
    i18n: {
      zh: {
        period: '2025 财年第四季度',
        periodNote: '截至 2025 年 12 月 31 日的季度',
        revenue: {
          notes: ['同比 +5%'],
          items: [
            { id: 'passenger', label: '客运', notes: ['同比 +5%'] },
            { id: 'cargo', label: '货运', notes: ['同比 (6)%'] },
            { id: 'other_revenue', label: '其他', notes: ['同比 +9%'] },
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
              { id: 'distribution', label: '分销' },
              { id: 'landing_fees', label: '着陆费' },
              { id: 'aircraft_rent', label: '飞机租赁' },
              { id: 'depreciation_amortization', label: '折旧与摊销' },
              { id: 'regional_carrier', label: '支线承运人' },
              { id: 'maintenance', label: '维护' },
              { id: 'other_operating', label: '其他' },
            ],
          },
          tax: { label: '税费' },
        },
        otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
        profit: {
          gross: { label: '毛利润（未单列）', notes: ['用于 SSOT 对齐的账面值；来源信息图未展示毛利润阶段。'] },
          operating: { label: '营业利润', notes: ['利润率 9%', '同比 (1 个百分点)'] },
          net: { label: '净利润', notes: ['利润率 7%', '同比 +0 个百分点'] },
        },
      },
    },
  });

  ssot.records.push({
    key: 'united-q1-fy26',
    company: 'United Airlines',
    period: 'Q1 FY26',
    periodNote: 'Quarter ended Mar. 31, 2026',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/united-q1-fy26.png',
    roundingTolerance: 0.15,
    revenue: {
      total: 14.6,
      notes: ['+11% Y/Y'],
      items: [
        { id: 'passenger', label: 'Passenger', value: 13.2, notes: ['+11% Y/Y'] },
        { id: 'cargo', label: 'Cargo', value: 0.4, notes: ['(2)% Y/Y'] },
        { id: 'other_revenue', label: 'Other', value: 1.0, notes: ['+11% Y/Y'] },
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
        total: 13.6,
        items: [
          { id: 'salaries_benefits', label: 'Salaries & benefits', value: 4.6 },
          { id: 'aircraft_fuel', label: 'Aircraft fuel', value: 3.0 },
          { id: 'distribution', label: 'Distribution', value: 0.5 },
          { id: 'aircraft_rent', label: 'Aircraft rent', value: 0.1 },
          { id: 'landing_fees', label: 'Landing fees', value: 0.9 },
          { id: 'depreciation_amortization', label: 'D&A', value: 0.8 },
          { id: 'regional_carrier', label: 'Regional carrier', value: 0.7 },
          { id: 'maintenance', label: 'Maintenance', value: 0.9 },
          { id: 'other_operating', label: 'Other', value: 2.2 },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.2 },
    },
    otherIncome: { total: 0, items: [] },
    otherExpenses: {
      total: 0.1,
      items: [{ id: 'interest', label: 'Interest', value: 0.1 }],
    },
    profit: {
      gross: {
        id: 'gross_profit',
        label: 'Gross profit (not separately presented)',
        value: 14.6,
        notes: ['Bookkeeping value for SSOT parity; the source infographic has no gross-profit stage.'],
      },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 1.0, notes: ['7% margin', '+2pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 0.7, notes: ['5% margin', '+2pp Y/Y'] },
    },
    sources: [
      {
        name: 'United Airlines Reports First-Quarter 2026 Results',
        url: 'https://ir.united.com/static-files/4465ec94-3c73-45ff-841a-eac498655855',
      },
    ],
    i18n: {
      zh: {
        period: '2026 财年第一季度',
        periodNote: '截至 2026 年 3 月 31 日的季度',
        revenue: {
          notes: ['同比 +11%'],
          items: [
            { id: 'passenger', label: '客运', notes: ['同比 +11%'] },
            { id: 'cargo', label: '货运', notes: ['同比 (2)%'] },
            { id: 'other_revenue', label: '其他', notes: ['同比 +11%'] },
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
              { id: 'distribution', label: '分销' },
              { id: 'aircraft_rent', label: '飞机租赁' },
              { id: 'landing_fees', label: '着陆费' },
              { id: 'depreciation_amortization', label: '折旧与摊销' },
              { id: 'regional_carrier', label: '支线承运人' },
              { id: 'maintenance', label: '维护' },
              { id: 'other_operating', label: '其他' },
            ],
          },
          tax: { label: '税费' },
        },
        otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
        profit: {
          gross: { label: '毛利润（未单列）', notes: ['用于 SSOT 对齐的账面值；来源信息图未展示毛利润阶段。'] },
          operating: { label: '营业利润', notes: ['利润率 7%', '同比 +2 个百分点'] },
          net: { label: '净利润', notes: ['利润率 5%', '同比 +2 个百分点'] },
        },
      },
    },
  });

  ssot.records.push({
    key: 'united-q2-fy26',
    company: 'United Airlines',
    period: 'Q2 FY26',
    periodNote: 'Quarter ended Jun. 30, 2026',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/united-q2-fy26.png',
    roundingTolerance: 0.15,
    revenue: {
      total: 17.7,
      notes: ['+16% Y/Y'],
      items: [
        { id: 'passenger', label: 'Passenger', value: 16.1, notes: ['+16% Y/Y'] },
        { id: 'cargo', label: 'Cargo', value: 0.5, notes: ['+23% Y/Y'] },
        { id: 'other_revenue', label: 'Other', value: 1.0, notes: ['+8% Y/Y'] },
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
        total: 16.6,
        items: [
          { id: 'aircraft_fuel', label: 'Aircraft fuel', value: 5.1 },
          { id: 'salaries_benefits', label: 'Salaries & benefits', value: 4.7 },
          { id: 'distribution', label: 'Distribution', value: 0.6 },
          { id: 'aircraft_rent', label: 'Aircraft rent', value: 0.1 },
          { id: 'landing_fees', label: 'Landing fees', value: 1.1 },
          { id: 'depreciation_amortization', label: 'D&A', value: 0.8 },
          { id: 'regional_carrier', label: 'Regional carrier', value: 0.7 },
          { id: 'maintenance', label: 'Maintenance', value: 0.9 },
          { id: 'other_operating', label: 'Other', value: 2.6 },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.2 },
    },
    otherIncome: {
      total: 0.1,
      items: [{ id: 'other_income', label: 'Other', value: 0.1 }],
    },
    otherExpenses: {
      total: 0.2,
      items: [{ id: 'interest', label: 'Interest', value: 0.2 }],
    },
    profit: {
      gross: {
        id: 'gross_profit',
        label: 'Gross profit (not separately presented)',
        value: 17.7,
        notes: ['Bookkeeping value for SSOT parity; the source infographic has no gross-profit stage.'],
      },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 1.1, notes: ['6% margin', '(2pp) Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 0.8, notes: ['5% margin', '(2pp) Y/Y'] },
    },
    sources: [
      {
        name: 'United Airlines Reports Second-Quarter 2026 Results',
        url: 'https://ir.united.com/static-files/ce6406f9-25c7-422a-bd4f-606597d74c85',
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
            { id: 'cargo', label: '货运', notes: ['同比 +23%'] },
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
              { id: 'aircraft_fuel', label: '航空燃油' },
              { id: 'salaries_benefits', label: '薪酬与福利' },
              { id: 'distribution', label: '分销' },
              { id: 'aircraft_rent', label: '飞机租赁' },
              { id: 'landing_fees', label: '着陆费' },
              { id: 'depreciation_amortization', label: '折旧与摊销' },
              { id: 'regional_carrier', label: '支线承运人' },
              { id: 'maintenance', label: '维护' },
              { id: 'other_operating', label: '其他' },
            ],
          },
          tax: { label: '税费' },
        },
        otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
        otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
        profit: {
          gross: { label: '毛利润（未单列）', notes: ['用于 SSOT 对齐的账面值；来源信息图未展示毛利润阶段。'] },
          operating: { label: '营业利润', notes: ['利润率 6%', '同比 (2 个百分点)'] },
          net: { label: '净利润', notes: ['利润率 5%', '同比 (2 个百分点)'] },
        },
      },
    },
  });
})(window);
