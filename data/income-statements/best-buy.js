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
      key: 'best-buy-q1-fy27',
      company: 'Best Buy',
      period: 'Q1 FY27',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/best-buy-q1-fy27.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 8.9,
        notes: ['+2% Y/Y'],
        items: [
          {
            id: 'domestic',
            label: 'Domestic',
            value: 8.2,
            notes: ['+2% Y/Y'],
            children: [
              { id: 'computing_mobile_phones', label: 'Computing and Mobile Phones', value: 3.9, notes: ['+2% Y/Y'] },
              { id: 'consumer_electronics', label: 'Consumer Electronics', value: 2.1, notes: ['(4%) Y/Y'] },
              { id: 'appliances', label: 'Appliances', value: 0.8, notes: ['(17%) Y/Y'] },
              { id: 'entertainment', label: 'Entertainment', value: 0.8, notes: ['+11% Y/Y'] },
              { id: 'services', label: 'Services', value: 0.6, notes: ['+40% Y/Y'] },
            ],
          },
          { id: 'international', label: 'International', value: 0.7, notes: ['+7% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 6.8 },
        operatingExpenses: {
          total: 1.7,
          items: [
            { id: 'operating_expenses', label: 'Operating expenses SG&A', value: 1.7 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.1 },
      },
      otherIncome: {
        total: 0.009,
        items: [{ id: 'other_income', label: 'Other', value: 0.009 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 2.1, notes: ['24% margin', '+0pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.4, notes: ['4% margin', '+2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.3, notes: ['3% margin', '+1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2027 财年第一季度',
          periodNote: '截至 2026 年 4 月',
          revenue: {
            notes: ['同比 +2%'],
            items: [
              {
                id: 'domestic', label: '国内', notes: ['同比 +2%'],
                children: [
                  { id: 'computing_mobile_phones', label: '计算与手机', notes: ['同比 +2%'] },
                  { id: 'consumer_electronics', label: '消费电子', notes: ['同比 (4%)'] },
                  { id: 'appliances', label: '家用电器', notes: ['同比 (17%)'] },
                  { id: 'entertainment', label: '娱乐', notes: ['同比 +11%'] },
                  { id: 'services', label: '服务', notes: ['同比 +40%'] },
                ],
              },
              { id: 'international', label: '国际', notes: ['同比 +7%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: { items: [{ id: 'operating_expenses', label: '运营费用及销售、一般与行政费用' }] },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 24%', '同比 +0 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 4%', '同比 +2 个百分点'] },
            net: { label: '净利润', notes: ['利润率 3%', '同比 +1 个百分点'] },
          },
        },
      },
    },
    {
      key: 'best-buy-q3-fy26',
      company: 'Best Buy',
      period: 'Q3 FY26',
      periodNote: 'Ending Oct. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/best-buy-q3-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 9.7,
        notes: ['+2% Y/Y'],
        items: [
          {
            id: 'domestic',
            label: 'Domestic',
            value: 8.9,
            notes: ['+2% Y/Y'],
            children: [
              { id: 'computing_mobile_phones', label: 'Computing and Mobile Phones', value: 4.4, notes: ['+4% Y/Y'] },
              { id: 'consumer_electronics', label: 'Consumer Electronics', value: 2.3, notes: ['(7%) Y/Y'] },
              { id: 'appliances', label: 'Appliances', value: 1.0, notes: ['(8%) Y/Y'] },
              { id: 'entertainment', label: 'Entertainment', value: 0.5, notes: ['+20% Y/Y'] },
              { id: 'services', label: 'Services', value: 0.6, notes: ['+0% Y/Y'] },
              { id: 'other', label: 'Other', value: 0.1, notes: ['+% Y/Y'] },
            ],
          },
          { id: 'international', label: 'International', value: 0.8, notes: ['+6% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 7.4 },
        operatingExpenses: {
          total: 2.1,
          items: [
            { id: 'sales_general_admin', label: 'Sales General & admin', value: 1.9 },
            { id: 'restructuring', label: 'Restructuring', value: 0.2 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.1 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 2.2, notes: ['23% margin', '(0pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.2, notes: ['2% margin', '(2pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.1, notes: ['1% margin', '(1pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第三季度',
          periodNote: '截至 2025 年 10 月',
          revenue: {
            notes: ['同比 +2%'],
            items: [
              {
                id: 'domestic', label: '国内', notes: ['同比 +2%'],
                children: [
                  { id: 'computing_mobile_phones', label: '计算与手机', notes: ['同比 +4%'] },
                  { id: 'consumer_electronics', label: '消费电子', notes: ['同比 (7%)'] },
                  { id: 'appliances', label: '家用电器', notes: ['同比 (8%)'] },
                  { id: 'entertainment', label: '娱乐', notes: ['同比 +20%'] },
                  { id: 'services', label: '服务', notes: ['同比 +0%'] },
                  { id: 'other', label: '其他', notes: ['同比 +%'] },
                ],
              },
              { id: 'international', label: '国际', notes: ['同比 +6%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'sales_general_admin', label: '销售、一般及行政费用' },
                { id: 'restructuring', label: '重组费用' },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 23%', '同比 (0 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 2%', '同比 (2 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 1%', '同比 (1 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
