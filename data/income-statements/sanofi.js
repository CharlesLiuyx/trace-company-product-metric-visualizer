/* Pure income-statement SSOT records. Financial data only. */
(function (global) {
  'use strict';
  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] });
  ssot.records.push({
    key: 'sanofi-q1-fy26',
    company: 'Sanofi',
    period: 'Q1 FY26',
    periodNote: 'Three months ended Mar. 31, 2026',
    currency: '€',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/sanofi-q1-fy26.png',
    sourceUrl: 'https://www.sanofi.com/en/investors/financial-results-and-events/financial-results/q1-results-2026',
    roundingTolerance: 0.2,
    revenue: {
      total: 11.2,
      items: [
        {
          id: 'biopharma',
          label: 'Biopharma',
          value: 10.5,
          notes: ['+6% Y/Y'],
          children: [
            { id: 'immunology', label: 'Immunology', value: 4.3, notes: ['+20% Y/Y'] },
            { id: 'rare_diseases', label: 'Rare diseases', value: 1.8, notes: ['+12% Y/Y'] },
            { id: 'oncology', label: 'Oncology', value: 0.2, notes: ['(9%) Y/Y'] },
            { id: 'other', label: 'Other', value: 2.9, notes: ['(5%) Y/Y'] },
            { id: 'vaccines', label: 'Vaccines', value: 1.3, notes: ['(3%) Y/Y'] },
          ],
        },
        { id: 'other_revenue', label: 'Other revenue', value: 0.7 },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 3.1 },
      operatingExpenses: {
        total: 6.0,
        items: [
          { id: 'sga', label: 'SG&A', value: 2.3 },
          { id: 'rnd', label: 'R&D', value: 1.7 },
          { id: 'other_operating', label: 'Other operating', value: 1.3 },
          { id: 'amortization_and_other', label: 'Amortization & other', value: 0.5 },
          { id: 'restructuring', label: 'Restructuring', value: 0.1 },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.4 },
    },
    otherIncome: { total: 0, items: [] },
    otherExpenses: {
      total: 0.1,
      items: [{ id: 'financial', label: 'Financial', value: 0.1 }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 8.1, notes: ['77% margin', '(1pp) Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 2.1, notes: ['20% margin', '(3pp) Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 1.6, notes: ['15% margin', '(2pp) Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2026 财年第一季度',
        periodNote: '截至 2026 年 3 月 31 日的三个月',
        revenue: {
          items: [
            {
              label: '生物制药', notes: ['同比 +6%'],
              children: [
                { label: '免疫', notes: ['同比 +20%'] },
                { label: '罕见病', notes: ['同比 +12%'] },
                { label: '肿瘤', notes: ['同比 (9%)'] },
                { label: '其他', notes: ['同比 (5%)'] },
                { label: '疫苗', notes: ['同比 (3%)'] },
              ],
            },
            { label: '其他收入' },
          ],
        },
        costs: {
          costOfRevenue: { label: '销售成本' },
          operatingExpenses: { items: [
            { label: '销售、一般及管理费用' },
            { label: '研发' },
            { label: '其他运营费用' },
            { label: '摊销及其他' },
            { label: '重组费用' },
          ] },
          tax: { label: '税费' },
        },
        otherExpenses: { items: [{ label: '财务费用' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 77%', '同比 (1 个百分点)'] },
          operating: { label: '营业利润', notes: ['利润率 20%', '同比 (3 个百分点)'] },
          net: { label: '净利润', notes: ['利润率 15%', '同比 (2 个百分点)'] },
        },
      },
    },
  });
  ssot.records.push({
    key: 'sanofi-q2-fy26',
    company: 'Sanofi',
    period: 'Q2 FY26',
    periodNote: 'Three months ended Jun. 30, 2026',
    currency: '€',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/sanofi-q2-fy26.png',
    sourceUrl: 'https://www.sanofi.com/en/investors/financial-results-and-events/financial-results/q2-2026-results',
    roundingTolerance: 0.2,
    revenue: {
      total: 12.3,
      items: [
        {
          id: 'biopharma',
          label: 'Biopharma',
          value: 11.6,
          notes: ['+16% Y/Y'],
          children: [
            { id: 'immunology', label: 'Immunology', value: 5.1, notes: ['+38% Y/Y'] },
            { id: 'rare_diseases', label: 'Rare diseases', value: 1.9, notes: ['+24% Y/Y'] },
            { id: 'other', label: 'Other', value: 3.3, notes: ['+4% Y/Y'] },
            { id: 'vaccines', label: 'Vaccines', value: 1.2, notes: ['(5%) Y/Y'] },
          ],
        },
        { id: 'other_revenue', label: 'Other revenue', value: 0.7 },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 3.0 },
      operatingExpenses: {
        total: 8.2,
        items: [
          { id: 'sga', label: 'SG&A', value: 2.5 },
          { id: 'rnd', label: 'R&D', value: 2.2 },
          { id: 'restructuring', label: 'Restructuring', value: 1.5 },
          { id: 'other_operating', label: 'Other operating', value: 1.4 },
          { id: 'amortization_and_other', label: 'Amortization & other', value: 0.5 },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.5 },
    },
    otherIncome: { total: 0, items: [] },
    otherExpenses: {
      total: 0.2,
      items: [{ id: 'financial', label: 'Financial', value: 0.2 }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 9.3, notes: ['80% margin', '+3pp Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 1.0, notes: ['9% margin', '(6pp) Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 0.4, notes: ['3% margin', '(36pp) Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2026 财年第二季度',
        periodNote: '截至 2026 年 6 月 30 日的三个月',
        revenue: {
          items: [
            {
              label: '生物制药', notes: ['同比 +16%'],
              children: [
                { label: '免疫', notes: ['同比 +38%'] },
                { label: '罕见病', notes: ['同比 +24%'] },
                { label: '其他', notes: ['同比 +4%'] },
                { label: '疫苗', notes: ['同比 (5%)'] },
              ],
            },
            { label: '其他收入' },
          ],
        },
        costs: {
          costOfRevenue: { label: '销售成本' },
          operatingExpenses: { items: [
            { label: '销售、一般及管理费用' },
            { label: '研发' },
            { label: '重组费用' },
            { label: '其他运营费用' },
            { label: '摊销及其他' },
          ] },
          tax: { label: '税费' },
        },
        otherExpenses: { items: [{ label: '财务费用' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 80%', '同比 +3 个百分点'] },
          operating: { label: '营业利润', notes: ['利润率 9%', '同比 (6 个百分点)'] },
          net: { label: '净利润', notes: ['利润率 3%', '同比 (36 个百分点)'] },
        },
      },
    },
  });
})(window);
