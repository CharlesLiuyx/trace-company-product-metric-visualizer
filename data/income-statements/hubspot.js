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
      key: 'hubspot-q1-fy26',
      company: 'HubSpot',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/hubspot-q1-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 881,
        notes: ['+23% Y/Y'],
        items: [
          { id: 'subscription', label: 'Subscription', value: 862, notes: ['+23% Y/Y', '85% gross margin'] },
          {
            id: 'professional_services',
            label: 'Professional services',
            value: 19,
            notes: ['+22% Y/Y', '9% gross margin'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 146 },
        operatingExpenses: {
          total: 707,
          items: [
            { id: 'sm', label: 'S&M', value: 386, notes: ['44% of revenue', '(2pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 234, notes: ['27% of revenue', '(4pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 86, notes: ['10% of revenue', '(1pp) Y/Y'] },
            { id: 'restructuring', label: 'Restructuring', value: 1, notes: ['0% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 7 },
      },
      otherIncome: {
        total: 11,
        items: [{ id: 'interest', label: 'Interest', value: 11 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 735, notes: ['83% margin', '(0pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 28, notes: ['3% margin', '+7pp Y/Y'] },
        net: {
          id: 'net_profit',
          label: 'Net profit',
          value: 33,
          notes: ['4% margin', '+6pp Y/Y', 'Displayed rounded bridge sums to $32M; source chart shows $33M net profit.'],
        },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +23%'],
            items: [
              { id: 'subscription', label: '订阅', notes: ['同比 +23%', '毛利率 85%'] },
              { id: 'professional_services', label: '专业服务', notes: ['同比 +22%', '毛利率 9%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 44%', '同比 (2 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 27%', '同比 (4 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 10%', '同比 (1 个百分点)'] },
                { id: 'restructuring', label: '重组费用', notes: ['占收入 0%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'interest', label: '利息' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 83%', '同比 (0 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 3%', '同比 +7 个百分点'] },
            net: {
              label: '净利润',
              notes: ['利润率 4%', '同比 +6 个百分点', '显示值四舍五入桥接合计为 $32M；源图显示净利润为 $33M。'],
            },
          },
        },
      },
    }
  );
})(window);
