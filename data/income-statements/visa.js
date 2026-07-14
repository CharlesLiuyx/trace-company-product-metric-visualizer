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
      key: 'visa-q1-fy26',
      company: 'Visa',
      period: 'Q1 FY26',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/visa-q1-fy26.png',
      roundingTolerance: 0.01,
      notes: [
        'SEC-reported revenue is $15.170B before $4.269B of client incentives, leaving $10.901B of net revenue.',
        'The seven operating-expense components total $4.164B exactly. Other is the $0.011B net non-operating expense between operating profit and net income; it is not an operating-expense residual.',
      ],
      revenue: {
        total: 15.170,
        notes: [],
        items: [
          { id: 'service', label: 'Service', value: 4.760, notes: ['+13% Y/Y'] },
          { id: 'data_processing', label: 'Data processing', value: 5.544, notes: ['+17% Y/Y'] },
          { id: 'international', label: 'International transaction', value: 3.652, notes: ['+6% Y/Y'] },
          { id: 'other_rev', label: 'Other', value: 1.214, notes: ['+33% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'client_incentives', label: 'Client incentives', value: 4.269 },
        operatingExpenses: {
          total: 4.164,
          items: [
            { id: 'personnel', label: 'Personnel', value: 1.764 },
            { id: 'litigation', label: 'Litigation', value: 0.708 },
            { id: 'marketing', label: 'Marketing', value: 0.410 },
            { id: 'general_admin', label: 'General & admin', value: 0.515 },
            { id: 'da', label: 'D&A', value: 0.326 },
            { id: 'professional_fees', label: 'Professional fees', value: 0.208 },
            { id: 'network', label: 'Network', value: 0.233 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.873 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.011,
        items: [
          { id: 'other_ded', label: 'Other', value: 0.011 },
        ],
      },
      profit: {
        gross: { id: 'net_revenue', label: 'Net revenue', value: 10.901, notes: ['+15% Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 6.737, notes: ['62% margin', '(4pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 5.853, notes: ['54% margin', '(0pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            items: [
              { id: 'service', label: '服务', notes: ['同比 +13%'] },
              { id: 'data_processing', label: '数据处理', notes: ['同比 +17%'] },
              { id: 'international', label: '国际交易', notes: ['同比 +6%'] },
              { id: 'other_rev', label: '其他', notes: ['同比 +33%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '客户激励' },
            operatingExpenses: {
              items: [
                { id: 'personnel', label: '人员' },
                { id: 'litigation', label: '诉讼' },
                { id: 'marketing', label: '市场营销' },
                { id: 'general_admin', label: '综合及行政' },
                { id: 'da', label: '折旧摊销' },
                { id: 'professional_fees', label: '专业服务费' },
                { id: 'network', label: '网络' },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'other_ded', label: '其他' }] },
          profit: {
            gross: { label: '净收入', notes: ['同比 +15%'] },
            operating: { label: '营业利润', notes: ['利润率 62%', '同比 -4 个百分点'] },
            net: { label: '净利润', notes: ['利润率 54%', '同比 0 个百分点'] },
          },
        },
      },
    },
    {
      key: 'visa-q2-fy26',
      company: 'Visa',
      period: 'Q2 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/visa-q2-fy26.png',
      roundingTolerance: 0.01,
      notes: [
        'SEC-reported revenue is $15.475B before $4.245B of client incentives, leaving $11.230B of net revenue.',
        'The seven operating-expense components total $3.996B exactly. Other is the $0.060B net non-operating expense between operating profit and net income; it is not an operating-expense residual.',
      ],
      revenue: {
        total: 15.475,
        notes: [],
        items: [
          { id: 'service', label: 'Service', value: 4.981, notes: ['+13% Y/Y'] },
          { id: 'data_processing', label: 'Data processing', value: 5.543, notes: ['+18% Y/Y'] },
          { id: 'international', label: 'International transaction', value: 3.631, notes: ['+10% Y/Y'] },
          { id: 'other_rev', label: 'Other', value: 1.320, notes: ['+41% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'client_incentives', label: 'Client incentives', value: 4.245 },
        operatingExpenses: {
          total: 3.996,
          items: [
            { id: 'personnel', label: 'Personnel', value: 1.841 },
            { id: 'marketing', label: 'Marketing', value: 0.545 },
            { id: 'general_admin', label: 'General & admin', value: 0.450 },
            { id: 'da', label: 'D&A', value: 0.333 },
            { id: 'litigation', label: 'Litigation', value: 0.329 },
            { id: 'network', label: 'Network', value: 0.260 },
            { id: 'professional_fees', label: 'Professional fees', value: 0.238 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 1.153 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.060,
        items: [
          { id: 'other_ded', label: 'Other', value: 0.060 },
        ],
      },
      profit: {
        gross: { id: 'net_revenue', label: 'Net revenue', value: 11.230, notes: ['+17% Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 7.234, notes: ['64% margin', '+8pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 6.021, notes: ['54% margin', '+6pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            items: [
              { id: 'service', label: '服务', notes: ['同比 +13%'] },
              { id: 'data_processing', label: '数据处理', notes: ['同比 +18%'] },
              { id: 'international', label: '国际交易', notes: ['同比 +10%'] },
              { id: 'other_rev', label: '其他', notes: ['同比 +41%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '客户激励' },
            operatingExpenses: {
              items: [
                { id: 'personnel', label: '人员' },
                { id: 'marketing', label: '市场营销' },
                { id: 'general_admin', label: '综合及行政' },
                { id: 'da', label: '折旧摊销' },
                { id: 'litigation', label: '诉讼' },
                { id: 'network', label: '网络' },
                { id: 'professional_fees', label: '专业服务费' },
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
            gross: { label: '净收入', notes: ['同比 +17%'] },
            operating: { label: '营业利润', notes: ['利润率 64%', '同比 +8 个百分点'] },
            net: { label: '净利润', notes: ['利润率 54%', '同比 +6 个百分点'] },
          },
        },
      },
    }
  );
})(window);
