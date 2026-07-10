/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/<dataset-key>.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'tripadvisor-q4-fy25',
    company: 'Tripadvisor',
    period: 'Q4 FY25',
    periodNote: 'Quarter ended Dec. 31, 2025',
    currency: '$',
    unit: 'M',
    decimals: 0,
    sourceImage: 'input/processed/tripadvisor-q4-fy25.png',
    roundingTolerance: 5,
    revenue: {
      total: 411,
      notes: ['+0% Y/Y'],
      items: [
        {
          id: 'hotels_other', label: 'Hotels & Other', value: 151,
          notes: ['(15%) Y/Y', 'Branded hotels, display & platform, experiences & dining', '19% adjusted margin'],
        },
        {
          id: 'experiences', label: 'Experiences', value: 204,
          notes: ['+10% Y/Y', 'Tours, activities & attractions', '7% adjusted margin'],
        },
        {
          id: 'thefork', label: 'TheFork', value: 57,
          notes: ['+19% Y/Y', 'Restaurant reservations', '2% adjusted margin'],
        },
        {
          id: 'eliminations', label: 'Eliminations', value: -1,
          notes: ['Intersegment eliminations shown as ($1M) in the source chart.'],
        },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 35 },
      operatingExpenses: {
        total: 411,
        notes: ['The source displays a $411M total while its listed operating-expense lines sum to $406M; the $5M presentation gap is retained.'],
        items: [
          { id: 'sm', label: 'S&M', value: 175, notes: ['43% of revenue', '+6pp Y/Y'] },
          { id: 'personnel', label: 'Personnel', value: 133, notes: ['32% of revenue', '(3pp) Y/Y'] },
          { id: 'restructuring', label: 'Restructuring', value: 33, notes: ['8% of revenue', '+3pp Y/Y'] },
          { id: 'technology', label: 'Technology', value: 25, notes: ['6% of revenue', '+0pp Y/Y'] },
          { id: 'ga', label: 'G&A', value: 20, notes: ['5% of revenue', '+0pp Y/Y'] },
          { id: 'da', label: 'D&A', value: 20, notes: ['5% of revenue', '+0pp Y/Y'] },
        ],
      },
      tax: { label: 'Tax', value: 0, notes: ['No tax line is shown in the source operating-income bridge.'] },
    },
    otherIncome: { total: 0, items: [] },
    otherExpenses: { total: 0, items: [] },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 376, notes: ['91% margin', '(2pp) Y/Y'] },
      operating: { id: 'operating_loss', label: 'Operating loss', value: -35, notes: ['(9%) margin', '(9pp) Y/Y'] },
      net: {
        id: 'operating_loss', label: 'Operating loss', value: -35,
        notes: ['No separate net income or net loss line is shown in the source chart.'],
      },
    },
    i18n: {
      zh: {
        period: '2025 财年第四季度',
        periodNote: '截至 2025 年 12 月 31 日的季度',
        revenue: {
          notes: ['同比 +0%'],
          items: [
            { id: 'hotels_other', label: '酒店及其他', notes: ['同比 (15%)', '品牌酒店、展示及平台、体验活动与餐饮', '调整后利润率 19%'] },
            { id: 'experiences', label: '体验业务', notes: ['同比 +10%', '观光、活动及景点', '调整后利润率 7%'] },
            { id: 'thefork', label: 'TheFork（餐厅预订）', notes: ['同比 +19%', '餐厅预订', '调整后利润率 2%'] },
            { id: 'eliminations', label: '抵销', notes: ['来源图表显示分部间抵销为 ($1M)。'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: {
            notes: ['来源图表显示总运营费用为 $411M，所列费用项合计为 $406M；保留该 $5M 展示差额。'],
            items: [
              { id: 'sm', label: '销售与营销', notes: ['占收入 43%', '同比 +6 个百分点'] },
              { id: 'personnel', label: '人员', notes: ['占收入 32%', '同比 (3 个百分点)'] },
              { id: 'restructuring', label: '重组', notes: ['占收入 8%', '同比 +3 个百分点'] },
              { id: 'technology', label: '技术', notes: ['占收入 6%', '同比 +0 个百分点'] },
              { id: 'ga', label: '管理费用', notes: ['占收入 5%', '同比 +0 个百分点'] },
              { id: 'da', label: '折旧与摊销', notes: ['占收入 5%', '同比 +0 个百分点'] },
            ],
          },
          tax: { label: '税费', notes: ['来源营业利润桥未显示税费项目。'] },
        },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 91%', '同比 (2 个百分点)'] },
          operating: { label: '营业亏损', notes: ['利润率 (9%)', '同比 (9 个百分点)'] },
          net: { label: '营业亏损', notes: ['来源图表未显示单独的净利润或净亏损项目。'] },
        },
      },
    },
  });
})(window);
