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
      key: 'rbi-q4-fy25',
      company: 'Restaurant Brands International',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/rbi-q4-fy25.png',
      roundingTolerance: 0.2,
      revenue: {
        total: 2.5,
        notes: [
          '+7% Y/Y',
          'Source chart attributes revenue by brand segment; rounded segment items sum to $2.6B.',
        ],
        items: [
          { id: 'tim_hortons', label: 'Tim Hortons', value: 1.1, notes: ['+11% Y/Y'] },
          { id: 'burger_king', label: 'Burger King', value: 0.4, notes: ['+2% Y/Y'] },
          { id: 'popeyes', label: 'Popeyes', value: 0.2, notes: ['(2%) Y/Y'] },
          { id: 'firehouse_subs', label: 'Firehouse Subs', value: 0.1, notes: ['+3% Y/Y'] },
          { id: 'international', label: 'International', value: 0.3, notes: ['+11% Y/Y'] },
          { id: 'restaurant_holdings', label: 'Restaurant Holdings', value: 0.5, notes: ['+8% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 0,
          notes: ['The source chart does not break out cost of revenue or gross profit.'],
        },
        operatingExpenses: {
          total: 1.8,
          notes: ['Source chart splits revenue directly into operating profit and operating expenses.'],
          items: [
            { id: 'supply_chain_costs', label: 'Supply chain costs', value: 0.7 },
            { id: 'company_restaurants', label: 'Company restaurants', value: 0.5 },
            { id: 'franchise_expenses', label: 'Franchise expenses', value: 0.5 },
            { id: 'ga', label: 'G&A', value: 0.2 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.2 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 0.1,
        items: [{ id: 'other', label: 'Other', value: 0.1 }],
      },
      profit: {
        gross: {
          id: 'gross_profit',
          label: 'Gross profit',
          value: 2.5,
          notes: ['Bookkeeping value for SSOT parity; gross profit is not shown in the source chart.'],
        },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.6, notes: ['25% margin', '(2pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.3, notes: ['11% margin', '(5pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +7%', '来源图表按品牌分部归因收入；四舍五入后的分部项目合计为 $2.6B。'],
            items: [
              { id: 'tim_hortons', label: 'Tim Hortons', notes: ['同比 +11%'] },
              { id: 'burger_king', label: '汉堡王', notes: ['同比 +2%'] },
              { id: 'popeyes', label: 'Popeyes', notes: ['同比 -2%'] },
              { id: 'firehouse_subs', label: 'Firehouse Subs', notes: ['同比 +3%'] },
              { id: 'international', label: '国际', notes: ['同比 +11%'] },
              { id: 'restaurant_holdings', label: '餐厅控股', notes: ['同比 +8%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本', notes: ['来源图表未拆分收入成本或毛利润。'] },
            operatingExpenses: {
              notes: ['来源图表将收入直接拆分为营业利润和运营费用。'],
              items: [
                { id: 'supply_chain_costs', label: '供应链成本' },
                { id: 'company_restaurants', label: '公司自营餐厅' },
                { id: 'franchise_expenses', label: '特许经营费用' },
                { id: 'ga', label: '管理费用' },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'other', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['用于 SSOT 对齐的账面值；来源图表未显示毛利润。'] },
            operating: { label: '营业利润', notes: ['利润率 25%', '同比 -2 个百分点'] },
            net: { label: '净利润', notes: ['利润率 11%', '同比 -5 个百分点'] },
          },
        },
      },
    },
    {
      key: 'rbi-q1-fy26',
      company: 'Restaurant Brands International',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/rbi-q1-fy26.png',
      roundingTolerance: 0.2,
      revenue: {
        total: 2.3,
        notes: [
          '+7% Y/Y',
          'Source chart attributes revenue by brand segment; rounded segment items sum to $2.4B.',
        ],
        items: [
          { id: 'tim_hortons', label: 'Tim Hortons', value: 1.0, notes: ['+10% Y/Y'] },
          { id: 'burger_king', label: 'Burger King', value: 0.4, notes: ['+3% Y/Y'] },
          { id: 'popeyes', label: 'Popeyes', value: 0.2, notes: ['(2%) Y/Y'] },
          { id: 'firehouse_subs', label: 'Firehouse Subs', value: 0.1, notes: ['+11% Y/Y'] },
          { id: 'international', label: 'International', value: 0.3, notes: ['+17% Y/Y'] },
          { id: 'restaurant_holdings', label: 'Restaurant Holdings', value: 0.4, notes: ['+4% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 0,
          notes: ['The source chart does not break out cost of revenue or gross profit.'],
        },
        operatingExpenses: {
          total: 1.8,
          notes: ['Source chart splits revenue directly into operating profit and operating expenses.'],
          items: [
            { id: 'supply_chain_costs', label: 'Supply chain costs', value: 0.6 },
            { id: 'company_restaurants', label: 'Company restaurants', value: 0.5 },
            { id: 'franchise_expenses', label: 'Franchise expenses', value: 0.5 },
            { id: 'ga', label: 'G&A', value: 0.2 },
          ],
        },
        tax: { id: 'tax_other', label: 'Tax & other', value: 0.2 },
      },
      otherIncome: {
        total: 0.023,
        items: [{ id: 'other_income', label: 'Other income', value: 0.023 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: {
          id: 'gross_profit',
          label: 'Gross profit',
          value: 2.3,
          notes: ['Bookkeeping value for SSOT parity; gross profit is not shown in the source chart.'],
        },
        operating: {
          id: 'operating_profit',
          label: 'Operating profit',
          value: 0.6,
          notes: [
            '27% margin',
            '+6pp Y/Y',
            'Rounded operating-expense items sum to $1.8B while revenue less operating expenses rounds to $0.6B.',
          ],
        },
        net: { id: 'net_profit', label: 'Net profit', value: 0.4, notes: ['20% margin', '+9pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: [
              '同比 +7%',
              '来源图表按品牌分部归因收入；四舍五入后的分部项目合计为 $2.4B。',
            ],
            items: [
              { id: 'tim_hortons', label: 'Tim Hortons', notes: ['同比 +10%'] },
              { id: 'burger_king', label: '汉堡王', notes: ['同比 +3%'] },
              { id: 'popeyes', label: 'Popeyes', notes: ['同比 -2%'] },
              { id: 'firehouse_subs', label: 'Firehouse Subs', notes: ['同比 +11%'] },
              { id: 'international', label: '国际', notes: ['同比 +17%'] },
              { id: 'restaurant_holdings', label: '餐厅控股', notes: ['同比 +4%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              notes: ['来源图表未拆分收入成本或毛利润。'],
            },
            operatingExpenses: {
              notes: ['来源图表将收入直接拆分为营业利润和运营费用。'],
              items: [
                { id: 'supply_chain_costs', label: '供应链成本' },
                { id: 'company_restaurants', label: '公司自营餐厅' },
                { id: 'franchise_expenses', label: '特许经营费用' },
                { id: 'ga', label: '管理费用' },
              ],
            },
            tax: { label: '税费及其他' },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他收入' }],
          },
          profit: {
            gross: {
              label: '毛利润',
              notes: ['用于 SSOT 对齐的账面值；来源图表未显示毛利润。'],
            },
            operating: {
              label: '营业利润',
              notes: [
                '利润率 27%',
                '同比 +6 个百分点',
                '四舍五入后的运营费用项目合计为 $1.8B，而收入减去运营费用四舍五入为 $0.6B。',
              ],
            },
            net: { label: '净利润', notes: ['利润率 20%', '同比 +9 个百分点'] },
          },
        },
      },
    }
  );
})(window);
