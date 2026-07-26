/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/<dataset-key>.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'rubrik-q4-fy26',
    company: 'Rubrik',
    period: 'Q4 FY26',
    periodNote: 'Ending Jan. 2026',
    currency: '$',
    unit: 'M',
    decimals: 0,
    sourceImage: 'input/processed/rubrik-q4-fy26.png',
    roundingTolerance: 1.1,
    revenue: {
      total: 378,
      notes: ['+46% Y/Y'],
      items: [
        { id: 'subscription', label: 'Subscription', value: 365, notes: ['+50% Y/Y', '83% gross margin'] },
        { id: 'other', label: 'Other', value: 13, notes: ['(11%) Y/Y', '39% gross margin'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 70 },
      operatingExpenses: {
        total: 390,
        notes: ['S&M, R&D, and G&A sum to the displayed $390M.'],
        items: [
          { id: 'sm', label: 'S&M', value: 224, notes: ['59% of revenue', '(3pp) Y/Y'] },
          { id: 'rnd', label: 'R&D', value: 102, notes: ['27% of revenue', '(4pp) Y/Y'] },
          { id: 'ga', label: 'G&A', value: 64, notes: ['17% of revenue', '(12pp) Y/Y'] },
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
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 308, notes: ['82% margin', '+4pp Y/Y'] },
      operating: {
        id: 'operating_loss',
        label: 'Operating loss',
        value: -82,
        notes: ['(22%) margin', '+23pp Y/Y'],
      },
      net: {
        id: 'operating_loss',
        label: 'Operating loss',
        value: -82,
        notes: ['No separate net loss line is shown in the source chart.'],
      },
    },
    i18n: {
      zh: {
        period: '2026 财年第四季度',
        periodNote: '截至 2026 年 1 月',
        revenue: {
          notes: ['同比 +46%'],
          items: [
            { id: 'subscription', label: '订阅', notes: ['同比 +50%', '毛利率 83%'] },
            { id: 'other', label: '其他', notes: ['同比 (11%)', '毛利率 39%'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: {
            notes: ['销售与市场、研发和管理费用合计为图中显示的 $390M。'],
            items: [
              { id: 'sm', label: '销售与市场', notes: ['占收入 59%', '同比 (3 个百分点)'] },
              { id: 'rnd', label: '研发', notes: ['占收入 27%', '同比 (4 个百分点)'] },
              { id: 'ga', label: '管理费用', notes: ['占收入 17%', '同比 (12 个百分点)'] },
            ],
          },
          tax: { label: '税费' },
        },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 82%', '同比 +4 个百分点'] },
          operating: { label: '营业亏损', notes: ['利润率 (22%)', '同比 +23 个百分点'] },
          net: { label: '营业亏损', notes: ['来源图未单独显示净亏损项目。'] },
        },
      },
    },
  });

  ssot.records.push({
    key: 'rubrik-q1-fy27',
    company: 'Rubrik',
    period: 'Q1 FY27',
    periodNote: 'Ending Apr. 2026',
    currency: '$',
    unit: 'M',
    decimals: 0,
    sourceImage: 'input/processed/rubrik-q1-fy27.png',
    roundingTolerance: 1.1,
    revenue: {
      total: 387,
      notes: ['+39% Y/Y'],
      items: [
        { id: 'subscription', label: 'Subscription', value: 374, notes: ['+41% Y/Y', '82% gross margin'] },
        { id: 'other', label: 'Other', value: 13, notes: ['+23% Y/Y', '34% gross margin'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 75 },
      operatingExpenses: {
        total: 364,
        notes: ['S&M, R&D, and G&A sum to the displayed $364M.'],
        items: [
          { id: 'sm', label: 'S&M', value: 193, notes: ['50% of revenue', '(11pp) Y/Y'] },
          { id: 'rnd', label: 'R&D', value: 114, notes: ['30% of revenue', '+0pp Y/Y'] },
          { id: 'ga', label: 'G&A', value: 57, notes: ['15% of revenue', '(7pp) Y/Y'] },
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
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 312, notes: ['81% margin', '+2pp Y/Y'] },
      operating: {
        id: 'operating_loss',
        label: 'Operating loss',
        value: -53,
        notes: ['(14%) margin', '+20pp Y/Y'],
      },
      net: {
        id: 'operating_loss',
        label: 'Operating loss',
        value: -53,
        notes: ['No separate net loss line is shown in the source chart.'],
      },
    },
    i18n: {
      zh: {
        period: '2027 财年第一季度',
        periodNote: '截至 2026 年 4 月',
        revenue: {
          notes: ['同比 +39%'],
          items: [
            { id: 'subscription', label: '订阅', notes: ['同比 +41%', '毛利率 82%'] },
            { id: 'other', label: '其他', notes: ['同比 +23%', '毛利率 34%'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: {
            notes: ['销售与市场、研发和管理费用合计为图中显示的 $364M。'],
            items: [
              { id: 'sm', label: '销售与市场', notes: ['占收入 50%', '同比 (11 个百分点)'] },
              { id: 'rnd', label: '研发', notes: ['占收入 30%', '同比 +0 个百分点'] },
              { id: 'ga', label: '管理费用', notes: ['占收入 15%', '同比 (7 个百分点)'] },
            ],
          },
          tax: { label: '税费' },
        },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 81%', '同比 +2 个百分点'] },
          operating: { label: '营业亏损', notes: ['利润率 (14%)', '同比 +20 个百分点'] },
          net: { label: '营业亏损', notes: ['来源图未单独显示净亏损项目。'] },
        },
      },
    },
  });
})(window);
