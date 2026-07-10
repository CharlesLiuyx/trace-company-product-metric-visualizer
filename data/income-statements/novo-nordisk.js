/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/<dataset-key>.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'novo-nordisk-q4-fy25',
    company: 'Novo Nordisk',
    period: 'Q4 FY25',
    periodNote: 'Ending Dec. 2025',
    currency: 'DKK',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/novo-nordisk-q4-fy25.png',
    roundingTolerance: 0.15,
    revenue: {
      total: 79.1,
      notes: ['(8%) Y/Y'],
      items: [
        {
          id: 'diabetes_care', label: 'Diabetes care', value: 51.4, notes: ['(12%) Y/Y'],
          children: [
            { id: 'glp1', label: 'GLP-1', value: 37.5, notes: ['(11%) Y/Y'] },
            { id: 'insulin', label: 'Insulin', value: 13.4, notes: ['(16%) Y/Y'] },
            { id: 'other_diabetes', label: 'Other diabetes', value: 0.4, notes: ['(18%) Y/Y'] },
          ],
        },
        { id: 'obesity_care', label: 'Obesity care', value: 22.4, notes: ['+5% Y/Y'] },
        { id: 'rare_disease', label: 'Rare disease', value: 5.3, notes: ['(6%) Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 15.1 },
      operatingExpenses: {
        total: 32.3,
        items: [
          { id: 'sales_distribution', label: 'Sales & Distribution', value: 15.9, notes: ['20% of revenue', '(2pp) Y/Y'] },
          { id: 'rnd', label: 'R&D', value: 14.6, notes: ['19% of revenue', '+2pp Y/Y'] },
          { id: 'admin_other', label: 'Admin & Other', value: 1.7 },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 7.3 },
    },
    otherIncome: { total: 2.4, items: [{ id: 'other_income', label: 'Other', value: 2.4 }] },
    otherExpenses: { total: 0, items: [] },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 64.0, notes: ['81% margin', '(4pp) Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 31.7, notes: ['40% margin', '(3pp) Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 26.9, notes: ['34% margin', '+1pp Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2025 财年第四季度', periodNote: '截至 2025 年 12 月',
        revenue: { notes: ['同比 (8%)'], items: [
          { id: 'diabetes_care', label: '糖尿病护理', notes: ['同比 (12%)'], children: [
            { id: 'glp1', label: 'GLP-1', notes: ['同比 (11%)'] }, { id: 'insulin', label: '胰岛素', notes: ['同比 (16%)'] }, { id: 'other_diabetes', label: '其他糖尿病业务', notes: ['同比 (18%)'] },
          ] },
          { id: 'obesity_care', label: '肥胖症护理', notes: ['同比 +5%'] }, { id: 'rare_disease', label: '罕见病', notes: ['同比 (6%)'] },
        ] },
        costs: { costOfRevenue: { label: '销售成本' }, operatingExpenses: { items: [
          { id: 'sales_distribution', label: '销售与分销', notes: ['占收入 20%', '同比 (2 个百分点)'] }, { id: 'rnd', label: '研发', notes: ['占收入 19%', '同比 +2 个百分点'] }, { id: 'admin_other', label: '管理及其他' },
        ] }, tax: { label: '税费' } },
        otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
        profit: { gross: { label: '毛利润', notes: ['利润率 81%', '同比 (4 个百分点)'] }, operating: { label: '营业利润', notes: ['利润率 40%', '同比 (3 个百分点)'] }, net: { label: '净利润', notes: ['利润率 34%', '同比 +1 个百分点'] } },
      },
    },
  });
})(window);
