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
      key: 'pepsico-q4-fy25',
      company: 'PepsiCo',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/pepsico-q4-fy25.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 29.3,
        notes: ['+6% Y/Y'],
        items: [
          {
            id: 'north_america',
            label: 'North America',
            value: 16.6,
            notes: ['+3% Y/Y'],
            children: [
              { id: 'foods', label: 'Foods', value: 8.3, notes: ['+1% Y/Y'] },
              { id: 'pepsico_beverages', label: 'PepsiCo Beverages', value: 8.2, notes: ['+4% Y/Y'] },
            ],
          },
          { id: 'ib_franchise', label: 'IB franchise', value: 1.6, notes: ['+4% Y/Y'] },
          { id: 'latam', label: 'LATAM', value: 3.7, notes: ['+11% Y/Y'] },
          { id: 'emea', label: 'EMEA', value: 6.1, notes: ['+12% Y/Y'] },
          { id: 'apac', label: 'APAC', value: 1.5, notes: ['+5% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 13.7 },
        operatingExpenses: {
          total: 12.1,
          items: [
            { id: 'operating_expenses', label: 'Operating expenses SG&A', value: 12.1 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.4 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 0.5,
        items: [
          { id: 'interest', label: 'Interest', value: 0.3 },
          { id: 'other', label: 'Other', value: 0.2 },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 15.6, notes: ['53% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 3.6, notes: ['12% margin', '+4pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.5, notes: ['9% margin', '+3pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +6%'],
            items: [
              {
                id: 'north_america', label: '北美', notes: ['同比 +3%'],
                children: [
                  { id: 'foods', label: '食品', notes: ['同比 +1%'] },
                  { id: 'pepsico_beverages', label: '百事饮料', notes: ['同比 +4%'] },
                ],
              },
              { id: 'ib_franchise', label: '国际饮料特许经营', notes: ['同比 +4%'] },
              { id: 'latam', label: '拉丁美洲', notes: ['同比 +11%'] },
              { id: 'emea', label: '欧洲中东非洲', notes: ['同比 +12%'] },
              { id: 'apac', label: '亚太', notes: ['同比 +5%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: { items: [{ id: 'operating_expenses', label: '运营费用 SG&A' }] },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'interest', label: '利息' }, { id: 'other', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 53%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 12%', '同比 +4 个百分点'] },
            net: { label: '净利润', notes: ['利润率 9%', '同比 +3 个百分点'] },
          },
        },
      },
    },
    {
      key: 'pepsico-q1-fy26',
      company: 'PepsiCo',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/pepsico-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 19.4,
        notes: ['+9% Y/Y'],
        items: [
          {
            id: 'north_america',
            label: 'North America',
            value: 12.7,
            notes: ['+5% Y/Y'],
            children: [
              { id: 'foods', label: 'Foods', value: 6.3, notes: ['+2% Y/Y'] },
              { id: 'pepsico_beverages', label: 'PepsiCo Beverages', value: 6.4, notes: ['+9% Y/Y'] },
            ],
          },
          { id: 'ib_franchise', label: 'IB franchise', value: 0.8, notes: ['+9% Y/Y'] },
          { id: 'latam', label: 'LATAM', value: 1.9, notes: ['+16% Y/Y'] },
          { id: 'emea', label: 'EMEA', value: 2.8, notes: ['+18% Y/Y'] },
          { id: 'apac', label: 'APAC', value: 1.1, notes: ['+11% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 8.7 },
        operatingExpenses: {
          total: 7.5,
          items: [
            { id: 'operating_expenses', label: 'Operating expenses SG&A', value: 7.5 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.6 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.4,
        items: [
          { id: 'interest_other', label: 'Interest & other', value: 0.4 },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 10.7, notes: ['55% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 3.2, notes: ['17% margin', '+2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.2, notes: ['11% margin', '+1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +9%'],
            items: [
              {
                id: 'north_america',
                label: '北美',
                notes: ['同比 +5%'],
                children: [
                  { id: 'foods', label: '食品', notes: ['同比 +2%'] },
                  { id: 'pepsico_beverages', label: '百事饮料', notes: ['同比 +9%'] },
                ],
              },
              { id: 'ib_franchise', label: '国际饮料特许经营', notes: ['同比 +9%'] },
              { id: 'latam', label: '拉丁美洲', notes: ['同比 +16%'] },
              { id: 'emea', label: '欧洲中东非洲', notes: ['同比 +18%'] },
              { id: 'apac', label: '亚太', notes: ['同比 +11%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'operating_expenses', label: '运营费用 SG&A' },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [
              { id: 'interest_other', label: '利息及其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 55%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 17%', '同比 +2 个百分点'] },
            net: { label: '净利润', notes: ['利润率 11%', '同比 +1 个百分点'] },
          },
        },
      },
    }
  );
})(window);
