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
      key: 'robinhood-q1-fy26',
      company: 'Robinhood',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/robinhood-q1-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 1067,
        notes: ['+15% Y/Y'],
        items: [
          {
            id: 'transaction_based',
            label: 'Transaction-based',
            value: 623,
            notes: ['+7% Y/Y'],
            children: [
              { id: 'options', label: 'Options', value: 260, notes: ['+8% Y/Y'] },
              { id: 'crypto', label: 'Crypto', value: 134, notes: ['(47%) Y/Y'] },
              { id: 'equities', label: 'Equities', value: 82, notes: ['+46% Y/Y'] },
              { id: 'other_transactions', label: 'Other transactions', value: 147, notes: ['+320% Y/Y'] },
            ],
          },
          { id: 'net_interest', label: 'Net interest', value: 359, notes: ['+24% Y/Y'] },
          { id: 'other_revenue', label: 'Other revenue', value: 85, notes: ['+57% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { label: 'Cost of revenue', value: 0, notes: ['No cost-of-revenue subtotal is shown in the source chart.'] },
        operatingExpenses: {
          total: 656,
          items: [
            { id: 'technology_development', label: 'Technology & development', value: 241 },
            { id: 'ga', label: 'G&A', value: 174 },
            { id: 'marketing', label: 'Marketing', value: 107 },
            { id: 'operations', label: 'Operations', value: 74, notes: ['Source chart aggregates operations and provision for credit losses.'] },
            { id: 'brokerage_transaction', label: 'Brokerage & transaction', value: 60 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 65 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { label: 'Revenue before operating expenses', value: 1067 },
        operating: { id: 'pretax_income', label: 'Pretax income', value: 411 },
        net: { id: 'net_profit', label: 'Net income', value: 346 },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +15%'],
            items: [
              {
                id: 'transaction_based', label: '交易收入', notes: ['同比 +7%'],
                children: [
                  { id: 'options', label: '期权', notes: ['同比 +8%'] },
                  { id: 'crypto', label: '加密资产', notes: ['同比 (47%)'] },
                  { id: 'equities', label: '股票', notes: ['同比 +46%'] },
                  { id: 'other_transactions', label: '其他交易', notes: ['同比 +320%'] },
                ],
              },
              { id: 'net_interest', label: '净利息', notes: ['同比 +24%'] },
              { id: 'other_revenue', label: '其他收入', notes: ['同比 +57%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本', notes: ['来源图未显示收入成本小计。'] },
            operatingExpenses: {
              items: [
                { id: 'technology_development', label: '技术与开发' },
                { id: 'ga', label: '管理费用' },
                { id: 'marketing', label: '市场营销' },
                { id: 'operations', label: '运营', notes: ['来源图汇总了运营费用和信用损失拨备。'] },
                { id: 'brokerage_transaction', label: '经纪与交易' },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '运营费用前收入' },
            operating: { label: '税前利润' },
            net: { label: '净利润' },
          },
        },
      },
    }
  );
})(window);
