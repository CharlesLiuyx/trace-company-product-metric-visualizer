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
      key: 'figma-q1-fy26',
      company: 'Figma',
      period: 'Q1 FY26',
      periodNote: 'Quarter ended Mar. 31, 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/figma-q1-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 333,
        notes: ['+46% Y/Y'],
        items: [
          { id: 'united_states', label: 'United States', value: 155, notes: ['+44% Y/Y'] },
          { id: 'international', label: 'International', value: 178, notes: ['+48% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 69,
          notes: ['Gross profit plus cost of revenue sums to $334M because the source chart rounds visible values.'],
        },
        operatingExpenses: {
          total: 402,
          notes: ['Visible operating-expense line items sum to $403M because the source chart rounds values.'],
          items: [
            { id: 'rnd', label: 'Research & development', value: 173, notes: ['52% of revenue', '+21pp Y/Y'] },
            { id: 'sm', label: 'Sales & marketing', value: 126, notes: ['38% of revenue', '+7pp Y/Y'] },
            { id: 'ga', label: 'General & Admin', value: 104, notes: ['31% of revenue', '+18pp Y/Y'] },
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 265, notes: ['79% margin', '(12pp) Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -137, notes: ['(41%) margin', '(59pp) Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -137,
          notes: ['No separate net income or net loss line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月 31 日的季度',
          revenue: {
            notes: ['同比 +46%'],
            items: [
              { id: 'united_states', label: '美国', notes: ['同比 +44%'] },
              { id: 'international', label: '国际', notes: ['同比 +48%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              notes: ['毛利润加收入成本为 $334M，差异来自来源图可见数值四舍五入。'],
            },
            operatingExpenses: {
              notes: ['可见营业费用明细合计为 $403M，差异来自来源图数值四舍五入。'],
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 52%', '同比 +21 个百分点'] },
                { id: 'sm', label: '销售与营销', notes: ['占收入 38%', '同比 +7 个百分点'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 31%', '同比 +18 个百分点'] },
              ],
            },
            tax: {
              label: '税费',
              notes: ['来源图未显示单独的税费项目。'],
            },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 79%', '同比 (12 个百分点)'] },
            operating: { label: '营业亏损', notes: ['利润率 (41%)', '同比 (59 个百分点)'] },
            net: {
              label: '营业亏损',
              notes: ['来源图未单独显示净利润或净亏损项目。'],
            },
          },
        },
      },
    }
  );
})(window);
