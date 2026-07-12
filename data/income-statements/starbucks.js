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
      key: 'starbucks-q1-fy26',
      company: 'Starbucks',
      period: 'Q1 FY26',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/starbucks-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 9.9,
        notes: ['+6% Y/Y'],
        items: [
          { id: 'beverage', label: 'Beverage', value: 5.9, notes: ['+5% Y/Y'] },
          { id: 'food', label: 'Food', value: 1.9, notes: ['+5% Y/Y'] },
          {
            id: 'other_revenue',
            label: 'Other',
            value: 2.1,
            notes: ['+8% Y/Y', 'Packaged beverages, royalty and licensing revenue, ingredients'],
          },
        ],
      },
      costs: {
        costOfRevenue: {
          label: 'Cost of revenue',
          value: 7.8,
          notes: ['Source chart presents cost of revenue as Store opex ($4.6B) plus Product & distribution ($3.3B); displayed components round to $7.9B.'],
          items: [
            { id: 'store_opex', label: 'Store opex', value: 4.6 },
            { id: 'product_distribution', label: 'Product & distribution', value: 3.3 },
          ],
        },
        operatingExpenses: {
          total: 1.3,
          items: [
            { id: 'ga', label: 'General & administrative', value: 0.7 },
            { id: 'depreciation_amortization', label: 'Depreciation & amortization', value: 0.4 },
            { id: 'other_opex', label: 'Other opex', value: 0.1 },
            { id: 'restructuring', label: 'Restructuring', value: 0.1 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.5 },
      },
      operatingOtherIncome: {
        total: 0.1,
        items: [{ id: 'other_income', label: 'Other', value: 0.1 }],
      },
      otherExpenses: {
        total: 0.1,
        items: [{ id: 'other_expense', label: 'Other', value: 0.1 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 2.1, notes: ['21% margin', '(3pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.9, notes: ['9% margin', '(3pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.3, notes: ['3% margin', '(5pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +6%'],
            items: [
              { id: 'beverage', label: '饮品', notes: ['同比 +5%'] },
              { id: 'food', label: '食品', notes: ['同比 +5%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 +8%', '包装饮品、版税和授权收入、原料'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              notes: ['来源图将收入成本列示为门店运营费用 ($4.6B) 加产品与分销 ($3.3B)；列示组件四舍五入后为 $7.9B。'],
              items: [
                { id: 'store_opex', label: '门店运营费用' },
                { id: 'product_distribution', label: '产品与分销' },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'ga', label: '一般及行政' },
                { id: 'depreciation_amortization', label: '折旧与摊销' },
                { id: 'other_opex', label: '其他运营费用' },
                { id: 'restructuring', label: '重组' },
              ],
            },
            tax: { label: '税费' },
          },
          operatingOtherIncome: {
            items: [{ id: 'other_income', label: '其他' }],
          },
          otherExpenses: {
            items: [{ id: 'other_expense', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 21%', '同比 (3 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 9%', '同比 (3 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 3%', '同比 (5 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'starbucks-q2-fy26',
      company: 'Starbucks',
      period: 'Q2 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/starbucks-q2-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 9.5,
        notes: ['+9% Y/Y'],
        items: [
          { id: 'beverage', label: 'Beverage', value: 5.7, notes: ['+7% Y/Y'] },
          { id: 'food', label: 'Food', value: 1.8, notes: ['+8% Y/Y'] },
          {
            id: 'other_revenue',
            label: 'Other',
            value: 2.0,
            notes: ['+15% Y/Y', 'Packaged beverages, royalty and licensing revenue, ingredients'],
          },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 7.6,
          notes: ['Source chart presents cost of revenue as Store opex ($4.4B) plus Product & distribution ($3.2B).'],
          items: [
            { id: 'store_opex', label: 'Store opex', value: 4.4 },
            { id: 'product_distribution', label: 'Product & distribution', value: 3.2 },
          ],
        },
        operatingExpenses: {
          total: 1.1,
          notes: ['Rounded source chart line items sum to $1.125B including $25M restructuring.'],
          items: [
            { id: 'ga', label: 'General & administrative', value: 0.6 },
            { id: 'depreciation_amortization', label: 'Depreciation & amortization', value: 0.4 },
            { id: 'other_opex', label: 'Other opex', value: 0.1 },
            { id: 'restructuring', label: 'Restructuring', value: 0.025 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.2 },
      },
      otherIncome: {
        total: 0.1,
        items: [{ id: 'other_income', label: 'Other', value: 0.1 }],
      },
      otherExpenses: {
        total: 0.1,
        items: [{ id: 'other_expense', label: 'Other', value: 0.1 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1.9, notes: ['20% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.8, notes: ['9% margin', '+2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.5, notes: ['5% margin', '+1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +9%'],
            items: [
              { id: 'beverage', label: '饮品', notes: ['同比 +7%'] },
              { id: 'food', label: '食品', notes: ['同比 +8%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 +15%', '包装饮品、版税和授权收入、原料'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              notes: ['来源图将收入成本列示为门店运营费用 ($4.4B) 加产品与分销 ($3.2B)。'],
              items: [
                { id: 'store_opex', label: '门店运营费用' },
                { id: 'product_distribution', label: '产品与分销' },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'ga', label: '一般及行政' },
                { id: 'depreciation_amortization', label: '折旧与摊销' },
                { id: 'other_opex', label: '其他运营费用' },
                { id: 'restructuring', label: '重组' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'other_income', label: '其他' },
            ],
          },
          otherExpenses: {
            items: [
              { id: 'other_expense', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 20%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 9%', '同比 +2 个百分点'] },
            net: { label: '净利润', notes: ['利润率 5%', '同比 +1 个百分点'] },
          },
        },
      },
    }
  );
})(window);
