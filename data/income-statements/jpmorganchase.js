/* Pure income-statement SSOT. Sankey geometry stays in data/datasets/. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push(
    {
      key: 'jpmorganchase-q4-fy25',
      company: 'JPMorganChase',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/jpmorganchase-q4-fy25.png',
      roundingTolerance: 0.2,
      revenue: {
        total: 45.8,
        notes: [
          '+7% Y/Y',
          'Business-segment net revenue totals $46.8B before the $1.0B adjustment; displayed figures are rounded.',
        ],
        items: [
          { id: 'consumer_community_banking', label: ['Consumer &', 'Community', 'Banking'], value: 19.4, notes: ['+6% Y/Y', '19% net margin'] },
          { id: 'commercial_investment_bank', label: ['Commercial &', 'Investment Bank'], value: 19.4, notes: ['+10% Y/Y', '38% net margin'] },
          { id: 'asset_wealth_management', label: ['Asset & Wealth', 'Management'], value: 6.5, notes: ['+13% Y/Y', '28% net margin'] },
          { id: 'corporate', label: 'Corporate', value: 1.5, notes: ['(26%) Y/Y', '21% net margin'] },
          { id: 'adjustments', label: 'Adjustments', value: -1.0 },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'noninterest_expenses',
          label: 'Noninterest expenses',
          value: 24.0,
          items: [
            { id: 'compensation_benefits', label: 'Compensation & benefits', value: 13.1 },
            { id: 'occupancy', label: 'Occupancy', value: 1.5 },
            { id: 'technology_communications', label: ['Technology', 'communications'], value: 2.9 },
            { id: 'professional_services', label: ['Professional', 'services'], value: 3.3 },
            { id: 'marketing', label: 'Marketing', value: 1.5 },
            { id: 'other_expenses', label: 'Other', value: 1.7 },
          ],
        },
        operatingExpenses: {
          total: 4.7,
          notes: ['Mapped to the operating-expenses schema slot for the source chart’s provision for credit losses.'],
          items: [{ id: 'operating_expenses', label: 'Provision for credit losses', value: 4.7 }],
        },
        tax: { id: 'tax', label: 'Tax', value: 4.1 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: {
          label: 'Income after noninterest expenses',
          value: 21.8,
          notes: ['Schema adapter subtotal; the source chart does not show a separate gross-profit node.'],
        },
        operating: {
          id: 'pretax_income',
          label: 'Pretax income',
          value: 17.2,
          notes: ['Source amounts are rounded to the nearest tenth of a billion.'],
        },
        net: { id: 'net_income', label: 'Net income', value: 13.0, notes: ['(7%) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +7%', '业务分部净收入合计为 $46.8B，扣除 $1.0B 调整项后为 $45.8B；图中数字经四舍五入。'],
            items: [
              { id: 'consumer_community_banking', label: '消费者与社区银行', notes: ['同比 +6%', '净利率 19%'] },
              { id: 'commercial_investment_bank', label: '商业与投资银行', notes: ['同比 +10%', '净利率 38%'] },
              { id: 'asset_wealth_management', label: '资产与财富管理', notes: ['同比 +13%', '净利率 28%'] },
              { id: 'corporate', label: '公司业务', notes: ['同比 (26%)', '净利率 21%'] },
              { id: 'adjustments', label: '调整项' },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '非利息费用',
              items: [
                { id: 'compensation_benefits', label: '薪酬与福利' },
                { id: 'occupancy', label: '场地占用' },
                { id: 'technology_communications', label: '技术与通信' },
                { id: 'professional_services', label: '专业服务' },
                { id: 'marketing', label: '市场营销' },
                { id: 'other_expenses', label: '其他' },
              ],
            },
            operatingExpenses: {
              notes: ['映射到通用 schema 的营业费用槽位，对应来源图的信用损失拨备。'],
              items: [{ id: 'operating_expenses', label: '信用损失拨备' }],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '扣除非利息费用后的收入', notes: ['Schema 适配小计；来源图未显示独立的毛利润节点。'] },
            operating: { label: '税前利润', notes: ['来源金额四舍五入至十亿美元的小数点后一位。'] },
            net: { label: '净利润', notes: ['同比 (7%)'] },
          },
        },
      },
    },
    {
      key: 'jpmorganchase-q1-fy26',
      company: 'JPMorganChase',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/jpmorganchase-q1-fy26.png',
      roundingTolerance: 0.2,
      revenue: {
        total: 49.8,
        notes: [
          '+10% Y/Y',
          'Business-segment net revenue totals $50.6B before the $0.7B adjustment; displayed figures are rounded.',
        ],
        items: [
          { id: 'consumer_community_banking', label: ['Consumer &', 'Community', 'Banking'], value: 19.6, notes: ['+7% Y/Y', '25% net margin'] },
          { id: 'commercial_investment_bank', label: ['Commercial &', 'Investment Bank'], value: 23.4, notes: ['+19% Y/Y', '39% net margin'] },
          { id: 'asset_wealth_management', label: ['Asset & Wealth', 'Management'], value: 6.4, notes: ['+11% Y/Y', '28% net margin'] },
          { id: 'corporate', label: 'Corporate', value: 1.2, notes: ['(47%) Y/Y', '58% net margin'] },
          { id: 'adjustments', label: 'Adjustments', value: -0.7 },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'noninterest_expenses',
          label: 'Noninterest expenses',
          value: 26.9,
          items: [
            { id: 'compensation_benefits', label: 'Compensation & benefits', value: 15.3 },
            { id: 'occupancy', label: 'Occupancy', value: 1.4 },
            { id: 'technology_communications', label: ['Technology,', 'communications'], value: 3.0 },
            { id: 'professional_services', label: ['Professional', 'services'], value: 3.5 },
            { id: 'marketing', label: 'Marketing', value: 1.6 },
            { id: 'other_expenses', label: 'Other', value: 2.0 },
          ],
        },
        operatingExpenses: {
          total: 2.5,
          notes: ['Mapped to the operating-expenses schema slot for the source chart’s provision for credit losses.'],
          items: [{ id: 'operating_expenses', label: 'Provision for credit losses', value: 2.5 }],
        },
        tax: { id: 'tax', label: 'Tax', value: 4.0 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: {
          label: 'Income after noninterest expenses',
          value: 22.9,
          notes: ['Schema adapter subtotal; the source chart does not show a separate gross-profit node.'],
        },
        operating: {
          id: 'pretax_income',
          label: 'Pretax income',
          value: 20.5,
          notes: ['Source amounts are rounded to the nearest tenth of a billion.'],
        },
        net: { id: 'net_income', label: 'Net income', value: 16.5, notes: ['+13% Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +10%', '业务分部净收入合计为 $50.6B，扣除 $0.7B 调整项后为 $49.8B；图中数字经四舍五入。'],
            items: [
              { id: 'consumer_community_banking', label: '消费者与社区银行', notes: ['同比 +7%', '净利率 25%'] },
              { id: 'commercial_investment_bank', label: '商业与投资银行', notes: ['同比 +19%', '净利率 39%'] },
              { id: 'asset_wealth_management', label: '资产与财富管理', notes: ['同比 +11%', '净利率 28%'] },
              { id: 'corporate', label: '公司业务', notes: ['同比 (47%)', '净利率 58%'] },
              { id: 'adjustments', label: '调整项' },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '非利息费用',
              items: [
                { id: 'compensation_benefits', label: '薪酬与福利' },
                { id: 'occupancy', label: '场地占用' },
                { id: 'technology_communications', label: '技术与通信' },
                { id: 'professional_services', label: '专业服务' },
                { id: 'marketing', label: '市场营销' },
                { id: 'other_expenses', label: '其他' },
              ],
            },
            operatingExpenses: {
              notes: ['映射到通用 schema 的营业费用槽位，对应来源图的信用损失拨备。'],
              items: [{ id: 'operating_expenses', label: '信用损失拨备' }],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '扣除非利息费用后的收入', notes: ['Schema 适配小计；来源图未显示独立的毛利润节点。'] },
            operating: { label: '税前利润', notes: ['来源金额四舍五入至十亿美元的小数点后一位。'] },
            net: { label: '净利润', notes: ['同比 +13%'] },
          },
        },
      },
    }
  );
})(window);
