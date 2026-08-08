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
      key: 'appfolio-q4-fy25',
      company: 'AppFolio',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/appfolio-q4-fy25.png',
      roundingTolerance: 1.5,
      revenue: {
        total: 248,
        notes: ['+22% Y/Y'],
        items: [
          {
            id: 'core_solutions',
            label: 'Core solutions',
            value: 56,
            notes: ['+17% Y/Y', 'Reported as Subscription Services by AppFolio.'],
          },
          { id: 'value_added_services', label: 'Value Added Services', value: 185, notes: ['+20% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 8, notes: ['+191% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 91 },
        operatingExpenses: {
          total: 114,
          items: [
            { id: 'rnd', label: 'R&D', value: 46, notes: ['19% of revenue', '(2pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 40, notes: ['16% of revenue', '(0pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 23, notes: ['9% of revenue', '(2pp) Y/Y'] },
            { id: 'depreciation', label: 'Depreciation', value: 5, notes: ['2% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 6 },
      },
      otherIncome: {
        total: 2,
        items: [
          {
            id: 'interest',
            label: 'Interest',
            value: 2,
            notes: ['Interest income, net and other income, net; source chart labels the combined line as Interest.'],
          },
        ],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 158, notes: ['64% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 44, notes: ['18% margin', '+8pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 40, notes: ['16% margin', '(34pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +22%'],
            items: [
              { id: 'core_solutions', label: '核心解决方案', notes: ['同比 +17%', 'AppFolio 将其列报为订阅服务。'] },
              { id: 'value_added_services', label: '增值服务', notes: ['同比 +20%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 +191%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 19%', '同比 (2 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 16%', '同比 (0 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 9%', '同比 (2 个百分点)'] },
                { id: 'depreciation', label: '折旧', notes: ['占收入 2%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'interest', label: '利息', notes: ['包括净利息收入和净其他收入；来源图将合并项目标为利息。'] },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 64%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 18%', '同比 +8 个百分点'] },
            net: { label: '净利润', notes: ['利润率 16%', '同比 (34 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'appfolio-q1-fy26',
      company: 'AppFolio',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/appfolio-q1-fy26.png',
      roundingTolerance: 0.65,
      revenue: {
        total: 262.214,
        notes: ['+20% Y/Y'],
        items: [
          {
            id: 'core_solutions',
            label: 'Core solutions',
            value: 58.222,
            notes: ['+18% Y/Y', 'Reported as Subscription Services by AppFolio.'],
          },
          { id: 'value_added_services', label: 'Value Added Services', value: 201.363, notes: ['+22% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 2.629, notes: ['(25%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 94.975 },
        operatingExpenses: {
          total: 116.491,
          items: [
            { id: 'rnd', label: 'R&D', value: 49.629, notes: ['19% of revenue', '(1pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 37.501, notes: ['14% of revenue', '+0pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 24.341, notes: ['9% of revenue', '(1pp) Y/Y'] },
            { id: 'depreciation', label: 'Depreciation', value: 5.02, notes: ['2% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 10.677 },
      },
      otherIncome: {
        total: 2.353,
        items: [
          {
            id: 'interest',
            label: 'Interest',
            value: 2.353,
            notes: ['Interest income, net plus other income, net; source chart labels the combined line as Interest.'],
          },
        ],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 167.239, notes: ['64% margin', '+0pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 50.748, notes: ['19% margin', '+4pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 42.424, notes: ['16% margin', '+2pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +20%'],
            items: [
              { id: 'core_solutions', label: '核心解决方案', notes: ['同比 +18%', 'AppFolio 将其列报为订阅服务。'] },
              { id: 'value_added_services', label: '增值服务', notes: ['同比 +22%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 (25%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 19%', '同比 (1 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 14%', '同比 +0 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 9%', '同比 (1 个百分点)'] },
                { id: 'depreciation', label: '折旧', notes: ['占收入 2%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'interest', label: '利息', notes: ['包括净利息收入和净其他收入；来源图将合并项目标为利息。'] },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 64%', '同比 +0 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 19%', '同比 +4 个百分点'] },
            net: { label: '净利润', notes: ['利润率 16%', '同比 +2 个百分点'] },
          },
        },
      },
    },
    {
      key: 'appfolio-q2-fy26',
      company: 'AppFolio',
      period: 'Q2 FY26',
      periodNote: 'Ending Jun. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/appfolio-q2-fy26.png',
      roundingTolerance: 1,
      revenue: {
        total: 281,
        notes: ['+19% Y/Y'],
        items: [
          {
            id: 'core_solutions',
            label: 'Core solutions',
            value: 60,
            notes: ['+14% Y/Y', 'Reported as Subscription Services by AppFolio.'],
          },
          { id: 'value_added_services', label: 'Value Added Services', value: 219, notes: ['+22% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 2, notes: ['(37%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 103 },
        operatingExpenses: {
          total: 126,
          items: [
            { id: 'rnd', label: 'R&D', value: 44, notes: ['16% of revenue', '(4pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 51, notes: ['18% of revenue', '+2pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 26, notes: ['9% of revenue', '+0pp Y/Y'] },
            { id: 'depreciation', label: 'Depreciation', value: 5, notes: ['2% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 13 },
      },
      otherIncome: {
        total: 1,
        items: [
          {
            id: 'interest',
            label: 'Interest',
            value: 1,
            notes: ['Interest income, net plus other loss, net; source chart labels the combined line as Interest.'],
          },
        ],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 179, notes: ['64% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 53, notes: ['19% margin', '+2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 42, notes: ['15% margin', '(0pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月',
          revenue: {
            notes: ['同比 +19%'],
            items: [
              { id: 'core_solutions', label: '核心解决方案', notes: ['同比 +14%', 'AppFolio 将其列报为订阅服务。'] },
              { id: 'value_added_services', label: '增值服务', notes: ['同比 +22%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 (37%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 16%', '同比 (4 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 18%', '同比 +2 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 9%', '同比 +0 个百分点'] },
                { id: 'depreciation', label: '折旧', notes: ['占收入 2%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'interest', label: '利息', notes: ['包括净利息收入和净其他亏损；来源图将合并项目标为利息。'] },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 64%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 19%', '同比 +2 个百分点'] },
            net: { label: '净利润', notes: ['利润率 15%', '同比 (0 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
