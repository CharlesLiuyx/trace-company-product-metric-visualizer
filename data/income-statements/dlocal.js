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
      key: 'dlocal-q3-fy25',
      company: 'dLocal',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/dlocal-q3-fy25.png',
      roundingTolerance: 1.5,
      revenue: {
        total: 283,
        notes: ['+52% Y/Y'],
        items: [
          { id: 'latam', label: 'LATAM', value: 234, notes: ['+61% Y/Y'] },
          { id: 'africa_asia', label: 'Africa & Asia', value: 48, notes: ['+19% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_services', label: 'Cost of services', value: 179 },
        operatingExpenses: {
          total: 48,
          items: [
            { id: 'ga', label: 'G&A', value: 28 },
            { id: 'technology_development', label: 'Technology & development', value: 9 },
            { id: 'sm', label: 'S&M', value: 8 },
            { id: 'other_opex', label: 'Other', value: 2 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 9 },
      },
      otherIncome: {
        total: 6,
        items: [{ id: 'other_income', label: 'Other', value: 6 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 103, notes: ['37% margin', '(6pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 56, notes: ['20% margin', '(2pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 52, notes: ['18% margin', '+4pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          revenue: {
            notes: ['同比 +52%'],
            items: [
              { label: '拉丁美洲', notes: ['同比 +61%'] },
              { label: '非洲和亚洲', notes: ['同比 +19%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '服务成本' },
            operatingExpenses: {
              items: [
                { label: '一般及行政' },
                { label: '技术与开发' },
                { label: '销售与营销' },
                { label: '其他' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 37%', '同比 (6 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 20%', '同比 (2 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 18%', '同比 +4 个百分点'] },
          },
        },
      },
    },
    {
      key: 'dlocal-q1-fy26',
      company: 'dLocal',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/dlocal-q1-fy26.png',
      roundingTolerance: 1.5,
      revenue: {
        total: 336,
        notes: ['+55% Y/Y'],
        items: [
          { id: 'latam', label: 'LATAM', value: 263, notes: ['+61% Y/Y'] },
          { id: 'africa_asia', label: 'Africa & Asia', value: 73, notes: ['+36% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_services', label: 'Cost of services', value: 217 },
        operatingExpenses: {
          total: 66,
          items: [
            { id: 'ga', label: 'G&A', value: 43 },
            { id: 'technology_development', label: 'Technology & development', value: 12 },
            { id: 'sm', label: 'S&M', value: 10 },
            { id: 'other_opex', label: 'Other', value: 1 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 15 },
      },
      otherIncome: {
        total: 4,
        items: [{ id: 'other_income', label: 'Other', value: 4 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 119, notes: ['35% margin', '(4pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 53, notes: ['16% margin', '(5pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 42, notes: ['12% margin', '(9pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +55%'],
            items: [
              { label: '拉丁美洲', notes: ['同比 +61%'] },
              { label: '非洲和亚洲', notes: ['同比 +36%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '服务成本' },
            operatingExpenses: {
              items: [
                { label: '一般及行政' },
                { label: '技术与开发' },
                { label: '销售与营销' },
                { label: '其他' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 35%', '同比 (4 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 16%', '同比 (5 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 12%', '同比 (9 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
