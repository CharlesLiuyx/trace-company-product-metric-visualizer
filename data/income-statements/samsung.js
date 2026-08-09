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
      key: 'samsung-q3-fy23',
      company: 'Samsung', period: 'Q3 FY23', periodNote: 'Ending Sep. 2023',
      currency: 'KRW', unit: 'T', decimals: 1,
      sourceImage: 'input/processed/samsung-q3-fy23.png', roundingTolerance: 0.15,
      revenue: {
        total: 67.4, notes: ['(12%) Y/Y'],
        items: [
          { id: 'device_experience', label: 'Device eXperience', value: 44.0, notes: ['(7%) Y/Y', 'Digital TVs, Refrigerators, Mobile phones, Communication systems'] },
          { id: 'device_solutions', label: 'Device Solutions', value: 16.4, notes: ['(29%) Y/Y', 'Memory, Foundry, & System LSI'] },
          { id: 'samsung_display', label: 'Samsung Display', value: 8.2, notes: ['(12%) Y/Y'] },
          { id: 'harman', label: 'Harman', value: 3.8, notes: ['+5% Y/Y'] },
          { id: 'eliminations', label: 'Eliminations', value: -5.1, notes: ['Shown as an eliminations cost before consolidated Sales in the source chart.'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 46.6 },
        operatingExpenses: { total: 18.4, items: [
          { id: 'sga', label: 'Sales, general & admin', value: 11.3 },
          { id: 'rnd', label: 'Research & development', value: 7.0 },
        ] },
      },
      otherIncome: { total: 3.4, items: [
        { id: 'other', label: 'Other', value: 1.5 },
        { id: 'tax_benefit', label: 'Tax benefit', value: 1.9 },
      ] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 20.8, notes: ['31% margin', '(7pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.4, notes: ['4% margin', '(11pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 5.8, notes: ['9% margin', '(4pp) Y/Y'] },
      },
      i18n: { zh: {
        period: '2023 财年第三季度', periodNote: '截至 2023 年 9 月',
        revenue: { notes: ['同比 (12%)'], items: [
          { id: 'device_experience', label: '设备体验', notes: ['同比 (7%)', '数字电视、冰箱、手机、通信系统'] },
          { id: 'device_solutions', label: '设备解决方案', notes: ['同比 (29%)', '存储器、晶圆代工和 System LSI'] },
          { id: 'samsung_display', label: '三星显示', notes: ['同比 (12%)'] },
          { id: 'harman', label: '哈曼', notes: ['同比 +5%'] },
          { id: 'eliminations', label: '抵销', notes: ['来源图显示为合并销售额前的抵销成本。'] },
        ] },
        costs: { costOfRevenue: { label: '收入成本' }, operatingExpenses: { items: [
          { id: 'sga', label: '销售、一般及行政' }, { id: 'rnd', label: '研发' },
        ] } },
        otherIncome: { items: [{ id: 'other', label: '其他' }, { id: 'tax_benefit', label: '税收收益' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 31%', '同比 (7 个百分点)'] },
          operating: { label: '营业利润', notes: ['利润率 4%', '同比 (11 个百分点)'] },
          net: { label: '净利润', notes: ['利润率 9%', '同比 (4 个百分点)'] },
        },
      } },
    },
    {
      key: 'samsung-q1-fy23',
      company: 'Samsung',
      period: 'Q1 FY23',
      periodNote: 'Ending Mar. 2023',
      currency: 'KRW',
      unit: 'T',
      decimals: 1,
      sourceImage: 'input/processed/samsung-q1-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 63.8,
        notes: ['(10%) Y/Y'],
        items: [
          {
            id: 'device_experience',
            label: 'Device eXperience',
            value: 46.2,
            notes: ['+8% Y/Y', 'Digital TVs, Refrigerators, Mobile phones, Communication systems'],
          },
          {
            id: 'device_solutions',
            label: 'Device Solutions',
            value: 13.7,
            notes: ['+8% Y/Y', 'Memory, Foundry, & System LSI'],
          },
          { id: 'samsung_display', label: 'Samsung Display', value: 6.6, notes: ['+8% Y/Y'] },
          { id: 'harman', label: 'Harman', value: 3.2, notes: ['+8% Y/Y'] },
          {
            id: 'eliminations',
            label: 'Eliminations',
            value: -6.0,
            notes: ['Shown as an eliminations cost before consolidated Sales in the source chart.'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of sales', value: 46.0 },
        operatingExpenses: {
          total: 17.1,
          items: [
            { id: 'sga', label: 'Sales, general & admin', value: 10.5 },
            { id: 'rnd', label: 'Research & development', value: 6.6 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.3 },
      },
      otherIncome: {
        total: 1.2,
        items: [{ id: 'other', label: 'Other', value: 1.2 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 17.7, notes: ['28% margin', '(3pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.6, notes: ['1% margin', '(5pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.6, notes: ['2% margin', '(31pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第一季度',
          periodNote: '截至 2023 年 3 月',
          revenue: {
            notes: ['同比 (10%)'],
            items: [
              { id: 'device_experience', label: '设备体验', notes: ['同比 +8%', '数字电视、冰箱、手机、通信系统'] },
              { id: 'device_solutions', label: '设备解决方案', notes: ['同比 +8%', '存储器、晶圆代工和 System LSI'] },
              { id: 'samsung_display', label: '三星显示', notes: ['同比 +8%'] },
              { id: 'harman', label: '哈曼', notes: ['同比 +8%'] },
              { id: 'eliminations', label: '抵销', notes: ['来源图显示为合并销售额前的抵销成本。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售、一般及行政' },
                { id: 'rnd', label: '研发' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 28%', '同比 (3 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 1%', '同比 (5 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 2%', '同比 (31 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'samsung-q3-fy24',
      company: 'Samsung',
      period: 'Q3 FY24',
      periodNote: 'Ending Sep. 2024',
      currency: 'KRW',
      unit: 'T',
      decimals: 1,
      sourceImage: 'input/processed/samsung-q3-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 79.1,
        notes: ['+17% Y/Y'],
        items: [
          {
            id: 'device_experience',
            label: 'Device eXperience',
            value: 45.0,
            notes: ['+2% Y/Y', 'Digital TVs, Refrigerators, Mobile phones, Communication systems'],
          },
          {
            id: 'device_solutions',
            label: 'Device Solutions',
            value: 29.3,
            notes: ['+78% Y/Y', 'Memory, Foundry, & System LSI'],
          },
          { id: 'samsung_display', label: 'Samsung Display', value: 8.0, notes: ['(3%) Y/Y'] },
          { id: 'harman', label: 'Harman', value: 3.5, notes: ['(7%) Y/Y'] },
          {
            id: 'eliminations',
            label: 'Eliminations',
            value: -6.7,
            notes: ['Shown as an eliminations cost before consolidated Sales in the source chart.'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 49.1 },
        operatingExpenses: {
          total: 20.8,
          items: [
            { id: 'sga', label: 'Sales, general & admin', value: 12.0, notes: ['15% of revenue', '(2pp) Y/Y'] },
            { id: 'rnd', label: 'Research & development', value: 8.9, notes: ['11% of revenue', '+1pp Y/Y'] },
          ],
        },
        tax: {
          id: 'tax',
          label: 'Tax',
          value: 0.2,
          notes: [
            'Source chart label reads "(0.2B)"; the user-approved official-source correction sets the displayed unit to T.',
          ],
        },
      },
      otherIncome: {
        total: 1.1,
        items: [{ id: 'other', label: 'Other', value: 1.1 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 30.0, notes: ['38% margin', '+7pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 9.2, notes: ['12% margin', '+8pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 10.1, notes: ['13% margin', '+4pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第三季度',
          periodNote: '截至 2024 年 9 月',
          revenue: {
            notes: ['同比 +17%'],
            items: [
              { id: 'device_experience', label: '设备体验', notes: ['同比 +2%', '数字电视、冰箱、手机、通信系统'] },
              { id: 'device_solutions', label: '设备解决方案', notes: ['同比 +78%', '存储器、晶圆代工和 System LSI'] },
              { id: 'samsung_display', label: '三星显示', notes: ['同比 (3%)'] },
              { id: 'harman', label: '哈曼', notes: ['同比 (7%)'] },
              { id: 'eliminations', label: '抵销', notes: ['来源图显示为合并销售额前的抵销成本。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 15%', '同比 (2 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 11%', '同比 +1 个百分点'] },
              ],
            },
            tax: {
              label: '税费',
              notes: ['来源图标签为“(0.2B)”；经用户确认，官方来源支持将显示单位纠正为 T。'],
            },
          },
          otherIncome: { items: [{ id: 'other', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 38%', '同比 +7 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 12%', '同比 +8 个百分点'] },
            net: { label: '净利润', notes: ['利润率 13%', '同比 +4 个百分点'] },
          },
        },
      },
    },
    {
      key: 'samsung-q2-fy23',
      company: 'Samsung',
      period: 'Q2 FY23',
      periodNote: 'Ending Jun. 2023',
      currency: 'KRW',
      unit: 'T',
      decimals: 1,
      sourceImage: 'input/processed/samsung-q2-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 60.0,
        notes: ['(10%) Y/Y'],
        items: [
          {
            id: 'device_experience',
            label: 'Device eXperience',
            value: 40.2,
            notes: ['(10%) Y/Y', 'Digital TVs, Refrigerators, Mobile phones, Communication systems'],
          },
          {
            id: 'device_solutions',
            label: 'Device Solutions',
            value: 14.7,
            notes: ['(48%) Y/Y', 'Memory, Foundry, & System LSI'],
          },
          { id: 'samsung_display', label: 'Samsung Display', value: 6.5, notes: ['(16%) Y/Y'] },
          { id: 'harman', label: 'Harman', value: 3.5, notes: ['+17% Y/Y'] },
          {
            id: 'eliminations',
            label: 'Eliminations',
            value: -4.9,
            notes: ['Shown as an eliminations cost before consolidated Sales in the source chart.'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 41.7 },
        operatingExpenses: {
          total: 17.7,
          items: [
            { id: 'sga', label: 'Sales, general & admin', value: 10.5 },
            { id: 'rnd', label: 'Research & development', value: 7.2 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0, notes: ['No separate tax line is shown in the source chart.'] },
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 18.4, notes: ['31% margin', '(9pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.7, notes: ['1% margin', '(17pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.7, notes: ['3% margin', '(12pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第二季度',
          periodNote: '截至 2023 年 6 月',
          revenue: {
            notes: ['同比 (10%)'],
            items: [
              { id: 'device_experience', label: '设备体验', notes: ['同比 (10%)', '数字电视、冰箱、手机、通信系统'] },
              { id: 'device_solutions', label: '设备解决方案', notes: ['同比 (48%)', '存储器、晶圆代工和 System LSI'] },
              { id: 'samsung_display', label: '三星显示', notes: ['同比 (16%)'] },
              { id: 'harman', label: '哈曼', notes: ['同比 +17%'] },
              { id: 'eliminations', label: '抵销', notes: ['来源图显示为合并销售额前的抵销成本。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售、一般及行政' },
                { id: 'rnd', label: '研发' },
              ],
            },
            tax: { label: '税费', notes: ['来源图未单独显示税费项目。'] },
          },
          otherIncome: {
            items: [{ id: 'other', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 31%', '同比 (9 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 1%', '同比 (17 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 3%', '同比 (12 个百分点)'] },
          },
        },
      },
    },
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
      key: 'samsung-q1-fy25',
      company: 'Samsung',
      period: 'Q1 FY25',
      periodNote: 'Ending Mar. 2025',
      currency: 'KRW',
      unit: 'T',
      decimals: 1,
      sourceImage: 'input/processed/samsung-q1-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 79.1,
        notes: ['+10% Y/Y'],
        items: [
          {
            id: 'device_experience',
            label: 'Device eXperience',
            value: 51.7,
            notes: ['+9% Y/Y', 'Digital TVs, Refrigerators, Mobile phones, Communication systems'],
          },
          {
            id: 'device_solutions',
            label: 'Device Solutions',
            value: 25.1,
            notes: ['+9% Y/Y', 'Memory, Foundry, & System LSI'],
          },
          { id: 'samsung_display', label: 'Samsung Display', value: 5.9, notes: ['+9% Y/Y'] },
          { id: 'harman', label: 'Harman', value: 3.4, notes: ['+7% Y/Y'] },
          {
            id: 'eliminations',
            label: 'Eliminations',
            value: -7.0,
            notes: ['Shown as an eliminations cost before consolidated Sales in the source chart.'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 51.0 },
        operatingExpenses: {
          total: 21.4,
          items: [
            { id: 'sga', label: 'Sales, general & admin', value: 12.4, notes: ['16% of revenue', '(0pp) Y/Y'] },
            { id: 'rnd', label: 'Research & development', value: 9.0, notes: ['11% of revenue', '+1pp Y/Y'] },
          ],
        },
        tax: {
          id: 'tax',
          label: 'Tax',
          value: 0.9,
          notes: [
            'Source chart label reads "(0.9B)"; the user-approved official-source correction sets income tax to 0.9T.',
          ],
        },
      },
      otherIncome: {
        total: 2.5,
        items: [{ id: 'other', label: 'Other', value: 2.5 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 28.1, notes: ['36% margin', '(0pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 6.7, notes: ['8% margin', '(1pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 8.2, notes: ['10% margin', '+1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第一季度',
          periodNote: '截至 2025 年 3 月',
          revenue: {
            notes: ['同比 +10%'],
            items: [
              { id: 'device_experience', label: '设备体验', notes: ['同比 +9%', '数字电视、冰箱、手机、通信系统'] },
              { id: 'device_solutions', label: '设备解决方案', notes: ['同比 +9%', '存储器、晶圆代工和 System LSI'] },
              { id: 'samsung_display', label: '三星显示', notes: ['同比 +9%'] },
              { id: 'harman', label: '哈曼', notes: ['同比 +7%'] },
              { id: 'eliminations', label: '抵销', notes: ['来源图显示为合并销售额前的抵销成本。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 16%', '同比 (0 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 11%', '同比 +1 个百分点'] },
              ],
            },
            tax: {
              label: '税费',
              notes: ['来源图标签为“(0.9B)”；经用户确认，官方来源纠正值为 0.9T。'],
            },
          },
          otherIncome: {
            items: [{ id: 'other', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 36%', '同比 (0 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 8%', '同比 (1 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 10%', '同比 +1 个百分点'] },
          },
        },
      },
    },
    {
      key: 'samsung-q2-fy25',
      company: 'Samsung',
      period: 'Q2 FY25',
      periodNote: 'Ending Jun. 2025',
      currency: 'KRW',
      unit: 'T',
      decimals: 1,
      sourceImage: 'input/processed/samsung-q2-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 74.6,
        notes: ['+1% Y/Y'],
        items: [
          {
            id: 'device_experience',
            label: 'Device eXperience',
            value: 43.6,
            notes: ['+4% Y/Y', 'Digital TVs, Refrigerators, Mobile phones, Communication systems'],
          },
          {
            id: 'device_solutions',
            label: 'Device Solutions',
            value: 27.9,
            notes: ['(2%) Y/Y', 'Memory, Foundry, & System LSI'],
          },
          { id: 'samsung_display', label: 'Samsung Display', value: 6.4, notes: ['(17%) Y/Y'] },
          { id: 'harman', label: 'Harman', value: 3.8, notes: ['+6% Y/Y'] },
          {
            id: 'eliminations',
            label: 'Eliminations',
            value: -7.1,
            notes: ['Shown as an eliminations cost before consolidated Sales in the source chart.'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 49.1 },
        operatingExpenses: {
          total: 20.8,
          items: [
            { id: 'sga', label: 'Sales, general & admin', value: 11.8, notes: ['16% of revenue', '+1pp Y/Y'] },
            { id: 'rnd', label: 'Research & development', value: 9.0, notes: ['12% of revenue', '+1pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.6 },
      },
      otherIncome: {
        total: 1.1,
        items: [{ id: 'other', label: 'Other', value: 1.1 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 25.5, notes: ['34% margin', '(6pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 4.7, notes: ['6% margin', '(8pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 5.2, notes: ['7% margin', '(6pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第二季度',
          periodNote: '截至 2025 年 6 月',
          revenue: {
            notes: ['同比 +1%'],
            items: [
              { id: 'device_experience', label: '设备体验', notes: ['同比 +4%', '数字电视、冰箱、手机、通信系统'] },
              { id: 'device_solutions', label: '设备解决方案', notes: ['同比 (2%)', '存储器、晶圆代工和 System LSI'] },
              { id: 'samsung_display', label: '三星显示', notes: ['同比 (17%)'] },
              { id: 'harman', label: '哈曼', notes: ['同比 +6%'] },
              { id: 'eliminations', label: '抵销', notes: ['来源图显示为合并销售额前的抵销成本。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 16%', '同比 +1 个百分点'] },
                { id: 'rnd', label: '研发', notes: ['占收入 12%', '同比 +1 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 34%', '同比 (6 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 6%', '同比 (8 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 7%', '同比 (6 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'samsung-q3-fy25',
      company: 'Samsung',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: 'KRW',
      unit: 'T',
      decimals: 1,
      sourceImage: 'input/processed/samsung-q3-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 86.1,
        notes: ['+9% Y/Y'],
        items: [
          {
            id: 'device_experience',
            label: 'Device eXperience',
            value: 48.4,
            notes: ['+8% Y/Y', 'Digital TVs, Refrigerators, Mobile phones, Communication systems'],
          },
          {
            id: 'device_solutions',
            label: 'Device Solutions',
            value: 33.1,
            notes: ['+13% Y/Y', 'Memory, Foundry, & System LSI'],
          },
          { id: 'samsung_display', label: 'Samsung Display', value: 8.1, notes: ['+1% Y/Y'] },
          { id: 'harman', label: 'Harman', value: 4.0, notes: ['+12% Y/Y'] },
          {
            id: 'eliminations',
            label: 'Eliminations',
            value: -7.5,
            notes: ['Shown as an eliminations cost before consolidated Sales in the source chart.'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 52.6 },
        operatingExpenses: {
          total: 21.3,
          items: [
            { id: 'sga', label: 'Sales, general & admin', value: 12.5, notes: ['15% of revenue', '(1pp) Y/Y'] },
            { id: 'rnd', label: 'Research & development', value: 8.8, notes: ['10% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: {
          id: 'tax',
          label: 'Tax',
          value: 1.3,
          notes: [
            'Source chart label reads "(1.3B)"; the user-approved official-source correction sets tax to 1.3T.',
          ],
        },
      },
      otherIncome: {
        total: 1.4,
        items: [{ id: 'other', label: 'Other', value: 1.4 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 33.5, notes: ['39% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 12.2, notes: ['14% margin', '+3pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 12.2, notes: ['14% margin', '+2pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          revenue: {
            notes: ['同比 +9%'],
            items: [
              { id: 'device_experience', label: '设备体验', notes: ['同比 +8%', '数字电视、冰箱、手机、通信系统'] },
              { id: 'device_solutions', label: '设备解决方案', notes: ['同比 +13%', '存储器、晶圆代工和 System LSI'] },
              { id: 'samsung_display', label: '三星显示', notes: ['同比 +1%'] },
              { id: 'harman', label: '哈曼', notes: ['同比 +12%'] },
              { id: 'eliminations', label: '抵销', notes: ['来源图显示为合并销售额前的抵销成本。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 15%', '同比 (1 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 10%', '同比 (1 个百分点)'] },
              ],
            },
            tax: {
              label: '税费',
              notes: ['来源图标签为“(1.3B)”；经用户确认，官方来源纠正值为 1.3T。'],
            },
          },
          otherIncome: {
            items: [{ id: 'other', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 39%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 14%', '同比 +3 个百分点'] },
            net: { label: '净利润', notes: ['利润率 14%', '同比 +2 个百分点'] },
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
    },
    {
      key: 'samsung-q2-fy24',
      company: 'Samsung',
      period: 'Q2 FY24',
      periodNote: 'Ending Jun. 2024',
      currency: 'KRW',
      unit: 'T',
      decimals: 1,
      sourceImage: 'input/processed/samsung-q2-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 74.1,
        notes: ['+23% Y/Y'],
        items: [
          {
            id: 'device_experience',
            label: 'Device eXperience',
            value: 42.1,
            notes: ['+5% Y/Y', 'Digital TVs, Refrigerators, Mobile phones, Communication systems'],
          },
          {
            id: 'device_solutions',
            label: 'Device Solutions',
            value: 28.6,
            notes: ['+94% Y/Y', 'Memory, Foundry, & System LSI'],
          },
          { id: 'samsung_display', label: 'Samsung Display', value: 7.7, notes: ['+18% Y/Y'] },
          { id: 'harman', label: 'Harman', value: 3.6, notes: ['+3% Y/Y'] },
          {
            id: 'eliminations',
            label: 'Eliminations',
            value: -7.8,
            notes: ['Shown as an eliminations cost before consolidated Sales in the source chart.'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 44.3 },
        operatingExpenses: {
          total: 19.3,
          items: [
            { id: 'rnd', label: 'Research & development', value: 8.1, notes: ['11% of revenue', '(1pp) Y/Y'] },
            { id: 'sga', label: 'Sales, general & admin', value: 11.3, notes: ['15% of revenue', '(2pp) Y/Y'] },
          ],
        },
        tax: {
          id: 'tax',
          label: 'Tax',
          value: 1.8,
          notes: [
            'Source chart label reads "(1.8B)"; the user-approved Samsung official-source correction sets tax to 1.8T.',
          ],
        },
      },
      otherIncome: {
        total: 1.2,
        items: [{ id: 'other', label: 'Other', value: 1.2 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 29.8, notes: ['40% margin', '+10pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 10.5, notes: ['14% margin', '+13pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 9.9, notes: ['13% margin', '+10pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第二季度',
          periodNote: '截至 2024 年 6 月',
          revenue: {
            notes: ['同比 +23%'],
            items: [
              { id: 'device_experience', label: '设备体验', notes: ['同比 +5%', '数字电视、冰箱、手机、通信系统'] },
              { id: 'device_solutions', label: '设备解决方案', notes: ['同比 +94%', '存储器、晶圆代工和 System LSI'] },
              { id: 'samsung_display', label: '三星显示', notes: ['同比 +18%'] },
              { id: 'harman', label: '哈曼', notes: ['同比 +3%'] },
              { id: 'eliminations', label: '抵销', notes: ['来源图显示为合并销售额前的抵销成本。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 11%', '同比 (1 个百分点)'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 15%', '同比 (2 个百分点)'] },
              ],
            },
            tax: { label: '税费', notes: ['来源图标签为 “(1.8B)”，经用户批准按 Samsung 官方来源纠正为 1.8T。'] },
          },
          otherIncome: {
            items: [
              { id: 'other', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 40%', '同比 +10 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 14%', '同比 +13 个百分点'] },
            net: { label: '净利润', notes: ['利润率 13%', '同比 +10 个百分点'] },
          },
        },
      },
    },
    {
      key: 'samsung-q4-fy23',
      company: 'Samsung',
      period: 'Q4 FY23',
      periodNote: 'Ending Dec. 2023',
      currency: 'KRW',
      unit: 'T',
      decimals: 1,
      sourceImage: 'input/processed/samsung-q4-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 67.8,
        notes: ['(4%) Y/Y'],
        items: [
          {
            id: 'device_experience',
            label: 'Device eXperience',
            value: 39.6,
            notes: ['(7%) Y/Y', 'Digital TVs, Refrigerators, Mobile phones, Communication systems'],
          },
          {
            id: 'device_solutions',
            label: 'Device Solutions',
            value: 21.7,
            notes: ['+8% Y/Y', 'Memory, Foundry, & System LSI'],
          },
          { id: 'samsung_display', label: 'Samsung Display', value: 9.7, notes: ['+4% Y/Y'] },
          { id: 'harman', label: 'Harman', value: 3.9, notes: ['(58%) Y/Y'] },
          {
            id: 'eliminations',
            label: 'Eliminations',
            value: -7.0,
            notes: ['Shown as an eliminations cost before consolidated Sales in the source chart.'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 46.1 },
        operatingExpenses: {
          total: 18.8,
          items: [
            { id: 'sga', label: 'Sales, general & admin', value: 11.3 },
            { id: 'rnd', label: 'Research & development', value: 7.6 },
          ],
        },
      },
      otherIncome: {
        total: 3.5,
        items: [
          { id: 'tax_benefit', label: 'Tax benefit', value: 2.8 },
          { id: 'other', label: 'Other', value: 0.7 },
        ],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 21.7, notes: ['32% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.8, notes: ['4% margin', '(2pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 6.3, notes: ['9% margin', '25pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第四季度',
          periodNote: '截至 2023 年 12 月',
          revenue: {
            notes: ['同比 (4%)'],
            items: [
              { id: 'device_experience', label: '设备体验', notes: ['同比 (7%)', '数字电视、冰箱、手机、通信系统'] },
              { id: 'device_solutions', label: '设备解决方案', notes: ['同比 +8%', '存储器、晶圆代工和 System LSI'] },
              { id: 'samsung_display', label: '三星显示', notes: ['同比 +4%'] },
              { id: 'harman', label: '哈曼', notes: ['同比 (58%)'] },
              { id: 'eliminations', label: '抵销', notes: ['来源图显示为合并销售额前的抵销成本。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售、一般及行政' },
                { id: 'rnd', label: '研发' },
              ],
            },
          },
          otherIncome: {
            items: [
              { id: 'tax_benefit', label: '税收收益' },
              { id: 'other', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 32%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 4%', '同比 (2 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 9%', '同比 25 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'samsung-q1-fy24',
      company: 'Samsung',
      period: 'Q1 FY24',
      periodNote: 'Ending Mar. 2024',
      currency: 'KRW',
      unit: 'T',
      decimals: 1,
      sourceImage: 'input/processed/samsung-q1-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 71.9,
        notes: ['+13% Y/Y'],
        items: [
          {
            id: 'device_experience',
            label: 'Device eXperience',
            value: 47.3,
            notes: ['+2% Y/Y', 'Digital TVs, Refrigerators, Mobile phones, Communication systems'],
          },
          {
            id: 'device_solutions',
            label: 'Device Solutions',
            value: 23.1,
            notes: ['+69% Y/Y', 'Memory, Foundry, & System LSI'],
          },
          { id: 'samsung_display', label: 'Samsung Display', value: 5.4, notes: ['(18%) Y/Y'] },
          { id: 'harman', label: 'Harman', value: 3.2, notes: ['+1% Y/Y'] },
          {
            id: 'eliminations',
            label: 'Eliminations',
            value: -7.1,
            notes: ['Shown as an eliminations cost before consolidated Sales in the source chart.'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 45.9 },
        operatingExpenses: {
          total: 19.4,
          items: [
            { id: 'sga', label: 'Sales, general & admin', value: 11.6 },
            { id: 'rnd', label: 'Research & development', value: 7.8 },
          ],
        },
        tax: {
          id: 'tax',
          label: 'Tax',
          value: 1.0,
          notes: [
            'Source chart label reads "(1.0B)"; the user-approved official-source correction sets tax to 1.0T.',
          ],
        },
      },
      otherIncome: {
        total: 1.1,
        items: [{ id: 'other', label: 'Other', value: 1.1 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 26.1, notes: ['36% margin', '+8pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 6.6, notes: ['9% margin', '+8pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 6.8, notes: ['9% margin', '+7pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第一季度',
          periodNote: '截至 2024 年 3 月',
          revenue: {
            notes: ['同比 +13%'],
            items: [
              { id: 'device_experience', label: '设备体验', notes: ['同比 +2%', '数字电视、冰箱、手机、通信系统'] },
              { id: 'device_solutions', label: '设备解决方案', notes: ['同比 +69%', '存储器、晶圆代工和 System LSI'] },
              { id: 'samsung_display', label: '三星显示', notes: ['同比 (18%)'] },
              { id: 'harman', label: '哈曼', notes: ['同比 +1%'] },
              { id: 'eliminations', label: '抵销', notes: ['来源图显示为合并销售额前的抵销成本。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售、一般及行政' },
                { id: 'rnd', label: '研发' },
              ],
            },
            tax: {
              label: '税费',
              notes: ['来源图标签为“(1.0B)”；经用户确认，官方来源纠正值为 1.0T。'],
            },
          },
          otherIncome: {
            items: [{ id: 'other', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 36%', '同比 +8 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 9%', '同比 +8 个百分点'] },
            net: { label: '净利润', notes: ['利润率 9%', '同比 +7 个百分点'] },
          },
        },
      },
    },
    {
      key: 'samsung-q4-fy24',
      company: 'Samsung',
      period: 'Q4 FY24',
      periodNote: 'Ending Dec. 2024',
      currency: 'KRW',
      unit: 'T',
      decimals: 1,
      sourceImage: 'input/processed/samsung-q4-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 75.8,
        notes: ['+12% Y/Y'],
        items: [
          {
            id: 'device_experience',
            label: 'Device eXperience',
            value: 40.5,
            notes: ['+2% Y/Y', 'Digital TVs, Refrigerators, Mobile phones, Communication systems'],
          },
          {
            id: 'device_solutions',
            label: 'Device Solutions',
            value: 30.1,
            notes: ['+39% Y/Y', 'Memory, Foundry, & System LSI'],
          },
          { id: 'samsung_display', label: 'Samsung Display', value: 8.1, notes: ['(16%) Y/Y'] },
          { id: 'harman', label: 'Harman', value: 3.9, notes: ['0% Y/Y'] },
          {
            id: 'eliminations',
            label: 'Eliminations',
            value: -6.8,
            notes: ['Shown as an eliminations cost before consolidated Sales in the source chart.'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 47.3 },
        operatingExpenses: {
          total: 22.0,
          items: [
            { id: 'sga', label: 'Sales, general & admin', value: 11.7, notes: ['15% of revenue', '(1pp) Y/Y'] },
            { id: 'rnd', label: 'Research & development', value: 10.3, notes: ['14% of revenue', '+2pp Y/Y'] },
          ],
        },
        tax: {
          id: 'tax',
          label: 'Tax',
          value: 0.2,
          notes: [
            'Source chart label reads "(0.2B)"; the user-approved official-source correction sets tax to 0.2T. Samsung Electronics 4Q 2024 results report income tax of 0.2 in a KRW trillion table.',
          ],
        },
      },
      otherIncome: {
        total: 1.5,
        items: [{ id: 'other', label: 'Other', value: 1.5 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 28.5, notes: ['38% margin', '+6pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 6.5, notes: ['9% margin', '+4pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 7.8, notes: ['10% margin', '+1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第四季度',
          periodNote: '截至 2024 年 12 月',
          revenue: {
            notes: ['同比 +12%'],
            items: [
              { id: 'device_experience', label: '设备体验', notes: ['同比 +2%', '数字电视、冰箱、手机、通信系统'] },
              { id: 'device_solutions', label: '设备解决方案', notes: ['同比 +39%', '存储器、晶圆代工和 System LSI'] },
              { id: 'samsung_display', label: '三星显示', notes: ['同比 (16%)'] },
              { id: 'harman', label: '哈曼', notes: ['同比 0%'] },
              { id: 'eliminations', label: '抵销', notes: ['来源图显示为合并销售额前的抵销成本。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 15%', '同比 (1 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 14%', '同比 +2 个百分点'] },
              ],
            },
            tax: {
              label: '税费',
              notes: ['来源图标签为“(0.2B)”；经用户批准，按 Samsung 官方 KRW trillion 表格纠正为 0.2T。'],
            },
          },
          otherIncome: {
            items: [{ id: 'other', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 38%', '同比 +6 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 9%', '同比 +4 个百分点'] },
            net: { label: '净利润', notes: ['利润率 10%', '同比 +1 个百分点'] },
          },
        },
      },
    }
  );
})(window);
