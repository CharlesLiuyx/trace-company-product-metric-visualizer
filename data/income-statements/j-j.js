/* Pure income-statement SSOT records. Financial data only. */
(function (global) {
  'use strict';
  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] });
  ssot.records.push({
    key: 'j-j-q4-fy25',
    company: 'Johnson & Johnson',
    period: 'Q4 FY25',
    periodNote: 'Quarter ended Dec. 31, 2025',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/j-j-q4-fy25.png',
    roundingTolerance: 0.2,
    revenue: {
      total: 24.6,
      notes: ['+9% Y/Y'],
      items: [
        { id: 'innovative_medicine', label: 'Innovative Medicine', value: 15.8, notes: ['+10% Y/Y'] },
        { id: 'medtech', label: 'MedTech', value: 8.8, notes: ['+7% Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_products_sold', label: 'Cost of products sold', value: 8.0 },
      operatingExpenses: {
        total: 11.2,
        notes: ['Displayed expense components total $11.3B because the source chart rounds individual components.'],
        items: [
          { id: 'sga', label: 'Sales, marketing & administrative', value: 6.8, notes: ['29% of revenue', '(1pp) Y/Y'] },
          { id: 'rnd', label: 'R&D', value: 4.3, notes: ['17% of revenue', '(6pp) Y/Y'] },
          { id: 'other_opex', label: 'Other', value: 0.2 },
        ],
      },
      tax: { label: 'Tax', value: 0, notes: ['The source chart shows a $0.2B tax benefit rather than a tax expense.'] },
    },
    otherIncome: {
      total: 0.2,
      items: [{ id: 'tax_benefit', label: 'Tax benefit', value: 0.2 }],
    },
    otherExpenses: {
      total: 0.5,
      items: [{ id: 'other_nonoperating', label: 'Other', value: 0.5 }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 16.6, notes: ['68% margin', '(1pp) Y/Y'] },
      operating: { id: 'pretax_income', label: 'Pretax income', value: 5.4, notes: ['22% margin', '+5pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net income', value: 5.1, notes: ['21% margin', '+6pp Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2025 财年第四季度',
        periodNote: '截至 2025 年 12 月 31 日的季度',
        revenue: {
          notes: ['同比 +9%'],
          items: [
            { label: '创新制药', notes: ['同比 +10%'] },
            { label: '医疗科技', notes: ['同比 +7%'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '产品销售成本' },
          operatingExpenses: {
            notes: ['由于来源图对单项进行四舍五入，展示的费用项目合计为 $11.3B。'],
            items: [
              { label: '销售、市场及行政费用', notes: ['占收入 29%', '同比 (1 个百分点)'] },
              { label: '研发', notes: ['占收入 17%', '同比 (6 个百分点)'] },
              { label: '其他' },
            ],
          },
          tax: { label: '税费', notes: ['来源图展示 $0.2B 的税收收益，而非税费。'] },
        },
        otherIncome: { items: [{ label: '税收收益' }] },
        otherExpenses: { items: [{ label: '其他' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 68%', '同比 (1 个百分点)'] },
          operating: { label: '税前利润', notes: ['利润率 22%', '同比 +5 个百分点'] },
          net: { label: '净利润', notes: ['利润率 21%', '同比 +6 个百分点'] },
        },
      },
    },
  });
})(window);
