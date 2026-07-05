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
      key: 'shopify-q1-fy26',
      company: 'Shopify',
      period: 'Q1 FY26',
      periodNote: 'Quarter ended Mar. 31, 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/shopify-q1-fy26.png',
      roundingTolerance: 0.02,
      revenue: {
        total: 3.170,
        notes: ['+34% Y/Y'],
        items: [
          { id: 'merchant_solutions', label: 'Merchant Solutions', value: 2.420, notes: ['+39% Y/Y'] },
          {
            id: 'subscription_solutions',
            label: 'Subscription Solutions',
            value: 0.750,
            notes: ['+21% Y/Y'],
            children: [
              {
                id: 'shopify_plus',
                label: 'Shopify Plus',
                value: 0.242,
                valueText: '$0.2B',
                notes: ['+21% Y/Y', 'Source chart rounded subscription sub-lines to $0.2B and $0.5B.'],
              },
              {
                id: 'other_subscription',
                label: 'Other',
                value: 0.508,
                valueText: '$0.5B',
                notes: ['+21% Y/Y', 'Source chart rounded subscription sub-lines to $0.2B and $0.5B.'],
              },
            ],
          },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 1.624,
          items: [
            { id: 'merchant_cost', label: 'Merchant', value: 1.476, notes: ['39% gross margin'] },
            { id: 'subscription_cost', label: 'Subscription', value: 0.148, notes: ['80% gross margin'] },
          ],
        },
        operatingExpenses: {
          total: 1.164,
          items: [
            { id: 'sm', label: 'S&M', value: 0.496, notes: ['16% of revenue', '(1pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 0.437, notes: ['14% of revenue', '(2pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.115, notes: ['4% of revenue', '(1pp) Y/Y'] },
            { id: 'loan_losses', label: 'Loan losses', value: 0.116, notes: ['4% of revenue', '+0pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.022, valueText: '$22M' },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.941,
        items: [{ id: 'investments', label: 'Investments', value: 0.941 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1.546, notes: ['49% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.382, notes: ['12% margin', '+3pp Y/Y'] },
        net: { id: 'net_loss', label: 'Net loss', value: -0.581 },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月 31 日的季度',
          revenue: {
            notes: ['同比 +34%'],
            items: [
              { id: 'merchant_solutions', label: '商家解决方案', notes: ['同比 +39%'] },
              {
                id: 'subscription_solutions',
                label: '订阅解决方案',
                notes: ['同比 +21%'],
                children: [
                  {
                    id: 'shopify_plus',
                    label: 'Shopify Plus 方案',
                    notes: ['同比 +21%', '来源图将订阅收入子项四舍五入为 $0.2B 和 $0.5B。'],
                  },
                  {
                    id: 'other_subscription',
                    label: '其他',
                    notes: ['同比 +21%', '来源图将订阅收入子项四舍五入为 $0.2B 和 $0.5B。'],
                  },
                ],
              },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [
                { id: 'merchant_cost', label: '商家', notes: ['毛利率 39%'] },
                { id: 'subscription_cost', label: '订阅', notes: ['毛利率 80%'] },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 16%', '同比 (1 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 14%', '同比 (2 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 4%', '同比 (1 个百分点)'] },
                { id: 'loan_losses', label: '贷款损失', notes: ['占收入 4%', '同比 +0 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [{ id: 'investments', label: '投资' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 49%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 12%', '同比 +3 个百分点'] },
            net: { label: '净亏损' },
          },
        },
      },
    }
  );
})(window);
