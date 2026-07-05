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
      key: 'visa-q2-fy26',
      company: 'Visa',
      period: 'Q2 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/visa-q2-fy26.png',
      roundingTolerance: 0.35,
      notes: [
        'Gross revenue (service, data processing, international transaction, and other) totals $15.4B before $4.2B of client incentives, leaving $11.2B net revenue.',
        'Source infographic figures do not reconcile exactly: net revenue $11.2B less operating expenses $3.7B implies $7.5B operating profit, but the chart labels $7.2B (64% margin); operating profit $7.2B less tax $0.9B implies $6.3B, but net profit is labelled $6.0B (54% margin). Values reproduce the source faithfully within roundingTolerance.',
      ],
      revenue: {
        total: 15.4,
        notes: [],
        items: [
          { id: 'service', label: 'Service', value: 5.0, notes: ['+13% Y/Y'] },
          { id: 'data_processing', label: 'Data processing', value: 5.5, notes: ['+18% Y/Y'] },
          { id: 'international', label: 'International transaction', value: 3.6, notes: ['+10% Y/Y'] },
          { id: 'other_rev', label: 'Other', value: 1.3, notes: ['+41% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'client_incentives', label: 'Client incentives', value: 4.2 },
        operatingExpenses: {
          total: 3.7,
          items: [
            { id: 'personnel', label: 'Personnel', value: 1.8 },
            { id: 'marketing', label: 'Marketing', value: 0.5 },
            { id: 'general_admin', label: 'General & admin', value: 0.5 },
            { id: 'da', label: 'D&A', value: 0.3 },
            { id: 'litigation', label: 'Litigation', value: 0.3 },
            { id: 'network', label: 'Network', value: 0.3 },
            { id: 'professional_fees', label: 'Professional fees', value: 0.2 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.9 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.0,
        items: [
          { id: 'other_ded', label: 'Other', value: 0.0 },
        ],
      },
      profit: {
        gross: { id: 'net_revenue', label: 'Net revenue', value: 11.2, notes: ['+17% Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 7.2, notes: ['64% margin', '+8pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 6.0, notes: ['54% margin', '+6pp Y/Y'] },
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
