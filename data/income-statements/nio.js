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
      key: 'nio-q3-fy25',
      company: 'NIO',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/nio-q3-fy25.png',
      roundingTolerance: 0.11,
      revenue: {
        total: 3.1,
        notes: ['+17% Y/Y'],
        items: [
          {
            id: 'vehicle_sales',
            label: 'Vehicle sales',
            value: 2.7,
            notes: ['+15% Y/Y', '15% gross margin'],
          },
          {
            id: 'other_sales',
            label: 'Other sales',
            value: 0.4,
            notes: ['+31% Y/Y', '8% gross margin'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 2.6 },
        operatingExpenses: {
          total: 0.9,
          notes: ['Gross R&D plus SG&A before the separately charted other operating income.'],
          items: [
            { id: 'sga', label: 'SG&A', value: 0.6, notes: ['19% of revenue', '(3pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 0.3, notes: ['11% of revenue', '(7pp) Y/Y'] },
          ],
        },
        tax: { label: 'Tax', value: 0 },
      },
      operatingOtherIncome: {
        total: 0.004,
        items: [
          {
            id: 'other',
            label: 'Other',
            value: 0.004,
            notes: ['Other operating income shown as $4M in the source chart.'],
          },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 0.4, notes: ['14% margin', '+3pp Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -0.5, notes: ['(16%) margin', '+12pp Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -0.5,
          notes: ['No separate net loss line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          revenue: {
            notes: ['同比 +17%'],
            items: [
              { id: 'vehicle_sales', label: '汽车销售', notes: ['同比 +15%', '毛利率 15%'] },
              { id: 'other_sales', label: '其他销售', notes: ['同比 +31%', '毛利率 8%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['研发与销售、一般及行政费用的总额，未扣除图中单列的其他经营收入。'],
              items: [
                { id: 'sga', label: '销售、一般及行政费用', notes: ['占收入 19%', '同比 (3 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 11%', '同比 (7 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          operatingOtherIncome: {
            items: [
              { id: 'other', label: '其他', notes: ['来源图显示为 $4M 的其他经营收入。'] },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 14%', '同比 +3 个百分点'] },
            operating: { label: '营业亏损', notes: ['利润率 (16%)', '同比 +12 个百分点'] },
            net: { label: '营业亏损', notes: ['来源图未单独显示净亏损。'] },
          },
        },
      },
    },
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
