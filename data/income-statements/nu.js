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
      key: 'nu-q1-fy26',
      company: 'Nu',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/nu-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 5.0,
        notes: ['+53% Y/Y'],
        items: [
          {
            id: 'interest_income',
            label: 'Interest income',
            value: 4.3,
            notes: ['+56% Y/Y'],
            children: [
              { id: 'credit_card', label: 'Credit card', value: 1.6, notes: ['+64% Y/Y'] },
              { id: 'lending', label: 'Lending', value: 1.6, notes: ['+59% Y/Y'] },
              { id: 'other_interest', label: 'Other', value: 1.1, notes: ['+44% Y/Y'] },
            ],
          },
          {
            id: 'fee_commission_income',
            label: 'Fee & commission income',
            value: 0.7,
            notes: ['+34% Y/Y'],
          },
        ],
      },
      costs: {
        costOfRevenue: {
          label: 'Interest, credit loss, and transactional costs',
          value: 3.1,
          items: [
            { id: 'credit_loss_allowance', label: 'Credit loss allowance', value: 1.7 },
            { id: 'interest_other', label: 'Interest & other', value: 1.3 },
            { id: 'transactional', label: 'Transactional', value: 0.1 },
          ],
        },
        operatingExpenses: {
          total: 0.9,
          items: [
            { id: 'ga', label: 'G&A', value: 0.5, notes: ['10% of revenue', '+1pp Y/Y'] },
            { id: 'customer_support', label: 'Customer Support', value: 0.2, notes: ['4% of revenue', '(1pp) Y/Y'] },
            { id: 'other_expenses', label: 'Other expenses', value: 0.1, notes: ['3% of revenue', '+2pp Y/Y'] },
            { id: 'marketing', label: 'Marketing', value: 0.1, notes: ['1% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.1 },
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1.9, notes: ['38% margin', '(3pp) Y/Y'] },
        operating: { id: 'pretax_income', label: 'Pretax income', value: 1.0, notes: ['19% margin', '(5pp) Y/Y'] },
        net: { id: 'net_income', label: 'Net income', value: 0.9, notes: ['18% margin', '+0pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +53%'],
            items: [
              {
                label: '利息收入',
                notes: ['同比 +56%'],
                children: [
                  { label: '信用卡', notes: ['同比 +64%'] },
                  { label: '贷款', notes: ['同比 +59%'] },
                  { label: '其他', notes: ['同比 +44%'] },
                ],
              },
              { label: '手续费及佣金收入', notes: ['同比 +34%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '利息、信用损失及交易成本',
              items: [
                { label: '信用损失准备' },
                { label: '利息及其他' },
                { label: '交易成本' },
              ],
            },
            operatingExpenses: {
              items: [
                { label: '一般及行政费用', notes: ['占收入 10%', '同比 +1 个百分点'] },
                { label: '客户支持', notes: ['占收入 4%', '同比 (1 个百分点)'] },
                { label: '其他费用', notes: ['占收入 3%', '同比 +2 个百分点'] },
                { label: '营销', notes: ['占收入 1%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 38%', '同比 (3 个百分点)'] },
            operating: { label: '税前利润', notes: ['利润率 19%', '同比 (5 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 18%', '同比 +0 个百分点'] },
          },
        },
      },
    },
    {
      key: 'nu-q4-fy25',
      company: 'Nu',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/nu-q4-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 4.7,
        notes: ['+57% Y/Y'],
        items: [
          {
            id: 'interest_income',
            label: 'Interest income',
            value: 4.0,
            notes: ['+60% Y/Y'],
            children: [
              { id: 'credit_card', label: 'Credit card', value: 1.3, notes: ['+54% Y/Y'] },
              { id: 'lending', label: 'Lending', value: 1.4, notes: ['+61% Y/Y'] },
              { id: 'other_interest', label: 'Other', value: 1.3, notes: ['+66% Y/Y'] },
            ],
          },
          {
            id: 'fee_commission_income',
            label: 'Fee & commission income',
            value: 0.7,
            notes: ['+39% Y/Y'],
          },
        ],
      },
      costs: {
        costOfRevenue: {
          label: 'Interest, credit loss, and transactional costs',
          value: 2.7,
          notes: [
            'The displayed components total $2.7B; revenue less gross profit is $2.8B because the source chart rounds each amount.',
          ],
          items: [
            { id: 'interest_other', label: 'Interest & other', value: 1.4 },
            { id: 'credit_loss_allowance', label: 'Credit loss allowance', value: 1.2 },
            { id: 'transactional', label: 'Transactional', value: 0.1 },
          ],
        },
        operatingExpenses: {
          total: 0.9,
          notes: [
            'The displayed operating-expense components total $0.8B because the source chart rounds each amount.',
          ],
          items: [
            { id: 'ga', label: 'G&A', value: 0.4, notes: ['9% of revenue', '(1pp) Y/Y'] },
            { id: 'customer_support', label: 'Customer Support', value: 0.2, notes: ['4% of revenue', '(2pp) Y/Y'] },
            { id: 'marketing', label: 'Marketing', value: 0.1, notes: ['3% of revenue', '+1pp Y/Y'] },
            { id: 'other_expenses', label: 'Other expenses', value: 0.1, notes: ['3% of revenue', '+1pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.2 },
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1.9, notes: ['41% margin', '(4pp) Y/Y'] },
        operating: { id: 'pretax_income', label: 'Pretax income', value: 1.1, notes: ['23% margin', '(3pp) Y/Y'] },
        net: { id: 'net_income', label: 'Net income', value: 0.9, notes: ['19% margin', '+1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +57%'],
            items: [
              {
                label: '利息收入',
                notes: ['同比 +60%'],
                children: [
                  { label: '信用卡', notes: ['同比 +54%'] },
                  { label: '贷款', notes: ['同比 +61%'] },
                  { label: '其他', notes: ['同比 +66%'] },
                ],
              },
              { label: '手续费及佣金收入', notes: ['同比 +39%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '利息、信用损失及交易成本',
              notes: ['图中分项合计为 27 亿美元；因各金额四舍五入，收入减毛利润为 28 亿美元。'],
              items: [
                { label: '利息及其他' },
                { label: '信用损失准备' },
                { label: '交易成本' },
              ],
            },
            operatingExpenses: {
              notes: ['图中运营费用分项因各金额四舍五入，合计为 8 亿美元。'],
              items: [
                { label: '一般及行政费用', notes: ['占收入 9%', '同比 (1 个百分点)'] },
                { label: '客户支持', notes: ['占收入 4%', '同比 (2 个百分点)'] },
                { label: '营销', notes: ['占收入 3%', '同比 +1 个百分点'] },
                { label: '其他费用', notes: ['占收入 3%', '同比 +1 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 41%', '同比 (4 个百分点)'] },
            operating: { label: '税前利润', notes: ['利润率 23%', '同比 (3 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 19%', '同比 +1 个百分点'] },
          },
        },
      },
    }
  );
})(window);
