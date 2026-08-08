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
      key: 'ford-q2-fy26',
      company: 'Ford',
      period: 'Q2 FY26',
      periodNote: 'Quarter ended Jun. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/ford-q2-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 48.3,
        notes: ['(4%) Y/Y'],
        items: [
          { id: 'ford_blue', label: 'Ford Blue', value: 26.1, notes: ['+1% Y/Y', 'Internal combustion'] },
          { id: 'model_e', label: 'Ford Model e', value: 1.0, notes: ['(56%) Y/Y', 'Electric Vehicles'] },
          { id: 'ford_pro', label: 'Ford Pro', value: 17.8, notes: ['(5%) Y/Y', 'Commercial division'] },
          { id: 'ford_credit', label: 'Ford Credit', value: 3.4, notes: ['+5% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 42.2 },
        operatingExpenses: {
          total: 5.4,
          notes: ['Displayed expense items sum to $5.5B because each amount is rounded.'],
          items: [
            { id: 'ford_credit_expenses', label: 'Ford Credit expenses', value: 2.8 },
            { id: 'sga', label: 'SG&A', value: 2.7 },
          ],
        },
        tax: { label: 'Tax', value: 0, notes: ['No separate tax flow is displayed in the source chart.'] },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 1.9,
        items: [{ id: 'other', label: 'Other', value: 1.9 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 6.1, notes: ['13% margin', '+1pp Y/Y'] },
        operating: {
          id: 'operating_profit',
          label: 'Operating profit',
          value: 0.6,
          notes: ['1% margin', '+0pp Y/Y', 'Gross profit less operating expenses is $0.7B; the source reports $0.6B due to rounded line items.'],
        },
        net: { id: 'net_loss', label: 'Net loss', value: -1.3 },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月',
          revenue: {
            notes: ['同比 (4%)'],
            items: [
              { id: 'ford_blue', label: 'Ford Blue 燃油车业务', notes: ['同比 +1%', '内燃机业务'] },
              { id: 'model_e', label: 'Ford Model e 电动车业务', notes: ['同比 (56%)', '电动汽车'] },
              { id: 'ford_pro', label: 'Ford Pro 商用车业务', notes: ['同比 (5%)', '商用车业务'] },
              { id: 'ford_credit', label: '福特信贷', notes: ['同比 +5%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              notes: ['由于来源图逐项四舍五入，两个显示费用项合计为 55 亿美元。'],
              items: [
                { id: 'ford_credit_expenses', label: '福特信贷费用' },
                { id: 'sga', label: '销售、一般及管理费用' },
              ],
            },
            tax: { label: '税费', notes: ['来源图未单独显示税费流。'] },
          },
          otherExpenses: { items: [{ id: 'other', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 13%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 1%', '同比 +0 个百分点', '毛利润减去运营费用为 7 亿美元；由于各行取整，来源图报告为 6 亿美元。'] },
            net: { label: '净亏损' },
          },
        },
      },
    },
    {
      key: 'ford-q1-fy26',
      company: 'Ford',
      period: 'Q1 FY26',
      periodNote: 'Quarter ended Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/ford-q1-fy26.png',
      roundingTolerance: 0.21,
      revenue: {
        total: 43.3,
        notes: ['+6% Y/Y'],
        items: [
          { id: 'ford_blue', label: 'Ford Blue', value: 33.4, notes: ['+6% Y/Y', 'Internal combustion'] },
          { id: 'model_e', label: 'Ford Model e', value: 1.3, notes: ['(4%) Y/Y', 'Electric Vehicles'] },
          { id: 'ford_pro', label: 'Ford Pro', value: 14.7, notes: ['(3%) Y/Y', 'Commercial division'] },
          { id: 'ford_credit', label: 'Ford Credit', value: 3.4, notes: ['+6% Y/Y'] },
          {
            id: 'eliminations',
            label: 'Eliminations',
            value: -9.6,
            notes: ['Eliminations between segment revenue and consolidated revenue.'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 35.3 },
        operatingExpenses: {
          total: 5.6,
          items: [
            { id: 'ford_credit_expenses', label: 'Ford Credit expenses', value: 2.8 },
            { id: 'sga', label: 'SG&A', value: 2.8 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.4 },
      },
      otherIncome: {
        total: 0.9,
        items: [{ id: 'other', label: 'Other', value: 0.9 }],
      },
      otherExpenses: {
        total: 0.4,
        items: [{ id: 'interest', label: 'Interest', value: 0.4 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 7.9, notes: ['18% margin', '+5pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.3, notes: ['5% margin', '+5pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.6, notes: ['6% margin', '+5pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +6%'],
            items: [
              { id: 'ford_blue', label: 'Ford Blue 燃油车业务', notes: ['同比 +6%', '内燃机业务'] },
              { id: 'model_e', label: 'Ford Model e 电动车业务', notes: ['同比 (4%)', '电动汽车'] },
              { id: 'ford_pro', label: 'Ford Pro 商用车业务', notes: ['同比 (3%)', '商用车业务'] },
              { id: 'ford_credit', label: '福特信贷', notes: ['同比 +6%'] },
              { id: 'eliminations', label: '抵销项', notes: ['分部收入与合并收入之间的抵销项。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'ford_credit_expenses', label: '福特信贷费用' },
                { id: 'sga', label: '销售、一般及管理费用' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other', label: '其他' }] },
          otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 18%', '同比 +5 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 5%', '同比 +5 个百分点'] },
            net: { label: '净利润', notes: ['利润率 6%', '同比 +5 个百分点'] },
          },
        },
      },
    },
    {
      key: 'ford-fy25',
      company: 'Ford',
      period: 'FY25',
      periodNote: 'Year ended Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/ford-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 187.3,
        notes: ['+0% Y/Y'],
        items: [
          { id: 'ford_blue', label: 'Ford Blue', value: 101.0, notes: ['(1%) Y/Y', 'Internal combustion'] },
          { id: 'model_e', label: 'Ford Model e', value: 6.7, notes: ['+73% Y/Y', 'Electric Vehicles'] },
          { id: 'ford_pro', label: 'Ford Pro', value: 66.3, notes: ['(1%) Y/Y', 'Commercial division'] },
          { id: 'ford_credit', label: 'Ford Credit', value: 13.3, notes: ['+8% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 174.5 },
        operatingExpenses: {
          total: 22.0,
          notes: ['Source chart rounds the two displayed expense items to $21.9B.'],
          items: [
            { id: 'sga', label: 'SG&A', value: 11.1 },
            { id: 'ford_credit_expenses', label: 'Ford Credit expenses', value: 10.8 },
          ],
        },
        tax: { label: 'Tax', value: 0, notes: ['No separate tax flow is displayed in the source chart.'] },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 12.8, notes: ['7% margin', '(8pp) Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -9.2, notes: ['(5%) margin', '(8pp) Y/Y'] },
        // The source visual ends at operating loss. Treat that terminal result
        // as the statement's net result for the verifier's conserved path.
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -9.2,
          notes: ['The source image ends at operating loss and does not display a separate net result.'],
        },
      },
      i18n: {
        zh: {
          period: '2025 财年',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +0%'],
            items: [
              { id: 'ford_blue', label: 'Ford Blue 燃油车业务', notes: ['同比 (1%)', '内燃机业务'] },
              { id: 'model_e', label: 'Ford Model e 电动车业务', notes: ['同比 +73%', '电动汽车'] },
              { id: 'ford_pro', label: 'Ford Pro 商用车业务', notes: ['同比 (1%)', '商用车业务'] },
              { id: 'ford_credit', label: '福特信贷', notes: ['同比 +8%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              notes: ['来源图将两个显示费用项取整为 $21.9B。'],
              items: [
                { id: 'sga', label: '销售、一般及管理费用' },
                { id: 'ford_credit_expenses', label: '福特信贷费用' },
              ],
            },
            tax: { label: '税费', notes: ['来源图未单独显示税费流。'] },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 7%', '同比 (8 个百分点)'] },
            operating: { label: '营业亏损', notes: ['利润率 (5%)', '同比 (8 个百分点)'] },
            net: { label: '营业亏损', notes: ['来源图止于营业亏损，未显示单独的净利润。'] },
          },
        },
      },
    }
  );
})(window);
