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
      key: 'elastic-q4-fy26',
      company: 'Elastic',
      period: 'Q4 FY26',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/elastic-q4-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 451,
        notes: ['+16% Y/Y', 'Elastic reported total revenue of $450.681M; source chart rounds to $451M.'],
        items: [
          {
            id: 'subscription',
            label: 'Subscription',
            value: 423,
            notes: [
              '+17% Y/Y',
              'Elastic reported subscription revenue of $422.446M; source chart displays $423M while visible components sum to $422M.',
            ],
            children: [
              { id: 'cloud', label: 'Cloud', value: 217, notes: ['+20% Y/Y', '48% of revenue', '+2pp Y/Y'] },
              { id: 'other_subscription', label: 'Other subscription', value: 205, notes: ['+14% Y/Y'] },
            ],
          },
          { id: 'service', label: 'Service', value: 28, notes: ['+6% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 111 },
        operatingExpenses: {
          total: 356,
          items: [
            { id: 'sm', label: 'S&M', value: 186, notes: ['41% of revenue', '(0pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 120, notes: ['27% of revenue', '+2pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 50, notes: ['11% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: {
          label: 'Tax',
          value: 0,
          notes: ['No separate tax line is shown in the source chart.'],
        },
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 340, notes: ['75% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -16, notes: ['(4%) margin', '(0pp) Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -16,
          notes: ['No separate net income line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2026 财年第四季度',
          periodNote: '截至 2026 年 4 月',
          revenue: {
            notes: ['同比 +16%', 'Elastic 披露总收入为 $450.681M；来源图四舍五入为 $451M。'],
            items: [
              {
                id: 'subscription',
                label: '订阅',
                notes: [
                  '同比 +17%',
                  'Elastic 披露订阅收入为 $422.446M；来源图显示 $423M，而可见组成项合计为 $422M。',
                ],
                children: [
                  { id: 'cloud', label: '云', notes: ['同比 +20%', '占收入 48%', '同比 +2 个百分点'] },
                  { id: 'other_subscription', label: '其他订阅', notes: ['同比 +14%'] },
                ],
              },
              { id: 'service', label: '服务', notes: ['同比 +6%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 41%', '同比 (0 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 27%', '同比 +2 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 11%', '同比 (1 个百分点)'] },
              ],
            },
            tax: {
              label: '税费',
              notes: ['来源图未显示单独的税费项目。'],
            },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 75%', '同比 +1 个百分点'] },
            operating: { label: '营业亏损', notes: ['利润率 (4%)', '同比 (0 个百分点)'] },
            net: {
              label: '营业亏损',
              notes: ['来源图未单独显示净利润项目。'],
            },
          },
        },
      },
    },
    {
      key: 'elastic-q3-fy26',
      company: 'Elastic',
      period: 'Q3 FY26',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/elastic-q3-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 450,
        notes: ['+18% Y/Y'],
        items: [
          {
            id: 'subscription',
            label: 'Subscription',
            value: 426,
            notes: ['+19% Y/Y'],
            children: [
              { id: 'cloud', label: 'Cloud', value: 219, notes: ['+21% Y/Y', '49% of revenue', '+1pp Y/Y'] },
              { id: 'other_subscription', label: 'Other subscription', value: 207, notes: ['+16% Y/Y'] },
            ],
          },
          { id: 'service', label: 'Service', value: 24, notes: ['+1% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 106 },
        operatingExpenses: {
          total: 343,
          items: [
            { id: 'sm', label: 'S&M', value: 177, notes: ['39% of revenue', '(1pp) Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 114, notes: ['25% of revenue', '+1pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 52, notes: ['11% of revenue', '+0pp Y/Y'] },
          ],
        },
        tax: {
          label: 'Tax',
          value: 0,
          notes: ['No separate tax expense line is shown; the chart instead shows a $2M tax benefit.'],
        },
      },
      otherIncome: {
        total: 8,
        items: [
          { id: 'tax_benefit', label: 'Tax benefit', value: 2 },
          { id: 'other', label: 'Other', value: 6 },
        ],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 344, notes: ['76% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 1, notes: ['0% margin', '+1pp Y/Y'] },
        net: {
          id: 'net_profit',
          label: 'Net profit',
          value: 8,
          notes: ['The displayed gross-to-net bridge rounds to $9M (Operating profit $1M + Tax benefit $2M + Other $6M).'],
        },
      },
      i18n: {
        zh: {
          period: '2026 财年第三季度',
          periodNote: '截至 2026 年 1 月',
          revenue: {
            notes: ['同比 +18%'],
            items: [
              {
                id: 'subscription',
                label: '订阅',
                notes: ['同比 +19%'],
                children: [
                  { id: 'cloud', label: '云', notes: ['同比 +21%', '占收入 49%', '同比 +1 个百分点'] },
                  { id: 'other_subscription', label: '其他订阅', notes: ['同比 +16%'] },
                ],
              },
              { id: 'service', label: '服务', notes: ['同比 +1%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 39%', '同比 (1 个百分点)'] },
                { id: 'rnd', label: '研发', notes: ['占收入 25%', '同比 +1 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 11%', '同比 +0 个百分点'] },
              ],
            },
            tax: {
              label: '税费',
              notes: ['来源图未显示单独的税费项目，而是显示 $2M 的税收收益。'],
            },
          },
          otherIncome: {
            items: [
              { id: 'tax_benefit', label: '税收收益' },
              { id: 'other', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 76%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 0%', '同比 +1 个百分点'] },
            net: {
              label: '净利润',
              notes: ['图表显示的毛利至净利润桥接合计为 $9M（营业利润 $1M + 税收收益 $2M + 其他 $6M）。'],
            },
          },
        },
      },
    },
    {
      key: 'elastic-q2-fy26',
      company: 'Elastic',
      period: 'Q2 FY26',
      periodNote: 'Ending Oct. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      sourceImage: 'input/processed/elastic-q2-fy26.png',
      roundingTolerance: 1.1,
      revenue: {
        total: 424,
        notes: ['+16% Y/Y'],
        items: [
          {
            id: 'subscription',
            label: 'Subscription',
            value: 398,
            notes: ['+17% Y/Y'],
            children: [
              { id: 'cloud', label: 'Cloud', value: 206, notes: ['+22% Y/Y', '49% of revenue', '+2pp Y/Y'] },
              { id: 'other_subscription', label: 'Other subscription', value: 192, notes: ['+12% Y/Y'] },
            ],
          },
          { id: 'service', label: 'Service', value: 26, notes: ['+5% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 102 },
        operatingExpenses: {
          total: 330,
          items: [
            { id: 'sm', label: 'S&M', value: 174, notes: ['41% of revenue', '+2pp Y/Y'] },
            { id: 'rnd', label: 'R&D', value: 108, notes: ['26% of revenue', '+1pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 48, notes: ['11% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: {
          label: 'Tax',
          value: 0,
          notes: ['No separate tax line is shown in the source chart.'],
        },
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
        gross: { id: 'gross_profit', label: 'Gross profit', value: 322, notes: ['76% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -8, notes: ['(2%) margin', '(1pp) Y/Y'] },
        net: {
          id: 'operating_loss',
          label: 'Operating loss',
          value: -8,
          notes: ['No separate net income line is shown in the source chart.'],
        },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2025 年 10 月',
          revenue: {
            notes: ['同比 +16%'],
            items: [
              {
                id: 'subscription',
                label: '订阅',
                notes: ['同比 +17%'],
                children: [
                  { id: 'cloud', label: '云', notes: ['同比 +22%', '占收入 49%', '同比 +2 个百分点'] },
                  { id: 'other_subscription', label: '其他订阅', notes: ['同比 +12%'] },
                ],
              },
              { id: 'service', label: '服务', notes: ['同比 +5%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'sm', label: '销售与市场', notes: ['占收入 41%', '同比 +2 个百分点'] },
                { id: 'rnd', label: '研发', notes: ['占收入 26%', '同比 +1 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 11%', '同比 (1 个百分点)'] },
              ],
            },
            tax: {
              label: '税费',
              notes: ['来源图未显示单独的税费项目。'],
            },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 76%', '同比 +1 个百分点'] },
            operating: { label: '营业亏损', notes: ['利润率 (2%)', '同比 (1 个百分点)'] },
            net: {
              label: '营业亏损',
              notes: ['来源图未单独显示净利润项目。'],
            },
          },
        },
      },
    }
  );
})(window);
