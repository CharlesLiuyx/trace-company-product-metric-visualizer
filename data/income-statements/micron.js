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
      key: 'micron-q3-fy26',
      company: 'Micron',
      period: 'Q3 FY26',
      periodNote: 'Ending May 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/micron-q3-fy26.png',
      roundingTolerance: 0.2,
      revenue: {
        total: 41.5,
        notes: ['+346% Y/Y'],
        items: [
          { id: 'cloud_memory', label: 'Cloud Memory', value: 13.8, notes: ['+307% Y/Y', '78% operating margin'] },
          { id: 'core_data_center', label: 'Core Data Center', value: 11.5, notes: ['+653% Y/Y', '83% operating margin'] },
          { id: 'mobile_client', label: 'Mobile & Client', value: 11.5, notes: ['+254% Y/Y', '86% operating margin'] },
          { id: 'automotive_embedded', label: 'Automotive & Embedded', value: 4.6, notes: ['+311% Y/Y', '75% operating margin'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 6.4 },
        operatingExpenses: {
          total: 1.7,
          items: [
            { id: 'rnd', label: 'R&D', value: 1.3 },
            { id: 'sga', label: 'SG&A', value: 0.4 },
            { id: 'other_opex', label: 'Other', value: 0.1 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 5.0 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.1,
        items: [
          { id: 'other_non_operating', label: 'Other', value: 0.1 },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 35.1, notes: ['85% margin', '+47pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 33.3, notes: ['80% margin', '+57pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 28.2, notes: ['68% margin', '+48pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第三季度',
          periodNote: '截至 2026 年 5 月',
          revenue: {
            notes: ['同比 +346%'],
            items: [
              { id: 'cloud_memory', label: '云内存', notes: ['同比 +307%', '营业利润率 78%'] },
              { id: 'core_data_center', label: '核心数据中心', notes: ['同比 +653%', '营业利润率 83%'] },
              { id: 'mobile_client', label: '移动与客户端', notes: ['同比 +254%', '营业利润率 86%'] },
              { id: 'automotive_embedded', label: '汽车与嵌入式', notes: ['同比 +311%', '营业利润率 75%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发' },
                { id: 'sga', label: '销售、一般及行政' },
                { id: 'other_opex', label: '其他' },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [
              { id: 'other_non_operating', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 85%', '同比 +47 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 80%', '同比 +57 个百分点'] },
            net: { label: '净利润', notes: ['利润率 68%', '同比 +48 个百分点'] },
          },
        },
      },
    }
  );
})(window);
