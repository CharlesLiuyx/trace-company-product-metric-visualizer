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
      key: 'morgan-stanley-q2-fy26',
      company: 'Morgan Stanley',
      period: 'Q2 FY26',
      periodNote: 'Ending Jun. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/morgan-stanley-q2-fy26.png',
      roundingTolerance: 0.2,
      revenue: {
        total: 21.3,
        notes: ['+27% Y/Y', 'Segment revenue detail sums to $21.5B before $0.2B of eliminations; displayed figures are rounded.'],
        items: [
          { id: 'institutional_securities', label: 'Institutional Securities', value: 11.0, notes: ['+44% Y/Y', '29% net margin'] },
          { id: 'wealth_management', label: 'Wealth Management', value: 8.9, notes: ['+14% Y/Y', '24% net margin'] },
          { id: 'investment_management', label: 'Investment Management', value: 1.6, notes: ['+6% Y/Y', '18% net margin'] },
          { id: 'eliminations', label: 'Eliminations', value: -0.2, notes: ['Intersegment eliminations shown as a separate red outflow.'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'non_interest_expenses',
          label: 'Noninterest expenses',
          value: 13.9,
          notes: ['Noninterest expense detail sums to $14.0B due to rounded line items.'],
          items: [
            { id: 'compensation_benefits', label: 'Compensation & benefits', value: 8.2 },
            { id: 'brokerage_clearing_exchange', label: 'Brokerage, clearing & exchange fees', value: 1.5 },
            { id: 'information_communications', label: 'Information & communications', value: 1.2 },
            { id: 'professional_services', label: 'Professional services', value: 0.7 },
            { id: 'occupancy', label: 'Occupancy', value: 0.5 },
            { id: 'marketing_business_development', label: 'Marketing & business development', value: 0.4 },
            { id: 'other_expenses', label: 'Other', value: 1.5 },
          ],
        },
        operatingExpenses: {
          total: 0.1,
          notes: ['Mapped to the existing operating-expenses schema slot for financial-institution credit-loss provision.'],
          items: [{ id: 'operating_expenses', label: 'Provision for credit loss', value: 0.1 }],
        },
        tax: { id: 'tax', label: 'Tax', value: 1.7 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'pretax_income', label: 'Pretax income', value: 7.3, notes: ['Schema adapter subtotal for the financial-institution waterfall.'] },
        operating: { id: 'pretax_income', label: 'Pretax income', value: 7.3 },
        net: { id: 'net_income', label: 'Net income', value: 5.7, notes: ['+58% Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月',
          revenue: {
            notes: ['同比 +27%', '分部收入明细合计为 $21.5B，抵销 $0.2B；图中数字经四舍五入。'],
            items: [
              { id: 'institutional_securities', label: '机构证券', notes: ['同比 +44%', '净利率 29%'] },
              { id: 'wealth_management', label: '财富管理', notes: ['同比 +14%', '净利率 24%'] },
              { id: 'investment_management', label: '投资管理', notes: ['同比 +6%', '净利率 18%'] },
              { id: 'eliminations', label: '抵销', notes: ['分部间抵销在来源图中显示为单独的红色流出。'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '非利息费用',
              notes: ['非利息费用明细因项目取整合计为 $14.0B。'],
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
            operatingExpenses: { items: [{ id: 'operating_expenses', label: '信用损失拨备' }] },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '税前利润', notes: ['金融机构瀑布图的 schema 适配小计。'] },
            operating: { label: '税前利润' },
            net: { label: '净利润', notes: ['同比 +58%'] },
          },
        },
      },
    },
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
    },
    {
      key: 'morgan-stanley-q4-fy25',
      company: 'Morgan Stanley',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/morgan-stanley-q4-fy25.png',
      roundingTolerance: 0.2,
      revenue: {
        total: 17.9,
        notes: ['+10% Y/Y', 'Segment revenue sums to $18.0B before $0.2B of eliminations; displayed figures are rounded.'],
        items: [
          { id: 'institutional_securities', label: 'Institutional Securities', value: 7.9, notes: ['+9% Y/Y', '34% net margin'] },
          { id: 'wealth_management', label: 'Wealth Management', value: 8.4, notes: ['+13% Y/Y', '31% net margin'] },
          { id: 'investment_management', label: 'Investment Management', value: 1.7, notes: ['+5% Y/Y', '27% net margin'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'non_interest_expenses',
          label: 'Noninterest expenses',
          value: 12.1,
          notes: ['Expense detail sums to $12.2B because the source rounds individual line items.'],
          items: [
            { id: 'compensation_benefits', label: 'Compensation & benefits', value: 7.1 },
            { id: 'information_communications', label: 'Information & communications', value: 1.2 },
            { id: 'brokerage_clearing_exchange', label: 'Brokerage, clearing & exchange fees', value: 1.1 },
            { id: 'professional_services', label: 'Professional services', value: 0.8 },
            { id: 'occupancy', label: 'Occupancy', value: 0.5 },
            { id: 'marketing_business_development', label: 'Marketing & business development', value: 0.4 },
            { id: 'other_expenses', label: 'Other', value: 1.1 },
          ],
        },
        operatingExpenses: { total: 0, items: [{ id: 'operating_expenses', label: 'Provision for credit loss', value: 0 }] },
        tax: { id: 'tax', label: 'Tax', value: 1.3 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'pretax_income', label: 'Pretax income', value: 5.8, notes: ['Schema adapter subtotal for the financial-institution waterfall.'] },
        operating: { id: 'pretax_income', label: 'Pretax income', value: 5.8 },
        net: { id: 'net_income', label: 'Net income', value: 4.4, notes: ['+19% Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +10%', '分部收入合计为 $18.0B，抵销 $0.2B；图中数字经四舍五入。'],
            items: [
              { id: 'institutional_securities', label: '机构证券', notes: ['同比 +9%', '净利率 34%'] },
              { id: 'wealth_management', label: '财富管理', notes: ['同比 +13%', '净利率 31%'] },
              { id: 'investment_management', label: '投资管理', notes: ['同比 +5%', '净利率 27%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '非利息费用', notes: ['费用明细因项目取整合计为 $12.2B。'],
              items: [
                { id: 'compensation_benefits', label: '薪酬与福利' }, { id: 'information_communications', label: '信息与通信' },
                { id: 'brokerage_clearing_exchange', label: '经纪、清算与交易所费用' }, { id: 'professional_services', label: '专业服务' },
                { id: 'occupancy', label: '场地占用' }, { id: 'marketing_business_development', label: '市场与业务开发' }, { id: 'other_expenses', label: '其他' },
              ],
            },
            operatingExpenses: { items: [{ id: 'operating_expenses', label: '信用损失拨备' }] },
            tax: { label: '税费' },
          },
          profit: { gross: { label: '税前利润', notes: ['金融机构瀑布图的 schema 适配小计。'] }, operating: { label: '税前利润' }, net: { label: '净利润', notes: ['同比 +19%'] } },
        },
      },
    }
  );
})(window);
