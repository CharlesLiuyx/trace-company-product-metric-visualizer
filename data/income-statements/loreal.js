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
      key: 'loreal-fy25',
      company: "L'Oréal",
      period: 'FY25',
      periodNote: 'Year ended Dec. 2025',
      currency: '€',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/loreal-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 44.1,
        notes: [
          '+1% Y/Y',
          'Source values are rounded: division revenue sums to €44.1B; the presented expense and below-operating-profit components may differ from their subtotals by €0.1B.',
        ],
        items: [
          { id: 'professional_products', label: 'Professional Products', value: 5.2, notes: ['+6% Y/Y'] },
          { id: 'consumer_products', label: 'Consumer Products', value: 16.1, notes: ['+1% Y/Y'] },
          { id: 'loreal_luxe', label: "L'Oréal Luxe", value: 15.6, notes: ['+0% Y/Y'] },
          { id: 'active_cosmetics', label: 'Active Cosmetics', value: 7.2, notes: ['+3% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 11.3 },
        operatingExpenses: {
          total: 23.8,
          items: [
            { id: 'advertising_promotion', label: 'Advertising & Promotion', value: 14.2, notes: ['32% of revenue'] },
            { id: 'sga', label: 'SG&A', value: 8.3, notes: ['19% of revenue'] },
            { id: 'research_innovation', label: 'Research & Innovation', value: 1.4, notes: ['3% of revenue'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 2.2 },
      },
      otherIncome: {
        total: 0.4,
        items: [{ id: 'sanofi_dividend', label: 'Sanofi Dividend', value: 0.4 }],
      },
      otherExpenses: {
        total: 0.2,
        items: [{ id: 'other', label: 'Other', value: 0.2 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 32.7, notes: ['74% of revenue', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 8.9, notes: ['20% of revenue', '+0pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 6.8, notes: ['15% of revenue', '+0pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年',
          periodNote: '截至 2025 年 12 月的年度',
          revenue: {
            notes: ['同比 +1%', '来源图金额经四舍五入：各事业部收入合计为 €44.1B；费用及营业利润以下的组成项与小计之间可能有 €0.1B 差异。'],
            items: [
              { id: 'professional_products', label: '专业产品事业部', notes: ['同比 +6%'] },
              { id: 'consumer_products', label: '大众化妆品事业部', notes: ['同比 +1%'] },
              { id: 'loreal_luxe', label: '欧莱雅高档化妆品', notes: ['同比 +0%'] },
              { id: 'active_cosmetics', label: '皮肤科学美容事业部', notes: ['同比 +3%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'advertising_promotion', label: '广告与推广', notes: ['占收入 32%'] },
                { id: 'sga', label: '销售、一般及管理费用', notes: ['占收入 19%'] },
                { id: 'research_innovation', label: '研发与创新', notes: ['占收入 3%'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'sanofi_dividend', label: '赛诺菲股息' }] },
          otherExpenses: { items: [{ id: 'other', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['占收入 74%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['占收入 20%', '同比 +0 个百分点'] },
            net: { label: '净利润', notes: ['占收入 15%', '同比 +0 个百分点'] },
          },
        },
      },
    }
  );
})(window);
