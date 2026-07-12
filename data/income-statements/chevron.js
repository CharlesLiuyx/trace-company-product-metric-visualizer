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
      key: 'chevron-q1-fy26',
      company: 'Chevron',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/chevron-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 48.607,
        notes: ['+2% Y/Y'],
        items: [
          { id: 'upstream', label: 'Upstream', value: 13.179, notes: ['+6% Y/Y', '30% net margin'] },
          { id: 'downstream', label: 'Downstream', value: 34.363, notes: ['+2% Y/Y', '(2%) net margin'] },
          { id: 'all_other', label: 'All other', value: 0.014, notes: ['(26%) Y/Y'] },
          {
            id: 'income_from_equity_affiliates',
            label: 'Income from equity affiliates',
            value: 0.745,
            notes: ['(9%) Y/Y'],
          },
          { id: 'other_income', label: 'Other income', value: 0.306, notes: ['(56%) Y/Y'] },
        ],
      },
      costs: {
        // Chevron's published statement uses one pre-tax "Costs and Other
        // Deductions" subtotal rather than a conventional gross-profit stage.
        // The View maps that subtotal to this aggregate operating-expense seam
        // and preserves the reported component lines below.
        costOfRevenue: {
          label: 'No separate cost-of-revenue subtotal',
          value: 0,
          notes: ['The source aggregates all pre-tax deductions into one reported subtotal.'],
        },
        operatingExpenses: {
          total: 44.661,
          notes: ['Reported as Costs and Other Deductions in Chevron’s consolidated statement of income.'],
          items: [
            { id: 'purchased_crude_oil_and_products', label: 'Purchased crude oil and products', value: 28.265 },
            { id: 'opex', label: 'Operating, selling, general and administrative expenses', value: 8.742 },
            { id: 'depreciation_depletion_amortization', label: 'Depreciation, depletion and amortization', value: 5.808 },
            { id: 'taxes_non_income', label: 'Taxes other than on income', value: 1.314 },
            { id: 'interest', label: 'Interest and debt expense', value: 0.345 },
            { id: 'exploration', label: 'Exploration expenses', value: 0.205 },
            { label: 'Other components of net periodic benefit costs', value: -0.018 },
          ],
        },
        tax: { id: 'tax', label: 'Income tax expense', value: 1.653 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: {
          label: 'Revenue before reported deductions',
          value: 48.607,
          notes: ['The source does not publish a separate gross-profit subtotal.'],
        },
        operating: { id: 'pretax_income', label: 'Income before income tax expense', value: 3.946, notes: ['8% margin', '(4pp) Y/Y'] },
        net: { id: 'net_income', label: 'Net income', value: 2.293, notes: ['5% margin', '(3pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +2%'],
            items: [
              { id: 'upstream', label: '上游业务', notes: ['同比 +6%', '净利率 30%'] },
              { id: 'downstream', label: '下游业务', notes: ['同比 +2%', '净利率 (2%)'] },
              { id: 'all_other', label: '其他', notes: ['同比 (26%)'] },
              { id: 'income_from_equity_affiliates', label: '权益法被投资单位收益', notes: ['同比 (9%)'] },
              { id: 'other_income', label: '其他收入', notes: ['同比 (56%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '未单列销售成本小计', notes: ['来源将所有税前扣除项合并为一个小计。'] },
            operatingExpenses: {
              notes: ['Chevron 合并利润表中列为“成本及其他扣除项”。'],
              items: [
                { id: 'purchased_crude_oil_and_products', label: '购入原油和产品' },
                { id: 'opex', label: '运营、销售、一般及管理费用' },
                { id: 'depreciation_depletion_amortization', label: '折旧、耗竭及摊销' },
                { id: 'taxes_non_income', label: '非所得税税费' },
                { id: 'interest', label: '利息及债务费用' },
                { id: 'exploration', label: '勘探费用' },
              ],
            },
            tax: { label: '所得税费用' },
          },
          profit: {
            gross: { label: '扣除项前收入', notes: ['来源未公布单独的毛利润小计。'] },
            operating: { label: '所得税费用前利润', notes: ['利润率 8%', '同比 (4 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 5%', '同比 (3 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
