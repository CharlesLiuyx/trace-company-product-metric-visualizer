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
      key: 'global-e-q4-fy25',
      company: 'Global-e',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/global-e-q4-fy25.png',
      roundingTolerance: 3.1,
      revenue: {
        total: 337,
        notes: ['+28% Y/Y'],
        items: [
          { id: 'service_fees', label: 'Service fees', value: 161, notes: ['+37% Y/Y'] },
          { id: 'fulfillment', label: 'Fulfillment', value: 176, notes: ['+21% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 182 },
        operatingExpenses: {
          total: 92,
          items: [
            { id: 'sm', label: 'Sales & marketing', value: 44, notes: ['13% of revenue', '(14pp) Y/Y'] },
            { id: 'rnd', label: 'Research & development', value: 33, notes: ['10% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'General & administrative', value: 15, notes: ['4% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { label: 'Tax', value: 0, notes: ['No separate tax line is shown in the source chart.'] },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 3,
        items: [{ id: 'other', label: 'Other', value: 3 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 155, notes: ['46% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 63, notes: ['19% margin', '+17pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 62, notes: ['19% margin', '+18pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +28%'],
            items: [
              { label: '服务费', notes: ['同比 +37%'] },
              { label: '履约服务', notes: ['同比 +21%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { label: '销售与营销', notes: ['占收入 13%', '同比 (14 个百分点)'] },
                { label: '研发', notes: ['占收入 10%', '同比 (1 个百分点)'] },
                { label: '一般及行政', notes: ['占收入 4%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费', notes: ['源图未显示单独的税费项目。'] },
          },
          otherExpenses: {
            items: [{ label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 46%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 19%', '同比 +17 个百分点'] },
            net: { label: '净利润', notes: ['利润率 19%', '同比 +18 个百分点'] },
          },
        },
      },
    }
  );
})(window);
