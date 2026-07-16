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
      key: 'snap-q3-fy25',
      company: 'Snap',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/snap-q3-fy25.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 1507,
        notes: ['+10% Y/Y'],
        items: [
          { id: 'north_america', label: 'North America', value: 898, notes: ['+5% Y/Y'] },
          { id: 'europe', label: 'Europe', value: 298, notes: ['+20% Y/Y'] },
          { id: 'rest_of_world', label: 'Rest of world', value: 311, notes: ['+17% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 674 },
        operatingExpenses: {
          total: 961,
          items: [
            { id: 'rnd', label: 'R&D', value: 453, notes: ['30% of revenue', '+0pp Y/Y'] },
            { id: 'sm', label: 'S&M', value: 256, notes: ['17% of revenue', '(3pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 251, notes: ['16% of revenue', '+1pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 833, notes: ['55% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -128, notes: ['(9%) margin', '+4pp Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -128,
          notes: ['No separate net income line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          revenue: {
            notes: ['同比 +10%'],
            items: [
              { label: '北美', notes: ['同比 +5%'] },
              { label: '欧洲', notes: ['同比 +20%'] },
              { label: '世界其他地区', notes: ['同比 +17%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { label: '研发', notes: ['占收入 30%', '同比 +0 个百分点'] },
                { label: '销售与营销', notes: ['占收入 17%', '同比 (3 个百分点)'] },
                { label: '管理费用', notes: ['占收入 16%', '同比 +1 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 55%', '同比 +2 个百分点'] },
            operating: { label: '营业亏损', notes: ['利润率 (9%)', '同比 +4 个百分点'] },
            net: {
              label: '营业亏损',
              notes: ['源图未显示单独的净利润/净亏损项目。'],
            },
          },
        },
      },
    },
    {
      key: 'snap-q4-fy25',
      company: 'Snap',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/snap-q4-fy25.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 1717,
        notes: ['+10% Y/Y'],
        items: [
          { id: 'north_america', label: 'North America', value: 1026, notes: ['+6% Y/Y'] },
          { id: 'europe', label: 'Europe', value: 341, notes: ['+19% Y/Y'] },
          { id: 'rest_of_world', label: 'Rest of world', value: 350, notes: ['+16% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 702 },
        operatingExpenses: {
          total: 964,
          items: [
            { id: 'rnd', label: 'R&D', value: 473, notes: ['28% of revenue', '+0pp Y/Y'] },
            { id: 'sm', label: 'S&M', value: 249, notes: ['15% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 242, notes: ['14% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 7 },
      },
      otherIncome: {
        total: 14,
        items: [{
          label: 'Unshown net other adjustments',
          value: 14,
          notes: ['Data-only residual required to reconcile the reported net profit after the displayed tax and Other expense.'],
        }],
      },
      otherExpenses: {
        total: 12,
        items: [{ id: 'other', label: 'Other', value: 12 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1014, notes: ['59% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 50, notes: ['3% margin', '(1pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 45, notes: ['3% margin', '+0pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +10%'],
            items: [
              { label: '北美', notes: ['同比 +6%'] },
              { label: '欧洲', notes: ['同比 +19%'] },
              { label: '世界其他地区', notes: ['同比 +16%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { label: '研发', notes: ['占收入 28%', '同比 +0 个百分点'] },
                { label: '销售与营销', notes: ['占收入 15%', '同比 (1 个百分点)'] },
                { label: '管理费用', notes: ['占收入 14%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ label: '未展开的其他净调整', notes: ['用于在数据层对齐图中显示的税费、Other 费用与净利润。'] }],
          },
          otherExpenses: { items: [{ label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 59%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 3%', '同比 (1 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 3%', '同比 +0 个百分点'] },
          },
        },
      },
    },
    {
      key: 'snap-q1-fy26',
      company: 'Snap',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/snap-q1-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 1529,
        notes: ['+12% Y/Y'],
        items: [
          { id: 'north_america', label: 'North America', value: 851, notes: ['+2% Y/Y'] },
          { id: 'europe', label: 'Europe', value: 324, notes: ['+45% Y/Y'] },
          { id: 'rest_of_world', label: 'Rest of world', value: 354, notes: ['+15% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 665 },
        operatingExpenses: {
          total: 938,
          items: [
            { id: 'rnd', label: 'R&D', value: 478, notes: ['31% of revenue', '+0pp Y/Y'] },
            { id: 'sm', label: 'S&M', value: 239, notes: ['16% of revenue', '(3pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 221, notes: ['14% of revenue', '(3pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 864, notes: ['57% margin', '+3pp Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -74, notes: ['(5%) margin', '+9pp Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -74,
          notes: ['No separate net income line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +12%'],
            items: [
              { label: '北美', notes: ['同比 +2%'] },
              { label: '欧洲', notes: ['同比 +45%'] },
              { label: '世界其他地区', notes: ['同比 +15%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { label: '研发', notes: ['占收入 31%', '同比 +0 个百分点'] },
                { label: '销售与营销', notes: ['占收入 16%', '同比 (3 个百分点)'] },
                { label: '管理费用', notes: ['占收入 14%', '同比 (3 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 57%', '同比 +3 个百分点'] },
            operating: { label: '营业亏损', notes: ['利润率 (5%)', '同比 +9 个百分点'] },
            net: {
              label: '营业亏损',
              notes: ['源图未显示单独的净利润/净亏损项目。'],
            },
          },
        },
      },
    }
  );
})(window);
