/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/<dataset-key>.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 't-mobile-us-q4-fy25',
    company: 'T-Mobile US',
    period: 'Q4 FY25',
    periodNote: 'Quarter ended Dec. 31, 2025',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/t-mobile-us-q4-fy25.png',
    roundingTolerance: 0.15,
    revenue: {
      total: 24.3,
      notes: ['+11% Y/Y'],
      items: [
        {
          id: 'services',
          label: 'Services',
          value: 18.7,
          notes: ['+10% Y/Y'],
          children: [
            { id: 'postpaid', label: 'Postpaid revenues', value: 15.4, notes: ['+14% Y/Y'] },
            { id: 'prepaid', label: 'Prepaid revenues', value: 2.6, notes: ['(4%) Y/Y'] },
            { id: 'wholesale_other', label: 'Wholesale & Other', value: 0.7, notes: ['Flat Y/Y'] },
          ],
        },
        { id: 'equipment', label: 'Equipment', value: 5.4, notes: ['+14% Y/Y'] },
        { id: 'other_revenue', label: 'Other', value: 0.3, notes: ['+9% Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 10.3 },
      operatingExpenses: {
        total: 10.3,
        items: [
          { id: 'sga', label: 'SG&A', value: 6.6 },
          { id: 'depreciation_amortization', label: 'Depreciation & Amortization', value: 3.8 },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.5 },
    },
    otherExpenses: {
      total: 1.1,
      items: [{ id: 'other_expense', label: 'Other', value: 1.1 }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 14.1, notes: ['58% margin', '(2pp) Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 3.7, notes: ['15% margin', '(6pp) Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 2.1, notes: ['9% margin', '(5pp) Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2025 财年第四季度',
        periodNote: '截至 2025 年 12 月 31 日的季度',
        revenue: {
          notes: ['同比 +11%'],
          items: [
            {
              id: 'services',
              label: '服务收入',
              notes: ['同比 +10%'],
              children: [
                { id: 'postpaid', label: '后付费收入', notes: ['同比 +14%'] },
                { id: 'prepaid', label: '预付费收入', notes: ['同比 (4%)'] },
                { id: 'wholesale_other', label: '批发及其他', notes: ['同比持平'] },
              ],
            },
            { id: 'equipment', label: '设备', notes: ['同比 +14%'] },
            { id: 'other_revenue', label: '其他', notes: ['同比 +9%'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: {
            items: [
              { id: 'sga', label: '销售、一般及管理费用' },
              { id: 'depreciation_amortization', label: '折旧与摊销' },
            ],
          },
          tax: { label: '税费' },
        },
        otherExpenses: { items: [{ id: 'other_expense', label: '其他' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 58%', '同比 (2 个百分点)'] },
          operating: { label: '营业利润', notes: ['利润率 15%', '同比 (6 个百分点)'] },
          net: { label: '净利润', notes: ['利润率 9%', '同比 (5 个百分点)'] },
        },
      },
    },
  });

  ssot.records.push({
    key: 't-mobile-us-q1-fy26',
    company: 'T-Mobile US',
    period: 'Q1 FY26',
    periodNote: 'Quarter ended Mar. 31, 2026',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/t-mobile-us-q1-fy26.png',
    roundingTolerance: 0.15,
    revenue: {
      total: 23.1,
      notes: ['+11% Y/Y'],
      items: [
        {
          id: 'services',
          label: 'Services',
          value: 18.8,
          notes: ['+11% Y/Y'],
          children: [
            { id: 'postpaid', label: 'Postpaid revenues', value: 15.6, notes: ['+15% Y/Y'] },
            { id: 'prepaid', label: 'Prepaid revenues', value: 2.5, notes: ['(5%) Y/Y'] },
            { id: 'wholesale_other', label: 'Wholesale & Other', value: 0.7, notes: ['Flat Y/Y'] },
          ],
        },
        { id: 'equipment', label: 'Equipment', value: 4.0, notes: ['+8% Y/Y'] },
        { id: 'other_revenue', label: 'Other', value: 0.3, notes: ['+9% Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 8.8 },
      operatingExpenses: {
        total: 9.8,
        items: [
          { id: 'sga', label: 'SG&A', value: 6.0 },
          { id: 'depreciation_amortization', label: 'Depreciation & Amortization', value: 3.8 },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.8 },
    },
    otherExpenses: {
      total: 1.1,
      items: [{ id: 'other_expense', label: 'Other', value: 1.1 }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 14.3, notes: ['62% margin', '(3pp) Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 4.5, notes: ['19% margin', '(4pp) Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 2.5, notes: ['11% margin', '(3pp) Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2026 财年第一季度',
        periodNote: '截至 2026 年 3 月 31 日的季度',
        revenue: {
          notes: ['同比 +11%'],
          items: [
            {
              id: 'services',
              label: '服务收入',
              notes: ['同比 +11%'],
              children: [
                { id: 'postpaid', label: '后付费收入', notes: ['同比 +15%'] },
                { id: 'prepaid', label: '预付费收入', notes: ['同比 (5%)'] },
                { id: 'wholesale_other', label: '批发及其他', notes: ['同比持平'] },
              ],
            },
            { id: 'equipment', label: '设备', notes: ['同比 +8%'] },
            { id: 'other_revenue', label: '其他', notes: ['同比 +9%'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: {
            items: [
              { id: 'sga', label: '销售、一般及管理费用' },
              { id: 'depreciation_amortization', label: '折旧与摊销' },
            ],
          },
          tax: { label: '税费' },
        },
        otherExpenses: { items: [{ id: 'other_expense', label: '其他' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 62%', '同比 (3 个百分点)'] },
          operating: { label: '营业利润', notes: ['利润率 19%', '同比 (4 个百分点)'] },
          net: { label: '净利润', notes: ['利润率 11%', '同比 (3 个百分点)'] },
        },
      },
    },
  });

  ssot.records.push({
    key: 't-mobile-us-q2-fy26',
    company: 'T-Mobile US',
    period: 'Q2 FY26',
    periodNote: 'Quarter ended Jun. 30, 2026',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/t-mobile-us-q2-fy26.png',
    roundingTolerance: 0.15,
    revenue: {
      total: 22.8,
      notes: ['+8% Y/Y'],
      items: [
        {
          id: 'services',
          label: 'Services',
          value: 19.0,
          notes: ['+9% Y/Y'],
          children: [
            { id: 'postpaid', label: 'Postpaid revenues', value: 15.9, notes: ['+13% Y/Y'] },
            { id: 'prepaid', label: 'Prepaid revenues', value: 2.4, notes: ['(6%) Y/Y'] },
            { id: 'wholesale_other', label: 'Wholesale & Other', value: 0.7, notes: ['(8%) Y/Y'] },
          ],
        },
        { id: 'equipment', label: 'Equipment', value: 3.5, notes: ['+2% Y/Y'] },
        { id: 'other_revenue', label: 'Other', value: 0.3, notes: ['+11% Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 8.0 },
      operatingExpenses: {
        total: 9.3,
        items: [
          { id: 'sga', label: 'SG&A', value: 5.8 },
          { id: 'depreciation_amortization', label: 'Depreciation & Amortization', value: 3.4 },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 1.1 },
    },
    otherExpenses: {
      total: 1.2,
      items: [{ id: 'other_expense', label: 'Interest & other', value: 1.2 }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 14.8, notes: ['65% margin', '(0pp) Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 5.5, notes: ['24% margin', '(1pp) Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 3.2, notes: ['14% margin', '(1pp) Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2026 财年第二季度',
        periodNote: '截至 2026 年 6 月 30 日的季度',
        revenue: {
          notes: ['同比 +8%'],
          items: [
            {
              id: 'services',
              label: '服务收入',
              notes: ['同比 +9%'],
              children: [
                { id: 'postpaid', label: '后付费收入', notes: ['同比 +13%'] },
                { id: 'prepaid', label: '预付费收入', notes: ['同比 (6%)'] },
                { id: 'wholesale_other', label: '批发及其他', notes: ['同比 (8%)'] },
              ],
            },
            { id: 'equipment', label: '设备', notes: ['同比 +2%'] },
            { id: 'other_revenue', label: '其他', notes: ['同比 +11%'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: {
            items: [
              { id: 'sga', label: '销售、一般及管理费用' },
              { id: 'depreciation_amortization', label: '折旧与摊销' },
            ],
          },
          tax: { label: '税费' },
        },
        otherExpenses: { items: [{ id: 'other_expense', label: '利息及其他' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 65%', '同比 (0 个百分点)'] },
          operating: { label: '营业利润', notes: ['利润率 24%', '同比 (1 个百分点)'] },
          net: { label: '净利润', notes: ['利润率 14%', '同比 (1 个百分点)'] },
        },
      },
    },
  });
})(window);
