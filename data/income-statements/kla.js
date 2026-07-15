/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/<dataset-key>.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push({
    key: 'kla-q2-fy26',
    company: 'KLA',
    period: 'Q2 FY26',
    periodNote: 'Ending Dec. 2025',
    currency: '$',
    unit: 'B',
    decimals: 1,
    sourceImage: 'input/processed/kla-q2-fy26.png',
    roundingTolerance: 0.15,
    revenue: {
      total: 3.3,
      notes: ['+7% Y/Y'],
      items: [
        { id: 'wafer_inspection', label: ['Wafer', 'Inspection'], value: 1.6, notes: ['+1% Y/Y'] },
        { id: 'patterning', label: 'Patterning', value: 0.7, notes: ['+31% Y/Y'] },
        { id: 'specialty_semi_process', label: ['Specialty', 'Semi Process'], value: 0.1, notes: ['(15%) Y/Y'] },
        { id: 'pcb_component_inspection', label: ['PCB and Component', 'Inspection'], value: 0.1, notes: ['(14%) Y/Y'] },
        { id: 'services', label: 'Services', value: 0.8, notes: ['+18% Y/Y'] },
        { id: 'other_revenue', label: 'Other', value: 0.04, notes: ['(50%) Y/Y'] },
      ],
    },
    costs: {
      costOfRevenue: { id: 'cost_of_revenue', label: ['Cost of', 'revenue'], value: 1.3 },
      operatingExpenses: {
        total: 0.7,
        items: [
          { id: 'rnd', label: ['Research &', 'Development'], value: 0.4, notes: ['12% of revenue', '+0pp Y/Y'] },
          { id: 'sga', label: ['Sales, General', '& Admin'], value: 0.3, notes: ['8% of revenue', '(0pp) Y/Y'] },
        ],
      },
      tax: { id: 'tax', label: 'Tax', value: 0.2 },
    },
    otherExpenses: {
      total: 0.032,
      items: [{ id: 'other_ded', label: 'Other', value: 0.032 }],
    },
    profit: {
      gross: { id: 'gross_profit', label: 'Gross profit', value: 2.0, notes: ['61% margin', '+1pp Y/Y'] },
      operating: { id: 'operating_profit', label: 'Operating profit', value: 1.4, notes: ['41% margin', '+9pp Y/Y'] },
      net: { id: 'net_profit', label: 'Net profit', value: 1.1, notes: ['35% margin', '+8pp Y/Y'] },
    },
    sources: [
      {
        name: 'KLA Corporation quarterly results',
        url: 'https://ir.kla.com/financial-information/quarterly-results',
        note: 'The reference infographic rounds reported figures to the displayed $B amounts and labels the period Q2 FY26 (quarter ending December 2025).',
      },
    ],
    i18n: {
      zh: {
        period: '2026 财年第二季度',
        periodNote: '截至 2025 年 12 月',
        revenue: {
          notes: ['同比 +7%'],
          items: [
            { id: 'wafer_inspection', label: ['晶圆', '检测'], notes: ['同比 +1%'] },
            { id: 'patterning', label: '图形化', notes: ['同比 +31%'] },
            { id: 'specialty_semi_process', label: ['特种半导体', '制程'], notes: ['同比 (15%)'] },
            { id: 'pcb_component_inspection', label: ['PCB 与', '元件检测'], notes: ['同比 (14%)'] },
            { id: 'services', label: '服务', notes: ['同比 +18%'] },
            { id: 'other_revenue', label: '其他', notes: ['同比 (50%)'] },
          ],
        },
        costs: {
          costOfRevenue: { label: ['收入', '成本'] },
          operatingExpenses: {
            items: [
              { id: 'rnd', label: ['研究与', '开发'], notes: ['占收入 12%', '同比 +0 个百分点'] },
              { id: 'sga', label: ['销售、一般', '及管理'], notes: ['占收入 8%', '同比 (0 个百分点)'] },
            ],
          },
          tax: { label: '税费' },
        },
        otherExpenses: { items: [{ id: 'other_ded', label: '其他' }] },
        profit: {
          gross: { label: '毛利润', notes: ['利润率 61%', '同比 +1 个百分点'] },
          operating: { label: '营业利润', notes: ['利润率 41%', '同比 +9 个百分点'] },
          net: { label: '净利润', notes: ['利润率 35%', '同比 +8 个百分点'] },
        },
      },
    },
  });
})(window);
