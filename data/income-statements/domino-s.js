/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/domino-s-q4-fy25.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push(
    {
      key: 'domino-s-q4-fy25',
      company: "Domino's",
      period: 'Q4 FY25',
      periodNote: 'Quarter ended Dec. 28, 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/domino-s-q4-fy25.png',
      roundingTolerance: 1,
      revenue: {
        total: 1536,
        notes: ['+6% Y/Y'],
        items: [
          { id: 'us_company_owned_stores_revenue', label: 'US company-owned stores', value: 108, notes: ['(10%) Y/Y'] },
          { id: 'us_franchise_royalties_fees', label: 'US franchise royalties & fees', value: 213, notes: ['+9% Y/Y'] },
          { id: 'supply_chain_revenue', label: 'Supply chain', value: 936, notes: ['+7% Y/Y'] },
          { id: 'international_franchise', label: 'International franchise', value: 107, notes: ['+9% Y/Y'] },
          { id: 'us_franchise_advertising_revenue', label: 'US franchise advertising', value: 172, notes: ['+12% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_sales',
          label: 'Cost of sales',
          value: 926,
          items: [
            { id: 'supply_chain_cost', label: 'Supply chain', value: 829 },
            { id: 'us_company_owned_stores_cost', label: 'US company-owned stores', value: 97 },
          ],
        },
        operatingExpenses: {
          total: 314,
          items: [
            { id: 'us_franchise_advertising_cost', label: 'US franchise advertising', value: 172 },
            { id: 'general_administrative', label: 'General & administrative', value: 142 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 49 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 65,
        items: [{ id: 'other', label: 'Other', value: 65 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 610, notes: ['40% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 296, notes: ['19% margin', '+0pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 182, notes: ['12% margin', '+0pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月 28 日的季度',
          revenue: {
            notes: ['同比 +6%'],
            items: [
              { id: 'us_company_owned_stores_revenue', label: '美国自营门店', notes: ['同比 (10%)'] },
              { id: 'us_franchise_royalties_fees', label: '美国加盟商权利金及费用', notes: ['同比 +9%'] },
              { id: 'supply_chain_revenue', label: '供应链', notes: ['同比 +7%'] },
              { id: 'international_franchise', label: '国际特许经营', notes: ['同比 +9%'] },
              { id: 'us_franchise_advertising_revenue', label: '美国加盟商广告', notes: ['同比 +12%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '销售成本',
              items: [
                { id: 'supply_chain_cost', label: '供应链' },
                { id: 'us_company_owned_stores_cost', label: '美国自营门店' },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'us_franchise_advertising_cost', label: '美国加盟商广告' },
                { id: 'general_administrative', label: '一般及行政' },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'other', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 40%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 19%', '同比 +0 个百分点'] },
            net: { label: '净利润', notes: ['利润率 12%', '同比 +0 个百分点'] },
          },
        },
      },
    },
    {
      key: 'domino-s-q1-fy26',
      company: "Domino's",
      period: 'Q1 FY26',
      periodNote: 'Quarter ended Mar. 22, 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/domino-s-q1-fy26.png',
      roundingTolerance: 1,
      revenue: {
        total: 1151,
        notes: ['+3% Y/Y'],
        items: [
          { id: 'us_company_owned_stores_revenue', label: 'US company-owned stores', value: 82, notes: ['(10%) Y/Y'] },
          { id: 'us_franchise_royalties_fees', label: 'US franchise royalties & fees', value: 158, notes: ['+5% Y/Y'] },
          { id: 'supply_chain_revenue', label: 'Supply chain', value: 699, notes: ['+4% Y/Y'] },
          { id: 'international_franchise', label: 'International franchise', value: 81, notes: ['+7% Y/Y'] },
          { id: 'us_franchise_advertising_revenue', label: 'US franchise advertising', value: 131, notes: ['+5% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_sales',
          label: 'Cost of sales',
          value: 686,
          items: [
            { id: 'supply_chain_cost', label: 'Supply chain', value: 614 },
            { id: 'us_company_owned_stores_cost', label: 'US company-owned stores', value: 72 },
          ],
        },
        operatingExpenses: {
          total: 242,
          items: [
            { id: 'us_franchise_advertising_cost', label: 'US franchise advertising', value: 131 },
            { id: 'general_administrative', label: 'General & administrative', value: 111 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 41 },
      },
      operatingOtherIncome: {
        total: 8,
        items: [{ id: 'gains', label: 'Gains', value: 8 }],
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 50,
        items: [{ id: 'other', label: 'Other', value: 50 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 465, notes: ['40% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 230, notes: ['20% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 140, notes: ['12% margin', '(1pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月 22 日的季度',
          revenue: {
            notes: ['同比 +3%'],
            items: [
              { id: 'us_company_owned_stores_revenue', label: '美国自营门店', notes: ['同比 (10%)'] },
              { id: 'us_franchise_royalties_fees', label: '美国加盟商权利金及费用', notes: ['同比 +5%'] },
              { id: 'supply_chain_revenue', label: '供应链', notes: ['同比 +4%'] },
              { id: 'international_franchise', label: '国际特许经营', notes: ['同比 +7%'] },
              { id: 'us_franchise_advertising_revenue', label: '美国加盟商广告', notes: ['同比 +5%'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '销售成本',
              items: [
                { id: 'supply_chain_cost', label: '供应链' },
                { id: 'us_company_owned_stores_cost', label: '美国自营门店' },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'us_franchise_advertising_cost', label: '美国加盟商广告' },
                { id: 'general_administrative', label: '一般及行政' },
              ],
            },
            tax: { label: '税费' },
          },
          operatingOtherIncome: { items: [{ id: 'gains', label: '收益' }] },
          otherExpenses: { items: [{ id: 'other', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 40%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 20%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 12%', '同比 (1 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
