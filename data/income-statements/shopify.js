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
      key: 'shopify-q3-fy25',
      company: 'Shopify',
      period: 'Q3 FY25',
      periodNote: 'Quarter ended Sep. 30, 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/shopify-q3-fy25.png',
      roundingTolerance: 1,
      revenue: {
        total: 2844,
        notes: ['+32% Y/Y'],
        items: [
          { id: 'merchant_solutions', label: 'Merchant Solutions', value: 2145, notes: ['+38% Y/Y'] },
          {
            id: 'subscription_solutions',
            label: 'Subscription Solutions',
            value: 699,
            notes: ['+15% Y/Y'],
            children: [
              { id: 'shopify_plus', label: 'Shopify Plus', value: 196, notes: ['+19% Y/Y'] },
              { id: 'other_subscription', label: 'Other', value: 503, notes: ['+13% Y/Y'] },
            ],
          },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 1453,
          items: [
            { id: 'merchant_cost', label: 'Merchant', value: 1325, notes: ['38% gross margin'] },
            { id: 'subscription_cost', label: 'Subscription', value: 128, notes: ['82% gross margin'] },
          ],
        },
        operatingExpenses: {
          total: 1048,
          items: [
            { id: 'sm', label: 'S&M', value: 410, notes: ['14% of revenue', '(1pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 375, notes: ['13% of revenue', '(2pp) Y/Y'] },
            { id: 'loan_losses', label: 'Loan losses', value: 148, notes: ['5% of revenue', '+3pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 115, notes: ['4% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 44 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 35,
        items: [{ id: 'other_expense', label: 'Other', value: 35 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1391, notes: ['49% margin', '(3pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 343, notes: ['12% margin', '(1pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 264, notes: ['9% margin', '+1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月 30 日的季度',
          revenue: {
            notes: ['同比 +32%'],
            items: [
              { id: 'merchant_solutions', label: '商家解决方案', notes: ['同比 +38%'] },
              {
                id: 'subscription_solutions',
                label: '订阅解决方案',
                notes: ['同比 +15%'],
                children: [
                  { id: 'shopify_plus', label: 'Shopify Plus 方案', notes: ['同比 +19%'] },
                  { id: 'other_subscription', label: '其他', notes: ['同比 +13%'] },
                ],
              },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [
                { id: 'merchant_cost', label: '商家', notes: ['毛利率 38%'] },
                { id: 'subscription_cost', label: '订阅', notes: ['毛利率 82%'] },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 14%', '同比 (1 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 13%', '同比 (2 个百分点)'] },
                { id: 'loan_losses', label: '贷款损失', notes: ['占收入 5%', '同比 +3 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 4%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'other_expense', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 49%', '同比 (3 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 12%', '同比 (1 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 9%', '同比 +1 个百分点'] },
          },
        },
      },
    },
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
    },
    {
      key: 'shopify-q4-fy25',
      company: 'Shopify',
      period: 'Q4 FY25',
      periodNote: 'Quarter ended Dec. 31, 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/shopify-q4-fy25.png',
      roundingTolerance: 0.03,
      revenue: {
        total: 3.672,
        notes: ['+31% Y/Y'],
        items: [
          { id: 'merchant_solutions', label: 'Merchant Solutions', value: 2.895, notes: ['+35% Y/Y'] },
          {
            id: 'subscription_solutions',
            label: 'Subscription Solutions',
            value: 0.777,
            notes: ['+17% Y/Y'],
            children: [
              {
                id: 'shopify_plus',
                label: 'Shopify Plus',
                value: 0.221,
                valueText: '$0.2B',
                notes: ['+17% Y/Y', 'Source chart rounds subscription sub-lines to $0.2B and $0.6B.'],
              },
              {
                id: 'other_subscription',
                label: 'Other',
                value: 0.556,
                valueText: '$0.6B',
                notes: ['+17% Y/Y', 'Source chart rounds subscription sub-lines to $0.2B and $0.6B.'],
              },
            ],
          },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 1.979,
          items: [
            { id: 'merchant_cost', label: 'Merchant', value: 1.831, notes: ['37% gross margin'] },
            { id: 'subscription_cost', label: 'Subscription', value: 0.148, notes: ['81% gross margin'] },
          ],
        },
        operatingExpenses: {
          total: 1.062,
          items: [
            { id: 'sm', label: 'S&M', value: 0.433, notes: ['12% of revenue', '(1pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 0.390, notes: ['11% of revenue', '(2pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.125, notes: ['3% of revenue', '(1pp) Y/Y'] },
            { id: 'loan_losses', label: 'Loan losses', value: 0.114, notes: ['3% of revenue', '+0pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0 },
      },
      otherIncome: {
        total: 0.112,
        items: [{ id: 'other', label: 'Other', value: 0.112 }],
      },
      otherExpenses: {
        total: 0.149,
        items: [{ id: 'investments', label: 'Investments', value: 0.149 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1.693, notes: ['46% margin', '(2pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.631, notes: ['17% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.594, notes: ['16% margin', '+10pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月 31 日的季度',
          revenue: {
            notes: ['同比 +31%'],
            items: [
              { id: 'merchant_solutions', label: '商家解决方案', notes: ['同比 +35%'] },
              {
                id: 'subscription_solutions',
                label: '订阅解决方案',
                notes: ['同比 +17%'],
                children: [
                  { id: 'shopify_plus', label: 'Shopify Plus 方案', notes: ['同比 +17%', '来源图将订阅收入子项四舍五入为 $0.2B 和 $0.6B。'] },
                  { id: 'other_subscription', label: '其他', notes: ['同比 +17%', '来源图将订阅收入子项四舍五入为 $0.2B 和 $0.6B。'] },
                ],
              },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [
                { id: 'merchant_cost', label: '商家', notes: ['毛利率 37%'] },
                { id: 'subscription_cost', label: '订阅', notes: ['毛利率 81%'] },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 12%', '同比 (1 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 11%', '同比 (2 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 3%', '同比 (1 个百分点)'] },
                { id: 'loan_losses', label: '贷款损失', notes: ['占收入 3%', '同比 +0 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other', label: '其他' }] },
          otherExpenses: { items: [{ id: 'investments', label: '投资' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 46%', '同比 (2 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 17%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 16%', '同比 +10 个百分点'] },
          },
        },
      },
    }
  );
})(window);
