/* Pure income-statement SSOT records. Sankey geometry stays in data/datasets/. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push(
    {
      key: 'bank-of-america-q4-fy25',
      company: 'Bank of America',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/bank-of-america-q4-fy25.png',
      roundingTolerance: 0.2,
      revenue: {
        total: 28.4,
        notes: [
          '+7% Y/Y',
          'Business-segment revenue totals $29.3B before the $1.0B All Other noninterest loss; displayed figures are rounded.',
        ],
        items: [
          { id: 'consumer_banking', label: ['Consumer', 'Banking'], value: 11.2, notes: ['+5% Y/Y', '29% net margin'] },
          { id: 'global_wealth_investment_management', label: ['Global Wealth &', 'Investment Management'], value: 6.6, notes: ['+10% Y/Y', '21% net margin'] },
          { id: 'global_banking', label: 'Global Banking', value: 6.2, notes: ['+2% Y/Y', '33% net margin'] },
          { id: 'global_markets', label: 'Global Markets', value: 5.3, notes: ['+10% Y/Y', '19% net margin'] },
          { id: 'all_other', label: ['All Other', '(noninterest loss)'], value: -1.0 },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'noninterest_expenses',
          label: 'Noninterest expenses',
          value: 17.4,
          notes: ['Expense detail totals $17.5B because the source rounds individual line items.'],
          items: [
            { id: 'compensation_benefits', label: 'Compensation & benefits', value: 10.6 },
            { id: 'occupancy', label: 'Occupancy', value: 1.9 },
            { id: 'information_processing', label: 'Information processing', value: 1.9 },
            { id: 'product_delivery', label: 'Product delivery', value: 1.0 },
            { id: 'professional_fees', label: 'Professional fees', value: 0.7 },
            { id: 'marketing', label: 'Marketing', value: 0.6 },
            { id: 'other_expenses', label: 'Other', value: 0.8 },
          ],
        },
        operatingExpenses: {
          total: 1.3,
          notes: ['Mapped to the operating-expenses schema slot for the source chart’s provision for credit losses.'],
          items: [{ id: 'operating_expenses', label: 'Provision for credit losses', value: 1.3 }],
        },
        tax: { id: 'tax', label: 'Tax', value: 2.0 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: {
          label: 'Income after noninterest expenses',
          value: 11.0,
          notes: ['Schema adapter subtotal; the source chart does not show a separate gross-profit node.'],
        },
        operating: { id: 'pretax_income', label: 'Pretax income', value: 9.6 },
        net: { id: 'net_income', label: 'Net income', value: 7.6, notes: ['+12% Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +7%', '业务分部收入合计 $29.3B，扣除 $1.0B 的其他非利息亏损；图中数字经四舍五入。'],
            items: [
              { id: 'consumer_banking', label: '消费者银行', notes: ['同比 +5%', '净利率 29%'] },
              { id: 'global_wealth_investment_management', label: '全球财富与投资管理', notes: ['同比 +10%', '净利率 21%'] },
              { id: 'global_banking', label: '全球银行', notes: ['同比 +2%', '净利率 33%'] },
              { id: 'global_markets', label: '全球市场', notes: ['同比 +10%', '净利率 19%'] },
              { id: 'all_other', label: '其他（非利息亏损）' },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '非利息费用',
              notes: ['费用明细因项目取整合计为 $17.5B。'],
              items: [
                { id: 'compensation_benefits', label: '薪酬与福利' },
                { id: 'occupancy', label: '场地占用' },
                { id: 'information_processing', label: '信息处理' },
                { id: 'product_delivery', label: '产品交付' },
                { id: 'professional_fees', label: '专业费用' },
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
            operating: { label: '税前利润' },
            net: { label: '净利润', notes: ['同比 +12%'] },
          },
        },
      },
    },
    {
      key: 'bank-of-america-q1-fy26',
      company: 'Bank of America',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/bank-of-america-q1-fy26.png',
      roundingTolerance: 0.2,
      revenue: {
        total: 30.3,
        notes: [
          '+7% Y/Y',
          'Business-segment revenue totals $31.1B before the $0.9B All Other noninterest loss; displayed figures are rounded.',
        ],
        items: [
          { id: 'consumer_banking', label: ['Consumer', 'Banking'], value: 11.0, notes: ['+5% Y/Y', '28% net margin'] },
          { id: 'global_wealth_investment_management', label: ['Global Wealth &', 'Investment Management'], value: 6.7, notes: ['+12% Y/Y', '20% net margin'] },
          { id: 'global_banking', label: 'Global Banking', value: 6.3, notes: ['+5% Y/Y', '33% net margin'] },
          { id: 'global_markets', label: 'Global Markets', value: 7.1, notes: ['+8% Y/Y', '28% net margin'] },
          { id: 'all_other', label: ['All Other', '(noninterest loss)'], value: -0.9 },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'noninterest_expenses',
          label: 'Noninterest expenses',
          value: 18.5,
          notes: ['Expense detail totals $18.4B because the source rounds individual line items.'],
          items: [
            { id: 'compensation_benefits', label: 'Compensation & benefits', value: 11.3 },
            { id: 'information_processing', label: 'Information processing', value: 2.0 },
            { id: 'occupancy', label: 'Occupancy', value: 1.9 },
            { id: 'product_delivery', label: 'Product delivery', value: 1.1 },
            { id: 'professional_fees', label: 'Professional fees', value: 0.6 },
            { id: 'marketing', label: 'Marketing', value: 0.5 },
            { id: 'other_expenses', label: 'Other', value: 1.0 },
          ],
        },
        operatingExpenses: {
          total: 1.3,
          notes: ['Mapped to the operating-expenses schema slot for the source chart’s provision for credit losses.'],
          items: [{ id: 'operating_expenses', label: 'Provision for credit losses', value: 1.3 }],
        },
        tax: { id: 'tax', label: 'Tax', value: 1.8 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: {
          label: 'Income after noninterest expenses',
          value: 11.8,
          notes: ['Schema adapter subtotal; the source chart does not show a separate gross-profit node.'],
        },
        operating: { id: 'pretax_income', label: 'Pretax income', value: 10.4 },
        net: { id: 'net_income', label: 'Net income', value: 8.6, notes: ['+17% Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +7%', '业务分部收入合计 $31.1B，扣除 $0.9B 的其他非利息亏损；图中数字经四舍五入。'],
            items: [
              { id: 'consumer_banking', label: '消费者银行', notes: ['同比 +5%', '净利率 28%'] },
              { id: 'global_wealth_investment_management', label: '全球财富与投资管理', notes: ['同比 +12%', '净利率 20%'] },
              { id: 'global_banking', label: '全球银行', notes: ['同比 +5%', '净利率 33%'] },
              { id: 'global_markets', label: '全球市场', notes: ['同比 +8%', '净利率 28%'] },
              { id: 'all_other', label: '其他（非利息亏损）' },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '非利息费用',
              notes: ['费用明细因项目取整合计为 $18.4B。'],
              items: [
                { id: 'compensation_benefits', label: '薪酬与福利' },
                { id: 'information_processing', label: '信息处理' },
                { id: 'occupancy', label: '场地占用' },
                { id: 'product_delivery', label: '产品交付' },
                { id: 'professional_fees', label: '专业费用' },
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
            operating: { label: '税前利润' },
            net: { label: '净利润', notes: ['同比 +17%'] },
          },
        },
      },
    }
  );
})(window);
