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
      key: 'didi-q1-fy26',
      company: 'DiDi',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: 'RMB',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/didi-q1-fy26.png',
      roundingTolerance: 0.2,
      revenue: {
        total: 58.7,
        notes: ['+10% Y/Y', 'Segment revenue detail sums to RMB 58.8B due to rounded segment figures.'],
        items: [
          { id: 'china_mobility', label: 'China Mobility', value: 52.2, notes: ['+9% Y/Y', '8% adjusted margin', '+1pp Y/Y'] },
          { id: 'international', label: 'International', value: 4.5, notes: ['+41% Y/Y', '(65%) adjusted margin', '(59pp) Y/Y'] },
          { id: 'other_initiatives', label: 'Other initiatives', value: 2.1, notes: ['Flat Y/Y', '(43%) adjusted margin', '(18pp) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 47.3 },
        operatingExpenses: {
          total: 12.5,
          items: [
            { id: 'sm', label: 'S&M', value: 5.1, notes: ['9% of revenue', '+5pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 2.8, notes: ['5% of revenue', '+1pp Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 2.4, notes: ['4% of revenue', '(0pp) Y/Y'] },
            { id: 'operations', label: 'Operations', value: 2.2, notes: ['4% of revenue', '+1pp Y/Y'] },
          ],
        },
        tax: { label: 'Tax', value: 0 },
      },
      otherIncome: {
        total: 0.4,
        items: [{ id: 'other_income', label: 'Other', value: 0.4 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      // The source chart shows no tax or separate net line; its bottom line is
      // the operating loss. "Other" (RMB 0.4B) is other operating income that
      // feeds operating expenses. `operating` is gross profit minus operating
      // expenses (-1.1B, before other income; no matching Sankey node, so no
      // id); `net` is the after-other-income operating loss (-0.7B) drawn as
      // the operating_loss node.
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 11.4, notes: ['19% margin', '+1pp Y/Y'] },
        operating: { label: 'Operating loss', value: -1.1 },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -0.7,
          notes: ['(1%) margin', '+5pp Y/Y'],
        },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +10%', '因各分部数字四舍五入，分部收入合计为人民币 58.8B。'],
            items: [
              { id: 'china_mobility', label: '中国出行', notes: ['同比 +9%', '经调整利润率 8%', '同比 +1 个百分点'] },
              { id: 'international', label: '国际业务', notes: ['同比 +41%', '经调整利润率 (65%)', '同比 (59 个百分点)'] },
              { id: 'other_initiatives', label: '其他新业务', notes: ['同比持平', '经调整利润率 (43%)', '同比 (18 个百分点)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与营销', notes: ['占收入 9%', '同比 +5 个百分点'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 5%', '同比 +1 个百分点'] },
                { id: 'rnd', label: '研发', notes: ['占收入 4%', '同比 (0 个百分点)'] },
                { id: 'operations', label: '运营', notes: ['占收入 4%', '同比 +1 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['毛利率 19%', '同比 +1 个百分点'] },
            operating: { label: '营业亏损' },
            net: { label: '营业亏损', notes: ['利润率 (1%)', '同比 +5 个百分点'] },
          },
        },
      },
    },
    {
      key: 'didi-q4-fy25',
      company: 'DiDi',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: 'RMB',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/didi-q4-fy25.png',
      roundingTolerance: 0.2,
      revenue: {
        total: 58.4,
        notes: ['+10% Y/Y'],
        items: [
          { id: 'china_mobility', label: 'China Mobility', value: 51.7, notes: ['+9% Y/Y', '5% adjusted margin', '+0pp Y/Y'] },
          { id: 'international', label: 'International', value: 4.4, notes: ['+47% Y/Y', '(78%) adjusted margin', '(54pp) Y/Y'] },
          { id: 'other_initiatives', label: 'Other initiatives', value: 2.3, notes: ['(8%) Y/Y', '(56%) adjusted margin', '(10pp) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 47.2 },
        operatingExpenses: {
          total: 14.4,
          items: [
            { id: 'sm', label: 'S&M', value: 6.2, notes: ['11% of revenue', '+7pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 3.3, notes: ['6% of revenue', '+2pp Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 2.5, notes: ['4% of revenue', '+0pp Y/Y'] },
            { id: 'operations', label: 'Operations', value: 2.4, notes: ['4% of revenue', '+1pp Y/Y'] },
          ],
        },
        tax: { label: 'Tax', value: 0 },
      },
      otherIncome: {
        total: 0.5,
        items: [{ id: 'other_income', label: 'Other', value: 0.5 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      // The source chart shows no tax or separate net line; its bottom line is
      // the operating loss. "Other" (RMB 0.5B) is other operating income that
      // feeds operating expenses. `operating` is gross profit minus operating
      // expenses (-3.2B, before other income; no matching Sankey node, so no
      // id); `net` is the after-other-income operating loss (-2.7B) drawn as
      // the operating_loss node.
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 11.2, notes: ['19% margin', '+1pp Y/Y'] },
        operating: { label: 'Operating loss', value: -3.2 },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -2.7,
          notes: ['(1%) margin', '(4pp) Y/Y'],
        },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +10%'],
            items: [
              { id: 'china_mobility', label: '中国出行', notes: ['同比 +9%', '经调整利润率 5%', '同比 +0 个百分点'] },
              { id: 'international', label: '国际业务', notes: ['同比 +47%', '经调整利润率 (78%)', '同比 (54 个百分点)'] },
              { id: 'other_initiatives', label: '其他新业务', notes: ['同比 (8%)', '经调整利润率 (56%)', '同比 (10 个百分点)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与营销', notes: ['占收入 11%', '同比 +7 个百分点'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 6%', '同比 +2 个百分点'] },
                { id: 'rnd', label: '研发', notes: ['占收入 4%', '同比 +0 个百分点'] },
                { id: 'operations', label: '运营', notes: ['占收入 4%', '同比 +1 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['毛利率 19%', '同比 +1 个百分点'] },
            operating: { label: '营业亏损' },
            net: { label: '营业亏损', notes: ['利润率 (1%)', '同比 (4 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
