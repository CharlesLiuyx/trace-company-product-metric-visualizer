/* Pure income-statement SSOT records. Sankey geometry stays in data/datasets/. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'celsius-q1-fy26',
    company: 'Celsius',
    period: 'Q1 FY26',
    periodNote: 'Ending Mar. 31, 2026',
    currency: '$',
    unit: 'M',
    decimals: 0,
    sourceImage: 'input/processed/celsius-q1-fy26.png',
    roundingTolerance: 1,
    sourceUrl: 'https://www.sec.gov/Archives/edgar/data/1341766/000134176626000039/celh-20260331.htm',
    revenue: {
      total: 782.615,
      notes: ['+138% Y/Y'],
      items: [
        {
          id: 'revenue_by_customer',
          label: 'Revenue by customer',
          value: 782.615,
          children: [
            { id: 'pepsico', label: 'PepsiCo', value: 461.7, notes: ['+143% Y/Y'] },
            { id: 'amazon', label: 'Amazon', value: 65.7, notes: ['+65% Y/Y'] },
            { id: 'all_others', label: 'All Others', value: 255.215, notes: ['+156% Y/Y'] },
          ],
        },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 404.548 },
      operatingExpenses: {
        total: 239.074,
        items: [
          { id: 'sga', label: 'SG&A expenses', value: 234.647, notes: ['30% of revenue', '+8pp Y/Y'] },
          { id: 'other_opex', label: 'Distributor termination fees', value: 4.427, notes: ['1% of revenue', '+1pp Y/Y'] },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 27.437 },
    },
    otherExpenses: {
      total: 1.457,
      items: [{ id: 'other_nonoperating', label: 'Other', value: 1.457 }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 378.067, notes: ['48% margin', '(4pp) Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 138.993, notes: ['18% margin', '+2pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 110.099, notes: ['14% margin', '+1pp Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2026 财年第一季度',
        periodNote: '截至 2026 年 3 月 31 日',
        revenue: {
          notes: ['同比 +138%'],
          items: [
            {
              id: 'revenue_by_customer',
              label: '按客户划分的收入',
              children: [
                { id: 'pepsico', label: '百事公司', notes: ['同比 +143%'] },
                { id: 'amazon', label: '亚马逊', notes: ['同比 +65%'] },
                { id: 'all_others', label: '其他所有客户', notes: ['同比 +156%'] },
              ],
            },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: {
            items: [
              { id: 'sga', label: '销售、一般及行政费用', notes: ['占收入 30%', '同比 +8 个百分点'] },
              { id: 'other_opex', label: '其他', notes: ['占收入 1%', '同比 +1 个百分点'] },
            ],
          },
          tax: { label: '税费' },
        },
        otherExpenses: { items: [{ id: 'other_nonoperating', label: '其他' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 48%', '同比 (4 个百分点)'] },
          operating: { label: '营业利润', notes: ['利润率 18%', '同比 +2 个百分点'] },
          net: { label: '净利润', notes: ['利润率 14%', '同比 +1 个百分点'] },
        },
      },
    },
  });

  ssot.records.push({
    key: 'celsius-q3-fy25',
    company: 'Celsius',
    period: 'Q3 FY25',
    periodNote: 'Quarter ended Sep. 30, 2025',
    currency: '$',
    unit: 'M',
    decimals: 0,
    sourceImage: 'input/processed/celsius-q3-fy25.png',
    roundingTolerance: 1.1,
    sourceUrl: 'https://www.sec.gov/Archives/edgar/data/1341766/000134176625000144/celh-20250930.htm',
    revenue: {
      total: 725.106,
      notes: ['+173% Y/Y'],
      items: [
        {
          id: 'revenue_by_customer',
          label: 'Revenue by customer',
          value: 725.106,
          children: [
            { id: 'pepsico', label: 'PepsiCo', value: 257, notes: ['+106% Y/Y'] },
            { id: 'costco', label: 'Costco', value: 80, notes: ['+103% Y/Y'] },
            { id: 'amazon', label: 'Amazon', value: 40, notes: ['+47% Y/Y'] },
            { id: 'all_others', label: 'All Others', value: 348, notes: ['+369% Y/Y'] },
          ],
        },
      ],
      breakdowns: [
        {
          id: 'geography',
          label: 'Revenue by geography',
          total: 725.106,
          items: [
            { id: 'north_america', label: 'North America', value: 701.990, notes: ['+184% Y/Y'] },
            { id: 'international', label: 'International', value: 23.116, notes: ['+24% Y/Y'] },
          ],
        },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 352.827 },
      operatingExpenses: {
        total: 452.278,
        items: [
          { id: 'distributor_termination_fees', label: 'Distributor termination fees', value: 246.707, notes: ['34% of revenue', '+34pp Y/Y'] },
          { id: 'sga', label: 'SG&A expenses', value: 205.571, notes: ['28% of revenue', '+5pp Y/Y'] },
        ],
      },
      tax: { label: 'Tax', value: 0, notes: ['No separate tax line is shown in the source chart.'] },
    },
    otherIncome: {
      total: 0,
      items: [],
    },
    otherExpenses: {
      total: 0,
      items: [],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 372.279, notes: ['51% margin', '+5pp Y/Y'] },
      operating: { id: 'operating_loss', label: 'Operating loss', value: -79.999, notes: ['(11%) margin', '(10pp) Y/Y'] },
      net: {
        id: 'operating_loss',
        label: 'Operating loss',
        value: -79.999,
        notes: ['No separate net income or net loss line is shown in the source chart.'],
      },
    },
    i18n: {
      zh: {
        period: '2025 财年第三季度',
        periodNote: '截至 2025 年 9 月 30 日的季度',
        revenue: {
          notes: ['同比 +173%'],
          items: [
            {
              id: 'revenue_by_customer',
              label: '按客户划分的收入',
              children: [
                { id: 'pepsico', label: '百事公司', notes: ['同比 +106%'] },
                { id: 'costco', label: '开市客', notes: ['同比 +103%'] },
                { id: 'amazon', label: '亚马逊', notes: ['同比 +47%'] },
                { id: 'all_others', label: '其他所有客户', notes: ['同比 +369%'] },
              ],
            },
          ],
          breakdowns: [
            {
              id: 'geography',
              label: '按地区划分的收入',
              items: [
                { id: 'north_america', label: '北美', notes: ['同比 +184%'] },
                { id: 'international', label: '国际', notes: ['同比 +24%'] },
              ],
            },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: {
            items: [
              { id: 'distributor_termination_fees', label: '经销商终止费', notes: ['占收入 34%', '同比 +34 个百分点'] },
              { id: 'sga', label: '销售、一般及行政费用', notes: ['占收入 28%', '同比 +5 个百分点'] },
            ],
          },
          tax: { label: '税费', notes: ['来源图未显示单独的税费项目。'] },
        },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 51%', '同比 +5 个百分点'] },
          operating: { label: '营业亏损', notes: ['利润率 (11%)', '同比 (10 个百分点)'] },
          net: { label: '营业亏损', notes: ['来源图未单独显示净利润或净亏损项目。'] },
        },
      },
    },
  });
})(window);
