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
      key: 'uipath-q1-fy27',
      company: 'UiPath',
      period: 'Q1 FY27',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/uipath-q1-fy27.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 418,
        notes: ['+17% Y/Y'],
        items: [
          { id: 'subscription', label: 'Subscription', value: 253, notes: ['+16% Y/Y', '83% gross margin'] },
          { id: 'licenses', label: 'Licenses', value: 149, notes: ['+16% Y/Y', '99% gross margin'] },
          {
            id: 'professional_services',
            label: 'Professional services',
            value: 16,
            notes: ['+47% Y/Y', '(93%) gross margin'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 77 },
        operatingExpenses: {
          total: 313,
          items: [
            { id: 'sm', label: 'S&M', value: 168, notes: ['40% of revenue', '(5pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 93, notes: ['22% of revenue', '(4pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 53, notes: ['13% of revenue', '(3pp) Y/Y'] },
          ],
          notes: ['S&M, R&D, and G&A sum to $314M due to rounded source figures.'],
        },
        tax: { id: 'tax', label: 'Tax', value: 18 },
      },
      otherIncome: {
        total: 13,
        items: [{ id: 'other', label: 'Other', value: 13 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 341, notes: ['82% margin', '(0pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 28, notes: ['7% margin', '+11pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 23, notes: ['7% margin', '+11pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2027 财年第一季度',
          periodNote: '截至 2026 年 4 月',
          revenue: {
            notes: ['同比 +17%'],
            items: [
              { id: 'subscription', label: '订阅', notes: ['同比 +16%', '毛利率 83%'] },
              { id: 'licenses', label: '许可证', notes: ['同比 +16%', '毛利率 99%'] },
              { id: 'professional_services', label: '专业服务', notes: ['同比 +47%', '毛利率 (93%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与营销', notes: ['占收入 40%', '同比 (5 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 22%', '同比 (4 个百分点)'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 13%', '同比 (3 个百分点)'] },
              ],
              notes: ['销售与营销、研发、一般及行政因源图四舍五入合计为 $314M。'],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 82%', '同比 (0 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 7%', '同比 +11 个百分点'] },
            net: { label: '净利润', notes: ['利润率 7%', '同比 +11 个百分点'] },
          },
        },
      },
    },
    {
      key: 'uipath-q4-fy26',
      company: 'UiPath',
      period: 'Q4 FY26',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/uipath-q4-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 481,
        notes: ['+14% Y/Y'],
        items: [
          { id: 'subscription', label: 'Subscription', value: 251, notes: ['+17% Y/Y', '84% gross margin'] },
          { id: 'licenses', label: 'Licenses', value: 216, notes: ['+9% Y/Y', '99% gross margin'] },
          {
            id: 'professional_services',
            label: 'Professional services',
            value: 14,
            notes: ['+29% Y/Y', '(126%) gross margin'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 74 },
        operatingExpenses: {
          total: 327,
          items: [
            { id: 'sm', label: 'S&M', value: 178, notes: ['37% of revenue', '(5pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 95, notes: ['20% of revenue', '(4pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 54, notes: ['11% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0, notes: ['Source chart shows a $12M tax benefit instead of tax expense.'] },
      },
      otherIncome: {
        total: 24,
        items: [
          { id: 'interest', label: 'Interest', value: 12 },
          { id: 'tax_benefit', label: 'Tax benefit', value: 12 },
        ],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 407, notes: ['85% margin', '(0pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 80, notes: ['17% margin', '+9pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 104, notes: ['22% margin', '+9pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第四季度',
          periodNote: '截至 2026 年 1 月',
          revenue: {
            notes: ['同比 +14%'],
            items: [
              { id: 'subscription', label: '订阅', notes: ['同比 +17%', '毛利率 84%'] },
              { id: 'licenses', label: '许可证', notes: ['同比 +9%', '毛利率 99%'] },
              { id: 'professional_services', label: '专业服务', notes: ['同比 +29%', '毛利率 (126%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与营销', notes: ['占收入 37%', '同比 (5 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 20%', '同比 (4 个百分点)'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 11%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费', notes: ['来源图显示 $12M 税收收益，而不是税费。'] },
          },
          otherIncome: {
            items: [
              { id: 'interest', label: '利息' },
              { id: 'tax_benefit', label: '税收收益' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 85%', '同比 (0 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 17%', '同比 +9 个百分点'] },
            net: { label: '净利润', notes: ['利润率 22%', '同比 +9 个百分点'] },
          },
        },
      },
    }
  );
})(window);
