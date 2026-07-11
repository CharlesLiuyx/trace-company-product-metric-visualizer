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
      key: 'applied-materials-q2-fy26',
      company: 'Applied Materials',
      period: 'Q2 FY26',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/applied-materials-q2-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 7.9,
        notes: ['+11% Y/Y'],
        items: [
          {
            id: 'semiconductor_systems',
            label: 'Semiconductor Systems',
            value: 6.0,
            notes: ['+10% Y/Y'],
            children: [
              { id: 'foundry_logic_other', label: 'Foundry, logic and other', value: 4.0, notes: ['+12% Y/Y'] },
              { id: 'dram', label: 'DRAM', value: 1.7, notes: ['+19% Y/Y'] },
              { id: 'flash_memory', label: 'Flash memory', value: 0.2, notes: ['(37%) Y/Y'] },
            ],
          },
          { id: 'applied_global_services', label: 'Applied Global Services', value: 1.7, notes: ['+17% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 0.3, notes: ['+0% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 4.0 },
        operatingExpenses: {
          total: 1.4,
          items: [
            { id: 'rnd', label: 'R&D', value: 1.0, notes: ['13% of revenue', '+0pp Y/Y'] },
            { id: 'marketing_selling', label: 'Marketing & selling', value: 0.2, notes: ['3% of revenue', '(0pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.2, notes: ['2% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.4 },
      },
      otherIncome: {
        total: 0.7,
        items: [{ id: 'other_income', label: 'Other', value: 0.7 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 3.9, notes: ['50% margin', '+5pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.5, notes: ['32% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.8, notes: ['35% margin', '+5pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 4 月',
          revenue: {
            notes: ['同比 +11%'],
            items: [
              {
                id: 'semiconductor_systems',
                label: '半导体系统',
                notes: ['同比 +10%'],
                children: [
                  { id: 'foundry_logic_other', label: '代工、逻辑及其他', notes: ['同比 +12%'] },
                  { id: 'dram', label: 'DRAM', notes: ['同比 +19%'] },
                  { id: 'flash_memory', label: '闪存', notes: ['同比 (37%)'] },
                ],
              },
              { id: 'applied_global_services', label: '应用全球服务', notes: ['同比 +17%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 +0%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 13%', '同比 +0 个百分点'] },
                { id: 'marketing_selling', label: '营销与销售', notes: ['占收入 3%', '同比 (0 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 2%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 50%', '同比 +5 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 32%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 35%', '同比 +5 个百分点'] },
          },
        },
      },
    },
    {
      key: 'applied-materials-q1-fy26',
      company: 'Applied Materials',
      period: 'Q1 FY26',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/applied-materials-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 7.0,
        notes: ['(2%) Y/Y'],
        items: [
          {
            id: 'semiconductor_systems',
            label: 'Semiconductor Systems',
            value: 5.1,
            notes: ['(8%) Y/Y'],
            children: [
              { id: 'foundry_logic_other', label: 'Foundry, logic and other', value: 3.4, notes: ['(9%) Y/Y'] },
              { id: 'dram', label: 'DRAM', value: 1.3, notes: ['(15%) Y/Y'] },
              { id: 'flash_memory', label: 'Flash memory', value: 0.4, notes: ['+61% Y/Y'] },
            ],
          },
          { id: 'applied_global_services', label: 'Applied Global Services', value: 1.6, notes: ['+15% Y/Y'] },
          { id: 'corporate', label: 'Corporate', value: 0.3 },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 3.6 },
        operatingExpenses: {
          total: 1.6,
          items: [
            { id: 'rnd', label: 'R&D', value: 0.9, notes: ['13% of revenue', '+1pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.2, notes: ['3% of revenue', '(1pp) Y/Y'] },
            { id: 'marketing_selling', label: 'Marketing & selling', value: 0.2, notes: ['3% of revenue', '+0pp Y/Y'] },
            { id: 'restructuring', label: 'Restructuring', value: 0.3 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.3 },
      },
      otherIncome: {
        total: 0.5,
        items: [{ id: 'other', label: 'Other', value: 0.5 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 3.4, notes: ['49% margin', '+5pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.8, notes: ['26% margin', '(4pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.0, notes: ['29% margin', '+12pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 1 月',
          revenue: {
            notes: ['同比 (2%)'],
            items: [
              {
                id: 'semiconductor_systems',
                label: '半导体系统',
                notes: ['同比 (8%)'],
                children: [
                  { id: 'foundry_logic_other', label: '代工、逻辑及其他', notes: ['同比 (9%)'] },
                  { id: 'dram', label: 'DRAM', notes: ['同比 (15%)'] },
                  { id: 'flash_memory', label: '闪存', notes: ['同比 +61%'] },
                ],
              },
              { id: 'applied_global_services', label: '应用全球服务', notes: ['同比 +15%'] },
              { id: 'corporate', label: '公司部门' },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 13%', '同比 +1 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 3%', '同比 (1 个百分点)'] },
                { id: 'marketing_selling', label: '营销与销售', notes: ['占收入 3%', '同比 +0 个百分点'] },
                { id: 'restructuring', label: '重组费用' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 49%', '同比 +5 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 26%', '同比 (4 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 29%', '同比 +12 个百分点'] },
          },
        },
      },
    }
  );
})(window);
