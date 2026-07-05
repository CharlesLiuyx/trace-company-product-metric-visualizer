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
      key: 'klarna-q1-fy26',
      company: 'Klarna',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/klarna-q1-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 1012,
        notes: ['+44% Y/Y'],
        items: [
          { id: 'transaction_revenue', label: 'Transaction revenue', value: 671, notes: ['+29% Y/Y'] },
          { id: 'interest', label: 'Interest', value: 284, notes: ['+56% Y/Y'] },
          { id: 'consumer_revenue', label: 'Consumer Revenue', value: 57, notes: ['New Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          label: 'Transaction margin costs',
          value: 623,
          notes: ['Source chart presents these costs as the bridge from revenue to transaction margin dollars.'],
          items: [
            { id: 'processing_servicing_costs', label: 'Processing and servicing costs', value: 266 },
            { id: 'provision_credit_losses', label: 'Provision for credit losses', value: 186 },
            { id: 'funding_costs', label: 'Funding costs', value: 171 },
          ],
        },
        operatingExpenses: {
          total: 372,
          items: [
            { id: 'tech_product_development', label: 'Tech & product development', value: 129 },
            { id: 'sales_marketing', label: 'Sales & marketing', value: 105 },
            { id: 'general_administrative', label: 'General & administrative', value: 81 },
            { id: 'customer_service_operations', label: 'Customer service & operations', value: 55 },
            { id: 'other_operating_expense', label: 'Other', value: 2 },
          ],
        },
        tax: { label: 'Tax', value: 0, notes: ['No separate tax line is shown in the source chart.'] },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 16,
        items: [{ id: 'other', label: 'Other', value: 16 }],
      },
      profit: {
        gross: {
          id: 'transaction_margin',
          label: 'Transaction margin dollars',
          value: 389,
          notes: ['+44% Y/Y'],
        },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 17, notes: ['1% margin', '+6pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1, notes: ['0% margin', '+6pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +44%'],
            items: [
              { label: '交易收入', notes: ['同比 +29%'] },
              { label: '利息', notes: ['同比 +56%'] },
              { label: '消费者收入', notes: ['同比新增'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '交易毛利成本',
              notes: ['源图将这些成本列为从收入到交易毛利额的桥接项目。'],
              items: [
                { label: '处理和服务成本' },
                { label: '信用损失准备金' },
                { label: '融资成本' },
              ],
            },
            operatingExpenses: {
              items: [
                { label: '技术与产品开发' },
                { label: '销售与营销' },
                { label: '一般及行政' },
                { label: '客服与运营' },
                { label: '其他' },
              ],
            },
            tax: { label: '税费', notes: ['源图未显示单独的税费项目。'] },
          },
          otherExpenses: {
            items: [{ label: '其他' }],
          },
          profit: {
            gross: { label: '交易毛利额', notes: ['同比 +44%'] },
            operating: { label: '营业利润', notes: ['利润率 1%', '同比 +6 个百分点'] },
            net: { label: '净利润', notes: ['利润率 0%', '同比 +6 个百分点'] },
          },
        },
      },
    }
  );
})(window);
