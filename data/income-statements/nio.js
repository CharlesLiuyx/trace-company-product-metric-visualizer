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
      key: 'nio-q1-fy26',
      company: 'NIO',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/nio-q1-fy26.png',
      roundingTolerance: 0.06,
      revenue: {
        total: 3.7015,
        notes: ['+112% Y/Y'],
        items: [
          {
            id: 'vehicle_sales',
            label: 'Vehicle sales',
            value: 3.302944,
            notes: ['+129% Y/Y', '19% gross margin'],
          },
          {
            id: 'other_sales',
            label: 'Other sales',
            value: 0.398556,
            notes: ['+31% Y/Y', '21% gross margin'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 2.9970 },
        operatingExpenses: {
          total: 0.780274,
          notes: ['Gross R&D plus SG&A before the separately charted other operating income.'],
          items: [
            { id: 'sga', label: 'SG&A', value: 0.507003, notes: ['14% of revenue', '(21pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 0.273271, notes: ['7% of revenue', '(19pp) Y/Y'] },
          ],
        },
        tax: { label: 'Tax', value: 0 },
      },
      operatingOtherIncome: {
        total: 0.031079,
        items: [
          {
            id: 'other',
            label: 'Other',
            value: 0.031079,
            notes: ['Other operating income, net; the reference graphic visibly truncates the official $31M amount to "$3M".'],
          },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 0.7044, notes: ['19% margin', '+11pp Y/Y'] },
        operating: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -0.044768,
          notes: ['(1%) margin', '+55pp Y/Y', 'The reference graphic visibly truncates the official $44.8M amount to "($4M)".'],
        },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -0.044768,
          notes: ['No separate net loss line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +112%'],
            items: [
              { id: 'vehicle_sales', label: '汽车销售', notes: ['同比 +129%', '毛利率 19%'] },
              { id: 'other_sales', label: '其他销售', notes: ['同比 +31%', '毛利率 21%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['研发与销售、一般及行政费用的总额，未扣除图中单列的其他经营收入。'],
              items: [
                { id: 'sga', label: '销售、一般及行政费用', notes: ['占收入 14%', '同比 (21 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 7%', '同比 (19 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          operatingOtherIncome: {
            items: [
              { id: 'other', label: '其他', notes: ['其他经营收入净额；参考图将官方 $31M 显示为“$3M”。'] },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 19%', '同比 +11 个百分点'] },
            operating: { label: '营业亏损', notes: ['利润率 (1%)', '同比 +55 个百分点', '参考图将官方 $44.8M 显示为“($4M)”。'] },
            net: { label: '营业亏损', notes: ['来源图未单独显示净亏损。'] },
          },
        },
      },
    }
  );
})(window);
