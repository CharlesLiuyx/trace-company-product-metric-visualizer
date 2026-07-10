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
      key: 'nintendo-fy26',
      company: 'Nintendo',
      period: 'FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '¥',
      unit: 'B',
      decimals: 0,
      sourceImage: 'input/processed/nintendo-fy26.png',
      roundingTolerance: 1.2,
      revenue: {
        total: 2313,
        notes: ['+99% Y/Y'],
        items: [
          {
            id: 'dedicated_video_game_platform',
            label: 'Dedicated video game platform',
            value: 2240,
            notes: ['+107% Y/Y'],
            children: [
              {
                id: 'hardware',
                label: 'Hardware',
                value: 1494,
                notes: ['+215% Y/Y', 'Switch 2: 19.9M units (New)', 'Switch 1: 3.8M units, (65%) Y/Y'],
              },
              {
                id: 'software',
                label: 'Software',
                value: 746,
                notes: ['+22% Y/Y', '186M units', '+19% Y/Y', '55% Digital'],
              },
            ],
          },
          {
            id: 'other_revenue',
            label: 'Other',
            value: 74,
            notes: ['(10%) Y/Y', 'Source chart shows this as Other; Nintendo reporting describes the comparable line as IP related income, etc.'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 1404 },
        operatingExpenses: {
          total: 549,
          items: [
            { id: 'other_sga', label: 'Other SG&A', value: 226, notes: ['10% of revenue', '(7pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 178, notes: ['8% of revenue', '(5pp) Y/Y'] },
            { id: 'advertising', label: 'Advertising', value: 145, notes: ['6% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: {
          id: 'tax',
          label: 'Tax',
          value: 232,
          notes: ['Modeled from the source chart to reconcile operating profit, other income, and displayed net profit.'],
        },
      },
      otherIncome: {
        total: 182,
        items: [{ id: 'other_income', label: 'Other', value: 182 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 909, notes: ['39% margin', '(22pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 360, notes: ['16% margin', '(9pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 310, notes: ['13% margin', '(11pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +99%'],
            items: [
              {
                label: '专用游戏平台',
                notes: ['同比 +107%'],
                children: [
                  {
                    label: '硬件',
                    notes: ['同比 +215%', 'Switch 2：1,990 万台（新机型）', 'Switch 1：380 万台，同比 (65%)'],
                  },
                  {
                    label: '软件',
                    notes: ['同比 +22%', '1.86 亿套', '同比 +19%', '数字版占 55%'],
                  },
                ],
              },
              {
                label: '其他',
                notes: ['同比 (10%)', '来源图表显示为其他；Nintendo 财报中相近项目为 IP 相关收入等。'],
              },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { label: '其他销售及管理费用', notes: ['占收入 10%', '同比 (7 个百分点)'] },
                { label: '研发', notes: ['占收入 8%', '同比 (5 个百分点)'] },
                { label: '广告', notes: ['占收入 6%', '同比 (1 个百分点)'] },
              ],
            },
            tax: {
              label: '税费',
              notes: ['按来源图表建模，用于调和营业利润、其他收入和图中显示的净利润。'],
            },
          },
          otherIncome: {
            items: [{ label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 39%', '同比 (22 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 16%', '同比 (9 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 13%', '同比 (11 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'nintendo-9m-fy26',
      company: 'Nintendo',
      period: '9M FY26',
      periodNote: 'Ending Dec. 2025',
      currency: '¥',
      unit: 'B',
      decimals: 0,
      sourceImage: 'input/processed/nintendo-9m-fy26.png',
      roundingTolerance: 1.2,
      revenue: {
        total: 1906,
        notes: ['+99% Y/Y'],
        items: [
          {
            id: 'dedicated_video_game_platform',
            label: 'Dedicated video game platform',
            value: 1851,
            notes: ['+107% Y/Y'],
            children: [
              {
                id: 'hardware',
                label: 'Hardware',
                value: 1292,
                notes: ['+213% Y/Y', 'Switch 2: 17.3M units', 'Switch 1: 3.2M units, (66%) Y/Y'],
              },
              {
                id: 'software',
                label: 'Software',
                value: 559,
                notes: ['+16% Y/Y', '147M units', '+18% Y/Y', '50% Digital'],
              },
            ],
          },
          {
            id: 'other_revenue',
            label: 'Other',
            value: 55,
            notes: ['(10%) Y/Y', 'Source chart shows this as Other; Nintendo reporting describes the comparable line as IP related income, etc.'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 1193 },
        operatingExpenses: {
          total: 412,
          items: [
            { id: 'other_sga', label: 'Other SG&A', value: 170, notes: ['9% of revenue', '(6pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 128, notes: ['7% of revenue', '(4pp) Y/Y'] },
            { id: 'advertising', label: 'Advertising', value: 114, notes: ['6% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 129 },
      },
      otherIncome: {
        total: 188,
        items: [{ id: 'other_income', label: 'Other', value: 188 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 712, notes: ['37% margin', '(22pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 300, notes: ['16% margin', '(10pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 359, notes: ['19% margin', '(6pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年前 9 个月',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +99%'],
            items: [
              {
                label: '专用游戏平台',
                notes: ['同比 +107%'],
                children: [
                  {
                    label: '硬件',
                    notes: ['同比 +213%', 'Switch 2：1,730 万台', 'Switch 1：320 万台，同比 (66%)'],
                  },
                  {
                    label: '软件',
                    notes: ['同比 +16%', '1.47 亿套', '同比 +18%', '数字版占 50%'],
                  },
                ],
              },
              {
                label: '其他',
                notes: ['同比 (10%)', '来源图表显示为其他；Nintendo 财报中相近项目为 IP 相关收入等。'],
              },
            ],
          },
          costs: {
            costOfRevenue: { label: '销售成本' },
            operatingExpenses: {
              items: [
                { label: '其他销售及管理费用', notes: ['占收入 9%', '同比 (6 个百分点)'] },
                { label: '研发', notes: ['占收入 7%', '同比 (4 个百分点)'] },
                { label: '广告', notes: ['占收入 6%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 37%', '同比 (22 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 16%', '同比 (10 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 19%', '同比 (6 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
