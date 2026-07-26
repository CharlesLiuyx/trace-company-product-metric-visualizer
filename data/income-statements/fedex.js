/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/<dataset-key>.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'fedex-q3-fy26',
    company: 'FedEx',
    period: 'Q3 FY26',
    periodNote: 'Ending Feb. 2026',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/fedex-q3-fy26.png',
    roundingTolerance: 0.2,
    revenue: {
      total: 24.0,
      notes: ['+8% Y/Y'],
      items: [
        { id: 'express', label: 'FedEx Express', value: 21.2, notes: ['+10% Y/Y', '7% operating margin', '+1pp Y/Y'] },
        { id: 'freight', label: 'FedEx Freight', value: 2.0, notes: ['(5%) Y/Y', '0% operating margin', '(12pp) Y/Y'] },
        { id: 'other_revenue', label: 'Other', value: 0.9, notes: ['(4%) Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: {
        id: 'cost_of_revenue',
        label: 'Cost of revenue',
        value: 0,
        notes: ['The source chart presents a single operating-expense waterfall and does not separately show cost of revenue or gross profit.'],
      },
      operatingExpenses: {
        total: 22.7,
        items: [
          { id: 'salaries_benefits', label: 'Salaries & benefits', value: 8.8 },
          { id: 'purchased_transportation', label: 'Purchased transportation', value: 6.1 },
          { id: 'rentals', label: 'Rentals', value: 1.2 },
          { id: 'depreciation_amortization', label: 'Depreciation & amortization', value: 1.1 },
          { id: 'fuel', label: 'Fuel', value: 0.9 },
          { id: 'maintenance', label: 'Maintenance', value: 0.8 },
          { id: 'business_realignment', label: 'Business realignment', value: 0.1 },
          { id: 'other_operating', label: 'Other', value: 3.7 },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.2 },
    },
    otherIncome: { total: 0, items: [] },
    otherExpenses: {
      total: 0.1,
      items: [{ id: 'other_expense', label: 'Other', value: 0.1 }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 24.0, notes: ['Bookkeeping value only; the source does not show gross profit.'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 1.3, notes: ['6% margin', '(0pp) Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 1.1, notes: ['4% margin', '+0pp Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2026 财年第三季度',
        periodNote: '截至 2026 年 2 月',
        revenue: {
          notes: ['同比 +8%'],
          items: [
            { id: 'express', label: 'FedEx Express', notes: ['同比 +10%', '营业利润率 7%', '同比 +1 个百分点'] },
            { id: 'freight', label: 'FedEx Freight', notes: ['同比 (5%)', '营业利润率 0%', '同比 (12 个百分点)'] },
            { id: 'other_revenue', label: '其他', notes: ['同比 (4%)'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本', notes: ['来源图以单一运营费用瀑布图呈现，未单独展示收入成本或毛利润。'] },
          operatingExpenses: {
            items: [
              { id: 'salaries_benefits', label: '薪酬与福利' },
              { id: 'purchased_transportation', label: '外购运输' },
              { id: 'rentals', label: '租赁费用' },
              { id: 'depreciation_amortization', label: '折旧与摊销' },
              { id: 'fuel', label: '燃油' },
              { id: 'maintenance', label: '维修' },
              { id: 'business_realignment', label: '业务重组' },
              { id: 'other_operating', label: '其他' },
            ],
          },
          tax: { label: '税费' },
        },
        otherExpenses: { items: [{ id: 'other_expense', label: '其他' }] },
        profit: {
          gross: { label: '毛利润', notes: ['仅用于 SSOT 对齐；来源图未展示毛利润。'] },
          operating: { label: '营业利润', notes: ['利润率 6%', '同比 (0 个百分点)'] },
          net: { label: '净利润', notes: ['利润率 4%', '同比 +0 个百分点'] },
        },
      },
    },
  });

  ssot.records.push({
    key: 'fedex-q4-fy26',
    company: 'FedEx',
    period: 'Q4 FY26',
    periodNote: 'Ending May 2026',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/fedex-q4-fy26.png',
    roundingTolerance: 0.2,
    revenue: {
      total: 25.0,
      notes: ['+13% Y/Y'],
      items: [
        { id: 'express', label: 'FedEx Express', value: 21.6, notes: ['+14% Y/Y', '8% operating margin'] },
        { id: 'freight', label: 'FedEx Freight', value: 2.4, notes: ['+5% Y/Y', '7% operating margin'] },
        { id: 'other_revenue', label: 'Other', value: 1.0, notes: ['+9% Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: {
        label: 'Cost of revenue',
        value: 0,
        notes: ['The source chart presents a single operating-expense waterfall and does not separately show cost of revenue or gross profit.'],
      },
      operatingExpenses: {
        total: 23.5,
        notes: ['The displayed cost-detail labels sum to $23.4B because of rounding.'],
        items: [
          { id: 'salaries_benefits', label: 'Salaries & benefits', value: 8.6 },
          { id: 'purchased_transportation', label: 'Purchased transportation', value: 6.2 },
          { id: 'rentals', label: 'Rentals', value: 1.2 },
          { id: 'depreciation_amortization', label: 'Depreciation & amortization', value: 1.1 },
          { id: 'fuel', label: 'Fuel', value: 1.4 },
          { id: 'maintenance', label: 'Maintenance', value: 0.8 },
          { id: 'business_realignment', label: 'Business realignment', value: 0.2 },
          { id: 'other_operating', label: 'Other', value: 3.9 },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.5 },
    },
    otherIncome: {
      total: 0.6,
      items: [{ id: 'other_income', label: 'Other', value: 0.6 }],
    },
    otherExpenses: { total: 0, items: [] },
    profit: {
      gross: { label: 'Gross profit', value: 25.0, notes: ['Bookkeeping value only; the source does not show gross profit.'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 1.6, notes: ['6% margin', '(2pp) Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 1.6, notes: ['6% margin', '(1pp) Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2026 财年第四季度',
        periodNote: '截至 2026 年 5 月',
        revenue: {
          notes: ['同比 +13%'],
          items: [
            { id: 'express', label: 'FedEx Express', notes: ['同比 +14%', '营业利润率 8%'] },
            { id: 'freight', label: 'FedEx Freight', notes: ['同比 +5%', '营业利润率 7%'] },
            { id: 'other_revenue', label: '其他', notes: ['同比 +9%'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本', notes: ['来源图以单一运营费用瀑布图呈现，未单独展示收入成本或毛利润。'] },
          operatingExpenses: {
            notes: ['图中展示的费用明细因四舍五入合计为 $23.4B。'],
            items: [
              { id: 'salaries_benefits', label: '薪酬与福利' },
              { id: 'purchased_transportation', label: '外购运输' },
              { id: 'rentals', label: '租赁费用' },
              { id: 'depreciation_amortization', label: '折旧与摊销' },
              { id: 'fuel', label: '燃油' },
              { id: 'maintenance', label: '维修' },
              { id: 'business_realignment', label: '业务重组' },
              { id: 'other_operating', label: '其他' },
            ],
          },
          tax: { label: '税费' },
        },
        otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
        profit: {
          gross: { label: '毛利润', notes: ['仅用于 SSOT 对齐；来源图未展示毛利润。'] },
          operating: { label: '营业利润', notes: ['利润率 6%', '同比 (2 个百分点)'] },
          net: { label: '净利润', notes: ['利润率 6%', '同比 (1 个百分点)'] },
        },
      },
    },
  });
})(window);
