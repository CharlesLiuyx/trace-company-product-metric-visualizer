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
      key: 'sap-q4-fy25',
      company: 'SAP',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '€',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/sap-q4-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 9.7,
        notes: ['+3% Y/Y'],
        items: [
          {
            id: 'cloud',
            label: 'Cloud',
            value: 5.6,
            notes: ['+19% Y/Y'],
            children: [
              { id: 'saas_paas', label: 'SaaS/PaaS', value: 5.5, notes: ['+21% Y/Y'] },
              { id: 'iaas', label: 'IaaS', value: 0.1, notes: ['(37%) Y/Y'] },
            ],
          },
          {
            id: 'licenses_support',
            label: 'Licenses & Support',
            value: 3.0,
            notes: ['(15%) Y/Y'],
            children: [
              { id: 'software_licenses', label: 'Software Licenses', value: 0.5, notes: ['(34%) Y/Y'] },
              { id: 'software_support', label: 'Software Support', value: 2.6, notes: ['(11%) Y/Y'] },
            ],
          },
          { id: 'services', label: 'Services', value: 1.1, notes: ['(4%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 2.6 },
        operatingExpenses: {
          total: 4.5,
          notes: ['Gross profit minus operating expenses differs from operating profit by €0.1B due to source chart rounding.'],
          items: [
            { id: 'sm', label: 'S&M', value: 2.3, notes: ['24% of revenue', '(3pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 1.7, notes: ['18% of revenue', '(0pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.5, notes: ['5% of revenue', '+1pp Y/Y'] },
            { id: 'other_opex', label: 'Other', value: 0.021, notes: ['IFRS other operating income/expense, net: €21M expense in Q4 FY25; displayed as (€0.0B) at one decimal.'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.9 },
      },
      otherIncome: {
        total: 0.2,
        items: [{ id: 'other_income', label: 'Other', value: 0.2 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 7.0, notes: ['73% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.6, notes: ['26% margin', '+5pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.9, notes: ['20% margin', '+2pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +3%'],
            items: [
              {
                id: 'cloud', label: '云', notes: ['同比 +19%'],
                children: [
                  { id: 'saas_paas', label: 'SaaS/PaaS', notes: ['同比 +21%'] },
                  { id: 'iaas', label: 'IaaS', notes: ['同比 (37%)'] },
                ],
              },
              {
                id: 'licenses_support', label: '许可证与支持', notes: ['同比 (15%)'],
                children: [
                  { id: 'software_licenses', label: '软件许可证', notes: ['同比 (34%)'] },
                  { id: 'software_support', label: '软件支持', notes: ['同比 (11%)'] },
                ],
              },
              { id: 'services', label: '服务', notes: ['同比 (4%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 24%', '同比 (3 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 18%', '同比 (0 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 5%', '同比 +1 个百分点'] },
                { id: 'other_opex', label: '其他', notes: ['源图四舍五入为 €0.0B。'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 73%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 26%', '同比 +5 个百分点'] },
            net: { label: '净利润', notes: ['利润率 20%', '同比 +2 个百分点'] },
          },
        },
      },
    },
    {
      key: 'sap-q1-fy26',
      company: 'SAP',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '€',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/sap-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 9.6,
        notes: ['+6% Y/Y'],
        items: [
          {
            id: 'cloud',
            label: 'Cloud',
            value: 6.0,
            notes: ['+19% Y/Y'],
            children: [
              { id: 'saas_paas', label: 'SaaS/PaaS', value: 5.9, notes: ['+21% Y/Y'] },
              { id: 'iaas', label: 'IaaS', value: 0.1, notes: ['(37%) Y/Y'] },
            ],
          },
          {
            id: 'licenses_support',
            label: 'Licenses & Support',
            value: 2.6,
            notes: ['(12%) Y/Y'],
            children: [
              { id: 'software_licenses', label: 'Software Licenses', value: 0.1, notes: ['(37%) Y/Y'] },
              { id: 'software_support', label: 'Software Support', value: 2.5, notes: ['(11%) Y/Y'] },
            ],
          },
          { id: 'services', label: 'Services', value: 1.0, notes: ['(6%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 2.6 },
        operatingExpenses: {
          total: 4.2,
          notes: ['Gross profit minus operating expenses differs from operating profit by €0.1B due to source chart rounding.'],
          items: [
            { id: 'sm', label: 'S&M', value: 2.1, notes: ['22% of revenue', '(2pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 1.7, notes: ['18% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.4, notes: ['4% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.8 },
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 7.0, notes: ['73% margin', '(0pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.7, notes: ['29% margin', '+3pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.9, notes: ['20% margin', '+0pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +6%'],
            items: [
              {
                id: 'cloud', label: '云', notes: ['同比 +19%'],
                children: [
                  { id: 'saas_paas', label: 'SaaS/PaaS', notes: ['同比 +21%'] },
                  { id: 'iaas', label: 'IaaS', notes: ['同比 (37%)'] },
                ],
              },
              {
                id: 'licenses_support', label: '许可证与支持', notes: ['同比 (12%)'],
                children: [
                  { id: 'software_licenses', label: '软件许可证', notes: ['同比 (37%)'] },
                  { id: 'software_support', label: '软件支持', notes: ['同比 (11%)'] },
                ],
              },
              { id: 'services', label: '服务', notes: ['同比 (6%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 22%', '同比 (2 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 18%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 4%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 73%', '同比 (0 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 29%', '同比 +3 个百分点'] },
            net: { label: '净利润', notes: ['利润率 20%', '同比 +0 个百分点'] },
          },
        },
      },
    }
  );
})(window);
