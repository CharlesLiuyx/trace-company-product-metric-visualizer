/* Pure income-statement SSOT records. Financial data only. */
(function (global) {
  'use strict';
  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] });
  ssot.records.push({
    key: 'merck-q4-fy25',
    company: 'Merck',
    period: 'Q4 FY25',
    periodNote: 'Quarter ended Dec. 31, 2025',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/merck-q4-fy25.png',
    roundingTolerance: 0.2,
    revenue: {
      total: 16.4,
      notes: ['+5% Y/Y'],
      items: [
        {
          id: 'pharma',
          label: 'Pharma',
          value: 14.8,
          notes: ['+6% Y/Y'],
          children: [
            { id: 'oncology', label: 'Oncology', value: 9.4, notes: ['+8% Y/Y'] },
            { id: 'vaccines', label: 'Vaccines', value: 2.2, notes: ['(12%) Y/Y'] },
            { id: 'hospital_acute_care', label: ['Hospital', 'Acute Care'], value: 0.9, notes: ['+4% Y/Y'] },
            { id: 'diabetes', label: 'Diabetes', value: 0.5, notes: ['+3% Y/Y'] },
            { id: 'other_pharma', label: 'Other', value: 1.8, notes: ['+26% Y/Y'] },
          ],
        },
        { id: 'animal_health', label: 'Animal Health', value: 1.5, notes: ['+8% Y/Y'] },
        { id: 'other_revenue', label: 'Other', value: 0.1, notes: ['(72%) Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 5.6 },
      operatingExpenses: {
        total: 7.4,
        items: [
          { id: 'rnd', label: 'R&D', value: 3.9, notes: ['24% of revenue', '(6pp) Y/Y'] },
          { id: 'sga', label: 'SG&A', value: 2.9, notes: ['18% of revenue', '(1pp) Y/Y'] },
          { id: 'other_opex', label: 'Other', value: 0.6 },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.5 },
    },
    otherIncome: { total: 0, items: [] },
    otherExpenses: { total: 0, items: [] },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 10.8, notes: ['66% margin', '(9pp) Y/Y'] },
      operating: { id: 'pretax_profit', label: 'Pretax profit', value: 3.4, notes: ['21% margin', '(6pp) Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 3.0, notes: ['33% margin', '+15pp Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2025 财年第四季度',
        periodNote: '截至 2025 年 12 月 31 日的季度',
        revenue: {
          notes: ['同比 +5%'],
          items: [
            {
              label: '制药业务',
              notes: ['同比 +6%'],
              children: [
                { label: '肿瘤', notes: ['同比 +8%'] },
                { label: '疫苗', notes: ['同比 (12%)'] },
                { label: ['医院', '急症护理'], notes: ['同比 +4%'] },
                { label: '糖尿病', notes: ['同比 +3%'] },
                { label: '其他', notes: ['同比 +26%'] },
              ],
            },
            { label: '动物保健', notes: ['同比 +8%'] },
            { label: '其他', notes: ['同比 (72%)'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '销售成本' },
          operatingExpenses: { items: [
            { label: '研发', notes: ['占收入 24%', '同比 (6 个百分点)'] },
            { label: '销售、一般及管理费用', notes: ['占收入 18%', '同比 (1 个百分点)'] },
            { label: '其他' },
          ] },
          tax: { label: '税费' },
        },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 66%', '同比 (9 个百分点)'] },
          operating: { label: '税前利润', notes: ['利润率 21%', '同比 (6 个百分点)'] },
          net: { label: '净利润', notes: ['利润率 33%', '同比 +15 个百分点'] },
        },
      },
    },
  });
})(window);
