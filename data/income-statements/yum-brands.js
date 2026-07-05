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
      key: 'yum-brands-q1-fy26',
      company: 'Yum! Brands',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/yum-brands-q1-fy26.png',
      roundingTolerance: 0.2,
      revenue: {
        total: 2.1,
        notes: [
          '+15% Y/Y',
          'Source chart attributes revenue by brand sales; rounded brand items sum to $2.1B.',
        ],
        items: [
          { id: 'kfc', label: 'KFC', value: 0.9, notes: ['+14% Y/Y'] },
          { id: 'taco_bell', label: 'Taco Bell', value: 0.8, notes: ['+21% Y/Y'] },
          { id: 'pizza_hut', label: 'Pizza Hut', value: 0.3, notes: ['+10% Y/Y'] },
          { id: 'habit', label: 'The Habit Burger Grill', value: 0.1, notes: ['+2% Y/Y'] },
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
          total: 1.5,
          notes: ['Source chart operating-expense detail sums to $1.4B due to rounding.'],
          items: [
            { id: 'company_restaurants', label: 'Company restaurants', value: 0.7 },
            { id: 'franchise_expenses', label: 'Franchise expenses', value: 0.4 },
            { id: 'ga', label: 'G&A', value: 0.3 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.1 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.1,
        items: [{ id: 'other', label: 'Other', value: 0.1 }],
      },
      profit: {
        gross: {
          id: 'gross_profit',
          label: 'Gross profit',
          value: 2.1,
          notes: ['Bookkeeping value for SSOT parity; gross profit is not shown in the source chart.'],
        },
        operating: {
          id: 'operating_profit',
          label: 'Operating profit',
          value: 0.6,
          notes: ['31% margin', '+1pp Y/Y', 'Source chart also shows $46M other operating income feeding operating profit.'],
        },
        net: { id: 'net_profit', label: 'Net profit', value: 0.4, notes: ['21% margin', '+7pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: [
              '同比 +15%',
              '来源图表按品牌销售额归因收入；四舍五入后的品牌项目合计为 $2.1B。',
            ],
            items: [
              { id: 'kfc', label: 'KFC', notes: ['同比 +14%'] },
              { id: 'taco_bell', label: '塔可钟', notes: ['同比 +21%'] },
              { id: 'pizza_hut', label: '必胜客', notes: ['同比 +10%'] },
              { id: 'habit', label: 'Habit 汉堡烤吧', notes: ['同比 +2%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              notes: ['来源图表未拆分收入成本或毛利润。'],
            },
            operatingExpenses: {
              notes: ['来源图表运营费用明细因四舍五入合计为 $1.4B。'],
              items: [
                { id: 'company_restaurants', label: '公司自营餐厅' },
                { id: 'franchise_expenses', label: '特许经营费用' },
                { id: 'ga', label: '管理费用' },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [{ id: 'other', label: '其他' }],
          },
          profit: {
            gross: {
              label: '毛利润',
              notes: ['用于 SSOT 对齐的账面值；来源图表未显示毛利润。'],
            },
            operating: {
              label: '营业利润',
              notes: ['利润率 31%', '同比 +1 个百分点', '来源图表还显示 $46M 其他营业收入流入营业利润。'],
            },
            net: { label: '净利润', notes: ['利润率 21%', '同比 +7 个百分点'] },
          },
        },
      },
    }
  );
})(window);
