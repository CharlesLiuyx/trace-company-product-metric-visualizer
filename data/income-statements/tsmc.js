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
      key: 'tsmc-q1-fy26',
      company: 'TSMC',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/tsmc-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 35.9,
        notes: ['+41% Y/Y'],
        items: [
          { id: 'hpc', label: 'High Performance Computing', value: 21.9, notes: ['61% of revenue', '+2pp Y/Y'] },
          { id: 'smartphones', label: 'Smartphones', value: 9.3, notes: ['26% of revenue', '(2pp) Y/Y'] },
          { id: 'iot', label: 'Internet of Things', value: 2.2, notes: ['6% of revenue', '+1pp Y/Y'] },
          { id: 'automotive', label: 'Automotive', value: 1.4, notes: ['4% of revenue', '(1pp) Y/Y'] },
          { id: 'dce', label: 'Digital Consumer Electronics', value: 0.4, notes: ['1% of revenue', 'Flat Y/Y'] },
          { id: 'others', label: 'Others', value: 0.7, notes: ['2% of revenue', 'Flat Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 12.1 },
        operatingExpenses: {
          total: 3.0,
          notes: ['R&D and SG&A line items sum to $2.9B; the remaining $0.1B is rounding residual in the source chart.'],
          items: [
            { id: 'rnd', label: 'R&D', value: 2.1 },
            { id: 'sga', label: 'SG&A', value: 0.8 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 3.6 },
      },
      otherIncome: {
        total: 0.9,
        items: [{ id: 'other', label: 'Other', value: 0.9 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 23.8, notes: ['66% margin', '+7pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 20.9, notes: ['58% margin', '+10pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 18.1, notes: ['51% margin', '+8pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +41%'],
            items: [
              { id: 'hpc', label: '高性能计算', notes: ['占收入 61%', '同比 +2 个百分点'] },
              { id: 'smartphones', label: '智能手机', notes: ['占收入 26%', '同比 (2 个百分点)'] },
              { id: 'iot', label: '物联网', notes: ['占收入 6%', '同比 +1 个百分点'] },
              { id: 'automotive', label: '汽车', notes: ['占收入 4%', '同比 (1 个百分点)'] },
              { id: 'dce', label: '数字消费电子', notes: ['占收入 1%', '同比持平'] },
              { id: 'others', label: '其他', notes: ['占收入 2%', '同比持平'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发' },
                { id: 'sga', label: '销售、一般及行政' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'other', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 66%', '同比 +7 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 58%', '同比 +10 个百分点'] },
            net: { label: '净利润', notes: ['利润率 51%', '同比 +8 个百分点'] },
          },
        },
      },
    }
  );
})(window);
