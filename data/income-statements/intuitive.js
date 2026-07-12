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
      key: 'intuitive-q4-fy25',
      company: 'Intuitive',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/intuitive-q4-fy25.png',
      roundingTolerance: 0.6,
      revenue: {
        total: 2866.2,
        notes: ['+19% Y/Y'],
        items: [
          { id: 'instruments_accessories', label: 'Instruments & Accessories', value: 1658.3, notes: ['+17% Y/Y'] },
          { id: 'systems', label: 'Systems', value: 785.9, notes: ['+20% Y/Y'] },
          { id: 'services', label: 'Services', value: 422.0, notes: ['+21% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 961.9,
          items: [
            { id: 'product', label: 'Product', value: 809.8 },
            { id: 'service', label: 'Service', value: 152.1 },
          ],
        },
        operatingExpenses: {
          total: 1040.0,
          items: [
            { id: 'sga', label: 'SG&A', value: 687.1, notes: ['24% of revenue', '(1pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 352.9, notes: ['12% of revenue', '+0pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 156.1 },
      },
      otherIncome: {
        total: 91.3,
        items: [{ id: 'other_income', label: 'Other', value: 91.3 }],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1904.3, notes: ['66% margin', '(2pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 864.3, notes: ['30% margin', '(0pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 799.5, notes: ['28% margin', '(1pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +19%'],
            items: [
              { id: 'instruments_accessories', label: '器械与配件', notes: ['同比 +17%'] },
              { id: 'systems', label: '系统', notes: ['同比 +20%'] },
              { id: 'services', label: '服务', notes: ['同比 +21%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [
                { id: 'product', label: '产品' },
                { id: 'service', label: '服务' },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售、一般及行政费用', notes: ['占收入 24%', '同比 (1 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 12%', '同比 +0 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 66%', '同比 (2 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 30%', '同比 (0 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 28%', '同比 (1 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
