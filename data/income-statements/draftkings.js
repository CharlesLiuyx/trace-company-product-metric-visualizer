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
      key: 'draftkings-q1-fy26',
      company: 'DraftKings',
      period: 'Q1 FY26',
      periodNote: 'Three months ended Mar. 31, 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/draftkings-q1-fy26.png',
      roundingTolerance: 1.5,
      revenue: {
        total: 1646,
        notes: ['+17% Y/Y'],
        items: [
          { id: 'online_gaming', label: 'Online Gaming', value: 1095, notes: ['+24% Y/Y'] },
          { id: 'gaming_software', label: 'Gaming Software', value: 461, notes: ['+9% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 90, notes: ['(13%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 949 },
        operatingExpenses: {
          total: 691,
          items: [
            { id: 'sm', label: 'S&M', value: 402, notes: ['24% of revenue', '+0pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 166, notes: ['10% of revenue', '(2pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 123, notes: ['7% of revenue', '+0pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0 },
      },
      otherIncome: {
        total: 15,
        items: [{ id: 'other_income', label: 'Other', value: 15 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 697, notes: ['42% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 6, notes: ['0% margin', '+4pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 21, notes: ['1% margin', '+4pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月 31 日的三个月',
          revenue: {
            notes: ['同比 +17%'],
            items: [
              { id: 'online_gaming', label: '在线博彩', notes: ['同比 +24%'] },
              { id: 'gaming_software', label: '游戏软件', notes: ['同比 +9%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 (13%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 24%', '同比 +0 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 10%', '同比 (2 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 7%', '同比 +0 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 42%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 0%', '同比 +4 个百分点'] },
            net: { label: '净利润', notes: ['利润率 1%', '同比 +4 个百分点'] },
          },
        },
      },
    },
    {
      key: 'draftkings-q4-fy25',
      company: 'DraftKings',
      period: 'Q4 FY25',
      periodNote: 'Three months ended Dec. 31, 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/draftkings-q4-fy25.png',
      roundingTolerance: 1.5,
      revenue: {
        total: 1989,
        notes: ['+43% Y/Y'],
        items: [
          { id: 'online_gaming', label: 'Online Gaming', value: 1351, notes: ['+64% Y/Y'] },
          { id: 'gaming_software', label: 'Gaming Software', value: 500, notes: ['+17% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 138, notes: ['(3%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 1075 },
        operatingExpenses: {
          total: 763,
          items: [
            { id: 'sm', label: 'S&M', value: 443, notes: ['22% of revenue', '(4pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 187, notes: ['9% of revenue', '(6pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 134, notes: ['7% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 10 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 5,
        items: [{ id: 'other_expense', label: 'Other', value: 5 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 915, notes: ['46% margin', '+6pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 152, notes: ['8% of revenue', '+18pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 136, notes: ['7% of revenue', '+17pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月 31 日的三个月',
          revenue: {
            notes: ['同比 +43%'],
            items: [
              { id: 'online_gaming', label: '在线博彩', notes: ['同比 +64%'] },
              { id: 'gaming_software', label: '游戏软件', notes: ['同比 +17%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 (3%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 22%', '同比 (4 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 9%', '同比 (6 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 7%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'other_expense', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 46%', '同比 +6 个百分点'] },
            operating: { label: '营业利润', notes: ['占收入 8%', '同比 +18 个百分点'] },
            net: { label: '净利润', notes: ['占收入 7%', '同比 +17 个百分点'] },
          },
        },
      },
    }
  );
})(window);
