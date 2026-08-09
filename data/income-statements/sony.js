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
      key: 'sony-q3-fy24', company: 'Sony', period: 'Q3 FY24', periodNote: 'Ending Dec. 2024',
      currency: '¥', unit: 'B', decimals: 0,
      sourceImage: 'input/processed/sony-q3-fy24.png', roundingTolerance: 2,
      revenue: {
        total: 4410, notes: ['+18% Y/Y'],
        items: [
          { id: 'game_network', label: 'Game & Network', value: 1620, notes: ['+13% Y/Y', '7% operating margin'] },
          { id: 'music', label: 'Music', value: 477, notes: ['+14% Y/Y', '20% operating margin'] },
          { id: 'pictures', label: 'Pictures', value: 397, notes: ['+9% Y/Y', '9% operating margin'] },
          { id: 'technology', label: 'Technology', value: 693, notes: ['(5%) Y/Y', '11% operating margin'] },
          { id: 'imaging_sensing', label: 'Imaging & Sensing', value: 481, notes: ['+1% Y/Y', '20% operating margin'] },
          { id: 'financial_services', label: 'Financial services', value: 716, notes: ['+132% Y/Y', '6% operating margin'] },
          { id: 'other_revenue', label: 'Other', value: 26, notes: ['+14% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 2696 },
        operatingExpenses: {
          total: 1247,
          items: [
            { id: 'financial_services_other', label: 'Financial services & other', value: 670 },
            { id: 'sga', label: 'SG&A', value: 577 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 119 },
      },
      operatingOtherIncome: { total: 2, items: [{ id: 'other_income', label: 'Other', value: 2 }] },
      operatingOtherExpenses: { total: 0, items: [] },
      otherIncome: {
        total: 25,
        items: [{
          id: 'financial', label: 'Financial', value: 25,
          notes: ['The Source renders this positive green contribution with the literal (¥25B).'],
        }],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1714, notes: ['39% margin', '+6pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 469, notes: ['11% margin', '(2pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 376, notes: ['8% margin', '(1pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第三季度', periodNote: '截至 2024 年 12 月',
          revenue: {
            notes: ['同比 +18%'],
            items: [
              { id: 'game_network', label: '游戏与网络', notes: ['同比 +13%', '营业利润率 7%'] },
              { id: 'music', label: '音乐', notes: ['同比 +14%', '营业利润率 20%'] },
              { id: 'pictures', label: '影视', notes: ['同比 +9%', '营业利润率 9%'] },
              { id: 'technology', label: '技术', notes: ['同比 (5%)', '营业利润率 11%'] },
              { id: 'imaging_sensing', label: '成像与传感', notes: ['同比 +1%', '营业利润率 20%'] },
              { id: 'financial_services', label: '金融服务', notes: ['同比 +132%', '营业利润率 6%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 +14%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: { items: [
              { id: 'financial_services_other', label: '金融服务及其他费用' },
              { id: 'sga', label: '销售、一般及行政费用' },
            ] },
            tax: { label: '税费' },
          },
          operatingOtherIncome: { items: [{ id: 'other_income', label: '其他收入' }] },
          otherIncome: { items: [{ id: 'financial', label: '财务收益', notes: ['来源图以绿色正向贡献呈现，并保留字面值 (¥25B)。'] }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 39%', '同比 +6 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 11%', '同比 (2 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 8%', '同比 (1 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'sony-q2-fy23',
      company: 'Sony',
      period: 'Q2 FY23',
      periodNote: 'Ending Sept. 2023',
      currency: '¥',
      unit: 'B',
      decimals: 0,
      sourceImage: 'input/processed/sony-q2-fy23.png',
      roundingTolerance: 1.5,
      revenue: {
        total: 2829,
        notes: ['+8% Y/Y'],
        items: [
          { id: 'game_network', label: 'Game & Network', value: 930, notes: ['+32% Y/Y', '5% operating margin'] },
          { id: 'music', label: 'Music', value: 399, notes: ['+12% Y/Y', '20% operating margin'] },
          { id: 'pictures', label: 'Pictures', value: 397, notes: ['+18% Y/Y', '7% operating margin'] },
          { id: 'technology', label: 'Technology', value: 603, notes: ['(10%) Y/Y', '10% operating margin'] },
          { id: 'imaging_sensing', label: 'Imaging & Sensing', value: 375, notes: ['+1% Y/Y', '12% operating margin'] },
          { id: 'financial_services', label: 'Financial services', value: 102, notes: ['(42%) Y/Y', '15% operating margin'] },
          { id: 'other_revenue', label: 'Other', value: 22, notes: ['+26% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 1968 },
        operatingExpenses: {
          total: 604,
          items: [
            { id: 'sga', label: 'SG&A', value: 519 },
            { id: 'financial_services_other', label: 'Financial services & other', value: 86 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 56 },
      },
      operatingOtherIncome: {
        total: 6,
        items: [{ id: 'other_income', label: 'Other', value: 6 }],
      },
      operatingOtherExpenses: { total: 0, items: [] },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 5,
        items: [{ id: 'financial', label: 'Financial', value: 5 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 861, notes: ['30% margin', '(5pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 263, notes: ['9% margin', '(5pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 201, notes: ['7% margin', '(4pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第二季度',
          periodNote: '截至 2023 年 9 月',
          revenue: {
            notes: ['同比 +8%'],
            items: [
              { id: 'game_network', label: '游戏与网络', notes: ['同比 +32%', '营业利润率 5%'] },
              { id: 'music', label: '音乐', notes: ['同比 +12%', '营业利润率 20%'] },
              { id: 'pictures', label: '影视', notes: ['同比 +18%', '营业利润率 7%'] },
              { id: 'technology', label: '技术', notes: ['同比 (10%)', '营业利润率 10%'] },
              { id: 'imaging_sensing', label: '成像与传感', notes: ['同比 +1%', '营业利润率 12%'] },
              { id: 'financial_services', label: '金融服务', notes: ['同比 (42%)', '营业利润率 15%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 +26%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售、一般及行政费用' },
                { id: 'financial_services_other', label: '金融服务及其他' },
              ],
            },
            tax: { label: '税费' },
          },
          operatingOtherIncome: { items: [{ id: 'other_income', label: '其他收入' }] },
          otherExpenses: { items: [{ id: 'financial', label: '财务费用' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 30%', '同比 (5 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 9%', '同比 (5 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 7%', '同比 (4 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'sony-q2-fy24',
      company: 'Sony',
      period: 'Q2 FY24',
      periodNote: 'Ending Sep. 2024',
      currency: '¥',
      unit: 'B',
      decimals: 0,
      sourceImage: 'input/processed/sony-q2-fy24.png',
      roundingTolerance: 1.5,
      revenue: {
        total: 2906,
        notes: ['+3% Y/Y'],
        items: [
          { id: 'game_network', label: 'Game & Network', value: 1034, notes: ['+11% Y/Y', '13% operating margin'] },
          { id: 'music', label: 'Music', value: 444, notes: ['+11% Y/Y', '20% operating margin'] },
          { id: 'pictures', label: 'Pictures', value: 353, notes: ['(11%) Y/Y', '5% operating margin'] },
          { id: 'technology', label: 'Technology', value: 606, notes: ['+0% Y/Y', '12% operating margin'] },
          { id: 'imaging_sensing', label: 'Imaging & Sensing', value: 510, notes: ['+36% Y/Y', '18% operating margin'] },
          {
            id: 'other_revenue',
            label: 'Other',
            value: -42,
            notes: ['The Source shows this unsigned amount as a gray outgoing consolidation-adjustment flow; its direction and the segment-to-Sales reconciliation establish the negative sign.'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 2045 },
        operatingExpenses: {
          total: 537,
          items: [{ id: 'operating_expenses', label: 'Operating expenses', value: 537 }],
        },
        tax: { id: 'tax', label: 'Tax', value: 110 },
      },
      operatingOtherIncome: { total: 131, items: [{ id: 'other_income', label: 'Other', value: 131 }] },
      operatingOtherExpenses: { total: 0, items: [] },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 5, items: [{ id: 'other_expense', label: 'Other', value: 5 }] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 861, notes: ['30% margin', '(4pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 455, notes: ['16% margin', '+6pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 340, notes: ['12% margin', '+5pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第二季度',
          periodNote: '截至 2024 年 9 月',
          revenue: {
            notes: ['同比 +3%'],
            items: [
              { id: 'game_network', label: '游戏与网络', notes: ['同比 +11%', '营业利润率 13%'] },
              { id: 'music', label: '音乐', notes: ['同比 +11%', '营业利润率 20%'] },
              { id: 'pictures', label: '影视', notes: ['同比 (11%)', '营业利润率 5%'] },
              { id: 'technology', label: '技术', notes: ['同比 +0%', '营业利润率 12%'] },
              { id: 'imaging_sensing', label: '成像与传感', notes: ['同比 +36%', '营业利润率 18%'] },
              { id: 'other_revenue', label: '其他', notes: ['来源图以灰色流出调整项显示未带符号金额；流向和分部到销售额的勾稽关系表明其为负值。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: { items: [{ id: 'operating_expenses', label: '运营费用' }] },
            tax: { label: '税费' },
          },
          operatingOtherIncome: { items: [{ id: 'other_income', label: '其他收入' }] },
          otherExpenses: { items: [{ id: 'other_expense', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 30%', '同比 (4 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 16%', '同比 +6 个百分点'] },
            net: { label: '净利润', notes: ['利润率 12%', '同比 +5 个百分点'] },
          },
        },
      },
    },
    {
      key: 'sony-fy23', company: 'Sony', period: 'FY23', periodNote: 'Ending Mar. 2024',
      currency: '¥', unit: 'B', decimals: 0,
      sourceImage: 'input/processed/sony-fy23.png', roundingTolerance: 15,
      revenue: {
        total: 13021, notes: ['+19% Y/Y'],
        items: [
          { id: 'game_network', label: 'Game & Network', value: 4172, notes: ['+18% Y/Y', '7% operating margin'] },
          { id: 'music', label: 'Music', value: 1595, notes: ['+17% Y/Y', '19% operating margin'] },
          { id: 'pictures', label: 'Pictures', value: 1487, notes: ['+9% Y/Y', '8% operating margin'] },
          { id: 'technology', label: 'Technology', value: 2415, notes: ['(1%) Y/Y', '8% operating margin'] },
          { id: 'imaging_sensing', label: 'Imaging & Sensing', value: 478, notes: ['+24% Y/Y', '41% operating margin'] },
          { id: 'financial_services', label: 'Financial services', value: 1761, notes: ['+100% Y/Y', '10% operating margin'] },
          { id: 'other_revenue', label: 'Other', value: 1113, notes: ['+11% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 8089 },
        operatingExpenses: {
          total: 3762,
          items: [
            { id: 'sga', label: 'SG&A', value: 2156 },
            { id: 'financial_services_other', label: 'Financial services & other', value: 1606 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 288 },
      },
      operatingOtherIncome: { total: 40, items: [{ id: 'other_income', label: 'Other', value: 40 }] },
      operatingOtherExpenses: { total: 0, items: [] },
      otherIncome: { total: 60, items: [{ id: 'finance_income', label: 'Finance', value: 60 }] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 4932, notes: ['38% margin', '+12pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1210, notes: ['9% margin', '(3pp) Y/Y'] },
        net: {
          id: 'net_profit', label: 'Net profit', value: 970.6,
          notes: [
            '8% margin', '(2pp) Y/Y',
            'Source chart literal ¥368B is a user-approved numeric-typo correction; Sony FY2023 official results report ¥970.6B net income attributable to Sony Group Corporation stockholders.',
          ],
        },
      },
      i18n: {
        zh: {
          period: '2023 财年', periodNote: '截至 2024 年 3 月',
          revenue: {
            notes: ['同比 +19%'],
            items: [
              { id: 'game_network', label: '游戏与网络', notes: ['同比 +18%', '营业利润率 7%'] },
              { id: 'music', label: '音乐', notes: ['同比 +17%', '营业利润率 19%'] },
              { id: 'pictures', label: '影视', notes: ['同比 +9%', '营业利润率 8%'] },
              { id: 'technology', label: '技术', notes: ['同比 (1%)', '营业利润率 8%'] },
              { id: 'imaging_sensing', label: '成像与传感', notes: ['同比 +24%', '营业利润率 41%'] },
              { id: 'financial_services', label: '金融服务', notes: ['同比 +100%', '营业利润率 10%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 +11%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: { items: [
              { id: 'sga', label: '销售、一般及行政费用' },
              { id: 'financial_services_other', label: '金融服务及其他' },
            ] },
            tax: { label: '税费' },
          },
          operatingOtherIncome: { items: [{ id: 'other_income', label: '其他收入' }] },
          otherIncome: { items: [{ id: 'finance_income', label: '财务收入' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 38%', '同比 +12 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 9%', '同比 (3 个百分点)'] },
            net: { label: '净利润', notes: [
              '利润率 8%', '同比 (2 个百分点)',
              '源图的 ¥368B 已经用户授权按数字笔误更正；Sony 2023 财年官方结果披露归属于 Sony Group Corporation 股东的净利润为 ¥970.6B。',
            ] },
          },
        },
      },
    },
    {
      key: 'sony-q3-fy22',
      company: 'Sony',
      period: 'Q3 FY22',
      periodNote: 'Ending Dec. 2022',
      currency: '¥',
      unit: 'B',
      decimals: 0,
      sourceImage: 'input/processed/sony-q3-fy22.png',
      roundingTolerance: 2,
      revenue: {
        total: 3031,
        notes: ['(11%) Y/Y'],
        items: [
          { id: 'game_network', label: 'Game & Network', value: 813, notes: ['35% Y/Y', '11% operating margin'] },
          { id: 'music', label: 'Music', value: 295, notes: ['(19%) Y/Y', '19% operating margin'] },
          { id: 'pictures', label: 'Pictures', value: 461, notes: ['+39% Y/Y', '32% operating margin'] },
          { id: 'technology', label: 'Technology', value: 687, notes: ['(9%) Y/Y', '12% operating margin'] },
          { id: 'imaging_sensing', label: 'Imaging & Sensing', value: 325, notes: ['(22%) Y/Y', '20% operating margin'] },
          { id: 'financial_services', label: 'Financial services', value: 471, notes: ['+31% Y/Y', '7% operating margin'] },
          { id: 'other_revenue', label: 'Other', value: 27, notes: ['+9% Y/Y', '30% operating margin'] },
          {
            id: 'eliminations',
            label: 'Intersegment Elimination',
            value: -50,
            notes: ['Shown as an intersegment elimination before consolidated Sales in the source chart.'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 1787 },
        operatingExpenses: {
          total: 857,
          items: [
            { id: 'sga', label: 'SG&A', value: 424 },
            { id: 'financial_services_other', label: 'Financial services & other', value: 434 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 114 },
      },
      operatingOtherIncome: {
        total: 79,
        items: [{ id: 'other_income', label: 'Other', value: 79 }],
      },
      operatingOtherExpenses: { total: 0, items: [] },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 4,
        items: [{ id: 'financial_loss', label: 'Financial loss', value: 4 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1244, notes: ['41% margin', '+4pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 465, notes: ['15% margin', '+3pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 348, notes: ['11% margin', '+2pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2022 财年第三季度',
          periodNote: '截至 2022 年 12 月',
          revenue: {
            notes: ['同比 (11%)'],
            items: [
              { id: 'game_network', label: '游戏与网络', notes: ['同比 35%', '营业利润率 11%'] },
              { id: 'music', label: '音乐', notes: ['同比 (19%)', '营业利润率 19%'] },
              { id: 'pictures', label: '影视', notes: ['同比 +39%', '营业利润率 32%'] },
              { id: 'technology', label: '技术', notes: ['同比 (9%)', '营业利润率 12%'] },
              { id: 'imaging_sensing', label: '成像与传感', notes: ['同比 (22%)', '营业利润率 20%'] },
              { id: 'financial_services', label: '金融服务', notes: ['同比 +31%', '营业利润率 7%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 +9%', '营业利润率 30%'] },
              { id: 'eliminations', label: '分部间抵销', notes: ['来源图表将其显示为合并销售额前的分部间抵销。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售、一般及行政费用' },
                { id: 'financial_services_other', label: '金融服务及其他' },
              ],
            },
            tax: { label: '税费' },
          },
          operatingOtherIncome: { items: [{ id: 'other_income', label: '其他收入' }] },
          otherExpenses: { items: [{ id: 'financial_loss', label: '财务亏损' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 41%', '同比 +4 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 15%', '同比 +3 个百分点'] },
            net: { label: '净利润', notes: ['利润率 11%', '同比 +2 个百分点'] },
          },
        },
      },
    },
    {
      key: 'sony-q1-fy24',
      company: 'Sony',
      period: 'Q1 FY24',
      periodNote: 'Ending Jun. 2024',
      currency: '¥',
      unit: 'B',
      decimals: 0,
      sourceImage: 'input/processed/sony-q1-fy24.png',
      roundingTolerance: 1.5,
      revenue: {
        total: 3012,
        notes: ['+2% Y/Y'],
        items: [
          { id: 'game_network', label: 'Game & Network', value: 844, notes: ['+12% Y/Y', '8% operating margin'] },
          { id: 'music', label: 'Music', value: 436, notes: ['+22% Y/Y', '20% operating margin'] },
          { id: 'pictures', label: 'Pictures', value: 337, notes: ['+5% Y/Y', '3% operating margin'] },
          { id: 'technology', label: 'Technology', value: 594, notes: ['+5% Y/Y', '11% operating margin'] },
          { id: 'imaging_sensing', label: 'Imaging & Sensing', value: 333, notes: ['+23% Y/Y', '11% operating margin'] },
          { id: 'financial_services', label: 'Financial services', value: 446, notes: ['(34%) Y/Y', '7% operating margin'] },
          { id: 'other_revenue', label: 'Other', value: 21, notes: ['+7% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 1784 },
        operatingExpenses: {
          total: 960,
          items: [
            { id: 'sga', label: 'SG&A', value: 543 },
            { id: 'financial_services_other', label: 'Financial services & other', value: 416 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 81 },
      },
      operatingOtherIncome: { total: 12, items: [{ id: 'other_income', label: 'Other', value: 12 }] },
      operatingOtherExpenses: { total: 0, items: [] },
      otherIncome: { total: 38, items: [{ id: 'finance', label: 'Finance', value: 38 }] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1227, notes: ['41% margin', '(4pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 279, notes: ['9% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 236, notes: ['8% margin', '+0pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第一季度',
          periodNote: '截至 2024 年 6 月',
          revenue: {
            notes: ['同比 +2%'],
            items: [
              { id: 'game_network', label: '游戏与网络', notes: ['同比 +12%', '营业利润率 8%'] },
              { id: 'music', label: '音乐', notes: ['同比 +22%', '营业利润率 20%'] },
              { id: 'pictures', label: '影视', notes: ['同比 +5%', '营业利润率 3%'] },
              { id: 'technology', label: '技术', notes: ['同比 +5%', '营业利润率 11%'] },
              { id: 'imaging_sensing', label: '成像与传感', notes: ['同比 +23%', '营业利润率 11%'] },
              { id: 'financial_services', label: '金融服务', notes: ['同比 (34%)', '营业利润率 7%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 +7%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: { items: [
              { id: 'sga', label: '销售、一般及行政费用' },
              { id: 'financial_services_other', label: '金融服务及其他' },
            ] },
            tax: { label: '税费' },
          },
          operatingOtherIncome: { items: [{ id: 'other_income', label: '其他收入' }] },
          otherIncome: { items: [{ id: 'finance', label: '财务收入' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 41%', '同比 (4 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 9%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 8%', '同比 +0 个百分点'] },
          },
        },
      },
    },
    {
      key: 'sony-q3-fy23',
      company: 'Sony',
      period: 'Q3 FY23',
      periodNote: 'Ending Dec. 2023',
      currency: '¥',
      unit: 'B',
      decimals: 0,
      sourceImage: 'input/processed/sony-q3-fy23.png',
      roundingTolerance: 1.5,
      revenue: {
        total: 3748,
        notes: ['+22% Y/Y'],
        items: [
          { id: 'game_network', label: 'Game & Network', value: 1429, notes: ['+18% Y/Y', '6% operating margin'] },
          { id: 'music', label: 'Music', value: 418, notes: ['+16% Y/Y', '18% operating margin'] },
          { id: 'pictures', label: 'Pictures', value: 365, notes: ['+10% Y/Y', '12% operating margin'] },
          { id: 'technology', label: 'Technology', value: 726, notes: ['(2%) Y/Y', '11% operating margin'] },
          { id: 'imaging_sensing', label: 'Imaging & Sensing', value: 478, notes: ['+24% Y/Y', '21% operating margin'] },
          { id: 'financial_services', label: 'Financial services', value: 309, notes: ['13% Y/Y', '25% operating margin'] },
          { id: 'other_revenue', label: 'Other', value: 23, notes: ['+26% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 2504 },
        operatingExpenses: {
          total: 787,
          items: [
            { id: 'sga', label: 'SG&A', value: 555 },
            { id: 'financial_services_other', label: 'Financial services & other', value: 232 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 91 },
      },
      operatingOtherIncome: { total: 7, items: [{ id: 'other_income', label: 'Other', value: 7 }] },
      operatingOtherExpenses: { total: 0, items: [] },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 4, items: [{ id: 'financial', label: 'Financial', value: 4 }] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1244, notes: ['33% margin', '+3pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 464, notes: ['12% margin', '(1pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 368, notes: ['10% margin', '(1pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第三季度',
          periodNote: '截至 2023 年 12 月',
          revenue: {
            notes: ['同比 +22%'],
            items: [
              { id: 'game_network', label: '游戏与网络', notes: ['同比 +18%', '营业利润率 6%'] },
              { id: 'music', label: '音乐', notes: ['同比 +16%', '营业利润率 18%'] },
              { id: 'pictures', label: '影视', notes: ['同比 +10%', '营业利润率 12%'] },
              { id: 'technology', label: '技术', notes: ['同比 (2%)', '营业利润率 11%'] },
              { id: 'imaging_sensing', label: '成像与传感', notes: ['同比 +24%', '营业利润率 21%'] },
              { id: 'financial_services', label: '金融服务', notes: ['同比 13%', '营业利润率 25%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 +26%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: { items: [
              { id: 'sga', label: '销售、一般及行政费用' },
              { id: 'financial_services_other', label: '金融服务及其他' },
            ] },
            tax: { label: '税费' },
          },
          operatingOtherIncome: { items: [{ id: 'other_income', label: '其他收入' }] },
          otherExpenses: { items: [{ id: 'financial', label: '财务项目' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 33%', '同比 +3 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 12%', '同比 (1 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 10%', '同比 (1 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'sony-q1-fy23',
      company: 'Sony',
      period: 'Q1 FY23',
      periodNote: 'Ending June 2023',
      currency: '¥',
      unit: 'B',
      decimals: 0,
      sourceImage: 'input/processed/sony-q1-fy23.png',
      roundingTolerance: 1,
      revenue: {
        total: 2964,
        notes: ['+33% Y/Y'],
        items: [
          { id: 'game_network', label: 'Game & Network', value: 772, notes: ['+28% Y/Y', '6% operating margin'] },
          { id: 'music', label: 'Music', value: 358, notes: ['+16% Y/Y', '20% operating margin'] },
          { id: 'pictures', label: 'Pictures', value: 320, notes: ['(6%) Y/Y', '5% operating margin'] },
          { id: 'technology', label: 'Technology', value: 572, notes: ['+4% Y/Y', '10% operating margin'] },
          { id: 'imaging_sensing', label: 'Imaging & Sensing', value: 293, notes: ['+23% Y/Y', '4% operating margin'] },
          { id: 'financial_services', label: 'Financial services', value: 681, notes: ['+215% Y/Y', '8% operating margin'] },
          { id: 'other_revenue', label: 'Other', value: 20, notes: ['+1% Y/Y', '13% operating margin'] },
          { id: 'eliminations', label: 'Intersegment elimination', value: -52, notes: ['Shown as an intersegment elimination before consolidated Sales in the source chart.'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 1624 },
        operatingExpenses: {
          total: 1099,
          items: [
            { id: 'sga', label: 'SG&A', value: 475 },
            { id: 'financial_services_other', label: 'Financial services & other', value: 624 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 58 },
      },
      operatingOtherIncome: { total: 13, items: [{ id: 'other_income', label: 'Other', value: 13 }] },
      operatingOtherExpenses: { total: 0, items: [] },
      otherIncome: { total: 23, items: [{ id: 'financial_income', label: 'Financial', value: 23 }] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1339, notes: ['45% margin', '+8pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 253, notes: ['9% margin', '+0pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 218, notes: ['7% margin', '(4pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第一季度',
          periodNote: '截至 2023 年 6 月',
          revenue: {
            notes: ['同比 +33%'],
            items: [
              { id: 'game_network', label: '游戏与网络', notes: ['同比 +28%', '营业利润率 6%'] },
              { id: 'music', label: '音乐', notes: ['同比 +16%', '营业利润率 20%'] },
              { id: 'pictures', label: '影视', notes: ['同比 (6%)', '营业利润率 5%'] },
              { id: 'technology', label: '技术', notes: ['同比 +4%', '营业利润率 10%'] },
              { id: 'imaging_sensing', label: '成像与传感', notes: ['同比 +23%', '营业利润率 4%'] },
              { id: 'financial_services', label: '金融服务', notes: ['同比 +215%', '营业利润率 8%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 +1%', '营业利润率 13%'] },
              { id: 'eliminations', label: '分部间抵销', notes: ['来源图表将其显示为合并销售额前的分部间抵销。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: { items: [
              { id: 'sga', label: '销售、一般及行政费用' },
              { id: 'financial_services_other', label: '金融服务及其他' },
            ] },
            tax: { label: '税费' },
          },
          operatingOtherIncome: { items: [{ id: 'other_income', label: '其他收入' }] },
          otherIncome: { items: [{ id: 'financial_income', label: '金融收益' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 45%', '同比 +8 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 9%', '同比 +0 个百分点'] },
            net: { label: '净利润', notes: ['利润率 7%', '同比 (4 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'sony-q4-fy22',
      company: 'Sony',
      period: 'Q4 FY22',
      periodNote: 'Ending Mar. 2023',
      currency: '¥',
      unit: 'B',
      decimals: 0,
      sourceImage: 'input/processed/sony-q4-fy22.png',
      roundingTolerance: 2,
      revenue: {
        total: 3064,
        notes: ['+35% Y/Y'],
        items: [
          { id: 'game_network', label: 'Game & Network', value: 1073, notes: ['+61% Y/Y', '8% operating margin'] },
          { id: 'music', label: 'Music', value: 349, notes: ['+19% Y/Y', '14% operating margin'] },
          { id: 'pictures', label: 'Pictures', value: 359, notes: ['+15% Y/Y', '3% operating margin'] },
          { id: 'technology', label: 'Technology', value: 494, notes: ['+0% Y/Y', '(2%) operating margin'] },
          { id: 'imaging_sensing', label: 'Imaging & Sensing', value: 348, notes: ['+37% Y/Y', '3% operating margin'] },
          { id: 'financial_services', label: 'Financial services', value: 493, notes: ['+76% Y/Y', '10% operating margin'] },
          { id: 'other_revenue', label: 'Other', value: 23, notes: ['(10%) Y/Y', '(13%) operating margin'] },
          {
            id: 'eliminations',
            label: 'Intersegment Elimination',
            value: -77,
            notes: ['Shown as an intersegment elimination before consolidated Sales in the source chart.'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 1933 },
        operatingExpenses: {
          total: 1008,
          items: [
            { id: 'sga', label: 'SG&A', value: 551 },
            { id: 'financial_services_other', label: 'Financial services & other', value: 457 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 16 },
      },
      operatingOtherIncome: {
        total: 6,
        items: [{ id: 'other_income', label: 'Other', value: 6 }],
      },
      operatingOtherExpenses: { total: 0, items: [] },
      otherIncome: {
        total: 16,
        items: [{ id: 'financial_income', label: 'Financial', value: 16 }],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1131, notes: ['37% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 129, notes: ['4% margin', '(2pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 129, notes: ['4% margin', '(1pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2022 财年第四季度',
          periodNote: '截至 2023 年 3 月',
          revenue: {
            notes: ['同比 +35%'],
            items: [
              { id: 'game_network', label: '游戏与网络', notes: ['同比 +61%', '营业利润率 8%'] },
              { id: 'music', label: '音乐', notes: ['同比 +19%', '营业利润率 14%'] },
              { id: 'pictures', label: '影视', notes: ['同比 +15%', '营业利润率 3%'] },
              { id: 'technology', label: '技术', notes: ['同比 +0%', '营业利润率 (2%)'] },
              { id: 'imaging_sensing', label: '成像与传感', notes: ['同比 +37%', '营业利润率 3%'] },
              { id: 'financial_services', label: '金融服务', notes: ['同比 +76%', '营业利润率 10%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 (10%)', '营业利润率 (13%)'] },
              { id: 'eliminations', label: '分部间抵销', notes: ['来源图表将其显示为合并销售额前的分部间抵销。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售、一般及行政费用' },
                { id: 'financial_services_other', label: '金融服务及其他' },
              ],
            },
            tax: { label: '税费' },
          },
          operatingOtherIncome: { items: [{ id: 'other_income', label: '其他收入' }] },
          otherIncome: { items: [{ id: 'financial_income', label: '金融收入' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 37%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 4%', '同比 (2 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 4%', '同比 (1 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'sony-q4-fy24',
      company: 'Sony',
      period: 'Q4 FY24',
      periodNote: 'Ending March. 2025',
      currency: '¥',
      unit: 'B',
      decimals: 0,
      sourceImage: 'input/processed/sony-q4-fy24.png',
      roundingTolerance: 5,
      revenue: {
        total: 2630,
        notes: ['(24%) Y/Y'],
        items: [
          { id: 'game_network', label: 'Game & Network', value: 1045, notes: ['(1%) Y/Y', '9% operating margin'] },
          { id: 'music', label: 'Music', value: 464, notes: ['+10% Y/Y', '18% operating margin'] },
          { id: 'pictures', label: 'Pictures', value: 411, notes: ['+2% Y/Y', '13% operating margin'] },
          { id: 'technology', label: 'Technology', value: 470, notes: ['(10%) Y/Y', '(4%) operating margin'] },
          { id: 'imaging_sensing', label: 'Imaging & Sensing', value: 388, notes: ['+2% Y/Y', '9% operating margin'] },
          { id: 'other_revenue', label: 'Other', value: 22, notes: ['+18% Y/Y'] },
          { id: 'financial_services', label: 'Financial services', value: -175, notes: ['(126%) Y/Y', 'Source chart shows this as a consolidation adjustment before Gross profit and Cost of sales.'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 1980 },
        operatingExpenses: {
          total: 609,
          items: [
            { id: 'sga', label: 'SG&A', value: 599 },
            { id: 'other_expenses', label: 'Other expenses', value: 9 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 4 },
      },
      operatingOtherIncome: { total: 162, items: [{ id: 'other_financial', label: 'Other financial', value: 162 }] },
      operatingOtherExpenses: { total: 0, items: [] },
      otherIncome: { total: 9, items: [{ id: 'other_income', label: 'Other', value: 9 }] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 650, notes: ['25% margin', '(18pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 204, notes: ['8% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 209, notes: ['8% margin', '+2pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第四季度',
          periodNote: '截至 2025 年 3 月',
          revenue: {
            notes: ['同比 (24%)'],
            items: [
              { id: 'game_network', label: '游戏与网络', notes: ['同比 (1%)', '营业利润率 9%'] },
              { id: 'music', label: '音乐', notes: ['同比 +10%', '营业利润率 18%'] },
              { id: 'pictures', label: '影视', notes: ['同比 +2%', '营业利润率 13%'] },
              { id: 'technology', label: '技术', notes: ['同比 (10%)', '营业利润率 (4%)'] },
              { id: 'imaging_sensing', label: '成像与传感', notes: ['同比 +2%', '营业利润率 9%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 +18%'] },
              { id: 'financial_services', label: '金融服务', notes: ['同比 (126%)', '来源图表将其显示为毛利润及销售成本前的合并调整项。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: { items: [
              { id: 'sga', label: '销售、一般及行政费用' },
              { id: 'other_expenses', label: '其他费用' },
            ] },
            tax: { label: '税费' },
          },
          operatingOtherIncome: { items: [{ id: 'other_financial', label: '其他财务收益' }] },
          otherIncome: { items: [{ id: 'other_income', label: '其他收入' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 25%', '同比 (18 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 8%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 8%', '同比 +2 个百分点'] },
          },
        },
      },
    },
    {
      key: 'sony-q1-fy25',
      company: 'Sony',
      period: 'Q1 FY25',
      periodNote: 'Ending June 2025',
      currency: '¥',
      unit: 'B',
      decimals: 0,
      sourceImage: 'input/processed/sony-q1-fy25.png',
      roundingTolerance: 10,
      revenue: {
        total: 2622,
        notes: ['+2% Y/Y'],
        items: [
          { id: 'game_network', label: 'Game & Network', value: 937, notes: ['+8% Y/Y', '16% operating margin'] },
          { id: 'music', label: 'Music', value: 465, notes: ['+5% Y/Y', '20% operating margin'] },
          { id: 'pictures', label: 'Pictures', value: 327, notes: ['(3%) Y/Y', '6% operating margin'] },
          { id: 'technology', label: 'Technology', value: 534, notes: ['(11%) Y/Y', '8% operating margin'] },
          { id: 'imaging_sensing', label: 'Imaging & Sensing', value: 408, notes: ['+15% Y/Y', '13% operating margin'] },
          { id: 'other_revenue', label: 'Other', value: 19, notes: ['+21% Y/Y'] },
          { id: 'financial_services', label: 'Financial services', value: -69, notes: ['(17%) Y/Y', 'Source chart shows this as a consolidation adjustment before Sales.'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 1775 },
        operatingExpenses: {
          total: 507,
          items: [
            { id: 'sga', label: 'SG&A', value: 515 },
            { id: 'other_expenses', label: 'Other expenses', value: 2 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 94 },
      },
      operatingOtherIncome: {
        total: 10,
        items: [{ id: 'other_income', label: 'Other income', value: 10 }],
      },
      operatingOtherExpenses: { total: 0, items: [] },
      otherIncome: {
        total: 17,
        items: [{ id: 'other_after_operating', label: 'Other', value: 17 }],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 846, notes: ['32% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 340, notes: ['13% margin', '+3pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 263, notes: ['10% margin', '+2pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第一季度',
          periodNote: '截至 2025 年 6 月',
          revenue: {
            notes: ['同比 +2%'],
            items: [
              { id: 'game_network', label: '游戏与网络', notes: ['同比 +8%', '营业利润率 16%'] },
              { id: 'music', label: '音乐', notes: ['同比 +5%', '营业利润率 20%'] },
              { id: 'pictures', label: '影视', notes: ['同比 (3%)', '营业利润率 6%'] },
              { id: 'technology', label: '技术', notes: ['同比 (11%)', '营业利润率 8%'] },
              { id: 'imaging_sensing', label: '成像与传感', notes: ['同比 +15%', '营业利润率 13%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 +21%'] },
              { id: 'financial_services', label: '金融服务', notes: ['同比 (17%)', '源图在销售额前将其显示为合并调整项。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: { items: [
              { id: 'sga', label: '销售、一般及行政费用' },
              { id: 'other_expenses', label: '其他费用' },
            ] },
            tax: { label: '税费' },
          },
          operatingOtherIncome: { items: [{ id: 'other_income', label: '其他收入' }] },
          otherIncome: { items: [{ id: 'other_after_operating', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 32%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 13%', '同比 +3 个百分点'] },
            net: { label: '净利润', notes: ['利润率 10%', '同比 +2 个百分点'] },
          },
        },
      },
    },
    {
      key: 'sony-q2-fy25',
      company: 'Sony',
      period: 'Q2 FY25',
      periodNote: 'Ending Sept. 2025',
      currency: '¥',
      unit: 'B',
      decimals: 0,
      sourceImage: 'input/processed/sony-q2-fy25.png',
      roundingTolerance: 2,
      revenue: {
        total: 3108,
        notes: ['+5% Y/Y'],
        items: [
          { id: 'game_network', label: 'Game & Network', value: 1113, notes: ['+4% Y/Y', '11% operating margin'] },
          { id: 'music', label: 'Music', value: 542, notes: ['+21% Y/Y', '21% operating margin'] },
          { id: 'pictures', label: 'Pictures', value: 347, notes: ['(3%) Y/Y', '4% operating margin'] },
          { id: 'technology', label: 'Technology', value: 576, notes: ['(7%) Y/Y', '11% operating margin'] },
          { id: 'imaging_sensing', label: 'Imaging & Sensing', value: 615, notes: ['+15% Y/Y', '23% operating margin'] },
          { id: 'other_revenue', label: 'Other', value: 24, notes: ['(1%) Y/Y'] },
          { id: 'financial_services', label: 'Financial services', value: -108, notes: ['(29%) Y/Y', 'Source chart shows this as a consolidation adjustment before Sales.'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 2100 },
        operatingExpenses: {
          total: 579,
          items: [
            { id: 'sga', label: 'SG&A', value: 553 },
            { id: 'other_expenses', label: 'Other expenses', value: 26 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 123 },
      },
      otherIncome: { total: 13, items: [{ id: 'other_income', label: 'Other', value: 13 }] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1008, notes: ['32% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 429, notes: ['14% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 318, notes: ['10% margin', '+0pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第二季度',
          periodNote: '截至 2025 年 9 月',
          revenue: {
            notes: ['同比 +5%'],
            items: [
              { id: 'game_network', label: '游戏与网络', notes: ['同比 +4%', '营业利润率 11%'] },
              { id: 'music', label: '音乐', notes: ['同比 +21%', '营业利润率 21%'] },
              { id: 'pictures', label: '影视', notes: ['同比 (3%)', '营业利润率 4%'] },
              { id: 'technology', label: '技术', notes: ['同比 (7%)', '营业利润率 11%'] },
              { id: 'imaging_sensing', label: '成像与传感', notes: ['同比 +15%', '营业利润率 23%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 (1%)'] },
              { id: 'financial_services', label: '金融服务', notes: ['同比 (29%)', '源图在销售额前将其显示为合并调整项。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: { items: [{ id: 'sga', label: '销售、一般及行政费用' }, { id: 'other_expenses', label: '其他费用' }] },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他收入' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 32%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 14%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 10%', '同比 +0 个百分点'] },
          },
        },
      },
    },
    {
      key: 'sony-q3-fy25',
      company: 'Sony',
      period: 'Q3 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '¥',
      unit: 'B',
      decimals: 0,
      sourceImage: 'input/processed/sony-q3-fy25.png',
      roundingTolerance: 2.5,
      revenue: {
        total: 3714,
        notes: ['+1% Y/Y'],
        items: [
          { id: 'game_network', label: 'Game & Network', value: 1614, notes: ['(4%) Y/Y', '9% operating margin'] },
          { id: 'music', label: 'Music', value: 542, notes: ['+13% Y/Y', '20% operating margin'] },
          { id: 'pictures', label: 'Pictures', value: 353, notes: ['(11%) Y/Y', '9% operating margin'] },
          { id: 'technology', label: 'Technology', value: 658, notes: ['(7%) Y/Y', '9% operating margin'] },
          { id: 'imaging_sensing', label: 'Imaging & Sensing', value: 604, notes: ['+21% Y/Y', '22% operating margin'] },
          { id: 'other_revenue', label: 'Other', value: 25, notes: ['(2%) Y/Y'] },
          {
            label: 'Intersegment',
            value: -84,
            notes: ['Shown as an intersegment elimination before consolidated Sales in the source chart.'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 2658 },
        operatingExpenses: {
          total: 584,
          items: [{ id: 'operating_expenses', label: 'Operating expenses', value: 584 }],
        },
        tax: { id: 'tax', label: 'Tax', value: 120 },
      },
      operatingOtherIncome: {
        total: 43,
        items: [{ id: 'other_income', label: 'Other', value: 43 }],
      },
      operatingOtherExpenses: { total: 0, items: [] },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 15,
        items: [{ id: 'other_after_operating', label: 'Other', value: 15 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1056, notes: ['28% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 515, notes: ['14% margin', '+2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 380, notes: ['10% margin', '+1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +1%'],
            items: [
              { id: 'game_network', label: '游戏与网络', notes: ['同比 (4%)', '营业利润率 9%'] },
              { id: 'music', label: '音乐', notes: ['同比 +13%', '营业利润率 20%'] },
              { id: 'pictures', label: '影视', notes: ['同比 (11%)', '营业利润率 9%'] },
              { id: 'technology', label: '技术', notes: ['同比 (7%)', '营业利润率 9%'] },
              { id: 'imaging_sensing', label: '成像与传感', notes: ['同比 +21%', '营业利润率 22%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 (2%)'] },
              { label: '分部间抵销', notes: ['来源图表将其显示为合并销售额前的分部间抵销。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [{ id: 'operating_expenses', label: '运营费用' }],
            },
            tax: { label: '税费' },
          },
          operatingOtherIncome: { items: [{ id: 'other_income', label: '其他收入' }] },
          otherExpenses: { items: [{ id: 'other_after_operating', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 28%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 14%', '同比 +2 个百分点'] },
            net: { label: '净利润', notes: ['利润率 10%', '同比 +1 个百分点'] },
          },
        },
      },
    },
    {
      key: 'sony-fy25',
      company: 'Sony',
      period: 'FY25',
      periodNote: 'Ending Mar. 2026',
      currency: '¥',
      unit: 'B',
      decimals: 0,
      sourceImage: 'input/processed/sony-fy25.png',
      roundingTolerance: 1.5,
      revenue: {
        total: 12480,
        notes: ['+4% Y/Y'],
        items: [
          { id: 'game_network', label: 'Game & Network', value: 4686, notes: ['+0% Y/Y', '10% operating margin'] },
          { id: 'music', label: 'Music', value: 2120, notes: ['+15% Y/Y', '21% operating margin'] },
          { id: 'pictures', label: 'Pictures', value: 1499, notes: ['+0% Y/Y', '7% operating margin'] },
          { id: 'technology', label: 'Technology', value: 2261, notes: ['(6%) Y/Y', '7% operating margin'] },
          { id: 'imaging_sensing', label: 'Imaging & Sensing', value: 2152, notes: ['+20% Y/Y', '17% operating margin'] },
          { id: 'other_revenue', label: 'Other', value: 89, notes: ['(8%) Y/Y'] },
          {
            id: 'eliminations',
            label: 'Elimination',
            value: -327,
            notes: ['Shown as an elimination cost before consolidated Sales in the source chart.'],
          },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_sales',
          label: 'Cost of sales',
          value: 8635,
          notes: ['Source chart sales and cost of sales imply ¥3,845B gross profit; chart displays ¥3,844B.'],
        },
        operatingExpenses: {
          total: 2397,
          items: [
            { id: 'sga', label: 'SG&A', value: 2299 },
            { id: 'other_expenses', label: 'Other expenses', value: 98 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 367 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 25,
        items: [{ id: 'other_after_operating', label: 'Other', value: 25 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 3844, notes: ['31% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1448, notes: ['12% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1055, notes: ['8% margin', '(1pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +4%'],
            items: [
              { id: 'game_network', label: '游戏与网络', notes: ['同比 +0%', '营业利润率 10%'] },
              { id: 'music', label: '音乐', notes: ['同比 +15%', '营业利润率 21%'] },
              { id: 'pictures', label: '影视', notes: ['同比 +0%', '营业利润率 7%'] },
              { id: 'technology', label: '技术', notes: ['同比 (6%)', '营业利润率 7%'] },
              { id: 'imaging_sensing', label: '成像与传感', notes: ['同比 +20%', '营业利润率 17%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 (8%)'] },
              { id: 'eliminations', label: '抵销', notes: ['来源图表将其显示为合并销售额前的抵销成本。'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '销售成本',
              notes: ['来源图表销售额和销售成本推导毛利润为 ¥3,845B；图中显示为 ¥3,844B。'],
            },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售、一般及行政费用' },
                { id: 'other_expenses', label: '其他费用' },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [{ id: 'other_after_operating', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 31%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 12%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 8%', '同比 (1 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
