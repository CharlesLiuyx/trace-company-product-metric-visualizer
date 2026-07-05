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
      key: 'microsoft-q3-fy26-by-bu',
      company: 'Microsoft',
      period: 'Q3 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/microsoft-q3-fy26-by-bu.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 82.9,
        notes: ['+18% Y/Y'],
        items: [
          {
            id: 'productivity_business_processes',
            label: 'Productivity & Business Processes',
            value: 35.0,
            notes: ['+17% Y/Y', '60% operating margin', '+2pp Y/Y'],
          },
          {
            id: 'intelligent_cloud',
            label: 'Intelligent Cloud',
            value: 34.7,
            notes: ['+30% Y/Y', '40% operating margin', '(2pp) Y/Y'],
          },
          {
            id: 'more_personal_computing',
            label: 'More Personal Computing',
            value: 13.2,
            notes: ['(1%) Y/Y', '28% operating margin', '+1pp Y/Y'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 26.8 },
        operatingExpenses: {
          total: 17.7,
          items: [
            { id: 'rnd', label: 'R&D', value: 8.9, notes: ['11% of revenue', '(1pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 6.8, notes: ['8% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 1.9, notes: ['2% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 7.6 },
      },
      otherIncome: {
        total: 0.9,
        items: [{ id: 'other', label: 'Other', value: 0.9 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 56.1, notes: ['68% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 38.4, notes: ['46% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 31.8, notes: ['38% margin', '+1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第三季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +18%'],
            items: [
              { id: 'productivity_business_processes', label: '生产力与业务流程', notes: ['同比 +17%', '营业利润率 60%', '同比 +2 个百分点'] },
              { id: 'intelligent_cloud', label: '智能云', notes: ['同比 +30%', '营业利润率 40%', '同比 (2 个百分点)'] },
              { id: 'more_personal_computing', label: '更多个人计算', notes: ['同比 (1%)', '营业利润率 28%', '同比 +1 个百分点'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 11%', '同比 (1 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 8%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 2%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'other', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 68%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 46%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 38%', '同比 +1 个百分点'] },
          },
        },
      },
    },
    {
      key: 'microsoft-q3-fy26',
      company: 'Microsoft',
      period: 'Q3 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/microsoft-q3-fy26.png',
      roundingTolerance: 3.1,
      revenue: {
        total: 82.9,
        notes: [
          '+18% Y/Y',
          'Source chart business-line items sum to $85.8B versus reported revenue of $82.9B; retained as source business attribution with classification/rounding tolerance.',
        ],
        items: [
          { id: 'server', label: 'Server', value: 35.6, notes: ['+32% Y/Y'] },
          { id: 'microsoft_365_commercial', label: 'Microsoft 365 Commercial', value: 25.6, notes: ['+17% Y/Y'] },
          { id: 'gaming', label: 'Gaming', value: 5.3, notes: ['(7%) Y/Y'] },
          { id: 'linkedin', label: 'LinkedIn', value: 4.8, notes: ['+12% Y/Y'] },
          { id: 'windows_devices', label: 'Windows & Devices', value: 4.0, notes: ['(2%) Y/Y'] },
          { id: 'search', label: 'Search', value: 3.8, notes: ['+9% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 6.7, notes: ['+16% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 26.8 },
        operatingExpenses: {
          total: 17.7,
          notes: ['Operating expense detail shown in the source chart sums to $17.6B due to rounding.'],
          items: [
            { id: 'rnd', label: 'R&D', value: 8.9, notes: ['11% of revenue', '(1pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 6.8, notes: ['8% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 1.9, notes: ['2% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 7.6 },
      },
      otherIncome: {
        total: 0.9,
        items: [{ id: 'other', label: 'Other', value: 0.9 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 56.1, notes: ['68% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 38.4, notes: ['46% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 31.8, notes: ['38% margin', '+1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第三季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +18%', 'Source chart business-line items sum to $85.8B versus reported 收入 of $82.9B；retained as source business attribution with classification/rounding tolerance.'],
            items: [
              { id: 'server', label: '服务器', notes: ['同比 +32%'] },
              { id: 'microsoft_365_commercial', label: 'Microsoft 365 商业版', notes: ['同比 +17%'] },
              { id: 'gaming', label: '游戏', notes: ['同比 (7%)'] },
              { id: 'linkedin', label: 'LinkedIn', notes: ['同比 +12%'] },
              { id: 'windows_devices', label: 'Windows 与设备', notes: ['同比 (2%)'] },
              { id: 'search', label: '搜索', notes: ['同比 +9%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 +16%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 11%', '同比 (1 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 8%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 2%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'other', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 68%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 46%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 38%', '同比 +1 个百分点'] },
          },
        },
      },
    }
  );
})(window);
