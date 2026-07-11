/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/teladoc-q4-fy25.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push(
    {
      key: 'teladoc-q4-fy25',
      company: 'Teladoc Health',
      period: 'Q4 FY25',
      periodNote: 'Quarter ended Dec. 31, 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/teladoc-q4-fy25.png',
      roundingTolerance: 1.5,
      revenue: {
        total: 642,
        notes: ['+0% Y/Y', 'Reported revenue was $642.3M; the source chart rounds to $642M.'],
        items: [
          { id: 'integrated_care', label: 'Teladoc Health Integrated Care', value: 409, notes: ['+5% Y/Y', '16% adjusted margin'] },
          { id: 'betterhelp', label: 'BetterHelp', value: 233, notes: ['(7%) Y/Y', '8% adjusted margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 197 },
        operatingExpenses: {
          total: 481,
          items: [
            { id: 'sales_marketing', label: 'Sales & marketing', value: 197, notes: ['31% of revenue', '(5pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 108, notes: ['17% of revenue', '+1pp Y/Y'] },
            { id: 'depreciation_amortization', label: 'Depreciation & amortization', value: 95, notes: ['15% of revenue', '+1pp Y/Y'] },
            { id: 'technology_development', label: 'Technology & development', value: 72, notes: ['11% of revenue', '(1pp) Y/Y'] },
            { id: 'other', label: 'Other', value: 9, notes: ['1% of revenue'] },
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 445, notes: ['69% margin', '(2pp) Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -36, notes: ['(6%) margin', '+2pp Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -36,
          notes: ['Source chart stops at operating loss; no net-income bridge is rendered.'],
        },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月 31 日的季度',
          revenue: {
            notes: ['同比 +0%', '披露收入为 6.423 亿美元；源图四舍五入为 6.42 亿美元。'],
            items: [
              { id: 'integrated_care', label: 'Teladoc Health 整合护理', notes: ['同比 +5%', '调整后利润率 16%'] },
              { id: 'betterhelp', label: 'BetterHelp', notes: ['同比 (7%)', '调整后利润率 8%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sales_marketing', label: '销售与市场', notes: ['占收入 31%', '同比 (5 个百分点)'] },
                { id: 'ga', label: '一般及行政费用', notes: ['占收入 17%', '同比 +1 个百分点'] },
                { id: 'depreciation_amortization', label: '折旧与摊销', notes: ['占收入 15%', '同比 +1 个百分点'] },
                { id: 'technology_development', label: '技术与开发', notes: ['占收入 11%', '同比 (1 个百分点)'] },
                { id: 'other', label: '其他', notes: ['占收入 1%'] },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 69%', '同比 (2 个百分点)'] },
            operating: { label: '营业亏损', notes: ['利润率 (6%)', '同比 +2 个百分点'] },
            net: { label: '营业亏损', notes: ['来源图停留在营业亏损，未展示净利润桥。'] },
          },
        },
      },
    }
  );
})(window);
