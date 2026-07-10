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
      key: 'live-nation-fy25',
      company: 'Live Nation',
      period: 'FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/live-nation-fy25.png',
      roundingTolerance: 0.22,
      revenue: {
        total: 25.2,
        notes: ['+9% Y/Y'],
        items: [
          { id: 'concerts', label: 'Concerts', value: 20.9, notes: ['+10% Y/Y', '3% adjusted margin', '+1pp Y/Y'] },
          { id: 'ticketing', label: 'Ticketing', value: 3.1, notes: ['+3% Y/Y', '37% adjusted margin', '(1pp) Y/Y'] },
          { id: 'sponsorship', label: 'Sponsorship', value: 1.3, notes: ['+11% Y/Y', '64% adjusted margin', '(0pp) Y/Y'] },
          { id: 'eliminations', label: 'Eliminations', value: -0.1, notes: ['Source-chart elimination before consolidated revenue.'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'direct_operating_expenses', label: 'Direct operating expenses', value: 18.8 },
        operatingExpenses: {
          total: 5.2,
          items: [
            { id: 'sga', label: 'SG&A', value: 4.1, notes: ['16% of revenue'] },
            { id: 'da', label: 'D&A', value: 0.6, notes: ['3% of revenue'] },
            { id: 'corporate_other', label: 'Corporate & Other', value: 0.5, notes: ['2% of revenue'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.3 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 0.2,
        items: [{ id: 'interest_and_other', label: 'Interest & other', value: 0.2 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 6.4, notes: ['26% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.3, notes: ['5% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.7, notes: ['3% margin', '(2pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +9%'],
            items: [
              { id: 'concerts', label: '演唱会', notes: ['同比 +10%', '调整后利润率 3%', '同比 +1 个百分点'] },
              { id: 'ticketing', label: '票务', notes: ['同比 +3%', '调整后利润率 37%', '同比 (1 个百分点)'] },
              { id: 'sponsorship', label: '赞助', notes: ['同比 +11%', '调整后利润率 64%', '同比 (0 个百分点)'] },
              { id: 'eliminations', label: '抵销', notes: ['来源图表在合并收入前显示抵销项。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '直接运营费用' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售、一般及管理费用', notes: ['占收入 16%'] },
                { id: 'da', label: '折旧与摊销', notes: ['占收入 3%'] },
                { id: 'corporate_other', label: '公司及其他', notes: ['占收入 2%'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'interest_and_other', label: '利息及其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 26%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 5%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 3%', '同比 (2 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
