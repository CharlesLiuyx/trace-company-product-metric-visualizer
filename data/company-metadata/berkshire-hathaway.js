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
      key: 'berkshire-hathaway',
      name: 'Berkshire Hathaway',
      legalName: 'Berkshire Hathaway Inc.',
      ticker: 'BRK.A / BRK.B',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 1070000000000,
        asOf: '2026-06-26',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/brk.b/market-cap/',
      },
      sector: 'Financials',
      industry: 'Diversified holding company, insurance, freight rail transportation, utilities and energy, manufacturing, services, retailing, and investing',
      founded: '1839',
      headquarters: 'Omaha, Nebraska, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.berkshirehathaway.com/',
      description:
        'Berkshire Hathaway is a diversified holding company led through decentralized operating businesses and investments, with major operations in insurance, BNSF railroad, Berkshire Hathaway Energy, manufacturing, McLane, Pilot, services, retailing, and a large public-equity portfolio.',
      sourceUrls: [
        'https://www.berkshirehathaway.com/',
        'https://www.berkshirehathaway.com/reports.html',
        'https://www.berkshirehathaway.com/subs/sublinks.html',
        'https://stockanalysis.com/stocks/brk.b/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: '伯克希尔·哈撒韦',
          sector: '金融',
          industry: '多元化控股公司、保险、货运铁路、公用事业与能源、制造、服务、零售和投资',
          headquarters: '美国内布拉斯加州奥马哈',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Berkshire Hathaway 是一家多元化控股公司，通过去中心化运营业务和投资组合经营，主要业务包括保险、BNSF 铁路、Berkshire Hathaway Energy、制造、McLane、Pilot、服务、零售和大型公开股票投资组合。',
        },
      },
    }
  );
})(window);
