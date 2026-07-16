/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/<dataset-key>.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'tripadvisor-q3-fy25',
    company: 'Tripadvisor',
    period: 'Q3 FY25',
    periodNote: 'Quarter ended Sep. 30, 2025',
    currency: '$',
    unit: 'M',
    decimals: 0,
    sourceImage: 'input/processed/tripadvisor-q3-fy25.png',
    roundingTolerance: 2,
    revenue: {
      total: 553,
      notes: ['+4% Y/Y'],
      items: [
        {
          id: 'tripadvisor',
          label: 'Tripadvisor',
          value: 235,
          notes: ['(8%) Y/Y', 'Branded hotels, display & platform, experiences & dining', '25% adjusted margin'],
        },
        {
          id: 'viator',
          label: 'Viator',
          value: 294,
          notes: ['+9% Y/Y', 'Tours, activities & attractions', '17% adjusted margin'],
        },
        {
          id: 'thefork',
          label: 'TheFork',
          value: 63,
          notes: ['+29% Y/Y', 'Restaurant reservations', '22% adjusted margin'],
        },
        {
          id: 'eliminations',
          label: 'Eliminations',
          value: -39,
          notes: ['Intersegment eliminations shown as ($39M) in the source chart.'],
        },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 41 },
      operatingExpenses: {
        total: 442,
        items: [
          { id: 'sm', label: 'S&M', value: 227, notes: ['41% of revenue', '+1pp Y/Y'] },
          { id: 'personnel', label: 'Personnel', value: 147, notes: ['27% of revenue', '(1pp) Y/Y'] },
          { id: 'technology', label: 'Technology', value: 26, notes: ['5% of revenue', '+0pp Y/Y'] },
          { id: 'da', label: 'D&A', value: 24, notes: ['4% of revenue', '+0pp Y/Y'] },
          { id: 'ga', label: 'G&A', value: 18, notes: ['3% of revenue', '(0pp) Y/Y'] },
        ],
      },
      tax: { id: 'tax_other', label: 'Tax & other', value: 17 },
    },
    otherIncome: { total: 0, items: [] },
    otherExpenses: { total: 0, items: [] },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 512, notes: ['93% margin', '+0pp Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 70, notes: ['13% margin', '(0pp) Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 53, notes: ['10% margin', '+2pp Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2025 财年第三季度',
        periodNote: '截至 2025 年 9 月 30 日的季度',
        revenue: {
          notes: ['同比 +4%'],
          items: [
            { id: 'tripadvisor', label: '猫途鹰', notes: ['同比 (8%)', '品牌酒店、展示平台、体验活动及餐饮', '调整后利润率 25%'] },
            { id: 'viator', label: 'Viator（体验业务）', notes: ['同比 +9%', '观光、活动及景点', '调整后利润率 17%'] },
            { id: 'thefork', label: 'TheFork（餐厅预订）', notes: ['同比 +29%', '餐厅预订', '调整后利润率 22%'] },
            { id: 'eliminations', label: '抵销', notes: ['来源图表显示分部间抵销为 ($39M)。'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: {
            items: [
              { id: 'sm', label: '销售与营销', notes: ['占收入 41%', '同比 +1 个百分点'] },
              { id: 'personnel', label: '人员', notes: ['占收入 27%', '同比 (1 个百分点)'] },
              { id: 'technology', label: '技术', notes: ['占收入 5%', '同比 +0 个百分点'] },
              { id: 'da', label: '折旧与摊销', notes: ['占收入 4%', '同比 +0 个百分点'] },
              { id: 'ga', label: '管理费用', notes: ['占收入 3%', '同比 +0 个百分点'] },
            ],
          },
          tax: { label: '税费及其他' },
        },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 93%', '同比 +0 个百分点'] },
          operating: { label: '营业利润', notes: ['利润率 13%', '同比 +0 个百分点'] },
          net: { label: '净利润', notes: ['利润率 10%', '同比 +2 个百分点'] },
        },
      },
    },
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

  ssot.records.push({
    key: 'tripadvisor-q1-fy26',
    company: 'Tripadvisor',
    period: 'Q1 FY26',
    periodNote: 'Quarter ended Mar. 31, 2026',
    currency: '$',
    unit: 'M',
    decimals: 0,
    sourceImage: 'input/processed/tripadvisor-q1-fy26.png',
    roundingTolerance: 5,
    revenue: {
      total: 382,
      notes: ['(4%) Y/Y'],
      items: [
        {
          id: 'experiences', label: 'Experiences', value: 168,
          notes: ['+8% Y/Y', 'Tours and activities marketplace', '(11%) adjusted margin'],
        },
        {
          id: 'hotels_other', label: 'Hotels & Other', value: 158,
          notes: ['(20%) Y/Y', 'Legacy media and advertising', '23% adjusted margin'],
        },
        {
          id: 'thefork', label: 'TheFork', value: 57,
          notes: ['+23% Y/Y', 'Restaurant reservations', '8% adjusted margin'],
        },
        {
          id: 'eliminations', label: 'Eliminations', value: -1,
          notes: ['Intersegment eliminations shown as ($1M) in the source chart.'],
        },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 33 },
      operatingExpenses: {
        total: 375,
        notes: ['The source displays a $375M total while its listed operating-expense lines sum to $376M; the $1M presentation gap is retained.'],
        items: [
          { id: 'sm', label: 'S&M', value: 178, notes: ['46% of revenue', '+3pp Y/Y'] },
          { id: 'personnel', label: 'Personnel', value: 130, notes: ['34% of revenue', '(2pp) Y/Y'] },
          { id: 'technology', label: 'Technology', value: 25, notes: ['7% of revenue', '+1pp Y/Y'] },
          { id: 'da', label: 'D&A', value: 25, notes: ['6% of revenue', '+1pp Y/Y'] },
          { id: 'ga', label: 'G&A', value: 15, notes: ['3% of revenue', '+0pp Y/Y'] },
          { id: 'restructuring', label: 'Restructuring', value: 3, notes: [] },
        ],
      },
      tax: { label: 'Tax', value: 0, notes: ['No tax line is shown in the source operating-income bridge.'] },
    },
    otherIncome: { total: 0, items: [] },
    otherExpenses: { total: 0, items: [] },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 350, notes: ['91% margin', '(2pp) Y/Y'] },
      operating: { id: 'operating_loss', label: 'Operating loss', value: -25, notes: ['(7%) margin', '(3pp) Y/Y'] },
      net: {
        id: 'operating_loss', label: 'Operating loss', value: -25,
        notes: ['No separate net income or net loss line is shown in the source chart.'],
      },
    },
    i18n: {
      zh: {
        period: '2026 财年第一季度',
        periodNote: '截至 2026 年 3 月 31 日的季度',
        revenue: {
          notes: ['同比 (4%)'],
          items: [
            { id: 'experiences', label: '体验业务', notes: ['同比 +8%', '观光与活动市场', '调整后利润率 (11%)'] },
            { id: 'hotels_other', label: '酒店及其他', notes: ['同比 (20%)', '传统媒体与广告', '调整后利润率 23%'] },
            { id: 'thefork', label: 'TheFork（餐厅预订）', notes: ['同比 +23%', '餐厅预订', '调整后利润率 8%'] },
            { id: 'eliminations', label: '抵销', notes: ['来源图表显示分部间抵销为 ($1M)。'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: {
            notes: ['来源图表显示总运营费用为 $375M，所列费用项合计为 $376M；保留该 $1M 展示差额。'],
            items: [
              { id: 'sm', label: '销售与营销', notes: ['占收入 46%', '同比 +3 个百分点'] },
              { id: 'personnel', label: '人员', notes: ['占收入 34%', '同比 (2 个百分点)'] },
              { id: 'technology', label: '技术', notes: ['占收入 7%', '同比 +1 个百分点'] },
              { id: 'da', label: '折旧与摊销', notes: ['占收入 6%', '同比 +1 个百分点'] },
              { id: 'ga', label: '管理费用', notes: ['占收入 3%', '同比 +0 个百分点'] },
              { id: 'restructuring', label: '重组', notes: [] },
            ],
          },
          tax: { label: '税费', notes: ['来源营业利润桥未显示税费项目。'] },
        },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 91%', '同比 (2 个百分点)'] },
          operating: { label: '营业亏损', notes: ['利润率 (7%)', '同比 (3 个百分点)'] },
          net: { label: '营业亏损', notes: ['来源图表未显示单独的净利润或净亏损项目。'] },
        },
      },
    },
  });
})(window);
