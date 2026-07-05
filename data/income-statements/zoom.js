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
      key: 'zoom-q1-fy27',
      company: 'Zoom',
      period: 'Q1 FY27',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/zoom-q1-fy27.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 1239,
        notes: ['+5% Y/Y'],
        items: [
          { id: 'enterprise', label: 'Enterprise', value: 756, notes: ['+7% Y/Y'] },
          { id: 'online', label: 'Online', value: 483, notes: ['+3% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 274 },
        operatingExpenses: {
          total: 654,
          items: [
            { id: 'sm', label: 'S&M', value: 330, notes: ['27% of revenue', '(3pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 228, notes: ['18% of revenue', '+1pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 96, notes: ['8% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 106 },
      },
      otherIncome: {
        total: 221,
        items: [
          { id: 'investments', label: 'Investments', value: 152 },
          { id: 'other', label: 'Other', value: 69 },
        ],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 965, notes: ['78% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 310, notes: ['25% margin', '+4pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 426, notes: ['34% margin', '+13pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2027 财年第一季度',
          periodNote: '截至 2026 年 4 月',
          revenue: {
            notes: ['同比 +5%'],
            items: [
              { id: 'enterprise', label: '企业', notes: ['同比 +7%'] },
              { id: 'online', label: '线上', notes: ['同比 +3%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 27%', '同比 (3 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 18%', '同比 +1 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 8%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'investments', label: '投资' },
              { id: 'other', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 78%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 25%', '同比 +4 个百分点'] },
            net: { label: '净利润', notes: ['利润率 34%', '同比 +13 个百分点'] },
          },
        },
      },
    }
  );
})(window);
