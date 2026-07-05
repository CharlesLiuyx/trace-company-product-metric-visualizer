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
      key: 'tesla-q1-fy26',
      company: 'Tesla',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/tesla-q1-fy26.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 22.4,
        notes: ['+16% Y/Y'],
        items: [
          {
            id: 'auto',
            label: 'Auto',
            value: 16.2,
            notes: ['+16% Y/Y'],
            children: [
              { id: 'auto_sales', label: 'Auto sales', value: 15.5, notes: ['+20% Y/Y'] },
              { id: 'regulatory_credits', label: 'Regulatory credits', value: 0.4, notes: ['(36%) Y/Y'] },
              { id: 'leasing', label: 'Leasing', value: 0.4, notes: ['(15%) Y/Y'] },
            ],
          },
          {
            id: 'energy_generation_storage',
            label: 'Energy generation & storage',
            value: 2.4,
            notes: ['(12%) Y/Y'],
          },
          { id: 'services', label: 'Services', value: 3.7, notes: ['+42% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 17.7 },
        operatingExpenses: {
          total: 3.8,
          notes: ['Source chart rounds R&D and SG&A to $3.8B total operating expenses.'],
          items: [
            { id: 'rnd', label: 'R&D', value: 1.9, notes: ['9% of revenue', '+1pp Y/Y'] },
            { id: 'sga', label: 'SG&A', value: 1.8, notes: ['8% of revenue', '+2pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.3 },
      },
      otherIncome: {
        total: 0.3,
        items: [{ id: 'interest', label: 'Interest', value: 0.3 }],
      },
      otherExpenses: {
        total: 0.5,
        items: [{ id: 'other', label: 'Other', value: 0.5 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 4.7, notes: ['21% margin', '+5pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.9, notes: ['4% margin', '+2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.5, notes: ['2% margin', '+0pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +16%'],
            items: [
              {
                id: 'auto',
                label: '汽车业务',
                notes: ['同比 +16%'],
                children: [
                  { id: 'auto_sales', label: '汽车销售', notes: ['同比 +20%'] },
                  { id: 'regulatory_credits', label: '监管积分', notes: ['同比 (36%)'] },
                  { id: 'leasing', label: '租赁', notes: ['同比 (15%)'] },
                ],
              },
              { id: 'energy_generation_storage', label: '能源发电与储能', notes: ['同比 (12%)'] },
              { id: 'services', label: '服务', notes: ['同比 +42%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              notes: ['来源图将研发与销售、一般及行政费用取整为 $3.8B 运营费用合计。'],
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 9%', '同比 +1 个百分点'] },
                { id: 'sga', label: '销售及管理', notes: ['占收入 8%', '同比 +2 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'interest', label: '利息' }],
          },
          otherExpenses: {
            items: [{ id: 'other', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 21%', '同比 +5 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 4%', '同比 +2 个百分点'] },
            net: { label: '净利润', notes: ['利润率 2%', '同比 +0 个百分点'] },
          },
        },
      },
    }
  );
})(window);
