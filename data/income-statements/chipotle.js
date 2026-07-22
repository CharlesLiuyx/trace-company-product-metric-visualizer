/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/<dataset-key>.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'chipotle-q4-fy25',
    company: 'Chipotle',
    period: 'Q4 FY25',
    periodNote: 'Quarter ended Dec. 31, 2025',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/chipotle-q4-fy25.png',
    roundingTolerance: 0.15,
    revenue: {
      total: 2.983511,
      notes: ['+5% Y/Y'],
      items: [
        {
          id: 'food_beverage',
          label: 'Food & Beverage',
          value: 2.969211,
          notes: ['+5% Y/Y'],
          children: [
            { id: 'in_restaurant', label: 'In-restaurant', value: 1.869, notes: ['+2% Y/Y'] },
            { id: 'digital_sales', label: 'Digital sales', value: 1.100211, notes: ['+11% Y/Y'] },
          ],
        },
        { id: 'delivery', label: 'Delivery', value: 0.0143, notes: ['(8%) Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: {
        id: 'cost_of_revenue',
        label: 'Cost of revenue (not separately presented)',
        value: 0,
        notes: ['The source infographic begins at operating profit rather than showing a separate gross-profit stage.'],
      },
      operatingExpenses: {
        total: 2.563192,
        items: [
          { id: 'food_beverage_packaging', label: 'Food, beverage & packaging', value: 0.900155 },
          { id: 'labor', label: 'Labor', value: 0.760524 },
          { id: 'other_opex', label: 'Other opex', value: 0.461567 },
          { id: 'occupancy', label: 'Occupancy', value: 0.162493 },
          { id: 'ga', label: 'G&A', value: 0.160341 },
          { id: 'da', label: 'D&A', value: 0.092702 },
          { id: 'pre_opening', label: 'Pre-opening', value: 0.016946 },
          { id: 'impairment', label: 'Impairment', value: 0.008464 },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.102711 },
    },
    otherIncome: {
      total: 0.013324,
      items: [{ id: 'other_income', label: 'Other', value: 0.013324 }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit (not separately presented)', value: 2.983511, notes: ['Source infographic has no separate gross-profit stage.'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 0.420319, notes: ['14% margin', '(1pp) Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 0.330932, notes: ['11% margin', '(1pp) Y/Y'] },
    },
    sources: [
      {
        name: 'Chipotle Q4 and Full Year 2025 Results',
        url: 'https://ir.chipotle.com/2026-02-03-CHIPOTLE-ANNOUNCES-FOURTH-QUARTER-AND-FULL-YEAR-2025-RESULTS?lv=true',
      },
    ],
    i18n: {
      zh: {
        period: '2025 财年第四季度',
        periodNote: '截至 2025 年 12 月 31 日的季度',
        revenue: {
          notes: ['同比 +5%'],
          items: [
            {
              id: 'food_beverage', label: '餐饮收入', notes: ['同比 +5%'],
              children: [
                { id: 'in_restaurant', label: '餐厅内销售', notes: ['同比 +2%'] },
                { id: 'digital_sales', label: '数字销售', notes: ['同比 +11%'] },
              ],
            },
            { id: 'delivery', label: '配送服务', notes: ['同比 (8%)'] },
          ],
        },
        costs: {
          costOfRevenue: {
            label: '收入成本（未单列）',
            notes: ['来源信息图从营业利润口径开始，未单列毛利润阶段。'],
          },
          operatingExpenses: {
            items: [
              { id: 'food_beverage_packaging', label: '食品、饮料及包装' },
              { id: 'labor', label: '人工' },
              { id: 'other_opex', label: '其他运营费用' },
              { id: 'occupancy', label: '租赁及占用成本' },
              { id: 'ga', label: '一般及行政费用' },
              { id: 'da', label: '折旧与摊销' },
              { id: 'pre_opening', label: '开业前费用' },
              { id: 'impairment', label: '减值' },
            ],
          },
          tax: { label: '税费' },
        },
        otherIncome: { items: [{ id: 'other_income', label: '其他收入' }] },
        profit: {
          gross: { label: '营业利润', notes: ['来源信息图未单列毛利润阶段。'] },
          operating: { label: '营业利润', notes: ['利润率 14%', '同比 (1 个百分点)'] },
          net: { label: '净利润', notes: ['利润率 11%', '同比 (1 个百分点)'] },
        },
      },
    },
  });

  ssot.records.push({
    key: 'chipotle-q1-fy26',
    company: 'Chipotle',
    period: 'Q1 FY26',
    periodNote: 'Quarter ended Mar. 31, 2026',
    currency: '$',
    unit: 'B',
    decimals: 3,
    sourceImage: 'input/processed/chipotle-q1-fy26.png',
    roundingTolerance: 0.15,
    revenue: {
      total: 3.088242,
      notes: ['+7% Y/Y'],
      items: [
        {
          id: 'food_beverage',
          label: 'Food & Beverage',
          value: 3.07273,
          notes: ['+7% Y/Y'],
          children: [
            { id: 'in_restaurant', label: 'In-restaurant', value: 1.88665622, notes: ['+2% Y/Y'] },
            { id: 'digital_sales', label: 'Digital sales', value: 1.18607378, notes: ['+17% Y/Y'] },
          ],
        },
        { id: 'delivery', label: 'Delivery', value: 0.016, notes: ['+1% Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: {
        id: 'cost_of_revenue',
        label: 'Cost of revenue (not separately presented)',
        value: 0,
        notes: ['The source infographic begins at operating profit rather than showing a separate gross-profit stage.'],
      },
      operatingExpenses: {
        total: 2.691179,
        items: [
          { id: 'food_beverage_packaging', label: 'Food, beverage & packaging', value: 0.913346 },
          { id: 'labor', label: 'Labor', value: 0.805411 },
          { id: 'other_opex', label: 'Other opex', value: 0.480643 },
          { id: 'occupancy', label: 'Occupancy', value: 0.169881 },
          { id: 'ga', label: 'G&A', value: 0.20372 },
          { id: 'da', label: 'D&A', value: 0.096718 },
          { id: 'pre_opening', label: 'Pre-opening', value: 0.012 },
          { id: 'impairment', label: 'Impairment', value: 0.01 },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.102981 },
    },
    otherIncome: {
      total: 0.009,
      items: [{ id: 'other_income', label: 'Other', value: 0.009 }],
    },
    profit: {
      gross: {
        id: 'gross_profit',
        label: 'Gross profit (not separately presented)',
        value: 3.088242,
        notes: ['Source infographic has no separate gross-profit stage.'],
      },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 0.397063, notes: ['13% margin', '(4pp) Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 0.302824, notes: ['10% margin', '(3pp) Y/Y'] },
    },
    sources: [
      {
        name: 'Chipotle First Quarter 2026 Results',
        url: 'https://ir.chipotle.com/2026-04-29-CHIPOTLE-ANNOUNCES-FIRST-QUARTER-2026-RESULTS',
      },
    ],
    i18n: {
      zh: {
        period: '2026 财年第一季度',
        periodNote: '截至 2026 年 3 月 31 日的季度',
        revenue: {
          notes: ['同比 +7%'],
          items: [
            {
              id: 'food_beverage', label: '餐饮收入', notes: ['同比 +7%'],
              children: [
                { id: 'in_restaurant', label: '餐厅内销售', notes: ['同比 +2%'] },
                { id: 'digital_sales', label: '数字销售', notes: ['同比 +17%'] },
              ],
            },
            { id: 'delivery', label: '配送服务', notes: ['同比 +1%'] },
          ],
        },
        costs: {
          costOfRevenue: {
            label: '收入成本（未单列）',
            notes: ['来源信息图从营业利润口径开始，未单列毛利润阶段。'],
          },
          operatingExpenses: {
            items: [
              { id: 'food_beverage_packaging', label: '食品、饮料及包装' },
              { id: 'labor', label: '人工' },
              { id: 'other_opex', label: '其他运营费用' },
              { id: 'occupancy', label: '租赁及占用成本' },
              { id: 'ga', label: '一般及行政费用' },
              { id: 'da', label: '折旧与摊销' },
              { id: 'pre_opening', label: '开业前费用' },
              { id: 'impairment', label: '减值' },
            ],
          },
          tax: { label: '税费' },
        },
        otherIncome: { items: [{ id: 'other_income', label: '其他收入' }] },
        profit: {
          gross: { label: '营业利润', notes: ['来源信息图未单列毛利润阶段。'] },
          operating: { label: '营业利润', notes: ['利润率 13%', '同比 (4 个百分点)'] },
          net: { label: '净利润', notes: ['利润率 10%', '同比 (3 个百分点)'] },
        },
      },
    },
  });
})(window);
