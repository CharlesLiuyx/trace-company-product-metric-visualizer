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
      key: 'flutter',
      name: 'Flutter Entertainment',
      legalName: 'Flutter Entertainment plc',
      aliases: ['Flutter'],
      ticker: 'FLUT',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 18620000000,
        asOf: '2026-07-07',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/flut/market-cap/',
      },
      sector: 'Consumer Discretionary',
      industry: 'Online sports betting and iGaming',
      founded: '2016',
      headquarters: 'Dublin, Ireland',
      fiscalYearEnd: 'December 31',
      website: 'https://flutter.com/',
      description:
        'Flutter Entertainment is a global online sports betting and iGaming operator. Its business is organized around FanDuel in the United States and Flutter International across the rest of the world, with a portfolio of locally led betting and gaming brands.',
      sourceUrls: [
        'https://flutter.com/',
        'https://flutter.com/our-business/',
        'https://flutter.com/contact-us/',
        'https://flutter.com/media/hdshhrmb/q4-2025-earnings-release.pdf',
        'https://stockanalysis.com/stocks/flut/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: 'Flutter Entertainment',
          sector: '非必需消费品',
          industry: '在线体育博彩与 iGaming',
          headquarters: '爱尔兰都柏林',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Flutter Entertainment 是一家全球在线体育博彩与 iGaming 运营商。其业务分为美国的 FanDuel 和覆盖其他市场的 Flutter International，并拥有一组在地化运营的博彩与游戏品牌。',
        },
      },
    }
  );
})(window);
