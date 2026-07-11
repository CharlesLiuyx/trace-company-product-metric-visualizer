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
      key: 'doordash-q1-fy26',
      company: 'DoorDash',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/doordash-q1-fy26.png',
      roundingTolerance: 2,
      revenue: {
        total: 4036,
        notes: ['+33% Y/Y'],
        items: [
          { id: 'united_states', label: 'United States', value: 3104, notes: ['+17% Y/Y', '77% of revenue'] },
          { id: 'international', label: 'International', value: 932, notes: ['+148% Y/Y', '23% of revenue'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 1992 },
        operatingExpenses: {
          total: 1893,
          items: [
            { id: 'sm', label: 'S&M', value: 746, notes: ['18% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 432, notes: ['11% of revenue', '(0pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 398, notes: ['10% of revenue', '(0pp) Y/Y'] },
            { id: 'da', label: 'D&A', value: 269, notes: ['7% of revenue', '+2pp Y/Y'] },
            { id: 'restructuring', label: 'Restructuring', value: 48 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 8 },
      },
      otherIncome: {
        total: 40,
        items: [{ id: 'other_income', label: 'Other', value: 40 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 2044, notes: ['51% margin', '+0pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 151, notes: ['4% margin', '(1pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 183, notes: ['5% margin', '(2pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +33%'],
            items: [
              { id: 'united_states', label: '美国', notes: ['同比 +17%', '占收入 77%'] },
              { id: 'international', label: '国际', notes: ['同比 +148%', '占收入 23%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 18%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 11%', '同比 (0 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 10%', '同比 (0 个百分点)'] },
                { id: 'da', label: '折旧与摊销', notes: ['占收入 7%', '同比 +2 个百分点'] },
                { id: 'restructuring', label: '重组费用' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 51%', '同比 +0 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 4%', '同比 (1 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 5%', '同比 (2 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'doordash-q4-fy25',
      company: 'DoorDash',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/doordash-q4-fy25.png',
      roundingTolerance: 2,
      revenue: {
        total: 3955,
        notes: ['+38% Y/Y'],
        items: [
          { id: 'united_states', label: 'United States', value: 3049, notes: ['+22% Y/Y', '77% of revenue'] },
          { id: 'international', label: 'International', value: 906, notes: ['+144% Y/Y', '23% of revenue'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 1935 },
        operatingExpenses: {
          total: 1872,
          items: [
            { id: 'sm', label: 'S&M', value: 707, notes: ['18% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 480, notes: ['12% of revenue', '+1pp Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 419, notes: ['11% of revenue', '+0pp Y/Y'] },
            { id: 'da', label: 'D&A', value: 267, notes: ['7% of revenue', '+2pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 9 },
      },
      otherIncome: {
        total: 75,
        items: [{ id: 'other_income', label: 'Other', value: 75 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 2020, notes: ['51% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 147, notes: ['4% margin', '(0pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 213, notes: ['5% margin', '+5pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +38%'],
            items: [
              { id: 'united_states', label: '美国', notes: ['同比 +22%', '占收入 77%'] },
              { id: 'international', label: '国际', notes: ['同比 +144%', '占收入 23%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 18%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 12%', '同比 +1 个百分点'] },
                { id: 'rnd', label: '研发', notes: ['占收入 11%', '同比 +0 个百分点'] },
                { id: 'da', label: '折旧与摊销', notes: ['占收入 7%', '同比 +2 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 51%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 4%', '同比 (0 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 5%', '同比 +5 个百分点'] },
          },
        },
      },
    }
  );
})(window);
