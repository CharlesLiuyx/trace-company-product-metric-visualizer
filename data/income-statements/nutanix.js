/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/<dataset-key>.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'nutanix-q1-fy26',
    company: 'Nutanix',
    period: 'Q1 FY26',
    periodNote: 'Ending Oct. 2025',
    currency: '$',
    unit: 'M',
    decimals: 0,
    sourceImage: 'input/processed/nutanix-q1-fy26.png',
    roundingTolerance: 1.5,
    revenue: {
      total: 671,
      notes: ['+13% Y/Y'],
      items: [
        { id: 'subscription', label: 'Subscription revenue', value: 637, notes: ['+14% Y/Y'] },
        { id: 'professional_services', label: 'Professional services and other revenue', value: 33, notes: ['+8% Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 87 },
      operatingExpenses: {
        total: 534,
        items: [
          { id: 'sm', label: 'Sales and marketing', value: 285, notes: ['43% of revenue', '+0pp Y/Y'] },
          { id: 'rnd', label: 'Research and development', value: 187, notes: ['28% of revenue', '(1pp) Y/Y'] },
          { id: 'ga', label: 'General and administrative', value: 61, notes: ['9% of revenue', '+0pp Y/Y'] },
        ],
      },
      tax: { id: 'tax', label: 'Income tax expense', value: 3 },
    },
    otherIncome: {
      total: 16,
      items: [{ id: 'interest', label: 'Interest and other income, net', value: 16 }],
    },
    otherExpenses: { total: 0, items: [] },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 583, notes: ['87% margin', '+1pp Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 49, notes: ['7% margin', '+3pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 62, notes: ['9% margin', '+4pp Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2026 财年第一季度',
        periodNote: '截至 2025 年 10 月',
        revenue: {
          notes: ['同比 +13%'],
          items: [
            { id: 'subscription', label: '订阅收入', notes: ['同比 +14%'] },
            { id: 'professional_services', label: '专业服务及其他收入', notes: ['同比 +8%'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: {
            items: [
              { id: 'sm', label: '销售与营销', notes: ['占收入 43%', '同比 +0 个百分点'] },
              { id: 'rnd', label: '研发', notes: ['占收入 28%', '同比 (1 个百分点)'] },
              { id: 'ga', label: '一般及行政', notes: ['占收入 9%', '同比 +0 个百分点'] },
            ],
          },
          tax: { label: '所得税费用' },
        },
        otherIncome: { items: [{ id: 'interest', label: '利息及其他净收益' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 87%', '同比 +1 个百分点'] },
          operating: { label: '营业利润', notes: ['利润率 7%', '同比 +3 个百分点'] },
          net: { label: '净利润', notes: ['利润率 9%', '同比 +4 个百分点'] },
        },
      },
    },
  });

  ssot.records.push({
    key: 'nutanix-q3-fy26',
    company: 'Nutanix',
    period: 'Q3 FY26',
    periodNote: 'Ending Apr. 2026',
    currency: '$',
    unit: 'M',
    decimals: 0,
    sourceImage: 'input/processed/nutanix-q3-fy26.png',
    roundingTolerance: 1.5,
    revenue: {
      total: 703,
      notes: ['+10% Y/Y'],
      items: [
        { id: 'subscription', label: 'Subscription revenue', value: 665, notes: ['+9% Y/Y'] },
        { id: 'professional_services', label: 'Professional services and other revenue', value: 38, notes: ['+31% Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 92 },
      operatingExpenses: {
        total: 540,
        items: [
          { id: 'sm', label: 'Sales and marketing', value: 284, notes: ['40% of revenue', '(0pp) Y/Y'] },
          { id: 'rnd', label: 'Research and development', value: 196, notes: ['28% of revenue', '(1pp) Y/Y'] },
          { id: 'ga', label: 'General and administrative', value: 61, notes: ['9% of revenue', '(1pp) Y/Y'] },
        ],
      },
      tax: { id: 'tax', label: 'Income tax expense', value: 9 },
    },
    otherIncome: {
      total: 11,
      items: [{ id: 'interest', label: 'Interest income', value: 11 }],
    },
    otherExpenses: { total: 0, items: [] },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 611, notes: ['87% margin', '(0pp) Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 71, notes: ['10% margin', '+2pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 72, notes: ['10% margin', '+0pp Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2026 财年第三季度',
        periodNote: '截至 2026 年 4 月',
        revenue: { notes: ['同比 +10%'], items: [{ id: 'subscription', label: '订阅收入', notes: ['同比 +9%'] }, { id: 'professional_services', label: '专业服务及其他收入', notes: ['同比 +31%'] }] },
        costs: { costOfRevenue: { label: '收入成本' }, operatingExpenses: { items: [{ id: 'sm', label: '销售与营销', notes: ['占收入 40%', '同比 (0 个百分点)'] }, { id: 'rnd', label: '研发', notes: ['占收入 28%', '同比 (1 个百分点)'] }, { id: 'ga', label: '一般及行政', notes: ['占收入 9%', '同比 (1 个百分点)'] }] }, tax: { label: '所得税费用' } },
        otherIncome: { items: [{ id: 'interest', label: '利息收入' }] },
        profit: { gross: { label: '毛利润', notes: ['利润率 87%', '同比 (0 个百分点)'] }, operating: { label: '营业利润', notes: ['利润率 10%', '同比 +2 个百分点'] }, net: { label: '净利润', notes: ['利润率 10%', '同比 +0 个百分点'] } },
      },
    },
  });

  ssot.records.push({
    key: 'nutanix-q2-fy26',
    company: 'Nutanix',
    period: 'Q2 FY26',
    periodNote: 'Ending Jan. 2026',
    currency: '$',
    unit: 'M',
    decimals: 0,
    sourceImage: 'input/processed/nutanix-q2-fy26.png',
    roundingTolerance: 0.6,
    revenue: {
      total: 722.825,
      notes: ['+10% Y/Y'],
      items: [
        { id: 'subscription', label: 'Subscription revenue', value: 690.531, notes: ['+11% Y/Y'] },
        { id: 'professional_services', label: 'Professional services and other revenue', value: 32.294, notes: ['+15% Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 91.273 },
      operatingExpenses: {
        total: 547.415,
        items: [
          { id: 'sm', label: 'Sales and marketing', value: 277.543, notes: ['38% of revenue', '(2pp) Y/Y'] },
          { id: 'rnd', label: 'Research and development', value: 202.259, notes: ['28% of revenue', '+0pp Y/Y'] },
          { id: 'ga', label: 'General and administrative', value: 67.613, notes: ['9% of revenue', '+0pp Y/Y'] },
        ],
      },
      // A benefit is represented as a negative tax cost, preserving the
      // reported operating-profit-to-net-profit arithmetic.
      tax: { id: 'tax', label: 'Income tax benefit', value: -5.517 },
    },
    otherIncome: {
      total: 13.368,
      items: [{ id: 'interest', label: 'Other income, net', value: 13.368 }],
    },
    otherExpenses: { total: 0, items: [] },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 631.552, notes: ['87% margin', '+0pp Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 84.137, notes: ['12% margin', '+2pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 103.022, notes: ['14% margin', '+6pp Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2026 财年第二季度',
        periodNote: '截至 2026 年 1 月',
        revenue: {
          notes: ['同比 +10%'],
          items: [
            { id: 'subscription', label: '订阅收入', notes: ['同比 +11%'] },
            { id: 'professional_services', label: '专业服务及其他收入', notes: ['同比 +15%'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: {
            items: [
              { id: 'sm', label: '销售与营销', notes: ['占收入 38%', '同比 (2 个百分点)'] },
              { id: 'rnd', label: '研发', notes: ['占收入 28%', '同比 +0 个百分点'] },
              { id: 'ga', label: '一般及行政', notes: ['占收入 9%', '同比 +0 个百分点'] },
            ],
          },
          tax: { label: '所得税收益' },
        },
        otherIncome: { items: [{ id: 'interest', label: '其他净收益' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 87%', '同比 +0 个百分点'] },
          operating: { label: '营业利润', notes: ['利润率 12%', '同比 +2 个百分点'] },
          net: { label: '净利润', notes: ['利润率 14%', '同比 +6 个百分点'] },
        },
      },
    },
  });
})(window);
