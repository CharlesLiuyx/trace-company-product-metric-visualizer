/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/chime-q4-fy25.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push(
    {
      key: 'chime-q4-fy25',
      company: 'Chime',
      period: 'Q4 FY25',
      periodNote: 'Quarter ended Dec. 31, 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/chime-q4-fy25.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 596,
        notes: ['+26% Y/Y', 'Reported revenue was $596.358M; source chart rounds to $596M.'],
        items: [
          { id: 'payment_revenue', label: 'Payment revenue', value: 396, notes: ['+17% Y/Y', 'Interchange-based fees'] },
          { id: 'platform_related_revenue', label: 'Platform-related revenue', value: 200, notes: ['+47% Y/Y', 'Credit Builder, MyPay, SpotMe'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 66 },
        operatingExpenses: {
          total: 584,
          items: [
            { id: 'marketing', label: 'Marketing', value: 164, notes: ['28% of revenue', '(2pp) Y/Y'] },
            { id: 'technology', label: 'Technology', value: 111, notes: ['19% of revenue', '+2pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 109, notes: ['18% of revenue', '+8pp Y/Y'] },
            { id: 'transaction_risk_losses', label: 'Transaction and risk losses', value: 103, notes: ['17% of revenue', '(2pp) Y/Y'] },
            { id: 'operations', label: 'Operations', value: 93, notes: ['16% of revenue', '(1pp) Y/Y'] },
            { id: 'da', label: 'D&A', value: 4, notes: ['1% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { label: 'Tax', value: 0 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 530, notes: ['89% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -54, notes: ['(9%) margin', '(3pp) Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -54,
          notes: ['No separate net income line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月 31 日的季度',
          revenue: {
            notes: ['同比 +26%', '报告收入为 $596.358M；来源图四舍五入为 $596M。'],
            items: [
              { id: 'payment_revenue', label: '支付收入', notes: ['同比 +17%', '基于交换费'] },
              { id: 'platform_related_revenue', label: '平台相关收入', notes: ['同比 +47%', 'Credit Builder、MyPay、SpotMe'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'marketing', label: '营销', notes: ['占收入 28%', '同比 (2 个百分点)'] },
                { id: 'technology', label: '技术', notes: ['占收入 19%', '同比 +2 个百分点'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 18%', '同比 +8 个百分点'] },
                { id: 'transaction_risk_losses', label: '交易与风险损失', notes: ['占收入 17%', '同比 (2 个百分点)'] },
                { id: 'operations', label: '运营', notes: ['占收入 16%', '同比 (1 个百分点)'] },
                { id: 'da', label: '折旧与摊销', notes: ['占收入 1%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 89%', '同比 +1 个百分点'] },
            operating: { label: '营业亏损', notes: ['利润率 (9%)', '同比 (3 个百分点)'] },
            net: { label: '营业亏损', notes: ['来源图未单独显示净利润项目。'] },
          },
        },
      },
    }
  );
})(window);
