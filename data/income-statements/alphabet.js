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
      key: 'alphabet-q2-fy24',
      company: 'Alphabet',
      period: 'Q2 FY24',
      periodNote: 'Ending Jun. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/alphabet-q2-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 84.7,
        notes: ['+14% Y/Y'],
        items: [
          {
            id: 'ad_revenue',
            label: 'Ad Revenue',
            value: 64.6,
            notes: ['+11% Y/Y'],
            children: [
              { id: 'search_advertising', label: 'Search advertising', value: 48.5, notes: ['+14% Y/Y'] },
              { id: 'youtube', label: 'YouTube', value: 8.7, notes: ['+13% Y/Y'] },
              {
                id: 'google_admob',
                label: 'Google AdMob',
                value: 7.4,
                notes: ['(5%) Y/Y', 'AdSense & Google Ad Manager'],
              },
            ],
          },
          {
            id: 'google_play_devices',
            label: 'Google Play, devices, and subscriptions',
            value: 9.3,
            notes: ['+14% Y/Y', 'Fitbit, Google Nest, Pixel, YouTube Premium & TV'],
          },
          {
            id: 'google_cloud',
            label: 'Google Cloud',
            value: 10.3,
            notes: ['+29% Y/Y', 'Workspace, Enterprise Android, Chrome OS, Other APIs'],
          },
          { id: 'other_revenue', label: 'Other', value: 0.5 },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenues',
          value: 35.5,
          items: [
            { id: 'cost_other', label: 'Other', value: 22.1 },
            { id: 'tac', label: 'TAC', value: 13.4 },
          ],
        },
        operatingExpenses: {
          total: 21.8,
          notes: ['Source chart operating-expense detail sums to $21.9B due to rounding.'],
          items: [
            { id: 'rnd', label: 'R&D', value: 11.9, notes: ['14% of revenue', '(0pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 6.8, notes: ['8% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 3.2, notes: ['4% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 3.9 },
      },
      otherIncome: {
        total: 0.1,
        items: [{ id: 'other_income', label: 'Other', value: 0.1 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 49.2, notes: ['58% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 27.4, notes: ['32% margin', '+3pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 23.6, notes: ['28% margin', '+3pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第二季度',
          periodNote: '截至 2024 年 6 月',
          revenue: {
            notes: ['同比 +14%'],
            items: [
              {
                id: 'ad_revenue',
                label: '广告收入',
                notes: ['同比 +11%'],
                children: [
                  { id: 'search_advertising', label: '搜索广告', notes: ['同比 +14%'] },
                  { id: 'youtube', label: 'YouTube', notes: ['同比 +13%'] },
                  { id: 'google_admob', label: 'Google AdMob', notes: ['同比 (5%)', 'AdSense 与 Google 广告管理平台'] },
                ],
              },
              { id: 'google_play_devices', label: 'Google Play、设备与订阅', notes: ['同比 +14%', 'Fitbit、Google Nest、Pixel、YouTube Premium 与电视'] },
              { id: 'google_cloud', label: 'Google Cloud', notes: ['同比 +29%', 'Workspace、企业 Android、Chrome OS 与其他 API'] },
              { id: 'other_revenue', label: '其他' },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [
                { id: 'cost_other', label: '其他' },
                { id: 'tac', label: '流量获取成本' },
              ],
            },
            operatingExpenses: {
              notes: ['来源图运营费用明细因四舍五入合计为 $21.9B。'],
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 14%', '同比 (0 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 8%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 4%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'other_income', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 58%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 32%', '同比 +3 个百分点'] },
            net: { label: '净利润', notes: ['利润率 28%', '同比 +3 个百分点'] },
          },
        },
      },
    },
    {
      key: 'alphabet-q1-fy24',
      company: 'Alphabet',
      period: 'Q1 FY24',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/alphabet-q1-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 80.5,
        notes: ['+15% Y/Y'],
        items: [
          {
            id: 'ad_revenue',
            label: 'Ad Revenue',
            value: 61.6,
            notes: ['+13% Y/Y'],
            children: [
              { id: 'search_advertising', label: 'Search advertising', value: 46.1, notes: ['+14% Y/Y'] },
              { id: 'youtube', label: 'YouTube', value: 8.1, notes: ['+21% Y/Y'] },
              {
                id: 'google_admob',
                label: 'Google AdMob',
                value: 7.4,
                notes: ['(1%) Y/Y', 'AdSense & Google Ad Manager'],
              },
            ],
          },
          {
            id: 'google_play_devices',
            label: 'Google Play, devices, and subscriptions',
            value: 8.7,
            notes: ['+18% Y/Y', 'Fitbit, Google Nest, Pixel, YouTube Premium & TV'],
          },
          {
            id: 'google_cloud',
            label: 'Google Cloud',
            value: 9.6,
            notes: ['+28% Y/Y', 'Workspace, Enterprise Android, Chrome OS, Other APIs'],
          },
          { id: 'other_revenue', label: 'Other', value: 0.6 },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenues',
          value: 33.7,
          items: [
            { id: 'cost_other', label: 'Other', value: 20.8 },
            { id: 'tac', label: 'TAC', value: 12.9 },
          ],
        },
        operatingExpenses: {
          total: 21.4,
          notes: ['Source chart operating-expense detail sums to $21.3B due to rounding.'],
          items: [
            { id: 'rnd', label: 'R&D', value: 11.9, notes: ['15% of revenue', '(2pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 6.4, notes: ['8% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 3.0, notes: ['4% of revenue', '(2pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 4.7 },
      },
      otherIncome: {
        total: 2.8,
        items: [{ id: 'other_income', label: 'Other', value: 2.8 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 46.8, notes: ['58% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 25.5, notes: ['32% margin', '+7pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 23.7, notes: ['29% margin', '+8pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第一季度',
          revenue: {
            notes: ['同比 +15%'],
            items: [
              {
                id: 'ad_revenue', label: '广告收入', notes: ['同比 +13%'],
                children: [
                  { id: 'search_advertising', label: '搜索广告', notes: ['同比 +14%'] },
                  { id: 'youtube', label: 'YouTube', notes: ['同比 +21%'] },
                  { id: 'google_admob', label: 'Google AdMob', notes: ['同比 (1%)', 'AdSense 与 Google 广告管理平台'] },
                ],
              },
              { id: 'google_play_devices', label: 'Google Play、设备与订阅', notes: ['同比 +18%', 'Fitbit、Google Nest、Pixel、YouTube Premium 与电视'] },
              { id: 'google_cloud', label: 'Google Cloud', notes: ['同比 +28%', 'Workspace、企业 Android、Chrome OS 与其他 API'] },
              { id: 'other_revenue', label: '其他' },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [
                { id: 'cost_other', label: '其他' },
                { id: 'tac', label: '流量获取成本' },
              ],
            },
            operatingExpenses: {
              notes: ['来源图运营费用明细因四舍五入合计为 $21.3B。'],
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 15%', '同比 (2 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 8%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 4%', '同比 (2 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 58%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 32%', '同比 +7 个百分点'] },
            net: { label: '净利润', notes: ['利润率 29%', '同比 +8 个百分点'] },
          },
        },
      },
    },
    {
      key: 'alphabet-q3-fy24',
      company: 'Alphabet',
      period: 'Q3 FY24',
      periodNote: 'Ending Sep. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/alphabet-q3-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 88.3,
        notes: [
          '+15% Y/Y',
          'Source chart revenue items sum to $88.4B due to rounding.',
        ],
        items: [
          {
            id: 'ad_revenue',
            label: 'Ad Revenue',
            value: 65.9,
            notes: [
              '+10% Y/Y',
              'Source chart advertising detail sums to $65.8B due to rounding.',
            ],
            children: [
              { id: 'search_advertising', label: 'Search advertising', value: 49.4, notes: ['+12% Y/Y'] },
              { id: 'youtube', label: 'YouTube', value: 8.9, notes: ['+12% Y/Y'] },
              {
                id: 'google_admob',
                label: 'Google AdMob',
                value: 7.5,
                notes: ['(2%) Y/Y', 'AdSense & Google Ad Manager'],
              },
            ],
          },
          {
            id: 'google_play_devices',
            label: 'Google Play, devices, and subscriptions',
            value: 10.7,
            notes: ['+28% Y/Y', 'Fitbit, Google Nest, Pixel, YouTube Premium & TV'],
          },
          {
            id: 'google_cloud',
            label: 'Google Cloud',
            value: 11.4,
            notes: ['+35% Y/Y', 'Workspace, Enterprise Android, Chrome OS, Other APIs'],
          },
          { id: 'other_revenue', label: 'Other', value: 0.4 },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenues',
          value: 36.5,
          items: [
            { id: 'cost_other', label: 'Other', value: 22.8 },
            { id: 'tac', label: 'TAC', value: 13.7 },
          ],
        },
        operatingExpenses: {
          total: 23.3,
          notes: ['Source chart operating-expense detail sums to $23.2B due to rounding.'],
          items: [
            { id: 'rnd', label: 'R&D', value: 12.4, notes: ['14% of revenue', '(1pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 7.2, notes: ['8% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 3.6, notes: ['4% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 5.4 },
      },
      otherIncome: {
        total: 3.2,
        items: [{ id: 'other_income', label: 'Other', value: 3.2 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 51.8, notes: ['59% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 28.5, notes: ['32% margin', '+4pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 26.3, notes: ['30% margin', '+4pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第三季度',
          periodNote: '截至 2024 年 9 月',
          revenue: {
            notes: [
              '同比 +15%',
              '来源图收入项目因四舍五入合计为 $88.4B。',
            ],
            items: [
              {
                id: 'ad_revenue',
                label: '广告收入',
                notes: [
                  '同比 +10%',
                  '来源图广告收入明细因四舍五入合计为 $65.8B。',
                ],
                children: [
                  { id: 'search_advertising', label: '搜索广告', notes: ['同比 +12%'] },
                  { id: 'youtube', label: 'YouTube', notes: ['同比 +12%'] },
                  { id: 'google_admob', label: 'Google AdMob', notes: ['同比 (2%)', 'AdSense 与 Google 广告管理平台'] },
                ],
              },
              { id: 'google_play_devices', label: 'Google Play、设备与订阅', notes: ['同比 +28%', 'Fitbit、Google Nest、Pixel、YouTube Premium 与电视'] },
              { id: 'google_cloud', label: 'Google Cloud', notes: ['同比 +35%', 'Workspace、企业 Android、Chrome OS 与其他 API'] },
              { id: 'other_revenue', label: '其他' },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [
                { id: 'cost_other', label: '其他' },
                { id: 'tac', label: '流量获取成本' },
              ],
            },
            operatingExpenses: {
              notes: ['来源图运营费用明细因四舍五入合计为 $23.2B。'],
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 14%', '同比 (1 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 8%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 4%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 59%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 32%', '同比 +4 个百分点'] },
            net: { label: '净利润', notes: ['利润率 30%', '同比 +4 个百分点'] },
          },
        },
      },
    },
    {
      key: 'alphabet-q1-fy23',
      company: 'Alphabet',
      period: 'Q1 FY23',
      periodNote: 'Ending Mar. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/alphabet-q1-fy23.png',
      roundingTolerance: 0.25,
      revenue: {
        total: 69.8,
        notes: ['+3% Y/Y'],
        items: [
          {
            id: 'ad_revenue',
            label: 'Ad Revenue',
            value: 54.5,
            notes: ['(0%) Y/Y'],
            children: [
              { id: 'search_advertising', label: 'Search advertising', value: 40.3, notes: ['+2% Y/Y'] },
              { id: 'youtube', label: 'YouTube', value: 6.7, notes: ['(3%) Y/Y'] },
              {
                id: 'google_admob',
                label: 'Google AdMob',
                value: 7.5,
                notes: ['(8%) Y/Y', 'AdSense & Google Ad Manager'],
              },
            ],
          },
          {
            id: 'google_play_devices',
            label: 'Google Play, devices, and subscriptions',
            value: 7.4,
            notes: ['+9% Y/Y', 'Fitbit, Google Nest, Pixel, YouTube Premium & TV'],
          },
          {
            id: 'google_cloud',
            label: 'Google Cloud',
            value: 7.5,
            notes: ['+28% Y/Y', 'Workspace, Enterprise Android, Chrome OS, Other APIs'],
          },
          { id: 'other_revenue', label: 'Other', value: 0.4 },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenues',
          value: 30.6,
          items: [
            { id: 'tac', label: 'TAC', value: 11.7 },
            { id: 'cost_other', label: 'Other', value: 18.9 },
          ],
        },
        operatingExpenses: {
          total: 21.8,
          notes: ['Source chart operating-expense detail sums to $21.6B due to rounding.'],
          items: [
            { id: 'rnd', label: 'R&D', value: 11.5, notes: ['16% of revenue'] },
            { id: 'sm', label: 'S&M', value: 6.3, notes: ['9% of revenue'] },
            { id: 'ga', label: 'G&A', value: 3.8, notes: ['5% of revenue'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 3.1 },
      },
      otherIncome: {
        total: 0.8,
        items: [{ id: 'other_income', label: 'Other', value: 0.8 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 39.2, notes: ['56% margin', '(0pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 17.4, notes: ['25% margin', '(5pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 15.1, notes: ['22% margin', '(3pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第一季度',
          periodNote: '截至 2023 年 3 月',
          revenue: {
            notes: ['同比 +3%'],
            items: [
              {
                id: 'ad_revenue', label: '广告收入', notes: ['同比 (0%)'],
                children: [
                  { id: 'search_advertising', label: '搜索广告', notes: ['同比 +2%'] },
                  { id: 'youtube', label: 'YouTube', notes: ['同比 (3%)'] },
                  { id: 'google_admob', label: 'Google AdMob', notes: ['同比 (8%)', 'AdSense 与 Google 广告管理平台'] },
                ],
              },
              { id: 'google_play_devices', label: 'Google Play、设备与订阅', notes: ['同比 +9%', 'Fitbit、Google Nest、Pixel、YouTube Premium 与电视'] },
              { id: 'google_cloud', label: 'Google Cloud', notes: ['同比 +28%', 'Workspace、企业 Android、Chrome OS 与其他 API'] },
              { id: 'other_revenue', label: '其他' },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [
                { id: 'tac', label: '流量获取成本' },
                { id: 'cost_other', label: '其他' },
              ],
            },
            operatingExpenses: {
              notes: ['来源图运营费用明细因四舍五入合计为 $21.6B。'],
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 16%'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 9%'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 5%'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'other_income', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 56%', '同比 (0 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 25%', '同比 (5 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 22%', '同比 (3 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'alphabet-q3-fy22',
      company: 'Alphabet',
      period: 'Q3 FY22',
      periodNote: 'Ending Sep. 2022',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/alphabet-q3-fy22.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 69.1,
        notes: ['+6% Y/Y'],
        items: [
          {
            id: 'ad_revenue',
            label: 'Ad Revenue',
            value: 54.5,
            notes: ['+3% Y/Y'],
            children: [
              { id: 'search_advertising', label: 'Search advertising', value: 39.5, notes: ['+4% Y/Y'] },
              { id: 'youtube', label: 'YouTube', value: 7.1, notes: ['(2%) Y/Y'] },
              {
                id: 'google_admob',
                label: 'Google AdMob',
                value: 7.9,
                notes: ['(2%) Y/Y', 'AdSense & Google Ad Manager'],
              },
            ],
          },
          {
            id: 'google_play_devices',
            label: 'Google Play, devices, and subscriptions',
            value: 6.9,
            notes: ['+2% Y/Y', 'Fitbit, Google Nest, Pixel, YouTube Premium & TV'],
          },
          {
            id: 'google_cloud',
            label: 'Google Cloud',
            value: 6.9,
            notes: ['+38% Y/Y', 'Workspace, Enterprise Android, Chrome OS, Other APIs'],
          },
          { id: 'other_revenue', label: 'Other', value: 0.8 },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenues',
          value: 31.2,
          notes: ['Source chart cost-of-revenues detail sums to $31.1B due to rounding.'],
          items: [
            { id: 'cost_other', label: 'Others', value: 19.3 },
            { id: 'tac', label: 'TAC', value: 11.8 },
          ],
        },
        operatingExpenses: {
          total: 20.8,
          items: [
            { id: 'rnd', label: 'R&D', value: 10.3 },
            { id: 'sm', label: 'S&M', value: 6.9 },
            { id: 'ga', label: 'G&A', value: 3.6 },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 2.3 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.9,
        items: [{ id: 'other_expense', label: 'Other', value: 0.9 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross Profit', value: 37.9, notes: ['55% margin', '(3pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 17.1, notes: ['25% margin', '(7pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 13.9, notes: ['20% margin', '(9pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2022 财年第三季度',
          periodNote: '截至 2022 年 9 月',
          revenue: {
            notes: ['同比 +6%'],
            items: [
              {
                id: 'ad_revenue', label: '广告收入', notes: ['同比 +3%'],
                children: [
                  { id: 'search_advertising', label: '搜索广告', notes: ['同比 +4%'] },
                  { id: 'youtube', label: 'YouTube', notes: ['同比 (2%)'] },
                  { id: 'google_admob', label: 'Google AdMob', notes: ['同比 (2%)', 'AdSense 与 Google 广告管理平台'] },
                ],
              },
              { id: 'google_play_devices', label: 'Google Play、设备与订阅', notes: ['同比 +2%', 'Fitbit、Google Nest、Pixel、YouTube Premium 与电视'] },
              { id: 'google_cloud', label: 'Google Cloud', notes: ['同比 +38%', 'Workspace、企业 Android、Chrome OS 与其他 API'] },
              { id: 'other_revenue', label: '其他' },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              notes: ['来源图收入成本明细因四舍五入合计为 $31.1B。'],
              items: [
                { id: 'cost_other', label: '其他' },
                { id: 'tac', label: '流量获取成本' },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发' },
                { id: 'sm', label: '销售与市场' },
                { id: 'ga', label: '管理费用' },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [{ id: 'other_expense', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 55%', '同比 (3 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 25%', '同比 (7 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 20%', '同比 (9 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'alphabet-q4-fy23',
      company: 'Alphabet',
      period: 'Q4 FY23',
      periodNote: 'Ending Dec. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/alphabet-q4-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 86.3,
        notes: ['+13% Y/Y'],
        items: [
          {
            id: 'ad_revenue',
            label: 'Ad Revenue',
            value: 65.5,
            notes: ['+11% Y/Y'],
            children: [
              { id: 'search_advertising', label: 'Search advertising', value: 48.0, notes: ['+13% Y/Y'] },
              { id: 'youtube', label: 'YouTube', value: 9.2, notes: ['+16% Y/Y'] },
              {
                id: 'google_admob',
                label: 'Google AdMob',
                value: 8.3,
                notes: ['(20%) Y/Y', 'AdSense & Google Ad Manager'],
              },
            ],
          },
          {
            id: 'google_play_devices',
            label: 'Google Play, devices, and subscriptions',
            value: 10.8,
            notes: ['+23% Y/Y', 'Fitbit, Google Nest, Pixel, YouTube Premium & TV'],
          },
          {
            id: 'google_cloud',
            label: 'Google Cloud',
            value: 9.2,
            notes: ['+26% Y/Y', 'Workspace, Enterprise Android, Chrome OS, Other APIs'],
          },
          { id: 'other_revenue', label: 'Other', value: 0.8 },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenues',
          value: 37.6,
          items: [
            { id: 'cost_other', label: 'Other', value: 23.6 },
            { id: 'tac', label: 'TAC', value: 14.0 },
          ],
        },
        operatingExpenses: {
          total: 25.0,
          items: [
            { id: 'rnd', label: 'R&D', value: 12.1, notes: ['14% of revenue'] },
            { id: 'sm', label: 'S&M', value: 7.7, notes: ['9% of revenue'] },
            { id: 'ga', label: 'G&A', value: 5.2, notes: ['6% of revenue'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 3.7 },
      },
      otherIncome: {
        total: 0.7,
        items: [{ id: 'other_income', label: 'Other', value: 0.7 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 48.7, notes: ['56% margin', '+3pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 23.7, notes: ['27% margin', '+4pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 20.7, notes: ['24% margin', '+6pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第四季度',
          periodNote: '截至 2023 年 12 月',
          revenue: {
            notes: ['同比 +13%'],
            items: [
              {
                id: 'ad_revenue', label: '广告收入', notes: ['同比 +11%'],
                children: [
                  { id: 'search_advertising', label: '搜索广告', notes: ['同比 +13%'] },
                  { id: 'youtube', label: 'YouTube', notes: ['同比 +16%'] },
                  { id: 'google_admob', label: 'Google AdMob', notes: ['同比 (20%)', 'AdSense 与 Google 广告管理平台'] },
                ],
              },
              { id: 'google_play_devices', label: 'Google Play、设备与订阅', notes: ['同比 +23%', 'Fitbit、Google Nest、Pixel、YouTube Premium 与电视'] },
              { id: 'google_cloud', label: 'Google Cloud', notes: ['同比 +26%', 'Workspace、企业 Android、Chrome OS 与其他 API'] },
              { id: 'other_revenue', label: '其他' },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [
                { id: 'cost_other', label: '其他' },
                { id: 'tac', label: '流量获取成本' },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 14%'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 9%'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 6%'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 56%', '同比 +3 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 27%', '同比 +4 个百分点'] },
            net: { label: '净利润', notes: ['利润率 24%', '同比 +6 个百分点'] },
          },
        },
      },
    },
    {
      key: 'alphabet-q2-fy23',
      company: 'Alphabet',
      period: 'Q2 FY23',
      periodNote: 'Ending Jun. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/alphabet-q2-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 74.6,
        notes: ['+7% Y/Y'],
        items: [
          {
            id: 'ad_revenue',
            label: 'Ad Revenue',
            value: 58.1,
            notes: ['+3% Y/Y', 'Source chart advertising detail sums to $58.2B due to rounding.'],
            children: [
              { id: 'search_advertising', label: 'Search advertising', value: 42.6, notes: ['+5% Y/Y'] },
              { id: 'youtube', label: 'YouTube', value: 7.7, notes: ['+4% Y/Y'] },
              {
                id: 'google_admob',
                label: 'Google AdMob',
                value: 7.9,
                notes: ['(5%) Y/Y', 'AdSense & Google Ad Manager'],
              },
            ],
          },
          {
            id: 'google_play_devices',
            label: 'Google Play, devices, and subscriptions',
            value: 8.1,
            notes: ['+24% Y/Y', 'Fitbit, Google Nest, Pixel, YouTube Premium & TV'],
          },
          {
            id: 'google_cloud',
            label: 'Google Cloud',
            value: 8.0,
            notes: ['+28% Y/Y', 'Workspace, Enterprise Android, Chrome OS, Other APIs'],
          },
          { id: 'other_revenue', label: 'Other', value: 0.3 },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenues',
          value: 31.9,
          items: [
            { id: 'cost_other', label: 'Other', value: 19.4 },
            { id: 'tac', label: 'TAC', value: 12.5 },
          ],
        },
        operatingExpenses: {
          total: 20.9,
          items: [
            { id: 'rnd', label: 'R&D', value: 10.6, notes: ['14% of revenue'] },
            { id: 'sm', label: 'S&M', value: 6.8, notes: ['9% of revenue'] },
            { id: 'ga', label: 'G&A', value: 3.5, notes: ['5% of revenue'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 3.5 },
      },
      otherIncome: {
        total: 0.1,
        items: [{ id: 'other_income', label: 'Other', value: 0.1 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 42.7, notes: ['57% margin', '+0pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 21.8, notes: ['29% margin', '+1pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 18.4, notes: ['25% margin', '+2pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第二季度',
          periodNote: '截至 2023 年 6 月',
          revenue: {
            notes: ['同比 +7%'],
            items: [
              {
                id: 'ad_revenue', label: '广告收入', notes: ['同比 +3%', '来源图广告收入明细因四舍五入合计为 $58.2B。'],
                children: [
                  { id: 'search_advertising', label: '搜索广告', notes: ['同比 +5%'] },
                  { id: 'youtube', label: 'YouTube', notes: ['同比 +4%'] },
                  { id: 'google_admob', label: 'Google AdMob', notes: ['同比 (5%)', 'AdSense 与 Google 广告管理平台'] },
                ],
              },
              { id: 'google_play_devices', label: 'Google Play、设备与订阅', notes: ['同比 +24%', 'Fitbit、Google Nest、Pixel、YouTube Premium 与电视'] },
              { id: 'google_cloud', label: 'Google Cloud', notes: ['同比 +28%', 'Workspace、企业 Android、Chrome OS 与其他 API'] },
              { id: 'other_revenue', label: '其他' },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [
                { id: 'cost_other', label: '其他' },
                { id: 'tac', label: '流量获取成本' },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 14%'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 9%'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 5%'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 57%', '同比 +0 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 29%', '同比 +1 个百分点'] },
            net: { label: '净利润', notes: ['利润率 25%', '同比 +2 个百分点'] },
          },
        },
      },
    },
    {
      key: 'alphabet-q1-fy25',
      company: 'Alphabet',
      period: 'Q1 FY25',
      periodNote: 'Ending Mar. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/alphabet-q1-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 90.2,
        notes: ['+12% Y/Y'],
        items: [
          {
            id: 'ad_revenue',
            label: 'Ad Revenue',
            value: 66.9,
            notes: ['+8% Y/Y'],
            children: [
              { id: 'search_advertising', label: 'Search advertising', value: 50.7, notes: ['+10% Y/Y'] },
              { id: 'youtube', label: 'YouTube', value: 8.9, notes: ['+10% Y/Y'] },
              {
                id: 'google_admob',
                label: 'Google AdMob',
                value: 7.3,
                notes: ['(2%) Y/Y', 'AdSense & Google Ad Manager'],
              },
            ],
          },
          {
            id: 'google_play_devices',
            label: 'Google Play, devices, and subscriptions',
            value: 10.4,
            notes: ['+19% Y/Y', 'Fitbit, Google Nest, Pixel, YouTube Premium & TV'],
          },
          {
            id: 'google_cloud',
            label: 'Google Cloud',
            value: 12.3,
            notes: ['+28% Y/Y', 'Workspace, Enterprise Android, Chrome OS, Other APIs'],
          },
          { id: 'other_revenue', label: 'Other', value: 0.7 },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenues',
          value: 36.4,
          notes: ['Source chart cost-of-revenues detail sums to $36.3B due to rounding.'],
          items: [
            { id: 'cost_other', label: 'Other', value: 22.6 },
            { id: 'tac', label: 'TAC', value: 13.7 },
          ],
        },
        operatingExpenses: {
          total: 23.3,
          items: [
            { id: 'rnd', label: 'R&D', value: 13.6, notes: ['15% of revenue', '+0pp Y/Y'] },
            { id: 'sm', label: 'S&M', value: 6.2, notes: ['7% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 3.5, notes: ['4% of revenue', '+0pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 7.2 },
      },
      otherIncome: {
        total: 11.1,
        items: [{ id: 'other_income', label: 'Other', value: 11.1 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 53.9, notes: ['60% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 30.6, notes: ['34% margin', '+2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 34.5, notes: ['38% margin', '+9pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第一季度',
          periodNote: '截至 2025 年 3 月',
          revenue: {
            notes: ['同比 +12%'],
            items: [
              {
                id: 'ad_revenue', label: '广告收入', notes: ['同比 +8%'],
                children: [
                  { id: 'search_advertising', label: '搜索广告', notes: ['同比 +10%'] },
                  { id: 'youtube', label: 'YouTube', notes: ['同比 +10%'] },
                  { id: 'google_admob', label: 'Google AdMob', notes: ['同比 (2%)', 'AdSense 与 Google 广告管理平台'] },
                ],
              },
              { id: 'google_play_devices', label: 'Google Play、设备与订阅', notes: ['同比 +19%', 'Fitbit、Google Nest、Pixel、YouTube Premium 与电视'] },
              { id: 'google_cloud', label: 'Google Cloud', notes: ['同比 +28%', 'Workspace、企业 Android、Chrome OS 与其他 API'] },
              { id: 'other_revenue', label: '其他' },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              notes: ['来源图收入成本明细因四舍五入合计为 $36.3B。'],
              items: [
                { id: 'cost_other', label: '其他' },
                { id: 'tac', label: '流量获取成本' },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 15%', '同比 +0 个百分点'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 7%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 4%', '同比 +0 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'other_income', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 60%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 34%', '同比 +2 个百分点'] },
            net: { label: '净利润', notes: ['利润率 38%', '同比 +9 个百分点'] },
          },
        },
      },
    },
    {
      key: 'alphabet-q1-fy26',
      company: 'Alphabet',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/alphabet-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 109.9,
        notes: ['+22% Y/Y'],
        items: [
          {
            id: 'ad_revenue',
            label: 'Ad Revenue',
            value: 77.3,
            notes: ['+16% Y/Y'],
            children: [
              { id: 'search_advertising', label: 'Search advertising', value: 60.4, notes: ['+19% Y/Y'] },
              { id: 'youtube', label: 'YouTube', value: 9.9, notes: ['+11% Y/Y'] },
              {
                id: 'google_admob',
                label: 'Google AdMob',
                value: 7.0,
                notes: ['(4%) Y/Y', 'AdSense & Google Ad Manager'],
              },
            ],
          },
          {
            id: 'google_play_devices',
            label: 'Google Play, devices, and subscriptions',
            value: 12.4,
            notes: ['+19% Y/Y', 'Fitbit, Google Nest, Pixel, YouTube Premium & TV'],
          },
          {
            id: 'google_cloud',
            label: 'Google Cloud',
            value: 20.0,
            notes: ['+63% Y/Y', 'Workspace, Enterprise Android, Chrome OS, Other APIs'],
          },
          { id: 'other_revenue', label: 'Other', value: 0.2 },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenues',
          value: 41.3,
          notes: ['Source chart cost-of-revenues detail sums to $41.2B due to rounding.'],
          items: [
            { id: 'cost_other', label: 'Other', value: 26.0 },
            { id: 'tac', label: 'TAC', value: 15.2 },
          ],
        },
        operatingExpenses: {
          total: 28.9,
          items: [
            { id: 'rnd', label: 'R&D', value: 17.0, notes: ['15% of revenue', '+0pp Y/Y'] },
            { id: 'sm', label: 'S&M', value: 7.6, notes: ['7% of revenue', '+0pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 4.3, notes: ['4% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 14.8 },
      },
      otherIncome: {
        total: 37.7,
        items: [{ id: 'other_income', label: 'Other', value: 37.7 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 68.6, notes: ['62% margin', '+3pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 39.7, notes: ['36% margin', '+2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 62.6, notes: ['57% margin', '+19pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          revenue: {
            notes: ['同比 +22%'],
            items: [
              {
                id: 'ad_revenue', label: '广告收入', notes: ['同比 +16%'],
                children: [
                  { id: 'search_advertising', label: '搜索广告', notes: ['同比 +19%'] },
                  { id: 'youtube', label: 'YouTube', notes: ['同比 +11%'] },
                  { id: 'google_admob', label: 'Google AdMob', notes: ['同比 (4%)', 'AdSense 与 Google 广告管理平台'] },
                ],
              },
              { id: 'google_play_devices', label: 'Google Play、设备与订阅', notes: ['同比 +19%', 'Fitbit、Google Nest、Pixel、YouTube Premium 与电视'] },
              { id: 'google_cloud', label: 'Google Cloud', notes: ['同比 +63%', 'Workspace、企业 Android、Chrome OS 与其他 API'] },
              { id: 'other_revenue', label: '其他' },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              notes: ['来源图收入成本明细因四舍五入合计为 $41.2B。'],
              items: [
                { id: 'cost_other', label: '其他' },
                { id: 'tac', label: '流量获取成本' },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 15%', '同比 +0 个百分点'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 7%', '同比 +0 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 4%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'other_income', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 62%', '同比 +3 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 36%', '同比 +2 个百分点'] },
            net: { label: '净利润', notes: ['利润率 57%', '同比 +19 个百分点'] },
          },
        },
      },
    },
    {
      key: 'alphabet-q2-fy26',
      company: 'Alphabet',
      period: 'Q2 FY26',
      periodNote: 'Ending Jun. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/alphabet-q2-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 119.8,
        notes: ['+24% Y/Y'],
        items: [
          {
            id: 'ad_revenue',
            label: 'Ad Revenue',
            value: 81.6,
            notes: ['+14% Y/Y', 'Source chart advertising detail sums to $81.7B due to rounding.'],
            children: [
              { id: 'search_advertising', label: 'Search advertising', value: 63.3, notes: ['+17% Y/Y'] },
              { id: 'youtube', label: 'YouTube', value: 11.1, notes: ['+13% Y/Y'] },
              {
                id: 'google_admob',
                label: 'Google AdMob',
                value: 7.3,
                notes: ['(1%) Y/Y', 'AdSense & Google Ad Manager'],
              },
            ],
          },
          {
            id: 'google_play_devices',
            label: 'Google Play, devices, and subscriptions',
            value: 12.9,
            notes: ['+15% Y/Y', 'Fitbit, Google Nest, Pixel, YouTube Premium & TV'],
          },
          {
            id: 'google_cloud',
            label: 'Google Cloud',
            value: 24.8,
            notes: ['+82% Y/Y', 'Workspace, Enterprise Android, Chrome OS, Other APIs'],
          },
          { id: 'other_revenue', label: 'Other', value: 0.5 },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenues',
          value: 45.9,
          items: [
            { id: 'cost_other', label: 'Other', value: 29.8 },
            { id: 'tac', label: 'TAC', value: 16.1 },
          ],
        },
        operatingExpenses: {
          total: 33.1,
          items: [
            { id: 'rnd', label: 'R&D', value: 18.2, notes: ['15% of revenue', '+1pp Y/Y'] },
            { id: 'sm', label: 'S&M', value: 8.4, notes: ['7% of revenue', '(0pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 6.5, notes: ['5% of revenue', '(0pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 26.6 },
      },
      otherIncome: {
        total: 98.0,
        items: [{ id: 'investment_gains', label: 'Investment gains', value: 98.0 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 73.9, notes: ['62% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 40.8, notes: ['34% margin', '+2pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 112.2 },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月',
          revenue: {
            notes: ['同比 +24%'],
            items: [
              {
                id: 'ad_revenue', label: '广告收入', notes: ['同比 +14%', '来源图广告明细因四舍五入合计为 $81.7B。'],
                children: [
                  { id: 'search_advertising', label: '搜索广告', notes: ['同比 +17%'] },
                  { id: 'youtube', label: 'YouTube', notes: ['同比 +13%'] },
                  { id: 'google_admob', label: 'Google AdMob', notes: ['同比 (1%)', 'AdSense 与 Google 广告管理平台'] },
                ],
              },
              { id: 'google_play_devices', label: 'Google Play、设备与订阅', notes: ['同比 +15%', 'Fitbit、Google Nest、Pixel、YouTube Premium 与电视'] },
              { id: 'google_cloud', label: 'Google Cloud', notes: ['同比 +82%', 'Workspace、企业 Android、Chrome OS 与其他 API'] },
              { id: 'other_revenue', label: '其他' },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [
                { id: 'cost_other', label: '其他' },
                { id: 'tac', label: '流量获取成本' },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 15%', '同比 +1 个百分点'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 7%', '同比 (0 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 5%', '同比 (0 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'investment_gains', label: '投资收益' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 62%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 34%', '同比 +2 个百分点'] },
            net: { label: '净利润' },
          },
        },
      },
    },
    {
      key: 'alphabet-q2-fy25',
      company: 'Alphabet',
      period: 'Q2 FY25',
      periodNote: 'Ending Jun. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/alphabet-q2-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 96.4,
        notes: ['+14% Y/Y'],
        items: [
          {
            id: 'ad_revenue',
            label: 'Ad Revenue',
            value: 71.3,
            notes: ['+10% Y/Y'],
            children: [
              { id: 'search_advertising', label: 'Search advertising', value: 54.2, notes: ['+12% Y/Y'] },
              { id: 'youtube', label: 'YouTube', value: 9.8, notes: ['+13% Y/Y'] },
              {
                id: 'google_admob',
                label: 'Google AdMob',
                value: 7.4,
                notes: ['(1%) Y/Y', 'AdSense & Google Ad Manager'],
              },
            ],
          },
          {
            id: 'google_play_devices',
            label: 'Google Play, devices, and subscriptions',
            value: 11.2,
            notes: ['+20% Y/Y', 'Fitbit, Google Nest, Pixel, YouTube Premium & TV'],
          },
          {
            id: 'google_cloud',
            label: 'Google Cloud',
            value: 13.6,
            notes: ['+32% Y/Y', 'Workspace, Enterprise Android, Chrome OS, Other APIs'],
          },
          { id: 'other_revenue', label: 'Other', value: 0.3 },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenues',
          value: 39.0,
          items: [
            { id: 'cost_other', label: 'Other', value: 24.3 },
            { id: 'tac', label: 'TAC', value: 14.7 },
          ],
        },
        operatingExpenses: {
          total: 26.1,
          items: [
            { id: 'rnd', label: 'R&D', value: 13.8, notes: ['14% of revenue', '+0pp Y/Y'] },
            { id: 'sm', label: 'S&M', value: 7.1, notes: ['7% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 5.2, notes: ['5% of revenue', '+2pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 5.7 },
      },
      otherIncome: {
        total: 2.7,
        items: [{ id: 'other_income', label: 'Other', value: 2.7 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 57.4, notes: ['60% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 31.3, notes: ['32% margin', '+0pp Y/Y'] },
        net: {
          id: 'net_profit',
          label: 'Net profit',
          value: 28.2,
          notes: ['29% margin', '+1pp Y/Y', 'Source chart bridge differs by $0.1B due to rounding.'],
        },
      },
      i18n: {
        zh: {
          period: '2025 财年第二季度',
          periodNote: '截至 2025 年 6 月',
          revenue: {
            notes: ['同比 +14%'],
            items: [
              {
                id: 'ad_revenue', label: '广告收入', notes: ['同比 +10%'],
                children: [
                  { id: 'search_advertising', label: '搜索广告', notes: ['同比 +12%'] },
                  { id: 'youtube', label: 'YouTube', notes: ['同比 +13%'] },
                  { id: 'google_admob', label: 'Google AdMob', notes: ['同比 (1%)', 'AdSense 与 Google 广告管理平台'] },
                ],
              },
              { id: 'google_play_devices', label: 'Google Play、设备与订阅', notes: ['同比 +20%', 'Fitbit、Google Nest、Pixel、YouTube Premium 与电视'] },
              { id: 'google_cloud', label: 'Google Cloud', notes: ['同比 +32%', 'Workspace、企业 Android、Chrome OS 与其他 API'] },
              { id: 'other_revenue', label: '其他' },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [
                { id: 'cost_other', label: '其他' },
                { id: 'tac', label: '流量获取成本' },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 14%', '同比 +0 个百分点'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 7%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 5%', '同比 +2 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'other_income', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 60%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 32%', '同比 +0 个百分点'] },
            net: {
              label: '净利润',
              notes: ['利润率 29%', '同比 +1 个百分点', '来源图桥接因四舍五入相差 $0.1B。'],
            },
          },
        },
      },
    },
    {
      key: 'alphabet-q4-fy25',
      company: 'Alphabet',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/alphabet-q4-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 113.8,
        notes: ['+18% Y/Y'],
        items: [
          {
            id: 'ad_revenue',
            label: 'Ad Revenue',
            value: 82.3,
            notes: ['+14% Y/Y'],
            children: [
              { id: 'search_advertising', label: 'Search advertising', value: 63.1, notes: ['+17% Y/Y'] },
              { id: 'youtube', label: 'YouTube', value: 11.4, notes: ['+9% Y/Y'] },
              {
                id: 'google_admob',
                label: 'Google AdMob',
                value: 7.8,
                notes: ['(2%) Y/Y', 'AdSense & Google Ad Manager'],
              },
            ],
          },
          {
            id: 'google_play_devices',
            label: 'Google Play, devices, and subscriptions',
            value: 13.6,
            notes: ['+17% Y/Y', 'Fitbit, Google Nest, Pixel, YouTube Premium & TV'],
          },
          {
            id: 'google_cloud',
            label: 'Google Cloud',
            value: 17.7,
            notes: ['+48% Y/Y', 'Workspace, Enterprise Android, Chrome OS, Other APIs'],
          },
          { id: 'other_revenue', label: 'Other', value: 0.3 },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenues',
          value: 45.8,
          items: [
            { id: 'cost_other', label: 'Other', value: 29.2 },
            { id: 'tac', label: 'TAC', value: 16.6 },
          ],
        },
        operatingExpenses: {
          total: 32.1,
          items: [
            { id: 'rnd', label: 'R&D', value: 18.6, notes: ['16% of revenue', '+3pp Y/Y'] },
            { id: 'sm', label: 'S&M', value: 8.2, notes: ['7% of revenue', '(0pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 5.3, notes: ['5% of revenue', '+0pp Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 4.7 },
      },
      otherIncome: {
        total: 3.2,
        items: [{ id: 'other_income', label: 'Other', value: 3.2 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 68.1, notes: ['60% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 35.9, notes: ['32% margin', '(1pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 34.5, notes: ['30% margin', '+3pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          revenue: {
            notes: ['同比 +18%'],
            items: [
              {
                id: 'ad_revenue', label: '广告收入', notes: ['同比 +14%'],
                children: [
                  { id: 'search_advertising', label: '搜索广告', notes: ['同比 +17%'] },
                  { id: 'youtube', label: 'YouTube', notes: ['同比 +9%'] },
                  { id: 'google_admob', label: 'Google AdMob', notes: ['同比 (2%)', 'AdSense 与 Google 广告管理平台'] },
                ],
              },
              { id: 'google_play_devices', label: 'Google Play、设备与订阅', notes: ['同比 +17%', 'Fitbit、Google Nest、Pixel、YouTube Premium 与电视'] },
              { id: 'google_cloud', label: 'Google Cloud', notes: ['同比 +48%', 'Workspace、企业 Android、Chrome OS 与其他 API'] },
              { id: 'other_revenue', label: '其他' },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [
                { id: 'cost_other', label: '其他' },
                { id: 'tac', label: '流量获取成本' },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 16%', '同比 +3 个百分点'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 7%', '同比 (0 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 5%', '同比 +0 个百分点'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [
              { id: 'other_income', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 60%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 32%', '同比 (1 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 30%', '同比 +3 个百分点'] },
          },
        },
      },
    },
    {
      key: 'alphabet-q3-fy23',
      company: 'Alphabet',
      period: 'Q3 FY23',
      periodNote: 'Ending Sep. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/alphabet-q3-fy23.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 76.7,
        notes: ['+11% Y/Y'],
        items: [
          {
            id: 'ad_revenue',
            label: 'Ad Revenue',
            value: 59.6,
            notes: ['+9% Y/Y'],
            children: [
              { id: 'search_advertising', label: 'Search advertising', value: 44.0, notes: ['+11% Y/Y'] },
              { id: 'youtube', label: 'YouTube', value: 8.0, notes: ['+12% Y/Y'] },
              {
                id: 'google_admob',
                label: 'Google AdMob',
                value: 7.7,
                notes: ['(3%) Y/Y', 'AdSense & Google Ad Manager'],
              },
            ],
          },
          {
            id: 'google_play_devices',
            label: 'Google Play, devices, and subscriptions',
            value: 8.3,
            notes: ['+21% Y/Y', 'Fitbit, Google Nest, Pixel, YouTube Premium & TV'],
          },
          {
            id: 'google_cloud',
            label: 'Google Cloud',
            value: 8.4,
            notes: ['+22% Y/Y', 'Workspace, Enterprise Android, Chrome OS, Other APIs'],
          },
          { id: 'other_revenue', label: 'Other', value: 0.3 },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenues',
          value: 33.2,
          items: [
            { id: 'cost_other', label: 'Other', value: 20.6 },
            { id: 'tac', label: 'TAC', value: 12.6 },
          ],
        },
        operatingExpenses: {
          total: 22.1,
          items: [
            { id: 'rnd', label: 'R&D', value: 11.3, notes: ['15% of revenue'] },
            { id: 'sm', label: 'S&M', value: 6.9, notes: ['9% of revenue'] },
            { id: 'ga', label: 'G&A', value: 4.0, notes: ['5% of revenue'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 1.5 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 0.1,
        items: [{ id: 'other_expense', label: 'Other', value: 0.1 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 43.5, notes: ['57% margin', '+2pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 21.3, notes: ['28% margin', '+3pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 19.7, notes: ['26% margin', '+6pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2023 财年第三季度',
          periodNote: '截至 2023 年 9 月',
          revenue: {
            notes: ['同比 +11%'],
            items: [
              {
                id: 'ad_revenue', label: '广告收入', notes: ['同比 +9%'],
                children: [
                  { id: 'search_advertising', label: '搜索广告', notes: ['同比 +11%'] },
                  { id: 'youtube', label: 'YouTube', notes: ['同比 +12%'] },
                  { id: 'google_admob', label: 'Google AdMob', notes: ['同比 (3%)', 'AdSense 与 Google 广告管理平台'] },
                ],
              },
              { id: 'google_play_devices', label: 'Google Play、设备与订阅', notes: ['同比 +21%', 'Fitbit、Google Nest、Pixel、YouTube Premium 与电视'] },
              { id: 'google_cloud', label: 'Google Cloud', notes: ['同比 +22%', 'Workspace、企业 Android、Chrome OS 与其他 API'] },
              { id: 'other_revenue', label: '其他' },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [
                { id: 'cost_other', label: '其他' },
                { id: 'tac', label: '流量获取成本' },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 15%'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 9%'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 5%'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [
              { id: 'other_expense', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 57%', '同比 +2 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 28%', '同比 +3 个百分点'] },
            net: { label: '净利润', notes: ['利润率 26%', '同比 +6 个百分点'] },
          },
        },
      },
    },
    {
      key: 'alphabet-q4-fy24',
      company: 'Alphabet',
      period: 'Q4 FY24',
      periodNote: 'Ending Dec. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/alphabet-q4-fy24.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 96.5,
        notes: ['+12% Y/Y'],
        items: [
          {
            id: 'ad_revenue',
            label: 'Ad Revenue',
            value: 72.5,
            notes: ['+11% Y/Y'],
            children: [
              { id: 'search_advertising', label: 'Search advertising', value: 54.0, notes: ['+13% Y/Y'] },
              { id: 'youtube', label: 'YouTube', value: 10.5, notes: ['+14% Y/Y'] },
              {
                id: 'google_admob',
                label: 'Google AdMob',
                value: 8.0,
                notes: ['(4%) Y/Y', 'AdSense & Google Ad Manager'],
              },
            ],
          },
          {
            id: 'google_play_devices',
            label: 'Google Play, devices, and subscriptions',
            value: 11.6,
            notes: ['+8% Y/Y', 'Fitbit, Google Nest, Pixel, YouTube Premium & TV'],
          },
          {
            id: 'google_cloud',
            label: 'Google Cloud',
            value: 12.0,
            notes: ['+30% Y/Y', 'Workspace, Enterprise Android, Chrome OS, Other APIs'],
          },
          { id: 'other_revenue', label: 'Other', value: 0.4 },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenues',
          value: 40.6,
          items: [
            { id: 'cost_other', label: 'Other', value: 25.8 },
            { id: 'tac', label: 'TAC', value: 14.8 },
          ],
        },
        operatingExpenses: {
          total: 24.9,
          items: [
            { id: 'rnd', label: 'R&D', value: 13.1, notes: ['14% of revenue', '(0pp) Y/Y'] },
            { id: 'sm', label: 'S&M', value: 7.4, notes: ['8% of revenue', '(1pp) Y/Y'] },
            { id: 'ga', label: 'G&A', value: 4.4, notes: ['5% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 5.7 },
      },
      otherIncome: {
        total: 1.3,
        items: [{ id: 'other_income', label: 'Other', value: 1.3 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 55.9, notes: ['58% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 31.0, notes: ['32% margin', '+5pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 26.5, notes: ['28% margin', '+4pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2024 财年第四季度',
          periodNote: '截至 2024 年 12 月',
          revenue: {
            notes: ['同比 +12%'],
            items: [
              {
                id: 'ad_revenue', label: '广告收入', notes: ['同比 +11%'],
                children: [
                  { id: 'search_advertising', label: '搜索广告', notes: ['同比 +13%'] },
                  { id: 'youtube', label: 'YouTube', notes: ['同比 +14%'] },
                  { id: 'google_admob', label: 'Google AdMob', notes: ['同比 (4%)', 'AdSense 与 Google 广告管理平台'] },
                ],
              },
              { id: 'google_play_devices', label: 'Google Play、设备与订阅', notes: ['同比 +8%', 'Fitbit、Google Nest、Pixel、YouTube Premium 与电视'] },
              { id: 'google_cloud', label: 'Google Cloud', notes: ['同比 +30%', 'Workspace、企业 Android、Chrome OS 与其他 API'] },
              { id: 'other_revenue', label: '其他' },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [
                { id: 'cost_other', label: '其他' },
                { id: 'tac', label: '流量获取成本' },
              ],
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 14%', '同比 (0 个百分点)'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 8%', '同比 (1 个百分点)'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 5%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 58%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 32%', '同比 +5 个百分点'] },
            net: { label: '净利润', notes: ['利润率 28%', '同比 +4 个百分点'] },
          },
        },
      },
    },
    {
      key: 'alphabet-q3-fy25',
      company: 'Alphabet',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/alphabet-q3-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 102.3,
        notes: ['+16% Y/Y', 'Source chart revenue detail sums to $102.4B due to rounding.'],
        items: [
          {
            id: 'ad_revenue',
            label: 'Ad Revenue',
            value: 74.2,
            notes: ['+13% Y/Y', 'Source chart advertising detail sums to $74.3B due to rounding.'],
            children: [
              { id: 'search_advertising', label: 'Search advertising', value: 56.6, notes: ['+15% Y/Y'] },
              { id: 'youtube', label: 'YouTube', value: 10.3, notes: ['+15% Y/Y'] },
              {
                id: 'google_admob',
                label: 'Google AdMob',
                value: 7.4,
                notes: ['(3%) Y/Y', 'AdSense & Google Ad Manager'],
              },
            ],
          },
          {
            id: 'google_play_devices',
            label: 'Google Play, devices, and subscriptions',
            value: 12.9,
            notes: ['+21% Y/Y', 'Fitbit, Google Nest, Pixel, YouTube Premium & TV'],
          },
          {
            id: 'google_cloud',
            label: 'Google Cloud',
            value: 15.2,
            notes: ['+34% Y/Y', 'Workspace, Enterprise Android, Chrome OS, Other APIs'],
          },
          { id: 'other_revenue', label: 'Other', value: 0.1 },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenues',
          value: 41.4,
          items: [
            { id: 'cost_other', label: 'Other', value: 26.5 },
            { id: 'tac', label: 'TAC', value: 14.9 },
          ],
        },
        operatingExpenses: {
          total: 29.7,
          notes: ['Source chart operating-expense detail sums to $29.8B due to rounding.'],
          items: [
            { id: 'rnd', label: 'R&D', value: 15.2, notes: ['15% of revenue', '+1pp Y/Y'] },
            { id: 'ga', label: 'G&A', value: 7.4, notes: ['7% of revenue', '+3pp Y/Y'] },
            { id: 'sm', label: 'S&M', value: 7.2, notes: ['7% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 9.0 },
      },
      otherIncome: {
        total: 12.8,
        items: [{ id: 'other_income', label: 'Other', value: 12.8 }],
      },
      otherExpenses: {
        total: 0,
        items: [],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 61.0, notes: ['60% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 31.2, notes: ['31% margin', '(2pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 35.0, notes: ['34% margin', '+4pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          revenue: {
            notes: ['同比 +16%', '来源图收入明细因四舍五入合计为 $102.4B。'],
            items: [
              {
                id: 'ad_revenue', label: '广告收入', notes: ['同比 +13%', '来源图广告收入明细因四舍五入合计为 $74.3B。'],
                children: [
                  { id: 'search_advertising', label: '搜索广告', notes: ['同比 +15%'] },
                  { id: 'youtube', label: 'YouTube', notes: ['同比 +15%'] },
                  { id: 'google_admob', label: 'Google AdMob', notes: ['同比 (3%)', 'AdSense 与 Google 广告管理平台'] },
                ],
              },
              { id: 'google_play_devices', label: 'Google Play、设备与订阅', notes: ['同比 +21%', 'Fitbit、Google Nest、Pixel、YouTube Premium 与电视'] },
              { id: 'google_cloud', label: 'Google Cloud', notes: ['同比 +34%', 'Workspace、企业 Android、Chrome OS 与其他 API'] },
              { id: 'other_revenue', label: '其他' },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [
                { id: 'cost_other', label: '其他' },
                { id: 'tac', label: '流量获取成本' },
              ],
            },
            operatingExpenses: {
              notes: ['来源图运营费用明细因四舍五入合计为 $29.8B。'],
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 15%', '同比 +1 个百分点'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 7%', '同比 +3 个百分点'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 7%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: {
            items: [{ id: 'other_income', label: '其他' }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 60%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 31%', '同比 (2 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 34%', '同比 +4 个百分点'] },
          },
        },
      },
    },
    {
      key: 'alphabet-q4-fy22',
      company: 'Alphabet',
      period: 'Q4 FY22',
      periodNote: 'Ending Dec. 2022',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/alphabet-q4-fy22.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 76.0,
        notes: ['+1% Y/Y'],
        items: [
          {
            id: 'ad_revenue',
            label: 'Ad Revenue',
            value: 59.0,
            notes: [
              '(4%) Y/Y',
              'Source chart advertising detail sums to $59.1B due to rounding.',
            ],
            children: [
              { id: 'search_advertising', label: 'Search advertising', value: 42.6, notes: ['(2%) Y/Y'] },
              { id: 'youtube', label: 'YouTube', value: 8.0, notes: ['(8%) Y/Y'] },
              {
                id: 'google_admob',
                label: 'Google AdMob',
                value: 8.5,
                notes: ['(9%) Y/Y', 'AdSense & Google Ad Manager'],
              },
            ],
          },
          {
            id: 'google_play_devices',
            label: 'Google Play, devices, and subscriptions',
            value: 8.8,
            notes: ['+8% Y/Y', 'Fitbit, Google Nest, Pixel, YouTube Premium & TV'],
          },
          {
            id: 'google_cloud',
            label: 'Google Cloud',
            value: 7.3,
            notes: ['+32% Y/Y', 'Workspace, Enterprise Android, Chrome OS, Other APIs'],
          },
          { id: 'other_revenue', label: 'Other', value: 0.9 },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenues',
          value: 35.3,
          items: [
            { id: 'cost_other', label: 'Others', value: 22.4 },
            { id: 'tac', label: 'TAC', value: 12.9 },
          ],
        },
        operatingExpenses: {
          total: 22.5,
          notes: ['Source chart operating-expense detail sums to $22.6B due to rounding.'],
          items: [
            { id: 'rnd', label: 'R&D', value: 10.3, notes: ['14% of revenue'] },
            { id: 'sm', label: 'S&M', value: 7.2, notes: ['9% of revenue'] },
            { id: 'ga', label: 'G&A', value: 5.1, notes: ['7% of revenue'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 3.5 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 1.0,
        items: [{ id: 'other_expense', label: 'Other', value: 1.0 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross Profit', value: 40.7, notes: ['54% margin', '(2pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 18.2, notes: ['24% margin', '(5pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 13.6, notes: ['18% margin', '(9pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2022 财年第四季度',
          periodNote: '截至 2022 年 12 月',
          revenue: {
            notes: ['同比 +1%'],
            items: [
              {
                id: 'ad_revenue',
                label: '广告收入',
                notes: [
                  '同比 (4%)',
                  '来源图广告收入明细因四舍五入合计为 $59.1B。',
                ],
                children: [
                  { id: 'search_advertising', label: '搜索广告', notes: ['同比 (2%)'] },
                  { id: 'youtube', label: 'YouTube', notes: ['同比 (8%)'] },
                  { id: 'google_admob', label: 'Google AdMob', notes: ['同比 (9%)', 'AdSense 与 Google 广告管理平台'] },
                ],
              },
              { id: 'google_play_devices', label: 'Google Play、设备与订阅', notes: ['同比 +8%', 'Fitbit、Google Nest、Pixel、YouTube Premium 与电视'] },
              { id: 'google_cloud', label: 'Google Cloud', notes: ['同比 +32%', 'Workspace、企业 Android、Chrome OS 与其他 API'] },
              { id: 'other_revenue', label: '其他' },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [
                { id: 'cost_other', label: '其他' },
                { id: 'tac', label: '流量获取成本' },
              ],
            },
            operatingExpenses: {
              notes: ['来源图运营费用明细因四舍五入合计为 $22.6B。'],
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 14%'] },
                { id: 'sm', label: '销售与市场', notes: ['占收入 9%'] },
                { id: 'ga', label: '管理费用', notes: ['占收入 7%'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherExpenses: {
            items: [
              { id: 'other_expense', label: '其他' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 54%', '同比 (2 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 24%', '同比 (5 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 18%', '同比 (9 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
