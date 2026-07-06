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
      key: 'pdd-holdings-q1-fy26',
      company: 'PDD Holdings',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/pdd-holdings-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 15.4,
        notes: ['+11% Y/Y'],
        items: [
          {
            id: 'online_marketing',
            label: 'Online Marketing & Others',
            value: 7.2,
            notes: ['+2% Y/Y', 'Performance-based services'],
          },
          { id: 'transaction_services', label: 'Transaction Services', value: 8.2, notes: ['+20% Y/Y', 'Merchant fee'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 6.8 },
        operatingExpenses: {
          total: 5.8,
          notes: ['R&D, sales and marketing, and G&A line items sum to $5.7B because the source chart rounds to one decimal place.'],
          items: [
            { id: 'sm', label: 'Sales & marketing', value: 4.9, notes: ['32% of revenue', '(3pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 0.6, notes: ['4% of revenue', '+0pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.2, notes: ['1% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.6 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.4,
        items: [{ id: 'other', label: 'Other', value: 0.4 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 8.6, notes: ['56% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.8, notes: ['18% margin', '+2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.8, notes: ['12% margin', '(4pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +11%'],
            items: [
              { label: '在线营销及其他', notes: ['同比 +2%', '基于绩效的服务'] },
              { label: '交易服务', notes: ['同比 +20%', '商户费用'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['研发、销售与市场、管理费用明细合计为 57 亿美元，因为源图按一位小数四舍五入。'],
              items: [
                { label: '销售与市场', notes: ['占收入 32%', '同比 (3 个百分点)'] },
                { label: '研发', notes: ['占收入 4%', '同比 +0 个百分点'] },
                { label: '管理费用', notes: ['占收入 1%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [{ label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 56%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 18%', '同比 +2 个百分点'] },
            net: { label: '净利润', notes: ['利润率 12%', '同比 (4 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'pdd-holdings-q4-fy25',
      company: 'PDD Holdings',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/pdd-holdings-q4-fy25.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 17.7,
        notes: ['+12% Y/Y'],
        items: [
          {
            id: 'online_marketing',
            label: 'Online Marketing & Others',
            value: 8.6,
            notes: ['+5% Y/Y', 'Performance-based services'],
          },
          { id: 'transaction_services', label: 'Transaction Services', value: 9.1, notes: ['+19% Y/Y', 'Merchant fee'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 7.9 },
        operatingExpenses: {
          total: 5.9,
          notes: ['R&D, sales and marketing, and G&A line items sum to $5.8B because the source chart rounds to one decimal place.'],
          items: [
            { id: 'sm', label: 'Sales & marketing', value: 4.9, notes: ['28% of revenue', '(1pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 0.7, notes: ['4% of revenue', '+1pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.2, notes: ['1% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 1.2 },
      },
      otherIncome: {
        total: 0.8,
        items: [{ id: 'other', label: 'Other', value: 0.8 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 9.8, notes: ['55% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 4.0, notes: ['22% margin', '(1pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 3.5, notes: ['20% margin', '(5pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +12%'],
            items: [
              { label: '在线营销及其他', notes: ['同比 +5%', '基于绩效的服务'] },
              { label: '交易服务', notes: ['同比 +19%', '商户费用'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['研发、销售与市场、管理费用明细合计为 58 亿美元，因为源图按一位小数四舍五入。'],
              items: [
                { label: '销售与市场', notes: ['占收入 28%', '同比 (1 个百分点)'] },
                { label: '研发', notes: ['占收入 4%', '同比 +1 个百分点'] },
                { label: '管理费用', notes: ['占收入 1%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 55%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 22%', '同比 (1 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 20%', '同比 (5 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
