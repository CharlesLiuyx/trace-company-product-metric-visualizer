/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/<dataset-key>.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'mondelez-q4-fy25',
    company: 'Mondelēz International',
    period: 'Q4 FY25',
    periodNote: 'Ending Dec. 2025',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/mondelez-q4-fy25.png',
    roundingTolerance: 0.15,
    revenue: {
      total: 10.5,
      notes: ['+9% Y/Y', 'Segment values sum to $10.6B because the source rounds each displayed item.'],
      items: [
        { id: 'biscuits_baked_snacks', label: 'Biscuits & Baked Snacks', value: 4.7, notes: ['+3% Y/Y'] },
        { id: 'chocolate', label: 'Chocolate', value: 3.8, notes: ['+17% Y/Y'] },
        { id: 'gum_candy', label: 'Gum & Candy', value: 1.1, notes: ['+8% Y/Y'] },
        { id: 'beverages', label: 'Beverages', value: 0.3, notes: ['+10% Y/Y'] },
        { id: 'cheese_grocery', label: 'Cheese & Grocery', value: 0.7, notes: ['+13% Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 7.5 },
      operatingExpenses: {
        total: 2.0,
        items: [
          { id: 'sga', label: 'SG&A', value: 1.9 },
          { id: 'other_operating_expenses', label: 'Other', value: 0.1 },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.3 },
    },
    otherIncome: {
      total: 0.032,
      items: [{ id: 'other_income', label: 'Other', value: 0.032 }],
    },
    otherExpenses: {
      total: 0.1,
      items: [{ id: 'interest', label: 'Interest', value: 0.1 }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 3.0, notes: ['28% margin', '(10pp) Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 1.0, notes: ['9% margin', '(8pp) Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 0.7, notes: ['6% margin', '(12pp) Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2025 财年第四季度',
        periodNote: '截至 2025 年 12 月',
        revenue: {
          notes: ['同比 +9%', '由于来源图对各业务线金额四舍五入，分项合计为 $10.6B。'],
          items: [
            { id: 'biscuits_baked_snacks', label: '饼干与烘焙零食', notes: ['同比 +3%'] },
            { id: 'chocolate', label: '巧克力', notes: ['同比 +17%'] },
            { id: 'gum_candy', label: '口香糖与糖果', notes: ['同比 +8%'] },
            { id: 'beverages', label: '饮料', notes: ['同比 +10%'] },
            { id: 'cheese_grocery', label: '奶酪与食品杂货', notes: ['同比 +13%'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '销售成本' },
          operatingExpenses: { items: [{ id: 'sga', label: '销售、一般及管理费用' }, { id: 'other_operating_expenses', label: '其他' }] },
          tax: { label: '税费' },
        },
        otherIncome: { items: [{ id: 'other_income', label: '其他收入' }] },
        otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 28%', '同比 (10 个百分点)'] },
          operating: { label: '营业利润', notes: ['利润率 9%', '同比 (8 个百分点)'] },
          net: { label: '净利润', notes: ['利润率 6%', '同比 (12 个百分点)'] },
        },
      },
    },
  });
})(window);
