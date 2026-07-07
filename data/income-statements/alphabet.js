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
    }
  );
})(window);
