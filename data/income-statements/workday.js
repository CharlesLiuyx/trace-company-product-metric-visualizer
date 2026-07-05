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
      key: 'workday-q1-fy27',
      company: 'Workday',
      period: 'Q1 FY27',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/workday-q1-fy27.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 2.5,
        notes: ['+13% Y/Y'],
        items: [
          { id: 'subscription', label: 'Subscription', value: 2.4, notes: ['+14% Y/Y', '82% gross margin'] },
          { id: 'professional_services', label: 'Professional services', value: 0.2, notes: ['+4% Y/Y', '(2%) gross margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 0.6 },
        operatingExpenses: {
          total: 1.6,
          items: [
            { id: 'product_development', label: 'Product development', value: 0.7, notes: ['28% of revenue', '(2pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 0.7, notes: ['27% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.2, notes: ['8% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.1 },
      },
      otherIncome: {
        total: 0.017,
        items: [{ id: 'other', label: 'Other', value: 0.017, valueText: '$17M' }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1.9, notes: ['76% margin', '+0pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.3, notes: ['13% margin', '+12pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.2, notes: ['9% margin', '+6pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2027 财年第一季度',
          periodNote: '截至 2026 年 4 月',
          revenue: {
            notes: ['同比 +13%'],
            items: [
              { id: 'subscription', label: '订阅', notes: ['同比 +14%', '毛利率 82%'] },
              { id: 'professional_services', label: '专业服务', notes: ['同比 +4%', '毛利率 (2%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'product_development', label: '产品开发', notes: ['占收入 28%', '同比 (2 个百分点)'] },
                { id: 'sm', label: 'S&M 费用', notes: ['占收入 27%', '同比 (1 个百分点)'] },
                { id: 'ga', label: 'G&A 费用', notes: ['占收入 8%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 76%', '同比 +0 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 13%', '同比 +12 个百分点'] },
            net: { label: '净利润', notes: ['利润率 9%', '同比 +6 个百分点'] },
          },
        },
      },
    }
  );
})(window);
