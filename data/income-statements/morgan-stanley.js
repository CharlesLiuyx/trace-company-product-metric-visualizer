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
      key: 'morgan-stanley-q1-fy26',
      company: 'Morgan Stanley',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/morgan-stanley-q1-fy26.png',
      roundingTolerance: 0.2,
      revenue: {
        total: 20.6,
        notes: ['+16% Y/Y', 'Segment revenue detail sums to $20.7B due to rounded segment figures.'],
        items: [
          {
            id: 'institutional_securities',
            label: 'Institutional Securities',
            value: 10.7,
            notes: ['+19% Y/Y', '31% net margin'],
          },
          {
            id: 'wealth_management',
            label: 'Wealth Management',
            value: 8.5,
            notes: ['+16% Y/Y', '24% net margin'],
          },
          {
            id: 'investment_management',
            label: 'Investment Management',
            value: 1.5,
            notes: ['(4%) Y/Y', '16% net margin'],
          },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'non_interest_expenses',
          label: 'Noninterest expenses',
          value: 13.5,
          notes: ['Noninterest expense detail sums to $13.4B due to rounded line items.'],
          items: [
            { id: 'compensation_benefits', label: 'Compensation & benefits', value: 8.5 },
            { id: 'brokerage_clearing_exchange', label: 'Brokerage, clearing & exchange fees', value: 1.3 },
            { id: 'information_communications', label: 'Information & communications', value: 1.1 },
            { id: 'professional_services', label: 'Professional services', value: 0.6 },
            { id: 'occupancy', label: 'Occupancy', value: 0.5 },
            { id: 'marketing_business_development', label: 'Marketing & business development', value: 0.3 },
            { id: 'other_expenses', label: 'Other', value: 1.1 },
          ],
        },
        operatingExpenses: {
          total: 0.1,
          notes: ['Mapped to the existing operating-expenses schema slot for financial-institution credit-loss provision.'],
          items: [{ id: 'operating_expenses', label: 'Provision for credit loss', value: 0.1 }],
        },
        tax: { id: 'tax', label: 'Tax', value: 1.4 },
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
          id: 'pretax_income',
          label: 'Pre-provision pretax income',
          value: 7.1,
          notes: ['Schema adapter subtotal; source chart labels the displayed node as Pretax income.'],
        },
        operating: { id: 'pretax_income', label: 'Pretax income', value: 7.0 },
        net: { id: 'net_income', label: 'Net income', value: 5.6, notes: ['+29% Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +16%', 'Segment 收入 detail sums to $20.7B due to rounded segment figures.'],
            items: [
              { id: 'institutional_securities', label: '机构证券', notes: ['同比 +19%', '净利率 31%'] },
              { id: 'wealth_management', label: '财富管理', notes: ['同比 +16%', '净利率 24%'] },
              { id: 'investment_management', label: '投资管理', notes: ['同比 (4%)', '净利率 16%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '非利息费用',
              notes: ['非利息费用明细因项目取整合计为 $13.4B。'],
              items: [
                { id: 'compensation_benefits', label: '薪酬与福利' },
                { id: 'brokerage_clearing_exchange', label: '经纪、清算与交易所费用' },
                { id: 'information_communications', label: '信息与通信' },
                { id: 'professional_services', label: '专业服务' },
                { id: 'occupancy', label: '场地占用' },
                { id: 'marketing_business_development', label: '市场与业务开发' },
                { id: 'other_expenses', label: '其他' },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'operating_expenses', label: '信用损失拨备' },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '拨备前税前利润', notes: ['Schema 适配小计；来源图将显示节点标为税前利润。'] },
            operating: { label: '税前利润' },
            net: { label: '净利润', notes: ['同比 +29%'] },
          },
        },
      },
    }
  );
})(window);
