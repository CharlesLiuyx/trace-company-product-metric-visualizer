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
