/* Pure income-statement SSOT. Sankey geometry stays in data/datasets/. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'accenture-q3-fy26',
    company: 'Accenture',
    period: 'Q3 FY26',
    periodNote: 'Ending May 2026',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/accenture-q3-fy26.png',
    roundingTolerance: 0.15,
    revenue: {
      total: 18.7,
      notes: ['+6% Y/Y'],
      items: [
        { id: 'communications_media_tech', label: ['Communications', 'Media & Tech'], value: 3.2, notes: ['+10% Y/Y'] },
        { id: 'financial_services', label: ['Financial', 'Services'], value: 3.5, notes: ['+6% Y/Y'] },
        { id: 'health_public_services', label: ['Health &', 'Public Services'], value: 3.8, notes: ['+2% Y/Y'] },
        { id: 'products', label: 'Products', value: 5.7, notes: ['+6% Y/Y'] },
        { id: 'resources', label: 'Resources', value: 2.5, notes: ['+3% Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_services', label: ['Cost of', 'services'], value: 12.6 },
      operatingExpenses: {
        total: 3.0,
        items: [
          { id: 'sm', label: 'S&M', value: 1.8, notes: ['10% of revenue', '(0pp) Y/Y'] },
          { id: 'ga', label: 'G&A', value: 1.1, notes: ['6% of revenue', '+0pp Y/Y'] },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.8 },
    },
    otherIncome: { total: 0, items: [] },
    otherExpenses: {
      total: 0.025,
      items: [{ id: 'other', label: 'Other', value: 0.025 }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 6.1, notes: ['33% margin', '(0pp) Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 3.2, notes: ['17% margin', '+0pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 2.4, notes: ['13% margin', '+0pp Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2026 财年第三季度',
        periodNote: '截至 2026 年 5 月',
        revenue: {
          notes: ['同比 +6%'],
          items: [
            { id: 'communications_media_tech', label: ['通信', '媒体与科技'], notes: ['同比 +10%'] },
            { id: 'financial_services', label: ['金融', '服务'], notes: ['同比 +6%'] },
            { id: 'health_public_services', label: ['医疗健康与', '公共服务'], notes: ['同比 +2%'] },
            { id: 'products', label: '产品', notes: ['同比 +6%'] },
            { id: 'resources', label: '资源', notes: ['同比 +3%'] },
          ],
        },
        costs: {
          costOfRevenue: { label: ['服务', '成本'] },
          operatingExpenses: {
            items: [
              { id: 'sm', label: '销售与市场', notes: ['占收入 10%', '同比 (0 个百分点)'] },
              { id: 'ga', label: '一般及行政', notes: ['占收入 6%', '同比 +0 个百分点'] },
            ],
          },
          tax: { label: '税费' },
        },
        otherExpenses: { items: [{ id: 'other', label: '其他' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 33%', '同比 (0 个百分点)'] },
          operating: { label: '营业利润', notes: ['利润率 17%', '同比 +0 个百分点'] },
          net: { label: '净利润', notes: ['利润率 13%', '同比 +0 个百分点'] },
        },
      },
    },
  });

  ssot.records.push({
    key: 'accenture-q2-fy26',
    company: 'Accenture',
    period: 'Q2 FY26',
    periodNote: 'Ending Feb. 2026',
    currency: '$',
    unit: 'B',
    decimals: 2,
    sourceImage: 'input/processed/accenture-q2-fy26.png',
    roundingTolerance: 0.15,
    revenue: {
      total: 18.0,
      notes: ['+8% Y/Y'],
      items: [
        { id: 'communications_media_tech', label: ['Communications', 'Media & Tech'], value: 3.1, notes: ['+13% Y/Y'] },
        { id: 'financial_services', label: ['Financial', 'Services'], value: 3.4, notes: ['+13% Y/Y'] },
        { id: 'health_public_services', label: ['Health &', 'Public Services'], value: 3.7, notes: ['+2% Y/Y'] },
        { id: 'products', label: 'Products', value: 5.5, notes: ['+8% Y/Y'] },
        { id: 'resources', label: 'Resources', value: 2.4, notes: ['+7% Y/Y'] },
      ],
      breakdowns: [
        {
          id: 'service_type',
          label: 'Revenue by service type',
          total: 18.0,
          items: [
            { id: 'consulting', label: 'Consulting', value: 8.9, notes: ['+7% Y/Y'] },
            { id: 'managed_services', label: 'Managed Services', value: 9.2, notes: ['+10% Y/Y'] },
          ],
        },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_services', label: ['Cost of', 'services'], value: 12.6 },
      operatingExpenses: {
        total: 3.0,
        items: [
          { id: 'sm', label: 'S&M', value: 1.7, notes: ['10% of revenue', '(0pp) Y/Y'] },
          { id: 'ga', label: 'G&A', value: 1.2, notes: ['7% of revenue', '+0pp Y/Y'] },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.6 },
    },
    otherIncome: { total: 0, items: [] },
    otherExpenses: {
      total: 0.036893,
      items: [{ id: 'other', label: 'Other', value: 0.036893 }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 5.5, notes: ['30% margin', '+0pp Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 2.5, notes: ['14% margin', '+0pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 1.9, notes: ['10% margin', '(1pp) Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2026 财年第二季度',
        periodNote: '截至 2026 年 2 月',
        revenue: {
          notes: ['同比 +8%'],
          items: [
            { id: 'communications_media_tech', label: ['通信', '媒体与科技'], notes: ['同比 +13%'] },
            { id: 'financial_services', label: ['金融', '服务'], notes: ['同比 +13%'] },
            { id: 'health_public_services', label: ['医疗健康与', '公共服务'], notes: ['同比 +2%'] },
            { id: 'products', label: '产品', notes: ['同比 +8%'] },
            { id: 'resources', label: '资源', notes: ['同比 +7%'] },
          ],
          breakdowns: [
            {
              id: 'service_type',
              label: '按服务类型划分的收入',
              items: [
                { id: 'consulting', label: '咨询', notes: ['同比 +7%'] },
                { id: 'managed_services', label: '托管服务', notes: ['同比 +10%'] },
              ],
            },
          ],
        },
        costs: {
          costOfRevenue: { label: ['服务', '成本'] },
          operatingExpenses: {
            items: [
              { id: 'sm', label: '销售与市场', notes: ['占收入 10%', '同比 (0 个百分点)'] },
              { id: 'ga', label: '一般及行政', notes: ['占收入 7%', '同比 +0 个百分点'] },
            ],
          },
          tax: { label: '税费' },
        },
        otherExpenses: { items: [{ id: 'other', label: '其他' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 30%', '同比 +0 个百分点'] },
          operating: { label: '营业利润', notes: ['利润率 14%', '同比 +0 个百分点'] },
          net: { label: '净利润', notes: ['利润率 10%', '同比 (1 个百分点)'] },
        },
      },
    },
  });
})(window);
