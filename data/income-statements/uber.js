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
      key: 'uber-q1-fy26',
      company: 'Uber',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/uber-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 13.2,
        notes: ['+14% Y/Y'],
        items: [
          { id: 'mobility', label: 'Mobility', value: 6.8, notes: ['+5% Y/Y', '30% adjusted margin', '+3pp Y/Y'] },
          { id: 'delivery', label: 'Delivery', value: 5.1, notes: ['+34% Y/Y', '19% adjusted margin', '(0pp) Y/Y'] },
          { id: 'freight', label: 'Uber Freight', value: 1.3, notes: ['+6% Y/Y', '0% adjusted margin', '(0pp) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 7.3 },
        operatingExpenses: {
          total: 4.0,
          items: [
            { id: 'sm', label: 'S&M', value: 1.3, notes: ['10% of revenue', '+1pp Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 1.0, notes: ['7% of revenue', '+0pp Y/Y'] },
            { id: 'operations', label: 'Operations', value: 0.8, notes: ['6% of revenue', '(0pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.8, notes: ['6% of revenue', '+0pp Y/Y'] },
            { id: 'da', label: 'D&A', value: 0.2, notes: ['1% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.2, notes: ['source label reads ($1.2B)'] },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 1.4,
        items: [{ id: 'other', label: 'Other', value: 1.4 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 5.9, notes: ['45% margin', '+5pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.9, notes: ['15% margin', '+4pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.3 },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +14%'],
            items: [
              { id: 'mobility', label: '出行', notes: ['同比 +5%', '调整后利润率 30%', '同比 +3 个百分点'] },
              { id: 'delivery', label: '配送', notes: ['同比 +34%', '调整后利润率 19%', '同比 (0 个百分点)'] },
              { id: 'freight', label: 'Uber Freight 货运', notes: ['同比 +6%', '调整后利润率 0%', '同比 (0 个百分点)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 10%', '同比 +1 个百分点'] },
                { id: 'rnd', label: '研发', notes: ['占收入 7%', '同比 +0 个百分点'] },
                { id: 'operations', label: '运营', notes: ['占收入 6%', '同比 (0 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 6%', '同比 +0 个百分点'] },
                { id: 'da', label: '折旧与摊销', notes: ['占收入 1%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费', notes: ['来源图表标注为 ($1.2B)'] },
          },
          otherExpenses: {
            items: [{ id: 'other', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 45%', '同比 +5 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 15%', '同比 +4 个百分点'] },
            net: { label: '净利润' },
          },
        },
      },
    },
    {
      key: 'uber-q3-fy25',
      company: 'Uber',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/uber-q3-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 13.5,
        notes: ['+20% Y/Y'],
        items: [
          { id: 'mobility', label: 'Mobility', value: 7.7, notes: ['+20% Y/Y', '27% adjusted margin', '+0pp Y/Y'] },
          { id: 'delivery', label: 'Delivery', value: 4.5, notes: ['+29% Y/Y', '21% adjusted margin', '+2pp Y/Y'] },
          { id: 'freight', label: 'Uber Freight', value: 1.3, notes: ['(0%) Y/Y', '(2%) adjusted margin', '(0pp) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 8.1 },
        operatingExpenses: {
          total: 4.2,
          items: [
            { id: 'sm', label: 'S&M', value: 1.3, notes: ['10% of revenue', '(0pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 1.2, notes: ['9% of revenue', '+3pp Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 0.9, notes: ['7% of revenue', '(1pp) Y/Y'] },
            { id: 'operations', label: 'Operations', value: 0.7, notes: ['5% of revenue', '(1pp) Y/Y'] },
            { id: 'da', label: 'D&A', value: 0.2, notes: ['1% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { label: 'Tax', value: 0 },
      },
      otherIncome: {
        total: 5.7,
        items: [{ id: 'tax_benefit_and_other', label: 'Tax benefit & Other', value: 5.7 }],
      },
      otherExpenses: {
        total: 0.1,
        items: [{ id: 'interest', label: 'Interest', value: 0.1 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 5.4, notes: ['40% margin', '+0pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.1, notes: ['8% margin', '(1pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 6.7 },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          revenue: {
            notes: ['同比 +20%'],
            items: [
              { id: 'mobility', label: '出行', notes: ['同比 +20%', '调整后利润率 27%', '同比 +0 个百分点'] },
              { id: 'delivery', label: '配送', notes: ['同比 +29%', '调整后利润率 21%', '同比 +2 个百分点'] },
              { id: 'freight', label: 'Uber Freight 货运', notes: ['同比 (0%)', '调整后利润率 (2%)', '同比 (0 个百分点)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 10%', '同比 (0 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 9%', '同比 +3 个百分点'] },
                { id: 'rnd', label: '研发', notes: ['占收入 7%', '同比 (1 个百分点)'] },
                { id: 'operations', label: '运营', notes: ['占收入 5%', '同比 (1 个百分点)'] },
                { id: 'da', label: '折旧与摊销', notes: ['占收入 1%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'tax_benefit_and_other', label: '税收收益及其他' }],
          },
          otherExpenses: {
            items: [{ id: 'interest', label: '利息' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 40%', '同比 +0 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 8%', '同比 (1 个百分点)'] },
            net: { label: '净利润' },
          },
        },
      },
    },
    {
      key: 'uber-q4-fy25',
      company: 'Uber',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/uber-q4-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 14.4,
        notes: ['+20% Y/Y'],
        items: [
          { id: 'mobility', label: 'Mobility', value: 8.2, notes: ['+19% Y/Y', '27% adjusted margin', '+1pp Y/Y'] },
          { id: 'delivery', label: 'Delivery', value: 4.9, notes: ['+30% Y/Y', '21% adjusted margin', '+1pp Y/Y'] },
          { id: 'freight', label: 'Uber Freight', value: 1.3, notes: ['(0%) Y/Y', '0% adjusted margin', '+2pp Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 8.7 },
        operatingExpenses: {
          total: 3.9,
          items: [
            { id: 'sm', label: 'S&M', value: 1.4, notes: ['9% of revenue', '(1pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 0.9, notes: ['6% of revenue', '(0pp) Y/Y'] },
            { id: 'operations', label: 'Operations', value: 0.8, notes: ['5% of revenue', '(0pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.7, notes: ['5% of revenue', '(4pp) Y/Y'] },
            { id: 'da', label: 'D&A', value: 0.2, notes: ['1% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { label: 'Tax', value: 0 },
      },
      otherIncome: {
        total: 0.04,
        items: [{ id: 'tax_benefit', label: 'Tax benefit', value: 0.04, notes: ['$40M; rounded to $0.0B in the source graphic'] }],
      },
      otherExpenses: {
        total: 1.5,
        items: [{ id: 'other', label: 'Other', value: 1.5 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 5.7, notes: ['40% margin', '+0pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1.8, notes: ['12% margin', '+6pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.3 },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +20%'],
            items: [
              { id: 'mobility', label: '出行', notes: ['同比 +19%', '调整后利润率 27%', '同比 +1 个百分点'] },
              { id: 'delivery', label: '配送', notes: ['同比 +30%', '调整后利润率 21%', '同比 +1 个百分点'] },
              { id: 'freight', label: 'Uber Freight 货运', notes: ['同比 (0%)', '调整后利润率 0%', '同比 +2 个百分点'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 9%', '同比 (1 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 6%', '同比 (0 个百分点)'] },
                { id: 'operations', label: '运营', notes: ['占收入 5%', '同比 (0 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 5%', '同比 (4 个百分点)'] },
                { id: 'da', label: '折旧与摊销', notes: ['占收入 1%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税项' },
          },
          otherIncome: {
            items: [{ id: 'tax_benefit', label: '税收收益', notes: ['$40M；来源图四舍五入显示为 $0.0B'] }],
          },
          otherExpenses: {
            items: [{ id: 'other', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 40%', '同比 +0 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 12%', '同比 +6 个百分点'] },
            net: { label: '净利润' },
          },
        },
      },
    }
  );
})(window);
