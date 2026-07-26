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
      key: 'health-equity-q4-fy26',
      company: 'HealthEquity',
      period: 'Q4 FY26',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/health-equity-q4-fy26.png',
      roundingTolerance: 2.1,
      revenue: {
        total: 335,
        notes: ['+7% Y/Y'],
        items: [
          { id: 'service', label: 'Service', value: 127, notes: ['+2% Y/Y', '36% gross margin'] },
          { id: 'custodial', label: 'Custodial', value: 161, notes: ['+12% Y/Y', '93% gross margin'] },
          { id: 'interchange', label: 'Interchange', value: 46, notes: ['+6% Y/Y', '85% gross margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 106 },
        operatingExpenses: {
          total: 157,
          items: [
            { id: 'technology_development', label: 'Technology & development', value: 70 },
            { id: 'general_admin', label: 'General & admin', value: 34 },
            { id: 'amortization', label: 'Amortization', value: 27 },
            { id: 'sales_marketing', label: 'Sales & marketing', value: 25 },
            { id: 'merger_costs', label: 'Merger costs', value: 1 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 11 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 10,
        items: [{ id: 'interest_other', label: 'Interest & Other', value: 10 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 228, notes: ['68% margin', '+8pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 71, notes: ['21% margin', '+8pp Y/Y'] },
        net: {
          id: 'net_profit',
          label: 'Net profit',
          value: 50,
          notes: [
            '15% margin',
            '+6pp Y/Y',
            'Source values are rounded to whole millions; operating profit less tax and interest & other equals $50M.',
          ],
        },
      },
      i18n: {
        zh: {
          period: '2026 财年第四季度',
          periodNote: '截至 2026 年 1 月',
          revenue: {
            notes: ['同比 +7%'],
            items: [
              { id: 'service', label: '服务', notes: ['同比 +2%', '毛利率 36%'] },
              { id: 'custodial', label: '托管', notes: ['同比 +12%', '毛利率 93%'] },
              { id: 'interchange', label: '交换费', notes: ['同比 +6%', '毛利率 85%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'technology_development', label: '技术与开发' },
                { id: 'general_admin', label: '一般及行政' },
                { id: 'amortization', label: '摊销' },
                { id: 'sales_marketing', label: '销售与市场' },
                { id: 'merger_costs', label: '并购成本' },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'interest_other', label: '利息及其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 68%', '同比 +8 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 21%', '同比 +8 个百分点'] },
            net: {
              label: '净利润',
              notes: ['利润率 15%', '同比 +6 个百分点', '源图以整百万美元取整；营业利润扣除税费和利息及其他后为 5,000 万美元。'],
            },
          },
        },
      },
    },
    {
      key: 'health-equity-q1-fy27',
      company: 'HealthEquity',
      period: 'Q1 FY27',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/health-equity-q1-fy27.png',
      roundingTolerance: 2.1,
      revenue: {
        total: 355,
        notes: ['+7% Y/Y'],
        items: [
          { id: 'service', label: 'Service', value: 123, notes: ['+3% Y/Y', '36% gross margin'] },
          { id: 'custodial', label: 'Custodial', value: 174, notes: ['+11% Y/Y', '93% gross margin'] },
          { id: 'interchange', label: 'Interchange', value: 57, notes: ['+5% Y/Y', '85% gross margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 98 },
        operatingExpenses: {
          total: 153,
          items: [
            { id: 'technology_development', label: 'Technology & development', value: 68 },
            { id: 'general_admin', label: 'General & admin', value: 31 },
            { id: 'amortization', label: 'Amortization', value: 27 },
            { id: 'sales_marketing', label: 'Sales & marketing', value: 27 },
            { id: 'merger_costs', label: 'Merger costs', value: 1 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 23 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 11,
        items: [{ id: 'interest_other', label: 'Interest & Other', value: 11 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 256, notes: ['72% margin', '+4pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 103, notes: ['29% margin', '+4pp Y/Y'] },
        net: {
          id: 'net_profit',
          label: 'Net profit',
          value: 69,
          notes: [
            '20% margin',
            '+3pp Y/Y',
            'Source values are rounded to whole millions; operating profit less tax and interest & other sums to $69M.',
          ],
        },
      },
      i18n: {
        zh: {
          period: '2027 财年第一季度',
          periodNote: '截至 2026 年 4 月',
          revenue: {
            notes: ['同比 +7%'],
            items: [
              { id: 'service', label: '服务', notes: ['同比 +3%', '毛利率 36%'] },
              { id: 'custodial', label: '托管', notes: ['同比 +11%', '毛利率 93%'] },
              { id: 'interchange', label: '交换费', notes: ['同比 +5%', '毛利率 85%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'technology_development', label: '技术与开发' },
                { id: 'general_admin', label: '一般及行政' },
                { id: 'amortization', label: '摊销' },
                { id: 'sales_marketing', label: '销售与市场' },
                { id: 'merger_costs', label: '并购成本' },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'interest_other', label: '利息及其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 72%', '同比 +4 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 29%', '同比 +4 个百分点'] },
            net: {
              label: '净利润',
              notes: ['利润率 20%', '同比 +3 个百分点', '源图以整百万美元取整；营业利润扣除税费和利息及其他后为 6,900 万美元。'],
            },
          },
        },
      },
    }
  );
})(window);
