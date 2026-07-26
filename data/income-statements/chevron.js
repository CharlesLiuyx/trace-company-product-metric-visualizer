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
      key: 'chevron-q3-fy25',
      company: 'Chevron',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/chevron-q3-fy25.png',
      sourceUrl: 'https://www.sec.gov/Archives/edgar/data/93410/000009341025000108/cvx-20250930.htm',
      roundingTolerance: 0.05,
      revenue: {
        total: 49.726,
        notes: ['(2%) Y/Y'],
        items: [
          {
            id: 'sales_and_other_operating_revenues',
            label: 'Sales and other operating revenues',
            value: 48.169,
            notes: ['(2%) Y/Y'],
            children: [
              { id: 'upstream', label: 'Upstream', value: 15.165, notes: ['+28% Y/Y', '22% net margin'] },
              { id: 'downstream', label: 'Downstream', value: 32.98, notes: ['(11%) Y/Y', '3% net margin'] },
              { id: 'all_other', label: 'All other', value: 0.024, notes: ['(11%) Y/Y'] },
            ],
          },
          {
            id: 'income_from_equity_affiliates',
            label: 'Income from equity affiliates',
            value: 0.981,
            notes: ['(22%) Y/Y'],
          },
          { id: 'other_income', label: 'Other income', value: 0.576, notes: ['(20%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          label: 'No separate cost-of-revenue subtotal',
          value: 0,
          notes: ['The source aggregates all pre-tax deductions into one reported subtotal.'],
        },
        operatingExpenses: {
          total: 44.312,
          notes: ['Reported as Costs and Other Deductions in Chevron’s consolidated statement of income.'],
          items: [
            { id: 'purchased_crude_oil_and_products', label: 'Purchased crude oil and products', value: 27.398 },
            { id: 'opex', label: 'Operating expenses', value: 7.534 },
            { id: 'sga', label: 'Selling, general and administrative expenses', value: 1.524 },
            { id: 'depreciation_depletion_amortization', label: 'Depreciation, depletion and amortization', value: 5.781 },
            { id: 'taxes_non_income', label: 'Taxes other than on income', value: 1.347 },
            { id: 'interest', label: 'Interest and debt expense', value: 0.37 },
            { id: 'exploration', label: 'Exploration expenses', value: 0.288 },
            { id: 'other_costs', label: 'Other components of net periodic benefit costs', value: 0.07 },
          ],
        },
        tax: { id: 'tax', label: 'Income tax expense', value: 1.801 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: {
          label: 'Revenue before reported deductions',
          value: 49.726,
          notes: ['The source does not publish a separate gross-profit subtotal.'],
        },
        operating: {
          id: 'pretax_income',
          label: 'Income before income tax expense',
          value: 5.414,
          notes: ['11% margin', '(2pp) Y/Y'],
        },
        net: { id: 'net_income', label: 'Net income', value: 3.613, notes: ['7% margin', '(2pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          revenue: {
            notes: ['同比 (2%)'],
            items: [
              {
                id: 'sales_and_other_operating_revenues',
                label: '销售及其他营业收入',
                notes: ['同比 (2%)'],
                children: [
                  { id: 'upstream', label: '上游业务', notes: ['同比 +28%', '净利率 22%'] },
                  { id: 'downstream', label: '下游业务', notes: ['同比 (11%)', '净利率 3%'] },
                  { id: 'all_other', label: '其他', notes: ['同比 (11%)'] },
                ],
              },
              { id: 'income_from_equity_affiliates', label: '权益法被投资单位收益', notes: ['同比 (22%)'] },
              { id: 'other_income', label: '其他收入', notes: ['同比 (20%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '未单列销售成本小计', notes: ['来源将所有税前扣除项合并为一个小计。'] },
            operatingExpenses: {
              notes: ['Chevron 合并利润表中列为“成本及其他扣除项”。'],
              items: [
                { id: 'purchased_crude_oil_and_products', label: '购入原油和产品' },
                { id: 'opex', label: '运营费用' },
                { id: 'sga', label: '销售、一般及管理费用' },
                { id: 'depreciation_depletion_amortization', label: '折旧、耗竭及摊销' },
                { id: 'taxes_non_income', label: '非所得税税费' },
                { id: 'interest', label: '利息及债务费用' },
                { id: 'exploration', label: '勘探费用' },
                { id: 'other_costs', label: '定期福利净成本的其他组成部分' },
              ],
            },
            tax: { label: '所得税费用' },
          },
          profit: {
            gross: { label: '扣除项前收入', notes: ['来源未公布单独的毛利润小计。'] },
            operating: { label: '所得税费用前利润', notes: ['利润率 11%', '同比 (2 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 7%', '同比 (2 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'chevron-fy25',
      company: 'Chevron',
      period: 'FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/chevron-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 189.0,
        notes: ['(7%) Y/Y'],
        items: [
          {
            id: 'sales_and_other_operating_revenues',
            label: 'Sales and other operating revenues',
            value: 184.4,
            notes: ['(5%) Y/Y'],
            children: [
              { id: 'upstream', label: 'Upstream', value: 53.5, notes: ['+14% Y/Y', '24% net margin'] },
              { id: 'downstream', label: 'Downstream', value: 130.9, notes: ['(11%) Y/Y', '2% net margin'] },
              { id: 'all_other', label: 'All other', value: 0.1, notes: ['(21%) Y/Y'] },
            ],
          },
          {
            id: 'income_from_equity_affiliates',
            label: 'Income from equity affiliates',
            value: 3.0,
            notes: ['(35%) Y/Y'],
          },
          { id: 'other_income', label: 'Other income', value: 1.6, notes: ['(67%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          label: 'No separate cost-of-revenue subtotal',
          value: 0,
          notes: ['The source aggregates all pre-tax deductions into one reported subtotal.'],
        },
        operatingExpenses: {
          total: 169.3,
          notes: ['Reported as Costs and Other Deductions in Chevron’s consolidated statement of income.'],
          items: [
            { id: 'purchased_crude_oil_and_products', label: 'Purchased crude oil and products', value: 108.2 },
            { id: 'sga', label: 'Selling, general and administrative expenses', value: 28.0 },
            { id: 'depreciation_depletion_amortization', label: 'Depreciation, depletion and amortization', value: 20.1 },
            { id: 'opex', label: 'Operating expenses', value: 5.1 },
            { id: 'taxes_non_income', label: 'Taxes other than on income', value: 5.3 },
            { id: 'interest', label: 'Interest and debt expense', value: 1.2 },
            { id: 'exploration', label: 'Exploration expenses', value: 1.1 },
            { id: 'other_costs', label: 'Other costs and deductions', value: 0.3 },
          ],
        },
        tax: { id: 'tax', label: 'Income tax expense', value: 7.3 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: {
          label: 'Revenue before reported deductions',
          value: 189.0,
          notes: ['The source does not publish a separate gross-profit subtotal.'],
        },
        operating: {
          id: 'pretax_income',
          label: 'Income before income tax expense',
          value: 19.7,
          notes: ['10% margin', '(3pp) Y/Y'],
        },
        net: { id: 'net_income', label: 'Net income', value: 12.5, notes: ['7% margin', '(2pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 (7%)'],
            items: [
              {
                id: 'sales_and_other_operating_revenues',
                label: '销售及其他营业收入',
                notes: ['同比 (5%)'],
                children: [
                  { id: 'upstream', label: '上游业务', notes: ['同比 +14%', '净利率 24%'] },
                  { id: 'downstream', label: '下游业务', notes: ['同比 (11%)', '净利率 2%'] },
                  { id: 'all_other', label: '其他', notes: ['同比 (21%)'] },
                ],
              },
              { id: 'income_from_equity_affiliates', label: '权益法被投资单位收益', notes: ['同比 (35%)'] },
              { id: 'other_income', label: '其他收入', notes: ['同比 (67%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '未单列销售成本小计', notes: ['来源将所有税前扣除项合并为一个小计。'] },
            operatingExpenses: {
              notes: ['Chevron 合并利润表中列为“成本及其他扣除项”。'],
              items: [
                { id: 'purchased_crude_oil_and_products', label: '购入原油和产品' },
                { id: 'sga', label: '销售、一般及管理费用' },
                { id: 'depreciation_depletion_amortization', label: '折旧、耗竭及摊销' },
                { id: 'opex', label: '运营费用' },
                { id: 'taxes_non_income', label: '非所得税税费' },
                { id: 'interest', label: '利息及债务费用' },
                { id: 'exploration', label: '勘探费用' },
                { id: 'other_costs', label: '其他成本及扣除项' },
              ],
            },
            tax: { label: '所得税费用' },
          },
          profit: {
            gross: { label: '扣除项前收入', notes: ['来源未公布单独的毛利润小计。'] },
            operating: { label: '所得税费用前利润', notes: ['利润率 10%', '同比 (3 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 7%', '同比 (2 个百分点)'] },
          },
        },
      },
    },
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
