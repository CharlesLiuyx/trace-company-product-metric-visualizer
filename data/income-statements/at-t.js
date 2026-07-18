/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/<dataset-key>.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'at-t-q4-fy25',
    company: 'AT&T',
    period: 'Q4 FY25',
    periodNote: 'Quarter ended Dec. 31, 2025',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/at-t-q4-fy25.png',
    roundingTolerance: 0.3,
    revenue: {
      total: 33.5,
      notes: ['+4% Y/Y'],
      items: [
        { id: 'mobility', label: 'Mobility', value: 24.4, notes: ['+5% Y/Y', '26% adjusted margin'] },
        { id: 'business_wireline', label: ['Business', 'Wireline'], value: 4.2, notes: ['(8%) Y/Y', '(4%) adjusted margin'] },
        { id: 'consumer_wireline', label: ['Consumer', 'Wireline'], value: 3.6, notes: ['+3% Y/Y', '15% adjusted margin'] },
        { id: 'mexico', label: 'Mexico', value: 1.3, notes: ['+21% Y/Y', '3% adjusted margin'] },
        { id: 'corporate', label: 'Corporate', value: 0.1, notes: ['(25%) Y/Y'] },
      ],
    },
    costs: {
      // The source rolls every cost directly into “Operating expenses”; it
      // does not show a separate cost-of-revenue/gross-profit bridge.
      costOfRevenue: { label: 'Cost of revenue', value: 0 },
      operatingExpenses: {
        total: 27.7,
        items: [
          { id: 'equipment', label: 'Equipment', value: 8.5 },
          { id: 'sga', label: 'SG&A', value: 7.4 },
          { id: 'other_cost_of_revenue', label: ['Other cost', 'of revenue'], value: 6.3 },
          { id: 'depreciation_amortization', label: ['Depreciation &', 'Amortization'], value: 5.1 },
          { id: 'restructuring', label: 'Restructuring', value: 0.3 },
        ],
      },
      tax: { id: 'tax', label: 'Income tax expense', value: 0.1 },
    },
    otherIncome: {
      total: 0.3,
      items: [{ id: 'other_income', label: 'Other income', value: 0.3 }],
    },
    otherExpenses: {
      total: 1.8,
      items: [{ id: 'interest', label: 'Interest expense', value: 1.8 }],
    },
    profit: {
      // This identity subtotal preserves the financial contract without
      // inventing an unshown gross-profit node in the Sankey view.
      gross: { label: 'Gross profit', value: 33.5 },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 5.8, notes: ['19% margin', '+2pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 4.2, notes: ['13% margin', '(0pp) Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2025 财年第四季度',
        periodNote: '截至 2025 年 12 月 31 日的季度',
        revenue: {
          notes: ['同比 +4%'],
          items: [
            { id: 'mobility', label: '移动通信', notes: ['同比 +5%', '调整后利润率 26%'] },
            { id: 'business_wireline', label: ['企业', '有线业务'], notes: ['同比 (8%)', '调整后利润率 (4%)'] },
            { id: 'consumer_wireline', label: ['消费者', '有线业务'], notes: ['同比 +3%', '调整后利润率 15%'] },
            { id: 'mexico', label: '墨西哥', notes: ['同比 +21%', '调整后利润率 3%'] },
            { id: 'corporate', label: '公司及其他', notes: ['同比 (25%)'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: {
            items: [
              { id: 'equipment', label: '设备' },
              { id: 'sga', label: '销售、一般及管理费用' },
              { id: 'other_cost_of_revenue', label: ['其他收入', '成本'] },
              { id: 'depreciation_amortization', label: ['折旧与', '摊销'] },
              { id: 'restructuring', label: '重组费用' },
            ],
          },
          tax: { label: '所得税费用' },
        },
        otherIncome: { items: [{ id: 'other_income', label: '其他收入' }] },
        otherExpenses: { items: [{ id: 'interest', label: '利息费用' }] },
        profit: {
          gross: { label: '毛利润' },
          operating: { label: '营业利润', notes: ['利润率 19%', '同比 +2 个百分点'] },
          net: { label: '净利润', notes: ['利润率 13%', '同比 (0 个百分点)'] },
        },
      },
    },
  });

  ssot.records.push({
    key: 'at-t-q1-fy26',
    company: 'AT&T',
    period: 'Q1 FY26',
    periodNote: 'Quarter ended Mar. 31, 2026',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/at-t-q1-fy26.png',
    roundingTolerance: 0.3,
    revenue: {
      total: 31.5,
      notes: ['+3% Y/Y'],
      items: [
        {
          id: 'service',
          label: 'Service',
          value: 25.5,
          notes: ['+1% Y/Y'],
          children: [
            { id: 'wireless_services', label: 'Wireless services', value: 17.7, notes: ['+2% Y/Y'] },
            { id: 'advanced_home_internet', label: ['Advanced home', 'Internet'], value: 2.8, notes: ['+2% Y/Y'] },
            { id: 'business_fiber', label: 'Business fiber', value: 1.9, notes: ['+59% Y/Y'] },
            { id: 'business_transitional', label: ['Business', 'transitional'], value: 1.1, notes: ['+45% Y/Y'] },
            { id: 'other', label: 'Other', value: 2.0, notes: ['(59%) Y/Y'] },
          ],
        },
        { id: 'equipment', label: 'Equipment', value: 6.0, notes: ['+10% Y/Y'] },
      ],
    },
    costs: {
      // The source rolls every cost directly into “Operating expenses”; it
      // does not show a separate cost-of-revenue/gross-profit bridge.
      costOfRevenue: { label: 'Cost of revenue', value: 0 },
      operatingExpenses: {
        total: 24.8,
        items: [
          { id: 'sga', label: 'SG&A', value: 7.3 },
          { id: 'equipment', label: 'Equipment', value: 6.3 },
          { id: 'other_cost_of_revenue', label: ['Other cost', 'of revenue'], value: 6.3 },
          { id: 'depreciation_amortization', label: ['Depreciation &', 'Amortization'], value: 5.0 },
        ],
      },
      tax: { id: 'tax', label: 'Income tax expense', value: 1.2 },
    },
    otherIncome: {
      total: 0.6,
      items: [{ id: 'other_income', label: 'Other income', value: 0.6 }],
    },
    otherExpenses: {
      total: 1.8,
      items: [{ id: 'interest', label: 'Interest expense', value: 1.8 }],
    },
    profit: {
      // This identity subtotal preserves the financial contract without
      // inventing an unshown gross-profit node in the Sankey view.
      gross: { label: 'Gross profit', value: 31.5 },
      operating: {
        id: 'operating_profit',
        label: 'Operating profit',
        value: 6.7,
        notes: ['21% margin', '+2pp Y/Y'],
      },
      net: {
        id: 'net_profit',
        label: 'Net profit',
        value: 4.2,
        notes: ['13% margin', '(2pp) Y/Y'],
      },
    },
    i18n: {
      zh: {
        period: '2026 财年第一季度',
        periodNote: '截至 2026 年 3 月 31 日的季度',
        revenue: {
          notes: ['同比 +3%'],
          items: [
            {
              id: 'service',
              label: '服务',
              notes: ['同比 +1%'],
              children: [
                { id: 'wireless_services', label: '无线服务', notes: ['同比 +2%'] },
                { id: 'advanced_home_internet', label: ['高级家庭', '互联网'], notes: ['同比 +2%'] },
                { id: 'business_fiber', label: '企业光纤', notes: ['同比 +59%'] },
                { id: 'business_transitional', label: ['企业', '过渡业务'], notes: ['同比 +45%'] },
                { id: 'other', label: '其他', notes: ['同比 (59%)'] },
              ],
            },
            { id: 'equipment', label: '设备', notes: ['同比 +10%'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: {
            items: [
              { id: 'sga', label: '销售、一般及管理费用' },
              { id: 'equipment', label: '设备' },
              { id: 'other_cost_of_revenue', label: ['其他收入', '成本'] },
              { id: 'depreciation_amortization', label: ['折旧与', '摊销'] },
            ],
          },
          tax: { label: '所得税费用' },
        },
        otherIncome: { items: [{ id: 'other_income', label: '其他收入' }] },
        otherExpenses: { items: [{ id: 'interest', label: '利息费用' }] },
        profit: {
          gross: { label: '毛利润' },
          operating: { label: '营业利润', notes: ['利润率 21%', '同比 +2 个百分点'] },
          net: { label: '净利润', notes: ['利润率 13%', '同比 (2 个百分点)'] },
        },
      },
    },
  });
})(window);
