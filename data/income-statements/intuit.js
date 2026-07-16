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
      key: 'intuit-q1-fy26',
      company: 'Intuit',
      period: 'Q1 FY26',
      periodNote: 'Ending Oct. 2025',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/intuit-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 3.9,
        notes: ['+18% Y/Y'],
        items: [
          {
            id: 'gbs',
            label: 'Global Business Solutions',
            value: 3.0,
            notes: ['+18% Y/Y', '78% segment margin', '(1pp) Y/Y'],
          },
          {
            id: 'consumer',
            label: 'Consumer',
            value: 0.9,
            notes: ['+21% Y/Y', '65% segment margin', '+7pp Y/Y'],
            children: [
              { id: 'turbotax', label: 'TurboTax', value: 0.2, notes: ['+6% Y/Y'] },
              { id: 'credit_karma', label: 'Credit Karma', value: 0.7, notes: ['+27% Y/Y'] },
              { id: 'protax', label: 'ProTax', value: 0.045, notes: ['+15% Y/Y'] },
            ],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 0.9 },
        operatingExpenses: {
          total: 2.5,
          items: [
            { id: 'sm', label: 'S&M', value: 1.1, notes: ['28% of revenue', '(1pp) Y/Y'] },
            { id: 'rd', label: 'R&D', value: 0.8, notes: ['22% of revenue', '+0pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.4, notes: ['11% of revenue', '(1pp) Y/Y'] },
            {
              id: 'amortization',
              label: 'Amortization',
              value: 0.1,
              notes: ['3% of revenue', '(1pp) Y/Y'],
            },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.1 },
      },
      otherIncome: {
        total: 0.027,
        items: [{ id: 'other', label: 'Other', value: 0.027 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 3.0, notes: ['77% margin', '+1pp Y/Y'] },
        operating: {
          id: 'operating_profit',
          label: 'Operating profit',
          value: 0.5,
          notes: ['14% margin', '+5pp Y/Y'],
        },
        net: { id: 'net_profit', label: 'Net profit', value: 0.4, notes: ['11% margin', '+5pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2025 年 10 月',
          revenue: {
            notes: ['同比 +18%'],
            items: [
              {
                id: 'gbs',
                label: '全球商业解决方案',
                notes: ['同比 +18%', '分部利润率 78%', '同比 (1 个百分点)'],
              },
              {
                id: 'consumer',
                label: '消费者',
                notes: ['同比 +21%', '分部利润率 65%', '同比 +7 个百分点'],
                children: [
                  { id: 'turbotax', notes: ['同比 +6%'] },
                  { id: 'credit_karma', notes: ['同比 +27%'] },
                  { id: 'protax', notes: ['同比 +15%'] },
                ],
              },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 28%', '同比 (1 个百分点)'] },
                { id: 'rd', label: '研发', notes: ['占收入 22%', '同比 +0 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 11%', '同比 (1 个百分点)'] },
                { id: 'amortization', label: '摊销', notes: ['占收入 3%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 77%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 14%', '同比 +5 个百分点'] },
            net: { label: '净利润', notes: ['利润率 11%', '同比 +5 个百分点'] },
          },
        },
      },
    },
    {
      key: 'intuit-q2-fy26',
      company: 'Intuit',
      period: 'Q2 FY26',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/intuit-q2-fy26.png',
      roundingTolerance: 0.2,
      revenue: {
        total: 4.7,
        notes: ['+17% Y/Y'],
        items: [
          {
            id: 'gbs',
            label: 'Global Business Solutions',
            value: 3.2,
            notes: ['+18% Y/Y', '76% segment margin', '(1pp) Y/Y'],
          },
          {
            id: 'consumer',
            label: 'Consumer',
            value: 1.5,
            notes: ['+15% Y/Y', '60% segment margin', '(1pp) Y/Y'],
            children: [
              { id: 'turbotax', label: 'TurboTax', value: 0.6, notes: ['+12% Y/Y'] },
              { id: 'credit_karma', label: 'Credit Karma', value: 0.6, notes: ['+23% Y/Y'] },
              { id: 'protax', label: 'ProTax', value: 0.3, notes: ['+7% Y/Y'] },
            ],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 1.0 },
        operatingExpenses: {
          total: 2.8,
          items: [
            { id: 'sm', label: 'S&M', value: 1.4, notes: ['30% of revenue', '(0pp) Y/Y'] },
            { id: 'rd', label: 'R&D', value: 0.8, notes: ['18% of revenue', '(0pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.4, notes: ['9% of revenue', '(1pp) Y/Y'] },
            {
              id: 'amortization',
              label: 'Amortization',
              value: 0.1,
              notes: ['3% of revenue', '(1pp) Y/Y'],
            },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0.2 },
      },
      otherIncome: {
        total: 0.014,
        items: [{ id: 'other', label: 'Other', value: 0.014 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 3.6, notes: ['78% margin', '+1pp Y/Y'] },
        operating: {
          id: 'operating_profit',
          label: 'Operating profit',
          value: 0.9,
          notes: ['18% margin', '+3pp Y/Y'],
        },
        net: { id: 'net_profit', label: 'Net profit', value: 0.7, notes: ['15% margin', '+3pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 1 月',
          revenue: {
            notes: ['同比 +17%'],
            items: [
              {
                id: 'gbs',
                label: '全球商业解决方案',
                notes: ['同比 +18%', '分部利润率 76%', '同比 (1 个百分点)'],
              },
              {
                id: 'consumer',
                label: '消费者',
                notes: ['同比 +15%', '分部利润率 60%', '同比 (1 个百分点)'],
                children: [
                  { id: 'turbotax', notes: ['同比 +12%'] },
                  { id: 'credit_karma', notes: ['同比 +23%'] },
                  { id: 'protax', notes: ['同比 +7%'] },
                ],
              },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 30%', '同比 (0 个百分点)'] },
                { id: 'rd', label: '研发', notes: ['占收入 18%', '同比 (0 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 9%', '同比 (1 个百分点)'] },
                { id: 'amortization', label: '摊销', notes: ['占收入 3%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 78%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 18%', '同比 +3 个百分点'] },
            net: { label: '净利润', notes: ['利润率 15%', '同比 +3 个百分点'] },
          },
        },
      },
    },
    {
      key: 'intuit-q3-fy26',
      company: 'Intuit',
      period: 'Q3 FY26',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/intuit-q3-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 8.6,
        notes: ['+10% Y/Y'],
        items: [
          {
            id: 'gbs',
            label: 'Global Business Solutions',
            value: 3.3,
            notes: ['+15% Y/Y', '77% segment margin', '(0pp) Y/Y'],
          },
          {
            id: 'consumer',
            label: 'Consumer',
            value: 5.3,
            notes: ['+8% Y/Y', '81% segment margin', '(2pp) Y/Y'],
            children: [
              { id: 'turbotax', label: 'TurboTax', value: 4.4, notes: ['+7% Y/Y'] },
              { id: 'credit_karma', label: 'Credit Karma', value: 0.6, notes: ['+15% Y/Y'] },
              { id: 'protax', label: 'ProTax', value: 0.3, notes: ['Flat Y/Y'] },
            ],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 1.4 },
        operatingExpenses: {
          total: 3.2,
          items: [
            { id: 'sm', label: 'S&M', value: 1.8, notes: ['21% of revenue', '+0pp Y/Y'] },
            { id: 'rd', label: 'R&D', value: 0.8, notes: ['10% of revenue', '+1pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.4, notes: ['5% of revenue', '(0pp) Y/Y'] },
            {
              id: 'amortization',
              label: 'Amortization',
              value: 0.1,
              notes: ['1% of revenue', '(0pp) Y/Y'],
            },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 1.0 },
      },
      otherIncome: {
        total: 0.027,
        items: [{ id: 'other', label: 'Other', value: 0.027 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 7.2, notes: ['84% margin', '(1pp) Y/Y'] },
        operating: {
          id: 'operating_profit',
          label: 'Operating profit',
          value: 4.0,
          notes: ['47% margin', '(1pp) Y/Y'],
        },
        net: { id: 'net_profit', label: 'Net profit', value: 3.1, notes: ['36% margin', '(1pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第三季度',
          periodNote: '截至 2026 年 4 月',
          revenue: {
            notes: ['同比 +10%'],
            items: [
              {
                id: 'gbs',
                label: '全球商业解决方案',
                notes: ['同比 +15%', '分部利润率 77%', '同比 (0 个百分点)'],
              },
              {
                id: 'consumer',
                label: '消费者',
                notes: ['同比 +8%', '分部利润率 81%', '同比 (2 个百分点)'],
                children: [
                  { id: 'turbotax', notes: ['同比 +7%'] },
                  { id: 'credit_karma', notes: ['同比 +15%'] },
                  { id: 'protax', notes: ['同比持平'] },
                ],
              },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 21%', '同比 +0 个百分点'] },
                { id: 'rd', label: '研发', notes: ['占收入 10%', '同比 +1 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 5%', '同比 (0 个百分点)'] },
                { id: 'amortization', label: '摊销', notes: ['占收入 1%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 84%', '同比 (1 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 47%', '同比 (1 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 36%', '同比 (1 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
