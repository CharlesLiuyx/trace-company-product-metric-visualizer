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
      key: 'roku-q4-fy25',
      company: 'Roku',
      period: 'Q4 FY25',
      periodNote: 'Quarter ended Dec. 31, 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/roku-q4-fy25.png',
      roundingTolerance: 2,
      revenue: {
        total: 1395,
        notes: ['+16% Y/Y'],
        items: [
          { id: 'platform', label: 'Platform', value: 1224, notes: ['+18% Y/Y', '53% gross margin', '(1pp) Y/Y'] },
          { id: 'devices', label: 'Devices', value: 171, notes: ['+3% Y/Y', '(23%) gross margin', '+5pp Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 788,
          items: [
            { id: 'platform_cost', label: 'Platform', value: 577 },
            { id: 'player_cost', label: 'Player', value: 211 },
          ],
        },
        operatingExpenses: {
          total: 541,
          items: [
            { id: 'sm', label: 'S&M', value: 255, notes: ['18% of revenue', '(4pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 185, notes: ['13% of revenue', '(2pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 101, notes: ['7% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 11 },
      },
      otherIncome: {
        total: 26,
        items: [{ id: 'other', label: 'Other', value: 26 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 607, notes: ['44% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 66, notes: ['5% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 81 },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月 31 日的季度',
          revenue: {
            notes: ['同比 +16%'],
            items: [
              { id: 'platform', label: '平台', notes: ['同比 +18%', '毛利率 53%', '同比 (1 个百分点)'] },
              { id: 'devices', label: '设备', notes: ['同比 +3%', '毛利率 (23%)', '同比 +5 个百分点'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [
                { id: 'platform_cost', label: '平台' },
                { id: 'player_cost', label: '播放器' },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 18%', '同比 (4 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 13%', '同比 (2 个百分点)'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 7%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 44%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 5%', '同比 +1 个百分点'] },
            net: { label: '净利润' },
          },
        },
      },
    }
  );
})(window);
