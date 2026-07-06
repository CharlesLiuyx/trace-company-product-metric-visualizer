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
      key: 'adidas-q4-fy25',
      company: 'Adidas',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '€',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/adidas-q4-fy25.png',
      roundingTolerance: 0.16,
      revenue: {
        total: 6.1,
        notes: ['+2% Y/Y', 'North America +5% Y/Y', 'Europe +6% Y/Y', 'China +15% Y/Y'],
        items: [
          { id: 'footwear', label: 'Footwear', value: 3.2, notes: ['(4%) Y/Y'] },
          { id: 'apparel', label: 'Apparel', value: 2.4, notes: ['+12% Y/Y'] },
          { id: 'accessories_gear', label: 'Accessories & Gear', value: 0.4, notes: ['(0%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 3.0 },
        operatingExpenses: {
          total: 3.0,
          notes: [
            'G&A and Marketing & POS line items sum to €2.9B because the source chart rounds to one decimal place.',
          ],
          items: [
            { id: 'ga', label: 'G&A', value: 2.1, notes: ['35% of revenue', '(2pp) Y/Y'] },
            { id: 'marketing_pos', label: 'Marketing & POS', value: 0.8, notes: ['14% of revenue', '+1pp Y/Y'] },
          ],
        },
        tax: { id: 'tax_other', label: 'Tax & other', value: 0.1 },
      },
      otherIncome: {
        total: 0.041,
        items: [{ id: 'other', label: 'Other', value: 0.041, notes: ['€41M'] }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 3.1, notes: ['51% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.2, notes: ['3% margin', '+2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.1, notes: ['1% margin', '+2pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +2%', '北美同比 +5%', '欧洲同比 +6%', '中国同比 +15%'],
            items: [
              { id: 'footwear', label: '鞋类', notes: ['同比 (4%)'] },
              { id: 'apparel', label: '服装', notes: ['同比 +12%'] },
              { id: 'accessories_gear', label: '配件与装备', notes: ['同比 (0%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              notes: ['由于来源图四舍五入，G&A 与营销及销售点项目合计为 €2.9B。'],
              items: [
                { id: 'ga', label: '管理费用', notes: ['占收入 35%', '同比 (2 个百分点)'] },
                { id: 'marketing_pos', label: '营销与销售点', notes: ['占收入 14%', '同比 +1 个百分点'] },
              ],
            },
            tax: { label: '税费及其他' },
          },
          otherIncome: {
            items: [{ id: 'other', label: '其他', notes: ['€41M'] }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 51%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 3%', '同比 +2 个百分点'] },
            net: { label: '净利润', notes: ['利润率 1%', '同比 +2 个百分点'] },
          },
        },
      },
    }
  );
})(window);
