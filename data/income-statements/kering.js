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
      key: 'kering-fy25',
      company: 'Kering',
      period: 'FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '€',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/kering-fy25.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 14.7,
        notes: ['(13%) Y/Y'],
        items: [
          { id: 'gucci', label: 'Gucci', value: 6.0, notes: ['(22%) Y/Y'] },
          { id: 'saint_laurent', label: 'Saint Laurent', value: 2.6, notes: ['(8%) Y/Y'] },
          { id: 'bottega_veneta', label: 'Bottega Veneta', value: 1.7, notes: ['(0%) Y/Y'] },
          { id: 'other_houses', label: 'Other Houses', value: 2.9, notes: ['(10%) Y/Y'] },
          { id: 'eyewear_corporate', label: 'Kering Eyewear & Corporate', value: 1.6, notes: ['+1% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 4.0 },
        operatingExpenses: {
          total: 9.0,
          items: [
            { id: 'other_opex', label: 'Other opex', value: 6.3, notes: ['43% of revenue', '+1pp Y/Y'] },
            { id: 'personnel_expenses', label: 'Personnel expenses', value: 2.8, notes: ['19% of revenue', '+1pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.4 },
      },
      operatingOtherExpenses: {
        total: 0.2,
        items: [
          { id: 'eliminations', label: 'Eliminations', value: 0.2, notes: ['Source image displays $0.2B despite the euro reporting currency.'] },
        ],
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 1.2,
        items: [{ id: 'other', label: 'Other', value: 1.2 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 10.7, notes: ['73% of revenue', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.6, notes: ['11% of revenue', '(3pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.039, notes: ['0% of revenue', '(6pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 (13%)'],
            items: [
              { id: 'gucci', label: 'Gucci', notes: ['同比 (22%)'] },
              { id: 'saint_laurent', label: 'Saint Laurent', notes: ['同比 (8%)'] },
              { id: 'bottega_veneta', label: 'Bottega Veneta', notes: ['同比 (0%)'] },
              { id: 'other_houses', label: '其他品牌', notes: ['同比 (10%)'] },
              { id: 'eyewear_corporate', label: '开云眼镜及公司业务', notes: ['同比 +1%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'other_opex', label: '其他运营费用', notes: ['占收入 43%', '同比 +1 个百分点'] },
                { id: 'personnel_expenses', label: '人员费用', notes: ['占收入 19%', '同比 +1 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          operatingOtherExpenses: {
            items: [{ id: 'eliminations', label: '抵销项', notes: ['源图金额显示为 $0.2B，但报告币种为欧元。'] }],
          },
          otherExpenses: { items: [{ id: 'other', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['占收入 73%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['占收入 11%', '同比 (3 个百分点)'] },
            net: { label: '净利润', notes: ['占收入 0%', '同比 (6 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'kering-h1-fy26',
      company: 'Kering',
      period: 'H1 FY26',
      periodNote: 'Ending June 2026',
      currency: '€',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/kering-h1-fy26.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 7.2,
        notes: ['(3%) Y/Y'],
        items: [
          { id: 'fashion_leather_goods', label: 'Fashion & Leather Goods', value: 5.8, notes: ['(5%) Y/Y'] },
          { id: 'kering_jewelry', label: 'Kering Jewelry', value: 0.5, notes: ['+14% Y/Y'] },
          { id: 'kering_eyewear', label: 'Kering Eyewear', value: 1.0, notes: ['+5% Y/Y'] },
          { id: 'corporate_other', label: 'Corporate & Other', value: 0.1, notes: ['(7%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 2.1 },
        operatingExpenses: {
          total: 4.5,
          items: [
            { id: 'other_opex', label: 'Other opex', value: 2.9, notes: ['41% of revenue', '(1pp) Y/Y'] },
            { id: 'personnel_expenses', label: 'Personnel expenses', value: 1.3, notes: ['18% of revenue', '(1pp) Y/Y'] },
            { id: 'other_operating', label: 'Other', value: 0.2, notes: ['3% of revenue', '+3pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.2 },
      },
      operatingOtherExpenses: {
        total: 0.1,
        items: [
          { id: 'eliminations', label: 'Eliminations', value: 0.1, notes: ['Source image displays $0.1B despite the euro reporting currency.'] },
        ],
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 0.3,
        items: [{ id: 'other_nonoperating', label: 'Other', value: 0.3 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 5.2, notes: ['72% of revenue', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.7, notes: ['10% of revenue', '(3pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.2, notes: ['3% of revenue', '(4pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年上半年',
          periodNote: '截至 2026 年 6 月',
          revenue: {
            notes: ['同比 (3%)'],
            items: [
              { id: 'fashion_leather_goods', label: '时装与皮具业务', notes: ['同比 (5%)'] },
              { id: 'kering_jewelry', label: '开云珠宝', notes: ['同比 +14%'] },
              { id: 'kering_eyewear', label: '开云眼镜', notes: ['同比 +5%'] },
              { id: 'corporate_other', label: '公司业务及其他', notes: ['同比 (7%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'other_opex', label: '其他运营费用', notes: ['占收入 41%', '同比 (1 个百分点)'] },
                { id: 'personnel_expenses', label: '人员费用', notes: ['占收入 18%', '同比 (1 个百分点)'] },
                { id: 'other_operating', label: '其他', notes: ['占收入 3%', '同比 +3 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          operatingOtherExpenses: {
            items: [{ id: 'eliminations', label: '抵销项', notes: ['源图金额显示为 $0.1B，但报告币种为欧元。'] }],
          },
          otherExpenses: { items: [{ id: 'other_nonoperating', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['占收入 72%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['占收入 10%', '同比 (3 个百分点)'] },
            net: { label: '净利润', notes: ['占收入 3%', '同比 (4 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
