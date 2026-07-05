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
      key: 'netease-q1-fy26',
      company: 'NetEase',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/netease-q1-fy26.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 4.4,
        notes: ['+6% Y/Y'],
        items: [
          {
            id: 'games',
            label: 'Games and related value-added services',
            value: 3.7,
            notes: ['+7% Y/Y', '75% gross margin'],
          },
          { id: 'cloud_music', label: 'Cloud Music', value: 0.3, notes: ['+7% Y/Y', '37% gross margin'] },
          { id: 'youdao', label: 'Youdao', value: 0.2, notes: ['+4% Y/Y', '45% gross margin'] },
          {
            id: 'innovative_businesses',
            label: 'Innovative Businesses & Others',
            value: 0.2,
            notes: ['(5%) Y/Y', '42% gross margin'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 1.4 },
        operatingExpenses: {
          total: 1.2,
          notes: ['R&D, S&M, and G&A line items sum to $1.3B because the source chart rounds to one decimal place.'],
          items: [
            { id: 'rnd', label: 'R&D', value: 0.7, notes: ['15% of revenue', '(1pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 0.5, notes: ['11% of revenue', '+2pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.1, notes: ['2% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.4 },
      },
      otherIncome: {
        total: 0.1,
        items: [{ id: 'other', label: 'Other', value: 0.1 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 3.1, notes: ['69% margin', '+5pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.8, notes: ['41% margin', '+5pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.6, notes: ['35% margin', '(1pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +6%'],
            items: [
              { label: '游戏及相关增值服务', notes: ['同比 +7%', '毛利率 75%'] },
              { label: '云音乐', notes: ['同比 +7%', '毛利率 37%'] },
              { label: '有道', notes: ['同比 +4%', '毛利率 45%'] },
              { label: '创新业务及其他', notes: ['同比 (5%)', '毛利率 42%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['研发、销售与营销、管理费用明细合计为 13 亿美元，因为源图按一位小数四舍五入。'],
              items: [
                { label: '研发', notes: ['占收入 15%', '同比 (1 个百分点)'] },
                { label: '销售与营销', notes: ['占收入 11%', '同比 +2 个百分点'] },
                { label: '管理费用', notes: ['占收入 2%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 69%', '同比 +5 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 41%', '同比 +5 个百分点'] },
            net: { label: '净利润', notes: ['利润率 35%', '同比 (1 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
