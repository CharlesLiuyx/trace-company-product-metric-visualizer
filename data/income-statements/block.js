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
      key: 'block-fy25',
      company: 'Block',
      period: 'FY25',
      periodNote: 'Year ended Dec. 31, 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/block-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 24.2,
        notes: ['+0% Y/Y'],
        items: [
          { id: 'commerce_enablement', label: 'Commerce Enablement', value: 11.5, notes: ['+10% Y/Y', '54% gross margin'] },
          { id: 'financial_solutions', label: 'Financial Solutions', value: 4.2, notes: ['+28% Y/Y', '92% gross margin'] },
          { id: 'bitcoin_ecosystem', label: 'Bitcoin Ecosystem', value: 8.5, notes: ['(18%) Y/Y', '5% gross margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 13.8 },
        operatingExpenses: {
          total: 8.7,
          items: [
            { id: 'product_development', label: 'Product Development', value: 2.9 },
            { id: 'sales_marketing', label: 'S&M', value: 2.3 },
            { id: 'ga', label: 'G&A', value: 2.0 },
            { id: 'loan_losses', label: 'Loan losses', value: 1.3 },
            { id: 'other_operating', label: 'Other', value: 0.1 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.4 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0,
        items: [
          { id: 'other_non_operating', label: 'Other', value: 0 },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 10.4, notes: ['+17% Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.7, notes: ['7% margin', '+3pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.3, notes: ['5% margin', '(6pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年',
          periodNote: '截至 2025 年 12 月 31 日的年度',
          revenue: {
            notes: ['同比 +0%'],
            items: [
              { id: 'commerce_enablement', label: '商业赋能', notes: ['同比 +10%', '毛利率 54%'] },
              { id: 'financial_solutions', label: '金融解决方案', notes: ['同比 +28%', '毛利率 92%'] },
              { id: 'bitcoin_ecosystem', label: '比特币生态', notes: ['同比 (18%)', '毛利率 5%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'product_development', label: '产品开发' },
                { id: 'sales_marketing', label: '销售与营销' },
                { id: 'ga', label: '一般及行政' },
                { id: 'loan_losses', label: '贷款损失' },
                { id: 'other_operating', label: '其他' },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [
              { id: 'other_non_operating', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['同比 +17%'] },
            operating: { label: '营业利润', notes: ['利润率 7%', '同比 +3 个百分点'] },
            net: { label: '净利润', notes: ['利润率 5%', '同比 (6 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
