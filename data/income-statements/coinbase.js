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
    }
  );
})(window);
