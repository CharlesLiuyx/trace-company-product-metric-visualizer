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
      key: 'duolingo-q1-fy26',
      company: 'Duolingo',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/duolingo-q1-fy26.png',
      roundingTolerance: 0.65,
      revenue: {
        total: 291.967,
        notes: ['+27% Y/Y'],
        items: [
          { id: 'subscription', label: 'Subscription', value: 250.908, notes: ['+31% Y/Y'] },
          {
            id: 'other_revenue',
            label: 'Other',
            value: 41.059,
            notes: [
              '+3% Y/Y',
              'Comprises advertising $20.614M, Duolingo English Test $11.317M, in-app purchases $8.446M, and other $0.682M.',
            ],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 78.871 },
        operatingExpenses: {
          total: 168.569,
          items: [
            { id: 'rnd', label: 'R&D', value: 82.974, notes: ['28% of revenue', '(2pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 39.249, notes: ['13% of revenue', '+2pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 46.346, notes: ['16% of revenue', '(3pp) Y/Y'] },
          ],
        },
        tax: {
          id: 'tax_other',
          label: 'Tax & Other',
          value: 12.878,
          notes: ['Combines provision for income taxes of $12.092M with other expense, net of $0.786M.'],
        },
      },
      otherIncome: {
        total: 11.811,
        items: [{ id: 'interest', label: 'Interest', value: 11.811 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 213.096, notes: ['73% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 44.527, notes: ['15% margin', '+5pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 43.46, notes: ['15% margin', '(0pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +27%'],
            items: [
              { id: 'subscription', label: '订阅', notes: ['同比 +31%'] },
              {
                id: 'other_revenue',
                label: '其他',
                notes: ['同比 +3%', '包括广告 $20.614M、Duolingo English Test $11.317M、应用内购买 $8.446M 和其他 $0.682M。'],
              },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 28%', '同比 (2 个百分点)'] },
                { id: 'sm', label: '销售与营销', notes: ['占收入 13%', '同比 +2 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 16%', '同比 (3 个百分点)'] },
              ],
            },
            tax: {
              label: '税费及其他',
              notes: ['合并 $12.092M 所得税费用与 $0.786M 其他费用净额。'],
            },
          },
          otherIncome: {
            items: [{ id: 'interest', label: '利息' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 73%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 15%', '同比 +5 个百分点'] },
            net: { label: '净利润', notes: ['利润率 15%', '同比 (0 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
