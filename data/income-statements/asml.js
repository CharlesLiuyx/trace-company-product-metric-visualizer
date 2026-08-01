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
      key: 'asml-q1-fy25',
      company: 'ASML',
      period: 'Q1 FY25',
      periodNote: 'Ending Mar. 2025',
      currency: '€',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/asml-q1-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 7.7,
        notes: ['+46% Y/Y'],
        items: [
          {
            id: 'net_system_sales',
            label: 'Net system sales',
            value: 5.7,
            notes: ['+45% Y/Y'],
            children: [
              { id: 'euv', label: 'EUV', value: 3.2, notes: ['Extreme Ultraviolet'] },
              { id: 'arfi', label: 'ArFi', value: 1.9, notes: ['Argon Fluoride immersion'] },
              { id: 'arf_dry', label: 'ArF Dry', value: 0.1, notes: ['Argon Fluoride Dry'] },
              { id: 'krf', label: 'KrF', value: 0.3, notes: ['Krypton Fluoride'] },
              { id: 'i_line', label: 'I-line', value: 0.1 },
              { id: 'metrology_inspection', label: 'Metrology & Inspection', value: 0.2 },
            ],
          },
          { id: 'installed_base_management', label: 'Installed base management', value: 2.0, notes: ['+51% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 3.6 },
        operatingExpenses: {
          total: 1.4,
          items: [
            { id: 'rnd', label: 'R&D', value: 1.2 },
            { id: 'sga', label: 'SG&A', value: 0.3 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.5 },
      },
      otherIncome: {
        total: 0.049,
        items: [{ id: 'other', label: 'Other gains', value: 0.049, notes: ['€49M'] }],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 4.2, notes: ['54% margin', '+3pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.7, notes: ['35% margin', '+9pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.3, notes: ['30% margin', '+7pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第一季度',
          periodNote: '截至 2025 年 3 月',
          revenue: {
            notes: ['同比 +46%'],
            items: [
              {
                id: 'net_system_sales', label: '系统净销售额', notes: ['同比 +45%'],
                children: [
                  { id: 'euv', label: 'EUV', notes: ['极紫外'] },
                  { id: 'arfi', label: 'ArFi', notes: ['氟化氩浸没式'] },
                  { id: 'arf_dry', label: 'ArF Dry', notes: ['氟化氩干式'] },
                  { id: 'krf', label: 'KrF', notes: ['氟化氪'] },
                  { id: 'i_line', label: 'I-line' },
                  { id: 'metrology_inspection', label: '量测与检测' },
                ],
              },
              { id: 'installed_base_management', label: '装机基础管理', notes: ['同比 +51%'] },
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
          otherIncome: { items: [{ id: 'other', label: '其他收益', notes: ['€49M'] }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 54%', '同比 +3 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 35%', '同比 +9 个百分点'] },
            net: { label: '净利润', notes: ['利润率 30%', '同比 +7 个百分点'] },
          },
        },
      },
    },
    {
      key: 'asml-fy23',
      company: 'ASML',
      period: 'FY23',
      periodNote: 'Year ending Dec. 2023',
      currency: '€',
      unit: 'B',
      decimals: 2,
      sourceImage: 'input/processed/asml-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 27.6,
        notes: ['+30% Y/Y'],
        items: [
          {
            id: 'net_system_sales',
            label: 'Net system sales',
            value: 21.9,
            notes: ['+42% Y/Y'],
            children: [
              { id: 'euv', label: 'EUV', value: 9.2, notes: ['Extreme Ultraviolet', '+30% Y/Y'] },
              { id: 'arfi', label: 'ArFi', value: 9.0, notes: ['Argon Fluoride immersion', '+71% Y/Y'] },
              { id: 'arf_dry', label: 'ArF Dry', value: 0.9, notes: ['Argon Fluoride Dry', '+42% Y/Y'] },
              { id: 'krf', label: 'KrF', value: 2.2, notes: ['Krypton Fluoride', '+29% Y/Y'] },
              { id: 'i_line', label: 'I-line', value: 0.2, notes: ['+42% Y/Y'] },
              { id: 'metrology_inspection', label: 'Metrology & Inspection', value: 0.4, notes: ['(29%) Y/Y'] },
            ],
          },
          { id: 'installed_base_management', label: 'Installed base management', value: 5.6, notes: ['(2%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 13.4 },
        operatingExpenses: {
          total: 5.1,
          items: [
            { id: 'rnd', label: 'R&D', value: 4.0 },
            { id: 'sga', label: 'SG&A', value: 1.1 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 1.4 },
      },
      otherIncome: {
        total: 0.041,
        items: [{ id: 'other', label: 'Other gains', value: 0.041, notes: ['€41M'] }],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 14.1, notes: ['51% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 9.0, notes: ['33% margin', '+2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 7.6, notes: ['28% margin', '+1pp Y/Y', 'EPS €19.89'] },
      },
      i18n: {
        zh: {
          period: '2023 财年',
          periodNote: '截至 2023 年 12 月',
          revenue: {
            notes: ['同比 +30%'],
            items: [
              {
                id: 'net_system_sales', label: '系统净销售额', notes: ['同比 +42%'],
                children: [
                  { id: 'euv', label: 'EUV', notes: ['极紫外', '同比 +30%'] },
                  { id: 'arfi', label: 'ArFi', notes: ['氟化氩浸没式', '同比 +71%'] },
                  { id: 'arf_dry', label: 'ArF Dry', notes: ['氟化氩干式', '同比 +42%'] },
                  { id: 'krf', label: 'KrF', notes: ['氟化氪', '同比 +29%'] },
                  { id: 'i_line', label: 'I-line', notes: ['同比 +42%'] },
                  { id: 'metrology_inspection', label: '量测与检测', notes: ['同比 (29%)'] },
                ],
              },
              { id: 'installed_base_management', label: '装机基础管理', notes: ['同比 (2%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: { items: [{ id: 'rnd', label: '研发' }, { id: 'sga', label: '销售、一般及行政' }] },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other', label: '其他收益', notes: ['€41M'] }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 51%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 33%', '同比 +2 个百分点'] },
            net: { label: '净利润', notes: ['利润率 28%', '同比 +1 个百分点', '每股收益 €19.89'] },
          },
        },
      },
    },
    {
      key: 'asml-q3-fy22',
      company: 'ASML',
      period: 'Q3 FY22',
      periodNote: 'Ending Sep. 2022',
      currency: '€',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/asml-q3-fy22.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 5.8,
        notes: ['+10% Y/Y'],
        items: [
          { id: 'logic', label: 'Logic', value: 2.9, notes: ['(1%) Y/Y'] },
          { id: 'memory', label: 'Memory', value: 1.4, notes: ['+14% Y/Y'] },
          { id: 'installed_base_management', label: 'Installed base management', value: 1.5, notes: ['+35% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 2.8 },
        operatingExpenses: {
          total: 1.1,
          items: [
            { id: 'rnd', label: 'R&D', value: 0.8 },
            { id: 'sga', label: 'SG&A', value: 0.2 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.252 },
      },
      otherIncome: {
        total: 0.015,
        items: [{ id: 'other', label: 'Other gains', value: 0.015, notes: ['€15M'] }],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 3.0, notes: ['52% margin', '+0.1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.9, notes: ['34% margin', '(3pp) Y/Y'] },
        net: {
          id: 'net_profit',
          label: 'Net profit',
          value: 1.7,
          notes: ['29% margin', '(4pp) Y/Y', 'EPS €4.29', 'Dividend €1.37'],
        },
      },
      i18n: {
        zh: {
          period: '2022 财年第三季度',
          periodNote: '截至 2022 年 9 月',
          revenue: {
            notes: ['同比 +10%'],
            items: [
              { id: 'logic', label: '逻辑芯片', notes: ['同比 (1%)'] },
              { id: 'memory', label: '存储芯片', notes: ['同比 +14%'] },
              { id: 'installed_base_management', label: '装机基础管理', notes: ['同比 +35%'] },
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
            items: [{ id: 'other', label: '其他收益', notes: ['€15M'] }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 52%', '同比 +0.1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 34%', '同比 (3 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 29%', '同比 (4 个百分点)', '每股收益 €4.29', '股息 €1.37'] },
          },
        },
      },
    },
    {
      key: 'asml-q3-fy24',
      company: 'ASML',
      period: 'Q3 FY24',
      periodNote: 'Ending Sep. 2024',
      currency: '€',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/asml-q3-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 7.5,
        notes: ['+12% Y/Y'],
        items: [
          {
            id: 'net_system_sales', label: 'Net system sales', value: 5.9, notes: ['+12% Y/Y'],
            children: [
              { id: 'euv', label: 'EUV', value: 2.1, notes: ['Extreme Ultraviolet', '+12% Y/Y'] },
              { id: 'arfi', label: 'ArFi', value: 2.8, notes: ['Argon Fluoride immersion', '+12% Y/Y'] },
              { id: 'arf_dry', label: 'ArF Dry', value: 0.2, notes: ['Argon Fluoride Dry', '(16%) Y/Y'] },
              { id: 'krf', label: 'KrF', value: 0.6, notes: ['Krypton Fluoride', '+12% Y/Y'] },
              { id: 'i_line', label: 'I-line', value: 0.1, notes: ['+123% Y/Y'] },
              { id: 'metrology_inspection', label: 'Metrology & Inspection', value: 0.1, notes: ['+12% Y/Y'] },
            ],
          },
          { id: 'installed_base_management', label: 'Installed base management', value: 1.5, notes: ['+13% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 3.7 },
        operatingExpenses: {
          total: 1.4,
          items: [
            { id: 'rnd', label: 'R&D', value: 1.1 },
            { id: 'sga', label: 'SG&A', value: 0.3 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.4 },
      },
      otherIncome: { total: 0.1, items: [{ id: 'other', label: 'Other gains', value: 0.1 }] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 3.8, notes: ['51% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.4, notes: ['33% margin', '(0pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.1, notes: ['28% margin', '(1pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第三季度',
          periodNote: '截至 2024 年 9 月',
          revenue: {
            notes: ['同比 +12%'],
            items: [
              {
                id: 'net_system_sales', label: '系统净销售额', notes: ['同比 +12%'],
                children: [
                  { id: 'euv', label: 'EUV', notes: ['极紫外', '同比 +12%'] },
                  { id: 'arfi', label: 'ArFi', notes: ['氟化氩浸没式', '同比 +12%'] },
                  { id: 'arf_dry', label: 'ArF Dry', notes: ['氟化氩干式', '同比 (16%)'] },
                  { id: 'krf', label: 'KrF', notes: ['氟化氪', '同比 +12%'] },
                  { id: 'i_line', label: 'I-line', notes: ['同比 +123%'] },
                  { id: 'metrology_inspection', label: '量测与检测', notes: ['同比 +12%'] },
                ],
              },
              { id: 'installed_base_management', label: '装机基础管理', notes: ['同比 +13%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: { items: [{ id: 'rnd', label: '研发' }, { id: 'sga', label: '销售、一般及行政' }] },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other', label: '其他收益' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 51%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 33%', '同比 (0 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 28%', '同比 (1 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'asml-q1-fy23',
      company: 'ASML',
      period: 'Q1 FY23',
      periodNote: 'Ending Apr. 2023',
      currency: '€',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/asml-q1-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 6.7,
        notes: ['+91% Y/Y'],
        items: [
          { id: 'logic', label: 'Logic', value: 3.7, notes: ['+227% Y/Y'] },
          { id: 'memory', label: 'Memory', value: 1.6, notes: ['+40% Y/Y'] },
          { id: 'installed_base_management', label: 'Installed base management', value: 1.4, notes: ['+13% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 3.3 },
        operatingExpenses: {
          total: 1.2,
          items: [
            { id: 'rnd', label: 'R&D', value: 0.9 },
            { id: 'sga', label: 'SG&A', value: 0.3 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.3 },
      },
      otherIncome: {
        total: 0.1,
        items: [{ id: 'other_gains', label: 'Other gains', value: 0.1 }],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 3.4, notes: ['51% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.2, notes: ['33% margin', '+10pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.0, notes: ['29% margin', '+9pp Y/Y', 'EPS €4.96'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第一季度',
          periodNote: '截至 2023 年 4 月',
          revenue: {
            notes: ['同比 +91%'],
            items: [
              { id: 'logic', label: '逻辑芯片', notes: ['同比 +227%'] },
              { id: 'memory', label: '存储芯片', notes: ['同比 +40%'] },
              { id: 'installed_base_management', label: '装机基础管理', notes: ['同比 +13%'] },
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
          otherIncome: { items: [{ id: 'other_gains', label: '其他收益' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 51%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 33%', '同比 +10 个百分点'] },
            net: { label: '净利润', notes: ['利润率 29%', '同比 +9 个百分点', '每股收益 €4.96'] },
          },
        },
      },
    },
    {
      key: 'asml-q1-fy24',
      company: 'ASML',
      period: 'Q1 FY24',
      periodNote: 'Ending Mar. 2024',
      currency: '€',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/asml-q1-fy24.png',
      roundingTolerance: 0.2,
      revenue: {
        total: 5.3,
        notes: ['(22%) Y/Y'],
        items: [
          {
            id: 'net_system_sales',
            label: 'Net system sales',
            value: 4.0,
            notes: ['(26%) Y/Y'],
            children: [
              { id: 'euv', label: 'EUV', value: 1.8, notes: ['Extreme Ultraviolet', '(37%) Y/Y'] },
              { id: 'arfi', label: 'ArFi', value: 1.5, notes: ['Argon Fluoride immersion', '(3%) Y/Y'] },
              { id: 'arf_dry', label: 'ArF Dry', value: 0.1, notes: ['Argon Fluoride Dry', '(26%) Y/Y'] },
              { id: 'krf', label: 'KrF', value: 0.3, notes: ['Krypton Fluoride', '(34%) Y/Y'] },
              { id: 'i_line', label: 'I-line', value: 0.04, notes: ['€40M', '(26%) Y/Y'] },
              { id: 'metrology_inspection', label: 'Metrology & Inspection', value: 0.1, notes: ['(26%) Y/Y'] },
            ],
          },
          { id: 'installed_base_management', label: 'Installed base management', value: 1.3, notes: ['(6%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 2.6 },
        operatingExpenses: {
          total: 1.3,
          items: [
            { id: 'rnd', label: 'R&D', value: 1.0 },
            { id: 'sga', label: 'SG&A', value: 0.3 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.2 },
      },
      otherIncome: {
        total: 0.026,
        items: [{ id: 'other', label: 'Other gains', value: 0.026, notes: ['€26M'] }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 2.7, notes: ['51% margin', '+0pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.4, notes: ['26% margin', '(6pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.2, notes: ['23% margin', '(6pp) Y/Y', 'EPS €3.11'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第一季度',
          periodNote: '截至 2024 年 3 月',
          revenue: {
            notes: ['同比 (22%)'],
            items: [
              {
                id: 'net_system_sales', label: '系统净销售额', notes: ['同比 (26%)'],
                children: [
                  { id: 'euv', label: 'EUV', notes: ['极紫外', '同比 (37%)'] },
                  { id: 'arfi', label: 'ArFi', notes: ['氟化氩浸没式', '同比 (3%)'] },
                  { id: 'arf_dry', label: 'ArF Dry', notes: ['氟化氩干式', '同比 (26%)'] },
                  { id: 'krf', label: 'KrF', notes: ['氟化氪', '同比 (34%)'] },
                  { id: 'i_line', label: 'I-line', notes: ['€40M', '同比 (26%)'] },
                  { id: 'metrology_inspection', label: '量测与检测', notes: ['同比 (26%)'] },
                ],
              },
              { id: 'installed_base_management', label: '装机基础管理', notes: ['同比 (6%)'] },
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
            items: [{ id: 'other', label: '其他收益', notes: ['€26M'] }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 51%', '同比 +0 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 26%', '同比 (6 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 23%', '同比 (6 个百分点)', '每股收益 €3.11'] },
          },
        },
      },
    },
    {
      key: 'asml-q2-fy24',
      company: 'ASML',
      period: 'Q2 FY24',
      periodNote: 'Ending Jun. 2024',
      currency: '€',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/asml-q2-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 6.2,
        notes: ['(10%) Y/Y'],
        items: [
          {
            id: 'net_system_sales',
            label: 'Net system sales',
            value: 4.8,
            notes: ['(15%) Y/Y'],
            children: [
              { id: 'euv', label: 'EUV', value: 1.5, notes: ['(29%) Y/Y', 'Extreme Ultraviolet'] },
              { id: 'arfi', label: 'ArFi', value: 2.4, notes: ['(13%) Y/Y', 'Argon Fluoride immersion'] },
              { id: 'arf_dry', label: 'ArF Dry', value: 0.3, notes: ['+197% Y/Y', 'Argon Fluoride Dry'] },
              { id: 'krf', label: 'KrF', value: 0.4, notes: ['(15%) Y/Y', 'Krypton Fluoride'] },
              { id: 'i_line', label: 'I-line', value: 0.1, notes: ['+70% Y/Y'] },
              { id: 'metrology_inspection', label: 'Metrology & Inspection', value: 0.048, notes: ['(58%) Y/Y'] },
            ],
          },
          { id: 'installed_base_management', label: 'Installed base management', value: 1.5, notes: ['+14% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 3.0 },
        operatingExpenses: {
          total: 1.4,
          items: [
            { id: 'rnd', label: 'R&D', value: 1.1 },
            { id: 'sga', label: 'SG&A', value: 0.3 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.3 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.012,
        items: [{ id: 'other', label: 'Other', value: 0.012, notes: ['€12M'] }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 3.2, notes: ['51% margin', '+0pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.8, notes: ['29% margin', '(3pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.5, notes: ['25% margin', '(4pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第二季度',
          periodNote: '截至 2024 年 6 月',
          revenue: {
            notes: ['同比 (10%)'],
            items: [
              {
                id: 'net_system_sales', label: '系统净销售额', notes: ['同比 (15%)'],
                children: [
                  { id: 'euv', label: 'EUV', notes: ['同比 (29%)', '极紫外'] },
                  { id: 'arfi', label: 'ArFi', notes: ['同比 (13%)', '氟化氩浸没式'] },
                  { id: 'arf_dry', label: 'ArF Dry', notes: ['同比 +197%', '氟化氩干式'] },
                  { id: 'krf', label: 'KrF', notes: ['同比 (15%)', '氟化氪'] },
                  { id: 'i_line', label: 'I-line', notes: ['同比 +70%'] },
                  { id: 'metrology_inspection', label: '量测与检测', notes: ['同比 (58%)'] },
                ],
              },
              { id: 'installed_base_management', label: '装机基础管理', notes: ['同比 +14%'] },
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
          otherExpenses: {
            items: [
              { id: 'other', label: '其他', notes: ['€12M'] },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 51%', '同比 +0 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 29%', '同比 (3 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 25%', '同比 (4 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'asml-q2-fy25',
      company: 'ASML',
      period: 'Q2 FY25',
      periodNote: 'Ending Jun. 2025',
      currency: '€',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/asml-q2-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 7.7,
        notes: ['+23% Y/Y'],
        items: [
          {
            id: 'net_system_sales',
            label: 'Net system sales',
            value: 5.6,
            notes: ['+18% Y/Y'],
            children: [
              { id: 'euv', label: 'EUV', value: 2.7, notes: ['Extreme Ultraviolet'] },
              { id: 'arfi', label: 'ArFi', value: 2.4, notes: ['Argon Fluoride immersion'] },
              { id: 'arf_dry', label: 'ArF Dry', value: 0.1, notes: ['Argon Fluoride Dry'] },
              { id: 'krf', label: 'KrF', value: 0.2, notes: ['Krypton Fluoride'] },
              { id: 'i_line', label: 'I-line', value: 0.1 },
              { id: 'metrology_inspection', label: 'Metrology & Inspection', value: 0.1 },
            ],
          },
          { id: 'installed_base_management', label: 'Installed base management', value: 2.1, notes: ['+41% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 3.6 },
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
        total: 0.1,
        items: [{ id: 'other_gains', label: 'Other gains', value: 0.1 }],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 4.1, notes: ['54% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.7, notes: ['35% margin', '+5pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.3, notes: ['30% margin', '+4pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第二季度',
          periodNote: '截至 2025 年 6 月',
          revenue: {
            notes: ['同比 +23%'],
            items: [
              {
                id: 'net_system_sales', label: '系统净销售额', notes: ['同比 +18%'],
                children: [
                  { id: 'euv', label: 'EUV', notes: ['极紫外'] },
                  { id: 'arfi', label: 'ArFi', notes: ['氟化氩浸没式'] },
                  { id: 'arf_dry', label: 'ArF Dry', notes: ['氟化氩干式'] },
                  { id: 'krf', label: 'KrF', notes: ['氟化氪'] },
                  { id: 'i_line', label: 'I-line' },
                  { id: 'metrology_inspection', label: '量测与检测' },
                ],
              },
              { id: 'installed_base_management', label: '装机基础管理', notes: ['同比 +41%'] },
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
          otherIncome: { items: [{ id: 'other_gains', label: '其他收益' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 54%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 35%', '同比 +5 个百分点'] },
            net: { label: '净利润', notes: ['利润率 30%', '同比 +4 个百分点'] },
          },
        },
      },
    },
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
      key: 'asml-q4-fy24',
      company: 'ASML',
      period: 'Q4 FY24',
      periodNote: 'Ending Dec. 2024',
      currency: '€',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/asml-q4-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 9.3,
        notes: ['+28% Y/Y'],
        items: [
          {
            id: 'net_system_sales',
            label: 'Net system sales',
            value: 7.1,
            notes: ['+25% Y/Y'],
            children: [
              { id: 'euv', label: 'EUV', value: 3.0, notes: ['Extreme Ultraviolet'] },
              { id: 'arfi', label: 'ArFi', value: 2.9, notes: ['Argon Fluoride immersion'] },
              { id: 'arf_dry', label: 'ArF Dry', value: 0.1, notes: ['Argon Fluoride Dry'] },
              { id: 'krf', label: 'KrF', value: 0.6, notes: ['Krypton Fluoride'] },
              { id: 'i_line', label: 'I-line', value: 0.1 },
              { id: 'metrology_inspection', label: 'Metrology & Inspection', value: 0.3 },
            ],
          },
          { id: 'installed_base_management', label: 'Installed base management', value: 2.1, notes: ['+38% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 4.5 },
        operatingExpenses: {
          total: 1.4,
          items: [
            { id: 'rnd', label: 'R&D', value: 1.1 },
            { id: 'sga', label: 'SG&A', value: 0.3 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.7 },
      },
      otherIncome: {
        total: 0.1,
        items: [{ id: 'other_gains', label: 'Other gains', value: 0.1 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 4.8, notes: ['52% margin', '+0pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 3.4, notes: ['36% margin', '+3pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.7, notes: ['29% margin', '+1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第四季度',
          periodNote: '截至 2024 年 12 月',
          revenue: {
            notes: ['同比 +28%'],
            items: [
              {
                id: 'net_system_sales', label: '系统净销售额', notes: ['同比 +25%'],
                children: [
                  { id: 'euv', label: 'EUV', notes: ['极紫外'] },
                  { id: 'arfi', label: 'ArFi', notes: ['氟化氩浸没式'] },
                  { id: 'arf_dry', label: 'ArF Dry', notes: ['氟化氩干式'] },
                  { id: 'krf', label: 'KrF', notes: ['氟化氪'] },
                  { id: 'i_line', label: 'I-line' },
                  { id: 'metrology_inspection', label: '量测与检测' },
                ],
              },
              { id: 'installed_base_management', label: '装机基础管理', notes: ['同比 +38%'] },
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
            items: [{ id: 'other_gains', label: '其他收益' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 52%', '同比 +0 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 36%', '同比 +3 个百分点'] },
            net: { label: '净利润', notes: ['利润率 29%', '同比 +1 个百分点'] },
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
    },
    {
      key: 'asml-q2-fy23',
      company: 'ASML',
      period: 'Q2 FY23',
      periodNote: 'Ending Jun. 2023',
      currency: '€',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/asml-q2-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 6.9,
        notes: ['+27% Y/Y'],
        items: [
          { id: 'logic', label: 'Logic', value: 3.9, notes: ['+56% Y/Y'] },
          { id: 'memory', label: 'Memory', value: 1.7, notes: ['+5% Y/Y'] },
          { id: 'installed_base_management', label: 'Installed base management', value: 1.3, notes: ['+0% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 3.4 },
        operatingExpenses: {
          total: 1.3,
          items: [
            { id: 'rnd', label: 'R&D', value: 1.0 },
            { id: 'sga', label: 'SG&A', value: 0.3 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.4 },
      },
      otherIncome: {
        total: 0.1,
        items: [{ id: 'other_gains', label: 'Other gains', value: 0.1 }],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 3.5, notes: ['51% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.3, notes: ['33% margin', '+2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.9, notes: ['28% margin', '+2pp Y/Y', 'EPS €4.93'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第二季度',
          periodNote: '截至 2023 年 6 月',
          revenue: {
            notes: ['同比 +27%'],
            items: [
              { id: 'logic', label: '逻辑', notes: ['同比 +56%'] },
              { id: 'memory', label: '存储', notes: ['同比 +5%'] },
              { id: 'installed_base_management', label: '装机基础管理', notes: ['同比 +0%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: { items: [{ id: 'rnd', label: '研发' }, { id: 'sga', label: '销售、一般及行政' }] },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other_gains', label: '其他收益' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 51%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 33%', '同比 +2 个百分点'] },
            net: { label: '净利润', notes: ['利润率 28%', '同比 +2 个百分点', '每股收益 €4.93'] },
          },
        },
      },
    },
    {
      key: 'asml-q3-fy25',
      company: 'ASML',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '€',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/asml-q3-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 7.5,
        notes: ['+1% Y/Y'],
        items: [
          {
            id: 'net_system_sales',
            label: 'Net system sales',
            value: 5.6,
            notes: ['(6%) Y/Y'],
            children: [
              { id: 'euv', label: 'EUV', value: 2.1, notes: ['Extreme Ultraviolet'] },
              { id: 'arfi', label: 'ArFi', value: 2.9, notes: ['Argon Fluoride immersion'] },
              { id: 'arf_dry', label: 'ArF Dry', value: 0.1, notes: ['Argon Fluoride Dry'] },
              { id: 'krf', label: 'KrF', value: 0.2, notes: ['Krypton Fluoride'] },
              { id: 'i_line', label: 'I-line', value: 0.1 },
              { id: 'metrology_inspection', label: 'Metrology & Inspection', value: 0.2 },
            ],
          },
          { id: 'installed_base_management', label: 'Installed base management', value: 2.0, notes: ['+27% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 3.6 },
        operatingExpenses: {
          total: 1.4,
          items: [
            { id: 'rnd', label: 'R&D', value: 1.1 },
            { id: 'sga', label: 'SG&A', value: 0.3 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.4 },
      },
      otherIncome: {
        total: 0.1,
        items: [{ id: 'other', label: 'Other gains', value: 0.1 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 3.9, notes: ['52% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.5, notes: ['33% margin', '+0pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.1, notes: ['28% margin', '+0pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          revenue: {
            notes: ['同比 +1%'],
            items: [
              {
                id: 'net_system_sales', label: '系统净销售额', notes: ['同比 (6%)'],
                children: [
                  { id: 'euv', label: 'EUV', notes: ['极紫外'] },
                  { id: 'arfi', label: 'ArFi', notes: ['氟化氩浸没式'] },
                  { id: 'arf_dry', label: 'ArF Dry', notes: ['氟化氩干式'] },
                  { id: 'krf', label: 'KrF', notes: ['氟化氪'] },
                  { id: 'i_line', label: 'I-line' },
                  { id: 'metrology_inspection', label: '量测与检测' },
                ],
              },
              { id: 'installed_base_management', label: '装机基础管理', notes: ['同比 +27%'] },
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
              { id: 'other', label: '其他收益' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 52%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 33%', '同比 +0 个百分点'] },
            net: { label: '净利润', notes: ['利润率 28%', '同比 +0 个百分点'] },
          },
        },
      },
    },
    {
      key: 'asml-q4-fy22',
      company: 'ASML',
      period: 'Q4 FY22',
      periodNote: 'Ending Dec. 2022',
      currency: '€',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/asml-q4-fy22.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 6.4,
        notes: ['+29% Y/Y'],
        items: [
          { id: 'logic', label: 'Logic', value: 3.3, notes: ['+31% Y/Y'] },
          { id: 'memory', label: 'Memory', value: 1.4, notes: ['+52% Y/Y'] },
          { id: 'installed_base_management', label: 'Installed base management', value: 1.7, notes: ['+11% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 3.1 },
        operatingExpenses: {
          total: 1.2,
          items: [
            { id: 'rnd', label: 'R&D', value: 0.9 },
            { id: 'sga', label: 'SG&A', value: 0.3 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.4 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.003,
        items: [{ id: 'other', label: 'Other', value: 0.003, notes: ['€3M'] }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 3.3, notes: ['51% margin', '(3pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.1, notes: ['33% margin', '(8pp) Y/Y'] },
        net: {
          id: 'net_profit',
          label: 'Net profit',
          value: 1.8,
          notes: ['27% margin', '(8pp) Y/Y', 'EPS €4.60', 'Dividend €1.37'],
        },
      },
      i18n: {
        zh: {
          period: '2022 财年第四季度',
          periodNote: '截至 2022 年 12 月',
          revenue: {
            notes: ['同比 +29%'],
            items: [
              { id: 'logic', label: '逻辑芯片', notes: ['同比 +31%'] },
              { id: 'memory', label: '存储芯片', notes: ['同比 +52%'] },
              { id: 'installed_base_management', label: '装机基础管理', notes: ['同比 +11%'] },
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
          otherExpenses: {
            items: [{ id: 'other', label: '其他', notes: ['€3M'] }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 51%', '同比 (3 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 33%', '同比 (8 个百分点)'] },
            net: {
              label: '净利润',
              notes: ['利润率 27%', '同比 (8 个百分点)', '每股收益 €4.60', '股息 €1.37'],
            },
          },
        },
      },
    },
    {
      key: 'asml-q3-fy23',
      company: 'ASML',
      period: 'Q3 FY23',
      periodNote: 'Ending Sep. 2023',
      currency: '€',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/asml-q3-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 6.7,
        notes: ['+15% Y/Y'],
        items: [
          {
            id: 'net_system_sales',
            label: 'Net system sales',
            value: 5.3,
            notes: ['+25% Y/Y'],
            children: [
              { id: 'euv', label: 'EUV', value: 1.9, notes: ['Extreme Ultraviolet', '(14%) Y/Y'] },
              { id: 'arfi', label: 'ArFi', value: 2.5, notes: ['Argon Fluoride immersion', '+93% Y/Y'] },
              { id: 'arf_dry', label: 'ArF Dry', value: 0.2, notes: ['Argon Fluoride Dry', '+66% Y/Y'] },
              { id: 'krf', label: 'KrF', value: 0.5, notes: ['Krypton Fluoride', '+25% Y/Y'] },
              { id: 'i_line', label: 'I-line', value: 0.1, notes: ['+25% Y/Y'] },
              { id: 'metrology_inspection', label: 'Metrology & Inspection', value: 0.1, notes: ['(38%) Y/Y'] },
            ],
          },
          { id: 'installed_base_management', label: 'Installed base management', value: 1.4, notes: ['(10%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 3.2 },
        operatingExpenses: {
          total: 1.3,
          items: [
            { id: 'rnd', label: 'R&D', value: 1.0 },
            { id: 'sga', label: 'SG&A', value: 0.3 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.3 },
      },
      otherIncome: {
        total: 0.1,
        items: [{ id: 'other_gains', label: 'Other gains', value: 0.1 }],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 3.5, notes: ['52% margin', 'Flat Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.2, notes: ['33% margin', '(1pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.9, notes: ['28% margin', '(1pp) Y/Y', 'EPS €4.81'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第三季度',
          periodNote: '截至 2023 年 9 月',
          revenue: {
            notes: ['同比 +15%'],
            items: [
              {
                id: 'net_system_sales', label: '系统净销售额', notes: ['同比 +25%'],
                children: [
                  { id: 'euv', label: 'EUV', notes: ['极紫外', '同比 (14%)'] },
                  { id: 'arfi', label: 'ArFi', notes: ['氟化氩浸没式', '同比 +93%'] },
                  { id: 'arf_dry', label: 'ArF Dry', notes: ['氟化氩干式', '同比 +66%'] },
                  { id: 'krf', label: 'KrF', notes: ['氟化氪', '同比 +25%'] },
                  { id: 'i_line', label: 'I-line', notes: ['同比 +25%'] },
                  { id: 'metrology_inspection', label: '量测与检测', notes: ['同比 (38%)'] },
                ],
              },
              { id: 'installed_base_management', label: '装机基础管理', notes: ['同比 (10%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: { items: [{ id: 'rnd', label: '研发' }, { id: 'sga', label: '销售、一般及行政' }] },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other_gains', label: '其他收益' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 52%', '同比持平'] },
            operating: { label: '营业利润', notes: ['利润率 33%', '同比 (1 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 28%', '同比 (1 个百分点)', '每股收益 €4.81'] },
          },
        },
      },
    }
  );
})(window);
