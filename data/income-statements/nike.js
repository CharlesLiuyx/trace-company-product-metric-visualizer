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
      key: 'nike-q4-fy26',
      company: 'Nike',
      period: 'Q4 FY26',
      periodNote: 'Ending May 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/nike-q4-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 11.0,
        notes: ['(1%) Y/Y', 'China (12%) Y/Y', 'RoW +1% Y/Y'],
        items: [
          { id: 'footwear', label: 'Footwear', value: 7.1, notes: ['(1%) Y/Y'] },
          { id: 'apparel', label: 'Apparel', value: 3.0, notes: ['+1% Y/Y'] },
          { id: 'equipment', label: 'Equipment', value: 0.6, notes: ['(3%) Y/Y'] },
          { id: 'converse', label: 'Converse', value: 0.2, notes: ['(32%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 5.6 },
        operatingExpenses: {
          total: 4.1,
          items: [
            { id: 'overhead', label: 'Overhead', value: 2.9, notes: ['26% of revenue', '+0pp Y/Y'] },
            { id: 'demand_creation', label: 'Demand Creation', value: 1.2, notes: ['11% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.3 },
      },
      otherIncome: {
        total: 0.0,
        items: [
          { id: 'other', label: 'Other', value: 0.0, notes: ['Rounds to $0.0B in the source image'] },
        ],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 5.4, notes: ['49% margin', '+9pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.3, notes: ['12% margin', '+9pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.1, notes: ['10% margin', '+8pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第四季度',
          periodNote: '截至 2026 年 5 月',
          revenue: {
            notes: ['同比 (1%)', '中国同比 (12%)', '其他地区同比 +1%'],
            items: [
              { id: 'footwear', label: '鞋类', notes: ['同比 (1%)'] },
              { id: 'apparel', label: '服装', notes: ['同比 +1%'] },
              { id: 'equipment', label: '装备', notes: ['同比 (3%)'] },
              { id: 'converse', label: 'Converse', notes: ['同比 (32%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'overhead', label: '管理费用', notes: ['占收入 26%', '同比 +0 个百分点'] },
                { id: 'demand_creation', label: '需求创造费用', notes: ['占收入 11%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'other', label: '其他', notes: ['源图中四舍五入为 $0.0B'] },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 49%', '同比 +9 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 12%', '同比 +9 个百分点'] },
            net: { label: '净利润', notes: ['利润率 10%', '同比 +8 个百分点'] },
          },
        },
      },
    },
    {
      key: 'nike-q3-fy26',
      company: 'Nike',
      period: 'Q3 FY26',
      periodNote: 'Ending Feb. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/nike-q3-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 11.3,
        notes: ['+0% Y/Y', 'China (7%) Y/Y', 'RoW +1% Y/Y'],
        items: [
          { id: 'footwear', label: 'Footwear', value: 7.4, notes: ['+2% Y/Y'] },
          { id: 'apparel', label: 'Apparel', value: 3.2, notes: ['(0%) Y/Y'] },
          { id: 'equipment', label: 'Equipment', value: 0.5, notes: ['(2%) Y/Y'] },
          { id: 'converse', label: 'Converse', value: 0.3, notes: ['(30%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 6.7 },
        operatingExpenses: {
          total: 4.0,
          items: [
            { id: 'overhead', label: 'Overhead', value: 2.9, notes: ['26% of revenue', '+1pp Y/Y'] },
            { id: 'demand_creation', label: 'Demand Creation', value: 1.1, notes: ['10% of revenue', '+0pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.1 },
      },
      otherIncome: {
        total: 0.1,
        items: [
          { id: 'other', label: 'Other', value: 0.1 },
        ],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 4.5, notes: ['40% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.6, notes: ['5% margin', '(2pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.5, notes: ['5% margin', '(2pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第三季度',
          periodNote: '截至 2026 年 2 月',
          revenue: {
            notes: ['同比 +0%', '中国同比 (7%)', '其他地区同比 +1%'],
            items: [
              { id: 'footwear', label: '鞋类', notes: ['同比 +2%'] },
              { id: 'apparel', label: '服装', notes: ['同比 (0%)'] },
              { id: 'equipment', label: '装备', notes: ['同比 (2%)'] },
              { id: 'converse', label: 'Converse', notes: ['同比 (30%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'overhead', label: '管理费用', notes: ['占收入 26%', '同比 +1 个百分点'] },
                { id: 'demand_creation', label: '需求创造费用', notes: ['占收入 10%', '同比 +0 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'other', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 40%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 5%', '同比 (2 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 5%', '同比 (2 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
