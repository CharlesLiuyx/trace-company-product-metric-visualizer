/* Pure income-statement SSOT records. Sankey geometry stays in data/datasets/. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push(
    {
      key: 'wells-fargo-q2-fy26',
      company: 'Wells Fargo',
      period: 'Q2 FY26',
      periodNote: 'Ending Jun. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/wells-fargo-q2-fy26.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 22.6,
        notes: [
          '+9% Y/Y',
          'Business-segment revenue totals $22.7B before the $0.1B Other adjustment; displayed figures are rounded.',
        ],
        items: [
          { id: 'consumer_banking', label: ['Consumer', 'Banking'], value: 10.3, notes: ['+6% Y/Y', '22% net margin'] },
          { id: 'commercial_banking', label: ['Commercial', 'Banking'], value: 3.1, notes: ['+6% Y/Y', '38% net margin'] },
          { id: 'corporate_investment_banking', label: ['Corporate &', 'Investment', 'Banking'], value: 5.4, notes: ['+16% Y/Y', '43% net margin'] },
          { id: 'wealth_investment_management', label: ['Wealth &', 'Investment', 'Management'], value: 3.9, notes: ['+13% Y/Y', '14% net margin'] },
          { id: 'other', label: 'Other', value: -0.1, notes: ['Source chart displays the rounded magnitude without a sign.'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'noninterest_expenses',
          label: 'Noninterest expenses',
          value: 13.7,
          notes: ['Expense detail totals $13.8B because the source chart rounds each item.'],
          items: [
            { id: 'personnel', label: 'Personnel', value: 8.9 },
            { id: 'technology', label: 'Technology', value: 1.5 },
            { id: 'occupancy', label: 'Occupancy', value: 0.8 },
            { id: 'professional_fees', label: 'Professional fees', value: 1.1 },
            { id: 'advertising', label: 'Advertising', value: 0.4 },
            { id: 'other_expenses', label: 'Other', value: 1.1 },
          ],
        },
        operatingExpenses: {
          total: 0.9,
          notes: ['Mapped to the operating-expenses schema slot for the source chart’s provision for credit losses.'],
          items: [{ id: 'operating_expenses', label: 'Provision for credit losses', value: 0.9 }],
        },
        tax: { id: 'tax', label: 'Tax', value: 1.4 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: {
          label: 'Income after noninterest expenses',
          value: 8.9,
          notes: ['Schema adapter subtotal; the source chart does not show a separate gross-profit node.'],
        },
        operating: { id: 'pretax_income', label: 'Pretax income', value: 8.0 },
        net: { id: 'net_income', label: 'Net income', value: 6.6, notes: ['+20% Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月',
          revenue: {
            notes: ['同比 +9%', '业务分部收入合计 $22.7B，图中另列 $0.1B 的其他调整；图中数字经四舍五入。'],
            items: [
              { id: 'consumer_banking', label: '消费者银行', notes: ['同比 +6%', '净利率 22%'] },
              { id: 'commercial_banking', label: '商业银行', notes: ['同比 +6%', '净利率 38%'] },
              { id: 'corporate_investment_banking', label: '企业与投资银行', notes: ['同比 +16%', '净利率 43%'] },
              { id: 'wealth_investment_management', label: '财富与投资管理', notes: ['同比 +13%', '净利率 14%'] },
              { id: 'other', label: '其他', notes: ['来源图以不带符号的方式显示取整后的金额。'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '非利息费用',
              notes: ['费用明细合计为 $13.8B；图中数字经四舍五入。'],
              items: [
                { id: 'personnel', label: '人员费用' },
                { id: 'technology', label: '技术' },
                { id: 'occupancy', label: '场地占用' },
                { id: 'professional_fees', label: '专业服务费' },
                { id: 'advertising', label: '广告' },
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
            net: { label: '净利润', notes: ['同比 +20%'] },
          },
        },
      },
    },
    {
      key: 'wells-fargo-q1-fy26',
      company: 'Wells Fargo',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/wells-fargo-q1-fy26.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 21.4,
        notes: [
          '+6% Y/Y',
          'Business-segment revenue totals $22.3B before the $0.8B Other adjustment; displayed figures are rounded.',
        ],
        items: [
          { id: 'consumer_banking', label: ['Consumer', 'Banking'], value: 10.0, notes: ['+7% Y/Y', '19% net margin'] },
          { id: 'commercial_banking', label: ['Commercial', 'Banking'], value: 3.1, notes: ['+7% Y/Y', '33% net margin'] },
          { id: 'corporate_investment_banking', label: ['Corporate &', 'Investment', 'Banking'], value: 5.3, notes: ['+4% Y/Y', '34% net margin'] },
          { id: 'wealth_investment_management', label: ['Wealth &', 'Investment', 'Management'], value: 3.9, notes: ['+14% Y/Y', '12% net margin'] },
          { id: 'other', label: 'Other', value: -0.8, notes: ['Source chart displays the rounded magnitude without a sign.'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'noninterest_expenses',
          label: 'Noninterest expenses',
          value: 14.3,
          notes: ['Expense detail totals $14.4B because the source chart rounds each item.'],
          items: [
            { id: 'personnel', label: 'Personnel', value: 9.6 },
            { id: 'technology', label: 'Technology', value: 1.4 },
            { id: 'occupancy', label: 'Occupancy', value: 0.8 },
            { id: 'professional_fees', label: 'Professional fees', value: 1.1 },
            { id: 'advertising', label: 'Advertising', value: 0.4 },
            { id: 'other_expenses', label: 'Other', value: 1.1 },
          ],
        },
        operatingExpenses: {
          total: 1.1,
          notes: ['Mapped to the operating-expenses schema slot for the source chart’s provision for credit losses.'],
          items: [{ id: 'operating_expenses', label: 'Provision for credit losses', value: 1.1 }],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.7 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: {
          label: 'Income after noninterest expenses',
          value: 7.1,
          notes: ['Schema adapter subtotal; the source chart does not show a separate gross-profit node.'],
        },
        operating: { id: 'pretax_income', label: 'Pretax income', value: 6.0 },
        net: { id: 'net_income', label: 'Net income', value: 5.3, notes: ['+7% Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +6%', '业务分部收入合计 $22.3B，图中另列 $0.8B 的其他调整；图中数字经四舍五入。'],
            items: [
              { id: 'consumer_banking', label: '消费者银行', notes: ['同比 +7%', '净利率 19%'] },
              { id: 'commercial_banking', label: '商业银行', notes: ['同比 +7%', '净利率 33%'] },
              { id: 'corporate_investment_banking', label: '企业与投资银行', notes: ['同比 +4%', '净利率 34%'] },
              { id: 'wealth_investment_management', label: '财富与投资管理', notes: ['同比 +14%', '净利率 12%'] },
              { id: 'other', label: '其他', notes: ['来源图以不带符号的方式显示取整后的金额。'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '非利息费用',
              notes: ['费用明细合计为 $14.4B；图中数字经四舍五入。'],
              items: [
                { id: 'personnel', label: '人员费用' },
                { id: 'technology', label: '技术' },
                { id: 'occupancy', label: '场地占用' },
                { id: 'professional_fees', label: '专业服务费' },
                { id: 'advertising', label: '广告' },
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
            net: { label: '净利润', notes: ['同比 +7%'] },
          },
        },
      },
    },
    {
      key: 'wells-fargo-q4-fy25',
      company: 'Wells Fargo',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/wells-fargo-q4-fy25.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 21.3,
        notes: [
          '+4% Y/Y',
          'Business-segment revenue totals $21.7B before the $0.3B Other adjustment; displayed figures are rounded.',
        ],
        items: [
          { id: 'consumer_banking', label: ['Consumer', 'Banking'], value: 9.6, notes: ['+7% Y/Y', '22% net margin'] },
          { id: 'commercial_banking', label: ['Commercial', 'Banking'], value: 3.1, notes: ['(3%) Y/Y', '37% net margin'] },
          { id: 'corporate_investment_banking', label: ['Corporate &', 'Investment', 'Banking'], value: 4.6, notes: ['+0% Y/Y', '36% net margin'] },
          { id: 'wealth_investment_management', label: ['Wealth &', 'Investment', 'Management'], value: 4.4, notes: ['+10% Y/Y', '15% net margin'] },
          { id: 'other', label: 'Other', value: -0.3, notes: ['Source chart displays the rounded magnitude without a sign.'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'noninterest_expenses',
          label: 'Noninterest expenses',
          value: 13.7,
          notes: ['Expense detail totals $13.7B; displayed figures are rounded.'],
          items: [
            { id: 'personnel', label: 'Personnel', value: 9.1 },
            { id: 'technology', label: 'Technology', value: 1.4 },
            { id: 'occupancy', label: 'Occupancy', value: 0.8 },
            { id: 'professional_fees', label: 'Professional fees', value: 1.2 },
            { id: 'advertising', label: 'Advertising', value: 0.4 },
            { id: 'other_expenses', label: 'Other', value: 0.8 },
          ],
        },
        operatingExpenses: {
          total: 1.0,
          notes: ['Mapped to the operating-expenses schema slot for the source chart’s provision for credit losses.'],
          items: [{ id: 'operating_expenses', label: 'Provision for credit losses', value: 1.0 }],
        },
        tax: { id: 'tax', label: 'Tax', value: 1.1 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: {
          label: 'Income after noninterest expenses',
          value: 7.6,
          notes: ['Schema adapter subtotal; the source chart does not show a separate gross-profit node.'],
        },
        operating: { id: 'pretax_income', label: 'Pretax income', value: 6.5 },
        net: { id: 'net_income', label: 'Net income', value: 5.4, notes: ['+6% Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +4%', '业务分部收入合计 $21.7B，图中另列 $0.3B 的其他调整；图中数字经四舍五入。'],
            items: [
              { id: 'consumer_banking', label: '消费者银行', notes: ['同比 +7%', '净利率 22%'] },
              { id: 'commercial_banking', label: '商业银行', notes: ['同比 (3%)', '净利率 37%'] },
              { id: 'corporate_investment_banking', label: '企业与投资银行', notes: ['同比 +0%', '净利率 36%'] },
              { id: 'wealth_investment_management', label: '财富与投资管理', notes: ['同比 +10%', '净利率 15%'] },
              { id: 'other', label: '其他', notes: ['来源图以不带符号的方式显示取整后的金额。'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '非利息费用',
              notes: ['费用明细合计为 $13.7B；图中数字经四舍五入。'],
              items: [
                { id: 'personnel', label: '人员费用' },
                { id: 'technology', label: '技术' },
                { id: 'occupancy', label: '场地占用' },
                { id: 'professional_fees', label: '专业服务费' },
                { id: 'advertising', label: '广告' },
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
            net: { label: '净利润', notes: ['同比 +6%'] },
          },
        },
      },
    }
  );
})(window);
