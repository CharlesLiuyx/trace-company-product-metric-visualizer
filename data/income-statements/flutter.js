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
      key: 'flutter-q1-fy26',
      company: 'Flutter Entertainment',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/flutter-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 4.3,
        notes: ['+17% Y/Y', 'The source chart presents both geographic and product-category views of the same $4.3B revenue total.'],
        items: [
          { id: 'us', label: 'US', value: 1.8, notes: ['+6% Y/Y'] },
          { id: 'international', label: 'International', value: 2.5, notes: ['+27% Y/Y'] },
        ],
        alternateBreakdowns: [
          { dimension: 'product category', total: 4.3, items: [
            { id: 'sportsbook', label: 'Sportsbook', value: 2.2, notes: ['+10% Y/Y'] },
            { id: 'igaming', label: 'iGaming', value: 2.0, notes: ['+26% Y/Y'] },
            { id: 'other_revenue', label: 'Other', value: 0.1, notes: ['+3% Y/Y'] },
          ] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 2.5 },
        operatingExpenses: {
          total: 1.8,
          items: [
            { id: 'sm', label: 'S&M', value: 1.0, notes: ['22% of revenue', '(0pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.5, notes: ['12% of revenue', '+1pp Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 0.3, notes: ['6% of revenue', '+0pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.025 },
      },
      otherIncome: {
        total: 0.155,
        items: [{
          id: 'other_income',
          label: 'Other',
          value: 0.155,
          notes: ['Net other income: $311M other income (expense), net less $156M net interest expense in Flutter’s Q1 2026 Form 10-Q.'],
        }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1.8, notes: ['43% margin', '(4pp) Y/Y'] },
        operating: {
          id: 'operating_profit', label: 'Operating profit', value: 0.079,
          notes: ['1.8% margin', '(4.3pp) Y/Y', 'Exact amount is $79M in Flutter’s Q1 2026 Form 10-Q.'],
        },
        net: {
          id: 'net_profit', label: 'Net profit', value: 0.209,
          notes: ['4.9% margin', '(4.2pp) Y/Y', 'Exact amount is $209M in Flutter’s Q1 2026 Form 10-Q.'],
        },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +17%', '来源图用地域与产品类别两种口径展示同一笔 $4.3B 收入。'],
            items: [
              { id: 'us', label: '美国', notes: ['同比 +6%'] },
              { id: 'international', label: '国际业务', notes: ['同比 +27%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与营销', notes: ['占收入 22%', '同比 (0 个百分点)'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 12%', '同比 +1 个百分点'] },
                { id: 'rnd', label: '研发', notes: ['占收入 6%', '同比 +0 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他', notes: ['净其他收入：Q1 2026 Form 10-Q 的其他收入（费用）净额 $311M，减去净利息费用 $156M。'] }] },
          profit: {
            gross: { label: '毛利润', notes: ['毛利率 43%', '同比 (4 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 1.8%', '同比 (4.3 个百分点)', 'Q1 2026 Form 10-Q 的精确金额为 $79M。'] },
            net: { label: '净利润', notes: ['利润率 4.9%', '同比 -4.2pp', 'Q1 2026 Form 10-Q 的精确金额为 $209M。'] },
          },
        },
      },
    },
    {
      key: 'flutter-q4-fy25',
      company: 'Flutter Entertainment',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/flutter-q4-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 4.7,
        notes: ['+25% Y/Y', 'The source chart presents both geographic and product-category views of the same $4.7B revenue total.'],
        items: [
          { id: 'us', label: 'US', value: 2.1, notes: ['+33% Y/Y'] },
          { id: 'international', label: 'International', value: 2.6, notes: ['+19% Y/Y'] },
        ],
        alternateBreakdowns: [
          { dimension: 'product category', total: 4.7, items: [
            { id: 'sportsbook', label: 'Sportsbook', value: 2.6, notes: ['+21% Y/Y'] },
            { id: 'igaming', label: 'iGaming', value: 2.0, notes: ['+32% Y/Y'] },
            { id: 'other_revenue', label: 'Other', value: 0.1, notes: ['+3% Y/Y'] },
          ] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 2.6 },
        operatingExpenses: {
          total: 1.9,
          items: [
            { id: 'sm', label: 'S&M', value: 1.1, notes: ['23% of revenue', '+1pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.5, notes: ['11% of revenue', '(3pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 0.2, notes: ['5% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.1 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 0.1,
        items: [{ id: 'other_expense', label: 'Other', value: 0.1 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 2.1, notes: ['45% margin', '(4pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.3, notes: ['5% margin', '(2pp) Y/Y'] },
        net: {
          id: 'net_profit',
          label: 'Net profit',
          value: 0.01,
          notes: ['0% margin', '(4pp) Y/Y', 'Displayed rounded line items leave a $0.09B reconciliation difference to net profit.'],
        },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +25%', '来源图用地域与产品类别两种口径展示同一笔 $4.7B 收入。'],
            items: [
              { id: 'us', label: '美国', notes: ['同比 +33%'] },
              { id: 'international', label: '国际业务', notes: ['同比 +19%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与营销', notes: ['占收入 23%', '同比 +1 个百分点'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 11%', '同比 (3 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 5%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'other_expense', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['毛利率 45%', '同比 (4 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 5%', '同比 (2 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 0%', '同比 (4 个百分点)', '图中四舍五入的项目与净利润之间存在 $0.09B 的调节差额。'] },
          },
        },
      },
    }
  );
})(window);
