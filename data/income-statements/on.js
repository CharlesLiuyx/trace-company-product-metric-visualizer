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
      key: 'on-q1-fy26',
      company: 'On',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: 'CHF',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/on-q1-fy26.png',
      roundingTolerance: 1,
      revenue: {
        total: 832,
        notes: ['+14% Y/Y'],
        items: [
          { id: 'shoes', label: 'Shoes', value: 764, notes: ['+12% Y/Y'] },
          { id: 'apparel', label: 'Apparel', value: 55, notes: ['+45% Y/Y'] },
          { id: 'accessories', label: 'Accessories', value: 13, notes: ['+70% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 298 },
        operatingExpenses: {
          total: 417,
          items: [{ id: 'operating_expenses', label: 'Operating expenses', value: 417 }],
        },
        tax: {
          id: 'other',
          label: 'Other',
          value: 14,
          notes: ['The source groups post-operating-profit deductions as Other.'],
        },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 534, notes: ['64% margin', '+4pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 117, notes: ['14% margin', '+4pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 103, notes: ['12% margin', '+5pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +14%'],
            items: [
              { id: 'shoes', label: '鞋类', notes: ['同比 +12%'] },
              { id: 'apparel', label: '服装', notes: ['同比 +45%'] },
              { id: 'accessories', label: '配饰', notes: ['同比 +70%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: { items: [{ id: 'operating_expenses', label: '运营费用' }] },
            tax: { label: '其他', notes: ['来源图将营业利润后的扣减合并列为“其他”。'] },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 64%', '同比 +4 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 14%', '同比 +4 个百分点'] },
            net: { label: '净利润', notes: ['利润率 12%', '同比 +5 个百分点'] },
          },
        },
      },
    }
  );
})(window);
