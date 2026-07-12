/* Pure income-statement SSOT. Sankey geometry stays in data/datasets/. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'hpe-q2-fy26',
    company: 'HPE',
    period: 'Q2 FY26',
    periodNote: 'Ending Apr. 2026',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/hpe-q2-fy26.png',
    roundingTolerance: 0.15,
    revenue: {
      total: 10.7,
      notes: ['+40% Y/Y'],
      items: [
        { id: 'networking', label: 'Networking', value: 2.7, notes: ['22% operating margin', '+148% Y/Y'] },
        { id: 'cloud_ai', label: 'Cloud & AI', value: 7.7, notes: ['12% operating margin', '+23% Y/Y'] },
        { id: 'corporate_other', label: 'Corporate & Other', value: 0.3, notes: ['+3% Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 6.8 },
      operatingExpenses: {
        total: 3.2,
        items: [
          { id: 'sga', label: 'SG&A', value: 1.8, notes: ['17% of revenue', '+0pp Y/Y'] },
          { id: 'rnd', label: 'R&D', value: 0.9, notes: ['9% of revenue', '+2pp Y/Y'] },
          { id: 'intangibles', label: 'Intangibles', value: 0.3, notes: ['3% of revenue', '+3pp Y/Y'] },
          { id: 'other_opex', label: 'Other', value: 0.1, notes: ['1% of revenue', '(18pp) Y/Y'] },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.1 },
    },
    otherIncome: { total: 0, items: [] },
    otherExpenses: {
      total: 0.1,
      items: [{ id: 'other_nonoperating', label: 'Other', value: 0.1 }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 3.9, notes: ['37% margin', '+8pp Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 0.7, notes: ['7% margin', '+22pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 0.6, notes: ['6% margin', '+19pp Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2026 财年第二季度',
        periodNote: '截至 2026 年 4 月',
        revenue: {
          notes: ['同比 +40%'],
          items: [
            { id: 'networking', label: '网络业务', notes: ['营业利润率 22%', '同比 +148%'] },
            { id: 'cloud_ai', label: '云与 AI', notes: ['营业利润率 12%', '同比 +23%'] },
            { id: 'corporate_other', label: '公司及其他', notes: ['同比 +3%'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: {
            items: [
              { id: 'sga', label: '销售、一般及行政', notes: ['占收入 17%', '同比 +0 个百分点'] },
              { id: 'rnd', label: '研发', notes: ['占收入 9%', '同比 +2 个百分点'] },
              { id: 'intangibles', label: '无形资产摊销', notes: ['占收入 3%', '同比 +3 个百分点'] },
              { id: 'other_opex', label: '其他', notes: ['占收入 1%', '同比 (18 个百分点)'] },
            ],
          },
          tax: { label: '税费' },
        },
        otherExpenses: { items: [{ id: 'other_nonoperating', label: '其他' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 37%', '同比 +8 个百分点'] },
          operating: { label: '营业利润', notes: ['利润率 7%', '同比 +22 个百分点'] },
          net: { label: '净利润', notes: ['利润率 6%', '同比 +19 个百分点'] },
        },
      },
    },
  });
})(window);
