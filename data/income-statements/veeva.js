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
      key: 'veeva-q1-fy27',
      company: 'Veeva Systems',
      period: 'Q1 FY27',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/veeva-q1-fy27.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 883,
        notes: ['+16% Y/Y'],
        items: [
          {
            id: 'subscription',
            label: 'Subscription',
            value: 730,
            notes: ['+15% Y/Y'],
            children: [
              { id: 'commercial', label: 'Commercial solutions', value: 338, notes: ['+11% Y/Y'] },
              { id: 'rnd_solutions', label: 'R&D solutions', value: 392, notes: ['+19% Y/Y'] },
            ],
          },
          { id: 'services', label: 'Services', value: 153, notes: ['+23% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 221 },
        operatingExpenses: {
          total: 389,
          items: [
            { id: 'rnd', label: 'R&D', value: 208, notes: ['24% of revenue', '(1pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 111, notes: ['13% of revenue', '(0pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 70, notes: ['8% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 87 },
      },
      otherIncome: {
        total: 74,
        items: [{ id: 'other', label: 'Other', value: 74 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 662, notes: ['75% margin', '(2pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 273, notes: ['31% margin', '+0pp Y/Y'] },
        net: {
          id: 'net_profit',
          label: 'Net profit',
          value: 261,
          notes: [
            '30% margin',
            '(1pp) Y/Y',
            'Operating profit plus other income less tax sums to $260M; the source chart reports $261M net profit due to rounded line items.',
          ],
        },
      },
      i18n: {
        zh: {
          period: '2027 财年第一季度',
          periodNote: '截至 2026 年 4 月',
          revenue: {
            notes: ['同比 +16%'],
            items: [
              {
                id: 'subscription',
                label: '订阅',
                notes: ['同比 +15%'],
                children: [
                  { id: 'commercial', label: '商业化解决方案', notes: ['同比 +11%'] },
                  { id: 'rnd_solutions', label: '研发解决方案', notes: ['同比 +19%'] },
                ],
              },
              { id: 'services', label: '服务', notes: ['同比 +23%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 24%', '同比 (1 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 13%', '同比 (0 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 8%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 75%', '同比 (2 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 31%', '同比 +0 个百分点'] },
            net: { label: '净利润', notes: ['利润率 30%', '同比 (1 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
