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
      key: 'ferrari-q1-fy26',
      company: 'Ferrari',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '€',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/ferrari-q1-fy26.png',
      roundingTolerance: 0.16,
      revenue: {
        total: 1.8,
        notes: ['+3% Y/Y'],
        items: [
          { id: 'cars_and_spare_parts', label: 'Cars and spare parts', value: 1.6, notes: ['+1% Y/Y'] },
          { id: 'sponsorships_commercial_brands', label: 'Sponsorships, commercial & brands', value: 0.2, notes: ['+14% Y/Y'] },
          { id: 'other', label: 'Other', value: 0.1, notes: ['+16% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 0.9 },
        operatingExpenses: {
          total: 0.4,
          items: [
            { id: 'rnd', label: 'R&D', value: 0.2, notes: ['13% of revenue', '+0pp Y/Y'] },
            { id: 'sga', label: 'SG&A', value: 0.2, notes: ['9% of revenue', '+0pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.1 },
      },
      operatingOtherIncome: {
        total: 0.003,
        items: [{ id: 'investments', label: 'Investments', value: 0.003, notes: ['€3M'] }],
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.011,
        items: [{ id: 'finance', label: 'Finance', value: 0.011, notes: ['€11M'] }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1.0, notes: ['52% margin', '(0pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.5, notes: ['30% margin', '(1pp) Y/Y'] },
        net: {
          id: 'net_profit',
          label: 'Net profit',
          value: 0.4,
          notes: [
            '22% margin',
            '(1pp) Y/Y',
            'Operating profit plus €3M investments less tax and finance expense sums to €0.392B; the source chart reports €0.4B net profit after rounding.',
          ],
        },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +3%'],
            items: [
              { id: 'cars_and_spare_parts', label: '汽车及零部件', notes: ['同比 +1%'] },
              { id: 'sponsorships_commercial_brands', label: '赞助、商业与品牌', notes: ['同比 +14%'] },
              { id: 'other', label: '其他', notes: ['同比 +16%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 13%', '同比 +0 个百分点'] },
                { id: 'sga', label: '销售、一般及管理费用', notes: ['占收入 9%', '同比 +0 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          operatingOtherIncome: {
            items: [{ id: 'investments', label: '投资收益', notes: ['€3M'] }],
          },
          otherExpenses: {
            items: [{ id: 'finance', label: '财务费用', notes: ['€11M'] }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 52%', '同比（0 个百分点）'] },
            operating: { label: '营业利润', notes: ['利润率 30%', '同比（1 个百分点）'] },
            net: { label: '净利润', notes: ['利润率 22%', '同比（1 个百分点）'] },
          },
        },
      },
    },
    {
      key: 'ferrari-q4-fy25',
      company: 'Ferrari',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '€',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/ferrari-q4-fy25.png',
      roundingTolerance: 0.16,
      revenue: {
        total: 1.8,
        notes: ['+4% Y/Y'],
        items: [
          { id: 'cars_and_spare_parts', label: 'Cars and spare parts', value: 1.5, notes: ['+1% Y/Y'] },
          { id: 'sponsorships_commercial_brands', label: 'Sponsorships, commercial & brands', value: 0.2, notes: ['+16% Y/Y'] },
          { id: 'other', label: 'Other', value: 0.1, notes: ['+31% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 0.9 },
        operatingExpenses: {
          total: 0.4,
          items: [
            { id: 'rnd', label: 'R&D', value: 0.2, notes: ['13% of revenue', '(1pp) Y/Y'] },
            { id: 'sga', label: 'SG&A', value: 0.2, notes: ['10% of revenue', '+0pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.1 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.012,
        items: [{ id: 'finance', label: 'Finance', value: 0.012, notes: ['€12M'] }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 0.9, notes: ['52% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.5, notes: ['28% margin', '+2pp Y/Y'] },
        net: {
          id: 'net_profit',
          label: 'Net profit',
          value: 0.4,
          notes: [
            '21% margin',
            '(1pp) Y/Y',
            'Operating profit less tax and finance expense sums to €0.388B; the source chart reports €0.4B net profit after rounding.',
          ],
        },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +4%'],
            items: [
              { id: 'cars_and_spare_parts', label: '汽车及零部件', notes: ['同比 +1%'] },
              { id: 'sponsorships_commercial_brands', label: '赞助、商业与品牌', notes: ['同比 +16%'] },
              { id: 'other', label: '其他', notes: ['同比 +31%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 13%', '同比 (1 个百分点)'] },
                { id: 'sga', label: '销售、一般及管理费用', notes: ['占收入 10%', '同比 +0 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [{ id: 'finance', label: '财务费用', notes: ['€12M'] }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 52%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 28%', '同比 +2 个百分点'] },
            net: { label: '净利润', notes: ['利润率 21%', '同比 (1 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
