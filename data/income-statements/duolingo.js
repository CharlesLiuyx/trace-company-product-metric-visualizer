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
      key: 'duolingo-q3-fy25',
      company: 'Duolingo',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/duolingo-q3-fy25.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 272,
        notes: ['+41% Y/Y'],
        items: [
          { id: 'subscription', label: 'Subscription', value: 230, notes: ['+46% Y/Y'] },
          {
            id: 'other_revenue',
            label: 'Other',
            value: 42,
            notes: [
              '+21% Y/Y',
              'Comprises advertising, Duolingo English Test, in-app purchases, and other revenue; the source infographic displays the combined amount as $42M.',
            ],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 75 },
        operatingExpenses: {
          total: 162,
          items: [
            { id: 'rnd', label: 'R&D', value: 83, notes: ['30% of revenue', '(2pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 44, notes: ['16% of revenue', '(4pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 35, notes: ['13% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: {
          label: 'Tax',
          value: 0,
          notes: ['The source infographic shows a tax benefit rather than a tax expense.'],
        },
      },
      otherIncome: {
        total: 257,
        items: [
          { id: 'tax_benefit', label: 'Tax benefit', value: 245 },
          { id: 'interest', label: 'Interest', value: 12 },
        ],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 197, notes: ['72% margin', '(0pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 35, notes: ['13% margin', '+6pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 292 },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          revenue: {
            notes: ['同比 +41%'],
            items: [
              { id: 'subscription', label: '订阅', notes: ['同比 +46%'] },
              { id: 'other_revenue', label: '其他', notes: ['同比 +21%', '包括广告、Duolingo English Test、应用内购买和其他收入；来源图将合计金额显示为 $42M。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 30%', '同比 (2 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 16%', '同比 (4 个百分点)'] },
                { id: 'sm', label: '销售与营销', notes: ['占收入 13%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费', notes: ['来源图展示税收收益，而非税费。'] },
          },
          otherIncome: {
            items: [
              { id: 'tax_benefit', label: '税收收益' },
              { id: 'interest', label: '利息' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 72%', '同比 (0 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 13%', '同比 +6 个百分点'] },
            net: { label: '净利润' },
          },
        },
      },
    },
    {
      key: 'duolingo-q1-fy26',
      company: 'Duolingo',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/duolingo-q1-fy26.png',
      roundingTolerance: 0.65,
      revenue: {
        total: 291.967,
        notes: ['+27% Y/Y'],
        items: [
          { id: 'subscription', label: 'Subscription', value: 250.908, notes: ['+31% Y/Y'] },
          {
            id: 'other_revenue',
            label: 'Other',
            value: 41.059,
            notes: [
              '+3% Y/Y',
              'Comprises advertising $20.614M, Duolingo English Test $11.317M, in-app purchases $8.446M, and other $0.682M.',
            ],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 78.871 },
        operatingExpenses: {
          total: 168.569,
          items: [
            { id: 'rnd', label: 'R&D', value: 82.974, notes: ['28% of revenue', '(2pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 39.249, notes: ['13% of revenue', '+2pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 46.346, notes: ['16% of revenue', '(3pp) Y/Y'] },
          ],
        },
        tax: {
          id: 'tax_other',
          label: 'Tax & Other',
          value: 12.878,
          notes: ['Combines provision for income taxes of $12.092M with other expense, net of $0.786M.'],
        },
      },
      otherIncome: {
        total: 11.811,
        items: [{ id: 'interest', label: 'Interest', value: 11.811 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 213.096, notes: ['73% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 44.527, notes: ['15% margin', '+5pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 43.46, notes: ['15% margin', '(0pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +27%'],
            items: [
              { id: 'subscription', label: '订阅', notes: ['同比 +31%'] },
              {
                id: 'other_revenue',
                label: '其他',
                notes: ['同比 +3%', '包括广告 $20.614M、Duolingo English Test $11.317M、应用内购买 $8.446M 和其他 $0.682M。'],
              },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 28%', '同比 (2 个百分点)'] },
                { id: 'sm', label: '销售与营销', notes: ['占收入 13%', '同比 +2 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 16%', '同比 (3 个百分点)'] },
              ],
            },
            tax: {
              label: '税费及其他',
              notes: ['合并 $12.092M 所得税费用与 $0.786M 其他费用净额。'],
            },
          },
          otherIncome: {
            items: [{ id: 'interest', label: '利息' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 73%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 15%', '同比 +5 个百分点'] },
            net: { label: '净利润', notes: ['利润率 15%', '同比 (0 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'duolingo-q4-fy25',
      company: 'Duolingo',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/duolingo-q4-fy25.png',
      roundingTolerance: 0.65,
      revenue: {
        total: 282.868,
        notes: ['+35% Y/Y'],
        items: [
          { id: 'subscription', label: 'Subscription', value: 242.286, notes: ['+39% Y/Y'] },
          {
            id: 'other_revenue',
            label: 'Other',
            value: 40.582,
            notes: [
              '+15% Y/Y',
              'Comprises advertising $20.221M, Duolingo English Test $10.283M, in-app purchases $9.551M, and other $0.527M.',
            ],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 76.999 },
        operatingExpenses: {
          total: 162.415,
          items: [
            { id: 'rnd', label: 'R&D', value: 79.556, notes: ['28% of revenue', '(4pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 34.371, notes: ['12% of revenue', '+0pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 48.488, notes: ['17% of revenue', '(5pp) Y/Y'] },
          ],
        },
        tax: {
          id: 'tax',
          label: 'Tax',
          value: 12.547,
          notes: ['Provision for income taxes; the source infographic displays this as ($12M).'],
        },
      },
      otherIncome: {
        total: 11.596,
        items: [{ id: 'interest', label: 'Interest', value: 11.596 }],
      },
      otherExpenses: {
        total: 0.549,
        items: [{ label: 'Other expense, net', value: 0.549, notes: ['Data-only reported line item not shown as a separate source-chart object.'] }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 205.869, notes: ['73% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 43.454, notes: ['15% margin', '+9pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 41.954 },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +35%'],
            items: [
              { id: 'subscription', label: '订阅', notes: ['同比 +39%'] },
              {
                id: 'other_revenue',
                label: '其他',
                notes: ['同比 +15%', '包括广告 $20.221M、Duolingo English Test $10.283M、应用内购买 $9.551M 和其他 $0.527M。'],
              },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 28%', '同比 (4 个百分点)'] },
                { id: 'sm', label: '销售与营销', notes: ['占收入 12%', '同比 +0 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 17%', '同比 (5 个百分点)'] },
              ],
            },
            tax: {
              label: '税费',
              notes: ['所得税费用；来源图将其显示为 ($12M)。'],
            },
          },
          otherIncome: {
            items: [{ id: 'interest', label: '利息' }],
          },
          otherExpenses: {
            items: [{ label: '其他费用净额', notes: ['仅数据项，来源图未将其单独画为图表对象。'] }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 73%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 15%', '同比 +9 个百分点'] },
            net: { label: '净利润' },
          },
        },
      },
    }
  );
})(window);
