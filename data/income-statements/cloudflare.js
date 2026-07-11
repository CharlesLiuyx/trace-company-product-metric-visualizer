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
      key: 'cloudflare-q1-fy26',
      company: 'Cloudflare',
      period: 'Q1 FY26',
      periodNote: 'Quarter ended Mar. 31, 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/cloudflare-q1-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 640,
        notes: ['+34% Y/Y', 'Reported revenue was $639.8M; source chart rounds to $640M.'],
        items: [
          { id: 'united_states', label: 'United States', value: 316, notes: ['+34% Y/Y'] },
          { id: 'emea', label: 'EMEA', value: 176, notes: ['+31% Y/Y'] },
          { id: 'apac', label: 'APAC', value: 99, notes: ['+34% Y/Y'] },
          { id: 'other', label: 'Other', value: 50, notes: ['+34% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 184 },
        operatingExpenses: {
          total: 518,
          items: [
            { id: 'sm', label: 'S&M', value: 272, notes: ['42% of revenue', '(2pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 151, notes: ['24% of revenue', '(0pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 95, notes: ['15% of revenue', '(3pp) Y/Y'] },
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 456, notes: ['71% margin', '(5pp) Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -62, notes: ['(10%) margin', '+1pp Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -62,
          notes: ['No separate net income line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月 31 日的季度',
          revenue: {
            notes: ['同比 +34%', '报告收入为 $639.8M；来源图四舍五入为 $640M。'],
            items: [
              { id: 'united_states', label: '美国', notes: ['同比 +34%'] },
              { id: 'emea', label: '欧洲、中东和非洲', notes: ['同比 +31%'] },
              { id: 'apac', label: '亚太', notes: ['同比 +34%'] },
              { id: 'other', label: '其他', notes: ['同比 +34%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与营销', notes: ['占收入 42%', '同比 (2 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 24%', '同比 (0 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 15%', '同比 (3 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 71%', '同比 (5 个百分点)'] },
            operating: { label: '营业亏损', notes: ['利润率 (10%)', '同比 +1 个百分点'] },
            net: {
              label: '营业亏损',
              notes: ['来源图未单独显示净利润项目。'],
            },
          },
        },
      },
    },
    {
      key: 'cloudflare-q4-fy25',
      company: 'Cloudflare',
      period: 'Q4 FY25',
      periodNote: 'Quarter ended Dec. 31, 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/cloudflare-q4-fy25.png',
      roundingTolerance: 0.1,
      revenue: {
        total: 615,
        notes: ['+34% Y/Y'],
        items: [
          { id: 'united_states', label: 'United States', value: 304, notes: ['+31% Y/Y'] },
          { id: 'emea', label: 'EMEA', value: 168, notes: ['+31% Y/Y'] },
          { id: 'apac', label: 'APAC', value: 97, notes: ['+50% Y/Y'] },
          { id: 'other', label: 'Other', value: 46, notes: ['+28% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 162 },
        operatingExpenses: {
          total: 502,
          items: [
            { id: 'sm', label: 'S&M', value: 251, notes: ['41% of revenue', '(1pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 142, notes: ['23% of revenue', '(3pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 109, notes: ['18% of revenue', '+2pp Y/Y'] },
          ],
        },
        tax: { label: 'Tax', value: 0 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 453, notes: ['74% margin', '(3pp) Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -49, notes: ['(8%) margin', '(0pp) Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -49,
          notes: ['No separate net income line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月 31 日的季度',
          revenue: {
            notes: ['同比 +34%'],
            items: [
              { id: 'united_states', label: '美国', notes: ['同比 +31%'] },
              { id: 'emea', label: '欧洲、中东和非洲', notes: ['同比 +31%'] },
              { id: 'apac', label: '亚太', notes: ['同比 +50%'] },
              { id: 'other', label: '其他', notes: ['同比 +28%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与营销', notes: ['占收入 41%', '同比 (1 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 23%', '同比 (3 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 18%', '同比 +2 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 74%', '同比 (3 个百分点)'] },
            operating: { label: '营业亏损', notes: ['利润率 (8%)', '同比 (0 个百分点)'] },
            net: { label: '营业亏损', notes: ['来源图未单独显示净利润项目。'] },
          },
        },
      },
    }
  );
})(window);
