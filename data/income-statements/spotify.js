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
      key: 'spotify-q1-fy26',
      company: 'Spotify',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '€',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/spotify-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 4.5,
        notes: ['+8% Y/Y'],
        items: [
          { id: 'premium', label: 'Spotify Premium', value: 4.1, notes: ['+10% Y/Y', '35% gross margin', '+1pp Y/Y'] },
          { id: 'advertising', label: 'Spotify Advertising', value: 0.4, notes: ['(5%) Y/Y', '13% gross margin', '(1pp) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 3.0 },
        operatingExpenses: {
          total: 0.8,
          notes: ['S&M, R&D, and G&A sum to €0.7B due to source chart rounding.'],
          items: [
            { id: 'sm', label: 'Sales & Marketing', value: 0.3, notes: ['8% of revenue', '+0pp Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 0.3, notes: ['7% of revenue', '(2pp) Y/Y'] },
            { id: 'ga', label: 'General & Admin', value: 0.1, notes: ['2% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.2 },
      },
      otherIncome: {
        total: 0.2,
        items: [{ id: 'interest', label: 'Interest', value: 0.2 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1.5, notes: ['33% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.7, notes: ['16% margin', '+4pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.7, notes: ['16% margin', '+5pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +8%'],
            items: [
              { id: 'premium', label: 'Spotify Premium', notes: ['同比 +10%', '毛利率 35%', '同比 +1 个百分点'] },
              { id: 'advertising', label: 'Spotify Advertising', notes: ['同比 (5%)', '毛利率 13%', '同比 (1 个百分点)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['由于来源图四舍五入，销售与市场、研发和管理费用合计为 €0.7B。'],
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 8%', '同比 +0 个百分点'] },
                { id: 'rnd', label: '研发', notes: ['占收入 7%', '同比 (2 个百分点)'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 2%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'interest', label: '利息' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 33%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 16%', '同比 +4 个百分点'] },
            net: { label: '净利润', notes: ['利润率 16%', '同比 +5 个百分点'] },
          },
        },
      },
    }
  );
})(window);
