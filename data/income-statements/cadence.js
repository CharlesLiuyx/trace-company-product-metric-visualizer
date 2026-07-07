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
      key: 'cadence-q4-fy25',
      company: 'Cadence',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/cadence-q4-fy25.png',
      roundingTolerance: 1.5,
      revenue: {
        total: 1440,
        notes: ['+6% Y/Y'],
        items: [
          { id: 'core_eda', label: 'Core Electronic Design Automation', value: 994, notes: ['+8% Y/Y'] },
          { id: 'ip', label: 'IP', value: 216, notes: ['+15% Y/Y'] },
          { id: 'system_design_analysis', label: 'System Design & Analysis', value: 230, notes: ['(16%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 189,
          notes: ['Source chart splits cost of revenue into Products ($144M) and Services ($45M).'],
        },
        operatingExpenses: {
          total: 788,
          notes: ['Source chart operating expense item sum is $789M due to rounded display values.'],
          items: [
            { id: 'rnd', label: 'R&D', value: 465, notes: ['32% of revenue', '+3pp Y/Y'] },
            { id: 'sm', label: 'S&M', value: 207, notes: ['14% of revenue', '(0pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 103, notes: ['7% of revenue', '+2pp Y/Y'] },
            { id: 'other_opex', label: 'Other', value: 14 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 105 },
      },
      otherIncome: {
        total: 30,
        items: [{ id: 'other_income', label: 'Other', value: 30 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1251, notes: ['87% margin', '+3pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 463, notes: ['32% margin', '(2pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 388, notes: ['27% margin', '+2pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +6%'],
            items: [
              { id: 'core_eda', label: '核心电子设计自动化', notes: ['同比 +8%'] },
              { id: 'ip', label: 'IP', notes: ['同比 +15%'] },
              { id: 'system_design_analysis', label: '系统设计与分析', notes: ['同比 (16%)'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              notes: ['来源图将收入成本拆分为产品 ($144M) 与服务 ($45M)。'],
            },
            operatingExpenses: {
              notes: ['由于展示值四舍五入，来源图中的运营费用分项合计为 $789M。'],
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 32%', '同比 +3 个百分点'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 14%', '同比 (0 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 7%', '同比 +2 个百分点'] },
                { id: 'other_opex', label: '其他' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 87%', '同比 +3 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 32%', '同比 (2 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 27%', '同比 +2 个百分点'] },
          },
        },
      },
    }
  );
})(window);
