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
      key: 'american-express-q1-fy26',
      company: 'American Express',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/american-express-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 18.9,
        notes: ['+11% Y/Y', 'Net of interest expenses'],
        items: [
          { id: 'us_consumer_services', label: 'US Consumer Services', value: 9.1, notes: ['+11% Y/Y', '19% pretax margin'] },
          { id: 'commercial_services', label: 'Commercial Services', value: 4.3, notes: ['+7% Y/Y', '19% pretax margin'] },
          { id: 'international_card_services', label: 'International Card Services', value: 3.5, notes: ['+20% Y/Y', '22% pretax margin'] },
          { id: 'global_merchant_network', label: 'Global Merchant & Network Service', value: 2.0, notes: ['+10% Y/Y', '56% pretax margin'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'provision_for_credit_losses',
          label: 'Provision for credit losses',
          value: 1.3,
          notes: ['Modeled as a pre-pretax cost so the generic SSOT arithmetic matches the banking source chart.'],
        },
        operatingExpenses: {
          total: 13.9,
          notes: ['Noninterest expense line items sum to $14.0B because the source chart rounds each item.'],
          items: [
            { id: 'card_members_rewards', label: 'Card members rewards', value: 4.9 },
            { id: 'business_development', label: 'Business development', value: 1.6 },
            { id: 'card_member_services', label: 'Card Member services', value: 2.0 },
            { id: 'marketing', label: 'Marketing', value: 1.5 },
            { id: 'sales_employee_benefits', label: 'Sales & employee benefits', value: 2.5 },
            { id: 'other_general_operating', label: 'Other general operating', value: 1.5 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.8 },
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
        gross: {
          label: 'Revenue after credit loss provision',
          value: 17.6,
          notes: ['Balancing subtotal; not labeled separately in the source chart.'],
        },
        operating: { id: 'pretax_income', label: 'Pretax income', value: 3.8 },
        net: { id: 'net_income', label: 'Net income', value: 3.0, notes: ['+10% Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +11%', '扣除利息支出后'],
            items: [
              { id: 'us_consumer_services', label: '美国消费者服务', notes: ['同比 +11%', '税前利润率 19%'] },
              { id: 'commercial_services', label: '商务服务', notes: ['同比 +7%', '税前利润率 19%'] },
              { id: 'international_card_services', label: '国际卡服务', notes: ['同比 +20%', '税前利润率 22%'] },
              { id: 'global_merchant_network', label: '全球商户与网络服务', notes: ['同比 +10%', '税前利润率 56%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '信用损失拨备', notes: ['建模为税前利润前成本，使通用 SSOT 计算与银行业来源图匹配。'] },
            operatingExpenses: {
              notes: ['非利息支出各分项因来源图逐项四舍五入，合计为 140 亿美元。'],
              items: [
                { id: 'card_members_rewards', label: '持卡人奖励' },
                { id: 'business_development', label: '业务拓展' },
                { id: 'card_member_services', label: '持卡人服务' },
                { id: 'marketing', label: '营销' },
                { id: 'sales_employee_benefits', label: '销售与员工福利' },
                { id: 'other_general_operating', label: '其他一般运营' },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '扣除信用损失拨备后的收入', notes: ['用于平衡的小计；来源图未单独标注。'] },
            operating: { label: '税前利润' },
            net: { label: '净利润', notes: ['同比 +10%'] },
          },
        },
      },
    }
  );
})(window);
