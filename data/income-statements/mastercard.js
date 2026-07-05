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
      key: 'mastercard-q1-fy26',
      company: 'Mastercard',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/mastercard-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 8.4,
        notes: ['+16% Y/Y', 'Net revenue after rebates & incentives'],
        items: [
          { id: 'payment_network', label: 'Payment Network', value: 4.9, notes: ['+12% Y/Y'] },
          { id: 'value_added', label: 'Value-added Services & Solutions', value: 3.5, notes: ['+22% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          label: 'Cost of revenue',
          value: 0,
          notes: ['No cost-of-revenue subtotal is shown in the source chart; net revenue flows straight to operating profit and operating expenses.'],
        },
        operatingExpenses: {
          total: 3.5,
          items: [
            { id: 'general_admin', label: 'General & admin', value: 3.0 },
            { id: 'dna', label: 'D&A', value: 0.3 },
            { id: 'marketing', label: 'Marketing', value: 0.2 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.9 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.1,
        items: [
          { id: 'other_ded', label: 'Other', value: 0.1 },
        ],
      },
      profit: {
        gross: {
          label: 'Net revenue',
          value: 8.4,
          notes: ['Balancing subtotal; the source chart does not show a gross profit or cost-of-revenue subtotal.'],
        },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 4.9, notes: ['58% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 3.9, notes: ['46% margin', '+1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +16%', '扣除返利与激励后的净收入'],
            items: [
              { id: 'payment_network', label: '支付网络', notes: ['同比 +12%'] },
              { id: 'value_added', label: '增值服务与解决方案', notes: ['同比 +22%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本', notes: ['来源图未显示收入成本小计；净收入直接流向营业利润和运营费用。'] },
            operatingExpenses: {
              items: [
                { id: 'general_admin', label: '一般及行政' },
                { id: 'dna', label: '折旧与摊销' },
                { id: 'marketing', label: '营销' },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [
              { id: 'other_ded', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '净收入', notes: ['平衡小计；来源图未显示毛利润或收入成本小计。'] },
            operating: { label: '营业利润', notes: ['利润率 58%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 46%', '同比 +1 个百分点'] },
          },
        },
      },
    }
  );
})(window);
