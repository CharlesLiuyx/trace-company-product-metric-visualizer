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
      key: 'mastercard-q4-fy25',
      company: 'Mastercard',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/mastercard-q4-fy25.png',
      roundingTolerance: 0.15,
      notes: [
        'The View preserves the rounded amounts shown by the source infographic. Payment Network revenue is gross payment-network revenue less rebates and incentives; it then combines with Value-added Services & Solutions to form net revenue.',
        'The source labels the final non-tax deduction as $34M. Its difference from the displayed net-profit bridge is within the source chart’s published rounding.',
      ],
      revenue: {
        total: 8.8,
        notes: ['+18% Y/Y', 'Net revenue after rebates & incentives'],
        items: [
          { id: 'payment_network', label: 'Payment Network', value: 4.9, notes: ['+12% Y/Y'] },
          { id: 'value_added', label: 'Value-added Services & Solutions', value: 3.9, notes: ['+26% Y/Y'] },
        ],
        paymentNetwork: {
          gross: { id: 'network_revenue', label: 'Gross payment-network revenue', value: 10.6 },
          grossItems: [
            { id: 'domestic', label: 'Domestic assessments', value: 2.8, notes: ['+9% Y/Y'] },
            { id: 'cross_border', label: 'Cross-border volume fees', value: 3.3, notes: ['+21% Y/Y'] },
            { id: 'transaction', label: 'Transaction processing', value: 4.2, notes: ['+18% Y/Y'] },
            { id: 'other_rev', label: 'Other', value: 0.3, notes: ['+14% Y/Y'] },
          ],
          rebates: { id: 'rebates', label: 'Rebates & incentives', value: 5.6 },
        },
      },
      costs: {
        costOfRevenue: { label: 'Cost of revenue', value: 0, notes: ['The source chart flows net revenue directly to operating profit and operating expenses.'] },
        operatingExpenses: {
          total: 3.9,
          items: [
            { id: 'general_admin', label: 'General & admin', value: 3.1 },
            { id: 'dna', label: 'D&A', value: 0.3 },
            { id: 'marketing', label: 'Marketing', value: 0.3 },
            { id: 'litigation', label: 'Litigation', value: 0.2 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.8 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0.034, items: [{ id: 'other_ded', label: 'Other', value: 0.034 }] },
      profit: {
        gross: { label: 'Net revenue', value: 8.8, notes: ['Balancing subtotal; the source does not show gross profit or a cost-of-revenue subtotal.'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 4.9, notes: ['56% margin', '+3pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 4.1, notes: ['46% margin', '+1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          notes: [
            '视图保留来源信息图中的四舍五入金额。支付网络收入等于支付网络毛收入减去返利与激励，之后与增值服务与解决方案收入合并形成净收入。',
            '来源图把税费以外的最终扣减标为 3400 万美元；其与显示的净利润桥接差异在来源图的四舍五入口径内。',
          ],
          revenue: {
            notes: ['同比 +18%', '扣除返利与激励后的净收入'],
            items: [
              { id: 'payment_network', label: '支付网络', notes: ['同比 +12%'] },
              { id: 'value_added', label: '增值服务与解决方案', notes: ['同比 +26%'] },
            ],
            paymentNetwork: {
              gross: { label: '支付网络毛收入' },
              grossItems: [
                { id: 'domestic', label: '境内评估费', notes: ['同比 +9%'] },
                { id: 'cross_border', label: '跨境交易量费', notes: ['同比 +21%'] },
                { id: 'transaction', label: '交易处理', notes: ['同比 +18%'] },
                { id: 'other_rev', label: '其他', notes: ['同比 +14%'] },
              ],
              rebates: { label: '返利与激励' },
            },
          },
          costs: {
            costOfRevenue: { label: '收入成本', notes: ['来源图让净收入直接流向营业利润和运营费用。'] },
            operatingExpenses: { items: [{ id: 'general_admin', label: '一般及行政' }, { id: 'dna', label: '折旧与摊销' }, { id: 'marketing', label: '营销' }, { id: 'litigation', label: '诉讼' }] },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'other_ded', label: '其他' }] },
          profit: {
            gross: { label: '净收入', notes: ['平衡小计；来源图未显示毛利润或收入成本小计。'] },
            operating: { label: '营业利润', notes: ['利润率 56%', '同比 +3 个百分点'] },
            net: { label: '净利润', notes: ['利润率 46%', '同比 +1 个百分点'] },
          },
        },
      },
    },
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
