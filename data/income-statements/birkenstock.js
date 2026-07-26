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
      key: 'birkenstock-q4-fy25',
      company: 'Birkenstock',
      period: 'Q4 FY25',
      periodNote: 'Ending Sept. 2025',
      currency: '€',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/birkenstock-q4-fy25.png',
      roundingTolerance: 1.0,
      revenue: {
        total: 526,
        notes: ['+15% Y/Y'],
        items: [
          {
            id: 'business_to_business',
            label: ['Business', 'to Business'],
            value: 293,
            notes: ['+22% Y/Y', 'Third-party store networks'],
          },
          {
            id: 'direct_to_consumer',
            label: ['Direct to', 'Consumer'],
            value: 232,
            notes: ['+8% Y/Y', 'Owned retail stores and Birkenstock.com'],
          },
          { id: 'other_revenue', label: 'Other revenue', value: 1, notes: ['+108% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 220 },
        operatingExpenses: {
          total: 194,
          items: [
            { id: 'selling_distribution', label: ['Selling &', 'distribution'], value: 156, notes: ['30% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 36, notes: ['7% of revenue', '(0pp) Y/Y'] },
            { id: 'other_expenses', label: 'Other', value: 2 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 7 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: {
        total: 11,
        items: [{ id: 'finance', label: 'Finance', value: 11 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 306, notes: ['58% margin', '(1pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 112, notes: ['21% margin', '(0pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 94, notes: ['18% margin', '+6pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 9 月',
          revenue: {
            notes: ['同比 +15%'],
            items: [
              { id: 'business_to_business', label: ['企业', '业务'], notes: ['同比 +22%', '第三方门店网络'] },
              { id: 'direct_to_consumer', label: ['直营', '消费者'], notes: ['同比 +8%', '自营零售门店及勃肯官网'] },
              { id: 'other_revenue', label: '其他收入', notes: ['同比 +108%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'selling_distribution', label: ['销售与', '分销'], notes: ['占收入 30%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 7%', '同比持平'] },
                { id: 'other_expenses', label: '其他' },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'finance', label: '财务费用' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 58%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 21%', '同比持平'] },
            net: { label: '净利润', notes: ['利润率 18%', '同比 +6 个百分点'] },
          },
        },
      },
    },
    {
      key: 'birkenstock-q1-fy26',
      company: 'Birkenstock',
      period: 'Q1 FY26',
      periodNote: 'Ending Dec. 2025',
      currency: '€',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/birkenstock-q1-fy26.png',
      roundingTolerance: 1.0,
      revenue: {
        total: 402,
        notes: ['+11% Y/Y'],
        items: [
          {
            id: 'business_to_business',
            label: ['Business', 'to Business'],
            value: 215,
            notes: ['+18% Y/Y', 'Third-party store networks'],
          },
          {
            id: 'direct_to_consumer',
            label: ['Direct to', 'Consumer'],
            value: 186,
            notes: ['+4% Y/Y', 'Owned retail stores and Birkenstock.com'],
          },
          { id: 'other_revenue', label: 'Other revenue', value: 1, notes: ['(49%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 178 },
        operatingExpenses: {
          total: 158,
          items: [
            { id: 'selling_distribution', label: ['Selling &', 'distribution'], value: 126, notes: ['31% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 29, notes: ['7% of revenue', '+1pp Y/Y'] },
            { id: 'other_expenses', label: 'Other', value: 3 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 19 },
      },
      operatingOtherIncome: {
        total: 12,
        items: [{ id: 'other_income', label: 'Other', value: 12 }],
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 9,
        items: [{ id: 'finance', label: 'Finance', value: 9 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 224, notes: ['56% margin', '(5pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 78, notes: ['19% margin', '+2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 51, notes: ['13% margin', '+7pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +11%'],
            items: [
              { id: 'business_to_business', label: ['企业', '业务'], notes: ['同比 +18%', '第三方门店网络'] },
              { id: 'direct_to_consumer', label: ['直营', '消费者'], notes: ['同比 +4%', '自营零售门店及勃肯官网'] },
              { id: 'other_revenue', label: '其他收入', notes: ['同比 (49%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'selling_distribution', label: ['销售与', '分销'], notes: ['占收入 31%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '一般及行政', notes: ['占收入 7%', '同比 +1 个百分点'] },
                { id: 'other_expenses', label: '其他' },
              ],
            },
            tax: { label: '税费' },
          },
          operatingOtherIncome: { items: [{ id: 'other_income', label: '其他' }] },
          otherExpenses: { items: [{ id: 'finance', label: '财务费用' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 56%', '同比 (5 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 19%', '同比 +2 个百分点'] },
            net: { label: '净利润', notes: ['利润率 13%', '同比 +7 个百分点'] },
          },
        },
      },
    }
  );
})(window);
