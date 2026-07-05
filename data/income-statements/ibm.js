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
      key: 'ibm-q1-fy26',
      company: 'IBM',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/ibm-q1-fy26.png',
      roundingTolerance: 0.2,
      revenue: {
        total: 15.9,
        notes: ['+9% Y/Y'],
        items: [
          { id: 'software', label: 'Software', value: 7.1, notes: ['+11% Y/Y', '83% gross margin'] },
          { id: 'consulting', label: 'Consulting', value: 5.3, notes: ['+4% Y/Y', '28% gross margin'] },
          { id: 'infrastructure', label: 'Infrastructure', value: 3.3, notes: ['+15% Y/Y', '57% gross margin'] },
          { id: 'financing', label: 'Financing', value: 0.2, notes: ['+15% Y/Y', '43% gross margin'] },
          { id: 'other_revenue', label: 'Other', value: 0.048, notes: ['$48M'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 7.0 },
        operatingExpenses: {
          total: 7.1,
          notes: ['SG&A and R&D are offset by $0.2B of intellectual property income in the source chart.'],
          items: [
            { id: 'sga', label: 'SG&A', value: 5.1, notes: ['32% of revenue', '(2pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 2.2, notes: ['14% of revenue', '+0pp Y/Y'] },
            { id: 'intellectual_property', label: 'Intellectual property income offset', value: -0.2, notes: ['Shown as +$0.2B income in the source chart.'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.2 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.5,
        items: [{ id: 'interest', label: 'Interest', value: 0.5 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 9.0, notes: ['56% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.9, notes: ['12% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.2, notes: ['8% margin', '+0pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +9%'],
            items: [
              { id: 'software', label: '软件', notes: ['同比 +11%', '毛利率 83%'] },
              { id: 'consulting', label: '咨询', notes: ['同比 +4%', '毛利率 28%'] },
              { id: 'infrastructure', label: '基础设施', notes: ['同比 +15%', '毛利率 57%'] },
              { id: 'financing', label: '融资', notes: ['同比 +15%', '毛利率 43%'] },
              { id: 'other_revenue', label: '其他', notes: ['$48M'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 32%', '同比 (2 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 14%', '同比 +0 个百分点'] },
                { id: 'intellectual_property', label: '知识产权收入抵减', notes: ['来源图显示为 +$0.2B 收入。'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [
              { id: 'interest', label: '利息' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 56%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 12%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 8%', '同比 +0 个百分点'] },
          },
        },
      },
    }
  );
})(window);
