/* Pure income-statement SSOT records. Sankey geometry stays in data/datasets/. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'gamestop-q1-fy26',
    company: 'GameStop',
    period: 'Q1 FY26',
    periodNote: 'Ending May 2, 2026',
    currency: '$',
    unit: 'M',
    decimals: 0,
    sourceImage: 'input/processed/gamestop-q1-fy26.png',
    roundingTolerance: 1.5,
    sourceUrl: 'https://www.sec.gov/Archives/edgar/data/1326380/000132638026000025/gme-20260502.htm',
    revenue: {
      total: 835.3,
      notes: ['+14% Y/Y'],
      items: [
        { id: 'hardware_accessories', label: 'Hardware & Accessories', value: 334.0, notes: ['(3%) Y/Y'] },
        { id: 'packaged_software', label: 'Packaged Software', value: 152.7, notes: ['(13%) Y/Y'] },
        { id: 'collectibles', label: 'Collectibles', value: 348.6, notes: ['+65% Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 495.0 },
      operatingExpenses: {
        total: 202.0,
        items: [{ id: 'sga', label: 'SG&A', value: 202.0 }],
      },
      tax: { id: 'tax', label: 'Tax', value: 117.0 },
    },
    operatingOtherIncome: {
      total: 5.0,
      items: [{ id: 'other_operating_income', label: 'Other', value: 5.0 }],
    },
    otherIncome: {
      total: 363.3,
      items: [{ id: 'other_income', label: 'Other', value: 363.3 }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 340.3, notes: ['41% margin', '+6pp Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 143.3, notes: ['17% margin', '+19pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 389.6, notes: ['47% margin', '+41pp Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2026 财年第一季度',
        periodNote: '截至 2026 年 5 月 2 日',
        revenue: {
          notes: ['同比 +14%'],
          items: [
            { id: 'hardware_accessories', label: '硬件及配件', notes: ['同比 (3%)'] },
            { id: 'packaged_software', label: '实体软件', notes: ['同比 (13%)'] },
            { id: 'collectibles', label: '收藏品', notes: ['同比 +65%'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: { items: [{ id: 'sga', label: '销售、一般及行政费用' }] },
          tax: { label: '税费' },
        },
        operatingOtherIncome: { items: [{ id: 'other_operating_income', label: '其他' }] },
        otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 41%', '同比 +6 个百分点'] },
          operating: { label: '营业利润', notes: ['利润率 17%', '同比 +19 个百分点'] },
          net: { label: '净利润', notes: ['利润率 47%', '同比 +41 个百分点'] },
        },
      },
    },
  });
})(window);
