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
      key: 'take-two',
      name: 'Take-Two',
      legalName: 'Take-Two Interactive Software, Inc.',
      ticker: 'TTWO',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 46820000000,
        asOf: '2026-07-09',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/ttwo/market-cap/',
      },
      sector: 'Communication Services',
      industry: 'Interactive entertainment and video game publishing',
      founded: '1993',
      headquarters: 'New York, New York, United States',
      fiscalYearEnd: 'March 31',
      website: 'https://www.take2games.com/',
      description:
        'Take-Two Interactive develops, publishes, and markets interactive entertainment through labels including Rockstar Games, 2K, and Zynga across console, PC, and mobile platforms.',
      sourceUrls: [
        'https://www.take2games.com/',
        'https://www.take2games.com/ir/news/take-two-interactive-software-inc-reports-results-fiscal-third-4',
        'https://ir.take2games.com/static-files/3ebfa319-1c28-4759-8d87-cd7abe81556f',
        'https://stockanalysis.com/stocks/ttwo/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: 'Take-Two',
          sector: '通信服务',
          industry: '互动娱乐与电子游戏发行',
          headquarters: '美国纽约州纽约市',
          fiscalYearEnd: '3 月 31 日',
          description:
            'Take-Two Interactive 通过 Rockstar Games、2K 与 Zynga 等厂牌开发、发行和营销互动娱乐内容，覆盖主机、PC 和移动平台。',
        },
      },
    }
  );
})(window);
