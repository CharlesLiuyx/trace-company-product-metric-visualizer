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
      key: 'toast-q1-fy26',
      company: 'Toast',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/toast-q1-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 1630,
        notes: ['+22% Y/Y'],
        items: [
          { id: 'subscription_services', label: 'Subscription services', value: 268, notes: ['+28% Y/Y'] },
          { id: 'financial_technology_solutions', label: 'Financial technology solutions', value: 1323, notes: ['+22% Y/Y'] },
          { id: 'hardware_professional_services', label: 'Hardware and professional services', value: 39, notes: ['(15%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 1183 },
        operatingExpenses: {
          total: 337,
          items: [
            { id: 'sm', label: 'Sales & marketing', value: 156, notes: ['10% of revenue', '(0pp) Y/Y'] },
            { id: 'rnd', label: 'Research & development', value: 97, notes: ['6% of revenue', '(0pp) Y/Y'] },
            { id: 'ga', label: 'General & administrative', value: 84, notes: ['5% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 5 },
      },
      otherIncome: {
        total: 21,
        items: [{ id: 'other', label: 'Other', value: 21 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 447, notes: ['27% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 110, notes: ['7% margin', '+4pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 126, notes: ['6% margin', '+4pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +22%'],
            items: [
              { id: 'subscription_services', label: '订阅服务', notes: ['同比 +28%'] },
              { id: 'financial_technology_solutions', label: '金融科技解决方案', notes: ['同比 +22%'] },
              { id: 'hardware_professional_services', label: '硬件与专业服务', notes: ['同比 (15%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与营销', notes: ['占收入 10%', '同比 (0 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 6%', '同比 (0 个百分点)'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 5%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 27%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 7%', '同比 +4 个百分点'] },
            net: { label: '净利润', notes: ['利润率 6%', '同比 +4 个百分点'] },
          },
        },
      },
    },
    {
      key: 'toast-q4-fy25',
      company: 'Toast',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/toast-q4-fy25.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 1633,
        notes: ['+22% Y/Y'],
        items: [
          { id: 'subscription_services', label: 'Subscription services', value: 256, notes: ['+28% Y/Y'] },
          { id: 'financial_technology_solutions', label: 'Financial technology solutions', value: 1335, notes: ['+22% Y/Y'] },
          { id: 'hardware_professional_services', label: 'Hardware and professional services', value: 43, notes: ['(10%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 1210 },
        operatingExpenses: {
          total: 338,
          items: [
            { id: 'sm', label: 'Sales & marketing', value: 153, notes: ['9% of revenue', '(0pp) Y/Y'] },
            { id: 'rnd', label: 'Research & development', value: 97, notes: ['6% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'General & administrative', value: 84, notes: ['5% of revenue', '(1%) Y/Y'] },
            { id: 'restructuring', label: 'Restructuring', value: 4, notes: ['0% of revenue', '+0% Y/Y'] },
          ],
        },
        tax: { label: 'Tax', value: 0 },
      },
      otherIncome: {
        total: 16,
        items: [{ id: 'other', label: 'Other', value: 16 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 423, notes: ['26% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 85, notes: ['5% margin', '+3pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 101, notes: ['6% margin', '+4pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +22%'],
            items: [
              { id: 'subscription_services', label: '订阅服务', notes: ['同比 +28%'] },
              { id: 'financial_technology_solutions', label: '金融科技解决方案', notes: ['同比 +22%'] },
              { id: 'hardware_professional_services', label: '硬件与专业服务', notes: ['同比 (10%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与营销', notes: ['占收入 9%', '同比 (0 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 6%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 5%', '同比 (1%)'] },
                { id: 'restructuring', label: '重组', notes: ['占收入 0%', '同比 +0%'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 26%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 5%', '同比 +3 个百分点'] },
            net: { label: '净利润', notes: ['利润率 6%', '同比 +4 个百分点'] },
          },
        },
      },
    }
  );
})(window);
