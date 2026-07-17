/* Pure income-statement SSOT. Sankey geometry stays in data/datasets/. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'procore-q3-fy25',
    company: 'Procore',
    period: 'Q3 FY25',
    periodNote: 'Ending Sep. 2025',
    currency: '$',
    unit: 'M',
    decimals: 0,
    sourceImage: 'input/processed/procore-q3-fy25.png',
    roundingTolerance: 1.1,
    revenue: {
      total: 339,
      notes: ['+15% Y/Y'],
      items: [
        { id: 'united_states', label: 'United States', value: 289, notes: ['+15% Y/Y'] },
        { id: 'rest_of_world', label: 'Rest of World', value: 50, notes: ['+14% Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 69 },
      operatingExpenses: {
        total: 285,
        items: [
          { id: 'sm', label: 'Sales & marketing', value: 144, notes: ['43% of revenue', '(5pp) Y/Y'] },
          { id: 'rnd', label: 'Research & development', value: 88, notes: ['26% of revenue', '(1pp) Y/Y'] },
          { id: 'ga', label: 'General & administrative', value: 53, notes: ['16% of revenue', '(3pp) Y/Y'] },
        ],
      },
      tax: { label: 'Tax', value: 0, notes: ['No separate tax line is shown in the source chart.'] },
    },
    otherIncome: { total: 0, items: [] },
    otherExpenses: { total: 0, items: [] },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 270, notes: ['80% margin', '(2pp) Y/Y'] },
      operating: { id: 'operating_loss', label: 'Operating loss', value: -15, notes: ['(4%) margin', '+8pp Y/Y'] },
      net: {
        id: 'operating_loss',
        label: 'Operating loss',
        value: -15,
        notes: ['No separate net income or net loss line is shown in the source chart.'],
      },
    },
    i18n: {
      zh: {
        period: '2025 财年第三季度',
        periodNote: '截至 2025 年 9 月',
        revenue: {
          notes: ['同比 +15%'],
          items: [
            { id: 'united_states', label: '美国', notes: ['同比 +15%'] },
            { id: 'rest_of_world', label: '世界其他地区', notes: ['同比 +14%'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: {
            items: [
              { id: 'sm', label: '销售与营销', notes: ['占收入 43%', '同比 (5 个百分点)'] },
              { id: 'rnd', label: '研发', notes: ['占收入 26%', '同比 (1 个百分点)'] },
              { id: 'ga', label: '一般及行政', notes: ['占收入 16%', '同比 (3 个百分点)'] },
            ],
          },
          tax: { label: '税费', notes: ['来源图未显示单独的税费项目。'] },
        },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 80%', '同比 (2 个百分点)'] },
          operating: { label: '营业亏损', notes: ['利润率 (4%)', '同比 +8 个百分点'] },
          net: { label: '营业亏损', notes: ['来源图未单独显示净利润或净亏损项目。'] },
        },
      },
    },
  });

  ssot.records.push({
    key: 'procore-q4-fy25',
    company: 'Procore',
    period: 'Q4 FY25',
    periodNote: 'Ending Dec. 2025',
    currency: '$',
    unit: 'M',
    decimals: 0,
    sourceImage: 'input/processed/procore-q4-fy25.png',
    roundingTolerance: 1.1,
    revenue: {
      total: 349,
      notes: ['+16% Y/Y'],
      items: [
        { id: 'united_states', label: 'United States', value: 298, notes: ['+16% Y/Y'] },
        { id: 'rest_of_world', label: 'Rest of World', value: 51, notes: ['+15% Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 69 },
      operatingExpenses: {
        total: 322,
        notes: ['Visible operating-expense line items sum to $323M because the source chart rounds values.'],
        items: [
          { id: 'sm', label: 'Sales & marketing', value: 156, notes: ['45% of revenue', '(9pp) Y/Y'] },
          { id: 'rnd', label: 'Research & development', value: 98, notes: ['28% of revenue', '(2pp) Y/Y'] },
          { id: 'ga', label: 'General & administrative', value: 69, notes: ['20% of revenue', '(0pp) Y/Y'] },
        ],
      },
      tax: { label: 'Tax', value: 0, notes: ['No separate tax line is shown in the source chart.'] },
    },
    otherIncome: { total: 0, items: [] },
    otherExpenses: { total: 0, items: [] },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 280, notes: ['80% margin', '(1pp) Y/Y'] },
      operating: { id: 'operating_loss', label: 'Operating loss', value: -43, notes: ['(12%) margin', '+10pp Y/Y'] },
      net: {
        id: 'operating_loss',
        label: 'Operating loss',
        value: -43,
        notes: ['No separate net income or net loss line is shown in the source chart.'],
      },
    },
    i18n: {
      zh: {
        period: '2025 财年第四季度',
        periodNote: '截至 2025 年 12 月',
        revenue: {
          notes: ['同比 +16%'],
          items: [
            { id: 'united_states', label: '美国', notes: ['同比 +16%'] },
            { id: 'rest_of_world', label: '世界其他地区', notes: ['同比 +15%'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: {
            notes: ['可见营业费用明细合计为 $323M，差异来自来源图数值四舍五入。'],
            items: [
              { id: 'sm', label: '销售与营销', notes: ['占收入 45%', '同比 (9 个百分点)'] },
              { id: 'rnd', label: '研发', notes: ['占收入 28%', '同比 (2 个百分点)'] },
              { id: 'ga', label: '一般及行政', notes: ['占收入 20%', '同比 (0 个百分点)'] },
            ],
          },
          tax: { label: '税费', notes: ['来源图未显示单独的税费项目。'] },
        },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 80%', '同比 (1 个百分点)'] },
          operating: { label: '营业亏损', notes: ['利润率 (12%)', '同比 +10 个百分点'] },
          net: { label: '营业亏损', notes: ['来源图未单独显示净利润或净亏损项目。'] },
        },
      },
    },
  });

  ssot.records.push({
    key: 'procore-q1-fy26',
    company: 'Procore',
    period: 'Q1 FY26',
    periodNote: 'Ending Mar. 2026',
    currency: '$',
    unit: 'M',
    decimals: 0,
    sourceImage: 'input/processed/procore-q1-fy26.png',
    roundingTolerance: 1.1,
    revenue: {
      total: 359,
      notes: ['+16% Y/Y'],
      items: [
        { id: 'united_states', label: 'United States', value: 305, notes: ['+15% Y/Y'] },
        { id: 'rest_of_world', label: 'Rest of World', value: 54, notes: ['+17% Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 71 },
      operatingExpenses: {
        total: 303,
        notes: ['Visible operating-expense line items sum to $304M because the source chart rounds values.'],
        items: [
          { id: 'sm', label: 'Sales & marketing', value: 149, notes: ['42% of revenue', '(3pp) Y/Y'] },
          { id: 'rnd', label: 'Research & development', value: 86, notes: ['24% of revenue', '(4pp) Y/Y'] },
          { id: 'ga', label: 'General & administrative', value: 69, notes: ['19% of revenue', '+1pp Y/Y'] },
        ],
      },
      tax: { label: 'Tax', value: 0, notes: ['No separate tax line is shown in the source chart.'] },
    },
    otherIncome: { total: 0, items: [] },
    otherExpenses: { total: 0, items: [] },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 288, notes: ['80% margin', '+1pp Y/Y'] },
      operating: { id: 'operating_loss', label: 'Operating loss', value: -16, notes: ['(4%) margin', '+8pp Y/Y'] },
      net: {
        id: 'operating_loss',
        label: 'Operating loss',
        value: -16,
        notes: ['No separate net income or net loss line is shown in the source chart.'],
      },
    },
    i18n: {
      zh: {
        period: '2026 财年第一季度',
        periodNote: '截至 2026 年 3 月',
        revenue: {
          notes: ['同比 +16%'],
          items: [
            { id: 'united_states', label: '美国', notes: ['同比 +15%'] },
            { id: 'rest_of_world', label: '世界其他地区', notes: ['同比 +17%'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: {
            notes: ['可见营业费用明细合计为 $304M，差异来自来源图数值四舍五入。'],
            items: [
              { id: 'sm', label: '销售与营销', notes: ['占收入 42%', '同比 (3 个百分点)'] },
              { id: 'rnd', label: '研发', notes: ['占收入 24%', '同比 (4 个百分点)'] },
              { id: 'ga', label: '一般及行政', notes: ['占收入 19%', '同比 +1 个百分点'] },
            ],
          },
          tax: { label: '税费', notes: ['来源图未显示单独的税费项目。'] },
        },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 80%', '同比 +1 个百分点'] },
          operating: { label: '营业亏损', notes: ['利润率 (4%)', '同比 +8 个百分点'] },
          net: { label: '营业亏损', notes: ['来源图未单独显示净利润或净亏损项目。'] },
        },
      },
    },
  });
})(window);
