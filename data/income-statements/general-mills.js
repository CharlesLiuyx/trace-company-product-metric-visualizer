/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/<dataset-key>.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'general-mills-q3-fy26',
    company: 'General Mills',
    period: 'Q3 FY26',
    periodNote: 'Ending Feb. 2026',
    currency: '$',
    unit: 'B',
    decimals: 3,
    sourceImage: 'input/processed/general-mills-q3-fy26.png',
    roundingTolerance: 0.15,
    revenue: {
      total: 4.4,
      notes: ['(8%) Y/Y'],
      items: [
        {
          id: 'north_america_retail',
          label: 'North America Retail',
          value: 2.6,
          notes: ['(14%) Y/Y', '17% segment margin'],
        },
        {
          id: 'pet',
          label: 'Pet',
          value: 0.7,
          notes: ['+12% Y/Y', '5% segment margin'],
        },
        {
          id: 'north_america_foodservice',
          label: 'North America Foodservice',
          value: 0.6,
          notes: ['+15% Y/Y', '16% segment margin'],
        },
        {
          id: 'international',
          label: 'International',
          value: 0.5,
          notes: ['(24%) Y/Y', '11% segment margin'],
        },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 3.1 },
      operatingExpenses: {
        total: 0.829,
        items: [
          { id: 'sga', label: 'SG&A expenses', value: 0.8 },
          { id: 'other_operating_expenses', label: 'Other', value: 0.029 },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.1 },
    },
    otherIncome: {
      total: 0.009,
      items: [{ id: 'other_income', label: 'Other', value: 0.009 }],
    },
    otherExpenses: {
      total: 0.1,
      items: [{ id: 'interest', label: 'Interest', value: 0.1 }],
    },
    profit: {
      gross: {
        id: 'gross_profit',
        label: 'Gross profit',
        value: 1.4,
        notes: ['31% margin', '(3pp) Y/Y'],
      },
      operating: {
        id: 'operating_profit',
        label: 'Operating profit',
        value: 0.5,
        notes: ['12% margin', '(7pp) Y/Y'],
      },
      net: {
        id: 'net_profit',
        label: 'Net profit',
        value: 0.3,
        notes: ['7% margin', '(6pp) Y/Y'],
      },
    },
    i18n: {
      zh: {
        period: '2026 财年第三季度',
        periodNote: '截至 2026 年 2 月',
        revenue: {
          notes: ['同比 (8%)'],
          items: [
            {
              id: 'north_america_retail',
              label: '北美零售',
              notes: ['同比 (14%)', '分部利润率 17%'],
            },
            {
              id: 'pet',
              label: '宠物业务',
              notes: ['同比 +12%', '分部利润率 5%'],
            },
            {
              id: 'north_america_foodservice',
              label: '北美餐饮服务',
              notes: ['同比 +15%', '分部利润率 16%'],
            },
            {
              id: 'international',
              label: '国际业务',
              notes: ['同比 (24%)', '分部利润率 11%'],
            },
          ],
        },
        costs: {
          costOfRevenue: { label: '销售成本' },
          operatingExpenses: {
            items: [
              { id: 'sga', label: '销售、一般及管理费用' },
              { id: 'other_operating_expenses', label: '其他' },
            ],
          },
          tax: { label: '税费' },
        },
        otherIncome: { items: [{ id: 'other_income', label: '其他收入' }] },
        otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 31%', '同比 (3 个百分点)'] },
          operating: { label: '营业利润', notes: ['利润率 12%', '同比 (7 个百分点)'] },
          net: { label: '净利润', notes: ['利润率 7%', '同比 (6 个百分点)'] },
        },
      },
    },
  });
})(window);
