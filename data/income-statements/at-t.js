/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/<dataset-key>.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'at-t-q4-fy25',
    company: 'AT&T',
    period: 'Q4 FY25',
    periodNote: 'Quarter ended Dec. 31, 2025',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/at-t-q4-fy25.png',
    roundingTolerance: 0.3,
    revenue: {
      total: 33.5,
      notes: ['+4% Y/Y'],
      items: [
        { id: 'mobility', label: 'Mobility', value: 24.4, notes: ['+5% Y/Y', '26% adjusted margin'] },
        { id: 'business_wireline', label: ['Business', 'Wireline'], value: 4.2, notes: ['(8%) Y/Y', '(4%) adjusted margin'] },
        { id: 'consumer_wireline', label: ['Consumer', 'Wireline'], value: 3.6, notes: ['+3% Y/Y', '15% adjusted margin'] },
        { id: 'mexico', label: 'Mexico', value: 1.3, notes: ['+21% Y/Y', '3% adjusted margin'] },
        { id: 'corporate', label: 'Corporate', value: 0.1, notes: ['(25%) Y/Y'] },
      ],
    },
    costs: {
      // The source rolls every cost directly into “Operating expenses”; it
      // does not show a separate cost-of-revenue/gross-profit bridge.
      costOfRevenue: { label: 'Cost of revenue', value: 0 },
      operatingExpenses: {
        total: 27.7,
        items: [
          { id: 'equipment', label: 'Equipment', value: 8.5 },
          { id: 'sga', label: 'SG&A', value: 7.4 },
          { id: 'other_cost_of_revenue', label: ['Other cost', 'of revenue'], value: 6.3 },
          { id: 'depreciation_amortization', label: ['Depreciation &', 'Amortization'], value: 5.1 },
          { id: 'restructuring', label: 'Restructuring', value: 0.3 },
        ],
      },
      tax: { id: 'tax', label: 'Income tax expense', value: 0.1 },
    },
    otherIncome: {
      total: 0.3,
      items: [{ id: 'other_income', label: 'Other income', value: 0.3 }],
    },
    otherExpenses: {
      total: 1.8,
      items: [{ id: 'interest', label: 'Interest expense', value: 1.8 }],
    },
    profit: {
      // This identity subtotal preserves the financial contract without
      // inventing an unshown gross-profit node in the Sankey view.
      gross: { label: 'Gross profit', value: 33.5 },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 5.8, notes: ['19% margin', '+2pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 4.2, notes: ['13% margin', '(0pp) Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2025 财年第四季度',
        periodNote: '截至 2025 年 12 月 31 日的季度',
        revenue: {
          notes: ['同比 +4%'],
          items: [
            { id: 'mobility', label: '移动通信', notes: ['同比 +5%', '调整后利润率 26%'] },
            { id: 'business_wireline', label: ['企业', '有线业务'], notes: ['同比 (8%)', '调整后利润率 (4%)'] },
            { id: 'consumer_wireline', label: ['消费者', '有线业务'], notes: ['同比 +3%', '调整后利润率 15%'] },
            { id: 'mexico', label: '墨西哥', notes: ['同比 +21%', '调整后利润率 3%'] },
            { id: 'corporate', label: '公司及其他', notes: ['同比 (25%)'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: {
            items: [
              { id: 'equipment', label: '设备' },
              { id: 'sga', label: '销售、一般及管理费用' },
              { id: 'other_cost_of_revenue', label: ['其他收入', '成本'] },
              { id: 'depreciation_amortization', label: ['折旧与', '摊销'] },
              { id: 'restructuring', label: '重组费用' },
            ],
          },
          tax: { label: '所得税费用' },
        },
        otherIncome: { items: [{ id: 'other_income', label: '其他收入' }] },
        otherExpenses: { items: [{ id: 'interest', label: '利息费用' }] },
        profit: {
          gross: { label: '毛利润' },
          operating: { label: '营业利润', notes: ['利润率 19%', '同比 +2 个百分点'] },
          net: { label: '净利润', notes: ['利润率 13%', '同比 (0 个百分点)'] },
        },
      },
    },
  });
})(window);
