/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/<dataset-key>.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'verizon-q4-fy25',
    company: 'Verizon',
    period: 'Q4 FY25',
    periodNote: 'Quarter ended Dec. 31, 2025',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/verizon-q4-fy25.png',
    roundingTolerance: 0.15,
    revenue: {
      total: 36.4,
      notes: ['+2% Y/Y'],
      items: [
        {
          id: 'consumer',
          label: 'Consumer',
          value: 28.4,
          notes: ['+3% Y/Y'],
          children: [
            { id: 'service', label: 'Service', value: 20.2, notes: ['+1% Y/Y'] },
            { id: 'wireless_equipment', label: 'Wireless Equipment', value: 7.1, notes: ['+10% Y/Y'] },
            { id: 'other_consumer', label: 'Other', value: 1.1, notes: ['+7% Y/Y'] },
          ],
        },
        {
          id: 'business',
          label: 'Business',
          value: 7.4,
          notes: ['(2%) Y/Y'],
          children: [
            { id: 'enterprise_public_sector', label: 'Enterprise & Public Sector', value: 3.3, notes: ['(6%) Y/Y'] },
            { id: 'business_markets_saas', label: 'Business Markets & SaaS', value: 3.6, notes: ['+6% Y/Y'] },
            { id: 'wholesale', label: 'Wholesale', value: 0.5, notes: ['(10%) Y/Y'] },
          ],
        },
        { id: 'corporate', label: 'Corporate', value: 0.6, notes: ['(6%) Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 16.5 },
      operatingExpenses: {
        total: 14.9,
        items: [
          { id: 'sga', label: 'SG&A', value: 10.4 },
          { id: 'depreciation_amortization', label: 'Depreciation & Amortization', value: 4.5 },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.6 },
    },
    otherExpenses: {
      total: 2.0,
      items: [
        { id: 'interest', label: 'Interest', value: 1.8 },
        { id: 'other', label: 'Other', value: 0.2 },
      ],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 19.9, notes: ['55% margin', '(2pp) Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 5.0, notes: ['14% margin', '(7pp) Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 2.4, notes: ['7% margin', '(8pp) Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2025 财年第四季度',
        periodNote: '截至 2025 年 12 月 31 日的季度',
        revenue: {
          notes: ['同比 +2%'],
          items: [
            {
              id: 'consumer', label: '消费者', notes: ['同比 +3%'],
              children: [
                { id: 'service', label: '服务', notes: ['同比 +1%'] },
                { id: 'wireless_equipment', label: '无线设备', notes: ['同比 +10%'] },
                { id: 'other_consumer', label: '其他', notes: ['同比 +7%'] },
              ],
            },
            {
              id: 'business', label: '商业', notes: ['同比 (2%)'],
              children: [
                { id: 'enterprise_public_sector', label: '企业及公共部门', notes: ['同比 (6%)'] },
                { id: 'business_markets_saas', label: '商业市场及 SaaS', notes: ['同比 +6%'] },
                { id: 'wholesale', label: '批发', notes: ['同比 (10%)'] },
              ],
            },
            { id: 'corporate', label: '公司及其他', notes: ['同比 (6%)'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: { items: [
            { id: 'sga', label: '销售、一般及管理费用' },
            { id: 'depreciation_amortization', label: '折旧与摊销' },
          ] },
          tax: { label: '税费' },
        },
        otherExpenses: { items: [{ id: 'interest', label: '利息' }, { id: 'other', label: '其他' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 55%', '同比 (2 个百分点)'] },
          operating: { label: '营业利润', notes: ['利润率 14%', '同比 (7 个百分点)'] },
          net: { label: '净利润', notes: ['利润率 7%', '同比 (8 个百分点)'] },
        },
      },
    },
  });
})(window);
