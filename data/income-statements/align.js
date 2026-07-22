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
      key: 'align-q1-fy26',
      company: 'Align Technology',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/align-q1-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 1040,
        notes: ['+6% Y/Y'],
        items: [
          { id: 'clear_aligners', label: 'Clear Aligners', value: 856, notes: ['+7% Y/Y'] },
          { id: 'systems_services', label: 'Systems & Services', value: 184, notes: ['+1% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 304 },
        operatingExpenses: {
          total: 595,
          items: [
            { id: 'sga', label: 'SG&A', value: 465, notes: ['45% of revenue', '(1pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 99, notes: ['9% of revenue', '(0pp) Y/Y'] },
            { id: 'restructuring', label: 'Restructuring', value: 31, notes: ['3% of revenue', '+3pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 36 },
      },
      otherIncome: {
        total: 7,
        items: [{ id: 'other_income', label: 'Other', value: 7 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 737, notes: ['71% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 142, notes: ['14% margin', '+0pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 113, notes: ['11% margin', '+1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +6%'],
            items: [
              { id: 'clear_aligners', label: '透明矫治器', notes: ['同比 +7%'] },
              { id: 'systems_services', label: '系统与服务', notes: ['同比 +1%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售及管理费用', notes: ['占收入 45%', '同比 (1 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 9%', '同比 (0 个百分点)'] },
                { id: 'restructuring', label: '重组', notes: ['占收入 3%', '同比 +3 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 71%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 14%', '同比 +0 个百分点'] },
            net: { label: '净利润', notes: ['利润率 11%', '同比 +1 个百分点'] },
          },
        },
      },
    },
    {
      key: 'align-q4-fy25',
      company: 'Align Technology',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/align-q4-fy25.png',
      roundingTolerance: 0.6,
      revenue: {
        total: 1047.561,
        notes: ['+5% Y/Y'],
        items: [
          { id: 'clear_aligners', label: 'Clear Aligners', value: 838.145, notes: ['+6% Y/Y'] },
          { id: 'systems_services', label: 'Systems & Services', value: 209.416, notes: ['+4% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 363.974 },
        operatingExpenses: {
          total: 528.263,
          items: [
            { id: 'sga', label: 'SG&A', value: 441.676, notes: ['42% of revenue', '(1pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 83.036, notes: ['8% of revenue', '(2pp) Y/Y'] },
            { id: 'restructuring', label: 'Restructuring', value: 3.551, notes: ['0% of revenue', '(3pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 40.835 },
      },
      otherIncome: {
        total: 21.271,
        items: [{ id: 'other_income', label: 'Other', value: 21.271 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 683.587, notes: ['65% margin', '(5pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 155.324, notes: ['15% margin', '+0pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 135.76, notes: ['13% margin', '+3pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +5%'],
            items: [
              { id: 'clear_aligners', label: '透明矫治器', notes: ['同比 +6%'] },
              { id: 'systems_services', label: '系统与服务', notes: ['同比 +4%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售及管理费用', notes: ['占收入 42%', '同比 (1 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 8%', '同比 (2 个百分点)'] },
                { id: 'restructuring', label: '重组', notes: ['占收入 0%', '同比 (3 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 65%', '同比 (5 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 15%', '同比 +0 个百分点'] },
            net: { label: '净利润', notes: ['利润率 13%', '同比 +3 个百分点'] },
          },
        },
      },
    }
  );
})(window);
