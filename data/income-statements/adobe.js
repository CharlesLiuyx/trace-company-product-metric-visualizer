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
      key: 'adobe-q2-fy26',
      company: 'Adobe',
      period: 'Q2 FY26',
      periodNote: 'Ending May 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/adobe-q2-fy26.png',
      roundingTolerance: 0.1,
      revenue: {
        total: 6.6,
        notes: ['+13% Y/Y'],
        items: [
          { id: 'creative_marketing', label: 'Creative & Marketing Professionals', value: 4.5, notes: ['+13% Y/Y'] },
          { id: 'business_consumers', label: 'Business Professionals & Consumers', value: 1.9, notes: ['+16% Y/Y'] },
          { id: 'other', label: 'Other', value: 0.2 },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 0.7 },
        operatingExpenses: {
          total: 3.7,
          notes: ['Visible operating-expense line items sum to $3.637B because the source chart rounds values.'],
          items: [
            { id: 'sm', label: 'Sales & marketing', value: 1.9, notes: ['28% of revenue', '+2pp Y/Y'] },
            { id: 'rnd', label: 'Research & development', value: 1.2, notes: ['18% of revenue', '+1pp Y/Y'] },
            { id: 'ga', label: 'General & admin', value: 0.5, notes: ['8% of revenue', '+0pp Y/Y'] },
            { id: 'amortization', label: 'Amortization', value: 0.037 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.5 },
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 5.9, notes: ['89% margin', '+4pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.2, notes: ['34% margin', '+0pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.7, notes: ['26% margin', '(3pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 5 月',
          revenue: {
            notes: ['同比 +13%'],
            items: [
              { id: 'creative_marketing', label: '创意与营销专业人士', notes: ['同比 +13%'] },
              { id: 'business_consumers', label: '企业专业人士与消费者', notes: ['同比 +16%'] },
              { id: 'other', label: '其他' },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['可见营业费用明细合计为 $3.637B，因为来源图表数值经过取整。'],
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 28%', '同比 +2 个百分点'] },
                { id: 'rnd', label: '研发', notes: ['占收入 18%', '同比 +1 个百分点'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 8%', '同比 +0 个百分点'] },
                { id: 'amortization', label: '摊销' },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 89%', '同比 +4 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 34%', '同比 +0 个百分点'] },
            net: { label: '净利润', notes: ['利润率 26%', '同比 (3 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
