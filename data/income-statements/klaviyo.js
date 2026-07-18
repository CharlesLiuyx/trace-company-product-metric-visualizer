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
      key: 'klaviyo-q1-fy26',
      company: 'Klaviyo',
      period: 'Q1 FY26',
      periodNote: 'Quarter ended Mar. 31, 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/klaviyo-q1-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 358,
        notes: ['+28% Y/Y'],
        items: [
          {
            id: 'americas',
            label: 'Americas',
            value: 227,
            notes: ['+22% Y/Y', 'United States and Other Americas sum to $226M due to rounded source figures.'],
            children: [
              { id: 'united_states', label: 'United States', value: 209, notes: ['+22% Y/Y'] },
              { id: 'other_americas', label: 'Other Americas', value: 17, notes: ['+28% Y/Y'] },
            ],
          },
          { id: 'apac', label: 'APAC', value: 37, notes: ['+31% Y/Y'] },
          { id: 'emea', label: 'EMEA', value: 94, notes: ['+42% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 89 },
        operatingExpenses: {
          total: 267,
          items: [
            { id: 'sm', label: 'S&M', value: 134, notes: ['37% of revenue', '(7pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 80, notes: ['22% of revenue', '(2pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 53, notes: ['15% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 2 },
      },
      otherIncome: {
        total: 9,
        items: [{ id: 'other', label: 'Other', value: 9 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 269, notes: ['75% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2, notes: ['0% margin', '+9pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 9, notes: ['3% margin', '+8pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月 31 日的季度',
          revenue: {
            notes: ['同比 +28%'],
            items: [
              {
                id: 'americas',
                label: '美洲',
                notes: ['同比 +22%', '美国和美洲其他地区因源图四舍五入合计为 $226M。'],
                children: [
                  { id: 'united_states', label: '美国', notes: ['同比 +22%'] },
                  { id: 'other_americas', label: '美洲其他地区', notes: ['同比 +28%'] },
                ],
              },
              { id: 'apac', label: '亚太', notes: ['同比 +31%'] },
              { id: 'emea', label: '欧洲、中东和非洲', notes: ['同比 +42%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与营销', notes: ['占收入 37%', '同比 (7 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 22%', '同比 (2 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 15%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 75%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 0%', '同比 +9 个百分点'] },
            net: { label: '净利润', notes: ['利润率 3%', '同比 +8 个百分点'] },
          },
        },
      },
    },
    {
      key: 'klaviyo-q3-fy25',
      company: 'Klaviyo',
      period: 'Q3 FY25',
      periodNote: 'Quarter ended Sep. 30, 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/klaviyo-q3-fy25.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 311,
        notes: ['+32% Y/Y'],
        items: [
          {
            id: 'americas',
            label: 'Americas',
            value: 201,
            notes: ['+27% Y/Y'],
            children: [
              { id: 'united_states', label: 'United States', value: 186, notes: ['+27% Y/Y'] },
              { id: 'other_americas', label: 'Other Americas', value: 15, notes: ['+27% Y/Y'] },
            ],
          },
          { id: 'apac', label: 'APAC', value: 32, notes: ['+31% Y/Y'] },
          { id: 'emea', label: 'EMEA', value: 78, notes: ['+48% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 76 },
        operatingExpenses: {
          total: 246,
          items: [
            { id: 'sm', label: 'S&M', value: 128, notes: ['41% of revenue', '(1pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 73, notes: ['23% of revenue', '(0pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 45, notes: ['15% of revenue', '(2pp) Y/Y'] },
          ],
        },
        tax: { label: 'Tax', value: 0 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 235, notes: ['76% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -11, notes: ['(3%) margin', '+2pp Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -11,
          notes: ['No separate net loss line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月 30 日的季度',
          revenue: {
            notes: ['同比 +32%'],
            items: [
              {
                id: 'americas',
                label: '美洲',
                notes: ['同比 +27%'],
                children: [
                  { id: 'united_states', label: '美国', notes: ['同比 +27%'] },
                  { id: 'other_americas', label: '美洲其他地区', notes: ['同比 +27%'] },
                ],
              },
              { id: 'apac', label: '亚太', notes: ['同比 +31%'] },
              { id: 'emea', label: '欧洲、中东和非洲', notes: ['同比 +48%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与营销', notes: ['占收入 41%', '同比 (1 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 23%', '同比 (0 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 15%', '同比 (2 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 76%', '同比 (1 个百分点)'] },
            operating: { label: '营业亏损', notes: ['利润率 (3%)', '同比 +2 个百分点'] },
            net: { label: '营业亏损', notes: ['来源图未单独显示净亏损项目。'] },
          },
        },
      },
    },
    {
      key: 'klaviyo-q4-fy25',
      company: 'Klaviyo',
      period: 'Q4 FY25',
      periodNote: 'Quarter ended Dec. 31, 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/klaviyo-q4-fy25.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 350,
        notes: ['+30% Y/Y'],
        items: [
          {
            id: 'americas',
            label: 'Americas',
            value: 223,
            notes: ['+24% Y/Y'],
            children: [
              { id: 'united_states', label: 'United States', value: 206, notes: ['+24% Y/Y'] },
              { id: 'other_americas', label: 'Other Americas', value: 17, notes: ['+28% Y/Y'] },
            ],
          },
          { id: 'apac', label: 'APAC', value: 37, notes: ['+34% Y/Y'] },
          { id: 'emea', label: 'EMEA', value: 90, notes: ['+44% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 97 },
        operatingExpenses: {
          total: 255,
          notes: ['S&M, R&D, and G&A add to $254M due to rounded source-chart values.'],
          items: [
            { id: 'sm', label: 'S&M', value: 128, notes: ['37% of revenue', '(7pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 77, notes: ['22% of revenue', '(4pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 49, notes: ['14% of revenue', '(2pp) Y/Y'] },
          ],
        },
        tax: { label: 'Tax', value: 0 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 253, notes: ['72% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -2, notes: ['(1%) margin', '+12pp Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -2,
          notes: ['No separate net loss line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月 31 日的季度',
          revenue: {
            notes: ['同比 +30%'],
            items: [
              {
                id: 'americas',
                label: '美洲',
                notes: ['同比 +24%'],
                children: [
                  { id: 'united_states', label: '美国', notes: ['同比 +24%'] },
                  { id: 'other_americas', label: '美洲其他地区', notes: ['同比 +28%'] },
                ],
              },
              { id: 'apac', label: '亚太', notes: ['同比 +34%'] },
              { id: 'emea', label: '欧洲、中东和非洲', notes: ['同比 +44%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['销售与营销、研发和管理费用合计为 $254M，因来源图数值取整相差 $1M。'],
              items: [
                { id: 'sm', label: '销售与营销', notes: ['占收入 37%', '同比 (7 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 22%', '同比 (4 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 14%', '同比 (2 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 72%', '同比 (1 个百分点)'] },
            operating: { label: '营业亏损', notes: ['利润率 (1%)', '同比 +12 个百分点'] },
            net: { label: '营业亏损', notes: ['来源图未单独显示净亏损项目。'] },
          },
        },
      },
    }
  );
})(window);
