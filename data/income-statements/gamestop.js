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

  ssot.records.push({
    key: 'gamestop-q4-fy25',
    company: 'GameStop',
    period: 'Q4 FY25',
    periodNote: 'Ending Jan. 31, 2026',
    currency: '$',
    unit: 'M',
    decimals: 1,
    sourceImage: 'input/processed/gamestop-q4-fy25.png',
    roundingTolerance: 1.5,
    sourceUrl: 'https://www.sec.gov/Archives/edgar/data/1326380/000132638026000012/a991q4fy25earningsrelease.htm',
    revenue: {
      total: 1104.3,
      notes: ['(14%) Y/Y'],
      items: [
        { id: 'hardware_accessories', label: 'Hardware & Accessories', value: 535.6, notes: ['(26%) Y/Y'] },
        { id: 'packaged_software', label: 'Packaged Software', value: 203.7, notes: ['(29%) Y/Y'] },
        { id: 'collectibles', label: 'Collectibles', value: 365.0, notes: ['+35% Y/Y'] },
      ],
      breakdowns: [
        {
          id: 'product_total_view',
          label: 'Product revenue bridge',
          total: 1104.3,
          items: [
            { id: 'revenue_by_product', label: 'Revenue', value: 1104.3, notes: ['(14%) Y/Y'] },
          ],
        },
        {
          id: 'geography',
          label: 'Revenue by geography',
          total: 1104.3,
          items: [
            { id: 'united_states', label: 'United States', value: 788.5, notes: ['(8%) Y/Y'] },
            { id: 'australia', label: 'Australia', value: 161.7, notes: ['+9% Y/Y'] },
            { id: 'europe', label: 'Europe', value: 154.1, notes: ['(21%) Y/Y'] },
          ],
        },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 717.5 },
      operatingExpenses: {
        total: 251.6,
        items: [
          { id: 'sga', label: 'SG&A', value: 241.5 },
          { id: 'impairment', label: 'Impairment', value: 10.1 },
        ],
      },
    },
    otherIncome: {
      total: 50.9,
      items: [{ id: 'tax_benefit', label: 'Tax benefit', value: 50.9 }],
    },
    otherExpenses: {
      total: 58.2,
      items: [{ id: 'other', label: 'Other', value: 58.2 }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 386.8, notes: ['35% margin', '+7pp Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 135.2, notes: ['12% margin', '+6pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 127.9, notes: ['12% margin', '+1pp Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2025 财年第四季度',
        periodNote: '截至 2026 年 1 月 31 日',
        revenue: {
          notes: ['同比 (14%)'],
          items: [
            { id: 'hardware_accessories', label: '硬件及配件', notes: ['同比 (26%)'] },
            { id: 'packaged_software', label: '实体软件', notes: ['同比 (29%)'] },
            { id: 'collectibles', label: '收藏品', notes: ['同比 +35%'] },
          ],
          breakdowns: [
            {
              id: 'product_total_view',
              label: '产品收入汇总桥',
              items: [
                { id: 'revenue_by_product', label: '收入', notes: ['同比 (14%)'] },
              ],
            },
            {
              id: 'geography',
              label: '按地区划分的收入',
              items: [
                { id: 'united_states', label: '美国', notes: ['同比 (8%)'] },
                { id: 'australia', label: '澳大利亚', notes: ['同比 +9%'] },
                { id: 'europe', label: '欧洲', notes: ['同比 (21%)'] },
              ],
            },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: {
            items: [
              { id: 'sga', label: '销售、一般及行政费用' },
              { id: 'impairment', label: '资产减值' },
            ],
          },
        },
        otherIncome: { items: [{ id: 'tax_benefit', label: '所得税收益' }] },
        otherExpenses: { items: [{ id: 'other', label: '其他' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 35%', '同比 +7 个百分点'] },
          operating: { label: '营业利润', notes: ['利润率 12%', '同比 +6 个百分点'] },
          net: { label: '净利润', notes: ['利润率 12%', '同比 +1 个百分点'] },
        },
      },
    },
  });
})(window);
