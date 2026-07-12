/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/<dataset-key>.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'kraft-heinz-q4-fy25',
    company: 'Kraft Heinz',
    period: 'Q4 FY25',
    periodNote: 'Ending Dec. 2025',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/kraft-heinz-q4-fy25.png',
    roundingTolerance: 0.3,
    revenue: {
      total: 6.4,
      notes: ['(4%) Y/Y'],
      items: [
        { id: 'accelerate', label: 'Accelerate', value: 4.3, notes: ['(3%) Y/Y', 'Taste Elevation', 'Easy Ready Meals', 'Substantial Snacking'] },
        { id: 'protect', label: 'Protect', value: 0.8, notes: ['(3%) Y/Y', 'Desserts', 'Hydration'] },
        { id: 'balance', label: 'Balance', value: 1.2, notes: ['(5%) Y/Y', 'Cheese', 'Coffee', 'Meats', 'Other'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 4.3 },
      operatingExpenses: {
        total: 1.0,
        items: [{ id: 'sga', label: 'SG&A', value: 1.0, notes: ['15% of revenue', '+2pp Y/Y'] }],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.2 },
    },
    otherIncome: { total: 0.1, items: [{ id: 'other', label: 'Other', value: 0.1 }] },
    otherExpenses: {
      total: 0.205,
      items: [
        { id: 'interest', label: 'Interest', value: 0.2 },
        { id: 'goodwill', label: 'Goodwill', value: 0.005, notes: ['0% of revenue', '(1pp) Y/Y'] },
      ],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 2.1, notes: ['33% margin', '(2pp) Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 1.1, notes: ['17% margin', '+18pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 0.6, notes: ['10% margin', '(22pp) Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2025 财年第四季度',
        periodNote: '截至 2025 年 12 月',
        revenue: {
          notes: ['同比 (4%)'],
          items: [
            { id: 'accelerate', label: '加速增长', notes: ['同比 (3%)', '风味提升', '便捷即食餐', '充饥零食'] },
            { id: 'protect', label: '稳固基础', notes: ['同比 (3%)', '甜品', '补水饮品'] },
            { id: 'balance', label: '平衡组合', notes: ['同比 (5%)', '奶酪', '咖啡', '肉制品', '其他'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '销售成本' },
          operatingExpenses: { items: [{ id: 'sga', label: '销售、一般及管理费用', notes: ['占收入 15%', '同比 +2 个百分点'] }] },
          tax: { label: '税费' },
        },
        otherIncome: { items: [{ id: 'other', label: '其他' }] },
        otherExpenses: { items: [{ id: 'interest', label: '利息' }, { id: 'goodwill', label: '商誉', notes: ['占收入 0%', '同比 (1 个百分点)'] }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 33%', '同比 (2 个百分点)'] },
          operating: { label: '营业利润', notes: ['利润率 17%', '同比 +18 个百分点'] },
          net: { label: '净利润', notes: ['利润率 10%', '同比 (22 个百分点)'] },
        },
      },
    },
  });

  ssot.records.push({
    key: 'kraft-heinz-q1-fy26',
    company: 'Kraft Heinz',
    period: 'Q1 FY26',
    periodNote: 'Ending Mar. 2026',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/kraft-heinz-q1-fy26.png',
    roundingTolerance: 0.3,
    revenue: {
      total: 6.0,
      notes: ['+1% Y/Y'],
      items: [
        { id: 'north_america', label: 'North America', value: 4.5, notes: ['(1%) Y/Y'] },
        { id: 'international_developed_markets', label: 'International Developed Markets', value: 0.8, notes: ['+3% Y/Y'] },
        { id: 'emerging_markets', label: 'Emerging Markets', value: 0.7, notes: ['+7% Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 3.8 },
      operatingExpenses: {
        total: 1.1,
        items: [
          { id: 'sga', label: 'SG&A', value: 1.1, notes: ['18% of revenue', '+3pp Y/Y'] },
          { id: 'intangible', label: 'Intangible', value: 0.013, notes: ['0% of revenue'] },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.2 },
    },
    otherIncome: { total: 0.1, items: [{ id: 'other', label: 'Other', value: 0.1 }] },
    otherExpenses: { total: 0.2, items: [{ id: 'interest', label: 'Interest', value: 0.2 }] },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 2.2, notes: ['37% margin', '+2pp Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 1.1, notes: ['19% margin', '(1pp) Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 0.8, notes: ['13% margin', '+1pp Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2026 财年第一季度',
        periodNote: '截至 2026 年 3 月',
        revenue: {
          notes: ['同比 +1%'],
          items: [
            { id: 'north_america', label: '北美', notes: ['同比 (1%)'] },
            { id: 'international_developed_markets', label: '国际发达市场', notes: ['同比 +3%'] },
            { id: 'emerging_markets', label: '新兴市场', notes: ['同比 +7%'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '销售成本' },
          operatingExpenses: { items: [{ id: 'sga', label: '销售、一般及管理费用', notes: ['占收入 18%', '同比 +3 个百分点'] }, { id: 'intangible', label: '无形资产', notes: ['占收入 0%'] }] },
          tax: { label: '税费' },
        },
        otherIncome: { items: [{ id: 'other', label: '其他' }] },
        otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 37%', '同比 +2 个百分点'] },
          operating: { label: '营业利润', notes: ['利润率 19%', '同比 (1 个百分点)'] },
          net: { label: '净利润', notes: ['利润率 13%', '同比 +1 个百分点'] },
        },
      },
    },
  });
})(window);
