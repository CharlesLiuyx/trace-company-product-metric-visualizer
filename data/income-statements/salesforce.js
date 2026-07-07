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
      key: 'salesforce-q1-fy27',
      company: 'Salesforce',
      period: 'Q1 FY27',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/salesforce-q1-fy27.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 11.1,
        notes: ['+13% Y/Y'],
        items: [
          {
            id: 'subscription_support',
            label: 'Subscription and support',
            value: 10.6,
            notes: ['+14% Y/Y'],
            children: [
              { id: 'agentforce_apps', label: 'Agentforce Apps', value: 6.9, notes: ['+9% Y/Y'] },
              { id: 'data360_platform', label: 'Data 360 Headless Platform & Other', value: 3.7, notes: ['+25% Y/Y'] },
            ],
          },
          { id: 'professional_services', label: 'Professional services', value: 0.5, notes: ['+2% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 2.6 },
        operatingExpenses: {
          total: 6.2,
          items: [
            { id: 'sm', label: 'S&M', value: 3.8, notes: ['34% of revenue', '(1pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 1.6, notes: ['15% of revenue', '(0pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.7, notes: ['7% of revenue', '(0pp) Y/Y'] },
            { id: 'restructuring', label: 'Restructuring', value: 0.1, notes: ['1% of revenue', '+0pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.6 },
      },
      otherIncome: {
        total: 0.4,
        items: [{ id: 'other', label: 'Other', value: 0.4 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 8.6, notes: ['77% margin', '(0pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.3, notes: ['21% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.1, notes: ['19% margin', '+3pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2027 财年第一季度',
          periodNote: '截至 2026 年 4 月',
          revenue: {
            notes: ['同比 +13%'],
            items: [
              {
                id: 'subscription_support', label: '订阅与支持', notes: ['同比 +14%'],
                children: [
                  { id: 'agentforce_apps', label: 'Agentforce 应用', notes: ['同比 +9%'] },
                  { id: 'data360_platform', label: 'Data 360 无头平台及其他', notes: ['同比 +25%'] },
                ],
              },
              { id: 'professional_services', label: '专业服务', notes: ['同比 +2%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 34%', '同比 (1 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 15%', '同比 (0 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 7%', '同比 (0 个百分点)'] },
                { id: 'restructuring', label: '重组', notes: ['占收入 1%', '同比 +0 个百分点'] },
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
            gross: { label: '毛利润', notes: ['利润率 77%', '同比 (0 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 21%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 19%', '同比 +3 个百分点'] },
          },
        },
      },
    },
    {
      key: 'salesforce-q4-fy26',
      company: 'Salesforce',
      period: 'Q4 FY26',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/salesforce-q4-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 11.2,
        notes: ['+12% Y/Y'],
        items: [
          {
            id: 'subscription_support',
            label: 'Subscription and support',
            value: 10.7,
            notes: ['+13% Y/Y'],
            children: [
              { id: 'sales', label: 'Sales', value: 2.3, notes: ['+9% Y/Y'] },
              { id: 'service', label: 'Service', value: 2.5, notes: ['+9% Y/Y'] },
              { id: 'platform_slack_other', label: 'Platform, Slack & Other', value: 2.7, notes: ['+38% Y/Y', 'Informatica'] },
              { id: 'marketing_commerce', label: 'Marketing & Commerce', value: 1.4, notes: ['+1% Y/Y'] },
              { id: 'integration_analytics', label: 'Integration & Analytics', value: 1.8, notes: ['+4% Y/Y', 'Mulesoft, Tableau'] },
            ],
          },
          { id: 'professional_services', label: 'Professional services', value: 0.5, notes: ['(3%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 2.5 },
        operatingExpenses: {
          total: 6.8,
          items: [
            { id: 'sm', label: 'S&M', value: 4.0, notes: ['36% of revenue', '+1pp Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 1.6, notes: ['14% of revenue', '+0pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.9, notes: ['8% of revenue', '+0pp Y/Y'] },
            { id: 'restructuring', label: 'Restructuring', value: 0.3, notes: ['3% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.7 },
      },
      otherIncome: {
        total: 0.8,
        items: [{ id: 'other', label: 'Other', value: 0.8 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 8.7, notes: ['78% margin', '(0pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.9, notes: ['17% margin', '(2pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.9, notes: ['17% margin', '+0pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第四季度',
          periodNote: '截至 2026 年 1 月',
          revenue: {
            notes: ['同比 +12%'],
            items: [
              {
                id: 'subscription_support', label: '订阅与支持', notes: ['同比 +13%'],
                children: [
                  { id: 'sales', label: '销售云', notes: ['同比 +9%'] },
                  { id: 'service', label: '服务云', notes: ['同比 +9%'] },
                  { id: 'platform_slack_other', label: '平台、Slack 与其他', notes: ['同比 +38%', 'Informatica 数据'] },
                  { id: 'marketing_commerce', label: '营销与商务', notes: ['同比 +1%'] },
                  { id: 'integration_analytics', label: '集成与分析', notes: ['同比 +4%', 'MuleSoft、Tableau'] },
                ],
              },
              { id: 'professional_services', label: '专业服务', notes: ['同比 (3%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 36%', '同比 +1 个百分点'] },
                { id: 'rnd', label: '研发', notes: ['占收入 14%', '同比 +0 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 8%', '同比 +0 个百分点'] },
                { id: 'restructuring', label: '重组', notes: ['占收入 3%', '同比 (0 个百分点)'] },
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
            gross: { label: '毛利润', notes: ['利润率 78%', '同比 (0 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 17%', '同比 (2 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 17%', '同比 +0 个百分点'] },
          },
        },
      },
    }
  );
})(window);
