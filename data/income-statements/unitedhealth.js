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
      key: 'unitedhealth-q1-fy26',
      company: 'UnitedHealth Group',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/unitedhealth-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 111.7,
        notes: ['+2% Y/Y'],
        items: [
          { id: 'premiums', label: 'Premiums', value: 87.6, notes: ['+1% Y/Y'] },
          { id: 'products', label: 'Products', value: 13.3, notes: ['+2% Y/Y'] },
          { id: 'services', label: 'Services', value: 9.8, notes: ['+9% Y/Y'] },
          { id: 'investments_other', label: 'Investments & Other', value: 1.1, notes: ['+9% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 0,
          notes: ['Source chart does not show a separate gross profit or cost-of-revenue layer.'],
        },
        operatingExpenses: {
          total: 102.7,
          items: [
            { id: 'medical_costs', label: 'Medical costs', value: 73.5 },
            { id: 'operational_costs', label: 'Operational costs', value: 15.4 },
            { id: 'cost_of_product_sold', label: 'Cost of product sold', value: 12.8 },
            { id: 'da', label: 'D&A', value: 1.0 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 1.5 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 1.0,
        items: [{ id: 'other', label: 'Other', value: 1.0 }],
      },
      profit: {
        gross: {
          id: 'gross_profit',
          label: 'Gross profit',
          value: 111.7,
          notes: ['Source chart flows revenue directly to operating profit and operating expenses.'],
        },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 9.0, notes: ['8% margin', '(0pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 6.5, notes: ['6% margin', '(0pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +2%'],
            items: [
              { id: 'premiums', label: '保费', notes: ['同比 +1%'] },
              { id: 'products', label: '产品', notes: ['同比 +2%'] },
              { id: 'services', label: '服务', notes: ['同比 +9%'] },
              { id: 'investments_other', label: '投资及其他', notes: ['同比 +9%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'medical_costs', label: '医疗成本' },
                { id: 'operational_costs', label: '运营成本' },
                { id: 'cost_of_product_sold', label: '产品销售成本' },
                { id: 'da', label: '折旧摊销' },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [{ id: 'other', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['来源图将收入直接流向营业利润与营业费用。'] },
            operating: { label: '营业利润', notes: ['利润率 8%', '同比 (0 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 6%', '同比 (0 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
