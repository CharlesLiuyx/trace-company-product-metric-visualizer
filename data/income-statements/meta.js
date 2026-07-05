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
      key: 'meta-q1-fy26',
      company: 'Meta',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/meta-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 56.3,
        notes: ['+33% Y/Y'],
        items: [
          {
            id: 'family_of_apps',
            label: 'Family of Apps (FoA)',
            value: 55.9,
            notes: ['+33% Y/Y', 'Operating profit: $26.9B'],
            children: [
              { id: 'advertising', label: 'Advertising', value: 55.0, notes: ['+33% Y/Y'] },
              { id: 'other_revenue', label: 'Other', value: 0.9, notes: ['+74% Y/Y', 'Payments infrastructure'] },
            ],
          },
          {
            id: 'reality_labs',
            label: 'Reality Labs (RL)',
            value: 0.4,
            notes: ['(2%) Y/Y', 'Operating loss: ($4.0B)'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 10.2 },
        operatingExpenses: {
          total: 23.2,
          items: [
            { id: 'rnd', label: 'R&D', value: 17.7, notes: ['31% of revenue', '+3pp Y/Y'] },
            { id: 'sm', label: 'S&M', value: 2.9, notes: ['5% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 2.6, notes: ['5% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0, notes: ['Source chart shows a tax benefit instead of tax expense.'] },
      },
      otherIncome: {
        total: 5.0,
        items: [{ id: 'tax_benefit', label: 'Tax benefit', value: 5.0 }],
      },
      otherExpenses: {
        total: 1.1,
        items: [{ id: 'other', label: 'Other', value: 1.1 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 46.1, notes: ['82% margin', '(0pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 22.9, notes: ['41% margin', '(1pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 26.8, notes: ['48% margin', '+8pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +33%'],
            items: [
              {
                id: 'family_of_apps', label: '应用家族（FoA）', notes: ['同比 +33%', '营业利润: $26.9B'],
                children: [
                  { id: 'advertising', label: '广告', notes: ['同比 +33%'] },
                  { id: 'other_revenue', label: '其他', notes: ['同比 +74%', '支付基础设施'] },
                ],
              },
              { id: 'reality_labs', label: 'Reality Labs（RL）', notes: ['同比 (2%)', '营业亏损: ($4.0B)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 31%', '同比 +3 个百分点'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 5%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 5%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费', notes: ['来源图显示税收收益，而非税费。'] },
          },
          otherIncome: {
            items: [
              { id: 'tax_benefit', label: '税收收益' },
            ],
          },
          otherExpenses: {
            items: [
              { id: 'other', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 82%', '同比 (0 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 41%', '同比 (1 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 48%', '同比 +8 个百分点'] },
          },
        },
      },
    }
  );
})(window);
