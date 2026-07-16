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
      key: 'oxy-q3-fy25',
      company: 'Oxy',
      period: 'Q3 FY25',
      periodNote: 'Quarter ended Sep. 30, 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/oxy-q3-fy25.png',
      // The source infographic rounds independently at each branch, so the
      // displayed segment, cost, and profit subtotals differ by up to $0.3B.
      roundingTolerance: 0.35,
      revenue: {
        total: 6.7,
        notes: ['(6%) Y/Y'],
        items: [
          {
            id: 'oil_gas',
            label: 'Oil & Gas',
            value: 5.4,
            notes: ['(5%) Y/Y'],
            children: [
              { id: 'oil', label: 'Oil', value: 4.5, notes: ['(10%) Y/Y'] },
              { id: 'ngl', label: 'NGL', value: 0.6, notes: ['(6%) Y/Y'] },
              { id: 'gas', label: 'Gas', value: 0.3, notes: ['+119% Y/Y'] },
              { id: 'other_revenue', label: 'Other', value: 0.1 },
            ],
          },
          { id: 'chemical', label: 'Chemical', value: 1.2, notes: ['(6%) Y/Y'] },
          { id: 'midstream_marketing', label: 'Midstream & Marketing', value: 0.3, notes: ['(30%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          label: 'Cost of revenue',
          value: 0,
          notes: ['The source chart does not present a gross-profit subtotal or a separate cost-of-revenue line.'],
        },
        operatingExpenses: {
          id: 'operating_expenses',
          label: 'Costs and other deductions',
          total: 5.7,
          items: [
            { id: 'da', label: 'D&A', value: 2.1 },
            { id: 'oil_gas_opex', label: 'Oil & Gas opex', value: 1.2 },
            { id: 'chemical_midstream', label: 'Chemical & Midstream', value: 0.8 },
            { id: 'other_cost', label: 'Other', value: 0.5 },
            { id: 'transportation_gathering', label: 'Transportation & gathering', value: 0.4 },
            { id: 'interest', label: 'Interest', value: 0.3 },
            { id: 'sga', label: 'SG&A', value: 0.3 },
            { id: 'taxes_non_income', label: 'Taxes (non income)', value: 0.2 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.3 },
      },
      otherIncome: {
        total: 0.1,
        items: [{ id: 'other_income', label: 'Other', value: 0.1 }],
      },
      otherExpenses: {
        total: 0.2,
        items: [{ id: 'other_deduction', label: 'Other', value: 0.2 }],
      },
      profit: {
        gross: {
          label: 'Revenue',
          value: 6.7,
          notes: ['The source chart does not present a separate gross-profit subtotal.'],
        },
        operating: {
          id: 'pretax_income',
          label: 'Pretax income',
          value: 1.2,
          notes: ['17% margin', '(5pp) Y/Y'],
        },
        net: {
          id: 'net_income',
          label: 'Net income',
          value: 0.8,
          notes: ['13% margin', '(3pp) Y/Y'],
        },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月 30 日的季度',
          revenue: {
            notes: ['同比 (6%)'],
            items: [
              {
                id: 'oil_gas',
                label: '油气业务',
                notes: ['同比 (5%)'],
                children: [
                  { id: 'oil', label: '原油', notes: ['同比 (10%)'] },
                  { id: 'ngl', label: '天然气液', notes: ['同比 (6%)'] },
                  { id: 'gas', label: '天然气', notes: ['同比 +119%'] },
                  { id: 'other_revenue', label: '其他' },
                ],
              },
              { id: 'chemical', label: '化工', notes: ['同比 (6%)'] },
              { id: 'midstream_marketing', label: '中游与营销', notes: ['同比 (30%)'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              notes: ['来源图未呈现单独的毛利润或收入成本小计。'],
            },
            operatingExpenses: {
              label: '成本及其他扣减',
              items: [
                { id: 'da', label: '折旧及摊销' },
                { id: 'oil_gas_opex', label: '油气运营费用' },
                { id: 'chemical_midstream', label: '化工与中游' },
                { id: 'other_cost', label: '其他' },
                { id: 'transportation_gathering', label: '运输与集输' },
                { id: 'interest', label: '利息' },
                { id: 'sga', label: '销售、一般及行政费用' },
                { id: 'taxes_non_income', label: '税费（不含所得税）' },
              ],
            },
            tax: { label: '所得税' },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他收入' }],
          },
          otherExpenses: {
            items: [{ id: 'other_deduction', label: '其他扣减' }],
          },
          profit: {
            gross: {
              label: '收入',
              notes: ['来源图未呈现单独的毛利润小计。'],
            },
            operating: {
              label: '税前利润',
              notes: ['利润率 17%', '同比 (5 个百分点)'],
            },
            net: {
              label: '净利润',
              notes: ['利润率 13%', '同比 (3 个百分点)'],
            },
          },
        },
      },
    }
  );
})(window);
