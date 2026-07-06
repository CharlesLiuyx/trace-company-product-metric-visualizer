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
      key: 'jd-com-q4-fy25',
      company: 'JD.com',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/jd-com-q4-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 50.4,
        notes: ['+2% Y/Y'],
        items: [
          { id: 'jd_retail', label: 'JD Retail', value: 43.2, notes: ['(2%) Y/Y', '3% operating margin', '(0pp) Y/Y'] },
          { id: 'jd_logistics', label: 'JD Logistics', value: 9.1, notes: ['+22% Y/Y', '4% operating margin', '(1pp) Y/Y'] },
          {
            id: 'new_businesses',
            label: 'New Businesses',
            value: 2.0,
            notes: ['+201% Y/Y', '(105%) operating margin', '(86pp) Y/Y'],
          },
          { id: 'intersegment_eliminations', label: 'Inter-segment eliminations', value: -3.9 },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 42.5 },
        operatingExpenses: {
          total: 8.7,
          items: [
            { id: 'fulfillment', label: 'Fulfillment', value: 3.5 },
            { id: 'marketing', label: 'Marketing', value: 3.6 },
            { id: 'rnd', label: 'R&D', value: 1.0 },
            { id: 'ga', label: 'G&A', value: 0.5 },
            { id: 'goodwill', label: 'Goodwill', value: 0.2 },
          ],
        },
        tax: { label: 'Tax', value: 0 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      // The source chart shows no tax, other-income bridge, or separate net
      // line; its bottom line is the operating loss.
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 7.9, notes: ['16% margin', '+0pp Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -0.8, notes: ['(2%) margin', '+4pp Y/Y'] },
        net: { id: 'operating_loss', label: 'Operating loss', value: -0.8, notes: ['(2%) margin', '+4pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +2%'],
            items: [
              { id: 'jd_retail', label: '京东零售', notes: ['同比 (2%)', '营业利润率 3%', '同比 (0 个百分点)'] },
              { id: 'jd_logistics', label: '京东物流', notes: ['同比 +22%', '营业利润率 4%', '同比 (1 个百分点)'] },
              { id: 'new_businesses', label: '新业务', notes: ['同比 +201%', '营业利润率 (105%)', '同比 (86 个百分点)'] },
              { id: 'intersegment_eliminations', label: '分部间抵销' },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'fulfillment', label: '履约' },
                { id: 'marketing', label: '营销' },
                { id: 'rnd', label: '研发' },
                { id: 'ga', label: '管理费用' },
                { id: 'goodwill', label: '商誉' },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 16%', '同比 +0 个百分点'] },
            operating: { label: '营业亏损', notes: ['利润率 (2%)', '同比 +4 个百分点'] },
            net: { label: '营业亏损', notes: ['利润率 (2%)', '同比 +4 个百分点'] },
          },
        },
      },
    },
    {
      key: 'jd-com-q1-fy26',
      company: 'JD.com',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/jd-com-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 45.8,
        notes: ['+5% Y/Y'],
        items: [
          { id: 'jd_retail', label: 'JD Retail', value: 38.9, notes: ['+2% Y/Y', '6% operating margin', '+1pp Y/Y'] },
          { id: 'jd_logistics', label: 'JD Logistics', value: 8.8, notes: ['+29% Y/Y', '2% operating margin', '+2pp Y/Y'] },
          {
            id: 'new_businesses',
            label: 'New Businesses',
            value: 0.9,
            notes: ['+9% Y/Y', '(165%) operating margin', '(188pp) Y/Y'],
          },
          {
            label: 'Inter-segment eliminations',
            value: -2.9,
            notes: ['Source chart rounds segment revenue and eliminations; items sum to $45.7B versus $45.8B reported total.'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 38.1 },
        operatingExpenses: {
          total: 7.1,
          items: [
            { id: 'fulfillment', label: 'Fulfillment', value: 3.4 },
            { id: 'marketing', label: 'Marketing', value: 2.2 },
            { id: 'rnd', label: 'R&D', value: 1.0 },
            { id: 'ga', label: 'General & admin', value: 0.5 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.2 },
      },
      otherIncome: {
        total: 0.5,
        items: [{ id: 'other', label: 'Other', value: 0.5 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 7.7, notes: ['17% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.6, notes: ['1% margin', '(2pp) Y/Y'] },
        net: {
          id: 'net_profit',
          label: 'Net profit',
          value: 0.8,
          notes: ['2% margin', '(2pp) Y/Y', 'Official release rounds net income to US$0.7B; source chart displays $0.8B.'],
        },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +5%'],
            items: [
              { label: '京东零售', notes: ['同比 +2%', '营业利润率 6%', '同比 +1 个百分点'] },
              { label: '京东物流', notes: ['同比 +29%', '营业利润率 2%', '同比 +2 个百分点'] },
              { label: '新业务', notes: ['同比 +9%', '营业利润率 (165%)', '同比 (188 个百分点)'] },
              { label: '分部间抵销', notes: ['源图对分部收入和抵销额做了四舍五入；分项合计为 $45.7B，报告总收入为 $45.8B。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { label: '履约' },
                { label: '营销' },
                { label: '研发' },
                { label: '管理费用' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 17%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 1%', '同比 (2 个百分点)'] },
            net: {
              label: '净利润',
              notes: ['利润率 2%', '同比 (2 个百分点)', '官方公告将净利润四舍五入为 7 亿美元；源图显示为 8 亿美元。'],
            },
          },
        },
      },
    }
  );
})(window);
