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
      key: 'mercadolibre-q1-fy26',
      company: 'MercadoLibre',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/mercadolibre-q1-fy26.png',
      // The source rounds revenue segments and expense sub-items independently.
      roundingTolerance: 0.15,
      revenue: {
        total: 8.8,
        notes: ['+49% Y/Y'],
        items: [
          {
            id: 'marketplace',
            label: 'Intermediation services and advertising sales',
            value: 3.8,
            notes: ['+39% Y/Y'],
          },
          {
            id: 'shipping',
            label: 'Product sales and shipping fees',
            value: 1.1,
            notes: ['+85% Y/Y'],
          },
          {
            id: 'payments',
            label: 'Payment solution, installments, credit and debit card fees, and insurtech fees',
            value: 1.9,
            notes: ['+32% Y/Y'],
          },
          {
            id: 'pos',
            label: 'Point of sale devices',
            value: 0.018,
            notes: ['+38% Y/Y'],
          },
          {
            id: 'credit',
            label: 'Interest earned on loans and credit card transactions',
            value: 2.0,
            notes: ['+76% Y/Y'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 5.0 },
        operatingExpenses: {
          total: 3.3,
          items: [
            { id: 'sm', label: 'Sales & Marketing', value: 1.0 },
            { id: 'product_development', label: 'Product Development', value: 0.7 },
            { id: 'ga', label: 'General & Admin', value: 0.3 },
            { id: 'provision_doubtful', label: 'Provision for doubtful accounts', value: 1.2, notes: ['Interest margin after losses 18%'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.2 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.032,
        items: [{ id: 'other', label: 'Other', value: 0.032 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 3.9, notes: ['44% margin', '(3pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.6, notes: ['7% margin', '(6pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.4, notes: ['5% margin', '(4pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +49%'],
            items: [
              { id: 'marketplace', label: '撮合服务与广告销售', notes: ['同比 +39%'] },
              { id: 'shipping', label: '商品销售与配送费', notes: ['同比 +85%'] },
              { id: 'payments', label: '支付解决方案、分期、信用卡和借记卡手续费及保险科技费用', notes: ['同比 +32%'] },
              { id: 'pos', label: '销售点设备', notes: ['同比 +38%'] },
              { id: 'credit', label: '贷款与信用卡交易利息收入', notes: ['同比 +76%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与营销' },
                { id: 'product_development', label: '产品开发' },
                { id: 'ga', label: '管理费用' },
                { id: 'provision_doubtful', label: '坏账准备', notes: ['损失后利息利润率 18%'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'other', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 44%', '同比 (3 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 7%', '同比 (6 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 5%', '同比 (4 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'mercadolibre-q4-fy25',
      company: 'MercadoLibre',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/mercadolibre-q4-fy25.png',
      roundingTolerance: 0.05,
      revenue: {
        total: 8.8,
        notes: ['+45% Y/Y'],
        items: [
          {
            id: 'marketplace',
            label: 'Intermediation services and advertising sales',
            value: 3.8,
            notes: ['+32% Y/Y'],
          },
          {
            id: 'shipping',
            label: 'Product sales and shipping fees',
            value: 1.2,
            notes: ['+71% Y/Y'],
          },
          {
            id: 'payments',
            label: 'Payment solution, installments, credit and debit card fees, and insurtech fees',
            value: 1.9,
            notes: ['+33% Y/Y'],
          },
          {
            id: 'pos',
            label: 'Point of sale devices',
            value: 0.018,
            notes: ['(5%) Y/Y'],
          },
          {
            id: 'credit',
            label: 'Interest earned on loans and credit card transactions',
            value: 1.9,
            notes: ['+77% Y/Y'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 5.0 },
        operatingExpenses: {
          total: 2.9,
          items: [
            { id: 'sm', label: 'Sales & Marketing', value: 1.0 },
            { id: 'product_development', label: 'Product Development', value: 0.6 },
            { id: 'ga', label: 'General & Admin', value: 0.3 },
            { id: 'provision_doubtful', label: 'Provision for doubtful accounts', value: 1.0, notes: ['Interest margin after losses 23%'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.2 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.1,
        items: [{ id: 'other', label: 'Other', value: 0.1 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 3.8, notes: ['43% margin', '(2pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.9, notes: ['10% margin', '(3pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.6, notes: ['6% margin', '(4pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +45%'],
            items: [
              { id: 'marketplace', label: '撮合服务与广告销售', notes: ['同比 +32%'] },
              { id: 'shipping', label: '商品销售与配送费', notes: ['同比 +71%'] },
              { id: 'payments', label: '支付解决方案、分期、信用卡和借记卡手续费及保险科技费用', notes: ['同比 +33%'] },
              { id: 'pos', label: '销售点设备', notes: ['同比 (5%)'] },
              { id: 'credit', label: '贷款与信用卡交易利息收入', notes: ['同比 +77%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与营销' },
                { id: 'product_development', label: '产品开发' },
                { id: 'ga', label: '管理费用' },
                { id: 'provision_doubtful', label: '坏账准备', notes: ['损失后利息利润率 23%'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'other', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 43%', '同比 (2 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 10%', '同比 (3 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 6%', '同比 (4 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
