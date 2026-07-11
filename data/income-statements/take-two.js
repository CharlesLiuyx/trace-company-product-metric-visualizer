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
      key: 'take-two-q4-fy26',
      company: 'Take-Two',
      period: 'Q4 FY26',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/take-two-q4-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 1.6798,
        notes: ['+6% Y/Y', 'All values retain Take-Two reported precision; source-image labels round to one decimal billion.'],
        items: [
          { id: 'mobile', label: 'Mobile', value: 0.8439, notes: ['+13% Y/Y', 'Includes Zynga.'] },
          { id: 'console', label: 'Console', value: 0.6746, notes: ['+14% Y/Y'] },
          { id: 'pc_other', label: 'PC & other', value: 0.1613, notes: ['(34%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 0.7411 },
        operatingExpenses: {
          total: 0.9278,
          items: [
            { id: 'sm', label: 'S&M', value: 0.3922, notes: ['23% of revenue', '(2pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 0.2625, notes: ['16% of revenue', '(3pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.2238, notes: ['13% of revenue', '(1pp) Y/Y'] },
            { id: 'other', label: 'Other', value: 0.0493, notes: ['3% of revenue', '(3pp) Y/Y', 'Depreciation and amortization plus business reorganization.'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0, notes: ['No separate tax line is shown in the source chart.'] },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 0.9387, notes: ['56% margin', '+5pp Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -0.0109, notes: ['(1%) margin', '+239pp Y/Y'] },
        net: { id: 'operating_loss', label: 'Operating loss', value: -0.0109, notes: ['No separate net loss line is shown in the source chart.'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第四季度', periodNote: '截至 2026 年 4 月',
          revenue: { notes: ['同比 +6%', '所有数值保留 Take-Two 的报告精度；来源图标签按十亿美元保留一位小数。'], items: [
            { id: 'mobile', label: '移动端', notes: ['同比 +13%', '包括 Zynga。'] }, { id: 'console', label: '主机', notes: ['同比 +14%'] }, { id: 'pc_other', label: 'PC 及其他', notes: ['同比 (34%)'] },
          ] },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: { items: [
              { id: 'sm', label: '销售与市场营销', notes: ['占收入 23%', '同比 (2 个百分点)'] }, { id: 'rnd', label: '研发', notes: ['占收入 16%', '同比 (3 个百分点)'] }, { id: 'ga', label: '管理费用', notes: ['占收入 13%', '同比 (1 个百分点)'] }, { id: 'other', label: '其他', notes: ['占收入 3%', '同比 (3 个百分点)', '包括折旧与摊销以及业务重组。'] },
            ] },
            tax: { label: '税费', notes: ['来源图未单独显示税费项目。'] },
          },
          profit: { gross: { label: '毛利润', notes: ['利润率 56%', '同比 +5 个百分点'] }, operating: { label: '营业亏损', notes: ['利润率 (1%)', '同比 +239 个百分点'] }, net: { label: '营业亏损', notes: ['来源图未单独显示净亏损项目。'] } },
        },
      },
    },
    {
      key: 'take-two-q3-fy26',
      company: 'Take-Two',
      period: 'Q3 FY26',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/take-two-q3-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 1.699,
        notes: ['+25% Y/Y', 'All values retain Take-Two reported precision; source-image labels round to one decimal billion.'],
        items: [
          { id: 'mobile', label: 'Mobile', value: 0.8658, notes: ['+17% Y/Y', 'Includes Zynga.'] },
          { id: 'console', label: 'Console', value: 0.6521, notes: ['+28% Y/Y'] },
          { id: 'pc_other', label: 'PC & other', value: 0.1811, notes: ['+51% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 0.7535 },
        operatingExpenses: {
          total: 0.9842,
          items: [
            { id: 'sm', label: 'S&M', value: 0.4332, notes: ['25% of revenue', '(3pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 0.2827, notes: ['17% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.2186, notes: ['13% of revenue', '(1pp) Y/Y'] },
            {
              id: 'other',
              label: 'Other',
              value: 0.0497,
              notes: ['3% of revenue', '(1pp) Y/Y', 'Depreciation and amortization plus business reorganization.'],
            },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0, notes: ['No separate tax line is shown in the source chart.'] },
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 0.9455, notes: ['56% margin', '(0pp) Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -0.0387, notes: ['(2%) margin', '+7pp Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -0.0387,
          notes: ['No separate net loss line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2026 财年第三季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +25%', '所有数值保留 Take-Two 的报告精度；来源图标签按十亿美元保留一位小数。'],
            items: [
              { id: 'mobile', label: '移动端', notes: ['同比 +17%', '包括 Zynga。'] },
              { id: 'console', label: '主机', notes: ['同比 +28%'] },
              { id: 'pc_other', label: 'PC 及其他', notes: ['同比 +51%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场营销', notes: ['占收入 25%', '同比 (3 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 17%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 13%', '同比 (1 个百分点)'] },
                { id: 'other', label: '其他', notes: ['占收入 3%', '同比 (1 个百分点)', '包括折旧与摊销以及业务重组。'] },
              ],
            },
            tax: { label: '税费', notes: ['来源图未单独显示税费项目。'] },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 56%', '同比 (0 个百分点)'] },
            operating: { label: '营业亏损', notes: ['利润率 (2%)', '同比 +7 个百分点'] },
            net: { label: '营业亏损', notes: ['来源图未单独显示净亏损项目。'] },
          },
        },
      },
    }
  );
})(window);
