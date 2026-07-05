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
      key: 'roblox',
      name: 'Roblox',
      legalName: 'Roblox Corporation',
      ticker: 'RBLX',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 36894384730,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/rblx/market-cap/',
      },
      sector: 'Communication Services',
      industry: 'User-generated gaming, immersive experiences, virtual economy, and digital advertising',
      founded: '2004',
      headquarters: 'San Mateo, California, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.roblox.com/',
      description:
        'Roblox operates a global immersive platform where users discover, play, and create multiplayer experiences, supported by a developer community using Roblox Studio and monetized through bookings, virtual items, subscriptions, and advertising.',
      sourceUrls: [
        'https://about.roblox.com/',
        'https://ir.roblox.com/overview/default.aspx',
        'https://ir.roblox.com/financials/quarterly-results/default.aspx',
        'https://ir.roblox.com/financials/sec-filings/default.aspx',
      ],
      i18n: {
        zh: {
          displayName: 'Roblox',
          sector: '通信服务',
          industry: '用户生成游戏、沉浸式体验、虚拟经济与数字广告',
          headquarters: '美国加利福尼亚州圣马特奥',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Roblox 运营全球沉浸式平台，用户在其中发现、游玩并创作多人体验，平台由使用 Roblox Studio 的开发者社区支撑，并通过预订额、虚拟物品、订阅和广告变现。',
        },
      },
    }
  );
})(window);
