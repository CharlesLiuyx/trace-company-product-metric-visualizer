/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/<dataset-key>.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'vail-resorts-q3-fy26',
    company: 'Vail Resorts',
    period: 'Q3 FY26',
    periodNote: 'Ending Apr. 2026',
    currency: '$',
    unit: 'M',
    decimals: 0,
    sourceImage: 'input/processed/vail-resorts-q3-fy26.png',
    roundingTolerance: 1,
    revenue: {
      total: 1205,
      notes: ['(7%) Y/Y'],
      items: [
        {
          id: 'mountain',
          label: 'Mountain',
          value: 1130,
          notes: ['(7%) Y/Y'],
          children: [
            { id: 'lift', label: 'Lift', value: 729, notes: ['(5%) Y/Y'] },
            { id: 'ski_school', label: 'Ski school', value: 142, notes: ['(12%) Y/Y'] },
            { id: 'dining', label: 'Dining', value: 99, notes: ['(11%) Y/Y'] },
            { id: 'retail_rental', label: 'Retail/rental', value: 104, notes: ['(8%) Y/Y'] },
            { id: 'other_revenue', label: 'Other', value: 55, notes: ['(4%) Y/Y'] },
          ],
        },
        { id: 'lodging', label: 'Lodging', value: 75, notes: ['(9%) Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: {
        id: 'cost_of_revenue',
        label: 'Cost of revenue',
        value: 0,
        notes: ['The source chart bridges revenue directly to operating profit and operating expenses.'],
      },
      operatingExpenses: {
        total: 711,
        notes: ['Source chart label: Operating expenses.'],
        items: [
          { id: 'mountain_lodging', label: 'Mountain & Lodging', value: 460 },
          { id: 'ga', label: 'G&A', value: 102 },
          { id: 'da', label: 'D&A', value: 77 },
          { id: 'retail_dining', label: 'Retail & dining', value: 57 },
          { id: 'retail_dining_other', label: 'Retail & Dining', value: 15 },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 106 },
    },
    otherIncome: { total: 0, items: [] },
    otherExpenses: {
      total: 48,
      items: [
        { id: 'other_expense', label: 'Other', value: 48 },
      ],
    },
    profit: {
      gross: {
        id: 'revenue',
        label: 'Revenue',
        value: 1205,
        notes: ['Synthetic SSOT subtotal because the source chart does not show a gross-profit layer.'],
      },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 494, notes: ['41% margin', '(4pp) Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 340, notes: ['28% margin', '(4pp) Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2026 财年第三季度',
        periodNote: '截至 2026 年 4 月',
        revenue: {
          notes: ['同比 -7%'],
          items: [
            {
              id: 'mountain',
              label: '山地业务',
              notes: ['同比 -7%'],
              children: [
                { id: 'lift', label: '缆车', notes: ['同比 -5%'] },
                { id: 'ski_school', label: '滑雪学校', notes: ['同比 -12%'] },
                { id: 'dining', label: '餐饮', notes: ['同比 -11%'] },
                { id: 'retail_rental', label: '零售及租赁', notes: ['同比 -8%'] },
                { id: 'other_revenue', label: '其他', notes: ['同比 -4%'] },
              ],
            },
            { id: 'lodging', label: '住宿', notes: ['同比 -9%'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本', notes: ['来源图直接将收入桥接至营业利润和运营费用，未显示毛利润层级。'] },
          operatingExpenses: {
            notes: ['来源图标签为 Operating expenses。'],
            items: [
              { id: 'mountain_lodging', label: '山地及住宿' },
              { id: 'ga', label: '管理费用' },
              { id: 'da', label: '折旧与摊销' },
              { id: 'retail_dining', label: '零售及餐饮' },
              { id: 'retail_dining_other', label: '零售及餐饮' },
            ],
          },
          tax: { label: '税费' },
        },
        otherExpenses: { items: [{ id: 'other_expense', label: '其他' }] },
        profit: {
          gross: { label: '收入', notes: ['来源图未显示毛利润层级，因此 SSOT 将收入用作合成小计。'] },
          operating: { label: '营业利润', notes: ['利润率 41%', '同比 -4 个百分点'] },
          net: { label: '净利润', notes: ['利润率 28%', '同比 -4 个百分点'] },
        },
      },
    },
  });
})(window);
