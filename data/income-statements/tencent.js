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
      key: 'tencent-q1-fy26',
      company: 'Tencent',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: 'RMB',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/tencent-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 196.5,
        notes: ['+9% Y/Y'],
        items: [
          { id: 'gaming', label: 'Gaming', value: 64.2, notes: ['+8% Y/Y'] },
          { id: 'social_networks', label: 'Social Networks', value: 31.9, notes: ['(2%) Y/Y'] },
          { id: 'marketing_services', label: 'Marketing Services', value: 38.2, notes: ['+20% Y/Y'] },
          { id: 'fintech_business_services', label: 'FinTech & Business Services', value: 59.9, notes: ['+9% Y/Y'] },
          { id: 'others', label: 'Others', value: 2.3, notes: ['+103% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 85.2 },
        operatingExpenses: {
          total: 43.9,
          notes: ['Source chart shows other operating gains as an offset before operating profit.'],
          items: [
            { id: 'rnd', label: 'Research & development', value: 22.6, notes: ['12% of revenue', '+1pp Y/Y'] },
            { id: 'sm', label: 'Sales & marketing', value: 11.3, notes: ['6% of revenue', '+1pp Y/Y'] },
            { id: 'ga', label: 'General & admin', value: 11.3, notes: ['6% of revenue', '(2pp) Y/Y'] },
            { id: 'other_operating_gains', label: 'Other operating gains', value: -1.3 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 14.6 },
      },
      otherIncome: {
        total: 6.6,
        items: [
          {
            id: 'investments',
            label: 'Investments',
            value: 6.6,
            notes: ['Aggregated non-operating investment, interest, finance, and associate/JV line items.'],
          },
        ],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 111.3, notes: ['57% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 67.4, notes: ['34% margin', '+2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 59.4, notes: ['30% margin', '+3pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +9%'],
            items: [
              { id: 'gaming', label: '游戏', notes: ['同比 +8%'] },
              { id: 'social_networks', label: '社交网络', notes: ['同比 (2%)'] },
              { id: 'marketing_services', label: '营销服务', notes: ['同比 +20%'] },
              { id: 'fintech_business_services', label: '金融科技与企业服务', notes: ['同比 +9%'] },
              { id: 'others', label: '其他', notes: ['同比 +103%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 12%', '同比 +1 个百分点'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 6%', '同比 +1 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 6%', '同比 (2 个百分点)'] },
                { id: 'other_operating_gains', label: '其他营业收益' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'investments', label: '投资收益', notes: ['汇总非经营性投资、利息、财务以及联营/JV 项目。'] },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 57%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 34%', '同比 +2 个百分点'] },
            net: { label: '净利润', notes: ['利润率 30%', '同比 +3 个百分点'] },
          },
        },
      },
    }
  );
})(window);
