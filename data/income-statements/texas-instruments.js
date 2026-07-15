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
      key: 'texas-instruments-q4-fy25',
      company: 'Texas Instruments',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/texas-instruments-q4-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 4.423,
        notes: ['+10% Y/Y'],
        items: [
          { id: 'analog', label: 'Analog', value: 3.615, notes: ['+14% Y/Y'] },
          { id: 'embedded_processing', label: 'Embedded Processing', value: 0.662, notes: ['+8% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 0.146, notes: ['(34%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 1.951 },
        operatingExpenses: {
          total: 0.999,
          items: [
            { id: 'rnd', label: 'R&D', value: 0.521 },
            { id: 'sga', label: 'SG&A', value: 0.446 },
            { id: 'restructuring', label: 'Restructuring', value: 0.032 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.209 },
      },
      otherIncome: {
        total: 0.04,
        items: [{ id: 'other_income', label: 'Other', value: 0.04 }],
      },
      otherExpenses: {
        total: 0.141,
        items: [{ id: 'financial', label: 'Financial', value: 0.141, notes: ['Interest and debt expense.'] }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 2.472, notes: ['56% margin', '(2pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.473, notes: ['33% margin', '(1pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.163, notes: ['26% margin', '(4pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +10%'],
            items: [
              { id: 'analog', label: '模拟', notes: ['同比 +14%'] },
              { id: 'embedded_processing', label: '嵌入式处理', notes: ['同比 +8%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 (34%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发' },
                { id: 'sga', label: '销售、一般及行政费用' },
                { id: 'restructuring', label: '重组' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
          otherExpenses: { items: [{ id: 'financial', label: '财务费用', notes: ['利息及债务费用。'] }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 56%', '同比 (2 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 33%', '同比 (1 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 26%', '同比 (4 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
