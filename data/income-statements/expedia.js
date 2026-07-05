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
      key: 'expedia-q1-fy26',
      company: 'Expedia',
      period: 'Q1 FY26',
      periodNote: 'Quarter ended Mar. 31, 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/expedia-q1-fy26.png',
      roundingTolerance: 0.02,
      revenue: {
        total: 3.426,
        notes: ['+15% Y/Y'],
        items: [
          { id: 'lodging', label: 'Lodging', value: 2.610, notes: ['+14% Y/Y'] },
          { id: 'air', label: 'Air', value: 0.107, notes: ['Flat Y/Y'] },
          {
            id: 'advertising',
            label: 'Advertising',
            value: 0.322,
            notes: ['+24% Y/Y', 'Advertising & Media: Expedia Group Advertising $197M plus trivago $125M.'],
          },
          { id: 'other_revenue', label: 'Other', value: 0.387, notes: ['+16% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 0.377 },
        operatingExpenses: {
          total: 2.798,
          items: [
            {
              id: 'sm',
              label: 'Sales & marketing',
              value: 2.058,
              notes: ['60% of revenue', '(5pp) Y/Y', 'Direct $1,856M plus indirect $202M.'],
            },
            { id: 'technology', label: 'Technology', value: 0.324, notes: ['Technology and content.'] },
            { id: 'amortization', label: 'Amortization', value: 0.228, notes: ['Depreciation and amortization.'] },
            { id: 'ga', label: 'G&A', value: 0.196 },
            {
              id: 'other_opex',
              label: 'Other',
              value: 0.056,
              notes: ['Restructuring and related reorganization charges.'],
            },
            {
              label: 'Legal reserves, occupancy tax and other',
              value: -0.064,
              notes: ['Credit line omitted from the source chart, which draws only the five positive expense items.'],
            },
          ],
        },
        tax: {
          label: 'Tax',
          value: 0.037,
          notes: ['Drawn inside the combined non-operating "Other" outflow in the source chart.'],
        },
      },
      otherIncome: {
        total: 0.060,
        items: [{ id: 'other_income', label: 'Other income', value: 0.060, notes: ['Interest income.'] }],
      },
      otherExpenses: {
        total: 0.286,
        items: [
          { label: 'Interest expense', value: 0.111 },
          { label: 'Other, net', value: 0.175 },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 3.049, notes: ['89% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.251, notes: ['7% margin', '+10pp Y/Y'] },
        net: {
          id: 'net_loss',
          label: 'Net loss',
          value: -0.012,
          notes: ['Total net loss including non-controlling interests; $(6)M attributable to Expedia Group.'],
        },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月 31 日的季度',
          revenue: {
            notes: ['同比 +15%'],
            items: [
              { id: 'lodging', label: '住宿', notes: ['同比 +14%'] },
              { id: 'air', label: '机票', notes: ['同比持平'] },
              {
                id: 'advertising',
                label: '广告',
                notes: ['同比 +24%', '广告与媒体：Expedia Group 广告 $197M 加 trivago $125M。'],
              },
              { id: 'other_revenue', label: '其他', notes: ['同比 +16%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                {
                  id: 'sm',
                  label: '销售与市场',
                  notes: ['占收入 60%', '同比 (5 个百分点)', '直接 $1,856M 加间接 $202M。'],
                },
                { id: 'technology', label: '技术', notes: ['技术与内容。'] },
                { id: 'amortization', label: '摊销', notes: ['折旧与摊销。'] },
                { id: 'ga', label: '管理费用' },
                { id: 'other_opex', label: '其他', notes: ['重组及相关整编费用。'] },
                {
                  label: '法律准备金、住宿税及其他',
                  notes: ['信贷项，来源图未绘制；图中仅绘制五个正费用项。'],
                },
              ],
            },
            tax: { label: '税费', notes: ['来源图将税费并入非经营性"其他"流出。'] },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他收益', notes: ['利息收入。'] }],
          },
          otherExpenses: {
            items: [
              { label: '利息费用' },
              { label: '其他（净额）' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 89%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 7%', '同比 +10 个百分点'] },
            net: {
              label: '净亏损',
              notes: ['含少数股东权益的净亏损总额；归属于 Expedia Group 为 $(6)M。'],
            },
          },
        },
      },
    }
  );
})(window);
