/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/<dataset-key>.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'abbott-q3-fy25',
    company: 'Abbott',
    period: 'Q3 FY25',
    periodNote: 'Ending Sep. 2025',
    currency: '$',
    unit: 'B',
    decimals: 3,
    sourceImage: 'input/processed/abbott-q3-fy25.png',
    roundingTolerance: 0.16,
    revenue: {
      total: 11.4,
      notes: ['+7% Y/Y'],
      items: [
        { id: 'established_pharma', label: 'Established Pharma', value: 1.5, notes: ['+7% Y/Y'] },
        { id: 'nutritionals', label: 'Nutritionals', value: 2.2, notes: ['+4% Y/Y'] },
        { id: 'diagnostics', label: 'Diagnostics', value: 2.3, notes: ['(7%) Y/Y'] },
        { id: 'medical_devices', label: 'Medical Devices', value: 5.4, notes: ['+15% Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 5.5 },
      operatingExpenses: {
        total: 3.8,
        items: [
          { id: 'sga', label: 'SG&A', value: 3.1, notes: ['27% of revenue', '(0pp) Y/Y'] },
          { id: 'rnd', label: 'R&D', value: 0.8, notes: ['7% of revenue', '+0pp Y/Y'] },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.5 },
    },
    otherIncome: {
      total: 0.2,
      items: [{ id: 'other_income', label: 'Other', value: 0.2 }],
    },
    otherExpenses: {
      total: 0.044,
      items: [{ id: 'interest', label: 'Interest', value: 0.044 }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 5.9, notes: ['52% margin', '+0pp Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 2.1, notes: ['18% margin', '+1pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 1.6, notes: ['14% margin', '(1pp) Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2025 财年第三季度',
        periodNote: '截至 2025 年 9 月',
        revenue: {
          notes: ['同比 +7%'],
          items: [
            { id: 'established_pharma', label: '成熟药品', notes: ['同比 +7%'] },
            { id: 'nutritionals', label: '营养品', notes: ['同比 +4%'] },
            { id: 'diagnostics', label: '诊断', notes: ['同比 (7%)'] },
            { id: 'medical_devices', label: '医疗设备', notes: ['同比 +15%'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: {
            items: [
              { id: 'sga', label: '销售、一般及管理费用', notes: ['占收入 27%', '同比 (0 个百分点)'] },
              { id: 'rnd', label: '研发', notes: ['占收入 7%', '同比 +0 个百分点'] },
            ],
          },
          tax: { label: '税费' },
        },
        otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
        otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 52%', '同比 +0 个百分点'] },
          operating: { label: '营业利润', notes: ['利润率 18%', '同比 +1 个百分点'] },
          net: { label: '净利润', notes: ['利润率 14%', '同比 (1 个百分点)'] },
        },
      },
    },
  });

  ssot.records.push({
    key: 'abbott-q4-fy25',
    company: 'Abbott',
    period: 'Q4 FY25',
    periodNote: 'Ending Dec. 2025',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/abbott-q4-fy25.png',
    roundingTolerance: 0.15,
    revenue: {
      total: 11.5,
      notes: ['+4% Y/Y'],
      items: [
        { id: 'established_pharma', label: 'Established Pharma', value: 1.4, notes: ['+9% Y/Y'] },
        { id: 'nutritionals', label: 'Nutritionals', value: 1.9, notes: ['(9%) Y/Y'] },
        { id: 'diagnostics', label: 'Diagnostics', value: 2.5, notes: ['(2%) Y/Y'] },
        { id: 'medical_devices', label: 'Medical Devices', value: 5.7, notes: ['+12% Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 4.9 },
      operatingExpenses: {
        total: 4.3,
        items: [
          { id: 'sga', label: 'SG&A', value: 3.1, notes: ['27% of revenue', '+1pp Y/Y'] },
          { id: 'rnd', label: 'R&D', value: 0.7, notes: ['6% of revenue', '(0pp) Y/Y'] },
          { id: 'amortization', label: 'Amortization', value: 0.4, notes: ['4% of revenue', '(1pp) Y/Y'] },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.6 },
    },
    otherIncome: {
      total: 0.1,
      items: [{ id: 'other_income', label: 'Other', value: 0.1 }],
    },
    otherExpenses: {
      total: 0.042,
      items: [{ id: 'interest', label: 'Interest', value: 0.042 }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 6.5, notes: ['57% margin', '+2pp Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 2.3, notes: ['20% margin', '+2pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 1.8, notes: ['15% margin', '(69pp) Y/Y'] },
    },
    i18n: {
      zh: {
        period: '2025 财年第四季度',
        periodNote: '截至 2025 年 12 月',
        revenue: {
          notes: ['同比 +4%'],
          items: [
            { id: 'established_pharma', label: '成熟药品', notes: ['同比 +9%'] },
            { id: 'nutritionals', label: '营养品', notes: ['同比 (9%)'] },
            { id: 'diagnostics', label: '诊断', notes: ['同比 (2%)'] },
            { id: 'medical_devices', label: '医疗设备', notes: ['同比 +12%'] },
          ],
        },
        costs: {
          costOfRevenue: { label: '收入成本' },
          operatingExpenses: {
            items: [
              { id: 'sga', label: '销售、一般及管理费用', notes: ['占收入 27%', '同比 +1 个百分点'] },
              { id: 'rnd', label: '研发', notes: ['占收入 6%', '同比 (0 个百分点)'] },
              { id: 'amortization', label: '摊销', notes: ['占收入 4%', '同比 (1 个百分点)'] },
            ],
          },
          tax: { label: '税费' },
        },
        otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
        otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 57%', '同比 +2 个百分点'] },
          operating: { label: '营业利润', notes: ['利润率 20%', '同比 +2 个百分点'] },
          net: { label: '净利润', notes: ['利润率 15%', '同比 (69 个百分点)'] },
        },
      },
    },
  });
})(window);
