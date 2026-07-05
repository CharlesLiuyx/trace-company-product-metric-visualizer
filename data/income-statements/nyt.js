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
      key: 'nyt-q1-fy26',
      company: 'The New York Times Company',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/nyt-q1-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 712,
        notes: ['+12% Y/Y'],
        items: [
          {
            id: 'subscription',
            label: 'Subscription',
            value: 517,
            notes: ['+11% Y/Y'],
            children: [
              { id: 'digital', label: 'Digital', value: 389, notes: ['+16% Y/Y'] },
              { id: 'print', label: 'Print', value: 128, notes: ['(1%) Y/Y'] },
            ],
          },
          { id: 'advertising', label: 'Advertising', value: 127, notes: ['(1%) Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 69, notes: ['+8% Y/Y', 'Wirecutter'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 363 },
        operatingExpenses: {
          total: 259,
          items: [
            { id: 'ga', label: 'G&A', value: 86, notes: ['12% of revenue', '(0pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 77, notes: ['11% of revenue', '+0pp Y/Y'] },
            { id: 'product', label: 'Product', value: 70, notes: ['10% of revenue', '(1pp) Y/Y'] },
            { id: 'da', label: 'D&A', value: 21, notes: ['3% of revenue', '(0pp) Y/Y'] },
            { id: 'other_expense', label: 'Other', value: 4, notes: ['1% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax_other', label: 'Tax & other', value: 14 },
      },
      otherIncome: {
        total: 11,
        items: [{ id: 'interest', label: 'Interest', value: 11 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 349, notes: ['49% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 91, notes: ['13% margin', '+4pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 88, notes: ['12% margin', '+5pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +12%'],
            items: [
              {
                id: 'subscription', label: '订阅', notes: ['同比 +11%'],
                children: [
                  { id: 'digital', label: '数字', notes: ['同比 +16%'] },
                  { id: 'print', label: '印刷', notes: ['同比 (1%)'] },
                ],
              },
              { id: 'advertising', label: '广告', notes: ['同比 (1%)'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 +8%', 'Wirecutter'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'ga', label: '管理费用', notes: ['占收入 12%', '同比 (0 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 11%', '同比 +0 个百分点'] },
                { id: 'product', label: '产品', notes: ['占收入 10%', '同比 (1 个百分点)'] },
                { id: 'da', label: '折旧与摊销', notes: ['占收入 3%', '同比 (0 个百分点)'] },
                { id: 'other_expense', label: '其他', notes: ['占收入 1%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费及其他' },
          },
          otherIncome: {
            items: [
              { id: 'interest', label: '利息' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 49%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 13%', '同比 +4 个百分点'] },
            net: { label: '净利润', notes: ['利润率 12%', '同比 +5 个百分点'] },
          },
        },
      },
    }
  );
})(window);
