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
      key: 'blackrock-q1-fy26',
      company: 'BlackRock',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/blackrock-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 6.7,
        notes: ['+27% Y/Y'],
        items: [
          {
            id: 'investment_advisory_fees',
            label: 'Investment advisory, fees & securities lending',
            value: 5.4,
            notes: ['+24% Y/Y'],
          },
          { id: 'performance_fees', label: 'Investment advisory performance fees', value: 0.3, notes: ['+353% Y/Y'] },
          { id: 'technology_services', label: 'Technology services', value: 0.5, notes: ['+22% Y/Y'] },
          { id: 'distribution_fees', label: 'Distribution fees', value: 0.4, notes: ['+21% Y/Y'] },
          { id: 'advisory_other', label: 'Advisory & other', value: 0.1, notes: ['+19% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 0,
          notes: ['Source chart does not show a separate gross profit or cost-of-revenue layer.'],
        },
        operatingExpenses: {
          total: 3.9,
          items: [
            { id: 'compensation_benefits', label: 'Compensation & benefits', value: 2.2 },
            { id: 'sales_asset_account_expenses', label: 'Sales, asset & Account expenses', value: 1.3 },
            { id: 'amortization_other', label: 'Amortization & other', value: 0.3 },
            { id: 'ga', label: 'G&A', value: 0.1 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.5 },
      },
      otherIncome: {
        total: 0.028,
        items: [{ id: 'other', label: 'Other', value: 0.028, valueText: '$28M' }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: {
          id: 'gross_profit',
          label: 'Gross profit',
          value: 6.7,
          notes: ['Source chart flows revenue directly to operating profit and operating expenses.'],
        },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.8, notes: ['42% margin', '+10pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net income', value: 2.3, notes: ['35% margin', '+6pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +27%'],
            items: [
              { id: 'investment_advisory_fees', label: '投资顾问、费用及证券借贷', notes: ['同比 +24%'] },
              { id: 'performance_fees', label: '投资顾问绩效费', notes: ['同比 +353%'] },
              { id: 'technology_services', label: '技术服务', notes: ['同比 +22%'] },
              { id: 'distribution_fees', label: '分销费用', notes: ['同比 +21%'] },
              { id: 'advisory_other', label: '顾问及其他', notes: ['同比 +19%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              notes: ['来源图未单独显示毛利润或收入成本层。'],
            },
            operatingExpenses: {
              items: [
                { id: 'compensation_benefits', label: '薪酬与福利' },
                { id: 'sales_asset_account_expenses', label: '销售、资产及账户费用' },
                { id: 'amortization_other', label: '摊销及其他' },
                { id: 'ga', label: '管理费用' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other', label: '其他' }],
          },
          profit: {
            gross: {
              label: '毛利润',
              notes: ['来源图将收入直接流向营业利润和运营费用。'],
            },
            operating: { label: '营业利润', notes: ['利润率 42%', '同比 +10 个百分点'] },
            net: { label: '净利润', notes: ['利润率 35%', '同比 +6 个百分点'] },
          },
        },
      },
    }
  );
})(window);
