/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/<dataset-key>.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'bullish-q3-fy25',
    company: 'Bullish',
    period: 'Q3 FY25',
    periodNote: 'Ending Sep. 2025',
    currency: '$',
    unit: 'M',
    decimals: 1,
    sourceImage: 'input/processed/bullish-q3-fy25.png',
    roundingTolerance: 0.6,
    revenue: {
      total: 65,
      notes: ['+79% Y/Y'],
      items: [
        {
          id: 'trading_net',
          label: 'Trading (net)',
          value: 15,
          notes: ['(29%) Y/Y', 'Based on $42B of digital asset sales'],
        },
        {
          id: 'subscription_services_other',
          label: 'Subscription, Services & Other revenue',
          value: 50,
          notes: ['+227% Y/Y', 'Primarily subscription and services (media/data)'],
        },
      ],
    },
    costs: {
      costOfRevenue: {
        label: 'Cost of revenue',
        value: 0,
        notes: ['The source chart does not show a separate cost-of-revenue or gross-profit bridge.'],
      },
      operatingExpenses: {
        total: 90,
        items: [
          { id: 'administrative', label: 'Administrative', value: 46 },
          { id: 'fv_liabilities_derivatives', label: 'FV of liabilities & derivatives', value: 16 },
          { id: 'finance_expenses', label: 'Finance expenses', value: 14 },
          { id: 'other_expenses', label: 'Other', value: 14 },
        ],
      },
      tax: {
        label: 'Tax expense',
        value: 0,
        notes: ['The source shows a $0.1M tax benefit, recorded under other income for bridge arithmetic.'],
      },
    },
    operatingOtherIncome: {
      total: 43,
      items: [
        {
          id: 'net_mark_to_market_investments',
          label: 'Net mark-to-market & investments',
          value: 43,
        },
      ],
    },
    operatingOtherExpenses: {
      total: 0,
      items: [],
    },
    otherIncome: {
      total: 0.1,
      items: [{ id: 'tax_benefit', label: 'Tax benefit', value: 0.1 }],
    },
    otherExpenses: {
      total: 0,
      items: [],
    },
    profit: {
      gross: {
        label: 'Revenue before operating expenses',
        value: 65,
        notes: ['The source chart does not show a separate gross-profit subtotal.'],
      },
      operating: { id: 'pretax_income', label: 'Pretax income', value: 18 },
      net: {
        id: 'net_income',
        label: 'Net income',
        value: 18,
        notes: ['The displayed $18M pretax income plus $0.1M tax benefit rounds to $18M net income.'],
      },
    },
    i18n: {
      zh: {
        period: '2025 财年第三季度',
        periodNote: '截至 2025 年 9 月',
        revenue: {
          notes: ['同比 +79%'],
          items: [
            {
              id: 'trading_net',
              label: '交易净收入',
              notes: ['同比 (29%)', '基于 420 亿美元数字资产销售额'],
            },
            {
              id: 'subscription_services_other',
              label: '订阅、服务及其他收入',
              notes: ['同比 +227%', '主要为订阅与服务（媒体/数据）'],
            },
          ],
        },
        costs: {
          costOfRevenue: {
            label: '收入成本',
            notes: ['来源图未显示单独的收入成本或毛利润桥接。'],
          },
          operatingExpenses: {
            items: [
              { id: 'administrative', label: '行政费用' },
              { id: 'fv_liabilities_derivatives', label: '负债及衍生品公允价值变动' },
              { id: 'finance_expenses', label: '财务费用' },
              { id: 'other_expenses', label: '其他' },
            ],
          },
          tax: {
            label: '税费',
            notes: ['来源图显示 10 万美元税收收益，为桥接算术计入其他收入。'],
          },
        },
        operatingOtherIncome: {
          items: [
            { id: 'net_mark_to_market_investments', label: '按市值计价及投资净收益' },
          ],
        },
        otherIncome: {
          items: [{ id: 'tax_benefit', label: '税收收益' }],
        },
        profit: {
          gross: {
            label: '运营费用前收入',
            notes: ['来源图未显示单独的毛利润小计。'],
          },
          operating: { label: '税前利润' },
          net: {
            label: '净利润',
            notes: ['图示 1,800 万美元税前利润加 10 万美元税收收益，四舍五入后净利润仍为 1,800 万美元。'],
          },
        },
      },
    },
  });
})(window);
