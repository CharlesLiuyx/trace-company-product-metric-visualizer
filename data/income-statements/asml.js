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
      key: 'asml-q1-fy26',
      company: 'ASML',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '€',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/asml-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 8.8,
        notes: ['+13% Y/Y'],
        items: [
          {
            id: 'net_system_sales',
            label: 'Net system sales',
            value: 6.3,
            notes: ['+9% Y/Y'],
            children: [
              { id: 'euv', label: 'EUV', value: 4.1, notes: ['Extreme Ultraviolet'] },
              { id: 'arfi', label: 'ArFi', value: 1.4, notes: ['Argon Fluoride immersion'] },
              { id: 'arf_dry', label: 'ArF Dry', value: 0.1, notes: ['Argon Fluoride Dry'] },
              { id: 'krf', label: 'KrF', value: 0.4, notes: ['Krypton Fluoride'] },
              { id: 'i_line', label: 'I-line', value: 0.1 },
              { id: 'metrology_inspection', label: 'Metrology & Inspection', value: 0.1 },
            ],
          },
          { id: 'installed_base_management', label: 'Installed base management', value: 2.5, notes: ['+24% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 4.1 },
        operatingExpenses: {
          total: 1.5,
          items: [
            { id: 'rnd', label: 'R&D', value: 1.2 },
            { id: 'sga', label: 'SG&A', value: 0.3 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.5 },
      },
      otherIncome: {
        total: 0.041,
        items: [{ id: 'other', label: 'Other', value: 0.041, notes: ['€41M'] }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 4.6, notes: ['53% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 3.2, notes: ['36% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.7, notes: ['30% margin', '+0pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +13%'],
            items: [
              {
                id: 'net_system_sales', label: '系统净销售额', notes: ['同比 +9%'],
                children: [
                  { id: 'euv', label: 'EUV', notes: ['极紫外'] },
                  { id: 'arfi', label: 'ArFi', notes: ['氟化氩浸没式'] },
                  { id: 'arf_dry', label: 'ArF Dry', notes: ['氟化氩干式'] },
                  { id: 'krf', label: 'KrF', notes: ['氟化氪'] },
                  { id: 'i_line', label: 'I-line' },
                  { id: 'metrology_inspection', label: '量测与检测' },
                ],
              },
              { id: 'installed_base_management', label: '装机基础管理', notes: ['同比 +24%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发' },
                { id: 'sga', label: '销售、一般及行政' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'other', label: '其他', notes: ['€41M'] },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 53%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 36%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 30%', '同比 +0 个百分点'] },
          },
        },
      },
    },
    {
      key: 'asml-q4-fy25',
      company: 'ASML',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '€',
      unit: 'B',
      decimals: 2,
      sourceImage: 'input/processed/asml-q4-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 9.7,
        notes: ['+5% Y/Y'],
        items: [
          {
            id: 'net_system_sales',
            label: 'Net system sales',
            value: 7.6,
            notes: ['+7% Y/Y'],
            children: [
              { id: 'euv', label: 'EUV', value: 3.6, notes: ['Extreme Ultraviolet'] },
              { id: 'arfi', label: 'ArFi', value: 3.0, notes: ['Argon Fluoride immersion'] },
              { id: 'arf_dry', label: 'ArF Dry', value: 0.2, notes: ['Argon Fluoride Dry'] },
              { id: 'krf', label: 'KrF', value: 0.4, notes: ['Krypton Fluoride'] },
              { id: 'i_line', label: 'I-line', value: 0.1 },
              { id: 'metrology_inspection', label: 'Metrology & Inspection', value: 0.3 },
            ],
          },
          { id: 'installed_base_management', label: 'Installed base management', value: 2.1, notes: ['(1%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 4.6 },
        operatingExpenses: {
          total: 1.6,
          items: [
            { id: 'rnd', label: 'R&D', value: 1.3 },
            { id: 'sga', label: 'SG&A', value: 0.4 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.6 },
      },
      otherIncome: {
        total: 0.011,
        items: [{ id: 'other', label: 'Other', value: 0.011, notes: ['€11M'] }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 5.1, notes: ['52% margin', '+0pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 3.4, notes: ['35% margin', '(1pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.8, notes: ['29% margin', '(0pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +5%'],
            items: [
              {
                id: 'net_system_sales', label: '系统净销售额', notes: ['同比 +7%'],
                children: [
                  { id: 'euv', label: 'EUV', notes: ['极紫外'] },
                  { id: 'arfi', label: 'ArFi', notes: ['氟化氩浸没式'] },
                  { id: 'arf_dry', label: 'ArF Dry', notes: ['氟化氩干式'] },
                  { id: 'krf', label: 'KrF', notes: ['氟化氪'] },
                  { id: 'i_line', label: 'I-line' },
                  { id: 'metrology_inspection', label: '量测与检测' },
                ],
              },
              { id: 'installed_base_management', label: '装机基础管理', notes: ['同比 (1%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发' },
                { id: 'sga', label: '销售、一般及行政' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'other', label: '其他', notes: ['€11M'] },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 52%', '同比 +0 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 35%', '同比 (1 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 29%', '同比 (0 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
