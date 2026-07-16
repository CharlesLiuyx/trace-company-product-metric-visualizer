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
      key: 'dynatrace-q2-fy26',
      company: 'Dynatrace',
      period: 'Q2 FY26',
      periodNote: 'Ending Oct. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/dynatrace-q2-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 494,
        notes: ['+18% Y/Y'],
        items: [
          { id: 'subscription', label: 'Subscription', value: 473, notes: ['+18% Y/Y'] },
          { id: 'service', label: 'Service', value: 21, notes: ['+14% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 90 },
        operatingExpenses: {
          total: 331,
          items: [
            { id: 'sm', label: 'S&M', value: 168, notes: ['34% of revenue', '(1pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 115, notes: ['23% of revenue', '+0pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 48, notes: ['10% of revenue', '(2pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 30 },
      },
      otherIncome: {
        total: 14,
        items: [{ id: 'other_income', label: 'Other', value: 14 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 404, notes: ['82% margin', '+0pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 73, notes: ['15% margin', '+4pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 57, notes: ['12% margin', '+1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2025 年 10 月的季度',
          revenue: {
            notes: ['同比 +18%'],
            items: [
              { id: 'subscription', label: '订阅', notes: ['同比 +18%'] },
              { id: 'service', label: '服务', notes: ['同比 +14%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 34%', '同比 (1 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 23%', '同比 +0 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 10%', '同比 (2 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 82%', '同比 +0 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 15%', '同比 +4 个百分点'] },
            net: { label: '净利润', notes: ['利润率 12%', '同比 +1 个百分点'] },
          },
        },
      },
    },
    {
      key: 'dynatrace-q3-fy26',
      company: 'Dynatrace',
      period: 'Q3 FY26',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/dynatrace-q3-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 516,
        notes: ['+18% Y/Y'],
        items: [
          { id: 'subscription', label: 'Subscription', value: 493, notes: ['+18% Y/Y'] },
          { id: 'service', label: 'Service', value: 22, notes: ['+16% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 96 },
        operatingExpenses: {
          total: 347,
          items: [
            { id: 'sm', label: 'S&M', value: 174, notes: ['34% of revenue', '(2pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 121, notes: ['23% of revenue', '+1pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 52, notes: ['10% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 44 },
      },
      otherIncome: {
        total: 12,
        items: [{ id: 'other', label: 'Other', value: 12 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 420, notes: ['81% margin', '+0pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 73, notes: ['14% margin', '+3pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 40, notes: ['8% margin', '(75pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第三季度',
          periodNote: '截至 2026 年 1 月的季度',
          revenue: {
            notes: ['同比 +18%'],
            items: [
              { id: 'subscription', label: '订阅', notes: ['同比 +18%'] },
              { id: 'service', label: '服务', notes: ['同比 +16%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 34%', '同比 (2 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 23%', '同比 +1 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 10%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 81%', '同比 +0 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 14%', '同比 +3 个百分点'] },
            net: { label: '净利润', notes: ['利润率 8%', '同比 (75 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'dynatrace-q4-fy26',
      company: 'Dynatrace',
      period: 'Q4 FY26',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/dynatrace-q4-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 532,
        notes: ['+19% Y/Y'],
        items: [
          { id: 'subscription', label: 'Subscription', value: 506, notes: ['+19% Y/Y'] },
          { id: 'service', label: 'Service', value: 26, notes: ['+20% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 101 },
        operatingExpenses: {
          total: 393,
          items: [
            { id: 'sm', label: 'S&M', value: 183, notes: ['34% of revenue', '(2pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 131, notes: ['25% of revenue', '+1pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 60, notes: ['11% of revenue', '(0pp) Y/Y'] },
            { id: 'other_expense', label: 'Other', value: 19 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 29 },
      },
      otherIncome: {
        total: 10,
        items: [{ id: 'other_income', label: 'Other', value: 10 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 430, notes: ['81% margin', '+0pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 37, notes: ['7% margin', '(3pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 18, notes: ['3% margin', '(6pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第四季度',
          periodNote: '截至 2026 年 4 月的季度',
          revenue: {
            notes: ['同比 +19%'],
            items: [
              { id: 'subscription', label: '订阅', notes: ['同比 +19%'] },
              { id: 'service', label: '服务', notes: ['同比 +20%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 34%', '同比 (2 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 25%', '同比 +1 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 11%', '同比 (0 个百分点)'] },
                { id: 'other_expense', label: '其他' },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 81%', '同比 +0 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 7%', '同比 (3 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 3%', '同比 (6 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
