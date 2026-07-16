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
      key: 'chime-q1-fy26',
      company: 'Chime',
      period: 'Q1 FY26',
      periodNote: 'Quarter ended Mar. 31, 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/chime-q1-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 647,
        notes: ['+25% Y/Y', 'Reported revenue was $647.387M; source chart rounds to $647M.'],
        items: [
          { id: 'payment_revenue', label: 'Payment revenue', value: 433, notes: ['+16% Y/Y in the source chart; SEC reporting gives +15% from unrounded revenue.', 'Interchange-based fees'] },
          { id: 'platform_related_revenue', label: 'Platform-related revenue', value: 215, notes: ['+50% Y/Y', 'Credit Builder, MyPay, SpotMe'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 67 },
        operatingExpenses: {
          total: 534,
          items: [
            { id: 'marketing', label: 'Marketing', value: 165, notes: ['26% of revenue', '(0pp) Y/Y'] },
            { id: 'technology', label: 'Technology', value: 110, notes: ['17% of revenue', '+2pp Y/Y'] },
            { id: 'operations', label: 'Operations', value: 95, notes: ['15% of revenue', '(0pp) Y/Y'] },
            { id: 'transaction_risk_losses', label: 'Transaction and risk losses', value: 89, notes: ['14% of revenue', '(7pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 71, notes: ['11% of revenue', '+2pp Y/Y'] },
            { id: 'da', label: 'D&A', value: 4, notes: ['1% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { label: 'Tax', value: 0, notes: ['The $0.455M tax provision rounds to $0M and has no separate source-chart node.'] },
      },
      otherIncome: {
        total: 8,
        items: [{ id: 'interest', label: 'Interest', value: 8, notes: ['Source chart label; SEC reports $7.748M of other income, net, primarily interest income.'] }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 580, notes: ['90% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 46, notes: ['7% margin', '+9pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 53, notes: ['8% margin', '+6pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月 31 日的季度',
          revenue: {
            notes: ['同比 +25%', '报告收入为 $647.387M；来源图四舍五入为 $647M。'],
            items: [
              { id: 'payment_revenue', label: '支付收入', notes: ['来源图为同比 +16%；SEC 按未四舍五入收入披露为同比 +15%。', '基于交换费'] },
              { id: 'platform_related_revenue', label: '平台相关收入', notes: ['同比 +50%', 'Credit Builder、MyPay、SpotMe'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'marketing', label: '营销', notes: ['占收入 26%', '同比 (0 个百分点)'] },
                { id: 'technology', label: '技术', notes: ['占收入 17%', '同比 +2 个百分点'] },
                { id: 'operations', label: '运营', notes: ['占收入 15%', '同比 (0 个百分点)'] },
                { id: 'transaction_risk_losses', label: '交易与风险损失', notes: ['占收入 14%', '同比 (7 个百分点)'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 11%', '同比 +2 个百分点'] },
                { id: 'da', label: '折旧与摊销', notes: ['占收入 1%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费', notes: ['$0.455M 税费四舍五入为 $0M，来源图未显示单独节点。'] },
          },
          otherIncome: {
            items: [{ id: 'interest', label: '利息', notes: ['来源图标签；SEC 披露其他收入净额为 $7.748M，主要为利息收入。'] }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 90%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 7%', '同比 +9 个百分点'] },
            net: { label: '净利润', notes: ['利润率 8%', '同比 +6 个百分点'] },
          },
        },
      },
    },
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
    },
    {
      key: 'chime-q3-fy25',
      company: 'Chime',
      period: 'Q3 FY25',
      periodNote: 'Quarter ended Sep. 30, 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/chime-q3-fy25.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 544,
        notes: ['+29% Y/Y'],
        items: [
          { id: 'payment_revenue', label: 'Payment revenue', value: 363, notes: ['+16% Y/Y', 'Interchange-based fees'] },
          { id: 'platform_related_revenue', label: 'Platform-related revenue', value: 180, notes: ['+65% Y/Y', 'Credit Builder, MyPay, SpotMe'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 69 },
        operatingExpenses: {
          total: 539,
          items: [
            { id: 'marketing', label: 'Marketing', value: 154, notes: ['28% of revenue', '(6pp) Y/Y'] },
            { id: 'technology', label: 'Technology', value: 124, notes: ['23% of revenue', '+4pp Y/Y'] },
            { id: 'transaction_risk_losses', label: 'Transaction and risk losses', value: 97, notes: ['18% of revenue', '+5pp Y/Y'] },
            { id: 'operations', label: 'Operations', value: 84, notes: ['15% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 77, notes: ['14% of revenue', '+3pp Y/Y'] },
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 474, notes: ['87% margin', '(0pp) Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -65, notes: ['(12%) margin', '(5pp) Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -65,
          notes: ['No separate net income line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月 30 日的季度',
          revenue: {
            notes: ['同比 +29%'],
            items: [
              { id: 'payment_revenue', label: '支付收入', notes: ['同比 +16%', '基于交换费'] },
              { id: 'platform_related_revenue', label: '平台相关收入', notes: ['同比 +65%', 'Credit Builder、MyPay、SpotMe'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'marketing', label: '营销', notes: ['占收入 28%', '同比 (6 个百分点)'] },
                { id: 'technology', label: '技术', notes: ['占收入 23%', '同比 +4 个百分点'] },
                { id: 'transaction_risk_losses', label: '交易与风险损失', notes: ['占收入 18%', '同比 +5 个百分点'] },
                { id: 'operations', label: '运营', notes: ['占收入 15%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 14%', '同比 +3 个百分点'] },
                { id: 'da', label: '折旧与摊销', notes: ['占收入 1%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 87%', '同比 (0 个百分点)'] },
            operating: { label: '营业亏损', notes: ['利润率 (12%)', '同比 (5 个百分点)'] },
            net: { label: '营业亏损', notes: ['来源图未单独显示净利润项目。'] },
          },
        },
      },
    }
  );
})(window);
