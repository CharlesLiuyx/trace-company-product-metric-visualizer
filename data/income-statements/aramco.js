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
      key: 'aramco-q1-fy26',
      company: 'Saudi Aramco',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: 'SAR',
      unit: 'B',
      decimals: 0,
      sourceImage: 'input/processed/aramco-q1-fy26.png',
      // The source infographic rounds operating profit, net profit, and tax
      // independently, leaving one-SAR-billion arithmetic differences.
      roundingTolerance: 1.1,
      revenue: {
        total: 467,
        notes: ['+9% Y/Y'],
        items: [
          { id: 'crude_oil', label: 'Crude Oil', value: 199, notes: ['+1% Y/Y'] },
          { id: 'refined_chemical_products', label: 'Refined & Chemical products', value: 206, notes: ['+8% Y/Y'] },
          { id: 'natural_gas_ngls', label: 'Natural gas & NGLs', value: 18, notes: ['+30% Y/Y'] },
          { id: 'other', label: 'Other', value: 10, notes: ['+143% Y/Y'] },
          { id: 'other_income_related_sales', label: 'Other income related to sales', value: 34, notes: ['+42% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          label: 'Cost of revenue',
          value: 0,
          notes: ['The source chart does not break out cost of revenue or gross profit.'],
        },
        operatingExpenses: {
          total: 245,
          items: [
            { id: 'purchases', label: 'Purchases', value: 112 },
            { id: 'royalties', label: 'Royalties', value: 41 },
            { id: 'sga', label: 'SG&A', value: 36 },
            { id: 'producing_manufacturing', label: 'Producing & Manufacturing', value: 30 },
            { id: 'da', label: 'D&A', value: 24 },
            { id: 'exploration', label: 'Exploration', value: 1 },
            { id: 'rnd', label: 'R&D', value: 1 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 100 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: {
          label: 'Revenue and other income related to sales',
          value: 467,
          notes: ['The source chart does not present a separate gross-profit subtotal.'],
        },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 223, notes: ['48% margin', '+3pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 122, notes: ['26% margin', '+3pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +9%'],
            items: [
              { id: 'crude_oil', label: '原油', notes: ['同比 +1%'] },
              { id: 'refined_chemical_products', label: '炼油及化工产品', notes: ['同比 +8%'] },
              { id: 'natural_gas_ngls', label: '天然气及天然气液', notes: ['同比 +30%'] },
              { id: 'other', label: '其他', notes: ['同比 +143%'] },
              { id: 'other_income_related_sales', label: '销售相关其他收入', notes: ['同比 +42%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本', notes: ['来源图未拆分收入成本或毛利润。'] },
            operatingExpenses: {
              items: [
                { id: 'purchases', label: '采购' },
                { id: 'royalties', label: '特许权使用费' },
                { id: 'sga', label: '销售、一般及行政费用' },
                { id: 'producing_manufacturing', label: '生产及制造' },
                { id: 'da', label: '折旧及摊销' },
                { id: 'exploration', label: '勘探' },
                { id: 'rnd', label: '研发' },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '收入及销售相关其他收入', notes: ['来源图未单独呈现毛利润小计。'] },
            operating: { label: '营业利润', notes: ['利润率 48%', '同比 +3 个百分点'] },
            net: { label: '净利润', notes: ['利润率 26%', '同比 +3 个百分点'] },
          },
        },
      },
    },
    {
      key: 'aramco-fy25',
      company: 'Saudi Aramco',
      period: 'FY25',
      periodNote: 'Year ended Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/aramco-fy25.png',
      // The infographic rounds each displayed value independently to one
      // decimal place, leaving 0.1B subtotal differences.
      roundingTolerance: 0.15,
      revenue: {
        total: 445.7,
        notes: ['(7%) Y/Y'],
        items: [
          {
            id: 'reported_revenue',
            label: 'Revenue',
            value: 415.8,
            notes: ['(5%) Y/Y'],
            children: [
              { id: 'crude_oil', label: 'Crude Oil', value: 188.3, notes: ['(12%) Y/Y'] },
              { id: 'refined_chemical_products', label: 'Refined & Chemical products', value: 207.2, notes: ['(1%) Y/Y'] },
              { id: 'natural_gas_ngls', label: 'Natural gas & NGLs', value: 17.4, notes: ['+22% Y/Y'] },
              { id: 'other', label: 'Other', value: 3.0, notes: ['+61% Y/Y'] },
            ],
          },
          { id: 'other_income_related_sales', label: 'Other income related to sales', value: 29.8, notes: ['(32%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          label: 'Cost of revenue',
          value: 0,
          notes: ['The source chart does not break out cost of revenue or gross profit.'],
        },
        operatingExpenses: {
          total: 257.2,
          items: [
            { id: 'purchases', label: 'Purchases', value: 121.7 },
            { id: 'royalties', label: 'Royalties', value: 40.4 },
            { id: 'da', label: 'D&A', value: 33.5 },
            { id: 'producing_manufacturing', label: 'Producing & Manufacturing', value: 35.2 },
            { id: 'sga', label: 'SG&A', value: 22.3 },
            { id: 'exploration', label: 'Exploration', value: 2.7 },
            { id: 'rnd', label: 'R&D', value: 1.5 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 94.0 },
      },
      otherIncome: {
        total: 1.2,
        items: [{ id: 'finance', label: 'Finance', value: 1.2 }],
      },
      otherExpenses: {
        total: 2.2,
        items: [{ id: 'other_expense', label: 'Other', value: 2.2 }],
      },
      profit: {
        gross: {
          label: 'Revenue and other income related to sales',
          value: 445.7,
          notes: ['The source chart does not present a separate gross-profit subtotal.'],
        },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 188.5, notes: ['42% margin', '(1pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 93.4, notes: ['21% margin', '(1pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 -7%'],
            items: [
              {
                id: 'reported_revenue',
                label: '收入',
                notes: ['同比 -5%'],
                children: [
                  { id: 'crude_oil', label: '原油', notes: ['同比 -12%'] },
                  { id: 'refined_chemical_products', label: '炼油及化工产品', notes: ['同比 -1%'] },
                  { id: 'natural_gas_ngls', label: '天然气及天然气液', notes: ['同比 +22%'] },
                  { id: 'other', label: '其他', notes: ['同比 +61%'] },
                ],
              },
              { id: 'other_income_related_sales', label: '销售相关其他收入', notes: ['同比 -32%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本', notes: ['来源图未拆分收入成本或毛利润。'] },
            operatingExpenses: {
              items: [
                { id: 'purchases', label: '采购' },
                { id: 'royalties', label: '特许权使用费' },
                { id: 'da', label: '折旧及摊销' },
                { id: 'producing_manufacturing', label: '生产及制造' },
                { id: 'sga', label: '销售、一般及行政费用' },
                { id: 'exploration', label: '勘探' },
                { id: 'rnd', label: '研发' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'finance', label: '财务收益' }],
          },
          otherExpenses: {
            items: [{ id: 'other_expense', label: '其他' }],
          },
          profit: {
            gross: { label: '收入及销售相关其他收入', notes: ['来源图未单独呈现毛利润小计。'] },
            operating: { label: '营业利润', notes: ['利润率 42%', '同比 -1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 21%', '同比 -1 个百分点'] },
          },
        },
      },
    }
  );
})(window);
