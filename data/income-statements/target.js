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
      key: 'target-q1-fy27',
      company: 'Target',
      period: 'Q1 FY27',
      periodNote: 'Ending May 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/target-q1-fy27.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 25.4,
        notes: ['+7% Y/Y'],
        items: [
          {
            id: 'merchandise_sales',
            label: 'Merchandise sales',
            value: 24.9,
            children: [
              { id: 'apparel_accessories', label: 'Apparel & accessories', value: 3.8, notes: ['+4% Y/Y'] },
              { id: 'beauty', label: 'Beauty', value: 3.4, notes: ['+10% Y/Y'] },
              { id: 'food_beverage', label: 'Food & beverage', value: 6.3, notes: ['+6% Y/Y'] },
              { id: 'hardlines', label: 'Hardlines', value: 3.5, notes: ['+15% Y/Y'] },
              { id: 'home_furnishing', label: 'Home furnishing', value: 3.2, notes: ['+1% Y/Y'] },
              { id: 'household_essentials', label: 'Household essentials', value: 4.6, notes: ['+5% Y/Y'] },
              { id: 'other_merchandise', label: 'Other', value: 0.1, notes: ['(88%) Y/Y'] },
            ],
          },
          { id: 'advertising', label: 'Advertising', value: 0.2, notes: ['+51% Y/Y'] },
          { id: 'credit_card', label: 'Credit card', value: 0.1, notes: ['(8%) Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 0.2, notes: ['+26% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 18.1 },
        operatingExpenses: {
          total: 6.2,
          items: [
            { id: 'sga', label: 'Sales General & admin', value: 5.6 },
            { id: 'depreciation_amortization', label: 'Depreciation & Amortization', value: 0.7 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.3 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 0.1,
        items: [{ id: 'interest', label: 'Interest', value: 0.1 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 7.4, notes: ['29% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.1, notes: ['4% margin', '(2pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.8, notes: ['3% margin', '(1pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2027 财年第一季度',
          periodNote: '截至 2026 年 5 月',
          revenue: {
            notes: ['同比 +7%'],
            items: [
              {
                id: 'merchandise_sales',
                label: '商品销售',
                children: [
                  { id: 'apparel_accessories', label: '服装及配饰', notes: ['同比 +4%'] },
                  { id: 'beauty', label: '美妆', notes: ['同比 +10%'] },
                  { id: 'food_beverage', label: '食品与饮料', notes: ['同比 +6%'] },
                  { id: 'hardlines', label: '耐用消费品', notes: ['同比 +15%'] },
                  { id: 'home_furnishing', label: '家居用品', notes: ['同比 +1%'] },
                  { id: 'household_essentials', label: '家庭必需品', notes: ['同比 +5%'] },
                  { id: 'other_merchandise', label: '其他', notes: ['同比 (88%)'] },
                ],
              },
              { id: 'advertising', label: '广告', notes: ['同比 +51%'] },
              { id: 'credit_card', label: '信用卡', notes: ['同比 (8%)'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 +26%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售、一般及行政费用' },
                { id: 'depreciation_amortization', label: '折旧及摊销' },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 29%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 4%', '同比 (2 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 3%', '同比 (1 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
