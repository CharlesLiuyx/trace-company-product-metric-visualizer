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
      key: 'lenovo-q4-fy26',
      company: 'Lenovo',
      period: 'Q4 FY26',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/lenovo-q4-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 21.6,
        notes: ['+27% Y/Y'],
        items: [
          { id: 'idg', label: 'IDG Intelligent Devices Group', value: 14.6, notes: ['+24% Y/Y', '7% operating margin'] },
          { id: 'isg', label: 'ISG Infrastructure Solutions Group', value: 5.6, notes: ['+37% Y/Y', '4% operating margin'] },
          { id: 'ssg', label: 'SSG Solutions & Services Group', value: 2.6, notes: ['+19% Y/Y', '22% operating margin'] },
          {
            label: 'Eliminations',
            value: -1.2,
            notes: ['Shown as an eliminations outflow before consolidated revenue in the source chart.'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 18.0 },
        operatingExpenses: {
          total: 2.7,
          items: [
            { id: 'selling_distribution', label: 'Selling & Distribution', value: 1.1, notes: ['5% of revenue', '(0pp) Y/Y'] },
            { id: 'administrative', label: 'Administrative', value: 0.9, notes: ['4% of revenue', '(0pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 0.7, notes: ['3% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.1 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.2,
        items: [{ id: 'financial', label: 'Financial', value: 0.2 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 3.5, notes: ['16% margin', '+0pp Y/Y'] },
        operating: {
          id: 'operating_profit',
          label: 'Operating profit',
          value: 0.9,
          notes: ['4% margin', '+2pp Y/Y', 'Source chart also shows a $0.1B Other rounding bridge.'],
        },
        net: { id: 'net_profit', label: 'Net profit', value: 0.6, notes: ['3% margin', '+2pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第四季度',
          periodNote: '截至 2026 年 4 月',
          revenue: {
            notes: ['同比 +27%'],
            items: [
              { id: 'idg', label: 'IDG 智能设备集团', notes: ['同比 +24%', '营业利润率 7%'] },
              { id: 'isg', label: 'ISG 基础设施方案集团', notes: ['同比 +37%', '营业利润率 4%'] },
              { id: 'ssg', label: 'SSG 方案与服务集团', notes: ['同比 +19%', '营业利润率 22%'] },
              { id: 'undefined', label: '抵销', notes: ['来源图显示为合并收入前的抵销流出。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'selling_distribution', label: '销售与分销', notes: ['占收入 5%', '同比 (0 个百分点)'] },
                { id: 'administrative', label: '行政', notes: ['占收入 4%', '同比 (0 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 3%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [
              { id: 'financial', label: '财务' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 16%', '同比 +0 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 4%', '同比 +2 个百分点', '来源图还显示 $0.1B 其他四舍五入桥接项。'] },
            net: { label: '净利润', notes: ['利润率 3%', '同比 +2 个百分点'] },
          },
        },
      },
    }
  );
})(window);
