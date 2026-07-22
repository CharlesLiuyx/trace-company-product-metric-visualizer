/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/<dataset-key>.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'booking-q4-fy25',
    company: 'Booking Holdings',
    period: 'Q4 FY25',
    periodNote: 'Quarter ended Dec. 31, 2025',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/booking-q4-fy25.png',
    roundingTolerance: 0.2,
    revenue: {
      total: 6.3,
      notes: ['+16% Y/Y'],
      items: [
        { id: 'merchant', label: 'Merchant', value: 4.2, notes: ['+27% Y/Y', 'Commissions, payments, insurance'] },
        { id: 'agency', label: 'Agency', value: 1.8, notes: ['(4%) Y/Y'] },
        { id: 'advertising_other', label: 'Advertising & Other', value: 0.3, notes: ['+14% Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: {
        label: 'Cost of revenue',
        value: 0,
        notes: ['The source infographic folds costs into the operating-expenses waterfall and does not display a gross-profit stage.'],
      },
      operatingExpenses: {
        total: 4.3,
        items: [
          { id: 'marketing', label: 'Marketing', value: 1.9 },
          { id: 'personnel', label: 'Personnel', value: 0.9 },
          { id: 'sales', label: 'Sales', value: 0.8 },
          { id: 'ga', label: 'G&A', value: 0.3 },
          { id: 'info_tech', label: 'Info Tech', value: 0.2 },
          { id: 'da', label: 'D&A', value: 0.2 },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.4 },
    },
    otherIncome: { total: 0, items: [] },
    otherExpenses: { total: 0.2, items: [{ id: 'other', label: 'Other', value: 0.2 }] },
    profit: {
      gross: { label: 'Gross profit', value: 6.3, notes: ['Not separately visualized in the source infographic.'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 2.0, notes: ['32% margin', '+0pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 1.4, notes: ['22% margin', '+3pp Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2025 财年第四季度',
        periodNote: '截至 2025 年 12 月 31 日的季度',
        revenue: {
          notes: ['同比 +16%'],
          items: [
            { id: 'merchant', label: '商户', notes: ['同比 +27%', '佣金、支付、保险'] },
            { id: 'agency', label: '代理', notes: ['同比 (4%)'] },
            { id: 'advertising_other', label: '广告及其他', notes: ['同比 +14%'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本', notes: ['来源信息图将成本并入运营费用瀑布图，未单列毛利润阶段。'] },
          operatingExpenses: {
            items: [
              { id: 'marketing', label: '营销' }, { id: 'personnel', label: '人员' },
              { id: 'sales', label: '销售' }, { id: 'ga', label: '管理费用' },
              { id: 'info_tech', label: '信息技术' }, { id: 'da', label: '折旧与摊销' },
            ],
          },
          tax: { id: 'tax', label: '税费' },
        },
        otherExpenses: { items: [{ id: 'other', label: '其他' }] },
        profit: {
          gross: { label: '毛利润', notes: ['来源信息图未单列。'] },
          operating: { label: '营业利润', notes: ['利润率 32%', '同比 +0 个百分点'] },
          net: { label: '净利润', notes: ['利润率 22%', '同比 +3 个百分点'] },
        },
      },
    },
  });

  ssot.records.push({
    key: 'booking-q1-fy26',
    company: 'Booking Holdings',
    period: 'Q1 FY26',
    periodNote: 'Quarter ended Mar. 31, 2026',
    currency: '$',
    unit: 'B',
    decimals: 3,
    sourceImage: 'input/processed/booking-q1-fy26.png',
    roundingTolerance: 0.2,
    revenue: {
      total: 5.5,
      notes: ['+16% Y/Y'],
      items: [
        { id: 'merchant', label: 'Merchant', value: 3.7, notes: ['+27% Y/Y', 'Commissions, payments, insurance'] },
        { id: 'agency', label: 'Agency', value: 1.5, notes: ['(2%) Y/Y'] },
        { id: 'advertising_other', label: 'Advertising & Other', value: 0.3, notes: ['+9% Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: {
        label: 'Cost of revenue',
        value: 0,
        notes: ['The source infographic folds costs into the operating-expenses waterfall and does not display a gross-profit stage.'],
      },
      operatingExpenses: {
        total: 4.3,
        items: [
          { id: 'marketing', label: 'Marketing', value: 2.1 },
          { id: 'personnel', label: 'Personnel', value: 0.9 },
          { id: 'sales', label: 'Sales', value: 0.9 },
          { id: 'info_tech', label: 'Info Tech', value: 0.2 },
          { id: 'ga', label: 'G&A', value: 0.1 },
          { id: 'da', label: 'D&A', value: 0.1 },
          { id: 'other_expense', label: 'Other', value: 0.025, valueText: '($25M)' },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.3 },
    },
    otherIncome: {
      total: 0.1,
      items: [{ id: 'other_income', label: 'Other', value: 0.1, notes: ['The source infographic displays this amount as €0.1B.'] }],
    },
    otherExpenses: { total: 0, items: [] },
    profit: {
      gross: { label: 'Gross profit', value: 5.5, notes: ['Not separately visualized in the source infographic.'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 1.3, notes: ['23% margin', '+1pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 1.1, notes: ['20% margin', '+13pp Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2026 财年第一季度',
        periodNote: '截至 2026 年 3 月 31 日的季度',
        revenue: {
          notes: ['同比 +16%'],
          items: [
            { id: 'merchant', label: '商户', notes: ['同比 +27%', '佣金、支付、保险'] },
            { id: 'agency', label: '代理', notes: ['同比 (2%)'] },
            { id: 'advertising_other', label: '广告及其他', notes: ['同比 +9%'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本', notes: ['来源信息图将成本并入运营费用瀑布图，未单列毛利润阶段。'] },
          operatingExpenses: {
            items: [
              { id: 'marketing', label: '营销' }, { id: 'personnel', label: '人员' },
              { id: 'sales', label: '销售' }, { id: 'info_tech', label: '信息技术' },
              { id: 'ga', label: '管理费用' }, { id: 'da', label: '折旧与摊销' },
              { id: 'other_expense', label: '其他' },
            ],
          },
          tax: { id: 'tax', label: '税费' },
        },
        otherIncome: { items: [{ id: 'other_income', label: '其他', notes: ['来源信息图将该金额显示为 €0.1B。'] }] },
        profit: {
          gross: { label: '毛利润', notes: ['来源信息图未单列。'] },
          operating: { label: '营业利润', notes: ['利润率 23%', '同比 +1 个百分点'] },
          net: { label: '净利润', notes: ['利润率 20%', '同比 +13 个百分点'] },
        },
      },
    },
  });
})(window);
