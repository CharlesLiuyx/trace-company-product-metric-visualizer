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
      key: 'byd-fy23',
      company: 'BYD',
      period: 'FY23',
      periodNote: 'Year ending Dec. 2023',
      currency: 'RMB',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/byd-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 602.3,
        notes: ['+42% Y/Y'],
        items: [
          {
            id: 'sales',
            label: 'Sales',
            value: 597.9,
            notes: ['+42% Y/Y'],
            children: [
              { id: 'automobiles', label: 'Automobiles', value: 479.1, notes: ['+49% Y/Y', '6% operating margin'] },
              {
                id: 'other_sales',
                label: 'Other sales',
                value: 118.8,
                notes: ['+20% Y/Y', 'Mobile handset components, assembly service and other products'],
              },
            ],
          },
          { id: 'services', label: 'Services', value: 4.2, notes: ['+5% Y/Y'] },
          { id: 'rental_income', label: 'Rental income', value: 0.2, notes: ['+5% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'operational_costs', label: 'Operational costs', value: 480.6 },
        operatingExpenses: {
          total: 88.6,
          items: [
            { id: 'rnd', label: 'R&D', value: 39.6, notes: ['7% of revenue', '+2pp Y/Y'] },
            { id: 'selling', label: 'Selling', value: 25.2, notes: ['4% of revenue', '+1pp Y/Y'] },
            { id: 'admin', label: 'Admin.', value: 13.5, notes: ['2% of revenue', '(0pp) Y/Y'] },
            { id: 'surcharge', label: 'Surcharge', value: 10.3, notes: ['1% of revenue', '+0pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 5.9 },
      },
      operatingOtherIncome: {
        total: 4.9,
        items: [{ id: 'other_operating_income', label: 'Other', value: 4.9 }],
      },
      otherExpenses: {
        total: 0.8,
        items: [{ id: 'other_after_operating', label: 'Other', value: 0.8 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 121.8, notes: ['20% margin', '+3pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 38.1, notes: ['6% margin', '(1pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 31.3, notes: ['5% margin', '+1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年',
          periodNote: '截至 2023 年 12 月',
          revenue: {
            notes: ['同比 +42%'],
            items: [
              {
                id: 'sales',
                label: '销售额',
                notes: ['同比 +42%'],
                children: [
                  { id: 'automobiles', label: '汽车', notes: ['同比 +49%', '营业利润率 6%'] },
                  {
                    id: 'other_sales',
                    label: '其他销售',
                    notes: ['同比 +20%', '手机部件、组装服务及其他产品'],
                  },
                ],
              },
              { id: 'services', label: '服务', notes: ['同比 +5%'] },
              { id: 'rental_income', label: '租赁收入', notes: ['同比 +5%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '运营成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 7%', '同比 +2 个百分点'] },
                { id: 'selling', label: '销售', notes: ['占收入 4%', '同比 +1 个百分点'] },
                { id: 'admin', label: '行政', notes: ['占收入 2%', '同比 (0 个百分点)'] },
                { id: 'surcharge', label: '附加费', notes: ['占收入 1%', '同比 +0 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          operatingOtherIncome: { items: [{ id: 'other_operating_income', label: '其他' }] },
          otherExpenses: { items: [{ id: 'other_after_operating', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['毛利率 20%', '同比 +3 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 6%', '同比 (1 个百分点)'] },
            net: { label: '净利润', notes: ['净利率 5%', '同比 +1 个百分点'] },
          },
        },
      },
    }
  );
})(window);
