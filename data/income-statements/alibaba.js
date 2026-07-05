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
      key: 'alibaba-q4-fy26',
      company: 'Alibaba',
      period: 'Q4 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/alibaba-q4-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 35.3,
        notes: ['+3% Y/Y'],
        items: [
          { id: 'china_ecommerce', label: 'China E-commerce', value: 17.7, notes: ['+6% Y/Y', '20% adjusted margin'] },
          {
            id: 'international_digital_commerce',
            label: 'International Digital Commerce',
            value: 5.1,
            notes: ['+6% Y/Y', '(0%) adjusted margin'],
          },
          { id: 'cloud', label: 'Cloud', value: 6.0, notes: ['+38% Y/Y', '9% adjusted margin'] },
          { id: 'all_others', label: 'All others', value: 9.6, notes: ['(21%) Y/Y', '(33%) adjusted margin'] },
          { id: 'intersegment_eliminations', label: 'Inter-segment Eliminations', value: -3.2 },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 23.1 },
        operatingExpenses: {
          total: 12.3,
          items: [
            { id: 'sm', label: 'Sales & marketing', value: 7.7, notes: ['22% of revenue', '+7pp Y/Y'] },
            { id: 'product_development', label: 'Product development', value: 2.7, notes: ['8% of revenue'] },
            { id: 'ga', label: 'General & Administrative', value: 1.4, notes: ['4% of revenue'] },
            { id: 'amortization_impairment', label: 'Amortization & impairment', value: 0.4, notes: ['1% of revenue'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0 },
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 12.2, notes: ['35% margin', '(7pp) Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -0.1, notes: ['(0%) margin', '+12pp Y/Y'] },
        net: { id: 'operating_loss', label: 'Operating loss', value: -0.1 },
      },
      i18n: {
        zh: {
          period: '2026 财年第四季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +3%'],
            items: [
              { id: 'china_ecommerce', label: '中国电子商务', notes: ['同比 +6%', '调整后利润率 20%'] },
              { id: 'international_digital_commerce', label: '国际数字商业', notes: ['同比 +6%', '调整后利润率 (0%)'] },
              { id: 'cloud', label: '云', notes: ['同比 +38%', '调整后利润率 9%'] },
              { id: 'all_others', label: '所有其他业务', notes: ['同比 (21%)', '调整后利润率 (33%)'] },
              { id: 'intersegment_eliminations', label: '分部间抵销' },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 22%', '同比 +7 个百分点'] },
                { id: 'product_development', label: '产品开发', notes: ['占收入 8%'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 4%'] },
                { id: 'amortization_impairment', label: '摊销与减值', notes: ['占收入 1%'] },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 35%', '同比 (7 个百分点)'] },
            operating: { label: '营业亏损', notes: ['利润率 (0%)', '同比 +12 个百分点'] },
            net: { label: '营业亏损' },
          },
        },
      },
    }
  );
})(window);
