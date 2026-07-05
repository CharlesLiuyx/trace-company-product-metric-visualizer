/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/<dataset-key>.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push(
    {
      key: 'amazon-q1-fy26',
      company: 'Amazon',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/amazon-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 181.5,
        notes: ['+17% Y/Y'],
        items: [
          { id: 'online_stores', label: 'Online Stores', value: 64.3, notes: ['+12% Y/Y'] },
          { id: 'physical_store', label: 'Physical Store', value: 5.8, notes: ['+5% Y/Y'] },
          {
            id: 'third_party_seller_services',
            label: '3rd party sellers services',
            value: 41.6,
            notes: ['+14% Y/Y'],
          },
          { id: 'advertising', label: 'Advertising', value: 17.2, notes: ['+24% Y/Y'] },
          { id: 'subscription', label: 'Subscription', value: 13.4, notes: ['+15% Y/Y'] },
          { id: 'aws', label: 'AWS', value: 37.6, notes: ['+28% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 1.6, notes: ['+25% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 87.5 },
        operatingExpenses: {
          total: 70.2,
          notes: ['Operating expense items sum to $70.3B because the source chart rounds each item.'],
          items: [
            { id: 'technology_content', label: 'Technology & content', value: 29.6, notes: ['16% of revenue', '+2pp Y/Y'] },
            { id: 'fulfillment', label: 'Fulfillment', value: 27.3, notes: ['15% of revenue', '(1pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 10.3, notes: ['6% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 2.6, notes: ['1% of revenue', '(0pp) Y/Y'] },
            { id: 'other_opex', label: 'Other opex', value: 0.5 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 9.6 },
      },
      otherIncome: {
        total: 16.0,
        items: [{ id: 'other_income', label: 'Other', value: 16.0 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 94.1, notes: ['52% margin', '+1pp Y/Y'] },
        operating: {
          id: 'operating_profit',
          label: 'Operating profit',
          value: 23.9,
          notes: ['13% margin', '+1pp Y/Y', 'AWS $14.2B', 'Other $9.7B'],
        },
        net: { id: 'net_profit', label: 'Net profit', value: 30.3, notes: ['17% margin', '+6pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +17%'],
            items: [
              { id: 'online_stores', label: '线上商店', notes: ['同比 +12%'] },
              { id: 'physical_store', label: '实体商店', notes: ['同比 +5%'] },
              { id: 'third_party_seller_services', label: '第三方卖家服务', notes: ['同比 +14%'] },
              { id: 'advertising', label: '广告', notes: ['同比 +24%'] },
              { id: 'subscription', label: '订阅', notes: ['同比 +15%'] },
              { id: 'aws', label: 'AWS', notes: ['同比 +28%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 +25%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              notes: ['运营费用项目合计为 $70.3B，因为来源图表对各项目做了四舍五入。'],
              items: [
                { id: 'technology_content', label: '技术与内容', notes: ['占收入 16%', '同比 +2 个百分点'] },
                { id: 'fulfillment', label: '履约', notes: ['占收入 15%', '同比 (1 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 6%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 1%', '同比 (0 个百分点)'] },
                { id: 'other_opex', label: '其他运营费用' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 52%', '同比 +1 个百分点'] },
            operating: {
              label: '营业利润',
              notes: ['利润率 13%', '同比 +1 个百分点', 'AWS 业务 $14.2B', '其他业务 $9.7B'],
            },
            net: { label: '净利润', notes: ['利润率 17%', '同比 +6 个百分点'] },
          },
        },
      },
    }
  );
})(window);
