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
      key: 'adyen-h2-fy25',
      company: 'Adyen',
      period: 'H2 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '€',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/adyen-h2-fy25.png',
      roundingTolerance: 2.1,
      notes: [
        'Net revenue bridge in the source: gross revenue €1,411M less cost from financial institutions €96M and cost of goods sold €51M, plus net interest €7M, equals €1,271M net revenue.',
        'The source rounds net profit to €582M; operating profit €627M plus other income €133M less tax €179M implies €581M before rounding.',
      ],
      revenue: {
        total: 1411,
        notes: ['+18% Y/Y'],
        items: [
          { id: 'settlement_fees', label: 'Settlement fees', value: 853, notes: ['+19% Y/Y'] },
          { id: 'processing_fees', label: 'Processing fees', value: 309, notes: ['+9% Y/Y'] },
          { id: 'sales_of_goods', label: 'Sales of goods', value: 54, notes: ['+24% Y/Y'] },
          { id: 'other_services', label: 'Other services', value: 195, notes: ['+29% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          label: 'Net revenue adjustments',
          value: 140,
          notes: ['Cost from financial institutions plus cost of goods sold, net of net interest.'],
          items: [
            { id: 'cost_from_financial_institutions', label: 'Cost from financial institutions', value: 96 },
            { id: 'cost_of_goods_sold', label: 'Cost of goods sold', value: 51 },
            { id: 'net_interest', label: 'Net interest', value: -7 },
          ],
        },
        operatingExpenses: {
          total: 644,
          items: [
            { id: 'wages_salaries', label: 'Wages & salaries', value: 329, notes: ['26% of net revenue', '(3pp) Y/Y'] },
            { id: 'other_opex', label: 'Other', value: 189 },
            { id: 'amortization_depreciation', label: 'Amortization & Depreciation', value: 75 },
            { id: 'social_securities_pension', label: 'Social securities and pension', value: 51 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 179 },
      },
      otherIncome: {
        total: 133,
        items: [{ id: 'other_income', label: 'Other', value: 133 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'net_revenue', label: 'Net revenue', value: 1271, notes: ['+17% Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 627, notes: ['49% of net revenue', '+2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 582, notes: ['46% of net revenue', '(2pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年下半年',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +18%'],
            items: [
              { id: 'settlement_fees', label: '结算费', notes: ['同比 +19%'] },
              { id: 'processing_fees', label: '处理费', notes: ['同比 +9%'] },
              { id: 'sales_of_goods', label: '商品销售', notes: ['同比 +24%'] },
              { id: 'other_services', label: '其他服务', notes: ['同比 +29%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '净收入调整项',
              notes: ['金融机构成本与商品销售成本，扣除净利息。'],
              items: [
                { id: 'cost_from_financial_institutions', label: '来自金融机构的成本' },
                { id: 'cost_of_goods_sold', label: '商品销售成本' },
                { id: 'net_interest', label: '净利息' },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'wages_salaries', label: '工资与薪金', notes: ['占净收入 26%', '同比 (3 个百分点)'] },
                { id: 'other_opex', label: '其他' },
                { id: 'amortization_depreciation', label: '摊销与折旧' },
                { id: 'social_securities_pension', label: '社会保障与养老金' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他' }],
          },
          profit: {
            gross: { label: '净收入', notes: ['同比 +17%'] },
            operating: { label: '营业利润', notes: ['占净收入 49%', '同比 +2 个百分点'] },
            net: { label: '净利润', notes: ['占净收入 46%', '同比 (2 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
