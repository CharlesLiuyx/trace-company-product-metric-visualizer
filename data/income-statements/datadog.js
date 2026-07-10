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
      key: 'datadog-q4-fy25',
      company: 'Datadog',
      period: 'Q4 FY25',
      periodNote: 'Quarter ended Dec. 31, 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/datadog-q4-fy25.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 953,
        notes: ['+29% Y/Y', 'Regional amounts sum to $954M because the source chart rounds each segment independently.'],
        items: [
          { id: 'north_america', label: 'North America', value: 679, notes: ['+31% Y/Y'] },
          { id: 'international', label: 'International', value: 275, notes: ['+24% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 187 },
        operatingExpenses: {
          total: 757,
          items: [
            { id: 'rnd', label: 'R&D', value: 418, notes: ['44% of revenue', '+1pp Y/Y'] },
            { id: 'sm', label: 'S&M', value: 264, notes: ['28% of revenue', '(0pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 74, notes: ['8% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 7 },
      },
      otherIncome: {
        total: 44,
        items: [{ id: 'other', label: 'Other', value: 44 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 766, notes: ['80% margin', '(0pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 9, notes: ['1% margin', '(0pp) Y/Y'] },
        net: {
          id: 'net_profit',
          label: 'Net profit',
          value: 47,
          notes: ['The displayed net profit differs by $1M from the rounded operating-profit + Other − Tax bridge.'],
        },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月 31 日的季度',
          revenue: {
            notes: ['同比 +29%', '地区收入逐项四舍五入后合计为 $954M。'],
            items: [
              { id: 'north_america', label: '北美', notes: ['同比 +31%'] },
              { id: 'international', label: '国际', notes: ['同比 +24%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 44%', '同比 +1 个百分点'] },
                { id: 'sm', label: '销售与营销', notes: ['占收入 28%', '同比 (0 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 8%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 80%', '同比 (0 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 1%', '同比 (0 个百分点)'] },
            net: { label: '净利润', notes: ['显示的净利润与四舍五入后的营业利润、其他项目和税费桥接相差 $1M。'] },
          },
        },
      },
    },
    {
      key: 'datadog-q1-fy26',
      company: 'Datadog',
      period: 'Q1 FY26',
      periodNote: 'Quarter ended Mar. 31, 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/datadog-q1-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 1006,
        notes: ['+32% Y/Y'],
        items: [
          { id: 'north_america', label: 'North America', value: 724, notes: ['+36% Y/Y'] },
          { id: 'international', label: 'International', value: 282, notes: ['+24% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 209 },
        operatingExpenses: {
          total: 790,
          items: [
            { id: 'rnd', label: 'R&D', value: 435, notes: ['43% of revenue', '(2pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 280, notes: ['28% of revenue', '(0pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 75, notes: ['7% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 6 },
      },
      otherIncome: {
        total: 52,
        items: [{ id: 'other', label: 'Other', value: 52 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 797, notes: ['79% margin', '(0pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 7, notes: ['1% margin', '+2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 53, notes: ['5% margin', '+6pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月 31 日的季度',
          revenue: {
            notes: ['同比 +32%'],
            items: [
              { id: 'north_america', label: '北美', notes: ['同比 +36%'] },
              { id: 'international', label: '国际', notes: ['同比 +24%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 43%', '同比 (2 个百分点)'] },
                { id: 'sm', label: '销售与营销', notes: ['占收入 28%', '同比 (0 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 7%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 79%', '同比 (0 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 1%', '同比 +2 个百分点'] },
            net: { label: '净利润', notes: ['利润率 5%', '同比 +6 个百分点'] },
          },
        },
      },
    }
  );
})(window);
