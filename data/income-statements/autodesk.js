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
      key: 'autodesk-q4-fy26',
      company: 'Autodesk',
      period: 'Q4 FY26',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/autodesk-q4-fy26.png',
      roundingTolerance: 0.75,
      revenue: {
        total: 1957,
        notes: ['+19% Y/Y'],
        items: [
          { id: 'aec', label: 'Architecture, Engineering & Construction', value: 975, notes: ['+22% Y/Y'] },
          { id: 'autocad', label: 'AutoCAD', value: 478, notes: ['+17% Y/Y', 'Computer-aided design Including LT'] },
          { id: 'manufacturing', label: 'Manufacturing', value: 381, notes: ['+20% Y/Y'] },
          { id: 'media_entertainment', label: 'Media & Entertainment', value: 90, notes: ['+7% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 33, notes: ['+14% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 166 },
        operatingExpenses: {
          total: 1360,
          items: [
            { id: 'sm', label: 'S&M', value: 636, notes: ['32% of revenue', '+0pp Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 420, notes: ['21% of revenue', '(3pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 191, notes: ['10% of revenue', '(1pp) Y/Y'] },
            { id: 'other_expense', label: 'Other', value: 113, notes: ['6% of revenue', '+4pp Y/Y'] },
          ],
        },
        tax: { id: 'tax_other', label: 'Tax & Other', value: 115 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1791, notes: ['92% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 431, notes: ['22% margin', '(0pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 316, notes: ['16% margin', '(2pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第四季度',
          periodNote: '截至 2026 年 1 月',
          revenue: {
            notes: ['同比 +19%'],
            items: [
              { id: 'aec', label: '建筑、工程与施工', notes: ['同比 +22%'] },
              { id: 'autocad', label: 'AutoCAD 产品', notes: ['同比 +17%', '计算机辅助设计，包含 LT'] },
              { id: 'manufacturing', label: '制造', notes: ['同比 +20%'] },
              { id: 'media_entertainment', label: '媒体与娱乐', notes: ['同比 +7%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 +14%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: 'S&M 费用', notes: ['占收入 32%', '同比 +0 个百分点'] },
                { id: 'rnd', label: 'R&D 费用', notes: ['占收入 21%', '同比 (3 个百分点)'] },
                { id: 'ga', label: 'G&A 费用', notes: ['占收入 10%', '同比 (1 个百分点)'] },
                { id: 'other_expense', label: '其他', notes: ['占收入 6%', '同比 +4 个百分点'] },
              ],
            },
            tax: { label: '税费及其他' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 92%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 22%', '同比 (0 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 16%', '同比 (2 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'autodesk-q1-fy27',
      company: 'Autodesk',
      period: 'Q1 FY27',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/autodesk-q1-fy27.png',
      roundingTolerance: 0.75,
      revenue: {
        total: 1934,
        notes: ['+18% Y/Y'],
        items: [
          { id: 'aec', label: 'Architecture, Engineering & Construction', value: 970, notes: ['+20% Y/Y'] },
          { id: 'autocad', label: 'AutoCAD', value: 474, notes: ['+15% Y/Y', 'Computer-aided design Including LT'] },
          { id: 'manufacturing', label: 'Manufacturing', value: 367, notes: ['+26% Y/Y'] },
          { id: 'media_entertainment', label: 'Media & Entertainment', value: 86, notes: ['+13% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 37, notes: ['+32% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 175 },
        operatingExpenses: {
          total: 1218,
          items: [
            { id: 'sm', label: 'S&M', value: 593, notes: ['31% of revenue', '(4pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 421, notes: ['22% of revenue', '(2pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 162, notes: ['8% of revenue', '(2pp) Y/Y'] },
            { id: 'other_expense', label: 'Other', value: 42, notes: ['2% of revenue', '(5pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 108 },
      },
      otherIncome: {
        total: 58,
        items: [{ id: 'other_income', label: 'Other', value: 58 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1759, notes: ['91% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 541, notes: ['28% margin', '+14pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 491, notes: ['25% margin', '+16pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2027 财年第一季度',
          periodNote: '截至 2026 年 4 月',
          revenue: {
            notes: ['同比 +18%'],
            items: [
              { id: 'aec', label: '建筑、工程与施工', notes: ['同比 +20%'] },
              { id: 'autocad', label: 'AutoCAD 产品', notes: ['同比 +15%', '计算机辅助设计，包含 LT'] },
              { id: 'manufacturing', label: '制造', notes: ['同比 +26%'] },
              { id: 'media_entertainment', label: '媒体与娱乐', notes: ['同比 +13%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 +32%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: 'S&M 费用', notes: ['占收入 31%', '同比 (4 个百分点)'] },
                { id: 'rnd', label: 'R&D 费用', notes: ['占收入 22%', '同比 (2 个百分点)'] },
                { id: 'ga', label: 'G&A 费用', notes: ['占收入 8%', '同比 (2 个百分点)'] },
                { id: 'other_expense', label: '其他', notes: ['占收入 2%', '同比 (5 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 91%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 28%', '同比 +14 个百分点'] },
            net: { label: '净利润', notes: ['利润率 25%', '同比 +16 个百分点'] },
          },
        },
      },
    }
  );
})(window);
