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
      key: 'coinbase-q1-fy26',
      company: 'Coinbase',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/coinbase-q1-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 1413,
        notes: ['(31%) Y/Y'],
        items: [
          {
            id: 'transaction_based',
            label: 'Transaction-based',
            value: 756,
            notes: ['(40%) Y/Y'],
            children: [
              { id: 'consumer', label: 'Consumer', value: 567, notes: ['(48%) Y/Y'] },
              { id: 'institutions', label: 'Institutions', value: 136, notes: ['+38% Y/Y'] },
              { id: 'other_transaction', label: 'Other', value: 53, notes: ['(22%) Y/Y'] },
            ],
          },
          {
            id: 'subscription_services',
            label: 'Subscription & Services',
            value: 584,
            notes: ['(14%) Y/Y'],
            children: [
              { id: 'stablecoin', label: 'Stablecoin', value: 305, notes: ['+11% Y/Y'] },
              { id: 'blockchain_rewards', label: 'Blockchain rewards', value: 101, notes: ['(49%) Y/Y'] },
              { id: 'interest_finance_fee_income', label: 'Interest & finance fee income', value: 68, notes: ['+8% Y/Y'] },
              { id: 'other_subscription', label: 'Other sub', value: 109, notes: ['(23%) Y/Y'] },
            ],
          },
          { id: 'other_revenue', label: 'Other', value: 74, notes: ['(25%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          label: 'Cost of revenue',
          value: 0,
          notes: ['The source chart does not show a gross profit or cost-of-revenue subtotal.'],
        },
        operatingExpenses: {
          total: 1434,
          notes: ['Source chart operating-expense detail sums to $1,435M because the source chart rounds each item.'],
          items: [
            { id: 'technology', label: 'Technology', value: 526, notes: ['37% of revenue', '+20pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 376, notes: ['27% of revenue', '+7pp Y/Y'] },
            { id: 'sm', label: 'S&M', value: 267, notes: ['19% of revenue', '+7pp Y/Y'] },
            { id: 'transaction_costs', label: 'Transaction', value: 196, notes: ['14% of revenue', '(1pp) Y/Y'] },
            { id: 'other_costs', label: 'Other costs', value: 70 },
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
        gross: {
          label: 'Revenue before operating expenses',
          value: 1413,
          notes: ['The source chart does not show a gross profit or cost-of-revenue subtotal.'],
        },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -21, notes: ['(2%) margin', '(36pp) Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -21,
          notes: ['No separate net income line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 (31%)'],
            items: [
              {
                id: 'transaction_based',
                label: '交易收入',
                notes: ['同比 (40%)'],
                children: [
                  { id: 'consumer', label: '消费者', notes: ['同比 (48%)'] },
                  { id: 'institutions', label: '机构', notes: ['同比 +38%'] },
                  { id: 'other_transaction', label: '其他', notes: ['同比 (22%)'] },
                ],
              },
              {
                id: 'subscription_services',
                label: '订阅与服务',
                notes: ['同比 (14%)'],
                children: [
                  { id: 'stablecoin', label: '稳定币', notes: ['同比 +11%'] },
                  { id: 'blockchain_rewards', label: '区块链奖励', notes: ['同比 (49%)'] },
                  { id: 'interest_finance_fee_income', label: '利息和金融手续费收入', notes: ['同比 +8%'] },
                  { id: 'other_subscription', label: '其他订阅', notes: ['同比 (23%)'] },
                ],
              },
              { id: 'other_revenue', label: '其他', notes: ['同比 (25%)'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              notes: ['来源图未显示毛利润或收入成本小计。'],
            },
            operatingExpenses: {
              notes: ['来源图运营费用明细因逐项四舍五入合计为 $1,435M。'],
              items: [
                { id: 'technology', label: '技术', notes: ['占收入 37%', '同比 +20 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 27%', '同比 +7 个百分点'] },
                { id: 'sm', label: '销售与营销', notes: ['占收入 19%', '同比 +7 个百分点'] },
                { id: 'transaction_costs', label: '交易', notes: ['占收入 14%', '同比 (1 个百分点)'] },
                { id: 'other_costs', label: '其他成本' },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: {
              label: '运营费用前收入',
              notes: ['来源图未显示毛利润或收入成本小计。'],
            },
            operating: { label: '营业亏损', notes: ['利润率 (2%)', '同比 (36 个百分点)'] },
            net: {
              label: '营业亏损',
              notes: ['来源图未单独显示净利润项目。'],
            },
          },
        },
      },
    },
    {
      key: 'coinbase-q2-fy26',
      company: 'Coinbase',
      period: 'Q2 FY26',
      periodNote: 'Ending Jun. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/coinbase-q2-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 1220,
        notes: ['(19%) Y/Y'],
        items: [
          {
            id: 'transaction_based',
            label: 'Transaction-based',
            value: 599,
            notes: ['(22%) Y/Y'],
            children: [
              { id: 'consumer', label: 'Consumer', value: 452, notes: ['(30%) Y/Y'] },
              { id: 'institutions', label: 'Institutions', value: 100, notes: ['+64% Y/Y'] },
              { id: 'other_transaction', label: 'Other', value: 47, notes: ['(12%) Y/Y'] },
            ],
          },
          {
            id: 'subscription_services',
            label: 'Subscription & Services',
            value: 555,
            notes: ['(12%) Y/Y'],
            children: [
              { id: 'stablecoin', label: 'Stablecoin', value: 292, notes: ['(6%) Y/Y'] },
              { id: 'blockchain_rewards', label: 'Blockchain rewards', value: 83, notes: ['(43%) Y/Y'] },
              { id: 'interest_income', label: 'Interest income', value: 66, notes: ['+11% Y/Y'] },
              { id: 'other_subscription', label: 'Other sub', value: 114, notes: ['(4%) Y/Y'] },
            ],
          },
          { id: 'other_revenue', label: 'Other', value: 66, notes: ['(35%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          label: 'Cost of revenue',
          value: 0,
          notes: ['The source chart does not show a gross profit or cost-of-revenue subtotal.'],
        },
        operatingExpenses: {
          total: 1333,
          notes: ['Source chart operating-expense detail sums to $1,334M because the source chart rounds each item.'],
          items: [
            { id: 'technology', label: 'Technology', value: 473, notes: ['39% of revenue', '+13pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 357, notes: ['29% of revenue', '+6pp Y/Y'] },
            { id: 'sm', label: 'S&M', value: 240, notes: ['20% of revenue', '+4pp Y/Y'] },
            { id: 'transaction_costs', label: 'Transaction', value: 190, notes: ['16% of revenue', '(1pp) Y/Y'] },
            { id: 'other_costs', label: 'Other', value: 74, notes: ['6% of revenue', '(14pp) Y/Y'] },
          ],
        },
        tax: { label: 'Tax', value: 0 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: {
          label: 'Revenue before operating expenses',
          value: 1220,
          notes: ['The source chart does not show a gross profit or cost-of-revenue subtotal.'],
        },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -113, notes: ['(9%) margin', '(8pp) Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -113,
          notes: ['No separate net income line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月',
          revenue: {
            notes: ['同比 (19%)'],
            items: [
              {
                id: 'transaction_based',
                label: '交易收入',
                notes: ['同比 (22%)'],
                children: [
                  { id: 'consumer', label: '消费者', notes: ['同比 (30%)'] },
                  { id: 'institutions', label: '机构', notes: ['同比 +64%'] },
                  { id: 'other_transaction', label: '其他', notes: ['同比 (12%)'] },
                ],
              },
              {
                id: 'subscription_services',
                label: '订阅与服务',
                notes: ['同比 (12%)'],
                children: [
                  { id: 'stablecoin', label: '稳定币', notes: ['同比 (6%)'] },
                  { id: 'blockchain_rewards', label: '区块链奖励', notes: ['同比 (43%)'] },
                  { id: 'interest_income', label: '利息收入', notes: ['同比 +11%'] },
                  { id: 'other_subscription', label: '其他订阅', notes: ['同比 (4%)'] },
                ],
              },
              { id: 'other_revenue', label: '其他', notes: ['同比 (35%)'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              notes: ['来源图未显示毛利润或收入成本小计。'],
            },
            operatingExpenses: {
              notes: ['来源图运营费用明细因逐项四舍五入合计为 $1,334M。'],
              items: [
                { id: 'technology', label: '技术', notes: ['占收入 39%', '同比 +13 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 29%', '同比 +6 个百分点'] },
                { id: 'sm', label: '销售与营销', notes: ['占收入 20%', '同比 +4 个百分点'] },
                { id: 'transaction_costs', label: '交易', notes: ['占收入 16%', '同比 (1 个百分点)'] },
                { id: 'other_costs', label: '其他', notes: ['占收入 6%', '同比 (14 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: {
              label: '运营费用前收入',
              notes: ['来源图未显示毛利润或收入成本小计。'],
            },
            operating: { label: '营业亏损', notes: ['利润率 (9%)', '同比 (8 个百分点)'] },
            net: { label: '营业亏损', notes: ['来源图未单独显示净利润项目。'] },
          },
        },
      },
    },
    {
      key: 'coinbase-q4-fy25',
      company: 'Coinbase',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/coinbase-q4-fy25.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 1781,
        notes: ['(22%) Y/Y'],
        items: [
          {
            id: 'transaction_based', label: 'Transaction-based', value: 983, notes: ['(37%) Y/Y'],
            children: [
              { id: 'consumer', label: 'Consumer', value: 734, notes: ['(46%) Y/Y'] },
              { id: 'institutions', label: 'Institutions', value: 185, notes: ['+31% Y/Y'] },
              { id: 'other_transaction', label: 'Other', value: 64, notes: ['(6%) Y/Y'] },
            ],
          },
          {
            id: 'subscription_services', label: 'Subscription & Services', value: 727,
            notes: ['+13% Y/Y', 'The rounded source components sum to $728M.'],
            children: [
              { id: 'stablecoin', label: 'Stablecoin', value: 364, notes: ['+61% Y/Y'] },
              { id: 'blockchain_rewards', label: 'Blockchain rewards', value: 152, notes: ['(29%) Y/Y'] },
              { id: 'interest_finance_fee_income', label: 'Interest & finance fee income', value: 60, notes: ['(9%) Y/Y'] },
              { id: 'other_subscription', label: 'Other sub', value: 152, notes: ['+13% Y/Y'] },
            ],
          },
          { id: 'other_revenue', label: 'Other', value: 71, notes: ['(5%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          label: 'Cost of revenue', value: 0,
          notes: ['The source chart does not show a gross profit or cost-of-revenue subtotal.'],
        },
        operatingExpenses: {
          total: 1507,
          notes: ['Source chart operating-expense detail sums to $1,508M because the source chart rounds each item.'],
          items: [
            { id: 'technology', label: 'Technology', value: 497, notes: ['28% of revenue', '+12pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 453, notes: ['25% of revenue', '+9pp Y/Y'] },
            { id: 'sm', label: 'S&M', value: 315, notes: ['18% of revenue', '+8pp Y/Y'] },
            { id: 'transaction_costs', label: 'Transaction', value: 219, notes: ['12% of revenue', '(2pp) Y/Y'] },
            { id: 'other_operating_costs', label: 'Other', value: 24 },
          ],
        },
        tax: { label: 'Tax', value: 0 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 940,
        items: [{ id: 'other_costs', label: 'Other costs', value: 940 }],
      },
      profit: {
        gross: {
          label: 'Revenue before operating expenses', value: 1781,
          notes: ['The source chart does not show a gross profit or cost-of-revenue subtotal.'],
        },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 274, notes: ['15% margin', '(30pp) Y/Y'] },
        net: { id: 'net_loss', label: 'Net loss', value: -667 },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 (22%)'],
            items: [
              {
                id: 'transaction_based', label: '交易收入', notes: ['同比 (37%)'],
                children: [
                  { id: 'consumer', label: '消费者', notes: ['同比 (46%)'] },
                  { id: 'institutions', label: '机构', notes: ['同比 +31%'] },
                  { id: 'other_transaction', label: '其他', notes: ['同比 (6%)'] },
                ],
              },
              {
                id: 'subscription_services', label: '订阅与服务', notes: ['同比 +13%', '来源图逐项四舍五入后合计为 $728M。'],
                children: [
                  { id: 'stablecoin', label: '稳定币', notes: ['同比 +61%'] },
                  { id: 'blockchain_rewards', label: '区块链奖励', notes: ['同比 (29%)'] },
                  { id: 'interest_finance_fee_income', label: '利息和金融手续费收入', notes: ['同比 (9%)'] },
                  { id: 'other_subscription', label: '其他订阅', notes: ['同比 +13%'] },
                ],
              },
              { id: 'other_revenue', label: '其他', notes: ['同比 (5%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本', notes: ['来源图未显示毛利润或收入成本小计。'] },
            operatingExpenses: {
              notes: ['来源图运营费用明细因逐项四舍五入合计为 $1,508M。'],
              items: [
                { id: 'technology', label: '技术', notes: ['占收入 28%', '同比 +12 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 25%', '同比 +9 个百分点'] },
                { id: 'sm', label: '销售与营销', notes: ['占收入 18%', '同比 +8 个百分点'] },
                { id: 'transaction_costs', label: '交易', notes: ['占收入 12%', '同比 (2 个百分点)'] },
                { id: 'other_operating_costs', label: '其他' },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'other_costs', label: '其他成本' }] },
          profit: {
            gross: { label: '运营费用前收入', notes: ['来源图未显示毛利润或收入成本小计。'] },
            operating: { label: '营业利润', notes: ['利润率 15%', '同比 (30 个百分点)'] },
            net: { label: '净亏损' },
          },
        },
      },
    }
  );
})(window);
