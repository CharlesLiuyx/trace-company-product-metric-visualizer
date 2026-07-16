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
      key: 'zscaler-q1-fy26',
      company: 'Zscaler',
      period: 'Q1 FY26',
      periodNote: 'Ending Oct. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/zscaler-q1-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 788,
        notes: ['+26% Y/Y', 'Regional values sum to $787M because the source chart rounds each displayed amount.'],
        items: [
          { id: 'united_states', label: 'United States', value: 427, notes: ['+34% Y/Y'] },
          { id: 'emea', label: 'EMEA', value: 212, notes: ['+14% Y/Y'] },
          { id: 'asia_pacific', label: 'Asia Pacific', value: 120, notes: ['+21% Y/Y'] },
          { id: 'other', label: 'Other', value: 28, notes: ['+22% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 185 },
        operatingExpenses: {
          total: 640,
          notes: ['Displayed expense items sum to $639M because the source chart rounds each amount.'],
          items: [
            { id: 'sm', label: 'S&M', value: 373, notes: ['47% of revenue', '(1pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 200, notes: ['25% of revenue', '+1pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 66, notes: ['8% of revenue', '(1pp) Y/Y'] },
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 603, notes: ['77% margin', '(1pp) Y/Y'] },
        operating: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -36,
          notes: ['(5%) margin', '+0pp Y/Y', 'Gross profit less displayed operating expenses differs by $1M because the source chart rounds each amount.'],
        },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -36,
          notes: ['No separate net income or loss line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2025 年 10 月',
          revenue: {
            notes: ['同比 +26%', '地区收入加总为 $787M，因来源图对各显示金额取整。'],
            items: [
              { id: 'united_states', label: '美国', notes: ['同比 +34%'] },
              { id: 'emea', label: '欧洲、中东和非洲', notes: ['同比 +14%'] },
              { id: 'asia_pacific', label: '亚太', notes: ['同比 +21%'] },
              { id: 'other', label: '其他', notes: ['同比 +22%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['各项显示费用加总为 $639M，因来源图对各金额取整。'],
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 47%', '同比 (1 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 25%', '同比 +1 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 8%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 77%', '同比 (1 个百分点)'] },
            operating: {
              label: '营业亏损',
              notes: ['利润率 (5%)', '同比 +0 个百分点', '毛利润减去显示的营业费用相差 $1M，因来源图对各金额取整。'],
            },
            net: {
              label: '营业亏损',
              notes: ['来源图未单独显示净利润或净亏损项目。'],
            },
          },
        },
      },
    }
  );

  ssot.records.push(
    {
      key: 'zscaler-q2-fy26',
      company: 'Zscaler',
      period: 'Q2 FY26',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/zscaler-q2-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 816,
        notes: ['+26% Y/Y', 'Regional values sum to $815M because the source chart rounds each displayed amount.'],
        items: [
          { id: 'united_states', label: 'United States', value: 465, notes: ['+33% Y/Y'] },
          { id: 'emea', label: 'EMEA', value: 228, notes: ['+18% Y/Y'] },
          { id: 'asia_pacific', label: 'Asia Pacific', value: 122, notes: ['+18% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 191 },
        operatingExpenses: {
          total: 676,
          items: [
            { id: 'sm', label: 'S&M', value: 369, notes: ['45% of revenue', '(2pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 229, notes: ['28% of revenue', '+2pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 78, notes: ['10% of revenue', '+0pp Y/Y'] },
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 624, notes: ['77% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -52, notes: ['(6%) margin', '(0pp) Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -52,
          notes: ['No separate net income or loss line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 1 月',
          revenue: {
            notes: ['同比 +26%', '地区收入加总为 $815M，因来源图对各显示金额取整。'],
            items: [
              { id: 'united_states', label: '美国', notes: ['同比 +33%'] },
              { id: 'emea', label: '欧洲、中东和非洲', notes: ['同比 +18%'] },
              { id: 'asia_pacific', label: '亚太', notes: ['同比 +18%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 45%', '同比 (2 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 28%', '同比 +2 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 10%', '同比 +0 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 77%', '同比 (1 个百分点)'] },
            operating: { label: '营业亏损', notes: ['利润率 (6%)', '同比 (0 个百分点)'] },
            net: {
              label: '营业亏损',
              notes: ['来源图未单独显示净利润或净亏损项目。'],
            },
          },
        },
      },
    }
  );

  ssot.records.push(
    {
      key: 'zscaler-q3-fy26',
      company: 'Zscaler',
      period: 'Q3 FY26',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/zscaler-q3-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 850,
        notes: ['+25% Y/Y'],
        items: [
          { id: 'united_states', label: 'United States', value: 453, notes: ['+32% Y/Y'] },
          { id: 'emea', label: 'EMEA', value: 236, notes: ['+16% Y/Y'] },
          { id: 'asia_pacific', label: 'Asia Pacific', value: 132, notes: ['+23% Y/Y'] },
          { id: 'other', label: 'Other', value: 29, notes: ['+19% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 193 },
        operatingExpenses: {
          total: 687,
          items: [
            { id: 'sm', label: 'S&M', value: 372, notes: ['44% of revenue', '(3pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 232, notes: ['27% of revenue', '+2pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 83, notes: ['10% of revenue', '+0pp Y/Y'] },
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 658, notes: ['77% margin', '+0pp Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -30, notes: ['(3%) margin', '+0pp Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -30,
          notes: ['No separate net income or loss line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2026 财年第三季度',
          periodNote: '截至 2026 年 4 月',
          revenue: {
            notes: ['同比 +25%'],
            items: [
              { id: 'united_states', label: '美国', notes: ['同比 +32%'] },
              { id: 'emea', label: '欧洲、中东和非洲', notes: ['同比 +16%'] },
              { id: 'asia_pacific', label: '亚太', notes: ['同比 +23%'] },
              { id: 'other', label: '其他', notes: ['同比 +19%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 44%', '同比 (3 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 27%', '同比 +2 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 10%', '同比 +0 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 77%', '同比 +0 个百分点'] },
            operating: { label: '营业亏损', notes: ['利润率 (3%)', '同比 +0 个百分点'] },
            net: {
              label: '营业亏损',
              notes: ['来源图未单独显示净利润或净亏损项目。'],
            },
          },
        },
      },
    }
  );
})(window);
