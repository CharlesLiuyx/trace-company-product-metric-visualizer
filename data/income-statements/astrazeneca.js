/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/<dataset-key>.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'astrazeneca-q3-fy25',
    company: 'AstraZeneca',
    period: 'Q3 FY25',
    periodNote: 'Ending Sep. 2025',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/astrazeneca-q3-fy25.png',
    roundingTolerance: 0.25,
    revenue: {
      total: 15.2,
      notes: ['+12% Y/Y'],
      items: [
        { id: 'oncology', label: 'Oncology', value: 6.6, notes: ['+19% Y/Y'] },
        { id: 'cvrm', label: ['Cardiovascular,', 'Renal & Metabolism'], value: 3.2, notes: ['+2% Y/Y'] },
        { id: 'respiratory_immunology', label: ['Respiratory &', 'Immunology'], value: 2.3, notes: ['+15% Y/Y'] },
        { id: 'vaccines_immuno_oncology', label: ['Vaccines &', 'Immuno-Oncology'], value: 0.4, notes: ['(10%) Y/Y'] },
        { id: 'rare_disease', label: 'Rare Disease', value: 2.4, notes: ['+12% Y/Y'] },
        { id: 'other_medicines', label: 'Other medicines', value: 0.2, notes: ['(10%) Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 2.8 },
      operatingExpenses: {
        total: 8.9,
        items: [
          { id: 'sga', label: 'SG&A', value: 5.1, notes: ['33% of revenue', '(4pp) Y/Y'] },
          { id: 'rnd', label: 'R&D', value: 3.7, notes: ['24% of revenue', '+1pp Y/Y'] },
          { id: 'opex_other', label: 'Other', value: 0.1, notes: ['1% of revenue', '(0pp) Y/Y'] },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.7 },
    },
    operatingOtherIncome: {
      total: 0.1,
      items: [{ id: 'operating_other_income', label: 'Other', value: 0.1 }],
    },
    otherIncome: { total: 0, items: [] },
    otherExpenses: {
      total: 0.3,
      items: [{ id: 'other_expenses', label: 'Other', value: 0.3 }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 12.4, notes: ['82% margin', '+4pp Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 3.6, notes: ['24% margin', '+8pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 2.5, notes: ['17% margin', '+6% Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2025 财年第三季度', periodNote: '截至 2025 年 9 月',
        revenue: { notes: ['同比 +12%'], items: [
          { label: '肿瘤', notes: ['同比 +19%'] }, { label: ['心血管、肾脏', '与代谢'], notes: ['同比 +2%'] },
          { label: ['呼吸与', '免疫'], notes: ['同比 +15%'] }, { label: ['疫苗与', '免疫肿瘤'], notes: ['同比 (10%)'] },
          { label: '罕见病', notes: ['同比 +12%'] }, { label: '其他药品', notes: ['同比 (10%)'] },
        ] },
        costs: { costOfRevenue: { label: '销售成本' }, operatingExpenses: { items: [
          { label: '销售、一般及行政费用', notes: ['占收入 33%', '同比 (4 个百分点)'] },
          { label: '研发', notes: ['占收入 24%', '同比 +1 个百分点'] }, { label: '其他', notes: ['占收入 1%', '同比 (0 个百分点)'] },
        ] }, tax: { label: '税费' } },
        operatingOtherIncome: { items: [{ label: '其他' }] }, otherExpenses: { items: [{ label: '其他' }] },
        profit: { gross: { label: '毛利润', notes: ['利润率 82%', '同比 +4 个百分点'] }, operating: { label: '营业利润', notes: ['利润率 24%', '同比 +8 个百分点'] }, net: { label: '净利润', notes: ['利润率 17%', '同比 +6%'] } },
      },
    },
  });

  ssot.records.push({
    key: 'astrazeneca-q4-fy25',
    company: 'AstraZeneca',
    period: 'Q4 FY25',
    periodNote: 'Ending Dec. 2025',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/astrazeneca-q4-fy25.png',
    roundingTolerance: 0.25,
    revenue: {
      total: 15.5,
      notes: ['+4% Y/Y'],
      items: [
        { id: 'oncology', label: 'Oncology', value: 7.0, notes: ['+22% Y/Y'] },
        { id: 'cvrm', label: ['Cardiovascular,', 'Renal & Metabolism'], value: 3.1, notes: ['(3%) Y/Y'] },
        { id: 'respiratory_immunology', label: ['Respiratory &', 'Immunology'], value: 2.4, notes: ['+12% Y/Y'] },
        { id: 'vaccines_immuno_oncology', label: ['Vaccines &', 'Immuno-Oncology'], value: 0.4, notes: ['(32%) Y/Y'] },
        { id: 'rare_disease', label: 'Rare Disease', value: 2.4, notes: ['(0%) Y/Y'] },
        { id: 'other_medicines', label: 'Other medicines', value: 0.2, notes: ['(7%) Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 3.1 },
      operatingExpenses: {
        total: 9.5,
        items: [
          { id: 'sga', label: 'SG&A', value: 5.5, notes: ['35% of revenue', '(1pp) Y/Y'] },
          { id: 'rnd', label: 'R&D', value: 3.9, notes: ['25% of revenue', '(6pp) Y/Y'] },
          { id: 'opex_other', label: 'Other', value: 0.2, notes: ['1% of revenue', '+0pp Y/Y'] },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.3 },
    },
    operatingOtherIncome: {
      total: 0.1,
      items: [{ id: 'operating_other_income', label: 'Other', value: 0.1 }],
    },
    otherIncome: { total: 0, items: [] },
    otherExpenses: {
      total: 0.3,
      items: [{ id: 'other_expenses', label: 'Other', value: 0.3 }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 12.4, notes: ['80% margin', '(2pp) Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 3.0, notes: ['19% margin', '+6pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 2.3, notes: ['15% margin', '+5% Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2025 财年第四季度', periodNote: '截至 2025 年 12 月',
        revenue: { notes: ['同比 +4%'], items: [
          { label: '肿瘤', notes: ['同比 +22%'] }, { label: ['心血管、肾脏', '与代谢'], notes: ['同比 (3%)'] },
          { label: ['呼吸与', '免疫'], notes: ['同比 +12%'] }, { label: ['疫苗与', '免疫肿瘤'], notes: ['同比 (32%)'] },
          { label: '罕见病', notes: ['同比 (0%)'] }, { label: '其他药品', notes: ['同比 (7%)'] },
        ] },
        costs: { costOfRevenue: { label: '销售成本' }, operatingExpenses: { items: [
          { label: '销售、一般及行政费用', notes: ['占收入 35%', '同比 (1 个百分点)'] },
          { label: '研发', notes: ['占收入 25%', '同比 (6 个百分点)'] }, { label: '其他', notes: ['占收入 1%', '同比 +0 个百分点'] },
        ] }, tax: { label: '税费' } },
        operatingOtherIncome: { items: [{ label: '其他' }] }, otherExpenses: { items: [{ label: '其他' }] },
        profit: { gross: { label: '毛利润', notes: ['利润率 80%', '同比 (2 个百分点)'] }, operating: { label: '营业利润', notes: ['利润率 19%', '同比 +6 个百分点'] }, net: { label: '净利润', notes: ['利润率 15%', '同比 +5%'] } },
      },
    },
  });
})(window);
