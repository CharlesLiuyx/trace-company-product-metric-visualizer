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
      key: 'amd-q1-fy26',
      company: 'AMD',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/amd-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 10.253,
        notes: ['+38% Y/Y'],
        items: [
          { id: 'data_center', label: 'Data Center', value: 5.775, notes: ['+57% Y/Y', '28% operating margin', '+3pp Y/Y'] },
          {
            id: 'client',
            label: 'Client',
            value: 2.885,
            notes: ['+26% Y/Y', 'Client and Gaming', '16% operating margin', '(1pp) Y/Y'],
          },
          { id: 'gaming', label: 'Gaming', value: 0.72, notes: ['+11% Y/Y'] },
          { id: 'embedded', label: 'Embedded', value: 0.873, notes: ['+6% Y/Y', '39% operating margin', '(1pp) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 4.837 },
        operatingExpenses: {
          total: 3.94,
          items: [
            { id: 'rnd', label: 'Research & development', value: 2.397, notes: ['23% of revenue', '+0pp Y/Y'] },
            { id: 'sga', label: 'Sales, General & Admin', value: 1.253, notes: ['12% of revenue', '+0pp Y/Y'] },
            { id: 'amortization', label: 'Amortization of intangibles', value: 0.29, notes: ['3% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.238 },
      },
      otherIncome: {
        total: 0.145,
        items: [
          {
            id: 'other',
            label: 'Other',
            value: 0.145,
            notes: ['Net impact of interest expense, other income, equity income, and discontinued operations.'],
          },
        ],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 5.416, notes: ['53% margin', '+3pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.476, notes: ['14% margin', '+4pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.383, notes: ['13% margin', '+4pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +38%'],
            items: [
              { id: 'data_center', label: '数据中心', notes: ['同比 +57%', '营业利润率 28%', '同比 +3 个百分点'] },
              { id: 'client', label: '客户端', notes: ['同比 +26%', '客户端和游戏', '营业利润率 16%', '同比 (1 个百分点)'] },
              { id: 'gaming', label: '游戏', notes: ['同比 +11%'] },
              { id: 'embedded', label: '嵌入式', notes: ['同比 +6%', '营业利润率 39%', '同比 (1 个百分点)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 23%', '同比 +0 个百分点'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 12%', '同比 +0 个百分点'] },
                { id: 'amortization', label: '无形资产摊销', notes: ['占收入 3%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'other', label: '其他', notes: ['利息费用、其他收入、权益收益和终止经营的净影响。'] },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 53%', '同比 +3 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 14%', '同比 +4 个百分点'] },
            net: { label: '净利润', notes: ['利润率 13%', '同比 +4 个百分点'] },
          },
        },
      },
    }
  );
})(window);
