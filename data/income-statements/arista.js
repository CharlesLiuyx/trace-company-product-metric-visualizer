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
      key: 'arista-q1-fy26',
      company: 'Arista',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/arista-q1-fy26.png',
      roundingTolerance: 0.12,
      revenue: {
        total: 2.709,
        notes: ['+35% Y/Y'],
        items: [
          { id: 'product', label: 'Product', value: 2.3113, notes: ['+37% Y/Y', '58% gross margin', '(2pp) Y/Y'] },
          { id: 'service', label: 'Service', value: 0.3977, notes: ['+27% Y/Y', '82% gross margin', '+0pp Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 1.0322,
          notes: ['Source chart splits cost of revenue into Product ($1.0B) and Service ($0.1B).'],
        },
        operatingExpenses: {
          total: 0.519,
          items: [
            { id: 'rnd', label: 'R&D', value: 0.3437, notes: ['13% of revenue', '(1pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 0.1416, notes: ['5% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.0337, notes: ['1% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.2485 },
      },
      otherIncome: {
        total: 0.1136,
        items: [{ id: 'other_income', label: 'Other', value: 0.1136 }],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1.6768, notes: ['62% margin', '(2pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.1578, notes: ['43% margin', '(0pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.0229, notes: ['38% margin', '(3pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月 31 日',
          revenue: {
            notes: ['同比 +35%'],
            items: [
              { id: 'product', label: '产品', notes: ['同比 +37%', '毛利率 58%', '同比 (2 个百分点)'] },
              { id: 'service', label: '服务', notes: ['同比 +27%', '毛利率 82%', '同比 +0 个百分点'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本', notes: ['来源图将收入成本拆分为产品 ($1.0B) 和服务 ($0.1B)。'] },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 13%', '同比 (1 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 5%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 1%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '所得税费用' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他收入' }] },
          profit: {
            gross: { label: '毛利润', notes: ['毛利率 62%', '同比 (2 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 43%', '同比 (0 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 38%', '同比 (3 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'arista-q4-fy25',
      company: 'Arista',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/arista-q4-fy25.png',
      roundingTolerance: 0.12,
      revenue: {
        total: 2.4878,
        notes: ['+29% Y/Y'],
        items: [
          {
            id: 'product',
            label: 'Product',
            value: 2.0957,
            notes: ['+30% Y/Y', '59% gross margin', '(1pp) Y/Y'],
          },
          {
            id: 'service',
            label: 'Service',
            value: 0.3921,
            notes: ['+22% Y/Y', '82% gross margin', '(1pp) Y/Y'],
          },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 0.924,
          notes: ['Source chart splits cost of revenue into Product ($0.9B) and Service ($0.1B).'],
        },
        operatingExpenses: {
          total: 0.5309,
          items: [
            { id: 'rnd', label: 'R&D', value: 0.3484, notes: ['14% of revenue', '(1pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 0.1391, notes: ['6% of revenue', '(0pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.0434, notes: ['2% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.1816 },
      },
      otherIncome: {
        total: 0.1045,
        items: [{ id: 'other_income', label: 'Other', value: 0.1045 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1.5638, notes: ['63% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.0329, notes: ['42% margin', '+0pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.9558, notes: ['37% margin', '(4pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月 31 日',
          revenue: {
            notes: ['同比 +29%'],
            items: [
              { id: 'product', label: '产品', notes: ['同比 +30%', '毛利率 59%', '同比 (1 个百分点)'] },
              { id: 'service', label: '服务', notes: ['同比 +22%', '毛利率 82%', '同比 (1 个百分点)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本', notes: ['来源图将收入成本拆分为产品 ($0.9B) 和服务 ($0.1B)。'] },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 14%', '同比 (1 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 6%', '同比 (0 个百分点)'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 2%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '所得税费用' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他收入' }] },
          profit: {
            gross: { label: '毛利润', notes: ['毛利率 63%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 42%', '同比 +0 个百分点'] },
            net: { label: '净利润', notes: ['利润率 37%', '同比 (4 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
