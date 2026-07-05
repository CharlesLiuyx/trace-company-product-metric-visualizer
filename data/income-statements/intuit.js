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
      key: 'intuit-q3-fy26',
      company: 'Intuit',
      period: 'Q3 FY26',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/intuit-q3-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 8.6,
        notes: ['+10% Y/Y'],
        items: [
          {
            id: 'gbs',
            label: 'Global Business Solutions',
            value: 3.3,
            notes: ['+15% Y/Y', '77% segment margin', '(0pp) Y/Y'],
          },
          {
            id: 'consumer',
            label: 'Consumer',
            value: 5.3,
            notes: ['+8% Y/Y', '81% segment margin', '(2pp) Y/Y'],
            children: [
              { id: 'turbotax', label: 'TurboTax', value: 4.4, notes: ['+7% Y/Y'] },
              { id: 'credit_karma', label: 'Credit Karma', value: 0.6, notes: ['+15% Y/Y'] },
              { id: 'protax', label: 'ProTax', value: 0.3, notes: ['Flat Y/Y'] },
            ],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 1.4 },
        operatingExpenses: {
          total: 3.2,
          items: [
            { id: 'sm', label: 'S&M', value: 1.8, notes: ['21% of revenue', '+0pp Y/Y'] },
            { id: 'rd', label: 'R&D', value: 0.8, notes: ['10% of revenue', '+1pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.4, notes: ['5% of revenue', '(0pp) Y/Y'] },
            {
              id: 'amortization',
              label: 'Amortization',
              value: 0.1,
              notes: ['1% of revenue', '(0pp) Y/Y'],
            },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 1.0 },
      },
      otherIncome: {
        total: 0.027,
        items: [{ id: 'other', label: 'Other', value: 0.027 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 7.2, notes: ['84% margin', '(1pp) Y/Y'] },
        operating: {
          id: 'operating_profit',
          label: 'Operating profit',
          value: 4.0,
          notes: ['47% margin', '(1pp) Y/Y'],
        },
        net: { id: 'net_profit', label: 'Net profit', value: 3.1, notes: ['36% margin', '(1pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第三季度',
          periodNote: '截至 2026 年 4 月',
          revenue: {
            notes: ['同比 +10%'],
            items: [
              {
                id: 'gbs',
                label: '全球商业解决方案',
                notes: ['同比 +15%', '分部利润率 77%', '同比 (0 个百分点)'],
              },
              {
                id: 'consumer',
                label: '消费者',
                notes: ['同比 +8%', '分部利润率 81%', '同比 (2 个百分点)'],
                children: [
                  { id: 'turbotax', notes: ['同比 +7%'] },
                  { id: 'credit_karma', notes: ['同比 +15%'] },
                  { id: 'protax', notes: ['同比持平'] },
                ],
              },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 21%', '同比 +0 个百分点'] },
                { id: 'rd', label: '研发', notes: ['占收入 10%', '同比 +1 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 5%', '同比 (0 个百分点)'] },
                { id: 'amortization', label: '摊销', notes: ['占收入 1%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 84%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 47%', '同比 (1 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 36%', '同比 (1 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
