/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/<dataset-key>.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'hershey-q4-fy25',
    company: 'Hershey',
    period: 'Q4 FY25',
    periodNote: 'Ending Dec. 2025',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/hershey-q4-fy25.png',
    roundingTolerance: 0.15,
    revenue: {
      total: 3.1,
      notes: ['+7% Y/Y'],
      items: [
        { id: 'north_america_confectionery', label: 'North America Confectionery', value: 2.5, notes: ['+5% Y/Y', '29% segment margin'] },
        { id: 'north_america_salty_snacks', label: 'North America Salty Snacks', value: 0.4, notes: ['+28% Y/Y', '21% segment margin'] },
        { id: 'international', label: 'International', value: 0.3, notes: ['+1% Y/Y', '(12%) segment margin'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 1.9 },
      operatingExpenses: {
        total: 0.7,
        items: [{ id: 'operating_expenses', label: 'Selling, marketing & administrative expenses', value: 0.7 }],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.1 },
    },
    otherExpenses: {
      total: 0.1,
      items: [{ id: 'other', label: 'Other', value: 0.1 }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 1.1, notes: ['37% margin', '(17pp) Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 0.4, notes: ['14% margin', '(18pp) Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 0.3, notes: ['10% margin', '(17pp) Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2025 财年第四季度',
        periodNote: '截至 2025 年 12 月',
        revenue: {
          notes: ['同比 +7%'],
          items: [
            { id: 'north_america_confectionery', label: '北美糖果业务', notes: ['同比 +5%', '分部利润率 29%'] },
            { id: 'north_america_salty_snacks', label: '北美咸味零食业务', notes: ['同比 +28%', '分部利润率 21%'] },
            { id: 'international', label: '国际业务', notes: ['同比 +1%', '分部利润率 (12%)'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '销售成本' },
          operatingExpenses: { items: [{ id: 'operating_expenses', label: '销售、营销及管理费用' }] },
          tax: { label: '税费' },
        },
        otherExpenses: { items: [{ id: 'other', label: '其他' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 37%', '同比 (17 个百分点)'] },
          operating: { label: '营业利润', notes: ['利润率 14%', '同比 (18 个百分点)'] },
          net: { label: '净利润', notes: ['利润率 10%', '同比 (17 个百分点)'] },
        },
      },
    },
  });

  ssot.records.push({
    key: 'hershey-q1-fy26',
    company: 'Hershey',
    period: 'Q1 FY26',
    periodNote: 'Ending Mar. 29, 2026',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/hershey-q1-fy26.png',
    roundingTolerance: 0.15,
    revenue: {
      total: 3.1,
      notes: ['+11% Y/Y'],
      items: [
        { id: 'north_america_confectionery', label: 'North America Confectionery', value: 2.5, notes: ['+8% Y/Y', '32% segment margin'] },
        { id: 'north_america_salty_snacks', label: 'North America Salty Snacks', value: 0.4, notes: ['+26% Y/Y', '10% segment margin'] },
        { id: 'international', label: 'International', value: 0.3, notes: ['+16% Y/Y', '6% segment margin'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 1.9 },
      operatingExpenses: {
        total: 0.6,
        items: [{ id: 'operating_expenses', label: 'Selling, marketing & administrative expenses', value: 0.6 }],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.2 },
    },
    otherExpenses: {
      total: 0.048,
      items: [{ id: 'other', label: 'Other', value: 0.048 }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 1.2, notes: ['39% margin', '+6pp Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 0.6, notes: ['21% margin', '+7pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 0.4, notes: ['14% margin', '+6pp Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2026 财年第一季度',
        periodNote: '截至 2026 年 3 月 29 日',
        revenue: {
          notes: ['同比 +11%'],
          items: [
            { id: 'north_america_confectionery', label: '北美糖果业务', notes: ['同比 +8%', '分部利润率 32%'] },
            { id: 'north_america_salty_snacks', label: '北美咸味零食业务', notes: ['同比 +26%', '分部利润率 10%'] },
            { id: 'international', label: '国际业务', notes: ['同比 +16%', '分部利润率 6%'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '销售成本' },
          operatingExpenses: { items: [{ id: 'operating_expenses', label: '销售、营销及管理费用' }] },
          tax: { label: '税费' },
        },
        otherExpenses: { items: [{ id: 'other', label: '其他' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 39%', '同比 +6 个百分点'] },
          operating: { label: '营业利润', notes: ['利润率 21%', '同比 +7 个百分点'] },
          net: { label: '净利润', notes: ['利润率 14%', '同比 +6 个百分点'] },
        },
      },
    },
  });

  ssot.records.push({
    key: 'hershey-q2-fy26',
    company: 'Hershey',
    period: 'Q2 FY26',
    periodNote: 'Ending Jun. 28, 2026',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/hershey-q2-fy26.png',
    roundingTolerance: 0.15,
    revenue: {
      total: 2.8,
      notes: ['+7% Y/Y'],
      items: [
        { id: 'north_america_confectionery', label: 'North America Confectionery', value: 2.2, notes: ['+4% Y/Y', '32% segment margin'] },
        { id: 'north_america_salty_snacks', label: 'North America Salty Snacks', value: 0.4, notes: ['+23% Y/Y', '16% segment margin'] },
        { id: 'international', label: 'International', value: 0.2, notes: ['+6% Y/Y', '(2%) segment margin'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 1.5 },
      operatingExpenses: {
        total: 0.6,
        items: [{ id: 'operating_expenses', label: 'Selling, marketing & administrative expenses', value: 0.6 }],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.1 },
    },
    otherExpenses: {
      total: 0.1,
      items: [{ id: 'other', label: 'Other', value: 0.1 }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 1.3, notes: ['45% margin', '+15pp Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 0.6, notes: ['23% margin', '+16pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 0.5, notes: ['16% margin', '+14pp Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2026 财年第二季度',
        periodNote: '截至 2026 年 6 月 28 日',
        revenue: {
          notes: ['同比 +7%'],
          items: [
            { id: 'north_america_confectionery', label: '北美糖果业务', notes: ['同比 +4%', '分部利润率 32%'] },
            { id: 'north_america_salty_snacks', label: '北美咸味零食业务', notes: ['同比 +23%', '分部利润率 16%'] },
            { id: 'international', label: '国际业务', notes: ['同比 +6%', '分部利润率 (2%)'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '销售成本' },
          operatingExpenses: { items: [{ id: 'operating_expenses', label: '销售、营销及管理费用' }] },
          tax: { label: '税费' },
        },
        otherExpenses: { items: [{ id: 'other', label: '其他' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 45%', '同比 +15 个百分点'] },
          operating: { label: '营业利润', notes: ['利润率 23%', '同比 +16 个百分点'] },
          net: { label: '净利润', notes: ['利润率 16%', '同比 +14 个百分点'] },
        },
      },
    },
  });
})(window);
