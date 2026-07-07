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
      key: 'analog-devices-q1-fy26',
      company: 'Analog Devices',
      period: 'Q1 FY26',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/analog-devices-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 3.160263,
        notes: ['+30% Y/Y'],
        items: [
          { id: 'industrial', label: 'Industrial', value: 1.489256, notes: ['+38% Y/Y'] },
          { id: 'automotive', label: 'Automotive', value: 0.794402, notes: ['+8% Y/Y'] },
          { id: 'communications', label: 'Communications', value: 0.476797, notes: ['+63% Y/Y'] },
          { id: 'consumer', label: 'Consumer', value: 0.399808, notes: ['+27% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 1.115287 },
        operatingExpenses: {
          total: 1.04795,
          items: [
            { id: 'rnd', label: 'R&D', value: 0.4674, notes: ['15% of revenue', '(2pp) Y/Y'] },
            { id: 'sga', label: 'SG&A', value: 0.345253, notes: ['11% of revenue', '(1pp) Y/Y'] },
            { id: 'amortization', label: 'Amortization', value: 0.187315, notes: ['6% of revenue', '(2pp) Y/Y'] },
            { id: 'special_charges', label: 'Special charges', value: 0.047982, notes: ['2% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.115045 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.051155,
        items: [
          {
            id: 'interest',
            label: 'Interest',
            value: 0.051155,
            notes: ['Net nonoperating expense, including interest expense, interest income, and other, net.'],
          },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 2.044976, notes: ['65% margin', '+6pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.997026, notes: ['32% margin', '+11pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.830826, notes: ['26% margin', '+10pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 1 月',
          revenue: {
            notes: ['同比 +30%'],
            items: [
              { id: 'industrial', label: '工业', notes: ['同比 +38%'] },
              { id: 'automotive', label: '汽车', notes: ['同比 +8%'] },
              { id: 'communications', label: '通信', notes: ['同比 +63%'] },
              { id: 'consumer', label: '消费者', notes: ['同比 +27%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 15%', '同比 (2 个百分点)'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 11%', '同比 (1 个百分点)'] },
                { id: 'amortization', label: '摊销', notes: ['占收入 6%', '同比 (2 个百分点)'] },
                { id: 'special_charges', label: '特殊费用', notes: ['占收入 2%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [
              { id: 'interest', label: '利息', notes: ['净非经营费用，包括利息费用、利息收入和其他净额。'] },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 65%', '同比 +6 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 32%', '同比 +11 个百分点'] },
            net: { label: '净利润', notes: ['利润率 26%', '同比 +10 个百分点'] },
          },
        },
      },
    }
  );
})(window);
