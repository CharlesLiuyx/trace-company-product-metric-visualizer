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
      key: 'asana-q4-fy26',
      company: 'Asana',
      period: 'Q4 FY26',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/asana-q4-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 206,
        notes: ['+9% Y/Y'],
        items: [
          { id: 'united_states', label: 'United States', value: 122, notes: ['+8% Y/Y'] },
          { id: 'international', label: 'International', value: 84, notes: ['+11% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 25 },
        operatingExpenses: {
          total: 215,
          notes: ['S&M, R&D, and G&A add to $214M due to rounded source-chart values.'],
          items: [
            { id: 'sm', label: 'S&M', value: 100, notes: ['49% of revenue', '(6pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 73, notes: ['36% of revenue', '(9pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 41, notes: ['20% of revenue', '(4pp) Y/Y'] },
          ],
        },
        tax: { label: 'Tax', value: 0 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 181, notes: ['88% margin', '(2pp) Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -34, notes: ['(17%) margin', '+17pp Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -34,
          notes: ['No separate net loss line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2026 财年第四季度',
          periodNote: '截至 2026 年 1 月',
          revenue: {
            notes: ['同比 +9%'],
            items: [
              { id: 'united_states', label: '美国', notes: ['同比 +8%'] },
              { id: 'international', label: '国际', notes: ['同比 +11%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['销售与市场、研发和管理费用合计为 $214M，因来源图数值取整相差 $1M。'],
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 49%', '同比 (6 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 36%', '同比 (9 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 20%', '同比 (4 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 88%', '同比 (2 个百分点)'] },
            operating: { label: '营业亏损', notes: ['利润率 (17%)', '同比 +17 个百分点'] },
            net: {
              label: '营业亏损',
              notes: ['来源图未单独显示净亏损项目。'],
            },
          },
        },
      },
    },
    {
      key: 'asana-q1-fy27',
      company: 'Asana',
      period: 'Q1 FY27',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/asana-q1-fy27.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 205,
        notes: ['+10% Y/Y'],
        items: [
          { id: 'united_states', label: 'United States', value: 120, notes: ['+8% Y/Y'] },
          { id: 'international', label: 'International', value: 85, notes: ['+12% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 25 },
        operatingExpenses: {
          total: 195,
          notes: ['Source chart operating expense detail sums to $194M due to rounding.'],
          items: [
            { id: 'sm', label: 'S&M', value: 92, notes: ['45% of revenue', '(8pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 66, notes: ['32% of revenue', '(8pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 36, notes: ['18% of revenue', '(2pp) Y/Y'] },
          ],
        },
        tax: { label: 'Tax', value: 0 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 180, notes: ['88% margin', '(2pp) Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -15, notes: ['(7%) margin', '+16pp Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -15,
          notes: ['No separate net loss line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2027 财年第一季度',
          periodNote: '截至 2026 年 4 月',
          revenue: {
            notes: ['同比 +10%'],
            items: [
              { id: 'united_states', label: '美国', notes: ['同比 +8%'] },
              { id: 'international', label: '国际', notes: ['同比 +12%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['来源图运营费用明细因四舍五入合计为 $194M。'],
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 45%', '同比 (8 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 32%', '同比 (8 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 18%', '同比 (2 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 88%', '同比 (2 个百分点)'] },
            operating: { label: '营业亏损', notes: ['利润率 (7%)', '同比 +16 个百分点'] },
            net: {
              label: '营业亏损',
              notes: ['来源图未单独显示净亏损项目。'],
            },
          },
        },
      },
    }
  );
})(window);
