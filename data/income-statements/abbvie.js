/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/<dataset-key>.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'abbvie-q4-fy25',
    company: 'AbbVie',
    period: 'Q4 FY25',
    periodNote: 'Quarter ended Dec. 31, 2025',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/abbvie-q4-fy25.png',
    roundingTolerance: 0.2,
    revenue: {
      total: 16.6,
      notes: ['+10% Y/Y'],
      items: [
        { id: 'immunology', label: 'Immunology', value: 8.6, notes: ['+18% Y/Y'] },
        { id: 'oncology', label: 'Oncology', value: 1.7, notes: ['(2%) Y/Y'] },
        { id: 'aesthetics', label: 'Aesthetics', value: 1.3, notes: ['(1%) Y/Y'] },
        { id: 'neuroscience', label: 'Neuroscience', value: 3.0, notes: ['+18% Y/Y'] },
        { id: 'eye_care', label: 'Eye Care', value: 0.6, notes: ['(10%) Y/Y'] },
        { id: 'other_revenue', label: 'Other', value: 1.5, notes: ['(10%) Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_products_sold', label: 'Cost of products sold', value: 4.6 },
      operatingExpenses: {
        total: 7.5,
        items: [
          { id: 'sga', label: 'SG&A', value: 3.9, notes: ['23% of revenue', '(2pp) Y/Y'] },
          { id: 'rnd', label: 'R&D', value: 2.6, notes: ['16% of revenue', '(29pp) Y/Y'] },
          { id: 'other_opex', label: 'Other', value: 1.0, notes: ['6% of revenue', '(4pp) Y/Y'] },
        ],
      },
      tax: { id: 'tax_primary', label: 'Tax', value: 0.9 },
    },
    otherIncome: { total: 0, items: [] },
    otherExpenses: {
      total: 1.9,
      items: [
        { id: 'other_expense', label: 'Other', value: 1.2 },
        { id: 'tax_secondary', label: 'Tax', value: 0.7, notes: ['Separately labeled tax outflow in the source chart.'] },
      ],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 12.1, notes: ['73% margin', '+2pp Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 4.5, notes: ['27% margin', '+37pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 1.8, notes: ['11% margin', '+11pp Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2025 财年第四季度',
        periodNote: '截至 2025 年 12 月 31 日的季度',
        revenue: {
          notes: ['同比 +10%'],
          items: [
            { id: 'immunology', label: '免疫', notes: ['同比 +18%'] },
            { id: 'oncology', label: '肿瘤', notes: ['同比 (2%)'] },
            { id: 'aesthetics', label: '美学', notes: ['同比 (1%)'] },
            { id: 'neuroscience', label: '神经科学', notes: ['同比 +18%'] },
            { id: 'eye_care', label: '眼科', notes: ['同比 (10%)'] },
            { id: 'other_revenue', label: '其他', notes: ['同比 (10%)'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '产品销售成本' },
          operatingExpenses: {
            items: [
              { id: 'sga', label: '销售、一般及行政费用', notes: ['占收入 23%', '同比 (2 个百分点)'] },
              { id: 'rnd', label: '研发', notes: ['占收入 16%', '同比 (29 个百分点)'] },
              { id: 'other_opex', label: '其他', notes: ['占收入 6%', '同比 (4 个百分点)'] },
            ],
          },
          tax: { label: '税费' },
        },
        otherExpenses: {
          items: [
            { id: 'other_expense', label: '其他' },
            { id: 'tax_secondary', label: '税费', notes: ['源图中单独标注的税费流出。'] },
          ],
        },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 73%', '同比 +2 个百分点'] },
          operating: { label: '营业利润', notes: ['利润率 27%', '同比 +37 个百分点'] },
          net: { label: '净利润', notes: ['利润率 11%', '同比 +11 个百分点'] },
        },
      },
    },
  });

  ssot.records.push({
    key: 'abbvie-q1-fy26',
    company: 'AbbVie',
    period: 'Q1 FY26',
    periodNote: 'Quarter ended Mar. 31, 2026',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/abbvie-q1-fy26.png',
    roundingTolerance: 0.2,
    revenue: {
      total: 15.0,
      notes: ['+12% Y/Y'],
      items: [
        { id: 'immunology', label: 'Immunology', value: 7.3, notes: ['+16% Y/Y'] },
        { id: 'oncology', label: 'Oncology', value: 1.6, notes: ['(0%) Y/Y'] },
        { id: 'aesthetics', label: 'Aesthetics', value: 1.2, notes: ['+8% Y/Y'] },
        { id: 'neuroscience', label: 'Neuroscience', value: 2.9, notes: ['+26% Y/Y'] },
        { id: 'other_revenue', label: 'Other', value: 2.0, notes: ['+30% Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_products_sold', label: 'Cost of products sold', value: 4.2 },
      operatingExpenses: {
        total: 6.8,
        items: [
          { id: 'sga', label: 'SG&A', value: 3.6, notes: ['24% of revenue', '(1pp) Y/Y'] },
          { id: 'rnd', label: 'R&D', value: 2.5, notes: ['16% of revenue', '+1pp Y/Y'] },
          { id: 'other_opex', label: 'Other', value: 0.7, notes: ['5% of revenue', '+3pp Y/Y'] },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.3 },
    },
    otherIncome: { total: 0, items: [] },
    otherExpenses: {
      total: 2.9,
      items: [
        { id: 'other_expense', label: 'Other', value: 2.3 },
        { id: 'interest', label: 'Interest', value: 0.6 },
      ],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 10.8, notes: ['72% margin', '+2pp Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 4.0, notes: ['27% margin', '(1pp) Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 0.7, notes: ['5% margin', '(5%) Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2026 财年第一季度',
        periodNote: '截至 2026 年 3 月 31 日的季度',
        revenue: {
          notes: ['同比 +12%'],
          items: [
            { id: 'immunology', label: '免疫', notes: ['同比 +16%'] },
            { id: 'oncology', label: '肿瘤', notes: ['同比 (0%)'] },
            { id: 'aesthetics', label: '美学', notes: ['同比 +8%'] },
            { id: 'neuroscience', label: '神经科学', notes: ['同比 +26%'] },
            { id: 'other_revenue', label: '其他', notes: ['同比 +30%'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '产品销售成本' },
          operatingExpenses: {
            items: [
              { id: 'sga', label: '销售、一般及行政费用', notes: ['占收入 24%', '同比 (1 个百分点)'] },
              { id: 'rnd', label: '研发', notes: ['占收入 16%', '同比 +1 个百分点'] },
              { id: 'other_opex', label: '其他', notes: ['占收入 5%', '同比 +3 个百分点'] },
            ],
          },
          tax: { label: '税费' },
        },
        otherExpenses: {
          items: [
            { id: 'other_expense', label: '其他' },
            { id: 'interest', label: '利息' },
          ],
        },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 72%', '同比 +2 个百分点'] },
          operating: { label: '营业利润', notes: ['利润率 27%', '同比 (1 个百分点)'] },
          net: { label: '净利润', notes: ['利润率 5%', '同比 (5%)'] },
        },
      },
    },
  });
})(window);
