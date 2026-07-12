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
      key: 'goldman-sachs-q1-fy26',
      company: 'Goldman Sachs',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/goldman-sachs-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 17.2,
        notes: ['+14% Y/Y'],
        items: [
          { id: 'global_banking_markets', label: 'Global Banking & Markets', value: 12.7, notes: ['+19% Y/Y', '37% net margin'] },
          { id: 'asset_wealth_management', label: 'Asset & Wealth Management', value: 4.1, notes: ['+10% Y/Y', '20% net margin'] },
          { id: 'platform_solutions', label: 'Platform Solutions', value: 0.4, notes: ['(33%) Y/Y', '16% net margin'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'provision_for_credit_loss',
          label: 'Provision for credit loss',
          value: 0.3,
          notes: ['Modeled as a pre-pretax cost so the generic SSOT arithmetic matches the banking source chart.'],
        },
        operatingExpenses: {
          total: 10.4,
          notes: ['Operating expense line items sum to $10.5B because the source chart rounds each item.'],
          items: [
            { id: 'compensation_benefits', label: 'Compensation & benefits', value: 5.4 },
            { id: 'transaction_based', label: 'Transaction based', value: 2.5 },
            { id: 'market_development', label: 'Market development', value: 0.2 },
            { id: 'communication_technology', label: 'Communication, Technology', value: 0.6 },
            { id: 'da', label: 'D&A', value: 0.5 },
            { id: 'occupancy', label: 'Occupancy', value: 0.3 },
            { id: 'professional_fees', label: 'Professional fees', value: 0.4 },
            { id: 'other', label: 'Other', value: 0.6 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.9 },
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
          id: 'gross_profit',
          label: 'Revenue after credit loss provision',
          value: 16.9,
          notes: ['Balancing subtotal; not labeled separately in the source chart.'],
        },
        operating: { id: 'pretax_income', label: 'Pretax income', value: 6.5 },
        net: { id: 'net_income', label: 'Net income', value: 5.6, notes: ['+19% Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +14%'],
            items: [
              { id: 'global_banking_markets', label: '全球银行与市场', notes: ['同比 +19%', '净利率 37%'] },
              { id: 'asset_wealth_management', label: '资产与财富管理', notes: ['同比 +10%', '净利率 20%'] },
              { id: 'platform_solutions', label: '平台解决方案', notes: ['同比 (33%)', '净利率 16%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '信用损失拨备', notes: ['建模为税前利润前成本，使通用 SSOT 计算与银行业来源图匹配。'] },
            operatingExpenses: {
              items: [
                { id: 'compensation_benefits', label: '薪酬与福利' },
                { id: 'transaction_based', label: '交易相关' },
                { id: 'market_development', label: '市场开发' },
                { id: 'communication_technology', label: '通信与技术' },
                { id: 'da', label: '折旧与摊销' },
                { id: 'occupancy', label: '场地占用' },
                { id: 'professional_fees', label: '专业费用' },
                { id: 'other', label: '其他' },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '扣除信用损失拨备后的收入', notes: ['平衡小计；来源图未单独标注。'] },
            operating: { label: '税前利润' },
            net: { label: '净利润', notes: ['同比 +19%'] },
          },
        },
      },
    }
  );

  ssot.records.push(
    {
      key: 'goldman-sachs-q4-fy25',
      company: 'Goldman Sachs',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/goldman-sachs-q4-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 13.5,
        notes: ['(3%) Y/Y'],
        items: [
          { id: 'global_banking_markets', label: 'Global Banking & Markets', value: 10.4, notes: ['+22% Y/Y', '34% net margin'] },
          { id: 'asset_wealth_management', label: 'Asset & Wealth Management', value: 4.7, notes: ['(1%) Y/Y', '20% net margin'] },
          { id: 'platform_solutions', label: 'Platform Solutions', value: -1.7, notes: ['(7%) net margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 0 },
        operatingExpenses: {
          total: 9.7,
          items: [
            { id: 'compensation_benefits', label: 'Compensation & benefits', value: 4.7 },
            { id: 'transaction_based', label: 'Transaction based', value: 2.2 },
            { id: 'market_development', label: 'Market development', value: 0.2 },
            { id: 'communication_technology', label: 'Communication, Technology', value: 0.6 },
            { id: 'da', label: 'D&A', value: 0.5 },
            { id: 'occupancy', label: 'Occupancy', value: 0.2 },
            { id: 'professional_fees', label: 'Professional fees', value: 0.5 },
            { id: 'other', label: 'Other', value: 0.8 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 1.2 },
      },
      operatingOtherIncome: {
        total: 2.1,
        items: [
          {
            id: 'provision_for_credit_loss',
            label: 'Provision for credit loss',
            value: 2.1,
            notes: ['The source depicts this as a green inflow to pretax income; retained as an operating-stage adjustment.'],
          },
        ],
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: {
          id: 'gross_profit',
          label: 'Revenue before operating expenses',
          value: 13.5,
          notes: ['Balancing subtotal; not labeled separately in the source chart.'],
        },
        operating: { id: 'pretax_income', label: 'Pretax income', value: 5.9 },
        net: { id: 'net_income', label: 'Net income', value: 4.6, notes: ['+12% Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 (3%)'],
            items: [
              { id: 'global_banking_markets', label: '全球银行与市场', notes: ['同比 +22%', '净利率 34%'] },
              { id: 'asset_wealth_management', label: '资产与财富管理', notes: ['同比 (1%)', '净利率 20%'] },
              { id: 'platform_solutions', label: '平台解决方案', notes: ['净利率 (7%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'compensation_benefits', label: '薪酬与福利' },
                { id: 'transaction_based', label: '交易相关' },
                { id: 'market_development', label: '市场开发' },
                { id: 'communication_technology', label: '通信与技术' },
                { id: 'da', label: '折旧与摊销' },
                { id: 'occupancy', label: '场地占用' },
                { id: 'professional_fees', label: '专业费用' },
                { id: 'other', label: '其他' },
              ],
            },
            tax: { label: '税费' },
          },
          operatingOtherIncome: {
            items: [{ id: 'provision_for_credit_loss', label: '信用损失拨备', notes: ['来源图将其绘制为流入税前利润的绿色经营阶段调整项。'] }],
          },
          profit: {
            gross: { label: '扣除运营费用前收入', notes: ['平衡小计；来源图未单独标注。'] },
            operating: { label: '税前利润' },
            net: { label: '净利润', notes: ['同比 +12%'] },
          },
        },
      },
    }
  );
})(window);
