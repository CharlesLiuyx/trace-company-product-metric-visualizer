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
      key: 'match-group-q4-fy25',
      company: 'Match Group',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/match-group-q4-fy25.png',
      roundingTolerance: 2.1,
      revenue: {
        total: 878,
        notes: ['+2% Y/Y'],
        items: [
          { id: 'tinder', label: 'Tinder', value: 464, notes: ['(3%) Y/Y'] },
          { id: 'hinge', label: 'Hinge', value: 187, notes: ['+26% Y/Y'] },
          { id: 'asia', label: 'Asia', value: 66, notes: ['(2%) Y/Y'] },
          { id: 'evergreen_emerging', label: 'Evergreen & Emerging', value: 145, notes: ['(7%) Y/Y'] },
          { id: 'indirect', label: 'Indirect', value: 18, notes: ['+19% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 222 },
        operatingExpenses: {
          total: 371,
          items: [
            { id: 'sm', label: 'S&M', value: 151, notes: ['17% of revenue', '+0pp Y/Y'] },
            { id: 'product', label: 'Product', value: 109, notes: ['12% of revenue', '(0pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 89, notes: ['10% of revenue', '(3pp) Y/Y'] },
            { id: 'da', label: 'D&A', value: 12, notes: ['1% of revenue', '(0pp) Y/Y'] },
            { id: 'other_operating', label: 'Other', value: 9 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 45 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 30,
        items: [
          {
            id: 'other_non_operating',
            label: 'Other',
            value: 30,
            notes: ['Net of $43M interest expense and $13M other income'],
          },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 656, notes: ['75% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 285, notes: ['32% margin', '+6pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 210, notes: ['24% margin', '+5pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +2%'],
            items: [
              { id: 'tinder', label: 'Tinder', notes: ['同比 (3%)'] },
              { id: 'hinge', label: 'Hinge', notes: ['同比 +26%'] },
              { id: 'asia', label: '亚洲', notes: ['同比 (2%)'] },
              { id: 'evergreen_emerging', label: '常青与新兴品牌', notes: ['同比 (7%)'] },
              { id: 'indirect', label: '间接收入', notes: ['同比 +19%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 17%', '同比 +0 个百分点'] },
                { id: 'product', label: '产品开发', notes: ['占收入 12%', '同比 (0 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 10%', '同比 (3 个百分点)'] },
                { id: 'da', label: '折旧及摊销', notes: ['占收入 1%', '同比 (0 个百分点)'] },
                { id: 'other_operating', label: '其他' },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [
              {
                id: 'other_non_operating',
                label: '其他',
                notes: ['由 4,300 万美元利息费用与 1,300 万美元其他收入净额构成'],
              },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 75%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 32%', '同比 +6 个百分点'] },
            net: { label: '净利润', notes: ['利润率 24%', '同比 +5 个百分点'] },
          },
        },
      },
    }
  );
})(window);
