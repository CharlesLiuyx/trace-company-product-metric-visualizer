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
      key: 'lvmh-fy25',
      company: 'LVMH',
      period: 'FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '€',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/lvmh-fy25.png',
      roundingTolerance: 0.2,
      revenue: {
        total: 80.8,
        notes: ['(5%) Y/Y'],
        items: [
          { id: 'wines_spirits', label: 'Wines & Spirits', value: 5.4, notes: ['(9%) Y/Y'] },
          { id: 'fashion_leather_goods', label: 'Fashion & Leather Goods', value: 37.8, notes: ['(8%) Y/Y'] },
          { id: 'perfumes_cosmetics', label: 'Perfumes & Cosmetics', value: 8.2, notes: ['(3%) Y/Y'] },
          { id: 'watches_jewelry', label: 'Watches & Jewelry', value: 10.5, notes: ['(1%) Y/Y'] },
          { id: 'selective_retailing', label: 'Selective retailing', value: 18.3, notes: ['+0% Y/Y'] },
          { id: 'other_activities_eliminations', label: 'Other activities and eliminations', value: 0.7 },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 27.3 },
        operatingExpenses: {
          total: 36.4,
          items: [
            { id: 'sales_marketing', label: 'Sales & Marketing', value: 29.9, notes: ['37% of revenue'] },
            { id: 'general_administrative', label: 'General & Administrative', value: 5.9, notes: ['7% of revenue'] },
            { id: 'other_opex', label: 'Other opex', value: 0.6 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 5.5 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.4,
        items: [{ id: 'other', label: 'Other', value: 0.4 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 53.5, notes: ['66% of revenue', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 17.1, notes: ['22% of revenue', '(1pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 11.2, notes: ['14% of revenue', '(1pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 (5%)'],
            items: [
              { id: 'wines_spirits', label: '葡萄酒与烈酒', notes: ['同比 (9%)'] },
              { id: 'fashion_leather_goods', label: '时装与皮具', notes: ['同比 (8%)'] },
              { id: 'perfumes_cosmetics', label: '香水与美妆', notes: ['同比 (3%)'] },
              { id: 'watches_jewelry', label: '腕表与珠宝', notes: ['同比 (1%)'] },
              { id: 'selective_retailing', label: '精选零售', notes: ['同比 +0%'] },
              { id: 'other_activities_eliminations', label: '其他业务及抵销' },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'sales_marketing', label: '销售与市场费用', notes: ['占收入 37%'] },
                { id: 'general_administrative', label: '一般及行政费用', notes: ['占收入 7%'] },
                { id: 'other_opex', label: '其他运营费用' },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [{ id: 'other', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['占收入 66%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['占收入 22%', '同比 (1 个百分点)'] },
            net: { label: '净利润', notes: ['占收入 14%', '同比 (1 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
