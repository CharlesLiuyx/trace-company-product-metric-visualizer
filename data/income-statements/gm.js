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
      key: 'gm-fy25',
      company: 'GM',
      period: 'FY25',
      periodNote: 'Year ended Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/gm-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 185.0,
        notes: ['(1%) Y/Y'],
        items: [
          {
            id: 'auto',
            label: 'Auto',
            value: 168.0,
            notes: ['(2%) Y/Y'],
            children: [
              { id: 'gm_north_america', label: 'GM North America', value: 154.3, notes: ['(2%) Y/Y'] },
              { id: 'gm_international', label: 'GM International', value: 13.4, notes: ['(3%) Y/Y'] },
              { id: 'corporate', label: 'Corporate', value: 0.2, notes: ['+10% Y/Y'] },
            ],
          },
          { id: 'gm_financial', label: 'GM Financial', value: 17.1, notes: ['+7% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 159.1 },
        operatingExpenses: {
          total: 23.0,
          items: [
            { id: 'other', label: 'Other', value: 14.3 },
            { id: 'sga', label: 'SG&A', value: 8.7 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.3 },
      },
      otherIncome: {
        total: 0.2,
        items: [{ id: 'interest', label: 'Interest', value: 0.2 }],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 25.9, notes: ['14% margin', '(5pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.9, notes: ['2% margin', '(5pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.8, notes: ['2% margin', '(2pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 (1%)'],
            items: [
              {
                id: 'auto',
                label: '汽车业务',
                notes: ['同比 (2%)'],
                children: [
                  { id: 'gm_north_america', label: '通用北美', notes: ['同比 (2%)'] },
                  { id: 'gm_international', label: '通用国际', notes: ['同比 (3%)'] },
                  { id: 'corporate', label: '公司及其他', notes: ['同比 +10%'] },
                ],
              },
              { id: 'gm_financial', label: '通用金融', notes: ['同比 +7%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'other', label: '其他' },
                { id: 'sga', label: '销售及管理' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'interest', label: '利息' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 14%', '同比 (5 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 2%', '同比 (5 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 2%', '同比 (2 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'gm-q1-fy26',
      company: 'GM',
      period: 'Q1 FY26',
      periodNote: 'Quarter ended Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/gm-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 43.6,
        notes: ['(1%) Y/Y'],
        items: [
          {
            id: 'auto',
            label: 'Auto',
            value: 39.3,
            notes: ['(1%) Y/Y'],
            children: [
              { id: 'gm_north_america', label: 'GM North America', value: 36.4, notes: ['(3%) Y/Y'] },
              { id: 'gm_international', label: 'GM International', value: 2.9, notes: ['+18% Y/Y'] },
              { id: 'corporate', label: 'Corporate', value: 0.1, notes: ['+96% Y/Y'] },
            ],
          },
          { id: 'gm_financial', label: 'GM Financial', value: 4.3, notes: ['+3% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 35.0 },
        operatingExpenses: {
          total: 5.7,
          items: [
            { id: 'other_expense', label: 'Other', value: 3.6 },
            { id: 'sga', label: 'SG&A', value: 2.1 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.6 },
      },
      otherIncome: {
        total: 0.4,
        items: [{ id: 'other_income', label: 'Other', value: 0.4 }],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 8.6, notes: ['20% margin', '(0pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 2.9, notes: ['7% margin', '(1pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.7, notes: ['6% margin', '(0pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月的季度',
          revenue: {
            notes: ['同比 (1%)'],
            items: [
              {
                id: 'auto',
                label: '汽车业务',
                notes: ['同比 (1%)'],
                children: [
                  { id: 'gm_north_america', label: '通用北美', notes: ['同比 (3%)'] },
                  { id: 'gm_international', label: '通用国际', notes: ['同比 +18%'] },
                  { id: 'corporate', label: '公司及其他', notes: ['同比 +96%'] },
                ],
              },
              { id: 'gm_financial', label: '通用金融', notes: ['同比 +3%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'other_expense', label: '其他' },
                { id: 'sga', label: '销售及管理' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他收入' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 20%', '同比 (0 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 7%', '同比 (1 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 6%', '同比 (0 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
