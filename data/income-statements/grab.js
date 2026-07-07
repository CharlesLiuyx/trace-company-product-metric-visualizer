/* Pure income-statement SSOT records. Financial data only - Sankey view
 * geometry stays in data/datasets/<dataset-key>.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push(
    {
      key: 'grab-q4-fy25',
      company: 'Grab',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/grab-q4-fy25.png',
      roundingTolerance: 2,
      revenue: {
        total: 906,
        notes: [
          '+19% Y/Y',
          'Segment revenue sums to $905M because the source chart rounds Deliveries, Mobility, and Financial Services separately.',
          'On-Demand GMV: $6.1B, +21% Y/Y. Group MTUs: 50.5M, +15% Y/Y.',
        ],
        items: [
          { id: 'deliveries', label: 'Deliveries', value: 481, notes: ['+18% Y/Y', '17% adjusted margin', '+3pp Y/Y'] },
          { id: 'mobility', label: 'Mobility', value: 325, notes: ['+15% Y/Y', '57% adjusted margin', '+3pp Y/Y'] },
          {
            id: 'financial_services',
            label: 'Financial Services',
            value: 99,
            notes: ['+34% Y/Y', '(36%) adjusted margin', '+11pp Y/Y'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 509 },
        operatingExpenses: {
          total: 345,
          items: [
            { id: 'ga', label: 'G&A', value: 107, notes: ['12% of revenue', '(7pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 104, notes: ['11% of revenue', '(1pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 91, notes: ['10% of revenue', '(2pp) Y/Y'] },
            { id: 'other_opex', label: 'Other', value: 43, notes: ['5% of revenue', '+4pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 12 },
      },
      otherIncome: {
        total: 113,
        items: [{ id: 'other_income', label: 'Other', value: 113 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 397, notes: ['44% margin', '+0pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 52, notes: ['6% margin', '+6pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 153 },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: [
              '同比 +19%',
              '由于源图分别四舍五入 Deliveries、Mobility 和 Financial Services，分项收入合计为 $905M。',
              '按需 GMV：$6.1B，同比 +21%。集团月交易用户数：50.5M，同比 +15%。',
            ],
            items: [
              { id: 'deliveries', label: '配送', notes: ['同比 +18%', '经调整利润率 17%', '同比 +3 个百分点'] },
              { id: 'mobility', label: '出行', notes: ['同比 +15%', '经调整利润率 57%', '同比 +3 个百分点'] },
              {
                id: 'financial_services',
                label: '金融服务',
                notes: ['同比 +34%', '经调整利润率 (36%)', '同比 +11 个百分点'],
              },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'ga', label: '一般及行政', notes: ['占收入 12%', '同比 (7 个百分点)'] },
                { id: 'sm', label: '销售与营销', notes: ['占收入 11%', '同比 (1 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 10%', '同比 (2 个百分点)'] },
                { id: 'other_opex', label: '其他', notes: ['占收入 5%', '同比 +4 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['毛利率 44%', '同比 +0 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 6%', '同比 +6 个百分点'] },
            net: { label: '净利润' },
          },
        },
      },
    }
  );
})(window);
