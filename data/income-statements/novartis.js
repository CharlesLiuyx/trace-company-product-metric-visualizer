/* Pure income-statement SSOT records. Financial data only. */
(function (global) {
  'use strict';
  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] });
  ssot.records.push({
    key: 'novartis-q4-fy25',
    company: 'Novartis',
    period: 'Q4 FY25',
    periodNote: 'Quarter ended Dec. 31, 2025',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/novartis-q4-fy25.png',
    roundingTolerance: 0.6,
    revenue: {
      total: 13.3,
      notes: ['+1% Y/Y'],
      items: [
        { id: 'cardiovascular_renal_metabolic', label: ['Cardiovascular,', 'renal & metabolic'], value: 1.6, notes: ['(33%) Y/Y'] },
        { id: 'immunology', label: 'Immunology', value: 2.7, notes: ['+13% Y/Y'] },
        { id: 'neuroscience', label: 'Neuroscience', value: 1.6, notes: ['+26% Y/Y'] },
        { id: 'oncology', label: 'Oncology', value: 4.3, notes: ['+11% Y/Y'] },
        { id: 'established_brands', label: 'Established brands', value: 3.1, notes: ['(3%) Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 3.6 },
      operatingExpenses: {
        total: 6.6,
        items: [
          { id: 'sga', label: 'SG&A', value: 3.4, notes: ['26% of revenue', '+2pp Y/Y'] },
          { id: 'rnd', label: 'R&D', value: 3.2, notes: ['24% of revenue', '+6pp Y/Y'] },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.8 },
    },
    otherIncome: { total: 0, items: [] },
    otherExpenses: { total: 0.4, items: [{ id: 'other_expenses', label: 'Other', value: 0.4 }] },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 10.2, notes: ['77% margin', '+13pp Y/Y', 'Source chart includes a $0.5B Other reconciliation in the displayed gross-profit node.'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 3.6, notes: ['27% margin', '+6pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 2.4, notes: ['18% margin', '+1% Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2025 财年第四季度',
        periodNote: '截至 2025 年 12 月 31 日的季度',
        revenue: { notes: ['同比 +1%'], items: [
          { label: ['心血管、肾脏', '与代谢'], notes: ['同比 (33%)'] }, { label: '免疫学', notes: ['同比 +13%'] },
          { label: '神经科学', notes: ['同比 +26%'] }, { label: '肿瘤学', notes: ['同比 +11%'] }, { label: '成熟品牌', notes: ['同比 (3%)'] },
        ] },
        costs: { costOfRevenue: { label: '销售成本' }, operatingExpenses: { items: [
          { label: '销售、一般及行政费用', notes: ['占收入 26%', '同比 +2 个百分点'] }, { label: '研发', notes: ['占收入 24%', '同比 +6 个百分点'] },
        ] }, tax: { label: '税费' } },
        otherExpenses: { items: [{ label: '其他' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 77%', '同比 +13 个百分点', '来源图的毛利润节点含 5 亿美元“其他”调节项。'] },
          operating: { label: '营业利润', notes: ['利润率 27%', '同比 +6 个百分点'] },
          net: { label: '净利润', notes: ['利润率 18%', '同比 +1%'] },
        },
      },
    },
  });
  ssot.records.push({
    key: 'novartis-q1-fy26',
    company: 'Novartis',
    period: 'Q1 FY26',
    periodNote: 'Quarter ended Mar. 31, 2026',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/novartis-q1-fy26.png',
    roundingTolerance: 0.6,
    revenue: {
      total: 13.1,
      notes: ['(1%) Y/Y'],
      items: [
        { id: 'cardiovascular_renal_metabolic', label: ['Cardiovascular,', 'renal & metabolic'], value: 1.8, notes: ['(30%) Y/Y'] },
        { id: 'immunology', label: 'Immunology', value: 2.5, notes: ['+2% Y/Y'] },
        { id: 'neuroscience', label: 'Neuroscience', value: 1.6, notes: ['+20% Y/Y'] },
        { id: 'oncology', label: 'Oncology', value: 4.0, notes: ['+39% Y/Y'] },
        { id: 'established_brands', label: 'Established brands', value: 3.3, notes: ['(20%) Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 3.5 },
      operatingExpenses: {
        total: 5.9,
        items: [
          { id: 'sga', label: 'SG&A', value: 3.1, notes: ['24% of revenue', '+1pp Y/Y'] },
          { id: 'rnd', label: 'R&D', value: 2.7, notes: ['21% of revenue', '+3pp Y/Y'] },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.7 },
    },
    operatingOtherIncome: {
      total: 0.1,
      items: [{ id: 'other_operating_income', label: 'Other', value: 0.1 }],
    },
    otherIncome: { total: 0, items: [] },
    otherExpenses: { total: 0.4, items: [{ id: 'other_expenses', label: 'Other', value: 0.4 }] },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 10.1, notes: ['77% margin', '+13pp Y/Y', 'Source chart displays a rounded $0.4B Other revenues reconciliation.'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 4.2, notes: ['32% margin', '+11pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 3.2, notes: ['24% margin', '+7% Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2026 财年第一季度',
        periodNote: '截至 2026 年 3 月 31 日的季度',
        revenue: { notes: ['同比 (1%)'], items: [
          { label: ['心血管、肾脏', '与代谢'], notes: ['同比 (30%)'] }, { label: '免疫学', notes: ['同比 +2%'] },
          { label: '神经科学', notes: ['同比 +20%'] }, { label: '肿瘤学', notes: ['同比 +39%'] }, { label: '成熟品牌', notes: ['同比 (20%)'] },
        ] },
        costs: { costOfRevenue: { label: '销售成本' }, operatingExpenses: { items: [
          { label: '销售、一般及行政费用', notes: ['占收入 24%', '同比 +1 个百分点'] }, { label: '研发', notes: ['占收入 21%', '同比 +3 个百分点'] },
        ] }, tax: { label: '税费' } },
        operatingOtherIncome: { items: [{ label: '其他' }] },
        otherExpenses: { items: [{ label: '其他' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 77%', '同比 +13 个百分点', '来源图的毛利润含 4 亿美元“其他收入”调节项。'] },
          operating: { label: '营业利润', notes: ['利润率 32%', '同比 +11 个百分点'] },
          net: { label: '净利润', notes: ['利润率 24%', '同比 +7%'] },
        },
      },
    },
  });
})(window);
