/* Company-profile SSOT record. Profile fields only — period financials stay
 * in data/income-statements/. Format: data/schema.md. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push(
    {
      key: 'unity',
      name: 'Unity',
      legalName: 'Unity Software Inc.',
      ticker: 'U',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 17950000000,
        asOf: '2026-10-24',
        source: 'CompaniesMarketCap',
        sourceUrl: 'https://companiesmarketcap.com/unity-software/marketcap/',
      },
      sector: 'Information Technology',
      industry: 'Real-time 3D development platform, game engine, and mobile advertising technology',
      founded: '2004',
      headquarters: 'San Francisco, California, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://unity.com/',
      description:
        'Unity provides a platform for creating and operating interactive, real-time 2D and 3D content, combining the Unity game engine and developer tools with advertising and monetization solutions for game and app developers.',
      sourceUrls: [
        'https://unity.com/our-company',
        'https://investors.unity.com/',
        'https://companiesmarketcap.com/unity-software/marketcap/',
      ],
      i18n: {
        zh: {
          displayName: 'Unity',
          sector: '信息技术',
          industry: '实时 3D 开发平台、游戏引擎和移动广告技术',
          headquarters: '美国加利福尼亚州旧金山',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Unity 提供用于创作和运营交互式实时 2D、3D 内容的平台，将 Unity 游戏引擎和开发者工具与面向游戏和应用开发者的广告及变现方案结合在一起。',
        },
      },
    }
  );
})(window);
