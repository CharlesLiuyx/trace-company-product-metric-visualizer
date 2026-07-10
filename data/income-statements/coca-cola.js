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
      key: 'coca-cola-q1-fy26',
      company: 'Coca-Cola',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/coca-cola-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 12.5,
        notes: ['+12% Y/Y'],
        items: [
          { id: 'emea', label: 'EMEA', value: 3.0, notes: ['+13% Y/Y'] },
          { id: 'latam', label: 'LATAM', value: 1.7, notes: ['+14% Y/Y'] },
          { id: 'ucan', label: 'UCAN', value: 4.9, notes: ['+12% Y/Y'] },
          { id: 'apac', label: 'APAC', value: 1.5, notes: ['+6% Y/Y'] },
          { id: 'bottling_investments', label: 'Bottling investments', value: 1.6, notes: ['+12% Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 0.034 },
          {
            label: 'Eliminations',
            value: -0.3,
            notes: ['Inter-segment eliminations shown in the source chart as a separate red outflow.'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 4.6 },
        operatingExpenses: {
          total: 3.5,
          items: [
            { id: 'sga', label: 'SG&A', value: 3.5, notes: ['28% of revenue', '(1pp) Y/Y'] },
            { id: 'other_opex', label: 'Other', value: 0.021, notes: ['0% of revenue', '(0 pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.6 },
      },
      otherIncome: {
        total: 0.4,
        items: [{ id: 'other_income', label: 'Other', value: 0.4 }],
      },
      otherExpenses: {
        total: 0.2,
        items: [
          {
            id: 'interest',
            label: 'Interest',
            value: 0.2,
            notes: ['Non-operating interest bridging operating profit to net profit.'],
          },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 7.9, notes: ['63% margin', '+0pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 4.4, notes: ['35% margin', '+2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 4.0, notes: ['32% margin', '+2pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +12%'],
            items: [
              { id: 'emea', label: 'EMEA', notes: ['同比 +13%'] },
              { id: 'latam', label: 'LATAM', notes: ['同比 +14%'] },
              { id: 'ucan', label: 'UCAN', notes: ['同比 +12%'] },
              { id: 'apac', label: 'APAC', notes: ['同比 +6%'] },
              { id: 'bottling_investments', label: '装瓶投资业务', notes: ['同比 +12%'] },
              { id: 'other_revenue', label: '其他' },
              { label: '抵销', notes: ['来源图中作为单独的红色流出列示的分部间抵销。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售及管理费用', notes: ['占收入 28%', '同比 (1 个百分点)'] },
                { id: 'other_opex', label: '其他', notes: ['占收入 0%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他' }],
          },
          otherExpenses: {
            items: [{ id: 'interest', label: '利息', notes: ['连接营业利润与净利润的非经营性利息。'] }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 63%', '同比 +0 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 35%', '同比 +2 个百分点'] },
            net: { label: '净利润', notes: ['利润率 32%', '同比 +2 个百分点'] },
          },
        },
      },
    },
    {
      key: 'coca-cola-q4-fy25',
      company: 'Coca-Cola',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/coca-cola-q4-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 11.8,
        notes: ['+2% Y/Y'],
        items: [
          { id: 'emea', label: 'EMEA', value: 2.7, notes: ['+4% Y/Y'] },
          { id: 'latam', label: 'LATAM', value: 1.7, notes: ['+3% Y/Y'] },
          { id: 'ucan', label: 'UCAN', value: 4.9, notes: ['+4% Y/Y'] },
          { id: 'apac', label: 'APAC', value: 1.1, notes: ['(7%) Y/Y'] },
          { id: 'bottling_investments', label: 'Bottling investments', value: 1.5, notes: ['(2%) Y/Y'] },
          { id: 'other_revenue', label: 'Other', value: 0.045 },
          { label: 'Eliminations', value: -0.2, notes: ['Inter-segment eliminations shown as a separate red outflow.'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 4.7 },
        operatingExpenses: {
          total: 5.3,
          items: [
            { id: 'sga', label: 'SG&A', value: 4.2, notes: ['36% of revenue', '+0pp Y/Y'] },
            { id: 'other_opex', label: 'Other', value: 1.1, notes: ['9% of revenue', '+7pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.6 },
      },
      otherIncome: {
        total: 1.3,
        items: [{ id: 'other_income', label: 'Other', value: 1.3 }],
      },
      otherExpenses: {
        total: 0.2,
        items: [{ id: 'interest', label: 'Interest', value: 0.2, notes: ['Non-operating interest bridging operating profit to net profit.'] }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 7.1, notes: ['60% margin', '+0pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.8, notes: ['16% margin', '(8pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.3, notes: ['20% margin', '+0pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +2%'],
            items: [
              { id: 'emea', label: 'EMEA', notes: ['同比 +4%'] },
              { id: 'latam', label: 'LATAM', notes: ['同比 +3%'] },
              { id: 'ucan', label: 'UCAN', notes: ['同比 +4%'] },
              { id: 'apac', label: 'APAC', notes: ['同比 (7%)'] },
              { id: 'bottling_investments', label: '装瓶投资业务', notes: ['同比 (2%)'] },
              { id: 'other_revenue', label: '其他' },
              { label: '抵销', notes: ['来源图中作为单独的红色流出列示的分部间抵销。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sga', label: '销售及管理费用', notes: ['占收入 36%', '同比 +0 个百分点'] },
                { id: 'other_opex', label: '其他', notes: ['占收入 9%', '同比 +7 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other_income', label: '其他' }] },
          otherExpenses: { items: [{ id: 'interest', label: '利息', notes: ['连接营业利润与净利润的非经营性利息。'] }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 60%', '同比 +0 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 16%', '同比 (8 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 20%', '同比 +0 个百分点'] },
          },
        },
      },
    }
  );
})(window);
