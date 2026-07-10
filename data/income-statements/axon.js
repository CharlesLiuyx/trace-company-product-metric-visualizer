/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/axon-q4-fy25.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push(
    {
      key: 'axon-q4-fy25',
      company: 'Axon',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/axon-q4-fy25.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 797,
        notes: ['+39% Y/Y'],
        items: [
          {
            id: 'connected_devices',
            label: 'Connected Devices',
            value: 454,
            notes: ['+38% Y/Y'],
            children: [
              { id: 'taser', label: 'TASER', value: 264, notes: ['+32% Y/Y'] },
              { id: 'personal_sensors', label: 'Personal Sensors', value: 109, notes: ['+28% Y/Y'] },
              { id: 'platform_solutions', label: 'Platform Solutions', value: 81, notes: ['+81% Y/Y'] },
            ],
          },
          { id: 'software_services', label: 'Software & Services', value: 343, notes: ['+40% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 335,
          items: [
            { id: 'products', label: 'Products', value: 242, notes: ['47% gross margin'] },
            { id: 'services', label: 'Services', value: 93, notes: ['73% gross margin'] },
          ],
        },
        operatingExpenses: {
          total: 511,
          items: [
            { id: 'sga', label: 'SG&A', value: 317, notes: ['40% of revenue', '+0pp Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 194, notes: ['24% of revenue', '+1pp Y/Y'] },
          ],
        },
        tax: { label: 'Tax', value: 0, notes: ['No separate tax line is shown in the source chart.'] },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 461, notes: ['58% margin', '(2pp) Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -50, notes: ['(6%) margin', '(4pp) Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -50,
          notes: ['No separate net income line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +39%'],
            items: [
              {
                id: 'connected_devices', label: '联网设备', notes: ['同比 +38%'],
                children: [
                  { id: 'taser', label: 'TASER', notes: ['同比 +32%'] },
                  { id: 'personal_sensors', label: '个人传感器', notes: ['同比 +28%'] },
                  { id: 'platform_solutions', label: '平台解决方案', notes: ['同比 +81%'] },
                ],
              },
              { id: 'software_services', label: '软件与服务', notes: ['同比 +40%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [
                { id: 'products', label: '产品', notes: ['毛利率 47%'] },
                { id: 'services', label: '服务', notes: ['毛利率 73%'] },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售、一般及行政费用', notes: ['占收入 40%', '同比 +0 个百分点'] },
                { id: 'rnd', label: '研发', notes: ['占收入 24%', '同比 +1 个百分点'] },
              ],
            },
            tax: { label: '税费', notes: ['来源图未单列税费。'] },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 58%', '同比 (2 个百分点)'] },
            operating: { label: '营业亏损', notes: ['利润率 (6%)', '同比 (4 个百分点)'] },
            net: { label: '营业亏损', notes: ['来源图未单独显示净利润项目。'] },
          },
        },
      },
    }
  );
})(window);
