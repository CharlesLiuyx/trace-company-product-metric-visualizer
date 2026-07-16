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
      key: 'amgen-q3-fy25',
      company: 'Amgen',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/amgen-q3-fy25.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 9.6,
        notes: ['+12% Y/Y'],
        items: [
          {
            id: 'product_sales',
            label: 'Product sales',
            value: 9.1,
            notes: ['+12% Y/Y'],
            children: [
              { id: 'repatha', label: 'Repatha', value: 0.8, notes: ['+40% Y/Y'] },
              { id: 'prolia', label: 'Prolia', value: 1.1, notes: ['+9% Y/Y'] },
              { id: 'evenity', label: 'EVENITY', value: 0.5, notes: ['+36% Y/Y'] },
              { id: 'blincyto', label: 'BLINCYTO', value: 0.4, notes: ['+20% Y/Y'] },
              { id: 'tezspire', label: 'Tezspire', value: 0.4, notes: ['+40% Y/Y'] },
              { id: 'tepezza', label: 'Tepezza', value: 0.6, notes: ['+15% Y/Y'] },
              { id: 'other_products', label: 'Other', value: 5.3, notes: ['+5% Y/Y'] },
            ],
          },
          { id: 'other_revenue', label: 'Other', value: 0.4, notes: ['+19% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 3.1 },
        operatingExpenses: {
          total: 3.9,
          items: [
            { id: 'rnd', label: 'R&D', value: 1.9, notes: ['20% of revenue', '+3pp Y/Y'] },
            { id: 'sga', label: 'SG&A', value: 1.7, notes: ['18% of revenue', '(1pp) Y/Y'] },
            { id: 'other_opex', label: 'Other', value: 0.3, notes: ['3% of revenue', '+3pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.7 },
      },
      otherIncome: {
        total: 2.1,
        items: [
          { id: 'other_income', label: 'Other', value: 2.1 },
        ],
      },
      otherExpenses: {
        total: 0.7,
        items: [
          { id: 'interest', label: 'Interest', value: 0.7 },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 6.5, notes: ['68% margin', '+7pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.5, notes: ['26% margin', '+2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 3.2, notes: ['21% margin', '+23pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          revenue: {
            notes: ['同比 +12%'],
            items: [
              {
                id: 'product_sales',
                label: '产品销售',
                notes: ['同比 +12%'],
                children: [
                  { id: 'repatha', label: 'Repatha', notes: ['同比 +40%'] },
                  { id: 'prolia', label: 'Prolia', notes: ['同比 +9%'] },
                  { id: 'evenity', label: 'EVENITY', notes: ['同比 +36%'] },
                  { id: 'blincyto', label: 'BLINCYTO', notes: ['同比 +20%'] },
                  { id: 'tezspire', label: 'Tezspire', notes: ['同比 +40%'] },
                  { id: 'tepezza', label: 'Tepezza', notes: ['同比 +15%'] },
                  { id: 'other_products', label: '其他', notes: ['同比 +5%'] },
                ],
              },
              { id: 'other_revenue', label: '其他', notes: ['同比 +19%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 20%', '同比 +3 个百分点'] },
                { id: 'sga', label: '销售、一般及管理费用', notes: ['占收入 18%', '同比 (1 个百分点)'] },
                { id: 'other_opex', label: '其他', notes: ['占收入 3%', '同比 +3 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他' }],
          },
          otherExpenses: {
            items: [{ id: 'interest', label: '利息' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 68%', '同比 +7 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 26%', '同比 +2 个百分点'] },
            net: { label: '净利润', notes: ['利润率 21%', '同比 +23 个百分点'] },
          },
        },
      },
    },
    {
      key: 'amgen-q4-fy25',
      company: 'Amgen',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/amgen-q4-fy25.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 9.9,
        notes: ['+9% Y/Y'],
        items: [
          {
            id: 'product_sales',
            label: 'Product sales',
            value: 9.4,
            notes: ['+7% Y/Y'],
            children: [
              { id: 'repatha', label: 'Repatha', value: 0.9, notes: ['+44% Y/Y'] },
              { id: 'prolia', label: 'Prolia', value: 1.1, notes: ['(10%) Y/Y'] },
              { id: 'evenity', label: 'EVENITY', value: 0.6, notes: ['+39% Y/Y'] },
              { id: 'blincyto', label: 'BLINCYTO', value: 0.4, notes: ['+8% Y/Y'] },
              { id: 'tezspire', label: 'Tezspire', value: 0.5, notes: ['+60% Y/Y'] },
              { id: 'tepezza', label: 'Tepezza', value: 0.5, notes: ['(1%) Y/Y'] },
              { id: 'other_products', label: 'Other', value: 5.6, notes: ['+2% Y/Y'] },
            ],
          },
          { id: 'other_revenue', label: 'Other', value: 0.5, notes: ['+35% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 3.0 },
        operatingExpenses: {
          total: 4.2,
          items: [
            { id: 'rnd', label: 'R&D', value: 2.1, notes: ['22% of revenue', '+3pp Y/Y'] },
            { id: 'sga', label: 'SG&A', value: 2.0, notes: ['20% of revenue', '(1pp) Y/Y'] },
            { id: 'other_opex', label: 'Other', value: 0.1, notes: ['1% of revenue', '+0pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.2 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 1.3,
        items: [
          { id: 'interest', label: 'Interest', value: 0.7 },
          { id: 'other_expense', label: 'Other', value: 0.6 },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 6.9, notes: ['70% margin', '+4pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.7, notes: ['28% margin', '+2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.3, notes: ['14% margin', '+7pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +9%'],
            items: [
              {
                id: 'product_sales',
                label: '产品销售',
                notes: ['同比 +7%'],
                children: [
                  { id: 'repatha', label: 'Repatha', notes: ['同比 +44%'] },
                  { id: 'prolia', label: 'Prolia', notes: ['同比 (10%)'] },
                  { id: 'evenity', label: 'EVENITY', notes: ['同比 +39%'] },
                  { id: 'blincyto', label: 'BLINCYTO', notes: ['同比 +8%'] },
                  { id: 'tezspire', label: 'Tezspire', notes: ['同比 +60%'] },
                  { id: 'tepezza', label: 'Tepezza', notes: ['同比 (1%)'] },
                  { id: 'other_products', label: '其他', notes: ['同比 +2%'] },
                ],
              },
              { id: 'other_revenue', label: '其他', notes: ['同比 +35%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 22%', '同比 +3 个百分点'] },
                { id: 'sga', label: '销售、一般及管理费用', notes: ['占收入 20%', '同比 (1 个百分点)'] },
                { id: 'other_opex', label: '其他', notes: ['占收入 1%', '同比 +0 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [
              { id: 'interest', label: '利息' },
              { id: 'other_expense', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 70%', '同比 +4 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 28%', '同比 +2 个百分点'] },
            net: { label: '净利润', notes: ['利润率 14%', '同比 +7 个百分点'] },
          },
        },
      },
    }
  );
})(window);
