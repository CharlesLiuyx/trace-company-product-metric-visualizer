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
      key: 'applovin-q4-fy25',
      company: 'AppLovin',
      period: 'Q4 FY25',
      periodNote: 'Quarter ended Dec. 31, 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/applovin-q4-fy25.png',
      roundingTolerance: 70.1,
      notes: [
        'The source infographic independently labels Tax at $185M and Other at $58M; those displayed deductions do not reconcile to its $1,102M net-profit label. The values are retained for source fidelity within the documented $70M source-chart discrepancy.',
      ],
      revenue: {
        total: 1658,
        notes: ['+66% Y/Y'],
        items: [
          { id: 'united_states', label: 'United States', value: 865, notes: ['+64% Y/Y'] },
          { id: 'rest_of_world', label: 'Rest of the world', value: 792, notes: ['+68% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 184 },
        operatingExpenses: {
          total: 199,
          items: [
            { id: 'rnd', label: 'R&D', value: 82, notes: ['5% of revenue', '(6pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 49, notes: ['3% of revenue', '(3pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 68, notes: ['4% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 185 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 58, items: [{ id: 'other', label: 'Other', value: 58 }] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1474, notes: ['89% margin', '+4pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1275, notes: ['77% margin', '+14pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1102, notes: ['66% margin', '+7pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月 31 日的季度',
          revenue: {
            notes: ['同比 +66%'],
            items: [
              { id: 'united_states', label: '美国', notes: ['同比 +64%'] },
              { id: 'rest_of_world', label: '世界其他地区', notes: ['同比 +68%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 5%', '同比 (6 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 3%', '同比 (3 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 4%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'other', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 89%', '同比 +4 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 77%', '同比 +14 个百分点'] },
            net: { label: '净利润', notes: ['利润率 66%', '同比 +7 个百分点'] },
          },
        },
      },
    },
    {
      key: 'applovin-q1-fy26',
      company: 'AppLovin',
      period: 'Q1 FY26',
      periodNote: 'Quarter ended Mar. 31, 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/applovin-q1-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 1842,
        notes: ['+59% Y/Y'],
        items: [
          { id: 'united_states', label: 'United States', value: 907, notes: ['+47% Y/Y'] },
          { id: 'rest_of_world', label: 'Rest of the world', value: 935, notes: ['+72% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 204 },
        operatingExpenses: {
          total: 199,
          items: [
            { id: 'rnd', label: 'R&D', value: 94, notes: ['5% of revenue', '+0pp Y/Y'] },
            { id: 'sm', label: 'S&M', value: 61, notes: ['3% of revenue', '(2pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 44, notes: ['2% of revenue', '(2pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 226 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 9,
        items: [{ id: 'other', label: 'Other', value: 9 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1639, notes: ['89% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1440, notes: ['78% margin', '+6pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1206, notes: ['65% margin', '+3pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月 31 日的季度',
          revenue: {
            notes: ['同比 +59%'],
            items: [
              { id: 'united_states', label: '美国', notes: ['同比 +47%'] },
              { id: 'rest_of_world', label: '世界其他地区', notes: ['同比 +72%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 5%', '同比 +0 个百分点'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 3%', '同比 (2 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 2%', '同比 (2 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [
              { id: 'other', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 89%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 78%', '同比 +6 个百分点'] },
            net: { label: '净利润', notes: ['利润率 65%', '同比 +3 个百分点'] },
          },
        },
      },
    }
  );
})(window);
