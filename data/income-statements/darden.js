/* Pure income-statement SSOT records. Sankey geometry stays in data/datasets/. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'darden-q4-fy26',
    company: 'Darden Restaurants',
    period: 'Q4 FY26',
    periodNote: 'Quarter ended May 31, 2026',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/darden-q4-fy26.png',
    roundingTolerance: 0.15,
    revenue: {
      total: 3.7188,
      notes: ['+14% Y/Y'],
      items: [
        { id: 'olive_garden', label: 'Olive Garden', value: 1.538, notes: ['+11% Y/Y', '24% segment margin'] },
        { id: 'longhorn', label: 'LongHorn Steakhouse', value: 1.0165, notes: ['+22% Y/Y', '21% segment margin'] },
        { id: 'fine_dining', label: 'Fine Dining', value: 0.371, notes: ['+11% Y/Y', '19% segment margin'] },
        { id: 'other_business', label: 'Other Business', value: 0.7933, notes: ['+10% Y/Y', '18% segment margin'] },
      ],
    },
    costs: {
      costOfRevenue: {
        id: 'cost_of_revenue',
        label: 'Cost of revenue (not separately presented)',
        value: 0,
        notes: ['The source infographic moves directly from revenue to operating profit and operating expenses.'],
      },
      operatingExpenses: {
        total: 3.202,
        items: [
          { id: 'restaurant_labor', label: 'Restaurant Labor', value: 1.1474 },
          { id: 'food_beverage', label: 'Food & Beverage', value: 1.1193 },
          { id: 'restaurant_expenses', label: 'Restaurant expenses', value: 0.586 },
          { id: 'da', label: 'D&A', value: 0.1463 },
          { id: 'ga', label: 'G&A', value: 0.139 },
          { id: 'other', label: 'Other', value: 0.064, notes: ['Marketing expenses, pre-opening costs, and impairments and disposal of assets, net.'] },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.0578 },
    },
    otherIncome: { total: 0, items: [] },
    otherExpenses: {
      total: 0.0512,
      items: [{ id: 'interest', label: 'Interest', value: 0.0512 }],
    },
    profit: {
      gross: {
        id: 'gross_profit',
        label: 'Gross profit (not separately presented)',
        value: 3.7188,
        notes: ['Bookkeeping value for SSOT parity; the source infographic has no gross-profit stage.'],
      },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 0.5168, notes: ['14% margin', '+2pp Y/Y'] },
      net: {
        id: 'net_profit',
        label: 'Net profit',
        value: 0.4078,
        notes: ['11% margin', '+2pp Y/Y', 'Earnings from continuing operations; the infographic does not depict the $2.9M discontinued-operations loss.'],
      },
    },
    sources: [
      {
        name: 'Darden Restaurants Fiscal 2026 Fourth Quarter and Full Year Results',
        url: 'https://www.sec.gov/Archives/edgar/data/940944/000094094426000016/exhibit991-q4fy26.htm',
      },
    ],
    i18n: {
      zh: {
        period: '2026 财年第四季度',
        periodNote: '截至 2026 年 5 月 31 日的季度',
        revenue: {
          notes: ['同比 +14%'],
          items: [
            { id: 'olive_garden', label: '橄榄花园', notes: ['同比 +11%', '分部利润率 24%'] },
            { id: 'longhorn', label: '长角牛排馆', notes: ['同比 +22%', '分部利润率 21%'] },
            { id: 'fine_dining', label: '高端餐饮', notes: ['同比 +11%', '分部利润率 19%'] },
            { id: 'other_business', label: '其他业务', notes: ['同比 +10%', '分部利润率 18%'] },
          ],
        },
        costs: {
          costOfRevenue: {
            label: '收入成本（未单列）',
            notes: ['来源信息图从收入直接拆分为营业利润和运营费用。'],
          },
          operatingExpenses: {
            items: [
              { id: 'restaurant_labor', label: '餐厅人工' },
              { id: 'food_beverage', label: '食品和饮料' },
              { id: 'restaurant_expenses', label: '餐厅费用' },
              { id: 'da', label: '折旧与摊销' },
              { id: 'ga', label: '一般及行政费用' },
              { id: 'other', label: '其他', notes: ['包括营销费用、开业前费用以及资产减值和处置净额。'] },
            ],
          },
          tax: { label: '税费' },
        },
        otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
        profit: {
          gross: { label: '毛利润（未单列）', notes: ['用于 SSOT 对齐的账面值；来源信息图未展示毛利润阶段。'] },
          operating: { label: '营业利润', notes: ['利润率 14%', '同比 +2 个百分点'] },
          net: { label: '净利润', notes: ['利润率 11%', '同比 +2 个百分点', '持续经营业务收益；来源信息图未展示 290 万美元的终止经营业务亏损。'] },
        },
      },
    },
  });
})(window);
