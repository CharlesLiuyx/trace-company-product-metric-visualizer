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
      key: 'hermes-fy25',
      company: 'Hermès',
      period: 'FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '€',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/hermes-fy25.png',
      roundingTolerance: 0.16,
      revenue: {
        total: 16.0,
        notes: ['+5% Y/Y'],
        items: [
          { id: 'leather_goods_saddlery', label: 'Leather Goods & Saddlery', value: 7.1, notes: ['+9% Y/Y'] },
          { id: 'ready_to_wear_accessories', label: 'Ready-to-wear & Accessories', value: 4.5, notes: ['+3% Y/Y'] },
          { id: 'silk_textiles', label: 'Silk & Textiles', value: 1.0, notes: ['+1% Y/Y'] },
          { id: 'other_hermes_sectors', label: 'Other Hermes sectors', value: 2.1, notes: ['+8% Y/Y'] },
          { id: 'perfume_beauty', label: 'Perfume & Beauty', value: 0.5, notes: ['(9%) Y/Y'] },
          { id: 'watches', label: 'Watches', value: 0.5, notes: ['(5%) Y/Y'] },
          { id: 'other_products', label: 'Other products', value: 0.3, notes: ['+4% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 4.6 },
        operatingExpenses: {
          total: 4.8,
          items: [
            { id: 'sales_administrative', label: 'Sales & Administrative', value: 3.7, notes: ['23% of revenue'] },
            { id: 'other_opex', label: 'Other opex', value: 1.1, notes: ['7% of revenue'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 2.3 },
      },
      otherIncome: {
        total: 0.3,
        items: [{ id: 'other', label: 'Other', value: 0.3, notes: ['Source image displays $0.3B despite its euro unit caption.'] }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 11.4, notes: ['71% of revenue', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 6.6, notes: ['41% of revenue', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 4.6, notes: ['28% of revenue', '(2pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +5%'],
            items: [
              { id: 'leather_goods_saddlery', label: '皮具与马具', notes: ['同比 +9%'] },
              { id: 'ready_to_wear_accessories', label: '成衣与配饰', notes: ['同比 +3%'] },
              { id: 'silk_textiles', label: '丝绸与纺织品', notes: ['同比 +1%'] },
              { id: 'other_hermes_sectors', label: '其他爱马仕业务', notes: ['同比 +8%'] },
              { id: 'perfume_beauty', label: '香水与美妆', notes: ['同比 (9%)'] },
              { id: 'watches', label: '腕表', notes: ['同比 (5%)'] },
              { id: 'other_products', label: '其他产品', notes: ['同比 +4%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'sales_administrative', label: '销售及管理费用', notes: ['占收入 23%'] },
                { id: 'other_opex', label: '其他运营费用', notes: ['占收入 7%'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other', label: '其他', notes: ['源图金额显示为 $0.3B，但图表单位为欧元。'] }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['占收入 71%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['占收入 41%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['占收入 28%', '同比 (2 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
