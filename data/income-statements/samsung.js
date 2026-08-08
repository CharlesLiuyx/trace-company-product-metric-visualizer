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
      key: 'samsung-q1-fy26',
      company: 'Samsung',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: 'KRW',
      unit: 'T',
      decimals: 1,
      sourceImage: 'input/processed/samsung-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 133.9,
        notes: ['+69% Y/Y'],
        items: [
          {
            id: 'device_solutions',
            label: 'Device Solutions',
            value: 81.7,
            notes: ['+225% Y/Y', 'Memory, Foundry, & System LSI'],
          },
          {
            id: 'device_experience',
            label: 'Device eXperience',
            value: 52.7,
            notes: ['+2% Y/Y', 'Digital TVs, Refrigerators, Mobile phones, Communication systems'],
          },
          { id: 'samsung_display', label: 'Samsung Display', value: 6.7, notes: ['+14% Y/Y'] },
          { id: 'harman', label: 'Harman', value: 3.8, notes: ['+12% Y/Y'] },
          {
            id: 'eliminations',
            label: 'Eliminations',
            value: -11.0,
            notes: ['Shown as an eliminations cost before consolidated Sales in the source chart.'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 52.0 },
        operatingExpenses: {
          total: 24.7,
          items: [
            { id: 'sga', label: 'Sales, general & admin', value: 13.4, notes: ['10% of revenue', '(6pp) Y/Y'] },
            { id: 'rnd', label: 'Research & development', value: 11.3, notes: ['8% of revenue', '(3pp) Y/Y'] },
          ],
        },
        tax: {
          id: 'tax',
          label: 'Tax',
          value: 11.6,
          notes: ['Source chart label reads "(11.6B)", but the net-profit bridge implies 11.6T.'],
        },
      },
      otherIncome: {
        total: 1.6,
        items: [{ id: 'other', label: 'Other', value: 1.6 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 81.9, notes: ['61% margin', '+24pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 57.2, notes: ['43% margin', '+34pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 47.2, notes: ['35% margin', '+24pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +69%'],
            items: [
              { id: 'device_solutions', label: '设备解决方案', notes: ['同比 +225%', '存储器、晶圆代工和 System LSI'] },
              { id: 'device_experience', label: '设备体验', notes: ['同比 +2%', '数字电视、冰箱、手机、通信系统'] },
              { id: 'samsung_display', label: '三星显示', notes: ['同比 +14%'] },
              { id: 'harman', label: '哈曼', notes: ['同比 +12%'] },
              { id: 'eliminations', label: '抵销', notes: ['来源图显示为合并销售额前的抵销成本。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 10%', '同比 (6 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 8%', '同比 (3 个百分点)'] },
              ],
            },
            tax: { label: '税费', notes: ['来源图标签为 “(11.6B)”，但净利润桥接关系显示应为 11.6T。'] },
          },
          otherIncome: {
            items: [
              { id: 'other', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 61%', '同比 +24 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 43%', '同比 +34 个百分点'] },
            net: { label: '净利润', notes: ['利润率 35%', '同比 +24 个百分点'] },
          },
        },
      },
    },
    {
      key: 'samsung-q2-fy26',
      company: 'Samsung',
      period: 'Q2 FY26',
      periodNote: 'Ending Jun. 2026',
      currency: 'KRW',
      unit: 'T',
      decimals: 1,
      sourceImage: 'input/processed/samsung-q2-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 171.5,
        notes: ['+130% Y/Y'],
        items: [
          {
            id: 'device_experience',
            label: 'Device eXperience',
            value: 48.0,
            notes: ['+10% Y/Y', 'Digital TVs, Refrigerators, Mobile phones, Communication systems'],
          },
          {
            id: 'device_solutions',
            label: 'Device Solutions',
            value: 127.5,
            notes: ['+357% Y/Y', 'Memory, Foundry, & System LSI'],
          },
          { id: 'samsung_display', label: 'Samsung Display', value: 7.5, notes: ['+17% Y/Y'] },
          { id: 'harman', label: 'Harman', value: 4.6, notes: ['+19% Y/Y'] },
          {
            id: 'eliminations',
            label: 'Eliminations',
            value: -16.1,
            notes: ['Shown as an eliminations cost before consolidated Sales in the source chart.'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 52.2 },
        operatingExpenses: {
          total: 29.8,
          items: [
            { id: 'rnd', label: 'Research & development', value: 16.0, notes: ['9% of revenue', '(3pp) Y/Y'] },
            { id: 'sga', label: 'Sales, general & admin', value: 13.8, notes: ['8% of revenue', '(8pp) Y/Y'] },
          ],
        },
        tax: {
          id: 'tax',
          label: 'Tax',
          value: 22.8,
          notes: [
            'Source chart label reads "(22.8B)"; the user-approved official-source correction sets tax to 22.8T.',
          ],
        },
      },
      otherIncome: {
        total: 4.9,
        items: [{ id: 'other', label: 'Other', value: 4.9 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 119.3, notes: ['70% margin', '+35pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 89.5, notes: ['52% margin', '+46pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 71.6, notes: ['42% margin', '+35pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月',
          revenue: {
            notes: ['同比 +130%'],
            items: [
              { id: 'device_experience', label: '设备体验', notes: ['同比 +10%', '数字电视、冰箱、手机、通信系统'] },
              { id: 'device_solutions', label: '设备解决方案', notes: ['同比 +357%', '存储器、晶圆代工和 System LSI'] },
              { id: 'samsung_display', label: '三星显示', notes: ['同比 +17%'] },
              { id: 'harman', label: '哈曼', notes: ['同比 +19%'] },
              { id: 'eliminations', label: '抵销', notes: ['来源图显示为合并销售额前的抵销成本。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 9%', '同比 (3 个百分点)'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 8%', '同比 (8 个百分点)'] },
              ],
            },
            tax: {
              label: '税费',
              notes: ['来源图标签为“(22.8B)”；经用户确认，官方来源纠正值为 22.8T。'],
            },
          },
          otherIncome: {
            items: [{ id: 'other', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 70%', '同比 +35 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 52%', '同比 +46 个百分点'] },
            net: { label: '净利润', notes: ['利润率 42%', '同比 +35 个百分点'] },
          },
        },
      },
    },
    {
      key: 'samsung-q4-fy25',
      company: 'Samsung',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: 'KRW',
      unit: 'T',
      decimals: 1,
      sourceImage: 'input/processed/samsung-q4-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 93.8,
        notes: ['+24% Y/Y'],
        items: [
          {
            id: 'device_experience',
            label: 'Device eXperience',
            value: 44.3,
            notes: ['+9% Y/Y', 'Digital TVs, Refrigerators, Mobile phones, Communication systems'],
          },
          {
            id: 'device_solutions',
            label: 'Device Solutions',
            value: 44.0,
            notes: ['+46% Y/Y', 'Memory, Foundry, & System LSI'],
          },
          { id: 'samsung_display', label: 'Samsung Display', value: 9.5, notes: ['+17% Y/Y'] },
          { id: 'harman', label: 'Harman', value: 4.6, notes: ['+17% Y/Y'] },
          {
            id: 'eliminations',
            label: 'Eliminations',
            value: -8.6,
            notes: ['Shown as an eliminations cost before consolidated Sales in the source chart.'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 49.6 },
        operatingExpenses: {
          total: 24.2,
          items: [
            { id: 'sga', label: 'Sales, general & admin', value: 13.3, notes: ['14% of revenue', '(1pp) Y/Y'] },
            { id: 'rnd', label: 'Research & development', value: 10.9, notes: ['12% of revenue', '(2pp) Y/Y'] },
          ],
        },
        tax: {
          id: 'tax',
          label: 'Tax',
          value: 1.4,
          notes: ['Source chart label reads "(1.4B)", but the net-profit bridge implies 1.4T.'],
        },
      },
      otherIncome: {
        total: 1.0,
        items: [{ id: 'other', label: 'Other', value: 1.0 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 44.2, notes: ['47% margin', '+10pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 20.0, notes: ['21% margin', '+13pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 19.6, notes: ['21% margin', '+11pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +24%'],
            items: [
              { id: 'device_experience', label: '设备体验', notes: ['同比 +9%', '数字电视、冰箱、手机、通信系统'] },
              { id: 'device_solutions', label: '设备解决方案', notes: ['同比 +46%', '存储器、晶圆代工和 System LSI'] },
              { id: 'samsung_display', label: '三星显示', notes: ['同比 +17%'] },
              { id: 'harman', label: '哈曼', notes: ['同比 +17%'] },
              { id: 'eliminations', label: '抵销', notes: ['来源图显示为合并销售额前的抵销成本。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 14%', '同比 (1 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 12%', '同比 (2 个百分点)'] },
              ],
            },
            tax: { label: '税费', notes: ['来源图标签为 “(1.4B)”，但净利润桥接关系显示应为 1.4T。'] },
          },
          otherIncome: {
            items: [
              { id: 'other', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 47%', '同比 +10 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 21%', '同比 +13 个百分点'] },
            net: { label: '净利润', notes: ['利润率 21%', '同比 +11 个百分点'] },
          },
        },
      },
    }
  );
})(window);
