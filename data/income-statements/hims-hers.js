/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/hims-hers-q4-fy25.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push(
    {
      key: 'hims-hers-q3-fy25',
      company: 'Hims & Hers',
      period: 'Q3 FY25',
      periodNote: 'Quarter ended Sep. 30, 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/hims-hers-q3-fy25.png',
      roundingTolerance: 1.1,
      notes: [
        'The source infographic rounds operating-expense line items to whole millions; the visible items sum to $431M versus the displayed $430M total.',
      ],
      revenue: {
        total: 599,
        notes: ['+49% Y/Y'],
        items: [
          { id: 'online_revenue', label: 'Online revenue', value: 589, notes: ['+50% Y/Y'] },
          { id: 'wholesale_revenue', label: 'Wholesale revenue', value: 10, notes: ['+10% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 157 },
        operatingExpenses: {
          total: 430,
          notes: ['Visible line items sum to $431M because the source chart rounds each item to whole millions.'],
          items: [
            { id: 'marketing', label: 'Marketing', value: 232, notes: ['39% of revenue', '(7pp) Y/Y'] },
            { id: 'general_admin', label: 'General & admin', value: 81, notes: ['13% of revenue', '+2pp Y/Y'] },
            { id: 'operations_support', label: 'Operations & support', value: 77, notes: ['13% of revenue', '+1pp Y/Y'] },
            { id: 'tech_development', label: 'Tech & development', value: 41, notes: ['7% of revenue', '+2pp Y/Y'] },
          ],
        },
        tax: {
          label: 'Tax not separately shown',
          value: 0,
          notes: ['No separate tax flow appears in the source infographic.'],
        },
      },
      otherIncome: {
        total: 4,
        items: [{ id: 'other_income', label: 'Other', value: 4 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 442, notes: ['74% margin', '(5pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 12, notes: ['2% margin', '(4pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 16, notes: ['3% margin', '(16pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月 30 日的季度',
          notes: ['来源信息图对营业费用明细做了取整；可见明细合计 $431M，而图示总额为 $430M。'],
          revenue: {
            notes: ['同比 +49%'],
            items: [
              { id: 'online_revenue', label: '线上收入', notes: ['同比 +50%'] },
              { id: 'wholesale_revenue', label: '批发收入', notes: ['同比 +10%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['来源图将各明细取整，因此可见明细合计为 $431M。'],
              items: [
                { id: 'marketing', label: '营销', notes: ['占收入 39%', '同比 (7 个百分点)'] },
                { id: 'general_admin', label: '一般及行政', notes: ['占收入 13%', '同比 +2 个百分点'] },
                { id: 'operations_support', label: '运营与支持', notes: ['占收入 13%', '同比 +1 个百分点'] },
                { id: 'tech_development', label: '技术与开发', notes: ['占收入 7%', '同比 +2 个百分点'] },
              ],
            },
            tax: { label: '未单列税费', notes: ['来源信息图未显示单独的税费流。'] },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 74%', '同比 (5 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 2%', '同比 (4 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 3%', '同比 (16 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'hims-hers-q4-fy25',
      company: 'Hims & Hers',
      period: 'Q4 FY25',
      periodNote: 'Quarter ended Dec. 31, 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/hims-hers-q4-fy25.png',
      roundingTolerance: 1.1,
      notes: [
        'The source infographic rounds revenue, gross profit, cost of revenue, and net income to whole millions; its displayed income-statement path differs by up to $1M after rounding.',
      ],
      revenue: {
        total: 618,
        notes: ['+28% Y/Y'],
        items: [
          { id: 'online_revenue', label: 'Online revenue', value: 609, notes: ['+29% Y/Y'] },
          { id: 'wholesale_revenue', label: 'Wholesale revenue', value: 9, notes: ['(16%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 173 },
        operatingExpenses: {
          total: 435,
          items: [
            { id: 'marketing', label: 'Marketing', value: 238, notes: ['39% of revenue', '(7pp) Y/Y'] },
            { id: 'operations_support', label: 'Operations & support', value: 80, notes: ['13% of revenue', '+1pp Y/Y'] },
            { id: 'general_admin', label: 'General & admin', value: 76, notes: ['12% of revenue', '+2pp Y/Y'] },
            { id: 'tech_development', label: 'Tech & development', value: 41, notes: ['7% of revenue', '+2pp Y/Y'] },
          ],
        },
        tax: {
          label: 'Tax not separately shown',
          value: 0,
          notes: ['No separate tax flow appears in the source infographic.'],
        },
      },
      otherIncome: {
        total: 11,
        items: [{ id: 'other_income', label: 'Other', value: 11 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 444, notes: ['72% margin', '(5pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 9, notes: ['1% margin', '(2pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 21, notes: ['3% margin', '(2pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月 31 日的季度',
          notes: ['来源信息图将收入、毛利润、收入成本和净利润均取整；取整后损益路径最多相差 $1M。'],
          revenue: {
            notes: ['同比 +28%'],
            items: [
              { id: 'online_revenue', label: '线上收入', notes: ['同比 +29%'] },
              { id: 'wholesale_revenue', label: '批发收入', notes: ['同比 (16%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'marketing', label: '营销', notes: ['占收入 39%', '同比 (7 个百分点)'] },
                { id: 'operations_support', label: '运营与支持', notes: ['占收入 13%', '同比 +1 个百分点'] },
                { id: 'general_admin', label: '一般及行政', notes: ['占收入 12%', '同比 +2 个百分点'] },
                { id: 'tech_development', label: '技术与开发', notes: ['占收入 7%', '同比 +2 个百分点'] },
              ],
            },
            tax: { label: '未单列税费', notes: ['来源信息图未显示单独的税费流。'] },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 72%', '同比 (5 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 1%', '同比 (2 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 3%', '同比 (2 个百分点)'] },
          },
        },
      },
    },
    {
    key: 'hims-hers-q1-fy26',
    company: 'Hims & Hers',
    period: 'Q1 FY26',
    periodNote: 'Quarter ended Mar. 31, 2026',
    currency: '$',
    unit: 'M',
    decimals: 0,
    sourceImage: 'input/processed/hims-hers-q1-fy26.png',
    roundingTolerance: 1.1,
    revenue: {
      total: 608,
      notes: ['+4% Y/Y'],
      items: [
        { id: 'united_states', label: 'United States', value: 530, notes: ['(8)% Y/Y'] },
        { id: 'rest_of_world', label: 'Rest of World', value: 78, notes: ['+969% Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 211 },
      operatingExpenses: {
        total: 475,
        notes: ['Visible operating-expense line items sum to $476M because the source chart rounds values.'],
        items: [
          { id: 'marketing', label: 'Marketing', value: 222, notes: ['37% of revenue', '(3pp) Y/Y'] },
          { id: 'general_admin', label: 'General & admin', value: 110, notes: ['18% of revenue', '+10pp Y/Y'] },
          { id: 'operations_support', label: 'Operations & support', value: 97, notes: ['16% of revenue', '+5pp Y/Y'] },
          { id: 'tech_development', label: 'Tech & development', value: 47, notes: ['8% of revenue', '+3pp Y/Y'] },
        ],
      },
      tax: { label: 'Tax', value: 0, notes: ['No separate tax line is shown in the source chart.'] },
    },
    otherIncome: { total: 0, items: [] },
    otherExpenses: { total: 0, items: [] },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 397, notes: ['65% margin', '(8pp) Y/Y'] },
      operating: { id: 'operating_loss', label: 'Operating loss', value: -78, notes: ['(13%) margin', '(23pp) Y/Y'] },
      net: { id: 'operating_loss', label: 'Operating loss', value: -78, notes: ['No separate net loss line is shown in the source chart.'] },
    },
    i18n: {
      zh: {
        period: '2026 财年第一季度',
        periodNote: '截至 2026 年 3 月 31 日的季度',
        revenue: {
          notes: ['同比 +4%'],
          items: [
            { id: 'united_states', label: '美国', notes: ['同比 (8%)'] },
            { id: 'rest_of_world', label: '世界其他地区', notes: ['同比 +969%'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: {
            notes: ['可见营业费用明细合计为 $476M，差异来自来源图数值四舍五入。'],
            items: [
              { id: 'marketing', label: '营销费用', notes: ['占收入 37%', '同比 (3 个百分点)'] },
              { id: 'general_admin', label: '一般及行政费用', notes: ['占收入 18%', '同比 +10 个百分点'] },
              { id: 'operations_support', label: '运营与支持', notes: ['占收入 16%', '同比 +5 个百分点'] },
              { id: 'tech_development', label: '技术与开发', notes: ['占收入 8%', '同比 +3 个百分点'] },
            ],
          },
          tax: { label: '税费', notes: ['来源图未显示单独的税费项目。'] },
        },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 65%', '同比 (8 个百分点)'] },
          operating: { label: '营业亏损', notes: ['利润率 (13%)', '同比 (23 个百分点)'] },
          net: { label: '营业亏损', notes: ['来源图未显示单独的净亏损项目。'] },
        },
      },
    },
    }
  );
})(window);
