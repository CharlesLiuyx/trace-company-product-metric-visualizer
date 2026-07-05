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
      key: 'digital-ocean-q1-fy26',
      company: 'DigitalOcean',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/digital-ocean-q1-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 258,
        notes: ['+22% Y/Y'],
        items: [
          { id: 'north_america', label: 'North America', value: 113, notes: ['+19% Y/Y'] },
          { id: 'europe', label: 'Europe', value: 62, notes: ['(14%) Y/Y'] },
          { id: 'asia', label: 'Asia', value: 57, notes: ['(8%) Y/Y'] },
          { id: 'other', label: 'Other', value: 26, notes: ['(9%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 113 },
        operatingExpenses: {
          total: 108,
          notes: ['Source chart rounds R&D, G&A, and S&M labels; displayed components sum to $109M.'],
          items: [
            { id: 'rnd', label: 'R&D', value: 49, notes: ['19% of revenue', '+0pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 38, notes: ['15% of revenue', '(1pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 22, notes: ['8% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 9 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 12,
        items: [{ id: 'interest', label: 'Interest', value: 12 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 145, notes: ['56% margin', '(5pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 37, notes: ['14% margin', '(3pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 16, notes: ['6% margin', '(12pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +22%'],
            items: [
              { id: 'north_america', label: '北美', notes: ['同比 +19%'] },
              { id: 'europe', label: '欧洲', notes: ['同比 (14%)'] },
              { id: 'asia', label: '亚洲', notes: ['同比 (8%)'] },
              { id: 'other', label: '其他', notes: ['同比 (9%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['来源图表对 R&D、G&A 和 S&M 标签取整；显示的组成项合计为 $109M。'],
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 19%', '同比 +0 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 15%', '同比 (1 个百分点)'] },
                { id: 'sm', label: '销售与营销', notes: ['占收入 8%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [{ id: 'interest', label: '利息' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 56%', '同比 (5 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 14%', '同比 (3 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 6%', '同比 (12 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
