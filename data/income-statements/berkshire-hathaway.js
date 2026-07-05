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
      key: 'berkshire-hathaway-q1-fy26',
      company: 'Berkshire Hathaway',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/berkshire-hathaway-q1-fy26.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 93.7,
        notes: ['+4% Y/Y'],
        items: [
          { id: 'insurance', label: 'Insurance', value: 25.3, notes: ['(0%) Y/Y', '22% margin'] },
          { id: 'bnsf', label: 'BNSF', value: 6.0, notes: ['+5% Y/Y', '30% margin'] },
          { id: 'bhe', label: 'BHE', value: 6.7, notes: ['+5% Y/Y', '11% margin'] },
          { id: 'pilot', label: 'Pilot', value: 11.2, notes: ['+8% Y/Y', '0% margin'] },
          { id: 'manufacturing', label: 'Manufacturing', value: 20.7, notes: ['+10% Y/Y', '15% margin'] },
          { id: 'mclane', label: 'McLane', value: 11.9, notes: ['(2%) Y/Y', '1% margin'] },
          { id: 'services_retailing', label: 'Services & retailing', value: 11.0, notes: ['+8% Y/Y', '10% margin'] },
          { id: 'other_revenue', label: 'Other', value: 0.9 },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 0,
          notes: ['Source chart does not show a separate cost-of-revenue or gross-profit layer.'],
        },
        operatingExpenses: {
          total: 81.3,
          items: [
            {
              id: 'operating_expenses',
              label: 'Operating costs and expenses',
              value: 81.3,
            },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 2.1 },
      },
      otherIncome: {
        total: 1.6,
        items: [{ id: 'other_income', label: 'Other', value: 1.6 }],
      },
      otherExpenses: {
        total: 1.6,
        items: [{ id: 'investment_losses', label: 'Investment losses', value: 1.6 }],
      },
      profit: {
        gross: {
          id: 'gross_profit',
          label: 'Gross profit',
          value: 93.7,
          notes: ['Modeled as revenue because the source chart flows revenue directly to operating profit and operating costs.'],
        },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 12.4, notes: ['13% margin', '(1pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 10.2 },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +4%'],
            items: [
              { id: 'insurance', label: '保险业务', notes: ['同比 (0%)', '利润率 22%'] },
              { id: 'bnsf', label: 'BNSF', notes: ['同比 +5%', '利润率 30%'] },
              { id: 'bhe', label: 'BHE', notes: ['同比 +5%', '利润率 11%'] },
              { id: 'pilot', label: 'Pilot 旅行中心', notes: ['同比 +8%', '利润率 0%'] },
              { id: 'manufacturing', label: '制造业务', notes: ['同比 +10%', '利润率 15%'] },
              { id: 'mclane', label: 'McLane 配送', notes: ['同比 (2%)', '利润率 1%'] },
              { id: 'services_retailing', label: '服务与零售', notes: ['同比 +8%', '利润率 10%'] },
              { id: 'other_revenue', label: '其他' },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              notes: ['来源图未单独显示收入成本或毛利润层。'],
            },
            operatingExpenses: {
              items: [{ id: 'operating_expenses', label: '运营成本和费用' }],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他' }],
          },
          otherExpenses: {
            items: [{ id: 'investment_losses', label: '投资损失' }],
          },
          profit: {
            gross: {
              label: '毛利润',
              notes: ['因来源图将收入直接流向营业利润和运营成本，按收入建模。'],
            },
            operating: { label: '营业利润', notes: ['利润率 13%', '同比 (1 个百分点)'] },
            net: { label: '净利润' },
          },
        },
      },
    }
  );
})(window);
