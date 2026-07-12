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
      key: 'paypal-q4-fy25',
      company: 'PayPal',
      period: 'Q4 FY25',
      periodNote: 'Quarter ended Dec. 31, 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/paypal-q4-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 8.7,
        notes: ['+4% Y/Y'],
        items: [
          {
            id: 'transaction_revenues',
            label: 'Transaction revenues',
            value: 7.8,
            notes: ['+3% Y/Y', 'Transaction fees for payments, currency conversion, cross-border payments, and transfers of funds'],
          },
          {
            id: 'other_value_added_services',
            label: 'Other value-added services',
            value: 0.9,
            notes: ['+10% Y/Y', 'Partnerships, referrals, subscriptions, gateway fees, and interest'],
          },
        ],
      },
      costs: {
        costOfRevenue: {
          label: 'Transaction expense, transaction and credit losses, and customer support',
          value: 5.1,
          items: [
            { id: 'transaction_expense', label: 'Transaction expense', value: 4.3 },
            { id: 'transaction_credit_losses', label: 'Transaction & credit losses', value: 0.4 },
            { id: 'customer_support', label: 'Customer support', value: 0.4 },
          ],
        },
        operatingExpenses: {
          total: 2.1,
          items: [
            { id: 'technology_development', label: 'Technology & Development', value: 0.8, notes: ['9% of revenue', '+0pp Y/Y'] },
            { id: 'sales_marketing', label: 'S&M', value: 0.7, notes: ['8% of revenue', '+0pp Y/Y'] },
            { id: 'general_administrative', label: 'G&A', value: 0.5, notes: ['6% of revenue', '(1pp) Y/Y'] },
            { id: 'restructuring', label: 'Restructuring', value: 0.1, notes: ['1% of revenue', '+0pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.2 },
      },
      otherIncome: {
        total: 0.1,
        items: [
          { id: 'other_income', label: 'Other', value: 0.1 },
        ],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 3.6, notes: ['41% margin', '(0pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.5, notes: ['17% margin', '+0pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.4, notes: ['17% margin', '+3pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月 31 日的季度',
          revenue: {
            notes: ['同比 +4%'],
            items: [
              {
                id: 'transaction_revenues',
                label: '交易收入',
                notes: ['同比 +3%', '支付、货币兑换、跨境支付和资金转账的交易手续费'],
              },
              {
                id: 'other_value_added_services',
                label: '其他增值服务',
                notes: ['同比 +10%', '合作伙伴、推荐、订阅、网关费用和利息'],
              },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '交易费用、交易与信贷损失以及客户支持',
              items: [
                { id: 'transaction_expense', label: '交易费用' },
                { id: 'transaction_credit_losses', label: '交易与信贷损失' },
                { id: 'customer_support', label: '客户支持' },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'technology_development', label: '技术与开发', notes: ['占收入 9%', '同比 +0 个百分点'] },
                { id: 'sales_marketing', label: '销售与营销', notes: ['占收入 8%', '同比 +0 个百分点'] },
                { id: 'general_administrative', label: '一般及行政费用', notes: ['占收入 6%', '同比 (1 个百分点)'] },
                { id: 'restructuring', label: '重组', notes: ['占收入 1%', '同比 +0 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'other_income', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 41%', '同比 (0 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 17%', '同比 +0 个百分点'] },
            net: { label: '净利润', notes: ['利润率 17%', '同比 +3 个百分点'] },
          },
        },
      },
    },
    {
      key: 'paypal-q1-fy26',
      company: 'PayPal',
      period: 'Q1 FY26',
      periodNote: 'Quarter ended Mar. 31, 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/paypal-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 8.4,
        notes: ['+7% Y/Y'],
        items: [
          {
            id: 'transaction_revenues',
            label: 'Transaction revenues',
            value: 7.5,
            notes: ['+7% Y/Y', 'Transaction fees for payments, currency conversion, cross-border payments, and transfers of funds'],
          },
          {
            id: 'other_value_added_services',
            label: 'Other value-added services',
            value: 0.9,
            notes: ['+10% Y/Y', 'Partnerships, referrals, subscriptions, gateway fees, and interest'],
          },
        ],
      },
      costs: {
        costOfRevenue: {
          label: 'Transaction expense, transaction and credit losses, and customer support',
          value: 5.1,
          items: [
            { id: 'transaction_expense', label: 'Transaction expense', value: 4.2 },
            { id: 'transaction_credit_losses', label: 'Transaction & credit losses', value: 0.5 },
            { id: 'customer_support', label: 'Customer support', value: 0.4 },
          ],
        },
        operatingExpenses: {
          total: 1.9,
          items: [
            { id: 'technology_development', label: 'Technology & Development', value: 0.8, notes: ['9% of revenue', '+0pp Y/Y'] },
            { id: 'sales_marketing', label: 'S&M', value: 0.5, notes: ['6% of revenue', '(0pp) Y/Y'] },
            { id: 'general_administrative', label: 'G&A', value: 0.5, notes: ['6% of revenue', '(1pp) Y/Y'] },
            { id: 'restructuring', label: 'Restructuring', value: 0.1, notes: ['1% of revenue', '+0pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.3 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.1,
        items: [
          { id: 'other_expense', label: 'Other', value: 0.1 },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 3.4, notes: ['40% margin', '(2pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.5, notes: ['18% margin', '(2pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.1, notes: ['13% margin', '(3pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月 31 日的季度',
          revenue: {
            notes: ['同比 +7%'],
            items: [
              {
                id: 'transaction_revenues',
                label: '交易收入',
                notes: ['同比 +7%', '支付、货币兑换、跨境支付和资金转账的交易手续费'],
              },
              {
                id: 'other_value_added_services',
                label: '其他增值服务',
                notes: ['同比 +10%', '合作伙伴、推荐、订阅、网关费用和利息'],
              },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '交易费用、交易与信贷损失以及客户支持',
              items: [
                { id: 'transaction_expense', label: '交易费用' },
                { id: 'transaction_credit_losses', label: '交易与信贷损失' },
                { id: 'customer_support', label: '客户支持' },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'technology_development', label: '技术与开发', notes: ['占收入 9%', '同比 +0 个百分点'] },
                { id: 'sales_marketing', label: '销售与营销', notes: ['占收入 6%', '同比 (0 个百分点)'] },
                { id: 'general_administrative', label: '一般及行政费用', notes: ['占收入 6%', '同比 (1 个百分点)'] },
                { id: 'restructuring', label: '重组', notes: ['占收入 1%', '同比 +0 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [
              { id: 'other_expense', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 40%', '同比 (2 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 18%', '同比 (2 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 13%', '同比 (3 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
