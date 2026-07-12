/* Company-profile SSOT record. Period financials stay in data/income-statements/. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push({
    key: 'american',
    name: 'American Airlines',
    legalName: 'American Airlines Group Inc.',
    aliases: ['American', 'American Airlines Group', 'AAL'],
    ticker: 'AAL',
    exchange: 'NASDAQ',
    marketCap: {
      valueUsd: 11210000000,
      asOf: '2026-07-10',
      source: 'Stock Analysis',
      sourceUrl: 'https://stockanalysis.com/stocks/aal/market-cap/',
    },
    sector: 'Industrials',
    industry: 'Airlines',
    founded: '1926',
    headquarters: 'Fort Worth, Texas, United States',
    fiscalYearEnd: 'December 31',
    website: 'https://www.aa.com/',
    description:
      'American Airlines operates a global passenger and cargo airline network through hubs across the United States.',
    sourceUrls: [
      'https://americanairlines.gcs-web.com/financial-tear-sheet',
      'https://americanairlines.gcs-web.com/node/43271',
      'https://stockanalysis.com/stocks/aal/market-cap/',
    ],
    i18n: {
      zh: {
        displayName: '美国航空',
        sector: '工业',
        industry: '航空公司',
        headquarters: '美国得克萨斯州沃思堡',
        fiscalYearEnd: '12 月 31 日',
        description: '美国航空通过遍布美国的枢纽运营全球客运与货运航空网络。',
      },
    },
  });
})(window);
