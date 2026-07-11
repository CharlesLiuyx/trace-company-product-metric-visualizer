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
      key: 'ferrari',
      name: 'Ferrari',
      legalName: 'Ferrari N.V.',
      aliases: ['Ferrari N.V.', 'Ferrari'],
      ticker: 'RACE',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 65760000000,
        asOf: '2026-07-08',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/race/statistics/',
      },
      sector: 'Consumer Discretionary',
      industry: 'Luxury performance automobiles',
      founded: '1947',
      headquarters: 'Maranello, Emilia-Romagna, Italy',
      fiscalYearEnd: 'December 31',
      website: 'https://www.ferrari.com/',
      description:
        'Ferrari designs, engineers, manufactures, and sells luxury high-performance sports cars, while also operating racing, after-sales, licensing, and lifestyle activities centered on the Ferrari brand.',
      sourceUrls: [
        'https://www.ferrari.com/en-EN/corporate/financial-documents',
        'https://www.ferrari.com/en-EN/corporate/key-metrics',
        'https://stockanalysis.com/stocks/race/statistics/',
      ],
      i18n: {
        zh: {
          displayName: '法拉利',
          sector: '非必需消费品',
          industry: '豪华高性能汽车',
          headquarters: '意大利艾米利亚-罗马涅大区马拉内罗',
          fiscalYearEnd: '12 月 31 日',
          description:
            '法拉利设计、工程开发、制造和销售豪华高性能跑车，同时围绕法拉利品牌经营赛车、售后、授权及生活方式业务。',
        },
      },
    }
  );
})(window);
