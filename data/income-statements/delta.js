/* Pure income-statement SSOT records. Sankey geometry stays in data/datasets/. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push(
    {
      key: 'delta-q2-fy26',
      company: 'Delta Air Lines',
      period: 'Q2 FY26',
      periodNote: 'Quarter ended Jun. 30, 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/delta-q2-fy26.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 19.8,
        notes: ['+19% Y/Y'],
        items: [
          { id: 'passenger', label: 'Passenger', value: 15.6, notes: ['+13% Y/Y'] },
          { id: 'cargo', label: 'Cargo', value: 0.3, notes: ['+39% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 3.9, notes: ['+50% Y/Y'] },
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
          total: 17.9,
          items: [
            { id: 'salaries_benefits', label: 'Salaries & benefits', value: 4.8 },
            { id: 'aircraft_fuel', label: 'Aircraft fuel', value: 4.1 },
            { id: 'ancillary_business', label: 'Ancillary business', value: 2.1 },
            { id: 'contracted_services', label: 'Contracted services', value: 1.3 },
            { id: 'landing_fees', label: 'Landing fees', value: 1.0 },
            { id: 'maintenance', label: 'Maintenance', value: 0.7 },
            { id: 'depreciation_amortization', label: 'D&A', value: 0.7 },
            { id: 'regional_carrier', label: 'Regional carrier', value: 0.7 },
            { id: 'other_operating', label: 'Other', value: 2.7 },
          ],
        },
        tax: {
          label: 'Tax (included with interest)',
          value: 0,
          notes: ['The source combines tax and interest into one $0.5B branch.'],
        },
      },
      otherIncome: {
        total: 0.3,
        items: [{ id: 'other_income', label: 'Other', value: 0.3 }],
      },
      otherExpenses: {
        total: 0.5,
        items: [
          {
            id: 'tax_interest',
            label: 'Tax & interest',
            value: 0.5,
            notes: ['Combined deduction presented by the source infographic.'],
          },
        ],
      },
      profit: {
        gross: {
          id: 'gross_profit',
          label: 'Gross profit (not separately presented)',
          value: 19.8,
          notes: ['Bookkeeping value for SSOT parity; the source infographic has no gross-profit stage.'],
        },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.9, notes: ['9% margin', '(3pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.6, notes: ['8% margin', '(5pp) Y/Y'] },
      },
      sources: [
        {
          name: 'Delta Air Lines Announces June Quarter 2026 Financial Results',
          url: 'https://ir.delta.com/news/news-details/2026/Delta-Air-Lines-Announces-June-Quarter-2026-Financial-Results/default.aspx',
        },
      ],
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月 30 日的季度',
          revenue: {
            notes: ['同比 +19%'],
            items: [
              { id: 'passenger', label: '客运', notes: ['同比 +13%'] },
              { id: 'cargo', label: '货运', notes: ['同比 +39%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 +50%'] },
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
                { id: 'ancillary_business', label: '辅助业务' },
                { id: 'contracted_services', label: '合同服务' },
                { id: 'landing_fees', label: '着陆费' },
                { id: 'maintenance', label: '维护' },
                { id: 'depreciation_amortization', label: '折旧与摊销' },
                { id: 'regional_carrier', label: '支线承运人' },
                { id: 'other_operating', label: '其他' },
              ],
            },
            tax: { label: '税费（与利息合并）', notes: ['来源图将税费和利息合并为一条 $0.5B 支流。'] },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
          otherExpenses: {
            items: [{ id: 'tax_interest', label: '税费与利息', notes: ['来源信息图合并列示的扣减项。'] }],
          },
          profit: {
            gross: { label: '毛利润（未单列）', notes: ['用于 SSOT 对齐的账面值；来源信息图未展示毛利润阶段。'] },
            operating: { label: '营业利润', notes: ['利润率 9%', '同比 (3 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 8%', '同比 (5 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'delta-q1-fy26',
      company: 'Delta Air Lines',
      period: 'Q1 FY26',
      periodNote: 'Quarter ended Mar. 31, 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/delta-q1-fy26.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 15.9,
        notes: ['+13% Y/Y'],
        items: [
          { id: 'passenger', label: 'Passenger', value: 12.3, notes: ['+7% Y/Y'] },
          { id: 'cargo', label: 'Cargo', value: 0.2, notes: ['+9% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 3.3, notes: ['+41% Y/Y'] },
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
          total: 15.4,
          items: [
            { id: 'salaries_benefits', label: 'Salaries & benefits', value: 4.5 },
            { id: 'aircraft_fuel', label: 'Aircraft fuel', value: 2.7 },
            { id: 'ancillary_business', label: 'Ancillary business', value: 1.7 },
            { id: 'contracted_services', label: 'Contracted services', value: 1.2 },
            { id: 'landing_fees', label: 'Landing fees', value: 0.9 },
            { id: 'maintenance', label: 'Maintenance', value: 0.7 },
            { id: 'depreciation_amortization', label: 'D&A', value: 0.6 },
            { id: 'regional_carrier', label: 'Regional carrier', value: 0.6 },
            { id: 'other_operating', label: 'Other', value: 2.3 },
          ],
        },
        tax: {
          label: 'Tax',
          value: 0,
          notes: ['Income tax is included in the source chart\'s combined non-operating "Other ($0.8B)" deduction.'],
        },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 0.8,
        items: [
          {
            id: 'other_nonoperating',
            label: 'Other',
            value: 0.8,
            notes: ['Combined non-operating expense and income tax; turns $0.5B operating profit into a $0.3B net loss.'],
          },
        ],
      },
      profit: {
        gross: {
          id: 'gross_profit',
          label: 'Gross profit (not separately presented)',
          value: 15.9,
          notes: ['Bookkeeping value for SSOT parity; the source infographic has no gross-profit stage.'],
        },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.5, notes: ['3% margin', '(1pp) Y/Y'] },
        net: {
          id: 'net_loss',
          label: 'Net loss',
          value: -0.3,
          notes: ['$0.5B operating profit offset by the combined $0.8B non-operating and tax deduction.'],
        },
      },
      sources: [
        {
          name: 'Delta Air Lines Announces March Quarter 2026 Financial Results',
          url: 'https://ir.delta.com/news/news-details/2026/Delta-Air-Lines-Announces-March-Quarter-2026-Financial-Results/default.aspx',
        },
      ],
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月 31 日的季度',
          revenue: {
            notes: ['同比 +13%'],
            items: [
              { id: 'passenger', label: '客运', notes: ['同比 +7%'] },
              { id: 'cargo', label: '货运', notes: ['同比 +9%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 +41%'] },
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
                { id: 'ancillary_business', label: '辅助业务' },
                { id: 'contracted_services', label: '合同服务' },
                { id: 'landing_fees', label: '着陆费' },
                { id: 'maintenance', label: '维护' },
                { id: 'depreciation_amortization', label: '折旧与摊销' },
                { id: 'regional_carrier', label: '支线承运人' },
                { id: 'other_operating', label: '其他' },
              ],
            },
            tax: { label: '税费', notes: ['所得税并入来源图的非经营性“其他（$0.8B）”扣减。'] },
          },
          otherExpenses: {
            items: [
              {
                id: 'other_nonoperating',
                label: '其他',
                notes: ['$0.5B 营业利润经非经营性费用和所得税合计扣减后形成 $0.3B 净亏损。'],
              },
            ],
          },
          profit: {
            gross: { label: '毛利润（未单列）', notes: ['用于 SSOT 对齐的账面值；来源信息图未展示毛利润阶段。'] },
            operating: { label: '营业利润', notes: ['利润率 3%', '同比 (1 个百分点)'] },
            net: { label: '净亏损', notes: ['$0.5B 营业利润被 $0.8B 非经营性费用和税费合计扣减抵销。'] },
          },
        },
      },
    },
    {
    key: 'delta-q4-fy25',
    company: 'Delta Air Lines',
    period: 'Q4 FY25',
    periodNote: 'Quarter ended Dec. 31, 2025',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/delta-q4-fy25.png',
    roundingTolerance: 0.15,
    revenue: {
      total: 16.0,
      notes: ['+3% Y/Y'],
      items: [
        { id: 'passenger', label: 'Passenger', value: 12.9, notes: ['+1% Y/Y'] },
        { id: 'cargo', label: 'Cargo', value: 0.2, notes: ['(1)% Y/Y'] },
        { id: 'other_revenue', label: 'Other', value: 2.8, notes: ['+14% Y/Y'] },
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
        total: 14.5,
        items: [
          { id: 'salaries_benefits', label: 'Salaries & benefits', value: 4.6 },
          { id: 'aircraft_fuel', label: 'Aircraft fuel', value: 2.4 },
          { id: 'ancillary_business', label: 'Ancillary business', value: 1.6 },
          { id: 'contracted_services', label: 'Contracted services', value: 1.2 },
          { id: 'landing_fees', label: 'Landing fees', value: 0.9 },
          { id: 'maintenance', label: 'Maintenance', value: 0.6 },
          { id: 'depreciation_amortization', label: 'D&A', value: 0.6 },
          { id: 'regional_carrier', label: 'Regional carrier', value: 0.5 },
          { id: 'other_operating', label: 'Other', value: 2.1 },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.3 },
    },
    otherIncome: {
      total: 0.2,
      items: [{ id: 'other_income', label: 'Other', value: 0.2 }],
    },
    otherExpenses: {
      total: 0.2,
      items: [{ id: 'interest', label: 'Interest', value: 0.2 }],
    },
    profit: {
      gross: {
        id: 'gross_profit',
        label: 'Gross profit (not separately presented)',
        value: 16.0,
        notes: ['Bookkeeping value for SSOT parity; the source infographic has no gross-profit stage.'],
      },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 1.5, notes: ['9% margin', '(2pp) Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 1.2, notes: ['8% margin', '+2pp Y/Y'] },
    },
    sources: [
      {
        name: 'Delta Air Lines Announces December Quarter and Full Year 2025 Financial Results',
        url: 'https://ir.delta.com/news/news-details/2026/Delta-Air-Lines-Announces-December-Quarter-and-Full-Year-2025-Financial-Results/default.aspx',
      },
    ],
    i18n: {
      zh: {
        period: '2025 财年第四季度',
        periodNote: '截至 2025 年 12 月 31 日的季度',
        revenue: {
          notes: ['同比 +3%'],
          items: [
            { id: 'passenger', label: '客运', notes: ['同比 +1%'] },
            { id: 'cargo', label: '货运', notes: ['同比 (1)%'] },
            { id: 'other_revenue', label: '其他', notes: ['同比 +14%'] },
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
              { id: 'ancillary_business', label: '辅助业务' },
              { id: 'contracted_services', label: '合同服务' },
              { id: 'landing_fees', label: '着陆费' },
              { id: 'maintenance', label: '维护' },
              { id: 'depreciation_amortization', label: '折旧与摊销' },
              { id: 'regional_carrier', label: '支线承运人' },
              { id: 'other_operating', label: '其他' },
            ],
          },
          tax: { label: '税费' },
        },
        otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
        otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
        profit: {
          gross: { label: '毛利润（未单列）', notes: ['用于 SSOT 对齐的账面值；来源信息图未展示毛利润阶段。'] },
          operating: { label: '营业利润', notes: ['利润率 9%', '同比 (2 个百分点)'] },
          net: { label: '净利润', notes: ['利润率 8%', '同比 +2 个百分点'] },
        },
      },
    },
    }
  );
})(window);
