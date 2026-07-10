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
      key: 'paycom-q4-fy25',
      company: 'Paycom',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/paycom-q4-fy25.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 544.0,
        notes: ['+10% Y/Y'],
        items: [
          { id: 'recurring', label: 'Recurring', value: 517.0, notes: ['+11% Y/Y'] },
          { id: 'implementation_other', label: 'Implementation and other', value: 27.0, notes: ['(6%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 88.0 },
        operatingExpenses: {
          total: 299.0,
          items: [
            { id: 'sm', label: 'S&M', value: 130.0, notes: ['24% of revenue', '+2pp Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 72.0, notes: ['13% of revenue', '(0pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 71.0, notes: ['13% of revenue', '(0pp) Y/Y'] },
            { id: 'depreciation', label: 'Depreciation', value: 26.0 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 45.0 },
      },
      otherIncome: {
        total: 2.0,
        items: [{ id: 'other', label: 'Other', value: 2.0 }],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 457.0, notes: ['84% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 157.0, notes: ['29% margin', '(1pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 114.0, notes: ['21% margin', '(2pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +10%'],
            items: [
              { label: '经常性收入', notes: ['同比 +11%'] },
              { label: '实施及其他', notes: ['同比 (6%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { label: '销售与市场', notes: ['占收入 24%', '同比 +2 个百分点'] },
                { label: '研发', notes: ['占收入 13%', '同比 (0 个百分点)'] },
                { label: '一般及行政', notes: ['占收入 13%', '同比 (0 个百分点)'] },
                { label: '折旧摊销' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 84%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 29%', '同比 (1 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 21%', '同比 (2 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'paycom-q1-fy26',
      company: 'Paycom',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/paycom-q1-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 571.9,
        notes: ['+8% Y/Y'],
        items: [
          { id: 'recurring', label: 'Recurring', value: 544.0, notes: ['+9% Y/Y', 'Reported by Paycom as recurring and other revenues.'] },
          {
            id: 'implementation_other',
            label: 'Implementation and other',
            value: 27.8,
            notes: ['(9%) Y/Y', 'Reported by Paycom as interest on funds held for clients.'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 87.3 },
        operatingExpenses: {
          total: 274.3,
          notes: ['Operating expense detail sums to $274.4M due to rounding.'],
          items: [
            { id: 'sm', label: 'S&M', value: 117.6, notes: ['21% of revenue', '(0pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 69.4, notes: ['12% of revenue', '(0pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 60.7, notes: ['11% of revenue', '(1pp) Y/Y'] },
            { id: 'depreciation', label: 'Depreciation', value: 26.7 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 59.5 },
      },
      otherIncome: {
        total: 5.0,
        items: [
          {
            id: 'other',
            label: 'Other',
            value: 5.0,
            notes: ['Net of other income, net and interest expense; source chart displays the line as $4M.'],
          },
        ],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 484.5, notes: ['85% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 210.2, notes: ['37% margin', '+2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 155.7, notes: ['27% margin', '+1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +8%'],
            items: [
              { label: '经常性收入', notes: ['同比 +9%', 'Paycom 披露为经常性及其他收入。'] },
              { label: '实施及其他', notes: ['同比 (9%)', 'Paycom 披露为客户资金利息收入。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['由于四舍五入，营业费用明细合计为 274.4M 美元。'],
              items: [
                { label: '销售与市场', notes: ['占收入 21%', '同比 (0 个百分点)'] },
                { label: '一般及行政', notes: ['占收入 12%', '同比 (0 个百分点)'] },
                { label: '研发', notes: ['占收入 11%', '同比 (1 个百分点)'] },
                { label: '折旧摊销' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ label: '其他', notes: ['其他收入净额扣除利息费用后的净额；来源图显示为 4M 美元。'] }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 85%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 37%', '同比 +2 个百分点'] },
            net: { label: '净利润', notes: ['利润率 27%', '同比 +1 个百分点'] },
          },
        },
      },
    }
  );
})(window);
