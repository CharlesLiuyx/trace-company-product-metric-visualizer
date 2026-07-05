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
      key: 'airbus-q1-fy26',
      company: 'Airbus',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '€',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/airbus-q1-fy26.png',
      roundingTolerance: 0.2,
      revenue: {
        total: 12.7,
        notes: ['(7%) Y/Y'],
        items: [
          { id: 'airbus_segment', label: 'Airbus', value: 8.4, notes: ['(11%) Y/Y', '1% segment margin'] },
          { id: 'helicopters', label: 'Helicopters', value: 1.6, notes: ['+0% Y/Y', '4% segment margin'] },
          { id: 'defense_space', label: 'Defense & Space', value: 2.8, notes: ['+7% Y/Y', '5% segment margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 11.1 },
        operatingExpenses: {
          total: 1.4,
          items: [
            { id: 'rnd', label: 'R&D', value: 0.7, notes: ['6% of revenue', '+1pp Y/Y'] },
            { id: 'administrative', label: 'Administrative', value: 0.4, notes: ['3% of revenue', '+0pp Y/Y'] },
            { id: 'selling', label: 'Selling', value: 0.2, notes: ['2% of revenue', '+0pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.1 },
      },
      otherIncome: {
        total: 0.5,
        items: [{ id: 'other_income', label: 'Other', value: 0.5 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1.6, notes: ['12% margin', '(2pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.2, notes: ['2% margin', '(2pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.6, notes: ['4% margin', '(1pp) Y/Y'] },
      },
      i18n: {
        zh: {
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 (7%)'],
            items: [
              { id: 'airbus_segment', label: '空中客车', notes: ['同比 (11%)', '分部利润率 1%'] },
              { id: 'helicopters', label: '直升机', notes: ['同比 +0%', '分部利润率 4%'] },
              { id: 'defense_space', label: '防务与航天', notes: ['同比 +7%', '分部利润率 5%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 6%', '同比 +1 个百分点'] },
                { id: 'administrative', label: '行政', notes: ['占收入 3%', '同比 +0 个百分点'] },
                { id: 'selling', label: '销售', notes: ['占收入 2%', '同比 +0 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 12%', '同比 (2 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 2%', '同比 (2 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 4%', '同比 (1 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
