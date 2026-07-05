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
      key: 'lululemon-q1-fy26',
      company: 'lululemon athletica',
      period: 'Q1 FY26',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/lululemon-q1-fy26.png',
      roundingTolerance: 0.2,
      revenue: {
        total: 2.5,
        notes: ['+4% Y/Y', 'Women +4% Y/Y', 'Men +7% Y/Y', 'Other (1%) Y/Y'],
        items: [
          { id: 'operated_stores', label: 'Operated stores', value: 1.2, notes: ['+3% Y/Y'] },
          { id: 'direct_to_consumer', label: 'Direct to consumer', value: 1.1, notes: ['+4% Y/Y'] },
          {
            id: 'other_revenue',
            label: 'Other revenue',
            value: 0.3,
            notes: ['+9% Y/Y', 'Outlets, temporary locations, wholesale accounts, license and supply arrangement'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 1.1 },
        operatingExpenses: {
          total: 1.1,
          items: [
            { id: 'sga', label: 'SG&A', value: 1.1, notes: ['43% of revenue', '+3pp Y/Y'] },
            { id: 'amortization', label: 'Amortization', value: 0.002, notes: ['Shown as ($2M) in the source image'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.1 },
      },
      otherIncome: {
        total: 0.009,
        items: [
          { id: 'other', label: 'Other', value: 0.009, notes: ['Shown as $9M in the source image'] },
        ],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1.3, notes: ['54% margin', '(4pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.3, notes: ['11% margin', '(7pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.2, notes: ['8% margin', '(5pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 4 月',
          revenue: {
            notes: ['同比 +4%', '女装同比 +4%', '男装同比 +7%', '其他同比 (1%)'],
            items: [
              { id: 'operated_stores', label: '自营门店', notes: ['同比 +3%'] },
              { id: 'direct_to_consumer', label: '直接面向消费者', notes: ['同比 +4%'] },
              {
                id: 'other_revenue',
                label: '其他收入',
                notes: ['同比 +9%', '奥特莱斯、临时店铺、批发客户、授权与供应安排'],
              },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售及管理费用', notes: ['占收入 43%', '同比 +3 个百分点'] },
                { id: 'amortization', label: '摊销', notes: ['源图中显示为 ($2M)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'other', label: '其他', notes: ['源图中显示为 $9M'] },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 54%', '同比 (4 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 11%', '同比 (7 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 8%', '同比 (5 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
