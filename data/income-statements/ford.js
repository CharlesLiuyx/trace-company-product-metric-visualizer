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
      key: 'ford-fy25',
      company: 'Ford',
      period: 'FY25',
      periodNote: 'Year ended Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/ford-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 187.3,
        notes: ['+0% Y/Y'],
        items: [
          { id: 'ford_blue', label: 'Ford Blue', value: 101.0, notes: ['(1%) Y/Y', 'Internal combustion'] },
          { id: 'model_e', label: 'Ford Model e', value: 6.7, notes: ['+73% Y/Y', 'Electric Vehicles'] },
          { id: 'ford_pro', label: 'Ford Pro', value: 66.3, notes: ['(1%) Y/Y', 'Commercial division'] },
          { id: 'ford_credit', label: 'Ford Credit', value: 13.3, notes: ['+8% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 174.5 },
        operatingExpenses: {
          total: 22.0,
          notes: ['Source chart rounds the two displayed expense items to $21.9B.'],
          items: [
            { id: 'sga', label: 'SG&A', value: 11.1 },
            { id: 'ford_credit_expenses', label: 'Ford Credit expenses', value: 10.8 },
          ],
        },
        tax: { label: 'Tax', value: 0, notes: ['No separate tax flow is displayed in the source chart.'] },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 12.8, notes: ['7% margin', '(8pp) Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -9.2, notes: ['(5%) margin', '(8pp) Y/Y'] },
        // The source visual ends at operating loss. Treat that terminal result
        // as the statement's net result for the verifier's conserved path.
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -9.2,
          notes: ['The source image ends at operating loss and does not display a separate net result.'],
        },
      },
      i18n: {
        zh: {
          period: '2025 财年',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +0%'],
            items: [
              { id: 'ford_blue', label: 'Ford Blue 燃油车业务', notes: ['同比 (1%)', '内燃机业务'] },
              { id: 'model_e', label: 'Ford Model e 电动车业务', notes: ['同比 +73%', '电动汽车'] },
              { id: 'ford_pro', label: 'Ford Pro 商用车业务', notes: ['同比 (1%)', '商用车业务'] },
              { id: 'ford_credit', label: '福特信贷', notes: ['同比 +8%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              notes: ['来源图将两个显示费用项取整为 $21.9B。'],
              items: [
                { id: 'sga', label: '销售、一般及管理费用' },
                { id: 'ford_credit_expenses', label: '福特信贷费用' },
              ],
            },
            tax: { label: '税费', notes: ['来源图未单独显示税费流。'] },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 7%', '同比 (8 个百分点)'] },
            operating: { label: '营业亏损', notes: ['利润率 (5%)', '同比 (8 个百分点)'] },
            net: { label: '营业亏损', notes: ['来源图止于营业亏损，未显示单独的净利润。'] },
          },
        },
      },
    }
  );
})(window);
