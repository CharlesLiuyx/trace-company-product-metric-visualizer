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
      key: 'palantir-q4-fy24',
      company: 'Palantir',
      period: 'Q4 FY24',
      periodNote: 'Ending Dec. 2024',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/palantir-q4-fy24.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 828,
        notes: ['+36% Y/Y', 'Government and Commercial revenue items sum to $827M because the source chart rounds to whole millions.'],
        items: [
          { id: 'government', label: 'Government', value: 455, notes: ['+40% Y/Y'] },
          { id: 'commercial', label: 'Commercial', value: 372, notes: ['+31% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 175 },
        operatingExpenses: {
          total: 642,
          items: [
            { id: 'sm', label: 'S&M', value: 288, notes: ['35% of revenue', '+2pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 182, notes: ['22% of revenue', '+1pp Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 172, notes: ['21% of revenue', '+3pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 4 },
      },
      otherIncome: {
        total: 70,
        items: [
          { id: 'interest', label: 'Interest', value: 55 },
          { id: 'other', label: 'Other', value: 15 },
        ],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 653, notes: ['79% margin', '(3pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 11, notes: ['1% margin', '(9pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 77, notes: ['9% margin', '(7pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第四季度',
          periodNote: '截至 2024 年 12 月',
          revenue: {
            notes: ['同比 +36%', '由于来源图采用取整值，政府和商业收入明细合计为 827M 美元。'],
            items: [
              { label: '政府', notes: ['同比 +40%'] },
              { label: '商业', notes: ['同比 +31%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { label: '销售与营销', notes: ['占收入 35%', '同比 +2 个百分点'] },
                { label: '管理费用', notes: ['占收入 22%', '同比 +1 个百分点'] },
                { label: '研发', notes: ['占收入 21%', '同比 +3 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ label: '利息' }, { label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 79%', '同比 (3 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 1%', '同比 (9 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 9%', '同比 (7 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'palantir-q3-fy24',
      company: 'Palantir',
      period: 'Q3 FY24',
      periodNote: 'Ending Sep. 2024',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/palantir-q3-fy24.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 726,
        notes: ['+30% Y/Y', 'Government and Commercial revenue sum to $725M because the Source rounds to whole millions.'],
        items: [
          { id: 'government', label: 'Government', value: 408, notes: ['+33% Y/Y'] },
          { id: 'commercial', label: 'Commercial', value: 317, notes: ['+27% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 147 },
        operatingExpenses: {
          total: 466,
          items: [
            { id: 'sm', label: 'S&M', value: 209, notes: ['29% of revenue', '(3pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 139, notes: ['19% of revenue', '(4pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 118, notes: ['16% of revenue', '(3pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 8 },
      },
      otherIncome: {
        total: 52,
        items: [{ id: 'interest', label: 'Interest', value: 52 }],
      },
      otherExpenses: {
        total: 8,
        items: [{ id: 'other', label: 'Other', value: 8 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 579, notes: ['80% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 113, notes: ['16% margin', '+8pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 149, notes: ['21% margin', '+7pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第三季度',
          periodNote: '截至 2024 年 9 月',
          revenue: {
            notes: ['同比 +30%'],
            items: [
              { label: '政府', notes: ['同比 +33%'] },
              { label: '商业', notes: ['同比 +27%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { label: '销售与营销', notes: ['占收入 29%', '同比 (3 个百分点)'] },
                { label: '管理费用', notes: ['占收入 19%', '同比 (4 个百分点)'] },
                { label: '研发', notes: ['占收入 16%', '同比 (3 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ label: '利息' }] },
          otherExpenses: { items: [{ label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 80%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 16%', '同比 +8 个百分点'] },
            net: { label: '净利润', notes: ['利润率 21%', '同比 +7 个百分点'] },
          },
        },
      },
    },
    {
      key: 'palantir-q2-fy24',
      company: 'Palantir',
      period: 'Q2 FY24',
      periodNote: 'Ending Jun. 2024',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/palantir-q2-fy24.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 678,
        notes: ['+27% Y/Y'],
        items: [
          { id: 'government', label: 'Government', value: 371, notes: ['+23% Y/Y'] },
          { id: 'commercial', label: 'Commercial', value: 307, notes: ['+33% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 129 },
        operatingExpenses: {
          total: 444,
          items: [
            { id: 'sm', label: 'S&M', value: 197, notes: ['29% of revenue', '(6pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 139, notes: ['20% of revenue', '(4pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 109, notes: ['16% of revenue', '(3pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 5 },
      },
      otherIncome: {
        total: 47,
        items: [{ id: 'interest', label: 'Interest', value: 47 }],
      },
      otherExpenses: {
        total: 11,
        items: [{ id: 'other', label: 'Other', value: 11 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 550, notes: ['81% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 105, notes: ['16% margin', '+14pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 136, notes: ['20% margin', '+15pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第二季度',
          periodNote: '截至 2024 年 6 月',
          revenue: {
            notes: ['同比 +27%'],
            items: [
              { label: '政府', notes: ['同比 +23%'] },
              { label: '商业', notes: ['同比 +33%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { label: '销售与营销', notes: ['占收入 29%', '同比 (6 个百分点)'] },
                { label: '管理费用', notes: ['占收入 20%', '同比 (4 个百分点)'] },
                { label: '研发', notes: ['占收入 16%', '同比 (3 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ label: '利息' }] },
          otherExpenses: { items: [{ label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 81%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 16%', '同比 +14 个百分点'] },
            net: { label: '净利润', notes: ['利润率 20%', '同比 +15 个百分点'] },
          },
        },
      },
    },
    {
      key: 'palantir-q1-fy25',
      company: 'Palantir',
      period: 'Q1 FY25',
      periodNote: 'Ending Mar. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/palantir-q1-fy25.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 884,
        notes: ['+39% Y/Y'],
        items: [
          { id: 'government', label: 'Government', value: 487, notes: ['+45% Y/Y'] },
          { id: 'commercial', label: 'Commercial', value: 397, notes: ['+33% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 173 },
        operatingExpenses: {
          total: 535,
          items: [
            { id: 'sm', label: 'S&M', value: 236, notes: ['27% of revenue', '(4pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 164, notes: ['19% of revenue', '(3pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 135, notes: ['15% of revenue', '(2pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 6 },
      },
      otherIncome: { total: 50, items: [{ id: 'interest', label: 'Interest', value: 50 }] },
      otherExpenses: { total: 3, items: [{ id: 'other', label: 'Other', value: 3 }] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 711, notes: ['80% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 176, notes: ['20% margin', '+7pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 218, notes: ['25% margin', '+8pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第一季度',
          periodNote: '截至 2025 年 3 月',
          revenue: {
            notes: ['同比 +39%'],
            items: [
              { label: '政府', notes: ['同比 +45%'] },
              { label: '商业', notes: ['同比 +33%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { label: '销售与营销', notes: ['占收入 27%', '同比 (4 个百分点)'] },
                { label: '管理费用', notes: ['占收入 19%', '同比 (3 个百分点)'] },
                { label: '研发', notes: ['占收入 15%', '同比 (2 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ label: '利息' }] },
          otherExpenses: { items: [{ label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 80%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 20%', '同比 +7 个百分点'] },
            net: { label: '净利润', notes: ['利润率 25%', '同比 +8 个百分点'] },
          },
        },
      },
    },
    {
      key: 'palantir-q4-fy23',
      company: 'Palantir',
      period: 'Q4 FY23',
      periodNote: 'Ending Dec. 2023',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/palantir-q4-fy23.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 608,
        notes: ['+20% Y/Y'],
        items: [
          { id: 'government', label: 'Government', value: 324, notes: ['+11% Y/Y'] },
          { id: 'commercial', label: 'Commercial', value: 284, notes: ['+32% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 109 },
        operatingExpenses: {
          total: 434,
          items: [
            { id: 'sm', label: 'S&M', value: 197, notes: ['32% of revenue', '(5pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 127, notes: ['21% of revenue', '(9pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 109, notes: ['18% of revenue', '+2pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 9 },
      },
      otherIncome: { total: 44, items: [{ id: 'interest', label: 'Interest', value: 44 }] },
      otherExpenses: { total: 4, items: [{ id: 'other', label: 'Other', value: 4 }] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 500, notes: ['82% margin', '+3pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 66, notes: ['11% margin', '+14pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 97, notes: ['16% margin', '+9pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第四季度',
          periodNote: '截至 2023 年 12 月',
          revenue: {
            notes: ['同比 +20%'],
            items: [
              { label: '政府', notes: ['同比 +11%'] },
              { label: '商业', notes: ['同比 +32%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { label: '销售与营销', notes: ['占收入 32%', '同比 (5 个百分点)'] },
                { label: '管理费用', notes: ['占收入 21%', '同比 (9 个百分点)'] },
                { label: '研发', notes: ['占收入 18%', '同比 +2 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ label: '利息' }] },
          otherExpenses: { items: [{ label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 82%', '同比 +3 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 11%', '同比 +14 个百分点'] },
            net: { label: '净利润', notes: ['利润率 16%', '同比 +9 个百分点'] },
          },
        },
      },
    },
    {
      key: 'palantir-q1-fy24',
      company: 'Palantir',
      period: 'Q1 FY24',
      periodNote: 'Ending Mar. 2024',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/palantir-q1-fy24.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 634,
        notes: ['+21% Y/Y'],
        items: [
          { id: 'government', label: 'Government', value: 335, notes: ['+16% Y/Y'] },
          { id: 'commercial', label: 'Commercial', value: 299, notes: ['+27% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 116 },
        operatingExpenses: {
          total: 437,
          items: [
            { id: 'sm', label: 'S&M', value: 193, notes: ['30% of revenue', '(5pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 134, notes: ['21% of revenue', '(5pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 110, notes: ['17% of revenue', '+0pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 5 },
      },
      otherIncome: { total: 43, items: [{ id: 'interest', label: 'Interest', value: 43 }] },
      otherExpenses: { total: 13, items: [{ id: 'other', label: 'Other', value: 13 }] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 518, notes: ['82% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 81, notes: ['13% margin', '+12pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 106, notes: ['17% margin', '+13pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第一季度',
          periodNote: '截至 2024 年 3 月',
          revenue: {
            notes: ['同比 +21%'],
            items: [
              { label: '政府', notes: ['同比 +16%'] },
              { label: '商业', notes: ['同比 +27%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { label: '销售与营销', notes: ['占收入 30%', '同比 (5 个百分点)'] },
                { label: '管理费用', notes: ['占收入 21%', '同比 (5 个百分点)'] },
                { label: '研发', notes: ['占收入 17%', '同比 +0 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ label: '利息' }] },
          otherExpenses: { items: [{ label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 82%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 13%', '同比 +12 个百分点'] },
            net: { label: '净利润', notes: ['利润率 17%', '同比 +13 个百分点'] },
          },
        },
      },
    },
    {
      key: 'palantir-q4-fy22',
      company: 'Palantir',
      period: 'Q4 FY22',
      periodNote: 'Ending Dec. 2022',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/palantir-q4-fy22.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 509,
        notes: ['+18% Y/Y', 'Government and Commercial revenue sum to $508M because the Source rounds to whole millions.'],
        items: [
          { id: 'government', label: 'Government', value: 293, notes: ['+23% Y/Y'] },
          { id: 'commercial', label: 'Commercial', value: 215, notes: ['+11% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 104 },
        operatingExpenses: {
          total: 422,
          items: [
            { id: 'sm', label: 'S&M', value: 190, notes: ['37% of revenue', '(0pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 149, notes: ['29% of revenue', '(7pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 82, notes: ['16% of revenue', '(3pp) Y/Y'] },
          ],
        },
        tax: { label: 'Tax', value: 0, notes: ['No tax line is shown in the Source infographic.'] },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 404, notes: ['79% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -18, notes: ['(4%) margin', '+10pp Y/Y'] },
        net: { id: 'operating_loss', label: 'Operating loss', value: -18, notes: ['No separate net income or net loss line is shown in the Source infographic.'] },
      },
      i18n: {
        zh: {
          period: '2022 财年第四季度',
          periodNote: '截至 2022 年 12 月',
          revenue: {
            notes: ['同比 +18%'],
            items: [
              { label: '政府', notes: ['同比 +23%'] },
              { label: '商业', notes: ['同比 +11%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { label: '销售与营销', notes: ['占收入 37%', '同比持平'] },
                { label: '管理费用', notes: ['占收入 29%', '同比 (7 个百分点)'] },
                { label: '研发', notes: ['占收入 16%', '同比 (3 个百分点)'] },
              ],
            },
            tax: { label: '税费', notes: ['来源信息图未展示税费项目。'] },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 79%', '同比 (1 个百分点)'] },
            operating: { label: '营业亏损', notes: ['利润率 (4%)', '同比 +10 个百分点'] },
            net: { label: '营业亏损', notes: ['来源信息图未单独展示净利润或净亏损项目。'] },
          },
        },
      },
    },
    {
      key: 'palantir-q3-fy23',
      company: 'Palantir',
      period: 'Q3 FY23',
      periodNote: 'Ending Sep. 2023',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/palantir-q3-fy23.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 558,
        notes: [
          '+17% Y/Y',
          'Government and Commercial revenue items sum to $559M because the source chart rounds to whole millions.',
        ],
        items: [
          { id: 'government', label: 'Government', value: 308, notes: ['+12% Y/Y'] },
          { id: 'commercial', label: 'Commercial', value: 251, notes: ['+23% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 108 },
        operatingExpenses: {
          total: 410,
          items: [
            { id: 'sm', label: 'S&M', value: 176, notes: ['32% of revenue', '(7pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 128, notes: ['23% of revenue', '(8pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 106, notes: ['19% of revenue', '(2pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 7 },
      },
      otherIncome: {
        total: 40,
        items: [
          { id: 'other', label: 'Other', value: 4 },
          { id: 'interest', label: 'Interest', value: 36 },
        ],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 450, notes: ['81% margin', '+3pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 40, notes: ['7% margin', '+20pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 73, notes: ['13% margin', '+39pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第三季度',
          periodNote: '截至 2023 年 9 月',
          revenue: {
            notes: ['同比 +17%', '由于来源图采用取整值，政府和商业收入明细合计为 559M 美元。'],
            items: [
              { label: '政府', notes: ['同比 +12%'] },
              { label: '商业', notes: ['同比 +23%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { label: '销售与营销', notes: ['占收入 32%', '同比 (7 个百分点)'] },
                { label: '管理费用', notes: ['占收入 23%', '同比 (8 个百分点)'] },
                { label: '研发', notes: ['占收入 19%', '同比 (2 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ label: '其他' }, { label: '利息' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 81%', '同比 +3 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 7%', '同比 +20 个百分点'] },
            net: { label: '净利润', notes: ['利润率 13%', '同比 +39 个百分点'] },
          },
        },
      },
    },
    {
      key: 'palantir-q2-fy23',
      company: 'Palantir',
      period: 'Q2 FY23',
      periodNote: 'Ending Jun. 2023',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/palantir-q2-fy23.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 533,
        notes: [
          '+13% Y/Y',
          'Government and Commercial revenue items sum to $534M because the source chart rounds to whole millions.',
        ],
        items: [
          { id: 'government', label: 'Government', value: 302, notes: ['+15% Y/Y'] },
          { id: 'commercial', label: 'Commercial', value: 232, notes: ['+10% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 107 },
        operatingExpenses: {
          total: 416,
          items: [
            { id: 'sm', label: 'S&M', value: 184, notes: ['35% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 133, notes: ['25% of revenue', '(8pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 100, notes: ['19% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 2 },
      },
      otherIncome: {
        total: 29,
        items: [{ id: 'interest', label: 'Interest', value: 29 }],
      },
      otherExpenses: {
        total: 9,
        items: [{ id: 'other', label: 'Other', value: 9 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 426, notes: ['80% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 10, notes: ['2% margin', '+11pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 28, notes: ['5% margin', '+43pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第二季度',
          periodNote: '截至 2023 年 6 月',
          revenue: {
            notes: [
              '同比 +13%',
              '由于来源图采用取整值，政府和商业收入明细合计为 534M 美元。',
            ],
            items: [
              { label: '政府', notes: ['同比 +15%'] },
              { label: '商业', notes: ['同比 +10%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { label: '销售与营销', notes: ['占收入 35%', '同比 (1 个百分点)'] },
                { label: '管理费用', notes: ['占收入 25%', '同比 (8 个百分点)'] },
                { label: '研发', notes: ['占收入 19%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ label: '利息' }] },
          otherExpenses: { items: [{ label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 80%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 2%', '同比 +11 个百分点'] },
            net: { label: '净利润', notes: ['利润率 5%', '同比 +43 个百分点'] },
          },
        },
      },
    },
    {
      key: 'palantir-q1-fy23',
      company: 'Palantir',
      period: 'Q1 FY23',
      periodNote: 'Ending Mar. 2023',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/palantir-q1-fy23.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 525,
        notes: ['+18% Y/Y'],
        items: [
          { id: 'government', label: 'Government', value: 289, notes: ['+20% Y/Y'] },
          { id: 'commercial', label: 'Commercial', value: 236, notes: ['+15% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 108 },
        operatingExpenses: {
          total: 413,
          items: [
            { id: 'sm', label: 'S&M', value: 187, notes: ['36% of revenue', 'Flat Y/Y'] },
            { id: 'ga', label: 'G&A', value: 136, notes: ['26% of revenue', '(6pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 90, notes: ['17% of revenue', '(3pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 2 },
      },
      otherIncome: {
        total: 20,
        items: [{ id: 'interest', label: 'Interest', value: 20 }],
      },
      otherExpenses: {
        total: 3,
        items: [{ id: 'other', label: 'Other', value: 3 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 418, notes: ['80% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 4, notes: ['1% margin', '+10pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 19, notes: ['4% margin', '+26pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第一季度',
          periodNote: '截至 2023 年 3 月',
          revenue: {
            notes: ['同比 +18%'],
            items: [
              { label: '政府', notes: ['同比 +20%'] },
              { label: '商业', notes: ['同比 +15%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { label: '销售与营销', notes: ['占收入 36%', '同比持平'] },
                { label: '管理费用', notes: ['占收入 26%', '同比 (6 个百分点)'] },
                { label: '研发', notes: ['占收入 17%', '同比 (3 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ label: '利息' }] },
          otherExpenses: { items: [{ label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 80%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 1%', '同比 +10 个百分点'] },
            net: { label: '净利润', notes: ['利润率 4%', '同比 +26 个百分点'] },
          },
        },
      },
    },
    {
      key: 'palantir-q3-fy22',
      company: 'Palantir',
      period: 'Q3 FY22',
      periodNote: 'Ending Sep. 2022',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/palantir-q3-fy22.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 478,
        notes: ['+22% Y/Y'],
        items: [
          { id: 'government', label: 'Government', value: 274, notes: ['+26% Y/Y'] },
          { id: 'commercial', label: 'Commercial', value: 204, notes: ['+17% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 108 },
        operatingExpenses: {
          total: 432,
          items: [
            { id: 'sm', label: 'S&M', value: 183, notes: ['38% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 149, notes: ['31% of revenue', '(7pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 101, notes: ['21% of revenue', '(3pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0, notes: ['No separate tax line is shown in the source chart.'] },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 370, notes: ['77% margin', 'Unchanged'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -62, notes: ['(13%) margin', '+10pp Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -62,
          notes: ['No separate net income or net loss line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2022 财年第三季度',
          periodNote: '截至 2022 年 9 月',
          revenue: {
            notes: ['同比 +22%'],
            items: [
              { id: 'government', label: '政府', notes: ['同比 +26%'] },
              { id: 'commercial', label: '商业', notes: ['同比 +17%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与营销', notes: ['占收入 38%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 31%', '同比 (7 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 21%', '同比 (3 个百分点)'] },
              ],
            },
            tax: { label: '税费', notes: ['来源图未显示单独的税费项目。'] },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 77%', '同比持平'] },
            operating: { label: '营业亏损', notes: ['利润率 (13%)', '同比 +10 个百分点'] },
            net: { label: '营业亏损', notes: ['来源图未单独显示净利润或净亏损项目。'] },
          },
        },
      },
    },
    {
      key: 'palantir-q2-fy25',
      company: 'Palantir',
      period: 'Q2 FY25',
      periodNote: 'Ending Jun. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/palantir-q2-fy25.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 1004,
        notes: ['+48% Y/Y'],
        items: [
          { id: 'government', label: 'Government', value: 553, notes: ['+49% Y/Y'] },
          { id: 'commercial', label: 'Commercial', value: 451, notes: ['+47% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 193 },
        operatingExpenses: {
          total: 541,
          items: [
            { id: 'sm', label: 'S&M', value: 244, notes: ['24% of revenue', '(5pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 163, notes: ['16% of revenue', '(4pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 135, notes: ['13% of revenue', '(3pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 4 },
      },
      otherIncome: {
        total: 63,
        items: [
          { id: 'interest', label: 'Interest', value: 56 },
          { id: 'other', label: 'Other', value: 7 },
        ],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 811, notes: ['80% margin', '(0pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 269, notes: ['27% margin', '+11pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 329, notes: ['33% margin', '+13pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第二季度',
          periodNote: '截至 2025 年 6 月',
          revenue: {
            notes: ['同比 +48%'],
            items: [
              { label: '政府', notes: ['同比 +49%'] },
              { label: '商业', notes: ['同比 +47%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { label: '销售与营销', notes: ['占收入 24%', '同比 (5 个百分点)'] },
                { label: '管理费用', notes: ['占收入 16%', '同比 (4 个百分点)'] },
                { label: '研发', notes: ['占收入 13%', '同比 (3 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ label: '利息' }, { label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 80%', '同比 0 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 27%', '同比 +11 个百分点'] },
            net: { label: '净利润', notes: ['利润率 33%', '同比 +13 个百分点'] },
          },
        },
      },
    },
    {
      key: 'palantir-q3-fy25',
      company: 'Palantir',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/palantir-q3-fy25.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 1181,
        notes: ['+63% Y/Y'],
        items: [
          { id: 'government', label: 'Government', value: 633, notes: ['+55% Y/Y'] },
          { id: 'commercial', label: 'Commercial', value: 548, notes: ['+73% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 207 },
        operatingExpenses: {
          total: 580,
          items: [
            { id: 'sm', label: 'S&M', value: 275, notes: ['23% of revenue', '(6pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 162, notes: ['14% of revenue', '(5pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 144, notes: ['12% of revenue', '(4pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 4 },
      },
      otherIncome: {
        total: 87,
        items: [
          { id: 'interest', label: 'Interest', value: 60 },
          { id: 'other', label: 'Other', value: 27 },
        ],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 974, notes: ['82% margin', '+3pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 393, notes: ['33% margin', '+18pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 477, notes: ['40% margin', '+20pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          revenue: {
            notes: ['同比 +63%'],
            items: [
              { label: '政府', notes: ['同比 +55%'] },
              { label: '商业', notes: ['同比 +73%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { label: '销售与营销', notes: ['占收入 23%', '同比 (6 个百分点)'] },
                { label: '管理费用', notes: ['占收入 14%', '同比 (5 个百分点)'] },
                { label: '研发', notes: ['占收入 12%', '同比 (4 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { label: '利息' },
              { label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 82%', '同比 +3 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 33%', '同比 +18 个百分点'] },
            net: { label: '净利润', notes: ['利润率 40%', '同比 +20 个百分点'] },
          },
        },
      },
    },
    {
      key: 'palantir-q4-fy25',
      company: 'Palantir',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/palantir-q4-fy25.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 1407,
        notes: ['+70% Y/Y'],
        items: [
          { id: 'commercial', label: 'Commercial', value: 677, notes: ['+82% Y/Y'] },
          { id: 'government', label: 'Government', value: 730, notes: ['+60% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 216 },
        operatingExpenses: {
          total: 615,
          items: [
            { id: 'sm', label: 'S&M', value: 302, notes: ['21% of revenue', '(13pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 170, notes: ['12% of revenue', '(10pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 144, notes: ['10% of revenue', '(11pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 10 },
      },
      otherIncome: {
        total: 63,
        items: [{ id: 'interest', label: 'Interest', value: 63 }],
      },
      otherExpenses: {
        total: 17,
        items: [{ id: 'other', label: 'Other', value: 17 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1191, notes: ['85% margin', '+6pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 575, notes: ['41% margin', '+40pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 612, notes: ['43% margin', '+34pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +70%'],
            items: [
              { label: '商业', notes: ['同比 +82%'] },
              { label: '政府', notes: ['同比 +60%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { label: '销售与营销', notes: ['占收入 21%', '同比 (13 个百分点)'] },
                { label: '管理费用', notes: ['占收入 12%', '同比 (10 个百分点)'] },
                { label: '研发', notes: ['占收入 10%', '同比 (11 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ label: '利息' }] },
          otherExpenses: { items: [{ label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 85%', '同比 +6 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 41%', '同比 +40 个百分点'] },
            net: { label: '净利润', notes: ['利润率 43%', '同比 +34 个百分点'] },
          },
        },
      },
    },
    {
      key: 'palantir-q1-fy26',
      company: 'Palantir',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/palantir-q1-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 1633,
        notes: ['+85% Y/Y', 'Commercial and Government revenue items sum to $1,632M because the source chart rounds to whole millions.'],
        items: [
          { id: 'commercial', label: 'Commercial', value: 774, notes: ['+95% Y/Y'] },
          { id: 'government', label: 'Government', value: 858, notes: ['+76% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 216 },
        operatingExpenses: {
          total: 663,
          items: [
            { id: 'sm', label: 'S&M', value: 319, notes: ['20% of revenue', '(7pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 183, notes: ['11% of revenue', '(7pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 161, notes: ['10% of revenue', '(5pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 12 },
      },
      otherIncome: {
        total: 134,
        items: [
          { id: 'interest', label: 'Interest', value: 66 },
          { id: 'other', label: 'Other', value: 68 },
        ],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1417, notes: ['87% margin', '+6pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 754, notes: ['46% margin', '+26pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 876, notes: ['54% margin', '+29pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +85%', '由于来源图采用取整值，商业和政府收入明细合计为 1,632M 美元。'],
            items: [
              { label: '商业', notes: ['同比 +95%'] },
              { label: '政府', notes: ['同比 +76%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { label: '销售与营销', notes: ['占收入 20%', '同比 (7 个百分点)'] },
                { label: '管理费用', notes: ['占收入 11%', '同比 (7 个百分点)'] },
                { label: '研发', notes: ['占收入 10%', '同比 (5 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { label: '利息' },
              { label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 87%', '同比 +6 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 46%', '同比 +26 个百分点'] },
            net: { label: '净利润', notes: ['利润率 54%', '同比 +29 个百分点'] },
          },
        },
      },
    }
  );
})(window);
