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
      key: 'meta-q3-fy24',
      company: 'Meta',
      period: 'Q3 FY24',
      periodNote: 'Ending Sep. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/meta-q3-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 40.6,
        notes: ['+19% Y/Y'],
        items: [
          {
            id: 'family_of_apps',
            label: 'Family of Apps (FoA)',
            value: 40.3,
            notes: ['+19% Y/Y', 'Operating profit: $21.8B'],
            children: [
              { id: 'advertising', label: 'Advertising', value: 39.9, notes: ['+19% Y/Y'] },
              { id: 'other_revenue', label: 'Other', value: 0.4, notes: ['+48% Y/Y', 'Payments infrastructure'] },
            ],
          },
          {
            id: 'reality_labs',
            label: 'Reality Labs (RL)',
            value: 0.3,
            notes: ['+29% Y/Y', 'Operating loss: ($4.4B)'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 7.4 },
        operatingExpenses: {
          total: 15.9,
          items: [
            { id: 'rnd', label: 'R&D', value: 11.2, notes: ['28% of revenue', '+0pp Y/Y'] },
            { id: 'sm', label: 'S&M', value: 2.8, notes: ['7% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 1.9, notes: ['5% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 2.1 },
      },
      otherIncome: {
        total: 0.5,
        items: [{ id: 'interest', label: 'Interest', value: 0.5 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross Profit', value: 33.2, notes: ['82% margin', '(1pp) Y/Y'] },
        operating: {
          id: 'operating_profit',
          label: 'Operating profit',
          value: 17.4,
          notes: ['43% margin', '+2pp Y/Y'],
          items: [
            { id: 'family_of_apps_operating_profit', label: 'Family of Apps (FoA)', value: 21.8 },
            { id: 'reality_labs_operating_loss', label: 'Reality Labs (RL)', value: -4.4 },
          ],
        },
        net: { id: 'net_profit', label: 'Net profit', value: 15.7, notes: ['39% margin', '+5pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第三季度',
          periodNote: '截至 2024 年 9 月',
          revenue: {
            notes: ['同比 +19%'],
            items: [
              {
                id: 'family_of_apps', label: '应用家族（FoA）', notes: ['同比 +19%', '营业利润: $21.8B'],
                children: [
                  { id: 'advertising', label: '广告', notes: ['同比 +19%'] },
                  { id: 'other_revenue', label: '其他', notes: ['同比 +48%', '支付基础设施'] },
                ],
              },
              { id: 'reality_labs', label: 'Reality Labs（RL）', notes: ['同比 +29%', '营业亏损: ($4.4B)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 28%', '同比 +0 个百分点'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 7%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 5%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'interest', label: '利息收入' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 82%', '同比 (1 个百分点)'] },
            operating: {
              label: '营业利润',
              notes: ['利润率 43%', '同比 +2 个百分点'],
              items: [
                { id: 'family_of_apps_operating_profit', label: '应用家族（FoA）' },
                { id: 'reality_labs_operating_loss', label: 'Reality Labs（RL）' },
              ],
            },
            net: { label: '净利润', notes: ['利润率 39%', '同比 +5 个百分点'] },
          },
        },
      },
    },
    {
      key: 'meta-q4-fy22',
      company: 'Meta',
      period: 'Q4 FY22',
      periodNote: 'Ending Dec. 2022',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/meta-q4-fy22.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 32.2,
        notes: ['(4%) Y/Y'],
        items: [
          {
            id: 'family_of_apps',
            label: 'Family of Apps (FoA)',
            value: 31.4,
            notes: ['(4%) Y/Y', 'Operating profit: $10.7B'],
            children: [
              { id: 'advertising', label: 'Advertising', value: 31.3, notes: ['(4%) Y/Y'] },
              { id: 'other_revenue', label: 'Other', value: 0.2, notes: ['+19% Y/Y', 'Payments infrastructure'] },
            ],
          },
          {
            id: 'reality_labs',
            label: 'Reality Labs (RL)',
            value: 0.7,
            notes: ['(17%) Y/Y', 'Operating loss: ($4.3B)'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 8.3 },
        operatingExpenses: {
          total: 17.4,
          items: [
            { id: 'rnd', label: 'R&D', value: 9.8, notes: ['30% of revenue', '+9pp Y/Y'] },
            { id: 'sm', label: 'Sales & marketing', value: 4.6, notes: ['14% of revenue', '+1pp Y/Y'] },
            { id: 'ga', label: 'General & admin', value: 3.1, notes: ['10% of revenue', '+0pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 1.5 },
      },
      otherExpenses: {
        total: 0.3,
        items: [{ id: 'interest', label: 'Interest', value: 0.3 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 23.8, notes: ['74% margin', '(6pp) Y/Y'] },
        operating: {
          id: 'operating_profit',
          label: 'Operating profit',
          value: 6.4,
          notes: ['20% margin', '(17pp) Y/Y', 'FoA $10.7B', 'RL ($4.3B)'],
          items: [
            { id: 'foa_operating_profit', label: 'FoA operating profit', value: 10.7 },
            { id: 'reality_labs_operating_loss', label: 'Reality Labs operating loss', value: -4.3 },
          ],
        },
        net: { id: 'net_profit', label: 'Net profit', value: 4.7, notes: ['14% margin', '(16pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2022 财年第四季度',
          periodNote: '截至 2022 年 12 月',
          revenue: {
            notes: ['同比 (4%)'],
            items: [
              {
                id: 'family_of_apps', label: '应用家族（FoA）', notes: ['同比 (4%)', '营业利润: $10.7B'],
                children: [
                  { id: 'advertising', label: '广告', notes: ['同比 (4%)'] },
                  { id: 'other_revenue', label: '其他', notes: ['同比 +19%', '支付基础设施'] },
                ],
              },
              { id: 'reality_labs', label: 'Reality Labs（RL）', notes: ['同比 (17%)', '营业亏损: ($4.3B)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 30%', '同比 +9 个百分点'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 14%', '同比 +1 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 10%', '同比 +0 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'interest', label: '利息费用' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 74%', '同比 (6 个百分点)'] },
            operating: {
              label: '营业利润',
              notes: ['利润率 20%', '同比 (17 个百分点)', 'FoA 营业利润 $10.7B', 'RL 营业亏损 ($4.3B)'],
              items: [
                { id: 'foa_operating_profit', label: 'FoA 营业利润' },
                { id: 'reality_labs_operating_loss', label: 'Reality Labs 营业亏损' },
              ],
            },
            net: { label: '净利润', notes: ['利润率 14%', '同比 (16 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'meta-q3-fy22',
      company: 'Meta',
      period: 'Q3 FY22',
      periodNote: 'Ending Sep. 2022',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/meta-q3-fy22.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 27.7,
        notes: ['(4%) Y/Y'],
        items: [
          {
            id: 'family_of_apps',
            label: 'Family of Apps (FoA)',
            value: 27.4,
            notes: ['(4%) Y/Y'],
            children: [
              { id: 'advertising', label: 'Advertising', value: 27.2, notes: ['(4%) Y/Y'] },
              { id: 'other_revenue', label: 'Other', value: 0.2, notes: ['+9% Y/Y', 'Payments infrastructure'] },
            ],
          },
          {
            id: 'reality_labs',
            label: 'Reality Labs (RL)',
            value: 0.3,
            notes: ['(49%) Y/Y', 'Meta Quest, Portal, Spark AR, Horizon'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 5.7 },
        operatingExpenses: {
          total: 16.3,
          items: [
            { id: 'rnd', label: 'R&D', value: 9.2, notes: ['33% of revenue', '+11pp Y/Y'] },
            { id: 'sm', label: 'Sales & marketing', value: 3.8, notes: ['14% of revenue', '+1pp Y/Y'] },
            { id: 'ga', label: 'General & admin', value: 3.4, notes: ['12% of revenue', '+2pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 1.2 },
      },
      otherExpenses: {
        total: 0.1,
        items: [{ id: 'interest', label: 'Interest', value: 0.1 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross Profit', value: 22.0, notes: ['79% margin', '(1pp) Y/Y'] },
        operating: {
          id: 'operating_profit',
          label: 'Operating profit',
          value: 5.7,
          notes: ['20% margin', '(15pp) Y/Y'],
          items: [
            { id: 'foa_operating_profit', label: 'FoA', value: 9.3 },
            { id: 'reality_labs_operating_loss', label: 'RL', value: -3.7 },
          ],
        },
        net: { id: 'net_profit', label: 'Net profit', value: 4.4, notes: ['16% margin', '(16pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2022 财年第三季度',
          periodNote: '截至 2022 年 9 月',
          revenue: {
            notes: ['同比 (4%)'],
            items: [
              {
                id: 'family_of_apps',
                label: '应用家族（FoA）',
                notes: ['同比 (4%)'],
                children: [
                  { id: 'advertising', label: '广告', notes: ['同比 (4%)'] },
                  { id: 'other_revenue', label: '其他', notes: ['同比 +9%', '支付基础设施'] },
                ],
              },
              {
                id: 'reality_labs',
                label: 'Reality Labs（RL）',
                notes: ['同比 (49%)', 'Meta Quest、Portal、Spark AR、Horizon'],
              },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 33%', '同比 +11 个百分点'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 14%', '同比 +1 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 12%', '同比 +2 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [{ id: 'interest', label: '利息' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 79%', '同比 (1 个百分点)'] },
            operating: {
              label: '营业利润',
              notes: ['利润率 20%', '同比 (15 个百分点)'],
              items: [
                { id: 'foa_operating_profit', label: '应用家族（FoA）' },
                { id: 'reality_labs_operating_loss', label: 'RL' },
              ],
            },
            net: { label: '净利润', notes: ['利润率 16%', '同比 (16 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'meta-q3-fy25',
      company: 'Meta',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/meta-q3-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 51.2,
        notes: ['+26% Y/Y'],
        items: [
          {
            id: 'family_of_apps',
            label: 'Family of Apps (FoA)',
            value: 50.8,
            notes: ['+26% Y/Y'],
            children: [
              { id: 'advertising', label: 'Advertising', value: 50.1, notes: ['+25% Y/Y'] },
              { id: 'other_revenue', label: 'Other', value: 0.7, notes: ['+59% Y/Y', 'Payments infrastructure'] },
            ],
          },
          { id: 'reality_labs', label: 'Reality Labs (RL)', value: 0.5, notes: ['+74% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 9.2 },
        operatingExpenses: {
          total: 21.5,
          items: [
            { id: 'rnd', label: 'R&D', value: 15.1, notes: ['30% of revenue', '+2pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 3.5, notes: ['7% of revenue', '+2pp Y/Y'] },
            { id: 'sm', label: 'S&M', value: 2.8, notes: ['6% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 18.9 },
      },
      otherIncome: {
        total: 1.1,
        items: [{ id: 'other', label: 'Other', value: 1.1 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross Profit', value: 42.0, notes: ['82% margin', '+0pp Y/Y'] },
        operating: {
          id: 'operating_profit',
          label: 'Operating profit',
          value: 20.5,
          notes: ['40% margin', '(3pp) Y/Y'],
          items: [
            { id: 'foa_operating_profit', label: 'FoA operating profit', value: 25.0 },
            { id: 'rl_operating_loss', label: 'RL operating loss', value: -4.4 },
          ],
        },
        net: { id: 'net_profit', label: 'Net profit', value: 2.7, notes: ['5% margin', '(33pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          revenue: {
            notes: ['同比 +26%'],
            items: [
              {
                id: 'family_of_apps',
                label: '应用家族（FoA）',
                notes: ['同比 +26%'],
                children: [
                  { id: 'advertising', label: '广告', notes: ['同比 +25%'] },
                  { id: 'other_revenue', label: '其他', notes: ['同比 +59%', '支付基础设施'] },
                ],
              },
              { id: 'reality_labs', label: 'Reality Labs（RL）', notes: ['同比 +74%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 30%', '同比 +2 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 7%', '同比 +2 个百分点'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 6%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 82%', '同比 +0 个百分点'] },
            operating: {
              label: '营业利润',
              notes: ['利润率 40%', '同比 (3 个百分点)'],
              items: [
                { id: 'foa_operating_profit', label: 'FoA 营业利润' },
                { id: 'rl_operating_loss', label: 'RL 营业亏损' },
              ],
            },
            net: { label: '净利润', notes: ['利润率 5%', '同比 (33 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'meta-q3-fy23',
      company: 'Meta',
      period: 'Q3 FY23',
      periodNote: 'Ending Sep. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/meta-q3-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 34.1,
        notes: ['+23% Y/Y'],
        items: [
          {
            id: 'family_of_apps',
            label: 'Family of Apps (FoA)',
            value: 33.9,
            notes: ['+24% Y/Y'],
            children: [
              { id: 'advertising', label: 'Advertising', value: 33.6, notes: ['+24% Y/Y'] },
              { id: 'other_revenue', label: 'Other', value: 0.3, notes: ['+53% Y/Y', 'Payments infrastructure'] },
            ],
          },
          {
            id: 'reality_labs',
            label: 'Reality Labs (RL)',
            value: 0.2,
            notes: ['(26%) Y/Y', 'Meta Quest; Spark AR; Horizon'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 6.2 },
        operatingExpenses: {
          total: 14.2,
          items: [
            { id: 'rnd', label: 'R&D', value: 9.2, notes: ['27% of revenue', '(6pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 2.9, notes: ['8% of revenue', '(5pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 2.1, notes: ['6% of revenue', '(6pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 2.4 },
      },
      otherIncome: {
        total: 0.3,
        items: [{ id: 'interest', label: 'Interest', value: 0.3 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross Profit', value: 27.9, notes: ['82% margin', '+2pp Y/Y'] },
        operating: {
          id: 'operating_profit',
          label: 'Operating profit',
          value: 13.7,
          notes: ['40% margin', '+20pp Y/Y'],
          items: [
            { id: 'foa_operating_profit', label: 'FoA operating profit', value: 17.5 },
            { id: 'reality_labs_operating_loss', label: 'RL operating loss', value: -3.7 },
          ],
        },
        net: { id: 'net_profit', label: 'Net profit', value: 11.6, notes: ['34% margin', '+18pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第三季度',
          periodNote: '截至 2023 年 9 月',
          revenue: {
            notes: ['同比 +23%'],
            items: [
              {
                id: 'family_of_apps',
                label: '应用家族（FoA）',
                notes: ['同比 +24%'],
                children: [
                  { id: 'advertising', label: '广告', notes: ['同比 +24%'] },
                  { id: 'other_revenue', label: '其他', notes: ['同比 +53%', '支付基础设施'] },
                ],
              },
              {
                id: 'reality_labs',
                label: 'Reality Labs（RL）',
                notes: ['同比 (26%)', 'Meta Quest；Spark AR；Horizon'],
              },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 27%', '同比 (6 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 8%', '同比 (5 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 6%', '同比 (6 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'interest', label: '利息' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 82%', '同比 +2 个百分点'] },
            operating: {
              label: '营业利润',
              notes: ['利润率 40%', '同比 +20 个百分点'],
              items: [
                { id: 'foa_operating_profit', label: 'FoA 营业利润' },
                { id: 'reality_labs_operating_loss', label: 'RL 营业亏损' },
              ],
            },
            net: { label: '净利润', notes: ['利润率 34%', '同比 +18 个百分点'] },
          },
        },
      },
    },
    {
      key: 'meta-q2-fy23',
      company: 'Meta',
      period: 'Q2 FY23',
      periodNote: 'Ending Jun. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/meta-q2-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 32.0,
        notes: ['+11% Y/Y'],
        items: [
          {
            id: 'family_of_apps',
            label: 'Family of Apps (FoA)',
            value: 31.7,
            notes: ['+12% Y/Y'],
            children: [
              { id: 'advertising', label: 'Advertising', value: 31.5, notes: ['+12% Y/Y'] },
              { id: 'other_revenue', label: 'Other', value: 0.2, notes: ['+3% Y/Y', 'Payments infrastructure'] },
            ],
          },
          {
            id: 'reality_labs',
            label: 'Reality Labs (RL)',
            value: 0.3,
            notes: ['(39%) Y/Y', 'Meta Quest and Spark AR / Horizon'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 5.9 },
        operatingExpenses: {
          total: 16.7,
          items: [
            { id: 'rnd', label: 'R&D', value: 9.3, notes: ['29% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 4.2, notes: ['13% of revenue', '+3pp Y/Y'] },
            { id: 'sm', label: 'S&M', value: 3.2, notes: ['10% of revenue', '(2pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 1.5 },
      },
      otherExpenses: {
        total: 0.1,
        items: [{ id: 'interest', label: 'Interest', value: 0.1 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross Profit', value: 26.1, notes: ['81% margin', '(1pp) Y/Y'] },
        operating: {
          id: 'operating_profit',
          label: 'Operating profit',
          value: 9.4,
          notes: ['29% margin', '+0pp Y/Y'],
          items: [
            { id: 'foa_operating_profit', label: 'FoA operating profit', value: 13.1 },
            { id: 'rl_operating_loss', label: 'RL operating loss', value: -3.7 },
          ],
        },
        net: { id: 'net_profit', label: 'Net profit', value: 7.8, notes: ['24% margin', '+1pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第二季度',
          periodNote: '截至 2023 年 6 月',
          revenue: {
            notes: ['同比 +11%'],
            items: [
              {
                id: 'family_of_apps',
                label: '应用家族（FoA）',
                notes: ['同比 +12%'],
                children: [
                  { id: 'advertising', label: '广告', notes: ['同比 +12%'] },
                  { id: 'other_revenue', label: '其他', notes: ['同比 +3%', '支付基础设施'] },
                ],
              },
              {
                id: 'reality_labs',
                label: 'Reality Labs（RL）',
                notes: ['同比 (39%)', 'Meta Quest、Spark AR / Horizon'],
              },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 29%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 13%', '同比 +3 个百分点'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 10%', '同比 (2 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: { items: [{ id: 'interest', label: '利息' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 81%', '同比 (1 个百分点)'] },
            operating: {
              label: '营业利润',
              notes: ['利润率 29%', '同比 +0 个百分点'],
              items: [
                { id: 'foa_operating_profit', label: 'FoA 营业利润' },
                { id: 'rl_operating_loss', label: 'RL 营业亏损' },
              ],
            },
            net: { label: '净利润', notes: ['利润率 24%', '同比 +1 个百分点'] },
          },
        },
      },
    },
    {
      key: 'meta-q1-fy23',
      company: 'Meta',
      period: 'Q1 FY23',
      periodNote: 'Ending Mar. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/meta-q1-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 28.6,
        notes: ['+3% Y/Y'],
        items: [
          {
            id: 'family_of_apps',
            label: 'Family of Apps (FoA)',
            value: 28.3,
            notes: ['+4% Y/Y'],
            children: [
              { id: 'advertising', label: 'Advertising', value: 28.1, notes: ['+4% Y/Y'] },
              { id: 'other_revenue', label: 'Other', value: 0.2, notes: ['(5%) Y/Y', 'Payments infrastructure'] },
            ],
          },
          {
            id: 'reality_labs',
            label: 'Reality Labs (RL)',
            value: 0.3,
            notes: ['(51%) Y/Y'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 6.1 },
        operatingExpenses: {
          total: 15.3,
          items: [
            { id: 'rnd', label: 'R&D', value: 9.4, notes: ['33% of revenue', '+5pp Y/Y'] },
            { id: 'sm', label: 'Sales & marketing', value: 3.0, notes: ['11% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'General & admin', value: 2.9, notes: ['10% of revenue', '+2pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 1.6 },
      },
      otherIncome: {
        total: 0.1,
        items: [{ id: 'interest', label: 'Interest', value: 0.1 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 22.5, notes: ['79% margin', '+0pp Y/Y'] },
        operating: {
          id: 'operating_profit',
          label: 'Operating profit',
          value: 7.2,
          notes: ['25% margin', '(5pp) Y/Y'],
          items: [
            { id: 'foa_operating_profit', label: 'FoA operating profit', value: 11.2 },
            { id: 'reality_labs_operating_loss', label: 'RL operating loss', value: -4.0 },
          ],
        },
        net: { id: 'net_profit', label: 'Net profit', value: 5.7, notes: ['20% margin', '(7pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第一季度',
          periodNote: '截至 2023 年 3 月',
          revenue: {
            notes: ['同比 +3%'],
            items: [
              {
                id: 'family_of_apps', label: '应用家族（FoA）', notes: ['同比 +4%'],
                children: [
                  { id: 'advertising', label: '广告', notes: ['同比 +4%'] },
                  { id: 'other_revenue', label: '其他', notes: ['同比 (5%)', '支付基础设施'] },
                ],
              },
              { id: 'reality_labs', label: 'Reality Labs（RL）', notes: ['同比 (51%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 33%', '同比 +5 个百分点'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 11%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 10%', '同比 +2 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'interest', label: '利息收入' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 79%', '同比 +0 个百分点'] },
            operating: {
              label: '营业利润',
              notes: ['利润率 25%', '同比 (5 个百分点)'],
              items: [
                { id: 'foa_operating_profit', label: 'FoA 营业利润' },
                { id: 'reality_labs_operating_loss', label: 'RL 营业亏损' },
              ],
            },
            net: { label: '净利润', notes: ['利润率 20%', '同比 (7 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'meta-q1-fy25',
      company: 'Meta',
      period: 'Q1 FY25',
      periodNote: 'Ending Mar. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/meta-q1-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 42.3,
        notes: ['+16% Y/Y'],
        items: [
          {
            id: 'family_of_apps',
            label: 'Family of Apps (FoA)',
            value: 41.9,
            notes: ['+16% Y/Y', 'Operating profit: $21.8B'],
            children: [
              { id: 'advertising', label: 'Advertising', value: 41.4, notes: ['+16% Y/Y'] },
              { id: 'other_revenue', label: 'Other', value: 0.5, notes: ['+34% Y/Y', 'Payments infrastructure'] },
            ],
          },
          {
            id: 'reality_labs',
            label: 'Reality Labs (RL)',
            value: 0.4,
            notes: ['(6%) Y/Y', 'Operating loss: ($4.2B)'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 7.6 },
        operatingExpenses: {
          total: 17.2,
          items: [
            { id: 'rnd', label: 'R&D', value: 12.2, notes: ['29% of revenue', '+1pp Y/Y'] },
            { id: 'sm', label: 'S&M', value: 2.8, notes: ['7% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 2.3, notes: ['5% of revenue', '(4pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 1.7 },
      },
      otherIncome: {
        total: 0.8,
        items: [{ id: 'interest', label: 'Interest', value: 0.8 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 34.7, notes: ['82% margin', '+0pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 17.6, notes: ['41% margin', '+4pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 16.6, notes: ['39% margin', '+5pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第一季度',
          periodNote: '截至 2025 年 3 月',
          revenue: {
            notes: ['同比 +16%'],
            items: [
              {
                id: 'family_of_apps', label: '应用家族（FoA）', notes: ['同比 +16%', '营业利润: $21.8B'],
                children: [
                  { id: 'advertising', label: '广告', notes: ['同比 +16%'] },
                  { id: 'other_revenue', label: '其他', notes: ['同比 +34%', '支付基础设施'] },
                ],
              },
              { id: 'reality_labs', label: 'Reality Labs（RL）', notes: ['同比 (6%)', '营业亏损: ($4.2B)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 29%', '同比 +1 个百分点'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 7%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 5%', '同比 (4 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'interest', label: '利息收入' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 82%', '同比 +0 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 41%', '同比 +4 个百分点'] },
            net: { label: '净利润', notes: ['利润率 39%', '同比 +5 个百分点'] },
          },
        },
      },
    },
    {
      key: 'meta-q4-fy23',
      company: 'Meta',
      period: 'Q4 FY23',
      periodNote: 'Ending Dec. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/meta-q4-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 40.1,
        notes: ['+25% Y/Y'],
        items: [
          {
            id: 'family_of_apps',
            label: 'Family of Apps (FoA)',
            value: 39.0,
            notes: ['+24% Y/Y'],
            children: [
              { id: 'advertising', label: 'Advertising', value: 38.7, notes: ['+24% Y/Y'] },
              { id: 'other_revenue', label: 'Other', value: 0.3, notes: ['+82% Y/Y', 'Payments infrastructure'] },
            ],
          },
          {
            id: 'reality_labs',
            label: 'Reality Labs (RL)',
            value: 1.1,
            notes: ['+47% Y/Y'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 7.7 },
        operatingExpenses: {
          total: 16.0,
          items: [
            { id: 'rnd', label: 'R&D', value: 10.5, notes: ['26% of revenue', '(4pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 3.2, notes: ['8% of revenue', '(6pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 2.3, notes: ['6% of revenue', '(4pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 2.8 },
      },
      otherIncome: {
        total: 0.4,
        items: [{ id: 'interest', label: 'Interest', value: 0.4 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 32.4, notes: ['81% margin', '+7pp Y/Y'] },
        operating: {
          id: 'operating_profit',
          label: 'Operating profit',
          value: 16.4,
          notes: ['41% margin', '+20pp Y/Y'],
          items: [
            { id: 'foa_operating_profit', label: 'FoA operating profit', value: 21.0 },
            { id: 'reality_labs_operating_loss', label: 'RL operating loss', value: -4.6 },
          ],
        },
        net: { id: 'net_profit', label: 'Net profit', value: 14.0, notes: ['35% margin', '+20pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第四季度',
          periodNote: '截至 2023 年 12 月',
          revenue: {
            notes: ['同比 +25%'],
            items: [
              {
                id: 'family_of_apps', label: '应用家族（FoA）', notes: ['同比 +24%'],
                children: [
                  { id: 'advertising', label: '广告', notes: ['同比 +24%'] },
                  { id: 'other_revenue', label: '其他', notes: ['同比 +82%', '支付基础设施'] },
                ],
              },
              { id: 'reality_labs', label: 'Reality Labs（RL）', notes: ['同比 +47%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 26%', '同比 (4 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 8%', '同比 (6 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 6%', '同比 (4 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'interest', label: '利息' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 81%', '同比 +7 个百分点'] },
            operating: {
              label: '营业利润',
              notes: ['利润率 41%', '同比 +20 个百分点'],
              items: [
                { id: 'foa_operating_profit', label: '应用家族营业利润' },
                { id: 'reality_labs_operating_loss', label: 'Reality Labs 营业亏损' },
              ],
            },
            net: { label: '净利润', notes: ['利润率 35%', '同比 +20 个百分点'] },
          },
        },
      },
    },
    {
      key: 'meta-q2-fy25',
      company: 'Meta',
      period: 'Q2 FY25',
      periodNote: 'Ending Jun. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/meta-q2-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 47.5,
        notes: ['+22% Y/Y'],
        items: [
          {
            id: 'family_of_apps',
            label: 'Family of Apps (FoA)',
            value: 47.1,
            notes: ['+22% Y/Y'],
            children: [
              { id: 'advertising', label: 'Advertising', value: 46.6, notes: ['+21% Y/Y'] },
              { id: 'other_revenue', label: 'Other', value: 0.6, notes: ['+50% Y/Y', 'Payments infrastructure'] },
            ],
          },
          { id: 'reality_labs', label: 'Reality Labs (RL)', value: 0.4, notes: ['+5% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 8.5 },
        operatingExpenses: {
          total: 18.6,
          items: [
            { id: 'rnd', label: 'R&D', value: 12.9, notes: ['27% of revenue', '+0pp Y/Y'] },
            { id: 'sm', label: 'S&M', value: 3.0, notes: ['6% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 2.7, notes: ['6% of revenue', '(4pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 2.2 },
      },
      otherIncome: {
        total: 0.1,
        items: [{ id: 'interest', label: 'Interest', value: 0.1 }],
      },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross Profit', value: 39.0, notes: ['82% margin', '+1pp Y/Y'] },
        operating: {
          id: 'operating_profit',
          label: 'Operating profit',
          value: 20.4,
          notes: ['43% margin', '+5pp Y/Y'],
          items: [
            { id: 'family_of_apps_operating_profit', label: 'FoA operating profit', value: 25.0 },
            { id: 'reality_labs_operating_loss', label: 'RL operating loss', value: -4.5 },
          ],
        },
        net: { id: 'net_profit', label: 'Net profit', value: 18.3, notes: ['39% margin', '+4pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第二季度',
          periodNote: '截至 2025 年 6 月',
          revenue: {
            notes: ['同比 +22%'],
            items: [
              {
                id: 'family_of_apps',
                label: '应用家族（FoA）',
                notes: ['同比 +22%'],
                children: [
                  { id: 'advertising', label: '广告', notes: ['同比 +21%'] },
                  { id: 'other_revenue', label: '其他', notes: ['同比 +50%', '支付基础设施'] },
                ],
              },
              { id: 'reality_labs', label: 'Reality Labs（RL）', notes: ['同比 +5%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 27%', '同比 +0 个百分点'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 6%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 6%', '同比 (4 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'interest', label: '利息' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 82%', '同比 +1 个百分点'] },
            operating: {
              label: '营业利润',
              notes: ['利润率 43%', '同比 +5 个百分点'],
              items: [
                { id: 'family_of_apps_operating_profit', label: 'FoA 营业利润' },
                { id: 'reality_labs_operating_loss', label: 'RL 营业亏损' },
              ],
            },
            net: { label: '净利润', notes: ['利润率 39%', '同比 +4 个百分点'] },
          },
        },
      },
    },
    {
      key: 'meta-q4-fy25',
      company: 'Meta',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/meta-q4-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 59.9,
        notes: ['+24% Y/Y'],
        items: [
          {
            id: 'family_of_apps',
            label: 'Family of Apps (FoA)',
            value: 58.9,
            notes: ['+26% Y/Y', 'Operating profit: $30.8B'],
            children: [
              { id: 'advertising', label: 'Advertising', value: 58.1, notes: ['+24% Y/Y'] },
              { id: 'other_revenue', label: 'Other', value: 0.8, notes: ['+54% Y/Y', 'Payments infrastructure'] },
            ],
          },
          {
            id: 'reality_labs',
            label: 'Reality Labs (RL)',
            value: 1.0,
            notes: ['(12%) Y/Y', 'Operating loss: ($6.0B)'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 10.9 },
        operatingExpenses: {
          total: 24.2,
          items: [
            { id: 'rnd', label: 'R&D', value: 17.1, notes: ['29% of revenue', '+3pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 3.7, notes: ['6% of revenue', '+5pp Y/Y'] },
            { id: 'sm', label: 'S&M', value: 3.4, notes: ['6% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 2.6 },
      },
      otherIncome: {
        total: 0.6,
        items: [{ id: 'other', label: 'Other', value: 0.6 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross Profit', value: 49.0, notes: ['82% margin', '+0pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 24.7, notes: ['41% margin', '+7pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 22.8, notes: ['38% margin', '+6pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +24%'],
            items: [
              {
                id: 'family_of_apps', label: '应用家族（FoA）', notes: ['同比 +26%', '营业利润: $30.8B'],
                children: [
                  { id: 'advertising', label: '广告', notes: ['同比 +24%'] },
                  { id: 'other_revenue', label: '其他', notes: ['同比 +54%', '支付基础设施'] },
                ],
              },
              { id: 'reality_labs', label: 'Reality Labs（RL）', notes: ['同比 (12%)', '营业亏损: ($6.0B)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 29%', '同比 +3 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 6%', '同比 +5 个百分点'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 6%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other', label: '其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 82%', '同比 +0 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 41%', '同比 +7 个百分点'] },
            net: { label: '净利润', notes: ['利润率 38%', '同比 +6 个百分点'] },
          },
        },
      },
    },
    {
      key: 'meta-q1-fy26',
      company: 'Meta',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/meta-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 56.3,
        notes: ['+33% Y/Y'],
        items: [
          {
            id: 'family_of_apps',
            label: 'Family of Apps (FoA)',
            value: 55.9,
            notes: ['+33% Y/Y', 'Operating profit: $26.9B'],
            children: [
              { id: 'advertising', label: 'Advertising', value: 55.0, notes: ['+33% Y/Y'] },
              { id: 'other_revenue', label: 'Other', value: 0.9, notes: ['+74% Y/Y', 'Payments infrastructure'] },
            ],
          },
          {
            id: 'reality_labs',
            label: 'Reality Labs (RL)',
            value: 0.4,
            notes: ['(2%) Y/Y', 'Operating loss: ($4.0B)'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 10.2 },
        operatingExpenses: {
          total: 23.2,
          items: [
            { id: 'rnd', label: 'R&D', value: 17.7, notes: ['31% of revenue', '+3pp Y/Y'] },
            { id: 'sm', label: 'S&M', value: 2.9, notes: ['5% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 2.6, notes: ['5% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0, notes: ['Source chart shows a tax benefit instead of tax expense.'] },
      },
      otherIncome: {
        total: 5.0,
        items: [{ id: 'tax_benefit', label: 'Tax benefit', value: 5.0 }],
      },
      otherExpenses: {
        total: 1.1,
        items: [{ id: 'other', label: 'Other', value: 1.1 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 46.1, notes: ['82% margin', '(0pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 22.9, notes: ['41% margin', '(1pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 26.8, notes: ['48% margin', '+8pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +33%'],
            items: [
              {
                id: 'family_of_apps', label: '应用家族（FoA）', notes: ['同比 +33%', '营业利润: $26.9B'],
                children: [
                  { id: 'advertising', label: '广告', notes: ['同比 +33%'] },
                  { id: 'other_revenue', label: '其他', notes: ['同比 +74%', '支付基础设施'] },
                ],
              },
              { id: 'reality_labs', label: 'Reality Labs（RL）', notes: ['同比 (2%)', '营业亏损: ($4.0B)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 31%', '同比 +3 个百分点'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 5%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 5%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费', notes: ['来源图显示税收收益，而非税费。'] },
          },
          otherIncome: {
            items: [
              { id: 'tax_benefit', label: '税收收益' },
            ],
          },
          otherExpenses: {
            items: [
              { id: 'other', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 82%', '同比 (0 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 41%', '同比 (1 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 48%', '同比 +8 个百分点'] },
          },
        },
      },
    },
    {
      key: 'meta-q4-fy24',
      company: 'Meta',
      period: 'Q4 FY24',
      periodNote: 'Ending Dec. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/meta-q4-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 48.4,
        notes: ['+21% Y/Y'],
        items: [
          {
            id: 'family_of_apps',
            label: 'Family of Apps (FoA)',
            value: 47.3,
            notes: ['+21% Y/Y'],
            children: [
              { id: 'advertising', label: 'Advertising', value: 46.8, notes: ['+21% Y/Y'] },
              { id: 'other_revenue', label: 'Other', value: 0.5, notes: ['+55% Y/Y', 'Payments infrastructure'] },
            ],
          },
          { id: 'reality_labs', label: 'Reality Labs (RL)', value: 1.1, notes: ['+1% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 8.8 },
        operatingExpenses: {
          total: 16.2,
          items: [
            { id: 'rnd', label: 'R&D', value: 12.2, notes: ['25% of revenue', '(1pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 3.2, notes: ['7% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 0.8, notes: ['2% of revenue', '(4pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 2.7 },
      },
      otherIncome: {
        total: 0.2,
        items: [{ id: 'interest', label: 'Interest', value: 0.2 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross Profit', value: 39.5, notes: ['82% margin', '+1pp Y/Y'] },
        operating: {
          id: 'operating_profit',
          label: 'Operating profit',
          value: 23.4,
          notes: ['48% margin', '+7pp Y/Y'],
          items: [
            { id: 'foa_operating_profit', label: 'FoA operating profit', value: 28.3 },
            { id: 'reality_labs_operating_loss', label: 'RL operating loss', value: -5.0 },
          ],
        },
        net: { id: 'net_profit', label: 'Net profit', value: 20.8, notes: ['43% margin', '+8pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第四季度',
          periodNote: '截至 2024 年 12 月',
          revenue: {
            notes: ['同比 +21%'],
            items: [
              {
                id: 'family_of_apps',
                label: '应用家族（FoA）',
                notes: ['同比 +21%'],
                children: [
                  { id: 'advertising', label: '广告', notes: ['同比 +21%'] },
                  { id: 'other_revenue', label: '其他', notes: ['同比 +55%', '支付基础设施'] },
                ],
              },
              { id: 'reality_labs', label: 'Reality Labs（RL）', notes: ['同比 +1%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 25%', '同比 (1 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 7%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 2%', '同比 (4 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'interest', label: '利息' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 82%', '同比 +1 个百分点'] },
            operating: {
              label: '营业利润',
              notes: ['利润率 48%', '同比 +7 个百分点'],
              items: [
                { id: 'foa_operating_profit', label: 'FoA 营业利润' },
                { id: 'reality_labs_operating_loss', label: 'RL 营业亏损' },
              ],
            },
            net: { label: '净利润', notes: ['利润率 43%', '同比 +8 个百分点'] },
          },
        },
      },
    },
    {
      key: 'meta-q1-fy24',
      company: 'Meta',
      period: 'Q1 FY24',
      periodNote: 'Ending Mar. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/meta-q1-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 36.5,
        notes: ['+27% Y/Y'],
        items: [
          {
            id: 'family_of_apps',
            label: 'Family of Apps (FoA)',
            value: 36.0,
            notes: ['+27% Y/Y'],
            children: [
              { id: 'advertising', label: 'Advertising', value: 35.6, notes: ['+27% Y/Y'] },
              { id: 'other_revenue', label: 'Other', value: 0.4, notes: ['+85% Y/Y', 'Payments infrastructure'] },
            ],
          },
          {
            id: 'reality_labs',
            label: 'Reality Labs (RL)',
            value: 0.4,
            notes: ['+30% Y/Y', 'Meta Quest + Spark AR, Horizon'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 6.6 },
        operatingExpenses: {
          total: 16.0,
          items: [
            { id: 'rnd', label: 'R&D', value: 10.0, notes: ['27% of revenue', '(5pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 3.5, notes: ['9% of revenue', '(1pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 2.6, notes: ['7% of revenue', '(4pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 1.8 },
      },
      otherIncome: {
        total: 0.4,
        items: [{ id: 'interest', label: 'Interest', value: 0.4 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 29.8, notes: ['82% margin', '+3pp Y/Y'] },
        operating: {
          id: 'operating_profit',
          label: 'Operating profit',
          value: 13.8,
          notes: ['38% margin', '+13pp Y/Y'],
          items: [
            { id: 'foa_operating_profit', label: 'FoA operating profit', value: 17.7 },
            { id: 'rl_operating_loss', label: 'RL operating loss', value: -3.8 },
          ],
        },
        net: { id: 'net_profit', label: 'Net profit', value: 12.4, notes: ['34% margin', '+14pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第一季度',
          periodNote: '截至 2024 年 3 月',
          revenue: {
            notes: ['同比 +27%'],
            items: [
              {
                id: 'family_of_apps',
                label: '应用家族（FoA）',
                notes: ['同比 +27%'],
                children: [
                  { id: 'advertising', label: '广告', notes: ['同比 +27%'] },
                  { id: 'other_revenue', label: '其他', notes: ['同比 +85%', '支付基础设施'] },
                ],
              },
              {
                id: 'reality_labs',
                label: 'Reality Labs（RL）',
                notes: ['同比 +30%', 'Meta Quest + Spark AR、Horizon'],
              },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 27%', '同比 (5 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 9%', '同比 (1 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 7%', '同比 (4 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'interest', label: '利息收入' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 82%', '同比 +3 个百分点'] },
            operating: {
              label: '营业利润',
              notes: ['利润率 38%', '同比 +13 个百分点'],
              items: [
                { id: 'foa_operating_profit', label: 'FoA 营业利润' },
                { id: 'rl_operating_loss', label: 'RL 营业亏损' },
              ],
            },
            net: { label: '净利润', notes: ['利润率 34%', '同比 +14 个百分点'] },
          },
        },
      },
    },
    {
      key: 'meta-q2-fy24',
      company: 'Meta',
      period: 'Q2 FY24',
      periodNote: 'Ending Jun. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/meta-q2-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 39.1,
        notes: ['+22% Y/Y'],
        items: [
          {
            id: 'family_of_apps',
            label: 'Family of Apps (FoA)',
            value: 38.7,
            notes: ['+22% Y/Y'],
            children: [
              { id: 'advertising', label: 'Advertising', value: 38.3, notes: ['+22% Y/Y'] },
              { id: 'other_revenue', label: 'Other', value: 0.4, notes: ['+73% Y/Y', 'Payments infrastructure'] },
            ],
          },
          {
            id: 'reality_labs',
            label: 'Reality Labs (RL)',
            value: 0.4,
            notes: ['+28% Y/Y', 'Meta Quest; Spark AR; Horizon'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 7.3 },
        operatingExpenses: {
          total: 16.9,
          items: [
            { id: 'rnd', label: 'R&D', value: 10.5, notes: ['27% of revenue', '(2pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 3.7, notes: ['9% of revenue', '(4pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 2.7, notes: ['7% of revenue', '(3pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 1.6 },
      },
      otherIncome: {
        total: 0.3,
        items: [{ id: 'interest', label: 'Interest', value: 0.3 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross Profit', value: 31.8, notes: ['81% margin', '(0pp) Y/Y'] },
        operating: {
          id: 'operating_profit',
          label: 'Operating profit',
          value: 14.8,
          notes: ['38% margin', '+9pp Y/Y'],
          items: [
            { id: 'foa_operating_profit', label: 'FoA operating profit', value: 19.3 },
            { id: 'reality_labs_operating_loss', label: 'RL operating loss', value: -4.5 },
          ],
        },
        net: { id: 'net_profit', label: 'Net profit', value: 13.5, notes: ['34% margin', '+10pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第二季度',
          periodNote: '截至 2024 年 6 月',
          revenue: {
            notes: ['同比 +22%'],
            items: [
              {
                id: 'family_of_apps',
                label: '应用家族（FoA）',
                notes: ['同比 +22%'],
                children: [
                  { id: 'advertising', label: '广告', notes: ['同比 +22%'] },
                  { id: 'other_revenue', label: '其他', notes: ['同比 +73%', '支付基础设施'] },
                ],
              },
              {
                id: 'reality_labs',
                label: 'Reality Labs（RL）',
                notes: ['同比 +28%', 'Meta Quest；Spark AR；Horizon'],
              },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 27%', '同比 (2 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 9%', '同比 (4 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 7%', '同比 (3 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'interest', label: '利息收入' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 81%', '同比 (0 个百分点)'] },
            operating: {
              label: '营业利润',
              notes: ['利润率 38%', '同比 +9 个百分点'],
              items: [
                { id: 'foa_operating_profit', label: 'FoA 营业利润' },
                { id: 'reality_labs_operating_loss', label: 'RL 营业亏损' },
              ],
            },
            net: { label: '净利润', notes: ['利润率 34%', '同比 +10 个百分点'] },
          },
        },
      },
    }
  );
})(window);
