/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/<dataset-key>.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'novo-nordisk-q3-fy25',
    company: 'Novo Nordisk',
    period: 'Q3 FY25',
    periodNote: 'Ending Sep. 2025',
    currency: 'DKK',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/novo-nordisk-q3-fy25.png',
    roundingTolerance: 0.15,
    revenue: {
      total: 75.0,
      notes: ['+5% Y/Y'],
      items: [
        {
          id: 'diabetes_care', label: 'Diabetes care', value: 49.1, notes: ['+3% Y/Y'],
          children: [
            { id: 'glp1', label: 'GLP-1', value: 36.7, notes: ['+5% Y/Y'] },
            { id: 'insulin', label: 'Insulin', value: 12.0, notes: ['(4%) Y/Y'] },
            { id: 'other_diabetes', label: 'Other diabetes', value: 0.4, notes: ['(14%) Y/Y'] },
          ],
        },
        { id: 'obesity_care', label: 'Obesity care', value: 21.1, notes: ['+12% Y/Y'] },
        { id: 'rare_disease', label: 'Rare disease', value: 4.7, notes: ['+3% Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 17.9 },
      operatingExpenses: {
        total: 33.3,
        items: [
          { id: 'sales_distribution', label: 'Sales & Distribution', value: 16.0, notes: ['21% of revenue', '+0pp Y/Y'] },
          { id: 'rnd', label: 'R&D', value: 15.4, notes: ['21% of revenue', '+7pp Y/Y'] },
          { id: 'admin_other', label: 'Admin & Other', value: 2.0 },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 5.5 },
    },
    otherIncome: { total: 1.8, items: [{ id: 'other_income', label: 'Other', value: 1.8 }] },
    otherExpenses: { total: 0, items: [] },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 57.1, notes: ['76% margin', '(8pp) Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 23.7, notes: ['32% margin', '(16pp) Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 20.0, notes: ['27% margin', '(12pp) Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2025 财年第三季度', periodNote: '截至 2025 年 9 月',
        revenue: { notes: ['同比 +5%'], items: [
          { id: 'diabetes_care', label: '糖尿病护理', notes: ['同比 +3%'], children: [
            { id: 'glp1', label: 'GLP-1', notes: ['同比 +5%'] }, { id: 'insulin', label: '胰岛素', notes: ['同比 (4%)'] }, { id: 'other_diabetes', label: '其他糖尿病业务', notes: ['同比 (14%)'] },
          ] },
          { id: 'obesity_care', label: '肥胖症护理', notes: ['同比 +12%'] }, { id: 'rare_disease', label: '罕见病', notes: ['同比 +3%'] },
        ] },
        costs: { costOfRevenue: { label: '销售成本' }, operatingExpenses: { items: [
          { id: 'sales_distribution', label: '销售与分销', notes: ['占收入 21%', '同比 +0 个百分点'] }, { id: 'rnd', label: '研发', notes: ['占收入 21%', '同比 +7 个百分点'] }, { id: 'admin_other', label: '管理及其他' },
        ] }, tax: { label: '税费' } },
        otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
        profit: { gross: { label: '毛利润', notes: ['利润率 76%', '同比 (8 个百分点)'] }, operating: { label: '营业利润', notes: ['利润率 32%', '同比 (16 个百分点)'] }, net: { label: '净利润', notes: ['利润率 27%', '同比 (12 个百分点)'] } },
      },
    },
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

  ssot.records.push({
    key: 'novo-nordisk-q1-fy26',
    company: 'Novo Nordisk',
    period: 'Q1 FY26',
    periodNote: 'Ending Mar. 2026',
    currency: 'DKK',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/novo-nordisk-q1-fy26.png',
    roundingTolerance: 0.15,
    revenue: {
      total: 96.8,
      notes: ['+24% Y/Y'],
      items: [
        {
          id: 'diabetes_care', label: 'Diabetes care', value: 68.0, notes: ['+25% Y/Y'],
          children: [
            { id: 'glp1', label: 'GLP-1', value: 48.7, notes: ['+23% Y/Y'] },
            { id: 'insulin', label: 'Insulin', value: 18.8, notes: ['+25% Y/Y'] },
            { id: 'other_diabetes', label: 'Other diabetes', value: 0.6, notes: ['+18% Y/Y'] },
          ],
        },
        { id: 'obesity_care', label: 'Obesity care', value: 23.3, notes: ['+27% Y/Y'] },
        { id: 'rare_disease', label: 'Rare disease', value: 5.5, notes: ['+18% Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 13.6 },
      operatingExpenses: {
        total: 23.6,
        items: [
          { id: 'sales_distribution', label: 'Sales & Distribution', value: 12.0, notes: ['12% of revenue', '(7pp) Y/Y'] },
          { id: 'rnd', label: 'R&D', value: 10.3, notes: ['11% of revenue', '(3pp) Y/Y'] },
          { id: 'admin_other', label: 'Admin & Other', value: 1.2 },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 13.6 },
    },
    otherIncome: { total: 2.6, items: [{ id: 'other_income', label: 'Other', value: 2.6 }] },
    otherExpenses: { total: 0, items: [] },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 83.2, notes: ['86% margin', '+2pp Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 59.6, notes: ['62% margin', '+12pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 48.6, notes: ['50% margin', '+13pp Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2026 财年第一季度', periodNote: '截至 2026 年 3 月',
        revenue: { notes: ['同比 +24%'], items: [
          { id: 'diabetes_care', label: '糖尿病护理', notes: ['同比 +25%'], children: [
            { id: 'glp1', label: 'GLP-1', notes: ['同比 +23%'] }, { id: 'insulin', label: '胰岛素', notes: ['同比 +25%'] }, { id: 'other_diabetes', label: '其他糖尿病业务', notes: ['同比 +18%'] },
          ] },
          { id: 'obesity_care', label: '肥胖症护理', notes: ['同比 +27%'] }, { id: 'rare_disease', label: '罕见病', notes: ['同比 +18%'] },
        ] },
        costs: { costOfRevenue: { label: '销售成本' }, operatingExpenses: { items: [
          { id: 'sales_distribution', label: '销售与分销', notes: ['占收入 12%', '同比 (7 个百分点)'] }, { id: 'rnd', label: '研发', notes: ['占收入 11%', '同比 (3 个百分点)'] }, { id: 'admin_other', label: '管理及其他' },
        ] }, tax: { label: '税费' } },
        otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
        profit: { gross: { label: '毛利润', notes: ['利润率 86%', '同比 +2 个百分点'] }, operating: { label: '营业利润', notes: ['利润率 62%', '同比 +12 个百分点'] }, net: { label: '净利润', notes: ['利润率 50%', '同比 +13 个百分点'] } },
      },
    },
  });
})(window);
