/* Pure income-statement SSOT records. Financial data only. */
(function (global) {
  'use strict';
  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] });
  ssot.records.push({
    key: 'pfizer-q4-fy25',
    company: 'Pfizer',
    period: 'Q4 FY25',
    periodNote: 'Quarter ended Dec. 31, 2025',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/pfizer-q4-fy25.png',
    roundingTolerance: 0.2,
    revenue: {
      total: 17.6,
      notes: ['(1%) Y/Y'],
      items: [
        { id: 'primary_care', label: ['Primary', 'Care'], value: 7.9, notes: ['(11%) Y/Y'] },
        { id: 'specialty_care', label: ['Specialty', 'Care'], value: 4.8, notes: ['+8% Y/Y'] },
        { id: 'oncology', label: 'Oncology', value: 4.4, notes: ['+9% Y/Y'] },
        { id: 'business_innovation', label: ['Business', 'innovation'], value: 0.4, notes: ['+26% Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 5.3 },
      operatingExpenses: {
        total: 13.9,
        items: [
          { id: 'other', label: 'Other', value: 5.1, notes: ['29% of revenue', '+12pp Y/Y'] },
          { id: 'sga', label: 'SG&A', value: 4.2, notes: ['24% of revenue', '(0pp) Y/Y'] },
          { id: 'rnd', label: 'R&D', value: 3.4, notes: ['19% of revenue', '+1pp Y/Y'] },
          { id: 'amortization', label: 'Amortization', value: 1.2, notes: ['7% of revenue', '(1pp) Y/Y'] },
        ],
      },
      tax: { label: 'Tax', value: 0, notes: ['No separate tax line is shown in the source chart.'] },
    },
    otherIncome: { total: 0, items: [] },
    otherExpenses: { total: 0, items: [] },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 12.3, notes: ['70% margin', '+3pp Y/Y'] },
      operating: { id: 'operating_loss', label: 'Operating loss', value: -1.6, notes: ['(9%) margin', '(9pp) Y/Y'] },
      net: { id: 'operating_loss', label: 'Operating loss', value: -1.6, notes: ['No separate net income or net loss line is shown in the source chart.'] },
    },
    i18n: {
      zh: {
        period: '2025 财年第四季度', periodNote: '截至 2025 年 12 月 31 日的季度',
        revenue: { notes: ['同比 (1%)'], items: [
          { label: ['初级', '医疗'], notes: ['同比 (11%)'] }, { label: ['专科', '医疗'], notes: ['同比 +8%'] },
          { label: '肿瘤', notes: ['同比 +9%'] }, { label: ['业务', '创新'], notes: ['同比 +26%'] },
        ] },
        costs: { costOfRevenue: { label: '销售成本' }, operatingExpenses: { items: [
          { label: '其他', notes: ['占收入 29%', '同比 +12 个百分点'] }, { label: '销售、一般及行政费用', notes: ['占收入 24%', '同比 (0 个百分点)'] },
          { label: '研发', notes: ['占收入 19%', '同比 +1 个百分点'] }, { label: '摊销', notes: ['占收入 7%', '同比 (1 个百分点)'] },
        ] }, tax: { label: '税费', notes: ['来源图未显示单独的税费项目。'] } },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 70%', '同比 +3 个百分点'] },
          operating: { label: '营业亏损', notes: ['利润率 (9%)', '同比 (9 个百分点)'] },
          net: { label: '营业亏损', notes: ['来源图未单独显示净利润或净亏损项目。'] },
        },
      },
    },
  });
  ssot.records.push({
    key: 'pfizer-q1-fy26',
    company: 'Pfizer',
    period: 'Q1 FY26',
    periodNote: 'Quarter ended Mar. 31, 2026',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/pfizer-q1-fy26.png',
    roundingTolerance: 0.2,
    revenue: {
      total: 14.5,
      notes: ['+5% Y/Y'],
      items: [
        { id: 'primary_care', label: ['Primary', 'Care'], value: 5.5, notes: ['(3%) Y/Y'] },
        { id: 'specialty_care', label: ['Specialty', 'Care'], value: 2.9, notes: ['+12% Y/Y'] },
        { id: 'oncology', label: 'Oncology', value: 3.8, notes: ['+10% Y/Y'] },
        { id: 'hospital_biosimilars', label: ['Hospital', '& Biosimilars'], value: 1.9, notes: ['+13% Y/Y'] },
        { id: 'business_innovation', label: ['Business', 'innovation'], value: 0.3, notes: ['+6% Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 3.5 },
      operatingExpenses: {
        total: 7.7,
        items: [
          { id: 'sga', label: 'SG&A', value: 3.0, notes: ['20% of revenue', '(2pp) Y/Y'] },
          { id: 'rnd', label: 'R&D', value: 2.6, notes: ['18% of revenue', '+2pp Y/Y'] },
          { id: 'amortization', label: 'Amortization', value: 1.2, notes: ['8% of revenue', '(1pp) Y/Y'] },
          { id: 'other', label: 'Other', value: 1.0 },
        ],
      },
      tax: { id: 'tax_and_other', label: 'Tax & other', value: 0.5 },
    },
    otherIncome: { total: 0, items: [] },
    otherExpenses: { total: 0, items: [] },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 10.9, notes: ['75% margin', '(4pp) Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 3.2, notes: ['22% margin', '+2pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 2.7, notes: ['19% Y/Y', '(3pp) Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2026 财年第一季度', periodNote: '截至 2026 年 3 月 31 日的季度',
        revenue: { notes: ['同比 +5%'], items: [
          { label: ['初级', '医疗'], notes: ['同比 (3%)'] }, { label: ['专科', '医疗'], notes: ['同比 +12%'] },
          { label: '肿瘤', notes: ['同比 +10%'] }, { label: ['医院及', '生物类似药'], notes: ['同比 +13%'] }, { label: ['业务', '创新'], notes: ['同比 +6%'] },
        ] },
        costs: { costOfRevenue: { label: '销售成本' }, operatingExpenses: { items: [
          { label: '销售、一般及行政费用', notes: ['占收入 20%', '同比 (2 个百分点)'] }, { label: '研发', notes: ['占收入 18%', '同比 +2 个百分点'] },
          { label: '摊销', notes: ['占收入 8%', '同比 (1 个百分点)'] }, { label: '其他' },
        ] }, tax: { label: '税费及其他' } },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 75%', '同比 (4 个百分点)'] },
          operating: { label: '营业利润', notes: ['利润率 22%', '同比 +2 个百分点'] },
          net: { label: '净利润', notes: ['同比 19%', '同比 (3 个百分点)'] },
        },
      },
    },
  });
})(window);
